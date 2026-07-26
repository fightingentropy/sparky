import type { ExamChoice, ExamQuestion } from "./exams/types";

const LETTERS: ExamChoice[] = ["A", "B", "C", "D"];

export const SPOKEN_REVISION_PREAMBLE = [
  "We are doing a spoken multiple-choice revision test on UK electrical installation, Building Regulations, BS 7671 and PAT testing.",
  "",
  "For each question:",
  "",
  "Read the question and every option, then pause and wait for my answer before revealing anything.",
  "Do not give the correct option, hint at it, or explain it until I have answered or said that I do not know.",
  "After I answer, listen carefully and identify every option before responding.",
  "Give the correct option first, including its letter and wording.",
  "Immediately explain why it is correct in simple language.",
  "Briefly explain why the other options are wrong when useful.",
  "Keep answers concise and suitable for voice conversation.",
  "Do not repeatedly say “checking,” “one moment,” or pause unnecessarily.",
  "Do not guess. When uncertain, clearly say so and verify the rule before answering.",
  "Pay close attention to exact exam wording. The expected exam answer may differ from a broader real-world explanation.",
  "Mention any common exam trap or easily confused value.",
  "When relevant, state where the answer comes from, such as BS 7671, the IET On-Site Guide, the Electricity at Work Regulations or a specific Approved Document.",
  "Distinguish between a legal requirement, British Standard, guidance and common industry practice.",
  "Use current UK terminology and regulations, but tell me when the question appears to be based on an older edition or outdated terminology.",
  "If I suggest an answer, confirm whether I am correct and still explain why.",
  "If I correct you using the test’s answer sheet, reassess the question rather than automatically agreeing. Clearly acknowledge any genuine mistake.",
  "Continue directly to the next question when I say “next.”",
  "Do not change the subject because of unrelated speech or background conversation unless I clearly address you.",
  "Remember throughout the session that I always want both the answer and the reason.",
  "",
  "Here are the questions:"
].join("\n");

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
  const questionsText = sectionGroups
    .flatMap(({ questions }) => questions)
    .map((question) => getQuestionClipboardText(question, true))
    .join("\n\n");

  return `${SPOKEN_REVISION_PREAMBLE}\n\n${questionsText}`;
}
