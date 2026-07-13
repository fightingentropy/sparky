export const initialVerificationTest5Q01To20 = [
  {
    prompt:
      "What needs to be verified during the inspection of a new installation?",
    options: [
      "Electrical appliances comply with BS 7671",
      "Electrical equipment has not degraded",
      "Fixed installation has not deteriorated",
      "Fixed installation is correctly selected",
    ],
    answer: "Fixed installation is correctly selected",
    rationales: {
      "Electrical appliances comply with BS 7671":
        "BS 7671 initial verification concerns the fixed electrical installation, while appliances are assessed against their applicable product standards. The inspector checks that installed wiring and equipment are suitable before the installation enters service.",
      "Electrical equipment has not degraded":
        "Ageing is mainly an in-service condition issue. Initial verification must establish correct selection and erection, not merely the absence of deterioration.",
      "Fixed installation has not deteriorated":
        "Wear, corrosion and ageing are assessed after an installation has been in service through periodic inspection and testing. New work instead has to be checked against its design and the applicable installation requirements.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
    ],
  },
  {
    prompt:
      "What process involves checking if an installation has deteriorated?",
    options: [
      "Condition Inspection",
      "Initial Inspection and Testing",
      "Initial Verification",
      "Periodic Inspection and Testing",
    ],
    answer: "Periodic Inspection and Testing",
    rationales: {
      "Condition Inspection":
        "That is not the BS 7671 name for the formal process. The condition of an existing fixed installation is assessed by periodic inspection and testing and is normally reported on an EICR.",
      "Initial Inspection and Testing":
        "Checks made on new or altered work before it is put into service cannot assess deterioration accumulated during use. Their purpose is to verify the completed work at handover.",
      "Initial Verification":
        "This process confirms that new work meets the installation requirements before service. Ageing, wear, damage and environmental deterioration are examined later during periodic assessment.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2021/86-july-2021/setting-up-a-basic-electrical-maintenance-regime/",
    ],
  },
  {
    prompt:
      "What document must be issued following the installation of a new cooker circuit to an existing installation?",
    options: [
      "Electrical Installation Certificate",
      "Electrical Installation Condition Report",
      "Electrical Installation Report",
      "Minor Electrical Installation Works Certificate",
    ],
    answer: "Electrical Installation Certificate",
    rationales: {
      "Electrical Installation Condition Report":
        "A condition report records the state of an existing installation following periodic inspection. It does not certify the design, construction and verification of a newly installed circuit.",
      "Electrical Installation Report":
        "That title is not one of the BS 7671 model certification forms. An addition that introduces a new circuit is covered by the installation certificate defined in the model forms.",
      "Minor Electrical Installation Works Certificate":
        "The minor-works form is limited to additions or alterations that do not introduce a new circuit. A cooker circuit is a new circuit and falls outside that form's stated scope.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/tqxkkscw/bs7671_eic_a4.pdf",
      "https://electrical.theiet.org/media/f0hlqxq1/bs7671_meiwc_a4.pdf",
    ],
  },
  {
    prompt:
      "What circumstance would most clearly call for an EICR on an existing flat when no current satisfactory report is available?",
    options: [
      "New luminaires have been installed",
      "A new occupier is moving in",
      "Remedial work has been carried out",
      "Supermarket has been rewired",
    ],
    answer: "A new occupier is moving in",
    rationales: {
      "New luminaires have been installed":
        "Fitting luminaires is installation work and receives the certificate appropriate to its extent. A condition report assesses the safety of an existing installation rather than certifying that new work.",
      "Remedial work has been carried out":
        "Corrective work should be certified with an installation or minor-works certificate as appropriate and linked to the original report. Completing that work does not itself require a fresh condition report.",
      "Supermarket has been rewired":
        "A complete rewire is new installation work, so its design, construction, inspection and testing are certified on an EIC. An EICR is the report used for periodic assessment of an existing installation.",
    },
    sourceUrls: [
      "https://www.gov.uk/government/publications/electrical-safety-standards-in-the-private-and-social-rented-sectors-guidance/electrical-safety-standards-in-the-private-and-social-rented-sectors-guidance",
      "https://electrical.theiet.org/media/tqxkkscw/bs7671_eic_a4.pdf",
    ],
  },
  {
    prompt:
      "Questions 5 to 11 relate to the following scenario. Refurbishment of a leisure centre with a swimming pool is taking place. An additional lighting circuit is to be installed. The new lights will be at a height of 2.4m above the pool. What document must be completed following inspection and testing?",
    options: [
      "Electrical Installation Certificate",
      "Electrical Installation Condition Report",
      "Minor Electrical Installation Works Certificate",
      "Schedule of Electrical Condition",
    ],
    answer: "Electrical Installation Certificate",
    rationales: {
      "Electrical Installation Condition Report":
        "A condition report assesses an existing installation for continued service. It is not the certification route for work that introduces a new lighting circuit.",
      "Minor Electrical Installation Works Certificate":
        "The minor-works form expressly excludes the provision of a new circuit. The swimming-pool requirements affect the design, but the new-circuit scope is what determines the certificate.",
      "Schedule of Electrical Condition":
        "That is not a BS 7671 model certificate for new installation work. Circuit details, inspection outcomes and test results are schedules attached to the applicable certificate.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/tqxkkscw/bs7671_eic_a4.pdf",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/model-forms/",
    ],
  },
  {
    prompt:
      "Questions 5 to 11 relate to the following scenario. Refurbishment of a leisure centre with a swimming pool is taking place. An additional lighting circuit is to be installed. The new lights will be at a height of 2.4m above the pool. Which non-statutory IET publication provides detailed guidance across the full inspection-and-testing process?",
    options: ["ESQCR", "EAWR", "GN3", "GS38"],
    answer: "GN3",
    rationales: {
      ESQCR:
        "This is statutory legislation governing electricity supply, quality, continuity and related distributor duties. It is not the practical guide covering the full inspection-and-testing process.",
      EAWR: "The Electricity at Work Regulations impose statutory legal duties for electrical safety. They do not provide the detailed test methods and procedures supplied by the IET inspection-and-testing guide.",
      GS38: "This HSE guidance focuses on selecting and using test equipment, leads and probes safely. Its scope is narrower than the IET publication devoted to inspection and testing methods as a whole.",
    },
    sourceUrls: [
      "https://shop.theiet.org/guidance-note-3-inspection-testing-10th-edition",
      "https://www.hse.gov.uk/pubns/books/gs38.htm",
      "https://www.legislation.gov.uk/uksi/2002/2665/contents",
      "https://www.legislation.gov.uk/uksi/1989/635/contents",
    ],
  },
  {
    prompt:
      "Questions 5 to 11 relate to the following scenario. Refurbishment of a leisure centre with a swimming pool is taking place. An additional lighting circuit is to be installed. The new lights will be at a height of 2.4m above the pool. What document must the Inspector use to record the new lighting circuit reference method?",
    options: [
      "Electrical Installation Certificate",
      "Schedule of Circuit Details",
      "Schedule of Inspections",
      "Schedule of Test Results",
    ],
    answer: "Schedule of Circuit Details",
    rationales: {
      "Electrical Installation Certificate":
        "The face of the certificate records the overall work and declarations. Circuit-by-circuit design information is entered on an attached circuit schedule.",
      "Schedule of Inspections":
        "This schedule records the outcomes of relevant visual inspection items. It does not hold cable installation methods or other circuit-design data.",
      "Schedule of Test Results":
        "This schedule records measured values such as continuity, insulation resistance and earth fault loop impedance. The cable reference method is a circuit-design detail, not a test reading.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/tqxkkscw/bs7671_eic_a4.pdf",
      "https://electrical.theiet.org/media/2818/bs7671-eic.pdf",
    ],
  },
  {
    prompt:
      "Questions 5 to 11 relate to the following scenario. Refurbishment of a leisure centre with a swimming pool is taking place. An additional lighting circuit is to be installed. The new lights will be at a height of 2.4m above the pool. What would be the most appropriate human sense to use when inspecting the IP rating of the new lights?",
    options: ["Hearing", "Sight", "Smell", "Touch"],
    answer: "Sight",
    rationales: {
      Hearing:
        "An IP code is a marking or documented specification, not an audible property. Listening cannot establish the enclosure's declared protection against water ingress.",
      Smell:
        "Odour may reveal overheating or burning, but it cannot identify an enclosure's declared IP rating. The code has to be read from the fitting or its documentation.",
      Touch:
        "Feeling the enclosure cannot establish its certified ingress-protection code and may expose the inspector to an unsuitable fitting. The marking, construction and documentation are checked visually.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
      "https://electrical.theiet.org/media/vasih5wg/bs7671_all_forms_a4.pdf",
    ],
  },
  {
    prompt:
      "Questions 5 to 11 relate to the following scenario. Refurbishment of a leisure centre with a swimming pool is taking place. An additional lighting circuit is to be installed. The new lights will be at a height of 2.4 m above the pool. Where cleaning water jets are not likely to be used, what is the minimum IP rating required for the new lights?",
    options: ["IPX2", "IPX4", "IPX5", "IPX8"],
    answer: "IPX4",
    rationales: {
      IPX2: "Protection against dripping water is below the requirement for equipment in swimming-pool zone 1. A height of 2.4 m remains inside the zone's 2.5 m vertical limit.",
      IPX5: "This higher degree protects against water jets and becomes necessary where jets are likely to be used for cleaning. Without that additional environmental condition, it is not the minimum degree stated for zone 1.",
      IPX8: "This degree is intended for equipment subject to continuous immersion and is associated with the basin itself. A luminaire above the pool is not being selected for submerged service.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/1531/section-702-swimming-pools-and-other-basins.pdf",
      "https://electrical.theiet.org/wiring-matters/years/2021/86-july-2021/hot-tubs/",
    ],
  },
  {
    prompt:
      "Questions 5 to 11 relate to the following scenario. Refurbishment of a leisure centre with a swimming pool is taking place. An additional lighting circuit is to be installed. The new lights will be at a height of 2.4 m above the pool. What would be the most appropriate action to take if the new lights do not comply with the minimum IP rating?",
    options: [
      "Notify the client without delay",
      "Record on the Electrical Installation Certificate",
      "Record on the Schedule of Inspections",
      "Rectify the issue and re-inspect",
    ],
    answer: "Rectify the issue and re-inspect",
    rationales: {
      "Notify the client without delay":
        "Telling the client does not remove the water-ingress risk or make the fittings suitable for the pool zone. The unsafe selection must be corrected before the work is certified.",
      "Record on the Electrical Installation Certificate":
        "Writing the defect on the covering certificate does not make below-minimum protection acceptable. A fault or non-compliance is not a justified departure merely because it has been documented.",
      "Record on the Schedule of Inspections":
        "The schedule records inspection outcomes; it is not a substitute for correcting a safety defect. Successful re-inspection should follow replacement or other effective rectification.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/tqxkkscw/bs7671_eic_a4.pdf",
      "https://electrical.theiet.org/wiring-matters/years/2025/106-july-2025/intended-departures-from-bs-7671/",
    ],
  },
  {
    prompt:
      "Questions 5 to 11 relate to the following scenario. Refurbishment of a leisure centre with a swimming pool is taking place. An additional lighting circuit is to be installed. The new lights will be at a height of 2.4 m above the pool. Which dead test must be completed before the installation is energised for earth fault loop impedance testing?",
    options: [
      "Prospective fault current",
      "Residual current device",
      "Supply polarity",
      "Voltage drop",
    ],
    answer: "Supply polarity",
    rationales: {
      "Prospective fault current":
        "Measuring fault current is a live test at the origin and therefore follows energisation. It cannot establish beforehand that conductors and protective devices have been connected in the correct polarity.",
      "Residual current device":
        "An instrumented operating-time test passes a residual current through an energised device. It is part of live verification, not a pre-energisation wiring check.",
      "Voltage drop":
        "This is normally established from design data or circuit measurements to confirm performance under load. It does not prove that line, neutral and protective devices are connected correctly before energisation.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
    ],
  },
  {
    prompt:
      "Questions 12 to 16 relate to the following scenario. The existing installation in a hotel is to be inspected and tested as a requirement of the local authority for a public entertainment licence application. Previous inspection and testing records exist but two additional socket-outlet circuits have previously been installed for which there are no test results available. Where must the Extent and Limitations of inspection and testing be recorded?",
    options: [
      "Electrical Installation Certificate",
      "Electrical Installation Condition Report",
      "Generic Schedule of Test Results",
      "Periodic Inspection Report Certificate",
    ],
    answer: "Electrical Installation Condition Report",
    rationales: {
      "Electrical Installation Certificate":
        "This certificate covers new work, additions or alterations and its responsible signatories. The hotel exercise is a periodic assessment of an existing installation, whose agreed scope belongs on the condition report.",
      "Generic Schedule of Test Results":
        "A test schedule holds circuit readings such as continuity, insulation resistance, polarity and loop impedance. It does not define the agreed parts of the installation that were included or excluded from the inspection.",
      "Periodic Inspection Report Certificate":
        "That is not the current BS 7671 model-form title. The modern report has a dedicated section for the extent and limitations agreed with the person ordering the work and other interested parties.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/jp2fl3ia/bs7671_eicr_a4.pdf",
    ],
  },
  {
    prompt:
      "Questions 12 to 16 relate to the following scenario. The existing installation in a hotel is to be inspected and tested as a requirement of the local authority for a public entertainment licence application. Previous inspection and testing records exist but two additional socket-outlet circuits have previously been installed for which there are no test results available. Who will be involved in setting the sampling size for this installation?",
    options: [
      "Client, Local Authority and HSE",
      "HSE, Inspector and Local Authority",
      "Inspector, Client and HSE",
      "Inspector, Client and Local Authority",
    ],
    answer: "Inspector, Client and Local Authority",
    rationales: {
      "Client, Local Authority and HSE":
        "The competent inspector must apply engineering judgement when deciding a defensible inspection sample. HSE is not a routine party to agreeing the scope of this licensing report.",
      "HSE, Inspector and Local Authority":
        "The person ordering the report must agree its extent and limitations with the inspector. Replacing that person with HSE omits the party responsible for commissioning and accepting the agreed scope.",
      "Inspector, Client and HSE":
        "The licensing authority is an interested party because the report is required for its public-entertainment decision. HSE does not ordinarily set the sample for an individual EICR.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/jp2fl3ia/bs7671_eicr_a4.pdf",
      "https://www.gov.uk/find-licences/premises-licence",
    ],
  },
  {
    prompt:
      "Questions 12 to 16 relate to the following scenario. The existing installation in a hotel is to be inspected and tested as a requirement of the local authority for a public entertainment licence application. Previous inspection and testing records exist but two additional socket-outlet circuits have previously been installed for which there are no test results available. What action should be taken with regard to the additional socket-outlet circuits?",
    options: [
      "Both should be fully tested to establish their condition for continued service",
      "Both should be sampled to establish their condition for continued service",
      "One should be fully inspected to establish its condition for continued service",
      "One should be sampled to establish its condition for continued service",
    ],
    answer: "Both should be fully tested to establish their condition for continued service",
    rationales: {
      "Both should be sampled to establish their condition for continued service":
        "There are only two undocumented circuits, so a sample could leave safety-critical test information unverified. Each circuit needs enough present evidence for the inspector to reach a condition judgement.",
      "One should be fully inspected to establish its condition for continued service":
        "Examining one circuit supplies no evidence about the other, and visual inspection alone does not produce the missing electrical test results. Each undocumented circuit must be addressed on its own evidence.",
      "One should be sampled to establish its condition for continued service":
        "Checking part of one circuit leaves most of the undocumented work outside the evidence base. That limitation would prevent a sound conclusion about both added circuits.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/jp2fl3ia/bs7671_eicr_a4.pdf",
      "https://electrical.theiet.org/wiring-matters/years/2021/85-may-2021/eicr-myths/",
    ],
  },
  {
    prompt:
      "Questions 12 to 16 relate to the following scenario. The existing installation in a hotel is to be inspected and tested as a requirement of the local authority for a public entertainment licence application. Previous inspection and testing records exist but two additional socket-outlet circuits have previously been installed for which there are no test results available. Which of these is carried out as a dead test with the installation safely isolated?",
    options: [
      "Continuity of protective conductors",
      "Earth fault loop impedance",
      "Prospective fault current",
      "Residual current device",
    ],
    answer: "Continuity of protective conductors",
    rationales: {
      "Earth fault loop impedance":
        "This measurement is normally made on an energised installation and can expose the operator to mains voltage and fault energy. The probes, leads and instrument must be suitably rated and constructed to prevent shock and arcing.",
      "Prospective fault current":
        "This is a live measurement of the large current available under fault conditions. Suitable category-rated equipment and protected probes are essential because an accidental short circuit can release substantial energy.",
      "Residual current device":
        "An operating-time test applies a test current while the RCD and supply are live. Its leads and connectors therefore need the protection and ratings appropriate to the installation and test method.",
    },
    sourceUrls: ["https://www.hse.gov.uk/pubns/priced/gs38.pdf"],
  },
  {
    prompt:
      "Questions 12 to 16 relate to the following scenario. The existing installation in a hotel is to be inspected and tested as a requirement of the local authority for a public entertainment licence application. Previous inspection and testing records exist but two additional socket-outlet circuits have previously been installed for which there are no test results available. Where reliable previous results and the agreed sampling plan justify an omission, which test may be unnecessary on an unchanged ring-final circuit?",
    options: [
      "Earth fault loop impedance",
      "Insulation resistance",
      "Ring-final circuit continuity",
      "Socket-outlet polarity",
    ],
    answer: "Ring-final circuit continuity",
    rationales: {
      "Earth fault loop impedance":
        "The effectiveness of automatic disconnection still has to be established from current evidence. Loop impedance may be measured or validly determined, but an old result alone does not prove the present fault path.",
      "Insulation resistance":
        "Insulation can deteriorate through ageing, moisture, damage or connected equipment after the earlier report. Any decision to omit this present-condition evidence needs a specific technical basis and must be recorded as a limitation where applicable.",
      "Socket-outlet polarity":
        "Connections can be altered or damaged after the previous inspection. Checking an agreed sample of accessible outlets provides present evidence that line, neutral and protective conductors remain correctly connected.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2021/85-may-2021/eicr-myths/",
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
    ],
  },
  {
    prompt:
      "Questions 17 to 23 relate to the following scenario. The continuity of a main protective bonding conductor to a gas installation pipe in a new primary school is to be tested. The 10 mm² conductor is 43 m long. The installation has been safely isolated for this test. What is the purpose of carrying out this test?",
    options: [
      "To confirm a requirement of ADS has been met",
      "To confirm electrical separation has been met",
      "To confirm exposed conductive parts are earthed",
      "To confirm extraneous conductive parts are present",
    ],
    answer: "To confirm a requirement of ADS has been met",
    rationales: {
      "To confirm electrical separation has been met":
        "Electrical separation is a different protective measure based on a separated source and restricted connections to Earth. Main protective bonding belongs to the equipotential bonding requirements used with automatic disconnection.",
      "To confirm exposed conductive parts are earthed":
        "A gas pipe that can introduce Earth potential is an extraneous-conductive-part, not an exposed part of electrical equipment. Exposed parts are connected through circuit protective conductors, while this test concerns the main bond to the MET.",
      "To confirm extraneous conductive parts are present":
        "Whether the pipe can introduce Earth potential is established by inspection and, where necessary, a resistance-to-Earth assessment. This continuity measurement verifies the installed bonding conductor and its connection, not the pipe's existence.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2019/76-july-2019/protective-bonding-habits/",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
    ],
  },
  {
    prompt:
      "Questions 17 to 23 relate to the following scenario. The continuity of a main protective bonding conductor to a gas installation pipe in a new primary school is to be tested. The 10 mm² conductor is 43 m long. The installation has been safely isolated for this test. What instrument is to be used to carry out this test?",
    options: [
      "Approved voltage indicator",
      "Insulation resistance tester",
      "Low resistance ohmmeter",
      "Prospective fault current tester",
    ],
    answer: "Low resistance ohmmeter",
    rationales: {
      "Approved voltage indicator":
        "A two-pole indicator establishes the presence or absence of voltage during safe isolation. It does not measure the small resistance of a long copper bonding conductor with the required resolution.",
      "Insulation resistance tester":
        "This function applies a high DC test voltage and measures leakage resistance in megohms. Bonding continuity requires an accurate low-ohm measurement instead.",
      "Prospective fault current tester":
        "This is a live test function that estimates available fault current in amperes or kiloamperes. It cannot verify the end-to-end resistance of an isolated bonding conductor.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
      "https://electrical.theiet.org/wiring-matters/years/2019/75-may-2019/to-bond-or-not-to-bond/",
    ],
  },
  {
    prompt:
      "Questions 17 to 23 relate to the following scenario. The continuity of a main protective bonding conductor to a gas installation pipe in a new primary school is to be tested. The 10 mm² conductor is 43 m long. The installation has been safely isolated for this test. Why must the installation remain safely isolated whilst this test is carried out?",
    options: [
      "To ensure accurate test results",
      "To include parallel paths",
      "To remove parallel paths",
      "To remove the risk of electric shock",
    ],
    answer: "To remove the risk of electric shock",
    rationales: {
      "To ensure accurate test results":
        "Measurement accuracy is managed by checking the instrument, nulling lead resistance and making the correct test connections. Isolation is first a control against dangerous voltage while the bonding connection is handled.",
      "To include parallel paths":
        "Alternative metallic return paths can make the measured resistance appear lower and may conceal an open or poor bond. They are an unwanted influence, not something the safety procedure is intended to add.",
      "To remove parallel paths":
        "Switching off the supply does not by itself separate every metallic route through pipework and connected Class I equipment. Parallel paths are controlled by the test connections; secure isolation prevents hazardous energisation while those connections are changed.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/pubns/priced/hsg85.pdf",
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/neutral-current-diversion-ncd-industry-research-update/",
    ],
  },
  {
    prompt:
      "Questions 17 to 23 relate to the following scenario. The continuity of a main protective bonding conductor to a gas installation pipe in a new primary school is to be tested. The 10 mm² conductor is 43 m long. The installation has been safely isolated for this test. Which additional piece of test equipment will be required for this test?",
    options: [
      "Earth electrode",
      "Proving unit",
      "Rotating disc",
      "Wander lead",
    ],
    answer: "Wander lead",
    rationales: {
      "Earth electrode":
        "An electrode forms part of an earthing arrangement and is assessed with an electrode-resistance method. It is not a portable connection between the MET and a remote gas-pipe bond.",
      "Proving unit":
        "This checks a voltage indicator before and after proving dead during safe isolation. Once isolation is established, it does not extend the low-resistance instrument to the remote bonding point.",
      "Rotating disc":
        "This is associated with indicating phase sequence or rotation on a polyphase supply. It has no role in an end-to-end resistance measurement on an isolated conductor.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/2826/bs-76712018-model-forms-electrical-installation-condition-report.pdf",
      "https://www.hse.gov.uk/pubns/priced/hsg85.pdf",
    ],
  },
] as const;
