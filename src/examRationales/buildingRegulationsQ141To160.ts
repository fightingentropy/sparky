const APPROVED_DOCUMENT_A =
  "https://www.gov.uk/government/collections/approved-document-a-structure-and-associated-documents";
const BUILDING_REGULATIONS_2010_REGULATION_7 =
  "https://www.legislation.gov.uk/uksi/2010/2214/regulation/7";
const APPROVED_DOCUMENT_B =
  "https://www.gov.uk/government/publications/fire-safety-approved-document-b";
const APPROVED_DOCUMENT_C =
  "https://www.gov.uk/government/publications/site-preparation-and-resistance-to-contaminates-and-moisture-approved-document-c";
const APPROVED_DOCUMENT_E =
  "https://www.gov.uk/government/publications/resistance-to-sound-approved-document-e";
const APPROVED_DOCUMENT_F =
  "https://www.gov.uk/government/publications/ventilation-approved-document-f";
const APPROVED_DOCUMENT_L =
  "https://www.gov.uk/government/publications/conservation-of-fuel-and-power-approved-document-l";
const APPROVED_DOCUMENT_M =
  "https://www.gov.uk/government/publications/access-to-and-use-of-buildings-approved-document-m";
const APPROVED_DOCUMENT_P =
  "https://www.gov.uk/government/publications/electrical-safety-approved-document-p";
const IET_ABOUT_BS_7671 =
  "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/about-bs-7671/";
const IET_EV_CHARGING =
  "https://electrical.theiet.org/wiring-matters/years/2020/79-march-2020/bs-76712018plusa1/";
const IET_PART_P_CERTIFICATION =
  "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/building-regulations/part-p-england-and-wales/certification-schemes/";
const IET_PART_P_FAQS =
  "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/building-regulations/part-p-england-and-wales/frequently-asked-questions/";
const IET_INITIAL_VERIFICATION =
  "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/";
const IGEM_GAS_PROXIMITY =
  "https://www.igem.org.uk/asset/977FBFBA-3945-4475-8F018B5A54FA40E0/";
const AICO_HEAT_ALARMS =
  "https://www.aico.co.uk/homeowner/articles/beyond-smoke-the-role-of-heat-alarms-in-comprehensive-home-fire-safety/";

