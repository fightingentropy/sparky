import {
  CONTENT_PROVENANCE_PROFILE_VERSION,
  CONTENT_SCHEMA_VERSION,
  PROVENANCE_UNCONFIRMED_AMENDMENT,
  PROVENANCE_UNCONFIRMED_EDITION,
  PROVENANCE_UNCONFIRMED_EFFECTIVE_DATE,
  hashProvenanceRecord,
  type ContentSource,
  type SourceClassification,
} from "./contentSchema";
import type { Exam, ExamQuestion, ExamSolutionTable } from "./exams/types";

const RECORDED_ON = "2026-08-01";
const QUESTION_BANK_JURISDICTION =
  "United Kingdom — question-level jurisdiction is not recorded in the question bank";
const QUESTION_BANK_SECTION =
  "No source section or table recorded; use a linked focused citation where present";

export type ExamContentProfile = {
  sourceFile: string;
  sourceHash: `sha256:${string}`;
  documentIdentifier: string;
  contentVersion: string;
};

function examProfile(
  sourceFile: string,
  sourceHash: string,
  documentIdentifier: string,
  contentVersion: string,
): ExamContentProfile {
  return {
    sourceFile,
    sourceHash: `sha256:${sourceHash}`,
    documentIdentifier,
    contentVersion,
  };
}

/**
 * Central registry for repository question-bank provenance. Hashes cover the
 * exact local JSON source file, not any licensed standard mentioned by a
 * question. Derived profiles intentionally retain their source-pool hash and
 * carry a distinct contentVersion.
 */
export const EXAM_CONTENT_PROFILES = {
  "18th-edition": examProfile(
    "18th-edition.json",
    "30b7da01456faa734bdb7cb9745298f5eedbf6fa2689891d0d2e1585ec479f19",
    "Sparky Wiring Regulations (18th Edition) practice question bank",
    "repository-bank/18th-edition/source-30b7da01456f",
  ),
  "am2-installation-assessment": examProfile(
    "am2-installation-assessment.json",
    "ba49be9984bec005bf211cf062ee34f91c82c7a1ebe7772c6a0dc2dc93c4a0cc",
    "Sparky AM2 / AM2E installation assessment practice question bank",
    "repository-bank/am2-installation-assessment/source-ba49be9984be",
  ),
  "building-regulations": examProfile(
    "building-regulations.json",
    "c25c4ab91ef2c988bb091719004d22a5c0f74d185f113d33ee2ec6d74f3a20d7",
    "Sparky Building Regulations practice question bank",
    "repository-bank/building-regulations/source-c25c4ab91ef2",
  ),
  "ecs-health-safety": examProfile(
    "ecs-health-safety.json",
    "c1ca4663301e133542f4581a31f62cae463eac2e86ba1aeb8c568bab8aff3d02",
    "Sparky ECS Health and Safety practice question bank",
    "repository-bank/ecs-health-safety/source-c1ca4663301e",
  ),
  "fundamental-inspection-testing": examProfile(
    "initial-verification.json",
    "3eebab2c8ce31eb3c42d640e8f270d257e580714b689a8a87df93358b74cfe87",
    "Derived Fundamental Inspection and Testing practice profile",
    `derived-profile/fundamental-inspection-testing/content-schema-${CONTENT_SCHEMA_VERSION}`,
  ),
  "initial-verification": examProfile(
    "initial-verification.json",
    "3eebab2c8ce31eb3c42d640e8f270d257e580714b689a8a87df93358b74cfe87",
    "Derived Initial Verification practice profile",
    `derived-profile/initial-verification/content-schema-${CONTENT_SCHEMA_VERSION}`,
  ),
  "inspection-design-2396": examProfile(
    "inspection-design-2396.json",
    "b78ce33e82ae4e256f198291dcf061c8c8c152e196e12768ce567f7c19e642aa",
    "Sparky Inspection and Design 2396 practice question bank",
    "repository-bank/inspection-design-2396/source-b78ce33e82ae",
  ),
  "level-2-electrical-installation": examProfile(
    "level-2-electrical-installation.json",
    "9b195a41da35b8f5ba110b316ebc2b9bbc85548d387ed58bbff0534aa11156fa",
    "Sparky Level 2 Electrical Installation practice question bank",
    "repository-bank/level-2-electrical-installation/source-9b195a41da35",
  ),
  "level-3-electrical-installation": examProfile(
    "level-3-electrical-installation.json",
    "8b15beb954022c04dded3d125ffb0be5899f3fb512f26a4e12bf692c065b61b9",
    "Sparky Level 3 Electrical Installation practice question bank",
    "repository-bank/level-3-electrical-installation/source-8b15beb95402",
  ),
  "pat-testing": examProfile(
    "pat-testing.json",
    "1cee73b1b8aa551ad2b679805cb3f129a641ac57bbd6faef25badfd8c28f51a1",
    "Sparky PAT Testing practice question bank",
    "repository-bank/pat-testing/source-1cee73b1b8aa",
  ),
  "periodic-inspection": examProfile(
    "periodic-inspection.json",
    "2e536fa04589e47173cbd99b05c14eed392ec5c08533cb597c231c1e8cac190f",
    "Sparky Periodic Inspection and Testing practice question bank",
    "repository-bank/periodic-inspection/source-2e536fa04589",
  ),
  "special-locations": examProfile(
    "special-locations.json",
    "83ce5b6f0f05611d157fed9f8e4cfe7f97fb961668b16c36e22edd91ce5c5bd3",
    "Sparky Special Locations practice question bank",
    "repository-bank/special-locations/source-83ce5b6f0f05",
  ),
} as const satisfies Readonly<Record<string, ExamContentProfile>>;

