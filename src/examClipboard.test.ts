import { describe, expect, it } from "vitest";
import {
  getExamClipboardText,
  getQuestionClipboardText,
  SPOKEN_REVISION_PREAMBLE
} from "./examClipboard";
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

  it("copies the spoken revision instructions before the full exam", () => {
    const text = getExamClipboardText([
      { questions: [question] },
      { questions: [{ ...question, number: 13, prompt: "What colour is neutral?", answer: "B" }] }
    ]);

    expect(text).toBe(
      [
        SPOKEN_REVISION_PREAMBLE,
        "",
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
    expect(text).toContain(
      "Remember throughout the session that I always want both the answer and the reason.\n\nHere are the questions:\n\nQ12"
    );
    expect(text).toContain(
      "Read the question and every option, then pause and wait for my answer before revealing anything."
    );
    expect(text).toContain(
      "Do not give the correct option, hint at it, or explain it until I have answered or said that I do not know."
    );
  });
});
