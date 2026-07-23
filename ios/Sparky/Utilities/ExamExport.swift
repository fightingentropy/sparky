import Foundation
import UIKit

enum ExamExportFileExtension: String, Sendable {
    case markdown = "md"
    case pdf
}

/// Native equivalents of the website's exam copy and export helpers.
///
/// The generated copy and Markdown deliberately omit exam metadata and preserve
/// the website's question-first format so that exports from either client can be
/// used interchangeably.
enum ExamExport {
    static let spokenRevisionPreamble = [
        "We are doing a spoken multiple-choice revision test on UK electrical installation, Building Regulations, BS 7671 and PAT testing.",
        "",
        "When I read a question and its answer options:",
        "",
        "Listen carefully and identify every option before answering.",
        "Give the correct option first, including its letter and wording.",
        "Immediately explain why it is correct in simple language.",
        "Briefly explain why the other options are wrong when useful.",
        "Keep answers concise and suitable for voice conversation.",
        "Do not repeatedly say “checking,” “one moment,” or pause unnecessarily.",
        "Do not guess. When uncertain, clearly say so and verify the rule before answering.",
        "Pay close attention to exact exam wording. The expected exam answer may differ from a broader real-world explanation.",
        "Mention any common exam trap or easily confused value.",
        "When relevant, state where the answer comes from, such as BS 7671, the IET On-Site Guide, the Electricity at Work Regulations or a specific Approved Document.",
        "Distinguish between a legal requirement, British Standard, guidance and common industry practice.",
        "Use current UK terminology and regulations, but tell me when the question appears to be based on an older edition or outdated terminology.",
        "If I suggest an answer, confirm whether I am correct and still explain why.",
        "If I correct you using the test’s answer sheet, reassess the question rather than automatically agreeing. Clearly acknowledge any genuine mistake.",
        "Continue directly to the next question when I say “next.”",
        "Do not change the subject because of unrelated speech or background conversation unless I clearly address you.",
        "Remember throughout the session that I always want both the answer and the reason.",
        "",
        "Here are the questions:"
    ].joined(separator: "\n")

    static func questionClipboardText(
        _ question: ExamQuestion,
        includeAnswer: Bool = false
    ) -> String {
        var lines = [
            "Q\(question.number)",
            question.prompt
        ]

        if let imageURLs = question.imageURLs, !imageURLs.isEmpty {
            lines.append("")
            lines.append(contentsOf: imageURLs.map { "Image: \($0)" })
        }

        lines.append("")
        lines.append(contentsOf: ExamChoice.allCases.map { choice in
            let option = "\(choice.rawValue). \(question.options[choice])"
            guard let imageURL = question.optionImageURLs?[choice] else {
                return option
            }
            return "\(option) (\(imageURL))"
        })

        if includeAnswer {
            lines.append("")
            lines.append("Answer: \(question.answer.rawValue). \(question.options[question.answer])")
            lines.append("Explanation: \(question.explanation)")
        }

        return lines.joined(separator: "\n")
    }

    static func fullExamClipboardText(sections: [ExamTestSection]) -> String {
        let questions = sections
            .flatMap(\.questions)
            .map { questionClipboardText($0, includeAnswer: true) }
            .joined(separator: "\n\n")
        return "\(spokenRevisionPreamble)\n\n\(questions)"
    }

    static func fullExamClipboardText(test: ExamTest) -> String {
        fullExamClipboardText(sections: test.sections)
    }

    static func markdownText(
        sections: [ExamTestSection],
        baseURL: URL = URL(string: "https://sparky.invalid/")!
    ) -> String {
        sections
            .flatMap(\.questions)
            .map { markdownText(question: $0, baseURL: baseURL) }
            .joined(separator: "\n\n")
    }

    static func markdownText(
        test: ExamTest,
        baseURL: URL = URL(string: "https://sparky.invalid/")!
    ) -> String {
        markdownText(sections: test.sections, baseURL: baseURL)
    }

    static func filename(
        examID: String,
        testNumber: Int,
        extension fileExtension: ExamExportFileExtension
    ) -> String {
        var slug = ""
        var shouldInsertDash = false

        for scalar in examID.trimmingCharacters(in: .whitespacesAndNewlines)
            .lowercased()
            .unicodeScalars {
            let isASCIILetter = scalar.value >= 97 && scalar.value <= 122
            let isASCIIDigit = scalar.value >= 48 && scalar.value <= 57
            if isASCIILetter || isASCIIDigit {
                if shouldInsertDash, !slug.isEmpty {
                    slug.append("-")
                }
                slug.unicodeScalars.append(scalar)
                shouldInsertDash = false
            } else if !slug.isEmpty {
                shouldInsertDash = true
            }
        }

        if slug.isEmpty {
            slug = "exam"
        }

        return "\(slug)-test-\(max(1, testNumber)).\(fileExtension.rawValue)"
    }

