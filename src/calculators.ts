// ── Constants ──────────────────────────────────────────
export const EPSILON = 1e-9;
export const COPPER_RESISTIVITY = 0.0175;
export const STANDARD_BREAKERS = [6, 10, 16, 20, 25, 32, 40, 50, 63, 80, 100];

export type ContainmentWidth = number | { nominal: number; actual: number };

export const CONTAINMENT_OPTIONS: { label: string; widths: ContainmentWidth[] }[] = [
  { label: "Tray", widths: [50, 75, 100, 150, 225, 300, 450, 600, 750, 900] },
  { label: "Basket", widths: [50, 100, 125, 150, 200, 300, 400, 500, 600] },
  { label: "Trunking", widths: [50, 75, 100, 150, 200, 300] },
  {
    label: "Ladder",
    widths: [
      { nominal: 150, actual: 200 },
      { nominal: 300, actual: 350 },
      { nominal: 400, actual: 450 },
      { nominal: 500, actual: 550 },
      { nominal: 600, actual: 650 },
      { nominal: 750, actual: 800 },
      { nominal: 900, actual: 950 }
    ]
  }
];

export function widthValue(w: ContainmentWidth): number {
  return typeof w === "number" ? w : w.actual;
}

export function widthLabel(w: ContainmentWidth): string {
  if (typeof w === "number") return `${w} mm`;
  return `${w.nominal} mm (outer ${w.actual})`;
}

export const DEFAULT_CONTAINMENT_ROD_VALUES = {
  overallHeight: "3165",
  topOfUnistrut: "2900",
  buffer: "100",
  unistrutDepth: "40"
} as const;

export const DEFAULT_UNISTRUT_LENGTH_VALUES = {
  containments: [
    { id: 1, label: "Tray", width: "225" },
    { id: 2, label: "Basket", width: "125" },
    { id: 3, label: "Trunking", width: "100" }
  ],
  leftAllowance: "50",
  rightAllowance: "50",
  gap: "50"
} as const;

// ── Types ──────────────────────────────────────────────
export type PhaseType = "single" | "three";
export type PowerTarget = "power" | "current" | "voltage";
export type BreakerInputMode = "current" | "power";

export type UnistrutContainmentRow = {
  id: number;
  label: string;
  width: string;
};

export type ContainmentRodResult = {
  validationMessage: string | null;
  actualDropValue: string;
  rodCutLengthValue: string;
  bottomOfUnistrutDropValue: string;
};

export type UnistrutLengthResult = {
  validationMessage: string | null;
  totalContainmentWidthValue: string;
  totalSideAllowanceValue: string;
  totalGapAllowanceValue: string;
  exactLengthValue: string;
  finalLengthValue: string;
  gapLabel: string;
};

export type AngleResult = {
  angledLengthValue: string;
  offsetValue: string;
  totalLengthValue: string;
};

export type PowerResult = {
  label: string;
  resultValue: string;
};

export type VoltageDropResult = {
  dropValue: string;
  percentValue: string;
  mvPerAmpMeterValue: string;
};

export type BreakerResult = {
  breakerValue: string;
  currentValue: string;
  rangeValue: string;
};

export type ConduitResult = {
  fillValue: string;
  usedAreaValue: string;
  remainingValue: string;
  overFill: boolean;
};

export type StructureResult = {
  vertical: string;
  horizontal: string;
  notch: string;
};

// ── Helpers ────────────────────────────────────────────
export function formatNumber(value: number): string {
  if (!Number.isFinite(value)) {
    return "--";
  }

  const precision = Math.abs(value) >= 100 ? 1 : 2;
  return value
    .toFixed(precision)
    .replace(/\.0+$|(\.\d*?[1-9])0+$/, "$1");
}

export function formatMeasure(value: number, unit: string): string {
  return `${formatNumber(value)} ${unit}`;
}

// ── Formulas ───────────────────────────────────────────

