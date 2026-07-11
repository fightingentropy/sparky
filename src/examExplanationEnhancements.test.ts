import { describe, expect, it } from "vitest";
import initialVerificationExam from "./exam-data/initial-verification.json";
import {
  applyExamExplanationEnhancements,
  CALCULATION_EXPLANATION_OVERRIDES
} from "./examExplanationEnhancements";
import type { Exam } from "./exams/types";

const rawExam = initialVerificationExam as unknown as Exam;

function allQuestions(exam: Exam) {
  return exam.sections.flatMap((section) =>
    section.variants.flatMap((variant) => variant.questions)
  );
}

describe("calculation explanation enhancements", () => {
  it("applies every curated calculation explanation to the Initial Verification bank", () => {
    const enhanced = applyExamExplanationEnhancements(rawExam);
    const questions = allQuestions(enhanced);

    for (const [prompt, explanation] of Object.entries(CALCULATION_EXPLANATION_OVERRIDES)) {
      const matches = questions.filter((question) => question.prompt === prompt);
      expect(matches.length, `missing calculation question: ${prompt}`).toBeGreaterThan(0);
      for (const question of matches) {
        expect(question.explanation).toBe(explanation);
        expect(question.explanation).toContain("=");
        expect(question.explanation).not.toMatch(/calculation gives|works out/i);
      }
    }
  });

  it("shows the complete working for the 43 m bonding-conductor question", () => {
    const enhanced = applyExamExplanationEnhancements(rawExam);
    const question = allQuestions(enhanced).find((entry) =>
      entry.prompt.includes("expected measured conductor resistance value")
    );

    expect(question?.explanation).toContain("R = 1.83 mΩ/m × 43 m");
    expect(question?.explanation).toContain("78.69 mΩ = 0.0787 Ω");
    expect(question?.explanation).toContain("0.08 Ω");
  });

  it("does not mutate the lazily loaded source data", () => {
    const original = allQuestions(rawExam).find((entry) =>
      entry.prompt.includes("expected measured conductor resistance value")
    )?.explanation;

    applyExamExplanationEnhancements(rawExam);

    expect(allQuestions(rawExam).find((entry) =>
      entry.prompt.includes("expected measured conductor resistance value")
    )?.explanation).toBe(original);
  });
});
