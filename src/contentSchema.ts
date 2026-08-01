export const CONTENT_SCHEMA_VERSION = 3;

export const CONTENT_MANIFEST_SCHEMA_VERSION = 1;

export const CONTENT_PROVENANCE_PROFILE_VERSION = "sparky-provenance-v1";

export const PROVENANCE_NOT_APPLICABLE = "Not applicable";
export const PROVENANCE_UNCONFIRMED_EDITION =
  "Unconfirmed — the repository source does not record an edition";
export const PROVENANCE_UNCONFIRMED_AMENDMENT =
  "Unconfirmed — the repository source does not record amendment status";
export const PROVENANCE_UNCONFIRMED_EFFECTIVE_DATE =
  "Unconfirmed — the repository source does not record an effective date";

export type SourceClassification =
  | "law"
  | "standard"
  | "guidance"
  | "exam-convention";

/**
 * Describes what was fingerprinted. A citation/provenance hash must never be
 * presented as a hash of a licensed publication that is not in the repository.
 */
export type SourceHashScope =
  | "repository-file"
  | "citation-record"
  | "provenance-record";

export type ContentSource = {
  id: string;
  classification: SourceClassification;
  jurisdiction: string;
  documentIdentifier: string;
  edition: string;
  amendment: string;
  effectiveDate: string;
  recordedOn: string;
  locator: string;
  sectionOrTable: string;
  profileVersion: string;
  contentVersion: string;
  sourceHash: string;
  sourceHashScope: SourceHashScope;
  needsLicensedConfirmation: boolean;
  needsEditorialConfirmation: boolean;
  sourceUrl?: string;
  limitations?: string;
};

export type CalculatorDefinition = {
  id: string;
  algorithmVersion: number;
  units: readonly string[];
  precision: string;
  roundingRule: string;
  source: ContentSource;
  additionalSources?: readonly ContentSource[];
};

/**
 * Small dependency-free fingerprint for local citation/provenance records.
 * It is deliberately labelled FNV-1a rather than SHA-256. Repository exam
 * files use real SHA-256 values; licensed publications that are not stored
 * locally are never falsely claimed to have been hashed.
 */
export function hashProvenanceRecord(parts: readonly string[]): string {
  const bytes = new TextEncoder().encode(parts.join("\u0000"));
  let hash = 0xcbf29ce484222325n;
  const prime = 0x100000001b3n;

  for (const byte of bytes) {
    hash ^= BigInt(byte);
    hash = BigInt.asUintN(64, hash * prime);
  }

  return `fnv1a64:${hash.toString(16).padStart(16, "0")}`;
}

type CalculatorSourceInput = Omit<
  ContentSource,
  "profileVersion" | "contentVersion" | "sourceHash" | "sourceHashScope"
>;

type CalculatorDefinitionInput = Omit<
  CalculatorDefinition,
  "source" | "additionalSources"
> & {
  source: CalculatorSourceInput;
  additionalSources?: readonly CalculatorSourceInput[];
};

function defineCalculatorSource(
  input: CalculatorDefinitionInput,
  source: CalculatorSourceInput,
  role: "primary" | "additional",
): ContentSource {
  const sourceWithoutHash = {
    ...source,
    profileVersion: CONTENT_PROVENANCE_PROFILE_VERSION,
    contentVersion:
      role === "primary"
        ? `calculator/${input.id}/algorithm-${input.algorithmVersion}`
        : `calculator/${input.id}/algorithm-${input.algorithmVersion}/source-${source.id}`,
  };
  const sourceHash = hashProvenanceRecord([
    JSON.stringify({
      id: input.id,
      algorithmVersion: input.algorithmVersion,
      units: input.units,
      precision: input.precision,
      roundingRule: input.roundingRule,
      role,
      source: sourceWithoutHash,
    }),
  ]);

  return {
    ...sourceWithoutHash,
    sourceHash,
    sourceHashScope: "provenance-record",
  };
}

function defineCalculator(input: CalculatorDefinitionInput): CalculatorDefinition {
  return {
    ...input,
    source: defineCalculatorSource(input, input.source, "primary"),
    additionalSources: input.additionalSources?.map((source) =>
      defineCalculatorSource(input, source, "additional"),
    ),
  };
}

/**
 * Auditable metadata for every calculator exposed by the web app. These records
 * describe what the implementation is based on; they are intentionally not a
 * substitute for checking the cited publication for safety-critical work.
 */
