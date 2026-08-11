import type { ExamQuestionCorrection } from "./types";

const examId = "building-regulations";
const variantId = "building-regulations-homework";

export const buildingRegulationsHomeworkCorrections = [
  {
    examId,
    variantId,
    questionNumber: 1,
    promptSuffix: "The maximum depth of a notch in a wooden joist should be",
    correctedPromptSuffix:
      "Under Approved Document A guidance, what is the maximum notch depth in a solid timber floor joist?",
    options: {
      A: "Between 0.07 and 0.25 × the span",
      B: "0.25 × the joist depth",
      C: "0.125 × the joist depth",
      D: "Between 0.25 and 0.4 × the span",
    },
    explanation:
      "Approved Document A limits a notch to 0.125, or one eighth, of the joist depth. The separate 0.07-0.25 × span figures describe the permitted position of a notch along the joist; they do not calculate how deep it may be.",
  },
  {
    examId,
    variantId,
    questionNumber: 2,
    promptSuffix:
      "Which of these is not a requirement of Regulation 7 of the Building Regulations?",
    correctedPromptSuffix:
      "Which statement is not a requirement of Regulation 7 itself?",
    explanation:
      "Regulation 7 requires adequate and proper materials that are suitable, prepared and used so they perform their intended functions, and it requires work to be carried out in a workmanlike manner. It does not say that only registered competent persons may carry out every item of building work; competence and dutyholder requirements are dealt with separately.",
  },
  {
    examId,
    variantId,
    questionNumber: 3,
    promptSuffix:
      "Approved Document Part E (Resistance to the passage of sound) requires",
    correctedPromptSuffix:
      "Which electrical-accessory detail helps preserve sound insulation in a separating wall under Approved Document E guidance?",
    explanation:
      "Staggering sockets on opposite faces avoids a direct back-to-back weak point through the separating wall. The wall must retain its mass, continuity and acoustic sealing around each box so sound is not given an easy path between the spaces.",
  },
  {
    examId,
    variantId,
    questionNumber: 4,
    promptSuffix: "Which of these is non-notifiable work under Part P?",
    correctedPromptSuffix:
      "Which listed work is non-notifiable under current Part P rules in England?",
    explanation:
      "Connecting an electric gate to an existing isolator is an addition to an existing circuit outside a special location, not the installation of a new circuit. It is therefore non-notifiable, although the work must still comply with Part P and BS 7671 and be properly inspected, tested and certificated.",
  },
  {
    examId,
    variantId,
    questionNumber: 5,
    promptSuffix:
      "Approved documents L1A and L1B do not give guidance on the installation of",
    correctedPromptSuffix:
      "In the former Approved Documents L1A/L1B framework, which installation was not covered by their building-services installation guidance?",
    explanation:
      "The former Part L dwelling guidance and its building-services compliance material covered heat distribution, warm-air heating and micro-CHP performance. It did not serve as an installation guide for solar photovoltaic arrays, whose electrical and product-specific design requirements are addressed by dedicated PV standards and guidance.",
  },
  {
    examId,
    variantId,
    questionNumber: 6,
    promptSuffix:
      "What is the minimum conductor cross sectional area for a radial circuit in a household protected by a 32A overcurrent device?",
    correctedPromptSuffix:
      "In the standard final-circuit arrangements, which copper conductor size is used for a 32 A household radial socket-outlet circuit before project-specific rating factors are applied?",
    options: {
      A: "1.5 mm²",
      B: "4.0 mm²",
      C: "2.5 mm²",
      D: "0.75 mm²",
    },
    explanation:
      "The standard 32 A radial socket-outlet arrangement uses 4.0 mm² copper conductors. That is a starting arrangement, not a universal design result: the designer must still verify current-carrying capacity after installation and grouping factors, voltage drop, fault protection and the actual load.",
  },
  {
    examId,
    variantId,
    questionNumber: 7,
    promptSuffix:
      "Which of these cable installation methods has the highest maximum current carrying capacity (Iz)?",
    correctedPromptSuffix:
      "For otherwise comparable cable construction and conductor size, which listed reference method normally gives the greatest tabulated current-carrying capacity?",
    options: {
      A: "Reference method C",
      B: "Reference method 100",
      C: "Reference method 103",
      D: "Reference method A",
    },
    answer: "A",
    explanation:
      "Reference method C is a clipped-direct arrangement in which the cable can lose heat to the surrounding air and mounting surface. The listed methods involving an insulated wall, conduit or thermal insulation retain more heat, so their tabulated current-carrying capacities are lower for the same cable.",
  },
  {
    examId,
    variantId,
    questionNumber: 8,
    promptSuffix:
      "An EV charging point can be connected to a PME supply, as long as one of the four provisions of Regulation: 722.411.4.1 are met, or, what else?",
    correctedPromptSuffix:
      "If the conditions permitting direct connection to PME in Regulation 722.411.4.1 are not used, which alternative protective measure can supply an EV charging point?",
    options: {
      C: "A 25 mm² bonding conductor is connected to all extraneous-conductive-parts",
    },
    explanation:
      "Electrical separation can be provided by a dedicated isolation transformer arranged for the charging point. The separated circuit is not reliant on the PME terminal, so an open PEN conductor on the public supply cannot raise the vehicle body through that earthing connection.",
  },
  {
    examId,
    variantId,
    questionNumber: 9,
    promptSuffix:
      "It is necessary to notify the relevant building control body before the work begins if the work is",
    correctedPromptSuffix:
      "For notifiable Part P work, which route requires a building control body to be notified directly before work begins?",
    options: {
      A: "Neither self-certification nor an appointed third-party certification route will be used",
      B: "A registered third-party certifier is appointed before work begins",
      C: "The work is non-notifiable",
      D: "A registered competent enterprise will self-certify the work",
    },
    explanation:
      "Where neither an authorised self-certification scheme nor an appointed third-party certifier is being used, the direct building-control route requires notice or an application before notifiable work starts. A third-party certifier must instead be appointed before work begins, while a registered competent enterprise notifies through its scheme after self-certifying the completed work.",
  },
  {
    examId,
    variantId,
    questionNumber: 10,
    promptSuffix:
      "What is the minimum intermittent extract fan ventilation rate in a kitchen adjacent to a hob?",
    correctedPromptSuffix:
      "What is the minimum intermittent extract rate for a cooker hood that extracts to outside and is adjacent to the hob?",
    options: {
      A: "30 litres per second",
      B: "60 litres per second",
      C: "6 litres per second",
      D: "15 litres per second",
    },
    explanation:
      "Approved Document F specifies 30 litres per second for an intermittent cooker hood extracting to outside because capture at the hob is efficient. A kitchen extract positioned elsewhere requires 60 litres per second; 15 litres per second is the bathroom rate and 6 litres per second is the sanitary-accommodation rate.",
  },
  {
    examId,
    variantId,
    questionNumber: 11,
    promptSuffix:
      "Which approved document requires sufficient means for giving early warning of fire?",
    correctedPromptSuffix:
      "Which Approved Document gives guidance on the requirement for sufficient early warning of fire?",
    explanation:
      "Approved Document B covers fire safety. Its guidance for Requirement B1 includes automatic fire detection and alarm provision so occupants receive warning early enough to use the available escape route.",
  },
  {
    examId,
    variantId,
    questionNumber: 12,
    promptSuffix:
      "The statement is a requirement of which Approved Document? The building shall be designed and constructed so that there are appropriate provisions for the early warning of fire?",
    correctedPromptSuffix:
      "Which Approved Document supports the requirement that a building provide appropriate early warning of fire and usable means of escape?",
    explanation:
      "This is Requirement B1, Means of warning and escape, so the supporting statutory guidance is Approved Document B. Part B deals with fire detection, warning and escape rather than ventilation, structure or access.",
  },
  {
    examId,
    variantId,
    questionNumber: 13,
    promptSuffix: "Which of these is notifiable under Part P?",
    correctedPromptSuffix:
      "Which listed work is notifiable in England under current Part P rules?",
    explanation:
      "Installing a new outdoor lighting circuit is notifiable because it is a new circuit; crossing the garden does not create a separate notification category. The other examples describe maintenance or additions to an existing circuit outside the defined special-location zone and are therefore non-notifiable, while still subject to Part P and BS 7671.",
  },
  {
    examId,
    variantId,
    questionNumber: 14,
    promptSuffix:
      "A way of satisfying the requirements of approved document M is to install switches at a height",
    correctedPromptSuffix:
      "In a new dwelling, which mounting-height band follows the general Approved Document M guidance for switches, sockets and similar controls in habitable rooms?",
    options: {
      A: "Between 1350 mm and 1450 mm above floor level",
      B: "Below 450 mm",
      C: "Between 25 mm and 600 mm below the ceiling",
      D: "Between 450 mm and 1200 mm above finished floor level",
    },
    explanation:
      "Approved Document M places switches, socket outlets and similar controls in habitable rooms between 450 mm and 1200 mm above finished floor level so they are within a practical reach range. Specific equipment can have separate guidance, but the other listed bands do not state this general provision.",
  },
  {
    examId,
    variantId,
    questionNumber: 15,
    promptSuffix:
      "What is the minimum spacing for gas installation pipework from an electricity meter?",
    correctedPromptSuffix:
      "Where no electrically insulating separation is installed, what minimum clearance should domestic gas installation pipework have from an electricity meter?",
    options: {
      A: "500 mm",
      B: "25 mm",
      C: "150 mm",
      D: "300 mm",
    },
    explanation:
      "Gas installation pipework should be at least 150 mm from an electricity meter or comparable electrical apparatus when no electrically insulating separation is provided. The smaller 25 mm figure applies to separation from electricity supply and distribution cables, not to the meter itself.",
  },
  {
    examId,
    variantId,
    questionNumber: 16,
    promptSuffix: "Vertical chases must",
    correctedPromptSuffix:
      "Under Approved Document A guidance for masonry walls, a vertical chase must",
    explanation:
      "A vertical chase must not be deeper than one third of the wall leaf thickness. A vertical chase follows the main load path and may therefore be deeper than a horizontal chase, but the one-third limit preserves enough masonry for structural stability.",
  },
  {
    examId,
    variantId,
    questionNumber: 17,
    promptSuffix: "Heat detectors should be mounted",
    correctedPromptSuffix:
      "On a peaked or sloping ceiling, where should a heat detector's sensing element be positioned relative to the apex?",
    options: {
      A: "Directly above an air-conditioning outlet",
      B: "Between 25 mm and 600 mm vertically below the apex",
      C: "Between 25 mm and 150 mm vertically below the apex",
      D: "Exactly 500 mm from every wall",
    },
    explanation:
      "For a peaked or sloping ceiling, the heat-sensing element is positioned between 25 mm and 150 mm vertically below the apex so rising hot gases reach it promptly. The wider 600 mm limit is associated with smoke detection, and air-conditioning outlets can divert heat away from a detector.",
  },
  {
    examId,
    variantId,
    questionNumber: 18,
    promptSuffix: "Part P does not apply to electrical installations",
    correctedPromptSuffix:
      "Under Part P in England, which listed electrical installation is outside its scope?",
    options: {
      C: "In business premises in the same building as a dwelling but supplied entirely separately from it",
    },
    explanation:
      "Part P does not extend to the separately supplied business installation merely because it occupies the same building as a dwelling. It does cover fixed installations in a dwelling's associated land and outbuildings, and installations in common access areas serving flats.",
  },
  {
    examId,
    variantId,
    questionNumber: 19,
    promptSuffix:
      "In order to comply with the requirements of Approved Document Part C, persons carrying out electrical work in new buildings should",
    correctedPromptSuffix:
      "Which action supports compliance with Approved Document C when electrical cables enter a new building?",
    explanation:
      "Cable entries and ducts should be sealed so they do not create a path for ground moisture, water or contaminating gases to enter the building. This preserves the resistance to moisture and contaminants addressed by Part C while also protecting the electrical installation.",
  },
  {
    examId,
    variantId,
    questionNumber: 20,
    promptSuffix:
      "Electrical testing should be carried out in the correct sequence. Which of the following is classed as the first live test?",
    correctedPromptSuffix:
      "Which listed verification is carried out live at the origin as part of initial verification?",
    explanation:
      "Supply polarity at the origin can only be confirmed with the incoming supply energised, although circuit polarity is first proved by dead inspection and testing. Ring-final continuity, insulation resistance and continuity of protective conductors are all completed with the installation isolated before live verification begins.",
  },
] as const satisfies readonly ExamQuestionCorrection[];
