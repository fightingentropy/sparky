import { useState } from "react";

type Props = {
  formula: string;
};

export function FormulaToggle({ formula }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="formula-toggle">
      <button
        type="button"
        className="formula-trigger"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 16v-4"/>
          <path d="M12 8h.01"/>
        </svg>
        {open ? "Hide formula" : "Show formula"}
      </button>
      {open && (
        <pre className="formula-content">{formula}</pre>
      )}
    </div>
  );
}
