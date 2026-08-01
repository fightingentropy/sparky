import { createHash } from "node:crypto";
import { mkdtemp, readdir, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join, relative, resolve } from "node:path";

const ROOT_DIR = resolve(import.meta.dirname, "..");
const COMMITTED_CONTENT_DIR = join(
  ROOT_DIR,
  "ios",
  "Sparky",
  "Resources",
  "Content",
);

type ContentManifestFile = {
  path: string;
  bytes: number;
  sha256: string;
};

type ContentManifest = {
  schemaVersion: number;
  contentSchemaVersion: number;
  contentHash: string;
  files: ContentManifestFile[];
};

function sha256(value: string | Uint8Array): string {
  return createHash("sha256").update(value).digest("hex");
}

function requireCondition(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error(message);
}

function isSafeRelativePath(path: string): boolean {
  const components = path.split("/");
  return (
    path !== "" &&
    !path.startsWith("/") &&
    !path.includes("\\") &&
    components.every((component) => component !== "" && component !== "." && component !== "..")
  );
}

async function listFiles(root: string, directory = root): Promise<string[]> {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const path = join(directory, entry.name);
      if (entry.isDirectory()) return listFiles(root, path);
      if (!entry.isFile()) throw new Error(`Unsupported generated entry: ${path}`);
      return [relative(root, path)];
    }),
  );
  return files.flat().sort((left, right) => left.localeCompare(right, "en-GB"));
}

async function verifyManifest(directory: string): Promise<ContentManifest> {
  const manifestPath = join(directory, "content-manifest.json");
  const manifest = JSON.parse(await readFile(manifestPath, "utf8")) as ContentManifest;
  requireCondition(
    Number.isInteger(manifest.schemaVersion) && manifest.schemaVersion > 0,
    `${manifestPath} has an invalid manifest schema version`,
  );
  requireCondition(
    Number.isInteger(manifest.contentSchemaVersion) && manifest.contentSchemaVersion > 0,
    `${manifestPath} has an invalid content schema version`,
  );
  requireCondition(
    /^[0-9a-f]{64}$/.test(manifest.contentHash),
    `${manifestPath} has an invalid aggregate content hash`,
  );
  requireCondition(Array.isArray(manifest.files), `${manifestPath} has no file records`);

  const paths = manifest.files.map((file) => file.path);
  const sortedPaths = [...paths].sort((left, right) => left.localeCompare(right, "en-GB"));
  requireCondition(
    JSON.stringify(paths) === JSON.stringify(sortedPaths),
    `${manifestPath} file records are not sorted`,
  );
  requireCondition(
    new Set(paths).size === paths.length,
    `${manifestPath} contains duplicate file paths`,
  );

  const actualFiles = (await listFiles(directory)).filter(
    (path) => path !== "content-manifest.json",
  );
  requireCondition(
    JSON.stringify(actualFiles) === JSON.stringify(paths),
    `${manifestPath} file set does not exactly match the generated directory`,
  );

  for (const file of manifest.files) {
    requireCondition(
      typeof file.path === "string" && isSafeRelativePath(file.path),
      `${manifestPath} contains unsafe path ${JSON.stringify(file.path)}`,
    );
    requireCondition(
      Number.isInteger(file.bytes) && file.bytes >= 0 && /^[0-9a-f]{64}$/.test(file.sha256),
      `${manifestPath} contains an invalid record for ${file.path}`,
    );
    const contents = await readFile(join(directory, file.path));
    requireCondition(
      contents.byteLength === file.bytes,
      `${file.path} byte count does not match the manifest`,
    );
    requireCondition(
      sha256(contents) === file.sha256,
      `${file.path} checksum does not match the manifest`,
    );
  }

  const aggregateHash = sha256(
    manifest.files.map((file) => `${file.path}\u0000${file.sha256}\n`).join(""),
  );
  requireCondition(
    aggregateHash === manifest.contentHash,
    `${manifestPath} aggregate content hash does not match its file records`,
  );

  return manifest;
}

