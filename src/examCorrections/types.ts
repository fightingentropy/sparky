import type { ExamChoice } from "../exams/types";

export type ExamQuestionCorrection = {
  examId?: string;
  variantId?: string;
  questionNumber?: number;
  promptSuffix: string;
  correctedPromptSuffix?: string;
  options?: Partial<Record<ExamChoice, string>>;
  answer?: ExamChoice;
  explanation: string;
};
