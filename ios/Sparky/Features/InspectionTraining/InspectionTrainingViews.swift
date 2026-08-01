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

    let lab: InspectionTrainingLab

    @State private var showingHint = false
    @State private var showingRestartConfirmation = false
    @State private var preparedWorkbenchTaskID: String?
    @State private var selectedWorkbenchFunction: WorkbenchFunction?
    @State private var selectedLeadTopology: WorkbenchLeadTopology?
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
    }

    private func taskView(_ task: InspectionTrainingTask) -> some View {
        let currentSession = session
        let workbenchSetup = WorkbenchSetup.configuration(
            labID: lab.id,
            taskIndex: currentSession.currentTaskIndex
        )
        let isWorkbenchReady = selectedWorkbenchFunction == workbenchSetup.correctFunction
            && selectedLeadTopology == workbenchSetup.correctTopology

        return ZStack {
            SparkyBackdrop()

            ScrollView {
                LazyVStack(alignment: .leading, spacing: 16) {
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
                        setup: workbenchSetup,
                        selectedFunction: $selectedWorkbenchFunction,
                        selectedTopology: $selectedLeadTopology
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
                                "Set the tester and connection arrangement above to unlock these actions.",
                                systemImage: "lock.fill"
                            )
                            .font(.caption.weight(.semibold))
                            .foregroundStyle(Color.sparkyMuted)
                            .accessibilityLabel("Answer choices locked. Complete both virtual test bench stages first.")
                        }

                        ForEach(task.choices) { choice in
                            InspectionTrainingChoiceButton(
                                choice: choice,
                                task: task,
                                evaluation: currentSession.lastEvaluation,
                                isEnabled: isWorkbenchReady
                            ) {
                                guard isWorkbenchReady else {
                                    UIAccessibility.post(
                                        notification: .announcement,
                                        argument: "Complete the virtual test bench setup before choosing an action."
                                    )
                                    return
                                }
                                let evaluation = trainingStore.submit(choiceID: choice.id, for: lab)
                                showingHint = false
                                evaluation.isCorrect ? Haptics.success() : Haptics.warning()
                                announceEvaluation(evaluation)
                            }
                        }
                    }

                    if currentSession.lastEvaluation == nil {
                        Button {
                            withAnimation(.easeInOut(duration: 0.18)) {
                                showingHint.toggle()
                            }
                            Haptics.selection()
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
        .onAppear {
            prepareWorkbench(for: task.id)
        }
        .onChange(of: task.id) { _, newTaskID in
            prepareWorkbench(for: newTaskID)
        }
    }

    @ViewBuilder
    private func feedbackAction(_ evaluation: InspectionTrainingEvaluation) -> some View {
        Button {
            showingHint = false
            feedbackIsFocused = false
            if evaluation.isCorrect {
                trainingStore.advance(in: lab)
            } else {
                trainingStore.retry(in: lab)
            }
            resetWorkbench()
            Haptics.selection()
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
        selectedWorkbenchFunction = nil
        selectedLeadTopology = nil
        feedbackIsFocused = false
    }

    private func resetWorkbench() {
        preparedWorkbenchTaskID = nil
        selectedWorkbenchFunction = nil
        selectedLeadTopology = nil
        feedbackIsFocused = false
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

private enum WorkbenchFunction: String, Identifiable {
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
        case .off: 0
        case .voltageCheck: 24
        case .lowOhms: 48
        case .insulation500: 72
        case .loopNoTrip: 96
        case .prospectiveFaultCurrent: 120
        }
    }

    var isLiveFunction: Bool {
        self == .voltageCheck || self == .loopNoTrip || self == .prospectiveFaultCurrent
    }
}

private enum WorkbenchLeadTopology: String, Identifiable {
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

private struct WorkbenchSetup {
    let prompt: String
    let functions: [WorkbenchFunction]
    let correctFunction: WorkbenchFunction
    let topologies: [WorkbenchLeadTopology]
    let correctTopology: WorkbenchLeadTopology

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

private struct InspectionTrainingWorkbench: View {
    let lab: InspectionTrainingLab
    let taskIndex: Int
    let evaluation: InspectionTrainingEvaluation?
    let setup: WorkbenchSetup
    @Binding var selectedFunction: WorkbenchFunction?
    @Binding var selectedTopology: WorkbenchLeadTopology?

    private var functionIsReady: Bool { selectedFunction == setup.correctFunction }
    private var topologyIsReady: Bool { selectedTopology == setup.correctTopology }
    private var isReady: Bool { functionIsReady && topologyIsReady }

    private var display: String {
        if let evaluation, !evaluation.isCorrect { return "CHECK" }
        if evaluation?.isCorrect == true {
            let values: [String]
            switch lab.id {
            case "protective-conductor-continuity":
                values = ["SAFE", "0.00 Ω", "R1+R2", "3.80 Ω", "SAVED"]
            case "ring-final-continuity":
                values = ["DEAD", "r1 rn r2", "CROSS", "0.29 Ω", "RESTORED"]
            case "insulation-resistance":
                values = ["DEAD", "EQUIP", "500 V", "2.80 MΩ", "CLEAR"]
            case "earth-fault-loop-impedance":
                values = ["CONTROL", "CPC + CALC", "L–CPC", "0.60 Ω", "SAFE"]
            case "prospective-fault-current":
                values = ["NON-LIVE", "PSCC/PEFC", "PSCC L–N", "PEFC L–CPC", "RATED"]
            default:
                values = ["READY"]
            }
            return values[min(max(taskIndex, 0), values.count - 1)]
        }
        if selectedFunction == nil { return "SELECT" }
        if !functionIsReady { return "CHECK MODE" }
        if selectedTopology == nil { return "CONNECT" }
        if !topologyIsReady { return "CHECK LEADS" }
        return "READY"
    }

    private var status: (text: String, symbol: String, color: Color) {
        if evaluation != nil {
            return ("Setup locked for this answer", "lock.fill", Color.sparkyMuted)
        }
        if selectedFunction == nil {
            return ("Stage 1: select the tester function", "dial.medium", Color.sparkyAccent)
        }
        if !functionIsReady {
            return ("Adjust the tester function", "exclamationmark.triangle.fill", Color.sparkyDanger)
        }
        if selectedTopology == nil {
            return ("Stage 2: select the connection arrangement", "cable.connector", Color.sparkyAccent)
        }
        if !topologyIsReady {
            return ("Adjust the connection arrangement", "exclamationmark.triangle.fill", Color.sparkyDanger)
        }
        return ("Workbench ready — actions unlocked", "checkmark.circle.fill", Color.sparkySuccess)
    }

    var body: some View {
        VStack(alignment: .leading, spacing: 12) {
            HStack {
                Label("Virtual test bench", systemImage: "gauge.with.dots.needle.67percent")
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

            GeometryReader { proxy in
                ZStack {
                    WorkbenchCanvas(
                        topology: selectedTopology,
                        isSuccessful: evaluation?.isCorrect == true
                    )

                    VirtualTesterGraphic(
                        display: display,
                        function: selectedFunction
                    )
                    .frame(width: proxy.size.width * 0.58, height: 122)
                    .position(x: proxy.size.width * 0.64, y: proxy.size.height * 0.62)

                    VStack(spacing: 4) {
                        ForEach(selectedTopology?.terminalLabels ?? ["L", "N", "CPC"], id: \.self) {
                            Text($0)
                        }
                    }
                    .font(.caption2.bold().monospaced())
                    .foregroundStyle(Color.sparkyText)
                    .position(x: proxy.size.width * 0.11, y: proxy.size.height * 0.43)
                }
                .accessibilityElement(children: .ignore)
                .accessibilityLabel("Virtual tester graphic")
                .accessibilityValue(graphicAccessibilityValue)
            }
            .frame(height: 230)
            .background(Color.sparkySurfaceRaised.opacity(0.52))
            .clipShape(RoundedRectangle(cornerRadius: 17, style: .continuous))
            .overlay {
                RoundedRectangle(cornerRadius: 17, style: .continuous)
                    .stroke(Color.sparkyBorder, lineWidth: 1)
            }

            WorkbenchControlStage(title: "1 · Tester function") {
                LazyVGrid(columns: [GridItem(.adaptive(minimum: 88), spacing: 8)], spacing: 8) {
                    ForEach(setup.functions) { function in
                        WorkbenchControlButton(
                            title: function.label,
                            isSelected: selectedFunction == function,
                            isCorrectSelection: function == setup.correctFunction,
                            isEnabled: evaluation == nil
                        ) {
                            selectedFunction = function
                            selectedTopology = nil
                            Haptics.selection()
                            announceFunction(function)
                        }
                    }
                }
            }

            WorkbenchControlStage(title: "2 · Lead arrangement") {
                VStack(spacing: 8) {
                    ForEach(setup.topologies) { topology in
                        WorkbenchControlButton(
                            title: topology.label,
                            isSelected: selectedTopology == topology,
                            isCorrectSelection: topology == setup.correctTopology,
                            isEnabled: evaluation == nil && functionIsReady
                        ) {
                            selectedTopology = topology
                            Haptics.selection()
                            announceTopology(topology)
                        }
                    }
                }
            }
            .opacity(functionIsReady ? 1 : 0.58)

            Label(status.text, systemImage: status.symbol)
                .font(.caption.weight(.bold))
                .foregroundStyle(status.color)
                .frame(maxWidth: .infinity, alignment: .leading)
                .padding(10)
                .background(status.color.opacity(0.10))
                .clipShape(RoundedRectangle(cornerRadius: 11, style: .continuous))
                .accessibilityLabel(status.text)
        }
        .sparkyCard(padding: 13)
        .accessibilityElement(children: .contain)
    }

    private var graphicAccessibilityValue: String {
        let function = selectedFunction?.label ?? "no function selected"
        let topology = selectedTopology?.label ?? "no lead arrangement selected"
        return "\(function), \(topology), display \(display), \(lab.testMode.rawValue)"
    }

    private func announceFunction(_ function: WorkbenchFunction) {
        let message = function == setup.correctFunction
            ? "Tester set to \(function.label). Connection controls unlocked."
            : "\(function.label) is not the suitable tester function for this step."
        UIAccessibility.post(notification: .announcement, argument: message)
    }

    private func announceTopology(_ topology: WorkbenchLeadTopology) {
        let message = topology == setup.correctTopology
            ? "Workbench ready. Answer choices unlocked."
            : "Check the \(topology.label) connection arrangement."
        UIAccessibility.post(notification: .announcement, argument: message)
    }
}

private struct WorkbenchControlStage<Content: View>: View {
    let title: String
    @ViewBuilder let content: Content

    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            Text(title)
                .font(.caption.weight(.bold))
                .foregroundStyle(Color.sparkyMuted)
            content
        }
    }
}

private struct WorkbenchControlButton: View {
    let title: String
    let isSelected: Bool
    let isCorrectSelection: Bool
    let isEnabled: Bool
    let action: () -> Void

    private var color: Color {
        guard isSelected else { return Color.sparkyAccent }
        return isCorrectSelection ? Color.sparkySuccess : Color.sparkyDanger
    }

    var body: some View {
        Button(action: action) {
            HStack(spacing: 8) {
                Image(systemName: isSelected
                    ? (isCorrectSelection ? "checkmark.circle.fill" : "xmark.circle.fill")
                    : "circle")
                    .accessibilityHidden(true)
                Text(title)
                    .font(.caption.weight(.bold))
                    .multilineTextAlignment(.leading)
                    .fixedSize(horizontal: false, vertical: true)
                Spacer(minLength: 0)
            }
            .foregroundStyle(isSelected ? color : Color.sparkyText)
            .padding(.horizontal, 11)
            .frame(maxWidth: .infinity, minHeight: 44, alignment: .leading)
            .background(isSelected ? color.opacity(0.11) : Color.sparkySurfaceRaised)
            .clipShape(RoundedRectangle(cornerRadius: 11, style: .continuous))
            .overlay {
                RoundedRectangle(cornerRadius: 11, style: .continuous)
                    .stroke(isSelected ? color.opacity(0.5) : Color.sparkyBorder, lineWidth: 1)
            }
            .contentShape(Rectangle())
        }
        .buttonStyle(.plain)
        .disabled(!isEnabled)
        .accessibilityValue(accessibilityValue)
        .accessibilityHint(isEnabled ? "Double tap to select" : "Select the suitable tester function first")
    }

    private var accessibilityValue: String {
        guard isSelected else { return "Not selected" }
        return isCorrectSelection ? "Selected, suitable" : "Selected, needs adjustment"
    }
}

private struct WorkbenchCanvas: View {
    let topology: WorkbenchLeadTopology?
    let isSuccessful: Bool

    var body: some View {
        Canvas { context, size in
            let gridColor = Color.sparkyGridLine.opacity(0.9)
            var grid = Path()
            stride(from: CGFloat(18), through: size.width, by: 24).forEach { x in
                grid.move(to: CGPoint(x: x, y: 0))
                grid.addLine(to: CGPoint(x: x, y: size.height))
            }
            stride(from: CGFloat(18), through: size.height, by: 24).forEach { y in
                grid.move(to: CGPoint(x: 0, y: y))
                grid.addLine(to: CGPoint(x: size.width, y: y))
            }
            context.stroke(grid, with: .color(gridColor), lineWidth: 0.5)

            let redOrigin = CGPoint(x: size.width * 0.61, y: size.height * 0.72)
            let blackOrigin = CGPoint(x: size.width * 0.72, y: size.height * 0.72)

            if topology == .ringEndToEnd
                || topology == .ringCrossLineNeutral
                || topology == .ringCrossLineCPC {
                drawRingArrangement(
                    context: &context,
                    size: size,
                    topology: topology,
                    redOrigin: redOrigin,
                    blackOrigin: blackOrigin
                )
            } else {
                drawStandardArrangement(
                    context: &context,
                    size: size,
                    topology: topology,
                    redOrigin: redOrigin,
                    blackOrigin: blackOrigin
                )
            }

            if isSuccessful {
                let successRect = CGRect(x: size.width - 40, y: 14, width: 26, height: 26)
                context.fill(Path(ellipseIn: successRect), with: .color(Color.sparkySuccess))
                var tick = Path()
                tick.move(to: CGPoint(x: successRect.minX + 7, y: successRect.midY))
                tick.addLine(to: CGPoint(x: successRect.minX + 12, y: successRect.maxY - 7))
                tick.addLine(to: CGPoint(x: successRect.maxX - 6, y: successRect.minY + 7))
                context.stroke(
                    tick,
                    with: .color(.white),
                    style: StrokeStyle(lineWidth: 2.4, lineCap: .round, lineJoin: .round)
                )
            }
        }
        .accessibilityHidden(true)
    }

    private func drawStandardArrangement(
        context: inout GraphicsContext,
        size: CGSize,
        topology: WorkbenchLeadTopology?,
        redOrigin: CGPoint,
        blackOrigin: CGPoint
    ) {
        let boardRect = CGRect(
            x: size.width * 0.05,
            y: size.height * 0.16,
            width: size.width * 0.27,
            height: size.height * 0.53
        )
        drawBoard(context: &context, rect: boardRect)

        let terminalX = boardRect.maxX - 17
        let terminalYs = [boardRect.minY + 28, boardRect.midY, boardRect.maxY - 28]
        let colors = terminalColors

        for index in terminalYs.indices {
            drawTerminal(
                context: &context,
                point: CGPoint(x: terminalX, y: terminalYs[index]),
                color: colors[index]
            )
        }

        if topology == .shorted {
            var nullLoop = Path()
            nullLoop.move(to: redOrigin)
            nullLoop.addCurve(
                to: blackOrigin,
                control1: CGPoint(x: size.width * 0.60, y: size.height * 0.95),
                control2: CGPoint(x: size.width * 0.73, y: size.height * 0.95)
            )
            context.stroke(
                nullLoop,
                with: .color(Color.sparkyAccent),
                style: StrokeStyle(lineWidth: 4, lineCap: .round)
            )
            return
        }

        guard let endpoints = leadEndpoints(for: topology) else { return }
        drawLead(
            context: &context,
            from: redOrigin,
            to: CGPoint(x: terminalX, y: terminalYs[endpoints.red]),
            color: Color.red.opacity(0.85),
            size: size
        )
        drawLead(
            context: &context,
            from: blackOrigin,
            to: CGPoint(x: terminalX, y: terminalYs[endpoints.black]),
            color: Color(uiColor: .label).opacity(0.82),
            size: size
        )

        if topology == .lineNeutralToCPC {
            drawLead(
                context: &context,
                from: redOrigin,
                to: CGPoint(x: terminalX, y: terminalYs[1]),
                color: Color.red.opacity(0.58),
                size: size,
                dashed: true
            )
        }
    }

    private func drawRingArrangement(
        context: inout GraphicsContext,
        size: CGSize,
        topology: WorkbenchLeadTopology?,
        redOrigin: CGPoint,
        blackOrigin: CGPoint
    ) {
        let boardRect = CGRect(
            x: size.width * 0.04,
            y: size.height * 0.10,
            width: size.width * 0.40,
            height: size.height * 0.62
        )
        drawBoard(context: &context, rect: boardRect)

        let leftX = boardRect.minX + 25
        let rightX = boardRect.maxX - 25
        let terminalYs = [boardRect.minY + 43, boardRect.midY + 8, boardRect.maxY - 27]

        context.draw(
            Text("A").font(.caption2.bold()).foregroundStyle(Color.sparkyMuted),
            at: CGPoint(x: leftX, y: boardRect.minY + 14)
        )
        context.draw(
            Text("B").font(.caption2.bold()).foregroundStyle(Color.sparkyMuted),
            at: CGPoint(x: rightX, y: boardRect.minY + 14)
        )

        for index in terminalYs.indices {
            drawTerminal(
                context: &context,
                point: CGPoint(x: leftX, y: terminalYs[index]),
                color: terminalColors[index]
            )
            drawTerminal(
                context: &context,
                point: CGPoint(x: rightX, y: terminalYs[index]),
                color: terminalColors[index]
            )
            context.draw(
                Text(["r1", "rn", "r2"][index])
                    .font(.caption2.bold().monospaced())
                    .foregroundStyle(Color.sparkyText),
                at: CGPoint(x: boardRect.midX, y: terminalYs[index])
            )
        }

        if topology == .ringEndToEnd {
            drawLead(
                context: &context,
                from: redOrigin,
                to: CGPoint(x: leftX, y: terminalYs[0]),
                color: Color.red.opacity(0.85),
                size: size
            )
            drawLead(
                context: &context,
                from: blackOrigin,
                to: CGPoint(x: rightX, y: terminalYs[0]),
                color: Color(uiColor: .label).opacity(0.82),
                size: size
            )
            return
        }

        let pairedIndex = topology == .ringCrossLineCPC ? 2 : 1
        let arrangementLabel = topology == .ringCrossLineCPC ? "L–CPC" : "L–N"
        context.draw(
            Text(arrangementLabel)
                .font(.caption2.bold().monospaced())
                .foregroundStyle(Color.sparkyAccent),
            at: CGPoint(x: boardRect.midX, y: boardRect.minY + 14)
        )

        drawLead(
            context: &context,
            from: redOrigin,
            to: CGPoint(x: leftX, y: terminalYs[0]),
            color: Color.red.opacity(0.85),
            size: size
        )
        drawLead(
            context: &context,
            from: blackOrigin,
            to: CGPoint(x: rightX, y: terminalYs[pairedIndex]),
            color: Color(uiColor: .label).opacity(0.82),
            size: size
        )

        var crossLink = Path()
        crossLink.move(to: CGPoint(x: rightX, y: terminalYs[0]))
        crossLink.addLine(to: CGPoint(x: leftX, y: terminalYs[pairedIndex]))
        context.stroke(
            crossLink,
            with: .color(Color.sparkySuccess.opacity(0.74)),
            style: StrokeStyle(lineWidth: 3, lineCap: .round, dash: [6, 4])
        )
    }

    private var terminalColors: [Color] {
        [
            Color(red: 0.48, green: 0.24, blue: 0.12),
            Color(red: 0.20, green: 0.47, blue: 0.85),
            Color(red: 0.18, green: 0.58, blue: 0.29),
        ]
    }

    private func drawBoard(context: inout GraphicsContext, rect: CGRect) {
        context.fill(Path(roundedRect: rect, cornerRadius: 13), with: .color(Color.sparkySurface))
        context.stroke(
            Path(roundedRect: rect, cornerRadius: 13),
            with: .color(Color.sparkyBorder),
            lineWidth: 1
        )
    }

    private func drawTerminal(
        context: inout GraphicsContext,
        point: CGPoint,
        color: Color
    ) {
        let rect = CGRect(x: point.x - 8, y: point.y - 8, width: 16, height: 16)
        context.fill(Path(ellipseIn: rect), with: .color(color))
        context.stroke(
            Path(ellipseIn: rect),
            with: .color(Color.sparkyText.opacity(0.42)),
            lineWidth: 1
        )
    }

    private func leadEndpoints(for topology: WorkbenchLeadTopology?) -> (red: Int, black: Int)? {
        switch topology {
        case .lineCPC, .lineNeutralToCPC: (0, 2)
        case .lineNeutral, .pfcPSCC: (0, 1)
        case .pfcPEFC: (0, 2)
        case .neutralCPC: (1, 2)
        case .parked, .removed, .shorted, .ringEndToEnd,
             .ringCrossLineNeutral, .ringCrossLineCPC, .none: nil
        }
    }

    private func drawLead(
        context: inout GraphicsContext,
        from origin: CGPoint,
        to target: CGPoint,
        color: Color,
        size: CGSize,
        dashed: Bool = false
    ) {
        var lead = Path()
        lead.move(to: origin)
        lead.addCurve(
            to: target,
            control1: CGPoint(x: origin.x - size.width * 0.04, y: size.height * 0.96),
            control2: CGPoint(x: size.width * 0.39, y: target.y)
        )
        context.stroke(
            lead,
            with: .color(color),
            style: StrokeStyle(
                lineWidth: dashed ? 3 : 4,
                lineCap: .round,
                dash: dashed ? [7, 5] : []
            )
        )
    }
}

private struct VirtualTesterGraphic: View {
    let display: String
    let function: WorkbenchFunction?

    var body: some View {
        ZStack {
            RoundedRectangle(cornerRadius: 24, style: .continuous)
                .fill(Color.sparkySurface)
                .overlay {
                    RoundedRectangle(cornerRadius: 24, style: .continuous)
                        .stroke(Color.sparkyText.opacity(0.32), lineWidth: 2)
                }
                .shadow(color: Color.black.opacity(0.12), radius: 8, y: 5)

            HStack(spacing: 10) {
                VStack(alignment: .leading, spacing: 5) {
                    Text("SPARKY LAB")
                        .font(.caption2.bold().monospaced())
                        .foregroundStyle(Color.sparkyMuted)

                    Text(display)
                        .font(.title3.bold().monospacedDigit())
                        .foregroundStyle(Color(red: 0.22, green: 0.36, blue: 0.22))
                        .lineLimit(1)
                        .minimumScaleFactor(0.52)
                        .frame(maxWidth: .infinity, minHeight: 44, alignment: .trailing)
                        .padding(.horizontal, 8)
                        .background(Color(red: 0.76, green: 0.82, blue: 0.70))
                        .clipShape(RoundedRectangle(cornerRadius: 7, style: .continuous))
                }

                VStack(spacing: 5) {
                    ZStack {
                        Circle()
                            .fill(Color.sparkyText.opacity(0.88))
                        Capsule()
                            .fill(Color.white.opacity(0.85))
                            .frame(width: 4, height: 23)
                            .offset(y: -8)
                            .rotationEffect(.degrees(function?.dialAngle ?? 0))
                    }
                    .frame(width: 58, height: 58)

                    Text(function?.label ?? "—")
                        .font(.caption2.bold().monospaced())
                        .foregroundStyle(function?.isLiveFunction == true ? Color.sparkyDanger : Color.sparkyAccent)
                        .lineLimit(1)
                        .minimumScaleFactor(0.62)
                }
            }
            .padding(14)
        }
    }
}
