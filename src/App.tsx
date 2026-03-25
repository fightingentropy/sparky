import { useEffect, useMemo, useRef, useState } from "react";

type PageId = "home" | "cheatsheet";
type OhmsTarget = "voltage" | "current" | "resistance";
type LoadPhase = "single" | "three";

type CheatSheetSection = {
  id: string;
  title: string;
  summary: string;
  items: string[];
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

const EPSILON = 1e-9;
const DEFAULT_PAGE: PageId = "home";

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
  }
];

const applets: Applet[] = [
  {
    id: "tool-angle",
    title: "Angle drop",
    subtitle: "Drop and developed length",
    keywords: "angle drop tray bracket piece length offset trig 45 degree bend top straight bottom straight allowance developed length"
  },
  {
    id: "tool-ohms",
    title: "Ohm's law",
    subtitle: "Voltage current resistance",
    keywords: "ohms law voltage current resistance volts amps ohms"
  },
  {
    id: "tool-load",
    title: "Load current",
    subtitle: "Single and three phase",
    keywords: "load current amps power single phase three phase kilowatt voltage pf"
  },
  {
    id: "tool-structure",
    title: "Structural limits",
    subtitle: "Wall chases and joists",
    keywords: "joist notch chase wall thickness building work structure"
  }
];

const ohmsConfig: Record<
  OhmsTarget,
  {
    label: string;
    unit: string;
    formula: string;
    inputLabels: [string, string];
    compute: (a: number, b: number) => number;
    status: (a: number, b: number, result: number) => string;
  }
> = {
  voltage: {
    label: "Voltage",
    unit: "V",
    formula: "V = I x R",
    inputLabels: ["Current (A)", "Resistance (ohm)"],
    compute: (current, resistance) => current * resistance,
    status: (current, resistance, result) =>
      `${formatNumber(current)} A x ${formatNumber(resistance)} ohm = ${formatNumber(result)} V.`
  },
  current: {
    label: "Current",
    unit: "A",
    formula: "I = V / R",
    inputLabels: ["Voltage (V)", "Resistance (ohm)"],
    compute: (voltage, resistance) => voltage / resistance,
    status: (voltage, resistance, result) =>
      `${formatNumber(voltage)} V / ${formatNumber(resistance)} ohm = ${formatNumber(result)} A.`
  },
  resistance: {
    label: "Resistance",
    unit: "ohm",
    formula: "R = V / I",
    inputLabels: ["Voltage (V)", "Current (A)"],
    compute: (voltage, current) => voltage / current,
    status: (voltage, current, result) =>
      `${formatNumber(voltage)} V / ${formatNumber(current)} A = ${formatNumber(result)} ohm.`
  }
};

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
  if (!terms.length) {
    return true;
  }

  const normalizedHaystack = normalize(haystack);
  return terms.every((term) => normalizedHaystack.includes(term));
}

function formatNumber(value: number) {
  if (!Number.isFinite(value)) {
    return "--";
  }

  if (Math.abs(value) >= 100) {
    return value.toFixed(1);
  }

  return value.toFixed(2);
}

function formatMeasure(value: number, unit: string) {
  return `${formatNumber(value)} ${unit}`;
}

function getPageFromHash(): PageId {
  const hash = window.location.hash.replace("#", "");
  if (hash === "home" || hash === "cheatsheet") {
    return hash;
  }

  return DEFAULT_PAGE;
}

