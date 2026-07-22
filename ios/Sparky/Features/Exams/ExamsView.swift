import SwiftUI
import UIKit

struct ExamsView: View {
    let contentStore: ContentStore
    let progressStore: ProgressStore

    @Environment(AppRouter.self) private var router
    @State private var searchText = ""
    @State private var path: [String] = []

    private var filteredExams: [ExamIndexEntry] {
        guard !searchText.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty else {
            return contentStore.catalog.exams
        }
        let query = searchText.localizedLowercase
        return contentStore.catalog.exams.filter {
            $0.title.localizedLowercase.contains(query) ||
            $0.subtitle.localizedLowercase.contains(query) ||
            $0.description.localizedLowercase.contains(query)
        }
    }

    var body: some View {
        NavigationStack(path: $path) {
            ZStack {
                SparkyBackdrop()

                ScrollView {
                    LazyVStack(spacing: 16) {
                        examHero

                        HStack {
                            SparkySectionHeader(
                                eyebrow: "Practice bank",
                                title: "Choose a qualification",
                                detail: "\(contentStore.catalog.questionCount.formatted()) questions"
                            )
                            Spacer()
                        }

                        ForEach(filteredExams) { exam in
                            NavigationLink(value: exam.id) {
                                ExamCatalogCard(
                                    exam: exam,
                                    completedTests: completedTests(for: exam),
                                    answeredQuestions: answeredQuestions(for: exam)
                                )
                            }
                            .buttonStyle(.plain)
                        }

                        StudyNotice(
                            message: "Exam wording is a study aid. Confirm the required BS 7671 edition, awarding-body rules and current official guidance before assessment or site work."
                        )
                    }
                    .padding(.horizontal, SparkyLayout.pageInset)
                    .padding(.bottom, 28)
                }
                .scrollIndicators(.hidden)
            }
            .navigationTitle("Exams")
            .searchable(text: $searchText, prompt: "Search exams")
            .toolbar {
                ToolbarItem(placement: .topBarLeading) {
                    SparkyBrandMark(size: 31)
                }
                ToolbarItem(placement: .topBarTrailing) {
                    SparkyAccountToolbarItem()
                }
            }
            .navigationDestination(for: String.self) { examID in
                ExamDetailView(
                    examID: examID,
                    contentStore: contentStore,
                    progressStore: progressStore
                )
            }
            .onAppear { openPendingExamIfNeeded() }
            .onChange(of: router.pendingExamID) { _, _ in openPendingExamIfNeeded() }
        }
    }

    private var examHero: some View {
        VStack(alignment: .leading, spacing: 16) {
            HStack(alignment: .top) {
                VStack(alignment: .leading, spacing: 7) {
                    SparkyEyebrow(text: "EAL · City & Guilds aligned")
                    Text("Practice with purpose.")
                        .font(.largeTitle.weight(.bold))
                        .foregroundStyle(Color.sparkyText)
                        .tracking(-1)
                    Text("Focused mock tests with reviewed feedback for every option.")
                        .font(.subheadline)
                        .foregroundStyle(Color.sparkyMuted)
                }
                Spacer(minLength: 8)
                Image(systemName: "checkmark.seal.fill")
                    .font(.system(size: 44))
                    .foregroundStyle(Color.sparkyAccent)
            }

            HStack(spacing: 10) {
                MetricTile(label: "Exam banks", value: "\(contentStore.catalog.examCount)", symbol: "books.vertical")
                MetricTile(label: "Mock tests", value: "\(contentStore.catalog.variantCount)", symbol: "checklist")
                MetricTile(label: "Questions", value: compactQuestionCount, symbol: "questionmark.circle")
            }
        }
        .sparkyCard(padding: 18)
    }

    private var compactQuestionCount: String {
        contentStore.catalog.questionCount >= 1_000
            ? String(format: "%.1fk", Double(contentStore.catalog.questionCount) / 1_000)
            : "\(contentStore.catalog.questionCount)"
    }

    private func completedTests(for exam: ExamIndexEntry) -> Int {
        exam.tests.reduce(into: 0) { count, test in
            if progressStore.progress(examID: exam.id, testID: test.id).submitted {
                count += 1
            }
        }
    }

