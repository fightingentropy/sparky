import { CONTENT_SCHEMA_VERSION, type ContentSource } from "./contentSchema";
import type { Exam } from "./exams/types";

const RECORDED_ON = "2026-08-01";

const SOURCE_FILE_BY_EXAM_ID: Readonly<Record<string, string>> = {
  "fundamental-inspection-testing": "initial-verification.json",
  "initial-verification": "initial-verification.json",
};

function sourceForExam(exam: Exam): ContentSource {
  const sourceFile = SOURCE_FILE_BY_EXAM_ID[exam.id] ?? `${exam.id}.json`;

  return {
    id: `${exam.id}-question-bank`,
    classification: "exam-convention",
    documentIdentifier: `${exam.title} question bank`,
    edition: `Repository content schema ${CONTENT_SCHEMA_VERSION}`,
    recordedOn: RECORDED_ON,
    locator: `src/exam-data/${sourceFile}`,
    limitations:
      "Imported study-bank wording is an exam convention, not a substitute for the current official law, standard or guidance. Question-specific verified references take precedence where present.",
  };
}

/**
 * Attach explicit provenance to an exam and every delivered question. The
 * source record is deliberately honest about imported question-bank material;
 * verified per-question tables retain their more specific official citation.
 */
export function applyExamContentSource(exam: Exam): Exam {
  const source = sourceForExam(exam);

  return {
    ...exam,
    contentSources: [source],
    sections: exam.sections.map((section) => ({
      ...section,
      variants: section.variants.map((variant) => ({
        ...variant,
        questions: variant.questions.map((question) => ({
          ...question,
          sourceIds: [source.id],
        })),
      })),
    })),
  };
}
