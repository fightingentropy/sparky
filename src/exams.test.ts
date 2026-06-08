import { describe, expect, it } from "vitest";
import {
  countQuestions,
  countQuestionsForVariant,
  countQuestionsTotal,
  getPassMark,
  getQuestionsForVariant,
  getScoringBand,
  getScoringRanges,
  getVariantCount
} from "./examUtils";
import type { Exam } from "./exams/types";
// Static data fixture for the tests. The app loads exams lazily at runtime via
// examRegistry.ts (fetch by ?url); these direct JSON imports exist only here so
// the test bank stays out of production code. (There used to be a parallel
// src/exams.ts that inlined all of this into an importable module — a 1.7 MB
// footgun — which this replaces.)
import eighteenthEditionExam from "./exam-data/18th-edition.json";
import am2Exam from "./exam-data/am2-installation-assessment.json";
import buildingRegulationsExam from "./exam-data/building-regulations.json";
import ecsHealthSafetyExam from "./exam-data/ecs-health-safety.json";
import initialVerificationExam from "./exam-data/initial-verification.json";
import inspectionDesign2396Exam from "./exam-data/inspection-design-2396.json";
import level2ElectricalInstallationExam from "./exam-data/level-2-electrical-installation.json";
import level3ElectricalInstallationExam from "./exam-data/level-3-electrical-installation.json";
import patTestingExam from "./exam-data/pat-testing.json";
import periodicInspectionExam from "./exam-data/periodic-inspection.json";
import specialLocationsExam from "./exam-data/special-locations.json";

const EXAMS: Exam[] = [
  level2ElectricalInstallationExam,
  level3ElectricalInstallationExam,
  buildingRegulationsExam,
  eighteenthEditionExam,
  specialLocationsExam,
  patTestingExam,
  initialVerificationExam,
  inspectionDesign2396Exam,
  periodicInspectionExam,
  am2Exam,
  ecsHealthSafetyExam
] as unknown as Exam[];

const repeat = (count: number, length: number) => Array.from({ length }, () => count);

const expectedExamOrder = [
  "level-2-electrical-installation",
  "level-3-electrical-installation",
  "building-regulations",
  "18th-edition",
  "special-locations",
  "pat-testing",
  "initial-verification",
  "inspection-design-2396",
  "periodic-inspection",
  "am2-installation-assessment",
  "ecs-health-safety"
] as const;

const expectedPerAttempt: Record<string, number[]> = {
  "level-2-electrical-installation": repeat(30, 5),
  "level-3-electrical-installation": repeat(30, 5),
  "building-regulations": repeat(20, 7),
  "18th-edition": repeat(60, 5),
  "special-locations": [30],
  "pat-testing": [50, 50, 50, 30],
  // variant 5 dropped a duplicate question (90 -> 89).
  "initial-verification": [40, 40, 40, 40, 60, 89, 30, 30],
  // variant 3 dropped three duplicate questions (30 -> 27).
  "inspection-design-2396": [30, 30, 30, 27, 30, 30, 30, 30, 30, 30, 30, 30, 30, 18],
  "periodic-inspection": repeat(40, 5),
  "am2-installation-assessment": repeat(30, 2),
  "ecs-health-safety": [50, 50, 50, 49, 36, 16, 24, 28, 38, 27, 28, 32, 27, 40, 21]
};

const sourceExamIds = new Set([
  "level-2-electrical-installation",
  "level-3-electrical-installation",
  "building-regulations",
  "18th-edition",
  "special-locations",
  "pat-testing",
  "initial-verification",
  "inspection-design-2396",
  "am2-installation-assessment",
  "ecs-health-safety"
]);

function wordCount(value: string): number {
  return value.trim().split(/\s+/).filter(Boolean).length;
}

function normalizedWords(value: string): Set<string> {
  const words = value.toLowerCase().match(/[a-z0-9]+/g) ?? [];
  return new Set(words.filter((word) => word.length > 2));
}

function explanationRepeatsAnswer(explanation: string, answer: string): boolean {
  const explanationWords = normalizedWords(explanation);
  const answerWords = normalizedWords(answer);
  if (answerWords.size === 0) return false;
  let shared = 0;
  for (const word of answerWords) {
    if (explanationWords.has(word)) shared += 1;
  }
  return shared / answerWords.size > 0.85 && wordCount(explanation) < 18;
}

