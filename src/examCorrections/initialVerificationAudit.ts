import type { ExamQuestionCorrection } from "./types";

// Corrections from a check of the served Initial Verification and Fundamental
// Inspection and Testing questions against IET Guidance Note 3 (9th edition,
// BS 7671:2018+A2:2022). Where the guidance note is silent (bathroom zones,
// water pipe electrodes) the fix follows BS 7671:2018+A2:2022.
export const initialVerificationAuditCorrections: readonly ExamQuestionCorrection[] = [
  {
    examId: "initial-verification",
    variantId: "quiz-29745",
    questionNumber: 1,
    promptSuffix:
      "What is the main purpose of an Initial Verification?",
    explanation:
      "Initial verification uses inspection and testing, during construction and on completion, to confirm that a new installation complies with BS 7671 before it is put into service. Some of its tests need the supply connected, so the aim is not that the installation stays dead but that it is proven safe before anyone relies on it.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29751",
    questionNumber: 12,
    promptSuffix:
      "Which one of the following does not need to be checked for compliance during the visual inspection of an installation:",
    explanation:
      "The distributor's cut-out and its fuse belong to the Distribution Network Operator and are sealed, so the inspector must not open them or interfere with them, and how the fuse is connected is not an item of the installation's inspection. The intake equipment is still looked at, by visual inspection only, and any visible inadequacy such as a cracked cut-out is reported so the distributor can be told. Single-pole devices in line conductors, fire barriers and cable routes in prescribed zones are all inspection items.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29745",
    questionNumber: 17,
    promptSuffix:
      "Which test method is used to verify that extraneous conductive parts of an installation are effectively connected to the MET?",
    explanation:
      "Protective bonding to an extraneous-conductive-part is checked with the long lead (wandering lead) method, test method 2 in Guidance Note 3. One lead of a low-resistance ohmmeter is taken to the MET through a long, nulled test lead and the other is applied to the bonded pipe or metalwork, so the reading is the resistance of the bonding path back to the MET.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29747",
    questionNumber: 31,
    promptSuffix:
      "When an insulation resistance test on a large installation returns unexpectedly low readings, your course of action would be:",
    explanation:
      "On a large installation many circuits are tested in parallel, so the overall insulation resistance can be low even when no single circuit is faulty. Guidance Note 3 says complex installations, or those giving a low overall value, may need to be subdivided into their parts for testing. Testing each circuit separately shows whether one circuit has a real insulation fault or the low figure is just the combined effect of many healthy circuits.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29745",
    questionNumber: 38,
    promptSuffix:
      "What value requires the application of a multiplier correction factor when confirming an earth fault loop impedance test result complies with the IET Wiring Regulations?",
    correctedPromptSuffix:
      "When the 0.8 rule of thumb is used to confirm that a measured earth fault loop impedance complies with BS 7671, which values is the 0.8 factor applied to?",
    explanation:
      "The maximum Zs values tabulated in Chapter 41 of BS 7671 are design figures for conductors at their maximum operating temperature, but a test is made on cool conductors. The rule of thumb therefore multiplies the tabulated value by 0.8, and the measured reading is compared directly with that reduced limit.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29751",
    questionNumber: 9,
    promptSuffix:
      "A visual inspection is necessary before testing to check whether:",
    options: { C: "The RCD operating time is within the required limit" },
    explanation:
      "A visual inspection before testing ensures that all equipment, including switchgear, can be safely reached, operated, and maintained. Adequate access is essential so that protective devices can be worked on without danger and so testing can be carried out properly. If access is restricted, it may create safety risks or make inspection and testing impossible, so this must be confirmed visually before any tests begin.",
  },
  {
    examId: "initial-verification",
    variantId: "initial-verification-homework",
    questionNumber: 21,
    promptSuffix:
      "Basic protection is given by",
    correctedPromptSuffix:
      "Which of the following provides basic protection only, giving no fault protection?",
    options: { A: "Double insulation" },
    explanation:
      "Basic insulation of live parts prevents contact with live parts in normal service, but it gives no protection if that insulation fails, so it is a provision for basic protection only. Double insulation adds supplementary insulation for fault protection, reinforced insulation provides both in a single layer, and SELV is a complete protective measure giving both.",
  },
  {
    examId: "initial-verification",
    variantId: "initial-verification-homework",
    questionNumber: 24,
    promptSuffix:
      "Which tests may be performed on an incoming 3 Phase 4 wire live supply?",
    options: { B: "Prospective Fault Current, External Loop Impedance, Insulation Resistance" },
    explanation:
      "Prospective fault current, external earth fault loop impedance (Ze) and phase rotation are all measured with the supply connected, so they can be carried out on a live incoming three-phase four-wire supply. Continuity and insulation resistance are dead tests that need the supply isolated, which rules out every other combination.",
  },
  {
    examId: "initial-verification",
    variantId: "initial-verification-homework",
    questionNumber: 42,
    promptSuffix:
      "An installer carries out an isolation on a lighting circuit. What should the installer do to keep other people safe?",
    correctedPromptSuffix:
      "An installer carries out an isolation on a lighting circuit. What should the installer do to stop anyone else switching the circuit back on while the work is carried out?",
    explanation:
      "Locking the point of isolation off with a padlock, with the key kept by the person doing the work, physically stops anyone re-energising the circuit. A warning notice should be added as well but on its own only warns, proving dead confirms the circuit is dead without securing it, and keeping people away from the work area does not stop someone at the distribution board switching it back on.",
  },
  {
    examId: "initial-verification",
    variantId: "fundamental-inspection-testing-homework",
    questionNumber: 13,
    promptSuffix:
      "During a periodic inspection and test on a three phase installation, a Prospective Fault Current of 3.6kA is measured between L1 and Earth, and 4.2kA between L1 and Neutral; the value of PFC to be recorded would be:",
    correctedPromptSuffix:
      "On a three phase installation, a Prospective Fault Current of 3.6kA is measured between L1 and Earth and 4.2kA between L1 and Neutral, using an instrument that cannot measure between line conductors. Using the rule of thumb in Guidance Note 3, the value of PFC to be recorded would be:",
    answer: "D",
    explanation:
      "The value recorded is the greater of the prospective short-circuit current and the prospective earth fault current, and on a three-phase supply the three-phase short-circuit current is always the largest. Where it cannot be measured directly, Guidance Note 3's rule of thumb doubles the single-phase value, so 2 × 4.2kA = 8.4kA is recorded.",
  },
  {
    examId: "initial-verification",
    variantId: "fundamental-inspection-testing-homework",
    questionNumber: 19,
    promptSuffix:
      "In Zone 1 of a room containing a bath or shower, a 230V AC wall mounted extractor fan is:",
    options: { A: "Allowed if it is suitable for zone 1, at least IPX4 and RCD protected" },
    explanation:
      "BS 7671 allows fixed, permanently connected ventilation equipment in zone 1 where it is suitable for that zone, so a 230 V fan can be used without being SELV. It must have a degree of protection of at least IPX4, and every low-voltage circuit in the location needs additional protection by a 30 mA RCD.",
  },
  {
    examId: "initial-verification",
    variantId: "fundamental-inspection-testing-homework",
    questionNumber: 30,
    promptSuffix:
      "Under what circumstances may a metallic water supply pipe be used as an earth electrode",
    options: { D: "If it is not the utility's supply pipe, it has been considered for that use and it is protected against removal" },
    answer: "D",
    explanation:
      "BS 7671 never allows the metallic pipe of a water utility supply to be used as an earth electrode. Other metallic water supply pipework may be used only where it has been considered for such a use and precautions are taken against its removal, for example during later alterations to the plumbing.",
  },
  {
    examId: "initial-verification",
    variantId: "quiz-29746",
    questionNumber: 15,
    promptSuffix:
      "On a typical 230 V circuit (IR test at 500 V DC), which insulation resistance value should be investigated as good practice?",
    correctedPromptSuffix:
      "On a new installation, a 230 V circuit tested at 500 V DC gives an insulation resistance above the 1 MΩ minimum. Below what value does Guidance Note 3 say such a reading should still be investigated?",
    options: { C: "20MΩ" },
    answer: "C",
    explanation:
      "A reading of 1 MΩ complies with BS 7671, but Guidance Note 3 says a new installation should not give a result that low and that any value below 20 MΩ on new work should be investigated, because sound new cables and accessories normally read far higher.",
  },
];
