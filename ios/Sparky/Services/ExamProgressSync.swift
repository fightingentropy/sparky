import Foundation

// MARK: - Web progress contract

/// The web API stores every test under its zero-based variant index. Native
/// test identifiers are intentionally not sent over the wire; the bundled
/// exam catalog is the source of truth for mapping an `ExamTestSummary.id` to
/// its stable `index`.
struct RemoteExamVariantProgress: Equatable, Sendable {
    let answers: [Int: ExamChoice]
    let submitted: Bool

    var isEmpty: Bool { answers.isEmpty && !submitted }
}

struct RemoteExamProgress: Equatable, Sendable {
    let variants: [Int: RemoteExamVariantProgress]
    let current: Int
    let updatedAt: Date?
}

struct RemoteExamProgressCollection: Equatable, Sendable {
    let progress: [String: RemoteExamProgress]
}

struct RemoteExamProgressUpdate: Equatable, Sendable {
    let examID: String
    /// Local-only identifier used to mark the exact slot clean after a PUT.
    /// The web request continues to use `variantIndex` exclusively.
    let nativeTestID: String
    let current: Int
    let variantIndex: Int
    let progress: RemoteExamVariantProgress
}

protocol ExamProgressRemote: Sendable {
    func fetchAll(bearerToken: String) async throws -> RemoteExamProgressCollection
    func put(_ update: RemoteExamProgressUpdate, bearerToken: String) async throws
}

enum ExamProgressSyncError: Error, Equatable, LocalizedError, Sendable {
    case notAuthenticated
    case invalidConfiguration
    case invalidResponse
    case invalidPayload
    case transport(String)
    case server(statusCode: Int, message: String)

    var isAuthenticationFailure: Bool {
        switch self {
        case .notAuthenticated:
            true
        case .server(let statusCode, _):
            statusCode == 401 || statusCode == 403
        default:
            false
        }
    }

    var errorDescription: String? {
        switch self {
        case .notAuthenticated:
            "Sign in to sync exam progress."
        case .invalidConfiguration:
            "Sparky's progress service is not configured correctly."
        case .invalidResponse, .invalidPayload:
            "The progress service returned data Sparky couldn't read."
        case .transport:
            "Sparky couldn't sync right now. Your progress is still saved on this device."
        case .server(_, let message):
            message
        }
    }
}

struct HTTPExamProgressRemote: ExamProgressRemote {
    private let baseURL: URL
    private let session: URLSession
    private let decoder = JSONDecoder()
    private let encoder = JSONEncoder()

    init(
        baseURL: URL = AuthAPIClient.productionBaseURL,
        session: URLSession = .shared
    ) {
        self.baseURL = baseURL
        self.session = session
    }

    func fetchAll(bearerToken: String) async throws -> RemoteExamProgressCollection {
        let data = try await request(
            path: "exams/progress",
            method: "GET",
            bearerToken: bearerToken,
            body: nil
        )

        let response: ProgressResponse
        do {
            response = try decoder.decode(ProgressResponse.self, from: data)
        } catch {
            throw ExamProgressSyncError.invalidPayload
        }

        return RemoteExamProgressCollection(
            progress: response.progress.mapValues { exam in
                let variants = exam.variants.reduce(into: [Int: RemoteExamVariantProgress]()) { result, entry in
                    guard let index = Int(entry.key), index >= 0 else { return }
                    let answers = entry.value.answers.reduce(into: [Int: ExamChoice]()) { answers, answer in
                        guard let number = Int(answer.key),
                              number > 0,
                              let choice = ExamChoice(rawValue: answer.value)
                        else { return }
                        answers[number] = choice
                    }
                    result[index] = RemoteExamVariantProgress(
                        answers: answers,
                        submitted: entry.value.submitted
                    )
                }
                return RemoteExamProgress(
                    variants: variants,
                    current: max(0, exam.current),
                    updatedAt: ServerDateParser.date(from: exam.updatedAt)
                )
            }
        )
    }

