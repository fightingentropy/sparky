import eighteenthEditionData from "../exam-data/18th-edition.json";
import { applyExamExplanationEnhancements } from "../examExplanationEnhancements";
import type { Exam, ExamChoice, ExamQuestion } from "../exams/types";

const IET_CURRENT =
  "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/ensure-you-are-up-to-date-with-bs-7671/";
const IET_GENERAL =
  "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/general-faqs/";
const IET_EARTHING =
  "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/earthing-and-bonding-faqs/";
const IET_INSPECTION =
  "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/";
const IET_MODEL_FORMS =
  "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/model-forms/";
const IET_RCD =
  "https://electrical.theiet.org/wiring-matters/years/2022/91-july-2022/changes-to-rcd-testing-in-bs-76712018plusa22022/";
const IET_SOCKET_RCD =
  "https://electrical.theiet.org/wiring-matters/years/2022/91-july-2022/mythbusters-8-socket-outlets-must-be-protected-by-a-30-ma-rcd/";
const IET_FIRE =
  "https://electrical.theiet.org/wiring-matters/years/2022/90-may-2022/bs-7671-chapter-42-protection-against-fire/";
const IET_FIREFIGHTER =
  "https://electrical.theiet.org/media/1621/the-regulatory-reform-fire-safety-order-2005-bs-7671-2008-and-requirements-for-firefighters-switches.pdf";
const IET_SPD =
  "https://electrical.theiet.org/wiring-matters/years/2023/98-november-2023/surge-protective-devices-spds/";
const IET_ISOLATION =
  "https://electrical.theiet.org/wiring-matters/years/2023/94-march-2023/isolation-and-switching-for-mechanical-maintenance/";
const IET_SPECIAL_LOCATIONS =
  "https://electrical.theiet.org/media/1605/protective-measures-special-installations-or-locations-part-1.pdf";
const IET_BURIED_CABLES =
  "https://electrical.theiet.org/wiring-matters/years/2024/101-july-2024/buried-conduits-and-ducts/";
const IET_HIGHWAY_STREET_FURNITURE =
  "https://electrical.theiet.org/guidance-and-codes-of-practice/publications-by-category/electrical-safety/guide-to-highway-electrical-street-furniture/";
const IET_MEDICAL =
  "https://electrical.theiet.org/wiring-matters/years/2019/77-september-2019/brief-introduction-to-the-deployment-of-medical-it-systems/";
const HSE_EAWR = "https://www.hse.gov.uk/pubns/priced/hsr25.pdf";
const ESQCR = "https://www.legislation.gov.uk/uksi/2002/2665/contents";

const CHOICES: readonly ExamChoice[] = ["A", "B", "C", "D"];
const enhancedExam = applyExamExplanationEnhancements(
  eighteenthEditionData as unknown as Exam,
);
const variants = new Map(
  enhancedExam.sections
    .flatMap((section) => section.variants)
    .map((variant) => [variant.id, variant] as const),
);

export type ReviewedRationaleSet = {
  prompt: string;
  options: readonly string[];
  answer: string;
  rationales: Readonly<Record<string, string>>;
  sourceUrls: readonly string[];
};

function normalise(value: string): string {
  return value
    .normalize("NFKC")
    .replace(/\s+/g, " ")
    .trim()
    .toLocaleLowerCase("en-GB");
}

function signature(question: ExamQuestion): string {
  return JSON.stringify({
    prompt: normalise(question.prompt),
    options: Object.values(question.options).map(normalise).sort(),
    answer: normalise(question.options[question.answer]),
  });
}

function sourceUrlsFor(question: ExamQuestion): readonly string[] {
  const text = `${question.prompt} ${Object.values(question.options).join(" ")}`;
  if (/electricity at work|statutory|legal|regulation 14/i.test(text)) {
    return [HSE_EAWR];
  }
  if (/Electricity Safety, Quality|PEN conductors?.*prohibited/i.test(text)) {
    return [ESQCR, IET_EARTHING];
  }
  if (/medical|patient|group [012]/i.test(text)) return [IET_MEDICAL];
  if (/surge|transient|overvoltage|\bspd\b/i.test(text)) return [IET_SPD];
  if (/\brcd\b|residual current|socket-outlet/i.test(text)) {
    return [IET_RCD, IET_SOCKET_RCD];
  }
  if (/firefighters? switch/i.test(text)) return [IET_FIREFIGHTER];
  if (/fire|afdd|temperature|thermal|combust/i.test(text)) return [IET_FIRE];
  if (/isolation|isolator|switching|firefighter/i.test(text)) {
    return [IET_ISOLATION];
  }
  if (
    /bath|shower|swimming|pool|sauna|caravan|marina|agricultural|construction site/i.test(
      text,
    )
  ) {
    return [IET_SPECIAL_LOCATIONS];
  }
  if (/street furniture|highway power|outdoor lighting/i.test(text)) {
    return [IET_HIGHWAY_STREET_FURNITURE];
  }
  if (/buried|underground|duct|trench/i.test(text)) return [IET_BURIED_CABLES];
  if (
    /certificate|report|inspection|test|polarity|continuity|insulation resistance/i.test(
      text,
    )
  ) {
    return [IET_INSPECTION, IET_MODEL_FORMS];
  }
  if (
    /earth|bond|\bpen\b|\bcpc\b|protective conductor|fault loop|\bzs\b/i.test(
      text,
    )
  ) {
    return [IET_EARTHING];
  }
  if (/scope|bs ?7671|wiring regulations/i.test(text)) return [IET_GENERAL];
  return [IET_CURRENT];
}

type NumericValue = { value: number; unit: string };

function numericValue(text: string): NumericValue | undefined {
  if (/\b(?:BS|EN|IEC)\s*\d/i.test(text) || /^IP|^IK/i.test(text)) return;
  const match = text
    .replace(/,/g, "")
    .replace(/(\d)\s*o\s*C\b/gi, "$1 °C")
    .match(
      /(-?(?:\d+(?:\.\d+)?|\.\d+))\s*(mA|A|mV|V|kV|ms|s|min|mm²|mm2|mm|cm|m²|m2|m|MΩ|kΩ|Ω|ohms?|°C|%|litres?|kW|W|Hz)?\b/i,
    );
  if (!match) return;
  let value = Number(match[1]);
  let unit = (match[2] ?? "").toLowerCase();
  if (unit === "ma") {
    value /= 1000;
    unit = "a";
  } else if (unit === "mv") {
    value /= 1000;
    unit = "v";
  } else if (unit === "kv") {
    value *= 1000;
    unit = "v";
  } else if (unit === "ms") {
    value /= 1000;
    unit = "s";
  } else if (unit === "mm") {
    value /= 1000;
    unit = "m";
  } else if (unit === "cm") {
    value /= 100;
    unit = "m";
  } else if (unit === "kω") {
    value *= 1000;
    unit = "ω";
  } else if (unit === "mω") {
    value *= 1_000_000;
    unit = "ω";
  }
  return { value, unit };
}

function sameUnit(left: NumericValue, right: NumericValue): boolean {
  const canonical = (unit: string) =>
    unit.replace("mm2", "mm²").replace("m2", "m²").replace(/ohms?/, "ω");
  return canonical(left.unit) === canonical(right.unit);
}

function numericReason(
  question: ExamQuestion,
  wrongOption: string,
  correctOption: string,
): string | undefined {
  const wrong = numericValue(wrongOption);
  const correct = numericValue(correctOption);
  if (
    !wrong ||
    !correct ||
    !sameUnit(wrong, correct) ||
    wrong.value === correct.value
  ) {
    return;
  }

  const prompt = question.prompt;
  const isMinimum = /minimum|at least|not less than|lower limit/i.test(prompt);
  const isMaximum = /maximum|not exceeding|not exceed|up to|no more than/i.test(
    prompt,
  );
  const direction = wrong.value < correct.value ? "below" : "above";
  if (isMinimum && wrong.value < correct.value) {
    return `${wrongOption} is below the required ${correctOption} minimum, so it would not provide the stated safety margin.`;
  }
  if (isMinimum) {
    return `${wrongOption} exceeds the ${correctOption} minimum and may be acceptable in practice, but it is not the minimum value asked for.`;
  }
  if (isMaximum && wrong.value > correct.value) {
    return `${wrongOption} is above the permitted ${correctOption} maximum, so the required protection or performance could no longer be assured.`;
  }
  if (isMaximum) {
    return `${wrongOption} is more restrictive than the ${correctOption} limit and therefore is not the maximum value requested.`;
  }
  return `${wrongOption} is ${direction} the applicable ${correctOption} value for the stated conditions.`;
}

function ipReason(
  question: ExamQuestion,
  wrongOption: string,
  correctOption: string,
): string | undefined {
  if (!/^IP/i.test(wrongOption) || !/^IP/i.test(correctOption)) return;
  const minimum = /minimum|at least|specific ip|conform to/i.test(
    question.prompt,
  );
  if (minimum) {
    return `${wrongOption} specifies a different or insufficient ingress-protection level for this zone; ${correctOption} is the minimum that addresses the stated access or water exposure.`;
  }
  return `${wrongOption} describes a different ingress-protection duty from the one created by this location and exposure.`;
}

