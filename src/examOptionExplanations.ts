import type { ExamChoice, ExamQuestion } from "./exams/types";

export type ExamOptionExplanations = Record<ExamChoice, string>;

const CHOICES: readonly ExamChoice[] = ["A", "B", "C", "D"];
const MAX_EXPLANATION_LENGTH = 160;
const MAX_KEYED_ANSWER_LENGTH = 48;
const NEGATIVE_QUESTION_PATTERN =
  /\b(?:not|except|incorrect|false|least\s+likely|mustn['’]t|shouldn['’]t|wouldn['’]t|doesn['’]t|isn['’]t|aren['’]t)\b/i;
const LEAST_LIKELY_PATTERN = /\bleast\s+likely\b/i;
const ALL_CHOICES_PATTERN =
  /\b(?:all(?:\s+of)?\s+(?:the\s+)?(?:(?:answers|options|statements|choices|measures)\s+)?(?:above|these|listed|shown)|all\s+(?:three|four)|all\s+of\s+them)\b/i;
const NO_CHOICES_PATTERN =
  /\b(?:none(?:\s+of)?\s+(?:the\s+)?(?:(?:answers|options|statements|choices|measures)\s+)?(?:above|these|listed|shown)|none\s+of\s+them)\b/i;

type ComparableNumber = {
  value: number;
  unit: string;
};

function truncateAtWord(value: string, maxLength: number): string {
  const normalized = value.replace(/\s+/g, " ").trim();
  if (normalized.length <= maxLength) return normalized;

  const slice = normalized.slice(0, Math.max(1, maxLength - 1));
  const lastSpace = slice.lastIndexOf(" ");
  const cutoff = lastSpace >= Math.floor(maxLength * 0.6) ? lastSpace : slice.length;
  return `${slice.slice(0, cutoff).replace(/[\s,;:.!?-]+$/u, "")}…`;
}

function conciseRationale(explanation: string): string {
  // A few imported rows retain a source-editor marker after an answer echo.
  // Keeping the text after the marker gives useful reasoning without changing
  // or supplementing the question bank's technical claim.
  const afterExplanationMarker = explanation.match(/\bExplanation:\s*(.+)$/i)?.[1];
  const source = (afterExplanationMarker ?? explanation).replace(/\s+/g, " ").trim();
  if (!source) return "This is the keyed answer in the question bank.";
  return truncateAtWord(source, MAX_EXPLANATION_LENGTH);
}

function normalizeUnit(unit: string): string {
  return unit
    .normalize("NFKC")
    .replace(/Ω/g, "Ω")
    .toLowerCase()
    .replace(/\bmilli\s*amperes?\b/g, "ma")
    .replace(/\bohms?\b/g, "ω")
    .replace(/\bvolts?\b/g, "v")
    .replace(/\bamperes?\b|\bamps?\b/g, "a")
    .replace(/\bmilliseconds?\b|\bmsecs?\b/g, "ms")
    .replace(/\bseconds?\b|\bsecs?\b/g, "s")
    .replace(/\bminutes?\b|\bmins?\b/g, "min")
    .replace(/\s+/g, "")
    .replace(/[.,;:]$/g, "");
}

function comparableNumber(option: string): ComparableNumber | null {
  const normalized = option
    .normalize("NFKC")
    .replace(/,/g, "")
    .trim();
  const match = normalized.match(/^(-?(?:\d+(?:\.\d+)?|\.\d+))\s*(.*?)$/);
  if (!match) return null;

  const value = Number(match[1]);
  const unit = normalizeUnit(match[2]);
  if (!Number.isFinite(value) || /\d/.test(unit)) return null;
  return { value, unit };
}

function withRationale(prefix: string, rationale: string): string {
  const remaining = MAX_EXPLANATION_LENGTH - prefix.length - 1;
  if (remaining < 24) return truncateAtWord(prefix, MAX_EXPLANATION_LENGTH);
  return `${prefix} ${truncateAtWord(rationale, remaining)}`;
}

function wrongOptionExplanation(
  question: ExamQuestion,
  choice: ExamChoice,
  rationale: string
): string {
  const keyedText = question.options[question.answer].trim();
  const candidateText = question.options[choice].trim();
  const candidateNumber = comparableNumber(question.options[choice]);
  const keyedNumber = comparableNumber(keyedText);

  if (ALL_CHOICES_PATTERN.test(keyedText)) {
    return withRationale(
      "This is incomplete on its own — the keyed answer includes all listed choices.",
      rationale
    );
  }

  if (NO_CHOICES_PATTERN.test(keyedText)) {
    return withRationale(
      "The keyed answer excludes every listed choice in this context.",
      rationale
    );
  }

  const conciseAnswer = truncateAtWord(keyedText, MAX_KEYED_ANSWER_LENGTH);

  if (ALL_CHOICES_PATTERN.test(candidateText)) {
    return withRationale(
      `This combined choice is too broad; the keyed answer is “${conciseAnswer}”.`,
      rationale
    );
  }

  if (NO_CHOICES_PATTERN.test(candidateText)) {
    return withRationale(
      `This excludes the keyed answer, “${conciseAnswer}”.`,
      rationale
    );
  }

  if (NEGATIVE_QUESTION_PATTERN.test(question.prompt)) {
    const prefix = LEAST_LIKELY_PATTERN.test(question.prompt)
      ? `This is not the least-likely choice identified; the keyed answer is “${conciseAnswer}”.`
      : `This is not the exception requested; the keyed answer is “${conciseAnswer}”.`;
    return withRationale(prefix, rationale);
  }

  const hasReferenceImage =
    Boolean(question.imageUrls?.length) ||
    Object.values(question.optionImageUrls ?? {}).some(Boolean);
  if (hasReferenceImage) {
    return withRationale(
      `This does not match the item shown; the keyed identification is “${conciseAnswer}”.`,
      rationale
    );
  }

  if (
    candidateNumber &&
    keyedNumber &&
    candidateNumber.unit === keyedNumber.unit &&
    candidateNumber.value !== keyedNumber.value
  ) {
    const direction = candidateNumber.value < keyedNumber.value ? "Too low" : "Too high";
    return withRationale(`${direction} — the keyed result is ${keyedText}.`, rationale);
  }

  return withRationale(
    `This does not match the keyed answer, “${conciseAnswer}”.`,
    rationale
  );
}

/**
 * Builds option-level feedback from the delivered question itself.
 *
 * This is intentionally a pure render-time helper rather than a mutation of
 * the JSON bank. Some exams deterministically rewrite and shuffle distractors
 * during delivery; deriving feedback afterwards keeps it aligned with the
 * options the learner actually sees. Every technical statement comes from the
 * existing keyed answer or explanation.
 */
export function buildOptionExplanations(question: ExamQuestion): ExamOptionExplanations {
  const rationale = conciseRationale(question.explanation);
  const result = {} as ExamOptionExplanations;

  for (const choice of CHOICES) {
    result[choice] =
      choice === question.answer
        ? rationale
        : wrongOptionExplanation(question, choice, rationale);
  }

  return result;
}
