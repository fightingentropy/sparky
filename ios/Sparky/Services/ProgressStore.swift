import Foundation
import Observation

struct ExamVariantProgress: Codable, Hashable, Sendable {
    var answers: [Int: ExamChoice] = [:]
    var submitted = false
    var currentQuestion = 0
    var flaggedQuestions: Set<Int> = []
}

struct ExamProgress: Codable, Hashable, Sendable {
    var variants: [String: ExamVariantProgress] = [:]
}

struct ExamScore: Equatable, Hashable, Sendable {
    let answered: Int
    let correct: Int
    let total: Int
    let passMark: Int
    let percentage: Double
    let passed: Bool

    var unanswered: Int { max(0, total - answered) }
}

@MainActor
@Observable
final class ProgressStore {
    nonisolated static let defaultStorageKey = "sparky.exam-progress.v1"

    private(set) var exams: [String: ExamProgress]
    private(set) var syncMetadata: [String: [String: VariantSyncMetadata]]
    private(set) var boundAccountID: String?
    /// Increments only for user-originated, server-syncable changes. Views can
    /// observe this value to debounce a sync without loops from remote imports.
    private(set) var localMutationRevision = 0

    @ObservationIgnored private let defaults: UserDefaults
    @ObservationIgnored private let baseStorageKey: String
    @ObservationIgnored private let ownerStorageKey: String
    @ObservationIgnored private var storageKey: String
    @ObservationIgnored private var syncStorageKey: String
    @ObservationIgnored private let now: () -> Date

    init(
        defaults: UserDefaults = .standard,
        storageKey: String = ProgressStore.defaultStorageKey,
        now: @escaping () -> Date = Date.init
    ) {
        self.defaults = defaults
        baseStorageKey = storageKey
        ownerStorageKey = "\(storageKey).active-account.v1"
        self.now = now
        let storedAccountID = defaults.string(forKey: "\(storageKey).active-account.v1")?
            .trimmingCharacters(in: .whitespacesAndNewlines)
        let restoredAccountID = storedAccountID?.isEmpty == false ? storedAccountID : nil
        boundAccountID = restoredAccountID
        let resolvedStorageKey = Self.storageKey(base: storageKey, accountID: restoredAccountID)
        self.storageKey = resolvedStorageKey
        syncStorageKey = "\(resolvedStorageKey).sync-metadata.v1"

        exams = Self.loadProgress(defaults: defaults, key: resolvedStorageKey)
        syncMetadata = Self.loadSyncMetadata(defaults: defaults, key: syncStorageKey)

        // Data written by the original native build has no sync metadata. Mark
        // every meaningful legacy slot dirty so the first authenticated merge
        // preserves and uploads it instead of silently treating it as stale.
        var migratedLegacyProgress = false
        for (examID, exam) in exams {
            for (testID, progress) in exam.variants
            where syncMetadata[examID]?[testID] == nil
                && (!progress.answers.isEmpty || progress.submitted) {
                syncMetadata[examID, default: [:]][testID] = VariantSyncMetadata(
                    modifiedAt: .distantPast,
                    isDirty: true,
                    isDeleted: false
                )
                migratedLegacyProgress = true
            }
        }
        if migratedLegacyProgress {
            persistSyncMetadata()
        }
    }

