import { describe, expect, it } from "vitest";
import eighteenthEditionExam from "./exam-data/18th-edition.json";
import { applyExamSolutionTables } from "./examSolutionTables";
import type { Exam } from "./exams/types";

const rawExam = eighteenthEditionExam as unknown as Exam;

function allQuestions(exam: Exam) {
  return exam.sections.flatMap((section) =>
    section.variants.flatMap((variant) => variant.questions)
  );
}

describe("exam solution tables", () => {
  it("adds focused lookup panels to questions with identifiable standards locators", () => {
    const enhanced = applyExamSolutionTables(rawExam);
    const referencedQuestions = allQuestions(enhanced).filter(
      (question) => question.solutionTables?.length
    );

    expect(referencedQuestions).toHaveLength(73);
    for (const question of referencedQuestions) {
      const table = question.solutionTables?.[0];
      expect(table?.rows).toHaveLength(1);
      expect(table?.rows[0][1]).toBe(question.options[question.answer]);
      expect(table?.source.status).toBe("source-citation");
      expect(table?.source.edition).toContain("not recorded");
      expect(table?.note).toContain("not a reproduction");
    }
  });

  it("shows the exact locator and keyed result for a Zs table question", () => {
    const enhanced = applyExamSolutionTables(rawExam);
    const question = allQuestions(enhanced).find((entry) =>
      entry.prompt.includes("maximum Zs value for TN-S, 400V AC")
    );
    const table = question?.solutionTables?.[0];

    expect(table?.source.publication).toBe("BS 7671");
    expect(table?.source.locator).toBe("Table 41.4");
    expect(table?.rows[0]).toEqual(["Table 41.4", "0.78Ω"]);
    expect(table?.source.url).toContain("ensure-you-are-up-to-date");
  });

  it("does not mutate the lazily loaded source data", () => {
    const originalQuestion = allQuestions(rawExam).find((entry) =>
      entry.prompt.includes("maximum Zs value for TN-S, 400V AC")
    );

    applyExamSolutionTables(rawExam);

    expect(originalQuestion?.solutionTables).toBeUndefined();
  });
});
