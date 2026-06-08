import { useState, useCallback } from "react";

export type HistoryEntry = {
  id: string;
  tool: string;
  label: string;
  value: string;
  timestamp: number;
};

const MAX_ENTRIES = 30;
const STORAGE_KEY = "sparky-history";

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
    return raw ? (JSON.parse(raw) as HistoryEntry[]) : [];
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
