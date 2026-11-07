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

// Palette from the erlin.org-derived design spec (warm neutrals, one orange accent).
extension UIColor {
    static let sparkyText = sparkyDynamic(dark: sparkyHex(0xedebe6), light: sparkyHex(0x191512))
}

extension Color {
    static let sparkyBackground = Color(uiColor: sparkyDynamic(dark: sparkyHex(0x100e0c), light: sparkyHex(0xfbfaf7)))
    static let sparkySurface = Color(uiColor: sparkyDynamic(dark: sparkyHex(0x171412), light: sparkyHex(0xfefdfc)))
    static let sparkySurfaceRaised = Color(uiColor: sparkyDynamic(dark: sparkyHex(0x1f1c1a), light: sparkyHex(0xf2f0ec)))
    static let sparkyBorder = Color(uiColor: sparkyDynamic(dark: sparkyHex(0x262422), light: sparkyHex(0xe0ddd9)))

    // Highlight: active indicators, links, focus, selected, progress.
    static let sparkyAccent = Color(uiColor: sparkyDynamic(dark: sparkyHex(0xfa7a45), light: sparkyHex(0xcf3c12)))
    static let sparkyAccentBase = sparkyAccent
    // Accent for text: accent-strong in light so it keeps 4.5:1 on accent-soft / surface-alt.
    static let sparkyAccentText = Color(uiColor: sparkyDynamic(dark: sparkyHex(0xfa7a45), light: sparkyHex(0xb93004)))
    static let sparkyAccentSoft = Color(uiColor: sparkyDynamic(dark: sparkyHex(0x2c1b13), light: sparkyHex(0xf8ebe5)))
    static let sparkyOnAccent = Color(uiColor: sparkyDynamic(dark: sparkyHex(0x191512), light: sparkyHex(0xffffff)))

    // Primary buttons are foreground-filled, not orange.
    static let sparkyPrimary = Color(uiColor: sparkyDynamic(dark: sparkyHex(0xedebe6), light: sparkyHex(0x191512)))
    static let sparkyOnPrimary = Color(uiColor: sparkyDynamic(dark: sparkyHex(0x191512), light: sparkyHex(0xfbfaf7)))

    static let sparkyText = Color(uiColor: .sparkyText)
    static let sparkyMuted = Color(uiColor: sparkyDynamic(dark: sparkyHex(0xa29e98), light: sparkyHex(0x67625d)))

    static let sparkySuccess = Color(uiColor: sparkyDynamic(dark: sparkyHex(0x62bb78), light: sparkyHex(0x267543)))
    static let sparkyDanger = Color(uiColor: sparkyDynamic(dark: sparkyHex(0xff6467), light: sparkyHex(0xc2272d)))

    // Light mode only: a barely-there hairline lift. Dark mode uses no shadow.
    static let sparkyCardShadow = Color(uiColor: sparkyDynamic(dark: .clear, light: sparkyHex(0x191512, alpha: 0.05)))
}

enum SparkyLayout {
    static let pageInset: CGFloat = 16
    static let cardRadius: CGFloat = 14
    static let controlRadius: CGFloat = 10
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
            .background(Color.sparkySurface)
            .clipShape(RoundedRectangle(cornerRadius: SparkyLayout.cardRadius, style: .continuous))
            .overlay {
                RoundedRectangle(cornerRadius: SparkyLayout.cardRadius, style: .continuous)
                    .stroke(Color.sparkyBorder, lineWidth: 1)
            }
            .shadow(color: Color.sparkyCardShadow, radius: 2, y: 1)
    }
}

extension View {
    func sparkyCard(padding: CGFloat = 16) -> some View {
        modifier(SparkyCardModifier(padding: padding))
    }
}

struct SparkyEyebrow: View {
    let text: String

    var body: some View {
        Text(text.uppercased())
            .font(.sparkyMono(.caption2, weight: .medium))
            .tracking(0.7)
            .foregroundStyle(Color.sparkyAccentText)
    }
}

struct SparkySectionHeader: View {
    let eyebrow: String?
    let title: String
    var detail: String? = nil

