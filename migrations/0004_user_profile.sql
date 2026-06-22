-- Optional per-account profile fields. Both nullable: a user with no nickname
-- falls back to their email, and a user with no avatar falls back to an initial.
-- The avatar is stored inline as a size-bounded data: URL (the app resizes the
-- image client-side to a small square before upload), so no object storage is
-- needed and it syncs with the rest of the account.
ALTER TABLE users ADD COLUMN nickname TEXT;
ALTER TABLE users ADD COLUMN avatar TEXT;
