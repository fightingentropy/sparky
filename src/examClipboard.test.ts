import { describe, expect, it } from "vitest";
import { getExamClipboardText, getQuestionClipboardText } from "./examClipboard";
import type { ExamQuestion } from "./exams/types";

const question: ExamQuestion = {
  number: 12,
  prompt: "Which conductor is the protective conductor?",
  options: {
    A: "Brown",
    B: "Blue",
    C: "Green and yellow",
    D: "Black"
  },
  answer: "C",
  explanation: "Green and yellow identifies the protective conductor."
};

describe("exam clipboard text", () => {
  it("copies an individual question without revealing the answer", () => {
    const text = getQuestionClipboardText(question);

    expect(text).toContain("Q12\nWhich conductor is the protective conductor?");
    expect(text).toContain("C. Green and yellow");
    expect(text).not.toContain("Answer:");
    expect(text).not.toContain("Explanation:");
  });

  it("copies the full exam as questions, answers and explanations only", () => {
    const text = getExamClipboardText([
      { questions: [question] },
      { questions: [{ ...question, number: 13, prompt: "What colour is neutral?", answer: "B" }] }
    ]);

    expect(text).toBe(
      [
        "Q12",
        "Which conductor is the protective conductor?",
        "",
        "A. Brown",
        "B. Blue",
        "C. Green and yellow",
        "D. Black",
        "",
        "Answer: C. Green and yellow",
        "Explanation: Green and yellow identifies the protective conductor.",
        "",
        "Q13",
        "What colour is neutral?",
        "",
        "A. Brown",
        "B. Blue",
        "C. Green and yellow",
        "D. Black",
        "",
        "Answer: B. Blue",
        "Explanation: Green and yellow identifies the protective conductor."
      ].join("\n")
    );
    expect(text).not.toContain("Format:");
    expect(text).not.toContain("Test:");
  });
});
