import type { ExamQuestionCorrection } from "./types";

export const eighteenthEditionCorrections = [
  {
    examId: "18th-edition",
    variantId: "quiz-29703",
    questionNumber: 9,
    promptSuffix:
      "Every installation shall be divided into circuits as necessary, in order to",
    options: { B: "Eliminate the need for earth-fault protection" },
    explanation:
      "Dividing circuits helps avoid unwanted RCD tripping caused by accumulated protective-conductor currents that are not due to a fault. Circuit division cannot eliminate the need for earth-fault protection; it limits the consequences of faults and supports safe operation and maintenance.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29703",
    questionNumber: 13,
    promptSuffix:
      "Chapter 41 specifies essential requirements regarding protection against electric shock. What else does it deal with?",
    options: { D: "Colour identification of conductors" },
    explanation:
      "Chapter 41 covers the application and coordination of protective measures for electric shock in relation to external influences. Conductor colour identification is dealt with in Section 514, not Chapter 41; replacing the original disconnection-time option removes a second defensible answer.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29703",
    questionNumber: 19,
    promptSuffix:
      "In order to meet basic protection requirements, horizontal top surfaces of enclosures that are accessible shall be protected to",
    correctedPromptSuffix:
      "What minimum IP degree, stated using the first characteristic numeral, applies to readily accessible horizontal top surfaces of barriers or enclosures?",
    options: { D: "IP3X" },
    explanation:
      "Readily accessible horizontal top surfaces must provide at least IP4X protection. IP2X is the normal minimum for other barrier or enclosure surfaces; the corrected stem asks specifically for the digit-form designation and removes the malformed alternative.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29703",
    questionNumber: 23,
    promptSuffix:
      "Emergency switching shall be provided where a risk of electric shock is involved and shall",
    correctedPromptSuffix:
      "Where emergency switching is required because of a risk of electric shock, which conductors must the device disconnect?",
    options: {
      A: "Only the neutral conductor",
      B: "All live conductors",
      C: "The circuit protective conductor",
      D: "Only a functional earthing conductor",
    },
    explanation:
      "Emergency switching for an electric-shock risk must disconnect all live conductors with one action. Protective and functional earthing conductors are not substituted for live-conductor isolation, and neutral-only switching would leave line conductors energised.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29703",
    questionNumber: 25,
    promptSuffix:
      "One of the main recommended methods of reducing EMI in installations is to use",
    correctedPromptSuffix:
      "Where a cable screen has insufficient conductivity for the expected common-mode current, which additional conductor can reduce electromagnetic interference?",
    options: {
      A: "A bypass conductor connected in parallel with the screen",
      B: "A bridge rectifier in the load circuit",
      C: "Oversized line and neutral conductors with no bonding change",
      D: "Unbonded containment around only part of the route",
    },
    explanation:
      "A low-impedance bypass conductor bonded in parallel with the screen can carry common-mode current and reinforce the screen path. Rectifiers, oversized live conductors or incomplete unbonded containment do not provide that controlled EMC return path.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29703",
    questionNumber: 30,
    promptSuffix:
      "Omission of identification by colour or marking on conductors is permitted where",
    correctedPromptSuffix:
      "Which listed metallic cable component may serve as a protective conductor without separate colour identification along its length?",
    options: {
      A: "An individual insulated conductor with no identification",
      B: "The steel-wire armour of a cable used as a protective conductor",
      C: "An unidentified core used as a switched line conductor",
      D: "An unidentified live conductor in a two-wire DC circuit",
    },
    explanation:
      "A cable's metallic sheath or armour used as a protective conductor need not be colour-marked along its inaccessible length, though its function must be clear at terminations. Individual insulated conductors still require the prescribed identification.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29703",
    questionNumber: 35,
    promptSuffix:
      "Which of the following would meet the requirements for wiring systems to be supported so that they will not collapse in the event of a fire?",
    correctedPromptSuffix:
      "Which listed fixing material can directly provide non-combustible support that prevents premature cable collapse in a fire?",
    options: {
      A: "PVC conduit alone with no metallic fixings",
      B: "Steel or copper clips",
      C: "Plastic cable ties alone",
      D: "PVC trunking alone with no metallic fixings",
    },
    explanation:
      "Properly selected steel or copper clips remain effective at temperatures that would soften plastic supports. PVC conduit, PVC trunking or plastic ties alone cannot be relied on to prevent premature collapse during a fire.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29703",
    questionNumber: 56,
    promptSuffix:
      "Good design should consider energy efficiency within an installation. Which of the following should be taken into account?",
    correctedPromptSuffix:
      "Which broad design objective directly improves energy efficiency by limiting wasted power within the installation?",
    options: { B: "Increasing reactive power and worsening power factor" },
    explanation:
      "Reducing energy losses in conductors and equipment directly improves installation efficiency. Worsening power factor increases current and losses; installation labour cost and cable-insulation type are not, by themselves, the requested energy objective.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29703",
    questionNumber: 7,
    promptSuffix:
      "Which earthing arrangement has only one point directly earthed at the source?",
    correctedPromptSuffix:
      "Which earthing arrangement has one point of the source directly earthed while the installation's exposed-conductive-parts are connected to earth electrodes electrically independent of the source electrode?",
    explanation:
      "That is a TT system. One point of the source is directly earthed, while exposed-conductive-parts of the installation are connected to one or more local earth electrodes that are electrically independent of the source electrode.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29703",
    questionNumber: 12,
    promptSuffix:
      "The following is not recognised as a source of supply for safety services",
    correctedPromptSuffix:
      "Which listed supply is not, by itself, an independent electrical source for a safety service?",
    options: {
      A: "A generator set independent of the normal supply",
      B: "The normal DNO supply alone",
      C: "Primary cells selected for the required duty",
      D: "Storage batteries selected for the required duty",
    },
    explanation:
      "The normal DNO supply alone is the supply whose failure the safety service must withstand, so it is not an independent safety source. Suitable independent generating sets and correctly selected battery sources are recognised ways of supplying safety services.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29703",
    questionNumber: 16,
    promptSuffix:
      "The following would be classed as a potential source of electromagnetic disturbance within an installation.",
    correctedPromptSuffix:
      "Which listed power-electronic device is a common source of electromagnetic disturbance because it converts DC to AC by rapid switching?",
    answer: "C",
    explanation:
      "An inverter uses rapidly switched power semiconductors to synthesize an AC output. Its switching edges can produce conducted and radiated electromagnetic disturbance, so the installation design must consider filtering, bonding, screening, routing and separation.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29703",
    questionNumber: 17,
    promptSuffix:
      "To meet 5 second disconnection what is the maximum permissible value of Zs for a 30A BS 3036 fuse?",
    correctedPromptSuffix:
      "For the five-second disconnection condition, what maximum earth fault loop impedance is listed for a 30 A BS 3036 fuse?",
    options: { D: "1.67 ohms" },
    explanation:
      "The Chapter 41 table value for a 30 A BS 3036 fuse under the five-second condition is 2.51 Ω. The circuit's maximum Zs must not exceed that value at the conductor operating temperature.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29703",
    questionNumber: 18,
    promptSuffix:
      "As a protective measure, the use of obstacles and placing out of reach shall only be used in installations restricted to",
    correctedPromptSuffix:
      "The protective measures of obstacles and placing out of reach are restricted to installations accessible only to whom?",
    options: {
      B: "Ordinary persons without electrical instruction",
      D: "Skilled persons, or instructed persons under the supervision of skilled persons",
    },
    explanation:
      "Obstacles and placing out of reach provide only basic protection and can be deliberately bypassed. They are therefore restricted to controlled installations accessible only to skilled persons or instructed persons acting under skilled supervision.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29703",
    questionNumber: 20,
    promptSuffix:
      "What must be carried out when RCDs are not installed protecting socket outlet circuits in installations other than dwellings?",
    correctedPromptSuffix:
      "For a socket-outlet covered by the current Regulation 411.3.3 risk-assessment exception, what must justify omission of 30 mA RCD protection?",
    options: {
      C: "A suitably documented risk assessment undertaken with the involvement of a skilled person (electrically)",
    },
    explanation:
      "The limited exception requires a suitably documented risk assessment undertaken with the involvement of a skilled person (electrically). It does not apply to socket-outlets used by ordinary persons, children or disabled persons, or to outdoor mobile equipment covered by the other indents.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29703",
    questionNumber: 21,
    promptSuffix:
      "What should be carried out in determining if protection against atmospheric transient voltages is necessary?",
    correctedPromptSuffix:
      "Under the current Regulation 443.4.1 default for cases not involving serious injury, loss of life, or significant financial or data loss, when may transient-overvoltage protection be omitted?",
    options: {
      A: "Only when the owner declares the possible loss or damage tolerable, accepts the risk and the decision is recorded",
      B: "Whenever the calculated prospective short-circuit current is below 16 kA",
      C: "Whenever the installation is a single dwelling",
      D: "Whenever local lightning records show no strike in the previous year",
    },
    explanation:
      "The obsolete calculated risk level method is no longer the BS 7671 decision rule. In other cases the default is to provide protection unless the owner declares that possible loss or damage is tolerable, accepts the risk and the decision is recorded on the certification.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29703",
    questionNumber: 26,
    promptSuffix:
      "The use of AFDD (ARC fault detection devices) to BS EN 62606 are recommended to provide additional protection against fire in AC circuits, where could devices be used?",
    correctedPromptSuffix:
      "Under current Regulation 421.1.7, in which premises are AFDDs required for the specified single-phase AC final circuits supplying socket-outlets or fixed current-using equipment rated not more than 32 A?",
    options: {
      A: "Every circuit on board a ship",
      B: "Only radio-interference suppression equipment",
      C: "Higher-risk residential buildings, houses in multiple occupation, purpose-built student accommodation and care homes",
      D: "Electric-fence circuits covered by their product standard",
    },
    explanation:
      "Regulation 421.1.7 requires AFDDs for the specified single-phase final circuits in higher-risk residential buildings, HMOs, purpose-built student accommodation and care homes. AFDDs are recommended more widely, but the old wording describing only a recommendation in combustible locations is obsolete.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29703",
    questionNumber: 27,
    promptSuffix:
      "What is the maximum disconnection time for a 230 volt AC TT system? a- 0.4 seconds",
    correctedPromptSuffix:
      "What maximum disconnection time applies to a 230 V AC TT final circuit covered by the Table 41.1 final-circuit condition?",
    explanation:
      "For a 230 V AC TT final circuit within the Table 41.1 condition, the maximum disconnection time is 0.2 s. The stray '0.4 seconds' text in the original stem contradicted the keyed TT value.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29703",
    questionNumber: 29,
    promptSuffix:
      "Where a PEN conductor is installed it should be identified by the use of the following coloured marks",
    options: {
      A: "Green-and-yellow throughout its length with additional blue marking at the terminations",
    },
    explanation:
      "A PEN conductor combines protective and neutral functions. It is identified green-and-yellow throughout its length with additional blue marking at its terminations, so both functions are unambiguous.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29703",
    questionNumber: 32,
    promptSuffix:
      "With regard to selection of electrical connections, which of the following is appropriate?",
    correctedPromptSuffix:
      "Which listed conductor characteristic must be taken into account when selecting a terminal or connection method under Regulation 526.2?",
    explanation:
      "The terminal or connection method must be suitable for the conductor's cross-sectional area. Regulation 526.2 also considers conductor material, insulation, number and shape of wires and the number of conductors being connected.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29703",
    questionNumber: 33,
    promptSuffix:
      "When a generator set is used as a safety source, it must comply with",
    options: { C: "BS ISO 8528-12" },
    explanation:
      "BS ISO 8528-12 covers reciprocating internal-combustion-engine-driven generating sets used for emergency power supply to safety services. The original option transposed the standard number and named a non-existent 'BS 7698-12'.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29703",
    questionNumber: 42,
    promptSuffix:
      "Whilst carrying out inspection as part of initial verification of an installation, which of the following should not be checked?",
    options: {
      D: "The measured total earth fault loop impedance of every circuit",
    },
    explanation:
      "Erection methods, conductor identification and required diagrams are visual-inspection items. Earth fault loop impedance is established by testing or calculation, not by visual inspection; suitable SPDs, where required, do form part of inspection.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29703",
    questionNumber: 52,
    promptSuffix:
      "Submerged luminaires installed in swimming pools should meet the requirements of",
    options: { B: "BS EN 60598-2-18" },
    explanation:
      "BS EN 60598-2-18 contains the particular product requirements for luminaires used in swimming pools and similar applications. Referring only to the general BS EN 60598 series is less precise than the applicable Part 2-18.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29704",
    questionNumber: 7,
    promptSuffix:
      "Protection against electric shock under single fault conditions is",
    options: { D: "Protection against transient overvoltage" },
    explanation:
      "Protection against electric shock under a single fault condition is fault protection. Basic protection applies in fault-free conditions, while emergency stopping and transient-overvoltage protection address different hazards; the original 'protective separation' wording could be confused with electrical separation as a fault-protection measure.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29704",
    questionNumber: 9,
    promptSuffix:
      "Every installation shall be divided into circuits in order to",
    correctedPromptSuffix:
      "Which listed objective is a valid reason for dividing an installation into circuits?",
    options: {
      A: "To reduce mutual detrimental influence, including electromagnetic disturbance, between circuits",
    },
    explanation:
      "Circuit division can reduce mutual detrimental influence, including electromagnetic disturbance, and limit the consequences of faults. It does not remove insulation faults, reduce energy cost by itself or exist to satisfy one certification body's rules.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29704",
    questionNumber: 47,
    promptSuffix: "The verification of voltage drop may be achieved by",
    correctedPromptSuffix:
      "Which listed method can verify voltage drop from the measured impedance of the circuit conductors?",
    options: { D: "Measuring only the unloaded supply voltage at one point" },
    explanation:
      "Measuring circuit impedance allows voltage drop to be determined for the design current. One unloaded voltage reading provides no loaded voltage difference; functional testing and prospective-fault-current measurement address other characteristics.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29704",
    questionNumber: 57,
    promptSuffix:
      "Heating unit in ceilings shall have a degree of protection of at least",
    options: { A: "IPX1", B: "IPX2", C: "IPX3", D: "IPX4" },
    explanation:
      "A ceiling heating unit requires at least IPX1 protection against vertically falling water drops. The original options reversed the IP characters and described access to hazardous parts rather than water ingress.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29704",
    questionNumber: 16,
    promptSuffix:
      "A 13A socket outlet does NOT need to be additionally protected by an RCD provided it is",
    correctedPromptSuffix:
      "For a 13 A socket-outlet in a non-domestic location not used by BA1, BA2 or BA3 persons, which current Regulation 411.3.3 condition can permit omission of 30 mA RCD protection?",
    options: {
      D: "A suitably documented risk assessment involving a skilled person (electrically) determines the RCD is unnecessary",
    },
    explanation:
      "The limited exception applies only where a suitably documented risk assessment, undertaken with a skilled person (electrically), determines protection is unnecessary. It cannot be used for ordinary persons, children, disabled persons or covered outdoor mobile equipment.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29704",
    questionNumber: 28,
    promptSuffix:
      "The notice relating to an RCD requires the device to be operated via its test button",
    answer: "B",
    explanation:
      "Current Regulation 514.12.2 uses a six-monthly test-button interval. Quarterly was required by older editions, so the original answer key was obsolete; manufacturer instructions may require a different routine for a particular device.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29704",
    questionNumber: 43,
    promptSuffix:
      "The minimum value of insulation resistance and the applied test voltage for a 400 V circuit is",
    answer: "D",
    explanation:
      "A 400 V low-voltage circuit is tested at 500 V DC and must achieve at least 1.0 MΩ under the Table 64 conditions. Option C incorrectly specifies an AC test voltage; insulation-resistance instruments apply DC.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29704",
    questionNumber: 48,
    promptSuffix:
      "A 13A socket-outlet may be installed in a bathroom if it is installed beyond the boundary of zone 1 by a horizontal distance of",
    options: { D: "2.5 m" },
    explanation:
      "Current Regulation 701.512.3 permits a standard low-voltage socket-outlet only where it is at least 2.5 m horizontally from the boundary of zone 1. The former 3 m dimension is obsolete.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29705",
    questionNumber: 4,
    promptSuffix:
      "BS 7671 identifies that the type of wiring system shall be determined after consideration of",
    correctedPromptSuffix:
      "Which listed electromagnetic effect must be considered when selecting and routing a wiring system?",
    options: { B: "The colour of the equipment labels" },
    explanation:
      "Electromagnetic interference must be considered when selecting and routing wiring systems so coupled disturbance is controlled. Label colour does not affect electrical compatibility; voltage drop and earthing remain separate design considerations rather than the electromagnetic effect asked for.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29705",
    questionNumber: 5,
    promptSuffix:
      "Co-ordination of the operating characteristics of two or more protective devices, such that, on the incidence of an overcurrent or residual current within stated limits, the device intended to operate does so, while the other(s) does (do) not, is known as",
    options: { C: "Diversity" },
    explanation:
      "The defined coordination is selectivity: the device closest to the fault operates while upstream devices remain closed. Diversity estimates non-simultaneous load, back-up protection addresses combined breaking performance, and combined short-circuit protection is not this operating sequence; replacing 'discrimination' removes an exact synonym of selectivity.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29705",
    questionNumber: 14,
    promptSuffix:
      "The maximum disconnection time for a TN-S, AC circuit supplying a 63A three-phase socket outlet is",
    correctedPromptSuffix:
      "For a 400/230 V TN-S system, what maximum disconnection time applies to a final circuit supplying a 63 A three-phase socket-outlet?",
    answer: "B",
    explanation:
      "Table 41.1 uses the nominal voltage to Earth Uo. A normal 400/230 V three-phase system has Uo = 230 V, and a final circuit supplying a socket-outlet rated not more than 63 A has a maximum disconnection time of 0.4 s in a TN system.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29705",
    questionNumber: 19,
    promptSuffix:
      "In conditions BD2, BD3 or BD4, switchgear or control gear placed in an escape route shall be",
    correctedPromptSuffix:
      "How does current Chapter 42 address electrical equipment and wiring in protected escape routes?",
    options: {
      A: "It permits any equipment if a 30 mA RCD is fitted",
      B: "It coordinates the electrical measures with the building's documented fire-safety design and protected-escape-route requirements",
      C: "It uses the former BD2, BD3 and BD4 classifications without any fire strategy",
      D: "It prohibits every electrical item, including equipment needed for evacuation",
    },
    explanation:
      "Amendment 2 removed the former BD2, BD3 and BD4 approach. Current Chapter 42 requires the installation design to be coordinated with the documented fire-safety design and applies specific provisions to protected escape routes.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29705",
    questionNumber: 20,
    promptSuffix:
      "In locations of commercial significance, consideration should be given to the use of",
    correctedPromptSuffix:
      "Which listed wiring type has inherent fire resistance and may be selected where a documented fire strategy requires circuit survival during fire?",
    explanation:
      "Mineral-insulated cable manufactured to BS EN 60702 has inherent resistance to fire and high temperature. Its use must still follow the circuit's required survival time, the fire strategy and the appropriate product and installation requirements.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29705",
    questionNumber: 24,
    promptSuffix:
      "Which one of the following is not a consequence of overvoltage requiring protection against transient overvoltages to be provided",
    correctedPromptSuffix:
      "Which listed consequence makes transient-overvoltage protection mandatory under current Regulation 443.4.1?",
    options: {
      A: "A brief inconvenience with no safety, financial or data consequence",
      B: "Minor cosmetic damage that the owner has declared tolerable",
      C: "A tolerable equipment loss whose risk the owner has formally accepted and recorded",
      D: "Serious injury to, or loss of, human life",
    },
    answer: "D",
    explanation:
      "Protection must be provided where an overvoltage could cause serious injury or loss of human life, or significant financial or data loss. For other cases, omission requires the owner's recorded declaration that the possible loss or damage is tolerable and the risk is accepted.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29705",
    questionNumber: 25,
    promptSuffix:
      "The lightning ground flash density value (Ng) relevant to London is",
    correctedPromptSuffix:
      "Under the current Regulation 443.4.1 default, what must an owner state before transient-overvoltage protection is omitted in an otherwise eligible case?",
    options: {
      A: "That the local lightning ground-flash density is below 0.3",
      B: "That possible loss or damage is tolerable and that they accept the risk and consequential loss",
      C: "That the distributor's fuse is rated below 100 A",
      D: "That no electronic equipment will ever be connected",
    },
    explanation:
      "The obsolete CRL and regional ground-flash-density method is no longer the decision rule. For an otherwise eligible case, the owner must declare that possible loss or damage is tolerable and accept the risk of equipment damage and consequential loss; the decision is recorded.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29705",
    questionNumber: 26,
    promptSuffix:
      "Which of the following is not a recognised source of electromagnetic disturbances?",
    correctedPromptSuffix:
      "Which listed action is a recognised way to reduce electromagnetic coupling between power and signal circuits?",
    options: {
      A: "Bundle every power and signal conductor tightly together",
      B: "Provide suitable segregation, routing, screening and bonding for the circuits involved",
      C: "Remove all protective conductors from screened equipment",
      D: "Increase every protective-device rating",
    },
    explanation:
      "Suitable segregation, routing, screening and bonding reduce conducted and radiated coupling between circuits. Motors, transformers, fluorescent lighting and power-electronic loads can all be disturbance sources, so the original 'not a source' options were not reliably exclusive.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29705",
    questionNumber: 27,
    promptSuffix:
      "A main switch intended for operation by ordinary persons, e.g. of a household, shall",
    correctedPromptSuffix:
      "For a single-phase household installation, which main-switch feature ensures that neither live conductor remains connected when the installation is isolated?",
    options: {
      B: "It opens only the line conductor after the load has been removed",
    },
    explanation:
      "The main switch must interrupt both live conductors of the single-phase supply. A suitable switch-disconnector must also be capable of its assigned duty, but the feature asked for here is simultaneous line-and-neutral isolation.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29705",
    questionNumber: 28,
    promptSuffix:
      "A three-phase power cable carrying a current of 15 Amps should be separated from a signal cable by a minimum distance of",
    correctedPromptSuffix:
      "What must be considered when determining separation between a power cable and a signal or communications cable?",
    options: {
      A: "Only the nominal voltage printed on the power cable",
      B: "Only whether the two cables have the same outer colour",
      C: "A universal fixed distance of 0.45 m for every installation",
      D: "Power-circuit current and construction, signal-circuit immunity, screening, routing and the applicable standards or manufacturer data",
    },
    explanation:
      "There is no defensible universal distance from current alone. Required separation depends on the power cable, current, parallel length, containment, screening and the immunity of the signal system, applying Section 444 and the relevant system standards or manufacturer instructions.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29705",
    questionNumber: 52,
    promptSuffix: "The requirements of Section 704 of BS 7671 apply to",
    options: { C: "Construction and demolition site installations" },
    explanation:
      "Section 704 contains the particular requirements for construction and demolition site installations. The original correct option accidentally repeated the question instead of naming the location.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29705",
    questionNumber: 58,
    promptSuffix:
      "In Group 1 and Group 2 Medical locations, the maximum voltage present between simultaneously accessible exposed-conductive-parts and/or extraneous-conductive-parts shall not exceed",
    correctedPromptSuffix:
      "In Group 1 and Group 2 medical locations, what reduced conventional touch-voltage limit applies for AC?",
    answer: "A",
    explanation:
      "The conventional touch-voltage limit in Group 1 and Group 2 medical locations is reduced from the normal 50 V AC to 25 V AC because patients can be particularly vulnerable to electric shock.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29706",
    questionNumber: 7,
    promptSuffix: "Basic protection protects against",
    options: { B: "Electric shock under fault conditions" },
    explanation:
      "Basic protection prevents contact with live parts under normal, fault-free conditions. Fault protection addresses shock risk after a fault; the original distractor's 'fat free' wording was a transcription error that duplicated the intended answer unclearly.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29706",
    questionNumber: 15,
    promptSuffix:
      "The maximum disconnection time for a 400v a.c. final circuit with a TN supply is",
    correctedPromptSuffix:
      "Where the nominal AC voltage to Earth Uo is 400 V, what Table 41.1 maximum disconnection time applies to a TN final circuit covered by that table?",
    explanation:
      "For Uo = 400 V, Table 41.1 gives a maximum TN disconnection time of 0.2 s for the final circuits covered by the table. Stating only a 400 V line-to-line system would be ambiguous because a normal 400/230 V system has Uo = 230 V.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29706",
    questionNumber: 16,
    promptSuffix:
      "The maximum disconnection time for a 230v a.c. circuit with a TN supply is",
    correctedPromptSuffix:
      "What maximum disconnection time normally applies to a 230 V TN distribution circuit under Regulation 411.3.2.3?",
    explanation:
      "A TN distribution circuit normally has a maximum disconnection time of 5 s. Socket-outlet and smaller final circuits covered by Regulation 411.3.2.2 use the shorter Table 41.1 times, so the original unqualified word 'circuit' was ambiguous.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29706",
    questionNumber: 17,
    promptSuffix:
      "When tested at 5 times the rated operating current, an RCD used for additional protection should operate within",
    correctedPromptSuffix:
      "Under current BS 7671 field-testing requirements, within what maximum time should a general non-delay RCD operate when tested at IΔn using an AC test current?",
    options: {
      A: "40 ms",
      B: "200 ms",
      C: "300 ms",
      D: "500 ms",
    },
    answer: "C",
    explanation:
      "The current prescribed field test applies an AC test current at IΔn and requires a general non-delay RCD to operate within 300 ms. The former 5 IΔn/40 ms check is no longer a required BS 7671 field test, though it can be used diagnostically.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29706",
    questionNumber: 20,
    promptSuffix:
      "In the diagram below, a ring final circuit is wired in high impact PVC conduit. The number of single core cables installed in section A to B will be",
    correctedPromptSuffix:
      "At the origin of a single-phase ring final circuit wired entirely in insulated single-core conductors in conduit, how many insulated conductors leave the distribution board for the two legs combined?",
    explanation:
      "Each leg contains line, neutral and circuit protective conductors. Two legs therefore leave the distribution board with six insulated single-core conductors in total; the original stem referred to a missing diagram.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29706",
    questionNumber: 21,
    promptSuffix: "A residual current device (RCD) works by",
    correctedPromptSuffix:
      "Which description best explains the operating principle of an RCD?",
    options: {
      A: "A magnetic summation device trips when the live-conductor currents become sufficiently imbalanced",
      B: "A magnetic device trips only when neutral is connected directly to earth",
      C: "A fusible element melts whenever line current exceeds the circuit rating",
      D: "A thermal element trips whenever neutral current is present",
    },
    explanation:
      "An RCD compares the currents in all live conductors through a summation transformer. A residual imbalance above its operating threshold causes tripping; it does not provide overload protection merely by sensing total current.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29706",
    questionNumber: 23,
    promptSuffix:
      "Protective measures against electric shock can be achieved by automatic disconnection of the supply and in a.c. systems with additional protection by means of an rcd . Which of the following does not require this additional protection by an RCD?",
    correctedPromptSuffix:
      "Which listed socket-outlet may use the current Regulation 411.3.3 risk-assessment exception from 30 mA RCD protection?",
    options: {
      A: "A socket-outlet used by ordinary persons",
      B: "A socket-outlet used by children or disabled persons",
      C: "A socket-outlet in another location where a documented risk assessment involving a skilled person (electrically) justifies omission",
      D: "A socket-outlet supplying covered mobile equipment for use outdoors",
    },
    explanation:
      "The exception is limited to the applicable 'other locations' category and needs a suitably documented risk assessment involving a skilled person (electrically). Supervision alone is no longer an exception, and the risk-assessment route does not override the requirements for BA1, BA2 or BA3 users or covered outdoor mobile equipment.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29706",
    questionNumber: 38,
    promptSuffix: "Outdoor lighting does NOT involve",
    correctedPromptSuffix:
      "Which listed installation is excluded from the scope of BS 7671 Section 714 on outdoor lighting installations?",
    explanation:
      "Section 714 covers fixed outdoor lighting installations such as floodlighting, road traffic signals and certain shelters. Temporary festoon lighting is outside that section's scope and must be designed under the applicable general and temporary-installation requirements.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29706",
    questionNumber: 40,
    promptSuffix:
      "Where a generating set is used as an additional source of supply in parallel with other sources, it shall be installed",
    answer: "C",
    explanation:
      "Current Regulation 551.7.2.1 requires the generating set to be installed on the supply side of all protective devices for the final circuits, and the parallel-source arrangement is subject to additional protection, assembly-rating and compatibility requirements. 'No additional requirements' is incorrect.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29706",
    questionNumber: 51,
    promptSuffix: "Zone 1 in a swimming pool installation is defined as the",
    options: {
      A: "Interior of the swimming pool, which is zone 0",
      B: "Area outside zone 1 extending a further 1.5 m, which is zone 2",
      C: "Any horizontal plane exactly 2 m above the floor",
      D: "Area above and around the basin bounded by the prescribed vertical planes and height, excluding the basin interior",
    },
    explanation:
      "The basin interior is zone 0. Zone 1 is the prescribed area immediately above and around the basin, bounded horizontally from the basin edge and vertically to the defined height; it does not include the water-containing interior as the original option suggested.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29707",
    questionNumber: 7,
    promptSuffix:
      "The maximum disconnection time for a 230v a.c. circuit with a TN supply is",
    correctedPromptSuffix:
      "What maximum disconnection time normally applies to a 230 V AC TN distribution circuit not covered by the shorter final-circuit requirement?",
    options: { B: "0.4 s" },
    explanation:
      "A TN distribution circuit normally has a maximum disconnection time of 5 s. A 0.4 s limit applies to the specified 230 V final circuits, so the original unqualified word 'circuit' made both values potentially defensible.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29707",
    questionNumber: 15,
    promptSuffix:
      "An installation protected by an RCD shall have a fixed notice stating",
    answer: "A",
    explanation:
      "The current Regulation 514.12.2 notice instructs the user to operate the RCD test button every six months. Quarterly operation was specified by older editions; any different manufacturer instruction for a particular device must also be followed.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29707",
    questionNumber: 17,
    promptSuffix:
      "An unprotected cable concealed in a wall at a depth less than 50mm and installed outside the safe zones, shall be provided with",
    correctedPromptSuffix:
      "Which listed wiring method can protect a cable concealed less than 50 mm deep in a wall outside the prescribed zones?",
    options: {
      A: "A BS 3036 fuse alone",
      B: "A BS 88 fuse alone",
      C: "A Type B circuit-breaker alone",
      D: "Earthed metallic conduit or equivalent prescribed mechanical protection",
    },
    explanation:
      "A cable outside the prescribed zones needs one of the recognised protective wiring methods, such as earthed metallic conduit, suitable armour or mechanical protection that prevents penetration. A 30 mA RCD is additional protection and does not, by itself, make this routing permissible.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29707",
    questionNumber: 18,
    promptSuffix:
      "Where a generating set is used as an additional source of supply in parallel with other sources, it shall be installed",
    answer: "C",
    explanation:
      "A generating set operating in parallel is connected on the supply side of the final-circuit protective devices. The parallel-source arrangement is subject to additional requirements for protection, compatibility and assembly ratings, so the original 'no additional requirements' key was incorrect.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29707",
    questionNumber: 23,
    promptSuffix:
      "Socket outlets and hand held equipment rated up to and including 32A can have additional protection in the form of",
    correctedPromptSuffix:
      "Which listed protective measure can supply one item of current-using equipment from a separated source with no connection between the separated circuit and Earth?",
    options: {
      A: "Overcurrent protection alone",
      B: "Class II marking on the source",
      C: "Electrical separation",
      D: "Supplementary bonding alone",
    },
    explanation:
      "Electrical separation is a protective measure in which a separated circuit supplies one item and has no connection to Earth or another circuit's protective conductor. It is not simply an alternative form of the 30 mA RCD additional protection required by Regulation 411.3.3.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29707",
    questionNumber: 25,
    promptSuffix:
      "In an area containing a bath or a shower, socket outlets must be installed",
    options: { B: "At least 2.5 m horizontally from the boundary of zone 1" },
    explanation:
      "A standard low-voltage socket-outlet in a room containing a bath or shower must be at least 2.5 m horizontally from the boundary of zone 1. The former 3 m distance is obsolete under the current bathroom requirements.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29707",
    questionNumber: 35,
    promptSuffix:
      "Every installation should be divided into circuits as necessary to avoid",
    correctedPromptSuffix:
      "Which listed objective is a reason for dividing an installation into circuits?",
    options: {
      B: "To avoid danger and minimise inconvenience in the event of a fault",
    },
    explanation:
      "Circuit division limits the effects of a fault so that danger and loss of service are minimised. It also helps safe isolation, inspection, testing and maintenance; the original option joined two clauses in a way that obscured this objective.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29707",
    questionNumber: 44,
    promptSuffix:
      "Thermoplastic PVC T&E buried less than 50mm must be protected by",
    correctedPromptSuffix:
      "A PVC twin-and-earth cable is concealed less than 50 mm deep in a wall, runs in a prescribed zone and has no earthed metallic covering or equivalent mechanical protection. What additional protection is required?",
    explanation:
      "A cable concealed at this depth in a wall or partition, using the prescribed-zone route but without a recognised protective covering or mechanical protection, requires additional protection by a 30 mA RCD. The added qualifications are essential; depth alone does not create a universal RCD rule for every cable location.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29707",
    questionNumber: 47,
    promptSuffix:
      "Socket outlets with a rating not exceeding 20A for general use by ordinary persons should be",
    correctedPromptSuffix:
      "What additional protection is required for socket-outlets rated not more than 32 A where they are liable to be used by ordinary persons, children or disabled persons?",
    options: { D: "A 30 mA RCD" },
    explanation:
      "Current Regulation 411.3.3 requires additional protection by an RCD rated not more than 30 mA for socket-outlets up to 32 A used by BA1, BA2 or BA3 persons. The old 20 A threshold is obsolete, and the risk-assessment exception does not apply to these users.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29707",
    questionNumber: 49,
    promptSuffix: "Busbar trunking systems must comply with",
    options: { B: "BS EN 61439-6" },
    explanation:
      "BS EN 61439-6 is the current product standard for busbar trunking systems. BS EN 60439-2 was withdrawn and superseded, so the original standard reference was obsolete.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29707",
    questionNumber: 50,
    promptSuffix:
      "The minimum acceptable value for insulation resistance in 230v supply is",
    options: { A: "0.25 MΩ", B: "0.5 MΩ", C: "1.0 MΩ", D: "5.0 MΩ" },
    explanation:
      "For a low-voltage circuit up to and including 500 V, the normal Table 64 minimum insulation resistance is 1.0 MΩ. The original 'MF' unit was not a resistance unit.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29707",
    questionNumber: 51,
    promptSuffix:
      "Insulation resistance measured between line and neutral of a 230v domestic installation should not be less than",
    options: { A: "0.25 MΩ", B: "0.5 MΩ", C: "0.75 MΩ", D: "1.0 MΩ" },
    explanation:
      "The normal minimum insulation resistance for this 230 V circuit is 1.0 MΩ when tested under the Table 64 conditions. The result is expressed in megaohms, MΩ, not 'MF'.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29707",
    questionNumber: 59,
    promptSuffix:
      "For a 100 mA non-delay RCD to BSEN 61008 the residual test currents and maximum permitted disconnection times are",
    correctedPromptSuffix:
      "When a general non-delay 100 mA RCD is field-tested using the current required AC test at IΔn, what maximum operating time applies?",
    options: {
      A: "40 ms",
      B: "130 ms",
      C: "300 ms",
      D: "500 ms",
    },
    explanation:
      "Current BS 7671 field verification uses an AC test current at the RCD's rated residual operating current IΔn. A general non-delay RCD must operate within 300 ms; the former mandatory 5 × IΔn and 40 ms test was deleted by Amendment 2.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29708",
    questionNumber: 21,
    promptSuffix:
      "Which one of the arrangements complies with the IEE Wiring Regulations?",
    options: {
      A: "The firefighter's switch is red, conspicuous and accessible, not more than 2.75 m above the ground, with OFF at the top",
    },
    explanation:
      "A firefighter's switch must be conspicuous and accessible, be coloured red, be mounted no more than 2.75 m above the ground and have the OFF position at the top. The corrected option states the whole arrangement instead of relying on only two incomplete details.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29708",
    questionNumber: 33,
    promptSuffix:
      "The maximum permissible earth fault loop impedance on a TN system for a ring final circuit protected by a 30 A BS 1361 fuse is:",
    options: { A: "1.15 Ω", B: "1.2 Ω", C: "1.92 Ω", D: "2.76 Ω" },
    explanation:
      "For the stated BS 1361 fuse and disconnection condition, the listed maximum earth fault loop impedance is 1.15 Ω. Earth fault loop impedance is measured in ohms; the original 'F' suffix was a corrupt unit.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29708",
    questionNumber: 44,
    promptSuffix:
      "Which on of the following insulation resistance test results, meets the minimum acceptable value for an installation with a 400 V supply?",
    correctedPromptSuffix:
      "Which of the following is the minimum acceptable insulation-resistance result for an installation with a 400 V supply under the normal Table 64 test conditions?",
    options: { A: "0.25 MΩ", B: "0.5 MΩ", C: "1.0 MΩ", D: "5.0 MΩ" },
    explanation:
      "A 400 V low-voltage circuit is normally tested at 500 V DC and must achieve at least 1.0 MΩ. The original options used 'MF', which is not the unit of insulation resistance.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29709",
    questionNumber: 7,
    promptSuffix:
      "Which one of the following external influences requires an increase in the current ratings of cables above those normally required?",
    correctedPromptSuffix:
      "Which listed external influence can require a cable with a larger tabulated current-carrying capacity than the uncorrected design current?",
    explanation:
      "High ambient temperature reduces a cable's permitted current-carrying capacity, so an ambient-temperature rating factor below one can require selection of a larger conductor. The cable's intrinsic rating is not increased by the heat; the original wording reversed that relationship.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29709",
    questionNumber: 23,
    promptSuffix:
      "Lz is the current rating of a circuit conductor. The requirements for overload current protection are fulfilled when:",
    correctedPromptSuffix:
      "Iz is the current-carrying capacity of a conductor. Which set of values satisfies Ib ≤ In ≤ Iz?",
    options: {
      A: "Ib = 18 A, In = 15 A, Iz = 15 A",
      B: "Ib = 22 A, In = 25 A, Iz = 18 A",
      C: "Ib = 8 A, In = 10 A, Iz = 8 A",
      D: "Ib = 9 A, In = 15 A, Iz = 17 A",
    },
    explanation:
      "Only 9 A ≤ 15 A ≤ 17 A satisfies the overload-coordination condition Ib ≤ In ≤ Iz. The original text corrupted the standard symbols by printing lowercase 'l' in place of capital I.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29709",
    questionNumber: 34,
    promptSuffix:
      "Correct co-ordination between conductors and overcurrent protection device is achieved when:",
    correctedPromptSuffix:
      "Which inequality is one of the required overload-coordination conditions between design current Ib and protective-device rating In?",
    options: {
      A: "Ib > Iz",
      B: "In > Iz",
      C: "Ib ≤ In",
      D: "I2 > 1.45 Iz",
    },
    explanation:
      "One required condition is Ib ≤ In: the protective-device rating must not be lower than the circuit design current. Full coordination also requires In ≤ Iz and I2 ≤ 1.45 Iz; the original options contained corrupted symbols and a self-referential inequality.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29709",
    questionNumber: 39,
    promptSuffix:
      "A circuit is connected to a TN system, the maximum permissible earth fault loop impedance (Zs) for a 32 A socket outlet circuit protected by a BS 88 fuse is:",
    options: { A: "0.92 Ω", B: "1.04 Ω", C: "1.09 Ω", D: "1.44 Ω" },
    explanation:
      "For the stated 32 A BS 88 fuse and final-circuit disconnection condition, the listed maximum Zs is 1.04 Ω. Impedance is expressed in ohms, so the original 'F' suffix was a corrupt unit.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29709",
    questionNumber: 51,
    promptSuffix:
      "For an insulation resistance test on a 230 V ac installation containing surge protected socket-outlets, the value of the test voltage may be:",
    options: { A: "1000 V DC", B: "250 V DC", C: "460 V DC", D: "500 V DC" },
    explanation:
      "Where connected SPDs cannot reasonably be disconnected, the insulation-resistance test voltage may be reduced to 250 V DC, with the required minimum resistance still met. The original options omitted the voltage unit.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29709",
    questionNumber: 52,
    promptSuffix:
      "When a 30 mA residual current device used to provide additional protection is tested at a residual current of 150 mA, the device should open in no more than:",
    correctedPromptSuffix:
      "When a general non-delay 30 mA RCD is field-tested using the current required AC test at IΔn, what maximum operating time applies?",
    options: { C: "300 ms" },
    explanation:
      "Current field verification applies an AC test current at IΔn and requires a general non-delay RCD to operate within 300 ms. Amendment 2 deleted the former prescribed 5 × IΔn test at 150 mA and its 40 ms criterion.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29709",
    questionNumber: 53,
    promptSuffix:
      "The minimum value of insulation resistance when measured at the consumer unit of a 230 V domestic installation is:",
    options: { A: "0.25 MΩ", B: "0.5 MΩ", C: "1.0 MΩ", D: "5.0 MΩ" },
    explanation:
      "For a 230 V low-voltage installation under the normal Table 64 test conditions, the minimum insulation resistance is 1.0 MΩ. The original 'MF' options used the wrong unit.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29710",
    questionNumber: 23,
    promptSuffix:
      "The means of isolation for a particular item of equipment may be installed in a position remote from that equipment, providing that it:",
    correctedPromptSuffix:
      "Where a remote means of isolation cannot be continuously supervised by the person working on the equipment, what feature is required?",
    options: {
      A: "A common master key available to all site users",
      B: "A means of securing it in the OFF position under the control of the person doing the work",
      C: "A display near the equipment with no means of securing the isolator",
      D: "Automatic reclosing after a short delay",
    },
    explanation:
      "A remote isolator that is not under continuous supervision must be capable of being secured in the open or OFF position so another person cannot restore the supply. The safety requirement is control of the lock-off by the person doing the work, not a particular universal 'unique key' design.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29710",
    questionNumber: 24,
    promptSuffix:
      "A firefighter's switch should be installed at not more than:",
    options: {
      B: "2.75 m above the ground, conspicuous and accessible, with the OFF position at the top",
    },
    explanation:
      "A firefighter's switch is mounted no more than 2.75 m above the ground, where it is conspicuous and accessible, and its OFF position is at the top. It is also coloured red and durably marked for its purpose.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29710",
    questionNumber: 28,
    promptSuffix:
      "Which one of the following external influences requires an increase in the current ratings of cables above those normally required?",
    correctedPromptSuffix:
      "Which listed external influence can require selection of a cable with a larger tabulated current-carrying capacity than the uncorrected design current?",
    explanation:
      "High ambient temperature reduces the current a cable may safely carry, so the ambient correction factor can require a larger conductor. Heat does not increase a cable's current rating; the original wording described the design response imprecisely.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29710",
    questionNumber: 34,
    promptSuffix:
      "Where ADS is the means of providing fault protection and a 20 A type B circuit breaker to BS EN 60898 is used, the maximum earth fault loop impedance is:",
    options: { A: "0.37 Ω", B: "1.15 Ω", C: "2.18 Ω", D: "2.87 Ω" },
    explanation:
      "For a 230 V TN circuit protected by a 20 A Type B breaker, the current BS 7671 value follows 230 V × 0.95 divided by 5 × 20 A, giving 2.18 Ω. The original 2.3 value omitted the minimum-voltage factor, and 'F' was not a valid impedance unit.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29710",
    questionNumber: 37,
    promptSuffix:
      "By employing an RCD protected socket-outlet to supply a Class II portable tool, the user is:",
    options: {
      C: "Provided with additional protection if carelessness or damage exposes a live conductor",
    },
    explanation:
      "A 30 mA RCD supplements the tool's basic and fault protection if damage or carelessness exposes a live conductor. This is called additional protection, not 'additional fault protection'; it does not replace the Class II construction.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29710",
    questionNumber: 45,
    promptSuffix:
      "When testing a 230V installation, the minimum value of insulation resistance is:",
    options: { A: "0.5 Ω", B: "0.5 MΩ", C: "1 Ω", D: "1 MΩ" },
    explanation:
      "Under the normal Table 64 test conditions, a 230 V installation must achieve at least 1 MΩ insulation resistance. The corrected options distinguish ohms from megaohms instead of using the corrupt 'F' notation.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29710",
    questionNumber: 47,
    promptSuffix:
      "The inspecting and testing required during a periodic inspection should be recorded on a Periodic Inspection Report and carried out by:",
    correctedPromptSuffix:
      "The inspection and testing for an Electrical Installation Condition Report must be carried out by whom?",
    options: { A: "A skilled person competent in such work" },
    explanation:
      "An EICR must be based on inspection and testing by a skilled person competent in that work. 'Periodic Inspection Report' is an obsolete title, and competence requires appropriate knowledge, experience and test skills rather than merely holding a job title.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29711",
    questionNumber: 23,
    promptSuffix:
      "Where the overcurrent device is intended to afford protection against overload, l2 must not exceed lz multiplied by:",
    correctedPromptSuffix:
      "Where an overcurrent device provides overload protection, I2 must not exceed Iz multiplied by what factor?",
    explanation:
      "The required relationship is I2 ≤ 1.45 Iz, where I2 is the current causing effective operation of the protective device and Iz is the conductor's current-carrying capacity. The original text used lowercase 'l' in place of capital I.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29711",
    questionNumber: 34,
    promptSuffix:
      "A final circuit supplying 13 A socket-outlets is to be used by ordinary persons. The circuit must be provided with:",
    options: {
      B: "Additional protection by a 30 mA RCD in accordance with Regulation 415.1",
      C: "An RCD of any residual-current rating",
    },
    explanation:
      "Socket-outlets up to 32 A liable to be used by ordinary persons require additional protection by an RCD rated not more than 30 mA. Merely saying 'an RCD' is insufficient because higher residual-current ratings do not meet the additional-protection requirement.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29711",
    questionNumber: 35,
    promptSuffix:
      "Socket outlets which are under the supervision of skilled persons:",
    correctedPromptSuffix:
      "For a socket-outlet in a location not used by BA1, BA2 or BA3 persons, when can the current Regulation 411.3.3 exception permit omission of 30 mA RCD protection?",
    options: {
      A: "When a documented risk assessment involving a skilled person (electrically) determines it is unnecessary",
      B: "Whenever the socket is supervised, with no record required",
      C: "Whenever the socket complies with BS EN 60309",
      D: "Whenever the circuit has a five-second disconnection time",
    },
    explanation:
      "Skilled supervision by itself is no longer an exception. In the applicable 'other locations' category, omission needs a suitably documented risk assessment undertaken with the involvement of a skilled person (electrically); it cannot override the requirements for BA1, BA2 or BA3 users.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29711",
    questionNumber: 41,
    promptSuffix:
      "On a mobile or transportable unit, plugs used to connect the unit to the supply shall comply with BE EN 60309-2 and:",
    correctedPromptSuffix:
      "On a mobile or transportable unit, plugs used to connect the unit to the supply shall comply with BS EN 60309-2 and which additional requirement?",
    explanation:
      "The appliance inlet and its enclosure must provide at least IP44 protection. The corrected stem fixes the product-standard typo from 'BE EN' to BS EN 60309-2.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29711",
    questionNumber: 42,
    promptSuffix:
      "The fault current due to an earth fault of negligible impedance in a 400 V, three phase, four wire circuit having an earth fault loop impedance of 0.3 F is:",
    correctedPromptSuffix:
      "What fault current flows for a negligible-impedance line-to-earth fault in a 400/230 V three-phase four-wire circuit with an earth fault loop impedance of 0.3 Ω?",
    explanation:
      "A line-to-earth fault uses the 230 V line-to-earth voltage, so I = 230 V ÷ 0.3 Ω = 766.7 A, approximately 766.6 A. The original 'F' suffix was not an impedance unit and the voltage basis was left implicit.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29711",
    questionNumber: 48,
    promptSuffix:
      "When carrying out an insulation resistance test on a 230 V socket outlet circuit incorporating surge protective devices (SPD), the test voltage may be reduced to:",
    correctedPromptSuffix:
      "When connected SPDs cannot reasonably be disconnected from a 230 V socket-outlet circuit, to what DC value may the insulation-resistance test voltage be reduced?",
    options: { A: "1000 V DC", B: "250 V DC", C: "50 V DC", D: "500 V DC" },
    explanation:
      "Where SPDs or other voltage-sensitive equipment cannot reasonably be disconnected, the insulation-resistance test voltage may be reduced to 250 V DC, while the required minimum resistance must still be achieved.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29711",
    questionNumber: 50,
    promptSuffix:
      "For circuits having a nominal voltage above 500 V, the minimum insulation resistance is:",
    options: { A: "0.25 MΩ", B: "0.5 MΩ", C: "1 MΩ", D: "5 MΩ" },
    explanation:
      "A circuit above 500 V is normally tested at 1000 V DC and must achieve at least 1 MΩ. The original 'MF' notation was not a resistance unit.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29712",
    questionNumber: 31,
    promptSuffix:
      "If it is necessary to remove a barrier or open an enclosure or remove parts of enclosures, this shall be possible?",
    correctedPromptSuffix:
      "Which statement correctly describes access through a barrier or enclosure that provides basic protection?",
    options: {
      A: "Access may require a key or tool, automatic isolation before opening, or an intermediate IPXXB/IP2X barrier",
      B: "Any person may open it without a key, tool or isolation",
      C: "A warning label alone permits unrestricted access",
      D: "The enclosure may be opened while leaving directly accessible live parts energised",
    },
    answer: "A",
    explanation:
      "Access is controlled by one of the permitted safeguards: a key or tool, disconnection before opening with restoration prevented until reclosure, or an intermediate barrier providing at least IPXXB or IP2X. The original 'any of the three means' option was not self-contained.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29712",
    questionNumber: 42,
    promptSuffix:
      "Identify one of the following which would be classed as a Group 2 medical location?",
    answer: "C",
    explanation:
      "An intensive care room is a Group 2 medical location because vital treatment and continuity of supply can be critical to life. A physiotherapy room is not automatically Group 2; classification depends on intended medical procedures and risk, and the original key was incorrect.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29712",
    questionNumber: 50,
    promptSuffix:
      "Simultaneously accessible exposed-conductive-parts shall be connected to?",
    options: {
      C: "The same earthing system only in groups, never individually",
      D: "The same earthing system only individually, never in groups",
    },
    explanation:
      "Simultaneously accessible exposed-conductive-parts must connect to the same earthing system, whether individually, in groups or collectively. A shared earth reference prevents a person touching two metal parts at dangerously different potentials during a fault.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29712",
    questionNumber: 53,
    promptSuffix:
      "In an IT system, the DC touch voltage will be limited by which condition?",
    options: {
      A: "RA × Id ≤ 120 V",
      B: "RA × Id ≤ 50 V",
      C: "RA × Id ≤ 55 V",
      D: "RA × Id ≥ 120 V",
    },
    explanation:
      "For the first fault in a general IT system, the resistance of exposed-conductive-parts to Earth and the first-fault current must satisfy RA × Id ≤ 120 V for DC. The original answer incorrectly claimed that no touch-voltage limitation is considered.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29712",
    questionNumber: 54,
    promptSuffix:
      "In AC systems, additional protection by means of an RCD shall be provided for?",
    correctedPromptSuffix:
      "Under current Regulation 411.3.3, which listed loads require additional protection by an RCD rated not more than 30 mA?",
    options: {
      A: "Covered socket-outlets and mobile equipment for outdoor use, each rated not more than 32 A",
      B: "Only socket-outlets rated not more than 20 A",
      C: "Only mobile outdoor equipment rated not more than 20 A",
      D: "Only socket-outlets specifically labelled for one item of equipment",
    },
    explanation:
      "The current threshold is 32 A for covered socket-outlets and for mobile equipment used outdoors. Socket-outlets used by BA1, BA2 or BA3 persons are always covered; the limited risk-assessment exception applies only to the applicable other-location socket category.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29712",
    questionNumber: 57,
    promptSuffix:
      "Under what circumstances can a switching device be inserted in a protective conductor?",
    correctedPromptSuffix:
      "In a multi-source installation, when may a switching device be inserted between a source neutral point and that source's means of earthing?",
    options: {
      A: "When a linked multipole arrangement switches the earthing connection at substantially the same time as the related live conductors and preserves the required switching sequence",
      B: "Whenever an ordinary single-pole switch is convenient",
      C: "Whenever the circuit protective conductor carries no load current",
      D: "Only after permanently disconnecting every protective conductor",
    },
    answer: "A",
    explanation:
      "The controlled exception concerns switching a source earthing connection in a multi-source arrangement, using linked or interlocked switching that preserves the required connection and disconnection sequence. It is not general permission to insert an ordinary switch in a circuit protective conductor.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29713",
    questionNumber: 1,
    promptSuffix:
      "The maximum measured ZS value for a BS EN 60898 16A Type B circuit breaker is?",
    correctedPromptSuffix:
      "What is the BS 7671 maximum permitted Zs for a 230 V circuit protected by a 16 A Type B circuit-breaker to BS EN 60898?",
    explanation:
      "The maximum permitted value is 230 V × 0.95 divided by 5 × 16 A, which gives 2.73 Ω. A design or measured-value allowance may be applied in guidance to account for conductor heating, so removing the unqualified word 'measured' avoids confusing that allowance with the BS 7671 limit.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29713",
    questionNumber: 3,
    promptSuffix: "A PEN conductor when insulated shall be identified with?",
    correctedPromptSuffix: "How must an insulated PEN conductor be identified?",
    options: {
      A: "Blue insulation throughout its length",
      B: "Green-and-yellow insulation throughout its length only",
      C: "Green-and-yellow throughout its length with additional blue marking at the terminations",
      D: "Green insulation with blue marking at the terminations",
    },
    explanation:
      "A PEN conductor combines protective and neutral functions. It is identified green-and-yellow throughout its length and additionally marked blue at its terminations so both functions are clear.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29713",
    questionNumber: 34,
    promptSuffix:
      "High-density livestock rearing is breading and rearing of livestock?",
    correctedPromptSuffix: "What defines high-density livestock rearing?",
    explanation:
      "High-density livestock rearing is breeding and rearing for which automatic life-support systems are necessary. The corrected wording removes the 'breading' typo and focuses on the defining dependence on life-support systems.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29713",
    questionNumber: 39,
    promptSuffix:
      "Correct co-ordination between overcurrent protection device and conductor is achieved when?",
    correctedPromptSuffix:
      "Which listed relationship is required for overload coordination between a protective device and its conductor?",
    options: {
      A: "Iz is not less than In",
      B: "Ib is greater than Iz",
      C: "In is greater than Iz",
      D: "Circuit installation alone guarantees coordination",
    },
    explanation:
      "The conductor current-carrying capacity Iz must be at least the protective-device rating In. Full overload coordination also requires Ib ≤ In and I2 ≤ 1.45 Iz; the original options corrupted the capital-I symbols.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29713",
    questionNumber: 40,
    promptSuffix:
      "If a conduit penetrates elements of the building structure having a specified fire resistance, then?",
    correctedPromptSuffix:
      "How must a conduit penetration through a fire-resisting building element be sealed?",
    options: {
      A: "Both around the conduit and internally where necessary to maintain the element's fire resistance",
      B: "Only on whichever side is easiest to reach",
      C: "Externally only, leaving an open path through the conduit",
      D: "Internally only, leaving the opening around the conduit unsealed",
    },
    explanation:
      "The penetration must be sealed so the specified fire resistance of the building element is maintained. That requires sealing around the conduit and, where the conduit could carry fire or smoke through the barrier, sealing the internal path as well.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29713",
    questionNumber: 41,
    promptSuffix:
      "To prevent unintentional closure of an isolation device which location would not be suitable?",
    correctedPromptSuffix:
      "Which listed arrangement does not, by itself, prevent an isolation device from being unintentionally reclosed?",
    options: {
      C: "Merely locating the device inside an unlocked consumer unit",
    },
    explanation:
      "An isolation device can be kept under the worker's immediate control, secured in a lockable space or padlocked OFF. Simply placing it in an unlocked consumer unit provides no control against another person reclosing it.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29713",
    questionNumber: 46,
    promptSuffix:
      "Where an electrical installation includes a PV power supply system without at least simple separation between the AC side and the DC side, fault protection by ADS shall be provided by?",
    correctedPromptSuffix:
      "Where an RCD is required for fault protection of a PV AC supply circuit and neither the inverter nor the installation provides at least simple separation between AC and DC, which RCD type is required?",
    explanation:
      "A Type B RCD is selected where the lack of simple separation can allow smooth DC residual current to affect the AC side. It remains effective with residual waveforms that can blind Type AC or Type A devices; the inverter manufacturer's instructions must also be followed.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29714",
    questionNumber: 21,
    promptSuffix:
      "Which one of the arrangements complies with the IEE Wiring Regulations?",
    options: {
      A: "The firefighter's switch is red, conspicuous and accessible, not more than 2.75 m above the ground, with OFF at the top",
    },
    explanation:
      "A firefighter's switch must be red, conspicuous and accessible, be mounted no more than 2.75 m above the ground and have OFF at the top. The corrected option states the complete arrangement.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29714",
    questionNumber: 33,
    promptSuffix:
      "The maximum permissible earth fault loop impedance on a TN system for a ring final circuit protected by a 30 A BS 1361 fuse is:",
    options: { A: "1.15 Ω", B: "1.2 Ω", C: "1.92 Ω", D: "2.76 Ω" },
    explanation:
      "For the stated 30 A BS 1361 fuse and disconnection condition, the listed maximum earth fault loop impedance is 1.15 Ω. The original 'F' suffix was a corrupt unit.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29714",
    questionNumber: 44,
    promptSuffix:
      "Which on of the following insulation resistance test results, meets the minimum acceptable value for an installation with a 400 V supply?",
    correctedPromptSuffix:
      "Which value is the minimum acceptable insulation-resistance result for a 400 V installation under the normal Table 64 test conditions?",
    options: { A: "0.25 MΩ", B: "0.5 MΩ", C: "1.0 MΩ", D: "5.0 MΩ" },
    explanation:
      "A 400 V low-voltage circuit is normally tested at 500 V DC and must achieve at least 1.0 MΩ. The original 'MF' notation was not a resistance unit.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29715",
    questionNumber: 14,
    promptSuffix:
      "Thermoplastic PVC T&E buried less than 50mm must be protected by:",
    correctedPromptSuffix:
      "A PVC twin-and-earth cable is concealed less than 50 mm deep in a wall, runs in a prescribed zone and has no earthed metallic covering or equivalent mechanical protection. What additional protection is required?",
    explanation:
      "A cable concealed in this wall or partition route requires additional protection by a 30 mA RCD. The original depth-only statement was too broad because the requirements depend on the location, prescribed zone and protective wiring method.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29715",
    questionNumber: 17,
    promptSuffix:
      "Socket outlets with a rating not exceeding 20A for general use by ordinary persons should be:",
    correctedPromptSuffix:
      "What additional protection is required for socket-outlets rated not more than 32 A where they are liable to be used by ordinary persons, children or disabled persons?",
    options: { D: "A 30 mA RCD" },
    explanation:
      "Current Regulation 411.3.3 requires a 30 mA RCD for covered socket-outlets up to 32 A used by BA1, BA2 or BA3 persons. The original 20 A threshold is obsolete, and the limited risk-assessment exception does not apply to these users.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29715",
    questionNumber: 19,
    promptSuffix: "Busbar trunking systems must comply with:",
    options: { B: "BS EN 61439-6" },
    explanation:
      "BS EN 61439-6 is the current product standard for busbar trunking systems. The former BS EN 60439-2 reference was withdrawn and superseded.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29715",
    questionNumber: 20,
    promptSuffix:
      "The minimum acceptable value for insulation resistance in 230v supply is:",
    options: { A: "0.25 MΩ", B: "0.5 MΩ", C: "1.0 MΩ", D: "5.0 MΩ" },
    explanation:
      "A 230 V low-voltage circuit must normally achieve at least 1.0 MΩ under the Table 64 test conditions. Insulation resistance is expressed in megaohms, MΩ, not 'MF'.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29715",
    questionNumber: 21,
    promptSuffix:
      "Insulation resistance measured between line and neutral of a 230v domestic installation should not be less than:",
    options: { A: "0.25 MΩ", B: "0.5 MΩ", C: "0.75 MΩ", D: "1.0 MΩ" },
    explanation:
      "The normal minimum insulation resistance for the stated 230 V circuit is 1.0 MΩ. The original options used an invalid 'MF' suffix instead of the resistance unit MΩ.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29715",
    questionNumber: 29,
    promptSuffix:
      "For a 100 mA non-delay RCD to BSEN 61008 the residual test currents and maximum permitted disconnection times are:",
    correctedPromptSuffix:
      "When a general non-delay 100 mA RCD is field-tested using the current required AC test at IΔn, what maximum operating time applies?",
    options: { A: "40 ms", B: "130 ms", C: "300 ms", D: "500 ms" },
    explanation:
      "Current field verification uses an AC test at the rated residual operating current IΔn. A general non-delay RCD must operate within 300 ms; the former mandatory 5 × IΔn and 40 ms test was deleted by Amendment 2.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29715",
    questionNumber: 39,
    promptSuffix:
      "Protection against transient overvoltages need not be provided where the consequence caused by overvoltage could",
    correctedPromptSuffix:
      "For a case not involving serious injury, loss of life, or significant financial or data loss, when may transient-overvoltage protection be omitted under the current rule?",
    options: {
      A: "When the owner declares the possible loss or damage tolerable, accepts the risk and the decision is recorded",
      B: "Whenever no public service would be interrupted",
      C: "Whenever the installation is a dwelling",
      D: "Whenever no lightning strike occurred in the previous year",
    },
    explanation:
      "The current default is to provide protection. In the remaining cases, it may be omitted only where the owner declares that the possible loss or damage is tolerable, accepts the risk and the decision is recorded on the certification; the old consequence-only option was incomplete.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29715",
    questionNumber: 45,
    promptSuffix:
      "RCDs have to are required to have the button marked 'T' or 'Test' pressed for mechanical operation every",
    correctedPromptSuffix:
      "Under the current standard notice, how often should the user press an RCD button marked 'T' or 'Test', unless the manufacturer specifies otherwise?",
    explanation:
      "The current notice states that the test button should be operated every six months. The corrected stem removes duplicated words and acknowledges that the manufacturer's instructions for a particular device still apply.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29715",
    questionNumber: 54,
    promptSuffix: "Measuring instruments should be in accordance with",
    answer: "D",
    explanation:
      "Test instruments used for BS 7671 verification should comply with the relevant parts of BS EN 61557. BS 3036 is a fuse standard, not a measuring-instrument standard, so the original key was wrong.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29715",
    questionNumber: 55,
    promptSuffix:
      "When completing an Electrical Installation Certificate which of the following can only be ascertained by enquiry or measurement",
    correctedPromptSuffix:
      "Which listed numerical supply characteristic cannot be established by visual inspection alone and must be determined by enquiry, calculation or measurement?",
    answer: "C",
    explanation:
      "Prospective fault current is a numerical characteristic of the supply at the origin and must be established by enquiry, calculation or measurement. Earthing arrangement and supply protective-device markings can often be identified by inspection, while maximum demand is a design assessment.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29715",
    questionNumber: 57,
    promptSuffix:
      "Zone 1 extends horizontally from the side of a bath for a distance of",
    correctedPromptSuffix:
      "How far does zone 2 extend horizontally beyond the boundary of zone 1 around a bath?",
    explanation:
      "Zone 2 extends 0.6 m horizontally beyond zone 1. Zone 1 itself is bounded by the vertical plane around the bath or shower, so the original stem incorrectly attributed the 0.6 m extension to zone 1.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29715",
    questionNumber: 59,
    promptSuffix:
      "A 230V circuit is protected by a 50A Type B circuit-breaker to BS EN 6089The minimum value of fault current to ensure compliance with maximum disconnection times is",
    correctedPromptSuffix:
      "For instantaneous operation, what minimum fault current is required by a 50 A Type B circuit-breaker to BS EN 60898?",
    explanation:
      "A Type B circuit-breaker uses 5 In for the fault-current value that ensures instantaneous operation. For a 50 A device, 5 × 50 A = 250 A; the corrected stem restores the missing digit, spacing and punctuation in BS EN 60898.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29708",
    questionNumber: 40,
    promptSuffix:
      "Circuit cables required to carry the starting, accelerating and load currents of motors shall have a current rating not less than:",
    options: {
      A: "0.5 × full-load current",
      B: "0.75 × full-load current",
      C: "0.9 × full-load current",
      D: "Full-load current",
    },
    explanation:
      "A motor-circuit cable must carry at least the motor's full-load current continuously. Starting and acceleration currents are higher but brief and are handled through thermal design and protective-device coordination; each lower multiplier would permit continuous overheating.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29714",
    questionNumber: 40,
    promptSuffix:
      "Circuit cables required to carry the starting, accelerating and load currents of motors shall have a current rating not less than:",
    options: {
      A: "0.5 × full-load current",
      B: "0.75 × full-load current",
      C: "0.9 × full-load current",
      D: "Full-load current",
    },
    explanation:
      "A motor-circuit cable must carry at least the motor's full-load current continuously. Starting and acceleration currents are higher but brief and are handled through thermal design and protective-device coordination; each lower multiplier would permit continuous overheating.",
  },
  {
    examId: "18th-edition",
    variantId: "quiz-29715",
    questionNumber: 42,
    promptSuffix:
      "The requirements for both basic and fault protection can be provided by SELV. One suitable source of SELV would be a",
    options: {
      C: "50 V generator with one pole connected to Earth",
    },
    explanation:
      "A 50 V storage battery can provide an independent, unearthed extra-low-voltage source and therefore meet SELV source requirements. A 230 V generator is above the SELV voltage band, a 230/110 V transformer output is too high, and earthing one pole of a 50 V generator makes the arrangement PELV rather than SELV.",
  },
] as const satisfies readonly ExamQuestionCorrection[];
