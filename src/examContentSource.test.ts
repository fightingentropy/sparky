import { describe, expect, it } from "vitest";

import { applyExamContentSource } from "./examContentSource";
import type { Exam } from "./exams/types";

describe("exam content provenance", () => {
  it("records a dated source classification on every question", () => {
    const source: Exam = {
      id: "example",
      title: "Example",
      subtitle: "Example",
      description: "Example",
      format: "One question",
      passPercent: 0.5,
      scoring: [{ threshold: 0, label: "Review" }],
      priorities: ["Safety"],
      sections: [
        {
          id: "section",
          title: "Section",
          variants: [
            {
              id: "test-1",
              questions: [
                {
                  number: 1,
                  prompt: "Question?",
                  options: { A: "A", B: "B", C: "C", D: "D" },
                  answer: "A",
                  explanation: "Because A is correct.",
                },
              ],
            },
          ],
        },
      ],
    };

    const result = applyExamContentSource(source);
    const provenance = result.contentSources?.[0];

    expect(provenance?.classification).toBe("exam-convention");
    expect(provenance?.recordedOn).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    expect(result.sections[0].variants[0].questions[0].sourceIds).toEqual([
      provenance?.id,
    ]);
  });
});
