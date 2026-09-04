import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";

import { describe, expect, it } from "vitest";

import {
  EXAM_CONTENT_PROFILES,
  applyExamContentSource,
} from "./examContentSource";
import { applyExamSolutionTables } from "./examSolutionTables";
import { buildFundamentalInspectionExam } from "./fundamentalInspectionExam";
import { buildInitialVerificationExam } from "./initialVerificationExam";
import type { Exam, ExamQuestion } from "./exams/types";

const EXPECTED_EXAM_IDS = [
  "18th-edition",
  "am2-installation-assessment",
  "building-regulations",
  "ecs-health-safety",
  "fundamental-inspection-testing",
  "initial-verification",
  "inspection-design-2396",
  "level-2-electrical-installation",
  "level-3-electrical-installation",
  "pat-testing",
  "periodic-inspection",
  "special-locations",
] as const;

const sourceFileCache = new Map<string, Promise<Buffer>>();

function readExamSourceFile(fileName: string): Promise<Buffer> {
  const cached = sourceFileCache.get(fileName);
  if (cached) return cached;

  const request = readFile(new URL(`./exam-data/${fileName}`, import.meta.url));
  sourceFileCache.set(fileName, request);
  return request;
}

async function readSourceExam(fileName: string): Promise<Exam> {
  return JSON.parse((await readExamSourceFile(fileName)).toString("utf8")) as Exam;
}

async function loadDeliveredExams(): Promise<Exam[]> {
  const sourceExams = new Map<string, Exam>();
  for (const profile of Object.values(EXAM_CONTENT_PROFILES)) {
    if (!sourceExams.has(profile.sourceFile)) {
      sourceExams.set(
        profile.sourceFile,
        applyExamSolutionTables(await readSourceExam(profile.sourceFile)),
      );
    }
  }

  const initialVerificationSource = sourceExams.get("initial-verification.json");
  if (!initialVerificationSource) {
    throw new Error("Missing initial-verification source fixture");
  }

  return EXPECTED_EXAM_IDS.map((examId) => {
    if (examId === "fundamental-inspection-testing") {
      return applyExamContentSource(
        buildFundamentalInspectionExam(initialVerificationSource),
      );
    }
    if (examId === "initial-verification") {
      return applyExamContentSource(
        buildInitialVerificationExam(initialVerificationSource),
      );
    }

    const profile = EXAM_CONTENT_PROFILES[examId];
    const sourceExam = sourceExams.get(profile.sourceFile);
    if (!sourceExam) throw new Error(`Missing ${profile.sourceFile} source fixture`);
    return applyExamContentSource(sourceExam);
  });
}

function questions(exam: Exam): ExamQuestion[] {
  return exam.sections.flatMap((section) =>
    section.variants.flatMap((variant) => variant.questions),
  );
}

