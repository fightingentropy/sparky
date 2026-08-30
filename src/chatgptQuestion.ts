import { getQuestionClipboardText } from "./examClipboard";
import type { ExamQuestion } from "./exams/types";

const CHATGPT_URL = "https://chatgpt.com/";

export function getQuestionChatGPTPrompt(question: ExamQuestion): string {
  return [
    "Act as a patient expert tutor for a UK electrical student.",
    "",
    "Turn the multiple-choice question below into a complete lesson. Explain:",
    "- what knowledge or distinction the question is testing and why an examiner asks it",
    "- what the wording means in plain English and which clues matter",
    "- how to reason to the answer step by step",
    "- why the keyed answer is correct",
    "- why each other option is wrong, including the misconception behind it",
    "- the practical or safety significance and the relevant UK rule, standard, or guidance when useful",
    "- the common exam trap and a memorable way to retain the idea",
    "",
    "Finish with a short ‘How to think about questions like this’ checklist. Define jargon instead of assuming I already know it. Use the supplied answer key as the intended exam answer; if current rules, editions, or terminology may differ, explain that clearly.",
    "",
    getQuestionClipboardText(question, true)
  ].join("\n");
}

export function getQuestionChatGPTUrl(question: ExamQuestion): string {
  const url = new URL(CHATGPT_URL);
  url.searchParams.set("q", getQuestionChatGPTPrompt(question));
  return url.toString();
}
