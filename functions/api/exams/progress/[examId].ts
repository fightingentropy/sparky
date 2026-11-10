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
const MAX_WRITE_ATTEMPTS = 5;

export const onRequestPut: PagesFunction<Env> = async ({ request, env, params }) => {
  const user = await getUserFromRequest(request, env);
  if (!user) return json({ error: "Unauthorized" }, 401);

  const examId = Array.isArray(params.examId) ? params.examId[0] : params.examId;
  if (!examId || !VALID_EXAM_IDS.has(examId)) return json({ error: "Unknown exam" }, 400);

  const body = await readJsonBody<{ current?: unknown; variant?: unknown }>(request);
  if (!body) return json({ error: "Invalid JSON body" }, 400);

  // Validate the incoming variant once, up front; it does not depend on stored state.
  let incoming: { index: number; answers: Record<string, string>; submitted: boolean } | null = null;
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
    incoming = { index: clampIndex(variant.index), answers: validated.value, submitted: variant.submitted === true };
  }

  // Merge into the existing aggregate so a single-variant write never clobbers
  // the other tests' saved progress. The write is a compare-and-swap on the
  // stored `answers` text: if another request changed the row after we read it,
  // the conditional write matches nothing and we re-read and merge again.
  for (let attempt = 0; attempt < MAX_WRITE_ATTEMPTS; attempt++) {
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

    if (incoming) {
      stored.variants[String(incoming.index)] = { answers: incoming.answers, submitted: incoming.submitted };
    }

    if (Object.keys(stored.variants).length > MAX_VARIANTS) {
      return json({ error: "Too many variants" }, 400);
    }
    const answersJson = serializeProgress(stored);
    if (answersJson.length > MAX_PROGRESS_BYTES) return json({ error: "Progress payload too large" }, 400);

    // submitted / attempt_count columns mirror the current variant for any
    // legacy consumer; the JSON in `answers` is the source of truth.
    const currentSubmitted = stored.variants[String(stored.current)]?.submitted ? 1 : 0;

    const result = row
      ? await env.DB.prepare(
          `UPDATE exam_progress SET answers = ?, submitted = ?, attempt_count = ?, updated_at = datetime('now')
           WHERE user_id = ? AND exam_id = ? AND answers = ?`
        )
          .bind(answersJson, currentSubmitted, stored.current, user.id, examId, row.answers)
          .run()
      : await env.DB.prepare(
          `INSERT INTO exam_progress (user_id, exam_id, answers, submitted, attempt_count, updated_at)
           VALUES (?, ?, ?, ?, ?, datetime('now'))
           ON CONFLICT(user_id, exam_id) DO NOTHING`
        )
          .bind(user.id, examId, answersJson, currentSubmitted, stored.current)
          .run();

    if ((result.meta?.changes ?? 0) > 0) return json({ ok: true });
  }

  return json({ error: "Progress changed concurrently, try again" }, 409);
};
