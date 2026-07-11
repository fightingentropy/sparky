import type { ExamChoice, ExamQuestion } from "./exams/types";

export type ExamOptionExplanations = Partial<Record<ExamChoice, string>>;

const CHOICES: readonly ExamChoice[] = ["A", "B", "C", "D"];
const MAX_EXPLANATION_LENGTH = 160;
const ALL_CHOICES_PATTERN =
  /\b(?:all(?:\s+of)?\s+(?:the\s+)?(?:(?:answers|options|statements|choices|measures)\s+)?(?:above|these|listed|shown)|all\s+(?:three|four)|all\s+of\s+them)\b/i;
const NO_CHOICES_PATTERN =
  /\b(?:none(?:\s+of)?\s+(?:the\s+)?(?:(?:answers|options|statements|choices|measures)\s+)?(?:above|these|listed|shown)|none\s+of\s+them)\b/i;
const MINIMUM_QUESTION_PATTERN = /\b(?:minimum|smallest|lowest)\b/i;
const MAXIMUM_QUESTION_PATTERN = /\b(?:maximum|largest|highest)\b/i;

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

function conciseRationale(explanation: string): string {
  // A few imported rows retain a source-editor marker after an answer echo.
  // Keeping the text after the marker gives useful reasoning without changing
  // or supplementing the question bank's technical claim.
  const afterExplanationMarker = explanation.match(/\bExplanation:\s*(.+)$/i)?.[1];
  const source = (afterExplanationMarker ?? explanation).replace(/\s+/g, " ").trim();
  if (!source) return "This is the recorded correct answer for this question.";
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
  return rationale ? truncateAtWord(rationale, MAX_EXPLANATION_LENGTH) : undefined;
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
      ? `This is below the required minimum of ${keyedText}.`
      : `This is above the required minimum of ${keyedText}, so it is not the minimum value asked for.`;
    return withRationale(prefix, rationale);
  }

  if (MAXIMUM_QUESTION_PATTERN.test(question.prompt)) {
    const prefix = candidateNumber.value > keyedNumber.value
      ? `This exceeds the permitted maximum of ${keyedText}.`
      : `This is below the permitted maximum of ${keyedText}, so it is not the maximum value asked for.`;
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
      "Every listed item is required, so this choice is incomplete on its own.",
      rationale
    );
  }

  if (NO_CHOICES_PATTERN.test(keyedText) && !NO_CHOICES_PATTERN.test(candidateText)) {
    return withRationale(
      "None of the listed conditions applies here, so this individual choice is not valid.",
      rationale
    );
  }

  return undefined;
}

/**
 * Builds only feedback that can explain an option from information we actually
 * have. The correct choice always receives the bank rationale. Distractors get
 * feedback only when there is an option-specific curated rationale or a safe,
 * structurally supported contrast; unsupported distractors are deliberately
 * omitted instead of receiving circular "it is not the answer" text.
 */
export function buildOptionExplanations(question: ExamQuestion): ExamOptionExplanations {
  const rationale = conciseRationale(question.explanation);
  const result: ExamOptionExplanations = {
    [question.answer]: rationale
  };

  for (const choice of CHOICES) {
    if (choice === question.answer) continue;

    const explanation =
      curatedOptionExplanation(question, choice) ??
      numericOptionExplanation(question, choice, rationale) ??
      structuralOptionExplanation(question, choice, rationale);

    if (explanation) result[choice] = explanation;
  }

  return result;
}
