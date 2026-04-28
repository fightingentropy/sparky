import { useEffect, useMemo, useRef, useState } from "react";
import {
  CONTAINMENT_OPTIONS,
  DEFAULT_CONTAINMENT_ROD_VALUES,
  DEFAULT_UNISTRUT_LENGTH_VALUES,
  calcContainmentRod,
  calcUnistrutLength,
  calcAngle,
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
import { useTheme } from "./useTheme";
import { CopyableResult } from "./CopyableResult";
import { FormulaToggle } from "./FormulaToggle";
import { ExamPage } from "./ExamPage";

type PageId = "home" | "cheatsheet" | "exams";

type LegendItem = {
  label: string;
  swatch?: string;
  swatchStyle?: "solid" | "stripe" | "ladder" | "x" | "outline" | "box";
  swatchExtra?: string;
};

type CheatSheetSection = {
  id: string;
  title: string;
  summary: string;
  items: string[];
  legend?: LegendItem[];
};

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

type AngleUnit = "mm" | "cm" | "m";

const DEFAULT_PAGE: PageId = "home";
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

const cheatSheetSections: CheatSheetSection[] = [
  {
    id: "cheat-core-formulas",
    title: "Core formulas",
    summary: "Quick relationships for basic electrical calculations.",
    items: [
      "Ohm's law triangle: V = I x R",
      "Power triangle: P = I x V",
      "Rule of thumb at 230 V: 1 kW is about 4.35 A"
    ]
  },
  {
    id: "cheat-key-definitions",
    title: "Key definitions",
    summary: "Terms describing parts that can become hazardous under fault conditions.",
    items: [
      "Exposed-conductive-part: a conductive part of equipment that can be touched and is not normally live, but can become live under fault conditions.",
      "Extraneous-conductive-part: a conductive part that can introduce a potential, generally earth potential, and is not part of the electrical installation."
    ]
  },
  {
    id: "cheat-protection-devices",
    title: "Protection devices and earthing",
    summary: "What each protection measure is intended to handle.",
    items: [
      "RCD: protects against earth faults and electric shock.",
      "Circuit breaker: protects against overcurrent and short circuit.",
      "Earth cable: provides a low-resistance escape route for fault current if live touches metal."
    ]
  },
  {
    id: "cheat-regulations",
    title: "Regulations and scope",
    summary: "Where specific regulations and protections apply.",
    items: [
      "Part P: applies where people permanently reside, meaning dwellings.",
      "Reg 522.6.202: cables less than 50 mm deep in safe zones must be 30 mA RCD protected.",
      "Reg 522.5.204: if cables are in earthed metallic covering, conduit, or trunking, an RCD can be avoided.",
      "Reg 522.6.203: if a circuit is in a stud wall made mainly of metal, 30 mA RCD is required unless Reg 522.6.204 is followed."
    ]
  },
  {
    id: "cheat-safe-zones",
    title: "Cable routes and safe zones",
    summary: "Guidance for routing to avoid damage and help compliance.",
    items: [
      "Safe zones include directly above or below a switch or socket for vertical runs.",
      "Safe zones include horizontal runs to accessories.",
      "Safe zones include areas within 150 mm of the ceiling.",
      "Safe zones include areas within 150 mm of corners."
    ]
  },
  {
    id: "cheat-structural-limits",
    title: "Structural limits for building work",
    summary: "Limits for notches and chases to help maintain structural integrity.",
    items: [
      "Joist notches: maximum depth is 0.125 x joist depth.",
      "Wall chases: vertical up to 1/3 of wall thickness.",
      "Wall chases: horizontal up to 1/6 of wall thickness.",
      "If wall thickness is unknown, approximate with one brick, about 100 mm of brick depth.",
      "Exclude plaster thickness because it is not structural."
    ]
  },
  {
    id: "cheat-site-math",
    title: "Site math",
    summary: "Useful geometry for tray, bracket, and offset work.",
    items: [
      "Angled piece length = vertical drop / sin(angle from horizontal).",
      "Horizontal offset = angled piece length x cos(angle from horizontal).",
      "Total developed length = top straight + angled piece + bottom straight + extra allowance.",
      "These relationships assume the angle is measured from the horizontal."
    ]
  },
  {
    id: "cheat-drawing-legend",
    title: "Drawing legend",
    summary: "Standard colour codes and symbols used on electrical services coordination drawings.",
    items: [],
    legend: [
      { label: "SP&N Distribution Board", swatch: "#3366cc", swatchStyle: "x" },
      { label: "TP&N Distribution Board", swatch: "#7733bb", swatchStyle: "x" },
      { label: "Main Control Panel", swatch: "#5522aa", swatchStyle: "x" },
      { label: "Telecommunications Basket", swatch: "#cc2299", swatchStyle: "solid" },
      { label: "Data, BMS & Security Basket", swatch: "#8833aa", swatchStyle: "solid" },
      { label: "Fire Alarm Basket", swatch: "#cc2222", swatchStyle: "solid" },
      { label: "HV Ladder", swatch: "#663322", swatchStyle: "ladder" },
      { label: "LV Ladder", swatch: "#888822", swatchStyle: "ladder" },
      { label: "LV Tray", swatch: "linear-gradient(90deg, #22aa22 0%, #22aa22 30%, #cccc00 30%, #cccc00 70%, #22aa22 70%)", swatchStyle: "stripe" },
      { label: "Lighting & Small Power Trunking", swatch: "linear-gradient(90deg, #cc2299 50%, #aa22cc 50%)", swatchStyle: "stripe" },
      { label: "PV Tray", swatch: "repeating-linear-gradient(90deg, #88bbdd 0px, #88bbdd 6px, transparent 6px, transparent 10px)", swatchStyle: "stripe" },
      { label: "Busbar", swatch: "linear-gradient(90deg, #aaaa22 0%, #aaaa22 40%, #88aa22 40%, #88aa22 60%, #aaaa22 60%)", swatchStyle: "stripe" },
      { label: "Diesel Fuel Dump Pipework", swatch: "#886622", swatchStyle: "solid" },
      { label: "Diesel Fuel Fill Pipework", swatch: "#662222", swatchStyle: "solid" },
      { label: "Secondary Dedicated Life Safety Tray", swatch: "linear-gradient(90deg, #cc2299 0%, #cc2299 20%, #22aa22 20%, #22aa22 40%, #cccc00 40%, #cccc00 60%, #3366cc 60%, #3366cc 80%, #cc2222 80%)", swatchStyle: "stripe" },
      { label: "ATS", swatch: "#f8e0e8", swatchStyle: "box", swatchExtra: "#cc3366" },
      { label: "2 Hr Fire Rated Enclosure", swatch: "#cc2222", swatchStyle: "outline" }
    ]
  },
  {
    id: "cheat-drawing-abbreviations",
    title: "Drawing abbreviations",
    summary: "Common abbreviations found on electrical coordination drawings.",
    items: [
      "FA — From Above",
      "FB — From Below",
      "HL — High Level",
      "TA — To Above",
      "FL — Floor Level (used with dimensions, e.g. 9000 mm FL)"
    ]
  },
  {
    id: "cheat-sketch-colours",
    title: "Sketch colour identification",
    summary: "How to identify services by colour on site coordination sketches.",
    items: [],
    legend: [
      { label: "Dark blue — SP&N Distribution Board routing", swatch: "#2244aa", swatchStyle: "solid" },
      { label: "Red — Fire Alarm Basket routing", swatch: "#cc1111", swatchStyle: "solid" },
      { label: "Purple / violet — TP&N or Data, BMS & Security", swatch: "#7733bb", swatchStyle: "solid" },
      { label: "Magenta / pink — Telecom or Lighting & Small Power", swatch: "#cc2299", swatchStyle: "solid" },
      { label: "Green — LV Tray (green-yellow-green pattern)", swatch: "#22aa22", swatchStyle: "solid" },
      { label: "Yellow / olive — LV Tray or Busbar route", swatch: "#bbbb22", swatchStyle: "solid" },
      { label: "Dark maroon / brown — Diesel Fuel Fill Pipework", swatch: "#662222", swatchStyle: "solid" },
      { label: "Ladder pattern (brown) — HV Ladder", swatch: "#886644", swatchStyle: "ladder" },
      { label: "Ladder pattern (olive) — LV Ladder", swatch: "#999944", swatchStyle: "ladder" },
      { label: "Multicoloured stripe — Life Safety Tray", swatch: "linear-gradient(90deg, #cc2299 0%, #cc2299 20%, #22aa22 20%, #22aa22 40%, #cccc00 40%, #cccc00 60%, #3366cc 60%, #3366cc 80%, #cc2222 80%)", swatchStyle: "stripe" },
      { label: "Blue square with X — SP&N Distribution Board", swatch: "#3366cc", swatchStyle: "x" },
      { label: "Red outlined rectangle — Fire Rated Enclosure", swatch: "#cc2222", swatchStyle: "outline" }
    ]
  }
];

const applets: Applet[] = [
  {
    id: "tool-containment-rod",
    title: "Containment rod",
    subtitle: "Rod cut and Unistrut drop",
    keywords: "containment rod threaded rod cut length unistrut strut drop buffer support channel"
  },
  {
    id: "tool-unistrut-length",
    title: "Unistrut length",
    subtitle: "Multiple containment runs",
    keywords:
      "unistrut length calculator strut support channel tray basket trunking containment widths gap side allowance multiple runs"
  },
  {
    id: "tool-angle",
    title: "Angle drop",
    subtitle: "Drop and developed length",
    keywords: "angle drop tray bracket piece length offset trig 45 degree bend top straight bottom straight allowance developed length"
  },
  {
    id: "tool-power",
    title: "kW / A / V",
    subtitle: "Power current voltage",
    keywords: "load current amps power single phase three phase kilowatt voltage pf converter"
  },
  {
    id: "tool-vdrop",
    title: "Voltage drop",
    subtitle: "Quick estimate",
    keywords: "voltage drop cable size current length single phase three phase percent"
  },
  {
    id: "tool-breaker",
    title: "Breaker sizing",
    subtitle: "Quick selection",
    keywords: "breaker fuse mcb rcbo size current kilowatt protective device"
  },
  {
    id: "tool-conduit",
    title: "Conduit fill",
    subtitle: "Area check",
    keywords: "conduit fill cable diameter count area percent containment"
  },
  {
    id: "tool-structure",
    title: "Structural limits",
    subtitle: "Wall chases and joists",
    keywords: "joist notch chase wall thickness building work structure"
  }
];

const toolHints = {
  containmentRod:
    "Actual drop = overall height - top of Unistrut. Rod cut length = actual drop + buffer. Bottom of Unistrut drop = actual drop + Unistrut depth.",
  unistrutLength:
    "Length = total containment widths + left allowance + right allowance + ((containments - 1) x gap). Side allowances cover the rod or square plate position at each end.",
  angle: "Angled length = drop / sin(theta). Advanced: total = top + angled + bottom + allowance.",
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

function isOneOf<T extends string>(options: readonly T[], value: unknown): value is T {
  return typeof value === "string" && options.includes(value as T);
}

function isBoolean(value: unknown): value is boolean {
  return typeof value === "boolean";
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

function getPageFromHash(): PageId {
  const hash = window.location.hash.replace("#", "");
  if (hash === "home" || hash === "cheatsheet" || hash === "exams") return hash;
  return DEFAULT_PAGE;
}

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const { entries: historyEntries, addEntry: addHistoryEntry, clearHistory } = useHistory();
  const [historyOpen, setHistoryOpen] = useState(false);

  const [page, setPage] = useState<PageId>(getPageFromHash());
  const [searchQuery, setSearchQuery] = useState("");
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [paletteQuery, setPaletteQuery] = useState("");
  const [activePaletteIndex, setActivePaletteIndex] = useState(0);
  const [helpOpen, setHelpOpen] = useState(false);
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [copiedSectionId, setCopiedSectionId] = useState<string | null>(null);

  // ── Persisted calculator state ──
  const [containmentRodOverallHeight, setContainmentRodOverallHeight] = usePersistedState<string>(
    "cr-height",
    DEFAULT_CONTAINMENT_ROD_VALUES.overallHeight
  );
  const [containmentRodTopOfUnistrut, setContainmentRodTopOfUnistrut] = usePersistedState<string>(
    "cr-top",
    DEFAULT_CONTAINMENT_ROD_VALUES.topOfUnistrut
  );
  const [containmentRodBuffer, setContainmentRodBuffer] = usePersistedState<string>(
    "cr-buffer",
    DEFAULT_CONTAINMENT_ROD_VALUES.buffer
  );
  const [containmentRodUnistrutDepth, setContainmentRodUnistrutDepth] = usePersistedState<string>(
    "cr-depth",
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

  const toolGridRef = useRef<HTMLDivElement | null>(null);
  const paletteInputRef = useRef<HTMLInputElement | null>(null);
  const nextUnistrutContainmentIdRef = useRef(
    Math.max(...unistrutContainments.map((c) => c.id), 0) + 1
  );
  const copiedSectionTimeoutRef = useRef<number | null>(null);

  // Sync count input when containments change (e.g. from localStorage load)
  useEffect(() => {
    setUnistrutCountInput(String(unistrutContainments.length));
  }, [unistrutContainments.length]);

  function navigateTo(nextPage: PageId, targetId?: string) {
    window.location.hash = nextPage;
    setPage(nextPage);

    if (targetId) {
      window.setTimeout(() => {
        document.getElementById(targetId)?.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }, 50);
    }
  }

  function scrollToTool(index: number) {
    const grid = toolGridRef.current;
    if (!grid) return;
    grid.scrollTo({ left: grid.clientWidth * index, behavior: "smooth" });
  }

  function clearContainmentRod() {
    setContainmentRodOverallHeight("");
    setContainmentRodTopOfUnistrut("");
    setContainmentRodBuffer("");
    setContainmentRodUnistrutDepth("");
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
    const normalizedCount = Number.isFinite(nextCount) ? Math.max(0, Math.trunc(nextCount)) : 0;

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

  const filteredApplets = useMemo(
    () =>
      applets.filter((applet) =>
        matchesQuery(`${applet.title} ${applet.subtitle} ${applet.keywords}`, searchQuery)
      ),
    [searchQuery]
  );

  const filteredCheatSections = useMemo(
    () =>
      cheatSheetSections
        .map((section) => {
          const legendLabels = section.legend ? section.legend.map((l) => l.label) : [];
          const allText = [section.title, section.summary, ...section.items, ...legendLabels].join(" ");
          if (!searchQuery) return section;

          const matchingItems = section.items.filter((item) =>
            matchesQuery(`${section.title} ${item}`, searchQuery)
          );
          const matchingLegend = section.legend?.filter((l) =>
            matchesQuery(`${section.title} ${l.label}`, searchQuery)
          );

          if (matchesQuery(allText, searchQuery)) {
            return {
              ...section,
              items: matchingItems.length ? matchingItems : section.items,
              legend: matchingLegend?.length ? matchingLegend : section.legend
            };
          }

          if (!matchingItems.length && !matchingLegend?.length) return null;

          return {
            ...section,
            items: matchingItems,
            legend: matchingLegend?.length ? matchingLegend : undefined
          };
        })
        .filter((section): section is CheatSheetSection => section !== null),
    [searchQuery]
  );

  const paletteItems = useMemo(() => {
    const baseItems: PaletteItem[] = [
      {
        title: "Home",
        subtitle: "Open the tools page.",
        tag: "Page",
        keywords: "home start tools calculators",
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
          keywords: `${section.title} ${section.summary} ${section.items.join(" ")} ${(section.legend || []).map((l) => l.label).join(" ")}`,
          action: () => navigateTo("cheatsheet", section.id)
        },
        ...section.items.map((item) => ({
          title: item.split(":")[0],
          subtitle: item,
          tag: "Note",
          keywords: `${section.title} ${item}`,
          action: () => navigateTo("cheatsheet", section.id)
        }))
      ])
    ];

    return baseItems
      .filter((item) => matchesQuery(`${item.title} ${item.subtitle} ${item.keywords}`, paletteQuery))
      .slice(0, 12);
  }, [paletteQuery]);

  useEffect(() => {
    const onHashChange = () => setPage(getPageFromHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
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
        setPaletteQuery(searchQuery);
        setPaletteOpen(true);
      }

      if (commandKey && event.key === "/") {
        event.preventDefault();
        setHelpOpen(true);
      }

      if (event.key === "Escape") {
        setPaletteOpen(false);
        setHelpOpen(false);
        setHistoryOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [searchQuery]);

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
    const text = [section.title, section.summary, ...section.items, ...legendLabels].join("\n");

    try {
      await navigator.clipboard.writeText(text);
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

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Go to overview">
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
          <strong>Sparky Toolkit</strong>
        </a>

        <nav className="primary-nav" aria-label="Primary">
          {(
            [
              { id: "home", label: "Home" },
              { id: "cheatsheet", label: "Notes" },
              { id: "exams", label: "Exams" }
            ] as const
          ).map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={page === item.id ? "is-active" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="topbar-actions">
          <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`} title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}>
            {theme === "dark" ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            )}
          </button>
          <button type="button" className="theme-toggle" onClick={() => setHistoryOpen(true)} aria-label="Calculation history" title="Calculation history">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          </button>
          <label className="search-field" htmlFor="site-search">
            <input
              id="site-search"
              type="search"
              placeholder="Search"
              autoComplete="off"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
            />
            <span className="search-hint">⌘ K</span>
          </label>
        </div>
      </header>

      <main className="workspace">
        <section className={`page page-home ${page === "home" ? "is-active" : ""}`}>
          <div className="tool-grid" ref={toolGridRef}>
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

        <section className={`page ${page === "cheatsheet" ? "is-active" : ""}`}>
          <div className="sheet-grid">
            {filteredCheatSections.map((section) => (
              <article key={section.id} id={section.id} className="sheet-card">
                <div className="sheet-card-head">
                  <h3>{section.title}</h3>
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
                <p className="sheet-summary">{section.summary}</p>
                {section.items.length > 0 ? (
                  <ul className="sheet-list">
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
                {section.legend ? (
                  <div className="legend-grid">
                    {section.legend.map((entry) => (
                      <div key={entry.label} className="legend-row">
                        <span
                          className={`legend-swatch legend-swatch--${entry.swatchStyle || "solid"}`}
                          style={
                            entry.swatchStyle === "stripe"
                              ? { background: entry.swatch }
                              : entry.swatchStyle === "ladder"
                                ? {
                                    background: `repeating-linear-gradient(90deg, ${entry.swatch} 0px, ${entry.swatch} 5px, transparent 5px, transparent 8px)`,
                                    borderTop: `2.5px solid ${entry.swatch}`,
                                    borderBottom: `2.5px solid ${entry.swatch}`
                                  }
                                : entry.swatchStyle === "x"
                                  ? { background: entry.swatch }
                                  : entry.swatchStyle === "outline"
                                    ? { background: "transparent", border: `2.5px solid ${entry.swatch}` }
                                    : entry.swatchStyle === "box"
                                      ? { background: entry.swatch, color: entry.swatchExtra }
                                      : { background: entry.swatch }
                          }
                        >
                          {entry.swatchStyle === "x" ? (
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
              </article>
            ))}
          </div>

          {!filteredCheatSections.length ? (
            <p className="empty-state">No cheat sheet entries match that search.</p>
          ) : null}
        </section>

        <ExamPage isActive={page === "exams"} />
      </main>

      {paletteOpen ? (
        <div className="modal-backdrop" onClick={() => setPaletteOpen(false)}>
          <div className="modal-shell" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <h2>Command palette</h2>
                <p className="page-copy">Search pages, tools, and notes.</p>
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
                placeholder="Go to tools, notes, help"
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
            className="modal-shell help-shell"
            role="dialog"
            aria-modal="true"
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
            className="modal-shell history-shell"
            role="dialog"
            aria-modal="true"
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

      {page === "home" && filteredApplets.length > 0 ? (
        <div className="mobile-indicator">
          <button
            type="button"
            className="mobile-nav-btn"
            aria-label="Previous tool"
            disabled={activeToolIndex <= 0}
            onClick={() => scrollToTool(activeToolIndex - 1)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <div className="mobile-dots">
            {filteredApplets.map((_, i) => (
              <button
                key={filteredApplets[i].id}
                type="button"
                className={`mobile-dot${i === activeToolIndex ? " is-active" : ""}`}
                aria-label={filteredApplets[i].title}
                onClick={() => scrollToTool(i)}
              />
            ))}
          </div>
          <button
            type="button"
            className="mobile-nav-btn"
            aria-label="Next tool"
            disabled={activeToolIndex >= filteredApplets.length - 1}
            onClick={() => scrollToTool(activeToolIndex + 1)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
      ) : null}
    </div>
  );
}

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
};
