import { useMemo, useRef } from "react";
import { EXAMS, countQuestions, type Exam, type ExamChoice, type ExamQuestion } from "./exams";
import { usePersistedState } from "./usePersistedState";

type Answers = Record<number, ExamChoice>;

const LETTERS: ExamChoice[] = ["A", "B", "C", "D"];

type Props = {
  isActive: boolean;
};

export function ExamPage({ isActive }: Props) {
  const [selectedExamId, setSelectedExamId] = usePersistedState<string>(
    "exam-selected",
    EXAMS[0].id
  );
  const exam = useMemo(
    () => EXAMS.find((e) => e.id === selectedExamId) ?? EXAMS[0],
    [selectedExamId]
  );

  const [answers, setAnswers] = usePersistedState<Answers>(
    `exam-answers-${exam.id}`,
    {}
  );
  const [submitted, setSubmitted] = usePersistedState<boolean>(
    `exam-submitted-${exam.id}`,
    false
  );

  const reviewRef = useRef<HTMLDivElement | null>(null);

  const total = countQuestions(exam);
  const answeredCount = Object.keys(answers).length;

  const correctCount = useMemo(() => {
    let c = 0;
    for (const section of exam.sections) {
      for (const q of section.questions) {
        if (answers[q.number] === q.answer) c += 1;
      }
    }
    return c;
  }, [exam, answers]);

  const percent = total ? Math.round((correctCount / total) * 100) : 0;
  const passed = correctCount >= exam.passMark;

  const scoringBand = useMemo(() => {
    if (correctCount >= 27) return exam.scoring[0];
    if (correctCount >= 24) return exam.scoring[1];
    if (correctCount >= 21) return exam.scoring[2];
    return exam.scoring[3];
  }, [correctCount, exam.scoring]);

  function setAnswer(questionNumber: number, choice: ExamChoice) {
    if (submitted) return;
    setAnswers((current) => ({ ...current, [questionNumber]: choice }));
  }

  function handleSubmit() {
    setSubmitted(true);
    window.setTimeout(() => {
      reviewRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 60);
  }

  function handleReset() {
    setAnswers({});
    setSubmitted(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function scrollToFirstUnanswered() {
    for (const section of exam.sections) {
      for (const q of section.questions) {
        if (!(q.number in answers)) {
          document
            .getElementById(`exam-q-${q.number}`)
            ?.scrollIntoView({ behavior: "smooth", block: "center" });
          return;
        }
      }
    }
  }

  return (
    <section className={`page page-exams ${isActive ? "is-active" : ""}`}>
      <div className="exam-shell">
        <header className="exam-hero">
          <div className="exam-hero-text">
            <div className="exam-title-wrap">
              {EXAMS.length > 1 ? (
                <select
                  className="exam-title-select"
                  aria-label="Mock exam"
                  value={exam.id}
                  onChange={(event) => {
                    setSelectedExamId(event.target.value);
                  }}
                >
                  {EXAMS.map((e) => (
                    <option key={e.id} value={e.id}>
                      {e.title}
                    </option>
                  ))}
                </select>
              ) : (
                <h2>{exam.title}</h2>
              )}
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
            </div>
          </div>
          <div className="exam-hero-stats">
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
              <strong>{exam.passMark}</strong>
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

        {submitted ? (
          <ExamResults
            exam={exam}
            answers={answers}
            correctCount={correctCount}
            total={total}
            percent={percent}
            passed={passed}
            scoringBand={scoringBand}
            reviewRef={reviewRef}
          />
        ) : null}

        <div className="exam-sections">
          {exam.sections.map((section) => (
            <article key={section.id} className="exam-section" id={section.id}>
              <h3 className="exam-section-title">{section.title}</h3>
              <div className="exam-question-list">
                {section.questions.map((question) => (
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

        <footer className="exam-footer">
          {!submitted ? (
            <>
              <div className="exam-footer-status">
                {answeredCount === total ? (
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
              <button
                type="button"
                className="exam-submit-btn"
                onClick={handleSubmit}
                disabled={answeredCount === 0}
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
              <button type="button" className="ghost-button" onClick={handleReset}>
                Reset &amp; retry
              </button>
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
        {submitted ? (
          <span className={`exam-q-badge exam-q-badge--${isCorrect ? "ok" : "bad"}`}>
            {isCorrect ? "Correct" : isUnanswered ? "Not answered" : "Incorrect"}
          </span>
        ) : null}
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

type ResultsProps = {
  exam: Exam;
  answers: Answers;
  correctCount: number;
  total: number;
  percent: number;
  passed: boolean;
  scoringBand: { range: string; label: string };
  reviewRef: React.RefObject<HTMLDivElement | null>;
};

function ExamResults({
  exam,
  answers,
  correctCount,
  total,
  percent,
  passed,
  scoringBand,
  reviewRef
}: ResultsProps) {
  const sectionStats = useMemo(() => {
    return exam.sections.map((section) => {
      const sectionTotal = section.questions.length;
      const correct = section.questions.reduce(
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
  }, [exam, answers]);

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
            {exam.scoring.map((band) => {
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
