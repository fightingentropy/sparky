import type { Exam } from "./types";
import { electricianTrainingPartPSourceSection } from "./electrician-training-source";

export const buildingRegulationsExam: Exam = {
  id: "building-regulations",
  title: "Building Regulations & Part P",
  subtitle: "Seven copied ElectricianTraining Part P mock tests",
  description:
    "A source-matched Part P and Building Regulations exam set copied from the ElectricianTraining mock tests. It replaces the earlier topic drills with seven full source mocks covering notifiable work, approved documents, special locations, dwelling scope, certification and compliance routes.",
  format: "Seven rotating 20-question source mocks. Pass at 60%+ to match the source.",
  passPercent: 0.6,
  sections: [electricianTrainingPartPSourceSection],
  scoring: [
    { threshold: 0.9, label: "Strong — ready for Part P mock exam conditions" },
    { threshold: 0.6, label: "Pass — review missed source questions before moving on" },
    { threshold: 0.45, label: "Near miss — revise Part P scope and Approved Documents" },
    { threshold: 0, label: "Major gaps — rebuild Building Regulations fundamentals first" }
  ],
  priorities: [
    "Notifiable work, special locations and the post-2013 Part P categories.",
    "Approved Documents that affect electrical work: A, B, C, E, F, L, M, P and related duties.",
    "Compliance routes through CPS notification, Building Control and correct certification.",
    "Domestic scope: dwellings, gardens, outbuildings and common parts of residential buildings.",
    "Read the wording carefully; the source tests use close distractors and regulatory exceptions."
  ]
};
