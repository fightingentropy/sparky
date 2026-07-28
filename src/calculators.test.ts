import { describe, it, expect } from "vitest";
import {
  formatNumber,
  formatMeasure,
  calcContainmentRod,
  calcUnistrutLength,
  calcAngle,
  calcContainmentBendStart,
  calcTrunkingOppositeMark,
  calcTrayBendCut,
  calcPower,
  calcVoltageDrop,
  calcBreaker,
  calcConduit,
  calcStructure,
} from "./calculators";

// ── Helpers ──

describe("formatNumber", () => {
  it("returns -- for NaN", () => {
    expect(formatNumber(NaN)).toBe("--");
  });

  it("returns -- for Infinity", () => {
    expect(formatNumber(Infinity)).toBe("--");
  });

  it("formats small numbers with 2 decimals", () => {
    expect(formatNumber(12.345)).toBe("12.35");
  });

  it("formats large numbers with 1 decimal", () => {
    expect(formatNumber(365)).toBe("365");
    expect(formatNumber(100.7)).toBe("100.7");
  });

  it("strips trailing zeros", () => {
    expect(formatNumber(10.0)).toBe("10");
    expect(formatNumber(10.50)).toBe("10.5");
  });
});

describe("formatMeasure", () => {
  it("appends unit", () => {
    expect(formatMeasure(365, "mm")).toBe("365 mm");
  });
});

// ── Containment rod ──

describe("calcContainmentRod", () => {
  it("calculates rod cut length correctly", () => {
    const result = calcContainmentRod("3165", "2900", "100", "40");
    expect(result.validationMessage).toBeNull();
    expect(result.rodCutLengthValue).toBe("365 mm");
    expect(result.actualDropValue).toBe("265 mm");
    expect(result.bottomOfUnistrutDropValue).toBe("305 mm");
  });

  it("returns validation message when top > overall", () => {
    const result = calcContainmentRod("2000", "3000", "100", "40");
    expect(result.validationMessage).toBe(
      "Height to top of Unistrut cannot be more than overall height."
    );
  });

  it("returns placeholders for empty inputs", () => {
    const result = calcContainmentRod("", "", "", "");
    expect(result.rodCutLengthValue).toBe("-- mm");
  });

  it("uses default depth when blank", () => {
    const result = calcContainmentRod("3165", "2900", "100", "");
    expect(result.bottomOfUnistrutDropValue).toBe("305 mm");
  });

  it("rejects negative values", () => {
    const result = calcContainmentRod("-100", "50", "10", "40");
    expect(result.rodCutLengthValue).toBe("-- mm");
  });
});

// ── Unistrut length ──

describe("calcUnistrutLength", () => {
  it("calculates correctly with default values", () => {
    const containments = [
      { id: 1, label: "Tray", width: "225" },
      { id: 2, label: "Basket", width: "125" },
      { id: 3, label: "Trunking", width: "100" },
    ];
    const result = calcUnistrutLength(containments, "50", "50", "50");
    expect(result.validationMessage).toBeNull();
    expect(result.totalContainmentWidthValue).toBe("450 mm");
    expect(result.totalSideAllowanceValue).toBe("100 mm");
    expect(result.totalGapAllowanceValue).toBe("100 mm");
    expect(result.exactLengthValue).toBe("650 mm");
    expect(result.finalLengthValue).toBe("650 mm");
  });

  it("rounds up to nearest 50", () => {
    const containments = [{ id: 1, label: "Tray", width: "230" }];
    const result = calcUnistrutLength(containments, "50", "50", "50");
    expect(result.finalLengthValue).toBe("350 mm");
    expect(result.exactLengthValue).toBe("330 mm");
  });

  it("returns validation for empty containments", () => {
    const result = calcUnistrutLength([], "50", "50", "50");
    expect(result.validationMessage).toBe("Add at least one containment.");
  });

  it("rejects negative gaps", () => {
    const containments = [{ id: 1, label: "Tray", width: "225" }];
    const result = calcUnistrutLength(containments, "50", "50", "-10");
    expect(result.validationMessage).toBe(
      "Widths, allowances, and gaps cannot be negative."
    );
  });
});

// ── Angle drop ──

