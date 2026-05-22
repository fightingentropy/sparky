import type { Exam } from "./types";
import { electricianTrainingLevel3SourceSection } from "./electrician-training-source";

export const level3ElectricalInstallationExam: Exam = {
  id: "level-3-electrical-installation",
  title: "Level 3 Electrical Installation",
  subtitle: "Five copied ElectricianTraining Level 3 mock tests",
  description:
    "A source-matched Level 3 Electrical Installation exam set copied from the ElectricianTraining mock tests. It adds higher-level electrical science, design, inspection, fault diagnosis, three-phase, machinery and installation-practice questions.",
  format: "Five rotating 30-question source mocks. Pass at 60%+ to match the source.",
  passPercent: 0.6,
  sections: [electricianTrainingLevel3SourceSection],
  scoring: [
    { threshold: 0.9, label: "Strong — ready for Level 3 source mocks" },
    { threshold: 0.6, label: "Pass — review missed advanced installation topics" },
    { threshold: 0.45, label: "Near miss — revise calculations, testing and design decisions" },
    { threshold: 0, label: "Major gaps — rebuild Level 3 principles first" }
  ],
  priorities: [
    "Electrical principles, formulae, impedance, power and three-phase concepts.",
    "Design decisions, protective devices, fault current and disconnection.",
    "Inspection, testing, fault diagnosis and certification knowledge.",
    "Rotating machines, control gear, data plates and practical installation details.",
    "Use the source images for formula and equipment-identification questions."
  ]
};
