import SwiftUI

struct MoreView: View {
    let contentStore: ContentStore
    let tutorials: [Tutorial]
    let studyState: StudyStateStore
    let progressStore: ProgressStore

    var body: some View {
        NavigationStack {
            ZStack {
                SparkyBackdrop()

                ScrollView {
                    LazyVStack(spacing: 18) {
                        SparkyAccountSummaryCard()

                        NavigationLink {
                            TutorialsView(tutorials: tutorials)
                        } label: {
                            MoreDestinationCard(
                                eyebrow: "Watch & practise",
                                title: "Workplace tutorials",
                                detail: "\(tutorials.count) measured, practical demonstrations",
                                symbol: "play.rectangle.fill"
                            )
                        }
                        .buttonStyle(.plain)

                        NavigationLink {
                            CalculationHistoryView(studyState: studyState)
                        } label: {
                            MoreDestinationCard(
                                eyebrow: "Recent work",
                                title: "Calculation history",
                                detail: historyDetail,
                                symbol: "clock.arrow.circlepath"
                            )
                        }
                        .buttonStyle(.plain)

                        NavigationLink {
                            SettingsView(
                                contentStore: contentStore,
                                studyState: studyState,
                                progressStore: progressStore
                            )
                        } label: {
                            MoreDestinationCard(
                                eyebrow: "Your app",
                                title: "Settings",
                                detail: "Exam library, appearance and local study data",
                                symbol: "gearshape.fill"
                            )
                        }
                        .buttonStyle(.plain)

                        StudyNotice(
                            message: "Sparky is a study aid. Confirm current regulations, standards and assessment requirements with official sources."
                        )
                    }
                    .padding(.horizontal, SparkyLayout.pageInset)
                    .padding(.bottom, 28)
                }
                .scrollIndicators(.hidden)
            }
            .navigationTitle("More")
            .toolbar {
                ToolbarItem(placement: .topBarLeading) {
                    SparkyBrandMark(size: 31)
                }
                ToolbarItem(placement: .topBarTrailing) {
                    SparkyAccountToolbarItem()
                }
            }
        }
    }

    private var historyDetail: String {
        guard let latest = studyState.recentCalculations.first else {
            return "Your copied calculator results will appear here"
        }
        return "Latest: \(latest.tool) · \(latest.value)"
    }

}

private struct MoreDestinationCard: View {
    let eyebrow: String
    let title: String
    let detail: String
    let symbol: String

    var body: some View {
        HStack(spacing: 14) {
            Image(systemName: symbol)
                .font(.title2)
                .foregroundStyle(Color.sparkyAccent)
                .frame(width: 46, height: 46)
                .background(Color.sparkyAccentSoft)
                .clipShape(RoundedRectangle(cornerRadius: 14, style: .continuous))

            VStack(alignment: .leading, spacing: 4) {
                SparkyEyebrow(text: eyebrow)
                Text(title)
                    .font(.headline)
                    .foregroundStyle(Color.sparkyText)
                Text(detail)
                    .font(.caption)
                    .foregroundStyle(Color.sparkyMuted)
                    .lineLimit(2)
            }
            Spacer(minLength: 4)
            Image(systemName: "chevron.right")
                .font(.caption.bold())
                .foregroundStyle(Color.sparkyMuted)
        }
        .sparkyCard(padding: 15)
        .contentShape(Rectangle())
    }
}

private struct TutorialsView: View {
    let tutorials: [Tutorial]
    @State private var selectedCategory = "All"

    private var categories: [String] {
        ["All"] + Set(tutorials.map(\.category)).sorted()
    }

    private var filteredTutorials: [Tutorial] {
        selectedCategory == "All"
            ? tutorials
            : tutorials.filter { $0.category == selectedCategory }
    }

    var body: some View {
        ZStack {
            SparkyBackdrop()
            ScrollView {
                LazyVStack(spacing: 14) {
                    ScrollView(.horizontal) {
                        HStack(spacing: 8) {
                            ForEach(categories, id: \.self) { category in
                                Button {
                                    selectedCategory = category
                                    Haptics.selection()
                                } label: {
                                    TagChip(title: category, selected: selectedCategory == category)
                                }
                                .buttonStyle(.plain)
                            }
                        }
                        .padding(.horizontal, SparkyLayout.pageInset)
                    }
                    .scrollIndicators(.hidden)

                    ForEach(filteredTutorials) { tutorial in
                        TutorialCard(tutorial: tutorial)
                    }
                }
                .padding(.vertical, 8)
                .padding(.bottom, 24)
            }
        }
        .navigationTitle("Tutorials")
        .navigationBarTitleDisplayMode(.large)
    }
}

