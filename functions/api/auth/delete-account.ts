import { verifyPassword } from "../_lib/crypto";
import { isValidEmail, isValidPassword, json, type Env } from "../_lib/auth";
import { clientIp, maybeCleanupRateLimits, rateLimit } from "../_lib/rateLimit";

const DUMMY_HASH = "00000000000000000000000000000000:" + "0".repeat(64);

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

    // D1 batches are atomic: progress cannot be removed without its account.
    await env.DB.batch([
      env.DB.prepare("DELETE FROM exam_progress WHERE user_id = ?").bind(row.id),
      env.DB.prepare("DELETE FROM users WHERE id = ?").bind(row.id),
      env.DB.prepare("DELETE FROM rate_limits WHERE bucket IN (?, ?, ?)")
        .bind(`login:email:${email}`, `delete:email:${email}`, `signup:email:${email}`),
    ]);
    const response = json({ deleted: true });
    response.headers.set("Cache-Control", "no-store");
    return response;
  } catch {
    return json({ error: "We couldn't delete your account. Please try again." }, 503);
  }
};
