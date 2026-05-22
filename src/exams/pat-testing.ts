import type { Exam } from "./types";
import { electricianTrainingPatSourceSection } from "./electrician-training-source";

export const patTestingExam: Exam = {
  id: "pat-testing",
  title: "PAT Testing",
  subtitle: "Four copied ElectricianTraining PAT mock tests",
  description:
    "A source-matched PAT testing exam set copied from the ElectricianTraining mock tests. It replaces the older local revision variants with four full source mocks covering equipment classes, formal visual inspection, combined inspection and test, detachable leads, record keeping, limits and practical judgement.",
  format: "Four rotating source mocks: three 50-question tests and one 30-question test. Pass at 80%+ to match the source.",
  passPercent: 0.8,
  sections: [electricianTrainingPatSourceSection],
  scoring: [
    { threshold: 0.9, label: "Strong — exam-ready for PAT source mocks" },
    { threshold: 0.8, label: "Pass — tighten any missed inspection or limit questions" },
    { threshold: 0.6, label: "Near miss — revise Code of Practice fundamentals" },
    { threshold: 0, label: "Major gaps — rebuild appliance classes, tests and records first" }
  ],
  priorities: [
    "Equipment classes, protective conductors, insulation and appliance construction.",
    "Formal visual inspection, combined inspection and test, and when each is appropriate.",
    "Earth continuity, insulation resistance, leakage and functional checks.",
    "Detachable leads, surge-protected equipment, extension leads and practical limits.",
    "Record keeping, retest intervals and duty-holder responsibilities."
  ]
};
