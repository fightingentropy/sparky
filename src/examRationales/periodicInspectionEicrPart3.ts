import periodicInspectionData from "../exam-data/periodic-inspection.json";
import { applyExamExplanationEnhancements } from "../examExplanationEnhancements";
import type { Exam, ExamChoice } from "../exams/types";

const ESF_BPG4 =
  "https://www.electricalsafetyfirst.org.uk/media/nhjengmh/best_practice-guide-4_issue-73.pdf";
const IET_GN3 =
  "https://shop.theiet.org/guidance-note-3-inspection-testing-10th-edition";
const IET_CURRENT =
  "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/ensure-you-are-up-to-date-with-bs-7671/";
const IET_MODEL_FORMS =
  "https://electrical.theiet.org/media/jp2fl3ia/bs7671_eicr_a4.pdf";
const IET_INSPECTION =
  "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/";
const IET_RCD =
  "https://electrical.theiet.org/wiring-matters/years/2022/91-july-2022/changes-to-rcd-testing-in-bs-76712018plusa22022/";
const IET_EARTHING =
  "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/earthing-and-bonding-faqs/";
const IET_TT =
  "https://electrical.theiet.org/wiring-matters/years/2021/87-september-2021/tt-earthing-considerations/";
const IET_EV =
  "https://electrical.theiet.org/wiring-matters/years/2023/97-september-2023/fifth-edition-of-the-iet-code-of-practice-for-electric-vehicle-charging-equipment-installation/";
const IET_ISOLATION =
  "https://electrical.theiet.org/wiring-matters/years/2023/94-march-2023/isolation-and-switching-for-mechanical-maintenance/";
const IET_BATHROOMS =
  "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/general-faqs/";
const IET_SHORT_CIRCUIT_COORDINATION =
  "https://electrical.theiet.org/wiring-matters/years/2026/109-april-2026/do-spds-require-an-overcurrent-protective-device/";
const HSE_GS38 = "https://www.hse.gov.uk/pubns/priced/gs38.pdf";
const HSE_EAWR = "https://www.legislation.gov.uk/uksi/1989/635/contents/made";
const HSE_HSG85 = "https://www.hse.gov.uk/pubns/priced/hsg85.pdf";
const GOV_RENTED =
  "https://www.gov.uk/government/publications/electrical-safety-standards-in-the-private-and-social-rented-sectors-guidance/electrical-safety-standards-in-the-private-and-social-rented-sectors-guidance";
const OFGEM_DCP253 =
  "https://www.ofgem.gov.uk/publications/distribution-connection-and-use-system-agreement-dcp253-retightening-and-remaking-whole-current-metering-system-terminal-connections";

const CHOICES: readonly ExamChoice[] = ["A", "B", "C", "D"];
const enhancedExam = applyExamExplanationEnhancements(
  periodicInspectionData as unknown as Exam,
);
const targetSection = enhancedExam.sections.find(
  (section) => section.id === "eicr-section-5-merged-observation-scenarios",
);

function sourceUrlsFor(prompt: string): readonly string[] {
  const text = prompt.toLowerCase();
  const urls = new Set<string>([ESF_BPG4, IET_GN3, IET_CURRENT]);
  if (/eicr|schedule|classification|code|limitation|satisfactory/.test(text)) {
    urls.add(IET_MODEL_FORMS);
    urls.add(IET_INSPECTION);
  }
  if (/rcd|rcbo|residual|trip time/.test(text)) urls.add(IET_RCD);
  if (/earth|bond|cpc|zs|ze|r1\+r2|pen|pme/.test(text)) {
    urls.add(IET_EARTHING);
  }
  if (/\btt\b|electrode/.test(text)) urls.add(IET_TT);
  if (/ev charge|open-pen|vehicle/.test(text)) urls.add(IET_EV);
  if (/isolat|main switch/.test(text)) urls.add(IET_ISOLATION);
  if (/bathroom|zone 1|zone 2|ip44|ipx4|ipx5/.test(text)) {
    urls.add(IET_BATHROOMS);
  }
  if (/breaking capacity|prospective|fault current|\bka\b|backup/.test(text)) {
    urls.add(IET_SHORT_CIRCUIT_COORDINATION);
  }
  if (/cut-out|meter tails|network operator|\b105\b/.test(text)) {
    urls.add(OFGEM_DCP253);
  }
  if (/probe|tester|cat ii|gs38|test lead/.test(text)) urls.add(HSE_GS38);
  if (/workplace|duty holder|non-domestic|eawr|hospital|school/.test(text)) {
    urls.add(HSE_EAWR);
    urls.add(HSE_HSG85);
  }
  if (/landlord|rented|tenant|28 days|prs/.test(text)) urls.add(GOV_RENTED);
  return [...urls];
}

function reviewedEicrScenario(
  variantId: string,
  questionNumber: number,
  wrongReasons: readonly [string, string, string],
) {
  const question = targetSection?.variants
    .find((variant) => variant.id === variantId)
    ?.questions.find((entry) => entry.number === questionNumber);
  if (!question) throw new Error(`Missing ${variantId} Q${questionNumber}`);

  const wrongChoices = CHOICES.filter((choice) => choice !== question.answer);
  const reasons = [...wrongReasons];
  if (new Set(reasons).size !== 3) {
    throw new Error(`Repeated rationale for ${variantId} Q${questionNumber}`);
  }
  for (const reason of reasons) {
    if (
      reason.length <= 35 ||
      /…|\.\.\.|does(?: not|n't) fit|applicable answer|the correct answer|wrong feature|bank (?:key|question)|because it is wrong/i.test(
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
        reasons[index],
      ]),
    ),
    sourceUrls: sourceUrlsFor(question.prompt),
  };
}

