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
          // Each section variant must hold at least one question. Bank
          // sizes vary per exam: most use a 20-30 Q pool that gets trimmed
          // at runtime to the hardest few, but `electrics` is generated at
          // exactly the per-test size (8) so the lower bound is small.
          expect(variant.questions.length).toBeGreaterThanOrEqual(1);

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

  it("keeps each exam at the configured per-attempt question count", () => {
    // Per-attempt totals after the SECTION_QUESTION_LIMITS trim that keeps
    // only the hardest questions per variant. The full underlying banks are
    // still 5 × the pre-trim variant size and live in the per-exam files.
    const expectedPerAttempt: Record<string, number> = {
      "electrics": 40,
      "building-regulations": 20,
      "18th-edition": 56,
      "pat-testing": 35,
      "initial-verification": 43,
      "periodic-inspection": 23,
      "condition-reporting": 23,
      "am2-installation-assessment": 50
    };

    for (const exam of EXAMS) {
      const expected = expectedPerAttempt[exam.id];
      expect(expected).toBeDefined();
      expect(countQuestions(exam)).toBe(expected);
      // All 5 variants should have the same per-attempt total
      for (let v = 0; v < 5; v += 1) {
        expect(countQuestionsForVariant(exam, v)).toBe(expected);
      }
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

  it("keeps the five attempt variants distinct for every exam", () => {
    for (const exam of EXAMS) {
      const signatures = new Set<string>();
      for (let v = 0; v < 5; v += 1) {
        const signature = getQuestionsForVariant(exam, v)
          .map((question) => question.prompt)
          .join("\n");
        expect(signatures.has(signature)).toBe(false);
        signatures.add(signature);
      }
    }
  });

  it("uses the official PAT homework set as the fifth PAT variation", () => {
    const exam = EXAMS.find((e) => e.id === "pat-testing");
    expect(exam).toBeDefined();

    const officialAttempt = getQuestionsForVariant(exam!, 4);
    expect(officialAttempt).toHaveLength(35);
    expect(officialAttempt[0].prompt).toBe(
      "Which of these does not describe a category of inspection and testing, referred to in the Code of Practice?"
    );
    expect(officialAttempt[34].prompt).toBe(
      "Which regulations place a legal requirement on a landlord, who provides electrical equipment as part of a tenancy, to ensure that it is safe when first supplied?"
    );
  });

  it("exposes the canonical exams in the expected order", () => {
    const ids = EXAMS.map((exam) => exam.id);
    expect(ids).toEqual([
      "electrics",
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
    expect(total).toBe(23);

    // 90% threshold = ceil(0.9 * 23) = 21
    expect(getScoringBand(exam!, 21, total).minScore).toBe(21);
    expect(getScoringBand(exam!, 23, total).minScore).toBe(21);
    // 70% threshold = ceil(0.7 * 23) = 17
    expect(getScoringBand(exam!, 17, total).minScore).toBe(17);
    expect(getScoringBand(exam!, 20, total).minScore).toBe(17);
    // 50% threshold = ceil(0.5 * 23) = 12
    expect(getScoringBand(exam!, 12, total).minScore).toBe(12);
    expect(getScoringBand(exam!, 16, total).minScore).toBe(12);
    // 0% (bottom band)
    expect(getScoringBand(exam!, 0, total).minScore).toBe(0);
    expect(getScoringBand(exam!, 11, total).minScore).toBe(0);
  });
});
