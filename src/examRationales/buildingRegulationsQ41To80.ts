const APPROVED_DOCUMENTS =
  "https://www.gov.uk/government/collections/approved-documents";
const APPROVED_DOCUMENT_A =
  "https://www.gov.uk/government/collections/approved-document-a-structure-and-associated-documents";
const APPROVED_DOCUMENT_B =
  "https://www.gov.uk/government/publications/fire-safety-approved-document-b";
const APPROVED_DOCUMENT_B_FAQS =
  "https://www.gov.uk/guidance/approved-document-b-fire-safety-frequently-asked-questions";
const APPROVED_DOCUMENT_F_2026 =
  "https://www.gov.uk/government/publications/approved-document-f-2026";
const APPROVED_DOCUMENT_K =
  "https://www.gov.uk/government/publications/protection-from-falling-collision-and-impact-approved-document-k";
const APPROVED_DOCUMENT_L_2026 =
  "https://www.gov.uk/government/publications/approved-document-l-2026";
const APPROVED_DOCUMENT_P =
  "https://www.gov.uk/government/publications/electrical-safety-approved-document-p";
const BUILDING_REGULATIONS_SCHEDULE_1 =
  "https://www.legislation.gov.uk/uksi/2010/2214/schedule/1";
const BUILDING_ACT_1984 =
  "https://www.legislation.gov.uk/ukpga/1984/55/contents";
const COMPETENT_PERSON_SCHEMES =
  "https://www.gov.uk/building-regulations-competent-person-schemes";
const COMPETENT_PERSON_AUTHORISATION =
  "https://www.gov.uk/guidance/competent-person-scheme-current-schemes-and-how-schemes-are-authorised";
const PART_P_COMMENCEMENT =
  "https://www.gov.uk/government/publications/new-approved-document-on-electrical-safety-circular-odpm-05-2004";
const GOV_WALES_PART_P =
  "https://www.gov.wales/approved-document-p-electrical-safety-dwellings";
const HSE_EAWR_GUIDANCE = "https://www.hse.gov.uk/pubns/books/hsr25.htm";
const HSE_ELECTRICAL_COMPETENCE =
  "https://www.hse.gov.uk/electricity/withequip.htm";
const HSE_SAFE_ISOLATION =
  "https://www.hse.gov.uk/electricity/nearelectric.htm";
const HSE_GS38 = "https://www.hse.gov.uk/pubns/priced/gs38.pdf";
const HSE_HSG141 = "https://www.hse.gov.uk/pubns/books/hsg141.htm";
const HSE_PPE_2022 = "https://www.hse.gov.uk/ppe/ppe-regulations-2022.htm";
const HSE_RIDDOR = "https://www.hse.gov.uk/riddor/reporting/";
const IET_AMENDMENT_4_2026 =
  "https://electrical.theiet.org/guidance-and-codes-of-practice/publications-by-category/amendment-42026-to-bs-76712018-iet-wiring-regulations/";
const IET_MODEL_FORMS =
  "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/model-forms/";
const IET_PART_P_FAQS =
  "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/building-regulations/part-p-england-and-wales/frequently-asked-questions/";
const IET_ISOLATION_AND_SWITCHING =
  "https://electrical.theiet.org/wiring-matters/years/2023/94-march-2023/isolation-and-switching-for-mechanical-maintenance/";
const IET_CONDUCTOR_COLOURS =
  "https://electrical.theiet.org/wiring-matters/years/2021/84-march-2021/the-history-of-colour-identification-of-conductors/";
const IET_RCD_FAQS =
  "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/consumer-units-and-protective-devices-faqs/";
const IET_EAS_2024 =
  "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/building-regulations/electrotechnical-assessment-specification/";
const IET_SPECIAL_LOCATIONS =
  "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/general-faqs/";
const OPENREACH_COPPER_HANDBOOK =
  "https://www.openreach.com/content/dam/openreach/openreach-dam-files/images/fibre-broadband/fibre-for-developers/guides-and-handbooks/oct-2019-update/amends/Copper%20handbook%20V3.1%20web.pdf";
const FISCHER_PLASTERBOARD_FIXING =
  "https://www.fischer.co.uk/en-gb/products/cavity-fixings/board-fixing/plasterboard-fixing-gk";

