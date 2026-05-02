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
      "building-regulations": 50,
      "18th-edition": 90,
      "pat-testing": 60,
      "initial-verification": 100,
      "periodic-inspection": 50,
      "condition-reporting": 30,
      "am2-installation-assessment": 40
    });
  });

  it("merges the standalone basic and mixed banks into topic categories", () => {
    const ids = EXAMS.map((exam) => exam.id);
    const titles = EXAMS.map((exam) => exam.title);
    const examById = new Map(EXAMS.map((exam) => [exam.id, exam]));
    const questionsFor = (id: string) =>
      examById.get(id)!.sections.flatMap((section) => section.questions);

    expect(ids).toEqual([
      "building-regulations",
      "18th-edition",
      "pat-testing",
      "initial-verification",
      "periodic-inspection",
      "condition-reporting",
      "am2-installation-assessment"
    ]);
    expect(ids).not.toContain("basic-electrics");
    expect(ids).not.toContain("at-formative-mixed-practice");
    expect(titles).toEqual(
      expect.arrayContaining([
        "Building Regulations & Part P",
        "18th Edition (BS 7671)",
        "PAT Testing (5th Edition COP)",
        "Initial Verification",
        "Periodic Inspection & Testing",
        "Condition Reporting (EICR)",
        "AM2 / AM2E — Installation Electrician EPA"
      ])
    );
    expect(titles).not.toContain("Basic Electrics");
    expect(titles).not.toContain("Mixed Topics — AT Formative Test Practice Bank");

    expect(
      questionsFor("building-regulations").some((question) =>
        question.prompt.startsWith("The Approved Documents to the Building Regulations")
      )
    ).toBe(true);
    expect(
      questionsFor("18th-edition").some((question) =>
        question.prompt.startsWith("In Zone 1 of a room containing a bath or shower")
      )
    ).toBe(true);
    expect(
      questionsFor("pat-testing").some((question) =>
        question.prompt.startsWith("The SI unit of electrical resistance")
      )
    ).toBe(true);
    expect(
      questionsFor("initial-verification").some((question) =>
        question.prompt.startsWith("When measuring the external earth fault loop impedance")
      )
    ).toBe(true);
    expect(
      questionsFor("periodic-inspection").some((question) =>
        question.prompt.startsWith("An Electrical Installation Condition Report:")
      )
    ).toBe(true);
    expect(
      questionsFor("condition-reporting").some((question) =>
        question.prompt.startsWith("A two way lighting circuit would be required")
      )
    ).toBe(true);
    expect(
      questionsFor("am2-installation-assessment").some((question) =>
        question.prompt.startsWith("A shower is rated at 8kW")
      )
    ).toBe(true);
  });

  it("scores 30-question exams against their 30-question bands", () => {
    const exam = EXAMS.find((candidate) => countQuestions(candidate) === 30);

    expect(exam).toBeDefined();
    expect(getScoringBand(exam!, 27).range).toBe("27–30");
    expect(getScoringBand(exam!, 23).range).toBe("23–26");
    expect(getScoringBand(exam!, 18).range).toBe("18–22");
    expect(getScoringBand(exam!, 17).range).toBe("< 18");
  });

  it("scores expanded topic banks against their bands", () => {
    const exam = EXAMS.find((candidate) => candidate.id === "building-regulations");

    expect(exam).toBeDefined();
    expect(countQuestions(exam!)).toBe(50);
    expect(getScoringBand(exam!, 45).range).toBe("45–50");
    expect(getScoringBand(exam!, 35).range).toBe("35–44");
    expect(getScoringBand(exam!, 25).range).toBe("25–34");
    expect(getScoringBand(exam!, 24).range).toBe("< 25");
  });
});
