import { describe, expect, it } from "vitest";
import {
  DEFAULT_HIDDEN_EXAM_IDS,
  isExamIdArray
} from "./examRegistry";

describe("exam visibility preferences", () => {
  it("hides only the distracting exam categories by default", () => {
    expect(DEFAULT_HIDDEN_EXAM_IDS).toEqual([
      "ecs-health-safety",
      "level-2-electrical-installation",
      "level-3-electrical-installation",
      "am2-installation-assessment"
    ]);
    expect(DEFAULT_HIDDEN_EXAM_IDS).not.toContain("initial-verification");
  });

  it("accepts unique known exam ids only", () => {
    expect(isExamIdArray([...DEFAULT_HIDDEN_EXAM_IDS])).toBe(true);
    expect(isExamIdArray(["initial-verification"])).toBe(true);
    expect(isExamIdArray(["initial-verification", "initial-verification"])).toBe(false);
    expect(isExamIdArray(["not-an-exam"])).toBe(false);
  });
});
