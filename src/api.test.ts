import { afterEach, describe, expect, it, vi } from "vitest";
import { saveExamProgress } from "./api";

function stubFetch() {
  const fetchMock = vi.fn(async () => new Response("{}", { status: 200 }));
  vi.stubGlobal("fetch", fetchMock);
  return fetchMock;
}

afterEach(() => vi.unstubAllGlobals());

describe("saveExamProgress", () => {
  it("sends keepalive when asked, so an unload-time flush is not cancelled", async () => {
    const fetchMock = stubFetch();
    await saveExamProgress("exam-1", 3, { index: 0, answers: { "1": "a" }, submitted: false }, { keepalive: true });
    const init = (fetchMock.mock.calls[0] as unknown as [string, RequestInit])[1];
    expect(init.keepalive).toBe(true);
    expect(init.method).toBe("PUT");
  });

  it("does not use keepalive for ordinary saves", async () => {
    const fetchMock = stubFetch();
    await saveExamProgress("exam-1", 3);
    const init = (fetchMock.mock.calls[0] as unknown as [string, RequestInit])[1];
    expect(init.keepalive).toBeUndefined();
  });
});
