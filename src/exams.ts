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
    for (const q of variant.questions) {
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
    const numbered = variant.questions.map((q) => {
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
    return sum + (v?.questions.length ?? 0);
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
