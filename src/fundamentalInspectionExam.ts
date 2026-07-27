import type { Exam, ExamQuestion } from "./exams/types";
import { PRIMARY_EXAM_TITLES } from "./examTaxonomy";

type SourceQuestion = readonly [variantId: string, questionNumber: number];

type FundamentalBlueprint = {
  safeIsolation: readonly SourceQuestion[];
  initialVerificationRequirements: readonly SourceQuestion[];
  initialInspection: readonly SourceQuestion[];
  safeTestingAndCommissioning: readonly SourceQuestion[];
  preEnergisedTests: readonly SourceQuestion[];
  energisedTests: readonly SourceQuestion[];
  certificationAndDocumentation: readonly SourceQuestion[];
};

/**
 * Published Fundamental Inspection and Testing blueprint: 30 questions,
 * 60 minutes, open book with IET Guidance Note 3, and limited to the initial
 * verification of typical single-phase installations.
 */
export const FUNDAMENTAL_BLUEPRINT_COUNTS = {
  safeIsolation: 3,
  initialVerificationRequirements: 2,
  initialInspection: 3,
  safeTestingAndCommissioning: 4,
  preEnergisedTests: 7,
  energisedTests: 7,
  certificationAndDocumentation: 4
} as const;

const FUNDAMENTAL_MOCK_1: FundamentalBlueprint = {
  safeIsolation: [
    ["quiz-29746", 20],
    ["quiz-29746", 24],
    ["quiz-29746", 35]
  ],
  initialVerificationRequirements: [
    ["quiz-29751", 6],
    ["quiz-29752", 4]
  ],
  initialInspection: [
    ["quiz-29751", 3],
    ["quiz-29751", 8],
    ["quiz-29751", 9]
  ],
  safeTestingAndCommissioning: [
    ["quiz-29746", 6],
    ["quiz-29751", 14],
    ["quiz-29751", 24],
    ["quiz-29751", 25]
  ],
  preEnergisedTests: [
    ["quiz-29746", 7],
    ["quiz-29746", 8],
    ["quiz-29746", 9],
    ["quiz-29746", 13],
    ["quiz-29746", 17],
    ["quiz-29746", 26],
    ["quiz-29752", 15]
  ],
  energisedTests: [
    ["quiz-29747", 13],
    ["quiz-29747", 20],
    ["quiz-29747", 36],
    ["quiz-29752", 14],
    ["quiz-29752", 16],
    ["quiz-29751", 4],
    ["quiz-29752", 27]
  ],
  certificationAndDocumentation: [
    ["quiz-29751", 27],
    ["quiz-29751", 28],
    ["quiz-29751", 29],
    ["quiz-29751", 30]
  ]
};

const FUNDAMENTAL_HOMEWORK_VARIANT_ID =
  "fundamental-inspection-testing-homework";

function validateBlueprint(blueprint: FundamentalBlueprint): void {
  for (const [topic, expectedCount] of Object.entries(FUNDAMENTAL_BLUEPRINT_COUNTS)) {
    const questions = blueprint[topic as keyof FundamentalBlueprint];
    if (questions.length !== expectedCount) {
      throw new Error(
        `Fundamental blueprint ${topic} expected ${expectedCount} questions, found ${questions.length}`
      );
    }
  }
}

function findQuestion(
  initialVerificationExam: Exam,
  [variantId, questionNumber]: SourceQuestion
): ExamQuestion {
  for (const section of initialVerificationExam.sections) {
    const variant = section.variants.find((candidate) => candidate.id === variantId);
    const question = variant?.questions.find((candidate) => candidate.number === questionNumber);
    if (question) return question;
  }

  throw new Error(
    `Fundamental source question ${variantId} Q${questionNumber} was not found`
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

  throw new Error(`Fundamental source variant ${variantId} was not found`);
}

export function buildFundamentalInspectionExam(initialVerificationExam: Exam): Exam {
  if (initialVerificationExam.id !== "initial-verification") {
    throw new Error(
      `Fundamental exam must be built from initial-verification, received ${initialVerificationExam.id}`
    );
  }

  validateBlueprint(FUNDAMENTAL_MOCK_1);
  const sourceQuestions = Object.values(FUNDAMENTAL_MOCK_1).flat();
  const questions = sourceQuestions.map((reference, index) => ({
    ...findQuestion(initialVerificationExam, reference),
    number: index + 1
  }));

  if (new Set(questions.map((question) => question.prompt)).size !== questions.length) {
    throw new Error("Fundamental mock contains duplicate questions");
  }

  const homeworkQuestions = findSourceVariantQuestions(
    initialVerificationExam,
    FUNDAMENTAL_HOMEWORK_VARIANT_ID
  );

  return {
    id: "fundamental-inspection-testing",
    title: PRIMARY_EXAM_TITLES["fundamental-inspection-testing"],
    subtitle: "Two Fundamental Inspection and Testing practice papers",
    description:
      "Two Fundamental Inspection and Testing practice papers covering safe isolation, inspection, dead and live testing, commissioning, certification and core installation knowledge.",
    format:
      "Two rotating papers: one 30-question focused mock and one 40-question homework paper • 60 minutes • Open book (IET Guidance Note 3) • Pass at 60%+.",
    passPercent: 0.6,
    sections: [
      {
        id: "fundamental-inspection-testing",
        title: "Fundamental Inspection and Testing",
        variants: [
          {
            id: "fundamental-mock-1",
            questions
          },
          {
            id: FUNDAMENTAL_HOMEWORK_VARIANT_ID,
            questions: homeworkQuestions
          }
        ]
      }
    ],
    scoring: [
      { threshold: 0.8, label: "Strong exam readiness" },
      { threshold: 0.6, label: "Nominal pass standard" },
      { threshold: 0, label: "Keep revising" }
    ],
    priorities: [
      "Follow the safe-isolation sequence exactly.",
      "Know the order and purpose of pre-energised and energised tests.",
      "Choose the correct certificate and supporting schedules."
    ]
  };
}