    func put(_ update: RemoteExamProgressUpdate, bearerToken: String) async throws {
        struct VariantBody: Encodable {
            let index: Int
            let answers: [String: String]
            let submitted: Bool
        }
        struct Body: Encodable {
            let current: Int
            let variant: VariantBody
        }

        let answers = Dictionary(
            uniqueKeysWithValues: update.progress.answers.map { (String($0.key), $0.value.rawValue) }
        )
        let body: Data
        do {
            body = try encoder.encode(
                Body(
                    current: max(0, update.current),
                    variant: VariantBody(
                        index: max(0, update.variantIndex),
                        answers: answers,
                        submitted: update.progress.submitted
                    )
                )
            )
        } catch {
            throw ExamProgressSyncError.invalidPayload
        }

        _ = try await request(
            path: "exams/progress/\(update.examID)",
            method: "PUT",
            bearerToken: bearerToken,
            body: body
        )
    }

    private func request(
        path: String,
        method: String,
        bearerToken: String,
        body: Data?
    ) async throws -> Data {
        let token = bearerToken.trimmingCharacters(in: .whitespacesAndNewlines)
        guard !token.isEmpty else { throw ExamProgressSyncError.notAuthenticated }
        guard baseURL.scheme == "https",
              let url = URL(string: path, relativeTo: baseURL)?.absoluteURL
        else {
            throw ExamProgressSyncError.invalidConfiguration
        }

        var request = URLRequest(url: url)
        request.httpMethod = method
        request.timeoutInterval = 30
        request.cachePolicy = .reloadIgnoringLocalCacheData
        request.setValue("application/json", forHTTPHeaderField: "Accept")
        request.setValue("Bearer \(token)", forHTTPHeaderField: "Authorization")
        if let body {
            request.httpBody = body
            request.setValue("application/json", forHTTPHeaderField: "Content-Type")
        }

        let data: Data
        let response: URLResponse
        do {
            (data, response) = try await session.data(for: request)
        } catch let error as URLError {
            throw ExamProgressSyncError.transport(error.localizedDescription)
        } catch {
            throw ExamProgressSyncError.transport(error.localizedDescription)
        }

        guard let httpResponse = response as? HTTPURLResponse else {
            throw ExamProgressSyncError.invalidResponse
        }
        guard (200..<300).contains(httpResponse.statusCode) else {
            let message = (try? decoder.decode(APIErrorResponse.self, from: data).error)
                ?? "Request failed (\(httpResponse.statusCode))"
            throw ExamProgressSyncError.server(statusCode: httpResponse.statusCode, message: message)
        }
        return data
    }
}

// MARK: - Merge and orchestration

struct ExamProgressSyncResult: Equatable, Sendable {
    let importedVariants: Int
    let uploadedVariants: Int
    let mergedConflicts: Int
}

/// Synchronizes the local store with the existing web API. Local changes are
/// never discarded because of a network error: the merge is persisted first,
/// and each upload is marked clean only after its PUT succeeds.
@MainActor
final class ExamProgressSyncService {
    private let remote: any ExamProgressRemote

    init(remote: any ExamProgressRemote = HTTPExamProgressRemote()) {
        self.remote = remote
    }

    func synchronize(
        store: ProgressStore,
        catalog: ExamCatalog,
        bearerToken: String
    ) async throws -> ExamProgressSyncResult {
        let token = bearerToken.trimmingCharacters(in: .whitespacesAndNewlines)
        guard !token.isEmpty else { throw ExamProgressSyncError.notAuthenticated }

        // A failed GET leaves the local store byte-for-byte untouched.
        let remoteCollection = try await remote.fetchAll(bearerToken: token)
        let snapshot = store.syncSnapshot()
        let plan = Self.makePlan(
            local: snapshot,
            remote: remoteCollection,
            catalog: catalog
        )

        // Persist imports and conflict merges before starting network writes.
        // If the app goes offline halfway through, unsent variants remain dirty
        // and a later synchronization safely retries them.
        store.applySyncMutations(plan.localMutations)

        var uploaded = 0
        for upload in plan.uploads {
            // Another answer can change while an earlier request is in flight.
            // Never send a plan entry that is already stale.
            guard store.matchesSyncUpload(upload) else { continue }
            try await remote.put(upload, bearerToken: token)
            uploaded += 1
            store.markSynced(upload)
        }

        return ExamProgressSyncResult(
            importedVariants: plan.importedVariants,
            uploadedVariants: uploaded,
            mergedConflicts: plan.mergedConflicts
        )
    }

