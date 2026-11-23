import SwiftUI

/// Interactive containment bend for the bend-cut calculator.
///
/// Top: the containment seen from above, bent at the notches. Drag the round handle on the
/// free end to open or close the bend; the angle field (and so every result) follows live.
/// Bottom: the same length laid flat, with the V-notches you'd mark for that angle. Closing a
/// V shortens the edge it opens on, so each V opens on the inside of the bend, by
/// `tan(bend per cut ÷ 2) × width` either side of its centre mark, which is exactly what the
/// calculator reports, and keeps its point on the outside edge, where the metal hinges.
struct BendCutDiagram: View {
    @Binding var angleText: String
    let cuts: Int
    /// The calculator's rounded "cut each side" value, e.g. "100 mm" (empty when invalid).
    let cutEachSide: String

    @State private var isDragging = false
    @State private var lastHapticAngle: Int?
    @Environment(\.accessibilityReduceMotion) private var reduceMotion

    private static let range = 1.0...179.0

    private var angle: Double {
        let parsed = Double(angleText.replacingOccurrences(of: ",", with: ".")) ?? 90
        return min(max(parsed, Self.range.lowerBound), Self.range.upperBound)
    }

    /// Enough notches to read the shape; very high cut counts are drawn as this many.
    private var visualCuts: Int { min(max(cuts, 1), 8) }

    private var animation: Animation? {
        isDragging || reduceMotion ? nil : .snappy(duration: 0.35)
    }

    var body: some View {
        VStack(alignment: .leading, spacing: 12) {
            HStack {
                SparkyEyebrow(text: "Drag to bend")
                Spacer()
                Text("\(Int(angle.rounded()))°")
                    .font(.sparkyMono(.subheadline, weight: .medium))
                    .foregroundStyle(Color.sparkyText)
                    .contentTransition(.numericText(value: angle))
            }

            GeometryReader { proxy in
                let layout = BendLayout(size: proxy.size, cuts: visualCuts)
                ZStack(alignment: .topLeading) {
                    BendPreview(angle: angle, layout: layout)
                    handle(layout: layout)
                }
            }
            .frame(height: 210)
            .coordinateSpace(name: Self.space)

            VStack(alignment: .leading, spacing: 6) {
                NotchTemplate(angle: angle, cuts: visualCuts, label: cutEachSide)
                    .frame(height: 70)
                // Past 90° per notch the V is wider than the containment itself.
                let tooSharp = angle / Double(max(cuts, 1)) > 90
                Text(tooSharp
                     ? "Each notch here is wider than the containment. Add cuts to spread the bend."
                     : "Mark each V from its centre line on the inside edge; the point sits on the outside edge.")
                    .font(.sparky(.caption))
                    .foregroundStyle(tooSharp ? Color.sparkyWarning : Color.sparkyMuted)
                    .fixedSize(horizontal: false, vertical: true)
            }
        }
        .animation(animation, value: angle)
        .accessibilityElement(children: .ignore)
        .accessibilityLabel("Bend preview")
        .accessibilityValue(accessibilityValue)
        .accessibilityHint("Swipe up or down to change the bend angle by 5 degrees.")
        .accessibilityAdjustableAction { direction in
            switch direction {
            case .increment: setAngle(angle + 5)
            case .decrement: setAngle(angle - 5)
            @unknown default: break
            }
        }
    }

    private static let space = "bendCutDiagram"

    private var accessibilityValue: String {
        let degrees = "\(Int(angle.rounded())) degree bend"
        return cutEachSide.isEmpty ? degrees : "\(degrees), cut \(cutEachSide) each side of each mark"
    }

    private func handle(layout: BendLayout) -> some View {
        let point = layout.handlePoint(angle: angle)
        return ZStack {
            Circle()
                .fill(Color.sparkyPrimary)
                .frame(width: 26, height: 26)
            Image(systemName: "arrow.up.and.down.and.arrow.left.and.right")
                .font(.system(size: 10, weight: .bold))
                .foregroundStyle(Color.sparkyOnPrimary)
        }
        .scaleEffect(isDragging ? 1.15 : 1)
        .frame(width: 56, height: 56)
        .contentShape(Circle())
        .position(point)
        .gesture(
            DragGesture(minimumDistance: 0, coordinateSpace: .named(Self.space))
                .onChanged { value in
                    if !isDragging { isDragging = true }
                    setAngle(layout.angle(for: value.location), fromDrag: true)
                }
                .onEnded { _ in
                    isDragging = false
                    lastHapticAngle = nil
                }
        )
        .animation(.spring(duration: 0.2), value: isDragging)
    }