    /// Selects the persistence namespace for an authenticated account. The
    /// anonymous namespace is adopted (moved, not copied) when an account is
    /// first bound, while direct account switches load an isolated cache.
    func bind(toAccountID rawAccountID: String?) {
        let trimmed = rawAccountID?.trimmingCharacters(in: .whitespacesAndNewlines)
        let accountID = (trimmed?.isEmpty == false) ? trimmed : nil
        guard accountID != boundAccountID else { return }

        let previousAccountID = boundAccountID
        let anonymousExams = previousAccountID == nil ? exams : [:]

        let targetStorageKey = storageKey(forAccountID: accountID)
        let targetSyncStorageKey = "\(targetStorageKey).sync-metadata.v1"
        var targetExams = Self.loadProgress(defaults: defaults, key: targetStorageKey)
        var targetMetadata = Self.loadSyncMetadata(defaults: defaults, key: targetSyncStorageKey)

        // Anonymous progress is eligible for adoption only when moving from
        // anonymous -> authenticated. A -> B never passes through this branch.
        if previousAccountID == nil, accountID != nil, !anonymousExams.isEmpty {
            for (examID, anonymousExam) in anonymousExams {
                var targetExam = targetExams[examID] ?? ExamProgress()
                for (testID, anonymousProgress) in anonymousExam.variants {
                    if var existing = targetExam.variants[testID] {
                        // Known account data wins same-question collisions;
                        // anonymous work fills only missing progress.
                        for (number, choice) in anonymousProgress.answers
                        where existing.answers[number] == nil {
                            existing.answers[number] = choice
                        }
                        existing.submitted = existing.submitted || anonymousProgress.submitted
                        existing.flaggedQuestions.formUnion(anonymousProgress.flaggedQuestions)
                        existing.currentQuestion = max(existing.currentQuestion, anonymousProgress.currentQuestion)
                        targetExam.variants[testID] = existing
                    } else {
                        targetExam.variants[testID] = anonymousProgress
                    }
                    targetMetadata[examID, default: [:]][testID] = VariantSyncMetadata(
                        modifiedAt: now(),
                        isDirty: true,
                        isDeleted: false
                    )
                }
                if !targetExam.variants.isEmpty {
                    targetExams[examID] = targetExam
                }
            }
        }

        boundAccountID = accountID
        storageKey = targetStorageKey
        syncStorageKey = targetSyncStorageKey
        exams = targetExams
        syncMetadata = targetMetadata
        localMutationRevision &+= 1
        persist()
        persistSyncMetadata()
        if let accountID {
            defaults.set(accountID, forKey: ownerStorageKey)
        } else {
            defaults.removeObject(forKey: ownerStorageKey)
        }

        if previousAccountID == nil, accountID != nil {
            // Moving rather than copying prevents a later account from
            // adopting the same anonymous/legacy progress.
            defaults.removeObject(forKey: baseStorageKey)
            defaults.removeObject(forKey: "\(baseStorageKey).sync-metadata.v1")
        }
    }

    func progress(examID: String, testID: String) -> ExamVariantProgress {
        exams[examID]?.variants[testID] ?? ExamVariantProgress()
    }

    func progress(examID: String, variantID: String) -> ExamVariantProgress {
        progress(examID: examID, testID: variantID)
    }

    func selectedAnswer(
        for questionNumber: Int,
        examID: String,
        testID: String
    ) -> ExamChoice? {
        progress(examID: examID, testID: testID).answers[questionNumber]
    }

    func isFlagged(
        _ questionNumber: Int,
        examID: String,
        testID: String
    ) -> Bool {
        progress(examID: examID, testID: testID).flaggedQuestions.contains(questionNumber)
    }

    func answer(
        _ choice: ExamChoice,
        for questionNumber: Int,
        examID: String,
        testID: String
    ) {
        guard questionNumber > 0 else { return }
        update(examID: examID, testID: testID, syncRelevant: true) { progress in
            guard !progress.submitted else { return }
            progress.answers[questionNumber] = choice
        }
    }

    func clearAnswer(
        for questionNumber: Int,
        examID: String,
        testID: String
    ) {
        update(examID: examID, testID: testID, syncRelevant: true) { progress in
            guard !progress.submitted else { return }
            progress.answers.removeValue(forKey: questionNumber)
        }
    }

    func submit(examID: String, testID: String) {
        update(examID: examID, testID: testID, syncRelevant: true) { progress in
            progress.submitted = true
        }
    }

    func setCurrentQuestion(
        _ index: Int,
        examID: String,
        testID: String
    ) {
        update(examID: examID, testID: testID) { progress in
            progress.currentQuestion = max(0, index)
        }
    }

    @discardableResult
    func toggleFlag(
        _ questionNumber: Int,
        examID: String,
        testID: String
    ) -> Bool {
        guard questionNumber > 0 else { return false }
        var isFlagged = false
        update(examID: examID, testID: testID) { progress in
            if progress.flaggedQuestions.remove(questionNumber) == nil {
                progress.flaggedQuestions.insert(questionNumber)
                isFlagged = true
            }
        }
        return isFlagged
    }

    func score(
        for questions: [ExamQuestion],
        examID: String,
        testID: String,
        passPercent: Double
    ) -> ExamScore {
        let answers = progress(examID: examID, testID: testID).answers
        let answered = questions.reduce(into: 0) { count, question in
            if answers[question.number] != nil { count += 1 }
        }
        let correct = questions.reduce(into: 0) { count, question in
            if answers[question.number] == question.answer { count += 1 }
        }
        let total = questions.count
        let passMark = Int(ceil(max(0, min(1, passPercent)) * Double(total)))
        let percentage = total == 0 ? 0 : Double(correct) / Double(total)
        return ExamScore(
            answered: answered,
            correct: correct,
            total: total,
            passMark: passMark,
            percentage: percentage,
            passed: total > 0 && correct >= passMark
        )
    }

