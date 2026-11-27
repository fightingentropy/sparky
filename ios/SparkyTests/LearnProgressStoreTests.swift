import XCTest
@testable import Sparky

@MainActor
final class LearnProgressStoreTests: XCTestCase {
    private var suiteName: String!
    private var defaults: UserDefaults!

    override func setUp() {
        super.setUp()
        suiteName = "LearnProgressStoreTests.\(UUID().uuidString)"
        defaults = UserDefaults(suiteName: suiteName)
    }

    override func tearDown() {
        defaults.removePersistentDomain(forName: suiteName)
        defaults = nil
        suiteName = nil
        super.tearDown()
    }

    func testStatusesRoundTripThroughDefaults() {
        let store = LearnProgressStore(defaults: defaults)
        XCTAssertTrue(store.statuses.isEmpty)

        store.setStatus(.learning, for: "ohms-law")
        store.setStatus(.done, for: "route")
        store.setStatus(.done, for: "route-apprenticeship")

        XCTAssertEqual(
            defaults.dictionary(forKey: LearnProgressStore.storageKey) as? [String: String],
            ["ohms-law": "learning", "route": "done", "route-apprenticeship": "done"]
        )

        let reloaded = LearnProgressStore(defaults: defaults)
        XCTAssertEqual(reloaded.status(for: "ohms-law"), .learning)
        XCTAssertEqual(reloaded.status(for: "route"), .done)
        XCTAssertNil(reloaded.status(for: "ac-theory"))

        reloaded.clearStatus(for: "route")
        reloaded.setStatus(nil, for: "route-apprenticeship")
        XCTAssertEqual(LearnProgressStore(defaults: defaults).statuses, ["ohms-law": .learning])
    }

    func testIgnoresUnknownValuesAndBadData() {
        defaults.set(
            ["ohms-law": "done", "route": "mastered", "ac-theory": 3, "safe-isolation": "learning"],
            forKey: LearnProgressStore.storageKey
        )
        let store = LearnProgressStore(defaults: defaults)
        XCTAssertEqual(store.statuses, ["ohms-law": .done, "safe-isolation": .learning])

        defaults.set("not a dictionary", forKey: LearnProgressStore.storageKey)
        XCTAssertTrue(LearnProgressStore(defaults: defaults).statuses.isEmpty)
    }

    func testResetClearsEverything() {
        let store = LearnProgressStore(defaults: defaults)
        store.setStatus(.done, for: "ohms-law")
        store.setStatus(.learning, for: "route")

        store.reset()

        XCTAssertTrue(store.statuses.isEmpty)
        XCTAssertNil(defaults.object(forKey: LearnProgressStore.storageKey))
        XCTAssertTrue(LearnProgressStore(defaults: defaults).statuses.isEmpty)
    }

    func testCountsAndNextNodeFollowRoadmapOrder() {
        let order = ["route", "route-apprenticeship", "route-adult", "site-safety"]
        let store = LearnProgressStore(defaults: defaults)
        XCTAssertEqual(store.nextNodeID(in: order), "route")

        store.setStatus(.done, for: "route")
        store.setStatus(.done, for: "unknown-node")
        XCTAssertEqual(store.doneCount(in: order), 1)
        XCTAssertEqual(store.nextNodeID(in: order), "route-apprenticeship")

        // A node marked "learning" is where to pick up, even past an unstarted one.
        store.setStatus(.learning, for: "site-safety")
        XCTAssertEqual(store.learningCount(in: order), 1)
        XCTAssertEqual(store.nextNodeID(in: order), "site-safety")

        order.forEach { store.setStatus(.done, for: $0) }
        XCTAssertEqual(store.doneCount(in: order), order.count)
        XCTAssertNil(store.nextNodeID(in: order))
    }

    func testStudyResetLeavesLearnProgressAlone() {
        let learn = LearnProgressStore(defaults: defaults)
        learn.setStatus(.done, for: "ohms-law")

        StudyStateStore(defaults: defaults).resetStudyProgress()

        XCTAssertEqual(LearnProgressStore(defaults: defaults).status(for: "ohms-law"), .done)
    }
}
