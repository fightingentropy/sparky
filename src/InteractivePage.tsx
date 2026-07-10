import { Suspense, lazy, useEffect, useMemo, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import {
  simulate,
  makeComponent,
  lampBrightness,
  terminalWorldPosition,
  type Circuit,
  type CircuitComponent,
  type ComponentType,
  type Wire
} from "./circuitEngine";
import { useFocusTrap } from "./useFocusTrap";

const PanelTrainer = lazy(() => import("./PanelTrainer").then((m) => ({ default: m.PanelTrainer })));
const FaultFinding = lazy(() => import("./FaultFinding").then((m) => ({ default: m.FaultFinding })));

type Props = {
  isActive: boolean;
};

type TabId = "circuits" | "panel" | "faults";

const TAB_META: Record<TabId, { label: string; title: string; copy: string }> = {
  circuits: {
    label: "Circuits",
    title: "Interactive Circuits",
    copy: "Wire components, then energise the loop. Watch current, voltage drop, and tripped breakers in real time."
  },
  panel: {
    label: "Consumer unit",
    title: "Consumer Unit Trainer",
    copy: "Build a UK-style consumer unit. Match RCBOs and cable CSA, then check the design logic behind every circuit."
  },
  faults: {
    label: "Fault finding",
    title: "Fault Finding",
    copy: "Probe the schematic with a virtual multimeter, read the symptoms, and diagnose the hidden fault before the inspector arrives."
  }
};

type Tool = ComponentType | "select";

type DragState = {
  componentId: string;
  pointerOffsetX: number;
  pointerOffsetY: number;
} | null;

type PendingWire = {
  componentId: string;
  terminal: 0 | 1;
} | null;

type SavedCircuit = {
  id: string;
  name: string;
  circuit: Circuit;
  updatedAt: number;
};

const CANVAS_W = 1200;
const CANVAS_H = 720;
// On phones the full 1200×720 canvas renders the component symbols far too small.
// Frame a tighter, content-centred window there so the symbols read at a usable
// size; the presets and default circuit all live inside this region, and taps map
// correctly into it via getScreenCTM (see svgPoint). Desktop keeps the full canvas.
const COMPACT_VIEWBOX = "180 96 760 600";
const GRID = 16;
const SAVED_CIRCUITS_KEY = "ix-saved-circuits-v1";
const PALETTE_TOOLS: { tool: Tool; label: string; hint: string }[] = [
  { tool: "select", label: "Move", hint: "Drag a component to reposition it." },
  { tool: "battery", label: "Battery", hint: "12 V source. Provides the push that drives current." },
  { tool: "switch", label: "Switch", hint: "Open or closed. Click after placing to toggle." },
  { tool: "lamp", label: "Lamp", hint: "60 Ω load. Brightens with current." },
  { tool: "resistor", label: "Resistor", hint: "220 Ω load. Limits current." },
  { tool: "breaker", label: "Breaker", hint: "Trips when current exceeds its rating (5 A)." }
];

function snap(v: number): number {
  return Math.round(v / GRID) * GRID;
}

function uid(prefix: string): string {
  return `${prefix}-${Math.random().toString(36).slice(2, 8)}`;
}

const PRESETS: Record<string, () => Circuit> = {
  series: () => {
    const B = { ...makeComponent("B1", "battery", 224, 352), voltage: 12 };
    const Br = { ...makeComponent("Br1", "breaker", 448, 352), rating: 5 };
    const S = { ...makeComponent("S1", "switch", 672, 352), closed: true };
    const L1 = { ...makeComponent("L1", "lamp", 896, 352), resistance: 60 };
    return {
      components: [B, Br, S, L1],
      wires: [
        { id: "w1", fromId: "B1", fromTerminal: 0, toId: "Br1", toTerminal: 0 },
        { id: "w2", fromId: "Br1", fromTerminal: 1, toId: "S1", toTerminal: 0 },
        { id: "w3", fromId: "S1", fromTerminal: 1, toId: "L1", toTerminal: 0 },
        { id: "w4", fromId: "L1", fromTerminal: 1, toId: "B1", toTerminal: 1 }
      ]
    };
  },
  parallel: () => {
    const B = { ...makeComponent("B1", "battery", 224, 368), voltage: 12 };
    const Br = { ...makeComponent("Br1", "breaker", 448, 368), rating: 5 };
    const L1 = { ...makeComponent("L1", "lamp", 800, 240), resistance: 60 };
    const L2 = { ...makeComponent("L2", "lamp", 800, 496), resistance: 60 };
    return {
      components: [B, Br, L1, L2],
      wires: [
        { id: "w1", fromId: "B1", fromTerminal: 0, toId: "Br1", toTerminal: 0 },
        { id: "w2", fromId: "Br1", fromTerminal: 1, toId: "L1", toTerminal: 0 },
        { id: "w3", fromId: "Br1", fromTerminal: 1, toId: "L2", toTerminal: 0 },
        { id: "w4", fromId: "L1", fromTerminal: 1, toId: "B1", toTerminal: 1 },
        { id: "w5", fromId: "L2", fromTerminal: 1, toId: "B1", toTerminal: 1 }
      ]
    };
  },
  short: () => {
    const B = { ...makeComponent("B1", "battery", 288, 352), voltage: 12 };
    const Br = { ...makeComponent("Br1", "breaker", 576, 352), rating: 5 };
    const S = { ...makeComponent("S1", "switch", 864, 352), closed: true };
    return {
      components: [B, Br, S],
      wires: [
        { id: "w1", fromId: "B1", fromTerminal: 0, toId: "Br1", toTerminal: 0 },
        { id: "w2", fromId: "Br1", fromTerminal: 1, toId: "S1", toTerminal: 0 },
        { id: "w3", fromId: "S1", fromTerminal: 1, toId: "B1", toTerminal: 1 }
      ]
    };
  },
  empty: () => ({ components: [], wires: [] })
};

function readWelcome(): boolean {
  try {
    return localStorage.getItem("ix-welcome-seen") === "1";
  } catch {
    return false;
  }
}

function writeWelcome() {
  try {
    localStorage.setItem("ix-welcome-seen", "1");
  } catch {
    // quota — ignore
  }
}

function isCircuit(value: unknown): value is Circuit {
  if (!value || typeof value !== "object" || Array.isArray(value)) return false;
  const circuit = value as Partial<Circuit>;
  return Array.isArray(circuit.components) && Array.isArray(circuit.wires);
}

const VALID_COMPONENT_TYPES: ComponentType[] = ["battery", "switch", "lamp", "resistor", "breaker"];

function normalizeRotation(r: unknown): 0 | 90 | 180 | 270 {
  return r === 90 || r === 180 || r === 270 ? r : 0;
}

// Rebuild a persisted circuit through makeComponent so every component carries
// valid defaults — a tampered/older save with a bad `rotation` would otherwise
// flow NaN coordinates through rotatePoint — and drop wires whose endpoints or
// terminals don't resolve to a real component.
function normalizeCircuit(circuit: Circuit): Circuit {
  const components = circuit.components
    .filter((c) => c && typeof c.id === "string" && (VALID_COMPONENT_TYPES as string[]).includes(c.type))
    .map((c) => {
      const base = makeComponent(c.id, c.type, Number(c.x) || 0, Number(c.y) || 0, normalizeRotation(c.rotation));
      return {
        ...base,
        voltage: typeof c.voltage === "number" && Number.isFinite(c.voltage) ? c.voltage : base.voltage,
        resistance: typeof c.resistance === "number" && Number.isFinite(c.resistance) ? c.resistance : base.resistance,
        rating: typeof c.rating === "number" && Number.isFinite(c.rating) ? c.rating : base.rating,
        closed: typeof c.closed === "boolean" ? c.closed : base.closed,
        tripped: typeof c.tripped === "boolean" ? c.tripped : base.tripped
      };
    });
  const ids = new Set(components.map((c) => c.id));
  const wires = circuit.wires.filter(
    (w) =>
      w &&
      ids.has(w.fromId) &&
      ids.has(w.toId) &&
      (w.fromTerminal === 0 || w.fromTerminal === 1) &&
      (w.toTerminal === 0 || w.toTerminal === 1)
  );
  return { components, wires };
}

function readSavedCircuits(): SavedCircuit[] {
  try {
    const raw = localStorage.getItem(SAVED_CIRCUITS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((entry): entry is SavedCircuit => {
      if (!entry || typeof entry !== "object" || Array.isArray(entry)) return false;
      const saved = entry as Partial<SavedCircuit>;
      return (
        typeof saved.id === "string" &&
        typeof saved.name === "string" &&
        typeof saved.updatedAt === "number" &&
        isCircuit(saved.circuit)
      );
    });
  } catch {
    return [];
  }
}

function writeSavedCircuits(circuits: SavedCircuit[]) {
  try {
    localStorage.setItem(SAVED_CIRCUITS_KEY, JSON.stringify(circuits));
  } catch {
    // quota — ignore
  }
}

function formatV(v: number): string {
  return `${v.toFixed(2)} V`;
}

function formatA(a: number): string {
  const abs = Math.abs(a);
  if (abs >= 1) return `${abs.toFixed(2)} A`;
  return `${(abs * 1000).toFixed(0)} mA`;
}

function wirePath(a: { x: number; y: number }, b: { x: number; y: number }): string {
  if (a.x === b.x || a.y === b.y) return `M ${a.x} ${a.y} L ${b.x} ${b.y}`;
  const midX = (a.x + b.x) / 2;
  return `M ${a.x} ${a.y} L ${midX} ${a.y} L ${midX} ${b.y} L ${b.x} ${b.y}`;
}

function lessonFor(circuit: Circuit, energized: boolean, sim: ReturnType<typeof simulate> | null): string {
  if (!circuit.components.length) {
    return "Drag a battery from the palette to start. Every circuit needs a source.";
  }
  const hasBattery = circuit.components.some((c) => c.type === "battery");
  const hasLoad = circuit.components.some((c) => c.type === "lamp" || c.type === "resistor");
  if (!hasBattery) return "No source yet. Add a battery so current has somewhere to come from.";
  if (!hasLoad) return "Add a load (lamp or resistor) so the battery has somewhere to push current.";
  if (!circuit.wires.length) return "Click a terminal, then click another to draw a wire between them.";
  if (!energized) return "Press Energise to see current flow. Watch for tripped breakers.";
  if (!sim) return "";
  if (sim.fault === "short") return "Short circuit. No resistance in the loop means runaway current.";
  if (sim.fault === "no-source") return "No source connected. The circuit cannot flow.";
  if (sim.trippedBreakers.length) {
    return `${sim.trippedBreakers.length === 1 ? "A" : "Multiple"} breaker${sim.trippedBreakers.length === 1 ? "" : "s"} tripped — current exceeded the rating. Toggle the breaker to reset.`;
  }
  if (sim.totalCurrent < 1e-6) return "No current flowing. Check that the loop is closed and switches are on.";
  return `Current is flowing. Source delivers ${formatA(sim.totalCurrent)}. Hover or tap a component to see its drop.`;
}

function ComponentGlyph({
  c,
  energized,
  scale = 1
}: {
  c: CircuitComponent;
  energized: boolean;
  scale?: number;
}) {
  const t0 = { x: -32, y: 0 };
  const t1 = { x: 32, y: 0 };
  const s = scale;
  // Leads stay anchored to the fixed ±32 terminals; only the body scales, so the
  // symbol reads larger on phones without moving the wire connection points.
  const bodyTransform = s === 1 ? undefined : `scale(${s})`;
  switch (c.type) {
    case "battery":
      return (
        <g>
          <line x1={t0.x} y1={0} x2={-12 * s} y2={0} className="ix-lead" />
          <line x1={12 * s} y1={0} x2={t1.x} y2={0} className="ix-lead" />
          <g transform={bodyTransform}>
            <line x1={-6} y1={-14} x2={-6} y2={14} className="ix-batt-long" />
            <line x1={6} y1={-8} x2={6} y2={8} className="ix-batt-short" />
            <text x={-14} y={-20} className="ix-glyph-label">+</text>
            <text x={10} y={-20} className="ix-glyph-label">-</text>
            <text x={0} y={28} className="ix-glyph-meta">{c.voltage ?? 0} V</text>
          </g>
        </g>
      );
    case "switch":
      return (
        <g>
          <line x1={t0.x} y1={0} x2={-12 * s} y2={0} className="ix-lead" />
          <line x1={12 * s} y1={0} x2={t1.x} y2={0} className="ix-lead" />
          <g transform={bodyTransform}>
            <circle cx={-12} cy={0} r={2.5} className="ix-pin" />
            <circle cx={12} cy={0} r={2.5} className="ix-pin" />
            <line
              x1={-12}
              y1={0}
              x2={c.closed ? 12 : 8}
              y2={c.closed ? 0 : -16}
              className="ix-switch-lever"
            />
            <text x={0} y={28} className="ix-glyph-meta">{c.closed ? "ON" : "OFF"}</text>
          </g>
        </g>
      );
    case "lamp":
      return (
        <g>
          <line x1={t0.x} y1={0} x2={-14 * s} y2={0} className="ix-lead" />
          <line x1={14 * s} y1={0} x2={t1.x} y2={0} className="ix-lead" />
          <g transform={bodyTransform}>
            <circle cx={0} cy={0} r={14} className={`ix-lamp-bulb ${energized ? "is-on" : ""}`} />
            <line x1={-9} y1={-9} x2={9} y2={9} className="ix-lamp-cross" />
            <line x1={9} y1={-9} x2={-9} y2={9} className="ix-lamp-cross" />
            <text x={0} y={32} className="ix-glyph-meta">{c.resistance ?? 0} Ω</text>
          </g>
        </g>
      );
    case "resistor":
      return (
        <g>
          <line x1={t0.x} y1={0} x2={-18 * s} y2={0} className="ix-lead" />
          <line x1={18 * s} y1={0} x2={t1.x} y2={0} className="ix-lead" />
          <g transform={bodyTransform}>
            <polyline
              points="-18,0 -14,-8 -10,8 -6,-8 -2,8 2,-8 6,8 10,-8 14,8 18,0"
              className="ix-resistor"
            />
            <text x={0} y={26} className="ix-glyph-meta">{c.resistance ?? 0} Ω</text>
          </g>
        </g>
      );
    case "breaker":
      return (
        <g>
          <line x1={t0.x} y1={0} x2={-14 * s} y2={0} className="ix-lead" />
          <line x1={14 * s} y1={0} x2={t1.x} y2={0} className="ix-lead" />
          <g transform={bodyTransform}>
            <rect x={-14} y={-12} width={28} height={24} rx={4} className={`ix-breaker-body ${c.tripped ? "is-tripped" : ""}`} />
            <text x={0} y={3} className="ix-glyph-rating">{c.rating ?? 0}A</text>
            <text x={0} y={28} className="ix-glyph-meta">{c.tripped ? "TRIPPED" : "OK"}</text>
          </g>
        </g>
      );
  }
}

export function InteractivePage({ isActive }: Props) {
  const [tab, setTab] = useState<TabId>("circuits");
  const [circuit, setCircuit] = useState<Circuit>(() => PRESETS.series());
  const [tool, setTool] = useState<Tool>("select");
  const [energized, setEnergized] = useState(false);
  const [pendingWire, setPendingWire] = useState<PendingWire>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [hoverId, setHoverId] = useState<string | null>(null);
  const [pointerPos, setPointerPos] = useState<{ x: number; y: number } | null>(null);
  const [showWelcome, setShowWelcome] = useState(() => !readWelcome());
  const [savedCircuits, setSavedCircuits] = useState<SavedCircuit[]>(readSavedCircuits);
  const [circuitName, setCircuitName] = useState("");
  const [selectedSavedCircuitId, setSelectedSavedCircuitId] = useState("");
  // Zoom the canvas in on phones so the symbols are large enough to read and tap.
  const [compactView, setCompactView] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(max-width: 720px)").matches
  );
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 720px)");
    const onChange = (e: MediaQueryListEvent) => setCompactView(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const dragRef = useRef<DragState>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const welcomeTrapRef = useFocusTrap<HTMLDivElement>(showWelcome);

  const sim = useMemo(() => (energized ? simulate(circuit) : null), [circuit, energized]);
  const trippedBreakerKey = sim?.trippedBreakers.join("|") ?? "";
  const trippedBreakerIds = useMemo(
    () => new Set(sim?.trippedBreakers ?? []),
    // `sim` is the real input; `trippedBreakerKey` is derived from it and used as
    // the dep so the Set keeps a stable identity when the tripped list is
    // unchanged (the auto-trip effect below relies on that to avoid a loop).
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [trippedBreakerKey]
  );

  useEffect(() => {
    if (!energized || trippedBreakerIds.size === 0) return;

    setCircuit((current) => {
      let changed = false;
      const components = current.components.map((component) => {
        if (component.type !== "breaker" || !trippedBreakerIds.has(component.id) || component.tripped) {
          return component;
        }
        changed = true;
        return { ...component, tripped: true };
      });

      return changed ? { ...current, components } : current;
    });
  }, [energized, trippedBreakerIds]);

  function dismissWelcome() {
    writeWelcome();
    setShowWelcome(false);
  }

  function loadPreset(name: keyof typeof PRESETS) {
    setCircuit(PRESETS[name]());
    setEnergized(false);
    setPendingWire(null);
    setSelectedId(null);
  }

  function persistSavedCircuits(next: SavedCircuit[]) {
    const sorted = [...next].sort((a, b) => b.updatedAt - a.updatedAt).slice(0, 24);
    setSavedCircuits(sorted);
    writeSavedCircuits(sorted);
  }

  function saveCurrentCircuit() {
    const name = circuitName.trim() || `Circuit ${savedCircuits.length + 1}`;
    const now = Date.now();
    const existingId = selectedSavedCircuitId || "";
    const id = existingId || uid("saved");
    const saved: SavedCircuit = {
      id,
      name,
      circuit,
      updatedAt: now
    };
    persistSavedCircuits([
      saved,
      ...savedCircuits.filter((entry) => entry.id !== id)
    ]);
    setSelectedSavedCircuitId(id);
    setCircuitName(name);
  }

  function loadSavedCircuit(id = selectedSavedCircuitId) {
    const saved = savedCircuits.find((entry) => entry.id === id);
    if (!saved) return;
    setCircuit(normalizeCircuit(saved.circuit));
    setCircuitName(saved.name);
    setSelectedSavedCircuitId(saved.id);
    setEnergized(false);
    setPendingWire(null);
    setSelectedId(null);
  }

  function deleteSavedCircuit() {
    if (!selectedSavedCircuitId) return;
    persistSavedCircuits(savedCircuits.filter((entry) => entry.id !== selectedSavedCircuitId));
    setSelectedSavedCircuitId("");
  }

  function svgPoint(e: { clientX: number; clientY: number }): { x: number; y: number } {
    const svg = svgRef.current;
    if (!svg) return { x: 0, y: 0 };
    // Map screen → SVG user coordinates via the live CTM so placement is correct
    // for any viewBox, zoom, or letterboxing (the old width-ratio math assumed
    // the viewBox filled the element, which is false on the portrait phone canvas
    // and on the zoomed-in compact view below).
    const ctm = svg.getScreenCTM();
    if (!ctm) return { x: 0, y: 0 };
    const pt = new DOMPoint(e.clientX, e.clientY).matrixTransform(ctm.inverse());
    return { x: pt.x, y: pt.y };
  }

  function placeComponent(type: ComponentType, x: number, y: number) {
    const id = uid(type[0]);
    const next = { ...makeComponent(id, type, snap(x), snap(y)) };
    setCircuit((c) => ({ ...c, components: [...c.components, next] }));
    setSelectedId(id);
  }

  function deleteComponent(id: string) {
    setCircuit((c) => ({
      components: c.components.filter((cm) => cm.id !== id),
      wires: c.wires.filter((w) => w.fromId !== id && w.toId !== id)
    }));
    setSelectedId(null);
  }

  function deleteWire(id: string) {
    setCircuit((c) => ({ ...c, wires: c.wires.filter((w) => w.id !== id) }));
    setSelectedId(null);
  }

  function toggleSwitch(id: string) {
    setCircuit((c) => ({
      ...c,
      components: c.components.map((cm) =>
        cm.id === id && cm.type === "switch" ? { ...cm, closed: !cm.closed } : cm
      )
    }));
  }

  function resetBreaker(id: string) {
    setCircuit((c) => ({
      ...c,
      components: c.components.map((cm) =>
        cm.id === id && cm.type === "breaker" ? { ...cm, tripped: false } : cm
      )
    }));
  }

  function rotateComponent(id: string) {
    setCircuit((c) => ({
      ...c,
      components: c.components.map((cm) => {
        if (cm.id !== id) return cm;
        const next = ((cm.rotation + 90) % 360) as 0 | 90 | 180 | 270;
        return { ...cm, rotation: next };
      })
    }));
  }

  function handleCanvasPointerDown(e: ReactPointerEvent<SVGSVGElement>) {
    if (e.target !== svgRef.current && !(e.target as Element).classList.contains("ix-canvas-bg")) return;
    const p = svgPoint(e);
    if (tool !== "select") {
      placeComponent(tool, p.x, p.y);
      setTool("select");
      return;
    }
    setSelectedId(null);
    setPendingWire(null);
  }

  function handleComponentPointerDown(e: ReactPointerEvent<SVGGElement>, c: CircuitComponent) {
    e.stopPropagation();
    setSelectedId(c.id);
    setPendingWire(null);
    const p = svgPoint(e);
    dragRef.current = {
      componentId: c.id,
      pointerOffsetX: p.x - c.x,
      pointerOffsetY: p.y - c.y
    };
    (e.currentTarget as Element).setPointerCapture(e.pointerId);
  }

  function handlePointerMove(e: ReactPointerEvent) {
    const d = dragRef.current;
    // pointerPos only drives the pending-wire rubber-band line. Skip the state
    // update (and the resulting full SVG re-render) on idle mouse moves when
    // nothing is being dragged and no wire is pending.
    if (!d && !pendingWire) return;
    const p = svgPoint(e);
    if (pendingWire) setPointerPos(p);
    if (!d) return;
    setCircuit((c) => ({
      ...c,
      components: c.components.map((cm) =>
        cm.id === d.componentId
          ? { ...cm, x: snap(p.x - d.pointerOffsetX), y: snap(p.y - d.pointerOffsetY) }
          : cm
      )
    }));
  }

  function handlePointerUp(e: ReactPointerEvent) {
    if (dragRef.current) {
      try {
        (e.currentTarget as Element).releasePointerCapture(e.pointerId);
      } catch {
        // not captured
      }
    }
    dragRef.current = null;
  }

  function activateTerminal(c: CircuitComponent, terminal: 0 | 1) {
    setSelectedId(null);
    if (!pendingWire) {
      setPendingWire({ componentId: c.id, terminal });
      // Seed the rubber-band origin at the clicked terminal so the preview line
      // doesn't spring from a stale point (or stay invisible on touch, where
      // there's no pointer-move between the two taps).
      setPointerPos(terminalWorldPosition(c, terminal));
      return;
    }
    // Clicking the same component (either terminal) cancels — a component can't
    // be wired to itself.
    if (pendingWire.componentId === c.id) {
      setPendingWire(null);
      setPointerPos(null);
      return;
    }
    // Skip a duplicate wire between the same unordered terminal pair.
    const duplicate = circuit.wires.some(
      (w) =>
        (w.fromId === pendingWire.componentId && w.fromTerminal === pendingWire.terminal && w.toId === c.id && w.toTerminal === terminal) ||
        (w.fromId === c.id && w.fromTerminal === terminal && w.toId === pendingWire.componentId && w.toTerminal === pendingWire.terminal)
    );
    if (duplicate) {
      setPendingWire(null);
      setPointerPos(null);
      return;
    }
    const w: Wire = {
      id: uid("w"),
      fromId: pendingWire.componentId,
      fromTerminal: pendingWire.terminal,
      toId: c.id,
      toTerminal: terminal
    };
    setCircuit((cur) => ({ ...cur, wires: [...cur.wires, w] }));
    setPendingWire(null);
    setPointerPos(null);
  }

  function handleTerminalClick(e: ReactPointerEvent<SVGCircleElement>, c: CircuitComponent, terminal: 0 | 1) {
    e.stopPropagation();
    activateTerminal(c, terminal);
  }

  function nudgeComponent(id: string, dx: number, dy: number) {
    setCircuit((cur) => ({
      ...cur,
      components: cur.components.map((cm) =>
        cm.id === id ? { ...cm, x: snap(cm.x + dx), y: snap(cm.y + dy) } : cm
      )
    }));
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (!isActive) return;
      if (e.key === "Escape") {
        setPendingWire(null);
        setSelectedId(null);
        setTool("select");
      }
      if (e.key === "Delete" || e.key === "Backspace") {
        if (!selectedId) return;
        const target = e.target as HTMLElement | null;
        if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA")) return;
        const isWire = circuit.wires.some((w) => w.id === selectedId);
        if (isWire) deleteWire(selectedId);
        else deleteComponent(selectedId);
      }
      if (e.key === "r" || e.key === "R") {
        if (!selectedId) return;
        const isComponent = circuit.components.some((c) => c.id === selectedId);
        if (isComponent) rotateComponent(selectedId);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isActive, selectedId, circuit]);

  // Dismiss the welcome dialog on Escape (it's aria-modal, so it must be
  // keyboard-dismissible; focus is trapped/restored by useFocusTrap above).
  useEffect(() => {
    if (!showWelcome) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismissWelcome();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [showWelcome]);

  const selectedComponent = useMemo(
    () => circuit.components.find((c) => c.id === selectedId) ?? null,
    [circuit.components, selectedId]
  );

  const lesson = useMemo(() => lessonFor(circuit, energized, sim), [circuit, energized, sim]);

  const meta = TAB_META[tab];

  return (
    <section className={`page page-interactive ${isActive ? "is-active" : ""}`}>
      <header className="page-header ix-header">
        <div>
      <h1>{meta.title}</h1>
          <p className="page-copy">{meta.copy}</p>
        </div>
        {tab === "circuits" ? (
          <div className="ix-header-actions">
            <button
              type="button"
              className={`ix-energize ${energized ? "is-on" : ""}`}
              onClick={() => setEnergized((v) => !v)}
            >
              {energized ? "De-energise" : "Energise"}
            </button>
          </div>
        ) : null}
      </header>

      <nav className="ix-tabs" role="tablist" aria-label="Interactive sections">
        {(Object.keys(TAB_META) as TabId[]).map((t) => (
          <button
            key={t}
            role="tab"
            type="button"
            aria-selected={tab === t}
            className={`ix-tab ${tab === t ? "is-active" : ""}`}
            onClick={() => setTab(t)}
          >
            {TAB_META[t].label}
          </button>
        ))}
      </nav>

      {tab === "panel" ? (
        <div className="ix-3d-wrap">
          <Suspense fallback={<div className="ix-panel-loading" role="status">Loading consumer unit trainer...</div>}>
            <PanelTrainer active={isActive} />
          </Suspense>
        </div>
      ) : null}
      {tab === "faults" ? (
        <div className="ix-3d-wrap">
          <Suspense fallback={<div className="ix-panel-loading" role="status">Loading fault finder...</div>}>
            <FaultFinding />
          </Suspense>
        </div>
      ) : null}

      {tab !== "circuits" ? null : (
        <>
      <div className="ix-toolbar">
        <div className="ix-toolbar-group" role="group" aria-label="Presets">
          <button type="button" className="ghost-button" onClick={() => loadPreset("series")}>
            Series
          </button>
          <button type="button" className="ghost-button" onClick={() => loadPreset("parallel")}>
            Parallel
          </button>
          <button type="button" className="ghost-button" onClick={() => loadPreset("short")}>
            Short demo
          </button>
          <button type="button" className="ghost-button" onClick={() => loadPreset("empty")}>
            Clear
          </button>
        </div>
        <div className="ix-toolbar-group ix-save-group" role="group" aria-label="Saved circuits">
          <input
            className="ix-save-input"
            type="text"
            value={circuitName}
            onChange={(event) => setCircuitName(event.target.value)}
            placeholder="Circuit name"
            aria-label="Circuit name"
          />
          <button type="button" className="ghost-button" onClick={saveCurrentCircuit}>
            Save
          </button>
          <select
            className="ix-save-select"
            value={selectedSavedCircuitId}
            onChange={(event) => {
              const id = event.target.value;
              setSelectedSavedCircuitId(id);
              const saved = savedCircuits.find((entry) => entry.id === id);
              if (saved) setCircuitName(saved.name);
            }}
            aria-label="Saved circuits"
          >
            <option value="">Saved circuits</option>
            {savedCircuits.map((entry) => (
              <option key={entry.id} value={entry.id}>
                {entry.name}
              </option>
            ))}
          </select>
          <button
            type="button"
            className="ghost-button"
            onClick={() => loadSavedCircuit()}
            disabled={!selectedSavedCircuitId}
          >
            Load
          </button>
          <button
            type="button"
            className="ghost-button"
            onClick={deleteSavedCircuit}
            disabled={!selectedSavedCircuitId}
          >
            Delete
          </button>
        </div>
      </div>

      <div className="ix-layout">
        <aside className="ix-palette" aria-label="Component palette">
          {PALETTE_TOOLS.map((p) => (
            <button
              key={p.tool}
              type="button"
              className={`ix-palette-item ${tool === p.tool ? "is-active" : ""}`}
              onClick={() => setTool(p.tool)}
              title={p.hint}
            >
              <span className="ix-palette-icon" aria-hidden="true">
                <PaletteIcon type={p.tool} />
              </span>
              <span className="ix-palette-label">{p.label}</span>
            </button>
          ))}
          <p className="ix-palette-hint">
            {tool === "select"
              ? "Drag to move. Click a terminal to start a wire."
              : `Click on the canvas to place a ${tool}.`}
          </p>
        </aside>

        <div className="ix-canvas-wrap">
          <svg
            ref={svgRef}
            className={`ix-canvas ${energized ? "is-energized" : ""}`}
            viewBox={compactView ? COMPACT_VIEWBOX : `0 0 ${CANVAS_W} ${CANVAS_H}`}
            preserveAspectRatio="xMidYMid meet"
            role="application"
            aria-label="Circuit canvas. Tab to a component or terminal. Enter or Space selects a component or starts and finishes a wire. Arrow keys move the selected component, R rotates it, Delete removes it."
            onPointerDown={handleCanvasPointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
          >
            <defs>
              <pattern id="ix-grid" width={GRID} height={GRID} patternUnits="userSpaceOnUse">
                <path d={`M ${GRID} 0 L 0 0 0 ${GRID}`} fill="none" className="ix-grid-line" />
              </pattern>
            </defs>
            <rect className="ix-canvas-bg" x={0} y={0} width={CANVAS_W} height={CANVAS_H} fill="url(#ix-grid)" />

            {circuit.wires.map((w) => {
              const from = circuit.components.find((c) => c.id === w.fromId);
              const to = circuit.components.find((c) => c.id === w.toId);
              if (!from || !to) return null;
              const a = terminalWorldPosition(from, w.fromTerminal);
              const b = terminalWorldPosition(to, w.toTerminal);
              const isLive =
                energized && sim?.ok && !sim.fault && Math.abs(sim.componentCurrents[w.fromId] ?? 0) > 1e-6;
              return (
                <path
                  key={w.id}
                  d={wirePath(a, b)}
                  className={`ix-wire ${isLive ? "is-live" : ""} ${selectedId === w.id ? "is-selected" : ""}`}
                  onPointerDown={(e) => {
                    e.stopPropagation();
                    setSelectedId(w.id);
                  }}
                />
              );
            })}

            {pendingWire && pointerPos
              ? (() => {
                  const c = circuit.components.find((cm) => cm.id === pendingWire.componentId);
                  if (!c) return null;
                  const a = terminalWorldPosition(c, pendingWire.terminal);
                  return <path d={wirePath(a, pointerPos)} className="ix-wire is-pending" />;
                })()
              : null}

            {circuit.components.map((c) => {
              const t0 = terminalWorldPosition(c, 0);
              const t1 = terminalWorldPosition(c, 1);
              const isSelected = selectedId === c.id;
              const isHover = hoverId === c.id;
              const cur = sim?.componentCurrents?.[c.id] ?? 0;
              const lampGlow = c.type === "lamp" ? lampBrightness(cur) : 0;
              const renderedComponent =
                c.type === "breaker" && trippedBreakerIds.has(c.id) && !c.tripped
                  ? { ...c, tripped: true }
                  : c;
              return (
                <g
                  key={c.id}
                  transform={`translate(${c.x}, ${c.y}) rotate(${c.rotation})`}
                  className={`ix-component ix-${c.type} ${isSelected ? "is-selected" : ""} ${isHover ? "is-hover" : ""}`}
                  style={c.type === "lamp" ? ({ ["--lamp-glow" as const]: lampGlow } as React.CSSProperties) : undefined}
                  role="button"
                  tabIndex={0}
                  aria-label={`${c.type}${isSelected ? ", selected" : ""}. Arrow keys move, R rotates, Delete removes.`}
                  onPointerDown={(e) => handleComponentPointerDown(e, c)}
                  onPointerEnter={() => setHoverId(c.id)}
                  onPointerLeave={() => setHoverId(null)}
                  onFocus={() => setSelectedId(c.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSelectedId(c.id);
                      return;
                    }
                    const step = e.shiftKey ? GRID * 2 : GRID;
                    if (e.key === "ArrowLeft") { e.preventDefault(); nudgeComponent(c.id, -step, 0); }
                    else if (e.key === "ArrowRight") { e.preventDefault(); nudgeComponent(c.id, step, 0); }
                    else if (e.key === "ArrowUp") { e.preventDefault(); nudgeComponent(c.id, 0, -step); }
                    else if (e.key === "ArrowDown") { e.preventDefault(); nudgeComponent(c.id, 0, step); }
                  }}
                >
                  <ComponentGlyph
                    c={renderedComponent}
                    energized={energized && sim?.ok === true && !sim.fault}
                    scale={compactView ? 1.5 : 1}
                  />
                  <circle
                    cx={t0.x - c.x}
                    cy={t0.y - c.y}
                    r={6}
                    className={`ix-terminal ${pendingWire?.componentId === c.id && pendingWire.terminal === 0 ? "is-pending" : ""}`}
                    transform={`rotate(${-c.rotation})`}
                    role="button"
                    tabIndex={0}
                    aria-label={`${c.type} terminal 1. Enter ${pendingWire ? "connects the wire here" : "starts a wire"}.`}
                    onPointerDown={(e) => handleTerminalClick(e, c, 0)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        activateTerminal(c, 0);
                      }
                    }}
                  />
                  <circle
                    cx={t1.x - c.x}
                    cy={t1.y - c.y}
                    r={6}
                    className={`ix-terminal ${pendingWire?.componentId === c.id && pendingWire.terminal === 1 ? "is-pending" : ""}`}
                    transform={`rotate(${-c.rotation})`}
                    role="button"
                    tabIndex={0}
                    aria-label={`${c.type} terminal 2. Enter ${pendingWire ? "connects the wire here" : "starts a wire"}.`}
                    onPointerDown={(e) => handleTerminalClick(e, c, 1)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        activateTerminal(c, 1);
                      }
                    }}
                  />
                </g>
              );
            })}

            {energized && sim?.ok && !sim.fault
              ? circuit.components.map((c) => {
                  if (c.type === "battery") return null;
                  const drop = Math.abs(sim.componentVoltageDrops[c.id] ?? 0);
                  const cur = Math.abs(sim.componentCurrents[c.id] ?? 0);
                  if (cur < 1e-6 && drop < 1e-6) return null;
                  return (
                    <g key={`tip-${c.id}`} transform={`translate(${c.x}, ${c.y - 44})`} className="ix-tip">
                      <rect x={-46} y={-14} width={92} height={28} rx={6} className="ix-tip-bg" />
                      <text x={0} y={-2} className="ix-tip-text">{formatV(drop)}</text>
                      <text x={0} y={10} className="ix-tip-text">{formatA(cur)}</text>
                    </g>
                  );
                })
              : null}
          </svg>

          <div className={`ix-status ${sim?.fault || sim?.trippedBreakers.length ? "is-warning" : ""}`}>
            {lesson}
          </div>
        </div>

        <aside className="ix-info">
          <div className="ix-info-block">
            <h3>Selected</h3>
            {selectedComponent ? (
              <div className="ix-selected">
                <div className="ix-selected-row">
                  <span className="ix-selected-kind">{selectedComponent.type}</span>
                  <span className="ix-selected-id">{selectedComponent.id}</span>
                </div>
                {selectedComponent.type === "battery" ? (
                  <label className="ix-field">
                    <span>Voltage</span>
                    <input
                      type="number"
                      value={selectedComponent.voltage ?? 0}
                      min={1}
                      max={240}
                      onChange={(e) => {
                        const v = Number(e.target.value);
                        if (!Number.isFinite(v)) return;
                        const voltage = Math.min(Math.max(v, 1), 240);
                        setCircuit((c) => ({
                          ...c,
                          components: c.components.map((cm) =>
                            cm.id === selectedComponent.id ? { ...cm, voltage } : cm
                          )
                        }));
                      }}
                    />
                  </label>
                ) : null}
                {selectedComponent.type === "lamp" || selectedComponent.type === "resistor" ? (
                  <label className="ix-field">
                    <span>Resistance (Ω)</span>
                    <input
                      type="number"
                      value={selectedComponent.resistance ?? 0}
                      min={1}
                      onChange={(e) => {
                        const v = Number(e.target.value);
                        if (!Number.isFinite(v)) return;
                        const resistance = Math.min(Math.max(v, 1), 1_000_000);
                        setCircuit((c) => ({
                          ...c,
                          components: c.components.map((cm) =>
                            cm.id === selectedComponent.id ? { ...cm, resistance } : cm
                          )
                        }));
                      }}
                    />
                  </label>
                ) : null}
                {selectedComponent.type === "breaker" ? (
                  <label className="ix-field">
                    <span>Rating (A)</span>
                    <input
                      type="number"
                      value={selectedComponent.rating ?? 0}
                      min={1}
                      onChange={(e) => {
                        const v = Number(e.target.value);
                        if (!Number.isFinite(v)) return;
                        const rating = Math.min(Math.max(v, 1), 1000);
                        setCircuit((c) => ({
                          ...c,
                          components: c.components.map((cm) =>
                            cm.id === selectedComponent.id ? { ...cm, rating } : cm
                          )
                        }));
                      }}
                    />
                  </label>
                ) : null}
                <div className="ix-selected-actions">
                  {selectedComponent.type === "switch" ? (
                    <button
                      type="button"
                      className="ghost-button"
                      onClick={() => toggleSwitch(selectedComponent.id)}
                    >
                      {selectedComponent.closed ? "Open" : "Close"}
                    </button>
                  ) : null}
                  {selectedComponent.type === "breaker" && selectedComponent.tripped ? (
                    <button
                      type="button"
                      className="ghost-button"
                      onClick={() => resetBreaker(selectedComponent.id)}
                    >
                      Reset
                    </button>
                  ) : null}
                  <button
                    type="button"
                    className="ghost-button"
                    onClick={() => rotateComponent(selectedComponent.id)}
                  >
                    Rotate
                  </button>
                  <button
                    type="button"
                    className="ghost-button"
                    onClick={() => deleteComponent(selectedComponent.id)}
                  >
                    Delete
                  </button>
                </div>
                {energized && sim ? (
                  <dl className="ix-readout">
                    <div>
                      <dt>V drop</dt>
                      <dd>{formatV(Math.abs(sim.componentVoltageDrops[selectedComponent.id] ?? 0))}</dd>
                    </div>
                    <div>
                      <dt>Current</dt>
                      <dd>{formatA(Math.abs(sim.componentCurrents[selectedComponent.id] ?? 0))}</dd>
                    </div>
                  </dl>
                ) : null}
              </div>
            ) : (
              <p className="ix-empty">Click a component on the canvas to edit it.</p>
            )}
          </div>

          <div className="ix-info-block">
            <h3>Tips</h3>
            <ul className="ix-tip-list">
              <li>Click a terminal, then another, to draw a wire.</li>
              <li>Press <kbd>R</kbd> to rotate. <kbd>Delete</kbd> removes a selection.</li>
              <li>Voltage drops add up around any closed loop and equal the source.</li>
              <li>Current is the same at every point in a series loop.</li>
              <li>Parallel branches share voltage but split the current by their resistance.</li>
            </ul>
          </div>
        </aside>
      </div>

      {showWelcome ? (
        <div className="ix-welcome-backdrop" onClick={dismissWelcome}>
          <div
            className="ix-welcome"
            role="dialog"
            aria-modal="true"
            aria-label="Build a circuit"
            ref={welcomeTrapRef}
            onClick={(e) => e.stopPropagation()}
          >
            <button type="button" className="ix-welcome-close" onClick={dismissWelcome} aria-label="Close">
              ✕
            </button>
            <h3>Build a circuit</h3>
            <ol>
              <li>Pick a component from the palette and click on the canvas to place it.</li>
              <li>Click a terminal, then a second terminal, to wire them together.</li>
              <li>Press <strong>Energize</strong> to see voltage drops and currents.</li>
              <li>Try the <strong>Series</strong>, <strong>Parallel</strong>, and <strong>Short demo</strong> presets.</li>
            </ol>
            <button type="button" className="ix-welcome-go" onClick={dismissWelcome}>
              Get started
            </button>
          </div>
        </div>
      ) : null}
        </>
      )}
    </section>
  );
}

