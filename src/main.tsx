import React from "react";
import ReactDOM from "react-dom/client";
import { registerSW } from "virtual:pwa-register";
import { AuthProvider } from "./AuthContext";
import App from "./App";
import { claimPreloadRecovery, recoverFromPreloadError } from "./pwaRecovery";
import "./styles.css";

if ("serviceWorker" in navigator) {
  let hadController = Boolean(navigator.serviceWorker.controller);
  let reloadingForServiceWorker = false;

  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (!hadController) {
      hadController = true;
      return;
    }
    if (reloadingForServiceWorker) return;
    reloadingForServiceWorker = true;
    window.location.reload();
  });
}

const activateServiceWorkerUpdate = registerSW({
  immediate: true,
  onRegisteredSW: (_swScriptUrl, registration) => {
    if (!registration) return;

    const checkForServiceWorkerUpdate = () => {
      registration.update().catch(() => {});
    };

    checkForServiceWorkerUpdate();
    // Poll for a new build every 30 min (not every 60s). The visibilitychange
    // handler below already catches the common "user came back to the tab"
    // case, so a tight interval just spends needless network requests and, with
    // autoUpdate, risks reloading a tab out from under someone mid-exam.
    window.setInterval(checkForServiceWorkerUpdate, 30 * 60 * 1000);

    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") checkForServiceWorkerUpdate();
    });
  }
});

// When a deploy lands while a tab is open, the running React tree still holds
// references to old chunk hashes. Lazy-loaded pages will fail to fetch their
// chunk because the new SW has cleaned them out. Promote the waiting worker
// before reloading; a session-scoped guard prevents a stale controller from
// repeatedly serving the same broken app shell forever.
let reloadingForChunkError = false;
window.addEventListener("vite:preloadError", (event) => {
  event.preventDefault();
  if (reloadingForChunkError) return;
  if (!claimPreloadRecovery(sessionStorage)) return;
  reloadingForChunkError = true;

  void recoverFromPreloadError({
    activateUpdate: async () => {
      const registration = await navigator.serviceWorker.getRegistration();
      try {
        await registration?.update();
      } catch {}
      registration?.waiting?.postMessage({ type: "SKIP_WAITING" });
      await activateServiceWorkerUpdate();
    },
    reload: () => window.location.reload(),
    scheduleReload: (callback, delayMs) => window.setTimeout(callback, delayMs)
  });
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
