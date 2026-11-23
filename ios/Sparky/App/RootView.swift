import SwiftUI

struct RootView: View {
    let contentStore: ContentStore
    let progressStore: ProgressStore
    let studyState: StudyStateStore
    let router: AppRouter

    @AppStorage(NavigationPreferences.storageKey)
    private var hiddenTabsStorage = NavigationPreferences.defaultStorageValue
    @Environment(KeyboardVisibility.self) private var keyboard

    private var visibleTabs: [AppTab] {
        NavigationPreferences.visibleTabs(from: hiddenTabsStorage)
    }

    var body: some View {
        @Bindable var router = router

        // Every tab stays alive so navigation and scroll state survive switching (as in Rota).
        ZStack {
            ForEach(visibleTabs) { tab in
                let isSelected = router.selectedTab == tab
                tabContent(tab)
                    .environment(\.sparkyCurrentTab, tab)
                    .id(router.tabResetTokens[tab, default: 0])
                    // Hidden pages stay alive but shouldn't compete for status-bar scroll-to-top.
                    .scrollDisabled(!isSelected)
                    .opacity(isSelected ? 1 : 0)
                    .allowsHitTesting(isSelected)
                    .accessibilityHidden(!isSelected)
            }
        }
        .background(SparkyBackdrop())
        .safeAreaInset(edge: .bottom, spacing: 0) {
            if showsTabBar {
                SparkyTabBar(tabs: visibleTabs, selection: $router.selectedTab) { tab in
                    Haptics.selection()
                    router.reselect(tab)
                }
                    .transition(.move(edge: .bottom).combined(with: .opacity))
            }
        }
        .animation(.snappy(duration: 0.3), value: showsTabBar)
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

    private var showsTabBar: Bool {
        !keyboard.isVisible && !router.isTabBarHidden(for: router.selectedTab)
    }

    @ViewBuilder
    private func tabContent(_ tab: AppTab) -> some View {
        switch tab {
        case .tools:
            ToolsView()
        case .notes:
            NotesView()
        case .exams:
            ExamsView(contentStore: contentStore, progressStore: progressStore)
        case .more:
            MoreView(
                contentStore: contentStore,
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
