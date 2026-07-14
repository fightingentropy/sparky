import periodicInspectionData from "../exam-data/periodic-inspection.json";
import { applyExamExplanationEnhancements } from "../examExplanationEnhancements";
import type { Exam, ExamChoice, ExamQuestion } from "../exams/types";

const IET_CURRENT_EDITION =
  "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/ensure-you-are-up-to-date-with-bs-7671/";
const IET_MODEL_EICR =
  "https://electrical.theiet.org/media/jp2fl3ia/bs7671_eicr_a4.pdf";
const IET_INSPECTION_FAQ =
  "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/";
const IET_RCD_TESTING =
  "https://electrical.theiet.org/wiring-matters/years/2022/91-july-2022/changes-to-rcd-testing-in-bs-76712018plusa22022/";
const IET_ISOLATION =
  "https://electrical.theiet.org/wiring-matters/years/2023/94-march-2023/isolation-and-switching-for-mechanical-maintenance/";
const IET_BIDIRECTIONAL =
  "https://electrical.theiet.org/wiring-matters/years/2024/99-march-2024/bidirectional-protective-devices/";
const ESF_BPG4 =
  "https://www.electricalsafetyfirst.org.uk/media/xqlow0dz/best_practice-guide-4_issue-7-2.pdf";
const ESF_WIRING_HELP =
  "https://www.electricalsafetyfirst.org.uk/resources-for-electricians/wiring-regulations-help/";
const IET_TT_EARTHING =
  "https://electrical.theiet.org/wiring-matters/years/2021/87-september-2021/tt-earthing-considerations/";
const IET_OVERLOAD_PROTECTION =
  "https://electrical.theiet.org/wiring-matters/years/2024/103-november-2024/mythbuster-11-adapting-for-change/";
const IET_PV_DC_ISOLATION =
  "https://electrical.theiet.org/wiring-matters/years/2026/109-april-2026/solar-photovoltaic-dc-switch-disconnector-selection-and-configuration/";
const HSE_EAWR = "https://www.legislation.gov.uk/uksi/1989/635/contents/made";
const HSE_HSR25 = "https://www.hse.gov.uk/pubns/books/hsr25.htm";
const RENTED_SECTOR_2025_AMENDMENT =
  "https://www.legislation.gov.uk/uksi/2025/1043/pdfs/uksi_20251043_en.pdf";
const GOV_RENTED_SECTOR =
  "https://www.gov.uk/government/publications/electrical-safety-standards-in-the-private-and-social-rented-sectors-guidance/electrical-safety-standards-in-the-private-and-social-rented-sectors-guidance";

const TARGET_SECTION_IDS = new Set(["eicr-section-3", "eicr-section-4"]);
const CHOICES: readonly ExamChoice[] = ["A", "B", "C", "D"];
const enhancedPeriodicInspection = applyExamExplanationEnhancements(
  periodicInspectionData as unknown as Exam,
);

type ScopedQuestion = {
  sectionId: string;
  variantId: string;
  question: ExamQuestion;
};

