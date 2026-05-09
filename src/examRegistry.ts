import type { Exam } from "./exams/types";

type ExamRegistryEntry = {
  id: string;
  title: string;
  load: () => Promise<Exam>;
};

export const EXAM_REGISTRY = [
  {
    id: "electrics",
    title: "Basic Electrics",
    load: () => import("./exams/electrics").then((m) => m.electricsExam)
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
    id: "pat-testing",
    title: "PAT Testing (5th Edition COP)",
    load: () => import("./exams/pat-testing").then((m) => m.patTestingExam)
  },
  {
    id: "initial-verification",
    title: "Initial Verification",
    load: () => import("./exams/initial-verification").then((m) => m.initialVerificationExam)
  },
  {
    id: "periodic-inspection",
    title: "Periodic Inspection & Testing",
    load: () => import("./exams/periodic-inspection").then((m) => m.periodicInspectionExam)
  },
  {
    id: "condition-reporting",
    title: "Condition Reporting (EICR)",
    load: () => import("./exams/condition-reporting").then((m) => m.conditionReportingExam)
  },
  {
    id: "am2-installation-assessment",
    title: "AM2 / AM2E — Installation Electrician EPA",
    load: () => import("./exams/am2-installation-assessment").then((m) => m.am2Exam)
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
