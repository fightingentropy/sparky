import PhotosUI
import SwiftUI
import UIKit

/// The account control intended for each top toolbar. It owns presentation so
/// feature screens only need to supply the shared `AuthStore`.
struct AccountToolbarButton<SyncStatusContent: View>: View {
    let authStore: AuthStore
    private let syncStatus: SyncStatusContent

    @Environment(AppRouter.self) private var router
    @State private var isPresentingAccount = false

    init(
        authStore: AuthStore,
        @ViewBuilder syncStatus: () -> SyncStatusContent
    ) {
        self.authStore = authStore
        self.syncStatus = syncStatus()
    }

    var body: some View {
        Menu {
            Button {
                isPresentingAccount = true
                Haptics.selection()
            } label: {
                Label(
                    authStore.user == nil ? "Sign in" : "Profile",
                    systemImage: "person.crop.circle"
                )
            }

            Divider()

            Button {
                router.isPresentingSettings = true
                Haptics.selection()
            } label: {
                Label("Settings", systemImage: "gearshape")
            }
        } label: {
            AccountAvatarView(
                avatarDataURL: authStore.user?.avatar,
                displayName: authStore.user?.displayName,
                size: 32
            )
        }
        .buttonStyle(.plain)
        .accessibilityLabel(authStore.user == nil ? "Profile menu" : "Profile menu for \(authStore.user?.displayName ?? "your account")")
        .accessibilityHint("Shows profile and app settings")
        .sheet(isPresented: $isPresentingAccount) {
            AccountSheetView(authStore: authStore) {
                syncStatus
            }
        }
    }
}

extension AccountToolbarButton where SyncStatusContent == EmptyView {
    init(authStore: AuthStore) {
        self.init(authStore: authStore) { EmptyView() }
    }
}

/// A reusable account sheet. The optional view-builder slot lets progress sync
/// render its live state without coupling this feature to one sync service.
struct AccountSheetView<SyncStatusContent: View>: View {
    let authStore: AuthStore
    private let syncStatus: SyncStatusContent

    @Environment(\.dismiss) private var dismiss
    @State private var selectedDetent: PresentationDetent = .large

    init(
        authStore: AuthStore,
        @ViewBuilder syncStatus: () -> SyncStatusContent
    ) {
        self.authStore = authStore
        self.syncStatus = syncStatus()
    }

    var body: some View {
        NavigationStack {
            ZStack {
                SparkyBackdrop()

                if authStore.isRestoring, authStore.user == nil {
                    AccountRestoringView()
                } else {
                    ScrollView {
                        Group {
                            if let user = authStore.user {
                                SignedInAccountView(
                                    authStore: authStore,
                                    user: user,
                                    syncStatus: syncStatus
                                )
                            } else {
                                SignedOutAccountView(authStore: authStore)
                            }
                        }
                        .padding(.horizontal, SparkyLayout.pageInset)
                        .padding(.top, 12)
                        .padding(.bottom, 32)
                    }
                    .scrollDismissesKeyboard(.interactively)
                    .scrollIndicators(.hidden)
                }
            }
            .navigationTitle(authStore.user == nil ? "Sign in" : "Your account")
            .navigationBarTitleDisplayMode(.inline)
            .toolbar {
                ToolbarItem(placement: .topBarLeading) {
                    SparkyBrandMark(size: 30)
                }
                ToolbarItem(placement: .topBarTrailing) {
                    Button("Done") { dismiss() }
                        .fontWeight(.semibold)
                }
            }
        }
        .presentationDetents([.medium, .large], selection: $selectedDetent)
        .presentationDragIndicator(.visible)
    }
}

extension AccountSheetView where SyncStatusContent == EmptyView {
    init(authStore: AuthStore) {
        self.init(authStore: authStore) { EmptyView() }
    }
}

/// Renders the server's data-URL avatar, then falls back to a display-name
/// initial and finally a neutral signed-out glyph.
struct AccountAvatarView: View {
    let avatarDataURL: String?
    let displayName: String?
    var size: CGFloat = 36

    private var avatarImage: UIImage? {
        guard
            let payload = try? AvatarDataURL.decode(avatarDataURL),
            let image = UIImage(data: payload.data)
        else { return nil }
        return image
    }

    private var initial: String? {
        guard let first = displayName?.trimmingCharacters(in: .whitespacesAndNewlines).first else {
            return nil
        }
        return String(first).uppercased()
    }

