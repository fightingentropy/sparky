import XCTest
@testable import Sparky

final class ExamProgressSyncTests: XCTestCase {
    @MainActor
    func testImportsRemoteNumericVariantIntoNativeTestID() async throws {
        let fixture = try makeFixture()
        let test = try XCTUnwrap(fixture.catalog.exams.first?.tests.first)
        let remote = MockExamProgressRemote(
            collection: RemoteExamProgressCollection(
                progress: [
                    fixture.examID: RemoteExamProgress(
                        variants: [
                            test.index: RemoteExamVariantProgress(
                                answers: [1: .a, 2: .b],
                                submitted: true
                            ),
                            9_999: RemoteExamVariantProgress(answers: [1: .d], submitted: true)
                        ],
                        current: test.index,
                        updatedAt: date("2026-07-22T12:00:00Z")
                    )
                ]
            )
        )
        let service = ExamProgressSyncService(remote: remote)

        let result = try await service.synchronize(
            store: fixture.store,
            catalog: fixture.catalog,
            bearerToken: "token"
        )

        let imported = fixture.store.progress(examID: fixture.examID, testID: test.id)
        XCTAssertEqual(imported.answers, [1: .a, 2: .b])
        XCTAssertTrue(imported.submitted)
        XCTAssertEqual(result.importedVariants, 1)
        XCTAssertEqual(result.uploadedVariants, 0)
        let updates = await remote.recordedUpdates()
        XCTAssertTrue(updates.isEmpty)
    }

    @MainActor
    func testLocalVariantUsesCatalogIndexWhenUploaded() async throws {
        let localDate = date("2026-07-22T14:00:00Z")
        let fixture = try makeFixture(now: { localDate })
        let test = try XCTUnwrap(fixture.catalog.exams.first?.tests.first)
        fixture.store.answer(.c, for: 7, examID: fixture.examID, testID: test.id)
        let revision = fixture.store.localMutationRevision

        let remote = MockExamProgressRemote(collection: .init(progress: [:]))
        let service = ExamProgressSyncService(remote: remote)
        let result = try await service.synchronize(
            store: fixture.store,
            catalog: fixture.catalog,
            bearerToken: "token"
        )

        let updates = await remote.recordedUpdates()
        let update = try XCTUnwrap(updates.first)
        XCTAssertEqual(update.examID, fixture.examID)
        XCTAssertEqual(update.nativeTestID, test.id)
        XCTAssertEqual(update.variantIndex, test.index)
        XCTAssertEqual(update.current, test.index)
        XCTAssertEqual(update.progress.answers, [7: .c])
        XCTAssertEqual(result.uploadedVariants, 1)
        XCTAssertEqual(fixture.store.localMutationRevision, revision, "Sync must not recursively schedule itself")
        XCTAssertEqual(fixture.store.syncMetadata[fixture.examID]?[test.id]?.isDirty, false)
    }

    @MainActor
    func testConflictPreservesDisjointAnswersAndUsesNewestSideForSameQuestion() async throws {
        let localDate = date("2026-07-21T12:00:00Z")
        let fixture = try makeFixture(now: { localDate })
        let test = try XCTUnwrap(fixture.catalog.exams.first?.tests.first)
        fixture.store.answer(.c, for: 2, examID: fixture.examID, testID: test.id)
        fixture.store.answer(.d, for: 3, examID: fixture.examID, testID: test.id)
        _ = fixture.store.toggleFlag(3, examID: fixture.examID, testID: test.id)

        let remote = MockExamProgressRemote(
            collection: .init(
                progress: [
                    fixture.examID: RemoteExamProgress(
                        variants: [
                            test.index: RemoteExamVariantProgress(
                                answers: [1: .a, 2: .b],
                                submitted: true
                            )
                        ],
                        current: test.index,
                        updatedAt: date("2026-07-22T12:00:00Z")
                    )
                ]
            )
        )
        let service = ExamProgressSyncService(remote: remote)

        let result = try await service.synchronize(
            store: fixture.store,
            catalog: fixture.catalog,
            bearerToken: "token"
        )

        let merged = fixture.store.progress(examID: fixture.examID, testID: test.id)
        XCTAssertEqual(merged.answers, [1: .a, 2: .b, 3: .d])
        XCTAssertTrue(merged.submitted)
        XCTAssertTrue(merged.flaggedQuestions.contains(3), "Flags remain device-local")
        XCTAssertEqual(result.mergedConflicts, 1)
        XCTAssertEqual(result.uploadedVariants, 1)
        let updates = await remote.recordedUpdates()
        XCTAssertEqual(updates.first?.progress.answers, merged.answers)
    }

