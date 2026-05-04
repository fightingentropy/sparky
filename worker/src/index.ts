import { hashPassword, verifyPassword, createJWT, verifyJWT } from "./crypto";

interface Env {
  DB: D1Database;
  JWT_SECRET: string;
  CORS_ORIGIN: string;
}

type UserRow = { id: string; email: string; password_hash: string; created_at: string };
type ProgressRow = { exam_id: string; answers: string; submitted: number; updated_at: string };

function cors(request: Request, env: Env): Record<string, string> {
  const origin = request.headers.get("Origin") ?? "";
  const allowed = env.CORS_ORIGIN ?? "*";
  return {
    "Access-Control-Allow-Origin": allowed === "*" ? origin || "*" : allowed,
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Allow-Credentials": "true",
  };
}

function json(data: unknown, status: number, corsHeaders: Record<string, string>): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json", ...corsHeaders },
  });
}

async function getUserFromToken(request: Request, env: Env): Promise<{ id: string; email: string } | null> {
  const auth = request.headers.get("Authorization");
  if (!auth?.startsWith("Bearer ")) return null;
  const payload = await verifyJWT(auth.slice(7), env.JWT_SECRET);
  if (!payload || typeof payload.sub !== "string" || typeof payload.email !== "string") return null;
  return { id: payload.sub, email: payload.email };
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254;
}

function isValidPassword(password: string): boolean {
  return typeof password === "string" && password.length >= 6 && password.length <= 128;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const corsHeaders = cors(request, env);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    const url = new URL(request.url);
    const path = url.pathname;

    try {
      // ── Auth routes ──
      if (path === "/auth/signup" && request.method === "POST") {
        const body = (await request.json()) as { email?: string; password?: string };
        const email = body.email?.trim().toLowerCase();
        const password = body.password;
        if (!email || !isValidEmail(email)) return json({ error: "Invalid email" }, 400, corsHeaders);
        if (!password || !isValidPassword(password)) return json({ error: "Password must be 6–128 characters" }, 400, corsHeaders);

        const existing = await env.DB.prepare("SELECT id FROM users WHERE email = ?").bind(email).first();
        if (existing) return json({ error: "Email already registered" }, 409, corsHeaders);

        const id = crypto.randomUUID();
        const passwordHash = await hashPassword(password);
        await env.DB.prepare("INSERT INTO users (id, email, password_hash) VALUES (?, ?, ?)").bind(id, email, passwordHash).run();

        const token = await createJWT({ sub: id, email, exp: Math.floor(Date.now() / 1000) + 30 * 24 * 3600 }, env.JWT_SECRET);
        return json({ token, user: { id, email } }, 201, corsHeaders);
      }

      if (path === "/auth/login" && request.method === "POST") {
        const body = (await request.json()) as { email?: string; password?: string };
        const email = body.email?.trim().toLowerCase();
        const password = body.password;
        if (!email || !password) return json({ error: "Email and password required" }, 400, corsHeaders);

        const row = await env.DB.prepare("SELECT id, email, password_hash FROM users WHERE email = ?").bind(email).first<UserRow>();
        if (!row) return json({ error: "Invalid email or password" }, 401, corsHeaders);

        const valid = await verifyPassword(password, row.password_hash);
        if (!valid) return json({ error: "Invalid email or password" }, 401, corsHeaders);

        const token = await createJWT({ sub: row.id, email: row.email, exp: Math.floor(Date.now() / 1000) + 30 * 24 * 3600 }, env.JWT_SECRET);
        return json({ token, user: { id: row.id, email: row.email } }, 200, corsHeaders);
      }

      if (path === "/auth/me" && request.method === "GET") {
        const user = await getUserFromToken(request, env);
        if (!user) return json({ error: "Unauthorized" }, 401, corsHeaders);
        return json({ user }, 200, corsHeaders);
      }

      // ── Exam progress routes ──
      if (path === "/exams/progress" && request.method === "GET") {
        const user = await getUserFromToken(request, env);
        if (!user) return json({ error: "Unauthorized" }, 401, corsHeaders);

        const rows = await env.DB.prepare("SELECT exam_id, answers, submitted, updated_at FROM exam_progress WHERE user_id = ?")
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
        return json({ progress }, 200, corsHeaders);
      }

      if (path.startsWith("/exams/progress/") && request.method === "PUT") {
        const user = await getUserFromToken(request, env);
        if (!user) return json({ error: "Unauthorized" }, 401, corsHeaders);

        const examId = path.replace("/exams/progress/", "");
        if (!examId) return json({ error: "Missing exam ID" }, 400, corsHeaders);

        const body = (await request.json()) as { answers?: Record<string, string>; submitted?: boolean };
        if (!body.answers || typeof body.answers !== "object") return json({ error: "Invalid answers" }, 400, corsHeaders);

        const answersJson = JSON.stringify(body.answers);
        const submitted = body.submitted ? 1 : 0;

        await env.DB.prepare(
          `INSERT INTO exam_progress (user_id, exam_id, answers, submitted, updated_at)
           VALUES (?, ?, ?, ?, datetime('now'))
           ON CONFLICT(user_id, exam_id) DO UPDATE SET answers = ?, submitted = ?, updated_at = datetime('now')`
        )
          .bind(user.id, examId, answersJson, submitted, answersJson, submitted)
          .run();

        return json({ ok: true }, 200, corsHeaders);
      }

      return json({ error: "Not found" }, 404, corsHeaders);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Internal error";
      return json({ error: message }, 500, corsHeaders);
    }
  },
};
