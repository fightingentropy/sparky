const HSE_MAINTAINING_EQUIPMENT =
  "https://www.hse.gov.uk/pubns/priced/hsg107.pdf";
const HSE_PAT_FAQ =
  "https://www.hse.gov.uk/electricity/faq-portable-appliance-testing.htm";
const HSE_ELECTRIC_EQUIPMENT =
  "https://www.hse.gov.uk/electricity/electricequip.htm";
const HSE_EAWR = "https://www.hse.gov.uk/pubns/priced/hsr25.pdf";
const HSE_EAWR_COMMENCEMENT =
  "https://www.legislation.gov.uk/uksi/1989/635/pdfs/uksi_19890635_en.pdf";
const HSE_SAFE_WORKING = "https://www.hse.gov.uk/pubns/priced/hsg85.pdf";
const IET_FIFTH_EDITION =
  "https://electrical.theiet.org/wiring-matters/years/2020/81-july-2020/the-all-new-5th-edition-of-the-iet-code-of-practice-for-in-service-inspection-and-testing-of-electrical-equipment/";
const IET_RISK_BASED_INTERVALS =
  "https://electrical.theiet.org/wiring-matters/years/2021/84-march-2021/the-all-new-5th-edition-of-the-iet-code-of-practice-for-in-service-inspection-and-testing-of-electrical-equipment/";
const IET_EARTH_CONTINUITY =
  "https://electrical.theiet.org/media/1658/in-service-inspection-and-testing-of-electrical-equipment-the-earth-continuity-test.pdf";
const IET_PAT_GUIDANCE =
  "https://electrical.theiet.org/media/1063/2005_16_autumn_wiring_matters__complete_no_adverts.pdf?type=pdf";
const IET_EXTRANEOUS_CONDUCTIVE_PARTS =
  "https://electrical.theiet.org/wiring-matters/years/2019/75-may-2019/to-bond-or-not-to-bond/";
const IET_BS_7671 =
  "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations";
const IET_INSTRUMENT_ACCURACY =
  "https://electrical.theiet.org/media/1696/ongoing-accuracy-of-test-instruments.pdf";
const FLUKE_PAT_TESTER =
  "https://www.fluke.com/en-gb/product/electrical-testing/portable-appliance-testers/fluke-6200-2";
const SEAWARD_CLASS_II_LIMITS =
  "https://www.seaward.com/gb/products/pat-testing/pat-testers/403a910-primetest-250-plus/";
const SEAWARD_EQUIPMENT_CLASSES =
  "https://www.seaward.com/gb/support/pat-testing/faqs/15321-what-are-the-different-classes-and-how-to-determine-what-class-an-appliance-is/";
const ELECTRICAL_SAFETY_FIRST_PLUGS =
  "https://www.electricalsafetyfirst.org.uk/safety-advice/home-and-people/house-maintenance/plugs-and-fuses/";
const LENOVO_HIGH_TOUCH_CURRENT =
  "https://pubs.lenovo.com/sr860-v4/install_power_supply";
const DONCASTER_CABLE_RATINGS =
  "https://www.doncastercables.com/technical-help/9";
const NIST_SI_PREFIXES = "https://www.nist.gov/pml/owm/metric-si-prefixes";

