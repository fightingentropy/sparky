import Foundation

/// Native implementations of Sparky's site and containment calculators.
///
/// Inputs deliberately remain strings so a SwiftUI form can pass partially-entered
/// values through the engine without maintaining a second numeric model. Results are
/// presentation-ready and follow the formatting used by the web calculators.
public enum CalculatorEngine {
    public static let epsilon = 1e-9

    public enum ContainmentBendDirection: String, CaseIterable {
        case out
        case `in`
    }

    public struct ContainmentRodInput: Equatable {
        public var overallHeight: String
        public var topOfUnistrut: String
        public var buffer: String
        public var unistrutDepth: String

        public init(
            overallHeight: String,
            topOfUnistrut: String,
            buffer: String,
            unistrutDepth: String
        ) {
            self.overallHeight = overallHeight
            self.topOfUnistrut = topOfUnistrut
            self.buffer = buffer
            self.unistrutDepth = unistrutDepth
        }
    }

    public struct UnistrutContainment: Identifiable, Equatable {
        public var id: Int
        public var label: String
        public var width: String

        public init(id: Int, label: String, width: String) {
            self.id = id
            self.label = label
            self.width = width
        }
    }

    public struct UnistrutLengthInput: Equatable {
        public var containments: [UnistrutContainment]
        public var leftAllowance: String
        public var rightAllowance: String
        public var gap: String

        public init(
            containments: [UnistrutContainment],
            leftAllowance: String,
            rightAllowance: String,
            gap: String
        ) {
            self.containments = containments
            self.leftAllowance = leftAllowance
            self.rightAllowance = rightAllowance
            self.gap = gap
        }
    }

    public struct ContainmentBendCutInput: Equatable {
        public var bendAngle: String
        public var cuts: String
        public var width: String

        public init(bendAngle: String, cuts: String, width: String) {
            self.bendAngle = bendAngle
            self.cuts = cuts
            self.width = width
        }
    }

    public struct AngleDropInput: Equatable {
        public var drop: String
        public var angle: String
        public var topStraight: String
        public var bottomStraight: String
        public var allowance: String
        public var unit: String
        public var topBend: Bool
        public var bottomBend: Bool
        public var bendHeight: String

        public init(
            drop: String,
            angle: String,
            topStraight: String,
            bottomStraight: String,
            allowance: String,
            unit: String,
            topBend: Bool = false,
            bottomBend: Bool = false,
            bendHeight: String = "0"
        ) {
            self.drop = drop
            self.angle = angle
            self.topStraight = topStraight
            self.bottomStraight = bottomStraight
            self.allowance = allowance
            self.unit = unit
            self.topBend = topBend
            self.bottomBend = bottomBend
            self.bendHeight = bendHeight
        }
    }

    public struct ContainmentBendStartInput: Equatable {
        public var referenceStart: String
        public var centrelineOffset: String
        public var angle: String
        public var direction: ContainmentBendDirection

        public init(
            referenceStart: String,
            centrelineOffset: String,
            angle: String,
            direction: ContainmentBendDirection
        ) {
            self.referenceStart = referenceStart
            self.centrelineOffset = centrelineOffset
            self.angle = angle
            self.direction = direction
        }
    }

    public enum Defaults {
        public static let containmentRod = ContainmentRodInput(
            overallHeight: "3165",
            topOfUnistrut: "2900",
            buffer: "100",
            unistrutDepth: "40"
        )

        public static let unistrutLength = UnistrutLengthInput(
            containments: [
                UnistrutContainment(id: 1, label: "Tray", width: "225"),
                UnistrutContainment(id: 2, label: "Basket", width: "125"),
                UnistrutContainment(id: 3, label: "Trunking", width: "100")
            ],
            leftAllowance: "50",
            rightAllowance: "50",
            gap: "50"
        )

        public static let containmentBendCut = ContainmentBendCutInput(
            bendAngle: "90",
            cuts: "1",
            width: "100"
        )

