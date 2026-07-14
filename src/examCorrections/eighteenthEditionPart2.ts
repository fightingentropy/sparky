import type { ExamQuestionCorrection } from "./types";

function sharedDuplicateCorrections(
  variantId: "quiz-29720" | "quiz-29721",
): readonly ExamQuestionCorrection[] {
  return [
    {
      variantId,
      questionNumber: 7,
      promptSuffix:
        "Protection by obstacles or placing out of reach shall be restricted to",
      options: { D: "Skilled or instructed persons in a controlled location" },
      explanation:
        "Obstacles and placing out of reach only prevent unintentional contact, so they are restricted to installations controlled by skilled or instructed persons. They are not suitable where ordinary people can gain access.",
    },
    {
      variantId,
      questionNumber: 26,
      promptSuffix:
        "In which Zones, if any, can heated towel-rails be installed in a bathroom",
      correctedPromptSuffix:
        "A fixed, permanently connected heated towel rail that the manufacturer declares suitable for the location may be installed in which bathroom zones?",
      answer: "D",
      explanation:
        "Suitable fixed and permanently connected current-using equipment may be installed in Zone 1 in accordance with the manufacturer's instructions, and therefore may also be installed in Zone 2. It still needs the applicable IP rating and 30 mA RCD protection.",
    },
    {
      variantId,
      questionNumber: 29,
      promptSuffix:
        "2What is the recommended maximum area covered by a radial final socket circuit protected by a 20A protection device",
      correctedPromptSuffix:
        "In the informative Appendix 15 conventional-circuit guidance, what floor area is recommended for a 20 A radial socket-outlet circuit?",
      explanation:
        "Appendix 15 gives 50 m² as a conventional design recommendation for a 20 A radial socket-outlet circuit. It is guidance, not an absolute regulatory maximum; the actual design must still satisfy load, cable rating, voltage drop and fault protection.",
    },
  ];
}

