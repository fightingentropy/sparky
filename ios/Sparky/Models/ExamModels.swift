import Foundation

enum ExamChoice: String, Codable, CaseIterable, Hashable, Identifiable, Sendable {
    case a = "A"
    case b = "B"
    case c = "C"
    case d = "D"

    var id: String { rawValue }
}

struct ExamOptions: Codable, Hashable, Sendable {
    let a: String
    let b: String
    let c: String
    let d: String

    subscript(choice: ExamChoice) -> String {
        switch choice {
        case .a: a
        case .b: b
        case .c: c
        case .d: d
        }
    }

    var ordered: [(choice: ExamChoice, text: String)] {
        ExamChoice.allCases.map { ($0, self[$0]) }
    }

    private enum CodingKeys: String, CodingKey {
        case a = "A"
        case b = "B"
        case c = "C"
        case d = "D"
    }
}

struct ExamOptionImages: Codable, Hashable, Sendable {
    let a: String?
    let b: String?
    let c: String?
    let d: String?

    subscript(choice: ExamChoice) -> String? {
        switch choice {
        case .a: a
        case .b: b
        case .c: c
        case .d: d
        }
    }

    private enum CodingKeys: String, CodingKey {
        case a = "A"
        case b = "B"
        case c = "C"
        case d = "D"
    }
}

enum ExamOptionFeedbackKind: String, Codable, CaseIterable, Hashable, Sendable {
    case correct
    case reviewed
    case derived
    case fallback
}

struct ExamOptionFeedback: Codable, Hashable, Sendable {
    let text: String
    let kind: ExamOptionFeedbackKind
}

struct ExamOptionFeedbackMap: Codable, Hashable, Sendable {
    let a: ExamOptionFeedback
    let b: ExamOptionFeedback
    let c: ExamOptionFeedback
    let d: ExamOptionFeedback

    subscript(choice: ExamChoice) -> ExamOptionFeedback {
        switch choice {
        case .a: a
        case .b: b
        case .c: c
        case .d: d
        }
    }

    var ordered: [(choice: ExamChoice, feedback: ExamOptionFeedback)] {
        ExamChoice.allCases.map { ($0, self[$0]) }
    }

    private enum CodingKeys: String, CodingKey {
        case a = "A"
        case b = "B"
        case c = "C"
        case d = "D"
    }
}

enum ExamSolutionSourceStatus: String, Codable, Hashable, Sendable {
    case verified
    case sourceCitation = "source-citation"
}

struct ExamSolutionSource: Codable, Hashable, Sendable {
    let publication: String
    let edition: String
    let locator: String
    let url: URL?
    let licence: String
    let status: ExamSolutionSourceStatus
    let verifiedOn: String?
}

struct ExamSolutionTable: Codable, Hashable, Sendable {
    let title: String
    let columns: [String]
    let rows: [[String]]
    let source: ExamSolutionSource
    let note: String?
}

struct ExamQuestion: Codable, Hashable, Identifiable, Sendable {
    let number: Int
    let prompt: String
    let imageURLs: [String]?
    let options: ExamOptions
    let optionImageURLs: ExamOptionImages?
    let answer: ExamChoice
    let explanation: String
    let solutionTables: [ExamSolutionTable]?
    let preserveChoices: Bool?
    let optionFeedback: ExamOptionFeedbackMap

    var id: Int { number }

    private enum CodingKeys: String, CodingKey {
        case number
        case prompt
        case imageURLs = "imageUrls"
        case options
        case optionImageURLs = "optionImageUrls"
        case answer
        case explanation
        case solutionTables
        case preserveChoices
        case optionFeedback
    }
}

struct ExamTestSection: Codable, Hashable, Identifiable, Sendable {
    let id: String
    let title: String
    let sourceVariantID: String
    let questions: [ExamQuestion]

    private enum CodingKeys: String, CodingKey {
        case id
        case title
        case sourceVariantID = "sourceVariantId"
        case questions
    }
}

struct ExamTest: Codable, Hashable, Identifiable, Sendable {
    let id: String
    let index: Int
    let title: String
    let questionCount: Int
    let sections: [ExamTestSection]

    var questions: [ExamQuestion] {
        sections.flatMap(\.questions)
    }
}

struct ScoringBand: Codable, Hashable, Sendable {
    let threshold: Double
    let label: String
}

struct Exam: Codable, Hashable, Identifiable, Sendable {
    let id: String
    let title: String
    let subtitle: String
    let description: String
    let format: String
    let passPercent: Double
    let scoring: [ScoringBand]
    let priorities: [String]
    let tests: [ExamTest]

    func test(id: String) -> ExamTest? {
        tests.first { $0.id == id }
    }

    func scoringBand(for percentage: Double) -> ScoringBand? {
        scoring
            .sorted { $0.threshold > $1.threshold }
            .first { percentage >= $0.threshold }
    }
}