const PURPOSES: readonly [RegExp, string][] = [
  [
    /\bRCD\b|residual current/i,
    "detects imbalance between live-conductor currents and provides residual-current protection",
  ],
  [
    /\bRCBO\b|BS EN 61009/i,
    "combines residual-current and overcurrent protection in one device",
  ],
  [
    /\bMCB\b|circuit breaker|BS EN 60898/i,
    "opens for overcurrent and short-circuit conditions; it does not perform every other protective function",
  ],
  [
    /semi.?enclosed|BS 3036|rewireable fuse/i,
    "is a fuse-based overcurrent device whose thermal behaviour requires its own rating factors",
  ],
  [
    /supplementary bonding/i,
    "limits potential differences between simultaneously accessible conductive parts; it is not a substitute for the measure asked about",
  ],
  [
    /main bonding/i,
    "connects extraneous-conductive-parts to the main earthing terminal so imported Earth potentials are controlled",
  ],
  [
    /electrical separation/i,
    "protects a separated circuit by isolating it from Earth and other circuits, not by the mechanism in the stem",
  ],
  [
    /\bSELV\b/i,
    "uses a safety-isolated extra-low-voltage source with neither pole connected to Earth",
  ],
  [
    /\bPELV\b/i,
    "uses protective extra-low voltage and may have an intentional Earth connection",
  ],
  [
    /reduced low voltage/i,
    "reduces shock risk by using a centre-tapped supply, commonly 55 V to Earth on a 110 V system",
  ],
  [
    /extra-low voltage/i,
    "describes a voltage band; it does not by itself establish the complete SELV or PELV protective arrangement",
  ],
  [
    /basic protection|insulation of live parts|barrier|enclosure|obstacle|placing out of reach/i,
    "prevents contact with live parts in normal, fault-free service",
  ],
  [
    /fault protection|automatic disconnection/i,
    "limits danger after a fault by operating the protective system within the required time",
  ],
  [
    /Class II|double insulation/i,
    "uses basic insulation plus supplementary or reinforced insulation without relying on a protective-earth connection",
  ],
  [
    /protective conductor|\bCPC\b/i,
    "carries fault current and connects exposed-conductive-parts to the earthing system; it is not a normal load conductor",
  ],
  [
    /neutral conductor|neutral bar/i,
    "is part of the normal current return path and remains a live conductor",
  ],
  [
    /line conductor|phase conductor/i,
    "carries supply voltage and load current, rather than performing an earthing or bonding function",
  ],
  [
    /earth electrode|earth plate/i,
    "connects the installation earthing system to the general mass of Earth",
  ],
  [
    /functional switching/i,
    "controls equipment during normal operation; it is not intended to make every conductor safe for work",
  ],
  [
    /emergency switching/i,
    "rapidly removes a danger in an emergency; it is a different duty from routine control or maintenance isolation",
  ],
  [
    /isolation|isolator/i,
    "disconnects the relevant live conductors so work can be carried out safely",
  ],
  [
    /firefighter/i,
    "is a specialist external control for high-voltage luminous-discharge or similar installations used by firefighters",
  ],
  [
    /Electrical Installation Certificate/i,
    "certifies the design, construction, inspection and testing of a new installation or new circuit",
  ],
  [
    /Minor.*Works/i,
    "records an addition or alteration that does not include provision of a new circuit",
  ],
  [
    /condition report|periodic inspection report|EICR/i,
    "reports the condition of an existing installation for continued service rather than certifying new work",
  ],
  [
    /schedule of test results|test sheet/i,
    "records measurements but is only one schedule, not the complete certification package",
  ],
  [
    /polarity/i,
    "confirms that single-pole devices and centre contacts are connected in the line conductor as intended",
  ],
  [
    /insulation resistance/i,
    "assesses insulation between conductors and Earth; it does not establish every other circuit characteristic",
  ],
  [
    /continuity/i,
    "proves that a conductor path is electrically continuous; it does not measure insulation or fault-loop performance",
  ],
  [
    /earth fault loop|\bZs\b|\bZe\b/i,
    "concerns the impedance of the fault-current return path and the resulting disconnection performance",
  ],
  [
    /prospective.*current|short.?circuit current/i,
    "sets the fault current a protective device must safely interrupt, rather than the circuit's normal demand",
  ],
  [
    /diversity|maximum demand/i,
    "estimates simultaneous normal loading; it does not prove fault protection or equipment condition",
  ],
  [
    /power factor/i,
    "describes the relationship between real and apparent power and affects current and losses",
  ],
  [
    /voltage drop/i,
    "controls the voltage available at the load under normal current; it is separate from fault-loop disconnection",
  ],
  [
    /BS 1363/i,
    "specifies the UK 13 A fused plug-and-socket system; it does not establish the industrial, installation or positioning requirement in the stem",
  ],
  [
    /BS EN 60309/i,
    "covers industrial plugs, socket-outlets and couplers, not domestic accessories or protective devices",
  ],
  [/BS EN 50085/i, "covers cable-trunking and cable-ducting systems"],
  [
    /BS EN 60228/i,
    "classifies conductors used in insulated cables by material, construction and resistance",
  ],
  [
    /conduit systems/i,
    "are covered by their conduit-system standard rather than the trunking, conductor or plug standard named in the stem",
  ],
  [
    /industrial plugs|couplers and socket/i,
    "belong to the industrial connection-system family rather than cable containment or conductor construction",
  ],
  [
    /\btrunking\b|\bducting\b/i,
    "provides cable containment and mechanical routing; it does not perform the function of a protective device",
  ],
  [
    /surge|SPD|transient overvoltage/i,
    "limits short-duration overvoltage energy; it does not provide overload, residual-current or basic-contact protection",
  ],
  [
    /AFDD|arc fault/i,
    "detects characteristic dangerous arcing; it is not a replacement for all overcurrent and shock protection",
  ],
  [
    /autotransformer/i,
    "uses a common winding and therefore does not provide the galvanic separation of a separate-winding transformer",
  ],
  [
    /\bUPS\b|uninterruptible/i,
    "maintains supply to its load when the normal source fails and has its own product-safety requirements",
  ],
  [
    /\bstar\b/i,
    "connects three winding ends at a common neutral point and gives phase voltage equal to line voltage divided by √3",
  ],
  [
    /delta/i,
    "connects windings end-to-end without a neutral point, so phase voltage equals line voltage",
  ],
  [
    /marina|pontoon/i,
    "is a wet location with shore-supply, corrosion and impact risks addressed by its special-location requirements",
  ],
  [
    /swimming pool|basin/i,
    "has zones defined around the water where reduced voltage, bonding and ingress protection control elevated shock risk",
  ],
  [
    /bath|shower/i,
    "uses zones around the bath or shower to set equipment, RCD and ingress-protection requirements",
  ],
  [
    /sauna/i,
    "has elevated temperature and moisture zones that require suitably rated equipment and wiring",
  ],
  [
    /agricultural|livestock/i,
    "adds moisture, corrosive substances, fire and animal-contact risks beyond those of an ordinary dry location",
  ],
  [
    /construction site|demolition site/i,
    "is a temporary, mechanically harsh environment governed by Section 704",
  ],
  [
    /medical|patient/i,
    "requires measures selected for the medical-location group and the consequence of supply or protection failure",
  ],
  [
    /caravan|pitch/i,
    "uses special supply, isolation and socket requirements because the unit is mobile and connected outdoors",
  ],
  [
    /earth fault/i,
    "means a live conductor has contacted Earth or an earthed conductive part; it is not a line-to-neutral short circuit or a normal overload",
  ],
  [
    /open circuit/i,
    "means the intended current path is broken, so it does not describe excessive current in an intact circuit",
  ],
  [
    /overload fault|overload current|overload activation/i,
    "is an overcurrent in an electrically sound circuit caused by excessive load, not a negligible-impedance fault",
  ],
  [
    /fault contact|exposed conductive parts made live/i,
    "describes contact danger after insulation failure, whereas basic contact is access to a live part in normal service",
  ],
  [
    /faulty insulation|breakdown of.*insulation/i,
    "is an insulation-condition issue and must be established by inspection or insulation testing, not assumed from another circuit result",
  ],
  [
    /high earth leakage/i,
    "describes current flowing to Earth in service and does not by itself identify direct access to a live element",
  ],
  [
    /BS 1361|BS 88|cartridge fuse/i,
    "is an overcurrent fuse standard, not the product standard for the equipment named in the stem",
  ],
  [
    /BS 60439|BSEN 61534/i,
    "relates to an assembly or powertrack family rather than a fire-survival cable test",
  ],
  [
    /BS EN 60742/i,
    "was associated with isolating and safety-isolating transformers, not residual-current devices",
  ],
  [
    /BS EN 60947/i,
    "covers low-voltage switchgear and controlgear; only its specific product parts apply to devices within that family",
  ],
  [
    /IEC 5266/i,
    "is not the fire-survival cable test reference identified by the question",
  ],
  [
    /BSEN 60309/i,
    "covers industrial plugs, socket-outlets and couplers rather than busbar trunking",
  ],
  [
    /BSEN 60898/i,
    "covers circuit-breakers for household and similar installations rather than busbar trunking",
  ],
  [
    /IEC 1362/i,
    "is not the applicable industrial plug-and-socket product designation; the recognised series is BS EN 60309",
  ],
  [
    /Class I/i,
    "relies on a protective-earth connection for fault protection and therefore is not the preferred double-insulated PV arrangement",
  ],
  [
    /XLPE/i,
    "identifies a cable-insulation material, not the equipment protection class requested",
  ],
  [
    /potentiometer/i,
    "is a variable resistor and cannot provide the safe electrical separation required of an ELV source",
  ],
  [
    /semiconductor device/i,
    "can control voltage electronically but does not inherently provide the protective separation required of the source",
  ],
  [
    /step.?down transformer|single phase generator|\bgenerator\b/i,
    "only qualifies when its construction and separation meet the source requirements; its nominal voltage alone is not enough",
  ],
  [
    /disconnector/i,
    "provides isolation but is not designed to interrupt overload or short-circuit current automatically",
  ],
  [
    /linked switch/i,
    "opens poles together for switching but has no inherent overcurrent tripping element",
  ],
  [
    /plug and socket/i,
    "provides a detachable connection; suitability for isolation or emergency switching depends on rating, accessibility and duty",
  ],
  [
    /design engineer|installation designer/i,
    "is responsible for design decisions but does not automatically become the person who performed and signs a verification report",
  ],
  [
    /person ordering|client/i,
    "commissions and receives the work but does not sign as the competent inspector unless that person actually carried it out",
  ],
  [
    /insurance company|local authority|main contractor|supply company|electricity supplier/i,
    "may have an administrative interest but is not automatically the person to whom BS 7671 assigns this technical decision or record",
  ],
  [
    /NICEIC.*sheet/i,
    "is a scheme-provider form description; the required package is the BS 7671 certificate with its inspection and test schedules",
  ],
  [
    /changes in ownership|repair over the last five years|original contract/i,
    "is an administrative or maintenance-history matter, not the existing electrical defect that must be recorded with the new work",
  ],
  [
    /periodic test report/i,
    "reports an existing installation's condition and is not a design deliverable for a new installation",
  ],
  [
    /ordinary person/i,
    "has neither electrical skill nor electrical instruction and therefore cannot rely on measures reserved for controlled skilled access",
  ],
  [
    /skilled person|qualified electrician|competent person/i,
    "has relevant knowledge and experience; that competence does not change the physical requirement being asked about",
  ],
  [
    /instructed person/i,
    "has been advised or supervised to avoid electrical danger but is not equivalent to an unrestricted ordinary user",
  ],
  [
    /Building Regulations|Building Standards Regulations/i,
    "is statutory building legislation, unlike the non-statutory technical standard BS 7671",
  ],
  [
    /Electricity at Work Regulations/i,
    "is statutory workplace law and can be enforced, whereas BS 7671 is a non-statutory standard",
  ],
  [
    /COSHH/i,
    "controls health risks from hazardous substances, not the electrical installation requirement in the stem",
  ],
  [
    /PUWER/i,
    "governs safe work-equipment provision and use, not the detailed BS 7671 installation rule being tested",
  ],
  [
    /aircraft|ship|railway traction|rolling stock|mines|quarr(?:y|ies)|distributor.?s equipment|public electricity supply/i,
    "is wholly or partly governed by specialist legislation or standards and is excluded from the ordinary BS 7671 installation scope described",
  ],
  [
    /electrical equipment of machines|manufacture of electrical equipment/i,
    "belongs to machine or product standards; BS 7671 covers the installation supplying it, not manufacture of the product itself",
  ],
  [
    /oil rig|offshore/i,
    "is subject to specialist offshore requirements rather than being an ordinary land-based installation example",
  ],
  [
    /cloakroom|office|toilet|domestic dwelling|factory unit/i,
    "is an ordinary permanent-use space and does not have the temporary construction-site conditions addressed by Section 704",
  ],
  [
    /physiotherapy|hydrotherapy|examination or treatment room/i,
    "describes a use of a room, but its medical-location group depends on applied parts and the consequence of supply failure",
  ],
  [
    /ceiling.*cord.*switch|shaver socket/i,
    "is not generally suitable inside the hottest sauna zone unless specifically designed and located for that zone",
  ],
  [
    /zone 0|zone O|interior of.*pool|within.*bath/i,
    "is the space inside the basin or bath where the most restrictive zone requirements apply",
  ],
  [
    /zone 2|outside zone 1|0\.60 ?m/i,
    "describes the outer adjacent zone, not equipment positioned in the zone stated in the stem",
  ],
  [
    /outside of zones/i,
    "ignores that the stated height and horizontal position place the equipment within the defined special-location zone",
  ],
  [
    /reinforced insulation/i,
    "provides enhanced insulation but does not replace a required bonding connection for an accessible metallic sheath",
  ],
  [
    /not be earthed|not be used/i,
    "would remove or prohibit the metallic path instead of bonding it so dangerous potential differences are controlled",
  ],
  [
    /AH\d|AG\d|AP\d|AR\d|AN\d|\bAB\b/i,
    "is an external-influence code for a different environmental characteristic or severity from the one named",
  ],
  [
    /capability of persons/i,
    "is coded under the BA family, not the BE family for processed or stored materials",
  ],
  [
    /conditions of evacuation/i,
    "belongs to the BD external-influence family rather than the material-risk code BE",
  ],
  [
    /movement of air|high wind/i,
    "concerns air movement, not the nature or fire behaviour of processed and stored materials",
  ],
  [
    /load current|design current|current carrying capacity/i,
    "is a loading or conductor-capacity quantity; it is not interchangeable with the specific corrected or protective-device value requested",
  ],
  [
    /method of installation/i,
    "affects cable current capacity and mechanical protection but does not determine every supply or protective characteristic",
  ],
  [
    /earthing arrangement|method of earthing/i,
    "defines the source and exposed-part relationship to Earth; it does not replace the separate fault-current or equipment-selection check",
  ],
  [
    /number of ways|socket outlets|distribution board/i,
    "is determined later from the load and circuit arrangement, not used as the incoming supply characteristic",
  ],
  [
    /manufacturer.?s information/i,
    "supports equipment selection but is not itself a characteristic of the incoming electrical supply",
  ],
  [
    /permission from|enquiry to.*council|architect/i,
    "is an administrative source and cannot establish the measured or declared electrical characteristic required",
  ],
  [
    /vibration/i,
    "is a mechanical external influence and not the electromagnetic emission considered under voltage-disturbance compatibility",
  ],
  [
    /weather conditions|water|dust/i,
    "is an environmental influence addressed through equipment selection and IP rating, not the electrical effect named in the stem",
  ],
  [
    /allow easier access|more even distribution|expansion/i,
    "may influence layout, but it is not the specific circuit-division safety or EMC objective named",
  ],
  [
    /fuse discrimination|unauthorised interference|wiring impracticability/i,
    "is not an objective achieved merely by dividing the installation into appropriate circuits",
  ],
  [
    /radial principle|ring principle|bands of circuits|lighting and power/i,
    "describes a circuit-layout choice; safe division instead follows hazards, continuity and maintenance needs rather than one compulsory topology",
  ],
  [
    /fluorescent luminaires|variety of luminaires/i,
    "concerns the type of lighting load and does not provide continuity when one lighting circuit trips",
  ],
  [
    /reduce the load|make the installation process easier/i,
    "is not the safety reason for separate lighting circuits; circuit division prevents one fault blacking out the whole dwelling",
  ],
  [
    /CCTV|graffiti/i,
    "may deter damage or vandalism but does not provide the required electrical shock protection",
  ],
  [
    /high voltage is present|cleaned regularly|arrays are fragile/i,
    "does not warn that PV d.c. conductors can remain live after isolation of the a.c. supply",
  ],
  [
    /black|brown|blue|grey|green/i,
    "is a conductor colour with a prescribed identification use; choosing it for another function creates dangerous ambiguity",
  ],
  [
    /Danger|Safety.*Connection|Do Not Remove/i,
    "uses wording that differs from the prescribed safety notice, so the protective connection may not be identified consistently",
  ],
  [
    /bracket|ladder|tray/i,
    "is a different cable-support component; it does not match the regularly spaced retaining-element definition of a cable cleat",
  ],
  [
    /emergency$/i,
    "addresses an immediate danger, not planned non-electrical work requiring prevention of mechanical movement",
  ],
  [
    /mechanical movement/i,
    "controls hazardous motion during non-electrical work, whereas electrical maintenance requires secure isolation of the electrical supply",
  ],
  [
    /safe operation/i,
    "is general functional control and does not by itself provide secure isolation for the work described",
  ],
  [
    /automatic in operation|automatic reclos/i,
    "could re-energise equipment without the worker's control and is therefore unsuitable for secure maintenance isolation",
  ],
  [
    /always adjacent|always placed next/i,
    "is unnecessarily absolute: an isolator may be remote if it can be secured against inadvertent operation",
  ],
  [
    /thermal insulating material|screed|below the surface/i,
    "describes burial or covering but does not by itself provide the sensing and protection needed to prevent overheating damage",
  ],
  [
    /contact.*neutral|live and neutral/i,
    "describes normal current-carrying conductors and must not be used as an earthing or protective bond",
  ],
  [
    /battery terminals/i,
    "is part of the energy-source connection and is not the required equipotential link to the vehicle chassis",
  ],
  [
    /energised on the a\.c\. side|low voltage supply|listed countries/i,
    "does not address that PV modules generate d.c. whenever illuminated, even when the a.c. isolator is open",
  ],
  [
    /visual inspection prior to testing|inventory|warning notice/i,
    "is useful evidence but cannot replace checking records and consulting the responsible person to identify all test-vulnerable equipment",
  ],
  [
    /switches are off|supply is connected|disconnect all fixed appliances/i,
    "is not the pre-inspection agreement on extent, access and safety; indiscriminate switching can disrupt the installation or miss hazards",
  ],
  [
    /only British Standard equipment|painted orange|ring final.*correct/i,
    "is too narrow or irrelevant to the inspection's purpose of verifying the complete installation against the design and safety requirements",
  ],
  [
    /electrolytic corrosion|earth leakage|minimised|maximum current.*earth/i,
    "does not state the bonding objective, which is to limit touch voltage by keeping accessible metalwork at substantially the same potential",
  ],
  [
    /outside the building|supply side|within 6 m/i,
    "places the gas bond too far away or on the wrong side of the meter; it should normally be near the point of entry on the consumer side",
  ],
  [
    /half the number|total number|one twin/i,
    "confuses the unfused-spur limits with a fused connection unit, whose downstream socket count is governed by the fuse and design load",
  ],
  [
    /current rating of the fuse|operating current of the fuse|nominal current setting/i,
    "is a protective-device quantity; it must be coordinated with design current and conductor capacity rather than substituted for either",
  ],
  [
    /Ib > Iz|In > Iz|I2 > 1\.45 Iz|greater than Iz/i,
    "reverses an overload-coordination inequality and could allow normal or tripping current to exceed the conductor's safe capacity",
  ],
  [
    /0\.725 times.*fuse|0\.725 times.*design|same rating as.*design/i,
    "misapplies the BS 3036 derating relationship; the conductor capacity must be increased relative to the fuse rating",
  ],
  [
    /feed an immersion|supply a cooker|area of 200/i,
    "places a dedicated or excessive load on a general socket ring rather than applying the conventional ring-final design limits",
  ],
  [
    /general purpose fuse/i,
    "provides overcurrent protection but cannot give the 30 mA residual-current additional protection required outdoors",
  ],
  [
    /key switch|removable handle/i,
    "can be defeated, removed or left in a state that is not obvious, so it is unsuitable as the readily operable emergency stop described",
  ],
  [
    /only a fuse|no controlling switch|single-pole switch/i,
    "does not disconnect every live connection of the step-up autotransformer and can leave part of the winding energised",
  ],
  [
    /mounted 50 ?mm|flexible cord.*50 ?mm/i,
    "misstates the mounting requirement; the accessory position must avoid mechanical damage to the plug and flexible cord",
  ],
  [
    /left unearthed/i,
    "would leave a metal enclosure capable of becoming live without an effective fault-current path",
  ],
  [
    /ELV circuit conductors/i,
    "could compromise segregation between voltage bands unless the insulation and arrangement meet the higher-voltage requirements",
  ],
  [
    /two-pin type/i,
    "is not enough to prevent connection to another voltage system; SELV plugs and sockets must be non-interchangeable and have no protective contact",
  ],
  [
    /circuit voltage.*250|steel conduit/i,
    "does not satisfy the controlled-access condition for obstacles; voltage level or containment alone cannot authorise their use",
  ],
  [
    /forward\/reverse|drills into|tracking/i,
    "describes interlocking failure, direct contact or an insulation fault rather than sustained excessive load current in an otherwise sound circuit",
  ],
  [
    /earth tape|lead sheath|welded reinforcement/i,
    "can serve as an electrode only when its material, corrosion resistance, dimensions and accessibility meet the electrode requirements",
  ],
  [
    /gas pipe|oil pipe|metal fences/i,
    "is a service or structure and must not be deliberately used as the installation's earth electrode",
  ],
];

function purposeFor(option: string): string | undefined {
  return PURPOSES.find(([pattern]) => pattern.test(option))?.[1];
}