const corrections = [
  {
    variantId: "quiz-29716",
    questionNumber: 4,
    promptSuffix:
      "The IEE Regulations are non-statutory but, if they are adhered to compliance with which one of the following statutory regulations is most likely?",
    correctedPromptSuffix:
      "BS 7671 is non-statutory, but following it is widely used as evidence of compliance with which electrical-safety legislation at work?",
    answer: "B",
    explanation:
      "The Electricity at Work Regulations 1989 are the statutory workplace duties most directly supported by BS 7671. BS 7671 is not law, but its design and verification requirements are a recognised way to demonstrate that electrical systems have been constructed and maintained to prevent danger.",
  },
  {
    variantId: "quiz-29716",
    questionNumber: 31,
    promptSuffix:
      "A 230 V single phase circuit supplying a pump motor is protected by a 20 A type C circuit breaker to BS EN 6089The minimum value of fault current to ensure compliance with the thermal and shock requirements is:",
    correctedPromptSuffix:
      "A 230 V single-phase circuit supplying a pump motor is protected by a 20 A Type C circuit-breaker to BS EN 60898. What minimum fault current guarantees operation in the instantaneous range?",
    explanation:
      "Use the upper edge of the Type C instantaneous band, 10 × In, when operation must be guaranteed. For a 20 A device, Ia = 10 × 20 A = 200 A.",
  },
  {
    variantId: "quiz-29716",
    questionNumber: 36,
    promptSuffix:
      "The symbol used to denote the operating current of the device protecting a circuit against overload is:",
    options: { A: "I₂", B: "Iᵦ", C: "Iₙ", D: "I𝓏" },
    explanation:
      "I₂ is the current that ensures effective operation of the overload protective device within its conventional time. Ib is design current, In is the device rating and Iz is the conductor current-carrying capacity.",
  },
  {
    variantId: "quiz-29716",
    questionNumber: 37,
    promptSuffix:
      "A 230 V 30 A radial circuit is protected by a BS 3036 device. If the value of earth loop impedance for the circuit is 2.3@, disconnection under Line/earth fault condition will occur in:",
    correctedPromptSuffix:
      "A 230 V, 30 A radial circuit is protected by a BS 3036 fuse. If its earth fault loop impedance is 2.3 Ω, approximately how long will a line-to-earth fault take to disconnect?",
    explanation:
      "The fault current is about 230 V ÷ 2.3 Ω = 100 A. Reading 100 A on the 30 A BS 3036 time/current curve gives an operating time of approximately 3 seconds.",
  },
  {
    variantId: "quiz-29716",
    questionNumber: 40,
    promptSuffix:
      "A circuit with a design current of 45 A is installed using a cable with a current rating of 50 A. If the voltage drop for the cable is 8.0mV/A/m, the circuit voltage drop for a 10 m run will be:",
    answer: "B",
    explanation:
      "Voltage drop = 8.0 mV/A/m × 45 A × 10 m = 3600 mV = 3.6 V. The cable's 50 A current rating does not replace the 45 A design current in this calculation.",
  },
  {
    variantId: "quiz-29717",
    questionNumber: 2,
    promptSuffix:
      "Correct co-ordination between conductors and an over-current protective device is achieved when:",
    options: {
      A: "Iₙ is less than Iᵦ",
      B: "Iₙ is not greater than I𝓏",
      C: "I𝓏 ÷ I₂ = 1.45",
      D: "I𝓏 × 1.45 = Iᵦ",
    },
    explanation:
      "For overload coordination, the protective-device rating must not exceed the conductor capacity: In ≤ Iz. The complete first condition is Ib ≤ In ≤ Iz.",
  },
  {
    variantId: "quiz-29717",
    questionNumber: 4,
    promptSuffix:
      "Correct co-ordination between conductors and an over-current protective device is achieved when:",
    options: {
      A: "Iᵦ is greater than I𝓏",
      B: "Iₙ exceeds the lowest current-carrying capacity I𝓏",
      C: "Iₙ is not less than the design current Iᵦ",
      D: "The current I₂ exceeds 1.45 I𝓏",
    },
    explanation:
      "The device rating In must be at least the design current Ib so it can carry the intended load. It must also be no greater than the conductor capacity Iz, and I₂ must not exceed 1.45 Iz.",
  },
  {
    variantId: "quiz-29717",
    questionNumber: 19,
    promptSuffix:
      "The maximum rating of an over current protective device for a lighting circuit using E14 type lampholders is:",
    options: { A: "0.25 A", D: "5 A" },
    explanation:
      "A circuit incorporating E14 lampholders may be protected by an overcurrent device rated no higher than 16 A. The limit protects the lampholder contacts and wiring against excessive current.",
  },
  {
    variantId: "quiz-29717",
    questionNumber: 30,
    promptSuffix:
      "When testing a three phase and neutral installation for insulation resistance to earth using a 1000 V insulation resistance tester, with all live conductors connected together, the minimum insulation resistance should not be less than:",
    correctedPromptSuffix:
      "When testing a 400/230 V three-phase and neutral installation to earth at 500 V d.c., with all live conductors connected together, what minimum insulation resistance is acceptable?",
    explanation:
      "A low-voltage circuit up to and including 500 V is normally tested at 500 V d.c. and must measure at least 1 MΩ. A 1000 V test is reserved for circuits whose nominal voltage exceeds 500 V.",
  },
  {
    variantId: "quiz-29718",
    questionNumber: 9,
    promptSuffix:
      "Protection against transient overvoltages need not be provided where the consequence caused by overvoltage could",
    correctedPromptSuffix:
      "Which listed situation would not, by itself, trigger the mandatory consequence-based requirement for transient-overvoltage protection?",
    options: {
      A: "No injury, loss of life, safety-service failure or significant financial or data loss",
      B: "Failure of a safety service",
      C: "Loss of human life",
      D: "Serious injury",
    },
    explanation:
      "Transient-overvoltage protection is mandatory where an overvoltage could cause serious injury, loss of life, failure of a safety service, or significant financial or data loss. If none of those consequences is credible, the consequence-based trigger alone is absent, although the rest of Section 443 still has to be applied.",
  },
  {
    variantId: "quiz-29718",
    questionNumber: 15,
    promptSuffix:
      "RCDs have to are required to have the button marked 'T' or 'Test' pressed for mechanical operation every",
    correctedPromptSuffix:
      "Where the standard RCD test notice applies, how often does it tell the user to press the button marked 'T' or 'Test'?",
    explanation:
      "The standard notice instructs the user to operate the RCD test button every six months. This checks the mechanical trip path; it is separate from instrument testing during verification.",
  },
  {
    variantId: "quiz-29718",
    questionNumber: 24,
    promptSuffix: "Measuring instruments should be in accordance with",
    answer: "D",
    explanation:
      "Instruments used for the verification tests in BS 7671 should meet the relevant parts of BS EN 61557. BS 3036 is a fuse standard, BS EN 60079-17 concerns hazardous-area inspection, and BS 7671 states installation requirements rather than serving as the product standard for test instruments.",
  },
  {
    variantId: "quiz-29718",
    questionNumber: 27,
    promptSuffix:
      "Zone 1 extends horizontally from the side of a bath for a distance of",
    correctedPromptSuffix:
      "Zone 2 extends horizontally beyond the boundary of Zone 1 at the side of a bath by what distance?",
    explanation:
      "Zone 2 extends 0.6 m horizontally beyond the boundary of Zone 1. Zone 1 itself is bounded by the vertical plane around the bath or shower basin, so the original wording confused the two zones.",
  },
  {
    variantId: "quiz-29718",
    questionNumber: 29,
    promptSuffix:
      "A 230V circuit is protected by a 50A Type B circuit-breaker to BS EN 6089The minimum value of fault current to ensure compliance with maximum disconnection times is",
    correctedPromptSuffix:
      "A 230 V circuit is protected by a 50 A Type B circuit-breaker to BS EN 60898. What fault current guarantees operation in its instantaneous range?",
    explanation:
      "Use five times the device rating for the upper edge of a Type B instantaneous band: Ia = 5 × 50 A = 250 A.",
  },
  {
    variantId: "quiz-29718",
    questionNumber: 32,
    promptSuffix:
      "Which one of the following types of installations is NOT within the statutory control of an authoritative body",
    correctedPromptSuffix:
      "Which listed premises would not normally be subject to a special premises-licensing regime for its electrical installation?",
    explanation:
      "An ordinary domestic dwelling is not normally licensed as a special premises type. Petrol filling stations, theatres and caravan sites can be subject to additional statutory or licensing controls because their use creates particular public or fire risks.",
  },
  {
    variantId: "quiz-29718",
    questionNumber: 34,
    promptSuffix:
      "Which of the following is not an example of an 'Earth fault'",
    options: {
      A: "A line conductor touching bonded metal water pipework",
      B: "A short circuit between line and neutral",
      C: "A line conductor touching an exposed metal enclosure",
      D: "A line-to-earth fault whose current is too low to operate the protective device promptly",
    },
    explanation:
      "A short circuit between line and neutral is a fault between live conductors, not an earth fault. Contact from line to bonded pipework or exposed metalwork creates a path to Earth, including where that path has too much impedance for prompt disconnection.",
  },
  {
    variantId: "quiz-29718",
    questionNumber: 38,
    promptSuffix:
      "In an IT system which of the following can be used as a monitoring device:",
    options: { D: "Insulation monitoring device (IMD)" },
    explanation:
      "An insulation monitoring device continuously watches insulation resistance to Earth and signals the first fault on an IT system. An MCB or other overcurrent device responds to excessive current, while an RCD is a disconnection device rather than the normal first-fault monitor.",
  },
  {
    variantId: "quiz-29718",
    questionNumber: 41,
    promptSuffix:
      "A horizontal top surface of a barrier or enclosure which is readily accessible shall provide a degree of protection of at least",
    answer: "D",
    explanation:
      "A readily accessible horizontal top surface must prevent access by the 1 mm test probe, so the minimum is IPXXD or IP4X. IP2X or IPXXB is the general minimum for other barrier and enclosure surfaces; IP5X adds dust protection that is not required by this rule.",
  },
  {
    variantId: "quiz-29718",
    questionNumber: 45,
    promptSuffix:
      "When selecting an RCD for general purposes the Type that may be used is",
    correctedPromptSuffix:
      "For a general-purpose circuit that may supply modern electronic loads, which listed RCD type is the normal minimum choice?",
    answer: "A",
    explanation:
      "Type A detects sinusoidal AC and pulsating DC residual currents produced by common electronic loads. Type AC is restricted to fixed equipment known to contain no DC components, while Types F and B are selected for more demanding frequency-converter or smooth-DC conditions.",
  },
  {
    variantId: "quiz-29718",
    questionNumber: 50,
    promptSuffix:
      "When cables are placed directly in the ground (other than a special location) they should be buried at a depth",
    correctedPromptSuffix:
      "Outside a special location, how does BS 7671 specify the burial depth for a cable placed directly in the ground?",
    options: {
      A: "A universal minimum of 1.0 m",
      B: "A universal minimum of 1.5 m",
      C: "Only deep enough to make later access easy",
      D: "Deep enough for the expected ground use to prevent foreseeable damage",
    },
    answer: "D",
    explanation:
      "The general rule does not give one universal depth. The cable must be deep enough, for the actual use of that ground, to avoid foreseeable damage and must have suitable mechanical protection and identification where required.",
  },
  {
    variantId: "quiz-29718",
    questionNumber: 51,
    promptSuffix:
      "A factory requires repairs to a machine. The type of switching to allow this work to go ahead would be switching for",
    answer: "D",
    explanation:
      "Repairs require switching off for mechanical maintenance so the machine cannot start or move while work is in progress. Mechanical cleaning is one example of a maintenance task, not the name of the switching function.",
  },
  {
    variantId: "quiz-29718",
    questionNumber: 52,
    promptSuffix:
      "Which of the following persons is not responsible signing an Electrical Installation Certificate",
    correctedPromptSuffix:
      "Which person is not one of the responsible signatories on an Electrical Installation Certificate?",
    answer: "D",
    explanation:
      "The Electrical Installation Certificate contains declarations for design, construction, and inspection and testing. The person ordering the work receives the certificate but does not sign one of those technical declarations merely by being the client.",
  },
  {
    variantId: "quiz-29718",
    questionNumber: 58,
    promptSuffix:
      "In medical locations socket-outlets intended to supply ME equipment shall be",
    correctedPromptSuffix:
      "In a Group 2 medical location, how should socket-outlets supplied by a medical IT system and intended for ME equipment be arranged?",
    explanation:
      "These socket-outlets are unswitched so a local switch cannot accidentally interrupt medical electrical equipment during treatment. The medical IT system and its monitoring provide the specialist continuity and fault arrangements.",
  },
  {
    variantId: "quiz-29719",
    questionNumber: 4,
    promptSuffix:
      "Which one of the following types of installations is NOT within the statutory control of an authoritative body?",
    correctedPromptSuffix:
      "Which listed premises would not normally be subject to a special premises-licensing regime for its electrical installation?",
    explanation:
      "An ordinary domestic dwelling is not normally licensed as a special premises type. Petrol filling stations, theatres and caravan sites can be subject to additional statutory or licensing controls because their use creates particular public or fire risks.",
  },
  {
    variantId: "quiz-29719",
    questionNumber: 23,
    promptSuffix:
      "Lz is the current rating of a circuit conductor. The requirements for overload current protection are fulfilled when:",
    correctedPromptSuffix:
      "Iz is the current-carrying capacity of a circuit conductor. Which set of values satisfies Ib ≤ In ≤ Iz?",
    options: {
      A: "Iᵦ = 18 A, Iₙ = 15 A, I𝓏 = 15 A",
      B: "Iᵦ = 22 A, Iₙ = 25 A, I𝓏 = 18 A",
      C: "Iᵦ = 8 A, Iₙ = 10 A, I𝓏 = 8 A",
      D: "Iᵦ = 9 A, Iₙ = 15 A, I𝓏 = 17 A",
    },
    explanation:
      "Only 9 A ≤ 15 A ≤ 17 A places the design current below the protective-device rating and the device rating below the conductor capacity. Each other set reverses at least one required inequality.",
  },
  {
    variantId: "quiz-29719",
    questionNumber: 34,
    promptSuffix:
      "3Correct co-ordination between conductors and overcurrent protection device is achieved when:",
    correctedPromptSuffix:
      "Which statement forms part of correct overload coordination between a conductor and its protective device?",
    options: {
      A: "Iᵦ is greater than I𝓏",
      B: "Iₙ exceeds the lowest current-carrying capacity I𝓏",
      C: "Iₙ is not less than the design current Iᵦ",
      D: "The operating current I₂ exceeds 1.45 I𝓏",
    },
    explanation:
      "The device rating In must be at least the design current Ib so it carries the intended load. It must also not exceed Iz, and I₂ must not exceed 1.45 Iz.",
  },
  {
    variantId: "quiz-29719",
    questionNumber: 37,
    promptSuffix:
      "A circuit is protected by a 10 A BS 3036 semi-enclosed (rewireable) fuse. The minimum permissible current rating (lz) of a conductor protected by this fuse would be:",
    correctedPromptSuffix:
      "A circuit is protected by a 10 A BS 3036 semi-enclosed fuse. What minimum current-carrying capacity Iz is required for its conductor?",
    options: { A: "4.2 A" },
    explanation:
      "For a BS 3036 fuse, Iz must be at least In ÷ 0.725. Therefore 10 A ÷ 0.725 = 13.79 A, rounded to 13.8 A.",
  },
  {
    variantId: "quiz-29719",
    questionNumber: 39,
    promptSuffix:
      "A circuit is connected to a TN system, the maximum permissible earth fault loop impedance (Zs) for a 32 A socket outlet circuit protected by a BS 88 fuse is:",
    options: { A: "0.92 Ω", B: "1.04 Ω", C: "1.09 Ω", D: "1.44 Ω" },
    explanation:
      "The applicable BS 88 time/current data gives a maximum Zs of 1.04 Ω for the stated 32 A socket-outlet circuit and disconnection time. The value must be low enough for the fuse to clear an earth fault before a dangerous touch voltage persists.",
  },
  {
    variantId: "quiz-29719",
    questionNumber: 52,
    promptSuffix:
      "When a 30 mA residual current device used to provide additional protection is tested at a residual current of 150 mA, the device should open in no more than:",
    correctedPromptSuffix:
      "Under the current BS 7671 field test, what is the maximum operating time for a general non-delay RCD tested at IΔn with an AC test current?",
    options: { A: "40 ms", B: "200 ms", C: "300 ms", D: "5 s" },
    answer: "C",
    explanation:
      "Current BS 7671 verification uses an AC test at the rated residual current IΔn; a general non-delay RCD must operate within 300 ms. The former five-times test and its 40 ms criterion are no longer a prescribed field test.",
  },
  ...sharedDuplicateCorrections("quiz-29720"),
  ...sharedDuplicateCorrections("quiz-29721"),
  {
    variantId: "quiz-29720",
    questionNumber: 31,
    promptSuffix: "BS 7671 does not set out",
    answer: "A",
    explanation:
      "The Electricity Safety, Quality and Continuity Regulations are separate statutory legislation governing public and private supply networks. BS 7671 sets technical requirements for the design, erection and verification of installations; it does not reproduce that legislation as its own rules.",
  },
  {
    variantId: "quiz-29720",
    questionNumber: 37,
    promptSuffix: "Which of the following statements is incorrect",
    options: {
      A: "In domestic premises, AC final circuits supplying luminaires require 30 mA RCD protection",
      D: "The Table 41.1 maximum disconnection times do not apply to a 32 A final circuit supplying only fixed current-using equipment",
    },
    explanation:
      "Table 41.1 applies to final circuits not exceeding 32 A that supply only fixed current-using equipment, as well as to qualifying socket-outlet circuits. In a TN system that normally means 0.4 s at 230 V; the 5 s allowance is for distribution circuits and certain larger final circuits.",
  },
  {
    variantId: "quiz-29720",
    questionNumber: 42,
    promptSuffix:
      "Which of the following items does not offer 'basic' protection",
    correctedPromptSuffix:
      "Which listed item, if left with accessible live contacts, would not by itself provide basic protection?",
    options: {
      A: "A lampholder with accessible live contacts when the lamp is removed",
      B: "A live part placed out of arm's reach in a controlled location",
      C: "A correctly shuttered socket-outlet",
      D: "A PVC-insulated cable with intact basic insulation",
    },
    explanation:
      "A lampholder that exposes live contacts when the lamp is removed does not prevent direct contact. Intact insulation, a suitable enclosure such as a shuttered socket, or placing out of reach where that measure is permitted can provide basic protection.",
  },
  {
    variantId: "quiz-29720",
    questionNumber: 51,
    promptSuffix:
      "When completing an Electrical Installation Condition Report an 'Unsatisfactory' assessment shall be recorded when which of the following conditions is recorded",
    correctedPromptSuffix:
      "Which set of EICR classification codes makes the overall assessment Unsatisfactory?",
    options: {
      A: "Any C1, C2 or FI",
      B: "C3 only",
      C: "No observations",
      D: "C3 together with recommendations",
    },
    explanation:
      "An EICR is Unsatisfactory if it contains C1 (danger present), C2 (potentially dangerous), or FI (further investigation required without delay). C3 is improvement recommended and does not, by itself, make the report Unsatisfactory.",
  },
  {
    variantId: "quiz-29721",
    questionNumber: 49,
    promptSuffix:
      "Luminaires marked with an 'F' inside a triangle are suitable for mounting",
    correctedPromptSuffix:
      "Under current luminaire marking practice, what does the crossed-out symbol showing a luminaire mounted on a normally flammable surface mean?",
    options: {
      A: "The luminaire needs only a standard enclosure",
      B: "The luminaire is intended only for a metallic mounting surface",
      C: "The luminaire is not suitable for direct mounting on a normally flammable surface",
      D: "The luminaire is suitable only for an insulated surface",
    },
    explanation:
      "The former F-in-a-triangle mark was withdrawn because suitability for normally flammable surfaces became the default. A crossed-out mounting-surface symbol is now used where a luminaire is not suitable for direct mounting on a normally flammable surface.",
  },
  {
    variantId: "quiz-29721",
    questionNumber: 54,
    promptSuffix:
      "Protection against electric shock regarding vehicle charging installations requires disconnection of live conductors within",
    correctedPromptSuffix:
      "On a 230 V TN system, what maximum disconnection time normally applies to a final circuit not exceeding 32 A that supplies an electric-vehicle charging point?",
    answer: "B",
    explanation:
      "The general Table 41.1 rule applies: a 230 V TN final circuit not exceeding 32 A requires disconnection within 0.4 s. The 5 s allowance applies to distribution circuits and certain larger final circuits, not this charging-point final circuit.",
  },
  {
    variantId: "quiz-29722",
    questionNumber: 1,
    promptSuffix:
      "Particular requirements are included in BS 7671 for electrical installations of:",
    options: { C: "Lift installations covered by BS EN 81" },
    explanation:
      "Section 701 of BS 7671 gives particular requirements for locations containing a bath or shower. Distributor's equipment, fixed offshore installations and the lift installation itself are outside its ordinary scope, although the building supplies feeding specialist equipment can still be covered.",
  },
  {
    variantId: "quiz-29722",
    questionNumber: 10,
    promptSuffix:
      "The protective conductor used within a final circuit has high protective conductor currents in excess of 10 mA when supplying more than one item of electrical equipment. The minimal cross-sectional area may be 4 mm2, provided that:",
    correctedPromptSuffix:
      "A radial final circuit supplies several socket-outlets where the cumulative protective-conductor current is likely to exceed 10 mA. Which listed high-integrity earthing arrangement is permitted by the current requirements?",
    options: {
      A: "Rely only on a 30 mA RCD",
      B: "Supply every item through the same isolating transformer",
      C: "Use one 4 mm² protective conductor with no additional high-integrity provision",
      D: "Connect the protective conductor as a complete ring",
    },
    answer: "D",
    explanation:
      "A radial socket-outlet circuit with likely cumulative protective-conductor current above 10 mA may have its protective conductor connected as a ring, giving a second earth path back to the distribution board. A lone 4 mm² conductor is not the current high-integrity solution merely because it is mechanically protected.",
  },
  {
    variantId: "quiz-29722",
    questionNumber: 12,
    promptSuffix:
      "A domestic 30A radial final circuit is used to supply BS 1363 socket outlets. If the floor area to be served is 55m2, the rating of the protective device and the live conductor's csa must not be less than:",
    correctedPromptSuffix:
      "Under the informative Appendix 15 conventional-circuit guidance, which protective device and live-conductor size can supply a 55 m² domestic radial socket-outlet circuit?",
    options: {
      A: "20 A and 2.5 mm²",
      B: "20 A and 4 mm²",
      C: "32 A and 2.5 mm²",
      D: "32 A and 4 mm²",
    },
    explanation:
      "Appendix 15 shows a conventional 32 A radial arrangement using 4 mm² live conductors for a floor area up to 75 m². It is design guidance rather than an automatic permission: current capacity, load, voltage drop and fault protection must still be verified.",
  },
  {
    variantId: "quiz-29722",
    questionNumber: 22,
    promptSuffix:
      "Omission of devices for protection against overload is NOT permitted for:",
    correctedPromptSuffix:
      "Which listed circuit is not one of the specific examples for which overload protection may be omitted because disconnection could cause danger or because the circuit cannot overload?",
    explanation:
      "Fire-extinguishing equipment and machine-excitation circuits may need to remain energized where an unexpected trip would create greater danger, while a current-transformer secondary cannot normally overload in the same way. An emergency-lighting circuit is not one of those specific Section 433 examples and still needs appropriate overcurrent protection.",
  },
  {
    variantId: "quiz-29722",
    questionNumber: 24,
    promptSuffix:
      "The means of isolation for a particular item of equipment may be installed in a position remote from that equipment, providing that it:",
    options: {
      B: "Can be secured in the off position by the worker's personal lock, with its key retained by that worker",
    },
    explanation:
      "Where an isolator is remote, the person doing the work must be able to secure it against reconnection. A personal lock with the key retained by that worker keeps control of the dead state; BS 7671 does not require a key whose shape is unique to one isolator.",
  },
  {
    variantId: "quiz-29722",
    questionNumber: 31,
    promptSuffix:
      "It is required that all circuits in a barn on an agricultural installation be protected by an RCD. The maximum rating (lΔn) for a circuit protected by a 40A BS 88 protective device should not exceed:",
    correctedPromptSuffix:
      "In an agricultural building, what maximum rated residual operating current applies to an RCD used for fire protection on a 40 A non-socket-outlet circuit?",
    explanation:
      "For fire protection in agricultural and horticultural premises, the RCD must have IΔn not exceeding 300 mA. Socket-outlets and circuits up to 32 A have the more sensitive 30 mA requirement, which is why the 40 A non-socket circuit is stated explicitly.",
  },
  {
    variantId: "quiz-29722",
    questionNumber: 35,
    promptSuffix:
      "Where ADS is the means of providing fault protection and a 20 A type B circuit breaker to BS EN 60898 is used, the maximum earth fault loop impedance is:",
    options: { A: "0.37 Ω", B: "1.15 Ω", C: "2.19 Ω", D: "2.87 Ω" },
    explanation:
      "For guaranteed instantaneous operation of a Type B breaker, use 5 × In. Applying Cmin gives Zs = 0.95 × 230 V ÷ (5 × 20 A) = 2.185 Ω, tabulated as 2.19 Ω.",
  },
  {
    variantId: "quiz-29722",
    questionNumber: 45,
    promptSuffix:
      "The purpose of the inspection conducted prior to testing an installation is to verify that:",
    options: {
      C: "Equipment is not visibly damaged or defective so as to impair safety",
    },
    explanation:
      "Initial inspection checks that selected and erected equipment is suitable, correctly installed and not visibly damaged or defective in a way that impairs safety. It is broader than checking one circuit arrangement and does not require every item to carry a British Standard number.",
  },
  {
    variantId: "quiz-29722",
    questionNumber: 46,
    promptSuffix:
      "When testing a 230V installation, the minimum value of insulation resistance is:",
    options: { A: "0.5 Ω", B: "0.5 MΩ", C: "1 Ω", D: "1 MΩ" },
    explanation:
      "A circuit with nominal voltage up to and including 500 V is normally tested at 500 V d.c. and must measure at least 1 MΩ. Ohms and megohms differ by a factor of one million, so the unit is safety-critical here.",
  },
  {
    variantId: "quiz-29722",
    questionNumber: 48,
    promptSuffix:
      "The inspecting and testing required during a periodic inspection should be recorded on a Periodic Inspection Report and carried out by:",
    correctedPromptSuffix:
      "The inspection and testing required for periodic verification should be recorded on an Electrical Installation Condition Report and carried out by whom?",
    explanation:
      "Periodic verification requires a skilled person competent in inspection and testing, because the work involves safe isolation, instrument use, interpretation and engineering judgement. The current report is called an Electrical Installation Condition Report, or EICR.",
  },
  {
    variantId: "quiz-29722",
    questionNumber: 49,
    promptSuffix:
      "Which one of the following factors does not affect the frequency of periodic inspection?",
    options: { C: "The inspector's formal qualification title" },
    explanation:
      "The interval is based on the installation's type, use, operation, maintenance and likely deterioration. The inspector must be competent, but the wording of that person's qualification does not change how quickly the installation itself deteriorates.",
  },
  {
    variantId: "quiz-29722",
    questionNumber: 51,
    promptSuffix:
      "The reference for the installation method that has multi-core cables having a non metallic sheath, in surface mounted conduit is:",
    correctedPromptSuffix:
      "What reference method applies to multicore non-metallic-sheathed cable installed in surface-mounted conduit on a wall?",
    explanation:
      "Reference Method B covers multicore cable in conduit mounted on a wooden or masonry wall. Methods E, F and G describe free-air arrangements, so they would overstate heat dissipation for cable enclosed in conduit.",
  },
  {
    variantId: "quiz-29722",
    questionNumber: 59,
    promptSuffix:
      "For household installations, as a rule of thumb, the floor area served by a single 20A radial circuit using socket outlets to BS 1363 may be:",
    correctedPromptSuffix:
      "Under the informative Appendix 15 conventional-circuit guidance, what floor area is associated with a 20 A radial circuit supplying BS 1363 socket-outlets?",
    explanation:
      "Appendix 15 associates a 20 A radial using 2.5 mm² live conductors with a floor area up to 50 m². This is a conventional design example, not a substitute for checking demand, cable rating, voltage drop and fault protection.",
  },
  {
    variantId: "quiz-29723",
    questionNumber: 10,
    promptSuffix:
      "Domestic ring final circuits are used to supply BS 1363 socket outlets. If the floor area to be served is limited to 50 m2, the cable feeding the circuit must be:",
    correctedPromptSuffix:
      "Under the informative Appendix 15 conventional-circuit guidance, what live-conductor size is normally used for a 32 A domestic ring final circuit serving 50 m²?",
    explanation:
      "A conventional 32 A ring final circuit normally uses 2.5 mm² live conductors and may serve up to 100 m². The stated 50 m² is within that guidance, but the actual design still has to satisfy loading, installed current capacity and voltage-drop requirements.",
  },
  {
    variantId: "quiz-29723",
    questionNumber: 20,
    promptSuffix:
      "Obstacles may be used to provide basic protection providing:",
    options: {
      D: "The installation is controlled by skilled or instructed persons",
    },
    explanation:
      "Obstacles and placing out of reach prevent only unintentional contact, so they are restricted to controlled locations accessible to skilled or instructed persons. They are not suitable as the ordinary public's basic protection.",
  },
  {
    variantId: "quiz-29723",
    questionNumber: 24,
    promptSuffix:
      "Omission of devices for protection against overload is not permitted for:",
    correctedPromptSuffix:
      "Which listed circuit is not one of the specific examples for which overload protection may be omitted because disconnection could cause danger or because the circuit cannot overload?",
    explanation:
      "Fire-extinguishing equipment and excitation circuits may need continuity where an unexpected trip would create greater danger, while current-transformer secondaries cannot normally overload in the same manner. Emergency lighting is not one of those specific Section 433 examples and still requires appropriate overcurrent protection.",
  },
  {
    variantId: "quiz-29723",
    questionNumber: 34,
    promptSuffix:
      "A final circuit supplying 13 A socket-outlets is to be used by ordinary persons. The circuit must be provided with:",
    options: { C: "An RCD rated above 30 mA" },
    explanation:
      "Socket-outlets rated up to 32 A for ordinary persons normally require 30 mA RCD additional protection under Regulation 415.1. A higher-rated RCD may provide other functions, such as fire protection, but is not sensitive enough to provide this additional protection.",
  },
  {
    variantId: "quiz-29723",
    questionNumber: 35,
    promptSuffix:
      "Socket outlets which are under the supervision of skilled persons:",
    correctedPromptSuffix:
      "Which statement correctly describes the purpose and setting of an insulation monitoring device on an IT system?",
    options: {
      A: "It disconnects the supply immediately whenever the first insulation fault occurs",
      B: "It measures load current and alarms when the circuit is overloaded",
      C: "Its alarm threshold should be set above the installation's normal insulation resistance",
      D: "It continuously monitors insulation to earth and alarms when resistance falls below its set threshold",
    },
    answer: "D",
    explanation:
      "An insulation monitoring device continuously measures an IT system's insulation resistance to Earth and signals when it falls below the selected response value. It warns of the first fault so it can be located before a second fault creates a dangerous current path.",
  },
  {
    variantId: "quiz-29723",
    questionNumber: 36,
    promptSuffix:
      "3Ceiling roses are only allowed where the circuit voltage does not exceed:",
    correctedPromptSuffix:
      "Ceiling roses are permitted only where the circuit voltage does not exceed:",
    explanation:
      "A ceiling rose is a low-voltage lighting accessory and is permitted only on a circuit not exceeding 250 V. Higher voltages require equipment with insulation, clearances and construction specifically rated for that duty.",
  },
  {
    variantId: "quiz-29723",
    questionNumber: 37,
    promptSuffix:
      "3The minimum cross-sectional area for a buried copper earthing conductor that is provided with mechanical protection but no protection against corrosion is:",
    correctedPromptSuffix:
      "What is the minimum cross-sectional area of a buried copper earthing conductor that has mechanical protection but no protection against corrosion?",
    explanation:
      "Without corrosion protection, buried copper needs a minimum 25 mm² cross-sectional area even when it has mechanical protection. The additional metal provides durability as soil conditions gradually attack the conductor.",
  },
  {
    variantId: "quiz-29723",
    questionNumber: 41,
    promptSuffix:
      "On a mobile or transportable unit, plugs used to connect the unit to the supply shall comply with BE EN 60309-2 and:",
    correctedPromptSuffix:
      "On a mobile or transportable unit, plugs used to connect the unit to the supply shall comply with BS EN 60309-2 and which additional requirement?",
    explanation:
      "The appliance inlet and its enclosure must provide at least IP44 when connected, protecting against solid objects and splashing water. This suits a mobile unit likely to be used outdoors or in exposed conditions.",
  },
  {
    variantId: "quiz-29723",
    questionNumber: 42,
    promptSuffix:
      "The fault current due to an earth fault of negligible impedance in a 400 V, three phase, four wire circuit having an earth fault loop impedance of 0.3 F is:",
    correctedPromptSuffix:
      "What fault current flows for a negligible-impedance earth fault in a 400/230 V three-phase four-wire circuit with earth fault loop impedance 0.3 Ω?",
    explanation:
      "An earth fault is driven by the 230 V line-to-earth voltage, not the 400 V line-to-line voltage. Therefore If = 230 V ÷ 0.3 Ω = 766.7 A, approximately 766.6 A using the rounded values supplied.",
  },
  {
    variantId: "quiz-29723",
    questionNumber: 45,
    promptSuffix:
      "An unfused spur connected to a 30 A ring circuit may supply:",
    options: {
      B: "One twin socket-outlet, one single socket-outlet, or one item of permanently connected equipment",
    },
    explanation:
      "Without a fused connection unit, the spur cable has no local overload limit. It may therefore feed only one single socket, one twin socket, or one permanently connected item, preventing several outlets from imposing an excessive load on the single spur leg.",
  },
  {
    variantId: "quiz-29723",
    questionNumber: 49,
    promptSuffix:
      "During an initial verification, a test result fails to comply with BS 7671 Part The procedure to be adopted is to:",
    correctedPromptSuffix:
      "During initial verification, a test result fails to comply with BS 7671. What procedure should be followed?",
    explanation:
      "A defect found before the installation is placed in service must be corrected and the affected work retested. The Electrical Installation Certificate can be completed only after the verified result demonstrates compliance; an EICR is not a substitute for making new work safe.",
  },
  {
    variantId: "quiz-29723",
    questionNumber: 50,
    promptSuffix:
      "For circuits having a nominal voltage above 500 V, the minimum insulation resistance is:",
    options: { A: "0.25 MΩ", B: "0.5 MΩ", C: "1 MΩ", D: "5 MΩ" },
    explanation:
      "Circuits above 500 V are normally insulation-tested at 1000 V d.c. and must measure at least 1 MΩ. The corrected choices use megohms rather than the corrupted unit text.",
  },
  {
    variantId: "quiz-29723",
    questionNumber: 54,
    promptSuffix:
      "Which one of the following factors does not affect the frequency of the periodic inspection?",
    options: { C: "The inspector's formal qualification title" },
    explanation:
      "The interval follows the installation's type, use, operation, maintenance and likely deterioration. Competence is essential to perform the inspection, but the title printed on the inspector's qualification does not alter the condition or deterioration rate of the installation.",
  },
  {
    variantId: "quiz-29723",
    questionNumber: 55,
    promptSuffix:
      "Electric heating units embedded in the floor of a bathroom and intended for heating the location may be installed below any zone provided they are:",
    options: {
      A: "Covered by an earthed metallic sheath or grid connected to the CPC, with the low-voltage circuit protected by a 30 mA RCD",
    },
    explanation:
      "Embedded bathroom heating requires an earthed metallic sheath, enclosure or fine-mesh grid connected to the circuit protective conductor, unless SELV is used. As a low-voltage bathroom circuit it also requires 30 mA RCD additional protection.",
  },
  {
    variantId: "quiz-29724",
    questionNumber: 6,
    promptSuffix: "BS 7671 defines extra-low voltage a.c. as not exceeding:",
    correctedPromptSuffix:
      "Which option gives the upper limits of extra-low voltage for a.c. and ripple-free d.c.?",
    explanation:
      "Extra-low voltage does not exceed 50 V a.c. or 120 V ripple-free d.c. between conductors or to Earth. SELV and PELV add source, separation and earthing conditions; voltage alone does not establish either system.",
  },
  {
    variantId: "quiz-29724",
    questionNumber: 11,
    promptSuffix: "The following are all reasons for dividing a circuit except",
    options: { A: "Allowing future expansion within the installation" },
    explanation:
      "Division is required to limit fault consequences, reduce unwanted tripping, prevent indirect energization and reduce electromagnetic disturbance. Providing spare capacity for future expansion is sensible planning, but it is not one of those protective reasons.",
  },
  {
    variantId: "quiz-29724",
    questionNumber: 12,
    promptSuffix: "The image represents which type of earthing system?",
    correctedPromptSuffix:
      "Which earthing system has the supply neutral earthed at the source and a separate protective conductor from source to installation?",
    explanation:
      "TN-S keeps neutral and protective conductors separate throughout the system, with the source neutral connected to Earth. TN-C-S combines them as a PEN for part of the supply, TT uses the installation's own electrode, and IT has no direct source-earth connection or uses a high impedance.",
  },
  {
    variantId: "quiz-29724",
    questionNumber: 22,
    promptSuffix:
      "Which of the following under certain conditions could be used as an earth electrode?",
    options: {
      B: "A purpose-made earth rod installed for the electrical installation",
    },
    explanation:
      "A purpose-made rod is a controlled, durable connection to the general mass of Earth. Gas pipes and public or private water-service pipes must not be relied on as electrodes because they may be altered, removed or replaced with plastic and could introduce dangerous current into a utility service.",
  },
  {
    variantId: "quiz-29724",
    questionNumber: 29,
    promptSuffix: "An industrial board supplies",
    correctedPromptSuffix:
      "Which listed load arrangement most clearly calls for a three-phase industrial distribution board?",
    explanation:
      "Four three-phase motors create several balanced three-phase industrial loads, so a three-phase board is the natural distribution arrangement. Single-phase lighting and ring circuits do not by themselves identify an industrial three-phase board, while two motors described as TP&N are atypical because ordinary three-phase motors do not use a neutral.",
  },
  {
    variantId: "quiz-29724",
    questionNumber: 30,
    promptSuffix:
      "A cable concealed in a wall outside the prescribed zones at a depth of less than 50 mm must",
    correctedPromptSuffix:
      "Which listed wiring method can protect a cable concealed less than 50 mm deep in a wall outside the prescribed zones?",
    explanation:
      "Earthed metallic conduit is one accepted method because it gives mechanical protection and provides a fault path if a fixing penetrates the wiring. Unearthed conduit does not provide that fault path, a 500 mA RCD is not additional protection, and the cable is not absolutely prohibited where a compliant protective method is used.",
  },
  {
    variantId: "quiz-29724",
    questionNumber: 33,
    promptSuffix: "Which of the following statements is incorrect:",
    correctedPromptSuffix:
      "Which statement about a PEN conductor in a fixed installation is incorrect?",
    options: {
      B: "A PEN conductor must not be interrupted by a switching device",
      C: "A copper PEN conductor must normally have a cross-sectional area of at least 10 mm²",
      D: "A PEN conductor combines protective and neutral functions",
    },
    explanation:
      "A PEN conductor in a fixed installation requires at least 10 mm² copper or 16 mm² aluminium, so a flexible conductor below 10 mm² is not acceptable. It combines protective and neutral functions and must not be interrupted, because opening it could raise connected metalwork to a dangerous voltage.",
  },
  {
    variantId: "quiz-29724",
    questionNumber: 36,
    promptSuffix:
      "A permanent warning notice must be fixed at or near the point of connection of every earthing conductor to an earth electrode bearing the words:",
    options: {
      A: "Earth Bonding — Danger",
      B: "Electrical Connection — Danger",
      C: "Safety Electrical Connection — Do Not Remove",
      D: "Safety Electrical Earth — Do Not Remove",
    },
    explanation:
      "The prescribed warning is 'Safety Electrical Connection — Do Not Remove'. It identifies an earthing connection whose removal could leave the installation without an effective fault-current path.",
  },
  {
    variantId: "quiz-29724",
    questionNumber: 38,
    promptSuffix: "The symbol shown above indicates",
    correctedPromptSuffix:
      "Which description identifies a luminaire intended for a high-pressure sodium lamp containing its own internal ignitor?",
    explanation:
      "The relevant luminaire marking identifies compatibility with a high-pressure sodium lamp whose ignitor is built into the lamp. A lamp needing an external ignitor requires different controlgear, while mounting-surface and limited-temperature marks describe fire characteristics rather than the lamp starting arrangement.",
  },
  {
    variantId: "quiz-29724",
    questionNumber: 39,
    promptSuffix:
      "Split concentric cable could be used as a distribution cable to supply what type of earthing system",
    answer: "C",
    explanation:
      "Split concentric cable has distinct neutral wires and protective-earth wires, so its construction is separate neutral and earth, or SNE, corresponding to TN-S. Ordinary concentric cable uses a combined neutral-and-earth conductor and is associated with TN-C-S/PME supplies.",
  },
  {
    variantId: "quiz-29724",
    questionNumber: 47,
    promptSuffix:
      "Which of the following statements regarding Section 740 is incorrect:",
    explanation:
      "Section 740 covers temporary installations for fairgrounds, amusement parks and circuses. Socket-outlet circuits up to and including 32 A require 30 mA RCD additional protection unless a permitted alternative such as electrical separation applies; it is therefore wrong to say the requirement begins only above 32 A.",
  },
  {
    variantId: "quiz-29724",
    questionNumber: 54,
    promptSuffix:
      "Where conduit is to be installed installations and vehicles and machinery operate is should be afforded a protection rating to withstand",
    correctedPromptSuffix:
      "Where conduit is installed in an area in which vehicles and machinery operate, what minimum impact energy should it withstand?",
    explanation:
      "A 5 J impact rating gives conduit the mechanical strength required where moving vehicles and machinery can strike it. Lower impact classes do not represent the severity expected from plant movement in that location.",
  },
  {
    variantId: "quiz-29724",
    questionNumber: 56,
    promptSuffix:
      "Busbar trunking should have an In declared by the manufacture to",
    correctedPromptSuffix:
      "To which current product standard should a busbar trunking system comply?",
    options: {
      A: "BS EN 61439-6",
      B: "BS EN 60539-2",
      C: "BS EN 60898-2",
      D: "BS EN 61534-1",
    },
    explanation:
      "BS EN 61439-6 is the current product standard for busbar trunking systems. BS EN 60898 concerns circuit-breakers, BS EN 61534 concerns powertrack systems, and the older BS EN 60439-2 designation has been superseded.",
  },
  {
    variantId: "quiz-29725",
    questionNumber: 2,
    promptSuffix:
      "In a bathroom area protection by electrical separation shall only be used for?",
    correctedPromptSuffix:
      "In a location containing a bath or shower, to what may one electrically separated source be connected?",
    options: {
      A: "Several socket-outlets and several appliances",
      B: "An entire group of final circuits",
      C: "One item of current-using equipment or one socket-outlet",
      D: "Any number of Class I appliances",
    },
    explanation:
      "Electrical separation in a bathroom is limited to one item of current-using equipment or one socket-outlet supplied from the separated source. Connecting multiple items creates the possibility of simultaneously touching two exposed parts at different potentials after separate faults.",
  },
  {
    variantId: "quiz-29725",
    questionNumber: 3,
    promptSuffix:
      "Which of the following factors describes the correct co-ordination between electrical equipment in order not to impair the safety of the installation requiring continuity of service?",
    correctedPromptSuffix:
      "Which coordination property allows the protective device nearest a fault to operate while healthy upstream circuits remain in service?",
    options: {
      A: "Back-up protection between an OCPD and an overload relay",
      B: "Operating every upstream and downstream OCPD together",
      C: "Omitting overload protection from all downstream circuits",
      D: "Selectivity between overcurrent protective devices",
    },
    explanation:
      "Selectivity coordinates time/current characteristics so the device immediately upstream of a fault operates before the more remote device. That confines the outage to the affected circuit and preserves service to healthy circuits without removing required protection.",
  },
  {
    variantId: "quiz-29725",
    questionNumber: 15,
    promptSuffix:
      "In allocation containing a shower without a basin, zone 1 is limited by the vertical surface at a radius from the water outlet of?",
    correctedPromptSuffix:
      "In a location containing a shower without a basin, at what horizontal radius from the fixed water outlet is Zone 1 bounded?",
    explanation:
      "Without a basin to define the boundary, Zone 1 extends 1.2 m horizontally from the fixed shower water outlet. The wider radius reflects the area in which a person and sprayed water are likely to be present.",
  },
  {
    variantId: "quiz-29725",
    questionNumber: 17,
    promptSuffix:
      "Which of the following should be taken into account in the choice of methods of protection for safety and the selection and erection of equipment?",
    correctedPromptSuffix:
      "Which listed assessment specifically addresses how much of the installation should remain energized after a fault or planned operation?",
    explanation:
      "An assessment of continuity of service establishes whether discrimination, duplicate supplies or standby sources are needed to keep essential loads running. Supply current and frequency are also important design characteristics, but they do not answer this particular continuity question.",
  },
  {
    variantId: "quiz-29725",
    questionNumber: 31,
    promptSuffix:
      "Which of the following are NOT referred to in the regulations as current-carrying conductors in AC circuit under normal operating conditions?",
    correctedPromptSuffix:
      "Which listed a.c. conductor arrangement is not one of the standard supply arrangements shown in BS 7671 documentation?",
    explanation:
      "The standard arrangements include three-phase three-wire, three-phase four-wire and two-phase three-wire. A two-phase four-wire arrangement is not one of those listed normal configurations, so it is not selected on the model supply-characteristics forms.",
  },
  {
    variantId: "quiz-29725",
    questionNumber: 45,
    promptSuffix:
      "At an electric vehicle charging station under what conditions can the protective measures of obstacles and placing out of reach be permitted?",
    answer: "B",
    explanation:
      "Section 722 does not permit obstacles or placing out of reach as protective measures for conductive EV charging points. Users handle the vehicle connector and can access the equipment, so protection cannot depend on a controlled skilled-person area or on maintaining distance from live parts.",
  },
  {
    variantId: "quiz-29726",
    questionNumber: 13,
    promptSuffix:
      "Changes to the protective measures of electrical separation for the supply of more than one item of current-using equipment can be made by?",
    options: {
      D: "A skilled or instructed person, or a person working under skilled supervision",
    },
    explanation:
      "Separation supplying more than one item depends on a controlled equipotential arrangement and careful conductor routing. Changes therefore require a skilled or instructed person, or work under skilled supervision, so the separation and bonding conditions are not inadvertently defeated.",
  },
  {
    variantId: "quiz-29726",
    questionNumber: 19,
    promptSuffix:
      "What is the maximum distance a cable of up to 10mm2 may be totally surrounded in thermal insulation before a de rating factor of 0.88 should be applied?",
    correctedPromptSuffix:
      "For a cable up to 10 mm² totally surrounded by thermal insulation for a length of 50 mm, what length entry is associated with the 0.88 rating factor?",
    answer: "D",
    explanation:
      "The short-length thermal-insulation table gives a factor of 0.88 for 50 mm of cable completely surrounded by insulation. Longer enclosed lengths trap more heat and require progressively lower factors, so 49 mm is not the tabulated design entry.",
  },
  {
    variantId: "quiz-29726",
    questionNumber: 27,
    promptSuffix:
      "For Connection Type 2 (CT 2), the nominal discharge current (Inspd) for three-phase systems for a Type 1 SPD connected between the neutral conductor and the protective conductor shall be?",
    correctedPromptSuffix:
      "For Connection Type 2 (CT2) in a three-phase system, what minimum impulse discharge current Iimp (10/350 µs) is required for the Type 1 SPD connected between neutral and the protective conductor?",
    explanation:
      "In a three-phase CT2 arrangement, the neutral-to-protective-conductor Type 1 SPD carries the combined lightning impulse diverted from the line conductors. Table 534.4 therefore requires a minimum Iimp of 50 kA for this common path. Iimp uses the Type 1 10/350 µs waveform; it is not the Type 2 nominal discharge-current value In.",
  },
  {
    variantId: "quiz-29726",
    questionNumber: 28,
    promptSuffix:
      "Metallic water supply pipework can be used as an earth electrode if?",
    correctedPromptSuffix:
      "Which listed item may be selected as an earth electrode for an installation?",
    options: {
      A: "A disused metallic water-service pipe",
      B: "A utility water pipe where permission has been requested",
      C: "A purpose-made earth rod or plate",
      D: "A water pipe whose installation date is known",
    },
    explanation:
      "A purpose-made rod or plate gives a controlled, durable electrode. Metallic pipes carrying water or other fluids must not be used as electrodes, even when disused or approved informally, because they may be removed, replaced by plastic or create hazardous transferred potentials.",
  },
  {
    variantId: "quiz-29726",
    questionNumber: 38,
    promptSuffix: "Identify one of the following that is a non-statutory?",
    options: { C: "Electricity at Work Regulations 1989" },
    explanation:
      "BS 7671 is a non-statutory British Standard. The Electricity at Work Regulations 1989 and Health and Safety at Work etc. Act 1974 are legislation; the old cinematograph regulations were also statutory rules, even though they are now obsolete.",
  },
  {
    variantId: "quiz-29726",
    questionNumber: 54,
    promptSuffix: "In a swimming pool a socket-outlet can be installed in?",
    correctedPromptSuffix:
      "In the normal swimming-pool zone arrangement, in which listed zone may a socket-outlet be installed when its required protective measure is provided?",
    explanation:
      "Socket-outlets are normally excluded from Zones 0 and 1 but may be installed in Zone 2 with a permitted measure such as 30 mA RCD protection, SELV or electrical separation as applicable. Their enclosure must also suit the water exposure.",
  },
  {
    variantId: "quiz-29726",
    questionNumber: 56,
    promptSuffix:
      "When installing equipment which does not comply with an appropriate British or Harmonised standard, the installer must?",
    options: {
      D: "Demonstrate equivalent safety and record the agreed departure on the appropriate certificate",
    },
    explanation:
      "Non-standard equipment is not automatically prohibited, but the designer and installer must establish that it provides at least the same degree of safety and document the special agreement or departure. Merely telling a supervisor or making an unexplained note is not enough.",
  },
  {
    variantId: "quiz-29727",
    questionNumber: 5,
    promptSuffix:
      "Central Power supply system (low power output) has a limitation of the power output of the system",
    answer: "D",
    explanation:
      "A central low-power supply system is limited to 500 W for a three-hour rated duration or 1500 W for a one-hour duration. The original 10-hour and three-hour pairing did not match the defined low-power safety-supply ratings.",
  },
  {
    variantId: "quiz-29727",
    questionNumber: 7,
    promptSuffix:
      "Which of the following does not need to be taken into account in the choice of methods of protection for safety and the selection and erection of equipment",
    correctedPromptSuffix:
      "Which listed item is principally an incoming-supply characteristic, rather than an assessment of continuity, safety-service needs or equipment compatibility?",
    explanation:
      "The nature of current and frequency is established as a characteristic of the supply. It still matters to the design and equipment selection, but it is not one of the three service-continuity or compatibility assessments contrasted in this question.",
  },
  {
    variantId: "quiz-29727",
    questionNumber: 10,
    promptSuffix:
      "Which of the following are NOT referred to in the regulations as current-carrying conductors in an A.C. circuit under normal operating conditions",
    correctedPromptSuffix:
      "Which listed a.c. conductor arrangement is not one of the standard supply arrangements shown in BS 7671 documentation?",
    explanation:
      "Three-phase three-wire, three-phase four-wire and two-phase three-wire are standard listed arrangements. Two-phase four-wire is not one of the normal configurations presented on the BS 7671 model forms.",
  },
  {
    variantId: "quiz-29727",
    questionNumber: 19,
    promptSuffix:
      "The maximum disconnection time for a 400V A.C. final circuit with a TN supply is",
    correctedPromptSuffix:
      "For a TN final circuit covered by Regulation 411.3.2.2 with nominal line-to-earth voltage above 230 V and up to 400 V, what is the maximum disconnection time?",
    explanation:
      "Table 41.1 gives 0.2 s for a covered TN final circuit where U0 is above 230 V and up to 400 V. The rating and load category matter: the question now states that the circuit is one to which the table's rapid-disconnection rule applies.",
  },
  {
    variantId: "quiz-29727",
    questionNumber: 27,
    promptSuffix:
      "In domestic installations where circuits are protected by RCDs, the product of the earth fault loop impedance and the rated residual operating current of the device must not exceed",
    correctedPromptSuffix:
      "For fault protection by an RCD in a TT system, what value must the product of the installation earth-electrode resistance RA and rated residual operating current IΔn not exceed?",
    explanation:
      "The TT condition is RA × IΔn ≤ 50 V, limiting touch voltage before the RCD disconnects. RA includes the resistance of the installation electrode and protective conductor; describing the term simply as the whole earth fault loop impedance obscures this specific design check.",
  },
  {
    variantId: "quiz-29727",
    questionNumber: 30,
    promptSuffix:
      "Thermoplastic insulated and sheathed flat cables with a protective conductor, when installed in prescribed zones in a dwelling at a depth of less than 50mm, must have additional protection by",
    explanation:
      "A cable concealed less than 50 mm deep in a wall or partition requires 30 mA RCD additional protection under the stated domestic arrangement, even when routed in a prescribed zone. The zone makes the route predictable; the RCD reduces injury risk if a fixing still penetrates it.",
  },
  {
    variantId: "quiz-29727",
    questionNumber: 36,
    promptSuffix:
      "Which one of the following colours must be used to identify a line conductor in a control circuit",
    correctedPromptSuffix:
      "Which listed colour is permitted for identifying a line conductor in a control circuit?",
    explanation:
      "Pink is one of several colours permitted for a control-circuit line conductor. Blue is reserved for neutral or mid-point identification, green-and-yellow for protective conductors, and cream or pink is associated with functional earthing under the applicable identification standard, so the circuit documentation must remove ambiguity.",
  },
  {
    variantId: "quiz-29727",
    questionNumber: 42,
    promptSuffix:
      "The frequency of periodic inspection and testing for an installation should be determined by the",
    options: {
      D: "Type, use, operation, maintenance and likely deterioration of the installation",
    },
    explanation:
      "Periodic intervals are risk-based. The installation's type, how it is used and operated, its maintenance regime and the deterioration or external influences it experiences determine how quickly its continued safety needs reassessment.",
  },
] as const satisfies readonly ExamQuestionCorrection[];

export const eighteenthEditionPart2Corrections =
  corrections as readonly ExamQuestionCorrection[];
