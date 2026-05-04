import { describe, expect, it } from "vitest";
import {
  EXAMS,
  countQuestions,
  countQuestionsForVariant,
  countQuestionsTotal,
  getPassMark,
  getScoringBand,
  getScoringRanges,
  getVariantCount,
  getQuestionsForVariant
} from "./exams";

describe("exam data", () => {
  it("has valid variants, sections, and percentage-based scoring bands", () => {
    for (const exam of EXAMS) {
      expect(exam.passPercent).toBeGreaterThan(0);
      expect(exam.passPercent).toBeLessThanOrEqual(1);
      expect(exam.scoring.length).toBeGreaterThan(0);

      const variantCount = getVariantCount(exam);
      expect(variantCount).toBe(5);

      const sectionIds = new Set<string>();
      for (const section of exam.sections) {
        expect(sectionIds.has(section.id)).toBe(false);
        sectionIds.add(section.id);
        expect(section.title).toBeTruthy();
        expect(section.variants.length).toBe(5);

        const variantIds = new Set<string>();
        for (const variant of section.variants) {
          expect(variantIds.has(variant.id)).toBe(false);
          variantIds.add(variant.id);
          expect(variant.questions.length).toBeGreaterThanOrEqual(20);

          const questionNumbers = new Set<number>();
          for (const question of variant.questions) {
            expect(questionNumbers.has(question.number)).toBe(false);
            questionNumbers.add(question.number);
            expect(question.prompt.trim()).toBe(question.prompt);
            expect(question.prompt.length).toBeGreaterThan(0);
            expect(question.explanation.trim()).toBe(question.explanation);
            expect(question.options[question.answer]).toBeTruthy();
            for (const choice of Object.values(question.options)) {
              expect(choice.trim()).toBe(choice);
              expect(choice.length).toBeGreaterThan(0);
            }
          }
        }
      }

      // Each variant attempt should have unique prompts within itself
      for (let v = 0; v < variantCount; v += 1) {
        const prompts = new Set<string>();
        for (const section of exam.sections) {
          for (const q of section.variants[v].questions) {
            expect(prompts.has(q.prompt)).toBe(false);
            prompts.add(q.prompt);
          }
        }
      }

      // Scoring thresholds should be in descending order with 0 at the end
      const sorted = [...exam.scoring].sort((a, b) => b.threshold - a.threshold);
      expect(sorted[sorted.length - 1].threshold).toBe(0);
      for (let i = 1; i < sorted.length; i += 1) {
        expect(sorted[i - 1].threshold).toBeGreaterThan(sorted[i].threshold);
      }
    }
  });

  it("keeps each exam at expected per-attempt and total question counts", () => {
    const expectedPerAttempt: Record<string, number> = {
      "building-regulations": 115,
      "18th-edition": 140,
      "pat-testing": 115,
      "initial-verification": 190,
      "periodic-inspection": 115,
      "condition-reporting": 110,
      "am2-installation-assessment": 145
    };

    for (const exam of EXAMS) {
      const expected = expectedPerAttempt[exam.id];
      expect(expected).toBeDefined();
      expect(countQuestions(exam)).toBe(expected);
      // All 5 variants should have the same per-attempt total
      for (let v = 0; v < 5; v += 1) {
        expect(countQuestionsForVariant(exam, v)).toBe(expected);
      }
      // Total across variants is 5 × per-attempt
      expect(countQuestionsTotal(exam)).toBe(expected * 5);
    }
  });

  it("renumbers questions sequentially across sections in each variant", () => {
    for (const exam of EXAMS) {
      for (let v = 0; v < 5; v += 1) {
        const questions = getQuestionsForVariant(exam, v);
        for (let i = 0; i < questions.length; i += 1) {
          expect(questions[i].number).toBe(i + 1);
        }
      }
    }
  });

  it("preserves the original 7 exams and their canonical IDs", () => {
    const ids = EXAMS.map((exam) => exam.id);
    expect(ids).toEqual([
      "building-regulations",
      "18th-edition",
      "pat-testing",
      "initial-verification",
      "periodic-inspection",
      "condition-reporting",
      "am2-installation-assessment"
    ]);
  });

  it("computes pass marks at 70% by default", () => {
    for (const exam of EXAMS) {
      expect(exam.passPercent).toBe(0.7);
      const total = countQuestions(exam);
      expect(getPassMark(exam, total)).toBe(Math.ceil(0.7 * total));
    }
  });

  it("returns scoring ranges that cover the full score range", () => {
    for (const exam of EXAMS) {
      const total = countQuestions(exam);
      const ranges = getScoringRanges(exam, total);
      expect(ranges.length).toBe(exam.scoring.length);
      // Top band's max should equal total
      expect(ranges[0].range).toContain(`${total}`);
      // Bottom band's minScore should be 0
      expect(ranges[ranges.length - 1].minScore).toBe(0);
    }
  });

  it("scores correct counts into descending bands", () => {
    const exam = EXAMS.find((e) => e.id === "condition-reporting");
    expect(exam).toBeDefined();
    const total = countQuestions(exam!);
    expect(total).toBe(110);

    // 90% threshold = ceil(0.9 * 110) = 99
    expect(getScoringBand(exam!, 99, total).minScore).toBe(99);
    expect(getScoringBand(exam!, 110, total).minScore).toBe(99);
    // 70% threshold = ceil(0.7 * 110) = 77
    expect(getScoringBand(exam!, 77, total).minScore).toBe(77);
    expect(getScoringBand(exam!, 98, total).minScore).toBe(77);
    // 50% threshold = ceil(0.5 * 110) = 55
    expect(getScoringBand(exam!, 55, total).minScore).toBe(55);
    expect(getScoringBand(exam!, 76, total).minScore).toBe(55);
    // 0% (bottom band)
    expect(getScoringBand(exam!, 0, total).minScore).toBe(0);
    expect(getScoringBand(exam!, 54, total).minScore).toBe(0);
  });
});
