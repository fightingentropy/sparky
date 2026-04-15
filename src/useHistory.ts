import { useState, useCallback } from "react";

export type HistoryEntry = {
  id: number;
  tool: string;
  label: string;
  value: string;
  timestamp: number;
};

const MAX_ENTRIES = 30;
const STORAGE_KEY = "sparky-history";

let nextId = 1;

function loadHistory(): HistoryEntry[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const entries = raw ? (JSON.parse(raw) as HistoryEntry[]) : [];
    for (const e of entries) {
      if (e.id >= nextId) nextId = e.id + 1;
    }
    return entries;
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
    setEntries((prev) => {
      const entry: HistoryEntry = { id: nextId++, tool, label, value, timestamp: Date.now() };
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
