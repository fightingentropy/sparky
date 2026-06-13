import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { usePersistedState } from "./usePersistedState";
import "./FaultFinding.css";

const isNonNegativeNumber = (value: unknown): value is number =>
  typeof value === "number" && Number.isFinite(value) && value >= 0;

// ---------- Types ----------

type Mode = "VAC" | "VDC" | "OHMS" | "CONT" | "OFF";

type Reading = { value: number; unit: "V" | "Ω" | "kΩ"; ol?: boolean; beep?: boolean };

type TestPoint = {
  id: string;
  x: number;
  y: number;
  label: string;
  description: string;
};

type Choice = {
  key: "A" | "B" | "C" | "D";
  text: string;
  correct?: boolean;
  // explanation shown when this wrong choice is submitted
  whyWrong?: string;
};

type Scenario = {
  id: string;
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  symptom: string;
  // SVG body (no <svg> wrapper) — already-positioned in the 800x520 viewBox
  draw: () => React.ReactNode;
  testPoints: TestPoint[];
  // anchors for the meter probe leads to "exit" the meter
  redAnchor: { x: number; y: number };
  blackAnchor: { x: number; y: number };
  // readings keyed by `${red}|${black}|${mode}` (with optional |knobs suffix)
  readings: Record<string, Reading>;
  // optional environment knobs the user can toggle (e.g., switch positions)
  knobs?: Knob[];
  // hints to reveal in order
  hints: string[];
  choices: Choice[];
  // explanation shown after correct answer
  teaching: string;
  // how a real electrician would confirm
  confirm: string;
};

type Knob = {
  id: string;
  label: string;
  options: string[]; // segmented control options
};

type ProbeSide = "red" | "black";

type ScenarioState = {
  redTP: string | null;
  blackTP: string | null;
  active: ProbeSide;
  mode: Mode;
  knobs: Record<string, string>;
  selectedChoice: "A" | "B" | "C" | "D" | null;
  submission: {
    choice: "A" | "B" | "C" | "D";
    correct: boolean;
  } | null;
  hintsShown: number;
  hintsCounted: number;
  solved: boolean;
  attempts: number;
};

type FaultScenarioStats = {
  attempts: number;
  solves: number;
  firstTrySolves: number;
  hintsUsed: number;
  totalSeconds: number;
  bestSeconds: number | null;
  lastSolvedAt: number | null;
};

type FaultStats = {
  scenarios: Record<string, FaultScenarioStats>;
};

// ---------- Constants & helpers ----------

const SVG_W = 800;
const SVG_H = 520;
const FAULT_STATS_KEY = "ff-practice-stats-v1";

const DEFAULT_MODE_READING: Record<Mode, Reading> = {
  VAC: { value: 0, unit: "V" },
  VDC: { value: 0, unit: "V" },
  OHMS: { value: 0, unit: "Ω", ol: true },
  CONT: { value: 0, unit: "Ω", ol: true },
  OFF: { value: 0, unit: "V" }
};

function emptyScenarioStats(): FaultScenarioStats {
  return {
    attempts: 0,
    solves: 0,
    firstTrySolves: 0,
    hintsUsed: 0,
    totalSeconds: 0,
    bestSeconds: null,
    lastSolvedAt: null
  };
}

function readFaultStats(): FaultStats {
  try {
    const raw = localStorage.getItem(FAULT_STATS_KEY);
    if (!raw) return { scenarios: {} };
    const parsed = JSON.parse(raw) as unknown;
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return { scenarios: {} };
    const scenarios = (parsed as Partial<FaultStats>).scenarios;
    if (!scenarios || typeof scenarios !== "object" || Array.isArray(scenarios)) return { scenarios: {} };
    const out: Record<string, FaultScenarioStats> = {};
    for (const [id, value] of Object.entries(scenarios)) {
      if (!value || typeof value !== "object" || Array.isArray(value)) continue;
      const stat = value as Partial<FaultScenarioStats>;
      out[id] = {
        attempts: Number.isFinite(stat.attempts) ? Number(stat.attempts) : 0,
        solves: Number.isFinite(stat.solves) ? Number(stat.solves) : 0,
        firstTrySolves: Number.isFinite(stat.firstTrySolves) ? Number(stat.firstTrySolves) : 0,
        hintsUsed: Number.isFinite(stat.hintsUsed) ? Number(stat.hintsUsed) : 0,
        totalSeconds: Number.isFinite(stat.totalSeconds) ? Number(stat.totalSeconds) : 0,
        bestSeconds: typeof stat.bestSeconds === "number" ? stat.bestSeconds : null,
        lastSolvedAt: typeof stat.lastSolvedAt === "number" ? stat.lastSolvedAt : null
      };
    }
    return { scenarios: out };
  } catch {
    return { scenarios: {} };
  }
}

function writeFaultStats(stats: FaultStats) {
  try {
    localStorage.setItem(FAULT_STATS_KEY, JSON.stringify(stats));
  } catch {
    // quota — ignore
  }
}

function formatDuration(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds <= 0) return "--";
  if (seconds < 60) return `${Math.round(seconds)}s`;
  const minutes = Math.floor(seconds / 60);
  const remaining = Math.round(seconds % 60);
  return `${minutes}m ${remaining}s`;
}

function readingKey(red: string, black: string, mode: Mode, knobs: Record<string, string>): string {
  const knobStr = Object.keys(knobs)
    .sort()
    .map((k) => `${k}=${knobs[k]}`)
    .join(",");
  return `${red}|${black}|${mode}${knobStr ? `|${knobStr}` : ""}`;
}

function lookupReading(scenario: Scenario, st: ScenarioState): Reading | null {
  if (st.mode === "OFF") return null;
  if (!st.redTP || !st.blackTP) return null;
  if (st.redTP === st.blackTP) {
    if (st.mode === "VAC" || st.mode === "VDC") return { value: 0, unit: "V" };
    return { value: 0, unit: "Ω", beep: st.mode === "CONT" };
  }
  const direct = scenario.readings[readingKey(st.redTP, st.blackTP, st.mode, st.knobs)];
  if (direct) return direct;
  const swapped = scenario.readings[readingKey(st.blackTP, st.redTP, st.mode, st.knobs)];
  if (swapped) {
    if (st.mode === "VDC") return { ...swapped, value: -swapped.value };
    return swapped;
  }
  return DEFAULT_MODE_READING[st.mode];
}

function formatReading(r: Reading | null, mode: Mode): { display: string; unit: string; ol: boolean } {
  if (mode === "OFF") return { display: "----", unit: "", ol: false };
  if (!r) return { display: "----", unit: unitForMode(mode), ol: false };
  if (r.ol) return { display: "OL", unit: r.unit, ol: true };
  if (mode === "CONT") {
    if (r.value < 30) return { display: "0.00", unit: "Ω", ol: false };
    return { display: "OL", unit: "Ω", ol: true };
  }
  if (mode === "OHMS") {
    if (r.unit === "kΩ") return { display: r.value.toFixed(2), unit: "kΩ", ol: false };
    if (r.value >= 1000) return { display: (r.value / 1000).toFixed(2), unit: "kΩ", ol: false };
    return { display: r.value.toFixed(1), unit: "Ω", ol: false };
  }
  // VAC / VDC
  const sign = r.value < 0 ? "-" : "";
  const abs = Math.abs(r.value);
  return { display: `${sign}${abs.toFixed(1)}`, unit: r.unit, ol: false };
}

function unitForMode(mode: Mode): string {
  switch (mode) {
    case "VAC":
      return "V AC";
    case "VDC":
      return "V DC";
    case "OHMS":
      return "Ω";
    case "CONT":
      return "Ω";
    case "OFF":
      return "";
  }
}

// ---------- Schematic primitives (SVG helpers) ----------

