import type { ExamChoice } from "../exams/types";
import type { ExamQuestionCorrection } from "./types";

// Reviewed 2026-08-28. Keep each stem, answer and its three distractor reasons
// together so the web corrections and semantic rationale keys cannot diverge.
// Q6 and Q30 retain the separately reviewed conductor-resistance calculations.
const sources = {
  prefixes: "https://www.nist.gov/pml/owm/metric-si-prefixes",
  maintenance: "https://www.hse.gov.uk/pubns/priced/hsg107.pdf",
  patFAQ: "https://www.hse.gov.uk/electricity/faq-portable-appliance-testing.htm",
  eawr: "https://www.hse.gov.uk/pubns/priced/hsr25.pdf",
  construction: "https://www.hse.gov.uk/pubns/books/hsg141.htm",
  probes: "https://www.hse.gov.uk/pubns/gs38.htm",
  lowRisk: "https://www.hse.gov.uk/pubns/indg236.htm",
  productSafety: "https://www.gov.uk/government/publications/electrical-equipment-safety-regulations-2016/electrical-equipment-safety-regulations-2016-great-britain",
  fifthEdition: "https://electrical.theiet.org/wiring-matters/years/2020/81-july-2020/the-all-new-5th-edition-of-the-iet-code-of-practice-for-in-service-inspection-and-testing-of-electrical-equipment/",
  intervals: "https://electrical.theiet.org/wiring-matters/years/2021/84-march-2021/the-all-new-5th-edition-of-the-iet-code-of-practice-for-in-service-inspection-and-testing-of-electrical-equipment/",
  earthContinuity: "https://electrical.theiet.org/media/1658/in-service-inspection-and-testing-of-electrical-equipment-the-earth-continuity-test.pdf",
  surgeTesting: "https://www.seaward.com/gb/support/pat-testing/283a936-supernova-elite/faqs-and-articles/135-how-to-test-surge-protected-equipment/",
  // PrimeTest 100 manual, printed pp. 8 and 19: IET 5th-edition 5/5 mA
  // versus BS EN 50699 3.5/0.5 mA. Do not mix the two sets of limits.
  testerManual: "https://www.seaward.com/gb/support/pat-testing/344a910-primetest-100/specifications-and-manuals/265-primetest-100-manual/",
  tester: "https://www.seaward.com/gb/products/pat-testing/pat-testers/403a910-primetest-250-plus/",
  loadTesting: "https://www.fluke.com/en-gb/product/electrical-testing/portable-appliance-testers/fluke-6500-2",
  shutdown: "https://support.apple.com/guide/mac-help/shut-down-or-restart-your-mac-mchlp2522/mac",
  filters: "https://moen.nidec.com/en/drives/news-and-media/blog/technical/articles/2015/09/25/earth-leakage-in-variable-speed-drives",
  selv: "https://www.se.com/in/en/faqs/FA253330/",
  equipmentClasses: "https://ansell-lighting.com/en/articles/technical/what-does-the-term-electrical-class-mean-and-how-will-it-provide-protection-against-electrical-shock",
  plugs: "https://www.electricalsafetyfirst.org.uk/safety-advice/home-and-people/house-maintenance/plugs-and-fuses/",
  flexRatings: "https://www.doncastercables.com/technical-help/9",
  // These are the actual current downloadable IET forms, not inferred form numbers.
  instrumentForm: "https://electrical.theiet.org/media/2492/iet_test_instrument_record_form_v6.pdf",
  inspectionForm: "https://electrical.theiet.org/media/2491/iet_visual_inpsection_test_record_form_v2.pdf",
  forms: "https://electrical.theiet.org/courses-resources-and-career-for-electrical-professionals/forms-and-downloads/",
  ipCodes: "https://new.abb.com/docs/librariesprovider22/technical-documentation/pilot-devices_catalogue_2011-09_revb.pdf?sfvrsn=b284fa18_2",
  contracts: "https://commonslibrary.parliament.uk/research-briefings/sn02239/",
  statutoryRights: "https://www.gov.uk/unfair-terms-in-sales-contracts/implied-rights",
} as const;

type ReviewedQuestion = {
  number: number;
  originalPrompt: string;
  prompt: string;
  options: Record<ExamChoice, string>;
  explanation: string;
  sourceUrls: readonly string[];
} & {
  [Answer in ExamChoice]: {
    answer: Answer;
    rationales: Record<Exclude<ExamChoice, Answer>, string>;
  };
}[ExamChoice];

