import type { ExamChoice, ExamQuestion } from "./exams/types";

export type ExamOptionExplanations = Record<ExamChoice, string>;

const CHOICES: readonly ExamChoice[] = ["A", "B", "C", "D"];
const MAX_DISTRACTOR_EXPLANATION_LENGTH = 260;
const MAX_ANSWER_LABEL_LENGTH = 72;
const NEGATIVE_QUESTION_PATTERN =
  /\b(?:not|except|incorrect|false|least\s+likely|mustn['’]t|shouldn['’]t|wouldn['’]t|doesn['’]t|isn['’]t|aren['’]t)\b/i;
const THRESHOLD_PHRASE_PATTERN =
  /\b(?:not\s+less\s+than|not\s+(?:more|greater)\s+than|not\s+exceeding|does\s+not\s+exceed|at\s+least|at\s+most)\b/gi;
const ALL_CHOICES_PATTERN =
  /\b(?:all(?:\s+of)?\s+(?:the\s+)?(?:(?:answers|options|statements|choices|measures)\s+)?(?:above|these|listed|shown)|all\s+(?:three|four)|all\s+of\s+them)\b/i;
const NO_CHOICES_PATTERN =
  /\b(?:none(?:\s+of)?\s+(?:the\s+)?(?:(?:answers|options|statements|choices|measures)\s+)?(?:above|these|listed|shown)|none\s+of\s+them)\b/i;
const MINIMUM_QUESTION_PATTERN =
  /\b(?:minimum|smallest|lowest|at\s+least|not\s+less\s+than)\b/i;
const MAXIMUM_QUESTION_PATTERN =
  /\b(?:maximum|largest|highest|at\s+most|not\s+(?:more|greater)\s+than|not\s+exceeding|does\s+not\s+exceed)\b/i;

type ComparableNumber = {
  value: number;
  unit: string;
};

type CuratedRationaleSet = {
  prompt: string;
  options: readonly string[];
  answer: string;
  rationales: Readonly<Record<string, string>>;
};

function semanticText(value: string): string {
  return value.normalize("NFKC").replace(/\s+/g, " ").trim().toLocaleLowerCase("en-GB");
}

/**
 * A structural JSON key avoids delimiter collisions and remains stable when a
 * delivery variant shuffles the choice letters. Including the answer text also
 * prevents an override from surviving a future correction to the answer key.
 */
function semanticSignature(prompt: string, options: readonly string[], answer: string): string {
  return JSON.stringify({
    prompt: semanticText(prompt),
    options: options.map(semanticText).sort(),
    answer: semanticText(answer)
  });
}

// Source basis for the PAT rationales below:
// - HSE PAT FAQ and HSG107, paragraphs 40 and 47
// - IET Wiring Matters issue 24, inspection/test sequence and flash-test caution
// Source basis for the certificate rationales below:
// - IET BS 7671:2018+A4:2026 model EIC, MEIWC and EICR forms
const CURATED_RATIONALE_SETS: readonly CuratedRationaleSet[] = [
  {
    prompt: "The most important check, when assessing the level of safety of an electrical appliance, is:",
    options: [
      "Earth leakage current testing",
      "Flash testing",
      "Insulation resistance testing",
      "Visual inspection"
    ],
    answer: "Visual inspection",
    rationales: {
      "Earth leakage current testing":
        "Earth-leakage testing measures current from live parts to earth or accessible surfaces. It finds leakage, but not visible damage or unsuitable use.",
      "Flash testing":
        "Flash (hi-pot) testing applies a high voltage to prove dielectric strength. It is not a routine in-service PAT check and can damage insulation or electronics.",
      "Insulation resistance testing":
        "Insulation-resistance testing finds hidden insulation faults. It cannot reveal physical damage or misuse and may be unsuitable for some electronics."
    }
  },
  {
    prompt: "When assessing the level of safety of an electrical appliance the most important check would be:",
    options: [
      "Acceptable values of insulation resistance",
      "Earth fault current",
      "Spot testing",
      "Visual inspection"
    ],
    answer: "Visual inspection",
    rationales: {
      "Acceptable values of insulation resistance":
        "A satisfactory insulation reading addresses only insulation; it does not reveal damaged plugs, leads, enclosures or evidence of misuse.",
      "Earth fault current":
        "Earth-fault current is an electrical characteristic, not a complete appliance-condition check, and it does not reveal visible damage.",
      "Spot testing":
        "A spot test samples one electrical characteristic and cannot replace a systematic examination of the complete appliance."
    }
  },
  {
    prompt: "The most important check on a portable appliance is:",
    options: [
      "Inspection review",
      "Production testing",
      "Type testing",
      "Visual inspection"
    ],
    answer: "Visual inspection",
    rationales: {
      "Inspection review":
        "Reviewing inspection information does not examine the appliance's present condition, so damage that occurred since the review may be missed.",
      "Production testing":
        "Production testing checks equipment during manufacture; it does not assess deterioration, damage or misuse after the appliance enters service.",
      "Type testing":
        "Type testing validates a representative design or sample. It does not establish the current condition of each appliance in service."
    }
  },
  {
    prompt:
      "Questions 5 to 11 relate to the following scenario. Refurbishment of a leisure centre with a swimming pool is taking place. An additional lighting circuit is to be installed. The new lights will be at a height of 2.4m above the pool. What document must be completed following inspection and testing?",
    options: [
      "Electrical Installation Certificate",
      "Electrical Installation Condition Report",
      "Minor Electrical Installation Works Certificate",
      "Schedule of Electrical Condition"
    ],
    answer: "Electrical Installation Certificate",
    rationales: {
      "Electrical Installation Condition Report":
        "An EICR reports on the condition of an existing electrical installation; it is not the certificate for a newly installed circuit.",
      "Minor Electrical Installation Works Certificate":
        "A Minor Works Certificate is only for work that does not provide a new circuit. This job adds a lighting circuit, so an EIC is required.",
      "Schedule of Electrical Condition":
        "A “Schedule of Electrical Condition” is not the required BS 7671 certificate for this work. An EIC is issued with its inspection and test-result schedules."
    }
  }
];

