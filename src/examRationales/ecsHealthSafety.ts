import ecsHealthSafetyData from "../exam-data/ecs-health-safety.json";
import { applyExamExplanationEnhancements } from "../examExplanationEnhancements";
import type { Exam, ExamChoice, ExamQuestion } from "../exams/types";

const GOV_FIRE_SAFETY = [
  "https://www.gov.uk/government/publications/fire-safety-approved-document-b",
] as const;
const GOV_CONSTRUCTION_WASTE = [
  "https://www.gov.uk/guidance/manage-waste-on-a-construction-site",
] as const;
const HSE_ELECTRICITY = ["https://www.hse.gov.uk/electricity/faq.htm"] as const;
const HSE_HSG141 = ["https://www.hse.gov.uk/pubns/priced/hsg141.pdf"] as const;
const HSE_HSG85 = ["https://www.hse.gov.uk/pubns/priced/hsg85.pdf"] as const;
const HSE_CONFINED_SPACES = [
  "https://www.hse.gov.uk/confinedspace/introduction.htm",
] as const;
const HSE_WORK_AT_HEIGHT = [
  "https://www.hse.gov.uk/work-at-height/introduction.htm",
] as const;
const HSE_LADDERS = [
  "https://www.hse.gov.uk/work-at-height/ladders/when-how-to-use-ladders-safely.htm",
] as const;
const HSE_FIRST_AID = ["https://www.hse.gov.uk/firstaid/index.htm"] as const;
const HSE_NOISE = ["https://www.hse.gov.uk/noise/employers.htm"] as const;
const HSE_LEPTOSPIROSIS = [
  "https://www.hse.gov.uk/agriculture/topics/zoonoses.htm",
] as const;
const HSE_ASBESTOS = ["https://www.hse.gov.uk/asbestos/index.htm"] as const;
const HSE_PPE = ["https://www.hse.gov.uk/ppe/overview.htm"] as const;
const HSE_RIDDOR = ["https://www.hse.gov.uk/riddor/index.htm"] as const;
const HSE_MANUAL_HANDLING = [
  "https://www.hse.gov.uk/msd/manual-handling/",
] as const;
const HSE_SAFETY_SIGNS = [
  "https://www.hse.gov.uk/pubns/books/l64.htm",
] as const;
const HSE_ENFORCEMENT = [
  "https://www.hse.gov.uk/foi/internalops/og/ogprocedures/notices/noticetype.htm",
] as const;
const HSE_RISK = ["https://www.hse.gov.uk/simple-health-safety/risk/"] as const;
const HSE_WORK_EQUIPMENT = [
  "https://www.hse.gov.uk/work-equipment-machinery/",
] as const;
const HSE_FIRE = [
  "https://www.hse.gov.uk/construction/safetytopics/generalfire.htm",
] as const;
const HSE_COSHH = ["https://www.hse.gov.uk/coshh/basics/index.htm"] as const;
const HSE_SKIN = ["https://www.hse.gov.uk/skin/employ/index.htm"] as const;
const HSE_ACCIDENT_BOOK = [
  "https://www.hse.gov.uk/pubns/books/accident-book.htm",
] as const;
const HSE_INSPECTORS = [
  "https://www.legislation.gov.uk/ukpga/1974/37/section/20",
] as const;
const HSE_POSTER = [
  "https://www.hse.gov.uk/pubns/books/lawposter.htm",
] as const;
const HSE_HSWA = [
  "https://www.legislation.gov.uk/ukpga/1974/37/contents",
] as const;
const HSE_SCAFFOLD_RIDDOR = [
  "https://www.hse.gov.uk/riddor/dangerous-occurences.htm",
] as const;
const GOV_HAZARDOUS_WASTE = [
  "https://www.gov.uk/dispose-hazardous-waste",
] as const;

const CHOICES: readonly ExamChoice[] = ["A", "B", "C", "D"];
const enhancedExam = applyExamExplanationEnhancements(
  ecsHealthSafetyData as unknown as Exam,
);
const runtimeQuestions = enhancedExam.sections.flatMap((section) =>
  section.variants.flatMap((variant) => variant.questions),
);

function semanticText(value: string): string {
  return value
    .normalize("NFKC")
    .replace(/\s+/g, " ")
    .trim()
    .toLocaleLowerCase("en-GB");
}

function semanticSignature(question: ExamQuestion): string {
  return JSON.stringify({
    prompt: semanticText(question.prompt),
    options: CHOICES.map((choice) =>
      semanticText(question.options[choice]),
    ).sort(),
    answer: semanticText(question.options[question.answer]),
  });
}

const uniqueQuestionBySignature = new Map<string, ExamQuestion>();
for (const question of runtimeQuestions) {
  const signature = semanticSignature(question);
  if (!uniqueQuestionBySignature.has(signature)) {
    uniqueQuestionBySignature.set(signature, question);
  }
}
const uniqueQuestions = [...uniqueQuestionBySignature.values()];

