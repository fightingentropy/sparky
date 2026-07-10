import { useEffect, useMemo, useRef, useCallback, useState } from "react";
import {
  getActiveVariantIndex,
  getPassMark,
  getScoringBand,
  getSectionQuestionsForVariant,
  getVariantCount,
  type ScoringRange
} from "./examUtils";
import {
  type Exam,
  type ExamChoice,
  type ExamQuestion
} from "./exams/types";
import {
  DEFAULT_EXAM_ID,
  EXAM_REGISTRY,
  getExamEntry,
  getValidExamIds,
  isKnownExamId
} from "./examRegistry";
import { usePersistedState } from "./usePersistedState";
import { useAuth } from "./AuthContext";
import { getExamProgress, saveExamProgress } from "./api";
import { writeClipboardText } from "./clipboard";
import { getExamClipboardText, getQuestionClipboardText } from "./examClipboard";
import { scrollIntoViewSafely, scrollToSafely } from "./scroll";

type Answers = Record<number, ExamChoice>;
type ReviewFilter = "all" | "missed" | "wrong" | "unanswered" | "correct";
type ExamViewMode = "all" | "focus";

const LETTERS: ExamChoice[] = ["A", "B", "C", "D"];
const REVIEW_FILTER_LABELS: Record<ReviewFilter, string> = {
  all: "All",
  missed: "Missed",
  wrong: "Wrong",
  unanswered: "Unanswered",
  correct: "Correct"
};
// Bumped when exam content or the stored progress shape changes so stale
// in-progress state is dropped. Per-test memory landed in this version.
const EXAM_STORAGE_VERSION = "2026-06-per-test";
const EXAM_PROGRESS_STORAGE_PREFIX = `exam-progress-${EXAM_STORAGE_VERSION}-`;
const EXAM_UPDATED_STORAGE_PREFIX = `exam-updated-${EXAM_STORAGE_VERSION}-`;

// Each test (variant) of an exam keeps its own answers + completed state, so
// finishing one test is remembered independently of the others.
type VariantSlot = { answers: Answers; submitted: boolean };
type ExamProgress = { variants: Record<string, VariantSlot>; current: number };
const EMPTY_ANSWERS: Answers = {};
const EMPTY_PROGRESS: ExamProgress = { variants: {}, current: 0 };
const PERIODIC_INSPECTION_RESET_AT = Date.UTC(2026, 5, 7, 0, 0);
const EXAM_REMOTE_PROGRESS_RESET_AT: Partial<Record<string, number>> = {
  "level-2-electrical-installation": Date.UTC(2026, 4, 26, 21, 1),
  "level-3-electrical-installation": Date.UTC(2026, 4, 26, 21, 1),
  "building-regulations": Date.UTC(2026, 4, 26, 21, 1),
  "18th-edition": Date.UTC(2026, 4, 26, 21, 1),
  "special-locations": Date.UTC(2026, 4, 26, 21, 1),
  "pat-testing": Date.UTC(2026, 4, 26, 21, 1),
  "initial-verification": Date.UTC(2026, 4, 26, 21, 1),
  "inspection-design-2396": Date.UTC(2026, 4, 26, 21, 1),
  "periodic-inspection": PERIODIC_INSPECTION_RESET_AT,
  "am2-installation-assessment": Date.UTC(2026, 4, 26, 21, 1),
  "ecs-health-safety": Date.UTC(2026, 4, 26, 21, 1)
};
const EXAM_LOCAL_PROGRESS_RESET_AT: Partial<Record<string, number>> = {
  "periodic-inspection": PERIODIC_INSPECTION_RESET_AT
};

type CopyState = "idle" | "copied" | "failed";

function isExamChoice(value: unknown): value is ExamChoice {
  return typeof value === "string" && (LETTERS as string[]).includes(value);
}

function isAnswers(value: unknown): value is Answers {
  if (!value || typeof value !== "object" || Array.isArray(value)) return false;

  return Object.entries(value).every(
    ([questionNumber, answer]) => Number.isInteger(Number(questionNumber)) && isExamChoice(answer)
  );
}

function isExamProgress(value: unknown): value is ExamProgress {
  if (!value || typeof value !== "object" || Array.isArray(value)) return false;
  const progress = value as { variants?: unknown; current?: unknown };
  if (typeof progress.current !== "number" || !Number.isInteger(progress.current) || progress.current < 0) return false;
  if (!progress.variants || typeof progress.variants !== "object" || Array.isArray(progress.variants)) return false;
  return Object.values(progress.variants as Record<string, unknown>).every((slot) => {
    if (!slot || typeof slot !== "object") return false;
    const typed = slot as { answers?: unknown; submitted?: unknown };
    return typeof typed.submitted === "boolean" && isAnswers(typed.answers);
  });
}

// Replace one variant's slot, leaving the other tests' progress untouched.
function writeSlot(progress: ExamProgress, variantIndex: number, slot: VariantSlot): ExamProgress {
  return { ...progress, variants: { ...progress.variants, [String(variantIndex)]: slot } };
}

function questionState(question: ExamQuestion, answers: Answers): "correct" | "wrong" | "unanswered" {
  const selected = answers[question.number];
  if (selected === undefined) return "unanswered";
  return selected === question.answer ? "correct" : "wrong";
}

function matchesReviewFilter(question: ExamQuestion, answers: Answers, filter: ReviewFilter): boolean {
  if (filter === "all") return true;
  const state = questionState(question, answers);
  if (filter === "missed") return state === "wrong" || state === "unanswered";
  return state === filter;
}

