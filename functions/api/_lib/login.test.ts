import { describe, expect, it } from "vitest";
import { onRequestPost } from "../auth/login";
import type { Env } from "./auth";

// Minimal in-memory D1 stand-in: counts rate-limit buckets, finds no users.
function fakeEnv() {
  const counts = new Map<string, number>();
  const DB = {
    prepare(sql: string) {
      return {
        bind(...args: unknown[]) {
          return {
            first: async () => {
              if (sql.includes("rate_limits")) {
                const bucket = String(args[0]);
                const n = (counts.get(bucket) ?? 0) + 1;
                counts.set(bucket, n);
                return { count: n };
              }
              return null;
            },
            run: async () => ({}),
          };
        },
      };
    },
  };
  return { DB, JWT_SECRET: "test" } as unknown as Env;
}

async function attempt(env: Env, email: string, ip: string): Promise<number> {
  const request = new Request("https://example.test/api/auth/login", {
    method: "POST",
    headers: { "CF-Connecting-IP": ip },
    body: JSON.stringify({ email, password: "wrong-password" }),
  });
  const res = await onRequestPost({ request, env, waitUntil: () => {} } as unknown as Parameters<typeof onRequestPost>[0]);
  return res.status;
}

describe("login rate limiting", () => {
  it("does not let another IP exhaust the victim's per-email allowance", async () => {
    const env = fakeEnv();
    for (let i = 0; i < 10; i++) await attempt(env, "victim@example.com", "1.1.1.1");
    expect(await attempt(env, "victim@example.com", "1.1.1.1")).toBe(429);
    expect(await attempt(env, "victim@example.com", "2.2.2.2")).toBe(401);
  });

  it("still caps a single IP", async () => {
    const env = fakeEnv();
    let last = 0;
    for (let i = 0; i < 31; i++) last = await attempt(env, `u${i}@example.com`, "3.3.3.3");
    expect(last).toBe(429);
  });
});
