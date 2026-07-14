const HSE_POLICY =
  "https://www.hse.gov.uk/simple-health-safety/policy/how-to-write-your-policy.htm";
const HSE_PUWER =
  "https://www.hse.gov.uk/work-equipment-machinery/puwer-overview.htm";
const GOV_HAZARDOUS_WASTE =
  "https://www.gov.uk/dispose-hazardous-waste/overview";
const CONTROL_OF_POLLUTION_ACT =
  "https://www.legislation.gov.uk/ukpga/1974/40/section/60";
const NHS_BURNS = "https://www.nhs.uk/conditions/burns-and-scalds/treatment/";
const NHS_FIRST_AID = "https://www.nhs.uk/conditions/first-aid/";
const HSE_MANUAL_HANDLING = "https://www.hse.gov.uk/msd/manual-handling/";
const GOV_CONSTRUCTION_POLLUTION =
  "https://www.gov.uk/guidance/pollution-prevention-for-businesses";
const WEEE_REGULATIONS =
  "https://www.legislation.gov.uk/uksi/2013/3113/contents";
const HSE_ASBESTOS = "https://www.hse.gov.uk/asbestos/workers.htm";
const HSE_ASBESTOS_MANAGEMENT =
  "https://www.hse.gov.uk/asbestos/duty/plan-into-action.htm";
const HSE_RISK = "https://www.hse.gov.uk/simple-health-safety/risk/index.htm";
const HSE_FIRST_AID = "https://www.hse.gov.uk/firstaid/needs-assessment.htm";
const HSE_TOWERS = "https://www.hse.gov.uk/work-at-height/faqs.htm";
const HSE_SAFE_WORKING = "https://www.hse.gov.uk/pubns/priced/hsg85.pdf";
const HSE_HAZARD_PICTOGRAMS =
  "https://www.hse.gov.uk/chemical-classification/labelling-packaging/hazard-symbols-hazard-pictograms.htm";
const HSE_NOISE = "https://www.hse.gov.uk/noise/index.htm";
const IET_BS_7671 =
  "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/";
const HSE_CONSTRUCTION_ELECTRICITY =
  "https://www.hse.gov.uk/construction/safetytopics/systems.htm";
const LONDON_FIRE_EXTINGUISHERS =
  "https://www.gov.uk/government/publications/fire-safety-risk-assessment-small-and-medium-places-of-assembly/fire-safety-risk-assessment-small-and-medium-places-of-assembly-accessible";
const NATIONAL_GRID_NETWORK =
  "https://www.nationalgrid.com/electricity-transmission/who-we-are/running-our-network/substations-pylons-and-overhead-lines";
const ESQCR =
  "https://www.legislation.gov.uk/uksi/2002/2665/regulation/27/made";
const IET_PV_CODE =
  "https://electrical.theiet.org/guidance-and-codes-of-practice/publications-by-category/renewables-and-sustainability/";
const EMPLOYMENT_RIGHTS_ACT =
  "https://www.legislation.gov.uk/ukpga/1996/18/contents";
const WATER_FITTINGS_REGULATIONS =
  "https://www.legislation.gov.uk/uksi/1999/1148/contents/made";
const CONSUMER_CONTRACTS_REGULATIONS =
  "https://www.legislation.gov.uk/uksi/2013/3134/contents/made";
const EAWR = "https://www.legislation.gov.uk/uksi/1989/635/contents/made";
const HSE_ELECTRICITY =
  "https://www.hse.gov.uk/electricity/information/law.htm";
const JIB =
  "https://www.jib.org.uk/wp-content/uploads/2025/12/JIB-Handbook-2026-nc.pdf";
const UK_GOV_PROJECT_DELIVERY =
  "https://www.gov.uk/government/publications/project-delivery-functional-standard";
const HUMAN_RIGHTS_ACT =
  "https://www.legislation.gov.uk/ukpga/1998/42/schedule/1/part/I/chapter/5";
const EQUALITY_ACT = "https://www.legislation.gov.uk/ukpga/2010/15/contents";
const DATA_PROTECTION_ACT =
  "https://www.legislation.gov.uk/ukpga/2018/12/contents";
const HSE_ENFORCEMENT =
  "https://www.hse.gov.uk/enforce/our-role-as-regulator.htm";
const HSE_NOTICES = "https://www.hse.gov.uk/pubns/hsc14.pdf";
const BSI_STANDARDS = "https://www.bsigroup.com/en-GB/standards/";
const BSI_ISO_9001 =
  "https://www.bsigroup.com/en-GB/capabilities/quality-management/iso-9001-quality-management-systems/";
const INVESTORS_IN_PEOPLE =
  "https://www.investorsinpeople.com/accreditations/we-invest-in-people/";
const GOV_CONSTRUCTION_CONTRACTS =
  "https://www.gov.uk/government/publications/the-construction-playbook";
const BS_5839 =
  "https://knowledge.bsigroup.com/products/fire-detection-and-fire-alarm-systems-for-buildings-design-installation-commissioning-and-maintenance-of-systems-in-non-domestic-premises-code-of-practice";
const GOV_FIRE_SAFETY =
  "https://www.gov.uk/government/publications/fire-safety-risk-assessment-offices-and-shops";
const IEC_IP_CODE =
  "https://knowledge.bsigroup.com/products/degrees-of-protection-provided-by-enclosures-ip-code";
const IET_ON_SITE_GUIDE =
  "https://shop.theiet.org/on-site-guide-bs-7671-2018-a4-2026-9th-edition";
const BSI_PLUG_FUSES =
  "https://knowledge.bsigroup.com/products/general-purpose-fuse-links-for-domestic-and-similar-purposes-primarily-for-use-in-plugs-specification";
const GOV_NUCLEAR =
  "https://www.gov.uk/government/news/nuclear-energy-what-you-need-to-know";
const GOV_GREYWATER =
  "https://assets.publishing.service.gov.uk/media/5a7cbfd4e5274a38e5756843/scho0708bofv-e-e.pdf";
const OFGEM_NETWORKS =
  "https://www.ofgem.gov.uk/energy-regulation/electricity/electricity-distribution";

type AnswerIndex = 0 | 1 | 2 | 3;

function defineQuestion({
  prompt,
  options,
  answerIndex,
  wrongReasons,
  sourceUrls,
}: {
  prompt: string;
  options: readonly [string, string, string, string];
  answerIndex: AnswerIndex;
  wrongReasons: readonly [string, string, string];
  sourceUrls: readonly string[];
}) {
  const wrongOptions = options.filter((_, index) => index !== answerIndex);

  return {
    prompt,
    options,
    answer: options[answerIndex],
    rationales: {
      [wrongOptions[0]]: wrongReasons[0],
      [wrongOptions[1]]: wrongReasons[1],
      [wrongOptions[2]]: wrongReasons[2],
    },
    sourceUrls,
  };
}

