import type { Exam } from "./types";
import { electricianTrainingEcsSourceSection } from "./electrician-training-source";

export const ecsHealthSafetyExam: Exam = {
  id: "ecs-health-safety",
  title: "ECS Health & Safety",
  subtitle: "Fifteen copied ElectricianTraining ECS mock and topic tests",
  description:
    "A source-matched ECS health and safety exam set copied from the ElectricianTraining mock and topic tests. It covers the full ECS safety spread: electrotechnical safety, special site hazards, work equipment, working at height, fire, hygiene, PPE, accident reporting, manual handling, general health and safety and environmental practice.",
  format:
    "Fifteen rotating source tests: four full ECS mocks plus eleven topic tests. The category pass threshold is set at 86%, matching the full ECS mock standard.",
  passPercent: 0.86,
  sections: [electricianTrainingEcsSourceSection],
  scoring: [
    { threshold: 0.94, label: "Strong — secure for ECS health and safety mocks" },
    { threshold: 0.86, label: "Pass — review missed safety topics before booking" },
    { threshold: 0.7, label: "Near miss — revise the weak safety areas" },
    { threshold: 0, label: "Major gaps — rebuild health and safety fundamentals first" }
  ],
  priorities: [
    "Electrical safety, isolation, site rules and supervisor reporting.",
    "Work at height, ladders, PPE, manual handling and work equipment.",
    "Fire prevention, emergency action, hygiene, COSHH and environmental responsibilities.",
    "Accident reporting, RIDDOR-style duties and general risk assessment.",
    "Answer as a site safety decision; avoid shortcuts that sound convenient but unsafe."
  ]
};
