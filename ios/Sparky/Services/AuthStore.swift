import Foundation
import Observation

@MainActor
@Observable
final class AuthStore {
    private(set) var user: SparkyUser?
    private(set) var isRestoring = false
    private(set) var isWorking = false
    private(set) var lastError: AuthError?

    @ObservationIgnored private let service: any AuthServicing
    @ObservationIgnored private let tokenStore: any AuthTokenStoring

    var isAuthenticated: Bool { user != nil }

    init(
        service: any AuthServicing = AuthAPIClient(),
        tokenStore: any AuthTokenStoring = KeychainTokenStore()
    ) {
        self.service = service
        self.tokenStore = tokenStore
    }

    /// Restores the user's profile from a securely stored token. A temporary
    /// network/server failure leaves the token intact for a later retry.
    func restoreSession() async {
        guard !isRestoring else { return }
        isRestoring = true
        lastError = nil
        defer { isRestoring = false }

        do {
            guard let token = try tokenStore.loadToken() else {
                user = nil
                return
            }
            user = try await service.me(token: token)
        } catch {
            let authError = typedError(error)
            lastError = authError
            if authError.isAuthenticationFailure {
                user = nil
                try? tokenStore.deleteToken()
            }
        }
    }

    /// Supplies the current bearer token to other account-aware services
    /// without ever publishing it into observable UI state.
    func bearerToken() throws -> String? {
        try tokenStore.loadToken()
    }

    func login(email: String, password: String) async throws {
        guard !isWorking else { return }
        isWorking = true
        lastError = nil
        defer { isWorking = false }

        do {
            let session = try await service.login(email: email, password: password)
            try tokenStore.saveToken(session.token)
            user = session.user
        } catch {
            let authError = typedError(error)
            lastError = authError
            throw authError
        }
    }

    func updateProfile(_ update: ProfileUpdate) async throws {
        guard !isWorking else { return }
        isWorking = true
        lastError = nil
        defer { isWorking = false }

        do {
            guard let token = try tokenStore.loadToken() else {
                throw AuthError.notAuthenticated
            }
            user = try await service.updateProfile(token: token, update: update)
        } catch {
            let authError = typedError(error)
            lastError = authError
            if authError.isAuthenticationFailure {
                user = nil
                try? tokenStore.deleteToken()
            }
            throw authError
        }
    }

    func logout() {
        user = nil
        lastError = nil
        do {
            try tokenStore.deleteToken()
        } catch {
            lastError = typedError(error)
        }
    }

    func clearError() {
        lastError = nil
    }

    private func typedError(_ error: Error) -> AuthError {
        if let authError = error as? AuthError { return authError }
        return .transport(error.localizedDescription)
    }
}
