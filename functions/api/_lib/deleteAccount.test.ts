import { describe, expect, it } from "vitest";
import { onRequestPost } from "../auth/delete-account";
import { hashPassword } from "./crypto";
import type { Env } from "./auth";

// Translate a SQL LIKE pattern (with backslash escape) into a RegExp.
function likeToRegExp(pattern: string): RegExp {
  let out = "";
  for (let i = 0; i < pattern.length; i++) {
    const c = pattern[i];
    if (c === "\\") out += pattern[++i].replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    else if (c === "%") out += ".*";
    else if (c === "_") out += ".";
    else out += c.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
  return new RegExp(`^${out}$`, "s");
}

describe("account deletion rate-limit cleanup", () => {
  it("clears per-IP login buckets for the email but not other emails", async () => {
    const email = "a_b@example.com";
    const password = "correct-horse-battery";
    const hash = await hashPassword(password);
    const buckets = new Set([
      `login:email:1.1.1.1:${email}`,
      `login:email:2001:db8::1:${email}`,
      `delete:email:${email}`,
      `signup:email:${email}`,
      "login:email:1.1.1.1:axb@example.com",
      "login:email:1.1.1.1:other@example.com",
    ]);
    const DB = {
      prepare(sql: string) {
        return {
          bind(...args: unknown[]) {
            return {
              sql,
              args,
              first: async () => (sql.includes("FROM users") ? { id: "u1", password_hash: hash } : { count: 1 }),
              run: async () => ({}),
            };
          },
        };
      },
      async batch(stmts: { sql: string; args: unknown[] }[]) {
        for (const s of stmts) {
          if (!s.sql.includes("rate_limits")) continue;
          const like = s.sql.includes("LIKE") ? likeToRegExp(String(s.args[s.args.length - 1])) : null;
          const exact = s.args.slice(0, like ? -1 : undefined).map(String);
          for (const b of [...buckets]) if (exact.includes(b) || like?.test(b)) buckets.delete(b);
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
      ["login:email:1.1.1.1:axb@example.com", "login:email:1.1.1.1:other@example.com"].sort(),
    );
  });
});
