import { useEffect, useRef, useState } from "react";

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return true;
  return (
    document.documentElement.classList.contains("reduce-motion") ||
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === true
  );
}

/** Follows `target`, easing towards it unless dragging or reduced motion. */
export function useTweened(target: number, immediate: boolean): number {
  const [value, setValue] = useState(target);
  const valueRef = useRef(target);

  useEffect(() => {
    const from = valueRef.current;
    if (immediate || from === target || prefersReducedMotion()) {
      valueRef.current = target;
      setValue(target);
      return;
    }
    let frame = 0;
    const startedAt = performance.now();
    const duration = 320;
    const tick = (now: number) => {
      const t = Math.min(1, (now - startedAt) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      valueRef.current = from + (target - from) * eased;
      setValue(valueRef.current);
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, immediate]);

  return value;
}
