import { describe, it, expect } from "vitest";
import {
  simulate,
  makeComponent,
  lampBrightness,
  terminalWorldPosition,
  type Circuit,
  type Wire
} from "./circuitEngine";

function wire(id: string, fromId: string, fromTerminal: 0 | 1, toId: string, toTerminal: 0 | 1): Wire {
  return { id, fromId, fromTerminal, toId, toTerminal };
}

describe("simulate", () => {
  it("returns a no-source fault when no battery is present", () => {
    const circuit: Circuit = {
      components: [makeComponent("L", "lamp", 0, 0)],
      wires: []
    };
    const result = simulate(circuit);
    expect(result.fault).toBe("no-source");
    expect(result.ok).toBe(false);
  });

  it("solves a single-loop series circuit (V = IR)", () => {
    const circuit: Circuit = {
      components: [
        { ...makeComponent("B", "battery", 0, 0), voltage: 12 },
        { ...makeComponent("L1", "lamp", 1, 0), resistance: 60 },
        { ...makeComponent("L2", "lamp", 2, 0), resistance: 60 }
      ],
      wires: [
        wire("w1", "B", 0, "L1", 0),
        wire("w2", "L1", 1, "L2", 0),
        wire("w3", "L2", 1, "B", 1)
      ]
    };
    const result = simulate(circuit);
    expect(result.ok).toBe(true);
    expect(result.fault).toBe(null);
    expect(Math.abs(result.componentCurrents["L1"])).toBeCloseTo(0.1, 4);
    expect(Math.abs(result.componentCurrents["L2"])).toBeCloseTo(0.1, 4);
    expect(Math.abs(result.componentVoltageDrops["L1"])).toBeCloseTo(6, 4);
    expect(Math.abs(result.componentVoltageDrops["L2"])).toBeCloseTo(6, 4);
  });

  it("solves two resistors in parallel (1/Rt = 1/R1 + 1/R2)", () => {
    const circuit: Circuit = {
      components: [
        { ...makeComponent("B", "battery", 0, 0), voltage: 12 },
        { ...makeComponent("L1", "lamp", 1, 0), resistance: 60 },
        { ...makeComponent("L2", "lamp", 1, 1), resistance: 60 }
      ],
      wires: [
        wire("w1", "B", 0, "L1", 0),
        wire("w2", "B", 0, "L2", 0),
        wire("w3", "L1", 1, "B", 1),
        wire("w4", "L2", 1, "B", 1)
      ]
    };
    const result = simulate(circuit);
    expect(result.ok).toBe(true);
    expect(Math.abs(result.componentCurrents["L1"])).toBeCloseTo(0.2, 4);
    expect(Math.abs(result.componentCurrents["L2"])).toBeCloseTo(0.2, 4);
    expect(result.totalCurrent).toBeCloseTo(0.4, 4);
  });

  it("treats an open switch as breaking the circuit", () => {
    const circuit: Circuit = {
      components: [
        { ...makeComponent("B", "battery", 0, 0), voltage: 12 },
        { ...makeComponent("S", "switch", 1, 0), closed: false },
        { ...makeComponent("L", "lamp", 2, 0), resistance: 60 }
      ],
      wires: [
        wire("w1", "B", 0, "S", 0),
        wire("w2", "S", 1, "L", 0),
        wire("w3", "L", 1, "B", 1)
      ]
    };
    const result = simulate(circuit);
    expect(result.ok).toBe(true);
    expect(result.totalCurrent).toBeCloseTo(0, 4);
    expect(result.componentCurrents["L"] ?? 0).toBeCloseTo(0, 4);
  });

  it("a closed switch passes nearly all the source voltage to the load", () => {
    const circuit: Circuit = {
      components: [
        { ...makeComponent("B", "battery", 0, 0), voltage: 12 },
        { ...makeComponent("S", "switch", 1, 0), closed: true },
        { ...makeComponent("L", "lamp", 2, 0), resistance: 60 }
      ],
      wires: [
        wire("w1", "B", 0, "S", 0),
        wire("w2", "S", 1, "L", 0),
        wire("w3", "L", 1, "B", 1)
      ]
    };
    const result = simulate(circuit);
    expect(result.ok).toBe(true);
    expect(Math.abs(result.componentCurrents["L"])).toBeCloseTo(12 / 60.01, 3);
  });

  it("trips a breaker when the load draws more than its rating", () => {
    const circuit: Circuit = {
      components: [
        { ...makeComponent("B", "battery", 0, 0), voltage: 12 },
        { ...makeComponent("Br", "breaker", 1, 0), rating: 5 },
        { ...makeComponent("R", "resistor", 2, 0), resistance: 1 }
      ],
      wires: [
        wire("w1", "B", 0, "Br", 0),
        wire("w2", "Br", 1, "R", 0),
        wire("w3", "R", 1, "B", 1)
      ]
    };
    const result = simulate(circuit);
    expect(result.ok).toBe(true);
    expect(result.trippedBreakers).toContain("Br");
    expect(result.totalCurrent).toBeCloseTo(0, 4);
  });

  it("keeps an already-tripped breaker open and reports it", () => {
    const circuit: Circuit = {
      components: [
        { ...makeComponent("B", "battery", 0, 0), voltage: 12 },
        { ...makeComponent("Br", "breaker", 1, 0), rating: 5, tripped: true },
        { ...makeComponent("L", "lamp", 2, 0), resistance: 60 }
      ],
      wires: [
        wire("w1", "B", 0, "Br", 0),
        wire("w2", "Br", 1, "L", 0),
        wire("w3", "L", 1, "B", 1)
      ]
    };
    const result = simulate(circuit);
    expect(result.ok).toBe(true);
    expect(result.trippedBreakers).toEqual(["Br"]);
    expect(result.totalCurrent).toBeCloseTo(0, 4);
    expect(result.componentCurrents["L"] ?? 0).toBeCloseTo(0, 4);
  });

  it("does not trip a breaker when current is below its rating", () => {
    const circuit: Circuit = {
      components: [
        { ...makeComponent("B", "battery", 0, 0), voltage: 12 },
        { ...makeComponent("Br", "breaker", 1, 0), rating: 5 },
        { ...makeComponent("L", "lamp", 2, 0), resistance: 60 }
      ],
      wires: [
        wire("w1", "B", 0, "Br", 0),
        wire("w2", "Br", 1, "L", 0),
        wire("w3", "L", 1, "B", 1)
      ]
    };
    const result = simulate(circuit);
    expect(result.trippedBreakers).toEqual([]);
    expect(Math.abs(result.componentCurrents["L"])).toBeGreaterThan(0);
  });

  it("flags a fault when a battery is shorted by a wire only", () => {
    const circuit: Circuit = {
      components: [{ ...makeComponent("B", "battery", 0, 0), voltage: 12 }],
      wires: [wire("w1", "B", 0, "B", 1)]
    };
    const result = simulate(circuit);
    expect(result.fault).toBe("short");
  });

  it("ignores components that have no path to the battery", () => {
    const circuit: Circuit = {
      components: [
        { ...makeComponent("B", "battery", 0, 0), voltage: 12 },
        { ...makeComponent("L1", "lamp", 1, 0), resistance: 60 },
        { ...makeComponent("Lonely", "lamp", 5, 5), resistance: 60 }
      ],
      wires: [
        wire("w1", "B", 0, "L1", 0),
        wire("w2", "L1", 1, "B", 1)
      ]
    };
    const result = simulate(circuit);
    expect(result.ok).toBe(true);
    expect(Math.abs(result.componentCurrents["L1"])).toBeCloseTo(0.2, 4);
    expect(Math.abs(result.componentCurrents["Lonely"] ?? 0)).toBeCloseTo(0, 4);
  });
});

describe("lampBrightness", () => {
  it("returns 0 for zero current", () => {
    expect(lampBrightness(0)).toBe(0);
  });

  it("clamps to 1 at and above the rated current", () => {
    expect(lampBrightness(0.2)).toBe(1);
    expect(lampBrightness(1)).toBe(1);
  });

  it("scales sub-rated currents non-linearly (sqrt)", () => {
    expect(lampBrightness(0.05)).toBeCloseTo(Math.sqrt(0.25), 4);
  });
});

describe("terminalWorldPosition", () => {
  it("places terminals on either side of an unrotated component", () => {
    const c = { ...makeComponent("B", "battery", 100, 200) };
    expect(terminalWorldPosition(c, 0)).toEqual({ x: 68, y: 200 });
    expect(terminalWorldPosition(c, 1)).toEqual({ x: 132, y: 200 });
  });

  it("rotates terminals 90 degrees", () => {
    const c = { ...makeComponent("B", "battery", 100, 200), rotation: 90 as const };
    expect(terminalWorldPosition(c, 0)).toEqual({ x: 100, y: 168 });
    expect(terminalWorldPosition(c, 1)).toEqual({ x: 100, y: 232 });
  });
});