    var body: some View {
        ZStack {
            Circle()
                .fill(Color.sparkyAccentSoft)

            if let avatarImage {
                Image(uiImage: avatarImage)
                    .resizable()
                    .scaledToFill()
            } else if let initial {
                Text(initial)
                    .font(.system(size: size * 0.42, weight: .bold, design: .rounded))
                    .foregroundStyle(Color.sparkyAccent)
            } else {
                Image(systemName: "person.fill")
                    .font(.system(size: size * 0.42, weight: .semibold))
                    .foregroundStyle(Color.sparkyAccent)
            }
        }
        .frame(width: size, height: size)
        .clipShape(Circle())
        .overlay {
            Circle()
                .stroke(Color.sparkyBorder, lineWidth: 1)
        }
        .contentShape(Circle())
        .accessibilityElement(children: .ignore)
        .accessibilityLabel(accessibilityLabel)
    }

    private var accessibilityLabel: String {
        guard let displayName, !displayName.isEmpty else { return "Account" }
        return "Account for \(displayName)"
    }
}

private struct SignedOutAccountView: View {
    let authStore: AuthStore

    @State private var email = ""
    @State private var password = ""
    @State private var submissionError: String?
    @FocusState private var focusedField: Field?

    private enum Field: Hashable {
        case email
        case password
    }

    var body: some View {
        VStack(spacing: 18) {
            VStack(spacing: 12) {
                SparkyBrandMark(size: 66)
                Text("Welcome back")
                    .font(.title.bold())
                    .foregroundStyle(Color.sparkyText)
                Text("Use the same Sparky account as the website to keep your profile and study progress together.")
                    .font(.subheadline)
                    .foregroundStyle(Color.sparkyMuted)
                    .multilineTextAlignment(.center)
                    .fixedSize(horizontal: false, vertical: true)
            }
            .padding(.horizontal, 8)

            VStack(alignment: .leading, spacing: 16) {
                AccountFieldLabel(title: "Email") {
                    TextField("you@example.com", text: $email)
                        .textContentType(.username)
                        .keyboardType(.emailAddress)
                        .textInputAutocapitalization(.never)
                        .autocorrectionDisabled()
                        .submitLabel(.next)
                        .focused($focusedField, equals: .email)
                        .onSubmit { focusedField = .password }
                        .accountInput()
                        .accessibilityLabel("Email")
                }

                AccountFieldLabel(title: "Password") {
                    SecureField("Password", text: $password)
                        .textContentType(.password)
                        .submitLabel(.go)
                        .focused($focusedField, equals: .password)
                        .onSubmit { submitIfPossible() }
                        .accountInput()
                        .privacySensitive()
                        .accessibilityLabel("Password")
                }

                if let errorMessage {
                    AccountMessageBanner(
                        message: errorMessage,
                        symbol: "exclamationmark.triangle.fill",
                        tint: .sparkyDanger
                    )
                }

                Button {
                    submitIfPossible()
                } label: {
                    HStack(spacing: 9) {
                        if authStore.isWorking {
                            ProgressView()
                                .tint(Color.sparkyOnAccent)
                        }
                        Text(authStore.isWorking ? "Signing in…" : "Sign in")
                    }
                }
                .buttonStyle(SparkyPrimaryButtonStyle())
                .disabled(!canSubmit)
                .opacity(canSubmit ? 1 : 0.55)
                .accessibilityHint("Signs in securely and saves only your session token")

                Label("Your password is sent only to Sparky to sign in. It is never saved in the app.", systemImage: "lock.fill")
                    .font(.caption)
                    .foregroundStyle(Color.sparkyMuted)
                    .fixedSize(horizontal: false, vertical: true)
            }
            .sparkyCard(padding: 18)
        }
        .onChange(of: email) { _, _ in clearError() }
        .onChange(of: password) { _, _ in clearError() }
        .onDisappear { password = "" }
    }

    private var canSubmit: Bool {
        !authStore.isWorking
            && email.trimmingCharacters(in: .whitespacesAndNewlines).contains("@")
            && !password.isEmpty
    }

    private var errorMessage: String? {
        submissionError ?? authStore.lastError?.localizedDescription
    }

    private func clearError() {
        submissionError = nil
        authStore.clearError()
    }

