import inspectionDesign2396Data from "../exam-data/inspection-design-2396.json";
import { applyExamExplanationEnhancements } from "../examExplanationEnhancements";
import type { Exam, ExamChoice } from "../exams/types";

const IET_CURRENT_EDITION =
  "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/ensure-you-are-up-to-date-with-bs-7671/";
const IET_ISOLATION =
  "https://electrical.theiet.org/wiring-matters/years/2023/94-march-2023/isolation-and-switching-for-mechanical-maintenance/";
const IET_CONDUIT_AND_TRUNKING =
  "https://electrical.theiet.org/wiring-matters/years/2021/88-november-2021/the-history-of-cable-capacities-for-conduit-and-trunking/";
const IET_BASIC_AND_FAULT_PROTECTION =
  "https://electrical.theiet.org/wiring-matters/years/2019/75-may-2019/mythbusters-4-double-insulated-cables/";
const HSE_ATEX_DEFINITIONS =
  "https://www.hse.gov.uk/electricity/atex/definitions.htm";
const HSE_ATEX_CLASSIFICATION =
  "https://www.hse.gov.uk/electricity/atex/classification.htm";
const IET_BATHROOM_FAQ =
  "https://electrical.theiet.org/wiring-matters/years/2019/77-september-2019/bs-76712018-frequently-asked-questions/";
const IET_BATHROOM_GUIDE =
  "https://electrical.theiet.org/media/1605/protective-measures-special-installations-or-locations-part-1.pdf";
const IEC_ELECTRIC_FENCE = "https://webstore.iec.ch/en/publication/60232";
const HSE_ELECTRIC_FENCE = "https://www.hse.gov.uk/foi/internalops/oms/04.htm";
const IET_BURIED_CABLES =
  "https://electrical.theiet.org/wiring-matters/years/2024/101-july-2024/buried-conduits-and-ducts/";
const IET_SPECIAL_LOCATIONS =
  "https://electrical.theiet.org/media/1058/2012_45_winter_wiring_matters__complete_adverts.pdf";
const IET_CONSTRUCTION =
  "https://electrical.theiet.org/wiring-matters/years/2024/99-march-2024/mythbuster-10-event-distribution-boards-with-socket-outlets-are-not-permitted-for-use-on-construction-sites/";
const HSE_CONSTRUCTION =
  "https://www.hse.gov.uk/electricity/information/construction.htm";
const IET_CARAVANS =
  "https://electrical.theiet.org/media/1187/electrical-installations-in-caravan-camping-parks-caravans-and-motor-caravans.pdf";
const IET_HIGH_PROTECTIVE_CURRENT =
  "https://electrical.theiet.org/wiring-matters/years/2022/93-november-2022/high-protective-conductor-currents-in-electrical-installations/";
const HSE_LASERS = "https://www.hse.gov.uk/radiation/optical/lasers.htm";
const IET_FUNCTIONAL_EARTHING =
  "https://electrical.theiet.org/wiring-matters/years/2024/102-september-2024/the-impact-of-amendment-42026-on-the-18th-edition-of-the-iet-wiring-regulations/";
const NATIONAL_GRID_NETWORK =
  "https://www.nationalgrid.com/electricity-transmission/who-we-are/running-our-network/substations-pylons-and-overhead-lines";
const NATIONAL_GRID_SUPERGRID =
  "https://www.nationalgrid.com/supergrid-history/technology";
const NESO_ETYS =
  "https://www.neso.energy/publications/electricity-ten-year-statement-etys/our-etys-analysis";
const IET_ZE_GUIDANCE =
  "https://electrical.theiet.org/wiring-matters/years/2018/72-september-2018/earth-fault-loop-impedance-revision-of-ena-engineering-recommendation-p23/";
const IET_BONDING_FAQ =
  "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/earthing-and-bonding-faqs/";
const IET_PROTECTIVE_BONDING =
  "https://electrical.theiet.org/wiring-matters/years/2019/76-july-2019/protective-bonding-habits/";
const IET_RCD_TESTING =
  "https://electrical.theiet.org/wiring-matters/years/2022/91-july-2022/changes-to-rcd-testing-in-bs-76712018plusa22022/";
const IET_DISCONNECTION =
  "https://electrical.theiet.org/wiring-matters/years/2023/94-march-2023/determining-the-maximum-earth-fault-loop-impedance-for-protective-devices-to-bs-en-60898-bs-en-60947-2/";
const IET_APPENDIX_FOUR =
  "https://electrical.theiet.org/media/1522/changes-to-appendix-4-of-amendment-1-of-bs7671-2008.pdf";
const IET_FUSES =
  "https://electrical.theiet.org/wiring-matters/years/2024/103-november-2024/how-does-the-installation-of-microgeneration-affect-the-rated-current-of-a-consumer-unit/";
const IEC_ELECTROPEDIA = "https://www.electropedia.org/";
const BIPM_SI = "https://www.bipm.org/en/publications/si-brochure";
const GOV_UK_RENEWABLES =
  "https://www.gov.uk/guidance/renewable-and-low-carbon-energy";
const US_DOE_GEOTHERMAL =
  "https://www.energy.gov/eere/geothermal/geothermal-basics";
const US_EIA_NATURAL_GAS = "https://www.eia.gov/energyexplained/natural-gas/";

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

