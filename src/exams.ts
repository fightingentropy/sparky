import type { Exam } from "./exams/types";
import { electricsExam } from "./exams/electrics";
import { level2ElectricalInstallationExam } from "./exams/level-2-electrical-installation";
import { level3ElectricalInstallationExam } from "./exams/level-3-electrical-installation";
import { buildingRegulationsExam } from "./exams/building-regulations";
import { seventeenthEditionExam } from "./exams/17th-edition";
import { eighteenthEditionExam } from "./exams/18th-edition";
import { specialLocationsExam } from "./exams/special-locations";
import { patTestingExam } from "./exams/pat-testing";
import { initialVerificationExam } from "./exams/initial-verification";
import { inspectionDesign2396Exam } from "./exams/inspection-design-2396";
import { periodicInspectionExam } from "./exams/periodic-inspection";
import { conditionReportingExam } from "./exams/condition-reporting";
import { am2Exam } from "./exams/am2-installation-assessment";
import { ecsHealthSafetyExam } from "./exams/ecs-health-safety";

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
  level2ElectricalInstallationExam,
  level3ElectricalInstallationExam,
  buildingRegulationsExam,
  seventeenthEditionExam,
  eighteenthEditionExam,
  specialLocationsExam,
  patTestingExam,
  initialVerificationExam,
  inspectionDesign2396Exam,
  periodicInspectionExam,
  conditionReportingExam,
  am2Exam,
  ecsHealthSafetyExam
];
