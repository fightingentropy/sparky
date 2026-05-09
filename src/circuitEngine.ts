// Circuit simulation engine for the /interactive playground.
// Solves resistive networks with batteries, switches, lamps, resistors, and
// breakers using Modified Nodal Analysis.

export type ComponentType = "battery" | "switch" | "lamp" | "resistor" | "breaker";

export type CircuitComponent = {
  id: string;
  type: ComponentType;
  x: number;
  y: number;
  rotation: 0 | 90 | 180 | 270;
  voltage?: number;
  resistance?: number;
  closed?: boolean;
  rating?: number;
  tripped?: boolean;
};

export type Wire = {
  id: string;
  fromId: string;
  fromTerminal: 0 | 1;
  toId: string;
  toTerminal: 0 | 1;
};

export type Circuit = {
  components: CircuitComponent[];
  wires: Wire[];
};

export type FaultKind = "short" | "no-source" | "open" | null;

export type SimulationResult = {
  ok: boolean;
  fault: FaultKind;
  nodeVoltages: Record<string, number>;
  componentCurrents: Record<string, number>;
  componentVoltageDrops: Record<string, number>;
  terminalNetIds: Record<string, string>;
  totalCurrent: number;
  trippedBreakers: string[];
};

const IDEAL_RESISTANCE = 0.01;
const SHORT_CURRENT_THRESHOLD = 1000;

export const COMPONENT_DEFAULTS: Record<ComponentType, Partial<CircuitComponent>> = {
  battery: { voltage: 12 },
  switch: { closed: true },
  lamp: { resistance: 60 },
  resistor: { resistance: 220 },
  breaker: { rating: 5, tripped: false }
};

export function makeComponent(
  id: string,
  type: ComponentType,
  x: number,
  y: number,
  rotation: 0 | 90 | 180 | 270 = 0
): CircuitComponent {
  return {
    id,
    type,
    x,
    y,
    rotation,
    ...COMPONENT_DEFAULTS[type]
  };
}

function emptyResult(
  fault: FaultKind,
  terminalNetIds: Record<string, string>,
  trippedBreakers: string[] = []
): SimulationResult {
  return {
    ok: false,
    fault,
    nodeVoltages: {},
    componentCurrents: {},
    componentVoltageDrops: {},
    terminalNetIds,
    totalCurrent: 0,
    trippedBreakers
  };
}

function buildTerminalNets(circuit: Circuit) {
  const parent = new Map<string, string>();
  const terminals: string[] = [];
  for (const c of circuit.components) {
    const t0 = `${c.id}:0`;
    const t1 = `${c.id}:1`;
    terminals.push(t0, t1);
    parent.set(t0, t0);
    parent.set(t1, t1);
  }
  function find(x: string): string {
    let root = x;
    while (parent.get(root) !== root) root = parent.get(root)!;
    let cur = x;
    while (parent.get(cur) !== root) {
      const next = parent.get(cur)!;
      parent.set(cur, root);
      cur = next;
    }
    return root;
  }
  for (const w of circuit.wires) {
    const a = `${w.fromId}:${w.fromTerminal}`;
    const b = `${w.toId}:${w.toTerminal}`;
    if (!parent.has(a) || !parent.has(b)) continue;
    const ra = find(a);
    const rb = find(b);
    if (ra !== rb) parent.set(ra, rb);
  }
  const netOf: Record<string, string> = {};
  for (const t of terminals) netOf[t] = find(t);
  return netOf;
}

