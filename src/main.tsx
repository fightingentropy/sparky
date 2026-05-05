import React from "react";
import ReactDOM from "react-dom/client";
import { registerSW } from "virtual:pwa-register";
import { AuthProvider } from "./AuthContext";
import App from "./App";
import "./styles.css";

registerSW({ immediate: true });

// When a deploy lands while a tab is open, the running React tree still holds
// references to old chunk hashes. Lazy-loaded pages will fail to fetch their
// chunk because the new SW has cleaned them out. Catch the preload error and
// reload the page so the user lands on the new build.
let reloadingForChunkError = false;
window.addEventListener("vite:preloadError", () => {
  if (reloadingForChunkError) return;
  reloadingForChunkError = true;
  window.location.reload();
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