const CURATED_OPTION_RATIONALES = new Map(
  CURATED_RATIONALE_SETS.map((entry) => [
    semanticSignature(entry.prompt, entry.options, entry.answer),
    new Map(
      Object.entries(entry.rationales).map(([option, rationale]) => [
        semanticText(option),
        rationale
      ])
    )
  ])
);

function truncateAtWord(value: string, maxLength: number): string {
  const normalized = value.replace(/\s+/g, " ").trim();
  if (normalized.length <= maxLength) return normalized;

  const slice = normalized.slice(0, Math.max(1, maxLength - 1));
  const lastSpace = slice.lastIndexOf(" ");
  const cutoff = lastSpace >= Math.floor(maxLength * 0.6) ? lastSpace : slice.length;
  return `${slice.slice(0, cutoff).replace(/[\s,;:.!?-]+$/u, "")}…`;
}

function fullRationale(explanation: string): string {
  const source = explanation.replace(/\s+/g, " ").trim();
  return source || "This is the recorded correct answer for this question.";
}

function asksForException(prompt: string): boolean {
  return NEGATIVE_QUESTION_PATTERN.test(prompt.replace(THRESHOLD_PHRASE_PATTERN, ""));
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
  const remaining = MAX_DISTRACTOR_EXPLANATION_LENGTH - prefix.length - 1;
  if (remaining < 24) {
    return truncateAtWord(prefix, MAX_DISTRACTOR_EXPLANATION_LENGTH);
  }
  return `${prefix} ${truncateAtWord(rationale, remaining)}`;
}

function curatedOptionExplanation(
  question: ExamQuestion,
  choice: ExamChoice
): string | undefined {
  const optionTexts = CHOICES.map((letter) => question.options[letter]);
  const signature = semanticSignature(
    question.prompt,
    optionTexts,
    question.options[question.answer]
  );
  const rationale = CURATED_OPTION_RATIONALES
    .get(signature)
    ?.get(semanticText(question.options[choice]));
  return rationale
    ? truncateAtWord(rationale, MAX_DISTRACTOR_EXPLANATION_LENGTH)
    : undefined;
}

function numericOptionExplanation(
  question: ExamQuestion,
  choice: ExamChoice,
  rationale: string
): string | undefined {
  const keyedText = question.options[question.answer].trim();
  const candidateNumber = comparableNumber(question.options[choice]);
  const keyedNumber = comparableNumber(keyedText);

  if (
    !candidateNumber ||
    !keyedNumber ||
    candidateNumber.unit !== keyedNumber.unit ||
    candidateNumber.value === keyedNumber.value
  ) {
    return undefined;
  }

  if (MINIMUM_QUESTION_PATTERN.test(question.prompt)) {
    const prefix = candidateNumber.value < keyedNumber.value
      ? `${question.options[choice]} is below the required minimum of ${keyedText}.`
      : `${question.options[choice]} is above the required minimum of ${keyedText}, so it is not the minimum value asked for.`;
    return withRationale(prefix, rationale);
  }

  if (MAXIMUM_QUESTION_PATTERN.test(question.prompt)) {
    const prefix = candidateNumber.value > keyedNumber.value
      ? `${question.options[choice]} exceeds the permitted maximum of ${keyedText}.`
      : `${question.options[choice]} is below the permitted maximum of ${keyedText}, so it is not the maximum value asked for.`;
    return withRationale(prefix, rationale);
  }

  return undefined;
}

