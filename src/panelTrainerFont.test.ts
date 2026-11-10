import { existsSync, readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const source = readFileSync(new URL("./PanelTrainer.tsx", import.meta.url), "utf8");
const headers = readFileSync(new URL("../public/_headers", import.meta.url), "utf8");

describe("3D trainer label font", () => {
  it("renders every label through a wrapper that sets a same-origin font", () => {
    // A bare drei <Text> makes troika fetch fonts from a CDN, which the CSP blocks.
    expect(source.match(/<Text[\s>]/g)).toHaveLength(1);
    expect(source).toMatch(/<Text font=\{PANEL_FONT_URL\}/);
    const url = source.match(/PANEL_FONT_URL = "([^"]+)"/)?.[1];
    expect(url).toMatch(/^\/[^/]/);
    expect(existsSync(new URL(`../public${url}`, import.meta.url))).toBe(true);
  });

  it("keeps the CSP same-origin for fonts and connections", () => {
    expect(headers).toContain("font-src 'self'");
    expect(headers).toContain("connect-src 'self'");
  });
});
