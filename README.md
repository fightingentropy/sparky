# Sparky Toolkit

Sparky is an electrician toolkit and study companion with a Bun/React web app and a native SwiftUI iOS app.

The iOS app includes:

- five site calculators with saved calculation history
- searchable, saveable technical notes
- guided learning routes and seven tutorials
- 11 exam subjects, 103 tests, and 4,289 deterministic served questions
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

Run the native tests with:

```sh
cd ios
xcodebuild test -project Sparky.xcodeproj -scheme Sparky \
  -destination 'platform=iOS Simulator,name=iPhone 17 Pro'
```

The web TypeScript data remains the content source of truth. To refresh only the bundled iOS JSON:

```sh
bun run ios:content
```