export const CALCULATOR_DEFINITIONS = [
  defineCalculator({
    id: "containment-rod",
    algorithmVersion: 1,
    units: ["mm"],
    precision: "Displayed to at most two decimal places",
    roundingRule: "No fabrication rounding is applied",
    source: {
      id: "site-fabrication-containment-rod-v1",
      classification: "exam-convention",
      jurisdiction: "Sparky training convention — not jurisdiction-specific",
      documentIdentifier: "Sparky site-fabrication convention",
      edition: "1",
      amendment: "No amendment recorded",
      effectiveDate: "2026-08-01",
      recordedOn: "2026-08-01",
      locator: "Rod cut length and Unistrut drop relationship",
      sectionOrTable: "Rod cut length and Unistrut drop relationship",
      needsLicensedConfirmation: false,
      needsEditorialConfirmation: false,
      limitations:
        "A site aid; confirm allowances and fixing details for the actual installation.",
    },
  }),
  defineCalculator({
    id: "unistrut-length",
    algorithmVersion: 1,
    units: ["mm"],
    precision: "Input widths and allowances are preserved",
    roundingRule: "Final stock length rounds upward to the next 50 mm",
    source: {
      id: "site-fabrication-unistrut-v1",
      classification: "exam-convention",
      jurisdiction: "Sparky training convention — not jurisdiction-specific",
      documentIdentifier: "Sparky site-fabrication convention",
      edition: "1",
      amendment: "No amendment recorded",
      effectiveDate: "2026-08-01",
      recordedOn: "2026-08-01",
      locator: "Containment widths, side allowances and gaps",
      sectionOrTable: "Containment widths, side allowances and gaps",
      needsLicensedConfirmation: false,
      needsEditorialConfirmation: false,
      limitations:
        "A fabrication estimate; verify support loading, spacing and manufacturer requirements.",
    },
  }),
  defineCalculator({
    id: "angle-drop",
    algorithmVersion: 1,
    units: ["mm", "cm", "m"],
    precision: "Displayed to at most two decimal places",
    roundingRule: "No fabrication rounding is applied",
    source: {
      id: "euclidean-right-triangle-v1",
      classification: "guidance",
      jurisdiction: "Not jurisdiction-specific",
      documentIdentifier: "Right-triangle trigonometric identities",
      edition: "Stable mathematical relation",
      amendment: PROVENANCE_NOT_APPLICABLE,
      effectiveDate: PROVENANCE_NOT_APPLICABLE,
      recordedOn: "2026-08-01",
      locator:
        "hypotenuse = opposite / sin(angle); adjacent = hypotenuse * cos(angle)",
      sectionOrTable: "Right-triangle formulae",
      needsLicensedConfirmation: false,
      needsEditorialConfirmation: false,
      limitations:
        "Assumes the entered angle is measured from the horizontal and dimensions share one unit.",
    },
  }),
  defineCalculator({
    id: "trunking-opposite-mark",
    algorithmVersion: 1,
    units: ["degrees", "mm"],
    precision: "Exact mark shown to one decimal place",
    roundingRule: "Fabrication mark rounds to the nearest millimetre",
    source: {
      id: "site-fabrication-trunking-v1",
      classification: "exam-convention",
      jurisdiction: "Sparky training convention — not jurisdiction-specific",
      documentIdentifier: "Sparky containment-bend convention",
      edition: "1",
      amendment: "No amendment recorded",
      effectiveDate: "2026-08-01",
      recordedOn: "2026-08-01",
      locator: "opposite = tan(total bend angle / 2) * adjacent",
      sectionOrTable: "Opposite-mark formula",
      needsLicensedConfirmation: false,
      needsEditorialConfirmation: false,
      limitations:
        "Check the bend method, material thickness and manufacturer's minimum radius.",
    },
  }),
  defineCalculator({
    id: "tray-bend-cut",
    algorithmVersion: 2,
    units: ["degrees", "mm"],
    precision: "Exact setback shown to one decimal place",
    roundingRule: "Fabrication mark rounds to the nearest millimetre",
    source: {
      id: "site-fabrication-segmented-bend-v2",
      classification: "exam-convention",
      jurisdiction: "Sparky training convention — not jurisdiction-specific",
      documentIdentifier: "Sparky segmented containment-bend convention",
      edition: "2",
      amendment: "No amendment recorded",
      effectiveDate: "2026-07-31",
      recordedOn: "2026-07-31",
      locator: "setback = tan((total angle / cuts) / 2) * width",
      sectionOrTable: "Equal-segment setback formula",
      needsLicensedConfirmation: false,
      needsEditorialConfirmation: false,
      limitations:
        "The total bend angle is split equally between cuts; verify the method on scrap material.",
    },
  }),
  defineCalculator({
    id: "power",
    algorithmVersion: 1,
    units: ["kW", "A", "V"],
    precision: "Displayed to at most two decimal places",
    roundingRule: "No design margin or protective-device rounding is applied",
    source: {
      id: "ac-power-relations-v1",
      classification: "guidance",
      jurisdiction: "Not jurisdiction-specific",
      documentIdentifier: "AC active-power engineering relation",
      edition: "Stable mathematical relation",
      amendment: PROVENANCE_NOT_APPLICABLE,
      effectiveDate: PROVENANCE_NOT_APPLICABLE,
      recordedOn: "2026-08-01",
      locator: "P = VIpf; three-phase P = sqrt(3)VIpf",
      sectionOrTable: "Single- and three-phase active-power formulae",
      needsLicensedConfirmation: false,
      needsEditorialConfirmation: false,
      limitations:
        "Assumes a balanced three-phase load and the entered power factor.",
    },
  }),
  defineCalculator({
    id: "voltage-drop",
    algorithmVersion: 2,
    units: ["V", "%", "mV/A/m"],
    precision: "Displayed to at most two decimal places",
    roundingRule: "No compliance margin is applied",
    source: {
      id: "bs7671-appendix-4-voltage-drop",
      classification: "standard",
      jurisdiction: "United Kingdom",
      documentIdentifier: "BS 7671",
      edition: "2018",
      amendment: "Amendment 4:2026",
      effectiveDate: "2026-04-15",
      recordedOn: "2026-08-01",
      locator: "Appendix 4 voltage-drop method",
      sectionOrTable: "Appendix 4",
      sourceUrl:
        "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/ensure-you-are-up-to-date-with-bs-7671/",
      needsLicensedConfirmation: true,
      needsEditorialConfirmation: false,
      limitations:
        "Uses a simplified copper resistivity model at 70 C; verify licensed tabulated values and correction factors. Amendment 4 could be used from 15 April 2026; the preceding edition remains valid during the transition until 15 October 2026.",
    },
  }),
  defineCalculator({
    id: "breaker-sizing",
    algorithmVersion: 1,
    units: ["A", "kW", "V"],
    precision: "Design current shown to at most two decimal places",
    roundingRule: "Selects the next value in the app's standard-rating list",
    source: {
      id: "sparky-protective-device-selection-v1",
      classification: "guidance",
      jurisdiction: "Unconfirmed — the training profile does not establish jurisdiction",
      documentIdentifier: "Sparky preliminary protective-device selection aid",
      edition: "1",
      amendment: "No amendment recorded",
      effectiveDate: "2026-08-01",
      recordedOn: "2026-08-01",
      locator: "Standard ratings 6 A through 100 A",
      sectionOrTable: "App-defined standard-rating list",
      needsLicensedConfirmation: false,
      needsEditorialConfirmation: true,
      limitations:
        "Not a circuit design: cable capacity, fault current, disconnection time and device characteristics remain required.",
    },
  }),
  defineCalculator({
    id: "conduit-fill",
    algorithmVersion: 1,
    units: ["mm", "%"],
    precision: "Displayed to at most two decimal places",
    roundingRule: "No installation-factor rounding is applied",
    source: {
      id: "circular-area-fill-v1",
      classification: "guidance",
      jurisdiction: "Not jurisdiction-specific",
      documentIdentifier: "Circular area ratio",
      edition: "Stable mathematical relation",
      amendment: PROVENANCE_NOT_APPLICABLE,
      effectiveDate: PROVENANCE_NOT_APPLICABLE,
      recordedOn: "2026-08-01",
      locator: "fill = cable count * cable area / conduit area",
      sectionOrTable: "Circular-area formula",
      needsLicensedConfirmation: false,
      needsEditorialConfirmation: false,
      limitations:
        "A geometric check only; use the applicable wiring-system factor or manufacturer's guidance.",
    },
  }),
  defineCalculator({
    id: "structural-limits",
    algorithmVersion: 1,
    units: ["mm"],
    precision: "Displayed to at most two decimal places",
    roundingRule: "No site rounding is applied",
    source: {
      id: "approved-document-a-chases-notches",
      classification: "guidance",
      jurisdiction: "England",
      documentIdentifier: "Approved Document A",
      edition: "2004 edition",
      amendment: "2004, 2010 and April 2013 amendments",
      effectiveDate: PROVENANCE_UNCONFIRMED_EFFECTIVE_DATE,
      recordedOn: "2026-08-01",
      locator: "Paragraph 2C30, chases (page 29)",
      sectionOrTable: "Paragraph 2C30",
      sourceUrl:
        "https://www.gov.uk/government/publications/structure-approved-document-a",
      needsLicensedConfirmation: false,
      needsEditorialConfirmation: true,
      limitations:
        "Covers only the wall-chase outputs. GOV.UK records the England publication as the 2004 edition incorporating 2004, 2010 and 2013 amendments, published 1 September 2013. The exact legal or transitional effective date was not established from the current publication page, so it remains explicitly unconfirmed.",
    },
    additionalSources: [
      {
        id: "sparky-joist-notch-convention-v1",
        classification: "exam-convention",
        jurisdiction:
          "Unconfirmed — the repository does not establish a jurisdiction for this convention",
        documentIdentifier: "Sparky joist-notch training convention",
        edition: "1",
        amendment: "No amendment recorded",
        effectiveDate: PROVENANCE_UNCONFIRMED_EFFECTIVE_DATE,
        recordedOn: "2026-08-01",
        locator: "notch depth = joist depth × 0.125",
        sectionOrTable: "Joist-notch depth output",
        needsLicensedConfirmation: false,
        needsEditorialConfirmation: true,
        limitations:
          "No authoritative public-law, standard or guidance locator for the one-eighth joist-depth rule was confirmed in this audit. Treat this output as an exam/site convention and check the actual joist type, notch position, load path and current building-control guidance before use.",
      },
    ],
  }),
] as const satisfies readonly CalculatorDefinition[];
