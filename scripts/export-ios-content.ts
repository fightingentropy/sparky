import { createHash } from "node:crypto";
import { mkdir, readdir, readFile, unlink, writeFile } from "node:fs/promises";
import { basename, dirname, extname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { CHEAT_SHEET_SECTIONS } from "../src/cheatSheetSections";
import {
  CALCULATOR_DEFINITIONS,
  CONTENT_MANIFEST_SCHEMA_VERSION,
  CONTENT_SCHEMA_VERSION,
} from "../src/contentSchema";
import { COURSE_GUIDES } from "../src/courseGuides";
import { applyExamContentSource } from "../src/examContentSource";
import { applyExamExplanationEnhancements } from "../src/examExplanationEnhancements";
import { buildOptionFeedback } from "../src/examOptionExplanations";
import { applyExamSolutionTables } from "../src/examSolutionTables";
import { buildFundamentalInspectionExam } from "../src/fundamentalInspectionExam";
import { buildInitialVerificationExam } from "../src/initialVerificationExam";
import {
  getSectionQuestionsForVariant,
  getVariantCount,
} from "../src/examUtils";
import type { Exam, ExamQuestion } from "../src/exams/types";
import { PRIMARY_EXAM_IDS } from "../src/examTaxonomy";
import { TUTORIALS } from "../src/tutorials";

const ROOT_DIR = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const EXAM_SOURCE_DIR = join(ROOT_DIR, "src", "exam-data");
const EXAM_IMAGE_DIR = join(ROOT_DIR, "public", "exam-images");
const CONTENT_OUTPUT_DIR = process.env.SPARKY_CONTENT_OUTPUT_DIR
  ? resolve(process.env.SPARKY_CONTENT_OUTPUT_DIR)
  : join(ROOT_DIR, "ios", "Sparky", "Resources", "Content");
const EXAM_OUTPUT_DIR = join(CONTENT_OUTPUT_DIR, "exams");

type ExportedQuestion = ExamQuestion & {
  optionFeedback: ReturnType<typeof buildOptionFeedback>;
};

type ExportedTestSection = {
  id: string;
  title: string;
  sourceVariantId: string;
  questions: ExportedQuestion[];
};

type ExportedTest = {
  id: string;
  index: number;
  title: string;
  questionCount: number;
  sections: ExportedTestSection[];
};

type ExportedExam = Omit<Exam, "sections"> & {
  tests: ExportedTest[];
};

function fail(message: string): never {
  throw new Error(`[export-ios-content] ${message}`);
}

function makeDeliveryTests(exam: Exam): ExportedTest[] {
  const tests: ExportedTest[] = [];
  const seenTestIds = new Set<string>();

  for (let index = 0; index < getVariantCount(exam); index += 1) {
    const deliveryGroups = getSectionQuestionsForVariant(exam, index);
    const firstSourceVariantId = deliveryGroups[0]?.section.variants[
      index % deliveryGroups[0].section.variants.length
    ]?.id;
    const id = firstSourceVariantId ?? `test-${index + 1}`;
    if (seenTestIds.has(id)) fail(`${exam.id} has duplicate delivered test id ${id}`);
    seenTestIds.add(id);

    const sections = deliveryGroups.map(({ section, questions }) => {
      const sourceVariant = section.variants[index % section.variants.length];
      if (!sourceVariant) {
        return fail(`${exam.id}/${section.id} has no variant for test index ${index}`);
      }

      return {
        id: section.id,
        title: section.title,
        sourceVariantId: sourceVariant.id,
        questions: questions.map((question) => ({
          ...question,
          optionFeedback: buildOptionFeedback(question),
        })),
      };
    });
    const questionCount = sections.reduce(
      (count, section) => count + section.questions.length,
      0,
    );
    tests.push({
      id,
      index,
      title: `Test ${index + 1}`,
      questionCount,
      sections,
    });
  }

  return tests;
}

function makeExportedExam(exam: Exam): ExportedExam {
  const { sections: _sourceSections, ...metadata } = exam;
  return { ...metadata, tests: makeDeliveryTests(exam) };
}

function makeExamIndexEntry(exam: ExportedExam) {
  const tests = exam.tests.map((test) => ({
    id: test.id,
    index: test.index,
    title: test.title,
    sectionCount: test.sections.length,
    questionCount: test.questionCount,
    sections: test.sections.map((section) => ({
      id: section.id,
      title: section.title,
      questionCount: section.questions.length,
    })),
  }));

  return {
    id: exam.id,
    title: exam.title,
    subtitle: exam.subtitle,
    description: exam.description,
    format: exam.format,
    passPercent: exam.passPercent,
    scoring: exam.scoring,
    priorities: exam.priorities,
    variantCount: tests.length,
    testCount: tests.length,
    questionCount: tests.reduce((count, test) => count + test.questionCount, 0),
    tests,
  };
}

async function writeCompactJson(path: string, value: unknown): Promise<void> {
  const serialized = JSON.stringify(value);
  if (serialized === undefined) fail(`could not serialize ${path}`);

  // Parsing before writing catches accidental unsupported values or malformed
  // custom serializers while the original source context is still available.
  JSON.parse(serialized);
  await writeFile(path, `${serialized}\n`, "utf8");
}

function requireNonEmpty(value: string, context: string): void {
  if (value.trim() === "") fail(`${context} must not be empty`);
}

function requireUniqueIds(
  entries: readonly { id: string }[],
  context: string,
): void {
  const seen = new Set<string>();
  for (const entry of entries) {
    requireNonEmpty(entry.id, `${context} id`);
    if (seen.has(entry.id)) fail(`${context} has duplicate id ${entry.id}`);
    seen.add(entry.id);
  }
}

function validateStudyCollections(): void {
  requireUniqueIds(CHEAT_SHEET_SECTIONS, "cheat sheets");
  requireUniqueIds(COURSE_GUIDES, "course guides");
  requireUniqueIds(TUTORIALS, "tutorials");
  requireUniqueIds(CALCULATOR_DEFINITIONS, "calculator definitions");

  for (const section of CHEAT_SHEET_SECTIONS) {
    requireNonEmpty(section.title, `${section.id} title`);
    requireNonEmpty(section.summary, `${section.id} summary`);
    const normalizedItems = section.items.map((item) => item.trim().toLocaleLowerCase("en-GB"));
    if (normalizedItems.some((item) => item === "")) {
      fail(`${section.id} contains an empty item`);
    }
    if (new Set(normalizedItems).size !== normalizedItems.length) {
      fail(`${section.id} contains duplicate items`);
    }
  }
}

async function validateImage(imageUrl: string, context: string): Promise<void> {
  if (
    !imageUrl.startsWith("/exam-images/") ||
    imageUrl.includes("..") ||
    imageUrl.includes("?") ||
    imageUrl.includes("#")
  ) {
    fail(`${context} has unsupported image path ${JSON.stringify(imageUrl)}`);
  }

  const fileName = imageUrl.slice("/exam-images/".length);
  if (fileName === "" || fileName.includes("/")) {
    fail(`${context} has invalid image path ${JSON.stringify(imageUrl)}`);
  }

  try {
    await readFile(join(EXAM_IMAGE_DIR, fileName));
  } catch {
    fail(`${context} references missing image ${imageUrl}`);
  }
}

async function validateExportedExam(exam: ExportedExam): Promise<void> {
  requireNonEmpty(exam.id, "exam id");
  requireNonEmpty(exam.title, `${exam.id} title`);
  if (!(exam.passPercent > 0 && exam.passPercent <= 1)) {
    fail(`${exam.id} has invalid pass percentage ${exam.passPercent}`);
  }
  if (!exam.contentSources?.length) {
    fail(`${exam.id} has no content source record`);
  }
  requireUniqueIds(exam.contentSources, `${exam.id} content sources`);
  const sourceIds = new Set(exam.contentSources.map((source) => source.id));
  for (const source of exam.contentSources) {
    requireNonEmpty(source.documentIdentifier, `${source.id} document identifier`);
    requireNonEmpty(source.edition, `${source.id} edition`);
    requireNonEmpty(source.recordedOn, `${source.id} recorded date`);
    requireNonEmpty(source.locator, `${source.id} locator`);
  }

  requireUniqueIds(exam.tests, `${exam.id} tests`);
  for (const test of exam.tests) {
    if (test.questionCount <= 0) fail(`${exam.id}/${test.id} has no questions`);
    if (test.questionCount !== test.sections.reduce((sum, section) => sum + section.questions.length, 0)) {
      fail(`${exam.id}/${test.id} questionCount does not match its sections`);
    }

    requireUniqueIds(test.sections, `${exam.id}/${test.id} sections`);
    const seenQuestionNumbers = new Set<number>();
    const imageChecks: Promise<void>[] = [];
    for (const section of test.sections) {
      requireNonEmpty(section.title, `${exam.id}/${test.id}/${section.id} title`);
      requireNonEmpty(
        section.sourceVariantId,
        `${exam.id}/${test.id}/${section.id} source variant id`,
      );

      for (const question of section.questions) {
        const context = `${exam.id}/${test.id}/${section.id}/question-${question.number}`;
        if (!Number.isInteger(question.number) || question.number <= 0) {
          fail(`${context} has an invalid question number`);
        }
        if (seenQuestionNumbers.has(question.number)) {
          fail(`${exam.id}/${test.id} has duplicate question number ${question.number}`);
        }
        seenQuestionNumbers.add(question.number);
        requireNonEmpty(question.prompt, `${context} prompt`);
        requireNonEmpty(question.explanation, `${context} explanation`);

        const choices = ["A", "B", "C", "D"] as const;
        const optionKeys = Object.keys(question.options).sort();
        if (optionKeys.join("") !== choices.join("")) {
          fail(`${context} must contain exactly options A, B, C and D`);
        }
        if (!choices.includes(question.answer)) {
          fail(`${context} has invalid answer ${question.answer}`);
        }
        const optionSignatures = choices.map((choice) => {
          const text = question.options[choice].trim();
          requireNonEmpty(text, `${context} option ${choice}`);
          const image = question.optionImageUrls?.[choice] ?? "";
          return `${text.toLocaleLowerCase("en-GB")}\u0000${image}`;
        });
        if (new Set(optionSignatures).size !== choices.length) {
          fail(`${context} contains duplicate answer options`);
        }
        if (!question.sourceIds?.length || question.sourceIds.some((id) => !sourceIds.has(id))) {
          fail(`${context} has a missing or unknown source id`);
        }
        for (const choice of choices) {
          requireNonEmpty(
            question.optionFeedback[choice].text,
            `${context} feedback ${choice}`,
          );
        }
        for (const imageUrl of question.imageUrls ?? []) {
          imageChecks.push(validateImage(imageUrl, context));
        }
        for (const imageUrl of Object.values(question.optionImageUrls ?? {})) {
          if (imageUrl) imageChecks.push(validateImage(imageUrl, context));
        }
      }
    }
    if (seenQuestionNumbers.size !== test.questionCount) {
      fail(`${exam.id}/${test.id} has an inconsistent set of question numbers`);
    }
    await Promise.all(imageChecks);
  }
}

function sha256(value: string | Uint8Array): string {
  return createHash("sha256").update(value).digest("hex");
}

async function writeContentManifest(relativePaths: readonly string[]): Promise<void> {
  const sortedPaths = [...relativePaths].sort((left, right) => left.localeCompare(right, "en-GB"));
  if (new Set(sortedPaths).size !== sortedPaths.length) {
    fail("content manifest contains duplicate file paths");
  }

  const files = await Promise.all(
    sortedPaths.map(async (path) => {
      const contents = await readFile(join(CONTENT_OUTPUT_DIR, path));
      return { path, bytes: contents.byteLength, sha256: sha256(contents) };
    }),
  );
  const contentHash = sha256(
    files.map((file) => `${file.path}\u0000${file.sha256}\n`).join(""),
  );

  await writeCompactJson(join(CONTENT_OUTPUT_DIR, "content-manifest.json"), {
    schemaVersion: CONTENT_MANIFEST_SCHEMA_VERSION,
    contentSchemaVersion: CONTENT_SCHEMA_VERSION,
    contentHash,
    files,
  });
}

async function removeStaleExamExports(expectedNames: Set<string>): Promise<void> {
  const outputEntries = await readdir(EXAM_OUTPUT_DIR, { withFileTypes: true });
  await Promise.all(
    outputEntries.map(async (entry) => {
      if (
        entry.isFile() &&
        extname(entry.name) === ".json" &&
        !expectedNames.has(entry.name)
      ) {
        await unlink(join(EXAM_OUTPUT_DIR, entry.name));
      }
    }),
  );
}

async function main(): Promise<void> {
  await mkdir(EXAM_OUTPUT_DIR, { recursive: true });

  validateStudyCollections();
  const cheatSheetSections = CHEAT_SHEET_SECTIONS;
  const examSourceEntries = await readdir(EXAM_SOURCE_DIR, { withFileTypes: true });
  const examFileNames = examSourceEntries
    .filter((entry) => entry.isFile() && extname(entry.name) === ".json")
    .map((entry) => entry.name)
    .sort((left, right) => left.localeCompare(right, "en-GB"));

  if (examFileNames.length === 0) fail(`no exam JSON found in ${EXAM_SOURCE_DIR}`);

  const exportedExams: ExportedExam[] = [];
  const examOutputs = new Map<string, ExportedExam>();
  const seenExamIds = new Set<string>();
  let enhancedInitialVerification: Exam | undefined;

  for (const fileName of examFileNames) {
    const sourcePath = join(EXAM_SOURCE_DIR, fileName);
    const sourceExam = JSON.parse(await readFile(sourcePath, "utf8")) as Exam;
    const expectedId = basename(fileName, ".json");

    if (sourceExam.id !== expectedId) {
      fail(`${fileName} contains exam id ${JSON.stringify(sourceExam.id)}`);
    }
    if (seenExamIds.has(sourceExam.id)) fail(`duplicate exam id ${sourceExam.id}`);
    seenExamIds.add(sourceExam.id);

    const enhancedExam = applyExamContentSource(
      applyExamSolutionTables(applyExamExplanationEnhancements(sourceExam)),
    );
    if (enhancedExam.id === "initial-verification") {
      enhancedInitialVerification = enhancedExam;
      continue;
    }
    const exportedExam = makeExportedExam(enhancedExam);
    exportedExams.push(exportedExam);
    examOutputs.set(fileName, exportedExam);
  }

  if (!enhancedInitialVerification) {
    fail("initial-verification source exam is required to build the focused exams");
  }

  const initialVerificationExam = applyExamContentSource(
    buildInitialVerificationExam(enhancedInitialVerification),
  );
  const exportedInitialVerificationExam = makeExportedExam(
    initialVerificationExam,
  );
  exportedExams.push(exportedInitialVerificationExam);
  examOutputs.set("initial-verification.json", exportedInitialVerificationExam);

  const fundamentalExam = applyExamContentSource(
    buildFundamentalInspectionExam(enhancedInitialVerification),
  );
  if (seenExamIds.has(fundamentalExam.id)) {
    fail(`duplicate exam id ${fundamentalExam.id}`);
  }
  const fundamentalFileName = `${fundamentalExam.id}.json`;
  seenExamIds.add(fundamentalExam.id);
  const exportedFundamentalExam = makeExportedExam(fundamentalExam);
  exportedExams.push(exportedFundamentalExam);
  examOutputs.set(fundamentalFileName, exportedFundamentalExam);

  await removeStaleExamExports(new Set([...examFileNames, fundamentalFileName]));
  await Promise.all(exportedExams.map(validateExportedExam));
  await Promise.all(
    [...examOutputs].map(([fileName, exam]) =>
      writeCompactJson(join(EXAM_OUTPUT_DIR, fileName), exam),
    ),
  );

  const primaryOrder = new Map(
    PRIMARY_EXAM_IDS.map((examId, index) => [examId, index]),
  );
  const indexEntries = exportedExams
    .map(makeExamIndexEntry)
    .sort((left, right) => {
      const leftOrder = primaryOrder.get(left.id);
      const rightOrder = primaryOrder.get(right.id);
      if (leftOrder !== undefined || rightOrder !== undefined) {
        return (leftOrder ?? Number.MAX_SAFE_INTEGER) -
          (rightOrder ?? Number.MAX_SAFE_INTEGER);
      }
      return left.title.localeCompare(right.title, "en-GB");
    });

  await Promise.all([
    writeCompactJson(join(CONTENT_OUTPUT_DIR, "course-guides.json"), COURSE_GUIDES),
    writeCompactJson(join(CONTENT_OUTPUT_DIR, "tutorials.json"), TUTORIALS),
    writeCompactJson(
      join(CONTENT_OUTPUT_DIR, "calculators.json"),
      CALCULATOR_DEFINITIONS,
    ),
    writeCompactJson(
      join(CONTENT_OUTPUT_DIR, "cheat-sheet.json"),
      cheatSheetSections,
    ),
    writeCompactJson(join(CONTENT_OUTPUT_DIR, "exam-index.json"), {
      schemaVersion: CONTENT_SCHEMA_VERSION,
      examCount: indexEntries.length,
      variantCount: indexEntries.reduce(
        (count, exam) => count + exam.variantCount,
        0,
      ),
      questionCount: indexEntries.reduce(
        (count, exam) => count + exam.questionCount,
        0,
      ),
      exams: indexEntries,
    }),
  ]);

  const contentPaths = [
    "calculators.json",
    "cheat-sheet.json",
    "course-guides.json",
    "exam-index.json",
    "tutorials.json",
    ...[...examOutputs.keys()].map((fileName) => `exams/${fileName}`),
  ];
  await writeContentManifest(contentPaths);

  const questionCount = indexEntries.reduce(
    (count, exam) => count + exam.questionCount,
    0,
  );
  console.log(
    `Exported ${COURSE_GUIDES.length} guides, ${TUTORIALS.length} tutorials, ` +
      `${cheatSheetSections.length} cheat sheets, and ${questionCount} questions ` +
      `across ${indexEntries.length} exams to ${CONTENT_OUTPUT_DIR}`,
  );
}

await main();
