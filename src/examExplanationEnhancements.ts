import type { Exam, ExamChoice, ExamQuestion } from "./exams/types";

type ExamQuestionCorrection = {
  promptSuffix: string;
  correctedPromptSuffix?: string;
  options?: Partial<Record<ExamChoice, string>>;
  answer?: ExamChoice;
  explanation: string;
};

export const EXAM_QUESTION_CORRECTIONS: readonly ExamQuestionCorrection[] = [
  {
    promptSuffix: "What circumstance would require an Electrical Installation Condition Report to be issued?",
    correctedPromptSuffix:
      "What circumstance would most clearly call for an EICR on an existing flat when no current satisfactory report is available?",
    options: { B: "A new occupier is moving in" },
    explanation:
      "An EICR assesses whether an existing installation remains satisfactory for continued service. A change of occupier is a clear reason to obtain one when there is no current satisfactory report; new or remedial installation work is certified separately."
  },
  {
    promptSuffix: "Which non-statutory document directly relates to the process of inspection and testing?",
    correctedPromptSuffix:
      "Which non-statutory IET publication provides detailed guidance across the full inspection-and-testing process?",
    options: { B: "EAWR" },
    explanation:
      "IET Guidance Note 3 covers inspection, test methods, test sequencing, instruments and the interpretation of results. EAWR and ESQCR are legislation, while HSE GS38 focuses on the safe construction and use of test equipment."
  },
  {
    promptSuffix: "What document must the Inspector use to record the new lighting circuit reference method?",
    options: { B: "Schedule of Circuit Details" },
    answer: "B",
    explanation:
      "The reference method describes how the cable is installed and is recorded with the other circuit-design details on the Schedule of Circuit Details. The inspection schedule records visual checks, while the test-results schedule records measured values."
  },
  {
    promptSuffix: "What is the minimum IP rating required for the new lights?",
    correctedPromptSuffix:
      "Where cleaning water jets are not likely to be used, what is the minimum IP rating required for the new lights?",
    explanation:
      "At 2.4 m above the pool, the luminaire remains within the 2.5 m vertical extent of zone 1, where at least IPX4 is required. IPX5 is required instead where water jets are likely to be used for cleaning."
  },
  {
    promptSuffix:
      "Which test must be carried out before earth fault loop impedance to ensure the installation is safe to energise?",
    correctedPromptSuffix:
      "Which dead test must be completed before the installation is energised for earth fault loop impedance testing?",
    explanation:
      "Polarity is proved as a dead test before energisation so single-pole protective and switching devices are confirmed in the line conductor. Prospective fault current, RCD operating time and earth fault loop impedance are live tests."
  },
  {
    promptSuffix: "What action should be taken with regard to the additional socket-outlet circuits?",
    options: {
      A: "Both should be fully tested to establish their condition for continued service",
      B: "Both should be sampled to establish their condition for continued service",
      C: "One should be fully inspected to establish its condition for continued service",
      D: "One should be sampled to establish its condition for continued service"
    },
    explanation:
      "Neither added circuit has recorded test results, so neither has evidence on which sampling can be based. Inspect and carry out the relevant tests on both circuits, then record each circuit’s details and results on the EICR schedules."
  },
  {
    promptSuffix: "Which test can be carried out without the use of GS38 compliant test leads?",
    correctedPromptSuffix:
      "Which of these is carried out as a dead test with the installation safely isolated?",
    explanation:
      "Continuity of protective conductors is measured on an isolated installation using a low-resistance ohmmeter. Earth fault loop impedance, prospective fault current and an RCD operating-time test require the supply to be energised."
  },
  {
    promptSuffix:
      "Which test may be unnecessary on any existing ring-final circuits, for which previous test records are available?",
    correctedPromptSuffix:
      "Where reliable previous results and the agreed sampling plan justify an omission, which test may be unnecessary on an unchanged ring-final circuit?",
    explanation:
      "Ring-final continuity may be omitted only where reliable previous results, no relevant alterations and the agreed sampling strategy give the inspector enough evidence. The decision and any limitation must be recorded; old results do not automatically remove the need to test."
  },
  {
    promptSuffix: "What is the maximum percentage voltage drop allowed for this circuit?",
    correctedPromptSuffix:
      "What is the recommended maximum percentage voltage drop for this circuit?",
    explanation:
      "For an 'other use' circuit supplied from the public low-voltage network, Appendix 4 recommends a maximum voltage drop of 5%. The figure is informative design guidance rather than an automatic legal pass-or-fail limit."
  },
  {
    promptSuffix: "What is the most appropriate outcome based on the value of voltage drop?",
    correctedPromptSuffix:
      "If the inspector judges that improvement is advisable but finds no present or potential danger, which EICR classification expresses that judgement?",
    explanation:
      "C3 means improvement is recommended but the observation is not dangerous or potentially dangerous. C1 and C2 are reserved for danger or potential danger, while Lim records an agreed restriction on the inspection or testing."
  },
  {
    promptSuffix: "What instrument safety check must be made before carrying out this test?",
    correctedPromptSuffix:
      "Which published guidance sets the safety requirements for the probes and leads used for this live test?",
    options: {
      A: "BS 7671 Appendix 4",
      B: "HSE GS38",
      C: "IET Guidance Note 3",
      D: "BS EN 60898"
    },
    explanation:
      "HSE GS38 gives the safety guidance for electrical test equipment, probes and leads used on low-voltage systems. The other documents cover installation requirements, inspection-and-testing practice or circuit-breaker product requirements."
  },
  {
    promptSuffix: "What voltages are to be expected if the polarity is correct?",
    correctedPromptSuffix:
      "What voltages are normally expected if the polarity is correct?",
    options: { A: "L-N 230 V, L-E 230 V, N-E approximately 0 V" },
    explanation:
      "Correct polarity normally gives about 230 V from line to neutral and from line to earth. Neutral and earth are connected upstream, so N-E is normally close to 0 V, although a small voltage can appear under load."
  },
  {
    promptSuffix: "Why may the testing of circuit polarity be unnecessary?",
    correctedPromptSuffix:
      "If reliable previous polarity results are available, why may repeat testing at every circuit point be unnecessary?",
    options: { D: "No alterations have been made since those results" },
    explanation:
      "Reliable previous results plus confirmation that no relevant alterations have been made may justify sampling rather than repeating polarity at every point. Polarity at the origin and any changed work must still be established."
  },
  {
    promptSuffix: "What additional action must the inspector take regarding this observation?",
    correctedPromptSuffix: "What action should follow from this C2 observation?",
    options: {
      A: "Record the C2 observation and advise urgent remedial action",
      B: "Notify the insurer directly instead of the client",
      C: "Always isolate the installation and prevent re-energising",
      D: "Remove the portable generator without the client's authority"
    },
    explanation:
      "A C2 observation is potentially dangerous, so it is recorded on the EICR and urgent remedial action is advised to the person ordering the report. Immediate separate danger notification and forced isolation are associated with danger present, not every C2 observation."
  },
  {
    promptSuffix: "What condition can be detected during the insulation resistance test?",
    correctedPromptSuffix:
      "What kind of defect can an insulation-resistance test reveal on one of these new circuits?",
    options: {
      A: "A low-resistance path caused by damaged insulation",
      B: "An undersized protective device",
      C: "A loose trunking lid",
      D: "Incorrect circuit labelling"
    },
    explanation:
      "An insulation-resistance test can reveal an unintended leakage path caused by cut, crushed, contaminated or moisture-damaged insulation. Protective-device sizing, enclosure security and circuit labelling are established by design checks and inspection."
  },
  {
    promptSuffix: "What is the minimum IP rating for the bottom horizontal surface of the trunking?",
    correctedPromptSuffix:
      "What is the minimum IP rating for the readily accessible horizontal top surface of the trunking?",
    explanation:
      "A readily accessible horizontal top surface must prevent access with the 1 mm test probe, so it requires at least IP4X or IPXXD. IP2X or IPXXB is the general minimum for the other enclosure surfaces."
  },
  {
    promptSuffix:
      "What pattern of test results is expected at each socket-outlet when the line and cpc conductors are correctly cross-connected?",
    correctedPromptSuffix:
      "What pattern of test results is expected at each socket-outlet when the line and neutral conductors are correctly cross-connected?",
    explanation:
      "The line and neutral conductors have the same cross-sectional area and similar end-to-end resistance. When correctly cross-connected, their two parallel paths therefore give substantially the same reading at each socket-outlet."
  },
  {
    promptSuffix:
      "What column numbers would be completed on the Schedule of Test Results, detailing the results obtained during the ring-final circuit continuity test?",
    correctedPromptSuffix:
      "Which results from the ring-final circuit continuity test must be recorded on the applicable test schedule?",
    options: {
      A: "r1, rn, r2 and R1+R2",
      B: "Ze, prospective fault current and RCD time",
      C: "Insulation resistance only",
      D: "Design current and voltage drop only"
    },
    explanation:
      "The ring-final continuity procedure records the end-to-end resistances r1, rn and r2, plus the cross-connected R1+R2 result. Column numbers vary between form editions, so the measured quantities are the reliable thing to learn."
  },
  {
    promptSuffix:
      "The following results were obtained, as shown in Figure 1. What value is to be recorded as the earth electrode resistance?",
    correctedPromptSuffix:
      "The three readings were 179 Ω, 172 Ω and 168 Ω. What value is to be recorded as the earth electrode resistance?",
    explanation:
      "Use the representative mean of the three probe-position readings: (179 Ω + 172 Ω + 168 Ω) ÷ 3 = 173 Ω. The individual readings also vary by less than 5% from that mean, supporting a stable result."
  },
  {
    promptSuffix:
      "The following results were obtained, as shown in Figure 1. What is the maximum rating of RCD that can be used for fault protection on this installation?",
    correctedPromptSuffix:
      "The measured earth electrode resistance is 173 Ω. What is the maximum listed RCD rating that can be used for fault protection on this installation?",
    explanation:
      "For TT fault protection, RA × IΔn must not exceed 50 V. With RA = 173 Ω, 100 mA gives 17.3 V and complies; 300 mA gives 51.9 V, so the next larger listed rating already exceeds the limit."
  }
] as const;