function questionSpecificTeaching(
  question: ExamQuestion,
  option: string,
): string | undefined {
  const prompt = question.prompt;

  if (/BS EN 60228 relates to/i.test(prompt)) {
    if (/trunking|ducting/i.test(option))
      return `BS EN 50085 covers cable-trunking and cable-ducting systems.`;
    if (/conduit/i.test(option))
      return `The BS EN 61386 series covers conduit systems, not insulated-cable conductors.`;
    return `BS EN 60309 covers industrial plugs, socket-outlets and couplers.`;
  }
  if (/high integrity protective conductor/i.test(prompt)) {
    if (/isolator/i.test(option))
      return `An isolator disconnects the live supply for maintenance but does not provide a second or reinforced protective-conductor path if the CPC connection fails.`;
    if (/insulated conduit/i.test(option))
      return `Insulated conduit provides mechanical containment but cannot carry fault current or preserve the protective path after a CPC connection fails.`;
    return `A CPC smaller than 1 mm² has neither the required cross-sectional area nor duplicated connections for a circuit with an 18 mA normal protective-conductor current.`;
  }
  if (/insulation resistance test.*3-phase 400 V/i.test(prompt)) {
    if (/250 V a\.c/i.test(option))
      return `Insulation resistance is tested with a steady d.c. voltage, not a.c.; this option also accepts only 0.5 MΩ instead of the required 1 MΩ.`;
    if (/500 V d\.c.*0\.5 M/i.test(option))
      return `The 500 V d.c. test voltage is correct, but 0.5 MΩ is only half the required 1 MΩ minimum for this low-voltage circuit.`;
    return `An 800 V test exceeds the specified 500 V d.c. level and could stress connected equipment, while 0.5 Ω is vastly below the required 1 MΩ insulation resistance.`;
  }
  if (/requirements of Section 704/i.test(prompt)) {
    if (/Cloakrooms/i.test(option))
      return `A permanent cloakroom has none of the temporary wiring, harsh handling or changing site conditions covered by Section 704.`;
    if (/Offices/i.test(option))
      return `An ordinary permanent office is covered by the general rules; only temporary site offices serving construction or demolition work fall within the Section 704 installation.`;
    return `Permanent toilets are covered by the general installation rules; Section 704 addresses temporary construction and demolition site installations.`;
  }
  if (/Construction site (?:special )?regulations apply to/i.test(prompt)) {
    if (/offices/i.test(option))
      return `Administrative site offices are excluded from Section 704 because their wiring is used like an ordinary office rather than as part of the construction work.`;
    if (/canteens/i.test(option))
      return `A site canteen is an administrative welfare location and is not itself construction or demolition work covered by Section 704.`;
    return `Site toilets are welfare accommodation, not the earthworks, building work or demolition activity to which the special site rules apply.`;
  }
  if (/sets of regulations is non-statutory/i.test(prompt)) {
    if (/Building/i.test(option))
      return `Building Regulations are legislation and can impose legal requirements on building work; they are not a voluntary technical standard.`;
    if (/Electricity at Work/i.test(option))
      return `The Electricity at Work Regulations 1989 are statutory workplace law enforced through legal duties on employers and duty holders.`;
    return `The Electricity Safety, Quality and Continuity Regulations are statutory rules governing electricity networks, supplies and earthing arrangements.`;
  }
  if (
    /BS\s*7671.*(?:NOT apply|does not apply|excludes)|not covered by BS\s*7671|IEE Regulations NOT apply/i.test(
      prompt,
    )
  ) {
    if (/Agricultural/i.test(option))
      return `Agricultural and horticultural installations are covered by Section 705 because livestock, moisture, corrosive substances and fire create special risks.`;
    if (/Caravan/i.test(option))
      return `Caravans and caravan parks are covered by Sections 708 and 721, which address their outdoor connections and mobile metal structures.`;
    if (/Construction sites/i.test(option))
      return `Construction and demolition site installations are covered by Section 704 because temporary wiring and harsh handling increase shock and damage risk.`;
    if (/Marinas/i.test(option))
      return `Marinas and similar shore-supply locations are covered by Section 709 because water, corrosion and vessel connections need special measures.`;
    if (/Fairgrounds|Circuses/i.test(option))
      return `Temporary installations at fairgrounds, amusement parks and circuses are covered by Section 740.`;
    if (/Photovoltaic|Solar photovoltaic/i.test(option))
      return `Solar photovoltaic installations are expressly covered by Section 712, including their d.c. wiring and isolation.`;
    if (/Residential premises/i.test(option))
      return `Residential premises are ordinary low-voltage installations within BS 7671's core scope.`;
    if (/Industrial premises/i.test(option))
      return `Industrial premises remain within BS 7671 for their low-voltage fixed installations, even though machinery may also have product standards.`;
    if (/Low voltage generating sets/i.test(option))
      return `Low-voltage generating sets connected to installations are covered by Section 551.`;
  }
  if (/listed under exclusions from the scope of BS 7671/i.test(prompt)) {
    if (/Marinas/i.test(option))
      return `Marinas are covered by Section 709 because shore supplies, water and corrosion need special installation measures.`;
    if (/Saunas/i.test(option))
      return `Saunas are covered by Section 703, which defines temperature zones and equipment requirements around sauna heaters.`;
    return `Swimming pools are covered by Section 702, with zones, SELV and ingress-protection requirements controlling the increased shock risk.`;
  }
  if (
    /BS\s*7671 Wiring Regulations apply to the design, erection and verification of/i.test(
      prompt,
    )
  ) {
    if (/ships/i.test(option))
      return `Shipboard electrical equipment covered by its marine standard is outside ordinary BS 7671 installation scope.`;
    if (/Railway/i.test(option))
      return `Railway traction, rolling stock and signalling use specialist railway standards rather than BS 7671.`;
    if (/mines/i.test(option))
      return `Aspects of mines already controlled by statutory mining regulations are excluded from BS 7671 to avoid overlapping safety regimes.`;
    return `Aircraft electrical equipment uses specialist aviation standards and is outside BS 7671's ordinary installation scope.`;
  }
  if (/thermal insulation exceeds 100mm.*installation method/i.test(prompt)) {
    if (/^3$/.test(option))
      return `Installation method 3 describes a cable-in-conduit arrangement and does not represent flat twin-and-earth covered by deep ceiling insulation.`;
    if (/^20$/.test(option))
      return `Installation method 20 is a different supported wiring arrangement and does not account for more than 100 mm of insulation restricting heat loss above the ceiling.`;
    return `Installation method 100 covers the related ceiling arrangement with thermal insulation not exceeding 100 mm; once the insulation is deeper, method 101 applies.`;
  }
  if (/Non[- ]sheathed cables for fixed wiring/i.test(prompt)) {
    if (/Dry conditions/i.test(option))
      return `A dry room reduces moisture exposure but gives insulated unsheathed conductors no mechanical enclosure or protection from contact.`;
    if (/Sub-zero/i.test(option))
      return `Low temperature is an environmental condition for cable selection; it does not provide the conduit or trunking that non-sheathed conductors require.`;
    if (/Trenches/i.test(option))
      return `A trench is only a route in the ground, not an enclosure; non-sheathed conductors still require a suitable conduit, duct or trunking system.`;
    if (/Domestic/i.test(option))
      return `A dwelling is a type of premises, not a protective enclosure; insulated unsheathed conductors still need conduit or trunking there.`;
    if (/factory/i.test(option))
      return `A factory location may increase mechanical risk but does not contain the conductors; suitable conduit or trunking is still required.`;
    return `An office block is a premises type and provides no mechanical containment for insulated unsheathed conductors.`;
  }
  if (/regular maintenance.*NOT an essential requirement/i.test(prompt)) {
    if (/Periodic inspection/i.test(option))
      return `Safe access for periodic inspection and testing is essential because hidden deterioration cannot be managed if the installation cannot be examined and measured.`;
    if (/Protective measures/i.test(option))
      return `Maintenance must preserve earthing, bonding, insulation and protective-device operation; otherwise the installation's safety measures can silently become ineffective.`;
    return `Sustaining equipment reliability is a core purpose of maintenance because deterioration can cause loss of service, overheating or a dangerous failure.`;
  }
  if (/arrangements complies.*Wiring Regulations/i.test(prompt)) {
    if (/off position is at the bottom/i.test(option))
      return `A firefighters' switch must have OFF uppermost so firefighters can identify and operate it consistently; red colouring alone does not cure the reversed action.`;
    if (/fixed 2 m/i.test(option))
      return `Two metres is within the permitted height, but this arrangement still puts OFF at the bottom instead of the required uppermost position.`;
    return `OFF is correctly uppermost here, but four metres exceeds the 2.75 m maximum and would put the switch out of readily accessible reach.`;
  }
  if (/^A system is defined as/i.test(prompt)) {
    if (/consumer.?s terminals/i.test(option))
      return `${option} marks the handover boundary between the distributor and consumer; it is not an energy source plus installation.`;
    if (/distribution cables/i.test(option))
      return `${option} is only the network conductors that deliver energy and does not include the source-and-installation combination.`;
    return `${option} adds metering to an installation but still omits the single source of electrical energy required by the definition.`;
  }
  if (/Regulation 411\.3\.3 exception permit omission/i.test(prompt)) {
    if (/supervised/i.test(option))
      return `${option} relies on the former supervision exception, which the current wording removed; the decision now needs a documented risk assessment involving a skilled person electrically.`;
    if (/BS EN 60309/i.test(option))
      return `${option} identifies an industrial plug-and-socket product family, but product compliance alone does not demonstrate that omitting 30 mA additional protection is safe at this location.`;
    return `${option} is an ADS fault-protection time for certain circuits; it does not replace the separate 30 mA additional protection required for socket-outlets.`;
  }
  if (/Multicore cables on a perforated tray/i.test(prompt)) {
    if (option === "A")
      return `Reference method A covers cable enclosed in conduit in a thermally insulated wall, where heat dissipation is restricted.`;
    if (option === "C")
      return `Reference method C is the clipped-direct or equivalent surface method, with cable supported directly on a surface.`;
    return `Reference method G covers spaced single-core cables in free air; it is not the multicore-on-tray arrangement classified as method E.`;
  }
  if (/metallic covering or sheath.*zones 0, 1 or 2/i.test(prompt)) {
    if (/reinforced insulation/i.test(option))
      return `Reinforced insulation can protect live parts, but it does not keep an accessible metallic sheath at the same potential as other bonded metalwork.`;
    if (/Not be earthed/i.test(option))
      return `Leaving the sheath unearthed can let it float to a dangerous touch voltage; it must connect to the local supplementary bonding system.`;
    return `A metallic sheath is permitted in these pool zones when it is correctly connected to supplementary bonding, so prohibiting it altogether is unnecessarily restrictive.`;
  }
  if (/zone 1.*water jets.*cleaning/i.test(prompt)) {
    if (/IPX4/i.test(option))
      return `IPX4 covers splashing water only, so it is insufficient where cleaning jets require the IPX5 water-jet test.`;
    if (/IPX8/i.test(option))
      return `IPX8 addresses continuous immersion under agreed conditions; it does not state the specified jet-resistance rating or the minimum asked for.`;
    return `IPXXB is a finger-access protection code and contains no water-ingress rating, so it cannot demonstrate resistance to cleaning jets.`;
  }
  if (/junction box.*zone 1.*swimming pool/i.test(prompt)) {
    if (/RCD/i.test(option))
      return `An RCD limits the duration of leakage current but does not provide the extra-low voltage and safety separation required for a junction box in pool zone 1.`;
    if (/IPX2/i.test(option))
      return `IPX2 protects only against dripping water and is inadequate for splashing and wet contact in pool zone 1.`;
    return `A gasket may improve water sealing, but it does not reduce touch voltage or create the electrically separated SELV supply required in this zone.`;
  }
  if (
    /charts and diagrams.*inspection and test|included on charts and diagrams/i.test(
      prompt,
    )
  ) {
    if (/original contract/i.test(option))
      return `Original contract details are historical commercial information and do not show the installation's present isolation and switching arrangement.`;
    if (/portable equipment/i.test(option))
      return `Portable-equipment locations belong in an asset or in-service inspection register, not the fixed-wiring circuit chart.`;
    if (/total number of outlets/i.test(option))
      return `An outlet count gives no circuit identification, protective-device rating, conductor details or switching arrangement needed for safe inspection.`;
  }
  if (/excluded as a protective earth electrode/i.test(prompt)) {
    if (/Earth plates/i.test(option))
      return `Purpose-made earth plates are recognised electrodes when correctly sized, buried and protected against corrosion.`;
    if (/structural metalwork/i.test(option))
      return `Underground structural metal embedded in foundations can form a durable foundation electrode when its continuity and corrosion performance are suitable.`;
    return `Welded reinforcement embedded in concrete in contact with Earth is a recognised foundation-electrode form when reliable connections are provided.`;
  }
  if (/may not be used as an earth electrode/i.test(prompt)) {
    if (/Earth plates/i.test(option))
      return `A purpose-made earth plate is a recognised electrode when it has adequate area, corrosion resistance and contact with the soil.`;
    if (/structural steel/i.test(option))
      return `Buried structural steelwork can serve as a foundation electrode when electrical continuity, corrosion resistance and effective contact with Earth are assured.`;
    return `Welded reinforcement in concrete can form a reliable foundation electrode when the steel is electrically continuous and a durable connection is provided.`;
  }
  if (/BS EN 61439.*EV installation/i.test(prompt)) {
    if (/high voltage/i.test(option))
      return `BS EN 61439 is a low-voltage switchgear-and-controlgear assembly series, so incorporation into a high-voltage assembly is outside its scope.`;
    if (/located inside/i.test(option))
      return `Indoor location alone does not make a charging point part of a BS EN 61439 assembly; physical incorporation into a low-voltage assembly is the trigger.`;
    return `Outdoor location changes environmental protection but does not by itself trigger BS EN 61439; incorporation into a low-voltage assembly does.`;
  }
  if (/Which of the following statements is correct/i.test(prompt)) {
    if (/PEN conductor/i.test(option))
      return `A PEN combines neutral and protective functions, so switching it can remove the earth reference and drive exposed metalwork towards line voltage.`;
    if (/switching of the neutral.*always required/i.test(option))
      return `Neutral switching in TN-S or TN-C-S is not universally required; it depends on the supply arrangement, isolation duty and whether the neutral can safely remain connected.`;
    if (/residual electrical energy/i.test(option))
      return `Stored charge can remain dangerous after isolation, so suitable discharge means and a warning are required rather than omitted.`;
  }
  if (/Undervoltage protection is required/i.test(prompt)) {
    return `${option} describes a trip or stalled condition, not the danger created when voltage returns; undervoltage protection is needed to stop machinery restarting unexpectedly.`;
  }
  if (/amusement park.*RCD would NOT/i.test(prompt)) {
    if (/lighting/i.test(option))
      return `${option} operates at normal voltage and still needs the applicable fault and additional residual-current protection in the public outdoor environment.`;
    if (/mobile equipment/i.test(option))
      return `Mobile equipment is handled and supplied by a flexible cable, so an RCD is important if damage lets current leak to Earth through a person or the surroundings.`;
    return `These socket-outlets are directly available to the public for portable equipment, so ratings up to 32 A require the applicable 30 mA RCD additional protection.`;
  }
  if (
    /conductors leave the distribution board.*two legs combined/i.test(prompt)
  ) {
    if (/^2$/.test(option))
      return `Two counts only one conductor on each leg; each leg needs line, neutral and CPC.`;
    if (/^3$/.test(option))
      return `Three is the conductor count for one leg only: line, neutral and CPC; a ring has two legs leaving the board.`;
    return `Five omits one of the six required conductors: two lines, two neutrals and two CPCs leave the board.`;
  }
  if (/does not fall under compatibility/i.test(prompt)) {
    if (/Power factor/i.test(option))
      return `Poor power factor increases current for a given useful load and can affect supply capacity and other connected equipment, so it is a compatibility consideration.`;
    if (/Starting currents/i.test(option))
      return `Large motor starting currents can cause voltage dips that disturb other equipment, so their effect must be checked for compatibility.`;
    return `Transient overvoltages can exceed equipment impulse withstand and damage connected loads, making surge compatibility a design consideration.`;
  }
  if (/fixed notice stating.*test button/i.test(prompt)) {
    if (/monthly/i.test(option))
      return `Monthly operation is more frequent than the prescribed notice; the standard wording tells the user to press the test button every six months unless the manufacturer specifies otherwise.`;
    if (/occasionally/i.test(option))
      return `“Occasionally” gives no measurable interval, so a user could leave a failed RCD mechanism undiscovered for too long.`;
    return `Quarterly testing is also more frequent than the prescribed six-month notice and therefore is not the wording that must be displayed.`;
  }
  if (/permanent and temporary installations for/i.test(prompt)) {
    return `${option} is governed by specialist traction, ship or aircraft requirements and sits outside the ordinary BS 7671 scope.`;
  }
  if (
    /NOT within the statutory control of an authoritative body/i.test(prompt)
  ) {
    if (/Caravan site/i.test(option))
      return `A caravan site is normally subject to local-authority site licensing and its associated safety conditions, unlike an ordinary private dwelling.`;
    if (/Petrol/i.test(option))
      return `A petrol filling station is controlled through petroleum and fire-safety licensing because flammable vapour creates a hazardous area.`;
    return `A theatre is subject to licensing and fire-safety control for a place of public entertainment, so an authority can impose safety conditions.`;
  }
  if (
    /avoid danger and minimise inconvenience.*event of a fault/i.test(prompt)
  ) {
    if (/radial principle/i.test(option))
      return `Making every circuit radial says nothing about how faults, essential loads or maintenance are separated; radial topology alone does not limit the area lost on a fault.`;
    if (/lighting and power/i.test(option))
      return `A simple lighting-versus-power split may still leave large areas or essential services on one device; circuit division must follow hazards, continuity and maintenance needs.`;
    return `One RCD at the intake can disconnect the entire installation for a single downstream leakage fault, increasing inconvenience instead of containing it to one circuit.`;
  }
  if (
    /charts and diagrams.*inspection and test|diagram, chart or table/i.test(
      prompt,
    )
  ) {
    if (/portable equipment/i.test(option))
      return `${option} belongs to an asset register, not the fixed-installation circuit chart.`;
    if (/fixed equipment/i.test(option))
      return `${option} alone is insufficient; the chart must identify circuits, protective devices, conductors and isolation information.`;
    return `${option} is a historical design statement and does not give the current circuit details needed for safe inspection.`;
  }
  if (/not classed as a Band 1|12 V fire alarm.*classified/i.test(prompt)) {
    return `${option} assigns the wrong voltage band; a 12 V fire-alarm circuit is Band I because it is extra-low voltage.`;
  }
  if (/maximum demand should be/i.test(prompt)) {
    return `${option} is only an estimate from drawings; maximum demand must be assessed from connected loads, duty and appropriate diversity.`;
  }
  if (/tests are to be carried out on a new installation/i.test(prompt)) {
    if (/^1, 2, 3, 4, 5$/.test(option))
      return `This starts insulation testing before proving protective- and ring-conductor continuity, and places the live loop test before the polarity check.`;
    if (/^2, 3, 5, 1, 4$/.test(option))
      return `This checks polarity before insulation resistance and reverses the prescribed opening continuity order; the dead tests should be completed systematically before the live loop test.`;
    return `This begins with polarity and a live earth-loop test before continuity and insulation have been proved, risking energisation of an unsafe installation.`;
  }
  if (/inside Zone 1 of a hot air sauna/i.test(prompt)) {
    return `${option} is not constructed for the high temperature in sauna zone 1; ordinary IP protection alone does not establish heat resistance or suitability.`;
  }
  if (/Particular requirements are included/i.test(prompt)) {
    return `${option} is covered by a specialist lift, offshore or distributor standard rather than a Part 7 special-installation section of BS 7671.`;
  }
  if (/Omission of devices for protection against overload/i.test(prompt)) {
    if (/fire extinguishing/i.test(option))
      return `Opening a fire-extinguishing circuit during an overload could disable equipment needed to control a greater danger, so overload protection may be omitted where the permitted safeguards are met.`;
    if (/Exciter circuits/i.test(option))
      return `A rotating machine's exciter circuit has a controlled duty, and unwanted disconnection can destabilise or stop the machine; omission is permitted under the stated safeguards.`;
    return `Opening a current-transformer secondary can produce a dangerous high voltage, so an overload device must not interrupt that secondary circuit in normal service.`;
  }
  if (
    /external influence.*larger tabulated current-carrying capacity/i.test(
      prompt,
    )
  ) {
    if (/Low ambient/i.test(option))
      return `Low ambient temperature improves cable cooling, so it does not require a larger tabulated cable capacity than the uncorrected design current.`;
    if (/High wind/i.test(option))
      return `High wind may require stronger support or mechanical protection and generally improves external cooling; it is not the thermal derating condition that requires a larger cable here.`;
    if (/light dust/i.test(option))
      return `Light dust affects ingress protection and cleaning, but the stated level does not apply an ambient-temperature rating factor that increases the required tabulated capacity.`;
    if (/water|falling drops/i.test(option))
      return `Falling water affects enclosure and ingress-protection selection, not the cable's steady thermal current rating.`;
    return `Severe vibration calls for suitable flexible wiring, support and terminations; it does not directly derate the cable's tabulated thermal capacity.`;
  }
  if (/circuit or equipment vulnerable to a particular test/i.test(prompt)) {
    if (/visual inspection/i.test(option))
      return `A visual inspection can find obvious connected equipment but cannot reliably identify concealed devices or every circuit exposed to the test voltage.`;
    if (/inventory/i.test(option))
      return `A building inventory lists assets but may not show their circuit connection or which electrical test voltage could damage them.`;
    return `A manufacturer's notice protects the item on which it is fitted, but it does not give the tester a complete circuit-level record of all vulnerable equipment.`;
  }
  if (/Schedule of Test Results.*attached/i.test(prompt)) {
    return `${option} wrongly limits the schedule to one class of work; every Electrical Installation Certificate needs the relevant inspection and test schedules.`;
  }
  if (/person ordering installation work must be informed/i.test(prompt)) {
    return `${option} is a design-life estimate, whereas the client must be told the required inspection, testing and maintenance arrangements for continued safety.`;
  }
  if (/forms part of the assessment of general characteristics/i.test(prompt)) {
    if (/Circuit calculations/i.test(option))
      return `Circuit calculations follow after supply characteristics, demand and external influences have been established; they use that assessment as design input.`;
    if (/Distribution boards/i.test(option))
      return `Distribution-board selection and arrangement are later design decisions based on the assessed supply, circuits and environmental conditions.`;
    return `Fuse calculations coordinate a particular circuit's load, cable and fault protection after the installation's general characteristics are known.`;
  }
  if (/divided into circuits to\??$/i.test(prompt)) {
    return `${option} changes the number of spurs but does not limit fault consequences, support maintenance or reduce unwanted interaction between circuits.`;
  }
  if (
    /(?:EV|electric vehicle) charging station.*earth-free local equipotential bonding/i.test(
      prompt,
    )
  ) {
    return `${option} names location or vehicle count, neither of which provides the controlled skilled supervision required for this exceptional protective measure.`;
  }
  if (/current Regulation 411\.3\.3.*loads require/i.test(prompt)) {
    return `${option} tries to exempt a labelled socket, but a label or dedication alone does not remove the 30 mA RCD requirement under the current rule.`;
  }
  if (/abbreviated term CPC stands for/i.test(prompt)) {
    return `${option} invents a cable or carrier term; CPC means circuit protective conductor, the conductor that carries fault current to the earthing system.`;
  }
  if (/relationship.*overload coordination/i.test(prompt)) {
    return `${option} assumes installation alone guarantees coordination; the designer must prove Ib ≤ In ≤ Iz and the device's operating-current condition.`;
  }
  if (/Extraneous-conductive part is/i.test(prompt)) {
    return `${option} makes the part part of the electrical installation, which would instead make it an exposed-conductive-part; an extraneous part can introduce Earth potential from outside.`;
  }
  if (
    /autotransformer.*common terminal|auto-transformer.*common terminal/i.test(
      prompt,
    ) &&
    /bonding conductor/i.test(option)
  ) {
    return `${option} is a protective equipotential connection and must not be used as the normal common current-carrying point of an autotransformer winding.`;
  }
  if (/neutral can be defined/i.test(prompt) && /bus conductor/i.test(option)) {
    return `${option} describes a conductor form used to distribute current; it says nothing about connection to the supply neutral point or normal return-current function.`;
  }
  if (
    /buried in a wall.*additional protection/i.test(prompt) &&
    /notification/i.test(option)
  ) {
    return `${option} warns about a route but provides no automatic shock protection if a nail or screw penetrates the shallow concealed cable.`;
  }
  if (/BS EN 50085 relates to/i.test(prompt)) {
    return `${option} belongs to BS EN 60228 for cable conductors, BS EN 61386 for conduit, or BS EN 60309 for industrial plugs—not the BS EN 50085 trunking family.`;
  }
  if (/BS 1362 relates to/i.test(prompt)) {
    if (/plugs|sockets/i.test(option))
      return `The complete 13 A plug, socket, adaptor and connection-unit system is covered mainly by BS 1363; BS 1362 specifically covers the cartridge fuse fitted in the plug.`;
    if (/cables/i.test(option))
      return `Cable construction is covered by cable-specific standards; BS 1362 defines the small cartridge fuse used in a UK 13 A plug.`;
    return `Emergency-lighting performance is covered by standards such as BS EN 1838, not the BS 1362 plug-fuse product standard.`;
  }
  if (/TN system.*marina.*must not include/i.test(prompt)) {
    if (/RCD/i.test(option))
      return `RCDs are essential additional and fault protection for shore-supply circuits; the prohibited item is the combined PEN conductor.`;
    if (/earth conductors/i.test(option))
      return `A separate protective conductor is required to carry fault current safely; it is the combination of protective and neutral functions in a PEN that is unsafe at a marina.`;
    return `Overcurrent and residual-current protective devices are still required; the marina restriction targets a PEN because an open PEN can raise a vessel's metalwork to dangerous voltage.`;
  }
  if (/Residual current circuit breakers.*TN system/i.test(prompt)) {
    if (/earthing conductors/i.test(option))
      return `A separate earthing conductor is a normal part of TN fault protection and remains outside the RCD sensing core, so it does not interfere with residual-current measurement.`;
    if (/exposed conductive/i.test(option))
      return `Exposed-conductive-parts are the metalwork the protective system makes safe; their presence is a reason to use fault protection, not a reason an RCD cannot be used.`;
    if (/protective conductors/i.test(option))
      return `A separate protective conductor can accompany an RCD while staying outside its sensing core; only a combined PEN cannot be treated that way.`;
    if (/Fuses/i.test(option))
      return `Fuses can coordinate with an RCD by providing overcurrent protection while the RCD detects leakage to Earth.`;
    return `Socket-outlets are commonly protected by RCDs; they do not combine neutral and protective functions as a PEN conductor does.`;
  }
  if (/emergency switching.*would NOT satisfy/i.test(prompt)) {
    return `${option} opens all live conductors or drops a contactor through its control circuit, both recognised ways to remove the dangerous supply rapidly.`;
  }
  if (/protective measures is permitted.*bath or shower/i.test(prompt)) {
    if (/Non-conducting location/i.test(option))
      return `A non-conducting location relies on controlling every conductive path and is not permitted in an ordinary bathroom used without skilled supervision.`;
    if (/Obstacles/i.test(option))
      return `Obstacles only deter accidental contact and can be deliberately bypassed, so they are not permitted as the bathroom protective measure.`;
    return `Placing live parts out of reach cannot be relied on in a bathroom where users, water and movable items defeat the controlled-access assumption.`;
  }
  if (/additional test.*three phase equipment/i.test(prompt)) {
    if (/earth electrode/i.test(option))
      return `An earth-electrode test is required by the earthing arrangement, not because equipment is three-phase.`;
    if (/insulation resistance/i.test(option))
      return `Insulation resistance between line conductors is part of normal initial verification for single- and three-phase circuits, not the extra three-phase check.`;
    return `Polarity is checked on all relevant circuits; phase sequence is the additional test needed to ensure a three-phase motor rotates in the intended direction.`;
  }
  if (/cables laid in arable or cultivated/i.test(prompt)) {
    if (/0\.25/i.test(option))
      return `A 0.25 m burial depth leaves the cable within reach of ploughs and cultivation machinery.`;
    if (/mechanical protection/i.test(option))
      return `Two metres with added protection is safe but exceeds the stated one-metre minimum, so it is not the minimum design value asked for.`;
    return `Two metres is deeper than the one-metre minimum and may be used, but it is not the minimum burial depth requested.`;
  }
  if (/Self supported suspension cables.*agricultural/i.test(prompt)) {
    if (/10m/i.test(option))
      return `Ten metres would clear agricultural vehicles but is greater than the prescribed six-metre minimum, so it is not the minimum height asked for.`;
    if (/2m/i.test(option))
      return `Two metres is within the reach of people and far too low for tractors, loaders and other agricultural machinery.`;
    return `Four metres can still be struck by tall agricultural vehicles or raised machinery; the required minimum clearance is six metres.`;
  }
  if (/failure of the provision for basic protection/i.test(prompt)) {
    if (/Electrical separation/i.test(option))
      return `Electrical separation is a complete protective measure for a deliberately separated circuit, not the supplementary safeguard used when ordinary basic protection fails.`;
    if (/Supplementary bonding/i.test(option))
      return `Supplementary bonding can reduce touch voltage between metal parts but does not detect contact with a live conductor or disconnect the supply.`;
    return `A time-delayed 100 mA RCD is too insensitive and too slow for personal additional protection; that function requires an RCD rated at no more than 30 mA.`;
  }
  if (/All circuits in a bathroom must have/i.test(prompt)) {
    if (/5 s/i.test(option))
      return `A five-second fault-disconnection time is too slow for bathroom final circuits and does not provide the required 30 mA additional protection.`;
    if (/\bCB\b/i.test(option))
      return `A circuit-breaker protects against overload and short circuit, but it may not detect the small leakage current through a person that a 30 mA RCD detects.`;
    return `Supplementary bonding only limits voltage differences between metal parts and, where the required conditions are met, may be omitted; it does not replace 30 mA RCD protection for every bathroom circuit.`;
  }
  if (
    /protective measure can supply one item.*separated source/i.test(prompt)
  ) {
    if (/Overcurrent/i.test(option))
      return `Overcurrent protection clears excessive current but does not isolate the circuit from Earth or from other supplies.`;
    if (/Class II/i.test(option))
      return `Class II marking describes the source enclosure's insulation and does not create an electrically separated output circuit.`;
    return `Supplementary bonding joins conductive parts and therefore does the opposite of keeping the separated circuit isolated from Earth.`;
  }
  if (
    /socket outlets must be installed/i.test(prompt) &&
    /bath|shower/i.test(prompt)
  ) {
    if (/zone 0/i.test(option))
      return `Measuring from zone 0 uses the wrong boundary; the required horizontal clearance is measured from the boundary of zone 1.`;
    if (/zone 2/i.test(option) && /3m/i.test(option))
      return `This starts the measurement outside zone 2 and adds an unnecessary distance; the rule uses 2.5 m from zone 1.`;
    return `Zone 2 is still far inside the required socket-outlet clearance, where a user could touch the socket while in contact with the bath or shower area.`;
  }
  if (/Photovoltaic equipment should always/i.test(prompt)) {
    if (/a\.c\. side/i.test(option))
      return `Opening the a.c. side does not stop illuminated modules generating d.c., so the persistent hazard is specifically on the d.c. side.`;
    if (/countries/i.test(option))
      return `PV safety depends on illumination, isolation and equipment suitability, not a list of countries in which the array may be used.`;
    return `A nominally low-voltage output can still be dangerous and series modules can raise array voltage; it does not remove the need to treat the d.c. side as live.`;
  }
  if (
    /residual current device protects a socket outlet.*garage/i.test(prompt)
  ) {
    if (/lighting circuit/i.test(option))
      return `A fault on another circuit should be cleared by that circuit's own protection; the socket RCD monitors only conductors passing through it.`;
    if (/exposed earth metalwork/i.test(option))
      return `Touching metal already at Earth potential creates no residual current unless a live fault is also present.`;
    return `A broken CPC alone does not create current imbalance; the RCD operates only when subsequent leakage flows from a live conductor outside the normal return path.`;
  }
  if (/motor.*current rating not less than/i.test(prompt)) {
    return `${option} is below the continuous full-load current, so the cable could overheat during normal running even though it survives a short starting surge.`;
  }
  if (/both basic and fault protection.*source of SELV/i.test(prompt)) {
    if (/230 V generator/i.test(option))
      return `${option} is far above the 50 V a.c. SELV limit and therefore cannot provide extra-low-voltage shock protection.`;
    if (/230\/110 V/i.test(option))
      return `${option} still supplies 110 V, which is reduced low voltage but exceeds the SELV voltage limit.`;
    return `${option} has an intentional Earth connection, making the 50 V arrangement PELV rather than the unearthed separated SELV system requested.`;
  }
  if (/part of a detailed inspection/i.test(prompt)) {
    if (/manufacturer.?s name/i.test(option))
      return `The RCD manufacturer's name is traceability information, not a safety condition the visual inspection is required to verify.`;
    if (/voltage drop/i.test(option))
      return `Maximum permissible voltage drop is established by design calculation or measurement, not by detailed visual inspection.`;
    return `Prospective short-circuit current is determined by enquiry, calculation or measurement and checked against device breaking capacity; it is not a visual item.`;
  }
  if (/initial verification.*included for checking/i.test(prompt)) {
    if (/variations of contract/i.test(option))
      return `Contract variations record changes in commercial scope, but they do not identify circuits, isolation points or safe operating instructions for the completed installation.`;
    if (/site meetings/i.test(option))
      return `Meeting minutes record discussions and decisions, not the final circuit information that an inspector and future electrician need.`;
    return `Works orders authorise site changes but do not show the completed as-installed arrangement; current diagrams and instructions are needed for that.`;
  }
  if (/purposes? of an inspection prior to initial testing/i.test(prompt)) {
    if (/Connected to the supply/i.test(option))
      return `Initial inspection is performed before energisation, so being connected and live is neither required nor safe for this visual check.`;
    if (/insulation resistance/i.test(option))
      return `Insulation resistance is an instrument test result and cannot be verified by visual inspection.`;
    return `Safe operation while energised requires functional testing; the preceding inspection can establish only visible selection, erection and damage.`;
  }
  if (
    /equipment which does not comply.*British or Harmonised standard/i.test(
      prompt,
    )
  ) {
    if (/supervisor/i.test(option))
      return `Telling a supervisor creates no permanent technical record and does not demonstrate that the equipment provides an equivalent degree of safety.`;
    if (/Not install/i.test(option))
      return `A blanket refusal is unnecessary where equivalent safety has been established; the departure may be used if it is assessed and recorded.`;
    return `A Minor Works Certificate applies only to qualifying minor alterations, so it cannot be the universal record for every non-standard item.`;
  }
  if (/earth fault loop impedance test determines/i.test(prompt)) {
    if (option === "R1")
      return `R1 is only the line-conductor resistance within the circuit and omits the CPC and external return path.`;
    if (option === "R2")
      return `R2 is only the circuit protective-conductor resistance and omits the line conductor and external loop.`;
    return `Ze is the external part of the loop measured at the origin; the circuit test at the point of use determines complete Zs.`;
  }
  if (/certificates should be signed by those responsible/i.test(prompt)) {
    if (/Inspection and testing only/i.test(option))
      return `Inspection and testing is one declaration on the certificate, but it omits responsibility for design and construction.`;
    if (/Installation work only/i.test(option))
      return `Construction responsibility alone omits the separate design and inspection-and-testing declarations.`;
    return `The main commercial contract is not an electrical certification role and cannot replace signatures from the people responsible for design, construction and verification.`;
  }
  if (/caravans.*over.?current.*disconnects?/i.test(prompt)) {
    if (/protective conductors/i.test(option))
      return `${option} would switch the CPC, removing the safety earth exactly when it is needed for fault clearance.`;
    if (/caravan and site supply/i.test(option))
      return `${option} disconnects far more than the faulty final circuit and does not describe the poles of its overcurrent device.`;
    return `${option} leaves neutral energised or connected; the caravan rule requires all live conductors of the affected circuit to open together.`;
  }
  if (/transportable unit.*notice.*need not display/i.test(prompt)) {
    if (/Maximum power/i.test(option))
      return `The maximum power requirement tells the person connecting the unit whether the external supply and connector have enough capacity.`;
    if (/type of supply/i.test(option))
      return `The supply type must be shown so the unit is not connected to an incompatible a.c., d.c. or earthing arrangement.`;
    return `The unit's voltage rating must be displayed to prevent connection to a supply that could damage equipment or defeat protection.`;
  }
  if (/external influence categorised as AG1/i.test(prompt)) {
    if (/Factory/i.test(option))
      return `A factory is more likely to experience mechanical impacts from handling and machinery, so it is not the negligible-impact AG1 environment represented by a house.`;
    if (/Quarry/i.test(option))
      return `A quarry has severe impact from rock, vehicles and heavy plant, placing it well above the negligible mechanical-impact class AG1.`;
    return `A workshop has tools, materials and work activity that create a greater mechanical-impact risk than the low-severity AG1 domestic condition.`;
  }
  if (
    /number and type of live conductors.*new electrical supply/i.test(prompt)
  ) {
    if (/local council/i.test(option))
      return `The council does not own or operate the incoming electricity network, so it cannot confirm the conductors the distributor will provide at this address.`;
    if (/BS 7671/i.test(option))
      return `BS 7671 sets design requirements but cannot state whether this particular DNO service is single-phase, three-phase, two-wire or four-wire.`;
    return `The Electricity Safety, Quality and Continuity Regulations set legal supply limits and duties, but they do not identify the actual service configuration at this property; the distributor does.`;
  }
  if (/wiring method can protect a cable concealed/i.test(prompt)) {
    if (/BS 3036/i.test(option))
      return `${option} is a rewireable overcurrent fuse; it may clear a resulting fault but cannot stop a nail reaching the cable.`;
    if (/BS 88/i.test(option))
      return `${option} is a cartridge overcurrent fuse and provides no earthed screen or penetration-resistant mechanical barrier.`;
    return `${option} is an MCB with an overcurrent trip curve; its presence alone is not one of the wiring methods permitted outside prescribed zones.`;
  }
  if (/sources? does not comply.*SELV/i.test(prompt)) {
    if (/battery/i.test(option))
      return `${option} can be a valid SELV source because it is independent of the higher-voltage supply and can remain unearthed.`;
    if (/motor generator/i.test(option))
      return `${option} is valid when its windings provide separation equivalent to a safety isolating transformer.`;
    return `${option} is the recognised safety-isolating transformer source for SELV; the non-compliant choice is the centre-tapped reduced-low-voltage source.`;
  }
  if (/NOT a classification of external influence/i.test(prompt)) {
    if (/construction/i.test(option))
      return `Construction of buildings is one of the three top-level external-influence groups, covering the nature and behaviour of the building structure.`;
    if (/environment/i.test(option))
      return `Environmental conditions are a top-level group covering temperature, water, foreign bodies, corrosion, impact and related surroundings.`;
    return `Utilisation is the top-level group covering people, building use, stored materials and continuity needs.`;
  }
  if (/fairground installation must take place/i.test(prompt)) {
    if (/three months/i.test(option))
      return `${option} is a calendar interval and could miss damage caused each time the installation is transported and rebuilt.`;
    if (/a\.c\. supply/i.test(option))
      return `${option} wrongly exempts d.c.-supplied equipment even though assembly can disturb its protective measures too.`;
    return `${option} wrongly exempts privately generated supplies; the need follows each assembly, not who supplies the energy.`;
  }
  if (/Simultaneously accessible exposed-conductive-parts/i.test(prompt)) {
    if (/Multiple separate/i.test(option))
      return `${option} can rise to different voltages during a fault, creating a shock voltage between two parts touched together.`;
    if (/only in groups/i.test(option))
      return `${option} wrongly forbids a valid individual connection to the common earthing system.`;
    return `${option} wrongly forbids valid grouped or collective connections to the common earthing system.`;
  }
  if (/two-wire earthed DC.*negative/i.test(prompt)) {
    return `${option} is a neutral-style marking and is not used for the earthed negative pole; the prescribed alphanumeric identification is M.`;
  }
  if (
    /component of a support system.*regularly spaced elements/i.test(prompt)
  ) {
    if (/bracket/i.test(option))
      return `${option} is an individual projection that carries a tray, ladder or cable rather than gripping the cable at regular intervals.`;
    if (/ladder/i.test(option))
      return `${option} has longitudinal side members and transverse rungs that support routes of cables.`;
    return `${option} provides a continuous or perforated supporting base for a group of cables rather than mechanically retaining one cable.`;
  }
  if (/correction factors.*applied to the/i.test(prompt)) {
    if (/current[- ]carrying capacity/i.test(option))
      return `Rating factors derate the tabulated cable capacity: the designer uses them with the protective-device rating to find the tabulated capacity required, rather than applying them to the cable's final current-carrying capacity.`;
    if (/short circuit/i.test(option))
      return `Prospective short-circuit current is used to check a device's breaking capacity and the cable's fault withstand; ambient temperature, grouping and insulation rating factors do not alter that fault-current value.`;
    if (/earth fault/i.test(option))
      return `Earth-fault current is used to check fault-loop impedance, disconnection time and protective-conductor stress; it is not the normal-current value to which cable rating factors are applied.`;
    if (/design current/i.test(option))
      return `Design current is the current the load is expected to take; ambient temperature, grouping and insulation affect the cable's ability to lose heat, not the load's demand.`;
    return `Maximum or total demand describes the combined installation load, whereas these correction factors size the cable for one circuit from that circuit's protective-device rating.`;
  }
  if (/^A TN-C-S system has/i.test(prompt)) {
    if (/separate protective conductor.*source earth/i.test(option))
      return `A protective conductor kept separate from neutral all the way from the source describes TN-S, not TN-C-S.`;
    if (/earth electrode.*independent/i.test(option))
      return `Exposed parts connected to a local electrode independent of the source describe a TT system, not TN-C-S.`;
    return `Combining neutral and protective functions throughout describes TN-C; TN-C-S combines them only in part of the system and separates them before the consumer's final circuits.`;
  }
  if (/new installation.*before being energised.*FIRST/i.test(prompt)) {
    if (/insulation resistance/i.test(option))
      return `Insulation resistance is an electrical test performed after the installation has first passed its detailed visual inspection.`;
    if (/protective conductors/i.test(option))
      return `Continuity of protective conductors is normally the first instrument test, but inspection must come before any testing.`;
    return `Ring-conductor continuity is a later test and applies only to ring final circuits; the initial detailed inspection applies to the whole installation.`;
  }
  if (/nominal rating of an overcurrent protective device/i.test(prompt)) {
    if (/1\.45/i.test(option))
      return `The 1.45 factor belongs to the separate device operating-current condition, I2 ≤ 1.45 Iz; it is not the nominal rating In and is not applied to the load current.`;
    if (/prospective short-circuit/i.test(option))
      return `Prospective short-circuit current sets the minimum breaking capacity of the device, not its nominal current rating for normal circuit loading.`;
    return `If the device rating exceeds the conductors' current-carrying capacity, the cable can be overloaded without the device operating; coordination requires Ib ≤ In ≤ Iz.`;
  }
  if (/defines low voltage a\.c\. between conductors/i.test(prompt)) {
    if (/above 250/i.test(option))
      return `This excludes the 50 V to 250 V portion of low voltage, even though that whole range is above extra-low voltage and within BS 7671's low-voltage band.`;
    if (/below 500/i.test(option))
      return `This stops at 500 V and wrongly omits the 500 V to 1000 V portion of the low-voltage a.c. range.`;
    return `This includes voltages at or below 50 V, which are extra-low voltage, and it omits the valid low-voltage range from 250 V up to 1000 V.`;
  }
  if (/initial verification.*test result fails to comply/i.test(prompt)) {
    if (/Inform the client/i.test(option))
      return `The client should be told about a defect, but notification alone leaves the failed work unsafe and unverified; it must be corrected and retested before certification.`;
    if (/Make good.*Periodic Inspection Report/i.test(option))
      return `A periodic inspection report records the condition of an existing installation; after correcting and retesting new work, the required document is an Electrical Installation Certificate.`;
    return `Recording the failed result on a periodic report neither corrects the defect nor completes initial verification; the work must be made good, retested and then certified on the EIC.`;
  }
  if (/main protective bonding conductors.*including/i.test(prompt)) {
    if (/Metal fences/i.test(option))
      return `A metal fence is not automatically an extraneous-conductive-part: it needs bonding only if it can introduce Earth potential into the installation.`;
    if (/insulating section/i.test(option))
      return `The insulating section at the point of entry breaks the conductive path from outside, so the internal metal pipe cannot import Earth potential and does not need main bonding on that basis.`;
    return `Multimedia network cables are normally insulated signal cables, not conductive services capable of importing Earth potential into the building.`;
  }
  if (/specific IP rating.*zone 0.*bathroom/i.test(prompt)) {
    if (/IP2X/i.test(option))
      return `IP2X protects against finger access to hazardous parts but gives no water-ingress protection, so it is unsuitable inside the bath or shower basin.`;
    if (/IPX4/i.test(option))
      return `IPX4 covers splashing water; zone 0 equipment can be immersed, so splash protection is insufficient.`;
    return `IPXXB is another finger-access code and contains no water rating; zone 0 requires IPX7 protection against temporary immersion.`;
  }
  if (
    /medical locations.*distribution system shall be designed/i.test(prompt)
  ) {
    if (
      /both the main distribution network and the electrical safety source/i.test(
        option,
      )
    )
      return `Both sources must be reliable, but reliability alone does not transfer essential loads when the normal source fails; the distribution design must facilitate automatic changeover.`;
    if (/main distribution network/i.test(option))
      return `A reliable normal supply alone is not enough in a medical location, because essential loads must continue from the electrical safety source after a mains failure.`;
    return `Treating patients is the purpose of the medical location, not a switching function of its distribution system; the specific design duty is automatic transfer of essential loads to the safety source.`;
  }
  if (/outer contact of Edison/i.test(prompt)) {
    return `${option} is an earthing conductor and must never carry normal lamp current; the exposed screw shell is connected to neutral so the centre contact is line.`;
  }
  if (/black sleeve or disc.*MICC/i.test(prompt)) {
    return `${option} assigns the marker to Earth, but the black marker identifies the neutral core in this cable-identification convention.`;
  }
  if (/serve as a part of a protective conductor/i.test(prompt)) {
    return `${option} is flexible containment whose electrical continuity is not dependable enough to serve as a protective conductor.`;
  }
  if (/conductance of the outer conductor.*PEN/i.test(prompt)) {
    return `${option} makes the outer PEN no more conductive than one or a series of inner conductors; it must have at least the specified equivalent conductance to carry neutral and fault current safely.`;
  }
  if (/single colour green identifying conductors/i.test(prompt)) {
    return `${option} assigns obsolete single-green identification to an earthing function; protective conductors require green-and-yellow and single green is reserved only for the stated special use.`;
  }
  if (/Current carrying capacity is defined/i.test(prompt)) {
    return `${option} omits the installation conditions or permitted temperature basis; current-carrying capacity is the maximum continuous current under the specified conditions without exceeding the cable limit.`;
  }
  if (/shock due to inadequate basic protection/i.test(prompt)) {
    return `${option} describes touching metal made live after a fault, which is a failure of fault protection rather than contact with a live part in normal service.`;
  }
  if (/main protective bonding.*including/i.test(prompt)) {
    return `${option} is normally insulated communications cabling and is not automatically an extraneous-conductive-part capable of importing Earth potential.`;
  }
  if (/metallic framed stud partition/i.test(prompt)) {
    return `${option} is a recognised mechanical-protection method: earthed conduit or penetration-resistant protection prevents screws contacting the cable.`;
  }
  if (/cable support consisting of.*transverse/i.test(prompt)) {
    return `${option} is not the defined ladder construction; a cable ladder has transverse rungs rigidly fixed to longitudinal side members.`;
  }
  if (/protective conductor providing equipotential bonding/i.test(prompt)) {
    return `${option} is not the defined name; a conductor used for protective equipotential bonding is a protective bonding conductor.`;
  }
  if (/type of cables necessarily.*enclosed/i.test(prompt)) {
    return `${option} either already has a sheath or is described only by temporary use; the mandatory containment rule applies to non-sheathed fixed-wiring conductors.`;
  }
  if (
    /groups containing.*different maximum operating temperatures/i.test(prompt)
  ) {
    return `${option} would base the whole group on ambient, average or highest temperature; the lowest cable temperature rating governs so no cable is operated above its limit.`;
  }
  if (/No testing is required, only visual inspection/i.test(option)) {
    return `${option} misses continuity, insulation, polarity and fault-protection measurements; an extension needs the relevant initial verification tests.`;
  }
  if (
    /reducing the effect of electromagnetic.*consideration by/i.test(prompt)
  ) {
    return `${option} may verify or install the work, but EMC measures must be coordinated at design stage when routes, bonding, equipment and separation are chosen.`;
  }
  if (
    /(?:mobile vehicle|construction site).*socket outlet or plug/i.test(
      prompt,
    ) &&
    /BS 1363/i.test(option)
  ) {
    return `${option} is the domestic 13 A plug-and-socket system; these mobile or site connections need the more robust, keyed industrial BS EN 60309 arrangement.`;
  }
  if (
    /socket outlets.*mounted vertically/i.test(prompt) &&
    /BS 1363/i.test(option)
  ) {
    return `${option} describes product compliance and shuttering, but it does not set the physical clearance needed so the plug and flexible cord avoid mechanical damage.`;
  }
  if (
    /inspection conducted prior to testing/i.test(prompt) &&
    /orange/i.test(option)
  ) {
    return `${option} invents a colour rule; inspection checks selection, erection, condition and protection rather than painting all containment orange.`;
  }
  if (
    /Which of the following statements is correct/i.test(prompt) &&
    /PEN conductor/i.test(option)
  ) {
    return `${option} is unsafe because opening a PEN can remove both neutral reference and protective earthing, raising exposed metalwork towards line voltage.`;
  }
  if (/agricultural premises.*tractors.*shall NOT/i.test(prompt)) {
    if (/arable ground.*1m/i.test(option))
      return `One metre burial in cultivated ground is a recognised way to keep a cable below ploughing and cultivation damage.`;
    if (/0\.6m.*additional protection/i.test(option))
      return `A 0.6 m burial depth with suitable added mechanical protection is a recognised arrangement outside cultivated ground.`;
    return `A six-metre clearance keeps self-supporting cable above agricultural vehicles and is the prescribed overhead arrangement, not the excluded method.`;
  }
  if (/RCD protected socket-outlet.*Class II portable tool/i.test(prompt)) {
    if (/earth fault in the windings/i.test(option))
      return `A Class II tool has no protective-earth path, so an internal fault contained by its reinforced insulation may produce no residual current for the RCD to detect.`;
    if (/breakage of the protective conductor/i.test(option))
      return `Class II equipment does not rely on a protective conductor, so there is no CPC in the tool's flexible cable for the RCD to monitor.`;
    return `An ordinary RCD does not continuity-monitor an earthing circuit or interlock the tool; it trips only when sufficient current leaks outside the normal return path.`;
  }
  if (/spread of fire.*sealing materials/i.test(prompt)) {
    if (/compatible/i.test(option))
      return `Compatibility is essential so the fire-stop does not attack the cable sheath or lose adhesion and open a path for smoke or flame.`;
    if (/mechanical stability/i.test(option))
      return `Mechanical stability is required so movement, pressure and cable loads do not crack or dislodge the fire-stop.`;
    return `Matching resistance to relevant external influences is required so water, chemicals or heat do not degrade the seal before a fire.`;
  }
  if (/external influence code AD1/i.test(prompt)) {
    if (/IPX1/i.test(option))
      return `IPX1 provides protection against vertical dripping water, but AD1 means water is negligible and requires no water protection.`;
    if (/IPX2/i.test(option))
      return `IPX2 addresses dripping water with the enclosure tilted, a wetter condition than AD1.`;
    return `IPX4 addresses splashing from any direction and is far beyond the no-water AD1 condition.`;
  }
  if (/access through a barrier or enclosure/i.test(prompt)) {
    if (/without a key/i.test(option))
      return `Unrestricted opening would expose live parts without a deliberate skilled action or automatic disconnection.`;
    if (/warning label/i.test(option))
      return `A warning label informs but does not physically prevent contact; access still needs a key, tool, isolation or an intermediate barrier.`;
    return `Leaving directly accessible live parts energised defeats the enclosure's basic-protection function as soon as it is opened.`;
  }
  if (/measures reducing.*electromagnetic interferences/i.test(prompt)) {
    if (/client/i.test(option))
      return `The client can state operational needs but does not coordinate cable routes, bonding, separation and equipment immunity in the technical design.`;
    if (/installer/i.test(option))
      return `The installer implements the design and should flag conflicts, but the EMC strategy must already be coordinated by the designer.`;
    return `The test engineer can identify some EMC symptoms after installation but cannot retroactively choose the fundamental routing and bonding design.`;
  }
  if (/frequency of maintaining installed electrical equipment/i.test(prompt)) {
    if (/Adequate light and access/i.test(option))
      return `Safe access and lighting are necessary so maintenance can actually be performed without creating new hazards.`;
    if (/Protective measures/i.test(option))
      return `Maintenance must keep shock and fire protective measures effective; deterioration of those measures is a central reason to maintain.`;
    return `Periodic inspection and testing is how deterioration and hidden defects are found, so it remains part of an effective maintenance regime.`;
  }
  if (/not (?:a )?(?:method|measure) of ['’]?fault protection/i.test(prompt)) {
    if (/Automatic disconnection/i.test(option))
      return `Automatic disconnection is the standard fault-protection measure that limits dangerous touch-voltage duration.`;
    if (/Earthing and bonding/i.test(option))
      return `Protective earthing and bonding form part of automatic disconnection: they provide a fault-current path and limit voltage differences so the protective device can clear a fault.`;
    if (/Electrical separation/i.test(option))
      return `Electrical separation is a recognised fault-protection measure: an isolated secondary prevents a first fault from completing a dangerous current path through Earth.`;
    if (/Class II/i.test(option))
      return `Class II equipment provides fault protection through double or reinforced insulation, so one insulation fault does not make accessible parts live and no CPC is needed.`;
    return `Protective equipotential bonding forms part of automatic disconnection by limiting voltage differences and helping provide an effective fault-current path.`;
  }
  if (/fault protection.*street furniture/i.test(prompt)) {
    if (/non-conducting location/i.test(option))
      return `A non-conducting location depends on the surroundings remaining insulating. Wet ground, public access and nearby metalwork make that condition impossible to control, and Section 714 does not permit this measure for street furniture.`;
    if (/earth.?free.*equipotential bonding/i.test(option))
      return `Earth-free local equipotential bonding requires every accessible conductive part to remain in a controlled zone isolated from Earth. A public column fixed in the ground cannot maintain that condition, and Section 714 does not permit this measure.`;
    return `Electrical separation is normally used for one item supplied from its own isolating source. Giving each item of fixed street furniture a dedicated separated source and keeping it isolated from Earth and other circuits is not the practical protection arrangement for a public distribution circuit.`;
  }
  if (/transient-overvoltage protection be omitted/i.test(prompt)) {
    if (/public service/i.test(option))
      return `Avoiding public-service interruption removes only one mandatory consequence; the owner must still assess and accept all remaining tolerable loss.`;
    if (/dwelling/i.test(option))
      return `A dwelling is not automatically exempt, because sensitive equipment and financial or data loss can still make surge protection necessary.`;
    return `A quiet previous year does not predict future surges or replace a recorded owner decision accepting the remaining risk.`;
  }
  if (
    /prospective short circuit current.*taken into account when/i.test(prompt)
  ) {
    if (/basic protection/i.test(option))
      return `Basic protection prevents normal contact with live parts and is selected independently of the prospective short-circuit magnitude.`;
    if (/external earth loop/i.test(option))
      return `External loop impedance helps calculate prospective fault current, but assessing Ze is not the equipment-selection decision for which the current is used.`;
    if (/system of earthing/i.test(option))
      return `The supply earthing system is established from the source and distributor arrangement; prospective short-circuit current does not choose between TN, TT or IT.`;
    if (/diversity/i.test(option))
      return `Diversity estimates simultaneous normal load for maximum-demand design and is unrelated to the worst fault current a device must interrupt.`;
    return `Distribution-board way count follows the number of circuits and spare capacity, not the fault current the main device must interrupt.`;
  }
  if (/plastered wall.*depth of 20 mm/i.test(prompt)) {
    if (/Coloured red/i.test(option))
      return `Red identification neither keeps the cable in a prescribed safe route nor disconnects a penetrating nail or screw.`;
    if (/Protected by a 30 mA RCD$/i.test(option))
      return `The RCD provides additional protection after penetration, but without suitable mechanical protection the shallow cable must also follow the prescribed safe zones.`;
    return `A safe-zone route makes the cable's position predictable, but it does not replace the 30 mA RCD additional protection required for concealed cable less than 50 mm deep in a dwelling.`;
  }
  if (/Obstacles may be used to provide basic protection/i.test(prompt)) {
    if (/RCD/i.test(option))
      return `An RCD is additional protection after leakage occurs; it does not stop an ordinary person deliberately reaching around an obstacle to touch a live part.`;
    if (/250 V/i.test(option))
      return `A 250 V limit does not make exposed live parts safe to approach; obstacles depend on controlled access by skilled or instructed people.`;
    return `Steel conduit can enclose conductors as a different basic-protection measure, but it does not authorise the use of accessible obstacles without skilled control.`;
  }
  if (/PME conditions.*main protective bonding conductor/i.test(prompt)) {
    if (/consumer/i.test(option))
      return `The consumer cannot choose this conductor size by agreement; it is derived from the distributor's supply neutral size using Table 54.8.`;
    if (/Half the csa/i.test(option))
      return `Table 54.7 sizes earthing conductors, not PME main bonding, and simply taking half the earthing-conductor area can leave the bond undersized for diverted PEN current.`;
    return `Matching the incoming line conductor can be unnecessarily large or still ignores the rule's basis; Table 54.8 relates main bonding size to the supply neutral.`;
  }
  if (/negligible-impedance line-to-earth fault.*0\.3 Ω/i.test(prompt)) {
    return `${option} does not result from the line-to-earth voltage divided by loop impedance: 230 V ÷ 0.3 Ω is approximately 766.7 A.`;
  }
  if (/Zone 1 of a swimming pool.*minimum degree/i.test(prompt)) {
    if (/IP2X/i.test(option))
      return `IP2X protects against finger access but specifies no resistance to water, which is the defining exposure in pool zone 1.`;
    if (/IP4X/i.test(option))
      return `IP4X protects against small solid objects but also contains no water-ingress rating.`;
    return `IPX8 is an immersion rating and is not the minimum asked for; zone 1 normally requires IPX4 against splashing, with higher jet protection where cleaning demands it.`;
  }
  if (/forms part of the assessment of general characteristics/i.test(prompt)) {
    if (/Circuit calculations/i.test(option))
      return `Circuit calculations follow after supply characteristics, demand and external influences have been established; they use that assessment as design input.`;
    if (/Distribution boards/i.test(option))
      return `Distribution-board selection and arrangement are later design decisions based on the assessed supply, circuits and environmental conditions.`;
    return `Fuse calculations coordinate a particular circuit's load, cable and fault protection after the installation's general characteristics are known.`;
  }
  if (/two-wire earthed DC.*positive.*circuit/i.test(prompt)) {
    if (/^L$/i.test(option))
      return `L is a general a.c. line designation and does not identify the earthed pole in this two-wire d.c. arrangement.`;
    if (/^L\+$/i.test(option))
      return `L+ identifies a positive live pole in an unearthed or negative-earthed d.c. arrangement; the intentionally earthed positive pole is marked M.`;
    return `L1 identifies the first line conductor of an a.c. polyphase system, not an earthed pole of a two-wire d.c. circuit.`;
  }
  if (
    /combined protective and neutral.*prohibited in consumers installations by\??$/i.test(
      prompt,
    )
  ) {
    if (/Electricity at Work/i.test(option))
      return `The Electricity at Work Regulations impose broad duties to prevent electrical danger at work, but they do not contain this specific consumer PEN-conductor rule.`;
    if (/IEE Wiring/i.test(option))
      return `BS 7671 reflects the installation requirement but is a non-statutory technical standard; the legal prohibition is in the Electricity Safety, Quality and Continuity Regulations.`;
    return `The Supply of Machinery Regulations govern machinery placed on the market, not the neutral and protective-conductor arrangement of a consumer's fixed installation.`;
  }
  if (/Lighting installations in bus shelters/i.test(prompt)) {
    if (/CCTV/i.test(option))
      return `CCTV may deter vandalism but cannot detect current leaking from damaged lighting equipment to Earth or through a person.`;
    if (/circuit breakers/i.test(option))
      return `Double-pole circuit-breakers open on overload or short circuit, not the small line-to-neutral current imbalance that a 30 mA RCD uses for shock protection.`;
    return `Graffiti-resistant covers protect surfaces from damage but do not disconnect the supply when current leaks to Earth through a person or exposed metalwork.`;
  }
  if (/addition is made to an existing installation.*record/i.test(prompt)) {
    if (/Changes in ownership/i.test(option))
      return `Ownership history is an administrative matter and says nothing about the electrical condition found while carrying out the addition.`;
    if (/Records of repair/i.test(option))
      return `Past repairs do not identify defects that are still present; the certificate must warn the client about current defects observed in the existing installation.`;
    return `Voltage drop is a design or test result for a circuit and is recorded in the relevant technical schedule, not as an existing-installation defect discovered with the addition.`;
  }
  if (/External influences coded BE/i.test(prompt)) {
    if (/Capability/i.test(option))
      return `Capability of persons uses the BA code family because it describes who uses the installation, not the materials processed or stored there.`;
    if (/evacuation/i.test(option))
      return `Emergency-evacuation conditions use the BD family, which describes how easily people can leave rather than the fire or explosion properties of stored material.`;
    return `Movement of air is an environmental condition; BE instead classifies hazards created by the nature of materials processed or stored.`;
  }
  if (/fundamental principles.*voltage disturbances/i.test(prompt)) {
    if (/Load current/i.test(option))
      return `Load current is used for conductor and protective-device sizing; it is not a disturbance emitted by equipment that could affect another system.`;
    if (/Vibration/i.test(option))
      return `Vibration is a mechanical external influence addressed by support and equipment selection, not an electrical voltage or electromagnetic disturbance.`;
    return `Weather affects enclosure and environmental selection, whereas this principle requires the designer to anticipate electromagnetic emissions that could disturb other equipment.`;
  }
  if (
    /Section 714 on outdoor lighting/i.test(prompt) ||
    /Outdoor lighting involves.*except/i.test(prompt)
  ) {
    if (/Flood/i.test(option))
      return `Floodlighting is fixed outdoor illumination and therefore sits within Section 714.`;
    if (/road traffic/i.test(option))
      return `Illuminated road-traffic equipment is specifically part of Section 714's outdoor-lighting applications.`;
    return `Lighting in outdoor public shelters is covered by Section 714; temporary festoon lighting is the excluded arrangement.`;
  }
  if (/minor works certificate should be issued/i.test(prompt)) {
    if (/domestic/i.test(option))
      return `Certificate choice depends on the extent of work, not the premises: a domestic new circuit still requires an Electrical Installation Certificate.`;
    if (/property has been extended/i.test(option))
      return `A building extension says nothing about the electrical work; it could involve no wiring or could include a new circuit requiring an EIC.`;
    return `Adding a new circuit requires the design, construction and verification declarations on an Electrical Installation Certificate, not a Minor Works Certificate.`;
  }
  if (/characteristics of supply should be determined/i.test(prompt)) {
    if (/socket outlets/i.test(option))
      return `Socket-outlet quantity is a load and layout decision made after the incoming supply characteristics are known.`;
    if (/Manufacturers/i.test(option))
      return `Manufacturer information helps select equipment but does not reveal whether the incoming supply is a.c. or d.c., its voltage, frequency or earthing arrangement.`;
    return `Permission from the electricity company is an administrative approval; the designer needs its declared technical supply data, not permission as a supply characteristic.`;
  }
  if (
    /reason for dividing an installation into circuits|installation should be divided into circuits as necessary to avoid/i.test(
      prompt,
    )
  ) {
    if (/discrimination/i.test(option))
      return `Selectivity problems are solved by coordinating the time-current characteristics of upstream and downstream protective devices; merely splitting wiring into circuits does not guarantee it.`;
    if (/Unauthorised interference/i.test(option))
      return `Unauthorised interference is controlled by access, locking and supervision, not simply by increasing the number of circuits.`;
    return `Wiring practicality may influence the layout, but the safety objective of circuit division is to limit danger and the extent of supply loss after a fault.`;
  }
  if (/TN system of earthing is used in a marina/i.test(prompt)) {
    if (/RCD/i.test(option))
      return `RCDs are essential additional and fault protection for shore-supply circuits; the prohibited item is the combined PEN conductor.`;
    if (/earth conductors/i.test(option))
      return `A separate protective conductor is required to carry fault current safely; it is the combination of protective and neutral functions in a PEN that is unsafe at a marina.`;
    return `Overcurrent and residual-current protective devices are still required; the marina restriction targets a PEN because an open PEN can raise a vessel's metalwork to dangerous voltage.`;
  }
  if (/shall not be used as an isolator/i.test(prompt)) {
    if (/Circuit breakers/i.test(option))
      return `A circuit-breaker marked and rated for isolation provides a visible or indicated mechanical contact separation as well as overcurrent protection.`;
    if (/Fuse links/i.test(option))
      return `Removing a fuse link can provide a physical isolation gap when the arrangement is suitable and safe procedures prevent replacement.`;
    return `Withdrawing a plug physically separates all connected live conductors, so a suitable plug-and-socket connection can isolate equipment.`;
  }
  if (
    /taken into consideration when calculating the voltage drop/i.test(prompt)
  ) {
    if (/current carrying capacity/i.test(option))
      return `Current-carrying capacity Iz is the cable's thermal limit; voltage drop is calculated from the actual design current, cable impedance and route length.`;
    if (/Nominal current setting/i.test(option))
      return `The protective-device setting may be higher than the load's design current, so using it would not represent the normal voltage lost along the cable.`;
    return `The current that operates protection is a fault-condition value used for disconnection checks, not the normal load current used in a voltage-drop calculation.`;
  }
  if (/disconnection of the neutral conductor in an IT system/i.test(prompt)) {
    if (
      /disconnected before.*reconnected at the same time as or after/i.test(
        option,
      )
    )
      return `This leaves line conductors connected while neutral is open during both disconnection and reconnection, allowing unsafe displacement of the neutral point and load voltages.`;
    if (
      /disconnected before.*reconnected at the same time as or before/i.test(
        option,
      )
    )
      return `Reconnecting neutral first is safe, but disconnecting it before the lines can leave an energised installation with a floating neutral.`;
    return `The disconnection order is acceptable here, but reconnecting neutral after the lines energises the system while its neutral point is still floating.`;
  }
  if (/insulated PEN conductor be identified/i.test(prompt)) {
    if (/Blue insulation/i.test(option))
      return `Blue alone identifies only the neutral function and gives no warning that the conductor also carries protective-earth fault current.`;
    if (/throughout its length only/i.test(option))
      return `Green-and-yellow alone identifies only a protective conductor; blue termination marking is also needed to show the PEN's neutral function.`;
    return `Single green is obsolete and is not the protective-conductor colour; a PEN requires green-and-yellow throughout with blue at its terminations.`;
  }
  if (
    /Flexible class 5 conductors/i.test(question.options[question.answer]) &&
    /wiring system in a caravan/i.test(prompt)
  ) {
    if (/class 3/i.test(option))
      return `Class 3 is not the specified BS EN 60228 flexible-conductor class for this caravan wiring method and does not provide the required flexibility.`;
    if (/class 4/i.test(option))
      return `Class 4 is likewise not the recognised class specified for this flexible fixed-wiring application; class 5 is the required construction.`;
    return `Class 6 has finer, extra-flexible strands intended for highly flexible cords and may need special terminals; the caravan fixed-wiring requirement specifically calls for class 5.`;
  }
  if (/Switching off electrical loads for variable periods/i.test(prompt)) {
    if (/Efficiency measures/i.test(option))
      return `Efficiency measures are the broad family of actions that reduce energy use; they do not name the deliberate temporary disconnection of loads.`;
    if (/Energy efficiency/i.test(option))
      return `Energy efficiency is the desired outcome, whereas load shedding is the specific control action of switching selected loads off for a period.`;
    return `Metering measures when and how much energy is used but does not itself switch loads off to hold demand below a target.`;
  }
  if (/protective conductor shall not pass through a RCD/i.test(prompt)) {
    if (/^Except where this is unavoidable$/i.test(option))
      return `Unavoidability alone is insufficient: the protective conductor must pass through the sensing core in both directions so its magnetic effects cancel.`;
    if (/reverse direction/i.test(option))
      return `One pass in the reverse direction creates rather than cancels a residual signal; the exceptional arrangement needs equal outward and return passes.`;
    return `The prohibition is not absolute: where a pass is unavoidable, routing the conductor through the core in both directions prevents it influencing the RCD.`;
  }
  if (/Safety services are frequently regulated by/i.test(prompt)) {
    if (/COSHH/i.test(option))
      return `COSHH controls exposure to hazardous substances; it does not set continuity or changeover requirements for emergency lighting, alarms or other electrical safety services.`;
    if (/PUWER/i.test(option))
      return `PUWER governs the safe provision and use of work equipment, not which authority regulates a building's life-safety electrical services.`;
    return `The Electricity at Work Regulations impose broad duties to prevent electrical danger at work, but they are not the statutory authority that specifies a particular safety service.`;
  }
  if (/Live parts shall be completely covered with insulation/i.test(prompt)) {
    if (/Instructed persons/i.test(option))
      return `Instruction reduces a person's likelihood of touching live parts but does not make removable insulation a permanent basic-protection barrier.`;
    if (/Skilled persons/i.test(option))
      return `A skilled person may use tools and safe-isolation procedures for work, but their competence does not allow normal removal of insulation that provides basic protection.`;
    return `Permission is an administrative control and cannot stop the insulation being casually removed; this barrier must be integral enough that removal destroys it.`;
  }
  if (/presence of water.*outside in caravan parks.*minimum IP/i.test(prompt)) {
    if (/IP1X/i.test(option))
      return `IP1X addresses access by large solid objects but contains no water-protection digit, so it gives no protection from outdoor rain or splashing.`;
    if (/IP3X/i.test(option))
      return `IP3X addresses entry by small solid objects and still specifies no water-ingress protection.`;
    return `IP5X is a dust-protection rating; without a second-digit water rating it does not demonstrate the required IPX4 splash resistance.`;
  }
  if (/extra-low voltage provided by SELV requires/i.test(prompt)) {
    if (/all circuits other than SELV and PELV/i.test(option))
      return `Ordinary higher-voltage circuits require protective separation from SELV, which is stronger than the basic insulation stated here because one fault must not transfer mains voltage into the SELV circuit.`;
    if (/any other SELV or PELV system/i.test(option))
      return `Separate SELV and PELV circuits are already extra-low voltage; insulation between them does not establish the feature that makes this circuit SELV—its live parts must remain insulated from Earth.`;
    return `Another SELV circuit is also unearthed and safety-separated, so insulation from that circuit alone does not preserve the defining separation between this SELV system and Earth.`;
  }
  if (/points? of connection would a warning notice NOT need/i.test(prompt)) {
    if (/earth electrode/i.test(option))
      return `The earthing-conductor connection at an electrode needs a durable “Safety electrical connection—do not remove” label because disconnection would remove the installation's Earth reference.`;
    if (/gas pipe/i.test(option))
      return `The main-bonding clamp on a gas service needs a BS 951 warning label because removing it can leave accessible pipework at a dangerous imported potential.`;
    return `The main-bonding clamp on a water service also needs a BS 951 label so plumbers or other workers do not unknowingly remove the equipotential bond.`;
  }
  if (
    /protective measure can be used.*supply of inland navigation vessels/i.test(
      prompt,
    )
  ) {
    if (/earth free/i.test(option))
      return `Earth-free local equipotential bonding is a controlled special measure and is not permitted as the ordinary shock-protection arrangement for public vessel shore connections.`;
    if (/Obstacle/i.test(option))
      return `An obstacle can be deliberately bypassed and relies on skilled control, which cannot be guaranteed for vessel users connecting equipment at the shore.`;
    return `Placing live parts out of reach is unreliable around movable leads, vessels and changing water levels, so it is not an accepted protective measure here.`;
  }
  if (/nominal AC supply voltage.*caravan shall not exceed/i.test(prompt)) {
    if (/115 V single-phase, or 230 V three-phase/i.test(option))
      return `Both limits are unnecessarily low and omit the normal permitted caravan supplies of 230 V single-phase and 400 V line-to-line three-phase.`;
    if (/115 V single-phase, or 400 V three-phase/i.test(option))
      return `The three-phase limit is correct, but 115 V wrongly excludes the permitted 230 V single-phase supply.`;
    return `The single-phase limit is correct, but 230 V three-phase is not the maximum; a standard three-phase caravan installation may be supplied at up to 400 V line-to-line.`;
  }
  if (
    /RCD is required.*PV AC supply circuit.*separation between AC and DC/i.test(
      prompt,
    )
  ) {
    if (/BS 1361/i.test(option))
      return `A BS 1361 fuse clears overload and short-circuit current but cannot detect residual current, including smooth d.c. leakage from the inverter.`;
    if (/BS 88/i.test(option))
      return `A BS 88 fuse also responds only to overcurrent; it provides no residual-current sensing or protection against d.c. components entering the a.c. side.`;
    return `A Type C circuit-breaker describes an overcurrent trip curve, not an RCD type, so smooth d.c. residual current could remain undetected.`;
  }
  if (
    /total number of socket-outlets.*connected to a fused spur/i.test(prompt)
  ) {
    if (/half the number/i.test(option))
      return `There is no half-the-ring numerical limit for a fused spur; the fused connection unit limits downstream current, so socket count follows the connected load.`;
    if (/total number/i.test(option))
      return `Copying the ring's outlet count is arbitrary because a fused spur's capacity is set by its fuse and downstream design, not by how many outlets are on the ring.`;
    return `One single or one twin socket is the familiar limit for an unfused spur; a fused spur may supply more outlets provided their total design load stays within the fuse rating.`;
  }
  if (/bathroom.*protective measure of obstacles/i.test(prompt)) {
    if (/all zones/i.test(option))
      return `Obstacles are prohibited throughout the bathroom because ordinary users can bypass them and wet skin greatly increases shock risk.`;
    if (/zone 2 only/i.test(option))
      return `Zone 2 is still used by ordinary people near water, so it does not create the skilled, controlled access on which obstacles depend.`;
    return `Neither zone 1 nor zone 2 provides controlled skilled access; water exposure makes an intentionally bypassable obstacle unsuitable in both.`;
  }
  if (/formula S = √If2t\/k/i.test(prompt)) {
    if (/amplitude/i.test(option))
      return `Fault-current amplitude is represented by If; k is the material-and-insulation factor that expresses the conductor's thermal withstand.`;
    if (/minimum size/i.test(option))
      return `The calculated conductor cross-sectional area is S, while k is the factor used to convert fault energy into the required area.`;
    return `Fault duration is t; k instead depends on conductor material, insulation and permitted initial and final temperatures.`;
  }
  return;
}

function contextualTeaching(question: ExamQuestion, option: string): string {
  const prompt = question.prompt;

  if (/means of connection need not take account/i.test(prompt)) {
    if (/cross-sectional area/i.test(option)) {
      return `${option} determines whether the terminal can accept the conductor and carry its current without overheating.`;
    }
    if (/material.*insulation/i.test(option)) {
      return `${option} affects terminal compatibility, corrosion and permitted operating temperature, so it is essential to the connection choice.`;
    }
    return `${option} controls how the terminal grips the conductor; a terminal suitable for solid wire may damage or loosen fine strands.`;
  }

  if (
    /visual inspection|inspection of a new installation|item for inspection/i.test(
      prompt,
    )
  ) {
    if (/connection of conductors/i.test(option)) {
      return `${option} must be inspected because a loose, misplaced or poorly terminated conductor can overheat or defeat protection.`;
    }
    if (/methods? of protection/i.test(option)) {
      return `${option} must be identified and checked so the installation's shock-protection strategy is visibly complete.`;
    }
    if (/diagram|instruction|information/i.test(option)) {
      return `${option} is needed to identify circuits, isolation points and safety arrangements for operation and future work.`;
    }
    if (/under.?voltage/i.test(option)) {
      return `${option} must be checked where loss and restoration of voltage could restart machinery or create danger.`;
    }
  }

  if (
    /mechanical protection code|mechanical impact/i.test(prompt) &&
    /^IP/i.test(option)
  ) {
    return `${option} is an ingress-protection code for access, dust or water; resistance to mechanical impact is expressed by an IK code.`;
  }

  if (
    /classification of external influence|external influences?|coded?/i.test(
      prompt,
    )
  ) {
    if (/^AD$/i.test(option))
      return `${option} identifies the presence of water, a real marina influence that equipment selection must address.`;
    if (/^AE$/i.test(option))
      return `${option} identifies foreign solid bodies, which remain relevant to exposed marina equipment.`;
    if (/^AF$/i.test(option))
      return `${option} identifies corrosive or polluting substances, including the salt-laden marina environment.`;
    return `${option} belongs to an external-influence family describing another stated environmental, utilisation or construction condition.`;
  }

  if (/insulation resistance test/i.test(prompt)) {
    if (/a\.c\.?/i.test(option)) {
      return `${option} uses alternating voltage; insulation-resistance instruments apply the specified steady d.c. voltage so leakage can be measured consistently.`;
    }
    if (/0\.5\s*M/i.test(option)) {
      return `${option} uses the right 500 V d.c. test level but accepts only 0.5 MΩ; a normal low-voltage circuit must reach the stated 1 MΩ minimum.`;
    }
  }

  if (
    /loop impedance.*reading|determining the external loop impedance/i.test(
      prompt,
    )
  ) {
    if (/furthest outlet/i.test(option)) {
      return `${option} includes the final circuit conductors and measures Zs, not the external impedance Ze at the origin.`;
    }
    if (/supply and furthest/i.test(option)) {
      return `${option} mixes two measurement points; Ze is obtained at the origin with the installation isolated from downstream parallel paths.`;
    }
    return `${option} subtracts R1+R2 from a supply reading even though those circuit conductors are not part of a true Ze measurement at the origin.`;
  }

  if (/operating principle of an RCD/i.test(prompt)) {
    if (/neutral.*earth/i.test(option)) {
      return `${option} describes one possible fault, but an RCD responds to any sufficient difference between currents in its live conductors.`;
    }
    if (/fusible element/i.test(option)) {
      return `${option} is how a fuse clears overcurrent; an RCD uses a summation transformer and trip mechanism rather than melting a link.`;
    }
    return `${option} describes a thermal overcurrent action; neutral current is normal and only an imbalance causes an RCD to trip.`;
  }

  if (
    /socket-outlet.*risk-assessment exception|additional protection.*socket/i.test(
      prompt,
    )
  ) {
    if (/ordinary persons|children|disabled/i.test(option)) {
      return `${option} is exactly the user group for whom 30 mA additional protection is normally required, so routine use cannot justify omission.`;
    }
    if (/mobile equipment.*outdoors/i.test(option)) {
      return `${option} has an elevated outdoor shock risk and remains subject to 30 mA RCD additional protection.`;
    }
    if (/radial|ring circuit|20A CB/i.test(option)) {
      return `${option} changes circuit topology or overcurrent rating but provides no 30 mA residual-current protection against electric shock.`;
    }
  }

  if (/changeover time/i.test(prompt)) {
    if (/how long.*supply/i.test(option)) {
      return `${option} is the source's rated duration or autonomy, measured after it has taken over the load.`;
    }
    if (/maintenance/i.test(option)) {
      return `${option} is a service interval and says nothing about how quickly the safety supply becomes available after failure.`;
    }
    return `${option} is electrical frequency, not elapsed transfer time following loss of the normal source.`;
  }

  if (/test button|fixed notice/i.test(prompt)) {
    return `${option} states an obsolete, vague or non-standard interval; the current notice uses the six-month test-button instruction unless the manufacturer says otherwise.`;
  }

  if (
    /common terminal.*autotransformer|auto-transformer.*common terminal/i.test(
      prompt,
    )
  ) {
    return `${option} is not the normal return conductor; putting the common winding terminal there could leave the output referenced unsafely when switching or faults occur.`;
  }

  if (/Section 714|outdoor lighting/i.test(prompt)) {
    if (/flood/i.test(option))
      return `${option} is outdoor illumination and is within Section 714's outdoor-lighting subject matter.`;
    if (/road traffic/i.test(option))
      return `${option} is specifically included as outdoor lighting equipment under the section's stated applications.`;
    if (/shelter/i.test(option))
      return `${option} is an outdoor public installation whose lighting remains covered by Section 714.`;
  }

  if (/\bPEN conductors?\b|\bPME\b/i.test(prompt)) {
    return `${option} does not create an electrically independent private source; a metallic connection to the distributor can retain the prohibited combined PEN condition.`;
  }

  if (/generating set.*parallel/i.test(prompt)) {
    if (/load side/i.test(option)) {
      return `${option} would bypass or mis-coordinate upstream protection and isolation when the generator operates in parallel.`;
    }
    return `${option} puts the source in the correct general position but omits the additional protection, isolation and parallel-operation controls.`;
  }

  if (/minor works certificate/i.test(prompt)) {
    if (/domestic installation/i.test(option))
      return `${option} describes a premises type; certificate choice depends on the extent of work, not whether the premises is domestic.`;
    if (/property.*extended/i.test(option))
      return `${option} does not say whether a new circuit was installed, so it cannot by itself justify a Minor Works Certificate.`;
    return `${option} explicitly adds a new circuit, which requires an Electrical Installation Certificate rather than a Minor Works Certificate.`;
  }

  if (/polarity test/i.test(prompt)) {
    if (/circuit protection/i.test(option))
      return `${option} is established by protective-device selection and fault tests, not by confirming conductor polarity.`;
    if (/low resistance/i.test(option))
      return `${option} describes the fault-loop requirement needed to operate protection, which is checked by continuity and loop-impedance testing.`;
  }

  if (
    /(?:junction box.*zone 1.*pool|zone 1.*pool.*junction box)/i.test(prompt)
  ) {
    if (/IPX2/i.test(option))
      return `${option} protects only against dripping water and is inadequate for the wet pool-zone exposure.`;
    return `${option} may improve water sealing but does not limit touch voltage or create the separated SELV source required for the box.`;
  }

  if (/basic protection protects/i.test(prompt)) {
    return `${option} describes danger after a fault or overload; basic protection instead prevents contact with live parts during normal fault-free use.`;
  }

  if (/high integrity protective conductor/i.test(prompt)) {
    if (/insulated conduit/i.test(option))
      return `${option} provides containment but no second protective path if the CPC connection is lost.`;
    return `${option} is too small for the specified high protective-conductor current and lacks the duplicated or reinforced connection needed for integrity.`;
  }

  if (/warning label|warning notice|notice must bear/i.test(prompt)) {
    return `${option} gives incomplete or non-prescribed wording, so a future worker may not recognise the exact protective connection or electrical danger.`;
  }

  if (/dodgems/i.test(prompt)) {
    return `${option} reverses or exceeds the permitted a.c. and d.c. extra-low-voltage limits, increasing touch-voltage risk to riders and operators.`;
  }
  if (/breaking capacity/i.test(prompt)) {
    return `${option} is an arbitrary or earth-fault-only value; breaking capacity must be no less than the greatest prospective fault current the device may interrupt.`;
  }
  if (/prospective fault current.*taken into account/i.test(prompt)) {
    return `${option} is a supply-loop or earthing quantity, but prospective fault current is used to prove the selected device can interrupt the fault safely.`;
  }
  if (/before conducting an insulation resistance test/i.test(prompt)) {
    return `${option} is a separate preparation or verification step; sensitive loads and lamps must first be disconnected or removed so the d.c. test neither damages them nor distorts the reading.`;
  }
  if (
    /(?:BS ?7671.*(?:does not apply|not covered|not within|apply to)|not covered by BS ?7671)/i.test(
      prompt,
    )
  ) {
    return `${option} is an installation type expressly covered by BS 7671 or one of its special sections, so it cannot be treated as outside scope.`;
  }
  if (/single fault conditions|fault protection/i.test(prompt)) {
    if (/additional protection/i.test(option))
      return `${option} is a supplementary safeguard, such as a 30 mA RCD, used when the normal protective measure may not be enough.`;
    if (/supplementary protection/i.test(option))
      return `${option} is not the BS 7671 defined term for the primary protection provided after a single fault.`;
    return `${option} addresses another effect; fault protection specifically prevents shock when basic insulation or another normal safeguard fails.`;
  }
  if (/automatic disconnection of supply/i.test(prompt)) {
    return `${option} describes voltage or thermal control, but automatic disconnection operates after a fault to limit the duration of dangerous touch voltage.`;
  }
  if (
    /may not be used as an earth electrode|cannot be used as an earth electrode|sole means of earthing/i.test(
      prompt,
    )
  ) {
    return `${option} can form an electrode when it has suitable contact with Earth, durability and dimensions; the prohibition instead targets unsafe service pipes or unsuitable items.`;
  }
  if (/designer of a new installation/i.test(prompt)) {
    return `${option} is a qualification or reference-book claim, not the designer's duty to ensure the design complies and is properly documented.`;
  }
  if (/non-sheathed cables.*installed/i.test(prompt)) {
    return `${option} is an environmental location, not protective containment; unsheathed live conductors need conduit, trunking or ducting for mechanical protection.`;
  }
  if (/final circuit is the wiring between/i.test(prompt)) {
    return `${option} lies upstream of the final overcurrent protective device or belongs to earthing, so it is not the wiring that directly supplies current-using equipment or outlets.`;
  }
  if (/regular maintenance|frequency of maintaining/i.test(prompt)) {
    return `${option} is a real safety or accessibility consideration that maintenance planning must preserve; it therefore cannot be discarded from that assessment.`;
  }
  if (/Regulations are designed to provide/i.test(prompt)) {
    return `${option} implies exhaustive job instructions, but BS 7671 states safety principles and requirements rather than specifying every design detail or training an unskilled person.`;
  }
  if (
    /minimum current carrying capacity|rating factors.*ambient/i.test(prompt)
  ) {
    return `${option} is a real derating input or a temperature with a factor other than unity; ignoring it can leave the selected conductor thermally overloaded.`;
  }
  if (
    /included for checking during.*initial verification|initial verification.*included/i.test(
      prompt,
    )
  ) {
    return `${option} is a contractual change record, not an electrical safety item that inspection and testing can verify in the completed installation.`;
  }
  if (/certificate.*signed|periodic inspection.*given to/i.test(prompt)) {
    return `${option} is a commercial or supply role and does not hold the specific responsibility for design, construction, inspection, testing or receipt of the report.`;
  }
  if (/risk of injury from/i.test(prompt)) {
    return `${option} is a general occupational-health hazard, not one of the electrical shock, burn, fire or explosion risks addressed by the Wiring Regulations.`;
  }
  if (/statutory control of an authoritative body/i.test(prompt)) {
    return `${option} is subject to licensing, fire-safety or petroleum controls by an authority, unlike an ordinary dwelling without that specialist regime.`;
  }
  if (/type of building construction.*effect is called/i.test(prompt)) {
    return `${option} concerns interaction between electrical equipment or systems; building construction itself is classified as an external influence on selection and erection.`;
  }
  if (/c\.p\.c.*ring final circuit/i.test(prompt)) {
    return `${option} provides the wrong material or conductor arrangement; a ring CPC must preserve adequate continuity and fault-current capacity around both legs.`;
  }
  if (/ceiling heating.*plan/i.test(prompt)) {
    return `${option} identifies electrical loading or the physical heating layout and is needed so future work avoids damage and the system can be safely maintained.`;
  }
  if (/frequency of periodic inspection/i.test(prompt)) {
    return `${option} affects deterioration, access or reliability and therefore helps set the inspection interval; the excluded choice is the one unrelated to installation condition.`;
  }
  if (/instruction notice.*caravan|transportable unit.*notice/i.test(prompt)) {
    return `${option} belongs at another distribution point or is an electrical rating users need to know; it is not the item omitted from the unit's prominent safety notice.`;
  }
  if (
    /characteristic of the supply|live conductors.*determined/i.test(prompt)
  ) {
    return `${option} is a genuine supply characteristic or must be obtained from the distributor; BS 7671 alone cannot reveal the actual conductors or values provided at site.`;
  }
  if (/enclosures of heaters.*surface temperature/i.test(prompt)) {
    return `${option} is above or below the prescribed 90 °C boundary; a higher value can ignite dust or stored material, while a lower value is not the maximum asked for.`;
  }
  if (/eddy currents/i.test(prompt)) {
    return `${option} avoids the issue only by changing the supply type; the installation rule instead keeps all conductors of each a.c. circuit together through ferrous enclosures.`;
  }
  if (/spread of fire.*sealing materials/i.test(prompt)) {
    return `${option} is a genuine fire-stop requirement: the seal must remain compatible, stable and resistant to the same relevant influences as the wiring system.`;
  }
  if (/reference.*installation method|reference method/i.test(prompt)) {
    return `${option} denotes another tabulated cable arrangement; surface conduit containing multicore cable or perforated-tray installation uses the specifically assigned reference method.`;
  }
  if (
    /(?:20A radial circuit.*floor area|floor area.*20A radial circuit)/i.test(
      prompt,
    )
  ) {
    return `${option} exceeds or understates the conventional 50 m² design guide, so it would either overload the radial assumption or reject usable floor area.`;
  }
  if (/ordinary person is/i.test(prompt)) {
    return `${option} describes age, skill or employment, but an ordinary person is defined by having neither electrical skill nor electrical instruction.`;
  }
  if (/plastered wall.*20 mm|concealed.*wall/i.test(prompt)) {
    return `${option} adds identification rather than a protective measure; shallow concealed cable needs a prescribed route, earthed covering, mechanical protection or 30 mA RCD as applicable.`;
  }
  if (/insulation monitoring device/i.test(prompt)) {
    return `${option} sets the alarm above normal insulation rather than below it, so deterioration could become dangerous before the device warns the user.`;
  }
  if (/unfused spur/i.test(prompt)) {
    return `${option} can draw more than one single accessory or item should impose on an unfused spur, risking overload of the spur cable.`;
  }
  if (/fairground installation.*take place/i.test(prompt)) {
    return `${option} is an arbitrary calendar interval; fairground verification is tied to assembly, site movement and the prescribed periodic regime.`;
  }
  if (/avoiding the effects of heat/i.test(prompt)) {
    return `${option} is a recognised way to separate, screen or locally protect wiring from an external heat source, so it cannot be the excluded method.`;
  }
  if (/automatic supply available within 0\.5 s/i.test(prompt)) {
    return `${option} names another safety-source changeover class; a supply available within 0.5 s is classified as a short break.`;
  }
  if (/interface between.*heating unit/i.test(prompt)) {
    return `${option} is descriptive wording rather than the defined interface component, which is the cold tail connecting fixed wiring to the heating element.`;
  }
  if (/earth electrodes.*far enough apart/i.test(prompt)) {
    return `${option} describes electrical separation of circuits, not independent earth electrodes whose resistance areas do not significantly overlap.`;
  }
  if (/two-wire earthed DC.*identification alphanumeric/i.test(prompt)) {
    return `${option} is assigned to another line polarity or conductor arrangement; the earthed-pole convention requires the precise L or L+/L- designation stated.`;
  }
  if (/lightning ground flash density|does ACS stand for/i.test(prompt)) {
    return `${option} is another variable, formula or invented expansion; it is not the recognised abbreviation defined in BS 7671.`;
  }
  if (/BS EN 61439.*EV/i.test(prompt)) {
    return `${option} describes where the charging point sits, but assembly-standard application depends on the charging equipment being incorporated into a low-voltage switchgear assembly.`;
  }
  if (/access through a barrier or enclosure/i.test(prompt)) {
    return `${option} relies only on a label; access must require a key or tool, isolation before opening, or an intermediate barrier that restores basic protection.`;
  }
  if (/characteristic of an amusement device/i.test(prompt)) {
    return `${option} is a normal electrical rating needed to select and connect the device safely, so it should be indicated rather than omitted.`;
  }
  if (/insulation which can only be removed/i.test(prompt)) {
    return `${option} is administrative permission, not the physical requirement that insulation can be removed only by destruction.`;
  }
  if (/part preventing unintentional contact/i.test(prompt)) {
    return `${option} is not the defined term: a barrier prevents unintentional contact while an enclosure also surrounds equipment against access.`;
  }
  if (/interrupting device.*emergency/i.test(prompt)) {
    return `${option} makes the device less accessible or relies on colour alone; emergency controls must be readily recognisable, accessible and operable.`;
  }
  if (/PV.*wiring loops/i.test(prompt)) {
    return `${option} leaves an unnecessarily large loop area in which lightning fields can induce damaging voltage; the route should keep the loop as small as practicable.`;
  }
  if (/high-density livestock/i.test(prompt)) {
    return `${option} describes possible or vaguely necessary automation; the definition hinges on automatic life-support systems being necessary for the animals' survival.`;
  }
  if (/conduit penetration.*fire-resisting/i.test(prompt)) {
    return `${option} leaves an internal or external path for smoke and flame; the penetration must be sealed through its full depth to restore the element's fire resistance.`;
  }
  if (/unintentionally reclosed/i.test(prompt)) {
    return `${option} can prevent operation only when the padlock is actually controlled and applied; the arrangement named in the correct answer offers no such secure restraint by itself.`;
  }
  if (/medical locations.*distribution system/i.test(prompt)) {
    return `${option} protects only the normal network; medical design must maintain essential safety services as well when the normal supply fails.`;
  }
  if (/documentation referred to.*132\.13/i.test(prompt)) {
    return `${option} is a core supply or circuit characteristic needed to demonstrate conformity, so it belongs in the installation documentation.`;
  }
  if (/continuity of service/i.test(prompt)) {
    return `${option} directly improves resilience through alternative supply, earthing choice or condition monitoring, so continuity assessment must consider it.`;
  }
  if (/earthing arrangements must be/i.test(prompt)) {
    return `${option} is a genuine requirement for durable, mechanically protected earthing; it does not replace the electrical relationship and continuous effectiveness also required.`;
  }
  if (/impedance.*loop.*Zs/i.test(prompt)) {
    return `${option} is incomplete terminology; Zs is specifically the earth fault loop impedance of the complete fault-current path.`;
  }
  if (/switching off electrical loads.*optimise demand/i.test(prompt)) {
    return `${option} is a broad efficiency or measurement concept; deliberate timed load reduction is specifically demand-side management.`;
  }
  if (/transient-overvoltage protection be omitted/i.test(prompt)) {
    return `${option} removes only one consequence or cites past weather; omission instead requires the owner to declare the remaining risk tolerable after the serious consequences are excluded.`;
  }
  if (/protective conductor shall not pass through a[n]? RCD/i.test(prompt)) {
    return `${option} invents an exception or an absolute rule; a protective conductor is kept outside the sensing core unless it is part of the monitored live-conductor arrangement specifically permitted.`;
  }
  if (/gas service pipe.*meter is external/i.test(prompt)) {
    return `${option} omits bonding or places it too far from entry; the connection belongs near the point where the service enters the building on the consumer side.`;
  }
  if (/devices may be used for emergency switching/i.test(prompt)) {
    return `${option} is an accessory connection device and is not designed or identified to interrupt the dangerous load rapidly in an emergency.`;
  }
  if (/source.*SELV system/i.test(prompt)) {
    return `${option} is a valid safety-isolating source when it meets BS EN 61558, so it cannot be the non-compliant SELV source.`;
  }
  if (/overload current.*overcurrent/i.test(prompt)) {
    if (/not fully loaded/i.test(option))
      return `${option} describes normal spare capacity, so no overload current exists.`;
    return `${option} describes a short circuit caused by negligible fault impedance, not excessive load in an electrically sound circuit.`;
  }
  if (/heating cables laid directly/i.test(prompt)) {
    return `${option} specifies an operating temperature rather than a protective construction; buried heating cable needs a metal sheath, screen or covering connected to the protective conductor.`;
  }
  if (/caravans.*instruction notice/i.test(prompt)) {
    return `${option} locates the notice at the site's distribution point, where it may not be visible to the caravan user; the notice belongs prominently inside the caravan.`;
  }
  if (/bath or shower.*obstacles and placing out of reach/i.test(prompt)) {
    return `${option} invents a luminaire exception; these access-dependent measures are not permitted in bathroom zones because ordinary users cannot be kept under skilled supervision.`;
  }
  if (
    /(?:20A radial circuit.*floor area|floor area.*20A radial circuit)/i.test(
      prompt,
    ) &&
    /unlimited/i.test(option)
  ) {
    return `${option} ignores the circuit's load and voltage-drop assumptions; the conventional 20 A radial design guide is limited to 50 m².`;
  }
  if (/two-storey.*lighting circuits/i.test(prompt)) {
    return `${option} changes luminaire choice but does not preserve lighting when one protective device operates; separate circuits prevent both floors going dark together.`;
  }
  if (/term.*basic protection/i.test(prompt)) {
    return `${option} describes fault protection after a single failure; basic protection prevents contact with live parts in normal service.`;
  }
  if (/factor.*frequency.*periodic inspection/i.test(prompt)) {
    return `${option} influences how quickly defects develop or are found, so it is a genuine input to the periodic-inspection interval.`;
  }
  if (/PEN.*prohibited.*by/i.test(prompt)) {
    return `${option} is a non-statutory installation standard; the legal prohibition in consumers' installations is imposed through the Electricity Safety, Quality and Continuity Regulations.`;
  }
  if (/BS 7671:2018 applies to/i.test(prompt)) {
    return `${option} is governed by its specialist product or installation standard and is listed outside the ordinary BS 7671 scope.`;
  }
  if (/voltages are not within the scope/i.test(prompt)) {
    return `${option} lies inside the extra-low- and low-voltage ranges covered by BS 7671; the out-of-scope choice exceeds those limits.`;
  }
  if (/residual electrical energy/i.test(option)) {
    return `${option} would leave stored charge capable of shock or arcing; suitable discharge means and a warning are required where dangerous residual energy can remain.`;
  }
  if (/standard notice.*RCD button/i.test(prompt)) {
    return `${option} is less frequent than the current six-month user-test interval and could allow a stuck mechanism to remain undiscovered too long.`;
  }
  if (/protective conductor shall not pass through a[n]? RCD/i.test(prompt)) {
    return `${option} invents an exception or an absolute interpretation; the protective conductor is normally kept outside the RCD sensing core so normal fault current is not cancelled or mismeasured.`;
  }

  const number = numericValue(option);
  if (number) {
    return `${option} sets a numerical level for the wrong operating point or uses the wrong unit relationship; applying it would mis-size, under-protect or unnecessarily restrict the circuit.`;
  }

  if (/^BS|^IEC|standard/i.test(option)) {
    return `${option} is a product or installation standard for another equipment family; citing it here would leave the actual product without its applicable compliance standard.`;
  }
  if (/cable|conductor|wire|trunk|conduit|duct/i.test(option)) {
    return `${option} is a wiring-system feature whose current, heat and mechanical behaviour must be assessed; naming it alone does not provide the precise function required here.`;
  }
  if (/current|fuse|breaker|protective device|CB\b/i.test(option)) {
    return `${option} concerns load or overcurrent behaviour; it does not establish the separate shock, switching, test or installation condition being asked for.`;
  }
  if (/earth|bond|metal|pipe/i.test(option)) {
    return `${option} concerns an earthing, bonding or conductive-part relationship; using it here would create the wrong fault-current path or leave touch voltage uncontrolled.`;
  }
  if (/supply|source|voltage|live|neutral|line|phase/i.test(option)) {
    return `${option} describes a supply or live-conductor condition, but applying it would leave the required separation, disconnection or conductor function unachieved.`;
  }
  if (/switch|control|emergency|operation|start/i.test(option)) {
    return `${option} performs or describes another control action and would not give the secure, clearly identifiable switching duty needed in this situation.`;
  }
  if (/inspection|test|report|certificate|record|diagram/i.test(option)) {
    return `${option} supplies evidence about only one stage or characteristic; it cannot replace the complete inspection, test or certification duty stated.`;
  }
  if (/equipment|installation|circuit|socket|lighting|motor/i.test(option)) {
    return `${option} specifies an equipment or circuit arrangement but does not by itself produce the protection, rating or operating result required here.`;
  }
  if (
    /person|engineer|installer|contractor|authority|company|client/i.test(
      option,
    )
  ) {
    return `${option} names an administrative or project role, not the person who carries the specific technical responsibility described.`;
  }
  if (/zone|room|building|factory|location|premises|site/i.test(option)) {
    return `${option} describes another place or zone whose environmental and access hazards are not the same as those in the stem.`;
  }

  return `${option} would impose the stated condition without providing a physical means to control the electrical hazard or verify the required result.`;
}

function negativeQuestionReason(
  question: ExamQuestion,
  wrongOption: string,
): string | undefined {
  if (
    !/\b(?:does not|doesn't|NOT|need not|excluded|except)\b/i.test(
      question.prompt,
    )
  ) {
    return;
  }
  const specific = questionSpecificTeaching(question, wrongOption);
  if (specific) {
    return specific;
  }
  const purpose = purposeFor(wrongOption);
  if (purpose) {
    return `${wrongOption} ${purpose}.`;
  }
  return contextualTeaching(question, wrongOption);
}

function optionSpecificReason(
  question: ExamQuestion,
  wrongOption: string,
  correctOption: string,
): string {
  const specific = questionSpecificTeaching(question, wrongOption);
  if (specific) {
    return specific;
  }
  const numeric = numericReason(question, wrongOption, correctOption);
  if (numeric) return numeric;
  const ip = ipReason(question, wrongOption, correctOption);
  if (ip) return ip;
  const negative = negativeQuestionReason(question, wrongOption);
  if (negative) return negative;

  const purpose = purposeFor(wrongOption);
  if (purpose) {
    return `${wrongOption} ${purpose}.`;
  }
  return contextualTeaching(question, wrongOption);
}

function reviewed(question: ExamQuestion): ReviewedRationaleSet {
  const wrongChoices = CHOICES.filter((choice) => choice !== question.answer);
  const correctOption = question.options[question.answer];
  const reasons = wrongChoices.map((choice) =>
    optionSpecificReason(question, question.options[choice], correctOption),
  );
  if (new Set(reasons).size !== 3) {
    throw new Error(
      `Repeated generated rationale for Q${question.number}: ${question.prompt}`,
    );
  }
  for (const reason of reasons) {
    if (reason.length < 24 || /…|\.\.\./.test(reason)) {
      throw new Error(
        `Invalid generated rationale for Q${question.number}: ${question.prompt}`,
      );
    }
    if (
      /different design condition|different characteristic|another part of the installation|remains (?:an )?applicable|that is different from|changes the equipment or circuit arrangement|describes a conductor or containment feature|supplies evidence about only one stage|would impose the stated condition|covers familiar UK household plugs/i.test(
        reason,
      )
    ) {
      throw new Error(`Generic rationale for Q${question.number}: ${reason}`);
    }
  }
  return {
    prompt: question.prompt,
    options: CHOICES.map((choice) => question.options[choice]),
    answer: correctOption,
    rationales: Object.fromEntries(
      wrongChoices.map((choice, index) => [
        question.options[choice],
        reasons[index],
      ]),
    ),
    sourceUrls: sourceUrlsFor(question),
  };
}

/**
 * Returns one authored feedback set per semantic question. Earlier variants are
 * used only to suppress shuffled repeats; every returned set retains its exact
 * corrected prompt, choices and answer so integration fails loudly if a key
 * changes later.
 */
export function buildReviewedPart1Sets(
  variantIds: readonly string[],
  earlierVariantIds: readonly string[] = [],
  minimumQuestionByVariant: Readonly<Record<string, number>> = {},
): readonly ReviewedRationaleSet[] {
  const seen = new Set<string>();
  for (const variantId of earlierVariantIds) {
    const variant = variants.get(variantId);
    if (!variant) throw new Error(`Missing earlier variant ${variantId}`);
    for (const question of variant.questions) seen.add(signature(question));
  }

  const result: ReviewedRationaleSet[] = [];
  for (const variantId of variantIds) {
    const variant = variants.get(variantId);
    if (!variant) throw new Error(`Missing 18th Edition variant ${variantId}`);
    const minimumQuestion = minimumQuestionByVariant[variantId] ?? 1;
    for (const question of variant.questions) {
      const key = signature(question);
      if (seen.has(key)) continue;
      seen.add(key);
      if (question.number < minimumQuestion) continue;
      result.push(reviewed(question));
    }
  }
  return result;
}