const v1 = [
  reviewedEicrScenario("v1", 1, [
    "An RCBO detects line-to-earth imbalance, but an open supply PEN can raise every PME-connected metal part together without creating enough residual imbalance to trip it.",
    "A metal frame can be supplied safely when the earthing, bonding, protective conductors and simultaneous-contact risks are engineered for the actual building and supply.",
    "Socket shutters address access to socket contacts; they say nothing about an exported PME earth making the workshop frame hazardous after a broken PEN conductor.",
  ]),
  reviewedEicrScenario("v1", 2, [
    "Outdoor charging from PME is not automatically an immediate danger: compliant open-PEN protection, an electrode arrangement or another permitted Section 722 measure may already be built in.",
    "Protective features vary by charger model and installation method, so their presence cannot be assumed when the equipment markings and design records have not been checked.",
    "A fixed EV charging point and its circuit form part of the electrical installation covered by Section 722, even though a vehicle later plugs into it as connected equipment.",
  ]),
  reviewedEicrScenario("v1", 3, [
    "PV and battery circuits are alternative sources within the installation, so BS 7671 requirements for isolation, identification and suitable protective devices still apply.",
    "Stored energy is not automatically danger present; the classification follows the specific missing label, uncertainty or confirmed incompatible device found during inspection.",
    "Some breakers are directional because their arc control and terminal ratings assume one current direction, so export current and fault contribution must be checked against product data.",
  ]),
  reviewedEicrScenario("v1", 4, [
    "Electrical penetrations must preserve the fire performance of the wall they pass through; calling the sealing someone else's trade leaves the escape-route fire and smoke path unreported.",
    "A breached compartment in a common escape route can endanger occupants during a later fire even without present heat damage, which is why the foreseeable fire-spread risk supports C2.",
    "Common electrical distribution routes are within the agreed EICR extent when included by the client, and defects visible around their wiring penetrations still require reporting.",
  ]),
];

const v2 = [
  reviewedEicrScenario("v2", 1, [
    "C3 is for an improvement where neither immediate nor potential danger exists; an exposed energised conductor within reach presents an electric-shock danger now.",
    "C2 describes danger arising after a fault or foreseeable event, whereas the missing cover already permits direct contact with the live conductor and therefore requires C1.",
    "FI is reserved for an observed possible safety issue whose nature cannot yet be determined; the exposed live part is already identified and needs immediate make-safe action.",
  ]),
  reviewedEicrScenario("v2", 2, [
    "A 30 mA RCD limits shock duration but does not make an ordinary socket-outlet physically permitted inside Zone 1, where wet skin and close contact increase risk.",
    "A generic waterproof claim is not the bathroom rule: equipment must be a permitted type for the zone, and an ordinary socket is excluded regardless of enclosure marketing.",
    "Supplementary bonding controls voltage differences during faults but cannot convert a prohibited ordinary socket-outlet into equipment permitted for Zone 1.",
  ]),
  reviewedEicrScenario("v2", 3, [
    "C2 would require a failed or unreliable protective function; 250 ms is below the 300 ms maximum for the prescribed IΔn field test.",
    "C3 is not used simply because a compliant device could operate faster; the measured time satisfies the current verification requirement without a safety improvement being identified.",
    "The instrument has produced a clear compliant result, so no unresolved potential safety issue remains that would justify further investigation.",
  ]),
  reviewedEicrScenario("v2", 4, [
    "C3 understates a cable that can carry more current than its 27 A capacity before the 32 A breaker responds; sustained normal overload can overheat the wiring.",
    "The cable is not exposed live or overheating at the inspection, so this is potential danger after overload rather than the danger-present threshold for C1.",
    "A circuit is not satisfactory when the protective-device rating exceeds the conductor's corrected capacity, because overload protection is not coordinated with the cable.",
  ]),
  reviewedEicrScenario("v2", 5, [
    "C3 is too mild because reversed final-circuit polarity defeats intended single-pole switching and can leave equipment live during maintenance, creating potential shock danger.",
    "BPG4 uses C1 for polarity reversed at the installation origin; this fault is confined to one final circuit and no immediate exposed-live-part condition is stated.",
    "The fault is already known from testing, so further investigation is unnecessary; urgent correction and retesting are needed instead.",
  ]),
  reviewedEicrScenario("v2", 6, [
    "C2 would imply potential danger, but intact Class II construction provides its protection through double or reinforced insulation without relying on a CPC.",
    "C3 is unnecessary because single-pole switching in the line conductor is normal and the Class II luminaire has no protective-earth requirement to improve.",
    "Nothing is exposed live or otherwise dangerous now, so C1 would falsely classify a serviceable double-insulated fitting as an immediate hazard.",
  ]),
  reviewedEicrScenario("v2", 7, [
    "C2 would require the loop impedance to prevent timely automatic disconnection; 4.4 Ω is well below the applicable 7.28 Ω maximum.",
    "C3 is not a label for every older or high-looking reading: this measured value already provides the required disconnection performance with useful margin.",
    "C1 requires danger present, while the verified loop path supports protective-device operation and gives no immediate shock condition.",
  ]),
  reviewedEicrScenario("v2", 8, [
    "1.33 Ω is the result for three equal 4 Ω resistors in parallel, where current has three paths, not for a single series current path.",
    "Four ohms is only one resistor's value; series resistance includes all three voltage drops and therefore adds to 12 Ω.",
    "A value of 0.75 Ω is the reciprocal of 1.33 and has no basis in either the series sum or the equal-resistor parallel formula.",
  ]),
  reviewedEicrScenario("v2", 9, [
    "0.20 Ω comes from subtracting the 0.30 Ω external loop value from R1+R2, but Zs is the sum of both parts of the fault path.",
    "1.37 Ω is the protective-device limit used for comparison, not the circuit's calculated loop impedance from the two measured components.",
    "1.67 Ω incorrectly adds the 1.37 Ω limit to R1+R2; the calculation uses Ze 0.30 Ω plus R1+R2 0.50 Ω only.",
  ]),
  reviewedEicrScenario("v2", 10, [
    "Careful handling cannot replace missing finger barriers and shrouds because one slip can put a hand on live metal or bridge conductors during testing.",
    "Tape has no verified insulation, mechanical or CAT rating and can move or split, so it is not a safe repair for damaged professional test probes.",
    "Damaged probes remain unsuitable equipment even for planned dead tests, and proving dead itself requires safe voltage-detection equipment before contact is made.",
  ]),
  reviewedEicrScenario("v2", 11, [
    "C2 is for potential danger after a foreseeable event; the effective earthing connection remains present and only its protective warning identification is missing.",
    "C1 would require an immediate danger such as an accessible live part, not the absence of a notice beside an otherwise sound earthing connection.",
    "Calling the item satisfactory ignores the required warning that helps prevent future workers disconnecting a safety-critical earthing or bonding conductor.",
  ]),
  reviewedEicrScenario("v2", 12, [
    "The 300 V marking is a working-voltage rating within CAT II, not a promise that only 300 V peak can ever appear; the category also accounts for expected transients.",
    "Insulation, clearances and category rating are essential because an appliance circuit can expose the tester to mains voltage and transient overvoltage energy.",
    "AC frequency is measured in hertz, while the 300 V marking states the maximum working voltage for which the instrument carries its CAT II rating.",
  ]),
  reviewedEicrScenario("v2", 13, [
    "C3 is insufficient because intermittent CPC continuity can leave the Class I case unearthed when an insulation fault occurs, creating a foreseeable shock risk.",
    "Intermittent continuity alone does not make the metal case live at the inspection, so it has not reached the danger-present condition needed for C1.",
    "Normal operation proves only the load path; the loose CPC may still fail exactly when fault current needs to reach the protective device.",
  ]),
  reviewedEicrScenario("v2", 14, [
    "Invisibility behind a movable appliance does not itself prove a dangerous termination, so C2 cannot be assigned without observing evidence of potential danger.",
    "Silently omitting the point makes the report overstate its coverage; either obtain access or describe the specific agreed operational limitation.",
    "FI needs an observed sign that investigation may reveal danger; ordinary lack of access is recorded as a limitation unless evidence points to a defect.",
  ]),
  reviewedEicrScenario("v2", 15, [
    "Fourteen metres would produce about 0.234 Ω using 16.71 mΩ per metre, which is noticeably above the measured 0.20 Ω.",
    "Twenty-eight metres doubles the likely run and would give roughly 0.468 Ω for the stated line and CPC conductor resistances.",
    "Fifty metres would total about 0.836 Ω, over four times the measured loop resistance, so it cannot represent this conductor pair.",
  ]),
  reviewedEicrScenario("v2", 16, [
    "C3 is inappropriate because the breached basic insulation is already exposing an energised conductor within reach, rather than merely suggesting an improvement.",
    "C2 assumes danger arises only after a future fault, but direct contact is possible now and the circuit needs immediate isolation or enclosure.",
    "FI is unnecessary because the defect and its shock mechanism are visible; the priority is C1 notification and immediate make-safe action.",
  ]),
  reviewedEicrScenario("v2", 17, [
    "Fifty ohms is a desirable low result in many installations but is not a universal fixed maximum; the protective equation and stability also have to be considered.",
    "Although 1500 Ω may satisfy 50 V divided by 30 mA in pure arithmetic, it is far above the 200 Ω level at which electrode stability becomes a serious concern.",
    "TT electrode resistance is not unlimited: it must satisfy RA × IΔn ≤ 50 V, remain stable with soil changes and be kept as low as practicable.",
  ]),
  reviewedEicrScenario("v2", 18, [
    "C2 would require the luminaire's protection or ingress rating to create potential danger; a verified Class II IPX4 fitting is suitable for the stated zone.",
    "C3 is not needed merely because a bathroom is wet: the fitting already has the insulation class and minimum water-ingress protection required here.",
    "C1 requires an immediate hazard such as accessible live parts, while this enclosed, correctly rated luminaire provides intact protection.",
  ]),
  reviewedEicrScenario("v2", 19, [
    "The integral test button only exercises the device's internal mechanism and cannot supply a measured operating time for the prescribed external test current.",
    "Skipping instrument testing leaves the required RCD performance unverified, so the schedule cannot truthfully contain a measured compliant result.",
    "FI is not a substitute for carrying out the ordinary prescribed test that is available during the inspection; test at IΔn and classify the result obtained.",
  ]),
  reviewedEicrScenario("v2", 20, [
    "C2 would mean loss of the SPD has made the installation potentially dangerous, but the normal insulation and overcurrent protections continue to function.",
    "C1 requires danger present and immediate injury risk; a replace indication reports loss of surge protection, not accessible live parts.",
    "A replace indication means the SPD no longer provides its intended transient protection, so recording the installation as fully satisfactory misses a useful safety improvement.",
  ]),
  reviewedEicrScenario("v2", 21, [
    "C2 would require ineffective protection, but the scenario confirms that the fuse provides automatic disconnection and the circuit conductors and terminations are sound.",
    "C3 should enhance safety, not advertise a newer device type; changing a serviceable BS 1361 fuse solely for modern appearance has no stated safety benefit.",
    "C1 is reserved for danger present, whereas the intact fuse arrangement is verified to clear faults within the required time.",
  ]),
  reviewedEicrScenario("v2", 22, [
    "C3 understates metal containment that can become live with no low-impedance protective path, because an insulation fault could leave touchable metal energised.",
    "C1 would need the tray to be live or expose a live conductor now; the missing earth creates potential danger when a future insulation fault occurs.",
    "The installation is not satisfactory because the exposed-conductive-part cannot carry fault current reliably enough to operate the protective device.",
  ]),
  reviewedEicrScenario("v2", 23, [
    "C2 is unsupported because 200 MΩ is two hundred times the stated 1 MΩ minimum and shows no potentially dangerous insulation leakage.",
    "C3 would not improve an insulation result already far above the minimum, so adding a recommendation would imply a defect that the measurement does not show.",
    "FI is for a possible danger that cannot be resolved; this high, definite reading already establishes satisfactory insulation resistance for the tested circuit.",
  ]),
  reviewedEicrScenario("v2", 24, [
    "The English rented-sector 28-day statutory clock does not govern an unspecified non-domestic workplace, which instead needs prompt risk-based action under EAWR and HSWA.",
    "A fixed twelve-month delay can leave a potentially dangerous overloaded circuit in service and is not justified by the urgency attached to C2.",
    "EAWR requires systems to be maintained to prevent danger, so a duty holder cannot postpone a known C2 merely until a convenient future date.",
  ]),
  reviewedEicrScenario("v2", 25, [
    "Simply walking away loses the opportunity to record uncertainty, temperature correction and trend information that the next duty holder needs to manage a marginal result.",
    "C2 cannot be assigned solely because a compliant result has little margin; evidence must show the protective measure is actually inadequate or potentially dangerous.",
    "The inspector can issue a factual report while clearly recording borderline values, so refusal is unnecessary when the installation can still be assessed competently.",
  ]),
];

