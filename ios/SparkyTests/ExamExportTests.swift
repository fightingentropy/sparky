import CoreGraphics
import XCTest
@testable import Sparky

final class ExamExportTests: XCTestCase {
    func testQuestionClipboardTextMatchesWebsiteFormatAndCanHideAnswer() {
        let text = ExamExport.questionClipboardText(question)

        XCTAssertEqual(
            text,
            [
                "Q6",
                "What is Z = √(R² + X²)?",
                "",
                "Image: /exam-images/circuit.png",
                "",
                "A. Resistance * current",
                "B. Impedance (/exam-images/answer.png)",
                "C. Reactance",
                "D. Power"
            ].joined(separator: "\n")
        )
        XCTAssertFalse(text.contains("Answer:"))
        XCTAssertFalse(text.contains("Explanation:"))
    }

    func testFullExamClipboardIncludesSpokenPreambleAnswersAndSectionOrder() {
        let secondQuestion = makeQuestion(
            number: 7,
            prompt: "Which quantity is measured in Ω?",
            answer: .a,
            imageURLs: nil,
            optionImageURLs: nil
        )
        let sections = [
            makeSection(id: "first", questions: [question]),
            makeSection(id: "second", questions: [secondQuestion])
        ]

        let text = ExamExport.fullExamClipboardText(sections: sections)

        XCTAssertTrue(text.hasPrefix(ExamExport.spokenRevisionPreamble))
        XCTAssertTrue(text.contains("Here are the questions:\n\nQ6"))
        XCTAssertTrue(text.contains("Answer: B. Impedance"))
        XCTAssertTrue(text.contains("Explanation: It is the impedance triangle in Ω."))
        XCTAssertLessThan(
            try XCTUnwrap(text.range(of: "Q6")?.lowerBound),
            try XCTUnwrap(text.range(of: "Q7")?.lowerBound)
        )
        XCTAssertFalse(text.contains("Format:"))
        XCTAssertFalse(text.contains("Test:"))
    }

    func testMarkdownIsPortableAndEscapesWebsiteSpecialCharacters() {
        let escapedQuestion = makeQuestion(
            number: 6,
            prompt: "# What is `Z` = √(R² + X²)?",
            answer: .b,
            imageURLs: ["/exam-images/circuit.png"],
            optionImageURLs: makeOptionImages(b: "/exam-images/answer.png"),
            optionA: "Resistance * current",
            explanation: "Use [the triangle] <carefully>."
        )
        let markdown = ExamExport.markdownText(
            sections: [makeSection(questions: [escapedQuestion])],
            baseURL: URL(string: "https://sparky.example/exams")!
        )

        XCTAssertTrue(markdown.contains("## Q6"))
        XCTAssertTrue(markdown.contains("\\# What is \\`Z\\` = √(R² + X²)?"))
        XCTAssertTrue(markdown.contains("- **A.** Resistance \\* current"))
        XCTAssertTrue(markdown.contains("**Answer:** **B.** Impedance"))
        XCTAssertTrue(markdown.contains("**Explanation:** Use \\[the triangle\\] \\<carefully\\>."))
        XCTAssertTrue(markdown.contains("https://sparky.example/exam-images/circuit.png"))
        XCTAssertTrue(markdown.contains("https://sparky.example/exam-images/answer.png"))
        XCTAssertFalse(markdown.contains("Format:"))
        XCTAssertFalse(markdown.contains("Test:"))
    }

    func testExportFilenameIsStableAndMatchesWebsiteSlugRules() {
        XCTAssertEqual(
            ExamExport.filename(
                examID: "Level 3 Electrical Installation",
                testNumber: 2,
                extension: .markdown
            ),
            "level-3-electrical-installation-test-2.md"
        )
        XCTAssertEqual(
            ExamExport.filename(examID: "", testNumber: 0, extension: .pdf),
            "exam-test-1.pdf"
        )
        XCTAssertEqual(
            ExamExport.filename(examID: "  BS 7671 / 18th!  ", testNumber: -4, extension: .pdf),
            "bs-7671-18th-test-1.pdf"
        )
    }

