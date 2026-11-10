import { describe, expect, it } from "vitest";
import { onRequestPost } from "../auth/delete-account";
import { hashPassword } from "./crypto";
import type { Env } from "./auth";

describe("account deletion rate-limit cleanup", () => {
  it("clears per-IP login buckets for the email but not other emails", async () => {
    const email = "a_b_c_d.very.long.address.for.testing@subdomain.example.com";
    const password = "correct-horse-battery";
    const hash = await hashPassword(password);
    const buckets = new Set([
      `login:email:1.1.1.1:${email}`,
      `login:email:2001:db8::1:${email}`,
      `delete:email:${email}`,
      `signup:email:${email}`,
      `login:email:1.1.1.1:x:${email}`,
      "login:email:1.1.1.1:other@example.com",
    ]);
    // Mimics D1: LIKE/GLOB patterns over 50 bytes are rejected.
    const rejectLongPatterns = (sql: string, args: unknown[]) => {
      if (/\b(LIKE|GLOB)\b/i.test(sql) && args.some((a) => typeof a === "string" && a.length > 50 && a.includes("%"))) {
        throw new Error("LIKE or GLOB pattern too complex");
      }
    };
    const DB = {
      prepare(sql: string) {
        return {
          bind(...args: unknown[]) {
            return {
              sql,
              args,
              first: async () => (sql.includes("FROM users") ? { id: "u1", password_hash: hash } : { count: 1 }),
              all: async () => {
                rejectLongPatterns(sql, args);
                const suffix = String(args[0]);
                return { results: [...buckets].filter((b) => b.endsWith(suffix) && b.startsWith("login:email:")).map((bucket) => ({ bucket })) };
              },
              run: async () => ({}),
            };
          },
        };
      },
      async batch(stmts: { sql: string; args: unknown[] }[]) {
        for (const s of stmts) {
          if (!s.sql.includes("rate_limits")) continue;
          rejectLongPatterns(s.sql, s.args);
          const exact = new Set([String(s.args[0]), String(s.args[1]), ...(JSON.parse(String(s.args[2])) as string[])]);
          for (const b of [...buckets]) if (exact.has(b)) buckets.delete(b);
        }
        return [];
      },
    };
    const request = new Request("https://example.test/api/auth/delete-account", {
      method: "POST",
      headers: { "Content-Type": "application/json", "CF-Connecting-IP": "9.9.9.9" },
      body: JSON.stringify({ email, password, confirmation: "DELETE" }),
    });
    const env = { DB, JWT_SECRET: "test" } as unknown as Env;
    const res = await onRequestPost({ request, env, waitUntil: () => {} } as unknown as Parameters<typeof onRequestPost>[0]);
    expect(res.status).toBe(200);
    expect([...buckets].sort()).toEqual(
      [`login:email:1.1.1.1:x:${email}`, "login:email:1.1.1.1:other@example.com"].sort(),
    );
  });
});
