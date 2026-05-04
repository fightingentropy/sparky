import { getUserFromRequest, json, type Env } from "../../_lib/auth";

export const onRequestPut: PagesFunction<Env> = async ({ request, env, params }) => {
  const user = await getUserFromRequest(request, env);
  if (!user) return json({ error: "Unauthorized" }, 401);

  const examId = Array.isArray(params.examId) ? params.examId[0] : params.examId;
  if (!examId) return json({ error: "Missing exam ID" }, 400);

  const body = (await request.json()) as { answers?: Record<string, string>; submitted?: boolean };
  if (!body.answers || typeof body.answers !== "object") return json({ error: "Invalid answers" }, 400);

  const answersJson = JSON.stringify(body.answers);
  const submitted = body.submitted ? 1 : 0;

  await env.DB.prepare(
    `INSERT INTO exam_progress (user_id, exam_id, answers, submitted, updated_at)
     VALUES (?, ?, ?, ?, datetime('now'))
     ON CONFLICT(user_id, exam_id) DO UPDATE SET answers = ?, submitted = ?, updated_at = datetime('now')`
  )
    .bind(user.id, examId, answersJson, submitted, answersJson, submitted)
    .run();

  return json({ ok: true });
};
