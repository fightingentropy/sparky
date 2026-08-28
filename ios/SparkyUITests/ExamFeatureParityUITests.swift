import XCTest

final class ExamFeatureParityUITests: XCTestCase {
    override func setUpWithError() throws {
        continueAfterFailure = false
    }

    func testCanRevealAnswerAndResetBeforeSubmitting() throws {
        let app = XCUIApplication()
        app.launchArguments = [
            "-sparkyPreviewTab", "exams",
            "-sparkyPreviewExam", "building-regulations",
            "-sparkyPreviewTest", "quiz-29753",
            "-sparkyPreviewReset"
        ]
        app.launch()

        let answerToggle = app.buttons["exam.question.answer-toggle"]
        XCTAssertTrue(answerToggle.waitForExistence(timeout: 10))
        XCTAssertEqual(answerToggle.label, "Show answer")

        let wrongOption = app.buttons["Option A, One eighth the wall thickness"]
        XCTAssertTrue(wrongOption.waitForExistence(timeout: 2))
        wrongOption.tap()
        XCTAssertTrue(app.staticTexts["1 answered"].waitForExistence(timeout: 2))

        answerToggle.tap()
        XCTAssertEqual(answerToggle.label, "Hide answer")
        XCTAssertTrue(wrongOption.isEnabled)
        XCTAssertEqual(wrongOption.value as? String, "Selected, not the correct answer")

        let correctOption = app.buttons["Option C, One sixth the wall thickness"]
        XCTAssertEqual(correctOption.value as? String, "Correct answer")

        let whyA = app.buttons["exam.option.A.explanation-toggle"]
        let whyB = app.buttons["exam.option.B.explanation-toggle"]
        let explanationA = app.staticTexts["exam.option.A.explanation"]
        XCTAssertEqual(whyA.value as? String, "Collapsed")
        XCTAssertEqual(whyB.value as? String, "Collapsed")
        XCTAssertFalse(explanationA.exists)
        XCTAssertFalse(app.staticTexts["exam.option.B.explanation"].exists)
        XCTAssertTrue(app.staticTexts["exam.option.C.explanation"].exists)

        whyA.tap()
        XCTAssertTrue(explanationA.waitForExistence(timeout: 2))
        XCTAssertEqual(whyA.value as? String, "Expanded")
        XCTAssertEqual(whyB.value as? String, "Collapsed")
        XCTAssertEqual(wrongOption.value as? String, "Selected, not the correct answer")
        XCTAssertTrue(app.staticTexts["1 answered"].exists)

        whyA.tap()
        XCTAssertFalse(explanationA.exists)
        whyA.tap()
        answerToggle.tap()
        XCTAssertFalse(whyA.exists)
        answerToggle.tap()
        XCTAssertEqual(whyA.value as? String, "Collapsed")
        XCTAssertFalse(explanationA.exists)

        let revealedScreenshot = XCTAttachment(screenshot: app.screenshot())
        revealedScreenshot.name = "Answer revealed before submission"
        revealedScreenshot.lifetime = .keepAlways
        add(revealedScreenshot)

        app.buttons["Exam actions"].tap()
        let resetButton = app.buttons["Reset test"]
        XCTAssertTrue(resetButton.waitForExistence(timeout: 2))
        resetButton.tap()

        let startAgainButton = app.buttons["Start again"]
        XCTAssertTrue(startAgainButton.waitForExistence(timeout: 2))
        startAgainButton.tap()

        XCTAssertTrue(app.staticTexts["0 answered"].waitForExistence(timeout: 2))
        XCTAssertEqual(answerToggle.label, "Show answer")
        XCTAssertEqual(wrongOption.value as? String, "Not selected")

        let resetScreenshot = XCTAttachment(screenshot: app.screenshot())
        resetScreenshot.name = "Reset in-progress exam"
        resetScreenshot.lifetime = .keepAlways
        add(resetScreenshot)
    }

    func testWrongExplanationTogglesWorkAfterSubmittingAndResetForEachQuestion() throws {
        let app = XCUIApplication()
        app.launchArguments = [
            "-sparkyPreviewTab", "exams",
            "-sparkyPreviewExam", "building-regulations",
            "-sparkyPreviewTest", "quiz-29753",
            "-sparkyPreviewReset",
            "-sparkyPreviewSubmitted"
        ]
        app.launch()

        let whyA = app.buttons["exam.option.A.explanation-toggle"]
        XCTAssertTrue(whyA.waitForExistence(timeout: 10))
        XCTAssertTrue(whyA.isEnabled)
        XCTAssertEqual(whyA.value as? String, "Collapsed")
        let wrongOption = app.buttons["Option A, One eighth the wall thickness"]
        XCTAssertFalse(wrongOption.isEnabled)

        whyA.tap()
        XCTAssertTrue(app.staticTexts["exam.option.A.explanation"].waitForExistence(timeout: 2))
        let whyB = app.buttons["exam.option.B.explanation-toggle"]
        let nextQuestion = app.buttons["Next question"]
        for _ in 0..<4 {
            if whyB.isHittable, whyB.frame.maxY < nextQuestion.frame.minY { break }
            app.swipeUp()
        }
        // A partially visible control can still be reported as hittable while
        // its tap point is covered by the fixed question-navigation bar.
        XCTAssertLessThan(whyB.frame.maxY, nextQuestion.frame.minY)
        whyB.tap()
        XCTAssertTrue(wrongOption.exists)
        XCTAssertEqual(whyA.value as? String, "Expanded")
        XCTAssertEqual(whyB.value as? String, "Expanded")
        XCTAssertFalse(wrongOption.isEnabled)

        nextQuestion.tap()
        app.buttons["Previous question"].tap()
        XCTAssertTrue(whyA.waitForExistence(timeout: 2))
        XCTAssertEqual(whyA.value as? String, "Collapsed")
        XCTAssertEqual(whyB.value as? String, "Collapsed")
        XCTAssertFalse(app.staticTexts["exam.option.A.explanation"].exists)
        XCTAssertFalse(app.staticTexts["exam.option.B.explanation"].exists)
    }
}
