import { getUserFromRequest, json, type Env } from "../_lib/auth";

type ProgressRow = { exam_id: string; answers: string; submitted: number; updated_at: string };

export const onRequestGet: PagesFunction<Env> = async ({ request, env }) => {
  const user = await getUserFromRequest(request, env);
  if (!user) return json({ error: "Unauthorized" }, 401);

  const rows = await env.DB.prepare(
    "SELECT exam_id, answers, submitted, updated_at FROM exam_progress WHERE user_id = ?"
  )
    .bind(user.id)
    .all<ProgressRow>();

  const progress: Record<string, { answers: Record<string, string>; submitted: boolean; updatedAt: string }> = {};
  for (const row of rows.results) {
    progress[row.exam_id] = {
      answers: JSON.parse(row.answers),
      submitted: row.submitted === 1,
      updatedAt: row.updated_at,
    };
  }
  return json({ progress });
};
