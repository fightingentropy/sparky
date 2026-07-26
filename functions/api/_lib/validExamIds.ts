// Mirror of EXAM_REGISTRY in src/examRegistry.ts. Kept free of client and
// authentication imports so server validation can be parity-tested directly.
export const VALID_EXAM_IDS = new Set([
  "level-2-electrical-installation",
  "level-3-electrical-installation",
  "building-regulations",
  "18th-edition",
  "special-locations",
  "pat-testing",
  "fundamental-inspection-testing",
  "initial-verification",
  "inspection-design-2396",
  "periodic-inspection",
  "am2-installation-assessment",
  "ecs-health-safety",
]);
