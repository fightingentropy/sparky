import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import patTestingExam from "../exam-data/pat-testing.json";
import {
  patTestingHomeworkCorrections,
  patTestingHomeworkRationales,
} from "../examCorrections/patTestingHomework";
import { applyExamExplanationEnhancements } from "../examExplanationEnhancements";
import { buildOptionFeedback } from "../examOptionExplanations";
import { getQuestionsForVariant } from "../examUtils";
import type { Exam, ExamQuestion } from "../exams/types";
import { patTestingCalculations } from "./patTestingCalculations";

const rawExam = patTestingExam as unknown as Exam;
const homeworkId = "portable-appliance-testing-homework";
const questions = getQuestionsForVariant(applyExamExplanationEnhancements(rawExam), 4);
const choices = ["A", "B", "C", "D"] as const;
const boilerplate = /applicable answer|alternatives describe|different requirement, test condition|under the IET Code of Practice and electrical-equipment safety principles/i;
const question = (number: number) => questions.find((entry) => entry.number === number)!;

describe("PAT Test 5 reviewed explanations", () => {
  it("gives all 35 answers and all 105 distractors distinct, non-boilerplate explanations", () => {
    expect(questions).toHaveLength(35);
    expect(new Set(questions.map((entry) => entry.explanation)).size).toBe(35);
    let reviewedCount = 0;

    for (const entry of questions) {
      const feedback = buildOptionFeedback(entry);
      expect(feedback[entry.answer]).toEqual({ kind: "correct", text: entry.explanation });
      expect(entry.explanation.length, `Q${entry.number}`).toBeGreaterThan(150);
      const wrongChoices = choices.filter((choice) => choice !== entry.answer);
      expect(new Set(wrongChoices.map((choice) => feedback[choice].text)).size).toBe(3);

      for (const choice of choices) {
        expect(feedback[choice].text, `Q${entry.number} ${choice}`).not.toMatch(boilerplate);
        if (choice === entry.answer) continue;
        expect(feedback[choice].kind, `Q${entry.number} ${choice}`).toBe("reviewed");
        expect(feedback[choice].text.length).toBeGreaterThan(60);
        expect(feedback[choice].text).not.toContain(entry.explanation);
        reviewedCount += 1;
      }
    }
    expect(reviewedCount).toBe(105);
  });

  it("scopes all 33 new corrections to their original Test 5 questions and retains sources", () => {
    const rawQuestions = getQuestionsForVariant(rawExam, 4);
    const expectedNumbers = Array.from({ length: 35 }, (_, index) => index + 1);
    expect(patTestingHomeworkCorrections.map((entry) => entry.questionNumber)).toEqual(
      expectedNumbers.filter((number) => number !== 6 && number !== 30),
    );
    expect(questions.map((entry) => entry.number)).toEqual(expectedNumbers);
    expect(questions.every((entry) => entry.preserveChoices)).toBe(true);

    for (const correction of patTestingHomeworkCorrections) {
      expect(correction.examId).toBe("pat-testing");
      expect(correction.variantId).toBe(homeworkId);
      expect(rawQuestions.filter((entry) =>
        entry.number === correction.questionNumber && entry.prompt.endsWith(correction.promptSuffix),
      )).toHaveLength(1);
    }

    const reviewedSets = [...patTestingHomeworkRationales, ...patTestingCalculations];
    expect(reviewedSets).toHaveLength(35);
    for (const entry of questions) {
      const matching = reviewedSets.filter((set) =>
        entry.prompt.endsWith(set.prompt) && set.answer === entry.options[entry.answer],
      );
      expect(matching, `Q${entry.number}`).toHaveLength(1);
      expect(matching[0].sourceUrls.length).toBeGreaterThan(0);
      expect(matching[0].sourceUrls.every((url) => url.startsWith("https://"))).toBe(true);
      expect([...matching[0].options].sort()).toEqual(Object.values(entry.options).sort());
    }
  });

  it("explains the calculation, units and assumptions for numerical questions", () => {
    expect(question(1).explanation).toContain("10 mA ÷ 1000 = 0.01 A");
    expect(question(17).explanation).toContain("I = P ÷ V = 500 ÷ 230 ≈ 2.17 A");
    expect(500 / 230).toBeCloseTo(2.17, 2);
    expect(question(23).explanation).toContain("1 × 30 mA = 30 mA");
    expect(question(25).explanation).toContain("R = ρL/A");
    expect(question(25).explanation).toContain("A = πd²/4");
    expect(question(25).explanation).toContain("one quarter");
    expect(question(34).explanation).toContain("1.25 mm² flex at 13 A");
    expect(question(35).explanation).toContain("0.08775 + 0.1 = 0.18775 Ω");
    expect(question(35).explanation).toContain("added once, not per metre");
    expect(0.08775 + 0.1).toBeCloseTo(0.18775, 8);
  });

  it("corrects the competence, fuse and instrument-form keys without changing other answer letters", () => {
    const rawQuestions = getQuestionsForVariant(rawExam, 4);
    expect(questions.filter((entry) => entry.answer !== rawQuestions.find(
      (raw) => raw.number === entry.number,
    )!.answer).map((entry) => entry.number)).toEqual([12, 17, 18]);
    expect(question(12).prompt).toContain("HSE HSG107");
    expect(question(12).options[question(12).answer]).toBe("Level 1");
    expect(question(17).options[question(17).answer]).toBe("3 A");
    expect(question(18).options[question(18).answer]).toBe(
      "Instrument type, model, serial number and last calibration date",
    );
  });

  it("states the relevant framework instead of giving ambiguous or obsolete rules", () => {
    expect(question(10).explanation).toContain("no protective-earth conductor");
    expect(question(10).explanation).toContain("not protective-conductor continuity");
    expect(question(20).explanation).toContain("5th edition removed");
    expect(question(27).explanation).toContain("neither an upper nor a lower voltage limit");
    expect(question(29).prompt).toContain("IET Code of Practice 5th-edition");
    expect(question(29).options[question(29).answer]).toBe("5 mA");
    expect(question(29).explanation).toContain("BS EN 50699 touch-current limit of 0.5 mA");
    expect(question(29).explanation).toContain("stricter product standard");
    expect(question(31).explanation).toContain("60°");
    expect(question(32).options[question(32).answer]).toBe("Form V.2");
    expect(question(33).prompt).toContain("another business");
    expect(question(33).explanation).toContain("Consumer Rights Act 2015");
    expect(question(29).options.D).not.toContain("3.5 5mA");
  });

  it("ships identical prompts, answers and all feedback to iOS with stable question IDs", () => {
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
    const nativeQuestions = delivered.sections.flatMap((section) => section.questions);
    expect(nativeQuestions).toHaveLength(35);

    for (const webQuestion of questions) {
      const native = nativeQuestions.find((entry) => entry.number === webQuestion.number)!;
      expect(native.id).toBe(`pat-testing/${homeworkId}/source-mock-pat/question-${webQuestion.number}`);
      expect(native.prompt).toBe(webQuestion.prompt);
      expect(native.options).toEqual(webQuestion.options);
      expect(native.answer).toBe(webQuestion.answer);
      expect(native.explanation).toBe(webQuestion.explanation);
      expect(native.optionFeedback).toEqual(buildOptionFeedback(webQuestion));
    }
  });
});