export const buildingRegulationsQ41To80 = [
  {
    prompt:
      "In a two storey domestic house with three bedrooms, a kitchen with a door and a total floor area of less than 200m² per floor, what is the minimum number of smoke alarms required?",
    options: ["0", "1", "2", "4"],
    answer: "2",
    rationales: {
      "0": "With no alarms, the dwelling has no automatic warning system at all and cannot achieve the Grade D2, Category LD3 provision recommended for a new dwellinghouse.",
      "1": "One alarm cannot provide the minimum circulation-space coverage on both storeys. A fire on the unprotected floor could develop before the sole detector operates.",
      "4": "Four alarms may be appropriate after a layout-specific design, but it is not the minimum established by this two-storey scenario. Bedroom count does not create a one-alarm-per-bedroom rule.",
    },
    sourceUrls: [APPROVED_DOCUMENT_B_FAQS],
  },
  {
    prompt:
      "Identify one of the following which would definitely have an area which is classed as a 'special location'?",
    options: [
      "Bathroom containing a bath or shower",
      "Bedroom",
      "Garden",
      "Kitchen",
    ],
    answer: "Bathroom containing a bath or shower",
    rationales: {
      Bedroom:
        "An ordinary bedroom has no Part P notification zone. It becomes relevant only if it also contains equipment such as a bath or shower that creates the defined special-location space.",
      Garden:
        "Fixed garden wiring remains within Part P's general scope, but a garden is not a special location under the current English notification definition. A new circuit can still make the work notifiable.",
      Kitchen:
        "A kitchen ceased to be a special location for notification in England in 2013. Work there is notifiable only for another reason, such as installing a new circuit or replacing a consumer unit.",
    },
    sourceUrls: [APPROVED_DOCUMENT_P, IET_PART_P_FAQS],
  },
  {
    prompt:
      "During initial verification, copies of certificates containing all necessary information can be found in?",
    options: ["EAWR", "GS38", "HSG141", "The On-Site Guide"],
    answer: "The On-Site Guide",
    rationales: {
      EAWR: "The Electricity at Work Regulations impose legal safety duties. They do not reproduce the BS 7671 Electrical Installation Certificate and its schedules.",
      GS38: "GS38 is HSE guidance on suitable voltage indicators, probes and test leads. Its subject is safe test equipment, not completion-certificate templates.",
      HSG141:
        "HSG141 manages electrical risk on construction sites, including supplies and equipment. It is not the publication containing the standard BS 7671 model certificates.",
    },
    sourceUrls: [IET_MODEL_FORMS, HSE_GS38, HSE_HSG141],
  },
  {
    prompt:
      "Where its purpose is not obvious from its position, a switch installed for permanently connected equipment should be?",
    options: [
      "Identified according to the equipment supplied",
      "Provided with a locking mechanism",
      "Rated a minimum 20A",
      "Rated a minimum 32A",
    ],
    answer: "Identified according to the equipment supplied",
    rationales: {
      "Provided with a locking mechanism":
        "A lock-off facility is needed where mechanical maintenance could allow inadvertent reactivation and the switch is not continuously controlled. It is not a universal substitute for identifying what the switch controls.",
      "Rated a minimum 20A":
        "There is no blanket 20 A minimum for every appliance switch. Its current, utilization category and duty must suit the actual equipment and circuit.",
      "Rated a minimum 32A":
        "A universal 32 A rating would be unnecessary for many fixed loads and could still be inadequate for others. Selection follows the design current and switching duty, not a single preset value.",
    },
    sourceUrls: [IET_ISOLATION_AND_SWITCHING],
  },
  {
    prompt:
      "A blue core used as a strapper on a two way lighting circuit should be?",
    options: [
      "Clearly labelled with their purpose",
      "Marked with 2 grooves to indicate line conductors",
      "Sleeved blue to indicate neutral conductors",
      "Sleeved brown to indicate line conductors",
    ],
    answer: "Sleeved brown to indicate line conductors",
    rationales: {
      "Clearly labelled with their purpose":
        "A written label is not the normal core-identification method inside a lighting accessory. A core used as a line conductor needs the prescribed line-colour identification at its terminations.",
      "Marked with 2 grooves to indicate line conductors":
        "Grooves are not a recognised BS 7671 conductor-identification convention. They could be missed and would not establish the conductor function by the harmonised colour system.",
      "Sleeved blue to indicate neutral conductors":
        "The strapper cores carry switched line potential; they are not neutral conductors. Blue identification would dangerously suggest that a core is at neutral potential.",
    },
    sourceUrls: [IET_CONDUCTOR_COLOURS],
  },
  {
    prompt:
      "One of the requirements for initial verification on a completed installation is that?",
    options: [
      "All parts of the installation are correctly selected and erected",
      "The On Site Guide is referenced to ensure the correct Ze of the circuit",
      "The completed installation is checked at least twice",
      "The installation is checked by a supervisor",
    ],
    answer: "All parts of the installation are correctly selected and erected",
    rationales: {
      "The On Site Guide is referenced to ensure the correct Ze of the circuit":
        "Ze is an external earth-fault-loop value at the origin, not a value for each circuit that can be established merely by looking it up. It is measured or reliably obtained from the distributor.",
      "The completed installation is checked at least twice":
        "BS 7671 specifies the inspections and tests needed to verify compliance, not a rule to repeat the whole process exactly twice. Any doubtful or abnormal result is investigated as necessary.",
      "The installation is checked by a supervisor":
        "A supervisor may review the work, but job title alone does not complete initial verification. The competent person responsible must inspect, test, record results and certify compliance.",
    },
    sourceUrls: [IET_MODEL_FORMS],
  },
  {
    prompt:
      "When calculating the maximum current demand of a cooker circuit, you can refer to?",
    options: [
      "Health and Safety Regulations",
      "Manufacturer's website",
      "The On-Site Guide",
      "The appliance manual",
    ],
    answer: "The On-Site Guide",
    rationales: {
      "Health and Safety Regulations":
        "Health and safety legislation sets risk-control duties; it does not provide the domestic cooker-diversity calculation used to estimate circuit demand.",
      "Manufacturer's website":
        "A website may state the appliance's connected load, but it does not by itself provide the installation diversity method. Any product data used must also be applicable to the exact model.",
      "The appliance manual":
        "The manual normally gives rated power, connection and protective-device instructions. Maximum-demand diversity is an installation design calculation rather than an appliance operating instruction.",
    },
    sourceUrls: [IET_AMENDMENT_4_2026],
  },
  {
    prompt:
      "The minimum distance a fixed data broadband cable should be installed away from 230v services is?",
    options: ["100 mm", "150 mm", "200 mm", "50 mm"],
    answer: "50 mm",
    rationales: {
      "100 mm":
        "A 100 mm gap is acceptable where practicable, but it is twice the stated Openreach minimum. The question asks for the smallest permitted separation, not a larger design choice.",
      "150 mm":
        "A 150 mm spacing provides additional segregation but is not the published minimum for internal telephone or data cable. A rigid non-conducting divider is the alternative where the minimum gap cannot be kept.",
      "200 mm":
        "Two hundred millimetres may reduce electromagnetic coupling further, but Openreach does not require that much for this basic arrangement. Cable type, route and any divider still need consideration.",
    },
    sourceUrls: [OPENREACH_COPPER_HANDBOOK],
  },
  {
    prompt: "When supplying remote installations, SWA is often preferred as?",
    options: [
      "It can carry higher current",
      "It has strong mechanical protection",
      "It is a cheaper method for long cable runs",
      "It is required under EAWR",
    ],
    answer: "It has strong mechanical protection",
    rationales: {
      "It can carry higher current":
        "Current-carrying capacity depends on conductor size, material, insulation, installation method and ambient conditions. Steel armour does not automatically give a cable a higher ampacity.",
      "It is a cheaper method for long cable runs":
        "SWA cable, glands and termination labour can cost more than other suitable systems. Selection is based on the route and risks, not a universal long-run price advantage.",
      "It is required under EAWR":
        "EAWR requires systems to prevent danger and be suitable for their environment; it does not prescribe SWA for every remote building. Other wiring systems can comply if adequately protected.",
    },
    sourceUrls: [HSE_EAWR_GUIDANCE, IET_AMENDMENT_4_2026],
  },
  {
    prompt:
      "A 30mA RCD used for additional protection, provides protection against?",
    options: [
      "Line to earth faults",
      "Neutral to line faults",
      "Overload faults",
      "Short circuit faults",
    ],
    answer: "Line to earth faults",
    rationales: {
      "Neutral to line faults":
        "Current flowing from line to neutral normally returns through the RCD's monitored conductors, so there is no residual imbalance to detect. An overcurrent device deals with a low-impedance line-neutral fault.",
      "Overload faults":
        "An overload can be perfectly balanced between line and neutral, so a residual-current device may not trip. A fuse, MCB or the overcurrent element of an RCBO provides overload protection.",
      "Short circuit faults":
        "A line-neutral short circuit is primarily cleared by overcurrent protection. An RCD responds to residual current escaping the intended live-conductor path and is not a replacement for short-circuit protection.",
    },
    sourceUrls: [IET_RCD_FAQS],
  },
  {
    prompt: "The purpose of the Competent Persons Scheme is to?",
    options: [
      "Encourage electrical engineers to further their education",
      "Ensure checks are carried out on persons involved in electrical installation work",
      "Maintain a register of competent persons, allowing certification of work to pass to registered competent schemes as opposed to directly to building control",
      "Provide reassurance to customers requesting electrical work",
    ],
    answer:
      "Maintain a register of competent persons, allowing certification of work to pass to registered competent schemes as opposed to directly to building control",
    rationales: {
      "Encourage electrical engineers to further their education":
        "Continuing competence is important, but education promotion is not the scheme's statutory function. Its defining feature is the approved route for registered installers to self-certify controlled work.",
      "Ensure checks are carried out on persons involved in electrical installation work":
        "Assessment and surveillance are conditions of registration, but the scheme does not check every person who performs electrical work. Its registration applies to assessed businesses and their defined scope.",
      "Provide reassurance to customers requesting electrical work":
        "Consumer confidence is a benefit rather than the legal mechanism. The practical purpose is to avoid a separate building-control application when registered work is self-certified and notified through the scheme.",
    },
    sourceUrls: [COMPETENT_PERSON_SCHEMES],
  },
  {
    prompt:
      "A convenient and satisfactory method of fixing a lightweight item to a plasterboard partition wall would be?",
    options: [
      "Girder clips",
      "Self-drilling spiral plugs",
      "Self-tapping screws",
      "Wood glue",
    ],
    answer: "Self-drilling spiral plugs",
    rationales: {
      "Girder clips":
        "Girder clips attach components to structural steel flanges. A plasterboard sheet has no flange for the clip to grip and can be crushed by unsuitable concentrated loading.",
      "Self-tapping screws":
        "A self-tapping screw alone does not form a dependable anchor in the gypsum core. It needs a stud, backing material or a fixing specifically rated for the board and load.",
      "Wood glue":
        "Wood adhesive is formulated for suitable timber surfaces, not as a rated hollow-wall fixing. Bonding only to the board's paper face gives no reliable mechanical anchorage.",
    },
    sourceUrls: [FISCHER_PLASTERBOARD_FIXING],
  },
  {
    prompt: "Which of the following titles is fictitious?",
    options: [
      "BS7677 New Wiring Regulations 2011",
      "Electricity Safety, Quality and Continuity Regulations 2002",
      "Personal Protective Equipment at Work Regulations 1992",
      "Provision and Use of Work Equipment Regulations 1998",
    ],
    answer: "BS7677 New Wiring Regulations 2011",
    rationales: {
      "Electricity Safety, Quality and Continuity Regulations 2002":
        "ESQCR 2002 is a real statutory instrument governing matters such as electricity-supply safety, quality, continuity and distributor equipment.",
      "Personal Protective Equipment at Work Regulations 1992":
        "PPER 1992 is real legislation. The 2022 amendment extended its duties to a wider class of workers rather than replacing the underlying 1992 Regulations with a fictitious title.",
      "Provision and Use of Work Equipment Regulations 1998":
        "PUWER 1998 is real workplace legislation covering the suitability, maintenance and safe use of work equipment. HSE still publishes its Approved Code of Practice.",
    },
    sourceUrls: [IET_AMENDMENT_4_2026, HSE_PPE_2022, HSE_HSG141],
  },
  {
    prompt: "Horizontal chases in walls should be no deeper than?",
    options: [
      "10mm",
      "One eighth of wall thickness",
      "One sixth of wall thickness",
      "One tenth of wall thickness",
    ],
    answer: "One sixth of wall thickness",
    rationales: {
      "10mm":
        "A fixed 10 mm figure ignores the wall leaf thickness. Approved Document A sets a proportional limit so the permitted depth scales with the masonry being chased.",
      "One eighth of wall thickness":
        "One eighth is shallower and could be used voluntarily, but it is not the stated maximum. The structural guidance permits a horizontal chase up to one sixth of the leaf thickness.",
      "One tenth of wall thickness":
        "One tenth is another conservative depth rather than the regulatory-guidance limit. It would incorrectly rule out a chase between one tenth and one sixth that otherwise meets the stated restriction.",
    },
    sourceUrls: [APPROVED_DOCUMENT_A],
  },
  {
    prompt:
      "Under EAWR guidance, a person with adequate technical knowledge or experience to prevent electrical danger is described as?",
    options: [
      "Able to prove he/she has worked on an identical installation previously",
      "Competent",
      "Qualified",
      "Registered on a competent persons scheme",
    ],
    answer: "Competent",
    rationales: {
      "Able to prove he/she has worked on an identical installation previously":
        "One similar job does not demonstrate all the knowledge, skill and judgement needed for the present risks. Competence is task-specific and considers training, experience and effective supervision.",
      Qualified:
        "A qualification is useful evidence but is not the legal test by itself. It may be outdated, too narrow or unrelated to the complexity and hazards of the work being assigned.",
      "Registered on a competent persons scheme":
        "Scheme registration is a Building Regulations self-certification route for defined work. EAWR competence applies much more broadly and does not depend on domestic scheme membership.",
    },
    sourceUrls: [HSE_ELECTRICAL_COMPETENCE, HSE_EAWR_GUIDANCE],
  },
  {
    prompt:
      "What is the principle purpose of Part F of the Building Regulations?",
    options: [
      "Regulations concerning fire safety",
      "Regulations concerning sound insulation",
      "Regulations concerning thermal insulation",
      "Regulations concerning ventilation",
    ],
    answer: "Regulations concerning ventilation",
    rationales: {
      "Regulations concerning fire safety":
        "Fire warning, means of escape, internal and external fire spread and fire-service access are Part B matters, not the indoor-air-quality function of Part F.",
      "Regulations concerning sound insulation":
        "Resistance to the passage of sound is addressed by Part E. Acoustic separation does not establish the airflow needed to remove moisture and pollutants.",
      "Regulations concerning thermal insulation":
        "Energy performance of the building fabric and services is principally Part L. Insulation can interact with airtightness, but it is not Part F's functional subject.",
    },
    sourceUrls: [APPROVED_DOCUMENT_F_2026, APPROVED_DOCUMENTS],
  },
  {
    prompt: "Two core flexible cable to BS EN 50525 has the colours?",
    options: [
      "Brown and black",
      "Brown and blue",
      "Brown and grey",
      "Brown and red",
    ],
    answer: "Brown and blue",
    rationales: {
      "Brown and black":
        "Brown and black are both harmonised line colours in a multiphase context. A two-core single-phase flex also needs the blue neutral identification.",
      "Brown and grey":
        "Grey is another line-conductor colour, not the neutral colour for this flex. Using it as neutral would conflict with harmonised identification and invite unsafe assumptions.",
      "Brown and red":
        "Red belongs to the pre-harmonised UK line-colour system, while brown is the harmonised line colour. This mixed pair still omits the required blue neutral core.",
    },
    sourceUrls: [IET_CONDUCTOR_COLOURS],
  },
  {
    prompt:
      "When performing a safe isolation test and safely locking off the circuit, the key should be kept?",
    options: [
      "Close to the consumer unit in case of emergency",
      "With a competent person",
      "With a supervisor",
      "With the person who isolated the circuit",
    ],
    answer: "With the person who isolated the circuit",
    rationales: {
      "Close to the consumer unit in case of emergency":
        "Leaving the key near the isolator allows another person to restore power without the worker's agreement. Emergency arrangements must not defeat secure isolation.",
      "With a competent person":
        "Competence alone does not give someone else control of the worker's isolation. The individual exposed to the danger must retain control of the lock and its key.",
      "With a supervisor":
        "A supervisor holding the key could re-energise while the worker remains at risk or out of sight. Personal lock-off prevents reconnection until the person doing the work removes it.",
    },
    sourceUrls: [HSE_SAFE_ISOLATION],
  },
  {
    prompt:
      "Which part of the building regulations refers to the conservation of fuel and power?",
    options: ["A", "F", "G", "L"],
    answer: "L",
    rationales: {
      A: "Part A addresses structural stability, including foundations, walls, floors and roofs. It does not set the building's energy-performance requirements.",
      F: "Part F provides ventilation for indoor air quality and moisture control. Airtightness and ventilation interact with energy use, but F is not the energy Part.",
      G: "Part G covers sanitation, hot-water safety and water efficiency. Efficient hot-water services also engage Part L, but G is not the general fuel-and-power requirement.",
    },
    sourceUrls: [APPROVED_DOCUMENT_L_2026, APPROVED_DOCUMENTS],
  },
  {
    prompt: "A consumer unit that has a missing blank plate would contravene?",
    options: [
      "IP ratings",
      "Part P of the Building Regulations",
      "Section 701 of the IET Wiring Regulations",
      "The 17th Edition Wiring Regulations Amendment 1",
    ],
    answer: "IP ratings",
    rationales: {
      "Part P of the Building Regulations":
        "Part P states the high-level dwelling electrical-safety requirement. The immediate technical defect is the enclosure no longer providing its required degree of protection against access to live parts.",
      "Section 701 of the IET Wiring Regulations":
        "Section 701 adds requirements for locations containing a bath or shower. A missing consumer-unit way cover is an enclosure-protection defect whether or not any bathroom is present.",
      "The 17th Edition Wiring Regulations Amendment 1":
        "That superseded edition is neither the present standard nor the name of the specific requirement breached. Current work is assessed under the applicable BS 7671 edition and enclosure IP provisions.",
    },
    sourceUrls: [IET_MODEL_FORMS, IET_AMENDMENT_4_2026],
  },
  {
    prompt:
      "The selection and installation of lighting diffusers which form part of a ceiling are subject to certain requirements of:",
    options: [
      "Approved document A",
      "Approved document B",
      "Approved document L1",
      "Code of Practice for rafter roofs",
    ],
    answer: "Approved document B",
    rationales: {
      "Approved document A":
        "Part A is concerned with structural strength and stability. A diffuser's reaction-to-fire contribution as part of a ceiling lining is not primarily a structural design issue.",
      "Approved document L1":
        "Part L deals with energy performance, including efficient lighting. It does not set the internal-lining fire classification that applies to a ceiling diffuser.",
      "Code of Practice for rafter roofs":
        "Rafter guidance concerns roof construction and structural detailing. A ceiling diffuser is assessed as part of the internal lining for fire spread, not as a roof rafter.",
    },
    sourceUrls: [APPROVED_DOCUMENT_B, APPROVED_DOCUMENT_B_FAQS],
  },
  {
    prompt:
      "Energy efficient systems come under the scrutiny of the Building Regulations:",
    options: ["Part A", "Part E", "Part H", "Part L"],
    answer: "Part L",
    rationales: {
      "Part A":
        "Part A verifies that the building and its structural elements safely carry loads. It is not the framework for energy performance of services and fabric.",
      "Part E":
        "Part E controls sound transmission between and within buildings. Acoustic performance does not replace energy-efficiency calculations or service controls.",
      "Part H":
        "Part H covers drainage and waste disposal, including foul water and rainwater systems. It does not set the general energy-performance standards for a building.",
    },
    sourceUrls: [APPROVED_DOCUMENT_L_2026, APPROVED_DOCUMENTS],
  },
  {
    prompt: "The Building Regulations are divided into:",
    options: ["14 Parts", "16 parts", "18 Parts", "Parts A to R"],
    answer: "18 Parts",
    rationales: {
      "14 Parts":
        "Fourteen describes an older source-era count. England's current set includes the later Parts O, Q, R, S and T, while former Part N has been consolidated into Part K.",
      "16 parts":
        "Sixteen still omits two current technical Parts. Counting the current lettered requirements gives A-H, J-M and O-T, with no Parts I or N.",
      "Parts A to R":
        "The current sequence does not stop at R: Parts S and T are now in force. It is also not every consecutive letter because I and N are absent from the current English set.",
    },
    sourceUrls: [APPROVED_DOCUMENTS, BUILDING_REGULATIONS_SCHEDULE_1],
  },
  {
    prompt:
      "Which of the following is not a term normally used to express the objectives or 'functional requirements' of the Building Regulations:",
    options: ["Adequate", "Appropriate", "Reasonable", "Usual"],
    answer: "Usual",
    rationales: {
      Adequate:
        "Functional requirements repeatedly call for adequate provision, such as ventilation, drainage or warning. The word expresses a performance level without mandating one product.",
      Appropriate:
        "The Regulations and their guidance use appropriate to link a measure to its building, risk or intended use. It is a performance-based suitability term.",
      Reasonable:
        "Reasonable provision is a core Building Regulations formulation. Approved Documents describe common ways that may be accepted as satisfying that standard.",
    },
    sourceUrls: [BUILDING_REGULATIONS_SCHEDULE_1, APPROVED_DOCUMENTS],
  },
  {
    prompt:
      "Which of the following is not minor electrical installation work because it explicitly requires a new circuit?",
    options: [
      "Adding a 'spur' to a living room ring circuit",
      "Replacing a broken 13A socket in a bedroom",
      "Replacing damaged cable in a ground floor radial circuit",
      "Installing a higher-powered electric shower that requires a new circuit",
    ],
    answer:
      "Installing a higher-powered electric shower that requires a new circuit",
    rationales: {
      "Adding a 'spur' to a living room ring circuit":
        "A spur is an addition to an existing final circuit rather than the provision of a separate circuit from the distribution board. It can therefore fall within Minor Works certification.",
      "Replacing a broken 13A socket in a bedroom":
        "Like-for-like replacement of an accessory is maintenance on an existing circuit. It neither creates a new circuit nor, by itself, requires an Electrical Installation Certificate.",
      "Replacing damaged cable in a ground floor radial circuit":
        "As framed, this repairs the wiring of an existing circuit and does not establish another circuit at the consumer unit. The repair still needs appropriate inspection, testing and records.",
    },
    sourceUrls: [IET_MODEL_FORMS, IET_PART_P_FAQS],
  },
  {
    prompt:
      "Which of the following is classed as a 'special location' for notification under current Part P in England?",
    options: [
      "An entrance hall",
      "Extra Low Voltage Lighting",
      "Garden",
      "Room containing a swimming pool",
    ],
    answer: "Room containing a swimming pool",
    rationales: {
      "An entrance hall":
        "A hall is an ordinary circulation space and has no special-location notification zone. Its electrical work can still be notifiable if it includes a new circuit or consumer-unit replacement.",
      "Extra Low Voltage Lighting":
        "Extra-low voltage describes a voltage range and installation type, not a physical location. ELV work remains within Part P, but the voltage label does not create a special location.",
      Garden:
        "Domestic garden electrics are within Part P's scope, yet a garden is not in England's current special-location definition. The notification decision instead turns on the work, such as a new circuit.",
    },
    sourceUrls: [APPROVED_DOCUMENT_P, IET_PART_P_FAQS],
  },
  {
    prompt:
      "The person or organisation responsible for the authorization of the 'competent persons scheme' is:",
    options: ["The ECA", "The EEC", "The HSE", "The Secretary of State"],
    answer: "The Secretary of State",
    rationales: {
      "The ECA":
        "The Electrical Contractors' Association is an industry trade body. It can support members and technical standards but does not grant statutory authorisation to scheme operators.",
      "The EEC":
        "The former European Economic Community was not the authorising body for England's Building Regulations self-certification schemes. The scheme power is domestic legislation.",
      "The HSE":
        "HSE regulates workplace health and safety and hosts the Building Safety Regulator, but competent-person scheme authorisation is exercised through the responsible government department under the Building Act framework.",
    },
    sourceUrls: [COMPETENT_PERSON_AUTHORISATION, BUILDING_ACT_1984],
  },
  {
    prompt: "Part P does not apply to:",
    options: [
      "Greenhouses",
      "Land associated with a building",
      "Lifts",
      "Shared amenities in blocks of flats",
    ],
    answer: "Lifts",
    rationales: {
      Greenhouses:
        "Fixed wiring in a greenhouse associated with a dwelling can fall within Part P's scope. Whether it is notifiable is a separate question from whether the safety requirement applies.",
      "Land associated with a building":
        "Part P expressly reaches fixed electrical installations on land associated with a dwelling, including relevant garden supplies and outbuildings on that land.",
      "Shared amenities in blocks of flats":
        "The intended 'shared amenities' or common-access areas serving dwellings are shown within Part P's building scope. The dedicated lift installation is the distinct exclusion in the official scope diagram.",
    },
    sourceUrls: [APPROVED_DOCUMENT_P],
  },
  {
    prompt: "In the Part P document 'Extra Low Voltage' a.c. is defined as:",
    options: [
      "0V a.c. to 120V a.c",
      "0V a.c. to 50V a.c",
      "50V a.c. to 1000V a.c",
      "50V a.c. to 120V a.c",
    ],
    answer: "0V a.c. to 50V a.c",
    rationales: {
      "0V a.c. to 120V a.c":
        "The 120 V ceiling belongs to ripple-free DC, not AC. Treating 120 V AC as extra-low voltage would materially understate its shock risk.",
      "50V a.c. to 1000V a.c":
        "That span is within the low-voltage AC band above ELV. Extra-low voltage ends at 50 V AC rather than beginning there and continuing to mains distribution levels.",
      "50V a.c. to 120V a.c":
        "This range excludes the voltages below 50 V that define ELV and again imports the DC figure of 120 V into the AC definition.",
    },
    sourceUrls: [HSE_GS38, APPROVED_DOCUMENT_P],
  },
  {
    prompt: "The Part P document took effect on:",
    options: ["1st Jan 2005", "1st Jan 2007", "1st June 2005", "1st June 2007"],
    answer: "1st Jan 2005",
    rationales: {
      "1st Jan 2007":
        "By January 2007 Part P had already governed domestic electrical work for two years. Later document editions did not reset the original commencement date.",
      "1st June 2005":
        "June 2005 is five months after the statutory commencement. The amendment regulations brought the provisions into force at the start of that calendar year.",
      "1st June 2007":
        "This date confuses later guidance changes with legal commencement and is more than two years late. The initial requirement was operative throughout 2005.",
    },
    sourceUrls: [PART_P_COMMENCEMENT],
  },
  {
    prompt: "Part P of the Building Regulations applies to:",
    options: [
      "England and Wales",
      "Great Britain",
      "Great Britain and Northern Ireland",
      "The United Kingdom",
    ],
    answer: "England and Wales",
    rationales: {
      "Great Britain":
        "Great Britain also includes Scotland, whose Building Standards system does not use Part P. England and Wales now maintain separate Part P regulations and guidance.",
      "Great Britain and Northern Ireland":
        "This adds both Scotland and Northern Ireland, each of which has its own building-control framework. It therefore overstates Part P's territorial reach.",
      "The United Kingdom":
        "A UK-wide answer incorrectly includes Scotland and Northern Ireland. The shared label Part P exists in England and Wales, although each nation applies its own current approved document.",
    },
    sourceUrls: [APPROVED_DOCUMENT_P, GOV_WALES_PART_P],
  },
  {
    prompt:
      "Which national standard is used as the principal benchmark for selecting and installing electrical work under Approved Document P?",
    options: ["BS 3036", "BS 7671", "BS EN 9001", "ISO 9000"],
    answer: "BS 7671",
    rationales: {
      "BS 3036":
        "BS 3036 is a product standard associated with semi-enclosed rewirable fuses. It cannot govern the design, erection and verification of an entire electrical installation.",
      "BS EN 9001":
        "The quality-management standard is BS EN ISO 9001, not 'BS EN 9001' as an electrical wiring code. A quality system does not supply the installation safety rules.",
      "ISO 9000":
        "ISO 9000 is a family of quality-management concepts and vocabulary. It does not specify circuit protection, conductor sizing, earthing, inspection or testing.",
    },
    sourceUrls: [APPROVED_DOCUMENT_P, IET_AMENDMENT_4_2026],
  },
  {
    prompt:
      "Which of the following concerns reporting specified work-related injuries, diseases and dangerous occurrences rather than the design or operation of an electrical installation?",
    options: [
      "BS 7671",
      "RIDDOR",
      "The Electricity at Work Regulations 1989",
      "The Electricity Safety, Quality and Continuity Regulations 2002",
    ],
    answer: "RIDDOR",
    rationales: {
      "BS 7671":
        "BS 7671 is the national standard for designing, erecting and verifying low-voltage electrical installations. It is not the statutory incident-reporting regime.",
      "The Electricity at Work Regulations 1989":
        "EAWR controls electrical danger in work activities, including systems, work practices and competence. It does not define the general process for reporting specified injuries and occurrences.",
      "The Electricity Safety, Quality and Continuity Regulations 2002":
        "ESQCR regulates electricity networks and supply matters such as safety, quality and continuity. Its purpose is different from employer incident reporting under RIDDOR.",
    },
    sourceUrls: [HSE_RIDDOR, HSE_EAWR_GUIDANCE, IET_AMENDMENT_4_2026],
  },
  {
    prompt:
      "All electrical work carried out professionally is subject to statutory requirements laid out in the:",
    options: [
      "DIY Regulations",
      "Design and Management Regulations",
      "Electricity at Work Regulations",
      "Requirements for Electrical Installations",
    ],
    answer: "Electricity at Work Regulations",
    rationales: {
      "DIY Regulations":
        "There is no statutory instrument called the DIY Regulations. Domestic work can engage the Building Regulations, product law and general safety duties, but not this invented title.",
      "Design and Management Regulations":
        "CDM governs health-and-safety management for construction projects and allocates client, designer and contractor duties. It is not the universal electrical-system statute tested here.",
      "Requirements for Electrical Installations":
        "That is BS 7671, a non-statutory British Standard used to demonstrate good electrical practice. Legal duties at work arise from legislation such as EAWR.",
    },
    sourceUrls: [HSE_EAWR_GUIDANCE, IET_AMENDMENT_4_2026],
  },
  {
    prompt:
      "Which of the following is not classified as a 'special installation or location' in Part 7 of BS 7671?",
    options: [
      "Rooms and cabins containing sauna heaters",
      "Industrial fluorescent lighting systems",
      "Electrical installations in caravan/camping parks",
      "Solar photovoltaic power supply systems",
    ],
    answer: "Industrial fluorescent lighting systems",
    rationales: {
      "Rooms and cabins containing sauna heaters":
        "Rooms and cabins containing sauna heaters have the additional requirements of Section 703 because heat, equipment position and electric-shock risks need special treatment.",
      "Electrical installations in caravan/camping parks":
        "Section 708 covers caravan and camping parks, including pitch supplies, RCD protection, external influences and restrictions associated with PME earthing.",
      "Solar photovoltaic power supply systems":
        "PV installations are addressed by Section 712, including DC-side isolation, protection, wiring and warning requirements that differ from an ordinary final circuit.",
    },
    sourceUrls: [IET_SPECIAL_LOCATIONS, IET_AMENDMENT_4_2026],
  },
  {
    prompt:
      "A firm seeking 'competent person' status has to have someone responsible for day-to-day quality and standards. This person is called the:",
    options: [
      "Competent Person",
      "Qualified Manager",
      "Qualified Supervisor",
      "Qualifying Supervisor",
    ],
    answer: "Qualified Supervisor",
    rationales: {
      "Competent Person":
        "Competent person is a general description of someone with suitable knowledge, skill and experience. It does not name the enterprise role with direct day-to-day responsibility for technical standards.",
      "Qualified Manager":
        "Qualified Manager is not the defined EAS role. Management authority alone does not establish responsibility for verification, certification and the technical quality of electrotechnical work.",
      "Qualifying Supervisor":
        "This near-sounding phrase is not the defined title in the Electrotechnical Assessment Specification. The formal role uses 'Qualified', not 'Qualifying'.",
    },
    sourceUrls: [IET_EAS_2024],
  },
  {
    prompt:
      "Which body normally enforces Building Regulations requirements for ordinary buildings in England, outside the higher-risk building regime?",
    options: [
      "Local authorities",
      "The Association of Builders",
      "The District Surveyors Association",
      "The Secretary of State",
    ],
    answer: "Local authorities",
    rationales: {
      "The Association of Builders":
        "An industry association has no statutory power to serve Building Act compliance or stop notices. Trade membership is separate from public enforcement.",
      "The District Surveyors Association":
        "A professional association can share expertise and standards, but it is not the building-control authority for a project and cannot prosecute a breach in its own name.",
      "The Secretary of State":
        "The Secretary of State makes regulations and has defined oversight and appeal functions, but routine enforcement for ordinary buildings is exercised locally. The BSR is the authority for higher-risk building work.",
    },
    sourceUrls: [
      "https://www.gov.uk/government/publications/building-control-changes-for-higher-risk-buildings-and-wider-changes-to-building-regulations/circular-letter-changes-to-the-building-control-process",
    ],
  },
  {
    prompt:
      "Which of the following is not generally exempt from substantive Building Regulations requirements?",
    options: [
      "A qualifying operational building belonging to a statutory undertaker",
      "A qualifying operational building belonging to the Civil Aviation Authority",
      "A qualifying operational building belonging to a licensed air-traffic-services provider",
      "Most buildings belonging to the Crown",
    ],
    answer: "Most buildings belonging to the Crown",
    rationales: {
      "A qualifying operational building belonging to a statutory undertaker":
        "Section 4 provides a limited exemption for a statutory undertaker's building held or used for its undertaking. Houses and ordinary offices or showrooms do not gain that exemption.",
      "A qualifying operational building belonging to the Civil Aviation Authority":
        "The Building Act includes qualifying CAA operational buildings within its specific section 4 exemption, subject to the stated exclusions for ordinary accommodation and office-type use.",
      "A qualifying operational building belonging to a licensed air-traffic-services provider":
        "Section 4 includes a limited exemption for a building held or used for activities authorised by an air-traffic-services licence, while excluding houses and ordinary offices or showrooms.",
    },
    sourceUrls: [BUILDING_ACT_1984],
  },
  {
    prompt:
      "Approved document K sets out requirements applying to protection from falling, collision and:",
    options: ["Fire", "Impact", "Toxic substances", "Ventilation"],
    answer: "Impact",
    rationales: {
      Fire: "Protection from fire is Part B, covering warning and escape, linings, structure, external spread and fire-service access. Those are separate from Part K's physical-injury hazards.",
      "Toxic substances":
        "Part D addresses toxic substances associated with insulating materials. It does not govern stairs, guarding, glazing collision or door-trapping hazards.",
      Ventilation:
        "Part F sets ventilation performance for indoor air quality. It does not specify guarding, safe glazing or protection from moving doors and windows.",
    },
    sourceUrls: [APPROVED_DOCUMENT_K, APPROVED_DOCUMENTS],
  },
  {
    prompt:
      "Approved Document K contains the current glazing-safety guidance in England. Which of the following is not one of the safety issues covered?",
    options: ["Cleaning", "Damp", "Impact", "Opening"],
    answer: "Damp",
    rationales: {
      Cleaning:
        "Part K includes safe access for cleaning windows because falls and difficult reaches can injure cleaners or building users.",
      Impact:
        "Part K4 and its guidance address impact with glazing, including critical locations, safe breakage, robust panes and permanent protection.",
      Opening:
        "Part K covers safe opening and closing of windows, including collision and trapping risks. Those operational hazards belong in the current glazing guidance.",
    },
    sourceUrls: [APPROVED_DOCUMENT_K],
  },
] as const;