type FocusedPublicationProfile = {
  classification: SourceClassification;
  jurisdiction: string;
  documentIdentifier: string;
  currentEdition: string;
  amendment: string;
  effectiveDate: string;
  transitionNote?: string;
};

const FOCUSED_PUBLICATION_PROFILES: Readonly<
  Record<string, FocusedPublicationProfile>
> = {
  "BS 7671": {
    classification: "standard",
    jurisdiction: "United Kingdom",
    documentIdentifier: "BS 7671",
    currentEdition: "2018",
    amendment: "Amendment 4:2026",
    effectiveDate: "2026-04-15",
    transitionNote:
      "Amendment 4 was published and could be used from 15 April 2026; BS 7671:2018+A2:2022+A3:2024 remains valid during the transition and is withdrawn on 15 October 2026.",
  },
  "IET Guidance Note 3": {
    classification: "guidance",
    jurisdiction: "United Kingdom",
    documentIdentifier: "IET Guidance Note 3: Inspection & Testing",
    currentEdition:
      "10th edition (current A4-aligned publication; source-question edition unconfirmed)",
    amendment: "Aligned to BS 7671:2018+A4:2026",
    effectiveDate: PROVENANCE_UNCONFIRMED_EFFECTIVE_DATE,
  },
  "IET On-Site Guide": {
    classification: "guidance",
    jurisdiction: "United Kingdom",
    documentIdentifier: "IET On-Site Guide",
    currentEdition:
      "9th edition (current A4-aligned publication; source-question edition unconfirmed)",
    amendment: "Aligned to BS 7671:2018+A4:2026",
    effectiveDate: PROVENANCE_UNCONFIRMED_EFFECTIVE_DATE,
  },
};

function sourceForExam(exam: Exam): ContentSource {
  const profile = EXAM_CONTENT_PROFILES[
    exam.id as keyof typeof EXAM_CONTENT_PROFILES
  ];
  if (!profile) {
    throw new Error(
      `Exam ${exam.id} has no central provenance profile; add it to EXAM_CONTENT_PROFILES before delivery`,
    );
  }

  return {
    id: `${exam.id}-question-bank`,
    classification: "exam-convention",
    jurisdiction: QUESTION_BANK_JURISDICTION,
    documentIdentifier: profile.documentIdentifier,
    edition: PROVENANCE_UNCONFIRMED_EDITION,
    amendment: PROVENANCE_UNCONFIRMED_AMENDMENT,
    effectiveDate: PROVENANCE_UNCONFIRMED_EFFECTIVE_DATE,
    recordedOn: RECORDED_ON,
    locator: `src/exam-data/${profile.sourceFile}`,
    sectionOrTable: QUESTION_BANK_SECTION,
    profileVersion: CONTENT_PROVENANCE_PROFILE_VERSION,
    contentVersion: profile.contentVersion,
    sourceHash: profile.sourceHash,
    sourceHashScope: "repository-file",
    needsLicensedConfirmation: false,
    needsEditorialConfirmation: true,
    limitations:
      "These practice questions are owned by Erlin Hoxha, as confirmed on 4 September 2026. They are classified as an exam convention. The applicable edition, amendment status, effective date and question-level jurisdiction still require editorial confirmation. They are not a substitute for current official law, standards or guidance; linked focused citations take precedence where present.",
  };
}