const reviewedQuestions: readonly ReviewedQuestion[] = [
  {
    number: 1,
    originalPrompt: "10 mA converted to amperes is",
    prompt: "What is 10 mA expressed in amperes?",
    options: { A: "0.001 A", B: "0.01 A", C: "0.1 A", D: "0.0001 A" },
    answer: "B",
    explanation:
      "The prefix milli means one thousandth, so 1 A = 1000 mA. Convert milliamperes to amperes by dividing by 1000: 10 mA ÷ 1000 = 0.01 A. Check by converting back: 0.01 A × 1000 = 10 mA.",
    rationales: {
      A: "0.001 A × 1000 = 1 mA. This is ten times smaller than 10 mA; dividing 10 by 1000 gives 0.01 A.",
      C: "0.1 A × 1000 = 100 mA. This is ten times larger than 10 mA; the decimal point must move three places when converting mA to A.",
      D: "0.0001 A × 1000 = 0.1 mA. This is one hundred times smaller than 10 mA, so the decimal point has been moved too far.",
    },
    sourceUrls: [sources.prefixes],
  },
  {
    number: 2,
    originalPrompt: "When carrying out a low or high current test, in both cases the protective conductor test should be made between accessible conductive paths and",
    prompt: "For an unplugged Class I appliance, a protective-conductor continuity test connects the accessible metal parts that require earthing to which point?",
    options: { A: "The main earth terminal", B: "The neutral conductor", C: "Any supplementary bond", D: "The earth pin of the plug" },
    answer: "D",
    explanation:
      "Measure between the plug's earth pin and each accessible conductive part that must be protectively earthed. This checks the complete appliance earth path, including the flex, terminations and internal earth connections. A low resistance confirms continuity along that path; the installation's earthing is assessed separately.",
    rationales: {
      A: "The installation's main earthing terminal belongs to the fixed wiring. Using it would include paths outside the unplugged appliance and would not isolate the appliance earth-path measurement.",
      B: "Neutral is a current-carrying supply conductor, not the appliance's protective-earth connection. A case-to-neutral measurement cannot verify continuity to the plug's earth pin.",
      C: "Supplementary bonding connects conductive parts in an installation where required. It is not the supply-end termination of this appliance's protective conductor.",
    },
    sourceUrls: [sources.earthContinuity, sources.testerManual],
  },
  {
    number: 3,
    originalPrompt: "What test voltage is recommended when carrying out an insulation resistance test where surge protection devices are incorporated in the equipment?",
    prompt: "Where the manufacturer permits a reduced-voltage insulation test on surge-protected equipment, which test voltage is normally used?",
    options: { A: "500 V d.c.", B: "500 V a.c.", C: "250 V d.c.", D: "250 V a.c." },
    answer: "C",
    explanation:
      "Use the reduced 250 V d.c. insulation-test setting where suitable for the equipment. At 500 V, a surge protector may conduct, producing an artificially low insulation reading or risking damage. Follow the manufacturer's instructions; if an insulation test is unsuitable, an appropriate leakage-current test may be needed.",
    rationales: {
      A: "A 500 V d.c. test can make the surge-suppression components conduct. The resulting low reading may describe the protector's operation rather than failed insulation.",
      B: "Routine PAT insulation-resistance testing uses a d.c. test voltage. A 500 V a.c. test is neither the reduced setting nor the specified insulation-resistance method.",
      D: "The reduced voltage is 250 V d.c., not a.c. Alternating voltage introduces capacitive current and does not give the same insulation-resistance measurement.",
    },
    sourceUrls: [sources.surgeTesting, sources.testerManual],
  },
  {
    number: 4,
    originalPrompt: "Which regulations place a legal requirement on a landlord, who provides electrical equipment as part of a tenancy, to ensure that it is safe when first supplied?",
    prompt: "Which listed regulations set product-safety requirements for new 230 V electrical equipment placed on the market in Great Britain?",
    options: { A: "WEEE regulations", B: "The Housing Act 2004", C: "BS 7671", D: "The Electrical Equipment (Safety) Regulations 2016" },
    answer: "D",
    explanation:
      "The Electrical Equipment (Safety) Regulations 2016 cover the safety of electrical products within their voltage range, including ordinary 230 V appliances, when made available on the market. They impose obligations on manufacturers, importers and distributors. These product-supply duties should not be confused with a landlord's separate ongoing property-maintenance duties.",
    rationales: {
      A: "WEEE rules concern waste electrical equipment, including collection, treatment and recovery. They are not the product-safety requirements for placing a new mains appliance on the market.",
      B: "The Housing Act addresses housing conditions and enforcement. It is not the specific product-safety regime for manufacturers and distributors supplying new 230 V electrical equipment.",
      C: "BS 7671 is the wiring standard for electrical installations. It is not the statutory product-supply regulation governing a new appliance's construction and market availability.",
    },
    sourceUrls: [sources.productSafety],
  },
  {
    number: 5,
    originalPrompt: "The health and safety executive provide guidance documents on maintaining electrical equipment. What publication provides guidance on electrical safety on construction sites?",
    prompt: "Which HSE publication specifically covers electrical safety on construction sites?",
    options: { A: "GS38", B: "INDG236", C: "HSG141", D: "HSG107" },
    answer: "C",
    explanation:
      "HSG141 is Electrical safety on construction sites. It covers planning and managing electrical risks during construction, including temporary supplies, equipment selection and precautions for the harsh site environment. Remember the publication by its purpose, not just its number.",
    rationales: {
      A: "GS38 covers electrical test equipment used on low-voltage systems, including safe probes and test leads. It is not the construction-site electrical-safety guide.",
      B: "INDG236 concerns maintaining portable electrical equipment in low-risk environments. Construction work presents harsher conditions and is specifically addressed by HSG141.",
      D: "HSG107 gives general guidance on maintaining portable electrical equipment. HSG141 is the publication dedicated to electrical systems and work on construction sites.",
    },
    sourceUrls: [sources.construction, sources.probes, sources.lowRisk, sources.maintenance],
  },
  {
    number: 7,
    originalPrompt: "What is the frequency of testing for a mobile class 1 item of equipment used in commercial kitchens",
    prompt: "How should the inspection-and-testing interval for Class I equipment used in a commercial kitchen be determined?",
    options: { A: "Every 12 months in all cases", B: "Every month in all cases", C: "Every 3 months in all cases", D: "By a risk assessment; there is no universal fixed interval" },
    answer: "D",
    explanation:
      "Set the interval from the equipment's use, environment, manufacturer's advice and previous defects. Heat, moisture, cleaning and repeated movement can increase a kitchen appliance's risk. Review the interval using the inspection history: the absence of a universal calendar period does not mean the equipment can be left unmaintained.",
    rationales: {
      A: "An annual interval may miss damage that develops quickly around water, heat or frequent handling. A calendar year is not automatically suitable for every kitchen appliance.",
      B: "Monthly instrument testing is not a universal requirement. The assessment may call for frequent user checks without needing the same frequency of combined electrical testing.",
      C: "Three months can only be justified by the actual risk and maintenance history. The kitchen location alone does not prescribe one fixed interval for every item.",
    },
    sourceUrls: [sources.intervals, sources.patFAQ],
  },
  {
    number: 8,
    originalPrompt: "A load test is particularly useful for",
    prompt: "For which listed category can a load test help reveal a failed resistive heating element by comparing operating power with the nameplate rating?",
    options: { A: "Central-heating control wiring", B: "Domestic lighting", C: "IT equipment", D: "Heating equipment" },
    answer: "D",
    explanation:
      "A heater with a failed element may still switch on but draw less power than expected. For a resistive 2 kW heater at 230 V, I = P ÷ V = 2000 ÷ 230 ≈ 8.7 A. Comparing measured current or power with its operating setting and rating helps reveal a missing heating stage; it does not replace the electrical-safety tests.",
    rationales: {
      A: "Control wiring operates thermostats, valves or relays. Its continuity and control functions do not establish whether a mains heater is drawing the expected element power.",
      B: "Lighting load can also be measured, but that assesses lamps and drivers rather than a resistive heating element's output. The missing-element example concerns heating equipment.",
      C: "IT equipment has variable electronic loads, so a nameplate-versus-current comparison alone is not a test of data processing or a diagnostic for a failed heater element.",
    },
    sourceUrls: [sources.loadTesting],
  },
  {
    number: 9,
    originalPrompt: "What causes high protective conductor currents in equipment such as variable speed drive which incorporates an EMC filter?",
    prompt: "Which EMC-filter components provide a normal leakage-current path from the live conductors to protective earth in a variable-speed drive?",
    options: { A: "Capacitors connected between the live conductors and earth", B: "The length of the CPC cable", C: "The choke wired in series with line", D: "The choke wired in series with neutral" },
    answer: "A",
    explanation:
      "The filter's line-to-earth capacitors divert high-frequency interference to earth. Capacitors also pass alternating current at the supply frequency, so protective-conductor current can flow without an insulation fault. For a simple capacitor, I = 2πfCV: greater capacitance or frequency increases the current. This is a designed current path, not a reason to disconnect protective earth.",
    rationales: {
      B: "CPC length affects the earth path's resistance, but does not itself create the filter's connection from live conductors to earth. The relevant path is through the filter capacitors.",
      C: "A series line choke impedes interference along the line conductor. It is not a deliberate shunt connection between line and protective earth.",
      D: "A series neutral choke impedes interference along neutral. Its series winding is not the capacitor path that carries normal filter current to earth.",
    },
    sourceUrls: [sources.filters],
  },
  {
    number: 10,
    originalPrompt: "When tested separately, a 2 core lead set is tested as a",
    prompt: "When tested separately, a correctly constructed two-core mains lead set without a protective-earth conductor is tested using which equipment-class approach?",
    options: { A: "Class 0 appliance", B: "Class I appliance", C: "Class III appliance", D: "Class II appliance" },
    answer: "D",
    explanation:
      "The two cores are line and neutral: there is no protective-earth conductor to test. Use the Class II approach, checking the lead's condition, insulation and conductor connections/polarity as applicable, but not protective-conductor continuity. The lead relies on its insulation and must not be used to supply equipment that requires an earth.",
    rationales: {
      A: "Class 0 relies on basic insulation without a protective earth or the additional insulation protection of Class II. A properly constructed Class II lead is not Class 0 simply because it has two cores.",
      B: "Class I relies on a protective-earth connection. A two-core line-and-neutral lead has no third conductor, so a Class I earth-continuity test cannot verify a path that is absent.",
      C: "Class III protection depends on an appropriate separated extra-low-voltage supply. A two-core mains lead still carries mains voltage; the number of cores does not make it Class III.",
    },
    sourceUrls: [sources.equipmentClasses, sources.testerManual],
  },
  {
    number: 11,
    originalPrompt: "A method of reducing the risk of electric shock under fault conditions is to use SELV equipment, this method",
    prompt: "Which statement describes the load-side earthing arrangement of a SELV circuit?",
    options: { A: "A centre-tapped transformer secondary has its centre connected to earth", B: "It operates at 110 V a.c.", C: "It has no intentional connection to earth on the load side", D: "It requires an earth connection on the load side" },
    answer: "C",
    explanation:
      "SELV combines extra-low voltage with protective separation from higher-voltage circuits and earth. Its load-side circuit has no intentional earth connection. Earthing an extra-low-voltage circuit changes the protective arrangement to PELV where its other requirements are met; a 110 V centre-tapped site supply is reduced low voltage, not SELV.",
    rationales: {
      A: "An earthed centre tap is characteristic of a reduced-low-voltage site supply, such as 55-0-55 V. That earth reference is incompatible with the earth-free SELV load-side arrangement.",
      B: "110 V a.c. is above the ordinary extra-low-voltage a.c. band. A 110 V site transformer reduces voltage to earth, but does not create a SELV circuit.",
      D: "SELV deliberately separates the load-side circuit from earth. An intentional earth connection belongs to a different protective arrangement, such as PELV, subject to its requirements.",
    },
    sourceUrls: [sources.selv, sources.eawr],
  },
  {
    number: 12,
    originalPrompt: "A person who is not skilled in electrical work, but is classed as competent to carry out inspection and testing of electrical equipment, is known as being competent to which level?",
    prompt: "In HSE HSG107's two-level testing-competence framework, which level covers a trained person using a simple pass/fail tester without interpreting numerical readings?",
    options: { A: "Level 1", B: "Level 4", C: "Level 2", D: "Level 3" },
    answer: "A",
    explanation:
      "HSG107 paragraph 50 calls this Level 1: the person follows defined procedures and acceptance criteria using a simple pass/fail instrument. Level 2 requires electrical skills to interpret readings from a more sophisticated tester. These are HSE's task-competence levels, not qualification levels or an interchangeable numbering scheme from another publication.",
    rationales: {
      B: "HSG107 describes two testing-competence levels, not four. A Level 4 label cannot identify the simple pass/fail role in that framework.",
      C: "HSG107 Level 2 involves electrical skills and interpretation of measured readings. That is a different responsibility from following a defined pass/fail procedure without numerical interpretation.",
      D: "Level 3 may describe a qualification or a category in another scheme, but HSG107's testing framework has only Levels 1 and 2. Its simple pass/fail role is Level 1.",
    },
    sourceUrls: [sources.maintenance],
  },
  {
    number: 13,
    originalPrompt: "What is not considered to be a factor when considering a risk based assessment when determining the initial frequency of inspection and testing?",
    prompt: "Which item is a fixed-installation test result, rather than one of HSE's listed equipment-use or maintenance-history factors for setting inspection intervals?",
    options: { A: "The environment", B: "Previous records", C: "The fixed-wiring RCD trip time", D: "Frequency of use" },
    answer: "C",
    explanation:
      "An RCD trip time is a measurement of a protective device in the fixed installation. HSE's equipment risk factors include working environment, frequency of use and previous maintenance findings. RCD provision can affect overall safety, but a trip-time reading by itself does not determine how often an appliance's flex, plug and enclosure need checking.",
    rationales: {
      A: "Water, heat, dust and mechanical damage can accelerate deterioration or increase shock risk. The working environment therefore directly informs an equipment inspection interval.",
      B: "Previous defect and repair records show how quickly this equipment deteriorates in actual use. Repeated faults can justify shortening the interval.",
      D: "Frequent use and handling put more strain on leads, plugs and moving parts. Frequency of use is one of the practical factors used to assess inspection needs.",
    },
    sourceUrls: [sources.maintenance, sources.intervals],
  },
  {
    number: 14,
    originalPrompt: "According to the Code of Practice which basic requirement demonstrates that a maintenance regime for electrical appliances exists within an organisation?",
    prompt: "Which evidence best demonstrates an organisation's continuing electrical-equipment inspection and maintenance regime?",
    options: { A: "Records of inspections, tests and resulting actions", B: "Invoices from the inspection-and-testing contractor", C: "PAT stickers on all appliances", D: "A Kitemark logo on the company letterhead" },
    answer: "A",
    explanation:
      "Dated records linked to equipment IDs show what was checked, the findings and how defects were dealt with. That history supports decisions about repairs and future intervals. HSE does not impose a universal legal requirement to keep PAT labels or records, but records are useful evidence that a maintenance system is actually operating.",
    rationales: {
      B: "An invoice proves that work was billed. Without equipment IDs, findings and remedial actions it does not show which appliances were checked or how defects were resolved.",
      C: "A sticker usually provides only a status or date. It cannot replace the underlying findings and repair history, and a sticker does not guarantee the appliance remains safe after later damage.",
      D: "A logo on stationery identifies a mark or claimed certification, not the inspection history of the organisation's appliances. It records no equipment-specific findings or repairs.",
    },
    sourceUrls: [sources.patFAQ, sources.inspectionForm],
  },
  {
    number: 15,
    originalPrompt: "Extension leads that are longer than the recommended lengths should be protected by a",
    prompt: "When an RCD is used to provide additional protection against electric shock for a long extension lead, which listed device is suitable for that purpose?",
    options: { A: "Double-pole switch", B: "BS 3036 fuse", C: "300 mA RCD", D: "30 mA RCD" },
    answer: "D",
    explanation:
      "A 30 mA RCD provides additional protection by detecting an imbalance between outgoing and returning current and disconnecting the supply. A long lead increases earth-path impedance, so appropriate fault protection matters. The RCD does not remove the need to check lead length, conductor rating, voltage drop, earthing and overload protection.",
    rationales: {
      A: "A double-pole switch provides manual switching or isolation. It does not detect residual current or automatically disconnect when current leaks through an unintended path.",
      B: "A BS 3036 fuse is an overcurrent device, not a 30 mA residual-current device. Shock-level leakage may be far below the current needed to operate the fuse promptly.",
      C: "300 mA is ten times 30 mA. It is not the sensitivity specified for additional personal protection against electric shock, even though it may serve other protective purposes.",
    },
    sourceUrls: [sources.eawr, sources.plugs],
  },
  {
    number: 16,
    originalPrompt: "Equipment, in which protection against electric shock relies upon basic insulation only, is the definition of construction classification",
    prompt: "Which construction class relies on basic insulation alone, without protective earthing or double/reinforced insulation?",
    options: { A: "Class I", B: "Class 0", C: "Class III", D: "Class II" },
    answer: "B",
    explanation:
      "Class 0 provides basic insulation but no protective-earth connection or additional insulation protection. If that basic insulation fails, accessible metal can become live without the protective arrangements used by Class I or Class II. It must not be confused with Class II equipment simply because both can lack a protective-earth conductor.",
    rationales: {
      A: "Class I adds protective earthing of exposed conductive parts to basic insulation. That earth-fault path is the extra protective measure missing from Class 0.",
      C: "Class III relies on an appropriate separated extra-low-voltage supply for shock protection. It is not defined as mains equipment with basic insulation alone.",
      D: "Class II uses double or reinforced insulation. Its protection goes beyond the single basic-insulation layer described here, even though it does not rely on protective earthing.",
    },
    sourceUrls: [sources.equipmentClasses, sources.selv],
  },
  {
    number: 17,
    originalPrompt: "A 2m length of flex with a csa of 0.75mm squared which has a rewireable plug top has a maximum fuse rating of",
    prompt: "A 500 W resistive appliance operates at 230 V through a rewireable plug and 0.75 mm² flex rated at 6 A. With no special manufacturer requirement, which usual BS 1362 plug fuse is appropriate?",
    options: { A: "6 A", B: "10 A", C: "13 A", D: "3 A" },
    answer: "D",
    explanation:
      "First calculate the operating current: I = P ÷ V = 500 ÷ 230 ≈ 2.17 A. The usual 3 A plug fuse accommodates that load and is appropriate for this low-power appliance. The flex's 6 A current-carrying capacity is not a plug-fuse recommendation; do not confuse the cable rating with the fuse rating. Follow a specific manufacturer requirement where one is provided.",
    rationales: {
      A: "6 A is the stated current-carrying capacity of the flex. It is not the appropriate usual plug-fuse selection for a load drawing only about 2.17 A.",
      B: "A 10 A fuse is unnecessarily high for the 2.17 A load and above the flex's stated 6 A rating. The normal 3 A choice fits the supplied operating conditions.",
      C: "A 13 A fuse is the other common plug-fuse size, but it is not appropriate for this 500 W appliance and 6 A-rated flex. A plug's 13 A marking does not mean every appliance needs a 13 A fuse.",
    },
    sourceUrls: [sources.plugs, sources.flexRatings],
  },
  {
    number: 18,
    originalPrompt: "The sample test instrument record sheet provided in the Code of Practice requires certain details to be kept about the instruments used. These details include",
    prompt: "Which identifying fields appear on the IET downloadable Form V.6 test instrument record?",
    options: {
      A: "Instrument manufacturer, model, serial number and next calibration date",
      B: "Instrument type, model, serial number and last calibration date",
      C: "Instrument manufacturer, model, serial number and last calibration date",
      D: "Instrument type, model, serial number and next calibration date",
    },
    answer: "B",
    explanation:
      "Form V.6 asks for the instrument's type, model, serial number and last calibration date. The serial number identifies the individual instrument, while the calibration date and subsequent check entries help establish the reliability of its readings. A future calibration due date is useful management information, but it is not the field printed on this form.",
    rationales: {
      A: "This substitutes manufacturer for the form's type field and next calibration for last calibration. It therefore changes two of the actual Form V.6 headings.",
      C: "Manufacturer can be useful additional information, but Form V.6 labels the first field Type, not Manufacturer. The remaining three entries do match the printed fields.",
      D: "The identification fields match, but the form records the last calibration date. A next-due date does not establish when the instrument was last calibrated.",
    },
    sourceUrls: [sources.instrumentForm],
  },
  {
    number: 19,
    originalPrompt: "Why must business equipment be powered down prior to disconnecting from the supply when undertaking formal inspection?",
    prompt: "Why should computer equipment be shut down normally, with the user's agreement, before its mains supply is disconnected for inspection?",
    options: { A: "Fibre-optic data cables will be safe to disconnect", B: "To avoid losing unsaved data or interrupting writes", C: "Monitors will discharge more quickly", D: "To eliminate static electricity" },
    answer: "B",
    explanation:
      "Abruptly removing power can lose unsaved work or interrupt disk and database writes. Agree the interruption, let the user save work and shut the system down normally before isolating it. A normal shutdown protects data; it is not proof that internal capacitors have discharged or that equipment is safe to dismantle.",
    rationales: {
      A: "Powering down a computer does not establish the optical safety of every fibre link, whose source may be elsewhere. The reason for an orderly shutdown here is to protect the computer's data.",
      C: "A normal shutdown does not guarantee that a monitor's stored electrical energy has dissipated. Capacitor discharge times and servicing precautions depend on its design.",
      D: "Shutdown does not eliminate static charge from people, surfaces or components. Electrostatic-discharge precautions are separate from saving work and completing data writes.",
    },
    sourceUrls: [sources.shutdown, sources.maintenance],
  },
  {
    number: 20,
    originalPrompt: "A toaster is generally classified as",
    prompt: "What did the 5th edition of the IET Code of Practice change about equipment categories such as portable, stationary and fixed?",
    options: {
      A: "It made the equipment's weight the sole basis for testing",
      B: "It excluded domestic appliances such as toasters used at work",
      C: "It required all portable items to be tested every year",
      D: "It removed those categories from the inspection-and-testing approach",
    },
    answer: "D",
    explanation:
      "The 5th edition removed the portable, stationary, fixed and moveable categories and focuses on equipment's safety in continued use. A workplace toaster still needs maintenance suited to its actual risks, such as heat damage, contamination and flex wear. Calling it portable neither fixes its test interval nor removes it from the maintenance regime.",
    rationales: {
      A: "Weight alone says nothing about damaged insulation, moisture, overheating or frequency of handling. It is not the sole basis for selecting electrical maintenance.",
      B: "A domestic-style appliance used at work remains electrical equipment in service. A toaster is not excluded merely because its design is also common in homes.",
      C: "The 5th-edition approach uses risk and maintenance history rather than a universal annual test rule. Being movable does not by itself determine the testing interval.",
    },
    sourceUrls: [sources.fifthEdition, sources.intervals],
  },
  {
    number: 21,
    originalPrompt: "Which would not be carried out on Class II equipment?",
    prompt: "Which test is not applicable to Class II equipment with no protective-earth connection?",
    options: { A: "Polarity check of the supply lead, where applicable", B: "Functional check", C: "Protective-conductor continuity test", D: "Insulation-resistance test, where suitable" },
    answer: "C",
    explanation:
      "Class II protection uses double or reinforced insulation and does not rely on a protective-earth conductor. There is therefore no protective-earth path whose continuity must be proved. Inspection and appropriate insulation or leakage checks still matter, as do correct lead connections and safe operation; a functional-earth connection is not a Class I protective earth.",
    rationales: {
      A: "Correct supply-lead connections remain relevant even without protective earth. A two-core lead can still have an open circuit, short circuit or incorrect line/neutral connection where polarity matters.",
      B: "A functional check can reveal faulty switches or abnormal operation. Double insulation does not guarantee that the appliance operates correctly or safely.",
      D: "The integrity of insulation is central to Class II protection. An appropriate insulation-resistance test can be relevant, subject to the equipment's design and the manufacturer's test instructions.",
    },
    sourceUrls: [sources.maintenance, sources.testerManual],
  },
  {
    number: 22,
    originalPrompt: "Some aspects of a fixed installation, when noticed, should be recorded or discussed with the owner of the property. Which of these should not lead to a tester’s recommendation that the installation itself should be inspected or reviewed?",
    prompt: "Which observation, on its own, identifies an older wiring-colour convention rather than a defect or a shortfall in a protective measure?",
    options: { A: "Limited or no RCD protection", B: "Damaged or overheated socket-outlets", C: "No adequate means of earthing", D: "Red and black cores in otherwise sound fixed wiring" },
    answer: "D",
    explanation:
      "Red and black identify the older line and neutral colour convention. Colour alone does not establish that insulation or connections have deteriorated. Damage, inadequate earthing and potentially insufficient RCD protection warrant appropriate investigation; old colours do not excuse those defects, but are not themselves proof of a dangerous installation.",
    rationales: {
      A: "RCD provision is a protective-measure issue, not a colour convention. Its adequacy needs assessment against the circuits, use and applicable requirements; absence alone does not identify a particular EICR code.",
      B: "Cracking, burning or overheating is physical evidence of possible damage or a poor connection. It should be reported and assessed, irrespective of the conductor colours.",
      C: "Without adequate earthing, fault current may not have the path needed for protective disconnection. This is a safety issue requiring action, not merely evidence of older wiring.",
    },
    sourceUrls: [sources.plugs, sources.eawr],
  },
  {
    number: 23,
    originalPrompt: "When performance testing an RCD, the test should be done using",
    prompt: "For a trip-time test at 1 × IΔn on a 30 mA RCD, what residual test current is applied?",
    options: { A: "30 mA", B: "100 mA", C: "150 mA", D: "300 mA" },
    answer: "A",
    explanation:
      "IΔn is the RCD's rated residual operating current. At 1 × IΔn, the test current is 1 × 30 mA = 30 mA. A 150 mA setting would be 5 × IΔn, not 1 ×. Select the correct test method and waveform for the RCD type; 30 mA is not a universal test current for every RCD rating.",
    rationales: {
      B: "100 ÷ 30 ≈ 3.33, so 100 mA is approximately 3.33 × this RCD's rating. It would be 1 × only for a 100 mA RCD.",
      C: "150 mA = 5 × 30 mA. This is a five-times-rated-current setting, not the specified 1 × IΔn test.",
      D: "300 mA = 10 × 30 mA. Applying it would test at ten times this RCD's rating rather than at its rated residual current.",
    },
    sourceUrls: [sources.tester],
  },
  {
    number: 24,
    originalPrompt: "Which class of equipment is NOT acceptable in the UK?",
    prompt: "Which equipment construction class lacks fault protection beyond basic insulation and is not acceptable for ordinary mains-appliance use in the UK?",
    options: { A: "Class 0", B: "Class I", C: "Class II", D: "Class III" },
    answer: "A",
    explanation:
      "Class 0 has basic insulation but no protective-earth connection or double/reinforced insulation. A failure of its basic insulation can leave accessible metal live without an adequate fault-protection measure. Do not treat a Class 0 item as Class II just because it has a two-core lead; the construction must provide the required protection.",
    rationales: {
      B: "Class I provides protective earthing in addition to basic insulation. Correctly constructed, connected and maintained Class I equipment is a normal acceptable equipment class.",
      C: "Class II obtains fault protection from double or reinforced insulation. Its absence of a protective-earth conductor is intentional and does not make it Class 0.",
      D: "Class III relies on the appropriate separated extra-low-voltage supply. It is a recognised protective construction class, not an item intended for direct connection to mains without a suitable supply.",
    },
    sourceUrls: [sources.equipmentClasses, sources.selv],
  },
  {
    number: 25,
    originalPrompt: "The dimensions of the conductors in an extension lead affect the resistance of the lead. Which of these correctly describes two conditions when resistance would reduce?",
    prompt: "For the same conductor material and temperature, which two dimensional changes both reduce an extension lead conductor's resistance?",
    options: { A: "Increase in length and increase in diameter", B: "Increase in diameter and reduction in length", C: "Increase in length and reduction in diameter", D: "Reduction in length and reduction in diameter" },
    answer: "B",
    explanation:
      "Use R = ρL/A, where ρ is resistivity, L is length and A is cross-sectional area. Shortening the conductor reduces L; increasing its diameter increases A, so both changes reduce R. Since A = πd²/4, doubling diameter gives four times the area and one quarter of the resistance at unchanged length.",
    rationales: {
      A: "Greater length raises resistance, while greater diameter lowers it. The two changes oppose each other, so the final resistance depends on how much each dimension changes.",
      C: "Greater length raises L and smaller diameter reduces A in R = ρL/A. Both changes increase resistance rather than reducing it.",
      D: "Shorter length lowers resistance, but smaller diameter raises it. These changes oppose each other; neither guarantees that their combined effect will reduce resistance.",
    },
    sourceUrls: [sources.earthContinuity],
  },
  {
    number: 26,
    originalPrompt: "A severe electric shock occur under fault free conditions if the body is placed between",
    prompt: "Even without an equipment insulation fault, touching which two points can expose a person to mains voltage and a severe electric shock?",
    options: { A: "A socket earth pin and a correctly earthed Class I case", B: "Two conductors at the same potential", C: "A live line conductor and earth", D: "Two correctly earthed exposed conductive parts" },
    answer: "C",
    explanation:
      "A live line conductor is at a dangerous voltage relative to earth. Contact with both can complete a current path through the body even when the equipment itself has no insulation fault. Shock depends on the voltage difference and the body's current path; protective measures must prevent this contact, not rely on a person tolerating it.",
    rationales: {
      A: "With the protective-earth connections intact, the earth pin and earthed case are at approximately the same potential. A dangerous difference here would indicate an additional fault or abnormal condition.",
      B: "Two points at the same potential have no voltage difference to drive current through the body between them. Contact with a third point at another potential would be a different situation.",
      D: "Correct earthing is intended to keep these exposed parts at substantially the same potential in normal conditions. The stated severe-shock path is instead between line and earth.",
    },
    sourceUrls: [sources.eawr],
  },
  {
    number: 27,
    originalPrompt: "The electricity at work regulations is only one item of legislation which refers to electrical equipment used at work. The voltages covered by this legislation",
    prompt: "What voltage range is covered by the Electricity at Work Regulations 1989?",
    options: {
      A: "Only voltages above 230 V",
      B: "Only voltages up to 1000 V a.c. or 2500 V d.c.",
      C: "All voltages, from battery equipment to high-voltage transmission systems",
      D: "Only voltages below 600 V a.c. or 900 V d.c. to earth",
    },
    answer: "C",
    explanation:
      "HSE's guidance states that the Regulations specify neither an upper nor a lower voltage limit. They can apply to battery-powered workplace equipment as well as high-voltage transmission equipment. Low voltage does not eliminate every electrical danger: batteries can still cause burns, short-circuit heating or ignition. A 400 kV example is not a statutory upper limit.",
    rationales: {
      A: "A 230 V threshold would exclude ordinary 230 V workplace equipment and lower-voltage hazards. The Regulations do not set that lower boundary.",
      B: "These numerical limits are not limits on the Electricity at Work Regulations. The duties also cover high-voltage systems beyond the low-voltage equipment range.",
      D: "These conductor-to-earth figures do not define the Regulations' scope. Electrical danger at higher voltages is also covered, rather than being exempt above those numbers.",
    },
    sourceUrls: [sources.eawr],
  },
  {
    number: 28,
    originalPrompt: "Which of these does not describe a category of inspection and testing, referred to in the Code of Practice?",
    prompt: "Which statement about routine user checks and formal inspection/testing is incorrect?",
    options: {
      A: "Combined inspection and testing can produce a record of findings and measured results",
      B: "Every routine user check must be recorded, even when no fault is found",
      C: "Users should check equipment for visible damage and report faults promptly",
      D: "A formal visual inspection can be recorded without electrical test results",
    },
    answer: "B",
    explanation:
      "User checks, formal visual inspections and combined inspection/testing serve different purposes. Routine user checks do not normally need a written record when nothing is wrong; faults must be reported and unsafe equipment taken out of use. Formal inspection and test records help manage maintenance. An organisation may choose extra logging, but it is not a universal PAT requirement.",
    rationales: {
      A: "A combined inspection and test checks condition and obtains appropriate electrical measurements. Recording those findings is useful maintenance evidence, not a demand to log every routine user check.",
      C: "Spotting and reporting damaged plugs, leads or enclosures is the purpose of a user check. Reporting a fault differs from writing an entry every time equipment appears sound.",
      D: "A formal visual inspection assesses visible condition without necessarily taking electrical measurements. Its findings can be recorded even when there are no measured test values.",
    },
    sourceUrls: [sources.maintenance, sources.patFAQ, sources.inspectionForm],
  },
  {
    number: 29,
    originalPrompt: "If it is required to carry out a touch current test the recorded value should not exceed",
    prompt: "Using the IET Code of Practice 5th-edition general touch-current benchmark, with no stricter product-specific limit, what is the maximum value?",
    options: { A: "0.25 mA", B: "0.5 mA", C: "3.5 mA", D: "5 mA" },
    answer: "D",
    explanation:
      "The IET 5th-edition general benchmark is 5 mA. Do not mix it with the BS EN 50699 touch-current limit of 0.5 mA: the Seaward manual lists these as different selectable test frameworks. A stricter product standard or manufacturer requirement takes precedence. The answer depends on the specified framework, not simply on whether the appliance uses a.c. or d.c.",
    rationales: {
      A: "0.25 mA is one twentieth of 5 mA. It would be a stricter criterion, but it is not the IET 5th-edition general touch-current benchmark specified here.",
      B: "0.5 mA is the BS EN 50699 touch-current limit listed in the tester manual. Selecting that different framework does not change the stated IET 5th-edition benchmark to 0.5 mA.",
      C: "3.5 mA is the BS EN 50699 protective-conductor-current limit listed in the manual. It is neither that framework's touch-current limit nor the IET general 5 mA benchmark.",
    },
    sourceUrls: [sources.testerManual],
  },
  {
    number: 31,
    originalPrompt: "The IP code for equipment which provides protection against a solid foreign object of 12.5mm diameter or more and protection against spraying water is represented by which IP code?",
    prompt: "Which IP code means protection against solid objects 12.5 mm in diameter or larger, and against spraying water up to 60° from vertical?",
    options: { A: "IP21", B: "IP52", C: "IP14", D: "IP23" },
    answer: "D",
    explanation:
      "Read the two digits separately. The first digit, 2, denotes protection against solid objects of 12.5 mm or larger. The second digit, 3, denotes protection against water sprayed up to 60° either side of vertical. Combining them gives IP23; the water digit does not describe the solid-object size.",
    rationales: {
      A: "IP21 has the required first digit 2, but water digit 1 covers vertically falling drops. It does not specify the spraying-water protection represented by digit 3.",
      B: "IP52 has first digit 5 for dust protection. Its water digit 2 concerns dripping with the enclosure tilted, not the spraying-water condition represented by digit 3.",
      C: "IP14 has first digit 1, corresponding to solid objects of 50 mm or larger, so it does not provide the stated 12.5 mm protection. Its water digit 4 describes splashing rather than the specified digit 3.",
    },
    sourceUrls: [sources.ipCodes],
  },
  {
    number: 32,
    originalPrompt: "Which Code of Practice model form could be used to record a formal visual and combined inspection and test record?",
    prompt: "Which downloadable IET model form records a formal visual inspection and a combined inspection and test of electrical equipment?",
    options: { A: "Form V.4", B: "Form V.2", C: "Form V.3", D: "Form V.1" },
    answer: "B",
    explanation:
      "Form V.2 is the equipment formal visual and combined inspection-and-test record. It links the equipment's identity to condition checks, electrical test results, assessment and recommended intervals. Form V.1 is the equipment register, V.3 provides equipment labels, and V.4 is the equipment repair register; these serve different record-keeping purposes.",
    rationales: {
      A: "Form V.4 is the equipment repair register. It tracks repairs rather than providing the complete formal visual inspection and combined test record.",
      C: "Form V.3 supplies equipment labels. A label can communicate status, but it does not hold the detailed inspection findings and measurements recorded on V.2.",
      D: "Form V.1 is the equipment register: an inventory identifying the equipment. The detailed formal visual and combined test record is V.2.",
    },
    sourceUrls: [sources.inspectionForm, sources.forms],
  },
  {
    number: 33,
    originalPrompt: "Which legal document requires that electrical equipment supplied under contract is of satisfactory quality?",
    prompt: "Which listed Act implies a satisfactory-quality term when a business hires electrical equipment to another business?",
    options: {
      A: "The Health and Safety at Work etc. Act 1974",
      B: "The Supply of Machinery (Safety) Regulations 2008",
      C: "The Supply of Goods and Services Act 1982",
      D: "The Electrical Equipment (Safety) Regulations 2016",
    },
    answer: "C",
    explanation:
      "The Supply of Goods and Services Act 1982 covers the implied satisfactory-quality term for goods hired in the course of business. This is a contractual quality obligation, distinct from electrical product-safety rules. The business-to-business hire context matters: consumer contracts are generally governed by the Consumer Rights Act 2015, so one Act should not be presented as covering every supply contract.",
    rationales: {
      A: "The 1974 Act establishes health-and-safety duties, including duties relevant to equipment at work. It is not the listed source of this implied contractual quality term for hired goods.",
      B: "The machinery regulations concern machinery product-safety requirements. They do not provide the general satisfactory-quality term in a business equipment-hire contract.",
      D: "The 2016 regulations set electrical product-safety requirements. Product compliance and the implied quality terms of a hire contract are separate obligations.",
    },
    sourceUrls: [sources.contracts, sources.statutoryRights],
  },
  {
    number: 34,
    originalPrompt: "The minimum cross sectional area of an appliance flex for a portable socket outlet protected by a 13 A plugtop fuse is",
    prompt: "Using the tabulated current ratings for PVC flexible cord, which listed cross-sectional area is the smallest rated to carry 13 A for an extension lead?",
    options: { A: "0.75 mm²", B: "1.25 mm²", C: "2.5 mm²", D: "4 mm²" },
    answer: "B",
    explanation:
      "The table rates 0.75 mm² flex at 6 A and 1.25 mm² flex at 13 A, so 1.25 mm² is the smallest listed size meeting 13 A. The listed larger sizes also carry 13 A but are not the minimum. Actual lead selection must additionally consider length, voltage drop, temperature, installation conditions and manufacturer instructions.",
    rationales: {
      A: "0.75 mm² is rated at 6 A in this table. Since 6 A is below the stated 13 A load, it does not meet the required current-carrying capacity.",
      C: "2.5 mm² is rated above 13 A, so it can meet the current requirement. It is not the smallest listed size: 1.25 mm² already has a 13 A tabulated rating.",
      D: "4 mm² exceeds the cross-sectional area needed for 13 A on the stated table. A larger size may be justified by other design conditions, but not by this minimum-current-rating comparison alone.",
    },
    sourceUrls: [sources.flexRatings],
  },
  {
    number: 35,
    originalPrompt: "What tolerance is given in excess of the resistance of the protective conductor when measuring the earth continuity of an appliance with a supply cable?",
    prompt: "When calculating the earth-continuity acceptance limit for a Class I appliance, what allowance is normally added to the supply lead's protective-conductor resistance?",
    options: { A: "0.1 Ω", B: "0.2 Ω", C: "0.01 Ω", D: "0.02 Ω" },
    answer: "A",
    explanation:
      "Add 0.1 Ω for the appliance's internal earth path and connections: Rlimit = Rlead + 0.1 Ω. For the 4.5 m lead in Q6, Rlead = 0.08775 Ω, giving Rlimit = 0.08775 + 0.1 = 0.18775 Ω. The allowance is added once, not per metre; it is not part of the conductor-only resistance calculation.",
    rationales: {
      B: "Adding 0.2 Ω doubles the stated allowance and would permit an extra 0.1 Ω above this criterion. It is not the specified internal-path and connection allowance.",
      C: "0.01 Ω is only one tenth of the 0.1 Ω allowance. It would impose a stricter limit and does not reproduce the Rlead + 0.1 Ω criterion.",
      D: "0.02 Ω is one fifth of the required 0.1 Ω allowance. Adding it would not give the earth-continuity limit for this test method.",
    },
    sourceUrls: [sources.earthContinuity],
  },
];

export const patTestingHomeworkCorrections: readonly ExamQuestionCorrection[] =
  reviewedQuestions.map((question) => ({
    examId: "pat-testing",
    variantId: "portable-appliance-testing-homework",
    questionNumber: question.number,
    promptSuffix: question.originalPrompt,
    correctedPromptSuffix: question.prompt,
    options: question.options,
    answer: question.answer,
    explanation: question.explanation,
  }));

export const patTestingHomeworkRationales = reviewedQuestions.map((question) => ({
  prompt: question.prompt,
  options: Object.values(question.options),
  answer: question.options[question.answer],
  rationales: Object.fromEntries(
    Object.entries(question.rationales).map(([choice, rationale]) => [
      question.options[choice as ExamChoice],
      rationale,
    ]),
  ),
  sourceUrls: question.sourceUrls,
}));
