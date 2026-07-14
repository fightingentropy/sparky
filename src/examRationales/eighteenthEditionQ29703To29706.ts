import eighteenthEditionData from "../exam-data/18th-edition.json";
import { applyExamExplanationEnhancements } from "../examExplanationEnhancements";
import type { Exam, ExamChoice, ExamQuestion } from "../exams/types";
import { buildReviewedPart1Sets } from "./eighteenthEditionPart1Helpers";

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
const IET_SPD =
  "https://electrical.theiet.org/wiring-matters/years/2023/98-november-2023/surge-protective-devices-spds/";
const IET_ISOLATION =
  "https://electrical.theiet.org/wiring-matters/years/2023/94-march-2023/isolation-and-switching-for-mechanical-maintenance/";
const IET_SPECIAL_LOCATIONS =
  "https://electrical.theiet.org/media/1605/protective-measures-special-installations-or-locations-part-1.pdf";
const IET_BURIED_CABLES =
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

function sourceUrlsFor(question: ExamQuestion): readonly string[] {
  const text = `${question.prompt} ${Object.values(question.options).join(" ")}`;
  if (/electricity at work|statutory|legal|regulation 14/i.test(text)) {
    return [HSE_EAWR];
  }
  if (/medical|patient|group [012]/i.test(text)) return [IET_MEDICAL];
  if (/surge|transient|overvoltage|\bspd\b/i.test(text)) return [IET_SPD];
  if (/\brcd\b|residual current|socket-outlet/i.test(text)) {
    return [IET_RCD, IET_SOCKET_RCD];
  }
  if (/fire|afdd|temperature|thermal|combust/i.test(text)) return [IET_FIRE];
  if (/isolation|isolator|switching|firefighter/i.test(text)) {
    return [IET_ISOLATION];
  }
  if (
    /bath|shower|swimming|pool|sauna|caravan|agricultural|construction site/i.test(
      text,
    )
  ) {
    return [IET_SPECIAL_LOCATIONS];
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

function reviewed(
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
    if (reason.length < 24 || /…|\.\.\./.test(reason)) {
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
    sourceUrls: sourceUrlsFor(question),
  };
}

export const eighteenthEditionQ29703To29706 = [
  reviewed("quiz-29703", 1, [
    "Shipboard equipment covered by its own marine standard is outside the normal scope of BS 7671.",
    "Mine and quarry aspects governed by specific statutory requirements are excluded from this installation standard.",
    "Railway traction, rolling stock and signalling use specialist rules rather than the general BS 7671 scope.",
  ]),
  reviewed("quiz-29703", 2, [
    "An installation method is selected for the new work; it does not establish whether existing equipment can safely accept the addition.",
    "Cable-run length affects the new circuit calculations but does not prove the rating and condition of equipment already installed.",
    "Programme and site access are project-management matters, not the electrical compatibility check required before an alteration.",
  ]),
  reviewed("quiz-29703", 3, [
    "The number of socket-outlets is developed from the load and use requirements after the supply characteristics are known.",
    "Proximity of people is an external-influence and utilisation issue, not a characteristic of the incoming supply.",
    "Distribution-cable installation is a design choice; it cannot tell the designer whether the source supplies AC or DC.",
  ]),
  reviewed("quiz-29703", 4, [
    "Chapter 25 falls within definitions and general principles rather than the periodic-verification requirements.",
    "Chapter 35 does not contain the requirements governing periodic inspection of an existing installation.",
    "Chapter 55 covers other equipment matters, whereas periodic verification is set out in Chapter 65.",
  ]),
  reviewed("quiz-29703", 5, [
    "Competence is a broad capability concept; the BS 7671 definition requested here is specifically a skilled person electrically.",
    "Technical person is not the defined BS 7671 category for someone able to avoid electrical dangers independently.",
    "An instructed person has been adequately advised or supervised but does not necessarily possess the skilled person's own expertise.",
  ]),
  reviewed("quiz-29703", 6, [
    "Earth-fault current flows because of an insulation fault to Earth; it is not defined by current passing through a body.",
    "Earth-leakage current can flow in normal operation through insulation or capacitance without producing the described bodily shock.",
    "Short-circuit current follows an unintended low-impedance path between live conductors, not necessarily through a person or animal.",
  ]),
  reviewed("quiz-29703", 7, [
    "An IT source is isolated from Earth or connected through a high impedance, unlike the directly earthed source described.",
    "PME is a TN-C-S arrangement in which the supply PEN is multiply earthed; the installation does not use an independent TT electrode arrangement.",
    "TN-S keeps neutral and protective conductors separate but connects exposed-conductive-parts back to the source earth.",
  ]),
  reviewed("quiz-29703", 8, [
    "Maximum demand sizes the supply and equipment; by itself it does not coordinate devices so one fault leaves other circuits available.",
    "Future containment capacity helps later expansion but does not provide protective-device selectivity during a present fault.",
    "A wiring-system type must suit its environment, yet continuity depends on how protective devices and supplies are coordinated.",
  ]),
  reviewed("quiz-29703", 9, [
    "Accessibility needs influence equipment and controls, but this option is not the circuit-division objective being tested.",
    "Circuit division cannot remove the requirement for earth-fault protection; every affected circuit still needs an effective protective measure.",
    "De-energising a circuit intended to be isolated is the purpose of isolation, not an outcome that circuit division should prevent.",
  ]),
  reviewed("quiz-29703", 10, [
    "Data cabling is only one part of an installation and cannot stand in for the EMC obligations on every item of electrical equipment.",
    "Life-support equipment needs particularly careful EMC control, but the requirement is not limited to that specialist category.",
    "Sockets and switches are a small equipment subset; limiting compliance to them would leave active equipment and wiring interfaces unchecked.",
  ]),
  reviewed("quiz-29703", 11, [
    "An IT system has no direct source-earth connection or uses a high impedance, so this cable-sheath return description does not define it.",
    "PME uses a combined PEN in the supply and separate protective and neutral conductors in the installation, rather than the stated TN-S arrangement.",
    "A TT installation connects exposed-conductive-parts to a local electrode independent of the source electrode, not through the supply cable covering.",
  ]),
  reviewed("quiz-29703", 12, [
    "An independent generating set can maintain a safety service when the normal supply fails, so it is a valid safety source.",
    "Correctly selected primary cells store energy independently of the DNO supply and can serve the required safety load.",
    "Storage batteries provide an independent reserve source and are commonly used for safety services such as emergency lighting.",
  ]),
  reviewed("quiz-29703", 13, [
    "Requirements for parallel conductors belong with wiring-system selection and current-sharing design, not the additional Chapter 41 subject asked here.",
    "Selection and erection of wiring systems is principally a Chapter 52 matter rather than the coordination of shock-protection measures.",
    "Conductor colour identification is addressed in Section 514 and does not describe Chapter 41's treatment of external influences.",
  ]),
  reviewed("quiz-29703", 14, [
    "A 100 mA RCD is too insensitive to qualify as the 30 mA additional protection specified for electric-shock risk.",
    "Thirty-two amperes is a load-current rating, not a rated residual operating current for additional protection.",
    "A 50 mA residual rating exceeds the permitted 30 mA ceiling and therefore does not provide the specified additional protection.",
  ]),
  reviewed("quiz-29703", 15, [
    "Local bathroom pipework that cannot introduce an external potential is not automatically a main-bonding connection at the origin.",
    "An insulating section at entry prevents the external metal pipe from introducing Earth potential, so main bonding is not established by this description.",
    "A radiator is normally part of the building's internal services and is not automatically an extraneous-conductive-part requiring main bonding.",
  ]),
  reviewed("quiz-29703", 16, [
    "A passive capacitor can affect power factor or filtering, but it does not synthesize AC through rapid semiconductor switching.",
    "An incandescent lamp is mainly a resistive load and does not create the high-frequency switching edges characteristic of an inverter.",
    "A correctly arranged busbar distributes power without performing the DC-to-AC switching conversion described in the question.",
  ]),
  reviewed("quiz-29703", 17, [
    "1.04 ohms is more restrictive than the listed five-second limit and therefore is not the maximum value requested.",
    "1.51 ohms remains below the applicable 2.51-ohm boundary, so it cannot be the table's maximum permitted value.",
    "1.67 ohms is also below the stated five-second limit and would unnecessarily reject compliant loop-impedance results.",
  ]),
  reviewed("quiz-29703", 18, [
    "A sports venue may admit the general public, so its use does not establish the controlled access these measures require.",
    "Ordinary people without electrical instruction may deliberately bypass an obstacle and cannot rely on this restricted basic-protection measure.",
    "An instructed person alone is insufficient unless acting under the supervision of a skilled person in the controlled installation.",
  ]),
  reviewed("quiz-29703", 19, [
    "IP2X is the normal enclosure minimum elsewhere, but a readily accessible horizontal top needs the finer IP4X protection.",
    "IP65 adds dust-tight and water-jet protection that the question does not require, so it is not the minimum degree asked for.",
    "IP3X still permits access by a larger probe than IP4X and is insufficient for the accessible horizontal top surface.",
  ]),
  reviewed("quiz-29703", 20, [
    "A maximum-demand assessment establishes loading, not whether omitting life-safety RCD additional protection is acceptable.",
    "An as-fitted drawing records the arrangement but does not evaluate the likelihood and consequences of electric shock.",
    "A disclaimer cannot transfer away the designer's safety duties or replace a documented electrical risk assessment.",
  ]),
  reviewed("quiz-29703", 21, [
    "Prospective short-circuit current concerns fault-breaking capacity and is not the decision threshold for omitting surge protection.",
    "A dwelling is not automatically exempt; the owner must make and record the specified tolerability decision where omission is allowed.",
    "One quiet year of local lightning history does not establish tolerable equipment, data or financial consequences over the installation's life.",
  ]),
  reviewed("quiz-29703", 22, [
    "IT and TT systems do not contain a supply PEN conductor, so they are not the pair governed by this prohibition.",
    "An IT system keeps its source isolated or impedance-earthed and therefore has no PEN conductor to leave unswitched.",
    "TT has separate neutral and protective arrangements; pairing it with TN-C misses the TN-C-S system that also uses a supply PEN.",
  ]),
  reviewed("quiz-29703", 23, [
    "Neutral-only switching can leave line conductors energised, so it cannot remove the electric-shock hazard in one action.",
    "Opening a circuit protective conductor would remove the safety path while live conductors could remain energised.",
    "A functional earthing conductor serves operational purposes and is not a substitute for disconnecting every live conductor.",
  ]),
  reviewed("quiz-29703", 24, [
    "100 square millimetres is above the stipulated minimum, so it may be adequate but is not the minimum size requested.",
    "25 square millimetres is below the minimum for the stated 200 A-per-phase busbar arrangement.",
    "35 square millimetres also falls short of the 50-square-millimetre minimum protective busbar cross-section.",
  ]),
  reviewed("quiz-29703", 25, [
    "A bridge rectifier changes waveform and can itself create harmonics; it does not reinforce the cable screen's return path.",
    "Larger live conductors do not provide a low-impedance parallel path for common-mode current around an inadequate screen.",
    "Partly surrounding the route with unbonded containment creates no continuous controlled screen and can worsen coupling.",
  ]),
  reviewed("quiz-29703", 26, [
    "Ship circuits are outside the normal installation scope and AFDDs are not universally mandated for every circuit on a vessel.",
    "Radio-interference suppression is an EMC function, not one of the premises categories where Regulation 421.1.7 mandates AFDDs.",
    "Electric-fence circuits follow their specialist product and installation rules and are not the defined residential AFDD category.",
  ]),
  reviewed("quiz-29703", 27, [
    "0.07 seconds is shorter than the Table 41.1 maximum for the stated 230 V TT final circuit.",
    "0.4 seconds is the corresponding TN final-circuit value at 230 V, not the TT limit asked for.",
    "Thirty milliseconds is not the Table 41.1 TT disconnection boundary and confuses a time value with very rapid device operation.",
  ]),
  reviewed("quiz-29703", 28, [
    "A connection in a roof void still needs access unless it uses a recognised maintenance-free or encapsulated construction.",
    "Floor concealment alone does not create an exception; a conventional connection remains accessible for inspection and testing.",
    "A lightning-protection joint is not automatically exempt merely because of its intended system; the construction and location determine access.",
  ]),
  reviewed("quiz-29703", 29, [
    "Cream is not a recognised protective or neutral conductor colour in the BS 7671 identification scheme.",
    "Green-and-yellow alone shows a protective function but omits the blue termination marking needed for the PEN neutral function.",
    "Single green is prohibited for conductor identification and also fails to show either required PEN colour arrangement.",
  ]),
  reviewed("quiz-29703", 30, [
    "An individual insulated conductor cannot be left unidentified because its function must remain clear throughout installation and maintenance.",
    "A switched-line core needs the prescribed line identification at its accessible terminations; being used for switching creates no blanket exemption.",
    "Live conductors in a two-wire DC circuit require the applicable polarity identification rather than being left unmarked.",
  ]),
  reviewed("quiz-29703", 31, [
    "A factor of 0.51 applies to a more severe thermal-insulation condition than the stated 200 mm contact length.",
    "A factor of 0.78 would allow more current than the 200 mm insulation arrangement permits and risks overheating.",
    "A factor of 0.88 gives too little derating for this degree of contact with thermal insulation.",
  ]),
  reviewed("quiz-29703", 32, [
    "Accessibility determines whether a connection can be inspected, but it is not a physical characteristic of the conductor entering the terminal.",
    "Ambient temperature affects equipment selection generally; the specific terminal check here is compatibility with conductor cross-sectional area.",
    "Circuit voltage sets insulation and equipment ratings, not whether the terminal can securely accommodate the conductor size.",
  ]),
  reviewed("quiz-29703", 33, [
    "BS 1362 specifies domestic plug fuse-links and does not govern generating sets supplying safety services.",
    "BS 3036 covers semi-enclosed fuses, not the design and performance of an emergency generating set.",
    "Building control recommendations cannot replace the dedicated generating-set product standard required for this safety source.",
  ]),
  reviewed("quiz-29703", 34, [
    "Calculations remain necessary but do not replace Section 528's segregation and compatibility requirements for shared containment.",
    "Secure support is a general erection duty and does not establish that circuits of different bands may share one enclosure.",
    "Matching insulation type alone does not address voltage bands, interference or separation between circuits in shared containment.",
  ]),
  reviewed("quiz-29703", 35, [
    "PVC conduit without metallic fixings can soften and release cables during a fire, so it cannot be the sole anti-collapse support.",
    "Plastic cable ties lose strength at elevated temperature and cannot alone prevent premature cable collapse.",
    "PVC trunking and its plastic lid may fail in heat unless independent non-combustible supports retain the wiring.",
  ]),
  reviewed("quiz-29703", 36, [
    "Avoiding direct clipping does not protect exposed cable surfaces or equipment from the corrosive substance itself.",
    "A warning sign alerts people but creates no physical or chemical barrier against ongoing corrosion.",
    "Viscose insulation is not a recognised general corrosion-control measure and may itself be unsuitable for the environment.",
  ]),
  reviewed("quiz-29703", 37, [
    "BS 5839 concerns fire detection and alarm systems, a different life-safety system from emergency illumination.",
    "Client criteria can supplement the design brief but cannot replace the applicable emergency-lighting performance standard.",
    "Building control may enforce requirements, yet its project comments are not the technical emergency-lighting standard named here.",
  ]),
  reviewed("quiz-29703", 38, [
    "A risk assessment does not disconnect a shared-neutral polyphase lighting group or prevent dangerous backfeed during isolation.",
    "Double insulation of wiring does not ensure that every associated line conductor is isolated together from the common neutral arrangement.",
    "Steel containment provides mechanical protection and an earthing path but cannot perform the required linked disconnection.",
  ]),
  reviewed("quiz-29703", 39, [
    "A compliant batten lampholder is a recognised fixed-wiring termination for a suitable luminaire arrangement.",
    "A ceiling rose to its applicable standard is an established method of terminating fixed lighting wiring.",
    "A BS EN 61535 installation coupler is specifically intended to make a compliant pluggable fixed-installation connection.",
  ]),
  reviewed("quiz-29703", 40, [
    "16 square millimetres exceeds the stated minimum, so it may be usable but is not the minimum cross-section requested.",
    "2.5 square millimetres is far below the minimum steel cross-section even with both forms of protection present.",
    "4 square millimetres remains too small for a buried steel earthing conductor in the stated protected condition.",
  ]),
  reviewed("quiz-29703", 41, [
    "A universal 1.75 m maximum is not the firefighter-switch rule; the device may be mounted higher within its stated limit.",
    "BS EN 1362 does not specify firefighter switches, so citing it cannot establish the required emergency control arrangement.",
    "Accessible-building guidance does not replace BS 7671's specific visibility, access, marking and switching requirements.",
  ]),
  reviewed("quiz-29703", 42, [
    "Erection methods can be assessed visually to confirm that wiring systems and equipment are suitably installed.",
    "Conductor identification is a visual inspection item because colours, labels and terminal markings can be checked directly.",
    "Required diagrams and instructions are confirmed by inspection of the documentation made available with the installation.",
  ]),
  reviewed("quiz-29703", 43, [
    "An EICR reports the condition of an existing installation and is not the completion certificate for this small alteration.",
    "Electrical Installation Short Form Certificate is not a BS 7671 model certificate for minor installation work.",
    "Periodic Inspection Certificate is obsolete terminology and would not certify the design, construction and testing of the alteration.",
  ]),
  reviewed("quiz-29703", 44, [
    "Client discussion may define the work but cannot prove that the protective conductor path is continuous before a live loop test.",
    "Injecting high current into extraneous metalwork is not the preliminary safety check and could create a dangerous condition.",
    "The loop-impedance measurement needs an energised supply, so safe isolation is not the test that immediately establishes the path first.",
  ]),
  reviewed("quiz-29703", 45, [
    "2 megaohms exceeds the specified minimum; it is a good result but not the threshold value requested.",
    "A reading above 299 megaohms is far higher than necessary and is not the minimum acceptance boundary.",
    "A reading above 300 megaohms likewise describes an excellent result rather than the minimum required insulation resistance.",
  ]),
  reviewed("quiz-29703", 46, [
    "BS 7672 is not the construction-site assembly standard and cannot verify the switchgear assembly's site performance.",
    "BS EN 721786 is not a recognised standard for assemblies used on construction and demolition sites.",
    "The On-Site Guide explains BS 7671 application but is not the product standard to which the assembly must conform.",
  ]),
  reviewed("quiz-29703", 47, [
    "IP68 is a much higher dust and immersion classification, so it is not the minimum water-ingress degree requested.",
    "IP65 adds dust-tight and water-jet performance beyond the IPX4 minimum and therefore is not the boundary asked for.",
    "IPXX2 is malformed and, even read as an access classification, does not state protection against splashing water.",
  ]),
  reviewed("quiz-29703", 48, [
    "100 mm is above the required air gap and may be safer, but it is not the minimum separation asked for.",
    "125 mm also exceeds the stated minimum by a large margin and does not identify the regulatory boundary.",
    "50 mm is greater than necessary and therefore cannot be the minimum value among the listed clearances.",
  ]),
  reviewed("quiz-29703", 49, [
    "Mineral-insulated metal-sheathed cable is relatively rigid and is unsuitable for repeated movement of a floating landing stage.",
    "The cited BS 45890 multicore description does not identify a recognised flexible protected cable for this moving application.",
    "SY control cable is not generally accepted as a substitute for a suitably covered armoured power cable in this exposed location.",
  ]),
  reviewed("quiz-29703", 50, [
    "100 mA is below the allowed maximum and may be selected for coordination, but it is not the maximum rating requested.",
    "30 mA is commonly used for final socket-outlet protection, yet it is below the 300 mA origin-protection ceiling asked about.",
    "32 A is a load-current value rather than a rated residual operating current and cannot answer an RCD sensitivity question.",
  ]),
  reviewed("quiz-29703", 51, [
    "One metre greatly exceeds the defined 0.1 m height of zone 0 for a shower without a basin.",
    "Ten millimetres is only 0.01 m and therefore does not reach the specified zone 0 height.",
    "Fifty millimetres is half the required 0.1 m height and leaves part of the defined water-risk area unclassified.",
  ]),
  reviewed("quiz-29703", 52, [
    "AD3 is an external-influence classification and not the luminaire product standard for permanent underwater use.",
    "BS EN 60898 covers circuit-breakers for household and similar installations, not submerged luminaires.",
    "IP44 protects against splashing but does not establish product suitability for continuous submersion in a swimming pool.",
  ]),
  reviewed("quiz-29703", 53, [
    "A non-conductive enclosure may provide basic protection, but it does not make a FELV circuit a shock-protective ELV system.",
    "Supply-side overcurrent protection limits excess current; it does not supply the protective separation missing from FELV.",
    "Chapter 6 verification is required for installations generally and is not the special limitation that defines FELV in this location.",
  ]),
  reviewed("quiz-29703", 54, [
    "An absolute eight-metre crossing height is not the universal rule; the necessary clearance follows the actual traffic and site risk.",
    "Steel-wire armour can be suitable but is not mandatory for every construction-site cable route or type of equipment.",
    "Duct or containment is one possible protection method, not an unconditional requirement for every cable on the site.",
  ]),
  reviewed("quiz-29703", 55, [
    "A 300 mA RCD may provide fire protection but does not establish that the agricultural socket-outlet meets its product standard.",
    "IP68 is an unnecessarily severe immersion rating and is not a universal requirement for every agricultural socket-outlet.",
    "A double-pole switch may be useful for isolation, but incorporating one does not replace compliance with the socket product standard.",
  ]),
  reviewed("quiz-29703", 56, [
    "Installation labour cost affects the project budget, not the technical reduction of energy wasted in service.",
    "Worsening power factor raises current for the same useful power and increases conductor and transformer losses.",
    "Cable-insulation type affects temperature and installation ratings, but naming it alone does not express the requested efficiency objective.",
  ]),
  reviewed("quiz-29703", 57, [
    "100 square metres is the conventional maximum associated with a 30 or 32 A ring final circuit, not this 20 A radial.",
    "25 square metres is below the standard 50-square-metre arrangement and therefore is not the maximum served area requested.",
    "The area is not unlimited; limiting the conventional arrangement supports current capacity, voltage drop and practical load distribution.",
  ]),
  reviewed("quiz-29703", 58, [
    "12 A is only twice the breaker rating and is below the 5 In instantaneous value used for a Type B device.",
    "6 A is the normal rated current, not the fault current needed to operate the magnetic mechanism rapidly.",
    "8 A is only a modest overload and would rely on the slower thermal characteristic rather than 0.1-second operation.",
  ]),
  reviewed("quiz-29703", 59, [
    "21 A corresponds to a less thermally restrictive installation method and overstates capacity in an insulated stud wall.",
    "25 A similarly ignores the heat retention represented by reference method 103 and could overheat the cable.",
    "27 A is close to a favourable clipped-direct capacity, not the derated value for the stated insulated-wall method.",
  ]),
  reviewed("quiz-29703", 60, [
    "Plus or minus ten percent is a supply-voltage tolerance concept, not the installation's permitted lighting voltage drop.",
    "11.5 V is five percent of 230 V and is the usual non-lighting limit, not the three-percent lighting value.",
    "3 V is below the allowed 6.9 V and therefore is not the maximum voltage drop requested for this circuit.",
  ]),
  reviewed("quiz-29704", 1, [
    "Aircraft electrical equipment follows specialist aviation standards and is excluded from the ordinary BS 7671 installation scope.",
    "Mine and quarry aspects covered by statutory mining rules are outside the scope of the general wiring standard.",
    "Electrical equipment on board ships is governed by marine standards rather than normal public-premises installation rules.",
  ]),
  reviewed("quiz-29704", 2, [
    "Fault protection acts under a single fault condition, whereas direct contact with a live part is addressed by basic protection.",
    "Overcurrent protection prevents conductor and equipment damage; it does not stop a person touching an accessible live part.",
    "Protection against thermal effects limits burns and fire but does not create the barrier or insulation needed against direct contact.",
  ]),
  reviewed("quiz-29704", 3, [
    "Earth-fault current determines device type, breaking capacity and disconnection performance, so it is a technical selection consideration.",
    "Overcurrent characteristics are fundamental to choosing a device that safely clears overloads and short circuits.",
    "Undervoltage can create danger or equipment malfunction and may require a suitable protective or control device.",
  ]),
  reviewed("quiz-29704", 4, [
    "Building control enforces building requirements but does not set the installation's first BS 7671 inspection interval.",
    "The client receives the recommendation and can explain intended use, but the technical interval is a design responsibility.",
    "An installer cannot independently replace the designer's assessment unless that installer also holds the design responsibility.",
  ]),
  reviewed("quiz-29704", 5, [
    "Cable ducting is an enclosed wiring-system pathway, not an open support built from transverse rungs and longitudinal members.",
    "A cable tray has a continuous or perforated base rather than the spaced transverse elements that define a ladder.",
    "Cable trunking encloses insulated conductors or cables and normally has a removable cover, unlike an open cable ladder.",
  ]),
  reviewed("quiz-29704", 6, [
    "Overload current exceeds the intended operating value in an otherwise sound circuit; it is not the planned normal-service current.",
    "Protective-conductor current flows in the earthing path during normal operation and is not the useful circuit load current.",
    "Short-circuit current is an abnormal high fault current through a low-impedance path, not the normal design load.",
  ]),
  reviewed("quiz-29704", 7, [
    "Basic protection prevents contact with live parts in normal, fault-free operation rather than under a single fault.",
    "Emergency stopping removes or controls a developing operational danger and is not the defined shock-protection layer under one fault.",
    "Transient-overvoltage protection limits surge stress on equipment and does not provide the defined single-fault electric-shock protection.",
  ]),
  reviewed("quiz-29704", 8, [
    "The arrangement of live conductors affects circuit construction but does not account for loads being unlikely to operate together.",
    "Discrimination coordinates protective devices after faults; it is not the allowance used to estimate simultaneous normal demand.",
    "Earthing arrangement affects fault protection and touch voltage, not the proportion of connected load expected at one time.",
  ]),
  reviewed("quiz-29704", 9, [
    "Circuit division limits consequences but cannot prevent insulation from deteriorating or being mechanically damaged.",
    "Separating circuits does not by itself reduce the energy consumed by loads or improve their operating efficiency.",
    "NICEIC is a certification body; BS 7671's technical circuit-division objectives do not exist merely to meet one scheme's rules.",
  ]),
  reviewed("quiz-29704", 10, [
    "Continuity of service concerns fault limitation and supply availability, not whether neighbouring shop equipment can operate together safely.",
    "Maintainability addresses access and future work, while the kiosk-within-shop interface specifically raises compatibility between systems.",
    "Safety-service assessment applies to emergency functions and does not cover every ordinary kiosk or concession electrical interface.",
  ]),
  reviewed("quiz-29704", 11, [
    "An independent generator can continue supplying the safety service after loss of the normal DNO source.",
    "Primary cells store energy independently and can supply an appropriately designed low-power safety service.",
    "Storage batteries are a recognised independent source for emergency lighting and other suitable safety loads.",
  ]),
  reviewed("quiz-29704", 12, [
    "The installer's identity belongs in project records but does not determine how loss of one circuit affects continued service.",
    "Supplier details identify an organisation; they do not describe the installation's circuit subdivision or redundancy.",
    "Cable type must suit the environment and load, but selecting it alone does not assess the number of independent circuits available.",
  ]),
  reviewed("quiz-29704", 13, [
    "Overload protection limits excessive current in sound circuits and is a Chapter 43 function, not the purpose of ADS.",
    "Thermal-effects measures prevent ignition and burns; ADS specifically limits dangerous touch voltage duration after a fault.",
    "Undervoltage protection responds to a low supply and does not define automatic disconnection for an earth fault.",
  ]),
  reviewed("quiz-29704", 14, [
    "Fault protection operates under a single fault, while basic insulation and enclosures keep live parts inaccessible in normal service.",
    "Impact protection resists mechanical damage and does not describe insulation or barriers preventing live-part contact.",
    "Thermal protection controls temperature and fire risk rather than direct access to live conductors in fault-free conditions.",
  ]),
  reviewed("quiz-29704", 15, [
    "0.1 second is below the permitted TT maximum and therefore is not the boundary value requested.",
    "0.4 second is the 230 V TN final-circuit value, not the shorter TT limit for this circuit.",
    "One second exceeds the 0.2-second TT final-circuit maximum and would leave a dangerous touch voltage for too long.",
  ]),
  reviewed("quiz-29704", 16, [
    "Indoor use alone is not a current exception; the applicable socket category still needs the documented risk assessment.",
    "Ordinary persons remain BA1 even after instruction, so their socket-outlets cannot use this risk-assessment exception.",
    "A splashproof enclosure addresses water ingress but does not justify removing additional shock protection from the socket.",
  ]),
  reviewed("quiz-29704", 17, [
    "0.91 ohm is below the stated distribution-circuit limit and so is not the maximum impedance requested.",
    "1.37 ohms is also more restrictive than the listed 1.6-ohm maximum for this fuse and disconnection condition.",
    "1.7 ohms exceeds the maximum, so it may not provide enough earth-fault current for timely fuse operation.",
  ]),
  reviewed("quiz-29704", 18, [
    "100 mA is safely below the largest standard rating allowed by 50 V divided by 150 ohms, but it is not the maximum.",
    "30 mA is more sensitive and may be used, yet the calculation permits a larger rating and the question asks for the maximum.",
    "500 mA would allow a 75 V product of resistance and residual current, exceeding the 50 V TT condition.",
  ]),
  reviewed("quiz-29704", 19, [
    "0.2 second is a shorter final-circuit disconnection value from another system condition, not the reduced-voltage maximum here.",
    "0.4 second is still below the permitted five-second value and therefore does not answer a maximum-time question.",
    "One second is more restrictive than required and is not the stated maximum disconnection time for this reduced-voltage circuit.",
  ]),
  reviewed("quiz-29704", 20, [
    "0.33 ohm is below the calculated maximum and would be acceptable, but it is not the limiting value requested.",
    "0.38 ohm remains unnecessarily restrictive for the stated three-phase reduced-voltage circuit.",
    "0.65 ohm results from using a lower line-to-earth voltage and does not match the stated three-phase arrangement.",
  ]),
  reviewed("quiz-29704", 21, [
    "1000 V exceeds the permitted voltage for a separated circuit and moves outside this protective measure's stated limit.",
    "230 V is a common separated-circuit voltage but is below, rather than equal to, the maximum value asked for.",
    "400 V is also within the ceiling but does not identify the full 500 V maximum permitted by the requirement.",
  ]),
  reviewed("quiz-29704", 22, [
    "An ordinary low-voltage DC supply has no stated protective separation, so it cannot be assumed suitable for SELV or PELV.",
    "A private 110 V generator is above extra-low voltage and no equivalent safety separation is established by the description.",
    "The public 230 V supply is neither extra-low voltage nor protectively separated and cannot directly source a SELV or PELV circuit.",
  ]),
  reviewed("quiz-29704", 23, [
    "In is the device's rated current, not necessarily the current that causes operation within the required shock-protection time.",
    "Iz is the conductor current-carrying capacity and does not set the touch-voltage limit for supplementary bonding effectiveness.",
    "Reversing the inequality would accept excessive bonding resistance and could permit more than 50 V during the fault.",
  ]),
  reviewed("quiz-29704", 24, [
    "65 degrees Celsius is the metallic-part limit for a comparable touched surface, not this non-metallic surface category.",
    "70 degrees Celsius is below the specified non-metallic boundary and therefore is not the maximum temperature requested.",
    "90 degrees Celsius exceeds the allowed surface temperature and could expose a person to an unacceptable burn risk.",
  ]),
  reviewed("quiz-29704", 25, [
    "0.0125 second is below the adiabatic result and follows from an incorrect treatment of conductor size, current or squaring.",
    "0.14 second is seven times the calculated duration and would allow excessive thermal energy in the conductor.",
    "2.26 seconds is over two orders of magnitude too long for a 13 kA fault through the stated conductor.",
  ]),
  reviewed("quiz-29704", 26, [
    "1.5 kV is the lower impulse category value for protected electronic equipment, not an electricity meter at the origin.",
    "2.5 kV applies to ordinary category II equipment and is insufficient for the meter's position and category.",
    "4 kV is associated with category III distribution equipment, while an electricity meter at the origin requires category IV withstand.",
  ]),
  reviewed("quiz-29704", 27, [
    "A circuit protective conductor is green-and-yellow only; adding blue termination marks identifies the combined neutral function of a PEN.",
    "A line conductor uses the prescribed line colours and must never be identified green-and-yellow.",
    "A neutral conductor is blue throughout and does not carry green-and-yellow protective identification along its length.",
  ]),
  reviewed("quiz-29704", 28, [
    "Annual operation is less frequent than the current six-month notice and could leave a seized mechanism undetected too long.",
    "Monthly testing is more frequent than the standard notice requires and is not the interval printed by the current rule.",
    "Quarterly was the interval in earlier editions; it was replaced by six-monthly wording in the current standard.",
  ]),
  reviewed("quiz-29704", 29, [
    "Ten millimetres gives too little timber cover to protect the cable from nails, screws or work on the joist.",
    "Twenty-five millimetres is only half the required distance from the top or bottom of the joist.",
    "Thirty millimetres remains short of the 50 mm protective setback and leaves the cable vulnerable.",
  ]),
  reviewed("quiz-29704", 30, [
    "A factor of 0.5 represents a slightly more severe insulation condition and is not the listed 200 mm value.",
    "0.51 likewise overstates the derating needed for this particular 200 mm surrounded length.",
    "0.78 permits too much current for a cable surrounded over 200 mm and risks exceeding its operating temperature.",
  ]),
  reviewed("quiz-29704", 31, [
    "Half a metre exceeds the required separation, so it may be acceptable but is not the minimum clearance requested.",
    "Two hundred millimetres is also greater than the 100 mm minimum and therefore does not identify the limiting distance.",
    "Fifty millimetres is below the required clearance and gives inadequate separation between power and telecommunication cables.",
  ]),
  reviewed("quiz-29704", 32, [
    "All circuit conductors would include a protective conductor, which must not pass through the RCD summation transformer as a monitored conductor.",
    "Enclosing only line conductors omits the neutral return, preventing the device from comparing the complete live-current sum.",
    "A PEN conductor combines protective and neutral functions and is not permitted through an RCD in this manner.",
  ]),
  reviewed("quiz-29704", 33, [
    "100 mA is below the permitted fire-protection ceiling and may be chosen, but it is not the maximum rating asked for.",
    "30 mA provides additional shock protection and is more sensitive than necessary to identify the maximum fire-protection value.",
    "500 mA exceeds the 300 mA ceiling and can allow an earth leakage fault to produce dangerous heating for too long.",
  ]),
  reviewed("quiz-29704", 34, [
    "A suitably rated 16 A plug and socket-outlet can provide isolation or switching in permitted circumstances, not only functional control.",
    "A suitable BS EN 60898 circuit-breaker can provide protection and isolation as well as functional switching.",
    "A device with superconductors is not the recognised semiconductor switching category and does not state a usable switching function.",
  ]),
  reviewed("quiz-29704", 35, [
    "2.25 m is below the permitted mounting maximum, but it does not identify the full 2.75 m limit asked for.",
    "Putting OFF at the bottom reverses the required orientation even though the mounting height is correct.",
    "Putting ON at the top likewise leaves OFF at the bottom and can mislead firefighters during urgent operation.",
  ]),
  reviewed("quiz-29704", 36, [
    "10 square millimetres is below the minimum for buried copper lacking both mechanical and corrosion protection.",
    "16 square millimetres also provides insufficient cross-section for the unprotected buried earthing conductor.",
    "50 square millimetres exceeds the required minimum and may be used, but it is not the smallest compliant size.",
  ]),
  reviewed("quiz-29704", 37, [
    "10 square millimetres is safely above the adiabatic result but is not the minimum standard conductor size requested.",
    "2.5 square millimetres is below the calculated requirement and could overheat during the stated fault duration.",
    "6 square millimetres exceeds the next standard size needed and therefore is not the minimum selection.",
  ]),
  reviewed("quiz-29704", 38, [
    "An inspector may use the information, but the positioning rule specifically ensures it is visible before someone modifies or extends a circuit.",
    "The DNO does not normally alter the consumer's outgoing high-protective-conductor-current circuits and is not the target reader.",
    "The ordinary user is not expected to redesign these circuits; the warning is aimed at the person carrying out future electrical work.",
  ]),
  reviewed("quiz-29704", 39, [
    "16 square millimetres unnecessarily makes the bonding conductor equal to the earthing conductor instead of applying the sizing rule.",
    "25 square millimetres is larger still and is not the minimum bonding cross-section for a 16-square-millimetre TN-S earthing conductor.",
    "6 square millimetres is below the selected standard size resulting from half of the earthing-conductor cross-section.",
  ]),
  reviewed("quiz-29704", 40, [
    "100 mA is too insensitive for the maximum RCD rating specified for this non-permanently fixed generator arrangement.",
    "300 mA is a fire-protection ceiling in other contexts and does not provide the required 30 mA protection here.",
    "500 mA is even less sensitive and would allow a much larger residual current before disconnection.",
  ]),
  reviewed("quiz-29704", 41, [
    "10 kW is far above the threshold, leaving many smaller motors without the overload control required by the rule.",
    "100 W is below the 0.37 kW boundary and would incorrectly impose the requirement on smaller motors.",
    "37 W is one tenth of the actual threshold and confuses 0.37 kW with 0.037 kW.",
  ]),
  reviewed("quiz-29704", 42, [
    "Inspection checks that installed equipment complies with Section 511 selection and standards requirements.",
    "Correct equipment selection and erection are central visual-inspection matters before the installation is tested.",
    "Visible damage or defects must be identified because either can make equipment unsafe before energisation.",
  ]),
  reviewed("quiz-29704", 43, [
    "0.5 megaohm at 250 V DC is the lower test condition used for SELV and PELV, not a normal 400 V circuit.",
    "1000 V DC is the test voltage for circuits above 500 V and is unnecessarily severe for the stated circuit.",
    "Insulation resistance is tested with DC; specifying 500 V AC could damage equipment and does not meet the test method.",
  ]),
  reviewed("quiz-29704", 44, [
    "0.5 megaohm is below the minimum that must still be achieved when the voltage is reduced to protect connected SPDs.",
    "A 500 V AC test is neither the permitted reduced voltage nor the DC insulation-resistance test waveform.",
    "This combines an excessive 500 V test with an insufficient 0.5-megaohm acceptance value.",
  ]),
  reviewed("quiz-29704", 45, [
    "Functional operation can show that an accessory works but cannot prove line, neutral and protective terminals are correctly assigned.",
    "Insulation-resistance testing checks leakage paths between conductors and Earth, not which conductor reaches each socket terminal.",
    "RCD testing proves residual-current operation and does not establish the polarity of every connected accessory.",
  ]),
  reviewed("quiz-29704", 46, [
    "Starting with polarity before protective-conductor continuity and insulation checks does not follow the prescribed safe sequence.",
    "Measuring an earth electrode first and leaving continuity until last puts live or later tests ahead of essential dead tests.",
    "Insulation before CPC continuity and polarity after the live electrode test gives the listed tests in an unsafe order.",
  ]),
  reviewed("quiz-29704", 47, [
    "Functional testing confirms equipment operation but does not quantify the resistance that produces circuit voltage drop.",
    "Prospective fault current concerns source and loop impedance under fault conditions, not normal load-current voltage drop alone.",
    "One unloaded supply-voltage reading provides no before-and-after load difference from which circuit voltage drop can be verified.",
  ]),
  reviewed("quiz-29704", 48, [
    "Half a millimetre provides virtually no separation from zone 1 and is three orders of magnitude below the required distance.",
    "0.60 mm is not the former zone-width value in metres and is nowhere near the required socket separation.",
    "2.25 m is below the current 2.5 m boundary and would place the standard socket too close to zone 1.",
  ]),
  reviewed("quiz-29704", 49, [
    "AE6 classifies ingress of solid foreign bodies and does not describe continuous immersion in pool zone 0.",
    "AF2 concerns corrosive or polluting substances, not the water exposure defining the inside of the pool.",
    "AG3 is a severe mechanical-impact classification and says nothing about immersion protection.",
  ]),
  reviewed("quiz-29704", 50, [
    "Half a metre is too shallow for cultivated ground where ploughing and other agricultural work can reach the cable.",
    "0.6 m remains below the special one-metre depth used to protect cables in arable land.",
    "Six metres is far deeper than required and therefore cannot be the minimum burial depth requested.",
  ]),
  reviewed("quiz-29704", 51, [
    "IK01 represents very low impact resistance and is insufficient for exposed caravan-park equipment.",
    "IK03 still provides substantially less mechanical protection than the IK08 minimum for the outdoor location.",
    "IK06 is stronger but remains below IK08 and does not meet the minimum impact-energy classification.",
  ]),
  reviewed("quiz-29704", 52, [
    "A BS 3036 fuse alone gives overcurrent protection but no 30 mA residual-current protection for the marina socket.",
    "Group RCD protection permits one fault to disconnect several berths and does not meet individual socket-outlet protection.",
    "A monitoring device can alarm without disconnecting the faulty circuit and is not a substitute for the required RCD and OCPD.",
  ]),
  reviewed("quiz-29704", 53, [
    "Checks during use may supplement maintenance, but they cannot replace verification after each new assembly at the site.",
    "Waiting until disassembly is too late because visitors and workers have already been exposed to the erected installation.",
    "Fault-triggered testing is reactive and leaves an incorrectly assembled temporary installation in service until something fails.",
  ]),
  reviewed("quiz-29704", 54, [
    "Aluminium at 1.5 square millimetres is below the permitted size and is unsuitable for the specified flexible connection.",
    "A 1.5-square-millimetre copper flexible cable is also below the minimum mechanical and electrical cross-section.",
    "4 square millimetres may be selected for load or voltage drop, but it is above and therefore not equal to the minimum.",
  ]),
  reviewed("quiz-29704", 55, [
    "Three years is too long for the stated frequently used caravan, whose wear and repeated connections justify an annual check.",
    "Monthly inspection is disproportionately frequent and is not the recommended periodic-verification interval.",
    "Quarterly verification is also more frequent than the annual recommendation and should not be confused with routine user checks.",
  ]),
  reviewed("quiz-29704", 56, [
    "A 300 mA RCD may reduce fire risk but is too insensitive to provide the required additional shock protection.",
    "A 32 A circuit-breaker protects against overcurrent and cannot detect the small residual current associated with electric shock.",
    "A BS 88 fuse also responds to overcurrent, not a 30 mA imbalance between live conductors.",
  ]),
  reviewed("quiz-29704", 57, [
    "IPX2 is above the stated water-ingress minimum, so it may be suitable but is not the least degree requested.",
    "IPX3 adds spray protection beyond the vertically falling drops covered by the minimum classification.",
    "IPX4 is a still higher splashing-water degree and therefore does not identify the minimum for this ceiling unit.",
  ]),
  reviewed("quiz-29704", 58, [
    "One second is faster than the fuse curve gives at 100 A and would overstate its disconnection performance.",
    "Two seconds remains shorter than the applicable time read from the BS 88-3 characteristic.",
    "Four seconds is longer than the curve value and understates how quickly the fuse clears the stated fault current.",
  ]),
  reviewed("quiz-29704", 59, [
    "11.5 V is five percent of 230 V and does not represent five percent of the stated 400 V motor supply.",
    "12 V is three percent of 400 V, the usual lighting allowance, rather than the five-percent motor-circuit limit.",
    "6.9 V is three percent of a 230 V lighting circuit and is unrelated to the stated 400 V motor calculation.",
  ]),
  reviewed("quiz-29704", 60, [
    "0.54 ohm is well below the measured-value comparison limit and therefore is not the maximum asked for.",
    "0.68 ohm is the comparable Type C instantaneous value, not the Type B 32 A result stated here.",
    "1.37 ohms is the full BS 7671 maximum; the question asks for the lower comparison value allowing for conductor heating.",
  ]),
  reviewed("quiz-29705", 1, [
    "Electrical equipment on board ships is governed by marine standards and is excluded from normal BS 7671 scope.",
    "Lift installations covered by BS 5655 follow their specialist lift requirements rather than the general wiring rules.",
    "The external lightning-protection system for a building has its own standard; BS 7671 addresses connected electrical installations and surge effects.",
  ]),
  reviewed("quiz-29705", 2, [
    "Aircraft electrical shock protection is subject to specialist aviation rules and is outside the installation scope of BS 7671.",
    "Fixed offshore installations use specialist standards, so their fire risk is not the safety requirement identified here.",
    "Shipboard shock-current protection is governed by marine standards and is not the installation risk covered by this question.",
  ]),
  reviewed("quiz-29705", 3, [
    "The Electricity at Work Regulations are statutory and create legal duties for electrical systems and work activities.",
    "PUWER is legislation governing the provision and use of work equipment, not voluntary industry guidance.",
    "The machinery safety regulations are statutory product-safety law and therefore differ from non-statutory guidance notes.",
  ]),
  reviewed("quiz-29705", 4, [
    "Equipment-label colour has no meaningful effect on electromagnetic coupling or the route selected for the wiring system.",
    "Admissible voltage drop affects conductor size and length, but it is not the electromagnetic effect specifically requested.",
    "Earthing arrangement is fundamental to fault protection and bonding, yet it does not name the wiring-system EMC issue asked for.",
  ]),
  reviewed("quiz-29705", 5, [
    "Back-up protection allows an upstream device to assist a downstream device's breaking capacity; it does not describe selective operation.",
    "Combined short-circuit protection concerns coordinated fault interruption and withstand, not keeping every unaffected upstream device closed.",
    "Diversity estimates how much connected load operates simultaneously and has no meaning for protective-device operating sequence.",
  ]),
  reviewed("quiz-29705", 6, [
    "Inspection uses the senses to examine erection and condition; it does not include obtaining values by measurement.",
    "Reporting records findings and conclusions after assessment but is not the act that proves performance with instruments.",
    "Verification is the overall inspection-and-testing process, whereas the measurement activity described is specifically testing.",
  ]),
  reviewed("quiz-29705", 7, [
    "A central power supply system supports safety services and does not describe an EV charging mode with an off-board charger.",
    "Highway power supply is not one of the defined EV conductive charging modes in the stated arrangement.",
    "A marina supply point provides shore power to craft and has no control-pilot relationship to an EV off-board charger.",
  ]),
  reviewed("quiz-29705", 8, [
    "Ingress protection addresses environmental resistance of an enclosure, not electrical disturbance imposed on neighbouring equipment.",
    "Design current establishes normal loading and conductor capacity but does not quantify waveform distortion or compatibility.",
    "The origin protective-device rating concerns overcurrent protection and cannot by itself reveal harmful harmonic effects on equipment.",
  ]),
  reviewed("quiz-29705", 9, [
    "The consequences of a device operating must be considered so one fault does not create wider danger or unacceptable loss of service.",
    "A separate distribution-board way maintains clear protection and isolation for each final circuit and is the compliant arrangement.",
    "Final-circuit wiring must remain electrically separate so fault current and load current do not use another final circuit's conductors.",
  ]),
  reviewed("quiz-29705", 10, [
    "Automatic disconnection of supply is the normal combined basic-and-fault protective measure permitted throughout installations.",
    "Double or reinforced insulation is a recognised protective measure using Class II construction or equivalent insulation.",
    "SELV and PELV limit voltage and provide the required separation, making them generally permitted protective measures.",
  ]),
  reviewed("quiz-29705", 11, [
    "0.2 second is a TT final-circuit value and is far shorter than the permitted TN distribution-circuit time.",
    "0.4 second applies to specified 230 V TN final circuits, not a fused sub-distribution circuit.",
    "One second remains below the five-second TN distribution limit and therefore is not the maximum asked for.",
  ]),
  reviewed("quiz-29705", 12, [
    "Many 13 A sockets require RCD protection, but 'all types' ignores the limited documented risk-assessment exception in eligible locations.",
    "The outdoor-mobile-equipment requirement stops at 32 A; equipment exceeding that rating is not covered by this specific rule.",
    "The current socket threshold is 32 A and the applicable user and location conditions matter, so the old 20 A statement is incomplete.",
  ]),
  reviewed("quiz-29705", 13, [
    "A residual-current monitor can alarm without interrupting overload or short-circuit current and does not protect the RCD from overcurrent.",
    "Earth-free local bonding is a restricted shock-protection measure, not the overcurrent protection required alongside an RCD.",
    "Supplementary bonding reduces touch voltage but cannot clear conductor overloads or high short-circuit currents.",
  ]),
  reviewed("quiz-29705", 14, [
    "0.2 second is the 230 V TT final-circuit value and is not applicable to this TN-S socket-outlet circuit.",
    "0.5 second does not match the Table 41.1 TN value for a system whose nominal voltage to Earth is 230 V.",
    "Five seconds is the TN distribution-circuit allowance, not the limit for a final circuit supplying a socket-outlet up to 63 A.",
  ]),
  reviewed("quiz-29705", 15, [
    "0.36 ohm is below the five-second fuse limit and would be acceptable, but it is not the maximum value requested.",
    "0.44 ohm remains more restrictive than the tabulated 0.78-ohm distribution-circuit maximum.",
    "0.68 ohm is also below the applicable boundary and therefore cannot be the maximum in this question.",
  ]),
  reviewed("quiz-29705", 16, [
    "0.16 ohm is below the calculated Type C limit, so it is not the maximum earth fault loop impedance asked for.",
    "0.17 ohm remains slightly more restrictive than the result obtained with the stated Uo and breaker characteristic.",
    "0.33 ohm is too high and would not guarantee the fault current needed for the Type C breaker to disconnect in time.",
  ]),
  reviewed("quiz-29705", 17, [
    "0.17 ohm is below the stated five-second Type D boundary and therefore is not the maximum impedance requested.",
    "0.44 ohm exceeds the maximum and may not produce sufficient fault current for the Type D device to operate in time.",
    "0.69 ohm is almost twice the permitted value and gives still less fault current to the protective device.",
  ]),
  reviewed("quiz-29705", 18, [
    "Ten litres is below the generally accepted lower limit and does not by itself reach the stated significant quantity.",
    "Twenty litres is closer but remains below the 25-litre lower-limit value used by the requirement.",
    "Fifty litres is already above the threshold and therefore is not the lower limit asked for.",
  ]),
  reviewed("quiz-29705", 19, [
    "A 30 mA RCD does not make unrestricted equipment acceptable in an escape route or coordinate it with the fire strategy.",
    "The former BD classifications were removed; current design follows the documented fire strategy and protected-route requirements.",
    "A blanket prohibition would also remove essential evacuation and safety equipment that the fire design may require in the route.",
  ]),
  reviewed("quiz-29705", 20, [
    "Category I is an overvoltage-impulse category and says nothing about cable circuit survival in fire.",
    "Earth-free local equipotential bonding is a shock-protection measure, not a fire-resisting wiring construction.",
    "Ordinary 70-degree thermoplastic insulation can soften and fail in fire and has no inherent circuit-integrity rating.",
  ]),
  reviewed("quiz-29705", 21, [
    "65 degrees Celsius is the comparable metallic-surface limit, not the maximum for this non-metallic touched part.",
    "70 degrees Celsius is below the allowed boundary and is therefore not the maximum temperature requested.",
    "90 degrees Celsius exceeds the limit and could expose a person touching the part to an unacceptable burn hazard.",
  ]),
  reviewed("quiz-29705", 22, [
    "The valid thermal condition is I2 not exceeding 1.45 Iz; this option reverses the quantities and inequality.",
    "Iz must be at least In, so stating that conductor capacity does not exceed device rating permits conductor overload.",
    "Design current must not exceed the device rating; making Ib greater than In would cause normal load to overload or trip the device.",
  ]),
  reviewed("quiz-29705", 23, [
    "A k factor of 103 belongs to a different conductor material or temperature combination, not 90-degree thermosetting copper.",
    "115 is the familiar value for 70-degree thermoplastic copper and understates this conductor's permitted thermal duty.",
    "141 is close but is not the tabulated 143 factor for the stated copper insulation and temperature limits.",
  ]),
  reviewed("quiz-29705", 24, [
    "Brief inconvenience with no material consequence belongs to the cases where a recorded owner decision may permit omission.",
    "Declared tolerable cosmetic damage is not one of the serious consequences that makes surge protection mandatory.",
    "A formally accepted tolerable equipment loss falls under the owner-risk route, unlike serious injury or loss of life.",
  ]),
  reviewed("quiz-29705", 25, [
    "Lightning ground-flash density was used by the deleted calculated-risk method and is no longer the owner declaration required here.",
    "The distributor fuse rating concerns fault protection and does not establish whether surge-related loss is tolerable.",
    "Future equipment cannot realistically be guaranteed absent, and that promise would not record acceptance of consequential risk.",
  ]),
  reviewed("quiz-29705", 26, [
    "Tight bundling maximises coupling between power and signal circuits instead of controlling their shared electromagnetic field.",
    "Removing protective conductors can create an electric-shock hazard and breaks the bonding path needed for effective screening.",
    "Increasing protective-device ratings weakens overcurrent protection and has no direct effect on electromagnetic coupling.",
  ]),
  reviewed("quiz-29705", 27, [
    "A main switch lockable ON could prevent emergency or maintenance isolation and is the opposite of secure OFF control.",
    "Opening only line leaves neutral connected; the question requires isolation of both live conductors in the single-phase supply.",
    "A nominal line-contact gap alone does not ensure neutral disconnection or state the full double-pole isolation function.",
  ]),
  reviewed("quiz-29705", 28, [
    "Nominal voltage alone cannot account for current, cable construction, circuit immunity, screening or installation route.",
    "Outer colour is not an electrical compatibility characteristic and gives no basis for selecting a safe separation distance.",
    "No single 0.45 m distance suits every cable and environment; separation follows the actual circuits and standards involved.",
  ]),
  reviewed("quiz-29705", 29, [
    "A 75-to-25 split puts one colour outside the permitted 30-to-70-percent range on the conductor surface.",
    "Seventy-five percent green and 25 percent yellow again exceeds the maximum share allowed for either colour.",
    "An 80-to-20 split departs even further from the required bi-colour proportions and can be mistaken at a glance.",
  ]),
  reviewed("quiz-29705", 30, [
    "Annual testing is less frequent than the six-month interval printed on the current RCD notice.",
    "Monthly operation is more frequent than the standard notice and is not the required wording for the user.",
    "Quarterly was specified by older editions but has been replaced by a six-month test-button interval.",
  ]),
  ...buildReviewedPart1Sets(
    ["quiz-29705", "quiz-29706"],
    ["quiz-29703", "quiz-29704"],
    { "quiz-29705": 31 },
  ),
] as const;
