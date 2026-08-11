export const PRELOAD_RECOVERY_STORAGE_KEY = "sparky-preload-recovery-at";
export const PRELOAD_RECOVERY_COOLDOWN_MS = 30_000;

type RecoveryStorage = Pick<Storage, "getItem" | "setItem">;

/**
 * Claim the single automatic reload allowed for this chunk failure window.
 * sessionStorage survives a document reload, unlike a module-level boolean,
 * so a stale service worker cannot trap the tab in an endless reload loop.
 */
export function claimPreloadRecovery(
  storage: RecoveryStorage,
  now = Date.now(),
  cooldownMs = PRELOAD_RECOVERY_COOLDOWN_MS
): boolean {
  try {
    const stored = storage.getItem(PRELOAD_RECOVERY_STORAGE_KEY);
    if (stored !== null) {
      const previousAttempt = Number(stored);
      const elapsed = now - previousAttempt;
      if (Number.isFinite(previousAttempt) && elapsed >= 0 && elapsed < cooldownMs) {
        return false;
      }
    }

    storage.setItem(PRELOAD_RECOVERY_STORAGE_KEY, String(now));
    return true;
  } catch {
    // If storage is unavailable, fail closed instead of risking an unbounded
    // reload loop whose guard would be reset with every new document.
    return false;
  }
}

type PreloadRecoveryOptions = {
  activateUpdate: () => Promise<void>;
  reload: () => void;
  scheduleReload: (callback: () => void, delayMs: number) => unknown;
  fallbackDelayMs?: number;
};

/**
 * Promote a waiting service worker, with one delayed reload as a fallback for
 * browsers where controllerchange is not delivered to the broken document.
 */
export async function recoverFromPreloadError({
  activateUpdate,
  reload,
  scheduleReload,
  fallbackDelayMs = 3_000
}: PreloadRecoveryOptions): Promise<void> {
  scheduleReload(reload, fallbackDelayMs);
  try {
    await activateUpdate();
  } catch {
    // The guarded fallback reload still gets one chance to recover online.
  }
}
