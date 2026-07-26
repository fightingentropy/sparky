export const PRIMARY_EXAM_TITLES = {
  "building-regulations": "Building Regulations",
  "18th-edition": "Wiring Regulations (18th Edition)",
  "fundamental-inspection-testing": "Fundamental Inspection and Testing",
  "pat-testing": "Portable Appliance Testing",
  "periodic-inspection": "Periodic Inspection and Testing (Condition Reporting)",
  "initial-verification": "Initial Verification"
} as const;

export const PRIMARY_EXAM_IDS = [
  "building-regulations",
  "18th-edition",
  "fundamental-inspection-testing",
  "pat-testing",
  "periodic-inspection",
  "initial-verification"
] as const;

export type PrimaryExamId = (typeof PRIMARY_EXAM_IDS)[number];
