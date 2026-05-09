import { describe, expect, it } from "vitest";
import { createJWT, hashPassword, verifyJWT, verifyPassword } from "./crypto";

describe("auth crypto helpers", () => {
  it("round-trips JWT payloads with unicode email addresses", async () => {
    const token = await createJWT(
      { sub: "user-1", email: "érlin@example.com", exp: Math.floor(Date.now() / 1000) + 60 },
      "test-secret"
    );

    const payload = await verifyJWT(token, "test-secret");

    expect(payload?.sub).toBe("user-1");
    expect(payload?.email).toBe("érlin@example.com");
  });

  it("rejects expired JWTs", async () => {
    const token = await createJWT(
      { sub: "user-1", email: "user@example.com", exp: Math.floor(Date.now() / 1000) - 1 },
      "test-secret"
    );

    await expect(verifyJWT(token, "test-secret")).resolves.toBeNull();
  });

  it("returns false for malformed password hashes", async () => {
    await expect(verifyPassword("password", "not-a-valid-hash")).resolves.toBe(false);
  });

  it("verifies valid password hashes", async () => {
    const hash = await hashPassword("correct horse battery staple");

    await expect(verifyPassword("correct horse battery staple", hash)).resolves.toBe(true);
    await expect(verifyPassword("wrong password", hash)).resolves.toBe(false);
  });
});
