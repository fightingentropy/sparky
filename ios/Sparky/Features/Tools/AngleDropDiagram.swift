import SwiftUI

/// Interactive angle drop (side view) for the angle-drop calculator; mirrors the web diagram.
///
/// A top run drops to a bottom run through an angled piece. The vertical drop is what you
/// measured, so it stays fixed: drag the handle on the lower joint to make the slope steeper or
/// shallower, and the angle field and results follow. Prefab bends take up `bend height` of the
/// drop at each end; the cut piece (green) covers what is left, which is the calculator's
/// "angled piece": (drop − bends × bend height) ÷ sin(angle).
struct AngleDropDiagram: View {
    @Binding var angleText: String
    let drop: String
    let unit: String
    let topBend: Bool
    let bottomBend: Bool
    let bendHeight: String
    /// Calculator outputs ("--" when invalid).
    let angledLength: String
    let offset: String

    @State private var isDragging = false
    @State private var lastHapticAngle: Int?
    @Environment(\.accessibilityReduceMotion) private var reduceMotion

    private static let range = 5.0...85.0
    private static let snaps: [Double] = [15, 22.5, 30, 45, 60, 75]
    private static let space = "angleDropDiagram"

    private var angle: Double {
        let parsed = Double(angleText.replacingOccurrences(of: ",", with: ".")) ?? 45
        return min(max(parsed, Self.range.lowerBound), Self.range.upperBound)
    }

    @State private var diagramSize: CGSize = .zero

    private var isScaledToFit: Bool {
        guard diagramSize.width > 0 else { return false }
        let layout = DropLayout(size: diagramSize)
        let (top, bottom) = layout.points(angle: angle)
        return bottom.y - top.y < layout.maxDrop - 0.5
    }

    private var bendCount: Int { (topBend ? 1 : 0) + (bottomBend ? 1 : 0) }

    private var bendFraction: Double {
        guard let drop = Double(drop.replacingOccurrences(of: ",", with: ".")), drop > 0,
              let height = Double(bendHeight.replacingOccurrences(of: ",", with: ".")), height > 0
        else { return 0 }
        return min(height / drop, 1)
    }

    private var bendsFillDrop: Bool { bendCount > 0 && bendFraction * Double(bendCount) >= 1 }

    private var dropLabel: String {
        guard let value = Double(drop.replacingOccurrences(of: ",", with: ".")), value > 0 else { return "" }
        return "\(drop) \(unit)"
    }

    var body: some View {
        VStack(alignment: .leading, spacing: 12) {
            HStack(alignment: .firstTextBaseline) {
                SparkyEyebrow(text: "Drag to set the angle")
                Spacer()
                if isScaledToFit {
                    // Shallow angles shrink the whole drawing (drop included) so the long run fits.
                    SparkyEyebrow(text: "Scaled to fit")
                        .transition(.opacity)
                }
                Text("\(angle.formatted(.number.precision(.fractionLength(0...1))))°")
                    .font(.sparkyMono(.subheadline, weight: .medium))
                    .foregroundStyle(Color.sparkyText)
                    .contentTransition(.numericText(value: angle))
            }

            GeometryReader { proxy in
                let layout = DropLayout(size: proxy.size)
                ZStack(alignment: .topLeading) {
                    DropPreview(
                        angle: angle,
                        layout: layout,
                        topBend: topBend,
                        bottomBend: bottomBend,
                        bendFraction: bendFraction,
                        dropLabel: dropLabel,
                        angledLength: angledLength,
                        offset: offset
                    )
                    handle(layout: layout)
                }
            }
            .frame(height: 200)
            .coordinateSpace(name: Self.space)
            .onGeometryChange(for: CGSize.self) { $0.size } action: { diagramSize = $0 }

            Text(note)
                .font(.sparky(.caption))
                .foregroundStyle(bendsFillDrop ? Color.sparkyWarning : Color.sparkyMuted)
                .fixedSize(horizontal: false, vertical: true)
        }
        .animation(isDragging || reduceMotion ? nil : .snappy(duration: 0.35), value: angle)
        .accessibilityElement(children: .ignore)
        .accessibilityLabel("Angle drop preview")
        .accessibilityValue(accessibilityValue)
        .accessibilityHint("Swipe up or down to change the angle by 5 degrees.")
        .accessibilityAdjustableAction { direction in
            switch direction {
            case .increment: setAngle(angle + 5)
            case .decrement: setAngle(angle - 5)
            @unknown default: break
            }
        }
    }

