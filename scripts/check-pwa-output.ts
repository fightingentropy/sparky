import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

import { contentCacheVersion } from "./content-cache-version";

const rootDir = resolve(import.meta.dirname, "..");
const serviceWorkerPath = resolve(rootDir, "dist", "sw.js");
const serviceWorker = await readFile(serviceWorkerPath, "utf8");

// A prompt-mode worker can remain in `waiting` forever because Sparky has no
// update-confirmation UI. Require the generated worker to take control so a
// deployed UI fix cannot be hidden behind an indefinitely stale app shell.
if (!serviceWorker.includes("self.skipWaiting()") || !serviceWorker.includes(".clientsClaim()")) {
  throw new Error("dist/sw.js must activate and claim new application builds automatically");
}

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

// Precached HTML keeps the response headers it was cached with, including the
// Content-Security-Policy. Each HTML revision must carry the _headers hash so a
// header-only deploy still refreshes those pages for returning visitors.
const headersRevision = createHash("sha256")
  .update(await readFile(resolve(rootDir, "public", "_headers")))
  .digest("hex")
  .slice(0, 12);
const htmlEntries = [...precache.matchAll(/\{url:"([^"]+\.html)",revision:"([^"]+)"\}/g)];
if (htmlEntries.length === 0) {
  throw new Error("dist/sw.js precaches no HTML pages; expected at least index.html");
}
for (const [, url, revision] of htmlEntries) {
  if (!revision.endsWith(`-${headersRevision}`)) {
    throw new Error(
      `dist/sw.js precaches ${url} at revision ${revision}, which does not include the public/_headers hash ${headersRevision}`,
    );
  }
}

console.log(
  `Verified deferred PWA assets, runtime cache version ${expectedContentVersion} and ${htmlEntries.length} header-versioned HTML pages.`,
);
