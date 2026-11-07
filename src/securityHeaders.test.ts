import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const indexHtml = readFileSync(new URL("../index.html", import.meta.url), "utf8");
const headers = readFileSync(new URL("../public/_headers", import.meta.url), "utf8");
const tutorialsPage = readFileSync(new URL("./TutorialsPage.tsx", import.meta.url), "utf8");

function cspDirectives(): Map<string, string[]> {
  const line = headers.split("\n").find((entry) => entry.trim().startsWith("Content-Security-Policy:"));
  if (!line) throw new Error("public/_headers has no Content-Security-Policy");
  const policy = line.slice(line.indexOf(":") + 1);
  return new Map(
    policy
      .split(";")
      .map((directive) => directive.trim().split(/\s+/))
      .filter(([name]) => name)
      .map(([name, ...sources]) => [name, sources]),
  );
}

describe("production security headers", () => {
  const csp = cspDirectives();

  it("allows every inline script in index.html by its exact hash", () => {
    const inlineScripts = [...indexHtml.matchAll(/<script>([\s\S]*?)<\/script>/g)].map((match) => match[1]);
    expect(inlineScripts.length).toBeGreaterThan(0);
    for (const script of inlineScripts) {
      const hash = `'sha256-${createHash("sha256").update(script).digest("base64")}'`;
      expect(csp.get("script-src"), "update the hash in public/_headers after editing the inline script").toContain(hash);
    }
    expect(csp.get("script-src")).not.toContain("'unsafe-inline'");
  });

  it("lets Workplace Tutorials load thumbnails and play embeds", () => {
    expect(tutorialsPage).toContain("https://i.ytimg.com/vi/");
    expect(tutorialsPage).toContain("https://www.youtube-nocookie.com/embed/");
    expect(csp.get("img-src")).toContain("https://i.ytimg.com");
    expect(csp.get("frame-src")).toEqual(["https://www.youtube-nocookie.com"]);
  });

  it("keeps the app itself unframeable", () => {
    expect(csp.get("frame-ancestors")).toEqual(["'none'"]);
    expect(headers).toContain("X-Frame-Options: DENY");
  });
});