    static func pdfDocument(
        sections: [ExamTestSection],
        imageData: [String: Data] = [:],
        baseURL: URL = URL(string: "https://sparky.invalid/")!
    ) -> ExamPDFDocument {
        ExamPDFDocument(
            questions: sections
                .flatMap(\.questions)
                .map { ExamPDFQuestion(question: $0, imageData: imageData, baseURL: baseURL) }
        )
    }

    static func pdfDocument(
        test: ExamTest,
        imageData: [String: Data] = [:],
        baseURL: URL = URL(string: "https://sparky.invalid/")!
    ) -> ExamPDFDocument {
        pdfDocument(sections: test.sections, imageData: imageData, baseURL: baseURL)
    }

    @MainActor
    static func pdfData(
        sections: [ExamTestSection],
        imageData: [String: Data] = [:],
        baseURL: URL = URL(string: "https://sparky.invalid/")!
    ) -> Data {
        ExamPDFRenderer.render(
            pdfDocument(sections: sections, imageData: imageData, baseURL: baseURL)
        )
    }

    @MainActor
    static func pdfData(
        test: ExamTest,
        imageData: [String: Data] = [:],
        baseURL: URL = URL(string: "https://sparky.invalid/")!
    ) -> Data {
        pdfData(sections: test.sections, imageData: imageData, baseURL: baseURL)
    }

    private static func markdownText(question: ExamQuestion, baseURL: URL) -> String {
        var lines = [
            "## Q\(question.number)",
            "",
            escapeMarkdown(question.prompt)
        ]

        for (index, imageURL) in (question.imageURLs ?? []).enumerated() {
            lines.append("")
            lines.append(
                markdownImage(
                    alt: "Question \(question.number) image \(index + 1)",
                    source: imageURL,
                    baseURL: baseURL
                )
            )
        }

        lines.append("")
        for choice in ExamChoice.allCases {
            lines.append("- **\(choice.rawValue).** \(escapeMarkdown(question.options[choice]))")
            if let imageURL = question.optionImageURLs?[choice] {
                let image = markdownImage(
                    alt: "Question \(question.number) option \(choice.rawValue)",
                    source: imageURL,
                    baseURL: baseURL
                )
                lines.append("  \(image)")
            }
        }

        lines.append("")
        lines.append(
            "**Answer:** **\(question.answer.rawValue).** \(escapeMarkdown(question.options[question.answer]))"
        )
        lines.append("")
        lines.append("**Explanation:** \(escapeMarkdown(question.explanation))")
        return lines.joined(separator: "\n")
    }

    private static func escapeMarkdown(_ value: String) -> String {
        let escapable = Set<Character>(["`", "*", "_", "[", "]", "<", ">"])
        var escaped = ""
        var isLineStart = true

        for character in value {
            if character == "\\" || escapable.contains(character) || (isLineStart && character == "#") {
                escaped.append("\\")
            }
            escaped.append(character)
            isLineStart = character == "\n"
        }

        return escaped
    }

    private static func markdownImage(alt: String, source: String, baseURL: URL) -> String {
        "![\(alt)](<\(resolvedURL(source, relativeTo: baseURL))>)"
    }

    fileprivate static func resolvedURL(_ source: String, relativeTo baseURL: URL) -> String {
        URL(string: source, relativeTo: baseURL)?.absoluteURL.absoluteString ?? source
    }
}

struct ExamPDFDocument: Equatable, Sendable {
    var pageWidth: CGFloat = 595.28
    var pageHeight: CGFloat = 841.89
    var marginLeft: CGFloat = 52
    var marginTop: CGFloat = 50
    var marginRight: CGFloat = 52
    var marginBottom: CGFloat = 48
    let questions: [ExamPDFQuestion]
}

struct ExamPDFQuestion: Equatable, Sendable {
    let number: Int
    let prompt: String
    let images: [ExamPDFImage]
    let options: [ExamPDFOption]
    let answer: ExamChoice
    let explanation: String

