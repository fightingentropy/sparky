import type { ExamChoice, ExamQuestion } from "./exams/types";

const LETTERS: ExamChoice[] = ["A", "B", "C", "D"];

export function getQuestionClipboardText(question: ExamQuestion, includeAnswer = false): string {
  const imageLines = question.imageUrls?.length
    ? ["", ...question.imageUrls.map((url) => `Image: ${url}`)]
    : [];
  const optionLines = LETTERS.map((letter) => {
    const imageUrl = question.optionImageUrls?.[letter];
    return imageUrl
      ? `${letter}. ${question.options[letter]} (${imageUrl})`
      : `${letter}. ${question.options[letter]}`;
  });
  const answerLines = includeAnswer
    ? [
        "",
        `Answer: ${question.answer}. ${question.options[question.answer]}`,
        `Explanation: ${question.explanation}`
      ]
    : [];

  return [`Q${question.number}`, question.prompt, ...imageLines, "", ...optionLines, ...answerLines].join("\n");
}

export function getExamClipboardText(
  sectionGroups: Array<{ questions: ExamQuestion[] }>
): string {
  return sectionGroups
    .flatMap(({ questions }) => questions)
    .map((question) => getQuestionClipboardText(question, true))
    .join("\n\n");
}
