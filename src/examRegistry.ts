import type { Exam } from "./exams/types";

type ExamRegistryEntry = {
  id: string;
  title: string;
  load: () => Promise<Exam>;
};

export const EXAM_REGISTRY = [
  {
    id: "level-2-electrical-installation",
    title: "Level 2 Electrical Installation",
    load: () => import("./exams/level-2-electrical-installation").then((m) => m.level2ElectricalInstallationExam)
  },
  {
    id: "level-3-electrical-installation",
    title: "Level 3 Electrical Installation",
    load: () => import("./exams/level-3-electrical-installation").then((m) => m.level3ElectricalInstallationExam)
  },
  {
    id: "building-regulations",
    title: "Building Regulations & Part P",
    load: () => import("./exams/building-regulations").then((m) => m.buildingRegulationsExam)
  },
  {
    id: "18th-edition",
    title: "18th Edition (BS 7671)",
    load: () => import("./exams/18th-edition").then((m) => m.eighteenthEditionExam)
  },
  {
    id: "special-locations",
    title: "Special Locations",
    load: () => import("./exams/special-locations").then((m) => m.specialLocationsExam)
  },
  {
    id: "pat-testing",
    title: "Pat Testing",
    load: () => import("./exams/pat-testing").then((m) => m.patTestingExam)
  },
  {
    id: "initial-verification",
    title: "Initial Verification",
    load: () => import("./exams/initial-verification").then((m) => m.initialVerificationExam)
  },
  {
    id: "inspection-design-2396",
    title: "Inspection & Design 2396",
    load: () => import("./exams/inspection-design-2396").then((m) => m.inspectionDesign2396Exam)
  },
  {
    id: "periodic-inspection",
    title: "Periodic Inspection & Condition Reporting",
    load: () => import("./exams/periodic-inspection").then((m) => m.periodicInspectionExam)
  },
  {
    id: "am2-installation-assessment",
    title: "AM2 / AM2E — Installation Electrician EPA",
    load: () => import("./exams/am2-installation-assessment").then((m) => m.am2Exam)
  },
  {
    id: "ecs-health-safety",
    title: "ECS Health & Safety",
    load: () => import("./exams/ecs-health-safety").then((m) => m.ecsHealthSafetyExam)
  }
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
