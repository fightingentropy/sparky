import { describe, expect, it } from "vitest";
import eighteenthEditionExam from "./exam-data/18th-edition.json";
import am2InstallationAssessmentExam from "./exam-data/am2-installation-assessment.json";
import buildingRegulationsExam from "./exam-data/building-regulations.json";
import ecsHealthSafetyExam from "./exam-data/ecs-health-safety.json";
import initialVerificationExam from "./exam-data/initial-verification.json";
import inspectionDesign2396Exam from "./exam-data/inspection-design-2396.json";
import level2ElectricalInstallationExam from "./exam-data/level-2-electrical-installation.json";
import level3ElectricalInstallationExam from "./exam-data/level-3-electrical-installation.json";
import patTestingExam from "./exam-data/pat-testing.json";
import periodicInspectionExam from "./exam-data/periodic-inspection.json";
import specialLocationsExam from "./exam-data/special-locations.json";
import { periodicInspectionEicrPart2 } from "./examRationales/periodicInspectionEicrPart2";
import { periodicInspectionPart1 } from "./examRationales/periodicInspectionPart1";
import {
  applyExamExplanationEnhancements,
  EXAM_EXPLANATION_OVERRIDES,
  EXAM_QUESTION_CORRECTIONS
} from "./examExplanationEnhancements";
import type { Exam } from "./exams/types";

const rawExam = initialVerificationExam as unknown as Exam;

function allQuestions(exam: Exam) {
  return exam.sections.flatMap((section) =>
    section.variants.flatMap((variant) => variant.questions)
  );
}

