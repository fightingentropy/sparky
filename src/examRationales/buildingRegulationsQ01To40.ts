const APPROVED_DOCUMENTS =
  "https://www.gov.uk/government/collections/approved-documents";
const APPROVED_DOCUMENT_A =
  "https://www.gov.uk/government/collections/approved-document-a-structure-and-associated-documents";
const APPROVED_DOCUMENT_B =
  "https://www.gov.uk/government/publications/fire-safety-approved-document-b";
const APPROVED_DOCUMENT_E =
  "https://www.gov.uk/government/publications/resistance-to-sound-approved-document-e";
const APPROVED_DOCUMENT_F =
  "https://www.gov.uk/government/publications/approved-document-f-2026";
const APPROVED_DOCUMENT_L =
  "https://www.gov.uk/government/publications/approved-document-l-2026";
const APPROVED_DOCUMENT_M =
  "https://www.gov.uk/government/publications/access-to-and-use-of-buildings-approved-document-m";
const APPROVED_DOCUMENT_P =
  "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/441872/BR_PDF_AD_P_2013.pdf";
const BUILDING_REGULATIONS_SCHEDULE_2 =
  "https://www.legislation.gov.uk/uksi/2010/2214/schedule/2";
const IET_PART_P_FAQS =
  "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/building-regulations/part-p-england-and-wales/frequently-asked-questions/";
const IET_CERTIFICATION_SCHEMES =
  "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/building-regulations/part-p-england-and-wales/certification-schemes/";
const IET_INSPECTION_FAQS =
  "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/";
const IET_PUBLICATIONS =
  "https://electrical.theiet.org/guidance-and-codes-of-practice/publications-by-category/bs-7671-and-guidance/";