    @MainActor
    func testNewerLocalChoiceWinsSameQuestionConflict() async throws {
        let localDate = date("2026-07-23T12:00:00Z")
        let fixture = try makeFixture(now: { localDate })
        let test = try XCTUnwrap(fixture.catalog.exams.first?.tests.first)
        fixture.store.answer(.c, for: 2, examID: fixture.examID, testID: test.id)

        let remote = MockExamProgressRemote(
            collection: .init(
                progress: [
                    fixture.examID: RemoteExamProgress(
                        variants: [
                            test.index: RemoteExamVariantProgress(answers: [2: .b], submitted: true)
                        ],
                        current: test.index,
                        updatedAt: date("2026-07-22T12:00:00Z")
                    )
                ]
            )
        )
        let service = ExamProgressSyncService(remote: remote)
        _ = try await service.synchronize(
            store: fixture.store,
            catalog: fixture.catalog,
            bearerToken: "token"
        )

        let merged = fixture.store.progress(examID: fixture.examID, testID: test.id)
        XCTAssertEqual(merged.answers[2], .c)
        XCTAssertFalse(merged.submitted)
    }

    @MainActor
    func testOfflineFetchLeavesLocalProgressUntouched() async throws {
        let fixture = try makeFixture()
        let test = try XCTUnwrap(fixture.catalog.exams.first?.tests.first)
        fixture.store.answer(.d, for: 4, examID: fixture.examID, testID: test.id)
        let before = fixture.store.syncSnapshot()
        let remote = MockExamProgressRemote(
            collection: .init(progress: [:]),
            fetchError: .transport("offline")
        )
        let service = ExamProgressSyncService(remote: remote)

        do {
            _ = try await service.synchronize(
                store: fixture.store,
                catalog: fixture.catalog,
                bearerToken: "token"
            )
            XCTFail("Expected transport error")
        } catch let error as ExamProgressSyncError {
            XCTAssertEqual(error, .transport("offline"))
        }

        XCTAssertEqual(fixture.store.syncSnapshot(), before)
        let updates = await remote.recordedUpdates()
        XCTAssertTrue(updates.isEmpty)
    }

    @MainActor
    func testFailedUploadKeepsMergedVariantDirtyForRetry() async throws {
        let fixture = try makeFixture()
        let test = try XCTUnwrap(fixture.catalog.exams.first?.tests.first)
        fixture.store.answer(.a, for: 1, examID: fixture.examID, testID: test.id)
        let remote = MockExamProgressRemote(
            collection: .init(progress: [:]),
            putError: .transport("connection lost")
        )
        let service = ExamProgressSyncService(remote: remote)

        do {
            _ = try await service.synchronize(
                store: fixture.store,
                catalog: fixture.catalog,
                bearerToken: "token"
            )
            XCTFail("Expected upload error")
        } catch let error as ExamProgressSyncError {
            XCTAssertEqual(error, .transport("connection lost"))
        }

        XCTAssertEqual(fixture.store.progress(examID: fixture.examID, testID: test.id).answers, [1: .a])
        XCTAssertEqual(fixture.store.syncMetadata[fixture.examID]?[test.id]?.isDirty, true)
    }

    @MainActor
    func testDoesNotSendAPlannedVariantThatChangedDuringEarlierUpload() async throws {
        let fixture = try makeFixture()
        let tests = Array(try XCTUnwrap(fixture.catalog.exams.first).tests.prefix(2))
        XCTAssertEqual(tests.count, 2)
        fixture.store.answer(.a, for: 1, examID: fixture.examID, testID: tests[0].id)
        fixture.store.answer(.b, for: 1, examID: fixture.examID, testID: tests[1].id)

        let store = fixture.store
        let examID = fixture.examID
        let secondTestID = tests[1].id
        let remote = MockExamProgressRemote(
            collection: .init(progress: [:]),
            onPut: { update in
                guard update.nativeTestID == tests[0].id else { return }
                await MainActor.run {
                    store.answer(.d, for: 1, examID: examID, testID: secondTestID)
                }
            }
        )

        let result = try await ExamProgressSyncService(remote: remote).synchronize(
            store: fixture.store,
            catalog: fixture.catalog,
            bearerToken: "token"
        )

        let updates = await remote.recordedUpdates()
        XCTAssertEqual(updates.map(\.nativeTestID), [tests[0].id])
        XCTAssertEqual(result.uploadedVariants, 1)
        XCTAssertEqual(fixture.store.progress(examID: examID, testID: secondTestID).answers, [1: .d])
        XCTAssertEqual(fixture.store.syncMetadata[examID]?[secondTestID]?.isDirty, true)
    }