describe("exam explanation enhancements", () => {
  it("matches every correction to the intended raw question", () => {
    const exams = [
      rawExam,
      eighteenthEditionExam as unknown as Exam,
      am2InstallationAssessmentExam as unknown as Exam,
      buildingRegulationsExam as unknown as Exam,
      ecsHealthSafetyExam as unknown as Exam,
      inspectionDesign2396Exam as unknown as Exam,
      level2ElectricalInstallationExam as unknown as Exam,
      level3ElectricalInstallationExam as unknown as Exam,
      patTestingExam as unknown as Exam,
      periodicInspectionExam as unknown as Exam,
      specialLocationsExam as unknown as Exam
    ];

    for (const correction of EXAM_QUESTION_CORRECTIONS) {
      const matches = exams.flatMap((exam) =>
        exam.sections.flatMap((section) =>
          section.variants.flatMap((variant) =>
            variant.questions.filter(
              (question) =>
                (!correction.examId || correction.examId === exam.id) &&
                (!correction.variantId || correction.variantId === variant.id) &&
                (!correction.questionNumber || correction.questionNumber === question.number) &&
                question.prompt.endsWith(correction.promptSuffix)
            )
          )
        )
      );

      expect(matches.length, correction.promptSuffix).toBeGreaterThan(0);
      if (correction.examId && correction.variantId && correction.questionNumber) {
        expect(matches, correction.promptSuffix).toHaveLength(1);
      }
    }
  });

  it("applies every curated explanation to the Initial Verification bank", () => {
    const enhanced = applyExamExplanationEnhancements(rawExam);

    for (const [prompt, explanation] of Object.entries(EXAM_EXPLANATION_OVERRIDES)) {
      const matches = rawExam.sections.flatMap((section) =>
        section.variants.flatMap((variant) =>
          variant.questions
            .filter((question) => question.prompt === prompt)
            .map((question) => ({ variantId: variant.id, question }))
        )
      );
      expect(matches.length, `missing enhanced question: ${prompt}`).toBeGreaterThan(0);
      for (const match of matches) {
        const question = enhanced.sections
          .flatMap((section) => section.variants)
          .find((variant) => variant.id === match.variantId)
          ?.questions.find((entry) => entry.number === match.question.number);
        const correction = EXAM_QUESTION_CORRECTIONS.find(
          (entry) =>
            (!entry.examId || entry.examId === rawExam.id) &&
            (!entry.variantId || entry.variantId === match.variantId) &&
            (!entry.questionNumber || entry.questionNumber === match.question.number) &&
            match.question.prompt.endsWith(entry.promptSuffix)
        );

        expect(question?.explanation).toBe(correction?.explanation ?? explanation);
        if (!prompt.includes("two additional socket-outlet circuits")) {
          expect(question?.explanation).toContain("=");
          expect(question?.explanation).not.toMatch(/calculation gives|works out/i);
        }
      }
    }
  });

  it("explains why both unrecorded socket circuits need testing", () => {
    const enhanced = applyExamExplanationEnhancements(rawExam);
    const question = allQuestions(enhanced).find((entry) =>
      entry.prompt.includes("What action should be taken with regard to the additional socket-outlet circuits?")
    );

    expect(question?.explanation).toContain("neither has evidence on which sampling can be based");
    expect(question?.explanation).toContain("relevant tests on both circuits");
    expect(question?.explanation).toContain("EICR schedules");
    expect(question?.explanation).not.toMatch(/safe or compliant/i);
  });

  it("repairs ambiguous wording and the mis-keyed circuit-details question", () => {
    const enhanced = applyExamExplanationEnhancements(rawExam);
    const variant = enhanced.sections
      .flatMap((section) => section.variants)
      .find((entry) => entry.id === "quiz-29749");

    expect(variant).toBeDefined();
    const question4 = variant!.questions.find((entry) => entry.number === 4);
    const question7 = variant!.questions.find((entry) => entry.number === 7);
    const question14 = variant!.questions.find((entry) => entry.number === 14);
    const question31 = variant!.questions.find((entry) => entry.number === 31);
    const question39 = variant!.questions.find((entry) => entry.number === 39);
    const question47 = variant!.questions.find((entry) => entry.number === 47);
    const question53 = variant!.questions.find((entry) => entry.number === 53);
    const question56 = variant!.questions.find((entry) => entry.number === 56);
    const question59 = variant!.questions.find((entry) => entry.number === 59);

    expect(question4?.prompt).toContain("when no current satisfactory report is available");
    expect(question7?.answer).toBe("B");
    expect(question7?.options.B).toBe("Schedule of Circuit Details");
    expect(question7?.explanation).toContain("circuit-design details");
    expect(Object.values(question14!.options).join(" ")).not.toContain("check compliance");
    expect(question31?.options.B).toBe("HSE GS38");
    expect(question31?.prompt).toContain("safety requirements for the probes and leads");
    expect(question39?.options.A).toContain("advise urgent remedial action");
    expect(question39?.explanation).not.toMatch(/inform.*without delay/i);
    expect(question47?.prompt).toContain("readily accessible horizontal top surface");
    expect(question47?.prompt).not.toContain("bottom horizontal surface");
    expect(question53?.prompt).toContain("line and neutral conductors");
    expect(question56?.options.A).toBe("r1, rn, r2 and R1+R2");
    expect(question59?.prompt).toContain("179 Ω, 172 Ω and 168 Ω");
    expect(question59?.explanation).toContain("÷ 3 = 173 Ω");
  });

  it("shows the complete working for the 43 m bonding-conductor question", () => {
    const enhanced = applyExamExplanationEnhancements(rawExam);
    const question = allQuestions(enhanced).find((entry) =>
      entry.prompt.includes("expected measured conductor resistance value")
    );

    expect(question?.explanation).toContain("R = 1.83 mΩ/m × 43 m");
    expect(question?.explanation).toContain("78.69 mΩ = 0.0787 Ω");
    expect(question?.explanation).toContain("0.08 Ω");
  });

  it("does not mutate the lazily loaded source data", () => {
    const original = allQuestions(rawExam).find((entry) =>
      entry.prompt.includes("expected measured conductor resistance value")
    )?.explanation;

    applyExamExplanationEnhancements(rawExam);

    expect(allQuestions(rawExam).find((entry) =>
      entry.prompt.includes("expected measured conductor resistance value")
    )?.explanation).toBe(original);
  });

  it("repairs verified key, stem, and table-value defects outside Test 5", () => {
    const initialVerification = applyExamExplanationEnhancements(rawExam);
    const eighteenthEdition = applyExamExplanationEnhancements(
      eighteenthEditionExam as unknown as Exam
    );
    const getQuestion = (exam: Exam, variantId: string, number: number) =>
      exam.sections
        .flatMap((section) => section.variants)
        .find((variant) => variant.id === variantId)
        ?.questions.find((question) => question.number === number);

    const ringQuestion = getQuestion(initialVerification, "quiz-29747", 25);
    const correctionFactorQ2 = getQuestion(eighteenthEdition, "quiz-29706", 2);
    const correctionFactorQ59 = getQuestion(eighteenthEdition, "quiz-29706", 59);
    const scopeQ49 = getQuestion(eighteenthEdition, "quiz-29713", 49);
    const scopeQ35 = getQuestion(eighteenthEdition, "quiz-29725", 35);
    const monitoringQuestion = getQuestion(eighteenthEdition, "quiz-29723", 35);
    const type1Ct2Question = getQuestion(eighteenthEdition, "quiz-29726", 27);

    expect(ringQuestion?.answer).toBe("D");
    expect(ringQuestion?.explanation).toContain("spur adds conductor length");
    expect(correctionFactorQ2?.answer).toBe("A");
    expect(correctionFactorQ2?.explanation).toContain("rounds to 0.91");
    expect(correctionFactorQ59?.options.D).toBe("0.91");
    expect(scopeQ49?.answer).toBe("A");
    expect(scopeQ35?.options.C).toContain("agricultural and horticultural");
    expect(monitoringQuestion?.prompt).toContain("insulation monitoring device");
    expect(monitoringQuestion?.options.D).toContain("resistance falls below");
    expect(type1Ct2Question?.prompt).toContain(
      "minimum impulse discharge current Iimp (10/350 µs)"
    );
    expect(type1Ct2Question?.prompt).not.toContain("nominal discharge current");
    expect(type1Ct2Question?.explanation).toContain(
      "Table 534.4 therefore requires a minimum Iimp of 50 kA"
    );
  });

  it("updates obsolete Initial Verification and Building Regulations questions", () => {
    const initialVerification = applyExamExplanationEnhancements(rawExam);
    const buildingRegulations = applyExamExplanationEnhancements(
      buildingRegulationsExam as unknown as Exam
    );
    const getQuestion = (exam: Exam, variantId: string, number: number) =>
      exam.sections
        .flatMap((section) => section.variants)
        .find((variant) => variant.id === variantId)
        ?.questions.find((question) => question.number === number);

    expect(getQuestion(initialVerification, "quiz-29745", 14)?.answer).toBe("B");
    expect(getQuestion(initialVerification, "quiz-29745", 31)?.answer).toBe("C");
    expect(getQuestion(initialVerification, "quiz-29745", 32)?.prompt).toContain(
      "tested at IΔn using an AC test current"
    );
    expect(getQuestion(initialVerification, "quiz-29745", 39)?.answer).toBe("A");
    expect(getQuestion(initialVerification, "quiz-29745", 8)?.explanation).toContain(
      "does not require this additional label"
    );
    expect(getQuestion(initialVerification, "quiz-29745", 11)?.explanation).toContain(
      "then inspected and tested before"
    );
    expect(getQuestion(initialVerification, "quiz-29747", 2)?.explanation).toContain(
      "RA × IΔn must not exceed 50 V"
    );

    expect(getQuestion(buildingRegulations, "quiz-29753", 2)?.answer).toBe("D");
    expect(getQuestion(buildingRegulations, "quiz-29753", 7)?.options.C).toBe("18");
    expect(getQuestion(buildingRegulations, "quiz-29753", 14)?.options.A).toContain(
      "new circuit"
    );
    expect(getQuestion(buildingRegulations, "quiz-29754", 20)?.answer).toBe("C");
    expect(getQuestion(buildingRegulations, "quiz-29754", 20)?.options.C).toBe("Blue");
    expect(getQuestion(buildingRegulations, "quiz-29758", 10)?.explanation).toContain(
      "Non-domestic buildings are covered by Approved Document L Volume 2"
    );
  });

  it("keeps curated explanations free of imported answer prefixes", () => {
    const exams = [
      rawExam,
      buildingRegulationsExam as unknown as Exam,
      ecsHealthSafetyExam as unknown as Exam,
    ];

    for (const exam of exams.map(applyExamExplanationEnhancements)) {
      for (const question of allQuestions(exam)) {
        expect(question.explanation).not.toContain("Explanation:");
      }
    }

    const ecs = applyExamExplanationEnhancements(ecsHealthSafetyExam as unknown as Exam);
    const correctedLocations = new Set(["quiz-29681:27", "quiz-29678:29"]);
    const electricalFireQuestions = ecs.sections.flatMap((section) =>
      section.variants.flatMap((variant) =>
        variant.questions.filter((question) =>
          correctedLocations.has(`${variant.id}:${question.number}`)
        )
      )
    );

    expect(electricalFireQuestions).toHaveLength(2);
    for (const question of electricalFireQuestions) {
      expect(question.explanation).toContain("CO2 leaves no residue");
      expect(question.explanation).toContain("dry powder leaves substantial residue");
      expect(question.explanation).not.toContain("relatively undamaged");
    }
  });

  it("keeps Periodic Inspection classifications tied to the stated engineering conditions", () => {
    const periodicInspection = applyExamExplanationEnhancements(
      periodicInspectionExam as unknown as Exam
    );
    const getQuestion = (sectionId: string, variantId: string, number: number) =>
      periodicInspection.sections
        .find((section) => section.id === sectionId)
        ?.variants.find((variant) => variant.id === variantId)
        ?.questions.find((question) => question.number === number);
    const sectionId = "eicr-section-5-merged-observation-scenarios";

    expect(getQuestion(sectionId, "v3", 7)?.prompt).toContain(
      "no verified upstream backup"
    );
    expect(getQuestion(sectionId, "v3", 10)?.prompt).toContain(
      "damp, dusty workshop"
    );
    expect(getQuestion(sectionId, "v3", 12)?.prompt).toContain(
      "armour used as the circuit CPC"
    );
    expect(getQuestion(sectionId, "v3", 22)?.prompt).toContain("12 kA");
    expect(getQuestion(sectionId, "v4", 4)?.explanation).toContain(
      "highest fixed shower head or water outlet"
    );
    expect(getQuestion(sectionId, "v4", 22)?.options.D).toContain("NC only");
    expect(getQuestion(sectionId, "v5", 5)?.options.B).toContain(
      "notify the network operator urgently via 105"
    );
    expect(getQuestion(sectionId, "v5", 5)?.options.B).not.toContain(
      "meter tails"
    );
    expect(getQuestion(sectionId, "v5", 10)?.prompt).toContain(
      "Water jets are not likely"
    );
    expect(getQuestion(sectionId, "v5", 10)?.explanation).toContain("IPX5");
    expect(getQuestion(sectionId, "v5", 15)?.prompt).toContain(
      "no verified upstream backup"
    );
    expect(getQuestion(sectionId, "v5", 25)?.options.B).toContain(
      "any shorter period in the report"
    );
    expect(getQuestion(sectionId, "v5", 25)?.options.B).toContain(
      "tenant and local council"
    );
  });

  it("keeps Periodic Inspection rented-sector duties current and unambiguous", () => {
    const periodicInspection = applyExamExplanationEnhancements(
      periodicInspectionExam as unknown as Exam
    );
    const getQuestion = (sectionId: string, variantId: string, number: number) =>
      periodicInspection.sections
        .find((section) => section.id === sectionId)
        ?.variants.find((variant) => variant.id === variantId)
        ?.questions.find((question) => question.number === number);
    const sectionId = "eicr-section-3";

    expect(getQuestion(sectionId, "v2", 17)?.options.C).toBe("£40,000");
    expect(getQuestion(sectionId, "v2", 17)?.explanation).toContain(
      "1 November 2025"
    );
    expect(getQuestion(sectionId, "v2", 17)?.explanation).toContain(
      "1 May 2026"
    );
    expect(getQuestion(sectionId, "v4", 16)?.prompt).toContain(
      "ongoing electrical-safety duty"
    );
    expect(getQuestion(sectionId, "v4", 16)?.options.C).toContain(
      "every C3 within 28 days"
    );
    expect(getQuestion(sectionId, "v4", 19)?.options.D).toContain(
      "risk assessment"
    );
    expect(getQuestion(sectionId, "v5", 11)?.options.B).toContain(
      "tenant and local authority"
    );
    expect(getQuestion(sectionId, "v5", 11)?.explanation).toContain(
      "within seven days of its written request"
    );
  });

  it("keeps Periodic Inspection sections 3 and 4 aligned with A4 and the stated engineering facts", () => {
    const periodicInspection = applyExamExplanationEnhancements(
      periodicInspectionExam as unknown as Exam
    );
    const getQuestion = (sectionId: string, variantId: string, number: number) =>
      periodicInspection.sections
        .find((section) => section.id === sectionId)
        ?.variants.find((variant) => variant.id === variantId)
        ?.questions.find((question) => question.number === number);
    const section3 = "eicr-section-3";
    const section4 = "eicr-section-4";

    expect(getQuestion(section3, "v3", 9)?.options.B).toContain(
      "FI is advisory"
    );
    expect(getQuestion(section3, "v3", 16)?.options.B).toContain(
      "Overall Satisfactory"
    );
    expect(getQuestion(section3, "v4", 9)?.prompt).toContain(
      "states that further investigative work is necessary"
    );
    expect(getQuestion(section3, "v4", 15)?.options.B).toContain(
      "Whether any C1 or C2 is present"
    );
    expect(getQuestion(section3, "v5", 7)?.prompt).toContain(
      "therefore Satisfactory overall"
    );

    expect(getQuestion(section4, "v2", 11)?.prompt).toContain(
      "load is liable to overload"
    );
    expect(getQuestion(section4, "v2", 16)?.answer).toBe("A");
    expect(getQuestion(section4, "v2", 19)?.prompt).toContain(
      "fails the Regulation 543.1.3 adiabatic requirement"
    );
    expect(getQuestion(section4, "v3", 1)?.prompt).toContain(
      "armour/CPC connection is intermittent"
    );
    expect(getQuestion(section4, "v3", 25)?.options.A).toContain("N/V");
    expect(getQuestion(section4, "v3", 25)?.options.A).toContain("LIM");
    expect(getQuestion(section4, "v4", 5)?.prompt).toContain(
      "live conductors are connected together"
    );
    expect(getQuestion(section4, "v4", 10)?.options.A).toContain("N/V");
    expect(getQuestion(section4, "v4", 10)?.options.A).toContain("LIM");
    expect(getQuestion(section4, "v4", 11)?.answer).toBe("A");
    expect(getQuestion(section4, "v4", 12)?.prompt).toContain(
      "leave the PV DC conductors energised"
    );
    expect(getQuestion(section4, "v4", 14)?.prompt).toContain("220 Ω");
    expect(getQuestion(section4, "v4", 20)?.prompt).toContain(
      "all toggle directions match"
    );
    expect(getQuestion(section4, "v5", 9)?.prompt).toContain(
      "no C1 or C2"
    );
    expect(getQuestion(section4, "v5", 9)?.prompt).not.toContain(
      "no C1/C2/FI"
    );
    expect(getQuestion(section4, "v5", 18)?.options.B).toContain(
      "original Satisfactory EICR"
    );
    expect(getQuestion(section4, "v5", 20)?.options.B).toContain(
      "within one more year"
    );

    expect(periodicInspectionEicrPart2).toHaveLength(188);
    const a4FiSet = periodicInspectionEicrPart2.find((entry) =>
      entry.prompt.includes("one FI and no C1 or C2")
    );
    expect(a4FiSet?.sourceUrls).toContain(
      "https://electrical.theiet.org/media/jp2fl3ia/bs7671_eicr_a4.pdf"
    );
    const penaltySet = periodicInspectionEicrPart2.find((entry) =>
      entry.prompt.includes("maximum financial penalty per breach")
    );
    expect(penaltySet?.sourceUrls).toContain(
      "https://www.legislation.gov.uk/uksi/2025/1043/pdfs/uksi_20251043_en.pdf"
    );
  });

  it("uses Amendment 4 EICR outcomes and current BPG4 bonding classifications", () => {
    const periodicInspection = applyExamExplanationEnhancements(
      periodicInspectionExam as unknown as Exam
    );
    const getQuestion = (sectionId: string, variantId: string, number: number) =>
      periodicInspection.sections
        .find((section) => section.id === sectionId)
        ?.variants.find((variant) => variant.id === variantId)
        ?.questions.find((question) => question.number === number);

    const outcomeQuestions = [
      ["section-3", "v2", 1, "B"],
      ["section-3", "v2", 2, "B"],
      ["section-3", "v4", 20, "B"],
      ["section-4", "v3", 30, "B"],
      ["section-5-merged-periodic-earthing", "v4", 25, "A"],
    ] as const;
    for (const [sectionId, variantId, number, answer] of outcomeQuestions) {
      const question = getQuestion(sectionId, variantId, number);
      expect(question?.answer).toBe(answer);
      expect(question?.options[answer]).toMatch(/C1 or C2|C1 or C2 =/);
      expect(question?.explanation).toMatch(/Amendment 4|A4:2026/);
      expect(question?.explanation).not.toMatch(
        /(?:C1, C2 or FI|C1\/C2\/FI).{0,50}(?:makes|means).{0,30}Unsatisfactory/i
      );
    }

    const fiQuestion = getQuestion("section-3", "v3", 10);
    expect(fiQuestion?.prompt).toContain("contains an FI observation");
    expect(fiQuestion?.prompt).not.toContain("Unsatisfactory due to FI");
    expect(fiQuestion?.explanation).toContain("separate legal duty");
    const fiOutcomeQuestion = getQuestion("section-4", "v2", 27);
    expect(fiOutcomeQuestion?.answer).toBe("B");
    expect(fiOutcomeQuestion?.options.B).toContain("Satisfactory");
    expect(fiOutcomeQuestion?.explanation).toContain("Amendment 4");

    const bondingQuestions = [
      ["section-3", "v3", 13],
      ["section-4", "v2", 19],
      ["section-4", "v4", 15],
      ["section-4", "v4", 26],
      ["section-5-merged-periodic-earthing", "v3", 1],
    ] as const;
    for (const [sectionId, variantId, number] of bondingQuestions) {
      const question = getQuestion(sectionId, variantId, number);
      expect(question?.answer).toBe("D");
      expect(question?.options.D).toContain("NC");
      expect(question?.explanation).toContain("Best Practice Guide 4 Issue 7.3");
    }

    expect(getQuestion("section-2", "v5", 5)?.options.B).toContain(
      "unless that sacrifice is grossly disproportionate"
    );
    expect(
      getQuestion("section-5-merged-periodic-earthing", "v3", 3)?.options.A
    ).toContain("U0/Zs");
    expect(
      getQuestion("section-5-merged-periodic-earthing", "v3", 3)?.options.A
    ).not.toContain("touch voltage");
    expect(getQuestion("section-3", "v3", 19)?.options.B).toContain("£40,000");
    expect(getQuestion("section-3", "v3", 19)?.options.B).not.toContain(
      "from 1 May 2026"
    );
    expect(getQuestion("section-3", "v3", 19)?.explanation).toContain(
      "1 November 2025"
    );
    expect(getQuestion("section-3", "v3", 19)?.explanation).toContain(
      "1 May 2026"
    );

    expect(periodicInspectionPart1).toHaveLength(480);
    const a4OutcomeSet = periodicInspectionPart1.find(
      (entry) => entry.prompt === "An EICR records 'Satisfactory'. This means:"
    );
    expect(a4OutcomeSet?.sourceUrls).toContain(
      "https://electrical.theiet.org/media/jp2fl3ia/bs7671_eicr_a4.pdf"
    );
    expect(a4OutcomeSet?.sourceUrls).toContain(
      "https://www.electricalsafetyfirst.org.uk/media/nhjengmh/best_practice-guide-4_issue-73.pdf"
    );
    const allCoreRationales = periodicInspectionPart1.flatMap((entry) =>
      Object.values(entry.rationales)
    );
    expect(allCoreRationales).toHaveLength(1_440);
    expect(allCoreRationales.join(" ")).not.toMatch(
      /(?:C1, C2 or FI|C1\/C2\/FI).{0,50}(?:makes|means).{0,30}Unsatisfactory|FI (?:alone )?makes (?:the )?(?:report|EICR) Unsatisfactory/i
    );
  });
});
