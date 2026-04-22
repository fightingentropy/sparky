import React from "react";
import ReactDOM from "react-dom/client";
import { registerSW } from "virtual:pwa-register";
import App from "./App";
import "./styles.css";

const viewportSyncDelays = [0, 80, 250, 700];

function syncViewportHeight() {
  const measuredHeight =
    window.visualViewport?.height || window.innerHeight || document.documentElement.clientHeight;

  if (Number.isFinite(measuredHeight) && measuredHeight > 0) {
    const height = Math.floor(measuredHeight);
    document.documentElement.style.setProperty("--app-viewport-height", `${height}px`);
  }
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
