import { useEffect, useMemo, useRef, useCallback, useState } from "react";
import {
  getActiveVariantIndex,
  getPassMark,
  getScoringBand,
  getScoringRanges,
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

type Answers = Record<number, ExamChoice>;
type ReviewFilter = "all" | "missed" | "wrong" | "unanswered" | "correct";

const LETTERS: ExamChoice[] = ["A", "B", "C", "D"];
const REVIEW_FILTER_LABELS: Record<ReviewFilter, string> = {
  all: "All",
  missed: "Missed",
  wrong: "Wrong",
  unanswered: "Unanswered",
  correct: "Correct"
};
const EXAM_STORAGE_VERSION = "2026-05-2391-eight-source-mocks";
const EXAM_ANSWERS_STORAGE_PREFIX = `exam-answers-${EXAM_STORAGE_VERSION}-`;
const EXAM_SUBMITTED_STORAGE_PREFIX = `exam-submitted-${EXAM_STORAGE_VERSION}-`;
const EXAM_VARIANT_STORAGE_PREFIX = `exam-variant-${EXAM_STORAGE_VERSION}-`;
const EXAM_UPDATED_STORAGE_PREFIX = `exam-updated-${EXAM_STORAGE_VERSION}-`;
const EXAM_REMOTE_PROGRESS_RESET_AT: Partial<Record<string, number>> = {
  "building-regulations": Date.UTC(2026, 4, 21, 21, 44),
  "18th-edition": Date.UTC(2026, 4, 21, 21, 44),
  "pat-testing": Date.UTC(2026, 4, 21, 21, 44),
  "initial-verification": Date.UTC(2026, 4, 22, 19, 12),
  "periodic-inspection": Date.UTC(2026, 4, 21, 21, 44),
  "condition-reporting": Date.UTC(2026, 4, 21, 21, 44),
  "am2-installation-assessment": Date.UTC(2026, 4, 21, 21, 44)
};

type CopyState = "idle" | "copied" | "failed";

function getQuestionClipboardText(question: ExamQuestion): string {
  const optionLines = LETTERS.map((letter) => `${letter}. ${question.options[letter]}`);
  return [`Q${question.number}`, question.prompt, "", ...optionLines].join("\n");
}

async function writeClipboardText(text: string): Promise<void> {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textarea = document.createElement("textarea");
  const selection = document.getSelection();
  const selectedRange = selection && selection.rangeCount > 0 ? selection.getRangeAt(0) : null;

  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  textarea.style.top = "0";
  document.body.appendChild(textarea);
  textarea.select();
  textarea.setSelectionRange(0, textarea.value.length);

  try {
    if (!document.execCommand("copy")) {
      throw new Error("Copy command failed");
    }
  } finally {
    document.body.removeChild(textarea);
    if (selection && selectedRange) {
      selection.removeAllRanges();
      selection.addRange(selectedRange);
    }
  }
}

function isExamChoice(value: unknown): value is ExamChoice {
  return typeof value === "string" && (LETTERS as string[]).includes(value);
}

function isAnswers(value: unknown): value is Answers {
  if (!value || typeof value !== "object" || Array.isArray(value)) return false;

  return Object.entries(value).every(
    ([questionNumber, answer]) => Number.isInteger(Number(questionNumber)) && isExamChoice(answer)
  );
}

function isExamId(value: unknown): value is string {
  return isKnownExamId(value);
}

function isBoolean(value: unknown): value is boolean {
  return typeof value === "boolean";
}

function isNonNegativeInt(value: unknown): value is number {
  return typeof value === "number" && Number.isInteger(value) && value >= 0;
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
        `${EXAM_ANSWERS_STORAGE_PREFIX}${examId}`,
        `${EXAM_SUBMITTED_STORAGE_PREFIX}${examId}`,
        `${EXAM_VARIANT_STORAGE_PREFIX}${examId}`,
        `${EXAM_UPDATED_STORAGE_PREFIX}${examId}`
      ])
    );

    for (let index = localStorage.length - 1; index >= 0; index -= 1) {
      const key = localStorage.key(index);
      if (!key) continue;

      const isExamProgressKey =
        key.startsWith("exam-answers-") ||
        key.startsWith("exam-submitted-") ||
        key.startsWith("exam-variant-") ||
        key.startsWith("exam-updated-");
      if (isExamProgressKey && !validStorageKeys.has(key)) {
        localStorage.removeItem(key);
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

  useEffect(() => {
    clearStaleExamProgress();
  }, []);

  const [selectedExamId, setSelectedExamId] = usePersistedState<string>(
    "exam-selected",
    DEFAULT_EXAM_ID,
    isExamId
  );

  useEffect(() => {
    if (!practiceTarget || !isKnownExamId(practiceTarget.examId)) return;
    setSelectedExamId(practiceTarget.examId);
  }, [practiceTarget?.examId, practiceTarget?.nonce, setSelectedExamId]);

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

  const [attemptCount, setAttemptCount] = usePersistedState<number>(
    `${EXAM_VARIANT_STORAGE_PREFIX}${selectedExamEntry.id}`,
    0,
    isNonNegativeInt
  );
  const variantCount = exam ? getVariantCount(exam) : 0;
  const variantIndex = exam ? getActiveVariantIndex(attemptCount, exam) : 0;

  const [answers, setAnswers] = usePersistedState<Answers>(
    `${EXAM_ANSWERS_STORAGE_PREFIX}${selectedExamEntry.id}`,
    {},
    isAnswers
  );
  const [submitted, setSubmitted] = usePersistedState<boolean>(
    `${EXAM_SUBMITTED_STORAGE_PREFIX}${selectedExamEntry.id}`,
    false,
    isBoolean
  );
  const [reviewFilter, setReviewFilter] = useState<ReviewFilter>("all");
  const [reviewSectionId, setReviewSectionId] = useState("all");
  const [retryQuestionNumbers, setRetryQuestionNumbers] = useState<number[] | null>(null);

  useEffect(() => {
    setReviewFilter("all");
    setReviewSectionId("all");
    setRetryQuestionNumbers(null);
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
            if (!isAnswers(data.answers) || typeof data.submitted !== "boolean") continue;
            const answersKey = `${EXAM_ANSWERS_STORAGE_PREFIX}${examId}`;
            const submittedKey = `${EXAM_SUBMITTED_STORAGE_PREFIX}${examId}`;
            const localUpdatedKey = `${EXAM_UPDATED_STORAGE_PREFIX}${examId}`;
            const localRaw = localStorage.getItem(answersKey);
            let localAnswers: Answers = {};
            try {
              if (localRaw) {
                const parsedLocal = JSON.parse(localRaw);
                if (isAnswers(parsedLocal)) localAnswers = parsedLocal;
              }
            } catch {}
            const hasLocal = Object.keys(localAnswers).length > 0;
            const localUpdatedAt = Number(localStorage.getItem(localUpdatedKey)) || 0;
            const serverUpdatedAt = parseServerUpdatedAt(data.updatedAt);
            const remoteResetAt = EXAM_REMOTE_PROGRESS_RESET_AT[examId] ?? 0;
            if (remoteResetAt > 0 && serverUpdatedAt < remoteResetAt) continue;
            // Use the server copy if there's nothing local, or if the server is strictly newer.
            if (!hasLocal || serverUpdatedAt > localUpdatedAt) {
              localStorage.setItem(answersKey, JSON.stringify(data.answers));
              localStorage.setItem(submittedKey, JSON.stringify(data.submitted));
              localStorage.setItem(localUpdatedKey, String(serverUpdatedAt || Date.now()));
            }
          } catch {}
        }
        // Re-hydrate React state for the currently selected exam after the merge.
        const currentExamId = selectedExamIdRef.current;
        try {
          const answersKey = `${EXAM_ANSWERS_STORAGE_PREFIX}${currentExamId}`;
          const stored = localStorage.getItem(answersKey);
          if (stored) {
            const parsed = JSON.parse(stored);
            if (isAnswers(parsed)) setAnswers(parsed);
          }
        } catch {}
        try {
          const subKey = `${EXAM_SUBMITTED_STORAGE_PREFIX}${currentExamId}`;
          const subStored = localStorage.getItem(subKey);
          if (subStored) {
            const parsed = JSON.parse(subStored);
            if (isBoolean(parsed)) setSubmitted(parsed);
          }
        } catch {}
      })
      .catch(() => {});
  }, [user, selectedExamEntry.id, setAnswers, setSubmitted]);

  const saveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pendingSaveRef = useRef<{ examId: string; answers: Answers; submitted: boolean } | null>(null);
  const flushSave = useCallback(() => {
    if (!user || !pendingSaveRef.current) return;
    if (saveTimerRef.current) {
      clearTimeout(saveTimerRef.current);
      saveTimerRef.current = null;
    }
    const { examId, answers: pendingAnswers, submitted: pendingSubmitted } = pendingSaveRef.current;
    pendingSaveRef.current = null;
    saveExamProgress(examId, pendingAnswers as Record<string, string>, pendingSubmitted).catch(() => {});
  }, [user]);
  const syncToServer = useCallback(
    (nextAnswers: Answers, nextSubmitted: boolean) => {
      if (!user) return;
      pendingSaveRef.current = { examId: selectedExamEntry.id, answers: nextAnswers, submitted: nextSubmitted };
      try {
        const localUpdatedKey = `${EXAM_UPDATED_STORAGE_PREFIX}${selectedExamEntry.id}`;
        localStorage.setItem(localUpdatedKey, String(Date.now()));
      } catch {}
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
  const scoringRanges = useMemo(() => (exam ? getScoringRanges(exam, total) : []), [exam, total]);

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
  const displaySectionGroups = useMemo(() => {
    if (!submitted) return activeSectionGroups;
    return activeSectionGroups
      .filter(({ section }) => reviewSectionId === "all" || section.id === reviewSectionId)
      .map(({ section, questions: sectionQuestions }) => ({
        section,
        questions: sectionQuestions.filter((question) => matchesReviewFilter(question, answers, reviewFilter))
      }))
      .filter((group) => group.questions.length > 0);
  }, [activeSectionGroups, answers, reviewFilter, reviewSectionId, submitted]);

  function setAnswer(questionNumber: number, choice: ExamChoice) {
    if (!exam || submitted) return;
    setAnswers((current) => {
      const next = { ...current, [questionNumber]: choice };
      syncToServer(next, false);
      return next;
    });
  }

  function handleSubmit() {
    if (!exam) return;
    setRetryQuestionNumbers(null);
    setSubmitted(true);
    syncToServer(answers, true);
    window.setTimeout(() => {
      reviewRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 60);
  }

  function handleReset() {
    if (!exam) return;
    setAnswers({});
    setSubmitted(false);
    setRetryQuestionNumbers(null);
    setAttemptCount((current) => current + 1);
    syncToServer({} as Answers, false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleRetryMissed() {
    if (!exam || missedQuestionNumbers.length === 0) return;
    const missedSet = new Set(missedQuestionNumbers);
    setAnswers((current) => {
      const next = { ...current };
      for (const questionNumber of missedSet) {
        delete next[questionNumber];
      }
      syncToServer(next, false);
      return next;
    });
    setRetryQuestionNumbers(missedQuestionNumbers);
    setSubmitted(false);
    setReviewFilter("all");
    setReviewSectionId("all");
    window.setTimeout(() => {
      document
        .getElementById(`exam-q-${missedQuestionNumbers[0]}`)
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 60);
  }

  function exitRetryMode() {
    setRetryQuestionNumbers(null);
    setSubmitted(false);
  }

  function scrollToFirstUnanswered() {
    for (const q of questions) {
      if (!(q.number in answers)) {
        document
          .getElementById(`exam-q-${q.number}`)
          ?.scrollIntoView({ behavior: "smooth", block: "center" });
        return;
      }
    }
  }

  return (
    <section className={`page page-exams ${isActive ? "is-active" : ""}`}>
      <div className="exam-shell">
        <header className="exam-hero">
          <div className="exam-hero-text">
            <div className="exam-title-wrap">
              {EXAM_REGISTRY.length > 1 ? (
                <select
                  className="exam-title-select"
                  aria-label="Mock exam"
                  value={selectedExamEntry.id}
                  onChange={(event) => {
                    setSelectedExamId(event.target.value);
                  }}
                >
                  {EXAM_REGISTRY.map((e) => (
                    <option key={e.id} value={e.id}>
                      {e.title}
                    </option>
                  ))}
                </select>
              ) : (
                <h2>{selectedExamEntry.title}</h2>
              )}
              {exam ? (
                <>
                  <span
                    className="exam-title-info"
                    tabIndex={0}
                    role="button"
                    aria-label="About this exam"
                  >
                    i
                  </span>
                  <div className="exam-tooltip" role="tooltip">
                    <span className="exam-tooltip-subtitle">{exam.subtitle}</span>
                    <p className="exam-tooltip-description">{exam.description}</p>
                    <p className="exam-tooltip-format">{exam.format}</p>
                  </div>
                </>
              ) : null}
            </div>
          </div>
          <div className="exam-hero-stats">
            <div className="exam-stat">
              <span>Test</span>
              <strong>
                {variantIndex + 1}
                <span className="exam-stat-sub">/{variantCount}</span>
              </strong>
            </div>
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
              <strong>{passMark}</strong>
            </div>
          </div>
        </header>

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
            style={{ width: `${total ? (answeredCount / total) * 100 : 0}%` }}
          />
        </div>

        {submitted && exam && scoringBand ? (
          <ExamResults
            exam={exam}
            sectionGroups={activeSectionGroups}
            answers={answers}
            correctCount={correctCount}
            total={total}
            percent={percent}
            passed={passed}
            scoringBand={scoringBand}
            scoringRanges={scoringRanges}
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
            <label className="exam-review-section">
              <span>Section</span>
              <select
                value={reviewSectionId}
                onChange={(event) => setReviewSectionId(event.target.value)}
              >
                <option value="all">All sections</option>
                {activeSectionGroups.map(({ section }) => (
                  <option key={section.id} value={section.id}>
                    {section.title.replace(/^Section \d+ — /, "")}
                  </option>
                ))}
              </select>
            </label>
            <button
              type="button"
              className="ghost-button"
              onClick={handleRetryMissed}
              disabled={missedQuestionNumbers.length === 0}
            >
              Retry missed questions
            </button>
          </div>
        ) : null}

        {!exam ? (
          <p className="empty-state" role="status">Loading {selectedExamEntry.title}...</p>
        ) : null}

        <div className="exam-sections">
          {displaySectionGroups.map(({ section, questions: sectionQuestions }) => (
            <article key={section.id} className="exam-section" id={section.id}>
              <h3 className="exam-section-title">{section.title}</h3>
              <div className="exam-question-list">
                {sectionQuestions.map((question) => (
                  <QuestionCard
                    key={question.number}
                    question={question}
                    selected={answers[question.number]}
                    submitted={submitted}
                    onSelect={(choice) => setAnswer(question.number, choice)}
                  />
                ))}
              </div>
            </article>
          ))}
        </div>

        {submitted && exam && displaySectionGroups.length === 0 ? (
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
                <button type="button" className="ghost-button" onClick={handleReset}>
                  Reset &amp; try next test
                </button>
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
};

function QuestionCard({ question, selected, submitted, onSelect }: QuestionCardProps) {
  const correct = question.answer;
  const isCorrect = submitted && selected === correct;
  const isIncorrect = submitted && selected !== undefined && selected !== correct;
  const isUnanswered = submitted && selected === undefined;
  const [copyState, setCopyState] = useState<CopyState>("idle");
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
      <div className="exam-options" role="radiogroup" aria-label={`Question ${question.number}`}>
        {LETTERS.map((letter) => {
          const isSelected = selected === letter;
          const isAnswer = submitted && letter === correct;
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
              <span className="exam-option-text">{question.options[letter]}</span>
              {submitted && isAnswer ? (
                <span className="exam-option-mark" aria-hidden="true">✓</span>
              ) : null}
              {submitted && isWrongPick ? (
                <span className="exam-option-mark exam-option-mark--bad" aria-hidden="true">✕</span>
              ) : null}
            </button>
          );
        })}
      </div>
      {submitted ? (
        <div className="exam-explanation">
          <span className="exam-explanation-label">Explanation</span>
          <p>{question.explanation}</p>
        </div>
      ) : null}
    </div>
  );
}

type SectionGroup = ReturnType<typeof getSectionQuestionsForVariant>[number];

type ResultsProps = {
  exam: Exam;
  sectionGroups: SectionGroup[];
  answers: Answers;
  correctCount: number;
  total: number;
  percent: number;
  passed: boolean;
  scoringBand: ScoringRange;
  scoringRanges: ScoringRange[];
  reviewRef: React.RefObject<HTMLDivElement | null>;
};

function ExamResults({
  exam,
  sectionGroups,
  answers,
  correctCount,
  total,
  percent,
  passed,
  scoringBand,
  scoringRanges,
  reviewRef
}: ResultsProps) {
  const sectionStats = useMemo(() => {
    return sectionGroups.map(({ section, questions: sectionQuestions }) => {
      const sectionTotal = sectionQuestions.length;
      const correct = sectionQuestions.reduce(
        (acc, q) => acc + (answers[q.number] === q.answer ? 1 : 0),
        0
      );
      return {
        id: section.id,
        title: section.title.replace(/^Section \d+ — /, ""),
        correct,
        total: sectionTotal,
        pct: sectionTotal ? Math.round((correct / sectionTotal) * 100) : 0
      };
    });
  }, [sectionGroups, answers]);

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

      <div className="exam-results-grid">
        <div className="exam-results-card">
          <h4>Scoring guide</h4>
          <ul className="exam-scoring-list">
            {scoringRanges.map((band) => {
              const isActive = band.range === scoringBand.range;
              return (
                <li key={band.range} className={isActive ? "is-active" : undefined}>
                  <strong>{band.range}</strong>
                  <span>{band.label}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="exam-results-card">
          <h4>Topics to prioritise</h4>
          <ul className="exam-priorities-list">
            {exam.priorities.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
        <div className="exam-results-card exam-results-card--by-section">
          <h4>By section</h4>
          <ul className="exam-section-breakdown">
            {sectionStats.map((s) => (
              <li key={s.id}>
                <div className="exam-section-breakdown-head">
                  <span className="exam-section-breakdown-title">{s.title}</span>
                  <strong>
                    {s.correct}/{s.total}
                  </strong>
                </div>
                <div className="exam-section-breakdown-bar">
                  <div
                    className="exam-section-breakdown-fill"
                    style={{ width: `${s.pct}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
