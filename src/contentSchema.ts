export const CONTENT_SCHEMA_VERSION = 2;

export const CONTENT_MANIFEST_SCHEMA_VERSION = 1;

export type SourceClassification =
  | "law"
  | "standard"
  | "guidance"
  | "exam-convention";

export type ContentSource = {
  id: string;
  classification: SourceClassification;
  documentIdentifier: string;
  edition: string;
  recordedOn: string;
  locator: string;
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
};

/**
 * Auditable metadata for every calculator exposed by the web app. These records
 * describe what the implementation is based on; they are intentionally not a
 * substitute for checking the cited publication for safety-critical work.
 */
export const CALCULATOR_DEFINITIONS = [
  {
    id: "containment-rod",
    algorithmVersion: 1,
    units: ["mm"],
    precision: "Displayed to at most two decimal places",
    roundingRule: "No fabrication rounding is applied",
    source: {
      id: "site-fabrication-containment-rod-v1",
      classification: "exam-convention",
      documentIdentifier: "Sparky site-fabrication convention",
      edition: "1",
      recordedOn: "2026-08-01",
      locator: "Rod cut length and Unistrut drop relationship",
      limitations: "A site aid; confirm allowances and fixing details for the actual installation."
    }
  },
  {
    id: "unistrut-length",
    algorithmVersion: 1,
    units: ["mm"],
    precision: "Input widths and allowances are preserved",
    roundingRule: "Final stock length rounds upward to the next 50 mm",
    source: {
      id: "site-fabrication-unistrut-v1",
      classification: "exam-convention",
      documentIdentifier: "Sparky site-fabrication convention",
      edition: "1",
      recordedOn: "2026-08-01",
      locator: "Containment widths, side allowances and gaps",
      limitations: "A fabrication estimate; verify support loading, spacing and manufacturer requirements."
    }
  },
  {
    id: "angle-drop",
    algorithmVersion: 1,
    units: ["mm", "cm", "m"],
    precision: "Displayed to at most two decimal places",
    roundingRule: "No fabrication rounding is applied",
    source: {
      id: "euclidean-right-triangle-v1",
      classification: "guidance",
      documentIdentifier: "Right-triangle trigonometric identities",
      edition: "Stable mathematical relation",
      recordedOn: "2026-08-01",
      locator: "hypotenuse = opposite / sin(angle); adjacent = hypotenuse * cos(angle)",
      limitations: "Assumes the entered angle is measured from the horizontal and dimensions share one unit."
    }
  },
  {
    id: "trunking-opposite-mark",
    algorithmVersion: 1,
    units: ["degrees", "mm"],
    precision: "Exact mark shown to one decimal place",
    roundingRule: "Fabrication mark rounds to the nearest millimetre",
    source: {
      id: "site-fabrication-trunking-v1",
      classification: "exam-convention",
      documentIdentifier: "Sparky containment-bend convention",
      edition: "1",
      recordedOn: "2026-08-01",
      locator: "opposite = tan(total bend angle / 2) * adjacent",
      limitations: "Check the bend method, material thickness and manufacturer's minimum radius."
    }
  },
  {
    id: "tray-bend-cut",
    algorithmVersion: 2,
    units: ["degrees", "mm"],
    precision: "Exact setback shown to one decimal place",
    roundingRule: "Fabrication mark rounds to the nearest millimetre",
    source: {
      id: "site-fabrication-segmented-bend-v2",
      classification: "exam-convention",
      documentIdentifier: "Sparky segmented containment-bend convention",
      edition: "2",
      recordedOn: "2026-07-31",
      locator: "setback = tan((total angle / cuts) / 2) * width",
      limitations: "The total bend angle is split equally between cuts; verify the method on scrap material."
    }
  },
  {
    id: "power",
    algorithmVersion: 1,
    units: ["kW", "A", "V"],
    precision: "Displayed to at most two decimal places",
    roundingRule: "No design margin or protective-device rounding is applied",
    source: {
      id: "ac-power-relations-v1",
      classification: "guidance",
      documentIdentifier: "AC active-power engineering relation",
      edition: "Stable mathematical relation",
      recordedOn: "2026-08-01",
      locator: "P = VIpf; three-phase P = sqrt(3)VIpf",
      limitations: "Assumes a balanced three-phase load and the entered power factor."
    }
  },
  {
    id: "voltage-drop",
    algorithmVersion: 2,
    units: ["V", "%", "mV/A/m"],
    precision: "Displayed to at most two decimal places",
    roundingRule: "No compliance margin is applied",
    source: {
      id: "bs7671-appendix-4-voltage-drop",
      classification: "standard",
      documentIdentifier: "BS 7671",
      edition: "2018+A4:2026",
      recordedOn: "2026-08-01",
      locator: "Appendix 4 voltage-drop method",
      sourceUrl: "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/",
      limitations: "Uses a simplified copper resistivity model at 70 C; verify tabulated values and correction factors."
    }
  },
  {
    id: "breaker-sizing",
    algorithmVersion: 1,
    units: ["A", "kW", "V"],
    precision: "Design current shown to at most two decimal places",
    roundingRule: "Selects the next value in the app's standard-rating list",
    source: {
      id: "sparky-protective-device-selection-v1",
      classification: "guidance",
      documentIdentifier: "Sparky preliminary protective-device selection aid",
      edition: "1",
      recordedOn: "2026-08-01",
      locator: "Standard ratings 6 A through 100 A",
      limitations: "Not a circuit design: cable capacity, fault current, disconnection time and device characteristics remain required."
    }
  },
  {
    id: "conduit-fill",
    algorithmVersion: 1,
    units: ["mm", "%"],
    precision: "Displayed to at most two decimal places",
    roundingRule: "No installation-factor rounding is applied",
    source: {
      id: "circular-area-fill-v1",
      classification: "guidance",
      documentIdentifier: "Circular area ratio",
      edition: "Stable mathematical relation",
      recordedOn: "2026-08-01",
      locator: "fill = cable count * cable area / conduit area",
      limitations: "A geometric check only; use the applicable wiring-system factor or manufacturer's guidance."
    }
  },
  {
    id: "structural-limits",
    algorithmVersion: 1,
    units: ["mm"],
    precision: "Displayed to at most two decimal places",
    roundingRule: "No site rounding is applied",
    source: {
      id: "approved-document-a-chases-notches",
      classification: "guidance",
      documentIdentifier: "Approved Document A",
      edition: "2004 edition incorporating 2004, 2010 and 2013 amendments",
      recordedOn: "2026-08-01",
      locator: "Paragraph 2C30, chases (page 29)",
      sourceUrl: "https://www.gov.uk/government/publications/structure-approved-document-a",
      limitations: "Confirm the current document, joist type, load path and any structural-engineer requirements."
    }
  }
] as const satisfies readonly CalculatorDefinition[];
