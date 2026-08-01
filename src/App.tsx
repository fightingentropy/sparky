import { Suspense, lazy, memo, useCallback, useEffect, useMemo, useRef, useState, type CSSProperties, type ReactNode } from "react";
import {
  CONTAINMENT_OPTIONS,
  DEFAULT_CONTAINMENT_ROD_VALUES,
  DEFAULT_TRUNKING_OPPOSITE_VALUES,
  DEFAULT_TRAY_BEND_CUT_VALUES,
  DEFAULT_UNISTRUT_LENGTH_VALUES,
  calcContainmentRod,
  calcUnistrutLength,
  calcAngle,
  calcTrunkingOppositeMark,
  calcTrayBendCut,
  calcPower,
  calcVoltageDrop,
  calcBreaker,
  calcConduit,
  calcStructure,
  formulas,
  widthLabel,
  widthValue,
  type PhaseType,
  type PowerTarget,
  type BreakerInputMode,
  type UnistrutContainmentRow
} from "./calculators";
import { usePersistedState } from "./usePersistedState";
import { useHistory } from "./useHistory";
import { useFocusTrap } from "./useFocusTrap";
import { writeClipboardText } from "./clipboard";
import { scrollIntoViewSafely, scrollToSafely } from "./scroll";
import { isBoolean } from "./validators";
import { CopyableResult } from "./CopyableResult";
import { FormulaToggle } from "./FormulaToggle";
import {
  CONTAINMENT_ROD_STORAGE_KEYS,
  clearLegacyContainmentRodStorage
} from "./calculatorStorage";
import {
  DEFAULT_HIDDEN_EXAM_IDS,
  EXAM_REGISTRY,
  isExamIdArray,
  type ExamId
} from "./examRegistry";
// Lazy-load heavy pages so the home/cheat-sheet bundle stays small. The
// chunks are fetched the first time the user navigates to each page and the
// component stays mounted thereafter (so per-page state is preserved across
// navigation, same as before the split).
// memo() so a calculator keystroke (which re-renders the big App component)
// doesn't reconcile these heavy, already-mounted pages when their props are
// unchanged. Their props are referentially stable across keystrokes (isActive
// is a boolean; the navigation callbacks below are useCallback'd).
const ExamPage = memo(lazy(() => import("./ExamPage").then((m) => ({ default: m.ExamPage }))));
const LearningPage = memo(lazy(() => import("./LearningPage").then((m) => ({ default: m.LearningPage }))));
const TutorialsPage = memo(lazy(() => import("./TutorialsPage").then((m) => ({ default: m.TutorialsPage }))));
const InteractivePage = memo(lazy(() => import("./InteractivePage").then((m) => ({ default: m.InteractivePage }))));
import { TUTORIALS } from "./tutorials";
import { COURSE_GUIDES, GUIDE_CATEGORY_LABELS } from "./courseGuides";
import { useAuth } from "./AuthContext";
import { AuthModal } from "./AuthModal";
import { SettingsPage } from "./SettingsPage";
import { AccountAvatar } from "./AccountAvatar";
import { AppBackground } from "./AppBackground";
import {
  NAVIGATION_ITEMS,
  NAVIGATION_VISIBILITY_STORAGE_KEY,
  isNavigationPageIdArray,
  preferredLandingPage,
  visibleNavigationItems,
  type NavigationPageId
} from "./navigationPreferences";
import {
  CHEAT_SHEET_SECTIONS,
  type CheatSheetSection,
  type ReferenceTable
} from "./cheatSheetSections";

type PageId = NavigationPageId | "tutorials" | "interactive" | "settings";

type Applet = {
  id: string;
  title: string;
  subtitle: string;
  keywords: string;
};

type PaletteItem = {
  title: string;
  subtitle: string;
  tag: string;
  keywords: string;
  action: () => void;
};

type PracticeLink = {
  examId: ExamId;
  label: string;
};

type AngleUnit = "mm" | "cm" | "m";
type ColorTheme = "dark" | "light";

function isColorTheme(value: unknown): value is ColorTheme {
  return value === "dark" || value === "light";
}

const DEFAULT_PAGE: NavigationPageId = "home";

const PAGE_NAV_ITEMS: { id: PageId; label: string }[] = [
  ...NAVIGATION_ITEMS,
  { id: "tutorials", label: "Tutorials" },
  { id: "interactive", label: "Interactive" }
];

const PRIMARY_NAV_ITEMS = NAVIGATION_ITEMS;

// The primary pages surfaced in the mobile bottom tab bar. The remaining pages
// (Tutorials, Interactive, Settings) stay reachable from the avatar menu and the
// command palette, both of which list every page. The bar is hidden on the exams
// page, which has its own fixed bottom action bar.
const MOBILE_TAB_ITEMS: { id: NavigationPageId; label: string; icon: ReactNode }[] = [
  {
    id: "home",
    label: "Tools",
    icon: (
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    )
  },
  {
    id: "cheatsheet",
    label: "Notes",
    icon: (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M16 13H8" />
        <path d="M16 17H8" />
        <path d="M10 9H8" />
      </>
    )
  },
  {
    id: "learn",
    label: "Learn",
    icon: (
      <>
        <path d="M22 10 12 5 2 10l10 5z" />
        <path d="M6 12v4c0 1.7 2.7 3 6 3s6-1.3 6-3v-4" />
        <path d="M22 10v5" />
      </>
    )
  },
  {
    id: "exams",
    label: "Exams",
    icon: (
      <>
        <rect width="8" height="4" x="8" y="2" rx="1" />
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <path d="m9 14 2 2 4-4" />
      </>
    )
  }
];
const ANGLE_UNITS: readonly AngleUnit[] = ["mm", "cm", "m"];
const POWER_TARGETS: readonly PowerTarget[] = ["power", "current", "voltage"];
const PHASE_TYPES: readonly PhaseType[] = ["single", "three"];
const BREAKER_INPUT_MODES: readonly BreakerInputMode[] = ["current", "power"];
const powerConfig: Record<
  PowerTarget,
  {
    label: string;
    unit: string;
    inputLabels: [string, string];
  }
> = {
  power: {
    label: "Power",
    unit: "kW",
    inputLabels: ["Current (A)", "Voltage (V)"]
  },
  current: {
    label: "Current",
    unit: "A",
    inputLabels: ["Power (kW)", "Voltage (V)"]
  },
  voltage: {
    label: "Voltage",
    unit: "V",
    inputLabels: ["Power (kW)", "Current (A)"]
  }
};

const cheatSheetSections = CHEAT_SHEET_SECTIONS;

const NOTE_PRACTICE_LINKS: Record<string, PracticeLink[]> = {
  "cheat-core-formulas": [{ examId: "level-2-electrical-installation", label: "Level 2" }],
  "cheat-key-definitions": [{ examId: "level-2-electrical-installation", label: "Level 2" }],
  "cheat-protection-devices": [
    { examId: "level-2-electrical-installation", label: "Level 2" },
    { examId: "18th-edition", label: "Wiring Regulations (18th Edition)" }
  ],
  "cheat-regulations": [
    { examId: "building-regulations", label: "Building Regulations" },
    { examId: "18th-edition", label: "Wiring Regulations (18th Edition)" }
  ],
  "cheat-safe-zones": [
    { examId: "building-regulations", label: "Building Regulations" },
    { examId: "18th-edition", label: "Wiring Regulations (18th Edition)" }
  ],
  "cheat-structural-limits": [{ examId: "building-regulations", label: "Building Regulations" }],
  "cheat-site-math": [{ examId: "level-2-electrical-installation", label: "Level 2" }],
  "cheat-course-earthing-systems": [{ examId: "18th-edition", label: "Wiring Regulations (18th Edition)" }],
  "cheat-course-earthing-bonding-sizing": [{ examId: "18th-edition", label: "Wiring Regulations (18th Edition)" }],
  "cheat-course-supplementary-bonding": [{ examId: "18th-edition", label: "Wiring Regulations (18th Edition)" }],
  "cheat-course-disconnection-times": [{ examId: "18th-edition", label: "Wiring Regulations (18th Edition)" }],
  "cheat-course-zs-tables": [{ examId: "18th-edition", label: "Wiring Regulations (18th Edition)" }],
  "cheat-course-rcd-types": [{ examId: "18th-edition", label: "Wiring Regulations (18th Edition)" }],
  "cheat-course-where-rcd-required": [{ examId: "18th-edition", label: "Wiring Regulations (18th Edition)" }],
  "cheat-course-consumer-unit": [{ examId: "18th-edition", label: "Wiring Regulations (18th Edition)" }],
  "cheat-course-cable-design-sequence": [{ examId: "18th-edition", label: "Wiring Regulations (18th Edition)" }],
  "cheat-course-correction-factors": [{ examId: "18th-edition", label: "Wiring Regulations (18th Edition)" }],
  "cheat-course-cable-resistance": [
    { examId: "fundamental-inspection-testing", label: "Fundamental Inspection and Testing" },
    { examId: "initial-verification", label: "Initial Verification" },
    { examId: "level-2-electrical-installation", label: "Level 2" }
  ],
  "cheat-course-volt-drop": [{ examId: "18th-edition", label: "Wiring Regulations (18th Edition)" }],
  "cheat-course-final-circuit-specs": [{ examId: "18th-edition", label: "Wiring Regulations (18th Edition)" }],
  "cheat-course-iv-test-sequence": [
    { examId: "fundamental-inspection-testing", label: "Fundamental Inspection and Testing" },
    { examId: "initial-verification", label: "Initial Verification" }
  ],
  "cheat-course-test-methods": [
    { examId: "fundamental-inspection-testing", label: "Fundamental Inspection and Testing" },
    { examId: "initial-verification", label: "Initial Verification" }
  ],
  "cheat-course-ir-detail": [
    { examId: "fundamental-inspection-testing", label: "Fundamental Inspection and Testing" },
    { examId: "initial-verification", label: "Initial Verification" }
  ],
  "cheat-course-pat-testing": [
    { examId: "pat-testing", label: "Portable Appliance Testing" }
  ],
  "cheat-course-eicr-codes": [
    { examId: "periodic-inspection", label: "Periodic Inspection and Testing (Condition Reporting)" }
  ],
  "cheat-course-eicr-procedure": [
    { examId: "periodic-inspection", label: "Periodic Inspection and Testing (Condition Reporting)" }
  ],
  "cheat-course-bathroom-zones": [{ examId: "18th-edition", label: "Wiring Regulations (18th Edition)" }],
  "cheat-course-iv-inspection-checklist": [
    { examId: "fundamental-inspection-testing", label: "Fundamental Inspection and Testing" },
    { examId: "initial-verification", label: "Initial Verification" }
  ],
  "cheat-course-safe-isolation": [
    { examId: "fundamental-inspection-testing", label: "Fundamental Inspection and Testing" },
    { examId: "initial-verification", label: "Initial Verification" },
    { examId: "am2-installation-assessment", label: "AM2" }
  ],
  "cheat-course-instruments-gs38": [
    { examId: "fundamental-inspection-testing", label: "Fundamental Inspection and Testing" },
    { examId: "initial-verification", label: "Initial Verification" }
  ],
  "cheat-course-rcd-trip-times": [
    { examId: "fundamental-inspection-testing", label: "Fundamental Inspection and Testing" },
    { examId: "initial-verification", label: "Initial Verification" }
  ],
  "cheat-course-supply-intake": [{ examId: "18th-edition", label: "Wiring Regulations (18th Edition)" }],
  "cheat-course-adiabatic-pfc": [{ examId: "18th-edition", label: "Wiring Regulations (18th Edition)" }],
  "cheat-course-three-phase-basics": [{ examId: "18th-edition", label: "Wiring Regulations (18th Edition)" }],
  "cheat-course-special-cables-fp200": [{ examId: "18th-edition", label: "Wiring Regulations (18th Edition)" }],
  "cheat-course-buried-cables-outbuildings": [{ examId: "18th-edition", label: "Wiring Regulations (18th Edition)" }],
  "cheat-course-conduit-sizing": [{ examId: "18th-edition", label: "Wiring Regulations (18th Edition)" }],
  "cheat-course-diversity": [{ examId: "18th-edition", label: "Wiring Regulations (18th Edition)" }],
  "cheat-course-eic-paperwork": [
    { examId: "fundamental-inspection-testing", label: "Fundamental Inspection and Testing" },
    { examId: "initial-verification", label: "Initial Verification" },
    { examId: "periodic-inspection", label: "Periodic Inspection and Testing (Condition Reporting)" }
  ],
  "cheat-course-protective-measures": [{ examId: "18th-edition", label: "Wiring Regulations (18th Edition)" }]
};

const applets: Applet[] = [
  {
    id: "tool-tray-bend-cut",
    title: "Containment bend cut",
    subtitle: "Notch marks, tray or trunking",
    keywords:
      "containment bend cut twice segmented notch gusset 90 degree right angle inside angle deflection setback mark tangent number of cuts width tray trunking basket ladder cable corner turn"
  },
  {
    id: "tool-angle",
    title: "Angle drop",
    subtitle: "Drop and developed length",
    keywords: "angle drop tray bracket piece length offset trig 45 degree bend top straight bottom straight allowance developed length"
  }
];

const toolHints = {
  containmentRod:
    "Actual drop = overall height - top of Unistrut. Rod cut length = actual drop + buffer. Bottom of Unistrut drop = actual drop + Unistrut depth.",
  unistrutLength:
    "Length = total containment widths + left allowance + right allowance + ((containments - 1) x gap). Side allowances cover the rod or square plate position at each end.",
  angle: "Angled length = drop / sin(theta). Advanced: total = top + angled + bottom + allowance.",
  trunkingOpposite:
    "Calculation angle = desired bend angle / 2. Opposite = tan(calculation angle) x adjacent. Use adjacent 100 mm for 100 mm trunking.",
  trayBendCut:
    "Bend per cut = total bend angle / cuts. Each cut mark = tan(bend per cut / 2) x containment width.",
  power: "Single-phase: P = V x I x PF. Three-phase: P = sqrt(3) x V x I x PF.",
  vdrop: "Single-phase: Vd = 2 x I x L x rho / A. Three-phase: Vd = sqrt(3) x I x L x rho / A.",
  breaker: "Rounds design current up to the next standard breaker size.",
  conduit: "Fill % = total cable area / conduit area x 100.",
  structure: "Vertical chase = wall / 3. Horizontal chase = wall / 6. Joist notch = depth x 0.125."
} as const;

