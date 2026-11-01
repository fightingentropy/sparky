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
        expectExists(answerToggle, "the answer toggle", timeout: Timeout.launch)
        expectLabel(answerToggle, "Show answer")

        let wrongOption = app.buttons["Option A, One eighth the wall thickness"]
        expectExists(wrongOption, "option A")
        wrongOption.tap()
        expectExists(app.staticTexts["1 answered"], "the answered count to show 1")

        answerToggle.tap()
        expectLabel(answerToggle, "Hide answer")
        XCTAssertTrue(wrongOption.isEnabled)
        expectValue(wrongOption, "Selected, not the correct answer")

        let correctOption = app.buttons["Option C, One sixth the wall thickness"]
        expectValue(correctOption, "Correct answer")

        let whyA = app.buttons["exam.option.A.explanation-toggle"]
        let whyB = app.buttons["exam.option.B.explanation-toggle"]
        let explanationA = app.staticTexts["exam.option.A.explanation"]
        let explanationB = app.staticTexts["exam.option.B.explanation"]
        expectValue(whyA, "Collapsed")
        expectValue(whyB, "Collapsed")
        expectGone(explanationA, "the collapsed explanation for option A")
        expectGone(explanationB, "the collapsed explanation for option B")
        expectExists(
            app.staticTexts["exam.option.C.explanation"],
            "the explanation for the correct option"
        )

        whyA.tap()
        expectExists(explanationA, "the expanded explanation for option A")
        expectValue(whyA, "Expanded")
        expectValue(whyB, "Collapsed")
        expectValue(wrongOption, "Selected, not the correct answer")
        expectExists(app.staticTexts["1 answered"], "the answered count to stay at 1")

        whyA.tap()
        expectGone(explanationA, "the re-collapsed explanation for option A")
        whyA.tap()
        expectExists(explanationA, "the re-expanded explanation for option A")
        answerToggle.tap()
        expectGone(whyA, "the explanation toggles once the answer is hidden")
        answerToggle.tap()
        expectValue(whyA, "Collapsed")
        expectGone(explanationA, "explanations to start collapsed again")

        let revealedScreenshot = XCTAttachment(screenshot: app.screenshot())
        revealedScreenshot.name = "Answer revealed before submission"
        revealedScreenshot.lifetime = .keepAlways
        add(revealedScreenshot)

        // The exam actions menu, its Reset item and the confirmation dialog are
        // system-presented UI. They animate in more slowly than the app's own
        // views and their element types differ between iOS releases.
        let examActions = presentedControl("Exam actions", in: app, timeout: Timeout.interaction)
        examActions.tap()
        let resetButton = presentedControl("Reset test", in: app, timeout: Timeout.presentation)
        resetButton.tap()

        let startAgainButton = presentedControl("Start again", in: app, timeout: Timeout.presentation)
        startAgainButton.tap()

        expectExists(app.staticTexts["0 answered"], "the answered count to reset to 0")
        expectLabel(answerToggle, "Show answer")
        expectValue(wrongOption, "Not selected")

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

// MARK: - Waiting helpers

/// How long the first test waits for the app and for animated UI. Every wait
/// returns as soon as its condition holds, so the limits cost nothing when the
/// app is quick; they only matter on a slow, shared CI simulator.
private enum Timeout {
    /// A cold launch: the first UI test to run on a freshly booted simulator.
    static let launch: TimeInterval = 60
    /// App views reacting to a tap.
    static let interaction: TimeInterval = 15
    /// System-presented menus and dialogs.
    static let presentation: TimeInterval = 30
}

extension ExamFeatureParityUITests {
    /// Polls `condition` until it holds or `timeout` passes. Reading an
    /// element's label or value fails the test when the element is missing, so
    /// conditions must check `exists` first.
    fileprivate func poll(timeout: TimeInterval, until condition: () -> Bool) -> Bool {
        let deadline = Date().addingTimeInterval(timeout)
        while true {
            if condition() { return true }
            if Date() >= deadline { return false }
            Thread.sleep(forTimeInterval: 0.2)
        }
    }

    fileprivate func expectExists(
        _ element: XCUIElement,
        _ description: String,
        timeout: TimeInterval = Timeout.interaction,
        file: StaticString = #filePath,
        line: UInt = #line
    ) {
        XCTAssertTrue(
            poll(timeout: timeout) { element.exists },
            "Expected \(description) to appear within \(Int(timeout)) s",
            file: file,
            line: line
        )
    }

    fileprivate func expectGone(
        _ element: XCUIElement,
        _ description: String,
        timeout: TimeInterval = Timeout.interaction,
        file: StaticString = #filePath,
        line: UInt = #line
    ) {
        XCTAssertTrue(
            poll(timeout: timeout) { !element.exists },
            "Expected \(description) to be gone within \(Int(timeout)) s",
            file: file,
            line: line
        )
    }

    fileprivate func expectLabel(
        _ element: XCUIElement,
        _ expected: String,
        timeout: TimeInterval = Timeout.interaction,
        file: StaticString = #filePath,
        line: UInt = #line
    ) {
        XCTAssertTrue(
            poll(timeout: timeout) { element.exists && element.label == expected },
            "Expected label \"\(expected)\" within \(Int(timeout)) s but found "
                + (element.exists ? "\"\(element.label)\"" : "no element"),
            file: file,
            line: line
        )
    }

    fileprivate func expectValue(
        _ element: XCUIElement,
        _ expected: String,
        timeout: TimeInterval = Timeout.interaction,
        file: StaticString = #filePath,
        line: UInt = #line
    ) {
        XCTAssertTrue(
            poll(timeout: timeout) { element.exists && element.value as? String == expected },
            "Expected value \"\(expected)\" within \(Int(timeout)) s but found "
                + (element.exists ? "\"\(String(describing: element.value))\"" : "no element"),
            file: file,
            line: line
        )
    }

    /// Finds a control that SwiftUI exposes through a menu or dialog. Today
    /// these are buttons, but menu entries have been reported as menu items and
    /// toolbar menus under other types on other iOS releases, so fall back to
    /// matching the accessibility label or identifier on any element type.
    fileprivate func presentedControl(
        _ name: String,
        in app: XCUIApplication,
        timeout: TimeInterval,
        file: StaticString = #filePath,
        line: UInt = #line
    ) -> XCUIElement {
        let candidates = [
            app.buttons[name].firstMatch,
            app.menuItems[name].firstMatch,
            app.descendants(matching: .any)[name].firstMatch
        ]
        var found: XCUIElement?
        _ = poll(timeout: timeout) {
            found = candidates.first { $0.exists }
            return found != nil
        }
        XCTAssertNotNil(
            found,
            "Expected \"\(name)\" to appear within \(Int(timeout)) s",
            file: file,
            line: line
        )
        return found ?? candidates[0]
    }
}
