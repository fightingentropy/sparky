import CryptoKit
import Foundation
import Observation

enum ContentStoreError: Error, LocalizedError {
    case resourceNotFound(String)
    case resourceUnreadable(String, Error)
    case resourceInvalid(String, Error)
    case invalidCatalog(String)
    case invalidManifest(String)
    case checksumMismatch(String)
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
        case .invalidManifest(let reason):
            "The content manifest is inconsistent: \(reason)"
        case .checksumMismatch(let path):
            "The bundled content resource \(path) failed its integrity check."
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
    let manifest: ContentManifest
    let catalog: ExamCatalog
    let notes: [CheatSheetSection]
    let guides: [CourseGuide]
    let tutorials: [Tutorial]
    let calculators: [CalculatorDefinition]

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
        manifest = try loader.decode(ContentManifest.self, at: "content-manifest.json")
        guard manifest.schemaVersion == 1 else {
            throw ContentStoreError.invalidManifest(
                "unsupported manifest schema \(manifest.schemaVersion)"
            )
        }
        guard manifest.contentSchemaVersion == 3 else {
            throw ContentStoreError.invalidManifest(
                "unsupported content schema \(manifest.contentSchemaVersion)"
            )
        }
        try loader.validate(manifest: manifest)
        catalog = try loader.decodeVerified(
            ExamCatalog.self,
            at: "exam-index.json",
            manifest: manifest
        )
        notes = try loader.decodeVerified(
            [CheatSheetSection].self,
            at: "cheat-sheet.json",
            manifest: manifest
        )
        guides = try loader.decodeVerified(
            [CourseGuide].self,
            at: "course-guides.json",
            manifest: manifest
        )
        tutorials = try loader.decodeVerified(
            [Tutorial].self,
            at: "tutorials.json",
            manifest: manifest
        )
        calculators = try loader.decodeVerified(
            [CalculatorDefinition].self,
            at: "calculators.json",
            manifest: manifest
        )

        guard catalog.examCount == catalog.exams.count else {
            throw ContentStoreError.invalidCatalog(
                "examCount is \(catalog.examCount), but \(catalog.exams.count) entries were decoded"
            )
        }

        let examIDs = catalog.exams.map(\.id)
        guard Set(examIDs).count == examIDs.count else {
            throw ContentStoreError.invalidCatalog("exam ids are not unique")
        }

        let expectedPaths = Set(
            [
                "calculators.json",
                "cheat-sheet.json",
                "course-guides.json",
                "exam-index.json",
                "tutorials.json"
            ] + examIDs.map { "exams/\($0).json" }
        )
        let manifestPaths = Set(manifest.files.map(\.path))
        guard manifestPaths == expectedPaths else {
            let missing = expectedPaths.subtracting(manifestPaths).sorted()
            let unexpected = manifestPaths.subtracting(expectedPaths).sorted()
            throw ContentStoreError.invalidManifest(
                "file set differs; missing=\(missing), unexpected=\(unexpected)"
            )
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

    func calculator(id: String) -> CalculatorDefinition? {
        calculators.first { $0.id == id }
    }

    func loadExam(id: String) throws -> Exam {
        guard catalog.exam(id: id) != nil else {
            throw ContentStoreError.unknownExam(id)
        }
        if let cached = cachedExams[id] {
            return cached
        }

        let exam = try loader.decodeVerified(
            Exam.self,
            at: "exams/\(id).json",
            manifest: manifest
        )
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
        let data = try data(at: relativePath)

        return try decode(type, from: data, at: relativePath)
    }

    func decodeVerified<Value: Decodable>(
        _ type: Value.Type,
        at relativePath: String,
        manifest: ContentManifest
    ) throws -> Value {
        guard let record = manifest.files.first(where: { $0.path == relativePath }) else {
            throw ContentStoreError.invalidManifest("missing file record for \(relativePath)")
        }
        let data = try data(at: relativePath)
        guard data.count == record.bytes, Self.sha256(data) == record.sha256 else {
            throw ContentStoreError.checksumMismatch(relativePath)
        }

        return try decode(type, from: data, at: relativePath)
    }

    private func decode<Value: Decodable>(
        _ type: Value.Type,
        from data: Data,
        at relativePath: String
    ) throws -> Value {

        do {
            return try decoder.decode(type, from: data)
        } catch {
            throw ContentStoreError.resourceInvalid(relativePath, error)
        }
    }

    func validate(manifest: ContentManifest) throws {
        let paths = manifest.files.map(\.path)
        guard Set(paths).count == paths.count else {
            throw ContentStoreError.invalidManifest("file paths are not unique")
        }

        let sortedFiles = manifest.files.sorted { $0.path < $1.path }
        guard paths == sortedFiles.map(\.path) else {
            throw ContentStoreError.invalidManifest("file paths are not sorted")
        }

        var aggregate = Data()
        for file in sortedFiles {
            let components = file.path.split(separator: "/", omittingEmptySubsequences: false)
            guard !file.path.hasPrefix("/"), !components.contains(".."), !components.contains("") else {
                throw ContentStoreError.invalidManifest("unsafe file path \(file.path)")
            }

            guard file.bytes >= 0, file.sha256.range(of: "^[0-9a-f]{64}$", options: .regularExpression) != nil else {
                throw ContentStoreError.invalidManifest("invalid file record for \(file.path)")
            }
            aggregate.append(Data("\(file.path)\0\(file.sha256)\n".utf8))
        }

        guard Self.sha256(aggregate) == manifest.contentHash else {
            throw ContentStoreError.invalidManifest("content hash does not match its file records")
        }
    }

    private func data(at relativePath: String) throws -> Data {
        let url = try resourceURL(relativePath: relativePath)
        do {
            return try Data(contentsOf: url, options: [.mappedIfSafe])
        } catch {
            throw ContentStoreError.resourceUnreadable(relativePath, error)
        }
    }

    private static func sha256(_ data: Data) -> String {
        SHA256.hash(data: data).map { String(format: "%02x", $0) }.joined()
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
