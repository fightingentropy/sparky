import UIKit
import XCTest
@testable import Sparky

final class TypographyTests: XCTestCase {
    func testEveryBundledGeistFaceRegistersAndResolves() {
        XCTAssertTrue(SparkyFonts.registerAll())
        // Safe to call twice.
        XCTAssertTrue(SparkyFonts.registerAll())

        for name in SparkyFonts.postScriptNames {
            let font = UIFont(name: name, size: 17)
            XCTAssertNotNil(font, "\(name) did not resolve via UIFont(name:size:)")
            XCTAssertEqual(font?.fontName, name)
        }
    }

    func testFamilyNamesAreAvailable() {
        SparkyFonts.registerAll()
        let families = Set(UIFont.familyNames)
        for family in [SparkyFonts.sans, SparkyFonts.mono, SparkyFonts.serif] {
            XCTAssertTrue(families.contains(family), "\(family) family missing")
        }
    }
}
