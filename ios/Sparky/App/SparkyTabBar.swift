import SwiftUI
import UIKit

extension AppTab {
    func icon(selected: Bool) -> String {
        switch self {
        case .tools: "wrench.adjustable" + (selected ? ".fill" : "")
        case .notes: selected ? "doc.text.fill" : "doc.text"
        case .learn: selected ? "point.topleft.down.to.point.bottomright.curvepath.fill" : systemImage
        case .exams: selected ? "checklist.checked" : "checklist"
        case .more: selected ? "ellipsis.circle.fill" : "ellipsis.circle"
        }
    }
}

/// Rota's bottom chrome: a full-width dark frosted band that fades into the content.
/// It stays dark in both appearances.
struct SparkyTabBar: View {
    let tabs: [AppTab]
    @Binding var selection: AppTab
    /// Tapping the tab that is already selected (pops it back to its root, like UITabBar).
    var onReselect: (AppTab) -> Void = { _ in }
    @Environment(\.verticalSizeClass) private var verticalSizeClass

    var body: some View {
        let compact = verticalSizeClass == .compact
        HStack(spacing: 0) {
            ForEach(tabs) { tab in
                SparkyTabButton(tab: tab, selected: selection == tab, compact: compact) {
                    if selection == tab {
                        onReselect(tab)
                    } else {
                        selection = tab
                    }
                }
            }
        }
        .padding(.horizontal, 8)
        .padding(.top, compact ? 14 : 26)
        .padding(.bottom, 2)
        .frame(maxWidth: .infinity)
        .background(alignment: .bottom) {
            SparkyGlassBackdrop()
                .ignoresSafeArea(edges: .bottom)
        }
        .environment(\.colorScheme, .dark)
        .accessibilityElement(children: .contain)
        .accessibilityLabel("Tab bar")
    }
}

private struct SparkyGlassBackdrop: View {
    var body: some View {
        ZStack {
            Rectangle().fill(.ultraThinMaterial)
            LinearGradient(
                stops: [
                    .init(color: .black.opacity(0.35), location: 0),
                    .init(color: .black.opacity(0.75), location: 0.45),
                    .init(color: .black.opacity(0.92), location: 1),
                ],
                startPoint: .top,
                endPoint: .bottom
            )
        }
        .mask(
            LinearGradient(
                stops: [
                    .init(color: .clear, location: 0),
                    .init(color: .black.opacity(0.85), location: 0.22),
                    .init(color: .black, location: 0.4),
                ],
                startPoint: .top,
                endPoint: .bottom
            )
        )
    }
}

private struct SparkyTabButton: View {
    let tab: AppTab
    let selected: Bool
    var compact = false
    let action: () -> Void

    var body: some View {
        Button(action: action) {
            // Landscape iPhone: icon and label side by side in a shorter bar, as UITabBar does.
            let layout = compact
                ? AnyLayout(HStackLayout(spacing: 6))
                : AnyLayout(VStackLayout(spacing: 5))
            layout {
                Image(systemName: tab.icon(selected: selected))
                    .font(.system(size: compact ? 17 : 21, weight: selected ? .semibold : .regular))
                    .frame(height: compact ? 22 : 26)
                    .contentTransition(.symbolEffect(.replace))
                Text(tab.title)
                    .font(.system(size: compact ? 12 : 10.5, weight: selected ? .semibold : .medium))
                    .lineLimit(1)
            }
            .foregroundStyle(selected ? Color.white : Color.white.opacity(0.55))
            .frame(maxWidth: .infinity)
            .padding(.vertical, compact ? 4 : 6)
            .contentShape(Rectangle())
        }
        .buttonStyle(SparkyPressStyle())
        // Tab labels are fixed-size, so long-press shows the large content viewer instead.
        .accessibilityShowsLargeContentViewer {
            Label(tab.title, systemImage: tab.icon(selected: selected))
        }
        .accessibilityLabel(tab.title)
        .accessibilityAddTraits(selected ? [.isButton, .isSelected] : .isButton)
        .accessibilityIdentifier("tab-\(tab.rawValue)")
    }
}

// MARK: - Hiding the bar from pushed screens

private struct SparkyCurrentTabKey: EnvironmentKey {
    static let defaultValue: AppTab? = nil
}

extension EnvironmentValues {
    /// The tab whose page a view lives in (set by RootView).
    var sparkyCurrentTab: AppTab? {
        get { self[SparkyCurrentTabKey.self] }
        set { self[SparkyCurrentTabKey.self] = newValue }
    }
}

private struct SparkyTabBarHiddenModifier: ViewModifier {
    let hidden: Bool
    @Environment(AppRouter.self) private var router
    @Environment(\.sparkyCurrentTab) private var tab
    @State private var isRegistered = false
    @State private var isOnScreen = false

    func body(content: Content) -> some View {
        content
            .onAppear {
                isOnScreen = true
                sync()
            }
            .onChange(of: hidden) { _, _ in sync() }
            .onDisappear {
                isOnScreen = false
                sync()
            }
    }

    /// Keeps exactly one hide request registered while this view is on screen and hiding.
    private func sync() {
        guard let tab else { return }
        let wanted = isOnScreen && hidden
        guard wanted != isRegistered else { return }
        isRegistered = wanted
        withAnimation(.snappy(duration: 0.3)) {
            router.requestTabBarHidden(wanted, for: tab)
        }
    }
}

extension View {
    /// Hides Sparky's tab bar while this screen is on screen (replaces
    /// `.toolbar(.hidden, for: .tabBar)`, which the custom bar doesn't observe).
    func sparkyTabBarHidden(_ hidden: Bool = true) -> some View {
        modifier(SparkyTabBarHiddenModifier(hidden: hidden))
    }
}

// MARK: - Keyboard tracking

/// Whether this app's software keyboard is on screen. Created once in SparkyApp and
/// shared through the environment.
@MainActor
@Observable
final class KeyboardVisibility {
    private(set) var isVisible = false
    @ObservationIgnored nonisolated(unsafe) private var observers: [NSObjectProtocol] = []

    init() {
        let center = NotificationCenter.default
        observers.append(center.addObserver(
            forName: UIResponder.keyboardWillChangeFrameNotification, object: nil, queue: .main
        ) { [weak self] note in
            let visible = Self.isLocalSoftwareKeyboard(note)
            MainActor.assumeIsolated { self?.isVisible = visible }
        })
        observers.append(center.addObserver(
            forName: UIResponder.keyboardWillHideNotification, object: nil, queue: .main
        ) { [weak self] _ in
            MainActor.assumeIsolated { self?.isVisible = false }
        })
    }

    deinit {
        observers.forEach(NotificationCenter.default.removeObserver)
    }

    /// Ignores other apps' keyboards (iPad multitasking) and the slim shortcuts bar shown
    /// with a hardware keyboard; only a real on-screen keyboard counts.
    private nonisolated static func isLocalSoftwareKeyboard(_ note: Notification) -> Bool {
        let info = note.userInfo ?? [:]
        if let isLocal = info[UIResponder.keyboardIsLocalUserInfoKey] as? Bool, !isLocal { return false }
        guard let frame = info[UIResponder.keyboardFrameEndUserInfoKey] as? CGRect else { return false }
        let screenHeight = UIScreen.main.bounds.height
        return frame.minY < screenHeight && frame.height > 120
    }
}