    private func answeredQuestions(for exam: ExamIndexEntry) -> Int {
        exam.tests.reduce(into: 0) { count, test in
            count += progressStore.progress(examID: exam.id, testID: test.id).answers.count
        }
    }

    private func openPendingExamIfNeeded() {
        guard let examID = router.pendingExamID,
              contentStore.examIndex(id: examID) != nil else { return }
        path = [examID]
        router.clearPendingExam(examID)
    }
}

private struct ExamCatalogCard: View {
    let exam: ExamIndexEntry
    let completedTests: Int
    let answeredQuestions: Int

    private var progress: Double {
        guard exam.testCount > 0 else { return 0 }
        return Double(completedTests) / Double(exam.testCount)
    }

    var body: some View {
        VStack(alignment: .leading, spacing: 14) {
            HStack(alignment: .top, spacing: 13) {
                ZStack {
                    RoundedRectangle(cornerRadius: 15, style: .continuous)
                        .fill(Color.sparkyAccentSoft)
                    Image(systemName: examSymbol)
                        .font(.title3.weight(.semibold))
                        .foregroundStyle(Color.sparkyAccent)
                }
                .frame(width: 50, height: 50)

                VStack(alignment: .leading, spacing: 4) {
                    Text(exam.title)
                        .font(.headline)
                        .foregroundStyle(Color.sparkyText)
                        .fixedSize(horizontal: false, vertical: true)
                    Text(exam.subtitle)
                        .font(.caption)
                        .foregroundStyle(Color.sparkyMuted)
                        .lineLimit(2)
                }
                Spacer(minLength: 4)
                Image(systemName: "chevron.right")
                    .font(.caption.bold())
                    .foregroundStyle(Color.sparkyMuted)
            }

            HStack(spacing: 8) {
                TagChip(title: "\(exam.testCount) test\(exam.testCount == 1 ? "" : "s")")
                TagChip(title: "\(exam.questionCount) questions")
                TagChip(title: "\(Int(exam.passPercent * 100))% pass")
            }

            if completedTests > 0 || answeredQuestions > 0 {
                HStack(spacing: 11) {
                    ProgressView(value: progress)
                        .tint(Color.sparkyAccent)
                    Text(completedTests == exam.testCount ? "Complete" : "\(completedTests)/\(exam.testCount) complete")
                        .font(.caption.weight(.semibold))
                        .foregroundStyle(Color.sparkyMuted)
                }
            }
        }
        .sparkyCard(padding: 15)
        .contentShape(Rectangle())
    }

    private var examSymbol: String {
        let title = exam.title.localizedLowercase
        if title.contains("inspection") { return "magnifyingglass.circle" }
        if title.contains("health") { return "cross.case" }
        if title.contains("building") { return "house" }
        if title.contains("18th") { return "book.closed" }
        if title.contains("pat") { return "powerplug" }
        return "checklist"
    }
}

private struct ExamDetailView: View {
    let examID: String
    let contentStore: ContentStore
    let progressStore: ProgressStore

    @Environment(AppRouter.self) private var router

    @State private var exam: Exam?
    @State private var loadError: String?
    @State private var previewTest: ExamTest?

    var body: some View {
        ZStack {
            SparkyBackdrop()

            if let exam {
                ScrollView {
                    LazyVStack(spacing: 16) {
                        detailHero(exam)
                        priorities(exam)

                        HStack {
                            SparkySectionHeader(
                                eyebrow: "Mock tests",
                                title: exam.tests.count == 1 ? "Your test" : "Choose a test",
                                detail: "Progress saves offline"
                            )
                            Spacer()
                        }

                        ForEach(exam.tests) { test in
                            NavigationLink {
                                ExamSessionView(
                                    exam: exam,
                                    test: test,
                                    progressStore: progressStore
                                )
                            } label: {
                                TestCard(
                                    exam: exam,
                                    test: test,
                                    progressStore: progressStore
                                )
                            }
                            .buttonStyle(.plain)
                        }
                    }
                    .padding(.horizontal, SparkyLayout.pageInset)
                    .padding(.bottom, 28)
                }
                .scrollIndicators(.hidden)
            } else if let loadError {
                ContentUnavailableCard(
                    title: "Exam unavailable",
                    message: loadError,
                    symbol: "exclamationmark.triangle"
                )
            } else {
                LoadingStateView(title: "Loading exam")
            }
        }
        .navigationTitle(contentStore.examIndex(id: examID)?.title ?? "Exam")
        .navigationBarTitleDisplayMode(.inline)
        .navigationDestination(item: $previewTest) { test in
            if let exam {
                ExamSessionView(exam: exam, test: test, progressStore: progressStore)
            }
        }
        .task { loadExam() }
    }

