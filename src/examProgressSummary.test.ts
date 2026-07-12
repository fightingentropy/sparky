import { describe, expect, it } from "vitest";
import {
  EXAM_PROGRESS_STORAGE_PREFIX,
  EXAM_UPDATED_STORAGE_PREFIX,
  getLatestExamResume
} from "./examProgressSummary";

function storageFrom(values: Record<string, string>): Pick<Storage, "getItem"> {
  return { getItem: (key) => values[key] ?? null };
}

describe("getLatestExamResume", () => {
  it("returns the newest visible in-progress exam", () => {
    const storage = storageFrom({
      [`${EXAM_PROGRESS_STORAGE_PREFIX}initial-verification`]: JSON.stringify({
        current: 1,
        variants: { "1": { answers: { "1": "A", "2": "B" }, submitted: false } }
      }),
      [`${EXAM_UPDATED_STORAGE_PREFIX}initial-verification`]: "200",
      [`${EXAM_PROGRESS_STORAGE_PREFIX}periodic-inspection`]: JSON.stringify({
        current: 0,
        variants: { "0": { answers: { "1": "C" }, submitted: false } }
      }),
      [`${EXAM_UPDATED_STORAGE_PREFIX}periodic-inspection`]: "100"
    });

    expect(getLatestExamResume(storage, [])).toMatchObject({
      examId: "initial-verification",
      testNumber: 2,
      answeredCount: 2
    });
  });

  it("ignores hidden, submitted, empty and malformed progress", () => {
    const storage = storageFrom({
      [`${EXAM_PROGRESS_STORAGE_PREFIX}initial-verification`]: JSON.stringify({
        current: 0,
        variants: { "0": { answers: { "1": "A" }, submitted: false } }
      }),
      [`${EXAM_UPDATED_STORAGE_PREFIX}initial-verification`]: "200",
      [`${EXAM_PROGRESS_STORAGE_PREFIX}periodic-inspection`]: JSON.stringify({
        current: 0,
        variants: { "0": { answers: { "1": "B" }, submitted: true } }
      }),
      [`${EXAM_PROGRESS_STORAGE_PREFIX}18th-edition`]: "not-json"
    });

    expect(getLatestExamResume(storage, ["initial-verification"])).toBeNull();
  });
});
