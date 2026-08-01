import { describe, expect, it } from "vitest";

import {
  CALCULATOR_DEFINITIONS,
  CONTENT_MANIFEST_SCHEMA_VERSION,
  CONTENT_SCHEMA_VERSION
} from "./contentSchema";

describe("content schema metadata", () => {
  it("uses explicit, positive schema versions", () => {
    expect(CONTENT_SCHEMA_VERSION).toBeGreaterThan(0);
    expect(CONTENT_MANIFEST_SCHEMA_VERSION).toBeGreaterThan(0);
  });

  it("records traceability and rounding for every calculator", () => {
    expect(CALCULATOR_DEFINITIONS).toHaveLength(10);
    expect(new Set(CALCULATOR_DEFINITIONS.map(({ id }) => id)).size).toBe(
      CALCULATOR_DEFINITIONS.length
    );

    for (const calculator of CALCULATOR_DEFINITIONS) {
      expect(calculator.algorithmVersion).toBeGreaterThan(0);
      expect(calculator.units.length).toBeGreaterThan(0);
      expect(calculator.precision.trim()).not.toBe("");
      expect(calculator.roundingRule.trim()).not.toBe("");
      expect(calculator.source.documentIdentifier.trim()).not.toBe("");
      expect(calculator.source.edition.trim()).not.toBe("");
      expect(calculator.source.recordedOn).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(calculator.source.locator.trim()).not.toBe("");
    }
  });
});
