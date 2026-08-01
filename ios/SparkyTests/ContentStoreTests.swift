import XCTest
@testable import Sparky

final class ContentStoreTests: XCTestCase {
    @MainActor
    func testLoadsExportedCatalogAndStudyContent() throws {
        let store = try ContentStore(contentDirectory: contentDirectory)

        XCTAssertEqual(store.manifest.schemaVersion, 1)
        XCTAssertEqual(store.manifest.contentSchemaVersion, 3)
        XCTAssertEqual(store.manifest.contentHash.count, 64)
        XCTAssertEqual(store.manifest.files.count, 17)
        XCTAssertEqual(store.catalog.schemaVersion, 3)
        XCTAssertEqual(store.catalog.examCount, 12)
        XCTAssertEqual(store.catalog.exams.count, 12)
        XCTAssertEqual(store.catalog.variantCount, 99)
        XCTAssertEqual(store.catalog.questionCount, 3_983)
        XCTAssertEqual(store.notes.count, 43)
        XCTAssertEqual(store.guides.count, 13)
        XCTAssertEqual(store.tutorials.count, 7)
        XCTAssertEqual(store.calculators.count, 10)

        XCTAssertNotNil(store.note(id: "cheat-core-formulas"))
        XCTAssertNotNil(store.guide(id: "becoming-an-electrician-route"))
        XCTAssertNotNil(store.tutorial(id: "internal-90-trunking"))
        XCTAssertEqual(store.calculator(id: "tray-bend-cut")?.algorithmVersion, 2)
        XCTAssertEqual(
            store.calculator(id: "structural-limits")?.additionalSources?.first?.classification,
            .examConvention
        )

        let swatches = store.notes.flatMap { $0.legend ?? [] }.compactMap(\.swatch)
        XCTAssertTrue(swatches.contains { if case .color = $0 { true } else { false } })
        XCTAssertTrue(swatches.contains { if case .colors = $0 { true } else { false } })
    }

    @MainActor
    func testLoadsFundamentalExam() throws {
        let store = try ContentStore(contentDirectory: contentDirectory)
        let primaryIDs = [
            "building-regulations",
            "18th-edition",
            "fundamental-inspection-testing",
            "pat-testing",
            "periodic-inspection",
            "initial-verification"
        ]

        XCTAssertEqual(Array(store.catalog.exams.prefix(primaryIDs.count)).map(\.id), primaryIDs)

        let index = try XCTUnwrap(store.examIndex(id: "fundamental-inspection-testing"))
        let exam = try store.loadExam(id: index.id)
        let test = try XCTUnwrap(exam.tests.first)
        let homework = try XCTUnwrap(
            exam.tests.first { $0.id == "fundamental-inspection-testing-homework" }
        )

        XCTAssertEqual(exam.title, "Fundamental Inspection and Testing")
        XCTAssertEqual(exam.tests.count, 2)
        XCTAssertEqual(test.questionCount, 30)
        XCTAssertEqual(test.questions.map(\.number), Array(1...30))
        XCTAssertEqual(homework.questionCount, 40)
        XCTAssertEqual(homework.questions.map(\.number), Array(1...40))
        XCTAssertTrue(exam.format.contains("60 minutes"))
        XCTAssertTrue(exam.format.contains("Guidance Note 3"))
        XCTAssertEqual(exam.contentSources?.first?.classification, .examConvention)
        XCTAssertEqual(test.questions.first?.sourceIDs, exam.contentSources?.map(\.id))
    }

    @MainActor
    func testEveryNativeQuestionDecodesStableIdentityAndCompleteProvenance() throws {
        let store = try ContentStore(contentDirectory: contentDirectory)
        var deliveredQuestionIDs = Set<String>()

        for indexedExam in store.catalog.exams {
            let exam = try store.loadExam(id: indexedExam.id)
            let sources = try XCTUnwrap(exam.contentSources)
            let sourceIDs = sources.map(\.id)

            XCTAssertFalse(sources.isEmpty, exam.id)
            XCTAssertEqual(Set(sourceIDs).count, sourceIDs.count, exam.id)

            for source in sources {
                XCTAssertFalse(source.jurisdiction.isEmpty, source.id)
                XCTAssertFalse(source.documentIdentifier.isEmpty, source.id)
                XCTAssertFalse(source.edition.isEmpty, source.id)
                XCTAssertFalse(source.amendment.isEmpty, source.id)
                XCTAssertFalse(source.effectiveDate.isEmpty, source.id)
                XCTAssertFalse(source.sectionOrTable.isEmpty, source.id)
                XCTAssertFalse(source.profileVersion.isEmpty, source.id)
                XCTAssertFalse(source.contentVersion.isEmpty, source.id)
                XCTAssertNotNil(
                    source.sourceHash.range(
                        of: "^(sha256:[0-9a-f]{64}|fnv1a64:[0-9a-f]{16})$",
                        options: .regularExpression
                    ),
                    source.id
                )
            }

            for test in exam.tests {
                for question in test.questions {
                    XCTAssertTrue(deliveredQuestionIDs.insert(question.id).inserted, question.id)
                    let questionSourceIDs = try XCTUnwrap(question.sourceIDs)
                    XCTAssertFalse(questionSourceIDs.isEmpty, question.id)
                    XCTAssertEqual(Set(questionSourceIDs).count, questionSourceIDs.count, question.id)
                    XCTAssertTrue(Set(questionSourceIDs).isSubset(of: Set(sourceIDs)), question.id)
                }
            }
        }

        XCTAssertEqual(deliveredQuestionIDs.count, store.catalog.questionCount)
    }

