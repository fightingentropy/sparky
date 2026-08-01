import XCTest
@testable import Sparky

final class CalculatorEngineTests: XCTestCase {
    typealias Engine = CalculatorEngine

    // MARK: - Shared formatting and defaults

    func testFormatNumberMatchesWebPrecisionAndTrailingZeroRules() {
        XCTAssertEqual(Engine.formatNumber(12.345), "12.35")
        XCTAssertEqual(Engine.formatNumber(1.005), "1")
        XCTAssertEqual(Engine.formatNumber(2.675), "2.67")
        XCTAssertEqual(Engine.formatNumber(365), "365")
        XCTAssertEqual(Engine.formatNumber(100.7), "100.7")
        XCTAssertEqual(Engine.formatNumber(10.50), "10.5")
        XCTAssertEqual(Engine.formatNumber(.nan), "--")
        XCTAssertEqual(Engine.formatNumber(.infinity), "--")
        XCTAssertEqual(Engine.formatMeasure(365, unit: "mm"), "365 mm")
    }

    func testNativeDefaultsMatchTheVisibleWebCalculators() {
        let rod = Engine.Defaults.containmentRod
        XCTAssertEqual(rod.overallHeight, "3165")
        XCTAssertEqual(rod.topOfUnistrut, "2900")
        XCTAssertEqual(rod.buffer, "100")
        XCTAssertEqual(rod.unistrutDepth, "40")

        let unistrut = Engine.Defaults.unistrutLength
        XCTAssertEqual(unistrut.containments.map(\.width), ["225", "125", "100"])
        XCTAssertEqual(unistrut.leftAllowance, "50")
        XCTAssertEqual(unistrut.rightAllowance, "50")
        XCTAssertEqual(unistrut.gap, "50")

        XCTAssertEqual(Engine.Defaults.containmentBendCut.bendAngle, "90")
        XCTAssertEqual(Engine.Defaults.containmentBendCut.cuts, "1")
        XCTAssertEqual(Engine.Defaults.containmentBendCut.width, "100")

        let angle = Engine.Defaults.angleDrop
        XCTAssertEqual(angle.drop, "10")
        XCTAssertEqual(angle.angle, "45")
        XCTAssertEqual(angle.unit, "cm")
        XCTAssertEqual(angle.bendHeight, "5")
    }

    // MARK: - Containment rod

    func testContainmentRodCalculatesDefaultJob() {
        let result = Engine.containmentRod(Engine.Defaults.containmentRod)

        XCTAssertNil(result.validationMessage)
        XCTAssertEqual(result.actualDropValue, "265 mm")
        XCTAssertEqual(result.rodCutLengthValue, "365 mm")
        XCTAssertEqual(result.bottomOfUnistrutDropValue, "305 mm")
    }

    func testContainmentRodUsesDefaultDepthWhenFieldIsBlank() {
        let result = Engine.containmentRod(
            overallHeight: "3165",
            topOfUnistrut: "2900",
            buffer: "100",
            unistrutDepth: "   "
        )

        XCTAssertEqual(result.bottomOfUnistrutDropValue, "305 mm")
    }

    func testContainmentRodReportsTopAboveOverallHeight() {
        let result = Engine.containmentRod(
            overallHeight: "2000",
            topOfUnistrut: "3000",
            buffer: "100",
            unistrutDepth: "40"
        )

        XCTAssertEqual(
            result.validationMessage,
            "Height to top of Unistrut cannot be more than overall height."
        )
        XCTAssertEqual(result.rodCutLengthValue, "-- mm")
    }

    func testContainmentRodReturnsPlaceholdersForIncompleteOrNegativeInput() {
        let incomplete = Engine.containmentRod(
            overallHeight: "",
            topOfUnistrut: "",
            buffer: "",
            unistrutDepth: ""
        )
        XCTAssertNil(incomplete.validationMessage)
        XCTAssertEqual(incomplete.actualDropValue, "-- mm")

        let negative = Engine.containmentRod(
            overallHeight: "100",
            topOfUnistrut: "50",
            buffer: "-1",
            unistrutDepth: "40"
        )
        XCTAssertNil(negative.validationMessage)
        XCTAssertEqual(negative.rodCutLengthValue, "-- mm")
    }

    func testInputsAcceptTheSameNumericPrefixStyleAsJavaScriptParseFloat() {
        let result = Engine.containmentRod(
            overallHeight: "3165 mm",
            topOfUnistrut: "2900 mm",
            buffer: "100 extra",
            unistrutDepth: "40 mm"
        )

        XCTAssertEqual(result.rodCutLengthValue, "365 mm")
    }

    // MARK: - Unistrut length