    private func loadExam() {
        guard exam == nil, loadError == nil else { return }
        do {
            let loadedExam = try contentStore.loadExam(id: examID)
            exam = loadedExam
            if let testID = router.pendingTestID,
               let test = loadedExam.test(id: testID) {
                previewTest = test
                router.clearPendingTest(testID)
            }
        } catch {
            loadError = error.localizedDescription
        }
    }

    private func detailHero(_ exam: Exam) -> some View {
        VStack(alignment: .leading, spacing: 15) {
            SparkyEyebrow(text: "Practice exam")
            Text(exam.title)
                .font(.largeTitle.weight(.bold))
                .foregroundStyle(Color.sparkyText)
                .tracking(-1)
            Text(exam.description)
                .font(.subheadline)
                .foregroundStyle(Color.sparkyMuted)
            HStack(spacing: 10) {
                MetricTile(label: "Pass mark", value: "\(Int(exam.passPercent * 100))%")
                MetricTile(label: "Tests", value: "\(exam.tests.count)")
                MetricTile(label: "Mode", value: "Offline")
            }
        }
        .sparkyCard(padding: 18)
    }

    private func priorities(_ exam: Exam) -> some View {
        DisclosureGroup("What these tests cover") {
            VStack(alignment: .leading, spacing: 9) {
                ForEach(exam.priorities, id: \.self) { priority in
                    Label(priority, systemImage: "scope")
                        .font(.caption)
                        .foregroundStyle(Color.sparkyMuted)
                }
            }
            .padding(.top, 10)
        }
        .font(.subheadline.weight(.semibold))
        .foregroundStyle(Color.sparkyText)
        .sparkyCard(padding: 15)
    }
}

private struct TestCard: View {
    let exam: Exam
    let test: ExamTest
    let progressStore: ProgressStore

    private var progress: ExamVariantProgress {
        progressStore.progress(examID: exam.id, testID: test.id)
    }

    private var score: ExamScore {
        progressStore.score(for: test, in: exam)
    }

    var body: some View {
        HStack(spacing: 14) {
            ZStack {
                Circle()
                    .fill(progress.submitted ? Color.sparkySuccess.opacity(0.16) : Color.sparkyAccentSoft)
                Image(systemName: progress.submitted ? "checkmark" : "pencil.line")
                    .font(.headline.bold())
                    .foregroundStyle(progress.submitted ? Color.sparkySuccess : Color.sparkyAccent)
            }
            .frame(width: 48, height: 48)

            VStack(alignment: .leading, spacing: 5) {
                Text(test.title)
                    .font(.headline)
                    .foregroundStyle(Color.sparkyText)
                if progress.submitted {
                    Text("\(score.correct)/\(score.total) · \(score.percentage, format: .percent.precision(.fractionLength(0)))")
                        .font(.subheadline.weight(.semibold).monospacedDigit())
                        .foregroundStyle(score.passed ? Color.sparkySuccess : Color.sparkyDanger)
                } else if progress.answers.isEmpty {
                    Text("\(test.questionCount) questions · Not started")
                        .font(.caption)
                        .foregroundStyle(Color.sparkyMuted)
                } else {
                    Text("Continue · \(progress.answers.count)/\(test.questionCount) answered")
                        .font(.caption.weight(.semibold))
                        .foregroundStyle(Color.sparkyAccent)
                }
            }
            Spacer()
            Text(progress.submitted ? "Review" : (progress.answers.isEmpty ? "Start" : "Resume"))
                .font(.caption.weight(.bold))
                .foregroundStyle(Color.sparkyAccent)
            Image(systemName: "chevron.right")
                .font(.caption.bold())
                .foregroundStyle(Color.sparkyMuted)
        }
        .sparkyCard(padding: 15)
        .contentShape(Rectangle())
    }
}