function PaletteIcon({ type }: { type: Tool }) {
  const stroke = "currentColor";
  switch (type) {
    case "select":
      return (
        <svg width="20" height="20" viewBox="-10 -10 20 20" aria-hidden="true">
          <path d="M-6 -6 L4 0 L-1 1 L-2 6 Z" fill={stroke} />
        </svg>
      );
    case "battery":
      return (
        <svg width="36" height="18" viewBox="0 0 36 18" aria-hidden="true">
          <line x1="0" y1="9" x2="14" y2="9" stroke={stroke} strokeWidth="1.5" />
          <line x1="22" y1="9" x2="36" y2="9" stroke={stroke} strokeWidth="1.5" />
          <line x1="14" y1="2" x2="14" y2="16" stroke={stroke} strokeWidth="2.5" />
          <line x1="22" y1="5" x2="22" y2="13" stroke={stroke} strokeWidth="1.5" />
        </svg>
      );
    case "switch":
      return (
        <svg width="36" height="18" viewBox="0 0 36 18" aria-hidden="true">
          <line x1="0" y1="9" x2="12" y2="9" stroke={stroke} strokeWidth="1.5" />
          <line x1="24" y1="9" x2="36" y2="9" stroke={stroke} strokeWidth="1.5" />
          <line x1="12" y1="9" x2="22" y2="3" stroke={stroke} strokeWidth="1.5" />
          <circle cx="12" cy="9" r="1.7" fill={stroke} />
          <circle cx="24" cy="9" r="1.7" fill={stroke} />
        </svg>
      );
    case "lamp":
      return (
        <svg width="36" height="20" viewBox="0 0 36 20" aria-hidden="true">
          <line x1="0" y1="10" x2="11" y2="10" stroke={stroke} strokeWidth="1.5" />
          <line x1="25" y1="10" x2="36" y2="10" stroke={stroke} strokeWidth="1.5" />
          <circle cx="18" cy="10" r="7" fill="none" stroke={stroke} strokeWidth="1.5" />
          <line x1="13" y1="5" x2="23" y2="15" stroke={stroke} strokeWidth="1.5" />
          <line x1="23" y1="5" x2="13" y2="15" stroke={stroke} strokeWidth="1.5" />
        </svg>
      );
    case "resistor":
      return (
        <svg width="36" height="18" viewBox="0 0 36 18" aria-hidden="true">
          <polyline
            points="0,9 9,9 11,3 15,15 19,3 23,15 25,9 36,9"
            fill="none"
            stroke={stroke}
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "breaker":
      return (
        <svg width="36" height="20" viewBox="0 0 36 20" aria-hidden="true">
          <line x1="0" y1="10" x2="10" y2="10" stroke={stroke} strokeWidth="1.5" />
          <line x1="26" y1="10" x2="36" y2="10" stroke={stroke} strokeWidth="1.5" />
          <rect x="10" y="3" width="16" height="14" rx="2" fill="none" stroke={stroke} strokeWidth="1.5" />
        </svg>
      );
  }
}