function slug(value: string): string {
  return value
    .toLocaleLowerCase("en-GB")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function isEditionRecorded(edition: string): boolean {
  return edition.trim() !== "" && !/(?:not recorded|unknown|unconfirmed)/i.test(edition);
}

function focusedSourceForTable(table: ExamSolutionTable): ContentSource {
  const source = table.source;
  const profile = FOCUSED_PUBLICATION_PROFILES[source.publication];
  if (!profile) {
    throw new Error(
      `Focused citation publication ${JSON.stringify(source.publication)} has no central provenance profile`,
    );
  }
  if (source.locator.trim() === "") {
    throw new Error(`Focused citation ${source.publication} has no locator`);
  }

  const editionWasRecorded = isEditionRecorded(source.edition);
  const edition = editionWasRecorded ? source.edition : profile.currentEdition;
  const needsEditorialConfirmation =
    source.status !== "verified" || !editionWasRecorded;
  const fingerprintParts = [
    source.publication,
    edition,
    profile.amendment,
    profile.effectiveDate,
    source.locator,
    source.url ?? "",
    source.licence,
    source.status,
    source.verifiedOn ?? "",
  ];
  const sourceHash = hashProvenanceRecord(fingerprintParts);
  const hashSuffix = sourceHash.slice(sourceHash.indexOf(":") + 1);

  return {
    id: `focused-${slug(source.publication)}-${hashSuffix}`,
    classification: profile.classification,
    jurisdiction: profile.jurisdiction,
    documentIdentifier: profile.documentIdentifier,
    edition,
    amendment: profile.amendment,
    effectiveDate: profile.effectiveDate,
    recordedOn: source.verifiedOn ?? RECORDED_ON,
    locator: source.locator,
    sectionOrTable: source.locator,
    profileVersion: CONTENT_PROVENANCE_PROFILE_VERSION,
    contentVersion: `focused-citation/${slug(source.publication)}/${slug(edition)}`,
    sourceHash,
    sourceHashScope: "citation-record",
    needsLicensedConfirmation: true,
    needsEditorialConfirmation,
    sourceUrl: source.url,
    limitations: [
      source.licence,
      "This record hashes the local citation metadata, not the licensed publication.",
      needsEditorialConfirmation
        ? "The keyed answer and locator require checking against the applicable licensed edition."
        : "The focused locator was recorded as verified.",
      profile.transitionNote,
    ]
      .filter((part): part is string => Boolean(part))
      .join(" "),
  };
}

function unique(values: readonly string[]): string[] {
  return [...new Set(values)];
}

function focusedSourcesForQuestion(question: ExamQuestion): ContentSource[] {
  const sources = (question.solutionTables ?? []).map(focusedSourceForTable);
  return [
    ...new Map(sources.map((source) => [source.id, source] as const)).values(),
  ];
}

/**
 * Attach explicit provenance to an exam and every delivered question. The
 * owner-authored question bank supplies the base record. Where a question already carries
 * a focused solution-table citation, the question also links to a more-specific
 * central source record without copying or inventing licensed text/locators.
 */
export function applyExamContentSource(exam: Exam): Exam {
  const bankSource = sourceForExam(exam);
  const inheritedSources = exam.contentSources ?? [];
  const inheritedSourceIds = new Set(inheritedSources.map((source) => source.id));
  const focusedSources = new Map<string, ContentSource>();

  const sections = exam.sections.map((section) => ({
    ...section,
    variants: section.variants.map((variant) => ({
      ...variant,
      questions: variant.questions.map((question) => {
        const questionFocusedSources = focusedSourcesForQuestion(question);
        for (const source of questionFocusedSources) {
          focusedSources.set(source.id, source);
        }

        const retainedSourceIds = (question.sourceIds ?? []).filter((id) =>
          inheritedSourceIds.has(id),
        );
        return {
          ...question,
          sourceIds: unique([
            bankSource.id,
            ...retainedSourceIds,
            ...questionFocusedSources.map((source) => source.id),
          ]),
        };
      }),
    })),
  }));

  const contentSources = [
    bankSource,
    ...inheritedSources.filter((source) => source.id !== bankSource.id),
    ...focusedSources.values(),
  ];

  return {
    ...exam,
    contentSources: [
      ...new Map(contentSources.map((source) => [source.id, source] as const)).values(),
    ],
    sections,
  };
}
