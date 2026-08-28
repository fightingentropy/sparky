import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import patTestingExam from "../exam-data/pat-testing.json";
import { applyExamExplanationEnhancements } from "../examExplanationEnhancements";
import { buildOptionFeedback } from "../examOptionExplanations";
import { getQuestionsForVariant } from "../examUtils";
import type { Exam, ExamQuestion } from "../exams/types";

const rawExam = patTestingExam as unknown as Exam;
const homeworkId = "portable-appliance-testing-homework";
const questions = getQuestionsForVariant(
  applyExamExplanationEnhancements(rawExam),
  4,
);
const calculations = [
  {
    number: 6,
    answer: "B",
    area: "1.0 mm²",
    resistancePerMetre: 19.5,
    length: 4.5,
    milliohms: 87.75,
    ohms: 0.08775,
  },
  {
    number: 30,
    answer: "D",
    area: "0.75 mm²",
    resistancePerMetre: 26,
    length: 1.5,
    milliohms: 39,
    ohms: 0.039,
  },
] as const;

describe("PAT homework resistance calculations", () => {
  it.each(calculations)("shows the full calculation for Q$number", (calculation) => {
    const question = questions.find((entry) => entry.number === calculation.number)!;

    expect(question.answer).toBe(calculation.answer);
    expect(question.prompt).toContain(calculation.area);
    expect(question.prompt).toContain("protective conductor");
    expect(question.prompt).not.toMatch(/\bcondor\b|protection conductor/i);
    expect(question.explanation).toContain("flexible copper");
    expect(question.explanation).toContain("20 °C");
    expect(question.explanation).toContain("IET");
    expect(question.explanation).toContain("R = resistance per metre × length");
    expect(question.explanation).toContain(
      `${calculation.resistancePerMetre} mΩ/m × ${calculation.length} m = ${calculation.milliohms} mΩ`,
    );
    expect(question.explanation).toContain(
      `${calculation.milliohms} ÷ 1000 = ${calculation.ohms} Ω`,
    );
    expect(question.explanation).toContain("single protective conductor");
    expect(question.explanation).toContain("0.1 Ω");
    expect(question.explanation).not.toMatch(/applicable answer|alternatives describe/i);
    expect(calculation.resistancePerMetre * calculation.length).toBeCloseTo(
      calculation.milliohms,
      8,
    );
    expect(calculation.milliohms / 1000).toBeCloseTo(calculation.ohms, 8);

    const feedback = buildOptionFeedback(question);
    expect(feedback[question.answer]).toEqual({
      kind: "correct",
      text: question.explanation,
    });
  });

  it("gives reviewed numerical reasons for all six distractors", () => {
    for (const { number } of calculations) {
      const question = questions.find((entry) => entry.number === number)!;
      const feedback = buildOptionFeedback(question);
      const wrongChoices = (["A", "B", "C", "D"] as const).filter(
        (choice) => choice !== question.answer,
      );

      expect(new Set(wrongChoices.map((choice) => feedback[choice].text)).size).toBe(3);
      for (const choice of wrongChoices) {
        expect(feedback[choice].kind, `Q${number} ${choice}`).toBe("reviewed");
        expect(feedback[choice].text).toContain("=");
        expect(feedback[choice].text).toContain("mΩ");
        expect(feedback[choice].text).not.toBe(question.explanation);
        expect(feedback[choice].text).not.toMatch(/applicable answer|alternatives describe/i);
      }
    }
  });

  it("preserves question numbering, choices and answer keys", () => {
    const rawQuestions = getQuestionsForVariant(rawExam, 4);
    expect(questions).toHaveLength(35);
    expect(questions.map((question) => question.number)).toEqual(
      rawQuestions.map((question) => question.number),
    );
    for (const { number } of calculations) {
      const question = questions.find((entry) => entry.number === number)!;
      const raw = rawQuestions.find((entry) => entry.number === number)!;
      expect(question.options).toEqual(raw.options);
      expect(question.answer).toBe(raw.answer);
      expect(question.preserveChoices).toBe(true);
    }
  });

  it("ships the same worked explanations and feedback in the iOS content", () => {
    const exported = JSON.parse(readFileSync(
      new URL("../../ios/Sparky/Resources/Content/exams/pat-testing.json", import.meta.url),
      "utf8",
    )) as {
      tests: Array<{
        id: string;
        sections: Array<{
          questions: Array<ExamQuestion & {
            id: string;
            optionFeedback: ReturnType<typeof buildOptionFeedback>;
          }>;
        }>;
      }>;
    };
    const delivered = exported.tests.find((test) => test.id === homeworkId)!;

    for (const { number } of calculations) {
      const webQuestion = questions.find((entry) => entry.number === number)!;
      const nativeQuestion = delivered.sections.flatMap((section) => section.questions)
        .find((question) => question.number === number)!;
      expect(nativeQuestion.id).toBe(`pat-testing/${homeworkId}/source-mock-pat/question-${number}`);
      expect(nativeQuestion.prompt).toBe(webQuestion.prompt);
      expect(nativeQuestion.explanation).toBe(webQuestion.explanation);
      expect(nativeQuestion.optionFeedback).toEqual(buildOptionFeedback(webQuestion));
      expect(nativeQuestion.explanation).not.toMatch(/applicable answer|alternatives describe/i);
    }
  });
});
