import { describe, expect, it } from "vitest";
import { collectLocalData } from "./localDataExport";

function fakeStorage(entries: Record<string, string>) {
  const keys = Object.keys(entries);
  return {
    get length() {
      return keys.length;
    },
    key: (i: number) => keys[i] ?? null,
    getItem: (k: string) => entries[k] ?? null
  };
}

describe("collectLocalData", () => {
  it("exports stored values but never the session token", () => {
    const data = collectLocalData(
      fakeStorage({ "sparky-token": "secret-token", "ff-streak": "3", note: "not json" })
    );
    expect(data).toEqual({ "ff-streak": 3, note: "not json" });
    expect(JSON.stringify(data)).not.toContain("secret-token");
  });
});