    @MainActor
    func testEditDuringItsOwnPutIsRebasedAfterServerWrite() async throws {
        let clock = TestClock(date("2026-07-22T12:00:00Z"))
        let fixture = try makeFixture(now: { clock.value })
        let test = try XCTUnwrap(fixture.catalog.exams.first?.tests.first)
        fixture.store.answer(.a, for: 1, examID: fixture.examID, testID: test.id)

        let store = fixture.store
        let examID = fixture.examID
        let editDate = date("2026-07-22T12:00:05Z")
        let remote = MockExamProgressRemote(
            collection: .init(progress: [:]),
            onPut: { _ in
                await MainActor.run {
                    clock.value = editDate
                    store.answer(.d, for: 1, examID: examID, testID: test.id)
                }
            }
        )

        _ = try await ExamProgressSyncService(remote: remote).synchronize(
            store: fixture.store,
            catalog: fixture.catalog,
            bearerToken: "token"
        )

        XCTAssertEqual(fixture.store.progress(examID: examID, testID: test.id).answers, [1: .d])
        let metadata = try XCTUnwrap(fixture.store.syncMetadata[examID]?[test.id])
        XCTAssertTrue(metadata.isDirty)
        XCTAssertEqual(metadata.modifiedAt, editDate)
    }

    @MainActor
    func testLegacyProgressIsMigratedAsDirty() throws {
        let suiteName = "ExamProgressSyncTests.legacy.\(UUID().uuidString)"
        let defaults = try XCTUnwrap(UserDefaults(suiteName: suiteName))
        defaults.removePersistentDomain(forName: suiteName)
        defer { defaults.removePersistentDomain(forName: suiteName) }

        let storageKey = "legacy-progress"
        let progress = ExamVariantProgress(answers: [1: .b], submitted: false)
        let payload = LegacyPayload(
            version: 1,
            exams: ["18th-edition": ExamProgress(variants: ["quiz-29703": progress])]
        )
        defaults.set(try JSONEncoder().encode(payload), forKey: storageKey)

        let store = ProgressStore(defaults: defaults, storageKey: storageKey)
        let metadata = try XCTUnwrap(store.syncMetadata["18th-edition"]?["quiz-29703"])
        XCTAssertTrue(metadata.isDirty)
        XCTAssertFalse(metadata.isDeleted)
        XCTAssertEqual(store.progress(examID: "18th-edition", testID: "quiz-29703").answers, [1: .b])
    }

    @MainActor
    func testAccountNamespacesPreventCrossAccountProgressLeak() throws {
        let suiteName = "ExamProgressSyncTests.accounts.\(UUID().uuidString)"
        let defaults = try XCTUnwrap(UserDefaults(suiteName: suiteName))
        defaults.removePersistentDomain(forName: suiteName)
        defer { defaults.removePersistentDomain(forName: suiteName) }

        let store = ProgressStore(defaults: defaults, storageKey: "account-progress")
        store.answer(.a, for: 1, examID: "18th-edition", testID: "quiz-29703")

        store.bind(toAccountID: "account-a")
        XCTAssertEqual(store.progress(examID: "18th-edition", testID: "quiz-29703").answers, [1: .a])

        store.bind(toAccountID: "account-b")
        XCTAssertTrue(store.exams.isEmpty, "Account B must not see or upload account A's cache")
        store.answer(.b, for: 1, examID: "18th-edition", testID: "quiz-29703")

        store.bind(toAccountID: "account-a")
        XCTAssertEqual(store.progress(examID: "18th-edition", testID: "quiz-29703").answers, [1: .a])

        store.bind(toAccountID: "account-b")
        XCTAssertEqual(store.progress(examID: "18th-edition", testID: "quiz-29703").answers, [1: .b])

        store.bind(toAccountID: nil)
        XCTAssertTrue(store.exams.isEmpty, "Adopted anonymous data must have been moved, not copied")
    }

