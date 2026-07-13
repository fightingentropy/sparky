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
import { buildOptionExplanations } from "./examOptionExplanations";
import { getQuestionsForVariant } from "./examUtils";
import type { Exam, ExamQuestion } from "./exams/types";

const EXAMS = [
  eighteenthEditionExam,
  am2Exam,
  buildingRegulationsExam,
  ecsHealthSafetyExam,
  initialVerificationExam,
  inspectionDesign2396Exam,
  level2ElectricalInstallationExam,
  level3ElectricalInstallationExam,
  patTestingExam,
  periodicInspectionExam,
  specialLocationsExam
] as unknown as Exam[];

const CHOICES = ["A", "B", "C", "D"] as const;

function allQuestions(exams: Exam[] = EXAMS): ExamQuestion[] {
  return exams.flatMap((exam) =>
    exam.sections.flatMap((section) =>
      section.variants.flatMap((variant) => variant.questions)
    )
  );
}

describe("exam option explanations", () => {
  it("shows the full correct explanation and feedback for all 15,087 distractors", () => {
    const questions = allQuestions();
    let distractorCount = 0;

    expect(questions).toHaveLength(5029);
    for (const question of questions) {
      const feedback = buildOptionExplanations(question);
      expect(Object.keys(feedback)).toEqual(CHOICES);
      expect(feedback[question.answer]).toBe(question.explanation.replace(/\s+/g, " ").trim());

      for (const choice of CHOICES) {
        const value = feedback[choice];
        expect(typeof value).toBe("string");
        expect(value.length).toBeGreaterThan(20);
        if (choice !== question.answer) {
          expect(value.length).toBeLessThanOrEqual(260);
          distractorCount += 1;
        }
      }
    }

    expect(distractorCount).toBe(15_087);
  });

  it("never describes a distractor as merely differing from a keyed answer", () => {
    for (const question of allQuestions()) {
      const feedback = buildOptionExplanations(question);
      for (const choice of CHOICES) {
        if (choice === question.answer) continue;
        expect(feedback[choice]).not.toMatch(
          /keyed answer|this is not (?:the|an) answer|wrong because it is wrong/i
        );
      }
    }
  });

  it("uses distinct academic rationales for the PAT visual-inspection distractors", () => {
    const question = allQuestions([patTestingExam as unknown as Exam]).find(
      (entry) => entry.prompt ===
        "The most important check, when assessing the level of safety of an electrical appliance, is:"
    );

    expect(question).toBeDefined();
    const feedback = buildOptionExplanations(question!);
    expect(feedback.A).toContain("current from live parts to earth or accessible surfaces");
    expect(feedback.B).toContain("high voltage to prove dielectric strength");
    expect(feedback.C).toContain("finds hidden insulation faults");
    expect(new Set([feedback.A, feedback.B, feedback.C]).size).toBe(3);
  });

  it("attaches curated rationales by option meaning after choices are shuffled", () => {
    const question: ExamQuestion = {
      number: 2,
      prompt: "The most important check, when assessing the level of safety of an electrical appliance, is:",
      options: {
        A: "Insulation resistance testing",
        B: "Visual inspection",
        C: "Flash testing",
        D: "Earth leakage current testing"
      },
      answer: "B",
      explanation: "Visual inspection finds common visible defects before instrument testing."
    };

    const feedback = buildOptionExplanations(question);
    expect(feedback.A).toContain("finds hidden insulation faults");
    expect(feedback.C).toContain("high voltage to prove dielectric strength");
    expect(feedback.D).toContain("current from live parts to earth or accessible surfaces");
  });

  it("explains every certificate choice in the swimming-pool scenario", () => {
    const question = allQuestions([initialVerificationExam as unknown as Exam]).find(
      (entry) => entry.prompt.includes(
        "What document must be completed following inspection and testing?"
      )
    );

    expect(question).toBeDefined();
    const feedback = buildOptionExplanations(question!);
    expect(feedback.A).toBe(question!.explanation);
    expect(feedback.B).toContain("condition of an existing electrical installation");
    expect(feedback.C).toContain("does not provide a new circuit");
    expect(feedback.D).toContain("not the required BS 7671 certificate");
  });

  it("describes both sides of a minimum truthfully", () => {
    const question = allQuestions([buildingRegulationsExam as unknown as Exam]).find(
      (entry) => entry.prompt.includes("minimum number of smoke alarms required")
    );

    expect(question).toBeDefined();
    const feedback = buildOptionExplanations(question!);
    expect(feedback.A).toMatch(/^0 is below the required minimum of 2\./);
    expect(feedback.B).toMatch(/^1 is below the required minimum of 2\./);
    expect(feedback.C).toContain("smoke alarms on the escape route of each storey");
    expect(feedback.D).toMatch(
      /^4 is above the required minimum of 2, so it is not the minimum value asked for\./
    );
    expect(feedback.D).not.toContain("Too high");
  });

  it("describes a lower maximum against the requested boundary rather than as too low", () => {
    const question: ExamQuestion = {
      number: 1,
      prompt: "What is the maximum permitted length?",
      options: { A: "6 m", B: "12 m", C: "18 m", D: "24 m" },
      answer: "B",
      explanation: "The stated maximum permitted length is 12 m."
    };

    const feedback = buildOptionExplanations(question);
    expect(feedback.A).toMatch(
      /^6 m is below the permitted maximum of 12 m, so it is not the maximum value asked for\./
    );
    expect(feedback.C).toMatch(/^18 m exceeds the permitted maximum of 12 m\./);
    expect(feedback.D).toMatch(/^24 m exceeds the permitted maximum of 12 m\./);
    expect(feedback.A).not.toContain("Too low");
  });

  it("treats 'not less than' as a minimum rather than an exception", () => {
    const question = allQuestions([specialLocationsExam as unknown as Exam]).find(
      (entry) => entry.prompt.includes("Radiant heaters used in the vicinity of livestock")
    );

    expect(question).toBeDefined();
    const feedback = buildOptionExplanations(question!);
    expect(feedback.B).toMatch(/^1\.5 m is above the required minimum of 0\.5 m/);
    expect(feedback.C).toMatch(/^2\.5 m is above the required minimum of 0\.5 m/);
    expect(feedback.D).toMatch(/^1\.0 m is above the required minimum of 0\.5 m/);
    expect(`${feedback.B} ${feedback.C} ${feedback.D}`).not.toContain("exception requested");
  });

  it("distinguishes production and type testing from an in-service condition check", () => {
    const question = allQuestions([patTestingExam as unknown as Exam]).find(
      (entry) => entry.prompt === "The most important check on a portable appliance is:"
    );

    expect(question).toBeDefined();
    const feedback = buildOptionExplanations(question!);
    expect(feedback.A).toContain("present condition");
    expect(feedback.B).toContain("during manufacture");
    expect(feedback.C).toContain("representative design or sample");
  });

  it("grounds conceptual distractors in the recorded answer and rationale", () => {
    const question = allQuestions([initialVerificationExam as unknown as Exam]).find(
      (entry) => entry.prompt === "What is the main purpose of an Initial Verification?"
    );

    expect(question).toBeDefined();
    const feedback = buildOptionExplanations(question!);
    expect(feedback[question!.answer]).toContain("Initial Verification checks");
    const distractorFeedback: string[] = [];
    for (const choice of CHOICES) {
      if (choice === question!.answer) continue;
      expect(feedback[choice]).toContain("applicable answer");
      expect(feedback[choice]).toContain("To confirm an installation is safe");
      expect(feedback[choice]).toContain(`“${question!.options[choice]}”`);
      distractorFeedback.push(feedback[choice]);
    }
    expect(new Set(distractorFeedback).size).toBe(3);
  });

  it("uses source-safe contrasts for negative and image-dependent distractors", () => {
    const negativeQuestion: ExamQuestion = {
      number: 1,
      prompt: "Which value is not the stated result?",
      options: { A: "10 V", B: "20 V", C: "30 V", D: "40 V" },
      answer: "C",
      explanation: "The worked result in the source question is 30 V."
    };
    const imageQuestion: ExamQuestion = {
      number: 2,
      prompt: "Identify the item shown.",
      imageUrls: ["/exam-images/example.png"],
      options: { A: "Clamp meter", B: "Loop tester", C: "RCD tester", D: "Proving unit" },
      answer: "A",
      explanation: "The pictured instrument is a clamp meter."
    };

    const negativeFeedback = buildOptionExplanations(negativeQuestion);
    expect(negativeFeedback.C).toBe("The worked result in the source question is 30 V.");
    for (const choice of ["A", "B", "D"] as const) {
      expect(negativeFeedback[choice]).toContain("does not satisfy the exception requested");
      expect(negativeFeedback[choice]).toContain(`“${negativeQuestion.options[choice]}”`);
      expect(negativeFeedback[choice]).toContain("“30 V”");
    }

    const imageFeedback = buildOptionExplanations(imageQuestion);
    expect(imageFeedback.A).toBe("The pictured instrument is a clamp meter.");
    for (const choice of ["B", "C", "D"] as const) {
      expect(imageFeedback[choice]).toContain("identifies something other than the referenced image");
      expect(imageFeedback[choice]).toContain(`“${imageQuestion.options[choice]}”`);
      expect(imageFeedback[choice]).toContain("“Clamp meter”");
    }
  });

  it("describes single choices as incomplete when all listed choices are required", () => {
    const question: ExamQuestion = {
      number: 1,
      prompt: "Which records should be retained?",
      options: {
        A: "The test schedule",
        B: "The certificate",
        C: "The inspection record",
        D: "All of the above"
      },
      answer: "D",
      explanation: "The complete handover pack contains every listed record."
    };

    const feedback = buildOptionExplanations(question);
    expect(feedback.A).toContain("incomplete on its own because every listed item is required");
    expect(feedback.B).toContain("incomplete on its own because every listed item is required");
    expect(feedback.C).toContain("incomplete on its own because every listed item is required");
  });

  it("recognizes none-of-the-options wording without inventing option facts", () => {
    const question: ExamQuestion = {
      number: 1,
      prompt: "Which option applies?",
      options: {
        A: "The first condition",
        B: "The second condition",
        C: "The third condition",
        D: "None of the options listed"
      },
      answer: "D",
      explanation: "The stated situation is outside all three listed conditions."
    };

    const feedback = buildOptionExplanations(question);
    expect(feedback.A).toContain("not valid here because none of the listed conditions applies");
    expect(feedback.B).toContain("not valid here because none of the listed conditions applies");
    expect(feedback.C).toContain("not valid here because none of the listed conditions applies");
  });

  it("builds feedback from post-shuffle Periodic Inspection choices", () => {
    const exam = periodicInspectionExam as unknown as Exam;
    const delivered = getQuestionsForVariant(exam, 1);
    const rawQuestions = exam.sections.flatMap(
      (section) => section.variants[1]?.questions ?? []
    );
    const question = delivered.find((entry) => {
      const raw = rawQuestions.find((candidate) => candidate.prompt === entry.prompt);
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