export default function App() {
  const [page, setPage] = useState<PageId>(getPageFromHash());
  const [searchQuery, setSearchQuery] = useState("");
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [paletteQuery, setPaletteQuery] = useState("");
  const [activePaletteIndex, setActivePaletteIndex] = useState(0);
  const [helpOpen, setHelpOpen] = useState(false);
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [copiedSectionId, setCopiedSectionId] = useState<string | null>(null);

  const [angleDrop, setAngleDrop] = useState("10");
  const [angleValue, setAngleValue] = useState("45");
  const [angleTopStraight, setAngleTopStraight] = useState("0");
  const [angleBottomStraight, setAngleBottomStraight] = useState("0");
  const [angleAllowance, setAngleAllowance] = useState("0");
  const [angleUnit, setAngleUnit] = useState("cm");

  const [ohmsTarget, setOhmsTarget] = useState<OhmsTarget>("voltage");
  const [ohmsInputA, setOhmsInputA] = useState("2");
  const [ohmsInputB, setOhmsInputB] = useState("10");

  const [loadPhase, setLoadPhase] = useState<LoadPhase>("single");
  const [loadPower, setLoadPower] = useState("1");
  const [loadVoltage, setLoadVoltage] = useState("230");
  const [loadPf, setLoadPf] = useState("0.95");

  const [structureWall, setStructureWall] = useState("100");
  const [structureJoist, setStructureJoist] = useState("200");

  const paletteInputRef = useRef<HTMLInputElement | null>(null);

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

  const angleResult = useMemo(() => {
    const drop = Number.parseFloat(angleDrop);
    const angle = Number.parseFloat(angleValue);
    const topStraight = Number.parseFloat(angleTopStraight);
    const bottomStraight = Number.parseFloat(angleBottomStraight);
    const allowance = Number.parseFloat(angleAllowance);

    if (!Number.isFinite(drop) || drop <= 0) {
      return {
        angledLengthValue: "--",
        offsetValue: "--",
        totalLengthValue: "--",
        formula: "Angled length = drop / sin(theta)",
        status: "Enter a vertical drop greater than 0."
      };
    }

    if (!Number.isFinite(angle) || angle <= 0 || angle >= 90) {
      return {
        angledLengthValue: "--",
        offsetValue: "--",
        totalLengthValue: "--",
        formula: "Angled length = drop / sin(theta)",
        status: "Enter an angle greater than 0 and less than 90 degrees."
      };
    }

    if (
      !Number.isFinite(topStraight) ||
      !Number.isFinite(bottomStraight) ||
      !Number.isFinite(allowance) ||
      topStraight < 0 ||
      bottomStraight < 0 ||
      allowance < 0
    ) {
      return {
        angledLengthValue: "--",
        offsetValue: "--",
        totalLengthValue: "--",
        formula: "Total length = top + angled + bottom + allowance",
        status: "Straight sections and allowance must be 0 or more."
      };
    }

    const radians = (angle * Math.PI) / 180;
    const sinValue = Math.sin(radians);
    const cosValue = Math.cos(radians);

    if (Math.abs(sinValue) < EPSILON) {
      return {
        angledLengthValue: "--",
        offsetValue: "--",
        totalLengthValue: "--",
        formula: "Angled length = drop / sin(theta)",
        status: "That angle would not create a vertical drop."
      };
    }

    const angledLength = drop / sinValue;
    const offset = angledLength * cosValue;
    const totalLength = topStraight + angledLength + bottomStraight + allowance;

    return {
      angledLengthValue: formatMeasure(angledLength, angleUnit),
      offsetValue: formatMeasure(offset, angleUnit),
      totalLengthValue: formatMeasure(totalLength, angleUnit),
      formula: "Total length = top + angled + bottom + allowance",
      status: `Drop ${formatMeasure(drop, angleUnit)} at ${formatNumber(angle)}° gives angled length ${formatMeasure(angledLength, angleUnit)} and total developed length ${formatMeasure(totalLength, angleUnit)}.`
    };
  }, [angleAllowance, angleBottomStraight, angleDrop, angleTopStraight, angleUnit, angleValue]);

  const ohmsResult = useMemo(() => {
    const config = ohmsConfig[ohmsTarget];
    const valueA = Number.parseFloat(ohmsInputA);
    const valueB = Number.parseFloat(ohmsInputB);

    if (!Number.isFinite(valueA) || !Number.isFinite(valueB) || valueA <= 0 || valueB <= 0) {
      return {
        ...config,
        resultValue: `-- ${config.unit}`,
        status: "Enter two values greater than 0."
      };
    }

    if (Math.abs(valueB) < EPSILON && (ohmsTarget === "current" || ohmsTarget === "resistance")) {
      return {
        ...config,
        resultValue: `-- ${config.unit}`,
        status: "The divisor cannot be 0."
      };
    }

    const result = config.compute(valueA, valueB);

    return {
      ...config,
      resultValue: `${formatNumber(result)} ${config.unit}`,
      status: config.status(valueA, valueB, result)
    };
  }, [ohmsInputA, ohmsInputB, ohmsTarget]);

  const loadResult = useMemo(() => {
    const powerKw = Number.parseFloat(loadPower);
    const voltage = Number.parseFloat(loadVoltage);
    const pf = Number.parseFloat(loadPf);

    if (!Number.isFinite(powerKw) || !Number.isFinite(voltage) || powerKw <= 0 || voltage <= 0) {
      return {
        formula: "I = P / V",
        resultValue: "-- A",
        status: "Enter power and voltage values greater than 0."
      };
    }

    if (loadPhase === "three" && (!Number.isFinite(pf) || pf <= 0 || pf > 1)) {
      return {
        formula: "I = P / (sqrt(3) x V x PF)",
        resultValue: "-- A",
        status: "Enter a power factor between 0 and 1."
      };
    }

    const powerWatts = powerKw * 1000;
    const current =
      loadPhase === "single"
        ? powerWatts / voltage
        : powerWatts / (Math.sqrt(3) * voltage * pf);

    return {
      formula: loadPhase === "single" ? "I = P / V" : "I = P / (sqrt(3) x V x PF)",
      resultValue: `${formatNumber(current)} A`,
      status:
        loadPhase === "single"
          ? `${formatNumber(powerKw)} kW at ${formatNumber(voltage)} V = ${formatNumber(current)} A.`
          : `${formatNumber(powerKw)} kW at ${formatNumber(voltage)} V, PF ${formatNumber(pf)} = ${formatNumber(current)} A.`
    };
  }, [loadPf, loadPhase, loadPower, loadVoltage]);

  const structureResult = useMemo(() => {
    const wall = Number.parseFloat(structureWall);
    const joist = Number.parseFloat(structureJoist);

    if (!Number.isFinite(wall) || !Number.isFinite(joist) || wall <= 0 || joist <= 0) {
      return {
        vertical: "-- mm",
        horizontal: "-- mm",
        notch: "-- mm",
        status: "Enter wall thickness and joist depth greater than 0."
      };
    }

    return {
      vertical: `${formatNumber(wall / 3)} mm`,
      horizontal: `${formatNumber(wall / 6)} mm`,
      notch: `${formatNumber(joist * 0.125)} mm`,
      status: `${formatNumber(wall)} mm wall, ${formatNumber(joist)} mm joist.`
    };
  }, [structureJoist, structureWall]);

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
          const sectionText = `${section.title} ${section.summary} ${section.items.join(" ")}`;
          if (!searchQuery) {
            return section;
          }

          const matchingItems = section.items.filter((item) =>
            matchesQuery(`${section.title} ${item}`, searchQuery)
          );

          if (matchesQuery(sectionText, searchQuery)) {
            return {
              ...section,
              items: matchingItems.length ? matchingItems : section.items
            };
          }

          if (!matchingItems.length) {
            return null;
          }

          return {
            ...section,
            items: matchingItems
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
        title: "Help",
        subtitle: "Show shortcuts.",
        tag: "Action",
        keywords: "help keyboard shortcuts",
        action: () => setHelpOpen(true)
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
          keywords: `${section.title} ${section.summary} ${section.items.join(" ")}`,
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
    if (!paletteOpen) {
      return;
    }

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
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [searchQuery]);

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

  function handlePaletteKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (!paletteItems.length) {
      return;
    }

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
    if (!installPrompt) {
      return;
    }

    await installPrompt.prompt();
    await installPrompt.userChoice;
    setInstallPrompt(null);
  }

  async function copyNoteSection(section: CheatSheetSection) {
    const text = [section.title, section.summary, ...section.items].join("\n");

    try {
      await navigator.clipboard.writeText(text);
      setCopiedSectionId(section.id);
      window.setTimeout(() => {
        setCopiedSectionId((current) => (current === section.id ? null : current));
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
              { id: "cheatsheet", label: "Notes" }
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
        <section className={`page ${page === "home" ? "is-active" : ""}`}>
          <div className="tool-grid">
            {filteredApplets.some((applet) => applet.id === "tool-angle") ? (
              <article id="tool-angle" className="tool-panel">
                <div className="tool-heading">
                  <h3>Angle drop</h3>
                  <span className="tool-meta">Drop and developed length</span>
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
                          onChange={(event) => setAngleDrop(event.target.value)}
                        />
                        <select
                          className="unit-select"
                          aria-label="Unit"
                          value={angleUnit}
                          onChange={(event) => setAngleUnit(event.target.value)}
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
                          onChange={(event) => setAngleValue(event.target.value)}
                        />
                        <span className="suffix">deg</span>
                      </div>
                    </label>
                  </div>

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
                          onChange={(event) => setAngleTopStraight(event.target.value)}
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
                          onChange={(event) => setAngleBottomStraight(event.target.value)}
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
                        onChange={(event) => setAngleAllowance(event.target.value)}
                      />
                      <span className="suffix">{angleUnit}</span>
                    </div>
                  </label>
                </div>

                <div className="tool-output">
                  <div className="result-main">
                    <p className="result-label">Angled piece</p>
                    <p className="result-value">{angleResult.angledLengthValue}</p>
                  </div>
                  <div className="mini-metrics">
                    <div>
                      <span>Horizontal offset</span>
                      <strong>{angleResult.offsetValue}</strong>
                    </div>
                    <div>
                      <span>Total developed length</span>
                      <strong>{angleResult.totalLengthValue}</strong>
                    </div>
                  </div>
                  <p className="formula-note">{angleResult.formula}</p>
                  <p className="status-note">{angleResult.status}</p>
                </div>
              </article>
            ) : null}

            {filteredApplets.some((applet) => applet.id === "tool-ohms") ? (
              <article id="tool-ohms" className="tool-panel">
                <div className="tool-heading">
                  <h3>Ohm&apos;s law</h3>
                  <span className="tool-meta">V / I / R</span>
                </div>

                <div className="tool-form">
                  <label className="field">
                    <span>Solve</span>
                    <select
                      value={ohmsTarget}
                      onChange={(event) => setOhmsTarget(event.target.value as OhmsTarget)}
                    >
                      <option value="voltage">Voltage (V)</option>
                      <option value="current">Current (A)</option>
                      <option value="resistance">Resistance (ohm)</option>
                    </select>
                  </label>

                  <div className="field-row">
                    <label className="field">
                      <span>{ohmsResult.inputLabels[0]}</span>
                      <input
                        type="number"
                        inputMode="decimal"
                        min="0"
                        step="0.01"
                        value={ohmsInputA}
                        onChange={(event) => setOhmsInputA(event.target.value)}
                      />
                    </label>
                    <label className="field">
                      <span>{ohmsResult.inputLabels[1]}</span>
                      <input
                        type="number"
                        inputMode="decimal"
                        min="0"
                        step="0.01"
                        value={ohmsInputB}
                        onChange={(event) => setOhmsInputB(event.target.value)}
                      />
                    </label>
                  </div>
                </div>

                <div className="tool-output">
                  <div className="result-main">
                    <p className="result-label">{ohmsResult.label}</p>
                    <p className="result-value">{ohmsResult.resultValue}</p>
                  </div>
                  <p className="formula-note">{ohmsResult.formula}</p>
                  <p className="status-note">{ohmsResult.status}</p>
                </div>
              </article>
            ) : null}

            {filteredApplets.some((applet) => applet.id === "tool-load") ? (
              <article id="tool-load" className="tool-panel">
                <div className="tool-heading">
                  <h3>Load current</h3>
                  <span className="tool-meta">Single / three phase</span>
                </div>

                <div className="tool-form">
                  <label className="field">
                    <span>Phase</span>
                    <select
                      value={loadPhase}
                      onChange={(event) => {
                        const nextPhase = event.target.value as LoadPhase;
                        setLoadPhase(nextPhase);

                        if (nextPhase === "single" && loadVoltage === "400") {
                          setLoadVoltage("230");
                        }

                        if (nextPhase === "three" && loadVoltage === "230") {
                          setLoadVoltage("400");
                        }
                      }}
                    >
                      <option value="single">Single-phase</option>
                      <option value="three">Three-phase</option>
                    </select>
                  </label>

                  <div className="field-row">
                    <label className="field">
                      <span>Power (kW)</span>
                      <input
                        type="number"
                        inputMode="decimal"
                        min="0"
                        step="0.01"
                        value={loadPower}
                        onChange={(event) => setLoadPower(event.target.value)}
                      />
                    </label>
                    <label className="field">
                      <span>Voltage (V)</span>
                      <input
                        type="number"
                        inputMode="decimal"
                        min="0"
                        step="1"
                        value={loadVoltage}
                        onChange={(event) => setLoadVoltage(event.target.value)}
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
                      value={loadPf}
                      onChange={(event) => setLoadPf(event.target.value)}
                    />
                  </label>
                </div>

                <div className="tool-output">
                  <div className="result-main">
                    <p className="result-label">Current</p>
                    <p className="result-value">{loadResult.resultValue}</p>
                  </div>
                  <p className="formula-note">{loadResult.formula}</p>
                  <p className="status-note">{loadResult.status}</p>
                </div>
              </article>
            ) : null}

            {filteredApplets.some((applet) => applet.id === "tool-structure") ? (
              <article id="tool-structure" className="tool-panel">
                <div className="tool-heading">
                  <h3>Structural limits</h3>
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
                        onChange={(event) => setStructureWall(event.target.value)}
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
                        onChange={(event) => setStructureJoist(event.target.value)}
                      />
                    </label>
                  </div>
                </div>

                <div className="tool-output">
                  <div className="mini-metrics stacked">
                    <div>
                      <span>Vertical chase</span>
                      <strong>{structureResult.vertical}</strong>
                    </div>
                    <div>
                      <span>Horizontal chase</span>
                      <strong>{structureResult.horizontal}</strong>
                    </div>
                    <div>
                      <span>Joist notch</span>
                      <strong>{structureResult.notch}</strong>
                    </div>
                  </div>
                  <p className="status-note">{structureResult.status}</p>
                </div>
              </article>
            ) : null}
          </div>

          {!filteredApplets.length ? <p className="empty-state">No tools match that search.</p> : null}
        </section>

        <section className={`page ${page === "cheatsheet" ? "is-active" : ""}`}>
          <section className="page-header">
            <div>
              <h2>Notes</h2>
              <p className="page-copy">Quick reminders. Search filters this page.</p>
            </div>
          </section>

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
                <ul className="sheet-list">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          {!filteredCheatSections.length ? (
            <p className="empty-state">No cheat sheet entries match that search.</p>
          ) : null}
        </section>
      </main>

      {paletteOpen ? (
        <div className="modal-backdrop" onClick={() => setPaletteOpen(false)}>
          <div className="modal-shell" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
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
                onChange={(event) => setPaletteQuery(event.target.value)}
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
            onClick={(event) => event.stopPropagation()}
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
    </div>
  );
}

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
};