    var body: some View {
        VStack(alignment: .leading, spacing: 5) {
            if let eyebrow {
                SparkyEyebrow(text: eyebrow)
            }
            HStack(alignment: .firstTextBaseline) {
                Text(title)
                    .font(.sparkySerif(.title3))
                    .tracking(-0.3)
                    .foregroundStyle(Color.sparkyText)
                Spacer(minLength: 8)
                if let detail {
                    Text(detail)
                        .font(.sparky(.caption, weight: .semibold))
                        .foregroundStyle(Color.sparkyMuted)
                }
            }
        }
    }
}

struct SparkyBrandMark: View {
    var size: CGFloat = 36

    var body: some View {
        ZStack {
            RoundedRectangle(cornerRadius: size * 0.28, style: .continuous)
                .fill(Color.sparkyAccentBase)
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
            context.fill(bolt, with: .color(Color.sparkyOnAccent))

            var terminals = Path()
            terminals.move(to: point(8, 24.5))
            terminals.addLine(to: point(12.5, 24.5))
            terminals.move(to: point(27.5, 15.5))
            terminals.addLine(to: point(32, 15.5))
            context.stroke(
                terminals,
                with: .color(Color.sparkyOnAccent),
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
                with: .color(Color.sparkyOnAccent),
                style: StrokeStyle(lineWidth: 2 * scale, lineCap: .round, lineJoin: .round)
            )
        }
    }
}

struct SparkyPrimaryButtonStyle: ButtonStyle {
    func makeBody(configuration: Configuration) -> some View {
        configuration.label
            .font(.sparky(.headline, weight: .medium))
            .foregroundStyle(Color.sparkyOnPrimary)
            .frame(maxWidth: .infinity)
            .padding(.horizontal, 16)
            .padding(.vertical, 14)
            .background(Color.sparkyPrimary.opacity(configuration.isPressed ? 0.8 : 1))
            .clipShape(RoundedRectangle(cornerRadius: SparkyLayout.controlRadius, style: .continuous))
            .scaleEffect(configuration.isPressed ? 0.985 : 1)
            .animation(.easeOut(duration: 0.12), value: configuration.isPressed)
    }
}

struct SparkySecondaryButtonStyle: ButtonStyle {
    func makeBody(configuration: Configuration) -> some View {
        configuration.label
            .font(.sparky(.subheadline, weight: .medium))
            .foregroundStyle(Color.sparkyText)
            .padding(.horizontal, 14)
            .padding(.vertical, 10)
            .background(Color.sparkySurfaceRaised.opacity(configuration.isPressed ? 1 : 0))
            .clipShape(RoundedRectangle(cornerRadius: SparkyLayout.controlRadius, style: .continuous))
            .overlay {
                RoundedRectangle(cornerRadius: SparkyLayout.controlRadius, style: .continuous)
                    .stroke(Color.sparkyBorder, lineWidth: 1)
            }
    }
}

struct SparkyField: View {
    let title: String
    @Binding var text: String
    var unit: String? = nil

    var body: some View {
        VStack(alignment: .leading, spacing: 7) {
            Text(title)
                .font(.sparky(.caption, weight: .semibold))
                .foregroundStyle(Color.sparkyMuted)
            HStack(spacing: 8) {
                TextField("0", text: $text)
                    .keyboardType(.decimalPad)
                    .font(.sparky(.body).monospacedDigit())
                    .foregroundStyle(Color.sparkyText)
                if let unit {
                    Text(unit)
                        .font(.sparky(.caption, weight: .bold))
                        .foregroundStyle(Color.sparkyMuted)
                }
            }
            .padding(.horizontal, 14)
            .frame(minHeight: 50)
            .background(Color.sparkyBackground.opacity(0.75))
            .clipShape(RoundedRectangle(cornerRadius: SparkyLayout.controlRadius, style: .continuous))
            .overlay {
                RoundedRectangle(cornerRadius: SparkyLayout.controlRadius, style: .continuous)
                    .stroke(Color.sparkyBorder, lineWidth: 1)
            }
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
                .font(emphasized ? .sparky(.title3, weight: .bold).monospacedDigit() : .sparky(.body, weight: .bold).monospacedDigit())
                .foregroundStyle(emphasized ? Color.sparkyAccentText : Color.sparkyText)
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
