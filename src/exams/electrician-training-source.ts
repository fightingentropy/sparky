import type { ExamQuestion, ExamSection } from "./types";

type SourceQuestion = Omit<ExamQuestion, "number">;

const SOURCE_VARIANT_COUNT = 5;

// Licensed ElectricianTraining quiz imports:
// Part P 29753, 18th Edition 29704, PAT 29741, AM2 29728, 2391 29745.

function numberQuestions(questions: SourceQuestion[]): ExamQuestion[] {
  return questions.map((question, index) => ({ number: index + 1, ...question }));
}

function makeSourceSection(id: string, title: string, questions: SourceQuestion[]): ExamSection {
  const numbered = numberQuestions(questions);
  return {
    id,
    title,
    variants: Array.from({ length: SOURCE_VARIANT_COUNT }, (_, variantIndex) => ({
      id: `v${variantIndex + 1}`,
      questions: numbered.map((question) => ({ ...question, options: { ...question.options } }))
    }))
  };
}

export const electricianTrainingPartPMockQuestions: SourceQuestion[] = [
  {
    "prompt": "Part 'A' of the building, states that horizontal chases should not be deeper than:",
    "options": {
      "A": "One sixth the wall thickness",
      "B": "One quarter the wall thickness",
      "C": "One third the wall thickness",
      "D": "One eighth the wall thickness"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "A new build family house has just been completed, and it fully complies with the relevant building regulations. It has bedrooms and 2 reception rooms, how many low energy pendants are fitted?",
    "options": {
      "A": "None",
      "B": "4",
      "C": "3",
      "D": "2"
    },
    "answer": "C",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Part 'M' of the building regulations, states the required height of a central heating roomstat would be:",
    "options": {
      "A": "1100mm",
      "B": "800mm",
      "C": "1250mm",
      "D": "1400mm"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Part 'E' of the building regulations, does NOT cover:",
    "options": {
      "A": "An Internal wall which separates a bedroom from a family bathroom",
      "B": "An Internal wall which separates an en-suite bathroom from the associated bedroom",
      "C": "An Internal wall which separates a room containing a WC from a hallway",
      "D": "An internal wall which separates a integral garage from a kitchen"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Part 'A' of the building regulations, Does NOT cover:",
    "options": {
      "A": "The roof covering",
      "B": "The size of the floor joist",
      "C": "The type of windows",
      "D": "The foundations"
    },
    "answer": "C",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Part 'P' of the building regulations, Came into force on 1st January, in which year?",
    "options": {
      "A": "2004",
      "B": "2005",
      "C": "2006",
      "D": "2003"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "How many alphabetical Parts are there to the building regulations?",
    "options": {
      "A": "14",
      "B": "16",
      "C": "10",
      "D": "12"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "What is the maximum permitted Ze measurement of a Domestic premises with a TN-S earthing system Installed:",
    "options": {
      "A": "0.03Ω",
      "B": "100Ω",
      "C": "35Ω",
      "D": "0.80Ω"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Which of the alphabetical parts of the building regulations would apply to the domestic electrical installer:",
    "options": {
      "A": "Part H",
      "B": "Part P",
      "C": "Part K",
      "D": "Part J"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "The building regulations. States that ALL new and refurbished single family dwellings of not more than two habitable floors have:",
    "options": {
      "A": "Battery back up Smoke alarms",
      "B": "Smoke alarms permanently wired from a local lightning circuit",
      "C": "One Smoke alarm",
      "D": "A Smoke alarm no more than 2m from all bedroom doors"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "A passive stack would come under which Part of the building regulations:",
    "options": {
      "A": "Part H",
      "B": "Part C",
      "C": "Part F",
      "D": "Part A"
    },
    "answer": "C",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "How many parts to schedule two of the building regulations:",
    "options": {
      "A": "10",
      "B": "6",
      "C": "7",
      "D": "5"
    },
    "answer": "C",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Part 'A' of the building regulations, states that Vertical chases should not be deeper than:",
    "options": {
      "A": "One eighth the wall thickness",
      "B": "One quarter the wall thickness",
      "C": "One sixth the wall thickness",
      "D": "One third the wall thickness"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Which of the following would need be notified to the building control:",
    "options": {
      "A": "Upgrading the main Equipotential bonding conductors",
      "B": "Replacing a damaged socket outlet in a kitchen",
      "C": "Installing new central heating control wiring",
      "D": "Installing wall lights to a lounge"
    },
    "answer": "C",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Which of the following need NOT be notified to building control:",
    "options": {
      "A": "Solar powered garden lighting",
      "B": "An Extension to the LV garden lighting",
      "C": "MicroCHP Generator Supplies",
      "D": "Solar Photovoltaic (PV) power supplies"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Which of the following is NOT a special location:",
    "options": {
      "A": "A hot air sauna",
      "B": "A wet room",
      "C": "A cloakroom",
      "D": "A paddling pool"
    },
    "answer": "C",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Which of the following is a special Installation:",
    "options": {
      "A": "Patio heaters",
      "B": "Lighting within a detached garage",
      "C": "Electric economy night storage heaters",
      "D": "Electric underfloor heating in a conservatory"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Part 'M' of the building regulations does NOT apply to:",
    "options": {
      "A": "Door Bell Push switches",
      "B": "Cooker switch",
      "C": "2amp lighting sockets",
      "D": "Telephone Sockets"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "When would you NOT need to inform building control after installing new 12V recessed lighting to a kitchen:",
    "options": {
      "A": "When you have installed suitable fireproof hoods to the lights",
      "B": "When they satisfy parts B & C of the building regulations",
      "C": "When the work was carried out in a disabled adapted house or flat",
      "D": "When the new lights are pre-assembled CE marked units"
    },
    "answer": "D",
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
      "B": "Public premises",
      "C": "Aircraft",
      "D": "Ships"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Protection against direct contact may be provided by",
    "options": {
      "A": "Fault protection",
      "B": "Basic protection",
      "C": "Protection against thermal effects",
      "D": "Overcurrent protection"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "The selection of protective equipment would NOT include consideration of the effects of",
    "options": {
      "A": "Earth fault current",
      "B": "Undervoltage",
      "C": "Equipment costs",
      "D": "Overcurrent"
    },
    "answer": "C",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "The interval between initial verification and the first periodic inspection of an installation is determined by",
    "options": {
      "A": "The designer",
      "B": "The Local Authority Building Control",
      "C": "The installer",
      "D": "The client"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "A cable support consisting of a series of transverse supporting elements rigidly fixed to main longitudinal supporting members is",
    "options": {
      "A": "Cable trunking",
      "B": "Cable ducting",
      "C": "Cable ladder",
      "D": "Cable tray"
    },
    "answer": "C",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "The magnitude of current to be carried by a circuit in normal service is",
    "options": {
      "A": "Overload current",
      "B": "Design current",
      "C": "Protective conductor current",
      "D": "Short circuit current"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Protection against electric shock under single fault conditions is",
    "options": {
      "A": "Protective separation",
      "B": "Emergency stopping",
      "C": "Fault protection",
      "D": "Basic protection"
    },
    "answer": "C",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "When assessing the maximum demand of an installation account may be taken of",
    "options": {
      "A": "Type of earthing arrangement",
      "B": "Arrangement of live conductors",
      "C": "Diversity",
      "D": "Discrimination"
    },
    "answer": "C",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Every installation shall be divided into circuits in order to",
    "options": {
      "A": "Mitigate the effects of EMI",
      "B": "Reduce electricity costs",
      "C": "Prevent insulation faults",
      "D": "To meet the requirements of the NICEIC"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Electrical equipment in, for example, kiosks or shops within shops need to be assessed with regards to",
    "options": {
      "A": "Continuity of service",
      "B": "Maintainability",
      "C": "Safety services",
      "D": "Compatibility"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Which of the following is NOT recognised as a source for a safety service.",
    "options": {
      "A": "Primary cells",
      "B": "Storage batteries",
      "C": "The normal DNO supply",
      "D": "Independent generator sets"
    },
    "answer": "C",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "An assessment for continuity of service must include",
    "options": {
      "A": "Number of circuits",
      "B": "Details of the installer",
      "C": "Details of the supplier",
      "D": "Selection of cable type"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Automatic disconnection of supply provides protection against",
    "options": {
      "A": "Undervoltage",
      "B": "Electric shock",
      "C": "Thermal effects",
      "D": "Overload"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Basic insulation of live parts or barriers or enclosures provide",
    "options": {
      "A": "Fault protection",
      "B": "Thermal protection",
      "C": "Impact protection",
      "D": "Basic protection"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "A 20A final circuit fed by a 230 V a.c. TT system must disconnect, in the event of an earth fault, within a maximum time of",
    "options": {
      "A": "0.4 s",
      "B": "0.2 s",
      "C": "0.1 s",
      "D": "1 s"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "A 13A socket outlet does NOT need to be additionally protected by an RCD provided it is",
    "options": {
      "A": "Not for use outdoors",
      "B": "Subject to a documented risk assessment",
      "C": "Splashproof",
      "D": "Only to be used by ordinary persons"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "The maximum earth loop impedance for a distribution circuit protected by a 32A BS 88-3 fuse is",
    "options": {
      "A": "0.91 Ω",
      "B": "1.6 Ω",
      "C": "1.7 Ω",
      "D": "1.37 Ω"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "The maximum rating of an RCD required to protect a230 V TT installation where the earth fault loop impedance is 150 Ω is",
    "options": {
      "A": "100 mA",
      "B": "30 mA",
      "C": "500 mA",
      "D": "300 mA"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "The maximum disconnection time for circuits supplied by a reduced low voltage system is",
    "options": {
      "A": "5 s",
      "B": "0.2 s",
      "C": "1 s",
      "D": "0.4 s"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "A 16A BS EN 60898 Type B circuit breaker used to protect a three-phase reduced low voltage circuit is subject to a maximum earth fault loop impedance value of",
    "options": {
      "A": "0.65 Ω",
      "B": "0.38 Ω",
      "C": "0.75 Ω",
      "D": "0.33 Ω"
    },
    "answer": "C",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "For the protective measure of electrical separation, the voltage of a separated circuit must not exceed",
    "options": {
      "A": "500 V",
      "B": "400 V",
      "C": "230 V",
      "D": "1000 V"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Which of the following sources of supply would be suitable for SELV and PELV circuits?",
    "options": {
      "A": "Private generator at 110 V a.c",
      "B": "Public supply at 230 V a.c",
      "C": "A low voltage d.c. supply",
      "D": "A safety isolating transformer"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Which of the following formulae is used where there is doubt regarding the effectiveness of supplementary bonding?",
    "options": {
      "A": "R ≥ 50 V/Ia",
      "B": "R ≤ 50 V/In",
      "C": "R ≤ 50 V/Iz",
      "D": "R ≤ 50 V/Ia"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "In order to protect against burns, a non-metallic electrical part intended to be touched but not hand held should not attain a surface temperature in excess of",
    "options": {
      "A": "70 °C",
      "B": "80 °C",
      "C": "65 °C",
      "D": "90 °C"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "The disconnection time for a 16.0 mm² conductor having a 'k' factor of 115 and carrying a fault current of 13 kA is",
    "options": {
      "A": "0.0125 s",
      "B": "0.02 s",
      "C": "2.26 s",
      "D": "0.14 s"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "The minimum impulse withstand voltage for a 230 V electricity meter is",
    "options": {
      "A": "2.5 kV",
      "B": "6 kV",
      "C": "1.5 kV",
      "D": "4 kV"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "A conductor marked green-and-yellow throughout its length with additional blue markings at the termination is a",
    "options": {
      "A": "Line conductor",
      "B": "Circuit protective conductor",
      "C": "Neutral conductor",
      "D": "PEN conductor"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "The notice relating to an RCD requires the device to be operated via its test button",
    "options": {
      "A": "Annually",
      "B": "Half yearly",
      "C": "Monthly",
      "D": "Quarterly"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "One method of protecting a cable, that passes through a ceiling joist from damage, is to install it at a vertical distance from the top or bottom of the joist of at least",
    "options": {
      "A": "10 mm",
      "B": "25 mm",
      "C": "50 mm",
      "D": "30 mm"
    },
    "answer": "C",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "The derating factor for a cable surrounded by thermal insulation for 200 mm is",
    "options": {
      "A": "0.5",
      "B": "0.63",
      "C": "0.51",
      "D": "0.78"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Where underground telecommunication and power cables cross, the minimum clearance to be maintained between them is",
    "options": {
      "A": "100 mm",
      "B": "50 mm",
      "C": "0.5 m",
      "D": "200 mm"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "The magnetic circuit of an RCD shall enclose",
    "options": {
      "A": "All line conductors",
      "B": "All circuit conductors",
      "C": "All live conductors",
      "D": "PEN conductors"
    },
    "answer": "C",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Where an RCD is used for protection against fire, it shall have a maximum rating of",
    "options": {
      "A": "500 mA",
      "B": "100 mA",
      "C": "30 mA",
      "D": "300 mA"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Which of the following devices may only be used for functional switching?",
    "options": {
      "A": "A 16A plug and socket-outlet",
      "B": "A BS EN 60898 circuit breaker",
      "C": "A device with superconductors",
      "D": "A device with semi-conductors"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "A firefighter's switch should be mounted above ground level at a height of",
    "options": {
      "A": "2.25 m with the switch OFF position at the top",
      "B": "2.75 m with the switch ON position at the top",
      "C": "2.75 m with the switch OFF position at the top",
      "D": "2.75 m with the switch OFF position at the bottom"
    },
    "answer": "C",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "The minimum size of a buried copper earthing conductor not protected against mechanical damage or corrosion is",
    "options": {
      "A": "25 mm²",
      "B": "10 mm²",
      "C": "16 mm²",
      "D": "50 mm²"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "The minimum size of a protective conductor with a 'k' factor of 143 which disconnects in 0.3 s at a fault current of 800 A is",
    "options": {
      "A": "6.0 mm²",
      "B": "4.0 mm²",
      "C": "10.0 mm²",
      "D": "2.5 mm²"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "A distribution board containing circuits with high protective conductor currents shall have the information regarding these circuits positioned so as to be visible to",
    "options": {
      "A": "The user of the installation",
      "B": "A person modifying or extending a circuit",
      "C": "The Distribution Network Operator",
      "D": "An inspector"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "The earthing conductor for an installation supplied from a TN-S system is 16 mm². The minimum size of a main protective bonding conductor is",
    "options": {
      "A": "6 mm²",
      "B": "10 mm²",
      "C": "25 mm²",
      "D": "16 mm²"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "An installation and its generator are not permanently fixed. In a TN, TT or an IT system an RCD shall be installed with a maximum rating of",
    "options": {
      "A": "100 mA",
      "B": "300 mA",
      "C": "30 mA",
      "D": "500 mA"
    },
    "answer": "C",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Control equipment incorporating protection against overload shall be provided for every motor having a rating exceeding",
    "options": {
      "A": "10 kW",
      "B": "37 W",
      "C": "100 W",
      "D": "0.37 kW"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "The inspection of an installation is NOT made to ensure",
    "options": {
      "A": "That it is not visible damaged or defective",
      "B": "Compliance with section 511 of BS 7671",
      "C": "That the requirements of the ESQCR are met",
      "D": "That equipment is correctly selected and erected"
    },
    "answer": "C",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "The minimum value of insulation resistance and the applied test voltage for a 400 V circuit is",
    "options": {
      "A": "1.0MΩ at 500 V a.c",
      "B": "1.0MΩ at 1000 V d.c",
      "C": "1.0MΩ at 500 V d.c",
      "D": "0.5MΩ at 250 V d.c"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Where surge protective devices cannot be disconnected for insulation resistance testing, the minimum value of insulation resistance and the applied test voltage are",
    "options": {
      "A": "1.0 MΩ at 250 V d.c",
      "B": "1.0 MΩ at 500 V a.c",
      "C": "0.5 MΩ at 250 V d.c",
      "D": "1.0 MΩ at 500 V a.c"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "The correct connection of socket-outlets and similar accessories is established by",
    "options": {
      "A": "RCD testing",
      "B": "Functional testing",
      "C": "Insulation resistance testing",
      "D": "Polarity testing"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "An installation is to have the following tests carried out: 1. polarity. 2. cpc continuity 3. earth electrode resistance. 4. insulation resistance. The correct sequence for these tests is",
    "options": {
      "A": "2, 4, 1, 3",
      "B": "1, 2, 3, 4",
      "C": "4, 2, 3, 1",
      "D": "3, 1, 4, 2"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "The verification of voltage drop may be achieved by",
    "options": {
      "A": "Functional testing",
      "B": "Measuring the prospective fault current",
      "C": "Measuring the circuit impedance",
      "D": "Use of a voltmeter"
    },
    "answer": "C",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "A 13A socket-outlet may be installed in a bathroom if it is installed beyond the boundary of zone 1 by a horizontal distance of",
    "options": {
      "A": "2.25 m",
      "B": "0.50 mm",
      "C": "0.60 mm",
      "D": "3.0 m"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "The external influence code for zone 0 of a swimming pool is",
    "options": {
      "A": "AD8",
      "B": "AG3",
      "C": "AE6",
      "D": "AF2"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Cables buried in arable land on a farm should be at a minimum depth of",
    "options": {
      "A": "6 m",
      "B": "0.5 m",
      "C": "0.6 m",
      "D": "1.0 m"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Electrical equipment installed outside in a caravan park shall have a mechanical impact code of at least",
    "options": {
      "A": "IK03",
      "B": "IK01",
      "C": "IK08",
      "D": "IK06"
    },
    "answer": "C",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Socket-outlets in a marina shall be protected",
    "options": {
      "A": "In groups by RCDs",
      "B": "Residual current monitoring devices",
      "C": "Individually by RCDs and overcurrent devices",
      "D": "BS 3036 fuses only"
    },
    "answer": "C",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Temporary installations of exhibitions should inspected and tested",
    "options": {
      "A": "At intervals during use",
      "B": "Before disassembly",
      "C": "Only after a fault has occurred",
      "D": "After each assembly on site"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "The flexible cable for connecting a mobile workshop to the supply shall have a minimum cross sectional area of",
    "options": {
      "A": "4.0 mm² copper",
      "B": "1.5 mm² copper",
      "C": "1.5 mm² aluminium",
      "D": "2.5 mm² copper"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "A periodic inspection for a frequently used caravan should be carried out",
    "options": {
      "A": "Annually",
      "B": "Every three years",
      "C": "Quarterly",
      "D": "Monthly"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "All final circuits in a amusement park for lighting and socket-outlets and mobile equipment up to 32 A must have additional protection by",
    "options": {
      "A": "32 A BS EN 60898 circuit breakers",
      "B": "300 mA or less RCDs",
      "C": "30 mA or less RCDs",
      "D": "BS 88 fuses"
    },
    "answer": "C",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Heating unit in ceilings shall have a degree of protection of at least",
    "options": {
      "A": "IP2X",
      "B": "IP3X",
      "C": "IP4X",
      "D": "IP1X"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "A 16 A BS 88-3 fuse carrying a fault current of 100 A will disconnect in",
    "options": {
      "A": "2 s",
      "B": "3 s",
      "C": "1 s",
      "D": "4 s"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "The maximum permissible voltage drop for a 400 V motor circuit is",
    "options": {
      "A": "20 V",
      "B": "11.5 V",
      "C": "6.9 V",
      "D": "12 V"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "The maximum value of earth fault loop impedance for a 32 A BS EN 60898 type B circuit breaker, for comparison with test values is",
    "options": {
      "A": "1.37 Ω",
      "B": "1.09 Ω",
      "C": "0.54 Ω",
      "D": "0.68 Ω"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  }
];

export const electricianTrainingPatMockQuestions: SourceQuestion[] = [
  {
    "prompt": "Class I equipment:",
    "options": {
      "A": "Must be earthed",
      "B": "Has optional provision for earthing",
      "C": "Must not be earthed",
      "D": "Has no provision for earthing"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "The most important check, when assessing the level of safety of an electrical appliance, is:",
    "options": {
      "A": "Visual inspection",
      "B": "Insulation resistance testing",
      "C": "Flash testing",
      "D": "Earth leakage current testing"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "A flexible cord connected to a 650 W iron should be protected by a fuse rating of:",
    "options": {
      "A": "4A",
      "B": "2A",
      "C": "5A",
      "D": "3A"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Equipment users should be competent to inspect:",
    "options": {
      "A": "Fuses",
      "B": "Terminal connections",
      "C": "Protective conductors",
      "D": "Socket outlets"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Instrument test leads should comply with",
    "options": {
      "A": "IEE Guidance Note 1",
      "B": "BS 3036",
      "C": "BS 7671",
      "D": "HSE Guidance Note GS 38"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "The maximum permitted length of a 1.25 mm² extension lead fitted with a standard 13 A plug should not exceed:",
    "options": {
      "A": "22m",
      "B": "12m",
      "C": "18m",
      "D": "15m"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Equipment with an earth leakage current exceeding 3.5 mA shall:",
    "options": {
      "A": "Have protective conductors of not less than 0.5 mm²",
      "B": "Be permanently wired or supplied by a plug and socket to BS 4343 (BS EN 6030-2)",
      "C": "Only be used in commercial situations",
      "D": "Have a label indicating the value of leakage current"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "When carrying out an insulation resistance test on a Class I household portable appliance to BS 3456 using the earth leakage method, the maximum acceptable value is:",
    "options": {
      "A": "0.5 mA",
      "B": "1.25 mA",
      "C": "0.75 mA",
      "D": "1.0 mA"
    },
    "answer": "C",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Which one of the following domestic electrical appliances may be regarded as an item of stationary equipment:",
    "options": {
      "A": "A washing machine",
      "B": "A television set",
      "C": "A visual display unit",
      "D": "A bathroom heater"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "An item of stationary equipment is defined as not having a carrying handle and having a mass greater than:",
    "options": {
      "A": "18Kg",
      "B": "14Kg",
      "C": "15Kg",
      "D": "12kg"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Which one of the following would not normally be part of a user inspection:",
    "options": {
      "A": "Operating to check that it works properly",
      "B": "Checking the connections within the plug",
      "C": "Looking for signs of external damage to the equipment",
      "D": "Checking security of the flexible cable in its plug top"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Class II equipment has an identifying mark in the shape of:",
    "options": {
      "A": "Two circles, one inside the other",
      "B": "Two squares, one inside the other",
      "C": "A square",
      "D": "Two circles, linked"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "New 13A plugs manufactured to BS 1363 will have:",
    "options": {
      "A": "Inter connecting pins",
      "B": "Insulated pins",
      "C": "Plastic earth pins",
      "D": "Both live pins partially insulated"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "When conducting an earth continuity test on IT equipment:",
    "options": {
      "A": "The equipment casing should be removed",
      "B": "Permission should first be sought from the equipment user",
      "C": "All IT equipment in the area must be disconnected",
      "D": "The equipment must be connected to the mains"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Electrical equipment for use in domestic environments will normally be fitted with a 13A plug manufactured to:",
    "options": {
      "A": "BS 3036",
      "B": "BS 1363",
      "C": "BS EN 60898",
      "D": "BS 1362"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "A 20 metre 1.5 mm² extension lead should be protected by:",
    "options": {
      "A": "A 5A fuse and RCD",
      "B": "A 10A fuse",
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
      "B": "5A",
      "C": "3A",
      "D": "10A"
    },
    "answer": "B",
    "explanation": "At 230 V, an 800 W appliance draws about: I=PV=800230≈3.5 A I= V P ​ = 230 800 ​ ≈3.5 A So the normal fuse selected is the next suitable standard rating above that, which is 5 A."
  },
  {
    "prompt": "When a standard 13A plug overheats the cause would most likely be due to:",
    "options": {
      "A": "A poor earth connection",
      "B": "The use of socket outlets not to BS Standards",
      "C": "Oversized conductors",
      "D": "A loose connection within the plug"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "The minimum acceptable insulation resistance for Class I heating equipment rated greater than 3 kW is:",
    "options": {
      "A": "500 ohms",
      "B": "0.3 megohms",
      "C": "0.5 megohms",
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
      "C": "A low resistance ohmmeter",
      "D": "A bell set tester"
    },
    "answer": "C",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "A BS 3535 safety isolating transformer having a voltage not exceeding 50 V is used to supply certain equipment complying with:",
    "options": {
      "A": "Class II",
      "B": "Class 0",
      "C": "Class III",
      "D": "Class I"
    },
    "answer": "C",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Which of the following would not normally form a part of in-service testing:",
    "options": {
      "A": "Loop testing",
      "B": "Earth continuity testing",
      "C": "Preliminary inspection",
      "D": "Functional checks"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Electrical equipment users should be:",
    "options": {
      "A": "An electrician",
      "B": "Able to test equipment",
      "C": "An electrically competent person",
      "D": "Capable of inspecting equipment for obvious defects"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "The test current applied to electric equipment fitted with a 13A plug fuse, during an earth continuity test, would normally be:",
    "options": {
      "A": "25A for a period between 5 and 20 seconds",
      "B": "13A for at least 1 minute",
      "C": "13A for approximately 5 seconds",
      "D": "25A for at least 1 minute"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "The recommended initial frequency of user checks, relevant to a children's ride in the entrance of a store, could be:",
    "options": {
      "A": "Annually",
      "B": "Sixth monthly",
      "C": "Monthly",
      "D": "Daily"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Identification of electrical equipment within a duty holder's control is required to produce:",
    "options": {
      "A": "A safety check equipment label",
      "B": "A fault register",
      "C": "An equipment register",
      "D": "A repair schedule"
    },
    "answer": "C",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Which of the following does not apply when testing on a two-core cord set:",
    "options": {
      "A": "A polarity check",
      "B": "An insulation resistance test",
      "C": "An earth continuity test",
      "D": "A visual inspection"
    },
    "answer": "C",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Class I equipment with internal electronic components should be tested with a current not greater than:",
    "options": {
      "A": "200 mA",
      "B": "0.8 A",
      "C": "400 mA",
      "D": "15 A"
    },
    "answer": "A",
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
      "C": "Class II",
      "D": "Class III"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "User checks of stationary equipment in industrial premises should be carried out:",
    "options": {
      "A": "Daily",
      "B": "Before use",
      "C": "Weekly",
      "D": "Fortnightly"
    },
    "answer": "C",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "When conducting insulation resistance tests on new household appliances with Class I insulation, the minimum value would be:",
    "options": {
      "A": "1.0 megohm",
      "B": "2.0 megohm",
      "C": "0.25 megohm",
      "D": "0.5 megohm"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "There is no provision for protective earthing for which one of the following equipment:",
    "options": {
      "A": "Class I",
      "B": "Class 0",
      "C": "Class III",
      "D": "Class II"
    },
    "answer": "D",
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
      "A": "Details of previous test results",
      "B": "Information on whether the equipment has passed or failed the safety tests",
      "C": "Date the test was carried out",
      "D": "The appliance number"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "The scope of the EWR regarding maintenance of electrical systems extends to distribution systems up to:",
    "options": {
      "A": "400 kV",
      "B": "11 kV",
      "C": "132 kV",
      "D": "33 kV"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "A fridge freezer is classified as:",
    "options": {
      "A": "No classification",
      "B": "A stationary appliance",
      "C": "Moveable equipment",
      "D": "A portable appliance"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "The Code of Practice for In-service Inspection and Testing of Electrical Equipment does not apply to:",
    "options": {
      "A": "Construction site equipment",
      "B": "Factories",
      "C": "Petrol station forecourts",
      "D": "Offices"
    },
    "answer": "C",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "An insulation resistance tester should be capable of:",
    "options": {
      "A": "Testing the continuity of a circuit",
      "B": "Supplying a maximum current of 0.5 A through the load",
      "C": "Supplying a minimum voltage of 1000 V d.c. to the load",
      "D": "Maintaining the test voltage when applied to the equipment insulation"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Safety isolating transformers supplying Class III equipment must conform to:",
    "options": {
      "A": "BS 3535",
      "B": "BS 5458",
      "C": "BS 3526",
      "D": "BS 5533"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "When conducting an insulation resistance test on an electrical appliance the voltage supplied should be:",
    "options": {
      "A": "250V a.c",
      "B": "500V d.c",
      "C": "1000V a.c",
      "D": "250V d.c"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "When assessing the level of safety of an electrical appliance the most important check would be:",
    "options": {
      "A": "Visual inspection",
      "B": "Spot testing",
      "C": "Acceptable values of insulation resistance",
      "D": "Earth fault current"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Which one of the following checks should the user of an appliance be competent to undertake:",
    "options": {
      "A": "Formal visual inspection",
      "B": "Tests using a portable appliance tester",
      "C": "Visual inspection of the flexible lead and plug",
      "D": "Both visual inspection and testing"
    },
    "answer": "C",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "During a formal visual inspection a check should be made to confirm that the equipment is being operated:",
    "options": {
      "A": "By a skilled person",
      "B": "At the correct voltage",
      "C": "By a competent person",
      "D": "In accordance with manufacturer's instructions"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "To which one of the following workplace environments does the IEE Code of Practice not apply:",
    "options": {
      "A": "Specialised work situations",
      "B": "Offices",
      "C": "Hotels",
      "D": "Shops"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "The legal requirement for electrical equipment to be maintained in good order is laid down in the:",
    "options": {
      "A": "Provision and Use of Work Equipment Regulations 1998",
      "B": "Electricity at Work Regulations 1989",
      "C": "Health and Safety at Work Act 1974",
      "D": "Management of Health and Safety at Work Regulations 1999"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Instrument test leads should comply with:",
    "options": {
      "A": "HSE Guidance Note GS 55",
      "B": "HSE Guidance Note GS 38",
      "C": "BS 2001",
      "D": "BS 7671"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "The initial frequency of formal visual inspection for Class II cleaning equipment used in a school is recommended to be:",
    "options": {
      "A": "1 month",
      "B": "3 months",
      "C": "6 months",
      "D": "4 months"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "The test current applied to an electric kettle fitted with a 13A fuse during an earth continuity test would normally be:",
    "options": {
      "A": "25A for a period between 5 and 20 seconds",
      "B": "3A for 10 seconds",
      "C": "13A for at least 1 minute",
      "D": "25A for 5 seconds"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  }
];

export const electricianTrainingAm2MockQuestions: SourceQuestion[] = [
  {
    "prompt": "Which statutory regulations lay down the measures which must be taken to ensure the safe installation and use of electrical equipment:",
    "options": {
      "A": "IET Wiring Regulations",
      "B": "Factories Act",
      "C": "Electricity at Work Regulations 1989",
      "D": "Electricity Supply Regulations 1988"
    },
    "answer": "C",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "What is the most appropriate action for an HSE inspector to take after discovering some defective lights within an emergency lighting system:",
    "options": {
      "A": "Issue a deferred prohibition notice",
      "B": "Issue a prohibition notice",
      "C": "Issue an improvement notice",
      "D": "Close the site down immediately"
    },
    "answer": "C",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "A diagram showing all conductors and the connection of electrical components is called a:",
    "options": {
      "A": "Schematic diagram",
      "B": "Wiring diagram",
      "C": "Circuit diagram",
      "D": "Block diagram"
    },
    "answer": "C",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "A location drawing is scaled at 1:50. The route length of a cable run on the drawing is 85mm the length of the cable will be:",
    "options": {
      "A": "4.25m",
      "B": "58.9m",
      "C": "42.5m",
      "D": "17m"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "The preferred method of instructing the client in the correct use and maintenance of electrical equipment used within an installation would be to:",
    "options": {
      "A": "Provide them with the manufacturer's catalogue",
      "B": "Provide them with a guided tour and verbal instructions during the handover period",
      "C": "Provide them with an operations and maintenance manual",
      "D": "Leave relevant manufacturer's literature adjacent to equipment"
    },
    "answer": "C",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "The requirements for overload current protection are fulfilled when:",
    "options": {
      "A": "Ib = 15A In = 20A Iz = 18A",
      "B": "Ib = 10A In = 15A Iz = 18A",
      "C": "Ib = 20A In = 15A Iz = 15A",
      "D": "Ib = 2.5A In = 10A Iz = 8A"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "A heater taking 40A is supplied by a cable 10m long. If the cable has a volt drop of 4mV per ampere per metre, the voltage drop in the cable will be:",
    "options": {
      "A": "1.6 V",
      "B": "16 V",
      "C": "8 V",
      "D": "0.16 V"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Which domestic accessory would you expect to have terminals labelled, N, Loop and S/L:",
    "options": {
      "A": "Consumer Unit",
      "B": "Ceiling Rose",
      "C": "Junction Box",
      "D": "Socket"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "A Motor is connected via a flexible conduit to a starter. The continuity of the protective conductor is maintained by:",
    "options": {
      "A": "The neutral conductor",
      "B": "A separate circuit protective conductor",
      "C": "The flexible conduit without any further modification",
      "D": "The flexible conduit provided the conduit boxes are scraped and locknuts are used"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Cables not likely to be affected by electrical interference are:",
    "options": {
      "A": "Coaxial",
      "B": "Fibre-optic",
      "C": "STPs",
      "D": "ScTPs"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Fire alarm sounders must be capable of producing a minimum of:",
    "options": {
      "A": "80 dB",
      "B": "70 dB",
      "C": "65 dB",
      "D": "75 dB"
    },
    "answer": "C",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "What is the efficiency of a 172.5 Watt domestic heater which draws 2 A from the domestic supply:",
    "options": {
      "A": "37.50%",
      "B": "65.70%",
      "C": "75%",
      "D": "26.60%"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "The effect of improving the power factor of a fluorescent lamp circuit is that the current taken from the supply is:",
    "options": {
      "A": "Greater in value",
      "B": "Lagging the supply voltage by a larger angle",
      "C": "Smaller in value",
      "D": "Unchanged in value"
    },
    "answer": "C",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "In agricultural premises an rcd may be used for protection against fire providing the operating current does not exceed:",
    "options": {
      "A": "300 mA",
      "B": "150 mA",
      "C": "30 mA",
      "D": "500 mA"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "The internal area of a cable delivery system, to avoid internal sealing, must not be greater than:",
    "options": {
      "A": "720 mm²",
      "B": "750 mm²",
      "C": "700 mm²",
      "D": "710 mm²"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Copper links are used across joints in metallic trunking installations in order to:",
    "options": {
      "A": "Reduce corrosion at the joint",
      "B": "Maintain the electrical continuity of the exposed conductive parts",
      "C": "Increase the strength of the joint",
      "D": "Provide a temporary fixing before the main bolts are fitted"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "The purpose of segregated trunking is to:",
    "options": {
      "A": "Allow accommodation of circuits having different voltage bands",
      "B": "Support the cables installed in the trunking",
      "C": "Prevent overheating in vertical trunking runs",
      "D": "Prevent the spread of fire within the trunking"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "PME (Protective Multiple Earthing) is mainly associated with which system of earthing:",
    "options": {
      "A": "TI system",
      "B": "TN-S systems",
      "C": "TT systems",
      "D": "TN-C-S systems"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Which of the following is not a method of protection from direct contact (basic protection):",
    "options": {
      "A": "Placing out of reach",
      "B": "Barriers and enclosures",
      "C": "Automatic disconnection of supply",
      "D": "Insulation of live parts"
    },
    "answer": "C",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Supplementary bonding conductors without mechanical protection used to connect water pipes supplying a sink unit should be at least:",
    "options": {
      "A": "6.0 mm²",
      "B": "2.5 mm²",
      "C": "1.5 mm²",
      "D": "4.0 mm²"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "When a person receives a shock by touching a metallic part not normally live but made live under fault conditions is said to be in:",
    "options": {
      "A": "Direct contact",
      "B": "Indirect contact",
      "C": "Earth contact",
      "D": "Electrical contact"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Where a firefighter's switch is to be installed, in order to comply with BS 7671 it must be:",
    "options": {
      "A": "No more than 2.75 m from the ground with the off position at the top",
      "B": "No more than 2.75 m from the ground with the off position at the bottom",
      "C": "No more than 3.75 m from the ground with the off position at the bottom",
      "D": "No more than 3.75 m from the ground with the off position at the top"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Circuit protective conductors are connected between:",
    "options": {
      "A": "Exposed and extraneous conductive parts",
      "B": "The main earth terminal and extraneous conductive parts",
      "C": "The main earth terminal and the earth rod",
      "D": "The main earth terminal and exposed conductive parts"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Which of the following protective devices is used in domestic plug tops:",
    "options": {
      "A": "BS 88",
      "B": "BS EN 60898",
      "C": "BS 3036",
      "D": "BS 1362"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Fusing factor is the ratio of:",
    "options": {
      "A": "Fault current to fusing current",
      "B": "Fusing current to current rating",
      "C": "Current rating to fusing current",
      "D": "Fusing current to fault current"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "What is the purpose of the National Grid:",
    "options": {
      "A": "Transmission of electricity from sub stations to domestic premises",
      "B": "Transmission of electricity from power stations to factories",
      "C": "Transmission of electricity from power stations to substations",
      "D": "Transmission of electricity from power stations to industrial locations"
    },
    "answer": "C",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Which one of the following types of power stations does not use a fossil fuel to generate electricity:",
    "options": {
      "A": "Oil fired",
      "B": "Nuclear",
      "C": "Gas fired",
      "D": "Coal fired"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Increasing the excitation of an a.c. generator will cause the:",
    "options": {
      "A": "The frequency to decrease",
      "B": "The voltage to increase",
      "C": "The power factor to decrease",
      "D": "Frequency to increase"
    },
    "answer": "B",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Which of the following systems require large amounts of water for operation:",
    "options": {
      "A": "Micro wind",
      "B": "Photovoltaic",
      "C": "Grey water recycling",
      "D": "Micro-hydro"
    },
    "answer": "D",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  },
  {
    "prompt": "Which of the following systems require separate pipework, storage and a filtration system for operation:",
    "options": {
      "A": "Grey water recycling",
      "B": "Photovoltaic",
      "C": "Micro wind",
      "D": "Micro-hydro"
    },
    "answer": "A",
    "explanation": "ElectricianTraining source mock marks this answer as correct."
  }
];

export const electricianTraining2391MockQuestions: SourceQuestion[] = [
  {
    "prompt": "What is the main purpose of an Initial Verification?",
    "options": {
      "A": "To confirm an installation is safe to be put into service",
      "B": "To make a judgement that the installation is safe for continued use",
      "C": "To ensure all testing has been carried out",
      "D": "To complete the testing and issue an Electrical Installation Certificate"
    },
    "answer": "A",
    "explanation": "Initial Verification checks that a new installation has been designed, constructed and tested correctly before it is energised. It ensures all safety measures are in place so the installation can be safely put into service for the first time."
  },
  {
    "prompt": "What situation requires the issuing of a Minor Electrical Installation Works Certificate?",
    "options": {
      "A": "Upgrading the cable and circuit breaker for a shower circuit",
      "B": "Additional socket-outlets added to an existing ring final circuit",
      "C": "Changing a consumer unit and protective devices",
      "D": "An additional lighting circuit has been installed"
    },
    "answer": "B",
    "explanation": "Adding extra socket-outlets to an existing circuit is classed as minor works because it does not create a new circuit and the alteration is limited in scope. BS 7671 requires a Minor Electrical Installation Works Certificate for small additions or modifications where the existing circuit continues to provide adequate protection. The other options involve new circuits or major alterations, which require a full Electrical Installation Certificate, not a minor works certificate."
  },
  {
    "prompt": "Which statutory document contains specific information relevant to Initial Verification?",
    "options": {
      "A": "The Electricity at Work Regulations",
      "B": "BS 7671, Requirements for Electrical Installations",
      "C": "Health and Safety guidance GS38",
      "D": "The Health and Safety at Work Act"
    },
    "answer": "A",
    "explanation": "The Electricity at Work Regulations (EAWR) is a statutory document, meaning it is legally enforceable, and it requires electrical systems to be constructed, maintained and tested safely. Because Initial Verification directly ensures an installation is safe before being put into service, EAWR is the legislation that governs this duty. BS 7671 supports the process, but EAWR is the legal requirement that makes verification mandatory."
  },
  {
    "prompt": "What is the minimum voltage which requires the test leads and probes to comply with GS38?",
    "options": {
      "A": "150 V AC",
      "B": "25 V AC",
      "C": "120 V AC",
      "D": "50 V AC"
    },
    "answer": "D",
    "explanation": "GS38 applies to test leads and probes used on electrical systems where the voltage is at or above 50 V AC, which is considered a potentially dangerous voltage level. At 50 V and above, the risk of electric shock increases significantly, so probes must meet strict design and safety requirements. This ensures the tester is properly protected during measurement."
  },
  {
    "prompt": "How many voltage measurements are required to confirm that a three-phase four-wire installation is safely isolated?",
    "options": {
      "A": "9",
      "B": "3",
      "C": "10",
      "D": "6"
    },
    "answer": "C",
    "explanation": "Safe isolation requires checking all conductor combinations to prove the absence of voltage. In a three-phase four-wire system this includes L1–L2, L2–L3, L1–L3, each line to neutral, and each line to earth, plus neutral to earth. Completing all ten proves the system is fully dead, preventing accidental energisation or contact with a live conductor."
  },
  {
    "prompt": "What precaution is required before carrying out a test of external earth fault loop impedance (Ze) so as to avoid danger to users of an installation?",
    "options": {
      "A": "Use insulated screwdrivers",
      "B": "Lock off the supply",
      "C": "Warn the occupier of the premises",
      "D": "Disconnect the main protective bonding conductors"
    },
    "answer": "B",
    "explanation": "Locking off the supply ensures no one can re-energise the installation while tests are being performed. Ze testing involves exposing live terminals, so preventing unauthorised reconnection is essential for safety. This forms part of a safe isolation procedure, protecting both the tester and anyone else on site."
  },
  {
    "prompt": "Why does BS 7671 require inspection to be carried out before testing?",
    "options": {
      "A": "To confirm the installers have installed as per the job specification",
      "B": "To confirm all the equipment is connected to the installation will work",
      "C": "To confirm the installation is complete and it is safe to commence testing",
      "D": "To confirm the Earthing Conductor is connected and it is safe to commence testing"
    },
    "answer": "C",
    "explanation": "Inspection identifies visible defects, incorrect connections, damage or omissions that could make testing dangerous or give misleading results. Ensuring the installation is complete prevents energising incomplete circuits and reduces the risk of equipment damage or electric shock. BS 7671 therefore places inspection ahead of all testing activities."
  },
  {
    "prompt": "Which situation will not require a label stating 'Safety Electrical Connection – Do Not remove'?",
    "options": {
      "A": "A supplementary bonding conductor connected to a metallic water pipe",
      "B": "An Earthing conductor connected to an installation earth electrode",
      "C": "The connection to a Main Earthing Terminal within a consumer unit",
      "D": "Connecting a bonding conductor to a metallic installation gas pipe"
    },
    "answer": "C",
    "explanation": "The connection to a Main Earthing Terminal within a consumer unit Explanation: Bonding and earthing labels are required where disconnection could create danger by removing a protective conductor. The MET inside a consumer unit is already clearly identifiable and accessible only to competent persons. Because its removal is highly unlikely except by an electrician, additional labelling is not necessary."
  },
  {
    "prompt": "What must be checked when inspecting a consumer unit for compliance with Basic Protection requirements?",
    "options": {
      "A": "Live conductors are correctly identified",
      "B": "Protective devices are the correct rating",
      "C": "All cable terminations are tight",
      "D": "Enclosures meet the IP requirements"
    },
    "answer": "D",
    "explanation": "Basic Protection protects users from direct contact with live parts, and enclosure IP ratings ensure dangerous parts cannot be touched. A compliant consumer unit must prevent finger access and resist entry of small objects. Incorrect or damaged covers defeat Basic Protection, so IP compliance is a key inspection point."
  },
  {
    "prompt": "Which two senses are used when inspecting the terminations at a newly installed motor?",
    "options": {
      "A": "Sight and smell",
      "B": "Touch and smell",
      "C": "Touch and sight",
      "D": "Sight and hearing"
    },
    "answer": "C",
    "explanation": "isual inspection confirms identification, routing, insulation condition and correct termination layout. Touch checks for tightness, movement or loose components without applying full force. Using these two senses together ensures motor connections are secure, correctly fitted and unlikely to overheat in service."
  },
  {
    "prompt": "What action must be taken when a loose connection is found to a pipe during the inspection of a main protective bonding conductor termination?",
    "options": {
      "A": "A note is made on the Electrical Installation Certificate under 'Departures'",
      "B": "A defect report must accompany the Electrical Installation Certificate",
      "C": "The defect must be made good and inspected before certification",
      "D": "The continuity test between the MET and the pipe should be carried out"
    },
    "answer": "C",
    "explanation": "The defect must be made good and inspected before certification Explanation: A loose bonding connection compromises safety by preventing fault currents from returning effectively to earth. Since bonding is fundamental for shock protection, the issue must be corrected immediately. Certification cannot be issued until all safety-critical defects are repaired and rechecked."
  },
  {
    "prompt": "What best describes the protection offered by IPXXB?",
    "options": {
      "A": "Protection against access to live parts",
      "B": "Protection against the ingress of solids",
      "C": "Protection against the ingress of water",
      "D": "Protection against impact"
    },
    "answer": "A",
    "explanation": "IPXXB refers to protection against finger access, equivalent to a 12 mm diameter object. This prevents accidental touching of live parts that could cause shock. The “B” code focuses specifically on ingress of body parts rather than dust or water."
  },
  {
    "prompt": "What is the minimum IP rating for electrical equipment installed in Zone 2 of a bathroom?",
    "options": {
      "A": "IP X4",
      "B": "IP 2X",
      "C": "IP 4X",
      "D": "IP X2"
    },
    "answer": "A",
    "explanation": "Zone 2 requires protection against water splashes from any direction, hence IPX4. Bathrooms present increased shock risk due to moisture and reduced body resistance, so equipment must prevent water ingress. Higher ratings may be required depending on manufacturer instructions."
  },
  {
    "prompt": "The calibration of an Earth Fault Loop Impedance tester reveals that the instrument is outside of specification. Regular accuracy checks on the instrument have not been carried out for six months. What immediate action must be taken by the contractor?",
    "options": {
      "A": "The test leads for this instrument must be replaced",
      "B": "The last installation tested should be retested",
      "C": "All installations tested since the last calibration should be checked",
      "D": "All installations tested in the last three months should be retested"
    },
    "answer": "B",
    "explanation": "If the tester was inaccurate, the most recent installation may contain unsafe results. Retesting the last job ensures any serious errors are caught before harm occurs. Earlier tests may be reviewed later, but the immediate priority is the most recent unverified work."
  },
  {
    "prompt": "What instrument would give the most accurate results when carrying out an earth electrode resistance test?",
    "options": {
      "A": "A low-resistance ohmmeter",
      "B": "A stakeless or probe type earth electrode tester",
      "C": "An earth fault loop impedance tester",
      "D": "A three or four-terminal earth electrode tester"
    },
    "answer": "D",
    "explanation": "These testers use dedicated current and potential spikes to eliminate parallel earth paths and improve accuracy. They measure true electrode resistance rather than loop impedance, which includes supply characteristics. This makes them the industry standard for TT earthing verification."
  },
  {
    "prompt": "Why does BS 7671 give a defined sequence of tests when carrying out Initial Verification?",
    "options": {
      "A": "To ensure the Schedule of Test Results is complete",
      "B": "To ensure the safety of the person carrying out the tests",
      "C": "To ensure all tests are carried out",
      "D": "To ensure live tests are carried out in the correct order"
    },
    "answer": "B",
    "explanation": "BS 7671 sets a strict test sequence so that no dangerous conditions remain undetected before moving on to live testing, ensuring the tester is never exposed to unexpected voltages or faults. Following the order ensures that preliminary “dead” tests confirm the installation is safe before any energised tests begin. It also prevents a situation where unsafe assumptions are made because earlier safety-critical tests were skipped. Overall, the sequence protects the tester and maintains a safe working procedure throughout verification."
  },
  {
    "prompt": "Which test method is used to verify that extraneous conductive parts of an installation are effectively connected to the MET?",
    "options": {
      "A": "Long lead test",
      "B": "R1+R2 linked test",
      "C": "Applied current test",
      "D": "Applied voltage test"
    },
    "answer": "A",
    "explanation": "The long lead test is used when parts of the installation are physically distant from the MET, allowing resistance to be checked over long distances. This ensures that extraneous conductive parts are effectively bonded back to the earthing system. A reliable continuity path confirms that touch voltages will remain safe under fault conditions."
  },
  {
    "prompt": "What is the main purpose of verifying that extraneous conductive parts of an installation are effectively connected to the MET?",
    "options": {
      "A": "To confirm that there is a reliable connection between the MET and the means of earthing",
      "B": "To confirm that they provide a reliable path for fault currents to flow to earth",
      "C": "To confirm that they will reduce values of earth fault loop impedance to comply with BS7671",
      "D": "To confirm that only a low potential will exist between exposed and extraneous conductive parts under fault conditions"
    },
    "answer": "D",
    "explanation": "Bonding extraneous conductive parts ensures that dangerous voltage differences cannot develop during a fault. This keeps all accessible metalwork at the same potential, drastically reducing the risk of electric shock. It is a key requirement of the protective equipotential bonding system."
  },
  {
    "prompt": "Where on a lighting circuit would a test of continuity of protective conductors be carried out?",
    "options": {
      "A": "At the distribution board",
      "B": "At the furthest point in the circuit",
      "C": "At every light and switch point",
      "D": "At every light and each switch with a metallic plate"
    },
    "answer": "C",
    "explanation": "Continuity of protective conductors must be verified at every point where the CPC is expected to provide a protective path, which includes all lights and all switch points. Testing at each of these ensures that the protective conductor is continuous throughout the entire circuit. This confirms that fault currents will have a reliable path back to earth at every accessory. Ensuring CPC continuity is essential for compliance with BS 7671 and maintaining effective disconnection times."
  },
  {
    "prompt": "What would cause the value of r2 to be higher than r1 and rn when carrying out step 1 of a continuity of ring-final circuit test?",
    "options": {
      "A": "A spur in the ring",
      "B": "Smaller sized cpc",
      "C": "A connected load",
      "D": "Parallel earth paths"
    },
    "answer": "B",
    "explanation": "The CPC is often smaller in cross-section than the line and neutral conductors (e.g., 2.5mm² line, 1.5mm² CPC). A smaller conductor has a higher resistance per metre, so r2 naturally gives a higher value. This is a normal and expected characteristic when testing ring circuits."
  },
  {
    "prompt": "What is the test voltage for an insulation resistance test carried out on a 230 V circuit containing socket-outlets with surge protection devices which cannot be removed?",
    "options": {
      "A": "1000 V DC",
      "B": "500 V DC",
      "C": "250 V DC",
      "D": "100 V DC"
    },
    "answer": "C",
    "explanation": "A reduced test voltage of 250 V DC is used when surge protection devices (SPDs) cannot be disconnected, because a full 500 V test could damage the components inside the SPD. This lower voltage still allows a valid insulation reading while preventing false failures. It also ensures compliance with BS 7671 guidance for circuits containing electronic devices."
  },
  {
    "prompt": "During the construction of an installation, insulation resistance tests have been carried out between live conductors and earth on the individual circuits and the L to E results are shown below. What is the expected value of insulation resistance L to E when the whole installation is tested?",
    "options": {
      "A": "136.7 MΩ",
      "B": "520 MΩ",
      "C": "0.03 MΩ",
      "D": "32.2 MΩ"
    },
    "answer": "D",
    "explanation": "When circuits are tested together, their insulation resistances are effectively connected in parallel. Parallel resistances always give a combined value lower than the lowest individual circuit value. Using the parallel resistance formula on the three circuit readings gives approximately 32.2 MΩ for the whole installation."
  },
  {
    "prompt": "Questions 23 to 25 relate to the following scenario: The conductors of a newly installed ring final circuit are to be tested for continuity. The circuit is wired in PVC single core cables contained in PVC conduit. All circuit conductors are 2.5mm² and the end to end length of each loop is 75m. What action is required regarding the instrument test leads?",
    "options": {
      "A": "They must be 13 A rated",
      "B": "They are nulled or zeroed",
      "C": "They must be auto-ranging",
      "D": "They must be GS 38 compliant"
    },
    "answer": "B",
    "explanation": "The resistance of the test leads must be nulled to ensure that it is not included in the measured continuity values. This provides an accurate reading of only the circuit conductors. Zeroing the leads is standard practice before low-resistance measurements such as R1, R2, and r1+r2."
  },
  {
    "prompt": "What is the expected resistance of each of the loops tested in stage 1 as shown in GN3?",
    "options": {
      "A": "1.01 Ω",
      "B": "0.68 Ω",
      "C": "0.56 Ω",
      "D": "0.14 Ω"
    },
    "answer": "C",
    "explanation": "For a 75 m ring with 2.5/1.5 mm² conductors, the expected resistance is calculated from published mΩ/m values. When both legs of the ring are connected, the effective length is halved, giving a loop resistance of around 0.56 Ω. This value matches typical GN3 guidance and verifies correct cable sizes and continuity."
  },
  {
    "prompt": "Whilst testing the ring final circuit the reading at one of the socket-outlets for stage 2 was found to be 0.42 Ω but an over range reading was obtained for stage 3. What condition would cause these results?",
    "options": {
      "A": "Line and cpc conductor connections are reversed",
      "B": "The line conductor is not connected",
      "C": "The neutral conductor is not connected",
      "D": "Line and neutral conductor connections are reversed"
    },
    "answer": "D",
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
      "A": "Using a long lead and testing from the MET to each socket in turn",
      "B": "Testing at each socket using and earth fault loop impedance tester",
      "C": "Linking line and cpc and testing at each socket between line and cpc",
      "D": "Comparing the test results from stage 2 and stage 3 as identified in GN3"
    },
    "answer": "D",
    "explanation": "Stages 2 and 3 confirm that line, neutral, and CPC conductors are correctly connected at every point. Matching patterns in readings show that conductors are properly routed and polarity is correct throughout. This GN3 method is the accepted and most reliable check for ring circuit polarity."
  },
  {
    "prompt": "Questions 28 to 32 relate to the following scenario: Tests are to be carried out on a newly installed installation forming part of 230 V single-phase TT system. The installation is protected by a 300 mA BS EN 61008 RCD installed for fire protection. 30mA BS EN 61009 RCBOs are installed protecting each outgoing circuit. How is the maximum resistance for the installation earth electrode determined?",
    "options": {
      "A": "230 V x I∆n",
      "B": "230 V ÷ I∆n",
      "C": "50 V x I∆n",
      "D": "50 V ÷ I∆n"
    },
    "answer": "D",
    "explanation": "The maximum earth electrode resistance for a TT system is based on the allowable touch voltage, which BS 7671 limits to 50 V under fault conditions. This value is divided by the RCD residual operating current to ensure disconnection will occur before dangerous touch voltages arise. Therefore using 50 V ÷ I∆n ensures the installation meets safety requirements."
  },
  {
    "prompt": "What is verified by carrying out a ½ IΔn test on an RCD?",
    "options": {
      "A": "The RCD will operate when a fault current occurs",
      "B": "The disconnection time will be met",
      "C": "The requirements for additional protection will be met",
      "D": "The RCD is not subject to nuisance tripping"
    },
    "answer": "D",
    "explanation": "At half its rated tripping current, a properly functioning RCD should not operate, proving it will not trip unnecessarily under small leakage currents. This prevents unwanted disconnections in normal operation. It confirms correct stability and discrimination before full-current tests are applied."
  },
  {
    "prompt": "What is the main purpose for carrying out a 5 IΔn test on a 30 mA RCD protecting 13 A socket-outlets in a dwelling?",
    "options": {
      "A": "To verify it meets the requirements of BS EN 61008",
      "B": "To verify it meets the requirements for Additional Protection",
      "C": "To verify it meets the requirements for Automatic Disconnection",
      "D": "To ensure the RCD mechanism works correctly"
    },
    "answer": "B",
    "explanation": "A 30 mA RCD must disconnect within 40 ms at 5× its rated current for additional protection as required by BS 7671. This ensures extremely rapid disconnection in the event of a shock-risk fault. The test confirms the device can provide the enhanced protection intended for socket-outlet circuits."
  },
  {
    "prompt": "What would be the x1 test current for an RCD having the maximum rating when providing fire protection?",
    "options": {
      "A": "100 mA",
      "B": "500 mA",
      "C": "300 mA",
      "D": "30 mA"
    },
    "answer": "B",
    "explanation": "Fire-protection RCDs are typically rated at 500 mA, providing protection against overheating in cables and fixed equipment. The x1 test current equals the rated residual operating current of the device. Therefore a 500 mA RCD must be tested at 500 mA to confirm it will trip correctly under fire-risk fault currents."
  },
  {
    "prompt": "What are the correct test tripping times for the 30 mA BE EN 61009 RCBOs when tested at 1x IΔn and 5x IΔn?",
    "options": {
      "A": "300 ms and 400 ms",
      "B": "200 ms and 40 ms",
      "C": "200 ms and 100 ms",
      "D": "300 ms and 40 ms"
    },
    "answer": "D",
    "explanation": "BS EN 61009 specifies a maximum disconnection time of 300 ms at 1× IΔn and 40 ms at 5× IΔn for a 30 mA RCBO. These times ensure both ADS and additional protection criteria are satisfied. The test confirms the RCBO reacts fast enough to prevent electric shock and protect wiring."
  },
  {
    "prompt": "Questions 33 to 40 relate to the following scenario: A commercial storage unit has been rewired and the installation forms part of 400/230 V three-phase TN-S system. All 'dead' tests have been completed. 'Live' testing is about to commence. Why is a live polarity check carried out at the origin of the installation?",
    "options": {
      "A": "To verify that the polarity throughout the installation is correct",
      "B": "To ensure the DNO's incoming supply has the correct polarity",
      "C": "To verify that double-pole switches will automatically operate",
      "D": "To replace the need for a dead polarity test on the installation"
    },
    "answer": "B",
    "explanation": "A live polarity check verifies that line, neutral and earth from the supply are correctly connected before any further live tests begin. If polarity at the origin is wrong, all downstream results would be unsafe or invalid. Ensuring correct supply polarity protects both the tester and the installation."
  },
  {
    "prompt": "What is the reason for verifying the prospective fault current at the origin of the installation?",
    "options": {
      "A": "To verify that the short circuit breaking capacity of the protective devices exceed the value of prospective fault current",
      "B": "To verify that the protective devices operate in the disconnection time given in BS 7671",
      "C": "To verify that the prospective fault current exceeds the breaking capacities of the protective devices",
      "D": "To verify that the protective conductors of the installation can withstand the prospective fault current"
    },
    "answer": "A",
    "explanation": "Every protective device must have a breaking capacity higher than any fault current that could occur at its location. Measuring PFC at the origin ensures that main fuses, MCBs or switchgear can safely interrupt worst-case faults without exploding or failing. This confirms equipment is adequately rated for the system."
  },
  {
    "prompt": "What is the purpose of verifying the earth fault loop impedance at the furthest point on each final circuit?",
    "options": {
      "A": "To verify the impedance is high enough to cause a low fault current to flow",
      "B": "To verify the impedance is low enough to cause a high fault current to flow",
      "C": "To verify that the fault current exceeds the breaking capacity of the protective device",
      "D": "To verify the impedance is high enough to ensure RCDs are tripped"
    },
    "answer": "B",
    "explanation": "A sufficiently high fault current is needed to operate protective devices quickly during an earth fault. Measuring at the furthest point ensures the worst-case scenario still meets disconnection times. This prevents dangerous touch voltages from persisting."
  },
  {
    "prompt": "What action should be taken to allow for the effect of transient voltages when carrying out earth fault loop impedance tests?",
    "options": {
      "A": "The test is repeated to confirm consistent readings",
      "B": "Turn on the anti-trip function on the instrument",
      "C": "The instrument is on the lowest measuring range",
      "D": "Turn off the anti-trip function on the instrument"
    },
    "answer": "A",
    "explanation": "Repeating the test helps ensure that any momentary voltage spikes or transient fluctuations on the supply do not distort the reading. This provides a more reliable Zs value by confirming that multiple test results are consistent. Transient voltages are common on live systems, so verification through repeated measurements is essential."
  },
  {
    "prompt": "What factor can significantly reduce the values of measured earth fault loop impedance, compared to a calculated figure obtained using measured ze and measured r1 + r2 values?",
    "options": {
      "A": "Leakage currents",
      "B": "High circuit load during testing",
      "C": "Parallel earth paths",
      "D": "A loose connection in the line conductor"
    },
    "answer": "C",
    "explanation": "Additional earth return paths reduce the overall loop impedance by providing alternative low-resistance routes. This makes the measured Zs lower than the theoretical R1+R2 + Ze value. It is a common occurrence in installations with metallic containment or bonding."
  },
  {
    "prompt": "What value requires the application of a multiplier correction factor when confirming an earth fault loop impedance test result complies with the IET Wiring Regulations?",
    "options": {
      "A": "The measured R1+R2 value",
      "B": "The measured ZS values",
      "C": "The tabulated values in BS 7671",
      "D": "The values in Guidance Note 3"
    },
    "answer": "C",
    "explanation": "Zs tables assume a conductor operating at its maximum permitted temperature, so measured cold values must be corrected. A multiplier compensates for the increase in resistance as conductors warm under load. This ensures a fair comparison between measured and tabulated Zs."
  },
  {
    "prompt": "The water heater circuit is wired in 6mm² with a 2.5mm² cpc conductors, and is protected by a 32 A BS 88-2 fuse. What is the maximum permitted measured earth fault loop impedance value for compliance with BS 7671?",
    "options": {
      "A": "1.36 Ω",
      "B": "1.70 Ω",
      "C": "0.99 Ω",
      "D": "0.79 Ω"
    },
    "answer": "C",
    "explanation": "BS 7671 provides specific Zs limits for each protective device type and rating, and 0.99 Ω is the allowable value for this fuse. Staying below this ensures sufficient fault current for correct disconnection. This protects against dangerous shock voltages during an earth fault."
  },
  {
    "prompt": "What is the purpose of the phase-sequence test?",
    "options": {
      "A": "To ensure harmonic currents are not created on the system",
      "B": "To ensure that three-phase motors turn in the correct direction",
      "C": "To ensure balanced loads on the three-phase distribution board",
      "D": "To ensure single-pole protective devices are in the line conductor"
    },
    "answer": "B",
    "explanation": "Three-phase rotation determines motor direction, and incorrect sequence can cause damage or unsafe operation. Verifying phase order prevents reverse running and mechanical hazards. It is essential before energising three-phase equipment."
  }
];

export const electricianTrainingPartPSourceSection = makeSourceSection(
  "section-6-electrician-training-part-p-mock",
  "Section 6 - ElectricianTraining Part P Mock Exam",
  electricianTrainingPartPMockQuestions
);

export const electricianTraining18thEditionSourceSection = makeSourceSection(
  "section-7-electrician-training-18th-mock",
  "Section 7 - ElectricianTraining 18th Edition Mock Exam",
  electricianTraining18thEditionMockQuestions
);

export const electricianTrainingPatSourceSection = makeSourceSection(
  "section-6-electrician-training-pat-mock",
  "Section 6 - ElectricianTraining PAT Mock Exam",
  electricianTrainingPatMockQuestions
);

export const electricianTrainingAm2SourceSection = makeSourceSection(
  "section-8-electrician-training-am2-mock",
  "Section 8 - ElectricianTraining AM2 Mock Exam",
  electricianTrainingAm2MockQuestions
);

export const electricianTraining2391SourceSection = makeSourceSection(
  "section-8-2391-mock",
  "Section 8 - 2391 Mock Exam",
  electricianTraining2391MockQuestions
);
