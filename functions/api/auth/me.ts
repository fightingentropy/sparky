import { getUserFromRequest, json, type Env } from "../_lib/auth";

type ProfileRow = { email: string; nickname: string | null; avatar: string | null };

export const onRequestGet: PagesFunction<Env> = async ({ request, env }) => {
  const user = await getUserFromRequest(request, env);
  if (!user) return json({ error: "Unauthorized" }, 401);
  // The JWT only carries id/email; read the latest profile fields from the DB.
  const row = await env.DB.prepare("SELECT email, nickname, avatar FROM users WHERE id = ?")
    .bind(user.id)
    .first<ProfileRow>();
  if (!row) return json({ error: "Unauthorized" }, 401);
  return json({ user: { id: user.id, email: row.email, nickname: row.nickname ?? null, avatar: row.avatar ?? null } });
};
