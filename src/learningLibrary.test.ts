import { describe, expect, it } from "vitest";
import { COURSE_GUIDES } from "./courseGuides";
import { findLearningGuides, suggestedLearningGuide } from "./learningLibrary";

describe("learning library", () => {
  it("finds PAT without matching unrelated words such as occupational", () => {
    expect(findLearningGuides(" PAT ").map((guide) => guide.id)).toEqual(["pat-eet-equipment"]);
    expect(findLearningGuides("portable appl").map((guide) => guide.id)).toEqual(["pat-eet-equipment"]);
    expect(findLearningGuides("portable zzzzz")).toEqual([]);
    expect(findLearningGuides("   ")).toHaveLength(COURSE_GUIDES.length);
    expect(findLearningGuides("!!!")).toEqual([]);
  });

  it("resumes an unfinished guide and advances after completion", () => {
    const [first, second] = COURSE_GUIDES;
    expect(suggestedLearningGuide([], second.id)?.id).toBe(second.id);
    expect(suggestedLearningGuide([second.id], second.id)?.id).toBe(first.id);
    expect(suggestedLearningGuide([], "removed-guide")?.id).toBe(first.id);
    expect(suggestedLearningGuide(COURSE_GUIDES.map((guide) => guide.id), second.id)).toBeUndefined();
  });
});
