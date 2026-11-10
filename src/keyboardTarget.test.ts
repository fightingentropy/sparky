import { describe, expect, it } from "vitest";
import { isTextEntryTarget } from "./keyboardTarget";

describe("isTextEntryTarget", () => {
  it("treats inputs, textareas, selects and contenteditable as text entry", () => {
    expect(isTextEntryTarget({ tagName: "INPUT" } as unknown as EventTarget)).toBe(true);
    expect(isTextEntryTarget({ tagName: "textarea" } as unknown as EventTarget)).toBe(true);
    expect(isTextEntryTarget({ tagName: "SELECT" } as unknown as EventTarget)).toBe(true);
    expect(isTextEntryTarget({ tagName: "DIV", isContentEditable: true } as unknown as EventTarget)).toBe(true);
  });

  it("does not treat other elements or a missing target as text entry", () => {
    expect(isTextEntryTarget({ tagName: "BUTTON" } as unknown as EventTarget)).toBe(false);
    expect(isTextEntryTarget({ tagName: "BODY" } as unknown as EventTarget)).toBe(false);
    expect(isTextEntryTarget(null)).toBe(false);
  });
});