export const formulas = {
  containmentRod:
    "Rod cut length = (overall height - top of Unistrut) + buffer\nBottom of Unistrut drop = actual drop + Unistrut depth",
  unistrutLength:
    "Length = total widths + left allowance + right allowance + (gaps x gap size)\nRounded up to nearest 50 mm",
  angle:
    "Angled piece = drop / sin(angle)\nHorizontal offset = angled piece x cos(angle)\nTotal = top straight + angled + bottom straight + allowance",
  power:
    "Single-phase: P = V x I x PF\nThree-phase: P = sqrt(3) x V x I x PF",
  vdrop:
    "Single-phase: Vd = 2 x I x L x rho / A\nThree-phase: Vd = sqrt(3) x I x L x rho / A\nrho = 0.0175 (copper)",
  breaker:
    "Design current rounded up to next standard breaker size\nSizes: 6, 10, 16, 20, 25, 32, 40, 50, 63, 80, 100 A",
  conduit:
    "Fill % = (cable count x pi x (cable OD/2)^2) / (pi x (conduit ID/2)^2) x 100",
  structure:
    "Vertical chase = wall thickness / 3\nHorizontal chase = wall thickness / 6\nJoist notch = joist depth x 0.125"
} as const;

// ── Calculator functions ───────────────────────────────

export function calcContainmentRod(
  overallHeightStr: string,
  topOfUnistrutStr: string,
  bufferStr: string,
  unistrutDepthStr: string
): ContainmentRodResult {
  const overallHeight = Number.parseFloat(overallHeightStr);
  const topOfUnistrut = Number.parseFloat(topOfUnistrutStr);
  const buffer = Number.parseFloat(bufferStr);
  const unistrutDepth =
    unistrutDepthStr.trim() === ""
      ? Number.parseFloat(DEFAULT_CONTAINMENT_ROD_VALUES.unistrutDepth)
      : Number.parseFloat(unistrutDepthStr);

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
}

export function calcUnistrutLength(
  containments: UnistrutContainmentRow[],
  leftAllowanceStr: string,
  rightAllowanceStr: string,
  gapStr: string
): UnistrutLengthResult {
  if (!containments.length) {
    return {
      validationMessage: "Add at least one containment.",
      totalContainmentWidthValue: "-- mm",
      totalSideAllowanceValue: "-- mm",
      totalGapAllowanceValue: "-- mm",
      exactLengthValue: "-- mm",
      finalLengthValue: "-- mm",
      gapLabel: "0 gaps"
    };
  }

  const leftAllowance = Number.parseFloat(leftAllowanceStr);
  const rightAllowance = Number.parseFloat(rightAllowanceStr);
  const gap = Number.parseFloat(gapStr);
  const widths = containments.map((c) => Number.parseFloat(c.width));

  if (
    (Number.isFinite(leftAllowance) && leftAllowance < 0) ||
    (Number.isFinite(rightAllowance) && rightAllowance < 0) ||
    (Number.isFinite(gap) && gap < 0) ||
    widths.some((w) => Number.isFinite(w) && w < 0)
  ) {
    return {
      validationMessage: "Widths, allowances, and gaps cannot be negative.",
      totalContainmentWidthValue: "-- mm",
      totalSideAllowanceValue: "-- mm",
      totalGapAllowanceValue: "-- mm",
      exactLengthValue: "-- mm",
      finalLengthValue: "-- mm",
      gapLabel: `${Math.max(containments.length - 1, 0)} gaps`
    };
  }

  if (!Number.isFinite(leftAllowance) || !Number.isFinite(rightAllowance) || !Number.isFinite(gap)) {
    return {
      validationMessage: "Enter non-negative values for the side allowances and gap.",
      totalContainmentWidthValue: "-- mm",
      totalSideAllowanceValue: "-- mm",
      totalGapAllowanceValue: "-- mm",
      exactLengthValue: "-- mm",
      finalLengthValue: "-- mm",
      gapLabel: `${Math.max(containments.length - 1, 0)} gaps`
    };
  }

  if (widths.some((w) => !Number.isFinite(w))) {
    return {
      validationMessage: "Enter a width for each containment.",
      totalContainmentWidthValue: "-- mm",
      totalSideAllowanceValue: "-- mm",
      totalGapAllowanceValue: "-- mm",
      exactLengthValue: "-- mm",
      finalLengthValue: "-- mm",
      gapLabel: `${Math.max(containments.length - 1, 0)} gaps`
    };
  }

  const totalContainmentWidth = widths.reduce((t, w) => t + w, 0);
  const totalSideAllowance = leftAllowance + rightAllowance;
  const gapCount = Math.max(containments.length - 1, 0);
  const totalGapAllowance = gapCount * gap;
  const exactLength = totalContainmentWidth + totalSideAllowance + totalGapAllowance;
  const finalLength = Math.ceil(exactLength / 50) * 50;

  return {
    validationMessage: null,
    totalContainmentWidthValue: formatMeasure(totalContainmentWidth, "mm"),
    totalSideAllowanceValue: formatMeasure(totalSideAllowance, "mm"),
    totalGapAllowanceValue: formatMeasure(totalGapAllowance, "mm"),
    exactLengthValue: formatMeasure(exactLength, "mm"),
    finalLengthValue: formatMeasure(finalLength, "mm"),
    gapLabel: `${gapCount} gap${gapCount === 1 ? "" : "s"}`
  };
}

