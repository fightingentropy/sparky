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
  it("builds compact feedback for every option in all 5,029 question records", () => {
    const questions = allQuestions();
    let feedbackCount = 0;

    expect(questions).toHaveLength(5029);
    for (const question of questions) {
      const feedback = buildOptionExplanations(question);
      expect(Object.keys(feedback)).toEqual(CHOICES);
      for (const choice of CHOICES) {
        expect(feedback[choice].length).toBeGreaterThan(20);
        expect(feedback[choice].length).toBeLessThanOrEqual(160);
        expect(typeof feedback[choice]).toBe("string");
        feedbackCount += 1;
      }
    }

    expect(feedbackCount).toBe(20_116);
  });

  it("uses useful low/high contrasts for comparable numeric distractors", () => {
    const question = allQuestions([buildingRegulationsExam as unknown as Exam]).find(
      (entry) => entry.prompt.includes("minimum number of smoke alarms required")
    );

    expect(question).toBeDefined();
    const feedback = buildOptionExplanations(question!);
    expect(feedback.A).toMatch(/^Too low — the keyed result is 2\./);
    expect(feedback.B).toMatch(/^Too low — the keyed result is 2\./);
    expect(feedback.C).toContain("smoke alarms on the escape route");
    expect(feedback.D).toMatch(/^Too high — the keyed result is 2\./);
  });

  it("uses a source-safe mismatch plus bank rationale for conceptual choices", () => {
    const question = allQuestions([initialVerificationExam as unknown as Exam]).find(
      (entry) => entry.prompt === "What is the main purpose of an Initial Verification?"
    );

    expect(question).toBeDefined();
    const feedback = buildOptionExplanations(question!);
    expect(feedback.A).toContain(
      "This does not match the keyed answer, “To confirm an installation is safe to be put…”."
    );
    expect(feedback.A).toContain("Initial Verification checks");
    expect(feedback.B).toMatch(/^Initial Verification checks/);
  });

  it("does not infer low/high semantics for a negative question", () => {
    const question: ExamQuestion = {
      number: 1,
      prompt: "Which value is not the stated result?",
      options: { A: "10 V", B: "20 V", C: "30 V", D: "40 V" },
      answer: "C",
      explanation: "The worked result in the source question is 30 V."
    };

    const feedback = buildOptionExplanations(question);
    expect(feedback.A).toMatch(/^This is not the exception requested/);
    expect(feedback.A).not.toMatch(/^Too (?:low|high)/);
    expect(feedback.D).not.toMatch(/^Too (?:low|high)/);
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
    expect(feedback.A).toMatch(/^This is incomplete on its own/);
    expect(feedback.B).toMatch(/^This is incomplete on its own/);
    expect(feedback.C).toMatch(/^This is incomplete on its own/);
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
    expect(feedback.A).toMatch(/^The keyed answer excludes every listed choice/);
    expect(feedback.B).toMatch(/^The keyed answer excludes every listed choice/);
    expect(feedback.C).toMatch(/^The keyed answer excludes every listed choice/);
  });

  it("uses the image-safe identification fallback when a question depends on media", () => {
    const question: ExamQuestion = {
      number: 1,
      prompt: "Identify the item shown.",
      imageUrls: ["/exam-images/example.png"],
      options: { A: "Clamp meter", B: "Loop tester", C: "RCD tester", D: "Proving unit" },
      answer: "A",
      explanation: "The pictured instrument is a clamp meter."
    };

    const feedback = buildOptionExplanations(question);
    expect(feedback.B).toMatch(/^This does not match the item shown/);
    expect(feedback.B).toContain("Clamp meter");
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
    expect(feedback[raw!.answer]).not.toBe(feedback[question!.answer]);
    expect(feedback[raw!.answer]).toMatch(/^(?:Too (?:low|high)|This does not match)/);
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
