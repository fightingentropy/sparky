import type { Exam, ExamQuestion } from "./exams/types";
import { PRIMARY_EXAM_TITLES } from "./examTaxonomy";

type SourceQuestion = readonly [variantId: string, questionNumber: number];

type InitialVerificationBlueprint = {
  safeIsolation: readonly SourceQuestion[];
  initialVerificationRequirements: readonly SourceQuestion[];
  initialInspection: readonly SourceQuestion[];
  safeTestingAndCommissioning: readonly SourceQuestion[];
  preEnergisedTests: readonly SourceQuestion[];
  energisedTests: readonly SourceQuestion[];
  certificationAndDocumentation: readonly SourceQuestion[];
  practicalTestingKnowledge: readonly SourceQuestion[];
};

/**
 * The published assessment blueprint gives percentage coverage for a
 * 55-question paper. These counts are the closest whole-question allocation
 * using largest remainders: 13%, 5%, 14%, 13%, 20%, 24%, 9% and 2%.
 */
export const INITIAL_VERIFICATION_BLUEPRINT_COUNTS = {
  safeIsolation: 7,
  initialVerificationRequirements: 3,
  initialInspection: 8,
  safeTestingAndCommissioning: 7,
  preEnergisedTests: 11,
  energisedTests: 13,
  certificationAndDocumentation: 5,
  practicalTestingKnowledge: 1
} as const;

const INITIAL_VERIFICATION_MOCK_1: InitialVerificationBlueprint = {
  safeIsolation: [
    ["quiz-29745", 5],
    ["quiz-29746", 20],
    ["quiz-29746", 24],
    ["quiz-29746", 29],
    ["quiz-29746", 30],
    ["quiz-29746", 32],
    ["quiz-29746", 35]
  ],
  initialVerificationRequirements: [
    ["quiz-29745", 1],
    ["quiz-29750", 3],
    ["quiz-29750", 7]
  ],
  initialInspection: [
    ["quiz-29745", 7],
    ["quiz-29745", 9],
    ["quiz-29745", 10],
    ["quiz-29745", 11],
    ["quiz-29745", 13],
    ["quiz-29751", 12],
    ["quiz-29750", 40],
    ["quiz-29750", 66]
  ],
  safeTestingAndCommissioning: [
    ["quiz-29745", 14],
    ["quiz-29746", 6],
    ["quiz-29746", 25],
    ["quiz-29747", 16],
    ["quiz-29750", 38],
    ["quiz-29751", 24],
    ["quiz-29751", 25]
  ],
  preEnergisedTests: [
    ["quiz-29745", 17],
    ["quiz-29752", 9],
    ["quiz-29745", 20],
    ["quiz-29745", 21],
    ["quiz-29745", 27],
    ["quiz-29746", 17],
    ["quiz-29746", 26],
    ["quiz-29747", 6],
    ["quiz-29747", 31],
    ["quiz-29752", 15],
    ["quiz-29752", 21]
  ],
  energisedTests: [
    ["quiz-29745", 6],
    ["quiz-29745", 32],
    ["quiz-29745", 34],
    ["quiz-29745", 35],
    ["quiz-29745", 37],
    ["quiz-29745", 38],
    ["quiz-29745", 40],
    ["quiz-29747", 36],
    ["quiz-29750", 43],
    ["quiz-29750", 48],
    ["quiz-29751", 4],
    ["quiz-29751", 21],
    ["quiz-29752", 27]
  ],
  certificationAndDocumentation: [
    ["quiz-29750", 1],
    ["quiz-29751", 27],
    ["quiz-29751", 28],
    ["quiz-29751", 29],
    ["quiz-29752", 30]
  ],
  practicalTestingKnowledge: [["quiz-29751", 15]]
};