function gaussSolve(A: number[][], b: number[]): number[] | null {
  const n = b.length;
  if (n === 0) return [];
  const M: number[][] = A.map((row, i) => [...row, b[i]]);
  for (let col = 0; col < n; col++) {
    let pivot = col;
    let max = Math.abs(M[col][col]);
    for (let r = col + 1; r < n; r++) {
      const v = Math.abs(M[r][col]);
      if (v > max) {
        max = v;
        pivot = r;
      }
    }
    if (max < 1e-12) return null;
    if (pivot !== col) {
      [M[col], M[pivot]] = [M[pivot], M[col]];
    }
    const pv = M[col][col];
    for (let r = 0; r < n; r++) {
      if (r === col) continue;
      const factor = M[r][col] / pv;
      if (factor === 0) continue;
      for (let c = col; c <= n; c++) {
        M[r][c] -= factor * M[col][c];
      }
    }
  }
  const x = new Array(n);
  for (let i = 0; i < n; i++) x[i] = M[i][n] / M[i][i];
  return x;
}

function solveCircuit(circuit: Circuit, forcedTrips: Set<string>): SimulationResult {
  const terminalNetIds = buildTerminalNets(circuit);
  const trippedBreakerIds = new Set(forcedTrips);
  for (const c of circuit.components) {
    if (c.type === "breaker" && c.tripped) {
      trippedBreakerIds.add(c.id);
    }
  }

  const battery = circuit.components.find((c) => c.type === "battery");
  if (!battery) return emptyResult("no-source", terminalNetIds, Array.from(trippedBreakerIds));

  const active = circuit.components.filter((c) => {
    if (c.type === "switch" && c.closed === false) return false;
    if (c.type === "breaker" && trippedBreakerIds.has(c.id)) return false;
    return true;
  });

  const ground = terminalNetIds[`${battery.id}:1`];
  const reachable = new Set<string>([ground]);
  let changed = true;
  while (changed) {
    changed = false;
    for (const c of active) {
      const a = terminalNetIds[`${c.id}:0`];
      const b = terminalNetIds[`${c.id}:1`];
      if (reachable.has(a) && !reachable.has(b)) {
        reachable.add(b);
        changed = true;
      } else if (reachable.has(b) && !reachable.has(a)) {
        reachable.add(a);
        changed = true;
      }
    }
  }
  const reachableActive = active.filter((c) => {
    const a = terminalNetIds[`${c.id}:0`];
    const b = terminalNetIds[`${c.id}:1`];
    return reachable.has(a) && reachable.has(b);
  });

  type Resistor = { id: string; a: string; b: string; r: number };
  type VSource = { id: string; pos: string; neg: string; v: number };
  const resistors: Resistor[] = [];
  const vsources: VSource[] = [];

  for (const c of reachableActive) {
    const a = terminalNetIds[`${c.id}:0`];
    const b = terminalNetIds[`${c.id}:1`];
    if (c.type === "battery") {
      vsources.push({ id: c.id, pos: a, neg: b, v: c.voltage ?? 0 });
    } else if (c.type === "lamp" || c.type === "resistor") {
      resistors.push({ id: c.id, a, b, r: Math.max(c.resistance ?? 1, 1e-6) });
    } else if (c.type === "switch" || c.type === "breaker") {
      resistors.push({ id: c.id, a, b, r: IDEAL_RESISTANCE });
    }
  }

  const nonGroundNets = Array.from(reachable).filter((n) => n !== ground);
  const netIndex: Record<string, number> = {};
  nonGroundNets.forEach((n, i) => {
    netIndex[n] = i;
  });

  const N = nonGroundNets.length;
  const M = vsources.length;
  const size = N + M;
  if (size === 0) {
    return {
      ok: true,
      fault: null,
      nodeVoltages: { [ground]: 0 },
      componentCurrents: {},
      componentVoltageDrops: {},
      terminalNetIds,
      totalCurrent: 0,
      trippedBreakers: Array.from(trippedBreakerIds)
    };
  }

  const A: number[][] = Array.from({ length: size }, () => new Array(size).fill(0));
  const z: number[] = new Array(size).fill(0);

  for (const r of resistors) {
    const g = 1 / r.r;
    const ai = r.a === ground ? -1 : netIndex[r.a];
    const bi = r.b === ground ? -1 : netIndex[r.b];
    if (ai >= 0) A[ai][ai] += g;
    if (bi >= 0) A[bi][bi] += g;
    if (ai >= 0 && bi >= 0) {
      A[ai][bi] -= g;
      A[bi][ai] -= g;
    }
  }

  vsources.forEach((v, k) => {
    const pi = v.pos === ground ? -1 : netIndex[v.pos];
    const ni = v.neg === ground ? -1 : netIndex[v.neg];
    const col = N + k;
    if (pi >= 0) {
      A[pi][col] += 1;
      A[col][pi] += 1;
    }
    if (ni >= 0) {
      A[ni][col] -= 1;
      A[col][ni] -= 1;
    }
    z[col] = v.v;
  });

  const x = gaussSolve(A, z);
  if (!x) return emptyResult("short", terminalNetIds, Array.from(trippedBreakerIds));

  const nodeVoltages: Record<string, number> = { [ground]: 0 };
  nonGroundNets.forEach((n, i) => {
    nodeVoltages[n] = x[i];
  });

  const componentCurrents: Record<string, number> = {};
  const componentVoltageDrops: Record<string, number> = {};
  for (const r of resistors) {
    const drop = (nodeVoltages[r.a] ?? 0) - (nodeVoltages[r.b] ?? 0);
    componentVoltageDrops[r.id] = drop;
    componentCurrents[r.id] = drop / r.r;
  }
  vsources.forEach((v, k) => {
    componentCurrents[v.id] = x[N + k];
    componentVoltageDrops[v.id] = (nodeVoltages[v.pos] ?? 0) - (nodeVoltages[v.neg] ?? 0);
  });

  let totalCurrent = 0;
  const newTrips: string[] = [];
  for (const c of reachableActive) {
    const i = Math.abs(componentCurrents[c.id] ?? 0);
    if (c.type === "battery") {
      if (i > totalCurrent) totalCurrent = i;
    }
    if (c.type === "breaker" && c.rating !== undefined && i > c.rating) {
      newTrips.push(c.id);
    }
  }

  if (newTrips.length > 0) {
    const next = new Set(trippedBreakerIds);
    for (const id of newTrips) next.add(id);
    const re = solveCircuit(circuit, next);
    return {
      ...re,
      trippedBreakers: Array.from(new Set([...re.trippedBreakers, ...newTrips]))
    };
  }

  const fault: FaultKind = totalCurrent > SHORT_CURRENT_THRESHOLD ? "short" : null;

  return {
    ok: true,
    fault,
    nodeVoltages,
    componentCurrents,
    componentVoltageDrops,
    terminalNetIds,
    totalCurrent,
    trippedBreakers: Array.from(trippedBreakerIds)
  };
}

