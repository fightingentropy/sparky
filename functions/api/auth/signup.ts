import { hashPassword, createJWT } from "../_lib/crypto";
import { json, readJsonBody, isValidEmail, isValidPassword, type Env } from "../_lib/auth";
import { rateLimit, clientIp } from "../_lib/rateLimit";

const TOKEN_TTL_SECONDS = 7 * 24 * 3600;

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  const body = await readJsonBody<{ email?: string; password?: string }>(request);
  if (!body) return json({ error: "Invalid JSON body" }, 400);
  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  const password = typeof body.password === "string" ? body.password : "";
  if (!email || !isValidEmail(email)) return json({ error: "Invalid email" }, 400);
  if (!password || !isValidPassword(password)) return json({ error: "Password must be 8–128 characters" }, 400);

  // Account-creation abuse / enumeration probing protection: cap signups per
  // source IP per hour. (The 409 below still distinguishes registered emails —
  // an accepted residual without out-of-band email verification — but rate
  // limiting makes bulk harvesting impractical.)
  const now = Date.now();
  if (!(await rateLimit(env, `signup:ip:${clientIp(request)}`, 10, 60 * 60 * 1000, now))) {
    return json({ error: "Too many attempts. Try again later." }, 429);
  }

  const existing = await env.DB.prepare("SELECT id FROM users WHERE email = ?").bind(email).first();
  if (existing) return json({ error: "Email already registered" }, 409);

  const id = crypto.randomUUID();
  const passwordHash = await hashPassword(password);
  await env.DB.prepare("INSERT INTO users (id, email, password_hash) VALUES (?, ?, ?)").bind(id, email, passwordHash).run();

  const token = await createJWT(
    { sub: id, email, exp: Math.floor(now / 1000) + TOKEN_TTL_SECONDS },
    env.JWT_SECRET
  );
  return json({ token, user: { id, email } }, 201);
};