    private func setAngle(_ newValue: Double, fromDrag: Bool = false) {
        var degrees = min(max(newValue.rounded(), Self.range.lowerBound), Self.range.upperBound)
        // Settle on the angles people actually bend to.
        if fromDrag, let snap = [30.0, 45, 60, 90, 120, 135].first(where: { abs($0 - degrees) <= 2 }) {
            degrees = snap
        }
        let whole = Int(degrees)
        guard whole != Int(angle.rounded()) || angleText != "\(whole)" else { return }
        angleText = "\(whole)"
        if whole % 15 == 0, lastHapticAngle != whole {
            Haptics.selection()
            lastHapticAngle = whole
        }
    }
}

// MARK: - Geometry

/// Shared geometry for drawing the bent containment and hit-testing the drag.
/// Screen coordinates (y grows downwards); the bend turns the free end upwards, so the
/// top edge of the fixed length is the inside of the bend.
private struct BendLayout {
    let size: CGSize
    let cuts: Int

    var stripWidth: CGFloat { min(34, size.height * 0.16) }
    var start: CGPoint { CGPoint(x: 12, y: pivot.y) }
    /// Inside corner of the first notch, where its two cut faces meet once closed.
    var pivot: CGPoint { CGPoint(x: size.width * 0.56, y: size.height - stripWidth - 14) }
    /// Inside-edge length between neighbouring notches.
    var segment: CGFloat { cuts > 1 ? min(stripWidth * 0.9, 120 / CGFloat(cuts)) : 0 }
    var armLength: CGFloat { min(size.height - stripWidth - 46, size.width * 0.4) }

    static func direction(_ degrees: Double) -> CGVector {
        let radians = degrees * .pi / 180
        return CGVector(dx: cos(radians), dy: -sin(radians))
    }

    /// Normal pointing to the outside of the bend for a length heading `degrees`.
    static func outward(_ degrees: Double) -> CGVector {
        let radians = degrees * .pi / 180
        return CGVector(dx: sin(radians), dy: cos(radians))
    }

    /// Inside-edge corners at each closed notch, then the free end of the inside edge.
    func insidePoints(angle: Double) -> (notches: [CGPoint], end: CGPoint) {
        let step = angle / Double(cuts)
        var notches = [pivot]
        for index in 1..<max(cuts, 1) {
            notches.append(notches[index - 1] + Self.direction(Double(index) * step) * segment)
        }
        let end = notches[notches.count - 1] + Self.direction(angle) * armLength
        return (notches, end)
    }

    /// Outside-edge corner of notch `index`: the V's point, which the metal hinges about.
    func mitre(at notch: CGPoint, index: Int, angle: Double) -> CGPoint {
        let step = angle / Double(cuts)
        let middle = Double(index) * step + step / 2
        // A sharp single bend makes a long point; cap it so the drawing stays readable.
        let length = min(stripWidth / CGFloat(cos(step / 2 * .pi / 180)), stripWidth * 4)
        return notch + Self.outward(middle) * length
    }

    func handlePoint(angle: Double) -> CGPoint {
        let end = insidePoints(angle: angle).end
        return end + Self.outward(angle) * (stripWidth / 2) + Self.direction(angle) * 6
    }

    /// Bend angle for a finger at `location`, measured around the first notch.
    func angle(for location: CGPoint) -> Double {
        let dx = location.x - pivot.x
        let dy = pivot.y - location.y
        var degrees = atan2(dy, dx) * 180 / .pi
        if degrees < 0 { degrees = dx < 0 ? 179 : 1 }
        return degrees
    }
}

private struct BendPreview: View, Animatable {
    var angle: Double
    let layout: BendLayout

    var animatableData: Double {
        get { angle }
        set { angle = newValue }
    }

