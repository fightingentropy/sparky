import Foundation

/// Pure state transitions for the inspection-and-testing training simulator.
///
/// The engine has no persistence or UI dependencies. A view can evaluate a
/// choice, present the returned feedback, and then explicitly advance or retry.
enum InspectionTrainingEngine {
    static func currentTask(
        in session: InspectionTrainingSession,
        for lab: InspectionTrainingLab
    ) -> InspectionTrainingTask? {
        let session = normalized(session, for: lab)
        guard lab.tasks.indices.contains(session.currentTaskIndex) else { return nil }
        return lab.tasks[session.currentTaskIndex]
    }

    static func evaluate(
        choiceID: String,
        in rawSession: InspectionTrainingSession,
        for lab: InspectionTrainingLab
    ) -> InspectionTrainingTransition {
        var session = normalized(rawSession, for: lab)

        guard let task = currentTask(in: session, for: lab) else {
            let evaluation = InspectionTrainingEvaluation(
                taskID: "",
                choiceID: choiceID,
                kind: .invalidSelection,
                message: "This lab has no current task to evaluate.",
                pointsAwarded: 0
            )
            session.selectedChoiceID = nil
            session.lastEvaluation = evaluation
            return InspectionTrainingTransition(session: session, evaluation: evaluation)
        }

        // Once feedback is being shown, progression is explicit. This prevents
        // repeated taps from adding attempts or awarding the same task twice.
        if let existing = session.lastEvaluation, existing.taskID == task.id {
            return InspectionTrainingTransition(session: session, evaluation: existing)
        }

        guard task.choices.contains(where: { $0.id == choiceID }) else {
            let evaluation = InspectionTrainingEvaluation(
                taskID: task.id,
                choiceID: choiceID,
                kind: .invalidSelection,
                message: "Choose one of the available answers.",
                pointsAwarded: 0
            )
            session.selectedChoiceID = nil
            session.lastEvaluation = evaluation
            return InspectionTrainingTransition(session: session, evaluation: evaluation)
        }

        var taskProgress = session.taskProgress[task.id] ?? InspectionTrainingTaskProgress()
        taskProgress.attempts += 1
        session.selectedChoiceID = choiceID

        let evaluation: InspectionTrainingEvaluation
        if choiceID == task.correctChoiceID {
            let points = pointsAwarded(
                maximumPoints: task.maximumPoints,
                priorIncorrectAttempts: taskProgress.incorrectAttempts
            )
            taskProgress.earnedPoints = points
            taskProgress.isCompleted = true
            evaluation = InspectionTrainingEvaluation(
                taskID: task.id,
                choiceID: choiceID,
                kind: .correct,
                message: task.successMessage,
                pointsAwarded: points
            )
        } else {
            taskProgress.incorrectAttempts += 1
            taskProgress.earnedPoints = 0
            taskProgress.isCompleted = false
            evaluation = InspectionTrainingEvaluation(
                taskID: task.id,
                choiceID: choiceID,
                kind: .incorrect,
                message: task.retryMessage,
                pointsAwarded: 0
            )
        }

        session.taskProgress[task.id] = taskProgress
        session.lastEvaluation = evaluation
        return InspectionTrainingTransition(session: session, evaluation: evaluation)
    }

    static func advance(
        _ rawSession: InspectionTrainingSession,
        in lab: InspectionTrainingLab,
        now: Date = .now
    ) -> InspectionTrainingSession {
        var session = normalized(rawSession, for: lab)
        guard !session.isCompleted,
              let task = currentTask(in: session, for: lab),
              session.taskProgress[task.id]?.isCompleted == true,
              session.lastEvaluation?.taskID == task.id,
              session.lastEvaluation?.isCorrect == true else {
            return session
        }

        session.selectedChoiceID = nil
        session.lastEvaluation = nil

        if session.currentTaskIndex == lab.tasks.index(before: lab.tasks.endIndex) {
            session.currentTaskIndex = lab.tasks.count
            session.completedAt = now
        } else {
            session.currentTaskIndex += 1
        }
        return session
    }

    static func retry(
        _ rawSession: InspectionTrainingSession,
        in lab: InspectionTrainingLab
    ) -> InspectionTrainingSession {
        var session = normalized(rawSession, for: lab)
        guard session.lastEvaluation?.isCorrect != true else { return session }
        session.selectedChoiceID = nil
        session.lastEvaluation = nil
        return session
    }

    static func progress(
        for rawSession: InspectionTrainingSession,
        in lab: InspectionTrainingLab
    ) -> InspectionTrainingProgress {
        let session = normalized(rawSession, for: lab)
        let completedTasks = lab.tasks.reduce(into: 0) { count, task in
            if session.taskProgress[task.id]?.isCompleted == true {
                count += 1
            }
        }
        let earnedPoints = lab.tasks.reduce(into: 0) { total, task in
            total += min(
                max(0, session.taskProgress[task.id]?.earnedPoints ?? 0),
                max(0, task.maximumPoints)
            )
        }
        return InspectionTrainingProgress(
            completedTasks: completedTasks,
            totalTasks: lab.tasks.count,
            earnedPoints: earnedPoints,
            maximumPoints: lab.maximumScore,
            isCompleted: session.isCompleted
        )
    }

