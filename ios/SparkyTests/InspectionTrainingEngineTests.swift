import XCTest
@testable import Sparky

final class InspectionTrainingEngineTests: XCTestCase {
    typealias Engine = InspectionTrainingEngine

    func testCatalogContainsFiveValidUniqueLabs() throws {
        let labs = InspectionTrainingCatalog.labs

        XCTAssertEqual(
            labs.map(\.id),
            [
                "protective-conductor-continuity",
                "ring-final-continuity",
                "insulation-resistance",
                "earth-fault-loop-impedance",
                "prospective-fault-current",
            ]
        )
        XCTAssertEqual(Set(labs.map(\.id)).count, 5)
        XCTAssertEqual(labs.prefix(3).map(\.testMode), [.dead, .dead, .dead])
        XCTAssertEqual(labs.suffix(2).map(\.testMode), [.live, .live])
        XCTAssertTrue(InspectionTrainingCatalog.generalSafetyNote.contains("Training simulator only"))

        let ring = try XCTUnwrap(InspectionTrainingCatalog.lab(id: "ring-final-continuity"))
        XCTAssertTrue(ring.tasks.map(\.instruction).joined().contains("0.28 ohms"))
        let insulation = try XCTUnwrap(InspectionTrainingCatalog.lab(id: "insulation-resistance"))
        XCTAssertTrue(insulation.tasks.map(\.instruction).joined().contains("up to and including 500 V"))
        let loop = try XCTUnwrap(InspectionTrainingCatalog.lab(id: "earth-fault-loop-impedance"))
        XCTAssertTrue(loop.tasks.map(\.instruction).joined().contains("Ze is 0.35 ohms"))
        XCTAssertTrue(loop.tasks.flatMap(\.choices).map(\.title).joined().contains("permitted alternative method"))
        let pfc = try XCTUnwrap(InspectionTrainingCatalog.lab(id: "prospective-fault-current"))
        XCTAssertTrue(pfc.tasks.map(\.instruction).joined().contains("PSCC 1.85 kA"))
        XCTAssertTrue(pfc.tasks.flatMap(\.choices).map(\.title).joined().contains("non-live evidence"))

        for lab in labs {
            XCTAssertFalse(lab.title.isEmpty)
            XCTAssertFalse(lab.summary.isEmpty)
            XCTAssertFalse(lab.safetyNote.isEmpty)
            XCTAssertFalse(lab.tasks.isEmpty)
            XCTAssertEqual(Set(lab.tasks.map(\.id)).count, lab.tasks.count)

            for task in lab.tasks {
                XCTAssertGreaterThan(task.maximumPoints, 0)
                XCTAssertGreaterThanOrEqual(task.choices.count, 2)
                XCTAssertEqual(Set(task.choices.map(\.id)).count, task.choices.count)
                XCTAssertNotNil(task.correctChoice)
                XCTAssertFalse(task.successMessage.isEmpty)
                XCTAssertFalse(task.retryMessage.isEmpty)
            }
        }
    }

    func testNewSessionStartsAtFirstTask() throws {
        let lab = try firstLab()
        let session = InspectionTrainingSession(
            labID: lab.id,
            startedAt: Date(timeIntervalSince1970: 10)
        )

        XCTAssertEqual(Engine.currentTask(in: session, for: lab)?.id, lab.tasks[0].id)
        XCTAssertFalse(Engine.canAdvance(session, in: lab))
        XCTAssertFalse(Engine.canRetry(session, in: lab))
        XCTAssertEqual(
            Engine.progress(for: session, in: lab),
            InspectionTrainingProgress(
                completedTasks: 0,
                totalTasks: lab.tasks.count,
                earnedPoints: 0,
                maximumPoints: lab.maximumScore,
                isCompleted: false
            )
        )
    }

    func testInvalidSelectionDoesNotCountAsAnAttempt() throws {
        let lab = try firstLab()
        let session = InspectionTrainingSession(labID: lab.id)

        let transition = Engine.evaluate(
            choiceID: "not-an-option",
            in: session,
            for: lab
        )

        XCTAssertEqual(transition.evaluation.kind, .invalidSelection)
        XCTAssertEqual(transition.session.attemptCount, 0)
        XCTAssertNil(transition.session.selectedChoiceID)
        XCTAssertTrue(Engine.canRetry(transition.session, in: lab))

        let retried = Engine.retry(transition.session, in: lab)
        XCTAssertNil(retried.lastEvaluation)
        XCTAssertNil(retried.selectedChoiceID)
    }

