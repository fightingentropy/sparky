import type { ExamQuestionCorrection } from "./types";

const ISOLATION_PROMPT =
  "Which of the following is not a suitable means of isolating a circuit?";
const BURN_PROMPT =
  "A workmate burns their hand on a piece of very hot metal. What should you do first?";
const BURN_CORRECTED_PROMPT =
  "Once the casualty is away from the hot metal and there is no immediate life-threatening danger, what should you do first for the hand burn?";
const HELMET_PROMPT =
  "Which one of the following must apply to any hard hat provided?";
const HELMET_CORRECTED_PROMPT =
  "Which listed requirement must apply to a safety helmet supplied as PPE for work in Great Britain?";
const MANUAL_HANDLING_PROMPT =
  "What is the recommended limit for a compact load that can be safely carried by a fit, male worker?";
const MANUAL_HANDLING_CORRECTED_PROMPT =
  "In HSE's simple lifting-and-lowering risk filter, what guideline figure applies for a man handling an easily grasped load close to the body at about knuckle height?";
const PENALTY_PROMPT =
  "What is the MAXIMUM penalty that a Higher Court, can currently impose for a breach of the Health and Safety at Work Act?";
const PENALTY_CORRECTED_PROMPT =
  "For relevant Health and Safety at Work etc. Act offences tried on indictment, which listed maximum penalties can a Crown Court impose on an individual?";
const PROHIBITION_PROMPT = "A Prohibition Notice means:";
const PROHIBITION_CORRECTED_PROMPT =
  "What does a prohibition notice that takes immediate effect require?";
const CONFINED_LIGHTING_PROMPT =
  "What is the recommended maximum voltage for portable hand lamps when working in confined or damp locations?";
const CONFINED_LIGHTING_CORRECTED_PROMPT =
  "Which listed approach is safest when portable lighting is needed in a confined or damp location?";
const ELECTRICAL_FIRE_PROMPT =
  "Which types of fire extinguishers should be used on electrical fires?";

const ISOLATION_EXPLANATION =
  "Tape does not secure an isolating device against inadvertent or unauthorised operation. HSE construction guidance explicitly contrasts tape over a circuit-breaker with a proper lock-off device, personal lock and safety notice.";
const BURN_EXPLANATION =
  "Current NHS burns guidance is to stop the burning process and cool the affected area with cool running water for at least 20 minutes. Ice, very cold water, creams and grease can worsen injury or interfere with assessment.";
const HELMET_EXPLANATION =
  "A helmet's suitability is not established by a generic age limit. PPE placed on the Great Britain market must meet the applicable essential safety requirements and carry an accepted conformity marking; current law recognises both CE and UKCA routes, so CE-only wording was incomplete.";
const MANUAL_HANDLING_EXPLANATION =
  "The HSE chart uses 25 kg in this limited posture and handling zone to screen for low-risk tasks. It is not a safe limit and does not remove the need to consider frequency, twisting, travel, grip, individual capability and other adverse factors.";
const PENALTY_EXPLANATION =
  "For relevant offences tried on indictment, the available maximum is an unlimited fine and, for an individual, imprisonment up to two years, or both. The original term 'Higher Court' was imprecise and not every offence or defendant attracts identical sentencing powers.";
const PROHIBITION_EXPLANATION =
  "An immediate prohibition notice stops the specified activity at once because an imminent risk of serious personal injury exists. The correction distinguishes this from a deferred prohibition notice, which takes effect at the time stated on it.";
const CONFINED_LIGHTING_EXPLANATION =
  "The equipment must follow the confined-space risk assessment rather than a universal voltage shortcut. HSE identifies extra-low-voltage equipment, typically below 25 V, as an electric-shock precaution in highly conductive confined spaces; where a flammable atmosphere may occur, suitably explosion-protected lighting is also required because low voltage alone does not control ignition risk.";
const ELECTRICAL_FIRE_EXPLANATION =
  "Carbon dioxide and dry powder are non-conductive extinguishing media, so they can be used where live electrical equipment is involved. CO2 leaves no residue; dry powder leaves substantial residue that can contaminate and damage electrical equipment, so power should be isolated and CO2 is normally the cleaner choice where it is suitable for the fire.";

