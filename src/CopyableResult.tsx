import { useEffect, useRef, useState } from "react";
import { writeClipboardText } from "./clipboard";

type Props = {
  value: string;
  onCopy?: () => void;
};

type CopyState = "idle" | "copied" | "failed";

export function CopyableResult({ value, onCopy }: Props) {
  const [copyState, setCopyState] = useState<CopyState>("idle");
  const timeoutRef = useRef<number | null>(null);

  const isPlaceholder = value.startsWith("--");
  const copied = copyState === "copied";
  const failed = copyState === "failed";

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  async function handleClick() {
    if (isPlaceholder) return;
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
    }
    try {
      await writeClipboardText(value);
      setCopyState("copied");
      onCopy?.();
      timeoutRef.current = window.setTimeout(() => {
        setCopyState("idle");
        timeoutRef.current = null;
      }, 1200);
    } catch {
      setCopyState("failed");
      timeoutRef.current = window.setTimeout(() => {
        setCopyState("idle");
        timeoutRef.current = null;
      }, 2000);
    }
  }

  const stateClass = copied ? " is-copied" : failed ? " is-failed" : "";
  const titleText = isPlaceholder
    ? undefined
    : failed
      ? "Copy failed — clipboard unavailable"
      : "Copy to clipboard";
  const ariaLabel = isPlaceholder
    ? value
    : failed
      ? `Copy failed for ${value}`
      : `Copy ${value}`;

  return (
    <button
      type="button"
      className={`copyable-result${stateClass}${isPlaceholder ? " is-placeholder" : ""}`}
      onClick={handleClick}
      title={titleText}
      aria-label={ariaLabel}
    >
      <span>{value}</span>
      {!isPlaceholder && (
        <span className="copy-icon" aria-hidden="true">
          {copied ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5.5 12.5l4.2 4.2L18.5 7.9"/></svg>
          ) : failed ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 6l12 12M18 6L6 18"/></svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="8" y="8" width="10" height="10" rx="2"/><path d="M6 14H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"/></svg>
          )}
        </span>
      )}
    </button>
  );
}
