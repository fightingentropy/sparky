import CoreText
import SwiftUI
import UIKit

/// Geist typography for Sparky. Faces are bundled as .ttf resources and
/// registered at launch; every helper scales with Dynamic Type via
/// `relativeTo:` / `UIFontMetrics`.
enum SparkyFonts {
    static let sans = "Geist"
    static let mono = "Geist Mono"
    static let serif = "Geist Serif"

    /// Every bundled face (PostScript names).
    static let postScriptNames = [
        "Geist-Regular", "Geist-Medium", "Geist-SemiBold", "Geist-Bold",
        "GeistMono-Regular", "GeistMono-Medium", "GeistMono-SemiBold", "GeistMono-Bold",
        "GeistSerif-Regular"
    ]

    nonisolated(unsafe) private static var didRegister = false
    private static let lock = NSLock()

    /// Registers the bundled fonts for this process. Safe to call repeatedly.
    @discardableResult
    static func registerAll(in bundle: Bundle = .main) -> Bool {
        lock.lock()
        defer { lock.unlock() }
        guard !didRegister else { return true }
        let urls = (bundle.urls(forResourcesWithExtension: "ttf", subdirectory: nil) ?? [])
            + (bundle.urls(forResourcesWithExtension: "ttf", subdirectory: "Fonts") ?? [])
        guard !urls.isEmpty else { return false }
        for url in urls {
            var error: Unmanaged<CFError>?
            // Already-registered errors are expected on a second call and harmless.
            CTFontManagerRegisterFontsForURL(url as CFURL, .process, &error)
        }
        didRegister = true
        return true
    }

    static func sansName(for weight: Font.Weight) -> String {
        switch weight {
        case .medium: "Geist-Medium"
        case .semibold: "Geist-SemiBold"
        case .bold, .heavy, .black: "Geist-Bold"
        default: "Geist-Regular"
        }
    }

    static func monoName(for weight: Font.Weight) -> String {
        switch weight {
        case .medium: "GeistMono-Medium"
        case .semibold: "GeistMono-SemiBold"
        case .bold, .heavy, .black: "GeistMono-Bold"
        default: "GeistMono-Regular"
        }
    }

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

    /// A Geist UIFont scaled with Dynamic Type for a text style.
    static func uiFont(_ postScriptName: String, style: UIFont.TextStyle, size: CGFloat) -> UIFont {
        let base = UIFont(name: postScriptName, size: size) ?? UIFont.systemFont(ofSize: size)
        return UIFontMetrics(forTextStyle: style).scaledFont(for: base)
    }
}

extension Font {
    /// Geist at Apple's default size for `style`, scaling with Dynamic Type.
    /// Headline defaults to semibold; everything else to regular.
    static func sparky(_ style: Font.TextStyle, weight: Font.Weight? = nil) -> Font {
        let resolved = weight ?? (style == .headline ? .semibold : .regular)
        return .custom(SparkyFonts.sansName(for: resolved), size: SparkyFonts.pointSize(for: style), relativeTo: style)
    }

    /// Geist Serif (400 only) for display headings.
    static func sparkySerif(_ style: Font.TextStyle) -> Font {
        .custom("GeistSerif-Regular", size: SparkyFonts.pointSize(for: style), relativeTo: style)
    }

    /// Geist Mono for meta labels, counts and numeric readouts.
    static func sparkyMono(_ style: Font.TextStyle, weight: Font.Weight? = nil) -> Font {
        let resolved = weight ?? (style == .headline ? .semibold : .regular)
        return .custom(SparkyFonts.monoName(for: resolved), size: SparkyFonts.pointSize(for: style), relativeTo: style)
    }

    /// Size-based Geist (fixed design size that still scales relative to `style`).
    static func sparky(size: CGFloat, weight: Font.Weight = .regular, relativeTo style: Font.TextStyle = .body) -> Font {
        .custom(SparkyFonts.sansName(for: weight), size: size, relativeTo: style)
    }

    static func sparkyMono(size: CGFloat, weight: Font.Weight = .regular, relativeTo style: Font.TextStyle = .body) -> Font {
        .custom(SparkyFonts.monoName(for: weight), size: size, relativeTo: style)
    }

    /// Fixed-size variants for text drawn inside diagrams that must not scale.
    static func sparkyFixed(size: CGFloat, weight: Font.Weight = .regular) -> Font {
        .custom(SparkyFonts.sansName(for: weight), fixedSize: size)
    }

    static func sparkyMonoFixed(size: CGFloat, weight: Font.Weight = .regular) -> Font {
        .custom(SparkyFonts.monoName(for: weight), fixedSize: size)
    }
}

/// Navigation bar titles: Geist Serif large titles, Geist SemiBold inline titles.
enum SparkyAppearance {
    static func configureNavigationBar() {
        let largeFont = SparkyFonts.uiFont("GeistSerif-Regular", style: .largeTitle, size: 34)
        let inlineFont = SparkyFonts.uiFont("Geist-SemiBold", style: .headline, size: 17)
        let text = UIColor.sparkyText

        func make(configure: (UINavigationBarAppearance) -> Void) -> UINavigationBarAppearance {
            let appearance = UINavigationBarAppearance()
            configure(appearance)
            appearance.largeTitleTextAttributes = [.font: largeFont, .foregroundColor: text]
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
