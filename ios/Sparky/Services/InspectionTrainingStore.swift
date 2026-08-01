import Foundation
import Observation

@MainActor
@Observable
final class InspectionTrainingStore {
    nonisolated static let defaultStorageKey = "sparky.inspection-training.v1"

    private(set) var sessions: [String: InspectionTrainingSession]

    @ObservationIgnored private let defaults: UserDefaults
    @ObservationIgnored private let storageKey: String
    @ObservationIgnored private let labs: [InspectionTrainingLab]
    @ObservationIgnored private let labsByID: [String: InspectionTrainingLab]
    @ObservationIgnored private let now: () -> Date

    init(
        defaults: UserDefaults = .standard,
        storageKey: String = InspectionTrainingStore.defaultStorageKey,
        labs: [InspectionTrainingLab] = InspectionTrainingCatalog.labs,
        now: @escaping () -> Date = Date.init
    ) {
        self.defaults = defaults
        self.storageKey = storageKey
        self.labs = labs
        self.now = now
        labsByID = labs.reduce(into: [:]) { result, lab in
            result[lab.id] = lab
        }
        sessions = Self.loadSessions(
            defaults: defaults,
            storageKey: storageKey,
            labsByID: labsByID
        )
    }

    var completedLabIDs: Set<String> {
        Set(sessions.compactMap { labID, session in
            labsByID[labID] != nil && session.isCompleted ? labID : nil
        })
    }

    var completedLabCount: Int { completedLabIDs.count }

    var overallProgress: Double {
        let totalTaskCount = labs.reduce(0) { $0 + $1.tasks.count }
        guard totalTaskCount > 0 else { return 0 }
        let completedTaskCount = labs.reduce(into: 0) { count, lab in
            count += progress(for: lab).completedTasks
        }
        return Double(completedTaskCount) / Double(totalTaskCount)
    }

    func session(for labID: String) -> InspectionTrainingSession {
        guard let lab = labsByID[labID] else {
            return InspectionTrainingSession(labID: labID, startedAt: now())
        }
        if let session = sessions[labID] {
            return InspectionTrainingEngine.normalized(session, for: lab)
        }
        return InspectionTrainingSession(labID: labID, startedAt: now())
    }

    func session(for lab: InspectionTrainingLab) -> InspectionTrainingSession {
        session(for: lab.id)
    }

    func currentTask(for lab: InspectionTrainingLab) -> InspectionTrainingTask? {
        guard let catalogLab = labsByID[lab.id] else { return nil }
        return InspectionTrainingEngine.currentTask(
            in: session(for: catalogLab),
            for: catalogLab
        )
    }

    func progress(for lab: InspectionTrainingLab) -> InspectionTrainingProgress {
        guard let catalogLab = labsByID[lab.id] else {
            return InspectionTrainingProgress(
                completedTasks: 0,
                totalTasks: 0,
                earnedPoints: 0,
                maximumPoints: 0,
                isCompleted: false
            )
        }
        return InspectionTrainingEngine.progress(
            for: session(for: catalogLab),
            in: catalogLab
        )
    }

    func progress(forLabID labID: String) -> InspectionTrainingProgress? {
        guard let lab = labsByID[labID] else { return nil }
        return progress(for: lab)
    }

    func hasStarted(labID: String) -> Bool {
        sessions[labID] != nil
    }

    func save(_ session: InspectionTrainingSession) {
        guard let lab = labsByID[session.labID] else { return }
        sessions[lab.id] = InspectionTrainingEngine.normalized(session, for: lab)
        persist()
    }

    @discardableResult
    func submit(
        choiceID: String,
        for lab: InspectionTrainingLab
    ) -> InspectionTrainingEvaluation {
        guard let catalogLab = labsByID[lab.id] else {
            return InspectionTrainingEvaluation(
                taskID: "",
                choiceID: choiceID,
                kind: .invalidSelection,
                message: "This training lab is unavailable.",
                pointsAwarded: 0
            )
        }
        let transition = InspectionTrainingEngine.evaluate(
            choiceID: choiceID,
            in: session(for: catalogLab),
            for: catalogLab
        )
        sessions[catalogLab.id] = transition.session
        persist()
        return transition.evaluation
    }

    @discardableResult
    func submit(
        choiceID: String,
        labID: String
    ) -> InspectionTrainingEvaluation? {
        guard let lab = labsByID[labID] else { return nil }
        return submit(choiceID: choiceID, for: lab)
    }

    func advance(in lab: InspectionTrainingLab) {
        guard let catalogLab = labsByID[lab.id] else { return }
        sessions[catalogLab.id] = InspectionTrainingEngine.advance(
            session(for: catalogLab),
            in: catalogLab,
            now: now()
        )
        persist()
    }

    func advance(labID: String) {
        guard let lab = labsByID[labID] else { return }
        advance(in: lab)
    }

    func retry(in lab: InspectionTrainingLab) {
        guard let catalogLab = labsByID[lab.id] else { return }
        sessions[catalogLab.id] = InspectionTrainingEngine.retry(
            session(for: catalogLab),
            in: catalogLab
        )
        persist()
    }

    func retry(labID: String) {
        guard let lab = labsByID[labID] else { return }
        retry(in: lab)
    }

    func reset(labID: String) {
        guard sessions.removeValue(forKey: labID) != nil else { return }
        persist()
    }

    func reset(_ lab: InspectionTrainingLab) {
        reset(labID: lab.id)
    }

    func resetAll() {
        guard !sessions.isEmpty || defaults.data(forKey: storageKey) != nil else { return }
        sessions = [:]
        defaults.removeObject(forKey: storageKey)
    }

    private static func loadSessions(
        defaults: UserDefaults,
        storageKey: String,
        labsByID: [String: InspectionTrainingLab]
    ) -> [String: InspectionTrainingSession] {
        guard let data = defaults.data(forKey: storageKey),
              let payload = try? JSONDecoder().decode(PersistedInspectionTraining.self, from: data),
              payload.version == PersistedInspectionTraining.currentVersion else {
            return [:]
        }

        return payload.sessions.reduce(into: [:]) { result, element in
            let (labID, session) = element
            guard session.labID == labID, let lab = labsByID[labID] else { return }
            result[labID] = InspectionTrainingEngine.normalized(session, for: lab)
        }
    }

    private func persist() {
        guard !sessions.isEmpty else {
            defaults.removeObject(forKey: storageKey)
            return
        }
        let payload = PersistedInspectionTraining(sessions: sessions)
        guard let data = try? JSONEncoder().encode(payload) else { return }
        defaults.set(data, forKey: storageKey)
    }
}

private struct PersistedInspectionTraining: Codable {
    static let currentVersion = 1

    let version: Int
    let sessions: [String: InspectionTrainingSession]

    init(sessions: [String: InspectionTrainingSession]) {
        version = Self.currentVersion
        self.sessions = sessions
    }
}
