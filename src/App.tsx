import { useEffect, useMemo, useRef, useState } from "react";

type PageId = "home" | "cheatsheet";
type OhmsTarget = "voltage" | "current" | "resistance";
type PhaseType = "single" | "three";
type PowerTarget = "power" | "current" | "voltage";
type BreakerInputMode = "current" | "power";

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
const COPPER_RESISTIVITY = 0.0175;
const STANDARD_BREAKERS = [6, 10, 16, 20, 25, 32, 40, 50, 63, 80, 100];
const DEFAULT_CONTAINMENT_ROD_VALUES = {
  overallHeight: "3165",
  topOfUnistrut: "2900",
  buffer: "100",
  unistrutDepth: "40"
} as const;

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
    id: "tool-containment-rod",
    title: "Containment rod",
    subtitle: "Rod cut and Unistrut drop",
    keywords: "containment rod threaded rod cut length unistrut strut drop buffer support channel"
  },
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

const ohmsConfig: Record<
  OhmsTarget,
  {
    label: string;
    unit: string;
    inputLabels: [string, string];
    compute: (a: number, b: number) => number;
  }
> = {
  voltage: {
    label: "Voltage",
    unit: "V",
    inputLabels: ["Current (A)", "Resistance (ohm)"],
    compute: (current, resistance) => current * resistance
  },
  current: {
    label: "Current",
    unit: "A",
    inputLabels: ["Voltage (V)", "Resistance (ohm)"],
    compute: (voltage, resistance) => voltage / resistance
  },
  resistance: {
    label: "Resistance",
    unit: "ohm",
    inputLabels: ["Voltage (V)", "Current (A)"],
    compute: (voltage, current) => voltage / current
  }
};

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

const toolHints = {
  containmentRod:
    "Actual drop = overall height - top of Unistrut. Rod cut length = actual drop + buffer. Bottom of Unistrut drop = actual drop + Unistrut depth.",
  angle: "Angled length = drop / sin(theta). Advanced: total = top + angled + bottom + allowance.",
  ohms: "V = I x R. I = V / R. R = V / I.",
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

  const precision = Math.abs(value) >= 100 ? 1 : 2;
  return value
    .toFixed(precision)
    .replace(/\.0+$|(\.\d*?[1-9])0+$/, "$1");
}

