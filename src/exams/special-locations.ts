import type { Exam } from "./types";
import { electricianTrainingSpecialLocationsSourceSection } from "./electrician-training-source";

export const specialLocationsExam: Exam = {
  id: "special-locations",
  title: "Special Locations",
  subtitle: "Copied ElectricianTraining special locations mock test",
  description:
    "A source-matched special locations exam copied from the ElectricianTraining mock test. It covers BS 7671 Part 7 style questions on rooms containing baths or showers, medical locations, caravan parks, marinas, swimming pools, saunas and similar higher-risk installations.",
  format: "One 30-question source mock. Pass at 60%+ to match the source.",
  passPercent: 0.6,
  sections: [electricianTrainingSpecialLocationsSourceSection],
  scoring: [
    { threshold: 0.9, label: "Strong — secure on special-location source questions" },
    { threshold: 0.6, label: "Pass — review the missed Part 7 requirements" },
    { threshold: 0.45, label: "Near miss — revise special-location zones and protective measures" },
    { threshold: 0, label: "Major gaps — rebuild Part 7 fundamentals first" }
  ],
  priorities: [
    "Bath and shower zones, socket restrictions, RCD protection and IP requirements.",
    "Swimming pools, saunas, medical locations, caravan parks and marinas.",
    "Special-location disconnection, supplementary bonding and equipment selection.",
    "Exceptions and exact wording in BS 7671 Part 7.",
    "Read for the false or exception-based option; the source questions use close distractors."
  ]
};
