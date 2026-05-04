import { verifyPassword, createJWT } from "../_lib/crypto";
import { json, type Env } from "../_lib/auth";

type UserRow = { id: string; email: string; password_hash: string };

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  const body = (await request.json()) as { email?: string; password?: string };
  const email = body.email?.trim().toLowerCase();
  const password = body.password;
  if (!email || !password) return json({ error: "Email and password required" }, 400);

  const row = await env.DB.prepare("SELECT id, email, password_hash FROM users WHERE email = ?")
    .bind(email)
    .first<UserRow>();
  if (!row) return json({ error: "Invalid email or password" }, 401);

  const valid = await verifyPassword(password, row.password_hash);
  if (!valid) return json({ error: "Invalid email or password" }, 401);

  const token = await createJWT(
    { sub: row.id, email: row.email, exp: Math.floor(Date.now() / 1000) + 30 * 24 * 3600 },
    env.JWT_SECRET
  );
  return json({ token, user: { id: row.id, email: row.email } });
};