/**
 * Mock 2 follows the same blueprint but targets Guidance Note 3 material the
 * first mock and the homework paper do not reach: RCD types and test limits,
 * maximum Zs for RCDs, stakeless electrode testing, insulation resistance above
 * 500 V, overvoltage categories, AFDDs, cable depth and certificate selection.
 * Its new questions live in the "initial-verification-gn3-additions" source
 * variant; the rest come from pool questions no other paper serves.
 */
const INITIAL_VERIFICATION_MOCK_2: InitialVerificationBlueprint = {
  safeIsolation: [
    ["initial-verification-gn3-additions", 1],
    ["initial-verification-gn3-additions", 2],
    ["initial-verification-gn3-additions", 3],
    ["initial-verification-gn3-additions", 4],
    ["quiz-29748", 8],
    ["initial-verification-gn3-additions", 5],
    ["initial-verification-gn3-additions", 6]
  ],
  initialVerificationRequirements: [
    ["initial-verification-gn3-additions", 7],
    ["initial-verification-gn3-additions", 8],
    ["initial-verification-gn3-additions", 9]
  ],
  initialInspection: [
    ["initial-verification-gn3-additions", 10],
    ["initial-verification-gn3-additions", 11],
    ["initial-verification-gn3-additions", 12],
    ["initial-verification-gn3-additions", 13],
    ["initial-verification-gn3-additions", 14],
    ["initial-verification-gn3-additions", 15],
    ["initial-verification-gn3-additions", 16],
    ["quiz-29750", 9]
  ],
  safeTestingAndCommissioning: [
    ["quiz-29752", 11],
    ["initial-verification-gn3-additions", 17],
    ["initial-verification-gn3-additions", 18],
    ["initial-verification-gn3-additions", 19],
    ["initial-verification-gn3-additions", 20],
    ["initial-verification-gn3-additions", 21],
    ["initial-verification-gn3-additions", 22]
  ],
  preEnergisedTests: [
    ["initial-verification-gn3-additions", 23],
    ["initial-verification-gn3-additions", 24],
    ["initial-verification-gn3-additions", 25],
    ["initial-verification-gn3-additions", 26],
    ["initial-verification-gn3-additions", 27],
    ["initial-verification-gn3-additions", 28],
    ["quiz-29746", 28],
    ["initial-verification-gn3-additions", 29],
    ["initial-verification-gn3-additions", 30],
    ["initial-verification-gn3-additions", 31],
    ["quiz-29750", 80]
  ],
  energisedTests: [
    ["initial-verification-gn3-additions", 32],
    ["initial-verification-gn3-additions", 33],
    ["initial-verification-gn3-additions", 34],
    ["initial-verification-gn3-additions", 35],
    ["quiz-29752", 25],
    ["initial-verification-gn3-additions", 36],
    ["initial-verification-gn3-additions", 37],
    ["initial-verification-gn3-additions", 38],
    ["initial-verification-gn3-additions", 39],
    ["initial-verification-gn3-additions", 40],
    ["initial-verification-gn3-additions", 41],
    ["initial-verification-gn3-additions", 42],
    ["initial-verification-gn3-additions", 43]
  ],
  certificationAndDocumentation: [
    ["quiz-29746", 19],
    ["initial-verification-gn3-additions", 44],
    ["initial-verification-gn3-additions", 45],
    ["initial-verification-gn3-additions", 46],
    ["initial-verification-gn3-additions", 47]
  ],
  practicalTestingKnowledge: [["initial-verification-gn3-additions", 48]]
};

const INITIAL_VERIFICATION_HOMEWORK_VARIANT_ID =
  "initial-verification-homework";

function validateBlueprint(blueprint: InitialVerificationBlueprint): void {
  for (
    const [topic, expectedCount]
    of Object.entries(INITIAL_VERIFICATION_BLUEPRINT_COUNTS)
  ) {
    const questions = blueprint[topic as keyof InitialVerificationBlueprint];
    if (questions.length !== expectedCount) {
      throw new Error(
        `Initial Verification blueprint ${topic} expected ${expectedCount} questions, found ${questions.length}`
      );
    }
  }
}