private struct ExamSessionView: View {
    let exam: Exam
    let test: ExamTest
    let progressStore: ProgressStore

    @Environment(\.dismiss) private var dismiss
    @State private var currentIndex = 0
    @State private var didRestorePosition = false
    @State private var showingNavigator = false
    @State private var showingSubmitConfirmation = false
    @State private var showingResetConfirmation = false

    private var questions: [ExamQuestion] { test.questions }
    private var progress: ExamVariantProgress {
        progressStore.progress(examID: exam.id, testID: test.id)
    }
    private var question: ExamQuestion? {
        questions.indices.contains(currentIndex) ? questions[currentIndex] : nil
    }
    private var score: ExamScore {
        progressStore.score(for: test, in: exam)
    }

    var body: some View {
        ZStack {
            SparkyBackdrop()

            if let question {
                ScrollViewReader { proxy in
                    ScrollView {
                        LazyVStack(spacing: 16) {
                            Color.clear.frame(height: 1).id("question-top")
                            if progress.submitted {
                                resultBanner
                            }
                            questionHeader(question)
                            QuestionCard(
                                question: question,
                                selectedAnswer: progress.answers[question.number],
                                submitted: progress.submitted,
                                onSelect: { choice in
                                    progressStore.answer(
                                        choice,
                                        for: question.number,
                                        examID: exam.id,
                                        testID: test.id
                                    )
                                    Haptics.selection()
                                }
                            )
                        }
                        .padding(.horizontal, SparkyLayout.pageInset)
                        .padding(.bottom, 110)
                    }
                    .scrollIndicators(.hidden)
                    .onChange(of: currentIndex) { _, _ in
                        withAnimation(.easeOut(duration: 0.18)) {
                            proxy.scrollTo("question-top", anchor: .top)
                        }
                    }
                }
            } else {
                ContentUnavailableCard(
                    title: "No questions",
                    message: "This test does not contain any questions.",
                    symbol: "questionmark.folder"
                )
            }
        }
        .navigationTitle(test.title)
        .navigationBarTitleDisplayMode(.inline)
        .toolbar(.hidden, for: .tabBar)
        .toolbar {
            ToolbarItem(placement: .topBarTrailing) {
                Button {
                    showingNavigator = true
                } label: {
                    Image(systemName: "square.grid.3x3")
                }
                .accessibilityLabel("Question navigator")
            }

            if let question {
                ToolbarItem(placement: .topBarTrailing) {
                    Button {
                        _ = progressStore.toggleFlag(
                            question.number,
                            examID: exam.id,
                            testID: test.id
                        )
                        Haptics.selection()
                    } label: {
                        Image(systemName: progress.flaggedQuestions.contains(question.number) ? "flag.fill" : "flag")
                    }
                    .tint(progress.flaggedQuestions.contains(question.number) ? Color.sparkyAccent : nil)
                    .accessibilityLabel(progress.flaggedQuestions.contains(question.number) ? "Remove flag" : "Flag question")
                }
            }
        }
        .safeAreaInset(edge: .bottom) { examControls }
        .sheet(isPresented: $showingNavigator) {
            QuestionNavigatorSheet(
                exam: exam,
                test: test,
                progressStore: progressStore,
                currentIndex: $currentIndex
            )
            .presentationDetents([.medium, .large])
        }
        .confirmationDialog(
            "Submit \(test.title)?",
            isPresented: $showingSubmitConfirmation,
            titleVisibility: .visible
        ) {
            Button("Submit exam") { submitExam() }
        } message: {
            if score.unanswered > 0 {
                Text("You still have \(score.unanswered) unanswered question\(score.unanswered == 1 ? "" : "s"). You can review everything after submitting.")
            } else {
                Text("Answers cannot be changed after submission unless you reset this test.")
            }
        }
        .confirmationDialog(
            "Reset this attempt?",
            isPresented: $showingResetConfirmation,
            titleVisibility: .visible
        ) {
            Button("Start again", role: .destructive) {
                progressStore.reset(examID: exam.id, testID: test.id)
                currentIndex = 0
            }
        } message: {
            Text("All answers, flags and the result for this test will be removed from this device.")
        }
        .onAppear { restorePosition() }
        .onChange(of: currentIndex) { _, newValue in
            progressStore.setCurrentQuestion(newValue, examID: exam.id, testID: test.id)
        }
    }