export const buildingRegulationsQ01To40 = [
  {
    prompt:
      "Part 'A' of the building, states that horizontal chases should not be deeper than:",
    options: [
      "One eighth the wall thickness",
      "One quarter the wall thickness",
      "One sixth the wall thickness",
      "One third the wall thickness"
    ],
    answer: "One sixth the wall thickness",
    rationales: {
      "One eighth the wall thickness":
        "One eighth is a more conservative cut, but it is not the maximum in Approved Document A. A horizontal chase may be up to one sixth of the wall leaf thickness.",
      "One quarter the wall thickness":
        "One quarter is 50% deeper than the one-sixth horizontal limit. Removing that much of a continuous horizontal band can materially weaken the masonry leaf.",
      "One third the wall thickness":
        "One third is the separate limit for a vertical chase. A horizontal chase cuts across more of the wall's load path and is restricted to one sixth."
    },
    sourceUrls: [APPROVED_DOCUMENT_A]
  },
  {
    prompt:
      "Under current Approved Document L, what is required of fixed lighting in a new dwelling?",
    options: [
      "Every bedroom must have one low-energy pendant",
      "At least three low-energy pendants must be installed",
      "Every fixed light must use exactly the same lamp type",
      "The installed fixed lighting must meet the current efficacy and control requirements"
    ],
    answer:
      "The installed fixed lighting must meet the current efficacy and control requirements",
    rationales: {
      "Every bedroom must have one low-energy pendant":
        "Approved Document L does not assign one pendant to each bedroom. It assesses the performance and control of the fixed lighting that the design actually provides.",
      "At least three low-energy pendants must be installed":
        "There is no current three-pendant quota. A compliant scheme may use different numbers and types of luminaires provided the installed lighting meets the required performance.",
      "Every fixed light must use exactly the same lamp type":
        "Uniform lamp type is not required. Different suitable light sources may be used where their efficacy, controls and installation satisfy the current energy-efficiency guidance."
    },
    sourceUrls: [APPROVED_DOCUMENT_L]
  },
  {
    prompt:
      "For an accessible and adaptable dwelling, which listed height is within the 900-1200 mm band for a central-heating thermostat?",
    options: ["1100mm", "1250mm", "1400mm", "800mm"],
    answer: "1100mm",
    rationales: {
      "1250mm":
        "For an accessible and adaptable dwelling, Approved Document M places boiler timer controls and thermostats in the 900-1200 mm band. At 1250 mm this option is above that band.",
      "1400mm":
        "A control at 1400 mm can be difficult to reach from a seated position and is 200 mm above the M4(2) thermostat maximum of 1200 mm.",
      "800mm":
        "Eight hundred millimetres is below the 900 mm lower edge given for boiler controls and thermostats in M4(2) and M4(3) dwellings. The keyed 1100 mm lies within that accessible range."
    },
    sourceUrls: [APPROVED_DOCUMENT_M]
  },
  {
    prompt: "Part 'E' of the building regulations, does NOT cover:",
    options: [
      "An Internal wall which separates a bedroom from a family bathroom",
      "An Internal wall which separates a room containing a WC from a hallway",
      "An Internal wall which separates an en-suite bathroom from the associated bedroom",
      "An internal wall separating two bedrooms"
    ],
    answer:
      "An Internal wall which separates an en-suite bathroom from the associated bedroom",
    rationales: {
      "An Internal wall which separates a bedroom from a family bathroom":
        "Requirement E2 expressly covers an internal wall between a bedroom and another room, unless a stated limitation such as a door in the wall applies. A family bathroom is not the associated en-suite exception.",
      "An Internal wall which separates a room containing a WC from a hallway":
        "E2 also names walls between a room containing a WC and another room. A hallway does not turn that WC boundary into the specific en-suite-to-associated-bedroom exemption.",
      "An internal wall separating two bedrooms":
        "A wall between two bedrooms is exactly the kind of internal separating wall addressed by Requirement E2. It does not fall within the associated en-suite limitation."
    },
    sourceUrls: [APPROVED_DOCUMENT_E]
  },
  {
    prompt: "Part 'A' of the building regulations, Does NOT cover:",
    options: [
      "The foundations",
      "The roof covering",
      "The size of the floor joist",
      "The type of windows"
    ],
    answer: "The type of windows",
    rationales: {
      "The foundations":
        "Foundations transfer building loads safely to the ground, so their size, depth and stability are core Part A structural matters.",
      "The roof covering":
        "Roof coverings contribute dead load and wind loading that the roof structure must safely carry. Their weather resistance also engages Part C, but that does not remove the structural loading issue from Part A.",
      "The size of the floor joist":
        "Joist span and cross-section determine a floor's strength and deflection. Selecting an adequate floor joist size is therefore directly within Part A."
    },
    sourceUrls: [APPROVED_DOCUMENT_A]
  },
  {
    prompt:
      "Part 'P' of the building regulations, Came into force on 1st January, in which year?",
    options: ["2003", "2004", "2005", "2006"],
    answer: "2005",
    rationales: {
      "2003":
        "The electrical-safety requirement had not yet commenced in 2003. Part P was published later and its operative date was 1 January 2005.",
      "2004":
        "Part P was developed and published during 2004, but publication is not its commencement date. Domestic electrical work came within Part P on 1 January 2005.",
      "2006":
        "A revised Approved Document P appeared in 2006, which can cause this confusion. The underlying Part P requirement had already taken effect a year earlier."
    },
    sourceUrls: [IET_PART_P_FAQS]
  },
  {
    prompt: "How many alphabetical Parts are there to the building regulations?",
    options: ["10", "12", "18", "16"],
    answer: "18",
    rationales: {
      "10":
        "Ten omits eight current technical headings, including access, electrical safety, overheating, infrastructure and security-related Parts.",
      "12":
        "Twelve reflects only part of the current set. England now has lettered technical requirements A-H, J-M and O-T, totalling eighteen.",
      "16":
        "Sixteen misses two of the current lettered headings. Counting A-H, J-M and O-T gives eighteen, with I and N absent as standalone Parts."
    },
    sourceUrls: [APPROVED_DOCUMENTS]
  },
  {
    prompt:
      "What typical maximum Ze value is commonly used for TN-S design when distributor data is unavailable?",
    options: ["0.03Ω", "0.80Ω", "100Ω", "35Ω"],
    answer: "0.80Ω",
    rationales: {
      "0.03Ω":
        "A Ze of 0.03 Ω would be unusually low and is not the standard design value for a public TN-S service. The commonly quoted typical maximum is 0.8 Ω.",
      "100Ω":
        "One hundred ohms is in the range associated with an earth electrode discussion, not a metallic TN-S return path. It would not support the expected TN fault current for ordinary overcurrent protection.",
      "35Ω":
        "The familiar TN-C-S design figure is 0.35 Ω, not 35 Ω, and this question states TN-S. For TN-S the guidance figure is 0.8 Ω, subject to confirmation from the DNO or measurement."
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/earthing-and-bonding-faqs/",
      "https://electrical.theiet.org/wiring-matters/years/2018/72-september-2018/earth-fault-loop-impedance-revision-of-ena-engineering-recommendation-p23/"
    ]
  },
  {
    prompt:
      "Which of the alphabetical parts of the building regulations would apply to the domestic electrical installer:",
    options: ["Part H", "Part J", "Part K", "Part P"],
    answer: "Part P",
    rationales: {
      "Part H":
        "Part H concerns drainage and waste disposal. Electrical work can interact with pumps or controls, but H is not the domestic electrical-safety Part.",
      "Part J":
        "Part J covers combustion appliances and fuel-storage systems. It may affect boiler work, yet the fixed electrical installation in a dwelling is addressed directly by Part P.",
      "Part K":
        "Part K deals with protection from falling, collision and impact, including stairs and glazing. It is not the principal requirement governing domestic wiring safety."
    },
    sourceUrls: [APPROVED_DOCUMENTS, APPROVED_DOCUMENT_P]
  },
  {
    prompt:
      "Which feature should mains-operated smoke alarms in a new dwelling include?",
    options: [
      "A Smoke alarm no more than 2m from all bedroom doors",
      "Battery back up Smoke alarms",
      "One Smoke alarm",
      "Smoke alarms permanently wired from a local lightning circuit"
    ],
    answer: "Battery back up Smoke alarms",
    rationales: {
      "A Smoke alarm no more than 2m from all bedroom doors":
        "Approved Document B does not create a universal two-metre-from-every-bedroom-door rule. It specifies an alarm-system category and coverage of circulation spaces, with siting governed by the relevant alarm standard.",
      "One Smoke alarm":
        "A single alarm cannot necessarily provide LD3 coverage on every relevant circulation space or storey. The required system is determined by the dwelling layout, not a blanket count of one.",
      "Smoke alarms permanently wired from a local lightning circuit":
        "The wording is overly specific: mains alarms may use a regularly used lighting circuit or a dedicated circuit. Whichever supply is chosen, the distinct requirement tested here is a standby power supply."
    },
    sourceUrls: [APPROVED_DOCUMENT_B]
  },
  {
    prompt:
      "A passive stack would come under which Part of the building regulations:",
    options: ["Part A", "Part C", "Part F", "Part H"],
    answer: "Part F",
    rationales: {
      "Part A":
        "Part A is structural guidance. A stack opening may need structural detailing, but the system's function—removing stale or moist air—is ventilation.",
      "Part C":
        "Part C addresses site contaminants and resistance to moisture in the building fabric. It does not set the airflow provision for a passive ventilation stack.",
      "Part H":
        "Part H governs drainage and waste disposal. Despite the word 'stack', a passive ventilation stack carries air rather than foul water or rainwater."
    },
    sourceUrls: [APPROVED_DOCUMENT_F]
  },
  {
    prompt: "How many parts to schedule two of the building regulations:",
    options: ["5", "6", "7", "10"],
    answer: "7",
    rationales: {
      "5":
        "Five stops before Schedule 2's final two exemption classes. The schedule continues through Class 7.",
      "6":
        "Six omits the final class for extensions, alterations and related work. Schedule 2 contains seven numbered classes, although the prompt calls them parts.",
      "10":
        "Ten confuses the number of individual examples or subparagraphs with the top-level structure. The exempt-building schedule is organised into Classes 1 to 7."
    },
    sourceUrls: [BUILDING_REGULATIONS_SCHEDULE_2]
  },
  {
    prompt:
      "Part 'A' of the building regulations, states that Vertical chases should not be deeper than:",
    options: [
      "One eighth the wall thickness",
      "One quarter the wall thickness",
      "One sixth the wall thickness",
      "One third the wall thickness"
    ],
    answer: "One third the wall thickness",
    rationales: {
      "One eighth the wall thickness":
        "One eighth is shallower than necessary and is not the stated maximum. Approved Document A permits a vertical chase up to one third of the wall leaf thickness.",
      "One quarter the wall thickness":
        "A quarter-depth vertical chase remains within the maximum, but the question asks for the limit rather than a conservative design depth.",
      "One sixth the wall thickness":
        "One sixth is the maximum for a horizontal chase. A vertical chase follows rather than cuts across the main vertical load path, so its separate limit is one third."
    },
    sourceUrls: [APPROVED_DOCUMENT_A]
  },
  {
    prompt:
      "Which of the following would need be notified to the building control:",
    options: [
      "Installing a new circuit for central-heating controls",
      "Installing wall lights to a lounge",
      "Replacing a damaged socket outlet in a kitchen",
      "Upgrading the main Equipotential bonding conductors"
    ],
    answer: "Installing a new circuit for central-heating controls",
    rationales: {
      "Installing wall lights to a lounge":
        "Adding wall lights to an existing lounge circuit is an addition outside a special location and is not notifiable under current Part P. It becomes notifiable if the job actually creates a new circuit.",
      "Replacing a damaged socket outlet in a kitchen":
        "Like-for-like replacement of a damaged accessory is maintenance, and kitchens ceased to be a Part P special location in England in 2013. The replacement must still comply with Part P and BS 7671.",
      "Upgrading the main Equipotential bonding conductors":
        "Improving bonding on an existing installation does not by itself create a new circuit or replace a consumer unit and is outside the current notification categories. It still requires appropriate verification and certification."
    },
    sourceUrls: [APPROVED_DOCUMENT_P, IET_PART_P_FAQS]
  },
  {
    prompt:
      "Which item is clearly not part of a dwelling's fixed electrical installation under Part P?",
    options: [
      "A new low-voltage garden-lighting circuit",
      "A new micro-CHP generator supply circuit",
      "A new solar photovoltaic supply circuit",
      "A self-contained solar garden light with no fixed wiring"
    ],
    answer: "A self-contained solar garden light with no fixed wiring",
    rationales: {
      "A new low-voltage garden-lighting circuit":
        "The voltage does not make the fixed wiring disappear. A new circuit connected to the dwelling's electrical installation remains fixed installation work and is notifiable.",
      "A new micro-CHP generator supply circuit":
        "This circuit connects generation equipment to the fixed installation through protective and control equipment. It is new fixed electrical work, not standalone portable equipment.",
      "A new solar photovoltaic supply circuit":
        "A PV system includes fixed DC wiring, an inverter and a fixed AC connection. Its new supply circuit is part of the dwelling's electrical installation."
    },
    sourceUrls: [APPROVED_DOCUMENT_P, IET_PART_P_FAQS]
  },
  {
    prompt: "Which of the following is NOT a special location:",
    options: [
      "A cloakroom",
      "A hot air sauna",
      "A paddling pool",
      "A wet room"
    ],
    answer: "A cloakroom",
    rationales: {
      "A hot air sauna":
        "Hot-air saunas are covered by the particular requirements in BS 7671 Section 703 because heat, perspiration and restricted conditions increase risk.",
      "A paddling pool":
        "Section 702 expressly covers swimming pools, paddling pools and their surrounding zones. Immersion and wet bare skin materially increase shock risk.",
      "A wet room":
        "A wet room containing a fixed shower includes the bath-or-shower zones treated as a special location. The name alone is insufficient only if no bath or shower is actually present."
    },
    sourceUrls: [APPROVED_DOCUMENT_P, IET_PART_P_FAQS]
  },
  {
    prompt:
      "Which option is an electric floor-heating system covered by BS 7671 Section 753?",
    options: [
      "Electric economy night storage heaters",
      "Electric underfloor heating in a conservatory",
      "Lighting within a detached garage",
      "Patio heaters"
    ],
    answer: "Electric underfloor heating in a conservatory",
    rationales: {
      "Electric economy night storage heaters":
        "Storage heaters are fixed loads, but they are not themselves a Part 7 special installation. Their circuits are designed by the ordinary requirements for load, cable and protection.",
      "Lighting within a detached garage":
        "Part P can extend to an associated detached garage, but location in an outbuilding does not make an ordinary lighting circuit a BS 7671 special installation.",
      "Patio heaters":
        "Outdoor equipment needs suitable environmental protection and circuit design, yet a patio heater is not the floor-and-ceiling heating system identified in BS 7671 Section 753."
    },
    sourceUrls: [IET_PART_P_FAQS, IET_PUBLICATIONS]
  },
  {
    prompt:
      "Which item is a fixed-appliance isolator rather than a general-purpose socket or communication control?",
    options: [
      "2amp lighting sockets",
      "Cooker switch",
      "Door Bell Push switches",
      "Telephone Sockets"
    ],
    answer: "Cooker switch",
    rationales: {
      "2amp lighting sockets":
        "A 2 A lighting socket is a socket-outlet connection point, not an isolating control dedicated to a fixed cooking appliance.",
      "Door Bell Push switches":
        "A doorbell push is a user communication control. It signals a bell or entry system and does not isolate a fixed appliance circuit.",
      "Telephone Sockets":
        "A telephone socket is a communications outlet. It neither switches nor provides isolation for a fixed cooking appliance."
    },
    sourceUrls: [APPROVED_DOCUMENT_M]
  },
  {
    prompt:
      "Which 12 V lighting job is clearly not work on a dwelling's fixed electrical installation?",
    options: [
      "Using a self-contained plug-in lighting kit with no fixed wiring",
      "Installing a new fixed SELV lighting circuit in an adapted dwelling",
      "Installing fixed recessed lights while preserving Parts B and C",
      "Installing fixed recessed lights with suitable fire hoods"
    ],
    answer: "Using a self-contained plug-in lighting kit with no fixed wiring",
    rationales: {
      "Installing a new fixed SELV lighting circuit in an adapted dwelling":
        "SELV reduces shock risk, but its fixed cables, power source and luminaires still form part of the electrical installation. The occupant's needs do not change that classification.",
      "Installing fixed recessed lights while preserving Parts B and C":
        "Meeting fire and moisture requirements is necessary where relevant, but the recessed luminaires and their wiring remain fixed electrical work.",
      "Installing fixed recessed lights with suitable fire hoods":
        "Fire hoods can help maintain a ceiling's fire performance. They do not turn fixed wiring and fixed luminaires into portable equipment."
    },
    sourceUrls: [APPROVED_DOCUMENT_P, IET_PART_P_FAQS]
  },
  {
    prompt:
      "Which of the following rooms would require the largest ventilations fan:",
    options: [
      "A bathroom",
      "A garage",
      "A kitchen",
      "A room for light smoking"
    ],
    answer: "A kitchen",
    rationales: {
      "A bathroom":
        "A bathroom's benchmark intermittent extract rate is 15 litres per second. A kitchen requires 30 litres per second adjacent to the hob or 60 litres per second elsewhere.",
      "A garage":
        "Approved Document F's domestic wet-room extract table does not assign an ordinary garage a larger intermittent fan than a kitchen. Vehicle-fume control instead depends on the garage's specific design and use.",
      "A room for light smoking":
        "A room used for light smoking may justify additional ventilation by risk assessment, but it is not the domestic room with the prescribed 30/60 litres-per-second extract provision."
    },
    sourceUrls: [APPROVED_DOCUMENT_F]
  },
  {
    prompt:
      "A 2.5mm² radial socket outlet circuit spans no more than 50 m² floor surface. The protective device fitted should be rated at?",
    options: ["20A", "230A", "2A", "32A"],
    answer: "20A",
    rationales: {
      "230A":
        "A 230 A device would provide no credible overload protection for 2.5 mm² cable; 230 V is the nominal supply voltage and appears to have been confused with current.",
      "2A":
        "Two amperes would protect the conductor but would make a socket circuit unusable for normal 13 A appliances. It is not a standard domestic final-circuit arrangement.",
      "32A":
        "Thirty-two amperes is the conventional rating for a 2.5 mm² ring final circuit, where two legs share load. A standard 2.5 mm² radial serving up to 50 m² uses 20 A protection."
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/1701/the-domestic-installer-part-p.pdf",
      IET_PUBLICATIONS
    ]
  },
  {
    prompt: "For the purposes of equipotential bonding, earth clamps should be?",
    options: [
      "BS591 clamps with a warning label",
      "BS591 clamps without a warning label",
      "BS951 clamps with a warning label",
      "Manufactured from 100% aluminium"
    ],
    answer: "BS951 clamps with a warning label",
    rationales: {
      "BS591 clamps with a warning label":
        "BS 591 is not the product standard for earthing and bonding clamps. Adding a warning label cannot make a clamp manufactured to the wrong standard suitable.",
      "BS591 clamps without a warning label":
        "This choice fails twice: BS 591 is the wrong clamp reference and omitting the safety notice removes the warning against accidental disconnection.",
      "Manufactured from 100% aluminium":
        "Material composition alone proves neither mechanical security nor corrosion performance on service pipework. A purpose-made BS 951 clamp and the prescribed label are required."
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/1526/protective-equipotential-bonding.pdf"
    ]
  },
  {
    prompt: "The Requirements for Electrical Installations is published by the IET and is?",
    options: [
      "A British Standard code of practice",
      "A legally binding publication",
      "A statutory document",
      "To be used by supervisors only"
    ],
    answer: "A British Standard code of practice",
    rationales: {
      "A legally binding publication":
        "BS 7671 is not itself legislation. Contracts, regulations or enforcement evidence may give compliance with it legal significance, but the publication does not independently bind every installer as an Act would.",
      "A statutory document":
        "A statutory document is made under legislative authority, such as the Electricity at Work Regulations. BS 7671 is a non-statutory British Standard used to demonstrate good electrical-safety practice.",
      "To be used by supervisors only":
        "The requirements apply to design, erection, verification and maintenance, so designers, installers and inspectors all use them. They are not restricted to a supervisory job title."
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2017/67-september-2017/statutory-and-non-statutory-documents-applicable-to-the-electrical-industry/",
      IET_PUBLICATIONS
    ]
  },
  {
    prompt:
      "When referring to special locations, the connection between extraneous conductors and CPC is known as?",
    options: [
      "Additional protection",
      "Main equipotential bonding",
      "Special location bonding",
      "Supplementary bonding"
    ],
    answer: "Supplementary bonding",
    rationales: {
      "Additional protection":
        "Additional protection usually describes a 30 mA RCD or supplementary protective equipotential bonding as a protective measure; it is not the name of the bonding connection itself.",
      "Main equipotential bonding":
        "Main protective bonding connects incoming extraneous-conductive-parts to the main earthing terminal for the installation. A local connection to CPCs within a location is supplementary bonding.",
      "Special location bonding":
        "'Special location bonding' is not the defined BS 7671 term. Where the local connection is required, it is called supplementary protective equipotential bonding."
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2019/76-july-2019/protective-bonding-habits/"
    ]
  },
  {
    prompt:
      "During initial verification, copies of certificates containing all necessary information can be found in?",
    options: ["EAWR", "GS38", "HSG141", "The On-Site Guide"],
    answer: "The On-Site Guide",
    rationales: {
      EAWR:
        "The Electricity at Work Regulations 1989 set legal duties for safe systems and work activities. They do not reproduce the BS 7671 model installation certificates and schedules.",
      GS38:
        "GS38 is HSE guidance on electrical test equipment, probes and leads used by electricians. It is not a collection of installation certificate forms.",
      HSG141:
        "HSG141 deals with electrical safety on construction sites, including risk control and temporary supplies. It does not provide the model forms for certifying a completed BS 7671 installation."
    },
    sourceUrls: [
      IET_PUBLICATIONS,
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/model-forms/",
      "https://www.hse.gov.uk/pubns/books/hsg141.htm"
    ]
  },
  {
    prompt:
      "If a ring final socket outlet circuit is protected by a 32A MCB, it should be supplied with?",
    options: [
      "1.0 mm² cable",
      "2.5 mm² cable",
      "6.0 mm² cable",
      "6.5 mm² cable"
    ],
    answer: "2.5 mm² cable",
    rationales: {
      "1.0 mm² cable":
        "A 1.0 mm² conductor does not have the conventional capacity required for each leg of a 32 A ring final circuit and would be vulnerable to overload if ring continuity were impaired.",
      "6.0 mm² cable":
        "Six square millimetres can carry more current but is not the standard ring-final arrangement being tested. Its size, cost and termination difficulty are unnecessary for the stated conventional circuit.",
      "6.5 mm² cable":
        "6.5 mm² is not a normal harmonised fixed-wiring conductor size in the standard circuit tables. It also bears no relationship to the familiar 2.5 mm² ring arrangement."
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2024/103-november-2024/mythbuster-11-adapting-for-change/"
    ]
  },
  {
    prompt:
      "Who has the right to self-certify their work complies with Building Regulations?",
    options: [
      "Builders",
      "An installer registered with an authorised Competent Person Scheme",
      "JIB Registered electricians",
      "Unqualified installers"
    ],
    answer: "An installer registered with an authorised Competent Person Scheme",
    rationales: {
      Builders:
        "Being a builder does not confer an electrical self-certification route. The firm must be registered for the relevant work under an authorised Competent Person Scheme.",
      "JIB Registered electricians":
        "JIB grading demonstrates an employment and competence status, but it is not Building Regulations scheme registration. A JIB electrician still needs the registered CPS route or Building Control certification.",
      "Unqualified installers":
        "An unqualified or unregistered installer cannot simply declare notifiable work compliant. The alternatives are prior Building Control involvement or certification through the permitted registered third-party process."
    },
    sourceUrls: [IET_CERTIFICATION_SCHEMES, APPROVED_DOCUMENT_P]
  },
  {
    prompt: "It is important to consider 'special locations' because?",
    options: [
      "Electrical installations are more common in these areas",
      "There is a higher risk in these areas",
      "There is always water in these areas",
      "They are more accessible to the public"
    ],
    answer: "There is a higher risk in these areas",
    rationales: {
      "Electrical installations are more common in these areas":
        "Frequency of electrical equipment does not define a special location. The classification exists because environmental or use conditions change the severity or likelihood of electric shock and other hazards.",
      "There is always water in these areas":
        "Some special locations involve water, but others include hot-air saunas, construction sites, medical locations and restricted conductive spaces. Water is therefore not universal.",
      "They are more accessible to the public":
        "Public access can matter in some installations, yet private bathrooms and domestic saunas are still special locations. The common factor is increased risk, not public availability."
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/1605/protective-measures-special-installations-or-locations-part-1.pdf",
      IET_PUBLICATIONS
    ]
  },
  {
    prompt: "A common installation method for lighting circuits is known as?",
    options: ["Loop around", "Loop circuit", "Loop in", "Loop out"],
    answer: "Loop in",
    rationales: {
      "Loop around":
        "'Loop around' is not the established name for the topology. The permanent supply is looped into successive roses, fittings or switch boxes.",
      "Loop circuit":
        "'Loop circuit' could describe a closed ring and is too imprecise for the common radial lighting method. Domestic lighting is commonly described as loop-in wiring.",
      "Loop out":
        "A cable may loop out of an individual point to the next, but that does not name the overall method. The conventional system is called the loop-in method."
    },
    sourceUrls: [
      "https://engx.theiet.org/f/wiring-and-regulations/22107/loop-in-method-for-lighting-circuits/75505",
      IET_PUBLICATIONS
    ]
  },
  {
    prompt:
      "Recommendations for standard final circuit arrangements for domestic power circuits can be found in?",
    options: [
      "The current BS 7671 and IET On-Site Guide",
      "HSE guidance notes",
      "IET email bulletins",
      "NICEIC leaflets"
    ],
    answer: "The current BS 7671 and IET On-Site Guide",
    rationales: {
      "HSE guidance notes":
        "HSE explains legal duties and safe working practice, not the detailed standard arrangements for conductor size, circuit rating and served floor area.",
      "IET email bulletins":
        "An email bulletin can announce changes or training, but it is not a controlled technical reference for final-circuit design. The published standard and its On-Site Guide are the maintained sources.",
      "NICEIC leaflets":
        "Trade-body leaflets may summarise good practice, but they do not replace BS 7671 or the IET design tables. A standard circuit should be checked against the normative and official guidance publications."
    },
    sourceUrls: [IET_PUBLICATIONS]
  },
  {
    prompt:
      "What is the principle purpose of Part E of the Building Regulations?",
    options: [
      "Regulations concerning fire safety",
      "Regulations concerning sound insulation",
      "Regulations concerning thermal insulation",
      "Regulations concerning ventilation"
    ],
    answer: "Regulations concerning sound insulation",
    rationales: {
      "Regulations concerning fire safety":
        "Fire detection, escape, compartmentation and fire spread are Part B subjects. Part E concerns resistance to the passage of sound and acoustic conditions.",
      "Regulations concerning thermal insulation":
        "Energy performance, heat loss and efficient fixed services belong to Part L. Acoustic insulation under Part E has a different performance objective.",
      "Regulations concerning ventilation":
        "Indoor-air supply and extraction are governed by Part F. Part E may influence duct acoustics, but its principal regulatory purpose remains sound resistance."
    },
    sourceUrls: [APPROVED_DOCUMENT_E]
  },
  {
    prompt:
      "The result of an earth fault loop impedance test will be expressed in?",
    options: ["Amperes", "M Ω", "Watts", "Ω"],
    answer: "Ω",
    rationales: {
      Amperes:
        "Amperes measure current. A loop tester may derive prospective fault current from voltage and impedance, but the Zs or Ze result itself is impedance.",
      "M Ω":
        "Megohms are used for very high resistance values such as insulation resistance. An earth-fault loop is a low-impedance path and its result is recorded in ohms.",
      Watts:
        "Watts express power, found from combinations such as voltage multiplied by current. They are not the unit of an earth-fault return path's impedance."
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2023/94-march-2023/determining-the-maximum-earth-fault-loop-impedance-for-protective-devices-to-bs-en-60898-bs-en-60947-2/"
    ]
  },
  {
    prompt:
      "With the exception of SELV and PELV, the minimum value of insulation resistance is?",
    options: ["1.0MΩ", "1.5MΩ", "100MΩ", "10MΩ"],
    answer: "1.0MΩ",
    rationales: {
      "1.5MΩ":
        "A 1.5 MΩ reading exceeds the minimum, but 1.5 MΩ is not the threshold specified in the BS 7671 test table. The question asks for the lowest acceptable value.",
      "100MΩ":
        "One hundred megohms is a strong result commonly seen on sound new wiring, not the regulatory pass/fail minimum. Requiring it would reject circuits that still exceed 1 MΩ.",
      "10MΩ":
        "Ten megohms provides a useful margin and may be an investigation benchmark in practice, but the tabulated minimum for the stated low-voltage circuits is 1 MΩ."
    },
    sourceUrls: [IET_INSPECTION_FAQS]
  },
  {
    prompt: "What is the meaning of this symbol?",
    options: [
      "Heat detector",
      "Light which can be covered by thermally insulating material",
      "Luminaire suitable for mounting on a normally flammable surface",
      "Smoke alarm"
    ],
    answer: "Luminaire suitable for mounting on a normally flammable surface",
    rationales: {
      "Heat detector":
        "A heat detector is fire-alarm equipment and is identified by its product and alarm-system markings. The pictured F inside an inverted triangle is a luminaire flammability/mounting mark.",
      "Light which can be covered by thermally insulating material":
        "Permission to cover a recessed luminaire with insulation requires a distinct insulation-covering marking and the manufacturer's instructions. The plain F triangle only addresses mounting on a normally flammable surface.",
      "Smoke alarm":
        "A smoke alarm must carry its alarm-device identification and conformity information; it is not denoted by the luminaire F mark. The symbol concerns the mounting surface, not smoke sensing."
    },
    sourceUrls: [
      "https://www.signify.com/global/prof/indoor-luminaires/suspended/linear-pendant/philips-flexblend-suspended/910925867925_EU/product",
      "https://www.assets.signify.com/is/content/PhilipsConsumer/PDFDownloads/Thailand/ODLI20150724_002-UPD-en_TH-2014-Professional-Luminaires-Catalogue-lo.pdf"
    ]
  },
  {
    prompt:
      "For a TN system, what maximum disconnection time generally applies to socket-outlet final circuits up to 63 A and fixed-equipment final circuits up to 32 A?",
    options: ["0.04 s", "0.4 s", "4 s", "5 s"],
    answer: "0.4 s",
    rationales: {
      "0.04 s":
        "Forty milliseconds is the familiar maximum time at 5 times rated residual current for some RCD tests, not the general automatic-disconnection time for the final circuit described by this exam item.",
      "4 s":
        "Four seconds is ten times the 0.4 s TN final-circuit value and is not a Table 41.1 domestic final-circuit category. The circuit and earthing arrangement must be stated before applying any longer exception.",
      "5 s":
        "Five seconds can apply to TN distribution circuits and certain final circuits outside the 0.4 s category. It is not the ordinary value intended for a domestic final circuit up to the stated BS 7671 limits."
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2023/94-march-2023/determining-the-maximum-earth-fault-loop-impedance-for-protective-devices-to-bs-en-60898-bs-en-60947-2/"
    ]
  },
  {
    prompt:
      "Which of these is not a responsibility of the Duty Holder in an Assessed Enterprise?",
    options: [
      "Ensuring that the results of the inspection and testing are accurately recorded on the appropriate forms of certification",
      "Have an understanding of, and be responsible for the health and safety and other statutory requirements relating to electrical installation work in dwellings carried out by the enterprise",
      "To ensure that the enterprise carries out all electrical installation work in dwellings in accordance with the relevant standards, including the issue of certification",
      "To ensure that the enterprise carries out all electrical installation work in dwellings in compliance with all relevant statutory requirements, including the issue of certification"
    ],
    answer:
      "Ensuring that the results of the inspection and testing are accurately recorded on the appropriate forms of certification",
    rationales: {
      "Have an understanding of, and be responsible for the health and safety and other statutory requirements relating to electrical installation work in dwellings carried out by the enterprise":
        "The EAS assigns the Principal Duty Holder responsibility for understanding and overseeing health-and-safety and other statutory requirements for the enterprise's work.",
      "To ensure that the enterprise carries out all electrical installation work in dwellings in accordance with the relevant standards, including the issue of certification":
        "Ensuring work follows the relevant standards and that appropriate certificates or reports are issued is expressly a Principal Duty Holder responsibility.",
      "To ensure that the enterprise carries out all electrical installation work in dwellings in compliance with all relevant statutory requirements, including the issue of certification":
        "Overall compliance with relevant statutory requirements sits with the Principal Duty Holder. Accurate recording of individual verification results is separately assigned to the Qualified Supervisor."
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/mntdpbis/eas-october-2024-24-527b.pdf"
    ]
  },
  {
    prompt: "A consumer unit that has a missing blank plate would contravene?",
    options: [
      "IP ratings",
      "Part P of the Building Regulations",
      "Section 701 of the IET Wiring Regulations",
      "The 17th Edition Wiring Regulations Amendment 1"
    ],
    answer: "IP ratings",
    rationales: {
      "Part P of the Building Regulations":
        "Part P states the high-level requirement to protect people from fire or injury. The immediate technical defect created by an open way is failure of the enclosure's required ingress/access protection.",
      "Section 701 of the IET Wiring Regulations":
        "Section 701 contains additional requirements for locations with a bath or shower. A consumer unit needs adequate protection against access to live parts regardless of whether it is near such a location.",
      "The 17th Edition Wiring Regulations Amendment 1":
        "An edition or amendment is not the property being breached, and current work is assessed against the applicable BS 7671 edition. The missing barrier specifically reduces the enclosure below its required IP level."
    },
    sourceUrls: [
      "https://electrical.theiet.org/courses-resources-and-career-for-electrical-professionals/free-resources/consumer-guidance/consumer-units/",
      "https://www.electricalsafetyfirst.org.uk/resources-for-electricians/wiring-regulations-help/"
    ]
  },
  {
    prompt:
      "For how many hours does emergency lighting need to operate in places of entertainment and for sleeping risk?",
    options: ["1", "3", "5", "8"],
    answer: "3",
    rationales: {
      "1":
        "A one-hour system can be suitable where occupants can evacuate promptly and the premises will not be reoccupied until recharge. Sleeping-risk premises need the longer duration used by the source guidance.",
      "5":
        "Five hours is not a standard emergency-escape-lighting duration category in the cited guidance. Specified systems are generally designed for one or three hours.",
      "8":
        "Eight hours resembles an overnight occupancy period but is not how emergency-lighting autonomy is selected. Sleeping risk and entertainment guidance conventionally uses a three-hour rated system."
    },
    sourceUrls: [
      "https://www.gov.uk/government/publications/fire-safety-risk-assessment-sleeping-accommodation/fire-safety-risk-assessment-sleeping-accommodation-accessible"
    ]
  },
  {
    prompt: "You would perform an insulation resistance test in order to?",
    options: [
      "Ensure a circuit will disconnect within the required time",
      "Prove the continuity of the protective conductor",
      "Test the correct functioning of the mechanical parts of an RCD",
      "Verify that there is no breakdown in the insulation of the conductor"
    ],
    answer: "Verify that there is no breakdown in the insulation of the conductor",
    rationales: {
      "Ensure a circuit will disconnect within the required time":
        "Automatic disconnection is verified from the fault path, protective-device characteristic and, where used, RCD performance. Insulation resistance does not measure fault-loop operating time.",
      "Prove the continuity of the protective conductor":
        "Protective-conductor continuity uses a low-resistance continuity test. Insulation testing instead applies a high DC voltage between conductors to find unwanted leakage paths.",
      "Test the correct functioning of the mechanical parts of an RCD":
        "The RCD test button exercises its mechanism, and an RCD tester measures electrical operation. An insulation tester neither trips nor times the RCD mechanism as its purpose."
    },
    sourceUrls: [IET_INSPECTION_FAQS]
  },
  {
    prompt:
      "When a grey core in harmonised three-core-and-cpc cable is used as neutral, what colour identification should be applied at its terminations?",
    options: ["Black", "Brown", "Blue", "Red"],
    answer: "Blue",
    rationales: {
      Black:
        "Black is a harmonised line-core colour. Leaving a grey neutral identified black would misidentify its function and could lead someone to treat it as live.",
      Brown:
        "Brown identifies a line conductor. Sleeving the grey neutral brown would state the opposite function and create a dangerous identification error.",
      Red:
        "Red is the pre-harmonisation line colour, not the current neutral identification. Neutral conductors are identified blue."
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/1720/harmonised-colours-and-alphanumeric-marketing.pdf",
      "https://electrical.theiet.org/wiring-matters/years/2021/84-march-2021/the-history-of-colour-identification-of-conductors/"
    ]
  }
] as const;
