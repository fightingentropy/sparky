# Sparky App Store release

## Submitted

Sparky: Electrical Study **1.0 (2)** was submitted on **4 September 2026 at 23:47 Europe/London**. App Store Connect confirmed **Waiting for Review** and **Items Submitted (1)**.

- Apple app ID: `6808803044`
- Bundle ID: `com.erlinhoxha.sparky`
- Team: `T29NU9NCA2`
- Submission ID: `24dae446-9c84-4bff-be4b-6f85667d3a2d`
- [Submission receipt](https://appstoreconnect.apple.com/apps/6808803044/distribution/reviewsubmissions/details/24dae446-9c84-4bff-be4b-6f85667d3a2d)
- Price and availability: free, United Kingdom only.
- Release: automatically after Apple approval.
- Categories: Education and Reference. Age rating: 13+ (12+ on operating systems before version 26).
- Review approval and public App Store availability are not yet established.

## Submitted build and assets

The final native source is commit `3eb3448`. [GitHub build 33926085509](https://github.com/fightingentropy/sparky/actions/runs/33926085509) archived it using Xcode 26.3 (`17C529`), iOS SDK 26.2 and macOS build `24G830`. The unsigned archive was downloaded and distribution-signed locally with automatic signing; no Apple private signing keys were sent to GitHub.

Apple accepted the upload. Xcode automatically assigned build 2, and that processed build was selected for review. The earlier Xcode 27 beta preflight upload was rejected; it was not submitted.

Three screenshots each for iPhone (1320 × 2868) and iPad (2064 × 2752) were captured from the actual native app, visually reviewed and uploaded in Exams, Learn, Tools order. Source images remain in ignored local output `ios/Screenshots/AppStore/`. Apple's Media Manager reuses these for the other display sizes.

The integrated simulator was unavailable. The user explicitly approved Apple's standalone simulator fallback for this release. Device Hub's window was unresponsive, so Apple's simulator runtime was driven using `simctl` and XCTest, with actual screenshots inspected separately. No physical-device install was requested or performed.

## Privacy, support and content

- [Support](https://electrics.pages.dev/support), [privacy](https://electrics.pages.dev/privacy) and [account deletion](https://electrics.pages.dev/delete-account) are live on production deployment `833bccd3`.
- The approved support address is `erlin.hx@gmail.com`.
- Native Settings links to these pages. Account deletion verifies the password and explicit DELETE confirmation, atomically removes account/cloud progress, and immediately invalidates sessions.
- App Privacy was published: email, name, profile photo, other user content, account identifier, product interaction and security-related other data; linked for app functionality; no tracking or advertising.
- The privacy manifest and non-exempt-encryption declaration are included in build 2.
- Question ownership and permission to publish BS 7671/IET-derived reference tables were explicitly confirmed by Erlin Hoxha. The content-rights declaration is saved in App Store Connect.
- A dedicated review login was created, verified and provided to Apple. Its credentials remain outside version control in ignored `ios/build/AppReviewCredentials.json` with file mode 0600. Do not copy credentials into repository files.

## Validation

`bun run check` passed: generated-content parity, lint, 254 web tests, production web build and the native automated test suite.

The account-deletion endpoint passed 21 checks against an isolated local Pages/D1 database: authentication, confirmation, cross-origin and oversized requests, successful deletion, revoked sessions, unaffected neighbouring users and clean recreation. No existing production account was deleted.

The answer/reveal/reset interaction check also passed on clean iPhone 17 Pro Max and iPad Pro 13-inch simulators running iOS 26.5. Real screenshots were inspected for each device. Result bundles remain in ignored `ios/build/AppStore-iPhone-Interaction.xcresult` and `ios/build/AppStore-iPad-Interaction.xcresult`.

Production verification: support/privacy/deletion pages HTTP 200, anonymous account access HTTP 401, and empty deletion request HTTP 400. The PWA navigation fallback excludes the support routes.

## Rebuilding

`.github/workflows/app-store-archive.yml` produces unsigned stable-Xcode archives on the release branch. Download the artifact and use `ios/ExportOptions-AppStore.plist` for local distribution export, or an ignored copy with destination `upload` for direct upload. Use automatic version management when uploading another build.

Local final archive: `ios/build/StableArchiveFinal/Sparky-AppStore.xcarchive`.

Previous production deployment for rollback: `fbf005ba-39d4-471a-a613-124483c6a5b0`, source `e4552d8`, at https://fbf005ba.electrics.pages.dev.
