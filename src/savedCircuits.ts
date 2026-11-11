export const MAX_SAVED_CIRCUITS = 24;

type SavedEntry = { id: string; name: string; updatedAt: number };

/**
 * Decides where a Save goes. Saving under the name of the selected entry
 * updates it in place; saving under a different name creates a new entry so
 * the original is never replaced by a rename.
 */
export function planCircuitSave<T extends SavedEntry>(
  existing: T[],
  selectedId: string,
  name: string,
  newId: () => string
): { id: string; replacesExisting: boolean; dropped: T[] } {
  const selected = selectedId ? existing.find((entry) => entry.id === selectedId) : undefined;
  const replacesExisting = !!selected && selected.name === name;
  const id = replacesExisting && selected ? selected.id : newId();
  const remaining = existing.filter((entry) => entry.id !== id);
  const overflow = remaining.length + 1 - MAX_SAVED_CIRCUITS;
  const dropped =
    overflow > 0 ? [...remaining].sort((a, b) => a.updatedAt - b.updatedAt).slice(0, overflow) : [];
  return { id, replacesExisting, dropped };
}
