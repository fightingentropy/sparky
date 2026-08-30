import { describe, expect, it } from "vitest";
import { getQuestionChatGPTPrompt, getQuestionChatGPTUrl } from "./chatgptQuestion";
import type { ExamQuestion } from "./exams/types";

const question: ExamQuestion = {
  number: 2,
  prompt: "For an unplugged Class I appliance, where does the continuity test connect?",
  options: {
    A: "The main earth terminal",
    B: "The neutral conductor",
    C: "Any supplementary bond",
    D: "The earth pin of the plug"
  },
  answer: "D",
  explanation: "The test confirms continuity between accessible earthed metal and the plug earth pin."
};

describe("ChatGPT question handoff", () => {
  it("builds a complete tutoring prompt with answer-key context", () => {
    const prompt = getQuestionChatGPTPrompt(question);

    expect(prompt).toContain("what knowledge or distinction the question is testing");
    expect(prompt).toContain("why each other option is wrong");
    expect(prompt).toContain("How to think about questions like this");
    expect(prompt).toContain(question.prompt);
    expect(prompt).toContain("D. The earth pin of the plug");
    expect(prompt).toContain("Answer: D. The earth pin of the plug");
    expect(prompt).toContain(`Explanation: ${question.explanation}`);
  });

  it("encodes the tutoring prompt into a ChatGPT URL", () => {
    const url = new URL(getQuestionChatGPTUrl(question));

    expect(url.origin).toBe("https://chatgpt.com");
    expect(url.pathname).toBe("/");
    expect(url.searchParams.get("q")).toBe(getQuestionChatGPTPrompt(question));
  });
});
