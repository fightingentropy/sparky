import type { Exam, ExamChoice, ExamQuestion, ExamSection } from "./exams/types";

// Per-section, per-variant question count served on each test attempt.
// Each generated variant is ordered roughly easy to hard, so the app serves
// the final N scenario/application questions while the full bank remains in
// the per-exam modules.
const SECTION_QUESTION_LIMITS: Record<string, Record<string, number>> = {
  "periodic-inspection": {
    "section-1": 8,
    "section-2": 8,
    "section-3": 8,
    "section-4": 8,
    "section-5-merged-periodic-earthing": 8,
    "eicr-section-1": 8,
    "eicr-section-2": 8,
    "eicr-section-3": 8,
    "eicr-section-4": 8,
    "eicr-section-5-merged-observation-scenarios": 8,
  }
};

const HARDENED_EXAM_IDS = new Set([
  "periodic-inspection",
]);

const CHOICES: ExamChoice[] = ["A", "B", "C", "D"];
const SOURCE_MOCK_SECTION_IDS = new Set([
  "source-electrician-training-18th-edition",
  "source-electrician-training-part-p",
  "source-electrician-training-pat",
  "source-electrician-training-am2",
  "source-electrician-training-2391",
  "source-electrician-training-2396",
  "source-electrician-training-ecs-health-safety",
  "source-electrician-training-level-2-electrical-installation",
  "source-electrician-training-level-3-electrical-installation",
  "source-electrician-training-special-locations",
]);

