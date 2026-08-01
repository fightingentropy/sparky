import SwiftUI
import UIKit

struct InspectionTrainingHomeView: View {
    @Environment(InspectionTrainingStore.self) private var trainingStore

    private let labs = InspectionTrainingCatalog.labs

    var body: some View {
        ZStack {
            SparkyBackdrop()

            ScrollView {
                LazyVStack(alignment: .leading, spacing: 16) {
                    trainerHero

                    StudyNotice(
                        title: "Revision simulator only",
                        message: "Practical inspection and testing requires competence, safe isolation, suitable instruments and supervised hands-on training. Live-test scenes in these labs are virtual only."
                    )

                    SparkySectionHeader(
                        eyebrow: "Practical training",
                        title: "Choose a test lab",
                        detail: "\(trainingStore.completedLabCount) of \(labs.count) complete"
                    )

                    ForEach(labs) { lab in
                        InspectionTrainingLabCard(lab: lab)
                    }
                }
                .padding(.horizontal, SparkyLayout.pageInset)
                .padding(.top, 10)
                .padding(.bottom, 36)
            }
            .scrollIndicators(.hidden)
        }
        .navigationTitle("Inspection & Testing")
        .navigationBarTitleDisplayMode(.inline)
    }

    private var trainerHero: some View {
        VStack(alignment: .leading, spacing: 16) {
            HStack(alignment: .center, spacing: 16) {
                VStack(alignment: .leading, spacing: 6) {
                    SparkyEyebrow(text: "Virtual test bench")
                    Text("Learn by making the decisions")
                        .font(.title2.weight(.bold))
                        .foregroundStyle(Color.sparkyText)
                    Text("Work through instrument setup, test arrangements, simulated readings and result interpretation.")
                        .font(.subheadline)
                        .foregroundStyle(Color.sparkyMuted)
                        .fixedSize(horizontal: false, vertical: true)
                }

                Spacer(minLength: 8)

                ProgressRing(progress: trainingStore.overallProgress, size: 68, lineWidth: 7)
            }

            HStack(spacing: 10) {
                MetricTile(
                    label: "Labs complete",
                    value: "\(trainingStore.completedLabCount)/\(labs.count)",
                    symbol: "checkmark.seal.fill"
                )
                MetricTile(
                    label: "Guided decisions",
                    value: "\(labs.reduce(0) { $0 + $1.tasks.count })",
                    symbol: "hand.tap.fill"
                )
            }
        }
        .sparkyCard(padding: 18)
    }
}

private struct InspectionTrainingLabCard: View {
    @Environment(InspectionTrainingStore.self) private var trainingStore

    let lab: InspectionTrainingLab

    private var progress: InspectionTrainingProgress {
        trainingStore.progress(for: lab)
    }

    private var session: InspectionTrainingSession {
        trainingStore.session(for: lab)
    }

    private var actionTitle: String {
        if progress.isCompleted { return "Review result" }
        if trainingStore.hasStarted(labID: lab.id) {
            let step = min(session.currentTaskIndex + 1, lab.tasks.count)
            if session.lastEvaluation != nil {
                return "Review step \(step) feedback"
            }
            return "Continue step \(step)"
        }
        return "Begin lab"
    }

    var body: some View {
        NavigationLink {
            InspectionTrainingSessionView(lab: lab)
        } label: {
            VStack(alignment: .leading, spacing: 14) {
                HStack(alignment: .top, spacing: 13) {
                    Image(systemName: lab.symbolName)
                        .font(.title2.weight(.semibold))
                        .foregroundStyle(Color.sparkyAccent)
                        .frame(width: 48, height: 48)
                        .background(Color.sparkyAccentSoft)
                        .clipShape(RoundedRectangle(cornerRadius: 14, style: .continuous))

                    VStack(alignment: .leading, spacing: 5) {
                        HStack(spacing: 7) {
                            InspectionTestModeBadge(mode: lab.testMode)
                            Text("\(lab.tasks.count) steps")
                                .font(.caption2.weight(.bold).monospaced())
                                .foregroundStyle(Color.sparkyMuted)
                        }

                        Text(lab.title)
                            .font(.title3.weight(.bold))
                            .foregroundStyle(Color.sparkyText)
                            .multilineTextAlignment(.leading)
                            .fixedSize(horizontal: false, vertical: true)
                    }

                    Spacer(minLength: 0)

                    if progress.isCompleted {
                        Image(systemName: "checkmark.circle.fill")
                            .font(.title3)
                            .foregroundStyle(Color.sparkySuccess)
                            .accessibilityHidden(true)
                    }
                }

                Text(lab.summary)
                    .font(.subheadline)
                    .foregroundStyle(Color.sparkyMuted)
                    .multilineTextAlignment(.leading)
                    .fixedSize(horizontal: false, vertical: true)

                VStack(spacing: 7) {
                    ProgressView(value: progress.fractionCompleted)
                        .tint(progress.isCompleted ? Color.sparkySuccess : Color.sparkyAccent)

                    HStack {
                        Text("\(progress.completedTasks) of \(progress.totalTasks) decisions")
                        Spacer()
                        Text(actionTitle)
                            .foregroundStyle(Color.sparkyAccent)
                        Image(systemName: "arrow.right")
                            .font(.caption.bold())
                            .foregroundStyle(Color.sparkyAccent)
                            .accessibilityHidden(true)
                    }
                    .font(.caption.weight(.semibold))
                    .foregroundStyle(Color.sparkyMuted)
                }
            }
            .frame(maxWidth: .infinity, alignment: .leading)
            .sparkyCard(padding: 17)
            .contentShape(Rectangle())
        }
        .buttonStyle(.plain)
        .accessibilityHint(actionTitle)
    }
}

struct InspectionTrainingSessionView: View {
    @Environment(InspectionTrainingStore.self) private var trainingStore
    @Environment(AppRouter.self) private var router
    @Environment(\.dismiss) private var dismiss

    let lab: InspectionTrainingLab

    @State private var showingHint = false
    @State private var showingRestartConfirmation = false
    @State private var preparedWorkbenchTaskID: String?
    @State private var selectedWorkbenchFunction: WorkbenchFunction?
    @State private var selectedLeadTopology: WorkbenchLeadTopology?
    @State private var workbenchActionCompleted = false
    @AccessibilityFocusState private var feedbackIsFocused: Bool

    private var session: InspectionTrainingSession {
        trainingStore.session(for: lab)
    }

    private var progress: InspectionTrainingProgress {
        trainingStore.progress(for: lab)
    }

    var body: some View {
        Group {
            if session.isCompleted {
                completionView
            } else if let task = trainingStore.currentTask(for: lab) {
                taskView(task)
            } else {
                ContentUnavailableCard(
                    title: "Lab unavailable",
                    message: "This training lab could not load its next step.",
                    symbol: "wrench.and.screwdriver"
                )
            }
        }
        .navigationTitle(lab.shortTitle)
        .navigationBarTitleDisplayMode(.inline)
        .toolbar(session.isCompleted ? .visible : .hidden, for: .tabBar)
        .toolbar(session.isCompleted ? .visible : .hidden, for: .navigationBar)
        .toolbar {
            ToolbarItem(placement: .topBarTrailing) {
                Button {
                    showingRestartConfirmation = true
                } label: {
                    Image(systemName: "arrow.counterclockwise")
                        .frame(width: 44, height: 44)
                        .contentShape(Rectangle())
                }
                .accessibilityLabel("Restart \(lab.shortTitle) lab")
            }
        }
        .confirmationDialog(
            "Restart this lab?",
            isPresented: $showingRestartConfirmation,
            titleVisibility: .visible
        ) {
            Button("Restart lab", role: .destructive) {
                trainingStore.reset(labID: lab.id)
                showingHint = false
                resetWorkbench()
                Haptics.selection()
            }
        } message: {
            Text("This clears the saved answers and score for \(lab.title). Other labs are kept.")
        }
        .onAppear {
            updateOrientation(isCompleted: session.isCompleted)
        }
        .onChange(of: session.isCompleted) { _, isCompleted in
            updateOrientation(isCompleted: isCompleted)
        }
        .onDisappear {
            InterfaceOrientationCoordinator.leaveInspectionTrainer()
        }
    }

    private func taskView(_ task: InspectionTrainingTask) -> some View {
        let currentSession = session
        let workbenchSetup = WorkbenchSetup.configuration(
            labID: lab.id,
            taskIndex: currentSession.currentTaskIndex
        )
        let isWorkbenchReady = selectedWorkbenchFunction == workbenchSetup.correctFunction
            && selectedLeadTopology == workbenchSetup.correctTopology
            && (workbenchSetup.requiredAction == .none || workbenchActionCompleted)

        return GeometryReader { proxy in
            if proxy.size.width > proxy.size.height {
                immersiveTaskView(
                    task,
                    currentSession: currentSession,
                    setup: workbenchSetup,
                    isWorkbenchReady: isWorkbenchReady
                )
            } else {
                portraitTaskView(
                    task,
                    currentSession: currentSession,
                    setup: workbenchSetup,
                    isWorkbenchReady: isWorkbenchReady
                )
            }
        }
        .onAppear {
            prepareWorkbench(for: task.id)
        }
        .onChange(of: task.id) { _, newTaskID in
            prepareWorkbench(for: newTaskID)
        }
    }

    private func portraitTaskView(
        _ task: InspectionTrainingTask,
        currentSession: InspectionTrainingSession,
        setup: WorkbenchSetup,
        isWorkbenchReady: Bool
    ) -> some View {
        ZStack {
            SparkyBackdrop()

            ScrollView {
                LazyVStack(alignment: .leading, spacing: 16) {
                    HStack {
                        WorkbenchRoundButton(symbol: "chevron.backward") {
                            leaveTrainer()
                        }
                        .accessibilityLabel("Leave \(lab.shortTitle) lab")

                        Spacer()

                        WorkbenchRoundButton(symbol: "arrow.counterclockwise") {
                            showingRestartConfirmation = true
                        }
                        .accessibilityLabel("Restart \(lab.shortTitle) lab")
                    }

                    LabProgressHeader(
                        lab: lab,
                        step: currentSession.currentTaskIndex + 1,
                        total: lab.tasks.count,
                        fraction: progress.fractionCompleted
                    )

                    InspectionTrainingWorkbench(
                        lab: lab,
                        taskIndex: currentSession.currentTaskIndex,
                        evaluation: currentSession.lastEvaluation,
                        setup: setup,
                        selectedFunction: $selectedWorkbenchFunction,
                        selectedTopology: $selectedLeadTopology,
                        actionCompleted: $workbenchActionCompleted,
                        immersive: false
                    )

                    VStack(alignment: .leading, spacing: 10) {
                        SparkyEyebrow(text: "Decision \(currentSession.currentTaskIndex + 1)")
                        Text(task.title)
                            .font(.title2.weight(.bold))
                            .foregroundStyle(Color.sparkyText)
                        Text(task.instruction)
                            .font(.body)
                            .foregroundStyle(Color.sparkyMuted)
                            .fixedSize(horizontal: false, vertical: true)
                    }
                    .sparkyCard(padding: 17)

                    VStack(alignment: .leading, spacing: 10) {
                        SparkySectionHeader(
                            eyebrow: "Your move",
                            title: isWorkbenchReady ? "Choose the best action" : "Complete the bench setup first"
                        )

                        if !isWorkbenchReady {
                            Label(
                                "Set the tester, place both probes, then press TEST or AUTO NULL when prompted.",
                                systemImage: "lock.fill"
                            )
                            .font(.caption.weight(.semibold))
                            .foregroundStyle(Color.sparkyMuted)
                        }

                        ForEach(task.choices) { choice in
                            InspectionTrainingChoiceButton(
                                choice: choice,
                                task: task,
                                evaluation: currentSession.lastEvaluation,
                                isEnabled: isWorkbenchReady
                            ) {
                                submit(choice, isWorkbenchReady: isWorkbenchReady)
                            }
                        }
                    }

                    if currentSession.lastEvaluation == nil {
                        Button {
                            toggleHint()
                        } label: {
                            Label(showingHint ? "Hide hint" : "Show hint", systemImage: "lightbulb.fill")
                        }
                        .buttonStyle(SparkySecondaryButtonStyle())

                        if showingHint {
                            HintCard(message: task.retryMessage)
                                .transition(.opacity.combined(with: .move(edge: .top)))
                        }
                    }

                    if let evaluation = currentSession.lastEvaluation {
                        InspectionTrainingFeedbackCard(evaluation: evaluation)
                            .accessibilityFocused($feedbackIsFocused)
                    }

                    StudyNotice(title: lab.testMode.rawValue, message: lab.safetyNote)
                }
                .padding(.horizontal, SparkyLayout.pageInset)
                .padding(.top, 10)
                .padding(.bottom, currentSession.lastEvaluation == nil ? 30 : 100)
            }
            .scrollIndicators(.hidden)
        }
        .safeAreaInset(edge: .bottom) {
            if let evaluation = currentSession.lastEvaluation {
                feedbackAction(evaluation)
            }
        }
    }

