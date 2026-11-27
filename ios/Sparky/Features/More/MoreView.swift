import SwiftUI

struct MoreView: View {
    let contentStore: ContentStore
    let studyState: StudyStateStore
    let progressStore: ProgressStore

    var body: some View {
        NavigationStack {
            ZStack {
                SparkyBackdrop()

                ScrollView {
                    LazyVStack(spacing: 12) {
                        SparkyPageHeader("More", subtitle: "Account and settings")
                        SparkyAccountSummaryCard()

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
                    }
                    .padding(.horizontal, SparkyLayout.pageInset)
                    .padding(.bottom, 28)
                }
                .scrollIndicators(.hidden)
            }
            .navigationTitle("More")
            .toolbar(.hidden, for: .navigationBar)
        }
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
                .foregroundStyle(Color.sparkyAccentText)
                .frame(width: 46, height: 46)
                .background(Color.sparkyAccentSoft)
                .clipShape(RoundedRectangle(cornerRadius: 14, style: .continuous))

            VStack(alignment: .leading, spacing: 4) {
                SparkyEyebrow(text: eyebrow)
                Text(title)
                    .font(.sparky(.headline))
                    .foregroundStyle(Color.sparkyText)
                Text(detail)
                    .font(.sparky(.caption))
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

struct SettingsView: View {
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
    @State private var showingLearnResetConfirmation = false
    @Environment(LearnProgressStore.self) private var learnProgress

    var body: some View {
        Form {
            Group {
            Section {
                ForEach(AppTab.allCases) { tab in
                    Toggle(
                        tab.title,
                        isOn: tabVisibilityBinding(for: tab)
                    )
                    .disabled(isLastVisibleTab(tab))
                }
            } header: {
                SparkyEyebrow(text: "Navigation")
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
                SparkyEyebrow(text: "Exam library")
            } footer: {
                Text("Choose which qualifications appear in Exams. Hidden categories keep their saved progress and can be shown again here.")
            }

            Section {
                Picker("Theme", selection: $appearance) {
                    ForEach(AppAppearance.allCases) { option in
                        Text(option.title).tag(option.rawValue)
                    }
                }
                Toggle("Comfortable text spacing", isOn: $comfortableText)
            } header: {
                SparkyEyebrow(text: "Appearance")
            }

            Section {
                Toggle("Haptics", isOn: $hapticsEnabled)
            } header: {
                SparkyEyebrow(text: "Feedback")
            }

            Section {
                Button("Clear saved notes", role: .destructive) {
                    showingResetConfirmation = true
                }
                Button("Reset Learn progress", role: .destructive) {
                    showingLearnResetConfirmation = true
                }
                .disabled(learnProgress.statuses.isEmpty)
                Button("Reset all exam attempts", role: .destructive) {
                    showingExamResetConfirmation = true
                }
            } header: {
                SparkyEyebrow(text: "Study data")
            }

            Section {
                Link("Privacy policy", destination: URL(string: "https://electrics.pages.dev/privacy")!)
                Link("Help and support", destination: URL(string: "https://electrics.pages.dev/support")!)
                Link("Delete account", destination: URL(string: "https://electrics.pages.dev/delete-account")!)
                    .foregroundStyle(Color.sparkyDanger)
                    .accessibilityHint("Opens Sparky's secure account deletion page")
            } header: {
                SparkyEyebrow(text: "Account and support")
            }

            Section {
                LabeledContent("Version", value: appVersion)
                Link("Open Sparky on the web", destination: URL(string: "https://electrics.pages.dev")!)
                Text("Made for UK electrical learning and site work.")
                    .font(.sparky(.caption))
                    .foregroundStyle(Color.sparkyMuted)
            } header: {
                SparkyEyebrow(text: "About")
            }
            }
            .listRowBackground(Color.sparkySurface)
        }
        .scrollContentBackground(.hidden)
        .background(SparkyBackdrop())
        .tint(Color.sparkyText)
        .navigationTitle("Settings")
        .confirmationDialog(
            "Clear saved notes?",
            isPresented: $showingResetConfirmation,
            titleVisibility: .visible
        ) {
            Button("Clear saved notes", role: .destructive) {
                studyState.resetStudyProgress()
            }
        } message: {
            Text("This removes every saved note from this device. Exam attempts are kept.")
        }
        .confirmationDialog(
            "Reset your Learn progress?",
            isPresented: $showingLearnResetConfirmation,
            titleVisibility: .visible
        ) {
            Button("Reset progress", role: .destructive) {
                learnProgress.reset()
            }
        } message: {
            Text("This clears every Learning and Done mark on the roadmap on this device. Notes and exam attempts are kept.")
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
        Bundle.main.object(forInfoDictionaryKey: "CFBundleShortVersionString") as? String ?? "1.0"
    }
}
