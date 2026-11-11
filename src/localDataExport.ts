import { TOKEN_STORAGE_KEY } from "./api";

// Keys that grant access to the account and must never end up in a file the
// user may share or sync elsewhere.
const EXCLUDED_KEYS = new Set([TOKEN_STORAGE_KEY]);

export function collectLocalData(storage: Pick<Storage, "length" | "key" | "getItem">): Record<string, unknown> {
  const data: Record<string, unknown> = {};
  try {
    for (let index = 0; index < storage.length; index += 1) {
      const key = storage.key(index);
      if (!key || EXCLUDED_KEYS.has(key)) continue;
      const raw = storage.getItem(key);
      if (raw === null) continue;
      try {
        data[key] = JSON.parse(raw);
      } catch {
        data[key] = raw;
      }
    }
  } catch {
    // storage unavailable: export what was collected so far
  }
  return data;
}