    nonisolated static func makePlan(
        local: ProgressStoreSyncSnapshot,
        remote: RemoteExamProgressCollection,
        catalog: ExamCatalog
    ) -> ExamProgressSyncPlan {
        var mutations: [ProgressStoreSyncMutation] = []
        var uploads: [RemoteExamProgressUpdate] = []
        var imported = 0
        var conflicts = 0

        for exam in catalog.exams {
            let candidateRemoteExam = remote.progress[exam.id]
            let remoteExam: RemoteExamProgress?
            if let candidateRemoteExam,
               let cutoff = remoteResetCutoffs[exam.id] {
                remoteExam = candidateRemoteExam.updatedAt.map { $0 >= cutoff } == true
                    ? candidateRemoteExam
                    : nil
            } else {
                remoteExam = candidateRemoteExam
            }
            let remoteUpdatedAt = remoteExam?.updatedAt
            for test in exam.tests {
                let localProgress = local.exams[exam.id]?.variants[test.id]
                let metadata = local.metadata[exam.id]?[test.id]
                let remoteProgress = remoteExam?.variants[test.index].flatMap { $0.isEmpty ? nil : $0 }

                let decision = merge(
                    local: localProgress,
                    metadata: metadata,
                    remote: remoteProgress,
                    remoteUpdatedAt: remoteUpdatedAt
                )

                switch decision {
                case .nothing:
                    continue
                case .importRemote(let progress):
                    mutations.append(
                        ProgressStoreSyncMutation(
                            examID: exam.id,
                            testID: test.id,
                            progress: progress,
                            metadata: VariantSyncMetadata(
                                modifiedAt: remoteUpdatedAt ?? .distantPast,
                                isDirty: false,
                                isDeleted: false
                            )
                        )
                    )
                    imported += 1
                case .clean(let progress):
                    mutations.append(
                        ProgressStoreSyncMutation(
                            examID: exam.id,
                            testID: test.id,
                            progress: progress,
                            metadata: VariantSyncMetadata(
                                modifiedAt: remoteUpdatedAt ?? metadata?.modifiedAt ?? .distantPast,
                                isDirty: false,
                                isDeleted: false
                            )
                        )
                    )
                case .upload(let progress, let isConflict):
                    let projection = progress.remoteProjection
                    mutations.append(
                        ProgressStoreSyncMutation(
                            examID: exam.id,
                            testID: test.id,
                            progress: projection.isEmpty ? nil : progress,
                            metadata: VariantSyncMetadata(
                                modifiedAt: metadata?.modifiedAt ?? .distantPast,
                                isDirty: true,
                                isDeleted: projection.isEmpty
                            )
                        )
                    )
                    uploads.append(
                        RemoteExamProgressUpdate(
                            examID: exam.id,
                            nativeTestID: test.id,
                            current: test.index,
                            variantIndex: test.index,
                            progress: projection
                        )
                    )
                    if isConflict { conflicts += 1 }
                }
            }

            // Iterating the bundled tests (rather than the remote dictionary)
            // intentionally ignores numeric slots that no longer exist in the
            // catalog instead of importing poisoned or stale data.
        }

        return ExamProgressSyncPlan(
            localMutations: mutations,
            uploads: uploads,
            importedVariants: imported,
            mergedConflicts: conflicts
        )
    }

    private nonisolated static func merge(
        local: ExamVariantProgress?,
        metadata: VariantSyncMetadata?,
        remote: RemoteExamVariantProgress?,
        remoteUpdatedAt: Date?
    ) -> MergeDecision {
        if metadata?.isDeleted == true {
            guard let remote else {
                return .clean(nil)
            }
            if isLocalNewer(metadata: metadata, remoteUpdatedAt: remoteUpdatedAt) {
                return .upload(ExamVariantProgress(), isConflict: true)
            }
            return .importRemote(remote.nativeProgress(preserving: nil))
        }

        switch (local, remote) {
        case (nil, nil):
            return .nothing
        case (nil, let remote?):
            return .importRemote(remote.nativeProgress(preserving: nil))
        case (let local?, nil):
            guard !local.remoteProjection.isEmpty else { return .nothing }
            return .upload(local, isConflict: false)
        case (let local?, let remote?):
            if local.remoteProjection == remote {
                return .clean(local)
            }

            // A clean local slot came from the last server snapshot, so a
            // changed remote slot is authoritative. Device-only cursor/flags
            // remain intact.
            if metadata?.isDirty == false {
                return .importRemote(remote.nativeProgress(preserving: local))
            }

            // The API exposes one timestamp per exam rather than per variant.
            // Preserve all non-conflicting answers from both sides, then use
            // the available timestamps only for the same-question collision
            // and submitted/draft state. This avoids losing useful work merely
            // because another test in the same exam updated the row timestamp.
            let preferLocal = isLocalNewer(metadata: metadata, remoteUpdatedAt: remoteUpdatedAt)
            var answers = remote.answers
            for (number, choice) in local.answers {
                if answers[number] == nil || preferLocal {
                    answers[number] = choice
                }
            }

            var merged = local
            merged.answers = answers
            merged.submitted = preferLocal ? local.submitted : remote.submitted
            return .upload(merged, isConflict: true)
        }
    }

