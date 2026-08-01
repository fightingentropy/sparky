import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const serviceWorkerPath = resolve(import.meta.dirname, "..", "dist", "sw.js");
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

for (const cachePrefix of ["exam-data", "exam-images", "lazy-pages"]) {
  const versionedCache = new RegExp(`cacheName:["']${cachePrefix}-[0-9a-f]{16}["']`);
  if (!versionedCache.test(serviceWorker)) {
    throw new Error(`dist/sw.js is missing a content-versioned ${cachePrefix} cache`);
  }
}

console.log("Verified deferred PWA feature assets and content-versioned runtime caches.");
