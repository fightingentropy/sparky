import inspectionDesign2396Data from "../exam-data/inspection-design-2396.json";
import { applyExamExplanationEnhancements } from "../examExplanationEnhancements";
import type { Exam, ExamChoice } from "../exams/types";

const BSI_BS_5266_1 =
  "https://knowledge.bsigroup.com/articles/lighting-the-way-forward-what-you-need-to-know-about-bs-5266-1-2025";
const BSI_EMERGENCY_LUMINAIRES =
  "https://knowledge.bsigroup.com/products/luminaires-particular-requirements-luminaires-for-emergency-lighting-4";
const EATON_EMERGENCY_LIGHTING =
  "https://www.eaton.com/gb/en-gb/markets/buildings/how-we-drive-building-efficiency-and-safety/safe-evacuation/evacuate/basics-emergency-lighting-systems.html";
const SIGNIFY_EMERGENCY_LIGHTING =
  "https://www.signify.com/api/assets/v1/file/Signify/content/DIG-TrustSight-Emergency-System-Gen3plus/DIG_TrustSight_Emergency_System_Gen3_.pdf";
const BSI_BS_5839_1 =
  "https://knowledge.bsigroup.com/products/fire-detection-and-fire-alarm-systems-for-buildings-design-installation-commissioning-and-maintenance-of-systems-in-non-domestic-premises-code-of-practice";
const KIDDE_SMOKE_SENSORS =
  "https://www.kidde.com/support/smoke-alarms/photoelectric-ionization-difference";
const FIRE_KILLS_SMOKE_ALARMS = "https://firekills.campaign.gov.uk/detect/";
const HOCHIKI_HEAT_DETECTOR =
  "https://www.hochikieurope.com/product/acd-multi-sensor";
const PRYSMIAN_FP200 =
  "https://uk.prysmiangroup.com/sites/default/files/atoms/files/FP200%20Gold%20Product%20Feature%20Document.pdf";
const IET_BS_7671 =
  "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/";
const IET_CURRENT_EDITION =
  "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/ensure-you-are-up-to-date-with-bs-7671/";
const IET_ON_SITE_GUIDE =
  "https://shop.theiet.org/on-site-guide-bs-7671-2018-a4-2026-9th-edition";
const IET_DISCONNECTION_TIMES =
  "https://electrical.theiet.org/wiring-matters/years/2023/94-march-2023/determining-the-maximum-earth-fault-loop-impedance-for-protective-devices-to-bs-en-60898-bs-en-60947-2/";
const BSI_BS_1363_4 =
  "https://knowledge.bsigroup.com/products/13-a-plugs-socket-outlets-adaptors-and-connection-units-13-a-fused-connection-units-switched-and-unswitched-specification";
const BSI_BS_1362 =
  "https://knowledge.bsigroup.com/products/general-purpose-fuse-links-for-domestic-and-similar-purposes-primarily-for-use-in-plugs-specification";
const BSI_SWITCHES =
  "https://knowledge.bsigroup.com/products/switches-for-household-and-similar-fixed-electrical-installations-general-requirements";
const IET_CONDUCTOR_COLOURS =
  "https://electrical.theiet.org/wiring-matters/years/2021/84-march-2021/the-history-of-colour-identification-of-conductors/";
const IET_MODEL_FORMS =
  "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/model-forms/";
const IET_INSPECTION_FAQ =
  "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/";
const IET_ISOLATION =
  "https://electrical.theiet.org/wiring-matters/years/2023/94-march-2023/isolation-and-switching-for-mechanical-maintenance/";
const IET_CONDUIT_AND_TRUNKING =
  "https://electrical.theiet.org/wiring-matters/years/2021/88-november-2021/the-history-of-cable-capacities-for-conduit-and-trunking/";
const IET_BURIED_CABLES =
  "https://electrical.theiet.org/wiring-matters/years/2024/101-july-2024/buried-conduits-and-ducts/";
const IET_VOLTAGE_DROP =
  "https://electrical.theiet.org/wiring-matters/years/2020/81-july-2020/amps-per-pound/";
const IET_BATHROOM_FAQ =
  "https://electrical.theiet.org/wiring-matters/years/2019/77-september-2019/bs-76712018-frequently-asked-questions/";
const IET_EARTHING_FAQ =
  "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/earthing-and-bonding-faqs/";
const IET_BS_5839_CHANGES =
  "https://electrical.theiet.org/wiring-matters/years/2025/107-september-2025/changes-to-bs-5839-1-2025/";
const HSE_EAWR = "https://www.hse.gov.uk/pubns/priced/hsr25.pdf";
const HSE_HSG85 = "https://www.hse.gov.uk/pubns/priced/hsg85.pdf";
const HSE_GS38 = "https://www.hse.gov.uk/pubns/priced/gs38.pdf";
const HSE_RISK = "https://www.hse.gov.uk/simple-health-safety/risk/";
const HSE_CDM = "https://www.hse.gov.uk/construction/cdm/2015/index.htm";
const HSE_PORTABLE_EQUIPMENT = "https://www.hse.gov.uk/pubns/indg236.htm";
const HSE_CONSTRUCTION_ELECTRICITY =
  "https://www.hse.gov.uk/electricity/information/construction.htm";
const HSE_FIRE_EXPLOSION = "https://www.hse.gov.uk/fireandexplosion/atex.htm";
const HSE_WASTE =
  "https://www.hse.gov.uk/construction/safetytopics/storage.htm";
const HSE_PAT =
  "https://www.hse.gov.uk/electricity/faq-portable-appliance-testing.htm";
const GOV_FIRE_SAFETY =
  "https://www.gov.uk/government/publications/fire-safety-risk-assessment-offices-and-shops";
const NVENT_MI =
  "https://www.nvent.com/sites/default/files/acquiadam/assets/Pyrotenax-IM-CDE0937-MI-EN.pdf";
const COTHERM_ROD = "https://www.cotherm.com/gamme/plug-in-rod-thermostats/";
const NHBC_JOISTS =
  "https://www.nhbc.co.uk/binaries/content/assets/nhbc/tech-zone/nhbc-standards/tech-guidance/8.1/protection-of-electric-cables-in-walls-or-flat-and-sloping-ceilings-.pdf";
const FLUKE_TWISTED_PAIR =
  "https://www.flukenetworks.com/support/knowledge-base/linkiq/split-pair-identification";
const IEC_ELECTROPEDIA = "https://www.electropedia.org/";
const IEC_IP = "https://webstore.iec.ch/en/publication/2452";
const OPENSTAX_PHYSICS = "https://openstax.org/details/books/physics";
const FLUKE_INSTALLATION_TESTER =
  "https://www.fluke.com/en-gb/product/electrical-testing/installation-testers/fluke-1672-1673fc-1674fc";
const FLUKE_THERMAL_IMAGING =
  "https://www.fluke.com/en/learn/blog/thermal-imaging/electrical-systems";
const FLUKE_MULTIMETER =
  "https://www.fluke.com/en-gb/product/electrical-testing/digital-multimeters/fluke-115";
const FLUKE_PHASE_ROTATION =
  "https://www.fluke.com/en-gb/product/electrical-testing/basic-testers/fluke-9040";
const FLUKE_CIRCUIT_TRACER =
  "https://www.fluke.com/en-gb/learn/blog/electrical/home-renovation-circuit-breaker-finder";
const FLUKE_CLAMP_METER =
  "https://www.fluke.com/en-us/learn/blog/clamps/clamp-meter-faq";