        public static let angleDrop = AngleDropInput(
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

        public static let containmentBendStart = ContainmentBendStartInput(
            referenceStart: "2000",
            centrelineOffset: "50",
            angle: "60",
            direction: .out
        )
    }

    public struct ContainmentRodResult: Equatable {
        public let validationMessage: String?
        public let actualDropValue: String
        public let rodCutLengthValue: String
        public let bottomOfUnistrutDropValue: String
    }

    public struct UnistrutLengthResult: Equatable {
        public let validationMessage: String?
        public let totalContainmentWidthValue: String
        public let totalSideAllowanceValue: String
        public let totalGapAllowanceValue: String
        public let exactLengthValue: String
        public let finalLengthValue: String
        public let gapLabel: String
    }

    public struct ContainmentBendCutResult: Equatable {
        public let validationMessage: String?
        public let bendAngleValue: String
        public let totalBendValue: String
        public let bendPerCutValue: String
        public let calculationAngleValue: String
        public let trayWidthValue: String
        public let setbackValue: String
        public let roundedSetbackValue: String
        public let cutsLabel: String
    }

    public struct AngleDropResult: Equatable {
        public let angledLengthValue: String
        public let offsetValue: String
        public let totalLengthValue: String
    }

    public struct ContainmentBendStartResult: Equatable {
        public let validationMessage: String?
        public let forwardOffsetValue: String
        public let newStartValue: String
    }

    // MARK: - Shared formatting

    /// Matches the web app: two decimal places below 100, one at 100 and above,
    /// with insignificant trailing zeroes removed.
    public static func formatNumber(_ value: Double) -> String {
        guard value.isFinite else { return "--" }

        let precision = abs(value) >= 100 ? 1 : 2
        let normalizedValue = roundedForDisplay(value, precision: precision)
        var formatted = String(
            format: "%.*f",
            locale: Locale(identifier: "en_US_POSIX"),
            precision,
            normalizedValue
        )

        while formatted.last == "0" {
            formatted.removeLast()
        }
        if formatted.last == "." {
            formatted.removeLast()
        }

        return formatted == "-0" ? "0" : formatted
    }

    public static func formatMeasure(_ value: Double, unit: String) -> String {
        "\(formatNumber(value)) \(unit)"
    }

    // MARK: - Containment rod

    public static func containmentRod(_ input: ContainmentRodInput) -> ContainmentRodResult {
        containmentRod(
            overallHeight: input.overallHeight,
            topOfUnistrut: input.topOfUnistrut,
            buffer: input.buffer,
            unistrutDepth: input.unistrutDepth
        )
    }

    public static func containmentRod(
        overallHeight: String,
        topOfUnistrut: String,
        buffer: String,
        unistrutDepth: String
    ) -> ContainmentRodResult {
        let parsedOverallHeight = parseNumber(overallHeight)
        let parsedTopOfUnistrut = parseNumber(topOfUnistrut)
        let parsedBuffer = parseNumber(buffer)
        let depthSource = unistrutDepth.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty
            ? Defaults.containmentRod.unistrutDepth
            : unistrutDepth
        let parsedUnistrutDepth = parseNumber(depthSource)

        if let overallHeight = finite(parsedOverallHeight),
           let topOfUnistrut = finite(parsedTopOfUnistrut),
           topOfUnistrut > overallHeight {
            return emptyContainmentRod(
                validationMessage: "Height to top of Unistrut cannot be more than overall height."
            )
        }

        guard let overallHeight = finite(parsedOverallHeight),
              let topOfUnistrut = finite(parsedTopOfUnistrut),
              let buffer = finite(parsedBuffer),
              let unistrutDepth = finite(parsedUnistrutDepth),
              overallHeight > 0,
              topOfUnistrut >= 0,
              buffer >= 0,
              unistrutDepth >= 0 else {
            return emptyContainmentRod()
        }

        let actualDrop = overallHeight - topOfUnistrut
        let rodCutLength = actualDrop + buffer
        let bottomOfUnistrutDrop = actualDrop + unistrutDepth

        return ContainmentRodResult(
            validationMessage: nil,
            actualDropValue: formatMeasure(actualDrop, unit: "mm"),
            rodCutLengthValue: formatMeasure(rodCutLength, unit: "mm"),
            bottomOfUnistrutDropValue: formatMeasure(bottomOfUnistrutDrop, unit: "mm")
        )
    }