export const EXAM_EXPLANATION_OVERRIDES = {
  "During the construction of an installation, insulation resistance tests have been carried out between live conductors and earth on the individual circuits and the L to E results are shown below. What is the expected value of insulation resistance L to E when the whole installation is tested?":
    "The four insulation resistances are parallel leakage paths, so use 1/Rtotal = 1/R1 + 1/R2 + 1/R3 + 1/R4. Substituting the readings: 1/Rtotal = 1/120 + 1/120 + 1/130 + 1/150 = 0.03103 MΩ⁻¹. Therefore Rtotal = 1 / 0.03103 = 32.23 MΩ, which rounds to 32.2 MΩ.",

  "What is the expected resistance of each of the loops tested in stage 1 as shown in GN3?":
    "Stage 1 measures each ring conductor end to end. For the 2.5 mm² line and neutral conductors, use 7.41 mΩ/m: r1 = rn = 7.41 mΩ/m × 75 m = 555.75 mΩ = 0.556 Ω. Rounded to the available answer, each loop should measure about 0.56 Ω.",

  "A radial socket outlet circuit is supplied by 2.5mm² cable and is 20m long. Given that the Ze of the installation is 0.43Ω and that the resistivity of the cable is 7.41mΩ/m at 20°C , what is the calculated Zs:":
    "Use Zs = Ze + (R1 + R2). The current travels 20 m out and 20 m back, so R1 + R2 = 7.41 mΩ/m × 40 m = 296.4 mΩ = 0.2964 Ω. Therefore Zs = 0.43 Ω + 0.2964 Ω = 0.7264 Ω, which rounds to 0.73 Ω.",

  "A 10 mm² main protective bonding conductor is 37.5 m in length. What is the expected measured resistance when testing the conductor?":
    "A 10 mm² copper conductor has a resistance of about 1.83 mΩ/m at 20 °C. Use R = resistance per metre × length: R = 1.83 mΩ/m × 37.5 m = 68.625 mΩ = 0.0686 Ω. Rounded to two decimal places, the expected reading is 0.07 Ω.",

  "Questions 17 to 23 relate to the following scenario. The continuity of a main protective bonding conductor to a gas installation pipe in a new primary school is to be tested. The 10 mm² conductor is 43 m long. The installation has been safely isolated for this test. What is the expected measured conductor resistance value?":
    "A 10 mm² copper conductor has a resistance of about 1.83 mΩ/m at 20 °C. Use R = resistance per metre × length: R = 1.83 mΩ/m × 43 m = 78.69 mΩ = 0.0787 Ω. Rounded to the available answers, the expected measured resistance is 0.08 Ω.",

  "Questions 26 to 29 relate to the following scenario Voltage drop of a single-phase distribution circuit supplying a power distribution board in a remote building is to be verified as part of the periodic inspection and testing within a workshop complex. The installation forms part of a public 400/230 V TN-S system. The circuit has a measured R1+Rn value of 0.15 Ω and an Ib of 60 A. The circuit protective device has an In of 80 A, see Figure 5. What is the maximum acceptable voltage drop for this distribution circuit if the highest circuit voltage drop on DB-3B is 5.0 V?":
    "The maximum voltage drop for a non-lighting circuit on a 230 V public supply is 5%. First find the total allowance: 230 V × 0.05 = 11.5 V. The final circuit already uses 5.0 V, so the distribution circuit may use 11.5 V − 5.0 V = 6.5 V.",

  "Questions 40 to 46 relate to the following scenario. Insulation resistance has been tested on five new lighting circuits in an existing large distribution warehouse. These circuits are supplied from a new single-phase, five-way DB. Switching for each circuit is by 230 V contactors. Connection to each light is made using a BS 1363 socket-outlet adjacent to the fitting. The supply and installation form a 400 V three-phase TN-C-S system. The following test results were recorded. What is the value of insulation resistance between Live and Earth for the new DB with all the lighting circuits connected?":
    "The five Live-Earth readings form parallel leakage paths. Use 1/Rtotal = 1/176 + 1/20 + 1/162 + 1/134 + 1/178 = 0.07494 MΩ⁻¹. Therefore Rtotal = 1 / 0.07494 = 13.34 MΩ, which rounds to the listed answer of 13 MΩ.",

  "Questions 50 to 57 relate to the following scenario. Continuity of a ring final circuit has been tested as part of an initial verification of a new primary school. All the socket-outlets are connected directly to the ring. The circuit loop length is 58 m long, wired in 4 mm² live and 1.5 mm² cpc flat profile cable. The circuit is protected by a 32 A BS EN 60898 Type B circuit breaker. What is the expected measured r1 value?":
    "For the 4 mm² line conductor, use 4.61 mΩ/m at 20 °C. The end-to-end ring reading is r1 = 4.61 mΩ/m × 58 m = 267.38 mΩ = 0.267 Ω. Rounded to two decimal places, r1 should be 0.27 Ω.",

  "Questions 50 to 57 relate to the following scenario. Continuity of a ring final circuit has been tested as part of an initial verification of a new primary school. All the socket-outlets are connected directly to the ring. The circuit loop length is 58 m long, wired in 4 mm² live and 1.5 mm² cpc flat profile cable. The circuit is protected by a 32 A BS EN 60898 Type B circuit breaker. What is the expected measured r2 value?":
    "For the 1.5 mm² cpc, use 12.1 mΩ/m at 20 °C. The end-to-end ring reading is r2 = 12.1 mΩ/m × 58 m = 701.8 mΩ = 0.7018 Ω. Rounded to two decimal places, r2 should be 0.70 Ω.",

  "Questions 50 to 57 relate to the following scenario. Continuity of a ring final circuit has been tested as part of an initial verification of a new primary school. All the socket-outlets are connected directly to the ring. The circuit loop length is 58 m long, wired in 4 mm² live and 1.5 mm² cpc flat profile cable. The circuit is protected by a 32 A BS EN 60898 Type B circuit breaker. What is the expected measured value at each socket-outlet when the line and neutral conductors are correctly cross-connected?":
    "The 4 mm² line and neutral loops have equal end-to-end readings, r1 = rn ≈ 0.267 Ω. With the conductors correctly cross-connected, the expected reading at each socket is (r1 + rn) / 4. Substituting the values: (0.267 Ω + 0.267 Ω) / 4 = 0.1335 Ω, which rounds to 0.13 Ω.",

  "The measured R1+R2 value for a radial cooker circuit, with a 6 mm² line conductor and a 2.5 mm² cpc, is 0.29 Ω. What is the length of this circuit?":
    "Use 3.08 mΩ/m for the 6 mm² line and 7.41 mΩ/m for the 2.5 mm² cpc. Their combined resistance is 3.08 + 7.41 = 10.49 mΩ/m = 0.01049 Ω/m. Rearranging R1 + R2 = resistance per metre × length gives length = 0.29 Ω / 0.01049 Ω/m = 27.65 m, which rounds to 28 m.",

  "Four circuits have insulation resistances of 40MΩ, 50MΩ, 100MΩ and 100MΩ. When tested together (insulation lump test) what would be the expected reading:":
    "The insulation resistances are parallel leakage paths, so 1/Rtotal = 1/40 + 1/50 + 1/100 + 1/100 = 0.065 MΩ⁻¹. Therefore Rtotal = 1 / 0.065 = 15.38 MΩ.",

  "A ring final circuit wired in pcv 2.5mm²/1.5mm². Resistances per metre are 7.41mΩ/m and 12.1mΩ/m respectively. What is the expected value of (R1 + R2). The circuit is 16.5 meters long:":
    "For a correctly cross-connected ring, R1 + R2 = (r1 + r2) / 4. First calculate the two end-to-end values together: (7.41 + 12.1) mΩ/m × 16.5 m = 321.9 mΩ. Then divide by four parallel paths: 321.9 mΩ / 4 = 80.5 mΩ = 0.0805 Ω, which rounds to 0.08 Ω.",

  "The insulation resistance of two circuits is of 40MΩ and 36MΩ respectively. When tested together what would be approximately the total insulation resistance:":
    "The two insulation resistances are in parallel, so Rtotal = (R1 × R2) / (R1 + R2). Substituting the readings: Rtotal = (40 MΩ × 36 MΩ) / (40 MΩ + 36 MΩ) = 1440 / 76 = 18.95 MΩ, which rounds to 19 MΩ.",

  "If each of the three circuits had been tested individually and gave readings of 80 MΩ, 60 MΩ and 30 MΩ respectively, what would be the expected overall insulation resistance:":
    "The three insulation resistances form parallel leakage paths, so 1/Rtotal = 1/80 + 1/60 + 1/30 = 0.0625 MΩ⁻¹. Therefore Rtotal = 1 / 0.0625 = 16 MΩ.",

  "When measuring the resistance of 100m of 2.5mm² conductor the most suitable range for the instrument would be:":
    "A 2.5 mm² copper conductor has a resistance of about 7.41 mΩ/m at 20 °C. Calculate the expected reading: R = 7.41 mΩ/m × 100 m = 741 mΩ = 0.741 Ω. That fits comfortably within the 0-2 Ω range, which also gives the best useful resolution.",

  "If the readings for (r1 + r2) recorded while testing the continuity of ring final circuit conductors is 0.9 Ω each, what will be the value of (R1 + R2):":
    "For the cross-connected ring test, R1 + R2 = (r1 + r2) / 4. Substituting the readings: R1 + R2 = (0.9 Ω + 0.9 Ω) / 4 = 1.8 Ω / 4 = 0.45 Ω.",

  "Questions 12 to 16 relate to the following scenario. The existing installation in a hotel is to be inspected and tested as a requirement of the local authority for a public entertainment licence application. Previous inspection and testing records exist but two additional socket-outlet circuits have previously been installed for which there are no test results available. What action should be taken with regard to the additional socket-outlet circuits?":
    "Neither added circuit has recorded test results, so neither has evidence on which sampling can be based. Inspect and carry out the relevant tests on both circuits, then record each circuit’s details and results on the EICR schedules."
} as const;

export function applyExamExplanationEnhancements(exam: Exam): Exam {
  let changed = false;
  const sections = exam.sections.map((section) => ({
    ...section,
    variants: section.variants.map((variant) => ({
      ...variant,
      questions: variant.questions.map((question) => {
        const correction = EXAM_QUESTION_CORRECTIONS.find((entry) =>
          question.prompt.endsWith(entry.promptSuffix)
        );
        const explanation = EXAM_EXPLANATION_OVERRIDES[
          question.prompt as keyof typeof EXAM_EXPLANATION_OVERRIDES
        ];
        if (!correction && !explanation) return question;

        changed = true;
        const prompt = correction?.correctedPromptSuffix
          ? `${question.prompt.slice(0, -correction.promptSuffix.length)}${correction.correctedPromptSuffix}`
          : question.prompt;
        const options = correction?.options
          ? { ...question.options, ...correction.options }
          : question.options;

        return {
          ...question,
          prompt,
          options,
          answer: correction?.answer ?? question.answer,
          explanation: correction?.explanation ?? explanation ?? question.explanation
        } satisfies ExamQuestion;
      })
    }))
  }));

  return changed ? { ...exam, sections } : exam;
}
