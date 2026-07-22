import Foundation
import Observation

enum ContentStoreError: Error, LocalizedError {
    case resourceNotFound(String)
    case resourceUnreadable(String, Error)
    case resourceInvalid(String, Error)
    case invalidCatalog(String)
    case unknownExam(String)
    case examIdentifierMismatch(requested: String, decoded: String)

    var errorDescription: String? {
        switch self {
        case .resourceNotFound(let path):
            "The bundled content resource \(path) could not be found."
        case .resourceUnreadable(let path, let error):
            "The content resource \(path) could not be read: \(error.localizedDescription)"
        case .resourceInvalid(let path, let error):
            "The content resource \(path) is invalid: \(error.localizedDescription)"
        case .invalidCatalog(let reason):
            "The exam catalog is inconsistent: \(reason)"
        case .unknownExam(let id):
            "The exam catalog does not contain an exam with id \(id)."
        case .examIdentifierMismatch(let requested, let decoded):
            "Requested exam \(requested), but the resource contains \(decoded)."
        }
    }
}

@MainActor
@Observable
final class ContentStore {
    let catalog: ExamCatalog
    let notes: [CheatSheetSection]
    let guides: [CourseGuide]
    let tutorials: [Tutorial]

    @ObservationIgnored private let loader: ContentResourceLoader
    @ObservationIgnored private var cachedExams: [String: Exam] = [:]

    convenience init(bundle: Bundle = .main) throws {
        try self.init(loader: ContentResourceLoader(bundle: bundle))
    }

    /// Useful for previews, tests, and tooling that reads an exported Content directory directly.
    convenience init(contentDirectory: URL) throws {
        try self.init(loader: ContentResourceLoader(contentDirectory: contentDirectory))
    }

    private init(loader: ContentResourceLoader) throws {
        self.loader = loader
        catalog = try loader.decode(ExamCatalog.self, at: "exam-index.json")
        notes = try loader.decode([CheatSheetSection].self, at: "cheat-sheet.json")
        guides = try loader.decode([CourseGuide].self, at: "course-guides.json")
        tutorials = try loader.decode([Tutorial].self, at: "tutorials.json")

        guard catalog.examCount == catalog.exams.count else {
            throw ContentStoreError.invalidCatalog(
                "examCount is \(catalog.examCount), but \(catalog.exams.count) entries were decoded"
            )
        }

        let examIDs = catalog.exams.map(\.id)
        guard Set(examIDs).count == examIDs.count else {
            throw ContentStoreError.invalidCatalog("exam ids are not unique")
        }
    }

    func examIndex(id: String) -> ExamIndexEntry? {
        catalog.exam(id: id)
    }

    func note(id: String) -> CheatSheetSection? {
        notes.first { $0.id == id }
    }

    func guide(id: String) -> CourseGuide? {
        guides.first { $0.id == id }
    }

    func tutorial(id: String) -> Tutorial? {
        tutorials.first { $0.id == id }
    }

    func loadExam(id: String) throws -> Exam {
        guard catalog.exam(id: id) != nil else {
            throw ContentStoreError.unknownExam(id)
        }
        if let cached = cachedExams[id] {
            return cached
        }

        let exam = try loader.decode(Exam.self, at: "exams/\(id).json")
        guard exam.id == id else {
            throw ContentStoreError.examIdentifierMismatch(requested: id, decoded: exam.id)
        }
        cachedExams[id] = exam
        return exam
    }
}

private struct ContentResourceLoader {
    private enum Source {
        case bundle(Bundle)
        case directory(URL)
    }

    private let source: Source
    private let decoder = JSONDecoder()

    init(bundle: Bundle) {
        source = .bundle(bundle)
    }

    init(contentDirectory: URL) {
        source = .directory(contentDirectory)
    }

    func decode<Value: Decodable>(_ type: Value.Type, at relativePath: String) throws -> Value {
        let url = try resourceURL(relativePath: relativePath)
        let data: Data
        do {
            data = try Data(contentsOf: url, options: [.mappedIfSafe])
        } catch {
            throw ContentStoreError.resourceUnreadable(relativePath, error)
        }

        do {
            return try decoder.decode(type, from: data)
        } catch {
            throw ContentStoreError.resourceInvalid(relativePath, error)
        }
    }

    private func resourceURL(relativePath: String) throws -> URL {
        switch source {
        case .directory(let directory):
            let url = directory.appendingPathComponent(relativePath)
            guard FileManager.default.fileExists(atPath: url.path) else {
                throw ContentStoreError.resourceNotFound(relativePath)
            }
            return url

        case .bundle(let bundle):
            if let url = bundledURL(relativePath: relativePath, bundle: bundle) {
                return url
            }
            throw ContentStoreError.resourceNotFound(relativePath)
        }
    }

    private func bundledURL(relativePath: String, bundle: Bundle) -> URL? {
        let relativePathValue = relativePath as NSString
        let fileExtension = relativePathValue.pathExtension
        let fileName = (relativePathValue.lastPathComponent as NSString).deletingPathExtension
        let nestedDirectory = relativePathValue.deletingLastPathComponent

        let subdirectories = [
            nestedDirectory.isEmpty ? "Content" : "Content/\(nestedDirectory)",
            nestedDirectory.isEmpty ? "Resources/Content" : "Resources/Content/\(nestedDirectory)"
        ]

        for subdirectory in subdirectories {
            if let url = bundle.url(
                forResource: fileName,
                withExtension: fileExtension,
                subdirectory: subdirectory
            ) {
                return url
            }
        }

        if let resourceURL = bundle.resourceURL {
            for prefix in ["Content", "Resources/Content"] {
                let candidate = resourceURL
                    .appendingPathComponent(prefix, isDirectory: true)
                    .appendingPathComponent(relativePath)
                if FileManager.default.fileExists(atPath: candidate.path) {
                    return candidate
                }
            }
        }

        // Xcode may flatten group-backed resources into the bundle root.
        return bundle.url(forResource: fileName, withExtension: fileExtension)
    }
}
