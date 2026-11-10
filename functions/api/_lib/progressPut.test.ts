import { describe, expect, it } from "vitest";
import { onRequestPut } from "../exams/progress/[examId]";
import { VALID_EXAM_IDS } from "./validExamIds";
import type { Env } from "./auth";

const EXAM = [...VALID_EXAM_IDS][0];

type Row = { answers: string; submitted: number; attempt_count: number };

// In-memory stand-in for the D1 tables this handler touches. `beforeWrite`
// runs between a request's SELECT and its write, to simulate an overlapping PUT.
function fakeEnv() {
  let row: Row | null = null;
  const state = { beforeWrite: null as null | (() => Promise<void>) };
  const DB = {
    prepare(sql: string) {
      return {
        bind(...a: unknown[]) {
          return {
            first: async () => (sql.includes("FROM users") ? { id: "u1" } : row && { ...row }),
            run: async () => {
              if (state.beforeWrite) {
                const hook = state.beforeWrite;
                state.beforeWrite = null;
                await hook();
              }
              if (sql.startsWith("UPDATE")) {
                if (!row || row.answers !== a[5]) return { meta: { changes: 0 } };
                row = { answers: a[0] as string, submitted: a[1] as number, attempt_count: a[2] as number };
                return { meta: { changes: 1 } };
              }
              if (row) return { meta: { changes: 0 } };
              row = { answers: a[2] as string, submitted: a[3] as number, attempt_count: a[4] as number };
              return { meta: { changes: 1 } };
            },
          };
        },
      };
    },
  };
  return { env: { DB, JWT_SECRET: "test-secret" } as unknown as Env, state, get row() { return row; } };
}

async function token(secret: string) {
  const { createJWT } = await import("./crypto");
  return createJWT({ sub: "u1", email: "a@b.co", exp: Math.floor(Date.now() / 1000) + 600 }, secret);
}

async function put(env: Env, variant: unknown) {
  const request = new Request("https://example.test/x", {
    method: "PUT",
    headers: { Authorization: `Bearer ${await token("test-secret")}` },
    body: JSON.stringify({ current: 0, variant }),
  });
  return onRequestPut({ request, env, params: { examId: EXAM } } as unknown as Parameters<typeof onRequestPut>[0]);
}

describe("progress PUT concurrency", () => {
  it("keeps both variants when two writes overlap", async () => {
    const f = fakeEnv();
    await put(f.env, { index: 0, answers: { "1": "A" }, submitted: false });
    // While variant 1's request is between read and write, variant 2 lands.
    f.state.beforeWrite = async () => {
      await put(f.env, { index: 2, answers: { "1": "C" }, submitted: true });
    };
    const res = await put(f.env, { index: 1, answers: { "1": "B" }, submitted: false });
    expect(res.status).toBe(200);
    const stored = JSON.parse(f.row!.answers);
    expect(Object.keys(stored.variants).sort()).toEqual(["0", "1", "2"]);
    expect(stored.variants["2"].submitted).toBe(true);
  });
});