    private func immersiveTaskView(
        _ task: InspectionTrainingTask,
        currentSession: InspectionTrainingSession,
        setup: WorkbenchSetup,
        isWorkbenchReady: Bool
    ) -> some View {
        ZStack {
            InspectionTrainingWorkbench(
                lab: lab,
                taskIndex: currentSession.currentTaskIndex,
                evaluation: currentSession.lastEvaluation,
                setup: setup,
                selectedFunction: $selectedWorkbenchFunction,
                selectedTopology: $selectedLeadTopology,
                actionCompleted: $workbenchActionCompleted,
                immersive: true
            )
            .ignoresSafeArea()

            VStack(spacing: 0) {
                HStack(spacing: 12) {
                    WorkbenchRoundButton(symbol: "chevron.backward") {
                        leaveTrainer()
                    }
                    .accessibilityLabel("Leave \(lab.shortTitle) lab")

                    VStack(alignment: .leading, spacing: 2) {
                        Text(lab.shortTitle)
                            .font(.headline.weight(.black))
                            .foregroundStyle(.black.opacity(0.82))
                        Text("STEP \(currentSession.currentTaskIndex + 1) OF \(lab.tasks.count) · \(lab.testMode.rawValue)")
                            .font(.caption2.weight(.black).monospaced())
                            .foregroundStyle(.black.opacity(0.58))
                    }
                    .padding(.horizontal, 12)
                    .padding(.vertical, 8)
                    .background(.white.opacity(0.88))
                    .clipShape(RoundedRectangle(cornerRadius: 13, style: .continuous))

                    Spacer()

                    WorkbenchRoundButton(symbol: "arrow.counterclockwise") {
                        showingRestartConfirmation = true
                    }
                    .accessibilityLabel("Restart \(lab.shortTitle) lab")
                }
                .padding(.horizontal, 18)
                .padding(.top, 10)

                Spacer(minLength: 8)

                ImmersiveDecisionPanel(
                    task: task,
                    evaluation: currentSession.lastEvaluation,
                    isWorkbenchReady: isWorkbenchReady,
                    isShowingHint: showingHint,
                    onToggleHint: toggleHint,
                    onSelect: { choice in
                        submit(choice, isWorkbenchReady: isWorkbenchReady)
                    },
                    feedbackActionTitle: currentSession.lastEvaluation.map { evaluation in
                        evaluation.isCorrect
                            ? (currentSession.currentTaskIndex == lab.tasks.count - 1 ? "Finish lab" : "Continue")
                            : "Try again"
                    },
                    onFeedbackAction: {
                        guard let evaluation = currentSession.lastEvaluation else { return }
                        handleFeedbackAction(evaluation)
                    }
                )
                .padding(.horizontal, 18)
                .padding(.bottom, 12)
            }
        }
        .background(Color(red: 0.92, green: 0.88, blue: 0.78))
    }

    private func submit(_ choice: InspectionTrainingChoice, isWorkbenchReady: Bool) {
        guard isWorkbenchReady else {
            UIAccessibility.post(
                notification: .announcement,
                argument: "Set the tester, connect both probes and complete the instrument action before choosing an answer."
            )
            return
        }

        let evaluation = trainingStore.submit(choiceID: choice.id, for: lab)
        showingHint = false
        evaluation.isCorrect ? Haptics.success() : Haptics.warning()
        announceEvaluation(evaluation)
    }

    private func toggleHint() {
        withAnimation(.easeInOut(duration: 0.18)) {
            showingHint.toggle()
        }
        Haptics.selection()
    }

    @ViewBuilder
    private func feedbackAction(_ evaluation: InspectionTrainingEvaluation) -> some View {
        Button {
            handleFeedbackAction(evaluation)
        } label: {
            HStack {
                Text(evaluation.isCorrect
                    ? (session.currentTaskIndex == lab.tasks.count - 1 ? "Finish lab" : "Continue")
                    : "Try again")
                Spacer()
                Image(systemName: evaluation.isCorrect ? "arrow.right" : "arrow.counterclockwise")
            }
        }
        .buttonStyle(SparkyPrimaryButtonStyle())
        .padding(.horizontal, SparkyLayout.pageInset)
        .padding(.vertical, 10)
        .background(.ultraThinMaterial)
    }

    private func prepareWorkbench(for taskID: String) {
        guard preparedWorkbenchTaskID != taskID else { return }
        preparedWorkbenchTaskID = taskID
        selectedWorkbenchFunction = .off
        selectedLeadTopology = nil
        workbenchActionCompleted = false
        feedbackIsFocused = false
    }

    private func resetWorkbench() {
        preparedWorkbenchTaskID = nil
        selectedWorkbenchFunction = .off
        selectedLeadTopology = nil
        workbenchActionCompleted = false
        feedbackIsFocused = false
    }

    private func handleFeedbackAction(_ evaluation: InspectionTrainingEvaluation) {
        showingHint = false
        feedbackIsFocused = false
        if evaluation.isCorrect {
            trainingStore.advance(in: lab)
        } else {
            trainingStore.retry(in: lab)
        }
        resetWorkbench()
        Haptics.selection()
    }

    private func updateOrientation(isCompleted: Bool) {
        if isCompleted {
            InterfaceOrientationCoordinator.leaveInspectionTrainer()
        } else {
            InterfaceOrientationCoordinator.enterInspectionTrainer()
        }
    }

    private func leaveTrainer() {
        InterfaceOrientationCoordinator.leaveInspectionTrainer()
        dismiss()
    }

    private func announceEvaluation(_ evaluation: InspectionTrainingEvaluation) {
        let prefix = evaluation.isCorrect ? "Correct." : "Incorrect."

        Task { @MainActor in
            await Task.yield()
            feedbackIsFocused = true
            UIAccessibility.post(
                notification: .announcement,
                argument: "\(prefix) \(evaluation.message)"
            )
        }
    }

    private var completionView: some View {
        ZStack {
            SparkyBackdrop()

            ScrollView {
                VStack(alignment: .leading, spacing: 18) {
                    VStack(alignment: .leading, spacing: 16) {
                        HStack(alignment: .center, spacing: 16) {
                            ZStack {
                                Circle()
                                    .fill(Color.sparkySuccess.opacity(0.14))
                                Image(systemName: "checkmark.seal.fill")
                                    .font(.largeTitle)
                                    .foregroundStyle(Color.sparkySuccess)
                            }
                            .frame(width: 70, height: 70)

                            VStack(alignment: .leading, spacing: 5) {
                                SparkyEyebrow(text: "Lab complete")
                                Text(lab.title)
                                    .font(.title2.weight(.bold))
                                    .foregroundStyle(Color.sparkyText)
                                Text("You completed every guided decision in this scenario.")
                                    .font(.subheadline)
                                    .foregroundStyle(Color.sparkyMuted)
                            }
                        }

                        HStack(spacing: 10) {
                            MetricTile(
                                label: "Score",
                                value: "\(Int((progress.scorePercentage * 100).rounded()))%",
                                symbol: "chart.bar.fill"
                            )
                            MetricTile(
                                label: "Attempts",
                                value: "\(session.attemptCount)",
                                symbol: "hand.tap.fill"
                            )
                        }
                    }
                    .sparkyCard(padding: 18)

                    VStack(alignment: .leading, spacing: 11) {
                        SparkySectionHeader(eyebrow: "What you practised", title: "Completed sequence")

                        ForEach(Array(lab.tasks.enumerated()), id: \.element.id) { index, task in
                            HStack(alignment: .top, spacing: 10) {
                                Image(systemName: "checkmark.circle.fill")
                                    .foregroundStyle(Color.sparkySuccess)
                                VStack(alignment: .leading, spacing: 2) {
                                    Text("\(index + 1). \(task.title)")
                                        .font(.subheadline.weight(.semibold))
                                        .foregroundStyle(Color.sparkyText)
                                    Text(task.successMessage)
                                        .font(.caption)
                                        .foregroundStyle(Color.sparkyMuted)
                                        .fixedSize(horizontal: false, vertical: true)
                                }
                            }
                        }
                    }
                    .sparkyCard(padding: 17)

                    StudyNotice(
                        title: "Take it into supervised practice",
                        message: "A completed simulation is not proof of practical competence. Repeat the sequence with a qualified trainer, current references and the correct test equipment."
                    )

                    Button {
                        router.openExam("fundamental-inspection-testing")
                    } label: {
                        Label("Open Fundamental Inspection exam", systemImage: "checkmark.rectangle.stack.fill")
                    }
                    .buttonStyle(SparkyPrimaryButtonStyle())

                    Button {
                        showingRestartConfirmation = true
                    } label: {
                        Label("Practise this lab again", systemImage: "arrow.counterclockwise")
                            .frame(maxWidth: .infinity)
                    }
                    .buttonStyle(SparkySecondaryButtonStyle())
                }
                .padding(.horizontal, SparkyLayout.pageInset)
                .padding(.top, 12)
                .padding(.bottom, 36)
            }
            .scrollIndicators(.hidden)
        }
    }
}

private struct LabProgressHeader: View {
    let lab: InspectionTrainingLab
    let step: Int
    let total: Int
    let fraction: Double

    var body: some View {
        VStack(spacing: 9) {
            HStack {
                InspectionTestModeBadge(mode: lab.testMode)
                Spacer()
                Text("Step \(step) of \(total)")
                    .font(.caption.weight(.bold).monospacedDigit())
                    .foregroundStyle(Color.sparkyMuted)
            }

            ProgressView(value: fraction)
                .tint(Color.sparkyAccent)
        }
        .accessibilityElement(children: .combine)
        .accessibilityLabel("\(lab.testMode.rawValue), step \(step) of \(total)")
    }
}

private struct InspectionTestModeBadge: View {
    let mode: InspectionTrainingTestMode

    private var color: Color {
        mode == .live ? Color.sparkyDanger : Color.sparkySuccess
    }

    var body: some View {
        Label(
            mode.rawValue,
            systemImage: mode == .live ? "bolt.trianglebadge.exclamationmark.fill" : "lock.shield.fill"
        )
        .font(.caption2.weight(.bold).monospaced())
        .foregroundStyle(color)
        .padding(.horizontal, 9)
        .padding(.vertical, 6)
        .background(color.opacity(0.12))
        .clipShape(Capsule())
        .overlay { Capsule().stroke(color.opacity(0.28), lineWidth: 1) }
    }
}

private struct InspectionTrainingChoiceButton: View {
    let choice: InspectionTrainingChoice
    let task: InspectionTrainingTask
    let evaluation: InspectionTrainingEvaluation?
    let isEnabled: Bool
    let action: () -> Void

    private var isCorrectChoice: Bool { choice.id == task.correctChoiceID }
    private var isSelected: Bool { evaluation?.choiceID == choice.id }

    private var tone: ChoiceTone {
        guard let evaluation else { return .neutral }
        if isCorrectChoice { return .correct }
        if isSelected && !evaluation.isCorrect { return .incorrect }
        return .muted
    }