    @MainActor
    func testLastBoundAccountCacheSurvivesOfflineColdLaunchUntilExplicitLogout() throws {
        let suiteName = "ExamProgressSyncTests.cold-launch.\(UUID().uuidString)"
        let defaults = try XCTUnwrap(UserDefaults(suiteName: suiteName))
        defaults.removePersistentDomain(forName: suiteName)
        defer { defaults.removePersistentDomain(forName: suiteName) }

        let key = "offline-account-progress"
        let firstLaunch = ProgressStore(defaults: defaults, storageKey: key)
        firstLaunch.answer(.c, for: 6, examID: "18th-edition", testID: "quiz-29703")
        firstLaunch.bind(toAccountID: "account-a")

        // This is the state available before `/auth/me` returns. A temporary
        // network failure must not drop the user into the anonymous cache.
        let offlineRelaunch = ProgressStore(defaults: defaults, storageKey: key)
        XCTAssertEqual(offlineRelaunch.boundAccountID, "account-a")
        XCTAssertEqual(
            offlineRelaunch.progress(examID: "18th-edition", testID: "quiz-29703").answers,
            [6: .c]
        )

        offlineRelaunch.bind(toAccountID: nil)
        let afterExplicitLogout = ProgressStore(defaults: defaults, storageKey: key)
        XCTAssertNil(afterExplicitLogout.boundAccountID)
        XCTAssertTrue(afterExplicitLogout.exams.isEmpty)
    }

    @MainActor
    func testRemoteRowsBeforeWebCorrectionCutoffsAreIgnored() async throws {
        let fixture = try makeFixture()
        let commonExam = try XCTUnwrap(fixture.catalog.exam(id: "18th-edition"))
        let periodicExam = try XCTUnwrap(fixture.catalog.exam(id: "periodic-inspection"))
        let commonTest = try XCTUnwrap(commonExam.tests.first)
        let periodicTest = try XCTUnwrap(periodicExam.tests.first)
        let stale = RemoteExamVariantProgress(answers: [1: .a], submitted: true)
        let remote = MockExamProgressRemote(
            collection: .init(
                progress: [
                    commonExam.id: RemoteExamProgress(
                        variants: [commonTest.index: stale],
                        current: commonTest.index,
                        updatedAt: date("2026-05-26T21:00:59Z")
                    ),
                    periodicExam.id: RemoteExamProgress(
                        variants: [periodicTest.index: stale],
                        current: periodicTest.index,
                        updatedAt: date("2026-06-06T23:59:59Z")
                    )
                ]
            )
        )

        let result = try await ExamProgressSyncService(remote: remote).synchronize(
            store: fixture.store,
            catalog: fixture.catalog,
            bearerToken: "token"
        )

        XCTAssertEqual(result.importedVariants, 0)
        XCTAssertEqual(result.uploadedVariants, 0)
        XCTAssertTrue(fixture.store.exams.isEmpty)
    }

    private struct Fixture {
        let store: ProgressStore
        let catalog: ExamCatalog
        let examID: String
    }

    @MainActor
    private func makeFixture(now: @escaping () -> Date = Date.init) throws -> Fixture {
        let suiteName = "ExamProgressSyncTests.\(UUID().uuidString)"
        let defaults = try XCTUnwrap(UserDefaults(suiteName: suiteName))
        defaults.removePersistentDomain(forName: suiteName)
        addTeardownBlock { defaults.removePersistentDomain(forName: suiteName) }

        let content = try ContentStore(contentDirectory: contentDirectory)
        let exam = try XCTUnwrap(content.catalog.exams.first)
        return Fixture(
            store: ProgressStore(defaults: defaults, storageKey: "progress", now: now),
            catalog: content.catalog,
            examID: exam.id
        )
    }

    private var contentDirectory: URL {
        URL(fileURLWithPath: #filePath)
            .deletingLastPathComponent()
            .deletingLastPathComponent()
            .appendingPathComponent("Sparky/Resources/Content", isDirectory: true)
    }

    private func date(_ value: String) -> Date {
        ISO8601DateFormatter().date(from: value)!
    }
}

private struct LegacyPayload: Encodable {
    let version: Int
    let exams: [String: ExamProgress]
}

private actor MockExamProgressRemote: ExamProgressRemote {
    private let collection: RemoteExamProgressCollection
    private let fetchError: ExamProgressSyncError?
    private let putError: ExamProgressSyncError?
    private let onPut: (@Sendable (RemoteExamProgressUpdate) async -> Void)?
    private var updates: [RemoteExamProgressUpdate] = []

    init(
        collection: RemoteExamProgressCollection,
        fetchError: ExamProgressSyncError? = nil,
        putError: ExamProgressSyncError? = nil,
        onPut: (@Sendable (RemoteExamProgressUpdate) async -> Void)? = nil
    ) {
        self.collection = collection
        self.fetchError = fetchError
        self.putError = putError
        self.onPut = onPut
    }

    func fetchAll(bearerToken: String) async throws -> RemoteExamProgressCollection {
        if let fetchError { throw fetchError }
        return collection
    }

    func put(_ update: RemoteExamProgressUpdate, bearerToken: String) async throws {
        updates.append(update)
        await onPut?(update)
        if let putError { throw putError }
    }

    func recordedUpdates() -> [RemoteExamProgressUpdate] {
        updates
    }
}

@MainActor
private final class TestClock {
    var value: Date

