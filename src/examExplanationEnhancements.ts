import type { Exam } from "./exams/types";

export const CALCULATION_EXPLANATION_OVERRIDES = {
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
    "For the cross-connected ring test, R1 + R2 = (r1 + r2) / 4. Substituting the readings: R1 + R2 = (0.9 Ω + 0.9 Ω) / 4 = 1.8 Ω / 4 = 0.45 Ω."
} as const;

export function applyExamExplanationEnhancements(exam: Exam): Exam {
  let changed = false;
  const sections = exam.sections.map((section) => ({
    ...section,
    variants: section.variants.map((variant) => ({
      ...variant,
      questions: variant.questions.map((question) => {
        const explanation = CALCULATION_EXPLANATION_OVERRIDES[
          question.prompt as keyof typeof CALCULATION_EXPLANATION_OVERRIDES
        ];
        if (!explanation) return question;
        changed = true;
        return { ...question, explanation };
      })
    }))
  }));

  return changed ? { ...exam, sections } : exam;
}
