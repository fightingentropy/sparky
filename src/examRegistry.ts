import type { Exam } from "./exams/types";
import { applyExamExplanationEnhancements } from "./examExplanationEnhancements";
import { applyExamSolutionTables } from "./examSolutionTables";
import { applyExamContentSource } from "./examContentSource";
import { buildFundamentalInspectionExam } from "./fundamentalInspectionExam";
import { buildInitialVerificationExam } from "./initialVerificationExam";
import { PRIMARY_EXAM_TITLES } from "./examTaxonomy";
import eighteenthEditionUrl from "./exam-data/18th-edition.json?url";
import am2InstallationAssessmentUrl from "./exam-data/am2-installation-assessment.json?url";
import buildingRegulationsUrl from "./exam-data/building-regulations.json?url";
import ecsHealthSafetyUrl from "./exam-data/ecs-health-safety.json?url";
import initialVerificationUrl from "./exam-data/initial-verification.json?url";
import inspectionDesign2396Url from "./exam-data/inspection-design-2396.json?url";
import level2ElectricalInstallationUrl from "./exam-data/level-2-electrical-installation.json?url";
import level3ElectricalInstallationUrl from "./exam-data/level-3-electrical-installation.json?url";
import patTestingUrl from "./exam-data/pat-testing.json?url";
import periodicInspectionUrl from "./exam-data/periodic-inspection.json?url";
import specialLocationsUrl from "./exam-data/special-locations.json?url";

type ExamRegistryEntry = {
  id: string;
  title: string;
  load: () => Promise<Exam>;
};

const EXAM_ASSET_URLS = {
  "level-2-electrical-installation": level2ElectricalInstallationUrl,
  "level-3-electrical-installation": level3ElectricalInstallationUrl,
  "building-regulations": buildingRegulationsUrl,
  "18th-edition": eighteenthEditionUrl,
  "special-locations": specialLocationsUrl,
  "pat-testing": patTestingUrl,
  "initial-verification": initialVerificationUrl,
  "inspection-design-2396": inspectionDesign2396Url,
  "periodic-inspection": periodicInspectionUrl,
  "am2-installation-assessment": am2InstallationAssessmentUrl,
  "ecs-health-safety": ecsHealthSafetyUrl
} as const;

type ExamAssetId = keyof typeof EXAM_ASSET_URLS;

const examCache = new Map<ExamAssetId, Promise<Exam>>();
let fundamentalExamCache: Promise<Exam> | undefined;
let initialVerificationExamCache: Promise<Exam> | undefined;

function loadExamAsset(id: ExamAssetId): Promise<Exam> {
  const cached = examCache.get(id);
  if (cached) return cached;

  const request = fetch(EXAM_ASSET_URLS[id]).then(async (response) => {
    if (!response.ok) {
      throw new Error(`Failed to load exam ${id}: ${response.status}`);
    }

    const exam = (await response.json()) as Exam;
    if (exam.id !== id) {
      throw new Error(`Loaded exam id ${exam.id} did not match requested exam ${id}`);
    }
    return applyExamContentSource(
      applyExamSolutionTables(applyExamExplanationEnhancements(exam))
    );
  });

  examCache.set(id, request);
  return request;
}

function makeExamEntry<T extends ExamAssetId>(id: T, title: string): ExamRegistryEntry & { id: T } {
  return {
    id,
    title,
    load: () => loadExamAsset(id)
  };
}

function loadFundamentalInspectionExam(): Promise<Exam> {
  fundamentalExamCache ??= loadExamAsset("initial-verification").then(
    (sourceExam) => applyExamContentSource(buildFundamentalInspectionExam(sourceExam))
  );
  return fundamentalExamCache;
}

function loadInitialVerificationExam(): Promise<Exam> {
  initialVerificationExamCache ??= loadExamAsset("initial-verification").then(
    (sourceExam) => applyExamContentSource(buildInitialVerificationExam(sourceExam))
  );
  return initialVerificationExamCache;
}

export const EXAM_REGISTRY = [
  makeExamEntry("building-regulations", PRIMARY_EXAM_TITLES["building-regulations"]),
  makeExamEntry("18th-edition", PRIMARY_EXAM_TITLES["18th-edition"]),
  {
    id: "fundamental-inspection-testing",
    title: PRIMARY_EXAM_TITLES["fundamental-inspection-testing"],
    load: loadFundamentalInspectionExam
  },
  makeExamEntry("pat-testing", PRIMARY_EXAM_TITLES["pat-testing"]),
  makeExamEntry("periodic-inspection", PRIMARY_EXAM_TITLES["periodic-inspection"]),
  {
    id: "initial-verification",
    title: PRIMARY_EXAM_TITLES["initial-verification"],
    load: loadInitialVerificationExam
  },
  makeExamEntry("ecs-health-safety", "ECS Health & Safety"),
  makeExamEntry("level-2-electrical-installation", "Level 2 Electrical Installation"),
  makeExamEntry("level-3-electrical-installation", "Level 3 Electrical Installation"),
  makeExamEntry("special-locations", "Special Locations"),
  makeExamEntry("inspection-design-2396", "Inspection & Design 2396"),
  makeExamEntry("am2-installation-assessment", "AM2 / AM2E — Installation Electrician EPA")
] as const satisfies readonly ExamRegistryEntry[];

export const DEFAULT_EXAM_ID = EXAM_REGISTRY[0].id;

export type ExamId = (typeof EXAM_REGISTRY)[number]["id"];

export const DEFAULT_HIDDEN_EXAM_IDS = [
  "ecs-health-safety",
  "level-2-electrical-installation",
  "level-3-electrical-installation",
  "special-locations",
  "inspection-design-2396",
  "am2-installation-assessment"
] as const satisfies readonly ExamId[];

export function isKnownExamId(value: unknown): value is ExamId {
  return typeof value === "string" && EXAM_REGISTRY.some((exam) => exam.id === value);
}

export function isExamIdArray(value: unknown): value is ExamId[] {
  return (
    Array.isArray(value) &&
    new Set(value).size === value.length &&
    value.every(isKnownExamId)
  );
}

export function getExamEntry(id: string): ExamRegistryEntry {
  return EXAM_REGISTRY.find((exam) => exam.id === id) ?? EXAM_REGISTRY[0];
}

export function getValidExamIds(): string[] {
  return EXAM_REGISTRY.map((exam) => exam.id);
}
