import React from "react";
import ReactDOM from "react-dom/client";
import { registerSW } from "virtual:pwa-register";
import App from "./App";
import "./styles.css";

const viewportSyncDelays = [0, 80, 250, 700];

function isStandalonePwa() {
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    (window.navigator as Navigator & { standalone?: boolean }).standalone === true
  );
}

function isAppleTouchDevice() {
  return (
    /iP(ad|hone|od)/.test(window.navigator.userAgent) ||
    (window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1)
  );
}

function hasEditableFocus() {
  return (
    document.activeElement instanceof HTMLInputElement ||
    document.activeElement instanceof HTMLSelectElement ||
    document.activeElement instanceof HTMLTextAreaElement
  );
}

function getScreenHeight() {
  const portrait = window.matchMedia("(orientation: portrait)").matches;
  const shorterSide = Math.min(window.screen.width, window.screen.height);
  const longerSide = Math.max(window.screen.width, window.screen.height);
  return portrait ? longerSide : shorterSide;
}

function syncViewportHeight() {
  const visualViewportHeight = window.visualViewport?.height;
  const editableFocus = hasEditableFocus();
  const measuredHeights = editableFocus
    ? [visualViewportHeight, window.innerHeight]
    : [visualViewportHeight, window.innerHeight, document.documentElement.clientHeight];

  if (
    !editableFocus &&
    isStandalonePwa() &&
    isAppleTouchDevice() &&
    document.documentElement.clientWidth <= 720
  ) {
    measuredHeights.push(getScreenHeight());
  }

  const finiteHeights = measuredHeights.filter(
    (value): value is number => typeof value === "number" && Number.isFinite(value) && value > 0
  );
  if (finiteHeights.length === 0) return;

  const height = Math.ceil(Math.max(...finiteHeights));

  if (Number.isFinite(height)) {
    document.documentElement.style.setProperty("--app-viewport-height", `${height}px`);
  }

  document.documentElement.classList.toggle("is-standalone-pwa", isStandalonePwa());
}

function scheduleViewportSync() {
  viewportSyncDelays.forEach((delay) => window.setTimeout(syncViewportHeight, delay));
}

syncViewportHeight();
scheduleViewportSync();

window.addEventListener("resize", scheduleViewportSync, { passive: true });
window.addEventListener("orientationchange", scheduleViewportSync, { passive: true });
window.addEventListener("pageshow", scheduleViewportSync, { passive: true });
window.addEventListener("focusin", scheduleViewportSync, { passive: true });
window.addEventListener("focusout", scheduleViewportSync, { passive: true });
window.visualViewport?.addEventListener("resize", scheduleViewportSync, { passive: true });
window.visualViewport?.addEventListener("scroll", scheduleViewportSync, { passive: true });
document.addEventListener("visibilitychange", () => {
  if (!document.hidden) {
    scheduleViewportSync();
  }
});

registerSW({ immediate: true });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
