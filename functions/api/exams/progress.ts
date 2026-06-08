import { getUserFromRequest, json, validateAnswers, VALID_EXAM_IDS, type Env } from "../_lib/auth";

type ProgressRow = {
  exam_id: string;
  answers: string;
  submitted: number;
  attempt_count: number;
  updated_at: string;
};

export const onRequestGet: PagesFunction<Env> = async ({ request, env }) => {
  const user = await getUserFromRequest(request, env);
  if (!user) return json({ error: "Unauthorized" }, 401);

  const rows = await env.DB.prepare(
    "SELECT exam_id, answers, submitted, attempt_count, updated_at FROM exam_progress WHERE user_id = ? LIMIT 100"
  )
    .bind(user.id)
    .all<ProgressRow>();

  const progress: Record<
    string,
    { answers: Record<string, string>; submitted: boolean; attemptCount: number; updatedAt: string }
  > = {};
  for (const row of rows.results) {
    // Skip rows for exams we no longer recognise.
    if (!VALID_EXAM_IDS.has(row.exam_id)) continue;
    let parsedAnswers: unknown;
    try {
      parsedAnswers = JSON.parse(row.answers);
    } catch {
      // Corrupted or legacy row — skip rather than 500 the whole response.
      continue;
    }
    const validated = validateAnswers(parsedAnswers);
    if (!validated.ok) continue;
    progress[row.exam_id] = {
      answers: validated.value,
      submitted: row.submitted === 1,
      attemptCount: Number.isInteger(row.attempt_count) && row.attempt_count >= 0 ? row.attempt_count : 0,
      updatedAt: row.updated_at,
    };
  }
  return json({ progress });
};
