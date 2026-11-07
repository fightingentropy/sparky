import { describe, expect, it } from "vitest";
import { TUTORIALS } from "./tutorials";

describe("tutorials", () => {
  it("gives every video written step-by-step instructions", () => {
    for (const tutorial of TUTORIALS) {
      expect(tutorial.instructions?.steps.length ?? 0, tutorial.id).toBeGreaterThanOrEqual(4);
    }
  });

  it("keeps steps as plain sentences without manual numbering", () => {
    for (const tutorial of TUTORIALS) {
      for (const step of tutorial.instructions?.steps ?? []) {
        expect(step, tutorial.id).not.toMatch(/^\s*\d+[.)]/);
        expect(step.trim(), tutorial.id).toBe(step);
      }
    }
  });

  it("uses unique ids and video ids", () => {
    expect(new Set(TUTORIALS.map((tutorial) => tutorial.id)).size).toBe(TUTORIALS.length);
    expect(new Set(TUTORIALS.map((tutorial) => tutorial.videoId)).size).toBe(TUTORIALS.length);
  });
});