function clean(value: string): string {
  return value
    .replace(/…|\.\.\./g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function lower(value: string): string {
  return clean(value).toLowerCase();
}

function mechanismFor(prompt: string): string | undefined {
  const text = lower(prompt);

  if (/24 ms and 286 ms.*38 ms and 41 ms/.test(text)) {
    return "Both IΔn readings, 24 ms and 286 ms, are within the current 300 ms maximum; the 5 × readings do not override that result because the old 40 ms field test is no longer the prescribed core check.";
  }
  if (/ra = 166.*100 ma time-delayed/.test(text)) {
    return "The TT touch-voltage check is RA × IΔn: 166 Ω gives 16.6 V at 100 mA and 4.98 V at 30 mA, so both are below 50 V, although electrode stability still deserves review.";
  }
  if (/type b 32 a mcb has measured zs = 1\.21/.test(text)) {
    return "Zs must be compared with the maximum derived for the actual B32 device and required disconnection time, including the correct temperature basis; normal operation or an arbitrary 1 Ω cut-off proves nothing about ADS.";
  }
  if (/older domestic kitchen.*no rcd/.test(text)) {
    return "These are older indoor sockets, outside a bathroom and unlikely to supply outdoor equipment; absent 30 mA protection is therefore a C3 improvement here, not potential danger on the facts given.";
  }
  if (/recently added indoor dishwasher socket in a dry kitchen.*no 30 ma rcd/.test(text)) {
    return "This dry-kitchen socket is outside a bathroom, is unlikely to supply outdoor mobile equipment and has no other danger; missing 30 mA protection is therefore the BPG4 C3 improvement case, not C2 merely because the work is recent.";
  }
  if (/recently added indoor dishwasher socket.*no 30 ma rcd/.test(text)) {
    return "The socket is indoors, outside a bathroom, unlikely to supply outdoor mobile equipment and has no other identified danger; current Best Practice Guide 4 therefore treats missing 30 mA protection as a C3 improvement, irrespective of when the socket was installed.";
  }
  if (/mobility equipment.*taken outdoors/.test(text)) {
    return "Equipment regularly taken outdoors is exposed to earth contact and wet conditions, so the socket's missing 30 mA additional protection creates foreseeable shock danger and is C2.";
  }
  if (/outdoor socket-outlet.*no rcd/.test(text)) {
    return "An actively used outdoor socket can supply equipment where a person is well connected to Earth; without 30 mA additional protection, that foreseeable shock risk is C2.";
  }
  if (/zs of 1\.40.*1\.37/.test(text)) {
    return "The measured 1.40 Ω exceeds the stated 1.37 Ω maximum for the B32 device, so fault current may not operate it within the required time; without RCD fault protection this is C2.";
  }
  if (/beneath floorboards.*normal cable zone/.test(text)) {
    return "The supported sheathed cable is clear of foreseeable fixings and undamaged; BS 7671 does not impose a blanket armour-plus-RCD rule merely because a cable runs below a floor.";
  }
  if (/swa gland is loose and damaged/.test(text)) {
    return "The loose gland no longer retains the cable reliably and the tested intermittent armour/CPC connection can defeat fault-current return; with the cores insulated and inaccessible, that is C2 potential danger rather than C1.";
  }
  if (/two rcbo.*no main rcd/.test(text)) {
    return "Each RCBO already gives its circuit both overcurrent and residual-current protection; a separate main RCD is unnecessary duplication when that scheme is sound.";
  }
  if (/unidentified cable disappearing into a wall/.test(text)) {
    return "No defect or warning sign has been observed on the unidentified cable. The A4 schedule provides N/V for the applicable item not verified and LIM for a genuine report limitation; FI is used only if a specific possible danger emerges.";
  }
  if (/subsequent investigation (?:finds|proves) the cable (?:is )?in safe zones/.test(text)) {
    return "The follow-up has answered the FI and proved safe-zone routing with no mechanical-protection defect, so written evidence closes the advisory investigation while the original C1/C2-free A4 report remains satisfactory.";
  }
  if (/cable concealed in stud wall, route unknown/.test(text)) {
    return "An unknown concealed route is an evidence gap, not proof of damage or unsafe routing. Use the A4 schedule's N/V outcome and record a precise LIM where applicable; FI needs a specific sign of possible danger rather than inability to map the cable alone.";
  }
  if (/faceplate has a small cosmetic chip/.test(text)) {
    return "The inspected faceplate remains tight and fully enclosed, and the chip has no sharp edge or path for progression; electrical protection is unchanged, so no code is justified.";
  }
  if (/cosmetic chip on a faceplate/.test(text)) {
    return "The cosmetic-only mark exposes nothing and is stated not to progress; replacing an otherwise safe faceplate may improve appearance but is not an EICR safety recommendation.";
  }
  if (/small surface scratch on the door/.test(text)) {
    return "The consumer-unit door is still secure and electrically sound; a surface scratch changes appearance only and creates no electrical improvement to recommend.";
  }
  if (/legacy bonding connection on a lead water service/.test(text)) {
    return "This connection is suitable for the soft lead pipe, mechanically secure and proved low resistance, so it performs the bonding function despite not using a modern BS 951 clamp.";
  }
  if (/bonding clamp on metallic water service in good condition/.test(text)) {
    return "The sound clamp and verified continuity provide the required equipotential connection; there is no lost protection to classify merely because the bonding was inspected.";
  }
  if (/loose, oxidised bonding clamp on the gas service/.test(text)) {
    return "Continuity at one test moment does not make a loose oxidised clamp mechanically reliable; it can fail during a fault and allow a dangerous voltage difference, so urgent C2 repair is needed.";
  }
  if (/structural steel confirmed extraneous-conductive-part/.test(text)) {
    return "The structural steel introduces Earth potential and lacks the bond that keeps it near exposed metalwork voltage during a fault, creating a C2 simultaneous-contact shock risk.";
  }
  if (/no main protective bonding to incoming water/.test(text)) {
    return "The main earthing conductor cannot substitute for bonding the extraneous water service; without that separate connection a fault can create a dangerous touch voltage, so the omission is C2.";
  }
  if (/tt-supplied dwelling.*inoperative rcd/.test(text)) {
    return "The inoperative device removes the TT installation's fault-disconnection route, creating potential danger and C2; urgent isolation or another safe control is needed, while C1 still requires danger present now.";
  }
  if (/domestic dwelling with tt system.*fails to trip/.test(text)) {
    return "Because the 30 mA device does not trip at any test current, the TT system cannot rely on it for fault disconnection; that confirmed protective failure is C2 rather than unresolved FI or present C1 danger.";
  }
  if (/rcd failure.*outdoor sockets/.test(text)) {
    return "The failed RCD removes additional shock protection from several outdoor outlets, where contact with Earth is foreseeable; this confirmed potential danger is C2 and needs urgent replacement and testing.";
  }
  if (/general non-delay rcd takes more than 5 seconds/.test(text)) {
    return "More than five seconds at IΔn is far beyond the 300 ms maximum, so the RCD has failed its required function and is C2; no live part or active fault is described for C1.";
  }
  if (/rcd bypassed/.test(text)) {
    return "The jumper deliberately prevents the RCD from disconnecting on residual current, removing the intended protective layer and creating C2 potential danger even though no active fault is present.";
  }
  if (/rcbo that fails to operate.*5 seconds/.test(text)) {
    return "The RCBO has demonstrably failed the IΔn operating-time requirement, so its residual-current protection cannot be relied on; that is C2 until the device is replaced and retested.";
  }
  if (/class i luminaire with no cpc/.test(text)) {
    return "Without a CPC, a line fault to the reachable metal luminaire may not produce enough current for automatic disconnection, leaving the body live under fault conditions; that is C2.";
  }
  if (/loose earth pin contact/.test(text)) {
    return "The unreliable earth contact may leave a connected Class I appliance without its fault-return path, so its metalwork could stay live after a fault; that foreseeable failure is C2.";
  }
  if (/hand-tight cable lug.*found loose/.test(text)) {
    return "A loose MET lug can raise resistance or open the installation's main fault-current path, undermining automatic disconnection for every connected circuit; urgent secure termination and testing make this C2.";
  }
  if (/undersized cpc.*32 a radial/.test(text)) {
    return "The 1.0 mm² CPC must be verified by the adiabatic and disconnection requirements for the 32 A radial; as stated, it cannot be assumed to withstand the fault energy, so C2 is appropriate.";
  }
  if (/tn-s installation with 4 mm² bare main earthing/.test(text)) {
    return "The 4 mm² main earthing conductor is below the required present sizing and may not safely carry the prospective fault energy, so it is a C2 weakness of the fault path, not present live danger.";
  }
  if (/existing 10 mm² main earthing conductor.*fails.*adiabatic/.test(text)) {
    return "A 100 A cut-out alone does not make an existing 10 mm² earthing conductor inadequate, but the stated calculation proves this conductor cannot withstand the verified fault energy until disconnection; that failed fault path is C2.";
  }
  if (/mains earthing strap broken at the met/.test(text)) {
    return "The open strap removes verified earth continuity at the MET, so exposed metalwork may not disconnect under a future fault; this is C2 potential danger unless a fault has already made it live.";
  }
  if (/older lighting circuit has no cpc/.test(text)) {
    return "The accessible Class I luminaires need a CPC to carry fault current and operate protection; age does not make the absent path safe, so the circuit is C2 until corrected or Class II equipment is secured as appropriate.";
  }
  if (/loft cable.*tape-wrapped twisted joint/.test(text)) {
    return "The unenclosed loft joint lacks a durable terminal, strain relief and mechanical protection, so movement or loosening can cause heat or exposed conductors; with no present access to live parts it is C2.";
  }
  if (/inside a closed junction box.*twisted and tape/.test(text)) {
    return "The box prevents touch now, but tape and twisting do not maintain contact pressure like a suitable terminal; loosening can overheat inside the enclosure, making the joint C2.";
  }
  if (/inside a fitted ceiling-rose cover.*twisted/.test(text)) {
    return "The fitted rose cover removes immediate touch access, but the unsupported twisted connection can loosen and overheat at the luminaire load, so it remains C2 until remade in a proper terminal.";
  }
  if (/burnt-out neutral termination at a busbar/.test(text)) {
    return "The cooled busbar termination is no longer an active C1 event, but heat damage has weakened the high-current connection and can recur or fail, so urgent replacement and testing make it C2.";
  }
  if (/fire damage on a circuit's accessory and cable/.test(text)) {
    return "The cooled accessory and cable no longer present active fire or touch danger, but their insulation and connection integrity are damaged and can fail on re-use, so the fixed classification is C2.";
  }
  if (/exposed live conductor at an accessible loft/.test(text)) {
    return "A person entering the loft can touch the live conductor directly, so danger is present now and the circuit needs C1 isolation or guarding before access continues.";
  }
  if (/active arcing inside a distribution board cover/.test(text)) {
    return "Active arcing is already producing heat and an uncontrolled fault inside the board, so it is C1 and requires immediate isolation rather than a future repair booking.";
  }
  if (/active burning smell/.test(text)) {
    return "Heat damage plus an active burning smell shows the termination is still overheating, creating immediate fire danger and a C1 make-safe requirement.";
  }
  if (/exposed metal back box.*live terminal accessible/.test(text)) {
    return "The damaged faceplate allows direct access to the live switch terminal at an ordinary touch position, so C1 immediate shock danger is established.";
  }
  if (/polarity reversed at one socket/.test(text)) {
    return "At the reversed socket, single-pole switching or fusing may interrupt neutral while line remains connected, leaving internal parts unexpectedly live; that foreseeable shock risk is C2.";
  }
  if (/misleading label on the consumer unit's main switch/.test(text)) {
    return "Calling the main switch 'Lighting' can mislead someone about what it disconnects, so the identification needs C3 correction; no failed isolation or exposed danger is reported.";
  }
  if (/crossed circuit ids at the consumer unit/.test(text)) {
    return "The swapped circuit identities can misdirect future isolation, so the schedule and labels need C3 correction; without an actual unsafe isolation event or mismatched device, C2 is not established.";
  }
  if (/domestic cu with no labels at all/.test(text)) {
    return "Missing circuit identification makes future maintenance less reliable and should be improved as C3, but it does not by itself remove electrical protection or expose live parts.";
  }
  if (/lighting circuit installed in 1995 with no rcd/.test(text)) {
    return "The older lighting circuit lacks today's additional RCD layer but no separate hazard is identified, so current guidance treats it as a C3 upgrade rather than potential or immediate danger.";
  }
  if (
    /older dwelling has a sound rewireable fuse board.*indoor socket/.test(text)
  ) {
    return "The sound legacy board still provides overcurrent protection and the indoor sockets are not likely to feed outdoor equipment; adding RCD protection is a C3 improvement on these facts.";
  }
  if (/retail unit has no rcd.*indoor customer-facing/.test(text)) {
    return "Customer access alone does not make these dry indoor sockets a C2 when they are outside bathrooms and unlikely to feed outdoor equipment; 30 mA protection remains a C3 improvement.";
  }
  if (/dwelling lighting circuit complies with original/.test(text)) {
    return "The lighting circuit remains safe to its original standard with no added defect identified; modern 30 mA protection would improve safety, so C3 records the upgrade without claiming danger.";
  }
  if (/cable at <50 mm in plaster.*long-standing/.test(text)) {
    return "The concealed cable is in a recognised safe zone and no damage is identified; adding today's RCD layer to the older circuit is C3, not evidence of present or potential danger by itself.";
  }
  if (/mcb swapped to wrong type.*type d/.test(text)) {
    return "Changing from Type B to Type D raises the magnetic operating current, and the measured Zs no longer supplies enough fault current for timely disconnection; that confirmed ADS failure is C2.";
  }
  if (/bs 3036 fuse.*ads times not met/.test(text)) {
    return "The rewireable fuse is not the defect by age alone, but the measured loop impedance prevents it clearing an earth fault in time; that specific ADS failure is C2.";
  }
  if (/under current bs 7671 field-verification/.test(text)) {
    return "Under the current field-verification method, the 280 ms IΔn AC result passes the 300 ms limit; an old 5 × test is not needed to turn it into a failure.";
  }
  if (/trips in 280 ms at iδn using an ac residual/.test(text)) {
    return "The measured 280 ms operating time is 20 ms inside the 300 ms maximum for a general non-delay RCD at IΔn, leaving no failed function or unresolved investigation.";
  }
  if (/1\.0 mm² cable forms an unfused spur.*general-purpose socket/.test(text)) {
    return "This general-purpose socket can impose overload current above the 1.0 mm² cable's installed capacity, and no FCU limits it; because the stated load is liable to overload, the narrow Regulation 433.3.1 exception does not apply and overheating makes it C2.";
  }
  if (/32 a mcb on 4 mm².*iz.*27/.test(text)) {
    return "Thermal insulation reduces the 4 mm² cable rating to about 27 A, below the 32 A device, so normal overload can overheat the cable without timely operation; that coordination failure is C2.";
  }
  if (/heavy load on a ring final.*cable visibly warm/.test(text)) {
    return "Warmth under heavy load is a symptom, not a code by itself: measure current, inspect terminations and compare the cable's effective rating with its protective device; confirmed overload is C2, while normal temperature rise within rating is not a defect.";
  }
  if (
    /single-pole switch on the line conductor of a class ii luminaire/.test(
      text,
    )
  ) {
    return "A Class II luminaire relies on double insulation rather than a CPC, and a single-pole switch correctly placed in line is normal functional switching; no safety protection is missing.";
  }
  if (/dc-rated pv isolator.*incorrectly marked ['“]?230 v ac/.test(text)) {
    return "The marking positively identifies a live PV DC circuit as AC and can cause a worker to use the wrong isolation sequence while the array continues generating; that stated unsafe-isolation mechanism is C2, unlike a merely absent supplementary notice.";
  }
  if (/foil substituting for a rewireable fuse/.test(text)) {
    return "Foil defeats the fuse's calibrated current-limiting function, so overload or fault current can continue until cables or accessories overheat; isolate the circuit and replace the foil immediately with the correct protective device.";
  }
  if (/identifies a c2.*commits to remediation within 14 days/.test(text)) {
    return "The C2 exists on the inspection date, so the EICR remains unsatisfactory; a documented 14-day repair promise is useful follow-up but cannot change the dated outcome.";
  }
  if (/c3 observation alone makes/.test(text)) {
    return "One C3 records an improvement but no immediate or potential danger, so it leaves the report satisfactory; under A4, only C1 or C2 makes the overall assessment unsatisfactory.";
  }
  if (/eicr with one c3 only/.test(text)) {
    return "A single C3 has the same defined effect as any C3-only set: the improvement stays on the report, but the absence of C1 and C2 means the A4 outcome is satisfactory.";
  }
  if (/(?:identifies|has) six c3(?:s| observations)/.test(text)) {
    return "Six recommendations may justify a substantial improvement plan, but quantity does not convert C3 into danger; with no C1 or C2, the A4 report remains satisfactory.";
  }
  if (/single c2 \+ ten c3s/.test(text)) {
    return "The one C2 is enough to make the EICR unsatisfactory because it identifies potential danger; ten C3 improvements neither dilute nor postpone that result.";
  }
  if (/no c1, c2, c3 or fi observations/.test(text)) {
    return "With no C1 or C2, the A4 model EICR is satisfactory; the additional absence of C3 and FI simply means there are no improvement recommendations or advisory investigations to consider.";
  }
  if (
    /privately rented dwelling eicr is unsatisfactory.*maximum time/.test(text)
  ) {
    return "For a covered rented home, C1 or C2 requires remedial work, and a report that states further investigative work is necessary also triggers investigation; the work is normally due within 28 days of inspection or sooner if specified, while C1 danger is controlled immediately.";
  }
  if (
    /privately rented dwelling eicr finds c2 missing main bonding/.test(text)
  ) {
    return "The missing gas-service bond is a recorded C2, so the landlord must arrange the required work within 28 days of inspection or the shorter period stated, not wait for a tenancy event.";
  }
  if (/a4:2026 model eicr.*privately rented dwelling has one fi/.test(text)) {
    return "Under A4, FI is advisory and does not affect the overall outcome, so one FI with no C1 or C2 leaves the report satisfactory; the specific concern still deserves prompt investigation and any separate rented-sector duty where the report says that work is necessary.";
  }
  if (/satisfactory but recommends the next inspection in 3 years/.test(text)) {
    return "The inspector's three-year date is the due date supported by the installation's condition; the rented-sector five-year figure is a maximum, not permission to delay a shorter recommendation.";
  }
  if (/recommended next inspection is in 3 years.*after 3 years/.test(text)) {
    return "Once the recommended three-year interval expires, the landlord must arrange the next inspection; waiting for five years would overrun the report's valid date.";
  }
  if (/valid satisfactory eicr issued one year ago.*requires the next inspection after two years/.test(text)) {
    return "The current report's evidence-based two-year interval makes the next inspection due one year from now; the rented-sector five-year figure is an outer limit, not permission to overrun an earlier required date.";
  }
  if (/unsatisfactory result is supplied to a new tenant/.test(text)) {
    return "Giving the tenant the report meets the supply duty but does not cure its C1 or C2 findings, or complete any further investigation the report says is necessary; the landlord must also complete the required work within the applicable deadline.";
  }
  if (/make-safe to be held off.*business/.test(text)) {
    return "Business continuity cannot justify leaving a C1 energised; isolate the affected part or apply another authorised immediate safeguard, then plan permanent repair around operations.";
  }
  if (/eicr with two c2 items.*first risk-based step/.test(text)) {
    return "The workplace duty holder should assess the two potential dangers, apply any interim controls and assign prompt remedial priorities; neither a site-wide replacement nor doing nothing is a proportionate first step.";
  }
  if (/satisfactory with five c3s on an office/.test(text)) {
    return "Five C3s leave the office EICR satisfactory but identify real improvements for the duty holder's risk-based maintenance plan; they do not justify ignoring the report or replacing everything.";
  }
  if (/one c2 and four c3s.*non-domestic/.test(text)) {
    return "The workplace's one C2 needs prompt risk-based remedy and keeps the report unsatisfactory, while the four C3s belong in the longer-term improvement plan rather than a blanket domestic deadline.";
  }
  if (/seven c2s and three c3s/.test(text)) {
    return "All seven C2 risks need prompt prioritised action under EAWR, while the three C3 improvements can be planned; the domestic PRS 28-day rule does not automatically govern this workplace.";
  }
  if (/duty holder for a workplace electrical installation/.test(text)) {
    return "The employer or person controlling the workplace owns the EAWR duty to keep the installation safe; contractors, the DNO and the authority may assist but do not inherit that control.";
  }
  if (/duty to inspect and maintain in non-domestic/.test(text)) {
    return "EAWR places the maintenance duty on the employer or person in control, who must arrange competent work as needed; it is neither voluntary nor transferred to the inspector or DNO.";
  }
  if (/same chain should be/.test(text)) {
    return "An EICR covers only the named installation and agreed extent; every other chain premises needs its own condition evidence even if one site's findings inform a wider maintenance programme.";
  }
  if (/c2 on a critical circuit.*cannot fix/.test(text)) {
    return "Operational difficulty does not change a C2 into C3 or erase the report; record the potential danger, add interim controls and plan a prompt verified repair.";
  }
  if (/c2 on the same day as a follow-up/.test(text)) {
    return "The C2 exists on today's inspection and must be recorded and communicated now; next week's visit can verify repair but cannot defer or dilute the current finding.";
  }
  if (/c2 on an extraneous-conductive-part bond/.test(text)) {
    return "Normal operation never tests the bond's job: during a fault it limits the voltage between earthed equipment and metal carrying Earth potential, so a defective bond creates C2 shock risk despite years without an incident.";
  }
  if (/c1 that the inspector has made safe/.test(text)) {
    return "The make-safe isolation is temporary risk control, not a repair; the defect stays on the unsatisfactory EICR until permanent work is tested and separately confirmed.";
  }
  if (/school's plant room circuit.*leave the keys/.test(text)) {
    return "The plant-room lock-off must stay secure and under recorded authorised control; casual key release or re-energisation can put the known C1 back into service before repair.";
  }
  if (/c1 at a hospital.*denies the issue/.test(text)) {
    return "Denial cannot make the hospital C1 safe; warn clearly, control or isolate the affected part within authority and escalate through the hospital's emergency responsibility chain.";
  }
  if (/known c1 and an injury results/.test(text)) {
    return "Ignoring a known immediate danger can support HSE enforcement, prosecution and civil claims because the duty holder had specific warning and failed to control it before injury.";
  }
  if (/documented response to an unsatisfactory eicr/.test(text)) {
    return "A defensible workplace response records each risk, interim control, owner and target date, then retains work evidence and post-repair test results; a bare email, invoice or blank file proves none of that.";
  }
  if (/multiple unsatisfactory items.*may benefit/.test(text)) {
    return "Multiple findings are best managed through a prioritised remedial plan linking each risk to an owner, date and verification evidence; repeated reports do not perform the repairs.";
  }
  if (/unsatisfactory result on a school.*timeframe/.test(text)) {
    return "A school follows workplace risk-based urgency: C1 danger is controlled immediately, C2 is remedied urgently, and a specific FI concern is investigated promptly, rather than applying the rented-home 28-day period mechanically.";
  }
  if (/non-domestic premises with one fi/.test(text)) {
    return "A4 makes FI advisory for the overall outcome, so it does not make a C1/C2-free report unsatisfactory; the specific possible danger behind FI still needs prompt risk-based investigation under the workplace maintenance duty.";
  }
  if (/c1 in a busy retail unit/.test(text)) {
    return "The dangerous part must be isolated or guarded immediately, but selective control can protect customers without closing unrelated safe areas of the shop.";
  }
  if (/c1 in an unoccupied retail unit/.test(text)) {
    return "An empty unit still has a landlord duty holder and may be entered by contractors; isolate and record the C1 now rather than leave it for an incoming tenant.";
  }
  if (/immediate danger.*school.*half-term/.test(text)) {
    return "Half-term reduces occupants but does not remove the danger to cleaners or contractors; isolate the affected part, secure it and notify the school's responsible person through the emergency route.";
  }
  if (/c1 in a property they were not contracted/.test(text)) {
    return "The adjacent unit is outside the inspector's contract and possibly their isolation authority, but immediate danger still requires warning its responsible person, controlling access and escalating if it cannot be made safe lawfully.";
  }
  if (/advises the tenant of a c1 directly/.test(text)) {
    return "The tenant needs a clear immediate-danger warning and explanation of the make-safe action while attempts to reach the landlord are documented; silence or abandoning the hazard leaves the occupier exposed.";
  }
  if (/signs (?:off on a|written) confirmation.*completed/.test(text)) {
    return "Signing asserts a proper evidential basis that the specified work was inspected and tested; an unsupported signature is unsafe, but refusal is unnecessary when competent evidence exists.";
  }
  if (/remediated by a different electrician.*original inspector/.test(text)) {
    return "The remedial electrician can issue their own certificate or confirmation, or the original inspector can inspect and test before signing; identity is less important than traceable verification.";
  }
  if (/landlord challenges an inspector's c2/.test(text)) {
    return "The inspector should explain the measured defect and risk, review genuine contrary evidence and correct any proven error; pressure alone cannot justify reducing or withdrawing the observation.";
  }
  if (/correctly coded but disputed/.test(text)) {
    return "A technically sound observation remains on the signed audit trail; the inspector can add a clear explanation and consider new evidence, but cannot remove or weaken it merely to settle a dispute.";
  }
  if (/after a c2 on an eicr has been remedied/.test(text)) {
    return "Close the repair with competent inspection and testing plus separate written confirmation or the appropriate work certificate; the original EICR remains the dated record of the C2 found.";
  }
  if (/observation that is downgraded.*c2 to c3/.test(text)) {
    return "Changing a genuine C2 to C3 deliberately hides potential danger and produces a false satisfactory result; classification must follow the observed risk, not the requested outcome.";
  }
  if (/senior managers.*knowingly ignore c2/.test(text)) {
    return "Where a corporate health-and-safety offence results from a senior manager's consent, connivance or neglect, HSWA section 37 can make that individual personally prosecutable as well as the company.";
  }
  if (/a4 eicr has one fi.*investigation then finds no defect/.test(text)) {
    return "The focused investigation has answered the advisory FI and found no defect, so qualified written follow-up should record what was checked and close the concern without altering the original satisfactory report, inventing remedial work or repeating the full EICR.";
  }
  if (/landlord refuses to act on an unsatisfactory/.test(text)) {
    return "Refusing required rented-sector remedial work can trigger a formal remedial notice, authority-arranged urgent work and a financial penalty up to the current £40,000 ceiling for a breach.";
  }
  if (/supply written confirmation of remedial work to the tenant/.test(text)) {
    return "After required work is completed, the landlord must give the tenant the qualified-person confirmation within 28 days; a tenant request is not needed.";
  }
  if (/supplies the local authority.*ignores the c2/.test(text)) {
    return "Providing the report meets one duty but leaves a separate C2-remediation breach; the authority can require the work and impose a financial penalty under its enforcement process.";
  }
  if (/28-day clock starts from/.test(text)) {
    return "The rented-sector remedial period begins on the inspection date, so delayed delivery of the report, a tenancy event or an accounting date cannot extend it.";
  }
  if (/fails to provide an eicr to a new tenant/.test(text)) {
    return "A new tenant must receive the EICR before occupation; missing that point is already a supply-duty breach and is not cured by a 28-day grace period or waiting for a request.";
  }
  if (/hospital theatre circuit cannot be remedied/.test(text)) {
    return "The theatre C2 remains potential danger, so a competent risk assessment must verify controls that actually reduce the particular risk, book the earliest feasible repair and require isolation or restricted use when those controls cannot make continued operation tolerable.";
  }
  if (/hidden previous eicrs.*same c2s persisting/.test(text)) {
    return "The concealed history shows the known C2s were not resolved; preserve that evidence, report the current defects and escalate the repeated neglect rather than refusing or ignoring it.";
  }
  if (/commits to remediation.*couple of weeks.*no formal record/.test(text)) {
    return "A spoken promise does not change today's C2 or the signed EICR; record the unsatisfactory result and obtain a dated remedial plan plus verification when the work is done.";
  }
  if (/multiple operational limitations.*large parts/.test(text)) {
    return "The limitations accurately mark large unverified areas but leave the duty holder responsible for follow-up access, interim controls and risk evidence; issuing weekly replacement reports would inspect nothing new.";
  }

  if (
    /prospective short-circuit current.*three-phase|line-line test/.test(text)
  ) {
    return "A three-phase or line-to-line fault can exceed the measured single-phase value, so the report needs the measured figures plus a justified maximum estimate or better network data.";
  }
  if (/type ac rcd/.test(text)) {
    return "An AC-waveform trip test proves operation only for that test waveform; pulsating DC from the load can require a Type A or other suitable RCD even when the Type AC device trips on the tester.";
  }
  if (
    /original eicr.*satisfactory|change the original eicr|re-issue.*unsatisfactory|reissue.*report|alter it|remediated.*new eicr|previously coded c2/.test(
      text,
    )
  ) {
    return "The original EICR is a dated record of what was found; verified remedial work is documented separately and a later EICR reports the later condition without rewriting history.";
  }
  if (
    /old board.*no rcds.*no spd|observations should be.*specific/.test(text)
  ) {
    return "Age and a desire to upgrade are not defects: each actual omission, damaged part or failed protective measure must be located, evidenced and classified separately.";
  }
  if (
    /maximum time to remedy|c2 observation.*prs|28-day clock|remedial work.*tenant|unsatisfactory.*privately rented|landlord must remediate|landlord refuses to act|maximum financial penalty|local authorit.*copy|new tenant|next inspection.*3 years|recommended next inspection.*3 years|4-year-old satisfactory eicr/.test(
      text,
    )
  ) {
    return "For a covered rented home, the report interval cannot exceed five years, required C1/C2 remedial work and any further investigation the report says is necessary are normally completed within 28 days or sooner, and the separate report-supply deadlines still apply.";
  }
  if (
    /written confirmation.*qualified person|signs off.*written confirmation|remediated by a different electrician|where remedial work follows.*written confirmation/.test(
      text,
    )
  ) {
    return "Written confirmation must come from a qualified person with real inspection-and-test evidence for the remedial work, not from identity, photographs, an invoice or unsupported assurance alone.";
  }
  if (
    /duty holder.*workplace|hswa|eawr|non-domestic/.test(text) &&
    /duty|timeframe|act|responsib|plan|schedule|consequence|priorit/.test(text)
  ) {
    return "The employer or person controlling the workplace owns the EAWR maintenance duty and must respond to electrical risk promptly on a documented, reasonably-practicable basis.";
  }
  if (
    /c1/.test(text) &&
    /make-safe|made safe|isolate|business|customer|school|hospital|retail|unoccupied|invoice|backorder|tenant|cannot be reached|denies|leave site|adjacent shop|not contracted/.test(
      text,
    )
  ) {
    return "C1 means danger is present now, so the responsible person must be warned immediately and the affected part isolated or otherwise made safe by someone competent and authorised before normal access continues.";
  }
  if (
    /c2/.test(text) &&
    /next inspection|leave it|critical circuit|couple of weeks|same day|observations|duty holder/.test(
      text,
    )
  ) {
    return "C2 identifies potential danger and makes the report unsatisfactory; a future promise does not alter the finding, and urgent remedial action must be planned and evidenced.";
  }
  if (
    /c3/.test(text) &&
    /overall|satisfactory|landlord|office|improvements|observations|five c3|three c3|six c3/.test(
      text,
    )
  ) {
    return "C3 recommends a genuine safety improvement but does not identify immediate or potential danger, so C3 alone leaves the EICR satisfactory and is managed through planned improvement.";
  }
  if (
    /\bfi\b/.test(text) &&
    /overall|unsatisfactory|landlord|duty holder|investigation|low ir|single fi/.test(
      text,
    )
  ) {
    return "FI is reserved for a specific apparent concern whose possible danger cannot yet be classified. Under A4 it is advisory and does not affect the overall outcome, but the defined concern should still be investigated promptly.";
  }
  if (/overall|outcome field|overall result/.test(text)) {
    return "The A4 outcome follows the danger classifications: any C1 or C2 makes it unsatisfactory, while C3 and FI are advisory and do not affect the overall assessment.";
  }
  if (/outcome.*field/.test(text)) {
    return "The A4 outcome is a summary of the danger classifications: any C1 or C2 makes it unsatisfactory; C3, FI, signatures, premises type and the raw observation count do not set it.";
  }
  if (/conflict of interest|same installation|close family/.test(text)) {
    return "A relationship with the duty holder creates an impartiality risk that must be declared and managed with objective evidence and independent review where a reasonable reader could doubt the result.";
  }
  if (
    /fraudulent prior certification|dates altered|signatures forged|hidden previous eicr/.test(
      text,
    )
  ) {
    return "Suspect or concealed records cannot be treated as reliable evidence; document the factual concern, assess the installation independently and use the appropriate professional or enforcement reporting route.";
  }
  if (
    /schedule of inspections marked|signing inspector|signed off|inspector.*signature/.test(
      text,
    )
  ) {
    return "A signature or tick is a personal statement that the recorded inspection and testing was actually completed and supports the findings; it cannot be borrowed from another person's assumption.";
  }
  if (/top-up retest|quick re-issue|quick reissue/.test(text)) {
    return "Remedial work is verified by inspecting and testing the affected work and issuing separate confirmation or the appropriate certificate; the original EICR stays as the dated record of the earlier condition.";
  }
  if (/demonstrate compliance/.test(text)) {
    return "Compliance needs the original report plus traceable qualified-person evidence that each required C1/C2 remedy and stated further investigation was completed; a report, invoice or spoken account alone proves no electrical result.";
  }
  if (/challenges an inspector's c2|correctly coded but disputed/.test(text)) {
    return "A challenge should trigger a calm review of the observation, measurements and risk, but the entry remains unless new technical evidence shows it was wrong.";
  }
  if (/negligent advice.*injury/.test(text)) {
    return "An inspector owes a professional duty to use reasonable competence and care; clear negligence that causes injury can create personal civil, regulatory or criminal exposure alongside the duty holder's duties.";
  }
  if (/all observations should be acted on within 12 months/.test(text)) {
    return "EICR codes carry different urgency: C1 is controlled immediately, C2 needs urgent remedial action, FI identifies a specific concern for prompt investigation, and C3 is planned improvement, so one twelve-month deadline cannot safely cover them all.";
  }
  if (/satisfactory result with no observations.*relieve/.test(text)) {
    return "A satisfactory EICR is a snapshot of the fixed installation within its recorded scope; the duty holder still maintains it between inspections and separately manages portable equipment and other legal duties.";
  }
  if (/cannot find a ['“]?qualified person/.test(text)) {
    return "Difficulty finding a contractor does not pause the statutory deadline; the landlord must keep seeking a qualified person, document the attempts, protect occupants and engage the authority rather than self-grant an extension.";
  }
  if (/prs regs 2020 obligations apply/.test(text)) {
    return "The rented-sector duties continue throughout the tenancy: inspection, supplying reports, completing required work and retaining evidence are not activated only by a request or move-in date.";
  }
  if (/quick visual walk-through.*no testing/.test(text)) {
    return "A visual walk-through cannot establish continuity, insulation, polarity, fault-loop or RCD performance, so it cannot support a complete satisfactory EICR.";
  }
  if (/professional indemnity insurance/.test(text)) {
    return "Insurance may fund a covered civil claim after an error, but it neither performs the inspection nor replaces the inspector's duty of care or the EICR itself.";
  }
  if (
    /operational limitation|large parts.*excluded|boiler-room circuits|sealed appliance|route unknown|no detection|unidentified cable|cannot definitively assess/.test(
      text,
    )
  ) {
    return "A genuine access restriction is recorded precisely as not verified or as a limitation; it is not a defect code, and FI is used only when a specific observed concern may be dangerous.";
  }
  if (
    /exposed live|live terminal accessible|active arcing|active burning|active arc/.test(
      text,
    ) &&
    !/no exposed live|without exposed live|no active (?:heat|arcing)|not exposed/.test(
      text,
    )
  ) {
    return "Touch-accessible live parts or active arcing create danger at the inspection itself, requiring C1, immediate warning and make-safe action.";
  }
  if (/fire damage|burnt-out|charred|melted/.test(text)) {
    return "Cooled, enclosed fire damage has already weakened insulation and connections and is C2; active heat, arcing, smoke or accessible live parts would instead make the danger immediate and C1.";
  }
  if (/cosmetic chip|surface scratch/.test(text)) {
    return "A cosmetic mark needs no code when security, enclosure integrity and basic protection remain sound; EICR classifications address electrical safety, not appearance.";
  }
  if (/supplementary equipotential bonding|bath.*plastic plumbing/.test(text)) {
    return "Bathroom supplementary bonding may be omitted only when every Regulation 701.415.2 condition is met; otherwise missing bonding can leave a dangerous touch-voltage difference during a fault.";
  }
  if (
    /structural steel|main bonding|bonding clamp|extraneous-conductive-part|gas service|water service|bond is/.test(
      text,
    )
  ) {
    return "Main bonding limits touch voltage between earthed equipment and metal that introduces Earth potential; a missing or unreliable connection is potential danger under a fault and normally C2.";
  }
  if (
    /earth conductor|earthing strap|main earthing|cpc|earth pin|earth lug|no earth|no cpc|class i luminaire/.test(
      text,
    )
  ) {
    return "The protective conductor carries fault current back to the source so the protective device can disconnect; an absent, undersized or unreliable path leaves Class I metalwork potentially dangerous and normally warrants C2.";
  }
  if (/earth electrode|\bra\b|tt system|tt-supplied/.test(text)) {
    return "TT fault protection depends on the electrode, RCD and RA × IΔn touch-voltage condition together; electrode values near 200 Ω also need scrutiny because long-term stability can be poor.";
  }
  if (
    /rcd|rcbo/.test(text) &&
    /trip|fails|failure|inoperative|bypassed|test button|takes more|results/.test(
      text,
    )
  ) {
    return "A general non-delay RCD is verified at IΔn with an AC residual current and must operate within 300 ms; a failed or bypassed required RCD removes a protective layer and normally warrants C2.";
  }
  if (/no rcd|no .*rcd|without rcd|lacks rcd/.test(text)) {
    return "Missing RCD protection is classified from the actual use: outdoor mobile equipment and bathroom sockets create potential danger, while many older indoor sockets or lighting circuits are C3 improvement cases.";
  }
  if (/insulation resistance|\bir test|\bir\b.*mω|0\.4 mω|1\.0 mω/.test(text)) {
    return "After loads and sensitive equipment are disconnected and the method is verified, insulation below 1 MΩ is C2; a value at or above 1 MΩ meets the stated minimum and is recorded with any useful trend evidence.";
  }
  if (/\bzs\b|r1\+r2|earth fault loop|disconnection time/.test(text)) {
    return "Zs is assessed against the actual protective device and required disconnection time; exceeding its applicable maximum can prevent automatic disconnection, while a value below the limit supports satisfactory ADS.";
  }
  if (
    /type d where type b|protective device coordination|iz|overload|undersized conductor|spur added|ring final.*1\.0|cable rating|warm/.test(
      text,
    )
  ) {
    return "The protective-device rating must not exceed the cable's effective current-carrying capacity, and its fault characteristic must still meet the required disconnection time; failed coordination can overheat the cable or delay ADS.";
  }
  if (
    /polarity reversed|crossed circuit ids|misleading label|no labels|incorrect identification/.test(
      text,
    )
  ) {
    return "Correct polarity keeps single-pole devices in line, while accurate labels support safe isolation; actual reversed polarity is C2 or C1 at the origin, but a labelling omission alone is normally C3.";
  }
  if (/sheath stripped|damaged sheath|sheath.*entry/.test(text)) {
    return "Where intact basic insulation is enclosed, not touch-accessible and cannot contact metal, a short sheath is C3; exposure or foreseeable contact raises the classification according to the real danger.";
  }
  if (/sheath stops short/.test(text)) {
    return "Where the individual insulated cores stay enclosed, cannot be touched and cannot contact the metal box, the short sheath is an improvement issue rather than present or potential danger, so C3 is proportionate.";
  }
  if (/armoured cable gland|swa/.test(text)) {
    return "A damaged SWA gland can lose mechanical protection and armour/CPC continuity, creating C2 while core insulation remains intact; accessible live cores would be C1.";
  }
  if (/tape-wrapped|twisted joint|no suitable terminal/.test(text)) {
    return "Twisting and tape do not provide a durable terminal, strain relief or enclosure, so the joint can loosen and overheat; that foreseeable shock or fire risk is C2 while no live part is presently accessible.";
  }
  if (/metal cable tray/.test(text)) {
    return "Metal tray supporting intact sheathed cables is not automatically liable to become live and does not introduce Earth potential, so it is not automatically an exposed- or extraneous-conductive-part needing earthing.";
  }
  if (
    /pv system|pv array|dc isolator|alternative source|bidirectional/.test(text)
  ) {
    return "Alternative supplies need clear source and isolation information, while protective devices must suit the direction and waveform of current; missing labels are normally C3 and confirmed unsafe device selection is assessed separately.";
  }
  if (/consumer unit.*damp|condensation|corrosion/.test(text)) {
    return "Moisture and corrosion can degrade insulation, busbars and connections into a fault, so contained deterioration is C2; active arcing or accessible live parts would make it C1.";
  }
  if (/non-functional shutters/.test(text)) {
    return "Failed shutters can create foreseeable access to socket contacts and warrant C2 while the contacts remain inaccessible; contacts already reachable by an ordinary-person test probe would be C1.";
  }
  if (/spare way|empty mcb way|unused mcb/.test(text)) {
    return "A sound tool-secured consumer-unit cover provides basic protection from the enclosed terminal; a skilled person seeing it after deliberate cover removal does not make the normal installation C1.";
  }
  if (/spare mcb/.test(text)) {
    return "The live terminal remains behind a sound cover removable only by a key or tool, which provides normal basic protection; a skilled inspector deliberately exposing it does not create an in-service defect.";
  }
  if (/mixed[- ](?:brand|manufacturer)/.test(text)) {
    return "The unverified mixed-brand assembly has every Best Practice Guide 4 safeguard stated: no thermal damage, no enclosure modification, secure devices, adequate connections, correct manual operation and matching toggle directions. With no danger mechanism identified, it is C3 rather than C2.";
  }
  if (/rewireable fuse|bs 3036/.test(text)) {
    return "A rewireable fuse is not a defect when the correct fuse wire gives adequate overload and fault protection; failure to meet the required Zs or use of oversized wire is classified from that actual defect.";
  }
  if (/old.*colour|red\/black/.test(text)) {
    return "Conductor colours from an earlier edition remain acceptable in unchanged work; identification becomes an issue where mixed systems could mislead work or isolation.";
  }
  if (/isolator|single-pole switch|single-pole device/.test(text)) {
    return "Isolation must disconnect the conductors required for the system and equipment so maintenance cannot leave a hazardous conductor connected; manufacturer instructions and the earthing system determine whether double-pole isolation is needed.";
  }
  if (/mcb.*inductive transformer|nuisance-tripping/.test(text)) {
    return "Nuisance tripping is a functional problem, not automatically a safety defect; any change to a Type C device still has to preserve cable protection and the required Zs/disconnection time.";
  }
  if (/recommended date for next inspection|14c/.test(text)) {
    return "The competent inspector recommends the next date from premises type, use, environment, condition and previous evidence; the duty holder then acts by that date and cannot extend a legal maximum.";
  }
  if (/pme.*warning notice/.test(text)) {
    return "The missing PME warning notice removes useful identification for future work but does not itself defeat shock protection, so it is normally a C3 labelling improvement rather than C1 or C2.";
  }
  if (/cracked socket front face/.test(text)) {
    return "A crack approaching a live terminal can progress or admit a probe to live parts, so the damaged barrier is potentially dangerous and needs urgent replacement as C2; no live part is yet accessible to establish C1.";
  }
  if (/junction box screw missing|lid loose but in place/.test(text)) {
    return "A loose lid can move and expose live parts during normal handling, so the enclosure no longer gives reliable basic protection and is C2 even though no live part is exposed at this instant.";
  }
  if (/basic insulation is damaged inside.*ceiling rose/.test(text)) {
    return "The fitted cover prevents touch now, but damaged basic insulation can contact internal metalwork or become accessible during ordinary maintenance, making the condition potentially dangerous and C2.";
  }
  if (/outdoor luminaire.*water ingress/.test(text)) {
    return "Visible water inside an outdoor fitting can bridge or degrade intact basic insulation and create shock or fire danger, so C2 is appropriate before live parts are actually exposed or energised by the fault.";
  }
  if (/exposed conductor.*luminaire/.test(text)) {
    return "A live conductor protruding beyond its protective sleeve is touch-accessible danger now, so C1 and immediate make-safe action are required rather than delayed repair or investigation.";
  }
  if (/damaged cable.*sharp metal edge|sheath chafed/.test(text)) {
    return "The sharp edge is continuing to abrade the cable; intact basic insulation prevents C1 now, but foreseeable exposure or a fault makes urgent repair and mechanical protection a C2 matter.";
  }
  if (/metal-clad.*brick wall.*terminations.*clean/.test(text)) {
    return "A sound metal consumer unit on a non-combustible wall with secure terminations provides valid enclosure and fire containment; metal construction is not a defect by itself.";
  }
  if (/two rcbo.*no main rcd/.test(text)) {
    return "Each RCBO already combines overcurrent protection with residual-current protection for its circuit; a second main RCD is not required merely to duplicate working RCBO protection.";
  }
  if (/spd.*status indicator.*replace/.test(text)) {
    return "A replace indication means the SPD no longer provides its intended surge protection; with the installation otherwise safe, this is normally a C3 improvement rather than shock danger.";
  }
  if (/persons consulted/.test(text)) {
    return "Recording the names and roles of people who supplied operational information makes agreed scope, access restrictions and safe-working decisions traceable without collecting irrelevant personal data.";
  }
  if (/protective device.*breaking capacity|fault level/.test(text)) {
    return "A protective device's breaking capacity must equal or exceed the prospective fault current at its position so it can interrupt the worst credible fault without rupturing.";
  }
  if (/old mortice-tail|legacy bonding connection/.test(text)) {
    return "A purpose-suitable legacy connection with sound mechanics and verified low resistance performs the bonding function; age or absence of a modern clamp marking is not a defect by itself.";
  }
  if (/cable concealed|beneath floorboards|stud wall/.test(text)) {
    return "Concealed wiring must be protected from foreseeable fixings and other damage, but the special less-than-50 mm RCD rules apply to walls and partitions rather than creating a blanket armour-and-RCD rule under every floor.";
  }
  if (
    /schedule of test results|missing previous eic|documentation|circuit chart/.test(
      text,
    )
  ) {
    return "Historic paperwork supports comparison but does not itself prove present danger; the current EICR must record its own scope, visual checks and measured evidence without inventing a code for a filing gap.";
  }

  return undefined;
}

type ResultClass = "C1" | "C2" | "C3" | "FI" | "SAT" | "UNSAT" | "OTHER";

function resultClass(value: string): ResultClass {
  const text = clean(value);
  if (/^C1\b/i.test(text)) return "C1";
  if (/^C2\b/i.test(text)) return "C2";
  if (/^C3\b/i.test(text)) return "C3";
  if (/^FI\b/i.test(text)) return "FI";
  if (/^(?:Satisfactory|No code)\b/i.test(text)) return "SAT";
  if (/^Unsatisfactory\b/i.test(text)) return "UNSAT";
  return "OTHER";
}

function classificationReason(
  wrongOption: string,
  correctOption: string,
  mechanism: string,
): string | undefined {
  const wrong = resultClass(wrongOption);
  if (!["C1", "C2", "C3", "FI", "SAT", "UNSAT"].includes(wrong)) {
    return undefined;
  }
  const correct = resultClass(correctOption);

  if (/solely because fire damage occurred/i.test(wrongOption)) {
    return `${mechanism} Past fire evidence does not by itself prove danger is present now; with the damage cooled and enclosed, its impaired insulation and connections make it C2.`;
  }
  if (/damage is no longer hot/i.test(wrongOption)) {
    return `${mechanism} Cooling removes the immediate heat condition, but it does not restore charred insulation or a melted accessory, so C3 is too weak.`;
  }
  if (/c1 if (?:active heat|continuing fire risk).*exposed live parts/i.test(wrongOption)) {
    return `${mechanism} Active heat, a continuing fire event or exposed live parts could justify C1 in a different observed condition, but those facts are expressly absent here; the cooled contained damage is C2.`;
  }
  if (/c1 because any (?:evidence of past heat damage|previous fire damage) is automatically/i.test(wrongOption)) {
    return `${mechanism} Previous heat or fire damage proves urgent repair is needed, but C1 is not automatic: it requires danger present at this inspection, which the contained and cooled condition does not establish.`;
  }
  if (/c1 if the cores are damaged exposing live parts/i.test(wrongOption)) {
    return `${mechanism} Damaged cores exposing live conductors would be a different C1 condition; here the core insulation is expressly intact, so the proven gland and CPC failures remain C2.`;
  }
  if (/c1 because exposed steel armour is itself an accessible live conductor/i.test(wrongOption)) {
    return `${mechanism} Steel armour is normally bonded protective metal, not a live conductor. Its intermittent earth connection creates danger under a future fault, but no present voltage or accessible live core is stated for C1.`;
  }
  if (/c1 if visibly hot, arcing, or with exposed live parts/i.test(wrongOption)) {
    return `${mechanism} Heat, arcing or touch-accessible live parts would establish a different C1 condition, but the joint is expressly cool and inaccessible here; its unreliable construction is C2.`;
  }
  if (/c1 because any taped joint is automatically danger present/i.test(wrongOption)) {
    return `${mechanism} Tape and twisting create a foreseeable loose-joint and insulation failure, which is why urgent C2 repair is needed; they do not prove a person faces live contact or active fire danger now.`;
  }
  if (/c1 — if live terminals are reachable when probed/i.test(wrongOption)) {
    return `${mechanism} A proved path to live contacts with the applicable accessibility probe would be C1, but the question expressly says the contacts are not currently exposed; failed shutters alone are C2.`;
  }
  if (/c1 because defective shutters always mean the live contacts are already touch-accessible/i.test(wrongOption)) {
    return `${mechanism} A failed shutter creates a credible future access route but does not prove the contacts already pass the accessibility test; without that present access, the defect is C2 rather than automatic C1.`;
  }
  if (/c1 if visibly hot or arcing/i.test(wrongOption)) {
    return `${mechanism} Visible heat or arcing would show danger present and justify C1, but this enclosed joint is expressly cool; its lack of a proper terminal is potential danger and C2.`;
  }
  if (/c1 because a twisted connection is automatically danger present even when cool and enclosed/i.test(wrongOption)) {
    return `${mechanism} The cool enclosure prevents immediate touch and no active overheating is reported. Twisting still gives an unreliable connection that can overheat later, so C2 is the proportionate code.`;
  }
  if (/c1 if the joint is exposed and accessible to a finger/i.test(wrongOption)) {
    return `${mechanism} Finger-accessible live conductors would be a separate C1 finding, but the fitted ceiling-rose cover prevents that access here; the unreliable joint remains C2.`;
  }
  if (/c1 because a twisted conductor-to-flex joint is automatically danger present/i.test(wrongOption)) {
    return `${mechanism} The twisted solid-to-flex joint can loosen or overheat and therefore needs urgent C2 repair, but its construction alone does not prove active arcing or accessible live metal for C1.`;
  }

  if (wrong === "C1") {
    if (correct === "C2") {
      return `${mechanism} C1 requires danger present now; this protective failure becomes dangerous when a fault or foreseeable event occurs, which is the C2 distinction.`;
    }
    if (correct === "C3") {
      return `${mechanism} C1 requires immediate risk of injury, whereas this is only an improvement to an installation that remains safe for continued service.`;
    }
    if (correct === "SAT") {
      return `${mechanism} Nothing stated exposes a person to danger now, so C1 would invent an immediate hazard that the inspection did not find.`;
    }
    if (correct === "FI") {
      return `${mechanism} The possible danger has not yet been established, so C1 cannot be assigned before the specified investigation determines the actual condition.`;
    }
    return `${mechanism} C1 is justified only by danger present now, not by age, missing paperwork, a future fault or a desire for improvement.`;
  }
  if (wrong === "C2") {
    if (correct === "C1") {
      return `${mechanism} C2 would understate an immediate risk that must be controlled now; it is not enough to schedule urgent work while people remain exposed.`;
    }
    if (correct === "C3") {
      if (/TT fault protection depends on the electrode/.test(mechanism)) {
        return `${mechanism} Here 220 Ω × 0.03 A is only 6.6 V and the RCD passes, so no failed fault-protection measure is established. The over-200 Ω stability warning supports C3 investigation and improvement, not C2 on these facts.`;
      }
      return `${mechanism} C2 would make the report unsatisfactory, but no mechanism capable of producing danger under a foreseeable fault or event has been identified here.`;
    }
    if (correct === "SAT") {
      if (/insulation below 1 MΩ is C2/.test(mechanism)) {
        return `${mechanism} The verified reading is exactly 1.0 MΩ, so it meets rather than fails the stated minimum. Its lack of margin is useful trend information but does not create a C2 defect.`;
      }
      return `${mechanism} The arrangement still provides the required protection, so C2 would label a compliant or harmless condition as potentially dangerous.`;
    }
    if (correct === "FI") {
      return `${mechanism} C2 asserts that potential danger is already known, but the point of FI here is that the specific concern still needs investigation before its danger can be classified.`;
    }
    return `${mechanism} C2 cannot be assigned from a possibility or paperwork gap alone; the inspector needs evidence of a condition that can foreseeably become dangerous.`;
  }
  if (wrong === "C3") {
    if (correct === "C1") {
      return `${mechanism} C3 would reduce danger present now to an optional improvement and could leave a person exposed instead of triggering immediate make-safe action.`;
    }
    if (correct === "C2") {
      return `${mechanism} C3 would understate a fault-condition risk that needs urgent remedy and makes the EICR unsatisfactory.`;
    }
    if (correct === "SAT") {
      return `${mechanism} C3 still claims that a safety improvement is recommended, but the stated condition has not impaired safety and needs no classification code.`;
    }
    if (correct === "FI") {
      return `${mechanism} C3 assumes the situation is understood and safe enough for planned improvement, while the unresolved possible danger needs investigation without delay.`;
    }
    return `${mechanism} C3 is not a catch-all for age, appearance or missing records; it needs a real improvement to electrical safety.`;
  }
  if (wrong === "FI") {
    if (correct === "C1" || correct === "C2" || correct === "C3") {
      return `${mechanism} FI is unnecessary because the condition and its risk are already established; further investigation would delay the code and action that can be assigned now.`;
    }
    if (correct === "SAT") {
      return `${mechanism} There is no specific apparent danger left unresolved, so FI would create an investigation entry without a defined question or safety concern to resolve.`;
    }
    return `${mechanism} FI needs a defined possible danger and a clear investigation question; uncertainty or inaccessible evidence alone is not enough.`;
  }
  if (wrong === "SAT") {
    if (correct === "C1") {
      return `${mechanism} Calling this satisfactory would leave an immediate danger unreported and uncontrolled.`;
    }
    if (correct === "C2") {
      return `${mechanism} A known protective failure capable of becoming dangerous cannot be recorded as satisfactory; it requires urgent remedy.`;
    }
    if (correct === "C3") {
      return `${mechanism} Recording no code would omit a genuine safety improvement that belongs on the report as C3, even though the overall result can remain satisfactory.`;
    }
    if (correct === "FI") {
      return `${mechanism} Recording no observation would hide the defined unresolved concern; FI should be recorded and investigated even though A4 keeps it advisory for the overall outcome.`;
    }
  }
  if (wrong === "UNSAT") {
    if (correct === "SAT" || correct === "C3") {
      return `${mechanism} Under A4, Unsatisfactory requires at least one C1 or C2; the stated position contains neither, while C3 and FI are advisory for the overall outcome.`;
    }
  }
  return undefined;
}

function numberReason(
  prompt: string,
  wrongOption: string,
  correctOption: string,
): string | undefined {
  const question = lower(prompt);
  const wrong = clean(wrongOption);
  const correct = clean(correctOption);
  if (!/^[£≥≤]?\s*\d/.test(wrong)) return undefined;

  if (/financial penalty/.test(question)) {
    return `${wrong} is not the current England maximum for this breach. The 2025 amendment raised the ceiling to £40,000 from 1 November 2025 for private rented tenancies and most other purposes; its transitional commencement for pre-1 December 2025 social tenancies was 1 May 2026. The authority sets the actual penalty under its enforcement policy.`;
  }
  if (/missing main bonding to gas/.test(question)) {
    return `${wrong} would leave a known C2 bonding defect open far beyond the rented-sector limit; the required work is normally due within 28 days of inspection or sooner if specified.`;
  }
  if (/unsatisfactory result on a school/.test(question)) {
    return `${wrong} is neither a universal workplace deadline nor a safe default. The school must control C1 immediately and prioritise C2 or FI action promptly under its documented EAWR risk assessment.`;
  }
  if (/local authorities.*copy/.test(question)) {
    return `${wrong} is the wrong report-supply period. A landlord must provide the requested EICR to the local authority within seven days of its written request.`;
  }
  if (
    /maximum time to remedy|remedial work.*tenant|privately rented/.test(
      question,
    )
  ) {
    return `${wrong} misses the rented-sector timetable: required remedial or investigative work is normally completed within 28 days of inspection, sooner if the report specifies, while C1 danger is controlled immediately.`;
  }
  return `${wrong} does not match the stated electrical calculation or legal period; the supported result is ${correct}.`;
}

function actionReason(
  prompt: string,
  wrongOption: string,
  correctOption: string,
  mechanism: string,
): string | undefined {
  const question = lower(prompt);
  const choice = lower(wrongOption);

  if (/landlord may ignore deterioration/.test(choice)) {
    return `${mechanism} New damage, wear or faults can arise the day after inspection, so the landlord must respond when they become known rather than wait for the next report.`;
  }
  if (/wait until five years after the report/.test(choice)) {
    return `${mechanism} Five years is an outer limit, not a minimum. Waiting four more years would miss the current report's two-year due date by three years.`;
  }
  if (/pending until every c3 improvement is completed/.test(choice)) {
    return `${mechanism} C3 work does not suspend the report: the A4 outcome is issued now from the absence of C1 and C2, while the six improvements remain available for planned maintenance.`;
  }
  if (/complete every c3 within (?:the )?28 days/.test(choice)) {
    return `${mechanism} C3 identifies an advisory improvement, not required remedial or investigative work, so a C3-only report does not trigger the statutory 28-day completion duty.`;
  }
  if (/renew the tenancy before arranging/.test(choice)) {
    return `${mechanism} Tenancy paperwork cannot postpone maintenance or cure a defect; electrical safety must be managed throughout occupation.`;
  }
  if (/blanket requirement to pat every appliance annually/.test(choice)) {
    return `${mechanism} Portable-equipment checks are set by use and risk, not a universal annual test, and they do not replace ongoing care of the fixed installation.`;
  }
  if (/required to disclose only on request/.test(choice)) {
    return `${mechanism} A reader cannot request disclosure of a relationship they do not know exists; the inspector must declare it proactively so independence can be assessed.`;
  }

  if (/r1\+r2 can be ignored/.test(choice)) {
    return `${mechanism} The large mismatch between dead-test R1+R2 and live Zs is exactly why neither reading should be discarded; check parallel paths, identification and the test method before relying on ADS.`;
  }
  if (/no action because eicrs are advisory/.test(choice)) {
    return `${mechanism} Calling the report advisory does not erase the employer's knowledge of immediate danger or its statutory duty to prevent the injury.`;
  }
  if (/^ignore it$/.test(choice) && /fraudulent/.test(question)) {
    return `${mechanism} Silence lets suspect dates and signatures continue to be relied on and loses the opportunity to preserve evidence for the proper reporting route.`;
  }
  if (/send an anonymous tip only.*omitting the repeated c2s/.test(choice)) {
    return `${mechanism} An anonymous tip cannot replace the inspector's own evidence. Omitting today's repeated C2s would conceal potential dangers, and omitting the history would hide proof that the known defects were left unresolved.`;
  }
  if (/ignore the conflict/.test(choice)) {
    return `${mechanism} An undisclosed self-interest leaves readers unable to assess independence and can undermine otherwise sound measurements.`;
  }
  if (/^take no action$/.test(choice)) {
    return `${mechanism} The overdue C2 is a live breach of the remedial duty, so the authority can require the work and pursue a financial penalty.`;
  }
  if (/skip the tenant/.test(choice)) {
    return `${mechanism} The occupier would remain unaware of the isolation and immediate hazard, increasing the chance that the dangerous part is approached or re-energised.`;
  }
  if (/ignore the c2 because/.test(choice)) {
    return `${mechanism} Technical difficulty changes the control plan, not the risk; without interim measures the potential danger remains unmanaged throughout the shutdown wait.`;
  }
  if (/ignore the c3s/.test(choice)) {
    return `${mechanism} C3s are not urgent defects, but discarding them wastes identified safety improvements and weakens the workplace's planned-maintenance evidence.`;
  }
  if (/forget the issue/.test(choice) && /hospital/.test(question)) {
    return `${mechanism} Forgetting the finding leaves hospital staff or patients exposed to the same immediate danger with no isolation, warning or escalation.`;
  }
  if (/^ignore the report$/.test(choice) && /one c2/.test(question)) {
    return `${mechanism} The C2 remains a known potential danger and requires an owned remedial action; the four C3s do not make it safe to discard the report.`;
  }
  if (/^skipped$/.test(choice)) {
    return `${mechanism} Omitting today's known C2 creates a falsely incomplete report and leaves the duty holder without the warning needed to act before next week.`;
  }
  if (/forget the issue/.test(choice) && /unoccupied retail/.test(question)) {
    return `${mechanism} Fit-out workers can enter before the tenant, so abandoning the C1 leaves a real immediate hazard in an apparently empty unit.`;
  }
  if (/ignore the history/.test(choice)) {
    return `${mechanism} The hidden reports show repeated knowing inaction and are material to escalation, even though the current C2s must also stand on today's evidence.`;
  }
  if (/ignore the c1/.test(choice)) {
    return `${mechanism} Until the replacement part arrives, the dangerous part must remain isolated or otherwise safeguarded; availability does not permit re-use.`;
  }
  if (/ignore the deadline/.test(choice)) {
    return `${mechanism} Doing nothing increases the breach and leaves tenants without a planned remedy; the landlord should document active attempts and seek authority guidance.`;
  }
  if (/^nothing$/.test(choice) && /documented response/.test(question)) {
    return `${mechanism} A blank response leaves no owner, priority, date, interim control or proof of repair for an auditor to follow.`;
  }
  if (/^nothing$/.test(choice) && /persons consulted/.test(question)) {
    return `${mechanism} Leaving the field blank loses who agreed access limits and operational constraints, making later disputes about scope much harder to resolve.`;
  }
  if (/ignoring the report/.test(choice)) {
    return `${mechanism} Every unresolved item remains in service with no owner or target date, while a prioritised plan would turn the findings into controlled work.`;
  }
  if (/anyone who picks up the work/.test(choice)) {
    return `${mechanism} Availability is not competence: the signer must be a qualified person able to inspect, test and take responsibility for the stated remedy.`;
  }
  if (/trust the verbal commitment/.test(choice)) {
    return `${mechanism} A promise records no responsible person, firm date, interim control or test evidence and cannot close the C2.`;
  }
  if (/issue a verbal warning/.test(choice)) {
    return `${mechanism} A warning may inform the tenant, but it neither investigates nor remedies the unsatisfactory findings and supplies no qualified-person confirmation.`;
  }
  if (/replaced with a verbal explanation/.test(choice)) {
    return `${mechanism} Spoken explanation can accompany the report, but replacing the written observation removes the durable evidence future workers and duty holders need.`;
  }
  if (/accept photos as equivalent/.test(choice)) {
    return `${mechanism} Photographs may show new accessories but cannot prove hidden terminations, continuity, insulation, polarity or protective-device operation.`;
  }
  if (/charge double/.test(choice)) {
    return `${mechanism} Price does not determine the verification needed; the inspector should agree the scoped remedial checks and charge transparently for that work.`;
  }
  if (/charge less/.test(choice)) {
    return `${mechanism} A lower fee cannot turn missing continuity, insulation, polarity, loop and RCD evidence into a defensible satisfactory report.`;
  }
  if (/^comply$/.test(choice) && /business can continue/.test(question)) {
    return `${mechanism} Agreeing to defer control keeps staff exposed to a C1 merely to avoid disruption, contrary to the immediate make-safe duty.`;
  }
  if (/^comply$/.test(choice) && /hospital/.test(question)) {
    return `${mechanism} Accepting the denial would leave an immediate hospital danger energised; clinical pressure changes coordination, not the need for safe control.`;
  }
  if (/^comply$/.test(choice) && /quick re-issue/.test(question)) {
    return `${mechanism} A requested clean report cannot substitute for inspecting and testing the claimed remedy or preserve the honest original audit trail.`;
  }
  if (/^comply$/.test(choice) && /visual walk-through/.test(question)) {
    return `${mechanism} Agreeing would declare untested protective measures satisfactory and expose the inspector and users to risks the visual visit could not reveal.`;
  }
  if (/withdraw the report/.test(choice) && /critical circuit/.test(question)) {
    return `${mechanism} Withdrawing the record hides the C2 from the person who must manage it and does nothing to reduce the circuit's potential danger.`;
  }
  if (/sign a clean report without inspection/.test(choice)) {
    return `${mechanism} A clean signature without checking the work falsely declares the defects resolved and may return an unsafe circuit to service.`;
  }
  if (/re-issue the suspect document/.test(choice)) {
    return `${mechanism} Reissuing suspect dates or signatures gives the questionable record fresh credibility instead of preserving it as evidence and inspecting independently.`;
  }
  if (/issue a new eicr/.test(choice) && /one fi/.test(question)) {
    return `${mechanism} Another full report can repeat the FI without answering it; the needed work is the focused investigation of the specific concern.`;
  }
  if (/re-issue an eicr satisfactory/.test(choice)) {
    return `${mechanism} The theatre C2 remains unresolved during the planned delay, so declaring the report satisfactory would conceal a known potential danger.`;
  }
  if (
    /cancel the eicr/.test(choice) &&
    /verbal|couple of weeks/.test(question)
  ) {
    return `${mechanism} Cancelling removes the very audit trail needed to hold the promised remedy to account while leaving the C2 physically unchanged.`;
  }
  if (/issue a new eicr/.test(choice) && /five c3s/.test(question)) {
    return `${mechanism} Reinspection does not implement any improvement; the current satisfactory report is usable and the C3 work belongs in maintenance planning.`;
  }
  if (/new eicr weekly/.test(choice)) {
    return `${mechanism} Weekly paperwork cannot see behind the same access barriers; the duty holder must arrange access and assess the omitted circuits instead.`;
  }
  if (/withdraw the report/.test(choice) && /challenges/.test(question)) {
    return `${mechanism} Withdrawal would erase a defensible C2 without any contrary evidence; explain and review it, then amend only if a technical error is proved.`;
  }
  if (/withdraw the report/.test(choice) && /bond/.test(question)) {
    return `${mechanism} Removing the report does not restore the fault-voltage control; explain the bonding function and keep the C2 until the connection is repaired.`;
  }
  if (/re-issue the previous report/.test(choice)) {
    return `${mechanism} Once its recommended date arrives, the old snapshot is stale; a new inspection is needed rather than giving the old document a new date.`;
  }
  if (/backdate a satisfactory eicr/.test(choice)) {
    return `${mechanism} Backdating falsifies when the safe condition was verified and destroys the distinction between the original defects and later repair.`;
  }
  if (/refuse to inspect/.test(choice)) {
    return `${mechanism} Refusal produces no current evidence or control plan; inspect within the agreed scope and record the C2 honestly even if repair timing is difficult.`;
  }
  if (/^refuse$/.test(choice) && /top-up retest/.test(question)) {
    return `${mechanism} A focused remedial verification is legitimate when properly scoped; inspect and test what is being confirmed instead of rejecting it automatically.`;
  }
  if (/refuse to make safe/.test(choice) && /tenant/.test(question)) {
    return `${mechanism} Where competent and authorised, refusing leaves the tenant beside immediate danger; otherwise the inspector must at least secure access and escalate urgently.`;
  }
  if (/refuse to make safe/.test(choice) && /not contracted/.test(question)) {
    return `${mechanism} Contract scope may limit entry or isolation, but it does not justify silence; warn the affected unit and escalate control of the C1 through an authorised person.`;
  }
  if (/refuse to discuss/.test(choice) && /challenges/.test(question)) {
    return `${mechanism} Refusal prevents the duty holder understanding the risk and supplying contrary evidence; a professional technical explanation strengthens the record.`;
  }
  if (/refuse to issue the eicr/.test(choice)) {
    return `${mechanism} The current report is needed to document the persistent C2s; refusing it would leave today's condition and the repeated neglect less visible.`;
  }
  if (/refuse to comment/.test(choice)) {
    return `${mechanism} Silence after negligent advice neither assists the injured person nor removes the inspector's exposure; records and competent cooperation remain necessary.`;
  }
  if (/refuse to sign$/.test(choice) && /signs (?:off|written)/.test(question)) {
    return `${mechanism} Refusal is not mandatory when the signer has proper inspection-and-test evidence; the professional duty is to sign only what can be verified.`;
  }
  if (/refuse to sign on principle/.test(choice)) {
    return `${mechanism} A different electrician doing the repair is not a reason for blanket refusal; use their proper certification or verify the item before signing personally.`;
  }
  if (/refuse to act/.test(choice)) {
    return `${mechanism} No staff on site does not remove danger to cleaners or contractors; secure the affected part and use the school's emergency contact route.`;
  }
  if (/refuse to discuss/.test(choice) && /30 years/.test(question)) {
    return `${mechanism} The duty holder's question is an opportunity to explain touch voltage under fault; refusing leaves the C2 misunderstood and less likely to be remedied.`;
  }
  if (/refuse to issue/.test(choice) && /boiler-room/.test(question)) {
    return `${mechanism} A report can still be issued for the completed scope when the locked circuits are precisely recorded as a limitation; refusal would discard useful verified evidence.`;
  }
  if (
    /refuse to issue/.test(choice) &&
    /subsequent investigation/.test(question)
  ) {
    return `${mechanism} The successful investigation supplies the evidence needed to close FI; refusing documentation would leave a resolved concern falsely open.`;
  }

  if (/every 5 x test must be under 40 ms/.test(choice)) {
    return `${mechanism} The current core field check is the IΔn AC test with a 300 ms maximum; the legacy 5 × IΔn/40 ms figure does not turn the stated passing IΔn results into a failure.`;
  }
  if (/one 1 x test exceeded 40 ms/.test(choice)) {
    return `${mechanism} Forty milliseconds is not the limit at IΔn; the slower 286 ms result is still below the applicable 300 ms maximum.`;
  }
  if (/fails for the 30 ma rcd but passes for the 100 ma/.test(choice)) {
    return `${mechanism} The arithmetic is reversed: 166 Ω × 0.03 A is 4.98 V and 166 Ω × 0.10 A is 16.6 V, so both are below the stated 50 V limit.`;
  }
  if (/irrelevant because rcds do not operate on tt/.test(choice)) {
    return `${mechanism} RCDs are commonly essential on TT systems because the electrode loop may not pass enough current to operate an overcurrent device quickly.`;
  }
  if (/accept it if the circuit energises normally/.test(choice)) {
    return `${mechanism} Normal energisation proves only that the load runs; it says nothing about whether a line-to-earth fault would disconnect within the required time.`;
  }
  if (/use insulation resistance instead of zs/.test(choice)) {
    return `${mechanism} Insulation resistance checks leakage through insulation, whereas Zs checks the fault-current path that operates the MCB; one cannot replace the other.`;
  }
  if (/reset by the new eicr/.test(choice)) {
    return `${mechanism} Creating a report does not restart a remedial deadline; the 28 days run from the inspection that identified the C2.`;
  }
  if (/suspended until remediation/.test(choice)) {
    return `${mechanism} Remediation is what the deadline requires, not an event that pauses it; the clock continues while the work is arranged.`;
  }
  if (/^optional$/.test(choice)) {
    return `${mechanism} The rented-sector timetable is a legal duty for required C1/C2 remedial work and for further investigation the report says is necessary; the landlord cannot treat that work as optional.`;
  }
  if (/withdraw from the site without making safe/.test(choice)) {
    return `${mechanism} Walking out leaves the known immediate danger available to staff; business inconvenience does not remove the need to warn, isolate or otherwise control it.`;
  }
  if (/inspector who issued the eicr/.test(choice)) {
    return `${mechanism} The original inspector has no monopoly on confirmation; another qualified person may certify work they competently carried out or verified.`;
  }
  if (/electrician who maintains it/.test(choice)) {
    return `${mechanism} A contractor may perform maintenance, but the employer or person controlling the workplace retains the legal duty to ensure it is done safely.`;
  }
  if (/treat the issue as resolved/.test(choice)) {
    return `${mechanism} Isolation removes exposure temporarily but does not repair the defect; the circuit must stay controlled until permanent work is tested and documented.`;
  }
  if (/satisfactory because it was made safe/.test(choice)) {
    return `${mechanism} Making the C1 safe is the immediate action, but it does not erase the observation from that dated report, which remains unsatisfactory.`;
  }
  if (/remediate within 28 days.*(?:c3|prs)/.test(choice)) {
    return `${mechanism} A C3-only report does not require remedial or investigative work, so its recommendations do not enter the statutory 28-day timetable.`;
  }
  if (/confront the previous inspector/.test(choice)) {
    return `${mechanism} Direct confrontation can compromise evidence and is not an investigation; preserve the documents, verify the installation independently and report through the proper professional route.`;
  }
  if (/within 7 days of completion/.test(choice)) {
    return `${mechanism} Seven days applies to supplying a requested report to the local authority; the tenant receives remedial confirmation within 28 days of completion.`;
  }
  if (/within 12 months/.test(choice)) {
    return `${mechanism} Twelve months is far beyond the stated tenant-notification period; written remedial confirmation is due within 28 days of completion.`;
  }
  if (/carry on as normal/.test(choice)) {
    return `${mechanism} Ignoring the dual role leaves the report open to justified doubt; the relationship must be disclosed and independent review used where impartiality may be questioned.`;
  }
  if (/force the landlord to demolish/.test(choice)) {
    return `${mechanism} Electrical-safety enforcement provides remedial action and financial penalties, not automatic demolition of the dwelling for an overdue C2.`;
  }
  if (/falls on the inspector/.test(choice)) {
    return `${mechanism} The inspector supplies expert evidence, but the employer or person controlling the premises retains responsibility for maintenance and action.`;
  }
  if (/is voluntary/.test(choice)) {
    return `${mechanism} EAWR duties are legal requirements applied so far as reasonably practicable; choosing not to maintain known risks is not a voluntary option.`;
  }
  if (/treat the fi as advisory/.test(choice)) {
    return `${mechanism} “Advisory” describes FI's effect on the A4 overall outcome; it does not mean the defined possible danger can be ignored. This answer omits the prompt investigation that gives FI its purpose.`;
  }
  if (/give the tenant the report/.test(choice)) {
    return `${mechanism} The urgent task is to explain the immediate danger and make-safe action; handing over the whole client report does not replace documenting attempts to notify the landlord through the proper route.`;
  }
  if (/yes if the next inspection is soon/.test(choice)) {
    return `${mechanism} A scheduled inspection does not protect anyone during the intervening period; the known C2 needs urgent planned remedy now.`;
  }
  if (/make the alteration/.test(choice)) {
    return `${mechanism} Disagreement supplies no new measurement or fact, so changing the entry would falsify the inspector's evidence-led finding.`;
  }
  if (/re-inspect for free/.test(choice)) {
    return `${mechanism} A technical review may be sensible, but whether a fresh visit is chargeable is a separate commercial matter and does not answer whether the original code is sound.`;
  }
  if (/date the landlord receives the report/.test(choice)) {
    return `${mechanism} Delivery delay cannot extend the remedy period; the 28 days start on the inspection date stated in the regulations.`;
  }
  if (/next tenancy date/.test(choice)) {
    return `${mechanism} Remedial duty is independent of a tenancy change, so waiting for the next occupier could leave the current tenant exposed beyond the deadline.`;
  }
  if (/end of the financial year/.test(choice)) {
    return `${mechanism} Accounting periods have no bearing on an electrical-safety deadline, which runs from the inspection date.`;
  }
  if (/stop using the theatre indefinitely/.test(choice)) {
    return `${mechanism} Indefinite closure is not the only defensible control; documented interim measures can reduce risk while a planned shutdown delivers the permanent repair.`;
  }
  if (/treat the fi as a c3/.test(choice)) {
    return `${mechanism} C3 is used when the condition is understood and an improvement is recommended; changing FI to C3 would falsely imply the unresolved possible danger no longer needs investigation.`;
  }
  if (/treat it as a c3/.test(choice) && /\bfi\b/.test(question)) {
    return `${mechanism} The repeatable unexplained reading gives a defined investigation target. C3 would wrongly describe it as an understood improvement instead of resolving the possible danger.`;
  }
  if (/issue a new tenancy/.test(choice)) {
    return `${mechanism} Starting or renewing a tenancy neither repairs an electrical defect nor changes the report's interval, classification or remedial deadline.`;
  }
  if (/copied to all premises in the chain/.test(choice)) {
    return `${mechanism} Copying one site's report does not inspect the other electrical installations; each site needs evidence for its own condition and scope.`;
  }
  if (/used as evidence the others are compliant/.test(choice)) {
    return `${mechanism} Conditions, alterations and test results are installation-specific, so one premises cannot prove compliance at another.`;
  }
  if (/use 5 years anyway/.test(choice)) {
    return `${mechanism} Five years is the rented-sector ceiling, not an entitlement to ignore the inspector's evidence-based three-year due date.`;
  }
  if (/re-mark as c3/.test(choice)) {
    return `${mechanism} Removing a C2 physically does not convert the historical finding into C3; verify the repair separately and preserve the original report.`;
  }
  if (/^cancel the report$/.test(choice)) {
    return `${mechanism} Cancellation would erase the honest condition record; the remedy is closed with new verification evidence, not by destroying the EICR.`;
  }
  if (/is fully compliant/.test(choice)) {
    return `${mechanism} A new tenant must receive the report before occupation, so missing that date is already a separate breach even if the installation itself is satisfactory.`;
  }
  if (/has 28 days to fix it/.test(choice)) {
    return `${mechanism} The 28-day rule concerns remedial work and the existing-tenant copy period; it does not create grace after the before-move-in deadline.`;
  }
  if (/has no obligation if the tenant doesn't ask/.test(choice)) {
    return `${mechanism} Supplying the EICR to a new tenant is proactive; the tenant does not have to request it.`;
  }
  if (/action all (?:five|ten) within 28 days/.test(choice)) {
    return `${mechanism} The domestic PRS 28-day clock does not apply wholesale to a workplace, and C3 improvements do not carry the same urgency as C2 findings.`;
  }
  if (/combined with next week's findings/.test(choice)) {
    return `${mechanism} The C2 exists today and must be recorded and communicated today; a later visit may verify progress but cannot postpone the finding.`;
  }
  if (/fully covered by the eicr/.test(choice)) {
    return `${mechanism} The report speaks only for the areas actually assessed, so excluded circuits remain an evidence gap the duty holder must manage.`;
  }
  if (/free of regulatory duty for limited areas/.test(choice)) {
    return `${mechanism} A recorded limitation protects report accuracy, not the duty holder from maintaining the uninspected areas; follow-up access and interim controls remain their responsibility.`;
  }
  if (/^non-compliant$/.test(choice)) {
    return `${mechanism} A satisfactory C3-only report supplied within the stated period meets those EICR duties; its advisory improvements can be planned without a mandatory remedial-work deadline.`;
  }
  if (/number of observations/.test(choice)) {
    return `${mechanism} Ten C3 entries still do not outweigh their meaning, while a single C2 is enough; severity, not the raw count, sets the outcome.`;
  }
  if (/premises type/.test(choice)) {
    return `${mechanism} Premises type affects scope and future interval, but the outcome still follows the classifications actually recorded.`;
  }
  if (/whether the inspector signs/.test(choice)) {
    return `${mechanism} A signature authenticates the report; it cannot turn C1 or C2 into a satisfactory outcome, or erase advisory C3 and FI observations.`;
  }
  if (/^prs regs 2020 obligations$/.test(choice)) {
    return `${mechanism} The regulations still apply generally, but the question asks what a satisfactory result does not remove: the ongoing maintenance duty highlighted by the C3s.`;
  }
  if (/any obligation to act/.test(choice)) {
    return `${mechanism} C3s do not trigger the statutory 28-day remedy clock, so saying every possible action remains compulsory overstates their legal effect.`;
  }
  if (/need to renew the tenancy/.test(choice)) {
    return `${mechanism} Tenancy renewal is a housing decision, not the continuing electrical-maintenance obligation signalled by the report.`;
  }
  if (/hide behind the duty holder/.test(choice)) {
    return `${mechanism} The client's own duty does not cancel the inspector's separate responsibility for competent advice that others foreseeably rely on.`;
  }
  if (/best endeavours.*clause/.test(choice)) {
    return `${mechanism} A contract phrase cannot excuse work falling below the reasonable professional standard or shield criminal responsibility.`;
  }
  if (/correct for all observations/.test(choice)) {
    return `${mechanism} C1, C2, FI and C3 deliberately express different urgency, so a blanket year misstates every category except by coincidence.`;
  }
  if (/safe default/.test(choice)) {
    return `${mechanism} A default year could leave immediate or potential danger untreated for far too long; urgency must follow the actual code.`;
  }
  if (/recommended by bpg4/.test(choice)) {
    return `${mechanism} BPG4 explains risk-based classifications and does not replace them with a universal twelve-month remedy period.`;
  }
  if (/report covers everything/.test(choice)) {
    return `${mechanism} The report covers its dated extent and limitations only; wear, damage and alterations can arise the next day and still need maintenance.`;
  }
  if (/need to display the report/.test(choice)) {
    return `${mechanism} There is no general rule making public display the continuing duty; safe maintenance and future inspection are the relevant obligations.`;
  }
  if (/pat testing/.test(choice)) {
    return `${mechanism} Portable-equipment testing is a separate risk-based programme and does not express the fixed installation's continuing maintenance and reinspection duties.`;
  }
  if (/sign off the c1 anyway/.test(choice)) {
    return `${mechanism} A backordered part does not remove immediate danger; keep the affected part safely isolated and the C1 open until verified permanent repair.`;
  }
  if (/issue an extension to themselves/.test(choice)) {
    return `${mechanism} A landlord has no power to rewrite the statutory deadline; they must document efforts, protect tenants and engage the authority if completion is genuinely obstructed.`;
  }
  if (
    /^the duty holder$/.test(choice) &&
    /14c|next inspection/.test(question)
  ) {
    return `${mechanism} The duty holder arranges the work but does not set the technical recommendation; that date is the competent inspector's judgement.`;
  }
  if (/building control/.test(choice)) {
    return `${mechanism} Building Control does not populate the EICR's next-date field; the inspector derives it from the installation's risk and condition.`;
  }
  if (/action a non-existent defect/.test(choice)) {
    return `${mechanism} FI requires the concern to be investigated, not for imaginary remedial work to be invented after the investigation proves the installation sound.`;
  }
  if (/issue a fresh eicr/.test(choice)) {
    return `${mechanism} A focused qualified-person investigation can close the FI with written evidence; repeating the entire periodic inspection is unnecessary.`;
  }
  if (/pay a penalty/.test(choice)) {
    return `${mechanism} A properly investigated concern that proves sound is not itself a breach attracting an automatic penalty; the evidence simply closes the FI.`;
  }
  if (/^cancel the tenancy$/.test(choice)) {
    return `${mechanism} The landlord must manage the electrical findings and deadlines; ending the tenancy is neither the prescribed remedy nor a substitute for safe work.`;
  }
  if (/a simple email/.test(choice)) {
    return `${mechanism} An email saying the report was seen lacks priorities, owners, dates, completed-work evidence and post-repair verification.`;
  }
  if (/^an invoice$/.test(choice)) {
    return `${mechanism} Payment paperwork does not show how risk was controlled or that the remedial work passed inspection and testing.`;
  }
  if (/tenant phone numbers/.test(choice)) {
    return `${mechanism} Personal contact details do not explain who shaped scope or operational decisions and collect unnecessary data for this report field.`;
  }
  if (/new eicr each week/.test(choice)) {
    return `${mechanism} Repeated reports merely rediscover the same defects; resources should go into prioritised repair and verification.`;
  }
  if (/reissuing the previous report/.test(choice)) {
    return `${mechanism} Reissuing old findings neither controls current risk nor proves any work complete; a remedial plan and verification trail are needed.`;
  }
  if (/^removed$/.test(choice)) {
    return `${mechanism} Deleting an evidenced observation because it is unpopular would hide the audit trail without resolving the defect.`;
  }
  if (/replaces the inspector's duty of care/.test(choice)) {
    return `${mechanism} Insurance responds financially after some claims; it does not lower the competence and care required before signing.`;
  }
  if (/means no inspection is needed/.test(choice)) {
    return `${mechanism} A policy cannot generate measurements or reveal defects, so it offers no substitute for the inspection and tests.`;
  }
  if (/replaces the eicr/.test(choice)) {
    return `${mechanism} Insurance records risk transfer, whereas an EICR records electrical condition; the documents perform entirely different jobs.`;
  }
  if (/passed trip test proves.*every load/.test(choice)) {
    return `${mechanism} The test proves operation for the injected AC waveform only; it does not test whether connected electronics produce residual current the Type AC device can detect reliably.`;
  }
  if (/rcd has failed.*c1/.test(choice)) {
    return `${mechanism} The device operated on the specified test, so failure has not been shown; the issue is suitability for the load waveform and is normally C3 when Type A is required.`;
  }
  if (/design matter.*never be reported/.test(choice)) {
    return `${mechanism} An EICR assesses continued safety, including whether an existing protective device suits its connected load; design origin does not make that invisible.`;
  }
  if (/one broad c2 saves time/.test(choice)) {
    return `${mechanism} A vague bundle gives the duty holder no location, defect or remedy and can wrongly make harmless age look potentially dangerous.`;
  }
  if (/either c1 or c2/.test(choice)) {
    return `${mechanism} C1 needs accessible live parts, active arcing, energised metalwork or another danger present now; absent that, the described loss of protection is fixed at C2.`;
  }
  if (
    /satisfactory$/.test(choice) &&
    /unidentified cable|route unknown/.test(question)
  ) {
    return `${mechanism} The inaccessible route has not been proved safe; it must be recorded as not verified or investigated if a specific concern exists, not positively declared satisfactory.`;
  }
  if (
    (/^satisfactory$/.test(choice) && /single c2/.test(question)) ||
    /becomes satisfactory/.test(choice)
  ) {
    return `${mechanism} A promise or the number of C3s cannot cancel the C2 already recorded; that report remains unsatisfactory until later evidence documents the repair.`;
  }
  if (/unsatisfactory because of the limitation/.test(choice)) {
    return `${mechanism} A transparent access limitation defines what was not assessed but does not by itself create C1 or C2, so it does not make the A4 outcome unsatisfactory.`;
  }
  if (/^code c2$/.test(choice) && /boiler-room/.test(question)) {
    return `${mechanism} No defect was observed behind the locked door; lack of access is recorded as a limitation, not invented as potential danger.`;
  }
  if (/on change of tenancy/.test(choice)) {
    return `${mechanism} The known danger or statutory remedial finding exists now; a future occupier event is not a safe or lawful trigger for action.`;
  }
  if (/^satisfactory$/.test(choice) && /visibly warm/.test(question)) {
    return `${mechanism} Visible warmth is evidence to investigate load, connections and cable rating; declaring it safe without measurement could miss developing overload or resistance heating.`;
  }
  if (
    /^code c2$/.test(choice) &&
    /subsequent investigation (?:finds|proves).*safe zones/.test(question)
  ) {
    return `${mechanism} The investigation removed the suspected danger, so there is no defect left to classify C2; record the verified result and close the FI.`;
  }
  if (/close cover and leave/.test(choice)) {
    return `${mechanism} Replacing the cover hides but does not stop the active arc, which can continue heating and faulting inside the enclosure.`;
  }
  if (/^code c2$/.test(choice) && /active arc/.test(question)) {
    return `${mechanism} Active arcing is danger present now, so C2 understates it; isolate and make safe immediately as C1.`;
  }

  if (/pending/.test(choice)) {
    return `${mechanism} An EICR cannot be left “pending”: the inspector must report the condition supported by the completed scope and record any genuine unavailable evidence as a limitation or FI.`;
  }
  if (/conditional/.test(choice)) {
    return `${mechanism} “Conditional” is not a model EICR result; C1 or C2 makes the A4 report unsatisfactory, while C3 and FI remain advisory observations.`;
  }
  if (
    /ignore|ignoring|forget|skip|walk away|take no action|no action|nothing|whenever convenient|wait|postpone|leave it|eventually/.test(
      choice,
    )
  ) {
    if (/skip the make-safe/.test(choice)) {
      return `${mechanism} Avoiding disruption is not a reason to leave an immediately dangerous part energised; isolate that part or apply another competent temporary safeguard now.`;
    }
    if (/walk away/.test(choice)) {
      return `${mechanism} Leaving without warning, recording or controlling the danger abandons the people on site with the same live risk and no safe handover.`;
    }
    if (/wait|postpone|whenever|eventually|leave it/.test(choice)) {
      return `${mechanism} Deferring the issue leaves the identified risk or compliance deadline running; a future inspection or convenient date is not a substitute for the required action now.`;
    }
    return `UNSUPPORTED OPTION: ${wrongOption}`;
  }
  if (
    /re-energise|remove the isolation|hand over the keys|switch off the entire|entire installation|entire shop/.test(
      choice,
    )
  ) {
    if (/remove the isolation/.test(choice)) {
      return `${mechanism} Removing the lock-off discards the physical safeguard and lets anyone restore a circuit that is still known to be dangerous.`;
    }
    if (/re-energise/.test(choice)) {
      return `${mechanism} Restoring power before verified repair recreates the danger that the lock-off was installed to remove.`;
    }
    if (/entire/.test(choice)) {
      return `${mechanism} A targeted isolation controls the affected part without creating unnecessary hazards and disruption elsewhere; whole-site shutdown is justified only when selective isolation cannot make it safe.`;
    }
    return `${mechanism} Uncontrolled key release would let the dangerous circuit be re-energised; any handover must be to an authorised person under a recorded lock-off arrangement.`;
  }
  if (/replace the entire|demolition|forced sale/.test(choice)) {
    if (/forced sale/.test(choice)) {
      return `${mechanism} The electrical-safety enforcement route provides remedial notices, urgent work and financial penalties; it does not transfer ownership of the property as the automatic response to this breach.`;
    }
    if (/demolition/.test(choice)) {
      return `${mechanism} A defective electrical installation is remedied and verified; a demolition order is neither the normal power nor a proportionate response to the stated EICR breach.`;
    }
    return `${mechanism} That response is disproportionate and unrelated to the local defect or enforcement power; the installation needs the identified repair, verification and documented follow-up.`;
  }
  if (/dno/.test(choice)) {
    if (/generic dno telephone number copied.*no dno representative was consulted/.test(choice)) {
      return `${mechanism} “Persons consulted” records an actual person or role whose information affected the inspection. A public number copied from a bill identifies nobody who was consulted and provides no trail for any supply information relied on.`;
    }
    return `${mechanism} The DNO deals with distributor-owned supply equipment and network faults, not the consumer installation's EICR outcome, remedial plan or document retention.`;
  }
  if (/local authority/.test(choice)) {
    return `${mechanism} The local authority enforces the rented-sector duties but does not perform the inspector's technical classification, sign remedial electrical work or own a workplace installation.`;
  }
  if (/minor works|meiwc/.test(choice)) {
    return `${mechanism} A Minor Electrical Installation Works Certificate records a qualifying alteration or addition actually carried out; it cannot replace an EICR, resolve a finding by itself or certify work that was not done.`;
  }
  if (
    /issue a new eicr|new full eicr|re-issue|reissue|update the eicr|delete the original|backdate|alter the original|clean report|withdraw the report|cancel the eicr/.test(
      choice,
    )
  ) {
    if (/re-issue eicr unsatisfactory/.test(choice)) {
      return `${mechanism} No C1 or C2 exists and the investigation found no defect, so an Unsatisfactory replacement report would contradict both the A4 outcome rule and the verified result.`;
    }
    if (/alter the original/.test(choice)) {
      return `${mechanism} The signed EICR must remain the dated record of what was found; verify the remedial work separately instead of rewriting history.`;
    }
    if (/delete the original/.test(choice)) {
      return `${mechanism} The duty holder's assurance is not test evidence, and deleting the observation would erase the audit trail before the repair has been competently verified.`;
    }
    return `UNSUPPORTED OPTION: ${wrongOption}`;
  }
  if (/producing the eicr alone/.test(choice)) {
    return `${mechanism} The EICR proves what was found on the inspection date; it contains no evidence that the later remedial work was completed and tested.`;
  }
  if (/producing an invoice only/.test(choice)) {
    return `${mechanism} An invoice shows that something was charged for, not which defect was repaired or what inspection and test results verified the repair.`;
  }
  if (/producing a verbal account/.test(choice)) {
    return `${mechanism} A spoken account is neither traceable nor supported by readings, so a tenant or authority cannot verify that each unsafe item was closed.`;
  }
  if (
    /sign without|trust|accept.*photo|invoice only|verbal|duty holder's word|anyone who picks/.test(
      choice,
    )
  ) {
    if (/verbal request only/.test(choice)) {
      return `${mechanism} A local authority is not limited to asking informally: the regulations provide formal remedial and financial-penalty powers when a landlord fails to comply.`;
    }
    if (/sign without inspection/.test(choice)) {
      return `${mechanism} Signing without checking the affected work turns an unverified claim into a professional declaration and may leave the original danger in place.`;
    }
    if (/sign without re-inspection/.test(choice)) {
      return `${mechanism} The original inspector has no first-hand basis for confirming somebody else's repair unless they inspect and test the affected item themselves.`;
    }
    if (/trust the contractor's word/.test(choice)) {
      return `${mechanism} A verbal assurance supplies no recorded readings or inspection evidence from which the signer can verify that each original finding was actually resolved.`;
    }
    if (/trust a verbal assurance/.test(choice)) {
      return `${mechanism} Without the remedial electrician's certificate or recorded results, the original inspector has only hearsay and cannot verify that the C2 was removed.`;
    }
    return `UNSUPPORTED OPTION: ${wrongOption}`;
  }
  if (
    /original inspector/.test(choice) &&
    /written confirmation/.test(question)
  ) {
    return `${mechanism} The law requires a qualified person with evidence, not the same individual who wrote the original report; the remedial electrician can certify work they carried out and verified.`;
  }
  if (/polite warning only/.test(choice)) {
    return `${mechanism} A warning alone neither remedies the known breach nor records the formal enforcement and civil consequences that remain available.`;
  }
  if (/higher insurance premium only/.test(choice)) {
    return `${mechanism} Insurance cost may be a side effect, but it is not the legal consequence: prosecution, enforcement action and civil liability can still follow.`;
  }
  if (/another full eicr in every case/.test(choice)) {
    return `${mechanism} A whole new periodic inspection is not automatically needed; competent written confirmation and the relevant inspection and tests can verify the specific remedial work.`;
  }
  if (/only 2\.9 ka/.test(choice)) {
    return `${mechanism} The earth-fault reading is not automatically the highest; the larger measured short-circuit value governs the immediate breaking-capacity check.`;
  }
  if (/only ze.*pfc is not relevant/.test(choice)) {
    return `${mechanism} Ze is an impedance, not the prospective current the protective device must interrupt; PFC is therefore essential at the distribution board.`;
  }
  if (/average of 3\.8 ka and 2\.9 ka/.test(choice)) {
    return `${mechanism} Averaging hides the worst credible fault; equipment must be rated against the maximum prospective current, not the mean of two different fault modes.`;
  }
  if (/only at the start of a tenancy/.test(choice)) {
    return `${mechanism} Existing tenants remain entitled to a maintained installation, required reports and timely remedial work; the duties do not end after move-in.`;
  }
  if (/only when an inspection is undertaken/.test(choice)) {
    return `${mechanism} Report supply, remedial deadlines and ongoing maintenance continue after the inspector leaves, so the inspection event is only one part of compliance.`;
  }
  if (/only on request/.test(choice)) {
    return `${mechanism} The landlord must arrange inspections and give reports at the prescribed times without waiting for a tenant or authority to ask.`;
  }
  if (/on request only/.test(choice) && /confirmation.*tenant/.test(question)) {
    return `${mechanism} The landlord must send the tenant the remedial confirmation within 28 days of completion; the tenant does not need to request it first.`;
  }
  if (/public reprimand only/.test(choice)) {
    return `${mechanism} The authority can require remedial action and impose a financial penalty of up to £40,000; enforcement is not limited to reputational criticism.`;
  }
  if (/ra must always be below 1 ohm/.test(choice)) {
    return `${mechanism} TT safety is checked from RA × IΔn, not a universal 1 Ω electrode target; the calculated touch voltages here are below 50 V.`;
  }
  if (/all lighting circuits over 2 ohm/.test(choice)) {
    return `${mechanism} R1+R2 alone is not the live fault-loop value and the measured 0.52 Ω Zs is not immediate danger; the unexpected readings need method and conductor checks, not an automatic C1.`;
  }
  if (/any zs over 1 ohm/.test(choice)) {
    return `${mechanism} There is no universal 1 Ω Zs ceiling; the limit comes from the actual protective device and required disconnection time.`;
  }
  if (/always 28 days as for prs/.test(choice)) {
    return `${mechanism} The 28-day period is a rented-home rule, whereas the school must set urgency from the actual danger, potential danger or defined investigation concern under workplace law.`;
  }
  if (/tell only the contracting client/.test(choice)) {
    return `${mechanism} Warning only the neighbouring client may never reach the people exposed in the affected unit; its responsible person must be told directly or through emergency escalation.`;
  }
  if (/should always be c1 instead/.test(choice)) {
    return `${mechanism} C1 requires a particular danger present now; neither the board's age nor a vague bundle of upgrade wishes establishes that.`;
  }
  if (/either c2 or c3 based only on.*age/.test(choice)) {
    return `${mechanism} Age alone does not set the code; the dry indoor use and absence of another danger make this a C3 RCD improvement.`;
  }
  if (/within 28 days only/.test(choice)) {
    return `${mechanism} Foil defeats the fuse's calibrated protection and can allow dangerous fault current now, so immediate isolation or replacement is needed rather than treating 28 days as permission to leave it energised.`;
  }
  if (/action only the highest-risk one/.test(choice)) {
    return `${mechanism} Prioritisation sets the order, but it does not erase the other six C2 risks; all need owned, prompt remedial action and verification.`;
  }
  if (/only|solely|automatically|always|in all cases/.test(choice)) {
    return `UNSUPPORTED OPTION: ${wrongOption}`;
  }
  if (/acceptable if the inspector explains why/.test(choice)) {
    return `${mechanism} A note cannot convert a C3-only report into an unsatisfactory one; the result must follow the model EICR code rules.`;
  }
  if (/acceptable if the duty holder agrees/.test(choice)) {
    return `${mechanism} The EICR is the inspector's independent technical judgement, so client agreement cannot legitimise a knowingly wrong result.`;
  }
  if (/acceptable if a regulatory body asks/.test(choice)) {
    return `${mechanism} A request from a regulator does not change what C3 means or authorise a false declaration; the report must remain evidence-led.`;
  }
  if (/acting professionally/.test(choice)) {
    if (/conflict of interest/.test(question)) {
      return `${mechanism} Concealing the family relationship prevents transparent assessment of impartiality and is contrary to professional independence, even if the readings later prove sound.`;
    }
    return `${mechanism} Deliberately falsifying the code breaches the inspector's duty to report independently and competently; pleasing the customer does not make it professional.`;
  }
  if (/acting in the duty holder's best interests/.test(choice)) {
    return `${mechanism} Hiding immediate danger prevents the duty holder from protecting people and arranging repair, so it works directly against their legitimate interests.`;
  }
  if (/acceptable practice/.test(choice)) {
    if (/conflict of interest/.test(question)) {
      return `${mechanism} Undisclosed close-family involvement is not acceptable practice because it creates avoidable doubt about scope, judgement and the satisfactory conclusion.`;
    }
    return `${mechanism} Customer pressure never makes a deliberate C1-to-C3 downgrade acceptable; the recorded code must reflect the danger actually found.`;
  }
  if (/acting reasonably/.test(choice)) {
    return `${mechanism} An unpaid invoice is a separate commercial dispute and is not a reasonable basis for abandoning an immediate safety risk.`;
  }
  if (/acting under contract/.test(choice)) {
    return `${mechanism} Contract terms cannot cancel the inspector's safety duties; the danger must still be warned about and controlled within their authority.`;
  }
  if (/acting under hswa/.test(choice)) {
    return `${mechanism} Health and safety law supports controlling known danger; it does not authorise leaving a C1 unmanaged because payment is outstanding.`;
  }
  if (
    /comply|acceptable|acting professionally|acting reasonably|acting under contract|acting in the duty holder/.test(
      choice,
    )
  ) {
    return `UNSUPPORTED OPTION: ${wrongOption}`;
  }
  if (/reduce|downgrad|re-classify|remark|code.*c3/.test(choice)) {
    return `${mechanism} Changing the label to preserve a satisfactory result would conceal the observed risk; classification follows the condition found, not the outcome the client wants.`;
  }
  if (/refuse/.test(choice)) {
    return `UNSUPPORTED OPTION: ${wrongOption}`;
  }
  if (/^promoted$/.test(choice)) {
    return `${mechanism} Promotion is an employment decision, not a legal response to a manager's consent, connivance or neglect in a health-and-safety offence.`;
  }
  if (/^excused$/.test(choice)) {
    return `${mechanism} Senior status does not excuse knowing neglect; section 37 can attach personal liability where the individual's conduct contributed to the corporate offence.`;
  }
  if (/indemnified by their company/.test(choice)) {
    return `${mechanism} A company cannot contract away an individual's criminal responsibility for their own consent, connivance or neglect.`;
  }
  if (
    /charge|higher insurance premium|promoted|excused|indemnified/.test(choice)
  ) {
    return `UNSUPPORTED OPTION: ${wrongOption}`;
  }
  if (
    /on change of tenancy|end of the financial year|12 months|6 months|24 hours|7 days|28 days/.test(
      choice,
    )
  ) {
    return numberReason(prompt, wrongOption, correctOption);
  }
  if (/n\/a/.test(choice)) {
    return `${mechanism} N/A means the item genuinely does not exist or apply; it cannot be used for an applicable circuit, an observed defect or evidence the inspector did not obtain.`;
  }

  return undefined;
}

function sourceUrlsFor(question: ExamQuestion): string[] {
  const text = lower(`${question.prompt} ${question.explanation}`);
  const urls = new Set<string>([
    IET_CURRENT_EDITION,
    IET_INSPECTION_FAQ,
    IET_MODEL_EICR,
    ESF_BPG4,
    ESF_WIRING_HELP,
  ]);
  if (/rcd|rcbo|iδn|ideltan/.test(text)) urls.add(IET_RCD_TESTING);
  if (/isolation|isolator|single-pole|make safe|make-safe|live/.test(text)) {
    urls.add(IET_ISOLATION);
    urls.add(HSE_EAWR);
  }
  if (/pv|battery|bidirectional|alternative source/.test(text)) {
    urls.add(IET_BIDIRECTIONAL);
    urls.add(IET_PV_DC_ISOLATION);
  }
  if (/earth electrode|\bra\b|tt system|tt-supplied/.test(text)) {
    urls.add(IET_TT_EARTHING);
  }
  if (/1\.0 mm².*spur|overload|current-carrying capacity/.test(text)) {
    urls.add(IET_OVERLOAD_PROTECTION);
  }
  if (/workplace|non-domestic|hswa|eawr|employer|duty holder/.test(text)) {
    urls.add(HSE_HSR25);
    urls.add(HSE_EAWR);
  }
  if (/landlord|tenant|rented|local authority|28 days|£40,000/.test(text)) {
    urls.add(GOV_RENTED_SECTOR);
  }
  if (/£40,000|£30,000|financial penalty|social-housing|social housing/.test(text)) {
    urls.add(RENTED_SECTOR_2025_AMENDMENT);
  }
  return [...urls];
}

function rationaleFor(
  question: ExamQuestion,
  choice: ExamChoice,
): string | undefined {
  const wrongOption = clean(question.options[choice]);
  const correctOption = clean(question.options[question.answer]);
  const mechanism = mechanismFor(question.prompt);
  if (!mechanism) return `UNSUPPORTED MECHANISM: ${wrongOption}`;

  return clean(
    classificationReason(wrongOption, correctOption, mechanism) ??
      numberReason(question.prompt, wrongOption, correctOption) ??
      actionReason(question.prompt, wrongOption, correctOption, mechanism) ??
      `UNSUPPORTED OPTION: ${wrongOption}`,
  );
}

function targetQuestions(): ScopedQuestion[] {
  return enhancedPeriodicInspection.sections
    .filter((section) => TARGET_SECTION_IDS.has(section.id))
    .flatMap((section) =>
      section.variants.flatMap((variant) =>
        variant.questions.map((question) => ({
          sectionId: section.id,
          variantId: variant.id,
          question,
        })),
      ),
    );
}

function reviewed(entry: ScopedQuestion) {
  const { sectionId, variantId, question } = entry;
  const wrongChoices = CHOICES.filter((choice) => choice !== question.answer);
  const rationaleEntries = wrongChoices.map((choice) => {
    const reason = rationaleFor(question, choice);
    if (!reason) {
      throw new Error(
        `Unsupported rationale in ${sectionId}/${variantId} Q${question.number} ${choice}: ${question.options[choice]}`,
      );
    }
    return [question.options[choice], reason] as const;
  });
  const reasons = rationaleEntries.map(([, reason]) => reason);
  const fullCorrectExplanation = clean(question.explanation);
  if (
    fullCorrectExplanation.length > 35 &&
    reasons.some((reason) => reason.includes(fullCorrectExplanation))
  ) {
    throw new Error(
      `Wrong-answer rationale copies the full correct explanation in ${sectionId}/${variantId} Q${question.number}`,
    );
  }
  if (new Set(reasons).size !== reasons.length) {
    throw new Error(
      `Duplicate rationale in ${sectionId}/${variantId} Q${question.number}: ${JSON.stringify(rationaleEntries)}`,
    );
  }
  return {
    prompt: question.prompt,
    options: CHOICES.map((choice) => question.options[choice]),
    answer: question.options[question.answer],
    rationales: Object.fromEntries(rationaleEntries),
    sourceUrls: sourceUrlsFor(question),
  };
}

function buildPeriodicInspectionEicrPart2() {
  const questions = targetQuestions().map(reviewed);
  if (questions.length !== 188) {
    throw new Error(
      `Periodic Inspection EICR Part 2 must cover 188 questions; found ${questions.length}`,
    );
  }
  const rationales = questions.flatMap((entry) =>
    Object.values(entry.rationales),
  );
  if (rationales.length !== 564) {
    throw new Error(
      `Periodic Inspection EICR Part 2 must contain 564 rationales; found ${rationales.length}`,
    );
  }
  const unsupported = questions.flatMap((entry) =>
    Object.entries(entry.rationales)
      .filter(([, reason]) => /UNSUPPORTED (?:OPTION|MECHANISM)/.test(reason))
      .map(([option, reason]) => `${entry.prompt} || ${option} || ${reason}`),
  );
  if (unsupported.length > 0) {
    throw new Error(
      `Periodic Inspection EICR Part 2 has ${unsupported.length} unsupported options:\n${unsupported.join("\n")}`,
    );
  }
  if (new Set(rationales).size !== rationales.length) {
    const counts = new Map<string, number>();
    for (const reason of rationales) {
      counts.set(reason, (counts.get(reason) ?? 0) + 1);
    }
    const duplicateDetails = [...counts.entries()]
      .filter(([, count]) => count > 1)
      .map(([reason, count]) => {
        const uses = questions.flatMap((entry) =>
          Object.entries(entry.rationales)
            .filter(([, candidate]) => candidate === reason)
            .map(([option]) => `${entry.prompt} || ${option}`),
        );
        return `${count}x ${reason}\n  ${uses.join("\n  ")}`;
      });
    throw new Error(
      `Periodic Inspection EICR Part 2 rationales must be globally unique; found ${rationales.length - new Set(rationales).size} duplicate(s):\n${duplicateDetails.join("\n")}`,
    );
  }
  const generic = rationales.find((reason) =>
    /UNSUPPORTED OPTION|does not fit|doesn't fit|applicable answer|because it is wrong|the correct answer is|this option|the stem|absolute wording|omitting or ignoring it|does not match the stated|that provides no competent|commercial agreement or client preference|editing, deleting or casually replacing|refusal alone does not manage|assigns the wrong document role|gives the EICR a job|The word “always” overstates|depends on the applicable limit and condition|would apply the wrong rule|wrong feature/i.test(
      reason,
    ),
  );
  if (generic) {
    throw new Error(
      `Periodic Inspection EICR Part 2 contains a generic rationale: ${generic}`,
    );
  }
  if (questions.some((entry) => entry.sourceUrls.length === 0)) {
    throw new Error(
      "Every Periodic Inspection EICR Part 2 question needs sources",
    );
  }
  return questions;
}

export const periodicInspectionEicrPart2 = buildPeriodicInspectionEicrPart2();
