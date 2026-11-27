import Foundation

enum ContentSourceClassification: String, Codable, Hashable, Sendable {
    case law
    case standard
    case guidance
    case examConvention = "exam-convention"
}

enum ContentSourceHashScope: String, Codable, Hashable, Sendable {
    case repositoryFile = "repository-file"
    case citationRecord = "citation-record"
    case provenanceRecord = "provenance-record"
}

struct ContentSource: Codable, Hashable, Identifiable, Sendable {
    let id: String
    let classification: ContentSourceClassification
    let jurisdiction: String
    let documentIdentifier: String
    let edition: String
    let amendment: String
    let effectiveDate: String
    let recordedOn: String
    let locator: String
    let sectionOrTable: String
    let profileVersion: String
    let contentVersion: String
    let sourceHash: String
    let sourceHashScope: ContentSourceHashScope
    let needsLicensedConfirmation: Bool
    let needsEditorialConfirmation: Bool
    let sourceURL: URL?
    let limitations: String?

    private enum CodingKeys: String, CodingKey {
        case id
        case classification
        case jurisdiction
        case documentIdentifier
        case edition
        case amendment
        case effectiveDate
        case recordedOn
        case locator
        case sectionOrTable
        case profileVersion
        case contentVersion
        case sourceHash
        case sourceHashScope
        case needsLicensedConfirmation
        case needsEditorialConfirmation
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
    let additionalSources: [ContentSource]?
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

// MARK: - Learn roadmap

enum LearnNodeKind: String, Codable, Hashable, Sendable {
    case topic
    case subtopic
    case exam
}

enum LearnSide: String, Codable, Hashable, Sendable {
    case left
    case right
}

/// How far a learner has got with a topic or subtopic. "Not started" is the absence of a status.
enum LearnStatus: String, Codable, CaseIterable, Hashable, Sendable {
    case learning
    case done
}

/// A subtopic (cream node) or practice-exam link (blue node) hanging off a core topic.
struct LearnBranch: Codable, Hashable, Identifiable, Sendable {
    let id: String
    let kind: LearnNodeKind
    let side: LearnSide
    let title: String
    let summary: String
    let points: [String]
    let watchFor: [String]
    let noteIDs: [String]
    let examIDs: [String]

    private enum CodingKeys: String, CodingKey {
        case id
        case kind
        case side
        case title
        case summary
        case points
        case watchFor
        case noteIDs = "noteIds"
        case examIDs = "examIds"
    }
}

/// A core topic (yellow node on the spine) and its branches.
struct LearnTopic: Codable, Hashable, Identifiable, Sendable {
    let id: String
    let kind: LearnNodeKind
    let title: String
    let summary: String
    let points: [String]
    let watchFor: [String]
    let noteIDs: [String]
    let examIDs: [String]
    let branches: [LearnBranch]

    var leftBranches: [LearnBranch] { branches.filter { $0.side == .left } }
    var rightBranches: [LearnBranch] { branches.filter { $0.side == .right } }

    private enum CodingKeys: String, CodingKey {
        case id
        case kind
        case title
        case summary
        case points
        case watchFor
        case noteIDs = "noteIds"
        case examIDs = "examIds"
        case branches
    }
}

struct LearnStage: Codable, Hashable, Identifiable, Sendable {
    let id: String
    let title: String
    let summary: String
    let topics: [LearnTopic]

    /// Topics and subtopics, in roadmap order. Exam nodes only open an exam, so they carry no progress.
    var trackableNodeIDs: [String] {
        topics.flatMap { topic in
            [topic.id] + topic.branches.filter { $0.kind != .exam }.map(\.id)
        }
    }
}

struct LearnRoadmap: Codable, Hashable, Sendable {
    let title: String
    let summary: String
    let stages: [LearnStage]

    var trackableNodeIDs: [String] {
        stages.flatMap(\.trackableNodeIDs)
    }
}

/// One node of the roadmap with where it sits: its stage (1-based number) and topic.
/// `branch` is nil when the node is the topic itself.
struct LearnNodeLocation: Identifiable, Sendable {
    let stageNumber: Int
    let stage: LearnStage
    let topic: LearnTopic
    let branch: LearnBranch?

    var id: String { branch?.id ?? topic.id }
    var kind: LearnNodeKind { branch?.kind ?? topic.kind }
    var title: String { branch?.title ?? topic.title }
    var summary: String { branch?.summary ?? topic.summary }
    var points: [String] { branch?.points ?? topic.points }
    var watchFor: [String] { branch?.watchFor ?? topic.watchFor }
    var noteIDs: [String] { branch?.noteIDs ?? topic.noteIDs }
    var examIDs: [String] { branch?.examIDs ?? topic.examIDs }
    var isTrackable: Bool { kind != .exam }
}