    @MainActor
    func testLoadsFocusedInitialVerificationExam() throws {
        let store = try ContentStore(contentDirectory: contentDirectory)
        let index = try XCTUnwrap(store.examIndex(id: "initial-verification"))
        let exam = try store.loadExam(id: index.id)
        let test = try XCTUnwrap(exam.tests.first)
        let homework = try XCTUnwrap(
            exam.tests.first { $0.id == "initial-verification-homework" }
        )

        XCTAssertEqual(exam.title, "Initial Verification")
        XCTAssertEqual(exam.tests.count, 2)
        XCTAssertEqual(test.questionCount, 55)
        XCTAssertEqual(test.questions.map(\.number), Array(1...55))
        XCTAssertEqual(homework.questionCount, 43)
        XCTAssertEqual(homework.questions.map(\.number), Array(1...43))
        XCTAssertTrue(exam.format.contains("90 minutes"))
        XCTAssertTrue(exam.format.contains("Guidance Note 3"))

        let questionText = test.questions
            .map {
                let options = $0.options.ordered.map { $0.text }.joined(separator: " ")
                return "\($0.prompt) \(options) \($0.explanation)"
            }
            .joined(separator: " ")
            .lowercased()
        XCTAssertFalse(questionText.contains("periodic"))
        XCTAssertFalse(questionText.contains("eicr"))
        XCTAssertFalse(questionText.contains("condition report"))
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
        XCTAssertEqual(
            ExamLibraryPreferences.visibleExams(
                in: store.catalog,
                storageValue: "not-json"
            ).map(\.id),
            [
                "building-regulations",
                "18th-edition",
                "fundamental-inspection-testing",
                "pat-testing",
                "periodic-inspection",
                "initial-verification"
            ]
        )

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

    func testNavigationPreferencesCanShowOnlyExamsAndLaunchThere() {
        let stored = NavigationPreferences.storageValue(
            for: [.tools, .notes, .learn, .more]
        )

        XCTAssertEqual(NavigationPreferences.visibleTabs(from: stored), [.exams])
        XCTAssertEqual(NavigationPreferences.preferredTab(from: stored), .exams)
    }

    func testNavigationPreferencesIgnoreUnknownTabsAndKeepASafeDestination() {
        XCTAssertEqual(
            NavigationPreferences.hiddenTabs(from: #"["notes","removed-tab"]"#),
            [.notes]
        )

        let allHidden = NavigationPreferences.storageValue(for: Set(AppTab.allCases))
        XCTAssertEqual(NavigationPreferences.visibleTabs(from: allHidden), [.tools])
    }

    @MainActor
    func testRejectsTamperedGeneratedContent() throws {
        let temporaryDirectory = FileManager.default.temporaryDirectory
            .appendingPathComponent("SparkyContentTests-\(UUID().uuidString)", isDirectory: true)
        try FileManager.default.copyItem(at: contentDirectory, to: temporaryDirectory)
        defer { try? FileManager.default.removeItem(at: temporaryDirectory) }

        let target = temporaryDirectory.appendingPathComponent("cheat-sheet.json")
        var data = try Data(contentsOf: target)
        data.append(0x20)
        try data.write(to: target, options: .atomic)

        XCTAssertThrowsError(try ContentStore(contentDirectory: temporaryDirectory)) { error in
            guard case ContentStoreError.checksumMismatch("cheat-sheet.json") = error else {
                return XCTFail("Unexpected error: \(error)")
            }
        }
    }

    @MainActor
    func testChecksLazyExamIntegrityWhenTheExamIsLoaded() throws {
        let temporaryDirectory = FileManager.default.temporaryDirectory
            .appendingPathComponent("SparkyExamIntegrityTests-\(UUID().uuidString)", isDirectory: true)
        try FileManager.default.copyItem(at: contentDirectory, to: temporaryDirectory)
        defer { try? FileManager.default.removeItem(at: temporaryDirectory) }

        let relativePath = "exams/ecs-health-safety.json"
        let target = temporaryDirectory.appendingPathComponent(relativePath)
        var data = try Data(contentsOf: target)
        data.append(0x20)
        try data.write(to: target, options: .atomic)

        let store = try ContentStore(contentDirectory: temporaryDirectory)
        XCTAssertThrowsError(try store.loadExam(id: "ecs-health-safety")) { error in
            guard case ContentStoreError.checksumMismatch(relativePath) = error else {
                return XCTFail("Unexpected error: \(error)")
            }
        }
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
