import { describe, expect, it } from "vitest";
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
import { applyExamExplanationEnhancements } from "./examExplanationEnhancements";
import { applyExamSolutionTables } from "./examSolutionTables";
import { buildFundamentalInspectionExam } from "./fundamentalInspectionExam";
import { buildInitialVerificationExam } from "./initialVerificationExam";
import {
  buildOptionFeedback,
  buildOptionExplanations,
  CURATED_RATIONALE_SETS,
  EXAM_RATIONALE_SOURCES,
} from "./examOptionExplanations";
import { getQuestionsForVariant } from "./examUtils";
import type { Exam, ExamQuestion } from "./exams/types";

const initialVerificationSource = applyExamSolutionTables(
  applyExamExplanationEnhancements(initialVerificationExam as unknown as Exam)
);
const fundamentalInspectionExam = buildFundamentalInspectionExam(initialVerificationSource);
const focusedInitialVerificationExam = buildInitialVerificationExam(
  initialVerificationSource
);

const EXAMS = [
  eighteenthEditionExam,
  am2Exam,
  buildingRegulationsExam,
  ecsHealthSafetyExam,
  fundamentalInspectionExam,
  focusedInitialVerificationExam,
  inspectionDesign2396Exam,
  level2ElectricalInstallationExam,
  level3ElectricalInstallationExam,
  patTestingExam,
  periodicInspectionExam,
  specialLocationsExam,
] as unknown as Exam[];

const CHOICES = ["A", "B", "C", "D"] as const;
const IMPORTED_HOMEWORK_VARIANTS = new Set([
  "18th-edition/wiring-regulations-homework",
  "building-regulations/building-regulations-homework",
  "fundamental-inspection-testing/fundamental-inspection-testing-homework",
  "initial-verification/initial-verification-homework",
  "pat-testing/portable-appliance-testing-homework",
  "periodic-inspection/v6",
]);

function allQuestions(exams: Exam[] = EXAMS): ExamQuestion[] {
  return exams.flatMap((exam) =>
    exam.sections.flatMap((section) =>
      section.variants.flatMap((variant) => variant.questions),
    ),
  );
}