    private func questionHeader(_ question: ExamQuestion) -> some View {
        VStack(alignment: .leading, spacing: 11) {
            HStack {
                SparkyEyebrow(text: sectionTitle(for: question))
                Spacer()
                Text("\(currentIndex + 1) / \(questions.count)")
                    .font(.caption.bold().monospacedDigit())
                    .foregroundStyle(Color.sparkyMuted)
            }
            ProgressView(value: Double(currentIndex + 1), total: Double(max(questions.count, 1)))
                .tint(Color.sparkyAccent)
            HStack {
                Label("\(progress.answers.count) answered", systemImage: "checkmark.circle")
                Spacer()
                if !progress.flaggedQuestions.isEmpty {
                    Label("\(progress.flaggedQuestions.count) flagged", systemImage: "flag")
                }
            }
            .font(.caption.weight(.semibold))
            .foregroundStyle(Color.sparkyMuted)
        }
        .sparkyCard(padding: 14)
    }

    private var resultBanner: some View {
        VStack(alignment: .leading, spacing: 12) {
            HStack(spacing: 14) {
                ZStack {
                    Circle()
                        .fill((score.passed ? Color.sparkySuccess : Color.sparkyDanger).opacity(0.14))
                    Image(systemName: score.passed ? "checkmark" : "arrow.counterclockwise")
                        .font(.title2.bold())
                        .foregroundStyle(score.passed ? Color.sparkySuccess : Color.sparkyDanger)
                }
                .frame(width: 54, height: 54)

                VStack(alignment: .leading, spacing: 3) {
                    SparkyEyebrow(text: score.passed ? "Pass" : "Keep practising")
                    Text("\(score.correct) of \(score.total) correct")
                        .font(.title2.bold().monospacedDigit())
                        .foregroundStyle(Color.sparkyText)
                    Text(exam.scoringBand(for: score.percentage)?.label ?? "Review the feedback below")
                        .font(.caption)
                        .foregroundStyle(Color.sparkyMuted)
                }
                Spacer()
                ProgressRing(progress: score.percentage, size: 58)
            }

            HStack {
                Button("Question grid") { showingNavigator = true }
                    .buttonStyle(SparkySecondaryButtonStyle())
                Spacer()
                Button("Try again") { showingResetConfirmation = true }
                    .buttonStyle(SparkySecondaryButtonStyle())
            }
        }
        .sparkyCard(padding: 16)
    }

    private func sectionTitle(for question: ExamQuestion) -> String {
        test.sections.first(where: { section in
            section.questions.contains(where: { $0.number == question.number })
        })?.title ?? exam.title
    }

    private var examControls: some View {
        HStack(spacing: 11) {
            Button {
                currentIndex = max(0, currentIndex - 1)
                Haptics.selection()
            } label: {
                Image(systemName: "chevron.left")
                    .frame(width: 44, height: 44)
            }
            .buttonStyle(.bordered)
            .tint(Color.sparkyAccent)
            .disabled(currentIndex == 0)
            .accessibilityLabel("Previous question")

            if progress.submitted {
                Button {
                    if currentIndex < questions.count - 1 {
                        currentIndex += 1
                    } else {
                        dismiss()
                    }
                } label: {
                    Label(currentIndex < questions.count - 1 ? "Next question" : "Done", systemImage: "chevron.right")
                        .frame(maxWidth: .infinity)
                }
                .buttonStyle(SparkyPrimaryButtonStyle())
            } else if currentIndex < questions.count - 1 {
                Button {
                    currentIndex += 1
                    Haptics.selection()
                } label: {
                    HStack {
                        Text(progress.answers[question?.number ?? -1] == nil ? "Skip" : "Next")
                        Spacer()
                        Image(systemName: "chevron.right")
                    }
                    .frame(maxWidth: .infinity)
                }
                .buttonStyle(SparkyPrimaryButtonStyle())
            } else {
                Button {
                    showingSubmitConfirmation = true
                } label: {
                    Label("Submit exam", systemImage: "checkmark.seal")
                        .frame(maxWidth: .infinity)
                }
                .buttonStyle(SparkyPrimaryButtonStyle())
            }
        }
        .padding(.horizontal, SparkyLayout.pageInset)
        .padding(.vertical, 10)
        .background(.ultraThinMaterial)
        .overlay(alignment: .top) { Divider().overlay(Color.sparkyBorder) }
    }

