import XCTest
@testable import Sparky

@MainActor
final class AppRouterTests: XCTestCase {
    private func makeDefaults() -> (defaults: UserDefaults, suiteName: String) {
        let suiteName = "AppRouterTests-\(UUID().uuidString)"
        return (UserDefaults(suiteName: suiteName)!, suiteName)
    }

    func testOpeningExamRevealsHiddenExamsTab() {
        let context = makeDefaults()
        defer { context.defaults.removePersistentDomain(forName: context.suiteName) }
        context.defaults.set(
            NavigationPreferences.storageValue(for: [.exams, .notes]),
            forKey: NavigationPreferences.storageKey
        )
        let router = AppRouter(defaults: context.defaults)

        router.openExam("fundamental-inspection-testing")

        let stored = context.defaults.string(forKey: NavigationPreferences.storageKey) ?? ""
        XCTAssertTrue(NavigationPreferences.visibleTabs(from: stored).contains(.exams))
        XCTAssertEqual(router.selectedTab, .exams)
        XCTAssertEqual(router.pendingExamID, "fundamental-inspection-testing")
        // Other hidden tabs stay hidden.
        XCTAssertFalse(NavigationPreferences.visibleTabs(from: stored).contains(.notes))
    }

    func testOpeningNoteRevealsHiddenNotesTab() {
        let context = makeDefaults()
        defer { context.defaults.removePersistentDomain(forName: context.suiteName) }
        context.defaults.set(
            NavigationPreferences.storageValue(for: [.notes]),
            forKey: NavigationPreferences.storageKey
        )
        let router = AppRouter(defaults: context.defaults)

        router.openNote("note-1")

        let stored = context.defaults.string(forKey: NavigationPreferences.storageKey) ?? ""
        XCTAssertTrue(NavigationPreferences.visibleTabs(from: stored).contains(.notes))
        XCTAssertEqual(router.selectedTab, .notes)
    }

    func testOpeningExamFromLearnSwitchesTabs() {
        let context = makeDefaults()
        defer { context.defaults.removePersistentDomain(forName: context.suiteName) }
        let router = AppRouter(selectedTab: .learn, defaults: context.defaults)

        router.openExam("18th-edition")
        XCTAssertEqual(router.selectedTab, .exams)
        XCTAssertEqual(router.pendingExamID, "18th-edition")

        router.selectedTab = .learn
        router.openNote("cheat-core-formulas")
        XCTAssertEqual(router.selectedTab, .notes)
        XCTAssertEqual(router.pendingNoteID, "cheat-core-formulas")
    }

    func testReselectingLearnResetsOnlyLearn() {
        let context = makeDefaults()
        defer { context.defaults.removePersistentDomain(forName: context.suiteName) }
        let router = AppRouter(selectedTab: .learn, defaults: context.defaults)

        router.reselect(.learn)

        XCTAssertEqual(router.tabResetTokens[.learn], 1)
        XCTAssertNil(router.tabResetTokens[.notes])
    }
}