    // MARK: - Unistrut length

    public static func unistrutLength(_ input: UnistrutLengthInput) -> UnistrutLengthResult {
        unistrutLength(
            containments: input.containments,
            leftAllowance: input.leftAllowance,
            rightAllowance: input.rightAllowance,
            gap: input.gap
        )
    }

    public static func unistrutLength(
        containments: [UnistrutContainment],
        leftAllowance: String,
        rightAllowance: String,
        gap: String
    ) -> UnistrutLengthResult {
        guard !containments.isEmpty else {
            return emptyUnistrutLength(
                validationMessage: "Add at least one containment.",
                gapLabel: "0 gaps"
            )
        }

        let parsedLeftAllowance = parseNumber(leftAllowance)
        let parsedRightAllowance = parseNumber(rightAllowance)
        let parsedGap = parseNumber(gap)
        let parsedWidths = containments.map { parseNumber($0.width) }
        let gapCount = max(containments.count - 1, 0)
        let errorGapLabel = "\(gapCount) gaps"

        let hasNegativeValue = [parsedLeftAllowance, parsedRightAllowance, parsedGap]
            .contains(where: isFiniteAndNegative)
            || parsedWidths.contains(where: isFiniteAndNegative)

        if hasNegativeValue {
            return emptyUnistrutLength(
                validationMessage: "Widths, allowances, and gaps cannot be negative.",
                gapLabel: errorGapLabel
            )
        }

        guard let leftAllowance = finite(parsedLeftAllowance),
              let rightAllowance = finite(parsedRightAllowance),
              let gap = finite(parsedGap) else {
            return emptyUnistrutLength(
                validationMessage: "Enter non-negative values for the side allowances and gap.",
                gapLabel: errorGapLabel
            )
        }

        let widths = parsedWidths.compactMap(finite)
        guard widths.count == parsedWidths.count else {
            return emptyUnistrutLength(
                validationMessage: "Enter a width for each containment.",
                gapLabel: errorGapLabel
            )
        }

        let totalContainmentWidth = widths.reduce(0, +)
        let totalSideAllowance = leftAllowance + rightAllowance
        let totalGapAllowance = Double(gapCount) * gap
        let exactLength = totalContainmentWidth + totalSideAllowance + totalGapAllowance
        let finalLength = ceil(exactLength / 50) * 50

        return UnistrutLengthResult(
            validationMessage: nil,
            totalContainmentWidthValue: formatMeasure(totalContainmentWidth, unit: "mm"),
            totalSideAllowanceValue: formatMeasure(totalSideAllowance, unit: "mm"),
            totalGapAllowanceValue: formatMeasure(totalGapAllowance, unit: "mm"),
            exactLengthValue: formatMeasure(exactLength, unit: "mm"),
            finalLengthValue: formatMeasure(finalLength, unit: "mm"),
            gapLabel: "\(gapCount) gap\(gapCount == 1 ? "" : "s")"
        )
    }

    // MARK: - Containment bend cut

    public static func containmentBendCut(
        _ input: ContainmentBendCutInput
    ) -> ContainmentBendCutResult {
        containmentBendCut(
            bendAngle: input.bendAngle,
            cuts: input.cuts,
            width: input.width
        )
    }