function normalize(text: string) {
  return text.toLowerCase();
}

function getTerms(query: string) {
  return normalize(query)
    .split(/\s+/)
    .map((term) => term.trim())
    .filter(Boolean);
}

function matchesQuery(haystack: string, query: string) {
  const terms = getTerms(query);
  if (!terms.length) return true;
  const normalizedHaystack = normalize(haystack);
  return terms.every((term) => normalizedHaystack.includes(term));
}

function referenceTableText(table: ReferenceTable) {
  return [table.title, ...table.headers, ...table.rows.flat()].join(" ");
}

function referenceTableClipboardText(table: ReferenceTable) {
  const header = table.headers.join(" | ");
  const rows = table.rows.map((row) => row.join(" | "));
  return [table.title, header, ...rows].join("\n");
}

function isOneOf<T extends string>(options: readonly T[], value: unknown): value is T {
  return typeof value === "string" && options.includes(value as T);
}

function isStringArrayValue(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === "string");
}

function isAngleUnit(value: unknown): value is AngleUnit {
  return isOneOf(ANGLE_UNITS, value);
}

function isPowerTarget(value: unknown): value is PowerTarget {
  return isOneOf(POWER_TARGETS, value);
}

function isPhaseType(value: unknown): value is PhaseType {
  return isOneOf(PHASE_TYPES, value);
}

function isBreakerInputMode(value: unknown): value is BreakerInputMode {
  return isOneOf(BREAKER_INPUT_MODES, value);
}

function isUnistrutContainmentRow(value: unknown): value is UnistrutContainmentRow {
  if (!value || typeof value !== "object" || Array.isArray(value)) return false;

  const row = value as Partial<UnistrutContainmentRow>;
  if (!Number.isInteger(row.id) || typeof row.label !== "string" || typeof row.width !== "string") {
    return false;
  }

  const option = CONTAINMENT_OPTIONS.find((o) => o.label === row.label);
  return Boolean(option?.widths.some((width) => String(widthValue(width)) === row.width));
}

function isUnistrutContainments(value: unknown): value is UnistrutContainmentRow[] {
  return Array.isArray(value) && value.every(isUnistrutContainmentRow);
}

function ToolTitle({ title, hint }: { title: string; hint: string }) {
  return (
    <div className="tool-title-wrap">
      <h3 className="tool-title" tabIndex={0}>
        {title}
      </h3>
      <div className="tool-tooltip" role="tooltip">
        {hint}
      </div>
    </div>
  );
}

function PresetButtons({
  ariaLabel,
  presets
}: {
  ariaLabel: string;
  presets: Array<{ label: string; onSelect: () => void }>;
}) {
  return (
    <div className="preset-row" role="group" aria-label={ariaLabel}>
      {presets.map((preset) => (
        <button key={preset.label} type="button" className="preset-button" onClick={preset.onSelect}>
          {preset.label}
        </button>
      ))}
    </div>
  );
}

function getPageFromLocation(): PageId {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  if (path === "/notes" || path === "/cheatsheet") return "cheatsheet";
  if (path === "/learn" || path === "/guides") return "learn";
  if (path === "/exams") return "exams";
  if (path === "/tutorials") return "tutorials";
  if (path === "/interactive") return "interactive";
  if (path === "/settings") return "settings";
  return DEFAULT_PAGE;
}

function getPageHref(page: PageId): string {
  switch (page) {
    case "home":
      return "/";
    case "cheatsheet":
      return "/notes";
    case "learn":
      return "/learn";
    case "exams":
      return "/exams";
    case "tutorials":
      return "/tutorials";
    case "interactive":
      return "/interactive";
    case "settings":
      return "/settings";
  }
}