describe("calcAngle", () => {
  it("calculates 45-degree angle correctly", () => {
    const result = calcAngle("10", "45", "0", "0", "0", "cm");
    expect(result.angledLengthValue).toBe("14.14 cm");
    expect(result.offsetValue).toBe("10 cm");
  });

  it("calculates 30-degree angle", () => {
    const result = calcAngle("10", "30", "0", "0", "0", "mm");
    expect(result.angledLengthValue).toBe("20 mm");
  });

  it("includes top/bottom straight and allowance", () => {
    const result = calcAngle("10", "45", "5", "5", "2", "cm");
    // total = 5 + 14.14 + 5 + 2 = 26.14
    expect(result.totalLengthValue).toBe("26.14 cm");
  });

  it("returns empty for invalid angle", () => {
    const result = calcAngle("10", "90", "0", "0", "0", "cm");
    expect(result.angledLengthValue).toBe("--");
  });

  it("returns empty for zero drop", () => {
    const result = calcAngle("0", "45", "0", "0", "0", "cm");
    expect(result.angledLengthValue).toBe("--");
  });

  it("subtracts one prefab bend height from drop", () => {
    // 45°, drop 20, one 5cm bend → effective drop 15 → 15/sin(45) = 21.21
    const result = calcAngle("20", "45", "0", "0", "0", "cm", true, false, "5");
    expect(result.angledLengthValue).toBe("21.21 cm");
  });

  it("subtracts both prefab bend heights from drop", () => {
    // 45°, drop 20, two 5cm bends → effective drop 10 → 10/sin(45) = 14.14
    const result = calcAngle("20", "45", "0", "0", "0", "cm", true, true, "5");
    expect(result.angledLengthValue).toBe("14.14 cm");
  });

  it("ignores bend height when neither end is selected", () => {
    const result = calcAngle("10", "45", "0", "0", "0", "cm", false, false, "5");
    expect(result.angledLengthValue).toBe("14.14 cm");
  });

  it("returns empty when bends exceed drop", () => {
    const result = calcAngle("8", "45", "0", "0", "0", "cm", true, true, "5");
    expect(result.angledLengthValue).toBe("--");
  });

  it("returns empty when bends exactly consume the drop", () => {
    const result = calcAngle("10", "45", "0", "0", "0", "cm", true, true, "5");
    expect(result.angledLengthValue).toBe("--");
  });
});

// ── Containment bend start ──

describe("calcContainmentBendStart", () => {
  it("moves the bend start forward when the new containment is further out", () => {
    const result = calcContainmentBendStart("2000", "50", "60", "out");
    expect(result.validationMessage).toBeNull();
    expect(result.forwardOffsetValue).toBe("28.87 mm");
    expect(result.newStartValue).toBe("2028.9 mm");
  });

  it("moves the bend start back when the new containment is further in", () => {
    const result = calcContainmentBendStart("2000", "50", "60", "in");
    expect(result.validationMessage).toBeNull();
    expect(result.forwardOffsetValue).toBe("28.87 mm");
    expect(result.newStartValue).toBe("1971.1 mm");
  });

  it("returns placeholders for empty values", () => {
    const result = calcContainmentBendStart("", "", "", "out");
    expect(result.validationMessage).toBeNull();
    expect(result.forwardOffsetValue).toBe("-- mm");
    expect(result.newStartValue).toBe("-- mm");
  });

  it("rejects invalid bend angles", () => {
    const result = calcContainmentBendStart("2000", "50", "180", "out");
    expect(result.validationMessage).toBe(
      "Bend angle must be greater than 0 and less than 180 degrees."
    );
    expect(result.newStartValue).toBe("-- mm");
  });

  it("rejects negative distances", () => {
    const result = calcContainmentBendStart("2000", "-50", "60", "out");
    expect(result.validationMessage).toBe("Distances cannot be negative.");
    expect(result.newStartValue).toBe("-- mm");
  });
});

// ── Trunking opposite mark ──