const v3 = [
  reviewedEicrScenario("v3", 1, [
    "C3 is too mild because an intermittent theatre-circuit CPC can leave Class I equipment without a fault-current path when insulation fails.",
    "Continuity that is intermittent does not show accessible metalwork live at the inspection, so the immediate-danger threshold for C1 has not been established.",
    "Occasional continuity is not dependable fault protection; corrosion at the busbar can open the path precisely when fault current needs to operate the device.",
  ]),
  reviewedEicrScenario("v3", 2, [
    "The space above a bath is Zone 1 up to its defined upper boundary, not Zone 0; Zone 0 is the volume where water is contained.",
    "Space outside the bath may fall in Zone 1, Zone 2 or outside the zones depending on distance, but it is not the inside-of-bath Zone 0 volume.",
    "Bathroom zones are measured volumes with distinct risks and equipment rules, so the whole room cannot be labelled Zone 0 merely because it contains a bath.",
  ]),
  reviewedEicrScenario("v3", 3, [
    "A damaged cable normally lowers insulation resistance or gives an unstable reading; an over-range indication instead means the meter cannot resolve such a high resistance.",
    "A short circuit would display very low resistance and allow substantial current, the opposite electrical condition from an open or greater-than insulation reading.",
    "C2 is unsupported because the result exceeds the meter range and the required insulation minimum; record the actual over-range value rather than inventing deterioration.",
  ]),
  reviewedEicrScenario("v3", 4, [
    "C2 is a classification for the fixed electrical installation; a portable extension lead does not become fixed wiring simply because it is plugged into a corridor socket.",
    "C3 on the EICR would imply an improvement to the fixed installation, while the actual remedy is to manage or replace the portable lead and appliance arrangement.",
    "Even if the trailing lead creates an immediate trip or electrical hazard, C1 is not entered against sound fixed wiring; warn the duty holder and control the separate equipment hazard.",
  ]),
  reviewedEicrScenario("v3", 5, [
    "A blown plug fuse belongs to the connected appliance and plug, so it is not a C2 observation about the condition of the fixed installation.",
    "C3 is for a fixed-installation safety improvement; replacing or investigating an appliance plug fuse is handled under equipment maintenance instead.",
    "A blown fuse does not expose a live part or establish immediate danger, and in any event the portable appliance remains outside the EICR coding scope.",
  ]),
  reviewedEicrScenario("v3", 6, [
    "Ignoring an unexpectedly high protective-conductor loop reading can miss a loose termination that will limit fault current and leave metalwork at a dangerous voltage.",
    "C2 should not be assigned before the cause and protective performance are established; a measurement anomaly may come from connection, conductor length or test setup.",
    "C3 is not enough when the unexplained reading could conceal ineffective fault protection; unresolved evidence of possible danger calls for FI without delay.",
  ]),
  reviewedEicrScenario("v3", 7, [
    "Six kiloamps is a common BS EN 60898 domestic product rating and would be suitable, but the minimum derived from the measured fault current is only 1.2 kA.",
    "A 100 kA device would far exceed the required interrupting duty and is not the minimum breaking capacity established by a 1.2 kA prospective current.",
    "Breaking capacity is never optional: a device that cannot safely interrupt the prospective fault current may rupture or sustain an arc during a fault.",
  ]),
  reviewedEicrScenario("v3", 8, [
    "An unsatisfactory result needs a C1 or C2 observation. The scenario instead confirms RCD protection, suitable ingress protection and no other defect; an FI would be advisory under the A4:2026 EICR form and still needs a specific unresolved concern.",
    "Pending is not an EICR outcome category and no unfinished evidence is described, so a clear satisfactory assessment can be made within the stated scope.",
    "FI is reserved for an observed possible safety issue that cannot be resolved, not for a compliant outdoor circuit merely because it is exposed to weather.",
  ]),
  reviewedEicrScenario("v3", 9, [
    "Half an ohm would require twenty equal 10 Ω branches in parallel; five equal branches instead give 10 Ω ÷ 5 = 2 Ω.",
    "Ten ohms is the resistance of one branch; adding four identical parallel current paths reduces the total to one fifth of that value.",
    "Fifty ohms is the series sum of five 10 Ω resistors, whereas parallel connection provides five simultaneous paths and gives 2 Ω.",
  ]),
  reviewedEicrScenario("v3", 10, [
    "C1 would require accessible live parts, active arcing or another immediate hazard; the intact internal barriers mean the known damp-and-dust ingress risk is potential rather than present danger.",
    "C3 is too mild because moisture and conductive dust can now reach the board's insulation, causing tracking, an earth fault or overheating during continued service.",
    "The assembly is not satisfactory because the failed door admits the damp and dust that its enclosure must exclude to keep insulation and connections safe.",
  ]),
  reviewedEicrScenario("v3", 11, [
    "C2 cannot yet describe a definite defect because the discolouration's internal cause and safety effect have not been established within the sealed enclosure.",
    "C3 assumes no potential danger, but abnormal heat evidence may reveal a loose connection or damaged insulation and therefore needs prompt investigation.",
    "Skipping the observation would hide the visible warning sign and leave the duty holder unaware that a potentially dangerous internal condition remains unresolved.",
  ]),
  reviewedEicrScenario("v3", 12, [
    "C3 understates a gland whose mechanical retention and armour-earth connection can fail on an exposed playground circuit, creating a foreseeable shock risk.",
    "C1 is not justified while the inner insulation remains intact and no live part is accessible; the danger would arise after further damage or a fault.",
    "Intact inner cores do not restore the gland's armour termination, earth continuity or strain relief, all of which are safety functions needing urgent repair.",
  ]),
  reviewedEicrScenario("v3", 13, [
    "C3 is too mild because a device required for fault or additional protection is confirmed unable to disconnect a residual-current fault.",
    "Failed RCD tests establish potential danger, but without accessible live parts or an existing fault they do not alone establish immediate danger for C1.",
    "Waiting for a separate fault leaves users relying on a protective device already proved inoperative; it must be replaced and tested urgently.",
  ]),
  reviewedEicrScenario("v3", 14, [
    "C3 understates active moisture and insulation deterioration that can progress to an earth fault, loss of armour continuity or accessible dangerous voltage.",
    "C1 needs exposed live parts or another present injury risk; the enclosure still prevents contact even though urgent repair is required before failure.",
    "Deferring action until complete insulation failure accepts a predictable shock and fire hazard despite visible deterioration that already supports C2.",
  ]),
  reviewedEicrScenario("v3", 15, [
    "C2 would require potential access to live parts, but the secure blank maintains the consumer unit's barrier and enclosure protection.",
    "C3 is unnecessary because the spare way is already closed with the intended durable component and no safety enhancement is identified.",
    "FI is not needed because the blank's fit and enclosure condition can be inspected directly without an unresolved hidden safety concern.",
  ]),
  reviewedEicrScenario("v3", 16, [
    "C2 would require inadequate overload protection, but the 32 A device is below the cable's corrected 47 A capacity and will protect it.",
    "C3 is not warranted merely because a larger cable has unused capacity; that margin improves thermal performance rather than creating a safety deficiency.",
    "FI is unnecessary because the installation method, corrected cable capacity and protective-device rating are all stated and demonstrate coordination.",
  ]),
  reviewedEicrScenario("v3", 17, [
    "C1 requires immediate danger such as accessible live parts or active overheating, neither of which follows from an intact plastic enclosure on a backboard.",
    "The older C2 approach overstates the current evidence: BPG4 now bases fire coding on location and actual condition rather than plastic material alone.",
    "Calling it simply satisfactory omits the useful NC-only distinction: there is no classification code, while its construction can still be noted factually if needed.",
  ]),
  reviewedEicrScenario("v3", 18, [
    "C3 is too mild because a 4 mm² main bond is below the BPG4 6 mm² threshold and may not safely carry fault or diverted neutral current.",
    "C1 would require the service pipe already at a dangerous voltage or another immediate condition; undersizing creates potential danger during a later event.",
    "The installation is not satisfactory because the confirmed PME main bonding conductor lacks the minimum current-carrying robustness required for its protective role.",
  ]),
  reviewedEicrScenario("v3", 19, [
    "Unsatisfactory requires at least one C1 or C2 safety observation, but the protective devices, surge protection and enclosure are all serviceable here. FI is advisory under the A4:2026 EICR form and cannot create an unsatisfactory outcome by itself.",
    "Pending is not the required final EICR assessment and there is no missing test or limitation preventing the inspector from reaching a conclusion.",
    "FI cannot be used without an observed issue that may reveal danger; a modern, fully functioning consumer unit supplies no such evidence.",
  ]),
  reviewedEicrScenario("v3", 20, [
    "A new report records current condition rather than preserving an old C2 after the defect has been competently repaired and its protection reverified.",
    "C3 would falsely suggest a remaining safety improvement solely to commemorate a historical defect that is already corrected in the installation.",
    "FI is unnecessary when inspection and testing confirm the remedy is effective; the previous and remedial documents retain the history.",
  ]),
  reviewedEicrScenario("v3", 21, [
    "C2 cannot be attached to sound fixed wiring because the network switch is supplied through portable equipment beyond the socket-outlet boundary.",
    "C1 on the EICR would misclassify the fixed installation even if the lead arrangement needed immediate separate action; report and control that equipment hazard directly.",
    "FI is not needed to determine the socket's fixed-wiring condition, which can be inspected and tested; the portable arrangement is handled outside EICR coding.",
  ]),
  reviewedEicrScenario("v3", 22, [
    "C3 is too mild because an MCB with insufficient breaking capacity can fail violently or sustain an arc when clearing the known prospective fault current.",
    "C1 would require an immediate active fault or accessible danger; the inadequate interrupting duty becomes dangerous when a future short circuit occurs.",
    "The board is not satisfactory because its 6 kA devices cannot be assumed to interrupt a fault level confirmed to exceed that rating safely.",
  ]),
  reviewedEicrScenario("v3", 23, [
    "C1 requires immediate danger, while absence of additional RCD protection on an otherwise sound domestic lighting circuit is listed as an improvement issue.",
    "C2 overstates this omission on the facts given; BPG4 identifies the ordinary domestic lighting case as C3 unless a separate potentially dangerous defect is found.",
    "Calling the circuit fully satisfactory overlooks the current safety improvement of 30 mA additional protection for domestic lighting final circuits.",
  ]),
  reviewedEicrScenario("v3", 24, [
    "C2 would imply ineffective bonding, but the correct clamp is secure and measured continuity confirms the protective path is present.",
    "C3 is unnecessary because the connection already meets the mechanical, identification and continuity purpose expected of the bonding arrangement.",
    "FI is reserved for unresolved possible danger, whereas the inspector can see the clamp and verify the conductor continuity directly.",
  ]),
  reviewedEicrScenario("v3", 25, [
    "Replacing the consumer unit would not restore the missing equipotential connection between the MET and the incoming gas service.",
    "A new EICR is another condition assessment, not the physical remedy; the missing bonding conductor must be installed and verified first.",
    "C3 would understate a confirmed absence of main protective bonding, which BPG4 treats as C2 because a fault can create a dangerous touch-voltage difference.",
  ]),
];

