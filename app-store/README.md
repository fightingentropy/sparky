# Sparky App Store release

Prepared on 4 September 2026. Submission has not completed.

## Prepared

- App identifier `com.erlinhoxha.sparky` registered in Apple Developer team `T29NU9NCA2`.
- English (UK) listing copy in `metadata.en-GB.json`.
- Privacy manifest included in the application resources.
- Privacy, support and account-deletion links in native Settings.
- Public privacy, support and account-deletion pages deployed to https://electrics.pages.dev, with the approved support contact erlin.hx@gmail.com.
- App Store Connect record 6808803044, Sparky: Electrical Study.
- Apple agreement accepted; automatic distribution signing and IPA export succeeded.
- Publisher confirmed permission for the BS 7671/IET-derived reference tables.
- Initial release authorized as free, United Kingdom only.
- Password-confirmed account deletion with an atomic database operation and immediate session invalidation.
- Export configuration in `ios/ExportOptions-AppStore.plist`.

## Validation completed

`bun run check` passed: generated-content parity, lint, 254 web tests, production web build and Xcode automated tests.

`bun run scripts/check-account-deletion.ts` passed 21 API checks against an isolated local Pages/D1 instance. These cover wrong credentials, missing confirmation, cross-origin requests, oversized bodies, successful deletion, unaffected neighbouring accounts, revoked sessions and fresh accounts not recovering deleted progress. No production account was deleted.

The Release archive at `ios/build/Sparky-1.0-preflight.xcarchive` was built with the installed Xcode 27 beta 4. It includes the privacy manifest and the standard-encryption declaration. This is a local preflight archive; it is not a confirmed App Store uploadable package.

## Submission progress and remaining work

- App description, keywords, support URL, marketing URL, copyright and review notes/contact are saved in App Store Connect. Education and Reference categories are selected.
- Apple rejected the beta archive upload with `Unsupported SDK or Xcode version` (validation ID ZAZL5XFY23FTG5VOZFZP2ENFGY). No accepted build or submission is established.
- `.github/workflows/app-store-archive.yml` builds an unsigned archive using stable Xcode 26.3 on GitHub's macOS 15 runner. Distribution signing remains local; no Apple signing keys are sent to GitHub.
- Complete native visual checks and required iPhone/iPad screenshots. The integrated simulator is unavailable; the user explicitly approved Apple's standalone simulator fallback for this release on 4 September 2026.
- Provide App Review demo credentials for optional cloud features, outside version control.
- Finish age rating, privacy answers, free pricing and UK-only availability, attach the accepted build and screenshots, and submit for review.

Production deployment `833bccd3` is live. Privacy, support and deletion pages return HTTP 200, anonymous account access returns 401, and an empty deletion request returns 400 without modifying data.

## Release commands

Run these with `DEVELOPER_DIR` pointing to the approved production Xcode installation:

```sh
bun run ios:project
bun run check
xcodebuild archive -project ios/Sparky.xcodeproj -scheme Sparky -configuration Release -destination 'generic/platform=iOS' -archivePath ios/build/Sparky-AppStore.xcarchive -allowProvisioningUpdates
xcodebuild -exportArchive -archivePath ios/build/Sparky-AppStore.xcarchive -exportPath ios/build/AppStoreExport -exportOptionsPlist ios/ExportOptions-AppStore.plist -allowProvisioningUpdates
```

The PWA navigation fallback excludes `/privacy`, `/support` and `/delete-account`, keeping these public support routes directly accessible.

Previous production deployment for rollback: `fbf005ba-39d4-471a-a613-124483c6a5b0`, source `e4552d8`, at `https://fbf005ba.electrics.pages.dev`.

## Local deletion verification

Use an isolated directory to avoid touching normal development or production accounts:

```sh
wrangler d1 migrations apply sparky-db --local --persist-to /tmp/sparky-submission-d1
wrangler pages dev dist --port 8791 --persist-to /tmp/sparky-submission-d1 --binding JWT_SECRET=local-release-test-only
bun run scripts/check-account-deletion.ts
```
