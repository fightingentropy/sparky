import type { ExamChoice, ExamQuestion } from "./exams/types";
import { initialVerificationTest5Q01To20 } from "./examRationales/initialVerificationTest5Q01To20";
import { initialVerificationTest5Q21To40 } from "./examRationales/initialVerificationTest5Q21To40";
import { initialVerificationTest5Q41To60 } from "./examRationales/initialVerificationTest5Q41To60";

export type ExamOptionExplanations = Record<ExamChoice, string>;

const CHOICES: readonly ExamChoice[] = ["A", "B", "C", "D"];
const ALL_CHOICES_PATTERN =
  /\b(?:all(?:\s+of)?\s+(?:the\s+)?(?:(?:answers|options|statements|choices|measures)\s+)?(?:above|these|listed|shown)|all\s+(?:three|four)|all\s+of\s+them)\b/i;
const NO_CHOICES_PATTERN =
  /\b(?:none(?:\s+of)?\s+(?:the\s+)?(?:(?:answers|options|statements|choices|measures)\s+)?(?:above|these|listed|shown)|none\s+of\s+them)\b/i;
const MINIMUM_QUESTION_PATTERN =
  /\b(?:minimum|smallest|lowest|at\s+least|not\s+less\s+than)\b/i;
const MAXIMUM_QUESTION_PATTERN =
  /\b(?:maximum|largest|highest|at\s+most|not\s+(?:more|greater)\s+than|not\s+exceed(?:s|ed|ing)?)\b/i;

type ComparableNumber = {
  value: number;
  unit: string;
};

type CuratedRationaleSet = {
  prompt: string;
  options: readonly string[];
  answer: string;
  rationales: Readonly<Record<string, string>>;
} & (
  | { sourceIds: readonly ExamRationaleSourceId[]; sourceUrls?: never }
  | { sourceIds?: never; sourceUrls: readonly string[] }
);

export const EXAM_RATIONALE_SOURCES = {
  "hse-maintaining-portable-equipment": {
    publisher: "Health and Safety Executive",
    title: "Maintaining portable and transportable electrical equipment",
    locator: "Visual checks and inspection/testing guidance",
    url: "https://www.hse.gov.uk/pubns/indg236.htm",
    verifiedOn: "2026-07-13"
  },
  "iet-in-service-inspection": {
    publisher: "Institution of Engineering and Technology",
    title: "The all-new 5th edition of the IET Code of Practice for In-Service Inspection and Testing of Electrical Equipment",
    locator: "Risk assessment and inspection factors",
    url: "https://electrical.theiet.org/wiring-matters/years/2021/84-march-2021/the-all-new-5th-edition-of-the-iet-code-of-practice-for-in-service-inspection-and-testing-of-electrical-equipment/",
    verifiedOn: "2026-07-13"
  },
  "iet-model-forms-a4": {
    publisher: "Institution of Engineering and Technology",
    title: "BS 7671:2018+A4:2026 model forms",
    locator: "EIC, MEIWC and EICR schedules",
    url: "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/model-forms/",
    verifiedOn: "2026-07-13"
  },
  "iet-eicr-myths": {
    publisher: "Institution of Engineering and Technology",
    title: "EICR Myths",
    locator: "Purpose, extent and limitations of an EICR",
    url: "https://electrical.theiet.org/wiring-matters/years/2021/85-may-2021/eicr-myths/",
    verifiedOn: "2026-07-13"
  },
  "mod-sampling-guide": {
    publisher: "UK Ministry of Defence",
    title: "PG 2017/02: Inspection, testing and certification of low voltage electrical installations",
    locator: "Section 9.3.1-9.3.3, sampling and records",
    url: "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/645736/20170913__PG_02-17__Final_Version_-_O.pdf",
    verifiedOn: "2026-07-13"
  }
} as const;