    var body: some View {
        Button(action: action) {
            HStack(alignment: .top, spacing: 12) {
                Image(systemName: tone.symbolName)
                    .font(.headline)
                    .foregroundStyle(tone.color)
                    .frame(width: 24, height: 24)

                VStack(alignment: .leading, spacing: 4) {
                    Text(choice.title)
                        .font(.subheadline.weight(.bold))
                        .foregroundStyle(Color.sparkyText)
                        .multilineTextAlignment(.leading)
                        .fixedSize(horizontal: false, vertical: true)
                    if !choice.detail.isEmpty {
                        Text(choice.detail)
                            .font(.caption)
                            .foregroundStyle(Color.sparkyMuted)
                            .multilineTextAlignment(.leading)
                            .fixedSize(horizontal: false, vertical: true)
                    }
                }

                Spacer(minLength: 0)
            }
            .padding(14)
            .frame(maxWidth: .infinity, minHeight: 54, alignment: .leading)
            .background(tone.background)
            .clipShape(RoundedRectangle(cornerRadius: 15, style: .continuous))
            .overlay {
                RoundedRectangle(cornerRadius: 15, style: .continuous)
                    .stroke(tone.border, lineWidth: 1)
            }
            .contentShape(Rectangle())
        }
        .buttonStyle(.plain)
        .disabled(evaluation != nil || !isEnabled)
        .opacity(evaluation == nil && !isEnabled ? 0.52 : 1)
        .accessibilityValue(tone.accessibilityValue)
        .accessibilityHint(isEnabled ? "Double tap to submit this action" : "Complete both virtual test bench stages first")
    }
}

private enum ChoiceTone {
    case neutral
    case correct
    case incorrect
    case muted

    var color: Color {
        switch self {
        case .neutral: Color.sparkyAccent
        case .correct: Color.sparkySuccess
        case .incorrect: Color.sparkyDanger
        case .muted: Color.sparkyMuted
        }
    }

    var background: Color {
        switch self {
        case .neutral: Color.sparkySurface
        case .correct: Color.sparkySuccess.opacity(0.12)
        case .incorrect: Color.sparkyDanger.opacity(0.11)
        case .muted: Color.sparkySurface.opacity(0.58)
        }
    }

    var border: Color {
        switch self {
        case .neutral, .muted: Color.sparkyBorder
        case .correct, .incorrect: color.opacity(0.42)
        }
    }

    var symbolName: String {
        switch self {
        case .neutral: "circle"
        case .correct: "checkmark.circle.fill"
        case .incorrect: "xmark.circle.fill"
        case .muted: "circle"
        }
    }

    var accessibilityValue: String {
        switch self {
        case .neutral: "Not answered"
        case .correct: "Correct answer"
        case .incorrect: "Incorrect answer"
        case .muted: "Not selected"
        }
    }
}

private struct InspectionTrainingFeedbackCard: View {
    let evaluation: InspectionTrainingEvaluation

    private var color: Color {
        evaluation.isCorrect ? Color.sparkySuccess : Color.sparkyDanger
    }

    var body: some View {
        HStack(alignment: .top, spacing: 12) {
            Image(systemName: evaluation.isCorrect ? "checkmark.seal.fill" : "arrow.counterclockwise.circle.fill")
                .font(.title2)
                .foregroundStyle(color)

            VStack(alignment: .leading, spacing: 5) {
                HStack {
                    Text(evaluation.isCorrect ? "Correct" : "Try that again")
                        .font(.headline)
                        .foregroundStyle(Color.sparkyText)
                    Spacer()
                    if evaluation.pointsAwarded > 0 {
                        Text("+\(evaluation.pointsAwarded)")
                            .font(.caption.bold().monospacedDigit())
                            .foregroundStyle(Color.sparkySuccess)
                    }
                }
                Text(evaluation.message)
                    .font(.subheadline)
                    .foregroundStyle(Color.sparkyMuted)
                    .fixedSize(horizontal: false, vertical: true)
            }
        }
        .padding(15)
        .background(color.opacity(0.10))
        .clipShape(RoundedRectangle(cornerRadius: 16, style: .continuous))
        .overlay {
            RoundedRectangle(cornerRadius: 16, style: .continuous)
                .stroke(color.opacity(0.30), lineWidth: 1)
        }
        .accessibilityElement(children: .combine)
    }
}

private struct HintCard: View {
    let message: String

    var body: some View {
        HStack(alignment: .top, spacing: 11) {
            Image(systemName: "lightbulb.max.fill")
                .foregroundStyle(Color.sparkyAccent)
            Text(message)
                .font(.subheadline)
                .foregroundStyle(Color.sparkyText)
                .fixedSize(horizontal: false, vertical: true)
        }
        .padding(14)
        .background(Color.sparkyAccentSoft)
        .clipShape(RoundedRectangle(cornerRadius: 15, style: .continuous))
    }
}

enum WorkbenchFunction: String, CaseIterable, Identifiable {
    case off
    case voltageCheck
    case lowOhms
    case insulation500
    case loopNoTrip
    case prospectiveFaultCurrent

    var id: String { rawValue }

    var label: String {
        switch self {
        case .off: "OFF"
        case .voltageCheck: "MFT V RANGE"
        case .lowOhms: "LOW Ω"
        case .insulation500: "IR 500 V"
        case .loopNoTrip: "Zs NO-TRIP"
        case .prospectiveFaultCurrent: "PFC"
        }
    }

    var dialAngle: Double {
        switch self {
        case .off: -112
        case .voltageCheck: -68
        case .lowOhms: -24
        case .insulation500: 24
        case .loopNoTrip: 68
        case .prospectiveFaultCurrent: 112
        }
    }

    var shortLabel: String {
        switch self {
        case .off: "OFF"
        case .voltageCheck: "V"
        case .lowOhms: "Ω"
        case .insulation500: "500V"
        case .loopNoTrip: "Zs"
        case .prospectiveFaultCurrent: "PFC"
        }
    }

    var isLiveFunction: Bool {
        self == .voltageCheck || self == .loopNoTrip || self == .prospectiveFaultCurrent
    }
}

enum WorkbenchLeadTopology: String, Identifiable {
    case parked
    case removed
    case shorted
    case lineCPC
    case lineNeutral
    case neutralCPC
    case lineNeutralToCPC
    case ringEndToEnd
    case ringCrossLineNeutral
    case ringCrossLineCPC
    case pfcPSCC
    case pfcPEFC

    var id: String { rawValue }

    var label: String {
        switch self {
        case .parked: "Leads parked — controls first"
        case .removed: "Test leads removed"
        case .shorted: "Leads shorted for nulling"
        case .lineCPC: "L–CPC"
        case .lineNeutral: "L–N"
        case .neutralCPC: "N–CPC"
        case .lineNeutralToCPC: "(L+N)–CPC"
        case .ringEndToEnd: "Ring end-to-end pairs: r1, rn, r2"
        case .ringCrossLineNeutral: "L–N cross-pair: r1(A)–rn(B)"
        case .ringCrossLineCPC: "L–CPC cross-pair: r1(A)–r2(B)"
        case .pfcPSCC: "First: PSCC L–N"
        case .pfcPEFC: "Then: PEFC L–CPC"
        }
    }

    var terminalLabels: [String] {
        switch self {
        case .ringEndToEnd, .ringCrossLineNeutral, .ringCrossLineCPC: []
        default: ["L", "N", "CPC"]
        }
    }
}

enum WorkbenchRequiredAction: Equatable {
    case none
    case test
    case autoNull
}

struct WorkbenchSetup {
    let prompt: String
    let functions: [WorkbenchFunction]
    let correctFunction: WorkbenchFunction
    let topologies: [WorkbenchLeadTopology]
    let correctTopology: WorkbenchLeadTopology

    var requiredAction: WorkbenchRequiredAction {
        if correctFunction == .off { return .none }
        if correctTopology == .shorted { return .autoNull }
        return .test
    }

    static func configuration(labID: String, taskIndex: Int) -> WorkbenchSetup {
        switch labID {
        case "protective-conductor-continuity":
            switch taskIndex {
            case 0:
                setup("Park this MFT while safe isolation uses an approved voltage indicator and proving unit", .off, .parked)
            case 1:
                setup("Prepare the low-resistance instrument", .lowOhms, .shorted)
            case 2, 3:
                setup("Build the simulated R1+R2 path", .lowOhms, .lineCPC)
            default:
                setup("Leave the bench restored", .off, .removed)
            }
        case "ring-final-continuity":
            switch taskIndex {
            case 0:
                setup("Park this MFT while safe isolation uses an approved voltage indicator and proving unit", .off, .parked)
            case 1:
                setup("Prepare the end-to-end checks", .lowOhms, .ringEndToEnd)
            case 2:
                setup("Prepare the L–N cross-connection", .lowOhms, .ringCrossLineNeutral)
            case 3:
                setup("Prepare the L–CPC cross-connection for the reading pattern", .lowOhms, .ringCrossLineCPC)
            default:
                setup("Leave the bench restored", .off, .removed)
            }
        case "insulation-resistance":
            switch taskIndex {
            case 0:
                setup("Park this MFT while safe isolation uses an approved voltage indicator and proving unit", .off, .parked)
            case 1:
                setup("Keep the tester disconnected while the circuit is prepared", .off, .parked)
            case 2, 3:
                setup("Prepare the simulated insulation check", .insulation500, .lineNeutralToCPC)
            default:
                setup("Leave the bench discharged and restored", .off, .removed)
            }
        case "earth-fault-loop-impedance":
            switch taskIndex {
            case 0:
                setup("Keep the bench idle while controls are confirmed", .off, .parked)
            case 1:
                setup("Prepare the dead-test evidence for the alternative determination", .lowOhms, .lineCPC)
            case 2:
                setup("Prepare the virtual loop check", .loopNoTrip, .lineCPC)
            case 3:
                setup("Use the established values for the calculation", .off, .parked)
            default:
                setup("Leave the bench safely restored", .off, .removed)
            }
        case "prospective-fault-current":
            switch taskIndex {
            case 0:
                setup("Keep the bench idle while permitted non-live evidence is considered", .off, .parked)
            case 1:
                setup("Keep the tester parked while identifying the PSCC and PEFC quantities", .off, .parked)
            case 2:
                setup(
                    "Non-live evidence was unsuitable and direct measurement is justified — prepare PSCC L–N",
                    .prospectiveFaultCurrent,
                    .pfcPSCC
                )
            case 3:
                setup(
                    "Continue the justified direct measurement with PEFC L–CPC",
                    .prospectiveFaultCurrent,
                    .pfcPEFC
                )
            default:
                setup("Leave the bench safely restored", .off, .removed)
            }
        default:
            setup("Prepare the virtual tester", .off, .parked)
        }
    }

    private static func setup(
        _ prompt: String,
        _ correctFunction: WorkbenchFunction,
        _ correctTopology: WorkbenchLeadTopology
    ) -> WorkbenchSetup {
        WorkbenchSetup(
            prompt: prompt,
            functions: functionOptions(for: correctFunction),
            correctFunction: correctFunction,
            topologies: topologyOptions(for: correctTopology),
            correctTopology: correctTopology
        )
    }

    private static func functionOptions(for correct: WorkbenchFunction) -> [WorkbenchFunction] {
        switch correct {
        case .off: [.lowOhms, .off, .voltageCheck]
        case .lowOhms: [.lowOhms, .insulation500, .voltageCheck]
        case .insulation500: [.lowOhms, .insulation500, .loopNoTrip]
        case .loopNoTrip: [.prospectiveFaultCurrent, .lowOhms, .loopNoTrip]
        case .prospectiveFaultCurrent: [.loopNoTrip, .prospectiveFaultCurrent, .lowOhms]
        case .voltageCheck: [.lowOhms, .voltageCheck, .insulation500]
        }
    }