    func testIncorrectChoiceRequiresRetryAndReducesTaskScore() throws {
        let lab = try firstLab()
        let task = try XCTUnwrap(lab.tasks.first)
        let wrongChoice = try XCTUnwrap(task.choices.first { $0.id != task.correctChoiceID })
        let initial = InspectionTrainingSession(labID: lab.id)

        let incorrect = Engine.evaluate(choiceID: wrongChoice.id, in: initial, for: lab)

        XCTAssertEqual(incorrect.evaluation.kind, .incorrect)
        XCTAssertEqual(incorrect.session.attemptCount, 1)
        XCTAssertEqual(incorrect.session.incorrectAttemptCount, 1)
        XCTAssertEqual(incorrect.session.score, 0)
        XCTAssertTrue(Engine.canRetry(incorrect.session, in: lab))
        XCTAssertFalse(Engine.canAdvance(incorrect.session, in: lab))

        let repeatedTap = Engine.evaluate(
            choiceID: task.correctChoiceID,
            in: incorrect.session,
            for: lab
        )
        XCTAssertEqual(repeatedTap.evaluation, incorrect.evaluation)
        XCTAssertEqual(repeatedTap.session.attemptCount, 1)

        let retried = Engine.retry(incorrect.session, in: lab)
        let correct = Engine.evaluate(
            choiceID: task.correctChoiceID,
            in: retried,
            for: lab
        )

        XCTAssertEqual(correct.evaluation.kind, .correct)
        XCTAssertEqual(correct.evaluation.pointsAwarded, 80)
        XCTAssertEqual(correct.session.score, 80)
        XCTAssertEqual(correct.session.attemptCount, 2)
        XCTAssertTrue(Engine.canAdvance(correct.session, in: lab))
        XCTAssertEqual(correct.session.currentTaskIndex, 0, "Feedback does not auto-advance")

        let advanced = Engine.advance(correct.session, in: lab)
        XCTAssertEqual(advanced.currentTaskIndex, 1)
        XCTAssertNil(advanced.lastEvaluation)
        XCTAssertNil(advanced.selectedChoiceID)
    }

    func testAdvanceIsIgnoredUntilCurrentTaskIsCorrect() throws {
        let lab = try firstLab()
        let task = try XCTUnwrap(lab.tasks.first)
        let wrongChoice = try XCTUnwrap(task.choices.first { $0.id != task.correctChoiceID })
        let session = InspectionTrainingSession(labID: lab.id)
        let incorrect = Engine.evaluate(choiceID: wrongChoice.id, in: session, for: lab)

        XCTAssertEqual(Engine.advance(session, in: lab), session)
        XCTAssertEqual(Engine.advance(incorrect.session, in: lab), incorrect.session)
    }

    func testCompletingEveryTaskProducesFinalScoreAndCompletionDate() throws {
        let lab = try firstLab()
        let completionDate = Date(timeIntervalSince1970: 500)
        var session = InspectionTrainingSession(labID: lab.id)

        for task in lab.tasks {
            let transition = Engine.evaluate(
                choiceID: task.correctChoiceID,
                in: session,
                for: lab
            )
            XCTAssertTrue(transition.evaluation.isCorrect)
            session = Engine.advance(transition.session, in: lab, now: completionDate)
        }

        XCTAssertTrue(session.isCompleted)
        XCTAssertEqual(session.completedAt, completionDate)
        XCTAssertEqual(session.currentTaskIndex, lab.tasks.count)
        XCTAssertEqual(session.score, lab.maximumScore)
        XCTAssertNil(Engine.currentTask(in: session, for: lab))

        let progress = Engine.progress(for: session, in: lab)
        XCTAssertEqual(progress.completedTasks, lab.tasks.count)
        XCTAssertEqual(progress.fractionCompleted, 1)
        XCTAssertEqual(progress.scorePercentage, 1)
        XCTAssertTrue(progress.isCompleted)
    }

    func testNormalizationDropsUnknownTasksAndRepairsInvalidIndex() throws {
        let lab = try firstLab()
        let session = InspectionTrainingSession(
            labID: lab.id,
            currentTaskIndex: 999,
            taskProgress: [
                "removed-task": InspectionTrainingTaskProgress(
                    attempts: 10,
                    incorrectAttempts: 10,
                    earnedPoints: 500,
                    isCompleted: true
                ),
            ],
            selectedChoiceID: "removed-choice",
            startedAt: Date(timeIntervalSince1970: 20),
            completedAt: Date(timeIntervalSince1970: 30)
        )

        let normalized = Engine.normalized(session, for: lab)

        XCTAssertEqual(normalized.currentTaskIndex, 0)
        XCTAssertTrue(normalized.taskProgress.isEmpty)
        XCTAssertNil(normalized.selectedChoiceID)
        XCTAssertNil(normalized.lastEvaluation)
        XCTAssertNil(normalized.completedAt)
    }

    func testMismatchedLabSessionFallsBackToFreshLabSession() throws {
        let lab = try firstLab()
        let start = Date(timeIntervalSince1970: 42)
        let mismatched = InspectionTrainingSession(
            labID: "another-lab",
            currentTaskIndex: 4,
            startedAt: start,
            completedAt: start
        )

        let normalized = Engine.normalized(mismatched, for: lab)

        XCTAssertEqual(normalized.labID, lab.id)
        XCTAssertEqual(normalized.startedAt, start)
        XCTAssertEqual(normalized.currentTaskIndex, 0)
        XCTAssertFalse(normalized.isCompleted)
    }

    private func firstLab() throws -> InspectionTrainingLab {
        try XCTUnwrap(InspectionTrainingCatalog.labs.first)
    }
}
