import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";

async function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) {
    return;
  }

  try {
    const registration = await navigator.serviceWorker.register("/sw.js", {
      updateViaCache: "none"
    });
    void registration.update();
  } catch {
    // Keep the app usable even if registration fails.
  }
}

registerServiceWorker();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
