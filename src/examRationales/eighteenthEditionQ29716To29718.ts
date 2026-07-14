import eighteenthEditionData from "../exam-data/18th-edition.json";
import { applyExamExplanationEnhancements } from "../examExplanationEnhancements";
import type { Exam, ExamChoice } from "../exams/types";

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
const IET_FIRE =
  "https://electrical.theiet.org/wiring-matters/years/2022/90-may-2022/bs-7671-chapter-42-protection-against-fire/";
const IET_SPD =
  "https://electrical.theiet.org/wiring-matters/years/2023/98-november-2023/surge-protective-devices-spds/";
const IET_ISOLATION =
  "https://electrical.theiet.org/wiring-matters/years/2023/94-march-2023/isolation-and-switching-for-mechanical-maintenance/";
const IET_SPECIAL =
  "https://electrical.theiet.org/media/1605/protective-measures-special-installations-or-locations-part-1.pdf";
const IET_BURIED =
  "https://electrical.theiet.org/wiring-matters/years/2024/101-july-2024/buried-conduits-and-ducts/";
const IET_MEDICAL =
  "https://electrical.theiet.org/wiring-matters/years/2019/77-september-2019/brief-introduction-to-the-deployment-of-medical-it-systems/";
const HSE_EAWR = "https://www.hse.gov.uk/pubns/priced/hsr25.pdf";

const CHOICES: readonly ExamChoice[] = ["A", "B", "C", "D"];
const enhancedExam = applyExamExplanationEnhancements(
  eighteenthEditionData as unknown as Exam,
);
const variants = new Map(
  enhancedExam.sections
    .flatMap((section) => section.variants)
    .map((variant) => [variant.id, variant] as const),
);

function sourcesFor(prompt: string): readonly string[] {
  if (/electricity at work|statutory|health and safety at work/i.test(prompt)) {
    return [HSE_EAWR];
  }
  if (/medical|ME equipment|patient/i.test(prompt)) return [IET_MEDICAL];
  if (/surge|transient|overvoltage|\bSPD\b|impulse/i.test(prompt)) {
    return [IET_SPD];
  }
  if (/\bRCD\b|residual current/i.test(prompt)) return [IET_RCD];
  if (/fire|temperature|burn|AFDD|smoke/i.test(prompt)) return [IET_FIRE];
  if (/isolat|switching|firefighter/i.test(prompt)) return [IET_ISOLATION];
  if (
    /bath|shower|pool|sauna|caravan|agricultur|construction site|exhibition|transportable/i.test(
      prompt,
    )
  ) {
    return [IET_SPECIAL];
  }
  if (/buried|ground|joist|batten|underground/i.test(prompt))
    return [IET_BURIED];
  if (
    /inspect|test|certificate|report|instrument|polarity|continuity|insulation resistance/i.test(
      prompt,
    )
  ) {
    return [IET_INSPECTION, IET_MODEL_FORMS];
  }
  if (
    /earth|bond|protective conductor|\bcpc\b|TN-|TT system|IT system|fault loop|\bZs\b/i.test(
      prompt,
    )
  ) {
    return [IET_EARTHING];
  }
  if (/scope|BS ?7671|IET Wiring|IEE Regulations/i.test(prompt)) {
    return [IET_GENERAL, IET_CURRENT];
  }
  return [IET_CURRENT];
}

export function reviewed18ePart2(
  variantId: string,
  questionNumber: number,
  wrongReasons: readonly [string, string, string],
) {
  const question = variants
    .get(variantId)
    ?.questions.find((entry) => entry.number === questionNumber);
  if (!question) throw new Error(`Missing ${variantId} Q${questionNumber}`);

  const wrongChoices = CHOICES.filter((choice) => choice !== question.answer);
  if (new Set(wrongReasons).size !== 3) {
    throw new Error(`Repeated rationale for ${variantId} Q${questionNumber}`);
  }
  for (const reason of wrongReasons) {
    if (
      reason.length < 28 ||
      /…|\.\.\.|does(?: not|n't) fit|wrong feature|applicable answer|the correct answer/i.test(
        reason,
      )
    ) {
      throw new Error(`Invalid rationale for ${variantId} Q${questionNumber}`);
    }
  }

  return {
    prompt: question.prompt,
    options: CHOICES.map((choice) => question.options[choice]),
    answer: question.options[question.answer],
    rationales: Object.fromEntries(
      wrongChoices.map((choice, index) => [
        question.options[choice],
        wrongReasons[index],
      ]),
    ),
    sourceUrls: sourcesFor(question.prompt),
  };
}

