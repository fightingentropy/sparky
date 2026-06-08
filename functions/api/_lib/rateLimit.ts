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
