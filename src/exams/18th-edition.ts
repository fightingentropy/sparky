import type { Exam } from "./types";
import { electricianTraining18thEditionSourceSection } from "./electrician-training-source";

export const eighteenthEditionExam: Exam = {
  id: "18th-edition",
  title: "18th Edition (BS 7671)",
  subtitle: "Five copied ElectricianTraining 18th Edition mock tests",
  description:
    "A source-matched 18th Edition exam set copied from the ElectricianTraining mock tests. It replaces the previous topic drills with five full source mocks covering BS 7671 scope, parts, definitions, protection, selection and erection, inspection and testing, special locations and appendices.",
  format: "Five rotating 60-question source mocks. Pass at 60%+ to match the source.",
  passPercent: 0.6,
  sections: [electricianTraining18thEditionSourceSection],
  scoring: [
    { threshold: 0.9, label: "Strong — exam-ready on BS 7671 source mocks" },
    { threshold: 0.6, label: "Pass — review the missed clauses and tables" },
    { threshold: 0.45, label: "Near miss — practise navigation through BS 7671" },
    { threshold: 0, label: "Major gaps — rebuild 18th Edition structure and lookup skills" }
  ],
  priorities: [
    "BS 7671 scope, exclusions, definitions and the seven-part structure.",
    "Protection for safety: ADS, RCDs, SPDs, overcurrent, thermal effects and isolation.",
    "Selection and erection: wiring systems, current-carrying capacity, voltage drop and appendices.",
    "Inspection, testing, certification and special installations or locations.",
    "Use regulation-book logic; these mocks test close wording and table lookup judgement."
  ]
};