const q29716 = [
  reviewed18ePart2("quiz-29716", 1, [
    "Aircraft electrical equipment is governed by specialist aviation standards rather than the fixed-installation rules in BS 7671.",
    "A fixed offshore installation has its own offshore safety regime and is expressly outside the ordinary BS 7671 scope.",
    "The lift installation itself is designed to its dedicated lift standard, although the building supply feeding it still follows BS 7671.",
  ]),
  reviewed18ePart2("quiz-29716", 2, [
    "BS 7671 states safety requirements and leaves the detailed project specification to the designer; it is not a complete job specification.",
    "No standard can prescribe every site circumstance, so a competent designer still has to assess the actual installation and external influences.",
    "The document assumes skilled application; it is not a step-by-step work instruction intended to make an untrained person competent.",
  ]),
  reviewed18ePart2("quiz-29716", 3, [
    "Temporary construction-site installations are specifically addressed by Section 704 because their supplies and equipment face unusually harsh conditions.",
    "Prefabricated buildings contain fixed wiring and remain within BS 7671 even though much of the installation is assembled away from site.",
    "Electrical installations in public premises still require BS 7671 design and verification; public access increases rather than removes the safety need.",
  ]),
  reviewed18ePart2("quiz-29716", 4, [
    "The 1955 cinematograph rules are obsolete specialist legislation and are not the general workplace electrical duties supported by BS 7671.",
    "ESQCR chiefly governs distributors and electricity networks; it is not the main legislation controlling how employers prevent electrical danger at work.",
    "HSWA supplies broad employer duties, but the Electricity at Work Regulations contain the direct, equipment-specific electrical safety requirements.",
  ]),
  reviewed18ePart2("quiz-29716", 5, [
    "Emergency lighting is covered by BS 5266 as a safety service; the vague label alone does not identify this Part 7 installation category.",
    "Explosive-atmosphere equipment and installation practices require the BS EN 60079 series in addition to workplace hazardous-area law.",
    "Mines and quarries are governed by specific statutory requirements and are excluded from the normal BS 7671 scope where those rules apply.",
  ]),
  reviewed18ePart2("quiz-29716", 6, [
    "The Regulations establish essential safety outcomes, while the designer selects detailed methods for the particular supply, load and environment.",
    "Building lightning-protection systems are designed to BS EN 62305 and are not the subject of BS 7671's general installation instructions.",
    "Economy may influence a design only after safety is achieved; choosing the cheapest arrangement cannot override protection against shock or fire.",
  ]),
  reviewed18ePart2("quiz-29716", 7, [
    "Asbestos is a serious construction health hazard, but it is controlled by asbestos law rather than the electrical protective measures in BS 7671.",
    "Hazardous chemicals need COSHH controls; their toxicity is not an injury mechanism created by current flowing in an electrical installation.",
    "High wind is an external influence on equipment selection, not the direct electrical injury mechanism that shock protection is designed to limit.",
  ]),
  reviewed18ePart2("quiz-29716", 8, [
    "Installer experience affects competence and supervision, but the selected wiring system must suit the conditions it will face throughout service.",
    "Using whatever material happens to be on site reverses proper design; the cable and containment must first be selected for the assessed risks.",
    "Voltage drop is checked after the circuit arrangement and conductor are proposed; it is not the only external influence governing wiring-system type.",
  ]),
  reviewed18ePart2("quiz-29716", 9, [
    "Some installations legitimately use more than one device or arrangement for isolation, so one physical main switch is not a universal form requirement.",
    "Opening only line is insufficient where another live conductor can retain a hazardous voltage; isolation must address every relevant live source.",
    "A main switch performs switching and isolation; fitting BS 88 fuses is neither necessary for that function nor required in every installation.",
  ]),
  reviewed18ePart2("quiz-29716", 10, [
    "A periodic report is produced only for periodic verification; initial verification instead uses the certificate and schedules appropriate to the new work.",
    "Owning the standard does not demonstrate the practical skill, instrument knowledge or judgement needed to inspect and test safely.",
    "A fixed number of years cannot prove competence because relevant training, experience and ability vary with the installation and the work undertaken.",
  ]),
  reviewed18ePart2("quiz-29716", 11, [
    "Leakage current may flow through insulation or capacitance during normal service and is not defined by the load exceeding a circuit rating.",
    "Protective-conductor current is the normal or fault-related current in the earthing path; it does not describe excessive load on a sound circuit.",
    "A short circuit is a low-impedance fault between live conductors, whereas an overload leaves the circuit electrically intact and simply draws too much current.",
  ]),
  reviewed18ePart2("quiz-29716", 12, [
    "A Band I supply describes a voltage category and can form one protective method, but it is not the definition of fault protection itself.",
    "Insulated enclosures prevent normal contact with live parts and therefore provide basic protection rather than protection after insulation failure.",
    "Dust ingress is controlled by enclosure selection and IP rating; it is separate from limiting shock when exposed metal becomes live under fault conditions.",
  ]),
  reviewed18ePart2("quiz-29716", 13, [
    "Fuse current-carrying capability is a device characteristic; circuit design current comes from the load expected in normal operation.",
    "The current that guarantees device operation is Ia or I2, used for protection checks, and is normally higher than the intended load current.",
    "The protective-device rating In is selected around the design current but is not itself the current the connected equipment is expected to draw.",
  ]),
  reviewed18ePart2("quiz-29716", 14, [
    "A radiator is normally extraneous metalwork connected to a service, not electrical equipment with a casing that could become live from its own insulation fault.",
    "A water pipe can introduce Earth potential and may need bonding, but it is not an exposed-conductive-part of current-using equipment.",
    "Class II equipment uses double or reinforced insulation and is constructed without an exposed metal casing that relies on a protective conductor.",
  ]),
  reviewed18ePart2("quiz-29716", 15, [
    "Protective-conductor current names current in an earthing conductor and can exist normally; it does not define a line-to-neutral fault path.",
    "An overcurrent in an electrically sound circuit is an overload, because no negligible-impedance connection has formed between live conductors.",
    "A fuse rating is its intended current characteristic, not the potentially much larger current produced by a short circuit.",
  ]),
  reviewed18ePart2("quiz-29716", 16, [
    "FELV describes a functional arrangement lacking the full SELV or PELV safeguards; voltage magnitude alone cannot establish that system type.",
    "The low-voltage d.c. band begins above 120 V, so an 80 V supply remains within extra-low voltage.",
    "SELV requires safety separation and no Earth connection; knowing only that the conductors are at 80 V does not prove those additional conditions.",
  ]),
  reviewed18ePart2("quiz-29716", 17, [
    "The carrier is the removable insulating part that holds a fuse; it is designed to survive operation rather than melt.",
    "A fuse link is the complete replaceable unit containing the calibrated element, not only the part intended to melt.",
    "Ordinary wire is not a controlled protective element unless manufactured and calibrated as part of the correct fuse system.",
  ]),
  reviewed18ePart2("quiz-29716", 18, [
    "Training contributes to competence, but 'trained person' is not the defined BS 7671 category described by this knowledge-and-experience wording.",
    "An instructed person relies on adequate instruction or supervision and does not necessarily have the independent expertise described in the stem.",
    "An ordinary person is neither skilled nor instructed in electrical matters and cannot be assumed to recognise and avoid electrical dangers.",
  ]),
  reviewed18ePart2("quiz-29716", 19, [
    "Normal leakage can remain well below an RCD threshold, so protective-conductor current does not automatically trip a residual-current device.",
    "Design current is the intended load in live conductors and has no required equality with small leakage flowing in a protective conductor.",
    "Filters and capacitance can produce protective-conductor current in a healthy installation, so an earth fault is not required for it to flow.",
  ]),
  reviewed18ePart2("quiz-29716", 20, [
    "Simultaneously energising opposing motor contactors creates a circuit fault or interlock failure, not merely excess mechanical loading of a sound motor circuit.",
    "A drill contacting a live busbar creates a short circuit or earth fault through damaged insulation and metalwork rather than a normal-service overload.",
    "Tracking across a contaminated terminal block is an insulation fault path; the circuit is no longer electrically sound when that current flows.",
  ]),
  reviewed18ePart2("quiz-29716", 21, [
    "Compatibility concerns harmful interaction between equipment, such as harmonics or leakage, rather than the physical construction surrounding the wiring.",
    "Maintainability concerns access and expected maintenance quality; it is not the classification for combustible, moving or otherwise influential building fabric.",
    "Nature of supply describes voltage, frequency and earthing arrangement delivered at the origin, not the structure through which wiring is installed.",
  ]),
  reviewed18ePart2("quiz-29716", 22, [
    "Safe access for periodic verification allows deterioration to be found without creating new danger and is an essential lifetime design consideration.",
    "Maintenance must preserve shock, fire and overcurrent protective measures; otherwise an installation can become dangerous even while equipment still runs.",
    "Sustained equipment reliability reduces unsafe failures and is a genuine consideration when the likely maintenance regime is assessed.",
  ]),
  reviewed18ePart2("quiz-29716", 23, [
    "Method of installation affects cable ratings and mechanical protection but is not one of the three top-level external-influence categories.",
    "Earthing arrangement is a characteristic of the supply and protective system, not an external influence imposed by environment, users or building fabric.",
    "The number and type of live conductors describes the circuit and supply arrangement rather than a condition acting externally on the installation.",
  ]),
  reviewed18ePart2("quiz-29716", 24, [
    "Drawings show connected equipment but cannot by themselves establish how much of that load will operate simultaneously in real service.",
    "The distributor may limit the available capacity, but the installation designer remains responsible for assessing the actual maximum demand.",
    "An architect can describe intended room use, yet electrical diversity and load assessment require the designer's circuit and equipment knowledge.",
  ]),
  reviewed18ePart2("quiz-29716", 25, [
    "Equipment-specific EMC law and BS 7671 compatibility duties overlap, but this sweeping statement is not the lifetime inspection requirement asked for.",
    "Electromagnetic interference must be considered during design because harmonics, leakage and switching disturbances can impair other equipment.",
    "Batteries can supply a safety service, but saying they may be used is an available design option rather than the stated lifecycle requirement.",
  ]),
  reviewed18ePart2("quiz-29716", 26, [
    "Dust is classified under AE because it concerns foreign solid bodies, whereas the AD code deals specifically with water exposure.",
    "Vibration belongs to the AH external-influence family and does not describe water surrounding an enclosure.",
    "AD7 covers temporary immersion; AD8 is the more severe condition where equipment remains continuously submerged.",
  ]),
  reviewed18ePart2("quiz-29716", 27, [
    "Armour resists impact but does not necessarily tolerate repeated building movement without fatigue at joints and terminations.",
    "A rigid wiring system would transmit structural movement into cables and accessories, increasing the chance of fracture or loose connections.",
    "Screening controls electromagnetic interference and provides no inherent ability to follow movement of the building structure.",
  ]),
  reviewed18ePart2("quiz-29716", 28, [
    "AN is the solar-radiation classification, so changing its severity number cannot make it the code for wind.",
    "AP concerns seismic effects and is used for earthquake-related movement rather than ordinary high wind.",
    "AR identifies movement of air, while the specific wind classification used here is AS3.",
  ]),
  reviewed18ePart2("quiz-29716", 29, [
    "Factories normally expose wiring to more than low-severity impact from machinery, materials handling and industrial activity.",
    "A quarry involves heavy plant and flying or falling material, making AG1 far too mild for the likely mechanical impact.",
    "Workshops contain tools and moving workpieces that normally justify a higher impact classification than an ordinary dwelling.",
  ]),
  reviewed18ePart2("quiz-29716", 30, [
    "Switch height concerns accessibility and human factors but does not keep a life-support supply energised when another circuit faults.",
    "Occupant count affects evacuation and demand assessments, not whether upstream and downstream protective devices operate selectively.",
    "Cable type must suit the environment and fire duty, but continuity during a fault depends on supply and protective-device coordination as well.",
  ]),
  reviewed18ePart2("quiz-29716", 31, [
    "Five times rating is only the upper instantaneous threshold for a Type B device; a Type C breaker needs up to ten times rating for guaranteed operation.",
    "Seven times rating lies inside the Type C magnetic tolerance band and therefore cannot guarantee that every compliant breaker trips instantaneously.",
    "A current equal to the 20 A rating is normal full load and will not make the overcurrent device clear a fault rapidly.",
  ]),
  reviewed18ePart2("quiz-29716", 32, [
    "A half-second reading would require a substantially larger multiple of fuse rating than the stated 60 A fault current provides.",
    "One second is still faster than the BS 88 curve indicates at only 3.75 times the 16 A fuse rating.",
    "Ten seconds corresponds to a smaller fault-current multiple; the stated current reaches the curve near three seconds.",
  ]),
  reviewed18ePart2("quiz-29716", 33, [
    "A 180 A fault is about six times the fuse rating and would operate much faster than the five-second point on the curve.",
    "Current equal to the 30 A rating is normal rated load and cannot be expected to melt the fuse within five seconds.",
    "At roughly 2.2 times rating, 66 A remains below the curve current needed for a five-second operation.",
  ]),
  reviewed18ePart2("quiz-29716", 34, [
    "The 0.2-second point occurs at a lower current multiple; 180 A drives this 15 A rewireable fuse further into its fast region.",
    "A 0.4-second estimate understates how quickly the element heats when current reaches twelve times its rating.",
    "Five seconds corresponds to a much smaller current than 180 A on the BS 3036 time/current characteristic.",
  ]),
  reviewed18ePart2("quiz-29716", 35, [
    "A 0.2-second operation needs a higher fault current on the 30 A BS 1361 curve than the stated 200 A.",
    "Four seconds is associated with a lower multiple of rated current; 200 A heats the cartridge element substantially faster.",
    "Five seconds likewise overstates the operating time at more than six times the fuse's rated current.",
  ]),
  reviewed18ePart2("quiz-29716", 36, [
    "Ib is the circuit's design current in normal service, not the conventional current that ensures the protective device operates.",
    "In is the nominal current or setting marked on the device and is distinct from its higher conventional operating current I2.",
    "Iz is the conductor's continuous current-carrying capacity, used as the thermal boundary in the overload coordination check.",
  ]),
  reviewed18ePart2("quiz-29716", 37, [
    "A two-second operation would need more than the approximately 100 A produced by a 230 V fault through 2.3 ohms.",
    "Four seconds lies below the curve's operating speed at about 3.3 times the 30 A fuse rating.",
    "Five seconds would correspond to a still lower fault current; the calculated 100 A reaches the curve near three seconds.",
  ]),
  reviewed18ePart2("quiz-29716", 38, [
    "Using 124.5 A would imply dividing by about 1.85 ohms and ignores the stated 0.3-ohm earth fault loop.",
    "A result near 1383 A comes from incorrectly using a different voltage or impedance instead of 230 V to Earth divided by 0.3 ohms.",
    "Seventy-two amperes is far below 230 ÷ 0.3 and would greatly understate the prospective earth fault current.",
  ]),
  reviewed18ePart2("quiz-29716", 39, [
    "A factor of 0.61 represents more severe thermal derating and would unnecessarily oversize the cable for the stated 55-degree condition.",
    "The 0.84 factor belongs to a cooler ambient condition and would allow too much current at 55 degrees.",
    "Using 0.88 would derate the conductor even less, risking operation above the thermosetting cable's permitted temperature.",
  ]),
  reviewed18ePart2("quiz-29716", 40, [
    "A 2.5 V result omits part of the stated current, length or millivolt factor; multiplying all three gives 3600 mV.",
    "Rounding 3.6 V up to 4 V discards meaningful precision even though the exact listed result is already available.",
    "Six volts cannot be produced by 8.0 mV/A/m × 45 A × 10 m and overstates the calculated drop by two-thirds.",
  ]),
  reviewed18ePart2("quiz-29716", 41, [
    "A 1.0 mm² mineral-insulated conductor has a tabulated rating below the required 22 A in this arrangement.",
    "The 2.5 mm² size exceeds the required capacity but is not the smallest conductor meeting the 22 A design requirement.",
    "A 4.0 mm² conductor adds still more unused capacity and copper, so it cannot be the requested minimum size.",
  ]),
  reviewed18ePart2("quiz-29716", 42, [
    "Breaking capacity concerns the maximum fault current a device can interrupt, not the load basis to which cable derating factors are applied.",
    "Prospective short-circuit current is used for fault withstand and breaking-capacity checks rather than ambient, grouping or insulation correction factors.",
    "Applying factors directly to the table value can be an alternative rearrangement, but the selection calculation normally derives required It from In divided by the factors.",
  ]),
  reviewed18ePart2("quiz-29716", 43, [
    "A 14.2 V result uses an extra factor of four; the stated values multiply to only 3550 mV.",
    "The 5.7 V figure cannot be obtained from 7.1 mV/A/m × 20 A × 25 m and overstates the full-load drop.",
    "An 8.9 V answer typically results from using the wrong current or doubling the route length for this single circuit calculation.",
  ]),
  reviewed18ePart2("quiz-29716", 44, [
    "A 0.65 factor is used for fewer grouped circuits; it would not account for the heat from all eight loaded circuits.",
    "Using 0.75 would permit still more current and therefore risks excessive conductor temperature inside the shared conduit.",
    "A factor of 0.8 gives only mild derating and is unsuitable for eight mutually heating circuits in one containment system.",
  ]),
  reviewed18ePart2("quiz-29716", 45, [
    "Reference Method A concerns cables enclosed in an insulated wall and has poorer heat dissipation than conduit mounted on a wall.",
    "Reference Method C is clipped-direct cable, where the sheath is directly exposed to room air rather than drawn inside conduit.",
    "Reference Method D concerns cables in underground ducts or direct burial and has no connection with wall-mounted conduit.",
  ]),
  reviewed18ePart2("quiz-29716", 46, [
    "A 1.5 mm² heavy-duty mineral-insulated conductor falls short of the required 42 A capacity in this tray arrangement.",
    "The 2.5 mm² size remains below the determined capacity and would be thermally overloaded at the design condition.",
    "A 6.0 mm² conductor meets the load comfortably but is larger than the first tabulated size that reaches 42 A.",
  ]),
  reviewed18ePart2("quiz-29716", 47, [
    "A 124.5 A result is inconsistent with the stated 230 V line-to-Earth voltage and 0.3-ohm loop.",
    "Using 400 V with an incorrect divisor can produce about 1383 A, but a single line-to-Earth fault uses 230 V.",
    "Seventy-two amperes would require an impedance above three ohms and severely understates this 0.3-ohm fault path.",
  ]),
  reviewed18ePart2("quiz-29716", 48, [
    "The factor 0.725 is the special conductor derating associated with BS 3036 fuses, not the general I2 coordination ceiling.",
    "A factor of 1.5 exceeds the prescribed thermal relationship and could allow the conductor insulation to overheat before operation.",
    "Allowing I2 to reach 1.8 times Iz gives even less cable protection and is outside the overload coordination requirement.",
  ]),
  reviewed18ePart2("quiz-29716", 49, [
    "Basic protection alone covers normal contact with live parts but offers no second insulation layer if that protection fails.",
    "Fault protection alone does not describe the intact basic insulation that Class II equipment also contains during normal service.",
    "Double insulation does not interrupt high line-to-neutral fault current; a separate overcurrent device still provides short-circuit protection.",
  ]),
  reviewed18ePart2("quiz-29716", 50, [
    "A safety isolating transformer to BS EN 61558-2-6 provides the protective separation required for a SELV source.",
    "A suitably constructed motor-generator can give equivalent separation and therefore can supply a SELV circuit.",
    "A source whose output cannot rise above ELV after an internal fault satisfies the essential voltage-limitation requirement.",
  ]),
  reviewed18ePart2("quiz-29716", 51, [
    "A 0.2-second limit is used for certain TT final circuits at 230 V, not this TN-system final-circuit condition.",
    "One second is longer than the 0.4-second TN limit and would leave a dangerous touch voltage for too long.",
    "Five seconds is reserved for TN distribution circuits and certain larger final circuits, not a 6 A lighting final circuit.",
  ]),
  reviewed18ePart2("quiz-29716", 52, [
    "If design current exceeds conductor capacity, the cable is overloaded in normal service regardless of the device setting.",
    "A protective-device rating above Iz permits the conductor to carry damaging overload before the device has to operate.",
    "I2 must not exceed 1.45 Iz; reversing that inequality removes the thermal limit intended to protect insulation.",
  ]),
  reviewed18ePart2("quiz-29716", 53, [
    "With a 20 A device protecting an 18 A conductor, In exceeds Iz and the cable can be overloaded before operation.",
    "A 10 A device on an 8 A conductor likewise violates In ≤ Iz even though the design current is small.",
    "A 20 A design load exceeds both the 15 A device and conductor capacities, so normal service already overloads the arrangement.",
  ]),
  reviewed18ePart2("quiz-29716", 54, [
    "A factor of 1.33 would allow a BS 3036 fuse rating above the conductor capacity despite the fuse's high fusing factor.",
    "The general 1.45 I2 relationship does not replace the special 0.725 derating used when a BS 3036 fuse provides overload protection.",
    "Doubling conductor capacity bears no relationship to the rewireable fuse characteristic and could leave the cable badly underprotected.",
  ]),
  reviewed18ePart2("quiz-29716", 55, [
    "A 0.4-second assumption is the shock-disconnection target for some final circuits, not the conductor's calculated thermal withstand time.",
    "Five seconds is often the range limit for the adiabatic formula, but the numerical equation here gives a longer theoretical withstand.",
    "A 7.2-second result follows from using the wrong k value or arithmetic; (115 × 25 ÷ 1000) squared is about 8.2.",
  ]),
  reviewed18ePart2("quiz-29716", 56, [
    "The 1.45 factor concerns conventional overload operation and cannot establish whether a device safely interrupts a severe short circuit.",
    "A multiple of In describes overload behaviour but may be far below the prospective fault current available at the installation point.",
    "Design current is normal load current and therefore says nothing about the breaking duty imposed by a low-impedance fault.",
  ]),
  reviewed18ePart2("quiz-29716", 57, [
    "An engine-driven generator with equivalent safety isolation can provide an earth-free ELV output suitable for SELV.",
    "A battery is inherently separated from the mains and Earth when correctly arranged, making it an accepted SELV source.",
    "A safety isolating transformer built to BS EN 61558-2-6 is specifically intended to provide the separation SELV requires.",
  ]),
  reviewed18ePart2("quiz-29716", 58, [
    "Fifty-five degrees is the limit for a metallic hand-held surface, which transfers heat into skin much faster during prolonged contact.",
    "Sixty-five degrees is not the table value for a non-metallic surface touched briefly and would impose an unsupported intermediate limit.",
    "Seventy degrees is the limit for metallic parts intended to be touched but not held, not for lower-conductivity non-metallic material.",
  ]),
  reviewed18ePart2("quiz-29716", 59, [
    "A 0.55-ohm loop would produce exactly 100 A before voltage tolerance, leaving no Cmin margin for guaranteed Type B operation.",
    "At 0.69 ohms the fault current is only about 80 A, below the five-times-rating threshold of a 32 A breaker.",
    "A 0.79-ohm loop reduces current further and cannot guarantee the rapid magnetic operation needed on this reduced-voltage circuit.",
  ]),
  reviewed18ePart2("quiz-29716", 60, [
    "External loop impedance affects earth-fault current but does not give the line-to-neutral short-circuit duty by itself.",
    "Maximum demand sizes normal-load equipment and has no direct relationship with the fault current a device must interrupt.",
    "Nominal voltage is one input to fault-current assessment, but without source impedance it cannot establish breaking capacity.",
  ]),
];