describe("calcTrunkingOppositeMark", () => {
  it("calculates the 45-degree 100 mm trunking example", () => {
    const result = calcTrunkingOppositeMark("45", "100");
    expect(result.validationMessage).toBeNull();
    expect(result.desiredAngleValue).toBe("45 deg");
    expect(result.calculationAngleValue).toBe("22.5 deg");
    expect(result.adjacentValue).toBe("100 mm");
    expect(result.oppositeValue).toBe("41.4 mm");
    expect(result.roundedOppositeValue).toBe("41 mm");
  });

  it("calculates a 90-degree bend using half angle tangent", () => {
    const result = calcTrunkingOppositeMark("90", "100");
    expect(result.calculationAngleValue).toBe("45 deg");
    expect(result.oppositeValue).toBe("100 mm");
    expect(result.roundedOppositeValue).toBe("100 mm");
  });

  it("returns placeholders for empty values", () => {
    const result = calcTrunkingOppositeMark("", "");
    expect(result.validationMessage).toBeNull();
    expect(result.oppositeValue).toBe("-- mm");
    expect(result.roundedOppositeValue).toBe("-- mm");
  });

  it("rejects invalid bend angles", () => {
    const result = calcTrunkingOppositeMark("180", "100");
    expect(result.validationMessage).toBe(
      "Desired bend angle must be greater than 0 and less than 180 degrees."
    );
    expect(result.oppositeValue).toBe("-- mm");
  });

  it("rejects negative adjacent measurements", () => {
    const result = calcTrunkingOppositeMark("45", "-100");
    expect(result.validationMessage).toBe("Adjacent measurement cannot be negative.");
    expect(result.oppositeValue).toBe("-- mm");
  });
});

describe("calcTrayBendCut", () => {
  it("calculates the two-cut 67 degree / 300 mm tray example", () => {
    const result = calcTrayBendCut("67", "2", "300");
    expect(result.validationMessage).toBeNull();
    expect(result.bendAngleValue).toBe("67 deg");
    expect(result.totalBendValue).toBe("67 deg");
    expect(result.bendPerCutValue).toBe("33.5 deg");
    expect(result.calculationAngleValue).toBe("16.75 deg");
    expect(result.trayWidthValue).toBe("300 mm");
    expect(result.setbackValue).toBe("90.3 mm");
    expect(result.roundedSetbackValue).toBe("90 mm");
    expect(result.cutsLabel).toBe("2 cuts");
  });

  it("reduces to a single tan(half angle) x width mark for one cut", () => {
    // tan(90 / 2) x 300 = 300.
    const result = calcTrayBendCut("90", "1", "300");
    expect(result.totalBendValue).toBe("90 deg");
    expect(result.bendPerCutValue).toBe("90 deg");
    expect(result.calculationAngleValue).toBe("45 deg");
    expect(result.setbackValue).toBe("300 mm");
    expect(result.cutsLabel).toBe("1 cut");
  });

  it("returns placeholders for empty values", () => {
    const result = calcTrayBendCut("", "", "");
    expect(result.validationMessage).toBeNull();
    expect(result.setbackValue).toBe("-- mm");
    expect(result.roundedSetbackValue).toBe("-- mm");
  });

  it("rejects invalid bend angles", () => {
    const result = calcTrayBendCut("180", "2", "300");
    expect(result.validationMessage).toBe(
      "Bend angle must be greater than 0 and less than 180 degrees."
    );
    expect(result.setbackValue).toBe("-- mm");
  });

  it("rejects fractional or zero cut counts", () => {
    expect(calcTrayBendCut("67", "2.5", "300").validationMessage).toBe(
      "Number of cuts must be a whole number of 1 or more."
    );
    expect(calcTrayBendCut("67", "0", "300").validationMessage).toBe(
      "Number of cuts must be a whole number of 1 or more."
    );
  });

  it("rejects negative widths", () => {
    const result = calcTrayBendCut("67", "2", "-300");
    expect(result.validationMessage).toBe("Width cannot be negative.");
    expect(result.setbackValue).toBe("-- mm");
  });
});

// ── Power ──