function Switch({
  x,
  y,
  closed,
  label
}: {
  x: number;
  y: number;
  closed: boolean;
  label?: string;
}) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <circle cx="-22" cy="0" r="3" fill="var(--surface-alt)" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="22" cy="0" r="3" fill="var(--surface-alt)" stroke="currentColor" strokeWidth="1.5" />
      <line
        x1="-22"
        y1="0"
        x2={closed ? 22 : 16}
        y2={closed ? 0 : -14}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {label ? (
        <text x="0" y="22" textAnchor="middle" fontSize="10" fill="var(--muted)">{label}</text>
      ) : null}
    </g>
  );
}

function ThreeWaySwitch({
  x,
  y,
  position,
  label
}: {
  x: number;
  y: number;
  position: "up" | "down";
  label?: string;
}) {
  const tx = 30;
  const ty = position === "up" ? -14 : 14;
  return (
    <g transform={`translate(${x}, ${y})`}>
      <circle cx="-30" cy="0" r="3" fill="var(--surface-alt)" stroke="currentColor" strokeWidth="1.5" />
      <circle cx={tx} cy="-14" r="3" fill="var(--surface-alt)" stroke="currentColor" strokeWidth="1.5" />
      <circle cx={tx} cy="14" r="3" fill="var(--surface-alt)" stroke="currentColor" strokeWidth="1.5" />
      <line x1="-30" y1="0" x2={tx - 4} y2={ty} stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {label ? (
        <text x="0" y="-22" textAnchor="middle" fontSize="10" fill="var(--muted)">{label}</text>
      ) : null}
    </g>
  );
}

function Lamp({ x, y, label }: { x: number; y: number; label?: string }) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <circle cx="0" cy="0" r="14" fill="var(--surface-alt)" stroke="currentColor" strokeWidth="1.5" />
      <line x1="-10" y1="-10" x2="10" y2="10" stroke="currentColor" strokeWidth="1.5" />
      <line x1="-10" y1="10" x2="10" y2="-10" stroke="currentColor" strokeWidth="1.5" />
      <line x1="-22" y1="0" x2="-14" y2="0" stroke="currentColor" strokeWidth="2" />
      <line x1="14" y1="0" x2="22" y2="0" stroke="currentColor" strokeWidth="2" />
      {label ? (
        <text x="0" y="-22" textAnchor="middle" fontSize="10" fill="var(--muted)">{label}</text>
      ) : null}
    </g>
  );
}

function Receptacle({ x, y, label }: { x: number; y: number; label?: string }) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <circle cx="0" cy="0" r="16" fill="var(--surface-alt)" stroke="currentColor" strokeWidth="1.5" />
      <line x1="-6" y1="-6" x2="-6" y2="0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="6" y1="-6" x2="6" y2="0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="0" cy="6" r="2" fill="currentColor" />
      <line x1="-22" y1="-8" x2="-16" y2="-8" stroke="currentColor" strokeWidth="2" />
      <line x1="22" y1="-8" x2="16" y2="-8" stroke="currentColor" strokeWidth="2" />
      <line x1="0" y1="22" x2="0" y2="16" stroke="currentColor" strokeWidth="2" />
      {label ? (
        <text x="0" y="-26" textAnchor="middle" fontSize="10" fill="var(--muted)">{label}</text>
      ) : null}
    </g>
  );
}

function GFCI({ x, y, label }: { x: number; y: number; label?: string }) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <rect x="-22" y="-22" width="44" height="44" rx="6" fill="var(--surface-alt)" stroke="currentColor" strokeWidth="1.5" />
      <text x="0" y="-6" textAnchor="middle" fontSize="9" fill="var(--accent-strong)" fontWeight="600">GFCI</text>
      <line x1="-8" y1="4" x2="-8" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="8" y1="4" x2="8" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <text x="-12" y="-30" textAnchor="end" fontSize="8" fill="var(--muted)">LINE</text>
      <text x="12" y="-30" textAnchor="start" fontSize="8" fill="var(--muted)">LOAD</text>
      {label ? (
        <text x="0" y="34" textAnchor="middle" fontSize="10" fill="var(--muted)">{label}</text>
      ) : null}
    </g>
  );
}

function Breaker({ x, y, label }: { x: number; y: number; label?: string }) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <rect x="-18" y="-12" width="36" height="24" rx="4" fill="var(--surface-alt)" stroke="currentColor" strokeWidth="1.5" />
      <line x1="-12" y1="0" x2="12" y2="0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <text x="0" y="-18" textAnchor="middle" fontSize="9" fill="var(--muted)">{label ?? "BRK"}</text>
    </g>
  );
}