    private func submitIfPossible() {
        guard canSubmit else { return }
        let normalizedEmail = email.trimmingCharacters(in: .whitespacesAndNewlines).lowercased()
        focusedField = nil

        Task {
            do {
                try await authStore.login(email: normalizedEmail, password: password)
                password = ""
                submissionError = nil
                Haptics.success()
            } catch {
                password = ""
                submissionError = error.localizedDescription
                Haptics.warning()
            }
        }
    }
}

private struct SignedInAccountView<SyncStatusContent: View>: View {
    let authStore: AuthStore
    let user: SparkyUser
    let syncStatus: SyncStatusContent

    @State private var nickname: String
    @State private var avatarDraft = AvatarDraft.unchanged
    @State private var selectedPhoto: PhotosPickerItem?
    @State private var isProcessingPhoto = false
    @State private var localError: String?
    @State private var didSave = false
    @State private var isConfirmingLogout = false

    init(authStore: AuthStore, user: SparkyUser, syncStatus: SyncStatusContent) {
        self.authStore = authStore
        self.user = user
        self.syncStatus = syncStatus
        _nickname = State(initialValue: user.nickname ?? "")
    }

    var body: some View {
        VStack(spacing: 16) {
            profileHeader

            syncStatus

            profileEditor

            Button(role: .destructive) {
                isConfirmingLogout = true
            } label: {
                Label("Log out", systemImage: "rectangle.portrait.and.arrow.right")
                    .font(.subheadline.weight(.semibold))
                    .foregroundStyle(Color.sparkyDanger)
                    .frame(maxWidth: .infinity)
                    .padding(.vertical, 13)
                    .background(Color.sparkySurface)
                    .clipShape(RoundedRectangle(cornerRadius: SparkyLayout.controlRadius, style: .continuous))
                    .overlay {
                        RoundedRectangle(cornerRadius: SparkyLayout.controlRadius, style: .continuous)
                            .stroke(Color.sparkyDanger.opacity(0.28), lineWidth: 1)
                    }
            }
            .buttonStyle(.plain)
            .confirmationDialog(
                "Log out of Sparky?",
                isPresented: $isConfirmingLogout,
                titleVisibility: .visible
            ) {
                Button("Log out", role: .destructive) {
                    authStore.logout()
                    Haptics.selection()
                }
                Button("Cancel", role: .cancel) {}
            } message: {
                Text("Your secure session will be removed from this device. Synced progress stays in your account.")
            }
        }
        .onChange(of: user.id) { _, _ in resetDrafts(from: user) }
        .onChange(of: selectedPhoto) { _, item in
            guard let item else { return }
            Task { await loadAvatar(from: item) }
        }
    }

    private var profileHeader: some View {
        VStack(spacing: 12) {
            AccountAvatarView(
                avatarDataURL: previewAvatar,
                displayName: previewDisplayName,
                size: 88
            )
            .overlay {
                if isProcessingPhoto {
                    Circle()
                        .fill(Color.black.opacity(0.48))
                    ProgressView()
                        .tint(.white)
                }
            }

            VStack(spacing: 3) {
                Text(previewDisplayName)
                    .font(.title2.bold())
                    .foregroundStyle(Color.sparkyText)
                    .multilineTextAlignment(.center)
                Text(user.email)
                    .font(.subheadline)
                    .foregroundStyle(Color.sparkyMuted)
                    .textSelection(.enabled)
            }

            HStack(spacing: 10) {
                PhotosPicker(selection: $selectedPhoto, matching: .images) {
                    Label(previewAvatar == nil ? "Add photo" : "Change", systemImage: "photo")
                }
                .buttonStyle(SparkySecondaryButtonStyle())
                .disabled(isProcessingPhoto || authStore.isWorking)

                if previewAvatar != nil {
                    Button(role: .destructive) {
                        avatarDraft = .value(nil)
                        didSave = false
                        localError = nil
                        Haptics.selection()
                    } label: {
                        Label("Remove", systemImage: "trash")
                    }
                    .buttonStyle(SparkySecondaryButtonStyle())
                    .tint(Color.sparkyDanger)
                    .disabled(isProcessingPhoto || authStore.isWorking)
                }
            }
        }
        .frame(maxWidth: .infinity)
        .sparkyCard(padding: 20)
    }

