import type { Exam, ExamQuestion } from "./types";

const exactAccessTrainingPatQuestions: ExamQuestion[] = [
  {
    number: 1,
    prompt: "Which of these does not describe a category of inspection and testing, referred to in the Code of Practice?",
    options: {
      A: "Before every use, a user should check equipment and record all findings",
      B: "Inspections without tests, when equipments is checked and records kept of all results",
      C: "Equipment is inspected and tested and records kept of all results",
      D: "Before every use, a user should check the equipment and record any faults found"
    },
    answer: "A",
    explanation: "The exact homework wording marks this as the non-COP category. User checks do not require a record of every finding; faults are reported."
  },
  {
    number: 2,
    prompt: "Why must business equipment be powered down prior to disconnecting from the supply when undertaking formal inspection?",
    options: {
      A: "There is a risk of data loss",
      B: "Fibre optic data cables will be safe to disconnect",
      C: "Monitors will discharge quicker",
      D: "To avoid static electricity"
    },
    answer: "A",
    explanation: "Switching off through the normal shutdown process prevents data loss or file corruption before the appliance is unplugged for inspection."
  },
  {
    number: 3,
    prompt: "If it is required to carry out a touch current test the recorded value should not exceed",
    options: {
      A: "3.5 5mA for DC powered equipment",
      B: "5mA for AC powered equipment",
      C: "5mA for DC powered equipment",
      D: "3.5 5mA for AC powered equipment"
    },
    answer: "B",
    explanation: "This is the answer key used by the Access Training homework variation."
  },
  {
    number: 4,
    prompt: "Extension leads that are longer than the recommended lengths should be protected by a",
    options: {
      A: "BS 3036 fuse",
      B: "Double pole switch",
      C: "30mA RCD",
      D: "300mA RCD"
    },
    answer: "C",
    explanation: "Longer extension leads should have 30 mA RCD additional protection."
  },
  {
    number: 5,
    prompt: "The sample test instrument record sheet provided in the Code of Practice requires certain details to be kept about the instruments used. These details include",
    options: {
      A: "Instrument type; Model; Serial Number and Date of last calibration",
      B: "Instrument Manufacturer; Model; Serial Number and Date of next calibration",
      C: "Instrument type; Model; Serial Number and Date of next calibration",
      D: "Instrument Manufacturer; Model; Serial Number and Date of last calibration"
    },
    answer: "A",
    explanation: "The record needs the instrument type, model, serial number and last calibration date so the result is traceable to a calibrated instrument."
  },
  {
    number: 6,
    prompt: "A portable appliance is fitted with a cable 4.5m long and has a protective condor of 1.0mm2. Calculate the resistance of the protective conductor.",
    options: {
      A: "70.2 milliohms",
      B: "87.75 milliohms",
      C: "78 milliohms",
      D: "97.5 milliohms"
    },
    answer: "B",
    explanation: "1.0 mm2 protective conductor resistance is taken as 19.5 milliohms per metre. 19.5 x 4.5 = 87.75 milliohms."
  },
  {
    number: 7,
    prompt: "What causes high protective conductor currents in equipment such as variable speed drive which incorporates an EMC filter?",
    options: {
      A: "The choke that is wired in series with the line conductor",
      B: "The capacitors and discharge resistors within the filter",
      C: "The choke that is wired in series with the neutral conductor",
      D: "The length of the CPC cable"
    },
    answer: "B",
    explanation: "EMC filter capacitors leak a small current to the protective conductor, which raises protective conductor current."
  },
  {
    number: 8,
    prompt: "The health and safety executive provide guidance documents on maintaining electrical equipment. What publication provides guidance on electrical safety on construction sites?",
    options: {
      A: "INDG236",
      B: "HSG107",
      C: "HSG141",
      D: "GS38"
    },
    answer: "C",
    explanation: "HSG141 is the HSE guidance for electrical safety on construction sites."
  },
  {
    number: 9,
    prompt: "A person who is not skilled in electrical work, but is classed as competent to carry out inspection and testing of electrical equipment, is known as being competent to which level?",
    options: {
      A: "Level 1",
      B: "Level 2",
      C: "Level 3",
      D: "Level 4"
    },
    answer: "A",
    explanation: "This exact Access Training homework variation marks the non-electrically-skilled competent tester as Level 1."
  },
  {
    number: 10,
    prompt: "What is the frequency of testing for a mobile class 1 item of equipment used in commercial kitchens",
    options: {
      A: "12 months",
      B: "1 month",
      C: "3 months",
      D: "There are no specified timescales"
    },
    answer: "D",
    explanation: "The 5th Edition Code of Practice uses risk assessment rather than fixed mandatory timescales."
  },
  {
    number: 11,
    prompt: "The IP code for equipment which provides protection against a solid foreign object of 12.5mm diameter or more and protection against spraying water is represented by which IP code?",
    options: {
      A: "IP14",
      B: "IP23",
      C: "IP21",
      D: "IP52"
    },
    answer: "B",
    explanation: "First digit 2 = protection against solid objects of 12.5 mm diameter or more. Second digit 3 = spraying water."
  },
  {
    number: 12,
    prompt: "A 2m length of flex with a csa of 0.75mm squared which has a rewireable plug top has a maximum fuse rating of",
    options: {
      A: "10A",
      B: "6A",
      C: "13A",
      D: "3A"
    },
    answer: "A",
    explanation: "This is the corrected Access Training homework key for this exact 2 m, 0.75 mm2, rewireable-plug question."
  },
  {
    number: 13,
    prompt: "When performance testing an RCD, the test should be done using",
    options: {
      A: "100mA",
      B: "150mA",
      C: "300mA",
      D: "30mA"
    },
    answer: "B",
    explanation: "The homework variation expects the 5 x test current for a 30 mA RCD: 5 x 30 mA = 150 mA."
  },
  {
    number: 14,
    prompt: "The dimensions of the conductors in an extension lead affect the resistance of the lead. Which of these correctly describes two conditions when resistance would reduce?",
    options: {
      A: "Reduction in length and reduction in diameter",
      B: "Increase in length and increase in diameter",
      C: "Increase in length and reduction in diameter",
      D: "Increase in diameter and reduction in length"
    },
    answer: "D",
    explanation: "Resistance falls when conductor length is reduced and conductor diameter or CSA is increased."
  },
  {
    number: 15,
    prompt: "Equipment, in which protection against electric shock relies upon basic insulation only, is the definition of construction classification",
    options: {
      A: "Class I",
      B: "Class II",
      C: "Class III",
      D: "Class 0"
    },
    answer: "D",
    explanation: "Class 0 equipment has basic insulation only and no protective earth or reinforced insulation."
  },
  {
    number: 16,
    prompt: "Which legal document requires that electrical equipment supplied under contract is of satisfactory quality?",
    options: {
      A: "The electrical Equipment (Safety) Regulations 2016",
      B: "The supply of goods and services act 1982",
      C: "The supply of Machinery (Safety) Regulations 2008",
      D: "The health and safety at work act"
    },
    answer: "B",
    explanation: "The Supply of Goods and Services Act 1982 covers satisfactory quality for goods supplied under contract."
  },
  {
    number: 17,
    prompt: "What is not considered to be a factor when considering a risk based assessment when determining the initial frequency of inspection and testing?",
    options: {
      A: "The environment",
      B: "Frequency of use",
      C: "Previous records",
      D: "The fixed wiring RCD trip time"
    },
    answer: "D",
    explanation: "Portable-equipment inspection frequency is based on the appliance, use, environment and history, not the trip time of an RCD in the fixed wiring."
  },
  {
    number: 18,
    prompt: "When tested separately, a 2 core lead set is tested as a",
    options: {
      A: "Class III appliance",
      B: "Class II appliance",
      C: "Class 0 appliance",
      D: "Class I appliance"
    },
    answer: "B",
    explanation: "A 2-core lead has no protective conductor, so when it is tested separately it is treated as Class II."
  },
  {
    number: 19,
    prompt: "What tolerance is given in excess of the resistance of the protective conductor when measuring the earth continuity of an appliance with a supply cable?",
    options: {
      A: "0.1 Ohms",
      B: "0.2 Ohms",
      C: "0.02 Ohms",
      D: "0.01 Ohms"
    },
    answer: "A",
    explanation: "The allowance is 0.1 ohms above the calculated protective conductor resistance."
  },
  {
    number: 20,
    prompt: "A load test is particularly useful for",
    options: {
      A: "Central heating systems",
      B: "Heating equipment",
      C: "Domestic lighting",
      D: "IT equipment"
    },
    answer: "B",
    explanation: "A load test is most useful for heating equipment because the load current confirms the element is drawing as expected."
  },
  {
    number: 21,
    prompt: "According to the Code of Practice which basic requirement demonstrates that a maintenance regime for electrical appliances exists within an organisation?",
    options: {
      A: "PAT strikers on all appliances",
      B: "The records of inspections and tests",
      C: "The invoices from the inspection and testing contractor",
      D: "A kitemark logo on the company letterhead"
    },
    answer: "B",
    explanation: "Inspection and test records are the evidence that a maintenance regime exists."
  },
  {
    number: 22,
    prompt: "What test voltage is recommended when carrying out an insulation resistance test where surge protection devices are incorporated in the equipment?",
    options: {
      A: "250 V d.c.",
      B: "250 V a.c.",
      C: "500 V a.c.",
      D: "500 V d.c."
    },
    answer: "A",
    explanation: "A 250 V DC insulation resistance test is used where surge protective devices may clamp or be damaged by a 500 V test."
  },
  {
    number: 23,
    prompt: "The minimum cross sectional area of an appliance flex for a portable socket outlet protected by a 13 A plugtop fuse is",
    options: {
      A: "2.5mm squared",
      B: "1.25mm squared",
      C: "4mm squared",
      D: "0.75mm squared"
    },
    answer: "B",
    explanation: "A portable socket outlet protected by a 13 A plugtop fuse requires at least 1.25 mm2 flex."
  },
  {
    number: 24,
    prompt: "Which Code of Practice model form could be used to record a formal visual and combined inspection and test record?",
    options: {
      A: "Form 4.2",
      B: "Form 4.4",
      C: "Form 4.1",
      D: "Form 4.3"
    },
    answer: "C",
    explanation: "This exact Access Training homework variation marks Form 4.1 for this wording."
  },
  {
    number: 25,
    prompt: "A severe electric shock occur under fault free conditions if the body is placed between",
    options: {
      A: "The earth pin of a power socket and the metallic case of a class 1 item",
      B: "Two earthed exposed conductive parts",
      C: "Two conductors at the same potential",
      D: "A live conductor and earth"
    },
    answer: "D",
    explanation: "A person touching live and earth at the same time can receive a severe shock under fault-free direct-contact conditions."
  },
  {
    number: 26,
    prompt: "When carrying out a low or high current test, in both cases the protective conductor test should be made between accessible conductive paths and",
    options: {
      A: "The neutral conductor",
      B: "The main earth terminal",
      C: "The earth pin of the plug",
      D: "Any supplementary bond"
    },
    answer: "C",
    explanation: "The protective conductor continuity test is made between exposed conductive parts and the earth pin of the plug."
  },
  {
    number: 27,
    prompt: "A method of reducing the risk of electric shock under fault conditions is to use SELV equipment, this method",
    options: {
      A: "Has no connection to earth on the load side",
      B: "Needs to have an earth connection on the load side",
      C: "Uses a centre tapped transformed with the centre connected to earth",
      D: "Operates at 110 V a.c."
    },
    answer: "A",
    explanation: "SELV is separated from earth on the load side."
  },
  {
    number: 28,
    prompt: "Which would not be carried out on Class II equipment?",
    options: {
      A: "Polarity test",
      B: "Insulation resistance test",
      C: "Protective conductor continuity test",
      D: "Functional tests"
    },
    answer: "C",
    explanation: "Class II equipment has no protective conductor, so protective conductor continuity is not carried out."
  },
  {
    number: 29,
    prompt: "What is the expected protection conductor resistance of an appliance cable if it has a CSA of 0.75mm squared and is 1.5m long?",
    options: {
      A: "0.39 Ohms",
      B: "39 Ohms",
      C: "339 Ohms",
      D: "0.039 Ohms"
    },
    answer: "D",
    explanation: "0.75 mm2 flex is approximately 26 milliohms per metre. 26 x 1.5 = 39 milliohms = 0.039 ohms."
  },
  {
    number: 30,
    prompt: "A toaster is generally classified as",
    options: {
      A: "Mobile",
      B: "Portable",
      C: "Transportable",
      D: "Hand-held"
    },
    answer: "A",
    explanation: "This exact Access Training homework variation marks toaster as mobile."
  },
  {
    number: 31,
    prompt: "The electricity at work regulations is only one item of legislation which refers to electrical equipment used at work. The voltages covered by this legislation",
    options: {
      A: "Are anything above the domestic voltage of 230V",
      B: "Range up to 1000V a.c. or 2500V d.c. between conductors",
      C: "Range from extra low voltage battery powered items to 400kV transmission equipment",
      D: "Are anything below 600V a.c. or 900V d.c. between conductors and earth"
    },
    answer: "C",
    explanation: "The Electricity at Work Regulations cover electrical systems at all voltages, from extra-low-voltage items to high-voltage transmission equipment."
  },
  {
    number: 32,
    prompt: "Some aspects of a fixed installation, when noticed, should be recorded or discussed with the owner of the property. Which of these should not lead to a tester’s recommendation that the installation itself should be inspected or reviewed?",
    options: {
      A: "Red and black cores in the fixed wiring",
      B: "Limited or no RCD protection",
      C: "No adequate means of earthing",
      D: "Condition of socket outlets"
    },
    answer: "A",
    explanation: "Red and black fixed-wiring cores indicate older cable colours, not an automatic defect requiring inspection or review."
  },
  {
    number: 33,
    prompt: "10 mA converted to amperes is",
    options: {
      A: "0.001 A",
      B: "0.1 A",
      C: "0.01 A",
      D: ".0001 A"
    },
    answer: "C",
    explanation: "10 mA = 10 / 1000 A = 0.01 A."
  },
  {
    number: 34,
    prompt: "Which class of equipment is NOT acceptable in the UK?",
    options: {
      A: "Class 0",
      B: "Class I",
      C: "Class III",
      D: "Class II"
    },
    answer: "A",
    explanation: "Class 0 equipment is not acceptable in the UK."
  },
  {
    number: 35,
    prompt: "Which regulations place a legal requirement on a landlord, who provides electrical equipment as part of a tenancy, to ensure that it is safe when first supplied?",
    options: {
      A: "The housing act (England and Wales)",
      B: "BS 7671",
      C: "WEEE regulations",
      D: "The electrical equipment (safety) regulations"
    },
    answer: "D",
    explanation: "The Electrical Equipment (Safety) Regulations apply to electrical equipment supplied as part of a tenancy."
  }
];

