# Sparky Toolkit

Sparky is an electrician toolkit and study companion with a Bun/React web app and a native SwiftUI iOS app.

The iOS app includes:

- five site calculators with saved calculation history
- searchable, saveable technical notes
- guided learning routes and seven tutorials
- 12 exam subjects, 99 tests, and 3,983 deterministic served questions
- per-option answer feedback, question flags, scores, and offline progress
- native navigation, Dynamic Type, haptics, and light/dark appearances

The React/WebGL interactive trainers and cloud account sync remain in the web client for now.

## Run locally

Install dependencies:

```sh
bun install
```

Start the dev server:

```sh
bun run dev
```

Open [http://localhost:4173](http://localhost:4173).

## Build

```sh
bun run build
```

## Native iOS app

The generated Xcode project requires Xcode 26 and [XcodeGen](https://github.com/yonaskolb/XcodeGen). Regenerate it whenever `project.yml` or the shared study content changes:

```sh
bun run ios:project
open ios/Sparky.xcodeproj
```

Select the `Sparky` scheme and an iPhone simulator, then Run. The deployment target is iOS 17.

### Codex verification workflow

When working on Sparky in Codex:

1. Build and run automated tests with `xcodebuild`.
2. Launch the build in Codex's integrated iOS simulator.
3. Verify the exact changed UI and interaction in the integrated simulator.
4. If the integrated simulator is unavailable, report the blocker. Do not install or use Apple's standalone Simulator app without explicit approval.

Run the native tests with the newest available iPhone simulator:

```sh
bun run test:ios
```

Exam JSON and dedicated typed content modules are the source of truth. The exporter validates IDs, answer choices, provenance, image references and schema invariants, then writes a SHA-256 manifest that the native app verifies before decoding any study content. Refresh the bundled iOS JSON with:

```sh
bun run ios:content
```

Check that the committed export is exactly reproducible without rewriting it:

```sh
bun run check:content
```

The mandatory local/CI gate validates generated content, lints/tests/builds the web app, regenerates the Xcode project, and runs the Swift unit tests:

```sh
bun run check
```

Calculator source classification, edition/date, units, precision, rounding and limitations are recorded in `src/contentSchema.ts`. Question-bank provenance is classified as exam convention unless a question carries a more specific verified source citation; always check the current official publication for safety-critical work.
