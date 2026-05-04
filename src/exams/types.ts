export type ExamChoice = "A" | "B" | "C" | "D";

export type ExamQuestion = {
  number: number;
  prompt: string;
  options: Record<ExamChoice, string>;
  answer: ExamChoice;
  explanation: string;
};

export type ExamVariant = {
  id: string;
  questions: ExamQuestion[];
};

export type ExamSection = {
  id: string;
  title: string;
  variants: ExamVariant[];
};

export type ScoringBand = {
  threshold: number;
  label: string;
};

export type Exam = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  format: string;
  passPercent: number;
  sections: ExamSection[];
  scoring: ScoringBand[];
  priorities: string[];
};
