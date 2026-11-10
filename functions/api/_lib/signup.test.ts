import { describe, expect, it, vi } from "vitest";
import { onRequestPost } from "../auth/signup";
import type { Env } from "./auth";

function fakeEnv(insertError: Error) {
  const DB = {
    prepare(sql: string) {
      return {
        bind() {
          return {
            first: async () => (sql.includes("rate_limits") ? { count: 1 } : null),
            run: async () => {
              if (sql.startsWith("INSERT INTO users")) throw insertError;
              return {};
            },
          };
        },
      };
    },
  };
  return { DB, JWT_SECRET: "test" } as unknown as Env;
}

async function signup(env: Env): Promise<number> {
  const request = new Request("https://example.test/api/auth/signup", {
    method: "POST",
    headers: { "CF-Connecting-IP": "1.1.1.1" },
    body: JSON.stringify({ email: "new@example.com", password: "correct-horse" }),
  });
  const res = await onRequestPost({ request, env, waitUntil: () => {} } as unknown as Parameters<typeof onRequestPost>[0]);
  return res.status;
}

describe("signup insert failures", () => {
  it("maps a UNIQUE violation to 409", async () => {
    const env = fakeEnv(new Error("D1_ERROR: UNIQUE constraint failed: users.email: SQLITE_CONSTRAINT"));
    expect(await signup(env)).toBe(409);
  });

  it("reports other failures as 503, not as a duplicate email", async () => {
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});
    const env = fakeEnv(new Error("D1_ERROR: Network connection lost"));
    expect(await signup(env)).toBe(503);
    spy.mockRestore();
  });
});
