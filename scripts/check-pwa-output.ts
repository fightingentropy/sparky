import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

import { contentCacheVersion } from "./content-cache-version";

const rootDir = resolve(import.meta.dirname, "..");
const serviceWorkerPath = resolve(rootDir, "dist", "sw.js");
const serviceWorker = await readFile(serviceWorkerPath, "utf8");
const runtimeRouteStart = serviceWorker.indexOf("cleanupOutdatedCaches");
if (runtimeRouteStart < 0) {
  throw new Error("Could not find the Workbox runtime route boundary in dist/sw.js");
}

const precache = serviceWorker.slice(0, runtimeRouteStart);
for (const lazyAsset of [
  "ExamPage-",
  "InteractivePage-",
  "FaultFinding-",
  "PanelTrainer-",
  "pdfmake-",
  "vfs_fonts-",
]) {
  if (precache.includes(lazyAsset)) {
    throw new Error(`${lazyAsset} must be runtime cached, not install-time precached`);
  }
}

const expectedContentVersion = contentCacheVersion(rootDir);
for (const cachePrefix of ["exam-data", "exam-images", "lazy-pages"]) {
  const cachePattern = new RegExp(`cacheName:["']${cachePrefix}-([0-9a-f]{16})["']`, "g");
  const versions = [...serviceWorker.matchAll(cachePattern)].map((match) => match[1]);
  if (versions.length !== 1) {
    throw new Error(
      `dist/sw.js must contain exactly one content-versioned ${cachePrefix} cache; found ${versions.length}`,
    );
  }
  if (versions[0] !== expectedContentVersion) {
    throw new Error(
      `dist/sw.js has stale ${cachePrefix} cache version ${versions[0]}; expected ${expectedContentVersion}`,
    );
  }
}

console.log(
  `Verified deferred PWA assets and runtime cache version ${expectedContentVersion}.`,
);
