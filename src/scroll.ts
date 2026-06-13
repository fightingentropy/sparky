// Programmatic-scroll helpers that honour `prefers-reduced-motion`.
//
// The reduced-motion CSS override (`scroll-behavior: auto !important`) does NOT
// affect scrollTo/scrollIntoView calls that pass an explicit `behavior:
// "smooth"` — the option wins over the computed style. So any JS-driven smooth
// scroll must check the preference itself and downgrade to an instant jump.

function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function resolveBehavior(preferred: ScrollBehavior = "smooth"): ScrollBehavior {
  return prefersReducedMotion() ? "auto" : preferred;
}

export function scrollIntoViewSafely(
  element: Element | null | undefined,
  options: ScrollIntoViewOptions = {}
): void {
  element?.scrollIntoView({ ...options, behavior: resolveBehavior(options.behavior) });
}

export function scrollToSafely(
  target: { scrollTo: (options: ScrollToOptions) => void },
  options: ScrollToOptions
): void {
  target.scrollTo({ ...options, behavior: resolveBehavior(options.behavior) });
}
