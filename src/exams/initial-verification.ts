import type { Exam } from "./types";
import { electricianTraining2391SourceSection } from "./electrician-training-source";

export const initialVerificationExam: Exam = {
  id: "initial-verification",
  title: "Initial Verification",
  subtitle: "Eight copied ElectricianTraining 2391 mock tests",
  description:
    "A source-matched inspection-and-testing exam set built from the logged-in ElectricianTraining 2391 mock tests. It replaces the previous mixed topic-drill attempts with eight copied 2391 mocks covering initial verification, safe isolation, inspection, dead testing, live testing, certification, fault finding and periodic-inspection judgement.",
  format:
    "Eight rotating attempts: four 40-question mocks, one 60-question mock, one 90-question mock, and two 30-question mocks. Pass at 60%+ to match the source.",
  passPercent: 0.6,
  sections: [electricianTraining2391SourceSection],
  scoring: [
    { threshold: 0.9, label: "Strong — exam-ready across the 2391 inspection-and-testing mocks" },
    { threshold: 0.6, label: "Pass — review the questions missed before moving to the next mock" },
    { threshold: 0.45, label: "Near miss — repeat the weak mock and revise GN3 / BS 7671 Part 6" },
    { threshold: 0, label: "Major gaps — return to inspection-and-testing fundamentals before retrying" }
  ],
  priorities: [
    "Initial verification purpose, paperwork and sign-off: EIC, Minor Works, schedules and certification duties.",
    "Safe isolation and GS38 practice: lock-off, prove-dead sequence and live-terminal precautions.",
    "Inspection before testing: basic protection, IP ratings, bonding, polarity and installation completeness.",
    "Dead and live tests: continuity, IR, polarity, Ze, Zs, PFC, RCD trip times and phase sequence.",
    "2391-style judgement: answer from GN3 / BS 7671 evidence, not from memory shortcuts."
  ]
};
