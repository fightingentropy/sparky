import SwiftUI
import UIKit

extension Color {
    static let sparkyBackground = Color(uiColor: UIColor { traits in
        traits.userInterfaceStyle == .dark
            ? UIColor(red: 22 / 255, green: 19 / 255, blue: 15 / 255, alpha: 1)
            : UIColor(red: 246 / 255, green: 249 / 255, blue: 252 / 255, alpha: 1)
    })

    static let sparkySurface = Color(uiColor: UIColor { traits in
        traits.userInterfaceStyle == .dark
            ? UIColor(red: 30 / 255, green: 26 / 255, blue: 21 / 255, alpha: 1)
            : .white
    })

    static let sparkySurfaceRaised = Color(uiColor: UIColor { traits in
        traits.userInterfaceStyle == .dark
            ? UIColor(red: 36 / 255, green: 31 / 255, blue: 25 / 255, alpha: 1)
            : UIColor(red: 237 / 255, green: 247 / 255, blue: 1, alpha: 1)
    })

    static let sparkyBorder = Color(uiColor: UIColor { traits in
        traits.userInterfaceStyle == .dark
            ? UIColor.white.withAlphaComponent(0.07)
            : UIColor(red: 36 / 255, green: 105 / 255, blue: 150 / 255, alpha: 0.14)
    })

    // Foreground accent: the web palette's contrast-safe --accent-strong token.
    static let sparkyAccent = Color(uiColor: UIColor { traits in
        traits.userInterfaceStyle == .dark
            ? UIColor(red: 203 / 255, green: 153 / 255, blue: 84 / 255, alpha: 1)
            : UIColor(red: 22 / 255, green: 134 / 255, blue: 194 / 255, alpha: 1)
    })

    // Filled controls and logo tiles use the web palette's --accent token.
    static let sparkyAccentBase = Color(uiColor: UIColor { traits in
        traits.userInterfaceStyle == .dark
            ? UIColor(red: 189 / 255, green: 139 / 255, blue: 74 / 255, alpha: 1)
            : UIColor(red: 85 / 255, green: 181 / 255, blue: 232 / 255, alpha: 1)
    })

    static let sparkyAccentSoft = Color(uiColor: UIColor { traits in
        traits.userInterfaceStyle == .dark
            ? UIColor(red: 189 / 255, green: 139 / 255, blue: 74 / 255, alpha: 0.12)
            : UIColor(red: 85 / 255, green: 181 / 255, blue: 232 / 255, alpha: 0.15)
    })

    static let sparkyOnAccent = Color(uiColor: UIColor { traits in
        traits.userInterfaceStyle == .dark
            ? UIColor(red: 12 / 255, green: 11 / 255, blue: 10 / 255, alpha: 1)
            : UIColor(red: 8 / 255, green: 43 / 255, blue: 63 / 255, alpha: 1)
    })

    static let sparkyText = Color(uiColor: UIColor { traits in
        traits.userInterfaceStyle == .dark
            ? UIColor(red: 227 / 255, green: 223 / 255, blue: 214 / 255, alpha: 1)
            : UIColor(red: 23 / 255, green: 50 / 255, blue: 71 / 255, alpha: 1)
    })

    static let sparkyMuted = Color(uiColor: UIColor { traits in
        traits.userInterfaceStyle == .dark
            ? UIColor(red: 179 / 255, green: 172 / 255, blue: 160 / 255, alpha: 1)
            : UIColor(red: 77 / 255, green: 104 / 255, blue: 123 / 255, alpha: 1)
    })

    static let sparkySuccess = Color(red: 52 / 255, green: 168 / 255, blue: 113 / 255)
    static let sparkyDanger = Color(uiColor: UIColor { traits in
        traits.userInterfaceStyle == .dark
            ? UIColor(red: 207 / 255, green: 139 / 255, blue: 111 / 255, alpha: 1)
            : UIColor(red: 199 / 255, green: 83 / 255, blue: 83 / 255, alpha: 1)
    })

    static let sparkyGridLine = Color(uiColor: UIColor { traits in
        traits.userInterfaceStyle == .dark
            ? UIColor.white.withAlphaComponent(0.05)
            : UIColor(red: 72 / 255, green: 156 / 255, blue: 207 / 255, alpha: 0.10)
    })

    static let sparkyCardShadow = Color(uiColor: UIColor { traits in
        traits.userInterfaceStyle == .dark
            ? .clear
            : UIColor(red: 49 / 255, green: 104 / 255, blue: 137 / 255, alpha: 0.08)
    })
}

enum SparkyLayout {
    static let pageInset: CGFloat = 16
    static let cardRadius: CGFloat = 22
    static let controlRadius: CGFloat = 14
}

struct SparkyBackdrop: View {
    var body: some View {
        ZStack {
            Color.sparkyBackground

            Canvas { context, size in
                let spacing: CGFloat = 28
                var path = Path()
                stride(from: -size.height, through: size.width + size.height, by: spacing).forEach { offset in
                    path.move(to: CGPoint(x: offset, y: 0))
                    path.addLine(to: CGPoint(x: offset - size.height, y: size.height))
                }
                context.stroke(
                    path,
                    with: .color(Color.sparkyGridLine),
                    lineWidth: 0.5
                )
            }
        }
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
            .shadow(color: Color.sparkyCardShadow, radius: 18, y: 8)
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
            .font(.caption2.weight(.bold).monospaced())
            .tracking(1.4)
            .foregroundStyle(Color.sparkyAccent)
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
                    .font(.title3.weight(.bold))
                    .foregroundStyle(Color.sparkyText)
                Spacer(minLength: 8)
                if let detail {
                    Text(detail)
                        .font(.caption.weight(.semibold))
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
            .font(.headline)
            .foregroundStyle(Color.sparkyOnAccent)
            .frame(maxWidth: .infinity)
            .padding(.horizontal, 16)
            .padding(.vertical, 14)
            .background(Color.sparkyAccentBase.opacity(configuration.isPressed ? 0.75 : 1))
            .clipShape(RoundedRectangle(cornerRadius: SparkyLayout.controlRadius, style: .continuous))
            .scaleEffect(configuration.isPressed ? 0.985 : 1)
            .animation(.easeOut(duration: 0.12), value: configuration.isPressed)
    }
}

struct SparkySecondaryButtonStyle: ButtonStyle {
    func makeBody(configuration: Configuration) -> some View {
        configuration.label
            .font(.subheadline.weight(.semibold))
            .foregroundStyle(Color.sparkyAccent)
            .padding(.horizontal, 14)
            .padding(.vertical, 10)
            .background(Color.sparkyAccentSoft.opacity(configuration.isPressed ? 0.65 : 1))
            .clipShape(RoundedRectangle(cornerRadius: 12, style: .continuous))
            .overlay {
                RoundedRectangle(cornerRadius: 12, style: .continuous)
                    .stroke(Color.sparkyAccent.opacity(0.25), lineWidth: 1)
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
                .font(.caption.weight(.semibold))
                .foregroundStyle(Color.sparkyMuted)
            HStack(spacing: 8) {
                TextField("0", text: $text)
                    .keyboardType(.decimalPad)
                    .font(.body.monospacedDigit())
                    .foregroundStyle(Color.sparkyText)
                if let unit {
                    Text(unit)
                        .font(.caption.weight(.bold))
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
                .font(.subheadline)
                .foregroundStyle(Color.sparkyMuted)
            Spacer()
            Text(value)
                .font(emphasized ? .title3.bold().monospacedDigit() : .body.bold().monospacedDigit())
                .foregroundStyle(emphasized ? Color.sparkyAccent : Color.sparkyText)
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
