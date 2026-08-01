import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { afterEach, describe, expect, it } from "vitest";

import {
  CONTENT_CACHE_INPUT_PATHS,
  contentCacheFiles,
  contentCacheVersion,
} from "./content-cache-version";

const temporaryDirectories: string[] = [];

afterEach(async () => {
  await Promise.all(
    temporaryDirectories.splice(0).map((directory) =>
      rm(directory, { recursive: true, force: true }),
    ),
  );
});

async function makeFixture(): Promise<string> {
  const root = await mkdtemp(join(tmpdir(), "sparky-content-cache-"));
  temporaryDirectories.push(root);
  await mkdir(join(root, "content", "nested"), { recursive: true });
  await writeFile(join(root, "content", "exam.json"), "{\"answer\":\"A\"}\n");
  await writeFile(join(root, "content", "nested", "diagram.png"), "image-v1");
  return root;
}

describe("PWA content cache version", () => {
  it("includes same-path exam image bytes in the production fingerprint", () => {
    const root = resolve(import.meta.dirname, "..");
    const files = contentCacheFiles(root);

    expect(CONTENT_CACHE_INPUT_PATHS).toContain("public/exam-images");
    expect(
      files.some((file) => file.includes(join("public", "exam-images"))),
    ).toBe(true);
    expect(contentCacheVersion(root)).toMatch(/^[0-9a-f]{16}$/);
  });

  it("is deterministic regardless of input-list order", async () => {
    const root = await makeFixture();
    const forward = contentCacheVersion(root, ["content/exam.json", "content/nested"]);
    const reversed = contentCacheVersion(root, ["content/nested", "content/exam.json"]);

    expect(reversed).toBe(forward);
  });

  it("changes when bytes are replaced at the same filename", async () => {
    const root = await makeFixture();
    const imagePath = join(root, "content", "nested", "diagram.png");
    const before = contentCacheVersion(root, ["content"]);

    await writeFile(imagePath, "image-v2");

    expect(contentCacheVersion(root, ["content"])).not.toBe(before);
  });
});