    private func restorePosition() {
        guard !didRestorePosition else { return }
        didRestorePosition = true
        currentIndex = min(max(progress.currentQuestion, 0), max(questions.count - 1, 0))
    }

    private func submitExam() {
        progressStore.submit(examID: exam.id, testID: test.id)
        Haptics.success()
        currentIndex = 0
    }
}

private struct QuestionCard: View {
    let question: ExamQuestion
    let selectedAnswer: ExamChoice?
    let submitted: Bool
    let onSelect: (ExamChoice) -> Void

    var body: some View {
        VStack(alignment: .leading, spacing: 18) {
            HStack(alignment: .firstTextBaseline) {
                Text("Q\(question.number)")
                    .font(.caption.bold().monospaced())
                    .foregroundStyle(Color.sparkyAccent)
                Spacer()
                Menu {
                    Button {
                        UIPasteboard.general.string = clipboardText
                        Haptics.success()
                    } label: {
                        Label("Copy question", systemImage: "doc.on.doc")
                    }
                    ShareLink(item: clipboardText)
                } label: {
                    Image(systemName: "ellipsis")
                        .frame(width: 36, height: 36)
                }
                .accessibilityLabel("Question actions")
            }

            Text(question.prompt)
                .font(.title3.weight(.semibold))
                .foregroundStyle(Color.sparkyText)
                .fixedSize(horizontal: false, vertical: true)

            if let imageURLs = question.imageURLs {
                ForEach(imageURLs, id: \.self) { ExamImageView(path: $0) }
            }

            VStack(spacing: 11) {
                ForEach(ExamChoice.allCases) { choice in
                    ExamOptionCard(
                        choice: choice,
                        text: question.options[choice],
                        imagePath: question.optionImageURLs?[choice],
                        selected: selectedAnswer == choice,
                        correct: question.answer == choice,
                        submitted: submitted,
                        feedback: question.optionFeedback[choice],
                        onSelect: { onSelect(choice) }
                    )
                }
            }

            if submitted, let tables = question.solutionTables, !tables.isEmpty {
                VStack(alignment: .leading, spacing: 12) {
                    SparkyEyebrow(text: "Standards lookup")
                    ForEach(Array(tables.enumerated()), id: \.offset) { _, table in
                        SolutionTableView(table: table)
                    }
                }
            }
        }
        .sparkyCard(padding: 17)
    }

    private var clipboardText: String {
        let options = ExamChoice.allCases
            .map { "\($0.rawValue). \(question.options[$0])" }
            .joined(separator: "\n")
        return "Question \(question.number)\n\(question.prompt)\n\n\(options)"
    }
}

private struct ExamOptionCard: View {
    let choice: ExamChoice
    let text: String
    let imagePath: String?
    let selected: Bool
    let correct: Bool
    let submitted: Bool
    let feedback: ExamOptionFeedback
    let onSelect: () -> Void

    private var accent: Color {
        guard submitted else { return selected ? .sparkyAccent : .sparkyBorder }
        if correct { return .sparkySuccess }
        if selected { return .sparkyDanger }
        return .sparkyBorder
    }

    private var fill: Color {
        guard submitted else { return selected ? .sparkyAccentSoft : .sparkyBackground.opacity(0.58) }
        if correct { return .sparkySuccess.opacity(0.11) }
        if selected { return .sparkyDanger.opacity(0.10) }
        return .sparkyBackground.opacity(0.45)
    }