    public static func containmentBendCut(
        bendAngle: String,
        cuts: String,
        width: String
    ) -> ContainmentBendCutResult {
        let parsedBendAngle = parseNumber(bendAngle)
        let parsedCuts = parseNumber(cuts)
        let parsedWidth = parseNumber(width)

        if let bendAngle = finite(parsedBendAngle),
           bendAngle <= 0 || bendAngle >= 180 {
            return emptyContainmentBendCut(
                validationMessage: "Bend angle must be greater than 0 and less than 180 degrees."
            )
        }

        if let cuts = finite(parsedCuts), cuts < 1 || cuts.rounded(.towardZero) != cuts {
            return emptyContainmentBendCut(
                validationMessage: "Number of cuts must be a whole number of 1 or more."
            )
        }

        if let width = finite(parsedWidth), width < 0 {
            return emptyContainmentBendCut(validationMessage: "Width cannot be negative.")
        }

        guard let bendAngle = finite(parsedBendAngle),
              let cuts = finite(parsedCuts),
              let width = finite(parsedWidth) else {
            return emptyContainmentBendCut()
        }

        guard width > 0 else {
            return emptyContainmentBendCut(
                validationMessage: "Width must be greater than 0 mm."
            )
        }

        let totalBend = bendAngle
        let bendPerCut = totalBend / cuts
        let calculationAngle = bendPerCut / 2
        let calculationAngleRadians = degreesToRadians(calculationAngle)
        let tangent = tan(calculationAngleRadians)

        guard tangent.isFinite else { return emptyContainmentBendCut() }

        let setback = tangent * width

        return ContainmentBendCutResult(
            validationMessage: nil,
            bendAngleValue: "\(formatNumber(bendAngle)) deg",
            totalBendValue: "\(formatNumber(totalBend)) deg",
            bendPerCutValue: "\(formatNumber(bendPerCut)) deg",
            calculationAngleValue: "\(formatNumber(calculationAngle)) deg",
            trayWidthValue: formatMeasure(width, unit: "mm"),
            setbackValue: formatTenthMeasure(setback, unit: "mm"),
            roundedSetbackValue: formatMeasure(jsRound(setback), unit: "mm"),
            cutsLabel: "\(formatNumber(cuts)) cut\(cuts == 1 ? "" : "s")"
        )
    }

    /// Source-compatible naming for the web engine's `calcTrayBendCut` concept.
    public static func trayBendCut(_ input: ContainmentBendCutInput) -> ContainmentBendCutResult {
        containmentBendCut(input)
    }

    // MARK: - Angle drop

    public static func angleDrop(_ input: AngleDropInput) -> AngleDropResult {
        angleDrop(
            drop: input.drop,
            angle: input.angle,
            topStraight: input.topStraight,
            bottomStraight: input.bottomStraight,
            allowance: input.allowance,
            unit: input.unit,
            topBend: input.topBend,
            bottomBend: input.bottomBend,
            bendHeight: input.bendHeight
        )
    }

    public static func angleDrop(
        drop: String,
        angle: String,
        topStraight: String,
        bottomStraight: String,
        allowance: String,
        unit: String,
        topBend: Bool = false,
        bottomBend: Bool = false,
        bendHeight: String = "0"
    ) -> AngleDropResult {
        let empty = emptyAngleDrop()

        guard let drop = finite(parseNumber(drop)), drop > 0,
              let angle = finite(parseNumber(angle)), angle > 0, angle < 90,
              let topStraight = finite(parseNumber(topStraight)), topStraight >= 0,
              let bottomStraight = finite(parseNumber(bottomStraight)), bottomStraight >= 0,
              let allowance = finite(parseNumber(allowance)), allowance >= 0 else {
            return empty
        }

        let parsedBendHeight = finite(parseNumber(bendHeight))
        let bendCount = (topBend ? 1 : 0) + (bottomBend ? 1 : 0)
        let bendDeduction: Double
        if bendCount > 0, let bendHeight = parsedBendHeight, bendHeight > 0 {
            bendDeduction = Double(bendCount) * bendHeight
        } else {
            bendDeduction = 0
        }

        let effectiveDrop = drop - bendDeduction
        guard effectiveDrop > 0 else { return empty }

        let radians = degreesToRadians(angle)
        let sine = sin(radians)
        let cosine = cos(radians)
        guard abs(sine) >= epsilon else { return empty }

        let angledLength = effectiveDrop / sine
        let offset = angledLength * cosine
        let totalLength = topStraight + angledLength + bottomStraight + allowance

        return AngleDropResult(
            angledLengthValue: formatMeasure(angledLength, unit: unit),
            offsetValue: formatMeasure(offset, unit: unit),
            totalLengthValue: formatMeasure(totalLength, unit: unit)
        )
    }

