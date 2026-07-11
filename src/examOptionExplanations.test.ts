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
  it("always explains the correct choice without fabricating feedback for unsupported distractors", () => {
    const questions = allQuestions();

    expect(questions).toHaveLength(5029);
    for (const question of questions) {
      const feedback = buildOptionExplanations(question);
      expect(feedback[question.answer]?.length).toBeGreaterThan(20);

      for (const value of Object.values(feedback)) {
        expect(typeof value).toBe("string");
        expect(value.length).toBeLessThanOrEqual(160);
      }
    }
  });

  it("never emits circular mismatch text for a distractor", () => {
    for (const question of allQuestions()) {
      const feedback = buildOptionExplanations(question);
      for (const choice of CHOICES) {
        if (choice === question.answer || !feedback[choice]) continue;
        expect(feedback[choice]).not.toMatch(
          /does not match|keyed answer|not the (?:exception|least-likely) choice/i
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

  it("describes both sides of a minimum truthfully", () => {
    const question = allQuestions([buildingRegulationsExam as unknown as Exam]).find(
      (entry) => entry.prompt.includes("minimum number of smoke alarms required")
    );

    expect(question).toBeDefined();
    const feedback = buildOptionExplanations(question!);
    expect(feedback.A).toMatch(/^This is below the required minimum of 2\./);
    expect(feedback.B).toMatch(/^This is below the required minimum of 2\./);
    expect(feedback.C).toContain("smoke alarms on the escape route of each storey");
    expect(feedback.D).toMatch(
      /^This is above the required minimum of 2, so it is not the minimum value asked for\./
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
      /^This is below the permitted maximum of 12 m, so it is not the maximum value asked for\./
    );
    expect(feedback.C).toMatch(/^This exceeds the permitted maximum of 12 m\./);
    expect(feedback.D).toMatch(/^This exceeds the permitted maximum of 12 m\./);
    expect(feedback.A).not.toContain("Too low");
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

  it("omits unsupported conceptual distractors instead of restating the answer", () => {
    const question = allQuestions([initialVerificationExam as unknown as Exam]).find(
      (entry) => entry.prompt === "What is the main purpose of an Initial Verification?"
    );

    expect(question).toBeDefined();
    const feedback = buildOptionExplanations(question!);
    expect(feedback[question!.answer]).toContain("Initial Verification checks");
    for (const choice of CHOICES) {
      if (choice !== question!.answer) expect(feedback[choice]).toBeUndefined();
    }
  });

  it("does not invent explanations for negative or image-dependent distractors", () => {
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

    expect(buildOptionExplanations(negativeQuestion)).toEqual({
      C: "The worked result in the source question is 30 V."
    });
    expect(buildOptionExplanations(imageQuestion)).toEqual({
      A: "The pictured instrument is a clamp meter."
    });
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
    expect(feedback.A).toMatch(/^Every listed item is required/);
    expect(feedback.B).toMatch(/^Every listed item is required/);
    expect(feedback.C).toMatch(/^Every listed item is required/);
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
    expect(feedback.A).toMatch(/^None of the listed conditions applies here/);
    expect(feedback.B).toMatch(/^None of the listed conditions applies here/);
    expect(feedback.C).toMatch(/^None of the listed conditions applies here/);
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
