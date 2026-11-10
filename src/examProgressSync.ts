// Pure helpers for keeping the per-exam progress kept in localStorage and the
// copy on the server consistent. They take plain values so they can be tested
// without a browser.

type Answers = Record<string, string>;
export type SyncVariantSlot = { answers: Answers; submitted: boolean };
export type SyncExamProgress = { variants: Record<string, SyncVariantSlot>; current: number };

export type PendingSave = {
  examId: string;
  current: number;
  variant?: { index: number; answers: Answers; submitted: boolean };
};

// Keys written by the current and older storage shapes of exam progress.
const EXAM_PROGRESS_KEY_PREFIXES = [
  "exam-progress-",
  "exam-updated-",
  "exam-answers-",
  "exam-submitted-",
  "exam-variant-"
];

export function isExamProgressStorageKey(key: string): boolean {
  return EXAM_PROGRESS_KEY_PREFIXES.some((prefix) => key.startsWith(prefix));
}

// Remove every locally stored exam answer. Used on logout so the next account on
// this device neither sees nor uploads the previous account's answers.
export function clearLocalExamProgress(storage: Pick<Storage, "length" | "key" | "removeItem">): void {
  const keys: string[] = [];
  for (let index = 0; index < storage.length; index += 1) {
    const key = storage.key(index);
    if (key && isExamProgressStorageKey(key)) keys.push(key);
  }
  for (const key of keys) storage.removeItem(key);
}

// Decide what to do with a save that arrives while another is still waiting out
// its debounce. The queue holds one entry, so an entry that the new one cannot
// stand in for has to be sent first instead of being overwritten.
export function coalescePendingSave(
  pending: PendingSave | null,
  next: PendingSave
): { flush: PendingSave | null; pending: PendingSave } {
  if (!pending) return { flush: null, pending: next };
  if (pending.examId !== next.examId) return { flush: pending, pending: next };
  if (!next.variant) {
    // Only the current-test pointer changed; keep the unsent answers.
    return { flush: null, pending: { ...next, variant: pending.variant } };
  }
  if (pending.variant && pending.variant.index !== next.variant.index) {
    return { flush: pending, pending: next };
  }
  return { flush: null, pending: next };
}
