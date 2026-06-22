import { describe, expect, it } from "vitest";
import { clampIndex, parseStoredProgress, serializeProgress, type StoredProgress } from "./auth";

describe("per-variant exam progress storage", () => {
  it("round-trips a multi-variant progress object", () => {
    const progress: StoredProgress = {
      variants: {
        "0": { answers: { "1": "A", "2": "C" }, submitted: true },
        "2": { answers: { "1": "B" }, submitted: false },
      },
      current: 2,
    };

    const restored = parseStoredProgress(serializeProgress(progress), 0, 0);

    expect(restored).toEqual(progress);
  });

  it("tags serialized payloads with the v2 marker", () => {
    const json = serializeProgress({ variants: {}, current: 0 });
    expect(JSON.parse(json).__v).toBe(2);
  });

  it("converts a legacy flat answers map into a single variant slot at the attempt index", () => {
    // Pre-v2 rows stored a bare {questionNumber: choice} map; submitted/attempt
    // lived in their own columns.
    const legacy = JSON.stringify({ "1": "A", "2": "D" });

    const restored = parseStoredProgress(legacy, 1, 3);

    expect(restored.current).toBe(3);
    expect(restored.variants).toEqual({
      "3": { answers: { "1": "A", "2": "D" }, submitted: true },
    });
  });

  it("treats legacy submitted=0 as not submitted", () => {
    const restored = parseStoredProgress(JSON.stringify({ "1": "A" }), 0, 0);
    expect(restored.variants["0"].submitted).toBe(false);
  });

  it("returns empty variants (current from attempt) for corrupted JSON", () => {
    const restored = parseStoredProgress("not json{", 0, 5);
    expect(restored).toEqual({ variants: {}, current: 5 });
  });

  it("drops variant slots with non-numeric keys or invalid answers", () => {
    const poisoned = JSON.stringify({
      __v: 2,
      current: 0,
      variants: {
        "0": { answers: { "1": "A" }, submitted: false }, // valid
        abc: { answers: { "1": "A" }, submitted: false }, // bad key
        "1": { answers: { "1": "Z" }, submitted: false }, // bad choice
        "2": { answers: "nope", submitted: false }, // answers not an object
      },
    });

    const restored = parseStoredProgress(poisoned, 0, 0);

    expect(Object.keys(restored.variants)).toEqual(["0"]);
  });

  it("clamps the current index to a sane non-negative range", () => {
    expect(clampIndex(4)).toBe(4);
    expect(clampIndex(-1)).toBe(0);
    expect(clampIndex(99999)).toBe(1000);
    expect(clampIndex("5")).toBe(0);
    expect(clampIndex(undefined)).toBe(0);
  });
});
