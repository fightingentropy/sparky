import inspectionDesign2396Data from "../exam-data/inspection-design-2396.json";
import { applyExamExplanationEnhancements } from "../examExplanationEnhancements";
import type { Exam, ExamChoice } from "../exams/types";

const IET_CURRENT_EDITION =
  "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/ensure-you-are-up-to-date-with-bs-7671/";
const BSI_BS_7671 =
  "https://knowledge.bsigroup.com/products/requirements-for-electrical-installations-iet-wiring-regulations-3";
const IET_ON_SITE_GUIDE =
  "https://shop.theiet.org/on-site-guide-bs-7671-2018-a4-2026-9th-edition";
const IET_RCD_TESTING =
  "https://electrical.theiet.org/wiring-matters/years/2022/91-july-2022/changes-to-rcd-testing-in-bs-76712018plusa22022/";
const IET_EARTHING_AND_BONDING =
  "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/earthing-and-bonding-faqs/";
const IET_BASIC_AND_FAULT_PROTECTION =
  "https://electrical.theiet.org/wiring-matters/years/2019/75-may-2019/mythbusters-4-double-insulated-cables/";
const IET_FUSES =
  "https://electrical.theiet.org/wiring-matters/years/2024/103-november-2024/how-does-the-installation-of-microgeneration-affect-the-rated-current-of-a-consumer-unit/";
const IET_BATHROOMS =
  "https://electrical.theiet.org/wiring-matters/years/2019/77-september-2019/bs-76712018-frequently-asked-questions/";
const IET_FIRE_STOPPING =
  "https://electrical.theiet.org/wiring-matters/years/2019/78-november-2019/fire-stopping/";
const IET_CONSTRUCTION =
  "https://electrical.theiet.org/wiring-matters/years/2024/99-march-2024/mythbuster-10-event-distribution-boards-with-socket-outlets-are-not-permitted-for-use-on-construction-sites/";
const IET_MODEL_FORMS =
  "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/model-forms/";
const IET_CONSUMER_UNITS =
  "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/consumer-units-and-protective-devices-faqs/";
const IET_CABLE_SUPPORTS =
  "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/cables-and-fire-protection-faqs/";
const EAWR = "https://www.legislation.gov.uk/uksi/1989/635/contents/made";
const HSWA = "https://www.legislation.gov.uk/ukpga/1974/37/contents";
const SAFETY_COMMITTEES =
  "https://www.legislation.gov.uk/uksi/1977/500/regulation/9/made";
const HSE_LAW_POSTER = "https://www.hse.gov.uk/pubns/books/lawposter.htm";
const HSE_ENFORCEMENT =
  "https://www.hse.gov.uk/enforce/our-role-as-regulator.htm";
const HSE_POLICY =
  "https://www.hse.gov.uk/simple-health-safety/policy/how-to-write-your-policy.htm";
const HSE_RISK_ASSESSMENT =
  "https://www.hse.gov.uk/simple-health-safety/risk/index.htm";
const HSE_GS38 = "https://www.hse.gov.uk/pubns/books/gs38.htm";
const HSE_HSG85 = "https://www.hse.gov.uk/pubns/priced/hsg85.pdf";
const HSE_CONSTRUCTION_ELECTRICITY =
  "https://www.hse.gov.uk/construction/safetytopics/systems.htm";
const HSE_PERMIT_TO_WORK =
  "https://www.hse.gov.uk/comah/sragtech/techmeaspermit.htm";
const GOV_WASTE_DUTY = "https://www.gov.uk/managing-your-waste-an-overview";
const GOV_CONSTRUCTION_PLAYBOOK =
  "https://www.gov.uk/government/publications/the-construction-playbook";
const GOV_EMERGENCY_LIGHTING =
  "https://www.gov.uk/government/publications/fire-safety-risk-assessment-offices-and-shops/fire-safety-risk-assessment-offices-and-shops-accessible";
const BSI_IP_CODE =
  "https://knowledge.bsigroup.com/products/degrees-of-protection-provided-by-enclosures-ip-code";
const PRYSMIAN_FP200 =
  "https://uk.prysmian.com/sites/uk.prysmian.com/files/media/documents/GB00_FP200GOLD.pdf";
const PRYSMIAN_INSUDITE = "https://uk.prysmian.com/media/news/insudite";
const NVENT_MI_TERMINATION =
  "https://www.nvent.com/en-us/pyrotenax/products/pyropak-termination-kit-0";
const NVENT_MI_TOOLS =
  "https://www.nvent.com/en-gb/pyrotenax/products/system-2200-mi-wiring-alloy-825-cable-0";
const NATIONAL_GRID_TRANSMISSION =
  "https://www.nationalgrid.com/electricity-transmission/who-we-are/running-our-network/substations-pylons-and-overhead-lines";
const BIPM_SI = "https://www.bipm.org/en/publications/si-brochure";

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