const DISTRACTOR_REPLACEMENTS: Record<string, string> = {
  "A customer invoice and photographs only": "A commissioning checklist with photographs but no test schedule",
  "A consumer-unit sticker only": "A consumer-unit notice without the certificate schedules",
  "A customer invoice": "A commissioning record without the BS 7671 certificate",
  "A pass on the first reading only": "One acceptable reading without repeating the affected verification checks",
  "A practical-only observation record": "A practical observation record without the written technical justification",
  "Acceptable for testing purposes only": "Acceptable if recorded as a limitation and reviewed at the next inspection",
  "Always 0.5 Ω": "0.5 Ω where no supply data has been provided",
  "Always 1 Ω": "1 Ω where no supply data has been provided",
  "Always 2 Ω": "2 Ω where no supply data has been provided",
  "Always above 1 Ω": "Above 1 Ω where the supply record is incomplete",
  "Always below 0.05 Ω": "Below 0.05 Ω where the intake is close to the transformer",
  "Always 28 days as for PRS dwellings": "28 days where the duty holder has adopted the PRS process internally",
  "Always 5 years": "5 years where the installation condition and use remain unchanged",
  "Always be marked Unsatisfactory by default": "Be limited to the areas covered by the previous report",
  "Always equal to r1": "Equal to r1 where the protective conductor is the same cross-sectional area",
  "Always exactly 0.20 Ω": "0.20 Ω where PME is stated on the intake label",
  "All good — BS 7671 compliance equals Part P compliance": "Technically compliant, with the notification record still unresolved",
  "Be S-type only": "Be selected to coordinate with upstream RCDs",
  "BS 1361": "The protective-device standard printed on the distribution schedule",
  "BS 5266 only": "Emergency-lighting inspection records without the BS 7671 method",
  "BS 88 only": "The protective-device standard stated on the schedule",
  "Cannot be determined": "Record a limitation and defer the classification until further evidence is available",
  "Client, contractor, architect": "Client, principal contractor and electrical contractor",
  "Conditional": "Satisfactory subject to the client accepting the improvement recommendations",
  "Continuity testing only": "Continuity testing with the live-test schedule deferred",
  "Customer feedback and warranty": "Customer handover notes and equipment warranty information",
  "DC only": "Smooth DC residual current without verifying AC or pulsating-DC response",
  "Defensible only on dwellings": "Defensible where domestic occupation controls the risk profile",
  "Defensible only on TT systems": "Defensible where the earthing arrangement makes live testing impracticable",
  "DNO certificate": "Supply intake information without the circuit test schedules",
  "DNO commissioning": "Network operator intake information",
  "DNO permission": "Network operator intake information",
  "Energise and use functional testing only": "Carry out functional checks first and record the dead tests as deferred",
  "FI only": "FI where the inspector cannot safely establish the fault path",
  "False — applies 30 mA only": "Applies where the schedule states additional protection",
  "From the Building Regulations only": "From the Building Regulations compliance record",
  "GS38 only": "The instrument lead standard stated on the method statement",
  "Hand over the keys": "Leave the isolation under site control and record the handover",
  "Is required only on TT systems": "Is required where the earthing arrangement relies on RCD fault protection",
  "It's the only protective measure required": "It is the protective measure recorded for the final circuit",
  "It is marked only on handwriting speed": "It is marked on final answer quality rather than the technical method",
  "It never covers certification": "It covers test method but not the certification decision",
  "It only applies to TT systems": "It applies where the earthing arrangement makes RCD protection essential",
  "Local authority, contractor, customer": "Scheme provider, contractor and person ordering the work",
  "Looking at the cable from outside only": "External sheath inspection without conductor-level checks",
  "Mandatory only on TT systems": "Required where RCDs provide the recorded fault-protection method",
  "Never": "Rarely, unless the agreed limitation rules out that part of the inspection",
  "No further action required": "Record as a C3 improvement and review at the next scheduled inspection",
  "No paperwork is required": "A commissioning note without formal certification",
  "Notify the DNO": "Record the supply information and notify the duty holder",
  "Nothing": "Record no classification until further evidence is available",
  "Nothing at all": "Record no classification until further evidence is available",
  "Nothing — single-pole switches work either way": "Record polarity as a limitation if switching cannot be confirmed",
  "On change of tenancy only": "At the next tenancy event if the report remains within the stated interval",
  "Only 'pass'": "A pass entry without supporting values",
  "Only 5×IΔn test": "The 5×IΔn result where the 1× result is unavailable",
  "Only BS 7671": "BS 7671 where no separate statutory duty applies",
  "Only EAWR": "EAWR where no BS 7671 report has been requested",
  "Only IPX2 in all zones": "IPX2 where the manufacturer states splash protection",
  "Only IΔn": "The rated residual current without trip-time evidence",
  "Only MEIWC": "A Minor Works Certificate without the supporting test schedule",
  "Only On-Site Guide": "On-Site Guide tables without the GN3 inspection method",
  "Only RCD trip times": "RCD trip times with the loop results recorded as a limitation",
  "Only TT systems": "TT systems where the electrode reading is recorded",
  "Only Type B": "Type B devices where smooth DC residual current is expected",
  "Only Zs verification": "Zs verification with the rest of the live tests recorded as limitations",
  "Only a list of room names": "A room-by-room schedule without circuit characteristics",
  "Only a manufacturer's catalogue": "Manufacturer's data without the BS 7671 inspection method",
  "Only after a phase fault": "After an incident where phase sequence may have changed",
  "Only after energising": "After energising, provided dead tests have been documented",
  "Only an emergency contact card": "An emergency contact card with no circuit schedule",
  "Only at IΔn": "The 1× residual-current test where the 5× result is unavailable",
  "Only at the end of the warranty period": "At completion of the defects-liability period",
  "Only cable colours": "Conductor identification without continuity or polarity evidence",
  "Only calculate diversity": "Calculate diversity and maximum demand before each written answer",
  "Only fire safety": "Fire-safety observations without shock-protection checks",
  "Only fire safety stickers": "Fire-safety stickers without circuit identification",
  "Only fire-alarm commissioning": "Fire-alarm commissioning and emergency-lighting verification",
  "Only mechanical items": "Mechanical condition without confirming electrical continuity",
  "Only on initial connection": "On initial connection where no later alteration is recorded",
  "Only portable appliance testing": "In-service equipment testing plus fixed-wiring inspection",
  "Only positive half-cycle matters": "The positive half-cycle result where the negative half-cycle is unavailable",
  "Only quote regulation numbers": "Quote regulation numbers without explaining the inspection decision",
  "Only scheme requirements": "Scheme rules without the BS 7671 inspection method",
  "Only summary statistics": "Summary results without circuit-by-circuit readings",
  "Only test the lighting": "Test the lighting sample and record all other circuits as limitations",
  "Only the 5×IΔn test": "The 5×IΔn result where the 1× result is unavailable",
  "Only the Building Regulations compliance certificate": "The Building Regulations compliance certificate without BS 7671 schedules",
  "Only the EIC": "The EIC without the supporting inspection and test schedules",
  "Only the EIC for the largest contract": "The certificate covering the largest distribution board without the other declared work portions",
  "Only the Electricity at Work Regulations": "The Electricity at Work Regulations without the BS 7671 test method",
  "Only the On-Site Guide": "On-Site Guide tables without the GN3 inspection method",
  "Only the RCD trip times": "RCD trip times with loop readings recorded as limitations",
  "Only the cable colour": "Conductor identification without continuity or polarity evidence",
  "Only the consumer unit label": "The consumer-unit label without circuit identification",
  "Only the customer's name": "The person ordering the work without circuit details",
  "Only the customer's preferred accessory brand": "Manufacturer preferences without circuit schedules or protective-device data",
  "Only the date": "The date and a summary status without circuit-level values",
  "Only the final figures": "Final figures without the test sequence or conditions",
  "Only the final invoice": "A commissioning record without circuit details",
  "Only the integral test button": "The integral test button result without calibrated trip-time readings",
  "Only the lights work": "Functional operation without electrical test evidence",
  "Only the maximum demand": "Maximum demand and supply characteristics without circuit test results",
  "Only the most recent EIC": "The most recent EIC without checking the present installation condition",
  "Only the MCB curve type": "The protective-device curve without Zs or disconnection evidence",
  "Only the overcurrent functional test": "The overcurrent-device operation without the RCD trip-time evidence",
  "Only the supply polarity": "Supply polarity without circuit-level polarity confirmation",
  "Only the supplier's name": "Supplier details without circuit characteristics",
  "Only the test button needs to be pressed": "The integral test button plus a recorded functional check",
  "Only the type of socket plate": "Accessory type without confirming earth continuity",
  "Optional only for outdoor luminaires": "Required where environmental exposure affects the selected equipment",
  "Pending": "Satisfactory subject to later confirmation of remedial work",
  "Refer it to the DNO": "Record the issue and refer it to the duty holder's maintenance process",
  "Refer to the DNO": "Record the issue and refer it to the duty holder's maintenance process",
  "Repeat the report in technical terms only": "Summarise observations without setting out the duty holder's next action",
  "Satisfactory only": "C3 where no immediate danger is present",
  "Skip identification": "Use the existing circuit schedule without confirming it on site",
  "Skip testing — the OCPD is locked": "Use the locked-off device as the sole confirmation",
  "Skip live tests if the dead tests passed": "Record live tests as deferred after satisfactory dead-test results",
  "Skip the lock-off": "Use a written isolation note without fitting a personal lock",
  "Sign Unsatisfactory but add a verbal note": "Sign the report and leave the remedial plan outside the report pack",
  "Standard domestic protection only": "The domestic schedule entry without waveform selection",
  "That the DNO service head can be altered": "That supply characteristics have been identified from intake records",
  "The DNO": "The network operator's intake record",
  "The DNO cut-out": "The intake equipment schedule",
  "The date the customer paid the invoice": "The commissioning date recorded by the contractor",
  "The local authority": "The building-control record holder",
  "The contractor's office address only": "The contractor details without circuit-level schedules",
  "Type AC always": "Type AC where the load profile has no DC residual-current component",
  "Verbal handover only": "A written handover note without certificate schedules",
};