describe("exam option explanations", () => {
  it("shows the full correct explanation and feedback for all 14,886 distractors", () => {
    const questions = allQuestions();
    let distractorCount = 0;

    expect(questions).toHaveLength(4962);
    for (const question of questions) {
      const feedback = buildOptionExplanations(question);
      expect(Object.keys(feedback)).toEqual(CHOICES);
      expect(feedback[question.answer]).toBe(
        question.explanation.replace(/\s+/g, " ").trim(),
      );

      for (const choice of CHOICES) {
        const value = feedback[choice];
        expect(typeof value).toBe("string");
        expect(value.length).toBeGreaterThan(20);
        if (choice !== question.answer) {
          expect(value).not.toMatch(/…|\.\.\./);
          expect(value).not.toMatch(
            /does not fit the rule or situation described|the applicable answer is|does not satisfy the exception requested|differs from the required answer|identifies something other than the referenced image/i,
          );
          distractorCount += 1;
        }
      }
    }

    expect(distractorCount).toBe(14_886);
  });

  it("keeps the complete authored rationale when no safe option-specific reason exists", () => {
    const explanation =
      "This complete rationale deliberately exceeds the former distractor limit. " +
      "It explains the governing rule, how it applies to the situation, and why the recorded answer follows from that rule without dropping any supporting detail. "
        .repeat(3)
        .trim();
    const correctOption =
      "The complete applicable answer with every qualification that must remain visible to the learner";
    const wrongOptions = {
      B: "A distractor whose full wording is intentionally longer than the former answer-label limit",
      C: "Another distractor whose complete wording must appear without an inserted ellipsis or cutoff",
      D: "The final deliberately long distractor used to verify that every explanation remains complete",
    } as const;
    const question: ExamQuestion = {
      number: 1,
      prompt: "Which complete answer applies in this situation?",
      options: { A: correctOption, ...wrongOptions },
      answer: "A",
      explanation,
    };

    expect(explanation.length).toBeGreaterThan(260);
    expect(correctOption.length).toBeGreaterThan(72);
    for (const option of Object.values(wrongOptions)) {
      expect(option.length).toBeGreaterThan(72);
    }

    const feedback = buildOptionExplanations(question);
    expect(feedback.A).toBe(explanation);
    for (const choice of ["B", "C", "D"] as const) {
      expect(feedback[choice]).toBe(explanation);
      expect(feedback[choice]).not.toContain("…");
    }
  });

  it("marks unreviewed distractor text as fallback instead of option-specific feedback", () => {
    const question: ExamQuestion = {
      number: 1,
      prompt:
        "Which device is suitable for this deliberately unreviewed example?",
      options: {
        A: "Device one",
        B: "Device two",
        C: "Device three",
        D: "Device four",
      },
      answer: "B",
      explanation:
        "Device two has the characteristic required by this example.",
    };

    const feedback = buildOptionFeedback(question);
    expect(feedback[question.answer]).toMatchObject({ kind: "correct" });
    for (const choice of CHOICES) {
      if (choice === question.answer) continue;
      expect(feedback[choice]).toMatchObject({ kind: "fallback" });
    }
  });

  it("marks researched and mechanically proven distractor reasons distinctly", () => {
    const reviewedQuestion = allQuestions([
      patTestingExam as unknown as Exam,
    ]).find(
      (entry) =>
        entry.prompt ===
        "The most important check, when assessing the level of safety of an electrical appliance, is:",
    );
    const derivedQuestion: ExamQuestion = {
      number: 2,
      prompt: "What is the minimum permitted clearance?",
      options: { A: "0.5 m", B: "1.0 m", C: "1.5 m", D: "2.0 m" },
      answer: "B",
      explanation: "The stated minimum permitted clearance is 1.0 m.",
    };

    expect(reviewedQuestion).toBeDefined();
    const reviewed = buildOptionFeedback(reviewedQuestion!);
    const derived = buildOptionFeedback(derivedQuestion);

    for (const choice of CHOICES) {
      if (choice !== reviewedQuestion!.answer) {
        expect(reviewed[choice].kind).toBe("reviewed");
      }
      if (choice !== derivedQuestion.answer) {
        expect(derived[choice].kind).toBe("derived");
      }
    }
  });

  it("never generates a placeholder comparison instead of an explanation", () => {
    for (const question of allQuestions()) {
      const feedback = buildOptionExplanations(question);
      for (const choice of CHOICES) {
        if (choice === question.answer) continue;
        expect(feedback[choice]).not.toMatch(
          /does not fit the rule or situation described|the applicable answer is|does not satisfy the exception requested|differs from the required answer|identifies something other than the referenced image|this is not (?:the|an) answer|wrong because it is wrong/i,
        );
      }
    }
  });

  it("uses distinct academic rationales for the PAT visual-inspection distractors", () => {
    const question = allQuestions([patTestingExam as unknown as Exam]).find(
      (entry) =>
        entry.prompt ===
        "The most important check, when assessing the level of safety of an electrical appliance, is:",
    );

    expect(question).toBeDefined();
    const feedback = buildOptionExplanations(question!);
    expect(feedback.A).toContain(
      "current from live parts to earth or accessible surfaces",
    );
    expect(feedback.B).toContain("high voltage to prove dielectric strength");
    expect(feedback.C).toContain("finds hidden insulation faults");
    expect(new Set([feedback.A, feedback.B, feedback.C]).size).toBe(3);
  });

  it("attaches curated rationales by option meaning after choices are shuffled", () => {
    const question: ExamQuestion = {
      number: 2,
      prompt:
        "The most important check, when assessing the level of safety of an electrical appliance, is:",
      options: {
        A: "Insulation resistance testing",
        B: "Visual inspection",
        C: "Flash testing",
        D: "Earth leakage current testing",
      },
      answer: "B",
      explanation:
        "Visual inspection finds common visible defects before instrument testing.",
    };

    const feedback = buildOptionExplanations(question);
    expect(feedback.A).toContain("finds hidden insulation faults");
    expect(feedback.C).toContain("high voltage to prove dielectric strength");
    expect(feedback.D).toContain(
      "current from live parts to earth or accessible surfaces",
    );
  });

  it("explains every certificate choice in the swimming-pool scenario", () => {
    const question = allQuestions([
      initialVerificationExam as unknown as Exam,
    ]).find((entry) =>
      entry.prompt.includes(
        "What document must be completed following inspection and testing?",
      ),
    );

    expect(question).toBeDefined();
    const feedback = buildOptionExplanations(question!);
    expect(feedback.A).toBe(question!.explanation);
    expect(feedback.B).toContain(
      "condition of an existing electrical installation",
    );
    expect(feedback.C).toContain("does not provide a new circuit");
    expect(feedback.D).toContain("not the required BS 7671 certificate");
  });

  it("describes both sides of a minimum truthfully", () => {
    const question = allQuestions([
      buildingRegulationsExam as unknown as Exam,
    ]).find((entry) =>
      entry.prompt.includes("minimum number of smoke alarms required"),
    );

    expect(question).toBeDefined();
    const feedback = buildOptionExplanations(question!);
    expect(feedback.A).toContain("no automatic warning");
    expect(feedback.B).toContain(
      "cannot provide the minimum circulation-space",
    );
    expect(feedback.C).toContain(
      "smoke alarms on the escape route of each storey",
    );
    expect(feedback.D).toContain("minimum in the stated two-storey scenario");
    expect(feedback.D).not.toContain("Too high");
  });

  it("describes a lower maximum against the requested boundary rather than as too low", () => {
    const question: ExamQuestion = {
      number: 1,
      prompt: "What is the maximum permitted length?",
      options: { A: "6 m", B: "12 m", C: "18 m", D: "24 m" },
      answer: "B",
      explanation: "The stated maximum permitted length is 12 m.",
    };

    const feedback = buildOptionExplanations(question);
    expect(feedback.A).toMatch(
      /^6 m is below the permitted maximum of 12 m, so it is not the maximum value asked for\./,
    );
    expect(feedback.C).toMatch(/^18 m exceeds the permitted maximum of 12 m\./);
    expect(feedback.D).toMatch(/^24 m exceeds the permitted maximum of 12 m\./);
    expect(feedback.A).not.toContain("Too low");
  });

  it("treats 'must not exceed' as a maximum rather than an exception", () => {
    const question: ExamQuestion = {
      number: 1,
      prompt: "The nominal voltage must not exceed which value?",
      options: { A: "230 V", B: "400 V", C: "500 V", D: "690 V" },
      answer: "C",
      explanation: "The stated maximum nominal voltage is 500 V.",
    };

    const feedback = buildOptionExplanations(question);
    expect(feedback.A).toMatch(
      /^230 V is below the permitted maximum of 500 V/,
    );
    expect(feedback.B).toMatch(
      /^400 V is below the permitted maximum of 500 V/,
    );
    expect(feedback.D).toMatch(/^690 V exceeds the permitted maximum of 500 V/);
    expect(`${feedback.A} ${feedback.B} ${feedback.D}`).not.toContain(
      "exception requested",
    );
  });

  it("treats 'not less than' as a minimum rather than an exception", () => {
    const question = allQuestions([
      specialLocationsExam as unknown as Exam,
    ]).find((entry) =>
      entry.prompt.includes(
        "Radiant heaters used in the vicinity of livestock",
      ),
    );

    expect(question).toBeDefined();
    const feedback = buildOptionExplanations(question!);
    expect(feedback.B).toContain("not the general minimum");
    expect(feedback.C).toContain("unrelated hazards and dimensions");
    expect(feedback.D).toContain("exceed the general minimum");
    expect(`${feedback.B} ${feedback.C} ${feedback.D}`).not.toContain(
      "exception requested",
    );
  });

  it("distinguishes production and type testing from an in-service condition check", () => {
    const question = allQuestions([patTestingExam as unknown as Exam]).find(
      (entry) =>
        entry.prompt === "The most important check on a portable appliance is:",
    );

    expect(question).toBeDefined();
    const feedback = buildOptionExplanations(question!);
    expect(feedback.A).toContain("present condition");
    expect(feedback.B).toContain("during manufacture");
    expect(feedback.C).toContain("representative design or sample");
  });

  it("uses the authored teaching rationale for conceptual distractors without inventing facts", () => {
    const question: ExamQuestion = {
      number: 1,
      prompt: "Which conceptual answer applies to this unreviewed example?",
      options: {
        A: "First concept",
        B: "Second concept",
        C: "Third concept",
        D: "Fourth concept",
      },
      answer: "C",
      explanation:
        "The third concept is correct because it has the governing characteristic stated by the source material.",
    };

    const feedback = buildOptionExplanations(question);
    const rationale = question.explanation.replace(/\s+/g, " ").trim();
    expect(feedback[question.answer]).toBe(rationale);
    for (const choice of CHOICES) {
      if (choice === question.answer) continue;
      expect(feedback[choice]).toBe(rationale);
      expect(feedback[choice]).not.toMatch(/does not fit|applicable answer/i);
    }
  });

  it("does not fabricate contrasts for negative or image-dependent distractors", () => {
    const negativeQuestion: ExamQuestion = {
      number: 1,
      prompt: "Which value is not the stated result?",
      options: { A: "10 V", B: "20 V", C: "30 V", D: "40 V" },
      answer: "C",
      explanation: "The worked result in the source question is 30 V.",
    };
    const imageQuestion: ExamQuestion = {
      number: 2,
      prompt: "Identify the item shown.",
      imageUrls: ["/exam-images/example.png"],
      options: {
        A: "Clamp meter",
        B: "Loop tester",
        C: "RCD tester",
        D: "Proving unit",
      },
      answer: "A",
      explanation: "The pictured instrument is a clamp meter.",
    };

    const negativeFeedback = buildOptionExplanations(negativeQuestion);
    expect(negativeFeedback.C).toBe(
      "The worked result in the source question is 30 V.",
    );
    for (const choice of ["A", "B", "D"] as const) {
      expect(negativeFeedback[choice]).toBe(
        "The worked result in the source question is 30 V.",
      );
    }

    const imageFeedback = buildOptionExplanations(imageQuestion);
    expect(imageFeedback.A).toBe("The pictured instrument is a clamp meter.");
    for (const choice of ["B", "C", "D"] as const) {
      expect(imageFeedback[choice]).toBe(
        "The pictured instrument is a clamp meter.",
      );
    }
  });

  it("gives each unrecorded hotel circuit distractor a researched practical reason", () => {
    const enhancedExam = applyExamExplanationEnhancements(
      initialVerificationExam as unknown as Exam,
    );
    const question = allQuestions([enhancedExam]).find((entry) =>
      entry.prompt.includes(
        "What action should be taken with regard to the additional socket-outlet circuits?",
      ),
    );

    expect(question).toBeDefined();
    const feedback = buildOptionExplanations(question!);
    expect(feedback.A).toContain(
      "neither has evidence on which sampling can be based",
    );
    expect(feedback.B).toContain("Sampling is not enough here");
    expect(feedback.B).toContain("Each circuit needs the full relevant tests");
    expect(feedback.C).toContain("Inspection also cannot provide measurements");
    expect(feedback.C).toContain(
      "continuity, insulation resistance, polarity and earth fault loop impedance",
    );
    expect(feedback.D).toContain("misses one circuit completely");
    expect(feedback.D).toContain("does not fully test the other");
    expect(new Set([feedback.B, feedback.C, feedback.D]).size).toBe(3);
    expect(`${feedback.B} ${feedback.C} ${feedback.D}`).not.toMatch(
      /does not fit|applicable answer/i,
    );
  });

  it("keeps rented-sector deadline distractors concise instead of repeating the answer rationale", () => {
    const enhancedExam = applyExamExplanationEnhancements(
      periodicInspectionExam as unknown as Exam,
    );
    const question = allQuestions([enhancedExam]).find((entry) =>
      entry.prompt.startsWith(
        "If an EICR for a rented dwelling identifies a C1 or C2 item",
      ),
    );

    expect(question).toBeDefined();
    const feedback = buildOptionExplanations(question!);
    expect(feedback.A).toContain("outstanding for about 90 days");
    expect(feedback.D).toContain("A year-long delay is not allowed");
    for (const choice of ["A", "D"] as const) {
      expect(feedback[choice]).toContain("28 days");
      expect(feedback[choice]).toContain("C1 must be made safe immediately");
      expect(feedback[choice]).not.toContain(
        "For rented dwellings covered by the 2020 regulations",
      );
      expect(feedback[choice].match(/28 days/g)).toHaveLength(1);
    }
  });

  it("keeps an auditable source record for curated electrical rationales", () => {
    expect(EXAM_RATIONALE_SOURCES["mod-sampling-guide"]).toMatchObject({
      publisher: "UK Ministry of Defence",
      locator: "Section 9.3.1-9.3.3, sampling and records",
      verifiedOn: "2026-07-13",
    });
    expect(EXAM_RATIONALE_SOURCES["iet-eicr-myths"].url).toMatch(
      /^https:\/\/electrical\.theiet\.org\//,
    );
    expect(EXAM_RATIONALE_SOURCES["iet-model-forms-a4"].url).toMatch(
      /^https:\/\/electrical\.theiet\.org\//,
    );
  });

  it("provides a distinct reviewed reason for every distractor in Initial Verification test 5", () => {
    const enhancedExam = applyExamExplanationEnhancements(
      initialVerificationExam as unknown as Exam,
    );
    const variant = enhancedExam.sections
      .flatMap((section) => section.variants)
      .find((entry) => entry.id === "quiz-29749");
    let reviewedDistractors = 0;

    expect(variant?.questions).toHaveLength(60);
    for (const question of variant!.questions) {
      const feedback = buildOptionExplanations(question);
      const wrongReasons = CHOICES.filter(
        (choice) => choice !== question.answer,
      ).map((choice) => feedback[choice]);

      expect(
        new Set(wrongReasons).size,
        `Q${question.number}: ${question.prompt}`,
      ).toBe(3);
      for (const reason of wrongReasons) {
        expect(reason).not.toBe(
          question.explanation.replace(/\s+/g, " ").trim(),
        );
        expect(reason).not.toMatch(
          /does not fit the rule|applicable answer|exception requested|differs from the required answer|wrong because/i,
        );
        reviewedDistractors += 1;
      }
    }

    expect(reviewedDistractors).toBe(180);
  });

  it("attaches official or manufacturer source URLs to every reviewed question", () => {
    const sourcedSets = CURATED_RATIONALE_SETS.filter(
      (entry): entry is typeof entry & { sourceUrls: readonly string[] } =>
        "sourceUrls" in entry && Array.isArray(entry.sourceUrls),
    );

    expect(sourcedSets).toHaveLength(4941);
    for (const entry of sourcedSets) {
      expect(entry.sourceUrls.length).toBeGreaterThan(0);
      for (const sourceUrl of entry.sourceUrls) {
        expect(sourceUrl).toMatch(/^https:\/\//);
      }
    }
  });

  it("keeps every curated distractor rationale complete, distinct, and option-specific", () => {
    for (const entry of CURATED_RATIONALE_SETS) {
      const wrongOptions = entry.options.filter(
        (option) => option !== entry.answer,
      );
      const reasons = wrongOptions.map((option) => entry.rationales[option]);

      expect(Object.keys(entry.rationales).sort(), entry.prompt).toEqual(
        [...wrongOptions].sort(),
      );
      expect(new Set(reasons).size, entry.prompt).toBe(wrongOptions.length);
      for (const reason of reasons) {
        expect(reason.length, entry.prompt).toBeGreaterThan(35);
        expect(reason, entry.prompt).not.toMatch(/…|\.\.\./);
        expect(reason, entry.prompt).not.toMatch(
          /does not fit the rule|applicable answer|bank (?:key|question)|question is (?:ambiguous|defective)|wrong because (?:it is wrong|the correct answer)|focuses on the wrong feature|the decision must follow the observed|does not match the ring-test evidence|does not follow an insulation-resistance assessment|does not explain the conductor arrangement|confuses a loop component or comparison|overlooks the actual earthing or bonding function|assigns the wrong reporting function|ignores coordination between|misstates what a limitation does|concerns a different design condition|would address a different characteristic|changes or describes another part|remains an applicable item when assessing|that is different from the (?:specific|stated|required|installation|design|protective|switching|document|special|tabulated)|^the claim\b|rests on a technical assumption|the inspection evidence does not support|(?:would )?appl(?:y|ies) the wrong (?:numerical limit|rented-sector duty)|would not establish the particular property or safety condition|would make the document certify or record something outside|gives it a danger level that the stated evidence does not support|would misstate or arbitrarily narrow the evidence covered|changes the equipment or circuit arrangement|describes a conductor or containment feature|supplies evidence about only one stage or characteristic|the danger level has to be tied to the stated finding|turns a dated condition assessment into a guarantee|confuses a condition report with certification|treating .{0,100} as automatic removes the evidence-based judgement|the absolute wording discards|the stem already states|the facts already establish the relevant condition|the question asks what|this option proposes|the question states only/i,
        );
      }
    }
  });

  it("fully reviews established papers and keeps complete authored feedback for imported homework papers", () => {
    const enhancedExams = EXAMS.map(applyExamExplanationEnhancements);
    let questionCount = 0;
    let distractorCount = 0;

    for (const exam of enhancedExams) {
      for (const section of exam.sections) {
        for (const variant of section.variants) {
          const isImportedHomework = IMPORTED_HOMEWORK_VARIANTS.has(
            `${exam.id}/${variant.id}`,
          );
          for (const question of variant.questions) {
            questionCount += 1;
            const feedback = buildOptionFeedback(question);
            const correctExplanation = question.explanation
              .replace(/\s+/g, " ")
              .trim();
            expect(feedback[question.answer].kind).toBe("correct");

            for (const choice of CHOICES) {
              if (choice === question.answer) continue;
              if (isImportedHomework) {
                expect(feedback[choice].text.length).toBeGreaterThan(20);
              } else {
                expect(
                  feedback[choice].kind,
                  `${exam.id}/${section.id}/${variant.id} Q${question.number} ${choice}: ${question.prompt}`,
                ).toBe("reviewed");
                if (correctExplanation.length > 35) {
                  expect(
                    feedback[choice].text,
                    `${exam.id}/${section.id}/${variant.id} Q${question.number} ${choice} repeats the correct-answer explanation`,
                  ).not.toContain(correctExplanation);
                }
              }
              distractorCount += 1;
            }
          }
        }
      }
    }

    expect(questionCount).toBe(4_962);
    expect(distractorCount).toBe(14_886);
  });

  it("describes single choices as incomplete when all listed choices are required", () => {
    const question: ExamQuestion = {
      number: 1,
      prompt: "Which records should be retained?",
      options: {
        A: "The test schedule",
        B: "The certificate",
        C: "The inspection record",
        D: "All of the above",
      },
      answer: "D",
      explanation: "The complete handover pack contains every listed record.",
    };

    const feedback = buildOptionExplanations(question);
    expect(feedback.A).toContain(
      "incomplete on its own because every listed item is required",
    );
    expect(feedback.B).toContain(
      "incomplete on its own because every listed item is required",
    );
    expect(feedback.C).toContain(
      "incomplete on its own because every listed item is required",
    );
  });

  it("recognizes none-of-the-options wording without inventing option facts", () => {
    const question: ExamQuestion = {
      number: 1,
      prompt: "Which option applies?",
      options: {
        A: "The first condition",
        B: "The second condition",
        C: "The third condition",
        D: "None of the options listed",
      },
      answer: "D",
      explanation:
        "The stated situation is outside all three listed conditions.",
    };

    const feedback = buildOptionExplanations(question);
    expect(feedback.A).toContain(
      "not valid here because none of the listed conditions applies",
    );
    expect(feedback.B).toContain(
      "not valid here because none of the listed conditions applies",
    );
    expect(feedback.C).toContain(
      "not valid here because none of the listed conditions applies",
    );
  });

  it("builds feedback from post-shuffle Periodic Inspection choices", () => {
    const exam = periodicInspectionExam as unknown as Exam;
    const delivered = getQuestionsForVariant(exam, 1);
    const rawQuestions = exam.sections.flatMap(
      (section) => section.variants[1]?.questions ?? [],
    );
    const question = delivered.find((entry) => {
      const raw = rawQuestions.find(
        (candidate) => candidate.prompt === entry.prompt,
      );
      return raw && raw.answer !== entry.answer;
    });
    const raw = rawQuestions.find((entry) => entry.prompt === question?.prompt);

    expect(question).toBeDefined();
    expect(raw).toBeDefined();
    expect(question!.answer).not.toBe(raw!.answer);
    expect(question!.options[question!.answer]).toBe(raw!.options[raw!.answer]);

    const feedback = buildOptionExplanations(question!);
    const rationaleStart = question!.explanation.slice(0, 35);
    expect(feedback[question!.answer]).toContain(rationaleStart);
    for (const [choice, value] of Object.entries(feedback)) {
      if (choice === question!.answer) continue;
      expect(value).not.toMatch(/does not match|keyed answer/i);
    }
  });

  it("is deterministic and leaves the source question untouched", () => {
    const question = allQuestions()[0];
    const before = structuredClone(question);

    const first = buildOptionExplanations(question);
    const second = buildOptionExplanations(question);

    expect(first).toEqual(second);
    expect(question).toEqual(before);
    expect(question).not.toHaveProperty("optionExplanations");
  });
});
