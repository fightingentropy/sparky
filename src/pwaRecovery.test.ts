import { describe, expect, it, vi } from "vitest";
import {
  PRELOAD_RECOVERY_STORAGE_KEY,
  claimPreloadRecovery,
  recoverFromPreloadError
} from "./pwaRecovery";

function createStorage(initialValue: string | null = null): Pick<Storage, "getItem" | "setItem"> {
  let value = initialValue;
  return {
    getItem: () => value,
    setItem: (_key, nextValue) => {
      value = nextValue;
    }
  };
}

describe("PWA lazy-chunk recovery", () => {
  it("allows one recovery attempt and blocks a reload loop across documents", () => {
    const storage = createStorage();

    expect(claimPreloadRecovery(storage, 10_000)).toBe(true);
    expect(storage.getItem(PRELOAD_RECOVERY_STORAGE_KEY)).toBe("10000");
    expect(claimPreloadRecovery(storage, 10_500)).toBe(false);
    expect(claimPreloadRecovery(storage, 40_001)).toBe(true);
  });

  it("fails closed when session storage is unavailable", () => {
    const storage = {
      getItem: () => {
        throw new Error("storage blocked");
      },
      setItem: () => {}
    };

    expect(claimPreloadRecovery(storage, 10_000)).toBe(false);
  });

  it("activates the waiting build and schedules one fallback reload", async () => {
    const activateUpdate = vi.fn(async () => {});
    const reload = vi.fn();
    const scheduleReload = vi.fn();

    await recoverFromPreloadError({ activateUpdate, reload, scheduleReload });

    expect(activateUpdate).toHaveBeenCalledOnce();
    expect(scheduleReload).toHaveBeenCalledWith(reload, 3_000);
  });

  it("keeps the guarded fallback when service-worker activation fails", async () => {
    const reload = vi.fn();
    const scheduleReload = vi.fn();

    await expect(
      recoverFromPreloadError({
        activateUpdate: async () => {
          throw new Error("offline");
        },
        reload,
        scheduleReload
      })
    ).resolves.toBeUndefined();
    expect(scheduleReload).toHaveBeenCalledOnce();
  });
});