function isBareReference(value: string): boolean {
  const trimmed = value.trim();
  return (
    trimmed.length <= 28 &&
    /\d/.test(trimmed) &&
    /^[A-Za-z0-9 .()/:-]+$/.test(trimmed) &&
    !/\b(because|requires|means|covers|applies|protects|prevents|confirms)\b/i.test(trimmed)
  );
}

describe("exam data", () => {
  it("exposes the canonical exams in the expected order", () => {
    expect(EXAMS.map((exam) => exam.id)).toEqual(expectedExamOrder);
  });

  it("has valid variants, sections, questions, media and scoring bands", () => {
    for (const exam of EXAMS) {
      expect(exam.passPercent).toBeGreaterThan(0);
      expect(exam.passPercent).toBeLessThanOrEqual(1);
      expect(exam.scoring.length).toBeGreaterThan(0);

      const expectedCounts = expectedPerAttempt[exam.id];
      expect(expectedCounts).toBeDefined();
      expect(getVariantCount(exam)).toBe(expectedCounts.length);

      const sectionIds = new Set<string>();
      for (const section of exam.sections) {
        expect(sectionIds.has(section.id)).toBe(false);
        sectionIds.add(section.id);
        expect(section.title).toBeTruthy();
        expect(section.variants.length).toBe(expectedCounts.length);

        const variantIds = new Set<string>();
        for (const variant of section.variants) {
          expect(variantIds.has(variant.id)).toBe(false);
          variantIds.add(variant.id);
          expect(variant.questions.length).toBeGreaterThanOrEqual(1);

          const questionNumbers = new Set<number>();
          for (const question of variant.questions) {
            expect(questionNumbers.has(question.number)).toBe(false);
            questionNumbers.add(question.number);
            expect(question.prompt.trim()).toBe(question.prompt);
            expect(question.prompt.length).toBeGreaterThan(0);
            expect(question.explanation.trim()).toBe(question.explanation);
            expect(question.options[question.answer]).toBeTruthy();
            for (const choice of Object.values(question.options)) {
              expect(choice.trim()).toBe(choice);
              expect(choice.length).toBeGreaterThan(0);
            }
            for (const url of question.imageUrls ?? []) {
              expect(url).toMatch(/^https:\/\/electriciantraining\.co\.uk\//);
            }
            for (const [letter, url] of Object.entries(question.optionImageUrls ?? {})) {
              expect(["A", "B", "C", "D"]).toContain(letter);
              expect(url).toMatch(/^https:\/\/electriciantraining\.co\.uk\//);
            }
          }
        }
      }

      for (let v = 0; v < getVariantCount(exam); v += 1) {
        if (sourceExamIds.has(exam.id)) continue;
        const prompts = new Set<string>();
        for (const question of getQuestionsForVariant(exam, v)) {
          expect(prompts.has(question.prompt)).toBe(false);
          prompts.add(question.prompt);
        }
      }

      const sorted = [...exam.scoring].sort((a, b) => b.threshold - a.threshold);
      expect(sorted[sorted.length - 1].threshold).toBe(0);
      for (let i = 1; i < sorted.length; i += 1) {
        expect(sorted[i - 1].threshold).toBeGreaterThan(sorted[i].threshold);
      }
    }
  });

  it("gives every question four distinct options and no duplicate questions per variant", () => {
    const CHOICES = ["A", "B", "C", "D"] as const;
    const normalize = (value: string) => value.trim().toLowerCase().replace(/\s+/g, " ");

    for (const exam of EXAMS) {
      for (const section of exam.sections) {
        for (const variant of section.variants) {
          const questionSignatures = new Set<string>();
          for (const question of variant.questions) {
            const ctx = `${exam.id}/${variant.id}/Q${question.number}`;
            const optionImages = question.optionImageUrls ?? {};
            // Options that aren't differentiated by a per-option image must be
            // mutually distinct — otherwise a question is degraded (or, if the
            // duplicate is the keyed answer, ungradeable).
            const textOptions = CHOICES.filter((letter) => !optionImages[letter]).map((letter) =>
              normalize(question.options[letter])
            );
            expect(new Set(textOptions).size, `${ctx} has duplicate option text`).toBe(textOptions.length);

            // No two questions in a variant may be identical.
            const signature = JSON.stringify([
              normalize(question.prompt),
              CHOICES.map((letter) => normalize(question.options[letter])),
              question.imageUrls ?? [],
              optionImages
            ]);
            expect(questionSignatures.has(signature), `${ctx} duplicates another question in the variant`).toBe(false);
            questionSignatures.add(signature);
          }
        }
      }
    }
  });

  it("keeps each exam at the configured per-attempt question count", () => {
    for (const exam of EXAMS) {
      const expectedCounts = expectedPerAttempt[exam.id];
      expect(countQuestions(exam)).toBe(expectedCounts[0]);
      for (let v = 0; v < getVariantCount(exam); v += 1) {
        expect(countQuestionsForVariant(exam, v)).toBe(expectedCounts[v]);
      }
      expect(countQuestionsTotal(exam)).toBeGreaterThanOrEqual(expectedCounts.reduce((sum, count) => sum + count, 0));
    }
  });

  it("renumbers questions sequentially across sections in each variant", () => {
    for (const exam of EXAMS) {
      for (let v = 0; v < getVariantCount(exam); v += 1) {
        const questions = getQuestionsForVariant(exam, v);
        for (let i = 0; i < questions.length; i += 1) {
          expect(questions[i].number).toBe(i + 1);
        }
      }
    }
  });

  it("uses explanatory answer rationales instead of placeholders", () => {
    const placeholderPattern = /ElectricianTraining source mock marks this answer as correct/i;

    for (const exam of EXAMS) {
      for (const section of exam.sections) {
        for (const variant of section.variants) {
          for (const question of variant.questions) {
            const context = `${exam.id}/${section.id}/${variant.id}/Q${question.number}`;
            expect(question.explanation, context).not.toMatch(placeholderPattern);
            expect(isBareReference(question.explanation), context).toBe(false);
            expect(wordCount(question.explanation), context).toBeGreaterThanOrEqual(12);
            expect(
              explanationRepeatsAnswer(question.explanation, question.options[question.answer]),
              context
            ).toBe(false);
          }
        }
      }
    }
  });

  it("explains answers specifically, not with reused boilerplate templates", () => {
    const bannedFiller = [
      /matches the protective principle being tested/i,
      /protection questions turn on whether/i,
      /because the question is testing the protective measure/i,
      /practical design or inspection outcome/i,
      /the useful check is to identify the underlying/i,
      /is the result selected by applying the stated formula/i,
      /is the regulation, chapter, section or product standard/i,
      /this type of 2396 question is mainly a navigation/i,
      // "source" referring to the source document / answer key (not the
      // electrical supply, which is legitimate, e.g. "earthed at the source").
      /\bsource[- ](key|value|values|interval|diagram|figure|citation|references?|maximum|minimum|options?|wording|expects?|says?|stated|given|tables?|mock|questions?|rules?|answers?|column|row|list|text|marks|material)\b/i,
      /\bin the source\b/i,
      /\bsource-key\b/i
    ];
    for (const exam of EXAMS) {
      for (const section of exam.sections) {
        for (const variant of section.variants) {
          for (const question of variant.questions) {
            const ctx = `${exam.id}/${variant.id}/Q${question.number}`;
            for (const pattern of bannedFiller) {
              expect(pattern.test(question.explanation), `${ctx}: boilerplate explanation`).toBe(false);
            }
          }
        }
      }
    }
  });

  it("serves source-only ElectricianTraining categories with their source section ids", () => {
    const expectedSectionIds: Record<string, string> = {
      "level-2-electrical-installation": "source-electrician-training-level-2-electrical-installation",
      "level-3-electrical-installation": "source-electrician-training-level-3-electrical-installation",
      "building-regulations": "source-electrician-training-part-p",
      "18th-edition": "source-electrician-training-18th-edition",
      "special-locations": "source-electrician-training-special-locations",
      "pat-testing": "source-electrician-training-pat",
      "initial-verification": "source-electrician-training-2391",
      "inspection-design-2396": "source-electrician-training-2396",
      "am2-installation-assessment": "source-electrician-training-am2",
      "ecs-health-safety": "source-electrician-training-ecs-health-safety"
    };

    for (const [examId, sectionId] of Object.entries(expectedSectionIds)) {
      const exam = EXAMS.find((entry) => entry.id === examId);
      expect(exam).toBeDefined();
      expect(exam!.sections.map((section) => section.id)).toEqual([sectionId]);
      expect(getVariantCount(exam!)).toBe(expectedPerAttempt[examId].length);
    }
  });

  it("preserves key ElectricianTraining source mocks and repaired rows", () => {
    const expectations: Record<string, Array<{ variant: number; length: number; firstPrompt: string }>> = {
      "building-regulations": [
        {
          variant: 0,
          length: 20,
          firstPrompt: "Part 'A' of the building, states that horizontal chases should not be deeper than:"
        }
      ],
      "18th-edition": [
        {
          variant: 0,
          length: 60,
          firstPrompt: "BS7671 applies to the design, erection and verification of which of the following?"
        }
      ],
      "pat-testing": [{ variant: 0, length: 50, firstPrompt: "Class I equipment:" }],
      "initial-verification": [
        { variant: 0, length: 40, firstPrompt: "What is the main purpose of an Initial Verification?" },
        { variant: 1, length: 40, firstPrompt: "Increasing the length of the cable will not affect the:" },
        { variant: 4, length: 60, firstPrompt: "What needs to be verified during the inspection of a new installation?" },
        {
          variant: 5,
          length: 89,
          firstPrompt: "On completion of a new installation, the Electrical Installation Certificate would 'not' be signed by the:"
        }
      ],
      "inspection-design-2396": [
        {
          variant: 0,
          length: 30,
          firstPrompt: "What is the definition of a device designed to 'make and break contact off-load'?"
        },
        { variant: 13, length: 18, firstPrompt: "What type of battery-powered 'dual' test instrument is shown here?" }
      ],
      "ecs-health-safety": [
        {
          variant: 0,
          length: 50,
          firstPrompt:
            "If you discover a hole or gap in a fire rated wall or floor that has not been fire-stopped, what should you do?"
        }
      ]
    };

    for (const [examId, mocks] of Object.entries(expectations)) {
      const exam = EXAMS.find((entry) => entry.id === examId);
      expect(exam).toBeDefined();
      for (const mock of mocks) {
        const attempt = getQuestionsForVariant(exam!, mock.variant);
        expect(attempt).toHaveLength(mock.length);
        expect(attempt[0].prompt).toBe(mock.firstPrompt);
      }
    }

    const initial = EXAMS.find((entry) => entry.id === "initial-verification");
    expect(initial).toBeDefined();
    const repairedQuestion = getQuestionsForVariant(initial!, 1)[11];
    expect(repairedQuestion.prompt).toBe("Prior to energising, polarity should be tested using?");
    expect(repairedQuestion.options[repairedQuestion.answer]).toBe(
      "A continuity tester or low-resistance ohmmeter"
    );
  });

  it("keeps source image questions renderable", () => {
    const design2396 = EXAMS.find((entry) => entry.id === "inspection-design-2396");
    expect(design2396).toBeDefined();
    expect(getQuestionsForVariant(design2396!, 13)[0].imageUrls).toEqual([
      "https://electriciantraining.co.uk/images-18/test-instruments-Q1.jpg"
    ]);

    const level3 = EXAMS.find((entry) => entry.id === "level-3-electrical-installation");
    expect(level3).toBeDefined();
    const formulaQuestion = getQuestionsForVariant(level3!, 0).find((question) =>
      question.prompt.includes("formula used to determine Impedance")
    );
    expect(formulaQuestion).toBeDefined();
    expect(Object.keys(formulaQuestion!.optionImageUrls ?? {})).toHaveLength(4);
  });

  it("computes pass marks from each exam's configured percentage", () => {
    const expectedPassPercent: Record<string, number> = {
      "level-2-electrical-installation": 0.6,
      "level-3-electrical-installation": 0.6,
      "building-regulations": 0.6,
      "18th-edition": 0.6,
      "special-locations": 0.6,
      "pat-testing": 0.8,
      "initial-verification": 0.6,
      "inspection-design-2396": 0.6,
      "periodic-inspection": 0.75,
      "am2-installation-assessment": 0.6,
      "ecs-health-safety": 0.86
    };

    for (const exam of EXAMS) {
      expect(exam.passPercent).toBe(expectedPassPercent[exam.id]);
      for (let v = 0; v < getVariantCount(exam); v += 1) {
        const total = countQuestionsForVariant(exam, v);
        expect(getPassMark(exam, total)).toBe(Math.ceil(exam.passPercent * total));
      }
    }
  });

  it("serves the curated periodic inspection condition reporting paper", () => {
    const exam = EXAMS.find((entry) => entry.id === "periodic-inspection");
    expect(exam).toBeDefined();
    const questions = getQuestionsForVariant(exam!, 0);
    expect(getVariantCount(exam!)).toBe(5);
    expect(questions).toHaveLength(40);
    expect(questions[0].prompt).toBe(
      "If an EICR for a rented dwelling identifies a C1 or C2 item, or requires further investigation, the landlord under the 2020 private rented sector electrical safety duties must normally arrange the required remedial or investigative work within:"
    );
    expect(questions[39].prompt).toBe(
      "In a block of flats, several consumer-unit and distribution-board cable entries pass through a fire-resisting wall into a common escape route. Gaps around trunking and cables are unsealed. No thermal damage is present. What is the best classification?"
    );
    expect(questions.map((question) => question.answer).join("")).toBe("CACBDBABCDCADCCACBCADBACDBCADCABDCABDCAB");
  });

  it("keeps served distractors plausible in generated inspection categories", () => {
    const weakDistractorPattern =
      /\b(only|always|never|verbal|customer invoice|lunch|DNO|skip|assume|trust|no further action|nothing|no paperwork|satisfactory only|FI only|C3 only|all good)\b/i;

    const exam = EXAMS.find((entry) => entry.id === "periodic-inspection");
    expect(exam).toBeDefined();
    for (let v = 0; v < getVariantCount(exam!); v += 1) {
      for (const question of getQuestionsForVariant(exam!, v)) {
        if (question.preserveChoices) continue;
        for (const [letter, option] of Object.entries(question.options)) {
          if (letter === question.answer) continue;
          expect(option).not.toMatch(weakDistractorPattern);
        }
      }
    }
  });

  it("balances served answer letters in generated inspection categories", () => {
    const exam = EXAMS.find((entry) => entry.id === "periodic-inspection");
    expect(exam).toBeDefined();
    const counts: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
    let total = 0;
    for (let v = 0; v < getVariantCount(exam!); v += 1) {
      for (const question of getQuestionsForVariant(exam!, v)) {
        counts[question.answer] += 1;
        total += 1;
      }
    }

    for (const count of Object.values(counts)) {
      expect(count / total).toBeGreaterThan(0.12);
      expect(count / total).toBeLessThan(0.4);
    }
  });

  it("returns scoring ranges that cover the full score range", () => {
    for (const exam of EXAMS) {
      const total = countQuestions(exam);
      const ranges = getScoringRanges(exam, total);
      expect(ranges.length).toBe(exam.scoring.length);
      expect(ranges[0].range).toContain(`${total}`);
      expect(ranges[ranges.length - 1].minScore).toBe(0);
    }
  });

  it("scores correct counts into descending bands", () => {
    const exam = EXAMS.find((entry) => entry.id === "periodic-inspection");
    expect(exam).toBeDefined();
    const total = countQuestions(exam!);
    expect(total).toBe(40);

    expect(getScoringBand(exam!, 36, total).minScore).toBe(36);
    expect(getScoringBand(exam!, 40, total).minScore).toBe(36);
    expect(getScoringBand(exam!, 30, total).minScore).toBe(30);
    expect(getScoringBand(exam!, 35, total).minScore).toBe(30);
    expect(getScoringBand(exam!, 22, total).minScore).toBe(22);
    expect(getScoringBand(exam!, 29, total).minScore).toBe(22);
    expect(getScoringBand(exam!, 0, total).minScore).toBe(0);
    expect(getScoringBand(exam!, 21, total).minScore).toBe(0);
  });
});
