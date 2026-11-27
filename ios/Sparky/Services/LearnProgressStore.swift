import Foundation
import Observation

/// The learner's status for each Learn roadmap topic and subtopic, kept on this device.
/// A node with no entry is "not started"; exam nodes never get one.
@MainActor
@Observable
final class LearnProgressStore {
    static let storageKey = "sparky.learn-roadmap-progress.v1"

    private let defaults: UserDefaults

    private(set) var statuses: [String: LearnStatus]

    init(defaults: UserDefaults = .standard) {
        self.defaults = defaults
        // Anything that isn't a [String: String] of known statuses is ignored entry by entry,
        // so one bad value (or a future status) can't wipe the rest.
        let stored = defaults.dictionary(forKey: Self.storageKey) ?? [:]
        statuses = stored.reduce(into: [:]) { result, entry in
            if let raw = entry.value as? String, let status = LearnStatus(rawValue: raw) {
                result[entry.key] = status
            }
        }
    }

    func status(for nodeID: String) -> LearnStatus? {
        statuses[nodeID]
    }

    /// Sets a status, or clears it (back to "not started") when `status` is nil.
    func setStatus(_ status: LearnStatus?, for nodeID: String) {
        guard statuses[nodeID] != status else { return }
        statuses[nodeID] = status
        persist()
    }

    func clearStatus(for nodeID: String) {
        setStatus(nil, for: nodeID)
    }

    func reset() {
        statuses = [:]
        defaults.removeObject(forKey: Self.storageKey)
    }

    /// How many of `nodeIDs` are done. Ids the roadmap no longer has are simply not counted.
    func doneCount<S: Sequence>(in nodeIDs: S) -> Int where S.Element == String {
        nodeIDs.reduce(0) { $0 + (statuses[$1] == .done ? 1 : 0) }
    }

    func learningCount<S: Sequence>(in nodeIDs: S) -> Int where S.Element == String {
        nodeIDs.reduce(0) { $0 + (statuses[$1] == .learning ? 1 : 0) }
    }

    /// Where to pick up: the first node marked "learning", otherwise the first that isn't done,
    /// both in roadmap order. Nil when everything is done.
    func nextNodeID(in orderedNodeIDs: [String]) -> String? {
        orderedNodeIDs.first { statuses[$0] == .learning }
            ?? orderedNodeIDs.first { statuses[$0] != .done }
    }

    private func persist() {
        if statuses.isEmpty {
            defaults.removeObject(forKey: Self.storageKey)
        } else {
            defaults.set(statuses.mapValues(\.rawValue), forKey: Self.storageKey)
        }
    }
}