    private var note: String {
        if bendsFillDrop { return "The prefab bends take up the whole drop. Lower the bend height or use one bend." }
        return bendCount > 0
            ? "Green is the length to cut; the dots mark where the prefab bends take over."
            : "Green is the length to cut between the two runs."
    }

    private var accessibilityValue: String {
        let degrees = "\(Int(angle.rounded())) degrees from horizontal"
        return angledLength == "--" ? degrees : "\(degrees), angled piece \(angledLength)"
    }

    private func handle(layout: DropLayout) -> some View {
        ZStack {
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
        .position(layout.points(angle: angle).bottom)
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
        if fromDrag, let snap = Self.snaps.first(where: { abs($0 - newValue) <= 1.5 }) {
            degrees = snap
        }
        let text = degrees == degrees.rounded() ? "\(Int(degrees))" : "\(degrees)"
        guard text != angleText else { return }
        angleText = text
        let whole = Int(degrees.rounded())
        if whole % 15 == 0, lastHapticAngle != whole {
            Haptics.selection()
            lastHapticAngle = whole
        }
    }
}

// MARK: - Geometry

private struct DropLayout {
    let size: CGSize

    let margin: CGFloat = 14
    let topY: CGFloat = 34
    let topRun: CGFloat = 70
    let bottomRun: CGFloat = 56

    var maxDrop: CGFloat { size.height - topY - 44 }

    /// The top and bottom joints, keeping the drop/offset proportions true inside the box.
    func points(angle: Double) -> (top: CGPoint, bottom: CGPoint) {
        let tangent = CGFloat(tan(angle * .pi / 180))
        let room = size.width - margin * 2 - topRun - bottomRun
        let dropPx = min(maxDrop, room * tangent)
        let offsetPx = dropPx / tangent
        let top = CGPoint(x: margin + topRun, y: topY)
        return (top, CGPoint(x: top.x + offsetPx, y: topY + dropPx))
    }

    /// Angle below horizontal for a finger at `location`, measured from the top joint.
    func angle(for location: CGPoint) -> Double {
        let top = CGPoint(x: margin + topRun, y: topY)
        let dx = location.x - top.x
        let dy = location.y - top.y
        if dx <= 0 { return 85 }
        if dy <= 0 { return 5 }
        return atan2(dy, dx) * 180 / .pi
    }
}

private struct DropPreview: View, Animatable {
    var angle: Double
    let layout: DropLayout
    let topBend: Bool
    let bottomBend: Bool
    let bendFraction: Double
    let dropLabel: String
    let angledLength: String
    let offset: String

    var animatableData: Double {
        get { angle }
        set { angle = newValue }
    }