    func score(for test: ExamTest, in exam: Exam) -> ExamScore {
        score(
            for: test.questions,
            examID: exam.id,
            testID: test.id,
            passPercent: exam.passPercent
        )
    }

    func scoringBand(for score: ExamScore, in exam: Exam) -> ScoringBand? {
        exam.scoringBand(for: score.percentage)
    }

    func reset(examID: String, testID: String) {
        guard var examProgress = exams[examID] else { return }
        guard examProgress.variants.removeValue(forKey: testID) != nil else { return }
        if examProgress.variants.isEmpty {
            exams.removeValue(forKey: examID)
        } else {
            exams[examID] = examProgress
        }
        markDeleted(examID: examID, testID: testID)
        localMutationRevision &+= 1
        persist()
        persistSyncMetadata()
    }

    func reset(examID: String, variantID: String) {
        reset(examID: examID, testID: variantID)
    }

    func reset(examID: String) {
        guard let removed = exams.removeValue(forKey: examID) else { return }
        for testID in removed.variants.keys {
            markDeleted(examID: examID, testID: testID)
        }
        localMutationRevision &+= 1
        persist()
        persistSyncMetadata()
    }

    func resetAll() {
        guard !exams.isEmpty || defaults.data(forKey: storageKey) != nil else { return }
        for (examID, exam) in exams {
            for testID in exam.variants.keys {
                markDeleted(examID: examID, testID: testID)
            }
        }
        exams.removeAll()
        localMutationRevision &+= 1
        defaults.removeObject(forKey: storageKey)
        persistSyncMetadata()
    }

    /// A value snapshot lets the async sync service perform network work
    /// without retaining or mutating this main-actor store off actor.
    func syncSnapshot() -> ProgressStoreSyncSnapshot {
        ProgressStoreSyncSnapshot(exams: exams, metadata: syncMetadata)
    }

    /// Applies imports/merges as one local transaction. No network failure can
    /// erase them once this returns.
    func applySyncMutations(_ mutations: [ProgressStoreSyncMutation]) {
        guard !mutations.isEmpty else { return }
        for mutation in mutations {
            if let progress = mutation.progress {
                var exam = exams[mutation.examID] ?? ExamProgress()
                exam.variants[mutation.testID] = progress
                exams[mutation.examID] = exam
            } else if var exam = exams[mutation.examID] {
                exam.variants.removeValue(forKey: mutation.testID)
                if exam.variants.isEmpty {
                    exams.removeValue(forKey: mutation.examID)
                } else {
                    exams[mutation.examID] = exam
                }
            }

            if let metadata = mutation.metadata,
               mutation.progress != nil || metadata.isDirty || metadata.isDeleted {
                syncMetadata[mutation.examID, default: [:]][mutation.testID] = metadata
            } else {
                syncMetadata[mutation.examID]?[mutation.testID] = nil
                cleanEmptyMetadataBucket(examID: mutation.examID)
            }
        }
        persist()
        persistSyncMetadata()
    }

    /// Marks a PUT clean only if the user has not edited that slot while the
    /// request was in flight. A concurrent edit therefore stays queued.
    func markSynced(_ update: RemoteExamProgressUpdate) {
        let current = exams[update.examID]?.variants[update.nativeTestID]
        let currentProjection = RemoteExamVariantProgress(
            answers: current?.answers ?? [:],
            submitted: current?.submitted ?? false
        )
        guard currentProjection == update.progress else {
            // Rebase the edit after the completed request. The server's single
            // exam timestamp may now be newer even though its just-written slot
            // is stale; this ensures the user's in-flight edit wins the retry.
            if var metadata = syncMetadata[update.examID]?[update.nativeTestID],
               metadata.isDirty {
                metadata.modifiedAt = max(metadata.modifiedAt, now())
                syncMetadata[update.examID, default: [:]][update.nativeTestID] = metadata
                persistSyncMetadata()
            }
            return
        }

        if update.progress.isEmpty {
            syncMetadata[update.examID]?[update.nativeTestID] = nil
            cleanEmptyMetadataBucket(examID: update.examID)
        } else if var metadata = syncMetadata[update.examID]?[update.nativeTestID] {
            metadata.isDirty = false
            metadata.isDeleted = false
            syncMetadata[update.examID, default: [:]][update.nativeTestID] = metadata
        } else {
            syncMetadata[update.examID, default: [:]][update.nativeTestID] = VariantSyncMetadata(
                modifiedAt: now(),
                isDirty: false,
                isDeleted: false
            )
        }
        persistSyncMetadata()
    }