function reviewed(
  uniqueNumber: number,
  rationaleByChoice: Partial<Record<ExamChoice, string>>,
  sourceUrls: readonly string[],
) {
  const question = uniqueQuestions[uniqueNumber - 1];
  if (!question)
    throw new Error(`Missing ECS semantic question U${uniqueNumber}`);

  const wrongChoices = CHOICES.filter((choice) => choice !== question.answer);
  if (
    Object.keys(rationaleByChoice).sort().join() !==
    [...wrongChoices].sort().join()
  ) {
    throw new Error(
      `Incomplete ECS rationale choices for U${uniqueNumber}: ${question.prompt}`,
    );
  }

  return {
    _semanticSignature: semanticSignature(question),
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

const authoredUnique = [
  reviewed(
    1,
    {
      A: "Insulating tape has no tested fire-resistance rating and cannot reinstate a breached fire compartment.",
      B: "A draught is irrelevant: any unsealed penetration can let smoke and flame bypass the fire-rated barrier.",
      D: "Ordinary decorators' sealant is not a certified fire-stopping system matched to the wall or floor construction.",
    },
    GOV_FIRE_SAFETY,
  ),
  reviewed(
    2,
    {
      B: "Acoustic sealing may be a secondary benefit, but it is not the additional life-safety function being tested here.",
      C: "Nuisance alarms concern detection-system design; sealing service penetrations does not prevent detector activation.",
      D: "Energy efficiency can improve when gaps are sealed, but it does not describe fire-stopping's structural protection role.",
    },
    GOV_FIRE_SAFETY,
  ),
  reviewed(
    3,
    {
      B: "Intumescent compounds react to elevated temperature, not merely to the presence of smoke particles.",
      C: "Blocking sound is an acoustic treatment and does not describe the heat-driven action of an intumescent product.",
      D: "Shrinking would enlarge the penetration during a fire; intumescent material must swell to close the opening.",
    },
    GOV_FIRE_SAFETY,
  ),
  reviewed(
    4,
    {
      A: "Sprinkler activation is an active-system function; fire-stopping is passive protection within walls and floors.",
      C: "Fire-stopping cannot prevent ignition, but it can contain the products of a fire after one starts.",
      D: "Alarm initiation belongs to detectors and call points, not to the material sealing a compartment boundary.",
    },
    GOV_FIRE_SAFETY,
  ),
  reviewed(
    5,
    {
      B: "Paper is combustible, untested and easily displaced, so it cannot restore the required fire resistance.",
      C: "Recording the damage does not close the penetration or protect occupants while the breach remains open.",
      D: "A nailed board leaves untested joints and may itself be combustible; it is not a compliant penetration seal.",
    },
    GOV_FIRE_SAFETY,
  ),
  reviewed(
    6,
    {
      A: "Avoiding unnecessary heating reduces energy use and emissions, so this action supports site sustainability.",
      C: "Separating waste enables reuse and recycling instead of contaminating recoverable material in a mixed skip.",
      D: "Sharing vehicles or taking public transport reduces fuel consumption and travel emissions per worker.",
    },
    GOV_CONSTRUCTION_WASTE,
  ),
  reviewed(
    7,
    {
      B: "Less mess is useful housekeeping, but it does not explain the upstream environmental cost avoided by reuse.",
      C: "Reuse is not justified by a blanket European-law requirement; its benefit comes from conserving resources and energy.",
      D: "Client savings may follow, but cost alone is not the environmental reason for retaining useful material.",
    },
    GOV_CONSTRUCTION_WASTE,
  ),
  reviewed(
    8,
    {
      B: "An ordinary site skip is not an authorised route for oily liquid, even when the liquid is put in a sealed container.",
      C: "Oil can contaminate soil, groundwater and drains; allowing it to soak away is pollution, not disposal.",
      D: "Burning oily waste creates fire and air-pollution hazards and is not an authorised waste-treatment method.",
    },
    GOV_CONSTRUCTION_WASTE,
  ),
  reviewed(
    9,
    {
      A: "Black is not the BS EN 60309 identification colour for a 110 V reduced-low-voltage site connector.",
      B: "Blue identifies the normal 200-250 V range, so it distinguishes 230 V equipment from the site 110 V supply.",
      C: "Red identifies the 380-480 V range, commonly used for 400 V three-phase connections rather than 110 V.",
    },
    HSE_HSG141,
  ),
  reviewed(
    10,
    {
      A: "Tingling is an early shock effect, but it is less severe than a current path that stops the heart.",
      B: "Burns can be serious and deep, yet cardiac arrest presents the more immediate fatal consequence listed.",
      C: "Muscle twitching shows physiological stimulation, but it is not the most severe outcome among these choices.",
    },
    HSE_ELECTRICITY,
  ),
  reviewed(
    11,
    {
      B: "The Regulations also impose duties beyond employees, including on employers and self-employed people at work.",
      C: "Employers carry major duties, but employees and self-employed people also have obligations under the Regulations.",
      D: "Self-employed people are covered, but limiting the scope to them excludes employees and employers who are also covered.",
    },
    HSE_ELECTRICITY,
  ),
  reviewed(
    12,
    {
      B: "A client's demand cannot displace the legal duty to assess and control the danger created by live work.",
      C: "Dead working is the normal approach, but the decision process still requires assessment of the actual circumstances.",
      D: "Live work is exceptional, not an automatic method to choose without first evaluating whether it is justified.",
    },
    HSE_HSG85,
  ),
  reviewed(
    13,
    {
      B: "Difficulty identifying isolation does not satisfy the statutory tests; the supply must be traced and the work properly planned.",
      C: "Competence is necessary for dangerous electrical work, but competence alone does not justify leaving the conductor live.",
      D: "Rubber gloves are only one possible precaution and cannot replace the three legal conditions for live work.",
    },
    ["https://www.hse.gov.uk/foi/internalops/ocs/400-499/480_2.htm"],
  ),
  reviewed(
    14,
    {
      A: "A 3 A fuse protects wiring against sustained overcurrent; it may carry far more than a lethal body current without operating.",
      C: "A rewireable fuse responds to circuit overcurrent, not the small residual imbalance associated with a person receiving a shock.",
      D: "A 6 A breaker is intended for overload and short-circuit protection and is not sensitive enough for personal shock protection.",
    },
    HSE_ELECTRICITY,
  ),
  reviewed(
    15,
    {
      A: "Entering without controls risks rapid collapse, poisoning or asphyxiation and may also endanger would-be rescuers.",
      B: "Many toxic gases and oxygen deficiency are invisible, so looking into the opening cannot establish a safe atmosphere.",
      C: "Hazardous atmospheres may have no warning odour, and sniffing exposes the worker before any measurement is made.",
    },
    HSE_CONFINED_SPACES,
  ),
  reviewed(
    16,
    {
      A: "Lone-working arrangements must provide a way to obtain assistance; self-reliance cannot control emergencies or incapacitation.",
      C: "Headphones can mask alarms, vehicles and calls for help, increasing isolation rather than managing it.",
      D: "Working alone does not remove any hazard, so the assessed protective equipment remains necessary.",
    },
    ["https://www.hse.gov.uk/lone-working/employer/index.htm"],
  ),
  reviewed(
    17,
    {
      B: "Twelve volts may suit specialist very-high-risk conditions, but it is not the standard nominal site-tool supply.",
      C: "Portable 230 V tools create a greater shock risk and are not the preferred general construction-site arrangement.",
      D: "Twenty-four volts can be used for particular equipment, but UK site power tools normally use 110 V centre-tapped-to-earth.",
    },
    HSE_HSG141,
  ),
  reviewed(
    18,
    {
      A: "A circuit-breaker disconnects excessive current; it does not change a 230 V supply into 110 V.",
      B: "An RCD detects current imbalance and disconnects faults, but its output voltage remains the supply voltage.",
      C: "A generator can produce 110 V independently, but it is not the usual device for reducing an existing 230 V supply.",
    },
    HSE_HSG141,
  ),
  reviewed(
    19,
    {
      A: "An unprotected cable can be crushed or cut by traffic, exposing live conductors and interrupting the supply.",
      B: "Loose boards can shift, split or create a vehicle hazard and do not provide a designed cable-crossing system.",
      D: "Casually thrown boards provide neither reliable mechanical protection nor adequate warning to approaching drivers.",
    },
    HSE_HSG141,
  ),
  reviewed(
    20,
    {
      A: "A poisonous or oxygen-deficient atmosphere is one confined-space hazard, but heat, access and restricted movement also matter.",
      C: "Temperature and ventilation are important, but this choice omits atmospheric toxicity and restricted working space.",
      D: "Restricted space can hamper work and rescue, but it does not capture the separate atmospheric and thermal dangers.",
    },
    HSE_CONFINED_SPACES,
  ),
  reviewed(
    21,
    {
      A: "Reducing below 4 m may be prudent for a particular route, but 2 m is not HSE's stated general maximum before moving.",
      B: "Three metres is conservative but does not state the published 4 m maximum that this factual question asks for.",
      D: "Five metres exceeds HSE's maximum reduced height and increases overturning risk while the tower is moved.",
    },
    ["https://www.hse.gov.uk/construction/safetytopics/scaffold.htm"],
  ),
  reviewed(
    22,
    {
      A: "SWL marks a permissible load, not a working height or level from which equipment may be used.",
      C: "The recognised term uses 'safe working', not 'satisfactory weight', because it defines an equipment loading limit.",
      D: "'Satisfactory working limit' is not the standard expansion shown on lifting equipment and accessories.",
    },
    ["https://www.hse.gov.uk/work-equipment-machinery/loler.htm"],
  ),
  reviewed(
    23,
    {
      A: "Keeping the area open exposes people below; access should instead be prevented or falling objects contained.",
      B: "Production pressure cannot take priority over controlling a potentially fatal falling-object hazard.",
      C: "Avoiding complaints is not the safety objective; a falling item can seriously injure someone before any complaint occurs.",
    },
    HSE_WORK_AT_HEIGHT,
  ),
  reviewed(
    24,
    {
      B: "Securing loose items helps, but it does not establish whether wind can overturn or destabilise the MEWP itself.",
      C: "Clipping to the external structure can create crushing or ejection hazards and does not make excessive wind safe.",
      D: "Extra clothing addresses comfort only; it provides no control over the machine's wind-speed operating limit.",
    },
    ["https://www.hse.gov.uk/construction/safetytopics/mewp.htm"],
  ),
  reviewed(
    25,
    {
      B: "An extension ladder is still designed for one user; separate sections do not create independent working positions.",
      C: "Length does not increase the ladder's person rating, and three moving users would severely reduce stability.",
      D: "Two workers create extra loading and movement on equipment intended to support one climber at a time.",
    },
    HSE_LADDERS,
  ),
  reviewed(
    26,
    {
      B: "A one-to-one slope is about 45 degrees, far shallower and less stable than the recommended 75-degree angle.",
      C: "One metre up for two metres out is about 27 degrees, making the ladder dangerously close to horizontal.",
      D: "A two-to-one slope is about 63 degrees, still too shallow compared with the one-in-four setup rule.",
    },
    HSE_LADDERS,
  ),
  reviewed(
    27,
    {
      A: "Four years exceeds the three-year validity period of an FAW or EFAW certificate, leaving a gap in qualification.",
      B: "Six months is not the certificate-renewal interval; HSE separately recommends shorter annual refresher practice.",
      D: "Two-year retraining may be chosen voluntarily, but it is not the standard three-year certificate cycle asked for.",
    },
    ["https://www.hse.gov.uk/firstaid/first-aid-training.htm"],
  ),
  reviewed(
    28,
    {
      A: "Food can complicate urgent treatment and does not obtain a trained assessment for a person close to collapse.",
      B: "Giving a drink may be unsafe if surgery or reduced consciousness follows, and it delays summoning competent help.",
      C: "A comfortable seat may prevent a fall, but it does not address the unexplained pain and near-collapse medically.",
    },
    HSE_FIRST_AID,
  ),
  reviewed(
    29,
    {
      A: "A canteen is not necessarily outside the danger area and prevents the fire roll call from accounting for you.",
      C: "Approaching the fire increases exposure to smoke, heat and structural danger and obstructs emergency responders.",
      D: "A site hut is not a safe destination unless it is specifically designated as the assembly point.",
    },
    HSE_FIRE,
  ),
  reviewed(
    30,
    {
      B: "Providing protection only on request applies at the lower action value; at 85 dB(A) its use must be ensured.",
      C: "Crossing the upper action value requires exposure controls and hearing protection, not routine notification to HSE.",
      D: "Required PPE must be supplied by the employer without charge; workers cannot be told to buy their own.",
    },
    HSE_NOISE,
  ),
  reviewed(
    31,
    {
      A: "Pigs can carry other zoonoses, but rats and their urine are the classic construction-site source of Weil's disease.",
      C: "Sheep are associated with different occupational infections; they are not the expected reservoir in this question.",
      D: "Snake exposure is unrelated to leptospiral infection from urine-contaminated water or wet ground.",
    },
    HSE_LEPTOSPIROSIS,
  ),
  reviewed(
    32,
    {
      B: "Reaching ground level addresses only escape from height and may still leave people inside the danger zone.",
      C: "Open air is not automatically safe if it remains exposed to fire, smoke, collapse or another site emergency.",
      D: "A rest area is provided for welfare, not necessarily as a protected destination during an emergency.",
    },
    ["https://www.hse.gov.uk/construction/safetytopics/fire.htm"],
  ),
  reviewed(
    33,
    {
      B: "Asthma can have many workplace causes, but it is not the characteristic fibrotic lung disease caused by asbestos fibres.",
      C: "Dermatitis is an inflammatory skin condition; inhaled asbestos primarily causes serious diseases of the lungs and pleura.",
      D: "Glandular fever is a viral infection and has no causal link to breathing asbestos fibres.",
    },
    HSE_ASBESTOS,
  ),
  reviewed(
    34,
    {
      A: "Looking away makes accurate work harder and provides no physical barrier against dust, fragments or splashes.",
      B: "Squinting cannot stop a high-speed particle or chemical splash from reaching and damaging the eye.",
      C: "Ordinary sunglasses lack the impact rating and side protection required for typical construction hazards.",
    },
    HSE_PPE,
  ),
  reviewed(
    35,
    {
      A: "PPE does not remove the hazard and should follow consideration of elimination, substitution and engineering controls.",
      B: "Treating PPE as the first defence bypasses controls that protect everyone without depending on correct wear.",
      D: "PPE is rarely the only practical measure; safe methods, guarding, ventilation or segregation may control risk more effectively.",
    },
    HSE_PPE,
  ),
  reviewed(
    36,
    {
      A: "Whether equipment may be shared is governed by hygiene and suitability, not the wearer's principal statutory duty here.",
      B: "The employer must select suitable eye protection; the employee must report problems and use it as instructed.",
      C: "Required PPE is supplied and maintained without charge, so replacement cost is not automatically the employee's duty.",
    },
    HSE_PPE,
  ),
  reviewed(
    37,
    {
      A: "The ambulance service may provide emergency treatment, but the workplace accident must still be reported internally.",
      B: "Police involvement depends on the circumstances; they are not the normal recipient of a workplace accident report.",
      D: "A workmate can summon help, but telling a colleague alone does not start the employer's reporting and investigation process.",
    },
    HSE_RIDDOR,
  ),
  reviewed(
    38,
    {
      A: "Drilling holes weakens the shell and invalidates the helmet's tested impact and penetration performance.",
      B: "Being indoors does not eliminate falling or swinging objects, so location alone cannot justify removing the helmet.",
      C: "Hot weather does not cancel the assessed head-injury risk; heat must be managed without abandoning required protection.",
    },
    HSE_PPE,
  ),
  reviewed(
    39,
    {
      B: "A supervisor may make the entry for an injured worker, but the Regulations do not reserve the task to that role.",
      C: "A manager or engineer can record it on the person's behalf, yet their job title is not a mandatory condition.",
      D: "A safety manager is not required to make every entry; the injured person or someone acting for them may do so.",
    },
    HSE_RIDDOR,
  ),
  reviewed(
    40,
    {
      A: "Sex does not make all men equally capable; health, size, training, fatigue and the task all affect capacity.",
      C: "Treating all women as identical ignores the individual factors that a manual-handling assessment must consider.",
      D: "Age and sex stereotypes are not an assessment of the actual worker's physical capability for the task.",
    },
    HSE_MANUAL_HANDLING,
  ),
  reviewed(
    41,
    {
      A: "Finding the cause is useful, but reporting to the enforcing authority is triggered by law rather than that local benefit.",
      C: "A report does not automatically assign company liability; it supplies the facts required by the reporting regime.",
      D: "The purpose is not to identify someone to blame, but to notify the legally specified event to the regulator.",
    },
    HSE_RIDDOR,
  ),
  reviewed(
    42,
    {
      A: "Fifteen kilograms is not a universal legal ceiling; posture, frequency, grip and individual capability can change the risk.",
      B: "Removing sharp edges does not make 35 kg universally acceptable, and the Regulations set no single maximum weight.",
      D: "A supervisor's instruction cannot override the duty to avoid, assess and reduce hazardous manual handling.",
    },
    HSE_MANUAL_HANDLING,
  ),
  reviewed(
    43,
    {
      A: "A team lift is limited by coordination and the other handler; it cannot be rated solely by the stronger person.",
      B: "The weaker person's capacity matters, but a coordinated pair can generally handle more than that person alone.",
      C: "Two individual capacities cannot simply be added because coordination, grip and shared movement reduce team efficiency.",
    },
    HSE_MANUAL_HANDLING,
  ),
  reviewed(
    44,
    {
      A: "Effort spent writing a document is not the safety reason to read it; its task controls and sequence are what matter.",
      B: "The instruction is part of communicating the safe system, not a way to fill otherwise idle time.",
      C: "Ignoring risk assessments and method statements would leave significant hazards and controls unexplained to the worker.",
    },
    HSE_RISK,
  ),
  reviewed(
    45,
    {
      A: "Blue and white indicates a mandatory action, such as wearing specified protective equipment, rather than a warning.",
      B: "Green and white marks a safe condition or emergency facility, not the presence of moving vehicles.",
      C: "Red, black and white is used for prohibition, whereas a fork-lift warning alerts rather than forbids.",
    },
    HSE_SAFETY_SIGNS,
  ),
  reviewed(
    46,
    {
      A: "Blue and white gives a mandatory instruction; it does not identify first-aid or emergency-escape facilities.",
      C: "Red, black and white denotes prohibition, which is the opposite of identifying a place or condition of safety.",
      D: "Yellow and black warns of danger; a first-aid kit sign instead directs people to emergency assistance.",
    },
    HSE_SAFETY_SIGNS,
  ),
  reviewed(
    47,
    {
      A: "Choosing a lifting technique is premature until the task has been checked to see whether handling can be eliminated.",
      B: "Weight is only one risk factor and need not be assessed at all if the lift can be designed out.",
      C: "Grip position matters during unavoidable handling, but avoidance comes before selecting how to hold the load.",
    },
    HSE_MANUAL_HANDLING,
  ),
  reviewed(
    48,
    {
      A: "Health and safety duties apply according to work and risk, not according to whether a worker is inexperienced.",
      B: "Small employers and small projects remain subject to construction health and safety law.",
      D: "Legal duties continue outside ordinary hours; the time of day does not suspend the Regulations.",
    },
    ["https://www.hse.gov.uk/construction/index.htm"],
  ),
  reviewed(
    49,
    {
      A: "Only remedying the matters identified in the notice permits resumption; informal precautions do not authorise continued work.",
      B: "A new risk assessment cannot postpone an immediate statutory stop or replace the required remedial action.",
      C: "An immediate notice does not allow the current job to be finished before the prohibited activity ceases.",
    },
    HSE_ENFORCEMENT,
  ),
  reviewed(
    50,
    {
      B: "Serving a notice does not make HSE the site's day-to-day supervisor; legal duties remain with those controlling the work.",
      C: "The inspector need not supervise the stopped activity; it must remain stopped until the specified risk is remedied.",
      D: "A site manager has no discretion to ignore a valid notice and may commit an offence by breaching it.",
    },
    HSE_ENFORCEMENT,
  ),
  reviewed(
    51,
    {
      A: "Door closers act on fire doors; fire-stops seal gaps and service penetrations in compartment boundaries.",
      C: "Fire-stopping contains fire and smoke but does not extinguish the burning material or replace firefighting equipment.",
      D: "The main purpose is to maintain compartmentation, not to shield the cable or pipe itself from heat damage.",
    },
    GOV_FIRE_SAFETY,
  ),
  reviewed(
    52,
    {
      A: "Landfill tax is not the operational reason for separation; mixed waste prevents useful materials being recovered cleanly.",
      B: "Inspection by the main contractor may support compliance, but it is not the environmental purpose of segregation.",
      D: "Separated containers may use more space; the benefit is preserving distinct recyclable and hazardous waste streams.",
    },
    GOV_CONSTRUCTION_WASTE,
  ),
  reviewed(
    53,
    {
      A: "Regulators set and enforce requirements, but each worker's daily choices affect waste, energy and pollution on site.",
      B: "The site manager coordinates arrangements, yet workers must still follow them and avoid wasteful or polluting acts.",
      C: "Sustainability covers all materials, energy, water and waste; it is not confined to asbestos projects.",
    },
    GOV_CONSTRUCTION_WASTE,
  ),
  reviewed(
    54,
    {
      A: "A makeshift lamp and flex lacks protected probe tips, appropriate ratings and a controlled indication of voltage.",
      B: "A multimeter can be mis-set or give a misleading reading and is not the preferred device for proving dead.",
      D: "A non-contact voltage stick can miss screened or poorly coupled conductors and cannot prove absence of voltage.",
    },
    HSE_HSG85,
  ),
  reviewed(
    55,
    {
      A: "An audible warning relies on memory and hearing and gives no personal control over reconnection at the isolator.",
      B: "A voltage stick cannot secure isolation or prevent another person from energising the distribution board.",
      C: "An agreed time is not a lock-off; work may overrun and someone may reconnect without knowing who remains exposed.",
    },
    HSE_HSG85,
  ),
  reviewed(
    56,
    {
      B: "Hiding hazardous waste in a mixed skip contaminates the load and bypasses the site's controlled waste stream.",
      C: "Taking business waste home transfers the hazard without authorisation, records or suitable storage.",
      D: "A household recycling centre may not accept commercial hazardous waste and is not automatically an authorised route.",
    },
    GOV_CONSTRUCTION_WASTE,
  ),
  reviewed(
    57,
    {
      B: "Six months exceeds the commonly specified three-month construction-site interval for temporary installations.",
      C: "Monthly inspection may be chosen for higher risk, but it is not the stated general periodic interval.",
      D: "A yearly interval is too long for temporary systems exposed to frequent movement, weather and site damage.",
    },
    HSE_HSG141,
  ),
  reviewed(
    58,
    {
      A: "A permit contains instructions, but its central assurance is the defined equipment state and boundary released for work.",
      B: "Issuing a permit coordinates responsibilities; it does not transfer all responsibility away from the people doing the work.",
      D: "A permit-to-work for dead work is not authority to treat the circuit as live or to bypass isolation.",
    },
    HSE_HSG85,
  ),
  reviewed(
    59,
    {
      B: "Live working is exceptional and must satisfy strict legal conditions; it is not the normal procedure.",
      C: "Insulated tools are a supplementary precaution and do not justify leaving equipment energised unnecessarily.",
      D: "Insulating gloves cannot replace secure isolation and proof of dead before ordinary electrical work.",
    },
    HSE_HSG85,
  ),
  reviewed(
    60,
    {
      B: "The harmonised UK nominal single-phase supply is 230 V, even though measured voltage may be near the historical 240 V value.",
      C: "Four hundred volts is the nominal voltage between phases on a three-phase system, not single phase to neutral.",
      D: "Four hundred and fifteen volts is the former three-phase nominal value and is not the present single-phase rating.",
    },
    HSE_ELECTRICITY,
  ),
  reviewed(
    61,
    {
      A: "Covering and waiting does not establish that the sides, access, atmosphere or buried services are safe.",
      B: "Flooding an excavation adds instability and drowning risk and is not a substitute for competent inspection.",
      D: "The duty is for a competent appointed person to inspect; an HSE inspector does not approve each excavation before entry.",
    },
    ["https://www.hse.gov.uk/construction/safetytopics/excavations.htm"],
  ),
  reviewed(
    62,
    {
      A: "A person with a rope is not a competent rescue system and may become another casualty without suitable equipment.",
      C: "Possessing PPE does not control foreseeable emergency recovery, so entry without a rescue plan remains unsafe.",
      D: "Short entries can still lead to sudden incapacitation, and planned bursts do not provide rescue capability.",
    },
    HSE_CONFINED_SPACES,
  ),
  reviewed(
    63,
    {
      A: "Speaking informally to drivers does not redesign the route or place the traffic risk under site management control.",
      B: "Riding on an undesigned part of a vehicle creates a crushing or fall risk and is not a safe alternative to walking.",
      D: "Walking at the edge may introduce blind corners or reversing hazards and should not replace an assessed pedestrian route.",
    },
    ["https://www.hse.gov.uk/workplacetransport/separating.htm"],
  ),
  reviewed(
    64,
    {
      A: "Returning a suspected faulty drill to storage leaves it available for another person to use without warning.",
      C: "Shaking the tool can worsen loose electrical or mechanical parts and provides no competent diagnosis.",
      D: "Repeated switching may re-energise a fault and expose the user to shock, heat or unexpected movement.",
    },
    HSE_WORK_EQUIPMENT,
  ),
  reviewed(
    65,
    {
      B: "Two hundred and thirty volts presents greater shock risk and is not the preferred temporary local-lighting supply.",
      C: "Four hundred volts is a three-phase distribution voltage, wholly unsuitable as a nominal local-lighting choice.",
      D: "A 110 V centre-tapped system gives about 55 V to earth; 55 V is not the nominal connector supply rating.",
    },
    HSE_HSG141,
  ),
  reviewed(
    66,
    {
      A: "Reaching age sixteen does not demonstrate knowledge of the tool, its hazards or the controls for the task.",
      B: "Being eighteen may remove some young-person restrictions, but age alone does not establish competence.",
      C: "A twenty-one-year threshold is not the control; an older untrained person can still operate the tool dangerously.",
    },
    HSE_WORK_EQUIPMENT,
  ),
  reviewed(
    67,
    {
      B: "Securing the base is a physical restraint and is more reliable than depending on another person's attention and strength.",
      C: "Tying the ladder near the top provides positive restraint and is preferred where a suitable point is available.",
      D: "A suitable stability device controls movement mechanically and is preferable to relying on a person footing it.",
    },
    HSE_LADDERS,
  ),
  reviewed(
    68,
    {
      A: "A label alone is incomplete unless the equipment is also removed from availability and the defect is reported.",
      B: "Locking equipment away controls immediate use but does not communicate the defect for assessment, repair or replacement.",
      D: "Immediate disposal may be wasteful or unsafe; a competent person should determine whether repair or replacement is appropriate.",
    },
    HSE_WORK_EQUIPMENT,
  ),
  reviewed(
    69,
    {
      B: "Availability is not a risk assessment; a safer platform may be required even when a ladder is close at hand.",
      C: "Sufficient length addresses reach only and says nothing about duration, task risk, stability or maintaining handhold.",
      D: "A ladder used as access does not become a suitable workplace merely when nobody is climbing through it.",
    },
    HSE_LADDERS,
  ),
  reviewed(
    70,
    {
      A: "A nearby pipe or scaffold is outside the platform, may be weak and can create ejection or crushing during movement.",
      C: "Clipping to the work structure defeats the platform's movement and can pull the worker from the basket.",
      D: "The boom is not automatically a designated anchor and may expose the lanyard to moving or trapping points.",
    },
    ["https://www.hse.gov.uk/construction/safetytopics/mewp.htm"],
  ),
  reviewed(
    71,
    {
      A: "A borrowed harness may not fit, be compatible or have an inspection history, so it cannot simply be assumed suitable.",
      B: "Hope provides no fall protection; proceeding without the assessed system risks an uncontrolled fatal fall.",
      C: "Improvised materials are not tested fall-arrest equipment and can fail under the very high forces of a fall.",
    },
    HSE_WORK_AT_HEIGHT,
  ),
  reviewed(
    72,
    {
      A: "Accounting for colleagues is a designated marshal's function within the plan, not a reason to delay following the procedure.",
      B: "Leaving by an unplanned route may enter the hazard area and prevents an accurate roll call at the assembly point.",
      D: "HSE is not the site's emergency-response service; calling it does not replace alarm, evacuation and emergency contacts.",
    },
    ["https://www.hse.gov.uk/construction/safetytopics/emergencies.htm"],
  ),
  reviewed(
    73,
    {
      A: "Falling objects can kill, but recent construction fatality statistics attribute the largest share to falls from height.",
      B: "Electrical accidents remain serious, yet they account for fewer construction deaths than falls from height.",
      D: "Trench collapses are foreseeable and often fatal, but they are not the leading fatal-accident type in the listed data.",
    },
    ["https://www.hse.gov.uk/statistics/assets/docs/construction.pdf"],
  ),
  reviewed(
    74,
    {
      B: "HSE notification is not the immediate clinical priority and is handled later by the responsible person if reportable.",
      C: "A casualty may need urgent treatment and should not be sent away without assessment by the first-aider.",
      D: "Incident details matter later, but questioning first can delay emergency assessment and summon no competent help.",
    },
    HSE_FIRST_AID,
  ),
  reviewed(
    75,
    {
      B: "A supervisor is not necessarily trained to assess an eye injury, so this detour can delay appropriate first aid.",
      C: "A handkerchief can scratch the cornea or push an embedded particle deeper into the eye.",
      D: "Clean hands do not make untrained removal safe; the eye should be assessed by the first-aider.",
    },
    HSE_FIRST_AID,
  ),
  reviewed(
    76,
    {
      A: "The main contractor may need notification through site arrangements, but the worker's immediate reporting line is the supervisor.",
      B: "A resident engineer may have no responsibility for the worker or fire procedure and is not the normal first report.",
      C: "The fire marshal manages evacuation duties; reporting through the supervisor ensures the incident is recorded and investigated.",
    },
    HSE_FIRE,
  ),
  reviewed(
    77,
    {
      A: "Using a nearby business shifts the welfare burden elsewhere and does not correct the employer-provided facilities.",
      B: "Workers should leave sanitation and hazardous cleaning to the arranged service rather than silently taking it on themselves.",
      C: "Persistent dirt is not normal or acceptable; it can spread illness and shows that welfare maintenance is failing.",
    },
    ["https://www.hse.gov.uk/construction/safetytopics/welfare.htm"],
  ),
  reviewed(
    78,
    {
      A: "Project duration affects servicing, but the basic number of facilities is driven principally by how many workers use them.",
      C: "Sex distribution affects whether separate facilities are needed, not the main numerical provision in this question.",
      D: "The work type may influence additional washing needs, but it does not replace the workforce-size calculation.",
    },
    ["https://www.hse.gov.uk/construction/safetytopics/welfare.htm"],
  ),
  reviewed(
    79,
    {
      A: "Cleaning must follow the manufacturer's and employer's arrangements; a universal once-weekly interval is not the legal duty.",
      C: "The employer provides and replaces required PPE without charging the worker for ordinary wear or damage.",
      D: "Defective PPE should be reported and controlled through the employer, not routinely returned by the wearer to its maker.",
    },
    HSE_PPE,
  ),
  reviewed(
    80,
    {
      A: "Self-employed status does not remove the need for head protection where the assessment identifies a foreseeable injury risk.",
      C: "Scaffold work can expose the head to falling or swinging objects; location on a scaffold is not an exemption.",
      D: "Personal preference cannot override the risk assessment, site rules or instructions for required protective equipment.",
    },
    HSE_PPE,
  ),
  reviewed(
    81,
    {
      A: "An inspector is not the first route for replacing defective PPE; the employer must be told so use can stop promptly.",
      B: "A workmate may lack the manufacturer's parts and competence, and an improvised repair can hide a continuing defect.",
      C: "Continuing after a casual repair relies on unverified protection and can expose the wearer when the equipment fails.",
    },
    HSE_PPE,
  ),
  reviewed(
    82,
    {
      A: "Chemical-protection glasses address splash hazards and may not have the impact rating needed for cartridge-tool fragments.",
      C: "Basic safety spectacles offer less enclosure and impact protection than goggles selected for high-velocity particles.",
      D: "Sunglasses control visible light only and are not certified impact PPE for a cartridge-operated tool.",
    },
    HSE_PPE,
  ),
  reviewed(
    83,
    {
      B: "Damage cost may be recorded, but it does not explain the unsafe conditions and actions that must be prevented.",
      C: "Documenting injuries describes consequences only and does not identify why the event happened or how to stop recurrence.",
      D: "A blame-led inquiry discourages evidence and misses underlying task, equipment and management causes.",
    },
    ["https://www.hse.gov.uk/pubns/hsg245.pdf"],
  ),
  reviewed(
    84,
    {
      A: "One day of incapacity is below the over-seven-day worker reporting threshold for this category.",
      B: "Two days is still below the current RIDDOR threshold, although the accident should remain in internal records.",
      D: "Half a day does not trigger over-seven-day reporting and should not be confused with accident-book recording.",
    },
    HSE_RIDDOR,
  ),
  reviewed(
    85,
    {
      A: "Help may be one control, but requesting it before assessing the load and task can create an unplanned team lift.",
      C: "Bending the knees is not a complete handling plan and is considered only after avoidability and other risks are assessed.",
      D: "Gloves can improve grip or protect skin, but they do not establish whether the lift itself is safe.",
    },
    HSE_MANUAL_HANDLING,
  ),
  reviewed(
    86,
    {
      A: "Holding the heavy side away increases the load's moment and forces the back and arms to work harder.",
      B: "Loading one arm according to perceived strength creates imbalance; the heavy side should be kept close to the body.",
      C: "Deliberately loading the weaker arm reduces control and does nothing to manage the offset centre of gravity.",
    },
    ["https://www.hse.gov.uk/msd/manual-handling/good-handling-technique.htm"],
  ),
  reviewed(
    87,
    {
      B: "Continuing after assistance can worsen an injury; the event must be reported and assessed before work resumes.",
      C: "Payment is a contractual issue and does not create the health record needed after a handling injury.",
      D: "Time away may or may not be medically required, but it does not replace recording and reporting the injury.",
    },
    HSE_RIDDOR,
  ),
  reviewed(
    88,
    {
      A: "Cost monitoring does not test whether the changed load, route, frequency or posture has altered injury risk.",
      B: "Watching the new operation can provide evidence, but the existing assessment must be formally reconsidered and updated.",
      C: "Staffing is only one factor; a major change can affect the whole task, load, environment and individual capability.",
    },
    HSE_MANUAL_HANDLING,
  ),
  reviewed(
    89,
    {
      B: "Green and white marks safe conditions and emergency facilities, not an instruction that must be followed.",
      C: "Red, black and white prohibits an activity; it is not used for a positive helmet-wearing command.",
      D: "Yellow and black warns of a hazard but does not prescribe the action that the viewer must take.",
    },
    HSE_SAFETY_SIGNS,
  ),
  reviewed(
    90,
    {
      B: "Headroom is one environmental factor, but it cannot replace assessment of the full lift, route and person.",
      C: "Kicking a load can damage it or injure the foot and gives no reliable information about handling stability.",
      D: "Weight alone omits shape, grip, posture, travel, frequency and capability, all of which can determine risk.",
    },
    HSE_MANUAL_HANDLING,
  ),
  reviewed(
    91,
    {
      A: "Acts and regulations impose enforceable duties; they are not optional recommendations for companies or individuals.",
      C: "Convenience is not a defence to non-compliance with a statutory health and safety requirement.",
      D: "Practical guidance explains ways to comply, whereas the Act and regulations themselves create legal obligations.",
    },
    ["https://www.hse.gov.uk/legislation/hswa.htm"],
  ),
  reviewed(
    92,
    {
      A: "A commercial guide may help interpretation, but it is not necessarily current or issued by the enforcing authority.",
      B: "Supplier guidance is valuable for products but cannot provide authoritative coverage of general legal duties.",
      D: "Employer rules apply locally and may exceed legal minima, but they are not the source of official national advice.",
    },
    ["https://www.hse.gov.uk/guidance/index.htm"],
  ),
  reviewed(
    93,
    {
      A: "An unsafe act or condition is a hazard or contributing circumstance, not the combination of likelihood and consequence.",
      B: "Calling work dangerous identifies concern but does not evaluate how likely harm is or how severe it could be.",
      C: "Something with potential to cause harm defines a hazard; risk evaluates that potential in its circumstances.",
    },
    HSE_RISK,
  ),
  reviewed(
    94,
    {
      A: "Aims belong in the statement of intent, but this choice omits the required responsibilities and practical arrangements.",
      B: "A director's private address is not part of the policy structure and contributes nothing to managing workplace risk.",
      C: "Naming an adviser does not allocate all responsibilities or describe the systems through which the policy operates.",
    },
    [
      "https://www.hse.gov.uk/simple-health-safety/policy/how-to-write-your-policy.htm",
    ],
  ),
  reviewed(
    95,
    {
      A: "CDM includes Design, not Demolition, and covers management across construction projects rather than demolition alone.",
      C: "Dangerous materials are addressed by regimes such as COSHH; they are not the expansion of CDM.",
      D: "This rearrangement omits Construction and Design, the two defining words in the Regulations' title.",
    },
    ["https://www.hse.gov.uk/construction/cdm/2015/index.htm"],
  ),
  reviewed(
    96,
    {
      A: "Flushing spreads oil into soil or drainage and turns a contained spill into a wider pollution incident.",
      B: "Soil only hides and absorbs the contamination; the polluted material still requires controlled recovery and disposal.",
      D: "Inverting containers can damage closures and promote leakage rather than providing secondary containment.",
    },
    ["https://www.gov.uk/guidance/storing-oil-at-a-home-or-business"],
  ),
  reviewed(
    97,
    {
      B: "Individuals as well as companies can commit environmental offences depending on their acts and responsibilities.",
      C: "Protected species and habitats are subject to controls; deliberate disturbance is not generally lawful.",
      D: "Business waste movements require the appropriate duty-of-care documentation and an authorised carrier or recipient.",
    },
    ["https://www.gov.uk/managing-your-waste-an-overview"],
  ),
  reviewed(
    98,
    {
      B: "Low-voltage dead work often uses secure isolation procedures, but it does not invariably require a formal permit.",
      C: "High-voltage live work is exceptional and governed by specialised safety rules; a dead-work permit does not authorise it.",
      D: "Low-voltage live work needs legal justification and precautions, but a permit-to-work is not automatic in every case.",
    },
    HSE_HSG85,
  ),
  reviewed(
    99,
    {
      A: "The need for a hasp comes from multiple personal locks, not from the absence of a device for one circuit-breaker.",
      B: "Unidentified circuits must be traced and labelled; a multi-lock hasp cannot correct uncertainty about the isolation point.",
      D: "Isolation arrangements are based on people exposed to reconnection risk, not on whether an inspector is nearby.",
    },
    HSE_HSG85,
  ),
  reviewed(
    100,
    {
      A: "Empty cement bags are normally a non-hazardous construction waste stream when uncontaminated and correctly segregated.",
      C: "Non-asbestos insulation is not automatically hazardous, although dust and product-specific controls may still be needed.",
      D: "Clean polythene and shrink wrap are generally segregated for recycling rather than treated as hazardous waste.",
    },
    ["https://www.gov.uk/dispose-hazardous-waste"],
  ),
  reviewed(
    101,
    {
      A: "Black is not the recognised site connector and cable identification for the 110 V reduced-low-voltage system.",
      B: "Blue is associated with the 230 V range and would risk connecting equipment to the wrong nominal supply.",
      C: "Red is associated with 400 V three-phase supplies, not the ordinary 110 V site-tool system.",
    },
    HSE_HSG141,
  ),
  reviewed(
    102,
    {
      A: "Calibration evidence concerns instrument accuracy; it does not stop a finger sliding onto an exposed probe tip.",
      B: "Colour can help identification but provides no physical protection against touching conductive metal.",
      C: "Country of manufacture does not determine probe safety; construction, ratings and exposed-tip protection do.",
    },
    ["https://www.hse.gov.uk/pubns/priced/gs38.pdf"],
  ),
  reviewed(
    103,
    {
      A: "Plant must never carry people on steps, buckets or other undesigned positions merely because the operator agrees.",
      C: "Rain increases slip and visibility hazards and does not create an exception to passenger-design requirements.",
      D: "Journey length cannot justify riding on machinery that lacks a designated seat and restraint.",
    },
    [
      "https://www.hse.gov.uk/workplacetransport/information/rider-operated-lift-trucks.htm",
    ],
  ),
  reviewed(
    104,
    {
      A: "Age does not demonstrate electrical condition or suitability; instruments require appropriate design, maintenance and checks.",
      B: "Yellow colour has no protective function and cannot establish voltage rating or finger-safe construction.",
      D: "Bare probes increase the chance of bridging conductors or touching live metal and conflict with safe test-lead guidance.",
    },
    ["https://www.hse.gov.uk/pubns/priced/gs38.pdf"],
  ),
  reviewed(
    105,
    {
      A: "Testing line to earth is part of proving dead, but the detector must first be proved functional.",
      B: "A line-neutral test can falsely reassure if the detector has failed; pre-use proving must precede circuit measurements.",
      D: "Equipment not operating may result from a control fault and does not prove every conductor is dead.",
    },
    HSE_HSG85,
  ),
  reviewed(
    106,
    {
      B: "Staffing is considered only after establishing that entry is unavoidable and assessing the confined-space hazards.",
      C: "Commercial pricing cannot determine whether a worker should be exposed to a dangerous enclosed atmosphere.",
      D: "Tool selection follows the safe method; arranging tools first assumes entry before avoidance has been considered.",
    },
    HSE_CONFINED_SPACES,
  ),
  reviewed(
    107,
    {
      A: "Electrical warning tape identifies a service route, not groundwater conditions or a need to dewater the excavation.",
      B: "Support requirements depend on ground and excavation risk, not on the colour of buried service marker tape.",
      D: "Contaminated land requires separate evidence and controls; yellow service tape is not a soil-contamination marker.",
    },
    ["https://www.hse.gov.uk/pubns/priced/hsg47.pdf"],
  ),
  reviewed(
    108,
    {
      A: "An annual check can miss damage for many months on equipment that is handled and moved repeatedly.",
      B: "Daily checking is too infrequent where the same item changes users or is used several times in one day.",
      D: "Weekly inspection leaves each use dependent on conditions that may have changed since the previous check.",
    },
    ["https://www.hse.gov.uk/electricity/faq-portable-appliance-testing.htm"],
  ),
  reviewed(
    109,
    {
      A: "A homemade guard lacks the tool's tested strength, clearances and interlocks and may create new trapping hazards.",
      C: "Working quickly increases loss-of-control risk and gives no protection from the exposed moving part.",
      D: "Slow operation does not prevent contact, ejection or entanglement with an unguarded power tool.",
    },
    HSE_WORK_EQUIPMENT,
  ),
  reviewed(
    110,
    {
      A: "Footing depends on another person's continuous attention and is HSE's last-resort method when securing is not practicable.",
      C: "A stability device is useful where tying is not practicable, but positive tying remains the preferred method listed.",
      D: "Wedging can move or crush and does not provide the reliable upper restraint achieved by tying to a sound point.",
    },
    HSE_LADDERS,
  ),
  reviewed(
    111,
    {
      A: "Using another drill may keep the task moving, but the defective tool remains unreported and available to others.",
      C: "Taping a switch on removes control of the tool and can cause unexpected starting or inability to stop it.",
      D: "Untrained repair can expose live parts or defeat safety features; the fault requires competent attention.",
    },
    HSE_WORK_EQUIPMENT,
  ),
  reviewed(
    112,
    {
      B: "A monthly interval cannot catch damage that occurs during a particular use or between scheduled checks.",
      C: "Weekly checking is not enough for a user check because condition may change each time equipment is handled.",
      D: "Waiting until replacement is needed abandons the preventive purpose of finding defects before exposure.",
    },
    ["https://www.hse.gov.uk/electricity/faq-portable-appliance-testing.htm"],
  ),
  reviewed(
    113,
    {
      A: "An accident triggers an additional inspection, but it is not the only event requiring a platform inspection.",
      B: "Inspection on the same day may be prudent but is not the maximum recurring seven-day interval stated in the Regulations.",
      C: "A month is too long between recorded inspections for a construction working platform from which a person may fall.",
    },
    ["https://www.hse.gov.uk/construction/safetytopics/scaffold.htm"],
  ),
  reviewed(
    114,
    {
      A: "Fragile areas may be hidden or poorly marked, and simply intending to avoid them provides no fall prevention.",
      C: "Purlins are not designed as access routes and a slip can put the worker directly onto a fragile sheet.",
      D: "Crossing directly gives no protection against misidentified panels, loss of balance or a surface failing unexpectedly.",
    },
    ["https://www.hse.gov.uk/construction/safetytopics/fragile.htm"],
  ),
  reviewed(
    115,
    {
      A: "Fire may be one emergency signalled, but workers should follow the site procedure rather than assume one cause.",
      B: "A toxic release may use a siren, yet the same general alarm can cover other events requiring different actions.",
      D: "An explosion could trigger the alarm, but the sound itself does not establish that this specific event occurred.",
    },
    ["https://www.hse.gov.uk/construction/safetytopics/emergencies.htm"],
  ),
  reviewed(
    116,
    {
      A: "Chemical burns cause serious harm but account for a smaller share of construction fatalities than falls from height.",
      C: "Solvent inhalation is a controlled health risk, not the leading immediate fatal-accident category on sites.",
      D: "Vehicle movements kill workers, but current construction statistics still show falls from height as the largest category.",
    },
    ["https://www.hse.gov.uk/statistics/assets/docs/construction.pdf"],
  ),
  reviewed(
    117,
    {
      A: "Cutting the rung changes the ladder's structure and leaves an incomplete climbing surface rather than a sound repair.",
      C: "Loading a visibly split rung may make it fail and cause the very fall the check is intended to prevent.",
      D: "Tape cannot restore the timber's load capacity and may conceal growth of the split from the next user.",
    },
    HSE_LADDERS,
  ),
  reviewed(
    118,
    {
      A: "Water can cool burning clothing once electrical sources are excluded; electrocution is the distinctive prohibition here.",
      B: "Water is suitable for many ordinary solid combustibles such as furniture when no electrical or liquid-fuel hazard exists.",
      C: "Wood is a Class A fuel for which a water extinguisher is normally effective after electrical risks are ruled out.",
    },
    HSE_FIRE,
  ),
  reviewed(
    119,
    {
      A: "Controlling severe bleeding with appropriate first-aid measures is within the trained first-aider's role.",
      C: "Resuscitation is a core emergency skill and must not be withheld when a casualty is not breathing normally.",
      D: "An unconscious casualty requires assessment and appropriate care; unconsciousness is not a reason to avoid treatment.",
    },
    HSE_FIRST_AID,
  ),
  reviewed(
    120,
    {
      A: "Rest may feel helpful, but sudden back pain after lifting needs assessment before the casualty is moved or work resumes.",
      B: "Continuing the lift can worsen the casualty's injury and expose the helper to the same uncontrolled load.",
      D: "Leaving the box addresses the task but not the injured person, who still needs competent first-aid assessment.",
    },
    HSE_FIRST_AID,
  ),
  reviewed(
    121,
    {
      A: "Carbon dioxide can smother a small flammable-liquid fire without spreading the burning liquid across the floor.",
      B: "Suitable foam forms a blanket over many flammable liquids and suppresses vapour when used for its rated fire class.",
      C: "Dry powder interrupts combustion and is rated for flammable-liquid fires, although its discharge has visibility drawbacks.",
    },
    HSE_FIRE,
  ),
  reviewed(
    122,
    {
      B: "Searching without immediately warning others delays evacuation; use the nearest recognised alarm method at once.",
      C: "Emergency services should be called under the procedure, but people in immediate danger must first be alerted.",
      D: "Trying to fight the fire before raising the alarm can trap the worker and leaves everyone else unaware.",
    },
    HSE_FIRE,
  ),
  reviewed(
    123,
    {
      A: "Acne is not the principal serious disease linked to cumulative ultraviolet exposure from working in strong sunlight.",
      B: "Some exposures cause dermatitis, but ultraviolet radiation's major long-term danger is malignant skin change.",
      C: "Rickets is associated with vitamin D deficiency, not excessive ultraviolet exposure to bare skin.",
    },
    ["https://www.hse.gov.uk/skin/sunprotect.htm"],
  ),
  reviewed(
    124,
    {
      A: "Ignoring suspected asbestos can release fibres during further disturbance and expose everyone in the work area.",
      B: "Painting does not identify the material or make unplanned drilling, cutting or removal safe.",
      C: "Removal is licensed or specially controlled work in many circumstances and must not start on suspicion alone.",
    },
    HSE_ASBESTOS,
  ),
  reviewed(
    125,
    {
      A: "Wholesome drinking water is a required basic welfare provision from the start of construction work.",
      C: "Suitable sanitary conveniences are mandatory welfare facilities; workers cannot be expected to find their own.",
      D: "Washing facilities are required to protect hygiene and health, with additional provision where work creates contamination.",
    },
    ["https://www.hse.gov.uk/construction/safetytopics/welfare.htm"],
  ),
  reviewed(
    126,
    {
      A: "Drilling the shell invalidates its tested construction and can reduce impact and penetration resistance.",
      B: "Even small holes create stress concentrations and unauthorised modification; size does not make the alteration acceptable.",
      C: "PPE must be used according to instructions, so its wearer cannot choose to weaken or modify it.",
    },
    HSE_PPE,
  ),
  reviewed(
    127,
    {
      A: "A high-visibility vest is not thermal clothing and may provide little insulation in cold conditions.",
      B: "Following an instruction is required, but it does not explain the road-traffic hazard that the garment controls.",
      D: "Colleague recognition is secondary; the critical need is early detection by approaching drivers and mobile-plant operators.",
    },
    ["https://www.hse.gov.uk/roadsafety/worker-safety.htm"],
  ),
  reviewed(
    128,
    {
      B: "Floor drilling can still eject sharp aggregate and dust upward or sideways into the operator's eyes.",
      C: "A small bit can release high-speed fragments just as readily; bit diameter is not the trigger for protection.",
      D: "Overhead work increases exposure but is not the only orientation in which concrete particles can strike the eye.",
    },
    HSE_PPE,
  ),
  reviewed(
    129,
    {
      A: "Not every near miss is itself RIDDOR-reportable, so prevention rather than a blanket statutory report is the reason.",
      C: "Discipline-focused reporting discourages openness and does not address the conditions that could injure someone next time.",
      D: "Near-miss reporting can initially raise figures; its purpose is learning and risk reduction, not cosmetic statistics.",
    },
    ["https://www.hse.gov.uk/leadership/learning.htm"],
  ),
  reviewed(
    130,
    {
      A: "A supplied-air helmet provides clean air and a high assigned protection factor when correctly selected and used.",
      C: "A positive-pressure powered respirator generally provides greater inward-leakage protection than a negative-pressure half mask.",
      D: "Self-contained breathing apparatus supplies its own breathable air and provides far higher protection for suitable trained use.",
    },
    ["https://www.hse.gov.uk/pubns/priced/hsg53.pdf"],
  ),
  reviewed(
    131,
    {
      A: "Amputation is a reportable specified injury caused by an incident, not an occupational disease diagnosis.",
      B: "Ordinary influenza is infectious illness and is not the work-caused respiratory sensitisation category listed here.",
      C: "Mental ill health is important but is not included as a reportable occupational disease under the listed RIDDOR categories.",
    },
    ["https://www.hse.gov.uk/riddor/occupational-diseases.htm"],
  ),
  reviewed(
    132,
    {
      A: "Arm position alone does not stabilise the body or control back loading, grip, load distance and twisting.",
      B: "Deliberately bending through the back while lifting increases spinal loading and loss of control.",
      D: "A back brace is not a substitute for avoiding hazardous handling, assessing the task and using sound movement.",
    },
    ["https://www.hse.gov.uk/msd/manual-handling/good-handling-technique.htm"],
  ),
  reviewed(
    133,
    {
      A: "Holding a load away from the trunk greatly increases leverage and stress on the back and shoulders.",
      C: "Feet together reduce stability, while an arm's-length load creates unnecessary leverage and poor control.",
      D: "Further flexing a bent back under load is specifically avoided in HSE's handling technique guidance.",
    },
    HSE_MANUAL_HANDLING,
  ),
  reviewed(
    134,
    {
      A: "A possible civil claim does not determine RIDDOR status; the event and injury category do.",
      B: "Near misses are valuable internally, but only listed dangerous occurrences require notification when nobody is hurt.",
      C: "Minor injuries belong in workplace records but are not all reportable to the enforcing authority.",
    },
    ["https://www.hse.gov.uk/riddor/specified-injuries.htm"],
  ),
  reviewed(
    135,
    {
      A: "An offset centre of gravity changes how a load tips and how close its heavy side must be held.",
      C: "Size, damage and shape affect grip, visibility, stability and whether mechanical assistance is needed.",
      D: "Weight directly affects handling force and must be considered alongside posture, frequency and capability.",
    },
    HSE_MANUAL_HANDLING,
  ),
  reviewed(
    136,
    {
      A: "Strength alone does not control posture, repetition, grip, route or sudden movement, so it cannot make any load acceptable.",
      C: "Arm's-length carrying multiplies back and shoulder loading; loads should normally be kept close.",
      D: "Maintaining a bent back while force is applied increases strain and conflicts with controlled handling guidance.",
    },
    HSE_MANUAL_HANDLING,
  ),
  reviewed(
    137,
    {
      A: "Blue and white communicates a mandatory positive instruction rather than an activity that is forbidden.",
      B: "Green and white identifies a safe condition or emergency facility and does not prohibit pedestrian entry.",
      D: "Yellow and black warns of a hazard; prohibition requires the red circular form with black and white detail.",
    },
    HSE_SAFETY_SIGNS,
  ),
  reviewed(
    138,
    {
      B: "Employees have duties, but employers and self-employed people also must conduct work without endangering others.",
      C: "Employers carry overarching duties, yet workers must also take reasonable care and cooperate with controls.",
      D: "Members of the public are protected by work duties, but the question asks who at work carries a duty to work safely.",
    },
    ["https://www.hse.gov.uk/legislation/hswa.htm"],
  ),
  reviewed(
    139,
    {
      A: "The statutory term is Approved, not Accepted; an ACOP has a specific evidential status under health and safety law.",
      B: "Neither 'Accepted' nor 'Provisions' forms the recognised title used for HSE-approved practical guidance.",
      D: "An ACOP is a Code of Practice, not a single approved condition attached to an activity.",
    },
    ["https://www.hse.gov.uk/pubns/books/index-legal-ref.htm"],
  ),
  reviewed(
    140,
    {
      B: "The assessment is a decision process, not merely paperwork; recording supports rather than replaces analysis and action.",
      C: "A suitable assessment guides priorities and controls and is central to preventing harm, not an optional administrative exercise.",
      D: "Assessment alone cannot prevent an accident unless its findings are implemented, monitored and revised when conditions change.",
    },
    HSE_RISK,
  ),
  reviewed(
    141,
    {
      A: "A safety officer may advise and administer the system, but the most senior leadership must own the statement of intent.",
      B: "Company-secretary status does not necessarily carry executive control over the undertaking's health and safety commitments.",
      D: "A site manager controls a location but is not ordinarily the most senior person responsible for the company-wide policy.",
    },
    [
      "https://www.hse.gov.uk/simple-health-safety/policy/how-to-write-your-policy.htm",
    ],
  ),
  reviewed(
    142,
    {
      A: "'Health Notice' is not one of the statutory improvement or prohibition notices used to enforce these duties.",
      C: "Insurance pricing is a commercial consequence and is not an enforcement power available to HSE inspectors.",
      D: "Obstruction may be an offence, but an 'Obstruction Notice' is not the statutory notice described here.",
    },
    HSE_ENFORCEMENT,
  ),
  reviewed(
    143,
    {
      A: "Open containers allow vapour, rain ingress and spills and are not a safe means of relieving pressure.",
      C: "Transparency does not establish compatibility, labelling, security or secondary containment for a hazardous liquid.",
      D: "The nearest container may be incompatible, unlabelled or damaged and cannot be chosen merely for convenience.",
    },
    ["https://www.hse.gov.uk/construction/safetytopics/storage.htm"],
  ),
  reviewed(
    144,
    {
      A: "Discarding a usable remainder creates avoidable waste before reuse by the team has been considered.",
      B: "Weight may affect handling or waste records but does not determine whether another worker can use the material.",
      C: "Labelling helps identify material but does not itself prevent a useful item from entering the waste stream.",
    },
    GOV_CONSTRUCTION_WASTE,
  ),
  reviewed(
    145,
    {
      A: "A correctly fitted lockout prevents circuit-breaker operation and is a recognised way to secure isolation.",
      B: "Removing the fuse and controlling access can provide secure isolation when implemented under the safe system.",
      C: "A suitable padlocked isolator provides positive security against inadvertent reconnection by another person.",
    },
    HSE_HSG85,
  ),
  reviewed(
    146,
    {
      A: "Wellington boots are not a universal electrical safeguard and may be wet, damaged or unsuitable for the voltage.",
      C: "Dry weather does not prove a conductor dead or remove the possibility of a fatal current path.",
      D: "Cotton gloves have no electrical insulating rating and do not make contact with energised parts safe.",
    },
    HSE_ELECTRICITY,
  ),
  reviewed(
    147,
    {
      A: "Whole amperes are far above the range where shock can already disrupt breathing or heart rhythm.",
      B: "Microamperes are one-thousandth of a milliampere and are generally below the ordinary harmful-shock thresholds discussed.",
      D: "Kiloamperes describe fault-current magnitudes, not the small body current capable of causing physiological injury.",
    },
    HSE_ELECTRICITY,
  ),
  reviewed(
    148,
    {
      A: "People, loads and equipment can approach a line even without passing directly underneath it.",
      B: "Cranes are one concern, but ladders, scaffold tubes, tipping bodies and MEWPs can also reach overhead conductors.",
      C: "Electricity can arc across an air gap, so bare-hand contact is not required for serious injury.",
    },
    ["https://www.hse.gov.uk/pubns/gs6.htm"],
  ),
  reviewed(
    149,
    {
      A: "General experience does not demonstrate training on the particular machine or formal authority to use it.",
      C: "A road driving licence does not cover construction plant controls, stability, attachments or site-specific hazards.",
      D: "Age alone cannot establish competence, and trained authorised younger workers may use some equipment under suitable controls.",
    },
    HSE_WORK_EQUIPMENT,
  ),
  reviewed(
    150,
    {
      A: "PPE may remain necessary, but it does not prevent the tool from starting while hands are at the adjustment point.",
      B: "Lead condition matters for use, yet an untwisted lead does not isolate the tool from electrical power.",
      D: "Toe protection cannot control unexpected rotation, cutting or electric shock during adjustment.",
    },
    HSE_WORK_EQUIPMENT,
  ),
  reviewed(
    151,
    {
      A: "Two metres is not the minimum top-rail height and would be an unnecessarily high dimension for this requirement.",
      B: "Nine hundred and ten millimetres reflects older figures and falls below the current 950 mm minimum for construction work.",
      C: "Four hundred and seventy millimetres relates to limiting gaps and intermediate protection, not the top guard-rail height.",
    },
    ["https://www.hse.gov.uk/construction/safetytopics/scaffold.htm"],
  ),
  reviewed(
    152,
    {
      B: "Working alone increases the consequences of a fall and never makes absence of fall protection acceptable.",
      C: "A companion cannot reliably arrest a fall or perform a suspended rescue without a designed system and plan.",
      D: "Low wind removes only one factor; gravity, edges, slips and structural failure still create a fall risk.",
    },
    HSE_WORK_AT_HEIGHT,
  ),
  reviewed(
    153,
    {
      A: "Plant misuse causes fatal incidents, but the cited construction data attributes the largest share to falls from height.",
      B: "Trenches and confined spaces require strong controls, yet they account for a smaller share of deaths than falls.",
      C: "Electrical danger can be fatal, but it is not the category responsible for roughly half of the cited deaths.",
    },
    ["https://www.hse.gov.uk/statistics/assets/docs/construction.pdf"],
  ),
  reviewed(
    154,
    {
      A: "Warning others is useful once urgent care is under way, but it does not limit continuing tissue damage in the casualty.",
      B: "A dry covering comes after adequate cooling; covering first traps heat in the burned tissue.",
      D: "Cream or petroleum products retain heat and complicate clinical assessment, so they should not be rubbed into a fresh burn.",
    },
    ["https://www.nhs.uk/conditions/burns-and-scalds/treatment/"],
  ),
  reviewed(
    155,
    {
      A: "Fear of blame cannot justify leaving others unaware of a fire that may spread rapidly.",
      C: "Attempting extinction without warning people can delay evacuation and leave the worker trapped if the fire grows.",
      D: "Continuing work ignores an escalating emergency and prevents the site's fire procedure from starting.",
    },
    HSE_FIRE,
  ),
  reviewed(
    156,
    {
      A: "A nurse may later advise on exposure, but the work area first needs to be stopped and controlled through supervision.",
      B: "Sweeping and binning fragments can release fibres and creates unlicensed, uncontained asbestos waste.",
      C: "Damping alone does not identify the material or authorise continued disturbance under an assessed method.",
    },
    HSE_ASBESTOS,
  ),
  reviewed(
    157,
    {
      A: "Failure to notify HSE does not itself put lead into the bloodstream; exposure occurs through physical routes into the body.",
      B: "Safety footwear protects the feet but does not stop contaminated hands transferring lead to food or the mouth.",
      D: "Goggles protect the eyes; they do not control ingestion from eating with lead-contaminated hands.",
    },
    ["https://www.hse.gov.uk/lead/index.htm"],
  ),
  reviewed(
    158,
    {
      A: "A one-year age limit is not a general conformity requirement and says nothing about the helmet's standard or condition.",
      C: "Two years is not a universal expiry period; service life depends on the maker's instructions, use and damage.",
      D: "Five years is neither an automatic acceptance nor rejection rule and cannot replace conformity and pre-use checks.",
    },
    ["https://www.gov.uk/guidance/using-the-ukca-marking"],
  ),
  reviewed(
    159,
    {
      A: "Continuing with damaged PPE leaves the identified hazard uncontrolled exactly when protection may be needed.",
      B: "Waiting for a convenient replacement exposes the worker in the meantime; use should stop and the defect be reported.",
      C: "Shorter exposure does not restore the equipment's protection or make an unknown failure mode predictable.",
    },
    HSE_PPE,
  ),
  reviewed(
    160,
    {
      A: "Visibility may be useful for some tasks, but colour alone does not make a helmet fit and remain secure on its wearer.",
      B: "A name label assists identification but contributes no impact protection, fit or compatibility with the user's head.",
      D: "Being less than a year old cannot compensate for poor fit, damage or use contrary to the manufacturer's instructions.",
    },
    HSE_PPE,
  ),
  reviewed(
    161,
    {
      A: "Plant damage without personal injury belongs in maintenance or incident records, not necessarily the statutory accident book.",
      B: "The recording duty is not triggered only when first aid is needed; even a minor work injury should be recorded.",
      D: "Seven-day incapacity is a separate RIDDOR reporting threshold and is not the threshold for an accident-book entry.",
    },
    HSE_RIDDOR,
  ),
  reviewed(
    162,
    {
      A: "Knee grazes may occur, but floor-level lifting more commonly overloads the lower back through poor posture and leverage.",
      B: "Vibration white finger results from prolonged vibration exposure, not from a single floor-lifting movement.",
      C: "A head injury is not the characteristic manual-handling outcome unless a separate falling-object event occurs.",
    },
    HSE_MANUAL_HANDLING,
  ),
  reviewed(
    163,
    {
      B: "Twenty kilograms is below the chart's 25 kg figure for this precise zone and therefore is not the published filter value.",
      C: "Forty kilograms substantially exceeds the filter value and would require a more detailed assessment.",
      D: "Fifty kilograms is double the chart figure and must never be treated as a simple low-risk screening weight.",
    },
    ["https://www.hse.gov.uk/msd/manual-handling-risk-filters.htm"],
  ),
  reviewed(
    164,
    {
      B: "Proceeding despite a known injury risk bypasses both the duty to avoid the handling and the need for assessment.",
      C: "Dragging can add high force, poor posture and damage and is not automatically safer than carrying.",
      D: "Informally adding a helper can create coordination hazards; a team lift must follow an assessed plan where appropriate.",
    },
    HSE_MANUAL_HANDLING,
  ),
  reviewed(
    165,
    {
      A: "Attendance is an administrative check and gives no assurance that access, guarding or housekeeping remains safe.",
      B: "Performance supervision may be needed, but a workplace inspection looks for hazards and control failures, not productivity.",
      D: "Inspections should find and correct risks routinely, rather than being cosmetic preparation for a regulator's visit.",
    },
    HSE_RISK,
  ),
  reviewed(
    166,
    {
      A: "This limited fine and six-month term understates the sentencing powers available for relevant offences tried on indictment.",
      C: "Three years exceeds the stated maximum imprisonment, while the monetary figure is not the unlimited Crown Court fine.",
      D: "Although two years is the relevant imprisonment maximum, the Crown Court fine is not capped at £20,000.",
    },
    ["https://www.hse.gov.uk/enforce/our-role-as-regulator.htm"],
  ),
  reviewed(
    167,
    {
      A: "The phrase predicts an event but does not identify the thing or condition that has potential to cause harm.",
      B: "Likelihood is part of risk; a hazard exists because it can cause harm regardless of how likely exposure is.",
      D: "A place can contain hazards, but location alone is not the definition of the harmful agent or condition.",
    },
    HSE_RISK,
  ),
  reviewed(
    168,
    {
      A: "An immediate notice does not allow the current work to be finished before the statutory stop takes effect.",
      C: "Work cannot continue until the end of the day when the notice identifies an imminent risk requiring immediate cessation.",
      D: "The activity remains prohibited beyond that day until the matters giving rise to the serious risk are remedied.",
    },
    HSE_ENFORCEMENT,
  ),
  reviewed(
    169,
    {
      A: "A course may contribute to competence, but the Regulation focuses on effective knowledge, experience or supervision.",
      B: "Supervision must be appropriate to prevent danger; the mere presence of any supervisor is not enough.",
      C: "Job title is not the legal test, and non-electricians may do limited work when competence or supervision is adequate.",
    },
    ["https://www.legislation.gov.uk/uksi/1989/635/regulation/16"],
  ),
  reviewed(
    170,
    {
      B: "Extra-low voltage can still create electrical danger in some environments and is not excluded as a class.",
      C: "High-voltage systems are covered, but the Regulations are not restricted to them.",
      D: "Low-voltage systems are covered, but the statutory scope also reaches other voltage ranges where electrical danger arises.",
    },
    ["https://www.hse.gov.uk/pubns/books/hsr25.htm"],
  ),
  reviewed(
    171,
    {
      A: "A purpose-made circuit-breaker lockout and padlock secure the device against inadvertent operation.",
      B: "Padlocking a suitable isolating switch provides the positive security that a safe isolation needs.",
      C: "Removing the fuse and securing access can disconnect the circuit and prevent unauthorised replacement under the procedure.",
    },
    HSE_HSG85,
  ),
  reviewed(
    172,
    {
      A: "A detached scrap of passive fibre does not retain a laser beam once it is disconnected from an active source.",
      B: "Ordinary glass fibre offcuts are a sharp-injury hazard, not a toxic substance that poisons by contact.",
      C: "Cable remnants do not normally stay hot; their danger is the fine, stiff shard penetrating tissue.",
    },
    ["https://www.hse.gov.uk/pubns/indg354.pdf"],
  ),
  reviewed(
    173,
    {
      A: "Communications optical power can injure the retina but does not behave like a cutting beam boring through skin.",
      C: "Fibre carries light rather than a conductive electric current, so electrical transfer is not the eye hazard.",
      D: "Some hazardous wavelengths are invisible; hypnosis by colour is fictional and would miss the retinal exposure risk.",
    },
    ["https://www.hse.gov.uk/pubns/indg354.pdf"],
  ),
  reviewed(
    174,
    {
      A: "Disconnecting conductors at the board is more intrusive and unnecessary where the board's main isolator can secure all supplies.",
      B: "The premise states there is no local circuit isolation, so relying on an individual breaker or fuse does not solve it.",
      D: "The distributor's sealed cut-out is not for ordinary contractors to remove and may expose dangerous live parts.",
    },
    HSE_HSG85,
  ),
  reviewed(
    175,
    {
      B: "Emergency medical help may be needed, but asking specifically for the fire brigade does not first stop current through the casualty.",
      C: "The network operator is not the immediate rescue service and a phone call leaves the casualty connected to danger.",
      D: "Touching or pulling the casualty before isolation can pass the shock current through the rescuer too.",
    },
    HSE_ELECTRICITY,
  ),
  reviewed(
    176,
    {
      B: "A lightning surge may create several effects, but an RCD is not specifically a lightning-protection device.",
      C: "Overload protection is provided by a fuse or overcurrent circuit-breaker; balanced load current does not trip an RCD.",
      D: "A line-neutral short circuit is an overcurrent fault with balanced outgoing and returning current, so an RCD alone may not respond.",
    },
    HSE_ELECTRICITY,
  ),
  reviewed(
    177,
    {
      A: "One hundred and ten volts exceeds the conventional extra-low-voltage boundary even when centre-tapped site supplies reduce voltage to earth.",
      B: "Two hundred and thirty volts is ordinary single-phase low voltage and presents a substantial contact-shock hazard.",
      C: "Four hundred volts is a three-phase low-voltage system value and is far above the extra-low-voltage boundary.",
    },
    HSE_ELECTRICITY,
  ),
  reviewed(
    178,
    {
      A: "Moving unidentified bare conductors may bring them into contact with the worker or another live surface.",
      B: "Appearance cannot prove the ends dead, so continuing nearby leaves an uncontrolled electrocution and arc risk.",
      D: "The human body must never be used as a voltage detector; touching can produce fatal current before any reaction is possible.",
    },
    HSE_HSG85,
  ),
  reviewed(
    179,
    {
      A: "A second person may form part of precautions, but accompaniment is not the universal legal basis for every live task.",
      C: "Chance and optimism are not controls and provide no evidence that live work has been justified or made safe.",
      D: "Gloves alone cannot control arcing, inadvertent contact, unsuitable tools or the need to avoid live work.",
    },
    HSE_HSG85,
  ),
  reviewed(
    180,
    {
      A: "Live work is not freely acceptable; each task must satisfy the strict conditions in Regulation 14.",
      B: "An absolute ban is also inaccurate because carefully justified live work is lawful in exceptional circumstances.",
      D: "Normalising live work reverses the hierarchy: equipment should ordinarily be isolated and proved dead.",
    },
    ["https://www.hse.gov.uk/foi/internalops/ocs/400-499/480_2.htm"],
  ),
  reviewed(
    181,
    {
      A: "A wire link has unknown current characteristics and can allow the flex or appliance to overheat and catch fire.",
      B: "A nail will not melt safely under fault current and can leave the plug and cable without overcurrent protection.",
      C: "Silver paper can bridge the fuse clips indefinitely, creating overheating and shock risk instead of controlled disconnection.",
    },
    [
      "https://www.electricalsafetyfirst.org.uk/guidance/safety-around-the-home/plugs-and-fuses/",
    ],
  ),
  reviewed(
    182,
    {
      A: "A caution notice communicates the isolation and warns others not to operate the secured device.",
      B: "Identifying the correct isolator prevents the wrong circuit being locked while the intended conductors remain live.",
      C: "Proving dead at the work point confirms isolation has actually removed dangerous voltage from every relevant conductor.",
    },
    HSE_HSG85,
  ),
  reviewed(
    183,
    {
      A: "Broken bones can follow a fall caused by shock, but they are not the characteristic direct electrical effects listed.",
      C: "Chest pain can occur, yet the major direct outcomes include severe burns and disruption of the heart rhythm.",
      D: "Dermatitis is skin inflammation from irritants or allergy, not an acute effect of a major electric current path.",
    },
    HSE_ELECTRICITY,
  ),
  reviewed(
    184,
    {
      A: "A cable locator prevents excavation strikes and provides no automatic disconnection for a shock from portable equipment.",
      C: "A generator is a source, not additional personal shock protection for a 230 V portable appliance.",
      D: "A step-down transformer would change the equipment voltage and cannot supply a tool designed solely for 230 V at its rated operation.",
    },
    HSE_HSG141,
  ),
  reviewed(
    185,
    {
      A: "Boredom is not the specified serious confined-space hazard and does not explain rapid incapacitation in a sewer.",
      C: "Getting wet is uncomfortable and can add electrical risk, but harmful atmosphere is the central sewer danger listed.",
      D: "Time pressure affects planning but is not an inherent atmospheric hazard created by the confined space.",
    },
    HSE_CONFINED_SPACES,
  ),
  reviewed(
    186,
    {
      A: "Toxic gases and oxygen deficiency are often invisible, so visual inspection cannot establish atmospheric safety.",
      B: "A dangerous atmosphere can overcome a worker before a quick escape is possible, even during a short entry.",
      C: "Smell is unreliable and the attempt exposes the worker; some lethal gases have no detectable odour.",
    },
    HSE_CONFINED_SPACES,
  ),
  reviewed(
    187,
    {
      A: "Tool checks may be included, but a permit principally coordinates hazards, isolations, boundaries and authorisation for the work.",
      B: "Payment belongs to the contract and is unrelated to the permit's control of hazardous work.",
      C: "Speed is not the permit's objective and can conflict with the deliberate checks required for safe execution.",
    },
    HSE_HSG85,
  ),
  reviewed(
    188,
    {
      A: "Young workers have the same right to suitable PPE where risk remains; age does not remove the employer's duty.",
      B: "Health and safety law includes specific protection for young people through assessment of their inexperience and maturity.",
      D: "Leaving an inexperienced person alone would increase rather than explain or control their vulnerability.",
    },
    ["https://www.hse.gov.uk/young-workers/employer/index.htm"],
  ),
  reviewed(
    189,
    {
      B: "Employment by an electricity company does not prove training on the particular locator or site conditions.",
      C: "Incorrect CAT and Genny use can falsely show an area clear, so unrestricted use by anyone is unsafe.",
      D: "A foreman's role does not automatically include locator competence; training and demonstrated skill remain necessary.",
    },
    ["https://www.hse.gov.uk/pubns/priced/hsg47.pdf"],
  ),
  reviewed(
    190,
    {
      A: "Rubber tyres do not prevent a bucket tooth cutting a live cable or protect people from arc-flash energy.",
      B: "A powered breaker can penetrate cable protection before the operator detects it and is unsuitable for final exposure.",
      C: "A pickaxe concentrates uncontrolled impact at its point and can pierce a cable with little warning.",
    },
    ["https://www.hse.gov.uk/pubns/priced/hsg47.pdf"],
  ),
  reviewed(
    191,
    {
      A: "Water on energised equipment creates a shock path and may spread an electrical fire or damage adjacent equipment.",
      B: "Cooling time does not diagnose insulation or motor failure and cannot make a smoking drill safe to restart.",
      D: "An extinguisher is for an established fire; smoke from a running motor first requires isolation and defect reporting.",
    },
    HSE_WORK_EQUIPMENT,
  ),
  reviewed(
    192,
    {
      B: "One hundred and fifty volts is not a standard reduced-low-voltage site distribution rating for portable hand lamps.",
      C: "Two hundred and thirty volts creates greater shock risk and is not preferred for general portable site lighting.",
      D: "Four hundred volts is a three-phase distribution voltage and is wholly unsuitable for an ordinary portable lamp.",
    },
    HSE_HSG141,
  ),
  reviewed(
    193,
    {
      A: "A 110 V centre-tapped supply reduces risk but may still be too high in a highly conductive wet enclosure.",
      B: "Mains-voltage lighting increases shock severity and needs stronger justification and protection, not routine selection for damp entry.",
      C: "Four hundred volts presents extreme shock and arc risk and is not a portable-lighting option for this environment.",
    },
    [
      "https://www.hse.gov.uk/pubns/indg258.pdf",
      "https://www.hse.gov.uk/pubns/books/l101.htm",
    ],
  ),
  reviewed(
    194,
    {
      A: "Changing only the plug exposes a 230 V drill to the wrong voltage and defeats connector coding without converting the tool.",
      B: "A mixed-voltage adaptor defeats keying and can allow 230 V equipment or sockets to be misused dangerously.",
      D: "A boost transformer would require a properly designed system and defeats the safer site supply; it is not an improvised solution.",
    },
    HSE_HSG141,
  ),
  reviewed(
    195,
    {
      B: "Leaving cable coiled can trap heat, and the lower reeled rating may be exceeded by the connected load.",
      C: "Partial uncoiling still concentrates heat and is safe only when the manufacturer's corresponding current rating is observed.",
      D: "Full uncoiling is unnecessary for a small load within the reel's stated coiled rating and can add trip hazards.",
    },
    HSE_HSG141,
  ),
  reviewed(
    196,
    {
      A: "The hammer may suffer secondary damage, but the brittle mushroomed rim chiefly threatens people with detached fragments.",
      C: "A wider striking face affects accuracy, yet the acute injury mechanism is hardened metal breaking away at speed.",
      D: "Mushrooming does not safely cushion the blow; repeated impacts work-harden and crack the spread metal edge.",
    },
    HSE_WORK_EQUIPMENT,
  ),
  reviewed(
    197,
    {
      A: "Visible heat damage may expose conductors or weakened insulation, so finishing the task risks shock or fire.",
      B: "Using another tool controls immediate exposure but leaves the damaged one unreported and available to the next user.",
      C: "Tape hides rather than assesses thermal damage and may not restore the cable's insulation, flexibility or strain relief.",
    },
    HSE_WORK_EQUIPMENT,
  ),
  reviewed(
    198,
    {
      A: "Manufacturer contact may support repair, but the immediate action is to stop use and report the missing guard locally.",
      C: "An improvised guard may lack strength, clearance and secure fixing and can itself contact the rotating blade.",
      D: "Past luck is no evidence of safety; one contact with an exposed blade can cause catastrophic injury.",
    },
    HSE_WORK_EQUIPMENT,
  ),
  reviewed(
    199,
    {
      A: "Corporate colour has no bearing on guarding, electrical integrity or suitability for the material and operation.",
      B: "Availability helps scheduling but cannot justify using an unsuitable, damaged or unmaintained tool.",
      D: "Price or marketing quality does not replace task suitability, correct safety features and maintained condition.",
    },
    HSE_WORK_EQUIPMENT,
  ),
  reviewed(
    200,
    {
      A: "An electrician may perform specialist inspection and testing, but the person about to use the drill must make the user check.",
      B: "A foreman supervises work but cannot observe every tool's condition immediately before each individual use.",
      C: "A store check may occur at issue, yet damage can arise after issue and must be noticed by the user.",
    },
    ["https://www.hse.gov.uk/electricity/faq-portable-appliance-testing.htm"],
  ),
  reviewed(
    201,
    {
      A: "Future repainting is a maintenance inconvenience, not the safety reason for keeping the ladder surface visible.",
      C: "Material compatibility can matter, but the principal danger is paint concealing cracks, splits or corrosion.",
      D: "Suitable dry paint need not make every rung slippery; hidden structural damage is the more fundamental concern.",
    },
    HSE_LADDERS,
  ),
  reviewed(
    202,
    {
      B: "Seniority does not demonstrate practical knowledge of the tower system, bracing sequence or stability requirements.",
      C: "The supplier may erect it, but supply alone does not make that company the only competent erector.",
      D: "A foreman's title does not automatically include recognised tower-scaffold training or demonstrated competence.",
    },
    ["https://www.hse.gov.uk/construction/safetytopics/scaffold.htm"],
  ),
  reviewed(
    203,
    {
      B: "Awareness cannot prevent a slip, mistaken panel or unexpected failure, so physical fall prevention is still required.",
      C: "Verbal warnings rely on perfect attention and do not stop someone or an object falling through a fragile panel.",
      D: "Removing panels creates open holes and can increase the fall risk rather than providing a protected work surface.",
    },
    ["https://www.hse.gov.uk/construction/safetytopics/fragile.htm"],
  ),
  reviewed(
    204,
    {
      A: "Stepladders are not a default work platform; their use must be justified by task-specific risk and duration.",
      B: "They are not banned and remain appropriate for some low-risk, short-duration work after assessment.",
      D: "The Regulations apply wherever a fall could injure, so a two-metre threshold does not determine permission.",
    },
    HSE_LADDERS,
  ),
  reviewed(
    205,
    {
      A: "Vehicle and plant incidents cause deaths, but their five-year share was lower than that of falls from height.",
      B: "Excavation collapse is a severe site hazard but did not account for the largest fatality category in the cited period.",
      D: "Fire must be controlled, yet it represented far fewer construction worker deaths than falls from height.",
    },
    ["https://www.hse.gov.uk/statistics/assets/docs/construction.pdf"],
  ),
  reviewed(
    206,
    {
      A: "A one-to-one slope is about 45 degrees and allows the foot to slide much more readily.",
      B: "One out for three up is roughly 72 degrees, slightly shallower than the recommended 75-degree setup.",
      D: "Four out for one up places the ladder almost horizontal and reverses the one-in-four rule.",
    },
    HSE_LADDERS,
  ),
  reviewed(
    207,
    {
      B: "Staining is cosmetic; the safety concern is chemical attack reducing the ladder's structural strength.",
      C: "Clothing marks do not explain why the ladder itself may become unsafe to support a user.",
      D: "Wet cement does not chiefly create a static-charge problem; its alkaline chemistry attacks aluminium.",
    },
    HSE_LADDERS,
  ),
  reviewed(
    208,
    {
      A: "A safety officer cannot inspect every ladder immediately before each use or notice damage since a scheduled visit.",
      B: "A foreman may arrange formal checks, but the person using the ladder must still make the pre-use inspection.",
      C: "Manufacturer inspection precedes sale and cannot reveal damage, contamination or alteration arising on site.",
    },
    HSE_LADDERS,
  ),
  reviewed(
    209,
    {
      A: "The correct angle is necessary but cannot compensate for damaged rungs or an unsecured ladder.",
      B: "Good condition is essential but does not stop a sound ladder sliding when set badly or left unsecured.",
      C: "Securing controls movement, but the ladder must also be sound and placed at the correct angle.",
    },
    HSE_LADDERS,
  ),
  reviewed(
    210,
    {
      A: "Marking a broken rung does not restore its load capacity and leaves an obvious fall hazard in the access route.",
      B: "A ladder may feel steady during one climb yet still lack positive restraint and safe handhold above the landing.",
      D: "Wedging only the foot may shift and does not provide the secure tying and extension needed at the platform edge.",
    },
    HSE_LADDERS,
  ),
  reviewed(
    211,
    {
      A: "A small cut is not ordinarily reported to HSE; immediate cleaning, dressing and workplace recording come first.",
      B: "Continuing exposes the open wound to contamination and can worsen bleeding or infection.",
      D: "Washing is useful first aid, but the wound should also be assessed and dressed through the site's provision.",
    },
    HSE_FIRST_AID,
  ),
  reviewed(
    212,
    {
      A: "A dry covering belongs after adequate cooling; applying it immediately traps residual heat in the tissue.",
      B: "Ice-cold water can damage tissue and chill the casualty; use cool running water instead.",
      D: "Warning others can follow, but it does not stop heat continuing to injure the casualty's hand.",
    },
    ["https://www.nhs.uk/conditions/burns-and-scalds/treatment/"],
  ),
  reviewed(
    213,
    {
      A: "Disposable gloves protect both casualty and first-aider from blood and body-fluid contact and belong in the kit.",
      C: "Safety pins can secure triangular bandages and are a recognised non-medicinal first-aid item.",
      D: "Triangular bandages support limbs and secure dressings and are standard first-aid supplies.",
    },
    ["https://www.hse.gov.uk/firstaid/first-aid-box.htm"],
  ),
  reviewed(
    214,
    {
      A: "Witness evidence can be gathered later; it must not delay emergency response to an unresponsive casualty.",
      B: "Recovery position is appropriate only after breathing is assessed as normal and spinal concerns are considered.",
      D: "Preventing further harm is important, but emergency help and breathing assessment cannot be postponed.",
    },
    [
      "https://www.resus.org.uk/professional-library/2025-resuscitation-guidelines/adult-basic-life-support-guidelines",
    ],
  ),
  reviewed(
    215,
    {
      A: "Investigating the equipment can expose another person and delays assessment of a casualty with possible internal effects.",
      B: "Drink or smoking offers no treatment and may be unsafe if the casualty deteriorates or needs medical care.",
      D: "Reporting to a supervisor is necessary, but the pale casualty first needs a trained health assessment.",
    },
    HSE_FIRST_AID,
  ),
  reviewed(
    216,
    {
      A: "Cost influences procurement but cannot displace the duty to provide adequate and appropriate first-aid arrangements.",
      B: "Space must be managed, yet saving workspace is not a valid basis for reducing needed first-aid provision.",
      D: "Ambulance availability supports emergency planning but does not replace trained first-aiders and immediate equipment on site.",
    },
    ["https://www.hse.gov.uk/firstaid/needs-assessment.htm"],
  ),
  reviewed(
    217,
    {
      A: "Broken bones are secondary to absent normal breathing; circulation and oxygenation require immediate action.",
      C: "An unresponsive person can aspirate fluid and must never be given a drink.",
      D: "Starting breathing is part of CPR, but calling emergency services and obtaining an AED must happen without avoidable delay.",
    },
    [
      "https://www.resus.org.uk/professional-library/2025-resuscitation-guidelines/adult-basic-life-support-guidelines",
    ],
  ),
  reviewed(
    218,
    {
      A: "Untrained splinting can worsen pain, bleeding or displacement and should not precede first-aider assessment.",
      B: "Walking or carrying the casualty can aggravate the fracture and possible injuries from the fall.",
      C: "Removing a trip hazard is secondary; the injured person needs prompt competent help and protection from movement.",
    },
    HSE_FIRST_AID,
  ),
  reviewed(
    219,
    {
      B: "Induction may explain locations, but memory of location does not identify an unfamiliar extinguisher in an emergency.",
      C: "A nearby wall sign can be missing or obscured; identification must be carried on the extinguisher itself.",
      D: "Different media can use similar cylinders, so weight and shape are not the standard identification system.",
    },
    [
      "https://www.gov.uk/government/publications/fire-safety-risk-assessment-small-and-medium-places-of-assembly/fire-safety-risk-assessment-small-and-medium-places-of-assembly-accessible",
    ],
  ),
  reviewed(
    220,
    {
      B: "Dry powder uses the blue identification panel, not the black panel associated with carbon dioxide.",
      C: "Foam is identified by a cream panel and has different suitability from carbon dioxide on electrical equipment.",
      D: "A water extinguisher is all red or carries the water wording, rather than a black medium panel.",
    },
    HSE_FIRE,
  ),
  reviewed(
    221,
    {
      A: "Carbon dioxide is identified by black, not blue, and discharges as a gas rather than powder.",
      C: "Foam carries a cream identification panel and is selected for different classes of fire.",
      D: "Water is identified by the plain red scheme and must not be confused with blue-labelled powder.",
    },
    HSE_FIRE,
  ),
  reviewed(
    222,
    {
      A: "Black identifies carbon dioxide, a gas used for different fire risks from ordinary water extinguishers.",
      B: "Cream identifies foam, not water, despite both media being useful on some solid combustibles.",
      C: "Green is not the current UK identification colour for a water extinguisher.",
    },
    HSE_FIRE,
  ),
  reviewed(
    223,
    {
      B: "Rapid expansion of carbon dioxide absorbs heat; it does not heat the discharge horn.",
      C: "The horn can become cold enough to cause a freeze burn, so describing it as merely warm is unsafe.",
      D: "Its temperature changes sharply during discharge because the expanding gas cools the horn.",
    },
    HSE_FIRE,
  ),
  reviewed(
    224,
    {
      B: "This combination includes water, which can spread floating petrol and enlarge the burning surface.",
      C: "Carbon dioxide and foam may be suitable, but adding water makes the listed combination unsafe for spilled petrol.",
      D: "Powder and foam may control the fire, yet the water in this group can carry burning fuel outward.",
    },
    HSE_FIRE,
  ),
  reviewed(
    225,
    {
      B: "Dry powder can be used, but ordinary foam is conductive or leaves residue and is not the paired electrical-fire choice.",
      C: "Both foam and water can conduct electricity and expose the operator while equipment remains energised.",
      D: "Carbon dioxide is suitable, but pairing it with water introduces an electrocution risk.",
    },
    ["https://www.hse.gov.uk/construction/faq-fire.htm"],
  ),
  reviewed(
    226,
    {
      A: "Extinguisher points house equipment; they are not the safe location used to account for evacuated people.",
      B: "Fire crews may establish their own rendezvous, but the workforce assembly point is for roll call after evacuation.",
      D: "An alarm point initiates warning; it is not the place where occupants wait safely once warned.",
    },
    HSE_FIRE,
  ),
  reviewed(
    227,
    {
      B: "Moving toward the alarm can take the worker into smoke or fire and obstruct the response.",
      C: "Every alarm must be treated as real until authorised otherwise; assuming a prank can be fatal.",
      D: "Leaving for home bypasses the assembly-point roll call and may send the person through an unsafe route.",
    },
    HSE_FIRE,
  ),
  reviewed(
    228,
    {
      A: "Asbestosis follows inhalation of asbestos fibres, not vibration transmitted from powered hand tools.",
      B: "Dermatitis arises from skin irritants or allergens and is not the characteristic vascular and nerve effect of vibration.",
      D: "Weil's disease is an infection associated with animal urine, wet ground and waterways, not tool vibration.",
    },
    ["https://www.hse.gov.uk/vibration/hav/index.htm"],
  ),
  reviewed(
    229,
    {
      A: "Seventy and eighty decibels understate both statutory exposure action values in the Noise Regulations.",
      B: "The upper value is right, but the lower action value begins at 80 dB(A), not 75 dB(A).",
      D: "Eighty-five is the upper action value, not the lower one, and 90 dB(A) is not the current upper action value.",
    },
    HSE_NOISE,
  ),
  reviewed(
    230,
    {
      B: "At 85 dB(A) the employer must ensure hearing protection is used; provision on request starts at the lower value.",
      C: "Ninety decibels is above both action values and is not the threshold at which requested protection first becomes available.",
      D: "Ninety-five decibels is an extremely high exposure and delaying protection until then would ignore both action values.",
    },
    HSE_NOISE,
  ),
  reviewed(
    231,
    {
      B: "Noise-damaged inner-ear hair cells are not restored by a routine operation.",
      C: "Temporary threshold shift can recover, but established long-term noise-induced hearing loss does not return to normal.",
      D: "Changing jobs can stop further exposure but cannot reverse damage that has already occurred.",
    },
    HSE_NOISE,
  ),
  reviewed(
    232,
    {
      A: "Universal wear can overprotect workers and interfere with communication where the noise assessment does not require it.",
      C: "Hazardous noise occurs outdoors as well as indoors, so building enclosure is not the deciding factor.",
      D: "Factories, workshops and many other workplaces also designate hearing-protection zones; the rule is not site-specific.",
    },
    HSE_NOISE,
  ),
  reviewed(
    233,
    {
      B: "Hearing protection prevents further exposure; it cannot repair sensory cells already damaged by noise.",
      C: "Suitable protectors attenuate noise rather than eliminating all sound, allowing essential warnings to remain audible.",
      D: "Conversation reduction may occur, but selection is based on hazardous noise exposure rather than social distraction.",
    },
    HSE_NOISE,
  ),
  reviewed(
    234,
    {
      A: "Loose cotton wool has no tested attenuation, fit or repeatable seal and is not certified hearing PPE.",
      C: "Rolled tissue provides unpredictable, inadequate attenuation and can lodge in the ear canal.",
      D: "Cloth pads do not seal the ear or provide a rated reduction across hazardous frequencies.",
    },
    HSE_NOISE,
  ),
  reviewed(
    235,
    {
      B: "A lower-vibration efficient tool reduces the vibration magnitude and often the trigger time for the task.",
      C: "Warm gloves do not absorb significant vibration, but keeping hands warm can reduce painful vascular symptoms.",
      D: "Sharing planned exposure reduces each person's trigger time when other controls cannot eliminate the work.",
    },
    ["https://www.hse.gov.uk/vibration/hav/advicetoemployers/controlrisks.htm"],
  ),
  reviewed(
    236,
    {
      A: "A maintained wholesome standpipe is not the typical rat-urine exposure route described for leptospirosis.",
      B: "Installing domestic sanitary fittings does not inherently expose a worker to infected water or rat urine.",
      C: "Air-conditioning work is associated with other biological risks, not the usual wet-ground source of Weil's disease.",
    },
    HSE_LEPTOSPIROSIS,
  ),
  reviewed(
    237,
    {
      B: "Asbestos exposure can cause mesothelioma, lung cancer and asbestosis years later, even when no immediate symptom occurs.",
      C: "White asbestos can also cause fatal disease; fibre colour does not make chrysotile exposure safe.",
      D: "No asbestos type is safe to disturb or use without the applicable controls, including white chrysotile.",
    },
    HSE_ASBESTOS,
  ),
  reviewed(
    238,
    {
      B: "Training helps interpret labels and controls, but it cannot make odour a reliable detector of toxicity.",
      C: "Enclosure may concentrate vapour, yet harmful products can be odourless or detectable only after unsafe exposure.",
      D: "Pleasant, weak or absent smell does not indicate low toxicity, and olfactory fatigue can remove warning.",
    },
    ["https://www.hse.gov.uk/coshh/basics/whatdo.htm"],
  ),
  reviewed(
    239,
    {
      B: "Odour is subjective, may be absent and can occur only above a harmful exposure concentration.",
      C: "Safe packaging does not mean the contents are harmless; hazardous substances should also be stored in suitable containers.",
      D: "Label background colour is not the classification system; pictograms, signal words and hazard statements carry the warning.",
    },
    [
      "https://www.hse.gov.uk/chemical-classification/labelling-packaging/index.htm",
    ],
  ),
  reviewed(
    240,
    {
      B: "Bitumen and its solvents can irritate skin and cause dermatitis, especially with repeated hot-material contact.",
      C: "Epoxy resins are potent skin sensitisers and can produce persistent allergic contact dermatitis.",
      D: "Solvents remove natural skin oils and can cause irritation, dryness and occupational dermatitis.",
    },
    ["https://www.hse.gov.uk/skin/professional/causes/agents.htm"],
  ),
  reviewed(
    241,
    {
      A: "People who never use or encounter the substance do not need task-specific detail; information must reach everyone who may actually be exposed.",
      B: "Accounts staff deal with purchasing and payment, not the exposure controls needed at the point of use.",
      D: "The storekeeper needs safe-storage information, but that alone leaves the operatives handling the substance uninformed.",
    },
    HSE_COSHH,
  ),
  reviewed(
    242,
    {
      A: "Paraffin dissolves the skin's protective oils and can cause irritation or dermatitis, so it is not a hand cleaner.",
      C: "Paint thinner is a solvent that can damage skin and allow harmful chemicals to be absorbed.",
      D: "White spirit strips natural oils from the skin; contamination should be removed with suitable soap and water instead.",
    },
    HSE_SKIN,
  ),
  reviewed(
    243,
    {
      B: "An uncontrolled animal creates new welfare and site-safety problems and is not a reliable pest-control measure.",
      C: "Environmental health can advise on an infestation, but removing exposed food is the immediate practical prevention step available to each worker.",
      D: "Poison and traps require competent pest control and safe placement; casually laying bait can harm people and other animals.",
    },
    HSE_LEPTOSPIROSIS,
  ),
  reviewed(
    244,
    {
      A: "COSHH may require washing controls for particular substances, but hygiene protects against many biological and chemical hazards beyond COSHH.",
      B: "Odour is a comfort issue; the safety purpose is to stop contaminants entering the body or spreading to other people.",
      D: "Avoiding personal illness is only part of the benefit because contaminated hands or clothing can expose co-workers and family members too.",
    },
    HSE_SKIN,
  ),
  reviewed(
    245,
    {
      A: "Wet ground may justify waterproof footwear, but crushing and puncture risks also occur in dry conditions.",
      B: "Scaffold work can present foot hazards, yet materials, nails and plant create the same need at ground level.",
      C: "Indoor construction areas still contain falling objects, sharp debris and moving loads that can injure feet.",
    },
    HSE_PPE,
  ),
  reviewed(
    246,
    {
      A: "Low perceived likelihood does not make PPE optional when an assessed residual risk remains.",
      B: "Cost cannot excuse withholding necessary protection; required PPE must be suitable and supplied without charge.",
      C: "The employer must plan and provide the necessary PPE rather than relying on whatever happens to be available.",
    },
    HSE_PPE,
  ),
  reviewed(
    247,
    {
      A: "Required PPE used at work must be supplied free; its purchase cost cannot be transferred to the employee.",
      B: "The no-charge duty is not a cost-sharing scheme, so charging half is no more acceptable than charging all of it.",
      C: "Loss or damage may be handled under fair workplace procedures, but it does not turn statutory PPE provision into a sale to the worker.",
    },
    HSE_PPE,
  ),
  reviewed(
    248,
    {
      A: "A worker must use and care for PPE, but the legal duty to select and supply it rests with the employer.",
      C: "A principal contractor coordinates site-wide arrangements, but each employer remains responsible for PPE needed by its own workers.",
      D: "A trade union may represent workers and raise concerns, but it does not purchase statutory PPE on the employer's behalf.",
    },
    HSE_PPE,
  ),
  reviewed(
    249,
    {
      B: "Head protection is also needed where a worker could strike a fixed obstruction or contact another foreseeable head hazard.",
      C: "The route to a work area may itself carry head risks, but the need continues while working wherever those risks remain.",
      D: "Being outdoors does not by itself determine helmet use; the deciding factor is the assessed risk of head injury.",
    },
    HSE_PPE,
  ),
  reviewed(
    250,
    {
      A: "The client influences project arrangements but does not replace an employer's duty to protect its employees.",
      B: "Employees must wear and look after issued equipment, but they are not responsible for funding statutory PPE.",
      D: "The principal contractor coordinates the construction phase, while the worker's own employer still supplies required PPE.",
    },
    HSE_PPE,
  ),
  reviewed(
    251,
    {
      A: "Warm weather does not reduce the impact energy from falling material, so comfort cannot justify less protection.",
      B: "Discomfort should prompt refitting or selection of suitable PPE, not substitution with equipment that protects against a different hazard.",
      D: "A ladder does not remove falling-object or swinging-object hazards; helmet selection still follows the risk assessment.",
    },
    HSE_PPE,
  ),
  reviewed(
    252,
    {
      A: "Cartridge tools create impulsive noise capable of damaging hearing, so suitable hearing protection is needed.",
      B: "Fasteners and fragments can be ejected at high speed, making impact-rated eye protection essential.",
      C: "A helmet protects against ricochet, flying fragments and other head hazards associated with site use of the tool.",
    },
    ["https://www.hse.gov.uk/pubns/cis54.pdf"],
  ),
  reviewed(
    253,
    {
      B: "A supervisor cannot waive a control required by the risk assessment merely because the worker gives notice.",
      C: "A written request does not transfer the employer's duty or remove the employee's duty to use issued protection properly.",
      D: "Poor fit should be reported and corrected with suitable equipment; discomfort is not permission to remain exposed.",
    },
    HSE_PPE,
  ),
  reviewed(
    254,
    {
      A: "A hard hat protects the head after an impact but does little to help a driver notice the worker in time.",
      C: "Safety footwear controls foot injuries, not the dominant risk of a moving vehicle striking an unseen person.",
      D: "Waterproof clothing keeps the wearer dry but is not necessarily conspicuous to approaching traffic.",
    },
    [
      "https://www.gov.uk/government/publications/safety-at-street-works-and-road-works",
    ],
  ),
  reviewed(
    255,
    {
      B: "PPE must fit before use, but an unsuitable fit must be reported and remedied rather than treated as a general exemption.",
      C: "The employer's instruction and risk assessment define when protection is needed; personal judgement cannot simply override them.",
      D: "PPE use is a safety control, not a matter of preference whenever the wearer feels like using it.",
    },
    HSE_PPE,
  ),
  reviewed(
    256,
    {
      A: "PPE provision responds to the present residual risk, not a five-year replacement timetable.",
      B: "A contract may add site rules, but the employer's statutory duty exists even when the client says nothing about PPE.",
      C: "Inspection and replacement intervals depend on the equipment and condition; twice-yearly issue is not the legal trigger.",
    },
    HSE_PPE,
  ),
  reviewed(
    257,
    {
      B: "Reversing a helmet can compromise its suspension, peak and tested impact performance unless the manufacturer specifically permits it.",
      C: "Tilting the peak changes the designed fit and can expose the forehead instead of deflecting material safely.",
      D: "Visibility problems require a correctly selected and adjusted helmet, not lifting it away from its tested wearing position.",
    },
    HSE_PPE,
  ),
  reviewed(
    258,
    {
      A: "A ten-day delay would prevent prompt investigation of the most serious kind of work-related event.",
      B: "Five days is not the notification period for a work-related death; the responsible person must notify it immediately.",
      C: "Seven days relates to one absence threshold, not the deadline for reporting a fatal accident.",
    },
    HSE_RIDDOR,
  ),
  reviewed(
    259,
    {
      B: "Property damage without injury belongs in other site records and is not, by itself, an entry about an injured person.",
      C: "Minor injuries can worsen and reveal recurring hazards, so recording cannot be restricted to cases initially judged serious.",
      D: "An injury may need treatment without causing absence; waiting for time off would leave the original event undocumented.",
    },
    HSE_ACCIDENT_BOOK,
  ),
  reviewed(
    260,
    {
      B: "Sprains, cuts and other injuries can require recording even though no bone is broken.",
      C: "Absence affects whether an event is separately reportable under RIDDOR, not whether the employer should record the injury.",
      D: "Hospital attendance is not the general threshold for the workplace accident record.",
    },
    HSE_ACCIDENT_BOOK,
  ),
  reviewed(
    261,
    {
      B: "Management discretion is not a dependable recording threshold; the factual injury record should not depend on opinion.",
      C: "Seven-day incapacity determines a category of RIDDOR reporting, while the accident record also covers shorter injuries.",
      D: "The purpose of the record includes prevention and evidence, so it must not wait for someone to predict a compensation claim.",
    },
    HSE_ACCIDENT_BOOK,
  ),
  reviewed(
    262,
    {
      A: "A National Insurance number is not one of the incident details needed to explain who was hurt and what occurred.",
      B: "The standard record asks for identifying and incident details, but not the injured person's date of birth.",
      D: "A phone number is not a required accident-description field in the standard BI510 record.",
    },
    HSE_ACCIDENT_BOOK,
  ),
  reviewed(
    263,
    {
      A: "Incidents have many causes and near misses may involve no mechanical failure, so an investigation should not assume this combination.",
      B: "Blaming a person by default hides design, supervision, maintenance and organisational causes that also need control.",
      D: "Mechanical faults can be serious, but ranking one cause does not identify the practical changes needed to prevent recurrence.",
    },
    ["https://www.hse.gov.uk/pubns/hsg245.pdf"],
  ),
  reviewed(
    264,
    {
      A: "A contemporaneous entry can support when, where and how the injury occurred, so saying it offers no help is incorrect.",
      B: "Even a minor injury can develop into a longer-term condition, making an early factual record valuable.",
      C: "The evidential value is not confined to deaths; non-fatal workplace injury claims also depend on reliable facts.",
    },
    HSE_ACCIDENT_BOOK,
  ),
  reviewed(
    265,
    {
      A: "A witness should give an independent factual account; rehearsing it with a supervisor risks distorting evidence.",
      C: "Withholding relevant facts obstructs the investigation and may itself amount to an offence.",
      D: "Second-hand suggestions are not evidence; the inspector needs what the witness personally saw and heard.",
    },
    HSE_INSPECTORS,
  ),
  reviewed(
    266,
    {
      A: "Electrical accidents can be fatal, but they occur less frequently than routine same-level slips, trips and falls.",
      C: "Vehicle strikes are a major construction hazard but do not make up the largest number of site accidents.",
      D: "Excavation collapse has severe consequences, yet it is far less common than everyday slips and trips.",
    },
    ["https://www.hse.gov.uk/statistics/causinj/index.htm"],
  ),
  reviewed(
    267,
    {
      A: "A wrist fracture is a fracture outside the fingers, thumbs and toes, so it falls within RIDDOR's specified-injury category.",
      B: "A fractured arm is explicitly within the reportable category of fractures other than fingers, thumbs or toes.",
      D: "Amputation of a finger is specifically listed as a specified injury even though a simple finger fracture is excluded.",
    },
    HSE_RIDDOR,
  ),
  reviewed(
    268,
    {
      A: "A workmate discussion is no substitute for prompt reporting to the person able to preserve evidence and control the hazard.",
      B: "Pretending not to have seen the event removes useful evidence and leaves the cause unaddressed.",
      C: "Fear of blame must not suppress a factual account needed to protect other people from a repeat accident.",
    },
    ["https://www.hse.gov.uk/pubns/hsg245.pdf"],
  ),
  reviewed(
    269,
    {
      A: "Silence protects neither the injured person nor co-workers and can allow the same uncontrolled hazard to injure someone else.",
      B: "A nurse deals with treatment; the supervisor needs the witness account so the workplace event can be investigated.",
      C: "Checking the casualty's condition does not report the evidence or help the employer control the cause.",
    },
    ["https://www.hse.gov.uk/pubns/hsg245.pdf"],
  ),
  reviewed(
    270,
    {
      A: "Project completion does not end the retention requirement, so the records must not be destroyed with temporary paperwork.",
      C: "The employer keeps the underlying records; only reportable events are notified to the enforcing authority through RIDDOR.",
      D: "An insurer may receive relevant information for a claim, but sending it does not replace the employer's duty to retain the record.",
    },
    HSE_ACCIDENT_BOOK,
  ),
  reviewed(
    271,
    {
      A: "A colleague may help make the area safe, but cannot fulfil management's duty to assess and make any RIDDOR notification.",
      B: "The client is not normally the worker's immediate reporting route and may not know the operational details.",
      C: "Emergency services respond to immediate rescue or fire needs; they do not replace internal reporting to the responsible employer.",
    },
    HSE_RIDDOR,
  ),
  reviewed(
    272,
    {
      A: "RIDDOR requires immediate notification of a listed dangerous occurrence rather than allowing a full day to pass.",
      B: "A two-day delay can lose evidence and permit the dangerous condition to recur before the authority is aware.",
      C: "Five days is not the initial-notification allowance for a dangerous occurrence; the quickest practicable report comes first.",
    },
    HSE_RIDDOR,
  ),
  reviewed(
    273,
    {
      A: "A diary is an informal project log and may omit the personal-injury details and privacy controls of the employer's system.",
      B: "An engineer's day book records technical activity, not the employer's official injury record.",
      D: "A personal note can support memory, but it is not accessible or managed as the workplace's recognised accident record.",
    },
    HSE_ACCIDENT_BOOK,
  ),
  reviewed(
    274,
    {
      A: "A witness should report what was seen, but the injured worker must not assume somebody else will report a minor incident for them.",
      C: "Emergency services may not attend a minor incident and are not responsible for the site's internal accident record.",
      D: "A foreman can assist once told, but cannot report an injury they may not have seen or known about.",
    },
    HSE_ACCIDENT_BOOK,
  ),
  reviewed(
    275,
    {
      A: "Withholding wages is not the RIDDOR response and may breach employment rights; the safety duty is to report the qualifying injury.",
      B: "Emergency attendance depends on the casualty's immediate clinical needs, not on the later seven-day incapacity threshold.",
      C: "Hospitals provide treatment but are not the authority to which an employer submits a RIDDOR over-seven-day report.",
    },
    HSE_RIDDOR,
  ),
  reviewed(
    276,
    {
      A: "RIDDOR does not make every scaffold collapse a listed dangerous occurrence; the schedule sets specific dimensions and circumstances.",
      B: "Ten metres is twice the general threshold, so using it would leave qualifying collapses between five and ten metres unreported.",
      C: "A fifteen-metre threshold is not in the RIDDOR category and would exclude many legally reportable collapses.",
    },
    HSE_SCAFFOLD_RIDDOR,
  ),
  reviewed(
    277,
    {
      A: "Medical advice may be needed, but the workplace must first know about the injury so help, recording and controls can be arranged.",
      B: "Continuing can worsen a strain and prevents assessment of the handling task that caused it.",
      D: "A companion cannot authorise treatment or change the system of work; the supervisor or employer needs the report.",
    },
    HSE_MANUAL_HANDLING,
  ),
  reviewed(
    278,
    {
      A: "A clinician may need information to treat the casualty, but has no general enforcement power to inspect the employer's records.",
      B: "Accident records contain personal data and are not open for casual inspection by co-workers.",
      D: "An insurer may request relevant evidence for a claim, but that is not the statutory inspection power held by an appointed inspector.",
    },
    HSE_INSPECTORS,
  ),
  reviewed(
    279,
    {
      B: "Weather is relevant only when it contributed; the date and time are core facts for every accident record.",
      C: "A National Insurance number does not establish the circumstances of the workplace incident and is not a standard BI510 field.",
      D: "Date of birth is not required in the standard accident particulars, unlike the time and date of the event.",
    },
    HSE_ACCIDENT_BOOK,
  ),
  reviewed(
    280,
    {
      B: "Knee position is only one part of technique and cannot reveal whether the load, route or frequency makes the task unsafe.",
      C: "Holding the back rigidly straight is not HSE's universal instruction and does nothing to avoid an excessive or unstable load.",
      D: "Gloves may improve grip or protect skin, but they do not assess weight, shape, route, frequency or individual capability.",
    },
    HSE_MANUAL_HANDLING,
  ),
  reviewed(
    281,
    {
      A: "Carrying for the whole route increases fatigue and cumulative strain when wheeled assistance is available.",
      B: "Dragging requires sustained force, can damage the load and gives poor control over obstacles and slopes.",
      C: "Passing an avoidable risk to another person does not control it; suitable handling equipment should be used.",
    },
    HSE_MANUAL_HANDLING,
  ),
  reviewed(
    282,
    {
      A: "Bending mainly through the back while holding a load away from the body increases spinal leverage and instability.",
      B: "Feet together provide a narrow, unstable base, and deliberate back bending increases strain.",
      C: "A deep squat with a bent back is not a universal safe method and may create high knee and back loads.",
    },
    HSE_MANUAL_HANDLING,
  ),
  reviewed(
    283,
    {
      A: "Lifting discards the mechanical advantage of the wheels and adds unnecessary support of the full weight.",
      B: "Pulling can twist the body and leaves less control if the load rolls toward the handler; pushing is generally preferred when visibility is good.",
      C: "The postures and control differ: pushing normally permits a more stable body position than pulling.",
    },
    HSE_MANUAL_HANDLING,
  ),
  reviewed(
    284,
    {
      A: "A fully automated movement uses machine power rather than hand or bodily force, so it is outside the definition.",
      C: "A task is not classified by a vague mixture of mechanisms; the regulated element is transporting or supporting by bodily force.",
      D: "A machine moving a load without bodily force is mechanised handling, not manual handling.",
    },
    ["https://www.legislation.gov.uk/uksi/1992/2793/regulation/2"],
  ),
  reviewed(
    285,
    {
      B: "Duration can affect exposure but does not replace the required assessment of likelihood and severity of injury.",
      C: "Cost planning says nothing about posture, load stability, route or worker capability.",
      D: "Team size is one possible control to consider after assessment, not the legal assessment itself.",
    },
    HSE_MANUAL_HANDLING,
  ),
  reviewed(
    286,
    {
      B: "The back is not the power source for the lift, and forcing it rigidly straight is not current HSE technique.",
      C: "Keeping both legs and back straight forces reaching and spinal bending and prevents a stable, close hold.",
      D: "Straight legs combined with a bent back places the load far from the body and increases spinal leverage.",
    },
    HSE_MANUAL_HANDLING,
  ),
  reviewed(
    287,
    {
      B: "Twenty kilograms is not the figure shown for this particular male knuckle-height zone on HSE's filter chart.",
      C: "Forty kilograms exceeds the chart value and should not be presented as a routine low-risk screening figure.",
      D: "Fifty kilograms is double the chart value and would require redesign or assistance, not reliance on a guideline.",
    },
    ["https://www.hse.gov.uk/pubns/indg143.pdf"],
  ),
  reviewed(
    288,
    {
      B: "Starting with a bent back increases leverage on the spine and ignores whether the task should be attempted at all.",
      C: "PPE may control a specific residual hazard, but it cannot make an excessive weight or unstable load safe to lift alone.",
      D: "Gloves can improve grip yet do not answer whether the weight, shape, route and worker capability require help.",
    },
    HSE_MANUAL_HANDLING,
  ),
  reviewed(
    289,
    {
      B: "Purpose-designed grips improve control and reduce the force needed to prevent the load slipping.",
      C: "Reducing weight directly lowers the muscular force and spinal loading involved in handling.",
      D: "Restraint prevents an internal or loose load shifting suddenly and pulling the handler off balance.",
    },
    HSE_MANUAL_HANDLING,
  ),
  reviewed(
    290,
    {
      A: "A second person may reduce individual force, but an unplanned team lift can introduce poor coordination and does not describe technique.",
      C: "A crane can eliminate manual lifting and may be the better control, but it is mechanical handling rather than good manual technique.",
      D: "Forklifts and pallet trucks are handling aids used to avoid or reduce manual effort, not a body-movement technique.",
    },
    HSE_MANUAL_HANDLING,
  ),
  reviewed(
    291,
    {
      B: "Chest injury is possible in a crush event, but ordinary heavy handling most commonly overloads the back and supporting tissues.",
      C: "Forearms can fatigue while gripping, yet the spine usually bears the greater injury risk from load leverage and twisting.",
      D: "Knees can be stressed by poor posture, but back injury is the most common concern across heavy manual-handling tasks.",
    },
    HSE_MANUAL_HANDLING,
  ),
  reviewed(
    292,
    {
      A: "Extra people may help only after the task is reassessed and coordinated; the worker should not recruit an improvised team silently.",
      B: "Mechanical aid may be selected, but only the supervisor can arrange a suitable trained operator and safe system for the task.",
      C: "Technique cannot compensate for a load the worker has already judged too heavy, and a trial lift can cause the injury.",
    },
    HSE_MANUAL_HANDLING,
  ),
  reviewed(
    293,
    {
      A: "Hazard warnings use yellow and black, not the blue circular mandatory-sign format.",
      C: "Prohibitions use red edging and a diagonal bar to show an action that must not be taken.",
      D: "Safe-condition signs such as emergency exits use green and white rather than blue and white.",
    },
    HSE_SAFETY_SIGNS,
  ),
  reviewed(
    294,
    {
      A: "Blue and white indicates a mandatory action, not a safe escape route.",
      C: "Red and white identifies fire-fighting equipment or prohibition features, not the direction of escape.",
      D: "Red and yellow does not represent the standard safe-condition colour scheme for an emergency exit.",
    },
    HSE_SAFETY_SIGNS,
  ),
  reviewed(
    295,
    {
      A: "Blue means an action is mandatory, which is the opposite of a prohibition.",
      B: "Green identifies a safe condition such as first aid or an emergency exit.",
      D: "Yellow is used to warn about a hazard and calls for caution rather than banning an action.",
    },
    HSE_SAFETY_SIGNS,
  ),
  reviewed(
    296,
    {
      A: "Suppressing incident reports hides patterns and prevents management from removing the cause.",
      B: "Knowing how to summon help limits harm after an event but does not remove the unsafe condition that causes it.",
      C: "First-aid readiness improves response after injury; prevention requires hazards to be reported and controlled beforehand.",
    },
    HSE_RISK,
  ),
  reviewed(
    297,
    {
      A: "The listed fine and custody term are below the current maximum available for relevant offences tried on indictment.",
      C: "Three years' imprisonment is not the stated maximum for these HSWA offences, and the fine is not capped at £15,000.",
      D: "Although two years is the relevant custodial maximum, the fine is not limited to £20,000 on indictment.",
    },
    [
      "https://www.hse.gov.uk/enforce/enforcementguide/court/sentencing-penalties.htm",
    ],
  ),
  reviewed(
    298,
    {
      B: "Employees have a statutory duty to take reasonable care and cooperate with safety arrangements.",
      C: "The client has important CDM duties, but employers, contractors and workers retain their own responsibilities.",
      D: "Employers carry primary management duties, while employees still owe duties to themselves and people affected by their acts.",
    },
    ["https://www.legislation.gov.uk/ukpga/1974/37/section/7"],
  ),
  reviewed(
    299,
    {
      A: "A foreman may supervise the work, but the employer cannot delegate away its legal duty to manage risks from its undertaking.",
      B: "An HSE inspector enforces compliance and does not run the employer's day-to-day system of work.",
      C: "Another contractor manages its own work; it does not assume the employer's duty toward this workforce.",
    },
    HSE_HSWA,
  ),
  reviewed(
    300,
    {
      A: "Risk assessment is a legal management duty, not an optional improvement that can be skipped.",
      B: "Assessing after completion cannot prevent exposure during the work or inform the controls people need beforehand.",
      D: "Small and routine tasks can still injure people, so job value or scale does not remove the need to assess risk.",
    },
    HSE_RISK,
  ),
  reviewed(
    301,
    {
      B: "An inspector checks whether the duty holder has assessed risk; the inspector does not write the site's assessment for it.",
      C: "The former CDM co-ordinator role no longer exists under CDM 2015 and never replaced the employer's competent assessment process.",
      D: "A designer assesses design risks, but does not automatically understand the contractor's people, tools and live site conditions.",
    },
    HSE_RISK,
  ),
  reviewed(
    302,
    {
      B: "Emergency arrangements are important where required, but they follow identification of the credible events and risks.",
      C: "A geological survey is relevant to some ground works, not every electrical or construction activity.",
      D: "Soil assessment is needed for particular excavation or contamination risks and is not a universal first step for all work.",
    },
    HSE_RISK,
  ),
  reviewed(
    303,
    {
      A: "The inspector's statutory entry power does not depend on the principal contractor accompanying the visit.",
      B: "Requiring an appointment would allow dangerous conditions to be hidden and is not a condition in section 20.",
      C: "Inspectors may examine premises, evidence, articles and people; their power is not limited to one manager interview.",
    },
    HSE_INSPECTORS,
  ),
  reviewed(
    304,
    {
      A: "Immediate effect means the dangerous activity cannot continue even long enough to finish the current task.",
      C: "The notice remains effective until the specified serious-risk matters are remedied, not merely until the next day.",
      D: "Allowing work until the end of the day would leave people exposed to the very risk that justified immediate prohibition.",
    },
    HSE_ENFORCEMENT,
  ),
  reviewed(
    305,
    {
      A: "An appointed inspector serves an improvement notice under statutory powers without first obtaining a police warrant.",
      C: "Enforcement powers are not restricted to weekdays; the issue is the legal breach, not the day of inspection.",
      D: "Prosecution is a separate enforcement route and is not the office through which an improvement notice is issued.",
    },
    HSE_ENFORCEMENT,
  ),
  reviewed(
    306,
    {
      A: "A client's programme instruction concerns contract performance and has none of the statutory status of an enforcement notice.",
      B: "Building-control requirements address building regulations and are not an HSE improvement notice under workplace safety law.",
      D: "A principal contractor can direct housekeeping, but cannot issue the statutory notice reserved for an enforcing inspector.",
    },
    HSE_ENFORCEMENT,
  ),
  reviewed(
    307,
    {
      B: "An ordinary email is not one of the prescribed methods unless it supplies the approved leaflet itself in an acceptable way.",
      C: "The company policy explains local arrangements but does not replace the official law poster or approved employee leaflet.",
      D: "A verbal induction can add site detail, but it does not satisfy the separate duty to provide the approved rights information.",
    },
    HSE_POSTER,
  ),
  reviewed(
    308,
    {
      A: "Starting a contract does not set the written-policy threshold; it depends on the employer's workforce size.",
      B: "The duty arises automatically from law and does not wait for an HSE notification.",
      C: "A safety representative may request information, but their request is not what creates the statutory requirement.",
    },
    ["https://www.hse.gov.uk/simple-health-safety/policy/index.htm"],
  ),
  reviewed(
    309,
    {
      B: "Social-security law deals with benefits and records, not the employer threshold for a written safety policy.",
      C: "A principal contractor may require site documents, but the employer's written-policy duty exists independently of winning that work.",
      D: "Trade unions can press for strong arrangements, yet the written-policy requirement comes from statute rather than union rules.",
    },
    ["https://www.hse.gov.uk/simple-health-safety/policy/index.htm"],
  ),
  reviewed(
    310,
    {
      A: "The organisation regulates and enforces workplace safety; it is not called an examiner.",
      C: "'Exercise' describes an activity and is not part of the regulator's official name.",
      D: "HSE is a national regulator, not a qualification or title for an electrician.",
    },
    ["https://www.hse.gov.uk/aboutus/index.htm"],
  ),
  reviewed(
    311,
    {
      A: "The NHS provides healthcare, whereas HSE regulates work-related health and safety risks.",
      B: "Police investigate criminal matters but are not the specialist workplace health and safety regulator.",
      C: "A jury decides facts in a particular court case; HSE investigates and enforces across workplaces before any trial.",
    },
    ["https://www.hse.gov.uk/aboutus/index.htm"],
  ),
  reviewed(
    312,
    {
      B: "Rest arrangements can arise under working-time law, but this choice does not state the central HSWA workplace duty.",
      C: "Payment is an employment-contract obligation and does not describe the health and safety protection required by section 2.",
      D: "Commuting transport is not the general workplace provision required of every employer by HSWA.",
    },
    ["https://www.legislation.gov.uk/ukpga/1974/37/section/2"],
  ),
  reviewed(
    313,
    {
      A: "Hiding the spill leaves contaminated ground in place and prevents proper classification and clean-up.",
      C: "Mixing oily soil with general waste can contaminate the whole skip and sends hazardous material down an unsuitable route.",
      D: "Water and detergent spread oil into soil or drains rather than recovering the contaminant for authorised disposal.",
    },
    GOV_HAZARDOUS_WASTE,
  ),
  reviewed(
    314,
    {
      A: "Dust affects other workers and can escape the site, so their exposure is directly part of the duty holder's concern.",
      B: "Issuing masks to everyone relies on PPE and does not control dust at source or address environmental nuisance.",
      D: "A short remaining duration can still create a harmful peak exposure and is no reason to continue uncontrolled work.",
    },
    ["https://www.hse.gov.uk/dust/index.htm"],
  ),
  reviewed(
    315,
    {
      B: "A specialist can coordinate environmental controls but cannot prevent pollution caused by uninformed workers across the site.",
      C: "The principal contractor manages overall arrangements, while each person must follow controls relevant to their own activity.",
      D: "Employees and other contractors can also spill, waste or release pollutants, so understanding cannot be limited to subcontractors.",
    },
    GOV_CONSTRUCTION_WASTE,
  ),
  reviewed(
    316,
    {
      A: "Protecting workers and neighbours is part of the social element of sustainable construction.",
      B: "Preventing pollution and ecological damage preserves resources for current and future users.",
      C: "Reducing material, fuel, water and energy use cuts both resource depletion and avoidable emissions.",
    },
    GOV_CONSTRUCTION_WASTE,
  ),
  reviewed(
    317,
    {
      A: "Burying waste evades authorised disposal and risks long-term contamination of land and groundwater.",
      C: "Moving off site does not make drain disposal lawful; liquids still need classification and an authorised waste route.",
      D: "Unneeded running wastes fuel, creates emissions and adds noise and maintenance without productive work.",
    },
    GOV_CONSTRUCTION_WASTE,
  ),
  reviewed(
    318,
    {
      B: "Waste prevention conserves raw materials and avoids transport and disposal impacts.",
      C: "Keeping pollutants out of water and soil protects ecosystems, neighbours and future land use.",
      D: "Using less energy reduces fuel consumption, emissions and project cost without reducing the finished function.",
    },
    GOV_CONSTRUCTION_WASTE,
  ),
  reviewed(
    319,
    {
      A: "Systematic over-ordering turns usable stock into surplus and increases storage damage and disposal.",
      B: "Rain can spoil packaging and materials, converting preventable damage into waste.",
      D: "Opening a fresh pack while usable material remains creates unnecessary remnants and packaging waste.",
    },
    GOV_CONSTRUCTION_WASTE,
  ),
  reviewed(
    320,
    {
      A: "Idling consumes fuel, emits pollutants and wears machinery without producing useful work.",
      B: "Rainwater can increase skip weight, spread contamination and make recoverable waste harder to sort.",
      C: "Ordering more than the job needs consumes resources and leaves surplus that may be discarded.",
    },
    GOV_CONSTRUCTION_WASTE,
  ),
  reviewed(
    321,
    {
      A: "The client influences procurement, but every worker can prevent damage, use only what is needed and sort remaining waste.",
      B: "Waste is best prevented throughout delivery and installation; end-of-project clean-up is too late to recover wasted material.",
      C: "Waste minimisation applies to ordinary packaging, off-cuts and surplus as well as specially controlled asbestos waste.",
    },
    GOV_CONSTRUCTION_WASTE,
  ),
  reviewed(
    322,
    {
      B: "Uncontaminated glass-fibre off-cuts are not automatically hazardous waste, though dust still needs exposure control.",
      C: "Ordinary untreated timber sheet off-cuts can normally follow a segregated wood-recovery route rather than hazardous disposal.",
      D: "A nuisance-dust mask is not automatically hazardous unless it is contaminated by a substance that changes its classification.",
    },
    GOV_HAZARDOUS_WASTE,
  ),
  reviewed(
    323,
    {
      A: "A £1,000 cap and six-month term understate the current Crown Court maxima for the relevant offences.",
      C: "The fine is not capped at £20,000 when tried on indictment, even though two years may be the custodial maximum.",
      D: "The fine can be unlimited, but the listed six-month custody term is below the relevant two-year maximum.",
    },
    [
      "https://www.hse.gov.uk/enforce/enforcementguide/court/sentencing-penalties.htm",
    ],
  ),
];

if (runtimeQuestions.length !== 1_112 || uniqueQuestions.length !== 323) {
  throw new Error(
    `Unexpected ECS rationale inventory: ${runtimeQuestions.length} runtime / ${uniqueQuestions.length} unique`,
  );
}

const authoredBySignature = new Map(
  authoredUnique.map((entry) => [entry._semanticSignature, entry] as const),
);

export const ecsHealthSafety = runtimeQuestions.map((question) => {
  const entry = authoredBySignature.get(semanticSignature(question));
  if (!entry)
    throw new Error(`Missing authored ECS rationale: ${question.prompt}`);
  const { _semanticSignature: _ignored, ...curatedEntry } = entry;
  return curatedEntry;
});
