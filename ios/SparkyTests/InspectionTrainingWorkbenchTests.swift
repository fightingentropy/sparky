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

    func testLoopImpedanceReadingsMatchTheQuestionAndDoNotRevealZs() throws {
        let lab = try XCTUnwrap(
            InspectionTrainingCatalog.labs.first { $0.id == "earth-fault-loop-impedance" }
        )
        let calculation = lab.tasks[3].instruction
        XCTAssertTrue(calculation.contains("Ze is 0.35 ohms"))
        XCTAssertTrue(calculation.contains("R1+R2 is 0.25 ohms"))

        // Dead-test step shows R1+R2; the live step precedes the Zs calculation.
        XCTAssertEqual(WorkbenchSetup.earthFaultLoopReading(taskIndex: 1), "0.25 Ω")
        XCTAssertNotEqual(WorkbenchSetup.earthFaultLoopReading(taskIndex: 2), "0.60 Ω")
        XCTAssertEqual(WorkbenchSetup.earthFaultLoopReading(taskIndex: 2), "0.35 Ω")
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

    func testDockedProbesWithTesterOffResolveToParkedForRetryReset() {
        // The workbench rebuilds its topology from docked probes when a step is
        // retried or the lab restarted; an OFF-function step must come back ready.
        XCTAssertEqual(
            resolve(red: .redDock, black: .blackDock, function: .off, expected: .parked),
            .parked
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