    fileprivate init(
        question: ExamQuestion,
        imageData: [String: Data],
        baseURL: URL
    ) {
        number = question.number
        prompt = question.prompt
        images = (question.imageURLs ?? []).map {
            ExamPDFImage(
                source: $0,
                resolvedURL: ExamExport.resolvedURL($0, relativeTo: baseURL),
                data: imageData[$0]
            )
        }
        options = ExamChoice.allCases.map { choice in
            let source = question.optionImageURLs?[choice]
            return ExamPDFOption(
                choice: choice,
                text: question.options[choice],
                image: source.map {
                    ExamPDFImage(
                        source: $0,
                        resolvedURL: ExamExport.resolvedURL($0, relativeTo: baseURL),
                        data: imageData[$0]
                    )
                }
            )
        }
        answer = question.answer
        explanation = question.explanation
    }

    fileprivate var hasImages: Bool {
        !images.isEmpty || options.contains { $0.image != nil }
    }
}

struct ExamPDFOption: Equatable, Sendable {
    let choice: ExamChoice
    let text: String
    let image: ExamPDFImage?
}

struct ExamPDFImage: Equatable, Sendable {
    /// The path exactly as stored in the exam content.
    let source: String
    /// An absolute URL suitable for display when image bytes are unavailable.
    let resolvedURL: String
    /// Optional PNG or JPEG bytes supplied by the caller. No network access is performed.
    let data: Data?
}

@MainActor
enum ExamPDFRenderer {
    static func render(_ document: ExamPDFDocument) -> Data {
        let bounds = CGRect(
            x: 0,
            y: 0,
            width: document.pageWidth,
            height: document.pageHeight
        )
        let format = UIGraphicsPDFRendererFormat()
        format.documentInfo = [
            kCGPDFContextCreator as String: "Sparky",
            kCGPDFContextTitle as String: "Sparky exam export"
        ]

        var measuringLayout = PDFLayout(document: document, context: nil, totalPages: nil)
        let pageCount = measuringLayout.run()
        let renderer = UIGraphicsPDFRenderer(bounds: bounds, format: format)

        return renderer.pdfData { context in
            var drawingLayout = PDFLayout(
                document: document,
                context: context,
                totalPages: pageCount
            )
            _ = drawingLayout.run()
        }
    }
}

@MainActor
private struct PDFLayout {
    let document: ExamPDFDocument
    let context: UIGraphicsPDFRendererContext?
    let totalPages: Int?

    private var pageNumber = 0
    private var y: CGFloat = 0

    init(
        document: ExamPDFDocument,
        context: UIGraphicsPDFRendererContext?,
        totalPages: Int?
    ) {
        self.document = document
        self.context = context
        self.totalPages = totalPages
    }

    private var contentWidth: CGFloat {
        document.pageWidth - document.marginLeft - document.marginRight
    }

    private var contentBottom: CGFloat {
        document.pageHeight - document.marginBottom
    }

    private var contentHeight: CGFloat {
        contentBottom - document.marginTop
    }

    mutating func run() -> Int {
        beginPage()

        for question in document.questions {
            if !question.hasImages {
                let height = estimatedTextOnlyHeight(question)
                if height <= contentHeight, y + height > contentBottom {
                    beginPage()
                }
            }
            draw(question)
        }

        return pageNumber
    }

    private mutating func beginPage() {
        pageNumber += 1
        y = document.marginTop
        context?.beginPage()

        guard let context, let totalPages else { return }
        let footer = attributed(
            "Page \(pageNumber) of \(totalPages)",
            font: .systemFont(ofSize: 8),
            color: PDFColors.muted,
            alignment: .center
        )
        footer.draw(
            in: CGRect(
                x: document.marginLeft,
                y: document.pageHeight - 31,
                width: contentWidth,
                height: 12
            )
        )
        _ = context
    }

    private mutating func ensureSpace(_ height: CGFloat) {
        if y + height > contentBottom, y > document.marginTop {
            beginPage()
        }
    }

