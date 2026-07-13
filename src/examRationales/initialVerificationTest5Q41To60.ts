export const initialVerificationTest5Q41To60 = [
  {
    prompt:
      "Questions 40 to 46 relate to the following scenario. Insulation resistance has been tested on five new lighting circuits in an existing large distribution warehouse. These circuits are supplied from a new single-phase, five-way DB. Switching for each circuit is by 230 V contactors. Connection to each light is made using a BS 1363 socket-outlet adjacent to the fitting. The supply and installation form a 400 V three-phase TN-C-S system. What affects the insulation resistance of each circuit tested?",
    options: [
      "The csa and number of conductors",
      "The csa and purpose of conductors",
      "The number and length of conductors",
      "The number and the purpose of conductors",
    ],
    answer: "The number and length of conductors",
    rationales: {
      "The csa and number of conductors":
        "Conductor cross-sectional area primarily governs conductor resistance and current capacity, not leakage through sound insulation. The combined insulation reading falls as more insulated paths are placed in parallel and as their length increases.",
      "The csa and purpose of conductors":
        "Whether a core is line, neutral or switched line does not set its insulation leakage. The physical amount of insulation under test, principally the number of paths and their length, sets the combined reading.",
      "The number and the purpose of conductors":
        "Core function does not change the insulating material or leakage path. Circuit length is the missing physical factor because a longer cable presents more insulation through which leakage can occur.",
    },
    sourceUrls: [
      "https://www.megger.com/en-gb/et-online/july-2021/testing-parallel-resistances",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
    ],
  },
  {
    prompt:
      "Questions 40 to 46 relate to the following scenario. Insulation resistance has been tested on five new lighting circuits in an existing large distribution warehouse. These circuits are supplied from a new single-phase, five-way DB. Switching for each circuit is by 230 V contactors. Connection to each light is made using a BS 1363 socket-outlet adjacent to the fitting. The supply and installation form a 400 V three-phase TN-C-S system. What is the legal status of the inspector?",
    options: ["Competent", "Instructed", "Ordinary", "Skilled"],
    answer: "Competent",
    rationales: {
      Instructed:
        "This BS 7671 classification describes someone adequately advised or supervised to avoid electrical danger. It does not by itself establish the technical knowledge or experience required by EAWR Regulation 16 for this inspection.",
      Ordinary:
        "Someone with no special electrical training cannot undertake this inspection independently. EAWR Regulation 16 requires the necessary technical knowledge or experience, or an appropriate level of supervision.",
      Skilled:
        "BS 7671 uses this term for a person with suitable education, training and experience. The question asks for the legal status used by HSE under the Electricity at Work framework, where the relevant concept is competence.",
    },
    sourceUrls: [
      "https://www.legislation.gov.uk/uksi/1989/635/regulation/16",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
    ],
  },
  {
    prompt:
      "Questions 40 to 46 relate to the following scenario. Insulation resistance has been tested on five new lighting circuits in an existing large distribution warehouse. These circuits are supplied from a new single-phase, five-way DB. Switching for each circuit is by 230 V contactors. Connection to each light is made using a BS 1363 socket-outlet adjacent to the fitting. The supply and installation form a 400 V three-phase TN-C-S system. What kind of defect can an insulation-resistance test reveal on one of these new circuits?",
    options: [
      "A low-resistance path caused by damaged insulation",
      "An undersized protective device",
      "A loose trunking lid",
      "Incorrect circuit labelling",
    ],
    answer: "A low-resistance path caused by damaged insulation",
    rationales: {
      "An undersized protective device":
        "Protective-device suitability is checked from the circuit design, load, cable capacity and device characteristics. Insulation resistance measures leakage through insulation, not the current rating printed on a breaker.",
      "A loose trunking lid":
        "A loose lid is a mechanical enclosure defect found by sight and touch during inspection. An electrical resistance measurement between conductors cannot show whether clips or screws are secure.",
      "Incorrect circuit labelling":
        "Circuit identification is checked visually against schedules and diagrams. A correct or incorrect label does not change the insulation resistance measured between conductors.",
    },
    sourceUrls: [
      "https://media.megger.com/mediacontainer/medialibraries/meggerse/images/nyheter/2021/4things-to-know-about-testing-above-1kv_final.pdf",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
    ],
  },
  {
    prompt:
      "Questions 40 to 46 relate to the following scenario. Insulation resistance has been tested on five new lighting circuits in an existing large distribution warehouse. These circuits are supplied from a new single-phase, five-way DB. Switching for each circuit is by 230 V contactors. Connection to each light is made using a BS 1363 socket-outlet adjacent to the fitting. The supply and installation form a 400 V three-phase TN-C-S system. The following test results were recorded. What is the value of insulation resistance between Live and Earth for the new DB with all the lighting circuits connected?",
    options: ["13 MΩ", "134 MΩ", "178 MΩ", "20 MΩ"],
    answer: "13 MΩ",
    rationales: {
      "134 MΩ":
        "This is the result for lighting circuit 4 alone. With all five circuits connected, their insulation leakage paths act in parallel and the reciprocals of all five readings must be summed.",
      "178 MΩ":
        "This is the result for lighting circuit 5 alone. Combining it with the other four parallel leakage paths produces a much lower DB reading.",
      "20 MΩ":
        "This is the lowest individual circuit result, not the combined value. Adding the other four parallel leakage paths makes the total insulation resistance lower than 20 MΩ.",
    },
    sourceUrls: [
      "https://www.megger.com/en-gb/et-online/july-2021/testing-parallel-resistances",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
    ],
  },
  {
    prompt:
      "Questions 40 to 46 relate to the following scenario. Insulation resistance has been tested on five new lighting circuits in an existing large distribution warehouse. These circuits are supplied from a new single-phase, five-way DB. Switching for each circuit is by 230 V contactors. Connection to each light is made using a BS 1363 socket-outlet adjacent to the fitting. The supply and installation form a 400 V three-phase TN-C-S system. What is the test voltage applied during the insulation resistance test?",
    options: ["250 V AC", "250 V DC", "500 V AC", "500 V DC"],
    answer: "500 V DC",
    rationales: {
      "250 V AC":
        "BS 7671 specifies a DC insulation test so that charging current settles and the instrument can measure steady leakage resistance. A reduced test, where permitted, is also expressed as a DC voltage.",
      "250 V DC":
        "This reduced voltage is used for SELV or PELV circuits, or where voltage-sensitive equipment cannot reasonably be disconnected. An ordinary 230 V circuit with such equipment removed is tested at the higher Table 64 value.",
      "500 V AC":
        "The magnitude is appropriate but the waveform is not. Table 64 specifies a DC test for a circuit with a nominal voltage up to and including 500 V.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
    ],
  },
  {
    prompt:
      "Questions 40 to 46 relate to the following scenario. Insulation resistance has been tested on five new lighting circuits in an existing large distribution warehouse. These circuits are supplied from a new single-phase, five-way DB. Switching for each circuit is by 230 V contactors. Connection to each light is made using a BS 1363 socket-outlet adjacent to the fitting. The supply and installation form a 400 V three-phase TN-C-S system. What would be the most appropriate action to take if the result for lighting circuit 1 is 0.95 MΩ between live conductors?",
    options: [
      "Investigate lighting circuit 1 between Line-Earth",
      "Investigate lighting circuit 1 between Line-Neutral",
      "Record the result as a non-compliance",
      "Record the result as acceptable",
    ],
    answer: "Investigate lighting circuit 1 between Line-Neutral",
    rationales: {
      "Investigate lighting circuit 1 between Line-Earth":
        "The low result was measured between the two live conductors, so the affected test path is line to neutral. Testing a different pair may miss leakage or a connected load between those two cores.",
      "Record the result as a non-compliance":
        "A value below 1 MΩ requires investigation and correction, or an explained retest, before certification. Recording it alone leaves the cause and safety of the new circuit unresolved.",
      "Record the result as acceptable":
        "Table 64 sets 1 MΩ as the minimum value for this circuit, so 0.95 MΩ is below the requirement. The result must be investigated rather than accepted at handover.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
    ],
  },
  {
    prompt:
      "Questions 47 to 49 relate to the following scenario. A section of galvanised trunking is to be inspected as part of periodic inspection and testing of a factory. The trunking contains unsheathed low voltage cables. What is the minimum IP rating for the readily accessible horizontal top surface of the trunking?",
    options: ["IP2X", "IPX4", "IPXXB", "IPXXD"],
    answer: "IPXXD",
    rationales: {
      IP2X:
        "This is the general enclosure level against a 12.5 mm solid-object probe. A readily accessible horizontal top surface must also resist a 1 mm probe, which requires the stricter IP4X or IPXXD level.",
      IPX4:
        "The X leaves solid-object and access protection unspecified, while the final 4 is a water-splash rating. This inspection is assessing basic protection against access to live parts.",
      IPXXB:
        "The B access probe represents a finger and is the general barrier or enclosure level. A readily accessible horizontal top surface needs protection against the 1 mm D access probe.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/3025/small-craft-electrical-safety-_dpc_ready.pdf",
      "https://www.bsigroup.com/en-GB/standards/bs-76712018a22022/",
    ],
  },
  {
    prompt:
      "Questions 47 to 49 relate to the following scenario. A section of galvanised trunking is to be inspected as part of periodic inspection and testing of a factory. The trunking contains unsheathed low voltage cables. Which are the most appropriate human senses to check the security of the trunking lid?",
    options: [
      "Hearing and touch",
      "Sight and smell",
      "Smell and hearing",
      "Touch and sight",
    ],
    answer: "Touch and sight",
    rationales: {
      "Hearing and touch":
        "Gentle pressure can reveal movement, but sound does not reliably show a missing clip, screw or visible gap. A visual check is needed alongside the mechanical check.",
      "Sight and smell":
        "A visual check can identify alignment and missing fasteners, but odour indicates effects such as overheating rather than lid security. Gentle pressure is needed to confirm that the lid is mechanically held.",
      "Smell and hearing":
        "Odour or noise may indicate overheating or arcing on energised equipment. Neither sense confirms that the lid's clips or screws are present and secure.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/2218/bs_7671_2018-model_forms-all.pdf",
      "https://www.hse.gov.uk/electricity/introduction.htm",
    ],
  },
  {
    prompt:
      "Questions 47 to 49 relate to the following scenario. A section of galvanised trunking is to be inspected as part of periodic inspection and testing of a factory. The trunking contains unsheathed low voltage cables. What is the most likely reason for carrying out this periodic inspection?",
    options: [
      "New cables have been installed in the trunking",
      "New contractors have been appointed",
      "New occupiers have purchased the building",
      "New trunking has been installed",
    ],
    answer: "New occupiers have purchased the building",
    rationales: {
      "New cables have been installed in the trunking":
        "New cabling is an addition or alteration and must undergo initial verification and certification before service. Periodic inspection assesses the condition of an existing installation.",
      "New contractors have been appointed":
        "Changing a contractor is an administrative event and does not change the installation's electrical condition. Inspection timing is based on use, environment, maintenance history and events such as a change of occupancy.",
      "New trunking has been installed":
        "New containment is installation work that is inspected and tested as part of initial verification. Periodic inspection is used to judge whether existing work remains safe for continued service.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/model-forms/",
    ],
  },
  {
    prompt:
      "Questions 50 to 57 relate to the following scenario. Continuity of a ring final circuit has been tested as part of an initial verification of a new primary school. All the socket-outlets are connected directly to the ring. The circuit loop length is 58 m long, wired in 4 mm² live and 1.5 mm² cpc flat profile cable. The circuit is protected by a 32 A BS EN 60898 Type B circuit breaker. Which test would detect incorrect polarity of the Live conductors at each socket-outlet?",
    options: [
      "Line-Earth at each socket-outlet",
      "Line-Earth at the distribution board",
      "Line-Neutral at each socket-outlet",
      "Line-Neutral at the distribution board",
    ],
    answer: "Line-Earth at each socket-outlet",
    rationales: {
      "Line-Earth at the distribution board":
        "A resistance measurement at the origin checks the cross-connection and loop conductors, not the terminals of every accessory. Each socket-outlet must be measured to prove its line terminal is correctly connected.",
      "Line-Neutral at each socket-outlet":
        "With line and neutral cross-connected, a socket whose line and neutral terminals are reversed can still give a normal loop reading because the same two conductors are measured. The line-to-cpc step ties the polarity check to the protective terminal.",
      "Line-Neutral at the distribution board":
        "An origin-only reading cannot reveal a reversal at an individual socket-outlet. The test point must be at each accessory and use the protective conductor as the reference.",
    },
    sourceUrls: [
      "https://shop.theiet.org/guidance-note-3-inspection-testing-10th-edition",
      "https://electrical.theiet.org/wiring-matters/years/2022/89-march-2022/resistance-readings-for-step-3-of-the-ring-final-circuit-test/",
    ],
  },
  {
    prompt:
      "Questions 50 to 57 relate to the following scenario. Continuity of a ring final circuit has been tested as part of an initial verification of a new primary school. All the socket-outlets are connected directly to the ring. The circuit loop length is 58 m long, wired in 4 mm² live and 1.5 mm² cpc flat profile cable. The circuit is protected by a 32 A BS EN 60898 Type B circuit breaker. What is the expected measured r1 value?",
    options: ["0.27 Ω", "0.32 Ω", "0.43 Ω", "0.52 Ω"],
    answer: "0.27 Ω",
    rationales: {
      "0.32 Ω":
        "A 4 mm² copper conductor is about 4.61 mΩ/m, so 58 m gives 0.267 Ω. This result would imply about 69 m of the stated conductor, not the given loop length.",
      "0.43 Ω":
        "This implies about 7.41 mΩ/m, which is characteristic of a 2.5 mm² copper conductor. The line loop is stated to be 4 mm² and therefore has lower resistance.",
      "0.52 Ω":
        "This implies about 8.97 mΩ/m, almost twice the expected resistance per metre for 4 mm² copper. It would indicate a different length, conductor size or added resistance.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2022/89-march-2022/resistance-readings-for-step-3-of-the-ring-final-circuit-test/",
      "https://shop.theiet.org/guidance-note-3-inspection-testing-10th-edition",
    ],
  },
  {
    prompt:
      "Questions 50 to 57 relate to the following scenario. Continuity of a ring final circuit has been tested as part of an initial verification of a new primary school. All the socket-outlets are connected directly to the ring. The circuit loop length is 58 m long, wired in 4 mm² live and 1.5 mm² cpc flat profile cable. The circuit is protected by a 32 A BS EN 60898 Type B circuit breaker. What is the expected measured r2 value?",
    options: ["0.27 Ω", "0.45 Ω", "0.70 Ω", "0.84 Ω"],
    answer: "0.70 Ω",
    rationales: {
      "0.27 Ω":
        "This is the expected end-to-end value for the 4 mm² live loop. The 1.5 mm² cpc is about 12.1 mΩ/m, giving approximately 0.702 Ω over 58 m.",
      "0.45 Ω":
        "This implies about 7.76 mΩ/m, close to the resistance of a 2.5 mm² copper conductor. The smaller 1.5 mm² cpc has substantially more resistance per metre.",
      "0.84 Ω":
        "This implies about 14.48 mΩ/m, above the standard 20 °C value for 1.5 mm² copper. It would suggest excess length or additional joint resistance.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2022/89-march-2022/resistance-readings-for-step-3-of-the-ring-final-circuit-test/",
      "https://shop.theiet.org/guidance-note-3-inspection-testing-10th-edition",
    ],
  },
  {
    prompt:
      "Questions 50 to 57 relate to the following scenario. Continuity of a ring final circuit has been tested as part of an initial verification of a new primary school. All the socket-outlets are connected directly to the ring. The circuit loop length is 58 m long, wired in 4 mm² live and 1.5 mm² cpc flat profile cable. The circuit is protected by a 32 A BS EN 60898 Type B circuit breaker. What pattern of test results is expected at each socket-outlet when the line and neutral conductors are correctly cross-connected?",
    options: [
      "Readings are substantially the same",
      "Readings decrease around the ring",
      "Readings increase around the ring",
      "Readings rise to the centre and then fall",
    ],
    answer: "Readings are substantially the same",
    rationales: {
      "Readings decrease around the ring":
        "The equal-sized line and neutral conductors create complementary parallel paths as the test point moves around the ring. Their combined resistance does not follow a one-way downward trend.",
      "Readings increase around the ring":
        "Moving past the ring's midpoint shortens the path that was previously getting longer, so a continuous one-way rise is not expected. Equal line and neutral resistance keeps the readings approximately constant.",
      "Readings rise to the centre and then fall":
        "That pattern occurs during the line-to-cpc step when the two conductors have noticeably different resistance per metre, as with 4 mm² and 1.5 mm². Both live conductors here are 4 mm², so their cross-connected readings remain substantially alike.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2022/89-march-2022/resistance-readings-for-step-3-of-the-ring-final-circuit-test/",
      "https://shop.theiet.org/guidance-note-3-inspection-testing-10th-edition",
    ],
  },
  {
    prompt:
      "Questions 50 to 57 relate to the following scenario. Continuity of a ring final circuit has been tested as part of an initial verification of a new primary school. All the socket-outlets are connected directly to the ring. The circuit loop length is 58 m long, wired in 4 mm² live and 1.5 mm² cpc flat profile cable. The circuit is protected by a 32 A BS EN 60898 Type B circuit breaker. What is the expected measured value at each socket-outlet when the line and neutral conductors are correctly cross-connected?",
    options: ["0.13 Ω", "0.16 Ω", "0.22 Ω", "0.49 Ω"],
    answer: "0.13 Ω",
    rationales: {
      "0.16 Ω":
        "The line and neutral end-to-end values are each about 0.27 Ω. Their cross-connected socket value is (r1 + rn) ÷ 4, which is about 0.135 Ω rather than this higher figure.",
      "0.22 Ω":
        "This would require end-to-end live-conductor resistances totalling about 0.88 Ω. The two 4 mm² loops total only about 0.54 Ω.",
      "0.49 Ω":
        "This is close to adding the two end-to-end loop values without applying the ring's parallel-path factor. Cross-connection at a socket divides their sum by four.",
    },
    sourceUrls: [
      "https://shop.theiet.org/guidance-note-3-inspection-testing-10th-edition",
      "https://electrical.theiet.org/wiring-matters/years/2022/89-march-2022/resistance-readings-for-step-3-of-the-ring-final-circuit-test/",
    ],
  },
  {
    prompt:
      "Questions 50 to 57 relate to the following scenario. Continuity of a ring final circuit has been tested as part of an initial verification of a new primary school. All the socket-outlets are connected directly to the ring. The circuit loop length is 58 m long, wired in 4 mm² live and 1.5 mm² cpc flat profile cable. The circuit is protected by a 32 A BS EN 60898 Type B circuit breaker. What is a simplified way to verify the r1 and r2 ratio for this circuit?",
    options: [
      "R1 = r2 x 1.67",
      "R1 = r2 x 2.67",
      "R2 = r1 x 1.67",
      "r2 = r1 x 2.67",
    ],
    answer: "r2 = r1 x 2.67",
    rationales: {
      "R1 = r2 x 1.67":
        "For equal material and length, resistance is inversely proportional to conductor area. The 4 mm² line has lower resistance than the 1.5 mm² cpc, so multiplying the cpc value cannot produce the line value; 1.67 is the 2.5-to-1.5 mm² area ratio.",
      "R1 = r2 x 2.67":
        "This reverses the physical relationship by making the larger line conductor more resistive than the smaller cpc. The 2.67 factor belongs on the 1.5 mm² loop relative to the 4 mm² loop.",
      "R2 = r1 x 1.67":
        "The direction is sensible, but the area ratio for these conductors is 4 ÷ 1.5, which is about 2.67. A factor of 1.67 applies to a 2.5 mm² line paired with a 1.5 mm² cpc.",
    },
    sourceUrls: [
      "https://shop.theiet.org/guidance-note-3-inspection-testing-10th-edition",
      "https://electrical.theiet.org/wiring-matters/years/2022/89-march-2022/resistance-readings-for-step-3-of-the-ring-final-circuit-test/",
    ],
  },
  {
    prompt:
      "Questions 50 to 57 relate to the following scenario. Continuity of a ring final circuit has been tested as part of an initial verification of a new primary school. All the socket-outlets are connected directly to the ring. The circuit loop length is 58 m long, wired in 4 mm² live and 1.5 mm² cpc flat profile cable. The circuit is protected by a 32 A BS EN 60898 Type B circuit breaker. Which results from the ring-final circuit continuity test must be recorded on the applicable test schedule?",
    options: [
      "r1, rn, r2 and R1+R2",
      "Ze, prospective fault current and RCD time",
      "Insulation resistance only",
      "Design current and voltage drop only",
    ],
    answer: "r1, rn, r2 and R1+R2",
    rationales: {
      "Ze, prospective fault current and RCD time":
        "These are separate live-test or supply results. The ring-continuity procedure is a dead test that measures the ring conductors themselves.",
      "Insulation resistance only":
        "Insulation resistance checks leakage between conductors and earth. It is a different test and does not record whether each ring conductor is continuous end to end.",
      "Design current and voltage drop only":
        "Design current and voltage drop describe circuit loading and performance. They do not contain the end-to-end and cross-connected resistance readings produced by the ring test.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/1546/periodic-inspection-and-the-electrical-installation-condition-report.pdf",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/model-forms/",
    ],
  },
  {
    prompt:
      "Questions 50 to 57 relate to the following scenario. Continuity of a ring final circuit has been tested as part of an initial verification of a new primary school. All the socket-outlets are connected directly to the ring. The circuit loop length is 58 m long, wired in 4 mm² live and 1.5 mm² cpc flat profile cable. The circuit is protected by a 32 A BS EN 60898 Type B circuit breaker. The installation has a measured Ze of 0.29 Ω. What is the expected value of Zs for this circuit?",
    options: ["0.24 Ω", "0.28 Ω", "0.53 Ω", "0.58 Ω"],
    answer: "0.53 Ω",
    rationales: {
      "0.24 Ω":
        "This is approximately the ring conductor contribution, (r1 + r2) ÷ 4, before the external impedance is added. Zs must include the stated 0.29 Ω Ze as well.",
      "0.28 Ω":
        "This is below the measured Ze at the installation origin. Adding the final-circuit fault path cannot reduce the total loop impedance below its external component.",
      "0.58 Ω":
        "This would require a final-circuit contribution of 0.29 Ω. The stated conductor values give (0.27 + 0.70) ÷ 4 = 0.2425 Ω, and adding Ze gives about 0.5325 Ω.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2022/89-march-2022/resistance-readings-for-step-3-of-the-ring-final-circuit-test/",
      "https://electrical.theiet.org/wiring-matters/years/2024/100-may-2024/why-are-the-values-of-maximum-earth-fault-loop-impedance-different/",
    ],
  },
  {
    prompt:
      "The measured R1+R2 value for a radial cooker circuit, with a 6 mm² line conductor and a 2.5 mm² cpc, is 0.29 Ω. What is the length of this circuit?",
    options: ["23 m", "28 m", "33 m", "38 m"],
    answer: "28 m",
    rationales: {
      "23 m":
        "The combined 20 °C resistance is about 3.08 + 7.41 = 10.49 mΩ/m. A 23 m run would therefore measure only about 0.241 Ω.",
      "33 m":
        "At 10.49 mΩ/m, this length would give approximately 0.346 Ω. That is appreciably above the measured 0.29 Ω.",
      "38 m":
        "At the published resistance per metre, this length would give approximately 0.399 Ω. The measured loop resistance supports a substantially shorter run.",
    },
    sourceUrls: [
      "https://datasheet.prysmiangroup.com/pdf/datasheet/en/332544",
      "https://electrical.theiet.org/guidance-and-codes-of-practice/publications-by-category/bs-7671-and-guidance/",
    ],
  },
  {
    prompt:
      "Questions 59 and 60 relate to the following scenario. An earth electrode resistance test has been carried out within a caravan park. The supply and installation form a 230 V single-phase TT system. The three readings were 179 Ω, 172 Ω and 168 Ω. What value is to be recorded as the earth electrode resistance?",
    options: ["168 Ω", "173 Ω", "179 Ω", "200 Ω"],
    answer: "173 Ω",
    rationales: {
      "168 Ω":
        "This is one individual probe-position reading. Averaging 179 Ω, 172 Ω and 168 Ω gives the representative result of 173 Ω.",
      "179 Ω":
        "This is one endpoint reading and is affected by its particular potential-probe position. The simplified fall-of-potential result uses the mean of all three readings, not the highest one.",
      "200 Ω":
        "None of the three tests produced this value, and an average cannot exceed the highest measured result of 179 Ω. It therefore has no basis in the recorded measurements.",
    },
    sourceUrls: [
      "https://www.megger.com/en-us/et-online/September-2017/Hazardous-materials-and-grounding",
      "https://www.megger.com/en/et-online/october-2016/q-and-a-earth-resistivity-and-earth-electrode-test",
    ],
  },
  {
    prompt:
      "Questions 59 and 60 relate to the following scenario. An earth electrode resistance test has been carried out within a caravan park. The supply and installation form a 230 V single-phase TT system. The measured earth electrode resistance is 173 Ω. What is the maximum listed RCD rating that can be used for fault protection on this installation?",
    options: ["100 mA", "30 mA", "300 mA", "500 mA"],
    answer: "100 mA",
    rationales: {
      "30 mA":
        "The touch-voltage product is only 173 Ω × 0.03 A = 5.19 V. It satisfies the limit, but the limiting current is about 50 ÷ 173 = 0.289 A, so this is not the largest listed compliant rating.",
      "300 mA":
        "The product is 173 Ω × 0.30 A = 51.9 V. That exceeds the 50 V condition in Regulation 411.5.3 for RCD fault protection on a TT system.",
      "500 mA":
        "The product is 173 Ω × 0.50 A = 86.5 V. This is well above the permitted 50 V touch-voltage condition.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2021/87-september-2021/tt-earthing-considerations/",
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
    ],
  },
] as const;
