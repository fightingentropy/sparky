export const CONTAINMENT_ROD_STORAGE_KEYS = {
  overallHeight: "cr-v2-height",
  topOfUnistrut: "cr-v2-top",
  buffer: "cr-v2-buffer",
  unistrutDepth: "cr-v2-depth"
} as const;

const LEGACY_CONTAINMENT_ROD_STORAGE_KEYS = [
  "cr-height",
  "cr-top",
  "cr-buffer",
  "cr-depth"
] as const;

// Written by the removed calculation history.
const RETIRED_STORAGE_KEYS = ["sparky-history"] as const;

type RemovableStorage = Pick<Storage, "removeItem">;

export function clearLegacyContainmentRodStorage(storage: RemovableStorage = localStorage): void {
  for (const key of LEGACY_CONTAINMENT_ROD_STORAGE_KEYS) {
    try {
      storage.removeItem(key);
    } catch {}
  }
}

/** Drops what removed features left behind in localStorage. */
export function clearRetiredStorage(storage: RemovableStorage = localStorage): void {
  for (const key of RETIRED_STORAGE_KEYS) {
    try {
      storage.removeItem(key);
    } catch {}
  }
}
