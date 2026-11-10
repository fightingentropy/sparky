import { describe, expect, it } from "vitest";
import { clearLocalExamProgress } from "./examProgressSync";

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
