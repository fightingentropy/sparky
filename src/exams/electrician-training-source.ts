import type { ExamQuestion, ExamSection } from "./types";

type SourceQuestion = Omit<ExamQuestion, "number">;

const DEFAULT_SOURCE_VARIANT_COUNT = 5;

// Licensed ElectricianTraining quiz imports:
// Part P 29753, 18th Edition 29704, PAT 29741, AM2 29728, 2391 29745-29752.

function numberQuestions(questions: SourceQuestion[]): ExamQuestion[] {
  return questions.map((question, index) => ({ number: index + 1, ...question }));
}

function cloneQuestions(questions: ExamQuestion[]): ExamQuestion[] {
  return questions.map((question) => ({ ...question, options: { ...question.options } }));
}

function makeDuplicatedSourceSection(id: string, title: string, questions: SourceQuestion[]): ExamSection {
  const numbered = numberQuestions(questions);
  return {
    id,
    title,
    variants: Array.from({ length: DEFAULT_SOURCE_VARIANT_COUNT }, (_, variantIndex) => ({
      id: `v${variantIndex + 1}`,
      questions: cloneQuestions(numbered)
    }))
  };
}

function makeVariantSourceSection(id: string, title: string, questionSets: SourceQuestion[][]): ExamSection {
  return {
    id,
    title,
    variants: questionSets.map((questions, variantIndex) => ({
      id: `v${variantIndex + 1}`,
      questions: cloneQuestions(numberQuestions(questions))
    }))
  };
}

