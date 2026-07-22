import Foundation
import Observation

enum ProgressSyncPhase: Equatable {
    case signedOut
    case ready
    case syncing
    case synced(Date, ExamProgressSyncResult)
    case failed(String)
}

/// Owns app-lifecycle and debounced progress synchronization. The underlying
/// service always fetches before it writes, so a newly signed-in device imports
/// website progress before uploading any native changes.
@MainActor
@Observable
final class ProgressSyncController {
    private(set) var phase: ProgressSyncPhase = .signedOut

    @ObservationIgnored private let service: ExamProgressSyncService
    @ObservationIgnored private var debounceTask: Task<Void, Never>?
    @ObservationIgnored private var isSynchronizing = false
    @ObservationIgnored private var needsAnotherPass = false

    init(service: ExamProgressSyncService? = nil) {
        self.service = service ?? ExamProgressSyncService()
    }

    func accountBecameAvailable() {
        if case .signedOut = phase {
            phase = .ready
        }
    }

    func signedOut() {
        debounceTask?.cancel()
        debounceTask = nil
        needsAnotherPass = false
        phase = .signedOut
    }

    func scheduleSync(
        store: ProgressStore,
        catalog: ExamCatalog,
        authStore: AuthStore,
        delayNanoseconds: UInt64 = 650_000_000
    ) {
        guard authStore.user != nil else { return }
        if isSynchronizing {
            needsAnotherPass = true
            return
        }

        debounceTask?.cancel()
        debounceTask = Task { [weak self] in
            do {
                try await Task.sleep(nanoseconds: delayNanoseconds)
            } catch {
                return
            }
            guard !Task.isCancelled, let self else { return }
            self.debounceTask = nil
            await self.syncNow(store: store, catalog: catalog, authStore: authStore)
        }
    }

    func syncNow(
        store: ProgressStore,
        catalog: ExamCatalog,
        authStore: AuthStore
    ) async {
        debounceTask?.cancel()
        debounceTask = nil

        if isSynchronizing {
            needsAnotherPass = true
            return
        }
        guard let userID = authStore.user?.id else {
            signedOut()
            return
        }

        store.bind(toAccountID: userID)
        isSynchronizing = true
        phase = .syncing
        defer { isSynchronizing = false }

        repeat {
            needsAnotherPass = false
            let revisionAtStart = store.localMutationRevision

            do {
                guard authStore.user?.id == userID,
                      let token = try authStore.bearerToken()
                else {
                    signedOut()
                    return
                }

                let result = try await service.synchronize(
                    store: store,
                    catalog: catalog,
                    bearerToken: token
                )
                phase = .synced(Date(), result)

                if store.localMutationRevision != revisionAtStart {
                    needsAnotherPass = true
                }
            } catch let error as ExamProgressSyncError {
                if error.isAuthenticationFailure {
                    authStore.logout()
                    signedOut()
                } else {
                    phase = .failed(error.localizedDescription)
                }
                return
            } catch let error as AuthError {
                if error.isAuthenticationFailure {
                    authStore.logout()
                    signedOut()
                } else {
                    phase = .failed(error.localizedDescription)
                }
                return
            } catch {
                phase = .failed(
                    "Sparky couldn't sync right now. Your progress is still saved on this device."
                )
                return
            }
        } while needsAnotherPass && authStore.user?.id == userID
    }
}
