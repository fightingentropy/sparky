import { createHash } from "node:crypto";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative, resolve, sep } from "node:path";

export const CONTENT_CACHE_INPUT_PATHS = [
  "src/exam-data",
  "src/examCorrections",
  "src/examRationales",
  "public/exam-images",
  "src/cheatSheetSections.ts",
  "src/contentSchema.ts",
  "src/courseGuides.ts",
  "src/examContentSource.ts",
  "src/examExplanationEnhancements.ts",
  "src/examOptionExplanations.ts",
  "src/examSolutionTables.ts",
  "src/fundamentalInspectionExam.ts",
  "src/initialVerificationExam.ts",
  "src/tutorials.ts",
] as const;

function portableRelativePath(rootDir: string, file: string): string {
  return relative(rootDir, file).split(sep).join("/");
}

function filesBelow(path: string): string[] {
  const metadata = statSync(path);
  if (metadata.isFile()) return [path];
  if (!metadata.isDirectory()) {
    throw new Error(`Unsupported PWA content-cache input: ${path}`);
  }

  return readdirSync(path, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = join(path, entry.name);
    if (entry.isDirectory()) return filesBelow(entryPath);
    if (entry.isFile()) return [entryPath];
    throw new Error(`Unsupported PWA content-cache entry: ${entryPath}`);
  });
}

export function contentCacheFiles(
  rootDir: string,
  inputPaths: readonly string[] = CONTENT_CACHE_INPUT_PATHS,
): string[] {
  const resolvedRoot = resolve(rootDir);
  const files = inputPaths
    .flatMap((path) => filesBelow(resolve(resolvedRoot, path)))
    .sort((left, right) =>
      portableRelativePath(resolvedRoot, left).localeCompare(
        portableRelativePath(resolvedRoot, right),
        "en-GB",
      ),
    );

  if (files.length === 0) {
    throw new Error("PWA content-cache fingerprint has no input files");
  }
  return files;
}

export function contentCacheDigest(
  rootDir: string,
  inputPaths: readonly string[] = CONTENT_CACHE_INPUT_PATHS,
): string {
  const resolvedRoot = resolve(rootDir);
  const hash = createHash("sha256");
  for (const file of contentCacheFiles(resolvedRoot, inputPaths)) {
    hash.update(portableRelativePath(resolvedRoot, file));
    hash.update("\0");
    hash.update(readFileSync(file));
    hash.update("\n");
  }
  return hash.digest("hex");
}

export function contentCacheVersion(
  rootDir: string,
  inputPaths: readonly string[] = CONTENT_CACHE_INPUT_PATHS,
): string {
  return contentCacheDigest(rootDir, inputPaths).slice(0, 16);
}
