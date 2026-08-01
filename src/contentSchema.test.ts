import { describe, expect, it } from "vitest";

import {
  CALCULATOR_DEFINITIONS,
  CONTENT_MANIFEST_SCHEMA_VERSION,
  CONTENT_PROVENANCE_PROFILE_VERSION,
  CONTENT_SCHEMA_VERSION,
  hashProvenanceRecord,
  type ContentSource,
} from "./contentSchema";

const REQUIRED_SOURCE_TEXT_FIELDS = [
  "id",
  "jurisdiction",
  "documentIdentifier",
  "edition",
  "amendment",
  "effectiveDate",
  "recordedOn",
  "locator",
  "sectionOrTable",
  "profileVersion",
  "contentVersion",
  "sourceHash",
] as const satisfies readonly (keyof ContentSource)[];

describe("content schema metadata", () => {
  it("uses explicit, positive schema versions", () => {
    expect(CONTENT_SCHEMA_VERSION).toBeGreaterThan(0);
    expect(CONTENT_MANIFEST_SCHEMA_VERSION).toBeGreaterThan(0);
    expect(CONTENT_PROVENANCE_PROFILE_VERSION).toBe("sparky-provenance-v1");
  });

  it("records complete provenance and rounding metadata for every calculator", () => {
    expect(CALCULATOR_DEFINITIONS).toHaveLength(10);
    expect(new Set(CALCULATOR_DEFINITIONS.map(({ id }) => id)).size).toBe(
      CALCULATOR_DEFINITIONS.length,
    );
    const calculatorSources = CALCULATOR_DEFINITIONS.flatMap((calculator) => [
      calculator.source,
      ...(calculator.additionalSources ?? []),
    ]);
    expect(new Set(calculatorSources.map(({ id }) => id)).size).toBe(
      calculatorSources.length,
    );

    for (const calculator of CALCULATOR_DEFINITIONS) {
      expect(calculator.algorithmVersion).toBeGreaterThan(0);
      expect(calculator.units.length).toBeGreaterThan(0);
      expect(calculator.precision.trim()).not.toBe("");
      expect(calculator.roundingRule.trim()).not.toBe("");

      for (const source of [
        calculator.source,
        ...(calculator.additionalSources ?? []),
      ]) {
        for (const field of REQUIRED_SOURCE_TEXT_FIELDS) {
          const value = source[field];
          expect(typeof value, `${calculator.id}/${source.id}.${field}`).toBe("string");
          expect(value.trim(), `${calculator.id}/${source.id}.${field}`).not.toBe("");
        }

        expect(source.recordedOn).toMatch(/^\d{4}-\d{2}-\d{2}$/);
        expect(source.sourceHash).toMatch(/^fnv1a64:[a-f0-9]{16}$/);
        expect(source.sourceHashScope).toBe("provenance-record");
        expect(typeof source.needsLicensedConfirmation).toBe("boolean");
        expect(typeof source.needsEditorialConfirmation).toBe("boolean");

        const containsUnconfirmedMetadata = [
          source.jurisdiction,
          source.edition,
          source.amendment,
          source.effectiveDate,
        ].some((value) => /unconfirmed/i.test(value));
        if (containsUnconfirmedMetadata) {
          expect(
            source.needsEditorialConfirmation,
            `${calculator.id}/${source.id} must flag unconfirmed metadata`,
          ).toBe(true);
        }
      }
    }
  });

  it("distinguishes licensed standards from open guidance and local conventions", () => {
    const voltageDrop = CALCULATOR_DEFINITIONS.find(
      ({ id }) => id === "voltage-drop",
    );
    const structuralLimits = CALCULATOR_DEFINITIONS.find(
      ({ id }) => id === "structural-limits",
    );

    expect(voltageDrop?.source).toMatchObject({
      classification: "standard",
      jurisdiction: "United Kingdom",
      documentIdentifier: "BS 7671",
      edition: "2018",
      amendment: "Amendment 4:2026",
      effectiveDate: "2026-04-15",
      sectionOrTable: "Appendix 4",
      needsLicensedConfirmation: true,
      needsEditorialConfirmation: false,
    });
    expect(voltageDrop?.source.limitations).toContain("15 October 2026");

    expect(structuralLimits?.source).toMatchObject({
      classification: "guidance",
      jurisdiction: "England",
      documentIdentifier: "Approved Document A",
      edition: "2004 edition",
      amendment: "2004, 2010 and April 2013 amendments",
      needsLicensedConfirmation: false,
      needsEditorialConfirmation: true,
    });
    expect(structuralLimits?.source.effectiveDate).toMatch(/^Unconfirmed/);
    expect(structuralLimits?.additionalSources).toEqual([
      expect.objectContaining({
        classification: "exam-convention",
        documentIdentifier: "Sparky joist-notch training convention",
        needsEditorialConfirmation: true,
      }),
    ]);
  });

  it("produces stable, explicitly scoped local provenance fingerprints", () => {
    expect(hashProvenanceRecord(["BS 7671", "Appendix 4"])).toBe(
      hashProvenanceRecord(["BS 7671", "Appendix 4"]),
    );
    expect(hashProvenanceRecord(["BS 7671", "Appendix 4"])).not.toBe(
      hashProvenanceRecord(["BS 7671", "Table 41.1"]),
    );
  });
});
