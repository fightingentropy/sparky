import SwiftUI

struct RootView: View {
    let contentStore: ContentStore
    let progressStore: ProgressStore
    let studyState: StudyStateStore
    let router: AppRouter

    @AppStorage(NavigationPreferences.storageKey)
    private var hiddenTabsStorage = NavigationPreferences.defaultStorageValue

    private var visibleTabs: [AppTab] {
        NavigationPreferences.visibleTabs(from: hiddenTabsStorage)
    }

    var body: some View {
        @Bindable var router = router

        TabView(selection: $router.selectedTab) {
            ForEach(visibleTabs) { tab in
                tabContent(tab)
                    .tag(tab)
                    .tabItem { Label(tab.title, systemImage: tab.systemImage) }
            }
        }
        .onChange(of: router.selectedTab) { _, _ in Haptics.selection() }
        .onChange(of: hiddenTabsStorage) { _, _ in selectVisibleTabIfNeeded() }
        .onAppear { selectVisibleTabIfNeeded() }
        .sheet(isPresented: $router.isPresentingSettings) {
            NavigationStack {
                SettingsView(
                    contentStore: contentStore,
                    studyState: studyState,
                    progressStore: progressStore
                )
                .toolbar {
                    ToolbarItem(placement: .topBarTrailing) {
                        Button("Done") { router.isPresentingSettings = false }
                            .fontWeight(.semibold)
                    }
                }
            }
        }
    }

    @ViewBuilder
    private func tabContent(_ tab: AppTab) -> some View {
        switch tab {
        case .tools:
            ToolsView(studyState: studyState)
        case .notes:
            NotesView()
        case .learn:
            LearnView()
        case .exams:
            ExamsView(contentStore: contentStore, progressStore: progressStore)
        case .more:
            MoreView(
                contentStore: contentStore,
                tutorials: contentStore.tutorials,
                studyState: studyState,
                progressStore: progressStore
            )
        }
    }

    private func selectVisibleTabIfNeeded() {
        guard !visibleTabs.contains(router.selectedTab) else { return }
        router.selectedTab = visibleTabs[0]
    }
}
