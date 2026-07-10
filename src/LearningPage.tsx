import { useMemo, useState } from "react";
import {
  COURSE_GUIDES,
  GUIDE_CATEGORY_LABELS,
  type CourseGuide,
  type GuideCategory
} from "./courseGuides";
import type { ExamId } from "./examRegistry";
import { usePersistedState } from "./usePersistedState";

type Props = {
  isActive: boolean;
  onOpenExam: (examId: ExamId) => void;
  onOpenNote: (noteId: string) => void;
};

type GuideFilter = "all" | GuideCategory;

const GUIDE_FILTERS: GuideFilter[] = ["all", "route", "qualification", "assessment", "reference"];

const GUIDE_FILTER_LABELS: Record<GuideFilter, string> = {
  all: "All",
  ...GUIDE_CATEGORY_LABELS
};

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === "string");
}

export function LearningPage({ isActive, onOpenExam, onOpenNote }: Props) {
  const [activeFilter, setActiveFilter] = useState<GuideFilter>("all");
  const [expandedGuideIds, setExpandedGuideIds] = useState<Set<string>>(() => new Set());
  const [completedGuideIds, setCompletedGuideIds] = usePersistedState<string[]>(
    "learning-completed-guides",
    [],
    isStringArray
  );

  const filteredGuides = useMemo(
    () => COURSE_GUIDES.filter((guide) => activeFilter === "all" || guide.category === activeFilter),
    [activeFilter]
  );

  function toggleGuide(id: string) {
    setExpandedGuideIds((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function toggleCompleted(id: string) {
    setCompletedGuideIds((current) =>
      current.includes(id) ? current.filter((currentId) => currentId !== id) : [...current, id]
    );
  }

  return (
    <section className={`page page-learning ${isActive ? "is-active" : ""}`}>
      <header className="page-header learning-header">
        <div>
          <span className="learning-kicker">UK electrician pathway</span>
          <h1>Learning Guides</h1>
          <p className="page-copy">
            Structured course routes, assessment checklists and revision pages matched to the Sparky exam categories.
          </p>
        </div>
        <span className="learning-count">{COURSE_GUIDES.length} guides</span>
      </header>

      <ol className="learning-route-strip" aria-label="Qualification route">
        {["Level 2", "Level 3", "NVQ evidence", "AM2", "ECS card"].map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>

      <aside className="content-notice" role="note">
        <strong>Plan with current sources.</strong>
        <span>Qualification routes, requirements and regulations can change; confirm course, card and standards requirements with the awarding body and official guidance.</span>
      </aside>

      <div className="learning-filters" role="group" aria-label="Guide categories">
        {GUIDE_FILTERS.map((filter) => (
          <button
            key={filter}
            type="button"
            className={`learning-filter-btn${activeFilter === filter ? " is-active" : ""}`}
            aria-pressed={activeFilter === filter}
            onClick={() => setActiveFilter(filter)}
          >
            {GUIDE_FILTER_LABELS[filter]}
          </button>
        ))}
      </div>

      <div className="learning-grid">
        {filteredGuides.map((guide) => (
          <GuideCard
            key={guide.id}
            guide={guide}
            expanded={expandedGuideIds.has(guide.id)}
            completed={completedGuideIds.includes(guide.id)}
            onToggle={() => toggleGuide(guide.id)}
            onToggleComplete={() => toggleCompleted(guide.id)}
            onOpenExam={onOpenExam}
            onOpenNote={onOpenNote}
          />
        ))}
      </div>
    </section>
  );
}

function GuideCard({
  guide,
  expanded,
  completed,
  onToggle,
  onToggleComplete,
  onOpenExam,
  onOpenNote
}: {
  guide: CourseGuide;
  expanded: boolean;
  completed: boolean;
  onToggle: () => void;
  onToggleComplete: () => void;
  onOpenExam: (examId: ExamId) => void;
  onOpenNote: (noteId: string) => void;
}) {
  return (
    <article id={guide.id} className={`learning-card${expanded ? " is-expanded" : ""}${completed ? " is-complete" : ""}`}>
      <header className="learning-card-head">
        <div>
          <span className="learning-kicker">{guide.kicker}</span>
          <h3>{guide.title}</h3>
        </div>
        <span className="learning-category-pill">{GUIDE_CATEGORY_LABELS[guide.category]}</span>
      </header>

      <p className="learning-summary">{guide.summary}</p>

      <dl className="learning-fact-list">
        {guide.facts.map((fact) => (
          <div key={`${guide.id}-${fact.label}`} className="learning-fact">
            <dt>{fact.label}</dt>
            <dd>{fact.value}</dd>
          </div>
        ))}
      </dl>

      <div className="learning-card-actions">
        <button type="button" className="learning-open-btn" onClick={onToggle} aria-expanded={expanded}>
          {expanded ? "Hide guide" : "Open guide"}
        </button>
        <button type="button" className="learning-complete-btn" onClick={onToggleComplete} aria-pressed={completed}>
          {completed ? "Completed" : "Mark complete"}
        </button>
      </div>

      {expanded && (guide.examId || guide.noteLinks?.length) ? (
        <div className="learning-action-row">
          {guide.examId ? (
            <button type="button" className="sheet-practice-btn" onClick={() => onOpenExam(guide.examId!)}>
              Practice {guide.examLabel ?? "exam"}
            </button>
          ) : null}
          {guide.noteLinks?.map((link) => (
            <button
              key={`${guide.id}-${link.noteId}`}
              type="button"
              className="sheet-practice-btn"
              onClick={() => onOpenNote(link.noteId)}
            >
              {link.label}
            </button>
          ))}
        </div>
      ) : null}

      {expanded ? <div className="learning-section-stack">
        {guide.sections.map((section) => (
          <section key={`${guide.id}-${section.title}`} className="learning-section">
            <h4>{section.title}</h4>
            <ul>
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div> : null}

      {expanded ? <div className="learning-bottom-grid">
        <section className="learning-section learning-section--compact">
          <h4>Common traps</h4>
          <ul>
            {guide.pitfalls.map((pitfall) => (
              <li key={pitfall}>{pitfall}</li>
            ))}
          </ul>
        </section>
        <section className="learning-section learning-section--compact">
          <h4>Next actions</h4>
          <ul>
            {guide.nextActions.map((action) => (
              <li key={action}>{action}</li>
            ))}
          </ul>
        </section>
      </div> : null}
    </article>
  );
}