    private static func topologyOptions(for correct: WorkbenchLeadTopology) -> [WorkbenchLeadTopology] {
        switch correct {
        case .parked: [.lineCPC, .parked, .lineNeutral]
        case .removed: [.lineNeutral, .removed, .lineCPC]
        case .shorted: [.lineCPC, .shorted, .neutralCPC]
        case .lineCPC: [.lineNeutral, .lineCPC, .neutralCPC]
        case .lineNeutral: [.neutralCPC, .lineNeutral, .lineCPC]
        case .neutralCPC: [.lineNeutral, .neutralCPC, .lineCPC]
        case .lineNeutralToCPC: [.lineCPC, .lineNeutralToCPC, .lineNeutral]
        case .ringEndToEnd: [.ringCrossLineNeutral, .ringEndToEnd, .lineCPC]
        case .ringCrossLineNeutral: [.ringEndToEnd, .ringCrossLineCPC, .ringCrossLineNeutral]
        case .ringCrossLineCPC: [.ringCrossLineNeutral, .lineCPC, .ringCrossLineCPC]
        case .pfcPSCC: [.lineCPC, .pfcPSCC, .neutralCPC]
        case .pfcPEFC: [.lineNeutral, .pfcPEFC, .neutralCPC]
        }
    }
}

private enum WorkbenchProbe: String, Identifiable {
    case red
    case black

    var id: String { rawValue }
    var label: String { rawValue.capitalized }
    var color: Color { self == .red ? Color(red: 0.88, green: 0.11, blue: 0.06) : Color(red: 0.08, green: 0.08, blue: 0.09) }
    var dock: WorkbenchTerminalID { self == .red ? .redDock : .blackDock }
}

enum WorkbenchTerminalID: String, Hashable, Identifiable {
    case redDock
    case blackDock
    case nullingPost
    case line
    case neutral
    case cpc
    case lineA
    case lineB
    case neutralA
    case neutralB
    case cpcA
    case cpcB
    case redRemoved
    case blackRemoved

    var id: String { rawValue }

    var label: String {
        switch self {
        case .redDock: "red probe cradle"
        case .blackDock: "black probe cradle"
        case .nullingPost: "nulling point"
        case .line: "line terminal"
        case .neutral: "neutral terminal"
        case .cpc: "CPC terminal"
        case .lineA: "line end A"
        case .lineB: "line end B"
        case .neutralA: "neutral end A"
        case .neutralB: "neutral end B"
        case .cpcA: "CPC end A"
        case .cpcB: "CPC end B"
        case .redRemoved: "red lead case"
        case .blackRemoved: "black lead case"
        }
    }
}

private struct WorkbenchTerminalTarget: Identifiable {
    let id: WorkbenchTerminalID
    let normalizedPoint: CGPoint
    let color: Color
    let visible: Bool

    func point(in size: CGSize) -> CGPoint {
        CGPoint(x: normalizedPoint.x * size.width, y: normalizedPoint.y * size.height)
    }
}

enum WorkbenchSceneKind: Equatable {
    case consumerUnit
    case ringCircuit
    case accessories
}

enum WorkbenchRingPair: Hashable {
    case line
    case neutral
    case cpc
}

enum WorkbenchConnectionResolver {
    static func resolve(
        red: WorkbenchTerminalID,
        black: WorkbenchTerminalID,
        function: WorkbenchFunction?,
        sceneKind: WorkbenchSceneKind,
        expectedTopology: WorkbenchLeadTopology,
        completedRingPairs: Set<WorkbenchRingPair> = []
    ) -> WorkbenchLeadTopology? {
        if red == .redDock && black == .blackDock { return .parked }
        if red == .redRemoved && black == .blackRemoved { return .removed }
        if red == .nullingPost && black == .nullingPost { return .shorted }

        if sceneKind == .ringCircuit {
            let pair = Set([red, black])
            if expectedTopology == .ringEndToEnd,
               completedRingPairs == Set(WorkbenchRingPair.allRequired) {
                return .ringEndToEnd
            }
            if pair == Set([.lineA, .neutralB]) || pair == Set([.lineB, .neutralA]) {
                return .ringCrossLineNeutral
            }
            if pair == Set([.lineA, .cpcB]) || pair == Set([.lineB, .cpcA]) {
                return .ringCrossLineCPC
            }
            return nil
        }

        let pair = Set([red, black])
        if pair == Set([.line, .neutral]) {
            if function?.isLiveFunction == true, red != .line { return nil }
            return expectedTopology == .pfcPSCC ? .pfcPSCC : .lineNeutral
        }
        if pair == Set([.line, .cpc]) {
            if function?.isLiveFunction == true, red != .line { return nil }
            if expectedTopology == .pfcPEFC { return .pfcPEFC }
            if expectedTopology == .lineNeutralToCPC { return .lineNeutralToCPC }
            return .lineCPC
        }
        if pair == Set([.neutral, .cpc]) { return .neutralCPC }
        return nil
    }
}

private extension WorkbenchRingPair {
    static let allRequired: [WorkbenchRingPair] = [.line, .neutral, .cpc]
}

private struct InspectionTrainingWorkbench: View {
    let lab: InspectionTrainingLab
    let taskIndex: Int
    let evaluation: InspectionTrainingEvaluation?
    let setup: WorkbenchSetup
    @Binding var selectedFunction: WorkbenchFunction?
    @Binding var selectedTopology: WorkbenchLeadTopology?
    @Binding var actionCompleted: Bool
    let immersive: Bool

    @State private var redAttachment: WorkbenchTerminalID = .redDock
    @State private var blackAttachment: WorkbenchTerminalID = .blackDock
    @State private var draggingProbe: WorkbenchProbe?
    @State private var dragLocation: CGPoint?
    @State private var candidateTarget: WorkbenchTerminalID?
    @State private var completedRingPairs: Set<WorkbenchRingPair> = []

    private var taskKey: String { "\(lab.id)-\(taskIndex)" }
    private var functionIsReady: Bool { selectedFunction == setup.correctFunction }
    private var topologyIsReady: Bool { selectedTopology == setup.correctTopology }
    private var actionIsReady: Bool { setup.requiredAction == .none || actionCompleted }
    private var isReady: Bool { functionIsReady && topologyIsReady && actionIsReady }

    private var sceneKind: WorkbenchSceneKind {
        switch lab.id {
        case "ring-final-continuity": .ringCircuit
        case "insulation-resistance": .accessories
        default: .consumerUnit
        }
    }

    private var display: String {
        if selectedFunction == nil || selectedFunction == .off {
            return setup.correctFunction == .off && topologyIsReady ? "SAFE" : "OFF"
        }
        if !functionIsReady { return "----" }
        if selectedTopology == nil { return "OL" }
        if !topologyIsReady { return "CHECK" }
        if !actionIsReady { return setup.requiredAction == .autoNull ? "NULL?" : "READY" }

        switch lab.id {
        case "protective-conductor-continuity":
            if taskIndex == 1 { return "0.00 Ω" }
            return taskIndex == 3 ? "3.8 Ω" : "0.54 Ω"
        case "ring-final-continuity":
            return taskIndex == 3 ? "0.29 Ω" : "0.62 Ω"
        case "insulation-resistance":
            return taskIndex >= 3 ? "2.80 MΩ" : ">999 MΩ"
        case "earth-fault-loop-impedance":
            return taskIndex == 2 ? "0.60 Ω" : "0.38 Ω"
        case "prospective-fault-current":
            return taskIndex == 3 ? "PEFC 1.20kA" : "PSCC 1.85kA"
        default:
            return evaluation?.isCorrect == true ? "PASS" : "READY"
        }
    }

    private var status: (text: String, symbol: String, color: Color) {
        if evaluation != nil {
            return ("Setup locked for this answer", "lock.fill", Color.sparkyMuted)
        }
        if selectedFunction == nil {
            return ("Turn the tester dial", "dial.medium", Color.sparkyAccent)
        }
        if !functionIsReady {
            return ("Choose the correct tester range", "exclamationmark.triangle.fill", Color.sparkyDanger)
        }
        if setup.correctTopology == .ringEndToEnd, completedRingPairs.count < WorkbenchRingPair.allRequired.count {
            return (
                "Measure r1, rn and r2 end to end · \(completedRingPairs.count)/3 complete",
                "point.3.filled.connected.trianglepath.dotted",
                Color.sparkyAccent
            )
        }
        if selectedTopology == nil {
            return ("Drag both probes onto the test points", "hand.draw.fill", Color.sparkyAccent)
        }
        if !topologyIsReady {
            return ("Move a probe to the correct terminal", "exclamationmark.triangle.fill", Color.sparkyDanger)
        }
        if !actionIsReady {
            return setup.requiredAction == .autoNull
                ? ("Press AUTO NULL to compensate the leads", "button.programmable", Color.sparkyAccent)
                : ("Press TEST to take the reading", "button.programmable", Color.sparkyAccent)
        }
        return ("Reading ready — choose your answer", "checkmark.circle.fill", Color.sparkySuccess)
    }

    @ViewBuilder
    var body: some View {
        if immersive {
            interactiveScene
                .accessibilityIdentifier("inspection.workbench.immersive")
        } else {
            VStack(alignment: .leading, spacing: 11) {
                HStack {
                    Label("Hands-on test bench", systemImage: "hand.draw.fill")
                        .font(.caption.weight(.bold))
                        .foregroundStyle(Color.sparkyAccent)
                    Spacer()
                    Text(lab.testMode.rawValue)
                        .font(.caption2.bold().monospaced())
                        .foregroundStyle(lab.testMode == .live ? Color.sparkyDanger : Color.sparkySuccess)
                }

                Text(setup.prompt)
                    .font(.subheadline.weight(.semibold))
                    .foregroundStyle(Color.sparkyText)

                interactiveScene
                    .frame(height: 390)
                    .clipShape(RoundedRectangle(cornerRadius: 17, style: .continuous))
                    .overlay {
                        RoundedRectangle(cornerRadius: 17, style: .continuous)
                            .stroke(Color.sparkyBorder, lineWidth: 1)
                    }

                Label(status.text, systemImage: status.symbol)
                    .font(.caption.weight(.bold))
                    .foregroundStyle(status.color)
                    .frame(maxWidth: .infinity, alignment: .leading)
                    .padding(10)
                    .background(status.color.opacity(0.10))
                    .clipShape(RoundedRectangle(cornerRadius: 11, style: .continuous))
            }
            .sparkyCard(padding: 13)
            .accessibilityIdentifier("inspection.workbench.compact")
        }
    }

    private var interactiveScene: some View {
        GeometryReader { proxy in
            let targets = terminalTargets()
            let redPoint = probePoint(for: .red, targets: targets, size: proxy.size)
            let blackPoint = probePoint(for: .black, targets: targets, size: proxy.size)
            let probeHeight = min(max(proxy.size.height * 0.34, 112), 176)

            ZStack {
                IllustratedInspectionScene(
                    kind: sceneKind,
                    topology: setup.correctTopology,
                    isReady: isReady
                )

                WorkbenchLeadLayer(
                    redPoint: redPoint,
                    blackPoint: blackPoint,
                    size: proxy.size
                )

                ForEach(targets.filter(\.visible)) { target in
                    WorkbenchTerminalHotspot(
                        label: target.id.label,
                        color: target.color,
                        isCandidate: candidateTarget == target.id,
                        isConnected: redAttachment == target.id || blackAttachment == target.id
                    )
                    .position(target.point(in: proxy.size))
                }

                InteractiveMFTGraphic(
                    display: display,
                    selectedFunction: selectedFunction,
                    isEnabled: evaluation == nil,
                    testIsEnabled: evaluation == nil && functionIsReady && topologyIsReady && setup.requiredAction == .test,
                    autoNullIsEnabled: evaluation == nil && functionIsReady && topologyIsReady && setup.requiredAction == .autoNull,
                    onSelect: selectFunction,
                    onTest: { completeRequiredAction(.test) },
                    onAutoNull: { completeRequiredAction(.autoNull) }
                )
                .frame(width: proxy.size.width * 0.52, height: proxy.size.height * 0.42)
                .rotationEffect(.degrees(-7))
                .position(x: proxy.size.width * 0.31, y: proxy.size.height * 0.42)

                DraggableProbeGraphic(probe: .black, attachmentLabel: blackAttachment.label)
                    .frame(width: max(32, min(proxy.size.width * 0.044, 46)), height: probeHeight)
                    .position(x: blackPoint.x, y: blackPoint.y + probeHeight * 0.43)
                    .gesture(probeGesture(for: .black, targets: targets, size: proxy.size))
                    .allowsHitTesting(evaluation == nil && functionIsReady)
                    .zIndex(4)

                DraggableProbeGraphic(probe: .red, attachmentLabel: redAttachment.label)
                    .frame(width: max(32, min(proxy.size.width * 0.044, 46)), height: probeHeight)
                    .position(x: redPoint.x, y: redPoint.y + probeHeight * 0.43)
                    .gesture(probeGesture(for: .red, targets: targets, size: proxy.size))
                    .allowsHitTesting(evaluation == nil && functionIsReady)
                    .zIndex(5)

                VStack {
                    HStack {
                        WorkbenchStageBadge(text: setup.prompt, symbol: "hand.draw.fill", tone: .black.opacity(0.78))
                        Spacer(minLength: 80)
                        WorkbenchStageBadge(text: status.text, symbol: status.symbol, tone: status.color)
                    }
                    Spacer()
                }
                .padding(.top, immersive ? 62 : 10)
                .padding(.horizontal, immersive ? 18 : 10)
                .allowsHitTesting(false)
            }
            .background(Color(red: 0.92, green: 0.88, blue: 0.78))
            .coordinateSpace(name: "inspection-workbench")
            .accessibilityElement(children: .contain)
            .accessibilityLabel("Interactive inspection and testing workbench")
            .accessibilityValue("Tester \(selectedFunction?.label ?? "not set"), red probe \(redAttachment.label), black probe \(blackAttachment.label), display \(display)")
            .accessibilityRepresentation {
                accessibleWorkbenchControls(targets: targets)
            }
        }
        .onAppear {
            resetProbeState()
        }
        .onChange(of: taskKey) { _, _ in
            resetProbeState()
        }
        .onChange(of: selectedFunction) { _, newValue in
            if newValue == nil {
                resetProbeState()
            } else {
                actionCompleted = false
                selectedTopology = inferredTopology(
                    red: redAttachment,
                    black: blackAttachment,
                    function: newValue
                )
            }
        }
    }