    // MARK: - Containment bend start

    public static func containmentBendStart(
        _ input: ContainmentBendStartInput
    ) -> ContainmentBendStartResult {
        containmentBendStart(
            referenceStart: input.referenceStart,
            centrelineOffset: input.centrelineOffset,
            angle: input.angle,
            direction: input.direction
        )
    }

    public static func containmentBendStart(
        referenceStart: String,
        centrelineOffset: String,
        angle: String,
        direction: ContainmentBendDirection
    ) -> ContainmentBendStartResult {
        let parsedReferenceStart = parseNumber(referenceStart)
        let parsedCentrelineOffset = parseNumber(centrelineOffset)
        let parsedAngle = parseNumber(angle)

        if [parsedReferenceStart, parsedCentrelineOffset].contains(where: isFiniteAndNegative) {
            return emptyContainmentBendStart(validationMessage: "Distances cannot be negative.")
        }

        if let angle = finite(parsedAngle), angle <= 0 || angle >= 180 {
            return emptyContainmentBendStart(
                validationMessage: "Bend angle must be greater than 0 and less than 180 degrees."
            )
        }

        guard let referenceStart = finite(parsedReferenceStart),
              let centrelineOffset = finite(parsedCentrelineOffset),
              let angle = finite(parsedAngle) else {
            return emptyContainmentBendStart()
        }

        let tangent = tan(degreesToRadians(angle / 2))
        guard tangent.isFinite else { return emptyContainmentBendStart() }

        let forwardOffset = centrelineOffset * tangent
        let newStart = direction == .out
            ? referenceStart + forwardOffset
            : referenceStart - forwardOffset

        return ContainmentBendStartResult(
            validationMessage: nil,
            forwardOffsetValue: formatMeasure(forwardOffset, unit: "mm"),
            newStartValue: formatMeasure(newStart, unit: "mm")
        )
    }

    // MARK: - Private helpers

    /// Foundation's scanner has the useful prefix-parsing behaviour of
    /// JavaScript's `Number.parseFloat` (for example, `"225 mm"` becomes 225).
    private static func parseNumber(_ text: String) -> Double? {
        let scanner = Scanner(string: text)
        scanner.locale = Locale(identifier: "en_US_POSIX")
        return scanner.scanDouble()
    }

    private static func finite(_ value: Double?) -> Double? {
        guard let value, value.isFinite else { return nil }
        return value
    }

    private static func isFiniteAndNegative(_ value: Double?) -> Bool {
        guard let value, value.isFinite else { return false }
        return value < 0
    }

    private static func degreesToRadians(_ degrees: Double) -> Double {
        degrees * .pi / 180
    }

    private static func formatTenths(_ value: Double) -> String {
        guard value.isFinite else { return "--" }

        var formatted = String(
            format: "%.1f",
            locale: Locale(identifier: "en_US_POSIX"),
            roundedForDisplay(value, precision: 1)
        )
        if formatted.hasSuffix(".0") {
            formatted.removeLast(2)
        }
        return formatted == "-0" ? "0" : formatted
    }

