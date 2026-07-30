import { describe, expect, it } from "vitest";
import eighteenthEditionData from "../exam-data/18th-edition.json";
import { applyExamExplanationEnhancements } from "../examExplanationEnhancements";
import { buildOptionExplanations } from "../examOptionExplanations";
import type { Exam } from "../exams/types";

const exam = applyExamExplanationEnhancements(
  eighteenthEditionData as unknown as Exam,
);
const variants = new Map(
  exam.sections
    .flatMap((section) => section.variants)
    .map((variant) => [variant.id, variant] as const),
);

function question(variantId: string, number: number) {
  const result = variants
    .get(variantId)
    ?.questions.find((entry) => entry.number === number);
  if (!result) throw new Error(`Missing ${variantId} Q${number}`);
  return result;
}

describe("18th Edition fault-protection distractor teaching", () => {
  it.each([
    ["quiz-29707", 40],
    ["quiz-29715", 10],
  ])("distinguishes basic protection from fault protection in %s Q%i", (variantId, number) => {
    const feedback = buildOptionExplanations(question(variantId, number));

    expect(feedback.A).toContain("form part of automatic disconnection");
    expect(feedback.A).toContain("fault-current path");
    expect(feedback.B).toContain("recognised fault-protection measure");
    expect(feedback.B).toContain("isolated secondary");
    expect(feedback.D).toContain("double or reinforced insulation");
  });

  it.each([["quiz-29708", 59]])(
    "explains the public-street constraints in %s Q%i",
    (variantId, number) => {
    const feedback = buildOptionExplanations(question(variantId, number));

    expect(feedback.A).toContain("Wet ground, public access and nearby metalwork");
    expect(feedback.A).toContain("Section 714 does not permit");
    expect(feedback.C).toContain("controlled zone isolated from Earth");
    expect(feedback.C).toContain("Section 714 does not permit");
    expect(feedback.D).toContain("one item supplied from its own isolating source");
    expect(feedback.D).toContain("public distribution circuit");
    },
  );
});