const v4 = [
  reviewedEicrScenario("v4", 1, [
    "C3 is too mild because the bathroom lacks both 30 mA additional protection and the supplementary-bonding conditions needed to control fault touch voltage.",
    "C1 would require an immediate exposed-live-part or energised-metal condition; the missing protective measures create danger when a foreseeable fault occurs.",
    "The shower circuit is not satisfactory because users in wet conditions cannot rely on either of the stated shock-risk safeguards required for the location.",
  ]),
  reviewedEicrScenario("v4", 2, [
    "0.55 V results from omitting most of the 25 A load or using only two metres; it does not apply 11 mV/A/m across the full 10 m run.",
    "Eleven volts treats the tabulated 11 mV/A/m figure as a final voltage or misplaces the conversion by 1000 rather than multiplying all three quantities correctly.",
    "27.5 V comes from 11 × 25 × 10 divided by 100 instead of 1000, making the voltage drop ten times too large.",
  ]),
  reviewedEicrScenario("v4", 3, [
    "Unsatisfactory needs a C1 or C2 observation, whereas the hospital circuit's inspection and measured results reveal no safety deficiency within scope. FI is advisory under the A4:2026 EICR form and would still require an actual unresolved concern.",
    "Pending is not the model EICR outcome and no incomplete evidence or outstanding limitation is stated that prevents a professional conclusion.",
    "FI needs an observed possible danger whose nature remains unresolved; normal readings and no visible defects provide no basis for that classification.",
  ]),
  reviewedEicrScenario("v4", 4, [
    "Zone 1 is not defined as 1500 mm above a rim; its upper boundary is 2.25 m above finished floor or the highest fixed shower head or water outlet, whichever is higher.",
    "Zone 1 has a three-dimensional volume extending upward from floor level, so its upper horizontal boundary cannot be at the floor itself.",
    "The whole bathroom is not Zone 1; the zone is bounded around the bath or shower, with other space falling into Zone 2 or outside the zones.",
  ]),
  reviewedEicrScenario("v4", 5, [
    "There is a real risk because recipients may rely on the tick as evidence that a safety-critical item was inspected and found acceptable when it was not checked.",
    "Any time saved comes from omitting the agreed work and cannot justify signing a false inspection outcome that may conceal an unsafe condition.",
    "The schedule is part of the inspector's formal technical declaration, not harmless administration; inaccurate entries weaken the entire report's evidential value.",
  ]),
  reviewedEicrScenario("v4", 6, [
    "0.65 Ω is the difference between R1+R2 and Ze, but the earth-fault loop contains the external and circuit resistances in series and therefore adds them.",
    "1.70 Ω doubles the 0.85 Ω circuit value and omits the actual external contribution, so it is not Ze plus the measured R1+R2.",
    "0.20 Ω is Ze alone and stops at the installation origin; it leaves out the line and CPC resistance along the final circuit.",
  ]),
  reviewedEicrScenario("v4", 7, [
    "C3 is too mild because a worker can reasonably operate the labelled isolator and then encounter an energised circuit during maintenance.",
    "Miswiring creates potential danger but does not by itself show someone presently exposed to live parts, so the C1 threshold has not yet been reached.",
    "A remote alternative means of isolation does not make a false local label safe; the misleading device still invites foreseeable reliance and urgent repair.",
  ]),
  reviewedEicrScenario("v4", 8, [
    "C3 understates a required RCD or RCBO that cannot meet the prescribed maximum operating time and may fail to disconnect a dangerous residual fault promptly.",
    "C1 needs danger present now, while the confirmed slow operation creates potential danger when a shock or earth fault occurs and therefore supports C2.",
    "The device is not satisfactory because its measured IΔn operating time exceeds the current 300 ms field-test limit after test conditions were confirmed.",
  ]),
  reviewedEicrScenario("v4", 9, [
    "C3 is too mild for a protective device confirmed unable to trip by either its integral mechanism or an external test instrument.",
    "An inoperative RCBO creates potential danger, but without an existing fault or accessible live part its failure alone does not prove immediate danger for C1.",
    "Waiting for another fault leaves the circuit relying on protection already proved absent; urgent replacement and verification are required now.",
  ]),
  reviewedEicrScenario("v4", 10, [
    "C2 would imply the current installation is potentially dangerous, but the only stated fact is that the duty holder cannot produce an earlier test schedule.",
    "C1 requires present injury risk such as accessible live parts and cannot be inferred from a gap in historic paperwork.",
    "FI is used for an observed possible safety defect, not automatically for missing old records when the present installation can be inspected and tested directly.",
  ]),
  reviewedEicrScenario("v4", 11, [
    "C3 is too mild because active moisture and busbar corrosion can reduce insulation, loosen connections and lead to arcing or exposed dangerous voltage.",
    "C1 would require active arcing, accessible live parts or another immediate injury risk; the present evidence instead shows foreseeable progression and supports C2.",
    "The consumer unit is not satisfactory while condensation continues to attack live connections and protective equipment inside its metal enclosure.",
  ]),
  reviewedEicrScenario("v4", 12, [
    "1.5 Ω is the parallel value of two 3 Ω branches and ignores that the first branch is actually two 6 Ω resistors in series, giving 12 Ω.",
    "Three ohms is the value of the second branch alone; adding the 12 Ω parallel path lowers the combined resistance to 2.4 Ω.",
    "Twelve ohms is only the series pair before the 3 Ω branch is connected, so it omits the extra current path that reduces total resistance.",
  ]),
  reviewedEicrScenario("v4", 13, [
    "C2 would require the bonding connection to be ineffective or unreliable, but the clamp is mechanically sound and measured continuity is satisfactory.",
    "C3 needs a genuine safety improvement; replacing a serviceable, suitable connection solely because a newer clamp style exists adds no stated protection.",
    "C1 is impossible on these facts because the verified bond is effective and no pipework or exposed metal is at a dangerous voltage.",
  ]),
  reviewedEicrScenario("v4", 14, [
    "Unsatisfactory is driven by C1 or C2 observations, neither of which arises from serviceable RCBOs, an operational SPD and clean test schedules. FI is advisory under the A4:2026 EICR form and is not justified without a defined concern to investigate.",
    "Pending is not a model EICR conclusion and no unfinished inspection issue is described that would prevent the report being completed.",
    "FI requires an observed possible danger that cannot be identified, whereas every stated protective feature and result is satisfactory.",
  ]),
  reviewedEicrScenario("v4", 15, [
    "C3 is too mild because the intermittent earth lug may leave the Class I motor frame without a path to operate protection during an insulation fault.",
    "Intermittent CPC continuity does not show the motor frame presently live, so immediate danger for C1 has not been established.",
    "A motor can run normally with no CPC at all; operation therefore says nothing about the protective path needed when a fault energises its metal frame.",
  ]),
  reviewedEicrScenario("v4", 16, [
    "C2 would imply potential shock danger, but the Class I hood has a verified CPC and is supplied through a suitably fused fixed connection.",
    "C3 is unnecessary because the circuit already provides the earthing and load protection required for the hood rather than merely meeting an older lower standard.",
    "C1 requires danger present, while the metal body is correctly earthed and no accessible live part or fault is described.",
  ]),
  reviewedEicrScenario("v4", 17, [
    "C2 would require the circuit Zs to exceed its protective limit; 0.60 Ω is less than half the stated 1.37 Ω maximum.",
    "C3 has no safety improvement to identify because the fault loop already gives substantial margin for the Type B breaker to disconnect.",
    "FI is unnecessary because Ze, R1+R2 and Zs agree arithmetically and the final value is clearly within the device limit.",
  ]),
  reviewedEicrScenario("v4", 18, [
    "C1 requires an immediate source of injury, and the absent PV label alone does not expose live parts or prove the isolation equipment defective.",
    "C2 overstates a missing notice when the source and isolators remain electrically sound; BPG4 treats alternative-source identification as a safety improvement.",
    "Calling the installation fully satisfactory misses the foreseeable maintenance benefit of warning workers that PV can energise conductors after the normal supply is isolated.",
  ]),
  reviewedEicrScenario("v4", 19, [
    "Thirteen watts comes from multiplying current by resistance and omits the second current factor required by the heating law P = I²R.",
    "Thirty-nine watts is the simple product 13 × 0.3 multiplied by ten, but it still does not square the 13 A current as the formula requires.",
    "One hundred sixty-nine watts is 13² before multiplication by the conductor's 0.3 Ω resistance, so it overstates the actual dissipation.",
  ]),
  reviewedEicrScenario("v4", 20, [
    "C1 cannot be inferred from a missing certificate because paperwork absence does not show accessible live parts or another danger present now.",
    "C2 needs evidence that the new circuit is potentially dangerous, which must come from its design, condition or test results rather than the missing EIC alone.",
    "FI requires an observed possible safety issue that cannot be determined; it is not an automatic replacement for inspecting and testing undocumented existing work.",
  ]),
  reviewedEicrScenario("v4", 21, [
    "C1 would require immediate danger already observed, but the present uncertainty is whether grouping has reduced cable capacity below the protected load.",
    "Assigning C2 before calculating corrected Iz or establishing load claims a definite potential danger that the available evidence has not yet proved.",
    "The arrangement cannot be recorded satisfactory while an unresolved grouping issue may mean the protective device permits damaging overload current.",
  ]),
  reviewedEicrScenario("v4", 22, [
    "C2 is not justified merely because one RCD causes inconvenience on a trip; BPG4 treats inadequate circuit division as NC only when protection itself works.",
    "C3 must contribute to safety, while replacing one serviceable RCD with RCBOs chiefly improves continuity and convenience on the facts stated.",
    "C1 requires immediate risk of injury, not the possibility that several healthy circuits will lose supply together after the RCD clears a fault.",
  ]),
  reviewedEicrScenario("v4", 23, [
    "C1 would require accessible live copper or another danger now; the inner basic insulation remains intact behind the switch-box enclosure.",
    "C2 would require the unsheathed cores to be touchable or able to contact metalwork; intact basic insulation inside the enclosure removes both immediate fault paths here.",
    "Calling the entry satisfactory ignores the lost sheath and strain protection, which should be restored before movement or deterioration exposes the insulated cores.",
  ]),
  reviewedEicrScenario("v4", 24, [
    "A previous report's unsatisfactory result is historical evidence, not an automatic current observation after every defect has been verified as remedied.",
    "Pending is not the EICR outcome and verified repairs plus a completed current inspection provide enough evidence for a present assessment.",
    "FI is unnecessary merely because an earlier defect existed; it is used only if the current inspection reveals a possible unresolved danger.",
  ]),
  reviewedEicrScenario("v4", 25, [
    "Invoices and photographs show that work may have occurred but do not prove conductor continuity, insulation, polarity or protective-device performance now.",
    "Refusing the inspection wastes the opportunity to establish the present safety condition; the inspector can test the repaired items within an agreed scope.",
    "FI is not automatic just because a separate confirmation is missing; direct inspection and testing may resolve the condition without further investigation.",
  ]),
];