    func testUnistrutLengthCalculatesDefaultLayout() {
        let result = Engine.unistrutLength(Engine.Defaults.unistrutLength)

        XCTAssertNil(result.validationMessage)
        XCTAssertEqual(result.totalContainmentWidthValue, "450 mm")
        XCTAssertEqual(result.totalSideAllowanceValue, "100 mm")
        XCTAssertEqual(result.totalGapAllowanceValue, "100 mm")
        XCTAssertEqual(result.exactLengthValue, "650 mm")
        XCTAssertEqual(result.finalLengthValue, "650 mm")
        XCTAssertEqual(result.gapLabel, "2 gaps")
    }

    func testUnistrutLengthRoundsUpToNextFiftyMillimetres() {
        let result = Engine.unistrutLength(
            containments: [.init(id: 1, label: "Tray", width: "230")],
            leftAllowance: "50",
            rightAllowance: "50",
            gap: "50"
        )

        XCTAssertEqual(result.exactLengthValue, "330 mm")
        XCTAssertEqual(result.finalLengthValue, "350 mm")
        XCTAssertEqual(result.gapLabel, "0 gaps")
    }

    func testUnistrutLengthValidatesEmptyAndNegativeLayouts() {
        let empty = Engine.unistrutLength(
            containments: [],
            leftAllowance: "50",
            rightAllowance: "50",
            gap: "50"
        )
        XCTAssertEqual(empty.validationMessage, "Add at least one containment.")
        XCTAssertEqual(empty.gapLabel, "0 gaps")

        let negative = Engine.unistrutLength(
            containments: [.init(id: 1, label: "Tray", width: "225")],
            leftAllowance: "50",
            rightAllowance: "50",
            gap: "-10"
        )
        XCTAssertEqual(
            negative.validationMessage,
            "Widths, allowances, and gaps cannot be negative."
        )
        XCTAssertEqual(negative.finalLengthValue, "-- mm")
    }

    func testUnistrutLengthDistinguishesMissingAllowancesFromMissingWidths() {
        let missingAllowance = Engine.unistrutLength(
            containments: [.init(id: 1, label: "Tray", width: "225")],
            leftAllowance: "",
            rightAllowance: "50",
            gap: "50"
        )
        XCTAssertEqual(
            missingAllowance.validationMessage,
            "Enter non-negative values for the side allowances and gap."
        )

        let missingWidth = Engine.unistrutLength(
            containments: [.init(id: 1, label: "Tray", width: "")],
            leftAllowance: "50",
            rightAllowance: "50",
            gap: "50"
        )
        XCTAssertEqual(missingWidth.validationMessage, "Enter a width for each containment.")
    }

    func testUnistrutLengthRejectsZeroWidthContainment() {
        let result = Engine.unistrutLength(
            containments: [.init(id: 1, label: "Tray", width: "0")],
            leftAllowance: "50",
            rightAllowance: "50",
            gap: "50"
        )

        XCTAssertEqual(
            result.validationMessage,
            "Containment widths must be greater than 0 mm."
        )
        XCTAssertEqual(result.finalLengthValue, "-- mm")
    }

    // MARK: - Containment bend cut

    func testContainmentBendCutCalculatesTwoCutTrayExample() {
        let result = Engine.containmentBendCut(
            bendAngle: "67",
            cuts: "2",
            width: "300"
        )

        XCTAssertNil(result.validationMessage)
        XCTAssertEqual(result.bendAngleValue, "67 deg")
        XCTAssertEqual(result.totalBendValue, "67 deg")
        XCTAssertEqual(result.bendPerCutValue, "33.5 deg")
        XCTAssertEqual(result.calculationAngleValue, "16.75 deg")
        XCTAssertEqual(result.trayWidthValue, "300 mm")
        XCTAssertEqual(result.setbackValue, "90.3 mm")
        XCTAssertEqual(result.roundedSetbackValue, "90 mm")
        XCTAssertEqual(result.cutsLabel, "2 cuts")
    }

    func testContainmentBendCutDefaultIsSingleNinetyDegreeMark() {
        let result = Engine.containmentBendCut(Engine.Defaults.containmentBendCut)

        XCTAssertEqual(result.totalBendValue, "90 deg")
        XCTAssertEqual(result.bendPerCutValue, "90 deg")
        XCTAssertEqual(result.calculationAngleValue, "45 deg")
        XCTAssertEqual(result.setbackValue, "100 mm")
        XCTAssertEqual(result.roundedSetbackValue, "100 mm")
        XCTAssertEqual(result.cutsLabel, "1 cut")
    }

