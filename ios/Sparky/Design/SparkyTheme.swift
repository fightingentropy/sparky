import SwiftUI
import UIKit

private func sparkyHex(_ hex: UInt32, alpha: CGFloat = 1) -> UIColor {
    UIColor(
        red: CGFloat((hex >> 16) & 0xff) / 255,
        green: CGFloat((hex >> 8) & 0xff) / 255,
        blue: CGFloat(hex & 0xff) / 255,
        alpha: alpha
    )
}

private func sparkyDynamic(dark: UIColor, light: UIColor) -> UIColor {
    UIColor { $0.userInterfaceStyle == .dark ? dark : light }
}

// Palette shared with Rota (health.erlin.org lineage): warm near-black, low-contrast
// cards, ink for emphasis and one green for "live / done / good".
extension UIColor {
    static let sparkyText = sparkyDynamic(dark: sparkyHex(0xf0eeeb), light: sparkyHex(0x171513))
    static let sparkyBackground = sparkyDynamic(dark: sparkyHex(0x100e0c), light: sparkyHex(0xf5f3ef))
}

extension Color {
    static let sparkyBackground = Color(uiColor: .sparkyBackground)
    static let sparkySurface = Color(uiColor: sparkyDynamic(dark: sparkyHex(0x191714), light: sparkyHex(0xebe8e3)))
    static let sparkySurfaceRaised = Color(uiColor: sparkyDynamic(dark: sparkyHex(0x24211e), light: sparkyHex(0xe0dcd6)))
    static let sparkyBorder = Color(uiColor: sparkyDynamic(dark: sparkyHex(0x2b2825), light: sparkyHex(0xd6d2cb)))

    // The single accent: active indicators, completion, progress, selection marks.
    static let sparkyAccent = Color(uiColor: sparkyDynamic(dark: sparkyHex(0x62d286), light: sparkyHex(0x1e9b52)))
    static let sparkyAccentBase = sparkyAccent
    // Icons and emphasised text are ink, as in Rota; green is reserved for live/done marks.
    static let sparkyAccentText = sparkyText
    // Nested blocks and icon tiles sit on the raised neutral, as in Rota; green stays for marks.
    static let sparkyAccentSoft = sparkySurfaceRaised
    static let sparkyOnAccent = Color(uiColor: sparkyDynamic(dark: sparkyHex(0x100e0c), light: sparkyHex(0xffffff)))

    // Primary buttons are ink-filled pills.
    static let sparkyPrimary = Color(uiColor: .sparkyText)
    static let sparkyOnPrimary = Color(uiColor: .sparkyBackground)

    static let sparkyText = Color(uiColor: .sparkyText)
    // Light values sit a step darker than Rota's so caption text keeps 4.5:1 on raised blocks.
    static let sparkyMuted = Color(uiColor: sparkyDynamic(dark: sparkyHex(0x9b9893), light: sparkyHex(0x63605a)))
    static let sparkyFaint = Color(uiColor: sparkyDynamic(dark: sparkyHex(0x5c5853), light: sparkyHex(0xa9a59f)))

    // Green for text/icons; darker in light mode so small text keeps 4.5:1 on cards.
    static let sparkySuccess = Color(uiColor: sparkyDynamic(dark: sparkyHex(0x62d286), light: sparkyHex(0x136a38)))
    static let sparkyWarning = Color(uiColor: sparkyDynamic(dark: sparkyHex(0xf0b54c), light: sparkyHex(0x8a5207)))
    static let sparkyDanger = Color(uiColor: sparkyDynamic(dark: sparkyHex(0xf07a63), light: sparkyHex(0xa8361f)))

    // Cards are flat fills; nothing casts a shadow.
    static let sparkyCardShadow = Color.clear
}

enum SparkyLayout {
    static let pageInset: CGFloat = 16
    static let cardRadius: CGFloat = 16
    static let innerRadius: CGFloat = 12
    static let controlRadius: CGFloat = 11
}

struct SparkyBackdrop: View {
    var body: some View {
        Color.sparkyBackground
            .ignoresSafeArea()
    }
}

struct SparkyCardModifier: ViewModifier {
    var padding: CGFloat

    func body(content: Content) -> some View {
        content
            .padding(padding)
            .background(
                Color.sparkySurface,
                in: RoundedRectangle(cornerRadius: SparkyLayout.cardRadius, style: .continuous)
            )
    }
}

extension View {
    func sparkyCard(padding: CGFloat = 16) -> some View {
        modifier(SparkyCardModifier(padding: padding))
    }
}

