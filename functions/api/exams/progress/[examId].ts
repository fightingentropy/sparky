import {
  clampIndex,
  getUserFromRequest,
  json,
  MAX_VARIANTS,
  parseStoredProgress,
  readJsonBody,
  serializeProgress,
  validateAnswers,
  VALID_EXAM_IDS,
  type Env,
} from "../../_lib/auth";

const MAX_PROGRESS_BYTES = 256 * 1024;

export const onRequestPut: PagesFunction<Env> = async ({ request, env, params }) => {
  const user = await getUserFromRequest(request, env);
  if (!user) return json({ error: "Unauthorized" }, 401);

  const examId = Array.isArray(params.examId) ? params.examId[0] : params.examId;
  if (!examId || !VALID_EXAM_IDS.has(examId)) return json({ error: "Unknown exam" }, 400);

  const body = await readJsonBody<{ current?: unknown; variant?: unknown }>(request);
  if (!body) return json({ error: "Invalid JSON body" }, 400);

  // Merge into the existing aggregate so a single-variant write never clobbers
  // the other tests' saved progress (read-modify-write).
  const row = await env.DB.prepare(
    "SELECT answers, submitted, attempt_count FROM exam_progress WHERE user_id = ? AND exam_id = ?"
  )
    .bind(user.id, examId)
    .first<{ answers: string; submitted: number; attempt_count: number }>();
  const stored = row
    ? parseStoredProgress(row.answers, row.submitted, row.attempt_count)
    : { variants: {}, current: 0 };

  stored.current =
    typeof body.current === "number" && Number.isInteger(body.current) && body.current >= 0
      ? Math.min(body.current, 1000)
      : stored.current;

  if (body.variant !== undefined && body.variant !== null) {
    if (typeof body.variant !== "object" || Array.isArray(body.variant)) {
      return json({ error: "Invalid variant" }, 400);
    }
    const variant = body.variant as { index?: unknown; answers?: unknown; submitted?: unknown };
    if (typeof variant.index !== "number" || !Number.isInteger(variant.index) || variant.index < 0) {
      return json({ error: "Invalid variant index" }, 400);
    }
    const validated = validateAnswers(variant.answers);
    if (!validated.ok) return json({ error: validated.error }, 400);
    stored.variants[String(clampIndex(variant.index))] = {
      answers: validated.value,
      submitted: variant.submitted === true,
    };
  }

  if (Object.keys(stored.variants).length > MAX_VARIANTS) {
    return json({ error: "Too many variants" }, 400);
  }
  const answersJson = serializeProgress(stored);
  if (answersJson.length > MAX_PROGRESS_BYTES) return json({ error: "Progress payload too large" }, 400);

  // submitted / attempt_count columns mirror the current variant for any
  // legacy consumer; the JSON in `answers` is the source of truth.
  const currentSubmitted = stored.variants[String(stored.current)]?.submitted ? 1 : 0;

  await env.DB.prepare(
    `INSERT INTO exam_progress (user_id, exam_id, answers, submitted, attempt_count, updated_at)
     VALUES (?, ?, ?, ?, ?, datetime('now'))
     ON CONFLICT(user_id, exam_id) DO UPDATE SET answers = ?, submitted = ?, attempt_count = ?, updated_at = datetime('now')`
  )
    .bind(user.id, examId, answersJson, currentSubmitted, stored.current, answersJson, currentSubmitted, stored.current)
    .run();

  return json({ ok: true });
};