private struct TutorialCard: View {
    let tutorial: Tutorial

    var body: some View {
        VStack(alignment: .leading, spacing: 14) {
            HStack(alignment: .top, spacing: 12) {
                ZStack {
                    RoundedRectangle(cornerRadius: 14, style: .continuous)
                        .fill(Color.sparkyAccentSoft)
                    Image(systemName: "play.fill")
                        .font(.title3.bold())
                        .foregroundStyle(Color.sparkyAccent)
                }
                .frame(width: 54, height: 54)

                VStack(alignment: .leading, spacing: 5) {
                    SparkyEyebrow(text: tutorial.category)
                    Text(tutorial.title)
                        .font(.headline)
                        .foregroundStyle(Color.sparkyText)
                        .fixedSize(horizontal: false, vertical: true)
                    Text(tutorial.channel)
                        .font(.caption)
                        .foregroundStyle(Color.sparkyMuted)
                }
            }

            Text(tutorial.workplaceUse)
                .font(.subheadline)
                .foregroundStyle(Color.sparkyMuted)

            VStack(alignment: .leading, spacing: 7) {
                ForEach(tutorial.practiceFocus, id: \.self) { focus in
                    Label(focus, systemImage: "checkmark.circle")
                        .font(.caption)
                        .foregroundStyle(Color.sparkyText)
                }
            }

            Link(destination: tutorial.sourceURL) {
                Label("Watch on YouTube", systemImage: "arrow.up.right.square")
                    .frame(maxWidth: .infinity)
            }
            .buttonStyle(SparkyPrimaryButtonStyle())
        }
        .sparkyCard(padding: 16)
        .padding(.horizontal, SparkyLayout.pageInset)
    }
}

private struct CalculationHistoryView: View {
    let studyState: StudyStateStore

    var body: some View {
        ZStack {
            SparkyBackdrop()
            if studyState.recentCalculations.isEmpty {
                ContentUnavailableCard(
                    title: "No calculations yet",
                    message: "Copy a result from any tool and it will be kept here.",
                    symbol: "clock"
                )
            } else {
                List {
                    ForEach(studyState.recentCalculations) { item in
                        VStack(alignment: .leading, spacing: 4) {
                            Text(item.tool)
                                .font(.subheadline.weight(.semibold))
                                .foregroundStyle(Color.sparkyText)
                            Text(item.value)
                                .font(.title3.bold().monospacedDigit())
                                .foregroundStyle(Color.sparkyAccent)
                            Text(item.date, format: .relative(presentation: .named))
                                .font(.caption)
                                .foregroundStyle(Color.sparkyMuted)
                        }
                        .listRowBackground(Color.sparkySurface)
                    }
                }
                .scrollContentBackground(.hidden)
            }
        }
        .navigationTitle("History")
        .toolbar {
            if !studyState.recentCalculations.isEmpty {
                ToolbarItem(placement: .topBarTrailing) {
                    Button("Clear", role: .destructive) {
                        studyState.clearCalculationHistory()
                    }
                }
            }
        }
    }
}

struct SettingsView: View {
    @Environment(InspectionTrainingStore.self) private var inspectionTrainingStore

    let contentStore: ContentStore
    let studyState: StudyStateStore
    let progressStore: ProgressStore

    @AppStorage("appAppearance") private var appearance = AppAppearance.system.rawValue
    @AppStorage("hapticsEnabled") private var hapticsEnabled = true
    @AppStorage("comfortableText") private var comfortableText = false
    @AppStorage(NavigationPreferences.storageKey)
    private var hiddenTabsStorage = NavigationPreferences.defaultStorageValue
    @AppStorage(ExamLibraryPreferences.storageKey)
    private var hiddenExamIDsStorage = ExamLibraryPreferences.defaultStorageValue
    @State private var showingResetConfirmation = false
    @State private var showingExamResetConfirmation = false

