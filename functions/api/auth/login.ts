import { verifyPassword, createJWT } from "../_lib/crypto";
import { json, readJsonBody, type Env } from "../_lib/auth";

type UserRow = { id: string; email: string; password_hash: string };

// Static dummy hash used to spend the same PBKDF2 budget when the email is
// unknown, so login response time is the same regardless of whether the
// account exists. Generated once at build time, not derived from a real
// password.
const DUMMY_HASH =
  "00000000000000000000000000000000:" +
  "0000000000000000000000000000000000000000000000000000000000000000";

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  const body = await readJsonBody<{ email?: string; password?: string }>(request);
  if (!body) return json({ error: "Invalid JSON body" }, 400);
  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  const password = typeof body.password === "string" ? body.password : "";
  if (!email || !password) return json({ error: "Email and password required" }, 400);

  const row = await env.DB.prepare("SELECT id, email, password_hash FROM users WHERE email = ?")
    .bind(email)
    .first<UserRow>();

  // Always run verifyPassword exactly once — against the real hash if the user
  // exists, or against a fixed dummy hash if not — so timing does not reveal
  // whether the email is registered.
  const valid = await verifyPassword(password, row?.password_hash ?? DUMMY_HASH);
  if (!row || !valid) return json({ error: "Invalid email or password" }, 401);

  const token = await createJWT(
    { sub: row.id, email: row.email, exp: Math.floor(Date.now() / 1000) + 30 * 24 * 3600 },
    env.JWT_SECRET
  );
  return json({ token, user: { id: row.id, email: row.email } });
};
