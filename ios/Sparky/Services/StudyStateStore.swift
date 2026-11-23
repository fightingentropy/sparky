import Foundation
import Observation

@MainActor
@Observable
final class StudyStateStore {
    private enum Keys {
        static let savedNotes = "savedNoteIDs"
        /// Written by the removed study-guide feature; only cleared on reset now.
        static let retiredGuideKeys = ["completedGuideIDs", "lastOpenedGuideID"]
        static let recentCalculations = "recentCalculations"
    }

    private let defaults: UserDefaults

    private(set) var savedNoteIDs: Set<String>
    private(set) var recentCalculations: [CalculationHistoryItem]

    init(defaults: UserDefaults = .standard) {
        self.defaults = defaults
        savedNoteIDs = Set(defaults.stringArray(forKey: Keys.savedNotes) ?? [])

        if let data = defaults.data(forKey: Keys.recentCalculations),
           let decoded = try? JSONDecoder().decode([CalculationHistoryItem].self, from: data) {
            recentCalculations = decoded
        } else {
            recentCalculations = []
        }
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

    func recordCalculation(tool: String, value: String) {
        guard !value.contains("--") else { return }
        recentCalculations.removeAll { $0.tool == tool && $0.value == value }
        recentCalculations.insert(
            CalculationHistoryItem(id: UUID(), tool: tool, value: value, date: .now),
            at: 0
        )
        recentCalculations = Array(recentCalculations.prefix(20))
        persistHistory()
    }

    func clearCalculationHistory() {
        recentCalculations = []
        persistHistory()
    }

    func resetStudyProgress() {
        savedNoteIDs = []
        recentCalculations = []
        defaults.removeObject(forKey: Keys.savedNotes)
        Keys.retiredGuideKeys.forEach(defaults.removeObject(forKey:))
        defaults.removeObject(forKey: Keys.recentCalculations)
    }

    private func persistHistory() {
        if let data = try? JSONEncoder().encode(recentCalculations) {
            defaults.set(data, forKey: Keys.recentCalculations)
        }
    }
}

struct CalculationHistoryItem: Identifiable, Codable, Hashable {
    let id: UUID
    let tool: String
    let value: String
    let date: Date
}