const v5 = [
  reviewedEicrScenario("v5", 1, [
    "C3 is too mild because active water ingress and degrading insulation can produce a foreseeable earth fault, shock or fire in the outdoor board.",
    "C1 needs accessible live parts, active arcing or another immediate injury risk; the enclosed deterioration is presently potential danger and therefore C2.",
    "Waiting for total failure leaves agricultural users exposed to a predictable wet-environment fault despite visible evidence that the enclosure and insulation are already deteriorating.",
  ]),
  reviewedEicrScenario("v5", 2, [
    "Agricultural premises do require RCD protection because moisture, livestock and conductive contamination make ordinary fault and shock conditions more severe.",
    "Class 0 equipment relies only on basic insulation and has no protective-earth provision, so it is unsuitable rather than required in this harsh environment.",
    "Treating the area like a dry room ignores washdown, dust, animals and rough handling; Section 705 adds protection specifically for those influences.",
  ]),
  reviewedEicrScenario("v5", 3, [
    "C3 understates a cable protected at 80 A despite a 75 A corrected capacity, because sustained overload can overheat it before the fuse operates.",
    "C1 requires immediate danger such as accessible live parts or active overheating, while the rating mismatch creates potential danger under load and supports C2.",
    "The submain is not satisfactory because overload coordination requires the device rating not to exceed the conductor's corrected current-carrying capacity.",
  ]),
  reviewedEicrScenario("v5", 4, [
    "A combined cooker control unit and 13 A socket is a recognised accessory arrangement, so its combined construction alone supplies no potentially dangerous condition for C2.",
    "C3 needs a safety improvement, but a correctly rated unit, cable and protective device already provide the required control and overload coordination.",
    "C1 requires danger present, and nothing about a sound combined unit exposes live parts or energises accessible metalwork.",
  ]),
  reviewedEicrScenario("v5", 5, [
    "The inspector must not open or repair a sealed cut-out: it is distributor equipment, may have no consumer isolation and can expose very high fault energy.",
    "C1 on the consumer installation ignores current BPG4 treatment of intake defects; report the dangerous condition urgently to the DNO, with the EICR outcome affected only if live parts are accessible.",
    "C2 is also not the model-form classification for distributor equipment on these facts; mark the intake item unacceptable, describe it and arrange urgent DNO action.",
  ]),
  reviewedEicrScenario("v5", 6, [
    "C1 requires immediate danger, while the omission of 30 mA protection on an otherwise sound older lighting circuit does not expose a live part now.",
    "C2 overstates the ordinary domestic lighting case: current BPG4 lists absence of additional RCD protection for that final circuit as C3.",
    "Calling it fully satisfactory overlooks a current safety improvement that can reduce shock duration if a person contacts a damaged lighting conductor or fitting.",
  ]),
  reviewedEicrScenario("v5", 7, [
    "C2 is not automatic because ordinary kitchen sockets are not stated to supply outdoor equipment, serve a bathroom or present another foreseeable danger.",
    "C1 would require an immediate shock hazard such as accessible live parts, not simply MCB protection without the additional RCD layer.",
    "A fully satisfactory entry misses the worthwhile 30 mA additional protection expected for socket-outlets under current requirements, so C3 communicates the improvement.",
  ]),
  reviewedEicrScenario("v5", 8, [
    "C2 is unsupported because 50 Ω with a 30 mA RCD gives RA × IΔn of only 1.5 V, far below the 50 V protective limit.",
    "C3 is unnecessary where the stable electrode reading, RCD fault protection and test results already provide a compliant TT protective arrangement.",
    "FI is not needed because both the electrode resistance and the protective device are known and can be tested directly rather than remaining uncertain.",
  ]),
  reviewedEicrScenario("v5", 9, [
    "Accepting the theatre gap forever leaves safety-critical circuits outside condition assessment despite the duty holder's continuing EAWR responsibility to prevent danger.",
    "Cancelling the entire EICR discards valid evidence from accessible circuits; the proper response is a clear limitation plus planned access for the excluded work.",
    "A limitation is not itself C2 because no specific potentially dangerous defect has been found on the unisolated circuits; risk is controlled until inspection can occur.",
  ]),
  reviewedEicrScenario("v5", 10, [
    "C2 would require inadequate water protection or another potential danger, but IP44 includes IPX4 water protection suitable for ordinary Zone 1 exposure.",
    "C3 has no improvement to identify because the fitting already meets the minimum ingress requirement for the stated bathroom zone.",
    "C1 requires accessible live parts or another immediate injury risk, neither of which follows from a correctly enclosed IP44 luminaire.",
  ]),
  reviewedEicrScenario("v5", 11, [
    "C3 is too mild because a TT neutral can rise from Earth potential and remaining connected defeats the all-pole isolation needed for safe maintenance.",
    "C1 requires someone presently exposed to a hazardous conductor; the single-pole main switch creates potential danger when isolation is relied upon and therefore C2.",
    "The arrangement is not satisfactory on TT because line-only switching leaves a live neutral path, unlike the permitted neutral treatment in suitable TN systems.",
  ]),
  reviewedEicrScenario("v5", 12, [
    "C2 would require confirmed failure to operate within the prescribed 300 ms maximum, while the measured IΔn time is ten milliseconds inside it.",
    "C3 is not applied merely because a compliant RCD is close to its limit; the recorded result satisfies the current field-verification requirement.",
    "FI is unnecessary because the prescribed test produced a definite compliant time; record 290 ms and maintain normal periodic checks rather than inventing uncertainty.",
  ]),
  reviewedEicrScenario("v5", 13, [
    "C2 on the EICR would wrongly classify the fixed installation, because the damaged extension lead is portable equipment beyond the socket-outlet boundary.",
    "C3 is not the right response to visibly compromised basic insulation on portable equipment; the lead needs immediate separate removal or repair, not a fixed-wiring improvement code.",
    "Even if direct contact makes the lead itself immediately dangerous, C1 is not attributed to sound fixed wiring; control the hazard and report it separately at once.",
  ]),
  reviewedEicrScenario("v5", 14, [
    "C2 would imply potential danger, but each circuit has individual residual-current protection and the working SPD and enclosure add further protection.",
    "C3 is unnecessary because no missing safety feature or deterioration is identified in this serviceable modern consumer unit.",
    "C1 requires immediate danger such as exposed live parts, while the intact board and green SPD status show normal protective condition.",
  ]),
  reviewedEicrScenario("v5", 15, [
    "A 6 kA breaker may be standard in many domestic boards, but it cannot safely interrupt the stated 16 kA prospective fault without verified backup protection.",
    "A 1 kA breaking capacity is far below the measured fault duty and could let the device rupture or sustain an arc during interruption.",
    "Breaking capacity is essential rather than optional because the protective device must contain and clear the maximum prospective short-circuit energy at its location.",
  ]),
  reviewedEicrScenario("v5", 16, [
    "C2 is unsupported because the motor frame is earthed and the stated continuity and fault-protection measures are all verified intact.",
    "C3 needs a concrete safety enhancement, but no deficient conductor, device, enclosure or test result is present in the scenario.",
    "FI is not justified when the protective path and relevant test set have already established the motor circuit's condition without unresolved warning signs.",
  ]),
  reviewedEicrScenario("v5", 17, [
    "C3 is too mild because a loose oxidised main bond may open or overheat when it has to carry fault or diverted neutral current, creating potential touch voltage.",
    "The clamp's poor condition alone does not show the gas pipe presently at a dangerous voltage, so it has not reached the immediate-danger threshold for C1.",
    "One low-current continuity reading cannot prove that a loose corroded joint will remain sound under fault current, mechanical movement or further oxidation.",
  ]),
  reviewedEicrScenario("v5", 18, [
    "An identification mismatch does not reduce cable capacity or defeat overcurrent protection; without an actual rating defect, C2 would overstate the safety risk.",
    "C1 requires an immediate hazard, whereas an incorrect circuit label chiefly risks future isolation or replacement mistakes and is an improvement issue.",
    "Calling the board satisfactory ignores BPG4's C3 treatment of absent or inaccurate circuit identification needed for safer operation and maintenance.",
  ]),
  reviewedEicrScenario("v5", 19, [
    "The rented-sector 28-day statutory process does not automatically govern this non-domestic workplace, and C3 improvements do not carry the same urgency as C2 hazards.",
    "Repair cost is not a risk measure: both potentially dangerous C2 items need prompt action, even if one is much cheaper to correct than the other.",
    "Waiting for the next inspection leaves known potential dangers unmanaged and conflicts with the workplace duty to maintain systems so far as necessary to prevent danger.",
  ]),
  reviewedEicrScenario("v5", 20, [
    "C2 would require failed insulation or another foreseeable shock danger, but intact Class II construction deliberately provides protection without a CPC.",
    "C3 is unnecessary because switching the line conductor only is normal for this circuit and the fitting already has verified double insulation.",
    "C1 requires danger present, while no live part is exposed and the protective Class II enclosure and markings remain intact.",
  ]),
  reviewedEicrScenario("v5", 21, [
    "C2 would require breaking capacity below the prospective current; equality meets the requirement that device rating be at least the measured fault level.",
    "C3 is not applied just to create extra numerical margin where the protective device already has the required 6 kA interrupting capacity.",
    "FI is unnecessary because both prospective current and device capacity are known and directly comparable, with no unresolved equipment information.",
  ]),
  reviewedEicrScenario("v5", 22, [
    "An old unsatisfactory outcome remains in the historical report but is not copied into a new inspection after the installation and repairs are reassessed.",
    "Pending is not the model EICR result, and reviewing history is useful evidence rather than a precondition that prevents recording the current condition.",
    "FI is not automatic because an earlier report was unsatisfactory; it needs a current observed issue that may reveal danger and cannot yet be identified.",
  ]),
  reviewedEicrScenario("v5", 23, [
    "C1 would require the water pipe or accessible metalwork already at a dangerous potential, while missing bonding creates potential danger during a later fault.",
    "C3 understates absence of effective main bonding to a confirmed extraneous-conductive-part, which can leave a hazardous voltage difference during faults.",
    "The installation is not satisfactory because users cannot rely on equipotential bonding to limit simultaneous-touch voltage between the service pipe and earthed equipment.",
  ]),
  reviewedEicrScenario("v5", 24, [
    "Unsatisfactory is reserved for at least one C1 or C2 observation; neither exists within the fully recorded scope here. FI is advisory under the A4:2026 EICR form and would still need a specific unresolved concern.",
    "Pending is not a permitted overall EICR assessment and the signed inspection, schedules and next date supply everything needed to conclude the report.",
    "FI cannot be used without an observed possible danger requiring investigation; an absence of observations and complete records supplies no such trigger.",
  ]),
  reviewedEicrScenario("v5", 25, [
    "Any C2 makes the EICR unsatisfactory, and the English rented-sector rules require action rather than allowing the landlord to leave missing main bonding in service.",
    "C3 recommendations need not all be completed before the C2 is closed out, so a pending outcome until every improvement is made misstates their lower urgency.",
    "The model EICR outcome is satisfactory or unsatisfactory, not conditional; this report is unsatisfactory now because it contains the confirmed C2.",
  ]),
];

const reviewedQuestions = [...v1, ...v2, ...v3, ...v4, ...v5];
const allRationales = reviewedQuestions.flatMap((entry) =>
  Object.values(entry.rationales),
);

if (reviewedQuestions.length !== 104 || allRationales.length !== 312) {
  throw new Error(
    `Periodic EICR Part 3 requires 104 questions and 312 rationales; found ${reviewedQuestions.length}/${allRationales.length}`,
  );
}
if (new Set(allRationales).size !== allRationales.length) {
  throw new Error("Periodic EICR Part 3 contains repeated rationales");
}

export const periodicInspectionEicrPart3 = reviewedQuestions;
