import { describe, expect, it } from "vitest";
import initialVerificationExam from "./exam-data/initial-verification.json";
import {
  applyExamExplanationEnhancements,
  EXAM_EXPLANATION_OVERRIDES
} from "./examExplanationEnhancements";
import type { Exam } from "./exams/types";

const rawExam = initialVerificationExam as unknown as Exam;

function allQuestions(exam: Exam) {
  return exam.sections.flatMap((section) =>
    section.variants.flatMap((variant) => variant.questions)
  );
}

describe("exam explanation enhancements", () => {
  it("applies every curated explanation to the Initial Verification bank", () => {
    const enhanced = applyExamExplanationEnhancements(rawExam);
    const questions = allQuestions(enhanced);

    for (const [prompt, explanation] of Object.entries(EXAM_EXPLANATION_OVERRIDES)) {
      const matches = questions.filter((question) => question.prompt === prompt);
      expect(matches.length, `missing enhanced question: ${prompt}`).toBeGreaterThan(0);
      for (const question of matches) {
        expect(question.explanation).toBe(explanation);
        if (!prompt.includes("two additional socket-outlet circuits")) {
          expect(question.explanation).toContain("=");
          expect(question.explanation).not.toMatch(/calculation gives|works out/i);
        }
      }
    }
  });

  it("explains why both unrecorded socket circuits need testing", () => {
    const enhanced = applyExamExplanationEnhancements(rawExam);
    const question = allQuestions(enhanced).find((entry) =>
      entry.prompt.includes("What action should be taken with regard to the additional socket-outlet circuits?")
    );

    expect(question?.explanation).toContain("neither has evidence on which sampling can be based");
    expect(question?.explanation).toContain("relevant tests on both circuits");
    expect(question?.explanation).toContain("EICR schedules");
    expect(question?.explanation).not.toMatch(/safe or compliant/i);
  });

  it("repairs ambiguous wording and the mis-keyed circuit-details question", () => {
    const enhanced = applyExamExplanationEnhancements(rawExam);
    const variant = enhanced.sections
      .flatMap((section) => section.variants)
      .find((entry) => entry.id === "quiz-29749");

    expect(variant).toBeDefined();
    const question4 = variant!.questions.find((entry) => entry.number === 4);
    const question7 = variant!.questions.find((entry) => entry.number === 7);
    const question14 = variant!.questions.find((entry) => entry.number === 14);
    const question31 = variant!.questions.find((entry) => entry.number === 31);
    const question39 = variant!.questions.find((entry) => entry.number === 39);
    const question47 = variant!.questions.find((entry) => entry.number === 47);
    const question53 = variant!.questions.find((entry) => entry.number === 53);
    const question56 = variant!.questions.find((entry) => entry.number === 56);
    const question59 = variant!.questions.find((entry) => entry.number === 59);

    expect(question4?.prompt).toContain("when no current satisfactory report is available");
    expect(question7?.answer).toBe("B");
    expect(question7?.options.B).toBe("Schedule of Circuit Details");
    expect(question7?.explanation).toContain("circuit-design details");
    expect(Object.values(question14!.options).join(" ")).not.toContain("check compliance");
    expect(question31?.options.B).toBe("HSE GS38");
    expect(question31?.prompt).toContain("safety requirements for the probes and leads");
    expect(question39?.options.A).toContain("advise urgent remedial action");
    expect(question39?.explanation).not.toMatch(/inform.*without delay/i);
    expect(question47?.prompt).toContain("readily accessible horizontal top surface");
    expect(question47?.prompt).not.toContain("bottom horizontal surface");
    expect(question53?.prompt).toContain("line and neutral conductors");
    expect(question56?.options.A).toBe("r1, rn, r2 and R1+R2");
    expect(question59?.prompt).toContain("179 Ω, 172 Ω and 168 Ω");
    expect(question59?.explanation).toContain("÷ 3 = 173 Ω");
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
