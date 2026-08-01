import Foundation

enum ContentSourceClassification: String, Codable, Hashable, Sendable {
    case law
    case standard
    case guidance
    case examConvention = "exam-convention"
}

struct ContentSource: Codable, Hashable, Identifiable, Sendable {
    let id: String
    let classification: ContentSourceClassification
    let documentIdentifier: String
    let edition: String
    let recordedOn: String
    let locator: String
    let sourceURL: URL?
    let limitations: String?

    private enum CodingKeys: String, CodingKey {
        case id
        case classification
        case documentIdentifier
        case edition
        case recordedOn
        case locator
        case sourceURL = "sourceUrl"
        case limitations
    }
}

struct CalculatorDefinition: Codable, Hashable, Identifiable, Sendable {
    let id: String
    let algorithmVersion: Int
    let units: [String]
    let precision: String
    let roundingRule: String
    let source: ContentSource
}

struct ContentManifestFile: Codable, Hashable, Sendable {
    let path: String
    let bytes: Int
    let sha256: String
}

struct ContentManifest: Codable, Hashable, Sendable {
    let schemaVersion: Int
    let contentSchemaVersion: Int
    let contentHash: String
    let files: [ContentManifestFile]
}

enum GuideCategory: String, Codable, CaseIterable, Hashable, Sendable {
    case route
    case qualification
    case assessment
    case reference
}

struct GuideFact: Codable, Hashable, Sendable {
    let label: String
    let value: String
}

struct GuideNoteLink: Codable, Hashable, Identifiable, Sendable {
    let noteID: String
    let label: String

    var id: String { noteID }

    private enum CodingKeys: String, CodingKey {
        case noteID = "noteId"
        case label
    }
}

struct GuideSection: Codable, Hashable, Sendable {
    let title: String
    let items: [String]
}

struct CourseGuide: Codable, Hashable, Identifiable, Sendable {
    let id: String
    let title: String
    let kicker: String
    let category: GuideCategory
    let summary: String
    let examID: String?
    let examLabel: String?
    let noteLinks: [GuideNoteLink]?
    let facts: [GuideFact]
    let sections: [GuideSection]
    let pitfalls: [String]
    let nextActions: [String]

    private enum CodingKeys: String, CodingKey {
        case id
        case title
        case kicker
        case category
        case summary
        case examID = "examId"
        case examLabel
        case noteLinks
        case facts
        case sections
        case pitfalls
        case nextActions
    }
}

struct Tutorial: Codable, Hashable, Identifiable, Sendable {
    let id: String
    let videoID: String
    let title: String
    let channel: String
    let sourceURL: URL
    let category: String
    let workplaceUse: String
    let practiceFocus: [String]

    private enum CodingKeys: String, CodingKey {
        case id
        case videoID = "videoId"
        case title
        case channel
        case sourceURL = "sourceUrl"
        case category
        case workplaceUse
        case practiceFocus
    }
}

enum LegendSwatch: Codable, Hashable, Sendable {
    case color(String)
    case colors([String])

    var values: [String] {
        switch self {
        case .color(let value): [value]
        case .colors(let values): values
        }
    }

    init(from decoder: Decoder) throws {
        let container = try decoder.singleValueContainer()
        if let color = try? container.decode(String.self) {
            self = .color(color)
            return
        }
        self = .colors(try container.decode([String].self))
    }

    func encode(to encoder: Encoder) throws {
        var container = encoder.singleValueContainer()
        switch self {
        case .color(let color):
            try container.encode(color)
        case .colors(let colors):
            try container.encode(colors)
        }
    }
}

enum LegendSwatchStyle: String, Codable, CaseIterable, Hashable, Sendable {
    case solid
    case stripe
    case ladder
    case x
    case outline
    case box
}

struct LegendItem: Codable, Hashable, Sendable {
    let label: String
    let swatch: LegendSwatch?
    let swatchStyle: LegendSwatchStyle?
    let swatchExtra: String?
}

struct ReferenceTable: Codable, Hashable, Sendable {
    let title: String
    let headers: [String]
    let rows: [[String]]
}

struct CheatSheetSection: Codable, Hashable, Identifiable, Sendable {
    let id: String
    let title: String
    let summary: String
    let items: [String]
    let legend: [LegendItem]?
    let tables: [ReferenceTable]?
}

struct ExamCatalog: Codable, Hashable, Sendable {
    let schemaVersion: Int
    let examCount: Int
    let variantCount: Int
    let questionCount: Int
    let exams: [ExamIndexEntry]

    func exam(id: String) -> ExamIndexEntry? {
        exams.first { $0.id == id }
    }
}

struct ExamIndexEntry: Codable, Hashable, Identifiable, Sendable {
    let id: String
    let title: String
    let subtitle: String
    let description: String
    let format: String
    let passPercent: Double
    let scoring: [ScoringBand]
    let priorities: [String]
    let variantCount: Int
    let testCount: Int
    let questionCount: Int
    let tests: [ExamTestSummary]

    func test(id: String) -> ExamTestSummary? {
        tests.first { $0.id == id }
    }
}

struct ExamTestSummary: Codable, Hashable, Identifiable, Sendable {
    let id: String
    let index: Int
    let title: String
    let sectionCount: Int
    let questionCount: Int
    let sections: [ExamTestSectionSummary]
}

struct ExamTestSectionSummary: Codable, Hashable, Identifiable, Sendable {
    let id: String
    let title: String
    let questionCount: Int
}
