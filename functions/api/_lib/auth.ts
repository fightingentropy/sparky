import { verifyJWT } from "./crypto";

export interface Env {
  DB: D1Database;
  JWT_SECRET: string;
}

export type SessionUser = { id: string; email: string };

export async function getUserFromRequest(request: Request, env: Env): Promise<SessionUser | null> {
  const auth = request.headers.get("Authorization");
  if (!auth?.startsWith("Bearer ")) return null;
  const payload = await verifyJWT(auth.slice(7), env.JWT_SECRET);
  if (!payload || typeof payload.sub !== "string" || typeof payload.email !== "string") return null;
  return { id: payload.sub, email: payload.email };
}

export function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254;
}

export function isValidPassword(password: string): boolean {
  return typeof password === "string" && password.length >= 6 && password.length <= 128;
}