    var body: some View {
        Form {
            Section {
                ForEach(AppTab.allCases) { tab in
                    Toggle(
                        tab.title,
                        isOn: tabVisibilityBinding(for: tab)
                    )
                    .disabled(isLastVisibleTab(tab))
                }
            } header: {
                Text("Navigation")
            } footer: {
                Text("Choose which pages appear in the bottom tab bar. Keep at least one page visible; Settings remains available from the profile menu.")
            }

            Section {
                ForEach(contentStore.catalog.exams) { exam in
                    Toggle(
                        exam.title,
                        isOn: examVisibilityBinding(for: exam.id)
                    )
                    .disabled(isLastVisibleExam(exam.id))
                }
            } header: {
                Text("Exam library")
            } footer: {
                Text("Choose which qualifications appear in Exams. Hidden categories keep their saved progress and can be shown again here.")
            }

            Section("Appearance") {
                Picker("Theme", selection: $appearance) {
                    ForEach(AppAppearance.allCases) { option in
                        Text(option.title).tag(option.rawValue)
                    }
                }
                Toggle("Comfortable text spacing", isOn: $comfortableText)
            }

            Section("Feedback") {
                Toggle("Haptics", isOn: $hapticsEnabled)
            }

            Section("Study data") {
                LabeledContent("Saved notes", value: "\(studyState.savedNoteIDs.count)")
                LabeledContent("Completed guides", value: "\(studyState.completedGuideIDs.count)")
                LabeledContent("Training labs complete", value: "\(inspectionTrainingStore.completedLabCount)")
                LabeledContent("Calculations", value: "\(studyState.recentCalculations.count)")
                LabeledContent("Exam banks in progress", value: "\(progressStore.exams.count)")
                Button("Reset study and training progress", role: .destructive) {
                    showingResetConfirmation = true
                }
                Button("Reset all exam attempts", role: .destructive) {
                    showingExamResetConfirmation = true
                }
            }

            Section("About") {
                LabeledContent("Version", value: appVersion)
                Link("Open Sparky on the web", destination: URL(string: "https://electrics.pages.dev")!)
                Text("Made for UK electrical learning and site work.")
                    .font(.caption)
                    .foregroundStyle(Color.sparkyMuted)
            }
        }
        .scrollContentBackground(.hidden)
        .background(SparkyBackdrop())
        .navigationTitle("Settings")
        .confirmationDialog(
            "Reset local study data?",
            isPresented: $showingResetConfirmation,
            titleVisibility: .visible
        ) {
            Button("Reset data", role: .destructive) {
                studyState.resetStudyProgress()
                inspectionTrainingStore.resetAll()
            }
        } message: {
            Text("This removes saved notes, completed guides, calculation history and inspection-training progress from this device. Exam attempts are kept.")
        }
        .confirmationDialog(
            "Reset every exam attempt?",
            isPresented: $showingExamResetConfirmation,
            titleVisibility: .visible
        ) {
            Button("Reset exam attempts", role: .destructive) {
                progressStore.resetAll()
            }
        } message: {
            Text("This removes every answer, flag and submitted result stored on this device.")
        }
    }

    private var hiddenExamIDs: Set<String> {
        ExamLibraryPreferences.hiddenExamIDs(
            from: hiddenExamIDsStorage,
            validExamIDs: Set(contentStore.catalog.exams.map(\.id))
        )
    }

    private var hiddenTabs: Set<AppTab> {
        NavigationPreferences.hiddenTabs(from: hiddenTabsStorage)
    }

    private var visibleTabCount: Int {
        AppTab.allCases.count - hiddenTabs.count
    }

    private func tabVisibilityBinding(for tab: AppTab) -> Binding<Bool> {
        Binding(
            get: { !hiddenTabs.contains(tab) },
            set: { isVisible in
                var updated = hiddenTabs
                if isVisible {
                    updated.remove(tab)
                } else if visibleTabCount > 1 {
                    updated.insert(tab)
                }
                hiddenTabsStorage = NavigationPreferences.storageValue(for: updated)
                Haptics.selection()
            }
        )
    }

    private func isLastVisibleTab(_ tab: AppTab) -> Bool {
        !hiddenTabs.contains(tab) && visibleTabCount <= 1
    }

    private var visibleExamCount: Int {
        contentStore.catalog.exams.count - hiddenExamIDs.count
    }

    private func examVisibilityBinding(for examID: String) -> Binding<Bool> {
        Binding(
            get: { !hiddenExamIDs.contains(examID) },
            set: { isVisible in
                var updated = hiddenExamIDs
                if isVisible {
                    updated.remove(examID)
                } else if visibleExamCount > 1 {
                    updated.insert(examID)
                }
                hiddenExamIDsStorage = ExamLibraryPreferences.storageValue(
                    for: updated
                )
                Haptics.selection()
            }
        )
    }

    private func isLastVisibleExam(_ examID: String) -> Bool {
        !hiddenExamIDs.contains(examID) && visibleExamCount <= 1
    }

    private var appVersion: String {
        let version = Bundle.main.object(forInfoDictionaryKey: "CFBundleShortVersionString") as? String ?? "1.0"
        let build = Bundle.main.object(forInfoDictionaryKey: "CFBundleVersion") as? String ?? "1"
        return "\(version) (\(build))"
    }
}
