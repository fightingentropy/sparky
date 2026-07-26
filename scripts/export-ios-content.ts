import { mkdir, readdir, readFile, unlink, writeFile } from "node:fs/promises";
import { basename, dirname, extname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";

import { COURSE_GUIDES } from "../src/courseGuides";
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
const APP_SOURCE_PATH = join(ROOT_DIR, "src", "App.tsx");
const EXAM_SOURCE_DIR = join(ROOT_DIR, "src", "exam-data");
const CONTENT_OUTPUT_DIR = join(
  ROOT_DIR,
  "ios",
  "Sparky",
  "Resources",
  "Content",
);
const EXAM_OUTPUT_DIR = join(CONTENT_OUTPUT_DIR, "exams");

type JsonPrimitive = string | number | boolean | null;
type JsonValue = JsonPrimitive | JsonValue[] | { [key: string]: JsonValue };

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

function unwrapExpression(expression: ts.Expression): ts.Expression {
  let current = expression;

  while (
    ts.isParenthesizedExpression(current) ||
    ts.isAsExpression(current) ||
    ts.isTypeAssertionExpression(current) ||
    ts.isSatisfiesExpression(current) ||
    ts.isNonNullExpression(current)
  ) {
    current = current.expression;
  }

  return current;
}

function propertyNameText(name: ts.PropertyName, path: string): string {
  if (
    ts.isIdentifier(name) ||
    ts.isStringLiteral(name) ||
    ts.isNumericLiteral(name)
  ) {
    return name.text;
  }

  return fail(`${path} uses a computed or unsupported property name`);
}

/**
 * Decode JSON-compatible syntax from the TypeScript AST without evaluating it.
 * Any executable or referential syntax is deliberately rejected.
 */
function literalJsonValue(expression: ts.Expression, path: string): JsonValue {
  const node = unwrapExpression(expression);

  if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
    return node.text;
  }

  if (ts.isNumericLiteral(node)) {
    const value = Number(node.text);
    return Number.isFinite(value) ? value : fail(`${path} is not a finite number`);
  }

  if (node.kind === ts.SyntaxKind.TrueKeyword) return true;
  if (node.kind === ts.SyntaxKind.FalseKeyword) return false;
  if (node.kind === ts.SyntaxKind.NullKeyword) return null;

  if (ts.isPrefixUnaryExpression(node)) {
    if (
      (node.operator === ts.SyntaxKind.PlusToken ||
        node.operator === ts.SyntaxKind.MinusToken) &&
      ts.isNumericLiteral(node.operand)
    ) {
      const value = Number(node.operand.text);
      return node.operator === ts.SyntaxKind.MinusToken ? -value : value;
    }
    return fail(`${path} uses an unsupported unary expression`);
  }

  if (ts.isArrayLiteralExpression(node)) {
    return node.elements.map((element, index) => {
      if (ts.isSpreadElement(element) || ts.isOmittedExpression(element)) {
        return fail(`${path}[${index}] uses a spread or omitted value`);
      }
      return literalJsonValue(element, `${path}[${index}]`);
    });
  }

  if (ts.isObjectLiteralExpression(node)) {
    const result: Record<string, JsonValue> = {};

    for (const property of node.properties) {
      if (!ts.isPropertyAssignment(property)) {
        return fail(`${path} contains a spread, method, or shorthand property`);
      }

      const key = propertyNameText(property.name, path);
      if (Object.hasOwn(result, key)) {
        return fail(`${path} contains duplicate property ${JSON.stringify(key)}`);
      }
      result[key] = literalJsonValue(property.initializer, `${path}.${key}`);
    }

    return result;
  }

  return fail(
    `${path} must contain literals only (found ${ts.SyntaxKind[node.kind]})`,
  );
}