/// Small uppercase, letter-spaced label (Rota's eyebrow).
struct SparkyEyebrow: View {
    let text: String
    var color: Color = .sparkyMuted
    @Environment(\.dynamicTypeSize) private var dynamicTypeSize

    var body: some View {
        Text(text.uppercased())
            .sparkyFont(size: 11, weight: .medium, relativeTo: .caption2)
            .tracking(0.8)
            .foregroundStyle(color)
            .lineLimit(dynamicTypeSize.isAccessibilitySize ? 3 : 1)
    }
}

struct SparkySectionHeader: View {
    let eyebrow: String?
    let title: String
    var detail: String? = nil

    var body: some View {
        VStack(alignment: .leading, spacing: 6) {
            if let eyebrow {
                SparkyEyebrow(text: eyebrow)
            }
            HStack(alignment: .firstTextBaseline) {
                Text(title)
                    .font(.sparkySerif(.title3))
                    .tracking(-0.4)
                    .foregroundStyle(Color.sparkyText)
                Spacer(minLength: 8)
                if let detail {
                    Text(detail)
                        .font(.sparky(.caption))
                        .foregroundStyle(Color.sparkyMuted)
                }
            }
        }
    }
}

/// Lowercase bold name with a green full stop — "tools." — like Rota's headers.
struct SparkyWordmark: View {
    let text: String
    var size: CGFloat = 26

    var body: some View {
        Text("\(Text(text).foregroundStyle(Color.sparkyText))\(Text(".").foregroundStyle(Color.sparkyAccent))")
            .sparkyFont(size: size, weight: .bold, relativeTo: .title)
            .tracking(-0.8)
            .lineLimit(1)
            .minimumScaleFactor(0.7)
            .accessibilityLabel(text.capitalized)
            .accessibilityAddTraits(.isHeader)
    }
}

/// Top-of-page header for tab roots: wordmark, optional subtitle, trailing actions.
struct SparkyPageHeader<Trailing: View>: View {
    let title: String
    var subtitle: String? = nil
    let trailing: Trailing

    init(_ title: String, subtitle: String? = nil, @ViewBuilder trailing: () -> Trailing = { EmptyView() }) {
        self.title = title
        self.subtitle = subtitle
        self.trailing = trailing()
    }

    var body: some View {
        VStack(alignment: .leading, spacing: 6) {
            HStack(alignment: .center, spacing: 10) {
                SparkyWordmark(text: title.lowercased())
                Spacer(minLength: 8)
                trailing
            }
            .frame(minHeight: 44)
            if let subtitle {
                Text(subtitle)
                    .font(.sparky(.subheadline))
                    .foregroundStyle(Color.sparkyMuted)
                    .fixedSize(horizontal: false, vertical: true)
            }
        }
        .padding(.top, 8)
        .padding(.bottom, 6)
    }
}

/// Round 34pt icon button used in page headers.
struct SparkyHeaderButton: View {
    let systemImage: String
    var isActive = false
    let action: () -> Void

    var body: some View {
        Button(action: action) {
            Image(systemName: systemImage)
                .font(.system(size: 14, weight: .semibold))
                .foregroundStyle(isActive ? Color.sparkyOnPrimary : Color.sparkyText)
                .frame(width: 36, height: 36)
                .background(Circle().fill(isActive ? Color.sparkyPrimary : Color.sparkySurfaceRaised))
                .contentShape(Circle())
        }
        .buttonStyle(SparkyPressStyle())
        .frame(width: 44, height: 44)
        .contentShape(Rectangle())
    }
}

/// Inline search field that replaces the system search bar on tab roots.
struct SparkySearchField: View {
    let prompt: String
    @Binding var text: String
    var focus: FocusState<Bool>.Binding? = nil

    var body: some View {
        HStack(spacing: 9) {
            Image(systemName: "magnifyingglass")
                .font(.system(size: 14, weight: .semibold))
                .foregroundStyle(Color.sparkyMuted)
            field
                .font(.sparky(.body))
                .foregroundStyle(Color.sparkyText)
                .submitLabel(.search)
                .autocorrectionDisabled()
                .accessibilityAddTraits(.isSearchField)
            if !text.isEmpty {
                Button {
                    text = ""
                } label: {
                    Image(systemName: "xmark.circle.fill")
                        .foregroundStyle(Color.sparkyFaint)
                }
                .buttonStyle(.plain)
                .accessibilityLabel("Clear search")
            }
        }
        .padding(.horizontal, 14)
        .frame(minHeight: 46)
        .background(Color.sparkySurface, in: RoundedRectangle(cornerRadius: SparkyLayout.controlRadius + 2, style: .continuous))
    }

