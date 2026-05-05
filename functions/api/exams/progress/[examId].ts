import { getUserFromRequest, json, readJsonBody, validateAnswers, VALID_EXAM_IDS, type Env } from "../../_lib/auth";

export const onRequestPut: PagesFunction<Env> = async ({ request, env, params }) => {
  const user = await getUserFromRequest(request, env);
  if (!user) return json({ error: "Unauthorized" }, 401);

  const examId = Array.isArray(params.examId) ? params.examId[0] : params.examId;
  if (!examId || !VALID_EXAM_IDS.has(examId)) return json({ error: "Unknown exam" }, 400);

  const body = await readJsonBody<{ answers?: unknown; submitted?: unknown }>(request);
  if (!body) return json({ error: "Invalid JSON body" }, 400);

  const validated = validateAnswers(body.answers);
  if (!validated.ok) return json({ error: validated.error }, 400);
  const submitted = body.submitted === true ? 1 : 0;

  const answersJson = JSON.stringify(validated.value);

  await env.DB.prepare(
    `INSERT INTO exam_progress (user_id, exam_id, answers, submitted, updated_at)
     VALUES (?, ?, ?, ?, datetime('now'))
     ON CONFLICT(user_id, exam_id) DO UPDATE SET answers = ?, submitted = ?, updated_at = datetime('now')`
  )
    .bind(user.id, examId, answersJson, submitted, answersJson, submitted)
    .run();

  return json({ ok: true });
};
