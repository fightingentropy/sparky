import { useMemo, useState } from "react";
import { COURSE_GUIDES, type CourseGuide, type GuideCategory } from "./courseGuides";
import type { ExamId } from "./examRegistry";
import { usePersistedState } from "./usePersistedState";
import { scrollIntoViewSafely } from "./scroll";
import { findLearningGuides, suggestedLearningGuide } from "./learningLibrary";

type Props = {
  isActive: boolean;
  onOpenExam: (examId: ExamId) => void;
  onOpenNote: (noteId: string) => void;
};

const TOPICS: { title: string; categories: GuideCategory[] }[] = [
  { title: "Getting qualified", categories: ["route", "qualification"] },
  { title: "Preparing for assessments", categories: ["assessment"] },
  { title: "Technical reference", categories: ["reference"] }
];

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === "string");
}

export function LearningPage({ isActive, onOpenExam, onOpenNote }: Props) {
  const [query, setQuery] = useState("");
  const [expandedGuideId, setExpandedGuideId] = useState<string | null>(null);
  const [completedGuideIds, setCompletedGuideIds] = usePersistedState<string[]>(
    "learning-completed-guides", [], isStringArray
  );
  const [lastOpenedId, setLastOpenedId] = usePersistedState(
    "learning-last-opened-guide", "", (value): value is string => typeof value === "string"
  );
  const guides = useMemo(() => findLearningGuides(query), [query]);
  const nextGuide = suggestedLearningGuide(completedGuideIds, lastOpenedId);
  const completedCount = COURSE_GUIDES.filter((guide) => completedGuideIds.includes(guide.id)).length;

  function openGuide(id: string, scroll = false) {
    setExpandedGuideId(id);
    setLastOpenedId(id);
    if (scroll) {
      setQuery("");
      window.setTimeout(() => {
        scrollIntoViewSafely(document.getElementById(id), { block: "start" });
      }, 0);
    }
  }

  return (
    <section className={`page page-learning ${isActive ? "is-active" : ""}`}>
      <header className="page-header learning-header">
        <div>
          <h1>Learn</h1>
          <p className="page-copy">Your route to qualifying, one topic at a time.</p>
        </div>
        <span className="library-progress">{completedCount} of {COURSE_GUIDES.length} complete</span>
      </header>

      <label className="library-search">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 4 4" />
        </svg>
        <span className="sr-only">Search learning guides</span>
        <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Find a topic, e.g. PAT or Level 2" />
      </label>

      {!query.trim() && (nextGuide ? (
        <button type="button" className="learning-resume" onClick={() => openGuide(nextGuide.id, true)}>
          <span>
            <small>{lastOpenedId === nextGuide.id ? "Continue reading" : completedCount ? "Up next" : "Start here"}</small>
            <strong>{nextGuide.title}</strong>
          </span>
          <span aria-hidden="true">→</span>
        </button>
      ) : <p className="library-complete">All guides complete. Revisit any topic below.</p>)}

      {query.trim() && <p className="library-results" role="status">{guides.length} {guides.length === 1 ? "guide" : "guides"} found</p>}
      {TOPICS.map((topic) => {
        const entries = guides.filter((guide) => topic.categories.includes(guide.category));
        return entries.length ? (
          <section className="learning-topic" key={topic.title} aria-label={topic.title}>
            <h2>{topic.title}</h2>
            <div className="learning-list">
              {entries.map((guide) => (
                <GuideRow
                  key={guide.id}
                  guide={guide}
                  expanded={expandedGuideId === guide.id}
                  completed={completedGuideIds.includes(guide.id)}
                  onToggle={() => expandedGuideId === guide.id ? setExpandedGuideId(null) : openGuide(guide.id)}
                  onToggleComplete={() => setCompletedGuideIds((current) => current.includes(guide.id)
                    ? current.filter((id) => id !== guide.id) : [...current, guide.id])}
                  onOpenExam={onOpenExam}
                  onOpenNote={onOpenNote}
                />
              ))}
            </div>
          </section>
        ) : null;
      })}
      {!guides.length && (
        <div className="library-empty">
          <h2>No guides found</h2>
          <p>Try a qualification or a shorter topic name.</p>
          <button type="button" className="ghost-button" onClick={() => setQuery("")}>Clear search</button>
        </div>
      )}
    </section>
  );
}

function GuideRow({ guide, expanded, completed, onToggle, onToggleComplete, onOpenExam, onOpenNote }: {
  guide: CourseGuide;
  expanded: boolean;
  completed: boolean;
  onToggle: () => void;
  onToggleComplete: () => void;
  onOpenExam: (examId: ExamId) => void;
  onOpenNote: (noteId: string) => void;
}) {
  return (
    <article id={guide.id} className={`guide-row${expanded ? " is-expanded" : ""}`}>
      <h3>
        <button type="button" className="guide-toggle" aria-expanded={expanded} aria-controls={`${guide.id}-content`} onClick={onToggle}>
          <span>
            <strong>{guide.title}</strong>
            <small>{completed ? "Completed" : guide.kicker}</small>
          </span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <path d={completed && !expanded ? "m5 12 4 4L19 6" : "m9 5 7 7-7 7"} />
          </svg>
        </button>
      </h3>
      {expanded && (
        <div id={`${guide.id}-content`} className="guide-content">
          <p className="guide-summary">{guide.summary}</p>
          <details className="guide-facts">
            <summary>Key details</summary>
            <dl>{guide.facts.map((fact) => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}</dl>
          </details>
          {guide.sections.map((section) => (
            <section key={section.title} className="guide-section">
              <h4>{section.title}</h4>
              <ul>{section.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </section>
          ))}
          <div className="guide-next-steps">
            <section className="guide-section"><h4>Common mistakes</h4><ul>{guide.pitfalls.map((item) => <li key={item}>{item}</li>)}</ul></section>
            <section className="guide-section"><h4>What to do next</h4><ul>{guide.nextActions.map((item) => <li key={item}>{item}</li>)}</ul></section>
          </div>
          <div className="guide-completion">
            <button type="button" className="guide-complete-button" aria-pressed={completed} onClick={onToggleComplete}>
              {completed ? "Completed · Undo" : "Mark guide complete"}
            </button>
            <button type="button" className="ghost-button" onClick={() => {
              onToggle();
              window.setTimeout(() => {
                const article = document.getElementById(guide.id);
                article?.querySelector<HTMLButtonElement>(".guide-toggle")?.focus({ preventScroll: true });
                scrollIntoViewSafely(article, { block: "start" });
              }, 0);
            }}>Close guide</button>
          </div>
          {(guide.examId || guide.noteLinks?.length) && <div className="guide-related">
            <h4>Related practice</h4>
            {guide.examId && <button type="button" className="sheet-practice-btn" onClick={() => onOpenExam(guide.examId!)}>Practice {guide.examLabel ?? "exam"} →</button>}
            {guide.noteLinks?.map((link) => <button key={link.noteId} type="button" className="sheet-practice-btn" onClick={() => onOpenNote(link.noteId)}>{link.label} →</button>)}
          </div>}
        </div>
      )}
    </article>
  );
}