export function simulate(circuit: Circuit): SimulationResult {
  return solveCircuit(circuit, new Set());
}

export function lampBrightness(current: number, ratedCurrent = 0.2): number {
  const ratio = Math.abs(current) / ratedCurrent;
  if (!Number.isFinite(ratio) || ratio <= 0) return 0;
  return Math.min(1, Math.sqrt(ratio));
}

export function terminalOffsetsFor(type: ComponentType): [{ x: number; y: number }, { x: number; y: number }] {
  return [
    { x: -32, y: 0 },
    { x: 32, y: 0 }
  ];
}

export function rotatePoint(
  p: { x: number; y: number },
  rotation: 0 | 90 | 180 | 270
): { x: number; y: number } {
  switch (rotation) {
    case 0:
      return p;
    case 90:
      return { x: -p.y, y: p.x };
    case 180:
      return { x: -p.x, y: -p.y };
    case 270:
      return { x: p.y, y: -p.x };
  }
}

export function terminalWorldPosition(
  c: CircuitComponent,
  terminal: 0 | 1
): { x: number; y: number } {
  const [t0, t1] = terminalOffsetsFor(c.type);
  const local = terminal === 0 ? t0 : t1;
  const rotated = rotatePoint(local, c.rotation);
  return { x: c.x + rotated.x, y: c.y + rotated.y };
}