function formatMeasure(value: number, unit: string) {
  return `${formatNumber(value)} ${unit}`;
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

  const [containmentRodOverallHeight, setContainmentRodOverallHeight] = useState(
    DEFAULT_CONTAINMENT_ROD_VALUES.overallHeight
  );
  const [containmentRodTopOfUnistrut, setContainmentRodTopOfUnistrut] = useState(
    DEFAULT_CONTAINMENT_ROD_VALUES.topOfUnistrut
  );
  const [containmentRodBuffer, setContainmentRodBuffer] = useState(
    DEFAULT_CONTAINMENT_ROD_VALUES.buffer
  );
  const [containmentRodUnistrutDepth, setContainmentRodUnistrutDepth] = useState(
    DEFAULT_CONTAINMENT_ROD_VALUES.unistrutDepth
  );

  const [angleDrop, setAngleDrop] = useState("10");
  const [angleValue, setAngleValue] = useState("45");
  const [angleTopStraight, setAngleTopStraight] = useState("0");
  const [angleBottomStraight, setAngleBottomStraight] = useState("0");
  const [angleAllowance, setAngleAllowance] = useState("0");
  const [angleUnit, setAngleUnit] = useState("cm");
  const [angleAdvanced, setAngleAdvanced] = useState(false);

  const [ohmsTarget, setOhmsTarget] = useState<OhmsTarget>("voltage");
  const [ohmsInputA, setOhmsInputA] = useState("2");
  const [ohmsInputB, setOhmsInputB] = useState("10");

  const [powerTarget, setPowerTarget] = useState<PowerTarget>("current");
  const [powerPhase, setPowerPhase] = useState<PhaseType>("single");
  const [powerValueA, setPowerValueA] = useState("1");
  const [powerValueB, setPowerValueB] = useState("230");
  const [powerPf, setPowerPf] = useState("0.95");

  const [vdropPhase, setVdropPhase] = useState<PhaseType>("single");
  const [vdropCurrent, setVdropCurrent] = useState("20");
  const [vdropLength, setVdropLength] = useState("20");
  const [vdropCableSize, setVdropCableSize] = useState("2.5");
  const [vdropVoltage, setVdropVoltage] = useState("230");

  const [breakerMode, setBreakerMode] = useState<BreakerInputMode>("current");
  const [breakerCurrent, setBreakerCurrent] = useState("18");
  const [breakerPower, setBreakerPower] = useState("4");
  const [breakerPhase, setBreakerPhase] = useState<PhaseType>("single");
  const [breakerVoltage, setBreakerVoltage] = useState("230");
  const [breakerPf, setBreakerPf] = useState("0.95");

  const [conduitDiameter, setConduitDiameter] = useState("20");
  const [conduitCableDiameter, setConduitCableDiameter] = useState("6");
  const [conduitCableCount, setConduitCableCount] = useState("3");
  const [conduitMaxFill, setConduitMaxFill] = useState("40");

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

  function clearContainmentRod() {
    setContainmentRodOverallHeight("");
    setContainmentRodTopOfUnistrut("");
    setContainmentRodBuffer("");
    setContainmentRodUnistrutDepth("");
  }

  const containmentRodResult = useMemo(() => {
    const overallHeight = Number.parseFloat(containmentRodOverallHeight);
    const topOfUnistrut = Number.parseFloat(containmentRodTopOfUnistrut);
    const buffer = Number.parseFloat(containmentRodBuffer);
    const unistrutDepth =
      containmentRodUnistrutDepth.trim() === ""
        ? Number.parseFloat(DEFAULT_CONTAINMENT_ROD_VALUES.unistrutDepth)
        : Number.parseFloat(containmentRodUnistrutDepth);

    if (
      Number.isFinite(overallHeight) &&
      Number.isFinite(topOfUnistrut) &&
      topOfUnistrut > overallHeight
    ) {
      return {
        validationMessage: "Height to top of Unistrut cannot be more than overall height.",
        actualDropValue: "-- mm",
        rodCutLengthValue: "-- mm",
        bottomOfUnistrutDropValue: "-- mm"
      };
    }

    if (
      !Number.isFinite(overallHeight) ||
      !Number.isFinite(topOfUnistrut) ||
      !Number.isFinite(buffer) ||
      !Number.isFinite(unistrutDepth) ||
      overallHeight <= 0 ||
      topOfUnistrut < 0 ||
      buffer < 0 ||
      unistrutDepth < 0
    ) {
      return {
        validationMessage: null,
        actualDropValue: "-- mm",
        rodCutLengthValue: "-- mm",
        bottomOfUnistrutDropValue: "-- mm"
      };
    }

    const actualDrop = overallHeight - topOfUnistrut;
    const rodCutLength = actualDrop + buffer;
    const bottomOfUnistrutDrop = actualDrop + unistrutDepth;

    return {
      validationMessage: null,
      actualDropValue: formatMeasure(actualDrop, "mm"),
      rodCutLengthValue: formatMeasure(rodCutLength, "mm"),
      bottomOfUnistrutDropValue: formatMeasure(bottomOfUnistrutDrop, "mm")
    };
  }, [
    containmentRodBuffer,
    containmentRodOverallHeight,
    containmentRodTopOfUnistrut,
    containmentRodUnistrutDepth
  ]);

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
        totalLengthValue: "--"
      };
    }

    if (!Number.isFinite(angle) || angle <= 0 || angle >= 90) {
      return {
        angledLengthValue: "--",
        offsetValue: "--",
        totalLengthValue: "--"
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
        totalLengthValue: "--"
      };
    }

    const radians = (angle * Math.PI) / 180;
    const sinValue = Math.sin(radians);
    const cosValue = Math.cos(radians);

    if (Math.abs(sinValue) < EPSILON) {
      return {
        angledLengthValue: "--",
        offsetValue: "--",
        totalLengthValue: "--"
      };
    }

    const angledLength = drop / sinValue;
    const offset = angledLength * cosValue;
    const totalLength = topStraight + angledLength + bottomStraight + allowance;

    return {
      angledLengthValue: formatMeasure(angledLength, angleUnit),
      offsetValue: formatMeasure(offset, angleUnit),
      totalLengthValue: formatMeasure(totalLength, angleUnit)
    };
  }, [angleAdvanced, angleAllowance, angleBottomStraight, angleDrop, angleTopStraight, angleUnit, angleValue]);

  const ohmsResult = useMemo(() => {
    const config = ohmsConfig[ohmsTarget];
    const valueA = Number.parseFloat(ohmsInputA);
    const valueB = Number.parseFloat(ohmsInputB);

    if (!Number.isFinite(valueA) || !Number.isFinite(valueB) || valueA <= 0 || valueB <= 0) {
      return {
        ...config,
        resultValue: `-- ${config.unit}`
      };
    }

    if (Math.abs(valueB) < EPSILON && (ohmsTarget === "current" || ohmsTarget === "resistance")) {
      return {
        ...config,
        resultValue: `-- ${config.unit}`
      };
    }

    const result = config.compute(valueA, valueB);

    return {
      ...config,
      resultValue: `${formatNumber(result)} ${config.unit}`
    };
  }, [ohmsInputA, ohmsInputB, ohmsTarget]);

  const powerResult = useMemo(() => {
    const valueA = Number.parseFloat(powerValueA);
    const valueB = Number.parseFloat(powerValueB);
    const pf = Number.parseFloat(powerPf);
    const phaseFactor = powerPhase === "single" ? 1 : Math.sqrt(3);

    if (!Number.isFinite(valueA) || !Number.isFinite(valueB) || valueA <= 0 || valueB <= 0) {
      return {
        label: powerTarget === "power" ? "Power" : powerTarget === "current" ? "Current" : "Voltage",
        resultValue: powerTarget === "power" ? "-- kW" : powerTarget === "current" ? "-- A" : "-- V"
      };
    }

    if (!Number.isFinite(pf) || pf <= 0 || pf > 1) {
      return {
        label: powerTarget === "power" ? "Power" : powerTarget === "current" ? "Current" : "Voltage",
        resultValue: powerTarget === "power" ? "-- kW" : powerTarget === "current" ? "-- A" : "-- V"
      };
    }

    if ((powerTarget === "current" || powerTarget === "voltage") && Math.abs(valueB * pf) < EPSILON) {
      return {
        label: powerTarget === "current" ? "Current" : "Voltage",
        resultValue: powerTarget === "current" ? "-- A" : "-- V"
      };
    }

    if (powerTarget === "power") {
      const powerKw = (phaseFactor * valueA * valueB * pf) / 1000;
      return {
        label: "Power",
        resultValue: `${formatNumber(powerKw)} kW`
      };
    }

    if (powerTarget === "current") {
      const current = (valueA * 1000) / (phaseFactor * valueB * pf);
      return {
        label: "Current",
        resultValue: `${formatNumber(current)} A`
      };
    }

    const voltage = (valueA * 1000) / (phaseFactor * valueB * pf);
    return {
      label: "Voltage",
      resultValue: `${formatNumber(voltage)} V`
    };
  }, [powerPf, powerPhase, powerTarget, powerValueA, powerValueB]);

  const voltageDropResult = useMemo(() => {
    const current = Number.parseFloat(vdropCurrent);
    const length = Number.parseFloat(vdropLength);
    const cableSize = Number.parseFloat(vdropCableSize);
    const voltage = Number.parseFloat(vdropVoltage);
    const multiplier = vdropPhase === "single" ? 2 : Math.sqrt(3);

    if (
      !Number.isFinite(current) ||
      !Number.isFinite(length) ||
      !Number.isFinite(cableSize) ||
      !Number.isFinite(voltage) ||
      current <= 0 ||
      length <= 0 ||
      cableSize <= 0 ||
      voltage <= 0
    ) {
      return {
        dropValue: "-- V",
        percentValue: "-- %",
        mvPerAmpMeterValue: "--"
      };
    }

    const resistancePerMeter = COPPER_RESISTIVITY / cableSize;
    const drop = multiplier * current * length * resistancePerMeter;
    const percent = (drop / voltage) * 100;
    const mvPerAmpMeter = multiplier * resistancePerMeter * 1000;

    return {
      dropValue: `${formatNumber(drop)} V`,
      percentValue: `${formatNumber(percent)} %`,
      mvPerAmpMeterValue: formatNumber(mvPerAmpMeter)
    };
  }, [vdropCableSize, vdropCurrent, vdropLength, vdropPhase, vdropVoltage]);

  const breakerResult = useMemo(() => {
    const pf = Number.parseFloat(breakerPf);
    const phaseFactor = breakerPhase === "single" ? 1 : Math.sqrt(3);

    let designCurrent = Number.NaN;

    if (breakerMode === "current") {
      designCurrent = Number.parseFloat(breakerCurrent);
    } else {
      const power = Number.parseFloat(breakerPower);
      const voltage = Number.parseFloat(breakerVoltage);

      if (
        Number.isFinite(power) &&
        Number.isFinite(voltage) &&
        Number.isFinite(pf) &&
        power > 0 &&
        voltage > 0 &&
        pf > 0 &&
        pf <= 1
      ) {
        designCurrent = (power * 1000) / (phaseFactor * voltage * pf);
      }
    }

    if (!Number.isFinite(designCurrent) || designCurrent <= 0) {
      return {
        breakerValue: "-- A",
        currentValue: "-- A",
        rangeValue: "--"
      };
    }

    if (breakerMode === "power" && (!Number.isFinite(pf) || pf <= 0 || pf > 1)) {
      return {
        breakerValue: "-- A",
        currentValue: "-- A",
        rangeValue: "--"
      };
    }

    const nextIndex = STANDARD_BREAKERS.findIndex((size) => size >= designCurrent);
    const breakerSize =
      nextIndex >= 0 ? STANDARD_BREAKERS[nextIndex] : STANDARD_BREAKERS[STANDARD_BREAKERS.length - 1];
    const lowerSize =
      nextIndex > 0 ? STANDARD_BREAKERS[nextIndex - 1] : STANDARD_BREAKERS[0];
    const rangeValue =
      nextIndex === -1
        ? `Over ${breakerSize} A`
        : nextIndex > 0
          ? `${lowerSize} A to ${breakerSize} A`
          : `Up to ${breakerSize} A`;

    return {
      breakerValue: `${breakerSize} A`,
      currentValue: `${formatNumber(designCurrent)} A`,
      rangeValue
    };
  }, [breakerCurrent, breakerMode, breakerPf, breakerPhase, breakerPower, breakerVoltage]);

  const conduitResult = useMemo(() => {
    const conduit = Number.parseFloat(conduitDiameter);
    const cable = Number.parseFloat(conduitCableDiameter);
    const count = Number.parseFloat(conduitCableCount);
    const maxFill = Number.parseFloat(conduitMaxFill);

    if (
      !Number.isFinite(conduit) ||
      !Number.isFinite(cable) ||
      !Number.isFinite(count) ||
      !Number.isFinite(maxFill) ||
      conduit <= 0 ||
      cable <= 0 ||
      count <= 0 ||
      maxFill <= 0
    ) {
      return {
        fillValue: "-- %",
        usedAreaValue: "-- mm²",
        remainingValue: "-- mm²"
      };
    }

    const conduitArea = Math.PI * (conduit / 2) ** 2;
    const cableArea = Math.PI * (cable / 2) ** 2;
    const usedArea = cableArea * count;
    const remainingArea = Math.max(conduitArea - usedArea, 0);
    const fillPercent = (usedArea / conduitArea) * 100;

    return {
      fillValue: `${formatNumber(fillPercent)} %`,
      usedAreaValue: `${formatNumber(usedArea)} mm²`,
      remainingValue: `${formatNumber(remainingArea)} mm²`
    };
  }, [conduitCableCount, conduitCableDiameter, conduitDiameter, conduitMaxFill]);

  const structureResult = useMemo(() => {
    const wall = Number.parseFloat(structureWall);
    const joist = Number.parseFloat(structureJoist);

    if (!Number.isFinite(wall) || !Number.isFinite(joist) || wall <= 0 || joist <= 0) {
      return {
        vertical: "-- mm",
        horizontal: "-- mm",
        notch: "-- mm"
      };
    }

    return {
      vertical: `${formatNumber(wall / 3)} mm`,
      horizontal: `${formatNumber(wall / 6)} mm`,
      notch: `${formatNumber(joist * 0.125)} mm`
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
            {filteredApplets.some((applet) => applet.id === "tool-containment-rod") ? (
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
                        onChange={(event) => setContainmentRodOverallHeight(event.target.value)}
                      />
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
                        onChange={(event) => setContainmentRodTopOfUnistrut(event.target.value)}
                      />
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
                        onChange={(event) => setContainmentRodBuffer(event.target.value)}
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
                        onChange={(event) => setContainmentRodUnistrutDepth(event.target.value)}
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
                    <p className="result-value">{containmentRodResult.rodCutLengthValue}</p>
                  </div>
                  <div className="mini-metrics">
                    <div>
                      <span>Actual drop</span>
                      <strong>{containmentRodResult.actualDropValue}</strong>
                    </div>
                    <div>
                      <span>Bottom of Unistrut drop</span>
                      <strong>{containmentRodResult.bottomOfUnistrutDropValue}</strong>
                    </div>
                  </div>
                </div>
              </article>
            ) : null}

            {filteredApplets.some((applet) => applet.id === "tool-angle") ? (
              <article id="tool-angle" className="tool-panel">
                <div className="tool-heading">
                  <ToolTitle title="Angle drop" hint={toolHints.angle} />
                  <button
                    type="button"
                    className={`switch-chip ${angleAdvanced ? "is-active" : ""}`}
                    onClick={() => setAngleAdvanced((current) => !current)}
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
                    </>
                  ) : null}
                </div>

                <div className="tool-output">
                  <div className="result-main">
                    <p className="result-label">Angled piece</p>
                    <p className="result-value">{angleResult.angledLengthValue}</p>
                  </div>
                  {angleAdvanced ? (
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
                  ) : null}
                </div>
              </article>
            ) : null}

            {filteredApplets.some((applet) => applet.id === "tool-ohms") ? (
              <article id="tool-ohms" className="tool-panel">
                <div className="tool-heading">
                  <ToolTitle title="Ohm's law" hint={toolHints.ohms} />
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
                </div>
              </article>
            ) : null}

            {filteredApplets.some((applet) => applet.id === "tool-power") ? (
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
                        onChange={(event) => setPowerTarget(event.target.value as PowerTarget)}
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
                        onChange={(event) => setPowerPhase(event.target.value as PhaseType)}
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
                        onChange={(event) => setPowerValueA(event.target.value)}
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
                        onChange={(event) => setPowerValueB(event.target.value)}
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
                      onChange={(event) => setPowerPf(event.target.value)}
                    />
                  </label>
                </div>

                <div className="tool-output">
                  <div className="result-main">
                    <p className="result-label">{powerResult.label}</p>
                    <p className="result-value">{powerResult.resultValue}</p>
                  </div>
                </div>
              </article>
            ) : null}

            {filteredApplets.some((applet) => applet.id === "tool-vdrop") ? (
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
                        onChange={(event) => setVdropPhase(event.target.value as PhaseType)}
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
                        onChange={(event) => setVdropVoltage(event.target.value)}
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
                        onChange={(event) => setVdropCurrent(event.target.value)}
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
                        onChange={(event) => setVdropLength(event.target.value)}
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
                      onChange={(event) => setVdropCableSize(event.target.value)}
                    />
                  </label>
                </div>

                <div className="tool-output">
                  <div className="result-main">
                    <p className="result-label">Voltage drop</p>
                    <p className="result-value">{voltageDropResult.dropValue}</p>
                  </div>
                  <div className="mini-metrics">
                    <div>
                      <span>Drop percent</span>
                      <strong>{voltageDropResult.percentValue}</strong>
                    </div>
                    <div>
                      <span>mV / A / m</span>
                      <strong>{voltageDropResult.mvPerAmpMeterValue}</strong>
                    </div>
                  </div>
                </div>
              </article>
            ) : null}

            {filteredApplets.some((applet) => applet.id === "tool-breaker") ? (
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
                      onChange={(event) => setBreakerMode(event.target.value as BreakerInputMode)}
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
                        onChange={(event) => setBreakerCurrent(event.target.value)}
                      />
                    </label>
                  ) : (
                    <>
                      <div className="field-row">
                        <label className="field">
                          <span>Phase</span>
                          <select
                            value={breakerPhase}
                            onChange={(event) => setBreakerPhase(event.target.value as PhaseType)}
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
                            onChange={(event) => setBreakerVoltage(event.target.value)}
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
                            onChange={(event) => setBreakerPower(event.target.value)}
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
                            onChange={(event) => setBreakerPf(event.target.value)}
                          />
                        </label>
                      </div>
                    </>
                  )}
                </div>

                <div className="tool-output">
                  <div className="result-main">
                    <p className="result-label">Suggested breaker</p>
                    <p className="result-value">{breakerResult.breakerValue}</p>
                  </div>
                  <div className="mini-metrics">
                    <div>
                      <span>Design current</span>
                      <strong>{breakerResult.currentValue}</strong>
                    </div>
                    <div>
                      <span>Standard step</span>
                      <strong>{breakerResult.rangeValue}</strong>
                    </div>
                  </div>
                </div>
              </article>
            ) : null}

            {filteredApplets.some((applet) => applet.id === "tool-conduit") ? (
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
                        onChange={(event) => setConduitDiameter(event.target.value)}
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
                        onChange={(event) => setConduitCableDiameter(event.target.value)}
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
                        onChange={(event) => setConduitCableCount(event.target.value)}
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
                        onChange={(event) => setConduitMaxFill(event.target.value)}
                      />
                    </label>
                  </div>
                </div>

                <div className="tool-output">
                  <div className="result-main">
                    <p className="result-label">Fill</p>
                    <p className="result-value">{conduitResult.fillValue}</p>
                  </div>
                  <div className="mini-metrics">
                    <div>
                      <span>Used area</span>
                      <strong>{conduitResult.usedAreaValue}</strong>
                    </div>
                    <div>
                      <span>Free area</span>
                      <strong>{conduitResult.remainingValue}</strong>
                    </div>
                  </div>
                </div>
              </article>
            ) : null}

            {filteredApplets.some((applet) => applet.id === "tool-structure") ? (
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
                </div>
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