    /// Rounds the exact IEEE-754 value using the selection rule from
    /// JavaScript's `toFixed`. Working from the significand avoids losing which
    /// side of a decimal midpoint a value is on when multiplying as a `Double`.
    private static func roundedForDisplay(_ value: Double, precision: Int) -> Double {
        let magnitude = abs(value)
        let bits = magnitude.bitPattern
        let exponentBits = Int((bits >> 52) & 0x7ff)
        let fractionBits = bits & 0x000f_ffff_ffff_ffff
        let significand: UInt64
        let binaryExponent: Int

        if exponentBits == 0 {
            significand = fractionBits
            binaryExponent = 1 - 1023 - 52
        } else {
            significand = (1 << 52) | fractionBits
            binaryExponent = exponentBits - 1023 - 52
        }

        let scale: UInt64 = precision == 1 ? 10 : 100
        let numerator = significand * scale

        // A non-negative binary exponent means the scaled value is already an
        // integer, so there is no decimal tie to resolve.
        guard binaryExponent < 0 else { return value == 0 ? 0 : value }

        let shift = -binaryExponent
        let roundedInteger: UInt64
        if shift >= 64 {
            roundedInteger = 0
        } else {
            let quotient = numerator >> UInt64(shift)
            let remainderMask = (UInt64(1) << UInt64(shift)) - 1
            let remainder = numerator & remainderMask
            let halfway = UInt64(1) << UInt64(shift - 1)
            roundedInteger = quotient + (remainder >= halfway ? 1 : 0)
        }

        let roundedMagnitude = Double(roundedInteger) / Double(scale)
        let rounded = value < 0 ? -roundedMagnitude : roundedMagnitude
        return rounded == 0 ? 0 : rounded
    }

    private static func formatTenthMeasure(_ value: Double, unit: String) -> String {
        "\(formatTenths(value)) \(unit)"
    }

    /// JavaScript's `Math.round` rounds half values toward positive infinity.
    private static func jsRound(_ value: Double) -> Double {
        floor(value + 0.5)
    }

    private static func emptyContainmentRod(
        validationMessage: String? = nil
    ) -> ContainmentRodResult {
        ContainmentRodResult(
            validationMessage: validationMessage,
            actualDropValue: "-- mm",
            rodCutLengthValue: "-- mm",
            bottomOfUnistrutDropValue: "-- mm"
        )
    }

    private static func emptyUnistrutLength(
        validationMessage: String?,
        gapLabel: String
    ) -> UnistrutLengthResult {
        UnistrutLengthResult(
            validationMessage: validationMessage,
            totalContainmentWidthValue: "-- mm",
            totalSideAllowanceValue: "-- mm",
            totalGapAllowanceValue: "-- mm",
            exactLengthValue: "-- mm",
            finalLengthValue: "-- mm",
            gapLabel: gapLabel
        )
    }

    private static func emptyContainmentBendCut(
        validationMessage: String? = nil
    ) -> ContainmentBendCutResult {
        ContainmentBendCutResult(
            validationMessage: validationMessage,
            bendAngleValue: "-- deg",
            totalBendValue: "-- deg",
            bendPerCutValue: "-- deg",
            calculationAngleValue: "-- deg",
            trayWidthValue: "-- mm",
            setbackValue: "-- mm",
            roundedSetbackValue: "-- mm",
            cutsLabel: "-- cuts"
        )
    }

    private static func emptyAngleDrop() -> AngleDropResult {
        AngleDropResult(
            angledLengthValue: "--",
            offsetValue: "--",
            totalLengthValue: "--"
        )
    }

    private static func emptyContainmentBendStart(
        validationMessage: String? = nil
    ) -> ContainmentBendStartResult {
        ContainmentBendStartResult(
            validationMessage: validationMessage,
            forwardOffsetValue: "-- mm",
            newStartValue: "-- mm"
        )
    }
}
