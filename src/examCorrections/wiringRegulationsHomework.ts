import type { ExamQuestionCorrection } from "./types";

const examId = "18th-edition";
const variantId = "wiring-regulations-homework";

export const wiringRegulationsHomeworkCorrections = [
  {
    examId,
    variantId,
    questionNumber: 1,
    promptSuffix: "When provided, where must an AFDD be installed?",
    explanation:
      "An AFDD is fitted at the origin of the final circuit it protects so it can monitor the circuit conductors and disconnect the circuit when dangerous arc-fault signatures are detected.",
  },
  {
    examId,
    variantId,
    questionNumber: 2,
    promptSuffix: "Electric shock protection is not achieved by which of the following?",
    explanation:
      "Coordinating conductors with overload protective devices protects against excessive current and overheating; it is not itself a protective measure against electric shock. Class II equipment, automatic disconnection and SELV are recognised shock-protection measures.",
  },
  {
    examId,
    variantId,
    questionNumber: 3,
    promptSuffix:
      "Which RCD will trip on alternating sinusoidal residual current and on residual pulsating direct current, suddenly applied or smoothly increasing only?",
    options: { A: "Type AC" },
    explanation:
      "A Type A RCD responds to sinusoidal AC residual current and pulsating DC residual current, whether suddenly applied or smoothly increasing. Type AC covers sinusoidal AC only, while Types F and B cover additional waveforms.",
  },
  {
    examId,
    variantId,
    questionNumber: 4,
    promptSuffix: "A switch which does not necessarily isolate all live conductors is called what?",
    explanation:
      "Functional switching controls equipment during normal operation and need not provide the all-pole separation required for isolation. Isolation and switching for maintenance have separate safety duties.",
  },
  {
    examId,
    variantId,
    questionNumber: 5,
    promptSuffix:
      "A method of protection against electric shock using basic protection, ascertained during initial verification is which of the following?",
    correctedPromptSuffix:
      "Which protective measure against electric shock relies on basic protection whose effectiveness is confirmed during initial verification?",
    explanation:
      "Protection by obstacles prevents unintentional contact with live parts and is a basic-protection measure for controlled locations. Its arrangement and effectiveness must be confirmed during initial verification.",
  },
  {
    examId,
    variantId,
    questionNumber: 6,
    promptSuffix: "A conductor intended to be energised is called?",
    correctedPromptSuffix: "What is a conductor or conductive part intended to be energised in normal use called?",
    explanation:
      "A live part is a conductor or conductive part intended to be energised in normal operation, including a neutral conductor but normally excluding a PEN, PEM or PEL conductor.",
  },
  {
    examId,
    variantId,
    questionNumber: 7,
    promptSuffix:
      "In order to avoid the use of an RCD for additional protection for a cable buried 35mm in a wall in safe zones, what can be used?",
    correctedPromptSuffix:
      "For a cable concealed 35 mm deep in a wall and routed in a prescribed zone, which wiring method can remove the specific 30 mA RCD requirement for concealed cables?",
    explanation:
      "A cable enclosed in earthed metallic conduit has a protective covering that is connected to the protective-conductor system. That is one of the recognised wiring methods that avoids relying solely on the concealed-cable 30 mA RCD provision.",
  },
  {
    examId,
    variantId,
    questionNumber: 8,
    promptSuffix:
      "If the protective conductor is of the same material as the 35mm² line conductor of a circuit, what minimum CSA must it be?",
    correctedPromptSuffix:
      "Using Table 54.7, what minimum cross-sectional area is required for a protective conductor of the same material as a 35 mm² line conductor?",
    explanation:
      "Table 54.7 requires a 16 mm² protective conductor where the line conductor is greater than 16 mm² but not greater than 35 mm² and both conductors are of the same material.",
  },
  {
    examId,
    variantId,
    questionNumber: 9,
    promptSuffix:
      "Which of the following shall be considered when determining the frequency of periodic inspection and testing?",
    explanation:
      "The frequency and quality of maintenance affect how quickly defects are likely to develop or remain undetected, so they are part of the risk-based decision used to set the periodic inspection interval.",
  },
  {
    examId,
    variantId,
    questionNumber: 10,
    promptSuffix: "To prevent indirect energising of a circuit, what must be done?",
    explanation:
      "Dividing an installation into appropriately arranged circuits helps prevent a circuit from being energised indirectly through another circuit or source. The division must account for every supply and interconnection.",
  },
  {
    examId,
    variantId,
    questionNumber: 11,
    promptSuffix: "Through wiring of a luminaire is not allowed?",
    correctedPromptSuffix: "When is through-wiring of a luminaire permitted?",
    explanation:
      "Through-wiring is permitted only where the luminaire is designed to accommodate the conductors and terminals safely, including the resulting heat, mechanical protection and terminal capacity.",
  },
  {
    examId,
    variantId,
    questionNumber: 12,
    promptSuffix: "Semiconductor devices can be used as an isolating device unless?",
    correctedPromptSuffix: "Can a semiconductor device be used as an isolating device?",
    options: {
      A: "No; a semiconductor device must not be used for isolation",
    },
    explanation:
      "A semiconductor device must not be used as the means of isolation because it can retain leakage paths or fail without providing a reliable physical separation of the supply.",
  },
  {
    examId,
    variantId,
    questionNumber: 13,
    promptSuffix:
      "A distribution circuit supplying a garage, connected to a 230V A.C. TN system has a maximum disconnection time off?",
    correctedPromptSuffix:
      "What is the maximum disconnection time for a distribution circuit supplying a garage on a 230 V AC TN system?",
    explanation:
      "For a TN system, a distribution circuit uses the 5 s maximum disconnection time. The shorter 0.4 s limit applies to the final circuits covered by the corresponding final-circuit rule.",
  },
  {
    examId,
    variantId,
    questionNumber: 14,
    promptSuffix: "Which of the following voltages is not covered by BS 7671",
    correctedPromptSuffix: "Which of the following nominal voltages is outside the scope of BS 7671?",
    explanation:
      "BS 7671 covers AC systems up to and including 1,000 V and DC systems up to and including 1,500 V. A 1,500 V AC system therefore falls outside those limits.",
  },
  {
    examId,
    variantId,
    questionNumber: 15,
    promptSuffix:
      "Sufficient space for the initial installation and later replacement of individual items of electrical equipment is considered as?",
    correctedPromptSuffix:
      "Which design consideration requires sufficient space for the initial installation and later replacement of electrical equipment?",
    explanation:
      "Accessibility includes providing enough working space to install, inspect, maintain and replace equipment safely after the installation has been put into service.",
  },
  {
    examId,
    variantId,
    questionNumber: 16,
    promptSuffix: "The term PEI is defined as?",
    correctedPromptSuffix: "What does the abbreviation PEI mean?",
    options: { D: "Prosumer's electrical installation" },
    explanation:
      "PEI means prosumer's electrical installation: a low-voltage installation that can consume electricity and can also produce, store or manage electrical energy.",
  },
  {
    examId,
    variantId,
    questionNumber: 17,
    promptSuffix: "Low voltage generating sets are considered to be what?",
    correctedPromptSuffix: "How are low-voltage generating sets treated by BS 7671?",
    explanation:
      "Low-voltage generating sets supplying an electrical installation are within the scope of BS 7671, so their connection, protection, switching and earthing must satisfy the relevant requirements.",
  },
  {
    examId,
    variantId,
    questionNumber: 18,
    promptSuffix:
      "During the refurbishment of a house, the site, whilst under construction has a socket outlet with a rated current of 16A (commando socket), what must be the manufacturing standard of this outlet?",
    correctedPromptSuffix:
      "During a house refurbishment, which product standard applies to a 16 A industrial ('commando') socket-outlet used on the construction site?",
    explanation:
      "Industrial plugs and socket-outlets of this type are manufactured to BS EN 60309-2. BS EN 60309-1 contains general requirements, while Part 2 gives the dimensional compatibility requirements for the pin-and-contact-tube system.",
  },
  {
    examId,
    variantId,
    questionNumber: 19,
    promptSuffix:
      "In a swimming pool, the space located 2.6m directly above a springboard over the pool is classed as?",
    correctedPromptSuffix:
      "In a swimming-pool location, how is the space 2.6 m directly above a springboard classified?",
    explanation:
      "The pool zones extend vertically to 2.5 m above the highest surface on which people are expected to stand. A point 2.6 m above the springboard is therefore outside the defined zones.",
  },
  {
    examId,
    variantId,
    questionNumber: 20,
    promptSuffix:
      "In a room containing a bath or shower, what sized RCD must be provided for all circuits serving or passing through zones 1 and or 2.",
    correctedPromptSuffix:
      "In a room containing a bath or shower, what maximum rated residual operating current is permitted for the RCD providing additional protection to the relevant circuits?",
    options: {
      A: "100 mA",
      B: "30 mA",
      C: "500 mA",
      D: "300 mA",
    },
    explanation:
      "Additional protection for circuits of a location containing a bath or shower is provided by an RCD with a rated residual operating current not exceeding 30 mA.",
  },
  {
    examId,
    variantId,
    questionNumber: 21,
    promptSuffix:
      "What is the suggested font size for a general use periodic inspection due date label?",
    explanation:
      "The model periodic-inspection notice uses lettering of at least 10-point size for general use so the due date and warning remain legible.",
  },
  {
    examId,
    variantId,
    questionNumber: 22,
    promptSuffix: "In single phase, two wire circuits, the neutral conductor must?",
    correctedPromptSuffix:
      "In a single-phase two-wire circuit, what cross-sectional area must the neutral conductor have?",
    explanation:
      "In a single-phase two-wire circuit the neutral carries the same load current as the line conductor, so it must have the same cross-sectional area as the line conductor.",
  },
  {
    examId,
    variantId,
    questionNumber: 23,
    promptSuffix:
      "If an installation is reliant on all exposed conductive parts connected to an independent earth electrode, which type of installation is it?",
    correctedPromptSuffix:
      "Which earthing arrangement connects the installation's exposed-conductive-parts to an independent earth electrode?",
    options: {
      A: "TN-S",
      C: "TN-C",
      D: "TN-C-S",
    },
    explanation:
      "In a TT system the installation's exposed-conductive-parts are connected to a local earth electrode that is electrically independent of the distributor's earthed point.",
  },
  {
    examId,
    variantId,
    questionNumber: 24,
    promptSuffix:
      "An EV installation connected to a TNCS earthing arrangement cannot have the PME used as a means of earthing unless?",
    correctedPromptSuffix:
      "Which answer describes one permitted earthing provision for an EV charging installation connected to a TN-C-S supply?",
    options: {
      C: "It is part of a three-phase installation",
    },
    explanation:
      "One permitted arrangement connects the main earthing terminal to an earth electrode by a protective conductor as part of the specified PME protective provisions. The complete design must satisfy the applicable conditions of Section 722 rather than relying on an RCD alone.",
  },
  {
    examId,
    variantId,
    questionNumber: 25,
    promptSuffix: "When can overload protection not be omitted?",
    explanation:
      "A normal polyphase motor circuit requires overload protection to protect the motor and its conductors. The other listed circuits are examples where opening on overload can create danger and omission may be considered subject to the regulation's conditions.",
  },
  {
    examId,
    variantId,
    questionNumber: 26,
    promptSuffix: "Diversity is sometimes applied when determining which of the following?",
    explanation:
      "Diversity recognises that connected loads are unlikely to operate at full rating simultaneously, so it is applied when estimating an installation's maximum demand.",
  },
  {
    examId,
    variantId,
    questionNumber: 27,
    promptSuffix:
      "A standard socket outlet can be installed within a room containing a bath or shower as long as?",
    correctedPromptSuffix:
      "Where may a standard socket-outlet be installed in a room containing a bath or shower?",
    options: {
      A: "No less than 2.5 m from the boundary of zone 1",
      B: "It cannot be installed under any circumstances",
      C: "Within the boundary of zone 2",
      D: "No less than 3 m from the boundary of zone 1",
    },
    explanation:
      "A standard socket-outlet must be installed at least 3 m horizontally from the boundary of zone 1. Socket-outlets within the zones are limited to the specifically permitted types and supplies.",
  },
  {
    examId,
    variantId,
    questionNumber: 28,
    promptSuffix: "What must not be used as a circuit protective conductor?",
    explanation:
      "Exposed structural steel is not one of the recognised forms used as a circuit protective conductor for the associated circuit. A conductor in a cable, a separate single-core conductor and suitable metallic cable-management systems can serve as a CPC when the Section 543 requirements are met.",
  },
  {
    examId,
    variantId,
    questionNumber: 29,
    promptSuffix: "The removal of an unexpected danger is classed as?",
    correctedPromptSuffix:
      "Which switching function is intended to remove an unexpected electrical danger as quickly as possible?",
    explanation:
      "Emergency switching is intended to remove an unexpected danger rapidly. Isolation makes equipment safe for work, while functional switching and switching for mechanical maintenance serve different purposes.",
  },
  {
    examId,
    variantId,
    questionNumber: 30,
    promptSuffix: "Which conductor joins an exposed conductive part to the MET?",
    correctedPromptSuffix:
      "Which conductor connects an exposed-conductive-part to the main earthing terminal, directly or through the protective-conductor system?",
    explanation:
      "A circuit protective conductor connects exposed-conductive-parts of equipment to the main earthing terminal, providing the fault-current path needed for automatic disconnection.",
  },
  {
    examId,
    variantId,
    questionNumber: 31,
    promptSuffix: "Storage batteries are used as an alternative electrical source for what?",
    explanation:
      "Storage batteries are a recognised source for safety services because they can continue supplying essential equipment when the normal source fails.",
  },
  {
    examId,
    variantId,
    questionNumber: 32,
    promptSuffix:
      "Lightning strikes shall not be protected against where which of the following is present?",
    correctedPromptSuffix:
      "Which consequence is not one of the three cases that makes protection against transient overvoltages mandatory under Regulation 443.4.1?",
    explanation:
      "Failure of a safety service, serious injury or loss of life, and significant financial or data loss are the listed mandatory cases. Ordinary disruption to a household installation is not one of those three, although the wider Amendment 2 rule can still require an SPD unless the owner accepts the risk in a declaration.",
  },
  {
    examId,
    variantId,
    questionNumber: 33,
    promptSuffix:
      "In order to provide automatic disconnection of supply, fault protection is required alongside what else?",
    explanation:
      "Automatic disconnection of supply combines basic protection against contact with live parts in normal service with fault protection that disconnects the supply after an insulation fault.",
  },
  {
    examId,
    variantId,
    questionNumber: 34,
    promptSuffix:
      "Preventing a current resulting from a fault passing through the body of any person or any livestock, is a form of what?",
    correctedPromptSuffix:
      "Protection intended to prevent a dangerous current passing through a person or livestock as a result of a fault is called what?",
    explanation:
      "Fault protection protects people and livestock when a fault makes an exposed-conductive-part live, normally by providing a fault-current path and timely automatic disconnection.",
  },
  {
    examId,
    variantId,
    questionNumber: 35,
    promptSuffix: "A functional earthing conductor is identified by which colour?",
    answer: "B",
    explanation:
      "For BS 7671:2018+A2:2022, a conductor used solely for functional earthing is identified by pink where colour identification is used. Cream was permitted by the earlier transition note, but the transition ended in September 2020.",
  },
  {
    examId,
    variantId,
    questionNumber: 36,
    promptSuffix:
      "Which person type can, with a risk assessment, have socket outlets installed where additional protection is omitted?",
    correctedPromptSuffix:
      "Which external-influence classification identifies skilled or instructed persons for a documented socket-outlet RCD risk assessment?",
    explanation:
      "BA5 identifies skilled or instructed persons. In a non-dwelling situation, a documented risk assessment involving the appropriate skilled person can justify a permitted omission of additional RCD protection.",
  },
  {
    examId,
    variantId,
    questionNumber: 37,
    promptSuffix:
      "The preservation of continuity of a protective conductor shall be suitably protected against which of the following?",
    correctedPromptSuffix:
      "Against which external influence must a protective conductor be safeguarded to preserve its continuity?",
    explanation:
      "Protective conductors and their connections must be protected against chemical or electrochemical deterioration so the low-impedance fault-current path remains reliable throughout the installation's life.",
  },
  {
    examId,
    variantId,
    questionNumber: 38,
    promptSuffix: "If alternative sources of supply are present, what must be applied and where?",
    explanation:
      "Where more than one source can energise an installation, a warning notice is required at every relevant point of isolation so anyone isolating the installation is alerted to all sources.",
  },
  {
    examId,
    variantId,
    questionNumber: 39,
    promptSuffix:
      "Separate neutral and protective conductors throughout an installation indicate what?",
    correctedPromptSuffix:
      "Which earthing arrangement has separate neutral and protective conductors throughout the supply and installation?",
    options: {
      A: "TN-S",
      B: "TN-C",
      D: "TN-C-S",
    },
    explanation:
      "A TN-S system keeps the neutral and protective conductors separate from the source throughout. TN-C combines them, while TN-C-S separates them only after a combined PEN section.",
  },
  {
    examId,
    variantId,
    questionNumber: 40,
    promptSuffix: "When shall overcurrent detection be provided for a neutral conductor?",
    explanation:
      "Harmonic currents can make neutral current exceed the current in the line conductors, particularly where triplen harmonics add in the neutral. Overcurrent detection is therefore required where that risk exists.",
  },
  {
    examId,
    variantId,
    questionNumber: 41,
    promptSuffix:
      "What is the max measured Zs for a 32A BS88-3 system C fuse protecting a distribution circuit?",
    correctedPromptSuffix:
      "Using the 80% measured-value rule, what is the maximum measured Zs for a 32 A BS 88-3 system C fuse protecting a distribution circuit?",
    options: {
      A: "1.28 Ω",
      B: "1.60 Ω",
      C: "0.91 Ω",
      D: "0.728 Ω",
    },
    explanation:
      "The tabulated maximum Zs is 1.60 Ω for the stated fuse and disconnection condition. Applying the 80% allowance for conductor temperature gives 1.60 Ω × 0.8 = 1.28 Ω as the maximum measured value.",
  },
  {
    examId,
    variantId,
    questionNumber: 42,
    promptSuffix: "Which of the following cannot be used as a wiring system for a safety service?",
    explanation:
      "Ordinary PVC conduit does not by itself maintain the necessary circuit integrity under fire and mechanical stress. A safety-service wiring system must use a suitable fire-resistant cable or another arrangement that preserves the required protection for the necessary duration.",
  },
  {
    examId,
    variantId,
    questionNumber: 43,
    promptSuffix:
      "Which is not considered during an assessment of compatibility for an installation?",
    correctedPromptSuffix:
      "Which item is not one of the supply or load characteristics assessed when checking installation compatibility?",
    options: { B: "DC feedback" },
    explanation:
      "Compatibility assessment considers effects such as harmonic currents, DC feedback and transient overvoltages that equipment can impose on the installation or supply. The mere use of monitoring devices is not one of those electrical disturbance characteristics.",
  },
  {
    examId,
    variantId,
    questionNumber: 44,
    promptSuffix:
      "Which statutory regulation depicts that a PME earthing facility cannot be connected to any metalwork in a caravan?",
    correctedPromptSuffix:
      "Which statutory regulations prohibit connecting a distributor's PME earthing terminal to metalwork in a caravan or boat?",
    explanation:
      "The Electricity Safety, Quality and Continuity Regulations restrict a distributor from providing a PME earthing terminal for connection to caravan or boat metalwork. The other listed instruments do not impose that supply-earthing prohibition.",
  },
  {
    examId,
    variantId,
    questionNumber: 45,
    promptSuffix: "Which of the following installations does not require the installation of an AFDD?",
    correctedPromptSuffix:
      "Under BS 7671:2018+A2:2022, which listed circuit is outside the specific mandatory AFDD cases in Regulation 421.1.7?",
    explanation:
      "The mandatory Amendment 2 cases apply to single-phase AC final circuits not exceeding 32 A that supply socket-outlets in the listed higher-risk premises. A lighting circuit in an HMO is not within that specific mandatory list, though AFDD use may still be recommended after design assessment.",
  },
  {
    examId,
    variantId,
    questionNumber: 46,
    promptSuffix: "Which of the following SPD type can be installed at the origin of an installation?",
    correctedPromptSuffix:
      "Which SPD type is installed at the origin where protection against the effects of direct lightning current is required?",
    explanation:
      "A Type 1 SPD is installed at the origin where lightning-current protection is required. It is designed to discharge the high-energy partial lightning current represented by the 10/350 µs waveform.",
  },
  {
    examId,
    variantId,
    questionNumber: 47,
    promptSuffix:
      "When island mode is in use, what must be used to prevent incorrect operation of an RCD, and not overlap with switching to the DNO neutral?",
    correctedPromptSuffix:
      "In island mode, what device prevents an RCD from operating incorrectly while ensuring the installation neutral is not connected simultaneously to the DNO neutral?",
    explanation:
      "A suitably interlocked neutral switching device changes the neutral connection for island operation and prevents overlap with the DNO neutral. This establishes the intended earthing arrangement and lets the RCD sense residual current correctly.",
  },
  {
    examId,
    variantId,
    questionNumber: 48,
    promptSuffix:
      "Who issues and who receives the documentation following an initial verification of rented accommodation?",
    correctedPromptSuffix:
      "Who issues an Electrical Installation Certificate after initial verification, and who receives it?",
    explanation:
      "The certificate is made and signed by the persons responsible for design, construction and inspection/testing, as applicable, and is provided to the person who ordered the work.",
  },
  {
    examId,
    variantId,
    questionNumber: 49,
    promptSuffix:
      "The disconnection time allowed for a 40A final circuit connected to a TN system is:",
    correctedPromptSuffix:
      "What maximum disconnection time applies to a 40 A final circuit connected to a TN system?",
    options: {
      A: "0.4 s",
      B: "1 s",
      C: "0.2 s",
      D: "5 s",
    },
    explanation:
      "The 0.4 s TN limit applies to the final circuits within the specified rating and use conditions. A 40 A final circuit falls outside the circuits covered by that shorter rule, so the applicable TN maximum is 5 s.",
  },
  {
    examId,
    variantId,
    questionNumber: 50,
    promptSuffix: "A building constructed mainly of combustible materials is classed as what?",
    explanation:
      "External-influence code CA2 identifies a building constructed mainly from combustible materials. CB codes describe the building structure's propensity to propagate fire rather than the combustibility of its materials.",
  },
  {
    examId,
    variantId,
    questionNumber: 51,
    promptSuffix:
      "Where a wiring system such as conduit, cable ducting, cable trunking, busbar or busbar trunking passes through a building element that has specific fire resisting properties, what is the minimum internal cross-sectional area of space before internal sealing is required?",
    correctedPromptSuffix:
      "For a non-flame-propagating conduit, ducting or trunking system passing through a fire-resisting building element, what is the maximum internal cross-sectional area that can use the Regulation 527.2.3 exception to internal sealing?",
    options: {
      A: "500 mm²",
      B: "710 mm²",
      C: "45 mm²",
      D: "90 mm²",
    },
    explanation:
      "The exception can apply where the internal cross-sectional area does not exceed 710 mm² and the system is classified as non-flame propagating. Above that area, the internal sealing requirement applies.",
  },
  {
    examId,
    variantId,
    questionNumber: 52,
    promptSuffix: "Electrical equipment in a marina in a seashore location shall be no less than",
    correctedPromptSuffix:
      "What minimum water-ingress protection is required for electrical equipment in a marina where exposure to sea waves is possible?",
    explanation:
      "Equipment exposed to sea waves in a marina requires at least IPX6 protection against powerful water jets and heavy seas. Lower IPX ratings do not address that exposure.",
  },
  {
    examId,
    variantId,
    questionNumber: 53,
    promptSuffix:
      "Which of the following is not part of the schedule of inspections for an initial verification?",
    correctedPromptSuffix:
      "Which item is not a top-level heading on the model Schedule of Inspections for an Electrical Installation Certificate?",
    explanation:
      "The Schedule of Inspections has top-level headings for basic protection, additional protection and distribution equipment. RCD type is recorded in the certificate or circuit details and checked within the relevant inspection items, but it is not a top-level schedule heading.",
  },
  {
    examId,
    variantId,
    questionNumber: 54,
    promptSuffix:
      "In order for an enclosure to be adequate for basic protection, the minimum IP rating of an insulating enclosure shall be at least?",
    correctedPromptSuffix:
      "What minimum IP degree must a barrier or enclosure provide for basic protection against access to hazardous live parts?",
    explanation:
      "A barrier or enclosure normally provides at least IP2X or IPXXB basic protection. Readily accessible horizontal top surfaces require the higher IP4X or IPXXD level.",
  },
  {
    examId,
    variantId,
    questionNumber: 55,
    promptSuffix:
      "A 20A 400V 3-phase motor circuit, connected to a TN system has a maximum disconnection time of?",
    correctedPromptSuffix:
      "What maximum disconnection time applies to a 20 A, 400 V three-phase motor final circuit connected to a TN system?",
    options: {
      A: "5 s",
      B: "0.1 s",
      C: "0.4 s",
      D: "0.2 s",
    },
    explanation:
      "The circuit is a TN final circuit not exceeding 32 A, so the maximum disconnection time from Table 41.1 is 0.4 s at the usual 230 V nominal voltage to Earth.",
  },
  {
    examId,
    variantId,
    questionNumber: 56,
    promptSuffix:
      "An extra low voltage lighting installation suspended from a ceiling shall be capable of carrying not less than?",
    correctedPromptSuffix:
      "What minimum mass must the supporting conductors of a suspended extra-low-voltage lighting system be capable of carrying?",
    options: {
      A: "5 kg",
      B: "6 kg",
      C: "4 kg",
      D: "3 kg",
    },
    explanation:
      "The supporting conductors of the suspended extra-low-voltage lighting system must be capable of carrying at least 5 kg so the system has the required mechanical strength.",
  },
] as const satisfies readonly ExamQuestionCorrection[];