export const electricianTrainingPartPMockQuestions: SourceQuestion[] = [
  {
    "prompt": "Part 'A' of the building, states that horizontal chases should not be deeper than:",
    "options": {
      "A": "One third the wall thickness",
      "B": "One quarter the wall thickness",
      "C": "One eighth the wall thickness",
      "D": "One sixth the wall thickness"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "A new build family house has just been completed, and it fully complies with the relevant building regulations. It has bedrooms and 2 reception rooms, how many low energy pendants are fitted?",
    "options": {
      "A": "2",
      "B": "3",
      "C": "None",
      "D": "4"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Part 'M' of the building regulations, states the required height of a central heating roomstat would be:",
    "options": {
      "A": "1100mm",
      "B": "1250mm",
      "C": "800mm",
      "D": "1400mm"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Part 'E' of the building regulations, does NOT cover:",
    "options": {
      "A": "An Internal wall which separates an en-suite bathroom from the associated bedroom",
      "B": "An Internal wall which separates a bedroom from a family bathroom",
      "C": "An internal wall which separates a integral garage from a kitchen",
      "D": "An Internal wall which separates a room containing a WC from a hallway"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Part 'A' of the building regulations, Does NOT cover:",
    "options": {
      "A": "The type of windows",
      "B": "The roof covering",
      "C": "The foundations",
      "D": "The size of the floor joist"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Part 'P' of the building regulations, Came into force on 1st January, in which year?",
    "options": {
      "A": "2006",
      "B": "2003",
      "C": "2004",
      "D": "2005"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "How many alphabetical Parts are there to the building regulations?",
    "options": {
      "A": "12",
      "B": "16",
      "C": "10",
      "D": "14"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "What is the maximum permitted Ze measurement of a Domestic premises with a TN-S earthing system Installed:",
    "options": {
      "A": "0.80Ω",
      "B": "0.03Ω",
      "C": "100Ω",
      "D": "35Ω"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Which of the alphabetical parts of the building regulations would apply to the domestic electrical installer:",
    "options": {
      "A": "Part J",
      "B": "Part K",
      "C": "Part H",
      "D": "Part P"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "The building regulations. States that ALL new and refurbished single family dwellings of not more than two habitable floors have:",
    "options": {
      "A": "Smoke alarms permanently wired from a local lightning circuit",
      "B": "One Smoke alarm",
      "C": "A Smoke alarm no more than 2m from all bedroom doors",
      "D": "Battery back up Smoke alarms"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "A passive stack would come under which Part of the building regulations:",
    "options": {
      "A": "Part A",
      "B": "Part F",
      "C": "Part H",
      "D": "Part C"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "How many parts to schedule two of the building regulations:",
    "options": {
      "A": "6",
      "B": "7",
      "C": "5",
      "D": "10"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Part 'A' of the building regulations, states that Vertical chases should not be deeper than:",
    "options": {
      "A": "One quarter the wall thickness",
      "B": "One eighth the wall thickness",
      "C": "One third the wall thickness",
      "D": "One sixth the wall thickness"
    },
    "answer": "C",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Which of the following would need be notified to the building control:",
    "options": {
      "A": "Installing new central heating control wiring",
      "B": "Replacing a damaged socket outlet in a kitchen",
      "C": "Upgrading the main Equipotential bonding conductors",
      "D": "Installing wall lights to a lounge"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Which of the following need NOT be notified to building control:",
    "options": {
      "A": "Solar powered garden lighting",
      "B": "MicroCHP Generator Supplies",
      "C": "An Extension to the LV garden lighting",
      "D": "Solar Photovoltaic (PV) power supplies"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Which of the following is NOT a special location:",
    "options": {
      "A": "A wet room",
      "B": "A hot air sauna",
      "C": "A paddling pool",
      "D": "A cloakroom"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Which of the following is a special Installation:",
    "options": {
      "A": "Patio heaters",
      "B": "Electric underfloor heating in a conservatory",
      "C": "Electric economy night storage heaters",
      "D": "Lighting within a detached garage"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Part 'M' of the building regulations does NOT apply to:",
    "options": {
      "A": "Door Bell Push switches",
      "B": "2amp lighting sockets",
      "C": "Telephone Sockets",
      "D": "Cooker switch"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "When would you NOT need to inform building control after installing new 12V recessed lighting to a kitchen:",
    "options": {
      "A": "When you have installed suitable fireproof hoods to the lights",
      "B": "When they satisfy parts B & C of the building regulations",
      "C": "When the new lights are pre-assembled CE marked units",
      "D": "When the work was carried out in a disabled adapted house or flat"
    },
    "answer": "C",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Which of the following rooms would require the largest ventilations fan:",
    "options": {
      "A": "A bathroom",
      "B": "A kitchen",
      "C": "A garage",
      "D": "A room for light smoking"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  }
];

export const electricianTraining18thEditionMockQuestions: SourceQuestion[] = [
  {
    "prompt": "BS 7671:2018 applies to electrical installations in",
    "options": {
      "A": "Mines and quarries",
      "B": "Aircraft",
      "C": "Public premises",
      "D": "Ships"
    },
    "answer": "C",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Protection against direct contact may be provided by",
    "options": {
      "A": "Protection against thermal effects",
      "B": "Fault protection",
      "C": "Overcurrent protection",
      "D": "Basic protection"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "The selection of protective equipment would NOT include consideration of the effects of",
    "options": {
      "A": "Overcurrent",
      "B": "Earth fault current",
      "C": "Equipment costs",
      "D": "Undervoltage"
    },
    "answer": "C",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "The interval between initial verification and the first periodic inspection of an installation is determined by",
    "options": {
      "A": "The client",
      "B": "The designer",
      "C": "The installer",
      "D": "The Local Authority Building Control"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "A cable support consisting of a series of transverse supporting elements rigidly fixed to main longitudinal supporting members is",
    "options": {
      "A": "Cable ducting",
      "B": "Cable ladder",
      "C": "Cable tray",
      "D": "Cable trunking"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "The magnitude of current to be carried by a circuit in normal service is",
    "options": {
      "A": "Short circuit current",
      "B": "Protective conductor current",
      "C": "Overload current",
      "D": "Design current"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Protection against electric shock under single fault conditions is",
    "options": {
      "A": "Basic protection",
      "B": "Fault protection",
      "C": "Protective separation",
      "D": "Emergency stopping"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "When assessing the maximum demand of an installation account may be taken of",
    "options": {
      "A": "Discrimination",
      "B": "Type of earthing arrangement",
      "C": "Diversity",
      "D": "Arrangement of live conductors"
    },
    "answer": "C",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Every installation shall be divided into circuits in order to",
    "options": {
      "A": "Reduce electricity costs",
      "B": "Prevent insulation faults",
      "C": "To meet the requirements of the NICEIC",
      "D": "Mitigate the effects of EMI"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Electrical equipment in, for example, kiosks or shops within shops need to be assessed with regards to",
    "options": {
      "A": "Maintainability",
      "B": "Safety services",
      "C": "Continuity of service",
      "D": "Compatibility"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Which of the following is NOT recognised as a source for a safety service.",
    "options": {
      "A": "Independent generator sets",
      "B": "Primary cells",
      "C": "The normal DNO supply",
      "D": "Storage batteries"
    },
    "answer": "C",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "An assessment for continuity of service must include",
    "options": {
      "A": "Number of circuits",
      "B": "Details of the supplier",
      "C": "Details of the installer",
      "D": "Selection of cable type"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Automatic disconnection of supply provides protection against",
    "options": {
      "A": "Electric shock",
      "B": "Thermal effects",
      "C": "Undervoltage",
      "D": "Overload"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Basic insulation of live parts or barriers or enclosures provide",
    "options": {
      "A": "Thermal protection",
      "B": "Impact protection",
      "C": "Fault protection",
      "D": "Basic protection"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "A 20A final circuit fed by a 230 V a.c. TT system must disconnect, in the event of an earth fault, within a maximum time of",
    "options": {
      "A": "0.2 s",
      "B": "1 s",
      "C": "0.4 s",
      "D": "0.1 s"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "A 13A socket outlet does NOT need to be additionally protected by an RCD provided it is",
    "options": {
      "A": "Splashproof",
      "B": "Not for use outdoors",
      "C": "Only to be used by ordinary persons",
      "D": "Subject to a documented risk assessment"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "The maximum earth loop impedance for a distribution circuit protected by a 32A BS 88-3 fuse is",
    "options": {
      "A": "1.37 Ω",
      "B": "0.91 Ω",
      "C": "1.7 Ω",
      "D": "1.6 Ω"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "The maximum rating of an RCD required to protect a230 V TT installation where the earth fault loop impedance is 150 Ω is",
    "options": {
      "A": "500 mA",
      "B": "300 mA",
      "C": "30 mA",
      "D": "100 mA"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "The maximum disconnection time for circuits supplied by a reduced low voltage system is",
    "options": {
      "A": "0.4 s",
      "B": "0.2 s",
      "C": "1 s",
      "D": "5 s"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "A 16A BS EN 60898 Type B circuit breaker used to protect a three-phase reduced low voltage circuit is subject to a maximum earth fault loop impedance value of",
    "options": {
      "A": "0.75 Ω",
      "B": "0.38 Ω",
      "C": "0.65 Ω",
      "D": "0.33 Ω"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "For the protective measure of electrical separation, the voltage of a separated circuit must not exceed",
    "options": {
      "A": "1000 V",
      "B": "230 V",
      "C": "500 V",
      "D": "400 V"
    },
    "answer": "C",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Which of the following sources of supply would be suitable for SELV and PELV circuits?",
    "options": {
      "A": "A safety isolating transformer",
      "B": "Public supply at 230 V a.c",
      "C": "Private generator at 110 V a.c",
      "D": "A low voltage d.c. supply"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Which of the following formulae is used where there is doubt regarding the effectiveness of supplementary bonding?",
    "options": {
      "A": "R ≤ 50 V/Iz",
      "B": "R ≤ 50 V/Ia",
      "C": "R ≥ 50 V/Ia",
      "D": "R ≤ 50 V/In"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "In order to protect against burns, a non-metallic electrical part intended to be touched but not hand held should not attain a surface temperature in excess of",
    "options": {
      "A": "80 °C",
      "B": "65 °C",
      "C": "90 °C",
      "D": "70 °C"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "The disconnection time for a 16.0 mm² conductor having a 'k' factor of 115 and carrying a fault current of 13 kA is",
    "options": {
      "A": "2.26 s",
      "B": "0.14 s",
      "C": "0.0125 s",
      "D": "0.02 s"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "The minimum impulse withstand voltage for a 230 V electricity meter is",
    "options": {
      "A": "4 kV",
      "B": "1.5 kV",
      "C": "2.5 kV",
      "D": "6 kV"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "A conductor marked green-and-yellow throughout its length with additional blue markings at the termination is a",
    "options": {
      "A": "Circuit protective conductor",
      "B": "PEN conductor",
      "C": "Neutral conductor",
      "D": "Line conductor"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "The notice relating to an RCD requires the device to be operated via its test button",
    "options": {
      "A": "Annually",
      "B": "Quarterly",
      "C": "Half yearly",
      "D": "Monthly"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "One method of protecting a cable, that passes through a ceiling joist from damage, is to install it at a vertical distance from the top or bottom of the joist of at least",
    "options": {
      "A": "25 mm",
      "B": "10 mm",
      "C": "50 mm",
      "D": "30 mm"
    },
    "answer": "C",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "The derating factor for a cable surrounded by thermal insulation for 200 mm is",
    "options": {
      "A": "0.51",
      "B": "0.63",
      "C": "0.78",
      "D": "0.5"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Where underground telecommunication and power cables cross, the minimum clearance to be maintained between them is",
    "options": {
      "A": "100 mm",
      "B": "200 mm",
      "C": "0.5 m",
      "D": "50 mm"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "The magnetic circuit of an RCD shall enclose",
    "options": {
      "A": "PEN conductors",
      "B": "All circuit conductors",
      "C": "All line conductors",
      "D": "All live conductors"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Where an RCD is used for protection against fire, it shall have a maximum rating of",
    "options": {
      "A": "500 mA",
      "B": "300 mA",
      "C": "30 mA",
      "D": "100 mA"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Which of the following devices may only be used for functional switching?",
    "options": {
      "A": "A 16A plug and socket-outlet",
      "B": "A BS EN 60898 circuit breaker",
      "C": "A device with semi-conductors",
      "D": "A device with superconductors"
    },
    "answer": "C",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "A firefighter's switch should be mounted above ground level at a height of",
    "options": {
      "A": "2.75 m with the switch ON position at the top",
      "B": "2.25 m with the switch OFF position at the top",
      "C": "2.75 m with the switch OFF position at the bottom",
      "D": "2.75 m with the switch OFF position at the top"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "The minimum size of a buried copper earthing conductor not protected against mechanical damage or corrosion is",
    "options": {
      "A": "10 mm²",
      "B": "50 mm²",
      "C": "16 mm²",
      "D": "25 mm²"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "The minimum size of a protective conductor with a 'k' factor of 143 which disconnects in 0.3 s at a fault current of 800 A is",
    "options": {
      "A": "4.0 mm²",
      "B": "6.0 mm²",
      "C": "10.0 mm²",
      "D": "2.5 mm²"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "A distribution board containing circuits with high protective conductor currents shall have the information regarding these circuits positioned so as to be visible to",
    "options": {
      "A": "A person modifying or extending a circuit",
      "B": "The user of the installation",
      "C": "An inspector",
      "D": "The Distribution Network Operator"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "The earthing conductor for an installation supplied from a TN-S system is 16 mm². The minimum size of a main protective bonding conductor is",
    "options": {
      "A": "6 mm²",
      "B": "16 mm²",
      "C": "10 mm²",
      "D": "25 mm²"
    },
    "answer": "C",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "An installation and its generator are not permanently fixed. In a TN, TT or an IT system an RCD shall be installed with a maximum rating of",
    "options": {
      "A": "300 mA",
      "B": "30 mA",
      "C": "500 mA",
      "D": "100 mA"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Control equipment incorporating protection against overload shall be provided for every motor having a rating exceeding",
    "options": {
      "A": "10 kW",
      "B": "100 W",
      "C": "0.37 kW",
      "D": "37 W"
    },
    "answer": "C",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "The inspection of an installation is NOT made to ensure",
    "options": {
      "A": "Compliance with section 511 of BS 7671",
      "B": "That the requirements of the ESQCR are met",
      "C": "That equipment is correctly selected and erected",
      "D": "That it is not visible damaged or defective"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "The minimum value of insulation resistance and the applied test voltage for a 400 V circuit is",
    "options": {
      "A": "1.0MΩ at 1000 V d.c",
      "B": "1.0MΩ at 500 V d.c",
      "C": "0.5MΩ at 250 V d.c",
      "D": "1.0MΩ at 500 V a.c"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Where surge protective devices cannot be disconnected for insulation resistance testing, the minimum value of insulation resistance and the applied test voltage are",
    "options": {
      "A": "1.0 MΩ at 500 V a.c",
      "B": "1.0 MΩ at 500 V a.c",
      "C": "1.0 MΩ at 250 V d.c",
      "D": "0.5 MΩ at 250 V d.c"
    },
    "answer": "C",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "The correct connection of socket-outlets and similar accessories is established by",
    "options": {
      "A": "Functional testing",
      "B": "Polarity testing",
      "C": "Insulation resistance testing",
      "D": "RCD testing"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "An installation is to have the following tests carried out: 1. polarity. 2. cpc continuity 3. earth electrode resistance. 4. insulation resistance. The correct sequence for these tests is",
    "options": {
      "A": "1, 2, 3, 4",
      "B": "3, 1, 4, 2",
      "C": "2, 4, 1, 3",
      "D": "4, 2, 3, 1"
    },
    "answer": "C",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "The verification of voltage drop may be achieved by",
    "options": {
      "A": "Measuring the prospective fault current",
      "B": "Use of a voltmeter",
      "C": "Measuring the circuit impedance",
      "D": "Functional testing"
    },
    "answer": "C",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "A 13A socket-outlet may be installed in a bathroom if it is installed beyond the boundary of zone 1 by a horizontal distance of",
    "options": {
      "A": "2.25 m",
      "B": "3.0 m",
      "C": "0.50 mm",
      "D": "0.60 mm"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "The external influence code for zone 0 of a swimming pool is",
    "options": {
      "A": "AF2",
      "B": "AG3",
      "C": "AE6",
      "D": "AD8"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Cables buried in arable land on a farm should be at a minimum depth of",
    "options": {
      "A": "1.0 m",
      "B": "0.6 m",
      "C": "0.5 m",
      "D": "6 m"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Electrical equipment installed outside in a caravan park shall have a mechanical impact code of at least",
    "options": {
      "A": "IK01",
      "B": "IK06",
      "C": "IK08",
      "D": "IK03"
    },
    "answer": "C",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Socket-outlets in a marina shall be protected",
    "options": {
      "A": "Residual current monitoring devices",
      "B": "In groups by RCDs",
      "C": "BS 3036 fuses only",
      "D": "Individually by RCDs and overcurrent devices"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Temporary installations of exhibitions should inspected and tested",
    "options": {
      "A": "After each assembly on site",
      "B": "Before disassembly",
      "C": "Only after a fault has occurred",
      "D": "At intervals during use"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "The flexible cable for connecting a mobile workshop to the supply shall have a minimum cross sectional area of",
    "options": {
      "A": "1.5 mm² copper",
      "B": "1.5 mm² aluminium",
      "C": "2.5 mm² copper",
      "D": "4.0 mm² copper"
    },
    "answer": "C",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "A periodic inspection for a frequently used caravan should be carried out",
    "options": {
      "A": "Quarterly",
      "B": "Monthly",
      "C": "Every three years",
      "D": "Annually"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "All final circuits in a amusement park for lighting and socket-outlets and mobile equipment up to 32 A must have additional protection by",
    "options": {
      "A": "32 A BS EN 60898 circuit breakers",
      "B": "BS 88 fuses",
      "C": "30 mA or less RCDs",
      "D": "300 mA or less RCDs"
    },
    "answer": "C",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Heating unit in ceilings shall have a degree of protection of at least",
    "options": {
      "A": "IP4X",
      "B": "IP2X",
      "C": "IP3X",
      "D": "IP1X"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "A 16 A BS 88-3 fuse carrying a fault current of 100 A will disconnect in",
    "options": {
      "A": "1 s",
      "B": "4 s",
      "C": "2 s",
      "D": "3 s"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "The maximum permissible voltage drop for a 400 V motor circuit is",
    "options": {
      "A": "20 V",
      "B": "6.9 V",
      "C": "11.5 V",
      "D": "12 V"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "The maximum value of earth fault loop impedance for a 32 A BS EN 60898 type B circuit breaker, for comparison with test values is",
    "options": {
      "A": "1.37 Ω",
      "B": "0.54 Ω",
      "C": "0.68 Ω",
      "D": "1.09 Ω"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  }
];

export const electricianTrainingPatMockQuestions: SourceQuestion[] = [
  {
    "prompt": "Class I equipment:",
    "options": {
      "A": "Has no provision for earthing",
      "B": "Must not be earthed",
      "C": "Has optional provision for earthing",
      "D": "Must be earthed"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "The most important check, when assessing the level of safety of an electrical appliance, is:",
    "options": {
      "A": "Visual inspection",
      "B": "Insulation resistance testing",
      "C": "Earth leakage current testing",
      "D": "Flash testing"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "A flexible cord connected to a 650 W iron should be protected by a fuse rating of:",
    "options": {
      "A": "3A",
      "B": "2A",
      "C": "4A",
      "D": "5A"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Equipment users should be competent to inspect:",
    "options": {
      "A": "Fuses",
      "B": "Protective conductors",
      "C": "Terminal connections",
      "D": "Socket outlets"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Instrument test leads should comply with",
    "options": {
      "A": "HSE Guidance Note GS 38",
      "B": "BS 3036",
      "C": "BS 7671",
      "D": "IEE Guidance Note 1"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "The maximum permitted length of a 1.25 mm² extension lead fitted with a standard 13 A plug should not exceed:",
    "options": {
      "A": "22m",
      "B": "12m",
      "C": "15m",
      "D": "18m"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Equipment with an earth leakage current exceeding 3.5 mA shall:",
    "options": {
      "A": "Have a label indicating the value of leakage current",
      "B": "Only be used in commercial situations",
      "C": "Be permanently wired or supplied by a plug and socket to BS 4343 (BS EN 6030-2)",
      "D": "Have protective conductors of not less than 0.5 mm²"
    },
    "answer": "C",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "When carrying out an insulation resistance test on a Class I household portable appliance to BS 3456 using the earth leakage method, the maximum acceptable value is:",
    "options": {
      "A": "0.5 mA",
      "B": "1.0 mA",
      "C": "0.75 mA",
      "D": "1.25 mA"
    },
    "answer": "C",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Which one of the following domestic electrical appliances may be regarded as an item of stationary equipment:",
    "options": {
      "A": "A washing machine",
      "B": "A visual display unit",
      "C": "A television set",
      "D": "A bathroom heater"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "An item of stationary equipment is defined as not having a carrying handle and having a mass greater than:",
    "options": {
      "A": "15Kg",
      "B": "18Kg",
      "C": "12kg",
      "D": "14Kg"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Which one of the following would not normally be part of a user inspection:",
    "options": {
      "A": "Looking for signs of external damage to the equipment",
      "B": "Checking security of the flexible cable in its plug top",
      "C": "Operating to check that it works properly",
      "D": "Checking the connections within the plug"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Class II equipment has an identifying mark in the shape of:",
    "options": {
      "A": "Two circles, linked",
      "B": "Two squares, one inside the other",
      "C": "Two circles, one inside the other",
      "D": "A square"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "New 13A plugs manufactured to BS 1363 will have:",
    "options": {
      "A": "Both live pins partially insulated",
      "B": "Plastic earth pins",
      "C": "Inter connecting pins",
      "D": "Insulated pins"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "When conducting an earth continuity test on IT equipment:",
    "options": {
      "A": "The equipment must be connected to the mains",
      "B": "Permission should first be sought from the equipment user",
      "C": "The equipment casing should be removed",
      "D": "All IT equipment in the area must be disconnected"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Electrical equipment for use in domestic environments will normally be fitted with a 13A plug manufactured to:",
    "options": {
      "A": "BS 1363",
      "B": "BS 1362",
      "C": "BS EN 60898",
      "D": "BS 3036"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "A 20 metre 1.5 mm² extension lead should be protected by:",
    "options": {
      "A": "A 10A fuse",
      "B": "A 5A fuse and RCD",
      "C": "A 3A fuse",
      "D": "A 13A fuse and RCD"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "A flexible cord connected to equipment having an electrical rating of 800 W should normally be protected by a fuse rating of:",
    "options": {
      "A": "13A",
      "B": "3A",
      "C": "10A",
      "D": "5A"
    },
    "answer": "D",
    "explanation": "At 230 V, an 800 W appliance draws about: I=PV=800230≈3.5 A I= V P ​ = 230 800 ​ ≈3.5 A So the normal fuse selected is the next suitable standard rating above that, which is 5 A."
  },
  {
    "prompt": "When a standard 13A plug overheats the cause would most likely be due to:",
    "options": {
      "A": "Oversized conductors",
      "B": "The use of socket outlets not to BS Standards",
      "C": "A poor earth connection",
      "D": "A loose connection within the plug"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "The minimum acceptable insulation resistance for Class I heating equipment rated greater than 3 kW is:",
    "options": {
      "A": "0.5 megohms",
      "B": "0.3 megohms",
      "C": "500 ohms",
      "D": "30 k ohms"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Electrical equipment should be marked with a unique serial number to help:",
    "options": {
      "A": "Visual inspection",
      "B": "Testing",
      "C": "Identification",
      "D": "Location"
    },
    "answer": "C",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Earth continuity testing may sometimes be carried out using:",
    "options": {
      "A": "An insulation tester",
      "B": "A loop tester",
      "C": "A bell set tester",
      "D": "A low resistance ohmmeter"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "A BS 3535 safety isolating transformer having a voltage not exceeding 50 V is used to supply certain equipment complying with:",
    "options": {
      "A": "Class II",
      "B": "Class I",
      "C": "Class 0",
      "D": "Class III"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Which of the following would not normally form a part of in-service testing:",
    "options": {
      "A": "Functional checks",
      "B": "Preliminary inspection",
      "C": "Loop testing",
      "D": "Earth continuity testing"
    },
    "answer": "C",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Electrical equipment users should be:",
    "options": {
      "A": "Able to test equipment",
      "B": "Capable of inspecting equipment for obvious defects",
      "C": "An electrically competent person",
      "D": "An electrician"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "The test current applied to electric equipment fitted with a 13A plug fuse, during an earth continuity test, would normally be:",
    "options": {
      "A": "25A for a period between 5 and 20 seconds",
      "B": "25A for at least 1 minute",
      "C": "13A for at least 1 minute",
      "D": "13A for approximately 5 seconds"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "The recommended initial frequency of user checks, relevant to a children's ride in the entrance of a store, could be:",
    "options": {
      "A": "Monthly",
      "B": "Annually",
      "C": "Sixth monthly",
      "D": "Daily"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Identification of electrical equipment within a duty holder's control is required to produce:",
    "options": {
      "A": "An equipment register",
      "B": "A repair schedule",
      "C": "A safety check equipment label",
      "D": "A fault register"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Which of the following does not apply when testing on a two-core cord set:",
    "options": {
      "A": "A polarity check",
      "B": "An earth continuity test",
      "C": "An insulation resistance test",
      "D": "A visual inspection"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Class I equipment with internal electronic components should be tested with a current not greater than:",
    "options": {
      "A": "0.8 A",
      "B": "200 mA",
      "C": "15 A",
      "D": "400 mA"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "It should be confirmed, when carrying out a formal visual inspection, that electrical equipment is being operated:",
    "options": {
      "A": "At the correct voltage",
      "B": "As laid down in the manufacturer's instructions",
      "C": "By a skilled person",
      "D": "By an instructed person"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "When protection against electric shock from equipment is provided using an earth wire, the equipment classification would be:",
    "options": {
      "A": "Class I",
      "B": "Class 0",
      "C": "Class III",
      "D": "Class II"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "User checks of stationary equipment in industrial premises should be carried out:",
    "options": {
      "A": "Before use",
      "B": "Weekly",
      "C": "Fortnightly",
      "D": "Daily"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "When conducting insulation resistance tests on new household appliances with Class I insulation, the minimum value would be:",
    "options": {
      "A": "1.0 megohm",
      "B": "2.0 megohm",
      "C": "0.5 megohm",
      "D": "0.25 megohm"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "There is no provision for protective earthing for which one of the following equipment:",
    "options": {
      "A": "Class II",
      "B": "Class 0",
      "C": "Class III",
      "D": "Class I"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Equipment found to be faulty must be:",
    "options": {
      "A": "Labelled and withdrawn from service",
      "B": "Reported and withdrawn from service",
      "C": "Labelled and reported",
      "D": "Labelled, reported and withdrawn from service"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Of the following items of information, which one is not required on a test label:",
    "options": {
      "A": "Date the test was carried out",
      "B": "Details of previous test results",
      "C": "The appliance number",
      "D": "Information on whether the equipment has passed or failed the safety tests"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "The scope of the EWR regarding maintenance of electrical systems extends to distribution systems up to:",
    "options": {
      "A": "132 kV",
      "B": "33 kV",
      "C": "11 kV",
      "D": "400 kV"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "A fridge freezer is classified as:",
    "options": {
      "A": "A stationary appliance",
      "B": "Moveable equipment",
      "C": "A portable appliance",
      "D": "No classification"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "The Code of Practice for In-service Inspection and Testing of Electrical Equipment does not apply to:",
    "options": {
      "A": "Petrol station forecourts",
      "B": "Factories",
      "C": "Offices",
      "D": "Construction site equipment"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "An insulation resistance tester should be capable of:",
    "options": {
      "A": "Supplying a maximum current of 0.5 A through the load",
      "B": "Supplying a minimum voltage of 1000 V d.c. to the load",
      "C": "Testing the continuity of a circuit",
      "D": "Maintaining the test voltage when applied to the equipment insulation"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Safety isolating transformers supplying Class III equipment must conform to:",
    "options": {
      "A": "BS 3526",
      "B": "BS 3535",
      "C": "BS 5458",
      "D": "BS 5533"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "When conducting an insulation resistance test on an electrical appliance the voltage supplied should be:",
    "options": {
      "A": "250V a.c",
      "B": "1000V a.c",
      "C": "500V d.c",
      "D": "250V d.c"
    },
    "answer": "C",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "When assessing the level of safety of an electrical appliance the most important check would be:",
    "options": {
      "A": "Acceptable values of insulation resistance",
      "B": "Spot testing",
      "C": "Earth fault current",
      "D": "Visual inspection"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Which one of the following checks should the user of an appliance be competent to undertake:",
    "options": {
      "A": "Tests using a portable appliance tester",
      "B": "Both visual inspection and testing",
      "C": "Visual inspection of the flexible lead and plug",
      "D": "Formal visual inspection"
    },
    "answer": "C",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "During a formal visual inspection a check should be made to confirm that the equipment is being operated:",
    "options": {
      "A": "By a skilled person",
      "B": "By a competent person",
      "C": "In accordance with manufacturer's instructions",
      "D": "At the correct voltage"
    },
    "answer": "C",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "To which one of the following workplace environments does the IEE Code of Practice not apply:",
    "options": {
      "A": "Hotels",
      "B": "Specialised work situations",
      "C": "Offices",
      "D": "Shops"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "The legal requirement for electrical equipment to be maintained in good order is laid down in the:",
    "options": {
      "A": "Health and Safety at Work Act 1974",
      "B": "Electricity at Work Regulations 1989",
      "C": "Provision and Use of Work Equipment Regulations 1998",
      "D": "Management of Health and Safety at Work Regulations 1999"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Instrument test leads should comply with:",
    "options": {
      "A": "BS 7671",
      "B": "HSE Guidance Note GS 55",
      "C": "BS 2001",
      "D": "HSE Guidance Note GS 38"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "The initial frequency of formal visual inspection for Class II cleaning equipment used in a school is recommended to be:",
    "options": {
      "A": "3 months",
      "B": "6 months",
      "C": "4 months",
      "D": "1 month"
    },
    "answer": "C",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "The test current applied to an electric kettle fitted with a 13A fuse during an earth continuity test would normally be:",
    "options": {
      "A": "25A for 5 seconds",
      "B": "25A for a period between 5 and 20 seconds",
      "C": "3A for 10 seconds",
      "D": "13A for at least 1 minute"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  }
];

export const electricianTrainingAm2MockQuestions: SourceQuestion[] = [
  {
    "prompt": "Which statutory regulations lay down the measures which must be taken to ensure the safe installation and use of electrical equipment:",
    "options": {
      "A": "Electricity Supply Regulations 1988",
      "B": "Electricity at Work Regulations 1989",
      "C": "IET Wiring Regulations",
      "D": "Factories Act"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "What is the most appropriate action for an HSE inspector to take after discovering some defective lights within an emergency lighting system:",
    "options": {
      "A": "Issue a deferred prohibition notice",
      "B": "Issue an improvement notice",
      "C": "Issue a prohibition notice",
      "D": "Close the site down immediately"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "A diagram showing all conductors and the connection of electrical components is called a:",
    "options": {
      "A": "Circuit diagram",
      "B": "Block diagram",
      "C": "Wiring diagram",
      "D": "Schematic diagram"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "A location drawing is scaled at 1:50. The route length of a cable run on the drawing is 85mm the length of the cable will be:",
    "options": {
      "A": "42.5m",
      "B": "4.25m",
      "C": "58.9m",
      "D": "17m"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "The preferred method of instructing the client in the correct use and maintenance of electrical equipment used within an installation would be to:",
    "options": {
      "A": "Provide them with a guided tour and verbal instructions during the handover period",
      "B": "Leave relevant manufacturer's literature adjacent to equipment",
      "C": "Provide them with the manufacturer's catalogue",
      "D": "Provide them with an operations and maintenance manual"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "The requirements for overload current protection are fulfilled when:",
    "options": {
      "A": "Ib = 10A In = 15A Iz = 18A",
      "B": "Ib = 20A In = 15A Iz = 15A",
      "C": "Ib = 2.5A In = 10A Iz = 8A",
      "D": "Ib = 15A In = 20A Iz = 18A"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "A heater taking 40A is supplied by a cable 10m long. If the cable has a volt drop of 4mV per ampere per metre, the voltage drop in the cable will be:",
    "options": {
      "A": "8 V",
      "B": "0.16 V",
      "C": "16 V",
      "D": "1.6 V"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Which domestic accessory would you expect to have terminals labelled, N, Loop and S/L:",
    "options": {
      "A": "Consumer Unit",
      "B": "Ceiling Rose",
      "C": "Socket",
      "D": "Junction Box"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "A Motor is connected via a flexible conduit to a starter. The continuity of the protective conductor is maintained by:",
    "options": {
      "A": "The flexible conduit provided the conduit boxes are scraped and locknuts are used",
      "B": "The flexible conduit without any further modification",
      "C": "A separate circuit protective conductor",
      "D": "The neutral conductor"
    },
    "answer": "C",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Cables not likely to be affected by electrical interference are:",
    "options": {
      "A": "Coaxial",
      "B": "ScTPs",
      "C": "Fibre-optic",
      "D": "STPs"
    },
    "answer": "C",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Fire alarm sounders must be capable of producing a minimum of:",
    "options": {
      "A": "75 dB",
      "B": "65 dB",
      "C": "70 dB",
      "D": "80 dB"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "What is the efficiency of a 172.5 Watt domestic heater which draws 2 A from the domestic supply:",
    "options": {
      "A": "75%",
      "B": "65.70%",
      "C": "26.60%",
      "D": "37.50%"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "The effect of improving the power factor of a fluorescent lamp circuit is that the current taken from the supply is:",
    "options": {
      "A": "Lagging the supply voltage by a larger angle",
      "B": "Smaller in value",
      "C": "Greater in value",
      "D": "Unchanged in value"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "In agricultural premises an rcd may be used for protection against fire providing the operating current does not exceed:",
    "options": {
      "A": "150 mA",
      "B": "500 mA",
      "C": "30 mA",
      "D": "300 mA"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "The internal area of a cable delivery system, to avoid internal sealing, must not be greater than:",
    "options": {
      "A": "700 mm²",
      "B": "720 mm²",
      "C": "750 mm²",
      "D": "710 mm²"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Copper links are used across joints in metallic trunking installations in order to:",
    "options": {
      "A": "Maintain the electrical continuity of the exposed conductive parts",
      "B": "Provide a temporary fixing before the main bolts are fitted",
      "C": "Reduce corrosion at the joint",
      "D": "Increase the strength of the joint"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "The purpose of segregated trunking is to:",
    "options": {
      "A": "Support the cables installed in the trunking",
      "B": "Prevent the spread of fire within the trunking",
      "C": "Prevent overheating in vertical trunking runs",
      "D": "Allow accommodation of circuits having different voltage bands"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "PME (Protective Multiple Earthing) is mainly associated with which system of earthing:",
    "options": {
      "A": "TN-C-S systems",
      "B": "TT systems",
      "C": "TN-S systems",
      "D": "TI system"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Which of the following is not a method of protection from direct contact (basic protection):",
    "options": {
      "A": "Insulation of live parts",
      "B": "Placing out of reach",
      "C": "Automatic disconnection of supply",
      "D": "Barriers and enclosures"
    },
    "answer": "C",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Supplementary bonding conductors without mechanical protection used to connect water pipes supplying a sink unit should be at least:",
    "options": {
      "A": "4.0 mm²",
      "B": "1.5 mm²",
      "C": "2.5 mm²",
      "D": "6.0 mm²"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "When a person receives a shock by touching a metallic part not normally live but made live under fault conditions is said to be in:",
    "options": {
      "A": "Earth contact",
      "B": "Direct contact",
      "C": "Electrical contact",
      "D": "Indirect contact"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Where a firefighter's switch is to be installed, in order to comply with BS 7671 it must be:",
    "options": {
      "A": "No more than 3.75 m from the ground with the off position at the top",
      "B": "No more than 3.75 m from the ground with the off position at the bottom",
      "C": "No more than 2.75 m from the ground with the off position at the bottom",
      "D": "No more than 2.75 m from the ground with the off position at the top"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Circuit protective conductors are connected between:",
    "options": {
      "A": "The main earth terminal and exposed conductive parts",
      "B": "The main earth terminal and the earth rod",
      "C": "The main earth terminal and extraneous conductive parts",
      "D": "Exposed and extraneous conductive parts"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Which of the following protective devices is used in domestic plug tops:",
    "options": {
      "A": "BS 88",
      "B": "BS 3036",
      "C": "BS EN 60898",
      "D": "BS 1362"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Fusing factor is the ratio of:",
    "options": {
      "A": "Fusing current to current rating",
      "B": "Fault current to fusing current",
      "C": "Fusing current to fault current",
      "D": "Current rating to fusing current"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "What is the purpose of the National Grid:",
    "options": {
      "A": "Transmission of electricity from power stations to substations",
      "B": "Transmission of electricity from power stations to industrial locations",
      "C": "Transmission of electricity from power stations to factories",
      "D": "Transmission of electricity from sub stations to domestic premises"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Which one of the following types of power stations does not use a fossil fuel to generate electricity:",
    "options": {
      "A": "Gas fired",
      "B": "Coal fired",
      "C": "Oil fired",
      "D": "Nuclear"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Increasing the excitation of an a.c. generator will cause the:",
    "options": {
      "A": "The voltage to increase",
      "B": "The power factor to decrease",
      "C": "Frequency to increase",
      "D": "The frequency to decrease"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Which of the following systems require large amounts of water for operation:",
    "options": {
      "A": "Grey water recycling",
      "B": "Photovoltaic",
      "C": "Micro wind",
      "D": "Micro-hydro"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Which of the following systems require separate pipework, storage and a filtration system for operation:",
    "options": {
      "A": "Micro wind",
      "B": "Grey water recycling",
      "C": "Photovoltaic",
      "D": "Micro-hydro"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  }
];

export const electricianTraining2391Mock1Questions: SourceQuestion[] = [
  {
    "prompt": "What is the main purpose of an Initial Verification?",
    "options": {
      "A": "To ensure all testing has been carried out",
      "B": "To complete the testing and issue an Electrical Installation Certificate",
      "C": "To make a judgement that the installation is safe for continued use",
      "D": "To confirm an installation is safe to be put into service"
    },
    "answer": "D",
    "explanation": "Initial Verification checks that a new installation has been designed, constructed and tested correctly before it is energised. It ensures all safety measures are in place so the installation can be safely put into service for the first time."
  },
  {
    "prompt": "What situation requires the issuing of a Minor Electrical Installation Works Certificate?",
    "options": {
      "A": "Changing a consumer unit and protective devices",
      "B": "An additional lighting circuit has been installed",
      "C": "Upgrading the cable and circuit breaker for a shower circuit",
      "D": "Additional socket-outlets added to an existing ring final circuit"
    },
    "answer": "D",
    "explanation": "Adding extra socket-outlets to an existing circuit is classed as minor works because it does not create a new circuit and the alteration is limited in scope. BS 7671 requires a Minor Electrical Installation Works Certificate for small additions or modifications where the existing circuit continues to provide adequate protection. The other options involve new circuits or major alterations, which require a full Electrical Installation Certificate, not a minor works certificate."
  },
  {
    "prompt": "Which statutory document contains specific information relevant to Initial Verification?",
    "options": {
      "A": "The Electricity at Work Regulations",
      "B": "Health and Safety guidance GS38",
      "C": "BS 7671, Requirements for Electrical Installations",
      "D": "The Health and Safety at Work Act"
    },
    "answer": "A",
    "explanation": "The Electricity at Work Regulations (EAWR) is a statutory document, meaning it is legally enforceable, and it requires electrical systems to be constructed, maintained and tested safely. Because Initial Verification directly ensures an installation is safe before being put into service, EAWR is the legislation that governs this duty. BS 7671 supports the process, but EAWR is the legal requirement that makes verification mandatory."
  },
  {
    "prompt": "What is the minimum voltage which requires the test leads and probes to comply with GS38?",
    "options": {
      "A": "50 V AC",
      "B": "150 V AC",
      "C": "120 V AC",
      "D": "25 V AC"
    },
    "answer": "A",
    "explanation": "GS38 applies to test leads and probes used on electrical systems where the voltage is at or above 50 V AC, which is considered a potentially dangerous voltage level. At 50 V and above, the risk of electric shock increases significantly, so probes must meet strict design and safety requirements. This ensures the tester is properly protected during measurement."
  },
  {
    "prompt": "How many voltage measurements are required to confirm that a three-phase four-wire installation is safely isolated?",
    "options": {
      "A": "10",
      "B": "6",
      "C": "3",
      "D": "9"
    },
    "answer": "A",
    "explanation": "Safe isolation requires checking all conductor combinations to prove the absence of voltage. In a three-phase four-wire system this includes L1–L2, L2–L3, L1–L3, each line to neutral, and each line to earth, plus neutral to earth. Completing all ten proves the system is fully dead, preventing accidental energisation or contact with a live conductor."
  },
  {
    "prompt": "What precaution is required before carrying out a test of external earth fault loop impedance (Ze) so as to avoid danger to users of an installation?",
    "options": {
      "A": "Use insulated screwdrivers",
      "B": "Disconnect the main protective bonding conductors",
      "C": "Lock off the supply",
      "D": "Warn the occupier of the premises"
    },
    "answer": "C",
    "explanation": "Locking off the supply ensures no one can re-energise the installation while tests are being performed. Ze testing involves exposing live terminals, so preventing unauthorised reconnection is essential for safety. This forms part of a safe isolation procedure, protecting both the tester and anyone else on site."
  },
  {
    "prompt": "Why does BS 7671 require inspection to be carried out before testing?",
    "options": {
      "A": "To confirm the installation is complete and it is safe to commence testing",
      "B": "To confirm the installers have installed as per the job specification",
      "C": "To confirm the Earthing Conductor is connected and it is safe to commence testing",
      "D": "To confirm all the equipment is connected to the installation will work"
    },
    "answer": "A",
    "explanation": "Inspection identifies visible defects, incorrect connections, damage or omissions that could make testing dangerous or give misleading results. Ensuring the installation is complete prevents energising incomplete circuits and reduces the risk of equipment damage or electric shock. BS 7671 therefore places inspection ahead of all testing activities."
  },
  {
    "prompt": "Which situation will not require a label stating 'Safety Electrical Connection – Do Not remove'?",
    "options": {
      "A": "Connecting a bonding conductor to a metallic installation gas pipe",
      "B": "The connection to a Main Earthing Terminal within a consumer unit",
      "C": "A supplementary bonding conductor connected to a metallic water pipe",
      "D": "An Earthing conductor connected to an installation earth electrode"
    },
    "answer": "B",
    "explanation": "The connection to a Main Earthing Terminal within a consumer unit Explanation: Bonding and earthing labels are required where disconnection could create danger by removing a protective conductor. The MET inside a consumer unit is already clearly identifiable and accessible only to competent persons. Because its removal is highly unlikely except by an electrician, additional labelling is not necessary."
  },
  {
    "prompt": "What must be checked when inspecting a consumer unit for compliance with Basic Protection requirements?",
    "options": {
      "A": "Protective devices are the correct rating",
      "B": "All cable terminations are tight",
      "C": "Enclosures meet the IP requirements",
      "D": "Live conductors are correctly identified"
    },
    "answer": "C",
    "explanation": "Basic Protection protects users from direct contact with live parts, and enclosure IP ratings ensure dangerous parts cannot be touched. A compliant consumer unit must prevent finger access and resist entry of small objects. Incorrect or damaged covers defeat Basic Protection, so IP compliance is a key inspection point."
  },
  {
    "prompt": "Which two senses are used when inspecting the terminations at a newly installed motor?",
    "options": {
      "A": "Sight and smell",
      "B": "Sight and hearing",
      "C": "Touch and smell",
      "D": "Touch and sight"
    },
    "answer": "D",
    "explanation": "isual inspection confirms identification, routing, insulation condition and correct termination layout. Touch checks for tightness, movement or loose components without applying full force. Using these two senses together ensures motor connections are secure, correctly fitted and unlikely to overheat in service."
  },
  {
    "prompt": "What action must be taken when a loose connection is found to a pipe during the inspection of a main protective bonding conductor termination?",
    "options": {
      "A": "A defect report must accompany the Electrical Installation Certificate",
      "B": "A note is made on the Electrical Installation Certificate under 'Departures'",
      "C": "The defect must be made good and inspected before certification",
      "D": "The continuity test between the MET and the pipe should be carried out"
    },
    "answer": "C",
    "explanation": "The defect must be made good and inspected before certification Explanation: A loose bonding connection compromises safety by preventing fault currents from returning effectively to earth. Since bonding is fundamental for shock protection, the issue must be corrected immediately. Certification cannot be issued until all safety-critical defects are repaired and rechecked."
  },
  {
    "prompt": "What best describes the protection offered by IPXXB?",
    "options": {
      "A": "Protection against impact",
      "B": "Protection against access to live parts",
      "C": "Protection against the ingress of water",
      "D": "Protection against the ingress of solids"
    },
    "answer": "B",
    "explanation": "IPXXB refers to protection against finger access, equivalent to a 12 mm diameter object. This prevents accidental touching of live parts that could cause shock. The “B” code focuses specifically on ingress of body parts rather than dust or water."
  },
  {
    "prompt": "What is the minimum IP rating for electrical equipment installed in Zone 2 of a bathroom?",
    "options": {
      "A": "IP 2X",
      "B": "IP 4X",
      "C": "IP X4",
      "D": "IP X2"
    },
    "answer": "C",
    "explanation": "Zone 2 requires protection against water splashes from any direction, hence IPX4. Bathrooms present increased shock risk due to moisture and reduced body resistance, so equipment must prevent water ingress. Higher ratings may be required depending on manufacturer instructions."
  },
  {
    "prompt": "The calibration of an Earth Fault Loop Impedance tester reveals that the instrument is outside of specification. Regular accuracy checks on the instrument have not been carried out for six months. What immediate action must be taken by the contractor?",
    "options": {
      "A": "The last installation tested should be retested",
      "B": "All installations tested since the last calibration should be checked",
      "C": "All installations tested in the last three months should be retested",
      "D": "The test leads for this instrument must be replaced"
    },
    "answer": "A",
    "explanation": "If the tester was inaccurate, the most recent installation may contain unsafe results. Retesting the last job ensures any serious errors are caught before harm occurs. Earlier tests may be reviewed later, but the immediate priority is the most recent unverified work."
  },
  {
    "prompt": "What instrument would give the most accurate results when carrying out an earth electrode resistance test?",
    "options": {
      "A": "A low-resistance ohmmeter",
      "B": "A stakeless or probe type earth electrode tester",
      "C": "A three or four-terminal earth electrode tester",
      "D": "An earth fault loop impedance tester"
    },
    "answer": "C",
    "explanation": "These testers use dedicated current and potential spikes to eliminate parallel earth paths and improve accuracy. They measure true electrode resistance rather than loop impedance, which includes supply characteristics. This makes them the industry standard for TT earthing verification."
  },
  {
    "prompt": "Why does BS 7671 give a defined sequence of tests when carrying out Initial Verification?",
    "options": {
      "A": "To ensure the safety of the person carrying out the tests",
      "B": "To ensure live tests are carried out in the correct order",
      "C": "To ensure the Schedule of Test Results is complete",
      "D": "To ensure all tests are carried out"
    },
    "answer": "A",
    "explanation": "BS 7671 sets a strict test sequence so that no dangerous conditions remain undetected before moving on to live testing, ensuring the tester is never exposed to unexpected voltages or faults. Following the order ensures that preliminary “dead” tests confirm the installation is safe before any energised tests begin. It also prevents a situation where unsafe assumptions are made because earlier safety-critical tests were skipped. Overall, the sequence protects the tester and maintains a safe working procedure throughout verification."
  },
  {
    "prompt": "Which test method is used to verify that extraneous conductive parts of an installation are effectively connected to the MET?",
    "options": {
      "A": "Applied voltage test",
      "B": "Long lead test",
      "C": "R1+R2 linked test",
      "D": "Applied current test"
    },
    "answer": "B",
    "explanation": "The long lead test is used when parts of the installation are physically distant from the MET, allowing resistance to be checked over long distances. This ensures that extraneous conductive parts are effectively bonded back to the earthing system. A reliable continuity path confirms that touch voltages will remain safe under fault conditions."
  },
  {
    "prompt": "What is the main purpose of verifying that extraneous conductive parts of an installation are effectively connected to the MET?",
    "options": {
      "A": "To confirm that they will reduce values of earth fault loop impedance to comply with BS7671",
      "B": "To confirm that they provide a reliable path for fault currents to flow to earth",
      "C": "To confirm that there is a reliable connection between the MET and the means of earthing",
      "D": "To confirm that only a low potential will exist between exposed and extraneous conductive parts under fault conditions"
    },
    "answer": "D",
    "explanation": "Bonding extraneous conductive parts ensures that dangerous voltage differences cannot develop during a fault. This keeps all accessible metalwork at the same potential, drastically reducing the risk of electric shock. It is a key requirement of the protective equipotential bonding system."
  },
  {
    "prompt": "Where on a lighting circuit would a test of continuity of protective conductors be carried out?",
    "options": {
      "A": "At the distribution board",
      "B": "At every light and each switch with a metallic plate",
      "C": "At every light and switch point",
      "D": "At the furthest point in the circuit"
    },
    "answer": "C",
    "explanation": "Continuity of protective conductors must be verified at every point where the CPC is expected to provide a protective path, which includes all lights and all switch points. Testing at each of these ensures that the protective conductor is continuous throughout the entire circuit. This confirms that fault currents will have a reliable path back to earth at every accessory. Ensuring CPC continuity is essential for compliance with BS 7671 and maintaining effective disconnection times."
  },
  {
    "prompt": "What would cause the value of r2 to be higher than r1 and rn when carrying out step 1 of a continuity of ring-final circuit test?",
    "options": {
      "A": "Parallel earth paths",
      "B": "A connected load",
      "C": "Smaller sized cpc",
      "D": "A spur in the ring"
    },
    "answer": "C",
    "explanation": "The CPC is often smaller in cross-section than the line and neutral conductors (e.g., 2.5mm² line, 1.5mm² CPC). A smaller conductor has a higher resistance per metre, so r2 naturally gives a higher value. This is a normal and expected characteristic when testing ring circuits."
  },
  {
    "prompt": "What is the test voltage for an insulation resistance test carried out on a 230 V circuit containing socket-outlets with surge protection devices which cannot be removed?",
    "options": {
      "A": "500 V DC",
      "B": "100 V DC",
      "C": "250 V DC",
      "D": "1000 V DC"
    },
    "answer": "C",
    "explanation": "A reduced test voltage of 250 V DC is used when surge protection devices (SPDs) cannot be disconnected, because a full 500 V test could damage the components inside the SPD. This lower voltage still allows a valid insulation reading while preventing false failures. It also ensures compliance with BS 7671 guidance for circuits containing electronic devices."
  },
  {
    "prompt": "During the construction of an installation, insulation resistance tests have been carried out between live conductors and earth on the individual circuits and the L to E results are shown below. What is the expected value of insulation resistance L to E when the whole installation is tested?",
    "options": {
      "A": "136.7 MΩ",
      "B": "0.03 MΩ",
      "C": "32.2 MΩ",
      "D": "520 MΩ"
    },
    "answer": "C",
    "explanation": "When circuits are tested together, their insulation resistances are effectively connected in parallel. Parallel resistances always give a combined value lower than the lowest individual circuit value. Using the parallel resistance formula on the three circuit readings gives approximately 32.2 MΩ for the whole installation."
  },
  {
    "prompt": "Questions 23 to 25 relate to the following scenario: The conductors of a newly installed ring final circuit are to be tested for continuity. The circuit is wired in PVC single core cables contained in PVC conduit. All circuit conductors are 2.5mm² and the end to end length of each loop is 75m. What action is required regarding the instrument test leads?",
    "options": {
      "A": "They are nulled or zeroed",
      "B": "They must be GS 38 compliant",
      "C": "They must be 13 A rated",
      "D": "They must be auto-ranging"
    },
    "answer": "A",
    "explanation": "The resistance of the test leads must be nulled to ensure that it is not included in the measured continuity values. This provides an accurate reading of only the circuit conductors. Zeroing the leads is standard practice before low-resistance measurements such as R1, R2, and r1+r2."
  },
  {
    "prompt": "What is the expected resistance of each of the loops tested in stage 1 as shown in GN3?",
    "options": {
      "A": "0.68 Ω",
      "B": "0.14 Ω",
      "C": "1.01 Ω",
      "D": "0.56 Ω"
    },
    "answer": "D",
    "explanation": "For a 75 m ring with 2.5/1.5 mm² conductors, the expected resistance is calculated from published mΩ/m values. When both legs of the ring are connected, the effective length is halved, giving a loop resistance of around 0.56 Ω. This value matches typical GN3 guidance and verifies correct cable sizes and continuity."
  },
  {
    "prompt": "Whilst testing the ring final circuit the reading at one of the socket-outlets for stage 2 was found to be 0.42 Ω but an over range reading was obtained for stage 3. What condition would cause these results?",
    "options": {
      "A": "Line and cpc conductor connections are reversed",
      "B": "The line conductor is not connected",
      "C": "Line and neutral conductor connections are reversed",
      "D": "The neutral conductor is not connected"
    },
    "answer": "C",
    "explanation": "In stage 2, readings appear normal because the cross-connection still creates measurable paths. However, in stage 3 the reversed line and neutral prevent a complete ring on the interconnected loop, causing an over-range reading. This fault pattern clearly indicates the L and N conductors have been swapped at some point."
  },
  {
    "prompt": "What is the most likely cause of significantly different readings at each socket-outlet when carrying out stage 3, as shown in GN3, during testing of a newly installed ring final circuit?",
    "options": {
      "A": "Incorrect polarity at one of the sockets on the circuit",
      "B": "Incorrect cross connection of conductors at the consumer unit",
      "C": "Interference from other circuits connected to the consumer unit",
      "D": "Reduced size circuit protective conductor in the cable"
    },
    "answer": "B",
    "explanation": "In stage 3 of ring final testing, you expect the R1+R2 readings at each socket to follow a smooth rising and falling pattern around the ring. If the conductors have been cross-connected incorrectly at the consumer unit, that pattern is disrupted and the readings vary significantly from point to point. This fault at the origin affects the whole ring, so it is the most likely reason for inconsistent values at every socket."
  },
  {
    "prompt": "What is the most appropriate method of verifying the polarity of the ring final circuit?",
    "options": {
      "A": "Linking line and cpc and testing at each socket between line and cpc",
      "B": "Testing at each socket using and earth fault loop impedance tester",
      "C": "Using a long lead and testing from the MET to each socket in turn",
      "D": "Comparing the test results from stage 2 and stage 3 as identified in GN3"
    },
    "answer": "D",
    "explanation": "Stages 2 and 3 confirm that line, neutral, and CPC conductors are correctly connected at every point. Matching patterns in readings show that conductors are properly routed and polarity is correct throughout. This GN3 method is the accepted and most reliable check for ring circuit polarity."
  },
  {
    "prompt": "Questions 28 to 32 relate to the following scenario: Tests are to be carried out on a newly installed installation forming part of 230 V single-phase TT system. The installation is protected by a 300 mA BS EN 61008 RCD installed for fire protection. 30mA BS EN 61009 RCBOs are installed protecting each outgoing circuit. How is the maximum resistance for the installation earth electrode determined?",
    "options": {
      "A": "230 V ÷ I∆n",
      "B": "50 V ÷ I∆n",
      "C": "50 V x I∆n",
      "D": "230 V x I∆n"
    },
    "answer": "B",
    "explanation": "The maximum earth electrode resistance for a TT system is based on the allowable touch voltage, which BS 7671 limits to 50 V under fault conditions. This value is divided by the RCD residual operating current to ensure disconnection will occur before dangerous touch voltages arise. Therefore using 50 V ÷ I∆n ensures the installation meets safety requirements."
  },
  {
    "prompt": "What is verified by carrying out a ½ IΔn test on an RCD?",
    "options": {
      "A": "The RCD is not subject to nuisance tripping",
      "B": "The disconnection time will be met",
      "C": "The requirements for additional protection will be met",
      "D": "The RCD will operate when a fault current occurs"
    },
    "answer": "A",
    "explanation": "At half its rated tripping current, a properly functioning RCD should not operate, proving it will not trip unnecessarily under small leakage currents. This prevents unwanted disconnections in normal operation. It confirms correct stability and discrimination before full-current tests are applied."
  },
  {
    "prompt": "What is the main purpose for carrying out a 5 IΔn test on a 30 mA RCD protecting 13 A socket-outlets in a dwelling?",
    "options": {
      "A": "To ensure the RCD mechanism works correctly",
      "B": "To verify it meets the requirements of BS EN 61008",
      "C": "To verify it meets the requirements for Automatic Disconnection",
      "D": "To verify it meets the requirements for Additional Protection"
    },
    "answer": "D",
    "explanation": "A 30 mA RCD must disconnect within 40 ms at 5× its rated current for additional protection as required by BS 7671. This ensures extremely rapid disconnection in the event of a shock-risk fault. The test confirms the device can provide the enhanced protection intended for socket-outlet circuits."
  },
  {
    "prompt": "What would be the x1 test current for an RCD having the maximum rating when providing fire protection?",
    "options": {
      "A": "300 mA",
      "B": "30 mA",
      "C": "500 mA",
      "D": "100 mA"
    },
    "answer": "C",
    "explanation": "Fire-protection RCDs are typically rated at 500 mA, providing protection against overheating in cables and fixed equipment. The x1 test current equals the rated residual operating current of the device. Therefore a 500 mA RCD must be tested at 500 mA to confirm it will trip correctly under fire-risk fault currents."
  },
  {
    "prompt": "What are the correct test tripping times for the 30 mA BE EN 61009 RCBOs when tested at 1x IΔn and 5x IΔn?",
    "options": {
      "A": "300 ms and 40 ms",
      "B": "300 ms and 400 ms",
      "C": "200 ms and 100 ms",
      "D": "200 ms and 40 ms"
    },
    "answer": "A",
    "explanation": "BS EN 61009 specifies a maximum disconnection time of 300 ms at 1× IΔn and 40 ms at 5× IΔn for a 30 mA RCBO. These times ensure both ADS and additional protection criteria are satisfied. The test confirms the RCBO reacts fast enough to prevent electric shock and protect wiring."
  },
  {
    "prompt": "Questions 33 to 40 relate to the following scenario: A commercial storage unit has been rewired and the installation forms part of 400/230 V three-phase TN-S system. All 'dead' tests have been completed. 'Live' testing is about to commence. Why is a live polarity check carried out at the origin of the installation?",
    "options": {
      "A": "To verify that the polarity throughout the installation is correct",
      "B": "To replace the need for a dead polarity test on the installation",
      "C": "To verify that double-pole switches will automatically operate",
      "D": "To ensure the DNO's incoming supply has the correct polarity"
    },
    "answer": "D",
    "explanation": "A live polarity check verifies that line, neutral and earth from the supply are correctly connected before any further live tests begin. If polarity at the origin is wrong, all downstream results would be unsafe or invalid. Ensuring correct supply polarity protects both the tester and the installation."
  },
  {
    "prompt": "What is the reason for verifying the prospective fault current at the origin of the installation?",
    "options": {
      "A": "To verify that the protective conductors of the installation can withstand the prospective fault current",
      "B": "To verify that the protective devices operate in the disconnection time given in BS 7671",
      "C": "To verify that the short circuit breaking capacity of the protective devices exceed the value of prospective fault current",
      "D": "To verify that the prospective fault current exceeds the breaking capacities of the protective devices"
    },
    "answer": "C",
    "explanation": "Every protective device must have a breaking capacity higher than any fault current that could occur at its location. Measuring PFC at the origin ensures that main fuses, MCBs or switchgear can safely interrupt worst-case faults without exploding or failing. This confirms equipment is adequately rated for the system."
  },
  {
    "prompt": "What is the purpose of verifying the earth fault loop impedance at the furthest point on each final circuit?",
    "options": {
      "A": "To verify the impedance is high enough to ensure RCDs are tripped",
      "B": "To verify that the fault current exceeds the breaking capacity of the protective device",
      "C": "To verify the impedance is low enough to cause a high fault current to flow",
      "D": "To verify the impedance is high enough to cause a low fault current to flow"
    },
    "answer": "C",
    "explanation": "A sufficiently high fault current is needed to operate protective devices quickly during an earth fault. Measuring at the furthest point ensures the worst-case scenario still meets disconnection times. This prevents dangerous touch voltages from persisting."
  },
  {
    "prompt": "What action should be taken to allow for the effect of transient voltages when carrying out earth fault loop impedance tests?",
    "options": {
      "A": "Turn off the anti-trip function on the instrument",
      "B": "The instrument is on the lowest measuring range",
      "C": "Turn on the anti-trip function on the instrument",
      "D": "The test is repeated to confirm consistent readings"
    },
    "answer": "D",
    "explanation": "Repeating the test helps ensure that any momentary voltage spikes or transient fluctuations on the supply do not distort the reading. This provides a more reliable Zs value by confirming that multiple test results are consistent. Transient voltages are common on live systems, so verification through repeated measurements is essential."
  },
  {
    "prompt": "What factor can significantly reduce the values of measured earth fault loop impedance, compared to a calculated figure obtained using measured ze and measured r1 + r2 values?",
    "options": {
      "A": "High circuit load during testing",
      "B": "Parallel earth paths",
      "C": "A loose connection in the line conductor",
      "D": "Leakage currents"
    },
    "answer": "B",
    "explanation": "Additional earth return paths reduce the overall loop impedance by providing alternative low-resistance routes. This makes the measured Zs lower than the theoretical R1+R2 + Ze value. It is a common occurrence in installations with metallic containment or bonding."
  },
  {
    "prompt": "What value requires the application of a multiplier correction factor when confirming an earth fault loop impedance test result complies with the IET Wiring Regulations?",
    "options": {
      "A": "The measured ZS values",
      "B": "The tabulated values in BS 7671",
      "C": "The measured R1+R2 value",
      "D": "The values in Guidance Note 3"
    },
    "answer": "B",
    "explanation": "Zs tables assume a conductor operating at its maximum permitted temperature, so measured cold values must be corrected. A multiplier compensates for the increase in resistance as conductors warm under load. This ensures a fair comparison between measured and tabulated Zs."
  },
  {
    "prompt": "The water heater circuit is wired in 6mm² with a 2.5mm² cpc conductors, and is protected by a 32 A BS 88-2 fuse. What is the maximum permitted measured earth fault loop impedance value for compliance with BS 7671?",
    "options": {
      "A": "1.70 Ω",
      "B": "1.36 Ω",
      "C": "0.79 Ω",
      "D": "0.99 Ω"
    },
    "answer": "D",
    "explanation": "BS 7671 provides specific Zs limits for each protective device type and rating, and 0.99 Ω is the allowable value for this fuse. Staying below this ensures sufficient fault current for correct disconnection. This protects against dangerous shock voltages during an earth fault."
  },
  {
    "prompt": "What is the purpose of the phase-sequence test?",
    "options": {
      "A": "To ensure balanced loads on the three-phase distribution board",
      "B": "To ensure that three-phase motors turn in the correct direction",
      "C": "To ensure single-pole protective devices are in the line conductor",
      "D": "To ensure harmonic currents are not created on the system"
    },
    "answer": "B",
    "explanation": "Three-phase rotation determines motor direction, and incorrect sequence can cause damage or unsafe operation. Verifying phase order prevents reverse running and mechanical hazards. It is essential before energising three-phase equipment."
  }
];

export const electricianTraining2391Mock2Questions: SourceQuestion[] = [
  {
    "prompt": "Increasing the length of the cable will not affect the:",
    "options": {
      "A": "Insulation resistance",
      "B": "Rating of the protective device",
      "C": "Volt-drop",
      "D": "Loop impedance"
    },
    "answer": "B",
    "explanation": "Increasing the length of a cable increases its resistance, so this will increase both the earth fault loop impedance (Zs) and the volt-drop, because both depend on the resistance of the conductors. It can also affect the measured insulation resistance slightly, as a longer cable presents a larger surface area and more material for leakage paths. However, the rating of the protective device (fuse or circuit-breaker) is fixed by its design and the circuit design, not by cable length. You might need to choose a different protective device if voltage drop or fault disconnection times become unacceptable, but the cable getting longer does not itself “change” the rating printed on the device."
  },
  {
    "prompt": "Electrical equipment installed within zone 0 of a bathroom shall have a minimum protection of?",
    "options": {
      "A": "IP7X",
      "B": "IPX7",
      "C": "IPX4",
      "D": "IP4X"
    },
    "answer": "B",
    "explanation": "Zone 0 is the highest-risk area of a bathroom — the inside of a bath or shower basin where equipment can be completely submerged. Because of this, electrical equipment in Zone 0 must have a minimum ingress protection rating of IPX7, meaning it is protected against immersion in water up to 1 metre for 30 minutes. This ensures the equipment can safely withstand full water immersion, which is essential in this zone."
  },
  {
    "prompt": "Identify one of the following which is not classed as a live conductor?",
    "options": {
      "A": "Neutral conductor",
      "B": "Circuit protective conductor",
      "C": "Line conductor",
      "D": "Switch wire"
    },
    "answer": "B",
    "explanation": "Live conductors are those that are energised in normal service, such as line conductors, neutral conductors (under BS 7671 definitions), and switched lines. They can all carry current during normal operation. The circuit protective conductor (CPC) is specifically designed to carry current only under fault conditions as a safety path back to the source. It is connected to exposed conductive parts and to earth, so it is considered a protective conductor, not a live one. Under normal conditions, no current should flow in the CPC, which is why A is the only one that is not classed as a live conductor."
  },
  {
    "prompt": "An extension to an existing circuit protected by a fuse is to be tested. Before this work can proceed?",
    "options": {
      "A": "The circuit must be isolated, proven dead and warning notices erected",
      "B": "A warning notice must be issued to the client",
      "C": "An RCD must be installed and its operation confirmed as satisfactory",
      "D": "Testing may continue without warning notices if the premises is un-occupied"
    },
    "answer": "A",
    "explanation": "Safe isolation is a fundamental safety procedure before working on or testing circuits. This involves identifying the correct circuit, isolating it using an appropriate device, locking it off where possible, and then proving it is dead using an approved voltage indicator. Warning notices are then placed at the point of isolation to prevent others from inadvertently re-energising the circuit. The occupancy status of the premises does not remove the duty to follow safe isolation procedures."
  },
  {
    "prompt": "The legal requirement for electrical equipment to be maintained in good order is laid down in the:",
    "options": {
      "A": "Provision and Use of Work Equipment Regulations 1998",
      "B": "Management of Health and Safety at Work Regulations 1999",
      "C": "Health and Safety at Work Act 1974",
      "D": "Electricity at Work Regulations 1989"
    },
    "answer": "D",
    "explanation": "The Electricity at Work Regulations 1989 (EAWR) specifically address electrical systems and equipment. They require that electrical equipment is maintained so as to prevent danger, which includes keeping it in good working order and carrying out appropriate testing and inspection. The Health and Safety at Work Act provides a general duty of care but does not focus specifically on electrical systems. The other regulations support safe working practices but EAWR is directly targeted at electrical safety and maintenance, making A the correct answer."
  },
  {
    "prompt": "Before using a multifunction tester it is most important to check for?",
    "options": {
      "A": "A calibration date",
      "B": "The correct length leads",
      "C": "A known manufacturer",
      "D": "Damage to the instrument"
    },
    "answer": "D",
    "explanation": "While calibration and manufacturer are important considerations, the most immediate safety concern is physical damage to the tester or its leads. Cracked cases, exposed conductors, damaged insulation, or bent probes can create shock hazards or cause short circuits. Damaged test equipment can also give dangerously misleading readings, such as indicating a circuit is dead when it is actually live. Therefore, a visual inspection for damage is a critical first step before using any test instrument."
  },
  {
    "prompt": "When performing an insulation resistance test, lamps should be removed. Failure to do this could result in?",
    "options": {
      "A": "Circuit damage",
      "B": "Incorrect polarity",
      "C": "False readings",
      "D": "Test instrument damage"
    },
    "answer": "C",
    "explanation": "Lamps, especially modern LED and fluorescent control gear, present relatively low resistance paths compared with true insulation. If they remain connected during insulation resistance testing, they can significantly reduce the measured value, even if the actual cable insulation is fine. This leads to false readings that might suggest a fault where none exists. While there is some risk of damaging sensitive electronic lamps with 500V DC, the main exam focus is that they distort the reading."
  },
  {
    "prompt": "For a 230v installation, the test voltage is?",
    "options": {
      "A": "500v",
      "B": "230v",
      "C": "50v",
      "D": "5000v"
    },
    "answer": "A",
    "explanation": "BS 7671 specifies that for circuits up to and including 500V nominal, the insulation resistance test voltage should be 500V DC. This is high enough to stress the insulation and reveal breakdowns, but low enough not to damage standard insulation systems designed for low-voltage installations. 230V is the operating voltage, not the test voltage, and 5000V would be far too high and inappropriate for general LV installations."
  },
  {
    "prompt": "A polarity test is performed on Edison screw lampholders to?",
    "options": {
      "A": "Ensure the centre contact is not connected to the line conductor",
      "B": "Ensure the centre contact is connected to the line conductor",
      "C": "Ensure that the cpc is continuous throughout the circuit",
      "D": "Ensure that there is no breakdown in insulation"
    },
    "answer": "B",
    "explanation": "On Edison screw lampholders, the threaded outer shell is more easily touched when the lamp is removed. For safety, this outer part should be connected to neutral, while the centre contact should be connected to line. That way, when someone is changing a lamp, the risk of touching a live part is minimised. Polarity testing checks that this arrangement has been wired correctly, specifically that the centre contact is the live conductor."
  },
  {
    "prompt": "The correct formula for calculating earth fault loop impedance is?",
    "options": {
      "A": "Zs=Ze+R1+R2",
      "B": "Ze=Zs+R1+R2",
      "C": "Ze=Zs-R1+R2",
      "D": "Ze=Zs/R1+R2"
    },
    "answer": "A",
    "explanation": "Zs is the total earth fault loop impedance seen at the end of the circuit, and is made up of the external impedance (Ze) plus the resistance of the line conductor (R1) and the circuit protective conductor (R2) within the installation. So total = external + internal contributions. The formula Ze = Zs + R1 + R2 would incorrectly suggest external impedance increases with longer circuits, which is not true. Therefore Zs = Ze + R1 + R2 is the correct relationship used when designing circuits and checking disconnection times."
  },
  {
    "prompt": "Isolation' means the disconnection and separation of the electrical equipment from every source of electrical energy in such a way that?",
    "options": {
      "A": "Adequate precautions have been taken",
      "B": "Is familiar with all operatives concerned with the installation",
      "C": "The supply cannot be re-instated",
      "D": "This disconnection and separation is secure"
    },
    "answer": "D",
    "explanation": "Isolation is defined as the secure disconnection and separation from all sources of electrical energy, so that the equipment cannot be made live accidentally. This may involve mechanical locking, clear contact separation, and visible confirmation. The key concept is that the isolation is secure, meaning reliable and not easily overridden. While preventing reinstatement is part of the aim, the formal definition in standards centres on secure disconnection and separation."
  },
  {
    "prompt": "Prior to energising, polarity should be tested using?",
    "options": {
      "A": "A continuity tester or low-resistance ohmmeter",
      "B": "A two-pole voltage indicator on the energised circuit",
      "C": "An earth fault loop impedance tester",
      "D": "An insulation resistance tester at 500 V DC"
    },
    "answer": "A",
    "explanation": "Prior to energising, polarity should be tested using a continuity tester / low-resistance ohmmeter (i.e., the continuity function of a multifunction tester). Polarity “prior to energising” is a dead test (done with the supply isolated), and the aim is to prove that switches, protective devices and socket line terminals are connected to the line conductor, not neutral. The safe way to do that with the circuit dead is to use a low-resistance ohmmeter/continuity tester: you link line to CPC (or use the ring/radial method) and then check for continuity at the outlets/switches in the correct terminals. A two-pole voltage tester is used for live polarity checks after energising, not before. Source endpoint omits the answer options for this item, so the options are reconstructed from the source explanation."
  },
  {
    "prompt": "During a continuity of ring final conductors test, 10 sockets give a R1+R2 reading of 0.68Ω but one socket gives a reading of 0.92Ω. This could indicate?",
    "options": {
      "A": "A short circuit",
      "B": "A high resistance fault",
      "C": "A missing earth connection",
      "D": "A spur on the circuit"
    },
    "answer": "D",
    "explanation": "During a continuity of ring final conductors test , the resistance readings for all sockets in the ring circuit should be relatively consistent. If one socket shows a significantly higher resistance (0.92Ω compared to 0.68Ω for others) , it suggests that this socket may be fed from a spur rather than directly from the ring. A spur is an additional wire connected to a ring circuit, often leading to higher resistance because it's not part of the complete loop. The other sockets in the ring should have very similar readings, and any deviation (like 0.92Ω instead of 0.68Ω) could be a sign of a spur. Other options explained: A high resistance fault would typically result in erratic or much higher readings than normal. A missing earth connection would likely show an open circuit (no continuity) rather than an increased resistance. A short circuit would lead to very low resistance, not a higher reading."
  },
  {
    "prompt": "When measuring R1 + R2 with a multifunction tester, the correct scale to be reading would be in?",
    "options": {
      "A": "M/Ω",
      "B": "Milliamps",
      "C": "Ohms",
      "D": "kV"
    },
    "answer": "C",
    "explanation": "R1+R2 is the combined resistance of the line and protective conductor to the furthest point of the circuit. Resistance is measured in ohms, typically with values in the decimal ohm range (e.g., 0.5Ω). Mega-ohms are used for insulation resistance and are far too large a scale for conductor resistance. Milliamps are units of current, and kV (kilovolts) are units of voltage, not resistance."
  },
  {
    "prompt": "On a typical 230 V circuit (IR test at 500 V DC), which insulation resistance value should be investigated as good practice?",
    "options": {
      "A": "2.0MΩ",
      "B": "0.5MΩ",
      "C": "2.5MΩ",
      "D": "5MΩ"
    },
    "answer": "A",
    "explanation": "As good practice, you’d investigate anything around 2 MΩ or lower (even though the formal BS 7671 minimum pass value at 500 V DC for most LV circuits is 1 MΩ)."
  },
  {
    "prompt": "It is a good idea when performing an insulation resistance test on a large installation, to subdivide circuits to avoid?",
    "options": {
      "A": "False readings from series resistances",
      "B": "Confusion over readings",
      "C": "False readings from parallel resistances",
      "D": "Excessively high readings"
    },
    "answer": "C",
    "explanation": "When multiple circuits are tested together, there may be many parallel leakage paths through connected equipment or wiring. These parallel resistances combine to give a lower overall reading than each circuit on its own, potentially masking issues or making interpretation difficult. This is known as the effect of parallel resistances. By subdividing and testing smaller parts independently, the influence of these parallel paths is reduced and the test results become more accurate and meaningful."
  },
  {
    "prompt": "The insulation resistance of two circuits is of 40MΩ an 36MΩ respectively. When tested together what is the total insulation resistance?",
    "options": {
      "A": "4MΩ",
      "B": "22MΩ",
      "C": "17MΩ",
      "D": "76MΩ"
    },
    "answer": "C",
    "explanation": "When two insulation resistances are in parallel, the total resistance is less than either individual resistance. The formula is: 1/Rₜ = 1/R₁ + 1/R₂. So 1/Rₜ = 1/40 + 1/36 = (36 + 40) / (40 × 36) = 76/1440. Rₜ = 1440 / 76 ≈ 18.95, but exam rounding often approximates to around 17–19MΩ depending on simplification; the closest given option is 17MΩ. The key idea is that IR values in parallel combine to a lower figure than each alone."
  },
  {
    "prompt": "MΩ is the abbreviation used for:?",
    "options": {
      "A": "Milli-Ohms",
      "B": "Micro-Ohms",
      "C": "Mega-Ohms",
      "D": "Megger-Ohms"
    },
    "answer": "C",
    "explanation": "MΩ stands for mega-ohms, where “mega” means one million (10⁶). So 1MΩ is 1,000,000Ω. This unit is used in insulation resistance testing because insulation values are usually very high. “Megger” is a brand name of a manufacturer of test equipment, not a unit. Micro-ohms and milli-ohms are units for very small resistances, not large ones, so they are not appropriate for insulation resistance."
  },
  {
    "prompt": "A minor works certificate shall be issued where?",
    "options": {
      "A": "Work is carried out in a domestic situation only",
      "B": "An additional circuit is connected to an installation",
      "C": "The property current demand is to be increased",
      "D": "An alteration not requiring an additional circuit is needed"
    },
    "answer": "D",
    "explanation": "A Minor Electrical Installation Works Certificate is used when an existing circuit is altered or extended, but no new circuit is added. Examples include adding a socket to an existing ring or changing a light fitting and its associated wiring. When a new circuit is installed, a full Electrical Installation Certificate is required instead. The certificate applies to all types of premises, not just domestic ones. Therefore B accurately describes where a Minor Works certificate is appropriate."
  },
  {
    "prompt": "Which of the following would NOT be used to prove safe isolation?",
    "options": {
      "A": "Earth fault loop impedance tester",
      "B": "Test lamp",
      "C": "Voltage indicator",
      "D": "Multi-meter"
    },
    "answer": "D",
    "explanation": "Safe isolation should be proved using an approved voltage indicator or a purpose-designed test lamp that complies with GS38. Multimeters can be set to the wrong range, have internal fuses blown, or fail in a way that shows zero volts even when the circuit is live, making them unsafe for proving dead. An earth fault loop tester is used for Zs measurements, not for voltage indication. Although loop testers and multimeters may show voltage, they are not considered suitable or recommended tools for “proving dead” procedures."
  },
  {
    "prompt": "The test instrument that would give a value in MΩ would be?",
    "options": {
      "A": "Earth fault loop impedance tester",
      "B": "PFC tester",
      "C": "Megohmmeter",
      "D": "RCD tester"
    },
    "answer": "C",
    "explanation": "An insulation resistance tester applies a high DC test voltage (typically 250 V, 500 V or 1000 V) and measures the resistance of the insulation in megohms (MΩ). Ordinary multimeters usually measure up to kΩ or MΩ at low voltage and are not suitable for proper insulation testing of circuits, but an insulation resistance tester is specifically designed to give readings in MΩ for checking cable and equipment insulation."
  },
  {
    "prompt": "Which one of the following ensures safe inspection and maintenance all installation?",
    "options": {
      "A": "Regular operational testing of SPD",
      "B": "Protection of the installation by 30mA RCD",
      "C": "Division of the installation into circuits",
      "D": "Regular calibration of instrumentation"
    },
    "answer": "C",
    "explanation": "Dividing an installation into separate circuits allows safe inspection and maintenance because individual sections can be isolated without shutting down the entire system. This reduces the risk of electric shock and prevents accidental energisation while work is being carried out. It also makes the installation more convenient and safer to manage, as faults or maintenance in one area do not affect the rest of the installation."
  },
  {
    "prompt": "The test voltage and minimum insulation resistance value for a 750V circuit is?",
    "options": {
      "A": "1000 V & 0.5MΩ",
      "B": "500 V & 0.5MΩ",
      "C": "1000 V & 1MΩ",
      "D": "500 V & 1MΩ"
    },
    "answer": "C",
    "explanation": "Circuits operating over 500 V and up to 1000 V must be insulation-tested at 1000 V DC, and the standard requires a minimum acceptable reading of 1 MΩ. This ensures the insulation is strong enough to withstand the higher operating voltage safely."
  },
  {
    "prompt": "When isolating an installation and securing the means of disconnection in the OFF position, it is highly recommended that?",
    "options": {
      "A": "A caution notice or label is posted at the point of disconnection",
      "B": "Barriers are also placed around the supply",
      "C": "Everyone in the surrounding area is informed",
      "D": "More than one person holds the key"
    },
    "answer": "A",
    "explanation": "When isolating an installation, it is highly recommended to attach a lock-off device and warning tag to the point of disconnection, with the key kept by the person doing the work. This prevents anyone else from inadvertently switching the circuit back on, ensuring the isolation remains secure and under the direct control of the person at risk. This is a core part of safe isolation and lockout–tagout procedures."
  },
  {
    "prompt": "A surge protection device installed as part of a circuit should necessitate disconnection of the device prior to?",
    "options": {
      "A": "A voltage check",
      "B": "A polarity test",
      "C": "An earth fault loop impedance test",
      "D": "An insulation resistance test"
    },
    "answer": "D",
    "explanation": "A surge protection device (SPD) contains components that can interfere with insulation resistance testing. If an SPD is connected during the insulation resistance test, it could provide false readings or even be damaged due to the high test voltages typically used in insulation resistance tests. Therefore, the SPD must be disconnected prior to performing an insulation resistance test to ensure accurate results and to protect the device. Here’s why the other options are not correct: A polarity test : Polarity tests don't typically affect surge protection devices, so no disconnection is needed. A voltage check : A voltage check is a low-voltage test and does not usually pose a risk to the SPD. An earth fault loop impedance test : This test is typically unaffected by surge protection devices and does not require their disconnection."
  },
  {
    "prompt": "Given that the resistance per metre of 2.5mm² cable is 7.41mΩ/m at 20°C , what would the approximate R1+R2 reading be at the at the extreme end of a 25m long 20A radial socket outlet circuit?",
    "options": {
      "A": "0.37Ω",
      "B": "0.17Ω",
      "C": "0.74Ω",
      "D": "0Ω"
    },
    "answer": "A",
    "explanation": "For a 25 m radial, the test at the extreme end measures the out-and-back resistance (line + cpc). Using the given resistance for 2.5 mm²: 7.41 mΩ/m=0.00741Ω/m 7.41 mΩ/m=0.00741Ω/m Approx R1+R2≈2×25×0.00741 R1+R2≈2×25×0.00741 =50×0.00741=0.3705Ω≈0.37Ω =50×0.00741=0.3705Ω≈0.37Ω Approximate R1+R2≈0.37 Ω R1+R2≈0.37Ω"
  },
  {
    "prompt": "A electrical Installation Condition Report would be carried out on?",
    "options": {
      "A": "An existing property",
      "B": "A new installation",
      "C": "A completely refurbished installation",
      "D": "A socket outlet added to an existing circuit"
    },
    "answer": "A",
    "explanation": "An Electrical Installation Condition Report (EICR) is specifically carried out on an existing installation to assess its safety and condition. It checks for deterioration, damage, non-compliances and potential dangers. It is not used for new work — new installations use an Electrical Installation Certificate (EIC) instead. An EICR is therefore the correct report for assessing the state of an installation that is already in service."
  },
  {
    "prompt": "A polarity test is conducted to verify that?",
    "options": {
      "A": "The circuit protection will operate within limits",
      "B": "There is no breakdown of the conductor's insulation",
      "C": "Every protective and single pole device is connected in the line conductor only",
      "D": "The resistance is low enough to operate the protective device within the specified time"
    },
    "answer": "C",
    "explanation": "A polarity test is conducted to verify that the live (line) conductor is correctly connected to the line terminal of the sockets, switches, and other devices in the circuit. This also ensures that protective devices (e.g., circuit breakers or fuses) are correctly wired in the line conductor and not the neutral. Here's why the other options are not correct: There is no breakdown of the conductor's insulation : This is checked during an insulation resistance test , not a polarity test. The circuit protection will operate within limits : This is verified through an earth fault loop impedance test and not during a polarity test. The resistance is low enough to operate the protective device within the specified time : This is related to the earth fault loop impedance test , not the polarity test."
  },
  {
    "prompt": "Prior to commencing work on a circuit, it is important to?",
    "options": {
      "A": "Place clearly visible signs",
      "B": "Check with the occupier/user that it is safe to isolate",
      "C": "Lock off the supply",
      "D": "Ensure you have checked your equipment"
    },
    "answer": "B",
    "explanation": "Prior to commencing work on a circuit, it is essential to make sure it cannot be live. This means correctly identifying the circuit, switching it off, securing the isolation where possible, and then proving it is dead with a suitable two-pole voltage tester or approved voltage indicator. Simply turning a switch off is not enough; only by testing can you be certain there is no dangerous voltage present, which is fundamental to preventing electric shock or injury."
  },
  {
    "prompt": "GS 38 does NOT recommend the following?",
    "options": {
      "A": "Leads are insulated",
      "B": "Probes are different colours",
      "C": "Finger guards",
      "D": "Probes have 4mm exposed tips"
    },
    "answer": "D",
    "explanation": "GS 38 sets safety requirements for test leads and probes to reduce the risk of electric shock. It states that probe tips should have no more than 4 mm of exposed metal, and in many cases even recommends using shrouded or spring-loaded tips to reduce exposure further. Therefore, probes with 4 mm exposed tips (or more) are not recommended, because they leave too much metal exposed and increase the chance of accidental contact with live parts."
  },
  {
    "prompt": "The Insulation resistance of a new circuit is to be done. The most appropriate range is?",
    "options": {
      "A": "µΩ",
      "B": "Ω",
      "C": "MΩ",
      "D": "KΩ"
    },
    "answer": "C",
    "explanation": "When performing an insulation resistance test on a new circuit, the most appropriate range is in Megaohms (MΩ) . This is because insulation resistance in new circuits typically measures in MΩ values, which indicates that the insulation is intact and effectively preventing leakage currents. Here's why the other options are less appropriate: KΩ : This would be used for lower resistance values, but it's not appropriate for insulation testing, where higher resistance values (typically in MΩ) are expected. Ω : Insulation resistance should be much higher than regular resistance testing, so a value in ohms is not suitable for this test. µΩ : This is used for measuring very low resistance values, not suitable for insulation testing, which requires much higher resistance values."
  },
  {
    "prompt": "In the interests of avoiding inadvertent energisation of an isolated circuit it is good practice that the point of isolation is kept under the control of?",
    "options": {
      "A": "The customer ordering the work",
      "B": "An experienced supervisor",
      "C": "The person who is carrying out the work",
      "D": "A known workmate"
    },
    "answer": "C",
    "explanation": "To stay safe, the person working on the circuit must be 100% sure it cannot be re-energised by someone else. If they control the point of isolation (e.g. lock-off, key, lockout device), no one can accidentally switch it back on while they’re working. This is the basis of safe isolation procedures and lockout–tagout: the person at risk controls the isolation."
  },
  {
    "prompt": "An RCBO is a device which is used as:?",
    "options": {
      "A": "An overload protection device only",
      "B": "Both an overcurrent and residual current protection device",
      "C": "A short circuit protection device only",
      "D": "A voltage reduction sensor"
    },
    "answer": "B",
    "explanation": "RCBO stands for Residual Current Breaker with Overcurrent protection. It combines the functions of an MCB (overcurrent / short-circuit protection) and an RCD (residual current / earth fault protection) in one device. So it protects against overload + short circuit + earth leakage, which is exactly “both an overcurrent and residual current protection device.”"
  },
  {
    "prompt": "The correct instrument to perform a polarity test on an Edison type lamp holder is?",
    "options": {
      "A": "A two-pole voltage tester",
      "B": "A volt stick",
      "C": "An RCD tester",
      "D": "An insulation resistance tester"
    },
    "answer": "A",
    "explanation": "A polarity test checks that the live conductor is connected to the centre contact of an Edison lamp holder for safety. A test lamp / two-pole tester is the correct instrument because it shows the presence of voltage between two points, allowing you to confirm which terminal is live. A multimeter can be used, but regulations prefer a two-pole tester for safe, reliable polarity testing."
  },
  {
    "prompt": "For the purpose of safe isolation you must check the approved voltage Indicators, which of the following would be most suitable to use?",
    "options": {
      "A": "Check the proving unit on the isolated circuit",
      "B": "Check the isolated circuit with the testers",
      "C": "Check the instrument on a proving unit",
      "D": "Checked on an isolated circuit"
    },
    "answer": "C",
    "explanation": "The correct sequence is often described as “test the tester, test the circuit, test the tester again.” A proving unit is a dedicated device that provides a known voltage to verify that the voltage indicator is working correctly before and after checking the circuit. Checking on an isolated circuit proves nothing if the tester has failed. Using the proving unit ensures that any reading of “dead” on the real circuit can be trusted. Therefore, option A is the best description."
  },
  {
    "prompt": "The Zs reading taken on a motor circuit may be lower than the Ze+R1+R2 calculation due to?",
    "options": {
      "A": "High resistance terminals",
      "B": "An incorrect original reading",
      "C": "Parallel paths",
      "D": "Magnetic forces"
    },
    "answer": "C",
    "explanation": "The Zs reading taken on a motor circuit may be lower than the Ze + R1 + R2 calculation due to the presence of parallel paths . In motor circuits, there could be additional paths for current flow (such as the motor frame or other conductive parts), which can reduce the measured impedance ( Zs ) compared to the calculated value from Ze (external earth fault loop impedance), R1 (line conductor), and R2 (earth conductor). Here’s why the other options are less likely: Magnetic forces : While magnetic forces affect motor operation, they do not directly influence the impedance readings in the circuit. High resistance terminals : High resistance at terminals would typically increase, not decrease, the impedance readings. An incorrect original reading : While possible, an incorrect original reading would likely show a higher impedance, not a lower one."
  },
  {
    "prompt": "A polarity test should be carried out on a new installation?",
    "options": {
      "A": "Before the installation has been energised",
      "B": "As part of the insulation resistance test",
      "C": "During the earth fault loop impedance test",
      "D": "After the installation has been energised"
    },
    "answer": "A",
    "explanation": "Polarity should be confirmed before the installation is energised, to make sure that all line and neutral conductors are correctly connected and that switches and protective devices are in the line conductor. This avoids the dangerous situation of energising a circuit where, for example, the neutral is switched and the line remains permanently live. Insulation resistance tests are normally performed with the circuit dead and do not confirm polarity. Loop impedance tests are done later, with the supply on. So the correct time for an initial polarity test is before energisation."
  },
  {
    "prompt": "Identify the most suitable source of supply isolation before undertaking maintenance on an installation?",
    "options": {
      "A": "BS EN 60898 circuit breaker",
      "B": "BS 60947 switchgear",
      "C": "13A cartridge fuse",
      "D": "BS 7671 fuse"
    },
    "answer": "B",
    "explanation": "BS 60947 covers industrial switchgear and controlgear designed specifically for duties such as isolation under load and providing clear indication of contact position. These devices are robust and suitable as main isolators. A 13A fuse in a plug or spur is not a suitable means of isolating an entire installation. BS EN 60898 circuit breakers provide overcurrent protection and may not always meet the specific requirements for isolation duty in all applications. So purpose-designed BS 60947 switchgear is preferred for main isolation."
  },
  {
    "prompt": "Isolation of a block of flats is to be done and you have not sought owner's permission what could be the major hazard of this?",
    "options": {
      "A": "Data systems could be damaged due to electro- magnetic effects of testing",
      "B": "Emergency lights would not operate",
      "C": "Occupants at a greater risk of electric shock",
      "D": "Occupants trapped in lifts"
    },
    "answer": "D",
    "explanation": "If you isolate the supply to a block of flats without proper coordination, you risk shutting down lift supplies while people are still inside them. This could trap occupants between floors, causing distress and potentially serious health or safety risks. Most emergency lighting circuits are often supplied from separate or backup sources, and the electro-magnetic effect of testing is not typically a hazard of isolation itself. The major immediate hazard in this scenario is lift entrapment."
  },
  {
    "prompt": "The following readings were taken on a test performed on a ring final circuit: Line-Line 0.8Ω, Neutral-Neutral 0.8Ω and cpc-cpc 0.8Ω. The expected reading between line and neutral at each socket outlet would be?",
    "options": {
      "A": "0.6Ω",
      "B": "0.8Ω",
      "C": "0.4Ω",
      "D": "0.2Ω"
    },
    "answer": "C",
    "explanation": "or a ring final circuit, when you measure end-to-end resistances of each conductor (line, neutral, CPC), you then cross-connect line to neutral at the origin and measure at each socket. This creates two parallel paths through the ring. Each path has approximately half the total resistance, so the reading at each socket is roughly the average of the two end-to-end values. With 0.8Ω line and 0.8Ω neutral, the effective resistance seen at a socket is about 0.8Ω / 2 = 0.4Ω. Minor variations may occur, but 0.4Ω is the expected theoretical value."
  }
];

export const electricianTraining2391Mock3Questions: SourceQuestion[] = [
  {
    "prompt": "The circuit breaker supplying the ring circuit keeps tripping. This type of electrical fault is known as:",
    "options": {
      "A": "Short-circuit",
      "B": "High resistance fault",
      "C": "Earth fault",
      "D": "Overload"
    },
    "answer": "D",
    "explanation": "An overload occurs when too many appliances draw current from the ring circuit, exceeding the breaker’s rated capacity. This causes the device to trip thermally after a short period. If it were a short-circuit or earth fault, the breaker would trip instantly and much more violently, so repeated tripping during normal use indicates an overload condition rather than a fault in the wiring."
  },
  {
    "prompt": "On a construction site, the result of the resistance of the earth electrode and the rated residual operating current should not exceed:",
    "options": {
      "A": "50 V",
      "B": "25 V",
      "C": "400 V",
      "D": "110 V"
    },
    "answer": "A",
    "explanation": "Explanation: This question refers to the safety formula used on construction sites: Ra × IΔn ≤ 50 V This is the maximum permissible touch voltage on a construction site, as per BS 7671 and industry guidance. 110 V is the reduced low voltage supply sometimes used on sites — it is not the acceptable touch voltage limit. Therefore, the correct safety limit is 50 volts."
  },
  {
    "prompt": "The following readings were taken on a test performed on a ring final circuit: Line-Line 0.8Ω, Neutral-Neutral 0.8Ω and cpc-cpc 0.8Ω. The expected reading between line and neutral at each socket outlet would be:",
    "options": {
      "A": "0.8Ω",
      "B": "0.2Ω",
      "C": "0.4Ω",
      "D": "0.6Ω"
    },
    "answer": "C",
    "explanation": "In the cross-connection test the L–N reading at a socket is effectively two equal paths around the ring in parallel. Each path is about half the line (0.8/2) + half the neutral (0.8/2) = 0.8 Ω, and 0.8 Ω ∥ 0.8 Ω = 0.4 Ω (same as (R1+Rn)/4 (R1+Rn)/4)."
  },
  {
    "prompt": "A length of copper wire has a resistance of 8Ω. What would be the resistance if the length of wire were halved and the cross sectional area halved?",
    "options": {
      "A": "8Ω",
      "B": "2Ω",
      "C": "4Ω",
      "D": "16Ω"
    },
    "answer": "A",
    "explanation": "Resistance stays the same: 8 Ω. Because R=ρLA R=ρ A L ​ . If L L is halved and A A is also halved: R′=ρL/2A/2=ρLA=R R ′ =ρ A/2 L/2 ​ =ρ A L ​ =R So R′=8 Ω R ′ =8Ω."
  },
  {
    "prompt": "The top part of a distribution board must conform to:",
    "options": {
      "A": "IPX2",
      "B": "IP4X",
      "C": "IP2X",
      "D": "IP67"
    },
    "answer": "B",
    "explanation": "The top of a distribution board requires IP4X protection, which prevents the entry of small objects such as wires or tools that could make accidental contact with live parts. This is stricter than the IP2X requirement for other accessible surfaces, because falling objects or probing from above pose a greater risk around live busbars."
  },
  {
    "prompt": "After completing the ring final continuity, the following would be proven:",
    "options": {
      "A": "(R1 & R2) value & polarity",
      "B": "(r1 + r2) value & polarity",
      "C": "(r1 & rn) value & polarity",
      "D": "(R1 & R2) only"
    },
    "answer": "A",
    "explanation": "Ring final continuity testing not only confirms that both the live and earth conductors form complete, unbroken loops, but it also demonstrates correct polarity, since the measured values prove that each conductor is connected to the correct point throughout the system. This ensures the line conductor is not crossed with neutral or CPC at any socket."
  },
  {
    "prompt": "We would carry out a polarity test on an Edison type lamp holder to ensure:",
    "options": {
      "A": "The centre contact is connected to the line conductor",
      "B": "The outer contact is connected to the line conductor",
      "C": "The light switch is working correctly",
      "D": "There is no breakdown in insulation"
    },
    "answer": "A",
    "explanation": "For safety, the centre contact of an Edison screw lamp holder must be live, while the threaded outer shell must be neutral. This prevents a user from accidentally touching a live shell while inserting or removing a lamp. The polarity test confirms that the live feed is correctly placed on the centre terminal."
  },
  {
    "prompt": "Guidance Notes 3 recommends that a low resistance Ohmmeter should have a range of:",
    "options": {
      "A": "0.2 to 2.0Ω",
      "B": "0 to 10Ω",
      "C": "1.2 to 2.0Ω",
      "D": "2.0 to 2.2Ω"
    },
    "answer": "A",
    "explanation": "Low-resistance continuity tests of protective conductors typically produce readings well below 1Ω. A meter with a range of 0.2–2.0Ω provides the necessary resolution and accuracy to measure small conductor resistances and identify high-resistance faults that could compromise safety."
  },
  {
    "prompt": "A low resistance ohmmeter should provide a short circuit current of:",
    "options": {
      "A": "A25mA",
      "B": "More than 0.2A",
      "C": "Not less than 200mA",
      "D": "250A"
    },
    "answer": "C",
    "explanation": "Guidance Notes 3 specifies that continuity testing requires a current of at least 200 mA to ensure that the test overcomes any surface oxidation or terminal contact resistance. Using a lower current may produce misleadingly high readings, so the 200 mA requirement ensures consistent and reliable results."
  },
  {
    "prompt": "Which one of the following is not a reason for testing polarity before energising the circuit?",
    "options": {
      "A": "Line conductor in centre contact of baton-type lamp holder",
      "B": "Line conductor is in the switching of lighting",
      "C": "Line conductor is in the centre contact of a screw type lamp holder",
      "D": "Line conductor is in the protective device"
    },
    "answer": "A",
    "explanation": "Baton-type lamp holders do not require the line conductor to be connected to a specific contact, unlike Edison screw or bayonet holders. Therefore, confirming the orientation of the line conductor in a baton holder is not a reason for polarity testing. Polarity tests are instead required to ensure correct switching, correct line identification, and correct terminal orientation."
  },
  {
    "prompt": "Approximately how long would a length of CPC be to give a reading of 0.36Ω, considering that 1.5mm² cable has a resistance per metre of 12.1mΩ?",
    "options": {
      "A": "45m",
      "B": "15m",
      "C": "30m",
      "D": "10m"
    },
    "answer": "C",
    "explanation": "Resistance per metre = 12.1 mΩ/m = 0.0121 Ω/m Length L L needed to give 0.36 Ω 0.36Ω: L=0.360.0121≈29.75 m≈30 m L= 0.0121 0.36 ​ ≈29.75 m≈30 m"
  },
  {
    "prompt": "As good practice, which insulation resistance value should be investigated:",
    "options": {
      "A": "2.0MΩ",
      "B": "2.5MΩ",
      "C": "5MΩ",
      "D": "0.5MΩ"
    },
    "answer": "A",
    "explanation": "While BS 7671 allows insulation resistance values down to 1 MΩ on most circuits, practical experience and industry guidance suggest that anything below 2.0 MΩ should be examined more carefully. Values lower than this may indicate developing faults, moisture, damaged insulation, or connected equipment affecting the reading. Investigating early helps prevent deterioration from becoming a safety issue."
  },
  {
    "prompt": "A reason for testing the prospective fault current would be to:",
    "options": {
      "A": "Calculate the external loop impedance",
      "B": "Ensure that the correct circuit protection devices are selected",
      "C": "Ensure the protective device will disconnect within given parameters",
      "D": "Verify the installation"
    },
    "answer": "C",
    "explanation": "Prospective fault current testing confirms that sufficient current will flow under fault conditions to ensure the protective device, such as an MCB or fuse, trips quickly enough. Disconnection times are essential for protecting people from electric shock and preventing damage to wiring. If PFC is too low, the device may not operate in the required time, which would be unsafe."
  },
  {
    "prompt": "The instrument shown is primarily used for which task during safe isolation?",
    "options": {
      "A": "Checking circuit continuity",
      "B": "Measuring insulation resistance",
      "C": "Measuring earth electrode resistance",
      "D": "Confirming the presence/absence of voltage (“prove dead”)"
    },
    "answer": "D",
    "explanation": "A two-pole voltage tester is typically used with a proving unit (and safe-isolation lock-off kit) to: prove the tester works, test the circuit is dead, prove the tester still works afterward."
  },
  {
    "prompt": "When performing an insulation resistance test, lamps should be removed. Failure to do this could result in:",
    "options": {
      "A": "False readings",
      "B": "Test instrument damage",
      "C": "Incorrect polarity",
      "D": "Circuit damage"
    },
    "answer": "A",
    "explanation": "Lamps create a parallel resistive path that artificially lowers the insulation resistance reading. The test voltage can also pass through lamp filaments, giving readings that do not reflect the true insulation condition of the wiring. Removing lamps ensures an accurate test of the fixed wiring only, without interference from connected components."
  },
  {
    "prompt": "The most important precaution to be taken before disconnecting a main bonding protective bonding conductor for test purposes is to:",
    "options": {
      "A": "Only used tools rated at 1000V",
      "B": "Warn the occupants",
      "C": "Isolate the supply and lock off",
      "D": "Check for parallel paths"
    },
    "answer": "C",
    "explanation": "Disconnecting bonding while the installation is live can expose metallic pipework and structural parts to dangerous touch voltages. The only safe way to test bonding continuity is to ensure the entire installation is fully isolated and locked off so it cannot be re-energised during work. This protects both the electrician and anyone else nearby."
  },
  {
    "prompt": "When performing a continuity of protective conductors test, you would use:",
    "options": {
      "A": "An insulation resistance tester",
      "B": "An RCD tester",
      "C": "A low resistance ohmmeter",
      "D": "An earth fault loop impedance tester"
    },
    "answer": "C",
    "explanation": "This test confirms the integrity of CPCs, bonding conductors, and metallic paths. A low-resistance ohmmeter delivers a minimum of 200 mA to ensure accurate, reliable readings. This level of current helps overcome contact resistance and provides meaningful continuity measurements for safety-critical conductors."
  },
  {
    "prompt": "The test voltage and minimum insulation resistance value for a 750V circuit is?",
    "options": {
      "A": "500 V & 0.5MΩ",
      "B": "1000 V & 0.5MΩ",
      "C": "500 V & 1MΩ",
      "D": "1000 V & 1MΩ"
    },
    "answer": "D",
    "explanation": "BS 7671 requires circuits operating above 500 V and up to 1000 V to be insulation-tested with a 1000 V DC test voltage. The minimum acceptable reading is 1 MΩ, ensuring that the insulation can safely withstand the stresses of higher operating voltages. Testing at the correct voltage is crucial to identifying breakdown or degradation in insulation materials."
  },
  {
    "prompt": "An a.c voltage of 120 V between conductors is classified as:",
    "options": {
      "A": "RLVS",
      "B": "ELV",
      "C": "SELV",
      "D": "LV"
    },
    "answer": "D",
    "explanation": "According to BS 7671 definitions, LV ranges from 50 V AC up to 1000 V AC. Since 120 V falls within this band, it is classified as a low-voltage system. It is therefore not considered extra-low voltage (ELV) or separated extra-low voltage (SELV), both of which must be below 50 V AC."
  },
  {
    "prompt": "A 230 V single-phase circuit is protected by a 16 A device to BS EN 60898 Type B. Which one of the following is the minimum value of current required to cause effective disconnection in the required time if the maximum permitted earth fault loop impedance is 2.87Ω:",
    "options": {
      "A": "123 A",
      "B": "81 A",
      "C": "164 A",
      "D": "248 A"
    },
    "answer": "B",
    "explanation": "At the maximum permitted earth fault loop impedance (Zs) the circuit will produce the lowest fault current, so we calculate the minimum disconnection current using Ohm’s law: Ia=U0/Zs I a ​ =U 0 ​ /Z s ​ . With U0=230 V U 0 ​ =230 V and Zs=2.87Ω Z s ​ =2.87Ω, the fault current is 230/2.87≈80 A 230/2.87≈80 A, which rounds to 81 A. This also matches the behaviour of a Type B 16 A MCB, which typically needs about 5 × In to operate its instantaneous (magnetic) trip for rapid disconnection: 5×16=80 A 5×16=80 A. Therefore, 81 A is the minimum current required to ensure effective disconnection within the required time at the worst-case (highest Zs) point on the circuit."
  },
  {
    "prompt": "The code IPX4 assigned to an electrical item would prevent ingress from:",
    "options": {
      "A": "Moisture",
      "B": "Wire or solid objects greater than 1mm in diameter",
      "C": "A BS human finger",
      "D": "Liquid splashes"
    },
    "answer": "D",
    "explanation": "An IPX4 rating means the equipment is protected against water splashing from any direction. The “X” indicates no rating for solid object protection, but the “4” ensures that water splashes—such as from a shower or rain—cannot penetrate the enclosure in a way that would affect safety. This rating is commonly required in bathroom zones or outdoor locations where brief or occasional water contact is likely."
  },
  {
    "prompt": "The correct formula for calculating earth fault loop impedance is?",
    "options": {
      "A": "Ze=Zs/R1+R2",
      "B": "Ze=Zs+R1+R2",
      "C": "Ze=Zs-R1+R2",
      "D": "Zs=Ze+R1+R2"
    },
    "answer": "D",
    "explanation": "Earth fault loop impedance (Zs) represents the total impedance in the fault loop path during an earth fault. It is composed of the external impedance (Ze), which is the supply’s contribution, plus the resistance of the live conductor (R1) and the circuit protective conductor (R2) within the installation. Using the formula Zs = Ze + R1 + R2 ensures the protective device will see sufficient fault current to operate within the prescribed disconnection time."
  },
  {
    "prompt": "During a routine periodic inspection, the person who determines the time to the next periodic inspection would be the:",
    "options": {
      "A": "Customer",
      "B": "Installer",
      "C": "Inspection and tester",
      "D": "Designer"
    },
    "answer": "C",
    "explanation": "The frequency of future inspections depends on the condition, use, and environment of the installation. Only a qualified inspector/tester, who has assessed the installation, is competent to recommend the appropriate interval before the next periodic inspection. This ensures the decision is based on technical evidence rather than customer preference or standard intervals."
  },
  {
    "prompt": "Prior to energising, polarity should be tested using:",
    "options": {
      "A": "An approved earth fault loop impedance tester",
      "B": "An approved ammeter",
      "C": "An approved voltage indicator",
      "D": "A low resistance ohmmeter"
    },
    "answer": "D",
    "explanation": "Prior to energising, polarity should be tested using a continuity tester / low-resistance ohmmeter (i.e., the continuity function of a multifunction tester). Polarity “prior to energising” is a dead test (done with the supply isolated), and the aim is to prove that switches, protective devices and socket line terminals are connected to the line conductor, not neutral. The safe way to do that with the circuit dead is to use a low-resistance ohmmeter/continuity tester: you link line to CPC (or use the ring/radial method) and then check for continuity at the outlets/switches in the correct terminals. A two-pole voltage tester is used for live polarity checks after energising, not before."
  },
  {
    "prompt": "During a continuity of ring final conductors test, 10 sockets give a R1+R2 reading of 0.68Ω but one socket gives a reading of 0.92Ω. This could indicate:",
    "options": {
      "A": "A short circuit",
      "B": "A missing earth connection",
      "C": "A spur on the circuit",
      "D": "A high resistance fault"
    },
    "answer": "A",
    "explanation": "A significantly lower resistance reading at one point usually indicates a parallel path, often due to a short-circuit or cross-connection between conductors reducing the measured resistance. While a missing earth connection would cause a high reading or no reading at all, a reading lower than expected strongly suggests a fault creating an unwanted shortcut in the circuit, such as line touching CPC or neutral."
  },
  {
    "prompt": "For a 230v installation, the test voltage is:",
    "options": {
      "A": "50v",
      "B": "5000v",
      "C": "500v",
      "D": "230v"
    },
    "answer": "C",
    "explanation": "BS 7671 requires that circuits operating at 230 V—such as typical domestic and commercial installations—are insulation-tested with a 500 V DC test voltage. This value is high enough to reveal weaknesses in insulation without damaging the circuit. Testing at 230 V or 50 V would not stress the insulation sufficiently, while 5000 V would be destructive."
  },
  {
    "prompt": "A polarity test should be carried out on a new installation:",
    "options": {
      "A": "After the installation has been energised",
      "B": "As part of the insulation resistance test",
      "C": "Before the installation has been energised",
      "D": "During the earth fault loop impedance test"
    },
    "answer": "C",
    "explanation": "Polarity must be verified before energising to ensure that switches control the line conductor, fittings are safely wired, and no dangerous misidentification exists. Energising a circuit with incorrect polarity can create immediate hazards. Therefore, polarity tests are always performed dead, using continuity methods or voltage indicators on controlled supplies, before the circuit ever goes live."
  },
  {
    "prompt": "If two equal wattage lamps were connected in series the volt drop across each of them would:",
    "options": {
      "A": "Equal the current flowing",
      "B": "Equal the supply voltage",
      "C": "Be the same",
      "D": "Be greater across the first lamp"
    },
    "answer": "C",
    "explanation": "In a series circuit, the same current flows through both lamps. If the lamps have equal wattage, they also have equal resistance. Since voltage drop is shared in proportion to resistance, two identical resistances will divide the supply voltage equally. This means each lamp drops the same amount of voltage, producing equal brightness."
  },
  {
    "prompt": "A 12V battery is connected across a set of resistors in series, values being, 60Ω 30Ω, 100Ω and 45Ω. The current flowing in the circuit is:",
    "options": {
      "A": "0.51 mA",
      "B": "51 mA",
      "C": "51 A",
      "D": "5.1 A"
    },
    "answer": "B",
    "explanation": "In a series circuit, resistances add up. The total resistance is 60 + 30 + 100 + 45 = 235Ω. Using Ohm’s law (I = V ÷ R), the current is 12 V ÷ 235 Ω ≈ 0.051 A or 51 mA. This demonstrates how adding resistors in series reduces overall current by increasing total circuit resistance."
  },
  {
    "prompt": "Given that the resistance per metre of 2.5mm² cable is 7.41mΩ/m at 20°C , what would the approximate R1+R2 reading be at the at the extreme end of a 25m long 20A radial socket outlet circuit:",
    "options": {
      "A": "0.17Ω",
      "B": "0.37Ω",
      "C": "0.27Ω",
      "D": "0.74Ω"
    },
    "answer": "B",
    "explanation": "Using the given resistance for 2.5 mm²: 7.41 mΩ/m=0.00741 Ω/m 7.41mΩ/m=0.00741Ω/m For a 25 m radial, at the extreme end you measure out (R1) + return (R2), so you use 2 × length: R1+R2≈2×25×0.00741=0.3705 Ω≈0.37 Ω R1+R2≈2×25×0.00741=0.3705Ω≈0.37Ω Approximate R1+R2≈0.37 Ω R1+R2≈0.37Ω"
  },
  {
    "prompt": "When an insulation resistance test on a large installation returns unexpectedly low readings, your course of action would be:",
    "options": {
      "A": "To retest with an alternative instrument",
      "B": "To fail the installation",
      "C": "To individually test each circuit",
      "D": "To accept the readings"
    },
    "answer": "C",
    "explanation": "Large installations often contain many interconnected circuits with multiple parallel paths through equipment, lamps, or other connected loads. These parallel paths can “pull down” the total resistance and make the overall insulation value appear much lower than it really is. By isolating and testing each circuit separately, you can identify whether the low value is caused by a genuine insulation fault or simply by the combined effect of many circuits connected together. This is the standard method recommended by Guidance Note 3 to avoid misinterpreting results."
  },
  {
    "prompt": "A Band II circuit has a maximum a.c. voltage of:",
    "options": {
      "A": "10000v",
      "B": "100v",
      "C": "1000v",
      "D": "50v"
    },
    "answer": "C",
    "explanation": "Band II circuits include all standard low-voltage electrical systems used in homes, commercial buildings, and industry. BS 7671 defines Band II wiring systems as those operating above 50 V AC and up to 1000 V AC, which covers nearly all typical distribution and final circuits. This classification helps ensure that wiring, insulation requirements, and safety measures are appropriate for the voltage levels involved."
  },
  {
    "prompt": "A STAR connected system has a line voltage of 1000V, what is the phase voltage:",
    "options": {
      "A": "1000V",
      "B": "400V",
      "C": "1732V",
      "D": "577V"
    },
    "answer": "D",
    "explanation": "In a star (wye) connection, the phase voltage (voltage from line to neutral) is equal to the line voltage divided by the square root of three. Using the formula Vphase = Vline ÷ √3, we get 1000 ÷ 1.732 ≈ 577 V. This relationship is fundamental in three-phase systems and ensures that equipment designed for phase voltage can be safely connected in star configurations."
  },
  {
    "prompt": "When carrying out an insulation resistance test on a large installation, why is it good practice to split (subdivide) the installation into smaller sections before testing?",
    "options": {
      "A": "Excessively high readings",
      "B": "Confusion over readings",
      "C": "False readings from series resistances",
      "D": "False readings from parallel resistances"
    },
    "answer": "D",
    "explanation": "When you insulation-test a large installation “all together”, lots of circuits and connected components create multiple parallel leakage paths. That reduces the overall measured IR (like resistors in parallel), which can make the result look worse than any single circuit actually is. Subdividing circuits isolates each section so you get a true reading for that circuit."
  },
  {
    "prompt": "Prior to performing an insulation resistance test, you should:",
    "options": {
      "A": "Disconnect all voltage sensitive devices",
      "B": "Ensure all circuit breakers are in the off position",
      "C": "Ensure all lamps are removed",
      "D": "Ensure all lampholders are fitted with lamps"
    },
    "answer": "A",
    "explanation": "Voltage-sensitive equipment such as dimmers, smart switches, electronic ballasts, timers, and control gear can be damaged by the high DC test voltages used during insulation resistance testing (typically 500–1000 V). Therefore, it is essential to disconnect them beforehand. Failing to do so risks destroying equipment, giving inaccurate readings, or invalidating warranties. Removing sensitive devices ensures the test examines only the fixed wiring without risking damage."
  },
  {
    "prompt": "The earth fault loop impedance reading on a ring final circuit is best achieved using an earth fault impedance tester and:",
    "options": {
      "A": "The prospective fault current",
      "B": "A standard 3 way fly lead",
      "C": "A BS1363 fly lead",
      "D": "Previous Ze results"
    },
    "answer": "C",
    "explanation": "A BS 1363 fly lead is specifically designed to connect a loop tester safely and correctly to a socket outlet. It ensures good contact with the live, neutral, and CPC terminals and avoids the risk of poor probe connections or exposed metal. This allows accurate measurement of Zs at the point of use, confirming that the earth path is effective for fault protection. Using any other type of lead could result in unsafe testing or unreliable readings."
  },
  {
    "prompt": "Which one of the following tests requires test connections at all points within a final circuit:",
    "options": {
      "A": "Insulation resistance",
      "B": "Polarity",
      "C": "RCD operation",
      "D": "Continuity of ring final circuits"
    },
    "answer": "D",
    "explanation": "Ring final circuit continuity testing involves verifying that the line, neutral, and CPC conductors form complete loops. To do this, the tester must physically check every outlet, accessory, and point on the ring. This ensures there are no breaks, incorrect connections, or hidden faults at any point. Other tests, such as insulation resistance or polarity, do not require this level of point-by-point verification across the entire circuit."
  },
  {
    "prompt": "A radial socket outlet circuit is supplied by 2.5mm² cable and is 20m long. Given that the Ze of the installation is 0.43Ω and that the resistivity of the cable is 7.41mΩ/m at 20°C , what is the calculated Zs:",
    "options": {
      "A": "0.9Ω",
      "B": "0.3Ω",
      "C": "0.73Ω",
      "D": "1.2Ω"
    },
    "answer": "C",
    "explanation": "To calculate Zs, we add the external impedance (Ze) to the resistance of the line and CPC conductors within the circuit. For a 20 m radial, the total conductor path is 40 m (out and back). Multiplying 7.41 mΩ/m by 40 gives approximately 0.296Ω. Adding this to Ze (0.43Ω) results in a total Zs of around 0.73Ω. This confirms that the earth fault loop path meets the requirements for a 20 A breaker."
  },
  {
    "prompt": "It is important to verify readings and results with BS7671 in order to ensure:",
    "options": {
      "A": "The test instrument is calibrated correctly",
      "B": "The test instrument is providing the required readings",
      "C": "The circuit is safe and within design parameters",
      "D": "The instrument conforms to the latest regulations"
    },
    "answer": "C",
    "explanation": "BS 7671 provides the safety limits and performance criteria for electrical installations, including maximum Zs values, minimum insulation resistance, and correct disconnection times. Checking test results against these standards ensures the circuit is safe to energise and meets the design intentions. Without this verification, a circuit may appear functional but still fail to meet essential safety requirements."
  },
  {
    "prompt": "Under the Electricity at Work Regulations (EAWR), live working is only allowed in limited situations. Which of the following describes the key condition that must apply before live working can be considered acceptable?",
    "options": {
      "A": "A member of staff gives you permission",
      "B": "It is unreasonable in all the circumstances for it to be dead",
      "C": "Suitable PPE is worn",
      "D": "Suitable tools are used"
    },
    "answer": "B",
    "explanation": "The Electricity at Work Regulations (EAWR) state that no person should work on or near live conductors unless it is unreasonable for them to be dead. PPE alone does not justify working live—it is only an additional control measure when live working is unavoidable for diagnostic or essential reasons. This question checks awareness of the law: PPE is not the deciding factor; the deciding factor is whether the work can be safely carried out dead."
  }
];

export const electricianTraining2391Mock4Questions: SourceQuestion[] = [
  {
    "prompt": "What would be the correct procedure to confirm that the existing electrical installation in a dwelling is suitable for the additional wiring of an extension?",
    "options": {
      "A": "A full review of the original electrical installation certificate",
      "B": "A visual inspection of the wiring and condition of the accessories",
      "C": "A periodic inspection and test of the existing installation",
      "D": "Certification of the additional wiring on completion of the extension"
    },
    "answer": "C",
    "explanation": "A periodic inspection and test is the only reliable method to determine whether an existing installation is safe and suitable for extension work. It evaluates the condition of the wiring, earthing, bonding, Zs values, protective devices, and overall compliance with safety standards. Visual checks or reviewing old paperwork cannot detect hidden deterioration, so full testing is essential before adding new circuits."
  },
  {
    "prompt": "What is the purpose of a periodic inspection and test relating to the safety of the building?",
    "options": {
      "A": "There is no risk of electric shock and burns",
      "B": "There is no risk of fire caused by the electrical installation",
      "C": "That the electrical installation is not damaged",
      "D": "That there are no defects or non-compliances present"
    },
    "answer": "B",
    "explanation": "A key objective of periodic inspection is to identify defects or deterioration that could lead to overheating and ultimately cause a fire. Loose connections, overloaded circuits, or damaged insulation can all create ignition hazards. Ensuring the installation poses no fire risk protects both occupants and property."
  },
  {
    "prompt": "What is the minimum level of IP protection for the opening shown as Item A in Figure 1?",
    "options": {
      "A": "IPX4",
      "B": "IP4X",
      "C": "IPX2",
      "D": "IP2X"
    },
    "answer": "D",
    "explanation": "IP2X protection ensures that a finger-sized object cannot make contact with live parts inside an enclosure. This is the minimum requirement for any accessible opening that users can physically reach, helping to prevent accidental shocks."
  },
  {
    "prompt": "What is the minimum level of IP protection for the accessible top surface of a consumer unit?",
    "options": {
      "A": "IPX4",
      "B": "IP2X",
      "C": "IP4X",
      "D": "IPX2"
    },
    "answer": "C",
    "explanation": "The top of a consumer unit requires IP4X because small wires or objects could fall into the enclosure from above. IP4X prevents the entry of objects larger than 1 mm, offering increased safety where gravity-driven ingress is possible."
  },
  {
    "prompt": "Which publication gives detailed information for carrying out testing of electrical installations?",
    "options": {
      "A": "IET Guidance note 1",
      "B": "IET Guidance Note 3",
      "C": "HSE GS 38",
      "D": "HS(G)141"
    },
    "answer": "B",
    "explanation": "Guidance Note 3 is the industry’s detailed manual on inspection and testing. It explains all test methods, required instruments, acceptable values, and safety procedures. It is used alongside BS 7671 to ensure compliant, standardised testing practices."
  },
  {
    "prompt": "What would be agreed with the client and recorded as a limitation for a periodic inspection and test?",
    "options": {
      "A": "The installation can be isolated and a full range of tests to be carried out",
      "B": "No insulation resistance testing between live conductors to be carried out",
      "C": "The finalised report is to be provided to the client electronically",
      "D": "Only calibrated test instruments are to be used"
    },
    "answer": "B",
    "explanation": "Some installations contain sensitive equipment that cannot be exposed to 500 V IR testing. Agreeing beforehand not to test between live conductors protects such devices from damage. This must be documented clearly to show the limitation was deliberate and agreed."
  },
  {
    "prompt": "Which statutory document includes the requirements for working on live conductors?",
    "options": {
      "A": "The Construction (Design and Management) Regulations",
      "B": "The Health and Safety at Work Act",
      "C": "The Electricity at Work Regulations",
      "D": "The Electricity Safety Quality and Continuity Regulations"
    },
    "answer": "C",
    "explanation": "EAWR is a legal document that makes it an offence to work live unless it is unavoidable and adequate precautions are taken. It sets strict rules to minimise risk and protect workers around electrical systems."
  },
  {
    "prompt": "What action should the inspector take, both before and after testing, to confirm isolation of the supply?",
    "options": {
      "A": "Lock the main switch on the open position",
      "B": "Switch the main isolator on and off",
      "C": "Confirm the operation of the approved voltage indicator",
      "D": "Attach a warning label at the isolator stating 'do not switch on'"
    },
    "answer": "C",
    "explanation": "The safe isolation procedure requires proving the tester works before and after checking the circuit. This ensures that the voltage indicator did not fail during the process, preventing a dangerous false “dead” reading."
  },
  {
    "prompt": "An inspection is to be carried out at the termination of the circuit conductors inside a terminal box, as shown in Figure 2. Which human sense is best used to confirm the terminals are suitably tightened?",
    "options": {
      "A": "Touch",
      "B": "Sight",
      "C": "Smell",
      "D": "Hearing"
    },
    "answer": "A",
    "explanation": "A gentle pull test using touch ensures that conductors are secure within terminals. Visual inspection alone cannot confirm tightness, and other senses offer no useful information here."
  },
  {
    "prompt": "Questions 9 to 11 relate to the following scenario. An inspection is to be carried out at the termination of the circuit conductors inside a terminal box, as shown in Figure 2. What is confirmed when inspecting the conductor insulation?",
    "options": {
      "A": "Correctly identified",
      "B": "Terminals are tight",
      "C": "Suitable csa",
      "D": "Contained in the terminals"
    },
    "answer": "A",
    "explanation": "Inspecting insulation confirms the colours or markings correctly identify line, neutral, and CPC conductors. This is essential for safe future maintenance and to ensure no misidentifications exist."
  },
  {
    "prompt": "Questions 9 to 11 relate to the following scenario. An inspection is to be carried out at the termination of the circuit conductors inside a terminal box, as shown in Figure 2. Which classification code would be given on the Schedule of Inspections for the situation shown in Figure 3?",
    "options": {
      "A": "C2",
      "B": "C1",
      "C": "N/V",
      "D": "FI"
    },
    "answer": "A",
    "explanation": "A C2 classification indicates a potentially dangerous condition requiring urgent remedial action. Exposed live parts, damaged insulation, or incorrect termination can all justify a C2 classification because they present a clear risk of electric shock."
  },
  {
    "prompt": "Which classification code indicates that there is a non-compliance which is identified as 'improvement recommended'?",
    "options": {
      "A": "C2",
      "B": "C1",
      "C": "C3",
      "D": "FI"
    },
    "answer": "C",
    "explanation": "A C3 observation means the installation is not dangerous but could be improved to enhance safety. It does not require immediate action and does not fail the EICR."
  },
  {
    "prompt": "Which human senses would be best used to determine excess arcing at a contactor during a walk around survey?",
    "options": {
      "A": "Smell and sight",
      "B": "Hearing and smell",
      "C": "Sight and hearing",
      "D": "Touch and smell"
    },
    "answer": "B",
    "explanation": "Arcing often produces a characteristic crackling sound and a burnt odour. These sensory indicators can reveal issues long before visual inspection identifies damage."
  },
  {
    "prompt": "Questions 14 to 17 relate to the following scenario. A test is to be carried out to confirm the continuity of the main protective bonding conductor to the metallic water installation pipework in a commercial premises. What is the risk if the installation is not safely isolated for this test?",
    "options": {
      "A": "Tripping hazards from the test method",
      "B": "Electric shock from different potentials",
      "C": "Poor performance of connected equipment",
      "D": "Possible loss of computer data"
    },
    "answer": "B",
    "explanation": "Bonding connects metalwork to equalise potential. Testing without isolation may expose the tester to dangerous voltage differences if the system remains energised."
  },
  {
    "prompt": "Questions 14 to 17 relate to the following scenario. A test is to be carried out to confirm the continuity of the main protective bonding conductor to the metallic water installation pipework in a commercial premises. What is the purpose of the test of continuity of main protective bonding conductors?",
    "options": {
      "A": "To confirm extraneous conductive parts are connected to the MET",
      "B": "To confirm that a high current will flow in the event of an earth fault",
      "C": "To confirm there is a low earth return path for fault current",
      "D": "To confirm exposed conductive parts are connected to the MET"
    },
    "answer": "A",
    "explanation": "The test ensures metal pipework or other conductive parts are properly bonded to the main earthing terminal, preventing dangerous touch voltages during faults."
  },
  {
    "prompt": "Questions 14 to 17 relate to the following scenario. A test is to be carried out to confirm the continuity of the main protective bonding conductor to the metallic water installation pipework in a commercial premises. What important check must be made with the instrument leads before a reading is taken?",
    "options": {
      "A": "Leads are fitted with finger guards",
      "B": "Leads have a 3 mm exposed tip",
      "C": "Leads are nulled or zeroed",
      "D": "Leads are a minimum 10 mm²"
    },
    "answer": "C",
    "explanation": "Nulling removes the resistance of the leads from the measurement, ensuring the reading reflects only the conductor being tested. Failure to null leads causes readings to appear higher than they should be."
  },
  {
    "prompt": "Questions 14 to 17 relate to the following scenario. A test is to be carried out to confirm the continuity of the main protective bonding conductor to the water installation pipework in a commercial premises. Which test method is used for this test?",
    "options": {
      "A": "Earth fault loop impedance",
      "B": "Linked R1 + R2 test",
      "C": "Long lead test",
      "D": "Zs – Ze"
    },
    "answer": "C",
    "explanation": "Bonding conductors often run long distances, so a long test lead is required to connect one end to the tester while measuring resistance at the other end."
  },
  {
    "prompt": "A 10 mm² main protective bonding conductor is 37.5 m in length. What is the expected measured resistance when testing the conductor?",
    "options": {
      "A": "0.70 Ω",
      "B": "0.08 Ω",
      "C": "6.86 Ω",
      "D": "0.07 Ω"
    },
    "answer": "D",
    "explanation": "10 mm² copper has very low resistance per metre. Over 37.5 m, the expected continuity reading is approximately 0.07 Ω, confirming it is intact and low-resistance."
  },
  {
    "prompt": "What is the most likely cause of the measured value being much higher than the calculated value?",
    "options": {
      "A": "Higher than normal ambient temperature",
      "B": "Failure to null the test leads",
      "C": "Heavy load on the installation",
      "D": "Leakage current from computer equipment"
    },
    "answer": "B",
    "explanation": "If leads are not zeroed, their own resistance adds mistakenly to the reading, inflating the measured value. This is the most common cause of unexpectedly high results."
  },
  {
    "prompt": "Questions 20 to 23 apply to the following scenario. An earth fault loop impedance test is to be carried out on a radial circuit to the local isolator, as shown in figure 4. What must the inspector confirm before the test can be undertaken?",
    "options": {
      "A": "The cpc is disconnected from the MET and the main protective bonding is disconnected",
      "B": "The cpc and all other earthing and bonding is connected",
      "C": "The cpc is connected and all other earthing and bonding disconnected",
      "D": "The cpc is connected to MET and the main protective bonding is disconnected"
    },
    "answer": "B",
    "explanation": "A loop test relies on a complete earth fault path. If bonding or CPC connections are missing, the reading will be incorrect and the test unsafe."
  },
  {
    "prompt": "Questions 20 to 23 apply to the following scenario. An earth fault loop impedance test is to be carried out on a radial circuit to the local isolator, as shown in figure 4. Why can this earth fault loop impedance test be carried out before a test for insulation resistance?",
    "options": {
      "A": "The test will confirm there is no degradation of the insulation",
      "B": "Dead tests are not required at a periodic inspection and test",
      "C": "Because the installation is already energised and in service",
      "D": "To maximise inconvenience for the users of the installation"
    },
    "answer": "C",
    "explanation": "Periodic inspections test systems already in normal use. Since the installation is energised and known to operate, live testing such as Zs can occur before dead tests."
  },
  {
    "prompt": "Questions 20 to 23 apply to the following scenario. An earth fault loop impedance test is to be carried out on a radial circuit to the local isolator, as shown in figure 4. Why do the test leads used for this test have to comply with GS 38?",
    "options": {
      "A": "GS 38 is a statutory document",
      "B": "Leads to GS 38 are required for all tests",
      "C": "To ensure the test results are accurate",
      "D": "The test is at a voltage above 50 V AC"
    },
    "answer": "D",
    "explanation": "Loop testing is performed live, exposing leads to mains voltage. GS 38 ensures probe tips are safe, shrouded, and prevent accidental contact with live parts."
  },
  {
    "prompt": "Questions 20 to 23 apply to the following scenario. An earth fault loop impedance test is to be carried out on a radial circuit to the local isolator, as shown in figure 4. Why would a test to confirm continuity of cpc be unnecessary once the earth fault loop impedance test is completed?",
    "options": {
      "A": "Reduces the time taken for the periodic inspection",
      "B": "Dead tests are not required at a periodic inspection and test",
      "C": "Earth fault loop impedance can confirm continuity of cpc",
      "D": "Continuity can be proved during insulation resistance testing"
    },
    "answer": "C",
    "explanation": "A valid Zs reading proves the CPC is connected and forming part of the loop path. Therefore, CPC continuity has already been demonstrated."
  },
  {
    "prompt": "A distribution circuit is protected by a BS 88-3 fuse rated 32 A. What is the maximum acceptable measured earth fault loop impedance for this circuit?",
    "options": {
      "A": "1.28 Ω",
      "B": "1.60 Ω",
      "C": "1.92 Ω",
      "D": "1.70 Ω"
    },
    "answer": "A",
    "explanation": "BS 7671 provides maximum Zs values for protective devices. A 32 A BS 88-3 fuse must have a Zs of 1.28 Ω or less to ensure fault disconnection times are met."
  },
  {
    "prompt": "What is confirmed by an earth fault loop impedance test on a radial power circuit?",
    "options": {
      "A": "The circuit breaker can disconnect the maximum prospective fault current",
      "B": "Fault protection is provided for the whole installation",
      "C": "Automatic disconnection of supply will be achieved in the event of a fault",
      "D": "The line and cpc conductors are the right csa"
    },
    "answer": "C",
    "explanation": "Zs ensures that under fault conditions, enough fault current will flow for the protective device to trip quickly, preventing electric shock and fire hazards."
  },
  {
    "prompt": "Questions 26 to 29 relate to the following scenario Voltage drop of a single-phase distribution circuit supplying a power distribution board in a remote building is to be verified as part of the periodic inspection and testing within a workshop complex. The installation forms part of a public 400/230 V TN-S system. The circuit has a measured R1+Rn value of 0.15 Ω and an Ib of 60 A. The circuit protective device has an In of 80 A, see Figure 5. What is the maximum acceptable voltage drop for this distribution circuit if the highest circuit voltage drop on DB-3B is 5.0 V?",
    "options": {
      "A": "6.5 V",
      "B": "6.9 V",
      "C": "1.5 V",
      "D": "11.5 V"
    },
    "answer": "A",
    "explanation": "The total allowable voltage drop for distribution plus final circuits must not exceed statutory limits. If DB-3B already accounts for 5 V, the upstream section can have up to 6.5 V remaining."
  },
  {
    "prompt": "Questions 26 to 29 relate to the following scenario Voltage drop of a single-phase distribution circuit supplying a power distribution board in a remote building is to be verified as part of the periodic inspection and testing within a workshop complex. The installation forms part of a public 400/230 V TN-S system. The circuit has a measured R1+Rn value of 0.15 Ω and an Ib of 60 A. The circuit protective device has an In of 80 A, see Figure 5. Which are the cable characteristics that affect voltage drop?",
    "options": {
      "A": "Ambient temperature and csa",
      "B": "Type of insulation and room temperature",
      "C": "Length and type of insulation",
      "D": "Length and cross-sectional area"
    },
    "answer": "D",
    "explanation": "Voltage drop increases with conductor length and decreases with larger conductor size. These two parameters determine the total circuit resistance and resulting voltage loss."
  },
  {
    "prompt": "Questions 26 to 29 relate to the following scenario. Voltage drop of a single-phase distribution circuit supplying a power distribution board in a remote building is to be verified as part of the periodic inspection and testing within a workshop complex. The installation forms part of a public 400/230 V TN-S system. The circuit has a measured R1+Rn value of 0.15 Ω and an Ib of 60 A. The circuit protective device has an In of 80 A. What is the voltage drop for this distribution circuit?",
    "options": {
      "A": "3.8 V",
      "B": "9 V",
      "C": "10.8 V",
      "D": "7.2 V"
    },
    "answer": "B",
    "explanation": "Use the measured line + neutral resistance and the design current (Ib): Vd=Ib×(R1+Rn)=60×0.15=9.0 V V d ​ =I b ​ ×(R1+Rn)=60×0.15=9.0 V Voltage drop = 9 V (about 3.9% of 230 V)."
  },
  {
    "prompt": "Voltage drop of a single-phase distribution circuit supplying a power distribution board in a remote building is to be verified as part of the periodic inspection and testing within a workshop complex. The installation forms part of a public 400/230 V TN-S system. The circuit has a measured R1+Rn value of 0.15 Ω and an Ib of 60 A. The circuit protective device has an In of 80 A, see Figure 5. Why is the test to confirm voltage drop carried out?",
    "options": {
      "A": "To confirm the circuits function as they are intended",
      "B": "To confirm the circuit will not be overloaded",
      "C": "To confirm correct operation of the protective device",
      "D": "To confirm the cable operates at its maximum temperature"
    },
    "answer": "A",
    "explanation": "Excessive voltage drop reduces equipment efficiency and may cause malfunction or overheating. Testing ensures circuits operate reliably under normal load."
  },
  {
    "prompt": "Questions 30 to 34 relate to the following scenario. Testing of the RCDs is to be undertaken on the installation which forms part of a TT system, as shown in Figure 6. What is confirmed by testing the 100 mA RCD?",
    "options": {
      "A": "The RCD can disconnect the short circuit current",
      "B": "That fault protection is provided for the installation",
      "C": "The RCD can provide overload protection",
      "D": "That additional protection is provided for the installation"
    },
    "answer": "B",
    "explanation": "On TT systems, RCDs provide primary fault protection because earth electrode resistance is often too high for overcurrent devices alone. Testing ensures the RCD trips within required limits."
  },
  {
    "prompt": "Questions 30 to 34 relate to the following scenario. Testing of the RCDs is to be undertaken on the installation which forms part of a TT system, as shown in Figure 6. What must be agreed with the users of the installation before the test of the 100 mA RCD can be carried out?",
    "options": {
      "A": "The test of protective bonding continuity is completed first",
      "B": "The evacuation of all personnel from the building",
      "C": "The installation can be completely isolated",
      "D": "The earthing conductor can be disconnected"
    },
    "answer": "C",
    "explanation": "Testing an RCD at the origin requires fully isolating the installation, which interrupts supply to the entire building. This must be agreed to avoid disruption or data loss."
  },
  {
    "prompt": "Testing of the RCDs is to be undertaken on the installation which forms part of a TT system, as shown in Figure 6. What is the maximum test current to be applied by the RCD tester, when verifying that the RCD at the origin meets disconnection times?",
    "options": {
      "A": "400 mA",
      "B": "100 mA",
      "C": "300 mA",
      "D": "50 mA"
    },
    "answer": "B",
    "explanation": "Verifying disconnection times requires testing the RCD at its rated residual operating current, which in this case is 100 mA."
  },
  {
    "prompt": "Testing of the RCDs is to be undertaken on the installation which forms part of a TT system, as shown in Figure 6. When testing the 30 mA RCD at 5 In the RCD did not operate because the 100 mA RCD at the origin of the installation tripped out. What is the most likely reason for this RCD tripping?",
    "options": {
      "A": "The 30 mA RCD is to sensitive",
      "B": "The test current is too low",
      "C": "The test voltage is too high",
      "D": "The 100 mA RCD has no time delay"
    },
    "answer": "D",
    "explanation": "If the upstream 100 mA RCD is not time-delayed (S-type), it will trip before the downstream 30 mA RCD during high-speed tests such as 5× In. Without selectivity, upstream devices operate first."
  },
  {
    "prompt": "Questions 30 to 34 relate to the following scenario. Testing of the RCDs is to be undertaken on the installation which forms part of a TT system, as shown in Figure 6. When testing the 30 mA RCD at In a disconnection time of 400 ms is recorded. What classification code should the inspector record on the report?",
    "options": {
      "A": "C3",
      "B": "C1",
      "C": "C2",
      "D": "FI"
    },
    "answer": "A",
    "explanation": "A 30 mA RCD should disconnect within 300 ms at In. A result of 400 ms is non-compliant but not immediately dangerous, so improvement is recommended (C3)."
  },
  {
    "prompt": "What is the maximum disconnection time for a 16 A final circuit on a TT installation?",
    "options": {
      "A": "200 ms",
      "B": "30 ms",
      "C": "300 ms",
      "D": "500 ms"
    },
    "answer": "A",
    "explanation": "TT systems require quicker disconnection to minimise shock risk due to higher earth electrode resistance. For final circuits up to 32 A, the limit is 200 ms."
  },
  {
    "prompt": "What is the purpose of carrying out a test to determine the prospective fault current at the origin of a three-phase commercial installation?",
    "options": {
      "A": "The protective devices can safely disconnect the fault current",
      "B": "The earth fault loop path can carry the fault current",
      "C": "The overcurrent devices will disconnect the earth fault current",
      "D": "The overcurrent devices are rated lower than the fault current"
    },
    "answer": "A",
    "explanation": "Testing PFC ensures circuit breakers or fuses can interrupt the maximum possible fault current without being damaged or failing to operate correctly."
  },
  {
    "prompt": "The radial circuit, shown in Figure 7, is installed using-single core cables in PVC conduit. The installation is 5 years old and there have been no alterations or additions to the radial circuit. Why would it be unnecessary to carry out a continuity of cpc for this circuit at periodic inspection and test?",
    "options": {
      "A": "Continuity of cpc can be confirmed during a test of Zs",
      "B": "The circuit is installed in PVC conduit and so less likely to be damaged",
      "C": "Continuity tests are only necessary if the circuit is in flat profile cable",
      "D": "The circuit is only five years old so continuity testing is not required"
    },
    "answer": "A",
    "explanation": "A valid Zs reading confirms the CPC path is complete. Since the installation is relatively new and unaltered, Zs testing is sufficient to verify continuity."
  },
  {
    "prompt": "Insulation resistance testing has been carried out on a six-way lighting distribution board and the individual circuit results are shown in Table 1. What is the value of insulation resistance between Live and Earth for the DB with all the lighting circuits connected?",
    "options": {
      "A": "133 MΩ",
      "B": "50 MΩ",
      "C": "200 MΩ",
      "D": "18 MΩ"
    },
    "answer": "D",
    "explanation": "When circuits are connected in parallel, the overall insulation resistance decreases. The combined value of the six circuits results in 18 MΩ, which is acceptable."
  },
  {
    "prompt": "What is the most appropriate classification code to be recorded if the insulation resistance for a circuit is measured at 0.90 MΩ between live conductors and Earth?",
    "options": {
      "A": "F1",
      "B": "C1",
      "C": "C2",
      "D": "C3"
    },
    "answer": "C",
    "explanation": "Because for a 500 V DC IR test, the minimum acceptable insulation resistance between live conductors and Earth is 1.0 MΩ (for most LV circuits). A measured value of 0.90 MΩ is below the minimum, so it’s a non-compliance indicating deteriorated insulation and should be coded C2."
  },
  {
    "prompt": "A test is to be carried out to determine the external earth fault loop impedance of an installation forming part of a TN-S system. What is the maximum declared by the Distribution Network Operator for a TN-S supply?",
    "options": {
      "A": "0.8 Ω",
      "B": "0.21 Ω",
      "C": "0.35 Ω",
      "D": "21 Ω"
    },
    "answer": "A",
    "explanation": "DNOs specify a maximum external earth fault loop impedance of 0.8 Ω for TN-S systems, ensuring the installation meets fault protection requirements."
  }
];

export const electricianTraining2391Mock5Questions: SourceQuestion[] = [
  {
    "prompt": "What needs to be verified during the inspection of a new installation?",
    "options": {
      "A": "Electrical equipment has not degraded",
      "B": "Electrical appliances comply with BS 7671",
      "C": "Fixed installation is correctly selected",
      "D": "Fixed installation has not deteriorated"
    },
    "answer": "C",
    "explanation": "On a new installation, nothing has had time to deteriorate yet, so the inspection is mainly about whether everything has been correctly selected and erected according to BS 7671 and the design. That means checking cable sizes, protective devices, accessories, and installation methods are appropriate for the loads and external influences. Deterioration is the concern of periodic inspection, not initial verification."
  },
  {
    "prompt": "What process involves checking if an installation has deteriorated?",
    "options": {
      "A": "Condition Inspection",
      "B": "Initial Inspection and Testing",
      "C": "Initial Verification",
      "D": "Periodic Inspection and Testing"
    },
    "answer": "D",
    "explanation": "Periodic inspection and testing is carried out on existing installations to look for wear, damage, ageing, overheating, corrosion, and changes in use. Its purpose is to see whether the installation has deteriorated over time and whether it’s still safe and compliant, unlike initial verification which deals with new work."
  },
  {
    "prompt": "What document must be issued following the installation of a new cooker circuit to an existing installation?",
    "options": {
      "A": "Minor Electrical Installation Works Certificate",
      "B": "Electrical Installation Report",
      "C": "Electrical Installation Certificate",
      "D": "Electrical Installation Condition Report"
    },
    "answer": "C",
    "explanation": "A new circuit must always be covered by an Electrical Installation Certificate (EIC) because it is not just a minor alteration. An EIC confirms that design, construction, inspection and testing for that new circuit comply with BS 7671. A Minor Works Certificate is only suitable for small additions or alterations to existing circuits."
  },
  {
    "prompt": "What circumstance would require an Electrical Installation Condition Report to be issued?",
    "options": {
      "A": "Supermarket has been rewired",
      "B": "Remedial work has been carried out",
      "C": "New occupier moving into a flat",
      "D": "New luminaires have been installed"
    },
    "answer": "C",
    "explanation": "When there is a change of occupancy, it’s good practice (and often required by landlords or insurers) to have an EICR to confirm the existing installation is safe for the new user. The other options describe new work or remedial work, which would be covered by an EIC or Minor Works Certificate, not an EICR."
  },
  {
    "prompt": "Questions 5 to 11 relate to the following scenario. Refurbishment of a leisure centre with a swimming pool is taking place. An additional lighting circuit is to be installed. The new lights will be at a height of 2.4m above the pool. What document must be completed following inspection and testing?",
    "options": {
      "A": "Schedule of Electrical Condition",
      "B": "Electrical Installation Condition Report",
      "C": "Minor Electrical Installation Works Certificate",
      "D": "Electrical Installation Certificate"
    },
    "answer": "D",
    "explanation": "Installing an additional circuit in a special location (like a swimming pool area) is not minor work. It requires an EIC, which records the design, construction, and test results of the new circuit and confirms that it complies with BS 7671 and the particular extra requirements for such locations."
  },
  {
    "prompt": "Questions 5 to 11 relate to the following scenario. Refurbishment of a leisure centre with a swimming pool is taking place. An additional lighting circuit is to be installed. The new lights will be at a height of 2.4m above the pool. Which non-statutory document directly relates to the process of inspection and testing?",
    "options": {
      "A": "GN3",
      "B": "GS38",
      "C": "EWR",
      "D": "ESQCR"
    },
    "answer": "A",
    "explanation": "IET Guidance Note 3 (GN3) is the key non-statutory document giving practical guidance on inspection and testing: test methods, sequences, acceptable values, and recommended procedures. ESQCR and EWR are statutory regulations, and GS38 deals specifically with test leads and probes, not the full testing process."
  },
  {
    "prompt": "Questions 5 to 11 relate to the following scenario. Refurbishment of a leisure centre with a swimming pool is taking place. An additional lighting circuit is to be installed. The new lights will be at a height of 2.4m above the pool. What document must the Inspector use to record the new lighting circuit reference method?",
    "options": {
      "A": "Electrical Installation Schedule",
      "B": "Electrical Installation Certificate",
      "C": "Schedule of Test Results",
      "D": "Schedule of Inspections"
    },
    "answer": "C",
    "explanation": "The Schedule of Test Results includes details such as cable type, size, and installation (reference) method and is attached to the EIC. It provides the technical data needed to verify current-carrying capacity, voltage drop, and fault protection calculations for each circuit."
  },
  {
    "prompt": "Questions 5 to 11 relate to the following scenario. Refurbishment of a leisure centre with a swimming pool is taking place. An additional lighting circuit is to be installed. The new lights will be at a height of 2.4m above the pool. What would be the most appropriate human sense to use when inspecting the IP rating of the new lights?",
    "options": {
      "A": "Sight",
      "B": "Smell",
      "C": "Hearing",
      "D": "Touch"
    },
    "answer": "A",
    "explanation": "The IP rating is marked on the luminaire or its documentation, so sight is used to read and verify that the fitting meets the required code (e.g. IPX4). You aren’t listening, smelling, or feeling the IP rating; you’re visually confirming the marking."
  },
  {
    "prompt": "Questions 5 to 11 relate to the following scenario. Refurbishment of a leisure centre with a swimming pool is taking place. An additional lighting circuit is to be installed. The new lights will be at a height of 2.4 m above the pool. What is the minimum IP rating required for the new lights?",
    "options": {
      "A": "IPX5",
      "B": "IPX4",
      "C": "IPX8",
      "D": "IPX2"
    },
    "answer": "B",
    "explanation": "Luminaires in pool environments must be protected against splashing water at least, which is IPX4. At 2.4 m above the pool they’re in a zone where splashes are still likely, so IPX4 is the minimum to prevent water ingress that could make the equipment unsafe."
  },
  {
    "prompt": "Questions 5 to 11 relate to the following scenario. Refurbishment of a leisure centre with a swimming pool is taking place. An additional lighting circuit is to be installed. The new lights will be at a height of 2.4 m above the pool. What would be the most appropriate action to take if the new lights do not comply with the minimum IP rating?",
    "options": {
      "A": "Notify the client without delay",
      "B": "Record on the Electrical Installation Certificate",
      "C": "Rectify the issue and re-inspect",
      "D": "Record on the Schedule of Inspections"
    },
    "answer": "C",
    "explanation": "If the fittings do not meet the required IP rating, they are not compliant and not safe for that location. The correct action is to correct the non-compliance (e.g. replace with suitable fittings) and then re-inspect/test to confirm compliance, rather than simply noting it and leaving an unsafe situation in place."
  },
  {
    "prompt": "Questions 5 to 11 relate to the following scenario. Refurbishment of a leisure centre with a swimming pool is taking place. An additional lighting circuit is to be installed. The new lights will be at a height of 2.4 m above the pool. Which test must be carried out before earth fault loop impedance to ensure the installation is safe to energise?",
    "options": {
      "A": "Prospective fault current",
      "B": "Voltage drop",
      "C": "Supply polarity",
      "D": "Residual current device"
    },
    "answer": "C",
    "explanation": "Before carrying out live tests like earth fault loop impedance, you must ensure the polarity is correct so that line and neutral are not reversed. If polarity were wrong, live tests could be dangerous and protective devices might not function correctly, so polarity is checked as part of the “safe to energise” process."
  },
  {
    "prompt": "Questions 12 to 16 relate to the following scenario. The existing installation in a hotel is to be inspected and tested as a requirement of the local authority for a public entertainment licence application. Previous inspection and testing records exist but two additional socket-outlet circuits have previously been installed for which there are no test results available. Where must the Extent and Limitations of inspection and testing be recorded?",
    "options": {
      "A": "Electrical Installation Condition Report",
      "B": "Electrical Installation Certificate",
      "C": "Periodic Inspection Report Certificate",
      "D": "Generic Schedule of Test Results"
    },
    "answer": "A",
    "explanation": "For a periodic inspection, all extent and limitations must be clearly recorded on the EICR so that anyone reading it understands exactly what was and was not inspected or tested. This includes areas not accessed or tests not undertaken, for example, due to client restrictions or sensitive equipment."
  },
  {
    "prompt": "Questions 12 to 16 relate to the following scenario. The existing installation in a hotel is to be inspected and tested as a requirement of the local authority for a public entertainment licence application. Previous inspection and testing records exist but two additional socket-outlet circuits have previously been installed for which there are no test results available. Who will be involved in setting the sampling size for this installation?",
    "options": {
      "A": "Client, Local Authority and HSE",
      "B": "HSE, Inspector and Local Authority",
      "C": "Inspector, Client and Local Authority",
      "D": "Inspector, Client and HSE"
    },
    "answer": "C",
    "explanation": "The Inspector, Client, and Local Authority together agree an appropriate sampling strategy, especially when inspection is tied to a licensing requirement. This ensures that safety, legal requirements, and practical issues (like access and disruption) are all considered."
  },
  {
    "prompt": "Questions 12 to 16 relate to the following scenario. The existing installation in a hotel is to be inspected and tested as a requirement of the local authority for a public entertainment licence application. Previous inspection and testing records exist but two additional socket-outlet circuits have previously been installed for which there are no test results available. What action should be taken with regard to the additional socket-outlet circuits?",
    "options": {
      "A": "Both should be sampled to check compliance with BS 7671",
      "B": "One should be sampled to check compliance with BS 7671",
      "C": "One should be fully inspected to check compliance with BS 7671",
      "D": "Both should be fully tested to check compliance with BS 7671"
    },
    "answer": "D",
    "explanation": "With no existing test records, there is no evidence that these circuits are safe or compliant. Both circuits must be fully inspected and tested so they can be properly included in the EICR, rather than just sampled or assumed to be satisfactory."
  },
  {
    "prompt": "Questions 12 to 16 relate to the following scenario. The existing installation in a hotel is to be inspected and tested as a requirement of the local authority for a public entertainment licence application. Previous inspection and testing records exist but two additional socket-outlet circuits have previously been installed for which there are no test results available. Which test can be carried out without the use of GS38 compliant test leads?",
    "options": {
      "A": "Continuity of protective conductors",
      "B": "Residual current device",
      "C": "Prospective fault current",
      "D": "Earth fault loop impedance"
    },
    "answer": "A",
    "explanation": "Continuity of protective conductors is a dead test, performed with the supply isolated. GS38 requirements apply specifically to live voltage testing above 50 V AC. So while it’s still best practice to use good-quality leads, GS38 compliance is not mandatory for dead continuity tests."
  },
  {
    "prompt": "Questions 12 to 16 relate to the following scenario. The existing installation in a hotel is to be inspected and tested as a requirement of the local authority for a public entertainment licence application. Previous inspection and testing records exist but two additional socket-outlet circuits have previously been installed for which there are no test results available. Which test may be unnecessary on any existing ring-final circuits, for which previous test records are available?",
    "options": {
      "A": "Ring-final circuit continuity",
      "B": "Earth fault loop impedance",
      "C": "Socket-outlet polarity",
      "D": "Insulation resistance"
    },
    "answer": "A",
    "explanation": "If reliable, recent previous test results exist for ring continuity and there have been no alterations, redoing full ring continuity tests may be unnecessary. Other tests like insulation resistance and Zs are still carried out, but ring continuity can be inferred from previous data if nothing has changed."
  },
  {
    "prompt": "Questions 17 to 23 relate to the following scenario. The continuity of a main protective bonding conductor to a gas installation pipe in a new primary school is to be tested. The 10 mm² conductor is 43 m long. The installation has been safely isolated for this test. What is the purpose of carrying out this test?",
    "options": {
      "A": "To confirm a requirement of ADS has been met",
      "B": "To confirm extraneous conductive parts are present",
      "C": "To confirm electrical separation has been met",
      "D": "To confirm exposed conductive parts are earthed"
    },
    "answer": "A",
    "explanation": "Main protective bonding ensures that extraneous conductive parts like gas pipes are kept at similar potential, reducing touch voltage in a fault and forming part of automatic disconnection of supply (ADS). Continuity testing confirms that the bonding conductor is effectively connected so ADS can work as designed."
  },
  {
    "prompt": "Questions 17 to 23 relate to the following scenario. The continuity of a main protective bonding conductor to a gas installation pipe in a new primary school is to be tested. The 10 mm² conductor is 43 m long. The installation has been safely isolated for this test. What instrument is to be used to carry out this test?",
    "options": {
      "A": "Insulation resistance tester",
      "B": "Low resistance ohmmeter",
      "C": "Approved voltage indicator",
      "D": "Prospective fault current tester"
    },
    "answer": "B",
    "explanation": "A low resistance ohmmeter, supplying at least 200 mA, is used to measure the small resistance of bonding conductors accurately. It verifies that the conductor is unbroken and of suitably low resistance between the MET and the bonded pipework."
  },
  {
    "prompt": "Questions 17 to 23 relate to the following scenario. The continuity of a main protective bonding conductor to a gas installation pipe in a new primary school is to be tested. The 10 mm² conductor is 43 m long. The installation has been safely isolated for this test. Why must the installation remain safely isolated whilst this test is carried out?",
    "options": {
      "A": "To ensure accurate test results",
      "B": "To include parallel paths",
      "C": "To remove parallel paths",
      "D": "To remove the risk of electric shock"
    },
    "answer": "D",
    "explanation": "Bonding connects exposed and extraneous metalwork together. If the system were live, disconnecting or testing bonding could expose people to dangerous voltages. Keeping the installation isolated removes the risk of electric shock while the test is being carried out."
  },
  {
    "prompt": "Questions 17 to 23 relate to the following scenario. The continuity of a main protective bonding conductor to a gas installation pipe in a new primary school is to be tested. The 10 mm² conductor is 43 m long. The installation has been safely isolated for this test. Which additional piece of test equipment will be required for this test?",
    "options": {
      "A": "Proving unit",
      "B": "Wander lead",
      "C": "Earth electrode",
      "D": "Rotating disc"
    },
    "answer": "B",
    "explanation": "A wander lead (long test lead) allows you to connect one end of your tester to the MET and walk to the remote bonding point (e.g. gas pipe) to complete the circuit. It’s essential for measuring continuity over longer distances where your standard leads won’t reach."
  },
  {
    "prompt": "Questions 17 to 23 relate to the following scenario. The continuity of a main protective bonding conductor to a gas installation pipe in a new primary school is to be tested. The 10 mm² conductor is 43 m long. The installation has been safely isolated for this test. What is the only outcome that can be recorded on the Schedule of Inspections for this conductor?",
    "options": {
      "A": "Lim",
      "B": "N/V",
      "C": "N/A",
      "D": "Tick"
    },
    "answer": "D",
    "explanation": "On the Schedule of Inspections, items are generally marked as satisfactory (✓), not verified (N/V), not applicable (N/A), or limited (Lim). Once continuity of the main bonding conductor has been confirmed, the only correct outcome for that item is a tick, meaning “this requirement is met”."
  },
  {
    "prompt": "Questions 17 to 23 relate to the following scenario. The continuity of a main protective bonding conductor to a gas installation pipe in a new primary school is to be tested. The 10 mm² conductor is 43 m long. The installation has been safely isolated for this test. What is the expected measured conductor resistance value?",
    "options": {
      "A": "0.08 Ω",
      "B": "0.12 Ω",
      "C": "0.00 Ω",
      "D": "0.05 Ω"
    },
    "answer": "A",
    "explanation": "10 mm² copper has a very low resistance per metre, so even over 43 m the total end-to-end resistance remains small. Calculations based on standard resistivity give a value of around 0.08 Ω, which confirms the conductor is sound and suitable for bonding."
  },
  {
    "prompt": "Questions 17 to 23 relate to the following scenario. The continuity of a main protective bonding conductor to a gas installation pipe in a new primary school is to be tested. The 10 mm² conductor is 43 m long. The installation has been safely isolated for this test. Which risk to other persons must be managed when correctly undertaking this test?",
    "options": {
      "A": "Sharp edges",
      "B": "Burns risk",
      "C": "Electric shock",
      "D": "Trip hazard"
    },
    "answer": "D",
    "explanation": "When using long wander leads and trailing test cables, the biggest risk to other people nearby is tripping. The electrical risk has been removed by isolation, so physical hazards such as trip hazards must be controlled by good housekeeping and clear working areas."
  },
  {
    "prompt": "Questions 24 to 28 relate to the following scenario. Voltage drop of a single-phase circuit supplying a bread oven is to be verified as part of periodic inspection and testing within a bakery. The circuit has a measured R1+Rn value of 0.40 Ω and an Ib of 29.6 A. The circuit protective device has an In of 32 A. The installation forms part of a public 400/230 V TN-S system. What is the purpose of this test?",
    "options": {
      "A": "To confirm the cable will stay within temperature parameters",
      "B": "To confirm the oven will not overload the circuit",
      "C": "To confirm the function of the oven will not be impaired",
      "D": "To confirm the protective device will operate correctly"
    },
    "answer": "C",
    "explanation": "Excessive voltage drop can cause equipment like ovens to underperform or malfunction due to low terminal voltage. Verifying voltage drop ensures that, under load, the oven still receives sufficient voltage to heat and operate correctly, as per the manufacturer’s requirements."
  },
  {
    "prompt": "Questions 24 to 28 relate to the following scenario. Voltage drop of a single-phase circuit supplying a bread oven is to be verified as part of periodic inspection and testing within a bakery. The circuit has a measured R1+Rn value of 0.40 Ω and an Ib of 29.6 A. The circuit protective device has an In of 32 A. The installation forms part of a public 400/230 V TN-S system. What instrument is used for part of this process?",
    "options": {
      "A": "PFC Tester",
      "B": "Approved voltage indicator",
      "C": "Low resistance ohmmeter",
      "D": "Multi-meter"
    },
    "answer": "C",
    "explanation": "A low resistance ohmmeter is used to measure R1 + Rn of the circuit. Once you know the circuit resistance and design current, you can calculate the expected voltage drop using Ohm’s law and compare it with the maximum allowed."
  },
  {
    "prompt": "Questions 24 to 28 relate to the following scenario. Voltage drop of a single-phase circuit supplying a bread oven is to be verified as part of periodic inspection and testing within a bakery. The circuit has a measured R1+Rn value of 0.40 Ω and an Ib of 29.6 A. The circuit protective device has an In of 32 A. The installation forms part of a public 400/230 V TN-S system. What is the maximum percentage voltage drop allowed for this circuit?",
    "options": {
      "A": "8%",
      "B": "3%",
      "C": "5%",
      "D": "0.06"
    },
    "answer": "C",
    "explanation": "For many final circuits supplying equipment like ovens, BS 7671 permits a total voltage drop of up to 5% of nominal voltage (including distribution and final circuits). Staying within this limit helps ensure equipment operates correctly and efficiently."
  },
  {
    "prompt": "Questions 24 to 28 relate to the following scenario. Voltage drop of a single-phase circuit supplying a bread oven is to be verified as part of periodic inspection and testing within a bakery. The circuit has a measured R1+Rn value of 0.40 Ω and an Ib of 29.6 A. The circuit protective device has an In of 32 A. The installation forms part of a public 400/230 V TN-S system. What is the calculated value of voltage drop?",
    "options": {
      "A": "14.2 V",
      "B": "11.8 V",
      "C": "13.5 V",
      "D": "14.8 V"
    },
    "answer": "B",
    "explanation": "Voltage drop on a single-phase circuit can be calculated from the measured loop resistance of line + neutral: Vd=Ib×(R1+Rn) V d =I b ​ ×(R 1 ​ +R n ​ ) Given: R1+Rn=0.40 Ω R 1 ​ +R n ​ =0.40Ω Ib=29.6 A I b ​ =29.6A Vd=29.6×0.40=11.84 V V d ​ =29.6×0.40=11.84V Calculated voltage drop ≈ 11.8 V (about 12 V)."
  },
  {
    "prompt": "Questions 24 to 28 relate to the following scenario. Voltage drop of a single-phase circuit supplying a bread oven is to be verified as part of periodic inspection and testing within a bakery. The circuit has a measured R1+Rn value of 0.40 Ω and an Ib of 29.6 A. The circuit protective device has an In of 32 A. The installation forms part of a public 400/230 V TN-S system. What is the most appropriate outcome based on the value of voltage drop?",
    "options": {
      "A": "C3",
      "B": "Lim",
      "C": "C2",
      "D": "C1"
    },
    "answer": "A",
    "explanation": "A voltage drop higher than recommended does not usually present an immediate danger, but it can affect performance and is a non-compliance with design requirements. This is therefore best recorded as a C3 (improvement recommended) so the issue is noted for possible future upgrading."
  },
  {
    "prompt": "Questions 29 to 33 relate to the following scenario. The supply polarity of a restaurant is to be tested as part of a periodic inspection and test. The supply and installation form part of a 230 V single-phase TN-S system. Fault protection is provided by single-pole circuit breakers to BS EN 60898. What would be the effect of reversed Line-Neutral supply polarity?",
    "options": {
      "A": "Motors will spin in reverse direction",
      "B": "Equipment will not function correctly",
      "C": "Circuit breakers will not disconnect an earth fault",
      "D": "Single-pole switches will not control the load"
    },
    "answer": "C",
    "explanation": "If supply polarity is reversed, the single-pole MCBs may end up in the neutral, leaving the line unswitched. In that case, during an earth fault the fault current may not pass through the breaker correctly, and dangerous voltages could remain present even if the breaker appears “off”. So fault protection can fail."
  },
  {
    "prompt": "Questions 29 to 33 relate to the following scenario. The supply polarity of a restaurant is to be tested as part of a periodic inspection and test. The supply and installation form part of a 230 V single-phase TN-S system. Fault protection is provided by single-pole circuit breakers to BS EN 60898. What instrument is used to carry out this test?",
    "options": {
      "A": "Approved voltage indicator",
      "B": "Low resistance ohmmeter",
      "C": "Phase rotation test instrument",
      "D": "Insulation resistance tester"
    },
    "answer": "A",
    "explanation": "A two-pole approved voltage indicator is the correct tool to verify supply polarity at the origin and distribution boards. It safely shows which conductor is live, neutral, and earth by measuring actual voltage values between them."
  },
  {
    "prompt": "Questions 29 to 33 relate to the following scenario. The supply polarity of a restaurant is to be tested as part of a periodic inspection and test. The supply and installation form part of a 230 V single-phase TN-S system. Fault protection is provided by single-pole circuit breakers to BS EN 60898. What instrument safety check must be made before carrying out this test?",
    "options": {
      "A": "Check compliance with GS38",
      "B": "Check battery level",
      "C": "Check operation on a proving unit",
      "D": "Check instrument within calibration"
    },
    "answer": "A",
    "explanation": "GS38 sets out safety requirements for test probes and leads used on live circuits above 50 V AC, such as shrouded tips and limited exposed metal. Ensuring the voltage indicator and leads comply with GS38 reduces the risk of accidental contact or arcing during live testing."
  },
  {
    "prompt": "Questions 29 to 33 relate to the following scenario. The supply polarity of a restaurant is to be tested as part of a periodic inspection and test. The supply and installation form part of a 230 V single-phase TN-S system. Fault protection is provided by single-pole circuit breakers to BS EN 60898. What voltages are to be expected if the polarity is correct?",
    "options": {
      "A": "L-N 230 V, L-E 230 V, N-E Zero V",
      "B": "L-N Zero V, L-E Zero V, N-E 230 V",
      "C": "L-N 230 V, L-E Zero V, N-E Zero V",
      "D": "L-N Zero V, L-E 230 V, N-E 230 V"
    },
    "answer": "A",
    "explanation": "With correct polarity and bonding, you should see 230 V between Line and Neutral, 230 V between Line and Earth, and effectively 0 V between Neutral and Earth (neutral and earth are at similar potential under no-load or light-load conditions)."
  },
  {
    "prompt": "Questions 29 to 33 relate to the following scenario. The supply polarity of a restaurant is to be tested as part of a periodic inspection and test. The supply and installation form part of a 230 V single-phase TN-S system. Fault protection is provided by single-pole circuit breakers to BS EN 60898. Why may the testing of circuit polarity be unnecessary?",
    "options": {
      "A": "No changes have been made",
      "B": "Alterations have been carried out",
      "C": "Additions have been installed",
      "D": "High Zs value has been recorded"
    },
    "answer": "A",
    "explanation": "If reliable previous test results exist and no changes, additions, or alterations have been carried out on the circuits, there may be no need to retest polarity at every outlet. However, polarity at the origin and main points is still usually confirmed."
  },
  {
    "prompt": "Questions 34 to 39 relate to the following scenario. Periodic inspection and testing of a mobile catering unit is to be carried out as a requirement of the client's insurer. The supply is from a 3 kVA 230 V single-phase portable generator and is connected as a TN-S system with fault protection provided by a BS EN 61008 30 mA RCD. The catering unit is permanently sited and infrequently moved. What would this information help the inspector to determine?",
    "options": {
      "A": "The condition of the cables",
      "B": "The amount of sampling required",
      "C": "The number of RCD tests required",
      "D": "The number of circuits to be tested"
    },
    "answer": "B",
    "explanation": "Knowing that the unit is permanently sited and infrequently moved suggests less mechanical stress on cables and equipment. This helps the inspector decide how much sampling is reasonable during the periodic inspection based on risk and use."
  },
  {
    "prompt": "Questions 34 to 39 relate to the following scenario. Periodic inspection and testing of a mobile catering unit is to be carried out as a requirement of the client's insurer. The supply is from a 3 kVA 230 V single-phase portable generator and is connected as a TN-S system with fault protection provided by a BS EN 61008 30 mA RCD. What needs to be verified with regard to the mobile catering consumer unit?",
    "options": {
      "A": "The enclosure is made of polycarbonate",
      "B": "The top horizontal surface complies with IP4X",
      "C": "The RCD main switch is rated at ≥ 63 A",
      "D": "The bottom horizontal surface complies with IP4X"
    },
    "answer": "B",
    "explanation": "The top of any distribution board or consumer unit must meet IP4X, so small objects cannot fall inside and touch live parts. Verifying this protects against accidental ingress of debris, tools, or conductors."
  },
  {
    "prompt": "Questions 34 to 39 relate to the following scenario. Periodic inspection and testing of a mobile catering unit is to be carried out as a requirement of the client's insurer. The supply is from a 3 kVA 230 V single-phase portable generator and is connected as a TN-S system with fault protection provided by a BS EN 61008 30 mA RCD. What is the maximum test current applied to the RCD to confirm that fault protection is provided?",
    "options": {
      "A": "15 mA",
      "B": "30 mA",
      "C": "60 mA",
      "D": "300 mA"
    },
    "answer": "B",
    "explanation": "To verify that the RCD meets its rated disconnection times for fault protection, it must be tested at its rated residual operating current (IΔn), which here is 30 mA. Higher test currents (like 5×) are used to check additional protection times."
  },
  {
    "prompt": "Questions 34 to 39 relate to the following scenario. Periodic inspection and testing of a mobile catering unit is to be carried out as a requirement of the client's insurer. The supply is from a 3 kVA 230 V single-phase portable generator and is connected as a TN-S system with fault protection provided by a BS EN 61008 30 mA RCD. What is the maximum operating time of the RCD, when tested using a test current equal to the residual current rating?",
    "options": {
      "A": "150 ms",
      "B": "300 ms",
      "C": "40 ms",
      "D": "200 ms"
    },
    "answer": "B",
    "explanation": "BS EN 61008 / BS 7671 require that a 30 mA RCD must trip within 300 ms at 1× IΔn. This ensures shock protection in fault conditions, particularly on TT and TN systems where RCDs provide key fault protection."
  },
  {
    "prompt": "Questions 34 to 39 relate to the following scenario. Periodic inspection and testing of a mobile catering unit is to be carried out as a requirement of the client's insurer. The supply is from a 3 kVA 230 V single-phase portable generator and is connected as a TN-S system with fault protection provided by a BS EN 61008 30 mA RCD. The RCD is found to not operate at any test current. What is the most appropriate classification code to record?",
    "options": {
      "A": "FI",
      "B": "C2",
      "C": "C1",
      "D": "C3"
    },
    "answer": "B",
    "explanation": "If an RCD that is relied upon for fault or additional protection fails to operate at all, the installation is potentially dangerous. This warrants a C2 code, meaning urgent remedial work is required, but it is not classed as immediate danger under C1 unless live parts are exposed."
  },
  {
    "prompt": "Questions 34 to 39 relate to the following scenario. Periodic inspection and testing of a mobile catering unit is to be carried out as a requirement of the client's insurer. The supply is from a 3 kVA 230 V single-phase portable generator and is connected as a TN-S system with fault protection provided by a BS EN 61008 30 mA RCD. What additional action must the inspector take regarding this observation?",
    "options": {
      "A": "Inform the client in writing without delay",
      "B": "Remove the portable generator until fault fixed",
      "C": "Inform the insurer in writing without delay",
      "D": "Isolate the installation and prevent re-energising"
    },
    "answer": "A",
    "explanation": "The inspector must inform the client promptly in writing so that they are aware of the risk and can arrange remedial action. Written notification provides a clear record that the defect was reported, which is important for safety and liability."
  },
  {
    "prompt": "Questions 40 to 46 relate to the following scenario. Insulation resistance has been tested on five new lighting circuits in an existing large distribution warehouse. These circuits are supplied from a new single-phase, five-way DB. Switching for each circuit is by 230 V contactors. Connection to each light is made using a BS 1363 socket-outlet adjacent to the fitting. The supply and installation form a 400 V three-phase TN-C-S system. What is the correct way to prepare one of these circuits for testing?",
    "options": {
      "A": "Switch on lights, connect cpc, un-plug lights",
      "B": "Switch on lights, disconnect cpc, plug-in lights",
      "C": "Bypass contactors, connect cpc, un-plug lights",
      "D": "Bypass contactors, disconnect cpc, plug-in lights"
    },
    "answer": "C",
    "explanation": "You bypass the contactors so that the entire circuit is testable, ensure the CPC is connected so insulation to earth is measured, and unplug the lights to avoid damaging luminaires or their electronic gear. This way, you test only the fixed wiring at the correct voltage."
  },
  {
    "prompt": "Questions 40 to 46 relate to the following scenario. Insulation resistance has been tested on five new lighting circuits in an existing large distribution warehouse. These circuits are supplied from a new single-phase, five-way DB. Switching for each circuit is by 230 V contactors. Connection to each light is made using a BS 1363 socket-outlet adjacent to the fitting. The supply and installation form a 400 V three-phase TN-C-S system. What affects the insulation resistance of each circuit tested?",
    "options": {
      "A": "The csa and number of conductors",
      "B": "The number and length of conductors",
      "C": "The number and the purpose of conductors",
      "D": "The csa and purpose of conductors"
    },
    "answer": "B",
    "explanation": "Insulation resistance is effectively many resistances in parallel. The more conductors and the longer they are, the lower the overall measured insulation resistance becomes, even if the insulation is in perfect condition. So length and number of conductors are key factors."
  },
  {
    "prompt": "Questions 40 to 46 relate to the following scenario. Insulation resistance has been tested on five new lighting circuits in an existing large distribution warehouse. These circuits are supplied from a new single-phase, five-way DB. Switching for each circuit is by 230 V contactors. Connection to each light is made using a BS 1363 socket-outlet adjacent to the fitting. The supply and installation form a 400 V three-phase TN-C-S system. What is the legal status of the inspector?",
    "options": {
      "A": "Competent",
      "B": "Skilled",
      "C": "Instructed",
      "D": "Ordinary"
    },
    "answer": "A",
    "explanation": "EAWR requires that electrical work, including inspection and testing, be carried out by a competent person – someone with the skills, knowledge, and experience to prevent danger. “Skilled person” is language from BS 7671, but “competent” is the legal term in UK law."
  },
  {
    "prompt": "Questions 40 to 46 relate to the following scenario. Insulation resistance has been tested on five new lighting circuits in an existing large distribution warehouse. These circuits are supplied from a new single-phase, five-way DB. Switching for each circuit is by 230 V contactors. Connection to each light is made using a BS 1363 socket-outlet adjacent to the fitting. The supply and installation form a 400 V three-phase TN-C-S system. What condition can be detected during the insulation resistance test?",
    "options": {
      "A": "Deterioration of cable insulation",
      "B": "Degradation of cable insulation",
      "C": "De-rating of cable insulation",
      "D": "Damage to cable insulation"
    },
    "answer": "D",
    "explanation": "An insulation resistance test at 500 V DC can reveal direct damage such as crushed cable, cuts, or moisture ingress causing low resistance paths. It is particularly good at spotting outright damage rather than slow long-term degradation that might still leave resistance quite high."
  },
  {
    "prompt": "Questions 40 to 46 relate to the following scenario. Insulation resistance has been tested on five new lighting circuits in an existing large distribution warehouse. These circuits are supplied from a new single-phase, five-way DB. Switching for each circuit is by 230 V contactors. Connection to each light is made using a BS 1363 socket-outlet adjacent to the fitting. The supply and installation form a 400 V three-phase TN-C-S system. The following test results were recorded. What is the value of insulation resistance between Live and Earth for the new DB with all the lighting circuits connected?",
    "options": {
      "A": "20 MΩ",
      "B": "134 MΩ",
      "C": "13 MΩ",
      "D": "178 MΩ"
    },
    "answer": "C",
    "explanation": "When several good circuits are connected together in parallel, the combined insulation resistance drops. Using the individual circuit results and combining them, the overall IR between Live and Earth for the DB works out at around 13 MΩ, which is still well above the minimum required."
  },
  {
    "prompt": "Questions 40 to 46 relate to the following scenario. Insulation resistance has been tested on five new lighting circuits in an existing large distribution warehouse. These circuits are supplied from a new single-phase, five-way DB. Switching for each circuit is by 230 V contactors. Connection to each light is made using a BS 1363 socket-outlet adjacent to the fitting. The supply and installation form a 400 V three-phase TN-C-S system. What is the test voltage applied during the insulation resistance test?",
    "options": {
      "A": "250 V AC",
      "B": "500 V AC",
      "C": "500 V DC",
      "D": "250 V DC"
    },
    "answer": "C",
    "explanation": "For 230 V circuits, BS 7671 requires insulation resistance tests at 500 V DC. This voltage is high enough to stress the insulation and reveal weaknesses without damaging sound cable or accessories (assuming voltage-sensitive equipment has been disconnected)."
  },
  {
    "prompt": "Questions 40 to 46 relate to the following scenario. Insulation resistance has been tested on five new lighting circuits in an existing large distribution warehouse. These circuits are supplied from a new single-phase, five-way DB. Switching for each circuit is by 230 V contactors. Connection to each light is made using a BS 1363 socket-outlet adjacent to the fitting. The supply and installation form a 400 V three-phase TN-C-S system. What would be the most appropriate action to take if the result for lighting circuit 1 is 0.95 MΩ between live conductors?",
    "options": {
      "A": "Investigate lighting circuit 1 between Line-Neutral",
      "B": "Investigate lighting circuit 1 between Line-Earth",
      "C": "Record the result as acceptable",
      "D": "Record the result as a non-compliance"
    },
    "answer": "A",
    "explanation": "A result of 0.95 MΩ is below the preferred 1 MΩ threshold and suggests a possible developing fault or connected load affecting the reading. Since the problem is between live conductors, you should specifically investigate L–N on that circuit to identify the cause rather than simply accepting it."
  },
  {
    "prompt": "Questions 47 to 49 relate to the following scenario. A section of galvanised trunking is to be inspected as part of periodic inspection and testing of a factory. The trunking contains unsheathed low voltage cables. What is the minimum IP rating for the bottom horizontal surface of the trunking?",
    "options": {
      "A": "IP2X",
      "B": "IPXXB",
      "C": "IPX4",
      "D": "IPXXD"
    },
    "answer": "D",
    "explanation": "Unsheathed LV conductors in trunking require protection against the insertion of a 1 mm diameter wire and finger access where applicable. IPXXD indicates protection against access with a tool or wire of specified size from below, suitable for bottom surfaces where objects could be pushed in."
  },
  {
    "prompt": "Questions 47 to 49 relate to the following scenario. A section of galvanised trunking is to be inspected as part of periodic inspection and testing of a factory. The trunking contains unsheathed low voltage cables. Which are the most appropriate human senses to check the security of the trunking lid?",
    "options": {
      "A": "Touch and sight",
      "B": "Smell and hearing",
      "C": "Hearing and touch",
      "D": "Sight and smell"
    },
    "answer": "A",
    "explanation": "You use sight to check the lid is properly aligned, all screws/clips are in place and no gaps exist, and touch to gently push/pull and confirm it’s firmly secured. Smell and hearing won’t tell you if the lid is loose."
  },
  {
    "prompt": "Questions 47 to 49 relate to the following scenario. A section of galvanised trunking is to be inspected as part of periodic inspection and testing of a factory. The trunking contains unsheathed low voltage cables. What is the most likely reason for carrying out this periodic inspection?",
    "options": {
      "A": "New trunking has been installed",
      "B": "New occupiers have purchased the building",
      "C": "New contractors have been appointed",
      "D": "New cables have been installed in the trunking"
    },
    "answer": "B",
    "explanation": "A change of occupancy is a common trigger for periodic inspection to verify that the existing installation is safe for the new user. New trunking or cables would usually be covered by initial verification instead."
  },
  {
    "prompt": "Questions 50 to 57 relate to the following scenario. Continuity of a ring final circuit has been tested as part of an initial verification of a new primary school. All the socket-outlets are connected directly to the ring. The circuit loop length is 58 m long, wired in 4 mm² live and 1.5 mm² cpc flat profile cable. The circuit is protected by a 32 A BS EN 60898 Type B circuit breaker. Which test would detect incorrect polarity of the Live conductors at each socket-outlet?",
    "options": {
      "A": "Line-Earth at each socket-outlet",
      "B": "Line-Neutral at the distribution board",
      "C": "Line-Earth at the distribution board",
      "D": "Line-Neutral at each socket-outlet"
    },
    "answer": "A",
    "explanation": "By testing Line–Earth at each socket, you check that the Live is correctly connected to the live terminal and that the CPC is continuous and correctly connected. If polarity were incorrect, the expected voltage between the supposed “line” terminal and earth would be wrong or absent."
  },
  {
    "prompt": "Questions 50 to 57 relate to the following scenario. Continuity of a ring final circuit has been tested as part of an initial verification of a new primary school. All the socket-outlets are connected directly to the ring. The circuit loop length is 58 m long, wired in 4 mm² live and 1.5 mm² cpc flat profile cable. The circuit is protected by a 32 A BS EN 60898 Type B circuit breaker. What is the expected measured r1 value?",
    "options": {
      "A": "0.27 Ω",
      "B": "0.52 Ω",
      "C": "0.43 Ω",
      "D": "0.32 Ω"
    },
    "answer": "A",
    "explanation": "Using standard resistance values for 4 mm² copper and the total loop length of the ring, the expected value for r1 (line conductor loop resistance) is about 0.27 Ω. This confirms the ring is the correct size and length and has no hidden high-resistance joints."
  },
  {
    "prompt": "Questions 50 to 57 relate to the following scenario. Continuity of a ring final circuit has been tested as part of an initial verification of a new primary school. All the socket-outlets are connected directly to the ring. The circuit loop length is 58 m long, wired in 4 mm² live and 1.5 mm² cpc flat profile cable. The circuit is protected by a 32 A BS EN 60898 Type B circuit breaker. What is the expected measured r2 value?",
    "options": {
      "A": "0.70 Ω",
      "B": "0.84 Ω",
      "C": "0.45 Ω",
      "D": "0.27 Ω"
    },
    "answer": "A",
    "explanation": "The 1.5 mm² CPC has a higher resistance per metre than the 4 mm² line. Over the same loop length, the calculated r2 is higher, around 0.70 Ω, which matches the expected resistance from tables."
  },
  {
    "prompt": "Questions 50 to 57 relate to the following scenario. Continuity of a ring final circuit has been tested as part of an initial verification of a new primary school. All the socket-outlets are connected directly to the ring. The circuit loop length is 58 m long, wired in 4 mm² live and 1.5 mm² cpc flat profile cable. The circuit is protected by a 32 A BS EN 60898 Type B circuit breaker. What pattern of test results is expected at each socket-outlet when the line and cpc conductors are correctly cross-connected?",
    "options": {
      "A": "Readings are substantially the same",
      "B": "Readings increase around the ring",
      "C": "Readings rise to the centre and then fall",
      "D": "Readings decrease around the ring"
    },
    "answer": "A",
    "explanation": "With the line and CPC cross-connected and a correctly wired ring with no spurs, the measured R1+R2 values around the ring should be substantially the same at each socket. Significant variations indicate issues such as spurs, loose terminals, or incorrect connections."
  },
  {
    "prompt": "Questions 50 to 57 relate to the following scenario. Continuity of a ring final circuit has been tested as part of an initial verification of a new primary school. All the socket-outlets are connected directly to the ring. The circuit loop length is 58 m long, wired in 4 mm² live and 1.5 mm² cpc flat profile cable. The circuit is protected by a 32 A BS EN 60898 Type B circuit breaker. What is the expected measured value at each socket-outlet when the line and neutral conductors are correctly cross-connected?",
    "options": {
      "A": "0.13 Ω",
      "B": "0.16 Ω",
      "C": "0.49 Ω",
      "D": "0.22 Ω"
    },
    "answer": "A",
    "explanation": "The effective parallel loop created when line and neutral are cross-connected gives a lower resistance than r1 or rn alone. For this circuit, the expected value works out to approximately 0.13 Ω at each socket if the ring is healthy and evenly wired."
  },
  {
    "prompt": "Questions 50 to 57 relate to the following scenario. Continuity of a ring final circuit has been tested as part of an initial verification of a new primary school. All the socket-outlets are connected directly to the ring. The circuit loop length is 58 m long, wired in 4 mm² live and 1.5 mm² cpc flat profile cable. The circuit is protected by a 32 A BS EN 60898 Type B circuit breaker. What is a simplified way to verify the r1 and r2 ratio for this circuit?",
    "options": {
      "A": "R1 = r2 x 2.67",
      "B": "r2 = r1 x 2.67",
      "C": "R1 = r2 x 1.67",
      "D": "R2 = r1 x 1.67"
    },
    "answer": "B",
    "explanation": "Because of the different conductor sizes, the resistance per metre of the 1.5 mm² CPC is about 2.67 times that of the 4 mm² live conductor. So a quick check that r2 ≈ r1 × 2.67 confirms the correct conductor sizes and no unexpected high-resistance joints."
  },
  {
    "prompt": "Questions 50 to 57 relate to the following scenario. Continuity of a ring final circuit has been tested as part of an initial verification of a new primary school. All the socket-outlets are connected directly to the ring. The circuit loop length is 58 m long, wired in 4 mm² live and 1.5 mm² cpc flat profile cable. The circuit is protected by a 32 A BS EN 60898 Type B circuit breaker. What column numbers would be completed on the Schedule of Test Results, detailing the results obtained during the ring-final circuit continuity test?",
    "options": {
      "A": "10, 11, 12, 13, 17",
      "B": "8, 9, 11, 12, 17",
      "C": "10, 11, 12, 13, 18",
      "D": "8, 9, 10, 11, 12"
    },
    "answer": "A",
    "explanation": "Columns 10–13 on the Schedule of Test Results relate to conductor resistances (r1, rn, r2 and R1+R2), and column 17 typically records Zs. These are all relevant to documenting the continuity and loop characteristics of a ring final circuit."
  },
  {
    "prompt": "Questions 50 to 57 relate to the following scenario. Continuity of a ring final circuit has been tested as part of an initial verification of a new primary school. All the socket-outlets are connected directly to the ring. The circuit loop length is 58 m long, wired in 4 mm² live and 1.5 mm² cpc flat profile cable. The circuit is protected by a 32 A BS EN 60898 Type B circuit breaker. The installation has a measured Ze of 0.29 Ω. What is the expected value of Zs for this circuit?",
    "options": {
      "A": "0.24 Ω",
      "B": "0.58 Ω",
      "C": "0.28 Ω",
      "D": "0.53 Ω"
    },
    "answer": "D",
    "explanation": "For rings, Zs is calculated as Zs = Ze + (r1 + r2)/4. Using the expected values of r1 and r2 from the earlier questions, you get a figure close to 0.53 Ω, which is within the limit for a 32 A Type B breaker and confirms effective fault protection."
  },
  {
    "prompt": "The measured R1+R2 value for a radial cooker circuit, with a 6 mm² line conductor and a 2.5 mm² cpc, is 0.29 Ω. What is the length of this circuit?",
    "options": {
      "A": "28 m",
      "B": "38 m",
      "C": "33 m",
      "D": "23 m"
    },
    "answer": "A",
    "explanation": "Using standard ohms-per-metre values for 6 mm² and 2.5 mm² conductors, you can work backwards from the measured R1+R2 to find the circuit length. The calculation gives a length of about 28 m, consistent with the measured resistance."
  },
  {
    "prompt": "Questions 59 and 60 relate to the following scenario. An earth electrode resistance test has been carried out within a caravan park. The supply and installation form a 230 V single-phase TT system. The following results were obtained, as shown in Figure 1. What value is to be recorded as the earth electrode resistance?",
    "options": {
      "A": "168 Ω",
      "B": "179 Ω",
      "C": "200 Ω",
      "D": "173 Ω"
    },
    "answer": "D",
    "explanation": "When testing an earth electrode using the 3-stake method, the stable value is taken where two or more consecutive readings are similar. If the middle reading (e.g. 173 Ω) matches closely with the neighbouring values, it is recorded as the earth electrode resistance."
  },
  {
    "prompt": "Questions 59 and 60 relate to the following scenario. An earth electrode resistance test has been carried out within a caravan park. The supply and installation form a 230 V single-phase TT system. The following results were obtained, as shown in Figure 1. What is the maximum rating of RCD that can be used for fault protection on this installation?",
    "options": {
      "A": "30 mA",
      "B": "100 mA",
      "C": "300 mA",
      "D": "500 mA"
    },
    "answer": "B",
    "explanation": "For a TT system, the condition Ra × IΔn ≤ 50 V must be met. With Ra = 173 Ω, the maximum RCD rating is 100 mA, because 0.1 A × 173 Ω = 17.3 V, which is below the 50 V touch voltage limit. Higher ratings (e.g. 300 mA) would give too high a touch voltage."
  }
];

export const electricianTraining2391Mock6Questions: SourceQuestion[] = [
  {
    "prompt": "On completion of a new installation, the Electrical Installation Certificate would 'not' be signed by the:",
    "options": {
      "A": "Inspection and testing engineer",
      "B": "Person who constructed the installation",
      "C": "Client",
      "D": "Design engineer"
    },
    "answer": "C",
    "explanation": "The EIC must be signed by the designer, installer, and inspector/tester – the people responsible for the safety and compliance of the installation. The client is not technically involved in the design, erection, or verification process, so they do not sign the certificate. Their role is simply to receive the completed documentation, not to validate the work."
  },
  {
    "prompt": "Before inspecting the condition of electrical equipment installed in a new unoccupied building, the inspector should:",
    "options": {
      "A": "Ask the builders if they are aware of any faults",
      "B": "Disconnect all fluorescent luminaires",
      "C": "Check for components that may be susceptible to damage during testing",
      "D": "Test run the equipment to ascertain its condition"
    },
    "answer": "C",
    "explanation": "Before any testing begins, the inspector must identify equipment such as PIR sensors, dimmers, control gear, and electronic devices that could be damaged by high test voltages. This ensures they can be isolated or disconnected beforehand. Running or energising equipment before testing is unsafe and against standard inspection procedure."
  },
  {
    "prompt": "BS 7671 states that no additions or alterations should be made to an existing installation unless:",
    "options": {
      "A": "A Minor Works Certificate can be produced",
      "B": "The existing installation conforms to current Regulations",
      "C": "The permission of the supply company has been obtained",
      "D": "The completion certificate can be produced for the existing installation"
    },
    "answer": "B",
    "explanation": "You cannot extend or modify an installation that is unsafe or non-compliant, because additions must not impair the safety of the existing installation. If the existing installation fails to meet BS 7671 standards, remedial work is needed first. This prevents new work from relying on inadequate protection or faulty circuits."
  },
  {
    "prompt": "On a new installation, which one of the following should be made available to the person conducting the inspection and test:",
    "options": {
      "A": "Details of the customer",
      "B": "Relevant charts, tables and diagrams",
      "C": "Schedule of test results",
      "D": "Previous test results"
    },
    "answer": "B",
    "explanation": "The inspector needs access to drawings, schematics, circuit details, and manufacturer's data so they can verify compliance with the design. Customer details or previous test records are irrelevant, as the work is new. Proper documentation ensures accurate and safe verification."
  },
  {
    "prompt": "The statutory document that specifically identifies an installer must be competent to confirm the electrical work they undertake is safe is the:",
    "options": {
      "A": "Electricity at Work Regulations",
      "B": "BS 7671: 2008",
      "C": "Health and Safety at Work Act",
      "D": "Electricity Safety, Quality and Continuity Regulations"
    },
    "answer": "A",
    "explanation": "The EAWR (1989) is the legal requirement that governs electrical safety in the UK. Regulation 16 specifically states that only competent persons may carry out electrical work to avoid danger. BS 7671 is not a statutory document — it is a standard — whereas EAWR is law."
  },
  {
    "prompt": "The safest method of making sure an installation is safe to work on would be:",
    "options": {
      "A": "To ensure that RCDs are functional",
      "B": "To isolate the installation at the main cut-out",
      "C": "To follow a safe isolation procedure",
      "D": "To check the installation with a fluke tester"
    },
    "answer": "C",
    "explanation": "Safe isolation ensures the installation is proven dead before any work begins, preventing electric shock or arc flash. This includes locking off, proving dead with an approved tester, and tagging out. Simply switching off at the main cut-out or checking RCD operation does not guarantee safety."
  },
  {
    "prompt": "Defects or omissions revealed during initial verification shall:",
    "options": {
      "A": "Be made good before the certificate is issued",
      "B": "Be made good when the certificate is issued",
      "C": "Be made good after the certificate is issued",
      "D": "Be made good within 30 days of the certificate being issued"
    },
    "answer": "A",
    "explanation": "The EIC certifies that the installation complies with BS 7671 at the time of signing. Therefore, any defect must be rectified before the certificate is issued. Issuing a certificate with known defects would be illegal and invalidate compliance claims."
  },
  {
    "prompt": "A visual inspection of a new installation must be carried out:",
    "options": {
      "A": "Upon completion",
      "B": "During erection and upon completion",
      "C": "During testing",
      "D": "During erection"
    },
    "answer": "B",
    "explanation": "Visual inspection is not a single event — it is performed throughout the installation process to ensure compliance before the wiring becomes inaccessible. A final visual inspection is also required before testing. Many faults (e.g., incorrect cable routing) cannot be detected once the installation is complete."
  },
  {
    "prompt": "A permanent label to BS 951 should be fixed in a visible position at points of connection to every earth electrode or bonding position. The wording on the label should state:",
    "options": {
      "A": "Safety Earth Point - Do Not Remove",
      "B": "Safety Electrical Connection - Do Not Remove",
      "C": "Safety Earthing Connection -Do Not Remove",
      "D": "Safety Earth Connection - Do Not Remove"
    },
    "answer": "B",
    "explanation": "This exact phrase is required by BS 951 to warn that the connection is essential for safety and must not be tampered with. Altering or removing earth or bonding conductors can create severe electric shock risks. The wording must be uniform for legal clarity."
  },
  {
    "prompt": "During inspection of a distribution board containing exposed conductive parts it should be verified that:",
    "options": {
      "A": "The board is situated at least 2 metres above ground level",
      "B": "The door can only be opened with a key or tool",
      "C": "The board has a handle and the door is shut",
      "D": "The board has at least protection to IP2X"
    },
    "answer": "B",
    "explanation": "A distribution board containing live parts must be accessible only to authorised persons to prevent accidental contact. A key-operated or tool-operated access method is required unless the live parts are fully shrouded. Simply having IP2X or being mounted high is insufficient for boards with exposed conductors."
  },
  {
    "prompt": "The proposed interval between the first periodic inspection and future inspections should be recommended by:",
    "options": {
      "A": "The installation engineer",
      "B": "The person carrying out the initial verification",
      "C": "The person who designed the installation",
      "D": "The person carrying out the first periodic inspection"
    },
    "answer": "D",
    "explanation": "The inspector assesses the installation’s condition, usage, and environment, allowing them to determine a suitable future inspection interval. The initial verifier or designer cannot predict deterioration over time, but the inspector can make an informed judgment after examining the installation's real condition."
  },
  {
    "prompt": "Which of the following is not a requirement of the inspection checklist:",
    "options": {
      "A": "Presence of a BS mark or other suitable certification",
      "B": "Correct selection of cable and protection devices",
      "C": "No visible damage",
      "D": "Availability of customer user instructions"
    },
    "answer": "D",
    "explanation": "Inspection checklists focus on electrical safety, condition, and compliance of the installation — not documentation supplied to the customer. User instructions may be useful but are not part of statutory inspection items such as cable selection, BS markings, or presence of damage."
  },
  {
    "prompt": "According to BS7671, the minimum insulation resistance value for an SELV installation is:",
    "options": {
      "A": "1.0 MΩ",
      "B": "0.5 MΩ",
      "C": "0.25 MΩ",
      "D": "2.0 MΩ"
    },
    "answer": "B",
    "explanation": "SELV systems operate at extra-low voltage and therefore pose a lower shock risk. BS 7671 allows a reduced minimum insulation resistance of 0.5 MΩ for SELV/PELV circuits, unlike LV circuits which require 1.0 MΩ. This lower threshold still ensures safe insulation performance for extra-low-voltage installations."
  },
  {
    "prompt": "A continuity of ring final circuit conductors test is carried out using a low resistance scaled ohmmeter:",
    "options": {
      "A": "To prove the integrity of the cable insulation",
      "B": "To ensure an accurate reading",
      "C": "For ease of use",
      "D": "To ensure sufficient reading range"
    },
    "answer": "B",
    "explanation": "Continuity testing requires very small resistance values to be measured — often fractions of an ohm. A low-resistance ohmmeter provides the precision and current injection (usually 200 mA) needed to overcome contact resistance and ensure readings are accurate. High-range meters would not resolve such small values."
  },
  {
    "prompt": "During an initial verification which one of the following tests should be carried out first:",
    "options": {
      "A": "PFC",
      "B": "Earth fault loop impedance",
      "C": "Insulation resistance",
      "D": "Continuity of protective conductors"
    },
    "answer": "D",
    "explanation": "Continuity of CPCs is the first test because it is a dead test and confirms that protective conductors are intact before any energised testing takes place. This ensures safety for subsequent tests such as insulation resistance and polarity. It is the foundation of the required GN3 test sequence."
  },
  {
    "prompt": "Which of the following is not a method of ascertaining the prospective short circuit current at the origin of an installation",
    "options": {
      "A": "Measurement",
      "B": "Elimination",
      "C": "Calculation",
      "D": "Enquiry"
    },
    "answer": "B",
    "explanation": "PSC may be determined by measurement, enquiry from the DNO, or calculation. “Elimination” has no meaning in electrical testing and cannot provide a value for PSC. PSC must always be known so the breaking capacity of protective devices can be validated."
  },
  {
    "prompt": "When testing continuity of a ring final circuit wired with 2.5/1.5 PVC/PVC conductors using 'Method 1'. The value of R1 is 0.4Ω, what should be the approximate value of R2:",
    "options": {
      "A": "1.00 Ω",
      "B": "0.16 Ω",
      "C": "0.60 Ω",
      "D": "0.67 Ω"
    },
    "answer": "D",
    "explanation": "The CPC has a smaller cross-section than the line conductor, so its resistance is higher. Using the resistivity ratio between 2.5 mm² and 1.5 mm² cables gives R2 ≈ R1 × 1.67, which is about 0.67 Ω. This aligns with standard Ohms-per-metre tables."
  },
  {
    "prompt": "You are conducting ring final circuit test on a circuit containing 12 socket outlets, 11 socket outlets give a reading of 0.72? (+/- 0.5Ω) and one gives a reading of 0.81?. This might indicate:",
    "options": {
      "A": "A high resistance fault",
      "B": "A missing earth connection",
      "C": "A spur on the ring",
      "D": "A short circuit"
    },
    "answer": "C",
    "explanation": "A spur creates a longer path to that outlet, increasing measured resistance. Because the reading is higher but not excessively high, it indicates an extra branch rather than a fault such as high resistance or missing CPC. This is a common diagnostic clue in ring testing."
  },
  {
    "prompt": "Four circuits have insulation resistances of 40MΩ, 50MΩ, 100MΩ and 100MΩ. When tested together (insulation lump test) what would be the expected reading:",
    "options": {
      "A": "290 MΩ",
      "B": "6.5 MΩ",
      "C": "15.38 MΩ",
      "D": "0.065 MΩ"
    },
    "answer": "C",
    "explanation": "When circuits are tested together, insulation resistance values combine like resistances in parallel, always producing a lower total reading than any individual circuit. Using the parallel resistance formula gives an overall value close to 15.38 MΩ, typical for lump testing."
  },
  {
    "prompt": "During an end to end continuity test on a ring final circuit wired in pcv 2.5mm²/1.5mm² r1 reads 0.4?. What is the expected reading when testing for (R1 + R2):",
    "options": {
      "A": "1.8 Ω",
      "B": "0.2Ω",
      "C": "0.267Ω",
      "D": "0.9 Ω"
    },
    "answer": "C",
    "explanation": "Using cross-connection testing, (R1 + R2) at sockets equals (r1 + r2) / 4. With r1 = 0.4 Ω and r2 ≈ 0.67 Ω, the calculation gives around 0.27 Ω. This is the expected midpoint reading for ring continuity testing."
  },
  {
    "prompt": "When using a four terminal earth electrode tester to measure earth electrode resistance the connection to the earth electrode is made using terminals:",
    "options": {
      "A": "C1 and P2",
      "B": "C2 and P2",
      "C": "C1 and P1",
      "D": "P1 and C2"
    },
    "answer": "C",
    "explanation": "In a four-terminal tester, C1 and P1 connect to the electrode under test. C2 and P2 connect to the remote current and potential spikes. This configuration ensures accurate measurement by eliminating lead resistance and external interference."
  },
  {
    "prompt": "Which ONE of the following tests would NOT be applied to a 500mA residual current device:",
    "options": {
      "A": "5 x IDn",
      "B": "1.0 x IDn",
      "C": "Functional test",
      "D": "0.5 x IDn"
    },
    "answer": "A",
    "explanation": "5 × IΔn tests are used for 30 mA RCDs (used for ADS and additional protection). A 500 mA RCD is a time-delayed device mainly for fire protection and is not subjected to high-multiple instantaneous trip tests. Applying 5 × IΔn could damage the device."
  },
  {
    "prompt": "When taking impedance measurements at ambient temperature a 'Rule of Thumb' correction factor may be applied to the values in BS 7671 to take into account the increased resistance of conductors due to load current is:",
    "options": {
      "A": "0.8",
      "B": "0.5",
      "C": "0.75",
      "D": "1.2"
    },
    "answer": "A",
    "explanation": "Measured Zs values at ambient temperature are multiplied by 0.8 to estimate their value under operating temperature conditions. This accounts for increased conductor resistance when the cable is warm. It is a practical field method referenced in the OSG."
  },
  {
    "prompt": "The maximum volt drops for lighting and power circuits from the public supply are:",
    "options": {
      "A": "5% and 3%",
      "B": "5.0% and 4%",
      "C": "3% and 5%",
      "D": "4% and 5%"
    },
    "answer": "C",
    "explanation": "BS 7671 limits volt drop to 3% for lighting (to prevent dimming and misoperation) and 5% for socket/outlet circuits. This ensures equipment functions correctly and safely under load. These limits apply to installations supplied from public LV systems."
  },
  {
    "prompt": "What is the calculated prospective short circuit current at the origin of a TN-C-S 230V installation. Ze = 0.45?:",
    "options": {
      "A": "103.5 A",
      "B": "1.5 kA",
      "C": "1500 A",
      "D": "0.511 kA"
    },
    "answer": "D",
    "explanation": "PSC ≈ 230 V ÷ Ze → 230 ÷ 0.45 = 511 A ≈ 0.511 kA. This value must be checked to ensure protective devices have adequate breaking capacity. TN-C-S systems typically produce moderate PSC values due to low Ze."
  },
  {
    "prompt": "In a mechanics workshop, the repositioning of an emergency stop button would require the completion of:",
    "options": {
      "A": "A periodic inspection report",
      "B": "A minor works certificate",
      "C": "An electrical installation certificate",
      "D": "A small works certificate"
    },
    "answer": "B",
    "explanation": "Moving an emergency stop button modifies an existing circuit rather than creating a new one. A Minor Works Certificate is the correct form because safety-critical controls still require verification but do not constitute new installation work."
  },
  {
    "prompt": "Records of inspections and test results should be kept during the life of an installation. This will enable:",
    "options": {
      "A": "Landlords to carry out repairs",
      "B": "Correct selection of equipment",
      "C": "Deterioration to be identified",
      "D": "Identification of defective parts"
    },
    "answer": "C",
    "explanation": "Keeping historical test records allows comparison over time, making trends such as rising Zs, falling insulation resistance, or thermal deterioration easy to spot. This supports preventative maintenance and ensures continued compliance with BS 7671."
  },
  {
    "prompt": "Records of all checks, inspections and tests to an installation should be kept:",
    "options": {
      "A": "For 10 years",
      "B": "For 3 years",
      "C": "For one year",
      "D": "For the working life of the installation"
    },
    "answer": "D",
    "explanation": "BS 7671 and EAWR require documentation to be retained for as long as the installation exists. This ensures future inspectors can assess its condition, modifications, and historical defects. Short-term retention would undermine long-term safety."
  },
  {
    "prompt": "Faults within existing installations which 'do not' effect new additions to the installation:",
    "options": {
      "A": "Are required to be noted if observed by the engineer doing the new additions",
      "B": "Are required to be reported to the local building authority by the additions engineer",
      "C": "Are required to be corrected by the engineer doing the new additions",
      "D": "Do not need to be corrected by the engineer doing the new additions"
    },
    "answer": "A",
    "explanation": "Even if the fault does not influence the new work, the electrician has a duty to report observed defects in writing. They are not responsible for repairing them unless contracted to do so, but must ensure the client is aware of any safety issues."
  },
  {
    "prompt": "The maximum prospective fault current recorded on an electrical installation certificate should be:",
    "options": {
      "A": "The short-circuit current",
      "B": "The earth fault current",
      "C": "The greater of either the short-circuit current or the earth fault current",
      "D": "The lesser of either the short-circuit current or the earth fault current"
    },
    "answer": "C",
    "explanation": "Protective devices must be rated to interrupt the highest possible fault current. Therefore the EIC must record the higher value of PSC (L–N) or PEFC (L–E). This ensures correct discrimination and device selection."
  },
  {
    "prompt": "On completion of a new installation, the interval before the first periodic inspection would be decided by the:",
    "options": {
      "A": "Inspection and testing engineer",
      "B": "Client",
      "C": "Installer",
      "D": "Installation designer"
    },
    "answer": "D",
    "explanation": "The designer determines the expected environment, usage, and deterioration factors for the installation. Therefore, they specify the initial inspection interval on the EIC. Later intervals are recommended by the inspector during the first periodic inspection."
  },
  {
    "prompt": "Any addition to an existing installation should:",
    "options": {
      "A": "Be inspected and tested separate from the existing installation",
      "B": "Have its own energy meter separate from that of the existing installation",
      "C": "Not impair the safety of the existing installation",
      "D": "Have a similar wiring system to that used in the existing installation"
    },
    "answer": "C",
    "explanation": "BS 7671 requires that adding to an installation must not reduce its safety—this includes overloading circuits, compromising bonding, or affecting protective devices. The addition must be inspected and tested, but most importantly, it must maintain the original installation's safety integrity."
  },
  {
    "prompt": "Which of the following duties is 'not' the responsibility of the inspector:",
    "options": {
      "A": "To carry out maintenance and repairs on the installation",
      "B": "To compare the test results with the design criteria",
      "C": "To recommend the immediate isolation of defective parts",
      "D": "To advise on remedial works"
    },
    "answer": "A",
    "explanation": "The inspector’s role is strictly to inspect, test, and report on the condition of the installation. They may recommend remedial work, but they are not responsible for carrying out maintenance or repairs. This separation ensures independence and prevents conflicts of interest in compliance assessments."
  },
  {
    "prompt": "Inspection of a fully enclosed domestic consumer unit would not need verification for:",
    "options": {
      "A": "Rating and type of protective devices",
      "B": "Identification of conductors",
      "C": "Correct connection of single-pole devices",
      "D": "IP rating"
    },
    "answer": "D",
    "explanation": "A fully enclosed consumer unit already has a verified enclosure from the manufacturer, including its IP rating. During inspection, the electrician checks conductor identification, protective device ratings, and correct connection of single-pole devices — but not the IP rating of a sealed unit. IP verification applies mostly to site-built or exposed enclosures."
  },
  {
    "prompt": "When inspecting for adequate 'basic protection' (protection against electric shock or direct contact) which of the following does not require inspection. Presence and condition of:",
    "options": {
      "A": "Enclosures",
      "B": "Barriers",
      "C": "Insulation",
      "D": "Cpc's"
    },
    "answer": "D",
    "explanation": "Basic protection refers to preventing electric shock by touching live parts, which involves insulation, barriers, and enclosures. CPCs (earth conductors) relate to fault protection, not direct-contact protection. Therefore, CPCs are not part of basic protection verification."
  },
  {
    "prompt": "The measured value of loop impedance for a circuit is 2.4Ω. If the temperature at the time of the test was 20°C and the cable is 70°C (factor 1.2) what is the corrected value. Ze = 0.4Ω:",
    "options": {
      "A": "2.0 Ω",
      "B": "2.4 Ω",
      "C": "2.88 Ω",
      "D": "2.8 Ω"
    },
    "answer": "D",
    "explanation": "To correct for operating temperature, subtract Ze from Zs, multiply the cable resistance by 1.2, then add Ze back. (2.4 − 0.4) × 1.2 + 0.4 = 2.8 Ω. This ensures the calculated value reflects the conductor’s increased resistance under load."
  },
  {
    "prompt": "Put the following tests in the correct sequence: 1- earth fault loop impedance 2- polarity 3- ring circuit continuity 4- prospective fault current:",
    "options": {
      "A": "1.3.2.4",
      "B": "1.4.3.2",
      "C": "4.1.2.3",
      "D": "2.4.1.3"
    },
    "answer": "A",
    "explanation": "PSC (prospective short-circuit current) is always taken before connecting circuits, and before Zs or polarity tests. Continuity of the ring is a dead test and comes early, before polarity. Polarity is always verified before energisation. Thus the correct safe sequence is PSC → Loop → Polarity → Ring continuity."
  },
  {
    "prompt": "Before commencing live tests and before energising the installation, it is vital that you:",
    "options": {
      "A": "Evacuate the area of the general public",
      "B": "Inform other people in the area",
      "C": "Erect barriers around the testing area",
      "D": "Disconnect the earth conductor from the Main Earth Terminal"
    },
    "answer": "B",
    "explanation": "Before energising or doing live testing, you must ensure others are aware to prevent accidental contact or interference. Disconnection of the earthing conductor or evacuating the building is not required and would be unsafe. Informing people is part of safe working procedures in BS 7671 and EAWR."
  },
  {
    "prompt": "A room in which there is a 13 A socket outlet is to be converted into a bathroom. The socket outlet must be:",
    "options": {
      "A": "Fitted with a switch",
      "B": "Moved to become a ceiling socket outlet",
      "C": "Moved so as to be more than 3 m from the bath",
      "D": "Removed from the room"
    },
    "answer": "C",
    "explanation": "Bathrooms have strict zoning rules; socket outlets are only permitted outside 3 m from the edge of a bath or shower. This ensures reduced risk of electric shock in wet areas. Removing the socket entirely is not mandatory if it can be safely repositioned."
  },
  {
    "prompt": "Where vertical trunking passes through floors internal fire resistant barriers must be:",
    "options": {
      "A": "Mid-way between each floor",
      "B": "Only at the top of the trunking",
      "C": "At maximum intervals of 3 m",
      "D": "At each floor level"
    },
    "answer": "D",
    "explanation": "Fire-stopping is required wherever trunking penetrates fire-separating structures, such as floors. Barriers at each floor prevent fire and smoke spreading between storeys through trunking voids. This is part of maintaining the building’s fire compartmentation."
  },
  {
    "prompt": "Electrical test probes must comply with standards set by:",
    "options": {
      "A": "BS 7671",
      "B": "GN 3",
      "C": "Guidance Note GS 38",
      "D": "BS EN 60598"
    },
    "answer": "C",
    "explanation": "GS 38 (HSE Guidance Note) specifies the construction and safety requirements for test probes, leads, and clips. It ensures they are robust, shrouded, finger-safe, and prevent accidental contact with live parts. BS 7671 references GS 38 for safe testing practices."
  },
  {
    "prompt": "When measured at the origin of an electrical installation, the value of prospective earth fault current and prospective short circuit current were of equal value. The type of earthing arrangement involved would be:",
    "options": {
      "A": "IT",
      "B": "TT",
      "C": "TN-S",
      "D": "TN-C-S"
    },
    "answer": "D",
    "explanation": "In a TN-C-S system, the neutral and earth are combined in a PEN conductor, meaning earth fault current and short-circuit current share much of the same path. This often results in PEFC ≈ PSCC. In TT systems, PEFC is much lower due to high electrode resistance."
  },
  {
    "prompt": "When carrying out a prospective short circuit fault current test on a three-phase system the fault current between line conductors will be:",
    "options": {
      "A": "Equal to the fault current between two phases and neutral",
      "B": "Equal to the fault current between one phase and neutral",
      "C": "Approximately twice the fault current between one phase and neutral",
      "D": "Smaller than the earth fault current"
    },
    "answer": "C",
    "explanation": "Line-to-line voltage in a 3-phase system is 400 V, while line-to-neutral is 230 V. PSC is proportional to voltage, so fault current between phases is roughly 1.73× higher — commonly rounded to “approximately twice” for exam purposes. This helps verify device breaking capacity."
  },
  {
    "prompt": "The reading on the instrument used to perform a continuity test will show the value in:",
    "options": {
      "A": "Mega-Ohms",
      "B": "Volts",
      "C": "Milli-Amperes",
      "D": "Ohms"
    },
    "answer": "D",
    "explanation": "Continuity tests measure resistance along conductors, confirming unbroken paths and correct jointing. The only appropriate unit is ohms (Ω). Megaohms are used for insulation testing, whereas volts and milliamps apply to different tests."
  },
  {
    "prompt": "Which ONE of the following values of insulation resistance may indicate a latent defect:",
    "options": {
      "A": "10.0 MΩ",
      "B": "25 MΩ",
      "C": "1.5 MΩ",
      "D": "2.5 MΩ"
    },
    "answer": "C",
    "explanation": "While the minimum acceptable IR is 1.0 MΩ for most circuits, values close to the minimum — such as 1.5 MΩ — suggest potential deterioration that may worsen under load. Higher values (10–25 MΩ) indicate healthy insulation. A marginal reading can warn of future breakdown."
  },
  {
    "prompt": "Where an installation is protected by a residual current device it should be manually tested by use of the integral test button:",
    "options": {
      "A": "Quarterly",
      "B": "Monthly",
      "C": "Weekly",
      "D": "Annually"
    },
    "answer": "A",
    "explanation": "Manufacturers and BS 7671 recommend pressing the RCD test button every three months. This ensures the mechanical tripping mechanism does not seize and continues to operate correctly. Weekly or monthly tests are excessive; annual tests are insufficient."
  },
  {
    "prompt": "The minimum acceptable value of insulation resistance for a 650V discharge lighting circuits is:",
    "options": {
      "A": "0.25 MΩ",
      "B": "1.0 MΩ",
      "C": "MΩ",
      "D": "0.5 MΩ"
    },
    "answer": "B",
    "explanation": "Specialist discharge lighting often operates at higher voltages, but BS 7671 still requires a minimum IR of 1.0 MΩ when tested at 500 V. Anything lower could indicate breakdown in control gear, ignitors, or wiring."
  },
  {
    "prompt": "As an alternative to the 'D-Lok', some instruments reduce the possibility of r.c.d. tripping during impedance testing by limiting the test current to:",
    "options": {
      "A": "15mA",
      "B": "100mA",
      "C": "150mA",
      "D": "30mA"
    },
    "answer": "A",
    "explanation": "RCDs typically trip at 30 mA. Using a test current below half that value — around 15 mA — greatly reduces the risk of unwanted tripping during loop testing. This allows safe “no-trip” Zs testing on RCD-protected circuits."
  },
  {
    "prompt": "A ring final circuit wired in pcv 2.5mm²/1.5mm². Resistances per metre are 7.41mΩ/m and 12.1mΩ/m respectively. What is the expected value of (R1 + R2). The circuit is 16.5 meters long:",
    "options": {
      "A": "0.2 Ω",
      "B": "0.322 Ω",
      "C": "0.122 Ω",
      "D": "0.08 Ω"
    },
    "answer": "D",
    "explanation": "For ring circuits, R1 + R2 is calculated based on the PER-METRE values and multiplied by the circuit length, then divided due to parallel paths. The calculation gives approximately 0.08 Ω, indicating a low fault path resistance suitable for fast disconnection."
  },
  {
    "prompt": "When performing an earth electrode test, the most reliable results would be when the distance between the earth electrode and the current spike is:",
    "options": {
      "A": "At least 5 times the maximum dimension of the earth electrode spike",
      "B": "Within two metres of each other",
      "C": "Between two and five metres away",
      "D": "At least 10 times the maximum dimension of the electrode system"
    },
    "answer": "D",
    "explanation": "Test spikes must be positioned far enough away from the electrode to avoid overlapping resistance fields. The rule of thumb is 10 × electrode length for reliable results. Shorter distances cause inaccurate, unstable readings."
  },
  {
    "prompt": "When two 10mm² bonding conductors of equal length are connected in parallel the resistance would:",
    "options": {
      "A": "Half",
      "B": "Double",
      "C": "Decrease",
      "D": "Increase"
    },
    "answer": "A",
    "explanation": "Parallel conductors share current and reduce overall resistance. Two identical conductors in parallel double the cross-sectional area, so resistance is effectively cut in half. This improves fault current carrying performance and reduces volt-drop on bonding paths."
  },
  {
    "prompt": "When performing an initial insulation resistance test on a central heating circuit, you should:",
    "options": {
      "A": "Disconnect the electronic time controller",
      "B": "Only test between line and neutral",
      "C": "Ensure the water supply is switched off",
      "D": "Disconnect the boiler"
    },
    "answer": "A",
    "explanation": "Heating circuits contain programmers, thermostats, and control boards easily damaged by 500 V DC IR tests. These components must be disconnected or bypassed before testing. Failing to isolate them can cause catastrophic damage and invalidate warranties."
  },
  {
    "prompt": "It is important to test a new installation in the correct sequence because:",
    "options": {
      "A": "Each test relies on the previous to be correct",
      "B": "The sequence is stated in GN3",
      "C": "It is easy to remember",
      "D": "It is more convenient"
    },
    "answer": "A",
    "explanation": "The testing sequence ensures safety and accuracy because early tests, such as continuity and insulation resistance, confirm that circuits are safe before energising them. Later tests like polarity and functional testing depend on those earlier checks being correct. Following the sequence avoids unsafe testing conditions and prevents misleading results."
  },
  {
    "prompt": "The insulation resistance of two circuits is of 40MΩ and 36MΩ respectively. When tested together what would be approximately the total insulation resistance:",
    "options": {
      "A": "76 MΩ",
      "B": "1440 MΩ",
      "C": "19 MΩ",
      "D": "4 MΩ"
    },
    "answer": "C",
    "explanation": "When insulation resistances are tested together, they act like resistances in parallel, making the total value lower than either individual reading. Using the IR parallel formula gives an approximate combined value of 19 MΩ. This reflects the way insulation leakage paths combine when circuits are grouped."
  },
  {
    "prompt": "When performing an insulation test on a 230V domestic ring circuit, what level of test voltage is required:",
    "options": {
      "A": "50V",
      "B": "110V",
      "C": "230V",
      "D": "500V"
    },
    "answer": "D",
    "explanation": "BS 7671 requires a 500 V DC insulation resistance test voltage for LV circuits with a nominal voltage above 120 V. A 230 V ring circuit falls in this category, so it must be tested at 500 V. This ensures sufficient stress is applied to the insulation to detect weaknesses or faults."
  },
  {
    "prompt": "A minor works certificate would be issued when:",
    "options": {
      "A": "Alterations or additions are made to an existing installation",
      "B": "A single circuit is added to an existing installation",
      "C": "The person erecting the installation is also responsible for the design and testing",
      "D": "The inspecting engineer is not authorised to issue a periodic inspection and test report"
    },
    "answer": "A",
    "explanation": "A Minor Works Certificate is used only when modifying or adding to existing circuits—for example adding a socket or extending a lighting point. It is not used for new circuits or full new installations. This ensures paperwork is proportionate to the work carried out while still confirming safety."
  },
  {
    "prompt": "What would be the expected maximum resistance of a main equipotential bonding conductor:",
    "options": {
      "A": "1.2 Ω",
      "B": "0.5 Ω",
      "C": "0.05 Ω",
      "D": "0.725 Ω"
    },
    "answer": "C",
    "explanation": "Guidance Note 3 recommends that bonding conductors should have a very low resistance, ideally not exceeding 0.05 Ω, to ensure effective equipotential bonding. Low resistance prevents hazardous voltage differences appearing during fault conditions. Anything higher would reduce the effectiveness of the bonding."
  },
  {
    "prompt": "After the installation of a new shower circuit the customer should be provided with:",
    "options": {
      "A": "A building control notification",
      "B": "A minor works certificate",
      "C": "An electrical installation certificate",
      "D": "A periodic inspection report"
    },
    "answer": "C",
    "explanation": "A new shower circuit is a new circuit, so a full Electrical Installation Certificate must be issued. A Minor Works Certificate is not acceptable because it applies only to alterations of existing circuits. The EIC confirms that design, installation, and testing comply with BS 7671."
  },
  {
    "prompt": "The prospective fault current would be recorded on a:",
    "options": {
      "A": "Schedule of inspection",
      "B": "Minor works certificate",
      "C": "Electrical installation certificate",
      "D": "Small works certificate"
    },
    "answer": "C",
    "explanation": "Prospective fault current (PSC) is a key safety parameter and must be recorded on the EIC during initial verification. This ensures that protective devices have sufficient breaking capacity to clear faults safely. PSC is not recorded on the Minor Works or Inspection Schedule alone."
  },
  {
    "prompt": "A legible diagram, chart or table relating to an installation must be provided to indicate:",
    "options": {
      "A": "The location of all socket outlets",
      "B": "Any equipment vulnerable to a test",
      "C": "Any modifications made to the installation",
      "D": "The expected life of the installation"
    },
    "answer": "B",
    "explanation": "BS 7671 requires documentation showing equipment that may be damaged by testing—such as electronic controls during insulation resistance tests. This ensures the tester can safely isolate vulnerable equipment before applying high test voltages. Clear diagrams help prevent accidental damage and ensure safe testing."
  },
  {
    "prompt": "The term given to the person responsible for an electrical system is the:",
    "options": {
      "A": "Company manager",
      "B": "Duty holder",
      "C": "Electrician",
      "D": "Competent person"
    },
    "answer": "B",
    "explanation": "Under the Electricity at Work Regulations, the duty holder is the person legally responsible for ensuring electrical safety. They may appoint competent persons to carry out work but retain ultimate responsibility. This term is used in all legal and safety documentation."
  },
  {
    "prompt": "Regional electricity companies quote a maximum likely value of external loop impedance (outside the consumer's installation) for a TN-S system as:",
    "options": {
      "A": "21 Ω",
      "B": "0.8 Ω",
      "C": "200 Ω",
      "D": "0.35 Ω"
    },
    "answer": "B",
    "explanation": "For TN-S systems, supply authorities typically quote a maximum external earth fault loop impedance (Ze) of 0.8 Ω. This reflects the characteristics of older lead-sheathed cables used as the earth return path. It is a standard design reference value used throughout the industry."
  },
  {
    "prompt": "Under the Electricity at Work Regulations (EAWR), live working is only allowed in limited situations. Which of the following describes the key condition that must apply before live working can be considered acceptable?",
    "options": {
      "A": "A member of staff gives permission",
      "B": "Suitable tools are used",
      "C": "It is unreasonable in the circumstances to make the equipment dead",
      "D": "Suitable PPE is worn"
    },
    "answer": "C",
    "explanation": "EAWR Regulation 14 makes “dead working” the default rule: you must not work on or near live conductors unless it is unreasonable in all the circumstances for the equipment to be made dead and suitable precautions are taken to prevent injury."
  },
  {
    "prompt": "Overloaded windings on a 3 phase motor may be identified in the first instance by using which sense:",
    "options": {
      "A": "Smell",
      "B": "Taste",
      "C": "Sight",
      "D": "Touch"
    },
    "answer": "A",
    "explanation": "Overheated motor windings often produce a strong burning smell before visual or thermal signs become apparent. Smell is therefore the first human sense likely to detect early insulation breakdown. This makes it a useful tool during routine checks and initial verification."
  },
  {
    "prompt": "Which of the following earthing systems has the path for earth leakage currents via the earth itself:",
    "options": {
      "A": "TN-S",
      "B": "TT",
      "C": "TNC-S",
      "D": "TN-C"
    },
    "answer": "B",
    "explanation": "In a TT system, the installation’s earth electrode connects directly to the mass of earth rather than relying on the supply’s neutral or metallic sheath. Fault currents return through the physical earth, which has higher resistance, making RCD protection essential. This distinguishes TT from TN systems."
  },
  {
    "prompt": "The small rectangular box on the side of a circuit breaker with a number (for example 6000) marked within represents:",
    "options": {
      "A": "The rated short-circuit capacity of the device in kA",
      "B": "The rated short-circuit capacity of the device in Amps",
      "C": "The current required to activate the device",
      "D": "The current, in amps, expected during a short-circuit fault"
    },
    "answer": "B",
    "explanation": "A number such as 6000 printed in a box on a circuit breaker indicates its breaking capacity, meaning it can safely interrupt up to 6000 A of fault current. This ensures the device won’t explode or fail under high fault conditions. It is a key rating used in designing and assessing installations."
  },
  {
    "prompt": "The prospective fault current at the origin of the installation must be taken into account when:",
    "options": {
      "A": "Applying diversity to the installation",
      "B": "Estimating the external earth fault loop impedance",
      "C": "Selecting the appropriate type of over current protection",
      "D": "Assessing the earthing arrangement"
    },
    "answer": "C",
    "explanation": "Protective devices must have sufficient breaking capacity to safely clear the maximum possible fault current. PSC determines whether the device can survive fault conditions without failure. Therefore, PSC is essential when selecting fuses, MCBs, or MCCBs."
  },
  {
    "prompt": "In a room containing a shower, the area above the shower tray is referred to as Zone:",
    "options": {
      "A": "3",
      "B": "2",
      "C": "1",
      "D": "0"
    },
    "answer": "C",
    "explanation": "Zone 1 extends above the bath or shower to a height of 2.25 m from the floor. This zone requires equipment with additional protection, usually IPX4 or better, and RCD protection. It ensures safety in areas exposed to water spray."
  },
  {
    "prompt": "Which of the following does not meet the requirements for maximum value of voltage drop on a 230V supply, supplied directly from a public low voltage system:",
    "options": {
      "A": "Lighting 5.9V; Sockets 8.2V",
      "B": "Lighting 6.8V; Sockets 5.3V",
      "C": "Lighting 4.0V; Sockets 5.7V",
      "D": "Lighting 3.5V; Sockets 11.7V"
    },
    "answer": "D",
    "explanation": "Maximum allowable voltage drop is 3% for lighting and 5% for socket circuits. 3.5 V exceeds the 3% limit for lighting (≈ 6.9 V max on 230 V), and 11.7 V exceeds the 5% limit for sockets (≈ 11.5 V max). Therefore this combination fails to meet BS 7671 requirements."
  },
  {
    "prompt": "Table 9A in the On Site Guide gives a value of 19.51 (mΩ/m) for a line conductor of 2.5mm² and a protective conductor of 1.5mm². What would be the resistance of a circuit 25m in length when wired using these conductor:",
    "options": {
      "A": "0.487 Ω",
      "B": "487 Ω",
      "C": "4.87 Ω",
      "D": "780 Ω"
    },
    "answer": "A",
    "explanation": "The resistance value includes both line and CPC, so the total loop length is 50 m (out and back). 19.51 mΩ/m × 50 m = 0.9755 Ω, but divided appropriately for conductor sizes gives 0.487 Ω. This aligns with table values in the On-Site Guide."
  },
  {
    "prompt": "Which of the following tests would be carried out 'live':",
    "options": {
      "A": "Earth continuity",
      "B": "Prospective fault current",
      "C": "Ring circuit continuity",
      "D": "Insulation resistance"
    },
    "answer": "B",
    "explanation": "PSC testing requires energised conductors because it measures real supply characteristics such as impedance and fault level. Other tests like continuity and insulation resistance are dead tests. PSC must always be performed with strict safety precautions."
  },
  {
    "prompt": "An approved voltage tester can be used to:",
    "options": {
      "A": "Determine the effectiveness of a disconnection device",
      "B": "Carry out continuity tests",
      "C": "Establish whether a circuit conductor is live or not",
      "D": "Measure the resistance of an earth continuity conductor"
    },
    "answer": "C",
    "explanation": "An approved voltage tester (such as a two-pole tester) is specifically designed to safely determine the presence or absence of voltage on a circuit conductor. It provides a reliable indication of whether a conductor is energised, which is an essential step before touching or working on wiring. Unlike non-contact “volt sticks,” approved testers meet safety standards and give a definitive, safe reading."
  },
  {
    "prompt": "Which of the following does not form part of the earth fault loop impedance:",
    "options": {
      "A": "The cable armouring",
      "B": "The neutral within the consumer's installation",
      "C": "The earth electrode",
      "D": "The phase conductor"
    },
    "answer": "B",
    "explanation": "Earth fault loop impedance concerns the fault path through line, external earth, and CPC back to the supply. The neutral conductor inside the installation is not part of the earth fault loop during an earth fault. Only the line, CPC/earth electrode, and supply earth path contribute to Zs."
  },
  {
    "prompt": "An earth fault loop impedance tester should only allow current to flow for:",
    "options": {
      "A": "0.4s",
      "B": "400ms",
      "C": "4.0s",
      "D": "40ms"
    },
    "answer": "D",
    "explanation": "Loop testers apply a short-duration test current to avoid stressing the installation. The recommended duration is around 40 ms, which is long enough to measure impedance yet short enough to prevent overheating or nuisance tripping. Longer test currents (e.g., 0.4 s or more) would be unsafe."
  },
  {
    "prompt": "A 100ma RCD protecting a TT installation tested at half the rated tripping current should:",
    "options": {
      "A": "Operate within 50ms",
      "B": "Operate within 100ms",
      "C": "Not operate",
      "D": "Operate within 300ms"
    },
    "answer": "C",
    "explanation": "At half its rated current (0.5 × IΔn), an RCD should not trip. This verifies that the RCD does not operate under minor leakage currents and only responds at or above its designed threshold. This is a required discrimination check in BS 7671 RCD testing."
  },
  {
    "prompt": "What type of test instrument may give a reading of 2.5 kA:",
    "options": {
      "A": "An rcd tester",
      "B": "An insulation resistance tester",
      "C": "A prospective fault current tester",
      "D": "A low resistance ohmmeter"
    },
    "answer": "C",
    "explanation": "Only a PSC (prospective short-circuit) tester can measure high fault currents like 2.5 kA. Other instruments, such as insulation testers or RCD testers, operate at very low current levels and cannot measure fault current capability. PSC testing ensures the breaking capacity of protective devices is adequate."
  },
  {
    "prompt": "GN3 advises that the resistance of main protective bonding conductors should not be greater than:",
    "options": {
      "A": "0.5 Ω",
      "B": "0.55 Ω",
      "C": "0.25 Ω",
      "D": "0.05 Ω"
    },
    "answer": "D",
    "explanation": "Guidance Note 3 recommends that bonding conductors have extremely low resistance to ensure effective potential equalisation. A maximum of 0.05 Ω ensures minimal voltage difference under fault conditions. Higher values would compromise safety and bonding performance."
  },
  {
    "prompt": "During a continuity test for the continuity of cpc, GN3 recommends that a temporary link should be made between:",
    "options": {
      "A": "The neutral and the cpc in the consumer unit",
      "B": "The line and cpc in the consumer unit",
      "C": "The earth and the cpc in the consumer unit",
      "D": "Line and cpc at the socket outlet"
    },
    "answer": "B",
    "explanation": "Linking the line conductor to the CPC at the origin allows continuity of the CPC throughout the circuit to be tested using a standard low-ohm meter. This method ensures correct polarity and CPC route verification. Other linking methods are not part of GN3 guidance."
  },
  {
    "prompt": "A direct Zs reading taken on a motor circuit may be lower than adding Ze to R1 and R2, this is because of:",
    "options": {
      "A": "Magnetic forces",
      "B": "High resistance terminals",
      "C": "An incorrect reading",
      "D": "Parallel paths"
    },
    "answer": "D",
    "explanation": "Motor circuits often include metallic containment or bonding paths that provide parallel earth return paths, lowering the measured Zs. Adding Ze + R1 + R2 assumes a single path, so direct measurement can appear lower. This is a common phenomenon in industrial installations."
  },
  {
    "prompt": "In situations where SELV conductors are separated by just insulation from low voltage conductors the insulation resistance test voltage and minimum insulation reading should be:",
    "options": {
      "A": "250V and 0.5MΩ",
      "B": "250V and 1.0MΩ",
      "C": "500V and 0.5MΩ",
      "D": "500V and 1.0MΩ"
    },
    "answer": "D",
    "explanation": "Where SELV circuits run next to LV circuits, a 500 V IR test is required to ensure insulation between them is sufficiently robust. The minimum acceptable value is 1.0 MΩ, protecting users from indirect contact risks due to insulation breakdown."
  },
  {
    "prompt": "The multiplier given in the On Site Guide to be used to raise an ambient temperature continuity reading is:",
    "options": {
      "A": "0.725",
      "B": "0.5",
      "C": "1.2",
      "D": "0.75"
    },
    "answer": "C",
    "explanation": "Continuity readings taken at room temperature must be adjusted to simulate conductor resistance at operating temperature. The On-Site Guide recommends using a 1.2 multiplier for 70°C thermoplastic cable. This corrected value is used for accurate design comparison."
  },
  {
    "prompt": "How long is the maximum recommended period between periodic testing for (a) offices and (b) theatres:",
    "options": {
      "A": "5 years and 1 year",
      "B": "1 year and 3 years",
      "C": "5 years and 3 years",
      "D": "3 years and 5 years"
    },
    "answer": "C",
    "explanation": "Offices generally have stable electrical loads and low environmental stresses, allowing longer inspection intervals of 5 years. Theatres, however, involve frequent equipment changes and higher risk assumptions, requiring more frequent inspection at 3 years."
  },
  {
    "prompt": "The measured value displayed on a test instrument is 39ms. The test being carried out is:",
    "options": {
      "A": "Continuity",
      "B": "Earth fault loop impedance",
      "C": "Insulation resistance",
      "D": "Operation of RCDs"
    },
    "answer": "D",
    "explanation": "A result measured in milliseconds clearly relates to RCD tripping time, as insulation, continuity, or loop tests do not use time-based values. A reading of 39 ms is typical for a 1× or 5× IΔn RCD test, confirming the device disconnects quickly enough."
  },
  {
    "prompt": "What is the minimum protection required for (a) the front of a consumer unit, and (b) the top surface of the consumer unit:",
    "options": {
      "A": "IPX4 and IPX2",
      "B": "IP2X and IP4X",
      "C": "IPX2 and IPX4",
      "D": "IP4X and IP2X"
    },
    "answer": "B",
    "explanation": "BS 7671 requires the front of a consumer unit to be at least IP2X, preventing finger entry. The top surface must be IP4X to stop small wires (1 mm diameter) entering the enclosure. These IP levels ensure safe access and prevent foreign object ingress."
  },
  {
    "prompt": "A 230V single phase circuit supplies a light which is controlled by a passive infra red sensor. Special care must be taken before insulation resistance testing is carried out because the test may:",
    "options": {
      "A": "Cause the circuit breaker to trip",
      "B": "Give a false reading",
      "C": "Operate the sensor and damage the light",
      "D": "Permanently damage the sensor"
    },
    "answer": "D",
    "explanation": "Insulation resistance testing applies up to 500 V DC, which can damage sensitive electronic components such as PIR sensors. These devices must be disconnected or bypassed before testing. Failing to do so may destroy the sensor and invalidate the certificate."
  },
  {
    "prompt": "Which of the following is not an example of an 'essential test' when carrying out minor works:",
    "options": {
      "A": "Insulation resistance",
      "B": "Earth fault loop impedance",
      "C": "Polarity",
      "D": "Prospective fault current"
    },
    "answer": "D",
    "explanation": "Minor works require polarity, continuity (where applicable), insulation resistance, and Zs testing. PSC is unnecessary because the protective devices and supply characteristics are not being altered. PSC testing is only essential during full initial verification."
  },
  {
    "prompt": "Digital test instruments should have an accuracy, as stated in GN3, of what percentage of full scale deflection (fsd):",
    "options": {
      "A": "1%",
      "B": "5%",
      "C": "3%",
      "D": "7%"
    },
    "answer": "B",
    "explanation": "Guidance Note 3 specifies that instruments must meet ±5% full-scale deflection accuracy to ensure reliable and compliant measurements. This standard ensures test results fall within acceptable tolerances for certification. Greater deviation may compromise safety verification."
  },
  {
    "prompt": "Where a mortgage company commissions you to perform a formal inspection and test on a domestic property, the certificate you would use would be:",
    "options": {
      "A": "A minor works certificate",
      "B": "A building control notification",
      "C": "An electrical installation certificate",
      "D": "An electrical installation condition report"
    },
    "answer": "D",
    "explanation": "A mortgage company requires confirmation of the installation’s condition, not certification of new work. An EICR provides a formal inspection and testing record of an existing installation. Minor Works Certificates and EICs apply only to new work or alterations."
  },
  {
    "prompt": "When verifying the continuity of a ring circuit the measured loop resistance of the line, neutral and cpc were 0.9 Ω, 0.9 Ω and 1.5Ω respectively. What is the expected test value at each socket between the line and cpc when interconnected at the board:",
    "options": {
      "A": "1.4 Ω",
      "B": "0.6 Ω",
      "C": "0.45 Ω",
      "D": "0.9 Ω"
    },
    "answer": "B",
    "explanation": "Cross-connection testing in ring circuits produces the highest readings near the midpoints. The expected L–CPC test value is calculated using (r1 + r2) ÷ 4 = (0.9 + 1.5) ÷ 4 ≈ 0.6 Ω. This verifies the ring is intact and correctly interconnected."
  },
  {
    "prompt": "The proposed interval between the first periodic inspection and future inspections should be recommended by:",
    "options": {
      "A": "The person carrying out the initial verification",
      "B": "The person carrying out the first periodic inspection",
      "C": "The person who designed the installation",
      "D": "The installation engineer"
    },
    "answer": "B",
    "explanation": "The inspector determines future inspection intervals based on installation condition, usage, environment, and deterioration risk. BS 7671 places this responsibility solely on the competent person performing the inspection, not the designer or installer."
  }
];

export const electricianTraining2391Mock7Questions: SourceQuestion[] = [
  {
    "prompt": "OSG gives the maximum stable value of Ze for a TT installation as:",
    "options": {
      "A": "600 ohms",
      "B": "200 ohms",
      "C": "100 ohms",
      "D": "1660 ohms"
    },
    "answer": "B",
    "explanation": "The On-Site Guide gives 200 Ω as a typical maximum stable earth electrode resistance for TT systems. Higher values may still comply, but above 200 Ω the electrode may become unreliable under varying soil conditions. RCD protection is essential because TT systems rely on high-resistance earth paths."
  },
  {
    "prompt": "Which type of earthing system relies on a separately supplied earth, usually the sheathing on the cable:",
    "options": {
      "A": "TT",
      "B": "IT",
      "C": "TN-S",
      "D": "TN-C-S"
    },
    "answer": "C",
    "explanation": "A TN-S earthing system uses a separate earth conductor provided by the distributor, typically the metallic sheath or armour of the supply cable. This sheath serves as the protective earth back to the transformer, making it independent from the neutral conductor. Because the earth is supplied separately, TN-S does not use a combined neutral–earth conductor like TN-C-S systems do."
  },
  {
    "prompt": "Which of the following would not be one of the human senses to use during the initial verification of an addition to a lighting circuit:",
    "options": {
      "A": "Touch",
      "B": "Hearing",
      "C": "Sight",
      "D": "Taste"
    },
    "answer": "D",
    "explanation": "During initial verification, an electrician may use sight, hearing, smell, and sometimes touch (with caution) to identify defects such as overheating, loose connections, or unusual sounds. However, taste is never used as a method of inspection for obvious safety reasons. Therefore, taste is the only human sense that is not part of the verification process."
  },
  {
    "prompt": "On a standard TT installation, the result of the resistance of the earth electrode and the rated RCD residual operating current should not exceed:",
    "options": {
      "A": "50V",
      "B": "110V",
      "C": "400V",
      "D": "25V"
    },
    "answer": "A",
    "explanation": "For a TT installation, BS 7671 requires that the product of the earth electrode resistance (RA) and the rated residual operating current of the RCD (IΔn) does not exceed 50 volts. This ensures that under a fault condition, touch voltage remains within safe limits. For example, with a 30 mA RCD, the maximum allowable RA is 1667 Ω (because 50 ÷ 0.03 = 1667)."
  },
  {
    "prompt": "Which of the following protection devices is unlikely to be suited for short circuit currents in the region of 6kA:",
    "options": {
      "A": "BS 88-3 cartridge fuse",
      "B": "BS 3036 semi-enclosed fuse",
      "C": "BS 88-2 general purpose fuse",
      "D": "BS EN 60898 circuit breaker"
    },
    "answer": "B",
    "explanation": "Traditional BS 3036 rewirable fuses have a relatively low breaking (rupturing) capacity, typically around 1–2 kA, meaning they cannot safely interrupt very high fault currents such as 6 kA. Using one in such conditions could result in the fuse failing dangerously instead of clearing the fault. Modern devices like MCBs and cartridge fuses have much higher breaking capacities and are designed to handle these fault levels."
  },
  {
    "prompt": "The person carrying out inspection and testing must have:",
    "options": {
      "A": "Sound knowledge and experience relevant to the installation being inspected",
      "B": "An inspection and test qualification",
      "C": "A current Wiring Regulations qualification",
      "D": "Both (a) and (b)"
    },
    "answer": "A",
    "explanation": "BS 7671 requires that anyone performing inspection and testing must be competent, meaning they have the technical knowledge, practical skills, and experience necessary to recognise faults and understand electrical risks. This includes knowing how installations should be constructed and how to apply the testing procedures safely. Without this level of competence, inspection and testing cannot be carried out reliably or safely."
  },
  {
    "prompt": "A British Standard having a BS EN number is a:",
    "options": {
      "A": "European harmonised Standard",
      "B": "British compliant Standard",
      "C": "Non-statutory Regulation",
      "D": "Statutory Regulation"
    },
    "answer": "A",
    "explanation": "A BS EN standard is a European Norm (EN) that has been formally adopted by the British Standards Institution. This means it is a European-wide technical standard that has been given British Standard status. In practice, any standard labelled BS EN reflects harmonised European requirements but with UK adoption and numbering."
  },
  {
    "prompt": "The top surface of a consumer unit should be protected from ingress of dust to a standard of:",
    "options": {
      "A": "IP5X",
      "B": "IP6X",
      "C": "IP4X",
      "D": "IP2X"
    },
    "answer": "C",
    "explanation": "BS 7671 requires that the top surfaces of consumer units (and similar enclosures) be protected to at least IP4X, meaning protection against solid objects larger than 1 mm. This prevents dust, debris, and small tools or wires from entering the enclosure from above. Other sides generally need only IP2X, but the top must meet the higher IP4X requirement for safety."
  },
  {
    "prompt": "A visual inspection is necessary before testing to check whether:",
    "options": {
      "A": "The Zs is within the maximum allowed",
      "B": "The insulation resistance is acceptable",
      "C": "There is adequate access to switchgear",
      "D": "The polarity of switches and fuses are correct"
    },
    "answer": "C",
    "explanation": "A visual inspection before testing ensures that all equipment, including switchgear, can be safely reached, operated, and maintained. Adequate access is essential so that protective devices can be worked on without danger and so testing can be carried out properly. If access is restricted, it may create safety risks or make inspection and testing impossible, so this must be confirmed visually before any tests begin."
  },
  {
    "prompt": "During initial verification of a TN system the installation earth conductor was recorded as 16mm². The minimum size of main bonding conductor should be:",
    "options": {
      "A": "16 mm²",
      "B": "4mm²",
      "C": "6 mm²",
      "D": "10 mm²"
    },
    "answer": "D",
    "explanation": "For TN systems, BS 7671 states that the minimum size of the main protective bonding conductor is determined from Table 54.8. When the main earthing conductor is 16 mm², the required bonding conductor is 10 mm², provided it is copper. This ensures the bonding can safely carry fault currents without excessive heating while not needing to be as large as the earthing conductor."
  },
  {
    "prompt": "Which of the following is not permitted for use as an earth electrode:",
    "options": {
      "A": "Earth plates",
      "B": "Underground structural metalwork",
      "C": "Lead sheaths of cables",
      "D": "Metal water mains pipes"
    },
    "answer": "D",
    "explanation": "Metal water mains must not be used as earth electrodes because they can be replaced with non-conductive plastic at any time without notice, removing the earth connection and creating a dangerous situation. They also do not provide reliable long-term continuity to earth. BS 7671 requires earth electrodes to be purpose-made or consist of suitable buried metalwork that is permanent and under the control of the installation owner."
  },
  {
    "prompt": "Which one of the following does not need to be checked for compliance during the visual inspection of an installation:",
    "options": {
      "A": "Correct connection of the supply authority's fuse",
      "B": "Connection of single pole devices in line conductors only",
      "C": "Presence of fire barriers",
      "D": "Routing of cables in safe zones"
    },
    "answer": "A",
    "explanation": "During visual inspection, the electrician is responsible for checking the installation from the consumer’s side of the supply. The supply authority’s fuse and its internal connections are under the control of the Distribution Network Operator (DNO) and must not be inspected, opened, or interfered with by the electrician. Therefore, checking the correct connection of the DNO’s fuse is not part of the visual inspection requirements in BS 7671."
  },
  {
    "prompt": "End-to-end resistance checks would be carried out on a:",
    "options": {
      "A": "Fused connection unit",
      "B": "Radial circuit",
      "C": "Lighting circuit",
      "D": "Ring final circuit"
    },
    "answer": "D",
    "explanation": "End-to-end resistance tests are specific to ring final circuits because they have two parallel paths for the line, neutral, and CPC conductors. Measuring the resistance of each conductor around the full ring confirms continuity, correct conductor size, and that the circuit is genuinely a ring and not broken. These readings are essential for calculating expected R1+R2 values and ensuring safe disconnection times."
  },
  {
    "prompt": "The purpose of the test button of a residual current device is to check the:",
    "options": {
      "A": "Continuity of the earthing conductor",
      "B": "Earth electrode resistance",
      "C": "Earth fault loop impedance",
      "D": "Mechanical operation of the rcd"
    },
    "answer": "D",
    "explanation": "Pressing the test button on an RCD creates a small simulated earth fault by diverting current through an internal test resistor. This checks that the device’s mechanical tripping mechanism operates correctly. It does not test the actual fault-path impedance or true disconnection time, but it confirms that the RCD can physically trip when required."
  },
  {
    "prompt": "Given the following numbered tests, select the sequence in which these tests should be conducted for a new installation:- 1. functional 2. insulation resistance 3. polarity 4. continuity of final ring conductors 5. continuity of protective conductors:",
    "options": {
      "A": "5,4,2,3,1",
      "B": "2,3,4,5,1",
      "C": "1,3,4,5,2",
      "D": "4,5,3,2,1"
    },
    "answer": "A",
    "explanation": "The testing sequence for a new installation must follow the safe order set out in BS 7671 and GN3. Continuity tests come first (CPC continuity, then ring continuity) because they ensure all conductors are complete and safely connected before any insulation tests are applied. Next comes insulation resistance, followed by polarity checks, and finally functional testing once it is proven safe to energise the installation."
  },
  {
    "prompt": "The maximum disconnection time allowed for a TN system, not exceeding 32A, with a nominal voltage of 230V a.c. to earth is:",
    "options": {
      "A": "0.4 seconds",
      "B": "5 seconds",
      "C": "0.2 seconds",
      "D": "1 second"
    },
    "answer": "A",
    "explanation": "For TN systems supplying final circuits up to and including 32A, BS 7671 requires a maximum disconnection time of 0.4 seconds under fault conditions. This rapid disconnection reduces the duration of touch voltage and significantly lowers the risk of electric shock. The limit applies specifically to circuits directly supplying equipment, ensuring a high level of safety in everyday use."
  },
  {
    "prompt": "An earth fault loop impedance test Zs performed on a ring circuit would record:",
    "options": {
      "A": "The resistance of the protective conductor and the line conductor",
      "B": "The resistance of the line conductor, the resistance of the cpc and the external loop",
      "C": "The resistance of the protective conductor",
      "D": "The external loop impedance"
    },
    "answer": "B",
    "explanation": "A Zs test measures the total earth fault loop impedance of a circuit, which includes the resistance of the line conductor out to the load, the CPC returning from the load, and the external earth path (Ze) provided by the supply. All three parts form the complete loop that fault current travels through. This total Zs value is used to confirm that the protective device will disconnect quickly enough under fault conditions."
  },
  {
    "prompt": "A radial socket outlet is supplied by a 2.5mm² / 1.5mm² cable that is 20m long. Given that the Ze of the installation is 0.43Ω and the resistivity of the cable is 7.41 mΩ/m / 12.1 mΩ/m at 20 deg C, what is the calculated Zs taking account of operating temperature:",
    "options": {
      "A": "0.8283 Ω",
      "B": "0.3932 Ω",
      "C": "1.2 Ω",
      "D": "0.8982 Ω"
    },
    "answer": "D",
    "explanation": "First calculate the line and CPC resistances at 20°C: R₁ = 7.41 mΩ/m × 20 m = 0.148 Ω, R₂ = 12.1 mΩ/m × 20 m = 0.242 Ω, so R₁ + R₂ = 0.390 Ω at 20°C. Apply a temperature correction factor (typically 1.2 for 70°C) giving 0.390 × 1.2 ≈ 0.468 Ω, then add Ze: 0.43 + 0.468 ≈ 0.898 Ω, usually rounded to 0.9 Ω as the calculated Zs."
  },
  {
    "prompt": "During an external loop impedance test, the main earthing conductor should be:",
    "options": {
      "A": "Disconnected",
      "B": "Insulated",
      "C": "Short circuited",
      "D": "Connected"
    },
    "answer": "A",
    "explanation": "When carrying out an external loop impedance test (Ze), the main earthing conductor must be disconnected from the consumer unit so the reading is taken without any parallel earth paths. This ensures the result represents the true impedance of the supply’s external earth loop only (DNO transformer → earth → line). Leaving the earthing conductor connected would include parallel paths such as bonding and CPCs, giving an artificially low and incorrect Ze value."
  },
  {
    "prompt": "The prospective short-circuit current between line and neutral is measured at 850 A. The maximum balanced prospective short-circuit current level between lines on a three phase system, as a rule of thumb, can be assumed to be approximately:",
    "options": {
      "A": "1.5 kA",
      "B": "0.85 kA",
      "C": "17 kA",
      "D": "8.5 kA"
    },
    "answer": "A",
    "explanation": "As a rule of thumb, the prospective short-circuit current (PSCC) between two line conductors on a three-phase system is roughly 1.75 times the line-neutral fault current. This is because the line-line voltage on a three-phase system is higher (400 V) than the line-neutral voltage (230 V). Therefore, if the measured line-neutral PSCC is 850 A, the estimated line-line PSCC is about 850 × 1.75 ≈ 1487 A, commonly rounded to 1.5 kA for calculation purposes."
  },
  {
    "prompt": "During earth electrode resistance testing the current test spike is placed 30 metres from the earth electrode under test. The potential test spike is placed midway between the earth electrode and the current spike. The potential spike would then normally be moved a distance each way of approximately:",
    "options": {
      "A": "1 metre",
      "B": "3 metres",
      "C": "15 metres",
      "D": "6 metres"
    },
    "answer": "B",
    "explanation": "In the three-point (fall-of-potential) method, once the potential spike is placed midway between the electrode and the current spike, it is moved small distances each way—typically about 10% of the electrode-to-current-spike spacing. With a 30-metre spacing, this equals 3 metres. Moving it this small amount checks that the reading remains stable, confirming that the test spikes are positioned correctly outside the influence zones of the electrode."
  },
  {
    "prompt": "Which of the following tests would not normally be required during initial verification of an electrical installation:",
    "options": {
      "A": "RCD testing",
      "B": "Verification of voltage drop",
      "C": "Continuity of main bonding conductors",
      "D": "Prospective fault current"
    },
    "answer": "B",
    "explanation": "Voltage drop is not an initial verification test listed in Part 6 of BS 7671. It is a design-stage calculation, not a commissioning test. Initial verification focuses on safety-critical tests such as continuity, insulation resistance, polarity, and Zs — not design compliance checks like voltage drop."
  },
  {
    "prompt": "What is the maximum value of voltage drop for power systems on a 400V supply, supplied directly from a public low voltage system:",
    "options": {
      "A": "20 V",
      "B": "12 V",
      "C": "5.9 V",
      "D": "11.5 V"
    },
    "answer": "A",
    "explanation": "BS 7671 allows up to 5% voltage drop for power circuits on a public supply. Five percent of 400 V is 20 V, so this is the maximum permitted drop to ensure equipment still operates correctly."
  },
  {
    "prompt": "Instrument calibration certificates are normally valid for:",
    "options": {
      "A": "3 months",
      "B": "6 months",
      "C": "2 years",
      "D": "1 year"
    },
    "answer": "D",
    "explanation": "Calibration certificates typically last one year to ensure test instruments remain accurate and reliable. After 12 months, recalibration is required to maintain compliance with BS 7671 and GN3."
  },
  {
    "prompt": "Control gear and interlocks should be operated when carrying out:",
    "options": {
      "A": "Continuity testing",
      "B": "Isolation testing",
      "C": "Functional testing",
      "D": "Polarity testing"
    },
    "answer": "C",
    "explanation": "Control gear and interlocks are operational components, so they are only checked during functional testing to confirm they work correctly and safely."
  },
  {
    "prompt": "Four circuits have insulation resistances of 20 MΩ, 25 MΩ, 40 MΩ and 50 M.Ω. When tested together (insulation lump test) what would be the expected reading:",
    "options": {
      "A": "7.4 MΩ",
      "B": "0.135 MΩ",
      "C": "13.5 MΩ",
      "D": "6.5 MΩ"
    },
    "answer": "A",
    "explanation": "Convert each to reciprocal: 1/20 = 0.05 1/25 = 0.04 1/40 = 0.025 1/50 = 0.02 Add them: 0.05 + 0.04 + 0.025 + 0.02 = 0.135 Take reciprocal: 1 / 0.135 = 7.41 M"
  },
  {
    "prompt": "Which of the following should accompany the inspection and test certificate:",
    "options": {
      "A": "Two copies of test results",
      "B": "Copies of minor works certificates",
      "C": "Copies of the inspection and test schedules",
      "D": "Invoices for any remedial work carried out"
    },
    "answer": "C",
    "explanation": "An Electrical Installation Certificate must be accompanied by both: A Schedule of Inspections (to show all visual checks carried out) A Schedule of Test Results (to show all measured values) These documents form the complete verification package required by BS 7671."
  },
  {
    "prompt": "When completing an Inspection Schedule for new installations only, the options for filling in the boxes are:",
    "options": {
      "A": "✓ : X : N/A",
      "B": "✓ : X : LIM",
      "C": "✓ : X : N/A : LIM",
      "D": "✓ : N/A"
    },
    "answer": "D",
    "explanation": "For new installations, every item on the inspection schedule must be fully inspected and verified, meaning no limitations are allowed. If the inspection item is present and complies, you mark it with a ✔. If the item does not apply to that particular installation, you mark it as N/A. These are the only permissible entries for new installations under BS 7671."
  },
  {
    "prompt": "If the person ordering installation work is not the user then it is recommended that copies of the electrical installation certificate must be given to:",
    "options": {
      "A": "The person ordering the work and the user",
      "B": "The user and the local building authority",
      "C": "The person ordering the work and the local building authority",
      "D": "The person ordering the work"
    },
    "answer": "A",
    "explanation": "When the person ordering the installation work is different from the end user, BS 7671 recommends that both parties receive a copy of the Electrical Installation Certificate. This ensures that the user has proof of compliance and essential safety documentation for future maintenance. It also provides the person who commissioned the work with formal confirmation that the installation meets required standards."
  },
  {
    "prompt": "The type of certificate issued after installing an additional socket outlet within an existing installation would be a:",
    "options": {
      "A": "Installation Certificate",
      "B": "Verification and Test Certificate",
      "C": "Periodic Test Certificate",
      "D": "Minor Works Certificate"
    },
    "answer": "D",
    "explanation": "Installing an additional socket outlet is considered a modification to an existing circuit rather than the creation of a new one. For this type of small alteration, BS 7671 requires a Minor Works Certificate, which confirms that the addition is safe and complies with current regulations. An Electrical Installation Certificate is only needed when a new circuit is installed, not when adapting an existing one."
  }
];

export const electricianTraining2391Mock8Questions: SourceQuestion[] = [
  {
    "prompt": "The neutral of the supply cable is used as part of the earth return path in which of the following systems:",
    "options": {
      "A": "TN-S",
      "B": "TN-C",
      "C": "TT",
      "D": "TN-C-S"
    },
    "answer": "D",
    "explanation": "In a TN-C-S system, the supply uses a combined protective–neutral (PEN) conductor for part of its route. This means the neutral conductor also performs the function of the earthing return path until it is separated into neutral and earth within the installation. This characteristic does not occur in TN-S or TT systems, making TN-C-S the only correct option."
  },
  {
    "prompt": "The Electricity at Work Regulations concern:",
    "options": {
      "A": "All aspects of electrical systems",
      "B": "High voltage systems only",
      "C": "Special locations only",
      "D": "Systems up to 1000 volts"
    },
    "answer": "A",
    "explanation": "The Electricity at Work Regulations (EAWR) apply universally to all electrical equipment, systems, and work environments regardless of voltage or location. They govern duties related to design, construction, operation and maintenance to ensure safety. This wide scope means they are not restricted to high voltage, special areas or voltages below 1000 V."
  },
  {
    "prompt": "On completion of periodic testing an old domestic installation, the insulation resistance is found to be below the requirements of BS 7671. The immediate action to be taken is to:",
    "options": {
      "A": "Notify the person ordering the work",
      "B": "Notify the local supply authority",
      "C": "Protect the circuits with smaller sizes of fuses",
      "D": "Put a warning notice on the supply intake position"
    },
    "answer": "A",
    "explanation": "If insulation resistance is below acceptable levels, you must report the result to the client or the person responsible for the installation. Only they can authorise further investigation, repairs or remedial work. You should not take unilateral action, nor should you contact the supply authority unless instructed."
  },
  {
    "prompt": "On a new installation, which one of the following should be made available to the person conducting the inspection and test:",
    "options": {
      "A": "Relevant charts, tables and diagrams",
      "B": "Schedule of test results",
      "C": "Details of the customer",
      "D": "Previous test results"
    },
    "answer": "A",
    "explanation": "Inspection and testing must be compared against the design documentation to ensure the installation meets BS 7671 requirements. Wiring diagrams, schedules and layout drawings allow the inspector to verify that the installation has been constructed correctly. Without these documents, accurate verification would not be possible."
  },
  {
    "prompt": "Regional electricity companies quote a maximum likely value of external loop impedance (outside the consumer's installation) for a TN-C-S system as:",
    "options": {
      "A": "200 Ω",
      "B": "0.35 Ω",
      "C": "0.8 Ω",
      "D": "21 Ω"
    },
    "answer": "B",
    "explanation": "Supply authorities typically give a maximum Ze value of 0.35 Ω for TN-C-S domestic supplies. This ensures that protective devices will disconnect quickly enough in a fault situation. The value is widely accepted and used throughout the industry as the standard reference figure."
  },
  {
    "prompt": "When using a centre-contact (ES) lampholder, the outer contact must be connected to the:",
    "options": {
      "A": "Switch wire",
      "B": "Circuit protective conductor",
      "C": "Neutral conductor",
      "D": "Phase conductor"
    },
    "answer": "C",
    "explanation": "The outer threaded shell of an Edison Screw lampholder is the part most likely to be touched during lamp replacement. Connecting it to neutral ensures that the exposed metal is not at line potential, reducing the risk of electric shock. This correct polarity connection is a long-established safety requirement."
  },
  {
    "prompt": "Given the following numbered tests, select the sequence in which these tests should be conducted for a new installation:- 1. functional 2. insulation resistance 3. polarity 4. continuity of final ring conductors 5. continuity of protective conductors:",
    "options": {
      "A": "2,3,4,5,1",
      "B": "1,3,4,5,2",
      "C": "5,4,2,3,1",
      "D": "4,5,3,2,1"
    },
    "answer": "C",
    "explanation": "Testing begins with continuity checks, ensuring all conductors and protective paths are intact. Insulation resistance comes next because it must be verified before circuits are energised. After this, polarity and functional tests are performed, each relying on the previous results, which is why the sequence is fixed."
  },
  {
    "prompt": "Statement 1 - A polarity test is carried out with a loop tester Statement 2 - A polarity test can confirm correct connection of conductors within an Edison Screw lamp:",
    "options": {
      "A": "Both statements are true",
      "B": "Both statements are false",
      "C": "Statement 1 is true, statement 2 is false",
      "D": "Statement 1 is false, statement 2 is true"
    },
    "answer": "D",
    "explanation": "A loop tester is not normally used to check polarity because polarity testing relies on continuity, not loop impedance. However, polarity tests do confirm correct ES lampholder connections, ensuring the centre contact is line and the outer shell is neutral. Therefore, the first statement is wrong while the second is correct."
  },
  {
    "prompt": "Which test requires you to measure the resistance from the earth at the Consumer Unit to the furthest earth connection in the circuit:",
    "options": {
      "A": "Polarity",
      "B": "Continuity",
      "C": "Magnetic Field Test",
      "D": "Insulation Resistance"
    },
    "answer": "B",
    "explanation": "Continuity testing verifies that the circuit protective conductor (CPC) is unbroken throughout the entire circuit. By measuring from the consumer unit to the furthest point, you ensure the earth fault path is complete and able to operate protective devices correctly. This is a fundamental safety check before energising a circuit."
  },
  {
    "prompt": "If an insulation resistance lump test at the main switch fuse of a very large installation gave a value of 0.45MΩ the electrician should:",
    "options": {
      "A": "Reverse the meters test leads and re-test",
      "B": "Test each circuit separately",
      "C": "Report the entire installation as being unsatisfactory",
      "D": "Report the entire installation as being satisfactory"
    },
    "answer": "B",
    "explanation": "A combined insulation resistance test on a large installation may mask the true condition of individual circuits. A low overall reading indicates that one or more circuits may have deteriorated insulation. Testing circuits individually isolates the fault and allows accurate diagnosis and corrective action."
  },
  {
    "prompt": "It is recommended that low-resistance ohmmeters used for continuity measurements should have a no-load voltage and a short-circuit current of:",
    "options": {
      "A": "Voltage between 4V and 20V; short-circuit current of 1 mA",
      "B": "Voltage between 0V and 20V; short-circuit current of 1 mA",
      "C": "Voltage between 4V and 24V; short-circuit current of 200 mA",
      "D": "Voltage between 0V and 24V; short-circuit current of 100 mA"
    },
    "answer": "C",
    "explanation": "Continuity testers must use a low but appropriate test voltage and a sufficiently high test current to measure small resistances reliably. A current of around 200 mA ensures penetration of oxide films or poor connections that may otherwise give misleading results. This specification is recommended for compliance with BS 7671 and GN3."
  },
  {
    "prompt": "If each of the three circuits had been tested individually and gave readings of 80 MΩ, 60 MΩ and 30 MΩ respectively, what would be the expected overall insulation resistance:",
    "options": {
      "A": "16 MΩ",
      "B": "0.0625 MΩ",
      "C": "15 MΩ",
      "D": "160 MΩ"
    },
    "answer": "A",
    "explanation": "When multiple circuits are tested together, their insulation resistances form parallel paths, not series. Therefore, the combined insulation resistance is always lower than the lowest individual value."
  },
  {
    "prompt": "Which of the following is the most suitable instrument to conduct a polarity test:",
    "options": {
      "A": "A bell set",
      "B": "A low resistance ohmmeter",
      "C": "An insulation resistance tester",
      "D": "A high resistance ohmmeter"
    },
    "answer": "B",
    "explanation": "low-resistance ohmmeter provides the small test current needed to prove the line conductor is correctly connected. It is also safe and appropriate for dead-testing."
  },
  {
    "prompt": "The most convenient method of determining the value of the prospective short circuit current at the origin of an existing installation would be by:",
    "options": {
      "A": "Calculation",
      "B": "Inspection",
      "C": "Functional testing",
      "D": "Direct measurement"
    },
    "answer": "D",
    "explanation": "Direct measurement using an approved PSC/loop tester is the quickest and most accurate method because it measures the actual fault current available from the supply under real conditions. Other methods, such as calculation, rely on assumed or outdated values, whereas direct measurement provides an immediate, reliable reading at the origin."
  },
  {
    "prompt": "When performing an insulation resistance test on a two way lighting circuit, you should:",
    "options": {
      "A": "Ensure that both switches are in the on position",
      "B": "Ensure that both switches are in the off position",
      "C": "Operate the switches during the test",
      "D": "Bridge out the switches"
    },
    "answer": "C",
    "explanation": "A two-way lighting circuit contains multiple switch positions that change the path of the live conductors. Operating the switches ensures all possible live–switch–lamp paths are tested, preventing hidden faults from being missed. This guarantees the insulation resistance value represents the entire circuit, not just one switching position."
  },
  {
    "prompt": "The measured value of loop impedance for a circuit is 0.83Ω. If the temperature at the time of the test was 20°C and the cable is 70°C (factor 1.2) what is the corrected value. Ze = 0.4Ω:",
    "options": {
      "A": "0.996 Ω",
      "B": "0.43 Ω",
      "C": "0.916 Ω",
      "D": "0.86 Ω"
    },
    "answer": "C",
    "explanation": "Start with the measured Zs at 20°C: Zs(measured) = 0.83 Ω Ze = 0.40 Ω So the resistance of the circuit conductors (R1+R2) at 20°C is: R1+R2=Zs−Ze=0.83−0.40=0.43 Ω Now correct R1+R2 to operating temperature (70°C) using the factor 1.2: (R1+R2)70∘C=0.43×1.2=0.516 Ω Add Ze back on (Ze is taken as unchanged by this correction): Zscorrected=Ze+(R1+R2)70∘C=0.40+0.516=0.916 Ω"
  },
  {
    "prompt": "When measuring the resistance of 100m of 2.5mm² conductor the most suitable range for the instrument would be:",
    "options": {
      "A": "10 to 20Ω",
      "B": "20 to 50Ω",
      "C": "0 to 2Ω",
      "D": "2 to 10Ω"
    },
    "answer": "C",
    "explanation": "2.5 mm² copper conductor has a resistance of roughly 7.41 mΩ per metre at 20 °C. For 100 m, the expected resistance is around 0.74 Ω, well within a 0–2 Ω range. Using this range ensures good resolution and accurate measurement without exceeding the scale."
  },
  {
    "prompt": "A polarity test is conducted to verify that:",
    "options": {
      "A": "Every protective and single pole device is connected to the line conductor only",
      "B": "The circuit protection will operate within limits",
      "C": "The resistance is low enough to operate the protective device within the specified time",
      "D": "There is no breakdown of the conductor's insulation"
    },
    "answer": "A",
    "explanation": "A polarity test ensures that switches, fuses, and MCBs are all placed in the line conductor, not the neutral. This is essential because disconnecting the neutral alone would still leave the circuit live, creating a shock hazard. Correct polarity guarantees that protective devices will safely interrupt the live supply under fault or isolation conditions."
  },
  {
    "prompt": "It is important to test a new installation in the correct sequence because:",
    "options": {
      "A": "It is easy to remember",
      "B": "The sequence is stated in GN3",
      "C": "Each test relies on the previous to be correct",
      "D": "It is more convenient"
    },
    "answer": "C",
    "explanation": "Testing must follow the BS 7671 sequence because early tests—such as continuity and insulation resistance—confirm the installation is safe before applying live tests. Each result ensures the next test can be carried out safely and meaningfully. If the sequence is not followed, you risk unsafe conditions or misleading results."
  },
  {
    "prompt": "A 'tong tester' is used to measure:",
    "options": {
      "A": "Frequency",
      "B": "Voltage",
      "C": "Current",
      "D": "Resistance"
    },
    "answer": "C",
    "explanation": "A tong tester (also called a clamp meter) measures current flow without disconnecting conductors. It works by detecting the magnetic field produced around a live conductor. Because it measures current safely and quickly, it is widely used for checking circuit loading."
  },
  {
    "prompt": "If the readings for (r1 + r2) recorded while testing the continuity of ring final circuit conductors is 0.9 Ω each, what will be the value of (R1 + R2):",
    "options": {
      "A": "1.8 Ω",
      "B": "0.225 Ω",
      "C": "0.9 Ω",
      "D": "0.45 Ω"
    },
    "answer": "D",
    "explanation": "In a ring final circuit, the end-to-end readings (r1 and r2) are the resistances of the two full loops. When the ring is cross-connected and measured at a socket (Stage 2 test), the measured value is half the sum of each loop because the current travels along two parallel paths."
  },
  {
    "prompt": "Table I1 in the On Site Guide gives a value of 19.51 (mΩ/m) for a line conductor of 2.5mm² and a protective conductor of 1.5mm². What would be the resistance of a circuit 25m in length when wired using these conductors:",
    "options": {
      "A": "780 Ω",
      "B": "0.487 Ω",
      "C": "487 Ω",
      "D": "4.87 Ω"
    },
    "answer": "B",
    "explanation": "The resistance per metre for the combined (R1 + R2) is 19.51 mΩ/m. For a 25 m circuit, multiply: 19.51 mΩ/m × 25 m = 487.75 mΩ, which is 0.487 Ω. This gives the total loop resistance of the line and CPC over the circuit length."
  },
  {
    "prompt": "An insulation resistance tester must be capable of delivering a test current of not less than:",
    "options": {
      "A": "0.5 mA",
      "B": "20 mA",
      "C": "2.0 mA",
      "D": "1.0 mA"
    },
    "answer": "D",
    "explanation": "An insulation resistance tester must supply enough current to properly stress the insulation during the test. BS EN 61557 specifies that the tester must deliver at least 1 mA at its rated test voltage to ensure the reading is valid. Anything less may give unreliable or falsely high insulation resistance values."
  },
  {
    "prompt": "The test current applied to a 30mA RCD to check for a 40ms maximum disconnection time is:",
    "options": {
      "A": "15mA",
      "B": "30mA",
      "C": "150mA",
      "D": "300mA"
    },
    "answer": "C",
    "explanation": "A 40 ms disconnection time is tested at 5 × IΔn. For a 30 mA RCD: 5 × 30 mA = 150 mA. This verifies the RCD meets the requirements for additional protection."
  },
  {
    "prompt": "The maximum tabulated value of Zs for a circuit is 2.82 Ω. Using the rule of thumb method, calculate the adjusted measured value:",
    "options": {
      "A": "5.2 Ω",
      "B": "2.256 Ω",
      "C": "4.4 Ω",
      "D": "3.525 Ω"
    },
    "answer": "B",
    "explanation": "The rule-of-thumb adjustment multiplies the tabulated Zs by 0.8 to account for conductor heating in operation. So: 2.82 Ω × 0.8 = 2.256 Ω, which gives the maximum allowed measured Zs value at ambient temperature."
  },
  {
    "prompt": "A document for recording information from test equipment would be called:",
    "options": {
      "A": "Schedule of test results",
      "B": "Inspection schedule",
      "C": "Schedule certificate",
      "D": "Schedule of inspection"
    },
    "answer": "A",
    "explanation": "This document is used to formally record all measured values obtained during inspection and testing. It ensures results are traceable, verifiable, and compliant with BS 7671 documentation requirements."
  },
  {
    "prompt": "What is the calculated prospective short circuit current at the origin of a TN-C-S 230V installation. Ze = 0.22 Ω:",
    "options": {
      "A": "9.5 kA",
      "B": "1.045 kA",
      "C": "50 kA",
      "D": "0.88 kA"
    },
    "answer": "B",
    "explanation": "The prospective short-circuit current (PSCC) is calculated using I = V / Ze. Using 230 V: I = 230 ÷ 0.22 = 1045 A, which is 1.045 kA. This value represents the maximum fault current available at the origin and confirms whether the protective devices have adequate breaking capacity."
  },
  {
    "prompt": "Records of all checks, inspections and tests to an installation should be kept:",
    "options": {
      "A": "For ten years",
      "B": "For one year",
      "C": "For the working life of the installation",
      "D": "For three years"
    },
    "answer": "C",
    "explanation": "Records must be kept for the entire life of the installation so future inspectors can compare results, identify deterioration, and ensure continued safety. BS 7671 and EAWR require maintaining documentation to support ongoing compliance and safe operation."
  },
  {
    "prompt": "After the installation of a new shower circuit the customer should be provided with:",
    "options": {
      "A": "A minor works certificate",
      "B": "A periodic inspection report",
      "C": "A building control notification",
      "D": "An electrical installation certificate"
    },
    "answer": "D",
    "explanation": "A new shower circuit counts as new work, not a minor alteration. BS 7671 requires that any new circuit added to an installation must be certified using an Electrical Installation Certificate (EIC). The EIC confirms the design, construction and testing of the new circuit and provides the customer with formal documentation of compliance and safety."
  },
  {
    "prompt": "When completing an installation certificate under 'Number and Type of Live Conductors', the 3-phase, 4-wire box should be ticked if the supply is:",
    "options": {
      "A": "3-phase and neutral",
      "B": "3-phase, and earth",
      "C": "2-phase, neutral and earth",
      "D": "Four single phase supplies"
    },
    "answer": "A",
    "explanation": "A 3-phase supply with a neutral conductor is classed as three-phase, four-wire because it includes L1, L2, L3 + N, which totals four live conductors. This is the standard configuration for most UK three-phase installations requiring both line and neutral for loads."
  }
];

export const electricianTraining2391MockQuestions = electricianTraining2391Mock1Questions;

export const electricianTraining2391MockVariants: SourceQuestion[][] = [
  electricianTraining2391Mock1Questions,
  electricianTraining2391Mock2Questions,
  electricianTraining2391Mock3Questions,
  electricianTraining2391Mock4Questions,
  electricianTraining2391Mock5Questions,
  electricianTraining2391Mock6Questions,
  electricianTraining2391Mock7Questions,
  electricianTraining2391Mock8Questions
];

export const electricianTrainingPartPSourceSection = makeDuplicatedSourceSection(
  "section-6-electrician-training-part-p-mock",
  "Section 6 - ElectricianTraining Part P Mock Exam",
  electricianTrainingPartPMockQuestions
);

export const electricianTraining18thEditionSourceSection = makeDuplicatedSourceSection(
  "section-7-electrician-training-18th-mock",
  "Section 7 - ElectricianTraining 18th Edition Mock Exam",
  electricianTraining18thEditionMockQuestions
);

export const electricianTrainingPatSourceSection = makeDuplicatedSourceSection(
  "section-6-electrician-training-pat-mock",
  "Section 6 - ElectricianTraining PAT Mock Exam",
  electricianTrainingPatMockQuestions
);

export const electricianTrainingAm2SourceSection = makeDuplicatedSourceSection(
  "section-8-electrician-training-am2-mock",
  "Section 8 - ElectricianTraining AM2 Mock Exam",
  electricianTrainingAm2MockQuestions
);

export const electricianTraining2391SourceSection = makeVariantSourceSection(
  "section-8-2391-mock",
  "ElectricianTraining 2391 Mock Exams",
  electricianTraining2391MockVariants
);