const ESF_SOCKET_TESTERS =
  "https://www.electricalsafetyfirst.org.uk/media/1205/best-practice-guide-8-issue-2.pdf";

const CHOICES: readonly ExamChoice[] = ["A", "B", "C", "D"];
const enhancedInspectionDesign2396 = applyExamExplanationEnhancements(
  inspectionDesign2396Data as unknown as Exam,
);
const variants = new Map(
  enhancedInspectionDesign2396.sections
    .flatMap((section) => section.variants)
    .map((variant) => [variant.id, variant] as const),
);

function reviewed(
  variantId: string,
  questionNumber: number,
  rationaleByChoice: Partial<Record<ExamChoice, string>>,
  sourceUrls: readonly string[],
) {
  const question = variants
    .get(variantId)
    ?.questions.find((entry) => entry.number === questionNumber);
  if (!question) throw new Error(`Missing ${variantId} Q${questionNumber}`);

  const wrongChoices = CHOICES.filter((choice) => choice !== question.answer);
  const authoredChoices = Object.keys(rationaleByChoice).sort();
  if (authoredChoices.join() !== [...wrongChoices].sort().join()) {
    throw new Error(
      `Incomplete rationale choices for ${variantId} Q${questionNumber}`,
    );
  }

  return {
    prompt: question.prompt,
    options: CHOICES.map((choice) => question.options[choice]),
    answer: question.options[question.answer],
    rationales: Object.fromEntries(
      wrongChoices.map((choice) => [
        question.options[choice],
        rationaleByChoice[choice]!,
      ]),
    ),
    sourceUrls,
  };
}

