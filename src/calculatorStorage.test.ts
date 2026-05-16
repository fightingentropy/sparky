import { describe, expect, it } from "vitest";
import {
  CONTAINMENT_ROD_STORAGE_KEYS,
  clearLegacyContainmentRodStorage
} from "./calculatorStorage";

describe("containment rod storage", () => {
  it("uses versioned keys for the default example state", () => {
    expect(Object.values(CONTAINMENT_ROD_STORAGE_KEYS)).toEqual([
      "cr-v2-height",
      "cr-v2-top",
      "cr-v2-buffer",
      "cr-v2-depth"
    ]);
  });

  it("clears stale containment rod storage keys", () => {
    const removed: string[] = [];

    clearLegacyContainmentRodStorage({
      removeItem: (key) => {
        removed.push(key);
      }
    });

    expect(removed).toEqual(["cr-height", "cr-top", "cr-buffer", "cr-depth"]);
  });

  it("continues clearing when storage removal throws", () => {
    const removed: string[] = [];

    clearLegacyContainmentRodStorage({
      removeItem: (key) => {
        removed.push(key);
        if (key === "cr-height") {
          throw new Error("storage blocked");
        }
      }
    });

    expect(removed).toEqual(["cr-height", "cr-top", "cr-buffer", "cr-depth"]);
  });
});
