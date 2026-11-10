import { describe, expect, it } from "vitest";
import { clearLocalExamProgress, coalescePendingSave, type PendingSave } from "./examProgressSync";

class FakeStorage {
  private data = new Map<string, string>();
  get length() {
    return this.data.size;
  }
  key(index: number) {
    return [...this.data.keys()][index] ?? null;
  }
  getItem(key: string) {
    return this.data.get(key) ?? null;
  }
  setItem(key: string, value: string) {
    this.data.set(key, value);
  }
  removeItem(key: string) {
    this.data.delete(key);
  }
  keys() {
    return [...this.data.keys()].sort();
  }
}

describe("clearLocalExamProgress", () => {
  it("removes stored exam answers and keeps unrelated keys", () => {
    const storage = new FakeStorage();
    for (const key of [
      "exam-progress-2026-06-per-test-18th-edition",
      "exam-updated-2026-06-per-test-18th-edition",
      "exam-answers-old",
      "exam-submitted-old",
      "exam-variant-old",
      "pref-color-theme",
      "sparky-token"
    ]) {
      storage.setItem(key, "x");
    }

    clearLocalExamProgress(storage);

    expect(storage.keys()).toEqual(["pref-color-theme", "sparky-token"]);
  });
});

const answers = { 1: "A" } as Record<string, string>;
const save = (examId: string, current: number, index?: number, submitted = false): PendingSave => ({
  examId,
  current,
  variant: index === undefined ? undefined : { index, answers, submitted }
});

describe("coalescePendingSave", () => {
  it("queues the first save", () => {
    const next = save("e", 0, 0);
    expect(coalescePendingSave(null, next)).toEqual({ flush: null, pending: next });
  });

  it("keeps unsent answers when only the current test changes", () => {
    const pending = save("e", 0, 0, true);
    const result = coalescePendingSave(pending, save("e", 1));
    expect(result.flush).toBeNull();
    expect(result.pending).toEqual({ examId: "e", current: 1, variant: pending.variant });
  });

  it("flushes a pending save for a different test before queueing the new one", () => {
    const pending = save("e", 0, 0);
    const next = save("e", 1, 1);
    expect(coalescePendingSave(pending, next)).toEqual({ flush: pending, pending: next });
  });

  it("flushes a pending save for a different exam", () => {
    const pending = save("a", 0, 0);
    const next = save("b", 0);
    expect(coalescePendingSave(pending, next)).toEqual({ flush: pending, pending: next });
  });

  it("lets a newer save for the same test replace the older one", () => {
    const next = save("e", 0, 0, true);
    expect(coalescePendingSave(save("e", 0, 0), next)).toEqual({ flush: null, pending: next });
  });
});
