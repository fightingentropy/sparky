// Per-option feedback for the imported Initial Verification and Fundamental
// homework papers, checked against IET Guidance Note 3 (9th edition).
export const initialVerificationHomework = [
  {
    prompt:
      "Which system has all exposed conductive part of an installation connected to an earth electrode independent of the source of earth?",
    options: [
      "TN-S",
      "TN-C",
      "TT",
      "TN-C-S",
    ],
    answer: "TT",
    rationales: {
      "TN-S":
        "TN-S uses a separate metallic protective conductor, such as the cable sheath, run back from the source to the installation, so the earth is provided by the supplier, not an independent electrode.",
      "TN-C":
        "TN-C combines neutral and protective functions in a single PEN conductor throughout the system; it is not permitted in consumer installations and involves no independent electrode.",
      "TN-C-S":
        "TN-C-S (PME) gives the installation an earth terminal connected to the supplier's combined PEN conductor, so exposed-conductive-parts are earthed via the network, not a local electrode.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2021/87-september-2021/tt-earthing-considerations/",
    ],
  },
  {
    prompt:
      "A radial circuit is 45m long and wired in 6/2.5mm squared conductors. What is the expected value of R1 + R2 for this circuit at 20°C?",
    options: [
      "0.57 Ohms",
      "0.62 Ohms",
      "0.72 Ohms",
      "0.47 Ohms",
    ],
    answer: "0.47 Ohms",
    rationales: {
      "0.57 Ohms":
        "0.57 Ω is roughly 0.472 Ω multiplied by the Table B3 factor of 1.20 for 70 °C conductors, which is a maximum operating temperature figure, not the 20 °C value asked for.",
      "0.62 Ohms":
        "0.62 Ω would need about 13.8 mΩ/m, which matches no 6/2.5 mm² entry in Table B1; that cable combination is listed at 10.49 mΩ/m.",
      "0.72 Ohms":
        "0.72 Ω corresponds to around 16 mΩ/m, close to a 4/1.5 mm² cable (16.71 mΩ/m), so it reflects a smaller cable than the 6/2.5 mm² specified.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2024/100-may-2024/why-are-the-values-of-maximum-earth-fault-loop-impedance-different/",
    ],
  },
  {
    prompt:
      "It is required to record the value of prospective fault current of a three phase supply by measurement. An acceptable and cautious way to do this is to measure the single phase value and",
    options: [
      "Multiply by 1.73",
      "Divide by two",
      "Multiply by two",
      "Divide by 1.73",
    ],
    answer: "Multiply by two",
    rationales: {
      "Multiply by 1.73":
        "Multiplying by 1.73 (√3) converts line-to-neutral voltage to line-to-line voltage; it is not the GN3 rule of thumb for estimating three-phase fault current.",
      "Divide by two":
        "Halving the single-phase reading would understate the three-phase fault level, risking selection of a device whose breaking capacity is too low.",
      "Divide by 1.73":
        "Dividing by 1.73 reduces the value, giving an unsafe underestimate; GN3's more accurate method divides a measured line-to-line current by 0.87, not 1.73.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/pubns/priced/hsr25.pdf",
    ],
  },
  {
    prompt:
      "What is the test voltage used during an insulation resistance test of a SELV circuit?",
    options: [
      "500V a.c",
      "250V a.c",
      "250V d.c",
      "500V d.c",
    ],
    answer: "250V d.c",
    rationales: {
      "500V a.c":
        "Insulation resistance testers apply DC, not AC; 500 V DC is the test voltage for circuits up to 500 V other than SELV and PELV, including FELV.",
      "250V a.c":
        "The 250 V figure is correct for SELV, but the test is applied as direct current; an AC test voltage would be affected by circuit capacitance and is not used.",
      "500V d.c":
        "500 V DC applies to ordinary LV circuits up to 500 V, or to SELV only where its conductors share a multicore cable with LV circuits.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2020/81-july-2020/history-of-insulation-resistance-testing/",
    ],
  },
  {
    prompt:
      "When carrying out testing in accordance with IET Guidance Note 3 what action should be taken if unsatisfactory results are obtained?",
    options: [
      "Carry on with the testing and see if any other tests fail.",
      "Any defects must be made good and inspected and tested again",
      "Record the unsatisfactory results on the Schedule of Test Results and highlight to the client on hand over.",
      "Make a note of the unsatisfactory results when issuing the Electrical Installation Certificate.",
    ],
    answer: "Any defects must be made good and inspected and tested again",
    rationales: {
      "Carry on with the testing and see if any other tests fail.":
        "Continuing regardless can be unsafe, since later tests often depend on earlier ones (for example, live tests rely on proven continuity and insulation).",
      "Record the unsatisfactory results on the Schedule of Test Results and highlight to the client on hand over.":
        "Recording failures and pointing them out at handover is not acceptable for initial verification; results must meet the criteria before certification.",
      "Make a note of the unsatisfactory results when issuing the Electrical Installation Certificate.":
        "An EIC declares the new work complies with BS 7671, so it cannot simply list unsatisfactory results; those defects must be corrected before it is issued.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/model-forms/",
    ],
  },
  {
    prompt:
      "A ring final circuit is wired in 2.5/1.5mm squared twin and CPC cable. From step 1 of the est, the end-to-end r1 is measured at 0.05 Ohms. What value is the end-to-end r2 expected to be?",
    options: [
      "0.952 Ohms",
      "0.125 Ohms",
      "0.399 Ohms",
      "0.0835 Ohms",
    ],
    answer: "0.0835 Ohms",
    rationales: {
      "0.952 Ohms":
        "0.952 Ω is about nineteen times r1, far above the 1.67 ratio for 2.5/1.5 mm² cable, and would point to a poor termination rather than an expected reading.",
      "0.125 Ohms":
        "0.125 Ω is r1 multiplied by 2.5, the line csa alone, rather than by the csa ratio of 2.5/1.5.",
      "0.399 Ohms":
        "0.399 Ω is roughly eight times r1, which no csa ratio for a 2.5/1.5 mm² cable can produce; a reading like this would need investigating.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2022/89-march-2022/resistance-readings-for-step-3-of-the-ring-final-circuit-test/",
    ],
  },
  {
    prompt:
      "Which documents must accompany an Electrical Installation Certificate?",
    options: [
      "Schedule of Test Results and Schedule of Circuit Details",
      "Electrical Installation Condition Report and Schedule of Inspections",
      "Schedule of Inspections and Electrical Installation Minor Works Certificate",
      "Schedule of Test Results and Electrical Installation Minor Works Certificate",
    ],
    answer: "Schedule of Test Results and Schedule of Circuit Details",
    rationales: {
      "Electrical Installation Condition Report and Schedule of Inspections":
        "An EICR is used for periodic inspection of an existing installation; it is a separate report and never forms part of an EIC for new work.",
      "Schedule of Inspections and Electrical Installation Minor Works Certificate":
        "A Minor Works Certificate is an alternative to an EIC for additions without a new circuit, so it would not be attached to an EIC.",
      "Schedule of Test Results and Electrical Installation Minor Works Certificate":
        "The test results schedule is required, but a Minor Works Certificate is a standalone document used instead of an EIC for small alterations.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/tqxkkscw/bs7671_eic_a4.pdf",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/model-forms/",
    ],
  },
  {
    prompt:
      "Circuits operating at different voltage bands within the same enclosure are segregated to",
    options: [
      "Increase the resistance of the highest voltage present",
      "Reduce the resistance of the lowest voltage present",
      "Ensure that Zs of each circuit will comply with BS7671",
      "Avoid mutual detrimental influence",
    ],
    answer: "Avoid mutual detrimental influence",
    rationales: {
      "Increase the resistance of the highest voltage present":
        "Segregation does not change any conductor resistance; it is a physical separation or partition between circuits of different voltage bands.",
      "Reduce the resistance of the lowest voltage present":
        "Conductor resistance is set by csa, length and material, not by separating cables, so segregation has no effect on the resistance of lower-voltage circuits.",
      "Ensure that Zs of each circuit will comply with BS7671":
        "Zs depends on Ze plus R1 + R2 of each circuit and is verified by loop impedance testing; segregating voltage bands has no bearing on it.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
    ],
  },
  {
    prompt:
      "When checking an instrument for use, which british standard document should be consulted for conformity?",
    options: [
      "BS EN 61010",
      "BS EN 60898",
      "BS EN 61008",
      "BS EN 61009",
    ],
    answer: "BS EN 61010",
    rationales: {
      "BS EN 60898":
        "BS EN 60898 is the product standard for miniature circuit-breakers providing overcurrent protection; it says nothing about the safety of measuring instruments.",
      "BS EN 61008":
        "BS EN 61008 covers RCCBs, residual current circuit-breakers without integral overcurrent protection, which are protective devices rather than test equipment.",
      "BS EN 61009":
        "BS EN 61009 is the standard for RCBOs, which combine residual current and overcurrent protection; GN3 lists it with protective devices, not instruments.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/1696/ongoing-accuracy-of-test-instruments.pdf",
    ],
  },
  {
    prompt:
      "What is the source to check values of Zs?",
    options: [
      "GS38",
      "BS1361",
      "BS88",
      "BS7671",
    ],
    answer: "BS7671",
    rationales: {
      GS38:
        "GS38 is HSE guidance on safe electrical test equipment, such as fused, shrouded probes and leads; it contains no Zs limits for circuits.",
      BS1361:
        "BS 1361 is a withdrawn product standard for cartridge fuses still found in older cut-outs; it describes the fuse, not the permitted Zs for a circuit.",
      BS88:
        "BS 88 is a fuse product series (BS 88-2, BS 88-3); Zs limits for circuits protected by these fuses are tabulated in BS 7671 and GN3 Appendix A, not in BS 88.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2024/100-may-2024/why-are-the-values-of-maximum-earth-fault-loop-impedance-different/",
    ],
  },
  {
    prompt:
      "What signatories are required to complete an Electrical Installation Certificate of a new build?",
    options: [
      "Installer, client, contractor",
      "Contractor, designer, NICEIC representative",
      "Designer, constructor, inspector",
      "Designer, client, contractor",
    ],
    answer: "Designer, constructor, inspector",
    rationales: {
      "Installer, client, contractor":
        "The client receives an EIC but does not sign it, and 'installer' and 'contractor' describe the same construction role, leaving inspection and testing unsigned.",
      "Contractor, designer, NICEIC representative":
        "No scheme body such as NICEIC signs an EIC; certification rests with those who designed, built and verified the work, and the inspector's signature is missing here.",
      "Designer, client, contractor":
        "This set includes the client, who is the recipient of the certificate, and omits the person responsible for inspection and testing of the work.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/tqxkkscw/bs7671_eic_a4.pdf",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/model-forms/",
    ],
  },
  {
    prompt:
      "Which is not part of the procedure for testing insulation resistance?",
    options: [
      "Testing between live conductors and protective conductor.",
      "The protective conductor remains connected to the earthing arrangement",
      "Testing between live conductors",
      "The protective conductor is disconnected from the earthing arrangement",
    ],
    answer: "The protective conductor is disconnected from the earthing arrangement",
    rationales: {
      "Testing between live conductors and protective conductor.":
        "Measuring from live conductors to the protective conductor is one of the two required measurements, and line and neutral may be linked together for it.",
      "The protective conductor remains connected to the earthing arrangement":
        "Keeping the protective conductor connected to the earthing arrangement is specifically required; GN3 stresses testing armouring with it connected to earth.",
      "Testing between live conductors":
        "Testing between all live conductors, such as L-N or L1-L2-L3, is the second measurement BS 7671 requires alongside the test to the protective conductor.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2020/81-july-2020/history-of-insulation-resistance-testing/",
    ],
  },
  {
    prompt:
      "A rotating disc type and an indicator lamp type are the main types of which instrument?",
    options: [
      "Clamp ammeter",
      "Voltage indicator",
      "Phase sequence tester",
      "RCD tester",
    ],
    answer: "Phase sequence tester",
    rationales: {
      "Clamp ammeter":
        "A clamp ammeter measures current by enclosing a conductor in its jaws; GN3 uses it for earth leakage and neutral current checks, not phase order.",
      "Voltage indicator":
        "A voltage indicator, such as a two-pole tester, proves presence or absence of voltage; some include a rotation function, but disc and lamp types define the rotation tester.",
      "RCD tester":
        "An RCD tester injects a set residual current, such as 1×IΔn, and times the trip; it is built to BS EN 61557-6 and has no disc or sequence lamps.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
    ],
  },
  {
    prompt:
      "Three circuits are tested separately for insulation resistance and the results are 100M Ohms, 50M Ohms, 40M Ohms. What will the overall insulation resistance be if they are tested together?",
    options: [
      "10.06M Ohms",
      "21.14M Ohms",
      "18.18M Ohms",
      "11.34M Ohms",
    ],
    answer: "18.18M Ohms",
    rationales: {
      "10.06M Ohms":
        "10.06 MΩ would need a combined conductance of about 0.099 per MΩ, almost double the true 0.055 sum, so it understates the parallel result.",
      "21.14M Ohms":
        "21.14 MΩ corresponds to a conductance of about 0.047 per MΩ, less than the 0.055 total of the three branches, so this figure is too high.",
      "11.34M Ohms":
        "11.34 MΩ implies a conductance near 0.088 per MΩ, whereas the three circuits add up to only 0.055, so this value is lower than the true combined resistance.",
    },
    sourceUrls: [
      "https://www.megger.com/en-gb/et-online/july-2021/testing-parallel-resistances",
    ],
  },
  {
    prompt:
      "On which document is maximum demand recorded?",
    options: [
      "Schedule of inspections",
      "Electrical Installation Certificate",
      "Schedule of test results",
      "Minor Electrical Installation Works Certificate",
    ],
    answer: "Electrical Installation Certificate",
    rationales: {
      "Schedule of inspections":
        "The Schedule of Inspections is a tick list of items checked, such as cable routing, bonding and enclosure protection; it has no field for installation load.",
      "Schedule of test results":
        "The Schedule of Test Results records circuit-by-circuit readings such as R1 + R2, insulation resistance, Zs and RCD times, not the overall installation demand.",
      "Minor Electrical Installation Works Certificate":
        "The MEIWC covers small additions to an existing circuit, like an extra socket-outlet; it records that circuit plus the earthing and bonding arrangements, but has no maximum demand entry.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/tqxkkscw/bs7671_eic_a4.pdf",
      "https://electrical.theiet.org/media/f0hlqxq1/bs7671_meiwc_a4.pdf",
    ],
  },
  {
    prompt:
      "The purpose of an electrical installation certificate is to ensure that the installation conforms to",
    options: [
      "GS38",
      "BS7671",
      "Guidance Note 3",
      "The Health and Safety at Work Act",
    ],
    answer: "BS7671",
    rationales: {
      GS38:
        "GS38 is HSE guidance on choosing and using safe test probes, leads and lamps; an EIC does not certify an installation against it.",
      "Guidance Note 3":
        "Guidance Note 3 is IET guidance explaining how to inspect and test; it supports BS 7671 but is not the standard an installation is certified against.",
      "The Health and Safety at Work Act":
        "The Health and Safety at Work etc. Act 1974 is general workplace safety law requiring information to be available; it sets no wiring rules for the EIC to certify.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/tqxkkscw/bs7671_eic_a4.pdf",
    ],
  },
  {
    prompt:
      "Which of these is not a precaution to take before carrying out an insulation resistance test?",
    options: [
      "Disconnect the earthing lead to the main earth terminal",
      "Disconnect neons",
      "Remove all loads",
      "Remove dimmer switches",
    ],
    answer: "Disconnect the earthing lead to the main earth terminal",
    rationales: {
      "Disconnect neons":
        "Neons and other pilot or indicator lamps must be disconnected before the test, otherwise they bridge the conductors and give a falsely low insulation reading.",
      "Remove all loads":
        "Lamps and current-using equipment are removed or disconnected so the test voltage is applied to the wiring alone; where that is impracticable, the local switches are left open.",
      "Remove dimmer switches":
        "Dimmers are voltage-sensitive electronic devices that a 500 V DC test voltage could damage, so they must be disconnected or bypassed before testing.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
    ],
  },
  {
    prompt:
      "During which test will two temporary test spikes be used?",
    options: [
      "Earth fault loop impedance test",
      "Insulation resistance test of floors",
      "Insulation resistance to earth",
      "Earth electrode resistance test",
    ],
    answer: "Earth electrode resistance test",
    rationales: {
      "Earth fault loop impedance test":
        "An EFLI test is a live measurement made with a loop tester between line and the earthing arrangement, using the supply itself as the test source, so no temporary spikes are driven into the ground.",
      "Insulation resistance test of floors":
        "Floor and wall insulation tests in non-conducting locations use a test electrode, either a tripod or a 250 mm square metal plate pressed onto the surface, not spikes in the ground.",
      "Insulation resistance to earth":
        "Insulation resistance to earth is measured with an insulation resistance tester between the live conductors and the circuit's protective conductor, which stays connected to the MET.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2021/87-september-2021/tt-earthing-considerations/",
    ],
  },
  {
    prompt:
      "Which of these areas is not classified as a special installation or location in accordance with BS7671?",
    options: [
      "An exhibition stand",
      "Kitchen",
      "Bathroom",
      "Floor and ceiling heating system",
    ],
    answer: "Kitchen",
    rationales: {
      "An exhibition stand":
        "Exhibitions, shows and stands are covered by Section 711 of BS 7671, which adds requirements such as RCD protection for the temporary wiring of a stand.",
      Bathroom:
        "Locations containing a bath or shower are Section 701 of BS 7671, with zones, 30 mA RCD protection for all circuits and limits on switches and socket-outlets near the bath.",
      "Floor and ceiling heating system":
        "Heating units embedded in floors or ceilings fall under Section 753 of BS 7671, which requires measures such as RCD protection not exceeding 30 mA for the heating circuits.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/1605/protective-measures-special-installations-or-locations-part-1.pdf",
      "https://electrical.theiet.org/media/1450/section-701.pdf",
    ],
  },
  {
    prompt:
      "The most appropriate human sense for detecting burrs inside a conduit is?",
    options: [
      "Hearing",
      "Sight",
      "Smell",
      "Touch",
    ],
    answer: "Touch",
    rationales: {
      Hearing:
        "Hearing helps pick up arcing, buzzing contactors or humming transformers, but a sharp metal edge inside a conduit makes no sound at all.",
      Sight:
        "Sight is the main inspection sense, yet the inside of a conduit bore is dark and narrow, so a small burr can easily be missed by eye alone.",
      Smell:
        "Smell helps detect overheating insulation or burning components, which signals an existing fault, not a burr left behind when conduit was cut.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
    ],
  },
  {
    prompt:
      "A Primary reason for carrying out safe isolation is to:",
    options: [
      "Keep the cables cool whilst testing",
      "Allow uninsulated tools to be used",
      "Avoid a serious or fatal injury occurring",
      "Avoid damage to the equipment",
    ],
    answer: "Avoid a serious or fatal injury occurring",
    rationales: {
      "Keep the cables cool whilst testing":
        "Isolation has nothing to do with cable temperature; dead tests such as continuity and insulation resistance inject small test currents that cause no meaningful heating.",
      "Allow uninsulated tools to be used":
        "Isolation never justifies uninsulated tools; suitable insulated tools are still advised, for example when removing neutral links where a borrowed neutral could make them live.",
      "Avoid damage to the equipment":
        "Isolation may incidentally protect equipment, but the duty under the Electricity at Work Regulations is to prevent danger and injury to people, not to protect equipment.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/pubns/priced/hsg85.pdf",
      "https://www.hse.gov.uk/pubns/priced/hsr25.pdf",
    ],
  },
  {
    prompt:
      "What is the best action to take if an insulation resistance test fails on an individual radial circuit and a PVC/PVC twin and cpc flat cable has been replaced to remedy the fault?",
    options: [
      "Go back to the beginning and repeat all tests for the installation",
      "Move on to the next test as the new cable will cure the fault.",
      "Re-test insulation resistance test for that circuit and continue to the next test.",
      "Re-inspect and Re-test",
    ],
    answer: "Re-inspect and Re-test",
    rationales: {
      "Go back to the beginning and repeat all tests for the installation":
        "Retesting the whole installation is unnecessary; only the altered circuit is affected by the new cable, so the repeat inspection and tests are confined to that circuit.",
      "Move on to the next test as the new cable will cure the fault.":
        "Assuming new cable cures the fault is unsafe; the replacement may be damaged during fitting or the fault may lie at an accessory or termination that was not changed.",
      "Re-test insulation resistance test for that circuit and continue to the next test.":
        "Repeating only the insulation test leaves the new terminations unchecked, so cpc continuity, R1 + R2 and polarity of the replacement cable would remain unverified.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
    ],
  },
  {
    prompt:
      "Which Provision of the Electricity at Work Regulations relates to safely inspecting electrical systems?",
    options: [
      "Strength and capability of electrical equipment",
      "Adverse or hazardous environments",
      "Connections",
      "Persons to be competent to prevent injury",
    ],
    answer: "Persons to be competent to prevent injury",
    rationales: {
      "Strength and capability of electrical equipment":
        "Regulation 5 covers strength and capability: equipment must withstand the load and fault currents it may carry, a duty about equipment rather than the person inspecting.",
      "Adverse or hazardous environments":
        "Regulation 6 deals with equipment exposed to adverse or hazardous environments such as weather, corrosion, dust or flammable atmospheres, not with the inspector's ability.",
      Connections:
        "Regulation 10 requires every joint and connection to be mechanically and electrically suitable, which is something an inspector checks rather than a duty about inspecting safely.",
    },
    sourceUrls: [
      "https://www.legislation.gov.uk/uksi/1989/635/contents/made",
      "https://www.hse.gov.uk/pubns/priced/hsr25.pdf",
    ],
  },
  {
    prompt:
      "A 3 phase distribution board runs a number of 3 phase motors. A replacement distribution board is fitted and the phase sequence has been wired differently to the original distribution board. What will happen if the installer tries to run one of the 3 phase motors?",
    options: [
      "The motor will run in the opposite direction",
      "The motor will run normally",
      "The protective devices feeding the motor will trip.",
      "The motor will not run at all",
    ],
    answer: "The motor will run in the opposite direction",
    rationales: {
      "The motor will run normally":
        "Normal rotation is kept only if the sequence is unchanged; with two lines interchanged the field reverses, which can damage pumps, fans or conveyors driven by the motor.",
      "The protective devices feeding the motor will trip.":
        "Protective devices respond to overcurrent or earth fault current; a reversed phase sequence creates neither, so the motor draws normal current and the devices stay closed.",
      "The motor will not run at all":
        "The motor still receives all three phases at full voltage, so it starts and develops torque; a lost phase, not a changed sequence, is what stops a three-phase motor starting.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
    ],
  },
  {
    prompt:
      "When carrying out electrical work, what is the main safety implication of failing to carry out isolation?",
    options: [
      "Production will be stopped?",
      "The installer and others may be at risk of coming into contact with live parts.",
      "Other workers will not know what is happening",
      "The time it takes to complete the job will be affected",
    ],
    answer: "The installer and others may be at risk of coming into contact with live parts.",
    rationales: {
      "Production will be stopped?":
        "Lost production is a commercial consequence, and properly isolating a supply often halts production anyway. It is not the safety hazard that results from leaving parts live.",
      "Other workers will not know what is happening":
        "Keeping other workers informed is handled by planning, notices and liaison with premises management. It is not the direct danger created by working on unisolated live parts.",
      "The time it takes to complete the job will be affected":
        "How long a job takes is a scheduling matter. Working without isolation is a safety failure that risks electric shock, whatever its effect on the timetable.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/pubns/priced/hsr25.pdf",
      "https://www.hse.gov.uk/pubns/priced/hsg85.pdf",
    ],
  },
  {
    prompt:
      "Who should retain the original copy of an Electrical Installation Certificate?",
    options: [
      "The inspectors registration body",
      "Local building control",
      "The contractor",
      "The person ordering the work",
    ],
    answer: "The person ordering the work",
    rationales: {
      "The inspectors registration body":
        "A registration scheme may audit or notify an inspector's work, but GN3 directs the original certificate to the client who commissioned the work, not to a scheme operator.",
      "Local building control":
        "Local building control deals with notification under the Building Regulations. GN3 does not name it as the holder of the original EIC and its schedules.",
      "The contractor":
        "The contractor who issues the certificate should keep a duplicate for their own records. The original is handed over to the client.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/model-forms/",
      "https://electrical.theiet.org/media/tqxkkscw/bs7671_eic_a4.pdf",
    ],
  },
  {
    prompt:
      "Which of the following cannot be used for determining or checking prospective fault current?",
    options: [
      "Substitution",
      "Calculation",
      "Measurement",
      "Enquiry",
    ],
    answer: "Substitution",
    rationales: {
      Calculation:
        "Calculation is a recognised method. The designer can work out prospective fault current from supply data and circuit impedances, as Regulation 434.1 expects.",
      Measurement:
        "Measurement is permitted. With the power on, the prospective fault current range of an EFLI tester gives a reading, although GN3 recommends other means where possible.",
      Enquiry:
        "Enquiry is permitted. The distribution network operator can state the maximum prospective fault current at the origin, and GN3 accepts this as a way to establish it.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
    ],
  },
  {
    prompt:
      "When two conductors of different resistances are connected in parallel, the resulting resistance will be",
    options: [
      "Higher than the lowest conductor resistance",
      "Higher than the highest conductor resistance",
      "Lower than the lowest conductor resistance",
      "The same value as the highest conductor resistance",
    ],
    answer: "Lower than the lowest conductor resistance",
    rationales: {
      "Higher than the lowest conductor resistance":
        "Adding a parallel path can only reduce the total. With 2 Ω and 3 Ω in parallel the result is 1.2 Ω, which is below the lower resistance, not above it.",
      "Higher than the highest conductor resistance":
        "A total above the highest resistance describes a series connection, where values add (2 Ω + 3 Ω = 5 Ω). Parallel paths always lower the total.",
      "The same value as the highest conductor resistance":
        "The total could equal one branch only if the other branch were an open circuit with infinite resistance. With two finite paths, the total falls below both.",
    },
    sourceUrls: [
      "https://www.megger.com/en-gb/et-online/july-2021/testing-parallel-resistances",
    ],
  },
  {
    prompt:
      "Fault protection is given by?",
    options: [
      "Presence of an earthing conductor",
      "Obstacles",
      "Barriers or enclosures",
      "Placing out of reach",
    ],
    answer: "Presence of an earthing conductor",
    rationales: {
      Obstacles:
        "Obstacles give basic protection only, preventing unintentional contact with live parts. They are restricted to areas accessible only to skilled or instructed persons.",
      "Barriers or enclosures":
        "Barriers or enclosures provide basic protection by keeping fingers and tools away from live parts in normal service. They do nothing when a fault makes metalwork live.",
      "Placing out of reach":
        "Placing out of reach is a basic-protection measure that relies on distance from live parts. GN3 notes that the distances should increase where long or bulky conducting objects are handled.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/1605/protective-measures-special-installations-or-locations-part-1.pdf",
    ],
  },
  {
    prompt:
      "The test button on an RCD is pressed regularly to check it",
    options: [
      "Will disconnect within its residual operating current",
      "Disconnects within 0.4 seconds",
      "Disconnects within 40ms",
      "Operates mechanically",
    ],
    answer: "Operates mechanically",
    rationales: {
      "Will disconnect within its residual operating current":
        "The test button cannot verify sensitivity. Proving that the device trips at its rated residual operating current IΔn needs an RCD test instrument.",
      "Disconnects within 0.4 seconds":
        "0.4 s is a maximum disconnection time for certain final circuits in TN systems. Pressing the test button gives no measurement of time at all.",
      "Disconnects within 40ms":
        "40 ms is a trip-time limit checked with an RCD tester at 5 IΔn (or 250 mA where declared). The integral button applies no measured current and records no time.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2022/91-july-2022/changes-to-rcd-testing-in-bs-76712018plusa22022/",
    ],
  },
  {
    prompt:
      "Which of the following confirms so far as is reasonably practicable, that the requirement of the Regulations have been met?",
    options: [
      "Electrical installation Condition Report",
      "Initial Verification",
      "Routine checks including user checks",
      "Functional Testing",
    ],
    answer: "Initial Verification",
    rationales: {
      "Electrical installation Condition Report":
        "An EICR assesses an existing installation and reports whether it is in a satisfactory condition for continued service, identifying damage, deterioration and defects.",
      "Routine checks including user checks":
        "Routine checks are interim maintenance checks set by the dutyholder and need not be done by an electrically skilled person. They do not confirm compliance with BS 7671.",
      "Functional Testing":
        "Functional testing operates switchgear, controls, interlocks and RCD test buttons to prove that they work. It is one test within verification, not the whole confirmation.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
    ],
  },
  {
    prompt:
      "What is the minimum acceptable value of insulation resistance for the SELV circuit?",
    options: [
      "1M Ohms",
      "2M Ohms",
      "5M Ohms",
      "0.5M Ohms",
    ],
    answer: "0.5M Ohms",
    rationales: {
      "1M Ohms":
        "1 MΩ is the minimum for LV circuits up to 500 V tested at 500 V DC. It applies to SELV only where its conductors share a multicore cable with LV circuits.",
      "2M Ohms":
        "None of GN3's insulation resistance minimums is 2 MΩ. The values are 0.5 MΩ for SELV and PELV at 250 V and 1 MΩ for LV circuits.",
      "5M Ohms":
        "5 MΩ is not a minimum for any circuit type. For new LV work GN3 suggests investigating any result below 20 MΩ, while SELV must reach 0.5 MΩ.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2020/81-july-2020/history-of-insulation-resistance-testing/",
    ],
  },
  {
    prompt:
      "Why is it necessary to verify the continuity of circuit protective conductors?",
    options: [
      "To ensure protective conductors are electrically sound and correctly connected",
      "To determine the prospective fault current under both short circuit and earth fault conditions",
      "To ensure the resistance between line conductors and earth is greater than 1M ohms",
      "To ensure the continuity and correct wiring of every line, neutral and protective conductor.",
    ],
    answer: "To ensure protective conductors are electrically sound and correctly connected",
    rationales: {
      "To determine the prospective fault current under both short circuit and earth fault conditions":
        "Prospective fault current is a separate requirement under Regulation 643.7.3.201, found by calculation, enquiry or measurement and compared with the breaking capacity of devices, not a continuity test.",
      "To ensure the resistance between line conductors and earth is greater than 1M ohms":
        "A minimum of 1 MΩ between live conductors and earth is the insulation resistance test of Regulation 643.3, done with an insulation resistance tester at 500 V DC, not a continuity check.",
      "To ensure the continuity and correct wiring of every line, neutral and protective conductor.":
        "Checking every line, neutral and protective conductor end to end is what Regulation 643.2.1 demands for ring final circuits only; protective conductor continuity covers cpcs and bonding.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
    ],
  },
  {
    prompt:
      "After securing an isolation on a piece of equipment and placing warning notices, what will the installer do next?",
    options: [
      "Use only electrician insulated tools rated at 1000 volts",
      "Prove dead at the point of work using an approved voltage detector",
      "Try turning the equipment on to make sure it does not start.",
      "Inform the client that the equipment is dead and then start work normally.",
    ],
    answer: "Prove dead at the point of work using an approved voltage detector",
    rationales: {
      "Use only electrician insulated tools rated at 1000 volts":
        "Insulated tools are sensible protection against accidental contact, but they give no evidence that the circuit is actually dead; the absence of voltage must still be confirmed by testing.",
      "Try turning the equipment on to make sure it does not start.":
        "GN3 warns against relying on the observation that controlled equipment has stopped working; a control circuit or a wrongly chosen isolator can leave conductors live while the load stays off.",
      "Inform the client that the equipment is dead and then start work normally.":
        "Telling the client the equipment is dead before any test has been made skips verification entirely, so neither the installer nor the client has proof that isolation was effective.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/pubns/priced/gs38.pdf",
      "https://www.hse.gov.uk/pubns/priced/hsr25.pdf",
    ],
  },
  {
    prompt:
      "An RCD installed for additional protection is to be tested for functionality. What test current is applied and what disconnection time is required in order to meet the requirements of BS 7671?",
    options: [
      "30mA and trip within 40mS",
      "150mA and trip within 40mS",
      "15mA and no trip",
      "30mA and trip within 300ms",
    ],
    answer: "30mA and trip within 300ms",
    rationales: {
      "30mA and trip within 40mS":
        "A 40 ms limit belongs to the 5 × IΔn test, which uses 150 mA (or 250 mA where the maker declares it) for a 30 mA device; at 30 mA the RCD is allowed up to 300 ms.",
      "150mA and trip within 40mS":
        "150 mA within 40 ms is the 5 × IΔn test, which BS 7671:2018+A2:2022 no longer requires; GN3 lists it only as an optional fault-finding test in Table 2.17b.",
      "15mA and no trip":
        "Applying 15 mA (½ × IΔn) with no trip checks the RCD is not oversensitive, but it never proves the device actually operates, which is what Regulation 643.8 is concerned with.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2022/91-july-2022/changes-to-rcd-testing-in-bs-76712018plusa22022/",
    ],
  },
  {
    prompt:
      "What other information is usually stated on a circuit breaker in addition to its rated current (In)?",
    options: [
      "Service short circuit capacity (Ics)",
      "Rated short circuit capacity (Icn)",
      "Range of trip values",
      "Maximum Zs value",
    ],
    answer: "Rated short circuit capacity (Icn)",
    rationales: {
      "Service short circuit capacity (Ics)":
        "Ics, the service short-circuit capacity, is the fault level the breaker can clear and still perform normally afterwards; it is defined in the product standard but is not the figure printed on the device.",
      "Range of trip values":
        "The type letter B, C or D implies an instantaneous trip band (such as 3 to 5 × In for Type B), but the numerical range of trip values is found in the product standard rather than printed on the breaker.",
      "Maximum Zs value":
        "Maximum Zs values come from the tables in BS 7671 Chapter 41 and GN3 Appendix A, and depend on the device type and rating; they are not marked on the circuit-breaker.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
    ],
  },
  {
    prompt:
      "When inspecting equipment installed in a bathroom, the minimum IP code allowed in zones 1 and 2 is",
    options: [
      "IPX7",
      "IP7X",
      "IPX4",
      "IP4X",
    ],
    answer: "IPX4",
    rationales: {
      IPX7:
        "IPX7 covers temporary immersion in water and is the minimum for equipment in zone 0, inside the bath or shower tray, not the lower requirement for zones 1 and 2.",
      IP7X:
        "IP7X is not a valid code: the first numeral describes protection against solid objects and only runs from 0 to 6, so a 7 in that position has no meaning.",
      IP4X:
        "IP4X rates protection against solid objects of 1 mm or more, such as wires, and says nothing about water, which is the hazard the bathroom zones are concerned with.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/1450/section-701.pdf",
    ],
  },
  {
    prompt:
      "Which component will not require functional testing during the electrical testing process?",
    options: [
      "Gas boiler connected to a fused spur",
      "RCD",
      "Light switch",
      "Isolator",
    ],
    answer: "Gas boiler connected to a fused spur",
    rationales: {
      RCD:
        "GN3 Section 2.6.19 specifically says RCD test buttons should be operated to confirm the RCD trips, in addition to the instrument tests of Section 2.6.18.",
      "Light switch":
        "A light switch is a control within the installation, so under Regulation 643.10 it should be operated to confirm it switches the intended luminaire and is correctly mounted.",
      Isolator:
        "An isolator is switchgear, so it must be operated during functional testing to show it opens and closes properly and actually disconnects the equipment it serves.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
    ],
  },
  {
    prompt:
      "A metallic test finger is used to test an enclosure to?",
    options: [
      "IP4X",
      "IP2X",
      "IPXXA",
      "IPX4",
    ],
    answer: "IP2X",
    rationales: {
      IP4X:
        "IP4X is checked with a 1.0 mm diameter wire probe, a much stricter test that GN3 requires for readily accessible horizontal top surfaces of enclosures.",
      IPXXA:
        "IPXXA uses a 50 mm sphere representing the back of a hand, giving a lower level of protection than the finger-safe test of the jointed test finger.",
      IPX4:
        "IPX4 is a water rating for splashing from any direction, tested with water spray rather than a probe; it says nothing about access to live parts.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/1605/protective-measures-special-installations-or-locations-part-1.pdf",
    ],
  },
  {
    prompt:
      "Calculate the earth fault loop impedance ZS where Ze = 0.2, R1 = 0.5, R2=0.6",
    options: [
      "0.06 Ohms",
      "1.3 Ohms",
      "0.22 Ohms",
      "0.18 Ohms",
    ],
    answer: "1.3 Ohms",
    rationales: {
      "0.06 Ohms":
        "0.06 Ω is the product 0.2 × 0.5 × 0.6; multiplying impedances has no physical meaning for a series loop, and the result is smaller than Ze alone.",
      "0.22 Ohms":
        "0.22 Ω equals Ze × (R1 + R2), that is 0.2 × 1.1; values in series are added, not multiplied, so this is far below the 1.1 Ω of the circuit conductors.",
      "0.18 Ohms":
        "0.18 Ω is lower than the 0.6 Ω of the cpc on its own, which is impossible because Zs must always exceed both Ze and R1 + R2 individually.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2024/100-may-2024/why-are-the-values-of-maximum-earth-fault-loop-impedance-different/",
    ],
  },
  {
    prompt:
      "The breaking capacity of a protective device must:",
    options: [
      "Not exceed PEFC but exceed PSCC",
      "Exceed PEFC but not PSCC",
      "Exceed PFC",
      "Not exceed PFC",
    ],
    answer: "Exceed PFC",
    rationales: {
      "Not exceed PEFC but exceed PSCC":
        "A device rated below the prospective earth fault current could rupture or weld its contacts during an earth fault; the rating must exceed both PEFC and PSCC, whichever is higher.",
      "Exceed PEFC but not PSCC":
        "Falling short of the prospective short-circuit current leaves the device unable to clear a line-to-neutral fault safely, and PSCC is often the larger of the two values.",
      "Not exceed PFC":
        "A breaking capacity below the prospective fault current means the device may be destroyed or fail to interrupt the fault, creating fire and arc-flash danger.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
    ],
  },
  {
    prompt:
      "Following a test of earth fault loop impedance, the results are compared to the values given in BS7671. Which of the following statements is true?",
    options: [
      "The measured value should not be less than 80% of the tabulated ot design value",
      "The measured value should not exceed 80% of the tabulated or design value",
      "The tabulated or design value should not be less than 80% of the measured value",
      "The tabulated or design value should not exceed 80% of the measured value",
    ],
    answer: "The measured value should not exceed 80% of the tabulated or design value",
    rationales: {
      "The measured value should not be less than 80% of the tabulated ot design value":
        "Setting 80 % as a floor would reject low, healthy readings while letting high ones through; a low Zs is desirable because it drives a larger fault current and faster disconnection.",
      "The tabulated or design value should not be less than 80% of the measured value":
        "This reverses the comparison: it would permit a measured Zs up to 1.25 times the tabulated value, which is above even the hot design limit rather than safely below it.",
      "The tabulated or design value should not exceed 80% of the measured value":
        "Requiring the tabulated value to stay under 80 % of the reading means the measurement must be at least 1.25 times the limit, so every compliant circuit would fail.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2024/100-may-2024/why-are-the-values-of-maximum-earth-fault-loop-impedance-different/",
    ],
  },
  {
    prompt:
      "The overall condition of an installation during a periodic inspection and test could be recorded as satisfactory if:",
    options: [
      "There is either a C1 or C2 observation, but the customer agrees to get the remedial work done within one week",
      "There is only one C2 observation",
      "There is only one C3 present",
      "There is only one C1 observation",
    ],
    answer: "There is only one C3 present",
    rationales: {
      "There is either a C1 or C2 observation, but the customer agrees to get the remedial work done within one week":
        "A promise to carry out remedial work does not change the coding; any C1 or C2 present at the time of inspection obliges the inspector to record the installation as unsatisfactory.",
      "There is only one C2 observation":
        "Code C2 means potentially dangerous, and even one such observation forces an unsatisfactory overall assessment, with urgent remedial action recommended.",
      "There is only one C1 observation":
        "Code C1 means danger is present and immediate remedial action is needed, so a single C1 makes the report unsatisfactory however few other observations there are.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/model-forms/",
    ],
  },
  {
    prompt:
      "An insulation resistance test is conducted on an insulation to ensure that;",
    options: [
      "Circuit conductor resistances are not too high",
      "There are no connections between the live conductors or between the live conductors and earth",
      "The cable insulation is of the correct material",
      "The system works efficiently",
    ],
    answer: "There are no connections between the live conductors or between the live conductors and earth",
    rationales: {
      "Circuit conductor resistances are not too high":
        "Conductor resistance is checked by continuity tests with a low-resistance ohmmeter, for example R1 + R2; an insulation tester reads in MΩ and cannot judge milliohm conductor values.",
      "The cable insulation is of the correct material":
        "An insulation test gives only a resistance value; whether the insulation is PVC, thermosetting or another material is confirmed by inspecting cable markings against the design.",
      "The system works efficiently":
        "Efficiency or correct operation of equipment is not measured by any insulation test; functional testing is what checks that assemblies and controls operate as intended.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2020/81-july-2020/history-of-insulation-resistance-testing/",
    ],
  },
  {
    prompt:
      "When measuring the external earth fault loop impedance (Ze) the:",
    options: [
      "Main switch should be off and earthing conductor disconnected",
      "Main switch should be on and the earthing conductor disconnected",
      "Main switch should be off and the earthing conductor connected",
      "Main switch should be on and the earthing conductor connected",
    ],
    answer: "Main switch should be off and earthing conductor disconnected",
    rationales: {
      "Main switch should be on and the earthing conductor disconnected":
        "With the main switch closed and the earthing conductor removed, the circuits stay energised with no earth connection, so a fault could leave exposed-conductive-parts live without disconnection.",
      "Main switch should be off and the earthing conductor connected":
        "Leaving the earthing conductor on the MET lets test current share paths through bonding conductors and extraneous-conductive-parts, so the reading would be lower than the true Ze.",
      "Main switch should be on and the earthing conductor connected":
        "With the main switch closed and the earth still connected, parallel earth paths remain in circuit and the installation is live during the test, so the result understates Ze and adds risk.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
    ],
  },
  {
    prompt:
      "Which of the following is carried out first during in-service inspection and testing?",
    options: [
      "Earth continuity tests",
      "Polarity testing",
      "Formal visual inspection",
      "Insulation testing",
    ],
    answer: "Formal visual inspection",
    rationales: {
      "Earth continuity tests":
        "Continuity of protective conductors is normally the first test, but it is a dead test made after the formal inspection has confirmed the installation is safe to work on.",
      "Polarity testing":
        "Polarity comes after insulation resistance in the recommended test sequence, although the R1 + R2 continuity test helps confirm it; either way it follows the inspection rather than preceding it.",
      "Insulation testing":
        "Insulation testing applies 250 V to 1000 V DC and follows continuity testing; inspection must first identify sensitive equipment that needs disconnecting from the test voltage.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/pubns/priced/hsr25.pdf",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
    ],
  },
  {
    prompt:
      "The items that may be checked during an inspection of a standard 13A socket outlet are:",
    options: [
      "Connection of conductors, identification of conductors, double insulation",
      "Connection of conductors, identification of conductors, obstacles",
      "Connection of conductors, presence of CPC, insulation of live parts",
      "Connection of conductors, placing out of reach, presence of CPC",
    ],
    answer: "Connection of conductors, presence of CPC, insulation of live parts",
    rationales: {
      "Connection of conductors, identification of conductors, double insulation":
        "Connection and identification of conductors are valid checks, but a BS 1363 socket-outlet has an earth terminal and is wired with a cpc, so double insulation is not a feature to verify on it.",
      "Connection of conductors, identification of conductors, obstacles":
        "Obstacles give basic protection only and are reserved for areas controlled by skilled or instructed persons; they play no part in a general-use socket-outlet.",
      "Connection of conductors, placing out of reach, presence of CPC":
        "Placing out of reach is a basic-protection measure for items such as bare overhead conductors; a socket-outlet has to be within reach to be used, so it cannot rely on it.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/model-forms/",
    ],
  },
  {
    prompt:
      "Before measurement, using a low resistance ohmmeter, the leads resistance should be:",
    options: [
      "Ignored",
      "Doubled",
      "Nulled or recorded and subtracted from the main instrument reading",
      "No less than 0.5 ohms",
    ],
    answer: "Nulled or recorded and subtracted from the main instrument reading",
    rationales: {
      Ignored:
        "Ignoring lead resistance adds it to every reading; a fused lead pair alone can add as much as 1.8 Ω, which would swamp a typical R1 + R2 of a fraction of an ohm.",
      Doubled:
        "Doubling the lead resistance has no basis; the leads form part of the measured path once, so their value is subtracted, never multiplied or added to the result.",
      "No less than 0.5 ohms":
        "No minimum lead resistance is required; leads should be as low in resistance as possible, and 0.5 Ω would mask much of a typical continuity reading.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/1696/ongoing-accuracy-of-test-instruments.pdf",
    ],
  },
  {
    prompt:
      "Earth fault loop impedances are measured / calculated to ensure that:",
    options: [
      "The neutral conductor is continuous and of the correct size",
      "The correct fuse has been installed",
      "The RCD trip mechanism operates",
      "Protective devices will operate in the required time",
    ],
    answer: "Protective devices will operate in the required time",
    rationales: {
      "The neutral conductor is continuous and of the correct size":
        "The neutral is not part of the line-to-earth fault loop, which returns via the cpc and earthing. Neutral continuity is proved by continuity testing, such as the ring final circuit end-to-end checks.",
      "The correct fuse has been installed":
        "The type and rating of the fitted device are confirmed by visual inspection, a separate step in verifying ADS; a loop impedance reading cannot reveal which fuse has actually been installed.",
      "The RCD trip mechanism operates":
        "RCD operation is proved separately with an RCD tester that applies IΔn and times the trip; an EFLI value says nothing about the condition of the RCD mechanism itself.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2024/100-may-2024/why-are-the-values-of-maximum-earth-fault-loop-impedance-different/",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
    ],
  },
  {
    prompt:
      "Approved Document B:",
    options: [
      "Gives guidance on where josts can be drilled",
      "Gives guidance on the position of smoke and heat alarms",
      "Gives guidance on the minimum size of extractor fans",
      "Gives guidance on the minimum depth of buried cables outdoors",
    ],
    answer: "Gives guidance on the position of smoke and heat alarms",
    rationales: {
      "Gives guidance on where josts can be drilled":
        "Limits on notching and drilling timber joists concern structural strength, which is covered by Approved Document A rather than the fire safety guidance.",
      "Gives guidance on the minimum size of extractor fans":
        "Extract ventilation for kitchens, bathrooms and utility rooms is set out in Approved Document F (ventilation) as airflow rates, not in the fire safety document.",
      "Gives guidance on the minimum depth of buried cables outdoors":
        "Outdoor burial depth is not an Approved Document topic; BS 7671 requires buried cables to be protected, laid deep enough to avoid damage and marked with cable covers or tape.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
    ],
  },
  {
    prompt:
      "A two way lighting circuit would be required to have strappers identified:",
    options: [
      "Black",
      "As neutral conductors",
      "Green / yellow",
      "As line conductors",
    ],
    answer: "As line conductors",
    rationales: {
      Black:
        "Black was the neutral colour before the 2004 harmonised colours; in modern three-core cable it is just a core colour and does not show the strapper's function, so brown or L overmarking is still needed.",
      "As neutral conductors":
        "Strappers carry the switched line supply between switches and never the return current; marking them blue as neutrals would mislead anyone later working on the circuit.",
      "Green / yellow":
        "Green-and-yellow is reserved exclusively for protective conductors and must never be used to identify a live conductor such as a strapper.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
    ],
  },
  {
    prompt:
      "Transformers for ELV lighting circuits can cause inrush currents that will operate a type B circuit breaker. This may be overcome by:",
    options: [
      "Increasing the current rating of the circuit breaker to 20A",
      "Changing the circuit breaker to a type C",
      "Changing the size of the lighting circuit cable",
      "Increasing the size of the CPC",
    ],
    answer: "Changing the circuit breaker to a type C",
    rationales: {
      "Increasing the current rating of the circuit breaker to 20A":
        "Raising In to 20 A would typically exceed the current-carrying capacity of 1.0 mm² lighting cable, breaking the In ≤ Iz condition needed for overload protection.",
      "Changing the size of the lighting circuit cable":
        "Cable size changes current-carrying capacity and voltage drop, not the magnetic trip threshold of the circuit-breaker, so the inrush would still cause nuisance tripping.",
      "Increasing the size of the CPC":
        "The cpc only carries current during an earth fault; inrush current flows in the line and neutral, so a larger cpc has no effect on the breaker tripping at switch-on.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2024/100-may-2024/why-are-the-values-of-maximum-earth-fault-loop-impedance-different/",
    ],
  },
  {
    prompt:
      "Approved Document M gives guidance on the accessibility of switches and sockets in new dwellings and other buildings. In which part of buildings does this guidance apply?",
    options: [
      "In all habitable rooms",
      "Only in rooms where a wheelchair bound person lives",
      "In rooms only on the ground floor level",
      "Only in rooms designated by the building owner",
    ],
    answer: "In all habitable rooms",
    rationales: {
      "Only in rooms where a wheelchair bound person lives":
        "The guidance is a baseline for every new dwelling, not triggered by a particular occupant; homes must suit visitors and future residents who may have reduced reach.",
      "In rooms only on the ground floor level":
        "Accessibility heights apply on every storey of a new dwelling, not only the entrance level; upstairs bedrooms and living spaces are habitable rooms too.",
      "Only in rooms designated by the building owner":
        "Owners cannot pick which rooms comply; Building Regulations guidance covers habitable rooms by definition and building control checks it.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
    ],
  },
  {
    prompt:
      "The requirements for overload protection are fulfilled when",
    options: [
      "Ib = 2.5A In =10A Iz =8A",
      "Ib = 20A In =15A Iz =15A",
      "Ib = 10A In =15A Iz =18A",
      "Ib = 15A In =20A Iz =18A",
    ],
    answer: "Ib = 10A In =15A Iz =18A",
    rationales: {
      "Ib = 2.5A In =10A Iz =8A":
        "Ib = 2.5 A and In = 10 A is acceptable, but In = 10 A exceeds Iz = 8 A, so the cable could carry an overload without the device operating.",
      "Ib = 20A In =15A Iz =15A":
        "A design current of 20 A is above the 15 A device rating, so Ib ≤ In fails and the device would trip or run overloaded under normal load.",
      "Ib = 15A In =20A Iz =18A":
        "Ib = 15 A ≤ In = 20 A is fine, but a 20 A device on cable rated 18 A breaks In ≤ Iz, leaving the cable exposed to sustained overload.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
    ],
  },
  {
    prompt:
      "A flat twin cable is to be buried 20mm into a living room wall without mechanical protection, it should be:",
    options: [
      "Installed in mini trunking and be in the safe zone",
      "Installed in a safe zone and have additional protection of a 30mA RCD",
      "Installed anywhere and be buried to 10mm",
      "Given RCD protection.",
    ],
    answer: "Installed in a safe zone and have additional protection of a 30mA RCD",
    rationales: {
      "Installed in mini trunking and be in the safe zone":
        "Plastic mini trunking will not stop a nail or screw, so it is not mechanical protection; without the 30 mA RCD the concealed cable still fails the requirement.",
      "Installed anywhere and be buried to 10mm":
        "Any depth under 50 mm is treated the same; a cable outside the prescribed zones is likely to be struck by fixings, and 10 mm is shallower, not safer.",
      "Given RCD protection.":
        "A 30 mA RCD alone is not enough for an unprotected cable under 50 mm deep; it must also follow the prescribed zones so its route can be predicted.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
    ],
  },
  {
    prompt:
      "The effect thermal insulation has on a cable is to:",
    options: [
      "Decrease its current carrying capacity",
      "Increase the cable bunching",
      "Increase its current carrying capacity",
      "Decrease its voltage drop",
    ],
    answer: "Decrease its current carrying capacity",
    rationales: {
      "Increase the cable bunching":
        "Bunching describes cables grouped together, which brings its own grouping factor Cg; surrounding a cable with insulation does not change how many cables run alongside it.",
      "Increase its current carrying capacity":
        "Insulation traps heat rather than removing it, so the cable runs hotter for a given load; capacity goes down through a rating factor Ci, never up.",
      "Decrease its voltage drop":
        "A hotter conductor has a higher resistance, so if anything the voltage drop rises slightly; thermal insulation never reduces the voltage drop of a circuit.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
    ],
  },
  {
    prompt:
      "In a bathroom, where the space below the bathtub or shower basin is accessible without the use of a tool, the space is classed as",
    options: [
      "Zone 1",
      "outside the zones",
      "Zone 0",
      "Zone 2",
    ],
    answer: "Zone 1",
    rationales: {
      "outside the zones":
        "Outside the zones applies only where the space under the bath can be reached solely with a tool, such as a screw-fixed bath panel; tool-free access removes that concession.",
      "Zone 0":
        "Zone 0 is the interior of the bath or shower basin itself, the part that can hold water, not the void underneath it.",
      "Zone 2":
        "Zone 2 extends 0.6 m horizontally beyond the edge of Zone 1 around the bath or shower; it does not include the space beneath the bath.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/1450/section-701.pdf",
    ],
  },
  {
    prompt:
      "The Approved Documents to the Building Regulations give:",
    options: [
      "Practical guidance on how to comply with the Building Regulations",
      "Statutory methods on ways to carry out building work",
      "Statutory methods on how to comply with the Building Regulations",
      "Ways in which to carry out electrical work in dwellings",
    ],
    answer: "Practical guidance on how to comply with the Building Regulations",
    rationales: {
      "Statutory methods on ways to carry out building work":
        "Approved Documents are not statutory; they are government-approved guidance, and building work may follow any method that achieves the functional requirements of the Regulations.",
      "Statutory methods on how to comply with the Building Regulations":
        "The statutory requirements sit in the Building Regulations themselves; the Approved Documents only illustrate ways to satisfy them, and other solutions remain acceptable.",
      "Ways in which to carry out electrical work in dwellings":
        "Approved Documents cover every part of the Regulations, from structure (Part A) to energy use; even Approved Document P points to BS 7671 rather than describing how to do wiring.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
    ],
  },
  {
    prompt:
      "The depth of a notch in a joist should be no more than the joist,",
    options: [
      "Width x 0.125",
      "Depth x 0.125",
      "Depth x 0.0125",
      "Depth x 1.25",
    ],
    answer: "Depth x 0.125",
    rationales: {
      "Width x 0.125":
        "Notch limits are based on the vertical depth of the joist, which resists the bending load; the width or thickness of the timber is not used in this calculation.",
      "Depth x 0.0125":
        "Depth × 0.0125 is one-eightieth of the depth, only 2.5 mm on a 200 mm joist and too shallow to pass most cables; the decimal point is in the wrong place.",
      "Depth x 1.25":
        "Depth × 1.25 would be deeper than the joist itself and would cut it in two; the permitted multiplier is a small fraction, well below one.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
    ],
  },
  {
    prompt:
      "The document that needs completing after spurring off a ring final circuit is;",
    options: [
      "A Minor Electrical Installation Works Certificate",
      "A Building Notice",
      "An Electrical Installation Certificate",
      "An Electrical Installation Condition Report",
    ],
    answer: "A Minor Electrical Installation Works Certificate",
    rationales: {
      "A Building Notice":
        "A Building Notice goes to the local authority before notifiable work by someone outside a competent person scheme; it does not certify that the work meets BS 7671.",
      "An Electrical Installation Certificate":
        "An EIC is needed when a new circuit is installed, a consumer unit is replaced or several minor items are done together; one spur from an existing ring is not a new circuit.",
      "An Electrical Installation Condition Report":
        "An EICR records the condition of an existing installation at periodic inspection; it is not used to certify new work such as an addition to a circuit.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/f0hlqxq1/bs7671_meiwc_a4.pdf",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/model-forms/",
    ],
  },
  {
    prompt:
      "Inspection of new electrical work should be:",
    options: [
      "Conducted during construction",
      "Conducted during construction and on completion",
      "Conducted during testing and on completion",
      "Conducted on completion",
    ],
    answer: "Conducted during construction and on completion",
    rationales: {
      "Conducted during construction":
        "Inspecting only during construction leaves accessories, labelling, the consumer unit and finished terminations unchecked; a final inspection is still needed when the work is complete.",
      "Conducted during testing and on completion":
        "Inspection normally precedes testing rather than running alongside it, and this choice leaves out the construction stage when concealed cables and joints can still be seen.",
      "Conducted on completion":
        "By completion, cables in walls, under floors and above ceilings are already covered, so their routing, protection and fire-stopping can no longer be inspected.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/tqxkkscw/bs7671_eic_a4.pdf",
    ],
  },
  {
    prompt:
      "A member of a competent persons scheme is able to carry out:",
    options: [
      "Notifiable domestic electrical work and request building control to certify it",
      "Notifiable domestic electrical work without having any need to certify it",
      "Notifiable domestic electrical work and certify it without involving building control themselves",
      "Domestic electrical work and act as an intermediary so that someone else can certify it",
    ],
    answer: "Notifiable domestic electrical work and certify it without involving building control themselves",
    rationales: {
      "Notifiable domestic electrical work and request building control to certify it":
        "Asking building control to inspect and certify is the route for installers who are not scheme members, using a building notice or full plans application and paying a fee.",
      "Notifiable domestic electrical work without having any need to certify it":
        "Scheme members must still issue an EIC or MEIWC and notify the work through their scheme; self-certification removes building control involvement, not the certification itself.",
      "Domestic electrical work and act as an intermediary so that someone else can certify it":
        "A competent person scheme authorises a member to certify their own work; certifying another installer's work is done by a registered third-party certifier, a separate arrangement.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/model-forms/",
    ],
  },
  {
    prompt:
      "Residual current devices (RCD) detect",
    options: [
      "Overloads, short circuits and earth faults",
      "Overloads and short circuits only",
      "Short circuits and earth faults only",
      "Earth faults only",
    ],
    answer: "Earth faults only",
    rationales: {
      "Overloads, short circuits and earth faults":
        "Overload and short-circuit detection needs thermal and magnetic elements as in an MCB or RCBO; a plain RCCB is described as a residual current circuit-breaker without overcurrent protection.",
      "Overloads and short circuits only":
        "Responding only to overloads and short circuits describes a fuse or circuit-breaker; it leaves out the one fault an RCD does detect, current leaking to earth.",
      "Short circuits and earth faults only":
        "A line-to-neutral short circuit sends equal current out and back, leaving no residual imbalance, so an RCD will not trip on it unless it also has overcurrent elements.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2022/91-july-2022/changes-to-rcd-testing-in-bs-76712018plusa22022/",
    ],
  },
  {
    prompt:
      "A protective conductor connecting the main earthing terminal of an installation to an earth electrode or other means of earthing is",
    options: [
      "The earthing conductor",
      "A circuit protective conductor",
      "An earth continuity conductor",
      "A main protective bonding conductor",
    ],
    answer: "The earthing conductor",
    rationales: {
      "A circuit protective conductor":
        "A circuit protective conductor runs within a final or distribution circuit, linking exposed-conductive-parts of equipment back to the MET, not from the MET to the electrode.",
      "An earth continuity conductor":
        "Earth continuity conductor is an obsolete term from older wiring regulations for what is now called a cpc; BS 7671 does not use it for the MET-to-electrode connection.",
      "A main protective bonding conductor":
        "A main protective bonding conductor joins extraneous-conductive-parts, such as incoming gas and water pipes, to the MET; it does not connect the MET to the means of earthing.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/earthing-and-bonding-faqs/",
    ],
  },
  {
    prompt:
      "A shower is rated at 8kW and connected to a 230V supply; what is nearest full load current?",
    options: [
      "355 amps",
      "35 ohms",
      "35 amps",
      "3.5 amps",
    ],
    answer: "35 amps",
    rationales: {
      "355 amps":
        "355 A results from misplacing the decimal point by a factor of ten; a shower drawing that much would need cabling far beyond any domestic final circuit.",
      "35 ohms":
        "Ohms measure resistance, not current. The element's resistance would actually be about V² ÷ P = 230² ÷ 8000 ≈ 6.6 Ω, so 35 Ω is wrong in both unit and value.",
      "3.5 amps":
        "3.5 A is ten times too small, roughly the current of an 800 W appliance at 230 V, showing the kilowatt-to-watt conversion has slipped.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
    ],
  },
  {
    prompt:
      "The correct formula for calculating total earth fault loop impedance is:",
    options: [
      "Ze = Zs + (R1 + R2)",
      "Zs = Ze + (R1 +R2)",
      "Zs = Ze - (R1 + R2)",
      "Zs = Ze + (R1 / R2)",
    ],
    answer: "Zs = Ze + (R1 +R2)",
    rationales: {
      "Ze = Zs + (R1 + R2)":
        "Rearranging the relationship gives Ze = Zs − (R1 + R2); adding circuit resistance to Zs would make the external part larger than the whole loop, which is impossible.",
      "Zs = Ze - (R1 + R2)":
        "Subtracting R1 + R2 from Ze would make the total loop smaller than its external portion, yet the circuit's line conductor and cpc add resistance to the fault path.",
      "Zs = Ze + (R1 / R2)":
        "R1 / R2 is a dimensionless ratio of conductor resistances (about 0.61 for 2.5/1.5 mm² cable), not an impedance in ohms, so it cannot be added to Ze.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2024/100-may-2024/why-are-the-values-of-maximum-earth-fault-loop-impedance-different/",
    ],
  },
  {
    prompt:
      "The horizontal top surface of a barrier or enclosure which is readily accessible must provide a degree of protection of at least",
    options: [
      "IP 55",
      "IP XXB or IP 2X",
      "IP X4",
      "IP XXD or IP 4X",
    ],
    answer: "IP XXD or IP 4X",
    rationales: {
      "IP 55":
        "IP55 denotes dust protection and resistance to water jets; it exceeds what BS 7671 demands for an accessible top surface and is not the stated minimum.",
      "IP XXB or IP 2X":
        "IPXXB or IP2X is the general minimum for barriers and enclosures, preventing finger contact, but GN3 asks for more on readily accessible horizontal top surfaces.",
      "IP X4":
        "IPX4 covers only splashing water, with the X meaning no rating against solid objects, so it gives no assurance against access to live parts from above.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/1605/protective-measures-special-installations-or-locations-part-1.pdf",
    ],
  },
  {
    prompt:
      "An Electrical Installation Condition Report:",
    options: [
      "Must be accompanied by a Condition Report Inspection Schedule, and a Schedule of Test Results and Schedule of Circuit Details",
      "Is proof that the original installation was correctly installed",
      "Is valid for 10 years",
      "Is valid for 5 years",
    ],
    answer: "Must be accompanied by a Condition Report Inspection Schedule, and a Schedule of Test Results and Schedule of Circuit Details",
    rationales: {
      "Is proof that the original installation was correctly installed":
        "An EICR reports the present condition of an existing installation, noting damage, deterioration and defects; it cannot prove the original work was correct, which is the role of the EIC.",
      "Is valid for 10 years":
        "An EICR carries no fixed validity period. GN3 Table 3.2 suggests intervals such as change of occupancy or 10 years for dwellings, but the inspector recommends the next date.",
      "Is valid for 5 years":
        "Five years is a common recommended interval and the legal maximum for private rented homes in England, but it is a recommendation for the next inspection, not a built-in expiry.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/model-forms/",
    ],
  },
  {
    prompt:
      "The following tests are to be conducted on a new installation: (1) Loop impedance, (2) Polarity, (3) Insulation Resistance, (4) Continuity of CPCs. The correct test sequence is:",
    options: [
      "1, 2, 3, 4",
      "4, 3, 2, 1",
      "3, 2, 4, 1",
      "2, 1, 4, 3",
    ],
    answer: "4, 3, 2, 1",
    rationales: {
      "1, 2, 3, 4":
        "1, 2, 3, 4 begins with loop impedance, a live test needing the supply connected, before any dead test has shown the cpcs are continuous or the insulation is sound.",
      "3, 2, 4, 1":
        "3, 2, 4, 1 tests insulation before cpc continuity, yet continuity of protective conductors heads the GN3 sequence so the earth path is confirmed before other tests depend on it.",
      "2, 1, 4, 3":
        "2, 1, 4, 3 leaves insulation resistance until last and runs the live loop test before dead tests, risking energizing an installation with undetected insulation faults.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
    ],
  },
  {
    prompt:
      "Low voltage as defined in BS7671 has a value not exceeding",
    options: [
      "50 V AC",
      "650 V AC",
      "1500 V AC",
      "1000 V AC",
    ],
    answer: "1000 V AC",
    rationales: {
      "50 V AC":
        "50 V AC is the upper limit of extra-low voltage, the band used for SELV and PELV circuits, not the ceiling of the low voltage band.",
      "650 V AC":
        "650 V is not a voltage band boundary in BS 7671; a 400 V three-phase system sits well within low voltage, which continues above 650 V.",
      "1500 V AC":
        "1500 V is the low voltage limit for DC systems; applying that figure to AC overstates the band, whose AC ceiling is lower.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
    ],
  },
  {
    prompt:
      "Where formal visual inspections are carried out, the results:",
    options: [
      "Need only be recorded if requested by a supervisor",
      "Need only be recorded if unsatisfactory",
      "Need not be recorded, whether results are satisfactory or unsatisfactory",
      "Should be recorded, whether satisfactory or unsatisfactory",
    ],
    answer: "Should be recorded, whether satisfactory or unsatisfactory",
    rationales: {
      "Need only be recorded if requested by a supervisor":
        "Recording results is a routine part of meeting the maintenance duty under the Electricity at Work Regulations, not something left to a supervisor's discretion.",
      "Need only be recorded if unsatisfactory":
        "Logging only failures leaves no evidence that passing items were checked, so deterioration trends and the suitability of the inspection interval cannot be judged.",
      "Need not be recorded, whether results are satisfactory or unsatisfactory":
        "Keeping no record at all gives no proof the inspection happened and leaves later inspectors nothing to compare against when assessing deterioration.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/pubns/priced/hsr25.pdf",
    ],
  },
  {
    prompt:
      "Overcurrent protection for lighting circuits in domestic installations is",
    options: [
      "Dependant on the supply voltage",
      "Always 6A",
      "Dependant on the design current of the circuit",
      "Always 10A",
    ],
    answer: "Dependant on the design current of the circuit",
    rationales: {
      "Dependant on the supply voltage":
        "UK domestic supplies are a nominal 230 V single-phase, so the voltage does not choose the device rating; the load current and the cable's rating Iz do.",
      "Always 6A":
        "6 A is a common choice for a modest domestic lighting circuit, but a larger lighting load may need 10 A or 16 A; BS 7671 sets no fixed figure.",
      "Always 10A":
        "10 A is used where the load demands it, yet many circuits use 6 A, and circuits with B22 or E27 lampholders may be rated up to 16 A.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
    ],
  },
  {
    prompt:
      "One factor which does not influence the initial frequency of inspection and testing of appliances is:",
    options: [
      "The environment in which the appliance is utilised",
      "The previous inspection and test of the fixed wiring",
      "Whether the appliance is Class I or Class II",
      "Whether the appliance is stationary or fixed",
    ],
    answer: "The previous inspection and test of the fixed wiring",
    rationales: {
      "The environment in which the appliance is utilised":
        "Environment is a main driver: equipment used on a construction site or in a workshop suffers more damage than the same item in an office, so it is checked more often.",
      "Whether the appliance is Class I or Class II":
        "Construction class matters: a Class I appliance relies on its earth connection for safety, while Class II uses double or reinforced insulation, so the suggested intervals differ.",
      "Whether the appliance is stationary or fixed":
        "Equipment type matters: hand-held and portable items are moved and handled, so they wear faster than stationary or fixed appliances and need more frequent checks.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/pubns/priced/hsr25.pdf",
    ],
  },
  {
    prompt:
      "The minimum extraction rate for a bathroom is:",
    options: [
      "60 litres per second",
      "15 litres per second",
      "30 litres per second",
      "6 litres per second",
    ],
    answer: "15 litres per second",
    rationales: {
      "60 litres per second":
        "60 l/s is the intermittent extract rate for a kitchen fan sited away from the hob, far more than a bathroom needs.",
      "30 litres per second":
        "30 l/s applies to a cooker hood extracting directly over the hob, or to a utility room, not to a bathroom.",
      "6 litres per second":
        "6 l/s is the minimum intermittent rate for a room with only a WC, too low to remove steam from a shower or bath.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/1450/section-701.pdf",
    ],
  },
  {
    prompt:
      "The prevention of indirect energising of a final circuit intended to be isolated must be achieved by",
    options: [
      "Displaying a suitable DANGER notice",
      "Installing a 100 mA RCD protected consumer unit",
      "Ensuring all devices are suitably labelled",
      "Separation of all final circuits from each other",
    ],
    answer: "Separation of all final circuits from each other",
    rationales: {
      "Displaying a suitable DANGER notice":
        "A DANGER notice warns people but does nothing electrically; a shared or borrowed neutral could still energise the circuit while it is meant to be isolated.",
      "Installing a 100 mA RCD protected consumer unit":
        "An RCD gives protection against earth faults; it cannot stop a circuit being fed through conductors shared with another circuit, and 100 mA is not an additional-protection rating.",
      "Ensuring all devices are suitably labelled":
        "Labelling devices (514.8.1) shows which circuit each device protects, but a label cannot prevent a circuit with a borrowed neutral being energised from elsewhere.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
    ],
  },
  {
    prompt:
      "Socket outlets should?",
    options: [
      "Only be switched if used outside",
      "Always be switched",
      "Only switched if inaccessible",
      "Be switched or unswitched",
    ],
    answer: "Be switched or unswitched",
    rationales: {
      "Only be switched if used outside":
        "No regulation requires an outdoor socket to be switched; outdoor sockets instead need a suitable IP rating and 30 mA RCD additional protection for equipment used outdoors.",
      "Always be switched":
        "Unswitched sockets to BS 1363-2 are permitted and widely used, for example behind appliances, where withdrawing the plug disconnects the load.",
      "Only switched if inaccessible":
        "Accessibility affects where control for an appliance goes, such as a switched fused connection unit above a worktop, but it does not dictate whether the socket itself has a switch.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
    ],
  },
] as const;
