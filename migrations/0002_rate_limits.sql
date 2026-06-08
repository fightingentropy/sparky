-- Fixed-window rate-limit counters for auth endpoints. Keyed by an opaque
-- bucket string (e.g. "login:ip:1.2.3.4"). `window_start` is epoch ms.
CREATE TABLE IF NOT EXISTS rate_limits (
  bucket TEXT PRIMARY KEY,
  count INTEGER NOT NULL DEFAULT 0,
  window_start INTEGER NOT NULL
);
