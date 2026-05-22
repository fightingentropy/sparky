import type { Exam } from "./types";
import { electricianTraining17thEditionSourceSection } from "./electrician-training-source";

export const seventeenthEditionExam: Exam = {
  id: "17th-edition",
  title: "17th Edition (BS 7671)",
  subtitle: "Copied ElectricianTraining 17th Edition mock test",
  description:
    "A source-matched 17th Edition exam copied from the ElectricianTraining mock test. It covers BS 7671 requirements, special locations, disconnection, equipment selection, earthing and inspection-and-testing fundamentals in the older edition style.",
  format: "One 60-question source mock. Pass at 60%+ to match the source.",
  passPercent: 0.6,
  sections: [electricianTraining17thEditionSourceSection],
  scoring: [
    { threshold: 0.9, label: "Strong — secure on 17th Edition source questions" },
    { threshold: 0.6, label: "Pass — review missed regulation areas" },
    { threshold: 0.45, label: "Near miss — revise older BS 7671 structure and tables" },
    { threshold: 0, label: "Major gaps — rebuild 17th Edition fundamentals first" }
  ],
  priorities: [
    "BS 7671 scope, special locations and wiring-system requirements.",
    "Earthing, bonding, disconnection times and maximum Zs values.",
    "Inspection, testing and certification requirements.",
    "Older-edition wording that differs from current 18th Edition practice.",
    "Close regulatory distractors; read every option before answering."
  ]
};