    private var profileEditor: some View {
        VStack(alignment: .leading, spacing: 16) {
            SparkySectionHeader(
                eyebrow: "Profile",
                title: "How you appear",
                detail: dirty ? "Unsaved" : nil
            )

            AccountFieldLabel(title: "Display name") {
                TextField(user.email, text: nicknameBinding)
                    .textContentType(.nickname)
                    .textInputAutocapitalization(.words)
                    .submitLabel(.done)
                    .accountInput()
                    .accessibilityLabel("Display name")
            }

            Text("Leave this blank to use your email. Photos are centre-cropped and resized to 256 × 256 before upload.")
                .font(.caption)
                .foregroundStyle(Color.sparkyMuted)
                .fixedSize(horizontal: false, vertical: true)

            if let errorMessage {
                AccountMessageBanner(
                    message: errorMessage,
                    symbol: "exclamationmark.triangle.fill",
                    tint: .sparkyDanger
                )
            } else if didSave {
                AccountMessageBanner(
                    message: "Profile saved",
                    symbol: "checkmark.circle.fill",
                    tint: .sparkySuccess
                )
            }

            Button {
                saveProfile()
            } label: {
                HStack(spacing: 9) {
                    if authStore.isWorking {
                        ProgressView()
                            .tint(Color.sparkyOnAccent)
                    }
                    Text(authStore.isWorking ? "Saving…" : "Save changes")
                }
            }
            .buttonStyle(SparkyPrimaryButtonStyle())
            .disabled(!canSave)
            .opacity(canSave ? 1 : 0.55)
        }
        .sparkyCard(padding: 18)
    }

    private var trimmedNickname: String {
        nickname.trimmingCharacters(in: .whitespacesAndNewlines)
    }

    private var nicknameBinding: Binding<String> {
        Binding(
            get: { nickname },
            set: { newValue in
                nickname = String(newValue.prefix(AccountProfileLimits.nicknameLength))
                didSave = false
                localError = nil
                authStore.clearError()
            }
        )
    }

    private var previewDisplayName: String {
        trimmedNickname.isEmpty ? user.email : trimmedNickname
    }

    private var previewAvatar: String? {
        switch avatarDraft {
        case .unchanged: user.avatar
        case .value(let value): value
        }
    }

    private var nicknameChanged: Bool {
        trimmedNickname != (user.nickname ?? "")
    }

    private var avatarChanged: Bool {
        if case .value = avatarDraft { return true }
        return false
    }

    private var dirty: Bool { nicknameChanged || avatarChanged }

    private var canSave: Bool {
        dirty && !authStore.isWorking && !isProcessingPhoto
    }

    private var errorMessage: String? {
        localError ?? authStore.lastError?.localizedDescription
    }

    private func loadAvatar(from item: PhotosPickerItem) async {
        isProcessingPhoto = true
        didSave = false
        localError = nil
        authStore.clearError()
        defer {
            isProcessingPhoto = false
            selectedPhoto = nil
        }

        do {
            guard let sourceData = try await item.loadTransferable(type: Data.self) else {
                throw AccountAvatarProcessingError.unreadableImage
            }
            avatarDraft = .value(try await AccountAvatarProcessor.jpegDataURL(from: sourceData))
            Haptics.success()
        } catch {
            localError = error.localizedDescription
            Haptics.warning()
        }
    }

    private func saveProfile() {
        guard canSave else { return }
        localError = nil
        didSave = false

        let update: ProfileUpdate
        switch (nicknameChanged, avatarDraft) {
        case (true, .value(let avatar)):
            update = .profile(nickname: trimmedNickname, avatarDataURL: avatar)
        case (true, .unchanged):
            update = .nickname(trimmedNickname)
        case (false, .value(let avatar)):
            update = .avatar(avatar)
        case (false, .unchanged):
            return
        }

        Task {
            do {
                try await authStore.updateProfile(update)
                if let updatedUser = authStore.user {
                    nickname = updatedUser.nickname ?? ""
                }
                avatarDraft = .unchanged
                didSave = true
                Haptics.success()
            } catch {
                localError = error.localizedDescription
                Haptics.warning()
            }
        }
    }

    private func resetDrafts(from newUser: SparkyUser) {
        nickname = newUser.nickname ?? ""
        avatarDraft = .unchanged
        selectedPhoto = nil
        localError = nil
        didSave = false
    }
}

