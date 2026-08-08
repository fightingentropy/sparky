import SwiftUI

@main
@MainActor
struct SparkyApp: App {
    @UIApplicationDelegateAdaptor(SparkyAppDelegate.self) private var appDelegate

    @State private var contentStore: ContentStore?
    @State private var contentError: String?
    @State private var progressStore = ProgressStore()
    @State private var studyState = StudyStateStore()
    @State private var inspectionTrainingStore = InspectionTrainingStore()
    @State private var router = AppRouter(selectedTab: Self.initialTab)
    @State private var authStore = AuthStore()
    @State private var progressSyncController = ProgressSyncController()
    @State private var didRestoreAccount = false

    @AppStorage("appAppearance") private var appearance = AppAppearance.system.rawValue
    @AppStorage("comfortableText") private var comfortableText = false
    @Environment(\.scenePhase) private var scenePhase

    var body: some Scene {
        WindowGroup {
            ZStack {
                SparkyBackdrop()

                if let contentStore {
                    RootView(
                        contentStore: contentStore,
                        progressStore: progressStore,
                        studyState: studyState,
                        router: router
                    )
                    .environment(contentStore)
                    .environment(progressStore)
                    .environment(studyState)
                    .environment(inspectionTrainingStore)
                    .environment(router)
                    .environment(authStore)
                    .environment(progressSyncController)
                } else if let contentError {
                    ContentUnavailableCard(
                        title: "Sparky couldn't start",
                        message: contentError,
                        symbol: "bolt.slash"
                    )
                } else {
                    LoadingStateView(title: "Starting Sparky", message: "Loading your offline study bank…")
                }
            }
            .tint(Color.sparkyAccent)
            .preferredColorScheme(AppAppearance(rawValue: appearance)?.colorScheme)
            .lineSpacing(comfortableText ? 2 : 0)
            .task {
                loadContentIfNeeded()
                await restoreAccountIfNeeded()
            }
            .onChange(of: authStore.user?.id) { _, _ in
                reconcileAccountAndSync()
            }
            .onChange(of: progressStore.localMutationRevision) { _, _ in
                scheduleProgressSync()
            }
            .onChange(of: scenePhase) { _, newPhase in
                guard newPhase == .active else { return }
                scheduleProgressSync(immediately: true)
            }
        }
    }

    private func restoreAccountIfNeeded() async {
        guard !didRestoreAccount else { return }
        didRestoreAccount = true
        await authStore.restoreSession()
        reconcileAccountAndSync()
    }

    private func reconcileAccountAndSync() {
        guard let contentStore else { return }

        if let user = authStore.user {
            progressStore.bind(toAccountID: user.id)
            progressSyncController.accountBecameAvailable()
            progressSyncController.scheduleSync(
                store: progressStore,
                catalog: contentStore.catalog,
                authStore: authStore,
                delayNanoseconds: 0
            )
            return
        }

        // A temporary offline restore keeps the Keychain token and the last
        // account's local cache. Only an actual logout/rejected token moves the
        // app back to its isolated anonymous progress namespace.
        let hasStoredSession = (try? authStore.bearerToken()) != nil
        if !hasStoredSession {
            progressStore.bind(toAccountID: nil)
            progressSyncController.signedOut()
        }
    }

    private func scheduleProgressSync(immediately: Bool = false) {
        guard let contentStore, authStore.user != nil else { return }
        progressSyncController.scheduleSync(
            store: progressStore,
            catalog: contentStore.catalog,
            authStore: authStore,
            delayNanoseconds: immediately ? 0 : 650_000_000
        )
    }

    private func loadContentIfNeeded() {
        guard contentStore == nil, contentError == nil else { return }
        do {
            let loadedContent = try ContentStore()
            contentStore = loadedContent
#if DEBUG
            resetPreviewTestIfNeeded()
            prepareSubmittedPreviewIfNeeded(content: loadedContent)
#endif
            if let examID = Self.previewExamID {
                if let testID = Self.previewTestID {
                    router.openExam(examID, testID: testID)
                } else {
                    router.openExam(examID)
                }
            }
        } catch {
            contentError = error.localizedDescription
        }
    }

#if DEBUG
    private func resetPreviewTestIfNeeded() {
        guard
            Self.previewReset,
            let examID = Self.previewExamID,
            let testID = Self.previewTestID
        else { return }

        progressStore.reset(examID: examID, testID: testID)
    }

    private func prepareSubmittedPreviewIfNeeded(content: ContentStore) {
        guard
            Self.previewSubmitted,
            let examID = Self.previewExamID,
            let testID = Self.previewTestID,
            let exam = try? content.loadExam(id: examID),
            let test = exam.test(id: testID),
            let question = test.questions.first,
            let wrongChoice = ExamChoice.allCases.first(where: { $0 != question.answer })
        else { return }

        progressStore.reset(examID: examID, testID: testID)
        progressStore.answer(
            wrongChoice,
            for: question.number,
            examID: examID,
            testID: testID
        )
        progressStore.submit(examID: examID, testID: testID)
    }
#endif

    private static var initialTab: AppTab {
#if DEBUG
        if let previewTab = ProcessInfo.processInfo.environment["SPARKY_PREVIEW_TAB"] {
            switch previewTab.lowercased() {
            case "notes": return .notes
            case "learn": return .learn
            case "exams": return .exams
            case "more": return .more
            default: return .tools
            }
        }
#endif

        let arguments = ProcessInfo.processInfo.arguments
        if let marker = arguments.firstIndex(of: "-sparkyPreviewTab"),
           arguments.indices.contains(marker + 1) {
            switch arguments[marker + 1].lowercased() {
            case "notes": return .notes
            case "learn": return .learn
            case "exams": return .exams
            case "more": return .more
            default: return .tools
            }
        }

        let stored = UserDefaults.standard.string(
            forKey: NavigationPreferences.storageKey
        ) ?? NavigationPreferences.defaultStorageValue
        return NavigationPreferences.preferredTab(from: stored)
    }

    private static var previewExamID: String? {
        let arguments = ProcessInfo.processInfo.arguments
        guard let marker = arguments.firstIndex(of: "-sparkyPreviewExam"),
              arguments.indices.contains(marker + 1) else { return nil }
        return arguments[marker + 1]
    }

    private static var previewTestID: String? {
        let arguments = ProcessInfo.processInfo.arguments
        guard let marker = arguments.firstIndex(of: "-sparkyPreviewTest"),
              arguments.indices.contains(marker + 1) else { return nil }
        return arguments[marker + 1]
    }

#if DEBUG
    private static var previewSubmitted: Bool {
        ProcessInfo.processInfo.arguments.contains("-sparkyPreviewSubmitted")
    }

    private static var previewReset: Bool {
        ProcessInfo.processInfo.arguments.contains("-sparkyPreviewReset")
    }
#endif
}
