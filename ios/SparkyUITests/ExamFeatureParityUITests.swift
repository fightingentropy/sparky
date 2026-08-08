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
}
