import { EXAM_REGISTRY, type ExamId } from "./examRegistry";

export const EXAM_STORAGE_VERSION = "2026-06-per-test";
export const EXAM_PROGRESS_STORAGE_PREFIX = `exam-progress-${EXAM_STORAGE_VERSION}-`;
export const EXAM_UPDATED_STORAGE_PREFIX = `exam-updated-${EXAM_STORAGE_VERSION}-`;

type StorageReader = Pick<Storage, "getItem">;

type StoredVariant = {
  answers: Record<string, string>;
  submitted: boolean;
};

type StoredExamProgress = {
  variants: Record<string, StoredVariant>;
  current: number;
};

export type ExamResumeSummary = {
  examId: ExamId;
  title: string;
  testNumber: number;
  answeredCount: number;
  updatedAt: number;
};

function isStoredExamProgress(value: unknown): value is StoredExamProgress {
  if (!value || typeof value !== "object" || Array.isArray(value)) return false;
  const candidate = value as { variants?: unknown; current?: unknown };
  if (!Number.isInteger(candidate.current) || (candidate.current as number) < 0) return false;
  if (!candidate.variants || typeof candidate.variants !== "object" || Array.isArray(candidate.variants)) return false;

  return Object.values(candidate.variants).every((slot) => {
    if (!slot || typeof slot !== "object" || Array.isArray(slot)) return false;
    const variant = slot as { answers?: unknown; submitted?: unknown };
    return (
      typeof variant.submitted === "boolean" &&
      Boolean(variant.answers) &&
      typeof variant.answers === "object" &&
      !Array.isArray(variant.answers) &&
      Object.values(variant.answers as Record<string, unknown>).every((answer) =>
        ["A", "B", "C", "D"].includes(String(answer))
      )
    );
  });
}

export function getLatestExamResume(
  storage: StorageReader,
  hiddenExamIds: readonly ExamId[]
): ExamResumeSummary | null {
  const hidden = new Set(hiddenExamIds);
  let latest: ExamResumeSummary | null = null;

  for (const entry of EXAM_REGISTRY) {
    if (hidden.has(entry.id)) continue;

    try {
      const raw = storage.getItem(`${EXAM_PROGRESS_STORAGE_PREFIX}${entry.id}`);
      if (!raw) continue;
      const parsed: unknown = JSON.parse(raw);
      if (!isStoredExamProgress(parsed)) continue;

      const slot = parsed.variants[String(parsed.current)];
      if (!slot || slot.submitted) continue;
      const answeredCount = Object.keys(slot.answers).length;
      if (answeredCount === 0) continue;

      const updatedAt = Number(storage.getItem(`${EXAM_UPDATED_STORAGE_PREFIX}${entry.id}`)) || 0;
      const candidate: ExamResumeSummary = {
        examId: entry.id,
        title: entry.title,
        testNumber: parsed.current + 1,
        answeredCount,
        updatedAt
      };

      if (!latest || candidate.updatedAt > latest.updatedAt) latest = candidate;
    } catch {
      // Ignore malformed or unavailable local storage and fall back to generic actions.
    }
  }

  return latest;
}
