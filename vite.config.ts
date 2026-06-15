import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: [
        "icons/icon.svg",
        "icons/apple-touch-icon.png",
        "icons/icon-192.png",
        "icons/icon-512.png",
        "icons/maskable-512.png"
      ],
      manifest: {
        name: "Sparky",
        short_name: "Sparky",
        description: "Offline electrician toolkit with quick calculators and cheat sheets.",
        start_url: "/",
        scope: "/",
        display: "standalone",
        background_color: "#14171b",
        theme_color: "#0b0d10",
        icons: [
          { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
          { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
          { src: "/icons/maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
          { src: "/icons/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" }
        ]
      },
      workbox: {
        // Precache the app shell only. The heavy three.js chunks and per-exam
        // JSON are deliberately lazy-loaded at runtime, so we exclude them from
        // the install-time precache and cache them on first actual use via
        // runtimeCaching below. Precaching everything (the old `json` glob plus
        // the react-three chunks) inflated the install payload to ~3.3 MB and
        // defeated the lazy-load architecture.
        globPatterns: ["**/*.{js,css,html,svg,png,ico,webmanifest,woff2}"],
        globIgnores: [
          "assets/react-three-*.js",
          "assets/three-core-*.js",
          "assets/three-examples-*.js",
          // Build source for maskable-512.png — never referenced at runtime.
          "icons/maskable.svg"
        ],
        navigateFallback: "/index.html",
        cleanupOutdatedCaches: true,
        maximumFileSizeToCacheInBytes: 8 * 1024 * 1024,
        runtimeCaching: [
          {
            // Per-exam content fetched on demand (examRegistry.ts). Hashed
            // filenames make CacheFirst safe — a new build is a new URL.
            urlPattern: /\/assets\/.*\.json$/,
            handler: "CacheFirst",
            options: {
              cacheName: "exam-data",
              expiration: { maxEntries: 20, maxAgeSeconds: 60 * 60 * 24 * 60 }
            }
          },
          {
            // Heavy three.js / @react-three chunks for the 3D trainer pages.
            urlPattern: /\/assets\/(react-three|three-core|three-examples)-.*\.js$/,
            handler: "CacheFirst",
            options: {
              cacheName: "three-chunks",
              expiration: { maxEntries: 40, maxAgeSeconds: 60 * 60 * 24 * 60 }
            }
          }
        ]
      },
      devOptions: {
        enabled: true,
        type: "module",
        navigateFallback: "index.html"
      }
    })
  ],
  server: {
    host: true,
    // Honor a port assigned via the PORT env var (e.g. preview tooling that
    // auto-picks a free port to avoid collisions); fall back to 4173 otherwise.
    port: Number(process.env.PORT) || 4173,
    proxy: {
      "/api": "http://localhost:8788"
    }
  },
  preview: {
    host: true,
    port: Number(process.env.PORT) || 4173
  },
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: "react-three",
              test: /node_modules[\\/]@react-three[\\/]/,
              maxSize: 260 * 1024,
              priority: 3
            },
            {
              name: "three-examples",
              test: /node_modules[\\/]three[\\/]examples[\\/]/,
              maxSize: 260 * 1024,
              priority: 2
            },
            {
              name: "three-core",
              test: /node_modules[\\/]three[\\/]/,
              maxSize: 260 * 1024,
              priority: 1
            }
          ]
        }
      }
    }
  }
});
