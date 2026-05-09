import type { Exam } from "./exams/types";
import { electricsExam } from "./exams/electrics";
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

export {
  countQuestions,
  countQuestionsForVariant,
  countQuestionsTotal,
  getActiveVariantIndex,
  getPassMark,
  getQuestionsForVariant,
  getScoringBand,
  getScoringRanges,
  getSectionQuestionsForVariant,
  getVariantCount,
  type ScoringRange
} from "./examUtils";

export const EXAMS: Exam[] = [
  electricsExam,
  buildingRegulationsExam,
  eighteenthEditionExam,
  patTestingExam,
  initialVerificationExam,
  periodicInspectionExam,
  conditionReportingExam,
  am2Exam
];
