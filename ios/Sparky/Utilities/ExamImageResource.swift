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

    // Decoded images are cached so SwiftUI body re-evaluations do not repeat the
    // bundle lookups and disk read. NSCache evicts under memory pressure.
    private static let imageCache = NSCache<NSString, UIImage>()

    static func image(for path: String, bundle: Bundle = .main) -> UIImage? {
        let key = "\(bundle.bundlePath)|\(path)" as NSString
        if let cached = imageCache.object(forKey: key) { return cached }
        guard let url = url(for: path, bundle: bundle),
              let image = UIImage(contentsOfFile: url.path) else { return nil }
        imageCache.setObject(image, forKey: key)
        return image
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
