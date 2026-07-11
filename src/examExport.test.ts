import { describe, expect, it } from "vitest";
import {
  getExamExportFilename,
  getExamMarkdownText,
  getExamPdfDefinition
} from "./examExport";
import type { ExamQuestion } from "./exams/types";

const question: ExamQuestion = {
  number: 6,
  prompt: "What is Z = √(R² + X²)?",
  imageUrls: ["/exam-images/circuit.png"],
  options: {
    A: "Resistance * current",
    B: "Impedance",
    C: "Reactance",
    D: "Power"
  },
  optionImageUrls: { B: "/exam-images/answer.png" },
  answer: "B",
  explanation: "It is the impedance triangle in Ω."
};

const groups = [{ questions: [question] }];

describe("exam exports", () => {
  it("formats a portable Markdown exam with answers, explanations and images", () => {
    const markdown = getExamMarkdownText(groups, "https://sparky.example/exams");

    expect(markdown).toContain("## Q6");
    expect(markdown).toContain("What is Z = √(R² + X²)?");
    expect(markdown).toContain("- **A.** Resistance \\* current");
    expect(markdown).toContain("**Answer:** **B.** Impedance");
    expect(markdown).toContain("**Explanation:** It is the impedance triangle in Ω.");
    expect(markdown).toContain("https://sparky.example/exam-images/circuit.png");
    expect(markdown).toContain("https://sparky.example/exam-images/answer.png");
    expect(markdown).not.toContain("Format:");
    expect(markdown).not.toContain("Test:");
  });

  it("builds stable, descriptive filenames", () => {
    expect(getExamExportFilename("Level 3 Electrical Installation", 2, "md"))
      .toBe("level-3-electrical-installation-test-2.md");
    expect(getExamExportFilename("", 0, "pdf")).toBe("exam-test-1.pdf");
  });

  it("builds an A4 PDF definition with Unicode text and embedded images", () => {
    const imageDataUrls = new Map([
      ["/exam-images/circuit.png", "data:image/png;base64,question"],
      ["/exam-images/answer.png", "data:image/png;base64,answer"]
    ]);
    const definition = getExamPdfDefinition(groups, imageDataUrls, "https://sparky.example/exams");
    const serialized = JSON.stringify(definition.content);

    expect(definition.pageSize).toBe("A4");
    expect(serialized).toContain("What is Z = √(R² + X²)?");
    expect(serialized).toContain("It is the impedance triangle in Ω.");
    expect(serialized).toContain("data:image/png;base64,question");
    expect(serialized).toContain("data:image/png;base64,answer");
    expect(serialized).not.toContain("Format:");
    expect(serialized).not.toContain("Test:");
  });
});
