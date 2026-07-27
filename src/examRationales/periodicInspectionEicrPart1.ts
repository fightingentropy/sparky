import periodicInspectionData from "../exam-data/periodic-inspection.json";
import { applyExamExplanationEnhancements } from "../examExplanationEnhancements";
import type { Exam, ExamChoice, ExamQuestion } from "../exams/types";

const IET_CURRENT_EDITION =
  "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/ensure-you-are-up-to-date-with-bs-7671/";
const IET_MODEL_FORMS =
  "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/model-forms/";
const IET_MODEL_EICR =
  "https://electrical.theiet.org/media/jp2fl3ia/bs7671_eicr_a4.pdf";
const IET_INSPECTION_FAQ =
  "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/";
const IET_EICR_MYTHS =
  "https://electrical.theiet.org/wiring-matters/years/2021/85-may-2021/eicr-myths/";
const IET_RCD_TESTING =
  "https://electrical.theiet.org/wiring-matters/years/2022/91-july-2022/changes-to-rcd-testing-in-bs-76712018plusa22022/";
const IET_RING_TESTING =
  "https://electrical.theiet.org/wiring-matters/years/2022/89-march-2022/resistance-readings-for-step-3-of-the-ring-final-circuit-test/";
const ESF_BPG4 =
  "https://www.electricalsafetyfirst.org.uk/media/nhjengmh/best_practice-guide-4_issue-73.pdf";
const HSE_EAWR = "https://www.legislation.gov.uk/uksi/1989/635/contents/made";
const HSE_HSG85 = "https://www.hse.gov.uk/pubns/priced/hsg85.pdf";
const GOV_RENTED_SECTOR =
  "https://www.gov.uk/government/publications/electrical-safety-standards-in-the-private-and-social-rented-sectors-guidance/electrical-safety-standards-in-the-private-and-social-rented-sectors-guidance";
const GOV_PART_P =
  "https://www.gov.uk/government/publications/electrical-safety-approved-document-p";

const TARGET_SECTION_IDS = new Set(["eicr-section-1", "eicr-section-2"]);
const CHOICES: readonly ExamChoice[] = ["A", "B", "C", "D"];
const enhancedPeriodicInspection = applyExamExplanationEnhancements(
  periodicInspectionData as unknown as Exam,
);

type ScopedQuestion = {
  sectionId: string;
  variantId: string;
  question: ExamQuestion;
};

type ResultClass = "C1" | "C2" | "C3" | "FI" | "SAT" | "UNSAT" | "OTHER";

