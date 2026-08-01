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
    if (exitCode !== 0) process.exit(exitCode);

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

    console.log(`Verified ${expectedFiles.length} generated iOS content files.`);
  } finally {
    await rm(temporaryRoot, { recursive: true, force: true });
  }
}

await main();