    private func terminalTargets() -> [WorkbenchTerminalTarget] {
        let red = Color(red: 0.78, green: 0.20, blue: 0.10)
        let blue = Color(red: 0.10, green: 0.42, blue: 0.86)
        let green = Color(red: 0.14, green: 0.60, blue: 0.27)
        var targets = [
            WorkbenchTerminalTarget(id: .blackDock, normalizedPoint: CGPoint(x: 0.82, y: 0.18), color: .black, visible: false),
            WorkbenchTerminalTarget(id: .redDock, normalizedPoint: CGPoint(x: 0.91, y: 0.18), color: red, visible: false),
            WorkbenchTerminalTarget(id: .nullingPost, normalizedPoint: CGPoint(x: 0.54, y: 0.79), color: Color.sparkyAccent, visible: setup.topologies.contains(.shorted)),
            WorkbenchTerminalTarget(id: .blackRemoved, normalizedPoint: CGPoint(x: 0.87, y: 0.82), color: .black, visible: setup.correctTopology == .removed),
            WorkbenchTerminalTarget(id: .redRemoved, normalizedPoint: CGPoint(x: 0.94, y: 0.82), color: red, visible: setup.correctTopology == .removed),
        ]

        switch sceneKind {
        case .consumerUnit:
            targets += [
                WorkbenchTerminalTarget(id: .line, normalizedPoint: CGPoint(x: 0.79, y: 0.38), color: red, visible: true),
                WorkbenchTerminalTarget(id: .neutral, normalizedPoint: CGPoint(x: 0.79, y: 0.52), color: blue, visible: true),
                WorkbenchTerminalTarget(id: .cpc, normalizedPoint: CGPoint(x: 0.79, y: 0.66), color: green, visible: true),
            ]
        case .accessories:
            targets += [
                WorkbenchTerminalTarget(id: .line, normalizedPoint: CGPoint(x: 0.78, y: 0.39), color: red, visible: true),
                WorkbenchTerminalTarget(id: .neutral, normalizedPoint: CGPoint(x: 0.86, y: 0.39), color: blue, visible: true),
                WorkbenchTerminalTarget(id: .cpc, normalizedPoint: CGPoint(x: 0.82, y: 0.57), color: green, visible: true),
            ]
        case .ringCircuit:
            targets += [
                WorkbenchTerminalTarget(id: .lineA, normalizedPoint: CGPoint(x: 0.66, y: 0.34), color: red, visible: true),
                WorkbenchTerminalTarget(id: .lineB, normalizedPoint: CGPoint(x: 0.86, y: 0.34), color: red, visible: true),
                WorkbenchTerminalTarget(id: .neutralA, normalizedPoint: CGPoint(x: 0.66, y: 0.50), color: blue, visible: true),
                WorkbenchTerminalTarget(id: .neutralB, normalizedPoint: CGPoint(x: 0.86, y: 0.50), color: blue, visible: true),
                WorkbenchTerminalTarget(id: .cpcA, normalizedPoint: CGPoint(x: 0.66, y: 0.66), color: green, visible: true),
                WorkbenchTerminalTarget(id: .cpcB, normalizedPoint: CGPoint(x: 0.86, y: 0.66), color: green, visible: true),
            ]
        }
        return targets
    }

    private func probePoint(
        for probe: WorkbenchProbe,
        targets: [WorkbenchTerminalTarget],
        size: CGSize
    ) -> CGPoint {
        if draggingProbe == probe, let dragLocation {
            return dragLocation
        }
        let attachment = probe == .red ? redAttachment : blackAttachment
        return targets.first(where: { $0.id == attachment })?.point(in: size)
            ?? CGPoint(x: size.width * (probe == .red ? 0.91 : 0.82), y: size.height * 0.18)
    }

    private func probeGesture(
        for probe: WorkbenchProbe,
        targets: [WorkbenchTerminalTarget],
        size: CGSize
    ) -> some Gesture {
        DragGesture(minimumDistance: 0, coordinateSpace: .named("inspection-workbench"))
            .onChanged { value in
                draggingProbe = probe
                dragLocation = value.location
                let nextCandidate = nearestTarget(
                    to: value.location,
                    for: probe,
                    targets: targets,
                    size: size
                )
                if nextCandidate != candidateTarget {
                    candidateTarget = nextCandidate
                    if nextCandidate != nil { Haptics.selection() }
                }
            }
            .onEnded { value in
                let target = nearestTarget(
                    to: value.location,
                    for: probe,
                    targets: targets,
                    size: size
                )
                withAnimation(.spring(response: 0.28, dampingFraction: 0.72)) {
                    if let target {
                        attach(probe, to: target)
                    }
                    draggingProbe = nil
                    dragLocation = nil
                    candidateTarget = nil
                }
            }
    }

    private func nearestTarget(
        to point: CGPoint,
        for probe: WorkbenchProbe,
        targets: [WorkbenchTerminalTarget],
        size: CGSize
    ) -> WorkbenchTerminalID? {
        let eligible = targets.filter { target in
            let belongsToOtherProbe = target.id == (probe == .red ? .blackDock : .redDock)
                || target.id == (probe == .red ? .blackRemoved : .redRemoved)
            return !belongsToOtherProbe && (target.visible || target.id == probe.dock)
        }
        let closest = eligible.min { lhs, rhs in
            distance(point, lhs.point(in: size)) < distance(point, rhs.point(in: size))
        }
        guard let closest else { return nil }
        let threshold = max(42, min(size.width, size.height) * 0.12)
        return distance(point, closest.point(in: size)) <= threshold ? closest.id : nil
    }

    private func distance(_ lhs: CGPoint, _ rhs: CGPoint) -> CGFloat {
        hypot(lhs.x - rhs.x, lhs.y - rhs.y)
    }

    private func selectFunction(_ function: WorkbenchFunction) {
        guard evaluation == nil else { return }
        guard selectedFunction != function else { return }
        selectedFunction = function
        actionCompleted = false
        selectedTopology = inferredTopology(
            red: redAttachment,
            black: blackAttachment,
            function: function
        )
        Haptics.selection()

        let message = function == setup.correctFunction
            ? "Tester set to \(function.label). Drag the red and black probes onto the test points."
            : "\(function.label) is not the suitable function for this step."
        UIAccessibility.post(notification: .announcement, argument: message)
    }

    private func attach(_ probe: WorkbenchProbe, to target: WorkbenchTerminalID) {
        let nextRed = probe == .red ? target : redAttachment
        let nextBlack = probe == .black ? target : blackAttachment
        redAttachment = nextRed
        blackAttachment = nextBlack
        actionCompleted = false
        recordRingPairIfNeeded(red: nextRed, black: nextBlack)
        selectedTopology = inferredTopology(
            red: nextRed,
            black: nextBlack,
            function: selectedFunction
        )
        Haptics.selection()

        let readiness = selectedTopology == setup.correctTopology ? " Workbench ready." : ""
        UIAccessibility.post(
            notification: .announcement,
            argument: "\(probe.label) probe connected to \(target.label).\(readiness)"
        )
    }

    private func inferredTopology(
        red: WorkbenchTerminalID,
        black: WorkbenchTerminalID,
        function: WorkbenchFunction?
    ) -> WorkbenchLeadTopology? {
        WorkbenchConnectionResolver.resolve(
            red: red,
            black: black,
            function: function,
            sceneKind: sceneKind,
            expectedTopology: setup.correctTopology,
            completedRingPairs: completedRingPairs
        )
    }

    private func recordRingPairIfNeeded(red: WorkbenchTerminalID, black: WorkbenchTerminalID) {
        guard functionIsReady,
              sceneKind == .ringCircuit,
              setup.correctTopology == .ringEndToEnd else { return }
        let pair = Set([red, black])
        if pair == Set([.lineA, .lineB]) { completedRingPairs.insert(.line) }
        if pair == Set([.neutralA, .neutralB]) { completedRingPairs.insert(.neutral) }
        if pair == Set([.cpcA, .cpcB]) { completedRingPairs.insert(.cpc) }
    }

    private func completeRequiredAction(_ action: WorkbenchRequiredAction) {
        guard evaluation == nil else { return }
        guard functionIsReady, topologyIsReady else {
            UIAccessibility.post(
                notification: .announcement,
                argument: "Complete the tester range and probe connections first."
            )
            return
        }
        guard setup.requiredAction == action else {
            UIAccessibility.post(
                notification: .announcement,
                argument: action == .test ? "Use AUTO NULL for this step." : "Use TEST for this step."
            )
            return
        }
        actionCompleted = true
        Haptics.success()
        UIAccessibility.post(
            notification: .announcement,
            argument: setup.requiredAction == .autoNull
                ? "Lead resistance compensated."
                : "Test complete. Reading \(display)."
        )
    }

    @ViewBuilder
    private func accessibleWorkbenchControls(targets: [WorkbenchTerminalTarget]) -> some View {
        VStack {
            Picker(
                "Tester rotary dial",
                selection: Binding(
                    get: { selectedFunction ?? .off },
                    set: { selectFunction($0) }
                )
            ) {
                ForEach(WorkbenchFunction.allCases) { function in
                    Text(function.label).tag(function)
                }
            }

            Picker(
                "Red probe connection",
                selection: Binding(
                    get: { redAttachment },
                    set: { attach(.red, to: $0) }
                )
            ) {
                ForEach(accessibleTargets(for: .red, targets: targets)) { target in
                    Text(target.id.label).tag(target.id)
                }
            }
            .disabled(evaluation != nil || !functionIsReady)

            Picker(
                "Black probe connection",
                selection: Binding(
                    get: { blackAttachment },
                    set: { attach(.black, to: $0) }
                )
            ) {
                ForEach(accessibleTargets(for: .black, targets: targets)) { target in
                    Text(target.id.label).tag(target.id)
                }
            }
            .disabled(evaluation != nil || !functionIsReady)

            if setup.requiredAction != .none {
                Button(setup.requiredAction == .autoNull ? "AUTO NULL" : "TEST") {
                    completeRequiredAction(setup.requiredAction)
                }
                .disabled(evaluation != nil || !functionIsReady || !topologyIsReady)
            }

            Text("Meter reading \(display)")
            Text(status.text)
        }
    }

