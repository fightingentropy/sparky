export const patTestingTest1 = [
  {
    prompt: "Class I equipment:",
    options: [
      "Has no provision for earthing",
      "Has optional provision for earthing",
      "Must be earthed",
      "Must not be earthed",
    ],
    answer: "Must be earthed",
    rationales: {
      "Has no provision for earthing":
        "Class I construction relies on a protective-earth connection to keep accessible conductive parts safe after a basic-insulation fault. Having no earth provision describes a different protective arrangement, not Class I.",
      "Has optional provision for earthing":
        "The protective conductor is an essential part of Class I shock protection, not an optional accessory. If that connection is lost, accessible metal could become live without a reliable fault-current path.",
      "Must not be earthed":
        "This reverses the defining Class I requirement. Class I equipment is designed so its accessible conductive parts are connected to protective earth.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/pubns/priced/hsg107.pdf",
      "https://electrical.theiet.org/wiring-matters/years/2021/84-march-2021/the-all-new-5th-edition-of-the-iet-code-of-practice-for-in-service-inspection-and-testing-of-electrical-equipment/",
    ],
  },
  {
    prompt:
      "The most important check, when assessing the level of safety of an electrical appliance, is:",
    options: [
      "Earth leakage current testing",
      "Flash testing",
      "Insulation resistance testing",
      "Visual inspection",
    ],
    answer: "Visual inspection",
    rationales: {
      "Earth leakage current testing":
        "Leakage testing can reveal an electrical defect that is not visible, but it does not reveal many common hazards such as a damaged case, strained flex, wrong fuse or evidence of overheating. It supplements rather than replaces inspection.",
      "Flash testing":
        "A flash or high-potential test is primarily a production or specialist test and is not the principal routine in-service safety check. Repeated high-voltage testing may also be unsuitable for modern electronic equipment.",
      "Insulation resistance testing":
        "Insulation-resistance testing checks one important property, but a satisfactory reading cannot make visibly damaged or misused equipment safe. HSE says visual examination is essential because some defects cannot be found by testing alone.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/electricity/faq-portable-appliance-testing.htm",
      "https://electrical.theiet.org/wiring-matters/years/2020/81-july-2020/the-all-new-5th-edition-of-the-iet-code-of-practice-for-in-service-inspection-and-testing-of-electrical-equipment/",
    ],
  },
  {
    prompt:
      "A flexible cord connected to a 650 W iron should be protected by a fuse rating of:",
    options: ["2A", "3A", "4A", "5A"],
    answer: "3A",
    rationales: {
      "2A":
        "At 230 V, a 650 W load draws about 2.83 A, so a 2 A fuse is below the appliance's normal current and may operate unnecessarily. The manufacturer's specified fuse rating still takes priority.",
      "4A":
        "Although 4 A exceeds the calculated load current, it is not one of the normal modern replacement ratings. UK appliance guidance generally uses a 3 A or 13 A BS 1362 fuse, with the manufacturer's instruction decisive.",
      "5A":
        "A 5 A fuse would give the flexible cord less close protection than the 3 A choice that already carries the approximately 2.83 A load. Five-amp fuses remain associated with some older equipment, but are not needed here.",
    },
    sourceUrls: [
      "https://www.electricalsafetyfirst.org.uk/safety-advice/home-and-people/house-maintenance/plugs-and-fuses/",
      "https://www.legislation.gov.uk/uksi/2016/1101/pdfs/uksi_20161101_en.pdf",
    ],
  },
  {
    prompt: "Equipment users should be competent to inspect:",
    options: [
      "Fuses",
      "Protective conductors",
      "Socket outlets",
      "Terminal connections",
    ],
    answer: "Socket outlets",
    rationales: {
      Fuses:
        "Confirming the fuse type and rating may require opening a rewireable plug and belongs to a formal visual inspection by someone trained for that task. A routine user check should remain external.",
      "Protective conductors":
        "The protective conductor is normally inside the flex, plug or equipment, so its integrity cannot be established by a simple user inspection. Where necessary, continuity is verified by a competent person using an appropriate test.",
      "Terminal connections":
        "Terminal security is an internal check and can require opening the plug or equipment. Users should report visible damage rather than dismantle equipment to inspect its terminations.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/pubns/priced/hsg107.pdf",
      "https://www.hse.gov.uk/home-working/employer/working-environment-and-accidents.htm",
    ],
  },
  {
    prompt: "Instrument test leads should comply with",
    options: [
      "BS 3036",
      "BS 7671",
      "HSE Guidance Note GS 38",
      "IEE Guidance Note 1",
    ],
    answer: "HSE Guidance Note GS 38",
    rationales: {
      "BS 3036":
        "BS 3036 concerns semi-enclosed rewireable fuses, not the construction and safe use of probes and test leads. It provides no requirements for selecting test leads.",
      "BS 7671":
        "BS 7671 sets requirements for electrical installations. Although test work supports compliance with it, the specific HSE guidance on safe probes, leads, shrouding and current limitation is GS38.",
      "IEE Guidance Note 1":
        "IET Guidance Note 1 addresses selection and erection of installation equipment; it is not the dedicated guidance for electrical test leads. GS38 is the document named for that purpose.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/pubns/priced/gs38.pdf",
      "https://www.hse.gov.uk/electricity/standards.htm",
    ],
  },
  {
    prompt:
      "When assessing earth continuity of an extension lead under current IET guidance, which limit accounts for the lead conductor's length and cross-sectional area?",
    options: [
      "0.1 Ω plus the calculated protective-conductor resistance R",
      "0.1 Ω regardless of the lead length",
      "Any resistance is acceptable if the lead is shorter than 18 m",
      "The RCD rating alone determines the continuity limit",
    ],
    answer: "0.1 Ω plus the calculated protective-conductor resistance R",
    rationales: {
      "0.1 Ω regardless of the lead length":
        "A fixed 0.1 Ω limit ignores the legitimate resistance of the lead's protective conductor. Longer or smaller conductors have more resistance, so the calculated R value must be included.",
      "Any resistance is acceptable if the lead is shorter than 18 m":
        "Length alone cannot establish satisfactory continuity. The measured result still has to remain within 0.1 Ω plus the calculated protective-conductor resistance.",
      "The RCD rating alone determines the continuity limit":
        "An RCD responds to residual-current imbalance; it does not establish the resistance of the lead's protective conductor. Continuity and RCD protection are assessed separately.",
    },
    sourceUrls: [
      "https://www.seaward.com/gb/support/pat-testing/faqs/89534-how-do-you-pat-test-a-long-extension-lead/",
      "https://electrical.theiet.org/wiring-matters/years/2020/81-july-2020/the-all-new-5th-edition-of-the-iet-code-of-practice-for-in-service-inspection-and-testing-of-electrical-equipment/",
    ],
  },
  {
    prompt:
      "Which statement is correct for equipment whose protective-conductor current exceeds 3.5 mA?",
    options: [
      "It needs only a label stating the measured current",
      "Its protective-earthing arrangement must meet the applicable high protective-conductor-current requirements",
      "A 0.5 mm² protective conductor is always sufficient",
      "It may be used only in commercial premises",
    ],
    answer:
      "Its protective-earthing arrangement must meet the applicable high protective-conductor-current requirements",
    rationales: {
      "It needs only a label stating the measured current":
        "A label communicates information but does not make the protective-earth path sufficiently reliable. The connection arrangement itself must control the shock risk.",
      "A 0.5 mm² protective conductor is always sufficient":
        "A single cross-sectional area cannot be assumed suitable in every case. The conductor and connection method must meet the applicable product and installation requirements.",
      "It may be used only in commercial premises":
        "The premises type does not make protective-conductor current safe. Suitable protective earthing is required wherever the equipment is installed and used.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/electricity/standards.htm",
      "https://electrical.theiet.org/wiring-matters/years/2020/81-july-2020/the-all-new-5th-edition-of-the-iet-code-of-practice-for-in-service-inspection-and-testing-of-electrical-equipment/",
    ],
  },
  {
    prompt:
      "When manufacturer or product-standard information does not specify another value, what maximum protective-conductor current is commonly used for portable or hand-held Class I equipment?",
    options: ["0.5 mA", "0.75 mA", "1.0 mA", "1.25 mA"],
    answer: "0.75 mA",
    rationales: {
      "0.5 mA":
        "A 0.5 mA result is below the commonly used 0.75 mA maximum for portable or hand-held Class I equipment. It may be a satisfactory reading, but it is not the stated limit.",
      "1.0 mA":
        "One milliamp exceeds the commonly used 0.75 mA protective-conductor-current limit. The 1.0 MΩ value used in insulation-resistance testing has different units and assesses a different property.",
      "1.25 mA":
        "A 1.25 mA reading is above the 0.75 mA limit. Manufacturer and product-standard information must be followed where it specifies a different criterion.",
    },
    sourceUrls: [
      "https://www.megger.com/en-ca/products/pat250-portable-appliance-testing-pat-instrument",
      "https://www.hse.gov.uk/electricity/standards.htm",
    ],
  },
  {
    prompt:
      "Under the current IET Code, how should movement-related descriptions such as 'stationary' and 'portable' affect an equipment maintenance regime?",
    options: [
      "They determine a fixed statutory test interval",
      "Only equipment described as portable needs maintenance",
      "Equipment over 18 kg is outside the Code",
      "Movement and handling inform risk but do not by themselves determine the tests",
    ],
    answer:
      "Movement and handling inform risk but do not by themselves determine the tests",
    rationales: {
      "They determine a fixed statutory test interval":
        "The law does not assign an inspection or test interval from a movement-based category. The dutyholder sets the regime from the equipment's actual risk and maintenance history.",
      "Only equipment described as portable needs maintenance":
        "Electrical equipment can deteriorate and create danger whether it is portable, fixed or seldom moved. Its construction and use determine the necessary maintenance.",
      "Equipment over 18 kg is outside the Code":
        "Mass does not remove equipment from electrical-safety management. Heavy equipment still needs suitable inspection, testing and maintenance where risk requires them.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2020/81-july-2020/the-all-new-5th-edition-of-the-iet-code-of-practice-for-in-service-inspection-and-testing-of-electrical-equipment/",
      "https://www.hse.gov.uk/pubns/priced/hsg107.pdf",
    ],
  },
  {
    prompt:
      "Under current IET guidance, what should determine how often electrical equipment is inspected and, where appropriate, tested?",
    options: [
      "Whether it weighs more than 12 kg",
      "A fixed interval based only on equipment mass",
      "The next-test date chosen by the tester",
      "A risk assessment considering environment, users, construction, use and history",
    ],
    answer:
      "A risk assessment considering environment, users, construction, use and history",
    rationales: {
      "Whether it weighs more than 12 kg":
        "Mass alone does not show how likely equipment is to deteriorate or expose a user to danger. Handling, environment, construction and use are also relevant.",
      "A fixed interval based only on equipment mass":
        "A fixed mass-based interval ignores important differences in users, conditions, frequency of use and previous defects. The interval must reflect the whole risk picture.",
      "The next-test date chosen by the tester":
        "The dutyholder determines the maintenance interval from risk, using competent advice where needed. A tester should not impose the next date independently of that assessment.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2020/81-july-2020/the-all-new-5th-edition-of-the-iet-code-of-practice-for-in-service-inspection-and-testing-of-electrical-equipment/",
      "https://www.hse.gov.uk/pubns/priced/hsg107.pdf",
    ],
  },
  {
    prompt:
      "Which one of the following would not normally be part of a user inspection:",
    options: [
      "Checking security of the flexible cable in its plug top",
      "Checking the connections within the plug",
      "Looking for signs of external damage to the equipment",
      "Operating to check that it works properly",
    ],
    answer: "Checking the connections within the plug",
    rationales: {
      "Checking security of the flexible cable in its plug top":
        "A user can look for a flex pulling out of the plug or a failed cord grip without opening the plug. That is an external condition check and should be reported if defective.",
      "Looking for signs of external damage to the equipment":
        "Looking for cracks, cuts, loose parts, contamination and signs of overheating is central to a user check. These visible defects often reveal danger before an instrument test is considered.",
      "Operating to check that it works properly":
        "A normal functional check can form part of safe use, provided no defect is already evident. It does not require dismantling the plug, unlike checking internal terminal connections.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/pubns/priced/hsg107.pdf",
      "https://www.hse.gov.uk/electricity/faq-portable-appliance-testing.htm",
    ],
  },
  {
    prompt: "Class II equipment has an identifying mark in the shape of:",
    options: [
      "A square",
      "Two circles, linked",
      "Two circles, one inside the other",
      "Two squares, one inside the other",
    ],
    answer: "Two squares, one inside the other",
    rationales: {
      "A square":
        "A single square is not the recognised Class II construction mark. The symbol uses one square inside another to indicate double or reinforced insulation.",
      "Two circles, linked":
        "Linked circles are not the Class II symbol and do not communicate double insulation. Equipment classification must be taken from recognised markings and manufacturer information.",
      "Two circles, one inside the other":
        "Concentric circles are not the standard mark for Class II equipment. The familiar mark consists of two nested squares.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/pubns/priced/hsg107.pdf",
      "https://www.seaward.com/gb/support/pat-testing/faqs/74298-how-do-we-pat-test/",
    ],
  },
  {
    prompt: "New 13A plugs manufactured to BS 1363 will have:",
    options: [
      "Both live pins partially insulated",
      "Insulated pins",
      "Inter connecting pins",
      "Plastic earth pins",
    ],
    answer: "Both live pins partially insulated",
    rationales: {
      "Insulated pins":
        "The line and neutral pins are only sleeved over part of their length; their contact ends remain conductive so they can engage the socket. Saying simply that the pins are insulated is imprecise and could imply full insulation.",
      "Inter connecting pins":
        "BS 1363 plug pins are separate line, neutral and earth contacts. They are not interconnected, which would create an electrical fault rather than a safety feature.",
      "Plastic earth pins":
        "A standard rewireable 13 A plug uses its earth pin for the protective conductor and socket shutters. A plastic shutter-opening pin can appear on some Class II plug-in products, but it is not the defining feature asked about here.",
    },
    sourceUrls: [
      "https://assets.publishing.service.gov.uk/media/6a31167d15f2a70fac7e6026/plug-in-solar-interim-product-specification.pdf",
      "https://www.legislation.gov.uk/uksi/2016/1101/pdfs/uksi_20161101_en.pdf",
    ],
  },
  {
    prompt: "When conducting an earth continuity test on IT equipment:",
    options: [
      "All IT equipment in the area must be disconnected",
      "Permission should first be sought from the equipment user",
      "The equipment casing should be removed",
      "The equipment must be connected to the mains",
    ],
    answer: "Permission should first be sought from the equipment user",
    rationales: {
      "All IT equipment in the area must be disconnected":
        "Only the equipment and connections affected by the planned test need to be managed. Disconnecting every IT item in the area is unnecessary and may cause avoidable interruption or data loss.",
      "The equipment casing should be removed":
        "Routine in-service inspection does not require dismantling the equipment. Removing covers may expose hazards, invalidate approvals or damage the product and should only be done under an appropriate specialist procedure.",
      "The equipment must be connected to the mains":
        "An earth-continuity test uses the protective conductor and an instrument test current; the equipment does not need to be energised from the mains. Connecting it live without the selected procedure would add danger.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/pubns/priced/hsg107.pdf",
      "https://www.seaward.com/gb/support/pat-testing/faqs/27/pdf/",
    ],
  },
  {
    prompt:
      "Electrical equipment for use in domestic environments will normally be fitted with a 13A plug manufactured to:",
    options: ["BS 1362", "BS 1363", "BS 3036", "BS EN 60898"],
    answer: "BS 1363",
    rationales: {
      "BS 1362":
        "BS 1362 is the standard for the cartridge fuse-link fitted inside a UK plug, not the construction standard for the plug itself. The two standards work together but cover different components.",
      "BS 3036":
        "BS 3036 covers semi-enclosed rewireable fuses historically used in installations. It does not specify a domestic 13 A plug.",
      "BS EN 60898":
        "BS EN 60898 concerns circuit-breakers for household and similar installations. A circuit-breaker is a distribution protective device, not a plug standard.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/electricity/standards.htm",
      "https://www.legislation.gov.uk/uksi/2016/1101/pdfs/uksi_20161101_en.pdf",
    ],
  },
  {
    prompt:
      "Which statement correctly describes the role of an RCD when a long extension lead is used?",
    options: [
      "An RCD makes every lead length and load acceptable",
      "An RCD adds shock protection but does not correct excessive voltage drop, heating or conductor resistance",
      "A smaller plug fuse removes the need to assess fault protection",
      "Lead length is irrelevant once the flex is 1.5 mm²",
    ],
    answer:
      "An RCD adds shock protection but does not correct excessive voltage drop, heating or conductor resistance",
    rationales: {
      "An RCD makes every lead length and load acceptable":
        "An RCD detects residual current but cannot prevent excessive voltage drop, overload heating or high protective-conductor resistance. The lead and load must still be suitable.",
      "A smaller plug fuse removes the need to assess fault protection":
        "A smaller fuse may limit load current, but fault protection still depends on the complete earth path and disconnection arrangement. Fuse rating alone is not enough.",
      "Lead length is irrelevant once the flex is 1.5 mm²":
        "Conductor resistance and voltage drop increase with length. Cross-sectional area is important, but it does not make lead length irrelevant.",
    },
    sourceUrls: [
      "https://www.seaward.com/gb/support/pat-testing/faqs/89534-how-do-you-pat-test-a-long-extension-lead/",
      "https://www.hse.gov.uk/electricity/electricequip.htm",
    ],
  },
  {
    prompt:
      "Under current general UK consumer guidance, which BS 1362 plug-fuse rating is normally used for an 800 W appliance unless the manufacturer specifies otherwise?",
    options: ["10A", "13A", "3A", "5A"],
    answer: "13A",
    rationales: {
      "10A":
        "Ten amps is not one of the usual modern replacement ratings in the general 3 A or 13 A consumer guide. The appliance manufacturer's stated rating must be followed where provided.",
      "3A":
        "An 800 W load draws about 3.48 A at 230 V, which is above a 3 A fuse's nominal rating. That fuse could operate during normal use, particularly with starting or heating-current variation.",
      "5A":
        "Five-amp fuses remain available for some existing equipment, but the current general guide uses 13 A from about 700 W upward. A manufacturer-specified 5 A rating would still take precedence for that product.",
    },
    sourceUrls: [
      "https://www.electricalsafetyfirst.org.uk/safety-advice/home-and-people/house-maintenance/plugs-and-fuses/",
      "https://www.legislation.gov.uk/uksi/2016/1101/pdfs/uksi_20161101_en.pdf",
    ],
  },
  {
    prompt:
      "When a standard 13A plug overheats the cause would most likely be due to:",
    options: [
      "A loose connection within the plug",
      "A poor earth connection",
      "Oversized conductors",
      "The use of socket outlets not to BS Standards",
    ],
    answer: "A loose connection within the plug",
    rationales: {
      "A poor earth connection":
        "A defective protective-earth connection is a serious shock hazard, but the earth conductor normally carries no load current. It is therefore not the usual cause of a plug heating during ordinary operation.",
      "Oversized conductors":
        "A larger conductor has lower resistance and does not inherently produce overheating. Problems arise if a conductor cannot be terminated correctly, but size alone is not the likely cause described.",
      "The use of socket outlets not to BS Standards":
        "A non-compliant or damaged socket could make poor contact, but a loose plug terminal is the direct likely cause of heating within the plug. Its high resistance produces local heat as load current flows.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/pubns/priced/hsg107.pdf",
      "https://www.electricalsafetyfirst.org.uk/safety-advice/home-and-people/house-maintenance/plugs-and-fuses/",
    ],
  },
  {
    prompt:
      "The minimum acceptable insulation resistance for Class I heating equipment rated greater than 3 kW is:",
    options: ["0.3 megohms", "0.5 megohms", "30 k ohms", "500 ohms"],
    answer: "0.3 megohms",
    rationales: {
      "0.5 megohms":
        "A reading of 0.5 MΩ would be above the stated minimum and may pass, but it is not the threshold asked for. The published category value for Class I heating equipment at or above 3 kW is 0.3 MΩ.",
      "30 k ohms":
        "Thirty kilohms is only 0.03 MΩ, one tenth of the stated 0.3 MΩ minimum. That result would not meet the intended insulation criterion.",
      "500 ohms":
        "Five hundred ohms is 0.0005 MΩ and is far too low for insulation between live parts and accessible earthed metal. It would indicate a potentially dangerous result or an invalid test setup.",
    },
    sourceUrls: [
      "https://www.megger.com/en-ca/products/pat250-portable-appliance-testing-pat-instrument",
      "https://www.seaward.com/gb/downloads/seaward_pat_guide_2014_rev_45_v4.5.pdf",
    ],
  },
  {
    prompt:
      "Electrical equipment should be marked with a unique serial number to help:",
    options: ["Identification", "Location", "Testing", "Visual inspection"],
    answer: "Identification",
    rationales: {
      Location:
        "A register may record where an item is used, but the number itself identifies the individual asset. Equipment can move while retaining the same unique identifier.",
      Testing:
        "The identifier links results to the correct asset; it does not perform the test or decide the test method. Test selection depends on construction, manufacturer information, use and risk.",
      "Visual inspection":
        "A serial or asset number does not reveal damage or make the visual inspection more effective. Its role is to make sure observations and results are attributed to the right item.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/pubns/priced/hsg107.pdf",
      "https://electrical.theiet.org/courses-resources-and-career-for-electrical-professionals/forms-and-downloads/",
    ],
  },
  {
    prompt: "Earth continuity testing may sometimes be carried out using:",
    options: [
      "A bell set tester",
      "A loop tester",
      "A low resistance ohmmeter",
      "An insulation tester",
    ],
    answer: "A low resistance ohmmeter",
    rationales: {
      "A bell set tester":
        "A simple bell or buzzer may indicate that some path exists, but it does not provide the accurate low-resistance measurement needed to assess a protective conductor and its terminations.",
      "A loop tester":
        "A loop-impedance tester is intended for an energised installation loop and is not the normal instrument for measuring an appliance protective-conductor path. Appliance continuity is a low-resistance dead test.",
      "An insulation tester":
        "An insulation tester measures very high resistance between parts that should be separated. Earth continuity requires the opposite type of measurement: a suitably accurate low resistance between the plug earth and accessible earthed parts.",
    },
    sourceUrls: [
      "https://www.megger.com/en-ca/products/pat250-portable-appliance-testing-pat-instrument",
      "https://www.seaward.com/gb/support/pat-testing/403a910-primetest-250-plus/specifications-and-manuals/",
    ],
  },
  {
    prompt:
      "In the traditional equipment-class system, which class is supplied at separated extra-low voltage and does not rely on protective earthing?",
    options: ["Class 0", "Class I", "Class II", "Class III"],
    answer: "Class III",
    rationales: {
      "Class 0":
        "Class 0 equipment relies only on basic insulation and has no protective-earth provision. Its construction is not based on a separated extra-low-voltage supply.",
      "Class I":
        "Class I protection relies on a protective-earth connection so that a fault can operate the protective device. That is different from the extra-low-voltage supply arrangement described.",
      "Class II":
        "Class II equipment relies on double or reinforced insulation and does not need protective earth. It may be supplied at mains voltage and is not defined by the transformer's 50 V output.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2020/81-july-2020/the-all-new-5th-edition-of-the-iet-code-of-practice-for-in-service-inspection-and-testing-of-electrical-equipment/",
      "https://www.hse.gov.uk/pubns/priced/hsg107.pdf",
    ],
  },
  {
    prompt:
      "Which of the following would not normally form a part of in-service testing:",
    options: [
      "Earth continuity testing",
      "Functional checks",
      "Loop testing",
      "Preliminary inspection",
    ],
    answer: "Loop testing",
    rationales: {
      "Earth continuity testing":
        "Where equipment relies on protective earth, continuity between the earth connection and relevant accessible conductive parts is a core in-service test selected to verify that protection.",
      "Functional checks":
        "A controlled functional check can help confirm that equipment operates as intended and does not show an obvious unsafe condition. It is part of the overall assessment when appropriate.",
      "Preliminary inspection":
        "Inspection must precede instrument testing so visible danger, unsuitable equipment or a test that could cause damage is identified first. Testing should never be treated as a substitute for that inspection.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/pubns/priced/hsg107.pdf",
      "https://www.hse.gov.uk/electricity/faq-portable-appliance-testing.htm",
    ],
  },
  {
    prompt: "Electrical equipment users should be:",
    options: [
      "Able to test equipment",
      "An electrically competent person",
      "An electrician",
      "Capable of inspecting equipment for obvious defects",
    ],
    answer: "Capable of inspecting equipment for obvious defects",
    rationales: {
      "Able to test equipment":
        "Ordinary users are not expected to select instruments, apply electrical tests or interpret readings. Those tasks require additional competence appropriate to the equipment and method.",
      "An electrically competent person":
        "A user needs enough instruction to recognise and report obvious danger, but need not possess the broader technical competence required for electrical testing or repair.",
      "An electrician":
        "Requiring every equipment user to be an electrician would be disproportionate and is not HSE's maintenance model. Simple user checks can be performed after suitable basic information and training.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/electricity/faq-portable-appliance-testing.htm",
      "https://www.hse.gov.uk/pubns/priced/hsg107.pdf",
    ],
  },
  {
    prompt:
      "Which earth-continuity test approach is preferred by the current IET Code for most Class I equipment?",
    options: [
      "A suitable lower-current continuity test, commonly within 20-200 mA",
      "13 A for at least 1 minute",
      "A 25 A test for every item regardless of construction",
      "25 A for at least 1 minute",
    ],
    answer:
      "A suitable lower-current continuity test, commonly within 20-200 mA",
    rationales: {
      "13 A for at least 1 minute":
        "This is neither the preferred lower-current method nor a correctly timed high-current test. A minute at 13 A could unnecessarily heat the equipment and connections.",
      "A 25 A test for every item regardless of construction":
        "A high current is not suitable as an automatic choice for every item. The test must reflect equipment construction and avoid damaging sensitive protective paths or components.",
      "25 A for at least 1 minute":
        "Where a high-current method is appropriate, it is normally applied only for a short defined period. One minute is unnecessarily long and is not the preferred routine approach.",
    },
    sourceUrls: [
      "https://www.megger.com/en-ca/products/pat250-portable-appliance-testing-pat-instrument",
      "https://electrical.theiet.org/wiring-matters/years/2020/81-july-2020/the-all-new-5th-edition-of-the-iet-code-of-practice-for-in-service-inspection-and-testing-of-electrical-equipment/",
    ],
  },
  {
    prompt:
      "How should the initial user-check frequency be set for a children's ride available to the public in a store entrance?",
    options: [
      "Annually in every store",
      "From a documented risk assessment, with frequent checks likely because of public use, then revised using findings",
      "Monthly in every case",
      "Every six months because the law fixes that interval",
    ],
    answer:
      "From a documented risk assessment, with frequent checks likely because of public use, then revised using findings",
    rationales: {
      "Annually in every store":
        "A universal annual interval ignores frequent public handling and the possibility of damage between checks. A high-use children's ride is likely to need much more frequent observation.",
      "Monthly in every case":
        "One fixed monthly interval cannot account for different usage, environments and defect histories. Findings should be used to shorten or extend the schedule as justified.",
      "Every six months because the law fixes that interval":
        "Electrical-safety law does not prescribe a six-month interval for this equipment. The dutyholder must set a suitable frequency from risk.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/pubns/priced/hsg107.pdf",
      "https://electrical.theiet.org/wiring-matters/years/2021/84-march-2021/the-all-new-5th-edition-of-the-iet-code-of-practice-for-in-service-inspection-and-testing-of-electrical-equipment/",
    ],
  },
  {
    prompt:
      "Identification of electrical equipment within a duty holder's control is required to produce:",
    options: [
      "A fault register",
      "A repair schedule",
      "A safety check equipment label",
      "An equipment register",
    ],
    answer: "An equipment register",
    rationales: {
      "A fault register":
        "A fault log records defects after they are found; it is not the primary list created by identifying all equipment under the dutyholder's control. Fault information can be linked to the equipment register.",
      "A repair schedule":
        "A repair schedule deals only with equipment requiring remedial work. Identification first establishes the population of assets that the maintenance system must manage.",
      "A safety check equipment label":
        "Labels are optional management aids and do not replace a reliable equipment record. HSE does not impose a general legal requirement to label every item that has been checked.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/pubns/priced/hsg107.pdf",
      "https://electrical.theiet.org/courses-resources-and-career-for-electrical-professionals/forms-and-downloads/",
    ],
  },
  {
    prompt:
      "Which of the following does not apply when testing on a two-core cord set:",
    options: [
      "A polarity check",
      "A visual inspection",
      "An earth continuity test",
      "An insulation resistance test",
    ],
    answer: "An earth continuity test",
    rationales: {
      "A polarity check":
        "A two-core cord set still has line and neutral conductors, so correct end-to-end connection and polarity can be checked where the connector is polarised. The absence of earth does not remove that need.",
      "A visual inspection":
        "Every cord set needs inspection for damage, unsuitable connectors, strain, overheating and exposed conductors. Two-core construction does not make physical defects harmless.",
      "An insulation resistance test":
        "The insulation between the current-carrying conductors and accessible surfaces still needs to be suitable. A two-core lead lacks a protective conductor, but it does not lack insulation.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/pubns/priced/hsg107.pdf",
      "https://www.seaward.com/gb/support/pat-testing/faqs/74298-how-do-we-pat-test/",
    ],
  },
  {
    prompt:
      "Class I equipment with internal electronic components should be tested with a current not greater than:",
    options: ["0.8 A", "15 A", "200 mA", "400 mA"],
    answer: "200 mA",
    rationales: {
      "0.8 A":
        "Eight hundred milliamps is four times the 200 mA ceiling of the low-current continuity method described for sensitive electronics. It is neither the low-current method nor a conventional high-current bond test.",
      "15 A":
        "Fifteen amps is a high test current and may be unsuitable for sensitive electronic equipment or fine protective-conductor paths. A low-current continuity method is selected to reduce the risk of damage.",
      "400 mA":
        "Four hundred milliamps is twice the stated 200 mA maximum for this low-current method. The tester still needs adequate resolution and the result must account for the supply lead's resistance.",
    },
    sourceUrls: [
      "https://www.megger.com/en-ca/products/pat250-portable-appliance-testing-pat-instrument",
      "https://www.seaward.com/gb/support/pat-testing/403a910-primetest-250-plus/specifications-and-manuals/",
    ],
  },
  {
    prompt:
      "It should be confirmed, when carrying out a formal visual inspection, that electrical equipment is being operated:",
    options: [
      "As laid down in the manufacturer's instructions",
      "At the correct voltage",
      "By a skilled person",
      "By an instructed person",
    ],
    answer: "As laid down in the manufacturer's instructions",
    rationales: {
      "At the correct voltage":
        "Supply compatibility is important, but voltage alone does not establish correct use. The instructions also cover purpose, loading, environment, ventilation, accessories and other safety conditions.",
      "By a skilled person":
        "Many ordinary appliances are designed for general users and do not require an electrically skilled operator. Any user competence requirement depends on the product and task, as stated by the manufacturer and risk assessment.",
      "By an instructed person":
        "Some equipment may require specific instruction, but that is not a universal condition for all electrical equipment. The broader check is whether actual use follows the manufacturer's instructions.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/pubns/priced/hsg107.pdf",
      "https://www.hse.gov.uk/electricity/electricequip.htm",
    ],
  },
  {
    prompt:
      "When protection against electric shock from equipment is provided using an earth wire, the equipment classification would be:",
    options: ["Class 0", "Class I", "Class II", "Class III"],
    answer: "Class I",
    rationales: {
      "Class 0":
        "Class 0 construction has only basic insulation and no protective-earth provision. It therefore cannot describe equipment whose fault protection is provided by an earth wire.",
      "Class II":
        "Class II equipment uses double or reinforced insulation and does not rely on protective earth for safety. The double-square mark, not an earth wire, identifies that construction.",
      "Class III":
        "Class III equipment is associated with an extra-low-voltage supply arrangement and does not use a protective-earth conductor as its basic shock-protection method.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/pubns/priced/hsg107.pdf",
      "https://www.seaward.com/gb/support/pat-testing/faqs/74298-how-do-we-pat-test/",
    ],
  },
  {
    prompt:
      "How should the frequency of user checks for electrical equipment in industrial premises be determined?",
    options: [
      "Before use in every case",
      "Daily in every case",
      "Fortnightly because that interval is statutory",
      "By risk assessment using environment, use, damage likelihood and maintenance history",
    ],
    answer:
      "By risk assessment using environment, use, damage likelihood and maintenance history",
    rationales: {
      "Before use in every case":
        "A pre-use check may be justified for equipment exposed to frequent handling or damage, but it is not automatically necessary for every industrial item. The interval must match the risk.",
      "Daily in every case":
        "Daily checks can suit harsh conditions, but applying that frequency to all equipment ignores differences in use, installation and previous findings.",
      "Fortnightly because that interval is statutory":
        "No statutory fortnightly interval applies. Electrical-safety law requires maintenance sufficient to prevent danger and leaves the dutyholder to determine a suitable regime.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2021/84-march-2021/the-all-new-5th-edition-of-the-iet-code-of-practice-for-in-service-inspection-and-testing-of-electrical-equipment/",
      "https://www.hse.gov.uk/pubns/priced/hsg107.pdf",
    ],
  },
  {
    prompt:
      "When conducting insulation resistance tests on new household appliances with Class I insulation, the minimum value would be:",
    options: [
      "0.25 megohm",
      "0.5 megohm",
      "1.0 megohm",
      "2.0 megohm",
    ],
    answer: "1.0 megohm",
    rationales: {
      "0.25 megohm":
        "A quarter of a megohm is below the 1.0 MΩ minimum for this Class I category. A result that low would require investigation rather than acceptance.",
      "0.5 megohm":
        "Half a megohm is only half the stated Class I minimum. It should not be confused with current measured in milliamps during a leakage test.",
      "2.0 megohm":
        "Two megohms is the commonly stated minimum for Class II equipment. A Class I item may produce a reading above 2 MΩ, but 2 MΩ is not the minimum threshold asked for here.",
    },
    sourceUrls: [
      "https://www.megger.com/en-ca/products/pat250-portable-appliance-testing-pat-instrument",
      "https://www.seaward.com/gb/downloads/seaward_pat_guide_2014_rev_45_v4.5.pdf",
    ],
  },
  {
    prompt:
      "Which equipment class is identified by double or reinforced insulation and no reliance on protective earthing?",
    options: ["Class 0", "Class I", "Class II", "Class III"],
    answer: "Class II",
    rationales: {
      "Class 0":
        "Class 0 equipment has only basic insulation and no protective-earth provision. It does not provide the double or reinforced insulation that defines Class II construction.",
      "Class I":
        "Class I equipment relies on protective earthing of accessible conductive parts. It is therefore fundamentally different from double-insulated Class II equipment.",
      "Class III":
        "Traditional Class III equipment relies on a separated extra-low-voltage supply. Its shock protection is not defined by double or reinforced insulation in the Class II sense.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/pubns/priced/hsg107.pdf",
      "https://electrical.theiet.org/wiring-matters/years/2020/81-july-2020/the-all-new-5th-edition-of-the-iet-code-of-practice-for-in-service-inspection-and-testing-of-electrical-equipment/",
    ],
  },
  {
    prompt:
      "According to HSE guidance, what immediate action is required when a user finds faulty electrical equipment?",
    options: [
      "Label it but continue using it",
      "Withdraw it from service but do not report it",
      "Report it and take it out of use immediately; labelling may help prevent reuse",
      "Continue using it until the next scheduled test",
    ],
    answer:
      "Report it and take it out of use immediately; labelling may help prevent reuse",
    rationales: {
      "Label it but continue using it":
        "A label does not remove the immediate danger while the equipment remains available. Faulty equipment must be taken out of use until it is competently repaired or replaced.",
      "Withdraw it from service but do not report it":
        "Withdrawal controls immediate use, but the fault must also be reported so the responsible person can arrange repair, replacement and follow-up.",
      "Continue using it until the next scheduled test":
        "Known faulty equipment must not remain in service. Waiting for a scheduled test exposes users to a hazard that has already been identified.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/pubns/priced/hsg107.pdf",
      "https://www.hse.gov.uk/electricity/faq-portable-appliance-testing.htm",
    ],
  },
  {
    prompt:
      "If a satisfactory-test label is voluntarily used, which information should not be placed on it?",
    options: [
      "The date on which the equipment was tested",
      "A next-test-due date set by the tester",
      "An indication that the equipment passed satisfactorily",
      "The asset identifier used by the dutyholder, where applicable",
    ],
    answer: "A next-test-due date set by the tester",
    rationales: {
      "The date on which the equipment was tested":
        "The test date records when the satisfactory assessment took place. It can support the dutyholder's maintenance record without prescribing the next interval.",
      "An indication that the equipment passed satisfactorily":
        "Showing that the equipment passed is the principal purpose of a satisfactory-test label. Detailed readings remain in the maintenance record.",
      "The asset identifier used by the dutyholder, where applicable":
        "An asset identifier links the label and test record to the correct equipment. It is a useful management control where the dutyholder operates an asset-register system.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/pubns/priced/hsg107.pdf",
      "https://electrical.theiet.org/courses-resources-and-career-for-electrical-professionals/forms-and-downloads/",
    ],
  },
  {
    prompt:
      "Which statement correctly describes the voltage scope of the Electricity at Work Regulations' system-maintenance duty?",
    options: [
      "11 kV",
      "132 kV",
      "33 kV",
      "It is not capped at 400 kV; it applies wherever an electrical system may give rise to danger",
    ],
    answer:
      "It is not capped at 400 kV; it applies wherever an electrical system may give rise to danger",
    rationales: {
      "11 kV":
        "The Electricity at Work Regulations do not stop applying at 11 kV. Regulation 4 requires systems to be maintained as necessary to prevent danger and states no upper voltage boundary.",
      "132 kV":
        "Although 132 kV is a transmission or distribution voltage, it is not a statutory scope limit in the EWR. The duties are framed around electrical systems, work activity and danger, not this voltage threshold.",
      "33 kV":
        "Thirty-three kilovolts is another network voltage, not an EWR scope boundary. Regulation 4 applies its maintenance duty by reference to danger rather than a voltage cut-off.",
    },
    sourceUrls: [
      "https://www.legislation.gov.uk/uksi/1989/635/regulation/4/made",
      "https://www.hse.gov.uk/pubns/priced/hsg107.pdf",
    ],
  },
  {
    prompt:
      "Under the current IET Code, how should a fridge freezer be treated for in-service maintenance?",
    options: [
      "As portable solely because it has a plug",
      "According to its construction, installation, use and risk rather than a rigid stationary label",
      "As moveable solely because it can be repositioned",
      "As outside the maintenance regime",
    ],
    answer:
      "According to its construction, installation, use and risk rather than a rigid stationary label",
    rationales: {
      "As portable solely because it has a plug":
        "A plug does not determine the maintenance regime. Installation, construction, use, handling and environment all affect the risk.",
      "As moveable solely because it can be repositioned":
        "The ability to reposition equipment does not prescribe its inspection or tests. What matters is how movement and use affect the likelihood of damage.",
      "As outside the maintenance regime":
        "A workplace fridge freezer can deteriorate and create shock or fire risk. It must remain within the dutyholder's electrical-safety management arrangements.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2020/81-july-2020/the-all-new-5th-edition-of-the-iet-code-of-practice-for-in-service-inspection-and-testing-of-electrical-equipment/",
      "https://www.hse.gov.uk/pubns/priced/hsg107.pdf",
    ],
  },
  {
    prompt:
      "For electrical equipment used on a petrol-station forecourt, which approach is correct?",
    options: [
      "Use an ordinary PAT routine without considering the hazardous area",
      "No maintenance is needed if the equipment is fixed",
      "Apply office-equipment intervals without further assessment",
      "Use specialist hazardous-area controls and competent assessment alongside applicable maintenance requirements",
    ],
    answer:
      "Use specialist hazardous-area controls and competent assessment alongside applicable maintenance requirements",
    rationales: {
      "Use an ordinary PAT routine without considering the hazardous area":
        "A forecourt can contain a flammable atmosphere, so ordinary appliance procedures alone are insufficient. Equipment, test methods and controls must be suitable for the hazardous area.",
      "No maintenance is needed if the equipment is fixed":
        "Fixed equipment can deteriorate and ignite a flammable atmosphere. Its installation method does not remove the duty to maintain it safely.",
      "Apply office-equipment intervals without further assessment":
        "Office intervals assume a much more benign environment. A forecourt requires a specific hazardous-area assessment by competent people.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2021/84-march-2021/the-all-new-5th-edition-of-the-iet-code-of-practice-for-in-service-inspection-and-testing-of-electrical-equipment/",
      "https://www.hse.gov.uk/pubns/priced/hsg107.pdf",
    ],
  },
  {
    prompt: "An insulation resistance tester should be capable of:",
    options: [
      "Maintaining the test voltage when applied to the equipment insulation",
      "Supplying a maximum current of 0.5 A through the load",
      "Supplying a minimum voltage of 1000 V d.c. to the load",
      "Testing the continuity of a circuit",
    ],
    answer:
      "Maintaining the test voltage when applied to the equipment insulation",
    rationales: {
      "Supplying a maximum current of 0.5 A through the load":
        "An insulation tester uses a current-limited high-resistance measurement; it is not intended to drive half an ampere through a load. Such a current could be dangerous and would not represent an insulation-resistance test.",
      "Supplying a minimum voltage of 1000 V d.c. to the load":
        "Routine appliance insulation tests commonly offer 250 V or 500 V DC, selected for the equipment. A mandatory minimum of 1000 V could damage modern electronic components and is not a general PAT requirement.",
      "Testing the continuity of a circuit":
        "Continuity is a low-resistance measurement using a different instrument function and test current. An insulation tester establishes that parts intended to be separated have sufficiently high resistance.",
    },
    sourceUrls: [
      "https://www.megger.com/en-ca/products/pat250-portable-appliance-testing-pat-instrument",
      "https://www.seaward.com/gb/support/pat-testing/403a910-primetest-250-plus/specifications-and-manuals/",
    ],
  },
  {
    prompt:
      "Safety isolating transformers are now covered principally by which standard series?",
    options: ["BS 3526", "BS EN IEC 61558", "BS 5458", "BS 5533"],
    answer: "BS EN IEC 61558",
    rationales: {
      "BS 3526":
        "BS 3526 is not the current safety-isolating-transformer series. It does not establish the applicable separation and transformer safety requirements.",
      "BS 5458":
        "BS 5458 is unrelated to safety-isolating-transformer construction. A standard must be selected by its scope and current status, not numerical similarity.",
      "BS 5533":
        "BS 5533 does not cover safety isolating transformers. The applicable general and particular requirements are found in the BS EN IEC 61558 family.",
    },
    sourceUrls: [
      "https://knowledge.bsigroup.com/products/safety-of-transformers-reactors-power-supply-units-and-combinations-thereof-particular-requirements-and-tests-for-transformers-and-power-supply-units-for-construction-sites-2",
      "https://electrical.theiet.org/wiring-matters/years/2020/81-july-2020/the-all-new-5th-edition-of-the-iet-code-of-practice-for-in-service-inspection-and-testing-of-electrical-equipment/",
    ],
  },
  {
    prompt:
      "Which statement correctly describes selection of an appliance insulation-resistance test voltage?",
    options: [
      "Always use 1000 V AC",
      "Always use 250 V AC",
      "Always use 250 V DC",
      "Use 500 V DC where suitable, or a lower-voltage or alternative test where necessary to avoid damage",
    ],
    answer:
      "Use 500 V DC where suitable, or a lower-voltage or alternative test where necessary to avoid damage",
    rationales: {
      "Always use 1000 V AC":
        "A 1000 V AC dielectric-strength test is not a routine insulation-resistance setting and could damage equipment. In-service insulation resistance is measured with a suitable DC test voltage.",
      "Always use 250 V AC":
        "An insulation-resistance tester applies DC, not a 250 V AC supply. The voltage must also be selected for the equipment rather than applied universally.",
      "Always use 250 V DC":
        "Two hundred and fifty volts DC can protect sensitive electronics, but it is not required for every appliance. Five hundred volts DC is commonly used where the equipment can withstand it.",
    },
    sourceUrls: [
      "https://www.megger.com/en-ca/products/pat450-portable-appliance-tester",
      "https://electrical.theiet.org/wiring-matters/years/2020/81-july-2020/the-all-new-5th-edition-of-the-iet-code-of-practice-for-in-service-inspection-and-testing-of-electrical-equipment/",
    ],
  },
  {
    prompt:
      "When assessing the level of safety of an electrical appliance the most important check would be:",
    options: [
      "Acceptable values of insulation resistance",
      "Earth fault current",
      "Spot testing",
      "Visual inspection",
    ],
    answer: "Visual inspection",
    rationales: {
      "Acceptable values of insulation resistance":
        "An acceptable insulation reading addresses only the insulation path reached by the test. It cannot excuse a cracked enclosure, damaged plug, wrong fuse, strained flex or unsafe use that inspection would reveal.",
      "Earth fault current":
        "'Earth fault current' is not a complete appliance-safety assessment and the phrase does not identify a specific selected test. Protective-conductor continuity or leakage may be appropriate, but only after inspection and risk-based test selection.",
      "Spot testing":
        "An occasional isolated measurement can miss both visible defects and faults outside the point tested. A systematic visual inspection is the essential first part of an in-service safety assessment.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/electricity/faq-portable-appliance-testing.htm",
      "https://www.hse.gov.uk/pubns/priced/hsg107.pdf",
    ],
  },
  {
    prompt:
      "Which one of the following checks should the user of an appliance be competent to undertake:",
    options: [
      "Both visual inspection and testing",
      "Formal visual inspection",
      "Tests using a portable appliance tester",
      "Visual inspection of the flexible lead and plug",
    ],
    answer: "Visual inspection of the flexible lead and plug",
    rationales: {
      "Both visual inspection and testing":
        "Ordinary users are expected to make simple external checks, not to choose electrical tests and interpret results. Instrument testing requires additional training and competence.",
      "Formal visual inspection":
        "A formal visual inspection is systematic and may include opening a rewireable plug, so it is assigned to someone trained and competent for that task. It goes beyond the normal user check.",
      "Tests using a portable appliance tester":
        "Using even a simple pass/fail tester requires instruction in the correct sequence, connections and acceptance criteria. A user cannot be assumed competent to test merely because they operate the appliance.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/electricity/faq-portable-appliance-testing.htm",
      "https://www.hse.gov.uk/pubns/priced/hsg107.pdf",
    ],
  },
  {
    prompt:
      "During a formal visual inspection a check should be made to confirm that the equipment is being operated:",
    options: [
      "At the correct voltage",
      "By a competent person",
      "By a skilled person",
      "In accordance with manufacturer's instructions",
    ],
    answer: "In accordance with manufacturer's instructions",
    rationales: {
      "At the correct voltage":
        "Correct supply voltage is only one element of suitability. Instructions can also define intended purpose, duty cycle, ventilation, accessories, environmental limits and required user precautions.",
      "By a competent person":
        "The necessary user competence depends on the equipment and work; many ordinary products are designed for general users. Safe operation still has to follow the manufacturer information.",
      "By a skilled person":
        "Electrical skill is not a blanket operating requirement for every appliance. Where special skill is necessary, that condition should come from the manufacturer and risk assessment rather than be assumed for all equipment.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/pubns/priced/hsg107.pdf",
      "https://www.hse.gov.uk/electricity/electricequip.htm",
    ],
  },
  {
    prompt:
      "Which statement best describes the scope of the current IET Code of Practice for In-service Inspection and Testing of Electrical Equipment?",
    options: [
      "It applies only to hotels",
      "It excludes offices",
      "It excludes shops",
      "It covers workplace electrical equipment broadly, while specialist risks require additional competent controls",
    ],
    answer:
      "It covers workplace electrical equipment broadly, while specialist risks require additional competent controls",
    rationales: {
      "It applies only to hotels":
        "Hotels are one of many workplace types covered. The Code also addresses offices, shops, industrial premises and other environments where electrical equipment is used.",
      "It excludes offices":
        "Office equipment remains within electrical-safety management even where benign conditions justify less frequent testing. Low risk does not mean exclusion.",
      "It excludes shops":
        "Equipment in shops must be maintained according to its risks, including handling by staff or the public. Specialist controls can supplement rather than remove the Code's guidance.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/pubns/priced/hsg107.pdf",
      "https://electrical.theiet.org/wiring-matters/years/2021/84-march-2021/the-all-new-5th-edition-of-the-iet-code-of-practice-for-in-service-inspection-and-testing-of-electrical-equipment/",
    ],
  },
  {
    prompt:
      "Which regulations contain the specific duty that, where necessary to prevent danger, all electrical systems must be maintained?",
    options: [
      "Electricity at Work Regulations 1989",
      "Health and Safety at Work Act 1974",
      "Management of Health and Safety at Work Regulations 1999",
      "Provision and Use of Work Equipment Regulations 1998",
    ],
    answer: "Electricity at Work Regulations 1989",
    rationales: {
      "Health and Safety at Work Act 1974":
        "The Act establishes broad employer duties, including safe plant and systems of work. The specific wording about maintaining all electrical systems where necessary to prevent danger is in EAWR regulation 4(2).",
      "Management of Health and Safety at Work Regulations 1999":
        "These Regulations principally require risk assessment and suitable management arrangements. They do not contain the specific electrical-system maintenance duty quoted here.",
      "Provision and Use of Work Equipment Regulations 1998":
        "PUWER regulation 5 contains a related duty to maintain work equipment efficiently and in good repair. EAWR regulation 4(2) is the source of the specific duty applying to all electrical systems where necessary to prevent danger.",
    },
    sourceUrls: [
      "https://www.legislation.gov.uk/uksi/1989/635/regulation/4/made",
      "https://www.legislation.gov.uk/uksi/1998/2306/regulation/5/made",
      "https://www.hse.gov.uk/pubns/priced/hsg107.pdf",
    ],
  },
  {
    prompt:
      "Which feature should voltage-test probes and leads have under HSE Guidance Note GS38?",
    options: [
      "Long exposed metal probe tips",
      "Unfused, unshrouded connectors",
      "Minimal exposed metal, suitable insulation and appropriate current limitation",
      "Any construction if the associated tester is used for BS 7671 work",
    ],
    answer:
      "Minimal exposed metal, suitable insulation and appropriate current limitation",
    rationales: {
      "Long exposed metal probe tips":
        "Long exposed tips increase the chance of touching live metal or bridging conductors. GS38 recommends keeping exposed conductive probe material to a minimum.",
      "Unfused, unshrouded connectors":
        "Unshrouded connections and a lack of current limitation increase shock and arc risk. Suitable probes use protected connectors and appropriate current-limiting arrangements.",
      "Any construction if the associated tester is used for BS 7671 work":
        "The purpose of the work does not make unsafe leads acceptable. Probe and lead construction must control contact, short-circuit and fault-current hazards.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/pubns/priced/gs38.pdf",
      "https://www.hse.gov.uk/pubns/books/gs38.htm",
    ],
  },
  {
    prompt:
      "How should the formal visual-inspection interval for Class II cleaning equipment used in a school be set?",
    options: [
      "Exactly 1 month in every school",
      "Exactly 3 months in every school",
      "From risk assessment and defect history, informed by manufacturer and HSE/IET guidance",
      "Exactly 6 months because that interval is statutory",
    ],
    answer:
      "From risk assessment and defect history, informed by manufacturer and HSE/IET guidance",
    rationales: {
      "Exactly 1 month in every school":
        "A one-month interval could be justified by severe use or repeated damage, but it is not universally required. Actual conditions and findings must support it.",
      "Exactly 3 months in every school":
        "A fixed three-month rule ignores differences in equipment, users, cleaning duties and previous defects. The dutyholder must assess those factors.",
      "Exactly 6 months because that interval is statutory":
        "Six months may be a reasonable starting point in some circumstances, but it is not a statutory interval. Inspection results should be used to review the frequency.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/pubns/priced/hsg107.pdf",
      "https://electrical.theiet.org/wiring-matters/years/2021/84-march-2021/the-all-new-5th-edition-of-the-iet-code-of-practice-for-in-service-inspection-and-testing-of-electrical-equipment/",
    ],
  },
  {
    prompt:
      "If a competent person selects the traditional high-current earth-bond method for a kettle fitted with a 13 A fuse, which test is appropriate?",
    options: [
      "13A for at least 1 minute",
      "25 A for at least 1 minute",
      "25 A for 5 to 20 seconds",
      "3A for 10 seconds",
    ],
    answer: "25 A for 5 to 20 seconds",
    rationales: {
      "13A for at least 1 minute":
        "Thirteen amps is below the high-current method's minimum of 1.5 times the fuse rating, while a full minute is unnecessarily long.",
      "25 A for at least 1 minute":
        "Twenty-five amps is suitable for this method, but it should be applied only for the defined 5-20 second period. A minute could cause unnecessary heating or stress.",
      "3A for 10 seconds":
        "Three amps is neither the defined high-current bond value nor a recognised lower-current continuity method. It does not provide the intended test condition.",
    },
    sourceUrls: [
      "https://www.megger.com/en-ca/products/pat250-portable-appliance-testing-pat-instrument",
      "https://electrical.theiet.org/wiring-matters/years/2020/81-july-2020/the-all-new-5th-edition-of-the-iet-code-of-practice-for-in-service-inspection-and-testing-of-electrical-equipment/",
    ],
  },
] as const;