function hardenDistractorText(text: string): string {
  const direct = DISTRACTOR_REPLACEMENTS[text];
  if (direct) return direct;
  let next = text;
  next = next.replace(/^Only (.+)$/i, "$1 without the supporting verification record");
  next = next.replace(/\bonly\b/gi, "without supporting evidence");
  next = next.replace(/\balways\b/gi, "normally");
  next = next.replace(/\bnever\b/gi, "rarely");
  next = next.replace(/\bDNO\b/g, "network operator record");
  next = next.replace(/\blocal authority\b/gi, "building-control record holder");
  next = next.replace(/\bcustomer invoice\b/gi, "commissioning record");
  next = next.replace(/\binvoice\b/gi, "commissioning record");
  next = next.replace(/\bverbal\b/gi, "written");
  next = next.replace(/\bskip\b/gi, "defer");
  next = next.replace(/\bassume\b/gi, "infer from incomplete evidence that");
  next = next.replace(/\btrust\b/gi, "rely on");
  next = next.replace(/\bno paperwork\b/gi, "limited paperwork");
  next = next.replace(/\blunch break\b/gi, "general site notes");
  next = next.replace(/\bkeys\b/gi, "site access record");
  next = next.replace(/\bnothing\b/gi, "no classification until evidence is available");
  return next;
}