    @ViewBuilder
    private var field: some View {
        if let focus {
            TextField(prompt, text: $text).focused(focus)
        } else {
            TextField(prompt, text: $text)
        }
    }
}

/// 7pt status dot; pulses while something is live.
struct SparkyDot: View {
    var color: Color = .sparkyAccent
    var pulsing = false
    @State private var animate = false

    var body: some View {
        Circle()
            .fill(color)
            .frame(width: 7, height: 7)
            .background {
                if pulsing {
                    Circle()
                        .fill(color.opacity(0.45))
                        .scaleEffect(animate ? 2.8 : 1)
                        .opacity(animate ? 0 : 1)
                }
            }
            .onAppear {
                guard pulsing else { return }
                withAnimation(.easeOut(duration: 1.8).repeatForever(autoreverses: false)) {
                    animate = true
                }
            }
            .accessibilityHidden(true)
    }
}

/// Thin capsule progress bar on a translucent ink track.
struct SparkyProgressTrack: View {
    var value: Double
    var color: Color = .sparkyText

    var body: some View {
        GeometryReader { geo in
            ZStack(alignment: .leading) {
                Capsule().fill(Color.sparkyText.opacity(0.1))
                Capsule().fill(color)
                    .frame(width: geo.size.width * min(1, max(0, value)))
            }
        }
        .frame(height: 4)
        .accessibilityHidden(true)
    }
}

/// Rota's stat card: eyebrow, big mono value, optional progress and a muted foot line.
struct SparkyStatCard: View {
    let label: String
    let value: String
    var foot: String? = nil
    var progress: Double? = nil
    var valueColor: Color = .sparkyText

    var body: some View {
        VStack(alignment: .leading, spacing: 10) {
            SparkyEyebrow(text: label)
            Text(value)
                .sparkyMonoFont(size: 26, weight: .medium, relativeTo: .title2)
                .tracking(-0.5)
                .foregroundStyle(valueColor)
                .lineLimit(1)
                .minimumScaleFactor(0.6)
            Spacer(minLength: 0)
            if let progress {
                SparkyProgressTrack(value: progress)
            }
            if let foot {
                Text(foot)
                    .sparkyFont(size: 12.5, relativeTo: .caption)
                    .foregroundStyle(Color.sparkyMuted)
                    .lineLimit(2)
                    .minimumScaleFactor(0.85)
            }
        }
        .frame(maxWidth: .infinity, minHeight: 104, alignment: .topLeading)
        .sparkyCard(padding: 16)
        .accessibilityElement(children: .combine)
    }
}

struct SparkyPressStyle: ButtonStyle {
    func makeBody(configuration: Configuration) -> some View {
        configuration.label
            .scaleEffect(configuration.isPressed ? 0.92 : 1)
            .opacity(configuration.isPressed ? 0.85 : 1)
            .animation(.spring(duration: 0.2), value: configuration.isPressed)
    }
}

struct SparkyBrandMark: View {
    var size: CGFloat = 36

    var body: some View {
        ZStack {
            RoundedRectangle(cornerRadius: size * 0.28, style: .continuous)
                .fill(Color.sparkyPrimary)
            SparkyLogoGlyph()
                .padding(size * 0.10)
        }
        .frame(width: size, height: size)
        .accessibilityHidden(true)
    }
}

private struct SparkyLogoGlyph: View {
    var body: some View {
        Canvas { context, canvasSize in
            let scale = min(canvasSize.width, canvasSize.height) / 40
            let xOffset = (canvasSize.width - 40 * scale) / 2
            let yOffset = (canvasSize.height - 40 * scale) / 2
            func point(_ x: CGFloat, _ y: CGFloat) -> CGPoint {
                CGPoint(x: xOffset + x * scale, y: yOffset + y * scale)
            }

            var bolt = Path()
            bolt.move(to: point(10, 13))
            bolt.addLine(to: point(19, 13))
            bolt.addLine(to: point(15.4, 20.1))
            bolt.addLine(to: point(22.6, 20.1))
            bolt.addLine(to: point(16.8, 30))
            bolt.addLine(to: point(18.9, 22.8))
            bolt.addLine(to: point(10, 22.8))
            bolt.closeSubpath()
            context.fill(bolt, with: .color(Color.sparkyAccent))

            var terminals = Path()
            terminals.move(to: point(8, 24.5))
            terminals.addLine(to: point(12.5, 24.5))
            terminals.move(to: point(27.5, 15.5))
            terminals.addLine(to: point(32, 15.5))
            context.stroke(
                terminals,
                with: .color(Color.sparkyOnPrimary),
                style: StrokeStyle(lineWidth: 2.2 * scale, lineCap: .round)
            )

            var corners = Path()
            corners.move(to: point(8, 9.5))
            corners.addCurve(
                to: point(10.5, 7),
                control1: point(8, 8.12),
                control2: point(9.12, 7)
            )
            corners.addLine(to: point(15.5, 7))
            corners.move(to: point(24.5, 33))
            corners.addLine(to: point(29.5, 33))
            corners.addQuadCurve(to: point(32, 30.5), control: point(32, 33))
            corners.addLine(to: point(32, 25.5))
            context.stroke(
                corners,
                with: .color(Color.sparkyOnPrimary),
                style: StrokeStyle(lineWidth: 2 * scale, lineCap: .round, lineJoin: .round)
            )
        }
    }
}

