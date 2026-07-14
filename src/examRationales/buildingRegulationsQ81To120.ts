const APPROVED_DOCUMENT_A =
  "https://www.gov.uk/government/publications/structure-approved-document-a";
const APPROVED_DOCUMENT_B =
  "https://www.gov.uk/government/publications/fire-safety-approved-document-b";
const APPROVED_DOCUMENT_E =
  "https://www.gov.uk/government/publications/resistance-to-sound-approved-document-e";
const APPROVED_DOCUMENT_F =
  "https://www.gov.uk/government/publications/ventilation-approved-document-f";
const APPROVED_DOCUMENT_J =
  "https://www.gov.uk/government/publications/combustion-appliances-and-fuel-storage-systems-approved-document-j";
const APPROVED_DOCUMENT_L_CURRENT =
  "https://www.gov.uk/government/publications/conservation-of-fuel-and-power-approved-document-l";
const APPROVED_DOCUMENT_M =
  "https://www.gov.uk/government/publications/access-to-and-use-of-buildings-approved-document-m";
const APPROVED_DOCUMENT_P =
  "https://www.gov.uk/government/publications/electrical-safety-approved-document-p";
const BSI_EUROPEAN_STANDARDS =
  "https://knowledge.bsigroup.com/articles/just-how-identical-are-identical-standards";
const BUILDING_REGULATIONS_2000_REGULATION_3 =
  "https://www.legislation.gov.uk/uksi/2000/2531/regulation/3/made";
const BUILDING_REGULATIONS_2010 =
  "https://www.legislation.gov.uk/uksi/2010/2214/contents";
const BUILDING_REGULATIONS_2010_REGULATION_3 =
  "https://www.legislation.gov.uk/uksi/2010/2214/regulation/3";
const BUILDING_REGULATIONS_2010_REGULATION_7 =
  "https://www.legislation.gov.uk/uksi/2010/2214/regulation/7";
const BUILDING_REGULATIONS_2010_SCHEDULE_2 =
  "https://www.legislation.gov.uk/uksi/2010/2214/schedule/2";
const COMPETENT_PERSON_SCHEMES =
  "https://www.gov.uk/building-regulations-competent-person-schemes";
const EAWR_1989 = "https://www.legislation.gov.uk/uksi/1989/635/contents";
const IET_AMENDMENT_4_2026 =
  "https://electrical.theiet.org/guidance-and-codes-of-practice/publications-by-category/amendment-42026-to-bs-76712018-iet-wiring-regulations/";
const IET_SPECIAL_LOCATIONS =
  "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/general-faqs/";
const IET_THERMAL_INSULATION =
  "https://electrical.theiet.org/wiring-matters/years/2023/98-november-2023/boat-wiring-why-bs-7671-doesn-t-address-all-the-issues/";
const ISO_9000 = "https://www.iso.org/standards/popular/iso-9000-family";
const SELF_CERTIFICATION_MTC =
  "https://www.gov.uk/government/publications/self-certification-schemes-mandatory-technical-competence-requirements";
const UKAS = "https://www.ukas.com/about-us/";

