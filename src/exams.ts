import type { Exam, ExamQuestion, ExamSection } from "./exams/types";
import { buildingRegulationsExam } from "./exams/building-regulations";
import { eighteenthEditionExam } from "./exams/18th-edition";
import { patTestingExam } from "./exams/pat-testing";
import { initialVerificationExam } from "./exams/initial-verification";
import { periodicInspectionExam } from "./exams/periodic-inspection";
import { conditionReportingExam } from "./exams/condition-reporting";
import { am2Exam } from "./exams/am2-installation-assessment";

export type {
  ExamChoice,
  ExamQuestion,
  ExamVariant,
  ExamSection,
  ScoringBand,
  Exam
} from "./exams/types";

export const EXAMS: Exam[] = [
  buildingRegulationsExam,
  eighteenthEditionExam,
  patTestingExam,
  initialVerificationExam,
  periodicInspectionExam,
  conditionReportingExam,
  am2Exam
];

// Per-section, per-variant question count served on each test attempt.
// Each agent that generated the variants ordered questions roughly
// easy → hard, so we keep the LAST N questions per variant — i.e. the
// hardest scenario / application questions, and drop the early
// foundational recall questions. The full 4,650-question bank stays
// in the per-exam files so we can adjust these caps without
// regenerating content.
const SECTION_QUESTION_LIMITS: Record<string, Record<string, number>> = {
  "building-regulations": {
    "section-1": 4,
    "section-2": 4,
    "section-3": 4,
    "section-4": 4,
    "section-5-merged-regulation-safety": 4,
  },
  "18th-edition": {
    "section-1": 9,
    "section-2": 9,
    "section-3": 9,
    "section-4-practice": 11,
    "section-5": 9,
    "section-6-merged-design-rules": 9,
  },
  "pat-testing": {
    "section-1": 7,
    "section-2": 7,
    "section-3": 7,
    "section-4": 7,
    "section-5-merged-pat-fundamentals": 7,
  },
  "initial-verification": {
    "section-1": 5,
    "section-2": 5,
    "section-3": 5,
    "section-4-practice": 6,
    "section-4": 6,
    "section-5": 6,
    "section-6": 5,
    "section-7-merged-testing-calculations": 5,
  },
  "periodic-inspection": {
    "section-1": 5,
    "section-2": 5,
    "section-3": 5,
    "section-4": 4,
    "section-5-merged-periodic-earthing": 4,
  },
  "condition-reporting": {
    "section-1": 5,
    "section-2": 5,
    "section-3": 5,
    "section-4": 4,
    "section-5-merged-observation-scenarios": 4,
  },
  "am2-installation-assessment": {
    "section-1": 7,
    "section-2": 7,
    "section-3": 7,
    "section-4": 7,
    "section-5": 7,
    "section-6": 8,
    "section-7-merged-practical-foundations": 7,
  },
};

function selectHardestQuestions(
  examId: string,
  sectionId: string,
  questions: ExamQuestion[]
): ExamQuestion[] {
  const limit = SECTION_QUESTION_LIMITS[examId]?.[sectionId];
  if (typeof limit !== "number" || limit >= questions.length) return questions;
  return questions.slice(-limit);
}

export function getActiveVariantIndex(attemptCount: number, exam: Exam): number {
  const variantCount = exam.sections[0]?.variants.length ?? 1;
  if (variantCount <= 0) return 0;
  return ((attemptCount % variantCount) + variantCount) % variantCount;
}

export function getQuestionsForVariant(exam: Exam, variantIndex: number): ExamQuestion[] {
  const result: ExamQuestion[] = [];
  let n = 1;
  for (const section of exam.sections) {
    const variant = section.variants[variantIndex % section.variants.length];
    if (!variant) continue;
    for (const q of selectHardestQuestions(exam.id, section.id, variant.questions)) {
      result.push({ ...q, number: n });
      n += 1;
    }
  }
  return result;
}

export function getSectionQuestionsForVariant(
  exam: Exam,
  variantIndex: number
): Array<{ section: ExamSection; questions: ExamQuestion[] }> {
  const result: Array<{ section: ExamSection; questions: ExamQuestion[] }> = [];
  let n = 1;
  for (const section of exam.sections) {
    const variant = section.variants[variantIndex % section.variants.length];
    if (!variant) continue;
    const selected = selectHardestQuestions(exam.id, section.id, variant.questions);
    const numbered = selected.map((q) => {
      const numbered = { ...q, number: n };
      n += 1;
      return numbered;
    });
    result.push({ section, questions: numbered });
  }
  return result;
}

export function countQuestionsForVariant(exam: Exam, variantIndex: number): number {
  return exam.sections.reduce((sum, section) => {
    const v = section.variants[variantIndex % section.variants.length];
    if (!v) return sum;
    return sum + selectHardestQuestions(exam.id, section.id, v.questions).length;
  }, 0);
}

export function countQuestions(exam: Exam): number {
  return countQuestionsForVariant(exam, 0);
}

export function countQuestionsTotal(exam: Exam): number {
  return exam.sections.reduce(
    (sum, section) => sum + section.variants.reduce((s, v) => s + v.questions.length, 0),
    0
  );
}

export function getVariantCount(exam: Exam): number {
  return exam.sections[0]?.variants.length ?? 0;
}

export function getPassMark(exam: Exam, totalQuestions: number): number {
  return Math.ceil(exam.passPercent * totalQuestions);
}

export type ScoringRange = { minScore: number; range: string; label: string };

export function getScoringRanges(exam: Exam, totalQuestions: number): ScoringRange[] {
  const sorted = [...exam.scoring].sort((a, b) => b.threshold - a.threshold);
  return sorted.map((band, i) => {
    const minScore = Math.ceil(band.threshold * totalQuestions);
    if (i === 0) {
      return { minScore, range: `${minScore}–${totalQuestions}`, label: band.label };
    }
    const prev = sorted[i - 1];
    const prevMin = Math.ceil(prev.threshold * totalQuestions);
    if (i === sorted.length - 1 && minScore === 0) {
      return { minScore: 0, range: `< ${prevMin}`, label: band.label };
    }
    const max = prevMin - 1;
    return { minScore, range: `${minScore}–${max}`, label: band.label };
  });
}

export function getScoringBand(
  exam: Exam,
  correctCount: number,
  totalQuestions: number
): ScoringRange {
  const ranges = getScoringRanges(exam, totalQuestions);
  return ranges.find((b) => correctCount >= b.minScore) ?? ranges[ranges.length - 1];
}
