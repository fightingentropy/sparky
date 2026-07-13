export const initialVerificationTest5Q21To40 = [
  {
    prompt:
      "Questions 17 to 23 relate to the following scenario. The continuity of a main protective bonding conductor to a gas installation pipe in a new primary school is to be tested. The 10 mm² conductor is 43 m long. The installation has been safely isolated for this test. What is the only outcome that can be recorded on the Schedule of Inspections for this conductor?",
    options: ["Lim", "N/A", "N/V", "Tick"],
    answer: "Tick",
    rationales: {
      Lim:
        "A limitation records agreed work that could not be inspected or tested. This applicable conductor has been tested, so its outcome is known.",
      "N/A":
        "The bonding conductor is present and continuity is an inspection item that applies to it. N/A is reserved for an item that is not relevant to the installation.",
      "N/V":
        "N/V means that an item was not verified. A resistance measurement has verified this conductor, and the new-work Schedule of Inspections uses a tick for a satisfactory result."
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/model-forms/"
    ]
  },
  {
    prompt:
      "Questions 17 to 23 relate to the following scenario. The continuity of a main protective bonding conductor to a gas installation pipe in a new primary school is to be tested. The 10 mm² conductor is 43 m long. The installation has been safely isolated for this test. What is the expected measured conductor resistance value?",
    options: ["0.00 Ω", "0.05 Ω", "0.08 Ω", "0.12 Ω"],
    answer: "0.08 Ω",
    rationales: {
      "0.00 Ω":
        "Copper has finite resistance. At about 1.83 Ω/km, a 43 m length of 10 mm² copper is expected to measure about 0.079 Ω before allowing for test-lead resistance.",
      "0.05 Ω":
        "At about 1.83 Ω/km, this reading represents only about 27 m of 10 mm² copper. The stated 43 m length is expected to be close to 0.08 Ω.",
      "0.12 Ω":
        "This reading represents roughly 66 m at the standard 20 °C conductor resistance, or significant extra contact resistance. It is well above the expected value for the stated 43 m length."
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
      "https://www.nexans.co.uk/en/products/Indoor-Energy-Cables/Wires-and-Cables--under-1kV/ALSECURE-H-64520.html"
    ]
  },
  {
    prompt:
      "Questions 17 to 23 relate to the following scenario. The continuity of a main protective bonding conductor to a gas installation pipe in a new primary school is to be tested. The 10 mm² conductor is 43 m long. The installation has been safely isolated for this test. Which risk to other persons must be managed when correctly undertaking this test?",
    options: ["Burns risk", "Electric shock", "Sharp edges", "Trip hazard"],
    answer: "Trip hazard",
    rationales: {
      "Burns risk":
        "A continuity tester uses a low-energy test signal on an isolated conductor, so it does not create the heating needed for a burn hazard to passers-by.",
      "Electric shock":
        "Safe isolation removes the normal live-conductor shock hazard for this dead test. The long wander lead still creates a physical hazard across the work area.",
      "Sharp edges":
        "Nothing in this test introduces an exposed cutting edge. The foreseeable hazard to people nearby is the long lead crossing a walking route."
    },
    sourceUrls: [
      "https://www.hse.gov.uk/electricity/introduction.htm",
      "https://www.hse.gov.uk/electricity/electricequip.htm"
    ]
  },
  {
    prompt:
      "Questions 24 to 28 relate to the following scenario. Voltage drop of a single-phase circuit supplying a bread oven is to be verified as part of periodic inspection and testing within a bakery. The circuit has a measured R1+Rn value of 0.40 Ω and an Ib of 29.6 A. The circuit protective device has an In of 32 A. The installation forms part of a public 400/230 V TN-S system. What is the purpose of this test?",
    options: [
      "To confirm the cable will stay within temperature parameters",
      "To confirm the function of the oven will not be impaired",
      "To confirm the oven will not overload the circuit",
      "To confirm the protective device will operate correctly"
    ],
    answer: "To confirm the function of the oven will not be impaired",
    rationales: {
      "To confirm the cable will stay within temperature parameters":
        "Cable temperature is assessed from current-carrying capacity, installation method, ambient conditions and overload protection. Voltage-drop verification instead checks the voltage available at the equipment.",
      "To confirm the oven will not overload the circuit":
        "Overload is assessed by comparing design current, protective-device rating and conductor capacity. A voltage-drop result does not establish whether the load current exceeds the circuit rating.",
      "To confirm the protective device will operate correctly":
        "Fault disconnection is checked from earth-fault loop impedance and the protective device's operating characteristic, or by the relevant RCD test. Line-neutral voltage drop is not that fault-protection test."
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2023/96-july-2023/how-voltage-drop-can-affect-ev-charging-point-open-pen-detection-devices/",
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/"
    ]
  },
  {
    prompt:
      "Questions 24 to 28 relate to the following scenario. Voltage drop of a single-phase circuit supplying a bread oven is to be verified as part of periodic inspection and testing within a bakery. The circuit has a measured R1+Rn value of 0.40 Ω and an Ib of 29.6 A. The circuit protective device has an In of 32 A. The installation forms part of a public 400/230 V TN-S system. What instrument is used for part of this process?",
    options: [
      "Approved voltage indicator",
      "Low resistance ohmmeter",
      "Multi-meter",
      "PFC Tester"
    ],
    answer: "Low resistance ohmmeter",
    rationales: {
      "Approved voltage indicator":
        "A voltage indicator shows whether a potential difference is present and can support a polarity check. It does not measure a 0.40 Ω conductor resistance on an isolated circuit.",
      "Multi-meter":
        "A general multimeter's low test current, resolution and lead resistance can distort a sub-ohm installation measurement. Continuity testing uses a purpose-designed low-resistance instrument.",
      "PFC Tester":
        "A PFC tester makes a live-system measurement to determine prospective fault current. R1+Rn is a dead-circuit resistance measurement between the ends of the line and neutral conductors."
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/ensure-you-are-up-to-date-with-bs-7671/",
      "https://www.megger.com/en-gb/et-online/july-2021/testing-parallel-resistances",
      "https://www.hse.gov.uk/pubns/books/gs38.htm"
    ]
  },
  {
    prompt:
      "Questions 24 to 28 relate to the following scenario. Voltage drop of a single-phase circuit supplying a bread oven is to be verified as part of periodic inspection and testing within a bakery. The circuit has a measured R1+Rn value of 0.40 Ω and an Ib of 29.6 A. The circuit protective device has an In of 32 A. The installation forms part of a public 400/230 V TN-S system. What is the recommended maximum percentage voltage drop for this circuit?",
    options: ["0.06", "3%", "5%", "8%"],
    answer: "5%",
    rationales: {
      "0.06":
        "Expressed as a fraction, this is 6%. The recommended limit for a non-lighting load supplied directly from the public low-voltage network is 5%.",
      "3%":
        "The 3% recommendation applies to lighting. A bread oven is an 'other use' load, for which the public-supply recommendation is 5%.",
      "8%":
        "The 8% figure applies to other-use loads supplied from a private low-voltage source. This installation is stated to be supplied from the public network."
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2023/96-july-2023/how-voltage-drop-can-affect-ev-charging-point-open-pen-detection-devices/"
    ]
  },
  {
    prompt:
      "Questions 24 to 28 relate to the following scenario. Voltage drop of a single-phase circuit supplying a bread oven is to be verified as part of periodic inspection and testing within a bakery. The circuit has a measured R1+Rn value of 0.40 Ω and an Ib of 29.6 A. The circuit protective device has an In of 32 A. The installation forms part of a public 400/230 V TN-S system. What is the calculated value of voltage drop?",
    options: ["11.8 V", "13.5 V", "14.2 V", "14.8 V"],
    answer: "11.8 V",
    rationales: {
      "13.5 V":
        "Dividing this voltage by 29.6 A implies a circuit resistance of about 0.456 Ω. The measured R1+Rn supplied in the question is 0.40 Ω.",
      "14.2 V":
        "This result would require a resistance of about 0.480 Ω at 29.6 A. Using the stated resistance gives 29.6 × 0.40 = 11.84 V.",
      "14.8 V":
        "This result comes from using 0.50 Ω rather than the measured 0.40 Ω. Voltage drop for the stated values is found directly from current multiplied by resistance."
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2023/96-july-2023/how-voltage-drop-can-affect-ev-charging-point-open-pen-detection-devices/"
    ]
  },
  {
    prompt:
      "Questions 24 to 28 relate to the following scenario. Voltage drop of a single-phase circuit supplying a bread oven is to be verified as part of periodic inspection and testing within a bakery. The circuit has a measured R1+Rn value of 0.40 Ω and an Ib of 29.6 A. The circuit protective device has an In of 32 A. The installation forms part of a public 400/230 V TN-S system. If the inspector judges that improvement is advisable but finds no present or potential danger, which EICR classification expresses that judgement?",
    options: ["C1", "C2", "C3", "Lim"],
    answer: "C3",
    rationales: {
      C1:
        "C1 is for danger present with an immediate risk of injury. A calculated drop of 11.84 V is a small exceedance of the 11.5 V recommendation and, without another defect, is an equipment-performance concern rather than immediate danger.",
      C2:
        "C2 is for a potentially dangerous condition requiring urgent remedial action. The stated result is about 5.15%, and the scenario gives no evidence of a shock, fire or fault-protection risk.",
      Lim:
        "A limitation records an agreed part of the inspection or test that could not be completed. The circuit resistance and load current are available here, so its voltage drop can be assessed."
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2023/96-july-2023/how-voltage-drop-can-affect-ev-charging-point-open-pen-detection-devices/",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/"
    ]
  },
  {
    prompt:
      "Questions 29 to 33 relate to the following scenario. The supply polarity of a restaurant is to be tested as part of a periodic inspection and test. The supply and installation form part of a 230 V single-phase TN-S system. Fault protection is provided by single-pole circuit breakers to BS EN 60898. What would be the effect of reversed Line-Neutral supply polarity?",
    options: [
      "Circuit breakers will not disconnect an earth fault",
      "Equipment will not function correctly",
      "Motors will spin in reverse direction",
      "Single-pole switches will not control the load"
    ],
    answer: "Circuit breakers will not disconnect an earth fault",
    rationales: {
      "Equipment will not function correctly":
        "Many single-phase loads still receive approximately 230 V between their two supply conductors and may continue to work. Reversal creates a serious protection and isolation defect even when normal operation appears unchanged.",
      "Motors will spin in reverse direction":
        "Swapping line and neutral does not change the relationship between a single-phase motor's main and starting windings. Reversing such a motor requires its winding connections to be changed.",
      "Single-pole switches will not control the load":
        "A switch in the wrong conductor still opens the series circuit and stops current to the load. The danger is that the equipment can remain connected to line relative to earth while appearing switched off."
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/2218/bs_7671_2018-model_forms-all.pdf",
      "https://electrical.theiet.org/wiring-matters/years/2025/107-september-2025/safe-isolation-stories-that-could-save-lives-are-you-sure-you-are-safe/",
      "https://www.se.com/nl/en/faqs/FA141338/"
    ]
  },
  {
    prompt:
      "Questions 29 to 33 relate to the following scenario. The supply polarity of a restaurant is to be tested as part of a periodic inspection and test. The supply and installation form part of a 230 V single-phase TN-S system. Fault protection is provided by single-pole circuit breakers to BS EN 60898. What instrument is used to carry out this test?",
    options: [
      "Approved voltage indicator",
      "Insulation resistance tester",
      "Low resistance ohmmeter",
      "Phase rotation test instrument"
    ],
    answer: "Approved voltage indicator",
    rationales: {
      "Insulation resistance tester":
        "An insulation tester applies a high DC test voltage to an isolated circuit. It is not used to identify the live conductor by measuring normal supply potentials.",
      "Low resistance ohmmeter":
        "A low-resistance ohmmeter is a dead-test instrument for continuity and conductor resistance. It must not be connected across an energised 230 V supply.",
      "Phase rotation test instrument":
        "Phase-rotation instruments establish the sequence of a polyphase supply. A single-phase system has no three-phase sequence to check."
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
      "https://www.hse.gov.uk/pubns/books/gs38.htm"
    ]
  },
  {
    prompt:
      "Questions 29 to 33 relate to the following scenario. The supply polarity of a restaurant is to be tested as part of a periodic inspection and test. The supply and installation form part of a 230 V single-phase TN-S system. Fault protection is provided by single-pole circuit breakers to BS EN 60898. Which published guidance sets the safety requirements for the probes and leads used for this live test?",
    options: [
      "BS 7671 Appendix 4",
      "HSE GS38",
      "IET Guidance Note 3",
      "BS EN 60898"
    ],
    answer: "HSE GS38",
    rationales: {
      "BS 7671 Appendix 4":
        "Appendix 4 gives current-carrying-capacity and voltage-drop information for cable design. It is not the HSE safety guidance for test probes and leads.",
      "IET Guidance Note 3":
        "Guidance Note 3 explains inspection-and-testing methods and instrument use. The detailed safety construction requirements for low-voltage probes and leads are set out by HSE in GS38.",
      "BS EN 60898":
        "This is a product standard for circuit-breakers used in household and similar installations. It does not specify the probes or leads used by an inspector."
    },
    sourceUrls: [
      "https://www.hse.gov.uk/pubns/books/gs38.htm",
      "https://www.hse.gov.uk/pubns/priced/hsg85.pdf"
    ]
  },
  {
    prompt:
      "Questions 29 to 33 relate to the following scenario. The supply polarity of a restaurant is to be tested as part of a periodic inspection and test. The supply and installation form part of a 230 V single-phase TN-S system. Fault protection is provided by single-pole circuit breakers to BS EN 60898. What voltages are normally expected if the polarity is correct?",
    options: [
      "L-N 230 V, L-E 230 V, N-E approximately 0 V",
      "L-N 230 V, L-E Zero V, N-E Zero V",
      "L-N Zero V, L-E 230 V, N-E 230 V",
      "L-N Zero V, L-E Zero V, N-E 230 V"
    ],
    answer: "L-N 230 V, L-E 230 V, N-E approximately 0 V",
    rationales: {
      "L-N 230 V, L-E Zero V, N-E Zero V":
        "If both line and neutral were at the same potential as earth, their mutual voltage would also be zero. These three readings cannot describe a healthy 230 V supply.",
      "L-N Zero V, L-E 230 V, N-E 230 V":
        "These readings place line and neutral at the same live potential, so there is no usable voltage between them. That is not normal single-phase supply polarity.",
      "L-N Zero V, L-E Zero V, N-E 230 V":
        "If line is at earth potential and neutral is 230 V from earth, the voltage between line and neutral must also be about 230 V. The stated zero line-neutral reading is electrically inconsistent."
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2025/107-september-2025/safe-isolation-stories-that-could-save-lives-are-you-sure-you-are-safe/",
      "https://www.legislation.gov.uk/uksi/2002/2665/regulation/27/made"
    ]
  },
  {
    prompt:
      "Questions 29 to 33 relate to the following scenario. The supply polarity of a restaurant is to be tested as part of a periodic inspection and test. The supply and installation form part of a 230 V single-phase TN-S system. Fault protection is provided by single-pole circuit breakers to BS EN 60898. If reliable previous polarity results are available, why may repeat testing at every circuit point be unnecessary?",
    options: [
      "Additions have been installed",
      "Alterations have been carried out",
      "High Zs value has been recorded",
      "No alterations have been made since those results"
    ],
    answer: "No alterations have been made since those results",
    rationales: {
      "Additions have been installed":
        "New work must be inspected and tested before it is put into service, including polarity of the added circuit and any existing part it may have affected.",
      "Alterations have been carried out":
        "An alteration can disturb conductor terminations or switching, so polarity of the affected circuit needs verification rather than being assumed from older results.",
      "High Zs value has been recorded":
        "A high earth-fault loop impedance is an abnormal result requiring assessment or investigation. It provides no evidence that single-pole devices are connected in the line conductor."
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2025/107-september-2025/safe-isolation-stories-that-could-save-lives-are-you-sure-you-are-safe/",
      "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/645736/20170913__PG_02-17__Final_Version_-_O.pdf"
    ]
  },
  {
    prompt:
      "Questions 34 to 39 relate to the following scenario. Periodic inspection and testing of a mobile catering unit is to be carried out as a requirement of the client's insurer. The supply is from a 3 kVA 230 V single-phase portable generator and is connected as a TN-S system with fault protection provided by a BS EN 61008 30 mA RCD. The catering unit is permanently sited and infrequently moved. What would this information help the inspector to determine?",
    options: [
      "The amount of sampling required",
      "The condition of the cables",
      "The number of RCD tests required",
      "The number of circuits to be tested"
    ],
    answer: "The amount of sampling required",
    rationales: {
      "The condition of the cables":
        "Limited movement suggests less mechanical stress, but it cannot establish present cable condition. The cables still need the appropriate visual inspection and electrical tests.",
      "The number of RCD tests required":
        "RCD testing is determined by the protective devices installed and the protection they provide. How often the unit is moved does not change the required verification test for each RCD.",
      "The number of circuits to be tested":
        "The installation's circuit schedule and the agreed inspection extent identify the circuits. Movement history informs risk and sample size, not how many circuits physically exist."
    },
    sourceUrls: [
      "https://www.hse.gov.uk/work-equipment-machinery/inspection.htm",
      "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/645736/20170913__PG_02-17__Final_Version_-_O.pdf"
    ]
  },
  {
    prompt:
      "Questions 34 to 39 relate to the following scenario. Periodic inspection and testing of a mobile catering unit is to be carried out as a requirement of the client's insurer. The supply is from a 3 kVA 230 V single-phase portable generator and is connected as a TN-S system with fault protection provided by a BS EN 61008 30 mA RCD. What needs to be verified with regard to the mobile catering consumer unit?",
    options: [
      "The RCD main switch is rated at ≥ 63 A",
      "The bottom horizontal surface complies with IP4X",
      "The enclosure is made of polycarbonate",
      "The top horizontal surface complies with IP4X"
    ],
    answer: "The top horizontal surface complies with IP4X",
    rationales: {
      "The RCD main switch is rated at ≥ 63 A":
        "A 3 kVA, 230 V source supplies only about 13 A. The assembly and RCD current ratings must suit the design current and protective-device coordination; there is no blanket 63 A minimum here.",
      "The bottom horizontal surface complies with IP4X":
        "The enhanced IP4X or IPXXD requirement addresses an accessible horizontal top where objects can fall through openings. Other accessible enclosure surfaces are generally assessed against IP2X or IPXXB for basic protection.",
      "The enclosure is made of polycarbonate":
        "BS 7671 requires an enclosure suitable for its assembly and external influences, not one particular polymer. A compliant metal or other suitable insulating enclosure can be used in this non-domestic unit."
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/model-forms/",
      "https://electrical.theiet.org/courses-resources-and-career-for-electrical-professionals/free-resources/consumer-guidance/consumer-units/",
      "https://electrical.theiet.org/wiring-matters/years/2024/102-september-2024/external-consumer-units-for-electric-vehicles-in-a-domestic-environment/"
    ]
  },
  {
    prompt:
      "Questions 34 to 39 relate to the following scenario. Periodic inspection and testing of a mobile catering unit is to be carried out as a requirement of the client's insurer. The supply is from a 3 kVA 230 V single-phase portable generator and is connected as a TN-S system with fault protection provided by a BS EN 61008 30 mA RCD. What is the maximum test current applied to the RCD to confirm that fault protection is provided?",
    options: ["15 mA", "30 mA", "300 mA", "60 mA"],
    answer: "30 mA",
    rationales: {
      "15 mA":
        "This is half the RCD's rated residual current. A compliant device must not trip at or below half-rating, so that setting cannot demonstrate operation at IΔn.",
      "300 mA":
        "This is ten times the device rating. Current BS 7671 verification uses a single AC test at the rated residual operating current, not a tenfold over-test.",
      "60 mA":
        "This is twice the device rating. It could make a sluggish device trip and would not prove that it operates correctly at its 30 mA rating."
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2022/91-july-2022/changes-to-rcd-testing-in-bs-76712018plusa22022/",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/webinar-questions-and-answers/rcds-selection-types-and-testing-webinar/"
    ]
  },
  {
    prompt:
      "Questions 34 to 39 relate to the following scenario. Periodic inspection and testing of a mobile catering unit is to be carried out as a requirement of the client's insurer. The supply is from a 3 kVA 230 V single-phase portable generator and is connected as a TN-S system with fault protection provided by a BS EN 61008 30 mA RCD. What is the maximum operating time of the RCD, when tested using a test current equal to the residual current rating?",
    options: ["150 ms", "200 ms", "300 ms", "40 ms"],
    answer: "300 ms",
    rationales: {
      "150 ms":
        "A device may operate this quickly, but it is not the product-standard maximum at one times IΔn. A general non-delay BS EN 61008 RCD is accepted up to 300 ms at rated residual current.",
      "200 ms":
        "This was associated with some older RCD standards, not the stated BS EN 61008 device. The applicable maximum at rated residual current is 300 ms.",
      "40 ms":
        "The 40 ms figure is associated with the former high-current five-times-IΔn check for additional protection. This question specifies a test at one times IΔn."
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2022/91-july-2022/changes-to-rcd-testing-in-bs-76712018plusa22022/",
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/"
    ]
  },
  {
    prompt:
      "Questions 34 to 39 relate to the following scenario. Periodic inspection and testing of a mobile catering unit is to be carried out as a requirement of the client's insurer. The supply is from a 3 kVA 230 V single-phase portable generator and is connected as a TN-S system with fault protection provided by a BS EN 61008 30 mA RCD. The RCD is found to not operate at any test current. What is the most appropriate classification code to record?",
    options: ["C1", "C2", "C3", "FI"],
    answer: "C2",
    rationales: {
      C1:
        "C1 requires danger to be present with an immediate risk of injury, such as accessible live parts. A failed device relied on for fault protection creates danger if a fault occurs, so it is potentially dangerous rather than necessarily an immediate contact hazard.",
      C3:
        "C3 is only for an improvement where the condition is neither dangerous nor potentially dangerous. A protective device that cannot disconnect an earth fault removes a required safety function and needs urgent remedial action.",
      FI:
        "FI is used when more investigation is needed to determine whether danger or potential danger exists. The test has already established the defect: the RCD fails to operate, so remedial action rather than an unresolved investigation is required."
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
      "https://resources.hse.gov.uk/notices/notices/notice_details.asp?SF=CN&SV=313328894"
    ]
  },
  {
    prompt:
      "Questions 34 to 39 relate to the following scenario. Periodic inspection and testing of a mobile catering unit is to be carried out as a requirement of the client's insurer. The supply is from a 3 kVA 230 V single-phase portable generator and is connected as a TN-S system with fault protection provided by a BS EN 61008 30 mA RCD. What action should follow from this C2 observation?",
    options: [
      "Record the C2 observation and advise urgent remedial action",
      "Notify the insurer directly instead of the client",
      "Always isolate the installation and prevent re-energising",
      "Remove the portable generator without the client's authority"
    ],
    answer: "Record the C2 observation and advise urgent remedial action",
    rationales: {
      "Notify the insurer directly instead of the client":
        "The inspector reports to the person who ordered the EICR and must respect the agreed contractual and confidentiality arrangements. The insurer is not automatically the report recipient even when its policy prompted the inspection.",
      "Always isolate the installation and prevent re-energising":
        "Compulsory immediate isolation is associated with danger present and a C1 outcome. A C2 observation calls for urgent remedial action, but it does not by itself authorise the inspector to lock off the client's whole installation indefinitely.",
      "Remove the portable generator without the client's authority":
        "The failed component is the RCD providing fault protection, not necessarily the generator. Removing the source does not identify or repair the defective protective arrangement."
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2021/85-may-2021/eicr-myths/",
      "https://www.electricalsafetyfirst.org.uk/media/xqlow0dz/best_practice-guide-4_issue-7-2.pdf"
    ]
  },
  {
    prompt:
      "Questions 40 to 46 relate to the following scenario. Insulation resistance has been tested on five new lighting circuits in an existing large distribution warehouse. These circuits are supplied from a new single-phase, five-way DB. Switching for each circuit is by 230 V contactors. Connection to each light is made using a BS 1363 socket-outlet adjacent to the fitting. The supply and installation form a 400 V three-phase TN-C-S system. What is the correct way to prepare one of these circuits for testing?",
    options: [
      "Bypass contactors, connect cpc, un-plug lights",
      "Bypass contactors, disconnect cpc, plug-in lights",
      "Switch on lights, connect cpc, un-plug lights",
      "Switch on lights, disconnect cpc, plug-in lights"
    ],
    answer: "Bypass contactors, connect cpc, un-plug lights",
    rationales: {
      "Bypass contactors, disconnect cpc, plug-in lights":
        "Disconnecting the cpc removes the earth path needed for the live-conductors-to-earth measurement. Leaving luminaires connected can also damage electronic gear or let it influence the reading.",
      "Switch on lights, connect cpc, un-plug lights":
        "With the supply isolated, a 230 V contactor coil cannot be relied on to close when a lighting control is operated. The power contacts must be bridged or otherwise held closed so downstream fixed wiring is included.",
      "Switch on lights, disconnect cpc, plug-in lights":
        "This can leave contactor-controlled wiring outside the test, removes the protective-conductor test path and exposes connected luminaires to the DC test voltage. Those three conditions can hide insulation defects or damage equipment."
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
      "https://electrical.theiet.org/media/2218/bs_7671_2018-model_forms-all.pdf"
    ]
  }
] as const;
