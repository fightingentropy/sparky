import { getUserFromRequest, json, readJsonBody, normalizeNickname, normalizeAvatar, type Env } from "./_lib/auth";

type ProfileRow = { email: string; nickname: string | null; avatar: string | null };

function userResponse(id: string, row: ProfileRow) {
  return { user: { id, email: row.email, nickname: row.nickname ?? null, avatar: row.avatar ?? null } };
}

// Update the signed-in user's profile. Only the fields present in the body are
// touched, so the client can save the nickname and the avatar independently.
export const onRequestPut: PagesFunction<Env> = async ({ request, env }) => {
  const user = await getUserFromRequest(request, env);
  if (!user) return json({ error: "Unauthorized" }, 401);

  const body = await readJsonBody<{ nickname?: unknown; avatar?: unknown }>(request);
  if (!body) return json({ error: "Invalid JSON body" }, 400);

  const sets: string[] = [];
  const binds: (string | null)[] = [];
  if ("nickname" in body) {
    const result = normalizeNickname(body.nickname);
    if (!result.ok) return json({ error: result.error }, 400);
    sets.push("nickname = ?");
    binds.push(result.value);
  }
  if ("avatar" in body) {
    const result = normalizeAvatar(body.avatar);
    if (!result.ok) return json({ error: result.error }, 400);
    sets.push("avatar = ?");
    binds.push(result.value);
  }

  if (sets.length > 0) {
    await env.DB.prepare(`UPDATE users SET ${sets.join(", ")} WHERE id = ?`)
      .bind(...binds, user.id)
      .run();
  }

  const row = await env.DB.prepare("SELECT email, nickname, avatar FROM users WHERE id = ?")
    .bind(user.id)
    .first<ProfileRow>();
  if (!row) return json({ error: "Unauthorized" }, 401);
  return json(userResponse(user.id, row));
};
