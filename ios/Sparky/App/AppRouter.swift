import Foundation
import Observation

enum AppTab: String, CaseIterable, Hashable, Identifiable {
    case tools
    case notes
    case learn
    case exams
    case more

    var id: Self { self }

    var title: String {
        switch self {
        case .tools: "Tools"
        case .notes: "Notes"
        case .learn: "Learn"
        case .exams: "Exams"
        case .more: "More"
        }
    }

    var systemImage: String {
        switch self {
        case .tools: "wrench.adjustable"
        case .notes: "doc.text"
        case .learn: "graduationcap"
        case .exams: "checklist"
        case .more: "ellipsis.circle"
        }
    }
}

@MainActor
@Observable
final class AppRouter {
    var selectedTab: AppTab
    var pendingExamID: String?
    var pendingTestID: String?
    var pendingNoteID: String?
    var isPresentingSettings = false

    private let defaults: UserDefaults

    init(selectedTab: AppTab = .tools, defaults: UserDefaults = .standard) {
        self.selectedTab = selectedTab
        self.defaults = defaults
    }

    /// Deep links target a specific tab. If the user hid it in Settings, show it
    /// again (the preference is reversible in Settings) so the link has somewhere
    /// to land instead of silently doing nothing.
    private func select(_ tab: AppTab) {
        let stored = defaults.string(forKey: NavigationPreferences.storageKey)
            ?? NavigationPreferences.defaultStorageValue
        let revealed = NavigationPreferences.storageValue(revealing: tab, in: stored)
        if revealed != NavigationPreferences.storageValue(for: NavigationPreferences.hiddenTabs(from: stored)) {
            defaults.set(revealed, forKey: NavigationPreferences.storageKey)
        }
        selectedTab = tab
    }

    func openExam(_ examID: String) {
        pendingExamID = examID
        pendingTestID = nil
        select(.exams)
    }

    func openExam(_ examID: String, testID: String) {
        pendingExamID = examID
        pendingTestID = testID
        select(.exams)
    }

    func openNote(_ noteID: String) {
        pendingNoteID = noteID
        select(.notes)
    }

    func clearPendingExam(_ examID: String) {
        if pendingExamID == examID {
            pendingExamID = nil
        }
    }

    func clearPendingTest(_ testID: String) {
        if pendingTestID == testID {
            pendingTestID = nil
        }
    }

    func clearPendingNote(_ noteID: String) {
        if pendingNoteID == noteID {
            pendingNoteID = nil
        }
    }
}
