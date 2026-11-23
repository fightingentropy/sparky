import SwiftUI
import UIKit

/// Sparky type, matching Rota: SF Pro for text, SF Mono for numerals, counts and
/// readouts, and no serif. Every helper scales with Dynamic Type.
enum SparkyFonts {
    /// Apple's default point size for each text style.
    static func pointSize(for style: Font.TextStyle) -> CGFloat {
        switch style {
        case .largeTitle: 34
        case .title: 28
        case .title2: 22
        case .title3: 20
        case .headline: 17
        case .body: 17
        case .callout: 16
        case .subheadline: 15
        case .footnote: 13
        case .caption: 12
        case .caption2: 11
        default: 17
        }
    }

    static func uiTextStyle(for style: Font.TextStyle) -> UIFont.TextStyle {
        switch style {
        case .largeTitle: .largeTitle
        case .title: .title1
        case .title2: .title2
        case .title3: .title3
        case .headline: .headline
        case .callout: .callout
        case .subheadline: .subheadline
        case .footnote: .footnote
        case .caption: .caption1
        case .caption2: .caption2
        default: .body
        }
    }

}

extension Font {
    /// SF Pro for a text style. Headline defaults to semibold; everything else to regular.
    static func sparky(_ style: Font.TextStyle, weight: Font.Weight? = nil) -> Font {
        .system(style, design: .default, weight: weight ?? (style == .headline ? .semibold : .regular))
    }

    /// Display headings: bold SF Pro (pair with negative tracking at the call site).
    static func sparkySerif(_ style: Font.TextStyle) -> Font {
        .system(style, design: .default, weight: style == .largeTitle || style == .title ? .bold : .semibold)
    }

    /// SF Mono for meta labels, counts and numeric readouts.
    static func sparkyMono(_ style: Font.TextStyle, weight: Font.Weight? = nil) -> Font {
        .system(style, design: .monospaced, weight: weight ?? (style == .headline ? .semibold : .regular))
    }

    /// Fixed-size variants for text drawn inside diagrams that must not scale.
    static func sparkyFixed(size: CGFloat, weight: Font.Weight = .regular) -> Font {
        .system(size: size, weight: weight, design: .default)
    }

    static func sparkyMonoFixed(size: CGFloat, weight: Font.Weight = .regular) -> Font {
        .system(size: size, weight: weight, design: .monospaced)
    }
}

/// A fixed design size (Rota's 11pt eyebrow, 26pt wordmark…) that follows Dynamic Type,
/// including runtime changes and `.dynamicTypeSize` overrides, via `@ScaledMetric`.
private struct SparkyScaledFont: ViewModifier {
    @ScaledMetric private var size: CGFloat
    let weight: Font.Weight
    let design: Font.Design

    init(size: CGFloat, weight: Font.Weight, design: Font.Design, relativeTo style: Font.TextStyle) {
        _size = ScaledMetric(wrappedValue: size, relativeTo: style)
        self.weight = weight
        self.design = design
    }

    func body(content: Content) -> some View {
        content.font(.system(size: size, weight: weight, design: design))
    }
}

extension View {
    func sparkyFont(size: CGFloat, weight: Font.Weight = .regular, relativeTo style: Font.TextStyle = .body) -> some View {
        modifier(SparkyScaledFont(size: size, weight: weight, design: .default, relativeTo: style))
    }

    func sparkyMonoFont(size: CGFloat, weight: Font.Weight = .regular, relativeTo style: Font.TextStyle = .body) -> some View {
        modifier(SparkyScaledFont(size: size, weight: weight, design: .monospaced, relativeTo: style))
    }
}

/// Navigation bars: bold, tightly tracked large titles and semibold inline titles on
/// the warm background, like Rota's headers.
enum SparkyAppearance {
    static func configureNavigationBar() {
        let largeFont = UIFontMetrics(forTextStyle: .largeTitle)
            .scaledFont(for: .systemFont(ofSize: 30, weight: .bold))
        let inlineFont = UIFontMetrics(forTextStyle: .headline)
            .scaledFont(for: .systemFont(ofSize: 17, weight: .semibold))
        let text = UIColor.sparkyText

        func make(configure: (UINavigationBarAppearance) -> Void) -> UINavigationBarAppearance {
            let appearance = UINavigationBarAppearance()
            configure(appearance)
            appearance.largeTitleTextAttributes = [.font: largeFont, .foregroundColor: text, .kern: -0.8]
            appearance.titleTextAttributes = [.font: inlineFont, .foregroundColor: text]
            return appearance
        }

        let navigationBar = UINavigationBar.appearance()
        navigationBar.standardAppearance = make { $0.configureWithDefaultBackground() }
        navigationBar.compactAppearance = make { $0.configureWithDefaultBackground() }
        navigationBar.compactScrollEdgeAppearance = make { $0.configureWithTransparentBackground() }
        navigationBar.scrollEdgeAppearance = make { $0.configureWithTransparentBackground() }
    }
}
