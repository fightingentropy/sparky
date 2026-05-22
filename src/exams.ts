import type { Exam } from "./exams/types";
import eighteenthEditionExam from "./exam-data/18th-edition.json";
import am2Exam from "./exam-data/am2-installation-assessment.json";
import buildingRegulationsExam from "./exam-data/building-regulations.json";
import ecsHealthSafetyExam from "./exam-data/ecs-health-safety.json";
import initialVerificationExam from "./exam-data/initial-verification.json";
import inspectionDesign2396Exam from "./exam-data/inspection-design-2396.json";
import level2ElectricalInstallationExam from "./exam-data/level-2-electrical-installation.json";
import level3ElectricalInstallationExam from "./exam-data/level-3-electrical-installation.json";
import patTestingExam from "./exam-data/pat-testing.json";
import periodicInspectionExam from "./exam-data/periodic-inspection.json";
import specialLocationsExam from "./exam-data/special-locations.json";

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
  level2ElectricalInstallationExam,
  level3ElectricalInstallationExam,
  buildingRegulationsExam,
  eighteenthEditionExam,
  specialLocationsExam,
  patTestingExam,
  initialVerificationExam,
  inspectionDesign2396Exam,
  periodicInspectionExam,
  am2Exam,
  ecsHealthSafetyExam
] as unknown as Exam[];
