import Observation

enum AppTab: Hashable {
    case tools
    case notes
    case learn
    case exams
    case more
}

@MainActor
@Observable
final class AppRouter {
    var selectedTab: AppTab
    var pendingExamID: String?
    var pendingTestID: String?
    var pendingNoteID: String?

    init(selectedTab: AppTab = .tools) {
        self.selectedTab = selectedTab
    }

    func openExam(_ examID: String) {
        pendingExamID = examID
        pendingTestID = nil
        selectedTab = .exams
    }

    func openExam(_ examID: String, testID: String) {
        pendingExamID = examID
        pendingTestID = testID
        selectedTab = .exams
    }

    func openNote(_ noteID: String) {
        pendingNoteID = noteID
        selectedTab = .notes
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
