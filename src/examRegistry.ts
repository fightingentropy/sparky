import type { Exam } from "./exams/types";
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
    return exam;
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

export const EXAM_REGISTRY = [
  makeExamEntry("level-2-electrical-installation", "Level 2 Electrical Installation"),
  makeExamEntry("level-3-electrical-installation", "Level 3 Electrical Installation"),
  makeExamEntry("building-regulations", "Building Regulations & Part P"),
  makeExamEntry("18th-edition", "18th Edition (BS 7671)"),
  makeExamEntry("special-locations", "Special Locations"),
  makeExamEntry("pat-testing", "Pat Testing"),
  makeExamEntry("initial-verification", "Initial Verification"),
  makeExamEntry("inspection-design-2396", "Inspection & Design 2396"),
  makeExamEntry("periodic-inspection", "Periodic Inspection & Condition Reporting"),
  makeExamEntry("am2-installation-assessment", "AM2 / AM2E — Installation Electrician EPA"),
  makeExamEntry("ecs-health-safety", "ECS Health & Safety")
] as const satisfies readonly ExamRegistryEntry[];

export const DEFAULT_EXAM_ID = EXAM_REGISTRY[0].id;

export type ExamId = (typeof EXAM_REGISTRY)[number]["id"];

export function isKnownExamId(value: unknown): value is ExamId {
  return typeof value === "string" && EXAM_REGISTRY.some((exam) => exam.id === value);
}

export function getExamEntry(id: string): ExamRegistryEntry {
  return EXAM_REGISTRY.find((exam) => exam.id === id) ?? EXAM_REGISTRY[0];
}

export function getValidExamIds(): string[] {
  return EXAM_REGISTRY.map((exam) => exam.id);
}
