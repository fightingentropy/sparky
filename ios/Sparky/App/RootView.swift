import SwiftUI

struct RootView: View {
    let contentStore: ContentStore
    let progressStore: ProgressStore
    let studyState: StudyStateStore
    let router: AppRouter

    var body: some View {
        @Bindable var router = router

        TabView(selection: $router.selectedTab) {
            ToolsView(studyState: studyState)
                .tag(AppTab.tools)
                .tabItem { Label("Tools", systemImage: "wrench.adjustable") }

            NotesView()
                .tag(AppTab.notes)
                .tabItem { Label("Notes", systemImage: "doc.text") }

            LearnView()
                .tag(AppTab.learn)
                .tabItem { Label("Learn", systemImage: "graduationcap") }

            ExamsView(contentStore: contentStore, progressStore: progressStore)
                .tag(AppTab.exams)
                .tabItem { Label("Exams", systemImage: "checklist") }

            MoreView(
                contentStore: contentStore,
                tutorials: contentStore.tutorials,
                studyState: studyState,
                progressStore: progressStore
            )
                .tag(AppTab.more)
                .tabItem { Label("More", systemImage: "ellipsis.circle") }
        }
        .onChange(of: router.selectedTab) { _, _ in Haptics.selection() }
    }
}