    private mutating func draw(_ question: ExamPDFQuestion) {
        let number = attributed(
            "Q\(question.number)",
            font: .boldSystemFont(ofSize: 15),
            color: PDFColors.accent
        )
        let prompt = attributed(
            question.prompt,
            font: .boldSystemFont(ofSize: 11.5),
            color: PDFColors.text,
            lineSpacing: 2.2
        )
        let numberHeight = textHeight(number, width: contentWidth)
        let promptHeight = textHeight(prompt, width: contentWidth)

        ensureSpace(numberHeight + 4 + promptHeight + 10)
        draw(number, x: document.marginLeft, width: contentWidth, height: numberHeight)
        y += 4
        draw(prompt, x: document.marginLeft, width: contentWidth, height: promptHeight)
        y += 10

        for image in question.images {
            draw(image, indent: 0, bottomSpacing: 10)
        }

        for option in question.options {
            let optionText = NSMutableAttributedString(
                string: "\(option.choice.rawValue). ",
                attributes: textAttributes(
                    font: .boldSystemFont(ofSize: 10.5),
                    color: PDFColors.optionLabel
                )
            )
            optionText.append(
                attributed(
                    option.text,
                    font: .systemFont(ofSize: 10.5),
                    color: PDFColors.text,
                    lineSpacing: 1.5
                )
            )
            let optionHeight = textHeight(optionText, width: contentWidth - 10)
            ensureSpace(optionHeight + 5)
            draw(
                optionText,
                x: document.marginLeft + 10,
                width: contentWidth - 10,
                height: optionHeight
            )
            y += 5

            if let image = option.image {
                draw(image, indent: 18, bottomSpacing: 8)
            }
        }

        drawAnswer(for: question)
        y += 22
    }

    private mutating func draw(_ image: ExamPDFImage, indent: CGFloat, bottomSpacing: CGFloat) {
        let availableWidth = min(460, contentWidth - indent)

        if let data = image.data, let uiImage = UIImage(data: data), uiImage.size.width > 0 {
            let widthRatio = availableWidth / uiImage.size.width
            let heightRatio = 220 / max(uiImage.size.height, 1)
            let scale = min(widthRatio, heightRatio, 1)
            let size = CGSize(
                width: uiImage.size.width * scale,
                height: uiImage.size.height * scale
            )
            ensureSpace(size.height + bottomSpacing)
            if let context {
                let x = document.marginLeft + indent + (availableWidth - size.width) / 2
                uiImage.draw(in: CGRect(x: x, y: y, width: size.width, height: size.height))
                _ = context
            }
            y += size.height + bottomSpacing
            return
        }

        let fallback = NSMutableAttributedString(
            string: "Image: ",
            attributes: textAttributes(
                font: .boldSystemFont(ofSize: 8.5),
                color: PDFColors.text
            )
        )
        fallback.append(
            attributed(
                image.resolvedURL,
                font: .systemFont(ofSize: 8.5),
                color: PDFColors.accent,
                underline: true
            )
        )
        let height = textHeight(fallback, width: availableWidth)
        ensureSpace(height + bottomSpacing)
        draw(
            fallback,
            x: document.marginLeft + indent,
            width: availableWidth,
            height: height
        )
        y += bottomSpacing
    }

    private mutating func drawAnswer(for question: ExamPDFQuestion) {
        let answerOption = question.options.first { $0.choice == question.answer }?.text ?? ""
        let answer = NSMutableAttributedString(
            string: "Answer: ",
            attributes: textAttributes(
                font: .boldSystemFont(ofSize: 10.5),
                color: PDFColors.success
            )
        )
        answer.append(
            attributed(
                "\(question.answer.rawValue). \(answerOption)",
                font: .boldSystemFont(ofSize: 10.5),
                color: PDFColors.text
            )
        )
        let explanation = NSMutableAttributedString(
            string: "Explanation: ",
            attributes: textAttributes(
                font: .boldSystemFont(ofSize: 10.5),
                color: PDFColors.text
            )
        )
        explanation.append(
            attributed(
                question.explanation,
                font: .systemFont(ofSize: 10.5),
                color: PDFColors.text,
                lineSpacing: 1.8
            )
        )

        let innerWidth = contentWidth - 20
        let answerHeight = textHeight(answer, width: innerWidth)
        let explanationHeight = textHeight(explanation, width: innerWidth)
        let boxHeight = 9 + answerHeight + 5 + explanationHeight + 9
        ensureSpace(boxHeight + 8)

        if let context {
            let box = CGRect(
                x: document.marginLeft,
                y: y,
                width: contentWidth,
                height: boxHeight
            )
            context.cgContext.setFillColor(PDFColors.answerFill.cgColor)
            context.cgContext.fill(box)
            context.cgContext.setStrokeColor(PDFColors.border.cgColor)
            context.cgContext.setLineWidth(0.8)
            context.cgContext.stroke(box)
        }

        y += 9
        draw(
            answer,
            x: document.marginLeft + 10,
            width: innerWidth,
            height: answerHeight
        )
        y += 5
        draw(
            explanation,
            x: document.marginLeft + 10,
            width: innerWidth,
            height: explanationHeight
        )
        y += 9
    }