function findVariableInitializer(
  sourceFile: ts.SourceFile,
  variableName: string,
): ts.Expression {
  let initializer: ts.Expression | undefined;

  function visit(node: ts.Node): void {
    if (initializer) return;

    if (ts.isVariableDeclaration(node) && ts.isIdentifier(node.name)) {
      if (node.name.text === variableName) initializer = node.initializer;
    }

    ts.forEachChild(node, visit);
  }

  visit(sourceFile);
  return initializer ?? fail(`could not find ${variableName} in ${APP_SOURCE_PATH}`);
}

async function extractCheatSheetSections(): Promise<JsonValue[]> {
  const source = await readFile(APP_SOURCE_PATH, "utf8");
  const sourceFile = ts.createSourceFile(
    APP_SOURCE_PATH,
    source,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX,
  );

  const parseDiagnostics = (
    sourceFile as ts.SourceFile & {
      readonly parseDiagnostics?: readonly ts.Diagnostic[];
    }
  ).parseDiagnostics ?? [];
  if (parseDiagnostics.length > 0) {
    const diagnostics = parseDiagnostics
      .map((diagnostic) => ts.flattenDiagnosticMessageText(diagnostic.messageText, " "))
      .join("; ");
    return fail(`could not parse App.tsx: ${diagnostics}`);
  }

  const value = literalJsonValue(
    findVariableInitializer(sourceFile, "cheatSheetSections"),
    "cheatSheetSections",
  );
  return Array.isArray(value)
    ? value
    : fail("cheatSheetSections is not an array literal");
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

  const [cheatSheetSections, examSourceEntries] = await Promise.all([
    extractCheatSheetSections(),
    readdir(EXAM_SOURCE_DIR, { withFileTypes: true }),
  ]);
  const examFileNames = examSourceEntries
    .filter((entry) => entry.isFile() && extname(entry.name) === ".json")
    .map((entry) => entry.name)
    .sort((left, right) => left.localeCompare(right, "en-GB"));

  if (examFileNames.length === 0) fail(`no exam JSON found in ${EXAM_SOURCE_DIR}`);

  const exportedExams: ExportedExam[] = [];
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

    const enhancedExam = applyExamSolutionTables(
      applyExamExplanationEnhancements(sourceExam),
    );
    if (enhancedExam.id === "initial-verification") {
      enhancedInitialVerification = enhancedExam;
      continue;
    }
    const exportedExam = makeExportedExam(enhancedExam);
    exportedExams.push(exportedExam);
    await writeCompactJson(join(EXAM_OUTPUT_DIR, fileName), exportedExam);
  }

  if (!enhancedInitialVerification) {
    fail("initial-verification source exam is required to build the focused exams");
  }

  const initialVerificationExam = buildInitialVerificationExam(
    enhancedInitialVerification,
  );
  const exportedInitialVerificationExam = makeExportedExam(
    initialVerificationExam,
  );
  exportedExams.push(exportedInitialVerificationExam);
  await writeCompactJson(
    join(EXAM_OUTPUT_DIR, "initial-verification.json"),
    exportedInitialVerificationExam,
  );

  const fundamentalExam = buildFundamentalInspectionExam(enhancedInitialVerification);
  if (seenExamIds.has(fundamentalExam.id)) {
    fail(`duplicate exam id ${fundamentalExam.id}`);
  }
  const fundamentalFileName = `${fundamentalExam.id}.json`;
  seenExamIds.add(fundamentalExam.id);
  const exportedFundamentalExam = makeExportedExam(fundamentalExam);
  exportedExams.push(exportedFundamentalExam);
  await writeCompactJson(
    join(EXAM_OUTPUT_DIR, fundamentalFileName),
    exportedFundamentalExam,
  );

  await removeStaleExamExports(new Set([...examFileNames, fundamentalFileName]));

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
      join(CONTENT_OUTPUT_DIR, "cheat-sheet.json"),
      cheatSheetSections,
    ),
    writeCompactJson(join(CONTENT_OUTPUT_DIR, "exam-index.json"), {
      schemaVersion: 1,
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