export const buildingRegulationsQ141To160 = [
  {
    prompt:
      "Under Approved Document A guidance, what is the maximum notch depth in a solid timber floor joist?",
    options: [
      "Between 0.07 and 0.25 × the span",
      "0.25 × the joist depth",
      "0.125 × the joist depth",
      "Between 0.25 and 0.4 × the span",
    ],
    answer: "0.125 × the joist depth",
    rationales: {
      "Between 0.07 and 0.25 × the span":
        "This is the zone along the span in which a notch may be located. It controls position, whereas the maximum cut into the timber is calculated from the joist depth.",
      "0.25 × the joist depth":
        "One quarter of the depth is twice the permitted one-eighth notch. Removing that much material from the highly stressed edge would reduce the joist's structural capacity too far.",
      "Between 0.25 and 0.4 × the span":
        "The quarter-to-two-fifths span zone relates to the permitted position of drilled holes. It is neither the notch-location zone nor a measurement of notch depth.",
    },
    sourceUrls: [APPROVED_DOCUMENT_A],
  },
  {
    prompt: "Which statement is not a requirement of Regulation 7 itself?",
    options: [
      "Building work shall be carried out in a workmanlike manner",
      "Building work shall be carried out by registered competent persons only",
      "Materials used in building work are applied, used or fixed so as to adequately perform the functions for which they are designed.",
      "Building work shall be carried out with adequate and proper materials",
    ],
    answer:
      "Building work shall be carried out by registered competent persons only",
    rationales: {
      "Building work shall be carried out in a workmanlike manner":
        "Workmanlike execution is stated expressly in regulation 7. It addresses the quality of how the work is performed and is therefore part of this regulation's requirements.",
      "Materials used in building work are applied, used or fixed so as to adequately perform the functions for which they are designed.":
        "Regulation 7 requires materials to be prepared and used so they perform their intended functions. A suitable product installed incorrectly would not satisfy that duty.",
      "Building work shall be carried out with adequate and proper materials":
        "Adequate and proper materials are the first limb of regulation 7. Their suitability and condition are central to the regulation, rather than an optional specification preference.",
    },
    sourceUrls: [BUILDING_REGULATIONS_2010_REGULATION_7],
  },
  {
    prompt:
      "Which electrical-accessory detail helps preserve sound insulation in a separating wall under Approved Document E guidance?",
    options: [
      "Deep boxes to be used in separating walls",
      "Sockets to be fitted back to back on a separating wall between a room and a corridor",
      "Sockets to be staggered on opposite sides of a separating wall",
      "That chases must be used in separating walls",
    ],
    answer: "Sockets to be staggered on opposite sides of a separating wall",
    rationales: {
      "Deep boxes to be used in separating walls":
        "A deeper box removes more of the wall lining or masonry and can weaken the acoustic barrier. Box depth alone provides no protection against a direct sound path.",
      "Sockets to be fitted back to back on a separating wall between a room and a corridor":
        "Back-to-back boxes align two penetrations and leave the least wall mass between the spaces. That arrangement makes airborne sound leakage more likely instead of preserving separation.",
      "That chases must be used in separating walls":
        "Chasing is not an acoustic requirement and can remove mass or interrupt resilient layers. Any necessary route must instead be detailed and sealed without degrading the wall's tested construction.",
    },
    sourceUrls: [APPROVED_DOCUMENT_E],
  },
  {
    prompt:
      "Which listed work is non-notifiable under current Part P rules in England?",
    options: [
      "Work to connect an electric gate to an existing isolator",
      "New central heating system circuit",
      "Installing an extractor fan 300mm from the edge of a bath at a height of 2m.",
      "Installing a new outdoor lighting circuit in a garden",
    ],
    answer: "Work to connect an electric gate to an existing isolator",
    rationales: {
      "New central heating system circuit":
        "The notification trigger is the provision of the new circuit, not the type of appliance it supplies. A new heating circuit is therefore notifiable even though the controls serve another trade.",
      "Installing an extractor fan 300mm from the edge of a bath at a height of 2m.":
        "That position is within the defined bath or shower special-location volume. An addition or alteration to a circuit there is notifiable because the proximity to water increases shock risk.",
      "Installing a new outdoor lighting circuit in a garden":
        "A new circuit is one of the current notification triggers wherever it runs. Outdoor work is no longer a separate trigger, but calling this work a new circuit is sufficient.",
    },
    sourceUrls: [APPROVED_DOCUMENT_P, IET_PART_P_FAQS],
  },
  {
    prompt:
      "In the former Approved Documents L1A/L1B framework, which installation was not covered by their building-services installation guidance?",
    options: [
      "Solar photovoltaic panels",
      "Underfloor heating",
      "Domestic combined heat and power (microCHP)",
      "Warm air systems",
    ],
    answer: "Solar photovoltaic panels",
    rationales: {
      "Underfloor heating":
        "Underfloor heating is a heat-distribution system serving the dwelling. Its efficiency, controls and distribution losses belonged to the former Part L building-services framework.",
      "Domestic combined heat and power (microCHP)":
        "Micro-CHP produces heat as a domestic building service while also generating electricity. The former compliance material included performance guidance for that service category.",
      "Warm air systems":
        "A warm-air system is a fixed space-heating service. Its appliance efficiency, ductwork and controls were addressed within the dwelling building-services guidance associated with Part L.",
    },
    sourceUrls: [APPROVED_DOCUMENT_L],
  },
  {
    prompt:
      "In the standard final-circuit arrangements, which copper conductor size is used for a 32 A household radial socket-outlet circuit before project-specific rating factors are applied?",
    options: ["1.5 mm²", "4.0 mm²", "2.5 mm²", "0.75 mm²"],
    answer: "4.0 mm²",
    rationales: {
      "1.5 mm²":
        "A 1.5 mm² conductor is associated with lower-current final circuits and does not form the standard 32 A radial socket arrangement. Its installed rating can fall well below 32 A.",
      "2.5 mm²":
        "A 2.5 mm² radial is normally paired with a 20 A protective device in the standard arrangements. A 2.5 mm² ring can use 32 A because its two paths share current, but that is a different topology.",
      "0.75 mm²":
        "A 0.75 mm² conductor is far below the standard fixed-wiring size for this circuit and is commonly encountered in flexible cords. A 32 A device would not provide the required overload coordination.",
    },
    sourceUrls: [IET_ABOUT_BS_7671],
  },
  {
    prompt:
      "For otherwise comparable cable construction and conductor size, which listed reference method normally gives the greatest tabulated current-carrying capacity?",
    options: [
      "Reference method C",
      "Reference method 100",
      "Reference method 103",
      "Reference method A",
    ],
    answer: "Reference method C",
    rationales: {
      "Reference method 100":
        "Method 100 represents a domestic flat-cable arrangement affected by thermal insulation at a ceiling or joist. The insulation restricts cooling and reduces the tabulated rating below clipped direct.",
      "Reference method 103":
        "Method 103 places the cable in a thermally adverse insulated-wall arrangement. Heat is retained around the cable, so this is one of the lower-capacity methods in the comparison.",
      "Reference method A":
        "Method A places insulated conductors or cable in conduit within a thermally insulated wall. The conduit and insulation hinder heat loss, producing a lower rating than method C.",
    },
    sourceUrls: [IET_ABOUT_BS_7671],
  },
  {
    prompt:
      "If the conditions permitting direct connection to PME in Regulation 722.411.4.1 are not used, which alternative protective measure can supply an EV charging point?",
    options: [
      "An isolation transformer is used",
      "A tethered lead EV chargepoint is installed",
      "A 25 mm² bonding conductor is connected to all extraneous-conductive-parts",
      "A Type F RCD is installed",
    ],
    answer: "An isolation transformer is used",
    rationales: {
      "A tethered lead EV chargepoint is installed":
        "A permanently attached charging lead changes the connector arrangement, not the earthing system. The vehicle body could still be connected to a PME terminal raised by an open PEN fault.",
      "A 25 mm² bonding conductor is connected to all extraneous-conductive-parts":
        "Larger bonding equalises conductive parts connected to the installation but does not hold them near true Earth during an open PEN event. Conductor size is not a substitute for the Section 722 measure.",
      "A Type F RCD is installed":
        "A Type F RCD responds to specified residual-current waveforms. It neither detects every open PEN condition nor separates the vehicle's protective conductor from the PME terminal.",
    },
    sourceUrls: [IET_EV_CHARGING],
  },
  {
    prompt:
      "For notifiable Part P work, which route requires a building control body to be notified directly before work begins?",
    options: [
      "Neither self-certification nor an appointed third-party certification route will be used",
      "A registered third-party certifier is appointed before work begins",
      "The work is non-notifiable",
      "A registered competent enterprise will self-certify the work",
    ],
    answer:
      "Neither self-certification nor an appointed third-party certification route will be used",
    rationales: {
      "A registered third-party certifier is appointed before work begins":
        "The certifier must be appointed before work starts so inspections can be planned, but this is the third-party scheme route. It is distinct from making a direct building-control application.",
      "The work is non-notifiable":
        "Non-notifiable work does not require a Part P building-control notice. It must still comply with the electrical-safety requirement and receive the appropriate BS 7671 certification.",
      "A registered competent enterprise will self-certify the work":
        "A registered enterprise uses its authorised scheme to self-certify and pass notification after completion. A separate advance application to building control would defeat that scheme route.",
    },
    sourceUrls: [APPROVED_DOCUMENT_P, IET_PART_P_CERTIFICATION],
  },
  {
    prompt:
      "What is the minimum intermittent extract rate for a cooker hood that extracts to outside and is adjacent to the hob?",
    options: [
      "30 litres per second",
      "60 litres per second",
      "6 litres per second",
      "15 litres per second",
    ],
    answer: "30 litres per second",
    rationales: {
      "60 litres per second":
        "Sixty litres per second is the kitchen rate when the intermittent extract is positioned away from the hob. A hood capturing pollutants at source may use the lower 30 litre rate.",
      "6 litres per second":
        "Six litres per second is the intermittent rate for a separate sanitary room containing a WC. It is much too low for moisture and cooking pollutants from a kitchen hob.",
      "15 litres per second":
        "Fifteen litres per second is the intermittent bathroom extract rate. Kitchen cooking produces a higher pollutant load and has its own 30 or 60 litre requirement.",
    },
    sourceUrls: [APPROVED_DOCUMENT_F],
  },
  {
    prompt:
      "Which Approved Document gives guidance on the requirement for sufficient early warning of fire?",
    options: ["E", "B", "L", "F"],
    answer: "B",
    rationales: {
      E: "Approved Document E addresses resistance to the passage of sound between and within buildings. Acoustic separation does not set the fire-detection and warning provision.",
      L: "Approved Document L concerns conservation of fuel and power, including fabric and building-service efficiency. It does not contain Requirement B1's alarm guidance.",
      F: "Approved Document F covers ventilation and indoor air quality. Extract rates and background ventilation are separate from the means of warning and escape required for fire safety.",
    },
    sourceUrls: [APPROVED_DOCUMENT_B],
  },
  {
    prompt:
      "Which Approved Document supports the requirement that a building provide appropriate early warning of fire and usable means of escape?",
    options: [
      "Approved Document Part F",
      "Approved Document Part A",
      "Approved Document Part M",
      "Approved Document Part B",
    ],
    answer: "Approved Document Part B",
    rationales: {
      "Approved Document Part F":
        "Part F provides ventilation guidance for indoor air quality and moisture control. Normal ventilation systems do not establish the fire alarm or protected escape strategy.",
      "Approved Document Part A":
        "Part A addresses structural stability, including loads, foundations and disproportionate collapse. The early-warning and escape requirement is a fire-safety function, not a structural calculation.",
      "Approved Document Part M":
        "Part M supports access to and use of buildings. Although inclusive escape planning matters, the quoted functional requirement for warning and escape is located in Part B.",
    },
    sourceUrls: [APPROVED_DOCUMENT_B],
  },
  {
    prompt:
      "Which listed work is notifiable in England under current Part P rules?",
    options: [
      "Electrical installation work in a shed that does not involve new outdoor wiring",
      "The installation of a kitchen lighting system using a CE marked prefabricated, modular system linked by plug and socket connectors",
      "New outdoor lighting circuit that involves crossing the garden",
      "Electrical maintenance on equipment 700mm from Zone 1 in a bathroom",
    ],
    answer: "New outdoor lighting circuit that involves crossing the garden",
    rationales: {
      "Electrical installation work in a shed that does not involve new outdoor wiring":
        "Part P can apply in an associated shed, but an alteration to an existing circuit outside a special location is not automatically notifiable. The option expressly excludes a new supply circuit.",
      "The installation of a kitchen lighting system using a CE marked prefabricated, modular system linked by plug and socket connectors":
        "Connecting a prefabricated plug-and-socket set to an existing outlet does not create a new fixed circuit. Kitchen location alone has not been a notification trigger in England since 2013.",
      "Electrical maintenance on equipment 700mm from Zone 1 in a bathroom":
        "Maintenance and repair are non-notifiable, and a point 700 mm beyond zone 1 is also outside the 600 mm horizontal special-location extent. Safety and certification duties still remain.",
    },
    sourceUrls: [APPROVED_DOCUMENT_P, IET_PART_P_FAQS],
  },
  {
    prompt:
      "In a new dwelling, which mounting-height band follows the general Approved Document M guidance for switches, sockets and similar controls in habitable rooms?",
    options: [
      "Between 1350 mm and 1450 mm above floor level",
      "Below 450 mm",
      "Between 25 mm and 600 mm below the ceiling",
      "Between 450 mm and 1200 mm above finished floor level",
    ],
    answer: "Between 450 mm and 1200 mm above finished floor level",
    rationales: {
      "Between 1350 mm and 1450 mm above floor level":
        "This entire band is above the 1200 mm upper reach point in the general dwelling guidance. Mounting ordinary controls there can make them inaccessible to a seated user.",
      "Below 450 mm":
        "Below 450 mm is beneath the lower reach boundary for ordinary outlets and controls. Requiring every switch below that point would make operation harder, not more accessible.",
      "Between 25 mm and 600 mm below the ceiling":
        "A distance below the ceiling is used in detector-positioning rules, not for everyday controls. Switch and socket accessibility is measured upward from the finished floor.",
    },
    sourceUrls: [APPROVED_DOCUMENT_M],
  },
  {
    prompt:
      "Where no electrically insulating separation is installed, what minimum clearance should domestic gas installation pipework have from an electricity meter?",
    options: ["500 mm", "25 mm", "150 mm", "300 mm"],
    answer: "150 mm",
    rationales: {
      "500 mm":
        "A half-metre gap exceeds the stated 150 mm minimum and may be chosen where space allows, but it is not the minimum clearance requested for this comparison.",
      "25 mm":
        "Twenty-five millimetres is the separation used between gas pipework and electricity supply or distribution cables. Electrical meters and associated apparatus require the larger 150 mm gap.",
      "300 mm":
        "Three hundred millimetres is twice the stated clearance. Extra distance is not harmful, but selecting it would overstate the minimum needed when no insulating barrier is present.",
    },
    sourceUrls: [IGEM_GAS_PROXIMITY],
  },
  {
    prompt:
      "Under Approved Document A guidance for masonry walls, a vertical chase must",
    options: [
      "Be at least 50mm deep",
      "Be at least 50mm from the top or bottom of a joist",
      "Not be deeper than one sixth of the wall thickness",
      "Not be deeper than one third of the wall thickness",
    ],
    answer: "Not be deeper than one third of the wall thickness",
    rationales: {
      "Be at least 50mm deep":
        "The structural rule imposes a maximum proportional depth, not a minimum cut. Making a chase at least 50 mm deep could exceed the permitted fraction in a thinner wall leaf.",
      "Be at least 50mm from the top or bottom of a joist":
        "This mixes masonry chasing with timber-joist drilling and notching. A wall chase is assessed against wall-leaf thickness and orientation, not its distance from a joist edge.",
      "Not be deeper than one sixth of the wall thickness":
        "One sixth is the stricter limit for a horizontal chase because it cuts across the wall's load path. The permitted maximum for a vertical chase is one third.",
    },
    sourceUrls: [APPROVED_DOCUMENT_A],
  },
  {
    prompt:
      "On a peaked or sloping ceiling, where should a heat detector's sensing element be positioned relative to the apex?",
    options: [
      "Directly above an air-conditioning outlet",
      "Between 25 mm and 600 mm vertically below the apex",
      "Between 25 mm and 150 mm vertically below the apex",
      "Exactly 500 mm from every wall",
    ],
    answer: "Between 25 mm and 150 mm vertically below the apex",
    rationales: {
      "Directly above an air-conditioning outlet":
        "Airflow from an outlet can cool or divert the hot plume and delay detector operation. Manufacturer guidance instead keeps heat alarms away from ventilation outlets and other strong air movement.",
      "Between 25 mm and 600 mm vertically below the apex":
        "The 600 mm apex allowance is used for smoke alarms because smoke spreads differently. A heat detector must be much closer to the high point, within 150 mm.",
      "Exactly 500 mm from every wall":
        "Five hundred millimetres can arise in the separate treatment of some ceiling beams, but it is not a universal wall clearance or the apex-height rule asked for here.",
    },
    sourceUrls: [AICO_HEAT_ALARMS],
  },
  {
    prompt:
      "Under Part P in England, which listed electrical installation is outside its scope?",
    options: [
      "Outside a dwelling such as a pond pump in a garden",
      "In outbuildings such as a detached garage",
      "In business premises in the same building as a dwelling but supplied entirely separately from it",
      "In the common access areas of blocks of flats such as corridors",
    ],
    answer:
      "In business premises in the same building as a dwelling but supplied entirely separately from it",
    rationales: {
      "Outside a dwelling such as a pond pump in a garden":
        "Part P extends to fixed electrical installations on land associated with a dwelling when supplied from the dwelling or a shared source. A garden pond pump can therefore be within scope.",
      "In outbuildings such as a detached garage":
        "A detached garage or shed does not escape Part P when its installation is supplied from the associated dwelling. Physical separation from the house is not the scope test.",
      "In the common access areas of blocks of flats such as corridors":
        "Common corridors and shared amenities serving flats are expressly included in Part P's scope. They serve dwellings even though they are outside each flat's private entrance.",
    },
    sourceUrls: [APPROVED_DOCUMENT_P, IET_PART_P_FAQS],
  },
  {
    prompt:
      "Which action supports compliance with Approved Document C when electrical cables enter a new building?",
    options: [
      "Seal cable entries to prevent the ingress of gas or water",
      "Install switches at a height of between 450mm and 1200mm from the finished floor level",
      "Provide fixed building services which are energy efficient",
      "Fit background ventilators with intermittent extract fans",
    ],
    answer: "Seal cable entries to prevent the ingress of gas or water",
    rationales: {
      "Install switches at a height of between 450mm and 1200mm from the finished floor level":
        "This is an accessibility provision associated with Approved Document M. It changes how users reach controls but does not stop moisture or ground gases entering around a cable penetration.",
      "Provide fixed building services which are energy efficient":
        "Energy performance of fixed services is addressed by Part L. Efficient equipment cannot compensate for an unsealed entry that permits moisture or contaminants into the building.",
      "Fit background ventilators with intermittent extract fans":
        "Background and extract ventilation are Part F measures for indoor air quality. Deliberate ventilation openings do not replace weather- and gas-resistant sealing around service entries.",
    },
    sourceUrls: [APPROVED_DOCUMENT_C],
  },
  {
    prompt:
      "Which listed verification is carried out live at the origin as part of initial verification?",
    options: [
      "Continuity of ring final circuit conductors",
      "Insulation resistance",
      "Continuity of protective conductors",
      "Supply polarity",
    ],
    answer: "Supply polarity",
    rationales: {
      "Continuity of ring final circuit conductors":
        "Ring end-to-end and cross-connection measurements use a low-resistance ohmmeter on an isolated circuit. Energising the ring would be dangerous and invalidate the continuity method.",
      "Insulation resistance":
        "An insulation-resistance tester applies its own DC test voltage after the installation is isolated and sensitive equipment is dealt with. It is not connected to a live supply for this test.",
      "Continuity of protective conductors":
        "Protective-conductor continuity is a dead low-resistance measurement made before energisation. Proving this path first helps establish that exposed-conductive-parts will be protected when live tests begin.",
    },
    sourceUrls: [IET_INITIAL_VERIFICATION],
  },
] as const;