    init(_ value: Date) {
        self.value = value
    }
}

final class HTTPExamProgressRemoteTests: XCTestCase {
    override func tearDown() {
        ProgressURLProtocol.requestHandler = nil
        super.tearDown()
    }

    func testAuthenticatedGetAndPutMatchWebContract() async throws {
        let configuration = URLSessionConfiguration.ephemeral
        configuration.protocolClasses = [ProgressURLProtocol.self]
        let session = URLSession(configuration: configuration)
        let remote = HTTPExamProgressRemote(
            baseURL: URL(string: "https://example.test/api/")!,
            session: session
        )

        ProgressURLProtocol.requestHandler = { request in
            XCTAssertEqual(request.httpMethod, "GET")
            XCTAssertEqual(request.url?.absoluteString, "https://example.test/api/exams/progress")
            XCTAssertEqual(request.value(forHTTPHeaderField: "Authorization"), "Bearer secret-token")
            let body = #"{"progress":{"18th-edition":{"variants":{"0":{"answers":{"1":"A"},"submitted":true}},"current":0,"updatedAt":"2026-07-22 12:34:56"}}}"#.data(using: .utf8)!
            return (200, body)
        }

        let fetched = try await remote.fetchAll(bearerToken: "secret-token")
        XCTAssertEqual(fetched.progress["18th-edition"]?.variants[0]?.answers, [1: .a])
        XCTAssertNotNil(fetched.progress["18th-edition"]?.updatedAt)

        ProgressURLProtocol.requestHandler = { request in
            XCTAssertEqual(request.httpMethod, "PUT")
            XCTAssertEqual(request.url?.absoluteString, "https://example.test/api/exams/progress/18th-edition")
            XCTAssertEqual(request.value(forHTTPHeaderField: "Authorization"), "Bearer secret-token")
            let body = try XCTUnwrap(request.bodyData)
            let object = try XCTUnwrap(JSONSerialization.jsonObject(with: body) as? [String: Any])
            XCTAssertEqual(object["current"] as? Int, 0)
            let variant = try XCTUnwrap(object["variant"] as? [String: Any])
            XCTAssertEqual(variant["index"] as? Int, 0)
            XCTAssertEqual(variant["submitted"] as? Bool, false)
            XCTAssertEqual((variant["answers"] as? [String: String])?["2"], "D")
            return (200, #"{"ok":true}"#.data(using: .utf8)!)
        }

        try await remote.put(
            RemoteExamProgressUpdate(
                examID: "18th-edition",
                nativeTestID: "quiz-29703",
                current: 0,
                variantIndex: 0,
                progress: RemoteExamVariantProgress(answers: [2: .d], submitted: false)
            ),
            bearerToken: "secret-token"
        )
    }
}

private final class ProgressURLProtocol: URLProtocol {
    static var requestHandler: ((URLRequest) throws -> (status: Int, data: Data))?

    override class func canInit(with request: URLRequest) -> Bool { true }
    override class func canonicalRequest(for request: URLRequest) -> URLRequest { request }

    override func startLoading() {
        guard let handler = Self.requestHandler else {
            client?.urlProtocol(self, didFailWithError: URLError(.badServerResponse))
            return
        }
        do {
            let result = try handler(request)
            let response = HTTPURLResponse(
                url: request.url!,
                statusCode: result.status,
                httpVersion: "HTTP/1.1",
                headerFields: ["Content-Type": "application/json"]
            )!
            client?.urlProtocol(self, didReceive: response, cacheStoragePolicy: .notAllowed)
            client?.urlProtocol(self, didLoad: result.data)
            client?.urlProtocolDidFinishLoading(self)
        } catch {
            client?.urlProtocol(self, didFailWithError: error)
        }
    }

    override func stopLoading() {}
}

private extension URLRequest {
    var bodyData: Data? {
        if let httpBody { return httpBody }
        guard let stream = httpBodyStream else { return nil }
        stream.open()
        defer { stream.close() }
        var data = Data()
        let buffer = UnsafeMutablePointer<UInt8>.allocate(capacity: 4_096)
        defer { buffer.deallocate() }
        while stream.hasBytesAvailable {
            let count = stream.read(buffer, maxLength: 4_096)
            if count < 0 { return nil }
            if count == 0 { break }
            data.append(buffer, count: count)
        }
        return data
    }
}
