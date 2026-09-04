import assert from "node:assert/strict";

// Run only against an isolated local Pages server and local D1 database.
const base = new URL(process.argv[2] ?? "http://localhost:8791");
assert(["localhost", "127.0.0.1", "[::1]"].includes(base.hostname), "Local test server required");
const runID = crypto.randomUUID();
const password = crypto.randomUUID();
const email = `delete-${runID}@example.invalid`;
const otherEmail = `keep-${runID}@example.invalid`;
const deletion = { email, password, confirmation: "DELETE" };
let checks = 0;

async function request(path: string, method: string, expected: number, body?: unknown, token?: string, origin?: string) {
  const response = await fetch(new URL(path, base), {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(origin ? { Origin: origin } : {}),
    },
    body: body === undefined ? undefined : JSON.stringify(body),
  });
  assert.equal(response.status, expected, `${method} ${path}: unexpected HTTP status`);
  checks++;
  return await response.json();
}

const account = await request("/api/auth/signup", "POST", 201, { email, password });
const other = await request("/api/auth/signup", "POST", 201, { email: otherEmail, password });
await request("/api/exams/progress/pat-testing", "PUT", 200, {
  current: 0, variant: { index: 0, answers: { "1": "B" }, submitted: true },
}, account.token);
await request("/api/exams/progress/pat-testing", "PUT", 200, {
  current: 0, variant: { index: 0, answers: { "1": "C" }, submitted: true },
}, other.token);
await request("/api/auth/delete-account", "POST", 403, deletion, undefined, "https://unrelated.invalid");
await request("/api/auth/delete-account", "POST", 400, { ...deletion, confirmation: "" });
await request("/api/auth/delete-account", "POST", 413, { ...deletion, extra: "x".repeat(3000) });
await request("/api/auth/delete-account", "POST", 401, { ...deletion, password: "incorrect-password" });
await request("/api/auth/me", "GET", 200, undefined, account.token);
const result = await request("/api/auth/delete-account", "POST", 200, deletion, undefined, base.origin);
assert.equal(result.deleted, true);
await request("/api/auth/login", "POST", 401, { email, password });
await request("/api/auth/me", "GET", 401, undefined, account.token);
await request("/api/exams/progress", "GET", 401, undefined, account.token);
await request("/api/exams/progress/pat-testing", "PUT", 401, { current: 1 }, account.token);
await request("/api/profile", "PUT", 401, { nickname: "resurrected" }, account.token);
const survivor = await request("/api/auth/me", "GET", 200, undefined, other.token);
assert.equal(survivor.user.id, other.user.id);
const progress = await request("/api/exams/progress", "GET", 200, undefined, other.token);
assert.equal(progress.progress["pat-testing"].variants["0"].answers["1"], "C");
// A new account with the same email cannot recover the deleted account's data.
const recreated = await request("/api/auth/signup", "POST", 201, { email, password });
assert.notEqual(recreated.user.id, account.user.id);
const empty = await request("/api/exams/progress", "GET", 200, undefined, recreated.token);
assert.deepEqual(empty.progress, {});
await request("/api/auth/delete-account", "POST", 200, deletion);
await request("/api/auth/delete-account", "POST", 200, { ...deletion, email: otherEmail });
console.log(`Passed ${checks} local API checks: authentication, confirmation, payload bounds, account isolation, session revocation and deletion.`);
