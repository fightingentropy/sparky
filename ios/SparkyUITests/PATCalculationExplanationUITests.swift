import XCTest

final class PATCalculationExplanationUITests: XCTestCase {
    func testCanRevealWorkedCalculationsWithoutAnswering() throws {
        try verifyExplanations([
            (30, "Option D, 0.039 Ohms"),
            (6, "Option B, 87.75 milliohms")
        ])
    }

    func testCanRevealReviewedHomeworkExplanationsWithoutAnswering() throws {
        // Include corrected answer keys and framework-specific limits, then
        // finish on Q10, the generic explanation reported by the user.
        try verifyExplanations([
            (12, "Option A, Level 1"),
            (17, "Option D, 3 A"),
            (18, "Option B, Instrument type, model, serial number and last calibration date"),
            (29, "Option D, 5 mA"),
            (32, "Option B, Form V.2"),
            (35, "Option A, 0.1 Ω"),
            (10, "Option D, Class II appliance")
        ])
    }

    private func verifyExplanations(_ entries: [(Int, String)]) throws {
        continueAfterFailure = false
        let app = XCUIApplication()
        app.launchArguments = [
            "-sparkyPreviewTab", "exams",
            "-sparkyPreviewExam", "pat-testing",
            "-sparkyPreviewTest", "portable-appliance-testing-homework"
        ]
        app.launch()

        let navigator = app.buttons["Question navigator"]
        XCTAssertTrue(navigator.waitForExistence(timeout: 10))
        let answeredCount = app.staticTexts.matching(
            NSPredicate(format: "label MATCHES %@", "[0-9]+ answered")
        ).firstMatch.label

        // Do not reset an existing attempt, select an answer or submit:
        // these read-only checks also run on a physical iPhone.
        for (number, option) in entries {
            navigator.tap()
            let question = app.buttons.matching(
                NSPredicate(format: "label BEGINSWITH %@", "Question \(number),")
            ).firstMatch
            for _ in 0..<6 {
                if question.isHittable { break }
                app.swipeUp()
            }
            XCTAssertTrue(question.isHittable)
            question.tap()

            let answerToggle = app.buttons["exam.question.answer-toggle"]
            if answerToggle.waitForExistence(timeout: 2), answerToggle.label == "Show answer" {
                answerToggle.tap()
                XCTAssertEqual(answerToggle.label, "Hide answer")
            }

            let correctOption = app.buttons[option]
            for _ in 0..<6 {
                if correctOption.isHittable,
                   correctOption.frame.maxY < app.frame.maxY - 100 { break }
                app.swipeUp()
            }
            XCTAssertTrue(correctOption.isHittable)
            XCTAssertTrue(["Correct answer", "Selected, correct answer"].contains(
                correctOption.value as? String ?? ""
            ))

            let screenshot = XCTAttachment(screenshot: app.screenshot())
            screenshot.name = "PAT Test 5 Q\(number) reviewed explanation"
            screenshot.lifetime = .keepAlways
            add(screenshot)

            let answeredLabel = app.staticTexts.matching(
                NSPredicate(format: "label MATCHES %@", "[0-9]+ answered")
            ).firstMatch
            for _ in 0..<8 {
                if answeredLabel.isHittable { break }
                app.swipeDown()
            }
            XCTAssertEqual(answeredLabel.label, answeredCount)
        }
    }
}