    var body: some View {
        Button(action: onSelect) {
            VStack(alignment: .leading, spacing: 11) {
                HStack(alignment: .top, spacing: 12) {
                    ZStack {
                        Circle()
                            .fill(selected || (submitted && correct) ? accent : Color.clear)
                        Circle().stroke(accent, lineWidth: 1.5)
                        Text(choice.rawValue)
                            .font(.caption.bold().monospaced())
                            .foregroundStyle(selected || (submitted && correct) ? Color.sparkyBackground : Color.sparkyText)
                    }
                    .frame(width: 30, height: 30)

                    Text(text)
                        .font(.body)
                        .foregroundStyle(Color.sparkyText)
                        .frame(maxWidth: .infinity, alignment: .leading)
                        .multilineTextAlignment(.leading)

                    if submitted && correct {
                        Image(systemName: "checkmark.circle.fill")
                            .foregroundStyle(Color.sparkySuccess)
                    } else if submitted && selected {
                        Image(systemName: "xmark.circle.fill")
                            .foregroundStyle(Color.sparkyDanger)
                    }
                }

                if let imagePath {
                    ExamImageView(path: imagePath, maxHeight: 180)
                }

                if submitted {
                    Divider().overlay(accent.opacity(0.45))
                    HStack(alignment: .top, spacing: 9) {
                        Image(systemName: correct ? "checkmark.circle" : "info.circle")
                            .foregroundStyle(accent)
                        Text(feedback.text)
                            .font(.subheadline)
                            .foregroundStyle(Color.sparkyMuted)
                            .frame(maxWidth: .infinity, alignment: .leading)
                            .multilineTextAlignment(.leading)
                    }
                }
            }
            .padding(14)
            .background(fill)
            .clipShape(RoundedRectangle(cornerRadius: 16, style: .continuous))
            .overlay {
                RoundedRectangle(cornerRadius: 16, style: .continuous)
                    .stroke(accent, lineWidth: selected || (submitted && correct) ? 1.6 : 1)
            }
            .contentShape(Rectangle())
        }
        .buttonStyle(.plain)
        .disabled(submitted)
        .accessibilityLabel("Option \(choice.rawValue), \(text)")
        .accessibilityValue(accessibilityValue)
        .accessibilityAddTraits(selected ? .isSelected : [])
    }

    private var accessibilityValue: String {
        if submitted && correct { return "Correct answer" }
        if submitted && selected { return "Selected, incorrect" }
        return selected ? "Selected" : "Not selected"
    }
}

private struct SolutionTableView: View {
    let table: ExamSolutionTable

    var body: some View {
        VStack(alignment: .leading, spacing: 10) {
            Text(table.title)
                .font(.subheadline.weight(.bold))
                .foregroundStyle(Color.sparkyText)

            ScrollView(.horizontal) {
                Grid(alignment: .leading, horizontalSpacing: 0, verticalSpacing: 0) {
                    GridRow {
                        ForEach(Array(table.columns.enumerated()), id: \.offset) { _, column in
                            Text(column)
                                .font(.caption.bold())
                                .foregroundStyle(Color.sparkyText)
                                .frame(minWidth: 130, alignment: .leading)
                                .padding(9)
                                .background(Color.sparkyAccentSoft)
                        }
                    }
                    ForEach(Array(table.rows.enumerated()), id: \.offset) { _, row in
                        GridRow {
                            ForEach(Array(row.enumerated()), id: \.offset) { _, value in
                                Text(value)
                                    .font(.caption.monospaced())
                                    .foregroundStyle(Color.sparkyMuted)
                                    .frame(minWidth: 130, alignment: .leading)
                                    .padding(9)
                                    .background(Color.sparkySurfaceRaised.opacity(0.55))
                            }
                        }
                    }
                }
                .clipShape(RoundedRectangle(cornerRadius: 10, style: .continuous))
            }
            .scrollIndicators(.hidden)

            if let note = table.note {
                Text(note)
                    .font(.caption2)
                    .foregroundStyle(Color.sparkyMuted)
            }

            HStack {
                VStack(alignment: .leading, spacing: 2) {
                    Text(table.source.publication)
                        .font(.caption.weight(.semibold))
                    Text(table.source.locator)
                        .font(.caption2)
                }
                .foregroundStyle(Color.sparkyMuted)
                Spacer()
                if let url = table.source.url {
                    Link(destination: url) {
                        Image(systemName: "arrow.up.right.square")
                    }
                    .accessibilityLabel("Open source")
                }
            }
        }
        .padding(13)
        .background(Color.sparkySurfaceRaised.opacity(0.65))
        .clipShape(RoundedRectangle(cornerRadius: 14, style: .continuous))
    }
}

