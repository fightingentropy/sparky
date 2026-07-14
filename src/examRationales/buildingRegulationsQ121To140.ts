const BUILDING_CONTROL_APPLICATION =
  "https://www.gov.uk/building-regulations-approval/how-to-apply";
const IET_INSULATION_RESISTANCE =
  "https://electrical.theiet.org/wiring-matters/years/2020/81-july-2020/history-of-insulation-resistance-testing/";
const APPROVED_DOCUMENT_L =
  "https://www.gov.uk/government/publications/conservation-of-fuel-and-power-approved-document-l";
const IET_PROTECTIVE_EARTHING =
  "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/webinar-questions-and-answers/protective-earthing-webinar/";
const IET_PROTECTIVE_BONDING =
  "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/earthing-and-bonding-faqs/";
const IET_EARTH_ELECTRODES =
  "https://electrical.theiet.org/media/1034/2006_21_winter_wiring_matters__complete_no_adverts.pdf";
const ISO_PROTECTIVE_SHIELD_SYMBOL =
  "https://www.iso.org/obp/ui?_escaped_fragment_=iso%3Astd%3Aiso%3A7010%3Aed-3%3Av2%3Aamd%3A9%3Av1%3Aen";
const APPROVED_DOCUMENT_P =
  "https://www.gov.uk/government/publications/electrical-safety-approved-document-p";
const APPROVED_DOCUMENT_M =
  "https://www.gov.uk/government/publications/access-to-and-use-of-buildings-approved-document-m";
const IET_DOMESTIC_LIGHTING =
  "https://electrical.theiet.org/wiring-matters/years/2024/103-november-2024/how-does-the-installation-of-microgeneration-affect-the-rated-current-of-a-consumer-unit/";
const FIRE_SAFETY_SLEEPING_ACCOMMODATION =
  "https://www.gov.uk/government/publications/fire-safety-risk-assessment-sleeping-accommodation/fire-safety-risk-assessment-sleeping-accommodation-accessible";
const APPROVED_DOCUMENT_F =
  "https://www.gov.uk/government/publications/ventilation-approved-document-f";
const IET_RING_FINAL_CIRCUITS =
  "https://electrical.theiet.org/wiring-matters/years/2020/80-may-2020/back-to-the-forum/";
const IET_ABOUT_BS_7671 =
  "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/about-bs-7671/";
const HSE_EAWR_GUIDANCE = "https://www.hse.gov.uk/pubns/priced/hsr25.pdf";
const IET_SHOWER_CIRCUIT_DESIGN =
  "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/webinar-questions-and-answers/electrical-diversity-and-load-curtailment-evc-webinar/";
const IET_CONSUMER_UNITS =
  "https://electrical.theiet.org/courses-resources-and-career-for-electrical-professionals/free-resources/consumer-guidance/consumer-units/";
const SELF_CERTIFICATION_MTC =
  "https://www.gov.uk/government/publications/self-certification-schemes-mandatory-technical-competence-requirements";
const BUILDING_REGULATIONS_REGULATION_4 =
  "https://www.legislation.gov.uk/uksi/2010/2214/regulation/4";
const HSE_CDM_TIMELINE =
  "https://www.hse.gov.uk/construction/cdm/2015/timeline.htm";

