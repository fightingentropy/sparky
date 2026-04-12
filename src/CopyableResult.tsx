import { useState } from "react";

type Props = {
  value: string;
  onCopy?: () => void;
};

export function CopyableResult({ value, onCopy }: Props) {
  const [copied, setCopied] = useState(false);

  const isPlaceholder = value.startsWith("--");

  async function handleClick() {
    if (isPlaceholder) return;
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      onCopy?.();
      setTimeout(() => setCopied(false), 1200);
    } catch {}
  }

  return (
    <button
      type="button"
      className={`copyable-result${copied ? " is-copied" : ""}${isPlaceholder ? " is-placeholder" : ""}`}
      onClick={handleClick}
      title={isPlaceholder ? undefined : "Copy to clipboard"}
      aria-label={isPlaceholder ? value : `Copy ${value}`}
    >
      <span>{value}</span>
      {!isPlaceholder && (
        <span className="copy-icon" aria-hidden="true">
          {copied ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5.5 12.5l4.2 4.2L18.5 7.9"/></svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="8" y="8" width="10" height="10" rx="2"/><path d="M6 14H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"/></svg>
          )}
        </span>
      )}
    </button>
  );
}
