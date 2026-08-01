import XCTest
@testable import Sparky

@MainActor
final class InspectionTrainingStoreTests: XCTestCase {
    func testPersistsIndependentPerLabProgress() throws {
        let context = try makeDefaults()
        defer { context.defaults.removePersistentDomain(forName: context.suiteName) }
        let firstLab = try XCTUnwrap(InspectionTrainingCatalog.labs.first)
        let secondLab = try XCTUnwrap(InspectionTrainingCatalog.labs.dropFirst().first)
        let firstTask = try XCTUnwrap(firstLab.tasks.first)
        let wrongChoice = try XCTUnwrap(
            firstTask.choices.first { $0.id != firstTask.correctChoiceID }
        )
        let start = Date(timeIntervalSince1970: 100)
        let storageKey = "inspection-training"
        let store = InspectionTrainingStore(
            defaults: context.defaults,
            storageKey: storageKey,
            now: { start }
        )

        XCTAssertEqual(
            store.submit(choiceID: wrongChoice.id, for: firstLab).kind,
            .incorrect
        )
        store.retry(in: firstLab)
        XCTAssertTrue(
            store.submit(choiceID: firstTask.correctChoiceID, for: firstLab).isCorrect
        )
        store.advance(in: firstLab)

        let secondTask = try XCTUnwrap(secondLab.tasks.first)
        XCTAssertTrue(
            store.submit(choiceID: secondTask.correctChoiceID, for: secondLab).isCorrect
        )

        let data = try XCTUnwrap(context.defaults.data(forKey: storageKey))
        let json = try XCTUnwrap(JSONSerialization.jsonObject(with: data) as? [String: Any])
        XCTAssertEqual(json["version"] as? Int, 1)

        let reloaded = InspectionTrainingStore(
            defaults: context.defaults,
            storageKey: storageKey,
            now: { start }
        )
        let restoredFirst = reloaded.session(for: firstLab)
        let restoredSecond = reloaded.session(for: secondLab)

        XCTAssertEqual(restoredFirst.currentTaskIndex, 1)
        XCTAssertEqual(restoredFirst.attemptCount, 2)
        XCTAssertEqual(restoredFirst.incorrectAttemptCount, 1)
        XCTAssertEqual(restoredFirst.score, 80)
        XCTAssertEqual(restoredSecond.currentTaskIndex, 0)
        XCTAssertEqual(restoredSecond.score, secondTask.maximumPoints)
        XCTAssertTrue(InspectionTrainingEngine.canAdvance(restoredSecond, in: secondLab))
        XCTAssertTrue(reloaded.hasStarted(labID: firstLab.id))
        XCTAssertTrue(reloaded.hasStarted(labID: secondLab.id))
    }

    func testCompletionAndOverallProgressAreDerivedFromStoredSessions() throws {
        let context = try makeDefaults()
        defer { context.defaults.removePersistentDomain(forName: context.suiteName) }
        let lab = try XCTUnwrap(InspectionTrainingCatalog.labs.first)
        let completedAt = Date(timeIntervalSince1970: 900)
        let store = InspectionTrainingStore(
            defaults: context.defaults,
            storageKey: "completion",
            now: { completedAt }
        )

        for task in lab.tasks {
            XCTAssertTrue(store.submit(choiceID: task.correctChoiceID, for: lab).isCorrect)
            store.advance(in: lab)
        }

        XCTAssertEqual(store.completedLabIDs, [lab.id])
        XCTAssertEqual(store.completedLabCount, 1)
        XCTAssertEqual(store.session(for: lab).completedAt, completedAt)
        XCTAssertEqual(store.progress(for: lab).fractionCompleted, 1)

        let totalTasks = InspectionTrainingCatalog.labs.reduce(0) { $0 + $1.tasks.count }
        XCTAssertEqual(
            store.overallProgress,
            Double(lab.tasks.count) / Double(totalTasks),
            accuracy: 0.000_001
        )
    }

    func testResetOneLabPreservesOtherLabAndResetAllRemovesPayload() throws {
        let context = try makeDefaults()
        defer { context.defaults.removePersistentDomain(forName: context.suiteName) }
        let firstLab = try XCTUnwrap(InspectionTrainingCatalog.labs.first)
        let secondLab = try XCTUnwrap(InspectionTrainingCatalog.labs.dropFirst().first)
        let storageKey = "reset"
        let store = InspectionTrainingStore(
            defaults: context.defaults,
            storageKey: storageKey
        )

        store.submit(
            choiceID: try XCTUnwrap(firstLab.tasks.first).correctChoiceID,
            for: firstLab
        )
        store.submit(
            choiceID: try XCTUnwrap(secondLab.tasks.first).correctChoiceID,
            for: secondLab
        )

        store.reset(labID: firstLab.id)

        XCTAssertFalse(store.hasStarted(labID: firstLab.id))
        XCTAssertTrue(store.hasStarted(labID: secondLab.id))
        XCTAssertNotNil(context.defaults.data(forKey: storageKey))

        let reloaded = InspectionTrainingStore(
            defaults: context.defaults,
            storageKey: storageKey
        )
        XCTAssertFalse(reloaded.hasStarted(labID: firstLab.id))
        XCTAssertTrue(reloaded.hasStarted(labID: secondLab.id))

        reloaded.resetAll()
        XCTAssertTrue(reloaded.sessions.isEmpty)
        XCTAssertNil(context.defaults.data(forKey: storageKey))
    }

    func testCorruptPayloadFallsBackToEmptyProgress() throws {
        let context = try makeDefaults()
        defer { context.defaults.removePersistentDomain(forName: context.suiteName) }
        let storageKey = "corrupt"
        context.defaults.set(Data("not-json".utf8), forKey: storageKey)

        let store = InspectionTrainingStore(
            defaults: context.defaults,
            storageKey: storageKey
        )

        XCTAssertTrue(store.sessions.isEmpty)
        XCTAssertTrue(store.completedLabIDs.isEmpty)
        XCTAssertEqual(store.overallProgress, 0)
    }

    func testUnknownPayloadVersionFallsBackToEmptyProgress() throws {
        let context = try makeDefaults()
        defer { context.defaults.removePersistentDomain(forName: context.suiteName) }
        let storageKey = "future-version"
        let payload: [String: Any] = [
            "version": 99,
            "sessions": [:],
        ]
        context.defaults.set(
            try JSONSerialization.data(withJSONObject: payload),
            forKey: storageKey
        )

        let store = InspectionTrainingStore(
            defaults: context.defaults,
            storageKey: storageKey
        )

        XCTAssertTrue(store.sessions.isEmpty)
        XCTAssertFalse(store.hasStarted(labID: "protective-conductor-continuity"))
    }

    func testUnknownLabIsNotPersisted() throws {
        let context = try makeDefaults()
        defer { context.defaults.removePersistentDomain(forName: context.suiteName) }
        let storageKey = "unknown-lab"
        let store = InspectionTrainingStore(
            defaults: context.defaults,
            storageKey: storageKey
        )

        store.save(InspectionTrainingSession(labID: "removed-lab"))

        XCTAssertTrue(store.sessions.isEmpty)
        XCTAssertNil(context.defaults.data(forKey: storageKey))
        XCTAssertNil(store.submit(choiceID: "anything", labID: "removed-lab"))
    }

    private func makeDefaults() throws -> (defaults: UserDefaults, suiteName: String) {
        let suiteName = "InspectionTrainingStoreTests.\(UUID().uuidString)"
        let defaults = try XCTUnwrap(UserDefaults(suiteName: suiteName))
        defaults.removePersistentDomain(forName: suiteName)
        return (defaults, suiteName)
    }
}
