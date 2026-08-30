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
  type ExamQuestion,
  type ExamSolutionTable
} from "./exams/types";
import {
  DEFAULT_EXAM_ID,
  EXAM_REGISTRY,
  getValidExamIds,
  isKnownExamId,
  type ExamId
} from "./examRegistry";
import { usePersistedState } from "./usePersistedState";
import { useAuth } from "./AuthContext";
import { getExamProgress, saveExamProgress } from "./api";
import { writeClipboardText } from "./clipboard";
import { getExamClipboardText, getQuestionClipboardText } from "./examClipboard";
import { getQuestionChatGPTUrl } from "./chatgptQuestion";
import { buildOptionFeedback } from "./examOptionExplanations";
import {
  downloadExamMarkdown,
  downloadExamPdf,
  getExamExportFilename
} from "./examExport";
import { scrollIntoViewSafely, scrollToSafely } from "./scroll";
import { useFocusTrap } from "./useFocusTrap";
import {
  EXAM_PROGRESS_STORAGE_PREFIX,
  EXAM_UPDATED_STORAGE_PREFIX
} from "./examProgressSummary";

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
// Each test (variant) of an exam keeps its own answers + completed state, so
// finishing one test is remembered independently of the others.
type VariantSlot = { answers: Answers; submitted: boolean };
type ExamProgress = { variants: Record<string, VariantSlot>; current: number };
const EMPTY_ANSWERS: Answers = {};
const EMPTY_PROGRESS: ExamProgress = { variants: {}, current: 0 };
const PERIODIC_INSPECTION_RESET_AT = Date.UTC(2026, 5, 7, 0, 0);
const INITIAL_VERIFICATION_RESET_AT = Date.UTC(2026, 6, 26, 18, 40);
const WIRING_REGULATIONS_RESET_AT = Date.UTC(2026, 6, 30, 20, 20);
const EXAM_REMOTE_PROGRESS_RESET_AT: Partial<Record<string, number>> = {
  "level-2-electrical-installation": Date.UTC(2026, 4, 26, 21, 1),
  "level-3-electrical-installation": Date.UTC(2026, 4, 26, 21, 1),
  "building-regulations": Date.UTC(2026, 4, 26, 21, 1),
  "18th-edition": WIRING_REGULATIONS_RESET_AT,
  "special-locations": Date.UTC(2026, 4, 26, 21, 1),
  "pat-testing": Date.UTC(2026, 4, 26, 21, 1),
  "fundamental-inspection-testing": Date.UTC(2026, 4, 26, 21, 1),
  "initial-verification": INITIAL_VERIFICATION_RESET_AT,
  "inspection-design-2396": Date.UTC(2026, 4, 26, 21, 1),
  "periodic-inspection": PERIODIC_INSPECTION_RESET_AT,
  "am2-installation-assessment": Date.UTC(2026, 4, 26, 21, 1),
  "ecs-health-safety": Date.UTC(2026, 4, 26, 21, 1)
};
const EXAM_LOCAL_PROGRESS_RESET_AT: Partial<Record<string, number>> = {
  "18th-edition": WIRING_REGULATIONS_RESET_AT,
  "periodic-inspection": PERIODIC_INSPECTION_RESET_AT,
  "initial-verification": INITIAL_VERIFICATION_RESET_AT
};

type CopyState = "idle" | "copied" | "failed";
type ExamExportState = "idle" | "preparing" | "saved" | "failed";

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

function isTextEntryActive(eventTarget: EventTarget | null): boolean {
  const target = eventTarget instanceof HTMLElement ? eventTarget : null;
  const activeElement = document.activeElement instanceof HTMLElement ? document.activeElement : null;
  return [target, activeElement].some(
    (element) =>
      element?.isContentEditable ||
      element?.closest("input, textarea, select, [contenteditable='true']")
  );
}

type Props = {
  isActive: boolean;
  practiceTarget?: {
    examId: string;
    nonce: number;
  } | null;
  hiddenExamIds?: readonly ExamId[];
};

