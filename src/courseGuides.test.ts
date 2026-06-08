import { describe, expect, it } from "vitest";
import { COURSE_GUIDES } from "./courseGuides";
import { isKnownExamId } from "./examRegistry";

const expectedGuidedExamIds = [
  "level-2-electrical-installation",
  "level-3-electrical-installation",
  "building-regulations",
  "18th-edition",
  "special-locations",
  "pat-testing",
  "initial-verification",
  "inspection-design-2396",
  "periodic-inspection",
  "am2-installation-assessment",
  "ecs-health-safety"
] as const;

describe("course guides", () => {
  it("has valid guide content and source metadata", () => {
    const ids = new Set<string>();

    for (const guide of COURSE_GUIDES) {
      expect(ids.has(guide.id)).toBe(false);
      ids.add(guide.id);
      expect(guide.title.trim()).toBe(guide.title);
      expect(guide.title.length).toBeGreaterThan(0);
      expect(guide.summary.length).toBeGreaterThan(30);
      expect(guide.sourceUrl).toMatch(/^https:\/\/electriciantraining\.co\.uk\//);
      expect(guide.sourceLabel.length).toBeGreaterThan(0);
      expect(guide.facts.length).toBeGreaterThanOrEqual(3);
      expect(guide.sections.length).toBeGreaterThanOrEqual(3);
      expect(guide.pitfalls.length).toBeGreaterThanOrEqual(3);
      expect(guide.nextActions.length).toBeGreaterThanOrEqual(3);

      if (guide.examId) {
        expect(isKnownExamId(guide.examId)).toBe(true);
        expect(guide.examLabel).toBeTruthy();
      }

      for (const fact of guide.facts) {
        expect(fact.label.length).toBeGreaterThan(0);
        expect(fact.value.length).toBeGreaterThan(0);
      }

      for (const section of guide.sections) {
        expect(section.title.length).toBeGreaterThan(0);
        expect(section.items.length).toBeGreaterThan(0);
        for (const item of section.items) {
          expect(item.length).toBeGreaterThan(0);
        }
      }
    }
  });

  it("covers every active exam category with at least one guide", () => {
    const guidedExamIds = new Set(COURSE_GUIDES.flatMap((guide) => (guide.examId ? [guide.examId] : [])));
    expect([...guidedExamIds].sort()).toEqual([...expectedGuidedExamIds].sort());
  });

  it("references multiple distinct source URLs", () => {
    const distinctSourceUrls = new Set(COURSE_GUIDES.map((guide) => guide.sourceUrl));
    expect(distinctSourceUrls.size).toBeGreaterThan(1);
  });
});