function Wire({ d, broken }: { d: string; broken?: boolean }) {
  return (
    <path
      d={d}
      fill="none"
      stroke={broken ? "var(--danger)" : "currentColor"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray={broken ? "4 5" : undefined}
      opacity={broken ? 0.55 : 1}
    />
  );
}

// ---------- Scenarios ----------

const SCENARIOS: Scenario[] = [
  // ------------------------- SCENARIO 1 -------------------------
  (() => {
    const tps: TestPoint[] = [
      { id: "TP1", x: 90, y: 110, label: "TP1", description: "Panel hot rail" },
      { id: "TP2", x: 270, y: 230, label: "TP2", description: "Switch line side" },
      { id: "TP3", x: 330, y: 230, label: "TP3", description: "Switch load side" },
      { id: "TP4", x: 540, y: 230, label: "TP4", description: "Lamp hot terminal" },
      { id: "TP5", x: 600, y: 230, label: "TP5", description: "Lamp neutral terminal" },
      { id: "TP6", x: 90, y: 410, label: "TP6", description: "Panel neutral rail" }
    ];
    const r: Record<string, Reading> = {};
    r["TP1|TP6|VAC"] = { value: 120.0, unit: "V" };
    r["TP2|TP6|VAC"] = { value: 120.0, unit: "V" };
    r["TP1|TP2|VAC"] = { value: 0.0, unit: "V" };
    r["TP3|TP6|VAC"] = { value: 0.0, unit: "V" };
    r["TP3|TP4|VAC"] = { value: 0.0, unit: "V" };
    r["TP4|TP6|VAC"] = { value: 0.0, unit: "V" };
    r["TP5|TP6|VAC"] = { value: 0.0, unit: "V" };
    r["TP4|TP5|VAC"] = { value: 0.0, unit: "V" };
    r["TP2|TP3|VAC"] = { value: 120.0, unit: "V" };
    r["TP2|TP3|OHMS"] = { value: 0, unit: "Ω", ol: true };
    r["TP4|TP5|OHMS"] = { value: 32, unit: "Ω" };
    r["TP1|TP2|OHMS"] = { value: 0.4, unit: "Ω" };
    r["TP3|TP4|OHMS"] = { value: 0.3, unit: "Ω" };
    r["TP5|TP6|OHMS"] = { value: 0.4, unit: "Ω" };
    r["TP2|TP3|CONT"] = { value: 9999, unit: "Ω", ol: true };
    r["TP4|TP5|CONT"] = { value: 32, unit: "Ω" };
    r["TP1|TP2|CONT"] = { value: 0, unit: "Ω", beep: true };
    r["TP3|TP4|CONT"] = { value: 0, unit: "Ω", beep: true };
    r["TP5|TP6|CONT"] = { value: 0, unit: "Ω", beep: true };

    return {
      id: "s1-dead-lamp",
      title: "The dead lamp",
      difficulty: "Easy",
      symptom:
        "Single ceiling lamp on a plain switch. Breaker is on, but the lamp is dead. Flipping the switch makes no difference. Other lights on the same circuit work fine.",
      draw: () => (
        <g color="var(--text)">
          <rect x="40" y="80" width="80" height="360" rx="6" fill="var(--surface-alt)" stroke="currentColor" strokeWidth="1.5" />
          <text x="80" y="72" textAnchor="middle" fontSize="11" fill="var(--muted-strong)">PANEL</text>
          <Breaker x={80} y={140} label="15A" />
          <text x="80" y="425" textAnchor="middle" fontSize="9" fill="var(--muted)">N</text>
          <Wire d="M 80 152 L 80 110 L 270 110 L 270 220" />
          <Switch x={300} y={230} closed={false} label="SWITCH" />
          <Wire d="M 322 230 L 540 230" />
          <Lamp x={570} y={230} label="LAMP" />
          <Wire d="M 600 244 L 600 410 L 80 410" />
          <text x="80" y="455" textAnchor="middle" fontSize="9" fill="var(--muted)">to neutral bar</text>
          <text x="200" y="100" fontSize="9" fill="var(--muted)">HOT</text>
          <text x="540" y="400" fontSize="9" fill="var(--muted)">NEUTRAL</text>
        </g>
      ),
      testPoints: tps,
      redAnchor: { x: 740, y: 470 },
      blackAnchor: { x: 776, y: 470 },
      readings: r,
      hints: [
        "Confirm the supply: probe between TP1 (hot) and TP6 (neutral). You should read 120 V AC.",
        "Voltage on the line side of the switch (TP2 vs TP6) tells you whether power reaches the switch. What's on the load side (TP3)?",
        "If TP2 has 120 V but TP3 reads 0 V regardless of switch position, the switch itself is broken open."
      ],
      choices: [
        { key: "A", text: "Switch is faulty — open in both positions.", correct: true },
        {
          key: "B",
          text: "Neutral wire is broken between the lamp and the panel.",
          whyWrong:
            "TP5 reads 0 V to TP6 — the neutral has continuity. A broken neutral would show floating voltage on TP5."
        },
        {
          key: "C",
          text: "Bulb is burned out.",
          whyWrong:
            "Resistance across the lamp terminals (TP4–TP5) is ~32 Ω, normal for an incandescent filament. The bulb is good."
        },
        {
          key: "D",
          text: "Hot wire is broken between the panel and the switch.",
          whyWrong:
            "TP2 reads 120 V to neutral, so hot reaches the switch. The break is downstream of TP2."
        }
      ],
      teaching:
        "The switch is internally open. TP2 sees full hot voltage; TP3 stays at 0 V even when the toggle is flipped. Replace the switch.",
      confirm:
        "Kill the breaker, pull the switch out, and ohm across the two screws. A good single-pole reads 0 Ω closed and OL open. This one reads OL in both positions."
    };
  })(),

  // ------------------------- SCENARIO 2 -------------------------
  (() => {
    const tps: TestPoint[] = [
      { id: "TP1", x: 130, y: 90, label: "TP1", description: "Panel hot rail" },
      { id: "TP2", x: 130, y: 430, label: "TP2", description: "Panel neutral rail" },
      { id: "TP3", x: 260, y: 200, label: "TP3", description: "Outlet A — hot screw (line)" },
      { id: "TP4", x: 260, y: 290, label: "TP4", description: "Outlet A — neutral screw (line)" },
      { id: "TP5", x: 330, y: 200, label: "TP5", description: "Outlet A — hot screw (load)" },
      { id: "TP6", x: 330, y: 290, label: "TP6", description: "Outlet A — neutral pigtail (load side)" },
      { id: "TP7", x: 470, y: 200, label: "TP7", description: "Outlet B — hot terminal" },
      { id: "TP8", x: 470, y: 290, label: "TP8", description: "Outlet B — neutral terminal" },
      { id: "TP9", x: 620, y: 200, label: "TP9", description: "Outlet C — hot terminal" },
      { id: "TP10", x: 620, y: 290, label: "TP10", description: "Outlet C — neutral terminal" }
    ];

    const r: Record<string, Reading> = {};
    r["TP1|TP2|VAC"] = { value: 120.0, unit: "V" };
    r["TP3|TP4|VAC"] = { value: 120.0, unit: "V" };
    r["TP3|TP2|VAC"] = { value: 120.0, unit: "V" };
    r["TP4|TP2|VAC"] = { value: 0.0, unit: "V" };
    r["TP5|TP2|VAC"] = { value: 120.0, unit: "V" };
    r["TP5|TP4|VAC"] = { value: 120.0, unit: "V" };
    r["TP6|TP2|VAC"] = { value: 0.0, unit: "V" };
    r["TP7|TP2|VAC"] = { value: 120.0, unit: "V" };
    r["TP9|TP2|VAC"] = { value: 120.0, unit: "V" };
    r["TP8|TP2|VAC"] = { value: 78.0, unit: "V" };
    r["TP10|TP2|VAC"] = { value: 78.0, unit: "V" };
    r["TP7|TP8|VAC"] = { value: 42.0, unit: "V" };
    r["TP9|TP10|VAC"] = { value: 42.0, unit: "V" };
    r["TP6|TP8|VAC"] = { value: 0.0, unit: "V" };
    r["TP8|TP10|VAC"] = { value: 0.0, unit: "V" };
    r["TP4|TP6|OHMS"] = { value: 9999, unit: "Ω", ol: true };
    r["TP6|TP8|OHMS"] = { value: 0.5, unit: "Ω" };
    r["TP8|TP10|OHMS"] = { value: 0.4, unit: "Ω" };
    r["TP4|TP8|OHMS"] = { value: 9999, unit: "Ω", ol: true };
    r["TP4|TP2|OHMS"] = { value: 0.5, unit: "Ω" };
    r["TP3|TP5|OHMS"] = { value: 0.1, unit: "Ω" };
    r["TP5|TP7|OHMS"] = { value: 0.4, unit: "Ω" };
    r["TP7|TP9|OHMS"] = { value: 0.4, unit: "Ω" };
    r["TP4|TP6|CONT"] = { value: 9999, unit: "Ω", ol: true };
    r["TP6|TP8|CONT"] = { value: 0, unit: "Ω", beep: true };
    r["TP8|TP10|CONT"] = { value: 0, unit: "Ω", beep: true };
    r["TP3|TP5|CONT"] = { value: 0, unit: "Ω", beep: true };
    r["TP5|TP7|CONT"] = { value: 0, unit: "Ω", beep: true };

    return {
      id: "s2-downstream-outlets",
      title: "Two downstream outlets dead",
      difficulty: "Medium",
      symptom:
        "A daisy-chain of three bedroom outlets. The first (closest to the panel) works fine. The next two are dead — no power for a vacuum, lamp, or phone charger. Breaker is on, no visible damage.",
      draw: () => (
        <g color="var(--text)">
          <rect x="40" y="60" width="80" height="380" rx="6" fill="var(--surface-alt)" stroke="currentColor" strokeWidth="1.5" />
          <text x="80" y="52" textAnchor="middle" fontSize="11" fill="var(--muted-strong)">PANEL</text>
          <Breaker x={80} y={140} label="20A" />
          <text x="80" y="460" textAnchor="middle" fontSize="9" fill="var(--muted)">N bar</text>
          <Wire d="M 80 152 L 80 90 L 130 90 L 130 200 L 240 200" />
          <Wire d="M 80 152 L 80 430 L 130 430 L 130 290 L 240 290" />
          <Receptacle x={295} y={245} label="OUTLET A" />
          <Wire d="M 350 200 L 450 200" />
          <Wire d="M 350 290 L 450 290" broken />
          <text x="370" y="282" fontSize="9" fill="var(--danger)">loose pigtail</text>
          <Receptacle x={495} y={245} label="OUTLET B" />
          <Wire d="M 520 200 L 600 200" />
          <Wire d="M 520 290 L 600 290" />
          <Receptacle x={645} y={245} label="OUTLET C" />
          <text x="260" y="180" fontSize="9" fill="var(--muted)">line H</text>
          <text x="330" y="180" fontSize="9" fill="var(--muted)">load H</text>
          <text x="260" y="312" fontSize="9" fill="var(--muted)">line N</text>
          <text x="330" y="312" fontSize="9" fill="var(--muted)">load N</text>
        </g>
      ),
      testPoints: tps,
      redAnchor: { x: 740, y: 470 },
      blackAnchor: { x: 776, y: 470 },
      readings: r,
      hints: [
        "Outlet A works, B and C don't. The break is between A's downstream pigtail and outlet B somewhere — but on which conductor?",
        "Probe TP7 (B's hot) to TP2 (panel neutral): 120 V — hot is reaching B. Now probe TP7 to TP8 (B's hot to its own neutral): only ~42 V. That's a phantom reading.",
        "Phantom voltage with no load + zero across hot-to-neutral when loaded means the neutral is open. Trace the neutral back: ohm TP4 to TP6."
      ],
      choices: [
        {
          key: "A",
          text: "Open hot at outlet A's downstream terminal.",
          whyWrong:
            "TP5 (load-side hot at A) reads 120 V to neutral, and so do TP7 and TP9. The hot run is intact through all three boxes."
        },
        { key: "B", text: "Open neutral at outlet A's downstream pigtail.", correct: true },
        {
          key: "C",
          text: "Backstabbed connection at outlet B has failed.",
          whyWrong:
            "If the failure were inside outlet B, outlet C would behave differently from B. They show identical phantom readings — the break is upstream of B."
        },
        {
          key: "D",
          text: "Outlets B and C are both bad.",
          whyWrong:
            "Two simultaneous identical failures is implausible, and ohming TP6–TP8 confirms the wire between them is fine. The fault is at A's pigtail."
        }
      ],
      teaching:
        "Open neutral on the upstream wire-nut at outlet A. The downstream lights lose their return path. The 'phantom' 78 V you see on the dead outlets is capacitive coupling — a high-impedance meter picks it up but it can't drive a load.",
      confirm:
        "Kill the breaker. Open box A. The neutral pigtail will be loose on the wire-nut or back-stabbed and pulled out. Re-pigtail with a properly-tightened wire-nut and verify continuity TP4 to TP6 reads near 0 Ω."
    };
  })(),

  // ------------------------- SCENARIO 3 -------------------------
  (() => {
    const tps: TestPoint[] = [
      { id: "TP1", x: 100, y: 80, label: "TP1", description: "Panel hot rail" },
      { id: "TP2", x: 100, y: 440, label: "TP2", description: "Panel neutral rail" },
      { id: "TP3", x: 230, y: 250, label: "TP3", description: "S1 common terminal" },
      { id: "TP4", x: 320, y: 200, label: "TP4", description: "S1 traveler #1 terminal" },
      { id: "TP5", x: 320, y: 300, label: "TP5", description: "S1 traveler #2 terminal" },
      { id: "TP6", x: 540, y: 200, label: "TP6", description: "S2 traveler #1 terminal" },
      { id: "TP7", x: 540, y: 300, label: "TP7", description: "S2 traveler #2 terminal" },
      { id: "TP8", x: 630, y: 250, label: "TP8", description: "S2 common terminal" },
      { id: "TP9", x: 700, y: 130, label: "TP9", description: "Light hot terminal" },
      { id: "TP10", x: 700, y: 410, label: "TP10", description: "Light neutral terminal" }
    ];
    const knobs: Knob[] = [
      { id: "S1", label: "Switch S1", options: ["Up", "Down"] },
      { id: "S2", label: "Switch S2", options: ["Up", "Down"] }
    ];

    const r: Record<string, Reading> = {};
    type Combo = { s1: "Up" | "Down"; s2: "Up" | "Down" };
    const combos: Combo[] = [
      { s1: "Up", s2: "Up" },
      { s1: "Up", s2: "Down" },
      { s1: "Down", s2: "Up" },
      { s1: "Down", s2: "Down" }
    ];

    for (const c of combos) {
      const knobsStr = `S1=${c.s1},S2=${c.s2}`;
      const k = (a: string, b: string, mode: Mode): string => `${a}|${b}|${mode}|${knobsStr}`;
      r[k("TP1", "TP2", "VAC")] = { value: 120.0, unit: "V" };
      r[k("TP3", "TP2", "VAC")] = { value: 120.0, unit: "V" };
      r[k("TP4", "TP2", "VAC")] = c.s1 === "Up" ? { value: 120.0, unit: "V" } : { value: 0.0, unit: "V" };
      r[k("TP5", "TP2", "VAC")] = c.s1 === "Down" ? { value: 120.0, unit: "V" } : { value: 0.0, unit: "V" };
      r[k("TP6", "TP2", "VAC")] = { value: 0.0, unit: "V" };
      r[k("TP7", "TP2", "VAC")] = c.s1 === "Down" ? { value: 120.0, unit: "V" } : { value: 0.0, unit: "V" };
      const s2Routes: "T1" | "T2" = c.s2 === "Up" ? "T1" : "T2";
      const lightHot = s2Routes === "T2" && c.s1 === "Down" ? 120.0 : 0.0;
      r[k("TP8", "TP2", "VAC")] = { value: lightHot, unit: "V" };
      r[k("TP9", "TP2", "VAC")] = { value: lightHot, unit: "V" };
      r[k("TP10", "TP2", "VAC")] = { value: 0.0, unit: "V" };
      r[k("TP9", "TP10", "VAC")] = { value: lightHot, unit: "V" };
      r[k("TP4", "TP6", "VAC")] = c.s1 === "Up" ? { value: 120.0, unit: "V" } : { value: 0.0, unit: "V" };
      r[k("TP5", "TP7", "VAC")] = { value: 0.0, unit: "V" };
      r[k("TP4", "TP6", "OHMS")] = { value: 9999, unit: "Ω", ol: true };
      r[k("TP5", "TP7", "OHMS")] = { value: 0.4, unit: "Ω" };
      r[k("TP4", "TP6", "CONT")] = { value: 9999, unit: "Ω", ol: true };
      r[k("TP5", "TP7", "CONT")] = { value: 0, unit: "Ω", beep: true };
    }

    return {
      id: "s3-three-way",
      title: "Three-way switch puzzle",
      difficulty: "Hard",
      symptom:
        "Stairwell light controlled by two 3-way switches. Sometimes the top switch turns it on, sometimes the bottom. But when the bottom switch is in one specific position, the top switch can't change anything — the light is stuck off in that combination.",
      draw: () => (
        <g color="var(--text)">
          <rect x="40" y="60" width="80" height="400" rx="6" fill="var(--surface-alt)" stroke="currentColor" strokeWidth="1.5" />
          <text x="80" y="52" textAnchor="middle" fontSize="11" fill="var(--muted-strong)">PANEL</text>
          <Breaker x={80} y={140} label="15A" />
          <Wire d="M 80 152 L 80 80 L 200 80 L 200 250 L 230 250" />
          <ThreeWaySwitch x={260} y={250} position="up" label="S1" />
          <ThreeWaySwitch x={570} y={250} position="up" label="S2" />
          <Wire d="M 320 200 L 540 200" broken />
          <Wire d="M 320 300 L 540 300" />
          <text x="420" y="190" fontSize="9" fill="var(--danger)">traveler #1 (open)</text>
          <text x="420" y="318" fontSize="9" fill="var(--muted)">traveler #2</text>
          <Wire d="M 630 250 L 700 250 L 700 130" />
          <Lamp x={700} y={130} label="LIGHT" />
          <Wire d="M 700 144 L 700 410 L 80 410 L 80 460" />
          <text x="80" y="478" textAnchor="middle" fontSize="9" fill="var(--muted)">to N bar</text>
        </g>
      ),
      testPoints: tps,
      redAnchor: { x: 740, y: 470 },
      blackAnchor: { x: 776, y: 470 },
      readings: r,
      knobs,
      hints: [
        "Try every combination of S1/S2 and watch what makes the light come on. Look for the combo that's stuck.",
        "Probe TP4 (S1 traveler 1) to neutral with S1=Up: 120 V. Now probe TP6 (S2 traveler 1) to neutral: 0 V. The voltage isn't getting across that traveler.",
        "Ohm or use continuity from TP4 to TP6 with the breaker off — if it reads OL, that traveler wire is open."
      ],
      choices: [
        {
          key: "A",
          text: "S1's common terminal is bad.",
          whyWrong:
            "TP3 (S1 common) reads 120 V to neutral. The common is fine — voltage is reaching the switch and being routed."
        },
        {
          key: "B",
          text: "S2's common terminal is bad.",
          whyWrong:
            "When the working traveler (#2) is selected by both switches, you get 120 V at S2's common (TP8). The terminal isn't the issue."
        },
        { key: "C", text: "Traveler #1 (between S1 and S2) is open.", correct: true },
        {
          key: "D",
          text: "The light fixture is bad.",
          whyWrong:
            "When the circuit does close (S1=Down + S2=Down), you read 120 V across the lamp terminals and the light works. The fixture is good."
        }
      ],
      teaching:
        "Traveler #1 between the two 3-way switches is broken. Whenever S1 routes to that traveler, S2 has nothing to switch — flipping S2 can't recover the circuit because no voltage is arriving on that wire.",
      confirm:
        "De-energize. Disconnect both ends of traveler #1 and ohm it: if OL, the wire's open. With long runs in stud cavities, common culprits are nail-strikes or a broken splice in a junction box mid-run."
    };
  })(),

  // ------------------------- SCENARIO 4 -------------------------
  (() => {
    const tps: TestPoint[] = [
      { id: "TP1", x: 90, y: 80, label: "TP1", description: "Panel hot" },
      { id: "TP2", x: 90, y: 440, label: "TP2", description: "Panel neutral" },
      { id: "TP3", x: 90, y: 360, label: "TP3", description: "Panel ground bar" },
      { id: "TP4", x: 250, y: 170, label: "TP4", description: "GFCI line — hot" },
      { id: "TP5", x: 250, y: 270, label: "TP5", description: "GFCI line — neutral" },
      { id: "TP6", x: 360, y: 170, label: "TP6", description: "GFCI load — hot" },
      { id: "TP7", x: 360, y: 270, label: "TP7", description: "GFCI load — neutral" },
      { id: "TP8", x: 510, y: 170, label: "TP8", description: "Outlet B — hot" },
      { id: "TP9", x: 510, y: 270, label: "TP9", description: "Outlet B — neutral" },
      { id: "TP10", x: 510, y: 360, label: "TP10", description: "Outlet B — ground" },
      { id: "TP11", x: 660, y: 170, label: "TP11", description: "Outlet C — hot" },
      { id: "TP12", x: 660, y: 270, label: "TP12", description: "Outlet C — neutral" },
      { id: "TP13", x: 660, y: 360, label: "TP13", description: "Outlet C — ground" }
    ];

    const r: Record<string, Reading> = {};
    r["TP1|TP2|VAC"] = { value: 120.0, unit: "V" };
    r["TP1|TP3|VAC"] = { value: 120.0, unit: "V" };
    r["TP2|TP3|VAC"] = { value: 0.1, unit: "V" };
    r["TP4|TP5|VAC"] = { value: 120.0, unit: "V" };
    r["TP4|TP3|VAC"] = { value: 120.0, unit: "V" };
    r["TP5|TP3|VAC"] = { value: 0.1, unit: "V" };
    r["TP6|TP7|VAC"] = { value: 120.0, unit: "V" };
    r["TP8|TP9|VAC"] = { value: 120.0, unit: "V" };
    r["TP11|TP12|VAC"] = { value: 120.0, unit: "V" };
    r["TP4|TP3|OHMS"] = { value: 9999, unit: "Ω", ol: true };
    r["TP6|TP3|OHMS"] = { value: 9999, unit: "Ω", ol: true };
    r["TP8|TP10|OHMS"] = { value: 9999, unit: "Ω", ol: true };
    r["TP11|TP13|OHMS"] = { value: 9999, unit: "Ω", ol: true };
    r["TP6|TP7|OHMS"] = { value: 9999, unit: "Ω", ol: true };
    r["TP8|TP9|OHMS"] = { value: 9999, unit: "Ω", ol: true };
    r["TP11|TP12|OHMS"] = { value: 9999, unit: "Ω", ol: true };
    r["TP5|TP3|OHMS"] = { value: 0.4, unit: "Ω" };
    r["TP7|TP10|OHMS"] = { value: 0.2, unit: "Ω" };
    r["TP9|TP10|OHMS"] = { value: 0.1, unit: "Ω" };
    r["TP12|TP13|OHMS"] = { value: 0.3, unit: "Ω" };
    r["TP5|TP7|OHMS"] = { value: 9999, unit: "Ω", ol: true };
    r["TP9|TP10|CONT"] = { value: 0, unit: "Ω", beep: true };
    r["TP12|TP13|CONT"] = { value: 0, unit: "Ω", beep: true };
    r["TP6|TP3|CONT"] = { value: 9999, unit: "Ω", ol: true };
    r["TP8|TP10|CONT"] = { value: 9999, unit: "Ω", ol: true };
    r["TP7|TP10|CONT"] = { value: 0, unit: "Ω", beep: true };

    return {
      id: "s4-gfci-trip",
      title: "GFCI keeps tripping",
      difficulty: "Hard",
      symptom:
        "A new GFCI receptacle in a kitchen trips the moment it's reset. Nothing is plugged in. The previous standard duplex in the same spot didn't trip. The downstream outlets work when the GFCI is bypassed.",
      draw: () => (
        <g color="var(--text)">
          <rect x="40" y="60" width="80" height="400" rx="6" fill="var(--surface-alt)" stroke="currentColor" strokeWidth="1.5" />
          <text x="80" y="52" textAnchor="middle" fontSize="11" fill="var(--muted-strong)">PANEL</text>
          <Breaker x={80} y={140} label="20A" />
          <text x="80" y="478" textAnchor="middle" fontSize="9" fill="var(--muted)">N / G bars</text>
          <Wire d="M 80 152 L 80 80 L 250 80 L 250 160" />
          <Wire d="M 80 152 L 80 270 L 250 270" />
          <Wire d="M 80 360 L 200 360 L 200 400 L 700 400 L 700 370" />
          <GFCI x={310} y={220} label="GFCI A" />
          <Wire d="M 332 200 L 360 170 L 510 170" />
          <Wire d="M 332 240 L 360 270 L 510 270" />
          <Receptacle x={510} y={220} label="OUTLET B" />
          <Wire d="M 532 212 L 660 170" />
          <Wire d="M 532 228 L 660 270" />
          <Wire d="M 510 240 L 510 360" />
          <Wire d="M 460 320 L 510 320" broken />
          <text x="380" y="338" fontSize="9" fill="var(--danger)">illegal N–G bond</text>
          <Receptacle x={660} y={220} label="OUTLET C" />
          <Wire d="M 660 240 L 660 360" />
        </g>
      ),
      testPoints: tps,
      redAnchor: { x: 740, y: 470 },
      blackAnchor: { x: 776, y: 470 },
      readings: r,
      hints: [
        "A GFCI trips the moment it's reset = it's seeing imbalance immediately. With nothing plugged in, the imbalance is in the wiring itself.",
        "Disconnect the load wires from the GFCI. Ohm the load-side neutral against the load-side ground (TP7 vs TP10).",
        "If the load-side neutral reads ~0 Ω to ground anywhere downstream, the neutral is bonded to ground — that's a parallel path that imbalances every GFCI."
      ],
      choices: [
        {
          key: "A",
          text: "GFCI is defective.",
          whyWrong:
            "Swapping the GFCI for a known good one wouldn't fix this — any working GFCI will trip on the same neutral-to-ground fault."
        },
        {
          key: "B",
          text: "Hot and neutral are swapped on the line side of the GFCI.",
          whyWrong:
            "Modern GFCIs detect line/load reversal and refuse to reset, but this one resets and instantly trips. The line wiring is correct."
        },
        {
          key: "C",
          text: "Downstream neutral is bonded to ground (creates a parallel path that imbalances the GFCI).",
          correct: true
        },
        {
          key: "D",
          text: "Downstream hot is shorted to ground.",
          whyWrong:
            "A hot-to-ground short would trip the breaker, not just the GFCI. Ohming TP6 or TP8 to ground reads OL — no hot-to-ground short exists."
        }
      ],
      teaching:
        "A neutral-to-ground bond exists somewhere downstream of the GFCI. Once normal current flows, some of it returns on the ground wire. The GFCI sees more current going out on hot than coming back on neutral and trips at 5 mA. NEC 250.142 only allows the neutral to be bonded to ground at the service.",
      confirm:
        "Pop each downstream box. Test load-side neutral to load-side ground with the GFCI's load wires disconnected. If you read continuity, separate the conductors at that box and the GFCI will hold."
    };
  })()
];

// ---------- Component ----------

const initialState = (sc: Scenario): ScenarioState => ({
  redTP: null,
  blackTP: null,
  active: "red",
  mode: "OFF",
  knobs: Object.fromEntries((sc.knobs ?? []).map((k) => [k.id, k.options[0] ?? ""])),
  selectedChoice: null,
  submission: null,
  hintsShown: 0,
  hintsCounted: 0,
  solved: false,
  attempts: 0
});

export function FaultFinding(): React.ReactElement {
  const [scenarioIdx, setScenarioIdx] = useState(0);
  const [faultStats, setFaultStats] = useState<FaultStats>(readFaultStats);
  // Persisted so the streak survives reloads, matching the persisted faultStats.
  const [streak, setStreak] = usePersistedState<number>("ff-streak", 0, isNonNegativeNumber);
  const [bestStreak, setBestStreak] = usePersistedState<number>("ff-best-streak", 0, isNonNegativeNumber);
  const [states, setStates] = useState<Record<string, ScenarioState>>(() => {
    const out: Record<string, ScenarioState> = {};
    for (const s of SCENARIOS) out[s.id] = initialState(s);
    return out;
  });

  const scenario = SCENARIOS[scenarioIdx] ?? SCENARIOS[0]!;
  const st = states[scenario.id] ?? initialState(scenario);
  const scenarioStartedAtRef = useRef(Date.now());

  useEffect(() => {
    writeFaultStats(faultStats);
  }, [faultStats]);

  useEffect(() => {
    scenarioStartedAtRef.current = Date.now();
  }, [scenario.id]);

  const updateState = useCallback((id: string, patch: Partial<ScenarioState>) => {
    setStates((prev) => {
      const fallback = SCENARIOS.find((s) => s.id === id) ?? SCENARIOS[0]!;
      const cur = prev[id] ?? initialState(fallback);
      return { ...prev, [id]: { ...cur, ...patch } };
    });
  }, []);

  // Single source of truth for "solved": derive from the persisted faultStats so
  // the nav chip and the practice-history tile can never disagree after reload.
  const solvedSet = useMemo(() => {
    const set = new Set<string>();
    for (const s of SCENARIOS) {
      if ((faultStats.scenarios[s.id]?.solves ?? 0) > 0) set.add(s.id);
    }
    return set;
  }, [faultStats]);

  const schematic = useMemo(() => scenario.draw(), [scenario]);
  const reading = useMemo(() => lookupReading(scenario, st), [scenario, st]);
  const formatted = useMemo(() => formatReading(reading, st.mode), [reading, st.mode]);
  const beeping = st.mode === "CONT" && reading != null && !reading.ol && reading.value < 30;
  const statsSummary = useMemo(() => {
    const values = SCENARIOS.map((s) => faultStats.scenarios[s.id] ?? emptyScenarioStats());
    const attempts = values.reduce((sum, value) => sum + value.attempts, 0);
    const solves = values.filter((value) => value.solves > 0).length;
    const hintsUsed = values.reduce((sum, value) => sum + value.hintsUsed, 0);
    const totalSeconds = values.reduce((sum, value) => sum + value.totalSeconds, 0);
    const rankedWeakScenarios = SCENARIOS.map((s) => ({
      scenario: s,
      stats: faultStats.scenarios[s.id] ?? emptyScenarioStats()
    })).sort((a, b) => {
      const aUnsolved = a.stats.solves === 0 ? 1 : 0;
      const bUnsolved = b.stats.solves === 0 ? 1 : 0;
      if (aUnsolved !== bUnsolved) return bUnsolved - aUnsolved;
      const aMisses = Math.max(a.stats.attempts - a.stats.solves, 0);
      const bMisses = Math.max(b.stats.attempts - b.stats.solves, 0);
      if (aMisses !== bMisses) return bMisses - aMisses;
      return b.stats.hintsUsed - a.stats.hintsUsed;
    });
    const weakScenario = attempts > 0 ? rankedWeakScenarios[0]?.scenario : null;
    return {
      attempts,
      solves,
      averageHints: attempts ? hintsUsed / attempts : 0,
      averageSeconds: attempts ? totalSeconds / attempts : 0,
      weakScenario
    };
  }, [faultStats]);

  const handleTPClick = (tpId: string) => {
    if (st.submission?.correct) return;
    if (st.active === "red") {
      updateState(scenario.id, { redTP: tpId, active: "black" });
    } else {
      updateState(scenario.id, { blackTP: tpId, active: "red" });
    }
  };

  const handleModeSelect = (mode: Mode) => {
    updateState(scenario.id, { mode });
  };

  const handleActiveToggle = (side: ProbeSide) => {
    updateState(scenario.id, { active: side });
  };

  const handleHint = () => {
    if (st.hintsShown >= scenario.hints.length) return;
    updateState(scenario.id, { hintsShown: st.hintsShown + 1 });
  };

  const handleChoiceSelect = (key: "A" | "B" | "C" | "D") => {
    if (st.submission?.correct) return;
    updateState(scenario.id, { selectedChoice: key });
  };

  const handleSubmit = () => {
    if (!st.selectedChoice) return;
    if (st.submission?.correct) return;
    const choice = scenario.choices.find((c) => c.key === st.selectedChoice);
    if (!choice) return;
    const correct = !!choice.correct;
    const attempts = st.attempts + 1;
    const elapsedSeconds = Math.max(1, Math.round((Date.now() - scenarioStartedAtRef.current) / 1000));
    // Credit only hints revealed since the last submission, so multi-attempt
    // scenarios don't multiply the hint count by the number of attempts.
    const newHints = Math.max(0, st.hintsShown - st.hintsCounted);
    updateState(scenario.id, {
      submission: { choice: st.selectedChoice, correct },
      attempts,
      hintsCounted: st.hintsShown
    });
    setFaultStats((prev) => {
      const current = prev.scenarios[scenario.id] ?? emptyScenarioStats();
      const next: FaultScenarioStats = {
        attempts: current.attempts + 1,
        solves: current.solves + (correct ? 1 : 0),
        firstTrySolves: current.firstTrySolves + (correct && attempts === 1 ? 1 : 0),
        hintsUsed: current.hintsUsed + newHints,
        totalSeconds: current.totalSeconds + elapsedSeconds,
        bestSeconds: correct
          ? current.bestSeconds === null
            ? elapsedSeconds
            : Math.min(current.bestSeconds, elapsedSeconds)
          : current.bestSeconds,
        lastSolvedAt: correct ? Date.now() : current.lastSolvedAt
      };
      return {
        scenarios: {
          ...prev.scenarios,
          [scenario.id]: next
        }
      };
    });
    if (correct) {
      if (attempts === 1) {
        // streak is fresh in this event handler; compute next outside the
        // updaters so neither setter runs a side effect inside the other.
        const nextStreak = streak + 1;
        setStreak(nextStreak);
        setBestStreak((b) => Math.max(b, nextStreak));
      }
      // solvedSet is derived from faultStats (updated above), so nothing to set.
    } else {
      setStreak(0);
    }
  };

  const handleTryAgain = () => {
    updateState(scenario.id, { submission: null, selectedChoice: null });
  };

  const handleNext = () => {
    if (scenarioIdx < SCENARIOS.length - 1) setScenarioIdx(scenarioIdx + 1);
  };

  const handlePrev = () => {
    if (scenarioIdx > 0) setScenarioIdx(scenarioIdx - 1);
  };

  const handleReset = () => {
    updateState(scenario.id, { redTP: null, blackTP: null, active: "red" });
  };

  const handleKnob = (id: string, value: string) => {
    updateState(scenario.id, { knobs: { ...st.knobs, [id]: value } });
  };

  const practiceWeakArea = () => {
    if (!statsSummary.weakScenario) return;
    const index = SCENARIOS.findIndex((s) => s.id === statsSummary.weakScenario?.id);
    if (index >= 0) setScenarioIdx(index);
  };

  const allSolved = solvedSet.size === SCENARIOS.length;
  const submission = st.submission;
  const submittedChoice = submission ? scenario.choices.find((c) => c.key === submission.choice) : null;
  const currentScenarioStats = faultStats.scenarios[scenario.id] ?? emptyScenarioStats();

  const redPos = st.redTP ? scenario.testPoints.find((tp) => tp.id === st.redTP) ?? null : null;
  const blackPos = st.blackTP ? scenario.testPoints.find((tp) => tp.id === st.blackTP) ?? null : null;

  return (
    <div className="ff-shell">
      <div className="ff-scene">
        <div className="ff-scene-header">
          <div className="ff-scene-title">
            <span className="ff-scene-tag">FAULT FINDING</span>
            <span className="ff-scene-name">{scenario.title}</span>
            <span className={`ff-difficulty ff-d-${scenario.difficulty.toLowerCase()}`}>{scenario.difficulty}</span>
          </div>
          <div className="ff-scene-actions">
            <button className="ff-icon-btn" onClick={handleReset} title="Clear probes" aria-label="Clear probes">
              <IconReset />
            </button>
          </div>
        </div>

        <svg
          className="ff-svg"
          viewBox={`0 0 ${SVG_W} ${SVG_H}`}
          role="img"
          aria-label={`${scenario.title} schematic`}
        >
          <defs>
            <pattern id="ff-grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.025)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width={SVG_W} height={SVG_H} fill="url(#ff-grid)" />

          {schematic}

          {scenario.testPoints.map((tp) => {
            const isRed = st.redTP === tp.id;
            const isBlack = st.blackTP === tp.id;
            const tooltipX = tp.x + 14;
            const tooltipY = tp.y - 38;
            return (
              <g
                key={tp.id}
                className="ff-tp"
                role="button"
                tabIndex={0}
                aria-label={`Probe ${tp.label}: ${tp.description}`}
                onClick={() => handleTPClick(tp.id)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    handleTPClick(tp.id);
                  }
                }}
              >
                <circle cx={tp.x} cy={tp.y} r={11} className="ff-tp-hit" />
                <circle
                  cx={tp.x}
                  cy={tp.y}
                  r={isRed || isBlack ? 8 : 7}
                  className={"ff-tp-dot" + (isRed ? " ff-tp-red" : "") + (isBlack ? " ff-tp-black" : "")}
                />
                <text x={tp.x} y={tp.y - 12} textAnchor="middle" className="ff-tp-label">
                  {tp.label}
                </text>
                <g className="ff-tp-tooltip">
                  <rect x={tooltipX} y={tooltipY} width={150} height={32} rx="4" fill="#0e1116" stroke="var(--border-strong)" />
                  <text x={tooltipX + 8} y={tooltipY + 13} fontSize="10" fill="var(--text)" fontWeight={600}>{tp.label}</text>
                  <text x={tooltipX + 8} y={tooltipY + 26} fontSize="9" fill="var(--muted-strong)">{tp.description}</text>
                </g>
              </g>
            );
          })}

          {redPos ? (
            <ProbeLead from={scenario.redAnchor} to={{ x: redPos.x, y: redPos.y }} color="#ef5350" />
          ) : null}
          {blackPos ? (
            <ProbeLead from={scenario.blackAnchor} to={{ x: blackPos.x, y: blackPos.y }} color="#222" />
          ) : null}

          {/* meter anchor jacks (decorative) */}
          <g transform="translate(720, 480)">
            <rect x="0" y="0" width="76" height="34" rx="6" fill="var(--surface-alt)" stroke="var(--border-strong)" />
            <circle cx="20" cy="17" r="6" fill="#ef5350" stroke="#3a1010" strokeWidth="2" />
            <circle cx="56" cy="17" r="6" fill="#222" stroke="#0a0a0a" strokeWidth="2" />
            <text x="38" y="-3" fontSize="8" textAnchor="middle" fill="var(--muted)">METER</text>
          </g>
        </svg>

        {scenario.knobs && scenario.knobs.length > 0 ? (
          <div className="ff-scene-knobs">
            {scenario.knobs.map((k) => (
              <div key={k.id} className="ff-knob">
                <span className="ff-knob-label">{k.label}</span>
                <div className="ff-segmented" role="radiogroup" aria-label={k.label}>
                  {k.options.map((opt) => (
                    <button
                      key={opt}
                      className={"ff-segment" + (st.knobs[k.id] === opt ? " ff-segment-on" : "")}
                      onClick={() => handleKnob(k.id, opt)}
                      role="radio"
                      aria-checked={st.knobs[k.id] === opt}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>

      <aside className="ff-hud">
        <section className="ff-card ff-card-nav">
          <div className="ff-nav-row">
            <button className="ff-icon-btn" onClick={handlePrev} disabled={scenarioIdx === 0} aria-label="Previous scenario">
              <IconArrowLeft />
            </button>
            <div className="ff-nav-meta">
              <span className="ff-scenario-counter">Scenario {scenarioIdx + 1} of {SCENARIOS.length}</span>
              <span className="ff-scenario-name">{scenario.title}</span>
            </div>
            <button className="ff-icon-btn" onClick={handleNext} disabled={scenarioIdx === SCENARIOS.length - 1} aria-label="Next scenario">
              <IconArrowRight />
            </button>
          </div>
          <div className="ff-streak-row">
            <div className="ff-streak">
              <span className="ff-flame" aria-hidden>🔥</span>
              <span className="ff-streak-num">{streak}</span>
              <span className="ff-streak-label">streak</span>
            </div>
            <div className="ff-best">Best: {bestStreak}</div>
            <div className="ff-solved-chip">{solvedSet.size}/{SCENARIOS.length} solved</div>
          </div>
        </section>

        <section className="ff-card ff-card-progress">
          <header className="ff-card-head">
            <span className="ff-card-icon"><IconGauge /></span>
            <h3 className="ff-card-title">Practice history</h3>
          </header>
          <div className="ff-progress-grid">
            <div>
              <span>Attempts</span>
              <strong>{statsSummary.attempts}</strong>
            </div>
            <div>
              <span>Solved</span>
              <strong>{statsSummary.solves}/{SCENARIOS.length}</strong>
            </div>
            <div>
              <span>Avg hints</span>
              <strong>{statsSummary.averageHints.toFixed(1)}</strong>
            </div>
            <div>
              <span>Avg time</span>
              <strong>{formatDuration(statsSummary.averageSeconds)}</strong>
            </div>
          </div>
          <div className="ff-current-stats">
            <span>This scenario</span>
            <strong>
              {currentScenarioStats.solves} solved / {currentScenarioStats.attempts} attempts
              {currentScenarioStats.bestSeconds ? `, best ${formatDuration(currentScenarioStats.bestSeconds)}` : ""}
            </strong>
          </div>
          <button
            type="button"
            className="ff-hint-btn ff-weak-btn"
            onClick={practiceWeakArea}
            disabled={!statsSummary.weakScenario}
          >
            Practice weak area
          </button>
        </section>

        {allSolved ? (
          <section className="ff-card ff-mastery">
            <strong>Mastery achieved</strong>
            <span>You diagnosed every scenario. Real circuits aren't this neat — but the procedure is the same.</span>
          </section>
        ) : null}

        <section className="ff-card ff-card-symptom">
          <header className="ff-card-head">
            <span className="ff-card-icon"><IconBolt /></span>
            <h3 className="ff-card-title">Symptom</h3>
          </header>
          <p className="ff-symptom">{scenario.symptom}</p>
        </section>

        <section className="ff-meter">
          <div className="ff-meter-brand">
            <span>SPARKY DMM</span>
            <span className="ff-meter-model">SK-117</span>
          </div>
          <div className={"ff-meter-screen" + (formatted.ol ? " ff-screen-ol" : "")}>
            <div className="ff-screen-glyphs">
              <span className="ff-screen-mode">{modeLabel(st.mode)}</span>
              <div className="ff-screen-led-row">
                <span className="ff-screen-led ff-led-dim">HOLD</span>
                <span className="ff-screen-led ff-led-dim">REL</span>
                <span className="ff-screen-led ff-led-dim">MIN/MAX</span>
                {beeping ? <span className="ff-screen-led ff-led-on">BEEP</span> : null}
              </div>
            </div>
            <div className="ff-screen-main">
              <span key={`${formatted.display}-${st.mode}`} className="ff-screen-value">
                {formatted.display}
              </span>
              <span className="ff-screen-unit">{formatted.unit}</span>
            </div>
            {beeping ? <div className="ff-screen-beep" aria-hidden /> : null}
          </div>
          <div className="ff-meter-modes">
            {(["VAC", "VDC", "OHMS", "CONT", "OFF"] as Mode[]).map((m) => (
              <button
                key={m}
                className={"ff-mode-btn" + (st.mode === m ? " ff-mode-active" : "")}
                onClick={() => handleModeSelect(m)}
                aria-pressed={st.mode === m}
                aria-label={modeLabel(m)}
              >
                {modeShort(m)}
              </button>
            ))}
          </div>
          <div className="ff-active-row">
            <span className="ff-active-label">Next click moves:</span>
            <div className="ff-segmented ff-segmented-probe">
              <button
                className={"ff-segment" + (st.active === "red" ? " ff-segment-red" : "")}
                onClick={() => handleActiveToggle("red")}
                aria-pressed={st.active === "red"}
              >
                <span className="ff-dot ff-dot-red" /> RED
              </button>
              <button
                className={"ff-segment" + (st.active === "black" ? " ff-segment-black" : "")}
                onClick={() => handleActiveToggle("black")}
                aria-pressed={st.active === "black"}
              >
                <span className="ff-dot ff-dot-black" /> BLACK
              </button>
            </div>
          </div>
          <div className="ff-probe-status">
            <span>Red: <strong>{st.redTP ?? "—"}</strong></span>
            <span>Black: <strong>{st.blackTP ?? "—"}</strong></span>
          </div>
        </section>

        <section className="ff-card ff-card-hints">
          <header className="ff-card-head">
            <span className="ff-card-icon"><IconBulb /></span>
            <h3 className="ff-card-title">Hints</h3>
            <span className="ff-hint-count">{st.hintsShown}/{scenario.hints.length} used</span>
          </header>
          {st.hintsShown < scenario.hints.length ? (
            <button className="ff-hint-btn" onClick={handleHint}>Get a hint</button>
          ) : (
            <p className="ff-muted-note">All hints revealed.</p>
          )}
          <ul className="ff-hint-list">
            {scenario.hints.slice(0, st.hintsShown).map((h, i) => (
              <li key={i}>
                <span className="ff-hint-num">#{i + 1}</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="ff-card ff-card-diag">
          <header className="ff-card-head">
            <span className="ff-card-icon"><IconStethoscope /></span>
            <h3 className="ff-card-title">Diagnosis</h3>
          </header>
          <ul className="ff-choices">
            {scenario.choices.map((c) => {
              const isSelected = st.selectedChoice === c.key;
              const isSubmitted = submission?.choice === c.key;
              const isWrongSubmitted = !!submission && !submission.correct && isSubmitted;
              const isRightSubmitted = !!submission && submission.correct && isSubmitted;
              return (
                <li key={c.key}>
                  <button
                    className={
                      "ff-choice" +
                      (isSelected ? " ff-choice-selected" : "") +
                      (isRightSubmitted ? " ff-choice-correct" : "") +
                      (isWrongSubmitted ? " ff-choice-wrong" : "")
                    }
                    onClick={() => handleChoiceSelect(c.key)}
                    disabled={!!submission?.correct}
                  >
                    <span className="ff-choice-key">{c.key}</span>
                    <span className="ff-choice-text">{c.text}</span>
                    {isRightSubmitted ? <IconCheck /> : null}
                    {isWrongSubmitted ? <IconX /> : null}
                  </button>
                </li>
              );
            })}
          </ul>
          {!submission || !submission.correct ? (
            <button className="ff-submit" onClick={handleSubmit} disabled={!st.selectedChoice}>
              Submit diagnosis
            </button>
          ) : null}

          {submission && submission.correct ? (
            <div className="ff-banner ff-banner-good">
              <div className="ff-banner-head">
                <IconCheck />
                <strong>Correct diagnosis</strong>
              </div>
              <p>{scenario.teaching}</p>
              <p className="ff-confirm"><em>Confirm in the field:</em> {scenario.confirm}</p>
              {scenarioIdx < SCENARIOS.length - 1 ? (
                <button className="ff-submit ff-submit-next" onClick={handleNext}>
                  Next scenario <IconArrowRight />
                </button>
              ) : (
                <p className="ff-muted-note">You're at the final scenario.</p>
              )}
            </div>
          ) : null}

          {submission && !submission.correct && submittedChoice ? (
            <div className="ff-banner ff-banner-bad">
              <div className="ff-banner-head">
                <IconX />
                <strong>Not quite — that's not the fault.</strong>
              </div>
              <p>{submittedChoice.whyWrong ?? "Try again — re-check your readings."}</p>
              <button className="ff-submit ff-submit-retry" onClick={handleTryAgain}>Try again</button>
            </div>
          ) : null}
        </section>

        <section className="ff-card ff-card-note">
          <p className="ff-muted-note">
            Tip: this is a teaching simulation. In real diagnostics, always de-energize before resistance/continuity testing,
            verify your meter on a known live source, and lock-out / tag-out the breaker.
          </p>
        </section>
      </aside>
    </div>
  );
}

// ---------- Subcomponents ----------

function ProbeLead({
  from,
  to,
  color
}: {
  from: { x: number; y: number };
  to: { x: number; y: number };
  color: string;
}) {
  const mx = (from.x + to.x) / 2;
  const my = Math.max(from.y, to.y) + 30;
  const d = `M ${from.x} ${from.y} Q ${mx} ${my} ${to.x} ${to.y}`;
  return (
    <g className="ff-probe-lead" pointerEvents="none">
      <path d={d} fill="none" stroke={color} strokeWidth="3.5" strokeLinecap="round" opacity="0.95" className="ff-probe-path" />
      <path d={d} fill="none" stroke={color === "#222" ? "#3a3a3a" : "#ff8a87"} strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <circle cx={to.x} cy={to.y} r="5" fill={color} stroke="#000" strokeWidth="0.8" />
      <circle cx={to.x} cy={to.y} r="2.5" fill="#fff" opacity="0.65" />
    </g>
  );
}

function modeLabel(m: Mode): string {
  switch (m) {
    case "VAC":
      return "AC VOLTS";
    case "VDC":
      return "DC VOLTS";
    case "OHMS":
      return "RESISTANCE";
    case "CONT":
      return "CONTINUITY";
    case "OFF":
      return "OFF";
  }
}

function modeShort(m: Mode): string {
  switch (m) {
    case "VAC":
      return "V~";
    case "VDC":
      return "V⎓";
    case "OHMS":
      return "Ω";
    case "CONT":
      return "🔔";
    case "OFF":
      return "OFF";
  }
}

// ---------- Inline icons ----------

function IconArrowLeft() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  );
}

function IconArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function IconBulb() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M12 2a7 7 0 0 0-4 12c.5.6 1 1.4 1 2v2h6v-2c0-.6.5-1.4 1-2A7 7 0 0 0 12 2z" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function IconX() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function IconBolt() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <path d="M13 2 L4 14 h7 l-1 8 9-12 h-7 z" />
    </svg>
  );
}

function IconGauge() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12a9 9 0 1 0-18 0" />
      <path d="M12 12l4-4" />
      <path d="M8 15h8" />
    </svg>
  );
}

function IconStethoscope() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 3v6a4 4 0 0 0 8 0V3" />
      <path d="M5 3h2" />
      <path d="M13 3h2" />
      <path d="M10 13v3a4 4 0 0 0 8 0v-1" />
      <circle cx="18" cy="11" r="2" />
    </svg>
  );
}

function IconReset() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12a9 9 0 1 0 3-6.7" />
      <polyline points="3 4 3 9 8 9" />
    </svg>
  );
}