export const level2ElectricalInstallation = [
  // quiz-29730
  defineQuestion({
    prompt:
      "When must an employer record its health and safety policy in writing?",
    options: [
      "After an accident has happened on site",
      "Limited company status",
      "Under instruction from the local authority",
      "When employing five or more people",
    ],
    answerIndex: 3,
    wrongReasons: [
      "An accident may trigger a review, but it does not create the duty to record the policy. The employee threshold applies before any accident occurs.",
      "Company structure does not decide whether the policy must be written. The deciding fact here is the number of employees.",
      "The recording duty comes from health and safety law, not from a discretionary instruction issued by a local authority.",
    ],
    sourceUrls: [HSE_POLICY],
  }),
  defineQuestion({
    prompt:
      "Which regulation requires an employer to ensure a power drill they provide an employee is suitable for use?",
    options: [
      "Personal Protective Equipment at Work Regulations",
      "Current edition of the Building Regulations",
      "Electricity Safety, Quality and Continuity Regulations",
      "Provision and Use of Work Equipment Regulations",
    ],
    answerIndex: 3,
    wrongReasons: [
      "A drill is work equipment, not personal protective equipment worn to reduce exposure to a hazard.",
      "Building Regulations govern building work and building performance; they are not the employer's work-equipment suitability rules.",
      "ESQCR principally governs public electricity supply safety, quality and continuity rather than an employer-provided hand tool.",
    ],
    sourceUrls: [HSE_PUWER],
  }),
  defineQuestion({
    prompt:
      "In England, which listed regulations provide the specific hazardous-waste controls relevant to waste solvent adhesive?",
    options: [
      "The Electricity at Work Regulations",
      "The Environmental Protection Act",
      "Hazardous Waste (England and Wales) Regulations 2005 (as amended)",
      "The Health and Safety at Work Act",
    ],
    answerIndex: 2,
    wrongReasons: [
      "EAWR controls electrical danger at work; it does not prescribe the hazardous-waste consignment and handling regime for solvent waste.",
      "The Environmental Protection Act supplies wider waste duties, but the listed regulations contain the specific hazardous-waste controls asked for.",
      "HSWA imposes broad workplace safety duties, not the detailed classification, transfer and record controls for hazardous waste.",
    ],
    sourceUrls: [GOV_HAZARDOUS_WASTE],
  }),
  defineQuestion({
    prompt:
      "Which legislation gives a local authority specific powers to control noise from construction work?",
    options: [
      "Control of Pollution Act 1974",
      "The Electricity at Work Regulations",
      "The Hazardous Waste Regulations",
      "The Health and Safety at Work Act",
    ],
    answerIndex: 0,
    wrongReasons: [
      "EAWR addresses electrical systems and electrical work; it does not create the construction-noise notice procedure.",
      "Hazardous-waste law controls dangerous waste streams, not hours, plant and noise levels on construction sites.",
      "HSWA protects people from work risks, but the specific local-authority construction-noise power is in section 60 of the 1974 pollution Act.",
    ],
    sourceUrls: [CONTROL_OF_POLLUTION_ACT],
  }),
  defineQuestion({
    prompt:
      "Once the casualty is away from the heat source, what immediate first-aid action should be taken for a hand burn?",
    options: [
      "Isolate the supply of heat",
      "Place a dry dressing over the wound",
      "Cool the burn under cool or lukewarm running water for 20 minutes",
      "Send for help",
    ],
    answerIndex: 2,
    wrongReasons: [
      "The premise says the casualty is already away from the source. The next priority is removing retained heat from the tissue.",
      "A clean covering can protect the burn after cooling, but covering it first traps heat and delays the essential treatment.",
      "Help may be needed for a serious burn, but prompt cooling should start immediately while further assistance is arranged.",
    ],
    sourceUrls: [NHS_BURNS],
  }),
  defineQuestion({
    prompt:
      "A worker has slipped, cannot safely move and may have a serious spinal injury. What immediate action should be taken?",
    options: [
      "Help them stand and walk to the site office",
      "Call 999 or 112 and keep them still unless there is immediate danger",
      "Place them in the recovery position even though they are conscious and breathing normally",
      "Test the injury by moving their back and legs",
    ],
    answerIndex: 1,
    wrongReasons: [
      "Standing the casualty can move a damaged spine and worsen neurological injury. Keep them in the position found unless danger requires movement.",
      "The recovery position is for an unconscious person who is breathing. Rolling this conscious casualty creates avoidable spinal movement.",
      "A first aider should not provoke movement to diagnose a spinal injury. Emergency clinicians should assess and immobilise the casualty.",
    ],
    sourceUrls: [NHS_FIRST_AID],
  }),
  defineQuestion({
    prompt:
      "Who must be notified immediately when an operative sustains a back injury from carrying a load?",
    options: ["A health centre", "A solicitor", "Co-workers", "The supervisor"],
    answerIndex: 3,
    wrongReasons: [
      "Medical help may be arranged according to severity, but a health centre is not the person controlling the site's immediate response and records.",
      "Legal advice is not the immediate workplace reporting route for an injury sustained during a manual-handling task.",
      "Colleagues may help make the area safe, but notifying them does not replace reporting the incident to the responsible supervisor.",
    ],
    sourceUrls: [HSE_MANUAL_HANDLING],
  }),
  defineQuestion({
    prompt:
      "What are the most common construction site pollutants of water courses and rivers?",
    options: [
      "Cement and grout",
      "Cement and oil",
      "Grout and silt",
      "Oil and silt",
    ],
    answerIndex: 3,
    wrongReasons: [
      "Cement and grout washout are harmful alkaline pollutants, but this pair omits the especially common oil and suspended-silt pathways.",
      "Oil is a common plant and fuel pollutant, but this pair omits silt washed from exposed ground and excavations.",
      "Silt is common, but grout is a narrower site material than the oil releases associated with fuels, storage and machinery.",
    ],
    sourceUrls: [GOV_CONSTRUCTION_POLLUTION],
  }),
  defineQuestion({
    prompt:
      "Under which listed regulations must end-of-life low-pressure sodium lamps be handled as electrical and electronic waste?",
    options: [
      "COSHH",
      "EAWR",
      "HASWA",
      "Waste Electrical and Electronic Equipment Regulations 2013",
    ],
    answerIndex: 3,
    wrongReasons: [
      "COSHH controls worker exposure to hazardous substances; it is not the end-of-life electrical-equipment waste regime.",
      "EAWR prevents electrical danger in work activities and systems, not the recovery and disposal of discarded lamps.",
      "HSWA imposes broad workplace duties but does not replace the product-specific WEEE collection and treatment requirements.",
    ],
    sourceUrls: [WEEE_REGULATIONS],
  }),
  defineQuestion({
    prompt:
      "Why is it important to report asbestos immediately if it is suspected as being present?",
    options: [
      "To comply with RIDDOR",
      "To ensure the job is not held up",
      "To prevent completion delay penalties",
      "To prevent unnecessary exposure",
    ],
    answerIndex: 3,
    wrongReasons: [
      "Finding suspected asbestos is not automatically a RIDDOR report. The immediate purpose is to stop disturbance and exposure while it is checked.",
      "Prompt reporting may pause rather than accelerate the job; programme convenience cannot take priority over fibre exposure.",
      "Contract penalties are commercial matters and do not explain the urgent health control required for suspected asbestos.",
    ],
    sourceUrls: [HSE_ASBESTOS],
  }),
  defineQuestion({
    prompt:
      "Under the site's approved risk matrix, an activity is rated high and unacceptable until further controls are added. What should happen?",
    options: [
      "Continue working and complete corrective actions within a month",
      "Continue working and complete corrective actions within a week",
      "Stop the activity immediately and complete set actions",
      "Stop the activity within a week and complete set actions",
    ],
    answerIndex: 2,
    wrongReasons: [
      "A one-month continuation leaves people exposed to a risk the stated matrix already classifies as unacceptable.",
      "Reducing the delay to a week does not make continued exposure acceptable; controls must be in place before the work resumes.",
      "Waiting a week to stop contradicts the stated immediate control required for an unacceptable residual risk.",
    ],
    sourceUrls: [HSE_RISK],
  }),
  defineQuestion({
    prompt:
      "What is the most appropriate action to reduce the risk of harm to workers when damaged asbestos is encountered in a building?",
    options: [
      "Stop work, prevent access and arrange assessment by a competent asbestos specialist",
      "Issue all workers with dust masks and safety glasses",
      "Put barriers around it and continue work in the affected area",
      "Cover it with sheeting and continue work",
    ],
    answerIndex: 0,
    wrongReasons: [
      "Ordinary dust masks and eye protection do not make uncontrolled asbestos disturbance safe or determine whether licensed work is required.",
      "Barriers can help control access, but continuing in the affected area before assessment can still disturb fibres.",
      "Improvised covering can disturb damaged material and is not a substitute for a planned repair, enclosure or removal by competent people.",
    ],
    sourceUrls: [HSE_ASBESTOS_MANAGEMENT],
  }),
  defineQuestion({
    prompt:
      "What item of PPE must be used when drilling a hole in a steel wall bracket using a pillar drill?",
    options: ["Hard hat", "Leather gloves", "Safety boots", "Safety goggles"],
    answerIndex: 3,
    wrongReasons: [
      "A hard hat protects against falling or striking objects, not swarf projected toward the operator's eyes.",
      "Gloves can be caught by rotating machinery and do not replace eye protection against metal chips.",
      "Safety footwear protects feet from dropped workpieces but does not control the immediate flying-particle hazard.",
    ],
    sourceUrls: [HSE_PUWER],
  }),
  defineQuestion({
    prompt:
      "What should determine the first-aid provision for a construction site?",
    options: [
      "The competence of persons employed",
      "The distance from the hospital",
      "The number of first aiders",
      "A needs assessment covering the hazards, workforce and likely injuries",
    ],
    answerIndex: 3,
    wrongReasons: [
      "Worker competence can affect risk, but it is only one consideration and cannot define all equipment, facilities and cover required.",
      "Remoteness from medical help is relevant, but using it alone ignores the site's hazards, workforce and likely injuries.",
      "The number of first aiders is an outcome of the needs assessment, not the sole input used to determine provision.",
    ],
    sourceUrls: [HSE_FIRST_AID],
  }),
  defineQuestion({
    prompt:
      "Why is it important to replace first aid supplies each time they are used?",
    options: [
      "To comply with COSHH regulations",
      "To comply with RIDDOR requirements",
      "To ensure accidents can be effectively prevented",
      "To ensure resources are always available in case of accidents",
    ],
    answerIndex: 3,
    wrongReasons: [
      "COSHH concerns exposure to hazardous substances; it does not explain restocking ordinary first-aid materials after use.",
      "RIDDOR governs reporting specified events and does not set the contents or replenishment cycle of the first-aid kit.",
      "First-aid supplies treat injury after an incident; merely stocking them does not prevent the accident itself.",
    ],
    sourceUrls: [HSE_FIRST_AID],
  }),
  defineQuestion({
    prompt:
      "Which listed industry training scheme is a commonly recognised way to demonstrate training for erecting mobile access towers?",
    options: ["EAWR", "ESQCR", "HASWA", "PASMA"],
    answerIndex: 3,
    wrongReasons: [
      "EAWR is electrical-safety legislation, not a mobile access-tower training scheme or certificate.",
      "ESQCR regulates electricity networks and supply quality; it does not train tower assemblers.",
      "HSWA is the framework workplace-safety Act, not an industry course demonstrating tower-erection training.",
    ],
    sourceUrls: [HSE_TOWERS],
  }),
  defineQuestion({
    prompt:
      "What is the main risk to an electrician when safe isolation is not carried out on a live circuit being worked on?",
    options: [
      "Electric shock caused by direct contact",
      "Electric shock caused by static discharge",
      "Electrical shock caused by electromagnetic interference",
      "Electrical shock caused by indirect contact",
    ],
    answerIndex: 0,
    wrongReasons: [
      "Static charge is a different phenomenon and is not the principal danger from touching an energised circuit conductor.",
      "Electromagnetic interference can disrupt equipment but is not the shock mechanism created by exposed live parts.",
      "Indirect contact is the older term for touching exposed metal made live by a fault; this task presents direct access to normally live parts.",
    ],
    sourceUrls: [HSE_SAFE_WORKING],
  }),
  defineQuestion({
    prompt:
      "What type of hazardous substance is classified by the label shown in the image?",
    options: ["Explosive", "Harmful", "Oxidising", "Toxic"],
    answerIndex: 2,
    wrongReasons: [
      "Explosives use the exploding-bomb pictogram, not the flame-over-circle symbol shown.",
      "The general harmful or irritant warning uses an exclamation mark rather than a flame over a circle.",
      "Acute toxicity uses the skull-and-crossbones pictogram, which identifies a different hazard class.",
    ],
    sourceUrls: [HSE_HAZARD_PICTOGRAMS],
  }),
  defineQuestion({
    prompt:
      "What term describes loud noise itself as a source with the potential to cause hearing damage?",
    options: ["A hazard", "A risk", "An accident", "An occurrence"],
    answerIndex: 0,
    wrongReasons: [
      "Risk combines the likelihood and severity of harm after exposure and controls; it is not the harmful source itself.",
      "An accident is an event, whereas the question asks for the pre-existing source capable of causing harm.",
      "Occurrence is a generic event description and does not identify the health and safety concept of a source of harm.",
    ],
    sourceUrls: [HSE_NOISE, HSE_RISK],
  }),
  defineQuestion({
    prompt:
      "What is the specific hazard when cables are run in thermal insulation?",
    options: ["Burns", "Electric shock", "Explosion", "Fire"],
    answerIndex: 3,
    wrongReasons: [
      "A person could be burned by a later fire, but the installation hazard is cable overheating and ignition rather than direct contact with heat.",
      "Thermal insulation reduces heat dissipation and current capacity; it does not by itself expose live conductors to create shock.",
      "Ordinary insulated cable overheating is an ignition risk, not normally an explosive-energy mechanism.",
    ],
    sourceUrls: [IET_BS_7671],
  }),
  defineQuestion({
    prompt:
      "What term describes working from a ladder as a source with the potential to cause a fall?",
    options: ["A hazard", "A risk", "An accident", "An incident"],
    answerIndex: 0,
    wrongReasons: [
      "Risk is the assessed likelihood and consequence of falling after the height, task and controls are considered.",
      "An accident is the harmful event after control has failed, not the work-at-height condition that can cause it.",
      "An incident is an event or near miss; simply working from the ladder is the existing hazard.",
    ],
    sourceUrls: [HSE_TOWERS, HSE_RISK],
  }),
  defineQuestion({
    prompt:
      "What practice is employed to address the potential hazard of electrical shock from trailing leads for power tools on construction sites?",
    options: [
      "Use of 110 V centre tapped supplies",
      "Use of 230 V single phase supplies",
      "Use of 400 V three phase supplies",
      "Use of 500 V DC single phase supplies",
    ],
    answerIndex: 0,
    wrongReasons: [
      "A 230 V conductor can place the full nominal voltage to earth, so damaged site leads present a much greater shock voltage.",
      "A 400 V three-phase supply is intended for suitable larger loads and does not provide reduced-low-voltage protection for hand tools.",
      "A 500 V DC supply is neither reduced low voltage nor the standard centre-tapped site-tool arrangement.",
    ],
    sourceUrls: [HSE_CONSTRUCTION_ELECTRICITY],
  }),
  defineQuestion({
    prompt:
      "Which listed extinguisher is generally preferred indoors for energised electrical equipment because it is non-conductive and leaves no residue?",
    options: ["Carbon dioxide (CO₂)", "Dry powder", "Water", "Wet chemical"],
    answerIndex: 0,
    wrongReasons: [
      "Dry powder can work electrically, but it obscures vision, contaminates equipment and creates a difficult indoor clean-up.",
      "An ordinary water extinguisher can conduct current and is intended mainly for Class A solid-material fires, not energised equipment.",
      "Wet chemical extinguishers are designed mainly for high-temperature cooking-oil fires and introduce a liquid agent around electricity.",
    ],
    sourceUrls: [LONDON_FIRE_EXTINGUISHERS],
  }),
  defineQuestion({
    prompt: "Which building component is most likely to contain asbestos?",
    options: [
      "A cistern",
      "An unvented hot water cylinder",
      "Cavity wall insulation",
      "Loft insulation",
    ],
    answerIndex: 0,
    wrongReasons: [
      "A modern unvented cylinder is a metal pressure vessel with insulation; it is not the classic moulded asbestos-cement item in this list.",
      "Cavity insulation is typically mineral fibre, foam or beads rather than the asbestos-cement construction formerly used for some tanks.",
      "Common loft insulation is mineral wool or other thermal material; the recognisable historic component here is the asbestos-cement cistern.",
    ],
    sourceUrls: [HSE_ASBESTOS],
  }),
  defineQuestion({
    prompt:
      "What is the first action that must be taken when suspected asbestos is identified during refurbishment work of a dwelling?",
    options: [
      "Obtain appropriate PPE",
      "Remove the affected area and place in bags",
      "Seal the suspected material with paint",
      "Stop work immediately",
    ],
    answerIndex: 3,
    wrongReasons: [
      "PPE selection follows identification and risk assessment; putting it on does not authorise continued disturbance of unknown material.",
      "Unplanned removal can release fibres and may be work that only a licensed asbestos contractor may perform.",
      "Encapsulation may be a planned management option, but painting unidentified material before assessment can disturb or conceal it.",
    ],
    sourceUrls: [HSE_ASBESTOS],
  }),
  defineQuestion({
    prompt:
      "Which listed voltage is a common high-voltage distribution level for a light-industrial site with its own transformer?",
    options: ["11kV", "132kV", "33kV", "400kV"],
    answerIndex: 0,
    wrongReasons: [
      "132 kV is a sub-transmission or transmission voltage and is far above a typical light-industrial intake.",
      "33 kV may supply larger customers or primary substations, but it is not the common level intended for this light-industrial example.",
      "400 kV is a national bulk-transmission voltage, not a normal customer distribution intake.",
    ],
    sourceUrls: [NATIONAL_GRID_NETWORK],
  }),
  defineQuestion({
    prompt:
      "A typical insulator for an overhead line transmission system would be:",
    options: [
      "Glass or porcelain",
      "Mica or butyl",
      "Rubber or pvc",
      "Wood or plastic",
    ],
    answerIndex: 0,
    wrongReasons: [
      "Mica is used inside electrical equipment and butyl is an elastomer; neither pair describes standard outdoor suspension insulator strings.",
      "Rubber and PVC are common cable materials, but ordinary forms are not the traditional rigid weathering insulators used on transmission supports.",
      "Wood can absorb moisture and generic plastic lacks the specified ageing and mechanical performance required of line insulators.",
    ],
    sourceUrls: [NATIONAL_GRID_NETWORK],
  }),
  defineQuestion({
    prompt:
      "At a consumer's supply terminals, what statutory tolerance applies around the declared 230 V low-voltage supply?",
    options: [
      "+ 10% and - 6%",
      "+ 10% and – 10%",
      "+ 6% and – 10 %",
      "+ 6% and – 6%",
    ],
    answerIndex: 0,
    wrongReasons: [
      "The lower statutory bound is 216.2 V, which is 6% below 230 V rather than 10% below it.",
      "This reverses the asymmetric tolerance: the permitted upper variation is 10% and the lower variation is 6%.",
      "The upper bound is 253 V, or 10% above declared voltage, so a symmetrical 6% band is too narrow on the high side.",
    ],
    sourceUrls: [ESQCR],
  }),
  defineQuestion({
    prompt:
      "Which listed generation technology has no moving parts in its basic fixed-array energy-conversion process?",
    options: [
      "Grey water recycling",
      "Micro wind",
      "Micro-hydro",
      "Photovoltaic",
    ],
    answerIndex: 3,
    wrongReasons: [
      "A greywater system commonly uses pumps, valves and treatment equipment and is a reuse service rather than a generation technology.",
      "A wind turbine converts energy through rotating blades, shaft and generator components.",
      "Micro-hydro uses moving water to turn a turbine-generator, so mechanical rotation is central to conversion.",
    ],
    sourceUrls: [IET_PV_CODE],
  }),
  defineQuestion({
    prompt:
      "What is the term for a number of solar PV modules connected in series?",
    options: ["A Chain", "A Module", "A Set", "A String"],
    answerIndex: 3,
    wrongReasons: [
      "Chain is an informal word and is not the defined PV term for the series-connected group.",
      "A module is one packaged assembly of interconnected cells, not several modules connected together.",
      "Set is generic language and does not specify the series electrical relationship between modules.",
    ],
    sourceUrls: [IET_PV_CODE],
  }),
  // quiz-29731
  defineQuestion({
    prompt:
      "Which listed Act provides core employment rights associated with pregnancy and maternity, including protection from unfair dismissal?",
    options: [
      "Data Protection Act",
      "Disability Discrimination Act",
      "Employment Rights Act 1996",
      "Human Rights Act",
    ],
    answerIndex: 2,
    wrongReasons: [
      "Data-protection law governs the handling of personal information, not statutory maternity leave or dismissal rights.",
      "Disability discrimination is a separate protected-characteristic regime; pregnancy and maternity employment rights do not arise from this former Act.",
      "Human-rights law protects convention rights but is not the employment statute that establishes the listed maternity protections.",
    ],
    sourceUrls: [EMPLOYMENT_RIGHTS_ACT],
  }),
  defineQuestion({
    prompt:
      "Which listed visitor may inspect water fittings for compliance and risks of contaminating the drinking-water supply?",
    options: [
      "Building control inspector",
      "Contracts Manager",
      "Electrical services inspector",
      "A water supplier's water-fittings inspector",
    ],
    answerIndex: 3,
    wrongReasons: [
      "Building control checks compliance with building regulations, but water suppliers have the specific enforcement role for water-fittings rules.",
      "A contracts manager coordinates commercial delivery and has no statutory inspection power over drinking-water fittings.",
      "An electrical inspector assesses electrical work and is not appointed to enforce water-fittings contamination controls.",
    ],
    sourceUrls: [WATER_FITTINGS_REGULATIONS],
  }),
  defineQuestion({
    prompt:
      "Which of the following would not normally come under the umbrella of company policy and procedures:",
    options: [
      "Contract of employment",
      "Dress code",
      "Statutory cancellation rights",
      "Timekeeping",
    ],
    answerIndex: 2,
    wrongReasons: [
      "A contract of employment is an internal agreement defining the employer-employee relationship and workplace terms.",
      "A dress code is a typical employer policy governing conduct or presentation at work.",
      "Timekeeping is routinely controlled through company attendance and lateness procedures.",
    ],
    sourceUrls: [CONSUMER_CONTRACTS_REGULATIONS],
  }),
  defineQuestion({
    prompt:
      "What general health-and-safety term describes a person or organisation on whom an electrical-safety duty is imposed?",
    options: [
      "Company manager",
      "Competent person",
      "Dutyholder",
      "Electrician",
    ],
    answerIndex: 2,
    wrongReasons: [
      "A manager may hold duties in a particular organisation, but the general term is not limited to that job title.",
      "Competence describes knowledge, experience and capability; it does not itself identify everyone who bears a legal duty.",
      "An electrician may be a dutyholder, but electrical-safety duties can also fall on employers, employees and others controlling systems or work.",
    ],
    sourceUrls: [EAWR, HSE_ELECTRICITY],
  }),
  defineQuestion({
    prompt:
      "Which listed publication gives the technical requirements for the design, erection and verification of low-voltage electrical installations?",
    options: [
      "Electricity Supply Regulations",
      "Electricity at Work Regulations",
      "Health and Safety at Work Act",
      "Current edition of the IET Wiring Regulations (BS 7671)",
    ],
    answerIndex: 3,
    wrongReasons: [
      "Electricity-supply legislation concerns network supply duties rather than the detailed design and verification rules for consumer installations.",
      "EAWR imposes statutory workplace precautions but does not contain BS 7671's detailed installation design requirements.",
      "HSWA supplies broad employer and workplace duties, not a technical wiring code for circuit erection and verification.",
    ],
    sourceUrls: [IET_BS_7671],
  }),
  defineQuestion({
    prompt:
      "Which of the following people would be responsible for creating working drawings from an idea or scheme submitted by the client:",
    options: [
      "Contracts manager",
      "Design engineer",
      "Electrical engineer",
      "Managing director",
    ],
    answerIndex: 1,
    wrongReasons: [
      "A contracts manager coordinates delivery, cost and programme rather than normally converting the client's concept into working design drawings.",
      "An electrical engineer may contribute specialist calculations, but the role explicitly responsible for developing the scheme into working drawings is the design engineer.",
      "A managing director leads the business and would not ordinarily produce project working drawings.",
    ],
    sourceUrls: [UK_GOV_PROJECT_DELIVERY],
  }),
  defineQuestion({
    prompt:
      "Which organisation acts as a means of a co-ordinator between unions and employers with respect to grading and rates of pay for employees:",
    options: ["CITB", "ECA", "JIB", "NICEIC"],
    answerIndex: 2,
    wrongReasons: [
      "CITB supports construction training and skills rather than jointly setting electrical-industry grading and employment terms.",
      "ECA represents electrotechnical contractors, but the joint employer-union grading machinery is operated through the JIB.",
      "NICEIC assesses and certifies electrical contractors; it is not the joint industrial relations body for pay and grading.",
    ],
    sourceUrls: [JIB],
  }),
  defineQuestion({
    prompt:
      "What should be established first when planning a new electrical installation?",
    options: [
      "The client's brief and functional requirements",
      "Cost",
      "List of materials to be used",
      "Tradesmen required",
    ],
    answerIndex: 0,
    wrongReasons: [
      "Cost can be estimated meaningfully only after the required outcomes and constraints are understood.",
      "A material list follows circuit design and specification; choosing products first can fail to satisfy the actual need.",
      "Labour planning depends on the defined scope, methods and programme, all of which derive from the brief.",
    ],
    sourceUrls: [UK_GOV_PROJECT_DELIVERY],
  }),
  defineQuestion({
    prompt:
      "In a traditional contracting structure, which listed role normally oversees teams across several sites?",
    options: [
      "Approved electrician",
      "Competent person",
      "Site foreman",
      "Works manager",
    ],
    answerIndex: 3,
    wrongReasons: [
      "An approved electrician normally performs or supervises technical work rather than managing multiple project sites.",
      "Competent person describes capability, not a defined multi-site management position.",
      "A site foreman controls labour on an individual site and normally reports upward to wider works management.",
    ],
    sourceUrls: [UK_GOV_PROJECT_DELIVERY],
  }),
  defineQuestion({
    prompt:
      "The role of a contracts manager working for an electrical contracting company is to:",
    options: [
      "Check the profits of the main contractor",
      "Deliver materials to the contract site",
      "Ensure contract deadlines are met",
      "Take charge of all contractors on a site",
    ],
    answerIndex: 2,
    wrongReasons: [
      "The electrical contractor does not audit the main contractor's profits; its manager controls its own contract performance.",
      "Materials may be delivered by suppliers or logistics staff, while the manager plans and monitors the contract.",
      "Overall control of every contractor normally belongs to the main contractor or principal contractor, not one electrical subcontract manager.",
    ],
    sourceUrls: [UK_GOV_PROJECT_DELIVERY],
  }),
  defineQuestion({
    prompt:
      "The person required to check the quality of the site materials and equipment against the specification and drawings, is:",
    options: [
      "The architect",
      "The quantity surveyor",
      "The site clerk of works",
      "The site foreman",
    ],
    answerIndex: 2,
    wrongReasons: [
      "The architect authors or administers design intent but does not normally provide continuous site inspection of delivered workmanship and materials.",
      "A quantity surveyor primarily manages measurement, valuation and cost rather than day-to-day specification-quality inspection.",
      "A foreman directs the contractor's workforce; the independent client-side checking role described is the clerk of works.",
    ],
    sourceUrls: [UK_GOV_PROJECT_DELIVERY],
  }),
  defineQuestion({
    prompt: "A nominated supplier might be selected by:",
    options: [
      "The client (employer), often acting through the architect or contract administrator",
      "The foreman or clerk of works",
      "The main contractor or subcontractor",
      "The quantity surveyor",
    ],
    answerIndex: 0,
    wrongReasons: [
      "A foreman or clerk of works may inspect delivery, but does not normally make the contractual nomination.",
      "A contractor-selected supplier is ordinarily a domestic supplier rather than one nominated by the employer side.",
      "A quantity surveyor may advise on cost and procurement, but the nomination is made for the employer under the contract.",
    ],
    sourceUrls: [GOV_CONSTRUCTION_CONTRACTS],
  }),
  defineQuestion({
    prompt:
      "The area of control relating to air conditioning systems is that of the:",
    options: [
      "Building management system",
      "Fire alarm system",
      "Instrumentation system",
      "Security system",
    ],
    answerIndex: 0,
    wrongReasons: [
      "A fire-alarm system detects and signals fire; any HVAC shutdown interface does not make it the normal air-conditioning controller.",
      "Instrumentation can sense process variables, but building HVAC control is integrated through the building management system.",
      "A security system controls access, intrusion and surveillance rather than comfort temperature and ventilation plant.",
    ],
    sourceUrls: [BSI_STANDARDS],
  }),
  defineQuestion({
    prompt: "The IET Regulations state requirements intended to provide:",
    options: [
      "Detailed instructions for all circumstances",
      "Lightning protection of buildings",
      "Safety of persons, livestock and property",
      "The most economical design",
    ],
    answerIndex: 2,
    wrongReasons: [
      "BS 7671 states requirements and principles but cannot prescribe detailed instructions for every installation circumstance.",
      "Lightning protection is principally covered by the BS EN 62305 series, not the general purpose of BS 7671.",
      "Economy may influence design choices only after safety and compliance; it is not the Regulations' stated objective.",
    ],
    sourceUrls: [IET_BS_7671],
  }),
  defineQuestion({
    prompt:
      "Which situation is most likely to require a specialist standard or code of practice in addition to general installation rules?",
    options: [
      "Addition of spur units",
      "A specialist or higher-risk area with particular requirements",
      "Domestic premises",
      "Ring final circuits",
    ],
    answerIndex: 1,
    wrongReasons: [
      "A normal spur addition is addressed by the general wiring rules unless its location or equipment introduces a specialist hazard.",
      "Ordinary domestic installations are within BS 7671's mainstream scope and do not automatically need a separate specialist code.",
      "Ring final circuits are a standard low-voltage circuit arrangement covered directly by BS 7671 guidance.",
    ],
    sourceUrls: [IET_BS_7671, BSI_STANDARDS],
  }),
  defineQuestion({
    prompt:
      "The right to a fair trial is covered under which of the following Acts:",
    options: [
      "Data Protection Act",
      "Disability Discrimination Act",
      "Employment Rights Act",
      "Human Rights Act",
    ],
    answerIndex: 3,
    wrongReasons: [
      "Data-protection law regulates personal-data processing, not the convention right to a fair hearing.",
      "Disability discrimination law concerns equal treatment and access rather than criminal and civil trial guarantees.",
      "Employment-rights law governs work relationships and tribunals but is not the source of the general Article 6 right.",
    ],
    sourceUrls: [HUMAN_RIGHTS_ACT],
  }),
  defineQuestion({
    prompt:
      "It is necessary to record materials received and used on site in order to:",
    options: [
      "Check the price of the contract",
      "Discuss at site meetings",
      "Maintain stocks and check materials used",
      "Report progress to the client",
    ],
    answerIndex: 2,
    wrongReasons: [
      "Contract price control uses valuations and cost records; receipt-and-usage records primarily track physical inventory.",
      "The records may inform a meeting, but discussion is not their operational purpose.",
      "Material use can indicate progress, but the direct need is stock control and reconciliation of consumption.",
    ],
    sourceUrls: [UK_GOV_PROJECT_DELIVERY],
  }),
  defineQuestion({
    prompt:
      "The preferred method of instructing the client in the correct use and maintenance of electrical equipment used within an installation would be to:",
    options: [
      "Leave relevant manufacturer's literature adjacent to equipment",
      "Provide them with a guided tour and verbal instructions during the handover period",
      "Provide them with an operations and maintenance manual",
      "Provide them with the manufacturer's catalogue",
    ],
    answerIndex: 2,
    wrongReasons: [
      "Loose literature beside equipment is incomplete, easily lost and does not consolidate installation-specific instructions.",
      "A verbal tour is useful support but leaves no durable reference for later operators or maintainers.",
      "A catalogue is a sales document covering many products, not an installation-specific operating and maintenance record.",
    ],
    sourceUrls: [UK_GOV_PROJECT_DELIVERY],
  }),
  defineQuestion({
    prompt:
      "A room 2.6 m wide is represented at a scale of 1:50. What width should appear on the drawing?",
    options: ["2.6 cm", "5.2 cm", "5.2 mm", "52 cm"],
    answerIndex: 1,
    wrongReasons: [
      "2.6 cm represents 1.3 m at 1:50, only half of the actual room width.",
      "5.2 mm represents 260 mm at 1:50; the metre-to-millimetre conversion has been missed by a factor of ten.",
      "52 cm would represent 26 m at 1:50, ten times the stated width.",
    ],
    sourceUrls: [BSI_STANDARDS],
  }),
  defineQuestion({
    prompt:
      "The type of drawing which could be used as part of a record of work done is an:",
    options: [
      "Architects plan",
      "As fitted drawing",
      "Wiring diagram",
      "Working drawing",
    ],
    answerIndex: 1,
    wrongReasons: [
      "An architect's plan shows design and spatial intent but may not reflect final service routes and changes.",
      "A wiring diagram explains connections and may omit the final installed locations needed for the record.",
      "A working drawing directs construction before or during the work; the as-fitted version records the result.",
    ],
    sourceUrls: [UK_GOV_PROJECT_DELIVERY],
  }),
  defineQuestion({
    prompt: "The main purpose of an assembly diagram is",
    options: [
      "Show how the components fit together",
      "To provide different views of the components",
      "To show the sequence of control",
      "Use symbols to represent circuit components and show their connections",
    ],
    answerIndex: 0,
    wrongReasons: [
      "Multiple component views are normally supplied by detail or orthographic drawings, not the defining purpose of an assembly diagram.",
      "A control sequence is represented by a flow, sequence or functional diagram rather than a physical assembly view.",
      "Symbolic circuit connections belong to circuit or schematic diagrams, not a diagram showing physical assembly.",
    ],
    sourceUrls: [BSI_STANDARDS],
  }),
  defineQuestion({
    prompt: "Another description for a tender document is:",
    options: ["A bid", "A project schedule", "A specification", "An order"],
    answerIndex: 0,
    wrongReasons: [
      "A project schedule shows timing and dependencies; it can accompany a tender but is not the offer itself.",
      "A specification defines requirements against which bidders price and propose their work.",
      "An order accepts or commissions work after selection, whereas the tender is the contractor's bid.",
    ],
    sourceUrls: [GOV_CONSTRUCTION_CONTRACTS],
  }),
  defineQuestion({
    prompt:
      "The two key pieces of information required when completing a day work sheet are:",
    options: [
      "Any special conditions and work carried out",
      "The amount of extra time and materials that have been used",
      "The name and employee number of the electrician",
      "The name of the authorizing person and their signature",
    ],
    answerIndex: 1,
    wrongReasons: [
      "A description and conditions give context, but without labour time and material usage the extra work cannot be valued.",
      "Operative identity supports traceability but does not quantify the daywork cost.",
      "Authorisation validates the record but does not state the resources consumed by the extra work.",
    ],
    sourceUrls: [GOV_CONSTRUCTION_CONTRACTS],
  }),
  defineQuestion({
    prompt: "A contract document is an assurance that:",
    options: [
      "Good site management will be guaranteed",
      "Labour on site can be specially programmed",
      "The building owner and contractor will work together",
      "The work and the payment will be carried out",
    ],
    answerIndex: 3,
    wrongReasons: [
      "A contract allocates obligations and remedies but cannot guarantee the quality of day-to-day management.",
      "It may include programme requirements, yet special labour scheduling is not the fundamental reciprocal promise.",
      "Cooperation duties may exist, but the core exchange is performance of the work for the agreed payment.",
    ],
    sourceUrls: [GOV_CONSTRUCTION_CONTRACTS],
  }),
  defineQuestion({
    prompt:
      "A means of displaying work activities against time can be accomplished by the use of a:",
    options: ["Bar chart", "Calculator", "Clock", "Graph"],
    answerIndex: 0,
    wrongReasons: [
      "A calculator performs arithmetic but does not visually map activities to dates or durations.",
      "A clock shows current time, not the planned sequence and duration of project tasks.",
      "Graph is too generic; the recognised programme format showing task bars along a time axis is a bar chart.",
    ],
    sourceUrls: [UK_GOV_PROJECT_DELIVERY],
  }),
  defineQuestion({
    prompt:
      "Which item belongs in the detailed project specification rather than a simple material take-off list of items to purchase?",
    options: [
      "Item cost",
      "Item description",
      "Item quantity",
      "The complete installation's performance specification",
    ],
    answerIndex: 3,
    wrongReasons: [
      "Item cost is purchasing or estimating data and can sit in a priced material schedule.",
      "An item description identifies what is to be bought and is a normal material-list field.",
      "Item quantity is essential to a take-off because it states how many units to procure.",
    ],
    sourceUrls: [GOV_CONSTRUCTION_CONTRACTS],
  }),
  defineQuestion({
    prompt:
      "On a traditional large building project, which listed business is most likely to act as main contractor and coordinate the specialist trades?",
    options: [
      "Brick layer",
      "General building contractor",
      "Electrician",
      "Plumber",
    ],
    answerIndex: 1,
    wrongReasons: [
      "A bricklayer supplies one trade package and would not normally contract for and coordinate the entire project.",
      "An electrician usually acts as a specialist subcontractor within the wider building contract.",
      "A plumber delivers a specialist services package rather than the complete multi-trade building works.",
    ],
    sourceUrls: [GOV_CONSTRUCTION_CONTRACTS],
  }),
  defineQuestion({
    prompt:
      "Which of the following would not be found in an operational manual:",
    options: [
      "A description of how the system is to operate",
      "Manufacturers costs",
      "Manufacturers technical data",
      "Troubleshooting section",
    ],
    answerIndex: 1,
    wrongReasons: [
      "Operating descriptions are central instructions for users and maintainers.",
      "Technical data provides ratings, settings, parts and maintenance information needed to operate equipment safely.",
      "Troubleshooting guidance helps operators recognise faults and take permitted corrective action.",
    ],
    sourceUrls: [UK_GOV_PROJECT_DELIVERY],
  }),
  defineQuestion({
    prompt:
      "A diagram which takes into account the physical outline and connections of the circuit would be a:",
    options: [
      "Block Diagram",
      "Circuit Diagram",
      "Schematic Diagram",
      "Wiring Diagram",
    ],
    answerIndex: 3,
    wrongReasons: [
      "A block diagram reduces functions to labelled blocks and omits individual physical connections.",
      "A circuit diagram shows electrical relationships symbolically rather than reproducing physical outlines and routing.",
      "A schematic prioritises logical operation and intentionally abstracts the equipment's physical arrangement.",
    ],
    sourceUrls: [BSI_STANDARDS],
  }),
  defineQuestion({
    prompt: "What is the HSE's broad workplace-inspection role?",
    options: [
      "Inspect dutyholders and workplaces for compliance with health and safety law",
      "Health and safety policies",
      "Risk assessments before work begins",
      "Work completed on a construction site",
    ],
    answerIndex: 0,
    wrongReasons: [
      "Policies are documents an inspector may examine, not a complete description of HSE's inspection role.",
      "HSE can examine risk assessment at any relevant stage; it does not generally prepare the employer's pre-work assessment.",
      "Inspection is not limited to completed construction work and may occur during any work activity within HSE's remit.",
    ],
    sourceUrls: [HSE_ENFORCEMENT],
  }),
  // quiz-29732 (Q17 is the exact semantic duplicate of quiz-29731 Q25)
  defineQuestion({
    prompt:
      "Which listed Act provides the current UK statutory framework for protecting personal data handled by credit-reference agencies?",
    options: [
      "Data Protection Act 2018",
      "Disability Discrimination Act",
      "Employment Rights Act",
      "Human Rights Act",
    ],
    answerIndex: 0,
    wrongReasons: [
      "Disability-discrimination legislation concerns equal treatment, not the lawful processing, access and correction of credit-reference data.",
      "Employment-rights law governs the workplace relationship and does not regulate credit-reference agencies' personal-data processing.",
      "The Human Rights Act can protect privacy broadly, but the specific statutory data-processing framework is the 2018 Act and UK GDPR.",
    ],
    sourceUrls: [DATA_PROTECTION_ACT],
  }),
  defineQuestion({
    prompt:
      "Which listed method can rapidly send drawings or specifications to several recipients while preserving a written record?",
    options: ["E-mail", "Fax", "Verbal communication", "Written reports"],
    answerIndex: 0,
    wrongReasons: [
      "Fax can preserve a transmission record, but distribution to several recipients is less direct and manageable than addressed email.",
      "Verbal communication is quick but does not by itself preserve the drawings, specification or an exact written audit trail.",
      "A written report records information but describes a document type, not the rapid multi-recipient transmission method requested.",
    ],
    sourceUrls: [UK_GOV_PROJECT_DELIVERY],
  }),
  defineQuestion({
    prompt:
      "An architect wishing particular design expertise would probably employ:",
    options: [
      "Clerk of works",
      "Consulting engineers",
      "Quantity surveyors",
      "Sub-contractors",
    ],
    answerIndex: 1,
    wrongReasons: [
      "A clerk of works inspects construction quality on behalf of the client rather than supplying specialist engineering design.",
      "A quantity surveyor specialises in measurement, procurement and cost control, not the required technical design discipline.",
      "Subcontractors execute trade packages and may contribute design, but independent specialist expertise is normally commissioned from consulting engineers.",
    ],
    sourceUrls: [UK_GOV_PROJECT_DELIVERY],
  }),
  defineQuestion({
    prompt:
      "Which statement best describes the scope of the Electricity at Work Regulations 1989?",
    options: [
      "Electrical systems, equipment and work activities wherever electrical danger may arise",
      "Electrical systems but not equipment",
      "Electrical systems up to 1000V",
      "Professional electricians",
    ],
    answerIndex: 0,
    wrongReasons: [
      "Equipment forms part of electrical systems and work activities, so it is not excluded from the Regulations.",
      "EAWR sets no blanket 1000 V ceiling; its precautions apply wherever electrical danger may arise.",
      "Duties apply to employers, employees and people controlling electrical systems or work, not only professional electricians.",
    ],
    sourceUrls: [EAWR, HSE_ELECTRICITY],
  }),
  defineQuestion({
    prompt:
      "Which listed service is covered by dedicated British Standards codes of practice in addition to the general electrical-installation rules?",
    options: [
      "Building sites",
      "Caravan parks",
      "Emergency lighting and fire-alarm systems",
      "High rise flats",
    ],
    answerIndex: 2,
    wrongReasons: [
      "Construction sites have particular BS 7671 requirements and supply practices, but this answer asks for services with dedicated system codes.",
      "Caravan parks are special installations addressed in BS 7671 rather than the paired service codes intended here.",
      "High-rise flats require project-specific fire and building design, but the phrase does not identify the dedicated emergency-lighting and alarm system standards.",
    ],
    sourceUrls: [BS_5839, GOV_FIRE_SAFETY],
  }),
  defineQuestion({
    prompt:
      "Which of the following frequencies are covered in the IET Wiring Regulations:",
    options: [
      "50Hz; 100Hz; 200Hz",
      "50Hz; 100Hz; 400Hz",
      "50Hz; 60Hz; 200Hz",
      "50Hz; 60Hz; 400Hz",
    ],
    answerIndex: 3,
    wrongReasons: [
      "This set omits 60 Hz and includes 100 Hz and 200 Hz instead of the listed standard application frequencies.",
      "Including 400 Hz is correct, but replacing 60 Hz with 100 Hz makes the set incomplete.",
      "50 Hz and 60 Hz are included, but 200 Hz is not the third listed frequency in this BS 7671 scope question.",
    ],
    sourceUrls: [IET_BS_7671],
  }),
  defineQuestion({
    prompt:
      "Which of the following would you expect to find in a specification:",
    options: [
      "As built drawings",
      "Test results",
      "The amount of items to be used",
      "The clients requirements",
    ],
    answerIndex: 3,
    wrongReasons: [
      "As-built drawings are produced after installation to record the finished work rather than define the tender requirement.",
      "Test results evidence completed verification and cannot normally exist in the pre-construction specification.",
      "Quantities belong in a schedule or bill; a specification principally states required performance, quality and client outcomes.",
    ],
    sourceUrls: [GOV_CONSTRUCTION_CONTRACTS],
  }),
  defineQuestion({
    prompt:
      "Which of the following would you not find in an operations manual:",
    options: [
      "A copy of the IET Regulations",
      "A description of how the system is to operate",
      "All test and commissioning records",
      "Manufacturers technical data for all major components",
    ],
    answerIndex: 0,
    wrongReasons: [
      "The system description tells operators how the installed services function and is core handover information.",
      "Test and commissioning records demonstrate settings and satisfactory completion and belong in the handover record.",
      "Manufacturer data supports safe operation, maintenance and replacement of the components actually installed.",
    ],
    sourceUrls: [UK_GOV_PROJECT_DELIVERY],
  }),
  defineQuestion({
    prompt:
      "Which one of the following procedures should a contracting electrician working on a site use for receiving materials, tools and equipment:",
    options: [
      "Check and retain delivery notes",
      "Inform site manager",
      "Inform the supervisor when next seen",
      "Leave paperwork for someone else",
    ],
    answerIndex: 0,
    wrongReasons: [
      "Informing the manager does not verify the delivered description, quantity or condition against the consignment record.",
      "Waiting to tell a supervisor allows shortages or damage to go unrecorded and weakens any claim against the supplier.",
      "Passing unverified paperwork onward abandons the receiver's opportunity to reconcile the delivery while it is present.",
    ],
    sourceUrls: [UK_GOV_PROJECT_DELIVERY],
  }),
  defineQuestion({
    prompt:
      "What document details - extra work- carried out that was not on the original contract:",
    options: ["Additions sheet", "Daywork sheet", "Time sheet", "Work sheet"],
    answerIndex: 1,
    wrongReasons: [
      "An additions sheet is not the standard record used to value extra labour, plant and materials on a daywork basis.",
      "A time sheet records labour attendance or hours but does not capture all materials and the description or authorisation of the extra work.",
      "A work sheet can allocate ordinary tasks; it is not the recognised valuation record for work outside the priced contract.",
    ],
    sourceUrls: [GOV_CONSTRUCTION_CONTRACTS],
  }),
  defineQuestion({
    prompt:
      "Which of the following would not normally be placed on a Materials List:",
    options: ["Catalogue number", "Cost", "Delivery date", "Item description"],
    answerIndex: 2,
    wrongReasons: [
      "A catalogue number identifies the precise product to order and is useful material-list data.",
      "Cost may be included for estimating or purchasing control alongside the material item.",
      "An item description is essential to communicate what product or material is required.",
    ],
    sourceUrls: [UK_GOV_PROJECT_DELIVERY],
  }),
  defineQuestion({
    prompt: "A nominated subcontractor might be chosen by:",
    options: [
      "The client (employer), often acting through the architect or contract administrator",
      "The foreman or clerk of works",
      "The main contractor",
      "The quantity surveyor",
    ],
    answerIndex: 0,
    wrongReasons: [
      "Site inspection and supervision roles do not normally exercise the employer's contractual nomination power.",
      "A subcontractor independently chosen by the main contractor is a domestic subcontractor rather than an employer-nominated one.",
      "The quantity surveyor may advise on selection and valuation but does not become the nominating contractual party.",
    ],
    sourceUrls: [GOV_CONSTRUCTION_CONTRACTS],
  }),
  defineQuestion({
    prompt:
      "Material delivered to site should be checked against the delivery note and the:",
    options: [
      "Architects instructions",
      "Job sheet",
      "Original order",
      "Site diary",
    ],
    answerIndex: 2,
    wrongReasons: [
      "Architect's instructions may change the work but do not state the supplier's complete ordered quantity and product references.",
      "A job sheet allocates site tasks and is not the purchasing record used to reconcile a consignment.",
      "A site diary records daily events; it does not prove what the buyer requested from the supplier.",
    ],
    sourceUrls: [UK_GOV_PROJECT_DELIVERY],
  }),
  defineQuestion({
    prompt:
      "What is the typical sequence of events leading to contract work with the following steps:- 1 Order 2 Contract 3 Tender 4 Specification:",
    options: ["1, 2, 3, 4", "2, 4, 1, 3", "3, 1, 2, 4", "4, 3, 1, 2"],
    answerIndex: 3,
    wrongReasons: [
      "An order and contract cannot sensibly precede the specification and competitive offer that define the work.",
      "Starting with a contract reverses procurement: requirements and tendering come before acceptance and formation.",
      "A tender needs a prior specification against which it is prepared, and the contract follows acceptance rather than preceding requirements.",
    ],
    sourceUrls: [GOV_CONSTRUCTION_CONTRACTS],
  }),
  defineQuestion({
    prompt:
      "To check the ongoing progress of a contract, the contracts manager would use:",
    options: [
      "Delivery records and reports",
      "Operation and data sheets",
      "Operation sheets and memorandum",
      "Work sheets and time sheets",
    ],
    answerIndex: 3,
    wrongReasons: [
      "Delivery records show materials arriving but cannot establish how much labour activity has actually been completed.",
      "Operating and data sheets describe equipment, not current workforce effort against planned tasks.",
      "Memoranda and operation sheets may communicate information but do not provide the paired task-and-hours evidence needed for progress tracking.",
    ],
    sourceUrls: [UK_GOV_PROJECT_DELIVERY],
  }),
  defineQuestion({
    prompt:
      "Which listed Act currently protects access to goods and services from unlawful disability discrimination in Great Britain?",
    options: [
      "Data Protection Act",
      "Equality Act 2010",
      "Employment Rights Act",
      "Human Rights Act",
    ],
    answerIndex: 1,
    wrongReasons: [
      "Data-protection law controls personal information and does not create the service-provider reasonable-adjustment duty.",
      "Employment-rights legislation concerns the employment relationship rather than general access to goods and services.",
      "Human-rights law has broader equality and public-authority effects, but the specific current service discrimination regime is the Equality Act.",
    ],
    sourceUrls: [EQUALITY_ACT],
  }),
  defineQuestion({
    prompt:
      "If a cable run measured on a drawing with a scale of 1:25 is 65 cm, what is the actual length of the cable run:",
    options: ["0.162 m", "1.625 m", "16.25 m", "162.5 m"],
    answerIndex: 2,
    wrongReasons: [
      "0.162 m incorrectly divides the drawing measurement instead of multiplying it by the scale factor.",
      "1.625 m is ten times too short: 65 cm multiplied by 25 is 1625 cm, not 162.5 cm.",
      "162.5 m is ten times too long because 1625 cm converts to 16.25 m.",
    ],
    sourceUrls: [BSI_STANDARDS],
  }),
  defineQuestion({
    prompt:
      "What should be consulted to interpret an otherwise unlabelled rectangle on an electrical drawing?",
    options: [
      "The drawing's symbol legend or key",
      "The equipment price list",
      "The project programme",
      "The operatives' time sheet",
    ],
    answerIndex: 0,
    wrongReasons: [
      "A price list identifies products and costs but does not define the graphical symbols used on this drawing.",
      "A programme maps work to time and contains no authoritative meaning for an electrical symbol.",
      "A time sheet records labour hours and cannot interpret technical drawing notation.",
    ],
    sourceUrls: [BSI_STANDARDS],
  }),
  defineQuestion({
    prompt:
      "A room measures 4.25 metres long, what would it measure on a drawing scaled at 1:20:",
    options: ["0.2125 cm", "21.25 cm", "212.5 cm", "412 mm"],
    answerIndex: 1,
    wrongReasons: [
      "0.2125 is the scaled length in metres, not centimetres; relabelling it as centimetres makes it 100 times too small.",
      "212.5 cm applies the metre-to-centimetre conversion but fails to divide by the 1:20 scale.",
      "412 mm neither equals 4.25 m divided by 20 nor represents the correct scaled length of 212.5 mm.",
    ],
    sourceUrls: [BSI_STANDARDS],
  }),
  defineQuestion({
    prompt:
      "Which diagram uses component symbols and a logical, rather than physical, arrangement to show how a circuit functions from supply to output?",
    options: [
      "Block Diagram",
      "Layout Diagram",
      "Schematic Diagram",
      "Wiring Diagram",
    ],
    answerIndex: 2,
    wrongReasons: [
      "A block diagram shows high-level functional stages but normally omits individual components and their electrical relationships.",
      "A layout diagram emphasises where equipment is physically located rather than how the circuit works logically.",
      "A wiring diagram shows terminals and physical connections useful for installation, not an abstract functional arrangement.",
    ],
    sourceUrls: [BSI_STANDARDS],
  }),
  defineQuestion({
    prompt:
      "Which drawing is normally produced after installation to record what was actually installed, rather than used to construct the new work?",
    options: [
      "As-built drawing",
      "Circuit Diagram",
      "Layout Diagram",
      "Schematic Diagram",
    ],
    answerIndex: 0,
    wrongReasons: [
      "A circuit diagram explains electrical connections but is not necessarily revised to record final routes, locations and departures from design.",
      "A layout may be a pre-construction design drawing; only its updated as-built issue records the work actually installed.",
      "A schematic explains functional relationships and deliberately omits the physical installation detail required in the record.",
    ],
    sourceUrls: [UK_GOV_PROJECT_DELIVERY],
  }),
  defineQuestion({
    prompt: "What is a bill of quantities primarily used for?",
    options: [
      "List of extra work",
      "Pricing and comparing tenders using measured work items",
      "Schedule of rates",
      "Variation order",
    ],
    answerIndex: 1,
    wrongReasons: [
      "Extra work is recorded and valued through variations or dayworks rather than defining the original bill's main purpose.",
      "A schedule of rates gives unit prices but is a different pricing document from measured quantities for the whole tender.",
      "A variation order changes the contracted scope after award; a bill supports initial tender pricing and comparison.",
    ],
    sourceUrls: [GOV_CONSTRUCTION_CONTRACTS],
  }),
  defineQuestion({
    prompt: "In Situ measurements are obtained by:",
    options: [
      "Estimation and approximation",
      "Measuring actual values in position on site",
      "Measuring values to scale",
      "Taking values from drawings",
    ],
    answerIndex: 1,
    wrongReasons: [
      "Estimation supplies an assumed value and is not an actual measurement made in place.",
      "A scaled measurement is derived from a representation and can differ from the constructed condition.",
      "Drawing dimensions are design information; in situ means checking the real item where it is installed.",
    ],
    sourceUrls: [BSI_STANDARDS],
  }),
  defineQuestion({
    prompt: "In this context, what does the term statutory regulation mean?",
    options: [
      "Agreed by BS 7671",
      "Made under legal authority and legally binding",
      "Agreed by the electricity council",
      "Set by a learned body",
    ],
    answerIndex: 1,
    wrongReasons: [
      "BS 7671 is a technical standard and cannot itself make a rule statutory.",
      "An electricity-industry body's agreement may influence practice but does not confer legislative force.",
      "A learned body can publish standards or guidance; those become legal duties only through legislation or another legal mechanism.",
    ],
    sourceUrls: [EAWR],
  }),
  defineQuestion({
    prompt: "What does a 'BS EN' prefix on an equipment standard indicate?",
    options: [
      "British Standards",
      "Electrical installation standards",
      "A European standard adopted as a British Standard",
      "International standards",
    ],
    answerIndex: 2,
    wrongReasons: [
      "A purely national British Standard can use BS alone; EN specifically indicates the European-standard origin.",
      "BS EN standards cover many product and service fields, so the prefix does not mean electrical-installation rules.",
      "An international IEC or ISO adoption normally includes that designation; EN identifies a European standard adopted nationally.",
    ],
    sourceUrls: [BSI_STANDARDS],
  }),
  defineQuestion({
    prompt:
      "When a legal health-and-safety duty is described as absolute, what does that mean?",
    options: [
      "Must be met regardless of costs",
      "Must be met within an agreed time",
      "Must be met within reasonable costs",
      "Requires a risk assessment",
    ],
    answerIndex: 0,
    wrongReasons: [
      "A deadline may be stated separately, but it does not define the standard of an absolute duty.",
      "Balancing measures against reasonable cost describes qualified language such as reasonably practicable, not an absolute requirement.",
      "Risk assessment may help achieve compliance, but performing one does not replace the required result under an absolute duty.",
    ],
    sourceUrls: [HSE_ENFORCEMENT],
  }),
  defineQuestion({
    prompt:
      "Which option is not one of the three overarching principles in the current 'We invest in people' framework?",
    options: ["Leading", "Supporting", "Self-motivation", "Improving"],
    answerIndex: 2,
    wrongReasons: [
      "Leading is one of the framework's three headline principles.",
      "Supporting is one of the headline principles used to organise the performance indicators.",
      "Improving is the third headline principle, covering capability and continuous improvement.",
    ],
    sourceUrls: [INVESTORS_IN_PEOPLE],
  }),
  defineQuestion({
    prompt:
      "Which outcome is not a direct quality-management-system benefit associated with certification to ISO 9001?",
    options: [
      "Equality of pay between men and women",
      "Improved customer loyalty",
      "Increased productivity",
      "Reduced service calls",
    ],
    answerIndex: 0,
    wrongReasons: [
      "Consistent processes and customer focus can improve satisfaction and repeat business.",
      "Process control, defined responsibilities and corrective action can reduce waste and raise productivity.",
      "Improved conformity and root-cause action can reduce defects and associated support or service calls.",
    ],
    sourceUrls: [BSI_ISO_9001],
  }),
  defineQuestion({
    prompt:
      "With regards to the design of the water, central heating, air conditioning and electrical services on a large construction project, who is the person responsible?",
    options: [
      "Building services engineer",
      "Clerk of works",
      "Estimator",
      "Site surveyor",
    ],
    answerIndex: 0,
    wrongReasons: [
      "A clerk of works inspects construction quality against the design rather than coordinating multi-service engineering design.",
      "An estimator prices labour, plant and materials but does not own the technical design of all building services.",
      "A site surveyor measures site conditions and setting-out information rather than designing the integrated mechanical and electrical systems.",
    ],
    sourceUrls: [UK_GOV_PROJECT_DELIVERY],
  }),
  // quiz-29733 (Q5 is the exact semantic duplicate of quiz-29731 Q18)
  defineQuestion({
    prompt:
      "Which statutory regulations lay down the measures which must be taken to ensure the safe installation and use of electrical equipment:",
    options: [
      "Electricity Supply Regulations 1988",
      "Electricity at Work Regulations 1989",
      "Factories Act",
      "IET Wiring Regulations",
    ],
    answerIndex: 1,
    wrongReasons: [
      "Former electricity-supply regulations concerned the public supply network rather than precautions for electrical systems and work activities.",
      "The Factories Act is not the current dedicated statutory instrument governing electrical danger in all workplaces.",
      "The IET Wiring Regulations are an influential technical standard, not statutory regulations enacted as law.",
    ],
    sourceUrls: [EAWR, HSE_ELECTRICITY],
  }),
  defineQuestion({
    prompt:
      "An inspector finds a continuing legal contravention that can be remedied within a specified period and does not create an immediate risk of serious personal injury. Which notice is appropriate?",
    options: [
      "Close the site down immediately",
      "Issue a deferred prohibition notice",
      "Issue a prohibition notice",
      "Issue an improvement notice",
    ],
    answerIndex: 3,
    wrongReasons: [
      "Immediate closure is disproportionate where the contravention can be corrected and there is no serious personal-injury risk requiring prohibition.",
      "A deferred prohibition notice addresses an activity expected to create a serious risk at a later time, not an ordinary remediable breach.",
      "A prohibition notice stops an activity involving a risk of serious personal injury; the scenario expressly removes that condition.",
    ],
    sourceUrls: [HSE_NOTICES],
  }),
  defineQuestion({
    prompt:
      "Which diagram uses component symbols to provide information about a circuit's electrical connections without reproducing the physical installation layout?",
    options: [
      "Block diagram",
      "Circuit diagram",
      "Schematic diagram",
      "Wiring diagram",
    ],
    answerIndex: 1,
    wrongReasons: [
      "A block diagram shows functional sections and signal flow while omitting most individual component connections.",
      "A schematic may emphasise functional operation, but the broad named drawing for symbolic electrical interconnections here is the circuit diagram.",
      "A wiring diagram is intended to aid physical connection and therefore includes terminal or conductor arrangement detail.",
    ],
    sourceUrls: [BSI_STANDARDS],
  }),
  defineQuestion({
    prompt:
      "A location drawing is scaled at 1:50. The route length of a cable run on the drawing is 85mm the length of the cable will be:",
    options: ["17m", "4.25m", "42.5m", "58.9m"],
    answerIndex: 1,
    wrongReasons: [
      "17 m multiplies 85 mm by 200 rather than the stated scale factor of 50.",
      "42.5 m mis-converts 4250 mm by an extra factor of ten; 4250 mm is 4.25 m.",
      "58.9 m does not follow from multiplying the drawing length by the 1:50 scale.",
    ],
    sourceUrls: [BSI_STANDARDS],
  }),
  defineQuestion({
    prompt:
      "The requirements for overload current protection are fulfilled when:",
    options: [
      "Ib = 10A In = 15A Iz = 18A",
      "Ib = 15A In = 20A Iz = 18A",
      "Ib = 2.5A In = 10A Iz = 8A",
      "Ib = 20A In = 15A Iz = 15A",
    ],
    answerIndex: 0,
    wrongReasons: [
      "Here In exceeds Iz, so the 20 A protective device can permit sustained current above the cable's 18 A capacity.",
      "Although the 10 A device exceeds the 2.5 A load, it also exceeds the cable's 8 A current-carrying capacity.",
      "The 15 A device and cable cannot carry the 20 A design current, so Ib ≤ In ≤ Iz is violated at the first comparison.",
    ],
    sourceUrls: [IET_BS_7671],
  }),
  defineQuestion({
    prompt:
      "A heater taking 40A is supplied by a cable 10m long. If the cable has a volt drop of 4mV per ampere per metre, the voltage drop in the cable will be:",
    options: ["0.16 V", "1.6 V", "16 V", "8 V"],
    answerIndex: 1,
    wrongReasons: [
      "0.16 V omits a factor of ten: 4 mV/A/m × 40 A × 10 m equals 1600 mV.",
      "16 V treats the millivolt result as though another factor of ten remained after converting to volts.",
      "8 V does not follow the cable-drop product and is five times the calculated 1.6 V.",
    ],
    sourceUrls: [IET_BS_7671],
  }),
  defineQuestion({
    prompt:
      "Which domestic accessory would you expect to have terminals labelled, N, Loop and S/L:",
    options: ["Ceiling Rose", "Consumer Unit", "Junction Box", "Socket"],
    answerIndex: 0,
    wrongReasons: [
      "A consumer unit uses neutral bars and circuit protective-device terminals rather than a luminaire switched-line terminal marked S/L.",
      "A generic junction box has numbered or purpose-assigned terminals but not the standard loop-in ceiling-rose grouping.",
      "A socket is marked line, neutral and earth; it has no switched-line lighting terminal.",
    ],
    sourceUrls: [IET_BS_7671],
  }),
  defineQuestion({
    prompt:
      "A Motor is connected via a flexible conduit to a starter. The continuity of the protective conductor is maintained by:",
    options: [
      "A separate circuit protective conductor",
      "The flexible conduit provided the conduit boxes are scraped and locknuts are used",
      "The flexible conduit without any further modification",
      "The neutral conductor",
    ],
    answerIndex: 0,
    wrongReasons: [
      "Flexible conduit and scraped boxes do not provide a reliably rated protective path through repeated movement and joints.",
      "Unmodified flexible conduit is not assured to maintain sufficiently low and durable fault-path impedance.",
      "Neutral is a current-carrying live conductor and must not be substituted for the circuit protective conductor.",
    ],
    sourceUrls: [IET_BS_7671],
  }),
  defineQuestion({
    prompt: "Cables not likely to be affected by electrical interference are:",
    options: ["Coaxial", "Fibre-optic", "STPs", "ScTPs"],
    answerIndex: 1,
    wrongReasons: [
      "Coaxial shielding reduces interference, but the metallic conductor can still couple electromagnetic energy and ground-potential effects.",
      "Shielded twisted pairs reject interference well, but they remain conductive copper transmission paths.",
      "Screened cable provides additional rejection yet can still experience electromagnetic coupling and screen-current issues.",
    ],
    sourceUrls: [BSI_STANDARDS],
  }),
  defineQuestion({
    prompt:
      "Where the general BS 5839 alarm-audibility rule applies, what minimum sound level is normally required in accessible areas?",
    options: ["65 dB", "70 dB", "75 dB", "80 dB"],
    answerIndex: 0,
    wrongReasons: [
      "70 dB may be selected to overcome local background noise, but it is not the general minimum stated by this rule.",
      "75 dB is associated with sound at a bedhead where alarms must wake sleeping occupants, not every accessible area.",
      "80 dB is above the general minimum and can create unnecessarily high sound exposure close to sounders.",
    ],
    sourceUrls: [BS_5839],
  }),
  defineQuestion({
    prompt:
      "A heater delivers 172.5 W of useful heat while drawing 2 A from a 230 V supply. What is its efficiency?",
    options: ["0.266", "37.50%", "65.70%", "75%"],
    answerIndex: 1,
    wrongReasons: [
      "0.266 is not the ratio 172.5 W ÷ 460 W and, if written as a decimal efficiency, would mean 26.6%.",
      "65.70% would require about 302 W useful output from the 460 W input, not 172.5 W.",
      "75% would require 345 W useful heat, exactly twice the value stated.",
    ],
    sourceUrls: [IET_BS_7671],
  }),
  defineQuestion({
    prompt:
      "The effect of improving the power factor of a fluorescent lamp circuit is that the current taken from the supply is:",
    options: [
      "Greater in value",
      "Lagging the supply voltage by a larger angle",
      "Smaller in value",
      "Unchanged in value",
    ],
    answerIndex: 2,
    wrongReasons: [
      "For the same real power and voltage, raising power factor reduces rather than increases apparent current.",
      "Improvement reduces the phase angle between current and voltage instead of making current lag further.",
      "Current would remain unchanged only if apparent power stayed fixed; compensation supplies some reactive current locally.",
    ],
    sourceUrls: [IET_BS_7671],
  }),
  defineQuestion({
    prompt:
      "In agricultural premises an rcd may be used for protection against fire providing the operating current does not exceed:",
    options: ["150 mA", "30 mA", "300 mA", "500 mA"],
    answerIndex: 2,
    wrongReasons: [
      "150 mA is below the permitted ceiling but is not the maximum rating requested.",
      "30 mA is used for additional shock protection and may be fitted, but it is not the fire-protection maximum.",
      "500 mA exceeds the 300 mA ceiling and may allow leakage heating too high for this fire-protection measure.",
    ],
    sourceUrls: [IET_BS_7671],
  }),
  defineQuestion({
    prompt:
      "For the specific BS 7671 exception from internal sealing of a qualifying conduit, ducting or trunking system at a fire-separating element, what maximum internal cross-sectional area applies?",
    options: ["700 mm²", "710 mm²", "720 mm²", "750 mm²"],
    answerIndex: 1,
    wrongReasons: [
      "700 mm² is below the threshold but is not the stated maximum value of the exception.",
      "720 mm² exceeds the specified 710 mm² limit and therefore cannot rely on this size condition.",
      "750 mm² exceeds the exception by 40 mm² and requires the normal sealing assessment.",
    ],
    sourceUrls: [IET_BS_7671],
  }),
  defineQuestion({
    prompt:
      "Copper links are used across joints in metallic trunking installations in order to:",
    options: [
      "Increase the strength of the joint",
      "Maintain the electrical continuity of the exposed conductive parts",
      "Provide a temporary fixing before the main bolts are fitted",
      "Reduce corrosion at the joint",
    ],
    answerIndex: 1,
    wrongReasons: [
      "Mechanical fasteners and trunking construction provide joint strength; a flexible copper link is not a structural brace.",
      "A bonding link is fitted as a permanent low-impedance connection, not as an assembly aid removed after bolting.",
      "Copper does not generally prevent dissimilar-metal corrosion; its purpose here is electrical rather than chemical protection.",
    ],
    sourceUrls: [IET_BS_7671],
  }),
  defineQuestion({
    prompt: "The purpose of segregated trunking is to:",
    options: [
      "Allow accommodation of circuits having different voltage bands",
      "Prevent overheating in vertical trunking runs",
      "Prevent the spread of fire within the trunking",
      "Support the cables installed in the trunking",
    ],
    answerIndex: 0,
    wrongReasons: [
      "Vertical-run overheating is controlled by current rating, grouping, ventilation and supports, not by service compartments alone.",
      "Fire stopping is provided where containment penetrates barriers; ordinary segregation is not a longitudinal fire barrier.",
      "The enclosure and cable supports carry the wiring; the divider's defining function is separation of incompatible circuits or services.",
    ],
    sourceUrls: [IET_BS_7671],
  }),
  defineQuestion({
    prompt:
      "PME (Protective Multiple Earthing) is mainly associated with which system of earthing:",
    options: ["IT system", "TN-C-S systems", "TN-S systems", "TT systems"],
    answerIndex: 1,
    wrongReasons: [
      "An IT system has its live conductors isolated from earth or earthed through impedance and does not use a distributor PEN conductor.",
      "TN-S keeps neutral and protective conductors separate throughout and therefore is not the combined PEN arrangement of PME.",
      "A TT installation relies on the consumer's earth electrode rather than a distributor-provided multiple-earthed PEN conductor.",
    ],
    sourceUrls: [ESQCR, IET_BS_7671],
  }),
  defineQuestion({
    prompt:
      "Which of the following is not a method of protection from direct contact (basic protection):",
    options: [
      "Automatic disconnection of supply",
      "Barriers and enclosures",
      "Insulation of live parts",
      "Placing out of reach",
    ],
    answerIndex: 0,
    wrongReasons: [
      "Barriers and enclosures prevent ordinary access to hazardous live parts and are a method of basic protection.",
      "Basic insulation prevents contact with live conductive material during normal service.",
      "Placing live parts out of reach is a recognised protective measure in the restricted conditions where it is permitted.",
    ],
    sourceUrls: [IET_BS_7671],
  }),
  defineQuestion({
    prompt:
      "Where a separate copper supplementary protective bonding conductor is actually required and is not mechanically protected, what minimum cross-sectional area applies?",
    options: ["1.5 mm²", "2.5 mm²", "4.0 mm²", "6.0 mm²"],
    answerIndex: 2,
    wrongReasons: [
      "1.5 mm² is below the minimum allowed for a separate supplementary bonding conductor, even with protection.",
      "2.5 mm² is permitted only when the conductor has suitable mechanical protection.",
      "6.0 mm² may be used but is larger than the minimum required by the stated unprotected condition.",
    ],
    sourceUrls: [IET_BS_7671],
  }),
  defineQuestion({
    prompt:
      "What describes contact with an exposed-conductive-part that has become live because of a fault?",
    options: [
      "Direct contact",
      "Earth contact",
      "Electrical contact",
      "Fault contact (historically called indirect contact)",
    ],
    answerIndex: 3,
    wrongReasons: [
      "Direct contact means touching a live part that is live in normal operation, not metal energised only by a fault.",
      "Earth contact is not the defined BS 7671 term for touching an exposed-conductive-part under fault conditions.",
      "Electrical contact is generic wording and does not distinguish normal live parts from fault-energised exposed metal.",
    ],
    sourceUrls: [IET_BS_7671],
  }),
  defineQuestion({
    prompt:
      "Where a firefighter's switch is to be installed, in order to comply with BS 7671 it must be:",
    options: [
      "No more than 2.75 m from the ground with the off position at the bottom",
      "No more than 2.75 m from the ground with the off position at the top",
      "No more than 3.75 m from the ground with the off position at the bottom",
      "No more than 3.75 m from the ground with the off position at the top",
    ],
    answerIndex: 1,
    wrongReasons: [
      "The height is acceptable, but the operating handle must indicate OFF in the upper position rather than at the bottom.",
      "3.75 m is above the maximum accessible mounting height and this option also reverses the required handle position.",
      "The top OFF position is correct, but the proposed height exceeds 2.75 m.",
    ],
    sourceUrls: [IET_BS_7671],
  }),
  defineQuestion({
    prompt: "Circuit protective conductors are connected between:",
    options: [
      "Exposed and extraneous conductive parts",
      "The main earth terminal and exposed conductive parts",
      "The main earth terminal and extraneous conductive parts",
      "The main earth terminal and the earth rod",
    ],
    answerIndex: 1,
    wrongReasons: [
      "Connections to extraneous-conductive-parts are protective bonding conductors, not the defining circuit protective conductor path.",
      "The main earthing terminal to an extraneous service is a main protective bonding connection.",
      "The main earthing terminal to an electrode is an earthing conductor, not a circuit protective conductor.",
    ],
    sourceUrls: [IET_BS_7671],
  }),
  defineQuestion({
    prompt:
      "Which of the following protective devices is used in domestic plug tops:",
    options: ["BS 1362", "BS 3036", "BS 88", "BS EN 60898"],
    answerIndex: 0,
    wrongReasons: [
      "BS 3036 covers semi-enclosed rewirable fuses used in older distribution equipment, not cartridge links for plugs.",
      "BS 88 fuse systems protect distribution and industrial circuits and are physically different from a domestic plug fuse.",
      "BS EN 60898 applies to circuit-breakers for household and similar installations, not replaceable plug-top fuse links.",
    ],
    sourceUrls: [BSI_PLUG_FUSES],
  }),
  defineQuestion({
    prompt: "Fusing factor is the ratio of:",
    options: [
      "Current rating to fusing current",
      "Fault current to fusing current",
      "Fusing current to current rating",
      "Fusing current to fault current",
    ],
    answerIndex: 2,
    wrongReasons: [
      "This is the reciprocal of fusing factor and would normally produce a value below one.",
      "Fault current affects operating time but is not the denominator used to define the device's fusing factor.",
      "A ratio to the particular circuit fault current would vary by installation and would not characterise the fuse itself.",
    ],
    sourceUrls: [IET_BS_7671],
  }),
  defineQuestion({
    prompt:
      "What is the primary purpose of the high-voltage national electricity transmission network?",
    options: [
      "Transmission of electricity from power stations to factories",
      "Transmission of electricity from power stations to industrial locations",
      "Transmit bulk electricity from generators to grid substations",
      "Transmission of electricity from sub stations to domestic premises",
    ],
    answerIndex: 2,
    wrongReasons: [
      "Factories are supplied through distribution networks or dedicated connections; they are not the national network's sole destination.",
      "Industrial locations are only one consumer class and do not describe the grid's system-wide transfer function.",
      "The final journey from local substations to homes is electricity distribution, not high-voltage national transmission.",
    ],
    sourceUrls: [NATIONAL_GRID_NETWORK, OFGEM_NETWORKS],
  }),
  defineQuestion({
    prompt:
      "Which one of the following types of power stations does not use a fossil fuel to generate electricity:",
    options: ["Coal fired", "Gas fired", "Nuclear", "Oil fired"],
    answerIndex: 2,
    wrongReasons: [
      "Coal is a carbon-rich fossil fuel burned to provide boiler heat.",
      "Natural gas is a fossil fuel burned in turbines or combined-cycle plant.",
      "Oil is a petroleum-derived fossil fuel even when used only for peak or backup generation.",
    ],
    sourceUrls: [GOV_NUCLEAR],
  }),
  defineQuestion({
    prompt:
      "With an AC generator's speed and load conditions otherwise unchanged, what does increasing its field excitation primarily increase?",
    options: [
      "Frequency to increase",
      "The frequency to decrease",
      "The power factor to decrease",
      "Generated terminal voltage",
    ],
    answerIndex: 3,
    wrongReasons: [
      "Frequency is primarily set by rotational speed and pole count, both held unchanged in the question.",
      "Increasing magnetic field strength cannot reduce frequency when rotor speed remains fixed.",
      "Excitation can affect reactive-power sharing and power factor on a connected system, but its primary open-circuit effect is voltage.",
    ],
    sourceUrls: [NATIONAL_GRID_NETWORK],
  }),
  defineQuestion({
    prompt:
      "Which listed electricity-generation system relies on a continuing natural flow of water through a turbine?",
    options: [
      "Grey water recycling",
      "Micro wind",
      "Micro-hydro",
      "Photovoltaic",
    ],
    answerIndex: 2,
    wrongReasons: [
      "Greywater recycling treats and reuses wastewater; any pumps consume electricity rather than generate it from a watercourse.",
      "Micro-wind converts airflow through a rotor and does not require a water head or flow.",
      "Photovoltaics convert light directly in semiconductor cells and contain no water turbine.",
    ],
    sourceUrls: [OFGEM_NETWORKS],
  }),
  defineQuestion({
    prompt:
      "Which listed building-scale reuse system normally needs separate non-potable pipework, treatment or filtration, and storage?",
    options: [
      "Grey water recycling",
      "Micro wind",
      "Micro-hydro",
      "Photovoltaic",
    ],
    answerIndex: 0,
    wrongReasons: [
      "Micro-wind needs a turbine, electrical controls and connection equipment rather than a treated-water storage network.",
      "Micro-hydro uses an intake, turbine and electrical generator but is not an internal building wastewater-reuse service.",
      "PV needs modules and electrical conversion equipment, not separate non-potable plumbing and filtration.",
    ],
    sourceUrls: [GOV_GREYWATER],
  }),
  // quiz-29734 (Q4 and Q26-Q30 are exact semantic duplicates already defined above)
  defineQuestion({
    prompt: "Which statement correctly describes a statutory regulation?",
    options: [
      "Agreed by BS 7671",
      "Made under legal authority and legally binding",
      "Agreed by the electricity council",
      "Set by a learned body",
    ],
    answerIndex: 1,
    wrongReasons: [
      "BS 7671 is a consensus technical standard and does not turn a requirement into legislation merely by agreement.",
      "An electricity-industry council can issue rules or guidance but cannot confer statutory force without legal authority.",
      "A learned body publishes expert standards and codes; those are not automatically legally binding regulations.",
    ],
    sourceUrls: [EAWR],
  }),
  defineQuestion({
    prompt:
      "When a legal health-and-safety duty is described as absolute, what does that mean?",
    options: [
      "Is not compulsory",
      "Must be met regardless of costs",
      "Must be met within an agreed time",
      "Requires a competent electrician to complete",
    ],
    answerIndex: 1,
    wrongReasons: [
      "An absolute legal duty is compulsory; this option states the opposite of the term.",
      "Time limits can attach to any kind of duty and do not define whether compliance is absolute or qualified.",
      "Who performs technical work can be a separate competence requirement, but it does not define the duty's absolute standard.",
    ],
    sourceUrls: [HSE_ENFORCEMENT],
  }),
  defineQuestion({
    prompt: "Which of the following documents is not produced by the client:",
    options: [
      "The order",
      "The specification",
      "The tender",
      "The variation order",
    ],
    answerIndex: 2,
    wrongReasons: [
      "The client issues an order to accept or commission the contractor's work.",
      "The client's specification states the required scope, performance and quality against which bids are prepared.",
      "A variation order is issued on the client or contract-administrator side to change the contracted work.",
    ],
    sourceUrls: [GOV_CONSTRUCTION_CONTRACTS],
  }),
  defineQuestion({
    prompt: "The main purpose of an assembly diagram is:",
    options: [
      "Show how the components fit together",
      "To provide different views of the components",
      "To show the sequence of control",
      "Use symbols to represent circuit components and show their connections",
    ],
    answerIndex: 0,
    wrongReasons: [
      "Individual component views show shape and dimensions but do not explain the relationship of parts in the completed assembly.",
      "The sequence of control is functional information normally shown on a sequence chart or control schematic.",
      "A symbolic connection diagram explains the circuit, whereas an assembly diagram explains physical fit and construction.",
    ],
    sourceUrls: [BSI_STANDARDS],
  }),
  defineQuestion({
    prompt:
      "For the BS 7671 tabulated 0.1 s disconnection condition, what fault current corresponds to a 6 A BS EN 60898 Type B circuit-breaker?",
    options: ["100 A", "125 A", "30 A", "6 A"],
    answerIndex: 2,
    wrongReasons: [
      "100 A is about 16.7 times rating and is not the tabulated five-times-In value for a Type B 6 A device.",
      "125 A is about 20.8 times rating and more closely resembles a high-inrush multiple than this Type B criterion.",
      "6 A is only the device's nominal rating; it is not sufficient to guarantee the specified rapid magnetic operation.",
    ],
    sourceUrls: [IET_BS_7671],
  }),
  defineQuestion({
    prompt: "In the adiabatic equation S = √(I²t) / k, what does I represent?",
    options: [
      "Prospective fault current through the protective conductor",
      "The maximum demand current of the installation",
      "Current rating of the protective device",
      "Normal running current",
    ],
    answerIndex: 0,
    wrongReasons: [
      "Maximum demand sizes normal supply capacity but does not represent the short-circuit energy the protective conductor must withstand.",
      "The device rating influences selection, but the adiabatic heating term uses the actual prospective fault-current value and clearing time.",
      "Normal running current should not flow in a circuit protective conductor and is far below the fault current assessed by this equation.",
    ],
    sourceUrls: [IET_BS_7671],
  }),
  defineQuestion({
    prompt: "A warning notice must be fixed to all:",
    options: [
      "Class II equipment",
      "Electric motors having a rating exceeding 0.37 kW",
      "Equipment operating in excess of 230V and where such voltage would not normally be expected",
      "Switchgear which cannot normally be observed by the operator",
    ],
    answerIndex: 2,
    wrongReasons: [
      "Class II construction is identified by its double-insulation symbol; it does not automatically require this unexpected-voltage warning.",
      "Motor power rating alone does not create the notice condition described in the question.",
      "Remote or unobserved switchgear may need position indication or interlocking, but that is a different hazard from an unexpected voltage above 230 V.",
    ],
    sourceUrls: [IET_BS_7671],
  }),
  defineQuestion({
    prompt: "Non-metallic conduit must only be used within suitable ranges of:",
    options: [
      "Ambient temperatures",
      "Humidity",
      "Load currents",
      "Supply voltages",
    ],
    answerIndex: 0,
    wrongReasons: [
      "Humidity may affect the complete installation, but ordinary conduit suitability is not expressed as an electrical humidity range in this choice set.",
      "Load current determines cable heating and size; conduit itself carries no normal circuit current.",
      "Voltage rating applies chiefly to cable insulation and system separation, while conduit performance is limited by environmental temperature.",
    ],
    sourceUrls: [IET_BS_7671],
  }),
  defineQuestion({
    prompt:
      "Highest frequency data transmission rates can be achieved by the use of:",
    options: ["Coaxial", "Fibre-optic", "STPs", "ScTPs"],
    answerIndex: 1,
    wrongReasons: [
      "Coaxial cable has useful bandwidth, but conductor loss and electromagnetic constraints limit it below modern optical links.",
      "Shielded twisted-pair copper reduces interference yet has substantially lower bandwidth-distance capability than optical fibre.",
      "Screened cable remains a metallic transmission medium and does not match optical carrier bandwidth or immunity.",
    ],
    sourceUrls: [BSI_STANDARDS],
  }),
  defineQuestion({
    prompt:
      "What duration range is commonly used for battery-powered emergency escape lighting, depending on the premises and evacuation strategy?",
    options: [
      "0.5 to 1 hour",
      "0.5 to 2 hours",
      "1 to 2 hours",
      "1 to 3 hours",
    ],
    answerIndex: 3,
    wrongReasons: [
      "A half-hour minimum is too short for the common one-hour minimum-duration emergency-lighting classifications.",
      "This range again begins below the usual one-hour minimum and omits the widely specified three-hour duration.",
      "Some premises use one or two hours, but the standard common range extends to three hours where immediate evacuation cannot be assured.",
    ],
    sourceUrls: [GOV_FIRE_SAFETY],
  }),
  defineQuestion({
    prompt: "Direct acting space heaters:",
    options: [
      "Are cost efficient",
      "Give out heat at a steady rate",
      "Operate on the storage principle",
      "Respond immediately to temperature fluctuations",
    ],
    answerIndex: 3,
    wrongReasons: [
      "Direct electrical resistance heating can have high running cost, so cost efficiency is not its defining characteristic.",
      "Thermostatic control cycles the heater with demand rather than guaranteeing a constant heat-output rate.",
      "Storage heaters charge a thermal mass for later release; direct acting heaters emit heat while energised.",
    ],
    sourceUrls: [GOV_FIRE_SAFETY],
  }),
  defineQuestion({
    prompt: "What does the luminous efficacy of a lighting system measure?",
    options: [
      "Efficiency",
      "Lamp characteristics",
      "Likeness to natural sunlight",
      "Luminous flux in lumens per watt of input power",
    ],
    answerIndex: 3,
    wrongReasons: [
      "Efficiency alone is a dimensionless energy ratio and does not state the photometric weighting used for luminous efficacy.",
      "Lamp characteristics include colour, life and control behaviour; the requested measure is one specific light-output ratio.",
      "Similarity to daylight is described by colour-rendering and colour-temperature properties, not lumens per watt.",
    ],
    sourceUrls: [BSI_STANDARDS],
  }),
  defineQuestion({
    prompt:
      "Protection against objects greater than 1mm diameter has an IP classification of:",
    options: ["IP2X", "IP3X", "IP4X", "IP6X"],
    answerIndex: 2,
    wrongReasons: [
      "IP2X protects against access with a finger and objects of about 12.5 mm, not the 1 mm probe level.",
      "IP3X addresses objects of 2.5 mm and larger, so it does not meet the finer 1 mm requirement.",
      "IP6X means dust-tight protection, which is much more stringent than the specified 1 mm solid-object level.",
    ],
    sourceUrls: [IEC_IP_CODE],
  }),
  defineQuestion({
    prompt:
      "Under the IET On-Site Guide fallback method for cable or trunking sizes not covered by its factor tables, what maximum trunking space factor is used?",
    options: ["0.4", "30%", "35%", "45%"],
    answerIndex: 3,
    wrongReasons: [
      "0.4 means 40%, which is below but not equal to the stated fallback maximum.",
      "30% is more conservative than the On-Site Guide fallback and therefore is not its maximum space factor.",
      "35% likewise understates the stated usable cross-sectional proportion.",
    ],
    sourceUrls: [IET_ON_SITE_GUIDE],
  }),
  defineQuestion({
    prompt: "Which of the following are standard sizes of conduit:",
    options: [
      "16mm 20mm 30mm",
      "20mm 25mm 16mm",
      "25mm 22mm 16mm",
      "30mm 25mm 20mm",
    ],
    answerIndex: 1,
    wrongReasons: [
      "This set includes 30 mm, which is not one of the normal metric conduit sizes listed here.",
      "22 mm is a common copper-pipe size rather than the standard electrical-conduit size in this sequence.",
      "This set again substitutes non-standard 30 mm for the standard 16 mm size.",
    ],
    sourceUrls: [IET_ON_SITE_GUIDE],
  }),
  defineQuestion({
    prompt: "Inspection type conduit accessories are used to:",
    options: [
      "Facilitate access to the conduit",
      "Facilitate the drawing in of cables into the conduit",
      "Strengthen the conduit",
      "Support the conduit",
    ],
    answerIndex: 1,
    wrongReasons: [
      "The removable cover provides access, but its installation purpose is specifically to create a draw-in point for conductors.",
      "An inspection fitting interrupts rather than reinforces a conduit run and is not a structural strengthening member.",
      "Conduit saddles and clips support the run; an inspection elbow, tee or box provides cable-drawing access.",
    ],
    sourceUrls: [IET_ON_SITE_GUIDE],
  }),
  defineQuestion({
    prompt:
      "Which listed metal conduit provides the best corrosion resistance for a frequently washed dairy environment?",
    options: [
      "Black-enamelled steel conduit",
      "PVC conduit",
      "Stainless-steel conduit",
      "Twin-and-cpc cable",
    ],
    answerIndex: 2,
    wrongReasons: [
      "Black enamel can be chipped and ordinary steel then corrodes under moisture and aggressive dairy-cleaning conditions.",
      "PVC can resist corrosion but is not a metal conduit, which the question expressly asks the learner to select.",
      "Twin-and-cpc is a cable type, not a conduit system, and offers no mechanical containment suitable for this environment.",
    ],
    sourceUrls: [IET_BS_7671],
  }),
  defineQuestion({
    prompt:
      "At the intake position, the earthed neutral of a distributor's supply is connected through which listed item?",
    options: ["Circuit breaker", "Fuse", "Single-pole switch", "Solid link"],
    answerIndex: 3,
    wrongReasons: [
      "A circuit-breaker in the neutral alone could disconnect it while line remained energised and create dangerous voltage displacement.",
      "Fusing the neutral can leave the installation apparently dead-ended but still connected to live conductors if that fuse opens first.",
      "A single-pole neutral switch could interrupt the reference and protective function while failing to isolate line conductors.",
    ],
    sourceUrls: [ESQCR, IET_BS_7671],
  }),
  defineQuestion({
    prompt: "The main purpose of equipotential bonding is to:",
    options: [
      "Improve the earth loop impedance",
      "Increase the impedance of the earth return",
      "Maintain adjacent metalwork at the same electrical potential",
      "Prevent earth faults",
    ],
    answerIndex: 2,
    wrongReasons: [
      "Bonding can alter a fault path, but its defining safety purpose is limiting potential difference between simultaneously accessible parts.",
      "Increasing return impedance would slow protective-device operation and increase touch voltage, the opposite of a safe design aim.",
      "Bonding does not stop insulation from failing; it reduces the shock consequence if a fault energises exposed metal.",
    ],
    sourceUrls: [IET_BS_7671],
  }),
  defineQuestion({
    prompt:
      "Where an incoming metallic gas pipe is an extraneous-conductive-part and main protective bonding is required, where should the connection normally be made?",
    options: [
      "300mm of the meter on the consumers side",
      "300mm of the meter on the supply side",
      "Within 600 mm of the meter outlet on the consumer's side, before branch pipework where practicable",
      "600mm of the meter on the supply side",
    ],
    answerIndex: 2,
    wrongReasons: [
      "The prescribed normal distance is within 600 mm, so restricting the answer to 300 mm is not the stated requirement.",
      "The supplier side is not under the consumer's installation control and bonding there can bridge equipment or meter arrangements improperly.",
      "Although 600 mm is the correct distance, the connection must be on the consumer's side rather than the incoming supply side.",
    ],
    sourceUrls: [IET_BS_7671],
  }),
  defineQuestion({
    prompt:
      "When distributor data is unavailable, what typical maximum Ze design value is commonly assumed for a public TN-S supply up to 100 A?",
    options: ["0.37 Ω", "0.8 Ω", "200 Ω", "21 Ω"],
    answerIndex: 1,
    wrongReasons: [
      "0.37 Ω is the conventional TN-C-S design value, not the higher TN-S assumption asked for.",
      "200 Ω is associated with an upper TT electrode guideline and is far too high for a distributor TN-S earth path.",
      "21 Ω is the historic distributor electrode value sometimes discussed for neutral earthing, not the consumer's TN-S Ze assumption.",
    ],
    sourceUrls: [IET_BS_7671],
  }),
  defineQuestion({
    prompt:
      "BS 7671 allows a number of devices to be used as isolators. One device which can NOT be used for this purpose is:",
    options: [
      "Double pole switch",
      "Firefighters switch",
      "Semi-conductor device",
      "TP+N switch disconnector",
    ],
    answerIndex: 2,
    wrongReasons: [
      "A suitably rated double-pole mechanical switch can disconnect all live conductors of a single-phase circuit for isolation.",
      "A compliant firefighter's switch is a mechanical switching device specifically intended to isolate relevant high-voltage signage equipment.",
      "A TP+N switch-disconnector provides defined mechanical contact separation across the required live conductors.",
    ],
    sourceUrls: [IET_BS_7671],
  }),
  defineQuestion({
    prompt:
      "Which RCD designation identifies a deliberately time-delayed device used to provide selectivity?",
    options: ["Type A", "Type F", "Type B", "Type S"],
    answerIndex: 3,
    wrongReasons: [
      "Type A describes sensitivity to sinusoidal AC and pulsating DC residual currents, not a selective delay.",
      "Type F extends residual-current waveform and frequency response for certain single-phase electronic loads; it is not the delay designation.",
      "Type B covers a still wider set including smooth DC residual current and likewise does not mean time-delayed.",
    ],
    sourceUrls: [IET_BS_7671],
  }),
  defineQuestion({
    prompt:
      "Which of the following circuit breakers would be most suitable for use with circuits feeding large transformers:",
    options: ["Type A", "Type B", "Type C", "Type D"],
    answerIndex: 3,
    wrongReasons: [
      "Type A is not a standard BS EN 60898 instantaneous characteristic for this transformer-inrush selection.",
      "Type B trips magnetically at a low current multiple and is prone to nuisance operation on large transformer energisation inrush.",
      "Type C tolerates moderate inrush, but Type D's higher instantaneous threshold is intended for very high-inrush loads such as large transformers.",
    ],
    sourceUrls: [IET_BS_7671],
  }),
] as const;
