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
      "cheatsheet",
      "home"
    ]);
    expect(preferredLandingPage([])).toBe("exams");
  });

  it("accepts unique known navigation page ids only", () => {
    expect(isNavigationPageIdArray(["home", "cheatsheet"])).toBe(true);
    expect(isNavigationPageIdArray(["home", "home"])).toBe(false);
    expect(isNavigationPageIdArray(["settings"])).toBe(false);
    expect(isNavigationPageIdArray(["learn"])).toBe(false);
  });

  it("can reduce the navigation to Exams and use it as the landing page", () => {
    const hidden = ["home", "cheatsheet"] as const;

    expect(visibleNavigationItems(hidden).map((item) => item.id)).toEqual(["exams"]);
    expect(preferredLandingPage(hidden)).toBe("exams");
  });

  it("keeps a safe destination if stored preferences are externally corrupted", () => {
    const allHidden = ["home", "cheatsheet", "exams"] as const;

    expect(visibleNavigationItems(allHidden).map((item) => item.id)).toEqual(["exams"]);
  });

  it("drops the removed Learn page from saved preferences but keeps the other choices", () => {
    const storage = memoryStorage({
      [NAVIGATION_VISIBILITY_STORAGE_KEY]: JSON.stringify(["home", "learn"]),
      "learning-completed-guides": JSON.stringify(["pat-eet-equipment"]),
      "learning-last-opened-guide": JSON.stringify("pat-eet-equipment")
    });

    migrateRemovedNavigationPages(storage);

    const migrated = JSON.parse(storage.values.get(NAVIGATION_VISIBILITY_STORAGE_KEY)!) as unknown;
    expect(migrated).toEqual(["home"]);
    expect(isNavigationPageIdArray(migrated)).toBe(true);
    expect(storage.values.has("learning-completed-guides")).toBe(false);
    expect(storage.values.has("learning-last-opened-guide")).toBe(false);
  });

  it("leaves current or unreadable preferences alone", () => {
    const current = memoryStorage({ [NAVIGATION_VISIBILITY_STORAGE_KEY]: JSON.stringify(["cheatsheet"]) });
    migrateRemovedNavigationPages(current);
    expect(current.values.get(NAVIGATION_VISIBILITY_STORAGE_KEY)).toBe(JSON.stringify(["cheatsheet"]));

    const corrupt = memoryStorage({ [NAVIGATION_VISIBILITY_STORAGE_KEY]: "{not json" });
    expect(() => migrateRemovedNavigationPages(corrupt)).not.toThrow();
    expect(corrupt.values.get(NAVIGATION_VISIBILITY_STORAGE_KEY)).toBe("{not json");
  });
});
