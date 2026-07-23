import Foundation
import UIKit

enum ExamImageResource {
    static func url(for path: String, bundle: Bundle = .main) -> URL? {
        let normalized = path.removingPercentEncoding ?? path
        let fileName = URL(fileURLWithPath: normalized).lastPathComponent
        let base = (fileName as NSString).deletingPathExtension
        let fileExtension = (fileName as NSString).pathExtension

        return [
            bundle.url(forResource: base, withExtension: fileExtension, subdirectory: "exam-images"),
            bundle.url(forResource: base, withExtension: fileExtension)
        ]
        .compactMap { $0 }
        .first
    }

    static func image(for path: String, bundle: Bundle = .main) -> UIImage? {
        guard let url = url(for: path, bundle: bundle) else { return nil }
        return UIImage(contentsOfFile: url.path)
    }

    static func data(for path: String, bundle: Bundle = .main) -> Data? {
        guard let url = url(for: path, bundle: bundle) else { return nil }
        return try? Data(contentsOf: url, options: [.mappedIfSafe])
    }

    static func data(for test: ExamTest, bundle: Bundle = .main) -> [String: Data] {
        let paths = Set(test.questions.flatMap { question in
            (question.imageURLs ?? []) + ExamChoice.allCases.compactMap { question.optionImageURLs?[$0] }
        })

        return paths.reduce(into: [String: Data]()) { result, path in
            if let imageData = data(for: path, bundle: bundle) {
                result[path] = imageData
            }
        }
    }
}