    private func accessibleTargets(
        for probe: WorkbenchProbe,
        targets: [WorkbenchTerminalTarget]
    ) -> [WorkbenchTerminalTarget] {
        targets.filter { target in
            let belongsToOtherProbe = target.id == (probe == .red ? .blackDock : .redDock)
                || target.id == (probe == .red ? .blackRemoved : .redRemoved)
            return !belongsToOtherProbe && (target.visible || target.id == probe.dock)
        }
    }

    private func resetProbeState() {
        draggingProbe = nil
        dragLocation = nil
        candidateTarget = nil
        completedRingPairs = []
        actionCompleted = false
        redAttachment = .redDock
        blackAttachment = .blackDock
        if let selectedFunction {
            selectedTopology = inferredTopology(
                red: .redDock,
                black: .blackDock,
                function: selectedFunction
            )
        } else {
            selectedTopology = nil
        }
    }
}

private struct WorkbenchRoundButton: View {
    let symbol: String
    let action: () -> Void

    var body: some View {
        Button(action: action) {
            Image(systemName: symbol)
                .font(.headline.weight(.black))
                .foregroundStyle(.black.opacity(0.78))
                .frame(width: 46, height: 46)
                .background(Color(red: 1.0, green: 0.74, blue: 0.13))
                .clipShape(Circle())
                .overlay { Circle().stroke(.black.opacity(0.78), lineWidth: 3) }
                .shadow(color: .black.opacity(0.28), radius: 0, x: 2, y: 3)
        }
        .buttonStyle(.plain)
    }
}

private struct ImmersiveDecisionPanel: View {
    let task: InspectionTrainingTask
    let evaluation: InspectionTrainingEvaluation?
    let isWorkbenchReady: Bool
    let isShowingHint: Bool
    let onToggleHint: () -> Void
    let onSelect: (InspectionTrainingChoice) -> Void
    let feedbackActionTitle: String?
    let onFeedbackAction: () -> Void

    var body: some View {
        VStack(spacing: 8) {
            HStack(alignment: .center, spacing: 12) {
                VStack(alignment: .leading, spacing: 2) {
                    Text(task.title.uppercased())
                        .font(.caption.weight(.black).monospaced())
                        .foregroundStyle(.black.opacity(0.60))
                    Text(task.instruction)
                        .font(.subheadline.weight(.black))
                        .foregroundStyle(.black.opacity(0.82))
                        .lineLimit(2)
                        .minimumScaleFactor(0.78)
                }

                Spacer(minLength: 8)

                Button(action: onToggleHint) {
                    Image(systemName: isShowingHint ? "lightbulb.slash.fill" : "lightbulb.fill")
                        .font(.headline.weight(.black))
                        .foregroundStyle(.black.opacity(0.78))
                        .frame(width: 40, height: 40)
                        .background(.white.opacity(0.52))
                        .clipShape(Circle())
                        .overlay { Circle().stroke(.black.opacity(0.64), lineWidth: 2) }
                }
                .buttonStyle(.plain)
                .accessibilityLabel(isShowingHint ? "Hide hint" : "Show hint")
            }

            if isShowingHint, evaluation == nil {
                HStack(alignment: .top, spacing: 8) {
                    Image(systemName: "quote.bubble.fill")
                    Text(task.retryMessage)
                        .lineLimit(3)
                        .minimumScaleFactor(0.78)
                    Spacer(minLength: 0)
                }
                .font(.caption.weight(.bold))
                .foregroundStyle(.black.opacity(0.78))
                .padding(.horizontal, 11)
                .padding(.vertical, 8)
                .frame(maxWidth: .infinity, alignment: .leading)
                .background(.white.opacity(0.86))
                .clipShape(RoundedRectangle(cornerRadius: 10, style: .continuous))
                .transition(.opacity.combined(with: .move(edge: .bottom)))
            }

            if let evaluation {
                HStack(spacing: 10) {
                    Image(systemName: evaluation.isCorrect ? "checkmark.circle.fill" : "xmark.circle.fill")
                    Text(evaluation.message)
                        .lineLimit(2)
                        .minimumScaleFactor(0.78)
                    Spacer(minLength: 0)

                    if let feedbackActionTitle {
                        Button(action: onFeedbackAction) {
                            HStack(spacing: 6) {
                                Text(feedbackActionTitle)
                                Image(systemName: evaluation.isCorrect ? "arrow.right" : "arrow.counterclockwise")
                            }
                            .font(.caption.weight(.black))
                            .foregroundStyle(.white)
                            .padding(.horizontal, 12)
                            .padding(.vertical, 8)
                            .background(.black.opacity(0.76))
                            .clipShape(Capsule())
                        }
                        .buttonStyle(.plain)
                    }
                }
                .font(.caption.weight(.bold))
                .foregroundStyle(.black.opacity(0.80))
                .padding(.horizontal, 10)
                .padding(.vertical, 7)
                .frame(maxWidth: .infinity, alignment: .leading)
                .background((evaluation.isCorrect ? Color.green : Color.red).opacity(0.72))
                .clipShape(RoundedRectangle(cornerRadius: 9, style: .continuous))
            }

            if isWorkbenchReady {
                HStack(spacing: 9) {
                    ForEach(Array(task.choices.enumerated()), id: \.element.id) { index, choice in
                        ImmersiveChoiceButton(
                            index: index,
                            choice: choice,
                            task: task,
                            evaluation: evaluation
                        ) {
                            onSelect(choice)
                        }
                    }
                }
            } else {
                Label(
                    "Set the tester, place both probes, then press TEST or AUTO NULL when prompted.",
                    systemImage: "hand.draw.fill"
                )
                .font(.caption.weight(.black))
                .foregroundStyle(.black.opacity(0.72))
                .frame(maxWidth: .infinity, alignment: .leading)
                .padding(.vertical, 5)
            }
        }
        .padding(11)
        .background(Color(red: 1.0, green: 0.73, blue: 0.14).opacity(0.97))
        .clipShape(RoundedRectangle(cornerRadius: 14, style: .continuous))
        .overlay {
            RoundedRectangle(cornerRadius: 14, style: .continuous)
                .stroke(.black.opacity(0.82), lineWidth: 3)
        }
        .shadow(color: .black.opacity(0.28), radius: 0, x: 3, y: 4)
        .accessibilityIdentifier("inspection.decision.panel")
    }
}

private struct ImmersiveChoiceButton: View {
    let index: Int
    let choice: InspectionTrainingChoice
    let task: InspectionTrainingTask
    let evaluation: InspectionTrainingEvaluation?
    let action: () -> Void

    private var isCorrect: Bool { choice.id == task.correctChoiceID }
    private var isSelected: Bool { evaluation?.choiceID == choice.id }

    private var fill: Color {
        guard let evaluation else { return .white.opacity(0.42) }
        if isCorrect { return Color.green.opacity(0.88) }
        if isSelected && !evaluation.isCorrect { return Color.red.opacity(0.88) }
        return .white.opacity(0.24)
    }

    var body: some View {
        Button(action: action) {
            HStack(spacing: 7) {
                Text(["A", "B", "C", "D"][min(index, 3)])
                    .font(.caption2.weight(.black).monospaced())
                    .foregroundStyle(.black.opacity(0.62))
                    .frame(width: 22, height: 22)
                    .background(.white.opacity(0.58))
                    .clipShape(Circle())
                Text(choice.title)
                    .font(.caption.weight(.black))
                    .foregroundStyle(.black.opacity(0.82))
                    .lineLimit(2)
                    .minimumScaleFactor(0.72)
                    .multilineTextAlignment(.leading)
                Spacer(minLength: 0)
            }
            .padding(.horizontal, 9)
            .frame(maxWidth: .infinity, minHeight: 46, alignment: .leading)
            .background(fill)
            .clipShape(RoundedRectangle(cornerRadius: 8, style: .continuous))
            .overlay {
                RoundedRectangle(cornerRadius: 8, style: .continuous)
                    .stroke(.black.opacity(0.72), lineWidth: 2)
            }
        }
        .buttonStyle(.plain)
        .disabled(evaluation != nil)
        .accessibilityHint(choice.detail)
    }
}

private struct WorkbenchStageBadge: View {
    let text: String
    let symbol: String
    let tone: Color

    var body: some View {
        Label(text, systemImage: symbol)
            .font(.caption2.weight(.black))
            .foregroundStyle(.white)
            .lineLimit(2)
            .minimumScaleFactor(0.72)
            .padding(.horizontal, 10)
            .padding(.vertical, 7)
            .background(tone.opacity(0.90))
            .clipShape(RoundedRectangle(cornerRadius: 10, style: .continuous))
            .shadow(color: .black.opacity(0.18), radius: 2, y: 2)
    }
}

private struct WorkbenchLeadLayer: View {
    let redPoint: CGPoint
    let blackPoint: CGPoint
    let size: CGSize

    var body: some View {
        Canvas { context, _ in
            drawLead(
                context: &context,
                from: CGPoint(x: size.width * 0.35, y: size.height * 0.26),
                to: redPoint,
                color: Color(red: 0.88, green: 0.10, blue: 0.05)
            )
            drawLead(
                context: &context,
                from: CGPoint(x: size.width * 0.29, y: size.height * 0.25),
                to: blackPoint,
                color: Color(red: 0.07, green: 0.07, blue: 0.08)
            )
        }
        .accessibilityHidden(true)
    }

    private func drawLead(
        context: inout GraphicsContext,
        from origin: CGPoint,
        to target: CGPoint,
        color: Color
    ) {
        var path = Path()
        path.move(to: origin)
        path.addCurve(
            to: target,
            control1: CGPoint(x: origin.x + size.width * 0.04, y: origin.y - size.height * 0.20),
            control2: CGPoint(x: target.x - size.width * 0.13, y: target.y - size.height * 0.12)
        )
        context.stroke(path, with: .color(.black.opacity(0.78)), style: StrokeStyle(lineWidth: 8, lineCap: .round))
        context.stroke(path, with: .color(color), style: StrokeStyle(lineWidth: 4.5, lineCap: .round))
    }
}

private struct WorkbenchTerminalHotspot: View {
    let label: String
    let color: Color
    let isCandidate: Bool
    let isConnected: Bool

    var body: some View {
        ZStack {
            Circle()
                .fill(color.opacity(isConnected ? 0.95 : 0.62))
                .frame(width: isCandidate ? 34 : 26, height: isCandidate ? 34 : 26)
                .shadow(color: isCandidate ? Color.sparkyAccent.opacity(0.85) : .clear, radius: 9)
            Circle()
                .stroke(.white.opacity(0.92), lineWidth: 3)
                .frame(width: 17, height: 17)
            Circle()
                .stroke(.black.opacity(0.68), lineWidth: 2)
                .frame(width: isCandidate ? 34 : 26, height: isCandidate ? 34 : 26)
        }
        .animation(.spring(response: 0.22, dampingFraction: 0.74), value: isCandidate)
        .accessibilityHidden(true)
    }
}

private struct DraggableProbeGraphic: View {
    let probe: WorkbenchProbe
    let attachmentLabel: String

    var body: some View {
        GeometryReader { proxy in
            let width = proxy.size.width
            let height = proxy.size.height

            ZStack(alignment: .top) {
                ProbeBodyShape()
                    .fill(.black.opacity(0.90))
                    .overlay {
                        ProbeBodyShape()
                            .stroke(.black, lineWidth: max(2, width * 0.07))
                    }

                ProbeBodyShape()
                    .fill(probe.color)
                    .padding(width * 0.10)

                Capsule()
                    .fill(.white.opacity(probe == .red ? 0.20 : 0.10))
                    .frame(width: width * 0.24, height: height * 0.42)
                    .offset(x: -width * 0.15, y: height * 0.42)

                Rectangle()
                    .fill(
                        LinearGradient(
                            colors: [.white, Color(white: 0.55), .white],
                            startPoint: .leading,
                            endPoint: .trailing
                        )
                    )
                    .frame(width: max(4, width * 0.14), height: height * 0.20)
                    .clipShape(Capsule())
                    .offset(y: -height * 0.02)

                Capsule()
                    .fill(.black.opacity(0.92))
                    .frame(width: width * 1.25, height: height * 0.055)
                    .offset(y: height * 0.25)
            }
        }
        .contentShape(Rectangle())
        .shadow(color: .black.opacity(0.32), radius: 4, x: 3, y: 4)
        .accessibilityElement(children: .ignore)
        .accessibilityLabel("\(probe.label) test probe")
        .accessibilityValue("Connected to \(attachmentLabel)")
        .accessibilityHint("Drag the probe tip onto a highlighted terminal")
    }
}

