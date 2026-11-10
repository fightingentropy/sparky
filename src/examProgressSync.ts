// Pure helpers for keeping the per-exam progress kept in localStorage and the
// copy on the server consistent. They take plain values so they can be tested
// without a browser.

type Answers = Record<string, string>;
export type SyncVariantSlot = { answers: Answers; submitted: boolean };
export type SyncExamProgress = { variants: Record<string, SyncVariantSlot>; current: number };

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
