import { hashPassword, createJWT } from "../_lib/crypto";
import { json, isValidEmail, isValidPassword, type Env } from "../_lib/auth";

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  const body = (await request.json()) as { email?: string; password?: string };
  const email = body.email?.trim().toLowerCase();
  const password = body.password;
  if (!email || !isValidEmail(email)) return json({ error: "Invalid email" }, 400);
  if (!password || !isValidPassword(password)) return json({ error: "Password must be 6–128 characters" }, 400);

  const existing = await env.DB.prepare("SELECT id FROM users WHERE email = ?").bind(email).first();
  if (existing) return json({ error: "Email already registered" }, 409);

  const id = crypto.randomUUID();
  const passwordHash = await hashPassword(password);
  await env.DB.prepare("INSERT INTO users (id, email, password_hash) VALUES (?, ?, ?)").bind(id, email, passwordHash).run();

  const token = await createJWT(
    { sub: id, email, exp: Math.floor(Date.now() / 1000) + 30 * 24 * 3600 },
    env.JWT_SECRET
  );
  return json({ token, user: { id, email } }, 201);
};