export default function App() {
  const { entries: historyEntries, addEntry: addHistoryEntry, clearHistory } = useHistory();
  const [historyOpen, setHistoryOpen] = useState(false);
  const { user, logout } = useAuth();
  const [authOpen, setAuthOpen] = useState(false);
  const [reduceMotion, setReduceMotion] = usePersistedState<boolean>("pref-reduce-motion", false, isBoolean);
  const [comfortableText, setComfortableText] = usePersistedState<boolean>("pref-comfortable-text", false, isBoolean);
  const [colorTheme, setColorTheme] = usePersistedState<ColorTheme>("pref-color-theme", "dark", isColorTheme);
  const [hiddenExamIds, setHiddenExamIds] = usePersistedState<ExamId[]>(
    "pref-hidden-exam-ids-v2",
    [...DEFAULT_HIDDEN_EXAM_IDS],
    isExamIdArray
  );
  const [hiddenNavigationPageIds, setHiddenNavigationPageIds] = usePersistedState<NavigationPageId[]>(
    NAVIGATION_VISIBILITY_STORAGE_KEY,
    [],
    isNavigationPageIdArray
  );
  const [navMenuOpen, setNavMenuOpen] = useState(false);
  const navMenuRef = useRef<HTMLDivElement | null>(null);
  const navMenuButtonRef = useRef<HTMLButtonElement | null>(null);

  // Apply the reduce-motion preference globally by toggling a class on <html>
  // (the matching CSS mirrors the prefers-reduced-motion media query).
  useEffect(() => {
    document.documentElement.classList.toggle("reduce-motion", reduceMotion);
  }, [reduceMotion]);

  useEffect(() => {
    document.documentElement.classList.toggle("comfortable-text", comfortableText);
  }, [comfortableText]);

  useEffect(() => {
    document.documentElement.dataset.theme = colorTheme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      "content",
      colorTheme === "light" ? "#f6f9fc" : "#16130f"
    );
  }, [colorTheme]);

  const displayName = user ? (user.nickname?.trim() || user.email) : null;
  const visiblePrimaryNavItems = useMemo(
    () => visibleNavigationItems(hiddenNavigationPageIds),
    [hiddenNavigationPageIds]
  );
  const visibleNavigationPageIdSet = useMemo(
    () => new Set(visiblePrimaryNavItems.map((item) => item.id)),
    [visiblePrimaryNavItems]
  );
  const visibleMobileTabItems = useMemo(
    () => MOBILE_TAB_ITEMS.filter((item) => visibleNavigationPageIdSet.has(item.id)),
    [visibleNavigationPageIdSet]
  );
  const landingPage = visiblePrimaryNavItems[0].id;

  const [page, setPage] = useState<PageId>(() => {
    const requestedPage = getPageFromLocation();
    if (requestedPage === DEFAULT_PAGE && !visibleNavigationPageIdSet.has(DEFAULT_PAGE)) {
      return preferredLandingPage(hiddenNavigationPageIds);
    }
    return requestedPage;
  });
  const initialLandingRedirectedRef = useRef(false);
  useEffect(() => {
    if (initialLandingRedirectedRef.current) return;
    initialLandingRedirectedRef.current = true;
    if (getPageFromLocation() !== DEFAULT_PAGE || page === DEFAULT_PAGE) return;
    window.history.replaceState(null, "", getPageHref(page));
  }, [page]);
  // Track which lazy-loaded pages we have ever activated. We only mount each
  // lazy page after its first activation so its chunk isn't downloaded for
  // users who never visit it. After the first visit it stays mounted so its
  // state is preserved when the user navigates away and back.
  const [visitedPages, setVisitedPages] = useState<Set<PageId>>(() => new Set([page]));
  useEffect(() => {
    setVisitedPages((prev) => (prev.has(page) ? prev : new Set(prev).add(page)));
  }, [page]);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [paletteQuery, setPaletteQuery] = useState("");
  const [activePaletteIndex, setActivePaletteIndex] = useState(0);
  const [helpOpen, setHelpOpen] = useState(false);
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [copiedSectionId, setCopiedSectionId] = useState<string | null>(null);
  const [noteQuery, setNoteQuery] = useState("");
  const [savedNoteIds, setSavedNoteIds] = usePersistedState<string[]>("saved-note-ids", [], isStringArrayValue);
  const [showSavedNotes, setShowSavedNotes] = useState(false);
  const [expandedNoteIds, setExpandedNoteIds] = useState<Set<string>>(() => new Set());
  const [highlightedNoteId, setHighlightedNoteId] = useState<string | null>(null);
  const [examPracticeTarget, setExamPracticeTarget] = useState<{ examId: ExamId; nonce: number } | null>(null);

  const paletteTrapRef = useFocusTrap<HTMLDivElement>(paletteOpen);
  const helpTrapRef = useFocusTrap<HTMLDivElement>(helpOpen);
  const historyTrapRef = useFocusTrap<HTMLDivElement>(historyOpen);

  // ── Persisted calculator state ──
  const [containmentRodOverallHeight, setContainmentRodOverallHeight] = usePersistedState<string>(
    CONTAINMENT_ROD_STORAGE_KEYS.overallHeight,
    DEFAULT_CONTAINMENT_ROD_VALUES.overallHeight
  );
  const [containmentRodTopOfUnistrut, setContainmentRodTopOfUnistrut] = usePersistedState<string>(
    CONTAINMENT_ROD_STORAGE_KEYS.topOfUnistrut,
    DEFAULT_CONTAINMENT_ROD_VALUES.topOfUnistrut
  );
  const [containmentRodBuffer, setContainmentRodBuffer] = usePersistedState<string>(
    CONTAINMENT_ROD_STORAGE_KEYS.buffer,
    DEFAULT_CONTAINMENT_ROD_VALUES.buffer
  );
  const [containmentRodUnistrutDepth, setContainmentRodUnistrutDepth] = usePersistedState<string>(
    CONTAINMENT_ROD_STORAGE_KEYS.unistrutDepth,
    DEFAULT_CONTAINMENT_ROD_VALUES.unistrutDepth
  );
  const [unistrutContainments, setUnistrutContainments] = usePersistedState<UnistrutContainmentRow[]>(
    "ul-containments",
    DEFAULT_UNISTRUT_LENGTH_VALUES.containments.map((c) => ({ ...c })),
    isUnistrutContainments
  );
  const [unistrutCountInput, setUnistrutCountInput] = useState(
    String(DEFAULT_UNISTRUT_LENGTH_VALUES.containments.length)
  );
  const [unistrutLeftAllowance, setUnistrutLeftAllowance] = usePersistedState<string>(
    "ul-left",
    DEFAULT_UNISTRUT_LENGTH_VALUES.leftAllowance
  );
  const [unistrutRightAllowance, setUnistrutRightAllowance] = usePersistedState<string>(
    "ul-right",
    DEFAULT_UNISTRUT_LENGTH_VALUES.rightAllowance
  );
  const [unistrutGap, setUnistrutGap] = usePersistedState<string>(
    "ul-gap",
    DEFAULT_UNISTRUT_LENGTH_VALUES.gap
  );

  const [angleDrop, setAngleDrop] = usePersistedState("angle-drop", "10");
  const [angleValue, setAngleValue] = usePersistedState("angle-value", "45");
  const [angleTopStraight, setAngleTopStraight] = usePersistedState("angle-top", "0");
  const [angleBottomStraight, setAngleBottomStraight] = usePersistedState("angle-bottom", "0");
  const [angleAllowance, setAngleAllowance] = usePersistedState("angle-allowance", "0");
  const [angleUnit, setAngleUnit] = usePersistedState<AngleUnit>("angle-unit", "cm", isAngleUnit);
  const [angleTopBend, setAngleTopBend] = usePersistedState("angle-top-bend", false, isBoolean);
  const [angleBottomBend, setAngleBottomBend] = usePersistedState("angle-bottom-bend", false, isBoolean);
  const [angleBendHeight, setAngleBendHeight] = usePersistedState("angle-bend-height", "5");
  const [angleAdvanced, setAngleAdvanced] = useState(false);

  const [trunkingOppositeAngle, setTrunkingOppositeAngle] = usePersistedState<string>(
    "to-angle",
    DEFAULT_TRUNKING_OPPOSITE_VALUES.angle
  );
  const [trunkingOppositeAdjacent, setTrunkingOppositeAdjacent] = usePersistedState<string>(
    "to-adjacent",
    DEFAULT_TRUNKING_OPPOSITE_VALUES.adjacent
  );

  const [trayBendAngle, setTrayBendAngle] = usePersistedState<string>(
    "tbc-bend-angle",
    DEFAULT_TRAY_BEND_CUT_VALUES.bendAngle
  );
  const [trayBendCuts, setTrayBendCuts] = usePersistedState<string>(
    "tbc-cuts",
    DEFAULT_TRAY_BEND_CUT_VALUES.cuts
  );
  const [trayBendWidth, setTrayBendWidth] = usePersistedState<string>(
    "tbc-width",
    DEFAULT_TRAY_BEND_CUT_VALUES.width
  );

  const [powerTarget, setPowerTarget] = usePersistedState<PowerTarget>("power-target", "current", isPowerTarget);
  const [powerPhase, setPowerPhase] = usePersistedState<PhaseType>("power-phase", "single", isPhaseType);
  const [powerValueA, setPowerValueA] = usePersistedState("power-a", "1");
  const [powerValueB, setPowerValueB] = usePersistedState("power-b", "230");
  const [powerPf, setPowerPf] = usePersistedState("power-pf", "0.95");

  const [vdropPhase, setVdropPhase] = usePersistedState<PhaseType>("vdrop-phase", "single", isPhaseType);
  const [vdropCurrent, setVdropCurrent] = usePersistedState("vdrop-current", "20");
  const [vdropLength, setVdropLength] = usePersistedState("vdrop-length", "20");
  const [vdropCableSize, setVdropCableSize] = usePersistedState("vdrop-cable", "2.5");
  const [vdropVoltage, setVdropVoltage] = usePersistedState("vdrop-voltage", "230");

  const [breakerMode, setBreakerMode] = usePersistedState<BreakerInputMode>("breaker-mode", "current", isBreakerInputMode);
  const [breakerCurrent, setBreakerCurrent] = usePersistedState("breaker-current", "18");
  const [breakerPower, setBreakerPower] = usePersistedState("breaker-power", "4");
  const [breakerPhase, setBreakerPhase] = usePersistedState<PhaseType>("breaker-phase", "single", isPhaseType);
  const [breakerVoltage, setBreakerVoltage] = usePersistedState("breaker-voltage", "230");
  const [breakerPf, setBreakerPf] = usePersistedState("breaker-pf", "0.95");

  const [conduitDiameter, setConduitDiameter] = usePersistedState("conduit-dia", "20");
  const [conduitCableDiameter, setConduitCableDiameter] = usePersistedState("conduit-cable", "6");
  const [conduitCableCount, setConduitCableCount] = usePersistedState("conduit-count", "3");
  const [conduitMaxFill, setConduitMaxFill] = usePersistedState("conduit-fill", "40");

  const [structureWall, setStructureWall] = usePersistedState("struct-wall", "100");
  const [structureJoist, setStructureJoist] = usePersistedState("struct-joist", "200");

  const [activeToolIndex, setActiveToolIndex] = useState(0);
  const [toolGridHeight, setToolGridHeight] = useState<number | null>(null);

  const toolGridRef = useRef<HTMLDivElement | null>(null);
  const paletteInputRef = useRef<HTMLInputElement | null>(null);
  const nextUnistrutContainmentIdRef = useRef(
    Math.max(...unistrutContainments.map((c) => c.id), 0) + 1
  );
  const copiedSectionTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    clearLegacyContainmentRodStorage();
  }, []);

  // Sync count input when containments change (e.g. from localStorage load)
  useEffect(() => {
    setUnistrutCountInput(String(unistrutContainments.length));
  }, [unistrutContainments.length]);

  // useCallback so the page components below stay referentially stable as
  // props and their React.memo wrappers can skip re-renders. Only stable
  // setters / module-scope helpers are referenced, so the deps are empty.
  const navigateTo = useCallback((nextPage: PageId, targetId?: string) => {
    window.history.pushState(null, "", getPageHref(nextPage));
    setPage(nextPage);

    if (targetId) {
      window.setTimeout(() => {
        scrollIntoViewSafely(document.getElementById(targetId), { block: "start" });
      }, 50);
    }
  }, []);

  const openPracticeExam = useCallback(
    (examId: ExamId) => {
      setExamPracticeTarget({ examId, nonce: Date.now() });
      navigateTo("exams");
    },
    [navigateTo]
  );

  const setExamVisibility = useCallback(
    (examId: ExamId, visible: boolean) => {
      setHiddenExamIds((current) => {
        const hidden = current.includes(examId);
        if (visible) return hidden ? current.filter((id) => id !== examId) : current;
        if (hidden || EXAM_REGISTRY.length - current.length <= 1) return current;
        return [...current, examId];
      });
    },
    [setHiddenExamIds]
  );

  const setNavigationVisibility = useCallback(
    (pageId: NavigationPageId, visible: boolean) => {
      setHiddenNavigationPageIds((current) => {
        const hidden = current.includes(pageId);
        if (visible) return hidden ? current.filter((id) => id !== pageId) : current;
        if (hidden || NAVIGATION_ITEMS.length - current.length <= 1) return current;
        return [...current, pageId];
      });
    },
    [setHiddenNavigationPageIds]
  );

  const handleOpenNote = useCallback(
    (noteId: string) => {
      setExpandedNoteIds((current) => new Set(current).add(noteId));
      setHighlightedNoteId(noteId);
      navigateTo("cheatsheet", noteId);
      window.setTimeout(() => setHighlightedNoteId((current) => (current === noteId ? null : current)), 2200);
    },
    [navigateTo]
  );

  function scrollToTool(index: number) {
    const grid = toolGridRef.current;
    if (!grid) return;
    const maxIndex = Math.max(filteredApplets.length - 1, 0);
    const nextIndex = Math.min(Math.max(index, 0), maxIndex);
    setActiveToolIndex((current) => (current === nextIndex ? current : nextIndex));
    scrollToSafely(grid, { left: grid.clientWidth * nextIndex });
    scrollIntoViewSafely(grid, { block: "start" });
  }

  function openCommandPalette() {
    setPaletteQuery("");
    setPaletteOpen(true);
  }

  function clearContainmentRod() {
    setContainmentRodOverallHeight("");
    setContainmentRodTopOfUnistrut("");
    setContainmentRodBuffer("");
    setContainmentRodUnistrutDepth("");
  }

  function applyContainmentRodPreset(overallHeight: string, topOfUnistrut: string, buffer: string, unistrutDepth: string) {
    setContainmentRodOverallHeight(overallHeight);
    setContainmentRodTopOfUnistrut(topOfUnistrut);
    setContainmentRodBuffer(buffer);
    setContainmentRodUnistrutDepth(unistrutDepth);
  }

  function buildUnistrutContainmentRow(): UnistrutContainmentRow {
    const firstOption = CONTAINMENT_OPTIONS[0];
    return {
      id: nextUnistrutContainmentIdRef.current++,
      label: firstOption.label,
      width: String(widthValue(firstOption.widths[0]))
    };
  }

  function setUnistrutContainmentCount(nextCount: number) {
    // Cap at a sane upper bound to avoid pathological inputs (e.g. someone
    // pasting a huge number) freezing the tab or blowing the localStorage
    // quota.
    const MAX_CONTAINMENTS = 50;
    const normalizedCount = Number.isFinite(nextCount)
      ? Math.min(MAX_CONTAINMENTS, Math.max(0, Math.trunc(nextCount)))
      : 0;

    setUnistrutContainments((current) => {
      if (normalizedCount === current.length) return current;
      if (normalizedCount < current.length) return current.slice(0, normalizedCount);

      const nextRows = [...current];
      while (nextRows.length < normalizedCount) {
        nextRows.push(buildUnistrutContainmentRow());
      }
      return nextRows;
    });
  }

  function addUnistrutContainmentRow() {
    setUnistrutContainments((current) => {
      const next = [...current, buildUnistrutContainmentRow()];
      setUnistrutCountInput(String(next.length));
      return next;
    });
  }

  function removeUnistrutContainmentRow(id: number) {
    setUnistrutContainments((current) => {
      const next = current.filter((c) => c.id !== id);
      setUnistrutCountInput(String(next.length));
      return next;
    });
  }

  function updateUnistrutContainmentRow(
    id: number,
    field: "label" | "width",
    value: string
  ) {
    setUnistrutContainments((current) =>
      current.map((containment) => {
        if (containment.id !== id) return containment;
        if (field === "label") {
          const option = CONTAINMENT_OPTIONS.find((o) => o.label === value);
          const currentWidth = Number.parseFloat(containment.width);
          const keepWidth = option && option.widths.some((w) => widthValue(w) === currentWidth);
          return {
            ...containment,
            label: value,
            width: keepWidth ? containment.width : option ? String(widthValue(option.widths[0])) : ""
          };
        }
        return { ...containment, [field]: value };
      })
    );
  }

  function clearUnistrutLength() {
    setUnistrutContainments([]);
    setUnistrutCountInput("0");
    setUnistrutLeftAllowance(DEFAULT_UNISTRUT_LENGTH_VALUES.leftAllowance);
    setUnistrutRightAllowance(DEFAULT_UNISTRUT_LENGTH_VALUES.rightAllowance);
    setUnistrutGap(DEFAULT_UNISTRUT_LENGTH_VALUES.gap);
  }

  function applyUnistrutPreset(
    containments: Array<{ label: string; width: string }>,
    sideAllowance: string,
    gap: string
  ) {
    const nextRows = containments.map((containment) => ({
      id: nextUnistrutContainmentIdRef.current++,
      label: containment.label,
      width: containment.width
    }));
    setUnistrutContainments(nextRows);
    setUnistrutCountInput(String(nextRows.length));
    setUnistrutLeftAllowance(sideAllowance);
    setUnistrutRightAllowance(sideAllowance);
    setUnistrutGap(gap);
  }

  function applyAnglePreset(
    drop: string,
    angle: string,
    unit: AngleUnit,
    topStraight = "0",
    bottomStraight = "0",
    allowance = "0"
  ) {
    setAngleDrop(drop);
    setAngleValue(angle);
    setAngleUnit(unit);
    setAngleTopStraight(topStraight);
    setAngleBottomStraight(bottomStraight);
    setAngleAllowance(allowance);
    setAngleAdvanced(topStraight !== "0" || bottomStraight !== "0" || allowance !== "0");
  }

  function clearTrunkingOppositeMark() {
    setTrunkingOppositeAngle("");
    setTrunkingOppositeAdjacent("");
  }

  function applyTrunkingOppositePreset(
    angle: string,
    adjacent = DEFAULT_TRUNKING_OPPOSITE_VALUES.adjacent
  ) {
    setTrunkingOppositeAngle(angle);
    setTrunkingOppositeAdjacent(adjacent);
  }

  function clearTrayBendCut() {
    setTrayBendAngle("");
    setTrayBendCuts("");
    setTrayBendWidth("");
  }

  function applyPowerPreset(target: PowerTarget, phase: PhaseType, valueA: string, valueB: string, pf = "0.95") {
    setPowerTarget(target);
    setPowerPhase(phase);
    setPowerValueA(valueA);
    setPowerValueB(valueB);
    setPowerPf(pf);
  }

  function applyVoltageDropPreset(phase: PhaseType, current: string, length: string, cableSize: string, voltage: string) {
    setVdropPhase(phase);
    setVdropCurrent(current);
    setVdropLength(length);
    setVdropCableSize(cableSize);
    setVdropVoltage(voltage);
  }

  function applyBreakerCurrentPreset(current: string) {
    setBreakerMode("current");
    setBreakerCurrent(current);
  }

  function applyBreakerPowerPreset(power: string, phase: PhaseType, voltage: string, pf = "0.95") {
    setBreakerMode("power");
    setBreakerPower(power);
    setBreakerPhase(phase);
    setBreakerVoltage(voltage);
    setBreakerPf(pf);
  }

  function applyConduitPreset(diameter: string, cableDiameter: string, cableCount: string, maxFill = "40") {
    setConduitDiameter(diameter);
    setConduitCableDiameter(cableDiameter);
    setConduitCableCount(cableCount);
    setConduitMaxFill(maxFill);
  }

  function applyStructurePreset(wall: string, joist: string) {
    setStructureWall(wall);
    setStructureJoist(joist);
  }

  // ── Calculator results ──
  const containmentRodResult = useMemo(() =>
    calcContainmentRod(containmentRodOverallHeight, containmentRodTopOfUnistrut, containmentRodBuffer, containmentRodUnistrutDepth),
    [containmentRodBuffer, containmentRodOverallHeight, containmentRodTopOfUnistrut, containmentRodUnistrutDepth]
  );

  const unistrutLengthResult = useMemo(() =>
    calcUnistrutLength(unistrutContainments, unistrutLeftAllowance, unistrutRightAllowance, unistrutGap),
    [unistrutContainments, unistrutGap, unistrutLeftAllowance, unistrutRightAllowance]
  );

  const angleResult = useMemo(() =>
    calcAngle(
      angleDrop,
      angleValue,
      angleTopStraight,
      angleBottomStraight,
      angleAllowance,
      angleUnit,
      angleTopBend,
      angleBottomBend,
      angleBendHeight
    ),
    [
      angleAllowance,
      angleBendHeight,
      angleBottomBend,
      angleBottomStraight,
      angleDrop,
      angleTopBend,
      angleTopStraight,
      angleUnit,
      angleValue
    ]
  );

  const trunkingOppositeResult = useMemo(() =>
    calcTrunkingOppositeMark(trunkingOppositeAngle, trunkingOppositeAdjacent),
    [trunkingOppositeAdjacent, trunkingOppositeAngle]
  );

  const trayBendCutResult = useMemo(() =>
    calcTrayBendCut(trayBendAngle, trayBendCuts, trayBendWidth),
    [trayBendAngle, trayBendCuts, trayBendWidth]
  );

  const powerResult = useMemo(() =>
    calcPower(powerTarget, powerPhase, powerValueA, powerValueB, powerPf),
    [powerPf, powerPhase, powerTarget, powerValueA, powerValueB]
  );

  const voltageDropResult = useMemo(() =>
    calcVoltageDrop(vdropPhase, vdropCurrent, vdropLength, vdropCableSize, vdropVoltage),
    [vdropCableSize, vdropCurrent, vdropLength, vdropPhase, vdropVoltage]
  );

  const breakerResult = useMemo(() =>
    calcBreaker(breakerMode, breakerCurrent, breakerPower, breakerPhase, breakerVoltage, breakerPf),
    [breakerCurrent, breakerMode, breakerPf, breakerPhase, breakerPower, breakerVoltage]
  );

  const conduitResult = useMemo(() =>
    calcConduit(conduitDiameter, conduitCableDiameter, conduitCableCount, conduitMaxFill),
    [conduitCableCount, conduitCableDiameter, conduitDiameter, conduitMaxFill]
  );

  const structureResult = useMemo(() =>
    calcStructure(structureWall, structureJoist),
    [structureJoist, structureWall]
  );

  const filteredApplets = applets;
  const filteredAppletIds = useMemo(
    () => filteredApplets.map((applet) => applet.id).join("|"),
    [filteredApplets]
  );

  const filteredCheatSections = useMemo(() => {
    const query = noteQuery.trim();
    return cheatSheetSections.filter((section) => {
      if (showSavedNotes && !savedNoteIds.includes(section.id)) return false;
      if (!query) return true;
      return matchesQuery(
        [
          section.title,
          section.summary,
          ...section.items,
          ...(section.tables?.flatMap((table) => [table.title, ...table.headers, ...table.rows.flat()]) ?? []),
          ...(section.legend?.map((entry) => entry.label) ?? [])
        ].join(" "),
        query
      );
    });
  }, [noteQuery, savedNoteIds, showSavedNotes]);

  // Built once — every source is module-static and navigateTo is stable — so
  // typing in the palette only re-runs the cheap filter below rather than
  // rebuilding the whole index (hundreds of items with large keyword strings)
  // on every keystroke.
  const paletteBaseItems = useMemo<PaletteItem[]>(() => {
    return [
      {
        title: "Tools",
        subtitle: "Open the calculator dashboard.",
        tag: "Page",
        keywords: "home dashboard start tools calculators",
        action: () => navigateTo("home")
      },
      {
        title: "Notes",
        subtitle: "Open the cheat sheet.",
        tag: "Page",
        keywords: "cheat sheet notes formulas regs safe zones",
        action: () => navigateTo("cheatsheet")
      },
      {
        title: "Exams",
        subtitle: "Interactive mock exams.",
        tag: "Page",
        keywords: "exam mock quiz questions nvq level 3 city guilds",
        action: () => navigateTo("exams")
      },
      {
        title: "Learn",
        subtitle: "Course routes, assessment checklists, and category guides.",
        tag: "Page",
        keywords: "learn guides course route pathway assessment checklist qualification 2391 2396 pat am2 ecs part p 18th edition",
        action: () => navigateTo("learn")
      },
      {
        title: "Tutorials",
        subtitle: "Workplace videos and demonstrations.",
        tag: "Page",
        keywords: "tutorials videos demonstrations workplace trunking conduit tray unistrut supports",
        action: () => navigateTo("tutorials")
      },
      {
        title: "Interactive",
        subtitle: "Build and energize circuits with floating tips.",
        tag: "Page",
        keywords: "interactive circuit builder simulator playground series parallel breaker switch",
        action: () => navigateTo("interactive")
      },
      {
        title: "Help",
        subtitle: "Show shortcuts.",
        tag: "Action",
        keywords: "help keyboard shortcuts",
        action: () => setHelpOpen(true)
      },
      {
        title: "History",
        subtitle: "View past calculations.",
        tag: "Action",
        keywords: "history recent calculations log",
        action: () => setHistoryOpen(true)
      },
      {
        title: "Settings",
        subtitle: "Profile, photo, nickname, and preferences.",
        tag: "Page",
        keywords: "settings profile account avatar photo nickname display name preferences reduce motion log out",
        action: () => navigateTo("settings")
      },
      ...applets.map((applet) => ({
        title: applet.title,
        subtitle: applet.subtitle,
        tag: "Tool",
        keywords: applet.keywords,
        action: () => navigateTo("home", applet.id)
      })),
      ...cheatSheetSections.flatMap((section) => [
        {
          title: section.title,
          subtitle: section.summary,
          tag: "Sheet",
          keywords: `${section.title} ${section.summary} ${section.items.join(" ")} ${(section.legend || []).map((l) => l.label).join(" ")} ${(section.tables || []).map(referenceTableText).join(" ")}`,
          action: () => navigateTo("cheatsheet", section.id)
        },
        ...section.items.map((item) => ({
          title: item.split(":")[0],
          subtitle: item,
          tag: "Note",
          keywords: `${section.title} ${item}`,
          action: () => navigateTo("cheatsheet", section.id)
        }))
      ]),
      ...COURSE_GUIDES.map((guide) => ({
        title: guide.title,
        subtitle: guide.summary,
        tag: "Guide",
        keywords: `${guide.title} ${guide.kicker} ${GUIDE_CATEGORY_LABELS[guide.category]} ${guide.summary} ${guide.facts.map((fact) => `${fact.label} ${fact.value}`).join(" ")} ${guide.sections.flatMap((section) => [section.title, ...section.items]).join(" ")} ${guide.pitfalls.join(" ")} ${guide.nextActions.join(" ")}`,
        action: () => navigateTo("learn", guide.id)
      })),
      ...TUTORIALS.map((tutorial) => ({
        title: tutorial.title,
        subtitle: tutorial.workplaceUse,
        tag: "Video",
        keywords: `${tutorial.title} ${tutorial.channel} ${tutorial.category} ${tutorial.workplaceUse} ${tutorial.practiceFocus.join(" ")}`,
        action: () => navigateTo("tutorials", tutorial.id)
      }))
    ];
  }, [navigateTo]);

  const paletteItems = useMemo(
    () =>
      paletteBaseItems
        .filter((item) => matchesQuery(`${item.title} ${item.subtitle} ${item.keywords}`, paletteQuery))
        .slice(0, 12),
    [paletteBaseItems, paletteQuery]
  );

  useEffect(() => {
    const updatePage = () => setPage(getPageFromLocation());
    window.addEventListener("popstate", updatePage);
    return () => window.removeEventListener("popstate", updatePage);
  }, []);

  useEffect(() => {
    document.body.setAttribute("data-page", page);
    const pageTitle: Record<PageId, string> = {
      home: "Tools",
      cheatsheet: "Notes",
      learn: "Learning Guides",
      exams: "Practice Exams",
      tutorials: "Workplace Tutorials",
      interactive: "Interactive Training",
      settings: "Settings"
    };
    document.title = `${pageTitle[page]} · Sparky`;
  }, [page]);

  useEffect(() => {
    try {
      localStorage.removeItem("sparky-theme");
    } catch {}
  }, []);

  useEffect(() => {
    if (!paletteOpen) return;
    setActivePaletteIndex(0);
    window.setTimeout(() => {
      paletteInputRef.current?.focus();
    }, 0);
  }, [paletteOpen, paletteQuery]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const commandKey = event.metaKey || event.ctrlKey;

      if (commandKey && event.key.toLowerCase() === "k") {
        event.preventDefault();
        openCommandPalette();
      }

      if (commandKey && event.key === "/") {
        event.preventDefault();
        setHelpOpen(true);
      }

      if (event.key === "Escape") {
        setPaletteOpen(false);
        setHelpOpen(false);
        setHistoryOpen(false);
        setNavMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!navMenuOpen) return;
    const onPointerDown = (event: MouseEvent) => {
      const target = event.target as Node | null;
      if (!target) return;
      if (navMenuRef.current?.contains(target)) return;
      if (navMenuButtonRef.current?.contains(target)) return;
      setNavMenuOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, [navMenuOpen]);

  // Move focus into the menu when it opens so keyboard users land on the first
  // item (paired with arrow-key roving in handleNavMenuKeyDown below).
  useEffect(() => {
    if (!navMenuOpen) return;
    navMenuRef.current?.querySelector<HTMLElement>('[role="menuitem"]')?.focus();
  }, [navMenuOpen]);

  useEffect(() => {
    return () => {
      if (copiedSectionTimeoutRef.current !== null) {
        window.clearTimeout(copiedSectionTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const onBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      setInstallPrompt(event as BeforeInstallPromptEvent);
    };

    const onInstalled = () => setInstallPrompt(null);

    window.addEventListener("beforeinstallprompt", onBeforeInstallPrompt);
    window.addEventListener("appinstalled", onInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", onBeforeInstallPrompt);
      window.removeEventListener("appinstalled", onInstalled);
    };
  }, []);

  useEffect(() => {
    const grid = toolGridRef.current;
    if (!grid) return;

    function handleScroll() {
      const width = grid!.clientWidth;
      if (width === 0) return;
      const index = Math.round(grid!.scrollLeft / width);
      setActiveToolIndex((current) => (current === index ? current : index));
    }

    grid.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => grid.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const grid = toolGridRef.current;
    if (!grid) return;
    const width = grid.clientWidth;
    if (width === 0) return;
    const maxIndex = Math.max(filteredApplets.length - 1, 0);
    const index = Math.min(Math.round(grid.scrollLeft / width), maxIndex);
    setActiveToolIndex((current) => (current === index ? current : index));
  }, [filteredApplets]);

  useEffect(() => {
    const grid = toolGridRef.current;
    if (!grid || page !== "home" || filteredApplets.length === 0) {
      setToolGridHeight(null);
      return;
    }

    let frame = 0;
    const panelIndex = Math.min(activeToolIndex, grid.children.length - 1);
    const activePanel = grid.children.item(panelIndex) as HTMLElement | null;

    const updateHeight = () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      frame = window.requestAnimationFrame(() => {
        const nextHeight = activePanel ? Math.ceil(activePanel.scrollHeight) : null;
        setToolGridHeight((current) => (current === nextHeight ? current : nextHeight));
      });
    };

    const resizeObserver = typeof ResizeObserver === "undefined" ? null : new ResizeObserver(updateHeight);
    if (activePanel && resizeObserver) {
      resizeObserver.observe(activePanel);
    }

    window.addEventListener("resize", updateHeight);
    updateHeight();

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
      resizeObserver?.disconnect();
      window.removeEventListener("resize", updateHeight);
    };
  }, [activeToolIndex, filteredAppletIds, filteredApplets.length, page]);

  function handleNavMenuKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    const container = navMenuRef.current;
    if (!container) return;
    const items = Array.from(container.querySelectorAll<HTMLElement>('[role="menuitem"]'));
    if (items.length === 0) return;
    const currentIndex = items.indexOf(document.activeElement as HTMLElement);
    if (event.key === "ArrowDown") {
      event.preventDefault();
      items[currentIndex < 0 ? 0 : (currentIndex + 1) % items.length]?.focus();
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      items[currentIndex < 0 ? items.length - 1 : (currentIndex - 1 + items.length) % items.length]?.focus();
    } else if (event.key === "Home") {
      event.preventDefault();
      items[0]?.focus();
    } else if (event.key === "End") {
      event.preventDefault();
      items[items.length - 1]?.focus();
    }
  }

  function handlePaletteKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (!paletteItems.length) return;

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActivePaletteIndex((current) => (current + 1) % paletteItems.length);
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActivePaletteIndex((current) => (current - 1 + paletteItems.length) % paletteItems.length);
    }

    if (event.key === "Enter") {
      event.preventDefault();
      setPaletteOpen(false);
      paletteItems[activePaletteIndex]?.action();
    }
  }

  async function installApp() {
    if (!installPrompt) return;
    await installPrompt.prompt();
    await installPrompt.userChoice;
    setInstallPrompt(null);
  }

  async function copyNoteSection(section: CheatSheetSection) {
    const legendLabels = section.legend ? section.legend.map((l) => l.label) : [];
    const tableBlocks = section.tables ? section.tables.map(referenceTableClipboardText) : [];
    const text = [section.title, section.summary, ...section.items, ...legendLabels, ...tableBlocks].join("\n");

    try {
      await writeClipboardText(text);
      setCopiedSectionId(section.id);
      if (copiedSectionTimeoutRef.current !== null) {
        window.clearTimeout(copiedSectionTimeoutRef.current);
      }
      copiedSectionTimeoutRef.current = window.setTimeout(() => {
        setCopiedSectionId((current) => (current === section.id ? null : current));
        copiedSectionTimeoutRef.current = null;
      }, 1400);
    } catch {
      setCopiedSectionId(null);
    }
  }

  const toolGridStyle = toolGridHeight
    ? ({ "--tool-grid-height": `${toolGridHeight}px` } as CSSProperties)
    : undefined;

  return (
    <>
      <AppBackground />
      <div className="site-shell">
        <header className="topbar">
        <a
          className="brand"
          href={getPageHref(landingPage)}
          aria-label={`Go to ${visiblePrimaryNavItems[0].label}`}
          onClick={(event) => {
            event.preventDefault();
            navigateTo(landingPage);
          }}
        >
          <svg
            className="brand-mark"
            viewBox="0 0 40 40"
            aria-hidden="true"
            fill="none"
          >
            <path
              d="M10 13h9l-3.6 7.1h7.2L16.8 30l2.1-7.2H10z"
              fill="currentColor"
            />
            <path
              d="M8 24.5h4.5"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            <path
              d="M27.5 15.5H32"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            <path
              d="M8 9.5C8 8.12 9.12 7 10.5 7h5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M24.5 33h5A2.5 2.5 0 0 0 32 30.5v-5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <strong>Sparky</strong>
        </a>

        <nav className="desktop-primary-nav" aria-label="Primary">
          {visiblePrimaryNavItems.map((item) => (
            <a
              key={item.id}
              href={getPageHref(item.id)}
              className={`desktop-primary-nav-item${page === item.id ? " is-active" : ""}`}
              aria-current={page === item.id ? "page" : undefined}
              onClick={(event) => {
                event.preventDefault();
                navigateTo(item.id);
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="search-field"
          aria-label="Open command palette"
          aria-haspopup="dialog"
          aria-expanded={paletteOpen}
          onClick={openCommandPalette}
        >
          <svg className="search-icon" viewBox="0 0 20 20" aria-hidden="true" fill="none">
            <circle cx="8.5" cy="8.5" r="5.5" stroke="currentColor" strokeWidth="1.8" />
            <path d="M12.7 12.7 17 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
          <span className="search-placeholder">Search</span>
          <span className="search-hint">
            <span className="search-hint-command">⌘</span>
            <span>K</span>
          </span>
        </button>

        <div className="topbar-actions">
          <button
            type="button"
            className="topbar-icon-button theme-toggle"
            onClick={() => setColorTheme((current) => current === "light" ? "dark" : "light")}
            aria-label={`Switch to ${colorTheme === "light" ? "dark" : "light"} mode`}
            title={`Switch to ${colorTheme === "light" ? "dark" : "light"} mode`}
          >
            {colorTheme === "light" ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41" />
              </svg>
            )}
          </button>
          {page === "home" ? (
            <button type="button" className="topbar-icon-button" onClick={() => setHistoryOpen(true)} aria-label="Calculation history" title="Calculation history">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </button>
          ) : null}
          <div className="nav-menu-wrap">
            <button
              type="button"
              ref={navMenuButtonRef}
              className="topbar-account-btn"
              aria-label={user ? `Menu and account for ${displayName}` : "Menu"}
              aria-haspopup="menu"
              aria-expanded={navMenuOpen}
              aria-controls="page-nav-menu"
              onClick={() => setNavMenuOpen((open) => !open)}
            >
              <AccountAvatar avatar={user?.avatar} name={displayName} />
            </button>
            {navMenuOpen ? (
              <div
                id="page-nav-menu"
                ref={navMenuRef}
                className="nav-menu"
                role="menu"
                aria-label="Pages"
                onKeyDown={handleNavMenuKeyDown}
              >
                <div className="nav-menu-pages" role="none">
                  {PAGE_NAV_ITEMS.map((item) => (
                    <a
                      key={item.id}
                      role="menuitem"
                      href={getPageHref(item.id)}
                      className={`nav-menu-item${PRIMARY_NAV_ITEMS.some((primary) => primary.id === item.id) ? " nav-menu-item--primary" : ""}${page === item.id ? " is-active" : ""}`}
                      aria-current={page === item.id ? "page" : undefined}
                      onClick={(event) => {
                        event.preventDefault();
                        navigateTo(item.id);
                        setNavMenuOpen(false);
                      }}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
                <div className="nav-menu-account" role="none">
                  {user ? (
                    <>
                      <button
                        type="button"
                        role="menuitem"
                        className="nav-menu-item nav-menu-account-card"
                        aria-label={`Profile and settings for ${displayName}`}
                        onClick={() => {
                          navigateTo("settings");
                          setNavMenuOpen(false);
                        }}
                      >
                        <AccountAvatar avatar={user.avatar} name={displayName} />
                        <span className="nav-menu-account-identity">
                          <span className="nav-menu-account-name">{displayName}</span>
                          {user.nickname?.trim() ? <span className="nav-menu-account-email">{user.email}</span> : null}
                        </span>
                        <svg className="nav-menu-account-cog" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <circle cx="12" cy="12" r="3" />
                          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                        </svg>
                      </button>
                      <button
                        type="button"
                        role="menuitem"
                        className="nav-menu-item nav-menu-account-action"
                        onClick={() => {
                          logout();
                          setNavMenuOpen(false);
                        }}
                      >
                        Log out
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        type="button"
                        role="menuitem"
                        className="nav-menu-item nav-menu-account-action"
                        onClick={() => {
                          navigateTo("settings");
                          setNavMenuOpen(false);
                        }}
                      >
                        Settings
                      </button>
                      <button
                        type="button"
                        role="menuitem"
                        className="nav-menu-item nav-menu-account-action"
                        onClick={() => {
                          setAuthOpen(true);
                          setNavMenuOpen(false);
                        }}
                      >
                        Log in
                      </button>
                    </>
                  )}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </header>

      <main className="workspace">
        <section className={`page page-home ${page === "home" ? "is-active" : ""}`}>
          <section className="tool-library" aria-labelledby="tool-library-title">
            <div className="tool-library-head">
              <div>
                <span className="dashboard-kicker">Calculator library</span>
                <h2 id="tool-library-title">{applets.length} site and design tools</h2>
              </div>
              <button type="button" className="ghost-button" onClick={() => setHistoryOpen(true)}>
                Calculation history
              </button>
            </div>
            <ul className="tool-library-list">
              {filteredApplets.map((applet, index) => (
                <li key={applet.id}>
                  <button
                    type="button"
                    className={`tool-library-item${index === activeToolIndex ? " is-active" : ""}`}
                    aria-pressed={index === activeToolIndex}
                    onClick={() => scrollToTool(index)}
                  >
                    <strong>{applet.title}</strong>
                    <span>{applet.subtitle}</span>
                  </button>
                </li>
              ))}
            </ul>
            <label className="mobile-tool-picker">
              <span>Choose calculator</span>
              <select
                value={filteredApplets[activeToolIndex]?.id ?? ""}
                onChange={(event) => {
                  const index = filteredApplets.findIndex((applet) => applet.id === event.target.value);
                  if (index >= 0) scrollToTool(index);
                }}
              >
                {filteredApplets.map((applet) => (
                  <option key={applet.id} value={applet.id}>{applet.title}</option>
                ))}
              </select>
            </label>
          </section>

          <div className="tool-grid" ref={toolGridRef} style={toolGridStyle}>
            {filteredApplets.some((a) => a.id === "tool-containment-rod") ? (
              <article id="tool-containment-rod" className="tool-panel">
                <div className="tool-heading">
                  <ToolTitle title="Containment rod" hint={toolHints.containmentRod} />
                  <button type="button" className="ghost-button" onClick={clearContainmentRod}>
                    Clear
                  </button>
                </div>

                <div className="tool-form">
                  <div className="field-row">
                    <label className="field">
                      <span>Overall height (mm)</span>
                      <input
                        type="number"
                        inputMode="decimal"
                        min="0"
                        step="1"
                        value={containmentRodOverallHeight}
                        onChange={(e) => setContainmentRodOverallHeight(e.target.value)}
                      />
                      {containmentRodOverallHeight === "" && <span className="field-hint">Enter the total height</span>}
                    </label>

                    <label className="field">
                      <span>Height to top of Unistrut (mm)</span>
                      <input
                        type="number"
                        inputMode="decimal"
                        min="0"
                        step="1"
                        aria-invalid={containmentRodResult.validationMessage ? true : undefined}
                        value={containmentRodTopOfUnistrut}
                        onChange={(e) => setContainmentRodTopOfUnistrut(e.target.value)}
                      />
                      {containmentRodTopOfUnistrut === "" && <span className="field-hint">Must be less than overall height</span>}
                    </label>
                  </div>

                  <div className="field-row">
                    <label className="field">
                      <span>Buffer (mm)</span>
                      <input
                        type="number"
                        inputMode="decimal"
                        min="0"
                        step="1"
                        value={containmentRodBuffer}
                        onChange={(e) => setContainmentRodBuffer(e.target.value)}
                      />
                    </label>

                    <label className="field">
                      <span>Unistrut depth (mm)</span>
                      <input
                        type="number"
                        inputMode="decimal"
                        min="0"
                        step="1"
                        placeholder={DEFAULT_CONTAINMENT_ROD_VALUES.unistrutDepth}
                        value={containmentRodUnistrutDepth}
                        onChange={(e) => setContainmentRodUnistrutDepth(e.target.value)}
                      />
                    </label>
                  </div>

                  <p className="field-note">Leave Unistrut depth blank to use 40 mm.</p>

                  <PresetButtons
                    ariaLabel="Containment rod presets"
                    presets={[
                      { label: "Ceiling trapeze", onSelect: () => applyContainmentRodPreset("3000", "2700", "25", "40") },
                      { label: "Low bulkhead", onSelect: () => applyContainmentRodPreset("2600", "2450", "20", "40") },
                      { label: "Deep drop", onSelect: () => applyContainmentRodPreset("3500", "2850", "50", "40") }
                    ]}
                  />

                  {containmentRodResult.validationMessage ? (
                    <p className="field-error" role="alert">
                      {containmentRodResult.validationMessage}
                    </p>
                  ) : null}
                </div>

                <div className="tool-output">
                  <div className="result-main">
                    <p className="result-label">Rod cut length</p>
                    <p className="result-value">
                      <CopyableResult value={containmentRodResult.rodCutLengthValue} onCopy={() => addHistoryEntry("Containment rod", "Rod cut length", containmentRodResult.rodCutLengthValue)} />
                    </p>
                  </div>
                  <div className="mini-metrics">
                    <div>
                      <span>Actual drop</span>
                      <strong><CopyableResult value={containmentRodResult.actualDropValue} onCopy={() => addHistoryEntry("Containment rod", "Actual drop", containmentRodResult.actualDropValue)} /></strong>
                    </div>
                    <div>
                      <span>Bottom of Unistrut drop</span>
                      <strong><CopyableResult value={containmentRodResult.bottomOfUnistrutDropValue} onCopy={() => addHistoryEntry("Containment rod", "Bottom of Unistrut drop", containmentRodResult.bottomOfUnistrutDropValue)} /></strong>
                    </div>
                  </div>
                </div>
                <FormulaToggle formula={formulas.containmentRod} />
              </article>
            ) : null}

            {filteredApplets.some((a) => a.id === "tool-unistrut-length") ? (
              <article id="tool-unistrut-length" className="tool-panel">
                <div className="tool-heading">
                  <ToolTitle title="Unistrut length" hint={toolHints.unistrutLength} />
                  <button type="button" className="ghost-button" onClick={clearUnistrutLength}>
                    Clear
                  </button>
                </div>

                <div className="tool-form">
                  <div className="field-row">
                    <label className="field">
                      <span>Number of containments</span>
                      <input
                        type="number"
                        inputMode="numeric"
                        min="0"
                        step="1"
                        aria-invalid={!unistrutContainments.length ? true : undefined}
                        value={unistrutCountInput}
                        onChange={(e) => {
                          const raw = e.target.value;
                          setUnistrutCountInput(raw);
                          setUnistrutContainmentCount(
                            raw === "" ? 0 : Number.parseFloat(raw)
                          );
                        }}
                        onBlur={() =>
                          setUnistrutCountInput(String(unistrutContainments.length))
                        }
                      />
                    </label>

                    <label className="field">
                      <span>Gap between containments (mm)</span>
                      <input
                        type="number"
                        inputMode="decimal"
                        min="0"
                        step="1"
                        aria-invalid={
                          Number.isFinite(Number.parseFloat(unistrutGap)) &&
                          Number.parseFloat(unistrutGap) < 0
                            ? true
                            : undefined
                        }
                        value={unistrutGap}
                        onChange={(e) => setUnistrutGap(e.target.value)}
                      />
                      {Number.isFinite(Number.parseFloat(unistrutGap)) && Number.parseFloat(unistrutGap) < 0 && <span className="field-hint">Gap cannot be negative</span>}
                    </label>
                  </div>

                  <div className="field-row">
                    <label className="field">
                      <span>Side allowance left (mm)</span>
                      <input
                        type="number"
                        inputMode="decimal"
                        min="0"
                        step="1"
                        aria-invalid={
                          Number.isFinite(Number.parseFloat(unistrutLeftAllowance)) &&
                          Number.parseFloat(unistrutLeftAllowance) < 0
                            ? true
                            : undefined
                        }
                        value={unistrutLeftAllowance}
                        onChange={(e) => setUnistrutLeftAllowance(e.target.value)}
                      />
                    </label>

                    <label className="field">
                      <span>Side allowance right (mm)</span>
                      <input
                        type="number"
                        inputMode="decimal"
                        min="0"
                        step="1"
                        aria-invalid={
                          Number.isFinite(Number.parseFloat(unistrutRightAllowance)) &&
                          Number.parseFloat(unistrutRightAllowance) < 0
                            ? true
                            : undefined
                        }
                        value={unistrutRightAllowance}
                        onChange={(e) => setUnistrutRightAllowance(e.target.value)}
                      />
                    </label>
                  </div>

                  <p className="field-note">
                    Side allowances cover the rod or square plate position at each end.
                  </p>

                  <PresetButtons
                    ariaLabel="Unistrut presets"
                    presets={[
                      {
                        label: "Basket + tray",
                        onSelect: () =>
                          applyUnistrutPreset(
                            [
                              { label: "Basket", width: "300" },
                              { label: "Tray", width: "225" }
                            ],
                            "75",
                            "50"
                          )
                      },
                      {
                        label: "Lighting run",
                        onSelect: () =>
                          applyUnistrutPreset(
                            [
                              { label: "Trunking", width: "100" },
                              { label: "Basket", width: "100" }
                            ],
                            "50",
                            "50"
                          )
                      },
                      {
                        label: "Main ladder",
                        onSelect: () =>
                          applyUnistrutPreset(
                            [
                              { label: "Ladder", width: "650" },
                              { label: "Tray", width: "300" },
                              { label: "Basket", width: "200" }
                            ],
                            "100",
                            "75"
                          )
                      }
                    ]}
                  />

                  <div className="containment-rows">
                    {unistrutContainments.map((containment, index) => {
                      const selectedOption = CONTAINMENT_OPTIONS.find(
                        (o) => o.label === containment.label
                      );
                      return (
                        <div key={containment.id} className="containment-card">
                          <span className="containment-index">{index + 1}</span>

                          <div className="containment-fields">
                            <label className="containment-field">
                              <span>Type</span>
                              <select
                                value={containment.label}
                                onChange={(e) =>
                                  updateUnistrutContainmentRow(containment.id, "label", e.target.value)
                                }
                              >
                                <option value="" disabled>
                                  Select
                                </option>
                                {CONTAINMENT_OPTIONS.map((option) => (
                                  <option key={option.label} value={option.label}>
                                    {option.label}
                                  </option>
                                ))}
                              </select>
                            </label>

                            <label className="containment-field">
                              <span>Width</span>
                              <select
                                value={containment.width}
                                disabled={!selectedOption}
                                onChange={(e) =>
                                  updateUnistrutContainmentRow(containment.id, "width", e.target.value)
                                }
                              >
                                {selectedOption ? (
                                  selectedOption.widths.map((w) => {
                                    const value = widthValue(w);
                                    return (
                                      <option key={value} value={String(value)}>
                                        {widthLabel(w)}
                                      </option>
                                    );
                                  })
                                ) : (
                                  <option value="">--</option>
                                )}
                              </select>
                            </label>
                          </div>

                          <button
                            type="button"
                            className="containment-remove"
                            aria-label={`Remove containment ${index + 1}`}
                            onClick={() => removeUnistrutContainmentRow(containment.id)}
                          >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                          </button>
                        </div>
                      );
                    })}
                  </div>

                  <button type="button" className="add-containment-btn" onClick={addUnistrutContainmentRow}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M12 5v14"/><path d="M5 12h14"/></svg>
                    Add containment
                  </button>

                  {unistrutLengthResult.validationMessage ? (
                    <p className="field-error" role="alert">
                      {unistrutLengthResult.validationMessage}
                    </p>
                  ) : null}
                </div>

                <div className="tool-output">
                  <div className="result-main">
                    <p className="result-label">Final Unistrut length</p>
                    <p className="result-value">
                      <CopyableResult value={unistrutLengthResult.finalLengthValue} onCopy={() => addHistoryEntry("Unistrut length", "Final length", unistrutLengthResult.finalLengthValue)} />
                    </p>
                    <p className="result-sub">Rounded up to nearest 50 mm (hole spacing)</p>
                  </div>

                  <div className="breakdown-row">
                    <div className="breakdown-item">
                      <span>Containment</span>
                      <strong>{unistrutLengthResult.totalContainmentWidthValue}</strong>
                    </div>
                    <div className="breakdown-item">
                      <span>Side allowance</span>
                      <strong>{unistrutLengthResult.totalSideAllowanceValue}</strong>
                    </div>
                    <div className="breakdown-item">
                      <span>{`Gaps (${unistrutLengthResult.gapLabel})`}</span>
                      <strong>{unistrutLengthResult.totalGapAllowanceValue}</strong>
                    </div>
                    <div className="breakdown-item breakdown-total">
                      <span>Exact</span>
                      <strong>{unistrutLengthResult.exactLengthValue}</strong>
                    </div>
                  </div>
                </div>
                <FormulaToggle formula={formulas.unistrutLength} />
              </article>
            ) : null}

            {filteredApplets.some((a) => a.id === "tool-tray-bend-cut") ? (
              <article id="tool-tray-bend-cut" className="tool-panel">
                <div className="tool-heading">
                  <ToolTitle title="Containment bend cut" hint={toolHints.trayBendCut} />
                  <button type="button" className="ghost-button" onClick={clearTrayBendCut}>
                    Clear
                  </button>
                </div>

                <div className="tool-form">
                  <div className="field-row">
                    <label className="field">
                      <span>Total bend angle</span>
                      <div className="input-wrap">
                        <input
                          type="number"
                          inputMode="decimal"
                          min="0.1"
                          max="179.9"
                          step="0.1"
                          aria-invalid={
                            trayBendCutResult.validationMessage?.includes("Bend angle")
                              ? true
                              : undefined
                          }
                          value={trayBendAngle}
                          onChange={(e) => setTrayBendAngle(e.target.value)}
                        />
                        <span className="suffix">deg</span>
                      </div>
                    </label>

                    <label className="field">
                      <span>Number of cuts</span>
                      <input
                        type="number"
                        inputMode="numeric"
                        min="1"
                        step="1"
                        aria-invalid={
                          trayBendCutResult.validationMessage?.includes("cuts")
                            ? true
                            : undefined
                        }
                        value={trayBendCuts}
                        onChange={(e) => setTrayBendCuts(e.target.value)}
                      />
                    </label>
                  </div>

                  <label className="field">
                    <span>Width (tray / trunking)</span>
                    <div className="input-wrap">
                      <input
                        type="number"
                        inputMode="decimal"
                        min="0.1"
                        step="0.1"
                        aria-invalid={
                          trayBendCutResult.validationMessage?.includes("Width")
                            ? true
                            : undefined
                        }
                        value={trayBendWidth}
                        onChange={(e) => setTrayBendWidth(e.target.value)}
                      />
                      <span className="suffix">mm</span>
                    </div>
                  </label>

                  <p className="field-note">
                    Enter the total angle you want the containment to turn. One cut uses tan(angle / 2) x width. Add cuts only to split that turn into gentler bends; each mark then uses half the per-cut angle.
                  </p>

                  {trayBendCutResult.validationMessage ? (
                    <p className="field-error" role="alert">
                      {trayBendCutResult.validationMessage}
                    </p>
                  ) : null}
                </div>

                <div className="tool-output">
                  <div className="result-main">
                    <p className="result-label">Cut each side</p>
                    <p className="result-value">
                      <CopyableResult
                        value={trayBendCutResult.roundedSetbackValue}
                        onCopy={() =>
                          addHistoryEntry(
                            "Containment bend cut",
                            "Cut each side",
                            trayBendCutResult.roundedSetbackValue
                          )
                        }
                      />
                    </p>
                    <p className="result-sub">
                      {trayBendCutResult.cutsLabel}, marked from centre · nearest mm
                    </p>
                  </div>
                  <div className="mini-metrics">
                    <div>
                      <span>Total bend</span>
                      <strong>{trayBendCutResult.totalBendValue}</strong>
                    </div>
                    <div>
                      <span>Bend per cut</span>
                      <strong>{trayBendCutResult.bendPerCutValue}</strong>
                    </div>
                    <div>
                      <span>Calculation angle</span>
                      <strong>{trayBendCutResult.calculationAngleValue}</strong>
                    </div>
                    <div>
                      <span>Each side (exact)</span>
                      <strong>
                        <CopyableResult value={trayBendCutResult.setbackValue} />
                      </strong>
                    </div>
                  </div>
                </div>
                <FormulaToggle formula={formulas.trayBendCut} />
              </article>
            ) : null}

            {filteredApplets.some((a) => a.id === "tool-angle") ? (
              <article id="tool-angle" className="tool-panel">
                <div className="tool-heading">
                  <ToolTitle title="Angle drop" hint={toolHints.angle} />
                  <button
                    type="button"
                    className={`switch-chip ${angleAdvanced ? "is-active" : ""}`}
                    onClick={() => setAngleAdvanced((c) => !c)}
                    aria-pressed={angleAdvanced}
                  >
                    Advanced
                  </button>
                </div>

                <div className="tool-form">
                  <div className="field-row">
                    <label className="field">
                      <span>Vertical drop</span>
                      <div className="input-wrap">
                        <input
                          type="number"
                          inputMode="decimal"
                          min="0"
                          step="0.01"
                          value={angleDrop}
                          onChange={(e) => setAngleDrop(e.target.value)}
                        />
                        <select
                          className="unit-select"
                          aria-label="Unit"
                          value={angleUnit}
                          onChange={(e) => setAngleUnit(e.target.value as AngleUnit)}
                        >
                          <option value="mm">mm</option>
                          <option value="cm">cm</option>
                          <option value="m">m</option>
                        </select>
                      </div>
                    </label>

                    <label className="field">
                      <span>Angle from horizontal</span>
                      <div className="input-wrap">
                        <input
                          type="number"
                          inputMode="decimal"
                          min="0"
                          max="90"
                          step="0.1"
                          value={angleValue}
                          onChange={(e) => setAngleValue(e.target.value)}
                        />
                        <span className="suffix">deg</span>
                      </div>
                      {Number.parseFloat(angleValue) >= 90 && <span className="field-hint">Angle must be less than 90</span>}
                    </label>
                  </div>

                  <div className="field-row">
                    <div className="field">
                      <span>Prefab bends</span>
                      <div className="check-row">
                        <label className="check-option">
                          <input
                            type="checkbox"
                            checked={angleTopBend}
                            onChange={(e) => setAngleTopBend(e.target.checked)}
                          />
                          <span>Top</span>
                        </label>
                        <label className="check-option">
                          <input
                            type="checkbox"
                            checked={angleBottomBend}
                            onChange={(e) => setAngleBottomBend(e.target.checked)}
                          />
                          <span>Bottom</span>
                        </label>
                      </div>
                    </div>

                    <label className="field">
                      <span>Bend height</span>
                      <div className="input-wrap">
                        <input
                          type="number"
                          inputMode="decimal"
                          min="0"
                          step="0.1"
                          value={angleBendHeight}
                          onChange={(e) => setAngleBendHeight(e.target.value)}
                          disabled={!angleTopBend && !angleBottomBend}
                        />
                        <span className="suffix">{angleUnit}</span>
                      </div>
                    </label>
                  </div>

                  <PresetButtons
                    ariaLabel="Angle presets"
                    presets={[
                      { label: "45° tray drop", onSelect: () => applyAnglePreset("300", "45", "mm") },
                      { label: "30° long offset", onSelect: () => applyAnglePreset("450", "30", "mm", "200", "200", "50") },
                      { label: "60° tight rise", onSelect: () => applyAnglePreset("250", "60", "mm") }
                    ]}
                  />

                  {angleAdvanced ? (
                    <>
                      <div className="field-row">
                        <label className="field">
                          <span>Top straight</span>
                          <div className="input-wrap">
                            <input
                              type="number"
                              inputMode="decimal"
                              min="0"
                              step="0.01"
                              value={angleTopStraight}
                              onChange={(e) => setAngleTopStraight(e.target.value)}
                            />
                            <span className="suffix">{angleUnit}</span>
                          </div>
                        </label>

                        <label className="field">
                          <span>Bottom straight</span>
                          <div className="input-wrap">
                            <input
                              type="number"
                              inputMode="decimal"
                              min="0"
                              step="0.01"
                              value={angleBottomStraight}
                              onChange={(e) => setAngleBottomStraight(e.target.value)}
                            />
                            <span className="suffix">{angleUnit}</span>
                          </div>
                        </label>
                      </div>

                      <label className="field">
                        <span>Extra allowance</span>
                        <div className="input-wrap">
                          <input
                            type="number"
                            inputMode="decimal"
                            min="0"
                            step="0.01"
                            value={angleAllowance}
                            onChange={(e) => setAngleAllowance(e.target.value)}
                          />
                          <span className="suffix">{angleUnit}</span>
                        </div>
                      </label>
                    </>
                  ) : null}
                </div>

                <div className="tool-output">
                  <div className="result-main">
                    <p className="result-label">Angled piece</p>
                    <p className="result-value">
                      <CopyableResult value={angleResult.angledLengthValue} onCopy={() => addHistoryEntry("Angle drop", "Angled piece", angleResult.angledLengthValue)} />
                    </p>
                  </div>
                  {angleAdvanced ? (
                    <div className="mini-metrics">
                      <div>
                        <span>Horizontal offset</span>
                        <strong><CopyableResult value={angleResult.offsetValue} /></strong>
                      </div>
                      <div>
                        <span>Total developed length</span>
                        <strong><CopyableResult value={angleResult.totalLengthValue} /></strong>
                      </div>
                    </div>
                  ) : null}
                </div>
                <FormulaToggle formula={formulas.angle} />
              </article>
            ) : null}

            {filteredApplets.some((a) => a.id === "tool-trunking-opposite-mark") ? (
              <article id="tool-trunking-opposite-mark" className="tool-panel">
                <div className="tool-heading">
                  <ToolTitle title="100 mm trunking mark" hint={toolHints.trunkingOpposite} />
                  <button type="button" className="ghost-button" onClick={clearTrunkingOppositeMark}>
                    Clear
                  </button>
                </div>

                <div className="tool-form">
                  <div className="field-row">
                    <label className="field">
                      <span>Desired bend angle</span>
                      <div className="input-wrap">
                        <input
                          type="number"
                          inputMode="decimal"
                          min="0.1"
                          max="179.9"
                          step="0.1"
                          aria-invalid={
                            trunkingOppositeResult.validationMessage?.includes("angle")
                              ? true
                              : undefined
                          }
                          value={trunkingOppositeAngle}
                          onChange={(e) => setTrunkingOppositeAngle(e.target.value)}
                        />
                        <span className="suffix">deg</span>
                      </div>
                    </label>

                    <label className="field">
                      <span>Adjacent measurement</span>
                      <div className="input-wrap">
                        <input
                          type="number"
                          inputMode="decimal"
                          min="0.1"
                          step="0.1"
                          aria-invalid={
                            trunkingOppositeResult.validationMessage?.includes("Adjacent")
                              ? true
                              : undefined
                          }
                          value={trunkingOppositeAdjacent}
                          onChange={(e) => setTrunkingOppositeAdjacent(e.target.value)}
                        />
                        <span className="suffix">mm</span>
                      </div>
                    </label>
                  </div>

                  <p className="field-note">
                    For 100 mm trunking, keep Adj at 100 mm. The tangent calculation uses half of the desired bend angle.
                  </p>

                  <PresetButtons
                    ariaLabel="Trunking opposite mark presets"
                    presets={[
                      { label: "45° / 100 mm", onSelect: () => applyTrunkingOppositePreset("45") },
                      { label: "60° / 100 mm", onSelect: () => applyTrunkingOppositePreset("60") },
                      { label: "90° / 100 mm", onSelect: () => applyTrunkingOppositePreset("90") }
                    ]}
                  />

                  {trunkingOppositeResult.validationMessage ? (
                    <p className="field-error" role="alert">
                      {trunkingOppositeResult.validationMessage}
                    </p>
                  ) : null}
                </div>

                <div className="tool-output">
                  <div className="result-main">
                    <p className="result-label">Rounded opposite</p>
                    <p className="result-value">
                      <CopyableResult
                        value={trunkingOppositeResult.roundedOppositeValue}
                        onCopy={() =>
                          addHistoryEntry(
                            "100 mm trunking mark",
                            "Rounded opposite",
                            trunkingOppositeResult.roundedOppositeValue
                          )
                        }
                      />
                    </p>
                    <p className="result-sub">Rounded to nearest mm</p>
                  </div>
                  <div className="mini-metrics">
                    <div>
                      <span>Desired bend angle</span>
                      <strong>{trunkingOppositeResult.desiredAngleValue}</strong>
                    </div>
                    <div>
                      <span>Calculation angle</span>
                      <strong>{trunkingOppositeResult.calculationAngleValue}</strong>
                    </div>
                    <div>
                      <span>Opposite distance</span>
                      <strong>
                        <CopyableResult value={trunkingOppositeResult.oppositeValue} />
                      </strong>
                    </div>
                    <div>
                      <span>Adjacent</span>
                      <strong>{trunkingOppositeResult.adjacentValue}</strong>
                    </div>
                  </div>
                </div>
                <FormulaToggle formula={formulas.trunkingOpposite} />
              </article>
            ) : null}

            {filteredApplets.some((a) => a.id === "tool-power") ? (
              <article id="tool-power" className="tool-panel">
                <div className="tool-heading">
                  <ToolTitle title="kW / A / V" hint={toolHints.power} />
                  <span className="tool-meta">Power current voltage</span>
                </div>

                <div className="tool-form">
                  <div className="field-row">
                    <label className="field">
                      <span>Solve</span>
                      <select
                        value={powerTarget}
                        onChange={(e) => setPowerTarget(e.target.value as PowerTarget)}
                      >
                        <option value="power">Power (kW)</option>
                        <option value="current">Current (A)</option>
                        <option value="voltage">Voltage (V)</option>
                      </select>
                    </label>
                    <label className="field">
                      <span>Phase</span>
                      <select
                        value={powerPhase}
                        onChange={(e) => setPowerPhase(e.target.value as PhaseType)}
                      >
                        <option value="single">Single-phase</option>
                        <option value="three">Three-phase</option>
                      </select>
                    </label>
                  </div>

                  <PresetButtons
                    ariaLabel="Power presets"
                    presets={[
                      { label: "1 kW @ 230 V", onSelect: () => applyPowerPreset("current", "single", "1", "230", "1") },
                      { label: "13 A socket", onSelect: () => applyPowerPreset("power", "single", "13", "230", "1") },
                      { label: "10 kW 3P", onSelect: () => applyPowerPreset("current", "three", "10", "400", "0.95") }
                    ]}
                  />

                  <div className="field-row">
                    <label className="field">
                      <span>{powerConfig[powerTarget].inputLabels[0]}</span>
                      <input
                        type="number"
                        inputMode="decimal"
                        min="0"
                        step="0.01"
                        value={powerValueA}
                        onChange={(e) => setPowerValueA(e.target.value)}
                      />
                    </label>
                    <label className="field">
                      <span>{powerConfig[powerTarget].inputLabels[1]}</span>
                      <input
                        type="number"
                        inputMode="decimal"
                        min="0"
                        step="0.01"
                        value={powerValueB}
                        onChange={(e) => setPowerValueB(e.target.value)}
                      />
                    </label>
                  </div>

                  <label className="field">
                    <span>Power factor</span>
                    <input
                      type="number"
                      inputMode="decimal"
                      min="0.1"
                      max="1"
                      step="0.01"
                      value={powerPf}
                      onChange={(e) => setPowerPf(e.target.value)}
                    />
                    {Number.parseFloat(powerPf) > 1 && <span className="field-hint">PF must be between 0 and 1</span>}
                  </label>
                </div>

                <div className="tool-output">
                  <div className="result-main">
                    <p className="result-label">{powerResult.label}</p>
                    <p className="result-value">
                      <CopyableResult value={powerResult.resultValue} onCopy={() => addHistoryEntry("kW / A / V", powerResult.label, powerResult.resultValue)} />
                    </p>
                  </div>
                </div>
                <FormulaToggle formula={formulas.power} />
              </article>
            ) : null}

            {filteredApplets.some((a) => a.id === "tool-vdrop") ? (
              <article id="tool-vdrop" className="tool-panel">
                <div className="tool-heading">
                  <ToolTitle title="Voltage drop" hint={toolHints.vdrop} />
                  <span className="tool-meta">Quick estimate</span>
                </div>

                <div className="tool-form">
                  <div className="field-row">
                    <label className="field">
                      <span>Phase</span>
                      <select
                        value={vdropPhase}
                        onChange={(e) => setVdropPhase(e.target.value as PhaseType)}
                      >
                        <option value="single">Single-phase</option>
                        <option value="three">Three-phase</option>
                      </select>
                    </label>
                    <label className="field">
                      <span>Nominal voltage (V)</span>
                      <input
                        type="number"
                        inputMode="decimal"
                        min="0"
                        step="1"
                        value={vdropVoltage}
                        onChange={(e) => setVdropVoltage(e.target.value)}
                      />
                    </label>
                  </div>

                  <PresetButtons
                    ariaLabel="Voltage drop presets"
                    presets={[
                      { label: "32 A ring", onSelect: () => applyVoltageDropPreset("single", "32", "30", "2.5", "230") },
                      { label: "6 A lights", onSelect: () => applyVoltageDropPreset("single", "6", "25", "1.5", "230") },
                      { label: "32 A 3P", onSelect: () => applyVoltageDropPreset("three", "32", "40", "6", "400") }
                    ]}
                  />

                  <div className="field-row">
                    <label className="field">
                      <span>Current (A)</span>
                      <input
                        type="number"
                        inputMode="decimal"
                        min="0"
                        step="0.01"
                        value={vdropCurrent}
                        onChange={(e) => setVdropCurrent(e.target.value)}
                      />
                    </label>
                    <label className="field">
                      <span>Length (m)</span>
                      <input
                        type="number"
                        inputMode="decimal"
                        min="0"
                        step="0.01"
                        value={vdropLength}
                        onChange={(e) => setVdropLength(e.target.value)}
                      />
                    </label>
                  </div>

                  <label className="field">
                    <span>Cable size (mm²)</span>
                    <input
                      type="number"
                      inputMode="decimal"
                      min="0"
                      step="0.1"
                      value={vdropCableSize}
                      onChange={(e) => setVdropCableSize(e.target.value)}
                    />
                  </label>
                </div>

                <div className="tool-output">
                  <div className="result-main">
                    <p className="result-label">Voltage drop</p>
                    <p className="result-value">
                      <CopyableResult value={voltageDropResult.dropValue} onCopy={() => addHistoryEntry("Voltage drop", "Drop", voltageDropResult.dropValue)} />
                    </p>
                  </div>
                  <div className="mini-metrics">
                    <div>
                      <span>Drop percent</span>
                      <strong><CopyableResult value={voltageDropResult.percentValue} /></strong>
                    </div>
                    <div>
                      <span>mV / A / m</span>
                      <strong><CopyableResult value={voltageDropResult.mvPerAmpMeterValue} /></strong>
                    </div>
                  </div>
                </div>
                <FormulaToggle formula={formulas.vdrop} />
              </article>
            ) : null}

            {filteredApplets.some((a) => a.id === "tool-breaker") ? (
              <article id="tool-breaker" className="tool-panel">
                <div className="tool-heading">
                  <ToolTitle title="Breaker sizing" hint={toolHints.breaker} />
                  <span className="tool-meta">Quick selection</span>
                </div>

                <div className="tool-form">
                  <label className="field">
                    <span>Input</span>
                    <select
                      value={breakerMode}
                      onChange={(e) => setBreakerMode(e.target.value as BreakerInputMode)}
                    >
                      <option value="current">Design current</option>
                      <option value="power">Power load</option>
                    </select>
                  </label>

                  <PresetButtons
                    ariaLabel="Breaker presets"
                    presets={[
                      { label: "18 A load", onSelect: () => applyBreakerCurrentPreset("18") },
                      { label: "4 kW single", onSelect: () => applyBreakerPowerPreset("4", "single", "230", "1") },
                      { label: "18 kW 3P", onSelect: () => applyBreakerPowerPreset("18", "three", "400", "0.95") }
                    ]}
                  />

                  {breakerMode === "current" ? (
                    <label className="field">
                      <span>Design current (A)</span>
                      <input
                        type="number"
                        inputMode="decimal"
                        min="0"
                        step="0.01"
                        value={breakerCurrent}
                        onChange={(e) => setBreakerCurrent(e.target.value)}
                      />
                    </label>
                  ) : (
                    <>
                      <div className="field-row">
                        <label className="field">
                          <span>Phase</span>
                          <select
                            value={breakerPhase}
                            onChange={(e) => setBreakerPhase(e.target.value as PhaseType)}
                          >
                            <option value="single">Single-phase</option>
                            <option value="three">Three-phase</option>
                          </select>
                        </label>
                        <label className="field">
                          <span>Voltage (V)</span>
                          <input
                            type="number"
                            inputMode="decimal"
                            min="0"
                            step="1"
                            value={breakerVoltage}
                            onChange={(e) => setBreakerVoltage(e.target.value)}
                          />
                        </label>
                      </div>

                      <div className="field-row">
                        <label className="field">
                          <span>Power (kW)</span>
                          <input
                            type="number"
                            inputMode="decimal"
                            min="0"
                            step="0.01"
                            value={breakerPower}
                            onChange={(e) => setBreakerPower(e.target.value)}
                          />
                        </label>
                        <label className="field">
                          <span>Power factor</span>
                          <input
                            type="number"
                            inputMode="decimal"
                            min="0.1"
                            max="1"
                            step="0.01"
                            value={breakerPf}
                            onChange={(e) => setBreakerPf(e.target.value)}
                          />
                        </label>
                      </div>
                    </>
                  )}
                </div>

                <div className="tool-output">
                  <div className="result-main">
                    <p className="result-label">Suggested breaker</p>
                    <p className="result-value">
                      <CopyableResult value={breakerResult.breakerValue} onCopy={() => addHistoryEntry("Breaker sizing", "Breaker", breakerResult.breakerValue)} />
                    </p>
                  </div>
                  <div className="mini-metrics">
                    <div>
                      <span>Design current</span>
                      <strong><CopyableResult value={breakerResult.currentValue} /></strong>
                    </div>
                    <div>
                      <span>Standard step</span>
                      <strong><CopyableResult value={breakerResult.rangeValue} /></strong>
                    </div>
                  </div>
                </div>
                <FormulaToggle formula={formulas.breaker} />
              </article>
            ) : null}

            {filteredApplets.some((a) => a.id === "tool-conduit") ? (
              <article id="tool-conduit" className="tool-panel">
                <div className="tool-heading">
                  <ToolTitle title="Conduit fill" hint={toolHints.conduit} />
                  <span className="tool-meta">Area check</span>
                </div>

                <div className="tool-form">
                  <div className="field-row">
                    <label className="field">
                      <span>Conduit ID (mm)</span>
                      <input
                        type="number"
                        inputMode="decimal"
                        min="0"
                        step="0.1"
                        value={conduitDiameter}
                        onChange={(e) => setConduitDiameter(e.target.value)}
                      />
                    </label>
                    <label className="field">
                      <span>Cable OD (mm)</span>
                      <input
                        type="number"
                        inputMode="decimal"
                        min="0"
                        step="0.1"
                        value={conduitCableDiameter}
                        onChange={(e) => setConduitCableDiameter(e.target.value)}
                      />
                    </label>
                  </div>

                  <div className="field-row">
                    <label className="field">
                      <span>Cable count</span>
                      <input
                        type="number"
                        inputMode="numeric"
                        min="1"
                        step="1"
                        value={conduitCableCount}
                        onChange={(e) => setConduitCableCount(e.target.value)}
                      />
                    </label>
                    <label className="field">
                      <span>Max fill (%)</span>
                      <input
                        type="number"
                        inputMode="decimal"
                        min="1"
                        step="1"
                        value={conduitMaxFill}
                        onChange={(e) => setConduitMaxFill(e.target.value)}
                      />
                    </label>
                  </div>

                  <PresetButtons
                    ariaLabel="Conduit presets"
                    presets={[
                      { label: "20 mm / 3 x 6", onSelect: () => applyConduitPreset("20", "6", "3") },
                      { label: "25 mm / 6 x 4", onSelect: () => applyConduitPreset("25", "4", "6") },
                      { label: "32 mm / 10 x 6", onSelect: () => applyConduitPreset("32", "6", "10") }
                    ]}
                  />
                </div>

                <div className="tool-output">
                  <div className="result-main">
                    <p className="result-label">Fill</p>
                    <p className="result-value">
                      <CopyableResult value={conduitResult.fillValue} onCopy={() => addHistoryEntry("Conduit fill", "Fill", conduitResult.fillValue)} />
                    </p>
                    {conduitResult.overFill && (
                      <p className="field-error" role="alert">
                        Fill exceeds the {conduitMaxFill}% limit.
                      </p>
                    )}
                  </div>
                  <div className="mini-metrics">
                    <div>
                      <span>Used area</span>
                      <strong><CopyableResult value={conduitResult.usedAreaValue} /></strong>
                    </div>
                    <div>
                      <span>Free area</span>
                      <strong><CopyableResult value={conduitResult.remainingValue} /></strong>
                    </div>
                  </div>
                </div>
                <FormulaToggle formula={formulas.conduit} />
              </article>
            ) : null}

            {filteredApplets.some((a) => a.id === "tool-structure") ? (
              <article id="tool-structure" className="tool-panel">
                <div className="tool-heading">
                  <ToolTitle title="Structural limits" hint={toolHints.structure} />
                  <span className="tool-meta">Wall chases / joists</span>
                </div>

                <div className="tool-form">
                  <div className="field-row">
                    <label className="field">
                      <span>Wall thickness (mm)</span>
                      <input
                        type="number"
                        inputMode="decimal"
                        min="0"
                        step="1"
                        value={structureWall}
                        onChange={(e) => setStructureWall(e.target.value)}
                      />
                    </label>
                    <label className="field">
                      <span>Joist depth (mm)</span>
                      <input
                        type="number"
                        inputMode="decimal"
                        min="0"
                        step="1"
                        value={structureJoist}
                        onChange={(e) => setStructureJoist(e.target.value)}
                      />
                    </label>
                  </div>

                  <PresetButtons
                    ariaLabel="Structural presets"
                    presets={[
                      { label: "100 mm wall", onSelect: () => applyStructurePreset("100", structureJoist) },
                      { label: "140 mm block", onSelect: () => applyStructurePreset("140", structureJoist) },
                      { label: "220 mm joist", onSelect: () => applyStructurePreset(structureWall, "220") }
                    ]}
                  />
                </div>

                <div className="tool-output">
                  <div className="mini-metrics stacked">
                    <div>
                      <span>Vertical chase</span>
                      <strong><CopyableResult value={structureResult.vertical} onCopy={() => addHistoryEntry("Structural limits", "Vertical chase", structureResult.vertical)} /></strong>
                    </div>
                    <div>
                      <span>Horizontal chase</span>
                      <strong><CopyableResult value={structureResult.horizontal} /></strong>
                    </div>
                    <div>
                      <span>Joist notch</span>
                      <strong><CopyableResult value={structureResult.notch} /></strong>
                    </div>
                  </div>
                </div>
                <FormulaToggle formula={formulas.structure} />
              </article>
            ) : null}
          </div>

          {!filteredApplets.length ? <p className="empty-state">No tools match that search.</p> : null}
        </section>

        <section className={`page page-notes ${page === "cheatsheet" ? "is-active" : ""}`}>
          <header className="page-header notes-header">
            <div>
              <span className="dashboard-kicker">UK electrical revision</span>
              <h1>Notes and quick reference</h1>
              <p className="page-copy">Search the working notes, open the detail you need, and jump straight into a linked practice exam.</p>
            </div>
            <div className="notes-controls">
              <label className="notes-search">
                <span className="sr-only">Search notes</span>
                <input
                  type="search"
                  value={noteQuery}
                  onChange={(event) => setNoteQuery(event.target.value)}
                  placeholder="Search notes, regulations and formulas"
                />
              </label>
              <button
                type="button"
                className={`ghost-button notes-saved-toggle${showSavedNotes ? " is-active" : ""}`}
                aria-pressed={showSavedNotes}
                onClick={() => setShowSavedNotes((current) => !current)}
              >
                Saved ({savedNoteIds.length})
              </button>
            </div>
          </header>
          <aside className="content-notice" role="note">
            <strong>Study aid for UK electrical practice.</strong>
            <span>Always confirm the current BS 7671 edition, official guidance, manufacturer data and site conditions before work.</span>
          </aside>
          <div className="sheet-grid">
            {filteredCheatSections.map((section) => {
              const expanded = expandedNoteIds.has(section.id);
              return (
              <article
                key={section.id}
                id={section.id}
                className={`sheet-card${expanded ? " is-expanded" : ""}${highlightedNoteId === section.id ? " is-highlighted" : ""}`}
              >
                <div className="sheet-card-head">
                  <h3>{section.title}</h3>
                  <div className="sheet-card-actions">
                    <button
                      type="button"
                      className={`icon-button sheet-save-btn${savedNoteIds.includes(section.id) ? " is-active" : ""}`}
                      aria-pressed={savedNoteIds.includes(section.id)}
                      aria-label={savedNoteIds.includes(section.id) ? `Remove ${section.title} from saved notes` : `Save ${section.title}`}
                      onClick={() => setSavedNoteIds((current) =>
                        current.includes(section.id)
                          ? current.filter((id) => id !== section.id)
                          : [...current, section.id]
                      )}
                    >
                      <svg viewBox="0 0 24 24" fill={savedNoteIds.includes(section.id) ? "currentColor" : "none"} aria-hidden="true">
                        <path d="M6 4h12v17l-6-4-6 4V4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="icon-button"
                      aria-label={copiedSectionId === section.id ? "Copied" : `Copy ${section.title}`}
                      onClick={() => copyNoteSection(section)}
                    >
                      {copiedSectionId === section.id ? (
                      <svg viewBox="0 0 24 24" aria-hidden="true" fill="none">
                        <path
                          d="M5.5 12.5l4.2 4.2L18.5 7.9"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      ) : (
                      <svg viewBox="0 0 24 24" aria-hidden="true" fill="none">
                        <rect
                          x="8"
                          y="8"
                          width="10"
                          height="10"
                          rx="2"
                          stroke="currentColor"
                          strokeWidth="1.8"
                        />
                        <path
                          d="M6 14H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      )}
                    </button>
                  </div>
                </div>
                <p className="sheet-summary">{section.summary}</p>
                <button
                  type="button"
                  className="sheet-expand-btn"
                  aria-expanded={expanded}
                  aria-controls={`${section.id}-detail`}
                  onClick={() => setExpandedNoteIds((current) => {
                    const next = new Set(current);
                    if (next.has(section.id)) next.delete(section.id);
                    else next.add(section.id);
                    return next;
                  })}
                >
                  {expanded ? "Hide note" : "Open note"}
                </button>
                {expanded ? (
                  <div id={`${section.id}-detail`} className="sheet-detail">
                {(NOTE_PRACTICE_LINKS[section.id] ?? []).length > 0 ? (
                  <div className="sheet-practice-links" aria-label={`${section.title} practice exams`}>
                    {(NOTE_PRACTICE_LINKS[section.id] ?? []).map((link) => (
                      <button
                        key={`${section.id}-${link.examId}`}
                        type="button"
                        className="sheet-practice-btn"
                        onClick={() => openPracticeExam(link.examId)}
                      >
                        Practice {link.label}
                      </button>
                    ))}
                  </div>
                ) : null}
                {section.items.length > 0 ? (
                  <ul className="sheet-list">
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
                {section.tables?.length ? (
                  <div className="reference-table-stack">
                    {section.tables.map((table) => (
                      <div key={table.title} className="reference-table">
                        <h4>{table.title}</h4>
                        <div className="reference-table-scroll">
                          <table>
                            <thead>
                              <tr>
                                {table.headers.map((header) => (
                                  <th key={header} scope="col">{header}</th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {table.rows.map((row) => (
                                <tr key={row.join("|")}>
                                  {row.map((cell, index) => (
                                    <td key={`${row.join("|")}-${index}`}>{cell}</td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : null}
                {section.legend ? (
                  <div className="legend-grid">
                    {section.legend.map((entry) => (
                      <div key={entry.label} className="legend-row">
                        <span
                          className={`legend-swatch legend-swatch--${entry.swatchStyle || "solid"}`}
                          style={
                            entry.swatchStyle === "stripe"
                              ? undefined
                              : entry.swatchStyle === "ladder"
                                ? {
                                    borderTop: `2.5px solid ${entry.swatch as string}`,
                                    borderBottom: `2.5px solid ${entry.swatch as string}`
                                  }
                                : entry.swatchStyle === "x"
                                  ? { background: entry.swatch as string }
                                  : entry.swatchStyle === "outline"
                                    ? { background: "transparent", border: `2.5px solid ${entry.swatch as string}` }
                                    : entry.swatchStyle === "box"
                                      ? { background: entry.swatch as string, color: entry.swatchExtra }
                                      : { background: entry.swatch as string }
                          }
                        >
                          {entry.swatchStyle === "stripe" ? (
                            <span className="legend-stripe-bars" aria-hidden="true">
                              {(Array.isArray(entry.swatch) ? entry.swatch : [entry.swatch]).filter(Boolean).map((color, index) => (
                                <span key={`${entry.label}-${color}-${index}`} style={{ background: color }} />
                              ))}
                            </span>
                          ) : entry.swatchStyle === "ladder" ? (
                            <span className="legend-ladder-rungs" aria-hidden="true">
                              {[0, 1, 2, 3].map((index) => (
                                <span key={`${entry.label}-rung-${index}`} style={{ background: entry.swatch as string }} />
                              ))}
                            </span>
                          ) : entry.swatchStyle === "x" ? (
                            <svg viewBox="0 0 56 22" className="legend-x"><line x1="4" y1="2" x2="52" y2="20" stroke="#fff" strokeWidth="2"/><line x1="4" y1="20" x2="52" y2="2" stroke="#fff" strokeWidth="2"/></svg>
                          ) : entry.swatchStyle === "box" ? (
                            <span className="legend-box-text">ATS</span>
                          ) : null}
                        </span>
                        <span className="legend-label">{entry.label}</span>
                      </div>
                    ))}
                  </div>
                ) : null}
                  </div>
                ) : null}
              </article>
              );
            })}
          </div>

          {!filteredCheatSections.length ? (
            <p className="empty-state">
              {showSavedNotes ? "No saved notes match these filters." : "No notes match that search."}
            </p>
          ) : null}
        </section>

        <Suspense fallback={null}>
          {visitedPages.has("learn") ? (
            <LearningPage
              isActive={page === "learn"}
              onOpenExam={openPracticeExam}
              onOpenNote={handleOpenNote}
            />
          ) : null}
          {visitedPages.has("exams") ? (
            <ExamPage
              isActive={page === "exams"}
              practiceTarget={examPracticeTarget}
              hiddenExamIds={hiddenExamIds}
            />
          ) : null}
          {visitedPages.has("tutorials") ? <TutorialsPage isActive={page === "tutorials"} /> : null}
          {visitedPages.has("interactive") ? <InteractivePage isActive={page === "interactive"} /> : null}
        </Suspense>

        <SettingsPage
          isActive={page === "settings"}
          colorTheme={colorTheme}
          onColorThemeChange={setColorTheme}
          reduceMotion={reduceMotion}
          onReduceMotionChange={setReduceMotion}
          comfortableText={comfortableText}
          onComfortableTextChange={setComfortableText}
          hiddenNavigationPageIds={hiddenNavigationPageIds}
          onNavigationVisibilityChange={setNavigationVisibility}
          hiddenExamIds={hiddenExamIds}
          onExamVisibilityChange={setExamVisibility}
          onRequestAuth={() => setAuthOpen(true)}
        />
      </main>

      {paletteOpen ? (
        <div className="modal-backdrop" onClick={() => setPaletteOpen(false)}>
          <div
            ref={paletteTrapRef}
            className="modal-shell palette-shell"
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            tabIndex={-1}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <div>
                <h2>Command palette</h2>
                <p className="page-copy">Search pages, tools, notes, and guides.</p>
              </div>
              <button className="ghost-button" type="button" onClick={() => setPaletteOpen(false)}>
                Close
              </button>
            </div>

            <label className="palette-search" htmlFor="palette-input">
              <span className="sr-only">Search command palette</span>
              <input
                ref={paletteInputRef}
                id="palette-input"
                type="search"
                placeholder="Go to tools, notes, guides"
                autoComplete="off"
                value={paletteQuery}
                onChange={(e) => setPaletteQuery(e.target.value)}
                onKeyDown={handlePaletteKeyDown}
              />
            </label>

            <div className="palette-results">
              {paletteItems.length ? (
                paletteItems.map((item, index) => (
                  <button
                    key={`${item.tag}-${item.title}-${index}`}
                    type="button"
                    className={`palette-result ${activePaletteIndex === index ? "is-active" : ""}`}
                    onMouseEnter={() => setActivePaletteIndex(index)}
                    onClick={() => {
                      setPaletteOpen(false);
                      item.action();
                    }}
                  >
                    <span className="search-result-title-row">
                      <span className="palette-result-title">{item.title}</span>
                      <span className="search-result-tag">{item.tag}</span>
                    </span>
                    <span className="palette-result-subtitle">{item.subtitle}</span>
                  </button>
                ))
              ) : (
                <div className="empty-state">No matches.</div>
              )}
            </div>
          </div>
        </div>
      ) : null}

      {helpOpen ? (
        <div className="modal-backdrop" onClick={() => setHelpOpen(false)}>
          <div
            ref={helpTrapRef}
            className="modal-shell help-shell"
            role="dialog"
            aria-modal="true"
            aria-label="Help"
            tabIndex={-1}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <div>
                <h2>Help</h2>
                <p className="page-copy">Shortcuts</p>
              </div>
              <button className="ghost-button" type="button" onClick={() => setHelpOpen(false)}>
                Close
              </button>
            </div>

            <div className="help-grid">
              <div className="help-row">
                <span>Command palette</span>
                <kbd>⌘/Ctrl + K</kbd>
              </div>
              <div className="help-row">
                <span>Help</span>
                <kbd>⌘/Ctrl + /</kbd>
              </div>
              <div className="help-row">
                <span>Close modal</span>
                <kbd>Esc</kbd>
              </div>
              <div className="help-row">
                <span>Move in palette</span>
                <kbd>↑ ↓</kbd>
              </div>
              <div className="help-row">
                <span>Open selection</span>
                <kbd>Enter</kbd>
              </div>
              {installPrompt ? (
                <div className="help-row help-action-row">
                  <span>Install app</span>
                  <button className="ghost-button" type="button" onClick={installApp}>
                    Install
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}

      {historyOpen ? (
        <div className="modal-backdrop" onClick={() => setHistoryOpen(false)}>
          <div
            ref={historyTrapRef}
            className="modal-shell history-shell"
            role="dialog"
            aria-modal="true"
            aria-label="History"
            tabIndex={-1}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <div>
                <h2>History</h2>
                <p className="page-copy">Recent calculations</p>
              </div>
              <div className="modal-header-actions">
                {historyEntries.length > 0 && (
                  <button className="ghost-button" type="button" onClick={clearHistory}>
                    Clear all
                  </button>
                )}
                <button className="ghost-button" type="button" onClick={() => setHistoryOpen(false)}>
                  Close
                </button>
              </div>
            </div>

            <div className="history-list">
              {historyEntries.length ? (
                historyEntries.map((entry) => (
                  <div key={entry.id} className="history-entry">
                    <span className="history-tool">{entry.tool}</span>
                    <span className="history-label">{entry.label}</span>
                    <strong className="history-value">{entry.value}</strong>
                    <span className="history-time">
                      {new Date(entry.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </span>
                  </div>
                ))
              ) : (
                <div className="empty-state">No history yet. Copy a result to start tracking.</div>
              )}
            </div>
          </div>
        </div>
      ) : null}

      <nav className="mobile-tabbar" aria-label="Primary">
        {visibleMobileTabItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`mobile-tab${page === item.id ? " is-active" : ""}`}
            aria-current={page === item.id ? "page" : undefined}
            onClick={() => navigateTo(item.id)}
          >
            <svg
              className="mobile-tab-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.9"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {item.icon}
            </svg>
            <span className="mobile-tab-label">{item.label}</span>
          </button>
        ))}
      </nav>

      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
      </div>
    </>
  );
}

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
};