    func testPDFDocumentEmbedsSuppliedImageDataAndFallsBackToAbsoluteURL() {
        let questionImage = Data([0x01, 0x02])
        let document = ExamExport.pdfDocument(
            sections: [makeSection(questions: [question])],
            imageData: ["/exam-images/circuit.png": questionImage],
            baseURL: URL(string: "https://sparky.example/exams")!
        )

        XCTAssertEqual(document.pageWidth, 595.28, accuracy: 0.001)
        XCTAssertEqual(document.pageHeight, 841.89, accuracy: 0.001)
        XCTAssertEqual(document.questions.count, 1)
        XCTAssertEqual(document.questions[0].prompt, question.prompt)
        XCTAssertEqual(document.questions[0].images[0].data, questionImage)
        XCTAssertEqual(
            document.questions[0].images[0].resolvedURL,
            "https://sparky.example/exam-images/circuit.png"
        )
        XCTAssertNil(document.questions[0].options[1].image?.data)
        XCTAssertEqual(
            document.questions[0].options[1].image?.resolvedURL,
            "https://sparky.example/exam-images/answer.png"
        )
        XCTAssertEqual(document.questions[0].answer, .b)
        XCTAssertEqual(document.questions[0].explanation, question.explanation)
    }

    @MainActor
    func testPDFRendererProducesAValidAppleFrameworkPDF() throws {
        let document = ExamExport.pdfDocument(
            sections: [makeSection(questions: [question])],
            baseURL: URL(string: "https://sparky.example/exams")!
        )
        let data = ExamPDFRenderer.render(document)

        XCTAssertTrue(data.starts(with: Data("%PDF".utf8)))
        let provider = try XCTUnwrap(CGDataProvider(data: data as CFData))
        let pdf = try XCTUnwrap(CGPDFDocument(provider))
        XCTAssertGreaterThanOrEqual(pdf.numberOfPages, 1)
        XCTAssertEqual(pdf.page(at: 1)?.getBoxRect(.mediaBox).width ?? 0, 595.28, accuracy: 0.1)
        XCTAssertEqual(pdf.page(at: 1)?.getBoxRect(.mediaBox).height ?? 0, 841.89, accuracy: 0.1)
    }

    private var question: ExamQuestion {
        makeQuestion(
            number: 6,
            prompt: "What is Z = √(R² + X²)?",
            answer: .b,
            imageURLs: ["/exam-images/circuit.png"],
            optionImageURLs: makeOptionImages(b: "/exam-images/answer.png")
        )
    }

    private func makeQuestion(
        number: Int,
        prompt: String,
        answer: ExamChoice,
        imageURLs: [String]?,
        optionImageURLs: ExamOptionImages?,
        optionA: String = "Resistance * current",
        explanation: String = "It is the impedance triangle in Ω."
    ) -> ExamQuestion {
        let feedback = ExamOptionFeedbackMap(
            a: ExamOptionFeedback(text: "A feedback", kind: answer == .a ? .correct : .reviewed),
            b: ExamOptionFeedback(text: "B feedback", kind: answer == .b ? .correct : .reviewed),
            c: ExamOptionFeedback(text: "C feedback", kind: answer == .c ? .correct : .reviewed),
            d: ExamOptionFeedback(text: "D feedback", kind: answer == .d ? .correct : .reviewed)
        )
        return ExamQuestion(
            id: "test/variant/section/question-\(number)",
            number: number,
            prompt: prompt,
            imageURLs: imageURLs,
            options: ExamOptions(
                a: optionA,
                b: "Impedance",
                c: "Reactance",
                d: "Power"
            ),
            optionImageURLs: optionImageURLs,
            answer: answer,
            explanation: explanation,
            solutionTables: nil,
            preserveChoices: nil,
            optionFeedback: feedback
        )
    }

    private func makeSection(
        id: String = "section",
        questions: [ExamQuestion]
    ) -> ExamTestSection {
        ExamTestSection(
            id: id,
            title: "Section",
            sourceVariantID: "variant",
            questions: questions
        )
    }

    private func makeOptionImages(b: String?) -> ExamOptionImages {
        ExamOptionImages(a: nil, b: b, c: nil, d: nil)
    }
}
