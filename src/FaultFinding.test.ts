import { describe, expect, it } from "vitest";
import { isFirstTrySolve, recordSubmission } from "./FaultFinding";

const empty = {
  attempts: 0,
  solves: 0,
  firstTrySolves: 0,
  hintsUsed: 0,
  totalSeconds: 0,
  bestSeconds: null,
  lastSolvedAt: null
};

describe("fault finding first-try credit", () => {
  it("credits the first correct first-attempt solve", () => {
    expect(isFirstTrySolve(undefined, 1)).toBe(true);
    const next = recordSubmission(empty, { correct: true, attempts: 1, newHints: 0, elapsedSeconds: 10, now: 1 });
    expect(next.firstTrySolves).toBe(1);
    expect(next.solves).toBe(1);
  });

  it("does not credit a replay of an already solved scenario after a reload", () => {
    const solved = recordSubmission(empty, { correct: true, attempts: 1, newHints: 0, elapsedSeconds: 10, now: 1 });
    expect(isFirstTrySolve(solved, 1)).toBe(false);
    const replay = recordSubmission(solved, { correct: true, attempts: 1, newHints: 0, elapsedSeconds: 5, now: 2 });
    expect(replay.firstTrySolves).toBe(1);
  });

  it("does not credit a solve on a later attempt", () => {
    expect(isFirstTrySolve(empty, 2)).toBe(false);
  });
});
