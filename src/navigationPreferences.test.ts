import { describe, expect, it } from "vitest";
import {
  isNavigationPageIdArray,
  preferredLandingPage,
  visibleNavigationItems
} from "./navigationPreferences";

describe("navigation visibility preferences", () => {
  it("accepts unique known navigation page ids only", () => {
    expect(isNavigationPageIdArray(["home", "cheatsheet", "learn"])).toBe(true);
    expect(isNavigationPageIdArray(["home", "home"])).toBe(false);
    expect(isNavigationPageIdArray(["settings"])).toBe(false);
  });

  it("can reduce the navigation to Exams and use it as the landing page", () => {
    const hidden = ["home", "cheatsheet", "learn"] as const;

    expect(visibleNavigationItems(hidden).map((item) => item.id)).toEqual(["exams"]);
    expect(preferredLandingPage(hidden)).toBe("exams");
  });

  it("keeps a safe destination if stored preferences are externally corrupted", () => {
    const allHidden = ["home", "cheatsheet", "learn", "exams"] as const;

    expect(visibleNavigationItems(allHidden).map((item) => item.id)).toEqual(["home"]);
  });
});