/// Rota's large pill: ink-filled, 52pt tall.
struct SparkyPrimaryButtonStyle: ButtonStyle {
    func makeBody(configuration: Configuration) -> some View {
        let shape = RoundedRectangle(cornerRadius: 14, style: .continuous)
        configuration.label
            .sparkyFont(size: 16, weight: .semibold, relativeTo: .headline)
            .foregroundStyle(Color.sparkyOnPrimary)
            .frame(maxWidth: .infinity)
            .padding(.horizontal, 20)
            .frame(minHeight: 52)
            .background(shape.fill(Color.sparkyPrimary))
            .contentShape(shape)
            .scaleEffect(configuration.isPressed ? 0.97 : 1)
            .opacity(configuration.isPressed ? 0.85 : 1)
            .animation(.spring(duration: 0.25), value: configuration.isPressed)
    }
}

/// Rota's small outline pill.
struct SparkySecondaryButtonStyle: ButtonStyle {
    func makeBody(configuration: Configuration) -> some View {
        let shape = RoundedRectangle(cornerRadius: SparkyLayout.controlRadius, style: .continuous)
        configuration.label
            .sparkyFont(size: 14, weight: .semibold, relativeTo: .subheadline)
            .foregroundStyle(Color.sparkyText)
            .padding(.horizontal, 12)
            .frame(minHeight: 34)
            .overlay(shape.stroke(Color.sparkyBorder, lineWidth: 1))
            .contentShape(shape)
            .scaleEffect(configuration.isPressed ? 0.97 : 1)
            .opacity(configuration.isPressed ? 0.85 : 1)
            .animation(.spring(duration: 0.25), value: configuration.isPressed)
    }
}

struct SparkyField: View {
    let title: String
    @Binding var text: String
    var unit: String? = nil

    var body: some View {
        VStack(alignment: .leading, spacing: 7) {
            SparkyEyebrow(text: title)
            HStack(spacing: 8) {
                TextField("0", text: $text)
                    .keyboardType(.decimalPad)
                    .font(.sparkyMono(.body, weight: .medium))
                    .foregroundStyle(Color.sparkyText)
                if let unit {
                    Text(unit)
                        .font(.sparkyMono(.caption))
                        .foregroundStyle(Color.sparkyMuted)
                }
            }
            .padding(.horizontal, 14)
            .frame(minHeight: 50)
            .background(
                Color.sparkySurfaceRaised,
                in: RoundedRectangle(cornerRadius: SparkyLayout.innerRadius, style: .continuous)
            )
        }
    }
}

struct SparkyResultRow: View {
    let label: String
    let value: String
    var emphasized = false

    var body: some View {
        HStack(alignment: .firstTextBaseline) {
            Text(label)
                .font(.sparky(.subheadline))
                .foregroundStyle(Color.sparkyMuted)
            Spacer()
            Text(value)
                .font(emphasized ? .sparkyMono(.title2, weight: .medium) : .sparkyMono(.body, weight: .medium))
                .tracking(emphasized ? -0.5 : 0)
                .foregroundStyle(Color.sparkyText)
                .multilineTextAlignment(.trailing)
        }
        .accessibilityElement(children: .combine)
    }
}

enum AppAppearance: String, CaseIterable, Identifiable {
    case system, light, dark

    var id: String { rawValue }
    var title: String { rawValue.capitalized }
    var colorScheme: ColorScheme? {
        switch self {
        case .system: nil
        case .light: .light
        case .dark: .dark
        }
    }
}
