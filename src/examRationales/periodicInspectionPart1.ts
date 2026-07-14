import periodicInspectionData from "../exam-data/periodic-inspection.json";
import { applyExamExplanationEnhancements } from "../examExplanationEnhancements";
import type { Exam, ExamChoice, ExamQuestion } from "../exams/types";

const IET_CURRENT_EDITION =
  "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/ensure-you-are-up-to-date-with-bs-7671/";
const IET_GN3 =
  "https://shop.theiet.org/guidance-note-3-inspection-testing-10th-edition";
const IET_MODEL_FORMS =
  "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/model-forms/";
const IET_A4_EICR =
  "https://electrical.theiet.org/media/jp2fl3ia/bs7671_eicr_a4.pdf";
const IET_RCD_TESTING =
  "https://electrical.theiet.org/wiring-matters/years/2022/91-july-2022/changes-to-rcd-testing-in-bs-76712018plusa22022/";
const IET_INSPECTION_FAQ =
  "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/";
const IET_EARTHING_FAQ =
  "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/earthing-and-bonding-faqs/";
const IET_TT_EARTHING =
  "https://electrical.theiet.org/wiring-matters/years/2021/87-september-2021/tt-earthing-considerations/";
const IET_RING_TESTING =
  "https://electrical.theiet.org/wiring-matters/years/2022/89-march-2022/resistance-readings-for-step-3-of-the-ring-final-circuit-test/";
const IET_EV_GUIDANCE =
  "https://electrical.theiet.org/wiring-matters/years/2023/97-september-2023/fifth-edition-of-the-iet-code-of-practice-for-electric-vehicle-charging-equipment-installation/";
const ESF_BPG4 =
  "https://www.electricalsafetyfirst.org.uk/media/nhjengmh/best_practice-guide-4_issue-73.pdf";
const ESF_WIRING_HELP =
  "https://www.electricalsafetyfirst.org.uk/resources-for-electricians/wiring-regulations-help/";
const HSE_EAWR = "https://www.legislation.gov.uk/uksi/1989/635/contents/made";
const HSE_HSG85 = "https://www.hse.gov.uk/pubns/priced/hsg85.pdf";
const HSE_GS38 = "https://www.hse.gov.uk/pubns/books/gs38.htm";
const GOV_RENTED_SECTOR =
  "https://www.gov.uk/government/publications/electrical-safety-standards-in-the-private-and-social-rented-sectors-guidance/electrical-safety-standards-in-the-private-and-social-rented-sectors-guidance";

const CHOICES: readonly ExamChoice[] = ["A", "B", "C", "D"];
const enhancedPeriodicInspection = applyExamExplanationEnhancements(
  periodicInspectionData as unknown as Exam,
);

type ReviewedScope = {
  sectionId: string;
  variantId: string;
  questionNumber: number;
  promptSuffix: string;
};