private enum NavigatorFilter: String, CaseIterable, Identifiable {
    case all = "All"
    case unanswered = "Unanswered"
    case flagged = "Flagged"
    case wrong = "Wrong"

    var id: String { rawValue }
}

private struct QuestionNavigatorSheet: View {
    let exam: Exam
    let test: ExamTest
    let progressStore: ProgressStore
    @Binding var currentIndex: Int

    @Environment(\.dismiss) private var dismiss
    @State private var filter = NavigatorFilter.all

    private var progress: ExamVariantProgress {
        progressStore.progress(examID: exam.id, testID: test.id)
    }

    private var filteredQuestions: [(offset: Int, element: ExamQuestion)] {
        Array(test.questions.enumerated()).filter { _, question in
            switch filter {
            case .all: true
            case .unanswered: progress.answers[question.number] == nil
            case .flagged: progress.flaggedQuestions.contains(question.number)
            case .wrong:
                progress.submitted && progress.answers[question.number] != question.answer
            }
        }
    }

    var body: some View {
        NavigationStack {
            ZStack {
                SparkyBackdrop()
                ScrollView {
                    VStack(spacing: 16) {
                        Picker("Filter", selection: $filter) {
                            ForEach(NavigatorFilter.allCases) { Text($0.rawValue).tag($0) }
                        }
                        .pickerStyle(.segmented)
                        .padding(.horizontal)

                        if filteredQuestions.isEmpty {
                            ContentUnavailableView(
                                "Nothing here",
                                systemImage: "checkmark.circle",
                                description: Text("Choose another filter.")
                            )
                            .padding(.top, 40)
                        } else {
                            LazyVGrid(columns: Array(repeating: GridItem(.flexible(), spacing: 9), count: 5), spacing: 9) {
                                ForEach(filteredQuestions, id: \.element.number) { index, question in
                                    Button {
                                        currentIndex = index
                                        dismiss()
                                    } label: {
                                        ZStack(alignment: .topTrailing) {
                                            Text("\(question.number)")
                                                .font(.subheadline.bold().monospacedDigit())
                                                .frame(maxWidth: .infinity, minHeight: 48)
                                                .foregroundStyle(numberColor(question))
                                                .background(numberBackground(question))
                                                .clipShape(RoundedRectangle(cornerRadius: 12, style: .continuous))
                                                .overlay {
                                                    RoundedRectangle(cornerRadius: 12, style: .continuous)
                                                        .stroke(numberColor(question).opacity(0.35), lineWidth: 1)
                                                }
                                            if progress.flaggedQuestions.contains(question.number) {
                                                Image(systemName: "flag.fill")
                                                    .font(.system(size: 8))
                                                    .foregroundStyle(Color.sparkyAccent)
                                                    .padding(5)
                                            }
                                        }
                                    }
                                    .buttonStyle(.plain)
                                    .accessibilityLabel("Question \(question.number), \(statusText(question))")
                                }
                            }
                            .padding(.horizontal)
                        }
                    }
                    .padding(.vertical)
                }
            }
            .navigationTitle("Questions")
            .navigationBarTitleDisplayMode(.inline)
            .toolbar {
                ToolbarItem(placement: .confirmationAction) {
                    Button("Done") { dismiss() }
                }
            }
        }
    }

    private func numberColor(_ question: ExamQuestion) -> Color {
        if progress.submitted {
            return progress.answers[question.number] == question.answer ? .sparkySuccess : .sparkyDanger
        }
        if progress.answers[question.number] != nil { return .sparkyAccent }
        return .sparkyMuted
    }

    private func numberBackground(_ question: ExamQuestion) -> Color {
        if progress.submitted {
            return (progress.answers[question.number] == question.answer ? Color.sparkySuccess : Color.sparkyDanger).opacity(0.12)
        }
        return progress.answers[question.number] != nil ? .sparkyAccentSoft : .sparkySurface
    }

    private func statusText(_ question: ExamQuestion) -> String {
        if progress.submitted {
            return progress.answers[question.number] == question.answer ? "correct" : "incorrect"
        }
        return progress.answers[question.number] == nil ? "unanswered" : "answered"
    }
}