function makeVariant(id: string) {
  return {
    id,
    questions: exactAccessTrainingPatQuestions.map((question) => ({ ...question }))
  };
}

export const patTestingExam: Exam = {
  id: "pat-testing",
  title: "PAT Testing (5th Edition COP)",
  subtitle: "Exact Access Training homework practice bank",
  description:
    "The exact Access Training PAT Testing (5th Edition) homework variation used for focused recall practice. It keeps the live wording and the corrected answer key from the completed homework attempt.",
  format: "Each attempt = the same 35 multiple-choice questions. Pass at 70%+.",
  passPercent: 0.7,
  sections: [
    {
      id: "section-1",
      title: "Access Training PAT Homework",
      variants: [
        makeVariant("v1"),
        makeVariant("v2"),
        makeVariant("v3"),
        makeVariant("v4"),
        makeVariant("v5")
      ]
    }
  ],
  scoring: [
    { threshold: 0.9, label: "Strong - exact homework key is secure" },
    { threshold: 0.7, label: "Solid - review the missed homework items" },
    { threshold: 0.5, label: "Needs targeted revision - repeat the exact set" },
    { threshold: 0, label: "Major gaps - revisit the PAT notes first" }
  ],
  priorities: [
    "Quiz-specific corrections: 0.75 mm2, 2 m rewireable flex = 10 A; toaster = mobile; combined inspection/test form wording = Form 4.1.",
    "Remember the Access Training wording where it differs from general COP study notes.",
    "Treat every attempt as the exact homework recall drill, not the broader PAT revision bank."
  ]
};