const SCOPES: readonly ReviewedScope[] = [
  {
    sectionId: "section-1",
    variantId: "v1",
    questionNumber: 1,
    promptSuffix:
      "If an EICR for a rented dwelling identifies a C1 or C2 item, or requires further investigation, the landlord under the 2020 private rented sector electrical safety duties must normally arrange the required remedial or investigative work within:",
  },
  {
    sectionId: "section-1",
    variantId: "v1",
    questionNumber: 2,
    promptSuffix:
      "Periodic inspection of a school is being planned. The installation is heavily used and contains kitchens, science labs and ICT rooms. The most defensible interval choice is:",
  },
  {
    sectionId: "section-1",
    variantId: "v1",
    questionNumber: 3,
    promptSuffix:
      'A landlord asks you to "just issue a pass certificate" for a flat. You are allowed access only to the consumer unit, hallway socket and kitchen. Bedrooms, bathroom, loft and built-in appliances are inaccessible. What is the best response?',
  },
  {
    sectionId: "section-1",
    variantId: "v1",
    questionNumber: 4,
    promptSuffix:
      'A new radial socket circuit was installed two weeks ago by an unknown person. No Electrical Installation Certificate is available. The client asks you to "certify it retrospectively" during an EICR. What is the correct approach?',
  },
  {
    sectionId: "section-1",
    variantId: "v2",
    questionNumber: 1,
    promptSuffix:
      "An owner-occupied flat is up for sale. The buyer asks whether the existing 8-year-old EICR is still valid. The most accurate response is:",
  },
  {
    sectionId: "section-1",
    variantId: "v2",
    questionNumber: 2,
    promptSuffix:
      "A landlord re-lets a privately rented house in England. The previous EICR is dated 4 years and 11 months ago and was satisfactory. Under ESS PRS Regs 2020 the landlord must:",
  },
  {
    sectionId: "section-1",
    variantId: "v2",
    questionNumber: 3,
    promptSuffix:
      "A small office unit on a business park, last EICR 5 years ago and Satisfactory. Recommended interval for the next inspection is:",
  },
  {
    sectionId: "section-1",
    variantId: "v2",
    questionNumber: 4,
    promptSuffix:
      "A working farm with milking parlour, grain store and farmhouse — recommended interval for the agricultural buildings:",
  },
  {
    sectionId: "section-1",
    variantId: "v2",
    questionNumber: 5,
    promptSuffix:
      "A theatre stage installation: recommended IET maximum interval:",
  },
  {
    sectionId: "section-1",
    variantId: "v2",
    questionNumber: 6,
    promptSuffix:
      "A construction site has its temporary supply panel and 110 V transformer in continuous use. The recommended periodic inspection interval is:",
  },
  {
    sectionId: "section-1",
    variantId: "v2",
    questionNumber: 7,
    promptSuffix:
      "Marina and inland-navigation berths: recommended IET maximum interval:",
  },
  {
    sectionId: "section-1",
    variantId: "v2",
    questionNumber: 8,
    promptSuffix:
      "A privately rented HMO has been refurbished. The contractor wants to know whether they need an EIC, an EICR, or both:",
  },
  {
    sectionId: "section-1",
    variantId: "v2",
    questionNumber: 9,
    promptSuffix:
      "Following an electric shock incident on the premises, the recommended action regarding the periodic inspection interval is:",
  },
  {
    sectionId: "section-1",
    variantId: "v2",
    questionNumber: 10,
    promptSuffix: "GN3 Table 3.2 intervals are best understood as:",
  },
  {
    sectionId: "section-1",
    variantId: "v2",
    questionNumber: 11,
    promptSuffix:
      "A converted barn now used as a small commercial bakery. Previous use was domestic. The change of use means:",
  },
  {
    sectionId: "section-1",
    variantId: "v2",
    questionNumber: 12,
    promptSuffix:
      "BS 7671 Reg 651.1 lists the objectives of periodic inspection and testing. Which of these is NOT one of them?",
  },
  {
    sectionId: "section-1",
    variantId: "v2",
    questionNumber: 13,
    promptSuffix:
      "A privately rented dwelling has a C2 observation on its EICR. The landlord must complete remedial work within:",
  },
  {
    sectionId: "section-1",
    variantId: "v2",
    questionNumber: 14,
    promptSuffix:
      "A church hall with infrequent occasional use — typical IET-recommended interval:",
  },
  {
    sectionId: "section-1",
    variantId: "v2",
    questionNumber: 15,
    promptSuffix:
      "A holiday-let static caravan is excluded from the rented-sector regulations. Which current IET starting point applies to the caravan's own electrical installation?",
  },
  {
    sectionId: "section-1",
    variantId: "v2",
    questionNumber: 16,
    promptSuffix:
      "Periodic inspection in the workplace is principally driven by which legislation?",
  },
  {
    sectionId: "section-1",
    variantId: "v2",
    questionNumber: 17,
    promptSuffix:
      "A small dental practice on the high street (commercial use, public access). Reasonable starting interval for the next EICR:",
  },
  {
    sectionId: "section-1",
    variantId: "v2",
    questionNumber: 18,
    promptSuffix:
      "A periodic inspection for an industrial unit reveals significant deterioration that suggests the previous interval was too long. The most defensible response for the future interval is:",
  },
  {
    sectionId: "section-1",
    variantId: "v2",
    questionNumber: 19,
    promptSuffix:
      "An EICR for a dwelling covered by ESS PRS 2020 contains an FI observation. What is the landlord's duty?",
  },
  {
    sectionId: "section-1",
    variantId: "v2",
    questionNumber: 20,
    promptSuffix:
      "The IET-recommended interval is fundamentally a starting point because:",
  },
  {
    sectionId: "section-1",
    variantId: "v3",
    questionNumber: 1,
    promptSuffix:
      "A rental caravan unit (the caravan itself, not the pitch supply) — recommended IET periodic inspection interval:",
  },
  {
    sectionId: "section-1",
    variantId: "v3",
    questionNumber: 2,
    promptSuffix:
      "A garden centre with outdoor display lighting and a heated greenhouse. Best fit for the recommended interval:",
  },
  {
    sectionId: "section-1",
    variantId: "v3",
    questionNumber: 3,
    promptSuffix:
      "A privately rented HMO in England. Statutory maximum EICR interval under ESS PRS Regs 2020:",
  },
  {
    sectionId: "section-1",
    variantId: "v3",
    questionNumber: 4,
    promptSuffix:
      "A school building containing classrooms, kitchen, a science lab and a small swimming pool. The pool zone interval:",
  },
  {
    sectionId: "section-1",
    variantId: "v3",
    questionNumber: 5,
    promptSuffix:
      "Following a flood, the most appropriate response regarding the EICR cycle is:",
  },
  {
    sectionId: "section-1",
    variantId: "v3",
    questionNumber: 6,
    promptSuffix:
      "An office occupies a unit on a business park. The previous EICR is 4 years old and Satisfactory. The duty holder is asked whether they can extend the interval to 7 years to save cost. The most defensible response is:",
  },
  {
    sectionId: "section-1",
    variantId: "v3",
    questionNumber: 7,
    promptSuffix:
      "BS 7671 651.1 objectives include 'protection against damage to property by fire and heat'. In an EICR context this typically means checking:",
  },
  {
    sectionId: "section-1",
    variantId: "v3",
    questionNumber: 8,
    promptSuffix:
      "A privately rented home in England has been let. The previous EICR is 6 years old. Under ESS PRS Regs 2020 the landlord:",
  },
  {
    sectionId: "section-1",
    variantId: "v3",
    questionNumber: 9,
    promptSuffix:
      "Periodic inspection of an installation owned by a self-employed sole trader operating from a home workshop:",
  },
  {
    sectionId: "section-1",
    variantId: "v3",
    questionNumber: 10,
    promptSuffix:
      "Petrol filling station forecourt with HV CHP generation: recommended interval for the LV installation:",
  },
  {
    sectionId: "section-1",
    variantId: "v3",
    questionNumber: 11,
    promptSuffix:
      "An EICR is being scoped for a hotel that was last inspected 4 years ago. There is a swimming pool, a kitchen, and standard guest rooms. The most defensible interval recommendation for the next cycle is:",
  },
  {
    sectionId: "section-1",
    variantId: "v3",
    questionNumber: 12,
    promptSuffix: "Recommended GN3 inspection interval for a fish farm:",
  },
  {
    sectionId: "section-1",
    variantId: "v3",
    questionNumber: 13,
    promptSuffix:
      "An EICR is Unsatisfactory because of a single C2 observation. The duty holder under EAWR has to:",
  },
  {
    sectionId: "section-1",
    variantId: "v3",
    questionNumber: 14,
    promptSuffix: "Building Regulations Part P applies to:",
  },
  {
    sectionId: "section-1",
    variantId: "v3",
    questionNumber: 15,
    promptSuffix:
      "A shop in a commercial parade has reduced its trading days to weekends only. The EICR interval can:",
  },
  {
    sectionId: "section-1",
    variantId: "v3",
    questionNumber: 16,
    promptSuffix:
      "Privately rented dwellings: enforcement under ESS PRS Regs 2020 sits with:",
  },
  {
    sectionId: "section-1",
    variantId: "v3",
    questionNumber: 17,
    promptSuffix:
      "A 25-year-old public-house lounge bar with no recent EICR on file. The most defensible response is to:",
  },
  {
    sectionId: "section-1",
    variantId: "v3",
    questionNumber: 18,
    promptSuffix:
      "An EAWR-driven duty holder argues that they only need an EICR every 25 years because the building has been continuously occupied. This position is:",
  },
  {
    sectionId: "section-1",
    variantId: "v3",
    questionNumber: 19,
    promptSuffix:
      "A fire was caused by a deteriorated joint in the consumer unit. The premises are commercial. The most appropriate next step regarding periodic inspection is:",
  },
  {
    sectionId: "section-1",
    variantId: "v3",
    questionNumber: 20,
    promptSuffix:
      "The legal driver behind periodic inspection in privately rented dwellings in England (since 2020) is most precisely:",
  },
  {
    sectionId: "section-1",
    variantId: "v4",
    questionNumber: 1,
    promptSuffix:
      "A community centre hosting children's parties, fitness classes and an over-60s club. Most defensible starting interval:",
  },
  {
    sectionId: "section-1",
    variantId: "v4",
    questionNumber: 2,
    promptSuffix:
      "A rental caravan-park pitch socket installation: recommended IET maximum interval:",
  },
  {
    sectionId: "section-1",
    variantId: "v4",
    questionNumber: 3,
    promptSuffix:
      "A landlord has just received an EICR with a single C3 observation. Under ESS PRS Regs 2020 the report is:",
  },
  {
    sectionId: "section-1",
    variantId: "v4",
    questionNumber: 4,
    promptSuffix:
      "A 10-year-old privately rented house has its periodic EICR carried out. The previous landlord did not commission an EICR. Action required by ESS PRS 2020 is:",
  },
  {
    sectionId: "section-1",
    variantId: "v4",
    questionNumber: 5,
    promptSuffix:
      "A small car repair workshop. The duty holder asks whether the agricultural 3-year interval applies because the building was once a barn. The defensible answer is:",
  },
  {
    sectionId: "section-1",
    variantId: "v4",
    questionNumber: 6,
    promptSuffix:
      "An EICR was commissioned for an industrial unit on a 3-year cycle. The previous report had two C2 observations. For the next interval the duty holder should:",
  },
  {
    sectionId: "section-1",
    variantId: "v4",
    questionNumber: 7,
    promptSuffix:
      "Recommended IET maximum interval for a public swimming pool plant room (the room with pumps, dosing and switchgear):",
  },
  {
    sectionId: "section-1",
    variantId: "v4",
    questionNumber: 8,
    promptSuffix:
      "Periodic inspection in the workplace is principally driven by:",
  },
  {
    sectionId: "section-1",
    variantId: "v4",
    questionNumber: 9,
    promptSuffix:
      "A school is planning its EICR. The starting GN3 interval to apply is typically:",
  },
  {
    sectionId: "section-1",
    variantId: "v4",
    questionNumber: 10,
    promptSuffix:
      "A duty holder argues that the EICR is the inspector's responsibility, not theirs. The defensible position is:",
  },
  {
    sectionId: "section-1",
    variantId: "v4",
    questionNumber: 11,
    promptSuffix:
      "An owner-occupier has had an EICR voluntarily, returning Satisfactory with one C3. The recommended next inspection date is:",
  },
  {
    sectionId: "section-1",
    variantId: "v4",
    questionNumber: 12,
    promptSuffix:
      "An EICR records the words 'extent and limitations agreed in writing with the duty holder before the inspection commenced'. The point of doing this is:",
  },
  {
    sectionId: "section-1",
    variantId: "v4",
    questionNumber: 13,
    promptSuffix:
      "A hotel with a swimming pool fails its 5-year EICR (Unsatisfactory). The hotel manager asks whether they can keep operating until remedial work is completed. The most defensible response is:",
  },
  {
    sectionId: "section-1",
    variantId: "v4",
    questionNumber: 14,
    promptSuffix:
      "Recommended periodic inspection interval for a leisure centre with pool, gym, sauna and changing rooms:",
  },
  {
    sectionId: "section-1",
    variantId: "v4",
    questionNumber: 15,
    promptSuffix:
      "GN3 lists triggers for an out-of-cycle (unscheduled) periodic inspection. Which of these is NOT a recognised trigger?",
  },
  {
    sectionId: "section-1",
    variantId: "v4",
    questionNumber: 16,
    promptSuffix:
      "A duty holder asks whether they can use the previous EICR to carry forward the same Unsatisfactory observations to the new report. The defensible position is:",
  },
  {
    sectionId: "section-1",
    variantId: "v4",
    questionNumber: 17,
    promptSuffix:
      "A housing association lets a social-rented dwelling with a small commercial office on the ground floor. What is the defensible current interval position?",
  },
  {
    sectionId: "section-1",
    variantId: "v4",
    questionNumber: 18,
    promptSuffix:
      "A privately rented dwelling EICR returns Unsatisfactory with one C1 and three C2s. ESS PRS Regs require remedial completion within:",
  },
  {
    sectionId: "section-1",
    variantId: "v4",
    questionNumber: 19,
    promptSuffix:
      "BS 7671 Reg 651.1 defines what periodic inspection is for. Critically, it says the inspection is to verify safety so far as:",
  },
  {
    sectionId: "section-1",
    variantId: "v4",
    questionNumber: 20,
    promptSuffix:
      "A duty holder claims that periodic inspection only matters where there has been a problem. The defensible position is:",
  },
  {
    sectionId: "section-1",
    variantId: "v5",
    questionNumber: 1,
    promptSuffix:
      "A privately rented dwelling EICR is being commissioned. The landlord tells the inspector to skip the kitchen because the tenant is cooking. The defensible response is:",
  },
  {
    sectionId: "section-1",
    variantId: "v5",
    questionNumber: 2,
    promptSuffix: "GN3 recommended interval for general industrial premises:",
  },
  {
    sectionId: "section-1",
    variantId: "v5",
    questionNumber: 3,
    promptSuffix:
      "An EICR is being scoped for a small bakery (commercial). Its cellar contains a 3-phase distribution board feeding ovens that cannot be switched off without spoiling stock. The most defensible response is:",
  },
  {
    sectionId: "section-1",
    variantId: "v5",
    questionNumber: 4,
    promptSuffix:
      "A new owner of an owner-occupied dwelling commissions an EICR voluntarily. They ask the inspector to write 'change of occupancy inspection'. This is:",
  },
  {
    sectionId: "section-1",
    variantId: "v5",
    questionNumber: 5,
    promptSuffix:
      "Recommended IET maximum interval for a place of public entertainment such as a music venue:",
  },
  {
    sectionId: "section-1",
    variantId: "v5",
    questionNumber: 6,
    promptSuffix:
      "A privately rented HMO has an EICR commissioned. The local authority requests a copy. The landlord must supply it within:",
  },
  {
    sectionId: "section-1",
    variantId: "v5",
    questionNumber: 7,
    promptSuffix:
      "Construction site temporary supply: GN3 recommended interval is:",
  },
  {
    sectionId: "section-1",
    variantId: "v5",
    questionNumber: 8,
    promptSuffix:
      "A commercial customer asks whether an EICR is mandatory for them. The defensible response is:",
  },
  {
    sectionId: "section-1",
    variantId: "v5",
    questionNumber: 9,
    promptSuffix:
      "A previously satisfactory EICR has expired by 6 months on a privately rented home in England. ESS PRS Regs are:",
  },
  {
    sectionId: "section-1",
    variantId: "v5",
    questionNumber: 10,
    promptSuffix:
      "An office tenant complains they cannot have their power interrupted at all. The defensible PIT approach is:",
  },
  {
    sectionId: "section-1",
    variantId: "v5",
    questionNumber: 11,
    promptSuffix: "Cinema (auditorium and lobby): recommended IET interval:",
  },
  {
    sectionId: "section-1",
    variantId: "v5",
    questionNumber: 12,
    promptSuffix:
      "An owner-occupied dwelling alters use partially to a B&B with three letting rooms. The property is now:",
  },
  {
    sectionId: "section-1",
    variantId: "v5",
    questionNumber: 13,
    promptSuffix:
      "A school's EICR has just expired. The headteacher asks whether term-time use justifies a short delay. The defensible response is:",
  },
  {
    sectionId: "section-1",
    variantId: "v5",
    questionNumber: 14,
    promptSuffix:
      "A customer asks whether the EICR pass mark is the same as initial verification. The defensible response is:",
  },
  {
    sectionId: "section-1",
    variantId: "v5",
    questionNumber: 15,
    promptSuffix:
      "An EAWR duty holder argues that periodic inspection at GN3 intervals is 'just guidance' and so optional. The defensible position is:",
  },
  {
    sectionId: "section-1",
    variantId: "v5",
    questionNumber: 16,
    promptSuffix:
      "A privately rented dwelling has a Satisfactory EICR with no codes. The next mandatory action is:",
  },
  {
    sectionId: "section-1",
    variantId: "v5",
    questionNumber: 17,
    promptSuffix:
      "A new tenant moves into a privately rented dwelling. Under ESS PRS Regs the landlord must:",
  },
  {
    sectionId: "section-1",
    variantId: "v5",
    questionNumber: 18,
    promptSuffix:
      "A duty holder argues that change of occupancy on an owner-occupied home is statutory. The defensible position is:",
  },
  {
    sectionId: "section-1",
    variantId: "v5",
    questionNumber: 19,
    promptSuffix:
      "A customer asks whether the inspector's professional indemnity covers any later claim. The defensible position is:",
  },
  {
    sectionId: "section-1",
    variantId: "v5",
    questionNumber: 20,
    promptSuffix:
      "An EAWR-driven duty holder wants to know how short an interval can be set. The defensible response is:",
  },
  {
    sectionId: "section-2",
    variantId: "v1",
    questionNumber: 1,
    promptSuffix:
      "The agreed EICR extent covers DB2 and DB3 only, not DB1. While inspecting DB2, you see a damaged submain cable leaving DB1 and feeding DB2. What is the best action?",
  },
  {
    sectionId: "section-2",
    variantId: "v1",
    questionNumber: 2,
    promptSuffix:
      "A 20% sample of accessories is agreed for a 24-circuit office. On the first sampled socket circuit you find reversed polarity, loose CPCs and signs of overheating. What should happen to the sample?",
  },
  {
    sectionId: "section-2",
    variantId: "v1",
    questionNumber: 3,
    promptSuffix:
      "Before testing, you remove a consumer unit cover and find an exposed live busbar finger due to a missing protective shroud. The installation is occupied. What is the most appropriate immediate response?",
  },
  {
    sectionId: "section-2",
    variantId: "v1",
    questionNumber: 4,
    promptSuffix: "Which mapping best distinguishes N/V, LIM, FI and N/A?",
  },
  {
    sectionId: "section-2",
    variantId: "v2",
    questionNumber: 1,
    promptSuffix:
      "An EICR for a 12-floor office tower is being scoped. The duty holder asks for sampling to keep the cost reasonable. The defensible position is:",
  },
  {
    sectionId: "section-2",
    variantId: "v2",
    questionNumber: 2,
    promptSuffix:
      "The inspector samples sockets on a busy retail floor and finds the same loose terminal on two of the ten sampled. The defensible response is:",
  },
  {
    sectionId: "section-2",
    variantId: "v2",
    questionNumber: 3,
    promptSuffix: "Live testing is justified only when:",
  },
  {
    sectionId: "section-2",
    variantId: "v2",
    questionNumber: 4,
    promptSuffix:
      "Sampling that turns up a defect on a single circuit suggests:",
  },
  {
    sectionId: "section-2",
    variantId: "v2",
    questionNumber: 5,
    promptSuffix:
      "EICR Section D ('extent and limitations') is the place to record:",
  },
  {
    sectionId: "section-2",
    variantId: "v2",
    questionNumber: 6,
    promptSuffix: "Limitations cannot legitimately be used to:",
  },
  {
    sectionId: "section-2",
    variantId: "v2",
    questionNumber: 7,
    promptSuffix:
      "Out-of-hours dead testing on a 24/7 facility is preferable because:",
  },
  {
    sectionId: "section-2",
    variantId: "v2",
    questionNumber: 8,
    promptSuffix:
      "A privately rented dwelling EICR has a clear, signed extent-and-limitations entry. The benefit of this is:",
  },
  {
    sectionId: "section-2",
    variantId: "v2",
    questionNumber: 9,
    promptSuffix:
      "An inspector cannot dead-test a continuous-process line. Acceptable approaches include:",
  },
  {
    sectionId: "section-2",
    variantId: "v2",
    questionNumber: 10,
    promptSuffix:
      "A 100-circuit installation is sampled at 10%. Two sampled circuits return low IR. The next defensible step is:",
  },
  {
    sectionId: "section-2",
    variantId: "v2",
    questionNumber: 11,
    promptSuffix:
      "An EICR records 'sampling: 100% of consumer units, 20% of socket outlets, 100% of fire alarm circuits, lighting in occupied areas only'. This kind of mixed sampling is:",
  },
  {
    sectionId: "section-2",
    variantId: "v2",
    questionNumber: 12,
    promptSuffix:
      "Failure to obtain a written agreement on extent and limitations exposes the inspector because:",
  },
  {
    sectionId: "section-2",
    variantId: "v2",
    questionNumber: 13,
    promptSuffix:
      "An EICR limitation that says 'the basement boiler room could not be inspected because the key holder was unavailable' is:",
  },
  {
    sectionId: "section-2",
    variantId: "v2",
    questionNumber: 14,
    promptSuffix:
      "An EICR sample turns up a recurring 6242Y cable type used in a damp area. The defensible response is:",
  },
  {
    sectionId: "section-2",
    variantId: "v2",
    questionNumber: 15,
    promptSuffix:
      "An office EICR has 'sampling: 20% of similar circuits' agreed. During testing, no defects are found. The defensible record is:",
  },
  {
    sectionId: "section-2",
    variantId: "v2",
    questionNumber: 16,
    promptSuffix:
      "An office tenant insists computers must not be turned off. The defensible response is:",
  },
  {
    sectionId: "section-2",
    variantId: "v2",
    questionNumber: 17,
    promptSuffix:
      "An EICR sample reveals one C1 defect (immediate danger). The inspector should:",
  },
  {
    sectionId: "section-2",
    variantId: "v2",
    questionNumber: 18,
    promptSuffix:
      "A duty holder asks for the EICR to be split into 'phases' so only some circuits are tested per visit. The defensible response is:",
  },
  {
    sectionId: "section-2",
    variantId: "v2",
    questionNumber: 19,
    promptSuffix:
      "A live-tested circuit returns a Zs reading at the upper end of the table value. The defensible response is:",
  },
  {
    sectionId: "section-2",
    variantId: "v2",
    questionNumber: 20,
    promptSuffix: "An agreed limitation must:",
  },
  {
    sectionId: "section-2",
    variantId: "v3",
    questionNumber: 1,
    promptSuffix:
      "An inspector samples 10% of socket outlets and finds 3 of 10 with reversed polarity. The defensible response is:",
  },
  {
    sectionId: "section-2",
    variantId: "v3",
    questionNumber: 2,
    promptSuffix:
      "Live testing PPE and instrument requirements are governed by:",
  },
  {
    sectionId: "section-2",
    variantId: "v3",
    questionNumber: 3,
    promptSuffix:
      "An EICR Section D entry says 'all circuits tested at 100%', but the inspector actually sampled circuits. What is the defect in the report?",
  },
  {
    sectionId: "section-2",
    variantId: "v3",
    questionNumber: 4,
    promptSuffix:
      "An inspector cannot inspect a busy hospital ward. The defensible response is:",
  },
  {
    sectionId: "section-2",
    variantId: "v3",
    questionNumber: 5,
    promptSuffix:
      "The inspector decides to sample 5% of identical socket circuits in a large warehouse. The duty holder is comfortable with this. The defensible record is:",
  },
  {
    sectionId: "section-2",
    variantId: "v3",
    questionNumber: 6,
    promptSuffix:
      "On a sampled circuit, the inspector finds an unsleeved CPC at the consumer unit. The defensible response is:",
  },
  {
    sectionId: "section-2",
    variantId: "v3",
    questionNumber: 7,
    promptSuffix:
      "An EICR limitation reads 'sockets behind built-in furniture not inspected'. This is:",
  },
  {
    sectionId: "section-2",
    variantId: "v3",
    questionNumber: 8,
    promptSuffix:
      "A duty holder offers the inspector a fee uplift to pass an installation that would otherwise be Unsatisfactory. The defensible response is:",
  },
  {
    sectionId: "section-2",
    variantId: "v3",
    questionNumber: 9,
    promptSuffix: "Sampling escalation is fundamentally about:",
  },
  {
    sectionId: "section-2",
    variantId: "v3",
    questionNumber: 10,
    promptSuffix:
      "An EICR records 'lighting circuits not isolated; live tests applied' on a continuously-occupied call centre. This entry is:",
  },
  {
    sectionId: "section-2",
    variantId: "v3",
    questionNumber: 11,
    promptSuffix:
      "An EICR sample tested at 20% returns no defects and the un-sampled population is similar in age and type. The defensible recommendation for the next inspection cycle is:",
  },
  {
    sectionId: "section-2",
    variantId: "v3",
    questionNumber: 12,
    promptSuffix:
      "An inspector cannot test a critical control circuit in continuous use. The defensible record is:",
  },
  {
    sectionId: "section-2",
    variantId: "v3",
    questionNumber: 13,
    promptSuffix:
      "An EICR sample is 'all of one type of repeating accessory'. This is:",
  },
  {
    sectionId: "section-2",
    variantId: "v3",
    questionNumber: 14,
    promptSuffix: "An EICR has no Section D entry. The implication is:",
  },
  {
    sectionId: "section-2",
    variantId: "v3",
    questionNumber: 15,
    promptSuffix:
      "An EICR sample returns no defects on tested circuits, but the inspector observes a generic Section D issue (e.g. inadequate labelling on an old distribution board). The defensible action is:",
  },
  {
    sectionId: "section-2",
    variantId: "v3",
    questionNumber: 16,
    promptSuffix:
      "An EICR limitation reads 'no test results for the lift motor circuit because access denied by the lift maintenance contractor'. This is:",
  },
  {
    sectionId: "section-2",
    variantId: "v3",
    questionNumber: 17,
    promptSuffix:
      "How should an EICR deal with fire-alarm, emergency-lighting and other life-safety systems?",
  },
  {
    sectionId: "section-2",
    variantId: "v3",
    questionNumber: 18,
    promptSuffix: "Sampling rates may rise for the next cycle when:",
  },
  {
    sectionId: "section-2",
    variantId: "v3",
    questionNumber: 19,
    promptSuffix:
      "An EICR records 'inspection limited to non-isolatable items by visual inspection only; full testing where isolation could be agreed during the visit'. This entry is:",
  },
  {
    sectionId: "section-2",
    variantId: "v3",
    questionNumber: 20,
    promptSuffix:
      "An agreed sampling boundary is exceeded by the inspector during the visit because of findings. The defensible record is:",
  },
  {
    sectionId: "section-2",
    variantId: "v4",
    questionNumber: 1,
    promptSuffix:
      "On a sampled office lighting circuit the inspector finds an exposed live conductor in a damaged accessory. The defensible response is:",
  },
  {
    sectionId: "section-2",
    variantId: "v4",
    questionNumber: 2,
    promptSuffix:
      "Sampling must NOT be applied to which of the following on a periodic inspection?",
  },
  {
    sectionId: "section-2",
    variantId: "v4",
    questionNumber: 3,
    promptSuffix: "An EICR limitation must not:",
  },
  {
    sectionId: "section-2",
    variantId: "v4",
    questionNumber: 4,
    promptSuffix:
      "An EICR records 'sampling 25% of repeating accessories; 100% of consumer units, switchgear, fire alarm circuits and emergency lighting'. This sampling pattern is:",
  },
  {
    sectionId: "section-2",
    variantId: "v4",
    questionNumber: 5,
    promptSuffix:
      "A previous EICR set sampling at 50% and found three defects. The inspector inheriting the next cycle should:",
  },
  {
    sectionId: "section-2",
    variantId: "v4",
    questionNumber: 6,
    promptSuffix:
      "An EICR sample reveals a low IR reading on a sampled circuit. The cause cannot be diagnosed during the visit without further isolation that the duty holder cannot accommodate today. The defensible response is:",
  },
  {
    sectionId: "section-2",
    variantId: "v4",
    questionNumber: 7,
    promptSuffix:
      "Live testing during a periodic inspection is governed by GS38 in respect of:",
  },
  {
    sectionId: "section-2",
    variantId: "v4",
    questionNumber: 8,
    promptSuffix:
      "An EICR sample reveals two non-compliant accessories among the ten sampled. The inspector should:",
  },
  {
    sectionId: "section-2",
    variantId: "v4",
    questionNumber: 9,
    promptSuffix:
      "A duty holder asks 'why isn't 100% always tested?' The defensible response is:",
  },
  {
    sectionId: "section-2",
    variantId: "v4",
    questionNumber: 10,
    promptSuffix:
      "An EICR limitation is recorded as 'lighting circuits in occupied bedrooms not tested'. The duty holder is comfortable with this. The defensible record is:",
  },
  {
    sectionId: "section-2",
    variantId: "v4",
    questionNumber: 11,
    promptSuffix:
      "Before assessing a hospital life-safety circuit during an EICR, what must the inspector establish?",
  },
  {
    sectionId: "section-2",
    variantId: "v4",
    questionNumber: 12,
    promptSuffix:
      "Live test for Zs is being carried out on a TN-S installation while the building is occupied. The most defensible approach is:",
  },
  {
    sectionId: "section-2",
    variantId: "v4",
    questionNumber: 13,
    promptSuffix:
      "An EICR sample turns up no defects but the inspector observes the consumer unit is plastic and visibly aged. The defensible response is:",
  },
  {
    sectionId: "section-2",
    variantId: "v4",
    questionNumber: 14,
    promptSuffix:
      "An EICR for a privately rented dwelling has Section D blank. The implication is:",
  },
  {
    sectionId: "section-2",
    variantId: "v4",
    questionNumber: 15,
    promptSuffix:
      "An EICR sample returns no defects but the inspector observes that the test results from the previous EICR were significantly different. The defensible response is:",
  },
  {
    sectionId: "section-2",
    variantId: "v4",
    questionNumber: 16,
    promptSuffix:
      "On a sampled circuit, the inspector sees an obvious sign of overheating at a connection. The defensible response is:",
  },
  {
    sectionId: "section-2",
    variantId: "v4",
    questionNumber: 17,
    promptSuffix:
      "An EICR Section D limitation reads 'isolation refused by duty holder for cost reasons'. What must the inspector do?",
  },
  {
    sectionId: "section-2",
    variantId: "v4",
    questionNumber: 18,
    promptSuffix:
      "An EICR records 'RCD integral test button operated; instrument test at IΔn not completed because the protected circuit could not be made available'. What is the correct treatment?",
  },
  {
    sectionId: "section-2",
    variantId: "v4",
    questionNumber: 19,
    promptSuffix: "Sampling on a TT installation:",
  },
  {
    sectionId: "section-2",
    variantId: "v4",
    questionNumber: 20,
    promptSuffix: "An EICR limitation that contradicts an observed danger is:",
  },
  {
    sectionId: "section-2",
    variantId: "v5",
    questionNumber: 1,
    promptSuffix:
      "An inspector samples 10 corridor lighting points and finds two flexes with damaged insulation inside accessory boxes, leaving conductors liable to contact or short-circuit. The defensible response is:",
  },
  {
    sectionId: "section-2",
    variantId: "v5",
    questionNumber: 2,
    promptSuffix:
      "An inspector cannot dead-test a hospital's MRI scanner power circuit. The defensible response is:",
  },
  {
    sectionId: "section-2",
    variantId: "v5",
    questionNumber: 3,
    promptSuffix:
      "Inspecting a privately rented dwelling, the inspector finds the loft hatch sealed shut. The defensible record is:",
  },
  {
    sectionId: "section-2",
    variantId: "v5",
    questionNumber: 4,
    promptSuffix:
      "A duty holder asks for sampling at 5% to keep the cost down. The defensible response is:",
  },
  {
    sectionId: "section-2",
    variantId: "v5",
    questionNumber: 5,
    promptSuffix:
      "The 'reasonably practicable' standard for periodic inspection means:",
  },
  {
    sectionId: "section-2",
    variantId: "v5",
    questionNumber: 6,
    promptSuffix:
      "On a dead test, an inspector finds a circuit with a low IR reading. The duty holder asks them to skip further investigation because the circuit is in continuous use. The defensible response is:",
  },
  {
    sectionId: "section-2",
    variantId: "v5",
    questionNumber: 7,
    promptSuffix:
      "An EICR sample reveals a deteriorated PVC sheath. The defensible response is:",
  },
  {
    sectionId: "section-2",
    variantId: "v5",
    questionNumber: 8,
    promptSuffix:
      "Live testing introduces additional hazards. The inspector's primary defence is:",
  },
  {
    sectionId: "section-2",
    variantId: "v5",
    questionNumber: 9,
    promptSuffix:
      "A duty holder asks for sampling to be 'whatever the inspector decides on the day'. The defensible response is:",
  },
  {
    sectionId: "section-2",
    variantId: "v5",
    questionNumber: 10,
    promptSuffix:
      "An EICR records 'sampling: 100% of consumer units; 30% of socket outlets, sampled across all rooms in proportion'. This is:",
  },
  {
    sectionId: "section-2",
    variantId: "v5",
    questionNumber: 11,
    promptSuffix:
      "An EICR limitation that says 'tenants in occupation; rooms tested where access permitted' is:",
  },
  {
    sectionId: "section-2",
    variantId: "v5",
    questionNumber: 12,
    promptSuffix:
      "The inspector observes during the EICR that a previously installed circuit has been altered with no documentation. The defensible response is:",
  },
  {
    sectionId: "section-2",
    variantId: "v5",
    questionNumber: 13,
    promptSuffix: "Sampling failure escalation should NOT be:",
  },
  {
    sectionId: "section-2",
    variantId: "v5",
    questionNumber: 14,
    promptSuffix: "An EICR is a 'snapshot' precisely because:",
  },
  {
    sectionId: "section-2",
    variantId: "v5",
    questionNumber: 15,
    promptSuffix:
      "A duty holder asks for the sampled accessories to be selected randomly with no inspector preference. The defensible response is:",
  },
  {
    sectionId: "section-2",
    variantId: "v5",
    questionNumber: 16,
    promptSuffix:
      "An EICR limitation reads 'live circuits to clinical alarms not isolated; functional check only by tester'. This is:",
  },
  {
    sectionId: "section-2",
    variantId: "v5",
    questionNumber: 17,
    promptSuffix:
      "An EICR records 'sampling of consumer units: 100%; sampling of distribution boards: 100%; sampling of repeating sockets: 15%; lighting: 15%; fire alarm: 100%; emergency lighting: 100%'. The pattern is:",
  },
  {
    sectionId: "section-2",
    variantId: "v5",
    questionNumber: 18,
    promptSuffix:
      "An EICR limitation cannot exclude a circuit where the inspector has already observed:",
  },
  {
    sectionId: "section-2",
    variantId: "v5",
    questionNumber: 19,
    promptSuffix:
      "Live RCD trip-time testing on a TT installation in a dwelling:",
  },
  {
    sectionId: "section-2",
    variantId: "v5",
    questionNumber: 20,
    promptSuffix: "An EICR limitation entry should include, as a minimum:",
  },
  {
    sectionId: "section-3",
    variantId: "v1",
    questionNumber: 1,
    promptSuffix:
      "You observe cracking and heat damage on the DNO cut-out. No live parts are accessible to the user. How should this normally affect the EICR?",
  },
  {
    sectionId: "section-3",
    variantId: "v1",
    questionNumber: 2,
    promptSuffix:
      'During an EICR of a cafe, the client expects the coffee machine, refrigeration units, dishwasher, extract fan, fire alarm panel, emergency lighting, intruder alarm and fixed wiring all to be "covered by the EICR." Which answer is best?',
  },
  {
    sectionId: "section-3",
    variantId: "v1",
    questionNumber: 3,
    promptSuffix:
      "A 2012 domestic plastic consumer unit is under wooden stairs forming the sole escape route. There is no damage, no overheating, no missing blanks, no loose connections and all circuits test satisfactorily. What is the most defensible classification?",
  },
  {
    sectionId: "section-3",
    variantId: "v1",
    questionNumber: 4,
    promptSuffix:
      "A spare way in a consumer unit has a missing blank. With the cover fitted, a child could insert a finger or thin object and contact live parts. What is the correct classification?",
  },
  {
    sectionId: "section-3",
    variantId: "v2",
    questionNumber: 1,
    promptSuffix: "An EICR records 'Satisfactory'. This means:",
  },
  {
    sectionId: "section-3",
    variantId: "v2",
    questionNumber: 2,
    promptSuffix: "An EICR records 'Unsatisfactory'. This means:",
  },
  {
    sectionId: "section-3",
    variantId: "v2",
    questionNumber: 3,
    promptSuffix:
      "Periodic test sequences differ from initial verification because:",
  },
  {
    sectionId: "section-3",
    variantId: "v2",
    questionNumber: 4,
    promptSuffix:
      "An EICR identifies an RCD that does not operate when the test button is pressed. This is typically coded:",
  },
  {
    sectionId: "section-3",
    variantId: "v2",
    questionNumber: 5,
    promptSuffix:
      "An EICR identifies a missing CPC on a final circuit feeding a Class I appliance. The typical code is:",
  },
  {
    sectionId: "section-3",
    variantId: "v2",
    questionNumber: 6,
    promptSuffix:
      "An EICR identifies a borrowed neutral between two circuits. The typical code is:",
  },
  {
    sectionId: "section-3",
    variantId: "v2",
    questionNumber: 7,
    promptSuffix:
      "An EICR identifies a circuit running through a bedroom that has been over-extended such that the inspector suspects but cannot confirm a code-worthy issue without further isolation. The typical code is:",
  },
  {
    sectionId: "section-3",
    variantId: "v2",
    questionNumber: 8,
    promptSuffix:
      "An EICR observation that 'covers were missing from a junction box, exposing live conductors' is typically coded:",
  },
  {
    sectionId: "section-3",
    variantId: "v2",
    questionNumber: 9,
    promptSuffix:
      "An EICR observation that 'the consumer unit is plastic, in an older domestic installation, with no signs of heat damage' is typically coded:",
  },
  {
    sectionId: "section-3",
    variantId: "v2",
    questionNumber: 10,
    promptSuffix:
      "Periodic inspection in privately rented dwellings is governed by:",
  },
  {
    sectionId: "section-3",
    variantId: "v2",
    questionNumber: 11,
    promptSuffix: "An EICR with a C1 must be communicated to the duty holder:",
  },
  {
    sectionId: "section-3",
    variantId: "v2",
    questionNumber: 12,
    promptSuffix:
      "An EICR records 'no covers on a junction box; conductor stripped back exposing copper, in a public corridor'. Typical code:",
  },
  {
    sectionId: "section-3",
    variantId: "v2",
    questionNumber: 13,
    promptSuffix:
      "An EICR observation that 'no RCD protects sockets that may reasonably be used to supply outdoor equipment, on an installation in a domestic dwelling' is typically coded:",
  },
  {
    sectionId: "section-3",
    variantId: "v2",
    questionNumber: 14,
    promptSuffix:
      "An EICR observation that 'no main protective bonding to a metallic gas pipe at the point of entry' is typically coded:",
  },
  {
    sectionId: "section-3",
    variantId: "v2",
    questionNumber: 15,
    promptSuffix: "An EICR cover letter exists primarily to:",
  },
  {
    sectionId: "section-3",
    variantId: "v2",
    questionNumber: 16,
    promptSuffix:
      "Periodic inspection is required because faults can develop in service that initial verification cannot anticipate. The legal foundation in the workplace is:",
  },
  {
    sectionId: "section-3",
    variantId: "v2",
    questionNumber: 17,
    promptSuffix:
      "An EICR identifies a permanent missing label on the consumer unit (no circuit ID). Typical code:",
  },
  {
    sectionId: "section-3",
    variantId: "v2",
    questionNumber: 18,
    promptSuffix:
      "An EV charger can produce smooth DC residual current, but its only RCD is Type AC and neither the equipment nor a separate device provides the required DC residual-current protection. The typical code is:",
  },
  {
    sectionId: "section-3",
    variantId: "v2",
    questionNumber: 19,
    promptSuffix:
      "An EICR observation that 'the disconnection time on a TN-S final circuit cannot be met because the measured Zs is significantly above the table value' is typically coded:",
  },
  {
    sectionId: "section-3",
    variantId: "v2",
    questionNumber: 20,
    promptSuffix: "An EICR's Schedule of Test Results captures:",
  },
  {
    sectionId: "section-3",
    variantId: "v3",
    questionNumber: 1,
    promptSuffix:
      "Electrical Safety First publishes Best Practice Guide 4. What does that guide provide?",
  },
  {
    sectionId: "section-3",
    variantId: "v3",
    questionNumber: 2,
    promptSuffix:
      "An EICR observation that 'no main protective bonding to incoming metallic water pipe' is typically coded:",
  },
  {
    sectionId: "section-3",
    variantId: "v3",
    questionNumber: 3,
    promptSuffix:
      "For an existing rented-sector tenant, the landlord's 28-day deadline to supply the EICR starts from:",
  },
  {
    sectionId: "section-3",
    variantId: "v3",
    questionNumber: 4,
    promptSuffix:
      "An EICR Unsatisfactory result on a privately rented dwelling triggers a 28-day duty to:",
  },
  {
    sectionId: "section-3",
    variantId: "v3",
    questionNumber: 5,
    promptSuffix: "An inspector finds a C1. They must, in priority order:",
  },
  {
    sectionId: "section-3",
    variantId: "v3",
    questionNumber: 6,
    promptSuffix: "An EICR Schedule of Inspections lists items that have been:",
  },
  {
    sectionId: "section-3",
    variantId: "v3",
    questionNumber: 7,
    promptSuffix:
      "An EICR identifies a final circuit where measured Zs is 1.3 Ω, BS 7671 tabulated maximum is 1.37 Ω. Applying the GN3 80% rule of thumb the result is:",
  },
  {
    sectionId: "section-3",
    variantId: "v3",
    questionNumber: 8,
    promptSuffix: "Test sequences for periodic inspection are:",
  },
  {
    sectionId: "section-3",
    variantId: "v3",
    questionNumber: 9,
    promptSuffix:
      "A C2 made the EICR Unsatisfactory. The duty holder under EAWR has to:",
  },
  {
    sectionId: "section-3",
    variantId: "v3",
    questionNumber: 10,
    promptSuffix:
      "A privately rented dwelling EICR contains an FI observation. Under ESS PRS 2020 the landlord must:",
  },
  {
    sectionId: "section-3",
    variantId: "v3",
    questionNumber: 11,
    promptSuffix:
      "An EICR identifies an old porcelain fuse-carrier consumer unit with no overload protection and no RCDs in a privately rented dwelling. The inspector should code this:",
  },
  {
    sectionId: "section-3",
    variantId: "v3",
    questionNumber: 12,
    promptSuffix:
      "An EICR finds a damaged fixed accessory cover that is no longer locked or secured. Typical code:",
  },
  {
    sectionId: "section-3",
    variantId: "v3",
    questionNumber: 13,
    promptSuffix:
      "An existing main protective bonding conductor is 6 mm² where 10 mm² is now required. It is continuous, securely connected and shows no thermal damage. What is the current Best Practice Guide 4 treatment?",
  },
  {
    sectionId: "section-3",
    variantId: "v3",
    questionNumber: 14,
    promptSuffix:
      "A privately rented dwelling EICR identifies one C2. The landlord arranges remedial work within 28 days. The follow-up document is:",
  },
  {
    sectionId: "section-3",
    variantId: "v3",
    questionNumber: 15,
    promptSuffix: "An EICR Schedule of Test Results columns typically include:",
  },
  {
    sectionId: "section-3",
    variantId: "v3",
    questionNumber: 16,
    promptSuffix: "An EICR is dated and signed. The signing inspector must:",
  },
  {
    sectionId: "section-3",
    variantId: "v3",
    questionNumber: 17,
    promptSuffix:
      "An EICR identifies a circuit feeding a sauna where the IP rating of the accessories is below the requirement for the special location zone. Typical code:",
  },
  {
    sectionId: "section-3",
    variantId: "v3",
    questionNumber: 18,
    promptSuffix:
      "An EICR is signed Unsatisfactory but the duty holder asks for it to be re-issued as Satisfactory once remedial work is complete. The defensible response is:",
  },
  {
    sectionId: "section-3",
    variantId: "v3",
    questionNumber: 19,
    promptSuffix:
      "A landlord under ESS PRS 2020 fails to commission an EICR. The local authority can:",
  },
  {
    sectionId: "section-3",
    variantId: "v3",
    questionNumber: 20,
    promptSuffix:
      "An EICR is Satisfactory but contains five C3 observations. The duty holder is:",
  },
  {
    sectionId: "section-3",
    variantId: "v4",
    questionNumber: 1,
    promptSuffix:
      "An EICR observation that 'no SPD on a domestic installation in a low-risk area' is typically coded:",
  },
  {
    sectionId: "section-3",
    variantId: "v4",
    questionNumber: 2,
    promptSuffix:
      "An EICR observation that 'an exposed conductive part is not connected to the CPC' is typically coded:",
  },
  {
    sectionId: "section-3",
    variantId: "v4",
    questionNumber: 3,
    promptSuffix:
      "Periodic inspection of construction-site temporary supplies is typically required at intervals of:",
  },
  {
    sectionId: "section-3",
    variantId: "v4",
    questionNumber: 4,
    promptSuffix:
      "An EICR observation that 'a circuit has no main earth at the consumer unit' is typically coded:",
  },
  {
    sectionId: "section-3",
    variantId: "v4",
    questionNumber: 5,
    promptSuffix:
      "An EICR identifies a missing CPC at a metallic accessory. The typical code is:",
  },
  {
    sectionId: "section-3",
    variantId: "v4",
    questionNumber: 6,
    promptSuffix:
      "An EICR identifies a non-RCD-protected socket outlet in a privately rented dwelling that may reasonably be used for outdoor equipment. The typical code is:",
  },
  {
    sectionId: "section-3",
    variantId: "v4",
    questionNumber: 7,
    promptSuffix: "An EICR cover letter, when used, is most effective when it:",
  },
  {
    sectionId: "section-3",
    variantId: "v4",
    questionNumber: 8,
    promptSuffix:
      "EICR classifications are illustrated in Electrical Safety First Best Practice Guide 4. They are:",
  },
  {
    sectionId: "section-3",
    variantId: "v4",
    questionNumber: 9,
    promptSuffix:
      "An EICR can use 'NA' (not applicable) or 'LIM' (limitation) instead of a code where:",
  },
  {
    sectionId: "section-3",
    variantId: "v4",
    questionNumber: 10,
    promptSuffix: "An EICR is signed by:",
  },
  {
    sectionId: "section-3",
    variantId: "v4",
    questionNumber: 11,
    promptSuffix:
      "A circuit CPC is safely terminated at the fixed accessory supplying a Class II appliance; the appliance remains correctly double-insulated and has no protective-conductor terminal. The typical EICR treatment is:",
  },
  {
    sectionId: "section-3",
    variantId: "v4",
    questionNumber: 12,
    promptSuffix:
      "An EICR identifies an installation that is wired to the 15th edition (pre-1992) cable colours. The typical code is:",
  },
  {
    sectionId: "section-3",
    variantId: "v4",
    questionNumber: 13,
    promptSuffix:
      "An EICR identifies a dual-supply installation where the changeover does not fully break each supply (i.e. the two supplies could be paralleled). Typical code:",
  },
  {
    sectionId: "section-3",
    variantId: "v4",
    questionNumber: 14,
    promptSuffix:
      "An EICR identifies an RCD with the wrong rated residual current (e.g. 100 mA where 30 mA is required). Typical code:",
  },
  {
    sectionId: "section-3",
    variantId: "v4",
    questionNumber: 15,
    promptSuffix:
      "An EICR identifies a TN-C-S installation where there is no main protective bonding to the gas service. Typical code:",
  },
  {
    sectionId: "section-3",
    variantId: "v4",
    questionNumber: 16,
    promptSuffix:
      "Outdoor electrical equipment has an enclosure unsuitable for the rain and impact it receives, and moisture can reach basic insulation. The typical code is:",
  },
  {
    sectionId: "section-3",
    variantId: "v4",
    questionNumber: 17,
    promptSuffix:
      "Periodic inspection's place in the maintenance lifecycle is best described as:",
  },
  {
    sectionId: "section-3",
    variantId: "v4",
    questionNumber: 18,
    promptSuffix:
      "An EICR identifies a plastic consumer unit on a TN-C-S domestic installation, with signs of localised heat damage at one of the breakers. Typical code:",
  },
  {
    sectionId: "section-3",
    variantId: "v4",
    questionNumber: 19,
    promptSuffix:
      "An EICR identifies a sub-main where the protective conductor has not been adequately sized for fault current. Typical code:",
  },
  {
    sectionId: "section-3",
    variantId: "v4",
    questionNumber: 20,
    promptSuffix: "An EICR's overall assessment is determined by:",
  },
  {
    sectionId: "section-3",
    variantId: "v5",
    questionNumber: 1,
    promptSuffix:
      "The scope of Building Regulations Part P (England) is restricted to:",
  },
  {
    sectionId: "section-3",
    variantId: "v5",
    questionNumber: 2,
    promptSuffix: "ESS PRS 2020 financial penalty per breach can reach:",
  },
  {
    sectionId: "section-3",
    variantId: "v5",
    questionNumber: 3,
    promptSuffix:
      "The Schedule of Test Results that accompanies an EICR is intended to record:",
  },
  {
    sectionId: "section-3",
    variantId: "v5",
    questionNumber: 4,
    promptSuffix:
      "An EICR identifies an old metal-clad consumer unit in a domestic kitchen with no signs of damage. Typical code:",
  },
  {
    sectionId: "section-3",
    variantId: "v5",
    questionNumber: 5,
    promptSuffix:
      "An EICR identifies an unswitched live socket in a public corridor, where the cover has been removed and the live conductor is accessible. Typical code:",
  },
  {
    sectionId: "section-3",
    variantId: "v5",
    questionNumber: 6,
    promptSuffix:
      "An EICR identifies a final circuit feeding a bathroom that has no supplementary equipotential bonding and no RCD. Typical code:",
  },
  {
    sectionId: "section-3",
    variantId: "v5",
    questionNumber: 7,
    promptSuffix: "An EICR cover letter is typically used to:",
  },
  {
    sectionId: "section-3",
    variantId: "v5",
    questionNumber: 8,
    promptSuffix:
      "One altered circuit introduces harmonised conductor colours into an installation that also retains the earlier colours, but the required mixed-colours warning notice is absent. The typical code is:",
  },
  {
    sectionId: "section-3",
    variantId: "v5",
    questionNumber: 9,
    promptSuffix:
      "Periodic inspection in agricultural premises is governed primarily by:",
  },
  {
    sectionId: "section-3",
    variantId: "v5",
    questionNumber: 10,
    promptSuffix: "Periodic test sequences for an in-service installation are:",
  },
  {
    sectionId: "section-3",
    variantId: "v5",
    questionNumber: 11,
    promptSuffix:
      "An EICR identifies a missing earth electrode on a TT installation. Typical code:",
  },
  {
    sectionId: "section-3",
    variantId: "v5",
    questionNumber: 12,
    promptSuffix:
      "An EICR observation that 'no warning notice for non-standard cable colours at the consumer unit' is typically coded:",
  },
  {
    sectionId: "section-3",
    variantId: "v5",
    questionNumber: 13,
    promptSuffix:
      "An EICR identifies an underrated supply cable that has been overloaded for the connected demand. Typical code:",
  },
  {
    sectionId: "section-3",
    variantId: "v5",
    questionNumber: 14,
    promptSuffix:
      "An EICR identifies a circuit where the protective device has been replaced with a higher rating without checking conductor capacity. Typical code:",
  },
  {
    sectionId: "section-3",
    variantId: "v5",
    questionNumber: 15,
    promptSuffix:
      "A Class I metallic enclosure in a swimming-pool plant room has no effective CPC connection. The typical code is:",
  },
  {
    sectionId: "section-3",
    variantId: "v5",
    questionNumber: 16,
    promptSuffix:
      "An EICR observation that 'the duty holder has not provided documentation of past inspections' is typically coded:",
  },
  {
    sectionId: "section-3",
    variantId: "v5",
    questionNumber: 17,
    promptSuffix:
      "An EICR identifies a 17th edition installation in a building used as offices. The 18th edition is current. The departures from the 18th are typically coded:",
  },
  {
    sectionId: "section-3",
    variantId: "v5",
    questionNumber: 18,
    promptSuffix:
      "An EICR is Unsatisfactory due to one C2. The duty holder asks the inspector to remove the C2 because they will fix it tomorrow. The defensible response is:",
  },
  {
    sectionId: "section-3",
    variantId: "v5",
    questionNumber: 19,
    promptSuffix:
      "An EICR identifies a privately rented dwelling with one C1 (immediate danger) and three C3s. Under ESS PRS 2020 the landlord must:",
  },
  {
    sectionId: "section-3",
    variantId: "v5",
    questionNumber: 20,
    promptSuffix: "The output of a periodic inspection is fundamentally:",
  },
  {
    sectionId: "section-4",
    variantId: "v1",
    questionNumber: 1,
    promptSuffix:
      "A standard 13 A socket-outlet is installed in a large bathroom, 3.2 m horizontally from the edge of the bath. The circuit has 30 mA RCD protection and tests satisfactorily. What is the best classification?",
  },
  {
    sectionId: "section-4",
    variantId: "v1",
    questionNumber: 2,
    promptSuffix:
      "A bathroom has metallic water and heating pipework, Class I equipment, no visible supplementary bonding and no RCD protection to the lighting circuit. Main bonding is present and Zs/disconnection values are satisfactory. If the conditions for omitting supplementary bonding are not met, what is the likely classification?",
  },
  {
    sectionId: "section-4",
    variantId: "v1",
    questionNumber: 3,
    promptSuffix:
      "A 2005 lighting circuit has twin-and-earth cables concealed less than 50 mm deep in plasterboard walls. No RCD protection is provided. There is no damage and the circuit tests satisfactorily. What is the normal classification?",
  },
  {
    sectionId: "section-4",
    variantId: "v1",
    questionNumber: 4,
    promptSuffix:
      "A rural TT installation still uses a voltage-operated earth-leakage circuit breaker as the main protective device. No reliable disconnection test can be made for it, and no 30 mA RCD protection is provided for socket-outlets. What is the best classification approach?",
  },
  {
    sectionId: "section-4",
    variantId: "v2",
    questionNumber: 1,
    promptSuffix:
      "On a ring-final continuity test, R1+R2 readings at three sockets are 0.5 Ω, 0.5 Ω and 1.2 Ω. What does the isolated 1.2 Ω result justify?",
  },
  {
    sectionId: "section-4",
    variantId: "v2",
    questionNumber: 2,
    promptSuffix:
      "An RCD trip-time test at 1× IΔn on a general-type RCD to BS EN 61008. Maximum allowable time:",
  },
  {
    sectionId: "section-4",
    variantId: "v2",
    questionNumber: 3,
    promptSuffix:
      "A polarity check at a socket reads OK on the test instrument. The defensible interpretation is:",
  },
  {
    sectionId: "section-4",
    variantId: "v2",
    questionNumber: 4,
    promptSuffix:
      "An IR test result on a 230 V final circuit reads 1.5 MΩ. The defensible response is:",
  },
  {
    sectionId: "section-4",
    variantId: "v2",
    questionNumber: 5,
    promptSuffix: "The dead-test sequence used at initial verification is:",
  },
  {
    sectionId: "section-4",
    variantId: "v2",
    questionNumber: 6,
    promptSuffix:
      "An EICR identifies a Type AC RCD on a circuit feeding an EV charger. The typical code is:",
  },
  {
    sectionId: "section-4",
    variantId: "v2",
    questionNumber: 7,
    promptSuffix:
      "An installation has been altered by adding a new circuit. Documentation for the altered work is:",
  },
  {
    sectionId: "section-4",
    variantId: "v2",
    questionNumber: 8,
    promptSuffix:
      "An R1+R2 measurement reads 1.2 Ω on a circuit. Calculated cold Zs is approximately:",
  },
  {
    sectionId: "section-4",
    variantId: "v2",
    questionNumber: 9,
    promptSuffix:
      "An EICR has multiple departures from the current edition. The defensible action is:",
  },
  {
    sectionId: "section-4",
    variantId: "v2",
    questionNumber: 10,
    promptSuffix:
      "The inspector finds a TN-C-S installation where the gas service has lost its main bonding due to recent gas-meter work. Typical code:",
  },
  {
    sectionId: "section-4",
    variantId: "v2",
    questionNumber: 11,
    promptSuffix:
      "A 32 A Type B circuit measures Zs = 1.10 Ω cold. Tabulated maximum is 1.37 Ω. Applying the GN3 80% rule of thumb:",
  },
  {
    sectionId: "section-4",
    variantId: "v2",
    questionNumber: 12,
    promptSuffix:
      "A periodic inspection is interrupted by a local power cut. The inspector should:",
  },
  {
    sectionId: "section-4",
    variantId: "v2",
    questionNumber: 13,
    promptSuffix:
      "The supply impedance Ze on a domestic TN-C-S installation is typically:",
  },
  {
    sectionId: "section-4",
    variantId: "v2",
    questionNumber: 14,
    promptSuffix:
      "Periodic inspection of an installation that has been modified without records — the inspector should:",
  },
  {
    sectionId: "section-4",
    variantId: "v2",
    questionNumber: 15,
    promptSuffix:
      "An EICR identifies an installation where the consumer unit has Type AC RCBOs but the loads include LED drivers and electronic dimmers. Typical code:",
  },
  {
    sectionId: "section-4",
    variantId: "v2",
    questionNumber: 16,
    promptSuffix:
      "An IR test on a 400 V three-phase circuit. The minimum acceptable IR is:",
  },
  {
    sectionId: "section-4",
    variantId: "v2",
    questionNumber: 17,
    promptSuffix:
      "An EICR Schedule of Test Results entry shows R1+R2 = 0.42 Ω, Zs = 0.46 Ω. The implied Ze is approximately:",
  },
  {
    sectionId: "section-4",
    variantId: "v2",
    questionNumber: 18,
    promptSuffix: "Continuity of CPCs is tested using:",
  },
  {
    sectionId: "section-4",
    variantId: "v2",
    questionNumber: 19,
    promptSuffix:
      "An existing 6 mm² main protective bond to a confirmed metallic gas service is smaller than the present requirement. It is continuous, secure and free of thermal damage. What is the current Best Practice Guide 4 treatment?",
  },
  {
    sectionId: "section-4",
    variantId: "v2",
    questionNumber: 20,
    promptSuffix:
      "Under current BS 7671 field verification, a general non-delay RCD tested with alternating current at IΔn must operate within:",
  },
  {
    sectionId: "section-4",
    variantId: "v2",
    questionNumber: 21,
    promptSuffix: "Inspection sampling escalates because:",
  },
  {
    sectionId: "section-4",
    variantId: "v2",
    questionNumber: 22,
    promptSuffix:
      "An EICR records 'no protective conductor at one socket; circuit otherwise continues to operate'. Typical code:",
  },
  {
    sectionId: "section-4",
    variantId: "v2",
    questionNumber: 23,
    promptSuffix:
      "The inspector cannot complete an RCD trip-time test because the residual-current load is too high (large CPD leakage). The defensible response is:",
  },
  {
    sectionId: "section-4",
    variantId: "v2",
    questionNumber: 24,
    promptSuffix:
      "An EICR identifies an electrically-heated underfloor heating mat where the IR is below the minimum. Typical code:",
  },
  {
    sectionId: "section-4",
    variantId: "v2",
    questionNumber: 25,
    promptSuffix:
      "A 6 A Type B MCB has a tabulated maximum Zs of approximately:",
  },
  {
    sectionId: "section-4",
    variantId: "v2",
    questionNumber: 26,
    promptSuffix:
      "An EICR observes a non-RCD-protected lighting circuit in a domestic installation. Cable is partially concealed in the wall. Typical code:",
  },
  {
    sectionId: "section-4",
    variantId: "v2",
    questionNumber: 27,
    promptSuffix: "An EICR has a single FI observation. The overall result:",
  },
  {
    sectionId: "section-4",
    variantId: "v2",
    questionNumber: 28,
    promptSuffix:
      "Periodic inspection of an installation supplying a swimming pool zone — the supplementary equipotential bonding should:",
  },
  {
    sectionId: "section-4",
    variantId: "v2",
    questionNumber: 29,
    promptSuffix:
      "A 230 V circuit measures L-E IR = 1.0 MΩ exactly. The defensible response is:",
  },
  {
    sectionId: "section-4",
    variantId: "v2",
    questionNumber: 30,
    promptSuffix: "An RCD's built-in test button:",
  },
  {
    sectionId: "section-4",
    variantId: "v3",
    questionNumber: 1,
    promptSuffix:
      "An EICR finds a 13 A FCU feeding a fixed appliance, but the FCU is wired with the L and N reversed at the FCU output. Typical code:",
  },
  {
    sectionId: "section-4",
    variantId: "v3",
    questionNumber: 2,
    promptSuffix:
      "A 2 m radial circuit carrying 10 A has 2.5 mm² cable rated 18 mV/A/m. Voltage drop is approximately:",
  },
  {
    sectionId: "section-4",
    variantId: "v3",
    questionNumber: 3,
    promptSuffix: "An IR test on a 400 V circuit should be carried out at:",
  },
  {
    sectionId: "section-4",
    variantId: "v3",
    questionNumber: 4,
    promptSuffix:
      "A 25 m run of 1.5 mm² T+E cable carrying 6 A has approximate voltage drop using 29 mV/A/m:",
  },
  {
    sectionId: "section-4",
    variantId: "v3",
    questionNumber: 5,
    promptSuffix:
      "An EICR finds an installation where the installer has used a screw connection on a stranded conductor without a bootlace ferrule. Typical code:",
  },
  {
    sectionId: "section-4",
    variantId: "v3",
    questionNumber: 6,
    promptSuffix:
      "Under current BS 7671 field verification, what alternating-current test and maximum time apply to a general non-delay 30 mA RCD?",
  },
  {
    sectionId: "section-4",
    variantId: "v3",
    questionNumber: 7,
    promptSuffix:
      "An EICR identifies a corroded earth electrode on a TT installation. Typical code:",
  },
  {
    sectionId: "section-4",
    variantId: "v3",
    questionNumber: 8,
    promptSuffix:
      "Ignoring other constraints, what upper value follows from RA × IΔn ≤ 50 V for a TT installation protected by a 30 mA RCD?",
  },
  {
    sectionId: "section-4",
    variantId: "v3",
    questionNumber: 9,
    promptSuffix:
      "An EICR identifies a distribution board where the labelling on the breakers is mismatched with the actual circuits. Typical code:",
  },
  {
    sectionId: "section-4",
    variantId: "v3",
    questionNumber: 10,
    promptSuffix:
      "An EICR observation that 'a circuit's neutral and CPC are linked at one accessory in error' is typically coded:",
  },
  {
    sectionId: "section-4",
    variantId: "v3",
    questionNumber: 11,
    promptSuffix:
      "Periodic inspection of a privately rented dwelling uncovers a recent DIY alteration with no certificate. The inspector should:",
  },
  {
    sectionId: "section-4",
    variantId: "v3",
    questionNumber: 12,
    promptSuffix:
      "An EICR finds an installation where the L and N have been swapped at the consumer unit. Typical code:",
  },
  {
    sectionId: "section-4",
    variantId: "v3",
    questionNumber: 13,
    promptSuffix:
      "An EICR observation that 'switches are wired in the neutral conductor on certain lighting circuits' is typically coded:",
  },
  {
    sectionId: "section-4",
    variantId: "v3",
    questionNumber: 14,
    promptSuffix:
      "An EICR finds a TN-C-S installation where the supply earth has been disconnected at the consumer unit. The installation continues to function. Typical code:",
  },
  {
    sectionId: "section-4",
    variantId: "v3",
    questionNumber: 15,
    promptSuffix:
      "On an IR test, L-E reads 50 MΩ but L-N reads 0.3 MΩ. The defensible interpretation is:",
  },
  {
    sectionId: "section-4",
    variantId: "v3",
    questionNumber: 16,
    promptSuffix:
      "An EICR identifies a circuit feeding a freezer in a privately rented dwelling on the same RCD as other circuits. The freezer trips once a week causing food loss. Typical observation:",
  },
  {
    sectionId: "section-4",
    variantId: "v3",
    questionNumber: 17,
    promptSuffix:
      "An EICR finds a circuit where the protective conductor has been broken inside a junction box. Typical code:",
  },
  {
    sectionId: "section-4",
    variantId: "v3",
    questionNumber: 18,
    promptSuffix:
      "An EICR identifies a circuit with extra-low voltage equipment (12 V LEDs) where the isolating transformer is rated 230/12 V but is unfused on the secondary. Typical code:",
  },
  {
    sectionId: "section-4",
    variantId: "v3",
    questionNumber: 19,
    promptSuffix:
      "An EICR records 'an RCD trips at exactly its rated residual current'. Per BS EN 61008 the test current at 1× IΔn:",
  },
  {
    sectionId: "section-4",
    variantId: "v3",
    questionNumber: 20,
    promptSuffix:
      "An EICR finds a TN-S installation with the sheath of the incoming cable used as the means of earthing. The sheath shows signs of corrosion. Typical code:",
  },
  {
    sectionId: "section-4",
    variantId: "v3",
    questionNumber: 21,
    promptSuffix:
      "For an installation supplied directly from a public low-voltage system, what Appendix 4 voltage-drop value applies to lighting from the origin to the load?",
  },
  {
    sectionId: "section-4",
    variantId: "v3",
    questionNumber: 22,
    promptSuffix:
      "An EICR identifies an installation where IR tests are deferred because of connected sensitive electronic loads (e.g. a controller that cannot be IR-tested). The defensible response is:",
  },
  {
    sectionId: "section-4",
    variantId: "v3",
    questionNumber: 23,
    promptSuffix:
      "An EICR finds an installation where the consumer unit is correctly bonded but the gas pipe bonding is loose at the gas-pipe terminal. Typical code:",
  },
  {
    sectionId: "section-4",
    variantId: "v3",
    questionNumber: 24,
    promptSuffix:
      "An EICR identifies a circuit feeding a fish tank pump in a domestic installation, with no RCD. Typical code:",
  },
  {
    sectionId: "section-4",
    variantId: "v3",
    questionNumber: 25,
    promptSuffix:
      "A circuit's R1+R2 has been measured cold at 0.65 Ω. To estimate Zs, the inspector must:",
  },
  {
    sectionId: "section-4",
    variantId: "v3",
    questionNumber: 26,
    promptSuffix:
      "An EICR finds an installation where the consumer unit's main switch has been bypassed. Typical code:",
  },
  {
    sectionId: "section-4",
    variantId: "v3",
    questionNumber: 27,
    promptSuffix:
      "An EICR records 'isolation could not be confirmed because the main switch is locked off but the keys are unavailable'. The defensible action is:",
  },
  {
    sectionId: "section-4",
    variantId: "v3",
    questionNumber: 28,
    promptSuffix:
      "An EICR finds an installation where a loose connection has caused localised heat damage on a busbar. Typical code:",
  },
  {
    sectionId: "section-4",
    variantId: "v3",
    questionNumber: 29,
    promptSuffix:
      "An EICR records 'a 30 mA RCD trips at 22 mA actual residual'. Per BS EN 61008 this is:",
  },
  {
    sectionId: "section-4",
    variantId: "v3",
    questionNumber: 30,
    promptSuffix: "An EICR's overall result is determined by:",
  },
  {
    sectionId: "section-4",
    variantId: "v4",
    questionNumber: 1,
    promptSuffix:
      "An EICR finds a domestic kitchen socket with no RCD protection where the socket is used to power a kettle. Typical code:",
  },
  {
    sectionId: "section-4",
    variantId: "v4",
    questionNumber: 2,
    promptSuffix:
      "An IR test on a SELV circuit (typically 12 V LED lighting) is performed at:",
  },
  {
    sectionId: "section-4",
    variantId: "v4",
    questionNumber: 3,
    promptSuffix:
      "An EICR records 'measurements taken from the consumer unit; downstream measurements not taken at every accessory'. This sampling approach is:",
  },
  {
    sectionId: "section-4",
    variantId: "v4",
    questionNumber: 4,
    promptSuffix:
      "An EICR finds an installation where the supply cable has been damaged by a roof leak. Insulation is visibly compromised. Typical code:",
  },
  {
    sectionId: "section-4",
    variantId: "v4",
    questionNumber: 5,
    promptSuffix:
      "A general non-delay RCD takes longer than 300 ms when field-tested with alternating current at IΔn. The typical code is:",
  },
  {
    sectionId: "section-4",
    variantId: "v4",
    questionNumber: 6,
    promptSuffix:
      "An EICR identifies a shared neutral on two single-phase circuits. Typical code:",
  },
  {
    sectionId: "section-4",
    variantId: "v4",
    questionNumber: 7,
    promptSuffix:
      "Periodic inspection finds an installation where the supply impedance Ze is measured at 0.6 Ω (TN-C-S supply). The DNO has stated the maximum is 0.35 Ω. Typical action:",
  },
  {
    sectionId: "section-4",
    variantId: "v4",
    questionNumber: 8,
    promptSuffix:
      "An EICR finds a domestic installation where the supply is via a TT system but no main RCD is present. Typical code:",
  },
  {
    sectionId: "section-4",
    variantId: "v4",
    questionNumber: 9,
    promptSuffix:
      "An EICR finds an installation where the lighting circuit has been extended into a bathroom but the new fixtures are not in the correct IP rating for their zone. Typical code:",
  },
  {
    sectionId: "section-4",
    variantId: "v4",
    questionNumber: 10,
    promptSuffix:
      "An EICR finds an installation where a circuit's CPC is connected to a heating-system pipe inside the boiler cupboard. Typical code:",
  },
  {
    sectionId: "section-4",
    variantId: "v4",
    questionNumber: 11,
    promptSuffix:
      "An EICR finds a 100 mA RCD on a TT installation supplying a domestic dwelling, with no separate 30 mA RCD on socket circuits. Typical code:",
  },
  {
    sectionId: "section-4",
    variantId: "v4",
    questionNumber: 12,
    promptSuffix:
      "An EICR finds a 230 V circuit measuring L-N IR = 5.0 MΩ but L-E = 0.4 MΩ. Defensible response:",
  },
  {
    sectionId: "section-4",
    variantId: "v4",
    questionNumber: 13,
    promptSuffix:
      "An EICR finds an installation where the protective conductor in T+E cable has been used as a current-carrying conductor (e.g. as a switched line). Typical code:",
  },
  {
    sectionId: "section-4",
    variantId: "v4",
    questionNumber: 14,
    promptSuffix:
      "A general non-delay 30 mA RCD operates in 28 ms during the current BS 7671 alternating-current field test at IΔn. The result is:",
  },
  {
    sectionId: "section-4",
    variantId: "v4",
    questionNumber: 15,
    promptSuffix:
      "A TN-C-S installation has an existing 6 mm² main protective bond to a confirmed metallic gas service. It is continuous, secure and has no thermal damage, although 10 mm² is now required. What is the current Best Practice Guide 4 treatment?",
  },
  {
    sectionId: "section-4",
    variantId: "v4",
    questionNumber: 16,
    promptSuffix:
      "An EICR finds a missing fire-alarm cable retention clip in a corridor. Typical code:",
  },
  {
    sectionId: "section-4",
    variantId: "v4",
    questionNumber: 17,
    promptSuffix:
      "Periodic inspection finds an EV charger circuit with a Type AC RCD upstream. Typical code:",
  },
  {
    sectionId: "section-4",
    variantId: "v4",
    questionNumber: 18,
    promptSuffix:
      "An EICR records 'CPC connected to Class II appliance terminal — workmanship issue'. Typical code:",
  },
  {
    sectionId: "section-4",
    variantId: "v4",
    questionNumber: 19,
    promptSuffix:
      "An EICR finds an installation where the IP rating of a luminaire in a swimming pool zone is below the requirement. Typical code:",
  },
  {
    sectionId: "section-4",
    variantId: "v4",
    questionNumber: 20,
    promptSuffix:
      "Periodic inspection of a rented dwelling — the inspector finds the fixed wiring is in good condition but a portable appliance has been left plugged in with a damaged flex. The defensible response is:",
  },
  {
    sectionId: "section-4",
    variantId: "v4",
    questionNumber: 21,
    promptSuffix:
      "An EICR finds an old installation with mixed-colours where a warning notice exists. Typical code:",
  },
  {
    sectionId: "section-4",
    variantId: "v4",
    questionNumber: 22,
    promptSuffix: "An RCD test sequence — the inspector should test:",
  },
  {
    sectionId: "section-4",
    variantId: "v4",
    questionNumber: 23,
    promptSuffix:
      "An EICR records 'an extension lead used permanently for fixed appliance'. Typical code:",
  },
  {
    sectionId: "section-4",
    variantId: "v4",
    questionNumber: 24,
    promptSuffix:
      "An EICR finds a circuit where the CPC is sized smaller than required by Reg 543. Typical code:",
  },
  {
    sectionId: "section-4",
    variantId: "v4",
    questionNumber: 25,
    promptSuffix:
      "Periodic inspection finds an installation where the consumer unit is mounted such that arc fault discharge could affect a wooden surface above it. Typical code:",
  },
  {
    sectionId: "section-4",
    variantId: "v4",
    questionNumber: 26,
    promptSuffix:
      "After a TN-S supply was converted to TN-C-S, an existing 6 mm² main bonding conductor remains continuous, secure and free of thermal damage although 10 mm² is now required. The typical code is:",
  },
  {
    sectionId: "section-4",
    variantId: "v4",
    questionNumber: 27,
    promptSuffix:
      "A 20 m circuit uses 1.5 mm² line and 1.0 mm² CPC conductors. Its measured R1+R2 is 0.70 Ω. The defensible interpretation is:",
  },
  {
    sectionId: "section-4",
    variantId: "v4",
    questionNumber: 28,
    promptSuffix:
      "An EICR finds a circuit with an overloaded protective device (e.g. 32 A breaker on 2.5 mm² cable rated 24 A in its current method). Typical code:",
  },
  {
    sectionId: "section-4",
    variantId: "v4",
    questionNumber: 29,
    promptSuffix:
      "Periodic inspection finds an installation where the labels on the consumer unit's MCBs do not match the actual circuits. Typical code:",
  },
  {
    sectionId: "section-4",
    variantId: "v4",
    questionNumber: 30,
    promptSuffix:
      "An EICR is being signed off by the inspector. The defensible last check is:",
  },
  {
    sectionId: "section-4",
    variantId: "v5",
    questionNumber: 1,
    promptSuffix:
      "An EICR finds a TT installation supplied via a 100 mA S-type (delayed) RCD as the main switch, with 30 mA RCDs on individual circuits. Typical observation:",
  },
  {
    sectionId: "section-4",
    variantId: "v5",
    questionNumber: 2,
    promptSuffix:
      "An EICR finds a TT installation with one sound earth rod measuring RA = 50 Ω. Its 30 mA general non-delay RCD operates in 28 ms during the current instrument test at IΔn. Typical observation:",
  },
  {
    sectionId: "section-4",
    variantId: "v5",
    questionNumber: 3,
    promptSuffix:
      "An IR test result shows >999 MΩ between L and E on a 230 V circuit. The interpretation is:",
  },
  {
    sectionId: "section-4",
    variantId: "v5",
    questionNumber: 4,
    promptSuffix:
      "Periodic inspection of a privately rented dwelling — the inspector finds an installation that has had a partial recent rewire (kitchen and bathroom only) with no certificate. The defensible response is:",
  },
  {
    sectionId: "section-4",
    variantId: "v5",
    questionNumber: 5,
    promptSuffix:
      "An EICR records 'Zs measured at the furthest point of the circuit; value 1.5 Ω against table maximum 1.92 Ω'. The defensible response is:",
  },
  {
    sectionId: "section-4",
    variantId: "v5",
    questionNumber: 6,
    promptSuffix:
      "An EICR finds an installation where a circuit's polarity test reveals reversed polarity at one socket only. Typical code:",
  },
  {
    sectionId: "section-4",
    variantId: "v5",
    questionNumber: 7,
    promptSuffix:
      "Periodic inspection finds a TN-C-S domestic installation with a main bonding conductor in 16 mm². Supply earth is 16 mm². Typical observation:",
  },
  {
    sectionId: "section-4",
    variantId: "v5",
    questionNumber: 8,
    promptSuffix:
      "An EICR finds an installation where the IR test result on a 230 V circuit is exactly 1 MΩ. The defensible response is:",
  },
  {
    sectionId: "section-4",
    variantId: "v5",
    questionNumber: 9,
    promptSuffix:
      "Periodic inspection of a swimming pool finds the supplementary equipotential bonding conductor measures continuity of 0.04 Ω. Typical observation:",
  },
  {
    sectionId: "section-4",
    variantId: "v5",
    questionNumber: 10,
    promptSuffix:
      "An EICR finds an installation where the consumer unit is on a wooden backboard with a plastic CU in front of it. Typical code:",
  },
  {
    sectionId: "section-4",
    variantId: "v5",
    questionNumber: 11,
    promptSuffix:
      "An RCD on a TT installation has its trip-time test deferred because of nuisance-trip risk. The defensible response is:",
  },
  {
    sectionId: "section-4",
    variantId: "v5",
    questionNumber: 12,
    promptSuffix:
      "An EICR finds an installation where the only labels on the consumer unit are illegible due to fading. Typical code:",
  },
  {
    sectionId: "section-4",
    variantId: "v5",
    questionNumber: 13,
    promptSuffix:
      "An EICR records 'all RCD tests passed; verified through built-in test buttons and 5× IΔn trip times'. The defensible read is:",
  },
  {
    sectionId: "section-4",
    variantId: "v5",
    questionNumber: 14,
    promptSuffix:
      "An EICR finds an installation where the supply impedance Ze is measured at 0.18 Ω on a TN-C-S supply. Typical observation:",
  },
  {
    sectionId: "section-4",
    variantId: "v5",
    questionNumber: 15,
    promptSuffix:
      "Periodic inspection finds a circuit where the protective device is a BS 3036 rewireable fuse. Typical code:",
  },
  {
    sectionId: "section-4",
    variantId: "v5",
    questionNumber: 16,
    promptSuffix:
      "An EICR finds an installation where the periodic inspection schedule was performed at the agreed sample rate. Two sampled accessories failed. The defensible record is:",
  },
  {
    sectionId: "section-4",
    variantId: "v5",
    questionNumber: 17,
    promptSuffix:
      "An MCB toggle is cracked and cannot be operated reliably for switching or isolation. Live parts remain enclosed. The typical code is:",
  },
  {
    sectionId: "section-4",
    variantId: "v5",
    questionNumber: 18,
    promptSuffix:
      "An EICR records 'a 3 m run of 1.0 mm² T+E feeding a smoke alarm; 6 A protective device'. The defensible observation:",
  },
  {
    sectionId: "section-4",
    variantId: "v5",
    questionNumber: 19,
    promptSuffix:
      "An EICR records 'the loop tester read Zs = 0.42 Ω at the furthest point on a 32 A Type B circuit'. The defensible interpretation:",
  },
  {
    sectionId: "section-4",
    variantId: "v5",
    questionNumber: 20,
    promptSuffix:
      "An EICR finds an installation where the periodic inspection identifies a circuit feeding an outdoor socket without any RCD protection. Typical code:",
  },
  {
    sectionId: "section-4",
    variantId: "v5",
    questionNumber: 21,
    promptSuffix:
      "An EICR records 'a 1.5 mm² 35 m run with 14.5 mV/A/m, carrying 5 A'. Voltage drop:",
  },
  {
    sectionId: "section-4",
    variantId: "v5",
    questionNumber: 22,
    promptSuffix:
      "Periodic inspection finds an installation with multiple SPDs at the consumer unit and at sub-distribution boards. Typical observation:",
  },
  {
    sectionId: "section-4",
    variantId: "v5",
    questionNumber: 23,
    promptSuffix:
      "An EICR finds a circuit where the IR has been tested with the load (lighting controller) connected. The L-N reading is 0.5 MΩ. The defensible interpretation:",
  },
  {
    sectionId: "section-4",
    variantId: "v5",
    questionNumber: 24,
    promptSuffix:
      "An EICR finds an installation where the means of isolating the supply has been compromised (e.g. main switch handle missing). Typical code:",
  },
  {
    sectionId: "section-4",
    variantId: "v5",
    questionNumber: 25,
    promptSuffix:
      "Periodic inspection of a kitchen finds a socket-outlet with no RCD protection in a domestic installation. The cable is concealed in the wall at 80 mm depth. Typical code:",
  },
  {
    sectionId: "section-4",
    variantId: "v5",
    questionNumber: 26,
    promptSuffix:
      "An EICR records 'two of seven sampled lighting points have rust on the metallic accessory backbox. The CPC is connected and continuous; no sign of fault penetration.' Typical code:",
  },
  {
    sectionId: "section-4",
    variantId: "v5",
    questionNumber: 27,
    promptSuffix:
      "An EICR records 'a 32 A Type B device measured Zs = 1.30 Ω cold'. The 80% rule of thumb against table value 1.37 Ω gives:",
  },
  {
    sectionId: "section-4",
    variantId: "v5",
    questionNumber: 28,
    promptSuffix:
      "Periodic inspection of an installation finds a circuit where the polarity at a socket reads OK but the polarity at the consumer unit is reversed. Typical code:",
  },
  {
    sectionId: "section-4",
    variantId: "v5",
    questionNumber: 29,
    promptSuffix:
      "An EICR records 'measured R1+R2 at the furthest point: 0.85 Ω; expected from cable resistance tables: 0.42 Ω'. Defensible response:",
  },
  {
    sectionId: "section-4",
    variantId: "v5",
    questionNumber: 30,
    promptSuffix:
      "An EICR's overall observation 'Satisfactory with C3 improvements recommended' should be communicated to the duty holder via:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v1",
    questionNumber: 1,
    promptSuffix:
      "The gas bonding conductor is present but connected 1.8 m downstream of the gas meter after a tee branch serving a boiler. The pipe enters the building in copper. What is the most defensible answer?",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v1",
    questionNumber: 2,
    promptSuffix:
      "The incoming water service is plastic for the first 3 m inside the building and then changes to copper. No main bonding is connected to the water pipework. Continuity from the MET to copper pipework through incidental paths is 18 k ohm. What should you do?",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v1",
    questionNumber: 3,
    promptSuffix:
      "A domestic consumer unit has Type AC RCCBs supplying circuits with a washing machine, induction hob, LED drivers and a heat-pump tumble dryer. The RCDs pass an AC trip-time test. What is the best EICR observation?",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v1",
    questionNumber: 4,
    promptSuffix:
      "A 10.8 kW shower is supplied by a 32 A Type B MCB using 6 mm2 twin-and-earth cable partly buried in insulation. No thermal damage is visible. If calculation confirms design current exceeds both the protective device rating and effective cable capacity, what is the likely classification?",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v2",
    questionNumber: 1,
    promptSuffix:
      "Documentary evidence behind the codes raised on an EICR sits primarily in:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v2",
    questionNumber: 2,
    promptSuffix: "Earth fault loop impedance (Zs) is measured under:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v2",
    questionNumber: 3,
    promptSuffix:
      "On a TT installation, Ra (electrode resistance) is measured. Ra ≤ 50 / IΔn for a 30 mA RCD gives a theoretical limit of:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v2",
    questionNumber: 4,
    promptSuffix:
      "An EICR finds a domestic installation where the supply earth has been disconnected and the installation continues to function via a back-feed through a bonded gas pipe. Typical code:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v2",
    questionNumber: 5,
    promptSuffix:
      "A circuit's R1+R2 is significantly higher than the calculated expected value. The most likely cause:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v2",
    questionNumber: 6,
    promptSuffix:
      "On a 1.0 mm² T+E cable carrying a typical low-power lighting load, the CPC is:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v2",
    questionNumber: 7,
    promptSuffix:
      "An EICR finds an installation where a 32 A Type B circuit is used to feed a 7 kW EV charger. Typical observation:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v2",
    questionNumber: 8,
    promptSuffix: "The function of main protective bonding is to:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v2",
    questionNumber: 9,
    promptSuffix:
      "An EICR's observation that 'the loop impedance Ze at the origin reads 0.18 Ω; published max for the supply is 0.35 Ω' is:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v2",
    questionNumber: 10,
    promptSuffix:
      "On a ring final circuit, the R1+R2 reading at every socket is 0.5 Ω, except one socket reading 1.0 Ω. The most likely interpretation:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v2",
    questionNumber: 11,
    promptSuffix:
      "On a TT installation, an RCD with IΔn = 30 mA and a measured electrode resistance Ra = 100 Ω gives a touch-voltage at fault of approximately:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v2",
    questionNumber: 12,
    promptSuffix: "The earthing conductor on a TT installation is sized:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v2",
    questionNumber: 13,
    promptSuffix:
      "An EICR identifies a circuit where r1 ≠ rn (significantly different end-to-end resistance). Typical interpretation:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v2",
    questionNumber: 14,
    promptSuffix: "Polarity on a final circuit must be verified at:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v2",
    questionNumber: 15,
    promptSuffix:
      "An EICR finds an installation where the consumer unit's main earthing terminal is bonded to the gas pipe via 10 mm² copper. The supply earth is 16 mm². Typical observation:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v2",
    questionNumber: 16,
    promptSuffix:
      "An EICR identifies an installation where the only RCD is at the consumer unit (single 30 mA across the whole installation). All circuits trip together on any fault. Typical observation:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v2",
    questionNumber: 17,
    promptSuffix: "Earth fault loop impedance test is carried out at:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v2",
    questionNumber: 18,
    promptSuffix:
      "An EICR finds a circuit with measured Zs = 1.50 Ω against a table value of 1.92 Ω. Applying the GN3 80% rule of thumb:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v2",
    questionNumber: 19,
    promptSuffix:
      "An EICR finds an installation where the earth electrode is corroded but Ra still measures 80 Ω with a 30 mA RCD. Typical observation:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v2",
    questionNumber: 20,
    promptSuffix:
      "An EICR finds an installation where supplementary equipotential bonding in a bathroom is missing between the metallic radiator and the metallic wash basin pipework. Typical code:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v2",
    questionNumber: 21,
    promptSuffix:
      "After connected loads are removed and the test method is verified, a 230 V circuit still measures 0.6 MΩ between live conductors connected together and the CPC. The EICR classification is:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v2",
    questionNumber: 22,
    promptSuffix:
      "On a 25 m radial circuit fed by 4.0 mm² T+E carrying 16 A with 10 mV/A/m, voltage drop is approximately:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v2",
    questionNumber: 23,
    promptSuffix:
      "An EICR finds an installation where the only earth on a TT installation is a 1.2 m rod at the back of the property. Ra = 25 Ω. Typical observation:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v2",
    questionNumber: 24,
    promptSuffix:
      "An EICR finds an installation where a 32 A circuit feeds a workshop. Measured R1+R2 = 0.65 Ω, Ze = 0.20 Ω. Calculated Zs:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v2",
    questionNumber: 25,
    promptSuffix:
      "Periodic inspection's main duty under EAWR is summarised as:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v3",
    questionNumber: 1,
    promptSuffix:
      "A TN-C-S installation has an existing 6 mm² main protective bonding conductor where 10 mm² is now required. It is continuous, secure and shows no thermal damage. What is the current Best Practice Guide 4 treatment?",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v3",
    questionNumber: 2,
    promptSuffix:
      "On a ring final circuit, the inspector cross-connects L and N and measures the resistance at each socket on Step 2. The expected reading at each socket is:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v3",
    questionNumber: 3,
    promptSuffix: "Earth fault loop impedance is measured to verify:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v3",
    questionNumber: 4,
    promptSuffix:
      "An EICR finds a TT installation where the earth electrode is shared with another property's installation. Typical observation:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v3",
    questionNumber: 5,
    promptSuffix:
      "A 6 A Type B MCB has a BS 7671 Table 41.3 maximum Zs of approximately 7.28 Ω. Applying the 80% ambient-measurement rule of thumb gives:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v3",
    questionNumber: 6,
    promptSuffix:
      "An IR test result of 0.4 MΩ on a domestic ring final circuit is:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v3",
    questionNumber: 7,
    promptSuffix: "On a TN-C-S installation, the supply combines:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v3",
    questionNumber: 8,
    promptSuffix:
      "An EICR finds an installation where the broken neutral on a TN-C-S supply could cause exposed services to rise to line potential. The protective measure is:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v3",
    questionNumber: 9,
    promptSuffix:
      "An EICR finds an installation where the consumer unit's MET has only one bonded service connection (gas) and the water service is non-metallic. Typical observation:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v3",
    questionNumber: 10,
    promptSuffix:
      "On a 32 A radial socket circuit fed by 4.0 mm² T+E, the typical R1+R2 for a 25 m run is approximately:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v3",
    questionNumber: 11,
    promptSuffix:
      "An EICR finds an installation where the supply has been changed from TN-C-S to TT (e.g. due to broken-PEN concerns) but the bonding has not been removed. Typical observation:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v3",
    questionNumber: 12,
    promptSuffix: "An RCD test sequence on a 30 mA RCBO at 1× IΔn:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v3",
    questionNumber: 13,
    promptSuffix:
      "An EICR finds a circuit feeding an outdoor swimming pool. Typical RCD requirement:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v3",
    questionNumber: 14,
    promptSuffix:
      "A 20 A Type C MCB has a Table 41.3 maximum Zs of about 1.09 Ω and a measured ambient Zs of 0.95 Ω. The initial assessment is:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v3",
    questionNumber: 15,
    promptSuffix:
      "Earth fault loop impedance Ze on a domestic TT supply is measured at 250 Ω. The defensible response:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v3",
    questionNumber: 16,
    promptSuffix:
      "An EICR finds a circuit with the line conductor connected to the earth pin of a socket. Typical code:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v3",
    questionNumber: 17,
    promptSuffix:
      "Periodic inspection of an installation finds 'r1, rn and r2 readings on a ring all measure within 5% of each other on a 2.5 mm² T+E ring'. The defensible interpretation:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v3",
    questionNumber: 18,
    promptSuffix:
      "An IR test gives readings of L-N: 100 MΩ; L-E: 100 MΩ; N-E: 0.5 MΩ. Defensible interpretation:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v3",
    questionNumber: 19,
    promptSuffix:
      "An EICR finds an installation where supplementary bonding in a kitchen is missing between the metal sink and the metal pipework. Typical code (current edition where 30 mA RCD covers all socket circuits):",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v3",
    questionNumber: 20,
    promptSuffix:
      "A radial 32 A circuit fed by 6 mm² T+E: typical R1+R2 for a 30 m run, where 6 mm² T+E has a 2.5 mm² CPC:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v3",
    questionNumber: 21,
    promptSuffix:
      "An EICR finds a circuit where the line and CPC have been reversed at a socket. Typical code:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v3",
    questionNumber: 22,
    promptSuffix:
      "An EICR finds an installation where a domestic circuit has neither RCD protection nor a CPC. The cable is concealed in the wall at 30 mm depth. Typical code:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v3",
    questionNumber: 23,
    promptSuffix:
      "On a TT installation, Ra increases over time due to soil drying, corrosion or damage. Periodic inspection should:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v3",
    questionNumber: 24,
    promptSuffix: "An EICR's Schedule of Inspections covers:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v3",
    questionNumber: 25,
    promptSuffix:
      "Under current BS 7671 field verification, a general non-delay RCD tested with alternating current at IΔn requires:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v4",
    questionNumber: 1,
    promptSuffix:
      "An EICR records 'continuity test on supplementary bonding in a bathroom: 0.10 Ω against 0.05 Ω guideline'. Defensible response:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v4",
    questionNumber: 2,
    promptSuffix:
      "An EICR finds an installation where the consumer unit is on a wooden enclosure, plastic, with no metalwork separation between the breakers and the wood. Typical code (current edition):",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v4",
    questionNumber: 3,
    promptSuffix:
      "On a ring final circuit, the inspector cross-connects L and CPC for Step 3 of the test. The expected reading at each socket is:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v4",
    questionNumber: 4,
    promptSuffix:
      "An EICR finds an installation where the supply earth is broken at the cut-out (i.e. only the neutral is intact). The installation continues to function. Typical code:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v4",
    questionNumber: 5,
    promptSuffix:
      "An EICR finds a circuit where the IR test result is 'between phase and earth, and between neutral and earth' both 0.4 MΩ. Defensible interpretation:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v4",
    questionNumber: 6,
    promptSuffix:
      "On a 32 A Type B MCB, the BS 7671 Table 41.3 maximum Zs at full operating temperature is approximately:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v4",
    questionNumber: 7,
    promptSuffix:
      "An EICR identifies a ring final circuit where the R1+R2 readings are 0.5 Ω at most sockets but 2.0 Ω at one socket. The most likely interpretation:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v4",
    questionNumber: 8,
    promptSuffix:
      "An EICR observation that 'the consumer unit is fed via a fused spur at 13 A from a ring final circuit' is typically coded:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v4",
    questionNumber: 9,
    promptSuffix:
      "Earth electrode resistance Ra on a TT installation should be:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v4",
    questionNumber: 10,
    promptSuffix:
      "An EICR identifies a circuit where the earthing conductor is undersized (4 mm² where the supply earth is 16 mm² and CPCs are 2.5 mm²). Typical code:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v4",
    questionNumber: 11,
    promptSuffix:
      "Periodic inspection of a ring final identifies r1 = rn = 0.40 Ω, r2 = 0.50 Ω. The 2.5 mm² T+E with 1.5 mm² CPC ratio of r2/r1 should be:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v4",
    questionNumber: 12,
    promptSuffix:
      "An EICR finds an installation where the loop tester reads Zs = 0.18 Ω at the consumer unit (approximately equal to Ze) and Zs = 1.20 Ω at the furthest point of a 32 A Type B circuit. Typical observation:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v4",
    questionNumber: 13,
    promptSuffix:
      "An EICR finds an installation where the consumer unit's earth bar is not linked to the supply's earthing terminal. Typical code:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v4",
    questionNumber: 14,
    promptSuffix:
      "When Appendix 4 provides a tabulated cable value in mV/A/m, which expression gives the circuit voltage drop in volts?",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v4",
    questionNumber: 15,
    promptSuffix:
      "Supplementary bonding is required in a bathroom because the omission conditions are not met, but the installed conductor does not connect the required exposed- and extraneous-conductive-parts together. Typical code:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v4",
    questionNumber: 16,
    promptSuffix:
      "An EICR records 'IR test results: all circuits >100 MΩ at 500 V DC'. The defensible interpretation:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v4",
    questionNumber: 17,
    promptSuffix:
      "An EICR records 'no functional earth electrode on a TT installation; the only earth path is via a metallic water pipe'. Typical code:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v4",
    questionNumber: 18,
    promptSuffix:
      "Periodic inspection of an installation finds 'cable colours mixed within a single circuit (some old red/black, some new brown/blue)' with no warning notice. Typical code:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v4",
    questionNumber: 19,
    promptSuffix:
      "An EICR finds a 6 A radial circuit feeding a smoke detector network. Measured R1+R2 = 0.9 Ω, Ze = 0.20 Ω, RCD = 30 mA. Type B 6 A table Zs = 7.67 Ω. The result:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v4",
    questionNumber: 20,
    promptSuffix:
      "An EICR finds an installation where a circuit is protected by an MCB rated higher than the cable it protects (e.g. 32 A device on cable rated 24 A). Typical code:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v4",
    questionNumber: 21,
    promptSuffix:
      "On a TN-C-S supply, the supply earth terminal at the cut-out is bonded to:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v4",
    questionNumber: 22,
    promptSuffix:
      "An EICR finds an installation where supplementary bonding has been installed in a kitchen but the kitchen has no extraneous-conductive-parts that need bonding. The defensible response:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v4",
    questionNumber: 23,
    promptSuffix:
      "An EICR records 'CPC bonded to the metallic enclosure of the consumer unit at the appropriate terminal'. The defensible read:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v4",
    questionNumber: 24,
    promptSuffix:
      "An EICR finds an installation where a junction box has been buried in a wall with no access. Typical code:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v4",
    questionNumber: 25,
    promptSuffix:
      "An EICR's overall assessment is determined by the codes raised. The pass/fail logic is:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v5",
    questionNumber: 1,
    promptSuffix:
      "An EICR finds an installation where the supply impedance Ze is measured as 0.20 Ω TN-C-S, with an R1+R2 on a 32 A circuit of 0.45 Ω. Calculated Zs cold:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v5",
    questionNumber: 2,
    promptSuffix:
      "An EICR records 'all CPCs are continuous and the R1+R2 readings agree with the calculated values for the cable lengths'. The defensible interpretation:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v5",
    questionNumber: 3,
    promptSuffix:
      "An EICR identifies a TN-C-S installation where the bonding to gas, water and structural steel is sized at 10 mm² and the supply earth is 16 mm². Typical observation:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v5",
    questionNumber: 4,
    promptSuffix:
      "An EICR finds a circuit where measured Zs is 0.65 Ω. The 80% of table value for the device is 0.92 Ω. The result:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v5",
    questionNumber: 5,
    promptSuffix: "On a 1.5 mm² T+E lighting circuit, the CPC is:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v5",
    questionNumber: 6,
    promptSuffix:
      "An EICR records 'the ring final circuit r1 / rn / r2 readings are 0.40 / 0.42 / 0.68 Ω'. The 2.5 mm² T+E ratios:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v5",
    questionNumber: 7,
    promptSuffix:
      "An EICR finds a circuit where the IR test result is 12 MΩ on a 230 V circuit. The defensible response:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v5",
    questionNumber: 8,
    promptSuffix:
      "Periodic inspection of an installation finds the supplementary bonding in a swimming pool zone has continuity of 0.06 Ω. Defensible response:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v5",
    questionNumber: 9,
    promptSuffix:
      "An EICR identifies a TT installation where the earth electrode is in good condition but Ra has gradually increased from 50 Ω (5 years ago) to 250 Ω now. Typical observation:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v5",
    questionNumber: 10,
    promptSuffix:
      "An EICR finds an installation where the consumer unit has a fully functional 30 mA RCBO on each circuit. Typical observation:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v5",
    questionNumber: 11,
    promptSuffix:
      "An EICR finds an installation where the supplementary bonding in a sauna has been installed correctly but the conductor is exposed to the heat from the heater. Typical observation:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v5",
    questionNumber: 12,
    promptSuffix:
      "An EICR records 'the ring final circuit measurements are r1 = 0.40 Ω, rn = 0.40 Ω, r2 = 0.40 Ω'. The 2.5 mm² T+E with 1.5 mm² CPC interpretation:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v5",
    questionNumber: 13,
    promptSuffix:
      "An EICR finds an installation where the polarity at the consumer unit is correct but a single socket downstream is reversed. Typical code:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v5",
    questionNumber: 14,
    promptSuffix:
      "An EICR finds a 32 A circuit feeding an electric shower. Measured Zs = 0.45 Ω; table 41.3 max for the device = 1.37 Ω; 80% = 1.10 Ω. The result:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v5",
    questionNumber: 15,
    promptSuffix:
      "An EICR observation that 'the consumer unit's main earthing terminal is on a fully terminated 16 mm² conductor to the gas pipe' is typically:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v5",
    questionNumber: 16,
    promptSuffix:
      "Periodic inspection of an EV charger circuit finds a Type B RCD upstream of a 7 kW unit. Typical observation:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v5",
    questionNumber: 17,
    promptSuffix:
      "An EICR records 'IR test results: L-N >999 MΩ, L-E >999 MΩ, N-E 0.5 MΩ'. The defensible interpretation:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v5",
    questionNumber: 18,
    promptSuffix: "On a TN-C-S installation, broken-PEN risk requires:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v5",
    questionNumber: 19,
    promptSuffix:
      "A safely obtained external earth fault loop impedance Ze at the origin is 0.18 Ω on a TN-C-S supply. The defensible interpretation is:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v5",
    questionNumber: 20,
    promptSuffix:
      "On a 6 A Type B MCB, the table Zs maximum (BS 7671 Table 41.3) is approximately:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v5",
    questionNumber: 21,
    promptSuffix:
      "An EICR identifies a fixed appliance fed via a 13 A FCU on a ring final circuit. Typical observation:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v5",
    questionNumber: 22,
    promptSuffix:
      "An EICR finds an installation where supplementary bonding in a kitchen has been installed using 4 mm² conductor. Typical observation:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v5",
    questionNumber: 23,
    promptSuffix:
      "An EICR records 'the inspector measured Zs at three points on a 32 A ring: at the consumer unit, at the midpoint, and at the furthest point. All readings agree within 5%'. Defensible interpretation:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v5",
    questionNumber: 24,
    promptSuffix:
      "An EICR identifies a TT installation where the earth electrode is bonded to the consumer unit's earth bar via a 10 mm² conductor with mechanical protection. Typical observation:",
  },
  {
    sectionId: "section-5-merged-periodic-earthing",
    variantId: "v5",
    questionNumber: 25,
    promptSuffix: "The fundamental purpose of the EICR is:",
  },
];