    private func estimatedTextOnlyHeight(_ question: ExamPDFQuestion) -> CGFloat {
        let number = attributed(
            "Q\(question.number)",
            font: .boldSystemFont(ofSize: 15),
            color: PDFColors.accent
        )
        let prompt = attributed(
            question.prompt,
            font: .boldSystemFont(ofSize: 11.5),
            color: PDFColors.text,
            lineSpacing: 2.2
        )
        var height = textHeight(number, width: contentWidth)
            + 4
            + textHeight(prompt, width: contentWidth)
            + 10

        for option in question.options {
            let text = attributed(
                "\(option.choice.rawValue). \(option.text)",
                font: .systemFont(ofSize: 10.5),
                color: PDFColors.text,
                lineSpacing: 1.5
            )
            height += textHeight(text, width: contentWidth - 10) + 5
        }

        let answerOption = question.options.first { $0.choice == question.answer }?.text ?? ""
        let answer = attributed(
            "Answer: \(question.answer.rawValue). \(answerOption)",
            font: .boldSystemFont(ofSize: 10.5),
            color: PDFColors.text
        )
        let explanation = attributed(
            "Explanation: \(question.explanation)",
            font: .systemFont(ofSize: 10.5),
            color: PDFColors.text,
            lineSpacing: 1.8
        )
        height += 8
            + 9
            + textHeight(answer, width: contentWidth - 20)
            + 5
            + textHeight(explanation, width: contentWidth - 20)
            + 9
            + 22
        return height
    }

    private mutating func draw(
        _ text: NSAttributedString,
        x: CGFloat,
        width: CGFloat,
        height: CGFloat
    ) {
        guard context != nil else {
            y += height
            return
        }
        text.draw(
            with: CGRect(x: x, y: y, width: width, height: height + 1),
            options: [.usesLineFragmentOrigin, .usesFontLeading],
            context: nil
        )
        y += height
    }

    private func textHeight(_ text: NSAttributedString, width: CGFloat) -> CGFloat {
        ceil(
            text.boundingRect(
                with: CGSize(width: width, height: .greatestFiniteMagnitude),
                options: [.usesLineFragmentOrigin, .usesFontLeading],
                context: nil
            ).height
        )
    }

    private func attributed(
        _ value: String,
        font: UIFont,
        color: UIColor,
        lineSpacing: CGFloat = 0,
        alignment: NSTextAlignment = .left,
        underline: Bool = false
    ) -> NSAttributedString {
        NSAttributedString(
            string: value,
            attributes: textAttributes(
                font: font,
                color: color,
                lineSpacing: lineSpacing,
                alignment: alignment,
                underline: underline
            )
        )
    }

    private func textAttributes(
        font: UIFont,
        color: UIColor,
        lineSpacing: CGFloat = 0,
        alignment: NSTextAlignment = .left,
        underline: Bool = false
    ) -> [NSAttributedString.Key: Any] {
        let paragraph = NSMutableParagraphStyle()
        paragraph.lineSpacing = lineSpacing
        paragraph.alignment = alignment
        var attributes: [NSAttributedString.Key: Any] = [
            .font: font,
            .foregroundColor: color,
            .paragraphStyle: paragraph
        ]
        if underline {
            attributes[.underlineStyle] = NSUnderlineStyle.single.rawValue
        }
        return attributes
    }
}

private enum PDFColors {
    static let text = UIColor(red: 33 / 255, green: 29 / 255, blue: 24 / 255, alpha: 1)
    static let optionLabel = UIColor(red: 52 / 255, green: 39 / 255, blue: 18 / 255, alpha: 1)
    static let muted = UIColor(red: 129 / 255, green: 119 / 255, blue: 101 / 255, alpha: 1)
    static let accent = UIColor(red: 138 / 255, green: 99 / 255, blue: 32 / 255, alpha: 1)
    static let success = UIColor(red: 49 / 255, green: 92 / 255, blue: 69 / 255, alpha: 1)
    static let answerFill = UIColor(red: 247 / 255, green: 243 / 255, blue: 233 / 255, alpha: 1)
    static let border = UIColor(red: 217 / 255, green: 204 / 255, blue: 178 / 255, alpha: 1)
}