    var body: some View {
        Canvas { context, size in
            let (top, bottom) = layout.points(angle: angle)
            let thickness: CGFloat = 9
            let valid = angledLength != "--"
            let along = { (fraction: Double) -> CGPoint in
                CGPoint(x: top.x + (bottom.x - top.x) * fraction, y: top.y + (bottom.y - top.y) * fraction)
            }
            let cutStart = along(topBend ? bendFraction : 0)
            let cutEnd = along(bottomBend ? 1 - bendFraction : 1)
            let muted = GraphicsContext.Shading.color(Color.sparkyMuted)

            // Horizontal reference through the top joint, and the angle the slope makes with it.
            var ghost = Path()
            ghost.move(to: top)
            ghost.addLine(to: CGPoint(x: size.width - layout.margin, y: top.y))
            context.stroke(ghost, with: .color(Color.sparkyFaint), style: StrokeStyle(lineWidth: 1, dash: [3, 4]))

            let slopeLength = hypot(bottom.x - top.x, bottom.y - top.y)
            var arc = Path()
            arc.addArc(
                center: top,
                radius: min(40, slopeLength * 0.45),
                startAngle: .degrees(0),
                endAngle: .degrees(angle),
                clockwise: false
            )
            context.stroke(arc, with: muted, lineWidth: 1)

            var run = Path()
            run.move(to: CGPoint(x: layout.margin, y: top.y))
            run.addLine(to: top)
            run.addLine(to: bottom)
            run.addLine(to: CGPoint(x: size.width - layout.margin, y: bottom.y))
            context.stroke(
                run,
                with: .color(Color.sparkyText.opacity(0.22)),
                style: StrokeStyle(lineWidth: thickness, lineCap: .round, lineJoin: .round)
            )

            if valid {
                var cut = Path()
                cut.move(to: cutStart)
                cut.addLine(to: cutEnd)
                context.stroke(cut, with: .color(Color.sparkyAccent), style: StrokeStyle(lineWidth: thickness))
                for (enabled, point) in [(topBend, cutStart), (bottomBend, cutEnd)] where enabled && bendFraction > 0 {
                    context.fill(Path(ellipseIn: CGRect(x: point.x - 2.5, y: point.y - 2.5, width: 5, height: 5)),
                                 with: .color(Color.sparkyText))
                }
            }

            // Drop: vertical dimension left of the top joint.
            if !dropLabel.isEmpty {
                var dimension = Path()
                dimension.move(to: CGPoint(x: top.x - 18, y: top.y))
                dimension.addLine(to: CGPoint(x: top.x - 18, y: bottom.y))
                for y in [top.y, bottom.y] {
                    dimension.move(to: CGPoint(x: top.x - 22, y: y))
                    dimension.addLine(to: CGPoint(x: top.x - 14, y: y))
                }
                context.stroke(dimension, with: muted, lineWidth: 1)
                context.draw(
                    label(dropLabel, color: .sparkyText),
                    at: CGPoint(x: top.x - 26, y: (top.y + bottom.y) / 2),
                    anchor: .trailing
                )
            }

            guard valid else { return }

            // Offset of the cut piece, under the slope.
            if cutEnd.x - cutStart.x > 18 {
                let y = bottom.y + 20
                var dimension = Path()
                dimension.move(to: CGPoint(x: cutStart.x, y: y))
                dimension.addLine(to: CGPoint(x: cutEnd.x, y: y))
                for x in [cutStart.x, cutEnd.x] {
                    dimension.move(to: CGPoint(x: x, y: y - 4))
                    dimension.addLine(to: CGPoint(x: x, y: y + 4))
                }
                context.stroke(dimension, with: muted, lineWidth: 1)
                context.draw(label(offset, color: .sparkyMuted), at: CGPoint(x: (cutStart.x + cutEnd.x) / 2, y: y + 13))
            }

            // Cut length along the slope, on its upper side.
            let middle = along(0.5)
            let unit = CGVector(dx: (bottom.x - top.x) / slopeLength, dy: (bottom.y - top.y) / slopeLength)
            let labelPoint = CGPoint(x: middle.x + unit.dy * 16, y: middle.y - unit.dx * 16)
            var rotated = context
            rotated.translateBy(x: labelPoint.x, y: labelPoint.y)
            rotated.rotate(by: .radians(atan2(unit.dy, unit.dx)))
            rotated.draw(label(angledLength, color: .sparkyText), at: .zero)
        }
        .accessibilityHidden(true)
    }

    private func label(_ text: String, color: Color) -> Text {
        Text(text)
            .font(.sparkyMonoFixed(size: 12, weight: .medium))
            .foregroundStyle(color)
    }
}
