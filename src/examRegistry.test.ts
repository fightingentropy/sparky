import { describe, expect, it } from "vitest";
import {
  DEFAULT_HIDDEN_EXAM_IDS,
  EXAM_REGISTRY,
  isExamIdArray
} from "./examRegistry";
import { VALID_EXAM_IDS } from "../functions/api/_lib/validExamIds";
import { PRIMARY_EXAM_IDS, PRIMARY_EXAM_TITLES } from "./examTaxonomy";

describe("exam visibility preferences", () => {
  it("hides only the distracting exam categories by default", () => {
    expect(DEFAULT_HIDDEN_EXAM_IDS).toEqual([
      "ecs-health-safety",
      "level-2-electrical-installation",
      "level-3-electrical-installation",
      "special-locations",
      "inspection-design-2396",
      "am2-installation-assessment"
    ]);
    expect(DEFAULT_HIDDEN_EXAM_IDS).not.toContain("initial-verification");
    expect(DEFAULT_HIDDEN_EXAM_IDS).not.toContain("fundamental-inspection-testing");
  });

  it("lists the six primary exams first using the exact published names", () => {
    expect(EXAM_REGISTRY.slice(0, PRIMARY_EXAM_IDS.length).map((exam) => exam.id))
      .toEqual(PRIMARY_EXAM_IDS);
    for (const examId of PRIMARY_EXAM_IDS) {
      expect(EXAM_REGISTRY.find((exam) => exam.id === examId)?.title)
        .toBe(PRIMARY_EXAM_TITLES[examId]);
    }
  });

  it("keeps the server exam allow-list in sync with the client registry", () => {
    expect([...VALID_EXAM_IDS].sort()).toEqual(
      EXAM_REGISTRY.map((exam) => exam.id).sort()
    );
  });

  it("accepts unique known exam ids only", () => {
    expect(isExamIdArray([...DEFAULT_HIDDEN_EXAM_IDS])).toBe(true);
    expect(isExamIdArray(["initial-verification"])).toBe(true);
    expect(isExamIdArray(["fundamental-inspection-testing"])).toBe(true);
    expect(isExamIdArray(["initial-verification", "initial-verification"])).toBe(false);
    expect(isExamIdArray(["not-an-exam"])).toBe(false);
  });
});
