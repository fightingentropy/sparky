import type { Exam } from "./types";
import { electricianTrainingAm2SourceSection } from "./electrician-training-source";

export const am2Exam: Exam = {
  id: "am2-installation-assessment",
  title: "AM2 / AM2E — Installation Electrician EPA",
  subtitle: "Two copied ElectricianTraining AM2 mock tests",
  description:
    "A source-matched AM2 knowledge exam set copied from the ElectricianTraining mock tests. It replaces the previous underpinning-knowledge bank with two full source mocks covering safe isolation, statutory duties, installation practice, inspection and testing, fault diagnosis and commissioning judgement.",
  format: "Two rotating 30-question source mocks. Pass at 60%+ to match the source.",
  passPercent: 0.6,
  sections: [electricianTrainingAm2SourceSection],
  scoring: [
    { threshold: 0.9, label: "Strong — ready for AM2 knowledge-style questions" },
    { threshold: 0.6, label: "Pass — review the missed AM2 source questions" },
    { threshold: 0.45, label: "Near miss — revise safe isolation, testing and installation duties" },
    { threshold: 0, label: "Major gaps — rebuild practical-assessment fundamentals first" }
  ],
  priorities: [
    "Safe isolation, proving dead, lock-off and statutory safety duties.",
    "Installation standards, containment, conductor identification and protective devices.",
    "Inspection, testing, commissioning and certification decisions.",
    "Fault diagnosis and practical judgement under assessment-style wording.",
    "Treat each answer as a site decision, not a memory shortcut."
  ]
};