private struct ProbeBodyShape: Shape {
    func path(in rect: CGRect) -> Path {
        var path = Path()
        path.move(to: CGPoint(x: rect.midX, y: rect.minY + rect.height * 0.12))
        path.addLine(to: CGPoint(x: rect.maxX * 0.78, y: rect.minY + rect.height * 0.27))
        path.addLine(to: CGPoint(x: rect.maxX * 0.88, y: rect.maxY - rect.height * 0.10))
        path.addQuadCurve(
            to: CGPoint(x: rect.minX + rect.width * 0.12, y: rect.maxY - rect.height * 0.10),
            control: CGPoint(x: rect.midX, y: rect.maxY)
        )
        path.addLine(to: CGPoint(x: rect.minX + rect.width * 0.22, y: rect.minY + rect.height * 0.27))
        path.closeSubpath()
        return path
    }
}

private struct InteractiveMFTGraphic: View {
    let display: String
    let selectedFunction: WorkbenchFunction?
    let isEnabled: Bool
    let testIsEnabled: Bool
    let autoNullIsEnabled: Bool
    let onSelect: (WorkbenchFunction) -> Void
    let onTest: () -> Void
    let onAutoNull: () -> Void

    var body: some View {
        GeometryReader { proxy in
            let width = proxy.size.width
            let height = proxy.size.height

            ZStack {
                Capsule()
                    .fill(Color(white: 0.11))
                    .frame(width: width * 0.30, height: height * 0.92)
                    .overlay {
                        VStack(spacing: 4) {
                            ForEach(0..<7, id: \.self) { _ in
                                Capsule()
                                    .fill(.white.opacity(0.09))
                                    .frame(width: width * 0.22, height: 4)
                            }
                        }
                    }
                    .position(x: width * 0.15, y: height * 0.52)

                RoundedRectangle(cornerRadius: height * 0.24, style: .continuous)
                    .fill(
                        LinearGradient(
                            colors: [Color(white: 0.95), Color(white: 0.75)],
                            startPoint: .top,
                            endPoint: .bottom
                        )
                    )
                    .overlay {
                        RoundedRectangle(cornerRadius: height * 0.24, style: .continuous)
                            .stroke(.black.opacity(0.88), lineWidth: max(3, height * 0.028))
                    }
                    .frame(width: width * 0.88, height: height * 0.86)
                    .position(x: width * 0.55, y: height * 0.52)

                VStack(spacing: 4) {
                    Text("SPARKY MFT")
                        .font(.system(size: max(7, height * 0.06), weight: .black, design: .rounded))
                        .foregroundStyle(.black.opacity(0.58))
                    Text(display)
                        .font(.system(size: max(15, height * 0.17), weight: .black, design: .monospaced))
                        .foregroundStyle(Color(red: 0.16, green: 0.24, blue: 0.16))
                        .lineLimit(1)
                        .minimumScaleFactor(0.52)
                        .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .center)
                        .background(Color(red: 0.66, green: 0.72, blue: 0.57))
                        .clipShape(RoundedRectangle(cornerRadius: height * 0.045, style: .continuous))
                        .overlay {
                            RoundedRectangle(cornerRadius: height * 0.045, style: .continuous)
                                .stroke(.black.opacity(0.78), lineWidth: 3)
                        }
                }
                .frame(width: width * 0.35, height: height * 0.47)
                .position(x: width * 0.43, y: height * 0.52)

                VStack(spacing: height * 0.035) {
                    Button(action: onTest) {
                        Text("TEST")
                            .font(.system(size: max(7, height * 0.065), weight: .black, design: .rounded))
                            .foregroundStyle(.black.opacity(testIsEnabled ? 0.82 : 0.42))
                            .frame(width: width * 0.11, height: height * 0.18)
                            .background(Color(red: 1.0, green: 0.72, blue: 0.10).opacity(testIsEnabled ? 1 : 0.48))
                            .clipShape(Capsule())
                    }
                    .buttonStyle(.plain)
                    .disabled(!testIsEnabled)

                    Button(action: onAutoNull) {
                        Text("AUTO\nNULL")
                            .font(.system(size: max(6, height * 0.047), weight: .black, design: .rounded))
                            .multilineTextAlignment(.center)
                            .foregroundStyle(.white.opacity(autoNullIsEnabled ? 1 : 0.46))
                            .frame(width: width * 0.11, height: height * 0.21)
                            .background(Color(red: 0.78, green: 0.10, blue: 0.06).opacity(autoNullIsEnabled ? 1 : 0.48))
                            .clipShape(Capsule())
                    }
                    .buttonStyle(.plain)
                    .disabled(!autoNullIsEnabled)
                }
                .position(x: width * 0.22, y: height * 0.55)

                RotaryWorkbenchDial(
                    selectedFunction: selectedFunction,
                    isEnabled: isEnabled,
                    onSelect: onSelect
                )
                .frame(width: width * 0.31, height: height * 0.72)
                .position(x: width * 0.78, y: height * 0.53)

                HStack(spacing: width * 0.025) {
                    Circle()
                        .fill(.black)
                        .overlay { Circle().stroke(.white.opacity(0.6), lineWidth: 2) }
                    Circle()
                        .fill(Color(red: 0.86, green: 0.10, blue: 0.05))
                        .overlay { Circle().stroke(.white.opacity(0.6), lineWidth: 2) }
                }
                .frame(width: width * 0.11, height: height * 0.10)
                .position(x: width * 0.49, y: height * 0.09)
            }
            .shadow(color: .black.opacity(0.32), radius: 7, x: 4, y: 6)
        }
        .accessibilityElement(children: .contain)
        .accessibilityLabel("Multifunction tester")
    }
}

private struct RotaryWorkbenchDial: View {
    let selectedFunction: WorkbenchFunction?
    let isEnabled: Bool
    let onSelect: (WorkbenchFunction) -> Void

    private let sectorColors: [Color] = [
        Color(white: 0.72),
        Color(red: 0.25, green: 0.55, blue: 0.90),
        Color(red: 1.0, green: 0.47, blue: 0.05),
        Color(red: 0.83, green: 0.12, blue: 0.06),
        Color(red: 0.20, green: 0.72, blue: 0.12),
        Color(red: 0.95, green: 0.78, blue: 0.05),
    ]

    var body: some View {
        GeometryReader { proxy in
            let centre = CGPoint(x: proxy.size.width / 2, y: proxy.size.height / 2)
            let radius = min(proxy.size.width, proxy.size.height) * 0.39

            ZStack {
                ForEach(Array(WorkbenchFunction.allCases.enumerated()), id: \.element.id) { index, function in
                    Circle()
                        .trim(from: CGFloat(index) / 6.0, to: CGFloat(index + 1) / 6.0 - 0.012)
                        .stroke(sectorColors[index], style: StrokeStyle(lineWidth: radius * 0.46, lineCap: .butt))
                        .rotationEffect(.degrees(-90))

                    let radians = CGFloat((function.dialAngle - 90) * .pi / 180)
                    Text(function.shortLabel)
                        .font(.system(size: max(6, radius * 0.21), weight: .black, design: .rounded))
                        .foregroundStyle(.black.opacity(0.80))
                        .position(
                            x: centre.x + cos(radians) * radius * 1.05,
                            y: centre.y + sin(radians) * radius * 1.05
                        )
                }

                Circle()
                    .fill(
                        RadialGradient(
                            colors: [Color(white: 0.36), Color(white: 0.10)],
                            center: .topLeading,
                            startRadius: 1,
                            endRadius: radius
                        )
                    )
                    .frame(width: radius * 1.28, height: radius * 1.28)
                    .overlay { Circle().stroke(.black, lineWidth: 3) }

                Capsule()
                    .fill(Color(white: 0.72))
                    .frame(width: max(4, radius * 0.12), height: radius * 0.72)
                    .offset(y: -radius * 0.25)
                    .rotationEffect(.degrees(selectedFunction?.dialAngle ?? WorkbenchFunction.off.dialAngle))
                    .shadow(color: .black.opacity(0.5), radius: 1, x: 1, y: 1)
            }
            .contentShape(Circle())
            .gesture(
                DragGesture(minimumDistance: 0)
                    .onChanged { value in
                        guard isEnabled else { return }
                        let angle = Double(atan2(
                            value.location.x - centre.x,
                            centre.y - value.location.y
                        ) * 180 / .pi)
                        let nearest = WorkbenchFunction.allCases.min {
                            angularDistance($0.dialAngle, angle) < angularDistance($1.dialAngle, angle)
                        }
                        if let nearest, nearest != selectedFunction {
                            onSelect(nearest)
                        }
                    }
            )
        }
        .accessibilityElement(children: .ignore)
        .accessibilityLabel("Tester rotary dial")
        .accessibilityValue(selectedFunction?.label ?? "Not selected")
        .accessibilityHint("Swipe up or down to change tester function")
        .accessibilityAdjustableAction { direction in
            guard isEnabled else { return }
            let cases = WorkbenchFunction.allCases
            let current = selectedFunction.flatMap { cases.firstIndex(of: $0) } ?? 0
            let next: Int
            switch direction {
            case .increment: next = min(current + 1, cases.count - 1)
            case .decrement: next = max(current - 1, 0)
            @unknown default: return
            }
            onSelect(cases[next])
        }
    }

    private func angularDistance(_ lhs: Double, _ rhs: Double) -> Double {
        let difference = abs(lhs - rhs).truncatingRemainder(dividingBy: 360)
        return min(difference, 360 - difference)
    }
}

private struct IllustratedInspectionScene: View {
    let kind: WorkbenchSceneKind
    let topology: WorkbenchLeadTopology?
    let isReady: Bool

    var body: some View {
        Canvas { context, size in
            drawBrickWall(context: &context, size: size)
            switch kind {
            case .consumerUnit:
                drawConsumerUnit(context: &context, size: size)
            case .ringCircuit:
                drawRingCircuit(context: &context, size: size)
            case .accessories:
                drawAccessoryBoard(context: &context, size: size)
            }

            drawConfiguredLinks(context: &context, size: size)

            if isReady {
                let badge = CGRect(x: size.width * 0.88, y: size.height * 0.78, width: 42, height: 42)
                context.fill(Path(ellipseIn: badge), with: .color(Color.sparkySuccess))
                context.stroke(Path(ellipseIn: badge), with: .color(.black.opacity(0.78)), lineWidth: 3)
                context.draw(
                    Text("✓").font(.title.bold()).foregroundStyle(.white),
                    at: CGPoint(x: badge.midX, y: badge.midY)
                )
            }
        }
        .accessibilityHidden(true)
    }

    private func drawConfiguredLinks(context: inout GraphicsContext, size: CGSize) {
        switch topology {
        case .lineNeutralToCPC:
            drawJumper(
                context: &context,
                from: CGPoint(x: size.width * 0.78, y: size.height * 0.39),
                to: CGPoint(x: size.width * 0.86, y: size.height * 0.39),
                color: Color(red: 0.96, green: 0.63, blue: 0.08)
            )
        case .ringCrossLineNeutral:
            drawJumper(
                context: &context,
                from: CGPoint(x: size.width * 0.66, y: size.height * 0.34),
                to: CGPoint(x: size.width * 0.86, y: size.height * 0.50),
                color: Color(red: 0.96, green: 0.63, blue: 0.08)
            )
            drawJumper(
                context: &context,
                from: CGPoint(x: size.width * 0.86, y: size.height * 0.34),
                to: CGPoint(x: size.width * 0.66, y: size.height * 0.50),
                color: Color(red: 0.96, green: 0.63, blue: 0.08)
            )
        case .ringCrossLineCPC:
            drawJumper(
                context: &context,
                from: CGPoint(x: size.width * 0.66, y: size.height * 0.34),
                to: CGPoint(x: size.width * 0.86, y: size.height * 0.66),
                color: Color(red: 0.96, green: 0.63, blue: 0.08)
            )
            drawJumper(
                context: &context,
                from: CGPoint(x: size.width * 0.86, y: size.height * 0.34),
                to: CGPoint(x: size.width * 0.66, y: size.height * 0.66),
                color: Color(red: 0.96, green: 0.63, blue: 0.08)
            )
        default:
            break
        }
    }

