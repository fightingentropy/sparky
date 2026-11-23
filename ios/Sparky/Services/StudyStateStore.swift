import Foundation
import Observation

@MainActor
@Observable
final class StudyStateStore {
    private enum Keys {
        static let savedNotes = "savedNoteIDs"
        /// Written by removed features (study guides, calculation history).
        static let retired = ["completedGuideIDs", "lastOpenedGuideID", "recentCalculations"]
    }

    private let defaults: UserDefaults

    private(set) var savedNoteIDs: Set<String>

    init(defaults: UserDefaults = .standard) {
        self.defaults = defaults
        savedNoteIDs = Set(defaults.stringArray(forKey: Keys.savedNotes) ?? [])
        // Calculation history is gone; drop what earlier versions stored.
        defaults.removeObject(forKey: "recentCalculations")
    }

    func isNoteSaved(_ id: String) -> Bool {
        savedNoteIDs.contains(id)
    }

    func toggleSavedNote(_ id: String) {
        if savedNoteIDs.contains(id) {
            savedNoteIDs.remove(id)
        } else {
            savedNoteIDs.insert(id)
        }
        defaults.set(savedNoteIDs.sorted(), forKey: Keys.savedNotes)
    }

    func resetStudyProgress() {
        savedNoteIDs = []
        defaults.removeObject(forKey: Keys.savedNotes)
        Keys.retired.forEach(defaults.removeObject(forKey:))
    }
}
