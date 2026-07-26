export const NAVIGATION_VISIBILITY_STORAGE_KEY = "pref-hidden-navigation-page-ids-v1";

export const NAVIGATION_ITEMS = [
  { id: "home", label: "Tools" },
  { id: "cheatsheet", label: "Notes" },
  { id: "learn", label: "Learn" },
  { id: "exams", label: "Exams" }
] as const;

export type NavigationPageId = (typeof NAVIGATION_ITEMS)[number]["id"];

const NAVIGATION_PAGE_ID_SET = new Set<string>(NAVIGATION_ITEMS.map((item) => item.id));

export function isNavigationPageId(value: unknown): value is NavigationPageId {
  return typeof value === "string" && NAVIGATION_PAGE_ID_SET.has(value);
}

export function isNavigationPageIdArray(value: unknown): value is NavigationPageId[] {
  if (!Array.isArray(value)) return false;
  const ids = value as unknown[];
  return ids.every(isNavigationPageId) && new Set(ids).size === ids.length;
}

export function visibleNavigationItems(hiddenPageIds: readonly NavigationPageId[]) {
  const hidden = new Set(hiddenPageIds);
  const visible = NAVIGATION_ITEMS.filter((item) => !hidden.has(item.id));

  // Invalid external edits must never leave the navigation without a destination.
  return visible.length > 0 ? visible : [NAVIGATION_ITEMS[0]];
}

export function preferredLandingPage(hiddenPageIds: readonly NavigationPageId[]): NavigationPageId {
  return visibleNavigationItems(hiddenPageIds)[0].id;
}