export function calcAngle(
  dropStr: string,
  angleStr: string,
  topStraightStr: string,
  bottomStraightStr: string,
  allowanceStr: string,
  unit: string,
  topBend = false,
  bottomBend = false,
  bendHeightStr = "0"
): AngleResult {
  const drop = Number.parseFloat(dropStr);
  const angle = Number.parseFloat(angleStr);
  const topStraight = Number.parseFloat(topStraightStr);
  const bottomStraight = Number.parseFloat(bottomStraightStr);
  const allowance = Number.parseFloat(allowanceStr);
  const bendHeight = Number.parseFloat(bendHeightStr);

  const empty: AngleResult = {
    angledLengthValue: "--",
    offsetValue: "--",
    totalLengthValue: "--"
  };

  if (!Number.isFinite(drop) || drop <= 0) return empty;
  if (!Number.isFinite(angle) || angle <= 0 || angle >= 90) return empty;
  if (
    !Number.isFinite(topStraight) ||
    !Number.isFinite(bottomStraight) ||
    !Number.isFinite(allowance) ||
    topStraight < 0 ||
    bottomStraight < 0 ||
    allowance < 0
  ) return empty;

  const bendCount = (topBend ? 1 : 0) + (bottomBend ? 1 : 0);
  const bendDeduction =
    bendCount > 0 && Number.isFinite(bendHeight) && bendHeight > 0
      ? bendCount * bendHeight
      : 0;
  const effectiveDrop = drop - bendDeduction;

  if (effectiveDrop <= 0) return empty;

  const radians = (angle * Math.PI) / 180;
  const sinValue = Math.sin(radians);
  const cosValue = Math.cos(radians);

  if (Math.abs(sinValue) < EPSILON) return empty;

  const angledLength = effectiveDrop / sinValue;
  const offset = angledLength * cosValue;
  const totalLength = topStraight + angledLength + bottomStraight + allowance;

  return {
    angledLengthValue: formatMeasure(angledLength, unit),
    offsetValue: formatMeasure(offset, unit),
    totalLengthValue: formatMeasure(totalLength, unit)
  };
}

export function calcPower(
  target: PowerTarget,
  phase: PhaseType,
  valueAStr: string,
  valueBStr: string,
  pfStr: string
): PowerResult {
  const valueA = Number.parseFloat(valueAStr);
  const valueB = Number.parseFloat(valueBStr);
  const pf = Number.parseFloat(pfStr);
  const phaseFactor = phase === "single" ? 1 : Math.sqrt(3);

  const emptyLabel = target === "power" ? "Power" : target === "current" ? "Current" : "Voltage";
  const emptyUnit = target === "power" ? "kW" : target === "current" ? "A" : "V";

  if (!Number.isFinite(valueA) || !Number.isFinite(valueB) || valueA <= 0 || valueB <= 0) {
    return { label: emptyLabel, resultValue: `-- ${emptyUnit}` };
  }

  if (!Number.isFinite(pf) || pf <= 0 || pf > 1) {
    return { label: emptyLabel, resultValue: `-- ${emptyUnit}` };
  }

  if (target === "power") {
    const powerKw = (phaseFactor * valueA * valueB * pf) / 1000;
    return { label: "Power", resultValue: `${formatNumber(powerKw)} kW` };
  }

  if (target === "current") {
    const current = (valueA * 1000) / (phaseFactor * valueB * pf);
    return { label: "Current", resultValue: `${formatNumber(current)} A` };
  }

  const voltage = (valueA * 1000) / (phaseFactor * valueB * pf);
  return { label: "Voltage", resultValue: `${formatNumber(voltage)} V` };
}

