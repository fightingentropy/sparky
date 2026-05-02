import { describe, expect, it } from "vitest";
import { EXAMS, countQuestions, getScoringBand } from "./exams";

describe("exam data", () => {
  it("has valid questions and descending score bands", () => {
    for (const exam of EXAMS) {
      const questionNumbers = new Set<number>();
      const prompts = new Set<string>();
      const sectionIds = new Set<string>();
      const total = countQuestions(exam);

      expect(total).toBeGreaterThan(0);
      expect(exam.passMark).toBeGreaterThan(0);
      expect(exam.passMark).toBeLessThanOrEqual(total);
      expect(exam.format).toContain(`${total} multiple-choice questions`);
      expect(exam.scoring.length).toBeGreaterThan(0);
      expect(exam.scoring[0].minScore).toBeLessThanOrEqual(total);
      expect(exam.scoring.at(-1)?.minScore).toBe(0);

      for (const section of exam.sections) {
        expect(sectionIds.has(section.id)).toBe(false);
        sectionIds.add(section.id);
        expect(section.title).toBeTruthy();
        for (const question of section.questions) {
          expect(questionNumbers.has(question.number)).toBe(false);
          questionNumbers.add(question.number);
          expect(prompts.has(question.prompt)).toBe(false);
          prompts.add(question.prompt);
          expect(question.prompt.trim()).toBe(question.prompt);
          expect(question.explanation.trim()).toBe(question.explanation);
          expect(question.options[question.answer]).toBeTruthy();
          for (const choice of Object.values(question.options)) {
            expect(choice.trim()).toBe(choice);
            expect(choice.length).toBeGreaterThan(0);
          }
        }
      }

      for (let questionNumber = 1; questionNumber <= total; questionNumber += 1) {
        expect(questionNumbers.has(questionNumber)).toBe(true);
      }

      for (let i = 1; i < exam.scoring.length; i += 1) {
        expect(exam.scoring[i - 1].minScore).toBeGreaterThan(exam.scoring[i].minScore);
      }
    }
  });

  it("keeps each exam at a round question count", () => {
    expect(Object.fromEntries(EXAMS.map((exam) => [exam.id, countQuestions(exam)]))).toEqual({
      "basic-electrics": 20,
      "building-regulations": 40,
      "18th-edition": 80,
      "pat-testing": 50,
      "initial-verification": 90,
      "periodic-inspection": 40,
      "condition-reporting": 20,
      "am2-installation-assessment": 30,
      "at-formative-mixed-practice": 50
    });
  });

  it("consolidates the old Level 3 mocks into topic categories", () => {
    const ids = EXAMS.map((exam) => exam.id);
    const titles = EXAMS.map((exam) => exam.title);
    const examById = new Map(EXAMS.map((exam) => [exam.id, exam]));
    const questionsFor = (id: string) =>
      examById.get(id)!.sections.flatMap((section) => section.questions);

    expect(ids).toEqual([
      "basic-electrics",
      "building-regulations",
      "18th-edition",
      "pat-testing",
      "initial-verification",
      "periodic-inspection",
      "condition-reporting",
      "am2-installation-assessment",
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
    expect(countQuestions(exam!)).toBe(20);
    expect(getScoringBand(exam!, 18).range).toBe("18–20");
    expect(getScoringBand(exam!, 15).range).toBe("15–17");
    expect(getScoringBand(exam!, 12).range).toBe("12–14");
    expect(getScoringBand(exam!, 11).range).toBe("< 12");
  });
});