export const buildingRegulationsQ121To140 = [
  {
    prompt:
      "If a project uses a private registered building control approver for ordinary building work, what notice is given to the local authority?",
    options: [
      "An Initial Notice",
      "Detailed building plans",
      "Planning outline",
      "Planning permission",
    ],
    answer: "An Initial Notice",
    rationales: {
      "Detailed building plans":
        "Plans may be needed so the approver can assess the proposed work, but plans are not the prescribed notice that starts the private building-control route. The route is notified to the local authority by an Initial Notice.",
      "Planning outline":
        "“Planning outline” is not a prescribed building-control document. Planning and building control are separate regimes, and the private building-control route is identified through an Initial Notice.",
      "Planning permission":
        "Planning permission concerns whether development may proceed in planning terms. It neither appoints the registered building control approver nor replaces the Initial Notice given to the local authority.",
    },
    sourceUrls: [BUILDING_CONTROL_APPLICATION],
  },
  {
    prompt:
      "On a two-way lighting circuit, what should be done during insulation-resistance testing so every switched conductor path is included?",
    options: [
      "A connection is made between both switches",
      "None of the switches are switched to the off position",
      "None of the switches are switched to the on position",
      "Operate the two-way switches and repeat the test as needed",
    ],
    answer: "Operate the two-way switches and repeat the test as needed",
    rationales: {
      "A connection is made between both switches":
        "Adding a temporary link between the switches changes the circuit rather than selecting its normal current paths. The test should cover the installed strapper paths by changing the switch positions and repeating the measurement where necessary.",
      "None of the switches are switched to the off position":
        "A two-way pair does not have one universal combination in which both devices are simply “on.” One switch arrangement selects only one strapper path, so relying on that position can leave another path untested.",
      "None of the switches are switched to the on position":
        "Keeping the switches in a single supposed “off” state can exclude switched conductors from the measurement. The positions must be changed so insulation on each alternative path is subjected to the test.",
    },
    sourceUrls: [IET_INSULATION_RESISTANCE],
  },
  {
    prompt:
      "Under the Approved Document L guidance currently in force in England, what is the minimum luminous efficacy for lamps in each internal fixed light fitting in a dwelling?",
    options: [
      "20 lumens per circuit watt",
      "40 lumens per circuit watt",
      "60 lumens per circuit watt",
      "75 light source lumens per circuit-watt",
    ],
    answer: "75 light source lumens per circuit-watt",
    rationales: {
      "20 lumens per circuit watt":
        "Twenty lumens per circuit-watt is far below the current dwelling guidance. A lamp at that efficacy would waste much more input power as heat and would not meet the 75 light-source-lumens-per-circuit-watt threshold.",
      "40 lumens per circuit watt":
        "Forty lumens per circuit-watt is a superseded high-efficacy-lighting benchmark. It does not meet the minimum in the Approved Document L guidance currently applying in England.",
      "60 lumens per circuit watt":
        "Sixty lumens per circuit-watt is more efficient than the older 40-lumen benchmark but still falls 15 lumens per circuit-watt short of the operative requirement.",
    },
    sourceUrls: [APPROVED_DOCUMENT_L],
  },
  {
    prompt:
      "Using BS 7671 Table 54.7, what copper earthing-conductor size corresponds to a 25 mm² copper line conductor in a TN system?",
    options: ["10 mm²", "16 mm²", "25 mm²", "6 mm²"],
    answer: "16 mm²",
    rationales: {
      "10 mm²":
        "Ten square millimetres is not the Table 54.7 selection for a 25 mm² line conductor. A different size could only be justified by the applicable calculation and minimum-size rules, not by this table lookup.",
      "25 mm²":
        "Matching the line conductor at 25 mm² would be conservative, but Table 54.7 permits the protective conductor to reduce to 16 mm² when the copper line conductor is over 16 mm² and no greater than 35 mm².",
      "6 mm²":
        "Six square millimetres is below the simplified Table 54.7 result for the stated line conductor. Selecting it without a valid calculation would not establish adequate thermal withstand under fault conditions.",
    },
    sourceUrls: [IET_PROTECTIVE_EARTHING],
  },
  {
    prompt:
      "If an incoming metallic service that is an extraneous-conductive-part is not correctly main-bonded, what is the principal safety consequence?",
    options: [
      "An increased risk of electric shock",
      "An increased risk of fire",
      "An increased risk of gas or water leaks",
      "Arcing of electricity between pipes",
    ],
    answer: "An increased risk of electric shock",
    rationales: {
      "An increased risk of fire":
        "Electrical faults can cause fire in some circumstances, but the defining purpose of main protective bonding is to limit hazardous touch voltage between simultaneously accessible conductive parts. The direct consequence being tested is shock risk.",
      "An increased risk of gas or water leaks":
        "Protective bonding does not seal, support or mechanically protect a gas or water service. A leak is primarily a pipework-integrity defect, whereas incorrect bonding fails to control electrical potential differences.",
      "Arcing of electricity between pipes":
        "Visible arcing can occur in particular faults or when a current-carrying connection is disturbed, but it is not the general result of every bonding defect. The systematic danger is an unsafe voltage between touchable parts.",
    },
    sourceUrls: [IET_PROTECTIVE_BONDING],
  },
  {
    prompt:
      "Which listed instrument can be used to determine earth-electrode resistance by an earth fault loop method, where that method is appropriate?",
    options: [
      "A low resistance ohmeter",
      "A touch test",
      "An earth loop impedance tester",
      "An insulation resistance tester",
    ],
    answer: "An earth loop impedance tester",
    rationales: {
      "A low resistance ohmeter":
        "A low-resistance ohmmeter is suited to conductor continuity measurements. It cannot, through two ordinary test leads, isolate and measure the distributed resistance between an electrode and the general mass of Earth.",
      "A touch test":
        "Touch is neither quantitative nor safe evidence of electrode resistance. It exposes the tester to possible hazardous voltage and produces no value that can be assessed or recorded.",
      "An insulation resistance tester":
        "An insulation-resistance tester applies a DC test voltage to assess insulation between conductors or to earth. That is a different property from the impedance of the fault loop containing the installation electrode.",
    },
    sourceUrls: [IET_EARTH_ELECTRODES],
  },
  {
    prompt: "What does the displayed IEC marking mean?",
    options: [
      "An unprotected lamp must be used only in a luminaire with a protective shield",
      "Light which can be covered by thermally insulating material",
      "Light which can be installed into a flammable surface",
      "Smoke alarm",
    ],
    answer:
      "An unprotected lamp must be used only in a luminaire with a protective shield",
    rationales: {
      "Light which can be covered by thermally insulating material":
        "Insulation-cover suitability concerns whether a recessed luminaire can safely dissipate heat when covered. IEC 60417-6071 instead warns that the lamp itself needs a luminaire shield against hazards such as shattering and radiation.",
      "Light which can be installed into a flammable surface":
        "Suitability for mounting on normally flammable material is conveyed by different luminaire construction requirements and markings. The illustrated lamp-in-enclosure symbol instructs the user to provide a protective shield.",
      "Smoke alarm":
        "A smoke-alarm mark depicts or identifies fire-detection equipment, not a lamp inside a protective enclosure. This IEC symbol is an operating instruction for an unprotected lamp.",
    },
    sourceUrls: [ISO_PROTECTIVE_SHIELD_SYMBOL],
  },
  {
    prompt:
      "Which listed document belongs to planning rather than completion or certification of notifiable Part P work?",
    options: [
      "An appropriate electrical installation certificate",
      "Building control completion certificate",
      "Final certificate issued under a registered building control approver route",
      "Planning approval certificate",
    ],
    answer: "Planning approval certificate",
    rationales: {
      "An appropriate electrical installation certificate":
        "The electrical certificate records the design, construction, inspection and test results for the installation work. It is evidence relevant to Part P compliance, not a planning decision.",
      "Building control completion certificate":
        "A completion certificate is a building-control record issued when the relevant authority is satisfied with the completed work. It belongs to the compliance route rather than planning permission.",
      "Final certificate issued under a registered building control approver route":
        "A final certificate concludes the private building-control route and is submitted for local-authority acceptance. It does not grant planning consent or decide land-use matters.",
    },
    sourceUrls: [APPROVED_DOCUMENT_P, BUILDING_CONTROL_APPLICATION],
  },
  {
    prompt: "The building regulation part that refers to accessibility is?",
    options: ["Part L", "Part M", "Part N", "Part P"],
    answer: "Part M",
    rationales: {
      "Part L":
        "Part L addresses conservation of fuel and power, including the energy performance of buildings and services. Accessibility and the use of buildings are addressed by Part M.",
      "Part N":
        "Former Part N dealt with glazing safety, and its remaining subject matter was incorporated elsewhere in the regulations. It is not the current access-to-and-use requirement.",
      "Part P":
        "Part P covers electrical safety in dwellings. Although accessible controls can affect electrical design, the Building Regulations requirement specifically dedicated to access and use is Part M.",
    },
    sourceUrls: [APPROVED_DOCUMENT_M],
  },
  {
    prompt:
      "In a typical small domestic lighting-circuit design, which listed overcurrent protective-device rating is commonly used?",
    options: ["13A", "16A", "32A", "6A"],
    answer: "6A",
    rationales: {
      "13A":
        "Thirteen amperes is the familiar BS 1362 plug-fuse rating, not a normal nominal rating for the circuit-breaker protecting a small domestic lighting final circuit.",
      "16A":
        "A 16 A lighting circuit can be designed in suitable circumstances, so the value is not inherently prohibited. It is nevertheless above the common 6 A arrangement described by this typical small domestic example.",
      "32A":
        "Thirty-two amperes is commonly associated with a ring final socket-outlet circuit. A small lighting circuit has a much lower design current and is not normally protected at that rating.",
    },
    sourceUrls: [IET_DOMESTIC_LIGHTING],
  },
  {
    prompt:
      "What minimum rated duration is normally required for emergency escape lighting in places used for sleeping and in places of entertainment?",
    options: ["1", "3", "5", "8"],
    answer: "3",
    rationales: {
      "1": "A one-hour system is appropriate only where evacuation follows immediately and the premises will not be reoccupied until the battery has recharged. Sleeping and entertainment uses normally require the longer three-hour provision.",
      "5": "Five hours is not the standard rated duration selected for this risk category. Specifying extra autonomy may be a project choice, but it is not the normal minimum being tested.",
      "8": "Eight hours resembles a working-shift or overnight duration rather than the emergency-lighting classification. The system is designed to support escape and relevant post-failure use for three hours, not an entire night.",
    },
    sourceUrls: [FIRE_SAFETY_SLEEPING_ACCOMMODATION],
  },
  {
    prompt:
      "In a natural-ventilation strategy for a new dwelling, which component admits outdoor air continuously into habitable rooms?",
    options: [
      "Background ventilators",
      "Continuous mechanical extraction",
      "Continuous mechanical supply with heat recovery",
      "Passive stack ventilation",
    ],
    answer: "Background ventilators",
    rationales: {
      "Continuous mechanical extraction":
        "Continuous mechanical extract is a distinct whole-dwelling strategy in which fans continuously remove air from wet rooms. It is not the passive inlet component of the natural-ventilation strategy.",
      "Continuous mechanical supply with heat recovery":
        "Mechanical ventilation with heat recovery supplies and extracts air through fans and transfers heat between the airstreams. It does not rely on background ventilators as the defined natural-air inlet method.",
      "Passive stack ventilation":
        "A passive stack uses vertical ducts and buoyancy to extract air from wet rooms. The question asks for the component that admits replacement outdoor air into habitable rooms, which is the background ventilator.",
    },
    sourceUrls: [APPROVED_DOCUMENT_F],
  },
  {
    prompt:
      "Does BS 7671 set a fixed numerical maximum for socket-outlets on a properly designed ring final circuit?",
    options: [
      "10",
      "20",
      "Limited by the protective device rating",
      "No fixed numerical limit; the circuit must still satisfy all design constraints",
    ],
    answer:
      "No fixed numerical limit; the circuit must still satisfy all design constraints",
    rationales: {
      "10": "Ten is not a general BS 7671 maximum. A compliant design can contain fewer or more outlets according to expected demand, circuit layout, conductor capacity, voltage drop and the applicable ring-final rules.",
      "20": "Twenty is another arbitrary outlet count rather than a Wiring Regulations limit. Simply staying below twenty would not prove that load distribution, floor area or cable protection is satisfactory.",
      "Limited by the protective device rating":
        "The protective-device rating constrains current and must coordinate with the conductors, but it does not translate into a fixed socket count. The connected and expected loads, not the number of faceplates alone, determine current demand.",
    },
    sourceUrls: [IET_RING_FINAL_CIRCUITS, IET_ABOUT_BS_7671],
  },
  {
    prompt: "BS 7671, Requirements for Electrical Installations, is:",
    options: [
      "A non-statutory British Standard",
      "A legally binding publication",
      "A statutory document",
      "To be used by supervisors only",
    ],
    answer: "A non-statutory British Standard",
    rationales: {
      "A legally binding publication":
        "BS 7671 does not itself acquire legal force merely through publication. A law, contract or specification can require compliance with it, but the underlying legal duty then comes from that separate instrument.",
      "A statutory document":
        "Statutory instruments are legislation made under powers granted by an Act. BS 7671 is a consensus technical standard; HSE describes it as non-statutory guidance likely to support compliance with electrical-safety law.",
      "To be used by supervisors only":
        "The standard is used by designers, installers, inspectors, testers and maintainers as well as supervisors. Restricting it to one job role would defeat its installation-wide purpose.",
    },
    sourceUrls: [IET_ABOUT_BS_7671, HSE_EAWR_GUIDANCE],
  },
  {
    prompt:
      "Which design check is specifically prompted by increasing an instantaneous shower rating from 7 kW to 10 kW?",
    options: [
      "The cable cpc will not fail under fault current",
      "The circuit cable and protective device are adequate for the increased load",
      "The new unit will provide sufficient flow",
      "The unit will heat the water sufficiently",
    ],
    answer:
      "The circuit cable and protective device are adequate for the increased load",
    rationales: {
      "The cable cpc will not fail under fault current":
        "Protective-conductor fault withstand always needs to be adequate, but the change in kilowatt rating directly increases normal design current. That first prompts reassessment of the complete circuit cable and protective-device coordination.",
      "The new unit will provide sufficient flow":
        "Water flow depends on the appliance, pressure and plumbing conditions. It is not the electrical circuit-design consequence of raising the connected load from 7 kW to 10 kW.",
      "The unit will heat the water sufficiently":
        "Heating performance is an appliance-selection matter and the higher rating generally increases available heating power. The installer must still prove that the existing electrical circuit can safely carry and protect the greater current.",
    },
    sourceUrls: [IET_SHOWER_CIRCUIT_DESIGN],
  },
  {
    prompt:
      "A missing consumer-unit blank immediately breaches which enclosure requirement?",
    options: [
      "IP ratings",
      "Part P of the Building Regulations",
      "Section 701 of the IET Wiring Regulations",
      "The 17th Edition Wiring Regulations Amendment 1",
    ],
    answer: "IP ratings",
    rationales: {
      "Part P of the Building Regulations":
        "Part P is the broad legal requirement for reasonable electrical safety in dwellings. The immediate, technically identifiable defect is loss of the enclosure's required degree of protection against access to live parts.",
      "Section 701 of the IET Wiring Regulations":
        "Section 701 adds requirements for locations containing a bath or shower. A consumer-unit opening breaches basic enclosure protection regardless of whether the unit is near such a location.",
      "The 17th Edition Wiring Regulations Amendment 1":
        "Amendment 1 to the 17th Edition is a superseded edition and is not the name of the enclosure property lost by removing a blank. IP classification expresses the relevant protection against access and ingress.",
    },
    sourceUrls: [IET_CONSUMER_UNITS],
  },
  {
    prompt:
      "What is the core requirement for a member of a self-certification scheme (formerly a competent person scheme)?",
    options: [
      "Demonstrate competence within their registered scope and self-certify compliant work",
      "Hold every electrical qualification available",
      "Have been a qualified electrician for at least 5 years",
      "Have completed a relevant and recognised apprenticeship",
    ],
    answer:
      "Demonstrate competence within their registered scope and self-certify compliant work",
    rationales: {
      "Hold every electrical qualification available":
        "No person can or needs to hold every electrical qualification. Assessment is task- and scope-based: the registrant must demonstrate the knowledge, skills and behaviours relevant to the controlled work being certified.",
      "Have been a qualified electrician for at least 5 years":
        "Length of service can contribute useful experience but does not by itself demonstrate the mandatory technical competences. The scheme assesses current capability for the registered work categories.",
      "Have completed a relevant and recognised apprenticeship":
        "An apprenticeship is a valuable route into the trade, not the only permitted evidence of competence. Scheme registration depends on meeting the applicable assessment criteria rather than one historical training route.",
    },
    sourceUrls: [SELF_CERTIFICATION_MTC],
  },
  {
    prompt:
      "When a domestic socket circuit is rewired as an alteration, which Building Regulations principle applies to the completed work?",
    options: [
      "Every socket must be fixed with its bottom edge at 450 mm",
      "Every socket must be fixed with its top edge at 450 mm",
      "The new work must comply, and the dwelling must be no more unsatisfactory than before",
      "Every socket must be reachable without bending",
    ],
    answer:
      "The new work must comply, and the dwelling must be no more unsatisfactory than before",
    rationales: {
      "Every socket must be fixed with its bottom edge at 450 mm":
        "The familiar 450–1200 mm accessible band is expressed to the centre line for relevant new-dwelling guidance, not as a universal bottom-edge rule for every alteration to an existing dwelling.",
      "Every socket must be fixed with its top edge at 450 mm":
        "Fixing every socket with its top at 450 mm would place its centre below that reference level and is not a general alteration rule. Existing-building duties are assessed through the applicable requirements and non-worsening principle.",
      "Every socket must be reachable without bending":
        "Avoiding all bending is not a measurable Building Regulations test and would exclude ordinary low socket positions. Accessibility must be considered through the applicable Part M guidance and the specific building context.",
    },
    sourceUrls: [BUILDING_REGULATIONS_REGULATION_4, APPROVED_DOCUMENT_P],
  },
  {
    prompt:
      "An electrical contractor can self-certify notifiable work through which route?",
    options: [
      "Registration with an authorised self-certification scheme",
      "Have been an electrical contractor for more than 5 years",
      "Have been given permission by the local authority building control",
      "They have served an apprenticeship",
    ],
    answer: "Registration with an authorised self-certification scheme",
    rationales: {
      "Have been an electrical contractor for more than 5 years":
        "Trading for five years does not confer a statutory self-certification power. The business or person must be assessed and registered for the relevant work by an authorised scheme operator.",
      "Have been given permission by the local authority building control":
        "Building control can supervise and certify work through its own route, but an informal permission does not make the contractor a self-certifier. Scheme registration is the defined alternative to advance building-control approval.",
      "They have served an apprenticeship":
        "Completing an apprenticeship may provide competence evidence, but it does not register the contractor or authorise notification through a scheme. Assessment and current scheme registration are still required.",
    },
    sourceUrls: [SELF_CERTIFICATION_MTC],
  },
  {
    prompt:
      "In which year did the original Construction (Design and Management) Regulations 1994 come into force?",
    options: ["1974", "1981", "1995", "2008"],
    answer: "1995",
    rationales: {
      "1974":
        "Nineteen seventy-four is the year of the Health and Safety at Work etc. Act, the primary framework under which later health-and-safety regulations were made. It predates the original CDM regime by two decades.",
      "1981":
        "Nineteen eighty-one is associated with the 15th Edition of the IEE Wiring Regulations, not the commencement of CDM. The construction-management regulations were made in 1994 and commenced the following year.",
      "2008":
        "By 2008 the original CDM regime had already been replaced by the 2007 Regulations. The first CDM Regulations came into force in March 1995 and were later superseded again in 2015.",
    },
    sourceUrls: [HSE_CDM_TIMELINE],
  },
] as const;