export const ecsHealthSafetyCorrections = [
  ...[["quiz-29681", 27] as const, ["quiz-29678", 29] as const].map(
    ([variantId, questionNumber]) =>
      ({
        examId: "ecs-health-safety",
        variantId,
        questionNumber,
        promptSuffix: ELECTRICAL_FIRE_PROMPT,
        explanation: ELECTRICAL_FIRE_EXPLANATION,
      }) satisfies ExamQuestionCorrection,
  ),
  ...[
    ["quiz-29692", 4] as const,
    ["quiz-29686", 5] as const,
    ["quiz-29684", 5] as const,
    ["quiz-29678", 5] as const,
  ].map(
    ([variantId, questionNumber]) =>
      ({
        examId: "ecs-health-safety",
        variantId,
        questionNumber,
        promptSuffix: ISOLATION_PROMPT,
        options: {
          C: "Removing a fuse and securing the distribution board against access",
          D: "Putting insulating tape over the circuit breaker instead of applying a secure lock-off device",
        },
        answer: "D",
        explanation: ISOLATION_EXPLANATION,
      }) satisfies ExamQuestionCorrection,
  ),
  ...[
    ["quiz-29696", 11] as const,
    ["quiz-29687", 25] as const,
    ["quiz-29686", 24] as const,
    ["quiz-29680", 23] as const,
    ["quiz-29676", 25] as const,
  ].map(
    ([variantId, questionNumber]) =>
      ({
        examId: "ecs-health-safety",
        variantId,
        questionNumber,
        promptSuffix: BURN_PROMPT,
        correctedPromptSuffix: BURN_CORRECTED_PROMPT,
        options: {
          B: "Put the hand in ice-cold water",
          C: "Cool the burn under cool running water for at least 20 minutes while keeping the casualty warm",
        },
        answer: "C",
        explanation: BURN_EXPLANATION,
      }) satisfies ExamQuestionCorrection,
  ),
  ...[
    ["quiz-29698", 4] as const,
    ["quiz-29684", 35] as const,
    ["quiz-29680", 33] as const,
    ["quiz-29679", 34] as const,
  ].map(
    ([variantId, questionNumber]) =>
      ({
        examId: "ecs-health-safety",
        variantId,
        questionNumber,
        promptSuffix: HELMET_PROMPT,
        correctedPromptSuffix: HELMET_CORRECTED_PROMPT,
        options: {
          A: "It is less than 1 year old",
          B: "It must meet the applicable PPE product-safety requirements and bear a recognised conformity marking such as CE or UKCA",
        },
        answer: "B",
        explanation: HELMET_EXPLANATION,
      }) satisfies ExamQuestionCorrection,
  ),
  ...[["quiz-29700", 17] as const, ["quiz-29684", 43] as const].map(
    ([variantId, questionNumber]) =>
      ({
        examId: "ecs-health-safety",
        variantId,
        questionNumber,
        promptSuffix: MANUAL_HANDLING_PROMPT,
        correctedPromptSuffix: MANUAL_HANDLING_CORRECTED_PROMPT,
        options: {
          A: "25 kg, as a risk-filter value rather than a guaranteed safe limit",
          B: "20 kg",
        },
        answer: "A",
        explanation: MANUAL_HANDLING_EXPLANATION,
      }) satisfies ExamQuestionCorrection,
  ),
  {
    examId: "ecs-health-safety",
    variantId: "quiz-29701",
    questionNumber: 13,
    promptSuffix: PENALTY_PROMPT,
    correctedPromptSuffix: PENALTY_CORRECTED_PROMPT,
    options: {
      A: "A £1,000 fine and six months' imprisonment",
      B: "An unlimited fine and up to two years' imprisonment",
    },
    answer: "B",
    explanation: PENALTY_EXPLANATION,
  },
  ...[["quiz-29701", 27] as const, ["quiz-29686", 48] as const].map(
    ([variantId, questionNumber]) =>
      ({
        examId: "ecs-health-safety",
        variantId,
        questionNumber,
        promptSuffix: PROHIBITION_PROMPT,
        correctedPromptSuffix: PROHIBITION_CORRECTED_PROMPT,
        options: {
          A: "Work may continue until the current task is finished",
          B: "The activity specified in the notice must stop immediately and cannot resume until the serious-risk matters have been remedied",
        },
        answer: "B",
        explanation: PROHIBITION_EXPLANATION,
      }) satisfies ExamQuestionCorrection,
  ),
  ...[["quiz-29687", 45] as const, ["quiz-29681", 46] as const].map(
    ([variantId, questionNumber]) =>
      ({
        examId: "ecs-health-safety",
        variantId,
        questionNumber,
        promptSuffix: PENALTY_PROMPT,
        correctedPromptSuffix: PENALTY_CORRECTED_PROMPT,
        options: {
          B: "An unlimited fine and up to two years' imprisonment",
          D: "An unlimited fine and six months' imprisonment",
        },
        answer: "B",
        explanation: PENALTY_EXPLANATION,
      }) satisfies ExamQuestionCorrection,
  ),
  ...[
    ["quiz-29694", 7] as const,
    ["quiz-29685", 14] as const,
    ["quiz-29680", 14] as const,
  ].map(
    ([variantId, questionNumber]) =>
      ({
        examId: "ecs-health-safety",
        variantId,
        questionNumber,
        promptSuffix: CONFINED_LIGHTING_PROMPT,
        correctedPromptSuffix: CONFINED_LIGHTING_CORRECTED_PROMPT,
        options: {
          D: "Select lighting from the risk assessment; in a highly conductive or damp location use suitable battery or extra-low-voltage equipment, typically below 25 V, and use explosion-protected equipment where a flammable atmosphere may occur",
        },
        answer: "D",
        explanation: CONFINED_LIGHTING_EXPLANATION,
      }) satisfies ExamQuestionCorrection,
  ),
] as const satisfies readonly ExamQuestionCorrection[];
