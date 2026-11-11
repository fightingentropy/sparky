import { describe, expect, it } from "vitest";
import { MAX_SAVED_CIRCUITS, planCircuitSave } from "./savedCircuits";

const entry = (id: string, name: string, updatedAt = 1) => ({ id, name, updatedAt });

describe("planCircuitSave", () => {
  it("updates the selected entry when the name is unchanged", () => {
    const plan = planCircuitSave([entry("a", "A")], "a", "A", () => "new");
    expect(plan).toEqual({ id: "a", name: "A", replacesExisting: true, dropped: [] });
  });

  it("creates a new entry when the selected circuit is saved under another name", () => {
    const plan = planCircuitSave([entry("a", "A")], "a", "B", () => "new");
    expect(plan.id).toBe("new");
    expect(plan.replacesExisting).toBe(false);
  });

  it("creates a new entry when nothing is selected", () => {
    expect(planCircuitSave([entry("a", "A")], "", "A", () => "new").id).toBe("new");
  });

  it("reports the oldest entries that would be dropped at the cap", () => {
    const full = Array.from({ length: MAX_SAVED_CIRCUITS }, (_, i) => entry(`id${i}`, `C${i}`, i + 10));
    const plan = planCircuitSave(full, "", "Fresh", () => "new");
    expect(plan.dropped.map((e) => e.id)).toEqual(["id0"]);
    expect(planCircuitSave(full, "id3", "C3", () => "new").dropped).toEqual([]);
  });

  it("does not give a new entry the name of another entry", () => {
    const list = [entry("a", "A"), entry("b", "B")];
    const renamed = planCircuitSave(list, "a", "B", () => "new");
    expect(renamed).toMatchObject({ id: "new", name: "B (2)", replacesExisting: false });
    expect(planCircuitSave(list, "", "B", () => "new").name).toBe("B (2)");
    expect(planCircuitSave([...list, entry("c", "B (2)")], "a", "B", () => "new").name).toBe("B (3)");
    expect(planCircuitSave(list, "b", "B", () => "new").name).toBe("B");
  });
});
