import { useState, useCallback, useEffect } from "react";

export type HistoryEntry = {
  id: string;
  tool: string;
  label: string;
  value: string;
  timestamp: number;
};

const MAX_ENTRIES = 30;
const STORAGE_KEY = "sparky-history";

function isHistoryEntry(value: unknown): value is HistoryEntry {
  if (!value || typeof value !== "object") return false;
  const entry = value as Record<string, unknown>;
  return (
    typeof entry.id === "string" &&
    typeof entry.tool === "string" &&
    typeof entry.label === "string" &&
    typeof entry.value === "string" &&
    typeof entry.timestamp === "number" &&
    Number.isFinite(entry.timestamp)
  );
}

// Globally-unique id, computed outside the setState updater so the updater
// stays pure (a module-global `nextId++` inside it advanced twice under
// StrictMode and could mint the same id in two tabs, producing duplicate React
// keys). Falls back when crypto.randomUUID is unavailable (insecure context).
function newEntryId(): string {
  try {
    return crypto.randomUUID();
  } catch {
    return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
  }
}

function loadHistory(): HistoryEntry[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    // Drop any malformed entries (older shapes / tampered storage) rather than
    // trusting the blob wholesale.
    return parsed.filter(isHistoryEntry).slice(0, MAX_ENTRIES);
  } catch {
    return [];
  }
}

function saveHistory(entries: HistoryEntry[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  } catch {
    // quota exceeded
  }
}

export function useHistory() {
  const [entries, setEntries] = useState<HistoryEntry[]>(loadHistory);

  // Cross-tab sync: adopt history written by another tab so two open tabs don't
  // present a stale list. Only addEntry/clearHistory write, so reloading from
  // storage here can't feed back into a write loop.
  useEffect(() => {
    const onStorage = (event: StorageEvent) => {
      if (event.key !== STORAGE_KEY || event.storageArea !== localStorage) return;
      setEntries(loadHistory());
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const addEntry = useCallback((tool: string, label: string, value: string) => {
    if (value.startsWith("--")) return;
    const entry: HistoryEntry = { id: newEntryId(), tool, label, value, timestamp: Date.now() };
    setEntries((prev) => {
      const next = [entry, ...prev.filter((e) => !(e.tool === tool && e.label === label && e.value === value))].slice(0, MAX_ENTRIES);
      saveHistory(next);
      return next;
    });
  }, []);

  const clearHistory = useCallback(() => {
    setEntries([]);
    saveHistory([]);
  }, []);

  return { entries, addEntry, clearHistory };
}