function makeFocusedCitationExam(publication: string): Exam {
  return {
    id: "building-regulations",
    title: "Example",
    subtitle: "Example",
    description: "Example",
    format: "One question",
    passPercent: 0.5,
    scoring: [{ threshold: 0, label: "Review" }],
    priorities: ["Safety"],
    sections: [
      {
        id: "section",
        title: "Section",
        variants: [
          {
            id: "test-1",
            questions: [
              {
                number: 1,
                prompt: "Question?",
                options: { A: "A", B: "B", C: "C", D: "D" },
                answer: "A",
                explanation: "Because A is correct.",
                solutionTables: [
                  {
                    title: "Focused standards lookup",
                    columns: ["Reference", "Result"],
                    rows: [["Table 41.1", "A"]],
                    source: {
                      publication,
                      edition: "Edition not recorded in the source question",
                      locator: "Table 41.1",
                      url: "https://electrical.theiet.org/",
                      licence: "Reference only — proprietary publication not reproduced",
                      status: "source-citation",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };
}

describe("exam content provenance", () => {
  it("centrally covers every delivered exam and fingerprints the exact source file", async () => {
    expect(Object.keys(EXAM_CONTENT_PROFILES).sort()).toEqual(
      [...EXPECTED_EXAM_IDS].sort(),
    );

    for (const [examId, profile] of Object.entries(EXAM_CONTENT_PROFILES)) {
      const sourceBytes = await readExamSourceFile(profile.sourceFile);
      const expectedHash = `sha256:${createHash("sha256")
        .update(sourceBytes)
        .digest("hex")}`;
      expect(profile.sourceHash, examId).toBe(expectedHash);
      expect(profile.contentVersion.trim(), examId).not.toBe("");
    }
  });

  it("makes every delivered question resolve complete provenance", async () => {
    const deliveredExams = await loadDeliveredExams();
    let questionCount = 0;
    let focusedQuestionCount = 0;
    let fallbackOnlyCount = 0;

    for (const exam of deliveredExams) {
      const contentSources = exam.contentSources ?? [];
      const sourcesById = new Map(contentSources.map((source) => [source.id, source]));
      const bankSourceId = `${exam.id}-question-bank`;
      const bankSource = sourcesById.get(bankSourceId);

      expect(bankSource, `${exam.id} bank source`).toMatchObject({
        classification: "exam-convention",
        sourceHashScope: "repository-file",
        needsLicensedConfirmation: false,
        needsEditorialConfirmation: true,
      });
      expect(bankSource?.sourceHash).toMatch(/^sha256:[a-f0-9]{64}$/);

      for (const question of questions(exam)) {
        questionCount += 1;
        expect(question.sourceIds, `${exam.id} Q${question.number}`).toContain(
          bankSourceId,
        );
        expect(question.sourceIds?.length).toBeGreaterThan(0);

        const resolvedSources = (question.sourceIds ?? []).map((sourceId) => {
          const source = sourcesById.get(sourceId);
          expect(source, `${exam.id} Q${question.number} source ${sourceId}`).toBeDefined();
          return source!;
        });
        for (const source of resolvedSources) {
          expect(source.jurisdiction.trim()).not.toBe("");
          expect(source.documentIdentifier.trim()).not.toBe("");
          expect(source.edition.trim()).not.toBe("");
          expect(source.amendment.trim()).not.toBe("");
          expect(source.effectiveDate.trim()).not.toBe("");
          expect(source.sectionOrTable.trim()).not.toBe("");
          expect(source.profileVersion.trim()).not.toBe("");
          expect(source.contentVersion.trim()).not.toBe("");
          expect(source.sourceHash).toMatch(
            /^(?:sha256:[a-f0-9]{64}|fnv1a64:[a-f0-9]{16})$/,
          );
          expect(typeof source.needsLicensedConfirmation).toBe("boolean");
          expect(typeof source.needsEditorialConfirmation).toBe("boolean");
        }

        if (question.solutionTables?.length) {
          focusedQuestionCount += 1;
          for (const table of question.solutionTables) {
            const focusedSource = resolvedSources.find(
              (source) =>
                source.id !== bankSourceId &&
                source.sectionOrTable === table.source.locator,
            );
            expect(
              focusedSource,
              `${exam.id} Q${question.number} focused locator ${table.source.locator}`,
            ).toBeDefined();
            expect(focusedSource?.classification).not.toBe("exam-convention");
            expect(focusedSource?.sourceHashScope).toBe("citation-record");
            expect(focusedSource?.needsLicensedConfirmation).toBe(true);
          }
        } else if (question.sourceIds?.length === 1) {
          fallbackOnlyCount += 1;
        }
      }
    }

    expect(questionCount).toBeGreaterThan(0);
    expect(focusedQuestionCount).toBeGreaterThan(0);
    expect(fallbackOnlyCount).toBeGreaterThan(0);
  }, 30_000);

  it("retains the exact focused locator while keeping the bank fallback", () => {
    const result = applyExamContentSource(makeFocusedCitationExam("BS 7671"));
    const question = result.sections[0].variants[0].questions[0];
    const resolved = (question.sourceIds ?? []).map(
      (sourceId) => result.contentSources?.find((source) => source.id === sourceId),
    );
    const focused = resolved.find(
      (source) => source?.classification === "standard",
    );

    expect(question.sourceIds).toContain("building-regulations-question-bank");
    expect(focused).toMatchObject({
      documentIdentifier: "BS 7671",
      edition: "2018",
      amendment: "Amendment 4:2026",
      effectiveDate: "2026-04-15",
      locator: "Table 41.1",
      sectionOrTable: "Table 41.1",
      sourceHashScope: "citation-record",
      needsLicensedConfirmation: true,
      needsEditorialConfirmation: true,
    });
    expect(focused?.limitations).toContain("15 October 2026");
  });

  it("records the current GN3 profile without pretending the source-question edition was known", () => {
    const result = applyExamContentSource(
      makeFocusedCitationExam("IET Guidance Note 3"),
    );
    const focused = result.contentSources?.find(
      (source) => source.classification === "guidance",
    );

    expect(focused?.edition).toContain("10th edition");
    expect(focused?.amendment).toBe("Aligned to BS 7671:2018+A4:2026");
    expect(focused?.effectiveDate).toMatch(/^Unconfirmed/);
    expect(focused?.needsEditorialConfirmation).toBe(true);
  });

  it("refuses to guess provenance for an unregistered exam or publication", () => {
    const unknownExam = {
      ...makeFocusedCitationExam("BS 7671"),
      id: "unregistered-exam",
    };
    expect(() => applyExamContentSource(unknownExam)).toThrow(
      /no central provenance profile/,
    );

    expect(() =>
      applyExamContentSource(makeFocusedCitationExam("Unregistered publication")),
    ).toThrow(/no central provenance profile/);
  });

  it("is idempotent", () => {
    const once = applyExamContentSource(makeFocusedCitationExam("BS 7671"));
    expect(applyExamContentSource(once)).toEqual(once);
  });
});
