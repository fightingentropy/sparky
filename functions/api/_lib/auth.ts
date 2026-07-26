import { verifyJWT } from "./crypto";
export { VALID_EXAM_IDS } from "./validExamIds";

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
  return typeof password === "string" && password.length >= 8 && password.length <= 128;
}

export const MAX_NICKNAME_LENGTH = 40;
// Generous cap on the stored data: URL. The client resizes avatars to a small
// square (well under ~60 KB), so anything approaching this ceiling is abuse.
const MAX_AVATAR_BYTES = 256 * 1024;
const AVATAR_DATA_URL = /^data:image\/(png|jpeg|webp);base64,[A-Za-z0-9+/]+={0,2}$/;

export type FieldResult = { ok: true; value: string | null } | { ok: false; error: string };

// Trim a nickname; an empty/whitespace string clears it back to null (fall back
// to the email). Bounds the length so it fits the UI and the column.
export function normalizeNickname(input: unknown): FieldResult {
  if (input === null || input === undefined) return { ok: true, value: null };
  if (typeof input !== "string") return { ok: false, error: "Invalid nickname" };
  const trimmed = input.trim();
  if (trimmed.length === 0) return { ok: true, value: null };
  if (trimmed.length > MAX_NICKNAME_LENGTH) return { ok: false, error: `Nickname must be ${MAX_NICKNAME_LENGTH} characters or fewer` };
  return { ok: true, value: trimmed };
}

// Accept only a base64 PNG/JPEG/WebP data URL, size-bounded. Empty string or
// null removes the avatar.
export function normalizeAvatar(input: unknown): FieldResult {
  if (input === null || input === undefined) return { ok: true, value: null };
  if (typeof input !== "string") return { ok: false, error: "Invalid image" };
  if (input.length === 0) return { ok: true, value: null };
  if (input.length > MAX_AVATAR_BYTES) return { ok: false, error: "Image is too large" };
  if (!AVATAR_DATA_URL.test(input)) return { ok: false, error: "Unsupported image format" };
  return { ok: true, value: input };
}

const VALID_CHOICES = new Set(["A", "B", "C", "D"]);
const MAX_ANSWERS_ENTRIES = 250;
const MAX_ANSWERS_BYTES = 16 * 1024;

// Validates a {[questionNumber: string]: "A"|"B"|"C"|"D"} object and bounds it.
export function validateAnswers(input: unknown): { ok: true; value: Record<string, string> } | { ok: false; error: string } {
  if (!input || typeof input !== "object" || Array.isArray(input)) return { ok: false, error: "Invalid answers" };
  const entries = Object.entries(input as Record<string, unknown>);
  if (entries.length > MAX_ANSWERS_ENTRIES) return { ok: false, error: "Too many answers" };
  const out: Record<string, string> = {};
  for (const [key, value] of entries) {
    if (!/^\d+$/.test(key)) return { ok: false, error: "Invalid answer key" };
    const numKey = Number(key);
    if (!Number.isInteger(numKey) || numKey < 1 || numKey > 1000) return { ok: false, error: "Invalid answer key" };
    if (typeof value !== "string" || !VALID_CHOICES.has(value)) return { ok: false, error: "Invalid answer value" };
    out[key] = value;
  }
  if (JSON.stringify(out).length > MAX_ANSWERS_BYTES) return { ok: false, error: "Answers payload too large" };
  return { ok: true, value: out };
}

// Per-test (per-variant) progress. Each exam stores a map of variant index ->
// { answers, submitted } plus the current variant the user is on. Persisted as
// JSON in the existing exam_progress.answers TEXT column (tagged __v: 2) so no
// schema migration is needed; legacy rows (a flat answers map) are converted to
// a single variant slot on read.
export type VariantSlot = { answers: Record<string, string>; submitted: boolean };
export type StoredProgress = { variants: Record<string, VariantSlot>; current: number };

export const MAX_VARIANTS = 60;

export function clampIndex(input: unknown): number {
  return typeof input === "number" && Number.isInteger(input) && input >= 0 ? Math.min(input, 1000) : 0;
}

export function parseStoredProgress(answersText: string, submittedInt: number, attemptCount: number): StoredProgress {
  let parsed: unknown;
  try {
    parsed = JSON.parse(answersText);
  } catch {
    return { variants: {}, current: clampIndex(attemptCount) };
  }
  if (parsed && typeof parsed === "object" && !Array.isArray(parsed) && (parsed as { __v?: unknown }).__v === 2) {
    const obj = parsed as { variants?: unknown; current?: unknown };
    const variants: Record<string, VariantSlot> = {};
    if (obj.variants && typeof obj.variants === "object" && !Array.isArray(obj.variants)) {
      for (const [key, value] of Object.entries(obj.variants as Record<string, unknown>)) {
        if (!/^\d+$/.test(key)) continue;
        if (!value || typeof value !== "object") continue;
        const slot = value as { answers?: unknown; submitted?: unknown };
        const validated = validateAnswers(slot.answers);
        if (!validated.ok) continue;
        variants[key] = { answers: validated.value, submitted: slot.submitted === true };
      }
    }
    return { variants, current: clampIndex(obj.current) };
  }
  // Legacy flat answers map — fold into a single variant slot for its attempt.
  const current = clampIndex(attemptCount);
  const validated = validateAnswers(parsed);
  if (!validated.ok) return { variants: {}, current };
  return { variants: { [String(current)]: { answers: validated.value, submitted: submittedInt === 1 } }, current };
}

export function serializeProgress(progress: StoredProgress): string {
  return JSON.stringify({ __v: 2, variants: progress.variants, current: progress.current });
}

// Best-effort parse of a JSON request body. Returns null on empty/malformed input.
export async function readJsonBody<T>(request: Request): Promise<T | null> {
  try {
    const text = await request.text();
    if (!text) return null;
    return JSON.parse(text) as T;
  } catch {
    return null;
  }
}