function findQuestion(
  sourceExam: Exam,
  [variantId, questionNumber]: SourceQuestion
): ExamQuestion {
  for (const section of sourceExam.sections) {
    const variant = section.variants.find((candidate) => candidate.id === variantId);
    const question = variant?.questions.find(
      (candidate) => candidate.number === questionNumber
    );
    if (question) return question;
  }

  throw new Error(
    `Initial Verification source question ${variantId} Q${questionNumber} was not found`
  );
}

function findSourceVariantQuestions(
  sourceExam: Exam,
  variantId: string
): ExamQuestion[] {
  for (const section of sourceExam.sections) {
    const variant = section.variants.find((candidate) => candidate.id === variantId);
    if (variant) {
      return variant.questions.map((question, index) => ({
        ...question,
        number: index + 1
      }));
    }
  }

  throw new Error(`Initial Verification source variant ${variantId} was not found`);
}

function buildMockQuestions(
  sourceExam: Exam,
  blueprint: InitialVerificationBlueprint,
  label: string
): ExamQuestion[] {
  validateBlueprint(blueprint);
  const sourceQuestions = Object.values(blueprint).flat();
  const questions = sourceQuestions.map((reference, index) => ({
    ...findQuestion(sourceExam, reference),
    number: index + 1
  }));

  if (questions.length !== 55) {
    throw new Error(
      `Initial Verification ${label} expected 55 questions, found ${questions.length}`
    );
  }
  if (new Set(questions.map((question) => question.prompt)).size !== questions.length) {
    throw new Error(`Initial Verification ${label} contains duplicate questions`);
  }

  return questions;
}

export function buildInitialVerificationExam(sourceExam: Exam): Exam {
  if (sourceExam.id !== "initial-verification") {
    throw new Error(
      `Initial Verification must be built from its source pool, received ${sourceExam.id}`
    );
  }

  const questions = buildMockQuestions(
    sourceExam,
    INITIAL_VERIFICATION_MOCK_1,
    "mock 1"
  );
  const mockTwoQuestions = buildMockQuestions(
    sourceExam,
    INITIAL_VERIFICATION_MOCK_2,
    "mock 2"
  );

  const homeworkQuestions = findSourceVariantQuestions(
    sourceExam,
    INITIAL_VERIFICATION_HOMEWORK_VARIANT_ID
  );

  return {
    id: "initial-verification",
    title: PRIMARY_EXAM_TITLES["initial-verification"],
    subtitle: "Three Initial Verification practice papers",
    description:
      "Three Initial Verification practice papers covering safe isolation, inspection, pre-energised and energised testing, commissioning and certification for single- and three-phase installations.",
    format:
      "Three rotating papers: two 55-question focused mocks and one 43-question homework paper • 90 minutes • Open book (IET Guidance Note 3) • Pass at 60%+.",
    passPercent: 0.6,
    sections: [
      {
        id: "initial-verification",
        title: "Initial Verification",
        variants: [
          {
            id: "initial-verification-mock-1",
            questions
          },
          {
            id: INITIAL_VERIFICATION_HOMEWORK_VARIANT_ID,
            questions: homeworkQuestions
          },
          // Appended last so the first two papers keep their positions:
          // saved progress is stored by position on the web and on the server.
          {
            id: "initial-verification-mock-2",
            questions: mockTwoQuestions
          }
        ]
      }
    ],
    scoring: [
      { threshold: 0.8, label: "Strong exam readiness" },
      { threshold: 0.6, label: "Pass standard" },
      { threshold: 0, label: "Keep revising" }
    ],
    priorities: [
      "Follow safe isolation and the prescribed test sequence exactly.",
      "Know the purpose, method and expected result of dead and live tests.",
      "Complete the correct certificate and supporting schedules."
    ]
  };
}
