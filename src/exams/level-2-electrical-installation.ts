import type { Exam } from "./types";
import { electricianTrainingLevel2SourceSection } from "./electrician-training-source";

export const level2ElectricalInstallationExam: Exam = {
  id: "level-2-electrical-installation",
  title: "Level 2 Electrical Installation",
  subtitle: "Five copied ElectricianTraining Level 2 mock tests",
  description:
    "A source-matched Level 2 Electrical Installation exam set copied from the ElectricianTraining mock tests. It adds foundation electrical-science, installation technology, health and safety, cable systems, protection and practical knowledge questions.",
  format: "Five rotating 30-question source mocks. Pass at 60%+ to match the source.",
  passPercent: 0.6,
  sections: [electricianTrainingLevel2SourceSection],
  scoring: [
    { threshold: 0.9, label: "Strong — ready for Level 2 source mocks" },
    { threshold: 0.6, label: "Pass — review missed foundation topics" },
    { threshold: 0.45, label: "Near miss — revise electrical principles and installation basics" },
    { threshold: 0, label: "Major gaps — rebuild Level 2 fundamentals first" }
  ],
  priorities: [
    "Basic electrical principles, units, simple formulae and circuit behaviour.",
    "Installation methods, containment, cable selection and conductor identification.",
    "Health and safety, tools, drawings and practical site knowledge.",
    "Protection, earthing, bonding and inspection basics.",
    "Use the source diagrams and images where they are provided."
  ]
};
