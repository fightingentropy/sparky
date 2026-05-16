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

type RemovableStorage = Pick<Storage, "removeItem">;

export function clearLegacyContainmentRodStorage(storage: RemovableStorage = localStorage): void {
  for (const key of LEGACY_CONTAINMENT_ROD_STORAGE_KEYS) {
    try {
      storage.removeItem(key);
    } catch {}
  }
}