private struct AccountRestoringView: View {
    var body: some View {
        VStack(spacing: 14) {
            ProgressView()
                .controlSize(.large)
                .tint(Color.sparkyAccent)
            Text("Restoring your account…")
                .font(.headline)
                .foregroundStyle(Color.sparkyText)
            Text("Your secure session is being checked.")
                .font(.subheadline)
                .foregroundStyle(Color.sparkyMuted)
        }
        .padding(24)
        .sparkyCard(padding: 20)
        .padding(.horizontal, SparkyLayout.pageInset)
        .accessibilityElement(children: .combine)
    }
}

private struct AccountFieldLabel<FieldContent: View>: View {
    let title: String
    @ViewBuilder let content: FieldContent

    var body: some View {
        VStack(alignment: .leading, spacing: 7) {
            Text(title)
                .font(.caption.weight(.semibold))
                .foregroundStyle(Color.sparkyMuted)
            content
        }
    }
}

private struct AccountInputModifier: ViewModifier {
    func body(content: Content) -> some View {
        content
            .font(.body)
            .foregroundStyle(Color.sparkyText)
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

private extension View {
    func accountInput() -> some View {
        modifier(AccountInputModifier())
    }
}

private struct AccountMessageBanner: View {
    let message: String
    let symbol: String
    let tint: Color

    var body: some View {
        Label(message, systemImage: symbol)
            .font(.caption.weight(.semibold))
            .foregroundStyle(tint)
            .frame(maxWidth: .infinity, alignment: .leading)
            .padding(12)
            .background(tint.opacity(0.10))
            .clipShape(RoundedRectangle(cornerRadius: 12, style: .continuous))
            .overlay {
                RoundedRectangle(cornerRadius: 12, style: .continuous)
                    .stroke(tint.opacity(0.22), lineWidth: 1)
            }
            .accessibilityElement(children: .combine)
    }
}

private enum AvatarDraft: Equatable {
    case unchanged
    case value(String?)
}

private enum AccountProfileLimits {
    static let nicknameLength = 40
    static let avatarPixels = 256
    static let maximumSourceBytes = 12 * 1024 * 1024
}

enum AccountAvatarProcessingError: LocalizedError {
    case sourceTooLarge
    case unreadableImage
    case couldNotCompress

    var errorDescription: String? {
        switch self {
        case .sourceTooLarge:
            "Choose an image smaller than 12 MB."
        case .unreadableImage:
            "That photo could not be read. Choose a JPEG, PNG, or WebP image."
        case .couldNotCompress:
            "That photo could not be made small enough to upload."
        }
    }
}

/// Keeps avatar processing off the main actor. Output is always an opaque,
/// centre-cropped 256 × 256 JPEG accepted by the website's data-URL contract.
enum AccountAvatarProcessor {
    static func jpegDataURL(from sourceData: Data) async throws -> String {
        guard sourceData.count <= AccountProfileLimits.maximumSourceBytes else {
            throw AccountAvatarProcessingError.sourceTooLarge
        }

        return try await Task.detached(priority: .userInitiated) {
            guard let sourceImage = UIImage(data: sourceData),
                  sourceImage.size.width > 0,
                  sourceImage.size.height > 0
            else {
                throw AccountAvatarProcessingError.unreadableImage
            }

            let targetSide = CGFloat(AccountProfileLimits.avatarPixels)
            let targetSize = CGSize(width: targetSide, height: targetSide)
            let rendererFormat = UIGraphicsImageRendererFormat()
            rendererFormat.scale = 1
            rendererFormat.opaque = true

            let renderedImage = UIGraphicsImageRenderer(size: targetSize, format: rendererFormat).image { context in
                UIColor.white.setFill()
                context.fill(CGRect(origin: .zero, size: targetSize))

                let scale = max(
                    targetSide / sourceImage.size.width,
                    targetSide / sourceImage.size.height
                )
                let drawnSize = CGSize(
                    width: sourceImage.size.width * scale,
                    height: sourceImage.size.height * scale
                )
                let drawRect = CGRect(
                    x: (targetSide - drawnSize.width) / 2,
                    y: (targetSide - drawnSize.height) / 2,
                    width: drawnSize.width,
                    height: drawnSize.height
                )
                sourceImage.draw(in: drawRect)
            }

            for quality in [0.85, 0.72, 0.58, 0.44, 0.30, 0.20] {
                guard let jpegData = renderedImage.jpegData(compressionQuality: quality) else {
                    continue
                }
                if let dataURL = try? AvatarDataURL.encode(jpegData, mimeType: "image/jpeg") {
                    return dataURL
                }
            }

            throw AccountAvatarProcessingError.couldNotCompress
        }.value
    }
}
