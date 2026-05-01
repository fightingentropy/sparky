import { describe, expect, it } from "vitest";
import { EXAMS, countQuestions, getScoringBand } from "./exams";

describe("exam data", () => {
  it("has valid questions and descending score bands", () => {
    for (const exam of EXAMS) {
      const questionNumbers = new Set<number>();
      const prompts = new Set<string>();
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
          expect(prompts.has(question.prompt)).toBe(false);
          prompts.add(question.prompt);
          expect(question.options[question.answer]).toBeTruthy();
        }
      }

      for (let i = 1; i < exam.scoring.length; i += 1) {
        expect(exam.scoring[i - 1].minScore).toBeGreaterThan(exam.scoring[i].minScore);
      }
    }
  });

  it("consolidates the old Level 3 mocks into topic categories", () => {
    const ids = EXAMS.map((exam) => exam.id);
    const titles = EXAMS.map((exam) => exam.title);
    const examById = new Map(EXAMS.map((exam) => [exam.id, exam]));
    const questionsFor = (id: string) =>
      examById.get(id)!.sections.flatMap((section) => section.questions);

    expect(ids).toEqual([
      "am2-installation-assessment",
      "basic-electrics",
      "building-regulations",
      "18th-edition",
      "pat-testing",
      "initial-verification",
      "periodic-inspection",
      "condition-reporting",
      "at-formative-mixed-practice"
    ]);
    expect(titles).toEqual(
      expect.arrayContaining([
        "Basic Electrics",
        "Building Regulations & Part P",
        "18th Edition (BS 7671)",
        "PAT Testing (5th Edition COP)",
        "Initial Verification",
        "Periodic Inspection & Testing",
        "Condition Reporting (EICR)",
        "Mixed Topics — AT Formative Test Practice Bank"
      ])
    );

    expect(
      questionsFor("basic-electrics").some((question) =>
        question.prompt.startsWith("A 2 kW resistive load")
      )
    ).toBe(true);
    expect(
      questionsFor("18th-edition").some((question) =>
        question.prompt.startsWith("For a final circuit protected by a 32 A Type B")
      )
    ).toBe(true);
    expect(
      questionsFor("initial-verification").some((question) =>
        question.prompt.startsWith("The primary purpose of initial verification")
      )
    ).toBe(true);
    expect(
      questionsFor("condition-reporting").some((question) =>
        question.prompt.startsWith("An EICR observation coded C1 means")
      )
    ).toBe(true);
    expect(
      questionsFor("at-formative-mixed-practice").some((question) =>
        question.prompt.startsWith("Which Act places a general duty")
      )
    ).toBe(true);
  });

  it("scores 30-question exams against their 30-question bands", () => {
    const exam = EXAMS.find((candidate) => countQuestions(candidate) === 30);

    expect(exam).toBeDefined();
    expect(getScoringBand(exam!, 27).range).toBe("27–30");
    expect(getScoringBand(exam!, 24).range).toBe("24–26");
    expect(getScoringBand(exam!, 21).range).toBe("21–23");
    expect(getScoringBand(exam!, 20).range).toBe("< 21");
  });

  it("scores expanded topic banks against their bands", () => {
    const exam = EXAMS.find((candidate) => candidate.id === "basic-electrics");

    expect(exam).toBeDefined();
    expect(countQuestions(exam!)).toBe(17);
    expect(getScoringBand(exam!, 16).range).toBe("16–17");
    expect(getScoringBand(exam!, 13).range).toBe("13–15");
    expect(getScoringBand(exam!, 10).range).toBe("10–12");
    expect(getScoringBand(exam!, 9).range).toBe("< 10");
  });
});
