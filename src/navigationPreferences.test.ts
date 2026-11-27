import { describe, expect, it } from "vitest";
import {
  NAVIGATION_VISIBILITY_STORAGE_KEY,
  isNavigationPageIdArray,
  migrateRemovedNavigationPages,
  preferredLandingPage,
  visibleNavigationItems
} from "./navigationPreferences";

function memoryStorage(initial: Record<string, string>) {
  const values = new Map(Object.entries(initial));
  return {
    values,
    getItem: (key: string) => values.get(key) ?? null,
    setItem: (key: string, value: string) => void values.set(key, value),
    removeItem: (key: string) => void values.delete(key)
  };
}

describe("navigation visibility preferences", () => {
  it("puts Exams first in the primary navigation", () => {
    expect(visibleNavigationItems([]).map((item) => item.id)).toEqual([
      "exams",
      "learn",
      "cheatsheet",
      "home"
    ]);
    expect(preferredLandingPage([])).toBe("exams");
  });

  it("accepts unique known navigation page ids only", () => {
    expect(isNavigationPageIdArray(["home", "cheatsheet", "learn"])).toBe(true);
    expect(isNavigationPageIdArray(["home", "home"])).toBe(false);
    expect(isNavigationPageIdArray(["settings"])).toBe(false);
    expect(isNavigationPageIdArray(["guides"])).toBe(false);
  });

  it("can reduce the navigation to Exams and use it as the landing page", () => {
    const hidden = ["home", "cheatsheet", "learn"] as const;

    expect(visibleNavigationItems(hidden).map((item) => item.id)).toEqual(["exams"]);
    expect(preferredLandingPage(hidden)).toBe("exams");
  });

  it("keeps a safe destination if stored preferences are externally corrupted", () => {
    const allHidden = ["home", "cheatsheet", "learn", "exams"] as const;

    expect(visibleNavigationItems(allHidden).map((item) => item.id)).toEqual(["exams"]);
  });

  it("keeps a saved hidden Learn tab and clears the old study-guide progress", () => {
    const storage = memoryStorage({
      [NAVIGATION_VISIBILITY_STORAGE_KEY]: JSON.stringify(["home", "learn"]),
      "learning-completed-guides": JSON.stringify(["pat-eet-equipment"]),
      "learning-last-opened-guide": JSON.stringify("pat-eet-equipment"),
      "learn-roadmap-progress-v1": JSON.stringify({ route: "done" })
    });

    migrateRemovedNavigationPages(storage);

    const kept = JSON.parse(storage.values.get(NAVIGATION_VISIBILITY_STORAGE_KEY)!) as unknown;
    expect(kept).toEqual(["home", "learn"]);
    expect(isNavigationPageIdArray(kept)).toBe(true);
    expect(storage.values.has("learning-completed-guides")).toBe(false);
    expect(storage.values.has("learning-last-opened-guide")).toBe(false);
    expect(storage.values.get("learn-roadmap-progress-v1")).toBe(JSON.stringify({ route: "done" }));
  });

  it("survives storage that refuses to change", () => {
    const locked = {
      removeItem: () => {
        throw new Error("blocked");
      }
    };
    expect(() => migrateRemovedNavigationPages(locked)).not.toThrow();
  });
});
