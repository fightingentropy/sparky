import { verifyPassword } from "../_lib/crypto";
import { isValidEmail, isValidPassword, json, type Env } from "../_lib/auth";
import { clientIp, maybeCleanupRateLimits, rateLimit } from "../_lib/rateLimit";

const DUMMY_HASH = "00000000000000000000000000000000:" + "0".repeat(64);

// What clientIp() can return: "local", an IPv4 or an IPv6 address.
function isClientAddress(value: string): boolean {
  if (value === "local") return true;
  if (/^\d{1,3}(\.\d{1,3}){3}$/.test(value)) return true;
  if (!value.includes(":") || !/^[0-9a-fA-F:.]+$/.test(value)) return false;
  try {
    new URL(`http://[${value}]/`);
    return true;
  } catch {
    return false;
  }
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;
  const origin = request.headers.get("Origin");
  if (origin && origin !== new URL(request.url).origin) {
    return json({ error: "Use Sparky's account deletion page." }, 403);
  }
  if (!request.headers.get("Content-Type")?.startsWith("application/json")) {
    return json({ error: "JSON required" }, 415);
  }

  // Bound the credential payload even when Content-Length is absent or false.
  const reader = request.body?.getReader();
  if (!reader) return json({ error: "Request body required" }, 400);
  const chunks: Uint8Array[] = [];
  let size = 0;
  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > 2048) {
      await reader.cancel();
      return json({ error: "Request too large" }, 413);
    }
    chunks.push(value);
  }
  const bytes = new Uint8Array(size);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }
  let body: { email?: unknown; password?: unknown; confirmation?: unknown };
  try {
    const parsed: unknown = JSON.parse(new TextDecoder().decode(bytes));
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error();
    body = parsed;
  } catch {
    return json({ error: "Invalid request" }, 400);
  }
  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  const password = typeof body.password === "string" ? body.password : "";
  if (!isValidEmail(email) || !isValidPassword(password) || body.confirmation !== "DELETE") {
    return json({ error: "Enter your account email, password and DELETE to confirm." }, 400);
  }

  try {
    const now = Date.now();
    const allowed = await Promise.all([
      rateLimit(env, `delete:ip:${clientIp(request)}`, 10, 15 * 60 * 1000, now, true),
      rateLimit(env, `delete:email:${email}`, 5, 15 * 60 * 1000, now, true),
    ]);
    if (!allowed.every(Boolean)) return json({ error: "Too many attempts. Try again later." }, 429);
    context.waitUntil(maybeCleanupRateLimits(env, now));
    const row = await env.DB.prepare("SELECT id, password_hash FROM users WHERE email = ?")
      .bind(email).first<{ id: string; password_hash: string }>();
    const valid = await verifyPassword(password, row?.password_hash ?? DUMMY_HASH);
    if (!row || !valid) return json({ error: "Invalid email or password" }, 401);

    // Login buckets are keyed per IP (login:email:<ip>:<email>). Find this
    // email's buckets with a range plus suffix comparison (no LIKE: D1 caps
    // pattern length) and keep only those whose middle part is a real client
    // address, so another email ending in ":<email>" is never matched.
    const suffix = `:${email}`;
    const candidates = await env.DB.prepare(
      "SELECT bucket FROM rate_limits WHERE bucket >= 'login:email:' AND bucket < 'login:email;' AND substr(bucket, -length(?1)) = ?1",
    ).bind(suffix).all<{ bucket: string }>();
    const loginBuckets = (candidates.results ?? [])
      .map((r) => r.bucket)
      .filter((b) => isClientAddress(b.slice("login:email:".length, b.length - suffix.length)));

    // D1 batches are atomic: progress cannot be removed without its account.
    await env.DB.batch([
      env.DB.prepare("DELETE FROM exam_progress WHERE user_id = ?").bind(row.id),
      env.DB.prepare("DELETE FROM users WHERE id = ?").bind(row.id),
      env.DB.prepare(
        "DELETE FROM rate_limits WHERE bucket IN (?, ?) OR bucket IN (SELECT value FROM json_each(?))",
      ).bind(`delete:email:${email}`, `signup:email:${email}`, JSON.stringify(loginBuckets)),
    ]);
    const response = json({ deleted: true });
    response.headers.set("Cache-Control", "no-store");
    return response;
  } catch {
    return json({ error: "We couldn't delete your account. Please try again." }, 503);
  }
};
