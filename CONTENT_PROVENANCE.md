# Content provenance audit

Audit snapshot: 1 August 2026.

## What is covered

Every delivered exam question resolves at least one `ContentSource`, and every calculator definition has one or more source records. Each record carries classification, jurisdiction, document identifier, edition, amendment, effective date, section/table locator, provenance-profile version, content version, a scoped hash, and licensed/editorial confirmation flags.

The current generated delivery contains 3,983 question instances:

- 98 resolve an existing focused section/table citation in addition to their bank source.
- 3,885 resolve only the imported-bank fallback.
- The fallback is deliberately classified as `exam-convention` and marked as needing licensed and editorial confirmation.
- No source is classified as `law`, because the repository does not contain a verified question-to-legislation mapping. Wording that mentions legislation is not treated as proof of provenance.

This is complete machine-readable coverage, not a claim that every answer has been authoritatively verified. The fallback records make missing evidence explicit instead of guessing it.

## Hash meanings

- `repository-file` SHA-256 values fingerprint the exact imported source JSON, not a cited standard.
- `citation-record` and `provenance-record` FNV-1a values fingerprint local metadata only.
- `content-manifest.json` supplies SHA-256 file and aggregate hashes for the transformed iOS delivery, including corrections, rationales and focused tables.
- The PWA content-cache digest separately covers exam sources, transforms, rationales and exam-image bytes.

Question IDs are deterministic and globally unique in the current delivery. They are derived from delivered exam, variant, section and position; they are not promised to remain attached to the same semantic question after a future reorder.

## Licensing and editorial boundary

No licensed standards table was added by this audit. Existing cheat sheets already contain standards-derived numeric quick-reference material; those excerpts still require a separate licence and editorial review. Focused question citations retain the locators that were already present without copying the underlying publication.

The automated “exactly one correct answer” gate proves that each question has one A-D key and exactly one matching `correct` feedback marker. It does not prove semantic correctness. Imported-bank answers remain flagged for review against the applicable official edition.

## Calculator boundary

All 10 web calculator definitions have provenance records and independently authored golden fixtures. One calculation path relies on BS 7671 Appendix 4 and is marked for licensed confirmation. The structural calculator separates the public Approved Document A wall-chase locator from an unverified local one-eighth joist-notch convention; the latter remains marked for editorial confirmation.

The native app currently exposes two calculator surfaces and has four native calculation engines. Native unit tests cover those engines and their shared bend conventions, while the complete 10-calculator golden suite executes against the web implementations. Generated iOS content parity does not imply that all 10 web calculators have native UI/engine parity.
