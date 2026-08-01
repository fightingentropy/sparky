import { describe, expect, it } from "vitest";
import {
  calcAngle,
  calcBreaker,
  calcConduit,
  calcContainmentRod,
  calcPower,
  calcStructure,
  calcTrayBendCut,
  calcTrunkingOppositeMark,
  calcUnistrutLength,
  calcVoltageDrop,
} from "./calculators";
import { CALCULATOR_GOLDEN_FIXTURES } from "./calculatorGoldenFixtures";
import { CALCULATOR_DEFINITIONS } from "./contentSchema";

describe("electrical calculator golden coverage", () => {
  it("has independently authored fixtures for every published calculator", () => {
    expect(Object.keys(CALCULATOR_GOLDEN_FIXTURES)).toEqual(
      CALCULATOR_DEFINITIONS.map((definition) => definition.id),
    );
  });

  it("keeps containment bend cut while leaving the removed bend-start calculator absent", () => {
    const calculatorIDs = Object.keys(CALCULATOR_GOLDEN_FIXTURES);
    expect(calculatorIDs).toContain("tray-bend-cut");
    expect(calculatorIDs).toContain("trunking-opposite-mark");
    expect(calculatorIDs).not.toContain("containment-bend-start");
  });

  it("keeps fixture IDs unique and records a hand-checkable basis for every result", () => {
    const fixtures = Object.values(CALCULATOR_GOLDEN_FIXTURES).flat();
    expect(new Set(fixtures.map((fixture) => fixture.id)).size).toBe(fixtures.length);
    for (const fixture of fixtures) {
      expect(fixture.basis.trim().length).toBeGreaterThan(20);
    }
  });
});

describe("containment rod golden fixtures", () => {
  it.each(CALCULATOR_GOLDEN_FIXTURES["containment-rod"])("$id", (fixture) => {
    const [overallHeight, topOfUnistrut, buffer, unistrutDepth] = fixture.args;
    expect(calcContainmentRod(overallHeight, topOfUnistrut, buffer, unistrutDepth)).toEqual(
      fixture.expected,
    );
  });
});

describe("Unistrut length golden fixtures", () => {
  it.each(CALCULATOR_GOLDEN_FIXTURES["unistrut-length"])("$id", (fixture) => {
    const [leftAllowance, rightAllowance, gap] = fixture.allowances;
    const containments = fixture.containments.map((row) => ({ ...row }));
    expect(calcUnistrutLength(containments, leftAllowance, rightAllowance, gap)).toEqual(
      fixture.expected,
    );
  });
});

describe("angle-drop golden fixtures", () => {
  it.each(CALCULATOR_GOLDEN_FIXTURES["angle-drop"])("$id", (fixture) => {
    const [
      drop,
      angle,
      topStraight,
      bottomStraight,
      allowance,
      unit,
      topBend,
      bottomBend,
      bendHeight,
    ] = fixture.args;
    expect(
      calcAngle(
        drop,
        angle,
        topStraight,
        bottomStraight,
        allowance,
        unit,
        topBend,
        bottomBend,
        bendHeight,
      ),
    ).toEqual(fixture.expected);
  });
});

describe("trunking opposite-mark golden fixtures", () => {
  it.each(CALCULATOR_GOLDEN_FIXTURES["trunking-opposite-mark"])("$id", (fixture) => {
    const [angle, adjacent] = fixture.args;
    expect(calcTrunkingOppositeMark(angle, adjacent)).toEqual(fixture.expected);
  });
});

describe("containment bend-cut golden fixtures", () => {
  it.each(CALCULATOR_GOLDEN_FIXTURES["tray-bend-cut"])("$id", (fixture) => {
    const [bendAngle, cuts, width] = fixture.args;
    expect(calcTrayBendCut(bendAngle, cuts, width)).toEqual(fixture.expected);
  });
});

describe("power golden fixtures", () => {
  it.each(CALCULATOR_GOLDEN_FIXTURES.power)("$id", (fixture) => {
    const [target, phase, valueA, valueB, powerFactor] = fixture.args;
    expect(calcPower(target, phase, valueA, valueB, powerFactor)).toEqual(fixture.expected);
  });
});

describe("voltage-drop golden fixtures", () => {
  it.each(CALCULATOR_GOLDEN_FIXTURES["voltage-drop"])("$id", (fixture) => {
    const [phase, current, length, cableSize, voltage] = fixture.args;
    expect(calcVoltageDrop(phase, current, length, cableSize, voltage)).toEqual(fixture.expected);
  });
});

describe("breaker-sizing golden fixtures", () => {
  it.each(CALCULATOR_GOLDEN_FIXTURES["breaker-sizing"])("$id", (fixture) => {
    const [mode, current, power, phase, voltage, powerFactor] = fixture.args;
    expect(calcBreaker(mode, current, power, phase, voltage, powerFactor)).toEqual(
      fixture.expected,
    );
  });
});

describe("conduit-fill golden fixtures", () => {
  it.each(CALCULATOR_GOLDEN_FIXTURES["conduit-fill"])("$id", (fixture) => {
    const [conduitDiameter, cableDiameter, cableCount, maxFill] = fixture.args;
    expect(calcConduit(conduitDiameter, cableDiameter, cableCount, maxFill)).toEqual(
      fixture.expected,
    );
  });
});

describe("structural-limit golden fixtures", () => {
  it.each(CALCULATOR_GOLDEN_FIXTURES["structural-limits"])("$id", (fixture) => {
    const [wall, joist] = fixture.args;
    expect(calcStructure(wall, joist)).toEqual(fixture.expected);
  });
});