    func testContainmentBendCutReturnsPlaceholdersForIncompleteInput() {
        let result = Engine.containmentBendCut(bendAngle: "", cuts: "", width: "")

        XCTAssertNil(result.validationMessage)
        XCTAssertEqual(result.setbackValue, "-- mm")
        XCTAssertEqual(result.roundedSetbackValue, "-- mm")
    }

    func testContainmentBendCutValidatesAngleAndCutCount() {
        let angle = Engine.containmentBendCut(bendAngle: "180", cuts: "2", width: "300")
        XCTAssertEqual(
            angle.validationMessage,
            "Bend angle must be greater than 0 and less than 180 degrees."
        )

        for cuts in ["0", "2.5"] {
            let result = Engine.containmentBendCut(
                bendAngle: "67",
                cuts: cuts,
                width: "300"
            )
            XCTAssertEqual(
                result.validationMessage,
                "Number of cuts must be a whole number of 1 or more."
            )
        }
    }

    func testContainmentBendCutDistinguishesNegativeAndZeroWidths() {
        let negative = Engine.containmentBendCut(
            bendAngle: "67",
            cuts: "2",
            width: "-300"
        )
        XCTAssertEqual(negative.validationMessage, "Width cannot be negative.")

        let zero = Engine.containmentBendCut(bendAngle: "67", cuts: "2", width: "0")
        XCTAssertEqual(zero.validationMessage, "Width must be greater than 0 mm.")
    }

    // MARK: - Angle drop

    func testAngleDropCalculatesDefaultFortyFiveDegreePiece() {
        let result = Engine.angleDrop(Engine.Defaults.angleDrop)

        XCTAssertEqual(result.angledLengthValue, "14.14 cm")
        XCTAssertEqual(result.offsetValue, "10 cm")
        XCTAssertEqual(result.totalLengthValue, "14.14 cm")
    }

    func testAngleDropIncludesStraightsAndAllowance() {
        let result = Engine.angleDrop(
            drop: "10",
            angle: "45",
            topStraight: "5",
            bottomStraight: "5",
            allowance: "2",
            unit: "cm"
        )

        XCTAssertEqual(result.totalLengthValue, "26.14 cm")
    }

    func testAngleDropDeductsSelectedPrefabBends() {
        let oneBend = Engine.angleDrop(
            drop: "20",
            angle: "45",
            topStraight: "0",
            bottomStraight: "0",
            allowance: "0",
            unit: "cm",
            topBend: true,
            bottomBend: false,
            bendHeight: "5"
        )
        XCTAssertEqual(oneBend.angledLengthValue, "21.21 cm")

        let twoBends = Engine.angleDrop(
            drop: "20",
            angle: "45",
            topStraight: "0",
            bottomStraight: "0",
            allowance: "0",
            unit: "cm",
            topBend: true,
            bottomBend: true,
            bendHeight: "5"
        )
        XCTAssertEqual(twoBends.angledLengthValue, "14.14 cm")
    }

    func testAngleDropRejectsInvalidGeometry() {
        let invalidAngle = Engine.angleDrop(
            drop: "10",
            angle: "90",
            topStraight: "0",
            bottomStraight: "0",
            allowance: "0",
            unit: "cm"
        )
        XCTAssertEqual(invalidAngle.angledLengthValue, "--")

        let consumedDrop = Engine.angleDrop(
            drop: "10",
            angle: "45",
            topStraight: "0",
            bottomStraight: "0",
            allowance: "0",
            unit: "cm",
            topBend: true,
            bottomBend: true,
            bendHeight: "5"
        )
        XCTAssertEqual(consumedDrop.angledLengthValue, "--")
        XCTAssertEqual(consumedDrop.totalLengthValue, "--")
    }

    func testAngleDropIgnoresBendHeightWhenNoPrefabEndsAreSelected() {
        let result = Engine.angleDrop(
            drop: "10",
            angle: "45",
            topStraight: "0",
            bottomStraight: "0",
            allowance: "0",
            unit: "cm",
            topBend: false,
            bottomBend: false,
            bendHeight: "5"
        )

        XCTAssertEqual(result.angledLengthValue, "14.14 cm")
    }

    func testAngleDropRejectsInvalidHeightWhenPrefabBendIsSelected() {
        for bendHeight in ["", "0", "-5"] {
            let result = Engine.angleDrop(
                drop: "20",
                angle: "45",
                topStraight: "0",
                bottomStraight: "0",
                allowance: "0",
                unit: "cm",
                topBend: true,
                bottomBend: false,
                bendHeight: bendHeight
            )

            XCTAssertEqual(result.angledLengthValue, "--", bendHeight)
            XCTAssertEqual(result.offsetValue, "--", bendHeight)
            XCTAssertEqual(result.totalLengthValue, "--", bendHeight)
        }
    }
}
