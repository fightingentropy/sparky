export const initialVerificationTest4 = [
  {
    prompt:
      "Before wiring an extension to a dwelling, what assessment is needed to confirm that the affected existing installation can safely support the addition?",
    options: [
      "A full review of the original electrical installation certificate",
      "Relevant inspection and testing of the affected existing installation",
      "A visual inspection of the wiring and condition of the accessories",
      "Certification of the additional wiring on completion of the extension",
    ],
    answer: "Relevant inspection and testing of the affected existing installation",
    rationales: {
      "A full review of the original electrical installation certificate":
        "The original certificate records the installation as it was when that work was completed. It cannot reveal subsequent damage, deterioration or changes that affect the capacity for an extension.",
      "A visual inspection of the wiring and condition of the accessories":
        "Visual checks can find obvious damage and unsuitable equipment, but they cannot establish values such as insulation resistance, earthing continuity or fault-loop impedance. Relevant inspection therefore has to be supported by testing.",
      "Certification of the additional wiring on completion of the extension":
        "Certification documents the new work after it has been designed, installed and verified. It is too late to serve as the prior assessment of whether the existing supply, earthing and protective arrangements can accept that work.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/jp2fl3ia/bs7671_eicr_a4.pdf",
      "https://electrical.theiet.org/media/tqxkkscw/bs7671_eic_a4.pdf",
    ],
  },
  {
    prompt:
      "Which periodic-inspection objective specifically concerns protection of the building and property rather than direct injury to people?",
    options: [
      "That the electrical installation is not damaged",
      "That there are no defects or non-compliances present",
      "There is no risk of electric shock and burns",
      "There is no risk of fire caused by the electrical installation",
    ],
    answer: "There is no risk of fire caused by the electrical installation",
    rationales: {
      "That the electrical installation is not damaged":
        "Damage is an observation about the installation's condition, not the particular building-safety outcome requested. Damage matters because it can create hazards such as shock or fire; the property-focused hazard listed here is fire.",
      "That there are no defects or non-compliances present":
        "Defects and departures are findings the inspector records and assesses. This broad statement does not identify the specific safety outcome for the building and property that the question asks for.",
      "There is no risk of electric shock and burns":
        "Electric shock and burns are direct risks to people. They are important periodic-inspection objectives, but they are not the property-focused objective singled out in this question.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/jp2fl3ia/bs7671_eicr_a4.pdf",
      "https://www.electricalsafetyfirst.org.uk/media/nhjengmh/best_practice-guide-4_issue-73.pdf",
    ],
  },
  {
    prompt:
      "What is the minimum level of IP protection for the opening shown as Item A in Figure 1?",
    options: ["IP2X", "IP4X", "IPX2", "IPX4"],
    answer: "IP2X",
    rationales: {
      IP4X: "This gives a higher degree of protection against solid objects than the minimum required on an ordinary accessible face. The stricter small-object requirement applies to readily accessible horizontal top surfaces.",
      IPX2: "The X in the first position leaves solid-object and access protection unspecified, while the second digit concerns dripping water. The pictured opening needs protection against a finger reaching live parts.",
      IPX4: "This is a water-splash rating and does not establish protection against access to hazardous live parts. The relevant characteristic for the opening is the first IP digit or the equivalent access-probe letter.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/1405/consumer-units.pdf",
      "https://electrical.theiet.org/media/1605/protective-measures-special-installations-or-locations-part-1.pdf",
    ],
  },
  {
    prompt:
      "What is the minimum level of IP protection for the accessible top surface of a consumer unit?",
    options: ["IP2X", "IP4X", "IPX2", "IPX4"],
    answer: "IP4X",
    rationales: {
      IP2X: "This is sufficient for other enclosure faces against finger access, but a readily accessible horizontal top has a stricter small-object requirement. A thin wire could still pass through an opening that only meets this level.",
      IPX2: "This describes limited protection against vertically dripping water and says nothing about solid objects entering from above. The top-surface rule is concerned with access by a 1 mm probe.",
      IPX4: "Splash resistance is a water-ingress characteristic. It cannot replace the required first-digit protection against small solid objects and access to live parts.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/1405/consumer-units.pdf",
    ],
  },
  {
    prompt:
      "Which publication gives detailed information for carrying out testing of electrical installations?",
    options: [
      "HS(G)141",
      "HSE GS 38",
      "IET Guidance Note 3",
      "IET Guidance note 1",
    ],
    answer: "IET Guidance Note 3",
    rationales: {
      "HS(G)141":
        "This HSE publication concerns electrical safety on construction sites. It is not the detailed companion to Part 6 of BS 7671 for the full inspection-and-testing process.",
      "HSE GS 38":
        "This guidance concentrates on safe selection and use of test instruments, probes and leads on low-voltage systems. It does not provide the complete sequence, methods and interpretation for installation verification.",
      "IET Guidance note 1":
        "Guidance Note 1 covers selection and erection of equipment and wiring systems. Its subject is installation design and construction rather than the dedicated inspection-and-testing procedures.",
    },
    sourceUrls: [
      "https://shop.theiet.org/guidance-note-3-inspection-testing-10th-edition",
      "https://www.hse.gov.uk/pubns/books/gs38.htm",
    ],
  },
  {
    prompt:
      "What would be agreed with the client and recorded as a limitation for a periodic inspection and test?",
    options: [
      "No insulation resistance testing between live conductors to be carried out",
      "Only calibrated test instruments are to be used",
      "The finalised report is to be provided to the client electronically",
      "The installation can be isolated and a full range of tests to be carried out",
    ],
    answer:
      "No insulation resistance testing between live conductors to be carried out",
    rationales: {
      "Only calibrated test instruments are to be used":
        "Instrument suitability and ongoing accuracy are quality requirements for the inspector, not a restriction on the agreed extent of the installation examined. They do not identify any omitted inspection or test.",
      "The finalised report is to be provided to the client electronically":
        "The delivery format is an administrative arrangement made after the work. A limitation records an area, circuit or test that the inspection could not or would not cover.",
      "The installation can be isolated and a full range of tests to be carried out":
        "This grants access needed to avoid a restriction rather than defining one. If the whole agreed installation can be isolated and fully tested, no omission is described by this statement.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/jp2fl3ia/bs7671_eicr_a4.pdf",
      "https://electrical.theiet.org/wiring-matters/years/2021/86-july-2021/setting-up-a-basic-electrical-maintenance-regime/",
    ],
  },
  {
    prompt:
      "Which statutory document includes the requirements for working on live conductors?",
    options: [
      "The Construction (Design and Management) Regulations",
      "The Electricity Safety Quality and Continuity Regulations",
      "The Electricity at Work Regulations",
      "The Health and Safety at Work Act",
    ],
    answer: "The Electricity at Work Regulations",
    rationales: {
      "The Construction (Design and Management) Regulations":
        "CDM governs management of health and safety across construction projects. It does not contain the specific three-part test controlling work on or near live conductors.",
      "The Electricity Safety Quality and Continuity Regulations":
        "ESQCR chiefly regulates distributors' networks, supply quality, continuity and related equipment. The duty limiting live work by employees and contractors is found in workplace electrical-safety legislation.",
      "The Health and Safety at Work Act":
        "The Act establishes broad employer and employee duties. The more specific requirements concerning whether live work is reasonable, necessary and adequately protected appear in the regulations made under it.",
    },
    sourceUrls: [
      "https://www.legislation.gov.uk/uksi/1989/635/regulation/14/made",
      "https://www.hse.gov.uk/pubns/priced/hsr25.pdf",
    ],
  },
  {
    prompt:
      "What action should the inspector take, both before and after testing, to confirm isolation of the supply?",
    options: [
      "Attach a warning label at the isolator stating 'do not switch on'",
      "Confirm the operation of the approved voltage indicator",
      "Lock the main switch on the open position",
      "Switch the main isolator on and off",
    ],
    answer: "Confirm the operation of the approved voltage indicator",
    rationales: {
      "Attach a warning label at the isolator stating 'do not switch on'":
        "A notice helps prevent interference but cannot show that the detector remained functional during the absence-of-voltage check. The indicator needs a known source before and after use.",
      "Lock the main switch on the open position":
        "Locking off secures the disconnection and is an essential separate step. It does not prove the test instrument, so it cannot guard against a false dead indication caused by instrument failure.",
      "Switch the main isolator on and off":
        "Operating the isolator neither proves every relevant conductor dead nor verifies the detector. Re-energizing during the process would also defeat the secured safe-isolation state.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/pubns/priced/gs38.pdf",
      "https://www.hse.gov.uk/pubns/priced/hsg85.pdf",
    ],
  },
  {
    prompt:
      "An inspection is to be carried out at the termination of the circuit conductors inside a terminal box, as shown in Figure 2. Which human sense is best used to confirm the terminals are suitably tightened?",
    options: ["Hearing", "Sight", "Smell", "Touch"],
    answer: "Touch",
    rationales: {
      Hearing:
        "A stationary, isolated termination has no sound that establishes mechanical security. Noise during service might reveal arcing, but it cannot verify the tightness of this dead connection.",
      Sight: "Visual inspection can reveal conductor position, damage and exposed copper, but an apparently correct termination may still be loose. A controlled physical check or the manufacturer's specified torque is needed.",
      Smell: "Burning odour can indicate previous overheating, but its absence does not show that the clamping screw grips the conductor correctly. Mechanical retention is not an olfactory property.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
    ],
  },
  {
    prompt:
      "Questions 9 to 11 relate to the following scenario. An inspection is to be carried out at the termination of the circuit conductors inside a terminal box, as shown in Figure 2. What is confirmed when inspecting the conductor insulation?",
    options: [
      "Contained in the terminals",
      "Correctly identified",
      "Suitable csa",
      "Terminals are tight",
    ],
    answer: "Correctly identified",
    rationales: {
      "Contained in the terminals":
        "Insulation should normally finish close to the terminal without being trapped where only bare conductor is intended to be clamped. Seeing insulation inside the clamping point would not by itself be a satisfactory finding.",
      "Suitable csa":
        "Cross-sectional area is established from conductor markings, construction, measurement or design information. The colour of its insulation identifies function but does not prove the copper area is adequate for the load.",
      "Terminals are tight":
        "Insulation condition can be assessed visually, while clamping security requires a mechanical check appropriate to the terminal. One observation cannot substitute for the other.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
      "https://electrical.theiet.org/media/jp2fl3ia/bs7671_eicr_a4.pdf",
    ],
  },
  {
    prompt:
      "Questions 9 to 11 relate to the following scenario. An inspection is to be carried out at the termination of the circuit conductors inside a terminal box, as shown in Figure 2. Which classification code would be given on the Schedule of Inspections for the situation shown in Figure 3?",
    options: ["C1", "C2", "FI", "N/V"],
    answer: "C2",
    rationales: {
      C1: "This code is reserved for danger present, where the risk of injury exists at the time of inspection. The photograph appears to show a defective plug capable of becoming dangerous when used, but the stem should state whether its parts are actually live and accessible.",
      FI: "Further investigation is used when an apparent safety deficiency cannot be fully identified within the inspection. The missing cover or protective component is already visible, so the nature of the defect does not need investigation before it can be reported.",
      "N/V":
        "Not verified is a schedule entry used where an inspection item could not be confirmed; it is not an EICR observation classification. A visible potentially dangerous defect needs a classification and description.",
    },
    sourceUrls: [
      "https://www.electricalsafetyfirst.org.uk/media/nhjengmh/best_practice-guide-4_issue-73.pdf",
      "https://electrical.theiet.org/media/jp2fl3ia/bs7671_eicr_a4.pdf",
    ],
  },
  {
    prompt:
      "Which classification code indicates that there is a non-compliance which is identified as 'improvement recommended'?",
    options: ["C1", "C2", "C3", "FI"],
    answer: "C3",
    rationales: {
      C1: "This signifies danger present and calls for immediate remedial action or other action to remove the danger. It is far more serious than a recommendation to improve an otherwise serviceable installation.",
      C2: "This identifies a potentially dangerous condition and requires urgent remedial action. It cannot be used for a departure whose assessed consequence is only an opportunity to improve safety.",
      FI: "This means further investigation is required without delay because an apparent deficiency may conceal a C1 or C2 condition. It describes uncertainty needing examination, not a settled improvement recommendation.",
    },
    sourceUrls: [
      "https://www.electricalsafetyfirst.org.uk/media/nhjengmh/best_practice-guide-4_issue-73.pdf",
      "https://electrical.theiet.org/media/jp2fl3ia/bs7671_eicr_a4.pdf",
    ],
  },
  {
    prompt:
      "During a walk-around survey, which pair of senses is most likely to reveal concealed contactor arcing through crackling and a burnt odour?",
    options: [
      "Hearing and smell",
      "Sight and hearing",
      "Smell and sight",
      "Touch and smell",
    ],
    answer: "Hearing and smell",
    rationales: {
      "Sight and hearing":
        "Hearing can reveal the crackle, but a closed enclosure may hide the arc from view. A burnt or ozone-like smell is more useful than sight for the concealed fault described.",
      "Smell and sight":
        "Odour and visible damage can reveal the effects of arcing, but this omits its characteristic crackle or buzzing. A closed contactor enclosure may also prevent a useful visual observation.",
      "Touch and smell":
        "Touching operating switchgear is not an appropriate way to investigate suspected arcing and may expose the inspector to heat, shock or arc-flash hazards. The survey should remain non-contact until the equipment is safely isolated.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/pubns/priced/hsg85.pdf",
      "https://www.hse.gov.uk/pubns/priced/hsr25.pdf",
    ],
  },
  {
    prompt:
      "Questions 14 to 17 relate to the following scenario. A test is to be carried out to confirm the continuity of the main protective bonding conductor to the metallic water installation pipework in a commercial premises. What is the risk if the installation is not safely isolated for this test?",
    options: [
      "Electric shock from different potentials",
      "Poor performance of connected equipment",
      "Possible loss of computer data",
      "Tripping hazards from the test method",
    ],
    answer: "Electric shock from different potentials",
    rationales: {
      "Poor performance of connected equipment":
        "The continuity measurement does not assess equipment output or efficiency. The immediate concern is that disconnecting a bonding path on an energized installation can expose a person to a hazardous potential difference.",
      "Possible loss of computer data":
        "Data loss may result from an unplanned power interruption, but it is not the direct electrical danger created at the separated bonding connection. Operational disruption should still be coordinated before isolation.",
      "Tripping hazards from the test method":
        "A long lead must be routed and controlled to avoid a physical trip hazard, but that issue exists whether the circuit is live or dead. Safe isolation specifically addresses contact with energized conductive parts.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/pubns/priced/hsg85.pdf",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/earthing-and-bonding-faqs/",
    ],
  },
  {
    prompt:
      "Questions 14 to 17 relate to the following scenario. A test is to be carried out to confirm the continuity of the main protective bonding conductor to the metallic water installation pipework in a commercial premises. What is the purpose of the test of continuity of main protective bonding conductors?",
    options: [
      "To confirm exposed conductive parts are connected to the MET",
      "To confirm extraneous conductive parts are connected to the MET",
      "To confirm that a high current will flow in the event of an earth fault",
      "To confirm there is a low earth return path for fault current",
    ],
    answer: "To confirm extraneous conductive parts are connected to the MET",
    rationales: {
      "To confirm exposed conductive parts are connected to the MET":
        "Exposed-conductive-parts of electrical equipment are connected by circuit protective conductors and are checked as part of protective-conductor continuity. Main bonding instead deals with conductive parts that can import an external potential, such as qualifying service pipework.",
      "To confirm that a high current will flow in the event of an earth fault":
        "The purpose of bonding is to limit touch-voltage differences, not to guarantee a particular fault-current magnitude. Protective-device operation is verified from the complete fault path and its protective arrangement.",
      "To confirm there is a low earth return path for fault current":
        "Service pipework must not be treated as the installation's intended earth-fault return conductor. Bonding holds accessible metalwork near the same potential while the earthing and CPC system provides the designed fault path.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/earthing-and-bonding-faqs/",
      "https://webstore.iec.ch/en/publication/60894",
    ],
  },
  {
    prompt:
      "Questions 14 to 17 relate to the following scenario. A test is to be carried out to confirm the continuity of the main protective bonding conductor to the metallic water installation pipework in a commercial premises. What important check must be made with the instrument leads before a reading is taken?",
    options: [
      "Leads are a minimum 10 mm²",
      "Leads are fitted with finger guards",
      "Leads are nulled or zeroed",
      "Leads have a 3 mm exposed tip",
    ],
    answer: "Leads are nulled or zeroed",
    rationales: {
      "Leads are a minimum 10 mm²":
        "A continuity tester uses a small controlled test current, so its lead conductors do not need the cross-sectional area of a main bonding conductor. Their resistance is compensated at the instrument instead.",
      "Leads are fitted with finger guards":
        "Probe barriers are an important protection for live measurements, but this bonding test should be performed dead. They do not remove lead resistance from the low-ohm result.",
      "Leads have a 3 mm exposed tip":
        "GS38 limits exposed metal for safety but does not make a particular tip length an accuracy adjustment. The decisive preparation is to subtract the resistance of the complete connected lead set.",
    },
    sourceUrls: [
      "https://webstore.iec.ch/en/publication/60894",
      "https://www.hse.gov.uk/pubns/priced/gs38.pdf",
    ],
  },
  {
    prompt:
      "Questions 14 to 17 relate to the following scenario. A test is to be carried out to confirm the continuity of the main protective bonding conductor to the water installation pipework in a commercial premises. Which test method is used for this test?",
    options: [
      "Earth fault loop impedance",
      "Linked R1 + R2 test",
      "Long lead test",
      "Zs – Ze",
    ],
    answer: "Long lead test",
    rationales: {
      "Earth fault loop impedance":
        "A loop measurement is a live test of the complete line-to-earth fault path and includes supply impedance and possible parallel routes. It does not isolate the resistance of one bonding conductor.",
      "Linked R1 + R2 test":
        "Linking line and CPC is a method for checking a circuit protective conductor at its outlets. A bonding conductor runs from the MET to an extraneous-conductive-part and is measured directly with an extended reference lead.",
      "Zs – Ze":
        "Subtracting external loop impedance from a circuit loop result is not an acceptable way to derive this bonding resistance, particularly because the measurements can contain different parallel paths. A direct low-resistance measurement is required.",
    },
    sourceUrls: [
      "https://webstore.iec.ch/en/publication/60894",
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
    ],
  },
  {
    prompt:
      "A 10 mm² main protective bonding conductor is 37.5 m in length. What is the expected measured resistance when testing the conductor?",
    options: ["0.07 Ω", "0.08 Ω", "0.70 Ω", "6.86 Ω"],
    answer: "0.07 Ω",
    rationales: {
      "0.08 Ω":
        "Using 1.83 mΩ/m gives 68.625 mΩ for the stated length. Conventional rounding to two decimal places goes down rather than up to this value.",
      "0.70 Ω":
        "This is approximately ten times the calculated conductor resistance and results from moving the decimal point one place. Milliohms must be divided by 1000 when converted to ohms.",
      "6.86 Ω":
        "This is about one hundred times too large for the specified copper conductor. It treats the 68.625 mΩ result as though the unit conversion were two decimal places instead of three.",
    },
    sourceUrls: [
      "https://webstore.iec.ch/en/publication/71891",
      "https://webstore.iec.ch/en/publication/60894",
    ],
  },
  {
    prompt:
      "If a bonding-conductor reading exceeds the calculated value by approximately the resistance of the test leads, what is the most likely test error?",
    options: [
      "Failure to null the test leads",
      "Heavy load on the installation",
      "Higher than normal ambient temperature",
      "Leakage current from computer equipment",
    ],
    answer: "Failure to null the test leads",
    rationales: {
      "Heavy load on the installation":
        "The bonding-continuity test should be made with the installation safely isolated, so load current is not part of the measurement. Previous loading can warm copper and raise its resistance somewhat, but it does not add the fixed resistance of the test leads.",
      "Higher than normal ambient temperature":
        "Copper resistance does rise with temperature, but the question says the excess approximately equals the test-lead resistance. That pattern points to an un-nulled lead offset rather than a temperature effect.",
      "Leakage current from computer equipment":
        "Connected equipment leakage is relevant to energized protective-conductor currents, not to a correctly isolated direct low-resistance bonding test. It should not be flowing through the measurement path.",
    },
    sourceUrls: [
      "https://webstore.iec.ch/en/publication/71891",
      "https://webstore.iec.ch/en/publication/60894",
    ],
  },
  {
    prompt:
      "Questions 20 to 23 apply to the following scenario. An earth fault loop impedance test is to be carried out on a radial circuit to the local isolator, as shown in figure 4. What must the inspector confirm before the test can be undertaken?",
    options: [
      "The cpc and all other earthing and bonding is connected",
      "The cpc is connected and all other earthing and bonding disconnected",
      "The cpc is connected to MET and the main protective bonding is disconnected",
      "The cpc is disconnected from the MET and the main protective bonding is disconnected",
    ],
    answer: "The cpc and all other earthing and bonding is connected",
    rationales: {
      "The cpc is connected and all other earthing and bonding disconnected":
        "Removing earthing or bonding can create hazardous touch voltages while the installation is energized for the loop test. Parallel paths may affect interpretation, but protective connections must not be casually defeated for a circuit Zs measurement.",
      "The cpc is connected to MET and the main protective bonding is disconnected":
        "Opening main bonding during live testing removes an important equipotential safety measure. The installation should be in its normal protective configuration when its in-service fault loop is assessed.",
      "The cpc is disconnected from the MET and the main protective bonding is disconnected":
        "This breaks the designed protective path and can leave exposed-conductive-parts unearthed. A line-to-earth loop test then becomes both unsafe and incapable of verifying the circuit's normal protection.",
    },
    sourceUrls: [
      "https://webstore.iec.ch/en/publication/60893",
      "https://www.hse.gov.uk/pubns/priced/hsg85.pdf",
    ],
  },
  {
    prompt:
      "Subject to a documented test plan and live-testing risk controls, which fact can explain an inspector recording a Zs test before insulation-resistance testing during a periodic assessment?",
    options: [
      "Because the installation is already energised and in service",
      "Dead tests are not required at a periodic inspection and test",
      "The test will confirm there is no degradation of the insulation",
      "To maximise inconvenience for the users of the installation",
    ],
    answer: "Because the installation is already energised and in service",
    rationales: {
      "Dead tests are not required at a periodic inspection and test":
        "Periodic verification can require continuity and insulation-resistance measurements according to the agreed extent and condition encountered. Being an existing installation does not remove the need for relevant dead tests.",
      "The test will confirm there is no degradation of the insulation":
        "A loop result assesses the impedance of an energized fault path. It cannot measure leakage through insulation between live conductors or from live conductors to earth.",
      "To maximise inconvenience for the users of the installation":
        "Test planning should minimize disruption while obtaining sufficient safety evidence. Deliberately increasing inconvenience is neither a technical reason nor a safe inspection principle.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/jp2fl3ia/bs7671_eicr_a4.pdf",
      "https://www.hse.gov.uk/pubns/priced/hsg85.pdf",
    ],
  },
  {
    prompt:
      "Questions 20 to 23 apply to the following scenario. An earth fault loop impedance test is to be carried out on a radial circuit to the local isolator, as shown in figure 4. Why do the test leads used for this test have to comply with GS 38?",
    options: [
      "GS 38 is a statutory document",
      "Leads to GS 38 are required for all tests",
      "The test is at a voltage above 50 V AC",
      "To ensure the test results are accurate",
    ],
    answer: "The test is at a voltage above 50 V AC",
    rationales: {
      "GS 38 is a statutory document":
        "This is HSE guidance rather than an Act or statutory instrument. Following it is a recognized way to control test-equipment risks and support compliance with the Electricity at Work Regulations.",
      "Leads to GS 38 are required for all tests":
        "The guidance addresses work on low-voltage systems where electrical danger can arise, especially live measurements. It is not a blanket explanation based solely on an activity being called a test.",
      "To ensure the test results are accurate":
        "Probe insulation, finger barriers, limited exposed metal and suitable fusing primarily protect the user and installation. Measurement accuracy is governed by the instrument specification, condition and verification checks.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/pubns/books/gs38.htm",
      "https://www.hse.gov.uk/pubns/priced/gs38.pdf",
    ],
  },
  {
    prompt:
      "Where parallel earth paths have been ruled out, why can a reliable Zs result at the end of this radial circuit provide evidence of cpc continuity?",
    options: [
      "Continuity can be proved during insulation resistance testing",
      "Dead tests are not required at a periodic inspection and test",
      "Earth fault loop impedance can confirm continuity of cpc",
      "Reduces the time taken for the periodic inspection",
    ],
    answer: "Earth fault loop impedance can confirm continuity of cpc",
    rationales: {
      "Continuity can be proved during insulation resistance testing":
        "Insulation testing looks for a high resistance between parts that should be separated. It does not verify a low-resistance protective path between an exposed-conductive-part and the MET.",
      "Dead tests are not required at a periodic inspection and test":
        "Relevant dead tests remain part of periodic verification where needed to determine safety. The inspector selects methods from the agreed scope and evidence available rather than excluding a whole category.",
      "Reduces the time taken for the periodic inspection":
        "Efficiency alone cannot justify omitting safety evidence. A method is acceptable only if it actually proves the required protective path with sufficient confidence.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
      "https://electrical.theiet.org/media/2218/bs_7671_2018-model_forms-all.pdf",
    ],
  },
  {
    prompt:
      "A distribution circuit is protected by a BS 88-3 fuse rated 32 A. What is the maximum acceptable measured earth fault loop impedance for this circuit?",
    options: ["1.28 Ω", "1.60 Ω", "1.70 Ω", "1.92 Ω"],
    answer: "1.28 Ω",
    rationales: {
      "1.60 Ω":
        "This is the BS 7671 tabulated maximum at the assumed conductor operating temperature, not the usual ambient-temperature measured limit. Applying the 0.8 measurement factor produces the lower keyed value.",
      "1.70 Ω":
        "This already exceeds the unadjusted tabulated maximum for the stated device and disconnection condition. It therefore cannot demonstrate operation within the required time.",
      "1.92 Ω":
        "This value is higher still and would produce less earth-fault current for a given supply voltage. A slower fuse response cannot be accepted by increasing the permitted loop impedance.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2024/100-may-2024/why-are-the-values-of-maximum-earth-fault-loop-impedance-different/",
      "https://shop.theiet.org/guidance-note-3-inspection-testing-10th-edition",
    ],
  },
  {
    prompt:
      "What is confirmed by an earth fault loop impedance test on a radial power circuit?",
    options: [
      "Automatic disconnection of supply will be achieved in the event of a fault",
      "Fault protection is provided for the whole installation",
      "The circuit breaker can disconnect the maximum prospective fault current",
      "The line and cpc conductors are the right csa",
    ],
    answer:
      "Automatic disconnection of supply will be achieved in the event of a fault",
    rationales: {
      "Fault protection is provided for the whole installation":
        "A result at one radial circuit applies to that path and protective device. Other circuits can have different lengths, conductor sizes, connections and protection and must be assessed from their own evidence.",
      "The circuit breaker can disconnect the maximum prospective fault current":
        "Breaking-capacity adequacy is checked by comparing the device rating with prospective fault current. Loop impedance instead establishes whether enough earth-fault current will flow to operate the device within the required time.",
      "The line and cpc conductors are the right csa":
        "An acceptable result can support the effectiveness of the completed path but does not identify the physical conductor sizes. Cross-sectional area is confirmed by inspection, markings and design information.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
      "https://webstore.iec.ch/en/publication/60893",
    ],
  },
  {
    prompt:
      "Questions 26 to 29 relate to the following scenario Voltage drop of a single-phase distribution circuit supplying a power distribution board in a remote building is to be verified as part of the periodic inspection and testing within a workshop complex. The installation forms part of a public 400/230 V TN-S system. The circuit has a measured R1+Rn value of 0.15 Ω and an Ib of 60 A. The circuit protective device has an In of 80 A, see Figure 5. What is the maximum acceptable voltage drop for this distribution circuit if the highest circuit voltage drop on DB-3B is 5.0 V?",
    options: ["1.5 V", "11.5 V", "6.5 V", "6.9 V"],
    answer: "6.5 V",
    rationales: {
      "1.5 V":
        "This treats the remaining allowance as though the total permitted drop were only 6.5 V. For a non-lighting load on the stated public supply, the recommended origin-to-load allowance is 5% of 230 V.",
      "11.5 V":
        "This is the complete recommended drop from the installation origin to the final load point. The downstream final circuit already accounts for 5.0 V, so the entire amount is not available to the distribution circuit.",
      "6.9 V":
        "This is 3% of 230 V, the usual origin-to-load recommendation for lighting. The scenario identifies a power distribution board, for which the stated non-lighting allowance and the downstream drop must be used.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2023/96-july-2023/how-voltage-drop-can-affect-ev-charging-point-open-pen-detection-devices/",
    ],
  },
  {
    prompt:
      "For conductors of the same material at the same operating temperature, which two geometrical cable characteristics primarily determine voltage drop?",
    options: [
      "Ambient temperature and csa",
      "Length and cross-sectional area",
      "Length and type of insulation",
      "Type of insulation and room temperature",
    ],
    answer: "Length and cross-sectional area",
    rationales: {
      "Ambient temperature and csa":
        "Cross-sectional area matters, but this pair omits route length, which directly multiplies conductor resistance. Temperature has been fixed by the question so the geometrical comparison is unambiguous.",
      "Length and type of insulation":
        "Length directly affects resistance, while insulation type influences permitted operating temperature only indirectly. The conductor's cross-sectional area has the direct inverse relationship required by the question.",
      "Type of insulation and room temperature":
        "Both can affect allowable operating conditions, but neither states how much conductor resistance is placed in the current path. Omitting both length and area misses the principal geometric factors.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2023/96-july-2023/how-voltage-drop-can-affect-ev-charging-point-open-pen-detection-devices/",
      "https://webstore.iec.ch/en/publication/71891",
    ],
  },
  {
    prompt:
      "Using the measured R1+Rn value of 0.15 Ω directly, without a temperature correction, what voltage drop is indicated at a design current of 60 A?",
    options: ["10.8 V", "3.8 V", "7.2 V", "9 V"],
    answer: "9 V",
    rationales: {
      "10.8 V":
        "This would require a current of 72 A through the stated measured resistance. The scenario gives a 60 A design current for the load calculation.",
      "3.8 V":
        "This corresponds to only about 25 A and leaves most of the stated load current out of the calculation. Voltage drop is the product of the full design current and the measured line-plus-neutral resistance.",
      "7.2 V":
        "This is the result of using 48 A rather than the stated current. The protective-device rating does not create an 80% multiplier for this calculation.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2023/96-july-2023/how-voltage-drop-can-affect-ev-charging-point-open-pen-detection-devices/",
    ],
  },
  {
    prompt:
      "Voltage drop of a single-phase distribution circuit supplying a power distribution board in a remote building is to be verified as part of the periodic inspection and testing within a workshop complex. The installation forms part of a public 400/230 V TN-S system. The circuit has a measured R1+Rn value of 0.15 Ω and an Ib of 60 A. The circuit protective device has an In of 80 A, see Figure 5. Why is the test to confirm voltage drop carried out?",
    options: [
      "To confirm correct operation of the protective device",
      "To confirm the cable operates at its maximum temperature",
      "To confirm the circuit will not be overloaded",
      "To confirm the circuits function as they are intended",
    ],
    answer: "To confirm the circuits function as they are intended",
    rationales: {
      "To confirm correct operation of the protective device":
        "Protective-device operation under earth-fault conditions is verified using loop impedance or RCD testing, and breaking capacity is checked against prospective fault current. Normal-load voltage loss does not establish either result.",
      "To confirm the cable operates at its maximum temperature":
        "The cable should remain within its permitted temperature, not be driven deliberately to the maximum. Voltage drop can be influenced by temperature but does not measure conductor temperature.",
      "To confirm the circuit will not be overloaded":
        "Overload protection is established from design current, protective-device rating, conductor capacity and device characteristics. A satisfactory utilization voltage does not prove those current-coordination conditions.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2023/96-july-2023/how-voltage-drop-can-affect-ev-charging-point-open-pen-detection-devices/",
    ],
  },
  {
    prompt:
      "Questions 30 to 34 relate to the following scenario. Testing of the RCDs is to be undertaken on the installation which forms part of a TT system, as shown in Figure 6. What is confirmed by testing the 100 mA RCD?",
    options: [
      "That additional protection is provided for the installation",
      "That fault protection is provided for the installation",
      "The RCD can disconnect the short circuit current",
      "The RCD can provide overload protection",
    ],
    answer: "That fault protection is provided for the installation",
    rationales: {
      "That additional protection is provided for the installation":
        "Additional protection for persons requires a rated residual operating current not exceeding 30 mA. The upstream device shown has a higher sensitivity threshold and is being relied on for TT fault protection.",
      "The RCD can disconnect the short circuit current":
        "An RCCB responds to residual imbalance and does not provide line-to-neutral short-circuit breaking protection by itself. A coordinated fuse or circuit-breaker is still required for overcurrent.",
      "The RCD can provide overload protection":
        "Load current flowing out on line and back on neutral is balanced, so it does not cause residual operation. Overload protection must come from an overcurrent protective device or an RCBO that combines both functions.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2021/87-september-2021/tt-earthing-considerations/",
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
    ],
  },
  {
    prompt:
      "Questions 30 to 34 relate to the following scenario. Testing of the RCDs is to be undertaken on the installation which forms part of a TT system, as shown in Figure 6. What must be agreed with the users of the installation before the test of the 100 mA RCD can be carried out?",
    options: [
      "The earthing conductor can be disconnected",
      "The evacuation of all personnel from the building",
      "The installation can be completely isolated",
      "The test of protective bonding continuity is completed first",
    ],
    answer: "The installation can be completely isolated",
    rationales: {
      "The earthing conductor can be disconnected":
        "Removing the earthing conductor defeats the installation's protective connection and is not required for an RCD operating-time test. The electrode and MET arrangement must remain effective while the installation is energized for the test.",
      "The evacuation of all personnel from the building":
        "Users must be warned and affected equipment shut down safely, but a routine origin RCD test does not inherently require evacuating the premises. The essential agreement concerns interruption of the entire downstream supply.",
      "The test of protective bonding continuity is completed first":
        "Bonding evidence may be gathered as part of the inspection, but its sequence does not obtain permission to interrupt power. Operational coordination is needed because tripping the origin device disconnects every supplied circuit.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/pubns/priced/hsg85.pdf",
      "https://webstore.iec.ch/en/publication/60896",
    ],
  },
  {
    prompt:
      "Testing of the RCDs is to be undertaken on the installation which forms part of a TT system, as shown in Figure 6. What is the maximum test current to be applied by the RCD tester, when verifying that the RCD at the origin meets disconnection times?",
    options: ["100 mA", "300 mA", "400 mA", "50 mA"],
    answer: "100 mA",
    rationales: {
      "300 mA":
        "This is three times the device's rated residual operating current and is not the prescribed verification setting. Current BS 7671 verification uses an AC test at IΔn.",
      "400 mA":
        "This confuses a possible time expressed in milliseconds with a residual current expressed in milliamperes. Applying four times the rating would not be the standard effectiveness test.",
      "50 mA":
        "Half the rated residual current may be used as an optional no-trip diagnostic, but it cannot prove operation at the device rating. The required disconnection-time result is taken at IΔn.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
      "https://webstore.iec.ch/en/publication/60896",
    ],
  },
  {
    prompt:
      "During an optional legacy 5 IΔn diagnostic test on the downstream 30 mA RCD, the upstream 100 mA RCD trips first. What is the most likely coordination problem?",
    options: [
      "The 100 mA RCD has no time delay",
      "The 30 mA RCD is too sensitive",
      "The test current is too low",
      "The test voltage is too high",
    ],
    answer: "The 100 mA RCD has no time delay",
    rationales: {
      "The 30 mA RCD is too sensitive":
        "The downstream device is intentionally more sensitive so that it protects its final circuit. Its rating does not explain why the upstream device opened first; the missing discrimination is in the upstream time characteristic.",
      "The test current is too low":
        "Five times the downstream rating is 150 mA, which exceeds the operating threshold of both devices. The problem is competing operation, not insufficient residual current.",
      "The test voltage is too high":
        "An RCD tester controls residual current while operating at the installation voltage. Selectivity between the two devices depends on current and time characteristics, not an excessive applied supply voltage.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/3021/wiring-matters-issue-91-july-2022.pdf",
      "https://webstore.iec.ch/en/publication/60896",
    ],
  },
  {
    prompt:
      "Testing of the 30 mA general non-delay RCD at IΔn gives an operating time of 400 ms. What classification code should the inspector record?",
    options: ["C1", "C2", "C3", "FI"],
    answer: "C2",
    rationales: {
      C1: "A delayed operation is not normally danger present at the instant of inspection, so the most severe code would require additional circumstances such as accessible live parts. It does, however, represent a failed protective-device test.",
      C3: "A 400 ms result exceeds the 300 ms limit at IΔn and confirms that a safety device is not operating correctly. That is potentially dangerous and calls for urgent remedial action, not only an improvement recommendation.",
      FI: "The measured operating time already identifies the deficiency, so further investigation is not needed merely to establish that the test failed. Investigation may help diagnose the device, but the safety observation can be classified now.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
      "https://www.electricalsafetyfirst.org.uk/resources-for-electricians/wiring-regulations-help/",
      "https://www.electricalsafetyfirst.org.uk/media/nhjengmh/best_practice-guide-4_issue-73.pdf",
    ],
  },
  {
    prompt:
      "What is the maximum disconnection time for a 16 A final circuit on a TT installation?",
    options: ["200 ms", "30 ms", "300 ms", "500 ms"],
    answer: "200 ms",
    rationales: {
      "30 ms":
        "This is not a BS 7671 ADS table value for the stated circuit. It is closer to a rapid RCD operating-time concept and should not be substituted for the maximum circuit disconnection requirement.",
      "300 ms":
        "A general non-delay RCD may have a product-standard operating limit at rated residual current of this duration. The TT final-circuit ADS requirement is stricter and is a separate criterion.",
      "500 ms":
        "Half a second exceeds the maximum for a TT final circuit not exceeding 32 A. The higher impedance of the TT earth path makes prompt automatic disconnection particularly important.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2021/87-september-2021/tt-earthing-considerations/",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/webinar-questions-and-answers/rcds-selection-types-and-testing-webinar/",
    ],
  },
  {
    prompt:
      "What is the purpose of carrying out a test to determine the prospective fault current at the origin of a three-phase commercial installation?",
    options: [
      "The earth fault loop path can carry the fault current",
      "The overcurrent devices are rated lower than the fault current",
      "The overcurrent devices will disconnect the earth fault current",
      "The protective devices can safely disconnect the fault current",
    ],
    answer: "The protective devices can safely disconnect the fault current",
    rationales: {
      "The earth fault loop path can carry the fault current":
        "A PFC measurement establishes available current, not the thermal or mechanical withstand of every conductor in its path. Conductor adequacy needs design and protective-coordination checks.",
      "The overcurrent devices are rated lower than the fault current":
        "The device's normal current rating can be lower than a fault current, but its rated short-circuit breaking capacity must not be. Merely proving that the prospective current is larger than the load rating says nothing about safe interruption.",
      "The overcurrent devices will disconnect the earth fault current":
        "Earth-fault disconnection time is assessed using the fault-loop impedance and device characteristic. At the origin, the PFC result is principally compared with the protective equipment's breaking or withstand rating.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
      "https://webstore.iec.ch/en/publication/66277",
    ],
  },
  {
    prompt:
      "If parallel earth paths have been excluded, which existing test result can provide evidence of cpc continuity on this radial circuit during periodic inspection?",
    options: [
      "Continuity of cpc can be confirmed during a test of Zs",
      "Continuity tests are only necessary if the circuit is in flat profile cable",
      "The circuit is installed in PVC conduit and so less likely to be damaged",
      "The circuit is only five years old so continuity testing is not required",
    ],
    answer: "Continuity of cpc can be confirmed during a test of Zs",
    rationales: {
      "Continuity tests are only necessary if the circuit is in flat profile cable":
        "Protective-conductor continuity is required regardless of whether conductors are singles, flat cable, armoured cable or another wiring system. Cable construction affects the method, not the safety objective.",
      "The circuit is installed in PVC conduit and so less likely to be damaged":
        "Conduit offers mechanical protection but does not prevent loose terminals, poor joints or conductor damage. Installation method alone is not evidence of an intact earth path.",
      "The circuit is only five years old so continuity testing is not required":
        "Age does not exempt a circuit from suitable verification. The extent of testing is based on condition, use, records, alterations and the reliability of other evidence.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/jp2fl3ia/bs7671_eicr_a4.pdf",
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
    ],
  },
  {
    prompt:
      "Insulation resistance testing has been carried out on a six-way lighting distribution board and the individual circuit results are shown in Table 1. What is the value of insulation resistance between Live and Earth for the DB with all the lighting circuits connected?",
    options: ["133 MΩ", "18 MΩ", "200 MΩ", "50 MΩ"],
    answer: "18 MΩ",
    rationales: {
      "133 MΩ":
        "The combined leakage paths are in parallel, so their reciprocals must be added. This proposed result is above the lowest individual readings and cannot be the total of all connected circuits.",
      "200 MΩ":
        "This is the individual result for Lights 1, not the distribution-board result. Adding four more insulation leakage paths in parallel lowers the aggregate resistance substantially.",
      "50 MΩ":
        "This is the reading for each of two individual circuits. The combined result must be lower than the lowest branch because every connected circuit supplies another parallel leakage path.",
    },
    sourceUrls: [
      "https://www.megger.com/en-gb/et-online/july-2021/testing-parallel-resistances",
      "https://webstore.iec.ch/en/publication/60892",
    ],
  },
  {
    prompt:
      "What is the most appropriate classification code to be recorded if the insulation resistance for a circuit is measured at 0.90 MΩ between live conductors and Earth?",
    options: ["C1", "C2", "C3", "FI"],
    answer: "C2",
    rationales: {
      C1: "A subminimum insulation result is potentially dangerous but does not by itself prove that an accessible part is live at the time of inspection. Immediate danger would require evidence beyond the numerical result supplied.",
      C3: "The measured value is below the 1 MΩ minimum for the usual 500 V DC test, not merely a recommendation to improve an otherwise acceptable installation. Urgent remedial action is warranted.",
      FI: "Further investigation is used when the nature or extent of a possible danger is still unknown. Here the below-minimum insulation measurement has already established a potentially dangerous defect that can be coded C2.",
    },
    sourceUrls: [
      "https://www.electricalsafetyfirst.org.uk/resources-for-electricians/wiring-regulations-help/",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
    ],
  },
  {
    prompt:
      "When distributor data is unavailable, what typical maximum Ze value is commonly assumed for TN-S design?",
    options: ["0.21 Ω", "0.35 Ω", "0.8 Ω", "21 Ω"],
    answer: "0.8 Ω",
    rationales: {
      "0.21 Ω":
        "This is not the recognized typical planning value for the stated earthing arrangement. A particular measured supply may be this low, but it is not the standard figure associated with TN-S.",
      "0.35 Ω":
        "This is the typical value associated with TN-C-S arrangements. The separate metallic earth path of the system in the stem is assigned a different planning value.",
      "21 Ω":
        "This is the typical external component quoted for a TT supply and excludes the consumer's earth electrode resistance. It is far above the usual TN-S figure.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/earthing-and-bonding-faqs/",
      "https://electrical.theiet.org/wiring-matters/years/2018/72-september-2018/earth-fault-loop-impedance-revision-of-ena-engineering-recommendation-p23/",
    ],
  },
] as const;