    func matchesSyncUpload(_ update: RemoteExamProgressUpdate) -> Bool {
        let current = exams[update.examID]?.variants[update.nativeTestID]
        return RemoteExamVariantProgress(
            answers: current?.answers ?? [:],
            submitted: current?.submitted ?? false
        ) == update.progress
    }

    private func update(
        examID: String,
        testID: String,
        syncRelevant: Bool = false,
        mutation: (inout ExamVariantProgress) -> Void
    ) {
        var examProgress = exams[examID] ?? ExamProgress()
        var variantProgress = examProgress.variants[testID] ?? ExamVariantProgress()
        let previousAnswers = variantProgress.answers
        let previousSubmitted = variantProgress.submitted
        mutation(&variantProgress)
        examProgress.variants[testID] = variantProgress
        exams[examID] = examProgress
        if syncRelevant,
           previousAnswers != variantProgress.answers || previousSubmitted != variantProgress.submitted {
            syncMetadata[examID, default: [:]][testID] = VariantSyncMetadata(
                modifiedAt: now(),
                isDirty: true,
                isDeleted: false
            )
            localMutationRevision &+= 1
            persistSyncMetadata()
        }
        persist()
    }

    private func markDeleted(examID: String, testID: String) {
        syncMetadata[examID, default: [:]][testID] = VariantSyncMetadata(
            modifiedAt: now(),
            isDirty: true,
            isDeleted: true
        )
    }

    private func cleanEmptyMetadataBucket(examID: String) {
        if syncMetadata[examID]?.isEmpty == true {
            syncMetadata[examID] = nil
        }
    }

    private func storageKey(forAccountID accountID: String?) -> String {
        Self.storageKey(base: baseStorageKey, accountID: accountID)
    }

    private static func storageKey(base: String, accountID: String?) -> String {
        guard let accountID else { return base }
        let namespace = Data(accountID.utf8)
            .base64EncodedString()
            .replacingOccurrences(of: "/", with: "_")
            .replacingOccurrences(of: "+", with: "-")
            .replacingOccurrences(of: "=", with: "")
        return "\(base).account.\(namespace)"
    }

    private static func loadProgress(defaults: UserDefaults, key: String) -> [String: ExamProgress] {
        guard let data = defaults.data(forKey: key),
              let payload = try? JSONDecoder().decode(PersistedProgress.self, from: data),
              payload.version == PersistedProgress.currentVersion
        else { return [:] }
        return payload.exams
    }

    private static func loadSyncMetadata(
        defaults: UserDefaults,
        key: String
    ) -> [String: [String: VariantSyncMetadata]] {
        guard let data = defaults.data(forKey: key),
              let payload = try? JSONDecoder().decode(PersistedSyncMetadata.self, from: data),
              payload.version == PersistedSyncMetadata.currentVersion
        else { return [:] }
        return payload.exams
    }

    private func persist() {
        let payload = PersistedProgress(exams: exams)
        guard let data = try? JSONEncoder().encode(payload) else { return }
        defaults.set(data, forKey: storageKey)
    }

    private func persistSyncMetadata() {
        guard !syncMetadata.isEmpty else {
            defaults.removeObject(forKey: syncStorageKey)
            return
        }
        let payload = PersistedSyncMetadata(exams: syncMetadata)
        guard let data = try? JSONEncoder().encode(payload) else { return }
        defaults.set(data, forKey: syncStorageKey)
    }
}

private struct PersistedProgress: Codable {
    static let currentVersion = 1

    let version: Int
    let exams: [String: ExamProgress]

    init(exams: [String: ExamProgress]) {
        version = Self.currentVersion
        self.exams = exams
    }
}

private struct PersistedSyncMetadata: Codable {
    static let currentVersion = 1

    let version: Int
    let exams: [String: [String: VariantSyncMetadata]]

    init(exams: [String: [String: VariantSyncMetadata]]) {
        version = Self.currentVersion
        self.exams = exams
    }
}
