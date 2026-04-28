import { describe, expect, it } from "vitest";
import { EXAMS, countQuestions, getScoringBand } from "./exams";

describe("exam data", () => {
  it("has valid questions and descending score bands", () => {
    for (const exam of EXAMS) {
      const questionNumbers = new Set<number>();
      const total = countQuestions(exam);

      expect(total).toBeGreaterThan(0);
      expect(exam.passMark).toBeGreaterThan(0);
      expect(exam.passMark).toBeLessThanOrEqual(total);
      expect(exam.scoring.length).toBeGreaterThan(0);
      expect(exam.scoring[0].minScore).toBeLessThanOrEqual(total);
      expect(exam.scoring.at(-1)?.minScore).toBe(0);

      for (const section of exam.sections) {
        for (const question of section.questions) {
          expect(questionNumbers.has(question.number)).toBe(false);
          questionNumbers.add(question.number);
          expect(question.options[question.answer]).toBeTruthy();
        }
      }

      for (let i = 1; i < exam.scoring.length; i += 1) {
        expect(exam.scoring[i - 1].minScore).toBeGreaterThan(exam.scoring[i].minScore);
      }
    }
  });

  it("scores 30-question exams against their 30-question bands", () => {
    const exam = EXAMS.find((candidate) => countQuestions(candidate) === 30);

    expect(exam).toBeDefined();
    expect(getScoringBand(exam!, 27).range).toBe("27–30");
    expect(getScoringBand(exam!, 24).range).toBe("24–26");
    expect(getScoringBand(exam!, 21).range).toBe("21–23");
    expect(getScoringBand(exam!, 20).range).toBe("< 21");
  });

  it("scores 12-question exams against their 12-question bands", () => {
    const exam = EXAMS.find((candidate) => countQuestions(candidate) === 12);

    expect(exam).toBeDefined();
    expect(getScoringBand(exam!, 11).range).toBe("11–12");
    expect(getScoringBand(exam!, 9).range).toBe("9–10");
    expect(getScoringBand(exam!, 7).range).toBe("7–8");
    expect(getScoringBand(exam!, 6).range).toBe("< 7");
  });
});