export const inspectionDesign2396Part1 = [
  reviewed(
    "quiz-29760",
    1,
    {
      A: "A circuit-breaker is intended to make, carry and break current under normal and specified abnormal conditions, not merely off-load.",
      B: "A switch is normally capable of making and breaking load current, so it is not defined by off-load operation alone.",
      C: "An RCD detects residual-current imbalance and disconnects the circuit; it is not the off-load device described.",
    },
    [IET_ISOLATION],
  ),
  reviewed(
    "quiz-29760",
    2,
    {
      A: "A BS 1361 fuse was a domestic cartridge-fuse standard and is not the listed high-capacity industrial fuse expected here.",
      B: "A BS 1362 fuse is the small cartridge fuse used in a UK plug and is not intended for very high fault levels.",
      C: "A BS 3036 semi-enclosed rewirable fuse has a lower breaking capability than a high-rupturing-capacity BS 88 fuse.",
    },
    [IET_FUSES],
  ),
  reviewed(
    "quiz-29760",
    3,
    {
      B: "Changing the circuit protective conductor size does not accommodate the dimensional movement of PVC as temperature changes.",
      C: "Reducing the protective-device rating cannot prevent a long rigid PVC run from expanding or contracting mechanically.",
      D: "Rigid PVC does change length with temperature, so omitting movement provision can stress joints, boxes and supports.",
    },
    [IET_CONDUIT_AND_TRUNKING],
  ),
  reviewed(
    "quiz-29760",
    4,
    {
      B: "Correct product design is a general selection concern, but it is not the functional-switch principle stated by this regulation.",
      C: "Clear ON and OFF indication may be useful, but it is not what Regulation 537.3.1.3 establishes about current control.",
      D: "Displaying switching signs is unrelated to the rule that a functional switch need not open every pole.",
    },
    [IET_ISOLATION, IET_CURRENT_EDITION],
  ),
  reviewed(
    "quiz-29760",
    5,
    {
      A: "Thirty-five percent is the fallback space factor associated with conduit, not the maximum used for trunking.",
      C: "A 55 percent fill exceeds the IET fallback trunking space factor and leaves insufficient allowance for installation.",
      D: "A 75 percent fill is substantially above the trunking guidance and would make cable installation and heat dissipation unsuitable.",
    },
    [IET_CONDUIT_AND_TRUNKING],
  ),
  reviewed(
    "quiz-29760",
    6,
    {
      A: "A double-pole double-throw device gives each pole a changeover path, which the described arrangement expressly lacks.",
      C: "A single-pole double-throw device has only one operated pole and includes a changeover contact.",
      D: "A single-pole single-throw device operates only one circuit, not two poles together as required here.",
    },
    [IEC_ELECTROPEDIA],
  ),
  reviewed(
    "quiz-29760",
    7,
    {
      B: "Shock from metal trunking that has become live concerns fault protection after an insulation failure, not fault-free contact.",
      C: "A live motor body is an exposed-conductive-part fault scenario, so protection against it is fault protection.",
      D: "Simultaneous contact involving a live conductive part is not the definition of basic protection under normal fault-free conditions.",
    },
    [IET_BASIC_AND_FAULT_PROTECTION],
  ),
  reviewed(
    "quiz-29760",
    8,
    {
      A: "A circuit-breaker includes an overcurrent release and is selected to interrupt overload as well as short-circuit current.",
      B: "A fuse responds to sustained overcurrent by melting its element, so overload protection is one of its core functions.",
      C: "An MCCB is an overcurrent protective device with overload and short-circuit trip functions for higher-current circuits.",
    },
    [IET_BASIC_AND_FAULT_PROTECTION, IET_RCD_TESTING],
  ),
  reviewed(
    "quiz-29760",
    9,
    {
      B: "Forty-five percent is the fallback cable space factor for trunking rather than conduit.",
      C: "A 55 percent conduit fill is above the guidance value and does not leave adequate installation space.",
      D: "A 75 percent conduit fill greatly exceeds the recommended maximum and would make drawing-in conductors impracticable.",
    },
    [IET_CONDUIT_AND_TRUNKING],
  ),
  reviewed(
    "quiz-29760",
    10,
    {
      B: "Regulation 341.1 concerns compatibility assessment and is not the quoted general requirement for cutting off voltage.",
      C: "Regulation 411.3.3 concerns additional RCD protection for specified socket-outlets and mobile equipment, not whole-installation isolation.",
      D: "Regulation 537.5.1.1 addresses emergency switching provisions, whereas the quoted wording is the fundamental design requirement in 132.15.201.",
    },
    [IET_ISOLATION, IET_CURRENT_EDITION],
  ),
  reviewed(
    "quiz-29760",
    11,
    {
      A: "Group A is not the ATEX equipment-group designation used for ordinary surface petroleum and chemical industries.",
      B: "Group B is not the ATEX equipment-group designation for surface industries with gas or dust hazards.",
      C: "Group I applies to underground mines susceptible to firedamp, not a petroleum or chemical surface installation.",
    },
    [HSE_ATEX_DEFINITIONS, HSE_ATEX_CLASSIFICATION],
  ),
  reviewed(
    "quiz-29760",
    12,
    {
      B: "Atmospheres and Explosives is an English expansion invented from the initials, not the term from the European directives.",
      C: "Atmospheric Explosion is not the source phrase represented by ATEX in hazardous-area legislation and equipment marking.",
      D: "Extreme Atmospheres is unrelated to the French expression from which the recognised abbreviation ATEX is formed.",
    },
    [HSE_ATEX_DEFINITIONS],
  ),
  reviewed(
    "quiz-29760",
    13,
    {
      A: "Category 3G and EPL Gc are normally associated with Zone 2, where an explosive gas atmosphere is unlikely or brief.",
      C: "Category 1D and EPL Da concern the highest dust protection level and do not specify equipment for a Zone 1 gas atmosphere.",
      D: "Group II alone identifies a broad surface-industry group; the category, gas designation and EPL still must suit Zone 1.",
    },
    [HSE_ATEX_CLASSIFICATION],
  ),
  reviewed(
    "quiz-29760",
    14,
    {
      B: "The G suffix in an ATEX category is a hazardous-medium designation, not a statement of geographic location.",
      C: "Enclosure construction is described through protection concepts and standards; the category suffix G does not name its material.",
      D: "Equipment weight is not encoded by G in the ATEX category marking and has no role in this classification.",
    },
    [HSE_ATEX_DEFINITIONS, HSE_ATEX_CLASSIFICATION],
  ),
  reviewed(
    "quiz-29760",
    15,
    {
      B: "The paired diodes do not create two independent protected hazardous areas; they form redundant limiting components in one barrier.",
      C: "System balance is not the purpose of the duplicate safety components in an intrinsic-safety shunt-diode barrier.",
      D: "A circuit could function electrically with one diode, but intrinsic safety requires redundancy against a component failure.",
    },
    [HSE_ATEX_DEFINITIONS],
  ),
  reviewed(
    "quiz-29760",
    16,
    {
      A: "Petroleum vapour can mix with air and form a flammable atmosphere within its explosive concentration range.",
      C: "Common petroleum vapours tend to collect at low level because their vapour density is generally greater than air.",
      D: "Petroleum vapour is combustible; controlling ignition sources is central to hazardous-area precautions around it.",
    },
    [HSE_ATEX_DEFINITIONS, HSE_ATEX_CLASSIFICATION],
  ),
  reviewed(
    "quiz-29760",
    17,
    {
      B: "A flameproof enclosure is not required to be gas-tight; controlled flamepaths cool escaping combustion products safely.",
      C: "Tamper resistance may be provided separately, but it does not explain precision flamepaths and numerous securing bolts.",
      D: "The flange geometry is a functional explosion-protection feature rather than a cosmetic treatment for appearance.",
    },
    [HSE_ATEX_DEFINITIONS, HSE_ATEX_CLASSIFICATION],
  ),
  reviewed(
    "quiz-29760",
    18,
    {
      B: "Ex e denotes increased safety, which avoids arcs, sparks and excessive temperatures rather than containing an internal explosion.",
      C: "Ex i denotes intrinsic safety achieved by limiting available electrical and thermal energy, not by a flameproof enclosure.",
      D: "Ex t is protection by enclosure for combustible-dust atmospheres and is not the flameproof gas concept described.",
    },
    [HSE_ATEX_DEFINITIONS, HSE_ATEX_CLASSIFICATION],
  ),
  reviewed(
    "quiz-29760",
    19,
    {
      B: "Section 709 covers marinas and similar locations, not rooms containing a fixed bath or shower.",
      C: "Section 711 covers exhibitions, shows and stands rather than bathroom and shower locations.",
      D: "Section 753 covers floor and ceiling heating systems generally, not the complete special-location rules for bathrooms.",
    },
    [IET_BATHROOM_FAQ, IET_BATHROOM_GUIDE],
  ),
  reviewed(
    "quiz-29760",
    20,
    {
      A: "A standard plate switch in zone 1 is accessible mains-voltage switchgear and is not a permitted user-operated arrangement there.",
      B: "Moving the same standard plate switch to zone 2 does not make it a suitable control within the bathroom zones.",
      C: "A metal switch beside the bath presents accessible mains-voltage switchgear in a high-risk position and is not the permitted solution.",
    },
    [IET_BATHROOM_FAQ, IET_BATHROOM_GUIDE],
  ),
  reviewed(
    "quiz-29760",
    21,
    {
      A: "IPX7 addresses water ingress, but it does not by itself satisfy zone 0 voltage, equipment-suitability and source-location requirements.",
      C: "PELV at 50 V AC exceeds the zone 0 voltage limit and PELV is not the SELV protective measure specified there.",
      D: "Tool-only access does not replace the explicit zone 0 restrictions on intended use, SELV voltage and source location.",
    },
    [IET_BATHROOM_FAQ, IET_BATHROOM_GUIDE],
  ),
  reviewed(
    "quiz-29760",
    22,
    {
      A: "A burial depth of 500 mm is not the special protective construction required for a bathroom floor-heating element.",
      C: "Concrete alone does not provide the required earthed metallic sheath, enclosure or fine-mesh grid around the heating element.",
      D: "A 6 A MCB provides overcurrent protection but does not supply the required earthed metallic protective construction.",
    },
    [IET_BATHROOM_GUIDE],
  ),
  reviewed(
    "quiz-29760",
    23,
    {
      A: "Section 701 does not set a general maximum of three 13 A socket-outlets in a bathroom location.",
      B: "RCD protection is required but is not sufficient to allow a socket closer than the specified distance from zone 1.",
      D: "Socket quantity is not unrestricted because ordinary socket-outlets must also satisfy the three-metre location restriction.",
    },
    [IET_BATHROOM_FAQ, IET_BATHROOM_GUIDE],
  ),
  reviewed(
    "quiz-29760",
    24,
    {
      A: "Zone 0 is the interior of a bath or shower basin; an ordinary washbasin is not assigned this zone.",
      B: "Zone 1 is defined around the bath or shower dimensions and is not independently created by a washbasin.",
      C: "Zone 2 extends from the bath or shower zone boundaries; a washbasin does not generate its own zone 2.",
    },
    [IET_BATHROOM_FAQ, IET_BATHROOM_GUIDE],
  ),
  reviewed(
    "quiz-29760",
    25,
    {
      A: "The shaver transformer provides electrical separation; describing it merely as an ELV transformer misses the required construction.",
      C: "An isolating-transformer secondary is separated from the supply earthing system rather than deliberately earthed back to the mains.",
      D: "An integral RCD is not the defining safety feature of a BS EN 61558-2-5 shaver supply unit.",
    },
    [IET_BATHROOM_GUIDE],
  ),
  reviewed(
    "quiz-29760",
    26,
    {
      A: "Suitable fixed ventilation equipment and towel rails are not restricted to locations wholly outside the bathroom zones.",
      B: "Zone 0 is inside the bath or shower basin and does not permit ordinary ventilation equipment or towel rails.",
      D: "Limiting the equipment to zone 2 is too restrictive because suitable fixed equipment may also be installed in zone 1.",
    },
    [IET_BATHROOM_GUIDE],
  ),
  reviewed(
    "quiz-29760",
    27,
    {
      B: "Fifteen kilovolts exceeds the electric-fence energizer no-load output-voltage ceiling in the current product standard.",
      C: "One kilovolt is far below the permitted maximum and is not the standard's upper no-load output value.",
      D: "Five kilovolts may occur in fence operation, but it is not the maximum no-load energizer output allowed by the standard.",
    },
    [IEC_ELECTRIC_FENCE, HSE_ELECTRIC_FENCE],
  ),
  reviewed(
    "quiz-29760",
    28,
    {
      B: "A depth of 250 mm gives inadequate protection against ploughing and other cultivation activities.",
      C: "A depth of 450 mm is shallower than the special one-metre guidance for cable beneath cultivated agricultural ground.",
      D: "Six hundred millimetres is the general agricultural depth; cultivated ground requires the greater one-metre depth.",
    },
    [IET_BURIED_CABLES, IET_SPECIAL_LOCATIONS],
  ),
  reviewed(
    "quiz-29760",
    29,
    {
      A: "A 300 mA RCD can assist fire protection but is not sensitive enough for additional protection of a 13 A socket circuit.",
      C: "A 500 mA RCD is far above the 30 mA additional-protection threshold required for the socket-outlet circuit.",
      D: "Agricultural socket-outlets require additional RCD protection, so omitting an RCD does not meet Section 705.",
    },
    [IET_SPECIAL_LOCATIONS, IET_RCD_TESTING],
  ),
  reviewed(
    "quiz-29760",
    30,
    {
      A: "Ten volts is not the conventional AC touch-voltage limit applied to locations intended for livestock.",
      B: "A 110 V touch voltage would be hazardous and is well above the reduced limit used for livestock locations.",
      D: "Fifty volts is the general conventional AC touch-voltage limit; livestock locations use the lower 25 V value.",
    },
    [IET_SPECIAL_LOCATIONS],
  ),
  reviewed(
    "quiz-29761",
    1,
    {
      A: "A convenient pole is not automatically safe because separation, security, weather exposure and the manufacturer's siting rules still apply.",
      C: "Keeping an energizer somewhere within farm boundaries is too vague to satisfy its installation and separation requirements.",
      D: "Mounting the energizer directly on the electrified fence can defeat required separation and create an unsafe accessible arrangement.",
    },
    [IEC_ELECTRIC_FENCE, HSE_ELECTRIC_FENCE],
  ),
  reviewed(
    "quiz-29761",
    2,
    {
      A: "Annual inspection may be chosen after risk assessment, but it is shorter than the commonly recommended maximum interval asked for.",
      C: "Five years is the common maximum for some commercial premises, not the more frequent interval recommended for agricultural installations.",
      D: "Six-monthly inspection can be prudent in harsh conditions, but it is not the standard recommended maximum periodic interval.",
    },
    [IET_SPECIAL_LOCATIONS, IET_CURRENT_EDITION],
  ),
  reviewed(
    "quiz-29761",
    3,
    {
      A: "A 0.25 m cover is too shallow to provide reasonable mechanical protection for an agricultural underground cable.",
      B: "A 0.4 m depth remains below the 0.6 m guidance for uncultivated agricultural ground.",
      D: "One metre is the greater depth used for cultivated land; it is not the minimum stated for uncultivated ground.",
    },
    [IET_BURIED_CABLES, IET_SPECIAL_LOCATIONS],
  ),
  reviewed(
    "quiz-29761",
    4,
    {
      A: "Regulation 705.513.2 concerns accessibility and siting of equipment rather than automatic life-support supplies.",
      B: "Regulation group 705.55 covers other equipment requirements but is not the specific automatic-life-support provision requested.",
      C: "Regulation group 705.56 addresses safety services generally; the detailed high-density-livestock rule is 705.560.6.",
    },
    [IET_SPECIAL_LOCATIONS, IET_CURRENT_EDITION],
  ),
  reviewed(
    "quiz-29761",
    5,
    {
      A: "A busbar system is a distribution assembly rather than the listed cable type requested for a mechanically protected fixed route.",
      C: "Steel conduit can protect enclosed conductors, but it is a containment system rather than a cable from the listed choices.",
      D: "Arctic flexible cable is intended for flexible temporary connections and lacks the integral armour expected for this fixed main route.",
    },
    [IET_CONSTRUCTION, HSE_CONSTRUCTION],
  ),
  reviewed(
    "quiz-29761",
    6,
    {
      A: "A 100 mA rating is not the Section 704 upper limit specified for construction-site socket circuits above 32 A.",
      B: "A 300 mA device is more sensitive than the maximum permitted value but is not the regulatory maximum being asked for.",
      C: "Thirty milliamperes is required for socket-outlets up to 32 A; the question expressly addresses ratings above that threshold.",
    },
    [IET_CONSTRUCTION, IET_RCD_TESTING],
  ),
  reviewed(
    "quiz-29761",
    7,
    {
      B: "Daily user checks may reveal visible damage, but they are not a full periodic inspection and testing interval.",
      C: "Monthly formal inspection may be selected for severe conditions, but it is not the commonly recommended maximum interval.",
      D: "A yearly interval is too long for the damage-prone and changing electrical environment of a construction site.",
    },
    [HSE_CONSTRUCTION, IET_CONSTRUCTION],
  ),
  reviewed(
    "quiz-29761",
    8,
    {
      B: "Blue IEC 60309 accessories identify the 200–250 V range, not the 110 V reduced-low-voltage system.",
      C: "Red identifies the 380–480 V range normally used for 400 V three-phase supplies, not 110 V.",
      D: "The 50 V range uses a different keying and colour designation; yellow is the recognised 110 V site-supply colour.",
    },
    [HSE_CONSTRUCTION, IEC_ELECTROPEDIA],
  ),
  reviewed(
    "quiz-29761",
    9,
    {
      A: "Blue identifies IEC 60309 accessories in the 200–250 V range rather than a 400 V three-phase connector.",
      C: "Violet is associated with a lower special voltage range and is not the normal colour for a 400 V accessory.",
      D: "Yellow identifies the common 110 V reduced-low-voltage site system, not a 400 V 32 A connector.",
    },
    [HSE_CONSTRUCTION, IEC_ELECTROPEDIA],
  ),
  reviewed(
    "quiz-29761",
    10,
    {
      B: "Red IEC 60309 accessories identify the 380–480 V range and are not the colour for a 230 V 16 A version.",
      C: "Violet is assigned to a lower special voltage band, not the ordinary 230 V single-phase range.",
      D: "Yellow identifies the common 110 V reduced-low-voltage range rather than the 230 V accessory shown.",
    },
    [HSE_CONSTRUCTION, IEC_ELECTROPEDIA],
  ),
  reviewed(
    "quiz-29761",
    11,
    {
      A: "Identification is helped by colour and markings, but the physical keyway primarily prevents incompatible voltage and frequency combinations mating.",
      C: "A keyway is not an access-control mechanism and cannot determine whether the person inserting a plug is authorised.",
      D: "The retractable lid is secured by its hinge and catch; the plug keyway instead enforces mechanical compatibility.",
    },
    [HSE_CONSTRUCTION, IEC_ELECTROPEDIA],
  ),
  reviewed(
    "quiz-29761",
    12,
    {
      A: "Advanced Construction Scheme is not the standard expansion of ACS used for a construction-site distribution assembly.",
      C: "Automatic Connection of the Supply describes an imagined control function, not the defined assembly type used on sites.",
      D: "Automatic Contactor System is not the recognised meaning of ACS in the construction-site distribution context.",
    },
    [IET_CONSTRUCTION],
  ),
  reviewed(
    "quiz-29761",
    13,
    {
      A: "Section 701 applies to locations containing a bath or shower, not caravan and camping parks.",
      B: "Section 705 applies to agricultural and horticultural premises rather than caravan-site distribution.",
      D: "Section 721 covers the installations inside caravans and motor caravans; the park itself is covered by Section 708.",
    },
    [IET_CARAVANS, IET_CURRENT_EDITION],
  ),
  reviewed(
    "quiz-29761",
    14,
    {
      A: "MIMS is durable but is not the normal flexible, armoured underground distribution cable used for caravan pitch supplies.",
      B: "PVC/PVC cable has no integral armour and normally lacks the mechanical protection needed for direct underground site distribution.",
      D: "Singles in conduit require a complete suitable underground containment system and are not the normal cable choice requested.",
    },
    [IET_CARAVANS, IET_BURIED_CABLES],
  ),
  reviewed(
    "quiz-29761",
    15,
    {
      A: "A 10 cm support spacing is closer than the commonly recommended spacing and is not the value requested.",
      B: "A 15 cm interval is not the guidance value used for horizontal flexible cable and conduit runs in a caravan.",
      C: "A 20 cm interval remains shorter than the 25 cm recommended horizontal support spacing in this context.",
    },
    [IET_CARAVANS],
  ),
  reviewed(
    "quiz-29761",
    16,
    {
      B: "HOFR describes heat- and oil-resistant flexible cable properties, not the general conductor construction selected for caravan wiring.",
      C: "SWA is too rigid and bulky for normal internal caravan wiring, where movement and vibration favour flexible conductors.",
      D: "Solid conductors are more vulnerable to vibration and repeated movement than the flexible conductors recommended inside a caravan.",
    },
    [IET_CARAVANS],
  ),
  reviewed(
    "quiz-29761",
    17,
    {
      A: "Extra-low voltage does not automatically make mixed routing safe because insulation and terminations can still be exposed to 230 V.",
      C: "ELV wiring does not always have to run outside the caravan; compliant segregation or common highest-voltage insulation is permitted.",
      D: "BS 7671 imposes segregation or insulation conditions when circuits of different voltage bands share an enclosure or route.",
    },
    [IET_CARAVANS, IET_CURRENT_EDITION],
  ),
  reviewed(
    "quiz-29761",
    18,
    {
      A: "A domestic 13 A socket rating is below the minimum specified for a caravan-pitch BS EN 60309-2 outlet.",
      C: "A 32 A outlet may be installed where designed for it, but 32 A is not the minimum rating.",
      D: "A 6 A outlet cannot provide the minimum supply capacity required at a caravan pitch connection point.",
    },
    [IET_CARAVANS],
  ),
  reviewed(
    "quiz-29761",
    19,
    {
      B: "Sharing one RCD between two pitch sockets allows a fault at one pitch to interrupt another and exceeds the individual-protection recommendation.",
      C: "Protecting three pitch sockets together further reduces continuity and does not provide the recommended one-RCD-per-socket arrangement.",
      D: "Four sockets on one RCD create an even wider common trip and are not the recommended maximum for caravan pitches.",
    },
    [IET_CARAVANS, IET_RCD_TESTING],
  ),
  reviewed(
    "quiz-29761",
    20,
    {
      A: "Section 701 concerns bath and shower locations rather than the electrical installation within a caravan or motor caravan.",
      B: "Section 705 concerns agricultural and horticultural installations and does not govern caravan internal wiring.",
      C: "Section 717 concerns mobile or transportable units generally; caravans and motor caravans have the specific Section 721 rules.",
    },
    [IET_CARAVANS, IET_CURRENT_EDITION],
  ),
  reviewed(
    "quiz-29761",
    21,
    {
      A: "One ampere is far above the threshold at which enhanced protective-conductor arrangements become necessary for connected equipment.",
      B: "A single 1 mA item does not by itself trigger the high-integrity connection rule for this group of socket-outlets.",
      C: "Three amperes is hundreds of times above the relevant leakage-current threshold and is not the BS 7671 criterion.",
    },
    [IET_HIGH_PROTECTIVE_CURRENT],
  ),
  reviewed(
    "quiz-29761",
    22,
    {
      A: "The fibre itself is dielectric, so ordinary electrical shock from the optical path is not the reason never to look into it.",
      C: "Broken fibre can injure skin, but the instruction to treat an active end as live specifically controls invisible optical eye exposure.",
      D: "Heat is not the principal viewing hazard from a live communications fibre; concentrated optical radiation can damage the eye.",
    },
    [HSE_LASERS],
  ),
  reviewed(
    "quiz-29761",
    23,
    {
      A: "Band A is not the BS 7671 voltage-band designation used for extra-low-voltage telecommunications and signalling circuits.",
      B: "Band B is not one of the Roman-numeral voltage-band classifications applied by BS 7671 in this context.",
      D: "Band II covers low-voltage power circuits above ELV limits, not the extra-low-voltage signalling circuits described.",
    },
    [IET_CURRENT_EDITION],
  ),
  reviewed(
    "quiz-29761",
    24,
    {
      A: "Metal containment alone is not the specified functional-earthing conductor and cannot justify omitting a circuit protective conductor.",
      C: "Separate electrodes can develop dangerous potential differences and are not the coordinated functional-and-protective earthing arrangement required.",
      D: "Disconnecting armour from the installation earthing system can remove necessary protective continuity and does not establish compliant functional earthing.",
    },
    [IET_FUNCTIONAL_EARTHING, IET_CURRENT_EDITION],
  ),
  reviewed(
    "quiz-29761",
    25,
    {
      A: "Radio and television signals are communications emissions, not an AC power switching event that creates a supply transient.",
      B: "Capacitor switching can create transients, but the especially familiar high-voltage switching disturbance arises when inductive current is interrupted.",
      D: "A purely resistive load stores little field energy, so its switching is less prone to the inductive voltage spike described.",
    },
    [IEC_ELECTROPEDIA],
  ),
  reviewed(
    "quiz-29761",
    26,
    {
      A: "Fibre can be suitable in hazardous areas because it carries optical energy and is immune to ordinary electrical ignition mechanisms.",
      B: "Optical fibre supports long transmission distances with low attenuation, so frequent short-distance repeaters are not an inherent requirement.",
      C: "A major fibre advantage is immunity to electromagnetic interference that can disturb metallic communications cabling.",
    },
    [HSE_LASERS, IEC_ELECTROPEDIA],
  ),
  reviewed(
    "quiz-29761",
    27,
    {
      B: "Section 701 addresses bath and shower locations rather than equipment with high protective-conductor current.",
      C: "Section 740 concerns temporary electrical installations for structures and amusement devices, not IT leakage-current arrangements.",
      D: "Part 2 supplies definitions across BS 7671; it is not the specific high-protective-conductor-current section requested.",
    },
    [IET_HIGH_PROTECTIVE_CURRENT, IET_CURRENT_EDITION],
  ),
  reviewed(
    "quiz-29761",
    28,
    {
      A: "A finite battery and inverter cannot maintain the office supply indefinitely unless another continuing energy source is available.",
      B: "A UPS may allow systems to save data, but it supplies electrical power rather than performing the data backup itself.",
      C: "Filtering and voltage conditioning can be secondary benefits, but during an outage the defining function is temporary power continuity.",
    },
    [IEC_ELECTROPEDIA],
  ),
  reviewed(
    "quiz-29761",
    29,
    {
      B: "A 132–400 kV range belongs to transmission after transformation and is far above an alternator's direct terminal voltage.",
      C: "Megavolt terminal voltages are not used by large station alternators and would be impractical for generator insulation.",
      D: "A 230–400 V output is typical low voltage and would require enormous current for utility-scale generator power.",
    },
    [NATIONAL_GRID_NETWORK],
  ),
  reviewed(
    "quiz-29761",
    30,
    {
      A: "Biomass is generally classified as a renewable biological energy source rather than a geological fossil fuel.",
      B: "Nuclear fuel is finite but is not a fossil fuel formed from ancient organic material such as coal, oil or gas.",
      C: "Solar energy is renewable radiation from the Sun and does not involve combustion of a fossil fuel.",
    },
    [US_EIA_NATURAL_GAS, GOV_UK_RENEWABLES],
  ),
  reviewed(
    "quiz-29762",
    1,
    {
      A: "A delta secondary has no accessible star neutral point, so delta/delta does not provide the 400/230 V four-wire domestic supply required.",
      C: "A star primary and delta secondary again leaves no secondary neutral for ordinary 230 V single-phase domestic loads.",
      D: "Star/star is not the customary 11 kV distribution-transformer connection; a delta primary also helps contain zero-sequence and triplen currents.",
    },
    [NATIONAL_GRID_NETWORK, IEC_ELECTROPEDIA],
  ),
  reviewed(
    "quiz-29762",
    2,
    {
      A: "Balancing single-phase loads reduces neutral current but does not justify omitting the neutral where the connected loads require it.",
      C: "Load balance reduces avoidable losses but cannot eliminate conductor resistance, transformer loss or all other electrical loss.",
      D: "Tariffs and energy consumption determine the bill; phase balancing is principally an electrical loading and voltage-quality requirement.",
    },
    [IEC_ELECTROPEDIA, IET_CURRENT_EDITION],
  ),
  reviewed(
    "quiz-29762",
    3,
    {
      A: "Biomass releases energy stored in recently living material rather than drawing heat directly from within the Earth.",
      B: "Coal is a fossil fuel burned for chemical energy and is not a technology that utilises underground geothermal heat.",
      D: "Nuclear generation uses energy from atomic fission, not naturally occurring heat extracted from the Earth.",
    },
    [US_DOE_GEOTHERMAL, GOV_UK_RENEWABLES],
  ),
  reviewed(
    "quiz-29762",
    4,
    {
      A: "Central point is only a descriptive phrase and is not the standard name for the common junction of star-connected windings.",
      B: "Earthing point describes a connection to earth generally, not the transformer winding junction from which neutral is derived.",
      C: "Neutral point can describe its electrical function, but the winding-connection name requested is the star point.",
    },
    [IEC_ELECTROPEDIA, NATIONAL_GRID_NETWORK],
  ),
  reviewed(
    "quiz-29762",
    5,
    {
      B: "Glass is used in insulator strings to support a line while separating it from a tower, not as insulation surrounding the span.",
      C: "High-voltage overhead conductors are normally bare and are not covered along their length with PVC insulation.",
      D: "Rubber does not surround transmission conductors; their clearance through air supplies the principal insulation between live parts and earth.",
    },
    [NATIONAL_GRID_NETWORK],
  ),
  reviewed(
    "quiz-29762",
    6,
    {
      A: "Biomass comes from biological material on a renewable timescale and is not classed with geological fossil fuels.",
      B: "Geothermal energy uses heat from within the Earth and is renewable rather than a combustible fossil fuel.",
      C: "Nuclear fuel is mined and finite, but its fission energy does not make it a hydrocarbon fossil fuel.",
    },
    [US_EIA_NATURAL_GAS, GOV_UK_RENEWABLES],
  ),
  reviewed(
    "quiz-29762",
    7,
    {
      A: "An 11 kV connection is common for smaller private substations, but the question asks for the next higher tier used by very large customers.",
      B: "A 132 kV supply is possible for exceptionally large connections, but it is not the common listed distribution level immediately above 11 kV.",
      D: "A 400 kV connection belongs to the national transmission system and is not a normal direct distribution supply for an industrial customer.",
    },
    [NATIONAL_GRID_NETWORK, NESO_ETYS],
  ),
  reviewed(
    "quiz-29762",
    8,
    {
      A: "Coal is a finite fossil fuel formed over geological time and cannot be replenished on a human timescale.",
      B: "Natural gas is a fossil fuel extracted from finite underground reserves rather than a renewable flow of energy.",
      C: "Oil is a finite fossil resource, so using it consumes stored geological fuel instead of renewable energy.",
    },
    [GOV_UK_RENEWABLES, US_EIA_NATURAL_GAS],
  ),
  reviewed(
    "quiz-29762",
    9,
    {
      A: "For a given transmitted power, raising voltage reduces rather than increases current, which is the source of the efficiency benefit.",
      B: "Transformers make voltage conversion practical, but ease of conversion is not the principal reason for transmitting at high voltage.",
      C: "High transmission voltage is used to reduce current and voltage drop, not deliberately to increase drop over distance.",
    },
    [NATIONAL_GRID_NETWORK, IEC_ELECTROPEDIA],
  ),
  reviewed(
    "quiz-29762",
    10,
    {
      A: "Eleven kilovolts is a local distribution voltage and is not one of NGET's principal England and Wales transmission voltages.",
      B: "Some networks use 132 kV, but National Grid Electricity Transmission's principal system in England and Wales operates at 275 and 400 kV.",
      C: "Thirty-three kilovolts is a distribution level and is far below NGET's principal high-voltage transmission network.",
    },
    [NATIONAL_GRID_NETWORK, NESO_ETYS],
  ),
  reviewed(
    "quiz-29762",
    11,
    {
      A: "Eleven kilovolts is a distribution voltage and is not one of the 275 kV and 400 kV supergrid levels named in the prompt.",
      B: "A 132 kV network is high voltage but is distinct from the Great Britain 275/400 kV supergrid described.",
      C: "Thirty-three kilovolts is used for distribution and large customer supplies, not for the national supergrid.",
    },
    [NATIONAL_GRID_SUPERGRID, NATIONAL_GRID_NETWORK],
  ),
  reviewed(
    "quiz-29762",
    12,
    {
      B: "A 132 kV intake is reserved for much larger network connections and is not the common primary supply for an ordinary private transformer.",
      C: "A 33 kV intake can serve larger industrial sites, but 11 kV is the more common listed primary-distribution level.",
      D: "A 400 kV supply is part of the transmission supergrid and is wholly inappropriate as the usual private-transformer primary.",
    },
    [NATIONAL_GRID_NETWORK, NESO_ETYS],
  ),
  reviewed(
    "quiz-29762",
    13,
    {
      A: "Eleven and 33 kV are distribution levels and omit all three AC voltage levels that form the national transmission system.",
      B: "The transmission system includes 275 kV and 400 kV as well as 132 kV, so 132 kV alone is incomplete.",
      C: "The 230/400 V values are low-voltage utilisation levels and are not National Electricity Transmission System voltages.",
    },
    [NESO_ETYS, NATIONAL_GRID_NETWORK],
  ),
  reviewed(
    "quiz-29762",
    14,
    {
      A: "Unequal single-phase loading is the definition of an unbalanced condition, so the system cannot remain balanced.",
      B: "The neutral may carry imbalance current, but one or more phase conductors can also be overloaded by poor load distribution.",
      C: "Unequal phase currents can burden both phase and neutral conductors, so the effect is not confined to the phases.",
    },
    [IEC_ELECTROPEDIA, IET_CURRENT_EDITION],
  ),
  reviewed(
    "quiz-29762",
    15,
    {
      A: "Eleven kilovolts is the primary distribution input and is stepped down before supply to domestic or light-commercial premises.",
      B: "Thirty-three kilovolts is a higher distribution level and is not the secondary utilisation voltage of this transformer.",
      D: "Four hundred volts states only the line-to-line value and omits the 230 V line-to-neutral supply available from the star point.",
    },
    [NATIONAL_GRID_NETWORK, IEC_ELECTROPEDIA],
  ),
  reviewed(
    "quiz-29762",
    16,
    {
      A: "Eleven kilovolts is not obtained from a transformer secondary explicitly rated at 400 V three phase.",
      B: "A delta secondary has no neutral point, so it cannot supply the 230 V line-to-neutral component implied by 230/400 V.",
      C: "Two hundred and thirty volts would require a neutral or a different winding voltage; a 400 V three-wire delta supplies 400 V line-to-line.",
    },
    [IEC_ELECTROPEDIA, NATIONAL_GRID_NETWORK],
  ),
  reviewed(
    "quiz-29762",
    17,
    {
      B: "An unbalanced three-phase machine would create unequal currents and may need a neutral; it does not explain neutral-free operation.",
      C: "Not needing a 230 V single-phase supply is true of many motors, but balance is the electrical reason their phase currents sum to zero.",
      D: "A neutral is not inherently required by every three-phase machine; a balanced three-wire load operates without neutral current.",
    },
    [IEC_ELECTROPEDIA],
  ),
  reviewed(
    "quiz-29762",
    18,
    {
      B: "A 234 V phase voltage would correspond to about 405 V line voltage, not the stated 250 V line value.",
      C: "Four hundred volts is greater than the given line voltage and cannot be the phase voltage of a star system.",
      D: "Seven hundred and fifty volts results from multiplying by three and has no basis in the three-phase square-root relationship.",
    },
    [IEC_ELECTROPEDIA, BIPM_SI],
  ),
  reviewed(
    "quiz-29762",
    19,
    {
      A: "Adding 1.732 treats a dimensionless ratio as a voltage increment and does not describe the three-phase vector relationship.",
      B: "Subtracting 1.732 similarly has incompatible units and cannot derive line voltage from phase voltage.",
      C: "Dividing phase voltage by √3 produces a smaller value; line voltage in a star system is the larger quantity.",
    },
    [IEC_ELECTROPEDIA, BIPM_SI],
  ),
  reviewed(
    "quiz-29762",
    20,
    {
      A: "An inverter changes DC to AC and may control frequency or voltage, but it is not the conventional grid voltage-conversion device.",
      B: "Power converter is a broad electronic category; transmission and distribution voltage levels are conventionally changed by transformers.",
      D: "Voltage levels do not remain constant: generation is stepped up for transmission and stepped down progressively for consumers.",
    },
    [NATIONAL_GRID_NETWORK, IEC_ELECTROPEDIA],
  ),
  reviewed(
    "quiz-29762",
    21,
    {
      A: "Eleven kilovolts is a primary distribution voltage, not an output available from a 400 V secondary winding.",
      B: "Two hundred and thirty volts is available line-to-neutral, but this answer omits the simultaneous 400 V line-to-line supply.",
      D: "Four hundred volts is available line-to-line, but this answer omits the 230 V line-to-neutral voltage provided by the star point.",
    },
    [IEC_ELECTROPEDIA, NATIONAL_GRID_NETWORK],
  ),
  reviewed(
    "quiz-29762",
    22,
    {
      A: "Coal is a finite fossil fuel and is not replenished on the timescale on which electricity generation consumes it.",
      B: "Nuclear generation is low carbon but uses finite fuel, so it is not normally classified as renewable energy.",
      C: "Oil is a finite fossil fuel rather than an energy flow renewed naturally on a human timescale.",
    },
    [GOV_UK_RENEWABLES, US_EIA_NATURAL_GAS],
  ),
  reviewed(
    "quiz-29762",
    23,
    {
      A: "Iz is the actual current-carrying capacity after applicable conditions are considered; the selection floor here is set by In.",
      B: "The load current Ib must not exceed the device rating, but using Ib alone could select a conductor below the protective-device rating.",
      C: "Design current is represented by Ib and establishes load demand, while overload coordination also requires conductor capacity at least In.",
    },
    [IET_APPENDIX_FOUR, IET_CURRENT_EDITION],
  ),
  reviewed(
    "quiz-29762",
    24,
    {
      A: "Ib denotes the circuit design current calculated from the load, not the table value before rating factors are applied.",
      B: "In denotes the rated current or current setting of the protective device rather than the conductor's tabulated capacity.",
      D: "Iz is the conductor's effective current-carrying capacity under its installed conditions; It is the value read from the tables.",
    },
    [IET_APPENDIX_FOUR, IET_CURRENT_EDITION],
  ),
  reviewed(
    "quiz-29762",
    25,
    {
      B: "A result of 12.54 A does not follow from 6 ÷ (0.94 × 0.6), which gives approximately 10.64 A.",
      C: "Multiplying 6 A by both derating factors gives about 3.38 A, but selection requires division to compensate for derating.",
      D: "A 9.66 A value understates the required tabulated capacity and is not produced by the stated correction-factor formula.",
    },
    [IET_APPENDIX_FOUR, BIPM_SI],
  ),
  reviewed(
    "quiz-29762",
    26,
    {
      A: "Reference Method 100 describes a specified thermally insulated ceiling arrangement rather than a cable clipped to a surface.",
      B: "Reference Method A concerns cable in conduit within a thermally insulated wall and is not a clipped-direct installation.",
      D: "Reference Method E applies to multicore cable in free air or on perforated support, not cable clipped direct to a surface.",
    },
    [IET_APPENDIX_FOUR, IET_CURRENT_EDITION],
  ),
  reviewed(
    "quiz-29762",
    27,
    {
      A: "An electrode reading above 200 Ω is not automatically satisfactory; IET guidance warns that such resistance may be unstable.",
      B: "The theoretical 50/IΔn limit for a 30 mA RCD is much higher, but that calculation does not remove the stability concern.",
      D: "The distributor's typical 21 Ω external value for a TT supply is separate from the consumer electrode resistance being measured.",
    },
    [IET_ZE_GUIDANCE, IET_BONDING_FAQ],
  ),
  reviewed(
    "quiz-29762",
    28,
    {
      A: "A 0.34 Ω result is not the difference Zs − Ze; subtracting 0.35 Ω from 0.95 Ω gives 0.60 Ω.",
      C: "Adding Zs and Ze gives 1.30 Ω, but Zs already includes Ze, so the circuit resistance must be found by subtraction.",
      D: "A 2.71 Ω value does not follow from Zs = Ze + (R1 + R2) and greatly exceeds the measured loop impedance.",
    },
    [IET_ZE_GUIDANCE, BIPM_SI],
  ),
  reviewed(
    "quiz-29762",
    29,
    {
      A: "A factor of 0.075 would derate a cable to only 7.5 percent and is not the standard BS 3036 correction factor.",
      B: "A factor of 0.255 is far below the recognised 0.725 value applied when a BS 3036 fuse provides overload protection.",
      D: "The similar-looking 0.755 value is not the Appendix 4 correction factor specified for a semi-enclosed BS 3036 fuse.",
    },
    [IET_APPENDIX_FOUR],
  ),
  reviewed(
    "quiz-29762",
    30,
    {
      A: "Ten square millimetres is below the Table 54.7 half-size requirement for a 50 mm² copper line conductor.",
      C: "A 50 mm² CPC would be permissible but is larger than the minimum 25 mm² size requested by the table.",
      D: "Six square millimetres is much smaller than the minimum protective-conductor size derived for a 50 mm² line conductor.",
    },
    [IET_PROTECTIVE_BONDING, IET_CURRENT_EDITION],
  ),
  reviewed(
    "quiz-29763",
    1,
    {
      A: "Forty amperes is below 32 ÷ (0.71 × 0.75), so it would not provide the tabulated capacity required after both derating factors.",
      B: "Fifty amperes remains below the calculated requirement of approximately 60.1 A and cannot be used before selecting a standard cable size.",
      D: "Seventy amperes exceeds the calculated minimum; it might influence the next cable choice but is not the requested calculated It value.",
    },
    [IET_APPENDIX_FOUR, BIPM_SI],
  ),
  reviewed(
    "quiz-29763",
    2,
    {
      A: "Ten square millimetres is smaller than the same-material protective-conductor value selected for a 16 mm² line conductor in Table 54.7.",
      C: "Twenty-five square millimetres would exceed the 16 mm² line-conductor size and is not the minimum tabulated choice.",
      D: "Six square millimetres is below the Table 54.7 value for a circuit whose line conductor is 16 mm².",
    },
    [IET_PROTECTIVE_BONDING, IET_CURRENT_EDITION],
  ),
  reviewed(
    "quiz-29763",
    3,
    {
      A: "Multiplying Ib by a derating factor reduces the result, whereas the tabulated cable capacity must compensate for adverse conditions.",
      B: "Ib is the design current, but overload-protected conductor selection is based on the protective-device rating In divided by the factors.",
      D: "Multiplying the unknown It by a factor does not state the formula for calculating It from the protective-device rating.",
    },
    [IET_APPENDIX_FOUR, IET_CURRENT_EDITION],
  ),
  reviewed(
    "quiz-29763",
    4,
    {
      A: "Ib is the circuit design current required by the load and is not the capacity of the selected conductor.",
      B: "In is the protective device's rated current or setting rather than the installed conductor's current-carrying capacity.",
      C: "It is the tabulated cable capacity before correction factors, while Iz denotes capacity for the actual installed conditions.",
    },
    [IET_APPENDIX_FOUR, IET_CURRENT_EDITION],
  ),
  reviewed(
    "quiz-29763",
    5,
    {
      A: "One metre is outside the normal 600 mm bonding zone and may place the connection after branch pipework.",
      B: "One hundred millimetres is unnecessarily restrictive and is not the stated maximum distance from the meter outlet.",
      D: "Sixty millimetres is not the BS 7671/IET siting distance used for the main bonding connection at an internal gas meter.",
    },
    [IET_BONDING_FAQ, IET_PROTECTIVE_BONDING],
  ),
  reviewed(
    "quiz-29763",
    6,
    {
      A: "A circuit protective conductor connects exposed-conductive-parts of a circuit, not an incoming service extraneous-conductive-part to the MET.",
      B: "The main earthing conductor connects the MET to the means of earthing; it is not the bonding connection to a service pipe.",
      D: "Supplementary bonding is local and links simultaneously accessible parts; it is not the main service bonding conductor.",
    },
    [IET_BONDING_FAQ, IET_PROTECTIVE_BONDING],
  ),
  reviewed(
    "quiz-29763",
    7,
    {
      A: "One volt is not the reference potential assigned to the general mass of Earth in installation calculations.",
      B: "Two hundred and thirty volts is a nominal line-to-neutral supply voltage, not Earth reference potential.",
      C: "Four hundred volts is a nominal three-phase line voltage and is unrelated to the assumed potential of the general mass of Earth.",
    },
    [IEC_ELECTROPEDIA, IET_BONDING_FAQ],
  ),
  reviewed(
    "quiz-29763",
    8,
    {
      B: "Class II equipment uses double or reinforced insulation and does not rely on exposed metalwork connected to protective earth.",
      C: "Class V is not a recognised IEC equipment class for exposed conductive metalwork protected by earthing.",
      D: "Class Z is not the classification for equipment whose accessible metal enclosure is connected to a protective conductor.",
    },
    [IET_BASIC_AND_FAULT_PROTECTION, IEC_ELECTROPEDIA],
  ),
  reviewed(
    "quiz-29763",
    9,
    {
      A: "A copper water pipe is normally an extraneous-conductive-part when it can introduce Earth potential, not exposed equipment metalwork.",
      C: "A stainless-steel sink is not inherently an exposed-conductive-part because it is not normally part of electrical equipment.",
      D: "A steel gas pipe is a service extraneous-conductive-part, not conductive equipment casing that can become live after insulation failure.",
    },
    [IET_BONDING_FAQ, IET_PROTECTIVE_BONDING],
  ),
  reviewed(
    "quiz-29763",
    10,
    {
      A: "A 100 Ω result corresponds to 50 V divided by 500 mA, not the 100 mA RCD in this calculation.",
      B: "About 1667 Ω is the theoretical value for a 30 mA RCD, five times the value for a 100 mA device.",
      C: "About 167 Ω corresponds to 50 V divided by 300 mA and does not use the stated 100 mA residual current.",
    },
    [IET_RCD_TESTING, IET_BONDING_FAQ],
  ),
  reviewed(
    "quiz-29763",
    11,
    {
      A: "A reading above 200 Ω is not always satisfactory merely because a 30 mA RCD has a much higher theoretical RA limit.",
      B: "RCD ratings produce different theoretical RA limits, so 200 Ω is not a shared maximum Zs for 30 and 100 mA devices.",
      D: "An electrode resistance above 200 Ω does not demonstrate a 500 mA operating current and instead raises a stability concern.",
    },
    [IET_ZE_GUIDANCE, IET_BONDING_FAQ],
  ),
  reviewed(
    "quiz-29763",
    12,
    {
      B: "A fan heater is electrical equipment; any accessible metal casing is an exposed-conductive-part rather than an extraneous part.",
      C: "A metal-clad socket enclosure belongs to electrical equipment and is exposed conductive metal, not a part introducing Earth potential.",
      D: "A washing-machine chassis is exposed equipment metalwork that may become live on a fault, not an extraneous-conductive-part.",
    },
    [IET_BONDING_FAQ, IET_PROTECTIVE_BONDING],
  ),
  reviewed(
    "quiz-29763",
    13,
    {
      A: "Connecting exposed equipment metalwork into the earthing system describes protective earthing, not the broader act of bonding parts together.",
      B: "A connection to the general mass of Earth is earthing through an electrode or other means, not bonding between conductive parts.",
      C: "Connecting exposed-conductive-parts to the MET is protective earthing; bonding specifically creates equipotential links between parts.",
    },
    [IET_BONDING_FAQ, IET_PROTECTIVE_BONDING],
  ),
  reviewed(
    "quiz-29763",
    14,
    {
      A: "Danger - do not remove omits the standard label's identification of the connection as a safety electrical connection.",
      B: "Electrical safety connection reverses the specified word order and is not the exact BS 951 warning requested.",
      D: "Warning - electrical safety connection is descriptive but does not reproduce the standard clamp wording and removal instruction.",
    },
    [IET_PROTECTIVE_BONDING, IET_BONDING_FAQ],
  ),
  reviewed(
    "quiz-29763",
    15,
    {
      A: "Automatic disconnection of supply acts after a fault makes exposed metalwork dangerous, so it is a fault-protection measure.",
      B: "Earthing and bonding limit dangerous touch voltages during faults; they do not prevent contact with live parts in normal service.",
      C: "Fuses and circuit-breakers interrupt overcurrent and support fault protection, but they do not themselves enclose normally live parts.",
    },
    [IET_BASIC_AND_FAULT_PROTECTION],
  ),
  reviewed(
    "quiz-29763",
    16,
    {
      B: "About 1667 Ω is obtained with a 30 mA RCD, not the stated 500 mA residual operating current.",
      C: "About 167 Ω is the result for a 300 mA RCD and is not 50 V divided by 0.5 A.",
      D: "Five hundred ohms corresponds to a 100 mA RCD, whereas 500 mA permits only a 100 Ω theoretical electrode resistance.",
    },
    [IET_RCD_TESTING, IET_BONDING_FAQ],
  ),
  reviewed(
    "quiz-29763",
    17,
    {
      B: "A 16 mm² CPC would be larger than the 10 mm² minimum and is not the minimum requested by Table 54.7.",
      C: "Twenty-five square millimetres substantially exceeds the line-conductor size and is not a minimum CPC selection.",
      D: "Six square millimetres is below the Table 54.7 requirement for a same-material 10 mm² line conductor.",
    },
    [IET_PROTECTIVE_BONDING, IET_CURRENT_EDITION],
  ),
  reviewed(
    "quiz-29763",
    18,
    {
      A: "A circuit protective conductor connects exposed metalwork to the earthing system but is not the named local bonding link between both kinds of part.",
      B: "Main earth is not the term for the local conductor linking simultaneously accessible exposed and extraneous conductive parts.",
      C: "Main equipotential bonding connects service extraneous-conductive-parts at the origin, not the local supplementary link described.",
    },
    [IET_BONDING_FAQ, IET_PROTECTIVE_BONDING],
  ),
  reviewed(
    "quiz-29763",
    19,
    {
      A: "A typical 0.35 Ω maximum is used for public TN-C-S supplies, not the higher figure associated with TN-S.",
      C: "Ten ohms is far above the typical TN-S external loop impedance used for design where distributor data is unavailable.",
      D: "Twenty-one ohms is the historical typical distributor-side value associated with a TT supply, not public TN-S.",
    },
    [IET_ZE_GUIDANCE],
  ),
  reviewed(
    "quiz-29763",
    20,
    {
      A: "A mechanically protected supplementary bonding conductor need not be as large as 1.5 mm² under the applicable minimum rule.",
      B: "Ten square millimetres is far larger than the stated minimum and is commonly associated with main bonding in other circumstances.",
      D: "Four square millimetres is the minimum where supplementary bonding lacks mechanical protection, not where protection is provided.",
    },
    [IET_PROTECTIVE_BONDING, IET_CURRENT_EDITION],
  ),
  reviewed(
    "quiz-29763",
    21,
    {
      A: "A TN-C system has a metallic PEN return path, so fault current is not normally limited by a consumer earth electrode.",
      B: "TN-C-S provides a distributor metallic return through the PEN conductor and usually permits overcurrent-device fault protection.",
      C: "TN-S has a separate metallic protective-conductor return to the source and does not normally rely on a local electrode path.",
    },
    [IET_BONDING_FAQ, IET_RCD_TESTING],
  ),
  reviewed(
    "quiz-29763",
    22,
    {
      A: "Central point is a generic description and not the recognised name for the common junction of star-connected transformer windings.",
      B: "EN point is not the standard winding-connection term for the junction from which earth and neutral are established.",
      C: "Earthing point describes a function, but the transformer winding junction itself is specifically called the star point.",
    },
    [IEC_ELECTROPEDIA, NATIONAL_GRID_NETWORK],
  ),
  reviewed(
    "quiz-29763",
    23,
    {
      A: "A circuit protective conductor serves exposed-conductive-parts in a circuit, not incoming services and structural extraneous parts.",
      B: "The main earthing conductor connects the MET to the means of earthing rather than bonding service metalwork to the MET.",
      D: "Supplementary bonding is a local connection between simultaneously accessible parts, not the main link for services and structure.",
    },
    [IET_BONDING_FAQ, IET_PROTECTIVE_BONDING],
  ),
  reviewed(
    "quiz-29763",
    24,
    {
      B: "Magnetic overload operation is a circuit-breaker principle and does not detect the difference between line and neutral currents.",
      C: "Thermal overload operation responds to sustained current magnitude, not residual imbalance between live conductors.",
      D: "An ordinary current-operated RCD compares currents, whereas voltage-operated earth-leakage devices use a different obsolete principle.",
    },
    [IET_RCD_TESTING, IEC_ELECTROPEDIA],
  ),
  reviewed(
    "quiz-29763",
    25,
    {
      A: "Connecting exposed metalwork to the earthing system is protective earthing rather than the general definition of bonding.",
      B: "Connecting an installation to the general mass of Earth establishes earthing, not equipotential bonding between conductive parts.",
      C: "Linking exposed parts to the MET is part of protective earthing; bonding links exposed or extraneous parts to reduce potential difference.",
    },
    [IET_BONDING_FAQ, IET_PROTECTIVE_BONDING],
  ),
  reviewed(
    "quiz-29763",
    26,
    {
      A: "Class I equipment relies on basic insulation plus a protective-earth connection to accessible conductive metalwork.",
      C: "Class V is not an IEC equipment-protection class and does not denote double or reinforced insulation.",
      D: "Class Z is not the recognised classification for electrical equipment protected by double insulation.",
    },
    [IET_BASIC_AND_FAULT_PROTECTION, IEC_ELECTROPEDIA],
  ),
  reviewed(
    "quiz-29763",
    27,
    {
      B: "Connecting every metal item directly to Earth is neither required nor the definition of protective earthing in an installation.",
      C: "Connecting extraneous-conductive-parts to the MET describes main protective bonding rather than earthing exposed equipment metalwork.",
      D: "Bonding parts together without a connection to the earthing system does not establish the protective earthing path required for ADS.",
    },
    [IET_BONDING_FAQ, IET_BASIC_AND_FAULT_PROTECTION],
  ),
  reviewed(
    "quiz-29764",
    1,
    {
      B: "Class II equipment uses double or reinforced insulation and does not depend on exposed metalwork connected to protective earth.",
      C: "Class V is not a recognised IEC protection class for equipment with accessible conductive parts that are earthed.",
      D: "Class Z is not the classification applied to exposed metal equipment protected through a circuit protective conductor.",
    },
    [IET_BASIC_AND_FAULT_PROTECTION, IEC_ELECTROPEDIA],
  ),
  reviewed(
    "quiz-29764",
    2,
    {
      B: "Electrical separation is a distinct protective measure and does not use earthing plus automatic operation of a protective device.",
      C: "Placing live conductors out of reach is an obstacle or distance measure for basic protection, not ADS fault protection.",
      D: "Class II equipment relies on double or reinforced insulation and does not use earthing and automatic disconnection as its measure.",
    },
    [IET_BASIC_AND_FAULT_PROTECTION, IET_DISCONNECTION],
  ),
  reviewed(
    "quiz-29764",
    3,
    {
      B: "The main earthing conductor connects the main earthing terminal to the means of earthing, not each circuit's exposed metalwork.",
      C: "A main protective bonding conductor connects service extraneous-conductive-parts to the MET rather than equipment exposed parts.",
      D: "A supplementary bonding conductor locally links accessible conductive parts and is not the protective conductor run with a circuit.",
    },
    [IET_BONDING_FAQ, IET_PROTECTIVE_BONDING],
  ),
  reviewed(
    "quiz-29764",
    4,
    {
      A: "A copper water pipe is normally an extraneous-conductive-part because it may introduce Earth potential, not exposed equipment metalwork.",
      C: "A stainless-steel sink is not inherently part of electrical equipment and therefore is not normally an exposed-conductive-part.",
      D: "A steel gas pipe is a service extraneous-conductive-part rather than conductive casing that can become live through equipment insulation failure.",
    },
    [IET_BONDING_FAQ, IET_PROTECTIVE_BONDING],
  ),
  reviewed(
    "quiz-29764",
    5,
    {
      A: "A circuit protective conductor connects exposed equipment parts within a circuit and is not the main bond for a service pipe.",
      B: "The main earthing conductor joins the MET to the means of earthing rather than to an extraneous service part.",
      D: "Supplementary bonding is a local connection between accessible parts and is not the main protective bond at the service entry.",
    },
    [IET_BONDING_FAQ, IET_PROTECTIVE_BONDING],
  ),
  reviewed(
    "quiz-29764",
    6,
    {
      A: "One volt is not the conventional reference potential assigned to the general mass of Earth for electrical calculations.",
      B: "Two hundred and thirty volts is the nominal line-to-neutral supply voltage, not the reference potential of Earth.",
      C: "Four hundred volts is a nominal line-to-line system voltage and has no role as the defined potential of general Earth.",
    },
    [IEC_ELECTROPEDIA, IET_BONDING_FAQ],
  ),
  reviewed(
    "quiz-29764",
    7,
    {
      A: "A 0.2 s time is the TT final-circuit value in specified cases and is not the TN limit for this 40 A fixed circuit.",
      B: "A 0.5 s value is not the BS 7671 maximum disconnection time assigned to this TN fixed-equipment circuit.",
      C: "One second is the general TT distribution-circuit maximum, whereas this question specifies a TN system.",
    },
    [IET_DISCONNECTION, IET_CURRENT_EDITION],
  ),
  reviewed(
    "quiz-29764",
    8,
    {
      A: "Earth leakage is current escaping the intended live-conductor path and is not caused simply by excessive legitimate appliance load.",
      C: "A short circuit is an unintended low-impedance connection; several intact appliances instead create excessive normal load current.",
      D: "A transient is a brief voltage or current disturbance, not the sustained excessive current drawn by too many appliances.",
    },
    [IET_BASIC_AND_FAULT_PROTECTION, HSE_CONSTRUCTION],
  ),
  reviewed(
    "quiz-29764",
    9,
    {
      A: "Twenty amperes results from dividing by 1.25, but fusing current is rated current multiplied by fusing factor.",
      B: "A 23.75 A result is below the device rating and cannot be the higher current at which the fuse is specified to operate.",
      C: "A 26.25 A result adds 1.25 A instead of multiplying 25 A by the dimensionless factor 1.25.",
    },
    [IET_FUSES, BIPM_SI],
  ),
  reviewed(
    "quiz-29764",
    10,
    {
      A: "The 1.13 In value is the conventional non-tripping current I1, not the conventional tripping current I2 requested.",
      B: "Two times rated current is above the standard conventional tripping-current multiple for a BS EN 60898 circuit-breaker.",
      D: "The 1.6 In figure is associated with the conventional fusing current of a BS 88 fuse, not a BS EN 60898 breaker.",
    },
    [IET_APPENDIX_FOUR, IET_FUSES],
  ),
  reviewed(
    "quiz-29764",
    11,
    {
      A: "A 0.2 s maximum applies to specified TT final circuits, not to the distribution circuit identified in the prompt.",
      B: "A 0.5 s value is not the general BS 7671 maximum disconnection time for a TT distribution circuit.",
      C: "A 0.4 s value is associated with specified TN final circuits and is not the TT distribution-circuit requirement.",
    },
    [IET_DISCONNECTION, IET_CURRENT_EDITION],
  ),
  reviewed(
    "quiz-29764",
    12,
    {
      A: "Two hundred milliseconds is a tripping time, but the expected result at only half rated residual current is no operation.",
      B: "Three hundred and fifty milliseconds is not an acceptance time for a 0.5 IΔn diagnostic because the RCBO should remain closed.",
      C: "Forty milliseconds relates to former high-multiple additional-protection testing, not the no-trip expectation at half current.",
    },
    [IET_RCD_TESTING],
  ),
  reviewed(
    "quiz-29764",
    13,
    {
      B: "BS 3036 covers semi-enclosed rewirable fuses and not the compact cartridge fuse fitted inside a UK plug.",
      C: "BS 88 covers high-performance cartridge fuse links for installations and equipment, not the plug-fuse format described.",
      D: "BS EN 60898 is a circuit-breaker standard and does not specify a replaceable cartridge fuse.",
    },
    [IET_FUSES],
  ),
  reviewed(
    "quiz-29764",
    14,
    {
      B: "Magnetism is used in the summation transformer, but the operating criterion is residual current imbalance rather than magnetism alone.",
      C: "A thermal element responds to sustained current magnitude and cannot provide the residual current comparison that defines an RCD.",
      D: "Thermal-magnetic operation describes an overcurrent circuit-breaker, not a device comparing outgoing and returning current.",
    },
    [IET_RCD_TESTING, IEC_ELECTROPEDIA],
  ),
  reviewed(
    "quiz-29764",
    15,
    {
      B: "A 125 A rating multiplied by 1.8 gives 225 A, so it is inconsistent with the stated 180 A fusing current.",
      C: "A 200 A rating would produce a 360 A fusing current at a factor of 1.8, twice the stated value.",
      D: "An 80 A rating multiplied by 1.8 gives 144 A and therefore does not match the supplied fusing current.",
    },
    [IET_FUSES, BIPM_SI],
  ),
  reviewed(
    "quiz-29764",
    16,
    {
      A: "A factor of 0.5 reverses the required ratio by dividing rating by fusing current instead of 20 A by 10 A.",
      B: "A 1.25 factor would give a fusing current of 12.5 A, not the stated 20 A for a 10 A device.",
      C: "A 1.5 factor would give a fusing current of 15 A and does not reproduce the values in the prompt.",
    },
    [IET_FUSES, BIPM_SI],
  ),
  reviewed(
    "quiz-29764",
    17,
    {
      A: "Two hundred milliseconds is below the general product-standard maximum at IΔn but is not the maximum value requested.",
      C: "Three hundred and fifty milliseconds exceeds the 300 ms maximum operating time for a general non-delay RCBO at IΔn.",
      D: "Forty milliseconds is associated with former five-times-current testing for additional protection, not the x1 IΔn maximum.",
    },
    [IET_RCD_TESTING],
  ),
  reviewed(
    "quiz-29764",
    18,
    {
      A: "Twenty amperes is below the 32 A device rating and cannot be its fusing current when the factor is greater than one.",
      B: "Forty amperes would represent a factor of 1.25, not the stated fusing factor of 1.5.",
      D: "Fifty-two amperes does not equal 32 A multiplied by 1.5 and overstates the calculated fusing current.",
    },
    [IET_FUSES, BIPM_SI],
  ),
  reviewed(
    "quiz-29764",
    19,
    {
      A: "A 0.2 s value applies to specified TT final circuits and is not the TN final-circuit value requested.",
      C: "Half a second is not the maximum specified for a 16 A TN final circuit supplying fixed connected equipment.",
      D: "Five seconds is allowed for relevant TN distribution and larger fixed circuits, but not this final circuit at 16 A.",
    },
    [IET_DISCONNECTION, IET_CURRENT_EDITION],
  ),
  reviewed(
    "quiz-29764",
    20,
    {
      A: "Earth bond is not the defined name for a conductive part placed in the ground to make electrical contact with Earth.",
      B: "Earth connection is a generic description and does not identify the rod itself as a component of the TT earthing arrangement.",
      C: "An earth terminal is a connection point for conductors, not the buried rod that interfaces electrically with the ground.",
    },
    [IET_BONDING_FAQ, IEC_ELECTROPEDIA],
  ),
  reviewed(
    "quiz-29764",
    21,
    {
      A: "A factor of 1.25 would produce 31.25 A from a 25 A device, which is below the stated 32.5 A.",
      C: "A factor of 1.5 would produce 37.5 A and therefore overstates the given fusing current.",
      D: "A factor of 1.75 would produce 43.75 A, not 32.5 A, when applied to the 25 A rating.",
    },
    [IET_FUSES, BIPM_SI],
  ),
  reviewed(
    "quiz-29764",
    22,
    {
      A: "An unintended line-to-earth connection is a fault path with low impedance and is a form of short circuit.",
      B: "Insulation breakdown producing a low-impedance line-to-neutral path is directly a short-circuit fault.",
      D: "Metal cutters bridging line and neutral create an unintended very low-impedance connection and therefore a short circuit.",
    },
    [IET_BASIC_AND_FAULT_PROTECTION, IEC_ELECTROPEDIA],
  ),
  reviewed(
    "quiz-29764",
    23,
    {
      A: "A cast-iron drain is not normally electrical equipment and would be considered for extraneous conductivity instead.",
      B: "A copper water pipe may introduce Earth potential and is normally an extraneous-conductive-part, not exposed equipment metalwork.",
      D: "A stainless-steel sink is not inherently part of electrical equipment and is therefore not normally an exposed-conductive-part.",
    },
    [IET_BONDING_FAQ, IET_PROTECTIVE_BONDING],
  ),
  reviewed(
    "quiz-29764",
    24,
    {
      A: "BS 1361 was withdrawn and is not the current standard family for the common HRC installation fuse links described.",
      B: "BS 3036 specifies semi-enclosed rewirable fuses, which are neither cartridge links nor high-rupturing-capacity devices.",
      D: "BS EN 60898 specifies household and similar circuit-breakers rather than replaceable HRC cartridge fuse links.",
    },
    [IET_FUSES, IET_CURRENT_EDITION],
  ),
  reviewed(
    "quiz-29764",
    25,
    {
      A: "Cartridge type is too broad because ordinary plug cartridges do not provide the high breaking capacity and discrimination described.",
      C: "A suitable fuse design is listed, so saying none ignores the time-current and breaking-capacity benefits of HRC/HBC links.",
      D: "A semi-enclosed rewirable fuse has poorer consistency and breaking capacity and is less suited to high starting currents.",
    },
    [IET_FUSES, IET_APPENDIX_FOUR],
  ),
  reviewed(
    "quiz-29764",
    26,
    {
      A: "Blue is not the traditional colour coding used to identify a 30 A BS 3036 fuse carrier or element.",
      B: "Green is associated with protective conductors and is not the identification colour for the 30 A rewirable fuse.",
      D: "Yellow is not the recognised 30 A BS 3036 fuse colour; the established identification for that rating is red.",
    },
    [IET_FUSES, IET_CURRENT_EDITION],
  ),
  reviewed(
    "quiz-29764",
    27,
    {
      B: "A 0.4 s limit is the corresponding TN value for specified final circuits, not the shorter TT requirement.",
      C: "Ten seconds is far longer than the permitted disconnection time for socket-supplied portable equipment on a TT system.",
      D: "Five seconds applies to certain distribution or larger fixed circuits and is not permitted for this TT socket-outlet supply.",
    },
    [IET_DISCONNECTION, IET_CURRENT_EDITION],
  ),
  reviewed(
    "quiz-29764",
    28,
    {
      B: "An RCBO can have substantial current ratings, but high current alone does not define its combined protective functions.",
      C: "Special earth fault device omits the integral overcurrent circuit-breaker function and is not the recognised expansion of RCBO.",
      D: "A time-delayed circuit-breaker lacks the defining residual-current protection and is not what the abbreviation RCBO denotes.",
    },
    [IET_RCD_TESTING, IET_BASIC_AND_FAULT_PROTECTION],
  ),
  reviewed(
    "quiz-29764",
    29,
    {
      A: "Adding amperes produces a current, not the dimensionless ratio required for a fusing factor.",
      B: "Multiplying two currents produces units of amperes squared and cannot define a dimensionless operating factor.",
      C: "Subtracting currents gives an ampere difference and does not express how many times rated current causes operation.",
    },
    [IET_FUSES, BIPM_SI],
  ),
  reviewed(
    "quiz-29764",
    30,
    {
      A: "A 0.2 s maximum is used for specified TT final circuits, whereas the question identifies a TN supply.",
      C: "Ten seconds is far beyond the permitted maximum for portable equipment supplied by a TN socket-outlet final circuit.",
      D: "Five seconds is associated with relevant distribution or larger fixed circuits, not portable equipment on this TN final circuit.",
    },
    [IET_DISCONNECTION, IET_CURRENT_EDITION],
  ),
];
