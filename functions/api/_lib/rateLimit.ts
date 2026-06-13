import type { Env } from "./auth";

// Best-effort, D1-backed fixed-window rate limiter. Atomic per row via an
// UPSERT with RETURNING, so the read-modify-write is a single round trip and
// concurrent requests against one bucket can't lose increments. Fails OPEN on
// any storage error — an infra blip must never lock legitimate users out.
//
// Returns true if the request is allowed (count within `limit`), false if the
// bucket is over its limit for the current window.
export async function rateLimit(
  env: Env,
  bucket: string,
  limit: number,
  windowMs: number,
  now: number
): Promise<boolean> {
  try {
    const row = await env.DB.prepare(
      `INSERT INTO rate_limits (bucket, count, window_start) VALUES (?1, 1, ?2)
       ON CONFLICT(bucket) DO UPDATE SET
         count = CASE WHEN ?2 - window_start >= ?3 THEN 1 ELSE count + 1 END,
         window_start = CASE WHEN ?2 - window_start >= ?3 THEN ?2 ELSE window_start END
       RETURNING count`
    )
      .bind(bucket, now, windowMs)
      .first<{ count: number }>();
    return (row?.count ?? 1) <= limit;
  } catch {
    return true;
  }
}

// Client IP from Cloudflare's connecting-IP header. Falls back to a shared
// "local" bucket in dev / when the header is absent.
export function clientIp(request: Request): string {
  return request.headers.get("CF-Connecting-IP") ?? "local";
}

const RATE_LIMIT_RETENTION_MS = 24 * 60 * 60 * 1000;

// Opportunistically prune buckets whose window ended well over a day ago, so a
// flood of distinct IP/email buckets can't grow the table without bound. Fires
// on ~2% of calls (cheap amortised cleanup) and is best-effort — any failure is
// ignored. Call via `waitUntil` so it never adds latency to the request.
export async function maybeCleanupRateLimits(env: Env, now: number): Promise<void> {
  if (crypto.getRandomValues(new Uint8Array(1))[0] >= 6) return; // ~2.3% (6/256)
  try {
    await env.DB.prepare("DELETE FROM rate_limits WHERE window_start < ?1")
      .bind(now - RATE_LIMIT_RETENTION_MS)
      .run();
  } catch {}
}
