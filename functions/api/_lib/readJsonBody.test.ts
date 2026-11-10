import { describe, expect, it } from "vitest";
import { readJsonBody } from "./auth";

function post(body: string | ReadableStream<Uint8Array>, headers: Record<string, string> = {}) {
  return new Request("https://example.test/api/x", {
    method: "POST",
    headers,
    body,
    // @ts-expect-error duplex is required by Node for stream bodies
    duplex: "half",
  });
}

describe("readJsonBody", () => {
  it("parses a small body", async () => {
    expect(await readJsonBody(post('{"a":1}'))).toEqual({ a: 1 });
  });

  it("rejects a body over the limit", async () => {
    expect(await readJsonBody(post(JSON.stringify({ a: "x".repeat(5000) })))).toBeNull();
    expect(await readJsonBody(post(JSON.stringify({ a: "x".repeat(5000) })), 10_000)).not.toBeNull();
  });

  it("stops reading a stream that exceeds the limit without a Content-Length", async () => {
    let pulled = 0;
    const stream = new ReadableStream<Uint8Array>({
      pull(controller) {
        pulled++;
        controller.enqueue(new Uint8Array(1024).fill(0x20));
        if (pulled > 1000) controller.close();
      },
    });
    expect(await readJsonBody(post(stream), 4096)).toBeNull();
    expect(pulled).toBeLessThan(20);
  });

  it("returns null for empty or malformed input", async () => {
    expect(await readJsonBody(post(""))).toBeNull();
    expect(await readJsonBody(post("{nope"))).toBeNull();
  });
});