describe("calcPower", () => {
  it("calculates current from power (single phase)", () => {
    const result = calcPower("current", "single", "1", "230", "0.95");
    // I = 1000 / (1 * 230 * 0.95) = 4.575...
    expect(result.label).toBe("Current");
    expect(result.resultValue).toBe("4.58 A");
  });

  it("calculates power (single phase)", () => {
    const result = calcPower("power", "single", "10", "230", "1");
    // P = 1 * 10 * 230 * 1 / 1000 = 2.3
    expect(result.resultValue).toBe("2.3 kW");
  });

  it("calculates with three-phase", () => {
    const result = calcPower("current", "three", "10", "400", "0.95");
    // I = 10000 / (sqrt(3) * 400 * 0.95) = 15.19...
    expect(result.resultValue).toBe("15.19 A");
  });

  it("returns placeholder for invalid PF", () => {
    const result = calcPower("current", "single", "1", "230", "1.5");
    expect(result.resultValue).toBe("-- A");
  });
});

// ── Voltage drop ──

describe("calcVoltageDrop", () => {
  it("calculates single phase drop", () => {
    const result = calcVoltageDrop("single", "20", "20", "2.5", "230");
    // Vd = 2 * 20 * 20 * 0.022/2.5 = 7.04
    expect(result.dropValue).toBe("7.04 V");
  });

  it("calculates drop percentage", () => {
    const result = calcVoltageDrop("single", "20", "20", "2.5", "230");
    // % = 7.04/230 * 100 = 3.06
    expect(result.percentValue).toBe("3.06 %");
  });

  it("handles three-phase", () => {
    const result = calcVoltageDrop("three", "20", "20", "2.5", "400");
    // multiplier = sqrt(3), Vd = sqrt(3)*20*20*0.022/2.5 = 6.1
    expect(result.dropValue).toBe("6.1 V");
  });

  it("returns placeholder for zero cable size", () => {
    const result = calcVoltageDrop("single", "20", "20", "0", "230");
    expect(result.dropValue).toBe("-- V");
  });
});

// ── Breaker sizing ──

describe("calcBreaker", () => {
  it("selects next standard size up", () => {
    const result = calcBreaker("current", "18", "", "single", "230", "0.95");
    expect(result.breakerValue).toBe("20 A");
    expect(result.currentValue).toBe("18 A");
  });

  it("selects exact match", () => {
    const result = calcBreaker("current", "32", "", "single", "230", "0.95");
    expect(result.breakerValue).toBe("32 A");
  });

  it("calculates from power mode", () => {
    const result = calcBreaker("power", "", "4", "single", "230", "0.95");
    // I = 4000 / (1 * 230 * 0.95) = 18.31
    expect(result.breakerValue).toBe("20 A");
  });

  it("handles over max breaker size", () => {
    const result = calcBreaker("current", "150", "", "single", "230", "0.95");
    expect(result.breakerValue).toBe("100 A");
    expect(result.rangeValue).toBe("Over 100 A");
  });
});

// ── Conduit fill ──

describe("calcConduit", () => {
  it("calculates fill percentage", () => {
    const result = calcConduit("20", "6", "3", "40");
    // conduit area = pi*100 = 314.16, cable area = pi*9 = 28.27, used = 84.82
    // fill = 84.82/314.16 * 100 = 27%
    expect(result.fillValue).toBe("27 %");
    expect(result.overFill).toBe(false);
  });

  it("flags overfill when fill exceeds max", () => {
    const result = calcConduit("20", "6", "6", "40");
    expect(result.overFill).toBe(true);
  });

  it("returns placeholder for zero diameter", () => {
    const result = calcConduit("0", "6", "3", "40");
    expect(result.fillValue).toBe("-- %");
    expect(result.overFill).toBe(false);
  });

  it("rejects fractional cable counts", () => {
    const result = calcConduit("20", "6", "2.5", "40");
    expect(result.fillValue).toBe("-- %");
  });

  it("rejects impossible max fill limits", () => {
    const result = calcConduit("20", "6", "3", "120");
    expect(result.fillValue).toBe("-- %");
  });
});

// ── Structural limits ──

describe("calcStructure", () => {
  it("calculates wall chase limits", () => {
    const result = calcStructure("100", "200");
    expect(result.vertical).toBe("33.33 mm");
    expect(result.horizontal).toBe("16.67 mm");
    expect(result.notch).toBe("25 mm");
  });

  it("returns placeholder for zero wall", () => {
    const result = calcStructure("0", "200");
    expect(result.vertical).toBe("-- mm");
  });
});