export const inspectionDesign2396Part3 = [
  reviewed(
    "quiz-29770",
    1,
    {
      A: "BS 4343 concerns industrial plugs, socket-outlets and couplers; it is not the code of practice for emergency lighting.",
      C: "BS 5839-1 covers fire detection and fire alarm systems in non-domestic premises, not emergency lighting.",
      D: "BS 7671 is the general UK standard for electrical installations, rather than the dedicated emergency-lighting code of practice.",
    },
    [BSI_BS_5266_1],
  ),
  reviewed(
    "quiz-29770",
    2,
    {
      B: "A non-maintained luminaire is normally off and illuminates only when the normal lighting supply fails.",
      C: "A maintained luminaire exactly matches the stated continuous operation, so one of the listed answers does apply.",
      D: "A sustained luminaire combines separate normal and non-maintained emergency light sources; that is not what continuous operation of the sign itself describes.",
    },
    [EATON_EMERGENCY_LIGHTING, SIGNIFY_EMERGENCY_LIGHTING],
  ),
  reviewed(
    "quiz-29770",
    3,
    {
      A: "The figure after NM gives the rated emergency duration; it does not state how many lamps the luminaire contains.",
      B: "The 2 denotes hours of rated operation, not a two-second start-up period.",
      C: "NM identifies non-maintained operation and the figure gives duration; it does not mean twin power supplies.",
    },
    [BSI_EMERGENCY_LUMINAIRES, SIGNIFY_EMERGENCY_LIGHTING],
  ),
  reviewed(
    "quiz-29770",
    4,
    {
      A: "A maintained emergency lamp is illuminated during normal service as well as during a supply failure.",
      C: "The stated operation is the definition of non-maintained lighting, so a listed answer does apply.",
      D: "A sustained fitting combines a normal lamp with a separate non-maintained emergency lamp, which the question does not describe.",
    },
    [EATON_EMERGENCY_LIGHTING, SIGNIFY_EMERGENCY_LIGHTING],
  ),
  reviewed(
    "quiz-29770",
    5,
    {
      A: "In maintained operation, the emergency light source itself is available during normal service; here the emergency tube remains non-maintained.",
      B: "Non-maintained describes the emergency tube alone but omits the separate normal-lighting tube combined in the same fitting.",
      C: "The two-source arrangement has the recognised sustained designation, so one of the listed answers is applicable.",
    },
    [SIGNIFY_EMERGENCY_LIGHTING],
  ),
  reviewed(
    "quiz-29770",
    6,
    {
      A: "A maintained emergency-light output would be energised in normal service, whereas the diagram switches it on only after mains failure.",
      C: "The relay and battery arrangement clearly shows a recognised non-maintained system, so a listed answer does apply.",
      D: "A sustained luminaire contains separate normal and emergency light sources in one fitting; the diagram instead shows separate normal-light and emergency-light outputs.",
    },
    [EATON_EMERGENCY_LIGHTING, SIGNIFY_EMERGENCY_LIGHTING],
  ),
  reviewed(
    "quiz-29770",
    7,
    {
      B: "A non-maintained lamp remains off while the normal supply is healthy, contrary to the lamp being illuminated at all times.",
      C: "Continuous normal operation followed by battery-backed operation is the maintained mode, so a listed answer applies.",
      D: "Sustained lighting uses separate normal and non-maintained emergency light sources rather than one emergency lamp that stays illuminated.",
    },
    [EATON_EMERGENCY_LIGHTING, SIGNIFY_EMERGENCY_LIGHTING],
  ),
  reviewed(
    "quiz-29770",
    8,
    {
      A: "A carbon-dioxide sensor measures gas concentration; optical and ionisation describe technologies for detecting smoke particles.",
      B: "Fire is the event being detected, not a specific sensor type that is classified as optical or ionisation.",
      C: "A heat detector responds to temperature or rate of temperature rise rather than using optical or ionisation smoke sensing.",
    },
    [KIDDE_SMOKE_SENSORS],
  ),
  reviewed(
    "quiz-29770",
    9,
    {
      A: "Area is a general description of space, not the defined fire-alarm subdivision used for indication and fault limitation.",
      B: "BS 5839-1 uses the term zones, so the required term is present among the answers.",
      C: "Section is not the standard term for the fire-alarm subdivisions identified at control and indicating equipment.",
    },
    [BSI_BS_5839_1],
  ),
  reviewed(
    "quiz-29770",
    10,
    {
      A: "A carbon-monoxide alarm detects a toxic combustion gas and is normally identified as a CO alarm; it is not the pictured smoke alarm.",
      B: "A flame detector senses radiation from flames and is specialist system equipment, not the familiar domestic ceiling alarm shown.",
      C: "A heat detector responds to temperature and is commonly selected for kitchens, but the pictured domestic warning device is a smoke alarm.",
    },
    [FIRE_KILLS_SMOKE_ALARMS],
  ),
  reviewed(
    "quiz-29770",
    11,
    {
      A: "55 dB(A) is below the general 65 dB(A) recommendation for accessible areas covered by the question.",
      C: "75 dB(A) is associated with the separate recommendation at a bedhead where alarms must wake sleeping occupants, not the general accessible-area minimum.",
      D: "85 dB(A) may be needed where background noise demands it, but it is not the general minimum specified in the question.",
    },
    [BSI_BS_5839_1],
  ),
  reviewed(
    "quiz-29770",
    12,
    {
      A: "BS 4343 concerns industrial plugs, socket-outlets and couplers, not fire detection and alarm systems.",
      B: "BS 5266-1 is the code of practice for emergency lighting of premises rather than non-domestic fire alarm systems.",
      D: "BS 7671 gives general electrical-installation requirements but is not the dedicated fire detection and alarm code of practice.",
    },
    [BSI_BS_5839_1],
  ),
  reviewed(
    "quiz-29770",
    13,
    {
      A: "A carbon-dioxide detector responds to gas concentration, not a fixed temperature or abnormal rate of temperature rise.",
      B: "Fire is a general event or system category, not the particular automatic detector technology described.",
      D: "A smoke detector responds to airborne combustion particles or their optical effects rather than directly to temperature change.",
    },
    [HOCHIKI_HEAT_DETECTOR],
  ),
  reviewed(
    "quiz-29770",
    14,
    {
      B: "Long loop describes possible physical length, not the normal electrical state of a fire-alarm initiating circuit.",
      C: "An open-loop circuit would not provide the continuous normal path shown through the initiating contacts and relay.",
      D: "Short loop is not the circuit arrangement depicted; a short circuit would bypass the intended initiating devices.",
    },
    [BSI_BS_5839_1],
  ),
  reviewed(
    "quiz-29770",
    15,
    {
      B: "Ordinary PVC/PVC cable does not provide the fire-resistant circuit integrity required of the red ancillary cable shown.",
      C: "The stem identifies the SWA as the panel's mains supply; it is not the softer red cable connecting the ancillary equipment.",
      D: "Steel conduit is a containment system rather than the visible fire-resistant cable type requested.",
    },
    [PRYSMIAN_FP200, BSI_BS_5839_1],
  ),
  reviewed(
    "quiz-29770",
    16,
    {
      A: "First conductor unit is not the recognised expansion of the accessory abbreviation FCU.",
      B: "Furnished connection unit is not the term used in BS 1363-4 for this fused accessory.",
      C: "The C in FCU stands for connection, not conductor.",
    },
    [BSI_BS_1363_4],
  ),
  reviewed(
    "quiz-29770",
    17,
    {
      B: "Ten separate socket-outlets would exceed the single-accessory allowance for this unfused spur arrangement.",
      C: "Two separate socket-outlets are not permitted here; one twin socket-outlet counts as the one allowed accessory.",
      D: "An unlimited number of outlets could overload the unfused spur and is not part of the standard A2 arrangement.",
    },
    [IET_ON_SITE_GUIDE],
  ),
  reviewed(
    "quiz-29770",
    18,
    {
      A: "A 0.2-second disconnection would be quicker than required, but it is not the maximum allowed for this 230 V TN final circuit.",
      C: "Ten seconds exceeds the 0.4-second maximum for a TN final circuit rated not more than 63 A that includes socket-outlets.",
      D: "Five seconds applies to certain distribution circuits or larger final circuits without socket-outlets, not this socket-outlet final circuit.",
    },
    [IET_DISCONNECTION_TIMES, IET_BS_7671],
  ),
  reviewed(
    "quiz-29770",
    19,
    {
      A: "A 1.5 mm² spur is smaller than the 2.5 mm² conductor used in the standard A2 radial arrangement shown.",
      C: "5.0 mm² is not the conductor size specified for this standard arrangement and is not the minimum shown by the guide.",
      D: "A 6.0 mm² conductor is larger than the standard minimum, so it cannot be the requested minimum value.",
    },
    [IET_ON_SITE_GUIDE],
  ),
  reviewed(
    "quiz-29770",
    20,
    {
      A: "A 16 A device is below the circuit-breaker rating assigned to the standard A3 radial arrangement.",
      C: "A 30/32 A device belongs to the higher-capacity A2 radial arrangement, not the A3 arrangement.",
      D: "A 40 A circuit-breaker is not the protective-device rating specified for a standard A3 radial circuit.",
    },
    [IET_ON_SITE_GUIDE],
  ),
  reviewed(
    "quiz-29770",
    21,
    {
      A: "A 1.5 mm² conductor is smaller than the size specified for the standard 20 A A3 radial arrangement.",
      C: "A 4.0 mm² conductor may be selected after a separate design calculation, but it is not the standard A3 conductor size requested.",
      D: "A 6.0 mm² conductor is an unnecessary upsize and is not the conductor size assigned to the standard A3 arrangement.",
    },
    [IET_ON_SITE_GUIDE],
  ),
  reviewed(
    "quiz-29770",
    22,
    {
      A: "A 0.2-second operation would satisfy a 0.4-second limit, but it is not the maximum disconnection time requested.",
      C: "One second is longer than the permitted 0.4 seconds for this 40 A TN final circuit supplying socket-outlets.",
      D: "Five seconds is available for certain distribution circuits or final circuits without socket-outlets, not this socket circuit.",
    },
    [IET_DISCONNECTION_TIMES, IET_BS_7671],
  ),
  reviewed(
    "quiz-29770",
    23,
    {
      B: "Thirty square metres is below the floor area associated with the standard A1 ring final circuit and is not its stated maximum.",
      C: "Fifty square metres would remain within the permitted area, but it is not the maximum value assigned to the A1 arrangement.",
      D: "Seventy-five square metres is smaller than the A1 arrangement's stated 100 m² maximum.",
    },
    [IET_ON_SITE_GUIDE],
  ),
  reviewed(
    "quiz-29770",
    24,
    {
      B: "A 20 A fuse exceeds the 13 A maximum rating of the BS 1362 fuse-links used in a fused connection unit.",
      C: "A 30 A fuse is outside the rating range of BS 1362 and cannot be fitted as the FCU's compliant fuse-link.",
      D: "A 6 A value is below 13 A and therefore cannot be the maximum fuse rating requested.",
    },
    [BSI_BS_1362, BSI_BS_1363_4],
  ),
  reviewed(
    "quiz-29770",
    25,
    {
      A: "A 1.5 mm² conductor is well below the size used for the standard higher-current A2 radial arrangement.",
      B: "A 2.5 mm² conductor is associated with the standard A3 radial arrangement, not the A2 arrangement requested.",
      D: "A 6.0 mm² conductor may be selected by a separate design, but it is larger than the standard A2 conductor size.",
    },
    [IET_ON_SITE_GUIDE],
  ),
  reviewed(
    "quiz-29770",
    26,
    {
      A: "A recognised arrangement is available: two two-way switches with an intermediate switch between them.",
      B: "One-way switching permits control from only one position, not three or more stairway positions.",
      C: "Two-way switching alone permits control from two positions; an intermediate switch is needed for every additional position.",
    },
    [IET_ON_SITE_GUIDE, BSI_SWITCHES],
  ),
  reviewed(
    "quiz-29770",
    27,
    {
      A: "A one-way switch simply makes or breaks one path and does not contain the crossed pair of connections shown at B.",
      B: "The two-way switches are the end switches A and C; B is the crossover device placed between them.",
      C: "Three-way switch is not the UK designation used for this accessory; the crossover device is called an intermediate switch.",
    },
    [BSI_SWITCHES, IET_ON_SITE_GUIDE],
  ),
  reviewed(
    "quiz-29770",
    28,
    {
      A: "Double-pole switching opens two conductors and is unnecessary for ordinary control of this single lighting point.",
      C: "Two-way switching is used where one light must be controlled from two different positions, which the small store room does not require.",
      D: "Two-way and intermediate switching is intended for control from three or more positions and adds unnecessary complexity here.",
    },
    [BSI_SWITCHES, IET_ON_SITE_GUIDE],
  ),
  reviewed(
    "quiz-29770",
    29,
    {
      B: "Green-and-yellow is reserved for protective conductors and must never identify a switched line conductor.",
      C: "A grey core may be used in a multi-core cable, but when it performs the switched-line function it needs brown identification at its terminations.",
      D: "Red was the former UK line colour and is not the identification used for a switched line in a harmonised-colour circuit.",
    },
    [IET_BS_7671, IET_CONDUCTOR_COLOURS],
  ),
  reviewed(
    "quiz-29770",
    30,
    {
      A: "Blue is reserved for neutral in an AC installation and is not one of the three insulated cores in modern three-core-and-earth cable.",
      B: "Red belongs to the former UK colour system and is not present in harmonised three-core-and-earth cable.",
      D: "Red, yellow and blue are the old three-phase colours, not the modern brown, black and grey cable-core set.",
    },
    [IET_BS_7671, IET_CONDUCTOR_COLOURS],
  ),
  reviewed(
    "quiz-29771",
    1,
    {
      A: "An IT system has its source isolated from earth or connected through a high impedance; it is not identified by a distributor PEN conductor.",
      C: "TN-S keeps the supply neutral and protective conductors separate throughout rather than combining them in part of the network.",
      D: "A TT installation relies on a local installation earth electrode and does not receive a combined PEN conductor from the distributor.",
    },
    [IET_EARTHING_FAQ, IET_BS_7671],
  ),
  reviewed(
    "quiz-29771",
    2,
    {
      A: "Assessment of general characteristics is covered by Part 3 of BS 7671, not Part 7.",
      B: "Inspection and testing requirements are set out in Part 6 rather than Part 7.",
      C: "Selection and erection of electrical equipment is the subject of Part 5, not the special-location rules in Part 7.",
    },
    [IET_CURRENT_EDITION, IET_BS_7671],
  ),
  reviewed(
    "quiz-29771",
    3,
    {
      A: "Running the circuits in opposite directions does not create the physical or insulation separation required between voltage bands.",
      C: "A 10 A current limit does not remove the need for segregation when the conductors lack insulation for the highest voltage present.",
      D: "Twisting conductors can reduce interference in a balanced data pair, but it is not a protective barrier between Band I and Band II circuits.",
    },
    [IET_BS_7671, IET_CONDUIT_AND_TRUNKING],
  ),
  reviewed(
    "quiz-29771",
    4,
    {
      A: "A BS 1362 device is a cartridge fuse used principally in UK plugs and fused connection units; its element is not rewired in service.",
      B: "BS EN 60898 covers circuit-breakers, which reset mechanically and do not contain replaceable fuse wire.",
      D: "A BS 88 fuse is a cartridge high-breaking-capacity device with a manufactured element, not a rewireable carrier.",
    },
    [IET_ON_SITE_GUIDE, IET_BS_7671],
  ),
  reviewed(
    "quiz-29771",
    5,
    {
      A: "Remote isolation is acceptable when the device can be secured against reconnection, so it need not automatically be moved beside the motor.",
      B: "Locking an isolator in the ON position would preserve the hazard; maintenance safety requires it to be secured OFF.",
      D: "A red enclosure or handle may aid identification, but colour alone cannot prevent someone from restoring the supply.",
    },
    [IET_ISOLATION, HSE_HSG85],
  ),
  reviewed(
    "quiz-29771",
    6,
    {
      A: "Circuit diagrams describe electrical relationships and time sheets record labour, but neither gives the complete quantities and product requirements for the installation.",
      B: "Health-and-safety and plant lists support site planning, yet they do not identify every material shown by the proposed layout and specification.",
      D: "Wiring diagrams and manufacturers' sheets help with connections and products, but without the installation layout they cannot establish all required quantities.",
    },
    [HSE_CDM, IET_BS_7671],
  ),
  reviewed(
    "quiz-29771",
    7,
    {
      B: "Zone 1 is above the bath or shower basin to the defined height; the bath's interior is Zone 0.",
      C: "Zone 2 surrounds the outer limits of Zone 1 and does not include the inside of the bath tub.",
      D: "The current bathroom-zone scheme defines Zones 0, 1 and 2; the tub is not a Zone 3 location.",
    },
    [IET_BATHROOM_FAQ, IET_BS_7671],
  ),
  reviewed(
    "quiz-29771",
    8,
    {
      B: "High ambient temperature affects cable rating and material selection, but a distance saddle is not a substitute for that thermal design.",
      C: "Low temperature may require suitable impact-resistant materials, whereas spacing conduit from a wall does not warm the system.",
      D: "Vibration calls for suitably secure and vibration-resistant supports; it is not the reason for the ventilation gap provided here.",
    },
    [IET_ON_SITE_GUIDE, IET_CONDUIT_AND_TRUNKING],
  ),
  reviewed(
    "quiz-29771",
    9,
    {
      A: "Thermal insulation does not double a cable's current rating; it restricts heat loss and therefore reduces allowable current.",
      C: "Increasing the current rating would raise conductor temperature further when the surrounding insulation already impedes cooling.",
      D: "The current rating cannot stay unchanged because the installation method has altered the cable's ability to dissipate heat.",
    },
    [IET_BS_7671, IET_ON_SITE_GUIDE],
  ),
  reviewed(
    "quiz-29771",
    10,
    {
      B: "Twisting is selected for electromagnetic performance, not principally to reduce the manufacturing cost of the data cable.",
      C: "The conductors retain their specified cross-sectional area after twisting, so the cable size is not electrically reduced.",
      D: "A tidy appearance is incidental; the controlled twist rate is intended to cancel coupled noise and reduce crosstalk.",
    },
    [FLUKE_TWISTED_PAIR],
  ),
  reviewed(
    "quiz-29771",
    11,
    {
      A: "A protective conductor alone cannot ensure sufficiently rapid disconnection; an appropriate protective device and fault path are also required.",
      C: "Simply avoiding contact is not the coordinated protective measure that disconnects a supply after an exposed part becomes live.",
      D: "Trunking can form part of a protective-conductor path only when suitably designed and connected, but trunking by itself is not ADS.",
    },
    [IET_EARTHING_FAQ, IET_BS_7671],
  ),
  reviewed(
    "quiz-29771",
    12,
    {
      A: "A 250 mm interval is closer than required and would support the cable, but it is not the maximum horizontal spacing requested.",
      C: "A 350 mm horizontal interval exceeds the tabulated 300 mm maximum for this flat cable size.",
      D: "A 400 mm clip interval leaves substantially more unsupported cable than the stated 300 mm limit.",
    },
    [IET_ON_SITE_GUIDE],
  ),
  reviewed(
    "quiz-29771",
    13,
    {
      A: "Leaving installation waste makes the customer manage the contractor's debris and does not satisfy proper site housekeeping.",
      B: "An ordinary bin may be unsuitable for sharp, hazardous or controlled electrical waste, which must follow the correct disposal route.",
      C: "Hiding rubbish under a carpet creates fire, trip and hygiene hazards rather than disposing of it.",
    },
    [HSE_WASTE, HSE_CDM],
  ),
  reviewed(
    "quiz-29771",
    14,
    {
      A: "Connection details belong on wiring or circuit diagrams; a layout plan primarily shows where equipment is positioned.",
      C: "Protective-device types and ratings belong in design schedules or specifications rather than being the defining content of a layout plan.",
      D: "The location of an incidental appliance is irrelevant unless it is part of the electrical installation information being designed.",
    },
    [IET_MODEL_FORMS, IET_BS_7671],
  ),
  reviewed(
    "quiz-29771",
    15,
    {
      B: "An oven thermostat describes an application, not the traditional low-expansion rod material used in the rod-and-tube construction.",
      C: "A room thermostat senses ambient air and is not the immersed differential-expansion assembly described by the question.",
      D: "A simmerstat cycles power by an energy regulator and is not the named rod material in an immersion-heater thermostat.",
    },
    [COTHERM_ROD],
  ),
  reviewed(
    "quiz-29771",
    16,
    {
      A: "Measuring only 150 mm to the bottom of the cable leaves far less than the specified 600 mm of cover.",
      B: "A 150 mm measurement to the cable's top directly provides only one quarter of the required cover.",
      C: "Placing the cable bottom at 600 mm makes its top shallower by the cable diameter, so the full 600 mm cover is not achieved.",
    },
    [IET_BURIED_CABLES],
  ),
  reviewed(
    "quiz-29771",
    17,
    {
      A: "Twelve volts is 3% of 400 V, the usual lighting recommendation, rather than the requested 5% value.",
      B: "Sixteen volts is 4% of 400 V and does not equal the stated five-percent limit.",
      D: "Forty volts represents 10% of the three-phase line voltage, which is twice the recommended maximum in the question.",
    },
    [IET_VOLTAGE_DROP, IET_BS_7671],
  ),
  reviewed(
    "quiz-29771",
    18,
    {
      A: "Thirty-five percent is the fallback space factor associated with conduit, not the trunking value requested.",
      C: "A 55% fill exceeds the recommended 45% trunking space factor and leaves inadequate allowance for installation.",
      D: "A 65% trunking fill is well above the fallback maximum and would make cable installation and heat dissipation unsuitable.",
    },
    [IET_CONDUIT_AND_TRUNKING, IET_ON_SITE_GUIDE],
  ),
  reviewed(
    "quiz-29771",
    19,
    {
      B: "Lead is not the aluminium conductor prohibited from direct connection to a copper electrode in this question.",
      C: "A suitably sized multistrand copper conductor is metallurgically compatible with a copper earth electrode.",
      D: "Tinned copper remains a copper conductor with a protective coating and is not the dissimilar bare aluminium connection at issue.",
    },
    [IET_EARTHING_FAQ, IET_BS_7671],
  ),
  reviewed(
    "quiz-29771",
    20,
    {
      A: "Agricultural and horticultural premises are special installations covered by Section 705 of BS 7671.",
      B: "Exhibitions, shows and stands fall within the temporary-installation requirements of Section 711.",
      D: "Prefabricated buildings are expressly included in the types of installations to which BS 7671 can apply.",
    },
    [IET_BS_7671, IET_CURRENT_EDITION],
  ),
  reviewed(
    "quiz-29771",
    21,
    {
      A: "A dining room is normally suitable for smoke detection because routine cooking aerosols are not produced there.",
      B: "A garage may justify heat detection for fumes or dust, but it is not the room specifically characterised by cooking steam in the question.",
      C: "A hallway is an escape route where smoke detection is generally valuable and normal cooking fumes should not originate.",
    },
    [IET_BS_5839_CHANGES, GOV_FIRE_SAFETY],
  ),
  reviewed(
    "quiz-29771",
    22,
    {
      A: "A maintained emergency luminaire remains illuminated in normal service, unlike the fitting described here.",
      B: "Needs maintenance is a condition requiring attention, not an emergency-lighting operating mode.",
      D: "Remaining off until mains failure is intentional non-maintained operation and does not show that the fitting is wired incorrectly.",
    },
    [BSI_BS_5266_1, EATON_EMERGENCY_LIGHTING],
  ),
  reviewed(
    "quiz-29771",
    23,
    {
      A: "Inert dust does not supply combustible fuel, and a low temperature is not an effective ignition source.",
      C: "Not every heat source can ignite the mixture, and 35 °C is not a universal ignition threshold for explosive atmospheres.",
      D: "Water vapour and carbon dioxide are not the combustible fuel and ignition source required to complete the explosion triangle.",
    },
    [HSE_FIRE_EXPLOSION],
  ),
  reviewed(
    "quiz-29771",
    24,
    {
      A: "Solid brickwork normally uses a masonry plug or anchor; a spring toggle needs a void in which its wings can open.",
      C: "Steel structural members require a designed steel fixing, not a hollow-board toggle opened behind a thin lining.",
      D: "Sound timber can accept a suitable screw directly, so the expanding wings of a spring toggle are unnecessary.",
    },
    [NHBC_JOISTS, HSE_CDM],
  ),
  reviewed(
    "quiz-29771",
    25,
    {
      A: "An isolator without a load-breaking rating may be damaged or arc dangerously if it interrupts normal full-load current.",
      C: "Overload current is above normal duty and must be cleared by suitable overcurrent protection, not a non-load-breaking disconnector.",
      D: "Short-circuit current requires a protective device with adequate breaking capacity; an ordinary isolator must not be used to interrupt it.",
    },
    [IET_ISOLATION, HSE_EAWR],
  ),
  reviewed(
    "quiz-29771",
    26,
    {
      A: "Thirty millimetres is below the 50 mm minimum depth used to reduce the risk of penetration from the joist surface.",
      B: "Forty-five millimetres remains 5 mm short of the specified minimum distance.",
      D: "Sixty-five millimetres would exceed the protective minimum, but it is not the minimum value asked for.",
    },
    [NHBC_JOISTS, IET_BS_7671],
  ),
  reviewed(
    "quiz-29771",
    27,
    {
      B: "Radiators, pipes and boilers are components that may transfer heat, not the three physical transfer mechanisms.",
      C: "Reaction and reflection are not members of the standard conduction-convection-radiation set of heat-transfer modes.",
      D: "Water, air and steam are media or substances that carry heat; they are not three ways in which heat transfers.",
    },
    [OPENSTAX_PHYSICS],
  ),
  reviewed(
    "quiz-29771",
    28,
    {
      A: "A normal 3D bend is tighter than the manufacturer's 6D minimum, and 2D is also below the once-only limit.",
      B: "Although 3D is the once-only minimum, 4D is still too tight for a bend that may be worked normally.",
      D: "An 8D bend would be gentler than required and a 6D once-only bend is not the minimum pair specified for this cable.",
    },
    [NVENT_MI],
  ),
  reviewed(
    "quiz-29771",
    29,
    {
      A: "A hacksaw and file perform cutting and finishing, while a centre punch marks drill centres rather than setting out straight trunking cuts.",
      B: "A pencil, tape and spirit level lack the hard sharp marking point and square needed for an accurate perpendicular metal cut line.",
      C: "A plumb line and spirit level establish vertical or horizontal references but do not measure and scribe the cut across the trunking.",
    },
    [HSE_CDM],
  ),
  reviewed(
    "quiz-29771",
    30,
    {
      A: "The IP code does not use its water digit to classify protection against gases.",
      B: "Protection against solid objects is expressed by the first IP characteristic digit, which is replaced by X here.",
      C: "Sunlight and ultraviolet resistance are not represented by the second characteristic digit of an IP rating.",
    },
    [IEC_IP],
  ),
  reviewed(
    "quiz-29772",
    1,
    {
      A: "A design specification states required performance and selected products, but exact case dimensions are taken from the particular manufacturer's documentation.",
      C: "Site plans show where luminaires are located within the building and do not normally reproduce each product's detailed dimensions.",
      D: "Wiring diagrams show electrical connections and circuit relationships rather than the physical size of a luminaire housing.",
    },
    [IET_BS_7671],
  ),
  reviewed(
    "quiz-29772",
    2,
    {
      A: "The Electricity Safety, Quality and Continuity Regulations are a statutory instrument governing public supply duties and characteristics.",
      B: "The Electricity at Work Regulations 1989 are legally enforceable statutory regulations for electrical systems and work activities.",
      C: "The Health and Safety at Work etc. Act 1974 is primary legislation and therefore cannot be the non-statutory document.",
    },
    [HSE_EAWR, IET_BS_7671],
  ),
  reviewed(
    "quiz-29772",
    3,
    {
      A: "A delivery record identifies goods movements and drivers only incidentally; it cannot provide a complete roll of everyone on site.",
      B: "Locking escape routes prevents safe evacuation and breaches the purpose of fire precautions rather than helping account for people.",
      C: "A parking list omits pedestrians, passengers, visitors and people using off-site parking, so it is not a reliable occupancy record.",
    },
    [HSE_CDM, GOV_FIRE_SAFETY],
  ),
  reviewed(
    "quiz-29772",
    4,
    {
      A: "A note added to a later invoice is not contemporaneous visual evidence of the decoration's detailed pre-work condition.",
      B: "A site-diary description can help, but it is less objective and less detailed than dated photographs of the existing marks.",
      C: "Images taken only after work cannot show whether observed damage already existed before the electrical activity began.",
    },
    [HSE_CDM],
  ),
  reviewed(
    "quiz-29772",
    5,
    {
      B: "Removing every furnishing off site is disproportionate when a suitable cover can control the limited dust from one ceiling hole.",
      C: "Spraying water during electrical installation work introduces moisture, mess and possible electrical danger without protecting the furnishings appropriately.",
      D: "Cleaning afterwards is reactive and may not remove embedded fine dust; protection should stop contamination before drilling starts.",
    },
    [HSE_RISK, HSE_CONSTRUCTION_ELECTRICITY],
  ),
  reviewed(
    "quiz-29772",
    6,
    {
      B: "Metallic basket supports cables but remains open on all sides, so it does not enclose unsheathed insulated singles.",
      C: "Cable tray is an open support system and gives no complete enclosure against access or mechanical contact.",
      D: "PVC capping is a cover used over cables on a surface and is not a complete conduit or trunking enclosure.",
    },
    [IET_BS_7671, IET_CONDUIT_AND_TRUNKING],
  ),
  reviewed(
    "quiz-29772",
    7,
    {
      A: "Category 6 data cable is designed for communications and is neither voltage-rated nor constructed as a 230 V appliance supply flex.",
      C: "Mineral-insulated copper cable is a fixed, relatively rigid wiring system and cannot accommodate normal handheld appliance movement.",
      D: "Steel-wire-armoured cable needs fixed-system glands and is too rigid and heavy for the repeated flexing of a handheld appliance lead.",
    },
    [HSE_PORTABLE_EQUIPMENT, IET_BS_7671],
  ),
  reviewed(
    "quiz-29772",
    8,
    {
      A: "SWA normally needs additional preparation and glands, so it is not generally cheaper to terminate than a flat-profile fixed cable.",
      B: "The steel-wire armour reduces flexibility and increases weight; flexibility is not its advantage over flat-profile cable.",
      D: "The armour must be correctly terminated with suitable glands or equivalent manufacturer-specified accessories, not left unglanded.",
    },
    [IET_BS_7671],
  ),
  reviewed(
    "quiz-29772",
    9,
    {
      A: "Crampet-type fixings restrain conduit to a surface and do not provide a sliding joint that absorbs thermal length change.",
      C: "Hospital saddles support and space conduit for cleaning access, but fixed saddles alone cannot take up longitudinal expansion.",
      D: "Through boxes provide cable access or draw-in points; an ordinary rigid box does not act as the specified expansion joint.",
    },
    [IET_BS_7671, IET_ON_SITE_GUIDE],
  ),
  reviewed(
    "quiz-29772",
    10,
    {
      A: "The fitting changes direction through one right angle, not through the 180° reversal described by this choice.",
      C: "An inside 180° fitting would reverse the trunking run and is not the planar L-shaped right-angle piece shown.",
      D: "An internal 90° bend follows an inside change of wall plane; the illustrated fitting turns through 90° while remaining flat in one plane.",
    },
    [IET_ON_SITE_GUIDE],
  ),
  reviewed(
    "quiz-29772",
    11,
    {
      A: "Metal basket is ventilated support with large openings and therefore cannot serve as a complete enclosure for insulated singles.",
      B: "Metal tray supports sheathed cables but leaves them exposed; it is not the enclosed containment needed for unsheathed conductors.",
      C: "PVC capping covers surface-run cable but does not surround and contain the conductors as a wiring enclosure.",
    },
    [IET_BS_7671, IET_CONDUIT_AND_TRUNKING],
  ),
  reviewed(
    "quiz-29772",
    12,
    {
      A: "The summed cable factors for the eight shown conductors exceed the allowable factor for 16 mm conduit over this length and bend count.",
      B: "Twenty-millimetre conduit also has insufficient draw-in capacity once the four 6 mm² singles and the smaller conductors are combined.",
      D: "Thirty-two-millimetre conduit would accommodate the cables, but it is larger than the minimum size selected by the tabulated factor method.",
    },
    [IET_CONDUIT_AND_TRUNKING, IET_ON_SITE_GUIDE],
  ),
  reviewed(
    "quiz-29772",
    13,
    {
      A: "Fifty cables use only about one third of the tabulated trunking capacity and therefore are not the maximum number requested.",
      B: "One hundred cables remain below the quotient of the 100 mm × 75 mm trunking factor and the 6 mm² cable factor.",
      C: "One hundred and thirty cables fit, but twenty further whole cables can be included before the Appendix E factor limit is reached.",
    },
    [IET_CONDUIT_AND_TRUNKING, IET_ON_SITE_GUIDE],
  ),
  reviewed(
    "quiz-29772",
    14,
    {
      B: "Fire-retardant describes reaction to flame and does not by itself provide the cold flexibility and portable-duty construction required on site.",
      C: "Flat twin-and-CPC is intended for fixed protected installation and is unsuitable for repeated movement on a temporary construction supply.",
      D: "MICC offers fire and temperature resistance but is a rigid fixed-wiring cable, not a flexible lead for portable temporary equipment.",
    },
    [HSE_CONSTRUCTION_ELECTRICITY, IET_BS_7671],
  ),
  reviewed(
    "quiz-29772",
    15,
    {
      A: "An RCD reduces some shock risk but cannot prevent exposed conductors, arcing or overheating from a damaged flex and never justifies continued use.",
      B: "Using the tool before reporting prolongs exposure to the known defect; it must be removed from service immediately.",
      D: "Ordinary tape is not a controlled repair restoring insulation, strain relief and mechanical integrity, so the tool remains unsafe.",
    },
    [HSE_PORTABLE_EQUIPMENT],
  ),
  reviewed(
    "quiz-29772",
    16,
    {
      A: "A chalk line marks a long straight reference across a surface but does not directly indicate whether the accessory itself is horizontal.",
      B: "A laser can establish a wider datum, yet the simple hand tool normally placed against one accessory is the spirit level.",
      C: "A plumb line establishes true vertical by gravity and does not directly check the horizontal level requested.",
    },
    [HSE_CDM],
  ),
  reviewed(
    "quiz-29772",
    17,
    {
      A: "A coping saw is intended mainly for curved or intricate cuts and is less robust and direct for repeated straight cuts through metal tray.",
      B: "A cross-cut saw has tooth geometry for cutting timber across its grain and is unsuitable for sheet-metal cable tray.",
      D: "A keyhole saw makes internal or curved openings in board and similar materials rather than straight cuts across metal tray sections.",
    },
    [HSE_CDM],
  ),
  reviewed(
    "quiz-29772",
    18,
    {
      A: "Solid brick accepts a masonry plug or anchor; the expanding wings shown need a hollow space behind a board.",
      B: "A concrete block is normally drilled for a suitable masonry fixing rather than using a toggle designed to open behind sheet material.",
      D: "A sound wooden substrate can hold an appropriate screw directly, so the illustrated hollow-wall toggle is unnecessary.",
    },
    [HSE_CDM],
  ),
  reviewed(
    "quiz-29772",
    19,
    {
      A: "A distance saddle is formed to stand conduit away from the surface without the separate flat spacer bar visible in this fitting.",
      B: "A P clip wraps around cable, hose or small conduit with a single fixing lug and does not have this two-screw saddle profile.",
      D: "A U clip holds conduit close to the mounting surface and lacks the spacer bar that creates the shown clearance.",
    },
    [IET_ON_SITE_GUIDE],
  ),
  reviewed(
    "quiz-29772",
    20,
    {
      B: "A 1.25 m interval exceeds the tabulated horizontal spacing for insulating trunking in the 800 mm² cross-sectional-area band.",
      C: "A 1.75 m interval is associated with larger or differently constructed containment and would allow this insulating trunking to sag.",
      D: "Two metres is four times the specified 0.5 m interval and provides insufficient support for this horizontal insulating run.",
    },
    [IET_ON_SITE_GUIDE],
  ),
  reviewed(
    "quiz-29772",
    21,
    {
      A: "A 100 mA RCD neither provides the usual 30 mA additional protection nor makes a diagonal route outside prescribed zones acceptable by itself.",
      B: "Plastic capping offers limited covering and is not recognised as sufficient mechanical protection for this shallow cable outside safe zones.",
      D: "Metal armour left unearthed can become live after penetration and cannot provide the required earthed metallic protective measure.",
    },
    [IET_BS_7671],
  ),
  reviewed(
    "quiz-29772",
    22,
    {
      A: "Cement is incompatible with a local plasterboard ceiling repair and a surface smear would lack secure backing across the opening.",
      B: "Paper stapled over the hole provides neither structural board continuity nor a durable, finishable ceiling surface.",
      D: "Wet tissue has no structural strength, fire performance or durable bond and is not an acceptable building-fabric repair material.",
    },
    [HSE_CDM],
  ),
  reviewed(
    "quiz-29772",
    23,
    {
      A: "A short circuit is an abnormal low-impedance connection between conductors, not excessive demand in an otherwise healthy circuit.",
      B: "An earth fault is unintended current from a live conductor to earth or protective metalwork, not ordinary load misuse.",
      C: "An open circuit interrupts the current path and normally stops load current rather than raising it above the circuit rating.",
    },
    [IET_BS_7671, IEC_ELECTROPEDIA],
  ),
  reviewed(
    "quiz-29772",
    24,
    {
      A: "A BS 1362 cartridge fuse clears by melting its element and contains no resettable thermal and magnetic trip mechanisms.",
      B: "A BS 3036 semi-enclosed fuse operates through heating and melting fuse wire, not a combined bimetal and solenoid trip.",
      C: "A BS 88-2 fuse uses a calibrated fusible element and arc-quenching construction rather than separate thermal and magnetic releases.",
    },
    [IET_BS_7671, IET_ON_SITE_GUIDE],
  ),
  reviewed(
    "quiz-29772",
    25,
    {
      A: "The 0.44 Ω value belongs to another device rating or characteristic and is below the cited C32 quick-reference value.",
      C: "The 0.79 Ω table value is associated with a different protective-device characteristic; it is not the C32 measured-Zs entry.",
      D: "The 1.38 Ω value is the familiar quick-reference scale for a less demanding characteristic and is too high for a Type C 32 A breaker.",
    },
    [IET_ON_SITE_GUIDE, IET_INSPECTION_FAQ],
  ),
  reviewed(
    "quiz-29772",
    26,
    {
      B: "Two kiloamperes is twice the rated short-circuit capacity listed for the BS 3036 S1A fuse and would overstate its capability.",
      C: "Three kiloamperes is not the tabulated rating for this semi-enclosed fuse and cannot be assumed without verified backup protection.",
      D: "Four kiloamperes exceeds the listed 1 kA capability by a factor of four and would be unsafe as a standalone breaking claim.",
    },
    [IET_ON_SITE_GUIDE],
  ),
  reviewed(
    "quiz-29772",
    27,
    {
      A: "A fault necessarily disconnects some protection or leaves a dangerous condition; poor selectivity does not guarantee zero equipment loss.",
      B: "The poorly coordinated final-circuit breaker can remove that entire circuit, but it need not disconnect the whole building supply system.",
      D: "Operation of only the appliance fuse is the desired selective outcome; poor coordination means the upstream breaker may also operate.",
    },
    [IET_BS_7671, IET_ON_SITE_GUIDE],
  ),
  reviewed(
    "quiz-29772",
    28,
    {
      B: "A ring-final fused spur is not the prescribed arrangement for this storage capacity; the substantial fixed water-heating load needs its own circuit.",
      C: "A lighting circuit is designed and protected for lighting loads and is unsuitable for the current and duty of a 20 litre water heater.",
      D: "An unfused spur provides no local current limitation and is not an acceptable way to supply this substantial fixed appliance from a ring.",
    },
    [IET_ON_SITE_GUIDE, IET_BS_7671],
  ),
  reviewed(
    "quiz-29772",
    29,
    {
      A: "The emergency lamp illuminates on mains failure, but the unit must receive supply beforehand to charge its battery and sense that failure.",
      B: "Permanent isolation would let the battery discharge and prevent the monitoring circuit from maintaining readiness for an emergency.",
      D: "A firefighter's switch is used for particular high-voltage luminous-sign or similar installations, not normal control of this self-contained luminaire.",
    },
    [IET_BS_7671],
  ),
  reviewed(
    "quiz-29772",
    30,
    {
      A: "A circuit breaker clears overloads and faults but does not by itself require a deliberate restart after a temporary loss of supply voltage.",
      C: "An SPD limits transient overvoltage; it neither drops out a machine contactor on undervoltage nor latches the controls off.",
      D: "An RCD responds to residual-current imbalance and offers no no-volt-release control against unexpected machine restart.",
    },
    [HSE_EAWR, IEC_ELECTROPEDIA],
  ),
  reviewed(
    "quiz-29773",
    1,
    {
      A: "An earth-electrode tester uses auxiliary probes to measure electrode resistance; the pictured dual tester instead provides insulation and low-resistance continuity ranges.",
      B: "An earth-loop tester operates on an energised installation and displays loop impedance, not the paired dead-test functions shown here.",
      D: "An RCD tester injects residual test current and times disconnection; those controls are not the purpose of this insulation-and-continuity instrument.",
    },
    [FLUKE_INSTALLATION_TESTER, HSE_GS38],
  ),
  reviewed(
    "quiz-29773",
    2,
    {
      A: "An earth-electrode test reports resistance in ohms from an electrode-and-probe arrangement, not RCD trip time in milliseconds.",
      B: "An earth-loop tester measures fault-loop impedance in ohms and may derive fault current, rather than timing an RCD operation.",
      C: "A prospective short-circuit current function displays amperes or kiloamperes; milliseconds identify a protective-device operating-time test.",
    },
    [FLUKE_INSTALLATION_TESTER, IET_INSPECTION_FAQ],
  ),
  reviewed(
    "quiz-29773",
    3,
    {
      A: "An earth-electrode tester measures the resistance of an electrode system with test probes and is not the live line-earth loop function requested.",
      C: "Prospective short-circuit current is a calculated or measured current value in amperes, not the impedance reading in ohms asked for.",
      D: "An RCD tester checks residual-device trip performance and time rather than directly reporting line-earth fault-loop impedance.",
    },
    [FLUKE_INSTALLATION_TESTER, IET_DISCONNECTION_TIMES],
  ),
  reviewed(
    "quiz-29773",
    4,
    {
      B: "A loop-impedance test normally connects at the installation supply or circuit and does not require the separate earth probes pictured.",
      C: "A prospective-current test is made on an energised supply with installation-test leads, not with several electrodes driven into the ground.",
      D: "An RCD tester connects to the protected live circuit and injects residual current; the multi-probe arrangement shown is for electrode resistance.",
    },
    [FLUKE_INSTALLATION_TESTER, HSE_GS38],
  ),
  reviewed(
    "quiz-29773",
    5,
    {
      A: "Earth-electrode resistance is reported in ohms and uses auxiliary electrodes; it is not a prospective current value in kA.",
      B: "The loop-impedance function reports ohms; although the instrument can use that result to derive current, the requested kA display is the prospective-current function.",
      D: "An RCD function reports trip time or trip current, not the available short-circuit current at the test point.",
    },
    [FLUKE_INSTALLATION_TESTER, IET_DISCONNECTION_TIMES],
  ),
  reviewed(
    "quiz-29773",
    6,
    {
      B: "An earth-electrode tester is designed for electrode-system resistance and is not the normal dead-test instrument used to confirm circuit polarity.",
      C: "Earth-loop impedance is a live fault-path test; polarity can and should first be verified by continuity with the supply isolated.",
      D: "Prospective short-circuit current quantifies available fault current and cannot establish that conductors terminate at the correct points.",
    },
    [HSE_GS38, HSE_HSG85],
  ),
  reviewed(
    "quiz-29773",
    7,
    {
      A: "An earth-electrode tester uses leads and probes to measure an earthing system; it does not form a temperature image of equipment.",
      C: "A non-contact thermometer returns a spot or small-area temperature reading, whereas the display shown maps temperatures across the whole scene.",
      D: "An ultrasonic distance measure calculates range to a target and does not display the coloured thermal pattern visible in the image.",
    },
    [FLUKE_THERMAL_IMAGING],
  ),
  reviewed(
    "quiz-29773",
    8,
    {
      A: "A continuity/insulation tester performs installation dead tests and lacks the appliance-specific visual, earth-bond and leakage test workflow shown.",
      B: "A loop/fault-current tester is intended for fixed energised circuits and does not provide the dedicated appliance-test connections and sequences pictured.",
      C: "A multimeter measures general electrical quantities but does not by itself perform the combined safety checks and records expected from this PAT instrument.",
    },
    [HSE_PAT, HSE_PORTABLE_EQUIPMENT],
  ),
  reviewed(
    "quiz-29773",
    9,
    {
      A: "A continuity/insulation tester can check continuity, but the pictured handheld instrument is a general multimeter with selectable voltage, current and resistance ranges.",
      B: "A loop/fault-current tester is used on energised installation circuits and is not the general bench instrument normally used to check individual fuses or components.",
      D: "A PAT tester follows appliance-safety test sequences and is physically different from the compact general-purpose meter shown.",
    },
    [FLUKE_MULTIMETER],
  ),
  reviewed(
    "quiz-29773",
    10,
    {
      A: "GS27 concerns protection against certain ultraviolet-radiation sources and is not HSE's guidance for low-voltage electrical test equipment.",
      C: "GS40 is not the HSE guidance note that specifies suitable probes, leads, fused tips and voltage indicators for electricians.",
      D: "GS99 is not the low-voltage test-probe guidance identifier; the relevant HSE publication is GS38.",
    },
    [HSE_GS38],
  ),
  reviewed(
    "quiz-29773",
    11,
    {
      A: "An earth-electrode tester assesses electrode resistance using auxiliary probes, not the complete line-earth loop of a live final circuit.",
      C: "A prospective-current function expresses available fault current rather than directly presenting the line-earth loop impedance value.",
      D: "An RCD tester injects differential current to check trip behaviour and is not the instrument for a direct Zs measurement.",
    },
    [FLUKE_INSTALLATION_TESTER, IET_DISCONNECTION_TIMES],
  ),
  reviewed(
    "quiz-29773",
    12,
    {
      B: "A conventional earth-loop impedance test needs an energised installation so test current can flow around the supply fault loop.",
      C: "Prospective short-circuit current is determined at a live supply point and therefore depends on the mains source being present.",
      D: "An RCD test must energise the protected circuit and inject residual current through the device, so it cannot operate independently of mains.",
    },
    [FLUKE_INSTALLATION_TESTER, HSE_GS38],
  ),
  reviewed(
    "quiz-29773",
    13,
    {
      A: "A continuity tester normally has two test connections and reads resistance; it does not have the three phase leads and rotation display shown.",
      B: "An earth-fault-loop tester measures impedance to the supply source and does not indicate the order of three line conductors.",
      D: "A voltage indicator establishes presence or absence of voltage but does not by itself display clockwise or anticlockwise phase sequence.",
    },
    [FLUKE_PHASE_ROTATION, HSE_GS38],
  ),
  reviewed(
    "quiz-29773",
    14,
    {
      A: "A continuity tester is a dead-test instrument and cannot determine the live phase rotation of an energised three-phase supply.",
      B: "An earth-fault-loop tester checks the fault path and disconnection conditions, not the order in which the three phase voltages reach their peaks.",
      D: "A voltage indicating device can confirm that each phase is live, but ordinary voltage indication does not establish their rotational sequence.",
    },
    [FLUKE_PHASE_ROTATION, HSE_GS38],
  ),
  reviewed(
    "quiz-29773",
    15,
    {
      B: "An earth-loop tester intentionally operates on a live system and is not the dedicated two-pole detector used to prove dead during isolation.",
      C: "A phase-rotation meter identifies three-phase sequence and is not the pictured device for checking presence or absence of voltage.",
      D: "A temperature probe measures heat and provides no indication that electrical conductors are live or safely isolated.",
    },
    [HSE_GS38, HSE_HSG85],
  ),
  reviewed(
    "quiz-29773",
    16,
    {
      A: "An ammeter measures current in a conductor or circuit; it does not inject and follow a tracing signal through hidden wiring.",
      C: "A phase-rotation meter connects to three live conductors to show sequence and cannot locate the route or protective device of a circuit.",
      D: "A temperature probe responds to temperature and has no transmitter-and-receiver function for following electrical circuits.",
    },
    [FLUKE_CIRCUIT_TRACER],
  ),
  reviewed(
    "quiz-29773",
    17,
    {
      B: "A phase-rotation meter uses three phase connections and a sequence indication, not the hinged current-sensing jaw shown.",
      C: "A temperature probe senses heat at its tip or surface and does not clamp around a conductor to measure current.",
      D: "A voltmeter connects across two points; the pictured jaws allow current measurement without opening the conductor.",
    },
    [FLUKE_CLAMP_METER],
  ),
  reviewed(
    "quiz-29773",
    18,
    {
      A: "An ammeter measures current and would not use a moulded 13 A plug with indicator lamps to report socket wiring patterns.",
      B: "An insulation tester applies a test voltage through leads and reports resistance; it is not this direct plug-in indication device.",
      C: "Martindale is the manufacturer's name visible on the case, not the functional type of instrument the question asks to identify.",
    },
    [ESF_SOCKET_TESTERS],
  ),
] as const;