function structuralOptionExplanation(
  question: ExamQuestion,
  choice: ExamChoice,
  rationale: string
): string | undefined {
  const keyedText = question.options[question.answer].trim();
  const candidateText = question.options[choice].trim();

  if (ALL_CHOICES_PATTERN.test(keyedText) && !ALL_CHOICES_PATTERN.test(candidateText)) {
    return withRationale(
      `“${truncateAtWord(candidateText, MAX_ANSWER_LABEL_LENGTH)}” is incomplete on its own because every listed item is required.`,
      rationale
    );
  }

  if (NO_CHOICES_PATTERN.test(keyedText) && !NO_CHOICES_PATTERN.test(candidateText)) {
    return withRationale(
      `“${truncateAtWord(candidateText, MAX_ANSWER_LABEL_LENGTH)}” is not valid here because none of the listed conditions applies.`,
      rationale
    );
  }

  const conciseAnswer = truncateAtWord(keyedText, MAX_ANSWER_LABEL_LENGTH);

  if (ALL_CHOICES_PATTERN.test(candidateText) && !ALL_CHOICES_PATTERN.test(keyedText)) {
    return withRationale(
      `This choice is too broad; the applicable answer is “${conciseAnswer}”.`,
      rationale
    );
  }

  if (NO_CHOICES_PATTERN.test(candidateText) && !NO_CHOICES_PATTERN.test(keyedText)) {
    return withRationale(
      `This choice wrongly excludes the applicable answer, “${conciseAnswer}”.`,
      rationale
    );
  }

  return undefined;
}

function groundedOptionExplanation(
  question: ExamQuestion,
  choice: ExamChoice,
  rationale: string
): string {
  const keyedText = question.options[question.answer].trim();
  const conciseAnswer = truncateAtWord(keyedText, MAX_ANSWER_LABEL_LENGTH);
  const conciseCandidate = truncateAtWord(
    question.options[choice].trim(),
    MAX_ANSWER_LABEL_LENGTH
  );
  const candidateNumber = comparableNumber(question.options[choice]);
  const keyedNumber = comparableNumber(keyedText);

  if (asksForException(question.prompt)) {
    return withRationale(
      `“${conciseCandidate}” does not satisfy the exception requested; the answer that does is “${conciseAnswer}”.`,
      rationale
    );
  }

  if (
    candidateNumber &&
    keyedNumber &&
    candidateNumber.unit === keyedNumber.unit &&
    candidateNumber.value !== keyedNumber.value
  ) {
    return withRationale(
      `${conciseCandidate} differs from the required answer of ${conciseAnswer}.`,
      rationale
    );
  }

  const hasReferenceImage =
    Boolean(question.imageUrls?.length) ||
    Object.values(question.optionImageUrls ?? {}).some(Boolean);
  if (hasReferenceImage) {
    return withRationale(
      `“${conciseCandidate}” identifies something other than the referenced image; the identified answer is “${conciseAnswer}”.`,
      rationale
    );
  }

  return withRationale(
    `“${conciseCandidate}” does not fit the rule or situation described; the applicable answer is “${conciseAnswer}”.`,
    rationale
  );
}

/**
 * Builds feedback for every delivered option without inventing technical
 * claims. The correct choice receives the complete bank explanation. A
 * distractor uses a curated or structurally supported contrast when available;
 * otherwise it is contrasted with the recorded answer and its rationale.
 */
export function buildOptionExplanations(question: ExamQuestion): ExamOptionExplanations {
  const rationale = fullRationale(question.explanation);
  const result = {} as ExamOptionExplanations;

  for (const choice of CHOICES) {
    result[choice] = choice === question.answer
      ? rationale
      : curatedOptionExplanation(question, choice) ??
        numericOptionExplanation(question, choice, rationale) ??
        structuralOptionExplanation(question, choice, rationale) ??
        groundedOptionExplanation(question, choice, rationale);
  }

  return result;
}
