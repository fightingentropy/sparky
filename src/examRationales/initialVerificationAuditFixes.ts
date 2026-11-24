// Per-option feedback for homework questions corrected after checking them
// against IET Guidance Note 3 (9th edition) and BS 7671:2018+A2:2022.
export const initialVerificationAuditFixes = [
  {
    prompt:
      "Which of the following provides basic protection only, giving no fault protection?",
    options: [
      "Double insulation",
      "Insulation of live parts",
      "Reinforced insulation",
      "SELV",
    ],
    answer: "Insulation of live parts",
    rationales: {
      "Double insulation":
        "Double insulation combines basic insulation with supplementary insulation, and the supplementary layer exists to give fault protection, so it does more than basic protection.",
      "Reinforced insulation":
        "A single application of reinforced insulation provides both basic and fault protection, so it is not a basic-only provision.",
      "SELV":
        "SELV is a complete protective measure that gives both basic and fault protection by limiting the voltage and separating the circuit from other systems.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/1605/protective-measures-special-installations-or-locations-part-1.pdf",
      "https://electrical.theiet.org/media/qxhf2est/guidance-note-3-2022-ninth-edition-first-printing-errata-november-2024.pdf",
    ],
  },
  {
    prompt:
      "Which tests may be performed on an incoming 3 Phase 4 wire live supply?",
    options: [
      "Prospective short circuit current, continuity of mains, polarity.",
      "Prospective Fault Current, External Loop Impedance, Insulation Resistance",
      "Insulation Resistance, Earth Fault Loop Impedance, Phase Rotation",
      "Prospective Fault Current, External Loop Impedance, Phase Rotation",
    ],
    answer: "Prospective Fault Current, External Loop Impedance, Phase Rotation",
    rationales: {
      "Prospective short circuit current, continuity of mains, polarity.":
        "Continuity is a dead test made with a low-resistance ohmmeter on isolated conductors, so it cannot be carried out on a live incoming supply.",
      "Prospective Fault Current, External Loop Impedance, Insulation Resistance":
        "Insulation resistance is measured with the circuit isolated, because an insulation tester must never apply its test voltage to a live supply.",
      "Insulation Resistance, Earth Fault Loop Impedance, Phase Rotation":
        "Earth fault loop impedance and phase rotation are live checks, but insulation resistance is a dead test, so this set cannot all be done on a live supply.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/qxhf2est/guidance-note-3-2022-ninth-edition-first-printing-errata-november-2024.pdf",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
    ],
  },
  {
    prompt:
      "An installer carries out an isolation on a lighting circuit. What should the installer do to stop anyone else switching the circuit back on while the work is carried out?",
    options: [
      "Prove dead at the point of work",
      "Apply a warning notice",
      "Secure the isolation with a padlock",
      "Prevent access to the area.",
    ],
    answer: "Secure the isolation with a padlock",
    rationales: {
      "Prove dead at the point of work":
        "Proving dead confirms the circuit is isolated at that moment, but it does nothing to stop someone else switching it back on afterwards.",
      "Apply a warning notice":
        "A warning notice belongs at the point of isolation alongside the lock, but a notice alone can be ignored or removed and does not physically prevent re-energising.",
      "Prevent access to the area.":
        "Barriers keep other people away from the work area, but they do not stop someone at the distribution board switching the circuit being worked on back on.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/pubns/priced/hsg85.pdf",
      "https://www.hse.gov.uk/pubns/priced/gs38.pdf",
    ],
  },
  {
    prompt:
      "On a three phase installation, a Prospective Fault Current of 3.6kA is measured between L1 and Earth and 4.2kA between L1 and Neutral, using an instrument that cannot measure between line conductors. Using the rule of thumb in Guidance Note 3, the value of PFC to be recorded would be:",
    options: [
      "7.8kA",
      "3.6kA",
      "4.2kA",
      "8.4kA",
    ],
    answer: "8.4kA",
    rationales: {
      "7.8kA":
        "Adding the line-to-earth and line-to-neutral readings together has no basis; instead the larger single-phase value is doubled, giving 8.4kA.",
      "3.6kA":
        "3.6kA is the smaller of the two readings, and the value recorded is never the lower of the short-circuit and earth fault currents.",
      "4.2kA":
        "4.2kA is the larger single-phase reading, but on a three-phase supply the three-phase short-circuit current is larger still, about twice that figure.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/qxhf2est/guidance-note-3-2022-ninth-edition-first-printing-errata-november-2024.pdf",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
    ],
  },
  {
    prompt:
      "In Zone 1 of a room containing a bath or shower, a 230V AC wall mounted extractor fan is:",
    options: [
      "Allowed if it is suitable for zone 1, at least IPX4 and RCD protected",
      "Allowed providing it is rated as SELV and IP4X",
      "Not allowed under any circumstances",
      "Allowed providing it is at least IPX7",
    ],
    answer: "Allowed if it is suitable for zone 1, at least IPX4 and RCD protected",
    rationales: {
      "Allowed providing it is rated as SELV and IP4X":
        "A 230 V fan cannot be SELV, and IP4X only covers solid objects; equipment in zone 1 needs protection against splashing water of at least IPX4.",
      "Not allowed under any circumstances":
        "Ventilation equipment is one of the items of fixed current-using equipment that BS 7671 permits in zone 1, provided it is suitable for that zone.",
      "Allowed providing it is at least IPX7":
        "IPX7 is far more than is required; the minimum degree of protection for equipment installed in zone 1 is IPX4.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/1450/section-701.pdf",
    ],
  },
  {
    prompt:
      "Under what circumstances may a metallic water supply pipe be used as an earth electrode",
    options: [
      "If it is non-metallic",
      "If it is a water utility supply pipe",
      "Not under any circumstances",
      "If it is not the utility's supply pipe, it has been considered for that use and it is protected against removal",
    ],
    answer: "If it is not the utility's supply pipe, it has been considered for that use and it is protected against removal",
    rationales: {
      "If it is non-metallic":
        "A non-metallic pipe cannot carry fault current to earth at all, so it could never act as an earth electrode.",
      "If it is a water utility supply pipe":
        "The metallic pipe of a water utility supply is exactly the pipework that BS 7671 prohibits from being used as an earth electrode.",
      "Not under any circumstances":
        "The ban is not total: water supply pipework other than the utility's pipe may be used once it has been considered for that use and protected against removal.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/earthing-and-bonding-faqs/",
    ],
  },
] as const;