const q29717 = [
  reviewed18ePart2("quiz-29717", 1, [
    "The 110 V figure is measured between the two outer conductors; centre tapping keeps either conductor much closer to Earth potential.",
    "Twenty-five volts is an extra-low-voltage limit used in particular wet locations, not the maximum phase-to-Earth value for reduced low voltage.",
    "Fifty-five volts is the nominal conductor-to-Earth value on a 110 V centre-tapped supply, while the defined maximum allows voltage tolerance up to 63.5 V.",
  ]),
  reviewed18ePart2("quiz-29717", 2, [
    "A device rating below the circuit design current would nuisance-trip during intended load and fails the condition Ib ≤ In.",
    "I2 is a device operating current, so dividing conductor capacity by it does not state either required overload coordination inequality.",
    "Equating 1.45 Iz with design current confuses normal load with the conductor's short-duration thermal allowance.",
  ]),
  reviewed18ePart2("quiz-29717", 3, [
    "Bare or merely PVC-covered overhead conductors remain exposed to lightning-induced surges and do not gain the shielding effect described.",
    "Catenary support describes how the cable is suspended mechanically; it says nothing about the earthed metallic covering used for surge classification.",
    "An uninsulated cable has no dielectric covering and cannot be equated with insulated conductors protected by an earthed metal sheath.",
  ]),
  reviewed18ePart2("quiz-29717", 4, [
    "Design current above conductor capacity means the cable is overloaded during normal service before protective coordination is even considered.",
    "A protective-device rating above Iz permits damaging overload current to flow without requiring the device to operate.",
    "I2 must be no greater than 1.45 Iz; reversing the inequality removes the cable's conventional overload protection.",
  ]),
  reviewed18ePart2("quiz-29717", 5, [
    "A direct strike cannot be made an ordinary design case simply by routing it through one low-voltage discharge component; its energy needs a lightning-protection design.",
    "Surge protective devices divert indirect transient current to Earth, but that does not mean BS 7671 sizes an LV installation for a direct line strike.",
    "Treating direct strikes as a normal LV surge case would exceed the energy capability assumed for installation SPDs and requires BS EN 62305 measures.",
  ]),
  reviewed18ePart2("quiz-29717", 6, [
    "A centre-tapped 110 V transformer has an intentional Earth reference and therefore provides reduced low voltage, not an earth-free SELV source.",
    "A Class II safety isolating transformer supplies ELV through protective separation and is a standard SELV source.",
    "A motor-generator that provides BS EN 61558-2-6-equivalent separation can isolate the output from both Earth and higher voltages.",
  ]),
  reviewed18ePart2("quiz-29717", 7, [
    "A 0.75 m assumption protects only a small reach around the body and would leave live parts readily accessible above a standing person.",
    "The 1.25 m dimension is used for horizontal arm's reach from some boundaries, not the full upward reach from a standing surface.",
    "Three metres exceeds the standard arm's-reach envelope and would impose separation beyond what a person can normally touch without assistance.",
  ]),
  reviewed18ePart2("quiz-29717", 8, [
    "The distributor can state whether the supply is AC or DC and its nominal frequency because these originate on its network.",
    "Prospective short-circuit current at the origin is a network characteristic that the distributor can provide or the installer can measure.",
    "The distributor owns or specifies its cut-out, so its fuse or circuit-breaker type and rating can be obtained by enquiry.",
  ]),
  reviewed18ePart2("quiz-29717", 9, [
    "Kitchen location does not limit cooker current; a high-powered appliance can overload a ring final regardless of which room contains it.",
    "Distance from a socket is a layout detail and does not reduce the cooker load concentrated at the connection point.",
    "A 3 A fuse would be grossly undersized for even a 2 kW cooker and would operate during normal use.",
  ]),
  reviewed18ePart2("quiz-29717", 10, [
    "A generic danger label does not identify that this particular conductor is an essential protective connection that must remain intact.",
    "Leaving off the instruction not to remove the connection fails to warn another trade against disconnecting it during alterations.",
    "The prescribed wording refers to a safety electrical connection, covering bonding as well as earthing rather than the invented phrase 'electrical earth'.",
  ]),
  reviewed18ePart2("quiz-29717", 11, [
    "A 1000 V circuit is far beyond the insulation and contact rating of an ordinary ceiling rose.",
    "A 415 V supply still exceeds the 250 V ceiling-rose limit and may place line-to-line voltage across an accessory not built for it.",
    "Five hundred volts similarly exceeds the accessory rating and cannot be made acceptable by using a lower-current lamp.",
  ]),
  reviewed18ePart2("quiz-29717", 12, [
    "Ten square millimetres does not leave enough copper for long-term corrosion loss when the buried conductor lacks corrosion protection.",
    "Fifty square millimetres would provide extra durability but is larger than the prescribed minimum for this mechanically protected condition.",
    "Six square millimetres is the small protected-above-ground minimum and is unsuitable for direct soil exposure without corrosion protection.",
  ]),
  reviewed18ePart2("quiz-29717", 13, [
    "A 0.55 factor is used for a shorter insulated section; at two metres the cable has reached the fully surrounded worst-case condition.",
    "The 0.68 value represents still less thermal enclosure and would allow excessive current where insulation surrounds the cable for two metres.",
    "A 0.81 factor is only mild derating and cannot compensate for the severe loss of heat dissipation in this run.",
  ]),
  reviewed18ePart2("quiz-29717", 14, [
    "Ten square millimetres is substantially larger than the mechanical-strength minimum and is not required for this supplementary bond.",
    "Sixteen square millimetres would also work electrically but adds unnecessary copper when the question asks for the minimum.",
    "A 2.5 mm² conductor is permitted only when mechanical protection shields it from foreseeable damage.",
  ]),
  reviewed18ePart2("quiz-29717", 15, [
    "Sixteen square millimetres is not the minimum because the metal conduit already supplies the extra mechanical protection.",
    "Twenty-five square millimetres is an earthing-conductor scale and is unnecessarily large for this local supplementary bond.",
    "Four square millimetres is the minimum where no mechanical protection exists; the enclosure permits reduction to 2.5 mm².",
  ]),
  reviewed18ePart2("quiz-29717", 16, [
    "A fixed 1.5 mm² choice can be smaller than both associated protective conductors and may not withstand their fault current.",
    "A blanket 4 mm² value applies to certain mechanically unprotected bonding conductors, not this relative exposed-part sizing rule.",
    "Matching the larger CPC is safe but exceeds the requirement; the bond need only be at least as large as the smaller associated CPC.",
  ]),
  reviewed18ePart2("quiz-29717", 17, [
    "Sixteen square millimetres treats steel armour as though it had the copper core's thermal performance and is inadequate with k = 51.",
    "Thirty-two square millimetres remains below the tabulated armour cross-section needed to withstand the calculated fault energy.",
    "Forty-eight square millimetres provides more steel than required; 36 mm² is the first armour size satisfying the table check.",
  ]),
  reviewed18ePart2("quiz-29717", 18, [
    "Checking only between distribution boards ignores the voltage already lost in the final circuit feeding the actual equipment.",
    "Network voltage variation before the installation origin is the distributor's characteristic and is not part of the installation voltage-drop allowance.",
    "A final-circuit-only check ignores loss in submains, so the load can receive too little voltage even when the last circuit appears compliant.",
  ]),
  reviewed18ePart2("quiz-29717", 19, [
    "A quarter ampere is far below the normal circuit capability of an E14 lampholder and is not the protective-device ceiling in BS 7671.",
    "Fifteen amperes is below the 16 A limit and could be used, but it is not the maximum rating requested.",
    "Five amperes is a conservative circuit choice rather than the highest rating the lampholder rule permits.",
  ]),
  reviewed18ePart2("quiz-29717", 20, [
    "A quarter milliampere is far too small to prove a low-resistance protective path and could flow through contamination or stray capacitance.",
    "One hundred milliamperes is only half the required short-circuit output and does not meet the continuity instrument specification.",
    "Five hundred milliamperes exceeds the minimum and may be available, but it is not the least output the question asks for.",
  ]),
  reviewed18ePart2("quiz-29717", 21, [
    "A 0.25 MΩ threshold is for neither this voltage band nor the current BS 7671 minimum and would accept severely degraded insulation.",
    "Half a megohm is the minimum used for SELV and PELV tested at 250 V, not a circuit operating above 500 V.",
    "Five megohms is a healthy result but is five times the minimum acceptance value, so it cannot be the stated minimum.",
  ]),
  reviewed18ePart2("quiz-29717", 22, [
    "Initial inspection is performed before energisation, so proving the equipment connected and live would create avoidable danger.",
    "Insulation resistance is an instrument measurement completed after visual inspection, not something established by looking at equipment.",
    "Functional safety when energised is checked later during functional testing and cannot be confirmed during the dead visual inspection.",
  ]),
  reviewed18ePart2("quiz-29717", 23, [
    "Earth fault loop impedance needs the source energised so the tester can derive impedance from a controlled voltage drop.",
    "RCD operating tests require a live supply to inject residual current and measure the actual disconnection response.",
    "Prospective short-circuit current is derived from live loop measurements and cannot be obtained with the source isolated.",
  ]),
  reviewed18ePart2("quiz-29717", 24, [
    "Ring-final continuity follows the initial protective-conductor check because the earthing path is the safety foundation for subsequent work.",
    "Insulation resistance is performed only after conductor continuity has shown circuits are connected as intended and can be tested meaningfully.",
    "Polarity comes after continuity and insulation checks; starting with it could miss a broken protective path or damaged insulation.",
  ]),
  reviewed18ePart2("quiz-29717", 25, [
    "Accessory and lampholder connections are within the installation and need visual confirmation of correct conductor termination.",
    "Conductor identification must be inspected so line, neutral and protective functions remain clear for operation and future work.",
    "Fire barriers penetrated by wiring must be restored and inspected because an unsealed opening can spread flame and smoke.",
  ]),
  reviewed18ePart2("quiz-29717", 26, [
    "A major alteration is only one case; every newly provided circuit needs its measured verification results attached to the certificate.",
    "Modified existing installations can require appropriate certification, but this phrase would omit wholly new circuits and installations.",
    "Restricting schedules to complete new installations would leave a newly added circuit without the evidence supporting its certificate.",
  ]),
  reviewed18ePart2("quiz-29717", 27, [
    "The schedule of test results supplies the measurements supporting the condition assessment and must accompany the report.",
    "The report is issued to the person who ordered the inspection so that duty holder can understand and act on the findings.",
    "The inspector signs for the work actually performed and the professional judgement represented by the observations and overall assessment.",
  ]),
  reviewed18ePart2("quiz-29717", 28, [
    "Prospective short-circuit current is measured or calculated from live tests; it cannot be verified merely by viewing the installation.",
    "Earth fault loop impedance is an electrical measurement of the fault path, not a feature visible during detailed inspection.",
    "RCD operation is proved by pressing its functional button and by instrument testing, rather than by inspecting its appearance.",
  ]),
  reviewed18ePart2("quiz-29717", 29, [
    "Water, heat, vibration and other external influences accelerate deterioration and therefore directly affect the appropriate inspection interval.",
    "Frequent, effective maintenance can control deterioration and provide evidence supporting a different interval from a neglected installation.",
    "Installation type determines use, consequence and expected wear, which is why homes, pools and industrial premises have different guidance intervals.",
  ]),
  reviewed18ePart2("quiz-29717", 30, [
    "A quarter megohm would permit four times the leakage of the 1 MΩ minimum and indicates unacceptable insulation condition.",
    "Half a megohm is the SELV/PELV threshold at a 250 V test, not the minimum for a 400/230 V installation tested at 500 V.",
    "Two megohms is a better result but is not the minimum acceptance boundary the question requests.",
  ]),
  reviewed18ePart2("quiz-29717", 31, [
    "Loop impedance is a live test and cannot safely come before proving the protective conductors and completing the dead tests.",
    "Insulation resistance is important, but it follows the first continuity check so the circuit paths are known before voltage is applied.",
    "RCD testing requires energisation and belongs near the end of verification after inspection and all appropriate dead tests.",
  ]),
  reviewed18ePart2("quiz-29717", 32, [
    "A 0.25 MΩ reading is below the Table 64 minimum and indicates too much leakage even at the reduced 250 V test voltage.",
    "One megohm exceeds the SELV minimum and is desirable, but it is not the lowest compliant reading asked for.",
    "Two megohms is still healthier insulation yet cannot be the minimum when Table 64 accepts 0.5 MΩ for this circuit class.",
  ]),
  reviewed18ePart2("quiz-29717", 33, [
    "Starting with functional testing would energise the installation before protective continuity and insulation have been proved.",
    "This order places insulation before the protective and ring conductor continuity tests on which a sound dead-test sequence depends.",
    "Beginning with ring continuity skips the first protective-conductor continuity step and then puts polarity ahead of insulation resistance.",
  ]),
  reviewed18ePart2("quiz-29717", 34, [
    "Section 511 compliance confirms equipment uses appropriate standards or has equivalent safety evidence and belongs in fixed-installation inspection.",
    "Correct selection and erection are central visual checks because suitable equipment can still be unsafe if installed in the wrong environment or manner.",
    "Visible damage can defeat insulation, enclosures or connections, so an inspector must confirm it does not impair installation safety.",
  ]),
  reviewed18ePart2("quiz-29717", 35, [
    "The second statement is true because the accessible Edison screw shell must be neutral, so both statements cannot be false.",
    "The first statement is false: polarity is normally established by low-resistance continuity or an appropriate live test, not by an insulation tester.",
    "Calling the first statement true reverses the instrument purpose; an insulation tester checks dielectric separation rather than conductor identity.",
  ]),
  reviewed18ePart2("quiz-29717", 36, [
    "High-current injection proves protective-device or conductor performance and would be inappropriate for a delicate separated ELV circuit.",
    "The 1 mm probe verifies IP4X access protection and says nothing about electrical separation between SELV and other circuits.",
    "A 2 kV withstand test is a product or particular separation test, not the routine installation verification method specified here.",
  ]),
  reviewed18ePart2("quiz-29717", 37, [
    "A quarter megohm permits excessive leakage and is below the accepted minimum for any ordinary 230 V final circuit.",
    "Half a megohm is used for ELV circuits tested at 250 V, not this 230 V lighting circuit tested at 500 V d.c.",
    "Two megohms is a satisfactory result but is twice the regulatory minimum, so it is not the threshold requested.",
  ]),
  reviewed18ePart2("quiz-29717", 38, [
    "Maximum demand after diversity tells the inspector the realistic normal load and helps verify supply and equipment adequacy.",
    "The shock-protection method determines the tests and disconnection criteria that must be verified on the installation.",
    "Earthing arrangement controls the applicable fault paths, limits and RCD requirements and is essential inspection information.",
  ]),
  reviewed18ePart2("quiz-29717", 39, [
    "Diversified maximum demand is needed to judge whether the supply and distribution equipment can carry the installation's realistic load.",
    "Nominal voltage and frequency determine equipment suitability, test criteria and the expected values used in verification.",
    "The earthing arrangement determines fault-protection rules and the measurements the inspector must compare against BS 7671.",
  ]),
  reviewed18ePart2("quiz-29717", 40, [
    "IPX2 resists dripping only at limited angles and will not stop a directed cleaning jet entering the enclosure.",
    "IPX4 covers splashing from any direction but does not demonstrate resistance to pressurised water jets.",
    "IPX8 is intended for continuous submersion and greatly exceeds the jet protection required for cleaning.",
  ]),
  reviewed18ePart2("quiz-29717", 41, [
    "An independent electrode creates a separate Earth reference and can increase touch-voltage differences within the pool zone.",
    "A direct connection only to the main earthing terminal does not provide the local equipotential connection between simultaneously accessible pool parts.",
    "Main bonding deals with incoming extraneous services at the origin; the floor-heating sheath needs local supplementary bonding in the wet zone.",
  ]),
  reviewed18ePart2("quiz-29717", 42, [
    "Bonding is a technical installation detail, but the specific user instruction requirement begins with a clear description of the caravan installation.",
    "Gas-appliance position belongs to gas safety information and is not the required electrical-installation description in this question.",
    "Obstacles are not an accepted basic-protection measure for ordinary caravan users and therefore should never be presented as a user method.",
  ]),
  reviewed18ePart2("quiz-29717", 43, [
    "A 1.5 m clearance is safer but exceeds the fallback minimum and may unnecessarily compromise the heating design.",
    "Two metres is four times the prescribed default separation and is not the least distance asked for.",
    "A 2.5 m spacing is even more conservative but does not represent the standard minimum used when instructions are absent.",
  ]),
  reviewed18ePart2("quiz-29717", 44, [
    "Colour coding aids identification but provides no shock or overcurrent disconnection when a caravan lead is damaged.",
    "Mounting below 0.5 m increases splash and impact exposure, and overcurrent protection alone lacks the required residual-current protection.",
    "A shared consumer unit can supply several pitches, but it does not by itself give each outlet its own RCD and overcurrent protection.",
  ]),
  reviewed18ePart2("quiz-29717", 45, [
    "A 100 mA RCD is too insensitive for additional personal protection where wet conditions reduce body resistance.",
    "Three hundred milliamps is used for fire protection in some agricultural circuits, not shock protection for small socket-outlets.",
    "A 500 mA threshold permits a potentially lethal residual current to persist and supplies neither additional protection nor the stated limit.",
  ]),
  reviewed18ePart2("quiz-29717", 46, [
    "One accessory earth terminal may not be sized or routed to bond the whole caravan frame and can be removed with that accessory.",
    "Insulating coverings can wear, become wet or leave joints exposed and do not create the reliable fault-current path needed for disconnection.",
    "Structural metal runs throughout the caravan and cannot realistically be kept out of reach of occupants in the confined interior.",
  ]),
  reviewed18ePart2("quiz-29717", 47, [
    "Livestock barns contain animals, moisture and combustible bedding and are a core reason Section 705 has additional requirements.",
    "Agricultural storage buildings expose equipment to dust, corrosion and machinery and remain part of the farm's production premises.",
    "Milking parlours combine wet surfaces, livestock contact and electrical equipment and therefore need the special agricultural measures.",
  ]),
  reviewed18ePart2("quiz-29717", 48, [
    "Double-pole switching does not make a socket safe for a wet person who can still plug in and touch equipment near the shower.",
    "Mounting close to the floor increases water exposure and has no relationship with the required horizontal separation from Zone 1.",
    "A socket need not be removed if the room is large enough to place it at least three metres from the Zone 1 boundary.",
  ]),
  reviewed18ePart2("quiz-29717", 49, [
    "BS 1363 domestic accessories lack the industrial keying, robustness and environmental construction required for site connectors.",
    "BS 196 is an older industrial connector standard and is not the current construction-site product standard specified here.",
    "BS 4343 was superseded by BS EN 60309, so citing it would specify a withdrawn predecessor rather than the current socket system.",
  ]),
  reviewed18ePart2("quiz-29717", 50, [
    "A 3.5 m clearance is used only where vehicles cannot pass; caravans and site vehicles can readily strike a cable at that height.",
    "Seven and a half metres provides more clearance than required and is not the minimum design value for this park route.",
    "Eight metres is likewise unnecessarily high and does not represent the specific six-metre vehicle-area requirement.",
  ]),
  reviewed18ePart2("quiz-29717", 51, [
    "Half a metre is a minimum-above-ground style dimension and would make the inlet needlessly low, not define its highest accessible position.",
    "One metre remains below the permitted mounting ceiling, so it cannot be the maximum height requested.",
    "At 1.5 m the inlet is still within the allowable range and therefore does not identify the upper boundary.",
  ]),
  reviewed18ePart2("quiz-29717", 52, [
    "A 50 mm burial depth may reduce nail damage but does not provide the conductive fault screen required around a bathroom heating element.",
    "A SELV heating system can be a design option, but ordinary mains floor heating instead needs the earthed screen and RCD measures.",
    "Thermal insulation around the element can cause overheating and provides no dependable electrical fault-current path.",
  ]),
  reviewed18ePart2("quiz-29717", 53, [
    "Twelve volts d.c. is below the permitted Zone 1 limit and could be used, but it is not the maximum alternating voltage requested.",
    "Fifty volts a.c. is the general SELV ceiling in dry conditions and is too high for wet, barefoot pool users in Zone 1.",
    "Six volts d.c. is a very conservative supply value and cannot identify the maximum 25 V a.c. boundary in the stem.",
  ]),
  reviewed18ePart2("quiz-29717", 54, [
    "Zone 0 is inside the basin where immersion and direct water contact make an ordinary junction box unacceptable.",
    "Zone 1 remains immediately above and around the pool and generally prohibits junction boxes except tightly limited SELV arrangements.",
    "Combining Zones 0 and 1 selects the two most hazardous volumes and ignores the less onerous Zone 2 location where a box may be fitted.",
  ]),
  reviewed18ePart2("quiz-29717", 55, [
    "A 30 mA RCD can provide additional protection with automatic disconnection for suitable Zone 2 equipment.",
    "Separation supplying one item prevents an Earth-referenced shock path and remains an allowed Zone 2 measure.",
    "SELV limits both voltage and source energy and is specifically suitable for wet special locations when its source is outside the restricted zones.",
  ]),
  reviewed18ePart2("quiz-29717", 56, [
    "IP4X protects against entry of 1 mm solid objects but contains no water digit and therefore says nothing about sauna splashing.",
    "IP5X controls dust ingress rather than the steam, condensation and water splash that dominate a sauna environment.",
    "IPX7 protects against immersion and exceeds the ordinary splash duty; it is not the minimum general enclosure rating inside the sauna.",
  ]),
  reviewed18ePart2("quiz-29717", 57, [
    "A blanket 250 V ceiling is not the verification rule; equipment voltages are selected for the design while every assembly still needs site testing.",
    "Armoured cable is only one suitable wiring system and cannot be mandated where protected flexible or other compliant wiring is more appropriate.",
    "A universal 2.5 mm² copper minimum ignores load, protection and installation method and would not prove safe reassembly.",
  ]),
  reviewed18ePart2("quiz-29717", 58, [
    "Canteens are welfare buildings and normally follow the general installation requirements rather than the work-activity scope of Section 704.",
    "Site offices are administrative accommodation and are expressly outside Section 704's construction and demolition activity coverage.",
    "Toilets are welfare facilities; their wet-location risks are addressed by ordinary requirements, not simply by being present on a construction site.",
  ]),
  reviewed18ePart2("quiz-29717", 59, [
    "Aircraft equipment uses specialist aviation standards and is explicitly outside BS 7671's normal fixed-installation scope.",
    "A building lightning-conductor system is designed under BS EN 62305 rather than the wiring requirements for derived high-voltage circuits.",
    "Public distribution networks are governed by supply legislation and network standards, ending at the consumer's installation origin.",
  ]),
];
const q29718 = [
  reviewed18ePart2("quiz-29718", 1, [
    "Electric fences governed by BS EN 60335-2-76 use a specialist product and installation standard and are excluded from BS 7671's ordinary scope.",
    "The lift installation itself follows the dedicated lift standard; BS 7671 applies only to the building supply up to the lift interface.",
    "Building lightning protection is designed to BS EN 62305, the successor to BS 6651, rather than as an ordinary BS 7671 installation.",
  ]),
  reviewed18ePart2("quiz-29718", 2, [
    "Alternating-current installations up to 1000 V are within the normal low-voltage scope of BS 7671.",
    "Direct-current installations up to 1500 V remain within the stated voltage range, unlike the same value on AC.",
    "Both ELV and LV installation voltage bands are fundamental parts of BS 7671 and cannot be treated as excluded.",
  ]),
  reviewed18ePart2("quiz-29718", 3, [
    "Efficiency measures reduce energy needed for a service, while this control deliberately disconnects loads to manage demand over time.",
    "Energy efficiency is the wider goal of reducing consumption and losses, not the name of the timed disconnection technique.",
    "Metering records energy or demand and may inform control, but it does not itself switch selected loads off.",
  ]),
  reviewed18ePart2("quiz-29718", 4, [
    "Making every circuit radial does not limit the consequences of one upstream fault or provide the necessary functional division by itself.",
    "A simple lighting-versus-power split can still leave excessive loss of service and ignores other hazards needing independent circuits.",
    "One RCD at the origin can disconnect the entire installation for a single residual fault and therefore increases inconvenience rather than limiting it.",
  ]),
  reviewed18ePart2("quiz-29718", 5, [
    "A bracket is a general support fixed to a structure and does not describe the regularly spaced gripping component around a cable.",
    "Cable ladder supports runs on longitudinal rails and rungs; it carries cables continuously rather than retaining each one at intervals.",
    "Cable tray is a continuous perforated support surface and does not mechanically clamp a cable like a cleat.",
  ]),
  reviewed18ePart2("quiz-29718", 6, [
    "The client provides requirements and information but normally lacks the electrical design detail needed to select EMC segregation and earthing measures.",
    "The installer must follow the design and good workmanship; deciding the required compatibility measures only during erection is too late.",
    "A test engineer can find some interference symptoms after installation but cannot replace design-stage control of routing, screening and equipment selection.",
  ]),
  reviewed18ePart2("quiz-29718", 7, [
    "Maintenance needs safe access and lighting so people can inspect, clean or replace equipment without creating another hazard.",
    "The purpose of maintenance is to keep protective measures effective; losing earthing, insulation or disconnection performance makes the installation unsafe.",
    "Periodic verification is a core way to identify deterioration and must be feasible within the expected maintenance arrangements.",
  ]),
  reviewed18ePart2("quiz-29718", 8, [
    "Automatic disconnection is a principal fault-protection measure because it removes dangerous touch voltage after exposed metal becomes live.",
    "Class II equipment uses supplementary or reinforced insulation so one basic-insulation fault does not make accessible parts dangerous.",
    "Protective equipotential bonding limits voltage differences between exposed and extraneous metalwork during a fault and supports automatic disconnection.",
  ]),
  reviewed18ePart2("quiz-29718", 9, [
    "Failure of a safety service can disable fire alarms, emergency lighting or medical support, so surge protection is mandatory where that consequence is credible.",
    "A transient capable of causing death triggers the consequence-based SPD requirement regardless of whether damaged equipment could later be replaced.",
    "Serious injury is expressly an unacceptable overvoltage consequence and therefore cannot justify omitting protection.",
  ]),
  reviewed18ePart2("quiz-29718", 10, [
    "A PEN conductor must never be switched because opening the combined protective and neutral path can raise exposed metalwork to line potential.",
    "Neutral switching is selected from earthing and isolation conditions; it is not automatically required in every TN-S or TN-C-S installation.",
    "Stored energy in capacitors or rotating machines must be discharged or otherwise made safe before work, not left without a suitable means.",
  ]),
  reviewed18ePart2("quiz-29718", 11, [
    "Ten kilohms at 200 A would imply two million volts, so it cannot hold touch voltage below the stated 50 V limit.",
    "Four ohms produces 800 V at 200 A, sixteen times the permitted touch-voltage boundary.",
    "Five ohms would create 1000 V under the stated fault current and therefore offers nowhere near the required protection.",
  ]),
  reviewed18ePart2("quiz-29718", 12, [
    "A 230 V generator exceeds the ELV band and would need its own shock-protection measures rather than providing SELV directly.",
    "A 230/110 V step-down transformer gives reduced low voltage but not the maximum 50 V AC SELV output or necessarily safety isolation.",
    "A generator marked only 50 V does not prove the protective separation from Earth and higher-voltage circuits required of a SELV source.",
  ]),
  reviewed18ePart2("quiz-29718", 13, [
    "Basic protection is selected to prevent normal contact with live parts and is not governed by the magnitude of a future short-circuit current.",
    "Ze concerns the Earth fault return path, whereas prospective short-circuit current at the origin is a separate line-to-neutral or line-to-line characteristic.",
    "The number of distribution-board ways follows circuit count and spare capacity, not the fault current the incomer must interrupt.",
  ]),
  reviewed18ePart2("quiz-29718", 14, [
    "Seventy-five degrees exceeds the metallic touch-temperature limit and could transfer enough heat during incidental contact to burn skin.",
    "Eighty degrees is the limit for some non-metallic touched surfaces, whose lower thermal conductivity changes heat transfer to the body.",
    "Eighty-five degrees is above both relevant touched-surface limits and is not safe merely because the part is not intended to be held.",
  ]),
  reviewed18ePart2("quiz-29718", 15, [
    "Monthly operation was older manufacturer advice for some devices but is more frequent than the standard six-month notice now states.",
    "Three months was the historical quarterly instruction; it has been superseded by the six-month wording on the current standard notice.",
    "Annual operation leaves twice the stated interval and could allow a seized trip mechanism to remain unnoticed for too long.",
  ]),
  reviewed18ePart2("quiz-29718", 16, [
    "One pass through the sensing core allows protective-conductor current to create residual imbalance and can cause false operation.",
    "Simply reversing the direction still leaves one uncompensated pass and therefore does not cancel its magnetic effect in the core.",
    "An absolute ban ignores the permitted unavoidable arrangement where equal outward and return passes cancel one another.",
  ]),
  reviewed18ePart2("quiz-29718", 17, [
    "Ten kiloamps exceeds the 5 kA minimum and may be selected for a harsher exposure, but it is not the least acceptable In value.",
    "A 12.5 kA value is associated with lightning-current duties in other connection arrangements, not the Type 2 L-N minimum here.",
    "Twenty kiloamps is a robust device rating but is four times the prescribed minimum and would unnecessarily constrain product selection.",
  ]),
  reviewed18ePart2("quiz-29718", 18, [
    "Ten square millimetres is below the Table 54.7 value for a 25 mm² line conductor and may not withstand the same fault energy.",
    "Twenty square millimetres would be adequate but is not a standard minimum derived from the table for this conductor range.",
    "Six square millimetres is far below the required protective-conductor size and cannot be justified by the stated TN arrangement alone.",
  ]),
  reviewed18ePart2("quiz-29718", 19, [
    "Fault-current amplitude is represented by I, whose square is multiplied by time in the adiabatic energy term.",
    "The equation calculates minimum protective-conductor area S; k is a material and temperature constant, not another area value.",
    "Fault duration is t and appears under the square root, whereas k captures conductor and insulation thermal properties.",
  ]),
  reviewed18ePart2("quiz-29718", 20, [
    "One hundred millimetres gives extra separation but is not the minimum distance required from the joist face.",
    "Twenty-five millimetres leaves an ordinary screw long enough to penetrate the cable and therefore provides inadequate concealment depth.",
    "Thirty millimetres remains short of the 50 mm safe zone and does not remove the need for earthed mechanical protection or RCD measures.",
  ]),
  reviewed18ePart2("quiz-29718", 21, [
    "Connecting before entry can leave internal consumer pipework separated by an insulating section and outside the effective equipotential zone.",
    "Metal gas pipe entering the building can introduce Earth potential and still requires bonding even when the meter is outdoors.",
    "A two-metre rule can place the connection beyond branches or internal joints; the bond belongs as near as practicable to the point of entry.",
  ]),
  reviewed18ePart2("quiz-29718", 22, [
    "A luminaire connection device is intended to connect a light fitting and is not a readily operated full-load emergency control.",
    "Pulling a plug may expose the operator to the hazard, takes multiple actions and is unsuitable as the planned emergency switch here.",
    "A semiconductor can fail in a conducting state and provides no positive contact gap, so it cannot be trusted for emergency isolation duty.",
  ]),
  reviewed18ePart2("quiz-29718", 23, [
    "The word competent alone is incomplete because BS 7671 specifically requires skilled persons competent in the verification work undertaken.",
    "A City & Guilds certificate is useful evidence but cannot by itself prove current skill for every installation, instrument and risk encountered.",
    "The trade title qualified electrician does not automatically demonstrate the specialised judgement and test competence required for this verification.",
  ]),
  reviewed18ePart2("quiz-29718", 24, [
    "BS 3036 specifies semi-enclosed rewireable fuses and has no performance requirements for insulation, continuity or loop test instruments.",
    "BS 7671 tells the verifier what must be tested but does not act as the product-safety and accuracy standard for the instrument itself.",
    "BS EN 60079-17 covers inspection and maintenance in explosive atmospheres, not general electrical installation measuring instruments.",
  ]),
  reviewed18ePart2("quiz-29718", 25, [
    "Maximum demand is assessed from connected loads and diversity rather than obtained only through supply-company enquiry or measurement.",
    "Prospective fault current can be established by measurement, but it is also often supplied as network data and is not the unique earthing-arrangement item asked for.",
    "The distributor's protective-device type and rating can normally be read directly from the cut-out label or obtained from the distributor.",
  ]),
  reviewed18ePart2("quiz-29718", 26, [
    "A 100 mA device cannot provide the specified additional personal protection for portable equipment in a wet, mechanically harsh site environment.",
    "Three hundred milliamps is a fire-protection sensitivity in some applications and allows a dangerous shock current far above 30 mA.",
    "Five hundred milliamps is even less sensitive and would not disconnect at the small residual currents associated with personal shock protection.",
  ]),
  reviewed18ePart2("quiz-29718", 27, [
    "Half a metre is short of the defined 0.6 m Zone 2 extension and would leave part of the splash-risk area wrongly classified as outside zones.",
    "One metre exceeds the specified extension and would impose Zone 2 restrictions on more of the room than BS 7671 requires.",
    "A 1.2 m distance doubles the zone extension and confuses bathroom zoning with dimensions used in other special locations.",
  ]),
  reviewed18ePart2("quiz-29718", 28, [
    "A 150 mA RCD is more sensitive and can be used, but it is not the maximum fire-protection operating current permitted here.",
    "Thirty milliamps is used for additional shock protection of small socket and mobile-equipment circuits, not the highest fire-protection threshold.",
    "Five hundred milliamps exceeds the 300 mA ceiling and can allow a heating earth fault to persist at an ignition-capable level.",
  ]),
  reviewed18ePart2("quiz-29718", 29, [
    "Two hundred amps is only four times rating and lies below the guaranteed instantaneous operation threshold for a Type B 50 A breaker.",
    "Three hundred and fifteen amps would guarantee operation but exceeds the five-times value and is not the minimum requested.",
    "Five hundred amps is ten times rating and gives a large safety margin, yet it doubles the current needed for guaranteed Type B operation.",
  ]),
  reviewed18ePart2("quiz-29718", 30, [
    "Reference Method A is for cable in an insulated wall and has much poorer heat dissipation than an open perforated tray.",
    "Reference Method C describes clipped-direct multicore cable against a surface rather than cable surrounded by free air on a tray.",
    "Reference Method G is used for spaced single-core cables in free air, not a multicore cable laid on perforated tray.",
  ]),
  reviewed18ePart2("quiz-29718", 31, [
    "Aircraft equipment is controlled by specialist aviation requirements and is excluded from BS 7671's fixed-installation scope.",
    "The external lightning-protection system follows BS EN 62305 and is not the derived high-voltage circuit included by this scope rule.",
    "Public electricity distribution systems are governed by network legislation and standards rather than the consumer-installation rules in BS 7671.",
  ]),
  reviewed18ePart2("quiz-29718", 32, [
    "Caravan sites can be subject to site licensing and public-safety controls in addition to the electrical requirements of Section 708.",
    "Petrol filling stations carry explosive-atmosphere and licensing duties because fuel vapour can be ignited by electrical equipment.",
    "Theatres admit the public and can be subject to premises and entertainment controls, unlike an ordinary private dwelling.",
  ]),
  reviewed18ePart2("quiz-29718", 33, [
    "Uo denotes nominal AC or DC voltage from a line conductor to Earth, not voltage measured across an open output.",
    "Vo is not the BS 7671 symbol used for the no-load output voltage in this context.",
    "Voc uses a V rather than the standard U convention and is common informal notation, not the defined symbol asked for.",
  ]),
  reviewed18ePart2("quiz-29718", 34, [
    "Line contact with bonded metal pipework sends fault current into the protective and Earth paths, making it an Earth fault.",
    "A line conductor touching an exposed metal enclosure creates a fault from a live conductor to exposed conductive metal and Earth.",
    "A high-impedance line-to-Earth fault remains an Earth fault even when its current is too small for prompt protective-device operation.",
  ]),
  reviewed18ePart2("quiz-29718", 35, [
    "Inspection and testing confirm condition after installation; they are not the design decision in which expected maintenance shapes product reliability.",
    "Staff selection is a management and competence issue, while the designer must choose equipment able to remain safe under the likely maintenance regime.",
    "Periodic dates are later set from use and condition; the design-stage requirement is to specify equipment reliability that the expected maintenance can sustain.",
  ]),
  reviewed18ePart2("quiz-29718", 36, [
    "Earth leakage can desensitise RCDs, raise protective-conductor current and affect other equipment, so compatibility must be assessed.",
    "Harmonics overheat neutrals and transformers and distort supplies, making them a recognised harmful interaction between equipment.",
    "Undervoltage can cause contactors to chatter, motors to stall and electronic equipment to malfunction and is therefore a relevant compatibility effect.",
  ]),
  reviewed18ePart2("quiz-29718", 37, [
    "One AFDD at every final-circuit origin is not automatically mandated; application depends on circuit type, premises and the Section 421 assessment.",
    "An installation-origin AFDD cannot distinguish or monitor every downstream branch with the sensitivity of a device at the protected circuit origin.",
    "A main isolator provides overall switching and is not the correct internal position or functional substitute for each required circuit AFDD.",
  ]),
  reviewed18ePart2("quiz-29718", 38, [
    "An MCB responds to overload and short-circuit current and cannot continuously measure insulation resistance on a healthy IT system.",
    "OCPD is the general class of overcurrent protective devices; these clear excessive current rather than alarm at the first insulation fault.",
    "An RCD compares live-conductor currents and may disconnect a residual fault, but the normal IT first-fault function requires continuous insulation monitoring.",
  ]),
  reviewed18ePart2("quiz-29718", 39, [
    "Rubber insulation says nothing about topology; a linear CPC could leave downstream outlets unearthed after one break.",
    "Single-core construction may be used, but the conductor still has to return as a ring with both ends at the earthing terminal.",
    "The CPC is sized for fault energy and may legitimately be smaller than line conductors, so equal cross-section is not the defining ring requirement.",
  ]),
  reviewed18ePart2("quiz-29718", 40, [
    "Seventy-five degrees is below the allowed limit and may be acceptable, but it is not the maximum value requested.",
    "Eighty-five degrees exceeds the accessible-metal limit and raises the burn risk from accidental contact.",
    "Ninety degrees is a conductor-insulation operating temperature, not a safe accessible metal-surface temperature.",
  ]),
  reviewed18ePart2("quiz-29718", 41, [
    "IP5X adds dust-ingress performance beyond the protection-from-contact requirement and is not the minimum specified for the top surface.",
    "IPXXB or IP2X is sufficient for most vertical surfaces but allows the 1 mm probe relevant to a readily accessible horizontal top.",
    "IPXXC uses a 2.5 mm access probe and remains less stringent than the IPXXD or IP4X top-surface requirement.",
  ]),
  reviewed18ePart2("quiz-29718", 42, [
    "A barrier physically prevents normal access to live parts and is therefore a recognised means of basic protection.",
    "An enclosure surrounds live parts and provides basic protection when its IP rating prevents contact.",
    "Insulation bonded to live parts prevents direct contact and is the most fundamental form of basic protection.",
  ]),
  reviewed18ePart2("quiz-29718", 43, [
    "Earth fault loop impedance does not govern a line-to-neutral short circuit, so this wording names the wrong fault path and consequence.",
    "High loop impedance reduces rather than increases fault current, so it is unlikely to damage the protective device through excessive current.",
    "The device may remain serviceable yet operate too slowly; replacement alone would not correct the high-impedance fault path.",
  ]),
  reviewed18ePart2("quiz-29718", 44, [
    "Alternating colours along the full length is not the prescribed dual-function marking and can be confused with a separate protective conductor.",
    "Blue alone identifies neutral function but fails to warn at terminations that disconnection also removes the protective path.",
    "Green-and-yellow throughout would hide the normal current-carrying neutral function and invite unsafe treatment of the PEN as an ordinary CPC.",
  ]),
  reviewed18ePart2("quiz-29718", 45, [
    "Type AC detects sinusoidal residual current only and is restricted to fixed loads known not to introduce DC components.",
    "Type B detects smooth DC and varied-frequency residual currents and is selected for demanding converters, not as the routine minimum for every circuit.",
    "Type F is intended for certain single-phase frequency-controlled equipment and is more specialised than the normal Type A general-purpose choice.",
  ]),
  reviewed18ePart2("quiz-29718", 46, [
    "A cable lead sheath in effective contact with soil can form an electrode where ownership, continuity and corrosion suitability are assured.",
    "Foundation structural metalwork has a large stable contact area with Earth and can form an effective foundation electrode.",
    "Welded concrete reinforcement can provide a durable electrode because the interconnected steel remains embedded in moist concrete and soil.",
  ]),
  reviewed18ePart2("quiz-29718", 47, [
    "Ze is the external portion of the complete fault loop and is already represented separately in the equation.",
    "Main earthing-conductor resistance is part of the external/origin path but R2 specifically names the circuit protective conductor run.",
    "Neutral resistance belongs to line-to-neutral loop calculations, whereas this earth fault expression returns through the CPC.",
  ]),
  reviewed18ePart2("quiz-29718", 48, [
    "Effective segregation is a permitted way to prevent the higher-voltage circuit imposing its insulation requirement on lower-band cables.",
    "Without segregation, every cable needs insulation rated for the highest voltage present so a failure between circuits remains safely contained.",
    "Within one multicore cable, each core must be insulated for the highest voltage in that cable because physical segregation is absent.",
  ]),
  reviewed18ePart2("quiz-29718", 49, [
    "Non-interchangeable keys identify authorised controls but do not necessarily prevent another person using the device while work is underway.",
    "A remote indication can fail or be misread and is weaker than physically locking the isolator open under the worker's control.",
    "People near the equipment may see a warning but cannot continuously guard a remote switch against inadvertent reconnection.",
  ]),
  reviewed18ePart2("quiz-29718", 50, [
    "BS 7671 gives no universal one-metre rule outside special locations; shallow benign ground and deep cultivated ground present different damage risks.",
    "A blanket 1.5 m requirement similarly ignores site conditions and would impose unnecessary excavation without replacing a proper risk assessment.",
    "Easy future access can conflict with protection from digging and vehicles, so accessibility is not the safety criterion for selecting depth.",
  ]),
  reviewed18ePart2("quiz-29718", 51, [
    "Emergency switching removes an immediate unexpected danger; planned repair work instead needs a secure maintenance isolation arrangement.",
    "Functional switching controls normal machine operation and may leave hazardous energy or automatic starting paths available during repair.",
    "Mechanical cleaning is one maintenance activity rather than the defined switching function that covers repair, servicing and cleaning work.",
  ]),
  reviewed18ePart2("quiz-29718", 52, [
    "The person responsible for design signs the design declaration and accepts that calculations and specification meet BS 7671.",
    "The inspection-and-test engineer signs for the verification performed and the accuracy of the recorded results.",
    "The installer or person responsible for construction signs the construction declaration because workmanship and erection form part of certification.",
  ]),
  reviewed18ePart2("quiz-29718", 53, [
    "Inspection and test schedules provide the detailed evidence behind an EICR and therefore must accompany the main report.",
    "Earlier results reveal deterioration and changes over time, so the current inspector must take them into account where available.",
    "Recording extent, limitations and results tells the client what was actually assessed and prevents an unjustified whole-installation conclusion.",
  ]),
  reviewed18ePart2("quiz-29718", 54, [
    "Listing an uncorrected defect on a certificate does not make the new installation safe or permit a compliant declaration.",
    "Informing the client is necessary, but initial certification cannot proceed while the work still contains a known omission or noncompliance.",
    "Waiting until the certificate is complete reverses the purpose of verification; the designer must resolve the issue before any declaration is signed.",
  ]),
  reviewed18ePart2("quiz-29718", 55, [
    "Half a metre is the ordinary agricultural-ground minimum and is insufficient where ploughing can reach and damage the cable.",
    "A 0.6 m depth applies to agricultural ground not intended for cultivation, not land disturbed by regular cultivation.",
    "A 1.5 m burial would add protection but exceeds the specific one-metre minimum and is not the least compliant depth.",
  ]),
  reviewed18ePart2("quiz-29718", 56, [
    "A 115-degree rating is below the design temperature for the high sauna zone and can accelerate insulation failure.",
    "One hundred and thirty-five degrees gives extra margin but is not the minimum equipment withstand temperature stated for Zone 3.",
    "A 145-degree product would also withstand the environment, yet specifying it as the minimum unnecessarily excludes compliant 125-degree equipment.",
  ]),
  reviewed18ePart2("quiz-29718", 57, [
    "The AC side also needs isolation under general rules, but this particular PV requirement calls for the dedicated switch-disconnector on the DC side.",
    "Omitting both sides would leave the converter energised from the array in daylight and from the installation supply.",
    "AC isolation alone cannot make array conductors dead because PV modules continue generating DC whenever illuminated.",
  ]),
  reviewed18ePart2("quiz-29718", 58, [
    "Separate isolation of each outlet would make accidental loss of critical equipment more likely and is not the medical IT socket arrangement requested.",
    "SELV is used for suitable low-voltage medical equipment but is not a general replacement for Group 2 medical IT socket supplies.",
    "A local switch can be operated inadvertently during treatment and therefore is deliberately omitted from these ME-equipment outlets.",
  ]),
  reviewed18ePart2("quiz-29718", 59, [
    "A 110 V centre-tapped system limits voltage to Earth but can still deliver a severe shock where a person is constrained against conductive surroundings.",
    "A 230 V supply presents full mains touch voltage and is unsuitable as the preferred handlamp source in a confined conducting location.",
    "PELV may intentionally connect one pole to Earth, creating a return path through surrounding metal that SELV avoids.",
  ]),
  reviewed18ePart2("quiz-29718", 60, [
    "BS 1363 covers UK plugs, socket-outlets and connection units rather than emergency escape illumination.",
    "Cartridge fuses are covered by fuse product standards such as the BS 88 series, not the emergency-lighting code.",
    "Miniature circuit-breakers use standards such as BS EN 60898 and perform overcurrent protection rather than defining emergency-lighting design.",
  ]),
];

export const eighteenthEditionQ29716To29718 = [...q29716, ...q29717, ...q29718];