async function verifyExamIndexParity(
  directory: string,
  manifest: ContentManifest,
): Promise<void> {
  const index = JSON.parse(await readFile(join(directory, "exam-index.json"), "utf8")) as {
    schemaVersion: number;
    examCount: number;
    variantCount: number;
    questionCount: number;
    exams: Array<{
      id: string;
      title: string;
      variantCount: number;
      testCount: number;
      questionCount: number;
      tests: Array<{
        id: string;
        index: number;
        title: string;
        sectionCount: number;
        questionCount: number;
        sections: Array<{ id: string; title: string; questionCount: number }>;
      }>;
    }>;
  };
  requireCondition(
    index.schemaVersion === manifest.contentSchemaVersion,
    "exam-index.json schema version does not match content-manifest.json",
  );
  requireCondition(Array.isArray(index.exams), "exam-index.json has no exams array");
  requireCondition(index.examCount === index.exams.length, "exam-index.json examCount is stale");
  const examIds = index.exams.map((exam) => exam.id);
  requireCondition(new Set(examIds).size === examIds.length, "exam-index.json has duplicate exam ids");
  requireCondition(
    index.variantCount === index.exams.reduce((count, exam) => count + exam.variantCount, 0),
    "exam-index.json variantCount is stale",
  );
  requireCondition(
    index.questionCount === index.exams.reduce((count, exam) => count + exam.questionCount, 0),
    "exam-index.json questionCount is stale",
  );

  const expectedManifestPaths = new Set([
    "calculators.json",
    "cheat-sheet.json",
    "course-guides.json",
    "exam-index.json",
    "tutorials.json",
    ...examIds.map((examId) => `exams/${examId}.json`),
  ]);
  requireCondition(
    manifest.files.length === expectedManifestPaths.size &&
      manifest.files.every((file) => expectedManifestPaths.has(file.path)),
    "content-manifest.json does not exactly cover the indexed content files",
  );

  const deliveredQuestionIDs = new Set<string>();
  for (const indexedExam of index.exams) {
    const exam = JSON.parse(
      await readFile(join(directory, "exams", `${indexedExam.id}.json`), "utf8"),
    ) as {
      id: string;
      title: string;
      tests: Array<{
        id: string;
        index: number;
        title: string;
        questionCount: number;
        sections: Array<{
          id: string;
          title: string;
          questions: Array<{ id: string; number: number }>;
        }>;
      }>;
    };
    requireCondition(exam.id === indexedExam.id, `${indexedExam.id} export has a mismatched id`);
    requireCondition(exam.title === indexedExam.title, `${indexedExam.id} index title is stale`);
    requireCondition(Array.isArray(exam.tests), `${indexedExam.id} has no delivered tests`);
    requireCondition(
      exam.tests.length === indexedExam.testCount &&
        indexedExam.testCount === indexedExam.variantCount &&
        indexedExam.tests.length === exam.tests.length,
      `${indexedExam.id} test counts are inconsistent`,
    );
    requireCondition(
      new Set(exam.tests.map((test) => test.id)).size === exam.tests.length,
      `${indexedExam.id} has duplicate delivered test ids`,
    );

    let examQuestionCount = 0;
    for (const [testPosition, test] of exam.tests.entries()) {
      const indexedTest = indexedExam.tests[testPosition];
      requireCondition(
        test.id === indexedTest.id &&
          test.index === indexedTest.index &&
          test.title === indexedTest.title,
        `${indexedExam.id}/${test.id} index metadata is stale`,
      );
      requireCondition(
        Array.isArray(test.sections) && test.sections.length === indexedTest.sectionCount,
        `${indexedExam.id}/${test.id} section count is inconsistent`,
      );
      requireCondition(
        new Set(test.sections.map((section) => section.id)).size === test.sections.length,
        `${indexedExam.id}/${test.id} has duplicate section ids`,
      );

      const questions = test.sections.flatMap((section) => section.questions);
      requireCondition(
        test.questionCount === questions.length && indexedTest.questionCount === questions.length,
        `${indexedExam.id}/${test.id} question count is inconsistent`,
      );
      requireCondition(
        new Set(questions.map((question) => question.id)).size === questions.length,
        `${indexedExam.id}/${test.id} has duplicate delivered question ids`,
      );
      for (const question of questions) {
        requireCondition(
          !deliveredQuestionIDs.has(question.id),
          `generated catalog has duplicate delivered question id ${question.id}`,
        );
        deliveredQuestionIDs.add(question.id);
      }
      requireCondition(
        new Set(questions.map((question) => question.number)).size === questions.length,
        `${indexedExam.id}/${test.id} has duplicate delivered question numbers`,
      );

      for (const [sectionPosition, section] of test.sections.entries()) {
        const indexedSection = indexedTest.sections[sectionPosition];
        requireCondition(
          section.id === indexedSection.id &&
            section.title === indexedSection.title &&
            section.questions.length === indexedSection.questionCount,
          `${indexedExam.id}/${test.id}/${section.id} index metadata is stale`,
        );
      }
      examQuestionCount += questions.length;
    }
    requireCondition(
      examQuestionCount === indexedExam.questionCount,
      `${indexedExam.id} aggregate question count is inconsistent`,
    );
  }
  requireCondition(
    deliveredQuestionIDs.size === index.questionCount,
    "generated catalog question ids do not match the aggregate question count",
  );
}

async function main(): Promise<void> {
  const temporaryRoot = await mkdtemp(join(tmpdir(), "sparky-ios-content-"));
  const generatedDirectory = join(temporaryRoot, "Content");

  try {
    const exporter = Bun.spawn(
      ["bun", "run", "scripts/export-ios-content.ts"],
      {
        cwd: ROOT_DIR,
        env: {
          ...process.env,
          SPARKY_CONTENT_OUTPUT_DIR: generatedDirectory,
        },
        stdout: "inherit",
        stderr: "inherit",
      },
    );
    const exitCode = await exporter.exited;
    if (exitCode !== 0) {
      throw new Error(`iOS content exporter exited with status ${exitCode}`);
    }

    const [generatedManifest, committedManifest] = await Promise.all([
      verifyManifest(generatedDirectory),
      verifyManifest(COMMITTED_CONTENT_DIR),
    ]);
    await Promise.all([
      verifyExamIndexParity(generatedDirectory, generatedManifest),
      verifyExamIndexParity(COMMITTED_CONTENT_DIR, committedManifest),
    ]);

    const [expectedFiles, actualFiles] = await Promise.all([
      listFiles(generatedDirectory),
      listFiles(COMMITTED_CONTENT_DIR),
    ]);
    if (JSON.stringify(actualFiles) !== JSON.stringify(expectedFiles)) {
      throw new Error(
        `Generated iOS content file set is stale.\nExpected: ${expectedFiles.join(", ")}\nActual: ${actualFiles.join(", ")}`,
      );
    }

    for (const file of expectedFiles) {
      const [expected, actual] = await Promise.all([
        readFile(join(generatedDirectory, file)),
        readFile(join(COMMITTED_CONTENT_DIR, file)),
      ]);
      if (!expected.equals(actual)) {
        throw new Error(
          `Generated iOS content is stale at ${file}. Run \`bun run ios:content\` and commit the result.`,
        );
      }
    }

    console.log(
      `Verified ${expectedFiles.length} generated iOS content files, manifest checksums and index parity.`,
    );
  } finally {
    await rm(temporaryRoot, { recursive: true, force: true });
  }
}

await main();
