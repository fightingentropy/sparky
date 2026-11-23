export const NAVIGATION_VISIBILITY_STORAGE_KEY = "pref-hidden-navigation-page-ids-v1";

export const NAVIGATION_ITEMS = [
  { id: "exams", label: "Exams" },
  { id: "cheatsheet", label: "Notes" },
  { id: "home", label: "Tools" }
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

// Pages that used to be in the primary navigation. Visibility preferences saved
// before they were removed may still list them, which would otherwise fail
// validation and discard every other hidden-tab choice.
const REMOVED_NAVIGATION_PAGE_IDS = new Set(["learn"]);

// Progress for the removed Learn page's study guides; nothing reads it now.
const REMOVED_LEARNING_STORAGE_KEYS = ["learning-completed-guides", "learning-last-opened-guide"];

type MigratableStorage = Pick<Storage, "getItem" | "setItem" | "removeItem">;

export function migrateRemovedNavigationPages(storage: MigratableStorage = localStorage): void {
  try {
    const stored = storage.getItem(NAVIGATION_VISIBILITY_STORAGE_KEY);
    const parsed = stored === null ? null : (JSON.parse(stored) as unknown);
    if (Array.isArray(parsed) && parsed.some((id) => REMOVED_NAVIGATION_PAGE_IDS.has(id as string))) {
      const kept = parsed.filter((id) => !REMOVED_NAVIGATION_PAGE_IDS.has(id as string));
      storage.setItem(NAVIGATION_VISIBILITY_STORAGE_KEY, JSON.stringify(kept));
    }
  } catch {}

  for (const key of REMOVED_LEARNING_STORAGE_KEYS) {
    try {
      storage.removeItem(key);
    } catch {}
  }
}
