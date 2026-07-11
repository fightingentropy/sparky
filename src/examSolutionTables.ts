import type { Exam, ExamQuestion, ExamSolutionTable } from "./exams/types";

const BS_7671_EDITION_CHECKER_URL =
  "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/ensure-you-are-up-to-date-with-bs-7671/";
const IET_GUIDANCE_URL =
  "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/digital-subscriptions-to-bs-7671-and-iet-guidance/whats-new/";

type SourceDetails = Pick<
  ExamSolutionTable["source"],
  "publication" | "edition" | "url" | "licence" | "status"
>;

function extractLocator(question: ExamQuestion): string | null {
  const text = `${question.prompt} ${question.explanation}`;
  const appendixAndTable = text.match(
    /\bAppendix\s+\d+(?:\s*,\s*Table\s+[0-9A-Z]+(?:\.[0-9A-Z]+)?)?/i
  );
  if (appendixAndTable) return appendixAndTable[0];

  const table = text.match(/\bTable\s+[0-9][0-9A-Z]*(?:\.[0-9A-Z]+)?\b/i);
  return table?.[0] ?? null;
}

function sourceDetails(exam: Exam, question: ExamQuestion): SourceDetails | null {
  const text = `${question.prompt} ${question.explanation}`;

  if (/\b(?:On[ -]?Site Guide|OSG)\b/i.test(text)) {
    return {
      publication: "IET On-Site Guide",
      edition: "Edition not recorded in the source question",
      url: IET_GUIDANCE_URL,
      licence: "Reference only — proprietary publication not reproduced",
      status: "source-citation"
    };
  }

  if (/\b(?:Guidance Note 3|GN3)\b/i.test(text)) {
    return {
      publication: "IET Guidance Note 3",
      edition: "Edition not recorded in the source question",
      url: IET_GUIDANCE_URL,
      licence: "Reference only — proprietary publication not reproduced",
      status: "source-citation"
    };
  }

  if (
    exam.id === "18th-edition" ||
    /\bBS\s*7671\b/i.test(text) ||
    /\bTable\s+(?:4[A-Z]|41|42|43|52|54|61|64|537)/i.test(text)
  ) {
    return {
      publication: "BS 7671",
      edition: "Edition not recorded in the source question",
      url: BS_7671_EDITION_CHECKER_URL,
      licence: "Reference only — full BSI/IET table not reproduced",
      status: "source-citation"
    };
  }

  return null;
}

function makeFocusedLookup(
  question: ExamQuestion,
  locator: string,
  source: SourceDetails
): ExamSolutionTable {
  return {
    title: "Focused standards lookup",
    columns: ["Question-bank locator", "Answer-specific result"],
    rows: [[locator, question.options[question.answer]]],
    source: {
      ...source,
      locator
    },
    note:
      "This is a focused study lookup generated from the question's cited source and keyed answer, not a reproduction of the full standards table. Verify it against the exact edition required by your course or assessment."
  };
}

export function applyExamSolutionTables(exam: Exam): Exam {
  let changed = false;
  const sections = exam.sections.map((section) => ({
    ...section,
    variants: section.variants.map((variant) => ({
      ...variant,
      questions: variant.questions.map((question) => {
        if (question.solutionTables?.length) return question;
        const locator = extractLocator(question);
        if (!locator) return question;
        const source = sourceDetails(exam, question);
        if (!source) return question;
        changed = true;
        return { ...question, solutionTables: [makeFocusedLookup(question, locator, source)] };
      })
    }))
  }));

  return changed ? { ...exam, sections } : exam;
}
