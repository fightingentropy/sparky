import { useMemo, useState } from "react";
import {
  COURSE_GUIDES,
  GUIDE_CATEGORY_LABELS,
  type CourseGuide,
  type GuideCategory
} from "./courseGuides";
import type { ExamId } from "./examRegistry";

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

export function LearningPage({ isActive, onOpenExam, onOpenNote }: Props) {
  const [activeFilter, setActiveFilter] = useState<GuideFilter>("all");

  const filteredGuides = useMemo(
    () => COURSE_GUIDES.filter((guide) => activeFilter === "all" || guide.category === activeFilter),
    [activeFilter]
  );

  return (
    <section className={`page page-learning ${isActive ? "is-active" : ""}`}>
      <header className="page-header learning-header">
        <div>
          <h2>Learning Guides</h2>
          <p className="page-copy">
            Structured course routes, assessment checklists and revision pages matched to the Sparky exam categories.
          </p>
        </div>
        <span className="learning-count">{COURSE_GUIDES.length} guides</span>
      </header>

      <div className="learning-route-strip" aria-label="Qualification route">
        {["Level 2", "Level 3", "NVQ evidence", "AM2", "ECS card"].map((step) => (
          <span key={step}>{step}</span>
        ))}
      </div>

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
          <GuideCard key={guide.id} guide={guide} onOpenExam={onOpenExam} onOpenNote={onOpenNote} />
        ))}
      </div>
    </section>
  );
}

function GuideCard({
  guide,
  onOpenExam,
  onOpenNote
}: {
  guide: CourseGuide;
  onOpenExam: (examId: ExamId) => void;
  onOpenNote: (noteId: string) => void;
}) {
  return (
    <article id={guide.id} className="learning-card">
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

      {(guide.examId || guide.noteLinks?.length) ? (
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

      <div className="learning-section-stack">
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
      </div>

      <div className="learning-bottom-grid">
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
      </div>
    </article>
  );
}
