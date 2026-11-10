import UIKit
import XCTest
@testable import Sparky

final class ExamImageResourceTests: XCTestCase {
    func testImageIsDecodedOnceAndReused() throws {
        let bundleURL = FileManager.default.temporaryDirectory
            .appendingPathComponent("ExamImageResourceTests-\(UUID().uuidString).bundle")
        let imagesURL = bundleURL.appendingPathComponent("exam-images")
        try FileManager.default.createDirectory(at: imagesURL, withIntermediateDirectories: true)
        defer { try? FileManager.default.removeItem(at: bundleURL) }

        let png = UIGraphicsImageRenderer(size: CGSize(width: 4, height: 4)).pngData { context in
            UIColor.red.setFill()
            context.fill(CGRect(x: 0, y: 0, width: 4, height: 4))
        }
        try png.write(to: imagesURL.appendingPathComponent("cached.png"))

        let bundle = try XCTUnwrap(Bundle(url: bundleURL))
        let first = try XCTUnwrap(ExamImageResource.image(for: "images/cached.png", bundle: bundle))
        let second = try XCTUnwrap(ExamImageResource.image(for: "images/cached.png", bundle: bundle))
        XCTAssertTrue(first === second)
    }

    func testMissingImageReturnsNil() throws {
        XCTAssertNil(ExamImageResource.image(for: "images/does-not-exist.png", bundle: Bundle(for: Self.self)))
    }
}
