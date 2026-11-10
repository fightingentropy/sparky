import { describe, expect, it } from "vitest";
import {
  clearLocalExamProgress,
  clearLocalExamProgressOnAuthFailure,
  mergeNewerServerProgress,
  coalescePendingSave,
  planLocalPush,
  stampAfterServerImport,
  type PendingSave
} from "./examProgressSync";

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

describe("planLocalPush", () => {
  const local = {
    current: 2,
    variants: { "0": { answers: { 1: "A" } as Record<string, string>, submitted: false } }
  };

  it("sends local answers when the server has no row for the exam", () => {
    expect(planLocalPush(local, 100, null)).toEqual([
      { current: 2, variant: { index: 0, answers: { 1: "A" }, submitted: false } }
    ]);
  });

  it("sends local answers that are newer than the server copy", () => {
    const server = { variants: {}, updatedAt: 50 };
    expect(planLocalPush(local, 100, server)).toHaveLength(1);
  });

  it("sends nothing when the server copy is at least as new", () => {
    expect(planLocalPush(local, 100, { variants: {}, updatedAt: 100 })).toEqual([]);
  });

  it("skips slots the server already has", () => {
    const server = { variants: { "0": { answers: { 1: "A" } as Record<string, string>, submitted: false } }, updatedAt: 50 };
    expect(planLocalPush(local, 100, server)).toEqual([]);
  });

  it("sends a locally reset test so the server does not keep the old answers", () => {
    const reset = { current: 0, variants: { "0": { answers: {}, submitted: false } } };
    const server = { variants: { "0": { answers: { 1: "A" } as Record<string, string>, submitted: true } }, updatedAt: 50 };
    expect(planLocalPush(reset, 100, server)).toEqual([
      { current: 0, variant: { index: 0, answers: {}, submitted: false } }
    ]);
  });

  it("does not send empty slots to an exam the server lacks", () => {
    expect(planLocalPush({ current: 0, variants: { "0": { answers: {}, submitted: false } } }, 100, null)).toEqual([]);
  });

  it("sends nothing without local progress", () => {
    expect(planLocalPush(null, 100, null)).toEqual([]);
  });
});

describe("clearLocalExamProgressOnAuthFailure", () => {
  const filled = () => {
    const storage = new FakeStorage();
    storage.setItem("exam-progress-e", "x");
    storage.setItem("exam-updated-e", "1");
    storage.setItem("pref-color-theme", "x");
    return storage;
  };

  it("clears stored answers when the session is rejected", () => {
    for (const status of [401, 403]) {
      const storage = filled();
      expect(clearLocalExamProgressOnAuthFailure(status, storage)).toBe(true);
      expect(storage.keys()).toEqual(["pref-color-theme"]);
    }
  });

  it("keeps stored answers on other failures", () => {
    for (const status of [500, 404, undefined]) {
      const storage = filled();
      expect(clearLocalExamProgressOnAuthFailure(status, storage)).toBe(false);
      expect(storage.keys()).toHaveLength(3);
    }
  });
});

describe("mergeNewerServerProgress", () => {
  const slot = (a: Record<string, string>, submitted = false) => ({ answers: a, submitted });

  it("keeps and resends a local test the server lacks after a partly sent push", () => {
    const local = { current: 1, variants: { "0": slot({ 1: "A" }), "1": slot({ 1: "B" }) } };
    const server = { current: 1, variants: { "0": slot({ 1: "A" }) } };
    const { merged, pushes } = mergeNewerServerProgress(local, server);
    expect(merged.variants["1"]).toEqual(slot({ 1: "B" }));
    expect(pushes).toEqual([{ current: 1, variant: { index: 1, answers: { 1: "B" }, submitted: false } }]);
  });

  it("does not refill a slot the server holds empty after a reset elsewhere", () => {
    const local = { current: 0, variants: { "0": slot({ 1: "A" }), "1": slot({ 1: "B" }) } };
    const server = { current: 0, variants: { "0": slot({}, false) } };
    const { merged, pushes } = mergeNewerServerProgress(local, server);
    expect(merged.variants["0"]).toEqual(slot({}));
    expect(merged.variants["1"]).toEqual(slot({ 1: "B" }));
    expect(pushes).toEqual([{ current: 0, variant: { index: 1, answers: { 1: "B" }, submitted: false } }]);
  });

  it("lets the server copy win where both have content", () => {
    const local = { current: 0, variants: { "0": slot({ 1: "A" }) } };
    const server = { current: 2, variants: { "0": slot({ 1: "C" }) } };
    const { merged, pushes } = mergeNewerServerProgress(local, server);
    expect(merged).toEqual(server);
    expect(pushes).toEqual([]);
  });

  it("returns the server copy when there is nothing local", () => {
    const server = { current: 0, variants: { "0": slot({ 1: "A" }) } };
    expect(mergeNewerServerProgress(null, server)).toEqual({ merged: server, pushes: [] });
  });
});

describe("stampAfterServerImport", () => {
  const slot = (a: Record<string, string>) => ({ answers: a, submitted: false });

  it("keeps the old stamp so a failed push of a local-only test is planned again", () => {
    const server: { current: number; variants: Record<string, ReturnType<typeof slot>> } = {
      current: 0,
      variants: { "0": slot({ 1: "A" }) }
    };
    let local: { current: number; variants: Record<string, ReturnType<typeof slot>> } = {
      current: 0,
      variants: { "0": slot({ 1: "A" }), "1": slot({ 1: "B" }) }
    };
    let localUpdatedAt = 10;
    for (let attempt = 0; attempt < 2; attempt += 1) {
      expect(server.variants["1"]).toBeUndefined();
      const { merged, pushes } = mergeNewerServerProgress(local, server);
      expect(pushes).toHaveLength(1);
      local = merged;
      localUpdatedAt = stampAfterServerImport(pushes.length, localUpdatedAt, 20);
      expect(localUpdatedAt).toBe(10); // still behind the server (20): imported again next sync
    }
    expect(stampAfterServerImport(0, 10, 20)).toBe(20);
  });
});
