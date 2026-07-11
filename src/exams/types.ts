export type ExamChoice = "A" | "B" | "C" | "D";

export type ExamSolutionTable = {
  title: string;
  columns: string[];
  rows: string[][];
  source: {
    publication: string;
    edition: string;
    locator: string;
    url?: string;
    licence: string;
    status: "verified" | "source-citation";
    verifiedOn?: string;
  };
  note?: string;
};

export type ExamQuestion = {
  number: number;
  prompt: string;
  imageUrls?: string[];
  options: Record<ExamChoice, string>;
  optionImageUrls?: Partial<Record<ExamChoice, string>>;
  answer: ExamChoice;
  explanation: string;
  solutionTables?: ExamSolutionTable[];
  preserveChoices?: boolean;
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