    private func drawJumper(
        context: inout GraphicsContext,
        from start: CGPoint,
        to end: CGPoint,
        color: Color
    ) {
        var path = Path()
        path.move(to: start)
        path.addCurve(
            to: end,
            control1: CGPoint(x: start.x, y: min(start.y, end.y) - 34),
            control2: CGPoint(x: end.x, y: min(start.y, end.y) - 34)
        )
        context.stroke(path, with: .color(.black.opacity(0.82)), style: StrokeStyle(lineWidth: 11, lineCap: .round))
        context.stroke(path, with: .color(color), style: StrokeStyle(lineWidth: 6, lineCap: .round))
    }

    private func drawBrickWall(context: inout GraphicsContext, size: CGSize) {
        context.fill(Path(CGRect(origin: .zero, size: size)), with: .color(Color(red: 0.94, green: 0.90, blue: 0.82)))
        let rowHeight = max(42, size.height / 7)
        let brickWidth = max(95, size.width / 8)
        var mortar = Path()
        var y: CGFloat = 0
        var row = 0
        while y <= size.height {
            mortar.move(to: CGPoint(x: 0, y: y))
            mortar.addLine(to: CGPoint(x: size.width, y: y))
            var x = row.isMultiple(of: 2) ? 0 : -brickWidth / 2
            while x <= size.width {
                mortar.move(to: CGPoint(x: x, y: y))
                mortar.addLine(to: CGPoint(x: x, y: min(y + rowHeight, size.height)))
                x += brickWidth
            }
            y += rowHeight
            row += 1
        }
        context.stroke(mortar, with: .color(Color(red: 0.66, green: 0.60, blue: 0.52).opacity(0.58)), lineWidth: 3)
    }

    private func drawConsumerUnit(context: inout GraphicsContext, size: CGSize) {
        let enclosure = CGRect(x: size.width * 0.55, y: size.height * 0.10, width: size.width * 0.42, height: size.height * 0.78)
        context.fill(Path(roundedRect: enclosure, cornerRadius: 14), with: .color(Color(white: 0.45)))
        context.stroke(Path(roundedRect: enclosure, cornerRadius: 14), with: .color(.black.opacity(0.84)), lineWidth: 4)

        let interior = enclosure.insetBy(dx: enclosure.width * 0.06, dy: enclosure.height * 0.12)
        context.fill(Path(roundedRect: interior, cornerRadius: 8), with: .color(Color(white: 0.19)))

        drawConduit(context: &context, size: size, x: 0.62)
        drawConduit(context: &context, size: size, x: 0.72)
        drawConduit(context: &context, size: size, x: 0.88)

        let terminalBlock = CGRect(x: size.width * 0.755, y: size.height * 0.29, width: size.width * 0.07, height: size.height * 0.43)
        context.fill(Path(roundedRect: terminalBlock, cornerRadius: 5), with: .color(Color(white: 0.83)))
        context.stroke(Path(roundedRect: terminalBlock, cornerRadius: 5), with: .color(.black.opacity(0.78)), lineWidth: 3)
        for index in 0..<6 {
            let y = terminalBlock.minY + terminalBlock.height * (CGFloat(index) + 0.5) / 6
            context.fill(Path(ellipseIn: CGRect(x: terminalBlock.midX - 8, y: y - 8, width: 16, height: 16)), with: .color(Color(white: 0.40)))
            context.stroke(Path(ellipseIn: CGRect(x: terminalBlock.midX - 8, y: y - 8, width: 16, height: 16)), with: .color(.black.opacity(0.75)), lineWidth: 2)
        }

        let railY = enclosure.maxY - enclosure.height * 0.28
        for index in 0..<7 {
            let breaker = CGRect(
                x: enclosure.minX + enclosure.width * 0.08 + CGFloat(index) * enclosure.width * 0.115,
                y: railY,
                width: enclosure.width * 0.10,
                height: enclosure.height * 0.20
            )
            drawBreaker(context: &context, rect: breaker, active: index < 2)
        }

        let barY = enclosure.maxY - enclosure.height * 0.06
        drawTerminalBar(context: &context, rect: CGRect(x: enclosure.minX + 20, y: barY, width: enclosure.width * 0.38, height: 13), color: Color(red: 0.12, green: 0.40, blue: 0.84))
        drawTerminalBar(context: &context, rect: CGRect(x: enclosure.midX + 5, y: barY, width: enclosure.width * 0.38, height: 13), color: Color(red: 0.15, green: 0.62, blue: 0.25))

        context.draw(
            Text("SIMULATED DISTRIBUTION BOARD")
                .font(.caption2.bold().monospaced())
                .foregroundStyle(.white.opacity(0.72)),
            at: CGPoint(x: enclosure.midX, y: enclosure.minY + 18)
        )
    }

    private func drawRingCircuit(context: inout GraphicsContext, size: CGSize) {
        drawSocket(context: &context, rect: CGRect(x: size.width * 0.70, y: size.height * 0.13, width: size.width * 0.19, height: size.height * 0.26))
        drawSocket(context: &context, rect: CGRect(x: size.width * 0.77, y: size.height * 0.62, width: size.width * 0.19, height: size.height * 0.25))

        let cableXs = [size.width * 0.66, size.width * 0.86]
        for x in cableXs {
            var conduit = Path()
            conduit.move(to: CGPoint(x: x, y: 0))
            conduit.addLine(to: CGPoint(x: x, y: size.height * 0.23))
            context.stroke(conduit, with: .color(Color(white: 0.40)), style: StrokeStyle(lineWidth: 24, lineCap: .round))

            let wireColors = [Color(red: 0.62, green: 0.24, blue: 0.10), Color(red: 0.10, green: 0.40, blue: 0.86), Color(red: 0.12, green: 0.62, blue: 0.25)]
            let ys = [size.height * 0.34, size.height * 0.50, size.height * 0.66]
            for index in 0..<3 {
                var wire = Path()
                wire.move(to: CGPoint(x: x, y: size.height * 0.20))
                wire.addCurve(
                    to: CGPoint(x: x + (index == 0 ? -8 : index == 1 ? 0 : 8), y: ys[index]),
                    control1: CGPoint(x: x - 20 + CGFloat(index * 14), y: size.height * 0.30),
                    control2: CGPoint(x: x + 12 - CGFloat(index * 8), y: ys[index] - 30)
                )
                context.stroke(wire, with: .color(.black.opacity(0.78)), style: StrokeStyle(lineWidth: 9, lineCap: .round))
                context.stroke(wire, with: .color(wireColors[index]), style: StrokeStyle(lineWidth: 5, lineCap: .round))
            }
        }

        context.draw(
            Text("RING FINAL · ENDS A / B")
                .font(.caption.bold().monospaced())
                .foregroundStyle(.black.opacity(0.60)),
            at: CGPoint(x: size.width * 0.76, y: size.height * 0.76)
        )
    }

    private func drawAccessoryBoard(context: inout GraphicsContext, size: CGSize) {
        var conduit = Path()
        conduit.move(to: CGPoint(x: size.width * 0.58, y: 0))
        conduit.addLine(to: CGPoint(x: size.width * 0.58, y: size.height * 0.28))
        conduit.addLine(to: CGPoint(x: size.width * 0.75, y: size.height * 0.28))
        context.stroke(conduit, with: .color(Color(white: 0.38)), style: StrokeStyle(lineWidth: 26, lineCap: .round, lineJoin: .round))

        drawSocket(context: &context, rect: CGRect(x: size.width * 0.68, y: size.height * 0.22, width: size.width * 0.28, height: size.height * 0.44))
        drawSocket(context: &context, rect: CGRect(x: size.width * 0.79, y: size.height * 0.69, width: size.width * 0.17, height: size.height * 0.20))

        let labelRect = CGRect(x: size.width * 0.58, y: size.height * 0.69, width: size.width * 0.17, height: size.height * 0.18)
        context.fill(Path(roundedRect: labelRect, cornerRadius: 5), with: .color(.white.opacity(0.92)))
        context.stroke(Path(roundedRect: labelRect, cornerRadius: 5), with: .color(.black.opacity(0.72)), lineWidth: 2)
        context.draw(
            Text("REMOVE\nSENSITIVE\nEQUIPMENT")
                .font(.caption2.bold().monospaced())
                .foregroundStyle(.black.opacity(0.72)),
            at: CGPoint(x: labelRect.midX, y: labelRect.midY)
        )
    }

    private func drawConduit(context: inout GraphicsContext, size: CGSize, x: CGFloat) {
        var conduit = Path()
        conduit.move(to: CGPoint(x: size.width * x, y: 0))
        conduit.addLine(to: CGPoint(x: size.width * x, y: size.height * 0.18))
        context.stroke(conduit, with: .color(Color(white: 0.38)), style: StrokeStyle(lineWidth: 24, lineCap: .round))
    }

    private func drawBreaker(context: inout GraphicsContext, rect: CGRect, active: Bool) {
        context.fill(Path(roundedRect: rect, cornerRadius: 4), with: .color(Color(white: 0.92)))
        context.stroke(Path(roundedRect: rect, cornerRadius: 4), with: .color(.black.opacity(0.80)), lineWidth: 2)
        let switchRect = CGRect(x: rect.minX + rect.width * 0.20, y: rect.minY + rect.height * 0.18, width: rect.width * 0.60, height: rect.height * 0.22)
        context.fill(Path(roundedRect: switchRect, cornerRadius: 2), with: .color(active ? Color.red.opacity(0.86) : Color(white: 0.20)))
        context.fill(Path(ellipseIn: CGRect(x: rect.midX - 3, y: rect.maxY - 12, width: 6, height: 6)), with: .color(Color(white: 0.35)))
    }

    private func drawTerminalBar(context: inout GraphicsContext, rect: CGRect, color: Color) {
        context.fill(Path(roundedRect: rect, cornerRadius: 3), with: .color(color))
        context.stroke(Path(roundedRect: rect, cornerRadius: 3), with: .color(.black.opacity(0.70)), lineWidth: 2)
        for index in 0..<7 {
            let x = rect.minX + rect.width * (CGFloat(index) + 0.5) / 7
            context.fill(Path(ellipseIn: CGRect(x: x - 3, y: rect.midY - 3, width: 6, height: 6)), with: .color(.white.opacity(0.75)))
        }
    }

    private func drawSocket(context: inout GraphicsContext, rect: CGRect) {
        context.fill(Path(roundedRect: rect, cornerRadius: 13), with: .color(.white.opacity(0.96)))
        context.stroke(Path(roundedRect: rect, cornerRadius: 13), with: .color(.black.opacity(0.80)), lineWidth: 4)
        let centre = CGPoint(x: rect.midX, y: rect.midY)
        let scale = min(rect.width, rect.height)
        context.fill(Path(roundedRect: CGRect(x: centre.x - scale * 0.06, y: centre.y - scale * 0.18, width: scale * 0.12, height: scale * 0.22), cornerRadius: 2), with: .color(.black.opacity(0.84)))
        context.fill(Path(roundedRect: CGRect(x: centre.x - scale * 0.20, y: centre.y + scale * 0.03, width: scale * 0.11, height: scale * 0.20), cornerRadius: 2), with: .color(.black.opacity(0.84)))
        context.fill(Path(roundedRect: CGRect(x: centre.x + scale * 0.09, y: centre.y + scale * 0.03, width: scale * 0.11, height: scale * 0.20), cornerRadius: 2), with: .color(.black.opacity(0.84)))
    }
}
