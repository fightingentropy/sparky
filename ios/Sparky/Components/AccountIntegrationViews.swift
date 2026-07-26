import SwiftUI

/// Shared account control used by every top-level tab.
struct SparkyAccountToolbarItem: View {
    @Environment(AuthStore.self) private var authStore
    @Environment(ProgressStore.self) private var progressStore
    @Environment(ProgressSyncController.self) private var syncController
    @Environment(ContentStore.self) private var contentStore
    @Environment(AppRouter.self) private var router

    var body: some View {
        HStack(spacing: 12) {
            Button {
                router.isPresentingSettings = true
                Haptics.selection()
            } label: {
                Image(systemName: "gearshape")
            }
            .accessibilityLabel("Settings")

            AccountToolbarButton(authStore: authStore) {
                ProgressSyncStatusCard(
                    controller: syncController,
                    store: progressStore,
                    catalog: contentStore.catalog,
                    authStore: authStore
                )
            }
        }
    }
}

/// Functional replacement for the decorative More-screen hero.
struct SparkyAccountSummaryCard: View {
    @Environment(AuthStore.self) private var authStore
    @Environment(ProgressStore.self) private var progressStore
    @Environment(ProgressSyncController.self) private var syncController
    @Environment(ContentStore.self) private var contentStore

    @State private var isPresentingAccount = false

    var body: some View {
        Button {
            isPresentingAccount = true
            Haptics.selection()
        } label: {
            HStack(spacing: 14) {
                AccountAvatarView(
                    avatarDataURL: authStore.user?.avatar,
                    displayName: authStore.user?.displayName,
                    size: 50
                )

                VStack(alignment: .leading, spacing: 4) {
                    SparkyEyebrow(text: authStore.user == nil ? "Sparky account" : "Signed in")
                    Text(authStore.user?.displayName ?? "Sign in to sync")
                        .font(.headline)
                        .foregroundStyle(Color.sparkyText)
                        .lineLimit(1)
                    Text(summaryDetail)
                        .font(.caption)
                        .foregroundStyle(Color.sparkyMuted)
                        .lineLimit(2)
                }

                Spacer(minLength: 4)
                Image(systemName: "chevron.right")
                    .font(.caption.bold())
                    .foregroundStyle(Color.sparkyMuted)
            }
            .sparkyCard(padding: 15)
            .contentShape(Rectangle())
        }
        .buttonStyle(.plain)
        .accessibilityLabel(accountAccessibilityLabel)
        .accessibilityHint("Opens account and profile settings")
        .sheet(isPresented: $isPresentingAccount) {
            AccountSheetView(authStore: authStore) {
                ProgressSyncStatusCard(
                    controller: syncController,
                    store: progressStore,
                    catalog: contentStore.catalog,
                    authStore: authStore
                )
            }
        }
    }

    private var summaryDetail: String {
        if authStore.isRestoring, authStore.user == nil {
            return "Checking your secure session…"
        }
        guard let user = authStore.user else {
            return "Use your website account and bring your exam progress across"
        }
        return user.nickname?.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty == false
            ? user.email
            : syncSummary
    }

    private var syncSummary: String {
        switch syncController.phase {
        case .signedOut, .ready:
            "Website exam progress"
        case .syncing:
            "Syncing website progress…"
        case .synced:
            "Website progress is up to date"
        case .failed:
            "Saved here — sync needs another try"
        }
    }

    private var accountAccessibilityLabel: String {
        guard let user = authStore.user else { return "Sign in to Sparky" }
        return "Account for \(user.displayName). \(syncSummary)"
    }
}

struct ProgressSyncStatusCard: View {
    let controller: ProgressSyncController
    let store: ProgressStore
    let catalog: ExamCatalog
    let authStore: AuthStore

    var body: some View {
        HStack(spacing: 12) {
            Image(systemName: symbol)
                .font(.headline)
                .foregroundStyle(tint)
                .frame(width: 38, height: 38)
                .background(tint.opacity(0.11))
                .clipShape(RoundedRectangle(cornerRadius: 11, style: .continuous))

            VStack(alignment: .leading, spacing: 3) {
                Text(title)
                    .font(.subheadline.weight(.semibold))
                    .foregroundStyle(Color.sparkyText)
                Text(detail)
                    .font(.caption)
                    .foregroundStyle(Color.sparkyMuted)
                    .fixedSize(horizontal: false, vertical: true)
            }

            Spacer(minLength: 4)

            Button {
                Task {
                    await controller.syncNow(
                        store: store,
                        catalog: catalog,
                        authStore: authStore
                    )
                }
            } label: {
                Image(systemName: "arrow.clockwise")
                    .frame(width: 36, height: 36)
                    .contentShape(Rectangle())
            }
            .buttonStyle(.plain)
            .foregroundStyle(Color.sparkyAccent)
            .disabled(isSyncing)
            .opacity(isSyncing ? 0.45 : 1)
            .accessibilityLabel(isSyncing ? "Syncing progress" : "Sync progress now")
        }
        .sparkyCard(padding: 15)
        .accessibilityElement(children: .contain)
    }

    private var isSyncing: Bool {
        if case .syncing = controller.phase { return true }
        return false
    }

    private var symbol: String {
        switch controller.phase {
        case .signedOut: "icloud.slash"
        case .ready: "icloud"
        case .syncing: "arrow.triangle.2.circlepath.icloud"
        case .synced: "checkmark.icloud.fill"
        case .failed: "exclamationmark.icloud.fill"
        }
    }

    private var tint: Color {
        switch controller.phase {
        case .failed: .sparkyDanger
        case .synced: .sparkySuccess
        default: .sparkyAccent
        }
    }

    private var title: String {
        switch controller.phase {
        case .signedOut: "Progress sync is off"
        case .ready: "Website progress"
        case .syncing: "Syncing progress…"
        case .synced: "Progress is up to date"
        case .failed: "Couldn't sync just now"
        }
    }

    private var detail: String {
        switch controller.phase {
        case .signedOut:
            return "Sign in to use the same exam progress on the website and this iPhone."
        case .ready:
            return "Sparky will download website progress before uploading changes from this device."
        case .syncing:
            return "Checking your website account and safely merging any changes."
        case .synced(_, let result):
            let changed = result.importedVariants + result.uploadedVariants
            if changed == 0 {
                return "Your website and iPhone exam progress match."
            }
            return "Updated \(changed) test\(changed == 1 ? "" : "s") across your website and iPhone."
        case .failed(let message):
            return message
        }
    }
}
