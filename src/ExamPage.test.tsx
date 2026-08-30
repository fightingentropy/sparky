import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { QuestionCard } from "./ExamPage";
import { buildOptionFeedback } from "./examOptionExplanations";
import type { ExamChoice, ExamQuestion } from "./exams/types";

const question: ExamQuestion = {
  number: 15,
  prompt: "What is the minimum permitted clearance?",
  options: { A: "0.5 m", B: "1.0 m", C: "1.5 m", D: "2.0 m" },
  answer: "B",
  explanation: "The stated minimum permitted clearance is 1.0 m."
};

function renderQuestion(submitted: boolean, selected?: ExamChoice, entry = question) {
  return renderToStaticMarkup(
    <QuestionCard
      question={entry}
      selected={selected}
      submitted={submitted}
      onSelect={() => {}}
      flagged={false}
      onToggleFlag={() => {}}
      keyboardShortcutActive={false}
      onActivate={() => {}}
    />
  );
}

describe("question answer explanations", () => {
  it("offers a ChatGPT tutoring handoff for the complete question", () => {
    const markup = renderQuestion(false, "A");

    expect(markup).toContain('href="https://chatgpt.com/?q=');
    expect(markup).toContain('target="_blank"');
    expect(markup).toContain('rel="noopener noreferrer"');
    expect(markup).toContain('aria-label="Ask ChatGPT to explain question 15"');
    expect(markup).toContain('title="Explain with ChatGPT"');
  });

  it("does not reveal explanations or why controls while answering", () => {
    const markup = renderQuestion(false, "A");

    expect(markup).not.toContain("<details");
    expect(markup).not.toContain("exam-option-feedback");
    expect(markup).not.toContain(question.explanation);
    expect(markup).not.toContain("Why?");
  });

  it.each<ExamChoice | undefined>(["A", "B", undefined])(
    "keeps wrong explanations in independent, closed disclosures after submitting %s",
    (selected) => {
      const markup = renderQuestion(true, selected);
      const feedback = buildOptionFeedback(question);
      const disclosures = [...markup.matchAll(/<details\b([^>]*)>([\s\S]*?)<\/details>/g)];
      const outsideDisclosures = markup.replace(/<details\b[^>]*>[\s\S]*?<\/details>/g, "");

      expect(disclosures).toHaveLength(3);
      for (const [index, choice] of (["A", "C", "D"] as const).entries()) {
        const [, attributes, contents] = disclosures[index];
        // Native details supplies keyboard support and expanded state. No open
        // or shared name means each wrong option starts closed and opens alone.
        expect(attributes).not.toMatch(/\b(open|name)=/);
        expect(contents).toContain(`Why is option ${choice} wrong for question 15?`);
        expect(contents).toContain(feedback[choice].text);
        expect(contents).not.toMatch(/<summary[^>]*\bdisabled/);
        expect(outsideDisclosures).not.toContain(feedback[choice].text);
        expect(markup).not.toContain(`aria-describedby="exam-option-feedback-15-${choice}"`);
      }

      expect(outsideDisclosures).toContain(question.explanation);
      expect(outsideDisclosures).toContain("exam-option-feedback is-correct");
      expect(markup).toContain('aria-describedby="exam-option-feedback-15-B"');
      expect(markup.match(/role="radio"[^>]*disabled=""/g)).toHaveLength(4);
    }
  );

  it("does not offer a misleading why explanation when only fallback feedback exists", () => {
    const unreviewed: ExamQuestion = {
      number: 1,
      prompt: "Which device is suitable for this deliberately unreviewed example?",
      options: { A: "Device one", B: "Device two", C: "Device three", D: "Device four" },
      answer: "B",
      explanation: "Device two has the characteristic required by this example."
    };
    const markup = renderQuestion(true, undefined, unreviewed);

    expect(markup).not.toContain("<details");
    expect(markup).toContain(unreviewed.explanation);
  });
});