function clean(value: string): string {
  return value
    .replace(/…|\.\.\./g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function lower(value: string): string {
  return clean(value).toLowerCase();
}

function resultClass(value: string): ResultClass {
  const text = clean(value);
  if (/^(?:Automatically\s+|Code(?:d)?(?: it)?\s+)?C1\b/i.test(text))
    return "C1";
  if (/^(?:Automatically\s+|Code(?:d)?(?: it)?\s+)?C2\b/i.test(text))
    return "C2";
  if (/^(?:Automatically\s+|Code(?:d)?(?: it)?\s+)?C3\b/i.test(text))
    return "C3";
  if (/^(?:Add an\s+|Code(?:d)?(?: it)?\s+)?FI\b/i.test(text)) return "FI";
  if (
    /^(?:(?:Mark(?: the report| it)|Recorded as)\s+)?(?:Satisfactory|No code)\b/i.test(
      text,
    )
  )
    return "SAT";
  if (/^(?:Mark(?: the report| it)\s+)?Unsatisfactory\b/i.test(text))
    return "UNSAT";
  return "OTHER";
}

function technicalFact(prompt: string): string | undefined {
  const text = lower(prompt);

  if (/domestic installation has no surge protective device/.test(text)) {
    return "No SPD is not the same as failed shock or overcurrent protection: on the stated ordinary home-office use, its absence may justify a C3 after the current risk assessment but does not establish C1 or C2 danger.";
  }
  if (
    /school is having its electrical installation condition-assessed/.test(text)
  ) {
    return "A school condition assessment concerns the safety of an existing fixed installation, so it produces an EICR with its inspection and test schedules; no new work is being certified.";
  }
  if (/office eicr includes the addition of a circuit/.test(text)) {
    return "The new circuit needs an EIC for its design, construction and initial verification, while the separately commissioned periodic inspection needs its EICR; one document cannot perform both jobs.";
  }
  if (/factory production line cannot be shut down/.test(text)) {
    return "The production-line shutdown should be planned with the duty holder; any circuit that still cannot be safely isolated is identified as an operational limitation rather than tested live without EAWR justification.";
  }
  if (/life-safety equipment cannot be safely isolated/.test(text)) {
    return "Life-safety supplies need a coordinated maintenance window or safe alternative provision before isolation; until then, the exact untested circuit and reason are recorded as an operational limitation.";
  }
  if (/cabinets mcc-3 to mcc-6 not opened/.test(text)) {
    return "The limitation means the cabinet interiors produced no inspection evidence, so those MCCs are neither passed nor condemned and need a future controlled access or shutdown plan.";
  }
  if (/data centre suite circuits not isolated/.test(text)) {
    return "The no-shutdown restriction excludes the data-centre suite's dead-test evidence; the duty holder must arrange a planned maintenance window instead of treating that suite as verified.";
  }
  if (
    /operational limitation has been recorded for theatre circuits/.test(text)
  ) {
    return "The theatre circuits lie outside the evidence actually obtained, so the report remains valid only for its declared scope and the hospital needs a separate safe plan to inspect those circuits.";
  }
  if (/boiler-room circuits not inspected/.test(text)) {
    return "The locked boiler room creates a precise access limitation: those circuits remain unverified and need follow-up access, while the rest of a meaningful inspection can still be reported on its evidence.";
  }
  if (/tenant suite 4f not accessed/.test(text)) {
    return "Suite 4F is outside the obtained evidence because access failed; arranging tenant access for follow-up is necessary, but that honest limitation does not itself create a C1 or C2 condition.";
  }
  if (/extent of installation covered.*hospital ward/.test(text)) {
    return "A hospital report must identify the actual ward areas, boards and circuits covered, because future duty holders need to distinguish examined equipment from other clinical supplies on the site.";
  }
  if (/retail unit is being condition-reported/.test(text)) {
    return "Five years is the usual starting maximum for a sound retail installation, but the inspector must shorten it when use, environment, maintenance history or observed deterioration increases risk.";
  }
  if (/recommended date for the next inspection/.test(text)) {
    return "The next date is the inspector's risk-based recommendation from premises type, condition, use, environment and maintenance evidence; it is not a fixed client-selected interval.";
  }
  if (/report contains one fi observation but no c1 or c2/.test(text)) {
    return "A4:2026 treats the single FI as advisory, so with no C1 or C2 the overall assessment is satisfactory; the defined investigation remains recorded for due consideration.";
  }
  if (/identifies one c3 observation and no c1 or c2/.test(text)) {
    return "A lone C3 recommends an improvement but identifies neither danger nor potential danger, so A4:2026 leaves the overall assessment satisfactory.";
  }
  if (/records ten c3 observations and one fi observation/.test(text)) {
    return "Ten C3 recommendations and one FI remain advisory under A4:2026; their quantity does not create C1 or C2, so the school report is still satisfactory overall.";
  }
  if (/has many c3 observations and one fi observation/.test(text)) {
    return "The summary should preserve both the repeated improvement case and the defined FI advice, while the absence of C1 and C2 keeps the A4:2026 overall assessment satisfactory.";
  }
  if (/contains one c2, several c3 observations and one fi/.test(text)) {
    return "The single C2 identifies potential danger and therefore makes the A4:2026 assessment unsatisfactory; the C3 and FI entries remain advisory to that overall result.";
  }
  if (/items that don't apply to the installation/.test(text)) {
    return "N/A records that an inspection item genuinely does not exist or apply; a tick would falsely claim that applicable equipment was examined and found acceptable.";
  }
  if (/schedule of inspections, an item that is non-compliant/.test(text)) {
    return "A non-compliant inspection item is marked adverse and cross-referenced to its clearly described observation, allowing the reader to trace the failed check and its classification.";
  }
  if (/back-date the eicr by a month/.test(text)) {
    return "Back-dating moves the evidence and legal time limits to a day when no inspection occurred, producing a false professional record regardless of the insurance request or fee.";
  }
  if (/cover sheet records.*date of inspection/.test(text)) {
    return "The cover-sheet date is the day the installation was actually inspected, because that date anchors the evidence, next-inspection recommendation and any applicable follow-up periods.";
  }
  if (/small office has a recent satisfactory eicr.*new circuit/.test(text)) {
    return "The existing installation keeps its recent EICR, while the added circuit receives its own EIC proving design, construction and initial verification; neither a fresh whole-site report nor an MEIWC certifies that circuit.";
  }
  if (/adding a new shower circuit/.test(text)) {
    return "A shower supplied by a newly created circuit needs an EIC with full design, construction and initial-verification responsibility; an EICR or MEIWC cannot certify creation of that circuit.";
  }
  if (/new private tenancy is about to start/.test(text)) {
    return "The satisfactory 18-month-old report remains within its stated interval, so the landlord supplies that existing report before occupation and checks visually for intervening damage rather than commissioning unrelated paperwork.";
  }
  if (/issued 4 years and 11 months ago/.test(text)) {
    return "With the five-year rented-sector limit about to expire, the landlord needs a new periodic inspection and report before the deadline; work certificates and appliance records cannot renew the installation assessment.";
  }
  if (
    /school eicr identifies an unsatisfactory outcome with three c2/.test(text)
  ) {
    return "Three C2 findings identify potential dangers that the school's electrical duty holder must prioritise, remedy within a risk-based reasonable time and document under the workplace safety duties.";
  }
  if (/landlord receives an unsatisfactory eicr with one c1/.test(text)) {
    return "A C1 is danger present, so the inspector should make it safe or warn immediately and the landlord must arrange the permanent remedy and written confirmation without treating 28 days as permission to wait.";
  }
  if (/meiwc is being issued for a fused spur/.test(text)) {
    return "The fused-spur MEIWC must identify the added work and record the relevant parent ring-final tests, because the new connection relies on that circuit's polarity, earthing, loop and protective-device performance.";
  }
  if (/meiwc issued for an alteration to an existing circuit/.test(text)) {
    return "An alteration MEIWC records the work's extent and the relevant inspection and tests on the affected existing circuit; it does not expand into a whole-building condition survey.";
  }
  if (/meiwc issued for a kitchen-circuit alteration/.test(text)) {
    return "The kitchen alteration needs results that prove the affected circuit remains safe, such as protective-conductor continuity, polarity, insulation, loop and applicable RCD performance, not tests on unrelated circuits.";
  }
  if (/meiwc for an additional socket.*installation-wide ir/.test(text)) {
    return "A minor addition is verified with relevant tests on its affected circuit; an installation-wide insulation test is not automatically required, but a PAT test cannot replace fixed-wiring evidence.";
  }
  if (/ring final circuit gives end-to-end readings.*0\.31/.test(text)) {
    return "The cross-connected line-to-CPC result is expected near (r1 + r2) / 4, which is (0.46 + 0.78) / 4 = 0.31 Ω; neutral end-to-end resistance is not used in that calculation.";
  }
  if (
    /most sockets give r1\+r2 around 0\.28.*one double socket gives 0\.81/.test(
      text,
    )
  ) {
    return "Most points agree with (0.42 + 0.69) / 4 ≈ 0.28 Ω, but 0.81 Ω at one socket indicates a different or resistive CPC path that needs tracing even though the final Zs only just passes.";
  }
  if (/inoperative \(no trip at any test current\)/.test(text)) {
    return "The inoperative 30 mA RCD has lost the additional shock-protection function intended for the sockets, making it C2 potential danger; ordinary access alone does not turn that future-fault risk into C1.";
  }
  if (/one rcd does not respond to the inspector's test button/.test(text)) {
    return "A failed test button requires instrument verification and, if the operating or test function is confirmed defective, urgent RCD replacement as C2; mechanical switching alone cannot prove residual-current protection.";
  }
  if (/rcbo does not operate within five seconds/.test(text)) {
    return "More than five seconds at IΔn is far beyond the 300 ms maximum for a general non-delay RCBO, proving a C2 protective-device failure rather than an unresolved or age-related concern.";
  }
  if (/takes 350 ms to operate at iδn/.test(text)) {
    return "The measured 350 ms exceeds the current 300 ms maximum at IΔn, so the required additional-protection function has failed and warrants C2; a former 5 × diagnostic result cannot rescue it.";
  }
  if (/trips in 200 ms at iδn/.test(text)) {
    return "A 200 ms AC test at IΔn is 100 ms inside the 300 ms limit for a general non-delay RCD, so its measured protective function is satisfactory and needs neither a code nor FI.";
  }
  if (/operates in 280 ms at iδn/.test(text)) {
    return "The 280 ms AC result at IΔn is 20 ms within the current 300 ms maximum; the small margin should be recorded but does not create C2, C3 or FI.";
  }
  if (/protecting outdoor sockets operates in 250 ms/.test(text)) {
    return "The outdoor sockets need the RCD, and its 250 ms AC result at IΔn passes the 300 ms limit by 50 ms, so the required function is verified rather than defective or unresolved.";
  }
  if (/required 30 ma rcd.*has been bypassed/.test(text)) {
    return "The bypass defeats a required additional-protection layer and creates C2 potential danger on a later residual-current fault; deliberate interference alone does not establish present C1 danger.";
  }
  if (/circuit chart incorrectly states 15 a/.test(text)) {
    return "The breaker itself is visibly 32 A and correctly coordinates with its cable, so the wrong 15 A chart entry affects future identification rather than electrical protection and warrants C3 correction.";
  }
  if (/two adjacent circuits have been swapped/.test(text)) {
    return "The two breakers remain correctly rated, but their swapped identities can misdirect later isolation; correcting the chart is C3 unless an actual protective mismatch or unsafe isolation event is found.";
  }
  if (/main switch.*identified as 'lighting'/.test(text)) {
    return "Calling the main switch 'Lighting' misdescribes its installation-wide function and should be corrected as C3; the switch still isolates correctly, so no C1 or C2 failure is established.";
  }
  if (/1\.0 mm² t\+e/.test(text)) {
    return "The 1.0 mm² unfused connection can be overloaded by the added socket while the 32 A ring device remains closed, allowing normal load current to overheat that short cable and making the defect C2.";
  }
  if (/4\.0 mm² t\+e run in insulation.*27 a/.test(text)) {
    return "The installed cable can carry about 27 A but is protected at 32 A, so normal overload current can exceed its capacity without opening the MCB; restoring In ≤ Iz is an urgent C2 requirement.";
  }
  if (/undersized cpc.*4\.0 mm² 32 a radial/.test(text)) {
    return "This is a fault-energy problem, not a normal-load overload: the 1.0 mm² CPC fails the stated adiabatic duty and may be damaged before the 32 A device clears the fault, so C2 is justified.";
  }
  if (/measured zs is 20% above/.test(text)) {
    return "A Zs value 20% above the applicable limit may prevent the protective device meeting its required disconnection time, leaving exposed metal hazardous after a fault and making the condition C2 rather than C1.";
  }
  if (/type b replaced with type d/.test(text)) {
    return "The Type D device needs more fault current for prompt magnetic operation than the former Type B, and the stated high Zs cannot satisfy its limit; automatic disconnection is therefore impaired and C2.";
  }
  if (/no main earth bonding to the structural steel/.test(text)) {
    return "The confirmed extraneous structural steel can introduce Earth potential, and without its main bond a fault can create a dangerous simultaneous-contact voltage; that foreseeable shock risk is C2.";
  }
  if (
    /3-phase eicr, missing main protective bonding.*metallic gas/.test(text)
  ) {
    return "The missing gas-service bond is described and classified in the EICR observations, with its location and risk clear; a phase count does not change the need to record this C2 equipotential failure.";
  }
  if (
    /domestic eicr, missing main protective bonding to the gas service/.test(
      text,
    )
  ) {
    return "In the domestic report, the absent gas-service bond belongs in the coded observations so the occupier can trace the C2 potential touch-voltage risk to the required remedial work.";
  }
  if (/gas boiler.*no main protective bonding/.test(text)) {
    return "The boiler circuit's RCD cannot replace the main bond to the extraneous metallic gas service; without equipotential connection, a fault can create a dangerous voltage difference and therefore C2.";
  }
  if (
    /earthing conductor present at met but no main protective bonding to incoming water/.test(
      text,
    )
  ) {
    return "The main earthing conductor returns installation fault current, whereas the separate bond holds the extraneous water service near exposed-metal voltage; one cannot substitute for the other, so the missing bond is C2.";
  }
  if (/bonding clamp on the gas service is loose and oxidised/.test(text)) {
    return "One continuity reading does not make a loose oxidised clamp dependable under vibration or fault current; loss of that equipotential connection can create dangerous touch voltage, so urgent C2 repair is needed.";
  }
  if (/pendant lighting fitting.*wholly missing earth conductor/.test(text)) {
    return "The Class I pendant needs its CPC to carry a line-to-metal fault and operate the protective device; without it, the accessible body can remain live after a future fault, which is C2 rather than C1 while it is not live now.";
  }
  if (/protective-conductor tail cut off/.test(text)) {
    return "The cut tail removes the metal faceplate's fault-return path, so a later insulation fault may leave it energised without prompt disconnection; because it is confirmed not live now, the defined result is C2.";
  }
  if (/socket-outlet's earth pin is found to be loose/.test(text)) {
    return "A loose socket earth contact can disconnect a plugged-in Class I appliance from its fault path, allowing its case to stay live after an insulation fault; that unreliable protection is C2.";
  }
  if (/class i metal kitchen appliance.*no earth pin contact/.test(text)) {
    return "The broken socket earth contact leaves the connected Class I appliance without dependable automatic fault disconnection; its case is not live now, so this is C2 potential danger rather than C1.";
  }
  if (/property's main earthing conductor is 10 mm².*100 a pme/.test(text)) {
    return "The stated 10 mm² conductor is below the specified 16 mm² PME requirement for this 100 A supply, so its ability to carry fault and diverted neutral current is inadequate and warrants C2.";
  }
  if (/no earthing arrangement found at the supply intake/.test(text)) {
    return "With no reliable means of earthing, a later line-to-metal fault may not operate automatic disconnection, which BPG4 classifies C2; C1 would need metalwork already live or another present injury risk.";
  }
  if (
    /tn-s installation has a 4 mm² copper main earthing conductor/.test(text)
  ) {
    return "The verified adiabatic calculation proves this 4 mm² conductor cannot withstand the actual fault energy until disconnection, so its history is irrelevant and the inadequate fault path is C2.";
  }
  if (/earthing conductor terminated at met.*hand-tight/.test(text)) {
    return "The hand-tight MET lug can loosen or develop resistance under fault current and undermine every circuit's disconnection path; secure termination and retesting are urgently needed as C2.";
  }
  if (/spur has been added and no certificate/.test(text)) {
    return "The current inspection and tests have proved this particular spur safe, so the missing historic certificate is a records gap rather than an electrical danger or improvement classification.";
  }
  if (/historic eic and test schedules cannot be found/.test(text)) {
    return "The present EICR has replaced the missing historical evidence with sufficient current inspection and test results; without a related defect, the old paperwork gap receives no C1, C2, C3 or FI code.";
  }
  if (
    /older dwelling has a sound rewireable fuse board.*indoor socket/.test(text)
  ) {
    return "The rewireable board remains electrically sound and the sockets are dry indoor points unlikely to supply outdoor equipment, so adding 30 mA protection is a C3 improvement rather than C2 danger.";
  }
  if (/retail shop has no rcd.*indoor socket/.test(text)) {
    return "Customer access does not by itself create C2: these dry indoor sockets are outside a bathroom and unlikely to feed outdoor equipment, so BPG4 treats 30 mA RCD provision as C3.";
  }
  if (/older domestic kitchen has no rcd.*indoor socket/.test(text)) {
    return "The kitchen sockets are expressly outside a bathroom and unlikely to supply outdoor equipment, with no other danger, so the missing modern 30 mA layer is a C3 upgrade on this existing circuit.";
  }
  if (/older dwelling has no 30 ma rcd.*ac lighting/.test(text)) {
    return "The older AC lighting circuit has no separate defect, so BPG4 treats adding today's 30 mA additional protection as a C3 safety improvement rather than present or potential danger.";
  }
  if (
    /older dwelling's lighting circuit was compliant when installed/.test(text)
  ) {
    return "The lighting circuit remains sound to its original standard, and the only difference is today's additional RCD requirement; recording that worthwhile upgrade as C3 avoids treating BS 7671 as automatically retrospective.";
  }
  if (/fresh discolouration.*burning smell/.test(text)) {
    return "Fresh terminal discolouration plus an active burning smell shows overheating is occurring now, creating immediate fire danger that needs C1 isolation or another make-safe action before repair.";
  }
  if (/visible arcing inside a distribution board/.test(text)) {
    return "Visible arcing is an uncontrolled live fault already producing heat inside the board, so C1 and immediate isolation are required rather than an urgent-but-future C2 repair.";
  }
  if (/cracked plastic faceplate.*single screw/.test(text)) {
    return "The loose one-screw faceplate can move during ordinary use and expose the back-box terminals, creating a foreseeable shock route and C2 even though live parts are not reachable yet.";
  }
  if (/clear crack.*within 1 mm of a live terminal/.test(text)) {
    return "The crack has nearly reached a live terminal and normal plug forces can complete the failure, so the foreseeable progression is C2; C1 begins only when the live part is actually accessible.";
  }
  if (/live conductors exposed at junction box in loft/.test(text)) {
    return "Anyone entering the loft can directly touch the exposed junction-box conductor, so basic protection has already failed and C1 immediate make-safe action is necessary.";
  }
  if (
    /exposed metal back box at a switch position.*live terminal accessible/.test(
      text,
    )
  ) {
    return "The damaged switch faceplate permits direct touch of a live terminal at an ordinary operating position, establishing C1 shock danger rather than merely possible future exposure.";
  }
  if (/exposed conductor at the back of a luminaire's flex outlet/.test(text)) {
    return "The conductor protruding beyond its sleeve is touch-accessible at the luminaire connection, so basic protection is already lost and the circuit requires C1 isolation or effective guarding.";
  }
  if (/accessory has a chipped corner/.test(text)) {
    return "The chip has no sharp edge, exposed part, loss of enclosure integrity or credible progression path, so it is cosmetic and does not justify any EICR safety code.";
  }
  if (/metal-clad domestic cu with a small surface scratch/.test(text)) {
    return "The scratch changes only the door's appearance: the metal enclosure remains secure, electrically continuous and protective, leaving no danger or safety improvement to classify.";
  }
  if (/spd.*status indicator showing 'replace'/.test(text)) {
    return "The fitted SPD has reached end of life and no longer limits transient overvoltage, but the installation's basic shock, fault and overload measures still operate; replacement is normally a C3 improvement.";
  }
  if (/damaged swa gland.*armour continuity/.test(text)) {
    return "The intact core insulation prevents immediate contact with a live part, but the damaged gland has made the armour's earth connection and mechanical protection unreliable, creating C2 potential danger.";
  }
  if (
    /burnt neutral termination.*equipment has been isolated and cooled/.test(
      text,
    )
  ) {
    return "The cooled neutral termination is not an active C1 event, but heat damage has weakened a high-current connection and can recur or damage insulation, so urgent C2 repair and testing are necessary.";
  }
  if (/basement consumer unit has condensation damage/.test(text)) {
    return "Busbar corrosion and prior moisture can raise contact resistance and weaken insulation, creating C2 shock or fire potential; with no tracking, heat, arcing or exposed live part, C1 is not established.";
  }
  if (/bs 3036 rewireable fuse remaining/.test(text)) {
    return "A sound BS 3036 fuse remains satisfactory when its rating coordinates with the cable, its breaking capacity is adequate and the measured fault path supports the required disconnection time; age alone is not a defect.";
  }
  if (
    /accessible loft cable has an unenclosed twisted-and-taped joint/.test(text)
  ) {
    return "The intact tape prevents immediate touch, but twisting provides no dependable contact pressure and the unenclosed joint lacks strain relief, so loosening, heat or future exposure makes it C2.";
  }
  if (/standard test finger can contact a live terminal/.test(text)) {
    return "A standard test finger can directly reach the live socket terminal, proving basic protection has failed and creating C1 danger that needs immediate isolation or effective guarding.";
  }

  if (/afdd|arc fault detection/.test(text)) {
    return "An AFDD is an added means of detecting dangerous arcing; where current rules call for one but the existing circuit is sound and shows no arcing or thermal damage, BPG4 treats its absence as a C3 improvement.";
  }

  if (/maximum prospective fault current|pfc value.*origin/.test(text)) {
    return "Prospective fault current at a single-phase origin is the higher of the line-neutral short-circuit current and line-earth fault current, so the protective equipment is checked against the worst measured duty.";
  }
  if (/ze appears|which value is ze/.test(text)) {
    return "Ze is the external earth-fault loop impedance; connected main bonding can create parallel metallic return paths and make the reading artificially low, so the controlled measurement is made without those paths and every bond is then restored.";
  }
  if (
    /ring final.*end-to-end|figure-of-eight|highest measured r1\+r2|most sockets.*one double socket/.test(
      text,
    )
  ) {
    return "For the cross-connected ring test, the expected R1 + R2 near each point is approximately (r1 + r2) / 4; a substantially higher point needs investigation for a spur or poor protective-conductor path.";
  }
  if (/\(r1 \+ r2\) or r2.*continuity columns/.test(text)) {
    return "The model test schedule records either the line-plus-CPC continuity value R1 + R2 at the circuit point or a separately measured CPC value R2; these are distinct from ring end-to-end, loop and insulation results.";
  }
  if (/smart dimmers|electronic switches|led drivers/.test(text)) {
    return "Connected electronic equipment can lower a line-neutral insulation reading or be damaged by the test, while a strong live-conductors-to-Earth result supports the fixed wiring's insulation to Earth; the voltage, connection method and limitation must be recorded.";
  }
  if (/whole-installation insulation resistance|damp agricultural/.test(text)) {
    return "Parallel circuits can produce a lower whole-installation insulation value than any one circuit, and a damp environment plus one marginal circuit can indicate moisture or contamination that deserves targeted investigation rather than a pass based only on individual figures.";
  }
  if (
    /live conductors exposed|accessible live|live terminal accessible|exposed conductor/.test(
      text,
    )
  ) {
    return "A touch-accessible live conductor defeats basic protection and presents an immediate shock risk, requiring C1, prompt warning and isolation or another effective make-safe action.";
  }
  if (/supplementary equipotential bonding|bathroom.*bonding/.test(text)) {
    return "Bathroom supplementary bonding may be omitted only when every condition in Regulation 701.415.2 is satisfied; otherwise simultaneous contact can expose a person to a dangerous touch voltage during a fault.";
  }
  if (
    /rcd|rcbo/.test(text) &&
    /350 ms|five seconds|does not operate|does not respond|inoperative|bypassed|jumpered/.test(
      text,
    )
  ) {
    return "A required RCD that fails to operate within 300 ms at IΔn, or has been bypassed, cannot provide its intended residual-current protection and is potentially dangerous until urgently repaired or replaced.";
  }
  if (
    /rcd|rcbo/.test(text) &&
    /200 ms|250 ms|280 ms|test records|operating time/.test(text)
  ) {
    return "Current field verification applies an AC residual current at IΔn; a general non-delay RCD must operate within 300 ms, while the former half-current and 5 × IΔn checks are optional diagnostics rather than prescribed core tests.";
  }
  if (
    /lighting circuits?.*no 30 ma rcd|no 30 ma rcd.*lighting|lighting circuit.*without rcd|lighting circuit.*lacks.*rcd/.test(
      text,
    )
  ) {
    return "BPG4 gives C3 where an older domestic AC lighting circuit lacks the additional RCD protection required by the current edition, provided no separate defect or potential danger is present.";
  }
  if (
    /no rcd additional protection|without rcd additional protection/.test(
      text,
    ) &&
    /socket/.test(text)
  ) {
    return "Missing 30 mA RCD protection is classified from actual socket use: outdoor mobile equipment or a bathroom can create C2 potential danger, while older indoor sockets with neither risk are normally a C3 improvement under BPG4.";
  }
  if (/chipped corner|cosmetic|surface scratch/.test(text)) {
    return "A cosmetic mark needs no EICR code when enclosure integrity, security and basic protection remain sound and there is no credible path for the damage to expose live parts.";
  }
  if (/0\.4 mω|0\.4 m ohm/.test(text)) {
    return "After loads are disconnected and the method is verified, insulation resistance below 1 MΩ between live conductors connected together and Earth indicates deteriorated insulation and BPG4 assigns C2.";
  }
  if (/exactly 1\.0 mω|exactly 1\.0 m ohm/.test(text)) {
    return "A stable 1 MΩ insulation result meets the stated minimum, so it is recorded as satisfactory; its lack of margin makes comparison with earlier and future readings sensible but does not by itself create FI.";
  }
  if (
    /circuit chart incorrectly|circuit chart identifies|circuits have been swapped|mismatched label|crossed.*identification|main switch.*identified/.test(
      text,
    )
  ) {
    return "Accurate circuit identification supports safe isolation, but an incorrect chart or label with correctly rated protection and no dangerous isolation event is normally a C3 labelling improvement under BPG4.";
  }
  if (
    /loose and oxidised|bonding clamp|main protective bonding|structural steel|incoming water|metallic gas/.test(
      text,
    )
  ) {
    return "Main bonding limits touch voltage between earthed equipment and metal that introduces Earth potential; a missing or unreliable connection can become dangerous during a fault and normally warrants C2.";
  }
  if (
    /type d|high zs.*device|above.*zs|measured zs.*above|maximum permitted zs/.test(
      text,
    )
  ) {
    return "Earth-fault loop impedance is compared with the limit for the actual protective device and required disconnection time; an excessive value can delay automatic disconnection and make exposed metalwork hazardous during a fault.";
  }
  if (/at the maximum permitted value|equal to.*maximum permitted/.test(text)) {
    return "A calibrated Zs result that does not exceed the applicable maximum after the required allowance has been considered satisfies the limit; the small margin is useful maintenance information, not an unresolved danger by itself.";
  }
  if (
    /1\.0 mm²|undersized conductor|current.*27 a|cable.*overload/.test(text)
  ) {
    return "Overload protection must not exceed the cable's effective current-carrying capacity; an undersized unfused spur or a cable with Iz below the protective-device rating can overheat during normal load before the device opens.";
  }
  if (
    /class i luminaire|missing earth conductor|earth tail cut|protective-conductor tail cut|earth pin.*loose|no earth pin contact/.test(
      text,
    )
  ) {
    return "Class I metalwork relies on a dependable protective-conductor path so a line-to-case fault produces enough current for prompt disconnection; a missing or unreliable earth is potential danger and normally C2.";
  }
  if (
    /altered.*certification|historic eic|previous eic missing|without certification|no certificate.*found|certificate.*cannot be found/.test(
      text,
    )
  ) {
    return "Historic certificates help trace work but do not establish today's electrical condition; current inspection and testing determine safety, and absent paperwork is noted without inventing an EICR classification where no defect remains.";
  }
  if (/sharp metal edge|sheath chafed/.test(text)) {
    return "A sharp edge has already damaged the sheath and can progress through basic insulation under movement, so urgent rerouting or mechanical protection is needed before live conductors become exposed.";
  }
  if (/armoured cable gland|steel wire armour/.test(text)) {
    return "A damaged SWA gland can lose armour continuity and mechanical protection, creating potential danger while the core insulation remains intact; damaged cores that expose a live part instead create immediate danger.";
  }
  if (/plastic consumer unit|plastic cu/.test(text)) {
    return "A sound plastic consumer unit is not unsafe merely because current domestic units are normally non-combustible; BPG4 reserves C3 for specified higher-consequence locations such as beneath a wooden staircase or in a sole escape route.";
  }
  if (
    /burning smell|active overheating|visible arcing|active condensation/.test(
      text,
    )
  ) {
    return "Active arcing, overheating or a burning smell presents a fire danger at the time of inspection and needs immediate make-safe action; contained corrosion or cooled heat damage without active danger is normally C2.";
  }
  if (
    /cracked plastic faceplate|clear crack|shutter mechanism|non-functional shutters|shutters non-functional/.test(
      text,
    )
  ) {
    return "A damaged accessory is C2 while it creates a foreseeable path to live parts, but becomes C1 when the live contacts are already accessible to an ordinary person.";
  }
  if (/cable buried in plaster|safe zone/.test(text)) {
    return "A cable concealed less than 50 mm deep outside prescribed zones needs the required earthed protection or 30 mA RCD protection; without either, a nail or screw can create a dangerous fault.";
  }
  if (/class ii luminaire/.test(text)) {
    return "Class II equipment uses double or reinforced insulation and does not require a protective conductor, while a single-pole switch correctly placed in the line conductor is normal functional control.";
  }
  if (
    /no earthing arrangement|main earthing conductor|earthing conductor.*met|4 mm².*earthing|adiabatic/.test(
      text,
    )
  ) {
    return "The main earthing conductor carries fault current back to the source so automatic disconnection can operate; an absent, adiabatically inadequate or unreliable path is potential danger and BPG4 normally assigns C2.";
  }
  if (/burnt-out neutral|fire damage|discoloured.*busbar/.test(text)) {
    return "Cooled, contained heat damage has weakened the connection and insulation and is C2, while continuing heat, smoke, arcing or accessible live parts establish C1 danger present.";
  }
  if (/beneath floorboards|under floor/.test(text)) {
    return "The special less-than-50 mm RCD rules apply to cables concealed in walls or partitions; a cable under a floor still needs protection from foreseeable damage, but no blanket rule demands armour and RCD protection for every sound route.";
  }
  if (/length of foil|rewireable fuse/.test(text)) {
    return "A correct rewireable fuse can provide satisfactory protection, but foil defeats effective overcurrent protection and can let the circuit overheat; without active burning or exposed live parts this is C2 potential danger.";
  }
  if (/spare way|unused mcb/.test(text)) {
    return "A sound consumer-unit cover requiring a key or tool provides basic protection from internal live terminals; deliberate cover removal by a skilled maintainer does not make an enclosed unused MCB terminal a defect.";
  }
  if (/inductive transformer|nuisance trip/.test(text)) {
    return "Nuisance tripping is a functional issue rather than an electrical-safety defect when the Type B device still protects the cable and satisfies the required fault-disconnection time; any Type C substitution would need those checks repeated.";
  }
  if (/boiler isolator.*not labelled/.test(text)) {
    return "Clear isolator identification helps maintenance and emergency operation, so an otherwise safe but unlabelled boiler switch normally warrants C3 rather than an immediate or potential-danger code.";
  }
  if (/metal cable tray|containment system/.test(text)) {
    return "Metal tray carrying intact sheathed cables is not automatically liable to become live and does not automatically introduce Earth potential, so it needs no protective connection solely because it is metal.";
  }
  if (/tt-system|tt installation/.test(text)) {
    return "A TT system commonly needs an RCD because the electrode loop is too resistive for an overcurrent device to disconnect promptly; absent effective automatic disconnection is C2 unless another fact makes danger present now.";
  }
  if (/tape-wrapped|twisted-and-taped|twisted and tape/.test(text)) {
    return "Twisting and tape do not provide a durable terminal, strain relief or enclosure, so the joint can loosen and overheat; it is C2 while cool and enclosed, and C1 only with active heat, arcing or accessible live parts.";
  }
  if (/extraneous-conductive-part status/.test(text)) {
    return "A metallic service needs main bonding only if it can introduce Earth potential; a targeted continuity or resistance assessment must establish that status before missing bonding can be classified.";
  }
  if (/mixed-brand|mixed device types/.test(text)) {
    return "Unverified mixed-brand switchgear is C3 only when every device is secure, correctly connected, undamaged and functionally sound; poor fit, overheating or failed protection is a separate and potentially C2 defect.";
  }
  if (/spd.*replace|surge protective device/.test(text)) {
    return "An end-of-life SPD no longer limits transient overvoltage but does not remove the installation's basic shock and overcurrent protection, so replacement is normally a C3 improvement rather than C1 or C2.";
  }
  if (/polarity reversed at the consumer unit/.test(text)) {
    return "Reversed polarity at the origin leaves line conductors energised through devices expected to be in neutral and defeats safe single-pole isolation, which BPG4 treats as C1 danger present.";
  }
  if (/polarity reversed at one socket/.test(text)) {
    return "Reversed polarity at a socket can leave internal parts energised when connected equipment is switched off and defeats the expected line-conductor protection, so it is potentially dangerous and normally C2.";
  }
  if (
    /all loads connected.*low ir|insulation test.*electronic loads connected/.test(
      text,
    )
  ) {
    return "An insulation test with electronic loads still connected cannot distinguish load impedance from damaged fixed wiring; isolate those loads and retest, recording FI when that defined investigation remains outstanding. Under A4:2026, FI is advisory and does not determine the overall assessment.";
  }
  if (/immersion-heater manufacturer|double-pole local isolation/.test(text)) {
    return "The required isolation must disconnect the conductors specified by the equipment manufacturer so maintenance cannot leave a hazardous conductor connected; the stated missing double-pole facility is therefore C2.";
  }
  if (/cable.*route cannot be verified|concealed cable's route/.test(text)) {
    return "Inaccessible routing is missing evidence, not proof of unsafe routing; it is recorded precisely as not verified or as a limitation unless a specific observed concern creates a defined need for FI.";
  }
  if (/mobility equipment|mobility-aid/.test(text)) {
    return "A socket intended to charge equipment regularly taken outdoors needs 30 mA RCD additional protection because the outdoor use increases shock risk; vulnerability alone is not the technical trigger.";
  }
  if (/pv dc isolator|alternative-source/.test(text)) {
    return "A functioning PV isolator still needs clear DC and alternative-source identification for safe operation and maintenance; missing labels alone are C3, while an incorrectly rated DC device would be a separate safety defect.";
  }
  if (/pme conditions.*no warning notice/.test(text)) {
    return "A PME warning notice helps later workers recognise the earthing arrangement and its special considerations; when the installation itself is sound, missing identification is a C3 improvement rather than present or potential danger.";
  }
  if (/dishwasher socket/.test(text)) {
    return "A new socket-outlet rated 32 A or less needs 30 mA RCD additional protection unless a permitted exception applies; describing the appliance as fixed does not remove the socket-outlet requirement.";
  }
  if (/previously been coded c2 and remediated/.test(text)) {
    return "Each EICR records the condition found on that inspection date; when a sound remedy has removed the earlier potential danger, the new report records the safe present condition rather than carrying the old C2 forward.";
  }

  if (
    /condition-assessed|condition-reported|periodic inspection/.test(text) &&
    /certification|correct paperwork|required/.test(text)
  ) {
    return "An EICR reports whether an existing fixed installation remains safe for continued use; installation certificates instead certify new work and portable-appliance records cover equipment rather than fixed wiring.";
  }
  if (/complete eicr document set/.test(text)) {
    return "A complete current model package contains the EICR, Schedule of Circuit Details, Schedule of Test Results and Schedule of Inspections, because the report needs both circuit data and the visual and measured evidence.";
  }
  if (
    /cannot be shut down|cannot be isolated|life-safety equipment|operational limitation|no-shutdown|mcc-3|theatre circuits/.test(
      text,
    )
  ) {
    return "An operational restriction identifies the exact circuits that could not be safely isolated or accessed, why they were omitted and what follow-up is needed; it does not certify the excluded equipment.";
  }
  if (/outside trading hours|out-of-hours visit/.test(text)) {
    return "Commercial access and isolation should be agreed before the visit so the planned dead inspection and testing can be completed safely; a precise limitation is used only for a genuine restriction that remains.";
  }
  if (
    /extent of installation covered|agreed limitations|outside the scope|tenant suite 4f|boiler-room circuits/.test(
      text,
    )
  ) {
    return "The extent says exactly what was inspected and tested, while a specific limitation records inaccessible or excluded work and prevents the report being read as evidence for parts that were not examined.";
  }
  if (
    /adding a new shower circuit|new circuit is then added|addition of a circuit/.test(
      text,
    )
  ) {
    return "A new circuit requires an Electrical Installation Certificate for its design, construction and initial verification; any simultaneous condition assessment of the older installation remains a separate EICR.";
  }
  if (/an eic requires.*test results/.test(text)) {
    return "An Electrical Installation Certificate uses inspection and test evidence to confirm that the new work complied with the applicable BS 7671 requirements when it was completed; it cannot promise future condition.";
  }
  if (
    /meiwc is appropriate|meiwc.*alteration|fused spur|additional socket|kitchen-circuit alteration|description of work/.test(
      text,
    )
  ) {
    return "A Minor Electrical Installation Works Certificate covers an addition or alteration that does not create a new circuit and records the work plus the relevant tests proving the affected circuit's protective measures remain effective.";
  }
  if (
    /overall outcome|overall result|overall assessment|present the result|overall:|one c2|c3 items|number of c3|many c3|one c3/.test(
      text,
    )
  ) {
    return "The A4:2026 model EICR is unsatisfactory only when C1 danger or C2 potential danger is identified. C3 and FI are advisory and do not affect that overall assessment, although both still deserve proper consideration.";
  }
  if (/different people|separate sign-offs/.test(text)) {
    return "Separate signatures make the people responsible for inspection, testing and the report traceable and accountable for the work each actually completed.";
  }
  if (
    /schedule of inspections/.test(text) &&
    /n\/a|don't apply|non-compliant|tick-box|primarily|item ✓/.test(text)
  ) {
    return "The Schedule of Inspections records visual checks accurately: N/A is used only where an item does not apply, an adverse finding is cross-referenced to its observation, and an unchecked item cannot be marked acceptable.";
  }
  if (
    /remedial work|written confirmation|further investigative work/.test(
      text,
    ) &&
    /landlord|privately rented|rented-sector/.test(text)
  ) {
    return "After work identified as necessary under the rented-sector regulations, a qualified person must provide written confirmation based on inspection and test evidence. That legal follow-up duty is separate from the A4:2026 rule that only C1 or C2 makes the overall EICR unsatisfactory.";
  }
  if (/sampl(?:e|ing)/.test(text)) {
    return "Sampling must be representative, agreed and recorded with its basis and limits; a repeated defect reduces confidence and requires the affected sample to be expanded rather than hidden behind a percentage.";
  }
  if (/back-date|date of inspection/.test(text)) {
    return "The actual inspection date anchors the report's evidence, remedial deadlines and next-inspection date; substituting an email, office or convenient date creates a false safety record.";
  }
  if (/reason for the report|post-incident|sale of property/.test(text)) {
    return "The reason records why the EICR was commissioned, while the agreed extent and limitations define what was actually examined; a sale or incident does not silently remove the standard schedules or shrink the declared scope.";
  }
  if (
    /recommended interval|inspection interval|maximum interval|next inspection|routine interval|maximum routine interval|default routine interval|condition-reported/.test(
      text,
    )
  ) {
    return "The inspector starts with the GN3 premises interval and adjusts it for condition, use, environment, maintenance and earlier findings; the client cannot extend a statutory maximum or substitute preference for engineering judgement.";
  }
  if (/photographs/.test(text)) {
    return "Photographs can make the location and condition of a defect clear, but the written observation and justified classification remain necessary and the EICR is valid without photographs.";
  }
  if (/departures from bs 7671/.test(text)) {
    return "A recorded departure is a technically justified alternative that provides at least the same degree of safety as BS 7671; it is not permission to leave an unsafe non-compliance in service.";
  }
  if (
    /responsible for acting|duty holder.*should|school eicr.*unsatisfactory|first thing.*c1|c1.*first thing|receives.*c1/.test(
      text,
    )
  ) {
    return "The inspector reports and immediately warns of danger, while the landlord, employer or other person controlling the installation must arrange and record the remedial action; C1 danger is controlled immediately.";
  }
  if (/pass.*no observations|suppressing observations/.test(text)) {
    return "An EICR is an evidence-based safety record, so every observed defect must be described and classified from its actual risk regardless of the outcome or price the client wants.";
  }
  if (/coded list|observations section|summary of the condition/.test(text)) {
    return "A defect belongs in the coded observations with a clear location, condition and risk, while the summary gives the duty holder a concise plain-language picture and the schedules hold supporting checks and readings.";
  }
  if (
    /small dwelling eicr with no observations|where the report finds nothing wrong/.test(
      text,
    )
  ) {
    return "A satisfactory EICR still needs its report, inspection and test schedules, signatures, dates and next-inspection recommendation because those records are the evidence that no reportable defect was found.";
  }
  if (/company contact details/.test(text)) {
    return "Current contact details make the signed report traceable for technical queries, audits and later reliance; they serve accountability rather than merely advertising the contractor.";
  }
  if (/local authority on request/.test(text)) {
    return "A covered landlord must give the local authority the report within seven days of a written request; the separate deadline for an existing tenant is 28 days.";
  }
  if (/existing tenant.*within/.test(text)) {
    return "A covered landlord must give an existing tenant the electrical safety report within 28 days of the inspection; a new tenant receives the valid report before occupation and a local authority receives it within seven days of a written request.";
  }
  if (
    /4 years and 11 months|at least every 5 years|new tenant.*latest eicr|18 months ago/.test(
      text,
    )
  ) {
    return "A valid satisfactory rented-sector report remains usable until its stated due date, subject to a five-year maximum; it is supplied to a new tenant before occupation and renewed sooner only when its date or new safety evidence requires it.";
  }
  if (/no eicr since.*2018|compliance position.*rented/.test(text)) {
    return "The rented-sector electrical duties extended to existing private tenancies in 2021 and require a valid inspection report at no more than five-year intervals, so a long-running tenancy is not exempt.";
  }
  if (
    /28 days from the inspection|timescale to complete|report says remedial or further investigative work/.test(
      text,
    )
  ) {
    return "In a covered rented home, remedial or further investigative work identified as necessary in the report is normally completed within 28 days of inspection or sooner when specified. C1 danger still needs immediate control; FI remains advisory to the EICR's overall A4:2026 assessment.";
  }
  if (/part p/.test(text)) {
    return "Part P notification applies to defined notifiable work such as a new circuit, consumer-unit replacement and specified work in prescribed bath, shower or pool zones; issuing an EIC alone does not decide notification.";
  }
  if (/older red\/black/.test(text)) {
    return "Older conductor colours remain acceptable in unchanged work; clear warning identification is needed where old and harmonised colour systems coexist so later workers do not misidentify conductors.";
  }
  if (/ratings.*bs en 60898|schedule of circuit details/.test(text)) {
    return "Protective-device standard, type and rating are circuit design details, while measured continuity, insulation, Zs and RCD operating time are test results; the current model forms keep those records distinct.";
  }
  if (/extension lead/.test(text)) {
    return "An extension lead is portable equipment outside the fixed-installation EICR; a visible trip or overload hazard may be warned about separately but does not become a coded fixed-wiring observation.";
  }
  if (/supply characteristics|tn-s earthing system/.test(text)) {
    return "The report's supply-characteristics section records the earthing arrangement and origin data that underpin fault-loop and protective-device assessment; a cover photograph or verbal note cannot replace it.";
  }
  if (/holiday let/.test(text)) {
    return "Commercial holiday accommodation remains subject to general electrical-safety, fire, licensing and local duties, while the rented-sector regime depends on whether the occupier uses it as their only or main home.";
  }

  return undefined;
}

function classificationReason(
  wrongOption: string,
  correctOption: string,
  fact: string,
): string | undefined {
  const wrong = resultClass(wrongOption);
  const correct = resultClass(correctOption);
  if (!["C1", "C2", "C3", "FI", "SAT", "UNSAT"].includes(wrong)) {
    return undefined;
  }

  if (wrong === "C1") {
    if (correct === "C2") {
      return `${fact} C1 would overstate the finding because no immediate route to injury is present; the failure becomes dangerous after a fault, which is C2.`;
    }
    if (correct === "C3") {
      return `${fact} C1 is for immediate injury risk, whereas the protective measures here remain effective and only a planned safety improvement is justified.`;
    }
    if (correct === "SAT") {
      return `${fact} No person is exposed to danger now, so C1 would create an immediate hazard that the actual electrical condition does not contain.`;
    }
    if (correct === "FI") {
      return `${fact} The defined investigation must establish whether danger exists before an immediate-danger classification can be supported.`;
    }
    return `${fact} C1 needs danger present now, such as accessible live parts or active arcing; age, missing records or a possible future fault is not enough.`;
  }
  if (wrong === "C2") {
    if (correct === "C1") {
      return `${fact} C2 would leave a present injury risk described only as future potential danger instead of triggering immediate make-safe action.`;
    }
    if (correct === "C3") {
      return `${fact} C2 requires a condition capable of becoming dangerous in a foreseeable event, but the existing protective measures remain effective here.`;
    }
    if (correct === "SAT") {
      return `${fact} The arrangement still provides the required electrical protection, so C2 would incorrectly turn a compliant or harmless condition into potential danger.`;
    }
    if (correct === "FI") {
      return `${fact} Potential danger has not yet been established; the specified investigation must separate a real installation fault from missing or distorted evidence.`;
    }
    return `${fact} C2 needs evidence of a foreseeable electrical danger, not appearance, inaccessible information or paperwork alone.`;
  }
  if (wrong === "C3") {
    if (correct === "C1") {
      return `${fact} C3 would treat immediate shock or fire danger as optional future improvement and could leave people exposed.`;
    }
    if (correct === "C2") {
      return `${fact} C3 would understate a failed protective measure that needs urgent remedy and makes the EICR unsatisfactory.`;
    }
    if (correct === "SAT") {
      return `${fact} C3 still claims that electrical safety should be improved, but no protective measure has been impaired in this condition.`;
    }
    if (correct === "FI") {
      return `${fact} Planned improvement assumes the risk is already understood; the defined possible danger instead needs investigation without delay.`;
    }
    return `${fact} C3 is used for a genuine safety improvement, not as a label for age, appearance or missing paperwork.`;
  }
  if (wrong === "FI") {
    if (["C1", "C2", "C3"].includes(correct)) {
      return `${fact} The condition and its risk are already established, so further investigation would delay a classification that can be made from the available evidence.`;
    }
    if (correct === "SAT") {
      return `${fact} FI needs a specific concern and a defined investigation; it is not a substitute for the satisfactory overall assessment and would add advice without an electrical reason here.`;
    }
    if (correct === "UNSAT") {
      return `${fact} FI is an advisory observation, not an overall assessment; the recorded C1 or C2 is what makes this report unsatisfactory.`;
    }
    return `${fact} FI needs a specific apparent concern and a clear investigation target; inaccessible evidence or general uncertainty alone is recorded as a limitation.`;
  }
  if (wrong === "SAT") {
    if (correct === "UNSAT") {
      return `${fact} The identified C1 or C2 condition makes the installation unsatisfactory for continued service and needs the corresponding immediate or urgent action.`;
    }
    if (correct === "C1") {
      return `${fact} Calling this satisfactory would leave an immediate danger unreported and uncontrolled.`;
    }
    if (correct === "C2") {
      return `${fact} A known protective failure capable of becoming dangerous cannot be left as satisfactory; it needs urgent remedy.`;
    }
    if (correct === "C3") {
      return `${fact} The report can remain satisfactory overall, but omitting C3 would lose a worthwhile safety improvement that should be recorded.`;
    }
    if (correct === "FI") {
      return `${fact} Satisfactory is the overall assessment, not a replacement for the FI observation; the defined investigation still needs to be recorded even though FI does not affect that assessment.`;
    }
  }
  if (wrong === "UNSAT" && (correct === "SAT" || correct === "C3")) {
    return `${fact} An unsatisfactory A4:2026 assessment needs at least one C1 or C2; C3 and FI are advisory, so neither makes the report unsatisfactory.`;
  }
  return undefined;
}

function numberReason(
  prompt: string,
  wrongOption: string,
  fact: string,
): string | undefined {
  const question = lower(prompt);
  const wrong = lower(wrongOption);

  if (/pfc value/.test(question)) {
    if (/average/.test(wrong)) {
      return `${fact} Averaging 1.42 kA and 1.18 kA would hide the worst fault level and could understate the breaking capacity required.`;
    }
    if (/1\.18/.test(wrong)) {
      return `${fact} The 1.18 kA earth-fault result is genuine but lower than the 1.42 kA line-neutral result, so it is not the maximum duty.`;
    }
    if (/0\.18/.test(wrong)) {
      return `${fact} The 0.18 Ω figure is external loop impedance, not fault current, and cannot be entered in a PFC field measured in kA.`;
    }
    return `${fact} A PFC entry must be a current value representing the greatest credible fault duty at that point.`;
  }
  if (/which value is ze/.test(question)) {
    if (/0\.09/.test(wrong)) {
      return `${fact} The 0.09 Ω result includes parallel bonding paths, so it understates the impedance of the external supply loop itself.`;
    }
    if (/average/.test(wrong)) {
      return `${fact} Averaging readings taken with and without a parallel path has no electrical meaning and does not isolate the external loop.`;
    }
    return `${fact} A controlled Ze measurement can be used when safe procedures are followed and every disconnected bonding conductor is restored and verified.`;
  }
  if (!/\d/.test(wrong)) return undefined;
  if (/b&b|hotel/.test(question)) {
    if (/^1 year/.test(wrong)) {
      return `${fact} A one-year interval belongs to higher-risk premises such as swimming pools or may follow severe findings, not an ordinary sound B&B by default.`;
    }
    if (/3 years/.test(wrong)) {
      return `${fact} Public occupancy does not by itself move a hotel from the normal five-year starting maximum to the three-year interval used for places such as theatres and leisure complexes.`;
    }
    return `${fact} Ten years is the normal owner-occupied domestic starting maximum and is too long for commercial guest accommodation.`;
  }
  if (/industrial premises/.test(question)) {
    return `${fact} Five years is a common commercial interval, ten years is the owner-occupied domestic starting point and construction sites need checks measured in months; industrial installations normally start at three years.`;
  }
  if (/normal gn3.*3 years/.test(question)) {
    if (/rented domestic/.test(wrong)) {
      return `${fact} Privately rented domestic accommodation is normally capped at five years, not assigned the industrial three-year starting interval.`;
    }
    if (/construction/.test(wrong)) {
      return `${fact} Temporary construction-site installations face rapid change and damage and therefore use a much shorter inspection period measured in months.`;
    }
    return `${fact} Owner-occupied domestic accommodation normally starts at ten years, so it is the longer residential case rather than the three-year premises type.`;
  }
  if (/local authority/.test(question)) {
    if (/24 hours/.test(wrong)) {
      return `${fact} The regulations do not impose a 24-hour turnaround for supplying the report to the authority.`;
    }
    if (/28 days/.test(wrong)) {
      return `${fact} Twenty-eight days is the separate deadline for giving the completed report to an existing tenant.`;
    }
    return `${fact} Six months would frustrate timely enforcement and is far beyond the seven-day statutory response period.`;
  }
  if (/existing tenant/.test(question)) {
    if (/7 days/.test(wrong)) {
      return `${fact} Seven days is the separate deadline for answering a written local-authority request, not for supplying an existing tenant.`;
    }
    return `${fact} Six months would withhold the report far beyond the existing tenant's 28-day entitlement and delay their knowledge of any electrical findings.`;
  }
  if (/new tenant.*latest eicr/.test(question)) {
    if (/28 days/.test(wrong)) {
      return `${fact} The 28-day supply period applies to an existing tenant after inspection; a new tenant must have the report before taking occupation.`;
    }
    return `${fact} A 12-month delay would leave the new tenant in occupation without the safety report they were entitled to receive beforehand.`;
  }
  if (
    /28 days|timescale to complete|report says remedial or further investigative work/.test(
      question,
    )
  ) {
    return `${fact} Twelve months exceeds the normal 28-day legal limit and would leave the identified remedial or investigative need unresolved for far too long.`;
  }
  if (/4 years and 11 months/.test(question)) {
    return `${fact} Waiting past the fifth anniversary creates a compliance gap; an MEIWC or appliance record cannot replace the installation condition report.`;
  }
  if (/commercial office|offices/.test(question)) {
    if (/10 years/.test(wrong)) {
      return `${fact} Ten years is the normal owner-occupied domestic starting maximum, not the commercial-office interval.`;
    }
    return `${fact} A one-year interval would need a specific high-risk condition or finding and is not the normal starting point for a sound small office.`;
  }
  if (/agricultural building/.test(question)) {
    if (/1 year/.test(wrong)) {
      return `${fact} One year may be justified for a particularly harsh or deteriorated area, but it is not the normal agricultural starting maximum.`;
    }
    return `${fact} Ten years is a low-risk owner-occupied domestic interval and is too long for the moisture, dust, livestock and mechanical influences typical of agricultural premises.`;
  }
  if (/ring final|figure-of-eight/.test(question)) {
    if (/r1 \+ r2|equal.*r1/.test(wrong)) {
      return `${fact} Directly adding r1 and r2 ignores the four-way division produced by the cross-connected parallel paths.`;
    }
    if (/r2 only/.test(wrong)) {
      return `${fact} The reading contains both line and protective-conductor resistance, so r2 alone cannot represent R1 + R2.`;
    }
    return `${fact} Neutral end-to-end resistance is checked in the ring test but does not replace r2 in the line-to-CPC cross-connection used for R1 + R2.`;
  }
  return undefined;
}

function documentReason(
  prompt: string,
  wrongOption: string,
  correctOption: string,
  fact: string,
): string | undefined {
  const question = lower(prompt);
  const choice = lower(wrongOption);

  if (/holiday let/.test(question)) {
    if (/part p/.test(choice)) {
      return `${fact} Part P controls the safety of electrical installation work in dwellings; it does not by itself cover the holiday operator's continuing duties for an installation in use.`;
    }
    if (/pat code/.test(choice)) {
      return `${fact} The PAT Code of Practice addresses in-service electrical equipment, whereas an EICR assesses the fixed wiring, distribution and protective measures of the premises.`;
    }
    if (/bs 7909/.test(choice)) {
      return `${fact} BS 7909 concerns temporary electrical systems for entertainment and similar events, not the normal fixed installation of commercial holiday accommodation.`;
    }
  }
  if (/no eicr since.*2018|compliance position.*rented/.test(question)) {
    if (/new tenancies/.test(choice)) {
      return `${fact} Existing private tenancies came into scope from April 2021, so the absence of a recent change of tenant does not preserve compliance.`;
    }
    if (/only required if asked/.test(choice)) {
      return `${fact} The landlord must arrange periodic inspection proactively; a tenant or council request is not the event that creates the duty.`;
    }
    return `${fact} Length of occupation increases the need to manage deterioration and does not suspend the five-year reporting requirement.`;
  }

  if (/operational vs agreed limitations/.test(question)) {
    if (/there is none/.test(choice)) {
      return `${fact} Operational constraints arise from running the installation, while agreed limitations define a negotiated inspection scope, so combining them hides why evidence is missing.`;
    }
    if (/operational limitations are illegal/.test(choice)) {
      return `${fact} A genuine inability to isolate critical equipment can be recorded lawfully when it is precise and followed by a safe plan to obtain the missing evidence.`;
    }
    return `${fact} A proportionate scope can be agreed and recorded, provided it remains sufficient for a meaningful report and does not disguise known danger.`;
  }

  if (/after a small fire|post-incident/.test(question)) {
    if (/routine/.test(choice)) {
      return `${fact} Calling the visit routine would hide the fire trigger and could lead a later reader to miss why the affected area and related circuits needed particular attention.`;
    }
    if (/change of tenancy/.test(choice)) {
      return `${fact} A tenancy change is a different commissioning reason and says nothing about the fire damage that shaped this inspection.`;
    }
  }

  if (/\(r1 \+ r2\) or r2.*continuity columns/.test(question)) {
    if (/phase-to-neutral/.test(choice)) {
      return `${fact} Phase-to-neutral resistance does not prove the protective-conductor path that automatic fault disconnection relies upon.`;
    }
    if (/earth fault loop|\bzs\b/.test(choice)) {
      return `${fact} Zs includes the external supply loop as well as the circuit conductors and belongs in its own loop-impedance column.`;
    }
    return `${fact} Insulation resistance measures leakage isolation in megohms and cannot replace a low-resistance conductor-continuity result.`;
  }
  if (/maximum permitted zs.*entry/.test(question)) {
    if (/measured on site/.test(choice)) {
      return `${fact} The site measurement belongs in the separate Zs test-result column and must be compared with, not substituted for, the permitted maximum.`;
    }
    if (/twice/.test(choice)) {
      return `${fact} Doubling the measured value invents a limit unrelated to the protective device's time-current characteristic and required disconnection time.`;
    }
    return `${fact} Without the maximum, a later reader cannot see whether the measured loop impedance supports automatic disconnection for that circuit.`;
  }
  if (/column for rcd test records/.test(question)) {
    if (/manufacturer/.test(choice)) {
      return `${fact} Manufacturer identity cannot demonstrate that the installed device operated within the required time when tested.`;
    }
    if (/whether it tripped/.test(choice)) {
      return `${fact} A yes-or-no entry hides whether operation took 20 ms or exceeded the 300 ms limit, so the measured time is essential.`;
    }
    return `${fact} Optional remarks cannot replace the dedicated numeric operating-time result on which compliance is judged.`;
  }

  if (/✓/.test(choice)) {
    return `${fact} A tick declares that an applicable item was inspected and found acceptable, so it cannot truthfully represent an item that was adverse, unverified or not applicable.`;
  }
  if (/✗/.test(choice)) {
    return `${fact} A cross records an adverse applicable finding and needs a matching observation; it would falsely turn a nonexistent item into a defect.`;
  }
  if (/erased from the form/.test(choice)) {
    return `${fact} Removing a model-form item destroys the distinction between not applicable, not verified and accidentally omitted evidence.`;
  }

  if (/excuses unrelated/.test(choice)) {
    return `${fact} Only a real access, safety or operational constraint belongs in the limitations record; unrelated excuses provide no usable boundary for the inspection evidence.`;
  }
  if (/blanket limitation/.test(choice)) {
    return `${fact} A limitation must identify a genuine remaining restriction; using one before attempting reasonable access planning creates avoidable gaps in the safety evidence.`;
  }
  if (/excuses for non-compliance/.test(choice)) {
    return `${fact} Simply naming a departure cannot legitimise reduced protection; the designer must demonstrate an alternative with at least equivalent safety.`;
  }
  if (/inspector is busy/.test(choice)) {
    return `${fact} Workload does not define a representative sample and cannot replace written agreement about what evidence the report will and will not provide.`;
  }
  if (/client doesn't notice/.test(choice)) {
    return `${fact} Hidden sampling makes the report claim more coverage than its evidence supports and prevents the duty holder from arranging work on the untested population.`;
  }
  if (/no sampling allowed/.test(choice)) {
    return `${fact} A properly chosen representative sample is legitimate for a population of genuinely similar machines and avoids unnecessary dismantling while still producing defensible evidence.`;
  }
  if (/only the smallest/.test(choice)) {
    return `${fact} Selecting by size alone can miss different loading, environment, age or maintenance conditions and does not form a representative sample of the machine population.`;
  }
  if (/only the rooms the buyer cares about/.test(choice)) {
    return `${fact} Buyer preference does not create a representative electrical scope and could leave safety-critical circuits or concealed common equipment unassessed.`;
  }
  if (/removes the need for any test results/.test(choice)) {
    return `${fact} Sampling reduces the population tested, not the need to record actual results for every selected circuit and safety-critical item.`;
  }
  if (/replaces the schedules/.test(choice)) {
    return `${fact} The schedules still identify the sampled circuits and their checks and readings; without them the sample produces no traceable evidence.`;
  }
  if (/chose not to look/.test(choice)) {
    return `${fact} Personal convenience is not a defensible operational limitation; the inspector must agree a safe scope or arrange the access needed for a meaningful report.`;
  }
  if (/working hours/.test(choice)) {
    return `${fact} Working hours can support planning, but they do not identify which electrical circuits were left unverified or why safe isolation was impossible.`;
  }
  const correct = lower(correctOption);

  if (/meiwc is appropriate/.test(question)) {
    if (/faceplate/.test(choice)) {
      return `${fact} A like-for-like faceplate replacement that does not alter the circuit is maintenance rather than the addition or alteration for which an MEIWC is designed.`;
    }
    if (/shower circuit/.test(choice)) {
      return `${fact} A brand-new shower circuit needs the full design, construction and initial-verification declarations of an EIC.`;
    }
    return `${fact} A periodic inspection assesses an existing installation and therefore produces an EICR, not a certificate for installation work.`;
  }
  if (/extension lead/.test(question)) {
    if (/eicr observation/.test(choice)) {
      return `${fact} A coded EICR observation would wrongly make portable equipment part of the fixed installation's satisfactory or unsatisfactory outcome.`;
    }
    if (/meiwc/.test(choice)) {
      return `${fact} No fixed circuit addition or alteration has been carried out, so there is no minor installation work to certify.`;
    }
    return `${fact} An EIC certifies new fixed installation work and has no role in recording how an occupant has placed a portable lead.`;
  }

  if (/complete eicr document set/.test(question)) {
    if (/eicr only/.test(choice)) {
      return `${fact} The headline report alone contains neither the circuit-by-circuit design data nor the visual and measured results that support its conclusion.`;
    }
    if (/pat register/.test(choice)) {
      return `${fact} A PAT register covers portable equipment and cannot replace the fixed installation's circuit, inspection and test schedules.`;
    }
    return `${fact} A design risk assessment may support decisions but does not record the completed visual checks, circuit details and numerical verification results.`;
  }
  if (/schedule of inspections.*primarily/.test(question)) {
    if (/financial/.test(choice)) {
      return `${fact} Pricing and payment belong in commercial records and provide no evidence that the model visual safety checks were completed.`;
    }
    if (/numerical/.test(choice)) {
      return `${fact} Continuity, insulation, Zs and RCD times belong on the test schedule, while the inspection schedule records observed compliance.`;
    }
    return `${fact} Photographs may support selected findings but cannot replace the complete model checklist of visual inspection items.`;
  }

  if (/\bpat\b|portable appliance/.test(choice)) {
    return `${fact} A portable-appliance record follows individual equipment, not the fixed circuits, distribution equipment and protective measures being assessed here.`;
  }
  if (/minor electrical|meiwc|minor works/.test(choice)) {
    if (/new circuit|shower circuit/.test(question)) {
      return `${fact} A Minor Works Certificate cannot certify a new circuit because it does not carry the full design, construction and initial-verification declaration required by an EIC.`;
    }
    if (/periodic|condition|eicr|report/.test(question)) {
      return `${fact} A Minor Works Certificate records qualifying work actually carried out; it cannot report the condition of an existing installation or replace an EICR.`;
    }
    return `${fact} A Minor Works Certificate is issued only for a qualifying addition or alteration actually carried out; it cannot document an access or operational restriction during inspection.`;
  }
  if (/electrical installation certificate|\beic\b/.test(choice)) {
    if (/both an eic|new circuit.*existing/.test(correct)) {
      return `${fact} An EIC alone certifies the new circuit but says nothing about the condition of the older installation that was separately inspected.`;
    }
    if (/condition|periodic|eicr/.test(question)) {
      return `${fact} An EIC certifies new design and construction; it cannot retrospectively declare an existing installation satisfactory after a condition assessment.`;
    }
    return `${fact} An EIC is issued for installation work and cannot replace the completed condition report and schedules that evidence a clean inspection.`;
  }
  if (/\beicr\b/.test(choice)) {
    if (
      /both an eic|new circuit/.test(correct) ||
      /new circuit|shower/.test(question)
    ) {
      return `${fact} An EICR reports existing condition but does not certify the design, construction and initial verification of the newly installed circuit.`;
    }
    if (/fused spur|alteration|additional socket/.test(question)) {
      return `${fact} A full condition report is disproportionate to certifying this defined alteration and does not replace the work certificate for what was changed.`;
    }
  }
  if (
    /schedule of inspections/.test(choice) &&
    /numerical|test result|rating|zs/.test(question)
  ) {
    return `${fact} The inspection schedule records visual checks, not circuit ratings or measured continuity, insulation and loop results.`;
  }
  if (
    /schedule of test results/.test(choice) &&
    /visual|tick-box|observation|coded/.test(question)
  ) {
    return `${fact} The test schedule holds measured values; it cannot replace the visual inspection checklist or the clear coded observation describing a defect and its risk.`;
  }
  if (/schedule of test results only/.test(choice)) {
    return `${fact} A reading alone does not tell the duty holder where the defect is, what condition was seen or what risk requires action, so the coded observation remains essential.`;
  }
  if (/schedule of inspections only/.test(choice)) {
    if (/bonding/.test(question)) {
      return `${fact} The inspection schedule can flag the adverse check, but a tick would claim acceptance and the schedule alone cannot replace the coded observation describing the missing bond and its risk.`;
    }
    return `${fact} The visual checklist cannot define which dead tests were omitted or explain the operational restriction, so the limitation must appear in the report's scope record.`;
  }
  if (/cover sheet only|cover photo/.test(choice)) {
    return `${fact} A cover entry or photograph cannot replace the dedicated field or schedule needed to make the scope, supply data or test evidence clear and traceable.`;
  }
  if (/photo|photographic/.test(choice)) {
    return `${fact} An image can support the evidence but cannot replace the written scope, visual checklist, measured values or coded description needed for a usable safety record.`;
  }
  return undefined;
}

function actionReason(
  prompt: string,
  wrongOption: string,
  fact: string,
): string | undefined {
  const question = lower(prompt);
  const choice = lower(wrongOption);

  if (/automatically fi instead of an overall assessment/.test(choice)) {
    return `${fact} FI belongs in the advisory observations; it cannot replace the separate satisfactory or unsatisfactory assessment required on the report.`;
  }
  if (/omit the fi/.test(choice)) {
    return `${fact} Advisory means FI does not change the overall assessment, not that it disappears; the defined concern and investigation still need a clear record.`;
  }
  if (/record no insulation resistance values/.test(choice)) {
    return `${fact} The measured values, reduced test voltage, connected-equipment constraint and test method are useful evidence and must be recorded rather than discarded.`;
  }
  if (/either c2 or c3.*installation's age/.test(choice)) {
    return `${fact} Age does not choose between C2 and C3; the foreseeable use and actual protective measures do, and the stated low-risk indoor use supports C3.`;
  }
  if (/either c1 or c2/.test(choice)) {
    return `${fact} The inspection has established that the metal is not live, so there is no present injury route to justify C1; the lost fault path has the defined C2 consequence.`;
  }
  if (/test (?:it )?live|live regardless/.test(choice)) {
    return `${fact} Keeping equipment running does not satisfy EAWR regulation 14; a shutdown should be planned, and any remaining live work needs separate legal justification and suitable precautions.`;
  }
  if (
    /skip|silently|left blank|erase|not at all|nothing|ignore|hide|no action/.test(
      choice,
    )
  ) {
    if (/hide/.test(choice)) {
      return `${fact} Concealing the report would withhold known electrical risk from the people responsible for immediate control, repair and future maintenance.`;
    }
    if (/not at all/.test(choice) && /bonding/.test(question)) {
      return `${fact} Leaving the missing bond out would hide a C2 touch-voltage risk and give the duty holder no traceable instruction for the urgent remedy.`;
    }
    if (/nothing/.test(choice) && /4 years and 11 months/.test(question)) {
      return `${fact} Doing nothing would let the five-year report expire and create a period with no current rented-sector inspection evidence.`;
    }
    if (/nothing/.test(choice) && /remedial work/.test(question)) {
      return `${fact} The original EICR records the defect, not its successful repair, so the landlord still needs qualified written confirmation of the completed work.`;
    }
    if (/ignore/.test(choice) || /silently/.test(choice)) {
      return `${fact} Unrecorded or ignored exclusions can be mistaken for inspected equipment, leaving the duty holder unaware of the exact access and follow-up still needed.`;
    }
    if (/left blank|erase/.test(choice)) {
      return `${fact} A blank or removed entry cannot distinguish an omission from a genuine limitation and makes the signed scope or evidence unreliable.`;
    }
    return `${fact} The identified condition or missing evidence still needs a truthful record and proportionate action; omission cannot remove the underlying electrical responsibility.`;
  }
  if (
    /guaranteed safe|deemed satisfactory|treat.*satisfactory|full coverage/.test(
      choice,
    )
  ) {
    return `${fact} Work excluded by a limitation has not produced evidence of safety, so the duty holder must arrange access rather than treating an unknown area as verified.`;
  }
  if (/excluded from the report/.test(choice)) {
    return `${fact} The added circuits are now part of the existing installation, so excluding them would leave the report's declared coverage incomplete and hide any present defect.`;
  }
  if (/free of charge|inspector will return/.test(choice)) {
    return `${fact} A limitation records missing coverage and the need for follow-up; it does not decide the commercial terms of a later visit or promise free work.`;
  }
  if (
    /client wants|set by the client|whatever the client|customer|fee is right|convenient/.test(
      choice,
    )
  ) {
    return `${fact} Client preference and payment cannot alter a technical result, legal deadline, truthful date or risk-based interval.`;
  }
  if (/verbal|invoice/.test(choice)) {
    if (/verbal/.test(choice)) {
      return `${fact} A conversation leaves no durable, qualified confirmation that the specified remedial or investigative work was verified as complete.`;
    }
    return `${fact} An invoice proves that someone charged for work, not that a qualified person inspected, tested and confirmed the electrical remedy.`;
  }
  if (/re-issue|reissue|old report/.test(choice)) {
    return `${fact} A report is the dated work of its signing inspector; the valid existing report is supplied as itself, while any genuinely new inspection produces a new evidence record.`;
  }
  if (/new eicr solely/.test(choice)) {
    return `${fact} A change of tenant does not cancel a satisfactory report that remains within its stated interval when no new condition concern has arisen.`;
  }
  if (/wait|next inspection|next tenancy|12 months|whenever/.test(choice)) {
    if (/next tenancy/.test(choice)) {
      return `${fact} The duty follows the dated report, so a change of occupier cannot postpone necessary work or leave the present tenant with the unresolved condition.`;
    }
    return `${fact} Deferral leaves the identified risk or statutory clock running and cannot replace the required immediate warning, urgent repair or timely renewal.`;
  }
  if (/on change of tenancy only/.test(choice)) {
    if (!/existing tenant/.test(question)) {
      return `${fact} Commercial installations still need a risk-based periodic interval even when the same occupier remains, because deterioration does not wait for a tenancy event.`;
    }
    return `${fact} An existing tenant's right to receive the completed report arises after the inspection and is not deferred until that tenancy ends.`;
  }
  if (/on request only/.test(choice)) {
    return `${fact} Preventive inspection is scheduled from deterioration risk and maintenance duties; waiting for a request can leave damage undiscovered until failure.`;
  }
  if (/when the tenant asks/.test(choice)) {
    return `${fact} The landlord must provide the report proactively before occupation, so the new tenant does not have to discover the entitlement and request it later.`;
  }
  if (/construction-site installations/.test(choice)) {
    return `${fact} Construction wiring changes rapidly and is exposed to damage, so its recommended inspection period is measured in months rather than the industrial three-year interval.`;
  }
  if (/less often than a domestic/.test(choice)) {
    return `${fact} Moisture, dust, livestock and mechanical damage accelerate deterioration, so agricultural wiring normally needs a shorter interval than a low-risk dwelling.`;
  }
  if (/only when something fails/.test(choice)) {
    return `${fact} Waiting for failure loses the preventive purpose of inspection and can leave damaged equipment in service until shock, fire or livestock risk has already developed.`;
  }
  if (/^never$/.test(choice)) {
    return `${fact} Agricultural installations deteriorate under harsh influences and remain subject to maintenance duties, so excluding them from periodic assessment would leave foreseeable hazards unmanaged.`;
  }
  if (/next-due date/.test(choice)) {
    return `${fact} The recommended future inspection date is calculated from the actual inspection and cannot be substituted for the date on which evidence was gathered.`;
  }
  if (/date the report was emailed/.test(choice)) {
    return `${fact} Email may occur days after site work, so using it would shift statutory and recommended intervals away from when the condition was actually observed.`;
  }
  if (/date.*created in the office/.test(choice)) {
    return `${fact} Office production is an administrative event and cannot replace the site date on which the signed inspection evidence was gathered.`;
  }
  if (/tenant/.test(choice) && /responsible for acting/.test(question)) {
    return `${fact} A tenant can report damage and cooperate with access, but the landlord retains the statutory duty to arrange the installation work and written confirmation.`;
  }
  if (/dno/.test(choice)) {
    return `${fact} The DNO deals with distributor-owned supply equipment and network faults, not the customer's certificates, EICR outcome or remedial programme.`;
  }
  if (/inspector/.test(choice) && /responsible for acting/.test(question)) {
    return `${fact} The inspector must warn and report accurately, but cannot take over the landlord's legal responsibility to commission and document the permanent remedy.`;
  }
  if (/office manager|ofsted/.test(choice)) {
    if (/office manager/.test(choice)) {
      return `${fact} An office manager cannot sign for inspection or testing they did not competently perform; each electrical role must remain attributable to its responsible person.`;
    }
    return `${fact} OFSTED may oversee education standards, but it neither carries out the electrical remedy nor replaces the school's employer or premises duty holder.`;
  }
  if (/one signature only/.test(choice)) {
    return `${fact} A single signature would blur who inspected, who tested and who accepted responsibility for compiling the report when those roles were performed by different people.`;
  }
  if (/regulation-by-regulation list/.test(choice)) {
    return `${fact} A bare list of regulation numbers does not tell a non-specialist what condition was found, why it matters or what should be prioritised.`;
  }
  if (/copy of the schedules/.test(choice)) {
    return `${fact} Repeating detailed rows gives no concise overview of the installation's condition or the actions that matter most to the duty holder.`;
  }
  if (/not be issued/.test(choice)) {
    return `${fact} Different competent people may perform the defined roles, so withholding the report is unnecessary when each person's responsibility is separately signed and traceable.`;
  }
  if (/refuse to inspect/.test(choice)) {
    return `${fact} The inspector can reject the requested dishonest outcome while still carrying out an independent inspection and reporting the real condition.`;
  }
  if (/refuse to sign/.test(choice)) {
    return `${fact} The inspector should sign the accurate satisfactory report and use its summary to explain the planned improvement case rather than withholding professional responsibility.`;
  }
  if (/refuse to issue the report/.test(choice)) {
    return `${fact} The installation can still be assessed and reported accurately because legacy conductor colours do not prevent inspection or make the report invalid.`;
  }
  if (/reason to refuse the certificate/.test(choice)) {
    return `${fact} Relevant tests on the affected circuit provide the evidence needed for the alteration, so absence of unrelated whole-installation testing does not invalidate the MEIWC.`;
  }
  if (/recod(?:e|ed) the entire installation/.test(choice)) {
    return `${fact} Wholesale recolouring or rewiring is unnecessary; clear boundary identification addresses mixed colours while actual defects are repaired on their own merits.`;
  }
  if (/^none$/.test(choice)) {
    return `${fact} An unearned acceptance mark can conceal an unsafe item and cause the duty holder or a later worker to rely on inspection evidence that was never obtained.`;
  }
  if (/paperwork inconvenience/.test(choice)) {
    return `${fact} The false mark changes the safety meaning of the report, so the problem is misleading technical evidence rather than administrative untidiness.`;
  }
  if (/saved time/.test(choice)) {
    return `${fact} Time saved by declaring an unchecked item acceptable transfers an unknown electrical risk to everyone who relies on the signed report.`;
  }
  if (/cannot be included/.test(choice)) {
    return `${fact} Supporting images may be attached when they help locate or understand a defect, provided the report still contains its required written evidence.`;
  }
  if (/replace.*written observations/.test(choice)) {
    return `${fact} A photograph cannot state the circuit, defect, classification and required action with the precision of a written observation.`;
  }
  if (/make the report invalid/.test(choice)) {
    return `${fact} Relevant supporting photographs do not invalidate the model report; they simply supplement its mandatory written and scheduled information.`;
  }
  if (/cancel the report/.test(choice)) {
    return `${fact} The completed work remains useful when its limitation is honest and the remaining scope is meaningful; the missing suite needs planned follow-up rather than destruction of the report.`;
  }
  if (/marketing|sales material|mood|complaints|dno's reference/.test(choice)) {
    if (/mood/.test(choice)) {
      return `${fact} Personal feelings have no bearing on why the installation was examined and would make the field useless to a later inspector.`;
    }
    if (/marketing|sales material/.test(choice)) {
      return `${fact} Promotional notes do not explain the inspection trigger or help a later reader understand the report's purpose and scope.`;
    }
    if (/complaints/.test(choice)) {
      return `${fact} Client complaints are managed separately and do not constitute a technical safety justification for a recorded departure.`;
    }
    return `${fact} A network reference belongs with supply correspondence, not the field explaining why this condition report was commissioned.`;
  }
  if (/always claim|single sample|whole-installation coverage/.test(choice)) {
    if (/single sample/.test(choice)) {
      return `${fact} One circuit cannot represent a complex hospital by default; the sample must cover meaningful populations and expand when findings reduce confidence.`;
    }
    return `${fact} Claiming whole-installation coverage makes later readers rely on safety evidence that was never obtained for the excluded areas.`;
  }
  if (/pending|conditional/.test(choice)) {
    if (/pending/.test(choice)) {
      return `${fact} Pending is not a model overall assessment; the report must state satisfactory or unsatisfactory now from whether C1 or C2 has been identified.`;
    }
    return `${fact} Conditional is not a model overall assessment; later work is documented separately and does not replace the present result based on C1 and C2 findings.`;
  }
  if (
    /automatically unsatisfactory|unsatisfactory automatically/.test(choice) &&
    /limitation|outside scope|coverage/.test(question)
  ) {
    return `${fact} A genuine recorded limitation describes missing evidence but does not itself create a C1 or C2 finding; the overall result follows actual observations within a still-meaningful scope.`;
  }
  if (/every circuit|entire dwelling|entire building/.test(choice)) {
    if (/switch off the entire dwelling/.test(choice)) {
      return `${fact} Isolation should remove the specific C1 danger with the smallest reliable outage; shutting the whole dwelling is necessary only when selective isolation cannot make it safe.`;
    }
    if (/full inspection/.test(choice)) {
      return `${fact} Inspecting the whole dwelling would turn a limited work-certificate exercise into a separate condition survey without improving verification of this fused spur.`;
    }
    if (/schedule of test results/.test(choice)) {
      return `${fact} Results for unrelated circuits add no evidence about the altered ring final and belong only in a separately commissioned wider inspection.`;
    }
    return `${fact} Testing is proportionate to the certificate's scope: the affected circuit is verified for minor work, while a separate EICR covers the wider existing installation.`;
  }
  if (
    /only the new accessory|just a description|description of the new/.test(
      choice,
    )
  ) {
    return `${fact} The connection depends on the parent circuit's earthing, polarity, loop impedance and protective device, so describing hardware without relevant test evidence cannot demonstrate safety.`;
  }
  if (/^vague/.test(choice)) {
    return `${fact} A generic phrase cannot identify the altered circuit, location or new connection, leaving future inspection and fault-finding unable to match the certificate to the work.`;
  }
  if (/without any tests|no tests at all/.test(choice)) {
    return `${fact} Without relevant polarity, continuity, insulation, loop and RCD checks, the signer has no evidence that the alteration or its parent circuit remains safe.`;
  }
  if (
    /future eicr|used for at least 12 months|12 months of use|future maintenance/.test(
      choice,
    )
  ) {
    if (/future eicr/.test(choice)) {
      return `${fact} Initial verification cannot guarantee how the installation will deteriorate or be altered before a later condition report.`;
    }
    if (/future maintenance/.test(choice)) {
      return `${fact} Certification confirms safe completion but does not remove the owner's continuing need to maintain the installation against wear, damage and changed use.`;
    }
    return `${fact} Delaying certification for a year would leave new work without its required completion evidence and says nothing extra about compliance on the installation date.`;
  }
  if (/whole.*shut|switch off the entire/.test(choice)) {
    return `${fact} Isolate the smallest affected part that reliably removes danger; a whole-site shutdown is necessary only when selective isolation cannot make the installation safe.`;
  }
  if (/n\/a/.test(choice)) {
    return `${fact} N/A means the item genuinely does not exist or apply, not that an applicable circuit, defect or missing check can be discarded.`;
  }
  if (/optional/.test(choice)) {
    return `${fact} Leaving the required field or evidence out would prevent the report from showing the installation data, work or judgement on which others must rely.`;
  }
  if (/always|never|in every case|regardless/.test(choice)) {
    if (/always 5 years/.test(choice)) {
      return `${fact} Five years is a common commercial starting maximum, but deterioration, harsh use or a legal requirement can require an earlier inspection.`;
    }
    if (/always 1 year/.test(choice)) {
      return `${fact} One year is justified for particular high-risk premises or findings, not imposed on every sound retail installation.`;
    }
    return `${fact} Electrical risk changes with the actual protective measures, location, use and condition, so a blanket result would misclassify installations with materially different hazards.`;
  }
  return undefined;
}

function rationaleFor(
  question: ExamQuestion,
  choice: ExamChoice,
): string | undefined {
  const wrongOption = clean(question.options[choice]);
  const correctOption = clean(question.options[question.answer]);
  const fact = technicalFact(question.prompt);
  if (!fact) return undefined;

  const reason =
    classificationReason(wrongOption, correctOption, fact) ??
    numberReason(question.prompt, wrongOption, fact) ??
    documentReason(question.prompt, wrongOption, correctOption, fact) ??
    actionReason(question.prompt, wrongOption, fact);
  return reason ? clean(reason) : undefined;
}

function sourceUrlsFor(question: ExamQuestion): readonly string[] {
  const text = lower(`${question.prompt} ${question.explanation}`);
  const urls = new Set<string>([
    IET_CURRENT_EDITION,
    IET_MODEL_FORMS,
    IET_MODEL_EICR,
    IET_INSPECTION_FAQ,
  ]);
  if (/c1|c2|c3|\bfi\b|code|classification|satisfactory/.test(text)) {
    urls.add(ESF_BPG4);
    urls.add(IET_EICR_MYTHS);
  }
  if (/rcd|rcbo|iδn|5×/.test(text)) urls.add(IET_RCD_TESTING);
  if (/ring final|figure-of-eight|\br1\b|\br2\b/.test(text)) {
    urls.add(IET_RING_TESTING);
  }
  if (/landlord|tenant|rented|28 days|7 days/.test(text)) {
    urls.add(GOV_RENTED_SECTOR);
  }
  if (/live work|isolation|duty holder|school|factory|workplace/.test(text)) {
    urls.add(HSE_EAWR);
    urls.add(HSE_HSG85);
  }
  if (/part p|building regulations/.test(text)) urls.add(GOV_PART_P);
  return [...urls];
}

function targetQuestions(): ScopedQuestion[] {
  return enhancedPeriodicInspection.sections
    .filter((section) => TARGET_SECTION_IDS.has(section.id))
    .flatMap((section) =>
      section.variants
        .filter((variant) => variant.id !== "v6")
        .flatMap((variant) =>
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

function buildPeriodicInspectionEicrPart1() {
  const questions = targetQuestions().map(reviewed);
  if (questions.length !== 168) {
    throw new Error(
      `Periodic Inspection EICR Part 1 must cover 168 questions; found ${questions.length}`,
    );
  }
  const rationales = questions.flatMap((entry) =>
    Object.values(entry.rationales),
  );
  if (rationales.length !== 504) {
    throw new Error(
      `Periodic Inspection EICR Part 1 must contain 504 rationales; found ${rationales.length}`,
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
      `Periodic Inspection EICR Part 1 rationales must be globally unique; found ${rationales.length - new Set(rationales).size} duplicate(s):\n${duplicateDetails.join("\n")}`,
    );
  }
  const generic = rationales.find((reason) =>
    /unsupported|does not fit|doesn't fit|applicable answer|because it is wrong|the correct answer is|the (?:stem|option|question) (?:says|states)|absolute wording|this option|wrong feature|choosing\b/i.test(
      reason,
    ),
  );
  if (generic) {
    throw new Error(
      `Periodic Inspection EICR Part 1 contains generic or learner-facing meta text: ${generic}`,
    );
  }
  const malformed = rationales.find(
    (reason) =>
      reason.length < 70 ||
      /…|\.\.\.|\s{2,}/.test(reason) ||
      !/[.!?]$/.test(reason),
  );
  if (malformed) {
    throw new Error(
      `Periodic Inspection EICR Part 1 contains a short, truncated or malformed rationale: ${malformed}`,
    );
  }
  return questions;
}

export const periodicInspectionEicrPart1 = buildPeriodicInspectionEicrPart1();
