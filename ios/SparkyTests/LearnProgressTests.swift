import XCTest
@testable import Sparky

@MainActor
final class LearnProgressTests: XCTestCase {
    func testResumeSurvivesRelaunchAndDoesNotChangeExistingCompletion() throws {
        let context = try makeDefaults()
        defer { context.defaults.removePersistentDomain(forName: context.suiteName) }
        let guides = try loadGuides()
        let chosenGuide = try XCTUnwrap(guides.last)
        let completedGuide = try XCTUnwrap(guides.first)
        context.defaults.set([completedGuide.id], forKey: "completedGuideIDs")

        let store = StudyStateStore(defaults: context.defaults)
        store.recordOpenedGuide(chosenGuide.id)

        let restored = StudyStateStore(defaults: context.defaults)
        XCTAssertEqual(restored.suggestedGuide(in: guides)?.id, chosenGuide.id)
        XCTAssertTrue(restored.isGuideCompleted(completedGuide.id))
        XCTAssertFalse(restored.isGuideCompleted(chosenGuide.id))
    }

    func testCompletionMovesSuggestionForwardAndAllCompleteHasNoUnreadGuide() throws {
        let context = try makeDefaults()
        defer { context.defaults.removePersistentDomain(forName: context.suiteName) }
        let guides = Array(try loadGuides().prefix(2))
        let first = try XCTUnwrap(guides.first)
        let last = try XCTUnwrap(guides.last)
        let store = StudyStateStore(defaults: context.defaults)

        XCTAssertEqual(store.suggestedGuide(in: guides)?.id, first.id)
        store.recordOpenedGuide(first.id)
        store.toggleCompletedGuide(first.id)
        XCTAssertEqual(store.suggestedGuide(in: guides)?.id, last.id)
        store.toggleCompletedGuide(last.id)
        XCTAssertNil(store.suggestedGuide(in: guides))

        store.toggleCompletedGuide(first.id)
        XCTAssertEqual(store.suggestedGuide(in: guides)?.id, first.id)
    }

    func testRemovedGuideAndResetCannotLeaveAStaleContinueLink() throws {
        let context = try makeDefaults()
        defer { context.defaults.removePersistentDomain(forName: context.suiteName) }
        let guides = try loadGuides()
        let first = try XCTUnwrap(guides.first)
        let store = StudyStateStore(defaults: context.defaults)
        store.recordOpenedGuide("guide-no-longer-in-catalog")
        XCTAssertEqual(store.suggestedGuide(in: guides)?.id, first.id)
        XCTAssertNil(store.suggestedGuide(in: []))

        store.recordOpenedGuide(first.id)
        store.toggleCompletedGuide(first.id)
        store.resetStudyProgress()
        let restored = StudyStateStore(defaults: context.defaults)
        XCTAssertNil(restored.lastOpenedGuideID)
        XCTAssertTrue(restored.completedGuideIDs.isEmpty)
        XCTAssertEqual(restored.suggestedGuide(in: guides)?.id, first.id)
    }

    func testSearchFindsGuideContentAndRequiresEverySearchTerm() throws {
        let guides = try loadGuides()
        let guide = try XCTUnwrap(guides.first { $0.id == "pat-eet-equipment" })
        let bodyText = try XCTUnwrap(guide.sections.first?.items.first)
        XCTAssertTrue(guide.matchesLearningQuery(bodyText))
        XCTAssertTrue(guide.matchesLearningQuery("  PORTABLE   appliance  "))
        XCTAssertFalse(guide.matchesLearningQuery("portable zzzmissingtopic"))
        XCTAssertTrue(guides.allSatisfy { $0.matchesLearningQuery(" \n ") })
        XCTAssertEqual(guides.filter { $0.matchesLearningQuery("PAT") }.map(\.id), [guide.id])
        XCTAssertTrue(guide.matchesLearningQuery("portable appl"))
    }

    private func loadGuides() throws -> [CourseGuide] {
        let directory = URL(fileURLWithPath: #filePath)
            .deletingLastPathComponent()
            .deletingLastPathComponent()
            .appendingPathComponent("Sparky/Resources/Content", isDirectory: true)
        return try ContentStore(contentDirectory: directory).guides
    }

    private func makeDefaults() throws -> (defaults: UserDefaults, suiteName: String) {
        let suiteName = "LearnProgressTests.\(UUID().uuidString)"
        return (try XCTUnwrap(UserDefaults(suiteName: suiteName)), suiteName)
    }
}
