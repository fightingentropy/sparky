import UIKit
import XCTest
@testable import Sparky

final class InspectionTrainingWorkbenchTests: XCTestCase {
    func testEveryGuidedDecisionHasAWorkbenchConfiguration() {
        let labs = InspectionTrainingCatalog.labs
        let taskCount = labs.reduce(0) { $0 + $1.tasks.count }

        XCTAssertEqual(taskCount, 25)

        for lab in labs {
            for taskIndex in lab.tasks.indices {
                let setup = WorkbenchSetup.configuration(labID: lab.id, taskIndex: taskIndex)

                XCTAssertTrue(setup.functions.contains(setup.correctFunction))
                XCTAssertTrue(setup.topologies.contains(setup.correctTopology))
                XCTAssertFalse(setup.prompt.isEmpty)
                XCTAssertEqual(
                    setup.requiredAction,
                    setup.correctFunction == .off
                        ? .none
                        : (setup.correctTopology == .shorted ? .autoNull : .test)
                )
            }
        }
    }

    func testRemovedLeadsRequireExplicitLeadCaseTargets() {
        XCTAssertEqual(
            resolve(red: .redDock, black: .blackDock, expected: .removed),
            .parked
        )
        XCTAssertEqual(
            resolve(red: .redRemoved, black: .blackRemoved, expected: .removed),
            .removed
        )
    }

    func testLiveConnectionsRequireRedProbeOnLine() {
        XCTAssertEqual(
            resolve(
                red: .line,
                black: .neutral,
                function: .prospectiveFaultCurrent,
                expected: .pfcPSCC
            ),
            .pfcPSCC
        )
        XCTAssertNil(
            resolve(
                red: .neutral,
                black: .line,
                function: .prospectiveFaultCurrent,
                expected: .pfcPSCC
            )
        )
    }

    func testRingEndToEndRequiresAllThreeConductorPairs() {
        let incomplete = WorkbenchConnectionResolver.resolve(
            red: .cpcA,
            black: .cpcB,
            function: .lowOhms,
            sceneKind: .ringCircuit,
            expectedTopology: .ringEndToEnd,
            completedRingPairs: [.line, .cpc]
        )
        let complete = WorkbenchConnectionResolver.resolve(
            red: .cpcA,
            black: .cpcB,
            function: .lowOhms,
            sceneKind: .ringCircuit,
            expectedTopology: .ringEndToEnd,
            completedRingPairs: [.line, .neutral, .cpc]
        )

        XCTAssertNil(incomplete)
        XCTAssertEqual(complete, .ringEndToEnd)
    }

    func testCrossConnectionsResolveOnlyAcrossOppositeRingEnds() {
        XCTAssertEqual(
            WorkbenchConnectionResolver.resolve(
                red: .lineA,
                black: .neutralB,
                function: .lowOhms,
                sceneKind: .ringCircuit,
                expectedTopology: .ringCrossLineNeutral
            ),
            .ringCrossLineNeutral
        )
        XCTAssertNil(
            WorkbenchConnectionResolver.resolve(
                red: .lineA,
                black: .neutralA,
                function: .lowOhms,
                sceneKind: .ringCircuit,
                expectedTopology: .ringCrossLineNeutral
            )
        )
    }

    @MainActor
    func testOrientationMaskKeepsIPadFlexible() {
        XCTAssertEqual(InterfaceOrientationCoordinator.orientationMask(for: .phone), .portrait)
        XCTAssertEqual(InterfaceOrientationCoordinator.orientationMask(for: .pad), .all)
    }

    private func resolve(
        red: WorkbenchTerminalID,
        black: WorkbenchTerminalID,
        function: WorkbenchFunction = .lowOhms,
        expected: WorkbenchLeadTopology
    ) -> WorkbenchLeadTopology? {
        WorkbenchConnectionResolver.resolve(
            red: red,
            black: black,
            function: function,
            sceneKind: .consumerUnit,
            expectedTopology: expected
        )
    }
}
