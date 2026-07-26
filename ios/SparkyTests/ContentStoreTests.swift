import XCTest
@testable import Sparky

final class ContentStoreTests: XCTestCase {
    @MainActor
    func testLoadsExportedCatalogAndStudyContent() throws {
        let store = try ContentStore(contentDirectory: contentDirectory)

        XCTAssertEqual(store.catalog.schemaVersion, 1)
        XCTAssertEqual(store.catalog.examCount, 11)
        XCTAssertEqual(store.catalog.exams.count, 11)
        XCTAssertEqual(store.catalog.variantCount, 103)
        XCTAssertEqual(store.catalog.questionCount, 4_289)
        XCTAssertEqual(store.notes.count, 43)
        XCTAssertEqual(store.guides.count, 12)
        XCTAssertEqual(store.tutorials.count, 7)

        XCTAssertNotNil(store.note(id: "cheat-core-formulas"))
        XCTAssertNotNil(store.guide(id: "becoming-an-electrician-route"))
        XCTAssertNotNil(store.tutorial(id: "internal-90-trunking"))

        let swatches = store.notes.flatMap { $0.legend ?? [] }.compactMap(\.swatch)
        XCTAssertTrue(swatches.contains { if case .color = $0 { true } else { false } })
        XCTAssertTrue(swatches.contains { if case .colors = $0 { true } else { false } })
    }

    @MainActor
    func testLoadsFinalizedExamTestsWithSequentialQuestionsAndFeedback() throws {
        let store = try ContentStore(contentDirectory: contentDirectory)
        let index = try XCTUnwrap(store.examIndex(id: "periodic-inspection"))
        let exam = try store.loadExam(id: index.id)

        XCTAssertEqual(exam.id, index.id)
        XCTAssertEqual(exam.tests.count, index.testCount)
        XCTAssertEqual(exam.tests.reduce(0) { $0 + $1.questionCount }, index.questionCount)

        let firstTest = try XCTUnwrap(exam.tests.first)
        XCTAssertEqual(firstTest.questionCount, 40)
        XCTAssertEqual(firstTest.questions.count, firstTest.questionCount)
        XCTAssertEqual(firstTest.questions.map(\.number), Array(1...firstTest.questionCount))

        for question in firstTest.questions {
            for choice in ExamChoice.allCases {
                let feedback = question.optionFeedback[choice]
                XCTAssertFalse(feedback.text.isEmpty)
                if choice == question.answer {
                    XCTAssertEqual(feedback.kind, .correct)
                }
            }
        }

        XCTAssertTrue(
            exam.tests
                .flatMap(\.questions)
                .contains { !($0.solutionTables ?? []).isEmpty }
        )
    }

    @MainActor
    func testRejectsExamIDThatIsNotInCatalog() throws {
        let store = try ContentStore(contentDirectory: contentDirectory)

        XCTAssertThrowsError(try store.loadExam(id: "not-an-exam")) { error in
            guard case ContentStoreError.unknownExam("not-an-exam") = error else {
                return XCTFail("Unexpected error: \(error)")
            }
        }
    }

    @MainActor
    func testExamLibraryPreferencesHideOnlySelectedBanks() throws {
        let store = try ContentStore(contentDirectory: contentDirectory)
        let stored = ExamLibraryPreferences.storageValue(
            for: ["18th-edition", "periodic-inspection"]
        )

        let visible = ExamLibraryPreferences.visibleExams(
            in: store.catalog,
            storageValue: stored
        )

        XCTAssertEqual(visible.count, store.catalog.exams.count - 2)
        XCTAssertFalse(visible.contains { $0.id == "18th-edition" })
        XCTAssertFalse(visible.contains { $0.id == "periodic-inspection" })
        XCTAssertTrue(visible.contains { $0.id == "initial-verification" })
    }