    var body: some View {
        Canvas { context, _ in
            let w = layout.stripWidth
            let (notches, end) = layout.insidePoints(angle: angle)
            let mitres = notches.enumerated().map { layout.mitre(at: $1, index: $0, angle: angle) }
            let outsideStart = layout.start + BendLayout.outward(0) * w
            let outsideEnd = end + BendLayout.outward(angle) * w

            // Where the length would run if it were left straight.
            var ghost = Path()
            ghost.move(to: layout.pivot)
            ghost.addLine(to: CGPoint(x: layout.size.width - 4, y: layout.pivot.y))
            ghost.move(to: layout.pivot + CGVector(dx: 0, dy: w))
            ghost.addLine(to: CGPoint(x: layout.size.width - 4, y: layout.pivot.y + w))
            context.stroke(ghost, with: .color(Color.sparkyFaint), style: StrokeStyle(lineWidth: 1, dash: [3, 4]))

            // Angle arc for a single cut, under the containment so only the open sweep shows.
            if layout.cuts == 1 {
                var arc = Path()
                arc.addArc(
                    center: layout.pivot,
                    radius: w + 24,
                    startAngle: .degrees(0),
                    endAngle: .degrees(-angle),
                    clockwise: true
                )
                context.stroke(arc, with: .color(Color.sparkyMuted), style: StrokeStyle(lineWidth: 1, lineCap: .round))
            }

            var body = Path()
            body.move(to: layout.start)
            notches.forEach { body.addLine(to: $0) }
            body.addLine(to: end)
            body.addLine(to: outsideEnd)
            mitres.reversed().forEach { body.addLine(to: $0) }
            body.addLine(to: outsideStart)
            body.closeSubpath()
            context.fill(body, with: .color(Color.sparkySurfaceRaised))

            // The inside edge, where the notches closed, reads stronger than the outside.
            var inside = Path()
            inside.move(to: layout.start)
            notches.forEach { inside.addLine(to: $0) }
            inside.addLine(to: end)
            context.stroke(inside, with: .color(Color.sparkyText.opacity(0.55)), lineWidth: 1.5)

            var outside = Path()
            outside.move(to: outsideStart)
            mitres.forEach { outside.addLine(to: $0) }
            outside.addLine(to: outsideEnd)
            context.stroke(outside, with: .color(Color.sparkyText.opacity(0.25)), lineWidth: 1)

            // Closed notches become seams.
            for (notch, mitre) in zip(notches, mitres) {
                var seam = Path()
                seam.move(to: notch)
                seam.addLine(to: mitre)
                context.stroke(seam, with: .color(Color.sparkyAccent), lineWidth: 1.5)
            }

        }
        .accessibilityHidden(true)
    }
}

/// The length laid flat with the notches marked out.
private struct NotchTemplate: View, Animatable {
    var angle: Double
    let cuts: Int
    let label: String

    var animatableData: Double {
        get { angle }
        set { angle = newValue }
    }

    var body: some View {
        Canvas { context, size in
            let stripHeight: CGFloat = 34
            let strip = CGRect(x: 12, y: 30, width: size.width - 24, height: stripHeight)
            let step = angle / Double(cuts)
            // Strip height stands for the containment width, so the opening scales with it.
            let halfOpening = stripHeight * CGFloat(tan(step / 2 * .pi / 180))
            let centres = (1...cuts).map { strip.minX + strip.width * CGFloat($0) / CGFloat(cuts + 1) }

            context.drawLayer { layer in
                layer.clip(to: Path(roundedRect: strip, cornerRadius: 3))
                layer.fill(Path(strip), with: .color(Color.sparkySurfaceRaised))
                for centre in centres {
                    // Opens on the inside edge (top), point on the outside edge (bottom).
                    var notch = Path()
                    notch.move(to: CGPoint(x: centre, y: strip.maxY))
                    notch.addLine(to: CGPoint(x: centre + halfOpening, y: strip.minY))
                    notch.addLine(to: CGPoint(x: centre - halfOpening, y: strip.minY))
                    notch.closeSubpath()
                    layer.fill(notch, with: .color(Color.sparkySurface))
                    layer.stroke(notch, with: .color(Color.sparkyAccent), lineWidth: 1.5)

                    var mark = Path()
                    mark.move(to: CGPoint(x: centre, y: strip.minY))
                    mark.addLine(to: CGPoint(x: centre, y: strip.maxY))
                    layer.stroke(mark, with: .color(Color.sparkyText.opacity(0.5)), style: StrokeStyle(lineWidth: 1, dash: [2, 3]))
                }
            }

            // Dimension: centre mark to the edge of the V, along the inside edge.
            guard !label.isEmpty, let first = centres.first else { return }
            let reach = min(halfOpening, strip.maxX - first)
            let y = strip.minY - 8
            var dimension = Path()
            dimension.move(to: CGPoint(x: first, y: y))
            dimension.addLine(to: CGPoint(x: first + reach, y: y))
            dimension.move(to: CGPoint(x: first, y: y - 4))
            dimension.addLine(to: CGPoint(x: first, y: y + 4))
            dimension.move(to: CGPoint(x: first + reach, y: y - 4))
            dimension.addLine(to: CGPoint(x: first + reach, y: y + 4))
            context.stroke(dimension, with: .color(Color.sparkyMuted), lineWidth: 1)

            let text = context.resolve(
                Text(label)
                    .font(.sparkyMonoFixed(size: 12, weight: .medium))
                    .foregroundStyle(Color.sparkyText)
            )
            let textSize = text.measure(in: size)
            let x = min(max(first + reach / 2, strip.minX + textSize.width / 2), strip.maxX - textSize.width / 2)
            context.draw(text, at: CGPoint(x: x, y: y - 12), anchor: .center)
        }
        .accessibilityHidden(true)
    }
}

private func + (point: CGPoint, vector: CGVector) -> CGPoint {
    CGPoint(x: point.x + vector.dx, y: point.y + vector.dy)
}

private func * (vector: CGVector, scale: CGFloat) -> CGVector {
    CGVector(dx: vector.dx * scale, dy: vector.dy * scale)
}
