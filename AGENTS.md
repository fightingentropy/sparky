# AGENTS.md

## Local Dev

- `sparky-dev`: run `bun run dev`.
- The local dev server listens on port 4173.
- A different port may be used if 4173 is unavailable.

## Native iOS Verification

- Use Codex's integrated iOS simulator for all Sparky UI, visual, and interaction checks.
- Do not install, open, or control Apple's standalone Simulator app; it is intentionally removed from this machine.
- `xcodebuild` may still target an iOS Simulator for automated tests, but passing tests do not replace an integrated-simulator visual check.
- If the integrated simulator is unavailable or cannot reproduce an issue, report the blocker. Do not reinstall or fall back to the standalone Simulator without explicit user approval.
- Use a physical device only for device-specific behavior or when the user explicitly asks for an install.