    static func canAdvance(
        _ session: InspectionTrainingSession,
        in lab: InspectionTrainingLab
    ) -> Bool {
        guard let task = currentTask(in: session, for: lab) else { return false }
        return session.lastEvaluation?.taskID == task.id
            && session.lastEvaluation?.isCorrect == true
            && session.taskProgress[task.id]?.isCompleted == true
    }

    static func canRetry(
        _ session: InspectionTrainingSession,
        in lab: InspectionTrainingLab
    ) -> Bool {
        guard let evaluation = normalized(session, for: lab).lastEvaluation else {
            return false
        }
        return evaluation.kind == .incorrect || evaluation.kind == .invalidSelection
    }

    /// Sanitises persisted or externally-created sessions against the current
    /// catalog. Catalog changes therefore cannot leave a view at an invalid task.
    static func normalized(
        _ rawSession: InspectionTrainingSession,
        for lab: InspectionTrainingLab
    ) -> InspectionTrainingSession {
        guard rawSession.labID == lab.id else {
            return InspectionTrainingSession(labID: lab.id, startedAt: rawSession.startedAt)
        }

        var session = rawSession
        let tasksByID = lab.tasks.reduce(into: [:]) { result, task in
            result[task.id] = task
        }
        session.taskProgress = session.taskProgress.reduce(into: [:]) { result, element in
            let (taskID, progress) = element
            guard let task = tasksByID[taskID] else { return }
            result[taskID] = InspectionTrainingTaskProgress(
                attempts: max(0, progress.attempts),
                incorrectAttempts: min(max(0, progress.incorrectAttempts), max(0, progress.attempts)),
                earnedPoints: progress.isCompleted
                    ? min(max(0, progress.earnedPoints), max(0, task.maximumPoints))
                    : 0,
                isCompleted: progress.isCompleted
            )
        }

        guard !lab.tasks.isEmpty else {
            session.currentTaskIndex = 0
            session.selectedChoiceID = nil
            session.lastEvaluation = nil
            session.completedAt = nil
            return session
        }

        let firstIncompleteIndex = lab.tasks.firstIndex {
            session.taskProgress[$0.id]?.isCompleted != true
        }

        if let firstIncompleteIndex {
            let hasPendingCorrectFeedback: Bool = {
                guard lab.tasks.indices.contains(session.currentTaskIndex) else { return false }
                let currentTask = lab.tasks[session.currentTaskIndex]
                return session.currentTaskIndex < firstIncompleteIndex
                    && session.taskProgress[currentTask.id]?.isCompleted == true
                    && session.lastEvaluation?.taskID == currentTask.id
                    && session.lastEvaluation?.isCorrect == true
            }()
            if !hasPendingCorrectFeedback {
                session.currentTaskIndex = firstIncompleteIndex
            }
            session.completedAt = nil
        } else if session.completedAt != nil {
            session.currentTaskIndex = lab.tasks.count
        } else {
            // All tasks have been answered correctly but the final feedback may
            // still be on screen. Keep that final task current until Advance.
            let finalIndex = lab.tasks.index(before: lab.tasks.endIndex)
            if session.lastEvaluation?.taskID == lab.tasks[finalIndex].id,
               session.lastEvaluation?.isCorrect == true {
                session.currentTaskIndex = finalIndex
            } else {
                session.currentTaskIndex = lab.tasks.count
            }
        }

        if lab.tasks.indices.contains(session.currentTaskIndex) {
            let task = lab.tasks[session.currentTaskIndex]
            let validChoiceIDs = Set(task.choices.map(\.id))
            if let choiceID = session.selectedChoiceID,
               !validChoiceIDs.contains(choiceID) {
                session.selectedChoiceID = nil
            }
            if let evaluation = session.lastEvaluation,
               evaluation.taskID != task.id
                    || (evaluation.kind != .invalidSelection
                        && !validChoiceIDs.contains(evaluation.choiceID)) {
                session.lastEvaluation = nil
                session.selectedChoiceID = nil
            }
        } else {
            session.selectedChoiceID = nil
            session.lastEvaluation = nil
        }

        return session
    }

    private static func pointsAwarded(
        maximumPoints: Int,
        priorIncorrectAttempts: Int
    ) -> Int {
        let maximumPoints = max(0, maximumPoints)
        guard maximumPoints > 0 else { return 0 }
        let penalty = (maximumPoints / 5) * max(0, priorIncorrectAttempts)
        let minimum = (maximumPoints * 2) / 5
        return max(minimum, maximumPoints - penalty)
    }
}
