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

function slotHasContent(slot: SyncVariantSlot | undefined): boolean {
  return !!slot && (slot.submitted || Object.keys(slot.answers).length > 0);
}

function sameSlot(a: SyncVariantSlot | undefined, b: SyncVariantSlot | undefined): boolean {
  if (!slotHasContent(a) && !slotHasContent(b)) return true;
  if (!a || !b) return false;
  if (a.submitted !== b.submitted) return false;
  const aKeys = Object.keys(a.answers);
  if (aKeys.length !== Object.keys(b.answers).length) return false;
  return aKeys.every((key) => a.answers[key] === b.answers[key]);
}

// Local test slots the server should receive: those that differ from the
// server's copy, when the server has no row for the exam or the local copy was
// edited after the server's. Each is one save request (the API takes one test
// per request).
export function planLocalPush(
  local: SyncExamProgress | null,
  localUpdatedAt: number,
  server: { variants: Record<string, SyncVariantSlot>; updatedAt: number } | null
): Array<Omit<PendingSave, "examId">> {
  if (!local) return [];
  if (server && localUpdatedAt <= server.updatedAt) return [];
  const pushes: Omit<PendingSave, "examId">[] = [];
  for (const [key, slot] of Object.entries(local.variants)) {
    if (sameSlot(slot, server?.variants[key])) continue;
    const index = Number(key);
    if (!Number.isInteger(index) || index < 0) continue;
    pushes.push({ current: local.current, variant: { index, answers: slot.answers, submitted: slot.submitted } });
  }
  return pushes;
}

// Merge a server copy that is newer than the local one into the local copy
// without losing local-only work. Test slots the server has no entry for but the
// local copy has content for (e.g. a retried sync where an earlier test was saved and a
// later one failed) are kept and returned as saves to send. Where both have
// content the server copy wins. A slot the server holds but with no content was
// cleared by a reset (possibly on another device), so it is not refilled.
export function mergeNewerServerProgress(
  local: SyncExamProgress | null,
  server: SyncExamProgress
): { merged: SyncExamProgress; pushes: Array<Omit<PendingSave, "examId">> } {
  const merged: SyncExamProgress = { current: server.current, variants: { ...server.variants } };
  const pushes: Array<Omit<PendingSave, "examId">> = [];
  if (!local) return { merged, pushes };
  for (const [key, slot] of Object.entries(local.variants)) {
    if (!slotHasContent(slot) || Object.prototype.hasOwnProperty.call(server.variants, key)) continue;
    const index = Number(key);
    if (!Number.isInteger(index) || index < 0) continue;
    merged.variants[key] = slot;
    pushes.push({ current: server.current, variant: { index, answers: slot.answers, submitted: slot.submitted } });
  }
  return { merged, pushes };
}

// The exam-updated stamp to store after importing a newer server copy. While
// local-only tests still have to be sent the old stamp is kept, so a failed
// push is planned again on the next sync instead of looking already in sync.
export function stampAfterServerImport(pushCount: number, localUpdatedAt: number, serverStamp: number): number {
  return pushCount > 0 ? localUpdatedAt : serverStamp;
}

// A rejected session means the answers stored on this device belong to an
// account that is no longer signed in here. Returns whether it cleared them.
export function clearLocalExamProgressOnAuthFailure(
  status: number | undefined,
  storage: Pick<Storage, "length" | "key" | "removeItem">
): boolean {
  if (status !== 401 && status !== 403) return false;
  clearLocalExamProgress(storage);
  return true;
}
