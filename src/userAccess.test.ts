import { describe, expect, it } from "vitest";
import { isAdminUser } from "./userAccess";

describe("admin access", () => {
  it("recognises the configured admin email without depending on casing or whitespace", () => {
    expect(isAdminUser({ email: "erlin.hx@gmail.com" })).toBe(true);
    expect(isAdminUser({ email: "  ERLIN.HX@GMAIL.COM  " })).toBe(true);
  });

  it("does not treat other or signed-out users as admins", () => {
    expect(isAdminUser({ email: "student@example.com" })).toBe(false);
    expect(isAdminUser(null)).toBe(false);
    expect(isAdminUser(undefined)).toBe(false);
  });
});