export const patTestingTest4 = [
  {
    prompt:
      "In the traditional equipment-class system, which class relies on supply at separated extra-low voltage and does not rely on protective earthing?",
    options: [
      "Class 0 Equipment",
      "Class I Equipment",
      "Class II Equipment",
      "Class III Equipment",
    ],
    answer: "Class III Equipment",
    rationales: {
      "Class 0 Equipment":
        "Class 0 uses basic insulation alone and has no protective-earth connection. Its absence of an earth does not mean that its protection is provided by an extra-low-voltage supply.",
      "Class I Equipment":
        "Class I combines basic insulation with protective earthing of accessible conductive parts, so it does rely on an earth connection rather than SELV alone.",
      "Class II Equipment":
        "Class II obtains shock protection from double or reinforced insulation. Its defining measure is enhanced insulation, not operation from a separated extra-low-voltage source.",
    },
    sourceUrls: [IET_FIFTH_EDITION, SEAWARD_EQUIPMENT_CLASSES],
  },
  {
    prompt:
      "On what date did the Electricity at Work Regulations 1989 generally come into force?",
    options: ["1 April 1989", "1 April 1990", "1 April 1999", "1 April 2004"],
    answer: "1 April 1990",
    rationales: {
      "1 April 1989":
        "The year 1989 appears in the Regulations' title and statutory-instrument number, but regulation 1 set their commencement for the following year.",
      "1 April 1999":
        "The Management of Health and Safety at Work Regulations date from 1999; that year is not the commencement year of the Electricity at Work Regulations.",
      "1 April 2004":
        "By 2004 the Electricity at Work Regulations had already been in force for fourteen years, so this date is much too late.",
    },
    sourceUrls: [HSE_EAWR_COMMENCEMENT, HSE_EAWR],
  },
  {
    prompt: "The most important check on a portable appliance is:",
    options: [
      "Inspection review",
      "Production testing",
      "Type testing",
      "Visual inspection",
    ],
    answer: "Visual inspection",
    rationales: {
      "Inspection review":
        "An inspection review is not the direct examination of the item. Reviewing paperwork cannot reveal a new split cable, damaged plug or burn mark on the equipment in front of the user.",
      "Production testing":
        "Production testing is performed when equipment is manufactured. It cannot identify damage, misuse or deterioration that develops later while the item is in service.",
      "Type testing":
        "Type testing establishes whether a representative design meets its product standard. It does not assess the present condition of each appliance at work.",
    },
    sourceUrls: [HSE_PAT_FAQ, HSE_ELECTRIC_EQUIPMENT],
  },
  {
    prompt:
      "Under current IET guidance, how should the initial combined inspection-and-testing interval for Class I IT equipment in a school be set?",
    options: [
      "By the dutyholder from a risk assessment and previous maintenance findings",
      "Exactly every 24 months in every school",
      "Exactly every 3 months in every school",
      "Exactly every 6 months in every school",
    ],
    answer:
      "By the dutyholder from a risk assessment and previous maintenance findings",
    rationales: {
      "Exactly every 24 months in every school":
        "A two-year interval may suit some low-risk equipment, but the current Code does not prescribe it for every school regardless of use, location or defect history.",
      "Exactly every 3 months in every school":
        "Three-monthly combined testing would be unnecessarily frequent for much protected IT equipment and cannot be imposed without considering the actual risk.",
      "Exactly every 6 months in every school":
        "Six months is another fixed calendar answer that ignores whether the equipment is static, heavily handled, damaged frequently or used in a harsh area.",
    },
    sourceUrls: [IET_RISK_BASED_INTERVALS, HSE_MAINTAINING_EQUIPMENT],
  },
  {
    prompt:
      "Under current IET guidance, which earth-continuity approach is generally preferred for routine in-service testing?",
    options: [
      "A mandatory 10 A test for every item",
      "A mandatory 15 A test for every item",
      "A suitable lower-current continuity test selected for the equipment",
      "A mandatory 35 A test for every item",
    ],
    answer:
      "A suitable lower-current continuity test selected for the equipment",
    rationales: {
      "A mandatory 10 A test for every item":
        "Ten amperes is available on some testers or in some national modes, but current IET guidance does not make it compulsory for every construction.",
      "A mandatory 15 A test for every item":
        "A universal 15 A rule has no basis in the current risk- and equipment-based selection of earth-continuity methods.",
      "A mandatory 35 A test for every item":
        "Thirty-five amperes is above the traditional high-current PAT value of about 25 A and could apply needless stress without improving a routine measurement.",
    },
    sourceUrls: [IET_FIFTH_EDITION, FLUKE_PAT_TESTER],
  },
  {
    prompt: "What is meant by a PAT tester's 'soft' earth-continuity test?",
    options: [
      "A high-current test applied for a shorter time",
      "A low-current protective-conductor continuity test",
      "An insulation test at a reduced voltage",
      "A functional test below normal supply voltage",
    ],
    answer: "A low-current protective-conductor continuity test",
    rationales: {
      "A high-current test applied for a shorter time":
        "The traditional high-current bond measurement is described as the hard test. Short duration does not turn that high-current method into a soft test.",
      "An insulation test at a reduced voltage":
        "An insulation test measures resistance between live conductors and accessible or earthed parts. It does not measure continuity of the protective conductor.",
      "A functional test below normal supply voltage":
        "A functional check confirms that equipment operates as intended. It is separate from measuring the resistance of its protective-earth path.",
    },
    sourceUrls: [IET_EARTH_CONTINUITY, FLUKE_PAT_TESTER],
  },
  {
    prompt:
      "When assessing earth continuity of an extension lead, which limit accounts for the lead conductor's length and cross-sectional area?",
    options: [
      "0.1 Ω plus the calculated protective-conductor resistance R",
      "0.1 Ω regardless of the lead length",
      "Any resistance is acceptable if the lead is shorter than 15 m",
      "The RCD rating alone determines the continuity limit",
    ],
    answer: "0.1 Ω plus the calculated protective-conductor resistance R",
    rationales: {
      "0.1 Ω regardless of the lead length":
        "A longer or smaller protective conductor has more inherent resistance. Applying 0.1 Ω alone can reject a sound long lead or fail to distinguish its expected cord resistance.",
      "Any resistance is acceptable if the lead is shorter than 15 m":
        "A short lead can still contain a broken, loose or corroded protective conductor. Its measured result must remain within the calculated continuity limit.",
      "The RCD rating alone determines the continuity limit":
        "An RCD's residual operating current does not calculate the resistance of the lead's earth core. The conductor material, area and length determine R.",
    },
    sourceUrls: [IET_EARTH_CONTINUITY],
  },
  {
    prompt: "Formal visual inspections should be carried out by:",
    options: [
      "All users",
      "Competent persons and other users",
      "Competent persons only",
      "The manufacturers representative",
    ],
    answer: "Competent persons only",
    rationales: {
      "All users":
        "Users can be trained to make simple pre-use checks, but a formal inspection requires additional knowledge and judgement beyond the ordinary user role.",
      "Competent persons and other users":
        "Including people who are not competent defeats the control. Anyone assigned the formal inspection must have suitable training, skills and knowledge for that task.",
      "The manufacturers representative":
        "A manufacturer may provide useful instructions, but its representative is not required to perform every formal inspection; competence is the deciding requirement.",
    },
    sourceUrls: [HSE_MAINTAINING_EQUIPMENT, HSE_PAT_FAQ],
  },
  {
    prompt:
      "After safely isolating permanently connected equipment at a flex outlet, which listed instrument can perform dead insulation-resistance and continuity measurements?",
    options: [
      "A clamp ammeter (tong tester)",
      "A dedicated portable appliance test instrument",
      "A mains voltage tester",
      "An insulation/continuity tester",
    ],
    answer: "An insulation/continuity tester",
    rationales: {
      "A clamp ammeter (tong tester)":
        "A clamp ammeter measures current in an energised conductor without opening the circuit. It does not perform dead insulation-resistance or low-resistance continuity tests.",
      "A dedicated portable appliance test instrument":
        "A standard PAT sequence expects plug-connected equipment. Permanently connected equipment needs a method and connections suited to the isolated flex outlet rather than an assumed plug-in routine.",
      "A mains voltage tester":
        "A voltage tester can help prove dead when used correctly, but it does not measure insulation resistance or the resistance of a protective conductor.",
    },
    sourceUrls: [IET_FIFTH_EDITION, HSE_SAFE_WORKING],
  },
  {
    prompt:
      "Which of the following tests may inadvertently damage equipment insulation:",
    options: [
      "Dielectric strength testing",
      "Earth continuity testing",
      "Functional testing",
      "Insulation resistance testing",
    ],
    answer: "Dielectric strength testing",
    rationales: {
      "Earth continuity testing":
        "A correctly selected continuity test applies a low voltage across the protective path. It is not intended to impose high electrical stress across insulation.",
      "Functional testing":
        "A functional test operates the equipment in its normal manner and checks safety-related functions; it does not deliberately apply an elevated voltage to insulation.",
      "Insulation resistance testing":
        "An appropriate insulation-resistance test uses a much lower DC test voltage than a dielectric-strength test and can be reduced or replaced where electronics are sensitive.",
    },
    sourceUrls: [IET_PAT_GUIDANCE],
  },
  {
    prompt:
      "Why does a 2.5 mm² conductor size alone not establish one universally safe maximum extension-lead length?",
    options: [
      "Every 2.5 mm² lead is limited to exactly 12 metres",
      "Every 2.5 mm² lead is limited to exactly 15 metres",
      "Acceptable length also depends on load, conductor resistance, voltage drop, thermal conditions, fault protection and manufacturer data",
      "Every 2.5 mm² lead is safe up to exactly 35 metres",
    ],
    answer:
      "Acceptable length also depends on load, conductor resistance, voltage drop, thermal conditions, fault protection and manufacturer data",
    rationales: {
      "Every 2.5 mm² lead is limited to exactly 12 metres":
        "Twelve metres was associated with a smaller 1.25 mm² lead in older guidance. It is not a universal boundary for every 2.5 mm² construction and load.",
      "Every 2.5 mm² lead is limited to exactly 15 metres":
        "Fifteen metres was an older recommendation for 1.5 mm² conductors, and a bare length still omits the lead's actual electrical and thermal conditions.",
      "Every 2.5 mm² lead is safe up to exactly 35 metres":
        "A 35 m lead can have excessive voltage drop or conductor resistance and may overheat when coiled or heavily loaded; its cross-section alone cannot guarantee safety.",
    },
    sourceUrls: [IET_EARTH_CONTINUITY, HSE_MAINTAINING_EQUIPMENT],
  },
  {
    prompt:
      "Which statement correctly describes the role of a 30 mA RCD when a long extension lead is used?",
    options: [
      "It adds shock protection but does not correct excessive voltage drop, heating or conductor resistance",
      "It doubles the cable's current-carrying capacity",
      "It screens the cable against mechanical damage",
      "It makes every lead length safe when supplied by a Type B circuit-breaker",
    ],
    answer:
      "It adds shock protection but does not correct excessive voltage drop, heating or conductor resistance",
    rationales: {
      "It doubles the cable's current-carrying capacity":
        "An RCD responds to residual current leaking from the intended circuit. It neither enlarges the conductors nor increases the current they can carry safely.",
      "It screens the cable against mechanical damage":
        "Electrical residual-current protection cannot stop a lead being cut, crushed or abraded. Physical routing and suitable cable construction control mechanical damage.",
      "It makes every lead length safe when supplied by a Type B circuit-breaker":
        "Neither an RCD nor a Type B breaker removes voltage drop, load, earth-path resistance and heating constraints, so an arbitrary length can remain unsuitable.",
    },
    sourceUrls: [HSE_ELECTRIC_EQUIPMENT, IET_EARTH_CONTINUITY],
  },
  {
    prompt:
      "The minimum cross-sectional area for a flex protected by a 3A fused BS 1363 plug is:",
    options: ["0.23mm²", "0.5mm²", "0.75mm²", "1.0mm²"],
    answer: "0.5mm²",
    rationales: {
      "0.23mm²":
        "A 0.23 mm² conductor is below the cited minimum and would have insufficient current capacity and mechanical robustness for this mains flex arrangement.",
      "0.75mm²":
        "A 0.75 mm² flex may be selected for greater load or strength, but it is larger than the minimum conductor cited for protection by a 3 A plug fuse.",
      "1.0mm²":
        "One square millimetre offers still more conductor capacity, yet choosing a larger permissible size does not make it the minimum asked for.",
    },
    sourceUrls: [IET_EARTH_CONTINUITY],
  },
  {
    prompt:
      "For plug-connected Class I equipment, between which points is protective-conductor continuity measured?",
    options: [
      "Line and neutral",
      "Line and the appliance case",
      "Neutral and the appliance case",
      "The plug earth pin and each accessible earthed metal part",
    ],
    answer: "The plug earth pin and each accessible earthed metal part",
    rationales: {
      "Line and neutral":
        "Line-to-neutral continuity concerns the normal current path or load. It does not prove that accessible Class I metal is connected to protective earth.",
      "Line and the appliance case":
        "A line-to-case connection should be insulated in sound equipment. Using those endpoints would investigate insulation or a fault, not continuity of the earth conductor.",
      "Neutral and the appliance case":
        "Neutral and protective earth serve different functions and must not be treated as the two ends of the appliance's protective-conductor measurement.",
    },
    sourceUrls: [IET_EARTH_CONTINUITY],
  },
  {
    prompt:
      "Which test specifically verifies the protective-conductor path on Class I equipment?",
    options: [
      "Earth continuity",
      "Earth leakage",
      "Insulation resistance",
      "Polarity",
    ],
    answer: "Earth continuity",
    rationales: {
      "Earth leakage":
        "A leakage or protective-conductor-current test measures current flowing toward earth during operation; it does not directly measure the earth path's resistance.",
      "Insulation resistance":
        "Insulation resistance assesses separation between live parts and accessible or earthed parts. A good value does not itself prove that the protective conductor is continuous.",
      Polarity:
        "Polarity checks that line and neutral conductors reach their correct terminals. It answers a different safety question from the integrity of the protective-earth path.",
    },
    sourceUrls: [IET_EARTH_CONTINUITY],
  },
  {
    prompt:
      "The definition 'A conductive part liable to introduce a potential, generally earth potential, and not forming part of the electrical installation' describes which of the following:",
    options: [
      "Exposed conductive part",
      "Exposed live part",
      "Extraneous conductive part",
      "Uninsulated part",
    ],
    answer: "Extraneous conductive part",
    rationales: {
      "Exposed conductive part":
        "An exposed-conductive-part belongs to electrical equipment, can be touched and may become live under a fault. It is not an outside part introducing Earth potential.",
      "Exposed live part":
        "An exposed live part is energised in normal service and should be protected against contact; the definition instead describes a normally non-live external conductive path.",
      "Uninsulated part":
        "'Uninsulated part' is a general physical description and says nothing about introducing Earth potential or being separate from the electrical installation.",
    },
    sourceUrls: [IET_EXTRANEOUS_CONDUCTIVE_PARTS],
  },
  {
    prompt:
      "When manufacturer or product-standard information does not specify another value, what maximum touch current is commonly used for Class II equipment?",
    options: ["0.25 mA", "0.5 mA", "0.75 mA", "3.5 mA"],
    answer: "0.25 mA",
    rationales: {
      "0.5 mA":
        "Half a milliampere is twice the commonly cited Class II touch-current limit, so it would accept a result above the intended benchmark.",
      "0.75 mA":
        "The 0.75 mA figure is commonly associated with protective-conductor current for portable or hand-held Class I equipment, not Class II touch current.",
      "3.5 mA":
        "A 3.5 mA value is used for some other Class I equipment and high-current precautions; it is fourteen times the common Class II touch-current value.",
    },
    sourceUrls: [IET_PAT_GUIDANCE, SEAWARD_CLASS_II_LIMITS],
  },
  {
    prompt:
      "Where applicable equipment is designed for protective-conductor current above 3.5 mA, where should its high-touch-current warning be fixed?",
    options: [
      "Anywhere on the equipment or packaging",
      "Adjacent to the equipment's primary power connection",
      "Only inside the service manual",
      "Only on the PAT test record",
    ],
    answer: "Adjacent to the equipment's primary power connection",
    rationales: {
      "Anywhere on the equipment or packaging":
        "Packaging may be discarded and a label elsewhere on a large item can be missed. The warning needs to be seen at the point where the supply is connected.",
      "Only inside the service manual":
        "A manual is useful supporting information, but it may not be present or open when power is connected and therefore cannot replace the adjacent warning.",
      "Only on the PAT test record":
        "A maintenance record documents inspection and results for management. It is not a permanent warning to the person making the equipment's power and earth connections.",
    },
    sourceUrls: [IET_PAT_GUIDANCE, LENOVO_HIGH_TOUCH_CURRENT],
  },
  {
    prompt:
      "Under general UK consumer guidance, which BS 1362 plug-fuse rating normally suits a 300 W appliance unless the manufacturer specifies otherwise?",
    options: ["13A", "2A", "3A", "5A"],
    answer: "3A",
    rationales: {
      "13A":
        "A 13 A fuse is the general choice for appliances from about 700 W upward. It is unnecessarily high for a 300 W item when 3 A is specified as suitable.",
      "2A": "Two amperes is not one of the usual modern replacement ratings in the general 3 A or 13 A consumer guide, so it should not be substituted without manufacturer direction.",
      "5A": "Five-amp BS 1362 fuses remain available for some older equipment, but current general guidance uses 3 A for a load this small unless its instructions say otherwise.",
    },
    sourceUrls: [ELECTRICAL_SAFETY_FIRST_PLUGS],
  },
  {
    prompt:
      "When an insulation-resistance test is appropriate and manufacturer or product-standard information does not specify another value, what minimum is commonly used for Class II equipment?",
    options: ["0.5 megohm", "1.0 megohm", "2.0 megohm", "5.0 megohm"],
    answer: "2.0 megohm",
    rationales: {
      "0.5 megohm":
        "Half a megohm is only one quarter of the common Class II benchmark and would allow substantially more leakage through the insulation path.",
      "1.0 megohm":
        "One megohm is a common Class I PAT threshold on current instruments, whereas Class II's double or reinforced insulation uses the higher 2 MΩ value.",
      "5.0 megohm":
        "Five megohms is a more stringent reading and healthy items often exceed it, but it is not the common minimum pass value requested here.",
    },
    sourceUrls: [SEAWARD_CLASS_II_LIMITS, IET_FIFTH_EDITION],
  },
  {
    prompt:
      "Under current guidance, how should the frequency of user checks for electrical equipment in industrial premises be determined?",
    options: [
      "By the dutyholder from risk assessment using environment, handling, use and previous findings",
      "Daily in every industrial premises",
      "Monthly because that interval is fixed by law",
      "Weekly in every case",
    ],
    answer:
      "By the dutyholder from risk assessment using environment, handling, use and previous findings",
    rationales: {
      "Daily in every industrial premises":
        "Daily checks may be justified for frequently handled equipment in a harsh area, but protected low-risk equipment at another industrial site may need a different frequency.",
      "Monthly because that interval is fixed by law":
        "The Electricity at Work Regulations require safe maintenance but do not prescribe monthly PAT user checks or any other universal calendar interval.",
      "Weekly in every case":
        "A weekly rule ignores whether equipment is hand-held, fixed, wet, dusty, rarely used or historically fault-free, all of which change the risk.",
    },
    sourceUrls: [IET_RISK_BASED_INTERVALS, HSE_MAINTAINING_EQUIPMENT],
  },
  {
    prompt: "Overheating within a 13A plug would most likely be caused by:",
    options: [
      "A loose connection",
      "An over tight cord grip",
      "An oversized cartridge fuse",
      "Reversed polarity",
    ],
    answer: "A loose connection",
    rationales: {
      "An over tight cord grip":
        "An overtight cord grip can crush the sheath or flex, but the grip does not normally carry load current and is not the usual source of terminal heating.",
      "An oversized cartridge fuse":
        "An oversized fuse weakens fault and overload protection, yet it does not itself produce heat while the appliance draws a normal current through sound terminals.",
      "Reversed polarity":
        "Reversed line and neutral creates a shock hazard and incorrect switching, but polarity reversal alone does not create the resistive joint that locally overheats a plug.",
    },
    sourceUrls: [ELECTRICAL_SAFETY_FIRST_PLUGS, HSE_ELECTRIC_EQUIPMENT],
  },
  {
    prompt:
      "The requirements for testing fixed electrical installations supplying portable equipment are to be found in:",
    options: ["BS 3036", "BS 7671", "GN 1", "GN 5"],
    answer: "BS 7671",
    rationales: {
      "BS 3036":
        "BS 3036 is associated with semi-enclosed, rewireable fuses. It is not the general standard for designing, inspecting and testing a fixed electrical installation.",
      "GN 1":
        "IET Guidance Note 1 explains selection and erection topics that support BS 7671, but the underlying requirements for installation verification are in BS 7671 itself.",
      "GN 5":
        "Guidance Note 5 concerns protection against electric shock. It is supporting guidance rather than the source of the fixed-installation testing requirements asked for.",
    },
    sourceUrls: [IET_BS_7671, HSE_MAINTAINING_EQUIPMENT],
  },
  {
    prompt:
      "Why is a bare 'maximum current-carrying capacity' for a 1.0 mm² flexible cable potentially misleading?",
    options: [
      "It is always exactly 10 A",
      "The permissible current depends on cable construction, installation, ambient and thermal conditions, and manufacturer data",
      "It is always exactly 20 A",
      "It is always exactly 6 A",
    ],
    answer:
      "The permissible current depends on cable construction, installation, ambient and thermal conditions, and manufacturer data",
    rationales: {
      "It is always exactly 10 A":
        "Ten amperes appears in an older table for a particular flexible-cable construction, but it cannot be transferred to every insulation, duty and installation condition.",
      "It is always exactly 20 A":
        "Twenty amperes may overload many 1.0 mm² flexible cords, especially when grouped, covered or coiled, so it is unsafe as a universal assumption.",
      "It is always exactly 6 A":
        "Six amperes may be a conservative choice in some circumstances, but other suitable 1.0 mm² cables can carry more; one fixed number still omits the governing conditions.",
    },
    sourceUrls: [IET_EARTH_CONTINUITY, DONCASTER_CABLE_RATINGS],
  },
  {
    prompt: "1Ω is equal to:",
    options: ["10 mΩ", "10,000 mΩ", "100 mΩ", "1000 mΩ"],
    answer: "1000 mΩ",
    rationales: {
      "10 mΩ":
        "Ten milliohms equals 10 × 0.001 Ω, which is 0.01 Ω. It represents only one hundredth of an ohm.",
      "10,000 mΩ":
        "Ten thousand milliohms equals 10,000 ÷ 1,000 = 10 Ω, so this option is ten times the stated resistance.",
      "100 mΩ":
        "One hundred milliohms equals 0.1 Ω. Another factor of ten is required to make a complete ohm.",
    },
    sourceUrls: [NIST_SI_PREFIXES],
  },
  {
    prompt:
      "Which pair names, first, the traditional class using basic insulation plus protective earthing and, second, the class using double or reinforced insulation?",
    options: ["0 and 0I", "0I and I", "I and II", "II and III"],
    answer: "I and II",
    rationales: {
      "0 and 0I":
        "Obsolete Class 0 has basic insulation without protective earth, while 0I does not name the double- or reinforced-insulation class required in the second position.",
      "0I and I":
        "Class I is the earthed class and belongs in the first position, not the second; neither entry identifies Class II's enhanced-insulation protection.",
      "II and III":
        "Class II uses double or reinforced insulation and Class III uses extra-low-voltage supply, so this pair describes two different measures in the wrong positions.",
    },
    sourceUrls: [IET_EARTH_CONTINUITY, SEAWARD_EQUIPMENT_CLASSES],
  },
  {
    prompt:
      "According to HSE guidance, which statement about portable-equipment maintenance records and labels is correct?",
    options: [
      "A statutory log is required for every inspection and test",
      "A pass label is legally required on every item",
      "Records and labels are not generally legal requirements, but they can be useful management tools",
      "Only user checks are legally required to be recorded",
    ],
    answer:
      "Records and labels are not generally legal requirements, but they can be useful management tools",
    rationales: {
      "A statutory log is required for every inspection and test":
        "HSE expressly says there is no general legal requirement to keep records of portable-equipment inspection and testing, even though a log is useful.",
      "A pass label is legally required on every item":
        "A pass label is optional and cannot prove that equipment remains safe after the test date. The maintenance system matters more than a sticker.",
      "Only user checks are legally required to be recorded":
        "HSE does not single out satisfactory user checks for compulsory recording. Fault reporting and useful management records should instead follow the chosen maintenance plan.",
    },
    sourceUrls: [HSE_PAT_FAQ, HSE_MAINTAINING_EQUIPMENT],
  },
  {
    prompt:
      "Which information most directly helps a dutyholder review inspection and test frequencies?",
    options: [
      "The most recent earth-continuity value only",
      "The equipment purchase invoice only",
      "Previous faults, inspections, tests, repairs and how the equipment is actually used",
      "A stock count without maintenance findings",
    ],
    answer:
      "Previous faults, inspections, tests, repairs and how the equipment is actually used",
    rationales: {
      "The most recent earth-continuity value only":
        "One measurement covers one part of one test. It cannot show visual damage trends, repair history, changing use or whether other equipment types fail more often.",
      "The equipment purchase invoice only":
        "An invoice may establish age or supplier, but it does not reveal cable damage, repeated misuse, test trends or the environment experienced in service.",
      "A stock count without maintenance findings":
        "A stock count confirms how many items exist, not how quickly they deteriorate. Frequency review needs condition and fault evidence linked to use.",
    },
    sourceUrls: [HSE_MAINTAINING_EQUIPMENT, IET_RISK_BASED_INTERVALS],
  },
  {
    prompt:
      "Which regulations contain the specific duty that, where necessary to prevent danger, all electrical systems must be maintained?",
    options: [
      "Electricity at Work Regulations",
      "IEE Guidance Note on inspection and testing",
      "IEE wiring Regulations",
      "Provision and Use of Work Equipment Regulations",
    ],
    answer: "Electricity at Work Regulations",
    rationales: {
      "IEE Guidance Note on inspection and testing":
        "An IET guidance note helps practitioners apply good inspection and testing practice, but it is guidance rather than a statutory regulation imposing this duty.",
      "IEE wiring Regulations":
        "BS 7671 is a technical standard for electrical installations, not legislation. It can help demonstrate safety but does not itself contain the statutory Regulation 4(2) duty.",
      "Provision and Use of Work Equipment Regulations":
        "PUWER contains a related duty to maintain work equipment, but the quoted duty for all electrical systems where necessary to prevent danger is specifically in EAWR.",
    },
    sourceUrls: [HSE_EAWR, HSE_PAT_FAQ],
  },
  {
    prompt:
      "What is needed to keep test-instrument results reliable between formal calibrations?",
    options: [
      "Use documented ongoing accuracy checks and recalibrate after drift, damage or as required",
      "Check the test-lead length only",
      "Keep the instrument locked away without verification",
      "Replace the instrument automatically every few years",
    ],
    answer:
      "Use documented ongoing accuracy checks and recalibrate after drift, damage or as required",
    rationales: {
      "Check the test-lead length only":
        "Lead resistance, damaged connectors, batteries and internal measurement drift can all affect results. Physical lead length alone reveals none of those failures.",
      "Keep the instrument locked away without verification":
        "Secure storage can reduce damage but cannot prove accuracy. An undetected internal fault or drift remains present when the instrument is next removed.",
      "Replace the instrument automatically every few years":
        "Age is not a measurement of performance: a new tester can be damaged and an older one can remain accurate. Recorded reference checks provide actual evidence.",
    },
    sourceUrls: [IET_INSTRUMENT_ACCURACY],
  },
] as const;
