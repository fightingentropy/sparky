import XCTest
@testable import Sparky

@MainActor
final class StudyStateStoreTests: XCTestCase {
    private var suiteName: String!
    private var defaults: UserDefaults!

    override func setUp() {
        super.setUp()
        suiteName = "StudyStateStoreTests.\(UUID().uuidString)"
        defaults = UserDefaults(suiteName: suiteName)
    }

    override func tearDown() {
        defaults.removePersistentDomain(forName: suiteName)
        defaults = nil
        suiteName = nil
        super.tearDown()
    }

    func testLaunchDropsDataWrittenByRemovedFeatures() {
        defaults.set(Data("{}".utf8), forKey: "sparky.inspection-training.v1")
        defaults.set(["guide-1"], forKey: "completedGuideIDs")
        defaults.set("guide-1", forKey: "lastOpenedGuideID")
        defaults.set(Data("[]".utf8), forKey: "recentCalculations")
        defaults.set(["cheat-core-formulas"], forKey: "savedNoteIDs")

        let store = StudyStateStore(defaults: defaults)

        XCTAssertNil(defaults.object(forKey: "sparky.inspection-training.v1"))
        XCTAssertNil(defaults.object(forKey: "completedGuideIDs"))
        XCTAssertNil(defaults.object(forKey: "lastOpenedGuideID"))
        XCTAssertNil(defaults.object(forKey: "recentCalculations"))
        XCTAssertEqual(store.savedNoteIDs, ["cheat-core-formulas"])
    }

    func testResetClearsSavedNotes() {
        let store = StudyStateStore(defaults: defaults)
        store.toggleSavedNote("cheat-core-formulas")
        XCTAssertTrue(store.isNoteSaved("cheat-core-formulas"))

        store.resetStudyProgress()

        XCTAssertTrue(store.savedNoteIDs.isEmpty)
        XCTAssertNil(defaults.object(forKey: "savedNoteIDs"))
        XCTAssertTrue(StudyStateStore(defaults: defaults).savedNoteIDs.isEmpty)
    }
}