function clearStaleExamProgress() {
  try {
    const validExamIds = getValidExamIds();
    const validStorageKeys = new Set(
      validExamIds.flatMap((examId) => [
        `${EXAM_PROGRESS_STORAGE_PREFIX}${examId}`,
        `${EXAM_UPDATED_STORAGE_PREFIX}${examId}`
      ])
    );

    for (let index = localStorage.length - 1; index >= 0; index -= 1) {
      const key = localStorage.key(index);
      if (!key) continue;

      // Sweep current-shape keys for retired exams, plus any keys left by older
      // storage shapes/versions (per-exam answers/submitted/variant).
      const isExamProgressKey =
        key.startsWith("exam-progress-") ||
        key.startsWith("exam-updated-") ||
        key.startsWith("exam-answers-") ||
        key.startsWith("exam-submitted-") ||
        key.startsWith("exam-variant-");
      if (isExamProgressKey && !validStorageKeys.has(key)) {
        localStorage.removeItem(key);
      }
    }

    for (const [examId, resetAt] of Object.entries(EXAM_LOCAL_PROGRESS_RESET_AT)) {
      if (!resetAt || !isKnownExamId(examId)) continue;
      const progressKey = `${EXAM_PROGRESS_STORAGE_PREFIX}${examId}`;
      const updatedKey = `${EXAM_UPDATED_STORAGE_PREFIX}${examId}`;
      const localUpdatedAt = Number(localStorage.getItem(updatedKey)) || 0;
      if (localStorage.getItem(progressKey) !== null && localUpdatedAt < resetAt) {
        localStorage.removeItem(progressKey);
        localStorage.removeItem(updatedKey);
      }
    }
  } catch {}
}

function parseServerUpdatedAt(value: string): number {
  const normalized = value.includes("T") ? value : `${value.replace(" ", "T")}Z`;
  return Date.parse(normalized) || 0;
}

type Props = {
  isActive: boolean;
  practiceTarget?: {
    examId: string;
    nonce: number;
  } | null;
};

