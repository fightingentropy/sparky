import { getUserFromRequest, json, parseStoredProgress, VALID_EXAM_IDS, type Env } from "../_lib/auth";

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
    {
      variants: Record<string, { answers: Record<string, string>; submitted: boolean }>;
      current: number;
      updatedAt: string;
    }
  > = {};
  for (const row of rows.results) {
    // Skip rows for exams we no longer recognise.
    if (!VALID_EXAM_IDS.has(row.exam_id)) continue;
    // parseStoredProgress tolerates corrupted/legacy rows (returns empty variants).
    const stored = parseStoredProgress(row.answers, row.submitted, row.attempt_count);
    progress[row.exam_id] = {
      variants: stored.variants,
      current: stored.current,
      updatedAt: row.updated_at,
    };
  }
  return json({ progress });
};
