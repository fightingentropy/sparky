import type { ApiUser } from "./api";

const ADMIN_EMAILS = new Set(["erlin.hx@gmail.com"]);

export function isAdminUser(user: Pick<ApiUser, "email"> | null | undefined): boolean {
  return Boolean(user && ADMIN_EMAILS.has(user.email.trim().toLowerCase()));
}
