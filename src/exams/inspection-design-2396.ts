import type { Exam } from "./types";
import { electricianTraining2396SourceSection } from "./electrician-training-source";

export const inspectionDesign2396Exam: Exam = {
  id: "inspection-design-2396",
  title: "Inspection & Design 2396",
  subtitle: "Fourteen copied ElectricianTraining 2396 design mock tests",
  description:
    "A source-matched 2396 design exam set copied from the ElectricianTraining mock tests. It adds the design-and-verification source mocks covering maximum demand, cable calculations, earthing, protection, inspection, design documentation, special installations and test instruments.",
  format:
    "Fourteen rotating source mocks: thirteen 30-question tests and one 18-question test-instruments mock. Pass at 60%+ across the category.",
  passPercent: 0.6,
  sections: [electricianTraining2396SourceSection],
  scoring: [
    { threshold: 0.9, label: "Strong — ready for 2396 design-style source mocks" },
    { threshold: 0.6, label: "Pass — review missed calculation and design decisions" },
    { threshold: 0.45, label: "Near miss — revise design method and BS 7671 tables" },
    { threshold: 0, label: "Major gaps — rebuild design calculations and verification first" }
  ],
  priorities: [
    "Design sequence: assessment of characteristics, maximum demand, cable sizing and voltage drop.",
    "Protective devices, disconnection, earthing arrangements and fault-current calculations.",
    "Inspection, testing, certification and instrument selection.",
    "Special installations, environmental conditions and design documentation.",
    "Work from the calculation method; many distractors are close numerical alternatives."
  ]
};