export const inspectionDesign2396Part2 = [
  reviewed(
    "quiz-29765",
    1,
    {
      A: "Redundant circuit device is not a recognised expansion of RCD and does not describe residual-current protection.",
      B: "Redundant current device incorrectly substitutes redundant for the defining word residual.",
      C: "Residual circuit device omits the word current, which identifies the imbalance monitored by an RCD.",
    },
    [IET_RCD_TESTING],
  ),
  reviewed(
    "quiz-29765",
    2,
    {
      A: "High blow capacity is not the established electrical expansion of HRC for this fuse type.",
      B: "High resistance construction describes neither the fuse's operating principle nor its fault-interrupting capability.",
      C: "High breaking capability is descriptive wording, but HRC conventionally expands to high rupturing capacity.",
    },
    [IET_FUSES],
  ),
  reviewed(
    "quiz-29765",
    3,
    {
      B: "A line conductor touching an earthed enclosure creates an earth-fault path rather than an overload caused by excessive load.",
      C: "Insulation failure connecting a live conductor to earth is the defining form of an earth fault.",
      D: "A damaged live conductor contacting earthed metal is an earth fault, not normal load current exceeding design current.",
    },
    [IET_BASIC_AND_FAULT_PROTECTION],
  ),
  reviewed(
    "quiz-29765",
    4,
    {
      B: "A metal socket back-box is associated with electrical equipment and is normally considered exposed metalwork, not an incoming earthy service.",
      C: "A metallic motor housing is an exposed-conductive-part of electrical equipment if it can become live under fault conditions.",
      D: "A steel consumer unit is electrical-equipment metalwork and is not an extraneous-conductive-part introducing Earth potential.",
    },
    [IET_EARTHING_AND_BONDING],
  ),
  reviewed(
    "quiz-29765",
    5,
    {
      B: "Hydraulic action is unrelated to the comparison of currents in the live conductors of an RCD-protected circuit.",
      C: "Magnetism is involved in operation, but magnetism alone does not state the residual-current balance principle.",
      D: "Thermal operation is characteristic of overload protection and is not the defining principle of an RCD.",
    },
    [IET_RCD_TESTING],
  ),
  reviewed(
    "quiz-29765",
    6,
    {
      A: "Layout drawings are prepared with drawing or design tools, whereas a tracer follows or identifies installed conductors.",
      C: "Current is measured with an ammeter or suitable test instrument, not a cable tracer.",
      D: "Voltage is measured with an approved voltage indicator or meter, not a tracer used to identify a cable route.",
    },
    [HSE_GS38],
  ),
  reviewed(
    "quiz-29765",
    7,
    {
      A: "A 10 A circuit is underrated for a heater drawing about 13 A and would not meet the stated load requirement.",
      C: "A fused spur from an existing ring is not the dedicated final circuit expressly required by the manufacturer.",
      D: "An unfused spur from an existing radial is neither the specified dedicated circuit nor a defined suitable arrangement here.",
    },
    [IET_ON_SITE_GUIDE, IET_CURRENT_EDITION],
  ),
  reviewed(
    "quiz-29765",
    8,
    {
      A: "The beginning of a run needs fire stopping only if it is itself a penetration of a fire-separating element.",
      B: "The end of a run is not automatically a fire-separating penetration requiring this treatment.",
      C: "Fire stopping is determined by compartment boundaries and penetrations, not by an arbitrary three-metre interval.",
    },
    [IET_FIRE_STOPPING],
  ),
  reviewed(
    "quiz-29765",
    9,
    {
      B: "Increasing the route length increases conductor resistance and voltage drop instead of reducing it.",
      C: "Reducing the load would alter the stated design requirement rather than improve the circuit while retaining that load.",
      D: "Reducing supply voltage does not reduce the cable's resistance and may increase current for a constant-power load.",
    },
    [IET_CURRENT_EDITION, IET_ON_SITE_GUIDE],
  ),
  reviewed(
    "quiz-29765",
    10,
    {
      B: "Completing on time is a desirable programme outcome, not the most serious direct safety consequence of poor coordination.",
      C: "Infrequent meetings may contribute to weak coordination, but it is not itself the resulting physical harm.",
      D: "Poor relationships affect teamwork, but accidents are the more serious direct safety consequence on site.",
    },
    [HSE_RISK_ASSESSMENT],
  ),
  reviewed(
    "quiz-29765",
    11,
    {
      A: "An absolute duty cannot be disregarded merely because compliance is inconvenient or costly.",
      C: "Whether a duty applies depends on the regulation and dutyholder; absolute does not mean employee-only.",
      D: "Absolute describes the standard of duty, not a rule that it can apply only to an employer.",
    },
    [EAWR],
  ),
  reviewed(
    "quiz-29765",
    12,
    {
      A: "Agricultural installations have particular requirements, but flammable petrol vapour is not their normal defining hazard.",
      B: "Caravan parks have special BS 7671 requirements, but petroleum hazardous-area guidance is not normally their basis.",
      C: "Construction sites have Section 704 requirements, but they are not inherently petroleum-vapour hazardous areas.",
    },
    [IET_CURRENT_EDITION, HSE_CONSTRUCTION_ELECTRICITY],
  ),
  reviewed(
    "quiz-29765",
    13,
    {
      B: "Contamination can impair electrical contact even when the crimp is mechanically tight, so looseness is not the primary result.",
      C: "Dirt and oxidation increase contact resistance rather than producing a low-resistance joint.",
      D: "A mechanical failure is possible with a bad crimp, but contamination most directly causes excessive contact resistance.",
    },
    [IET_CURRENT_EDITION],
  ),
  reviewed(
    "quiz-29765",
    14,
    {
      A: "TN-C uses a supply-provided combined protective and neutral conductor rather than relying on the installation's electrode return path.",
      B: "TN-C-S uses a supply PEN conductor before separation and does not use the general mass of Earth as its normal fault-return conductor.",
      C: "TN-S provides a separate metallic protective conductor from the source, unlike the local-electrode TT arrangement described.",
    },
    [IET_EARTHING_AND_BONDING],
  ),
  reviewed(
    "quiz-29765",
    15,
    {
      B: "73.66 W is about one hundredth of 230 V multiplied by 32 A.",
      C: "7360 kW is one thousand times larger than the 7.36 kW obtained from P = VI.",
      D: "736 W is only one tenth of the nominal power represented by 230 V at 32 A.",
    },
    [BIPM_SI],
  ),
  reviewed(
    "quiz-29765",
    16,
    {
      A: "Collecting metallic debris is not a control function required of a thermostat's internal magnet.",
      B: "The magnet intentionally influences contact movement rather than minimising every magnetic field.",
      C: "Preventing welded contacts depends on suitable contact and switching design; the magnet chiefly sharpens the switching action.",
    },
    [IET_CURRENT_EDITION],
  ),
  reviewed(
    "quiz-29765",
    17,
    {
      B: "Changing an ordinary socket to SELV is not the Section 701 rule for a socket already more than three metres from zone 1.",
      C: "Section 701 uses three metres horizontally from the boundary of zone 1, not a 4.6 metre distance from the bath or shower.",
      D: "Removal is unnecessary when the socket is outside the restricted distance and all other BS 7671 requirements are met.",
    },
    [IET_BATHROOMS],
  ),
  reviewed(
    "quiz-29765",
    18,
    {
      A: "Cable weight is a handling characteristic and is not coordinated with design current and protective-device rating.",
      C: "Cable length influences voltage drop and impedance, but it is not the rated current property compared in this check.",
      D: "Maximum temperature informs cable ratings, but the coordinated quantity after rating factors is current-carrying capacity.",
    },
    [IET_CURRENT_EDITION, IET_ON_SITE_GUIDE],
  ),
  reviewed(
    "quiz-29765",
    19,
    {
      A: "Planned labour-hours by activity are programme inputs used to resource and sequence the contract work.",
      B: "Proposed start and finish dates are core programme milestones rather than payroll-rate information.",
      D: "Labour required at project stages is resource-planning data used with the contract programme.",
    },
    [GOV_CONSTRUCTION_PLAYBOOK],
  ),
  reviewed(
    "quiz-29765",
    20,
    {
      A: "Cable bracket is a broad support description and not the standard name for a tested cable-restraint device.",
      B: "A general cable clamp may hold a cable, but cable cleats are purpose-designed and classified for restraint under fault forces.",
      D: "Cable ties organise or support light cables but are not the specified power-cable cleats used for short-circuit restraint.",
    },
    [IET_CABLE_SUPPORTS],
  ),
  reviewed(
    "quiz-29765",
    21,
    {
      A: "A chalk line marks a straight reference over a surface but does not directly verify that a run is vertical.",
      B: "A set square checks a right angle over a short distance and is unsuitable for confirming a vertical conduit run.",
      D: "A tape measure checks distance, not orientation relative to gravity as a spirit level does.",
    },
    [IET_ON_SITE_GUIDE],
  ),
  reviewed(
    "quiz-29765",
    22,
    {
      B: "Correct solvent cementing softens mating surfaces locally; excess is principally a bore obstruction rather than general PVC degradation.",
      C: "A correctly prepared solvent-weld joint is not made stronger by excess cement, but weakness is not the stated direct effect.",
      D: "Excess cement can collect inside the fitting; an unusually long setting time is not its principal installation hazard.",
    },
    [IET_ON_SITE_GUIDE],
  ),
  reviewed(
    "quiz-29765",
    23,
    {
      A: "Operating instructions explain use after completion, whereas an installation specification defines what is to be provided.",
      C: "The specification may identify equipment, but its purpose is broader than merely telling electricians which products to use.",
      D: "It records the client's requirements for the contractor and is not a note of an electrician's preferences to subcontractors.",
    },
    [GOV_CONSTRUCTION_PLAYBOOK],
  ),
  reviewed(
    "quiz-29765",
    24,
    {
      A: "A manager may allocate tasks, but the statutory duty attaches to the business or person controlling the waste, not only that manager.",
      B: "The client is not automatically the waste holder when another business produces or controls the packaging and offcuts.",
      C: "A principal contractor can have duties for waste it controls, but it is not exclusively responsible for every holder's waste.",
    },
    [GOV_WASTE_DUTY],
  ),
  reviewed(
    "quiz-29765",
    25,
    {
      A: "Brown identifies a line conductor in current harmonised colours and is not reserved for protective conductors.",
      B: "Green alone must not be used as the protective-conductor identification under the current colour scheme.",
      D: "Yellow alone is not the reserved protective-conductor combination and can be confused with other identification systems.",
    },
    [IET_CURRENT_EDITION],
  ),
  reviewed(
    "quiz-29765",
    26,
    {
      A: "Interconnector is a generic term and is not the common wiring name for the two changeover conductors.",
      C: "Strippers are tools for removing insulation, not conductors joining the corresponding two-way switch terminals.",
      D: "A switched live carries the controlled output to a lamp; the pair between two-way switches are called strappers.",
    },
    [IET_ON_SITE_GUIDE],
  ),
  reviewed(
    "quiz-29765",
    27,
    {
      A: "A suitable standard arrangement exists, so saying none would prevent control from both storeys without justification.",
      B: "One-way switching permits control from only one position and is unsuitable for both ends of a stair or landing route.",
      D: "An intermediate switch is needed for three or more control positions, not the usual two positions in a two-storey house.",
    },
    [IET_ON_SITE_GUIDE],
  ),
  reviewed(
    "quiz-29765",
    28,
    {
      B: "Magnetic effects operate the mechanism, but an RCD responds to the imbalance between live-conductor currents.",
      C: "Thermal action protects against sustained overcurrent and is not the operating principle of residual-current detection.",
      D: "Thermal-magnetic operation describes common overcurrent circuit-breakers, not the residual-current function itself.",
    },
    [IET_RCD_TESTING],
  ),
  reviewed(
    "quiz-29765",
    29,
    {
      B: "1667 ohms corresponds to 50 V divided by 30 mA, not by the stated 500 mA residual current.",
      C: "167 ohms is approximately the result for 300 mA and does not satisfy the stated 500 mA calculation.",
      D: "500 ohms would give 250 V at 0.5 A, exceeding the conventional 50 V relationship by a factor of five.",
    },
    [IET_EARTHING_AND_BONDING, IET_RCD_TESTING],
  ),
  reviewed(
    "quiz-29765",
    30,
    {
      A: "For a given transmitted power, raising voltage reduces rather than increases the line current.",
      B: "Transformers can change AC voltage, but ease of transformation is not the primary reason for high transmission voltage.",
      C: "High voltage reduces current and therefore reduces conductor voltage drop rather than deliberately increasing it.",
    },
    [NATIONAL_GRID_TRANSMISSION],
  ),
  reviewed(
    "quiz-29766",
    1,
    {
      A: "The standard may be needed by those applying it, but no rule makes possession of the book compulsory for every company.",
      C: "BS 7671 is not an Act or statutory instrument, although law or contracts can use it as evidence of good practice.",
      D: "Its scope and contractual or legal relevance must be considered; it is not automatically mandatory for every electrical task.",
    },
    [IET_CURRENT_EDITION, BSI_BS_7671],
  ),
  reviewed(
    "quiz-29766",
    2,
    {
      A: "A cost-balancing qualification describes a reasonably-practicable duty, not an absolute legal requirement.",
      B: "An absolute duty remains a requirement and cannot simply be disregarded.",
      D: "The presence of an absolute duty is the opposite of there being no requirement at all.",
    },
    [EAWR],
  ),
  reviewed(
    "quiz-29766",
    3,
    {
      A: "BS 7671 is a British Standard rather than legislation enacted by Parliament.",
      B: "The standard is non-statutory in itself, even though compliance may help demonstrate satisfaction of statutory duties.",
      D: "Manufacturer data applies to particular products, whereas BS 7671 specifies requirements for electrical installations.",
    },
    [IET_CURRENT_EDITION, BSI_BS_7671],
  ),
  reviewed(
    "quiz-29766",
    4,
    {
      B: "Connections are dealt with by Regulation 10, not Regulation 16.",
      C: "Working space, access and lighting are addressed by Regulation 15 rather than Regulation 16.",
      D: "Work on or near live conductors is controlled by Regulation 14, not the competence provision in Regulation 16.",
    },
    [EAWR],
  ),
  reviewed(
    "quiz-29766",
    5,
    {
      A: "A complete set of British Standards is neither a single practical companion nor limited to common BS 7671 work.",
      B: "A general electrical textbook is not the IET's formally aligned practical companion to the Wiring Regulations.",
      C: "NICEIC material may provide useful guidance, but it is not the listed IET companion publication.",
    },
    [IET_ON_SITE_GUIDE],
  ),
  reviewed(
    "quiz-29766",
    6,
    {
      B: "The opening regulations do not set out a category called general installations.",
      C: "Mines are addressed later through application and exemption provisions, not as the principal content of Regulations 1 to 3.",
      D: "Regulations 1 to 3 contain operative introductory provisions and are not reserved for future use.",
    },
    [EAWR],
  ),
  reviewed(
    "quiz-29766",
    7,
    {
      A: "Amendment 1:2020 is superseded and does not identify the edition published in April 2026.",
      B: "Amendment 2:2022 predates both Amendments 3 and 4 and is not the current April 2026 citation.",
      C: "The combined Amendment 3:2024 citation was current before publication of Amendment 4:2026.",
    },
    [IET_CURRENT_EDITION, BSI_BS_7671],
  ),
  reviewed(
    "quiz-29766",
    8,
    {
      A: "1974 is the year of the Health and Safety at Work etc. Act, not the Electricity at Work Regulations.",
      C: "1999 is associated with the Management of Health and Safety at Work Regulations, not EAWR.",
      D: "2002 is not the making year shown in the title and citation of the Electricity at Work Regulations.",
    },
    [EAWR],
  ),
  reviewed(
    "quiz-29766",
    9,
    {
      A: "Competence is the subject of Regulation 16 rather than Regulation 10.",
      C: "Working space, access and lighting are the subject of Regulation 15.",
      D: "Working on or near live conductors is controlled by Regulation 14, not Regulation 10.",
    },
    [EAWR],
  ),
  reviewed(
    "quiz-29766",
    10,
    {
      A: "Competence to prevent danger or injury is covered by Regulation 16.",
      B: "The strength and capability of electrical connections are covered by Regulation 10.",
      D: "Work on or near live conductors is covered by Regulation 14 rather than Regulation 15.",
    },
    [EAWR],
  ),
  reviewed(
    "quiz-29766",
    11,
    {
      A: "An immediate prohibition notice prevents the prohibited activity from continuing while remedial work is deferred.",
      B: "The notice does not create a universal seven-day replacement period; its terms address the serious risk identified.",
      C: "Immediate effect means the prohibited use cannot continue until the end of the current shift.",
    },
    [HSE_ENFORCEMENT, HSWA],
  ),
  reviewed(
    "quiz-29766",
    12,
    {
      B: "The regulation does not make a workforce of exactly 20 the trigger for establishing a requested safety committee.",
      C: "There is no general 50-employee threshold replacing the written request by appointed union safety representatives.",
      D: "A workforce of 100 is not the statutory trigger specified in Regulation 9.",
    },
    [SAFETY_COMMITTEES],
  ),
  reviewed(
    "quiz-29766",
    13,
    {
      A: "Section 1 states preliminary matters and is not the employer's general duty to employees.",
      C: "Section 6 concerns designers, manufacturers, importers and suppliers of articles and substances for use at work.",
      D: "Section 7 sets duties of employees, not the employer's general duty of care.",
    },
    [HSWA],
  ),
  reviewed(
    "quiz-29766",
    14,
    {
      B: "The poster-or-leaflet duty applies to every employer and is not delayed until five workers are employed.",
      C: "Twenty employees is not the threshold for providing the approved information.",
      D: "The legal information duty is not limited to organisations with at least 100 employees.",
    },
    [HSE_LAW_POSTER],
  ),
  reviewed(
    "quiz-29766",
    15,
    {
      A: "A court does not automatically close every business connected with a convicted defendant for every health-and-safety offence.",
      C: "Health-and-safety breaches can be prosecuted criminally, so the consequences are not limited to civil damages.",
      D: "HSE investigates and enforces the law, but it does not order dismissal from private employment as a criminal sentence.",
    },
    [HSWA, HSE_ENFORCEMENT],
  ),
  reviewed(
    "quiz-29766",
    16,
    {
      B: "Inspectors can cause a dangerous article or substance to be rendered harmless or destroyed under the statutory safeguards.",
      C: "An inspector may enter premises at a reasonable time and can enter immediately where danger requires it.",
      D: "Inspectors may take possession of and detain articles or substances where the statutory conditions are met.",
    },
    [HSWA],
  ),
  reviewed(
    "quiz-29766",
    17,
    {
      B: "An improvement notice specifies contraventions and remedial steps; it does not invariably require immediate equipment replacement.",
      C: "Stopping at the end of a shift describes neither the normal effect nor the compliance period of an improvement notice.",
      D: "Immediate cessation is the effect of an immediate prohibition notice, not an ordinary improvement notice.",
    },
    [HSE_ENFORCEMENT, HSWA],
  ),
  reviewed(
    "quiz-29766",
    18,
    {
      A: "Section 1 does not set out employees' duties to take reasonable care and cooperate.",
      B: "Section 2 concerns employers' general duties to employees rather than employees' own duties.",
      C: "Section 6 addresses persons designing, manufacturing, importing or supplying work articles and substances.",
    },
    [HSWA],
  ),
  reviewed(
    "quiz-29766",
    19,
    {
      B: "Courts determine cases and impose sanctions; they are not the national workplace regulator performing routine enforcement.",
      C: "Employees have legal duties but do not constitute the national enforcement regulator.",
      D: "Police can become involved in particular incidents, but workplace health-and-safety regulation is not their general national function.",
    },
    [HSE_ENFORCEMENT],
  ),
  reviewed(
    "quiz-29766",
    20,
    {
      A: "A health and safety policy is a management document, not an insurance certificate required simply to be displayed.",
      C: "Official guidance helps employers choose measures; the employer's policy records its own commitment, responsibilities and arrangements.",
      D: "The policy communicates how the organisation will manage safety and is not an instruction to HSE about mandatory measures.",
    },
    [HSE_POLICY],
  ),
  reviewed(
    "quiz-29766",
    21,
    {
      A: "An as-fitted drawing records the completed installation layout and is produced or updated after installation changes.",
      B: "The contract contains binding terms but is not the itemised extraction of accessories from design drawings.",
      D: "A work schedule sequences activities and timing rather than listing detailed accessory quantities taken from drawings.",
    },
    [GOV_CONSTRUCTION_PLAYBOOK],
  ),
  reviewed(
    "quiz-29766",
    22,
    {
      A: "A block diagram shows major functional sections at a high level, not the standard-symbol detail of a schematic.",
      B: "A circuit or wiring drawing emphasises electrical connections, whereas a schematic explains function through a logical arrangement.",
      C: "A layout drawing shows physical positions and dimensions rather than a logical functional relationship.",
    },
    [GOV_CONSTRUCTION_PLAYBOOK],
  ),
  reviewed(
    "quiz-29766",
    23,
    {
      A: "A block drawing simplifies the system into functional blocks and does not show scaled equipment positions.",
      B: "A circuit drawing records electrical connections rather than the physical, dimensioned installation arrangement.",
      D: "A schematic is arranged for functional clarity and does not normally preserve scaled physical locations.",
    },
    [GOV_CONSTRUCTION_PLAYBOOK],
  ),
  reviewed(
    "quiz-29766",
    24,
    {
      A: "A job sheet records work tasks or labour and is not the site's controlled visitor arrival-and-departure record.",
      B: "A site diary logs events and progress, but individual visitors should sign the dedicated visitor register.",
      C: "A time sheet records workers' time for labour or payroll purposes rather than every visitor's site movements.",
    },
    [HSE_RISK_ASSESSMENT],
  ),
  reviewed(
    "quiz-29766",
    25,
    {
      A: "A private contract does not levy a criminal fine; its agreed delay remedy is described as liquidated damages.",
      C: "A stage payment is money due for completed progress and is not compensation for specified delay.",
      D: "Work payment is a general description of remuneration and not the recognised term for a pre-estimated delay sum.",
    },
    [GOV_CONSTRUCTION_PLAYBOOK],
  ),
  reviewed(
    "quiz-29766",
    26,
    {
      A: "A mission statement expresses broad organisational aims and does not evaluate job-specific hazards and controls.",
      B: "A job sheet allocates or records work but does not replace the required assessment of risk.",
      C: "A job specification defines required work and standards, not the likelihood, severity and controls for identified hazards.",
    },
    [HSE_RISK_ASSESSMENT],
  ),
  reviewed(
    "quiz-29766",
    27,
    {
      A: "A daywork sheet records labour, plant and materials for work valued on a daywork basis, not receipt of a delivery.",
      C: "A special order requests non-stock goods but does not evidence the quantities actually brought to site.",
      D: "A variation order authorises a change to contracted work and is unrelated to checking delivered supplies.",
    },
    [GOV_CONSTRUCTION_PLAYBOOK],
  ),
  reviewed(
    "quiz-29766",
    28,
    {
      A: "A job sheet describes allocated tasks but does not formally authorise work subject to a permit system.",
      B: "A method statement explains how work will be performed safely but is not itself the controlled permission to start.",
      D: "A risk assessment identifies hazards and controls; it does not issue the time-limited authorisation provided by a permit.",
    },
    [HSE_PERMIT_TO_WORK, HSE_RISK_ASSESSMENT],
  ),
  reviewed(
    "quiz-29766",
    29,
    {
      A: "A block drawing omits most individual connections and therefore cannot show a detailed fault-current path.",
      C: "A layout drawing shows where equipment is located, not the complete conductive connections needed for tracing.",
      D: "A functional schematic may abstract physical wiring; the detailed circuit drawing is the listed document for tracing connections.",
    },
    [GOV_CONSTRUCTION_PLAYBOOK],
  ),
  reviewed(
    "quiz-29766",
    30,
    {
      A: "A deposit is normally paid at the outset and is not the recurring valuation of work completed during the contract.",
      B: "Final payment follows completion and close-out rather than being one of several payments during progress.",
      D: "Summary payment is not the recognised contract term for payments certified at defined stages.",
    },
    [GOV_CONSTRUCTION_PLAYBOOK],
  ),
  reviewed(
    "quiz-29767",
    2,
    {
      B: "A reasonably-practicable duty remains enforceable and cannot simply be treated as though no requirement exists.",
      C: "Requiring compliance regardless of sacrifice describes an absolute duty, not the qualified reasonably-practicable test.",
      D: "The phrase qualifies how risk controls are judged; it does not remove every legal requirement.",
    },
    [HSWA, HSE_RISK_ASSESSMENT],
  ),
  reviewed(
    "quiz-29767",
    6,
    {
      A: "A full collection of British Standards is not the single practical IET guide aligned to common BS 7671 installations.",
      B: "An AEEU handbook is not the current IET companion named for applying BS 7671 within the guide's scope.",
      C: "NICEIC codes may support contractors, but they are not the IET's official On-Site Guide.",
    },
    [IET_ON_SITE_GUIDE],
  ),
  reviewed(
    "quiz-29767",
    8,
    {
      A: "Competence of persons to prevent danger or injury is addressed by Regulation 16.",
      B: "Regulation 10 deals with the integrity and suitability of electrical connections.",
      C: "Working space, means of access and lighting are the subject of Regulation 15.",
    },
    [EAWR],
  ),
  reviewed(
    "quiz-29767",
    9,
    {
      A: "A diary provides a chronological record but does not calculate dependencies or update a detailed activity programme.",
      B: "Site meetings coordinate decisions, but they are not the scheduling system used to baseline and compare progress.",
      D: "Time sheets record labour already spent and do not by themselves generate a dependency-based project schedule.",
    },
    [GOV_CONSTRUCTION_PLAYBOOK],
  ),
  reviewed(
    "quiz-29767",
    10,
    {
      A: "Capping can cover ordinary sheathed wiring and is not intended only for extra-low-voltage cables.",
      B: "Ordinary capping is not recognised as sufficient mechanical protection that permits arbitrary shallow cable routes.",
      C: "Cables in cavity walls require selection and support for that method; shallow-wall capping is not its defining solution.",
    },
    [IET_CURRENT_EDITION, IET_ON_SITE_GUIDE],
  ),
  reviewed(
    "quiz-29767",
    11,
    {
      A: "Marking out accessory positions from the installation information is a normal installation-electrician skill.",
      C: "This repeats the ordinary task of setting out accessory positions and is expected within installation work.",
      D: "Reading dimensions and scales on relevant installation drawings is a core skill needed to set work out accurately.",
    },
    [GOV_CONSTRUCTION_PLAYBOOK],
  ),
  reviewed(
    "quiz-29767",
    12,
    {
      A: "Barrier tape gives a persistent visible warning and helps define a restricted area when selected appropriately.",
      B: "A physical barrier provides a continuing indication and restriction that does not depend on remembering a conversation.",
      C: "Chain fencing visibly marks and controls an area, unlike an informal warning that can be missed or forgotten.",
    },
    [HSE_HSG85],
  ),
  reviewed(
    "quiz-29767",
    13,
    {
      B: "The main contractor coordinates and delivers the contracted work but does not automatically supply every specialist professional opinion.",
      C: "A subcontractor performs an allocated package and supplies expertise only within that appointed scope.",
      D: "A supervisor directs day-to-day work and compliance rather than acting as the project's independent specialist adviser.",
    },
    [GOV_CONSTRUCTION_PLAYBOOK],
  ),
  reviewed(
    "quiz-29767",
    14,
    {
      B: "A penalty clause is only one possible contractual term and is not the complete document recording the parties' agreement.",
      C: "A tender is an offer to carry out work and does not by itself record the final binding terms agreed by both parties.",
      D: "A verbal agreement is not the formal written document requested and leaves the agreed terms less readily evidenced.",
    },
    [GOV_CONSTRUCTION_PLAYBOOK],
  ),
  reviewed(
    "quiz-29767",
    15,
    {
      A: "A consultant provides professional advice or design services and does not normally employ and control the installation workforce.",
      C: "A subcontractor delivers only its contracted package and is not responsible for the whole main contract.",
      D: "A supervisor manages assigned site personnel day to day but does not hold the overall contract merely by supervising them.",
    },
    [GOV_CONSTRUCTION_PLAYBOOK],
  ),
  reviewed(
    "quiz-29767",
    16,
    {
      A: "The Electricity at Work Regulations are legislation, not the IET topic-guidance series supporting BS 7671.",
      B: "A named commercial textbook is not the current suite of official IET Guidance Notes.",
      D: "The Health and Safety at Work etc. Act is primary legislation rather than BS 7671 application guidance.",
    },
    [IET_CURRENT_EDITION, IET_ON_SITE_GUIDE],
  ),
  reviewed(
    "quiz-29767",
    17,
    {
      A: "Short insulated probe tips reduce accidental bridging and contact exposure but do not interrupt a resulting fault current.",
      B: "Double-insulated leads reduce shock risk from damaged insulation but are not a fault-current interrupting component.",
      D: "Robust construction helps prevent damage, yet it cannot clear a high current after a probe creates a short circuit.",
    },
    [HSE_GS38],
  ),
  reviewed(
    "quiz-29767",
    18,
    {
      A: "Controlling the board key can contribute to security, although the circuit must still be identified, locked off and proved dead.",
      B: "A locked cover and warning notices are protective steps, whereas this option does not expressly direct work to begin unproved.",
      D: "An MCB locking device is a recognised means of securing isolation, provided the full proving-dead procedure follows.",
    },
    [HSE_HSG85],
  ),
  reviewed(
    "quiz-29767",
    19,
    {
      B: "Beginning work before testing every relevant conductor for dead reverses the essential safe-isolation sequence.",
      C: "An unsecured isolator can be inadvertently re-energised, so proving dead once does not make this sequence safe.",
      D: "A dead test cannot be performed while the circuit remains energised, and isolation must precede the conductor tests.",
    },
    [HSE_HSG85, HSE_GS38],
  ),
  reviewed(
    "quiz-29767",
    20,
    {
      B: "Starting a procedure without finding who switched the circuit off could interfere with another person's work or conceal a fault.",
      C: "Testing and locking off do not resolve why the device was already open or whether another worker controls the isolation.",
      D: "Re-energising an unexplained isolated circuit can immediately endanger another person and must not precede investigation.",
    },
    [HSE_HSG85],
  ),
  reviewed(
    "quiz-29767",
    21,
    {
      A: "Double insulation protects the user from accessible conductive parts but does not set the short-circuit current in a probe.",
      B: "An HRC fuse disconnects after sufficient fault current flows; the series resistor is the component that limits that current.",
      D: "Robust construction resists mechanical damage and does not electrically limit current through a shorted probe or lead.",
    },
    [HSE_GS38],
  ),
  reviewed(
    "quiz-29767",
    22,
    {
      B: "A non-contact detector can miss voltage because of shielding, orientation or field conditions and cannot prove conductors dead.",
      C: "A general multimeter has selectable modes and may lack the simplicity, loading and protection expected for proving dead.",
      D: "Voltmeter is too broad a category; safe isolation calls for a suitable proprietary two-pole voltage indicator.",
    },
    [HSE_GS38, HSE_HSG85],
  ),
  reviewed(
    "quiz-29767",
    23,
    {
      A: "A toolbox may be accessible to others and would not keep the lock-off key under the isolating person's sole control.",
      C: "Giving the key to a supervisor allows someone other than the person at risk to remove that person's lock.",
      D: "Leaving the key with the padlock defeats the security of the lock-off and permits inadvertent re-energisation.",
    },
    [HSE_HSG85],
  ),
  reviewed(
    "quiz-29767",
    24,
    {
      B: "HSWA provides the broad enabling framework, while the specific controls for live electrical work are in EAWR.",
      C: "The Management Regulations require risk management generally but do not contain the dedicated live-conductor provision.",
      D: "PUWER addresses safe work equipment and does not replace the Electricity at Work Regulations for live electrical systems.",
    },
    [EAWR, HSE_HSG85],
  ),
  reviewed(
    "quiz-29767",
    25,
    {
      A: "Isolation permits manual disconnection but does not provide automatic 30 mA additional protection against residual current.",
      B: "An MCB provides overcurrent protection and does not detect the small earth-leakage imbalance addressed by an RCD.",
      D: "Protective switchgear must have defined characteristics; an unspecified device cannot demonstrate the required 30 mA protection.",
    },
    [IET_CONSTRUCTION, HSE_CONSTRUCTION_ELECTRICITY],
  ),
  reviewed(
    "quiz-29767",
    26,
    {
      A: "A property stated only above 30 degrees Celsius says nothing about safe flexing in winter conditions.",
      B: "Suitability merely down to 5 degrees Celsius is inadequate where the specified site service temperature is below zero.",
      C: "A minimum of 20 degrees Celsius describes warm indoor handling and would exclude the intended winter outdoor use.",
    },
    [HSE_CONSTRUCTION_ELECTRICITY],
  ),
  reviewed(
    "quiz-29767",
    27,
    {
      B: "Ordinary PVC cable can stiffen and be damaged at low temperature and does not identify the special site-flex compound.",
      C: "Flexible cable is a broad construction category and does not state the common low-temperature trade designation.",
      D: "Zero flex is not the recognised trade name for the cold-resistant flexible cable used for site leads.",
    },
    [HSE_CONSTRUCTION_ELECTRICITY],
  ),
  reviewed(
    "quiz-29767",
    28,
    {
      A: "Amperes measure instantaneous electric current and do not accumulate the energy consumed over time.",
      B: "Volts measure potential difference and cannot record billed electrical energy consumption.",
      C: "Watts measure instantaneous power; the meter integrates power over time and records kilowatt-hours.",
    },
    [BIPM_SI],
  ),
  reviewed(
    "quiz-29767",
    29,
    {
      B: "A 110 V centre-tapped supply presents approximately 55 V from either outer conductor to Earth, not 110 V to Earth.",
      C: "The site transformer output is alternating current, and 55 V describes each pole's voltage to Earth rather than a DC output.",
      D: "Reduced low voltage construction supplies use AC from a centre-tapped transformer, not an unspecified safe DC source.",
    },
    [HSE_CONSTRUCTION_ELECTRICITY],
  ),
  reviewed(
    "quiz-29767",
    30,
    {
      A: "IP2X protects against access or solid objects of 12.5 mm and larger but gives no water-jet rating.",
      B: "IP44 protects against 1 mm objects and splashing water, not dust ingress and water jets.",
      D: "IPXXB is an access-to-hazard notation and does not specify either dust protection or water-jet resistance.",
    },
    [BSI_IP_CODE],
  ),
  reviewed(
    "quiz-29768",
    1,
    {
      A: "The first digit 2 covers objects 12.5 mm and larger, not the one-millimetre threshold stated.",
      C: "IP65 provides dust-tight construction and water-jet protection, which is substantially more than this solid-object requirement.",
      D: "The supplementary letter B is an access-probe test and is not the first-digit classification for one-millimetre objects.",
    },
    [BSI_IP_CODE],
  ),
  reviewed(
    "quiz-29768",
    2,
    {
      A: "A circuit is the connected electrical arrangement supplied from a protective device, not the board's count of available positions.",
      B: "Gang describes the number of switches or outlets combined in an accessory and is not a distribution-board position count.",
      C: "Modules describe physical DIN-rail width, so a multi-module device can occupy more space than its number of outgoing ways.",
    },
    [IET_CONSUMER_UNITS],
  ),
  reviewed(
    "quiz-29768",
    3,
    {
      B: "Main feed is informal wording for an incoming conductor and not the common component distributing line to all MCBs.",
      C: "The neutral block terminates circuit neutrals and does not supply line voltage to the protective devices.",
      D: "A switched-live conductor carries a controlled output in a final circuit and is not the fuseboard distribution component.",
    },
    [IET_CONSUMER_UNITS],
  ),
  reviewed(
    "quiz-29768",
    4,
    {
      B: "The first digit 4 protects against objects one millimetre and larger, a smaller probe than the question specifies.",
      C: "IP65 combines dust-tight and water-jet performance and does not simply identify the 12.5 millimetre solid-object level.",
      D: "The supplementary letter W concerns stated weather conditions and is not a first-digit solid-object classification.",
    },
    [BSI_IP_CODE],
  ),
  reviewed(
    "quiz-29768",
    5,
    {
      A: "Ordinary PVC becomes less flexible in the cold, so handling it below its permitted installation temperature is not automatically safe.",
      B: "Mechanical cracking can occur during bending or impact before energisation, so withholding current does not prevent the damage.",
      D: "A colour change is not the relevant installation risk; embrittled insulation can split or crack.",
    },
    [IET_CURRENT_EDITION],
  ),
  reviewed(
    "quiz-29768",
    6,
    {
      A: "Black is not the current harmonised identification for a single-phase line conductor and was historically used for neutral.",
      B: "Blue is the current identification for neutral, not line, in a single-phase supply.",
      D: "Grey identifies one line conductor in a three-phase system but is not the normal single-phase line colour.",
    },
    [IET_CURRENT_EDITION],
  ),
  reviewed(
    "quiz-29768",
    7,
    {
      B: "Brass is a conductive copper alloy and readily carries current under normal low-voltage conditions.",
      C: "Mercury is a liquid metal and an electrical conductor rather than an insulating medium.",
      D: "Steel is metallic and conductive, even though its resistivity is higher than copper's.",
    },
    [BIPM_SI],
  ),
  reviewed(
    "quiz-29768",
    8,
    {
      B: "A short corridor usually needs control from two ends and can use two-way switching without an intermediate point.",
      C: "A single-storey building does not by itself imply three or more switching positions for one lighting circuit.",
      D: "A room with two doors normally needs two-way control; an intermediate switch is added only for further control positions.",
    },
    [IET_ON_SITE_GUIDE],
  ),
  reviewed(
    "quiz-29768",
    9,
    {
      A: "Removing the sheath entirely leaves the insulated cores without the cable's overall mechanical protection inside the entry.",
      B: "Cutting exactly at the outer edge may expose single-insulated cores at the entry and gives no allowance for proper restraint.",
      C: "Leaving the sheath outside the enclosure exposes individual core insulation where it passes through the entry.",
    },
    [IET_CURRENT_EDITION, IET_ON_SITE_GUIDE],
  ),
  reviewed(
    "quiz-29768",
    10,
    {
      A: "Blue marking would identify neutral and must not be applied to conductors functioning as switched line conductors.",
      C: "Grey is one of the original core colours and does not re-identify both conductors for their line function.",
      D: "Red is from the superseded UK colour scheme and is not the current harmonised line identification.",
    },
    [IET_CURRENT_EDITION],
  ),
  reviewed(
    "quiz-29768",
    11,
    {
      B: "Ten square millimetres is far larger than the conductor normally selected for an ordinary domestic lighting load.",
      C: "Two-and-a-half square millimetres is commonly associated with socket or larger radial circuits rather than typical lighting wiring.",
      D: "Six square millimetres is normally selected for substantially heavier loads and is not the common domestic-lighting size.",
    },
    [IET_ON_SITE_GUIDE, IET_CURRENT_EDITION],
  ),
  reviewed(
    "quiz-29768",
    12,
    {
      A: "Dry air has very high resistance at ordinary low-voltage fields and is used as an insulating clearance.",
      C: "Mica has strong dielectric and heat-resistant properties and is used as an electrical insulator.",
      D: "Oil-impregnated paper is a traditional dielectric system and is not a metallic conducting material.",
    },
    [BIPM_SI],
  ),
  reviewed(
    "quiz-29768",
    13,
    {
      A: "Black was the old UK neutral colour but is not the current harmonised neutral identification.",
      C: "Brown identifies the single-phase line conductor and must not be confused with neutral.",
      D: "Grey is a three-phase line colour and is not the current single-phase neutral colour.",
    },
    [IET_CURRENT_EDITION],
  ),
  reviewed(
    "quiz-29768",
    14,
    {
      A: "PILC identifies paper insulation and a lead sheath but does not by itself state the steel-wire-armoured construction requested.",
      B: "PVC/PVC cable has PVC insulation and oversheath but no incorporated steel-wire armour.",
      D: "XLPE identifies the insulation material and does not alone describe a complete armoured cable construction.",
    },
    [IET_CURRENT_EDITION],
  ),
  reviewed(
    "quiz-29768",
    15,
    {
      A: "A suitable gland is still required where the termination and enclosure design call for it; INSUDITE does not eliminate glands.",
      B: "Fire-resistant supports remain necessary to prevent premature cable collapse and are unrelated to the old soft-core ferrule.",
      D: "The circuit protective conductor still needs a sound termination; the insulation change does not remove earthing requirements.",
    },
    [PRYSMIAN_INSUDITE, PRYSMIAN_FP200],
  ),
  reviewed(
    "quiz-29768",
    16,
    {
      B: "Current FP200 GOLD is not constructed with the lead sheath characteristic of traditional lead-covered cables.",
      C: "Its screen is metallised aluminium foil rather than a steel-wire or steel-tape screen.",
      D: "The manufacturer specifies aluminium foil and does not describe the screen as tin foil.",
    },
    [PRYSMIAN_FP200],
  ),
  reviewed(
    "quiz-29768",
    17,
    {
      A: "Ordinary PVC does not provide the specified fire-resistant conductor-insulation system used by current FP200 GOLD.",
      B: "Bare soft silicone describes an older construction and omits the current hard-skin INSUDITE formulation.",
      C: "The cable does not use PVC cores merely coated with silicone; its cores use a purpose-designed crosslinked polymer.",
    },
    [PRYSMIAN_INSUDITE, PRYSMIAN_FP200],
  ),
  reviewed(
    "quiz-29768",
    18,
    {
      A: "A one-diameter bend would be extremely tight and is below the manufacturer's fixed-installation limit.",
      B: "Two cable diameters is less than the six-diameter radius stated in the current product datasheet.",
      C: "Four cable diameters remains below the specified minimum bend radius for current FP200 GOLD.",
    },
    [PRYSMIAN_FP200],
  ),
  reviewed(
    "quiz-29768",
    19,
    {
      A: "The cable alone cannot maintain an enclosure's ingress rating if the entry gland and seal are unsuitable for outdoor exposure.",
      B: "Colour does not establish gland size, sealing performance, compatibility or the required IP protection.",
      C: "An improvised, unlisted seal gives no reliable evidence of cable compatibility or sustained weatherproof performance.",
    },
    [PRYSMIAN_FP200],
  ),
  reviewed(
    "quiz-29768",
    20,
    {
      A: "FP200 GOLD can be installed by several compliant support methods and is not restricted exclusively to cable tray.",
      B: "It is a screened polymeric fire-resistant cable, not a mineral-insulated copper-sheathed cable.",
      C: "Its current design is promoted for easy termination with normal techniques rather than an unavoidable specialist-tool process.",
    },
    [PRYSMIAN_FP200, PRYSMIAN_INSUDITE],
  ),
  reviewed(
    "quiz-29768",
    21,
    {
      A: "The inorganic magnesium-oxide insulation and copper construction allow MI cable to tolerate high operating temperatures.",
      B: "MI cable remains serviceable in very cold conditions because its insulation is inorganic rather than a stiffening polymer.",
      D: "Preparing and sealing MI cable requires purpose-designed stripping, potting and compression tools.",
    },
    [NVENT_MI_TERMINATION, NVENT_MI_TOOLS],
  ),
  reviewed(
    "quiz-29768",
    22,
    {
      A: "A junior hacksaw can damage conductors and leave an uncontrolled sheath edge instead of performing the specified stripping operation.",
      B: "Side-cutters are unsuitable for removing the continuous copper sheath without crushing or nicking the cable.",
      C: "A utility knife is intended for softer coverings and cannot correctly strip the metal sheath of MI cable.",
    },
    [NVENT_MI_TOOLS, NVENT_MI_TERMINATION],
  ),
  reviewed(
    "quiz-29768",
    23,
    {
      B: "Two thousand degrees Celsius is almost twice copper's actual melting point and is not the closest listed value.",
      C: "Five hundred degrees Celsius is more than five hundred degrees below copper's melting point.",
      D: "Five thousand degrees Celsius is several times the melting temperature of copper.",
    },
    [BIPM_SI],
  ),
  reviewed(
    "quiz-29768",
    24,
    {
      A: "Magnesium dioxide is not the compound packed around the conductors in mineral-insulated cable.",
      C: "Manganese dioxide is a different chemical and is not the standard MI cable dielectric.",
      D: "Manganese oxide does not identify the compressed magnesium-oxide insulation used in the cable.",
    },
    [NVENT_MI_TERMINATION],
  ),
  reviewed(
    "quiz-29768",
    25,
    {
      A: "Copper has useful corrosion resistance, and additional covering is selected only where the environment requires it.",
      C: "MI termination requires dedicated preparation and sealing tools, so saying no special tools are required is incorrect.",
      D: "A polymer oversheath is optional for selected environments and is not mandatory on every MI cable installation.",
    },
    [NVENT_MI_TERMINATION, NVENT_MI_TOOLS],
  ),
  reviewed(
    "quiz-29768",
    26,
    {
      B: "A generic conductor-crimping tool does not necessarily compress the pot and secure its closure disc as the specified tool does.",
      C: "Disc tool is not the manufacturer's identified tool for both packing the compound and permanently securing the disc.",
      D: "Fitting tool is an unspecific label and does not describe the required crimping and compression operation.",
    },
    [NVENT_MI_TERMINATION, NVENT_MI_TOOLS],
  ),
  reviewed(
    "quiz-29768",
    27,
    {
      B: "Trunking up to the motor does not isolate the rigid MI termination from repeated motor movement.",
      C: "MI cable can supply motors when the termination and route accommodate the environmental and vibration stresses.",
      D: "A straight rigid entry transfers vibration directly into the termination and can fatigue the cable or gland.",
    },
    [NVENT_MI_TERMINATION],
  ),
  reviewed(
    "quiz-29768",
    28,
    {
      A: "The gland body and nut provide mechanical retention; the olive's defining electrical role is sheath continuity.",
      C: "Moisture sealing is provided by the termination pot, compound and seals rather than primarily by the earth olive.",
      D: "Corrosion protection comes from material selection and any protective covering, not the small gland olive.",
    },
    [NVENT_MI_TERMINATION],
  ),
  reviewed(
    "quiz-29768",
    29,
    {
      A: "Fixing holes can be provided independently; the turned return is principally a structural stiffening feature.",
      B: "Tray is mounted using suitable brackets and fixings, not by treating the return flange as its sole wall fixing.",
      C: "Cables are retained with cleats or ties through the tray pattern rather than attached to the return solely for that purpose.",
    },
    [IET_CABLE_SUPPORTS],
  ),
  reviewed(
    "quiz-29768",
    30,
    {
      B: "Straight alignment is achieved by setting out and supports; a rear gap is not chiefly an alignment device.",
      C: "The spacing may assist access, but the specific practical requirement is room to pass and fasten cable ties.",
      D: "Tray rigidity is provided by its profile and supports, not by leaving an air space behind it.",
    },
    [IET_CABLE_SUPPORTS],
  ),
  reviewed(
    "quiz-29769",
    1,
    {
      A: "Removing sharp edges is a safety and durability requirement, not merely a cosmetic improvement.",
      B: "Local edge treatment may help preserve the product, but its principal purpose is cable protection and corrosion control.",
      C: "Easier assembly does not address the risk of a burr cutting insulation after cables are installed.",
    },
    [IET_CABLE_SUPPORTS, IET_CURRENT_EDITION],
  ),
  reviewed(
    "quiz-29769",
    2,
    {
      A: "Galvanising deposits zinc specifically to provide corrosion protection to the underlying steel.",
      B: "A sound PVC coating forms a corrosion-resistant barrier and is itself the protective finish.",
      D: "Stainless steel gains corrosion resistance from its alloy and passive surface rather than a mandatory additional topcoat.",
    },
    [IET_CABLE_SUPPORTS],
  ),
  reviewed(
    "quiz-29769",
    3,
    {
      A: "Admirable pattern is not the established trade name for the regular slot arrangement in cable tray.",
      C: "Naval pattern is a plausible description but is not the recognised name used for this tray perforation pattern.",
      D: "Standard pattern is too generic and does not identify the named Admiralty slot pattern.",
    },
    [IET_CABLE_SUPPORTS],
  ),
  reviewed(
    "quiz-29769",
    4,
    {
      A: "Steel tray is electrically conductive, so its material does not automatically prevent protective-conductor use.",
      B: "Mere physical contact between sections does not prove durable continuity, adequate conductance or protection of joints.",
      C: "A protective conductor must connect relevant exposed-conductive-parts to the earthing system rather than be insulated from them.",
    },
    [IET_EARTHING_AND_BONDING, IET_CURRENT_EDITION],
  ),
  reviewed(
    "quiz-29769",
    5,
    {
      A: "Adaptability to routes and future changes is an advantage of a ladder-rack system rather than a disadvantage.",
      B: "Availability in varied sizes makes selection easier and is a system benefit.",
      C: "A support system that is straightforward to erect reduces installation effort and is not a disadvantage.",
    },
    [IET_CABLE_SUPPORTS],
  ),
  reviewed(
    "quiz-29769",
    6,
    {
      A: "Cable basket is useful for lighter data and small services but is not the exceptionally strong heavy-power support described.",
      C: "Standard tray supports many cable runs but has less load capacity and span capability than heavy ladder rack.",
      D: "Unistrut is a framing and support system, not the listed high-strength type of cable tray or ladder containment.",
    },
    [IET_CABLE_SUPPORTS],
  ),
  reviewed(
    "quiz-29769",
    7,
    {
      A: "Dado trunking distributes power and data around wall or desk height and is not primarily a luminaire-support system.",
      C: "Skirting trunking routes services at low wall level rather than supporting rows of luminaires.",
      D: "Suspended describes a mounting arrangement and does not identify the dedicated lighting-trunking product function.",
    },
    [IET_CURRENT_EDITION],
  ),
  reviewed(
    "quiz-29769",
    8,
    {
      B: "Skirting trunking is mounted at the base of a wall, not set flush into the floor surface.",
      C: "Suspended-floor trunking is associated with the void below a raised floor rather than a flush accessible floor line.",
      D: "Under-floor containment is concealed below the floor and does not itself describe a flush-floor access system.",
    },
    [IET_CURRENT_EDITION],
  ),
  reviewed(
    "quiz-29769",
    9,
    {
      B: "Circuits of different bands cannot simply share a compartment without the insulation or separation measures required between them.",
      C: "Lighting and power circuits need separation only where their voltage bands, insulation or other requirements demand it.",
      D: "Single-phase and three-phase circuits are not segregated solely because their phase counts differ.",
    },
    [IET_CURRENT_EDITION],
  ),
  reviewed(
    "quiz-29769",
    10,
    {
      A: "Compartmented trunking separates services but does not normally provide movable plug-in tap-off points for each luminaire.",
      C: "PVC dado trunking is intended for wall-level accessories and is unsuitable as the preferred overhead movable-lighting system.",
      D: "Ordinary steel trunking carries fixed wiring but lacks the dedicated plug-in distribution feature needed for frequent relocation.",
    },
    [IET_CURRENT_EDITION],
  ),
  reviewed(
    "quiz-29769",
    11,
    {
      A: "Busbar is a conductor system and does not identify the office trunking position at the bottom of a wall.",
      B: "Dado trunking is normally fitted around desk or dado height, above the skirting position described.",
      D: "Suspended-floor trunking runs below a raised floor rather than visibly around the wall base.",
    },
    [IET_CURRENT_EDITION],
  ),
  reviewed(
    "quiz-29769",
    12,
    {
      A: "Fire stopping is not installed at arbitrary half-metre intervals inside every trunking run.",
      B: "A floor crossing requires this treatment when the floor is a fire-separating element, not merely because levels differ.",
      D: "Passing through an ordinary non-compartment wall does not automatically create the specified fire-stopping requirement.",
    },
    [IET_FIRE_STOPPING],
  ),
  reviewed(
    "quiz-29769",
    13,
    {
      A: "Earth continuity is provided by correctly bonded conductive containment and joints, not by an insulating edge strip.",
      B: "Grommet strip does not seal an entire trunking system against air movement.",
      D: "Cable supports or retainers carry the conductors; grommet strip covers sharp cut edges at entries.",
    },
    [IET_CURRENT_EDITION],
  ),
  reviewed(
    "quiz-29769",
    14,
    {
      A: "Additions are made through designed tap-off or joint units, not by the flexible expansion straps themselves.",
      C: "The straps may simplify a joint, but routine maintenance access is not their primary engineering function.",
      D: "Protective continuity must be maintained by design, yet the flexibility is specifically needed to accommodate thermal movement.",
    },
    [IET_CURRENT_EDITION],
  ),
  reviewed(
    "quiz-29769",
    15,
    {
      A: "Section 701 contains requirements for locations containing a bath or shower, not mobile units.",
      C: "Section 721 deals with caravans and motor caravans rather than the wider mobile or transportable unit category.",
      D: "Section 753 covers heating cables and embedded heating systems, not transportable units.",
    },
    [IET_CURRENT_EDITION, BSI_BS_7671],
  ),
  reviewed(
    "quiz-29769",
    16,
    {
      A: "Part 1 contains scope, object and fundamental principles rather than the main definitions section.",
      C: "Part 5 covers selection and erection of equipment and relies on definitions established earlier.",
      D: "Part 7 contains particular requirements for special installations or locations, not general terminology.",
    },
    [IET_CURRENT_EDITION, BSI_BS_7671],
  ),
  reviewed(
    "quiz-29769",
    17,
    {
      B: "Chapter 42 concerns protection against thermal effects rather than assessment of purposes, supplies and structure.",
      C: "Chapter 55 covers other equipment within Part 5 and is not the installation-characteristics chapter.",
      D: "Chapter 64 addresses initial verification after erection, not the early design assessment named in the question.",
    },
    [IET_CURRENT_EDITION, BSI_BS_7671],
  ),
  reviewed(
    "quiz-29769",
    18,
    {
      A: "Appendix 4 remains the appendix for current-carrying capacity and voltage-drop information; it is not marked deleted.",
      B: "Appendix 8 is not the former energy-efficiency appendix identified as deleted by Amendment 4.",
      C: "Appendix 10 is not the numbered appendix that previously contained the energy-efficiency material.",
    },
    [IET_CURRENT_EDITION, BSI_BS_7671],
  ),
  reviewed(
    "quiz-29769",
    19,
    {
      B: "Periodic verification is treated separately after the initial-verification chapter and is not the title of Chapter 64.",
      C: "Test-instrument requirements support verification but do not form the subject title of the whole chapter.",
      D: "Certification and schedules are outputs of verification, not a replacement title for Chapter 64.",
    },
    [IET_MODEL_FORMS, IET_CURRENT_EDITION],
  ),
  reviewed(
    "quiz-29769",
    20,
    {
      A: "Part 1 sets scope, object and fundamental principles rather than the detailed safety-protection requirements.",
      C: "Part 5 concerns selection and erection of equipment after protective measures have been determined.",
      D: "Part 6 covers inspection and testing used to verify the installation, not the design heading protection for safety.",
    },
    [IET_CURRENT_EDITION, BSI_BS_7671],
  ),
  reviewed(
    "quiz-29769",
    21,
    {
      A: "Section 526 deals with electrical connections and is not the section for overvoltage protective devices.",
      C: "Section 535 addresses coordination and related selection matters, not the main selection and erection rules for SPDs.",
      D: "Section 542 concerns earthing arrangements and earth electrodes rather than overvoltage protective devices.",
    },
    [IET_CURRENT_EDITION, BSI_BS_7671],
  ),
  reviewed(
    "quiz-29769",
    22,
    {
      A: "Part 2 provides terms and definitions rather than requirements for choosing and installing equipment.",
      B: "Part 4 sets protective measures for safety and precedes equipment selection and erection.",
      D: "Part 6 verifies completed work through inspection and testing rather than specifying equipment selection.",
    },
    [IET_CURRENT_EDITION, BSI_BS_7671],
  ),
  reviewed(
    "quiz-29769",
    23,
    {
      A: "Part 1 contains scope, object and fundamental principles rather than verification requirements.",
      B: "Part 2 defines terms used throughout BS 7671 and is not the inspection-and-testing part.",
      C: "Part 5 governs selection and erection of equipment, which must subsequently be verified under Part 6.",
    },
    [IET_CURRENT_EDITION, BSI_BS_7671],
  ),
  reviewed(
    "quiz-29769",
    24,
    {
      A: "Section 443 addresses protection against transient overvoltages of atmospheric origin or due to switching.",
      C: "Section 535 is within protective-device coordination and is not the current undervoltage-protection section.",
      D: "Section 552 contains requirements for rotating machines and does not set the general undervoltage rules.",
    },
    [IET_CURRENT_EDITION, BSI_BS_7671],
  ),
  reviewed(
    "quiz-29769",
    25,
    {
      A: "Appendix 1 lists referenced British Standards and is not the set of model certification and reporting forms.",
      C: "Appendix 14 does not contain the standard model forms named in the question.",
      D: "Appendix 17 has been deleted by Amendment 4:2026 and cannot be the current model-forms appendix.",
    },
    [IET_MODEL_FORMS, IET_CURRENT_EDITION],
  ),
  reviewed(
    "quiz-29769",
    26,
    {
      B: "Section 534 covers devices for protection against overvoltage, not devices selected specifically for fire risk.",
      C: "Section 536 deals with coordination of electrical equipment rather than the fire-protection device section.",
      D: "Section 538 covers monitoring devices and is not the section titled for devices protecting against fire risk.",
    },
    [IET_CURRENT_EDITION, BSI_BS_7671],
  ),
  reviewed(
    "quiz-29769",
    27,
    {
      A: "Section 701 applies to locations containing a bath or shower rather than construction or demolition sites.",
      C: "Section 709 contains particular requirements for marinas and similar locations, not temporary site installations.",
      D: "Section 721 applies to caravans and motor caravans rather than builders' site electrical systems.",
    },
    [IET_CONSTRUCTION, IET_CURRENT_EDITION],
  ),
  reviewed(
    "quiz-29769",
    28,
    {
      A: "Chapter 31 addresses purposes, supplies and structure, not the detailed earthing and protective-conductor rules.",
      B: "Chapter 42 concerns protection against thermal effects and fire rather than earthing arrangements.",
      C: "Chapter 52 covers wiring systems and their selection and erection, not the earthing chapter.",
    },
    [IET_EARTHING_AND_BONDING, IET_CURRENT_EDITION],
  ),
  reviewed(
    "quiz-29769",
    29,
    {
      A: "Section 701 contains requirements for bathrooms and shower locations rather than embedded heating systems.",
      B: "Section 710 concerns medical locations, not floor or ceiling heating cable systems.",
      C: "Section 721 applies to caravans and motor caravans and does not cover embedded electric heating.",
    },
    [IET_CURRENT_EDITION, BSI_BS_7671],
  ),
  reviewed(
    "quiz-29769",
    30,
    {
      A: "Emergency escape lighting need not equal normal-lighting brightness; it must achieve the specified safe escape performance.",
      B: "No general rule defines escape lighting as one half of the original illumination level.",
      C: "Signs must be visible, but the system must also illuminate routes, level changes and safety equipment needed for escape.",
    },
    [GOV_EMERGENCY_LIGHTING],
  ),
];