export function ExamPage({ isActive, practiceTarget }: Props) {
  const { user } = useAuth();
  const [examMenuOpen, setExamMenuOpen] = useState(false);
  const examMenuRef = useRef<HTMLDivElement>(null);
  const [testMenuOpen, setTestMenuOpen] = useState(false);
  const testMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    clearStaleExamProgress();
  }, []);

  useEffect(() => {
    if (!examMenuOpen) return;

    function handlePointerDown(event: PointerEvent) {
      if (!examMenuRef.current?.contains(event.target as Node)) {
        setExamMenuOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setExamMenuOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [examMenuOpen]);

  useEffect(() => {
    if (!testMenuOpen) return;

    function handlePointerDown(event: PointerEvent) {
      if (!testMenuRef.current?.contains(event.target as Node)) {
        setTestMenuOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setTestMenuOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [testMenuOpen]);

  const [selectedExamId, setSelectedExamId] = usePersistedState<string>(
    "exam-selected",
    DEFAULT_EXAM_ID,
    isKnownExamId
  );

  useEffect(() => {
    if (!practiceTarget || !isKnownExamId(practiceTarget.examId)) return;
    setSelectedExamId(practiceTarget.examId);
    // practiceTarget is a fresh object per "open this exam" request (its nonce
    // is bumped each time), so depending on it re-runs exactly when intended.
  }, [practiceTarget, setSelectedExamId]);

  const selectedExamEntry = getExamEntry(selectedExamId);
  const [loadedExam, setLoadedExam] = useState<Exam | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoadedExam(null);

    selectedExamEntry.load().then((loadedExam) => {
      if (!cancelled) {
        setLoadedExam(loadedExam);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [selectedExamEntry]);
  const exam = loadedExam?.id === selectedExamEntry.id ? loadedExam : null;
  const selectedExamIdRef = useRef(selectedExamEntry.id);
  selectedExamIdRef.current = selectedExamEntry.id;

  const [progress, setProgress] = usePersistedState<ExamProgress>(
    `${EXAM_PROGRESS_STORAGE_PREFIX}${selectedExamEntry.id}`,
    EMPTY_PROGRESS,
    isExamProgress
  );
  const variantCount = exam ? getVariantCount(exam) : 0;
  const variantIndex = exam ? getActiveVariantIndex(progress.current, exam) : 0;
  // The active test's saved answers/completed state are derived from the current
  // variant slot; each test persists independently.
  const currentSlot = progress.variants[String(variantIndex)];
  const answers: Answers = currentSlot?.answers ?? EMPTY_ANSWERS;
  const submitted = currentSlot?.submitted ?? false;
  const [reviewFilter, setReviewFilter] = useState<ReviewFilter>("all");
  const [examInfoOpen, setExamInfoOpen] = useState(false);
  const [retryQuestionNumbers, setRetryQuestionNumbers] = useState<number[] | null>(null);
  const [examCopyState, setExamCopyState] = useState<CopyState>("idle");
  const [viewMode, setViewMode] = useState<ExamViewMode>("all");
  const [focusQuestionIndex, setFocusQuestionIndex] = useState(0);
  const [flaggedQuestionNumbers, setFlaggedQuestionNumbers] = useState<Set<number>>(() => new Set());
  const examCopyTimeoutRef = useRef<number | null>(null);
  // Marks each category complete once every one of its tests has been submitted,
  // so the category list can tick a whole exam off (not just its individual tests).
  const [examCompletion, setExamCompletion] = useState<Record<string, boolean>>({});

  useEffect(() => {
    return () => {
      if (examCopyTimeoutRef.current !== null) {
        window.clearTimeout(examCopyTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    setReviewFilter("all");
    setRetryQuestionNumbers(null);
    setExamInfoOpen(false);
    setTestMenuOpen(false);
    setExamCopyState("idle");
    setViewMode("all");
    setFocusQuestionIndex(0);
    setFlaggedQuestionNumbers(new Set());
    if (examCopyTimeoutRef.current !== null) {
      window.clearTimeout(examCopyTimeoutRef.current);
      examCopyTimeoutRef.current = null;
    }
  }, [selectedExamEntry.id, variantIndex]);

  const syncedForUserRef = useRef<string | null>(null);
  useEffect(() => {
    if (!user || syncedForUserRef.current === user.id) return;
    syncedForUserRef.current = user.id;
    getExamProgress()
      .then((res) => {
        for (const [examId, data] of Object.entries(res.progress)) {
          try {
            // Skip examIds we don't recognise — protects against poisoned rows.
            if (!isKnownExamId(examId)) continue;
            // Built as unknown: the API types answers as Record<string,string>;
            // isExamProgress validates the shape and narrows it to ExamProgress.
            const serverProgress: unknown = { variants: data.variants, current: data.current };
            if (!isExamProgress(serverProgress)) continue;
            const progressKey = `${EXAM_PROGRESS_STORAGE_PREFIX}${examId}`;
            const localUpdatedKey = `${EXAM_UPDATED_STORAGE_PREFIX}${examId}`;
            const hasLocal = localStorage.getItem(progressKey) !== null;
            const localUpdatedAt = Number(localStorage.getItem(localUpdatedKey)) || 0;
            const serverUpdatedAt = parseServerUpdatedAt(data.updatedAt);
            const remoteResetAt = EXAM_REMOTE_PROGRESS_RESET_AT[examId] ?? 0;
            if (remoteResetAt > 0 && serverUpdatedAt < remoteResetAt) continue;
            // Use the server copy if there's nothing local, or if it's strictly newer.
            if (!hasLocal || serverUpdatedAt > localUpdatedAt) {
              localStorage.setItem(progressKey, JSON.stringify(serverProgress));
              localStorage.setItem(localUpdatedKey, String(serverUpdatedAt || Date.now()));
            }
          } catch {}
        }
        // Re-hydrate React state for the currently selected exam after the merge.
        const currentExamId = selectedExamIdRef.current;
        try {
          const stored = localStorage.getItem(`${EXAM_PROGRESS_STORAGE_PREFIX}${currentExamId}`);
          if (stored) {
            const parsed = JSON.parse(stored);
            if (isExamProgress(parsed)) setProgress(parsed);
          }
        } catch {}
      })
      .catch(() => {});
  }, [user, selectedExamEntry.id, setProgress]);

  // Recompute which categories are fully done whenever the menu opens (and when
  // the active exam's progress changes while it's open). Variant counts come from
  // the cached exam assets; the submitted flags are read from each exam's stored
  // progress, so finishing the last test of a category ticks the whole category.
  useEffect(() => {
    if (!examMenuOpen) return;
    let cancelled = false;

    Promise.all(
      EXAM_REGISTRY.map(async (entry) => {
        try {
          const loaded = await entry.load();
          const count = getVariantCount(loaded);
          if (count === 0) return [entry.id, false] as const;
          const stored = localStorage.getItem(`${EXAM_PROGRESS_STORAGE_PREFIX}${entry.id}`);
          const parsed: unknown = stored ? JSON.parse(stored) : null;
          const variants = isExamProgress(parsed) ? parsed.variants : {};
          let submittedCount = 0;
          for (let i = 0; i < count; i += 1) {
            if (variants[String(i)]?.submitted) submittedCount += 1;
          }
          return [entry.id, submittedCount >= count] as const;
        } catch {
          return [entry.id, false] as const;
        }
      })
    ).then((entries) => {
      if (!cancelled) setExamCompletion(Object.fromEntries(entries));
    });

    return () => {
      cancelled = true;
    };
  }, [examMenuOpen, progress]);

  const saveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pendingSaveRef = useRef<
    { examId: string; current: number; variant?: { index: number; answers: Answers; submitted: boolean } } | null
  >(null);
  const flushSave = useCallback(() => {
    if (!user || !pendingSaveRef.current) return;
    if (saveTimerRef.current) {
      clearTimeout(saveTimerRef.current);
      saveTimerRef.current = null;
    }
    const { examId, current, variant } = pendingSaveRef.current;
    pendingSaveRef.current = null;
    saveExamProgress(
      examId,
      current,
      variant
        ? { index: variant.index, answers: variant.answers as Record<string, string>, submitted: variant.submitted }
        : undefined
    ).catch(() => {});
  }, [user]);
  const syncToServer = useCallback(
    (payload: { current: number; variant?: { index: number; answers: Answers; submitted: boolean } }) => {
      try {
        const localUpdatedKey = `${EXAM_UPDATED_STORAGE_PREFIX}${selectedExamEntry.id}`;
        localStorage.setItem(localUpdatedKey, String(Date.now()));
      } catch {}
      if (!user) return;
      pendingSaveRef.current = { examId: selectedExamEntry.id, ...payload };
      if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
      saveTimerRef.current = setTimeout(flushSave, 1000);
    },
    [user, selectedExamEntry.id, flushSave]
  );

  // Flush any pending save when the user closes/refreshes the tab or unmounts the page.
  useEffect(() => {
    const handler = () => {
      if (pendingSaveRef.current) flushSave();
    };
    window.addEventListener("beforeunload", handler);
    window.addEventListener("pagehide", handler);
    return () => {
      window.removeEventListener("beforeunload", handler);
      window.removeEventListener("pagehide", handler);
      handler();
    };
  }, [flushSave]);

  const reviewRef = useRef<HTMLDivElement | null>(null);

  const sectionGroups = useMemo(
    () => (exam ? getSectionQuestionsForVariant(exam, variantIndex) : []),
    [exam, variantIndex]
  );
  const activeSectionGroups = useMemo(() => {
    if (!retryQuestionNumbers || submitted) return sectionGroups;
    const retrySet = new Set(retryQuestionNumbers);
    return sectionGroups
      .map(({ section, questions: sectionQuestions }) => ({
        section,
        questions: sectionQuestions.filter((question) => retrySet.has(question.number))
      }))
      .filter((group) => group.questions.length > 0);
  }, [retryQuestionNumbers, sectionGroups, submitted]);
  const questions = useMemo(
    () => activeSectionGroups.flatMap((g) => g.questions),
    [activeSectionGroups]
  );
  const total = questions.length;
  const passMark = useMemo(() => (exam ? getPassMark(exam, total) : 0), [exam, total]);

  const answeredCount = useMemo(
    () => questions.reduce((count, question) => count + (answers[question.number] ? 1 : 0), 0),
    [answers, questions]
  );

  const correctCount = useMemo(() => {
    return questions.reduce(
      (count, question) => count + (answers[question.number] === question.answer ? 1 : 0),
      0
    );
  }, [answers, questions]);

  const percent = total ? Math.round((correctCount / total) * 100) : 0;
  const passed = Boolean(exam) && correctCount >= passMark;

  const scoringBand = useMemo(
    () => (exam ? getScoringBand(exam, correctCount, total) : null),
    [correctCount, exam, total]
  );
  const reviewCounts = useMemo(() => {
    return activeSectionGroups
      .flatMap((group) => group.questions)
      .reduce(
        (counts, question) => {
          const state = questionState(question, answers);
          counts.all += 1;
          counts[state] += 1;
          if (state !== "correct") counts.missed += 1;
          return counts;
        },
        { all: 0, missed: 0, wrong: 0, unanswered: 0, correct: 0 } as Record<ReviewFilter, number>
      );
  }, [activeSectionGroups, answers]);
  const missedQuestionNumbers = useMemo(
    () =>
      activeSectionGroups
        .flatMap((group) => group.questions)
        .filter((question) => questionState(question, answers) !== "correct")
        .map((question) => question.number),
    [activeSectionGroups, answers]
  );
  const displayQuestions = useMemo(() => {
    if (!submitted && viewMode === "focus") {
      const question = questions[Math.min(focusQuestionIndex, Math.max(questions.length - 1, 0))];
      return question ? [question] : [];
    }
    if (!submitted) return questions;
    return questions.filter((question) => matchesReviewFilter(question, answers, reviewFilter));
  }, [questions, answers, focusQuestionIndex, reviewFilter, submitted, viewMode]);

  useEffect(() => {
    setFocusQuestionIndex((current) => Math.min(current, Math.max(questions.length - 1, 0)));
  }, [questions.length]);

  function setAnswer(questionNumber: number, choice: ExamChoice) {
    if (!exam || submitted) return;
    // Compute next from the committed `answers` (fresh in this event handler) so
    // the server sync runs as a plain effect, not as a side effect inside the
    // setState updater (which would double-fire under StrictMode).
    // Clicking the already-selected choice toggles it off, returning the
    // question to the unanswered state — same as a fresh start.
    const next = { ...answers };
    if (next[questionNumber] === choice) {
      delete next[questionNumber];
    } else {
      next[questionNumber] = choice;
    }
    const nextProgress = writeSlot(progress, variantIndex, { answers: next, submitted: false });
    setProgress(nextProgress);
    syncToServer({ current: variantIndex, variant: { index: variantIndex, answers: next, submitted: false } });
  }

  function handleSubmit() {
    if (!exam) return;
    setViewMode("all");
    setRetryQuestionNumbers(null);
    const nextProgress = writeSlot(progress, variantIndex, { answers, submitted: true });
    setProgress(nextProgress);
    syncToServer({ current: variantIndex, variant: { index: variantIndex, answers, submitted: true } });
    window.setTimeout(() => {
      scrollIntoViewSafely(reviewRef.current, { block: "start" });
    }, 60);
  }

  // Clears just the current test so it can be retaken; other tests stay saved.
  function resetCurrentTest() {
    if (!exam) return;
    setRetryQuestionNumbers(null);
    const nextProgress = writeSlot(progress, variantIndex, { answers: {}, submitted: false });
    setProgress(nextProgress);
    syncToServer({ current: variantIndex, variant: { index: variantIndex, answers: {}, submitted: false } });
    scrollToSafely(window, { top: 0 });
  }

  function switchToTest(index: number) {
    if (!exam || index === variantIndex) {
      setTestMenuOpen(false);
      return;
    }
    // Switching tests is non-destructive: each test keeps its own answers and
    // completed state, so we just move the pointer and let the chosen test's
    // saved slot load.
    setRetryQuestionNumbers(null);
    setProgress({ ...progress, current: index });
    syncToServer({ current: index });
    setTestMenuOpen(false);
    scrollToSafely(window, { top: 0 });
  }

  function goToNextTest() {
    if (!exam || variantCount <= 1) return;
    switchToTest((variantIndex + 1) % variantCount);
  }

  function handleRetryMissed() {
    if (!exam || missedQuestionNumbers.length === 0) return;
    const missedSet = new Set(missedQuestionNumbers);
    const next = { ...answers };
    for (const questionNumber of missedSet) {
      delete next[questionNumber];
    }
    const nextProgress = writeSlot(progress, variantIndex, { answers: next, submitted: false });
    setProgress(nextProgress);
    syncToServer({ current: variantIndex, variant: { index: variantIndex, answers: next, submitted: false } });
    setRetryQuestionNumbers(missedQuestionNumbers);
    setReviewFilter("all");
    window.setTimeout(() => {
      scrollIntoViewSafely(document.getElementById(`exam-q-${missedQuestionNumbers[0]}`), { block: "center" });
    }, 60);
  }

  function exitRetryMode() {
    setRetryQuestionNumbers(null);
  }

  function scrollToFirstUnanswered() {
    for (let index = 0; index < questions.length; index += 1) {
      const q = questions[index];
      if (!(q.number in answers)) {
        if (viewMode === "focus") {
          setFocusQuestionIndex(index);
          return;
        }
        scrollIntoViewSafely(document.getElementById(`exam-q-${q.number}`), { block: "center" });
        return;
      }
    }
  }

  function toggleQuestionFlag(questionNumber: number) {
    setFlaggedQuestionNumbers((current) => {
      const next = new Set(current);
      if (next.has(questionNumber)) next.delete(questionNumber);
      else next.add(questionNumber);
      return next;
    });
  }

  async function copyFullExam() {
    if (!exam) return;
    if (examCopyTimeoutRef.current !== null) {
      window.clearTimeout(examCopyTimeoutRef.current);
    }

    try {
      await writeClipboardText(getExamClipboardText(sectionGroups));
      setExamCopyState("copied");
      examCopyTimeoutRef.current = window.setTimeout(() => {
        setExamCopyState("idle");
        examCopyTimeoutRef.current = null;
      }, 1400);
    } catch {
      setExamCopyState("failed");
      examCopyTimeoutRef.current = window.setTimeout(() => {
        setExamCopyState("idle");
        examCopyTimeoutRef.current = null;
      }, 2000);
    }
  }

  const examCopyLabel =
    examCopyState === "copied"
      ? "Copied full exam"
      : examCopyState === "failed"
        ? "Copy full exam failed"
        : "Copy full exam with answers";
  const examCopyButtonText =
    examCopyState === "copied" ? "Copied" : examCopyState === "failed" ? "Copy failed" : "Copy full exam";
  const fullExamCopyButton = (
    <button
      type="button"
      className={`ghost-button exam-copy-full-btn exam-copy-full-btn--${examCopyState}`}
      onClick={copyFullExam}
      disabled={!exam}
      aria-label={examCopyLabel}
      title={examCopyLabel}
    >
      <span className="sr-only" aria-live="polite">{examCopyLabel}</span>
      <span className="exam-copy-full-icon" aria-hidden="true">
        {examCopyState === "copied" ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12.5l4.4 4.4L19 7.3" />
          </svg>
        ) : examCopyState === "failed" ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 7l10 10M17 7L7 17" />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="9" width="10" height="10" rx="2" />
            <path d="M6 15H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1" />
          </svg>
        )}
      </span>
      <span className="exam-copy-full-label" aria-hidden="true">{examCopyButtonText}</span>
    </button>
  );

  return (
    <section className={`page page-exams ${isActive ? "is-active" : ""}`}>
      {/* The triangle-mesh backdrop now lives at the app root (.app-bg in App.tsx)
          so it spans every page; the exam page no longer renders its own. */}
      <div className="exam-shell">
        <header className="exam-hero">
          <div className="exam-hero-text">
            <span className="exam-eyebrow">{"PRACTICE EXAM · EAL — City & Guilds aligned"}</span>
            <h1 className="sr-only">{selectedExamEntry.title} practice exam</h1>
            <div className="exam-title-wrap" ref={examMenuRef}>
              {EXAM_REGISTRY.length > 1 ? (
                <div className="exam-title-menu-wrap">
                  <button
                    type="button"
                    className="exam-title-button"
                    aria-haspopup="listbox"
                    aria-expanded={examMenuOpen}
                    aria-controls="exam-title-menu"
                    onClick={() => setExamMenuOpen((open) => !open)}
                  >
                    <span className="exam-title-text">{selectedExamEntry.title}</span>
                    <svg
                      className="exam-title-chevron"
                      viewBox="0 0 20 20"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="m5 7.5 5 5 5-5"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  {examMenuOpen ? (
                    <div
                      id="exam-title-menu"
                      className="exam-title-menu"
                      role="listbox"
                      aria-label="Mock exam"
                    >
                      {EXAM_REGISTRY.map((entry) => {
                        const complete = examCompletion[entry.id] ?? false;
                        return (
                          <button
                            key={entry.id}
                            type="button"
                            role="option"
                            aria-selected={entry.id === selectedExamEntry.id}
                            className={`exam-title-option${entry.id === selectedExamEntry.id ? " is-active" : ""}${complete ? " is-complete" : ""}`}
                            onClick={() => {
                              setSelectedExamId(entry.id);
                              setExamMenuOpen(false);
                            }}
                          >
                            <span>{entry.title}</span>
                            {complete ? (
                              <span className="exam-title-done" aria-hidden="true">✓</span>
                            ) : null}
                          </button>
                        );
                      })}
                    </div>
                  ) : null}
                </div>
              ) : (
                <h2>{selectedExamEntry.title}</h2>
              )}
              {exam ? (
                <>
                  <button
                    type="button"
                    className="exam-title-info"
                    aria-label="About this exam"
                    aria-expanded={examInfoOpen}
                    onClick={() => setExamInfoOpen((open) => !open)}
                    onBlur={() => setExamInfoOpen(false)}
                    onKeyDown={(event) => {
                      if (event.key === "Escape") setExamInfoOpen(false);
                    }}
                  >
                    i
                  </button>
                  <div className={`exam-tooltip${examInfoOpen ? " is-open" : ""}`} role="tooltip">
                    <span className="exam-tooltip-subtitle">{exam.subtitle}</span>
                    <p className="exam-tooltip-description">{exam.description}</p>
                    <p className="exam-tooltip-format">{exam.format}</p>
                  </div>
                </>
              ) : null}
            </div>
          </div>
          <div className="exam-hero-stats">
            {variantCount > 1 ? (
              <div className="exam-stat exam-stat--switch" ref={testMenuRef}>
                <span>Test</span>
                <button
                  type="button"
                  className="exam-test-switch"
                  aria-haspopup="listbox"
                  aria-expanded={testMenuOpen}
                  aria-controls={testMenuOpen ? "exam-test-menu" : undefined}
                  disabled={!exam}
                  onClick={() => setTestMenuOpen((open) => !open)}
                >
                  <strong>{variantIndex + 1}</strong>
                  <svg className="exam-test-switch-chevron" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="m5 7.5 5 5 5-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <select
                  className="exam-test-select"
                  aria-label="Switch test"
                  value={variantIndex}
                  disabled={!exam}
                  onChange={(event) => switchToTest(Number(event.target.value))}
                >
                  {Array.from({ length: variantCount }, (_, i) => (
                    <option key={i} value={i}>{i + 1}</option>
                  ))}
                </select>
                {testMenuOpen ? (
                  <div id="exam-test-menu" className="exam-test-menu" role="listbox" aria-label="Switch test">
                    {Array.from({ length: variantCount }, (_, i) => {
                      const done = progress.variants[String(i)]?.submitted ?? false;
                      return (
                        <button
                          key={i}
                          type="button"
                          role="option"
                          aria-selected={i === variantIndex}
                          className={`exam-test-option${i === variantIndex ? " is-active" : ""}${done ? " is-done" : ""}`}
                          onClick={() => switchToTest(i)}
                        >
                          <span>Test {i + 1}</span>
                          {done ? (
                            <span className="exam-test-done" aria-hidden="true">✓</span>
                          ) : null}
                        </button>
                      );
                    })}
                  </div>
                ) : null}
              </div>
            ) : (
              <div className="exam-stat">
                <span>Test</span>
                <strong>{variantIndex + 1}</strong>
              </div>
            )}
            <div className="exam-stat">
              <span>Questions</span>
              <strong>{total}</strong>
            </div>
            <div className="exam-stat">
              <span>Answered</span>
              <strong>
                {answeredCount}
                <span className="exam-stat-sub">/{total}</span>
              </strong>
            </div>
            <div className="exam-stat">
              <span>Pass mark</span>
              <strong>
                {passMark}
                <span className="exam-stat-sub">/{total}</span>
              </strong>
            </div>
          </div>
        </header>

        <aside className="exam-content-notice" role="note">
          Study aid: confirm current awarding-body requirements, BS 7671 editions and official guidance before relying on technical or regulatory wording.
        </aside>

        {total > 0 ? (
          <div
            className="exam-progress"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={total}
            aria-valuenow={answeredCount}
            aria-label="Exam progress"
          >
            <div
              className="exam-progress-bar"
              style={{ width: `${(answeredCount / total) * 100}%` }}
            />
          </div>
        ) : null}

        {!submitted && total > 0 ? (
          <div className="exam-view-toolbar">
            <div className="exam-view-switch" role="group" aria-label="Question view">
              <button
                type="button"
                className={viewMode === "all" ? "is-active" : ""}
                aria-pressed={viewMode === "all"}
                onClick={() => setViewMode("all")}
              >
                All questions
              </button>
              <button
                type="button"
                className={viewMode === "focus" ? "is-active" : ""}
                aria-pressed={viewMode === "focus"}
                onClick={() => setViewMode("focus")}
              >
                Focus mode
              </button>
            </div>
            {viewMode === "focus" ? (
              <div className="exam-question-navigator" aria-label="Question navigator">
                {questions.map((question, index) => {
                  const answered = Boolean(answers[question.number]);
                  const flagged = flaggedQuestionNumbers.has(question.number);
                  return (
                    <button
                      key={question.number}
                      type="button"
                      className={`${index === focusQuestionIndex ? "is-current" : ""}${answered ? " is-answered" : ""}${flagged ? " is-flagged" : ""}`}
                      aria-current={index === focusQuestionIndex ? "true" : undefined}
                      aria-label={`Question ${question.number}${answered ? ", answered" : ", unanswered"}${flagged ? ", flagged" : ""}`}
                      onClick={() => setFocusQuestionIndex(index)}
                    >
                      {question.number}
                    </button>
                  );
                })}
              </div>
            ) : null}
          </div>
        ) : null}

        {submitted && exam && scoringBand ? (
          <ExamResults
            correctCount={correctCount}
            total={total}
            percent={percent}
            passed={passed}
            scoringBand={scoringBand}
            reviewRef={reviewRef}
          />
        ) : null}

        {submitted && exam ? (
          <div className="exam-review-tools" aria-label="Review filters">
            <div className="exam-review-filter-row" role="group" aria-label="Question status filter">
              {(Object.keys(REVIEW_FILTER_LABELS) as ReviewFilter[]).map((filter) => (
                <button
                  key={filter}
                  type="button"
                  className={`exam-review-filter${reviewFilter === filter ? " is-active" : ""}`}
                  onClick={() => setReviewFilter(filter)}
                  aria-pressed={reviewFilter === filter}
                >
                  <span>{REVIEW_FILTER_LABELS[filter]}</span>
                  <strong>{reviewCounts[filter]}</strong>
                </button>
              ))}
            </div>
          </div>
        ) : null}

        {!exam ? (
          <p className="empty-state" role="status">Loading {selectedExamEntry.title}...</p>
        ) : null}

        <div className="exam-sections">
          <div className="exam-question-list">
            {displayQuestions.map((question) => (
              <QuestionCard
                key={question.number}
                question={question}
                selected={answers[question.number]}
                submitted={submitted}
                onSelect={(choice) => setAnswer(question.number, choice)}
                flagged={flaggedQuestionNumbers.has(question.number)}
                onToggleFlag={() => toggleQuestionFlag(question.number)}
              />
            ))}
          </div>
        </div>

        {!submitted && viewMode === "focus" && displayQuestions.length > 0 ? (
          <div className="exam-focus-controls" aria-label="Focus mode navigation">
            <button
              type="button"
              className="ghost-button"
              disabled={focusQuestionIndex === 0}
              onClick={() => setFocusQuestionIndex((current) => Math.max(0, current - 1))}
            >
              Previous
            </button>
            <button
              type="button"
              className={`ghost-button exam-flag-control${flaggedQuestionNumbers.has(displayQuestions[0].number) ? " is-active" : ""}`}
              aria-pressed={flaggedQuestionNumbers.has(displayQuestions[0].number)}
              onClick={() => toggleQuestionFlag(displayQuestions[0].number)}
            >
              {flaggedQuestionNumbers.has(displayQuestions[0].number) ? "Flagged" : "Flag for review"}
            </button>
            <button
              type="button"
              className="ghost-button"
              disabled={focusQuestionIndex >= questions.length - 1}
              onClick={() => setFocusQuestionIndex((current) => Math.min(questions.length - 1, current + 1))}
            >
              Next
            </button>
          </div>
        ) : null}

        {submitted && exam && displayQuestions.length === 0 ? (
          <p className="empty-state">No questions match the current review filters.</p>
        ) : null}

        <footer className="exam-footer">
          {!submitted ? (
            <>
              <div className="exam-footer-status">
                {!exam ? (
                  <span>Loading exam.</span>
                ) : retryQuestionNumbers ? (
                  <span>
                    Retrying {retryQuestionNumbers.length} missed question{retryQuestionNumbers.length === 1 ? "" : "s"}.
                  </span>
                ) : answeredCount === total ? (
                  <span className="exam-status-ok">Ready to submit.</span>
                ) : (
                  <button
                    type="button"
                    className="ghost-button exam-jump-btn"
                    onClick={scrollToFirstUnanswered}
                  >
                    Next unanswered ({total - answeredCount})
                  </button>
                )}
              </div>
              <div className="exam-footer-actions">
                {fullExamCopyButton}
                {retryQuestionNumbers ? (
                  <button type="button" className="ghost-button" onClick={exitRetryMode}>
                    Exit retry
                  </button>
                ) : null}
                <button
                  type="button"
                  className="exam-submit-btn"
                  onClick={handleSubmit}
                  disabled={!exam || answeredCount === 0}
                >
                  Submit exam
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="exam-footer-status">
                <span className={`exam-status-${passed ? "ok" : "bad"}`}>
                  {passed ? "Pass" : "Below pass mark"} — {correctCount}/{total} ({percent}%)
                </span>
              </div>
              <div className="exam-footer-actions">
                {fullExamCopyButton}
                <button
                  type="button"
                  className="ghost-button"
                  onClick={handleRetryMissed}
                  disabled={missedQuestionNumbers.length === 0}
                >
                  Retry missed
                </button>
                <button type="button" className="ghost-button" onClick={resetCurrentTest}>
                  Reset test
                </button>
                {variantCount > 1 ? (
                  <button type="button" className="ghost-button" onClick={goToNextTest}>
                    Next test
                  </button>
                ) : null}
              </div>
            </>
          )}
        </footer>
      </div>
    </section>
  );
}

type QuestionCardProps = {
  question: ExamQuestion;
  selected: ExamChoice | undefined;
  submitted: boolean;
  onSelect: (choice: ExamChoice) => void;
  flagged: boolean;
  onToggleFlag: () => void;
};

function QuestionCard({ question, selected, submitted, onSelect, flagged, onToggleFlag }: QuestionCardProps) {
  const correct = question.answer;
  const isCorrect = submitted && selected === correct;
  const isIncorrect = submitted && selected !== undefined && selected !== correct;
  const isUnanswered = submitted && selected === undefined;
  const [copyState, setCopyState] = useState<CopyState>("idle");
  const [preview, setPreview] = useState(false);
  const copyTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (copyTimeoutRef.current !== null) {
        window.clearTimeout(copyTimeoutRef.current);
      }
    };
  }, []);

  async function copyQuestion() {
    if (copyTimeoutRef.current !== null) {
      window.clearTimeout(copyTimeoutRef.current);
    }

    try {
      await writeClipboardText(getQuestionClipboardText(question));
      setCopyState("copied");
      copyTimeoutRef.current = window.setTimeout(() => {
        setCopyState("idle");
        copyTimeoutRef.current = null;
      }, 1400);
    } catch {
      setCopyState("failed");
      copyTimeoutRef.current = window.setTimeout(() => {
        setCopyState("idle");
        copyTimeoutRef.current = null;
      }, 2000);
    }
  }

  const copyLabel =
    copyState === "copied"
      ? `Copied question ${question.number}`
      : copyState === "failed"
        ? `Copy failed for question ${question.number}`
        : `Copy question ${question.number} with options`;

  return (
    <div
      id={`exam-q-${question.number}`}
      className={[
        "exam-question",
        submitted && isCorrect ? "is-correct" : "",
        submitted && isIncorrect ? "is-incorrect" : "",
        submitted && isUnanswered ? "is-unanswered" : ""
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="exam-question-head">
        <span className="exam-q-number">Q{question.number}</span>
        <div className="exam-question-actions">
          {!submitted ? (
            <button
              type="button"
              className={`exam-copy-btn exam-flag-btn${flagged ? " is-active" : ""}`}
              onClick={onToggleFlag}
              aria-pressed={flagged}
              aria-label={flagged ? `Remove review flag from question ${question.number}` : `Flag question ${question.number} for review`}
              title={flagged ? "Remove review flag" : "Flag for review"}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill={flagged ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 4v17" />
                <path d="M5 5h11l-2.5 4L16 13H5" />
              </svg>
            </button>
          ) : null}
          {!submitted ? (
            <button
              type="button"
              className={`exam-copy-btn exam-preview-btn${preview ? " is-active" : ""}`}
              onClick={() => setPreview((open) => !open)}
              aria-pressed={preview}
              aria-label={preview ? `Hide the answer for question ${question.number}` : `Reveal the answer for question ${question.number}`}
              title={preview ? "Hide answer" : "Reveal answer"}
            >
              <span className="exam-copy-icon" aria-hidden="true">
                {preview ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 3l18 18" />
                    <path d="M10.6 5.1A10.8 10.8 0 0 1 12 5c5 0 9.3 3.1 11 7a17 17 0 0 1-2.2 3.2M6.2 6.2C4 7.5 2.2 9.5 1 12c1.7 3.9 6 7 11 7 1.6 0 3.1-.3 4.4-.8" />
                    <path d="M9.9 9.9a3 3 0 0 0 4.2 4.2" />
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </span>
            </button>
          ) : null}
          <button
            type="button"
            className={`exam-copy-btn exam-copy-btn--${copyState}`}
            onClick={copyQuestion}
            aria-label={copyLabel}
            title={copyLabel}
          >
            <span className="sr-only" aria-live="polite">{copyLabel}</span>
            <span className="exam-copy-icon" aria-hidden="true">
              {copyState === "copied" ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12.5l4.4 4.4L19 7.3" />
                </svg>
              ) : copyState === "failed" ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 7l10 10M17 7L7 17" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="9" width="10" height="10" rx="2" />
                  <path d="M6 15H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1" />
                </svg>
              )}
            </span>
          </button>
          {submitted ? (
            <span className={`exam-q-badge exam-q-badge--${isCorrect ? "ok" : "bad"}`}>
              {isCorrect ? "Correct" : isUnanswered ? "Not answered" : "Incorrect"}
            </span>
          ) : null}
        </div>
      </div>
      <p className="exam-q-prompt">{question.prompt}</p>
      {question.imageUrls?.length ? (
        <div className="exam-question-media">
          {question.imageUrls.map((url) => (
            <img key={url} src={url} alt={`Question ${question.number} reference`} loading="lazy" />
          ))}
        </div>
      ) : null}
      <div className="exam-options" role="radiogroup" aria-label={`Question ${question.number}`}>
        {LETTERS.map((letter) => {
          const isSelected = selected === letter;
          const reveal = submitted || preview;
          const isAnswer = reveal && letter === correct;
          const isWrongPick = submitted && isSelected && letter !== correct;
          const classes = [
            "exam-option",
            isSelected ? "is-selected" : "",
            isAnswer ? "is-answer" : "",
            isWrongPick ? "is-wrong" : ""
          ]
            .filter(Boolean)
            .join(" ");

          return (
            <button
              key={letter}
              type="button"
              className={classes}
              role="radio"
              aria-checked={isSelected}
              disabled={submitted}
              onClick={() => onSelect(letter)}
            >
              <span className="exam-option-letter">{letter}</span>
              <span className="exam-option-text">
                <span>{question.options[letter]}</span>
                {question.optionImageUrls?.[letter] ? (
                  <img
                    className="exam-option-image"
                    src={question.optionImageUrls[letter]}
                    alt={`Option ${letter} reference`}
                    loading="lazy"
                  />
                ) : null}
              </span>
              {isSelected && !submitted && !isAnswer ? (
                <span className="exam-option-check" aria-hidden="true">✓</span>
              ) : null}
              {isAnswer ? (
                <span className="exam-option-mark" aria-hidden="true">✓</span>
              ) : null}
              {submitted && isWrongPick ? (
                <span className="exam-option-mark exam-option-mark--bad" aria-hidden="true">✕</span>
              ) : null}
            </button>
          );
        })}
      </div>
      {submitted || preview ? (
        <div className="exam-explanation">
          <span className="exam-explanation-label">
            {submitted ? "Explanation" : `Answer: ${correct}`}
          </span>
          <p>{question.explanation}</p>
        </div>
      ) : null}
    </div>
  );
}

type ResultsProps = {
  correctCount: number;
  total: number;
  percent: number;
  passed: boolean;
  scoringBand: ScoringRange;
  reviewRef: React.RefObject<HTMLDivElement | null>;
};

function ExamResults({
  correctCount,
  total,
  percent,
  passed,
  scoringBand,
  reviewRef
}: ResultsProps) {
  return (
    <div className="exam-results" ref={reviewRef}>
      <div className={`exam-results-banner ${passed ? "is-pass" : "is-fail"}`}>
        <div className="exam-results-score-block">
          <span className="exam-results-label">Result</span>
          <strong className="exam-results-score">
            {correctCount}<span>/{total}</span>
          </strong>
          <span className="exam-results-percent">{percent}%</span>
        </div>
        <div className="exam-results-verdict">
          <strong>{scoringBand.range}</strong>
          <span>{scoringBand.label}</span>
        </div>
      </div>
    </div>
  );
}
