import SwiftUI
import UIKit

struct CopyButton: View {
    let value: String
    var label: String? = nil
    var onCopy: (() -> Void)? = nil
    @State private var copied = false

    var body: some View {
        Button {
            UIPasteboard.general.string = value
            Haptics.success()
            onCopy?()
            copied = true
            Task { @MainActor in
                try? await Task.sleep(for: .seconds(1.25))
                copied = false
            }
        } label: {
            Label(copied ? "Copied" : (label ?? value), systemImage: copied ? "checkmark" : "doc.on.doc")
                .contentTransition(.symbolEffect(.replace))
        }
        .buttonStyle(SparkySecondaryButtonStyle())
        .accessibilityHint("Copies the value to the clipboard")
    }
}