    @MainActor
    func testExamLibraryPreferencesUseFocusedDefaultsAndIgnoreUnknownIDs() throws {
        let store = try ContentStore(contentDirectory: contentDirectory)
        let validIDs = Set(store.catalog.exams.map(\.id))

        let defaults = ExamLibraryPreferences.hiddenExamIDs(
            from: "not-json",
            validExamIDs: validIDs
        )
        XCTAssertEqual(defaults, ExamLibraryPreferences.defaultHiddenExamIDs)

        let stored = ExamLibraryPreferences.storageValue(
            for: ["18th-edition", "removed-exam"]
        )
        let decoded = ExamLibraryPreferences.hiddenExamIDs(
            from: stored,
            validExamIDs: validIDs
        )
        XCTAssertEqual(decoded, ["18th-edition"])
    }

    @MainActor
    func testExamLibraryPreferencesNeverReturnAnEmptyLibrary() throws {
        let store = try ContentStore(contentDirectory: contentDirectory)
        let allIDs = Set(store.catalog.exams.map(\.id))
        let stored = ExamLibraryPreferences.storageValue(for: allIDs)

        let visible = ExamLibraryPreferences.visibleExams(
            in: store.catalog,
            storageValue: stored
        )

        XCTAssertEqual(visible.map(\.id), [store.catalog.exams[0].id])
    }

    private var contentDirectory: URL {
        URL(fileURLWithPath: #filePath)
            .deletingLastPathComponent()
            .deletingLastPathComponent()
            .appendingPathComponent("Sparky/Resources/Content", isDirectory: true)
    }
}

final class ProgressStoreTests: XCTestCase {
    @MainActor
    func testPersistsIndependentTestProgressAndScoresAnswers() throws {
        let suiteName = "ProgressStoreTests.\(UUID().uuidString)"
        let defaults = try XCTUnwrap(UserDefaults(suiteName: suiteName))
        defaults.removePersistentDomain(forName: suiteName)
        defer { defaults.removePersistentDomain(forName: suiteName) }

        let storageKey = "progress"
        let content = try ContentStore(contentDirectory: contentDirectory)
        let exam = try content.loadExam(id: "ecs-health-safety")
        let test = try XCTUnwrap(exam.tests.first)
        let first = try XCTUnwrap(test.questions.first)
        let second = try XCTUnwrap(test.questions.dropFirst().first)
        let wrongChoice = try XCTUnwrap(ExamChoice.allCases.first { $0 != second.answer })

        let store = ProgressStore(defaults: defaults, storageKey: storageKey)
        store.answer(first.answer, for: first.number, examID: exam.id, testID: test.id)
        store.answer(wrongChoice, for: second.number, examID: exam.id, testID: test.id)
        store.setCurrentQuestion(1, examID: exam.id, testID: test.id)
        XCTAssertTrue(store.toggleFlag(second.number, examID: exam.id, testID: test.id))
        store.submit(examID: exam.id, testID: test.id)

        let score = store.score(for: test, in: exam)
        XCTAssertEqual(score.answered, 2)
        XCTAssertEqual(score.correct, 1)
        XCTAssertEqual(score.total, test.questionCount)
        XCTAssertEqual(score.passMark, Int(ceil(exam.passPercent * Double(test.questionCount))))
        XCTAssertFalse(score.passed)
        XCTAssertNotNil(defaults.data(forKey: storageKey))

        let reloaded = ProgressStore(defaults: defaults, storageKey: storageKey)
        let progress = reloaded.progress(examID: exam.id, testID: test.id)
        XCTAssertEqual(progress.answers[first.number], first.answer)
        XCTAssertEqual(progress.answers[second.number], wrongChoice)
        XCTAssertEqual(progress.currentQuestion, 1)
        XCTAssertTrue(progress.flaggedQuestions.contains(second.number))
        XCTAssertTrue(progress.submitted)

        reloaded.reset(examID: exam.id, testID: test.id)
        XCTAssertEqual(
            reloaded.progress(examID: exam.id, testID: test.id),
            ExamVariantProgress()
        )
        reloaded.resetAll()
        XCTAssertNil(defaults.data(forKey: storageKey))
    }

    private var contentDirectory: URL {
        URL(fileURLWithPath: #filePath)
            .deletingLastPathComponent()
            .deletingLastPathComponent()
            .appendingPathComponent("Sparky/Resources/Content", isDirectory: true)
    }
}
