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
        for (const question of getQuestionsForVariant(exam, v)) {
          expect(prompts.has(question.prompt)).toBe(false);
          prompts.add(question.prompt);
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
    // Per-attempt totals after any SECTION_QUESTION_LIMITS trim that keeps
    // only the hardest questions per variant for the larger generated banks.
    const expectedPerAttempt: Record<string, number> = {
      "electrics": 40,
      "building-regulations": 20,
      "18th-edition": 60,
      "pat-testing": 50,
      "initial-verification": 40,
      "periodic-inspection": 40,
      "condition-reporting": 40,
      "am2-installation-assessment": 30
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

  it("uses the 50-question PAT mock as the fifth PAT variation", () => {
    const exam = EXAMS.find((e) => e.id === "pat-testing");
    expect(exam).toBeDefined();

    const mockAttempt = getQuestionsForVariant(exam!, 4);
    expect(mockAttempt).toHaveLength(50);
    expect(mockAttempt[0].prompt).toBe("Class I equipment:");
    expect(mockAttempt[49].prompt).toBe(
      "The test current applied to an electric kettle fitted with a 13A fuse during an earth continuity test would normally be:"
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

  it("computes pass marks from each exam's configured percentage", () => {
    for (const exam of EXAMS) {
      const total = countQuestions(exam);
      expect(getPassMark(exam, total)).toBe(Math.ceil(exam.passPercent * total));
    }
  });

  it("includes the 2391 mock drill inside the initial-verification exam", () => {
    const exam = EXAMS.find((e) => e.id === "initial-verification");
    expect(exam).toBeDefined();
    expect(exam!.sections.map((section) => section.id)).toContain("section-8-2391-mock");
    const mockAttempt = getQuestionsForVariant(exam!, 4);
    expect(mockAttempt).toHaveLength(40);
    expect(mockAttempt[0].prompt).toBe("What is the main purpose of an Initial Verification?");
    expect(mockAttempt[39].prompt).toBe("What is the purpose of the phase-sequence test?");
  });

  it("serves copied ElectricianTraining mocks as fifth attempts in matching categories", () => {
    const expected: Record<string, { length: number; firstPrompt: string }> = {
      "building-regulations": {
        length: 20,
        firstPrompt: "Part 'A' of the building, states that horizontal chases should not be deeper than:"
      },
      "18th-edition": {
        length: 60,
        firstPrompt: "BS 7671:2018 applies to electrical installations in"
      },
      "am2-installation-assessment": {
        length: 30,
        firstPrompt:
          "Which statutory regulations lay down the measures which must be taken to ensure the safe installation and use of electrical equipment:"
      }
    };

    for (const [examId, sourceMock] of Object.entries(expected)) {
      const exam = EXAMS.find((e) => e.id === examId);
      expect(exam).toBeDefined();
      const mockAttempt = getQuestionsForVariant(exam!, 4);
      expect(mockAttempt).toHaveLength(sourceMock.length);
      expect(mockAttempt[0].prompt).toBe(sourceMock.firstPrompt);
    }
  });

  it("keeps inspection and testing exams at the stricter pass threshold", () => {
    for (const examId of ["initial-verification", "periodic-inspection", "condition-reporting"]) {
      const exam = EXAMS.find((e) => e.id === examId);
      expect(exam).toBeDefined();
      expect(exam!.passPercent).toBe(0.75);
    }
  });

  it("aligns direct public mock categories to their current served pass thresholds", () => {
    const expectedPassPercent: Record<string, number> = {
      "building-regulations": 0.6,
      "18th-edition": 0.6,
      "pat-testing": 0.8,
      "am2-installation-assessment": 0.6
    };

    for (const [examId, passPercent] of Object.entries(expectedPassPercent)) {
      const exam = EXAMS.find((e) => e.id === examId);
      expect(exam).toBeDefined();
      expect(exam!.passPercent).toBe(passPercent);
    }
  });

  it("keeps served distractors plausible in hardened mock categories", () => {
    const weakDistractorPattern =
      /\b(only|always|never|verbal|customer invoice|lunch|DNO|skip|assume|trust|no further action|nothing|no paperwork|satisfactory only|FI only|C3 only|all good)\b/i;

    for (const examId of [
      "building-regulations",
      "18th-edition",
      "pat-testing",
      "initial-verification",
      "periodic-inspection",
      "condition-reporting",
      "am2-installation-assessment"
    ]) {
      const exam = EXAMS.find((e) => e.id === examId);
      expect(exam).toBeDefined();
      for (let v = 0; v < 5; v += 1) {
        if (
          v === 4 &&
          [
            "building-regulations",
            "18th-edition",
            "pat-testing",
            "initial-verification",
            "am2-installation-assessment"
          ].includes(examId)
        ) {
          continue;
        }
        for (const question of getQuestionsForVariant(exam!, v)) {
          for (const [letter, option] of Object.entries(question.options)) {
            if (letter === question.answer) continue;
            expect(option).not.toMatch(weakDistractorPattern);
          }
        }
      }
    }
  });

  it("balances served answer letters in inspection and testing exams", () => {
    for (const examId of ["initial-verification", "periodic-inspection", "condition-reporting"]) {
      const exam = EXAMS.find((e) => e.id === examId);
      expect(exam).toBeDefined();
      const counts: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
      let total = 0;
      for (let v = 0; v < 5; v += 1) {
        for (const question of getQuestionsForVariant(exam!, v)) {
          counts[question.answer] += 1;
          total += 1;
        }
      }

      for (const count of Object.values(counts)) {
        expect(count / total).toBeGreaterThan(0.12);
        expect(count / total).toBeLessThan(0.4);
      }
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
    expect(total).toBe(40);

    // 90% threshold = ceil(0.9 * 40) = 36
    expect(getScoringBand(exam!, 36, total).minScore).toBe(36);
    expect(getScoringBand(exam!, 40, total).minScore).toBe(36);
    // 75% threshold = ceil(0.75 * 40) = 30
    expect(getScoringBand(exam!, 30, total).minScore).toBe(30);
    expect(getScoringBand(exam!, 35, total).minScore).toBe(30);
    // 50% threshold = ceil(0.5 * 40) = 20
    expect(getScoringBand(exam!, 20, total).minScore).toBe(20);
    expect(getScoringBand(exam!, 29, total).minScore).toBe(20);
    // 0% (bottom band)
    expect(getScoringBand(exam!, 0, total).minScore).toBe(0);
    expect(getScoringBand(exam!, 19, total).minScore).toBe(0);
  });
});