export function ExamPage({ isActive, practiceTarget, hiddenExamIds = [] }: Props) {
  const { user } = useAuth();
  const [examMenuOpen, setExamMenuOpen] = useState(false);
  const examMenuRef = useRef<HTMLDivElement>(null);
  const [testMenuOpen, setTestMenuOpen] = useState(false);
  const testMenuRef = useRef<HTMLDivElement>(null);
  const [examActionsMenuOpen, setExamActionsMenuOpen] = useState(false);
  const examActionsMenuRef = useRef<HTMLDivElement>(null);
  const [resetConfirmationOpen, setResetConfirmationOpen] = useState(false);
  const resetDialogRef = useFocusTrap<HTMLDivElement>(resetConfirmationOpen);

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

  useEffect(() => {
    if (!examActionsMenuOpen) return;

    function handlePointerDown(event: PointerEvent) {
      if (!examActionsMenuRef.current?.contains(event.target as Node)) {
        setExamActionsMenuOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setExamActionsMenuOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [examActionsMenuOpen]);

  useEffect(() => {
    if (!resetConfirmationOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setResetConfirmationOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [resetConfirmationOpen]);

  const [selectedExamId, setSelectedExamId] = usePersistedState<string>(
    "exam-selected",
    DEFAULT_EXAM_ID,
    isKnownExamId
  );

  const visibleExamRegistry = useMemo(() => {
    const hidden = new Set(hiddenExamIds);
    const visible = EXAM_REGISTRY.filter((entry) => !hidden.has(entry.id));
    return visible.length > 0 ? visible : [EXAM_REGISTRY[0]];
  }, [hiddenExamIds]);

  useEffect(() => {
    if (!practiceTarget || !isKnownExamId(practiceTarget.examId)) return;
    setSelectedExamId(practiceTarget.examId);
    // practiceTarget is a fresh object per "open this exam" request (its nonce
    // is bumped each time), so depending on it re-runs exactly when intended.
  }, [practiceTarget, setSelectedExamId]);

  const selectedExamEntry =
    visibleExamRegistry.find((entry) => entry.id === selectedExamId) ?? visibleExamRegistry[0];

  useEffect(() => {
    if (selectedExamId !== selectedExamEntry.id) setSelectedExamId(selectedExamEntry.id);
  }, [selectedExamEntry.id, selectedExamId, setSelectedExamId]);
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
  const [examExportState, setExamExportState] = useState<ExamExportState>("idle");
  const [examExportMessage, setExamExportMessage] = useState("Export full exam");
  const [viewMode, setViewMode] = useState<ExamViewMode>("focus");
  const [focusQuestionIndex, setFocusQuestionIndex] = useState(0);
  const [flaggedQuestionNumbers, setFlaggedQuestionNumbers] = useState<Set<number>>(() => new Set());
  const [attemptRevision, setAttemptRevision] = useState(0);
  const examCopyTimeoutRef = useRef<number | null>(null);
  const examExportTimeoutRef = useRef<number | null>(null);
  // Marks each category complete once every one of its tests has been submitted,
  // so the category list can tick a whole exam off (not just its individual tests).
  const [examCompletion, setExamCompletion] = useState<Record<string, boolean>>({});

  useEffect(() => {
    return () => {
      if (examCopyTimeoutRef.current !== null) {
        window.clearTimeout(examCopyTimeoutRef.current);
      }
      if (examExportTimeoutRef.current !== null) {
        window.clearTimeout(examExportTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    setReviewFilter("all");
    setRetryQuestionNumbers(null);
    setExamInfoOpen(false);
    setTestMenuOpen(false);
    setExamActionsMenuOpen(false);
    setResetConfirmationOpen(false);
    setExamCopyState("idle");
    setExamExportState("idle");
    setExamExportMessage("Export full exam");
    setViewMode("focus");
    setFocusQuestionIndex(0);
    setFlaggedQuestionNumbers(new Set());
    if (examCopyTimeoutRef.current !== null) {
      window.clearTimeout(examCopyTimeoutRef.current);
      examCopyTimeoutRef.current = null;
    }
    if (examExportTimeoutRef.current !== null) {
      window.clearTimeout(examExportTimeoutRef.current);
      examExportTimeoutRef.current = null;
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
      visibleExamRegistry.map(async (entry) => {
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
  }, [examMenuOpen, progress, visibleExamRegistry]);

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
  const firstUnansweredIndex = questions.findIndex((question) => !(question.number in answers));
  const canSubmit = Boolean(exam) && total > 0 && answeredCount === total;
  const canResetCurrentTest =
    Boolean(exam) &&
    (submitted || Object.keys(answers).length > 0 || flaggedQuestionNumbers.size > 0);
  const nextQuestionIndex =
    focusQuestionIndex < total - 1 ? focusQuestionIndex + 1 : firstUnansweredIndex;

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

  useEffect(() => {
    if (!isActive || submitted || viewMode !== "focus" || questions.length === 0) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;

      if (isTextEntryActive(event.target)) return;

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setFocusQuestionIndex((current) => Math.max(0, current - 1));
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        setFocusQuestionIndex((current) => Math.min(questions.length - 1, current + 1));
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isActive, questions.length, submitted, viewMode]);

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
    if (!exam || !canSubmit) return;
    setViewMode("all");
    setRetryQuestionNumbers(null);
    const nextProgress = writeSlot(progress, variantIndex, { answers, submitted: true });
    setProgress(nextProgress);
    syncToServer({ current: variantIndex, variant: { index: variantIndex, answers, submitted: true } });
    window.setTimeout(() => {
      scrollIntoViewSafely(reviewRef.current, { block: "start", behavior: "auto" });
    }, 60);
  }

  function goToQuestion(index: number) {
    const question = questions[index];
    if (!question) return;

    setFocusQuestionIndex(index);
    if (!submitted && viewMode === "focus") return;

    if (submitted) setReviewFilter("all");
    window.setTimeout(() => {
      scrollIntoViewSafely(document.getElementById(`exam-q-${question.number}`), {
        block: "center",
        behavior: "auto"
      });
    }, submitted && reviewFilter !== "all" ? 60 : 0);
  }

  // Clears just the current test so it can be retaken; other tests stay saved.
  function resetCurrentTest() {
    if (!exam) return;
    setResetConfirmationOpen(false);
    setRetryQuestionNumbers(null);
    setReviewFilter("all");
    setViewMode("focus");
    setFocusQuestionIndex(0);
    setFlaggedQuestionNumbers(new Set());
    setAttemptRevision((revision) => revision + 1);
    const nextProgress = writeSlot(progress, variantIndex, { answers: {}, submitted: false });
    setProgress(nextProgress);
    syncToServer({ current: variantIndex, variant: { index: variantIndex, answers: {}, submitted: false } });
    scrollToSafely(window, { top: 0 });
  }

  function requestResetCurrentTest() {
    if (!canResetCurrentTest) return;
    setExamActionsMenuOpen(false);
    setResetConfirmationOpen(true);
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

  function showExportFeedback(state: ExamExportState, message: string, duration = 1800) {
    if (examExportTimeoutRef.current !== null) {
      window.clearTimeout(examExportTimeoutRef.current);
      examExportTimeoutRef.current = null;
    }
    setExamExportState(state);
    setExamExportMessage(message);
    if (state === "preparing") return;
    examExportTimeoutRef.current = window.setTimeout(() => {
      setExamExportState("idle");
      setExamExportMessage("Export full exam");
      examExportTimeoutRef.current = null;
    }, duration);
  }

  function exportFullExamMarkdown() {
    if (!exam) return;
    setExamActionsMenuOpen(false);
    try {
      downloadExamMarkdown(
        sectionGroups,
        getExamExportFilename(selectedExamEntry.id, variantIndex + 1, "md")
      );
      showExportFeedback("saved", "Markdown downloaded");
    } catch {
      showExportFeedback("failed", "Markdown export failed", 2400);
    }
  }

  async function exportFullExamPdf() {
    if (!exam || examExportState === "preparing") return;
    setExamActionsMenuOpen(false);
    showExportFeedback("preparing", "Preparing PDF");
    try {
      await downloadExamPdf(
        sectionGroups,
        getExamExportFilename(selectedExamEntry.id, variantIndex + 1, "pdf")
      );
      showExportFeedback("saved", "PDF downloaded");
    } catch {
      showExportFeedback("failed", "PDF export failed", 2400);
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
  const fullExamActionsMenu = (
    <div className="exam-actions-wrap" ref={examActionsMenuRef}>
      <button
        type="button"
        className="exam-actions-trigger"
        onClick={() => setExamActionsMenuOpen((open) => !open)}
        disabled={!exam}
        aria-haspopup="menu"
        aria-expanded={examActionsMenuOpen}
        aria-label="Exam actions"
        title="Exam actions"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <circle cx="5" cy="12" r="1.7" />
          <circle cx="12" cy="12" r="1.7" />
          <circle cx="19" cy="12" r="1.7" />
        </svg>
      </button>
      {examActionsMenuOpen ? (
        <div className="exam-actions-menu" role="menu" aria-label="Exam actions">
          <button
            type="button"
            role="menuitem"
            className={`exam-actions-copy exam-actions-copy--${examCopyState}`}
            onClick={() => {
              setExamActionsMenuOpen(false);
              void copyFullExam();
            }}
          >
            <span className="exam-actions-menu-icon" aria-hidden="true">
              {examCopyState === "copied" ? (
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12.5l4.4 4.4L19 7.3" />
                </svg>
              ) : examCopyState === "failed" ? (
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 7l10 10M17 7L7 17" />
                </svg>
              ) : (
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="9" width="10" height="10" rx="2" />
                  <path d="M6 15H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1" />
                </svg>
              )}
            </span>
            <span>
              <strong>{examCopyButtonText}</strong>
              <small>Questions, answers and explanations</small>
            </span>
          </button>
          <button type="button" role="menuitem" onClick={exportFullExamMarkdown}>
            <span className="exam-actions-menu-icon" aria-hidden="true">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3v12" />
                <path d="m7 10 5 5 5-5" />
                <path d="M5 21h14" />
              </svg>
            </span>
            <span>
              <strong>Export Markdown</strong>
              <small>Questions, answers and explanations</small>
            </span>
            <span className="exam-export-extension">.md</span>
          </button>
          <button
            type="button"
            role="menuitem"
            onClick={() => void exportFullExamPdf()}
            disabled={examExportState === "preparing"}
          >
            <span className="exam-actions-menu-icon" aria-hidden="true">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3v12" />
                <path d="m7 10 5 5 5-5" />
                <path d="M5 21h14" />
              </svg>
            </span>
            <span>
              <strong>{examExportState === "preparing" ? "Preparing PDF…" : "Export PDF"}</strong>
              <small>Print-ready with page numbers</small>
            </span>
            <span className="exam-export-extension">.pdf</span>
          </button>
          <div className="exam-actions-menu-separator" role="separator" />
          <button
            type="button"
            role="menuitem"
            className="exam-actions-reset"
            onClick={requestResetCurrentTest}
            disabled={!canResetCurrentTest}
          >
            <span className="exam-actions-menu-icon" aria-hidden="true">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12a9 9 0 1 0 3-6.7" />
                <path d="M3 4v6h6" />
              </svg>
            </span>
            <span>
              <strong>Reset test</strong>
              <small>{canResetCurrentTest ? "Clear answers and result for this test" : "No answers to reset"}</small>
            </span>
          </button>
        </div>
      ) : null}
      <span className="sr-only" aria-live="polite">{examCopyLabel}. {examExportMessage}</span>
    </div>
  );

  return (
    <section className={`page page-exams ${isActive ? "is-active" : ""}`}>
      <div className="exam-shell">
        <header className="exam-hero">
          <div className="exam-hero-text">
            <span className="exam-eyebrow">PRACTICE EXAM</span>
            <h1 className="sr-only">{selectedExamEntry.title} practice exam</h1>
            <div className="exam-hero-heading-row">
              <div className="exam-title-wrap" ref={examMenuRef}>
                {visibleExamRegistry.length > 1 ? (
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
                      {visibleExamRegistry.map((entry) => {
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
                    <p className="exam-tooltip-guidance">
                      <strong>Study aid.</strong> Confirm current awarding-body requirements, BS 7671 editions and
                      official guidance before relying on technical or regulatory wording.
                    </p>
                    </div>
                  </>
                ) : null}
              </div>
              {fullExamActionsMenu}
            </div>
          </div>
          <div className="exam-hero-summary">
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
            {!submitted && total > 0 ? (
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
            ) : null}
          </div>
        </header>

        {total > 0 ? (
          <nav
            className="exam-progress"
            aria-label={`Question navigator, ${answeredCount} of ${total} answered`}
            style={{ gridTemplateColumns: `repeat(${total}, minmax(3px, 1fr))` }}
          >
            {questions.map((question, index) => {
              const state = questionState(question, answers);
              const answered = state !== "unanswered";
              const current = !submitted && viewMode === "focus" && index === focusQuestionIndex;
              const flagged = !submitted && flaggedQuestionNumbers.has(question.number);
              const status = submitted
                ? state === "wrong" ? "incorrect" : state
                : answered ? "answered" : "unanswered";
              const label = `Question ${question.number}, ${status}${current ? ", current question" : ""}${flagged ? ", flagged" : ""}`;

              return (
                <button
                  key={question.number}
                  type="button"
                  className={[
                    "exam-progress-segment",
                    answered && !submitted ? "is-answered" : "",
                    submitted ? `is-${state}` : "",
                    current ? "is-current" : "",
                    flagged ? "is-flagged" : ""
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  aria-label={label}
                  aria-current={current ? "step" : undefined}
                  title={label}
                  onClick={() => goToQuestion(index)}
                />
              );
            })}
          </nav>
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
                key={`${selectedExamEntry.id}-${variantIndex}-${attemptRevision}-${question.number}`}
                question={question}
                selected={answers[question.number]}
                submitted={submitted}
                onSelect={(choice) => setAnswer(question.number, choice)}
                flagged={flaggedQuestionNumbers.has(question.number)}
                onToggleFlag={() => toggleQuestionFlag(question.number)}
                keyboardShortcutActive={
                  !submitted && question.number === questions[focusQuestionIndex]?.number
                }
                onActivate={() => {
                  const index = questions.findIndex((candidate) => candidate.number === question.number);
                  setFocusQuestionIndex(Math.max(0, index));
                }}
              />
            ))}
          </div>
        </div>

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
                  <span>{total - answeredCount} unanswered</span>
                )}
              </div>
              <div className="exam-footer-actions" aria-label="Question navigation">
                {retryQuestionNumbers ? (
                  <button type="button" className="ghost-button" onClick={exitRetryMode}>
                    Exit retry
                  </button>
                ) : null}
                <button
                  type="button"
                  className="ghost-button exam-previous-btn"
                  disabled={focusQuestionIndex === 0}
                  aria-keyshortcuts="ArrowLeft"
                  title="Previous question (Left Arrow)"
                  onClick={() => goToQuestion(Math.max(0, focusQuestionIndex - 1))}
                >
                  <span aria-hidden="true">←</span>
                  <span>Previous</span>
                </button>
                {canSubmit ? (
                  <button
                    type="button"
                    className="exam-submit-btn"
                    onClick={handleSubmit}
                    disabled={!exam}
                  >
                    Submit exam
                  </button>
                ) : (
                  <button
                    type="button"
                    className="exam-next-btn"
                    disabled={
                      !exam ||
                      nextQuestionIndex < 0 ||
                      nextQuestionIndex === focusQuestionIndex
                    }
                    aria-keyshortcuts="ArrowRight"
                    title="Next question (Right Arrow)"
                    onClick={() => goToQuestion(nextQuestionIndex)}
                  >
                    <span>{focusQuestionIndex < total - 1 ? "Next question" : "Next unanswered"}</span>
                    <span aria-hidden="true">→</span>
                  </button>
                )}
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
                <button
                  type="button"
                  className="ghost-button"
                  onClick={handleRetryMissed}
                  disabled={missedQuestionNumbers.length === 0}
                >
                  Retry missed
                </button>
                <button type="button" className="ghost-button" onClick={requestResetCurrentTest}>
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
      {resetConfirmationOpen ? (
        <div className="modal-backdrop exam-reset-backdrop" onClick={() => setResetConfirmationOpen(false)}>
          <div
            ref={resetDialogRef}
            className="modal-shell exam-reset-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="exam-reset-title"
            aria-describedby="exam-reset-description"
            tabIndex={-1}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="exam-reset-dialog-icon" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12a9 9 0 1 0 3-6.7" />
                <path d="M3 4v6h6" />
              </svg>
            </div>
            <div className="exam-reset-dialog-copy">
              <h2 id="exam-reset-title">Reset Test {variantIndex + 1}?</h2>
              <p id="exam-reset-description">
                All answers, flags and the result for this test will be removed. Your other tests stay saved.
              </p>
            </div>
            <div className="exam-reset-dialog-actions">
              <button type="button" className="ghost-button" onClick={() => setResetConfirmationOpen(false)}>
                Cancel
              </button>
              <button type="button" className="exam-reset-confirm-button" onClick={resetCurrentTest}>
                Reset test
              </button>
            </div>
          </div>
        </div>
      ) : null}
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
  keyboardShortcutActive: boolean;
  onActivate: () => void;
};

function ChatGPTIcon() {
  return (
    <svg width="18" height="18" viewBox="4 4 15.5 15.5" fill="currentColor" aria-hidden="true">
      <path d="M9.94494 9.59163V8.13227C9.94494 8.00935 9.99105 7.91713 10.0985 7.85575L13.0327 6.16599C13.4321 5.93558 13.9083 5.8281 14.3998 5.8281C16.2432 5.8281 17.4108 7.25677 17.4108 8.77751C17.4108 8.885 17.4108 9.00792 17.3953 9.13083L14.3537 7.34884C14.1694 7.24135 13.985 7.24135 13.8007 7.34884L9.94494 9.59163ZM16.7963 15.2755V11.7883C16.7963 11.5732 16.704 11.4196 16.5197 11.3121L12.664 9.0693L13.9236 8.34725C14.0311 8.28587 14.1234 8.28587 14.2308 8.34725L17.165 10.037C18.0099 10.5287 18.5782 11.5732 18.5782 12.587C18.5782 13.7544 17.887 14.8298 16.7963 15.2755ZM9.03861 12.2031L7.77896 11.4658C7.67146 11.4045 7.62535 11.3122 7.62535 11.1893V7.8098C7.62535 6.16613 8.88501 4.92176 10.5902 4.92176C11.2354 4.92176 11.8344 5.13689 12.3415 5.52089L9.31526 7.27218C9.13097 7.37968 9.03875 7.53328 9.03875 7.74841V12.2033L9.03861 12.2031ZM11.75 13.77L9.94494 12.7562V10.6056L11.75 9.59178L13.5549 10.6056V12.7562L11.75 13.77ZM12.9098 18.44C12.2645 18.44 11.6655 18.2249 11.1585 17.8409L14.1847 16.0896C14.369 15.9821 14.4612 15.8285 14.4612 15.6134V11.1585L15.7363 11.8958C15.8438 11.9572 15.8899 12.0494 15.8899 12.1723V15.5519C15.8899 17.1955 14.6148 18.44 12.9098 18.44ZM9.26901 15.0144L6.33486 13.3246C5.4899 12.833 4.92161 11.7885 4.92161 10.7746C4.92161 9.59177 5.62824 8.53183 6.71886 8.0863V11.5887C6.71886 11.8039 6.81109 11.9575 6.99538 12.065L10.8359 14.2923L9.57621 15.0144C9.46872 15.0758 9.37649 15.0758 9.26901 15.0144ZM9.10013 17.5337C7.36426 17.5337 6.08919 16.2279 6.08919 14.6149C6.08919 14.492 6.1046 14.3691 6.11988 14.2462L9.1461 15.9975C9.33039 16.105 9.51483 16.105 9.69912 15.9975L13.5549 13.7702V15.2295C13.5549 15.3524 13.5088 15.4446 13.4013 15.506L10.4671 17.1958C10.0677 17.4262 9.59148 17.5337 9.09999 17.5337H9.10013ZM12.9098 19.3616C14.7685 19.3616 16.32 18.0406 16.6735 16.2893C18.3939 15.8438 19.5 14.2308 19.5 12.5872C19.5 11.5118 19.0391 10.4673 18.2096 9.71454C18.2864 9.39192 18.3326 9.0693 18.3326 8.74682C18.3326 6.55014 16.5505 4.90634 14.4921 4.90634C14.0774 4.90634 13.6779 4.96772 13.2785 5.10605C12.5872 4.43011 11.6347 4 10.5902 4C8.7314 4 7.17996 5.32103 6.8265 7.07232C5.10605 7.51786 4 9.13083 4 10.7745C4 11.8498 4.4608 12.8944 5.29035 13.6471C5.21354 13.9697 5.16743 14.2923 5.16743 14.6148C5.16743 16.8114 6.94941 18.4552 9.00792 18.4552C9.42261 18.4552 9.82204 18.3939 10.2215 18.2556C10.9127 18.9315 11.8651 19.3616 12.9098 19.3616Z" />
    </svg>
  );
}

export function QuestionCard({
  question,
  selected,
  submitted,
  onSelect,
  flagged,
  onToggleFlag,
  keyboardShortcutActive,
  onActivate
}: QuestionCardProps) {
  const correct = question.answer;
  const isCorrect = submitted && selected === correct;
  const isIncorrect = submitted && selected !== undefined && selected !== correct;
  const isUnanswered = submitted && selected === undefined;
  const [copyState, setCopyState] = useState<CopyState>("idle");
  const [previewPinned, setPreviewPinned] = useState(false);
  const [previewHovered, setPreviewHovered] = useState(false);
  const [previewFocused, setPreviewFocused] = useState(false);
  const copyTimeoutRef = useRef<number | null>(null);
  const previewButtonRef = useRef<HTMLButtonElement>(null);
  const preview = previewPinned || previewHovered || previewFocused;
  const reveal = submitted || preview;
  const answerPanelId = `exam-answer-${question.number}`;
  const optionFeedback = useMemo(() => buildOptionFeedback(question), [question]);
  const chatGPTUrl = useMemo(() => getQuestionChatGPTUrl(question), [question]);

  useEffect(() => {
    return () => {
      if (copyTimeoutRef.current !== null) {
        window.clearTimeout(copyTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!keyboardShortcutActive || submitted) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (
        event.defaultPrevented ||
        event.repeat ||
        event.altKey ||
        event.ctrlKey ||
        event.metaKey ||
        event.shiftKey ||
        event.key.toLowerCase() !== "v" ||
        isTextEntryActive(event.target)
      ) {
        return;
      }

      event.preventDefault();
      const shouldOpen = !preview;
      setPreviewPinned(shouldOpen);
      setPreviewHovered(false);
      setPreviewFocused(false);
      if (!shouldOpen) previewButtonRef.current?.blur();
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [keyboardShortcutActive, preview, submitted]);

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

  function togglePinnedPreview(event: React.MouseEvent<HTMLButtonElement>) {
    if (previewPinned) {
      setPreviewPinned(false);
      setPreviewHovered(false);
      setPreviewFocused(false);
      event.currentTarget.blur();
      return;
    }

    setPreviewPinned(true);
  }

  function closePreview(event: React.KeyboardEvent<HTMLButtonElement>) {
    if (event.key !== "Escape") return;
    event.preventDefault();
    setPreviewPinned(false);
    setPreviewHovered(false);
    setPreviewFocused(false);
    event.currentTarget.blur();
  }

  return (
    <div
      id={`exam-q-${question.number}`}
      onPointerEnter={onActivate}
      onFocusCapture={onActivate}
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
              ref={previewButtonRef}
              type="button"
              className={`exam-copy-btn exam-preview-btn${preview ? " is-active" : ""}`}
              onPointerEnter={(event) => {
                if (event.pointerType !== "touch") setPreviewHovered(true);
              }}
              onPointerLeave={() => setPreviewHovered(false)}
              onFocus={() => setPreviewFocused(true)}
              onBlur={() => setPreviewFocused(false)}
              onClick={togglePinnedPreview}
              onKeyDown={closePreview}
              aria-controls={answerPanelId}
              aria-expanded={preview}
              aria-pressed={previewPinned}
              aria-keyshortcuts="V"
              aria-label={previewPinned
                ? `Hide the answer for question ${question.number}. Press V to toggle.`
                : `Preview the answer for question ${question.number}. Hover or focus to reveal; press to keep it open. Press V to toggle.`}
              title={previewPinned
                ? "Hide answer · V to toggle"
                : "Hover or focus to preview · click to keep open · V to toggle"}
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
          <a
            className="exam-copy-btn exam-chatgpt-btn"
            href={chatGPTUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ask ChatGPT to explain question ${question.number}`}
            title="Explain with ChatGPT"
          >
            <ChatGPTIcon />
          </a>
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
      <div
        id={answerPanelId}
        className="exam-options"
        role="radiogroup"
        aria-label={`Question ${question.number}${reveal ? " with answer explanations" : ""}`}
      >
        {LETTERS.map((letter) => {
          const isSelected = selected === letter;
          const isAnswer = reveal && letter === correct;
          const isWrongPick = submitted && isSelected && letter !== correct;
          const feedback = reveal ? optionFeedback[letter] : undefined;
          const optionExplanation = feedback?.kind === "fallback" ? undefined : feedback?.text;
          const hasWrongExplanation = Boolean(optionExplanation) && !isAnswer;
          const optionFeedbackId = `exam-option-feedback-${question.number}-${letter}`;
          const classes = [
            "exam-option",
            hasWrongExplanation ? "has-wrong-explanation" : "",
            isSelected ? "is-selected" : "",
            isAnswer ? "is-answer" : "",
            isWrongPick ? "is-wrong" : "",
            submitted ? "is-disabled" : ""
          ]
            .filter(Boolean)
            .join(" ");

          return (
            <div key={letter} className={classes}>
              <button
                type="button"
                className="exam-option-control"
                role="radio"
                aria-checked={isSelected}
                aria-describedby={isAnswer && optionExplanation ? optionFeedbackId : undefined}
                disabled={submitted}
                onClick={() => onSelect(letter)}
              >
                <span className="exam-option-letter">{letter}</span>
                <span className="exam-option-text">
                  <span className="exam-option-value">{question.options[letter]}</span>
                  {question.optionImageUrls?.[letter] ? (
                    <img
                      className="exam-option-image"
                      src={question.optionImageUrls[letter]}
                      alt={`Option ${letter} reference`}
                      loading="lazy"
                    />
                  ) : null}
                </span>
                {isAnswer ? (
                  <span className="exam-option-mark" aria-hidden="true">✓</span>
                ) : null}
                {submitted && isWrongPick ? (
                  <span className="exam-option-mark exam-option-mark--bad" aria-hidden="true">✕</span>
                ) : null}
              </button>
              {hasWrongExplanation ? (
                <details className="exam-option-details">
                  <summary
                    className="exam-option-explanation-toggle"
                    aria-label={`Why is option ${letter} wrong for question ${question.number}?`}
                  >
                    Why?
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </summary>
                  <div id={optionFeedbackId} className="exam-option-feedback is-incorrect">
                    <strong>WRONG:</strong>
                    <span>{optionExplanation}</span>
                  </div>
                </details>
              ) : isAnswer && optionExplanation ? (
                <div
                  id={optionFeedbackId}
                  className="exam-option-feedback is-correct"
                >
                  <strong>CORRECT:</strong>
                  <span>{optionExplanation}</span>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
      {reveal && question.solutionTables?.length ? (
        <div
          className="exam-solution-tables"
          role="region"
          aria-label={`Reference material for question ${question.number}`}
        >
          {question.solutionTables.map((table, index) => (
            <SolutionTable
              key={`${table.source.publication}-${table.source.locator}-${index}`}
              table={table}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

function SolutionTable({ table }: { table: ExamSolutionTable }) {
  return (
    <section className="exam-solution-table" aria-label={table.title}>
      <header className="exam-solution-table-head">
        <div>
          <span className="exam-solution-table-kicker">Reference lookup</span>
          <strong>{table.title}</strong>
        </div>
        <span className={`exam-solution-source-status is-${table.source.status}`}>
          {table.source.status === "verified" ? "Verified" : "Edition check needed"}
        </span>
      </header>
      <div className="exam-solution-table-scroll">
        <table>
          <thead>
            <tr>
              {table.columns.map((column) => <th key={column} scope="col">{column}</th>)}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, rowIndex) => (
              <tr key={`${row.join("-")}-${rowIndex}`}>
                {row.map((cell, cellIndex) => (
                  <td key={`${cell}-${cellIndex}`}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <dl className="exam-solution-source-meta">
        <div>
          <dt>Publication</dt>
          <dd>{table.source.publication}</dd>
        </div>
        <div>
          <dt>Edition</dt>
          <dd>{table.source.edition}</dd>
        </div>
      </dl>
      {table.note ? <p className="exam-solution-table-note">{table.note}</p> : null}
      <footer className="exam-solution-table-source">
        <span>{table.source.licence}</span>
        {table.source.url ? (
          <a href={table.source.url} target="_blank" rel="noreferrer">
            Check official source
          </a>
        ) : null}
      </footer>
    </section>
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