    private nonisolated static func isLocalNewer(
        metadata: VariantSyncMetadata?,
        remoteUpdatedAt: Date?
    ) -> Bool {
        guard let remoteUpdatedAt else { return true }
        guard let localUpdatedAt = metadata?.modifiedAt else { return false }
        return localUpdatedAt >= remoteUpdatedAt
    }

    /// Mirrors `EXAM_REMOTE_PROGRESS_RESET_AT` in `ExamPage.tsx`. A row older
    /// than its content-correction cutoff must not repopulate stale answers.
    private nonisolated static let remoteResetCutoffs: [String: Date] = {
        let common = Date(timeIntervalSince1970: 1_779_829_260) // 2026-05-26 21:01 UTC
        let periodic = Date(timeIntervalSince1970: 1_780_790_400) // 2026-06-07 00:00 UTC
        let initialVerification = Date(timeIntervalSince1970: 1_785_091_200) // 2026-07-26 18:40 UTC
        return [
            "level-2-electrical-installation": common,
            "level-3-electrical-installation": common,
            "building-regulations": common,
            "18th-edition": common,
            "special-locations": common,
            "pat-testing": common,
            "fundamental-inspection-testing": common,
            "initial-verification": initialVerification,
            "inspection-design-2396": common,
            "periodic-inspection": periodic,
            "am2-installation-assessment": common,
            "ecs-health-safety": common
        ]
    }()
}

struct VariantSyncMetadata: Codable, Equatable, Sendable {
    var modifiedAt: Date
    var isDirty: Bool
    var isDeleted: Bool
}

struct ProgressStoreSyncSnapshot: Equatable, Sendable {
    let exams: [String: ExamProgress]
    let metadata: [String: [String: VariantSyncMetadata]]
}

struct ProgressStoreSyncMutation: Equatable, Sendable {
    let examID: String
    let testID: String
    let progress: ExamVariantProgress?
    let metadata: VariantSyncMetadata?
}

struct ExamProgressSyncPlan: Equatable, Sendable {
    let localMutations: [ProgressStoreSyncMutation]
    let uploads: [RemoteExamProgressUpdate]
    let importedVariants: Int
    let mergedConflicts: Int
}

private enum MergeDecision {
    case nothing
    case importRemote(ExamVariantProgress)
    case clean(ExamVariantProgress?)
    case upload(ExamVariantProgress, isConflict: Bool)
}

private extension ExamVariantProgress {
    var remoteProjection: RemoteExamVariantProgress {
        RemoteExamVariantProgress(answers: answers, submitted: submitted)
    }
}

private extension RemoteExamVariantProgress {
    func nativeProgress(preserving local: ExamVariantProgress?) -> ExamVariantProgress {
        var progress = local ?? ExamVariantProgress()
        progress.answers = answers
        progress.submitted = submitted
        return progress
    }
}

private struct ProgressResponse: Decodable {
    let progress: [String: ExamPayload]

    struct ExamPayload: Decodable {
        let variants: [String: VariantPayload]
        let current: Int
        let updatedAt: String
    }

    struct VariantPayload: Decodable {
        let answers: [String: String]
        let submitted: Bool
    }
}

private struct APIErrorResponse: Decodable {
    let error: String
}

private enum ServerDateParser {
    static func date(from value: String) -> Date? {
        if let date = ISO8601DateFormatter().date(from: value) {
            return date
        }

        // Cloudflare D1's `datetime('now')` uses this UTC representation.
        let formatter = DateFormatter()
        formatter.locale = Locale(identifier: "en_US_POSIX")
        formatter.calendar = Calendar(identifier: .gregorian)
        formatter.timeZone = TimeZone(secondsFromGMT: 0)
        formatter.dateFormat = "yyyy-MM-dd HH:mm:ss"
        return formatter.date(from: value)
    }
}
