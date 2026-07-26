import Foundation

enum NavigationPreferences {
    static let storageKey = "sparky.hidden-navigation-tabs.v1"
    static let defaultHiddenTabs: Set<AppTab> = []

    static var defaultStorageValue: String {
        storageValue(for: defaultHiddenTabs)
    }

    static func hiddenTabs(from storageValue: String) -> Set<AppTab> {
        guard
            let data = storageValue.data(using: .utf8),
            let decoded = try? JSONDecoder().decode([String].self, from: data)
        else {
            return defaultHiddenTabs
        }

        return Set(decoded.compactMap(AppTab.init(rawValue:)))
    }

    static func storageValue(for hiddenTabs: Set<AppTab>) -> String {
        let ids = hiddenTabs.map(\.rawValue).sorted()
        guard
            let data = try? JSONEncoder().encode(ids),
            let value = String(data: data, encoding: .utf8)
        else {
            return "[]"
        }
        return value
    }

    static func visibleTabs(from storageValue: String) -> [AppTab] {
        let hiddenTabs = hiddenTabs(from: storageValue)
        let visible = AppTab.allCases.filter { !hiddenTabs.contains($0) }

        // Invalid external edits must never leave the app without a destination.
        return visible.isEmpty ? [.tools] : visible
    }

    static func preferredTab(from storageValue: String) -> AppTab {
        visibleTabs(from: storageValue)[0]
    }
}