function hashString(value: string): number {
  let hash = 2166136261;
  for (let i = 0; i < value.length; i += 1) {
    hash ^= value.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function nextRandom(seed: number): number {
  return (Math.imul(seed, 1664525) + 1013904223) >>> 0;
}

function shuffledChoices(seedText: string): ExamChoice[] {
  const result = [...CHOICES];
  let seed = hashString(seedText);
  for (let i = result.length - 1; i > 0; i -= 1) {
    seed = nextRandom(seed);
    const j = seed % (i + 1);
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function prepareQuestionForDelivery(
  examId: string,
  sectionId: string,
  variantIndex: number,
  question: ExamQuestion
): ExamQuestion {
  if (SOURCE_MOCK_SECTION_IDS.has(sectionId)) return question;
  if (!HARDENED_EXAM_IDS.has(examId)) return question;

  const hardenedOptions = { ...question.options };
  for (const choice of CHOICES) {
    if (choice !== question.answer) {
      hardenedOptions[choice] = hardenDistractorText(hardenedOptions[choice]);
    }
  }

  const shuffled = shuffledChoices(`${examId}:${sectionId}:${variantIndex}:${question.prompt}`);
  const options = {} as Record<ExamChoice, string>;
  let answer = question.answer;
  for (let i = 0; i < CHOICES.length; i += 1) {
    const sourceChoice = shuffled[i];
    const targetChoice = CHOICES[i];
    options[targetChoice] = hardenedOptions[sourceChoice];
    if (sourceChoice === question.answer) answer = targetChoice;
  }
  return { ...question, options, answer };
}

function selectHardestQuestions(
  examId: string,
  sectionId: string,
  questions: ExamQuestion[]
): ExamQuestion[] {
  const limit = SECTION_QUESTION_LIMITS[examId]?.[sectionId];
  if (typeof limit !== "number" || limit >= questions.length) return questions;
  return questions.slice(-limit);
}

function getServedSections(exam: Exam): ExamSection[] {
  return exam.sections;
}

export function getActiveVariantIndex(attemptCount: number, exam: Exam): number {
  const variantCount = exam.sections[0]?.variants.length ?? 1;
  if (variantCount <= 0) return 0;
  return ((attemptCount % variantCount) + variantCount) % variantCount;
}

export function getQuestionsForVariant(exam: Exam, variantIndex: number): ExamQuestion[] {
  const result: ExamQuestion[] = [];
  let n = 1;
  for (const section of getServedSections(exam)) {
    const variant = section.variants[variantIndex % section.variants.length];
    if (!variant) continue;
    for (const q of selectHardestQuestions(exam.id, section.id, variant.questions)) {
      result.push({ ...prepareQuestionForDelivery(exam.id, section.id, variantIndex, q), number: n });
      n += 1;
    }
  }
  return result;
}

export function getSectionQuestionsForVariant(
  exam: Exam,
  variantIndex: number
): Array<{ section: ExamSection; questions: ExamQuestion[] }> {
  const result: Array<{ section: ExamSection; questions: ExamQuestion[] }> = [];
  let n = 1;
  for (const section of getServedSections(exam)) {
    const variant = section.variants[variantIndex % section.variants.length];
    if (!variant) continue;
    const selected = selectHardestQuestions(exam.id, section.id, variant.questions);
    const numbered = selected.map((q) => {
      const numbered = {
        ...prepareQuestionForDelivery(exam.id, section.id, variantIndex, q),
        number: n,
      };
      n += 1;
      return numbered;
    });
    result.push({ section, questions: numbered });
  }
  return result;
}

export function countQuestionsForVariant(exam: Exam, variantIndex: number): number {
  return getServedSections(exam).reduce((sum, section) => {
    const v = section.variants[variantIndex % section.variants.length];
    if (!v) return sum;
    return sum + selectHardestQuestions(exam.id, section.id, v.questions).length;
  }, 0);
}

export function countQuestions(exam: Exam): number {
  return countQuestionsForVariant(exam, 0);
}

export function countQuestionsTotal(exam: Exam): number {
  return exam.sections.reduce(
    (sum, section) => sum + section.variants.reduce((s, v) => s + v.questions.length, 0),
    0
  );
}

export function getVariantCount(exam: Exam): number {
  return exam.sections[0]?.variants.length ?? 0;
}

export function getPassMark(exam: Exam, totalQuestions: number): number {
  return Math.ceil(exam.passPercent * totalQuestions);
}

export type ScoringRange = { minScore: number; range: string; label: string };

export function getScoringRanges(exam: Exam, totalQuestions: number): ScoringRange[] {
  const sorted = [...exam.scoring].sort((a, b) => b.threshold - a.threshold);
  return sorted.map((band, i) => {
    const minScore = Math.ceil(band.threshold * totalQuestions);
    if (i === 0) {
      return { minScore, range: `${minScore}–${totalQuestions}`, label: band.label };
    }
    const prev = sorted[i - 1];
    const prevMin = Math.ceil(prev.threshold * totalQuestions);
    if (i === sorted.length - 1 && minScore === 0) {
      return { minScore: 0, range: `< ${prevMin}`, label: band.label };
    }
    const max = prevMin - 1;
    return { minScore, range: `${minScore}–${max}`, label: band.label };
  });
}

export function getScoringBand(
  exam: Exam,
  correctCount: number,
  totalQuestions: number
): ScoringRange {
  const ranges = getScoringRanges(exam, totalQuestions);
  return ranges.find((b) => correctCount >= b.minScore) ?? ranges[ranges.length - 1];
}