type ExamRationaleSourceId = keyof typeof EXAM_RATIONALE_SOURCES;

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
const BASE_CURATED_RATIONALE_SETS: readonly CuratedRationaleSet[] = [
  {
    prompt: "The most important check, when assessing the level of safety of an electrical appliance, is:",
    options: [
      "Earth leakage current testing",
      "Flash testing",
      "Insulation resistance testing",
      "Visual inspection"
    ],
    answer: "Visual inspection",
    sourceIds: ["hse-maintaining-portable-equipment", "iet-in-service-inspection"],
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
    sourceIds: ["hse-maintaining-portable-equipment", "iet-in-service-inspection"],
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
    sourceIds: ["hse-maintaining-portable-equipment", "iet-in-service-inspection"],
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
    sourceIds: ["iet-model-forms-a4"],
    rationales: {
      "Electrical Installation Condition Report":
        "An EICR reports on the condition of an existing electrical installation; it is not the certificate for a newly installed circuit.",
      "Minor Electrical Installation Works Certificate":
        "A Minor Works Certificate is only for work that does not provide a new circuit. This job adds a lighting circuit, so an EIC is required.",
      "Schedule of Electrical Condition":
        "A “Schedule of Electrical Condition” is not the required BS 7671 certificate for this work. An EIC is issued with its inspection and test-result schedules."
    }
  },
  {
    prompt:
      "Questions 12 to 16 relate to the following scenario. The existing installation in a hotel is to be inspected and tested as a requirement of the local authority for a public entertainment licence application. Previous inspection and testing records exist but two additional socket-outlet circuits have previously been installed for which there are no test results available. What action should be taken with regard to the additional socket-outlet circuits?",
    options: [
      "Both should be fully tested to establish their condition for continued service",
      "Both should be sampled to establish their condition for continued service",
      "One should be fully inspected to establish its condition for continued service",
      "One should be sampled to establish its condition for continued service"
    ],
    answer: "Both should be fully tested to establish their condition for continued service",
    sourceIds: ["mod-sampling-guide", "iet-eicr-myths", "iet-model-forms-a4"],
    rationales: {
      "Both should be sampled to establish their condition for continued service":
        "Sampling is not enough here. It relies on good previous records to show that the sample represents the rest, but these are the two circuits with no results. Each circuit needs the full relevant tests.",
      "One should be fully inspected to establish its condition for continued service":
        "Checking only one circuit leaves the other with no evidence at all. Inspection also cannot provide measurements such as continuity, insulation resistance, polarity and earth fault loop impedance. Both circuits need inspection and testing.",
      "One should be sampled to establish its condition for continued service":
        "This misses one circuit completely and does not fully test the other. With no results for either circuit, neither can be treated as represented by a sample; both need the full relevant inspection and tests."
    }
  }
];

export const CURATED_RATIONALE_SETS: readonly CuratedRationaleSet[] = [
  ...initialVerificationTest5Q01To20,
  ...initialVerificationTest5Q21To40,
  ...initialVerificationTest5Q41To60,
  ...BASE_CURATED_RATIONALE_SETS
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

function fullRationale(explanation: string): string {
  const source = explanation.replace(/\s+/g, " ").trim();
  return source || "This is the recorded correct answer for this question.";
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
  return `${prefix.trim()} ${rationale.trim()}`.trim();
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
  return rationale?.trim();
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
      `“${candidateText}” is incomplete on its own because every listed item is required.`,
      rationale
    );
  }

  if (NO_CHOICES_PATTERN.test(keyedText) && !NO_CHOICES_PATTERN.test(candidateText)) {
    return withRationale(
      `“${candidateText}” is not valid here because none of the listed conditions applies.`,
      rationale
    );
  }

  return undefined;
}

/**
 * Builds feedback for every delivered option without inventing technical
 * claims. The correct choice receives the complete bank explanation. A
 * distractor uses a curated or structurally supported contrast when available.
 * Otherwise it shows the complete authored rationale rather than inventing a
 * fake option-specific distinction.
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
        rationale;
  }

  return result;
}