export function calcVoltageDrop(
  phaseType: PhaseType,
  currentStr: string,
  lengthStr: string,
  cableSizeStr: string,
  voltageStr: string
): VoltageDropResult {
  const current = Number.parseFloat(currentStr);
  const length = Number.parseFloat(lengthStr);
  const cableSize = Number.parseFloat(cableSizeStr);
  const voltage = Number.parseFloat(voltageStr);
  const multiplier = phaseType === "single" ? 2 : Math.sqrt(3);

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
    return { dropValue: "-- V", percentValue: "-- %", mvPerAmpMeterValue: "--" };
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
}

export function calcBreaker(
  mode: BreakerInputMode,
  currentStr: string,
  powerStr: string,
  phase: PhaseType,
  voltageStr: string,
  pfStr: string
): BreakerResult {
  const pf = Number.parseFloat(pfStr);
  const phaseFactor = phase === "single" ? 1 : Math.sqrt(3);

  let designCurrent = Number.NaN;

  if (mode === "current") {
    designCurrent = Number.parseFloat(currentStr);
  } else {
    const power = Number.parseFloat(powerStr);
    const voltage = Number.parseFloat(voltageStr);

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
    return { breakerValue: "-- A", currentValue: "-- A", rangeValue: "--" };
  }

  if (mode === "power" && (!Number.isFinite(pf) || pf <= 0 || pf > 1)) {
    return { breakerValue: "-- A", currentValue: "-- A", rangeValue: "--" };
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
}

export function calcConduit(
  conduitDiameterStr: string,
  cableDiameterStr: string,
  cableCountStr: string,
  maxFillStr: string
): ConduitResult {
  const conduit = Number.parseFloat(conduitDiameterStr);
  const cable = Number.parseFloat(cableDiameterStr);
  const count = Number.parseFloat(cableCountStr);
  const maxFill = Number.parseFloat(maxFillStr);

  if (
    !Number.isFinite(conduit) ||
    !Number.isFinite(cable) ||
    !Number.isFinite(count) ||
    !Number.isFinite(maxFill) ||
    conduit <= 0 ||
    cable <= 0 ||
    count <= 0 ||
    !Number.isInteger(count) ||
    maxFill <= 0 ||
    maxFill > 100
  ) {
    return { fillValue: "-- %", usedAreaValue: "-- mm²", remainingValue: "-- mm²", overFill: false };
  }

  const conduitArea = Math.PI * (conduit / 2) ** 2;
  const cableArea = Math.PI * (cable / 2) ** 2;
  const usedArea = cableArea * count;
  const remainingArea = Math.max(conduitArea - usedArea, 0);
  const fillPercent = (usedArea / conduitArea) * 100;

  return {
    fillValue: `${formatNumber(fillPercent)} %`,
    usedAreaValue: `${formatNumber(usedArea)} mm²`,
    remainingValue: `${formatNumber(remainingArea)} mm²`,
    overFill: fillPercent > maxFill
  };
}

export function calcStructure(
  wallStr: string,
  joistStr: string
): StructureResult {
  const wall = Number.parseFloat(wallStr);
  const joist = Number.parseFloat(joistStr);

  if (!Number.isFinite(wall) || !Number.isFinite(joist) || wall <= 0 || joist <= 0) {
    return { vertical: "-- mm", horizontal: "-- mm", notch: "-- mm" };
  }

  return {
    vertical: `${formatNumber(wall / 3)} mm`,
    horizontal: `${formatNumber(wall / 6)} mm`,
    notch: `${formatNumber(joist * 0.125)} mm`
  };
}