export const buildingRegulationsQ81To120 = [
  {
    prompt:
      "Approved document A requires notches in joist to be no greater than 0.125 times the:",
    options: ["Depth", "Length", "Span", "Width"],
    answer: "Depth",
    rationales: {
      Length:
        "Joist length is not the cross-sectional dimension weakened by a notch. Length helps describe the member, while the notch-depth limit is calculated from the joist's vertical depth.",
      Span: "Span determines where a notch may be positioned along a simply supported joist, not how deep the notch may be. The maximum notch depth is one eighth of the joist depth.",
      Width:
        "Joist width is not the reference dimension for this limit. A notch removes material from the highly stressed top or bottom edge, so its depth is limited relative to the joist depth.",
    },
    sourceUrls: [APPROVED_DOCUMENT_A],
  },
  {
    prompt:
      "When a European Standard is adopted in the UK and conflicts with an existing purely national British Standard, what normally happens?",
    options: [
      "Both Standards shall apply together",
      "Either Standard may be worked to",
      "Only the British Standard shall be applied",
      "The European Standard is adopted as a BS EN and the conflicting national standard is withdrawn",
    ],
    answer:
      "The European Standard is adopted as a BS EN and the conflicting national standard is withdrawn",
    rationales: {
      "Both Standards shall apply together":
        "A BS EN is the UK's identical national adoption of the European Standard; it is not a second independent rule to apply alongside a conflicting purely national standard. The conflict is removed by withdrawal.",
      "Either Standard may be worked to":
        "The superseded national document does not normally remain a current alternative. A withdrawn standard may still matter to an old contract or historical investigation, but it no longer has current-standard status.",
      "Only the British Standard shall be applied":
        "UK participation in CEN and CENELEC requires an adopted EN to be implemented nationally and conflicting national standards to be withdrawn. A pre-existing British-only document does not automatically take precedence.",
    },
    sourceUrls: [BSI_EUROPEAN_STANDARDS],
  },
  {
    prompt: "What does Approved Document M give guidance on:",
    options: [
      "Access and use of buildings",
      "Drainage and Waste disposal",
      "Resistance to the passage of sound",
      "Resistance to the spread of fire",
    ],
    answer: "Access and use of buildings",
    rationales: {
      "Drainage and Waste disposal":
        "Drainage and waste disposal are the subject of Approved Document H. Part M instead addresses whether people can approach, enter and use buildings and their facilities.",
      "Resistance to the passage of sound":
        "Resistance to the passage of sound belongs to Approved Document E. Its acoustic requirements are separate from Part M's accessibility provisions.",
      "Resistance to the spread of fire":
        "Fire spread is addressed by Approved Document B through requirements for linings, structure and compartmentation. It is not the subject identified by the letter M.",
    },
    sourceUrls: [APPROVED_DOCUMENT_M],
  },
  {
    prompt: "Holes in joists should be apart by at least:",
    options: [
      "1 hole diameter",
      "2 hole diameters",
      "3 hole diameters",
      "4 hole diameters",
    ],
    answer: "3 hole diameters",
    rationales: {
      "1 hole diameter":
        "One diameter does not leave the minimum prescribed separation between adjacent holes. Closely grouped openings can act as one larger weakened region in the joist web.",
      "2 hole diameters":
        "Two diameters is still below the structural guidance. The remaining timber between adjacent openings must preserve enough web area to resist shear and splitting.",
      "4 hole diameters":
        "Four diameters provides more separation than the guidance requires, so it may be a conservative layout but is not the stated minimum. The question asks for the threshold value.",
    },
    sourceUrls: [APPROVED_DOCUMENT_A],
  },
  {
    prompt:
      "Which of the following organizations gives accreditation to certification schemes:",
    options: ["EAL", "ECA", "NICEIC", "UKAS"],
    answer: "UKAS",
    rationales: {
      EAL: "EAL is an awarding organisation for vocational qualifications. Awarding qualifications is different from accrediting certification and inspection bodies against conformity-assessment standards.",
      ECA: "The ECA is an electrical and engineering-services trade association. It represents and supports contractors rather than acting as the United Kingdom's national accreditation body.",
      NICEIC:
        "NICEIC operates certification and registration activities and is itself subject to external oversight. A scheme provider cannot replace UKAS's national role of accrediting conformity-assessment bodies.",
    },
    sourceUrls: [UKAS],
  },
  {
    prompt:
      "Approved document B requires smoke alarms to be mounted on a ceiling at a distance from walls and light fittings of at least:",
    options: ["1.0m", "1.5m", "300mm", "500mm"],
    answer: "300mm",
    rationales: {
      "1.0m":
        "A one-metre clearance is not the minimum stated by Approved Document B and could unnecessarily restrict suitable alarm positions in a small circulation space.",
      "1.5m":
        "The guidance does not require a 1.5 m exclusion zone around every wall and luminaire. That distance could make compliant ceiling siting impossible in many rooms.",
      "500mm":
        "Five hundred millimetres would exceed the stated clearance, but it is not the minimum being tested. The prescribed threshold is 300 mm from walls and light fittings.",
    },
    sourceUrls: [APPROVED_DOCUMENT_B],
  },
  {
    prompt:
      "Under BS 7671, when a single current-carrying cable is totally surrounded by thermal insulation for 0.5 m or more, its current-carrying capacity should be reduced to:",
    options: ["One half", "One quarter", "One third", "Two thirds"],
    answer: "One half",
    rationales: {
      "One quarter":
        "Taking only one quarter of the ventilated current-carrying capacity would be a much larger derating than the default BS 7671 rule. A different value needs cable-specific thermal evidence.",
      "One third":
        "One third is not the default factor for a single cable surrounded for at least 0.5 m. The prescribed fallback is a 0.5 multiplier where more precise information is unavailable.",
      "Two thirds":
        "Two thirds leaves the cable with more capacity than the default thermal-insulation rule permits. Insulation restricts heat loss enough that the design value is halved in this case.",
    },
    sourceUrls: [IET_THERMAL_INSULATION],
  },
  {
    prompt:
      "Under the Approved Document L guidance currently in force in England, each internal light fitting in a new or existing dwelling should have lamps with a minimum luminous efficacy of:",
    options: [
      "40 lumens per circuit-watt",
      "60 lumens per circuit-watt",
      "65 lumens per circuit-watt",
      "75 light source lumens per circuit-watt",
    ],
    answer: "75 light source lumens per circuit-watt",
    rationales: {
      "40 lumens per circuit-watt":
        "Forty lumens per circuit-watt comes from superseded high-efficacy-lighting guidance. It is too low for the Approved Document L edition currently in force.",
      "60 lumens per circuit-watt":
        "Sixty lumens per circuit-watt does not reach the current minimum for an internal fitting in a dwelling. A lamp at that efficacy would fall short even if its light output were otherwise adequate.",
      "65 lumens per circuit-watt":
        "Sixty-five is below the operative 75 light-source-lumens-per-circuit-watt threshold. Specialist and future standards do not turn 65 into the general current minimum.",
    },
    sourceUrls: [APPROVED_DOCUMENT_L_CURRENT],
  },
  {
    prompt:
      "Approved document M 'Access to and use of buildings' requires switches and sockets to be at 'appropriate heights'. The recommended minimum and maximum heights for fixing switches and sockets are:",
    options: [
      "350mm to 1100mm",
      "400mm to 1000mm",
      "450mm to 1200mm",
      "650mm to 1500mm",
    ],
    answer: "450mm to 1200mm",
    rationales: {
      "350mm to 1100mm":
        "A lower limit of 350 mm would place an accessory below the recommended accessible band for a new dwelling. It also omits the permitted upper part of the range.",
      "400mm to 1000mm":
        "This resembles some guidance used for particular outlets in non-dwellings, but it is not the general new-dwelling range cited by Approved Document P from Part M.",
      "650mm to 1500mm":
        "Starting at 650 mm unnecessarily excludes useful low socket positions, while 1500 mm puts a control above the recommended reach range. Both ends are wrong for this provision.",
    },
    sourceUrls: [APPROVED_DOCUMENT_M, APPROVED_DOCUMENT_P],
  },
  {
    prompt: "The Electricity at Work Regulations was created in:",
    options: ["1979", "1989", "1992", "1995"],
    answer: "1989",
    rationales: {
      "1979":
        "The 1979 date belongs to neither the title nor the making of this statutory instrument. The relevant regulations are expressly numbered SI 1989/635.",
      "1992":
        "Several workplace-safety regulations were made in 1992, but the Electricity at Work Regulations pre-date that group. Their title fixes the correct year as 1989.",
      "1995":
        "Nineteen ninety-five is associated with the first CDM regime, not the Electricity at Work Regulations. Electrical systems and work duties had already been codified in 1989.",
    },
    sourceUrls: [EAWR_1989],
  },
  {
    prompt:
      "Which option definitely contains a special location under both BS 7671 and current Approved Document P?",
    options: [
      "A kitchen",
      "A location containing a bathtub",
      "A lounge used for smoking",
      "A room used for office work, likely to contain computers and electronic equipment",
    ],
    answer: "A location containing a bathtub",
    rationales: {
      "A kitchen":
        "A kitchen is not, merely by being a kitchen, a BS 7671 Part 7 special location and it ceased to be a special location for Part P notification in England in 2013.",
      "A lounge used for smoking":
        "Tobacco smoke creates health and fire considerations, but it does not create a BS 7671 electrical zone or a Part P special-location category.",
      "A room used for office work, likely to contain computers and electronic equipment":
        "Sensitive electronic equipment may affect surge protection, electromagnetic compatibility and circuit design. Ordinary office use does not itself make the room a special location.",
    },
    sourceUrls: [APPROVED_DOCUMENT_P, IET_SPECIAL_LOCATIONS],
  },
  {
    prompt:
      "Which of the following commercial buildings electrical installations would approved document P apply to:",
    options: [
      "A public house with a flat over, fed from a common electricity supply",
      "A public house with a flat over, fed from a separate electricity supply",
      "A public house with private function rooms over it",
      "A public house within a larger shopping complex",
    ],
    answer:
      "A public house with a flat over, fed from a common electricity supply",
    rationales: {
      "A public house with a flat over, fed from a separate electricity supply":
        "Part P excludes business premises in the same building as a dwelling where the business has separate metering. The commercial installation does not share the dwelling's source in this option.",
      "A public house with private function rooms over it":
        "Function rooms remain commercial accommodation; calling them private does not make them a dwelling. No shared domestic source is identified to bring the pub installation within Part P.",
      "A public house within a larger shopping complex":
        "A retail complex is not brought within Part P simply because one unit is a pub. The relevant trigger is a dwelling or electricity located within or shared with a dwelling.",
    },
    sourceUrls: [APPROVED_DOCUMENT_P],
  },
  {
    prompt:
      "Which of the following is NOT an automatic fixed requirement for a sole trader applying to a self-certification scheme (formerly called a competent person scheme)?",
    options: [
      "To carry out electrical installations work, submitting examples for assessment",
      "To carry out the full range of electrical test as required by BS7671",
      "To demonstrate at least 3 years electrical installation experience",
      "To show evidence of issuing electrical installation certificates in accordance with BS7671",
    ],
    answer:
      "To demonstrate at least 3 years electrical installation experience",
    rationales: {
      "To carry out electrical installations work, submitting examples for assessment":
        "An assessment needs representative work through which the applicant can demonstrate competence. Scheme entry is not granted solely from an unverified written claim.",
      "To carry out the full range of electrical test as required by BS7671":
        "Inspection and testing competence is central to demonstrating that installation work is safe and compliant. A registrant must be able to obtain and interpret the required results within scope.",
      "To show evidence of issuing electrical installation certificates in accordance with BS7671":
        "Correct records and certification are part of demonstrating control of completed electrical work. The scheme must assess evidence, not assume that the applicant can certify properly.",
    },
    sourceUrls: [SELF_CERTIFICATION_MTC, COMPETENT_PERSON_SCHEMES],
  },
  {
    prompt:
      "When might work on extra low voltage wiring and equipment for the purpose of control, need to be notified to building control.:",
    options: [
      "When work is carried out in a bedroom",
      "When work is carried out in a kitchen",
      "When work is carried out in a lounge",
      "When work is carried out in a swimming pool",
    ],
    answer: "When work is carried out in a swimming pool",
    rationales: {
      "When work is carried out in a bedroom":
        "An ordinary bedroom is outside Part P's defined special locations. An addition to an existing extra-low-voltage control circuit there is not notified merely because of the room name.",
      "When work is carried out in a kitchen":
        "A kitchen is no longer a Part P special location in England. Notification could still arise for a new circuit or consumer-unit replacement, but not from kitchen location alone.",
      "When work is carried out in a lounge":
        "A lounge has no location-based Part P notification trigger. The work must still meet P1, but ordinary additions outside a special location are generally non-notifiable.",
    },
    sourceUrls: [APPROVED_DOCUMENT_P],
  },
  {
    prompt: "Which field does approved document 'B' give guidance on:",
    options: [
      "Energy efficiency",
      "Fire detection",
      "Provision of fresh air",
      "Transmission of noise",
    ],
    answer: "Fire detection",
    rationales: {
      "Energy efficiency":
        "Energy performance, including efficient fixed lighting and building services, is dealt with by Approved Document L rather than the fire-safety document.",
      "Provision of fresh air":
        "Supply and extract ventilation for indoor air quality are Part F matters. Approved Document B may interact with ducts and dampers for fire safety, but it does not set ordinary fresh-air provision.",
      "Transmission of noise":
        "Sound insulation and the acoustic treatment of service penetrations sit under Approved Document E. Part B's corresponding concern is maintaining fire separation.",
    },
    sourceUrls: [APPROVED_DOCUMENT_B],
  },
  {
    prompt:
      "When installing an extract fan, which scenario specifically requires assessment for possible combustion-product spillage caused by depressurisation?",
    options: [
      "When the fan is in a room with a combustion appliance with a balanced flue (sealed room)",
      "When the fan is in a room with a combustion appliance with an open flue",
      "When the fan is in a room with no combustion appliances but has many opening windows",
      "When the fan is in a room with no combustion appliances, but has opening windows",
    ],
    answer:
      "When the fan is in a room with a combustion appliance with an open flue",
    rationales: {
      "When the fan is in a room with a combustion appliance with a balanced flue (sealed room)":
        "A room-sealed balanced-flue appliance takes combustion air from outside and returns products outside through its sealed system. It is not the specific open-flue depressurisation hazard tested here.",
      "When the fan is in a room with no combustion appliances but has many opening windows":
        "Opening windows may affect the fan's airflow, but with no combustion appliance there is no flue from which the fan can draw combustion products into the room.",
      "When the fan is in a room with no combustion appliances, but has opening windows":
        "The number of windows does not create a combustion-spillage mechanism in a room without a combustion appliance. Ventilation performance may still require checking for other reasons.",
    },
    sourceUrls: [APPROVED_DOCUMENT_J],
  },
  {
    prompt: "Approved document 'L' covers:",
    options: [
      "Conservation of fuel and power in dwellings",
      "Conservation of power and light in dwellings",
      "Preservation of fuel and power dwellings",
      "Preservation of power and light in dwellings",
    ],
    answer: "Conservation of fuel and power in dwellings",
    rationales: {
      "Conservation of power and light in dwellings":
        "Lighting is one fixed building service within Part L, but 'power and light' is not the requirement's title or its full scope. Heating, hot water, fabric and ventilation energy are also covered.",
      "Preservation of fuel and power dwellings":
        "The regulatory term is conservation, not preservation, and this wording omits the necessary relationship between the subject and dwellings. It is not an Approved Document title.",
      "Preservation of power and light in dwellings":
        "Part L is not about preserving light or an electricity supply. It limits energy demand and supports efficient building services under the conservation-of-fuel-and-power requirement.",
    },
    sourceUrls: [APPROVED_DOCUMENT_L_CURRENT],
  },
  {
    prompt:
      "Which of the following is an electric floor-heating system covered by BS 7671 Section 753?",
    options: [
      "230V electric cooker circuit",
      "230V electric internal lighting",
      "230V electric supply to a boiler",
      "230V electric underfloor heating",
    ],
    answer: "230V electric underfloor heating",
    rationales: {
      "230V electric cooker circuit":
        "A cooker is a fixed cooking appliance supplied by a final circuit. It is not an embedded floor or ceiling heating system and therefore is not classified by Section 753 on that basis.",
      "230V electric internal lighting":
        "Ordinary luminaires illuminate the room rather than heating a surface. Their selection and installation engage lighting rules, not the particular requirements for embedded heating cables.",
      "230V electric supply to a boiler":
        "A boiler circuit supplies a separate heat-producing appliance. It is distinct from resistance heating elements installed within a floor or ceiling fabric.",
    },
    sourceUrls: [IET_AMENDMENT_4_2026],
  },
  {
    prompt:
      "Which publication family contains quality-management-system standards?",
    options: [
      "BS (EN) ISO 9000",
      "BS 5266 : 1998",
      "BS 5839 : 2002",
      "BS 7671 : 2001",
    ],
    answer: "BS (EN) ISO 9000",
    rationales: {
      "BS 5266 : 1998":
        "The BS 5266 series concerns emergency lighting. It contains technical provisions for escape and standby lighting, not a general organizational quality-management system.",
      "BS 5839 : 2002":
        "The BS 5839 series addresses fire detection and alarm systems. It is a sector technical standard rather than the ISO family for managing consistent organizational quality.",
      "BS 7671 : 2001":
        "BS 7671 contains requirements for electrical installations. Even apart from the obsolete edition year shown, it is not a quality-management-system standard.",
    },
    sourceUrls: [ISO_9000],
  },
  {
    prompt:
      "Why can certain electrical installation work count as 'building work' under the Building Regulations?",
    options: [
      "Always involve constructing things",
      "Involves work which builders typically undertake",
      "It may constitute the provision or extension of a controlled service or fitting",
      "Will involve services, which all habitable room require",
    ],
    answer:
      "It may constitute the provision or extension of a controlled service or fitting",
    rationales: {
      "Always involve constructing things":
        "Physical construction is not the only route into the statutory definition. Providing or extending a controlled service or fitting can be building work without erecting a structural element.",
      "Involves work which builders typically undertake":
        "The occupation of the person doing a task does not decide whether it is building work. Regulation 3 classifies the nature and effect of the work instead.",
      "Will involve services, which all habitable room require":
        "Not every habitable room requires each building service, and the test is not whether rooms commonly contain services. The service or fitting must fall within the legal controlled category.",
    },
    sourceUrls: [BUILDING_REGULATIONS_2010_REGULATION_3, APPROVED_DOCUMENT_P],
  },
  {
    prompt: "Which statement best describes an Approved Document?",
    options: [
      "Statutory guidance showing common ways to meet Building Regulations requirements",
      "A catalogue of mandatory solutions for every design",
      "The Building Regulations themselves",
      "A substitute for considering other applicable requirements",
    ],
    answer:
      "Statutory guidance showing common ways to meet Building Regulations requirements",
    rationales: {
      "A catalogue of mandatory solutions for every design":
        "An Approved Document cannot cover every design and usually presents one accepted route to compliance. A different solution may comply if it satisfies the functional requirement.",
      "The Building Regulations themselves":
        "Approved Documents reproduce some legal text for context, but the documents themselves are guidance. The underlying regulations are the statutory instrument containing the legal requirements.",
      "A substitute for considering other applicable requirements":
        "Each document addresses particular requirements and must be read alongside every other applicable Part and legislation. Following one document does not discharge unrelated duties.",
    },
    sourceUrls: [APPROVED_DOCUMENT_P, BUILDING_REGULATIONS_2010],
  },
  {
    prompt:
      "Which of the following projects would normally be exempt from Building Regulations control?",
    options: [
      "A ground-level carport no larger than 30 m² and open on at least two sides",
      "A conversion of a large house into flats",
      "A kitchen extension",
      "A loft conversion to 2 habitable rooms",
    ],
    answer:
      "A ground-level carport no larger than 30 m² and open on at least two sides",
    rationales: {
      "A conversion of a large house into flats":
        "Creating flats is a material change of use and introduces requirements such as fire separation, sound insulation and ventilation. It is not a small-building exemption.",
      "A kitchen extension":
        "An ordinary enclosed kitchen extension changes the building envelope, structure and services. It does not qualify merely because a different kind of small open carport can be exempt.",
      "A loft conversion to 2 habitable rooms":
        "New habitable loft rooms affect structure, stairs, escape, insulation and ventilation. The conversion therefore requires building-control consideration rather than falling within the carport exemption.",
    },
    sourceUrls: [BUILDING_REGULATIONS_2010_SCHEDULE_2],
  },
  {
    prompt:
      "Which work would be notifiable in England when carried out by someone who is not using a self-certification route?",
    options: [
      "Altering an existing socket circuit outside a special location",
      "Amending an existing kitchen circuit outside a special location",
      "Installation of a new dedicated supply circuit for a audio system in the lounge",
      "Installation of main Equipotential bonging conductors and/or supplementary bonding conductors",
    ],
    answer:
      "Installation of a new dedicated supply circuit for a audio system in the lounge",
    rationales: {
      "Altering an existing socket circuit outside a special location":
        "An addition or alteration to an existing circuit outside a defined special location is generally non-notifiable. It must nevertheless be designed, tested and certificated safely.",
      "Amending an existing kitchen circuit outside a special location":
        "A kitchen ceased to be a Part P special location in England in 2013. Altering its existing circuit does not trigger notification unless the work independently falls into a notifiable category.",
      "Installation of main Equipotential bonging conductors and/or supplementary bonding conductors":
        "Installing or improving bonding alone is not one of the three current notification triggers. It remains safety-critical work and should be verified and recorded appropriately.",
    },
    sourceUrls: [APPROVED_DOCUMENT_P],
  },
  {
    prompt:
      "According to the building regulations 2000, which regulation is entitled 'The meaning of Building work':",
    options: ["Regulation 1", "Regulation 2", "Regulation 3", "Regulation 4"],
    answer: "Regulation 3",
    rationales: {
      "Regulation 1":
        "Regulation 1 provides the citation and commencement of the 2000 Regulations. It does not define the activities treated as building work.",
      "Regulation 2":
        "Regulation 2 is the general interpretation provision, defining individual terms used throughout the instrument. The dedicated meaning-of-building-work rule follows it.",
      "Regulation 4":
        "Regulation 4 sets requirements relating to building work once the work falls within scope. It is not the regulation that first defines that scope.",
    },
    sourceUrls: [BUILDING_REGULATIONS_2000_REGULATION_3],
  },
  {
    prompt:
      "Where are the current legal application and notification procedures for ordinary building work in England set out?",
    options: [
      "Approved document P",
      "The Building Regulations 2010, as amended",
      "The Construction (Design and Management) Regulations 2015",
      "The health and safety at work act 1974",
    ],
    answer: "The Building Regulations 2010, as amended",
    rationales: {
      "Approved document P":
        "Approved Document P explains the domestic electrical requirement and its certification routes. It is guidance, not the complete legal procedure for applications and notices across all building work.",
      "The Construction (Design and Management) Regulations 2015":
        "CDM allocates health-and-safety management duties among clients, designers and contractors. It does not create the Building Regulations approval application process.",
      "The health and safety at work act 1974":
        "The 1974 Act establishes broad workplace duties and enabling powers. It is not the procedural instrument specifying building-control applications and notifications.",
    },
    sourceUrls: [BUILDING_REGULATIONS_2010],
  },
  {
    prompt:
      "When an equivalent new European standard is published, what normally happens to the British standard:",
    options: [
      "Both British standard and the European standard will apply and both must be complied with simultaneously",
      "Either standard can be adopted for a project and the contractor may choose which standard to comply with",
      "The British standard is either immediately withdrawn or withdrawn on a defined basis",
      "The British standard remains in place and will always take precedence in the UK over other documents",
    ],
    answer:
      "The British standard is either immediately withdrawn or withdrawn on a defined basis",
    rationales: {
      "Both British standard and the European standard will apply and both must be complied with simultaneously":
        "Keeping conflicting requirements current together would defeat the harmonised system. The EN is implemented as a national BS EN and the conflicting national publication is withdrawn.",
      "Either standard can be adopted for a project and the contractor may choose which standard to comply with":
        "Withdrawal prevents a superseded national standard from remaining a normal current alternative. Legacy contractual use does not change the publication's withdrawn status.",
      "The British standard remains in place and will always take precedence in the UK over other documents":
        "BSI remains a CEN and CENELEC member and adopts European Standards on the agreed basis. A conflicting British-only standard does not enjoy permanent national precedence.",
    },
    sourceUrls: [BSI_EUROPEAN_STANDARDS],
  },
  {
    prompt: "Approved document F requirement F1 does NOT apply to:",
    options: [
      "A garage used in connection with a single dwelling",
      "A small kitchen inn a flat above ground level",
      "Bathrooms in large dwellings",
      "Utility rooms that are located more than 50m away from the kitchen",
    ],
    answer: "A garage used in connection with a single dwelling",
    rationales: {
      "A small kitchen inn a flat above ground level":
        "Kitchen size and upper-floor position do not remove cooking moisture and pollutants. The dwelling ventilation strategy still needs extract provision for the kitchen.",
      "Bathrooms in large dwellings":
        "A larger dwelling does not exempt its bathrooms. Bathing produces substantial water vapour, so bathrooms remain wet rooms requiring extract ventilation.",
      "Utility rooms that are located more than 50m away from the kitchen":
        "Distance from the kitchen is not an exemption. A utility room can generate its own moisture from washing and drying and is assessed as an extract room in its own right.",
    },
    sourceUrls: [APPROVED_DOCUMENT_F],
  },
  {
    prompt:
      "Regulations 7 of the building regulations require that building work is carried out",
    options: [
      "In a workmanlike manner",
      "In the most cost effective manner",
      "In the quickest manner",
      "In the quietest manner",
    ],
    answer: "In a workmanlike manner",
    rationales: {
      "In the most cost effective manner":
        "Cost control may be a contractual objective, but regulation 7 does not excuse unsuitable material or poor workmanship because it is cheaper.",
      "In the quickest manner":
        "Speed is not the statutory quality test. Rushing work can conflict with the duty if it prevents proper preparation, installation or checking.",
      "In the quietest manner":
        "Noise may be controlled by planning conditions, environmental law or site management, but 'quietest manner' is not the workmanship wording in regulation 7.",
    },
    sourceUrls: [BUILDING_REGULATIONS_2010_REGULATION_7],
  },
  {
    prompt:
      "An electrical cable route penetrates the ceiling/floor between two flats, there are specific issues that need to be addressed with regards to minimising the passage of sound between the two flats. Which document would you refer to for guidance:",
    options: [
      "Approved document E",
      "Approved document J",
      "BS8000",
      "The IEE wiring regulations",
    ],
    answer: "Approved document E",
    rationales: {
      "Approved document J":
        "Approved Document J addresses combustion air, flues, chimneys and fuel storage. It is not the source for restoring acoustic separation around a cable penetration.",
      BS8000:
        "The BS 8000 series provides workmanship guidance for construction trades, but it does not replace the Building Regulations acoustic performance guidance for separating floors.",
      "The IEE wiring regulations":
        "BS 7671 governs electrical safety of the cable system. Although penetrations must also be properly sealed, the specific requirement to resist sound transmission comes from Part E.",
    },
    sourceUrls: [APPROVED_DOCUMENT_E],
  },
  {
    prompt: "What does Approved document L1 NOT give guidance on:",
    options: [
      "Conservation of fuel and power in non domestic buildings",
      "Lighting control in domestic dwellings",
      "Lighting efficiency in dwellings",
      "Space heating in dwellings",
    ],
    answer: "Conservation of fuel and power in non domestic buildings",
    rationales: {
      "Lighting control in domestic dwellings":
        "The dwelling volume includes local control of internal lighting and automatic or manual control conditions for external lighting. Lighting controls are therefore within scope.",
      "Lighting efficiency in dwellings":
        "Part L's dwelling guidance sets a minimum luminous efficacy for internal light fittings. That makes lighting efficiency an express domestic topic.",
      "Space heating in dwellings":
        "Heating generation, distribution and controls are major fixed-building-service elements in the dwelling energy guidance. They are not excluded from Volume 1.",
    },
    sourceUrls: [APPROVED_DOCUMENT_L_CURRENT],
  },
  {
    prompt:
      "Approved document M gives guidance on accessibility of switches and sockets in dwellings and other buildings, in which parts of the building does this guidance apply:",
    options: [
      "All habitable rooms",
      "In rooms only on ground level",
      "Only in rooms designed by the building owner",
      "Only in the rooms of a domestic dwelling where a wheelchair bound person lives",
    ],
    answer: "All habitable rooms",
    rationales: {
      "In rooms only on ground level":
        "Accessible accessory positioning is not switched off above the entrance storey. Habitable rooms elsewhere in the dwelling still need usable controls and outlets.",
      "Only in rooms designed by the building owner":
        "A building owner cannot opt individual habitable rooms out of a functional accessibility requirement. The applicable dwelling category and the room's use determine the provision.",
      "Only in the rooms of a domestic dwelling where a wheelchair bound person lives":
        "Baseline accessible positioning is not conditional on identifying a current wheelchair user. Category 1 applies generally, with enhanced Category 2 and 3 provisions where required.",
    },
    sourceUrls: [APPROVED_DOCUMENT_M],
  },
  {
    prompt:
      "In practice, for a business or individual to become a member of one of the competent person schemes, they must:",
    options: [
      "Confirm in writing to the scheme provider the level of technical competence of the operative whom is responsible for carrying out the electrical installation work",
      "Register with the local building control service and pay a annual subscription fee",
      "Register with the local building control service and pay them notification/inspection fee for every notifiable undertaken",
      "Undertake electrical work in dwellings, undergo in initial technical assessment and thereafter undergo periodic surveillance by the competent person scheme",
    ],
    answer:
      "Undertake electrical work in dwellings, undergo in initial technical assessment and thereafter undergo periodic surveillance by the competent person scheme",
    rationales: {
      "Confirm in writing to the scheme provider the level of technical competence of the operative whom is responsible for carrying out the electrical installation work":
        "Self-declaration alone is not independent evidence of competence. The scheme assesses the business and its responsible people against defined technical criteria.",
      "Register with the local building control service and pay a annual subscription fee":
        "Scheme membership is arranged with an authorised scheme operator, not purchased as a subscription from local building control. The two are alternative compliance routes.",
      "Register with the local building control service and pay them notification/inspection fee for every notifiable undertaken":
        "Paying building-control fees for each job describes the non-member notification route. Scheme members instead notify compliant work through their scheme under its rules.",
    },
    sourceUrls: [COMPETENT_PERSON_SCHEMES, SELF_CERTIFICATION_MTC],
  },
  {
    prompt:
      "The Building Regulations are made under the Building Act 1984. Which principal consolidated regulations currently apply in England?",
    options: [
      "The building regulations 1984",
      "The building regulations 1990",
      "The Building Regulations 2010",
      "The building regulations 2002",
    ],
    answer: "The Building Regulations 2010",
    rationales: {
      "The building regulations 1984":
        "The Building Act 1984 supplies enabling powers, but an Act is not the same instrument as the current consolidated Building Regulations made under it.",
      "The building regulations 1990":
        "Nineteen ninety is not the year of the principal current statutory instrument. Later amendments do not rename the consolidated regulations after that date.",
      "The building regulations 2002":
        "There is no principal current English edition titled the Building Regulations 2002. The 2010 instrument consolidated and replaced the earlier 2000 regime.",
    },
    sourceUrls: [BUILDING_REGULATIONS_2010],
  },
  {
    prompt:
      "Regulation 7 (Materials & Workmanship) of the building regulations requires that building work is to be carried out:",
    options: [
      "Only after all the relevant paperwork has been completed",
      "Only with Adequate assistance",
      "With adequate and proper materials",
      "With all the correct tools for the job",
    ],
    answer: "With adequate and proper materials",
    rationales: {
      "Only after all the relevant paperwork has been completed":
        "Applications, notices and records may be required elsewhere, but regulation 7's material-quality duty is not expressed as a paperwork precondition.",
      "Only with Adequate assistance":
        "People must be competent and properly supported under the wider dutyholder regime, yet 'adequate assistance' is not the material requirement stated in regulation 7.",
      "With all the correct tools for the job":
        "Suitable tools help achieve safe workmanship but do not themselves prove material compliance. The installed products must be appropriate, prepared and used adequately.",
    },
    sourceUrls: [BUILDING_REGULATIONS_2010_REGULATION_7],
  },
  {
    prompt:
      "When does the electrical installation in a new greenhouse fall within the scope of Approved Document P?",
    options: [
      "When the greenhouse forms part of a commercial farm complex",
      "When the greenhouse is part if a retail garden centre that IS accessible to the public",
      "When the greenhouse is part of retail garden centre that is NOT accessible to the public",
      "When the greenhouse is on land associated with a private dwelling and is supplied from that dwelling's electrical installation",
    ],
    answer:
      "When the greenhouse is on land associated with a private dwelling and is supplied from that dwelling's electrical installation",
    rationales: {
      "When the greenhouse forms part of a commercial farm complex":
        "A farm's commercial installation is not within Part P merely because a greenhouse contains low-voltage wiring. No dwelling or shared domestic source is identified.",
      "When the greenhouse is part if a retail garden centre that IS accessible to the public":
        "Public access can increase electrical risk and affect BS 7671 design, but it is not the Part P scope test. A retail installation remains non-domestic without the specified domestic supply link.",
      "When the greenhouse is part of retail garden centre that is NOT accessible to the public":
        "Removing public access does not turn commercial premises into a dwelling or associated domestic land. Part P scope follows the building and electricity source, not customer access.",
    },
    sourceUrls: [APPROVED_DOCUMENT_P],
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
        "Part A addresses structural stability. A diffuser that forms part of a ceiling lining is selected here for its contribution to internal fire spread, not for carrying building loads.",
      "Approved document L1":
        "Part L addresses the energy performance and control of the lighting system. It does not replace the fire classification required of a ceiling lining component.",
      "Code of Practice for rafter roofs":
        "Rafter-roof guidance concerns roof structure and detailing, not the reaction-to-fire performance of an internal lighting diffuser incorporated into a ceiling.",
    },
    sourceUrls: [APPROVED_DOCUMENT_B],
  },
  {
    prompt:
      "For a solid timber floor joist, Approved Document A limits a notch to 0.125 times which dimension?",
    options: ["Depth", "Length", "Span", "Width"],
    answer: "Depth",
    rationales: {
      Length:
        "The permitted cut is not one eighth of the joist's overall length; that could remove an enormous amount of timber. The rule scales the cut to the vertical section being weakened.",
      Span: "Span is used to define the zone along the joist in which notching is allowed. It does not supply the dimension for calculating the maximum notch depth.",
      Width:
        "The side-to-side width of a joist does not set this notch limit. Structural capacity at the edge is protected by restricting how far the notch extends through the joist depth.",
    },
    sourceUrls: [APPROVED_DOCUMENT_A],
  },
  {
    prompt:
      "In a two storey domestic house with three bedrooms, a kitchen with a door and a total floor area of less than 200m² per floor, what is the minimum number of smoke alarms required?",
    options: ["0", "1", "2", "4"],
    answer: "2",
    rationales: {
      "0": "No alarms would provide no automatic warning at all and could not meet the recommended Grade D2, Category LD3 provision for a new dwellinghouse.",
      "1": "A single alarm cannot provide the minimum circulation-space detection on both storeys. Smoke may accumulate on the unprotected floor before reaching that detector.",
      "4": "Four alarms may follow from a more protective, layout-specific design, but bedroom count does not impose one alarm per bedroom. The minimum in the stated two-storey scenario is one per storey.",
    },
    sourceUrls: [APPROVED_DOCUMENT_B],
  },
  {
    prompt:
      "Under the On-Site Guide standard final-circuit arrangement, a 2.5 mm² radial socket-outlet circuit serving no more than 50 m² is protected at:",
    options: ["20A", "230A", "2A", "32A"],
    answer: "20A",
    rationales: {
      "230A":
        "Two hundred and thirty is the nominal voltage figure mistakenly presented as a current. A 230 A protective device would grossly exceed the rating of this small final circuit.",
      "2A": "A 2 A device would protect the cable but could supply only a tiny load and is not the standard socket radial arrangement. Ordinary portable appliances would cause immediate overload operation.",
      "32A":
        "A 32 A rating is associated with other arrangements, such as a suitable ring final or a larger radial conductor after design checks. It is not the standard 2.5 mm², 50 m² radial combination stated.",
    },
    sourceUrls: [IET_AMENDMENT_4_2026],
  },
  {
    prompt:
      "Part 'A' of the building, states that horizontal chases should not be deeper than:",
    options: [
      "One eighth the wall thickness",
      "One quarter the wall thickness",
      "One sixth the wall thickness",
      "One third the wall thickness",
    ],
    answer: "One sixth the wall thickness",
    rationales: {
      "One eighth the wall thickness":
        "One eighth is a shallower chase and may be a conservative design choice, but it is not the maximum depth stated for a horizontal chase. The question asks for the permitted limit.",
      "One quarter the wall thickness":
        "A quarter removes more of the continuous horizontal load-bearing section than the simplified guidance permits. It therefore exceeds the one-sixth limit.",
      "One third the wall thickness":
        "One third is the familiar maximum for a vertical chase, whose direction follows the wall's load path. Applying it horizontally would weaken a continuous band too severely.",
    },
    sourceUrls: [APPROVED_DOCUMENT_A],
  },
] as const;