function clean(value: string): string {
  return value
    .replace(/…|\.\.\./g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function shortClaim(value: string): string {
  const compact = clean(value).replace(/[.!?:;]+$/g, "");
  return compact;
}

function proposal(value: string, prompt = ""): string {
  const claim = shortClaim(value);
  if (/^(C1|C2|C3|FI)$/i.test(claim)) {
    return `This option assigns ${claim.toUpperCase()}.`;
  }
  const lowerClaim = claim.charAt(0).toLowerCase() + claim.slice(1);
  const patterns: readonly [RegExp, (detail: string) => string][] = [
    [
      /^always\s+(.+)/i,
      (detail) =>
        `The word “always” overstates this: ${detail} depends on the applicable limit and the condition actually measured.`,
    ],
    [
      /^never\s+(.+)/i,
      (detail) =>
        `A blanket refusal to ${detail} ignores cases where the stated safety conditions make it necessary.`,
    ],
    [
      /^cannot be\s+(.+)/i,
      (detail) =>
        `Declaring that the item cannot be ${detail} ignores the evidence the inspection can establish.`,
    ],
    [
      /^(?:defensible|acceptable) only\s+(.+)/i,
      (detail) =>
        `Restricting this to ${detail.replace(/^on\s+/i, "")} invents a condition that the electrical assessment does not contain.`,
    ],
    [
      /^only\s+(.+)/i,
      (detail) =>
        `Limiting the decision to ${detail} leaves out other evidence and conditions that must also be checked.`,
    ],
    [
      /^indefensible\s*[—–-]?\s*(.*)/i,
      (detail) =>
        `Calling the arrangement indefensible${detail ? ` because ${detail}` : ""} assumes a restriction that the technical rules do not create.`,
    ],
    [
      /^correct\s*[—–-]?\s*(.*)/i,
      (detail) =>
        `Calling the statement correct${detail ? ` because ${detail}` : ""} relies on the wrong technical premise.`,
    ],
    [
      /^yes\s*[—–-]?\s*(.*)/i,
      (detail) =>
        `Answering yes${detail ? ` because ${detail}` : ""} overlooks a safety condition in the scenario.`,
    ],
    [
      /^no\s*[—–-]?\s*(.*)/i,
      (detail) =>
        `Answering no${detail ? ` because ${detail}` : ""} overlooks what the inspection evidence can establish.`,
    ],
    [
      /^pass(?:es)?\s*[—–-]?\s*(.*)/i,
      (detail) =>
        detail.startsWith("and ")
          ? `Calling this a pass and ${detail.slice(4)} combines the wrong result with the wrong follow-up.`
          : `Calling this a pass${detail ? ` because ${detail}` : ""} uses the wrong acceptance test.`,
    ],
    [
      /^fail(?:s)?\s*[—–-]?\s*(.*)/i,
      (detail) =>
        detail.startsWith("and ")
          ? `Calling this a failure and ${detail.slice(4)} combines the wrong result with an unjustified classification.`
          : `Calling this a failure${detail ? ` because ${detail}` : ""} uses the wrong acceptance test.`,
    ],
    [
      /^skip without record/i,
      () =>
        "Omitting the item without a record hides the missing evidence from every later reader.",
    ],
    [
      /^skip without comment/i,
      () =>
        "Omitting the item without comment makes the report appear more complete than the work.",
    ],
    [
      /^skip and continue/i,
      () =>
        "Skipping the adverse finding and continuing would leave its risk and likely wider pattern unexamined.",
    ],
    [
      /^skip the rest/i,
      () =>
        "Leaving the rest of the affected group untested ignores evidence that the original sample has failed.",
    ],
    [
      /^skip the test silently/i,
      () =>
        "Silently omitting the test hides a known gap in the report's evidence.",
    ],
    [
      /^(?:skip|ignore|disregard)\s+(.+)/i,
      (detail) =>
        `Ignoring ${detail} would hide relevant evidence instead of recording and dealing with it.`,
    ],
    [
      /^wait\s+(.+)/i,
      (detail) =>
        `Waiting ${detail} would delay the assessment or corrective action beyond the point justified by the risk.`,
    ],
    [
      /^test only\s+(.+)/i,
      (detail) =>
        `Testing only ${detail} would leave the rest of the relevant electrical evidence unverified.`,
    ],
    [
      /^test\s+(.+)/i,
      (detail) =>
        `Testing ${detail} would not establish the particular property or safety condition asked about here.`,
    ],
    [
      /^replace\s+(.+)/i,
      (detail) =>
        `Replacing ${detail} is disproportionate unless inspection has shown that targeted repair cannot remove the danger.`,
    ],
    [
      /^treat\s+(.+)/i,
      (detail) =>
        `Treating ${detail} applies a category or assumption instead of assessing the installation's real use and condition.`,
    ],
    [
      /^apply\s+(.+)/i,
      (detail) =>
        `Applying ${detail} imports a threshold or rule that belongs to a different circumstance.`,
    ],
    [
      /^use\s+(.+)/i,
      (detail) =>
        `Using ${detail} substitutes that assumption for the required electrical evidence.`,
    ],
    [
      /^sample\s+(.+)/i,
      (detail) =>
        `Sampling ${detail} would be arbitrary unless that population and extent are representative, justified and recorded.`,
    ],
    [
      /^record\s+(.+)/i,
      (detail) =>
        `Recording ${detail} would misstate what was actually inspected, tested or observed.`,
    ],
    [
      /^code\s+(.+)/i,
      (detail) =>
        `Coding the finding as ${detail} cannot be justified unless its real shock, burn or fire risk matches that classification.`,
    ],
    [
      /^issue\s+(.+)/i,
      (detail) =>
        `Issuing ${detail} would state an outcome that has not been established by a C1 or C2 finding.`,
    ],
    [
      /^refuse\s+(.+)/i,
      (detail) =>
        `Refusing ${detail} would abandon useful inspection work even though the scope or follow-up can still be managed safely.`,
    ],
    [
      /^refer\s+(.+)/i,
      (detail) =>
        `Referring ${detail} elsewhere would not complete the inspector's own assessment of the consumer's installation.`,
    ],
    [
      /^notify\s+(.+)/i,
      (detail) =>
        `Notifying ${detail} may support follow-up, but it does not replace the immediate inspection, classification or make-safe action required here.`,
    ],
    [
      /^just\s+(.+)/i,
      (detail) =>
        `Doing just ${detail} would omit other evidence needed for a defensible conclusion.`,
    ],
  ];
  for (const [pattern, explain] of patterns) {
    const match = claim.match(pattern);
    if (match) return explain(clean(match[1] ?? ""));
  }
  const context = prompt.toLowerCase();
  if (
    /^£?\d+(?:\.\d+)?\s*(?:%|ms|s|v|a|ma|ω|mω|years?|months?)$/i.test(claim)
  ) {
    return `Using ${lowerClaim} would apply the wrong numerical limit or calculated result to the stated test.`;
  }
  if (
    /interval|years?|months?|frequency|next inspection|cycle|change of use/.test(
      context,
    )
  ) {
    return `${claim} sets the inspection timing from a fixed assumption instead of the premises' actual use, condition and risk.`;
  }
  if (
    /sampling|sample|extent|limitation|section d|100%.*tested/.test(context)
  ) {
    return `${claim} would misstate or arbitrarily narrow the evidence covered by the recorded inspection scope.`;
  }
  if (/live|isolation|dead test|energised|eawr/.test(context)) {
    return `${claim} would bypass the safe-isolation priority or the three legal conditions that must justify live work.`;
  }
  if (/test sequence|test sequences|initial verification/.test(context)) {
    return `${claim} confuses the prescribed initial-verification order with the risk-led selection of tests on an installation already in service.`;
  }
  if (/rcd|rcbo|residual|trip/.test(context)) {
    return `${claim} applies the wrong RCD function, test level or operating-time criterion to this device.`;
  }
  if (/insulation|\bir\b/.test(context)) {
    return `${claim} uses the wrong conductor combination, test condition or insulation-resistance threshold.`;
  }
  if (/ring final|\br1\b|\brn\b|\br2\b/.test(context)) {
    return `${claim} misreads what the ring end-to-end or cross-connection resistance pattern is proving.`;
  }
  if (/\bzs\b|\bze\b|loop impedance|disconnection/.test(context)) {
    return `${claim} compares the wrong part of the earth-fault loop or uses the wrong protective-device limit.`;
  }
  if (/earth|bond|\btt\b|tn-c-s|pen conductor|cpc/.test(context)) {
    return `${claim} confuses the fault-current path, equipotential bonding function or conductor requirement being assessed.`;
  }
  if (/polarity|line and neutral|line and cpc/.test(context)) {
    return `${claim} misidentifies which conductors and terminals must preserve correct polarity and fault protection.`;
  }
  if (/landlord|tenant|rented|ess prs|local authority/.test(context)) {
    return `${claim} applies the wrong rented-sector duty, deadline or person responsible for the report.`;
  }
  if (/owner-occupied|dwelling|b&b|commercial bakery/.test(context)) {
    return `${claim} classifies the premises from its old label instead of the domestic and workplace activity actually taking place now.`;
  }
  if (/cannot inspect|access|hospital ward/.test(context)) {
    return `${claim} mishandles an access restriction instead of arranging controlled access and recording exactly what remains unverified.`;
  }
  if (/best practice guide 4/.test(context)) {
    return `${claim} treats Best Practice Guide 4 as a design manual even though its purpose is consistent EICR observation classification.`;
  }
  if (
    /c1|c2|c3|\bfi\b|code|classification|satisfactory|unsatisfactory/.test(
      context,
    )
  ) {
    return `${claim} misuses the EICR outcome or classification without evidence of the danger that code represents.`;
  }
  if (/eicr|certificate|schedule|report|record|documentation/.test(context)) {
    return `${claim} assigns the wrong document role: an EICR reports existing condition, while installation certification and test schedules serve separate purposes.`;
  }
  if (
    /voltage.?drop|cable|conductor|protective device|current-carrying/.test(
      context,
    )
  ) {
    return `${claim} uses the wrong circuit quantity or ignores the coordination between load, cable and protective device.`;
  }
  if (
    /workplace|part p|riddor|legislation|regulation|statutory/.test(context)
  ) {
    return `${claim} assigns the duty to legislation or an authority that governs a different part of electrical safety.`;
  }
  if (
    /purpose|maintenance|condition assessment|periodic inspection/.test(context)
  ) {
    return `${claim} gives the EICR a job it does not perform; it is a dated condition assessment, not a fault-free guarantee, design certificate or commercial instruction.`;
  }
  return `UNSUPPORTED OPTION LEAD: ${lowerClaim}.`;
}

function extractCode(value: string): "C1" | "C2" | "C3" | "FI" | undefined {
  return value.match(/\b(C1|C2|C3|FI)\b/i)?.[1]?.toUpperCase() as
    "C1" | "C2" | "C3" | "FI" | undefined;
}

function classificationReason(
  prompt: string,
  wrongText: string,
  correctText: string,
): string | undefined {
  const classificationQuestion =
    /classification|classify|typical code|defensible code|typical observation|which code|code is|eicr classification/i.test(
      prompt,
    );
  const directCodeChoice = /^(C1|C2|C3|FI)(?:\b|\s|[-–—:])/i.test(wrongText);
  if (!classificationQuestion && !directCodeChoice) return undefined;
  const wrongCode = extractCode(wrongText);
  if (!wrongCode) return undefined;
  const correctCode = extractCode(correctText);

  if (wrongCode === "C1") {
    if (correctCode === "C2") {
      return "C1 is reserved for danger present now, such as accessible live parts. This finding establishes potential danger requiring urgent remedy, but not that immediate condition.";
    }
    if (correctCode === "C3") {
      return "C1 would greatly overstate the finding. The facts describe an improvement to present-day safety, not accessible live parts or another danger that exists immediately.";
    }
    if (correctCode === "FI") {
      return "C1 cannot be assigned before the suspected danger is established. Further investigation is needed because the available evidence does not yet show danger present now.";
    }
    return "C1 needs evidence of immediate danger, not age, inconvenience, missing paperwork or a difference from the latest design rules. That evidence is absent from this choice.";
  }

  if (wrongCode === "C2") {
    if (correctCode === "C1") {
      return "C2 would understate a danger that is already present. Accessible live metal or another immediate hazard requires make-safe action now, not only urgent future remediation.";
    }
    if (correctCode === "C3") {
      return "C2 requires an observed condition capable of causing danger. This situation calls for a safety improvement, but the stated facts do not establish that potential danger.";
    }
    if (correctCode === "FI") {
      return "C2 assumes potential danger has already been established. Here the missing investigation is needed precisely because the safety significance cannot yet be classified.";
    }
    return "C2 is not a penalty for old equipment, incomplete records or non-compliance alone. The inspector needs an actual potentially dangerous condition before using it.";
  }

  if (wrongCode === "C3") {
    if (correctCode === "C1") {
      return "C3 is only an improvement recommendation and would seriously understate danger present now. Immediate make-safe action takes priority over planned upgrading.";
    }
    if (correctCode === "C2") {
      return "C3 would understate a condition that can cause shock, burn or fire. Potential danger makes the report unsatisfactory and calls for urgent skilled remediation.";
    }
    if (correctCode === "FI") {
      return "C3 assumes the installation can remain satisfactory with an improvement. A specific unresolved safety concern instead needs investigation before that conclusion is possible.";
    }
    return "C3 is used for a genuine current-safety improvement, not as a label for every observation. Harmless age, sound former practice or missing historic paperwork may need no code.";
  }

  if (correctCode === "C1" || correctCode === "C2") {
    return "FI is for a specific possible danger whose classification cannot yet be determined. The stated evidence already establishes the danger level, so delaying the code would hide useful urgency.";
  }
  if (correctCode === "C3") {
    return "FI needs a defined unresolved concern that may reveal danger. The facts already support a known improvement recommendation, so further investigation is not the appropriate classification.";
  }
  return "FI is not shorthand for every missing test, inaccessible item or uncertainty. It needs a specific observed concern that may reveal danger and cannot be classified within the agreed inspection.";
}

function documentReason(option: string): string | undefined {
  const text = option.toLowerCase();
  if (text.split(/\s+/).length > 10) return undefined;
  if (/electrical installation condition report|\beicr\b/.test(text)) {
    return "An EICR reports the condition of an existing installation for continued service; it cannot certify the design and construction of newly installed work.";
  }
  if (/minor electrical installation works|\bmeiwc\b|minor works/.test(text)) {
    return "A Minor Works Certificate is limited to an addition or alteration that does not provide a new circuit, so it cannot document a new circuit or replace an EICR.";
  }
  if (/electrical installation certificate|\beic\b/.test(text)) {
    return "An Electrical Installation Certificate certifies new installation work, including a new circuit; it is not the periodic condition report for an existing installation.";
  }
  if (/schedule of test results/.test(text)) {
    return "The Schedule of Test Results holds circuit details and measured values; it cannot replace the visual inspection record, scope, observations or overall assessment.";
  }
  if (/schedule of inspections/.test(text)) {
    return "The Schedule of Inspections records visual checks; continuity, insulation, loop and RCD measurements belong on the Schedule of Test Results.";
  }
  if (/cover letter/.test(text)) {
    return "A cover letter is optional supporting communication; it cannot replace, recode or certify the formal EICR and its schedules.";
  }
  if (/duty holder'?s signature|client'?s signature/.test(text)) {
    return "A recipient's signature may acknowledge scope or receipt, but it is not test evidence and cannot transfer the competent inspector's responsibility for the assessment.";
  }
  return undefined;
}

function authorityReason(option: string): string | undefined {
  const text = option.toLowerCase();
  if (/health and safety executive|\bhse\b/.test(text)) {
    return "The HSE regulates workplace health and safety, including enforcement of the Electricity at Work Regulations. It is not the data-protection regulator, care-quality regulator or the local authority that administers the private-rented-sector EICR process.";
  }
  if (/information commissioner|\bico\b/.test(text)) {
    return "The ICO regulates information rights and data protection. It has no role in selecting EICR intervals, classifying electrical danger or enforcing workplace electrical maintenance.";
  }
  if (/care quality commission|\bcqc\b/.test(text)) {
    return "The CQC regulates the quality and safety of registered health and social-care services. It does not set BS 7671 test methods or act as the general electrical-safety enforcing authority.";
  }
  if (/\bdno\b|distribution network operator/.test(text)) {
    return "The DNO deals with distributor-owned supply equipment and network faults. It does not replace the inspector's duty to assess, record and control defects within the consumer's installation.";
  }
  if (/building regulations part p|\bpart p\b/.test(text)) {
    return "Part P applies to electrical installation work in or associated with dwellings in England. It is not the workplace maintenance duty or the legal basis for every periodic EICR.";
  }
  if (/\briddor\b/.test(text)) {
    return "RIDDOR governs reporting specified work-related injuries and dangerous occurrences. It does not set electrical inspection intervals, test methods or EICR classifications.";
  }
  if (/electricity at work|\beawr\b/.test(text)) {
    return "EAWR imposes workplace duties such as maintaining systems to prevent danger and tightly controlling live work. It does not provide the rented-home reporting timetable or a design certificate.";
  }
  if (/ess prs|private rented|rented-sector regulations/.test(text)) {
    return "The rented-sector regulations set landlord inspection, supply and remedial duties for covered homes. They do not govern every workplace, owner-occupied home or technical test method.";
  }
  if (/local authority/.test(text)) {
    return "A local authority enforces the rented-sector rules and can request records or take specified action. It does not select circuit test values or repair distributor-owned equipment.";
  }
  return undefined;
}

function rentedReportSupplyReason(
  prompt: string,
  option: string,
): string | undefined {
  if (!/new tenant|moves? in|supply the eicr|report is supplied/i.test(prompt))
    return undefined;
  const text = option.toLowerCase();
  if (/during the first month/.test(text)) {
    return "Supplying the report during the first month is too late for a new tenant. They must receive the EICR before occupying the property, so they know the recorded electrical condition before the tenancy begins.";
  }
  if (/only if asked/.test(text)) {
    return "A new tenant does not have to request the EICR. The landlord has a proactive duty to provide it before the tenant occupies the dwelling.";
  }
  if (/cover page/.test(text)) {
    return "The cover page omits the observations, schedules, test results, extent and limitations that make the EICR useful. The duty is to provide the complete report, not a summary page.";
  }
  if (/tenant moves in/.test(text)) {
    return "The move-in date is relevant only to the separate duty to give a new tenant the report before occupation. It is not the date that changes a completed report's technical findings or starts every other deadline.";
  }
  return undefined;
}

function instrumentReason(option: string): string | undefined {
  const text = option.toLowerCase();
  if (/insulation resistance tester|\bir tester\b|500 v dc/.test(text)) {
    return "An insulation-resistance tester assesses separation between conductors at a high DC test voltage. It is not the instrument for low-ohm continuity, live loop impedance or RCD timing.";
  }
  if (/low-resistance ohmmeter|continuity tester/.test(text)) {
    return "A low-resistance ohmmeter verifies conductor continuity and small resistance values on an isolated circuit. It cannot perform an energised loop test or time an RCD.";
  }
  if (/loop tester/.test(text)) {
    return "A loop tester derives earth-fault loop impedance from an energised test. It does not measure insulation resistance or replace the dead continuity tests that establish conductor paths.";
  }
  if (/rcd tester/.test(text)) {
    return "An RCD tester applies a controlled residual current and measures operation. It does not establish cable continuity, conductor size or insulation resistance.";
  }
  if (/clamp meter/.test(text)) {
    return "A clamp meter measures current without opening the conductor and can help trace leakage or diverted current. It does not by itself prove insulation or protective-conductor continuity.";
  }
  return undefined;
}

type NumericValue = {
  value: number;
  display: string;
  unit: string;
  dimension: string;
  normalized: number;
};

function numericValue(text: string): NumericValue | undefined {
  const cleaned = clean(text);
  const range = cleaned.match(
    /(\d+(?:\.\d+)?)\s*[-–]\s*(\d+(?:\.\d+)?)\s*(years?|months?|days?)/i,
  );
  const match =
    range ??
    cleaned.match(
      /(?:£\s*)?(\d+(?:\.\d+)?)\s*(kΩ|MΩ|Ω|mV|mA|kA|mm²|ms|years?|months?|days?|%|V|A|m|s)(?=\s|$|[),;:])/i,
    );
  if (!match) return undefined;
  const value = Number(range ? match[2] : match[1]);
  const unit = (range ? match[3] : match[2]).toLowerCase();
  const conversion: Record<string, readonly [string, number]> = {
    kω: ["resistance", 1_000],
    mω: ["resistance", 1_000_000],
    ω: ["resistance", 1],
    mv: ["voltage", 0.001],
    v: ["voltage", 1],
    ma: ["current", 0.001],
    ka: ["current", 1_000],
    a: ["current", 1],
    ms: ["time", 0.001],
    s: ["time", 1],
    year: ["interval", 12],
    years: ["interval", 12],
    month: ["interval", 1],
    months: ["interval", 1],
    day: ["interval", 1 / 30],
    days: ["interval", 1 / 30],
    "%": ["percentage", 1],
    "mm²": ["area", 1],
    m: ["length", 1],
  };
  const [dimension, factor] = conversion[unit] ?? [unit, 1];
  return {
    value,
    display: range
      ? `${match[1]}-${match[2]} ${match[3]}`
      : `${match[1]} ${match[2]}`,
    unit,
    dimension,
    normalized: value * factor,
  };
}

function calculationRule(prompt: string): string {
  const text = prompt.toLowerCase();
  if (/voltage drop|mv\/a\/m/.test(text)) {
    return "Multiply mV/A/m by current and route length, then divide by 1000.";
  }
  if (/80%|rule of thumb/.test(text)) {
    return "The ambient screening value is the full-temperature table value multiplied by 0.8.";
  }
  if (/calculated zs|estimate zs|ze \+|r1\+r2/.test(text)) {
    return "Calculated loop impedance adds Ze and R1+R2 before the temperature comparison.";
  }
  if (/implied ze|ze is approximately/.test(text)) {
    return "The implied external component is Zs minus R1+R2, using comparable readings.";
  }
  if (/50\s*\/\s*i|theoretical limit|touch.?voltage|ra/.test(text)) {
    return "For the stated TT check, apply RA × IΔn ≤ 50 V with current expressed in amperes.";
  }
  if (/r1|rn|r2|resistance|cpc/.test(text)) {
    return "Use each conductor's resistance per metre, its length and any parallel-path effect stated in the test method.";
  }
  if (/rcd|iδn|iΔn|trip/.test(prompt)) {
    return "Use the current test level and operating-time limit for the stated RCD type, not a value from an obsolete or different test.";
  }
  return "Use every stated quantity with consistent units before comparing the result with its permitted boundary.";
}

function numericReason(
  prompt: string,
  option: string,
  correctOption: string,
): string | undefined {
  const wrong = numericValue(option);
  const correct = numericValue(correctOption);
  if (!wrong || !correct || wrong.dimension !== correct.dimension)
    return undefined;
  if (wrong.normalized === correct.normalized) return undefined;
  const relation = wrong.normalized < correct.normalized ? "below" : "above";
  if (/pass at any value below/i.test(option) && /80%/i.test(prompt)) {
    return `${wrong.display} is the full-temperature table limit, not the cold measured screening limit. A field value can be below ${wrong.display} yet still exceed the 80% comparison value of ${correct.display}.`;
  }
  if (wrong.dimension === "interval") {
    if (
      /landlord|rented|remedial|investigative|c1|c2|further investigation/i.test(
        prompt,
      ) &&
      /days?$/i.test(correct.display)
    ) {
      return `${wrong.display} is not the normal statutory deadline. The default is ${correct.display}, shortened only when the report specifies earlier action; immediate danger still has to be made safe at once.`;
    }
    const timing = wrong.normalized < correct.normalized ? "shorter" : "longer";
    return `${wrong.display} is ${timing} than the ${correct.display} starting interval for this premises category. The actual next date can be brought forward by condition and risk, but it is not replaced by this different category's figure.`;
  }
  return `${wrong.display} is ${relation} the value produced by the stated data; the supported result is ${correct.display}. ${calculationRule(prompt)}`;
}

function outcomeReason(
  option: string,
  correctOption: string,
): string | undefined {
  const wrong = option.toLowerCase();
  const correct = correctOption.toLowerCase();
  if (/satisfactory/.test(wrong) && !/unsatisfactory/.test(wrong)) {
    if (/unsatisfactory|\bc1\b|\bc2\b/.test(correct)) {
      return "A satisfactory outcome cannot coexist with a C1 or C2 observation; either one makes the report unsatisfactory.";
    }
    return "One satisfactory measurement cannot decide the whole report; every observation, completed test, limitation and schedule contributes to the assessment.";
  }
  if (/unsatisfactory/.test(wrong)) {
    if (/\bc3\b|\bfi\b|no code|satisfactory/.test(correct)) {
      return "C3 and FI are advisory on the Amendment 4 EICR, and non-coded observations also do not alter the assessment. An unsatisfactory outcome requires at least one C1 or C2 finding.";
    }
    return "An unsatisfactory label needs a defined C1 or C2 observation; cost, age, missing paperwork, FI alone or customer preference cannot create that result.";
  }
  return undefined;
}

function actionReason(prompt: string, option: string): string | undefined {
  const text = option.toLowerCase();
  if (/test the whole installation silently/.test(text)) {
    return "Expanding to the whole installation can be justified by the findings, but doing it silently leaves the duty holder unaware of the changed scope, access, disruption and cost. Update Section D and communicate the reason before proceeding.";
  }
  if (/test live without comment/.test(text)) {
    return "An energised test cannot be treated as an unrecorded shortcut. It must first satisfy every condition in EAWR regulation 14, use suitable precautions, and be documented so the report shows what was actually done.";
  }
  if (/pass it without comment/.test(text)) {
    return "Passing the item without comment hides a borderline result and prevents the reader seeing why further checking may be needed. Record the measured value and investigate it against the correct in-service limit.";
  }
  if (/skip|ignore|no record needed|without comment|silently/.test(text)) {
    return "Skipping or hiding the item would leave no audit trail; record the observation or genuine limitation and take any immediate safety action the facts require.";
  }
  if (
    /wait until|next inspection|next cycle|when convenient/.test(text) &&
    /c1|c2|danger|remed|investigat|fault|damage|exposed|shock|fire/i.test(
      prompt,
    )
  ) {
    return "A known danger or unresolved safety concern cannot wait for a routine future visit; control immediate risk and arrange the remedy or investigation promptly.";
  }
  if (/refuse the inspection|cancel the eicr/.test(text)) {
    return "Missing records or restricted access do not normally justify abandoning the whole assessment; define the achievable scope and record genuine limitations.";
  }
  if (/break in|force entry|open .* anyway/.test(text)) {
    return "Forcing access can create danger, damage and unauthorised entry; record the restriction and arrange controlled access with the responsible person.";
  }
  if (/test live without|continue testing/.test(text)) {
    return "Convenience does not justify uncontrolled live work; stop, establish a safe method and satisfy all three EAWR regulation 14 conditions before any necessary energised test.";
  }
  return undefined;
}

function topicReason(
  prompt: string,
  option: string,
  correctOption: string,
): string | undefined {
  const question = prompt.toLowerCase();
  const lead = proposal(option, prompt);

  if (/rcd'?s built-in test button/.test(question)) {
    if (/supply voltage/.test(option.toLowerCase())) {
      return `${lead} The test button is not a voltmeter. Its internal resistor creates a deliberate current imbalance so the latch and trip mechanism operate; it does not check the supply-voltage value.`;
    }
    if (/line conductor/.test(option.toLowerCase())) {
      return `${lead} The button does not prove line-conductor continuity or polarity. It only creates an internal residual-current imbalance to exercise the RCD's mechanical trip path.`;
    }
    if (/temperature/.test(option.toLowerCase())) {
      return `${lead} No temperature sensor is involved in the test-button circuit. The button passes a small imbalance current through an internal resistor to check that the RCD can trip.`;
    }
  }
  if (/general non-delay.*rcd/.test(question) && /28 ms/.test(question)) {
    if (/too fast/.test(option.toLowerCase())) {
      return `${lead} A 28 ms trip is not 'too fast' for this protective device. The field requirement sets a maximum operating time, so quicker disconnection improves shock protection rather than causing a failed result.`;
    }
    if (/exactly at the maximum/.test(option.toLowerCase())) {
      return `${lead} The maximum is 300 ms, not 28 ms. This result has 272 ms of margin, so calling it exactly on the limit misreads the stated values.`;
    }
    if (/outside the 300 ms range/.test(option.toLowerCase())) {
      return `${lead} A 28 ms result is inside the permitted range because it is below the 300 ms maximum. The limit is not a narrow target band with a minimum at its lower end.`;
    }
  }
  if (
    /general non-delay.*rcd/.test(question) &&
    /1 second/.test(option.toLowerCase())
  ) {
    return `${lead} One second is more than three times the current 300 ms maximum for this IΔn field test. Waiting that long would leave the RCD outside the required protective operating time.`;
  }

  if (/mapping best distinguishes|\bn\/v\b|\blim\b|\bn\/a\b/.test(question)) {
    return `${lead} N/V records an item not verified, LIM explains an agreed restriction, N/A marks an irrelevant item, and FI is reserved for a specific possible danger that still needs diagnosis.`;
  }
  if (/sampling|sample|100% always tested/.test(question)) {
    return `${lead} Periodic sampling has no universal fixed percentage: it must represent the installation, be recorded, and expand when defects reduce confidence in the unsampled population.`;
  }
  if (
    /limitation|section d|extent|cannot inspect|cannot test a critical/.test(
      question,
    )
  ) {
    return `${lead} A limitation identifies exactly what could not be verified and why; it cannot conceal observed danger, certify excluded items, or turn missing evidence into a pass or fail by itself.`;
  }
  if (/fee uplift|pay.*pass|pass an installation/.test(question)) {
    return `${lead} Payment cannot alter test evidence or an EICR code. The inspector must report the as-found condition independently and refuse any request to suppress a dangerous observation.`;
  }
  if (
    /exposed live|busbar|missing blank|child could|finds a c1|make safe/.test(
      question,
    )
  ) {
    return `${lead} Accessible live parts create danger now: stop exposure, prevent access or isolate where possible, warn the responsible person immediately, and record C1 on the report.`;
  }
  if (
    /live test|live work|dead.?test|isolation|energised|out-of-hours dead/.test(
      question,
    )
  ) {
    return `${lead} Work dead is the default. Live work is justified only when working dead is unreasonable, working live is reasonable, and suitable precautions prevent injury under EAWR regulation 14.`;
  }
  if (
    /test sequence|test sequences|initial verification sequence/.test(question)
  ) {
    return `${lead} An in-service installation is not subjected blindly to the initial-verification sequence; the inspector chooses safe, relevant tests from GN3 according to condition, access, risk and prior results.`;
  }
  if (/rcd|rcbo|iδn|iΔn|residual/.test(prompt)) {
    return `${lead} RCD assessment separates device type, rated residual current, test-button operation and the current instrument test at IΔn; an obsolete 5× test or a different RCD type cannot set this result.`;
  }
  if (/insulation|\bir\b/.test(question)) {
    return `${lead} Insulation resistance is tested on isolated conductors with vulnerable equipment disconnected, using the appropriate DC voltage and the required conductor combinations; a result below 1 MΩ needs investigation.`;
  }
  if (/ring final|\br1\b|\brn\b|\br2\b/.test(question)) {
    return `${lead} A ring is assessed from end-to-end values and the cross-connected readings around every point; the expected r2/r1 ratio also reflects the smaller CPC in twin-and-earth cable.`;
  }
  if (/\bzs\b|\bze\b|loop impedance|disconnection time/.test(question)) {
    return `${lead} Ze is the external loop path and R1+R2 is the circuit path, so calculated Zs is their sum; a field result is compared with the temperature-adjusted device limit, not an unrelated value.`;
  }
  if (/tn-c-s.*combines|supply combines/.test(question)) {
    return `${lead} TN-C-S uses one PEN conductor for neutral and protective functions in the distributor's network, then separates it into N and PE at the installation origin.`;
  }
  if (/1\.5 mm² t\+e|cpc is/.test(question)) {
    return `${lead} Standard 1.5 mm² twin-and-earth cable has 1.5 mm² line and neutral conductors with a reduced 1.0 mm² CPC; the CPC does not simply copy an arbitrary option size.`;
  }
  if (/bond|earthing|earth electrode|\bra\b|\btt\b|pen/.test(question)) {
    return `${lead} Earthing provides the fault-current path while bonding limits voltage differences on extraneous metal; judge continuity, conductor adequacy, electrode resistance and the protective device together.`;
  }
  if (
    /landlord|tenant|rented|28.day|penalty|ess prs|social-rented/.test(question)
  ) {
    return `${lead} The rented-sector rules separate the five-year inspection limit, supplying the report, completing urgent work within 28 days or sooner, and confirming completion; a tenancy change is not automatically a fresh EICR.`;
  }
  if (
    /interval|years?|months?|frequency|next inspection|change of use|change of occupancy/.test(
      question,
    )
  ) {
    return `${lead} GN3 intervals are maximum starting points, not transferable warranties: actual use, deterioration, records, environmental risk and a change of use can require an earlier inspection.`;
  }
  if (
    /part p|eawr|riddor|workplace|agricultural premises|home workshop|b&b/.test(
      question,
    )
  ) {
    return `${lead} EAWR and HSWA govern electrical safety during work activity; Part P concerns installation work in or associated with English dwellings, while RIDDOR only reports specified work-related events.`;
  }
  if (
    /reg 651\.1|objectives of periodic|verify safety so far as/.test(question)
  ) {
    return `${lead} Regulation 651.1 asks whether the installation remains safe so far as reasonably practicable, including shock, thermal and defect risks; it does not audit the original installer's credentials or cost.`;
  }
  if (
    /fire was caused|flood|electric shock incident|only matters where there has been a problem/.test(
      question,
    )
  ) {
    return `${lead} A serious event is evidence that the planned cycle may no longer control risk, so an out-of-cycle condition assessment should establish damage and whether the future interval must be shortened.`;
  }
  if (/professional indemnity|insurance policy/.test(question)) {
    return `${lead} Professional-indemnity cover depends on the actual policy, conduct and claim; a signed scope documents the inspection but cannot guarantee that an insurer accepts every later liability.`;
  }
  if (/best practice guide 4/.test(question)) {
    return `${lead} Electrical Safety First's Best Practice Guide 4 gives examples of EICR observations and recommended classification codes; it is not a design guide for RCDs, earthing or voltage drop.`;
  }
  if (
    /maintenance lifecycle|output of a periodic|fundamental purpose|condition assessment/.test(
      question,
    )
  ) {
    return `${lead} An EICR is a dated condition assessment that informs maintenance and risk decisions; it is neither a fault-free guarantee, a replacement programme, nor a purchase order.`;
  }
  if (/power cut|interrupted by/.test(question)) {
    return `${lead} Loss of supply prevents the planned live tests and may leave isolation states unclear; stop, preserve safe conditions, verify safe re-energisation and record the interruption before resuming.`;
  }
  if (/spd|surge protective/.test(question)) {
    return `${lead} Multiple SPDs are permitted when their types, locations, lead lengths and manufacturer coordination suit the design; quantity alone does not make the installation unsafe.`;
  }
  if (
    /consumer unit|wooden surface|plastic enclosure|labels on.*mcb/.test(
      question,
    )
  ) {
    return `${lead} The code must follow the actual consumer-unit defect: accessible live parts, heat damage and a sole escape-route location have different consequences from harmless age, nearby wood or inaccurate labels.`;
  }
  if (
    /schedule|report|eicr|certificate|cover letter|documentation|records|recorded on/.test(
      question,
    )
  ) {
    return `${lead} An EICR records the condition of existing work; an EIC certifies a new circuit, while the inspection and test schedules separately hold visual checks and measured circuit values.`;
  }
  if (/polarity|line and neutral|line and cpc/.test(question)) {
    return `${lead} Polarity must put line, neutral and CPC on their intended terminals so single-pole devices interrupt line and exposed metal remains on the protective path.`;
  }
  if (
    /cable|conductor|voltage drop|current carrying|protective device/.test(
      question,
    )
  ) {
    return `${lead} Circuit safety depends on coordinated load current, cable capacity, installation method, voltage drop and protective-device rating; changing one value cannot be judged in isolation.`;
  }
  if (/continuity of cpcs|low-resistance/.test(question)) {
    return `${lead} CPC continuity is a dead, low-ohm measurement, normally made with a low-resistance ohmmeter; high-voltage IR, live loop and RCD instruments test different properties.`;
  }
  if (/altered|modified without records|new circuit/.test(question)) {
    return `${lead} Missing historic paperwork does not prevent an as-found EICR, but the EICR cannot recreate certification for new work; inspect the agreed scope and code only established danger or a specific unresolved concern.`;
  }
  if (
    /periodic inspection/.test(question) &&
    /duty|required|principally driven/.test(question)
  ) {
    return `${lead} The workplace duty is to maintain electrical systems so as to prevent danger under EAWR regulation 4(2); BS 7671 and GN3 provide the recognised technical route for demonstrating that maintenance.`;
  }

  void correctOption;
  return undefined;
}

function specificScenarioReason(
  prompt: string,
  option: string,
): string | undefined {
  const question = prompt.toLowerCase();
  const choice = option.toLowerCase();

  if (
    /sample reveals one c1 defect/.test(question) &&
    /note it and continue sampling/.test(choice)
  ) {
    return "A C1 means someone can be injured now, so simply writing it down and carrying on leaves the danger in place. First make safe or isolate where possible and warn the duty holder immediately; expand the related sample only after that immediate risk is controlled.";
  }
  if (
    /previous eicr set sampling at 50%/.test(question) &&
    /sample at 5%/.test(choice)
  ) {
    return "Dropping from 50% to 5% ignores the three defects already found and would reduce evidence just when the history calls for more confidence. Sampling is not a percentage calculation: use the previous defects to justify the new baseline, then expand it if current findings repeat the pattern.";
  }
  if (
    /sampling to be 'whatever the inspector decides on the day'/.test(
      question,
    ) && /sample at 100%/.test(choice)
  ) {
    return "One hundred percent is a full inspection, not a sample. It can be justified for a small, high-risk or poor-condition population, but selecting it automatically does not solve the missing scope agreement; set a risk-based baseline first and change it when the evidence supports doing so.";
  }
  if (
    /r1\+r2 = 0\.42 ω, zs = 0\.46 ω/.test(question) &&
    /cannot be calculated/.test(choice)
  ) {
    return "The figures do support an estimate: 0.46 Ω minus 0.42 Ω gives an implied Ze of about 0.04 Ω. It is not an exact direct Ze measurement because Zs can include parallel paths and the readings may have different temperatures or test conditions.";
  }
  if (
    /rcd trips at exactly its rated residual current/.test(question) &&
    /40 ms/.test(choice)
  ) {
    return "Forty milliseconds was the former routine limit at 5×IΔn for additional protection. This question is the current field test at 1×IΔn, where a general non-delay RCD must operate within 300 ms.";
  }
  if (/rcd trips at exactly its rated residual current/.test(question)) {
    if (/may or may not trip/.test(choice)) {
      return "Operation at the full rated residual current is not optional. A general non-delay RCD tested at 1×IΔn must trip, and the current BS 7671 field-test maximum is 300 ms.";
    }
    if (/must not trip/.test(choice)) {
      return "Must-not-trip applies to the former half-rated-current check at 0.5×IΔn. At the full rated residual current in this question, the RCD must operate within its permitted time.";
    }
  }
  if (
    /still measures 0\.6 mω between live conductors/.test(question) &&
    /^investigate/.test(choice)
  ) {
    return "Investigation is necessary to find and repair the fault, but this option does not give the classification the question asks for. The correctly prepared test is already below 1 MΩ, so potential danger is established and the EICR code is C2 rather than an unclassified instruction to investigate.";
  }
  if (
    /still measures 0\.6 mω between live conductors/.test(question) &&
    /pass.*close to 1 mω/.test(choice)
  ) {
    return "Close is not enough: 0.6 MΩ is forty percent below the 1 MΩ minimum after loads and the test method have already been checked. That verified insulation weakness can permit dangerous leakage or breakdown, so it is C2 and needs fault-finding and repair.";
  }
  if (/rcd test sequence on a 30 ma rcbo/.test(question)) {
    if (/40 ms/.test(choice)) {
      return "Forty milliseconds belongs to the former 5×IΔn routine test. At the current 1×IΔn field test, a general non-delay RCBO must operate within 300 ms.";
    }
    if (/must not trip/.test(choice)) {
      return "Must-not-trip describes the former half-rated-current check at 0.5×IΔn. At the full rated residual current used here, the RCBO must operate.";
    }
    if (/1 second/.test(choice)) {
      return "One second is too slow for this general non-delay RCBO at IΔn. The current field-verification maximum is 300 ms, so a one-second result would fail.";
    }
  }
  if (
    /6 a radial circuit feeding a smoke detector network/.test(question) &&
    /cannot be assessed/.test(choice)
  ) {
    return "The stated values are enough for the impedance check: 0.20 Ω + 0.90 Ω gives Zs ≈ 1.10 Ω. That is comfortably below both the current 7.28 Ω table value and its roughly 5.82 Ω ambient screening value for the 6 A Type B device.";
  }
  if (
    /6 a radial circuit feeding a smoke detector network/.test(question) &&
    /fail.*above 1 ω/.test(choice)
  ) {
    return "There is no universal 1 Ω failure line for this circuit. The protective device sets the limit: calculated Zs is about 1.10 Ω, far below the 6 A Type B device's current 7.28 Ω table value and roughly 5.82 Ω ambient screening value.";
  }

  if (/owner-occupier has had an eicr voluntarily/.test(question)) {
    if (/^1 year$/.test(choice)) {
      return "Ten years is the normal GN3 starting maximum for this owner-occupied dwelling. An inspector can recommend one year when actual condition, use or risk supports it, but an otherwise satisfactory report with one C3 provides no such basis; C3 is only an improvement recommendation.";
    }
    if (/^3 years$/.test(choice)) {
      return "A three-year interval is used for other risk profiles and can be recommended only when this installation's evidence justifies it. Here the report is satisfactory and the sole C3 does not automatically reduce the normal ten-year owner-occupied starting maximum.";
    }
    if (/^25 years$/.test(choice)) {
      return "Twenty-five years exceeds the normal ten-year GN3 starting maximum for an owner-occupied dwelling. Good condition may support the full ten years, but it does not justify leaving the installation unreviewed for another quarter-century.";
    }
  }
  if (
    /certify it retrospectively/.test(question) &&
    /automatically code.*c1/.test(choice)
  ) {
    return "Missing an original certificate does not itself expose anyone to immediate danger, so it cannot create a C1. Inspect and test the circuit as existing work, then code any electrical defect actually found; the EICR still cannot accept responsibility for the original design and construction.";
  }
  if (/reg 651\.1 lists the objectives/.test(question)) {
    if (/safety of persons and livestock/.test(choice)) {
      return "Protection of people and livestock against shock and burns is expressly one of the periodic-inspection objectives. It therefore cannot be the item excluded from the list; checking the original installer's qualifications is outside this particular regulation.";
    }
    if (/damage to property by fire and heat/.test(choice)) {
      return "Protection against electrical fire and heat damage is expressly part of the periodic-inspection purpose. The inspector looks for overheating, poor coordination and unsafe enclosures; the original installer's credentials are the item outside this list.";
    }
    if (/not damaged or defective/.test(choice)) {
      return "Checking that deterioration or defects have not impaired safety is a core periodic-inspection objective. That makes this an included duty, whereas auditing who originally installed the work is not an objective in Regulation 651.1.";
    }
  }
  if (/objectives include.*fire and heat/.test(question)) {
    if (/decorative finishes/.test(choice)) {
      return "Paintwork and decoration do not show whether the wiring can start or contain a fire. The electrical checks are device-to-cable coordination, sound terminations, heat damage, suitable enclosures, segregation and mechanical protection.";
    }
    if (/aesthetic quality/.test(choice)) {
      return "Appearance is not an electrical fire-safety test. A scratched accessory may be safe, while a neat-looking loose termination can overheat; the inspector follows electrical condition and thermal risk, not cosmetic quality.";
    }
    if (/age of the consumer unit/.test(choice)) {
      return "Age alone does not show a fire hazard. The inspector checks the consumer unit's material and location, device coordination, terminations, enclosure integrity and any signs of overheating before deciding whether a finding exists.";
    }
  }
  if (
    /self-employed sole trader operating from a home workshop/.test(question)
  ) {
    if (/governed only by the prs/.test(choice)) {
      return "Private-rented-sector rules concern covered tenancies; they are not the only safety regime here. Because electrical equipment is being used for work, the workshop falls within the Electricity at Work Regulations even though it is attached to a home.";
    }
    if (/voluntary because the trader owns/.test(choice)) {
      return "Owning the building does not remove the duty to keep a work electrical system safe. The Electricity at Work Regulations follow the work activity and apply to a self-employed person's workshop just as they do to an employer's premises.";
    }
  }
  if (
    /fire was caused by a deteriorated joint/.test(question) &&
    /cancel the eicr cycle/.test(choice)
  ) {
    return "Replacing the damaged consumer unit deals only with the known component. Heat may also have harmed nearby cables or revealed wider deterioration, so the fire is a reason for an out-of-cycle inspection, not a reason to cancel one.";
  }
  if (/reg 651\.1 defines what periodic inspection is for/.test(question)) {
    if (/cost permits/.test(choice)) {
      return "The legal and technical qualifier is what is reasonably practicable, which balances risk against the real difficulty of precautions. A client's budget cannot define how far safety needs to be verified.";
    }
    if (/original installer can attend/.test(choice)) {
      return "Periodic inspection is deliberately capable of assessing existing work without the original installer. Their attendance may provide useful records, but it is not the condition that limits the inspector's safety duty.";
    }
  }
  if (
    /sampling that turns up a defect on a single circuit/.test(question) &&
    /always 100%/.test(choice)
  ) {
    return "One defect reduces confidence in the affected sample, so that group should be expanded. It does not automatically prove every circuit must be tested: the defect's seriousness, repetition and the similarity of the remaining circuits determine how far the sample grows.";
  }
  if (
    /fire-alarm, emergency-lighting and other life-safety systems/.test(
      question,
    )
  ) {
    if (/whatever the duty holder asks/.test(choice)) {
      return "The duty holder helps agree access and scope but cannot replace the applicable safety standards with a preference. State whether the EICR covers only the supplies or a separately competent system inspection, then use the risk and specialist standard to set the extent.";
    }
    if (/default to 5%/.test(choice)) {
      return "Five percent is an arbitrary sample and could miss the only failed battery, luminaire or alarm circuit. Life-safety supplies and the specialist system must be scoped separately and checked to their applicable risk and maintenance standard.";
    }
    if (/default to 50%/.test(choice)) {
      return "Half the system is no more defensible as a universal rule than five percent. Fire detection and emergency lighting have their own functional-test regimes; the EICR must say precisely what electrical supplies it checked and what needs separate verification.";
    }
  }
  if (/eicr is a 'snapshot' precisely because/.test(question)) {
    if (/agreed scope only/.test(choice)) {
      return "Scope describes which parts were examined; it does not explain the word 'snapshot'. The time element matters: the report records the condition found on the inspection date and cannot predict later damage, alteration or deterioration.";
    }
    if (/only counts as evidence on the day/.test(choice)) {
      return "The signed report remains useful evidence after the visit, but it proves only what was found within its scope at that time. It cannot prove that the installation stayed unchanged and safe every day afterwards.";
    }
    if (/expires immediately/.test(choice)) {
      return "A report does not become worthless as soon as it is signed. It carries a recommended next-inspection date, while the duty holder must maintain the installation and respond sooner if use, damage or other events change the risk.";
    }
  }
  if (/during an eicr of a cafe/.test(question)) {
    if (/automatically certifies all appliances/.test(choice)) {
      return "An EICR primarily examines the fixed installation and its supplies. Coffee machines, refrigeration, fire alarms and emergency lighting can require separate appliance or specialist functional tests, so they are not automatically certified by the wiring report.";
    }
    if (/only portable appliances/.test(choice)) {
      return "This reverses the scope: fixed wiring, distribution equipment, accessories and protective measures are the EICR's core. Portable equipment is normally dealt with under a separate in-service equipment inspection regime.";
    }
    if (
      /fixed wiring only and must never mention fixed equipment/.test(choice)
    ) {
      return "Fixed equipment and its connection can be relevant where included in the agreed scope, and an obvious equipment hazard should still be reported. What the EICR must avoid is claiming a complete specialist functional test it did not perform.";
    }
  }
  if (/cover letter exists primarily/.test(question)) {
    if (/argue the codes/.test(choice)) {
      return "The codes are the inspector's risk classifications and are supported by the report evidence. A cover letter explains their practical meaning and urgency in plain language; it is not a negotiation document for weakening them.";
    }
    if (/filed instead of the report/.test(choice)) {
      return "A cover letter contains neither the full observations nor the inspection and test schedules. Filing it alone discards the evidence on which the assessment rests; it can accompany, but never replace, the signed EICR.";
    }
  }
  if (
    /schedule of test results captures/.test(question) &&
    /duty holder's signature/.test(choice)
  ) {
    return "A signature is not a test result. This schedule needs the circuit-by-circuit measurements—such as continuity, insulation resistance, Zs and RCD times—so another competent person can see the evidence behind the assessment.";
  }
  if (/schedule of inspections lists items that have been/.test(question)) {
    if (/tested with measured values/.test(choice)) {
      return "Measured values belong on the Schedule of Test Results. The Schedule of Inspections records which standard visual inspection items were examined and whether each was satisfactory, not the numerical readings.";
    }
    if (/replaced during the visit/.test(choice)) {
      return "Replacing an item is remedial work and needs its own work record or certificate. The inspection schedule records the condition checks made before or alongside that work; it is not a list of parts fitted.";
    }
    if (/ordered for replacement/.test(choice)) {
      return "An order is a commercial follow-up action, not an inspection finding. The schedule records what was visually checked; observations identify defects, and the duty holder separately arranges replacement work.";
    }
  }
  if (/eicr is dated and signed/.test(question)) {
    if (/company secretary/.test(choice)) {
      return "An administrative job title provides no evidence of electrical competence or responsibility for the tests. The signer must be the competent person who carried out, or directly supervised and verified, the inspection and testing.";
    }
    if (/apprentice on site/.test(choice)) {
      return "An apprentice may take readings under proper supervision, but mere presence on site does not make them responsible for the complete assessment. The competent person who verifies the work and accepts professional responsibility signs it.";
    }
    if (/duty holder/.test(choice)) {
      return "The duty holder is responsible for maintaining the installation and acting on the report, not for authenticating tests they did not perform. The competent inspector signs the technical findings.";
    }
  }
  if (/cover letter, when used, is most effective/.test(question)) {
    if (/technical and detailed/.test(choice)) {
      return "The formal EICR already contains the technical detail. The cover letter adds value by translating the findings, priorities and timescales into clear language the duty holder can act on.";
    }
    if (/argues against the codes/.test(choice)) {
      return "A covering note must not undermine evidence-based classifications. It should explain what each code means and what action follows, while leaving the signed EICR technically unchanged.";
    }
  }
  if (/an eicr is signed by/.test(question) && /duty holder/.test(choice)) {
    return "Receiving the report or agreeing its extent does not make the duty holder the author of the inspection. The competent person who carried out, or directly supervised and verified, the work signs for the accuracy of the findings.";
  }
  if (/overall assessment is determined by/.test(question)) {
    if (/total number of codes/.test(choice)) {
      return "Severity controls the outcome, not the count. One C1 or C2 makes the report unsatisfactory, while any number of advisory C3 or FI observations can still leave the overall assessment satisfactory.";
    }
    if (/total cost/.test(choice)) {
      return "Repair price says nothing about electrical danger: a cheap exposed connection may be C1, while an expensive improvement may remain C3. The highest risk classification determines the outcome.";
    }
    if (/duty holder's preference/.test(choice)) {
      return "The recipient can choose how to procure follow-up work but cannot choose the report result. Under Amendment 4, the inspector derives it from the observations: any C1 or C2 means unsatisfactory.";
    }
  }
  if (
    /schedule of test results that accompanies/.test(question) &&
    /codes raised only/.test(choice)
  ) {
    return "Codes summarise the safety significance of observations; they are not measurements. The test schedule must preserve each circuit's continuity, insulation resistance, loop impedance and relevant RCD results so the conclusions are traceable.";
  }
  if (/cover letter is typically used to/.test(question)) {
    if (/test instruments/.test(choice)) {
      return "Instrument identity and calibration details belong in the formal report and test records. The cover letter is for a plain-language summary of findings, priorities and timescales.";
    }
    if (/inspector's fee/.test(choice)) {
      return "Fees belong on the quotation or invoice, not in the safety explanation. A useful covering letter tells the duty holder what the observations mean and what action is needed.";
    }
  }
  if (/output of a periodic inspection is fundamentally/.test(question)) {
    if (/guarantee of fault-free/.test(choice)) {
      return "Inspection is limited to the recorded extent and date, so it cannot guarantee that every concealed part is fault-free or that no later failure will occur. Its output is evidence of the condition actually found.";
    }
    if (/purchase order/.test(choice)) {
      return "The inspector identifies and classifies safety findings; the duty holder then decides how to procure corrective work. A condition report is technical evidence, not authority to buy equipment or services.";
    }
    if (/maintenance schedule/.test(choice)) {
      return "The report recommends a next inspection date and highlights work, but it does not replace the installation's full maintenance plan. Routine servicing, monitoring and repairs remain the duty holder's ongoing programme.";
    }
  }
  if (
    /altered by adding a new circuit/.test(question) &&
    /cover letter only/.test(choice)
  ) {
    return "A cover letter cannot certify design, construction or initial verification. A new circuit requires an Electrical Installation Certificate and its schedules; the EICR remains a separate assessment of existing in-service condition.";
  }
  if (/multiple departures from the current edition/.test(question)) {
    if (/one c3 covering everything/.test(choice)) {
      return "Bundling every departure into one C3 hides which items are harmless differences and which may create real danger. Assess and describe each departure separately so its code follows its actual consequence.";
    }
    if (/default everything to c2/.test(choice)) {
      return "Older or non-current design is not automatically potentially dangerous. Some departures need no code and others may be C3, C2 or C1; condition and safety consequence decide each one.";
    }
  }
  if (
    /periodic test sequences for an in-service installation/.test(question) &&
    /always live/.test(choice)
  ) {
    return "Most evidence should be obtained dead wherever practicable because that removes shock risk. An energised test is used only when necessary for the property being measured and when all three EAWR regulation 14 conditions and suitable precautions are satisfied.";
  }
  if (
    /32 a type b circuit measures zs = 1\.10 ω cold/.test(question) &&
    /always fail/.test(choice)
  ) {
    return "Eighty percent of 1.37 Ω is 1.096 Ω, so a displayed 1.10 Ω is effectively on the threshold once normal rounding is considered. Verify the protective device, lead compensation, test accuracy and temperature basis, then resolve the tiny margin; the figures do not justify a reflex automatic failure.";
  }
  if (/overall result is determined by/.test(question)) {
    if (/number of total observations/.test(choice)) {
      return "Three hundred advisory observations would not make the result unsatisfactory, but one C2 would. The result follows whether any C1 or C2 exists, not how many lines appear in the observations.";
    }
    if (/inspector's preference/.test(choice)) {
      return "The inspector uses judgement to select the justified classification, but cannot then choose an outcome that contradicts it. Recording any C1 or C2 makes the overall result unsatisfactory under Amendment 4.";
    }
    if (/customer's preference/.test(choice)) {
      return "A customer cannot turn a dangerous finding into a pass. Once the observations are classified, the report result follows the Amendment 4 C1/C2 rule regardless of commercial pressure or preference.";
    }
  }
  if (/being signed off by the inspector/.test(question)) {
    if (/check the date only/.test(choice)) {
      return "A correct date does not cure missing readings, unexplained codes or an unclear scope. Before signing, reconcile the observations, test schedule, extent, limitations and overall assessment as one complete evidence trail.";
    }
    if (/instrument calibration only/.test(choice)) {
      return "Calibration supports confidence in the measurements but says nothing about omitted circuits, incorrect codes or contradictory report sections. The final review must check the whole report as well as the instrument record.";
    }
  }
  if (/1\.0 mm² t\+e feeding a smoke alarm/.test(question)) {
    if (/1\.0 mm² is too small/.test(choice)) {
      return "There is no blanket ban on 1.0 mm² cable for a 6 A smoke-alarm circuit. Verify its installed current-carrying capacity, voltage drop, earth-fault loop impedance and manufacturer requirements; a short correctly installed run can be satisfactory.";
    }
    if (/must be on 1\.5 mm²/.test(choice)) {
      return "1.5 mm² is common practice, not a universal minimum for this load. The conductor only needs to meet the design and installation conditions for the 6 A protective device and achieve the required fault protection and voltage drop.";
    }
    if (/must use 2\.5 mm²/.test(choice)) {
      return "Requiring 2.5 mm² confuses a small alarm circuit with a much heavier load. Cable size follows design current, protective device, installation method, voltage drop and fault conditions; those checks can justify 1.0 mm² here.";
    }
  }
  if (/32 a type b circuit is used to feed a 7 kw ev charger/.test(question)) {
    if (/cannot use 32 a/.test(choice)) {
      return "A 7 kW load at 230 V draws about 30.4 A, so a 32 A protective device is a plausible rating. The real assessment is whether the cable, voltage drop, charging controls and EV-specific protective measures support that continuous load.";
    }
    if (/must use 16 a/.test(choice)) {
      return "A 16 A device cannot normally supply a 30.4 A charging load and would trip or force substantial load limitation. The circuit needs coordinated 32 A-class design plus the required RCD/DC-leakage and open-PEN protection.";
    }
    if (/satisfactory automatically/.test(choice)) {
      return "Matching the nominal load to a 32 A breaker proves only one part of the design. Cable capacity and route, voltage drop, PME/open-PEN measures, load control, manufacturer instructions and residual-current protection still need verification.";
    }
  }
  if (/earthing conductor on a tt installation is sized/.test(question)) {
    if (/16 mm²/.test(choice)) {
      return "Sixteen square millimetres may be suitable in a particular installation, but it is not a universal TT value. Use Section 543, Table 54.7 or the adiabatic equation, then check material, fault energy and any buried-conductor mechanical and corrosion requirements.";
    }
    if (/25 mm²/.test(choice)) {
      return "Twenty-five square millimetres is not automatically required merely because the earthing system is TT. The calculated fault duty and the conductor's material, route, protection and minimum permitted size decide the design.";
    }
    if (/6 mm²/.test(choice)) {
      return "Six square millimetres can be adequate in some protected arrangements but cannot be assumed. The inspector needs the Section 543 or adiabatic design evidence and must also apply the rules for buried, exposed or corrosion-prone conductors.";
    }
  }
  if (
    /earth fault loop impedance test is carried out at/.test(question) &&
    /5 a test current/.test(choice)
  ) {
    return "Loop testers use different controlled currents and no-trip techniques depending on the circuit and protective device; BS 7671 does not demand one fixed 5 A test current. The method must obtain a reliable impedance without defeating an MCB, fuse or RCD and must be justified as live work.";
  }
  if (
    /measured zs = 1\.50 ω against a table value of 1\.92 ω/.test(question) &&
    /always fail/.test(choice)
  ) {
    return "The ambient rule-of-thumb limit is 1.92 × 0.8 = 1.536 Ω, so 1.50 Ω is just inside it. Record the narrow margin and confirm the device and test conditions, but the stated numbers do not support an automatic failure.";
  }
  if (
    /cross-connects l and n.*step 2/.test(question) &&
    /always zero/.test(choice)
  ) {
    return "A sound ring still contains conductor resistance. With line and neutral cross-connected, two paths operate in parallel and the expected socket reading is about (r1 + rn) / 4; zero would instead suggest lead-null error or an unintended very-low-resistance parallel path.";
  }
  if (
    /earth electrode is shared with another property's/.test(question) &&
    /always satisfactory/.test(choice)
  ) {
    return "A shared electrode may work electrically today yet be removed, altered or made inaccessible by the other owner. Verify resistance, continuity, condition, ownership, access and a durable agreement before deciding whether it is satisfactory or needs action.";
  }
  if (
    /20 a type c mcb.*measured ambient zs of 0\.95 ω/.test(question) &&
    /always fail/.test(choice)
  ) {
    return "The quick ambient screening value is about 0.87 Ω, so 0.95 Ω needs a temperature or design assessment rather than a casual pass. Exceeding the 80% guide is not by itself a statutory automatic failure if the verified hot-condition value still meets the device limit.";
  }
  if (
    /ir test gives readings of l-n: 100 mω/.test(question) &&
    /always fail/.test(choice)
  ) {
    return "The 0.5 MΩ neutral-to-earth reading is below the 1 MΩ minimum and must be traced, but first disconnect loads and separate conductors to prove it is insulation failure rather than a connected leakage path. The confirmed defect and its danger determine the report code.";
  }
  if (/schedule of inspections covers/.test(question)) {
    if (/measured test values only/.test(choice)) {
      return "Numerical continuity, insulation, loop and RCD readings belong on the Schedule of Test Results. The inspection schedule records the visual condition checks made against the listed BS 7671 items.";
    }
    if (/cover letter only/.test(choice)) {
      return "A cover letter is optional communication for the recipient; it contains neither the standard visual checklist nor the inspection status of each item. It cannot stand in for the Schedule of Inspections.";
    }
    if (/duty holder's signature/.test(choice)) {
      return "The recipient's signature does not show that connections, identification, enclosures and signs of damage were examined. The schedule must record those visual checks item by item.";
    }
  }
  if (
    /cross-connects l and cpc for step 3/.test(question) &&
    /always zero/.test(choice)
  ) {
    return "Line and CPC have real resistance, and in 2.5/1.5 mm² cable their unequal sizes create a characteristic pattern around the ring. Expect values around the calculated (r1+r2)/4 pattern with a rise near the electrical midpoint, not zero at every socket.";
  }
  if (/r1 = rn = 0\.40 ω, r2 = 0\.50 ω/.test(question)) {
    if (/0\.5×/.test(choice)) {
      return "The CPC is smaller than the line conductor, so its end-to-end resistance should be higher, not half as large. For 2.5/1.5 mm² copper the expected ratio is about 2.5 ÷ 1.5 = 1.67; the measured 1.25 needs explanation.";
    }
    if (/2\.0×/.test(choice)) {
      return "A two-to-one ratio is higher than the nominal geometry of 2.5/1.5 mm² conductors. The expected value is about 1.67, subject to temperature and connections; the stated measured ratio is 1.25 and should be investigated.";
    }
  }
  if (
    /gas bonding conductor is present but connected 1\.8 m downstream/.test(
      question,
    )
  ) {
    if (/always c1/.test(choice)) {
      return "Being farther than the preferred position does not by itself expose live parts or establish immediate danger, so C1 is unjustified. Confirm that the incoming copper pipe is extraneous and whether the bond effectively connects it before branch pipework; loss of effective main bonding would normally support C2.";
    }
    if (/always no code/.test(choice)) {
      return "A clamp somewhere on the pipe does not prove the incoming extraneous metal and every upstream branch are held at the installation's earth potential. Inspect the route and verify continuity; if the tee leaves an incoming section effectively unbonded, that is normally a C2 concern.";
    }
  }
  if (
    /all circuits >100 mω at 500 v dc/.test(question) &&
    /always fail/.test(choice)
  ) {
    return "More than 100 MΩ is far above the 1 MΩ minimum and is normal for dry, sound insulation when the circuits were prepared correctly. Confirm sensitive equipment was disconnected or protected, then record the strong result rather than failing it.";
  }
  if (
    /all cpcs are continuous.*agree with the calculated values/.test(
      question,
    ) &&
    /always fail/.test(choice)
  ) {
    return "Continuous CPCs with resistance close to the cable-length calculation are positive evidence of intact fault paths. Combine that with visual and connection checks because it cannot prove every unsampled termination, but nothing stated justifies an automatic failure.";
  }
  if (
    /measured zs is 0\.65 ω.*0\.92 ω/.test(question) &&
    /always fail/.test(choice)
  ) {
    return "The measured 0.65 Ω is comfortably below the already temperature-screened 0.92 Ω limit. Subject to correct device identification and test method, the circuit has adequate loop-impedance margin and should not be failed.";
  }
  if (
    /r1 \/ rn \/ r2 readings are 0\.40 \/ 0\.42 \/ 0\.68 ω/.test(question) &&
    /always fail/.test(choice)
  ) {
    return "Line and neutral are closely matched, while 0.68 ÷ 0.40 = 1.7, almost the expected 1.67 ratio for a 1.5 mm² CPC against 2.5 mm² live conductors. These readings support the stated ring construction rather than an automatic failure.";
  }
  if (
    /ir test result is 12 mω on a 230 v circuit/.test(question) &&
    /always investigate/.test(choice)
  ) {
    return "Twelve megohms is comfortably above the 1 MΩ minimum on a correctly prepared 230 V circuit. A worsening trend or other evidence could justify follow-up, but this isolated value does not automatically require fault investigation.";
  }
  if (
    /ra has gradually increased from 50 ω.*to 250 ω/.test(question) &&
    /always fail/.test(choice)
  ) {
    return "With a 30 mA RCD, 250 Ω gives only 7.5 V in the RA × IΔn check, so the number is not an automatic touch-voltage failure. However, the fivefold rise and value above the 200 Ω stability warning demand investigation and likely electrode improvement now.";
  }
  if (
    /supplementary bonding in a sauna.*exposed to the heat/.test(question) &&
    /always satisfactory/.test(choice)
  ) {
    return "Correct continuity does not prove the insulation can survive its location. Check the sauna temperature zone, expected ambient temperature and the cable manufacturer's rating; heat damage or unsuitable insulation can create potential danger even though the bonding function measures correctly today.";
  }
  if (
    /electric shower.*measured zs = 0\.45 ω/.test(question) &&
    /always fail/.test(choice)
  ) {
    return "A Zs of 0.45 Ω is far below the 1.10 Ω ambient rule-of-thumb limit, giving strong disconnection margin for the stated device. Provided the device and test are correctly identified, this measurement is satisfactory rather than a failure.";
  }
  if (
    /l-n >999 mω, l-e >999 mω, n-e 0\.5 mω/.test(question) &&
    /always fail and code c1/.test(choice)
  ) {
    return "The low neutral-to-earth value needs loads disconnected and the fault located, but it does not show accessible live parts or another immediate danger required for C1. Classify the confirmed condition from its real risk—often C2 if insulation failure is established—not from the low number alone.";
  }
  if (
    /zs at three points on a 32 a ring/.test(question) &&
    /always fail/.test(choice)
  ) {
    return "Similar loop readings can be reasonable because parallel ring paths reduce the variation; they are not a failure by themselves. They also cannot prove ring continuity, so complete the end-to-end and cross-connection tests and investigate only if that topology evidence is abnormal.";
  }
  if (
    /fundamental purpose of the eicr/.test(question) &&
    /certify new work/.test(choice)
  ) {
    return "New work needs an Electrical Installation Certificate covering its design, construction and initial verification. An EICR instead records the present condition of an existing installation and whether it is satisfactory for continued service within the stated scope.";
  }

  if (
    /section d blank/.test(question) &&
    /no codes (?:are|were) raised/.test(choice)
  ) {
    return "Codes describe defects, while Section D describes evidence. A report can have no codes and still be misleading if it never states what was inspected, tested or excluded.";
  }
  if (/loft hatch sealed shut/.test(question) && /force entry/.test(choice)) {
    return "A sealed hatch does not authorise damage or unsafe entry. Record the loft as a precise access limitation and arrange controlled access and follow-up with the responsible person.";
  }
  if (/previous eicr were significantly different/.test(question)) {
    if (/ignore the previous eicr/.test(choice)) {
      return "The difference is trend evidence that may reveal deterioration, alteration or an earlier test error. Ignoring it throws away the comparison that tells the inspector where investigation is needed.";
    }
    if (/copy the previous results/.test(choice)) {
      return "Old readings are a comparison, not today's evidence. Copying them would falsify the new report and conceal whether the installation has changed or a test method was wrong.";
    }
    if (/skip the new tests/.test(choice)) {
      return "Without new measurements there is no current condition to compare with the old report. Complete the relevant tests, investigate the difference and record the diagnosis.";
    }
  }
  if (/interrupted by a local power cut/.test(question)) {
    if (/continue without interruption/.test(choice)) {
      return "The planned live tests cannot continue when the supply has disappeared, and isolation states may now be unclear. Secure the setup, make sure re-energisation will be safe, record the interruption and resume or repeat affected tests later.";
    }
    if (/test live without comment/.test(choice)) {
      return "There is no reliable live supply to test during the cut, and silently improvising would destroy the audit trail. Pause, preserve safe conditions and document which results may need repeating after restoration.";
    }
    if (/refer to the dno/.test(choice)) {
      return "The DNO may need to restore or investigate the outage, but that does not complete the inspector's safe test sequence. The inspector must secure the installation, verify safe re-energisation and record the interrupted work.";
    }
  }
  if (/earth electrode resistance ra on a tt installation/.test(question)) {
    if (/≤ 1 ω/.test(choice)) {
      return "One ohm is an unnecessarily strict fixed limit for a normal TT electrode. Safety is checked from RA × IΔn ≤ 50 V, while a much lower practical resistance is sought for stability as soil moisture and corrosion change.";
    }
    if (/≤ 100 ω/.test(choice)) {
      return "One hundred ohms may be a useful practical target in some designs, but it is not a universal BS 7671 maximum. The RCD rating, RA × IΔn touch-voltage condition and long-term electrode reliability all matter.";
    }
    if (/above 1000 ω/.test(choice)) {
      return "A resistance above 1000 Ω is not a target; with many RCD ratings it would approach or exceed the 50 V touch-voltage condition and would be highly vulnerable to seasonal worsening. ADS could become ineffective.";
    }
  }
  if (/swimming pool zone has continuity of 0\.06 ω/.test(question)) {
    if (/always pass/.test(choice)) {
      return "An automatic pass ignores that 0.06 Ω is just above the usual 0.05 Ω continuity guideline and that lead resistance and measurement uncertainty must be checked. Inspect and tighten the terminations before deciding.";
    }
    if (/always fail/.test(choice)) {
      return "The small excess does not justify an automatic fail without verifying the instrument, nulling the leads and checking the actual bonding requirement. Investigate the connection and judge the confirmed result.";
    }
    if (/cannot be assessed/.test(choice)) {
      return "Continuity can be measured and the 0.06 Ω result can be compared with the agreed criterion. The correct response is to verify the measurement and investigate the conductor and terminations, not declare it unknowable.";
    }
  }
  if (/local authority requests a copy/.test(question)) {
    if (/14 days/.test(choice)) {
      return "Fourteen days is twice the permitted response time. A landlord must give the local authority the requested EICR within seven days.";
    }
    if (/28 days/.test(choice)) {
      return "Twenty-eight days is the period for supplying an existing tenant, not a local-authority request. The authority must receive its copy within seven days.";
    }
    if (/3 months/.test(choice)) {
      return "Three months would frustrate enforcement and is not the statutory period. The requested report must be supplied to the local authority within seven days.";
    }
  }
  if (/governed by gs38 in respect of/.test(question)) {
    if (/volt drop/.test(choice)) {
      return "Voltage-drop calculations come from BS 7671 design rules and cable data. GS38 is about safe test equipment, especially insulated probes, guarded tips and fused leads.";
    }
    if (/rcd selection/.test(choice)) {
      return "RCD type and selection are governed by BS 7671 and equipment characteristics. GS38 deals with how test probes and leads protect the person carrying out live measurements.";
    }
    if (/cable colour/.test(choice)) {
      return "Conductor identification comes from BS 7671, not GS38. GS38 specifies safer probes, leads, finger guards, insulation and exposed-tip dimensions for electrical testing.";
    }
  }
  if (/live testing introduces additional hazards/.test(question)) {
    if (/working alone/.test(choice)) {
      return "Working alone removes assistance and supervision; it is not a protective measure. The first defence is to avoid live work, then use a justified method, suitable equipment, controls and help where needed.";
    }
    if (/^speed$/.test(choice)) {
      return "Speed increases the chance of probe slips, missed checks and arc or shock exposure. Safe isolation is preferred; justified live work is deliberate, risk-assessed and controlled.";
    }
    if (/skipping the dead-test ppe/.test(choice)) {
      return "Skipping protective measures does not control live-test risk. Make the conductors dead where reasonably practicable; for justified live work use the method, GS38 equipment, assistance and PPE required by the assessment.";
    }
  }
  if (/ir test on a selv circuit/.test(question)) {
    if (/500 v dc/.test(choice)) {
      return "Five hundred volts is the normal test level for many 230 V circuits and can overstress SELV electronics. SELV/PELV circuits up to 50 V are tested at 250 V DC, with sensitive equipment disconnected as needed.";
    }
    if (/1000 v dc/.test(choice)) {
      return "One thousand volts is intended for higher-voltage circuit categories and risks damaging 12 V equipment. This SELV insulation test uses 250 V DC.";
    }
    if (/not required/.test(choice)) {
      return "Extra-low voltage does not remove the need to verify insulation. The reduced 250 V DC test checks separation and insulation without applying the harsher 500 V or 1000 V level.";
    }
  }
  if (/multiple spds at the consumer unit/.test(question)) {
    if (/cannot be combined/.test(choice)) {
      return "SPDs can be cascaded at the origin and sub-distribution boards. The inspector checks type, lead length, separation and manufacturer coordination rather than rejecting the number of devices.";
    }
    if (/single spd only/.test(choice)) {
      return "There is no single-SPD rule. Several coordinated stages may protect different distribution levels more effectively than one device at the origin.";
    }
    if (/spds are forbidden/.test(choice)) {
      return "SPDs are recognised protective devices, not prohibited equipment. Their status indicators, overcurrent protection, connections and coordination determine whether the arrangement is satisfactory.";
    }
  }
  if (
    /r1\+r2 reading at every socket is 0\.5 ω, except one socket/.test(question)
  ) {
    if (/reverse polarity/.test(choice)) {
      return "Reversed polarity changes which terminals are connected; it does not normally double the measured R1+R2 at only one outlet. A spur has one path instead of the ring's parallel paths, explaining the 2:1 reading.";
    }
    if (/insulation failure/.test(choice)) {
      return "Insulation failure is shown by a low insulation-resistance test, not by one cleanly doubled continuity value. The 1.0 Ω reading is the expected pattern for a spur from a 0.5 Ω ring.";
    }
    if (/rcd tripped/.test(choice)) {
      return "An RCD trip interrupts the live supply but does not create a stable doubled dead-test resistance at one socket. The single-path resistance indicates a spur.";
    }
  }
  if (/broken neutral on a tn-c-s supply/.test(question)) {
    if (/just an rcd/.test(choice)) {
      return "A normal RCD sees equal line and neutral current during an open-PEN event and may not trip, even while bonded metal rises above true Earth. The installation needs the applicable open-PEN or TT measure.";
    }
    if (/just a 6 mm² cpc/.test(choice)) {
      return "CPC size alone cannot detect or disconnect an open PEN, and 6 mm² may not meet the relevant bonding requirement. Bonding limits differences between connected parts but does not make them safe relative to true Earth.";
    }
    if (/removing the gas pipe/.test(choice)) {
      return "Removing one service pipe neither repairs the distributor's broken PEN nor protects other bonded metal. Use correct bonding plus the open-PEN protective arrangement required for the installation.";
    }
  }
  if (/bathroom: 0\.10 ω against 0\.05 ω guideline/.test(question)) {
    if (/pass .*within tolerance/.test(choice)) {
      return "0.10 Ω is twice the stated 0.05 Ω guideline, so it is not merely within normal tolerance. Null the leads, verify the reading and inspect the conductor and terminations.";
    }
    if (/always fail/.test(choice)) {
      return "The high reading needs investigation, but an automatic fail skips verification of lead resistance, the actual bonding requirement and the cause. Re-test and repair any poor termination before classifying.";
    }
    if (/refer to the dno/.test(choice)) {
      return "Supplementary bonding is inside the consumer's installation, so the DNO does not repair it. The inspector traces and corrects the bonding conductor or its terminations.";
    }
  }
  if (
    /supplementary bonding has been installed in a kitchen.*no extraneous/.test(
      question,
    )
  ) {
    if (/always c2/.test(choice)) {
      return "A safely installed redundant conductor does not create potential danger merely because it is unnecessary. Use C2 only if its termination, diverted current or another actual defect can cause harm.";
    }
    if (/always c1/.test(choice)) {
      return "Nothing here exposes a person to immediate danger. C1 would grossly overstate a sound conductor that simply has no required bonding function in this kitchen.";
    }
    if (/always fi/.test(choice)) {
      return "The facts are already known, so FI is not justified. Verify that the extra conductor is harmless; if it is sound and carries no unintended current, no code is needed.";
    }
  }
  if (/fixed appliance fed via a 13 a fcu on a ring/.test(question)) {
    if (/fixed appliances cannot be on a ring/.test(choice)) {
      return "Appendix 15 permits fixed appliances on a ring final circuit through a fused connection unit. The 13 A fuse gives the appliance and its flex local overload protection.";
    }
    if (/dedicated radial/.test(choice)) {
      return "A dedicated radial may be chosen for some loads, but it is not mandatory for every fixed appliance. A correctly rated 13 A FCU is a standard compliant connection to a 32 A ring.";
    }
    if (/always c2/.test(choice)) {
      return "The connection method is normal and does not establish potential danger. C2 would require an actual defect such as overload, damaged wiring or inadequate protection.";
    }
  }
  if (/live test for zs.*building is occupied/.test(question)) {
    if (/no ppe for speed/.test(choice)) {
      return "Speed is not a control for shock or arc risk. First justify the energised test under EAWR regulation 14, then use GS38 equipment, barriers, suitable PPE and assistance identified by the risk assessment.";
    }
    if (/duty holder absent/.test(choice)) {
      return "The duty holder's absence does not make a live loop test safe and may remove essential control of occupants and isolation. Coordinate the work and use the competent assistance and precautions the risk assessment requires.";
    }
    if (/skip the test/.test(choice)) {
      return "Skipping Zs without a recorded reason leaves the protective-device disconnection assessment incomplete. Prefer a safe calculated/dead-test route or record a genuine limitation and follow-up if live measurement cannot be justified.";
    }
  }

  if (
    /if an eicr for a rented dwelling identifies a c1 or c2 item/.test(
      question,
    )
  ) {
    if (/3 months/.test(choice)) {
      return "That would leave a known C2 or required investigation outstanding for about 90 days, well beyond the normal limit of 28 days. Any shorter period stated in the report applies, and a C1 must be made safe immediately.";
    }
    if (/12 months/.test(choice)) {
      return "A year-long delay is not allowed for a known safety finding. Required work is normally due within 28 days or the report's shorter period, while a C1 must be made safe immediately.";
    }
  }

  if (
    /remedial or investigative work within|complete remedial work within|remedial completion within/.test(
      question,
    )
  ) {
    if (/next .*eicr|next .*cycle/.test(choice)) {
      if (/one c1 and three c2s/.test(question)) {
        return "The C1 must be controlled immediately, while all required C2 work is completed within 28 days or the report's shorter period. Waiting for the five-year cycle would leave recorded danger unaddressed.";
      }
      if (/has a c2 observation/.test(question)) {
        return "A C2 records potential danger requiring prompt remedy. Deferring it to the next five-year EICR breaches the normal 28-day limit, or any shorter period specified in the report.";
      }
      return "Waiting for the next EICR could defer a known C2, C1 or FI concern for years. The rented-sector deadline is normally 28 days from the inspection, sooner when the report says so, with immediate danger made safe at once.";
    }
  }
  if (
    /just issue a pass certificate/.test(question) &&
    /refuse to issue any report/.test(choice)
  ) {
    return "Restricted access does not automatically prevent every report. The inspector can report on a meaningful agreed extent with precise limitations, but must refuse to imply that inaccessible rooms were verified.";
  }
  if (/hmo has been refurbished/.test(question)) {
    if (/eicr only/.test(choice)) {
      return "An EICR alone only reports the condition of the installation as found. Any new circuits or other notifiable installation work from the refurbishment still need the appropriate installation certificate.";
    }
    if (/both documents become eicr/.test(choice)) {
      return "The documents do not merge. The EIC certifies the design, construction and testing of new installation work; the EICR separately assesses the wider existing installation in service.";
    }
    if (/neither is needed/.test(choice)) {
      return "A receipt proves payment, not electrical safety. New work needs its installation certification, while the rented dwelling still needs the condition report required for the existing installation.";
    }
  }
  if (
    /fi observation.*landlord's duty/.test(question) &&
    /relet the property/.test(choice)
  ) {
    return "Reletting does not transfer the unresolved safety duty to the next tenant. FI is advisory under Amendment 4, but the rented-sector regulations separately require the landlord to arrange report-required investigation within the prescribed period.";
  }
  if (/single c3 observation/.test(question)) {
    if (/unsatisfactory and remedial work is statutory/.test(choice)) {
      return "A lone C3 is a recommended improvement, not a C1 or C2. It therefore does not make the EICR unsatisfactory or trigger the rented-sector 28-day remedial duty by itself.";
    }
    if (/all coded observations are statutory/.test(choice)) {
      return "Not every classification has the same effect. C3 only recommends improvement. C1 or C2 makes the EICR unsatisfactory; FI remains advisory on the form but can separately trigger the rented-sector duty to complete required investigative work.";
    }
    if (/indeterminate/.test(choice)) {
      return "The result is not indeterminate: a report containing only C3 observations remains satisfactory. Another inspection is unnecessary merely to decide that outcome.";
    }
  }
  if (
    /skip the kitchen because the tenant is cooking/.test(question) &&
    /refuse the job/.test(choice)
  ) {
    return "A temporary access problem calls for coordination, not automatic abandonment. Arrange another time or record a precise limitation and follow-up, while keeping the remaining EICR scope meaningful.";
  }
  if (/office tenant.*power interrupted/.test(question)) {
    if (/cancel the inspection/.test(choice)) {
      return "The inspection can usually be planned around operations. Agree an out-of-hours shutdown and record any genuine residual limitation instead of cancelling all useful inspection work.";
    }
    if (/switch everything off without warning/.test(choice)) {
      return "Unannounced isolation can endanger people, damage processes and cause data loss. Shutdowns must be coordinated with the duty holder and carried out under a safe isolation plan.";
    }
  }
  if (/satisfactory eicr with no codes/.test(question)) {
    if (/re-test within 28 days/.test(choice)) {
      return "The 28-day period is for remedial or investigative work following an unsatisfactory finding, not for repeating a satisfactory EICR. The next inspection follows the report's recommended date or an earlier risk trigger.";
    }
    if (/file the report and do nothing/.test(choice)) {
      return "A satisfactory result removes the immediate remedial trigger, but the landlord must still supply and retain the report, maintain the installation and arrange the next inspection when due.";
    }
  }
  if (
    /deadline to supply the eicr starts from/.test(question) &&
    /date the report is supplied/.test(choice)
  ) {
    return "That makes the deadline circular: the supply date cannot start the period that limits the supply date. For an existing tenant, the 28-day clock starts with the inspection and test recorded by the EICR.";
  }
  if (/unsatisfactory result.*triggers a 28-day duty/.test(question)) {
    if (/re-test the installation/.test(choice)) {
      return "Repeating tests without correcting or investigating the recorded defects does not discharge the duty. The required work must be completed and then confirmed in writing.";
    }
    if (/move the tenants out/.test(choice)) {
      return "An unsatisfactory EICR does not automatically terminate occupation. Immediate danger is controlled at once, then the landlord completes the specified remedial or investigative work within the deadline.";
    }
  }
  if (/follow-up document is/.test(question)) {
    if (/new eicr/.test(choice)) {
      return "The original EICR remains the dated record of the condition found. Remedial work needs written completion confirmation and the certificate appropriate to that work, not an automatic replacement EICR.";
    }
    if (/domestic visual condition report/.test(choice)) {
      return "A visual-only report cannot confirm that the C2 remedial work was completed and tested. The landlord needs written confirmation from a qualified person, supported by the proper work certificate.";
    }
    if (/eic for the whole installation/.test(choice)) {
      return "An EIC certifies the installation work for which its signer accepts design, construction and testing responsibility. A local repair does not justify certifying the whole pre-existing installation as new work.";
    }
  }
  if (/fails to commission an eicr/.test(question)) {
    if (/take no action/.test(choice)) {
      return "The local authority has enforcement powers: it can require compliance, arrange qualifying urgent work and recover costs, and impose the statutory financial penalty.";
    }
    if (/cancel the tenancy/.test(choice)) {
      return "Cancelling a tenancy is not the electrical-safety enforcement power given by these regulations. The authority acts through compliance notices, remedial powers, cost recovery and financial penalties.";
    }
  }
  if (/financial penalty per breach/.test(question)) {
    if (/£500|£5,000/.test(option)) {
      return `${option} is below the current maximum. The 2025 amendment increased the local housing authority's ceiling to £40,000 per breach; its commencement was 1 November 2025 generally, with a 1 May 2026 transition for specified older social tenancies.`;
    }
    if (/£100,000/.test(option)) {
      return "£100,000 exceeds the current maximum for one breach. The 2025 amendment sets the ceiling at £40,000; it commenced generally on 1 November 2025, with a 1 May 2026 transition for specified older social tenancies.";
    }
  }
  if (/one c1 \(immediate danger\) and three c3s/.test(question)) {
    if (/action everything in 28 days/.test(choice)) {
      return "This treats unlike codes alike. The C1 danger must be controlled immediately and remedied within the applicable deadline; C3 items are improvements to consider, not mandatory 28-day defects by themselves.";
    }
    if (/only when convenient/.test(choice)) {
      return "Convenience cannot delay an immediate danger. The C1 must be made safe at once, with the required repair and written follow-up completed within the earlier applicable deadline.";
    }
  }
  if (
    /diy alteration with no certificate|partial recent rewire.*no certificate/.test(
      question,
    ) &&
    /refuse the inspection/.test(choice)
  ) {
    if (/partial recent rewire/.test(question)) {
      return "The missing kitchen-and-bathroom rewire certificate does not justify abandoning the whole EICR. Inspect and test that altered area carefully, report the installation as found and use FI only for a specific unresolved safety concern.";
    }
    return "Missing certification is a reason to inspect the alteration carefully, not to abandon the EICR. Report the installation as found, test as far as practicable and use FI only for a specific unresolved possible danger.";
  }

  if (
    /hospital life-safety circuit/.test(question) &&
    /^(5|10|20)%$/.test(option)
  ) {
    return `${option} is an arbitrary sample size, not the information needed before work starts. The inspector must first establish the electrical and specialist-system scope, clinical constraints, applicable standards and a safe risk-based test plan.`;
  }
  if (
    /small bakery.*ovens.*cannot be switched off/.test(question) &&
    /doors open/.test(choice)
  ) {
    return "Opening the oven doors does nothing to make its distribution circuit safe to inspect and may create a heat hazard. Plan a controlled shutdown or record a genuine limitation; any live work still has to satisfy EAWR regulation 14.";
  }
  if (
    /section d.*place to record/.test(question) &&
    /^test results$/.test(choice)
  ) {
    return "Measured continuity, insulation, loop and RCD values belong on the Schedule of Test Results. Section D describes the installation extent, sampling and any agreed limitations.";
  }
  if (
    /continuous-process line/.test(question) &&
    /test live without agreement/.test(choice)
  ) {
    return "Lack of agreement means the scope and operational risk have not been controlled. Plan a shutdown where possible; any necessary live work must be agreed, justified under EAWR regulation 14 and carried out with suitable precautions.";
  }
  if (
    /split into 'phases'/.test(question) &&
    /everything in one visit regardless/.test(choice)
  ) {
    return "One visit is not automatically safer or more representative if it ignores operational constraints. A phased programme can work when each visit's extent is defined and the final reporting does not imply that untested circuits were covered.";
  }
  if (
    /sample 5% of identical socket circuits/.test(question) &&
    /silently and move on/.test(choice)
  ) {
    return "The testing itself is not the problem; the silence is. The report must state the sample, why it is representative and what remains untested, and the duty holder must be told if findings require the scope to grow.";
  }
  if (
    /critical control circuit in continuous use/.test(question) &&
    /live without comment/.test(choice)
  ) {
    return "Live testing is neither automatic nor something to conceal. It needs a regulation 14 justification and suitable precautions; if the test cannot safely be completed, record the limitation and arrange follow-up.";
  }
  if (
    /ir test result.*1\.5 mω/.test(question) &&
    /wrong way round/.test(choice)
  ) {
    return "Reversing leads does not change a DC insulation-resistance value. The useful check is whether equipment was disconnected, the correct conductors and voltage were used, and the unexpectedly low result needs investigation.";
  }
  if (
    /zs.*measured under/.test(question) &&
    /bonding disconnected/.test(choice)
  ) {
    return "Disconnecting bonding during a live loop test can create dangerous touch voltages and produces a result unlike the installation's normal fault path. Zs is measured with the protective system intact using a safe method.";
  }
  if (
    /r1\+r2 is significantly higher/.test(question) &&
    /instrument fault/.test(choice)
  ) {
    return "An instrument fault is possible only after proving the tester and leads. A single high R1+R2 result more directly points to excess joint resistance, a damaged conductor or an unexpectedly long route that needs tracing.";
  }

  if (/extent and limitations agreed in writing/.test(question)) {
    if (/save time/.test(choice)) {
      return "Written scope is not a time-saving shortcut. It tells every reader which installation parts and tests the conclusions cover, and why anything was excluded.";
    }
    if (/skip live testing/.test(choice)) {
      return "The agreement does not grant permission to skip relevant work. It records genuine restrictions; any live work is separately justified under EAWR regulation 14, with dead testing preferred.";
    }
    if (/bypass the test schedule/.test(choice)) {
      return "Section D cannot replace the schedules. The scope entry defines coverage, while the schedules record the inspections and measured results actually completed.";
    }
  }
  if (/20% sample.*first sampled socket/.test(question)) {
    if (/stop recording defects/.test(choice)) {
      return "An already-unsatisfactory result is not a reason to stop gathering evidence. The recurring workmanship defects reduce confidence in the remaining sockets, so record each finding and expand the affected sample.";
    }
    if (/downgrade the defects/.test(choice)) {
      return "A defect's code comes from its danger, not from whether it was found in a sample. Reversed polarity, loose CPCs and overheating must each be assessed on their real shock or fire risk.";
    }
  }
  if (/12-floor office tower/.test(question) && /cost decision/.test(choice)) {
    return "Cost can influence how work is planned, but the client cannot set an electrically inadequate sample. The competent inspector selects and records representative groups, checks unique safety items directly and expands on adverse findings.";
  }
  if (/section d .*place to record/.test(question)) {
    if (/daily timesheet/.test(choice)) {
      return "A timesheet records labour, not the evidential boundary of an EICR. Section D identifies the installation covered, sampling, exclusions and reasons for each limitation.";
    }
    if (/price of the eicr/.test(choice)) {
      return "The inspection fee belongs in commercial paperwork. Section D is a technical record of extent and limitations, so a later reader knows what the assessment did and did not cover.";
    }
  }
  if (
    /limitations cannot legitimately/.test(question) &&
    /could not be isolated/.test(choice)
  ) {
    return "A genuinely unisolatable circuit may be recorded as a limitation when the reason and missing tests are clear and follow-up is arranged. A limitation becomes improper when it is used to conceal a defect already observed.";
  }
  if (/clear, signed extent-and-limitations/.test(question)) {
    if (/faster invoice/.test(choice)) {
      return "Signing the scope is about traceability, not faster billing. It prevents the report being read as evidence for rooms, circuits or tests that were never assessed.";
    }
    if (/avoids any need for testing/.test(choice)) {
      return "A limitation records missing evidence; it does not replace the testing needed for a meaningful condition assessment. Excessive exclusions can make the report misleading or unusable.";
    }
    if (/reduces the eicr validity/.test(choice)) {
      return "A limitation defines coverage but does not mechanically subtract time from the next-inspection interval. The inspector sets that date from condition, use, risk and the evidence available.";
    }
  }
  if (
    /100-circuit installation.*two sampled circuits return low ir/.test(
      question,
    )
  ) {
    if (/stop and issue satisfactory/.test(choice)) {
      return "Two low-insulation results are adverse evidence, so a satisfactory conclusion would be unjustified. Investigate them and widen the affected sample to learn whether the defect is systematic.";
    }
    if (/refuse to continue/.test(choice)) {
      return "A failed sample is useful evidence, not a reason to abandon the job. The proper response is to investigate and expand testing, stopping only where safety or access makes continued work impossible.";
    }
  }
  if (/mixed sampling/.test(question)) {
    if (/sampling must be uniform/.test(choice)) {
      return "Different populations can justify different extents: unique switchgear, repetitive sockets and occupied lighting do not present identical evidence or risk. Each extent needs a recorded rationale.";
    }
    if (/sampling must always be 100%/.test(choice)) {
      return "BS 7671 does not impose universal 100% periodic testing. Full coverage may be right for small or high-risk groups, but representative recorded sampling is permitted for suitable repetitive populations.";
    }
    if (/sampling never includes consumer units/.test(choice)) {
      return "Consumer units are central safety equipment and must be inspected; in this example they are all included. The issue is whether every stated population and claimed specialist-system check is accurately defined.";
    }
  }
  if (
    /failure to obtain a written agreement/.test(question) &&
    /loses their qualification/.test(choice)
  ) {
    return "A missing written scope does not automatically cancel an inspector's qualification. It makes the report ambiguous and weakens the evidence of what was agreed and actually assessed.";
  }
  if (/basement boiler room/.test(question) && /break in/.test(choice)) {
    return "Forcing entry is unsafe and unauthorised. Record the locked room as a precise access limitation, identify the uncompleted work and arrange access with the key holder.";
  }
  if (
    /sampling: 20% of similar circuits/.test(question) &&
    /re-test 100% just in case/.test(choice)
  ) {
    return "A sound representative sample with no adverse findings does not automatically require 100% retesting. Record its basis and retain the agreed extent unless other evidence reduces confidence.";
  }
  if (/an agreed limitation must/.test(question)) {
    if (/inspector's sole discretion/.test(choice)) {
      return "A limitation cannot be added unilaterally for convenience. Its precise extent and reason must be agreed with the person ordering the work and still leave a meaningful assessment.";
    }
    if (/applied silently/.test(choice)) {
      return "A silent exclusion makes the report appear broader than the work. Record the restricted item, reason, agreement and effect on the inspection evidence.";
    }
    if (/rather not test/.test(choice)) {
      return "Personal preference is not a genuine limitation. Exclusion needs an access, safety or operational reason that is recorded and does not hide known danger.";
    }
  }
  if (/actually sampled circuits.*defect in the report/.test(question)) {
    if (/100% testing is forbidden/.test(choice)) {
      return "Testing every circuit is allowed when it is genuinely completed. The defect is the false record: this inspector sampled but claimed full coverage.";
    }
    if (/100% testing is mandatory/.test(choice)) {
      return "Periodic inspection does not universally require 100% testing. Whatever extent is selected, Section D must state the work actually performed.";
    }
    if (/no documentary impact/.test(choice)) {
      return "Overstating 100% coverage materially misleads the reader about the report's evidence. Sampling and limitations must be recorded accurately.";
    }
  }
  if (/sampling escalation is fundamentally about/.test(question)) {
    if (/^cost$/.test(choice)) {
      return "Cost affects logistics, but escalation is triggered by reduced confidence after defects appear. A cheaper unchanged sample cannot show whether the same fault exists elsewhere.";
    }
    if (/^time$/.test(choice)) {
      return "Time spent is not the deciding variable. The sample grows because findings make the unsampled population less trustworthy.";
    }
    if (/site security/.test(choice)) {
      return "Site security may affect access and planning, but it does not determine statistical or electrical confidence in a sampled population.";
    }
  }
  if (
    /sample is 'all of one type of repeating accessory'/.test(question) &&
    /inappropriate sampling/.test(choice)
  ) {
    return "A homogeneous accessory type can be a valid sampling group. The origin and main switchgear still need their own direct inspection, but that does not make sampling the repeating accessories inappropriate.";
  }
  if (/has no section d entry|section d blank/.test(question)) {
    if (/section d is optional|prs regs are silent/.test(choice)) {
      if (/privately rented/.test(question)) {
        return "The rented-sector regulations do not replace the model EICR's technical content. A blank Section D still omits the extent, sampling and limitations needed to understand what the report covers.";
      }
      return "Section D is part of the model EICR and records the report's extent and limitations. Other legislation being silent does not make that technical evidence optional.";
    }
    if (/domestic property|dwellings are simple/.test(choice)) {
      if (/privately rented/.test(question)) {
        return "A rented dwelling can still contain inaccessible rooms, hidden wiring and untested equipment. Calling it simple does not excuse a blank record of extent and limitations.";
      }
      return "Domestic installations still contain inaccessible items, sampling decisions and scope boundaries. The premises type does not remove the need to state what was covered.";
    }
    if (/no codes are raised/.test(choice)) {
      return "Codes describe defects, while Section D describes evidence. A report can have no codes and still be misleading if it never says what was inspected or tested.";
    }
  }
  if (/sampling boundary is exceeded/.test(question)) {
    if (/stick with the original sample/.test(choice)) {
      return "The defects show that the original sample is no longer representative. Sticking to it ignores evidence that similar faults may exist in the untested population.";
    }
    if (/stop the inspection/.test(choice)) {
      return "Adverse findings call for a larger, documented sample, not abandonment of useful inspection work. Agree and record the revised extent, then continue safely.";
    }
  }
  if (/sampling must not be applied/.test(question)) {
    if (/repeating socket outlets/.test(choice)) {
      return "Similar office sockets form a repetitive population that can be sampled when the selection is representative and expands on defects. They are not a unique installation-wide safety item.";
    }
    if (/repeating lighting points/.test(choice)) {
      return "Repeated corridor lighting points may be sampled as a defined homogeneous group. The inspector still records the extent and responds to any pattern of defects.";
    }
    if (/repeating dado trunking/.test(choice)) {
      return "Repeated accessories in the same dado system can be a legitimate sample population. Unique earthing and bonding measures, by contrast, need direct verification.";
    }
  }
  if (/an eicr limitation must not/.test(question)) {
    if (/access denied by an occupant/.test(choice)) {
      return "Denied access can be a genuine limitation when the exact area, reason and follow-up are recorded. It cannot be used after a danger has already been seen.";
    }
    if (/continuous-process areas/.test(choice)) {
      return "An operationally unavailable process area can be recorded as a limitation with planned follow-up. The entry describes missing evidence; it does not declare the area safe.";
    }
    if (/high-risk areas/.test(choice)) {
      return "Unavailable high-risk areas may still need to be recorded as limitations, but their importance makes prompt coordinated follow-up essential and may restrict the report's usefulness.";
    }
  }
  if (/why isn't 100% always tested/.test(question)) {
    if (/cost/.test(choice)) {
      return "Lower cost is a possible consequence of sampling, not its technical justification. The justification is representative evidence from a homogeneous population, with unique safety items checked directly.";
    }
    if (/convenience/.test(choice)) {
      return "Inspector convenience cannot define the sample. Selection must reflect risk, condition, records and population similarity, and it must expand on defects.";
    }
    if (/industry tradition/.test(choice)) {
      return "Tradition alone supplies no evidence that a sample is representative. The inspector must record a case-specific professional rationale.";
    }
  }
  if (
    /lighting circuits in occupied bedrooms not tested/.test(question) &&
    /verbal note/.test(choice)
  ) {
    return "A verbal comment disappears when the inspector leaves and does not define the report. Record the affected circuits, operational reason, missing tests and recommended follow-up in Section D.";
  }
  if (
    /sample turns up no defects.*consumer unit is plastic/.test(question) &&
    /^skip$/.test(choice)
  ) {
    return "The consumer unit is an observed item outside the sampled sockets or circuits, so a clean sample does not erase it. Inspect its location and condition, then record only the code supported by actual risk.";
  }
  if (
    /previous eicr were significantly different/.test(question) &&
    /copy the previous results/.test(choice)
  ) {
    return "Previous readings are useful for comparison, not a substitute for today's measurements. Copying them would conceal either current deterioration or an earlier/test-method discrepancy that needs investigation.";
  }
  if (/sampling on a tt installation/.test(question)) {
    if (/forbidden/.test(choice)) {
      return "TT earthing does not prohibit sampling of genuinely repetitive accessories or circuits. The electrode, earthing conductor and RCD protection remain unique safety measures that need direct assessment.";
    }
    if (/always at 100%/.test(choice)) {
      return "A TT system does not create a universal 100% rule for every repeated item. Use risk-based sampling while directly checking its unique earthing and RCD measures.";
    }
    if (/always at 5%/.test(choice)) {
      return "Five percent is not a prescribed TT sampling rate and may be far too small. The extent depends on the population, condition, records and findings.";
    }
  }
  if (/limitation that contradicts an observed danger/.test(question)) {
    if (/duty holder agrees/.test(choice)) {
      return "Agreement cannot turn a known danger back into an uninspected item. Once observed, the defect must be classified and communicated regardless of the client's preference.";
    }
    if (/customer is in a hurry/.test(choice)) {
      return "Time pressure cannot erase an observed hazard. Record and code the finding; a limitation is only for evidence that genuinely could not be obtained.";
    }
  }
  if (
    /sampling at 5% to keep the cost down/.test(question) &&
    /refuse the inspection/.test(choice)
  ) {
    return "An arbitrary 5% request should not simply be accepted, but it need not end the job. Explain the evidence needed and agree a representative risk-based extent that can expand on findings.";
  }
  if (
    /whatever the inspector decides on the day/.test(question) &&
    /agree verbally/.test(choice)
  ) {
    return "A purely verbal open-ended scope gives the reader no baseline and the client no clear expectation. Record the initial populations and rationale, then document any evidence-led change on site.";
  }
  if (/sampling failure escalation should not/.test(question)) {
    if (/risk-based/.test(choice)) {
      return "Escalation should be risk-based: the type, severity and repetition of defects determine how far the affected sample must grow.";
    }
    if (/documented/.test(choice)) {
      return "The changed scope must be documented so the report matches the work and a later reader understands why more items were tested.";
    }
    if (/communicated/.test(choice)) {
      return "The duty holder must be told that findings have changed the scope, access needs, disruption and likely cost. Communication does not let them suppress necessary escalation.";
    }
  }
  if (/selected randomly with no inspector preference/.test(question)) {
    if (/random sampling without weighting/.test(choice)) {
      return "Pure random selection can miss small high-risk groups and overrepresent easy low-risk items. First stratify by use, condition and environment, then randomise within genuinely comparable groups if helpful.";
    }
    if (/refuse the inspection/.test(choice)) {
      return "A request for randomness is not a reason to abandon the work. Explain the need for risk strata and agree a representative recorded method.";
    }
  }
  if (
    /limitation cannot exclude a circuit where.*already observed/.test(question)
  ) {
    if (/damaged conductor/.test(choice)) {
      return "A damaged conductor is an observed defect, so it must be assessed and coded rather than moved outside the scope after discovery.";
    }
    if (/polarity issue/.test(choice)) {
      return "A known polarity problem is evidence, not a limitation. Record its actual danger and arrange the necessary action.";
    }
    if (/any observed danger/.test(choice)) {
      return "Any danger already seen must remain in the observations. Limitations describe what was not verified; they cannot hide known hazards.";
    }
  }
  if (/can use 'na'.*'lim'/.test(question)) {
    if (/inspector wants to skip/.test(choice)) {
      return "Inspector preference makes neither N/A nor LIM valid. N/A means the item genuinely does not exist or apply; LIM needs a real agreed restriction and recorded reason.";
    }
    if (/duty holder asks/.test(choice)) {
      return "A client's request cannot relabel an applicable accessible check. LIM needs a genuine restriction, while N/A is only for an irrelevant item.";
    }
    if (/fee was low/.test(choice)) {
      return "A low fee does not change what applies to the installation. Commercial scope must be agreed without misusing N/A or LIM to hide missing essential evidence.";
    }
  }
  if (/inspection sampling escalates because/.test(question)) {
    if (/cost rises/.test(choice)) {
      return "Higher cost is a consequence of extra work, not the cause. Escalation occurs because defects increase the chance of similar faults in untested items.";
    }
    if (/time pressure/.test(choice)) {
      return "Time pressure argues for planning, not a larger sample. The electrical reason to expand is loss of confidence after adverse findings.";
    }
    if (/customer preference/.test(choice)) {
      return "The customer may discuss disruption and access but cannot decide that an unrepresentative sample is adequate. Findings drive the inspector's escalation judgement.";
    }
  }

  if (/mapping best distinguishes n\/v, lim, fi and n\/a/.test(question)) {
    if (/locked roof void = fi/.test(choice)) {
      return "The mapping confuses absence of evidence with danger: a locked roof void is LIM/N/V, a nonexistent pool is N/A, and connected sensitive equipment creates a stated test limitation. FI needs a specific unresolved possible danger.";
    }
    if (/all untested items should be c2/.test(choice)) {
      return "An untested item has not automatically shown potential danger, so C2 would invent a defect. Record N/V or a justified limitation, using FI only when a particular concern may be dangerous and remains unresolved.";
    }
    if (/n\/v and fi mean exactly the same/.test(choice)) {
      return "N/V simply says the item was not verified. FI is much stronger: it records a specific possible danger that needs further investigation, although under Amendment 4 it is advisory and does not by itself alter the overall assessment.";
    }
  }
  if (/fee uplift to pass/.test(question)) {
    if (/accept and pass/.test(choice)) {
      return "Payment cannot change measured defects or their classifications. Passing a known unsatisfactory installation would falsify the report and hide danger from the duty holder and later users.";
    }
    if (/discreet c3/.test(choice)) {
      return "Changing a C1 or C2 danger to C3 falsifies its urgency and can incorrectly make the report satisfactory; changing FI to C3 hides that investigation is still required. Classification follows the evidence, not the fee.";
    }
    if (/skip the codes/.test(choice)) {
      return "Omitting the codes removes the report's safety warning and audit trail. The inspector must record the as-found condition independently and refuse the inducement.";
    }
  }
  if (/records 'satisfactory'.*this means/.test(question)) {
    if (/fully compliant with the current edition/.test(choice)) {
      return "Satisfactory means no C1 or C2 was found within the recorded scope. It is not a declaration that every detail meets the latest edition, and advisory C3 or FI observations may still be present.";
    }
    if (/certified for new use/.test(choice)) {
      return "An EICR is a condition report, not design-and-construction certification for a new use. A change of use may require separate design assessment and installation certification.";
    }
    if (/remedial work completed/.test(choice)) {
      return "A satisfactory result describes the condition found on the inspection date. It does not prove that earlier remedial work occurred; completion needs its own records or certificates.";
    }
  }
  if (/records 'unsatisfactory'.*this means/.test(question)) {
    if (/must be replaced/.test(choice)) {
      return "Unsatisfactory means at least one C1 or C2 requires urgent action. It does not condemn the whole installation; targeted repair may remove the danger or potential danger.";
    }
    if (/next inspection is due immediately/.test(choice)) {
      return "The priority is to make safe, remedy or investigate the recorded findings, not simply repeat the same inspection. Follow-up confirms the work while the original EICR remains the dated record.";
    }
  }
  if (/eicr with a c1 must be communicated/.test(question)) {
    if (/on the final report/.test(choice)) {
      return "Waiting for the finished report leaves immediate danger uncontrolled. Warn the responsible person at once and make safe or isolate where possible, then confirm the C1 in writing.";
    }
    if (/within 28 days/.test(choice)) {
      return "Twenty-eight days is far too late for danger present now. C1 is communicated and controlled immediately; any statutory outer deadline does not permit continued exposure.";
    }
  }
  if (
    /inspector finds a c1/.test(question) &&
    /tell the tenant only/.test(choice)
  ) {
    return "Telling only the tenant may leave the person who controls the installation unaware and does not remove the danger. Make safe or isolate first where possible, then warn the duty holder immediately and record it.";
  }
  if (
    /re-issued as satisfactory once remedial work is complete/.test(question)
  ) {
    if (/re-issue as satisfactory after/.test(choice)) {
      return "The original EICR must remain an honest dated snapshot of the defects found. Completion is documented separately by remedial certificates or written confirmation; it does not rewrite history.";
    }
    if (/re-issue without comment/.test(choice)) {
      return "Removing the original observations destroys the audit trail and misrepresents what was found. Keep the unsatisfactory EICR and attach separate evidence of the completed work.";
    }
    if (/refuse to engage further/.test(choice)) {
      return "The inspector need not falsify the report, but can still explain and verify the proper follow-up records. Refusing all communication does not help the duty holder close out the defects correctly.";
    }
  }
  if (/satisfactory but contains five c3/.test(question)) {
    if (/action all c3.*28 days/.test(choice)) {
      return "C3 items are recommended safety improvements and do not trigger the 28-day rented-sector remedial duty by themselves. They should be considered and prioritised, not misreported as mandatory C2 work.";
    }
    if (/commission a new eicr/.test(choice)) {
      return "Five C3 recommendations do not invalidate the satisfactory report or automatically require another full EICR. The duty holder considers the improvements and follows the stated next-inspection date.";
    }
    if (/switch off the installation/.test(choice)) {
      return "C3 does not identify immediate or potential danger requiring shutdown. Isolation is reserved for an actual risk that warrants it, not the number of improvement suggestions.";
    }
  }
  if (/17th edition installation/.test(question)) {
    if (/all as c1/.test(choice)) {
      return "Age or compliance with an earlier edition does not mean immediate danger. C1 is used only where the present condition exposes someone to danger now.";
    }
    if (/all as c2/.test(choice)) {
      return "A difference from the 18th edition is not automatically potentially dangerous. Assess each item on its current safety effect; some may be C3 or need no code.";
    }
    if (/all as fi/.test(choice)) {
      return "FI is not a blanket label for an older design. It is reserved for a specific observed concern whose possible danger cannot be determined within the inspection.";
    }
  }
  if (
    /remove the c2 because they will fix it tomorrow/.test(question) &&
    /^remove the c2$/.test(choice)
  ) {
    return "A promised future repair does not change the condition found today. Keep the C2 on the original EICR and record the completed remedy separately when evidence is available.";
  }
  if (/single fi observation.*overall result/.test(question)) {
    if (/satisfactory because no codes/.test(choice)) {
      return "The overall assessment is satisfactory under Amendment 4, but the reason given is wrong: FI is a recorded advisory classification, not 'no code', and its specific possible danger still needs prompt investigation.";
    }
    if (/^indeterminate$/.test(choice)) {
      return "The investigation outcome is unknown, but the report outcome is not. FI alone leaves the Amendment 4 overall assessment satisfactory while requiring the named concern to be investigated.";
    }
    if (/satisfactory with c3/.test(choice)) {
      return "The overall assessment is satisfactory, but the classification is FI rather than C3. C3 is a known improvement; FI means a specific possible danger still has to be determined.";
    }
  }
  if (
    /satisfactory with c3 improvements recommended.*communicated/.test(question)
  ) {
    if (/verbal note/.test(choice)) {
      return "A verbal note gives the duty holder no durable list of improvements and no evidence of the report's scope or tests. Supply the complete signed EICR and schedules.";
    }
    if (/short text message/.test(choice)) {
      return "A text message cannot carry the formal observations, extent, limitations and test schedules. The duty holder needs the complete EICR; a message may only accompany it.";
    }
  }
  if (/overall assessment is determined by the codes/.test(question)) {
    if (/total observations > 5/.test(choice)) {
      return "The count is irrelevant: ten advisory C3 or FI observations can remain satisfactory, while one C1 or C2 makes the report unsatisfactory. Severity, not quantity, controls the outcome.";
    }
    if (/inspector's judgement/.test(choice)) {
      return "Professional judgement sets each observation's justified classification, but once a C1 or C2 is recorded the overall report is unsatisfactory; the inspector cannot override that Amendment 4 logic.";
    }
    if (/customer preference/.test(choice)) {
      return "The customer cannot choose the safety outcome. It follows the recorded classifications: any C1 or C2 makes the EICR unsatisfactory under Amendment 4.";
    }
  }

  return undefined;
}

function focusedTechnicalDetail(explanation: string): string {
  const full = clean(explanation);
  const firstSentence = full.match(/^.*?[.!?](?=\s|$)/)?.[0];
  if (firstSentence && firstSentence.length < full.length) return firstSentence;
  const firstClause = full.split(
    /\s+[—–-]\s+|;\s+|,\s+(?:but|while|because|so|with)\s+/,
  )[0];
  if (firstClause && firstClause.length < full.length) {
    return clean(`${firstClause}.`);
  }
  const words = full.split(" ");
  return `${words.slice(0, Math.min(22, words.length - 1)).join(" ")}.`;
}

function rationaleFor(
  question: ExamQuestion,
  choice: ExamChoice,
): string | undefined {
  const option = clean(question.options[choice]);
  const correctOption = clean(question.options[question.answer]);
  const specific = specificScenarioReason(question.prompt, option);
  if (specific) return clean(specific);
  const classification = classificationReason(
    question.prompt,
    option,
    correctOption,
  );
  const document = classification ? undefined : documentReason(option);
  const rentedSupply =
    classification || document
      ? undefined
      : rentedReportSupplyReason(question.prompt, option);
  const authority =
    classification || document || rentedSupply
      ? undefined
      : authorityReason(option);
  const instrument =
    classification || document || rentedSupply || authority
      ? undefined
      : instrumentReason(option);
  const outcome =
    classification || document || rentedSupply || authority || instrument
      ? undefined
      : outcomeReason(option, correctOption);
  const action =
    classification ||
    document ||
    rentedSupply ||
    authority ||
    instrument ||
    outcome
      ? undefined
      : actionReason(question.prompt, option);
  const numeric =
    classification ||
    document ||
    rentedSupply ||
    authority ||
    instrument ||
    outcome ||
    action
      ? undefined
      : numericReason(question.prompt, option, correctOption);
  const optionLead = proposal(option, question.prompt);
  const technicalDetail = focusedTechnicalDetail(question.explanation);
  const topic = topicReason(question.prompt, option, correctOption);
  const contextualTopic = topic ? `${topic} ${technicalDetail}` : topic;
  const reason = classification
    ? `${classification} ${technicalDetail}`
    : document
      ? `${optionLead} ${document} ${technicalDetail}`
      : rentedSupply
        ? rentedSupply
        : authority
          ? `${authority} ${technicalDetail}`
          : instrument
            ? `${instrument} ${technicalDetail}`
            : outcome
              ? `${optionLead} ${outcome} ${technicalDetail}`
              : action
                ? /test the whole installation silently|test live without comment|pass it without comment/i.test(
                    option,
                  )
                  ? `${action} ${technicalDetail}`
                  : `${optionLead} ${action} ${technicalDetail}`
                : numeric
                  ? `${numeric} ${technicalDetail}`
                  : contextualTopic;
  if (!reason) return undefined;
  const duplicateContext = question.prompt.startsWith(
    "An EICR is Unsatisfactory because of a single C2 observation",
  )
    ? "One C2 is sufficient to establish potential danger; being the only observation does not dilute its urgency."
    : question.prompt.startsWith("A C2 made the EICR Unsatisfactory")
      ? "The C2 has already established potential danger, so the next step is proportionate remedial action rather than changing or dismissing the classification."
      : "";
  return clean(`${reason} ${duplicateContext}`);
}

function sourceUrlsFor(question: ExamQuestion): readonly string[] {
  const text =
    `${question.prompt} ${Object.values(question.options).join(" ")}`.toLowerCase();
  const urls = new Set<string>([IET_CURRENT_EDITION, IET_GN3]);

  if (
    /c1|c2|c3|\bfi\b|code|classification|satisfactory|unsatisfactory/.test(text)
  ) {
    urls.add(IET_A4_EICR);
    urls.add(ESF_BPG4);
    urls.add(ESF_WIRING_HELP);
  }
  if (/rcd|rcbo|iδn|trip time|residual/.test(text)) {
    urls.add(IET_RCD_TESTING);
  }
  if (
    /\bzs\b|\bze\b|r1\+r2|insulation|polarity|test result|ring final/.test(text)
  ) {
    urls.add(IET_INSPECTION_FAQ);
  }
  if (/ring final|\br1\b|\brn\b|\br2\b/.test(text)) {
    urls.add(IET_RING_TESTING);
  }
  if (/earth|bond|\btt\b|\bra\b|pen conductor/.test(text)) {
    urls.add(IET_EARTHING_FAQ);
  }
  if (/earth electrode|\btt\b|\bra\b/.test(text)) {
    urls.add(IET_TT_EARTHING);
  }
  if (
    /live work|live test|isolation|duty holder|eawr|reasonably practicable/.test(
      text,
    )
  ) {
    urls.add(HSE_EAWR);
    urls.add(HSE_HSG85);
  }
  if (/probe|test lead|gs38|live test/.test(text)) {
    urls.add(HSE_GS38);
  }
  if (
    /tenant|landlord|rented|28 days|local authority|£40,000|£30,000/.test(text)
  ) {
    urls.add(GOV_RENTED_SECTOR);
  }
  if (/certificate|schedule|section d|extent|limitation|eicr/.test(text)) {
    urls.add(IET_A4_EICR);
    urls.add(IET_MODEL_FORMS);
  }
  if (/ev charger|evcp|electric vehicle|type ac|type a|type b rcd/.test(text)) {
    urls.add(IET_EV_GUIDANCE);
    urls.add(ESF_WIRING_HELP);
  }
  return [...urls];
}

function reviewed(scope: ReviewedScope) {
  const section = enhancedPeriodicInspection.sections.find(
    (entry) => entry.id === scope.sectionId,
  );
  const variant = section?.variants.find(
    (entry) => entry.id === scope.variantId,
  );
  const matches =
    variant?.questions.filter(
      (entry) =>
        entry.number === scope.questionNumber &&
        entry.prompt.endsWith(scope.promptSuffix),
    ) ?? [];
  if (matches.length !== 1) {
    throw new Error(
      `Expected one ${scope.sectionId}/${scope.variantId} Q${scope.questionNumber}: ${scope.promptSuffix}`,
    );
  }
  const question = matches[0]!;
  const wrongChoices = CHOICES.filter((choice) => choice !== question.answer);
  const rationaleEntries = wrongChoices.map((choice) => {
    const reason = rationaleFor(question, choice);
    if (!reason) {
      throw new Error(
        `Unsupported rationale in ${scope.sectionId}/${scope.variantId} Q${scope.questionNumber} for ${choice}: ${question.options[choice]}`,
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
      `Wrong-answer rationale copies the full correct explanation in ${scope.sectionId}/${scope.variantId} Q${scope.questionNumber}`,
    );
  }
  if (new Set(reasons).size !== reasons.length) {
    throw new Error(
      `Duplicate rationale in ${scope.sectionId}/${scope.variantId} Q${scope.questionNumber}: ${JSON.stringify(rationaleEntries)}`,
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

function buildPeriodicInspectionPart1() {
  const reviewedQuestions = SCOPES.map(reviewed);
  if (reviewedQuestions.length !== 480) {
    throw new Error(
      `Periodic Inspection Part 1 must cover 480 questions; found ${reviewedQuestions.length}`,
    );
  }
  const rationales = reviewedQuestions.flatMap((entry) =>
    Object.values(entry.rationales),
  );
  if (rationales.length !== 1_440) {
    throw new Error(
      `Periodic Inspection Part 1 must contain 1,440 wrong-answer rationales; found ${rationales.length}`,
    );
  }
  if (new Set(rationales).size !== rationales.length) {
    throw new Error(
      `Periodic Inspection Part 1 rationales must all be option-specific; found ${rationales.length - new Set(rationales).size} duplicate(s)`,
    );
  }
  const genericRationale = rationales.find((reason) =>
    /UNSUPPORTED OPTION LEAD|\bChoosing\b|does not fit|doesn't fit|applicable answer|because it is wrong|wrong feature|This option proposes|the correct answer is|The danger level has to be tied|applies the wrong rented-sector duty|would misstate or arbitrarily narrow|gives (?:it|the finding) (?:an outcome or )?danger level|would not establish the particular property|would apply the wrong numerical limit|makes the document certify|would make the report say more|gives the EICR a job it does not perform|assigns the wrong document role|The word “always” overstates this/i.test(
      reason,
    ),
  );
  if (genericRationale) {
    throw new Error(
      `Periodic Inspection Part 1 contains a generic rationale: ${genericRationale}`,
    );
  }
  return reviewedQuestions;
}

export const periodicInspectionPart1 = buildPeriodicInspectionPart1();
