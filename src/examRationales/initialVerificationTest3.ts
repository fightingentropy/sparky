export const initialVerificationTest3 = [
  {
    prompt:
      "A ring-circuit breaker trips after a period of sustained high load, but inspection finds no short-circuit or earth fault. What condition does this indicate?",
    options: [
      "Earth fault",
      "High resistance fault",
      "Overload",
      "Short-circuit",
    ],
    answer: "Overload",
    rationales: {
      "Earth fault":
        "An earth fault is unintended current from a live conductor to Earth or exposed metal. It may operate an RCD or an overcurrent device, but repeated circuit-breaker operation alone does not identify an earth fault.",
      "High resistance fault":
        "A high-resistance connection usually limits current while causing voltage drop and local heating. It does not normally create the sustained overcurrent needed to trip the circuit breaker.",
      "Short-circuit":
        "A short-circuit produces a very large fault current and normally causes rapid magnetic operation. This option would be plausible if the breaker trips immediately, so the question needs trip timing and load information to distinguish it reliably from overload.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/electricity/faq.htm",
      "https://www.hse.gov.uk/construction/safetytopics/systems.htm",
    ],
  },
  {
    prompt:
      "On a construction site, the result of the resistance of the earth electrode and the rated residual operating current should not exceed:",
    options: ["110 V", "25 V", "400 V", "50 V"],
    answer: "50 V",
    rationales: {
      "110 V":
        "For this TT protective measure, electrode resistance multiplied by the RCD rated residual operating current is limited to 50 V. A 110 V result would exceed that touch-voltage criterion.",
      "25 V":
        "Twenty-five volts is used as a reduced touch-voltage limit in certain especially hazardous situations. It is not the general product limit specified by this construction-site question.",
      "400 V":
        "Four hundred volts is a nominal line-to-line system voltage, not the permitted product of earth-electrode resistance and RCD operating current. It would be far above the applicable touch-voltage limit.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2021/87-september-2021/tt-earthing-considerations/",
      "https://www.hse.gov.uk/construction/safetytopics/systems.htm",
    ],
  },
  {
    prompt:
      "The following readings were taken on a test performed on a ring final circuit: Line-Line 0.8Ω, Neutral-Neutral 0.8Ω and cpc-cpc 0.8Ω. The expected reading between line and neutral at each socket outlet would be:",
    options: ["0.2Ω", "0.4Ω", "0.6Ω", "0.8Ω"],
    answer: "0.4Ω",
    rationales: {
      "0.2Ω":
        "With equal line and neutral end-to-end resistances, the cross-connected reading is (r1 + rn) / 4. Substituting 0.8 Ω for each conductor gives 1.6 / 4 = 0.4 Ω, not 0.2 Ω.",
      "0.6Ω":
        "A 0.6 Ω reading does not follow the ring cross-connection formula. It would be higher than the expected 0.4 Ω and should prompt a check of the connections or circuit topology.",
      "0.8Ω":
        "The 0.8 Ω figures are the end-to-end resistances of the complete conductors. Cross-connection creates two parallel paths at each outlet, so the expected line-to-neutral reading is lower.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2022/89-march-2022/resistance-readings-for-step-3-of-the-ring-final-circuit-test/",
      "https://electrical.theiet.org/media/qxhf2est/guidance-note-3-2022-ninth-edition-first-printing-errata-november-2024.pdf",
    ],
  },
  {
    prompt:
      "A length of copper wire has a resistance of 8Ω. What would be the resistance if the length of wire were halved and the cross sectional area halved?",
    options: ["16Ω", "2Ω", "4Ω", "8Ω"],
    answer: "8Ω",
    rationales: {
      "16Ω":
        "Halving cross-sectional area alone would double resistance to 16 Ω. Here the length is also halved, and that second change halves resistance, cancelling the increase.",
      "2Ω":
        "Two separate halvings should not simply be multiplied as though both reduce resistance. A smaller cross-sectional area increases resistance, while a shorter conductor reduces it.",
      "4Ω":
        "Four ohms would result if only the length were halved. Because the area is halved at the same time, the ratio L / A and therefore the resistance remain unchanged.",
    },
    sourceUrls: [
      "https://www.fluke.com/en-us/learn/blog/electrical/what-is-resistance",
      "https://www.fluke.com/en-us/learn/blog/electrical/basic-electrical-measurement-faq",
    ],
  },
  {
    prompt: "The top part of a distribution board must conform to:",
    options: ["IP2X", "IP4X", "IP67", "IPX2"],
    answer: "IP4X",
    rationales: {
      "IP2X":
        "IP2X is the general minimum against finger access to hazardous parts. An accessible horizontal top surface requires the higher 4X level against entry by small solid objects.",
      "IP67":
        "IP67 adds dust-tight construction and protection against temporary immersion. Those environmental protections are not the specific basic-protection requirement for the top of an ordinary distribution board.",
      "IPX2":
        "The X means no solids-access rating is stated, while the second digit addresses dripping water. The requirement in this question concerns access through the horizontal top surface, so a solids digit is essential.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/1605/protective-measures-special-installations-or-locations-part-1.pdf",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/model-forms/",
    ],
  },
  {
    prompt:
      "After completing the ring final continuity, the following would be proven:",
    options: [
      "(R1 & R2) only",
      "R1+R2 values and polarity at the points tested",
      "(r1 & rn) value & polarity",
      "(r1 + r2) value & polarity",
    ],
    answer: "R1+R2 values and polarity at the points tested",
    rationales: {
      "(R1 & R2) only":
        "The cross-connected line-to-CPC measurements do more than establish a resistance value. Consistent results at every outlet also help confirm continuity and correct polarity at those points.",
      "(r1 & rn) value & polarity":
        "Lower-case r1 and rn denote the end-to-end line and neutral conductor resistances measured during the ring test. Those values alone are not the final line-to-CPC R1+R2 result named by this answer set.",
      "(r1 + r2) value & polarity":
        "Lower-case r1 and r2 are the separate end-to-end resistances used to predict the cross-connected readings. The value recorded at an outlet after cross-connection is conventionally written R1+R2; the question's ampersand notation is malformed and should be corrected.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2022/89-march-2022/resistance-readings-for-step-3-of-the-ring-final-circuit-test/",
      "https://electrical.theiet.org/media/qxhf2est/guidance-note-3-2022-ninth-edition-first-printing-errata-november-2024.pdf",
    ],
  },
  {
    prompt:
      "We would carry out a polarity test on an Edison type lamp holder to ensure:",
    options: [
      "The centre contact is connected to the line conductor",
      "The light switch is working correctly",
      "The outer contact is connected to the line conductor",
      "There is no breakdown in insulation",
    ],
    answer: "The centre contact is connected to the line conductor",
    rationales: {
      "The light switch is working correctly":
        "Polarity testing confirms which conductor the switch interrupts; it does not prove the switch's mechanical operation or condition. Functional testing is a separate check.",
      "The outer contact is connected to the line conductor":
        "The threaded outer contact is the part most likely to be touched while a lamp is changed. It should be connected to neutral, with line taken to the less accessible centre contact.",
      "There is no breakdown in insulation":
        "Insulation breakdown is assessed with an insulation-resistance test. A polarity test establishes that line, neutral and protective devices are connected in the intended positions.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
      "https://electrical.theiet.org/media/qxhf2est/guidance-note-3-2022-ninth-edition-first-printing-errata-november-2024.pdf",
    ],
  },
  {
    prompt:
      "Guidance Notes 3 recommends that a low resistance Ohmmeter should have a range of:",
    options: ["0 to 10Ω", "0.2 to 2.0Ω", "1.2 to 2.0Ω", "2.0 to 2.2Ω"],
    answer: "0.2 to 2.0Ω",
    rationales: {
      "0 to 10Ω":
        "A broad 0–10 Ω statement does not express the specified low-resistance operating range used for continuity verification. The instrument needs suitable resolution and test current around the small values normally encountered.",
      "1.2 to 2.0Ω":
        "Starting at 1.2 Ω would exclude many valid protective-conductor readings below that value. A continuity tester must measure accurately well below 1 Ω.",
      "2.0 to 2.2Ω":
        "This narrow band omits the low readings for which the instrument is principally required. It would not be a useful range for typical conductor-continuity measurements.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/qxhf2est/guidance-note-3-2022-ninth-edition-first-printing-errata-november-2024.pdf",
      "https://media.fluke.com/b3604e04-5bdc-4d3d-8ec5-b2df00584ae8_original%20file.pdf",
    ],
  },
  {
    prompt:
      "A low-resistance ohmmeter used for continuity testing should provide a test current of:",
    options: ["250A", "25 mA", "Less than 200 mA", "Not less than 200mA"],
    answer: "Not less than 200mA",
    rationales: {
      "250A":
        "A continuity tester does not inject hundreds of amperes into a circuit. Its test source is designed to supply a small controlled current, with 200 mA as the relevant minimum.",
      "25 mA":
        "Twenty-five milliamps is below the 200 mA minimum used for low-resistance continuity measurement and may not produce a reliable result through ordinary contact films.",
      "Less than 200 mA":
        "The requirement sets 200 mA as the floor, not the ceiling. An instrument that cannot supply that current under the specified low-resistance condition is unsuitable for this continuity test.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/qxhf2est/guidance-note-3-2022-ninth-edition-first-printing-errata-november-2024.pdf",
      "https://media.fluke.com/b3604e04-5bdc-4d3d-8ec5-b2df00584ae8_original%20file.pdf",
    ],
  },
  {
    prompt:
      "Which one of the following is not a reason for testing polarity before energising the circuit?",
    options: [
      "Line conductor at a particular contact of a bayonet-cap lampholder",
      "Line conductor is in the centre contact of a screw type lamp holder",
      "Line conductor is in the protective device",
      "Line conductor is in the switching of lighting",
    ],
    answer: "Line conductor at a particular contact of a bayonet-cap lampholder",
    rationales: {
      "Line conductor is in the centre contact of a screw type lamp holder":
        "This is a genuine polarity requirement for an Edison screw holder. Keeping line on the centre contact prevents the accessible threaded shell from remaining live while a lamp is inserted or removed.",
      "Line conductor is in the protective device":
        "A fuse or single-pole circuit-breaker must interrupt the line conductor. If it were placed in neutral, the load-side wiring could remain live after the device opened.",
      "Line conductor is in the switching of lighting":
        "Single-pole lighting switches must interrupt line rather than neutral. Switching neutral alone could leave the lampholder live when the light appears to be off.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
      "https://electrical.theiet.org/media/qxhf2est/guidance-note-3-2022-ninth-edition-first-printing-errata-november-2024.pdf",
    ],
  },
  {
    prompt:
      "Approximately how long would a length of CPC be to give a reading of 0.36Ω, considering that 1.5mm² cable has a resistance per metre of 12.1mΩ?",
    options: ["10m", "15m", "30m", "45m"],
    answer: "30m",
    rationales: {
      "10m":
        "Ten metres would have a resistance of about 10 × 0.0121 = 0.121 Ω. That is only one third of the stated 0.36 Ω reading.",
      "15m":
        "Fifteen metres would measure about 0.182 Ω at the stated resistance per metre. The required length is 0.36 / 0.0121, which is approximately 29.8 m.",
      "45m":
        "Forty-five metres would give about 0.545 Ω, substantially above the measured value. The calculation must use ohms per metre, so 12.1 mΩ/m is first written as 0.0121 Ω/m.",
    },
    sourceUrls: [
      "https://www.fluke.com/en-us/learn/blog/electrical/what-is-resistance",
      "https://electrical.theiet.org/media/qxhf2est/guidance-note-3-2022-ninth-edition-first-printing-errata-november-2024.pdf",
    ],
  },
  {
    prompt:
      "Which insulation-resistance value is commonly used as a good-practice investigation trigger even though it is above the 1 MΩ minimum?",
    options: ["0.5MΩ", "2.0MΩ", "2.5MΩ", "5MΩ"],
    answer: "2.0MΩ",
    rationales: {
      "0.5MΩ":
        "A 0.5 MΩ result is below the usual 1 MΩ minimum for a low-voltage circuit and therefore requires correction, not merely discretionary investigation. This makes the wording awkward because 0.5 MΩ plainly also has to be investigated.",
      "2.5MΩ":
        "A 2.5 MΩ result is above the commonly cited 2 MΩ good-practice investigation threshold. It may still be assessed in context, but this value is not the threshold the question is testing.",
      "5MΩ":
        "Five megohms is comfortably above both the usual 1 MΩ minimum and the 2 MΩ investigation trigger. Nothing in this value alone points to deteriorated insulation.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
      "https://electrical.theiet.org/wiring-matters/years/2020/81-july-2020/history-of-insulation-resistance-testing/",
    ],
  },
  {
    prompt:
      "A reason for testing the prospective fault current would be to:",
    options: [
      "Calculate the external loop impedance",
      "Ensure that the correct circuit protection devices are selected",
      "Ensure the protective device will disconnect within given parameters",
      "Verify the installation",
    ],
    answer: "Ensure that the correct circuit protection devices are selected",
    rationales: {
      "Calculate the external loop impedance":
        "A tester may derive an impedance from voltage and fault-current measurements, but Ze has its own defined verification procedure. PFC is recorded chiefly to assess the fault duty imposed on protective equipment.",
      "Ensure the protective device will disconnect within given parameters":
        "Disconnection time is assessed from the fault-loop path and the protective device's time-current characteristic. The maximum prospective current instead tests whether the device can interrupt the fault without rupturing.",
      "Verify the installation":
        "This is too broad to identify what a prospective-fault-current result establishes. Verification includes inspection and many tests; PFC supplies specific evidence about available fault current and protective-device capability.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/2218/bs_7671_2018-model_forms-all.pdf",
      "https://electrical.theiet.org/wiring-matters/years/2023/94-march-2023/determining-the-maximum-earth-fault-loop-impedance-for-protective-devices-to-bs-en-60898-bs-en-60947-2/",
    ],
  },
  {
    prompt:
      "The instrument shown is primarily used for which task during safe isolation?",
    options: [
      "Checking circuit continuity",
      "Confirming the presence/absence of voltage (“prove dead”)",
      "Measuring earth electrode resistance",
      "Measuring insulation resistance",
    ],
    answer: "Confirming the presence/absence of voltage (“prove dead”)",
    rationales: {
      "Checking circuit continuity":
        "Continuity is measured on a dead circuit with a low-resistance ohmmeter. The pictured two-pole voltage detector is intended to establish whether hazardous voltage is present.",
      "Measuring earth electrode resistance":
        "Earth-electrode resistance requires a purpose-designed earth tester and an appropriate test method, often using test spikes or clamps. A two-pole voltage detector cannot perform that measurement.",
      "Measuring insulation resistance":
        "An insulation-resistance tester applies a controlled DC test voltage and reports resistance in megohms. A voltage detector only indicates voltage already present on the circuit.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/pubns/books/gs38.htm",
      "https://www.hse.gov.uk/pubns/priced/gs38.pdf",
    ],
  },
  {
    prompt:
      "When performing an insulation resistance test, lamps should be removed. Failure to do this could result in:",
    options: [
      "Circuit damage",
      "False readings",
      "Incorrect polarity",
      "Test instrument damage",
    ],
    answer: "False readings",
    rationales: {
      "Circuit damage":
        "Sensitive electronic lighting equipment can be damaged by an inappropriate test, but an ordinary lamp mainly creates a conductive path. The direct examination point here is the misleading insulation-resistance result that path produces.",
      "Incorrect polarity":
        "Leaving a lamp fitted does not interchange line and neutral conductors. Polarity is established by inspecting and testing conductor connections, not by the presence of a load.",
      "Test instrument damage":
        "A compliant insulation tester is designed to apply its rated test voltage to a de-energised circuit. The connected lamp affects the circuit seen by the tester rather than normally damaging the instrument.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
      "https://electrical.theiet.org/media/qxhf2est/guidance-note-3-2022-ninth-edition-first-printing-errata-november-2024.pdf",
    ],
  },
  {
    prompt:
      "The most important precaution to be taken before disconnecting a main bonding protective bonding conductor for test purposes is to:",
    options: [
      "Check for parallel paths",
      "Isolate the supply and lock off",
      "Only used tools rated at 1000V",
      "Warn the occupants",
    ],
    answer: "Isolate the supply and lock off",
    rationales: {
      "Check for parallel paths":
        "Parallel paths matter to the validity of a resistance measurement, but checking them does not first remove electrical danger. The installation must be securely isolated before a protective bonding connection is disturbed.",
      "Only used tools rated at 1000V":
        "Insulated tools are a supplementary precaution, not a substitute for isolation. The task should not rely on tool insulation while the installation remains capable of energising exposed metalwork.",
      "Warn the occupants":
        "A warning alone cannot prevent someone from restoring the supply. Lock-off keeps the isolation under the tester's control while the safety connection is temporarily removed.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/pubns/priced/hsg85.pdf",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/earthing-and-bonding-faqs/",
    ],
  },
  {
    prompt:
      "When performing a continuity of protective conductors test, you would use:",
    options: [
      "A low resistance ohmmeter",
      "An RCD tester",
      "An earth fault loop impedance tester",
      "An insulation resistance tester",
    ],
    answer: "A low resistance ohmmeter",
    rationales: {
      "An RCD tester":
        "An RCD tester injects residual current to measure device operation and disconnection time. It does not directly measure the small resistance of a protective conductor.",
      "An earth fault loop impedance tester":
        "A loop tester measures the impedance of a complete fault-current path, normally as a live test. Protective-conductor continuity is a dead test made earlier with a low-resistance instrument.",
      "An insulation resistance tester":
        "An insulation tester looks for very high resistance between conductors by applying a DC test voltage. Continuity testing instead needs accurate measurement of very low resistance through the conductor.",
    },
    sourceUrls: [
      "https://media.fluke.com/b3604e04-5bdc-4d3d-8ec5-b2df00584ae8_original%20file.pdf",
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
    ],
  },
  {
    prompt:
      "The test voltage and minimum insulation resistance value for a 750V circuit is?",
    options: [
      "1000 V & 0.5MΩ",
      "1000 V & 1MΩ",
      "500 V & 0.5MΩ",
      "500 V & 1MΩ",
    ],
    answer: "1000 V & 1MΩ",
    rationales: {
      "1000 V & 0.5MΩ":
        "The 1000 V DC test voltage is appropriate for a circuit whose nominal voltage is above 500 V and up to 1000 V. However, 0.5 MΩ is below the corresponding 1 MΩ minimum.",
      "500 V & 0.5MΩ":
        "Both figures are too low for the circuit described. A 750 V circuit falls in the table row requiring a 1000 V DC test and at least 1 MΩ.",
      "500 V & 1MΩ":
        "The minimum resistance figure is correct, but the test voltage is not. The 500 V DC test applies to circuits up to and including 500 V, not a 750 V circuit.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
      "https://electrical.theiet.org/wiring-matters/years/2020/81-july-2020/history-of-insulation-resistance-testing/",
    ],
  },
  {
    prompt: "An a.c voltage of 120 V between conductors is classified as:",
    options: ["ELV", "LV", "RLVS", "SELV"],
    answer: "LV",
    rationales: {
      ELV: "Extra-low voltage does not exceed 50 V AC between conductors or between a conductor and Earth. At 120 V AC, the circuit is above that band.",
      RLVS:
        "A reduced low-voltage system is a particular supply arrangement, commonly centre-tapped to Earth for site tools; it is not the general voltage-band classification requested. A value of 120 V between conductors falls within low voltage.",
      SELV: "SELV is an extra-low-voltage protective system with separation from Earth and higher-voltage systems. The stated 120 V exceeds the AC extra-low-voltage limit regardless of separation.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/construction/safetytopics/systems.htm",
      "https://electrical.theiet.org/wiring-matters/years/2020/82-september-2020/reduced-low-voltage-systems/",
    ],
  },
  {
    prompt:
      "A 230 V circuit is protected by a 16 A BS EN 60898 Type B device. If the applicable maximum earth fault loop impedance is 2.73 Ω, what minimum fault current corresponds to that limit?",
    options: ["123 A", "164 A", "248 A", "84 A"],
    answer: "84 A",
    rationales: {
      "123 A":
        "This would correspond to a much lower loop impedance of about 1.87 Ω. Dividing 230 V by the stated 2.73 Ω limit gives approximately 84 A.",
      "164 A":
        "A current of 164 A would correspond to an impedance near 1.40 Ω at 230 V. That is not the stated maximum Zs of 2.87 Ω.",
      "248 A":
        "A current of 248 A would imply a loop impedance of only about 0.93 Ω. It is much greater than the current calculated from the supplied 2.87 Ω value.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2024/100-may-2024/why-are-the-values-of-maximum-earth-fault-loop-impedance-different/",
      "https://electrical.theiet.org/wiring-matters/years/2023/94-march-2023/determining-the-maximum-earth-fault-loop-impedance-for-protective-devices-to-bs-en-60898-bs-en-60947-2/",
    ],
  },
  {
    prompt:
      "The code IPX4 assigned to an electrical item would prevent ingress from:",
    options: [
      "A BS human finger",
      "Liquid splashes",
      "Moisture",
      "Wire or solid objects greater than 1mm in diameter",
    ],
    answer: "Liquid splashes",
    rationales: {
      "A BS human finger":
        "Protection against finger access is expressed by a first characteristic digit of 2, as in IP2X. In IPX4 the X means no first-digit solids or access rating is declared.",
      Moisture:
        "'Moisture' is too vague to describe an IP test condition. The second digit 4 specifically denotes protection against water splashing from any direction.",
      "Wire or solid objects greater than 1mm in diameter":
        "Protection against a 1 mm probe or solid object is a first-digit 4 characteristic. IPX4 states only the second-digit water protection, not IP4X solids protection.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/1450/section-701.pdf",
      "https://electrical.theiet.org/media/1605/protective-measures-special-installations-or-locations-part-1.pdf",
    ],
  },
  {
    prompt: "The correct formula for calculating earth fault loop impedance is?",
    options: [
      "Ze=Zs+R1+R2",
      "Ze=Zs-R1+R2",
      "Ze=Zs/R1+R2",
      "Zs=Ze+R1+R2",
    ],
    answer: "Zs=Ze+R1+R2",
    rationales: {
      "Ze=Zs+R1+R2":
        "Ze is only the external part of the earth-fault loop. Adding the circuit's line and protective-conductor resistances to Zs would count the internal portion twice.",
      "Ze=Zs-R1+R2":
        "To derive Ze from Zs, both R1 and R2 must be subtracted: Ze = Zs − (R1 + R2). Subtracting one conductor and adding the other is not physically meaningful.",
      "Ze=Zs/R1+R2":
        "Loop impedances in series are added, not divided. This expression is also ambiguous without brackets and does not represent the external fault-loop path.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2024/100-may-2024/why-are-the-values-of-maximum-earth-fault-loop-impedance-different/",
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
    ],
  },
  {
    prompt:
      "During a routine periodic inspection, the person who determines the time to the next periodic inspection would be the:",
    options: [
      "Customer",
      "Designer",
      "Inspector carrying out the periodic assessment",
      "Installer",
    ],
    answer: "Inspector carrying out the periodic assessment",
    rationales: {
      Customer:
        "The client supplies information about use and maintenance, but does not make the technical assessment. The interval is recommended by the competent inspector using the installation's condition and circumstances.",
      Designer:
        "The original designer may propose an initial inspection interval for new work, but a periodic inspection reassesses an installation already in service. The inspector completing that report recommends the next interval.",
      Installer:
        "An installer certifies the work they construct and may not be involved in the later periodic assessment. The person carrying out the inspection is responsible for the recommendation on the current report.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/model-forms/",
      "https://electrical.theiet.org/media/2218/bs_7671_2018-model_forms-all.pdf",
    ],
  },
  {
    prompt: "Prior to energising, polarity should be tested using:",
    options: [
      "A low resistance ohmmeter",
      "An approved ammeter",
      "An approved earth fault loop impedance tester",
      "An approved voltage indicator",
    ],
    answer: "A low resistance ohmmeter",
    rationales: {
      "An approved ammeter":
        "An ammeter measures current in an energised circuit. Pre-energisation polarity is a dead continuity test between known conductors and points, so current measurement is not required.",
      "An approved earth fault loop impedance tester":
        "A loop tester is normally used on an energised installation to assess a complete fault path. Polarity should already have been confirmed during the dead-test sequence before that live test.",
      "An approved voltage indicator":
        "A voltage indicator is essential for proving dead and can support later live checks, but it does not perform the pre-energisation continuity measurement. A low-resistance ohmmeter traces the intended line path safely while isolated.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
      "https://www.hse.gov.uk/pubns/books/gs38.htm",
    ],
  },
  {
    prompt:
      "During a continuity of ring final conductors test, 10 sockets give a R1+R2 reading of 0.68Ω but one socket gives a reading of 0.92Ω. This could indicate:",
    options: [
      "A high resistance fault",
      "A missing earth connection",
      "A short circuit",
      "A spur on the circuit",
    ],
    answer: "A spur on the circuit",
    rationales: {
      "A high resistance fault":
        "A poor joint can also increase one reading, so the measurement should be repeated and the point inspected before diagnosis. The intended clue is a sound, repeatable higher value caused by the extra line and CPC length to a spur; the stem does not fully exclude a high-resistance connection.",
      "A missing earth connection":
        "An open CPC at that outlet would normally prevent a finite R1+R2 measurement, producing an open-circuit indication. The stated 0.92 Ω confirms that a conductive line-to-CPC test path exists.",
      "A short circuit":
        "A short circuit would create an abnormally low-resistance unintended path, not the modest extra series resistance shown here. Once energised, it would also be expected to operate overcurrent protection.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2022/89-march-2022/resistance-readings-for-step-3-of-the-ring-final-circuit-test/",
      "https://electrical.theiet.org/media/qxhf2est/guidance-note-3-2022-ninth-edition-first-printing-errata-november-2024.pdf",
    ],
  },
  {
    prompt:
      "For a typical 230 V circuit with sensitive equipment disconnected, what d.c. insulation-resistance test voltage is used?",
    options: ["230v", "5000v", "500 V d.c.", "50v"],
    answer: "500 V d.c.",
    rationales: {
      "230v":
        "230 V is the nominal operating voltage, not the prescribed DC insulation-test voltage. For a conventional 230 V circuit, the standard insulation test is made at 500 V DC.",
      "5000v":
        "A 5 kV test is far above the value prescribed for ordinary low-voltage installation wiring and could overstress connected equipment. That level belongs to specialist high-voltage test applications.",
      "50v":
        "Fifty volts is too low to verify the insulation of a 230 V circuit to the normal standard. Lower test voltages may be used in specifically permitted sensitive-equipment circumstances, but 50 V is not the general value.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
      "https://electrical.theiet.org/wiring-matters/years/2020/81-july-2020/history-of-insulation-resistance-testing/",
    ],
  },
  {
    prompt: "A polarity test should be carried out on a new installation:",
    options: [
      "After the installation has been energised",
      "As part of the insulation resistance test",
      "Before the installation has been energised",
      "During the earth fault loop impedance test",
    ],
    answer: "Before the installation has been energised",
    rationales: {
      "After the installation has been energised":
        "Waiting until energisation could leave switches or protective devices incorrectly connected in neutral while live. Polarity is established during the dead-test sequence before supply is applied.",
      "As part of the insulation resistance test":
        "Insulation resistance checks separation between conductors; it does not identify which conductor reaches a switch, fuse or lampholder contact. Polarity needs its own continuity connections and observations.",
      "During the earth fault loop impedance test":
        "Earth-fault loop impedance is a later live test of the fault-current path. It must not be used as the first opportunity to discover reversed line and neutral connections.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
      "https://electrical.theiet.org/media/qxhf2est/guidance-note-3-2022-ninth-edition-first-printing-errata-november-2024.pdf",
    ],
  },
  {
    prompt:
      "If two equal wattage lamps were connected in series the volt drop across each of them would:",
    options: [
      "Be greater across the first lamp",
      "Be the same",
      "Equal the current flowing",
      "Equal the supply voltage",
    ],
    answer: "Be the same",
    rationales: {
      "Be greater across the first lamp":
        "Position in a series circuit does not determine voltage drop. Equal lamps carry the same current and, under the question's equal-resistance assumption, each develops the same voltage.",
      "Equal the current flowing":
        "Voltage and current are different quantities and cannot be numerically equated without a resistance relationship. The common series current produces a voltage drop across each lamp according to V = IR.",
      "Equal the supply voltage":
        "The two individual voltage drops must add to the supply voltage. For equal lamps, each takes approximately half the total rather than the full supply voltage.",
    },
    sourceUrls: [
      "https://www.fluke.com/en-us/learn/blog/electrical/what-is-resistance",
      "https://www.fluke.com/en-us/learn/blog/electrical/basic-electrical-measurement-faq",
    ],
  },
  {
    prompt:
      "A 12V battery is connected across a set of resistors in series, values being, 60Ω 30Ω, 100Ω and 45Ω. The current flowing in the circuit is:",
    options: ["0.51 mA", "5.1 A", "51 A", "51 mA"],
    answer: "51 mA",
    rationales: {
      "0.51 mA":
        "The series resistance is 60 + 30 + 100 + 45 = 235 Ω. Dividing 12 V by 235 Ω gives 0.051 A, so 0.51 mA is smaller by a factor of 100.",
      "5.1 A":
        "A 5.1 A current through 235 Ω would require roughly 1,200 V, not a 12 V battery. The calculated 0.051 A must be converted to 51 mA.",
      "51 A":
        "Fifty-one amperes is one thousand times the calculated current. This error results from treating amperes as milliamperes in the wrong direction after applying Ohm's law.",
    },
    sourceUrls: [
      "https://www.fluke.com/en-us/learn/blog/electrical/what-is-resistance",
      "https://www.fluke.com/en-us/learn/blog/electrical/basic-electrical-measurement-faq",
    ],
  },
  {
    prompt:
      "A 25 m radial circuit has 2.5 mm² line and cpc conductors, each with resistance 7.41 mΩ/m at 20 °C. What approximate R1+R2 is expected at the furthest point?",
    options: ["0.17Ω", "0.27Ω", "0.37Ω", "0.74Ω"],
    answer: "0.37Ω",
    rationales: {
      "0.17Ω":
        "One 25 m conductor at 7.41 mΩ/m measures about 0.185 Ω. R1+R2 includes both the outward line and return protective-conductor paths, so the result must be doubled under the question's equal-resistance assumption.",
      "0.27Ω":
        "This value does not follow from the supplied length and resistance per metre. The calculation is 2 × 25 × 0.00741 = 0.3705 Ω.",
      "0.74Ω":
        "This doubles the combined path a second time. The 25 m line plus the 25 m CPC already total 50 conductor-metres, giving about 0.37 Ω rather than 0.74 Ω.",
    },
    sourceUrls: [
      "https://www.fluke.com/en-us/learn/blog/electrical/what-is-resistance",
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
    ],
  },
  {
    prompt:
      "When an insulation resistance test on a large installation returns unexpectedly low readings, your course of action would be:",
    options: [
      "To accept the readings",
      "To fail the installation",
      "To individually test each circuit",
      "To retest with an alternative instrument",
    ],
    answer: "To individually test each circuit",
    rationales: {
      "To accept the readings":
        "An unexpectedly low result may signal damaged insulation, a connected load or the combined effect of parallel circuits. It needs investigation before the installation can be accepted.",
      "To fail the installation":
        "A low whole-installation result does not identify which circuit is responsible and may be affected by parallel paths. Subdivision provides the evidence needed before reaching a pass-or-fail conclusion.",
      "To retest with an alternative instrument":
        "Another instrument is appropriate if there is evidence that the tester is faulty or out of calibration. With no such evidence, isolating and testing circuits separately is the direct diagnostic step.",
    },
    sourceUrls: [
      "https://www.megger.com/en-gb/et-online/july-2021/testing-parallel-resistances",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
    ],
  },
  {
    prompt: "A Band II circuit has a maximum a.c. voltage of:",
    options: ["10000v", "1000v", "100v", "50v"],
    answer: "1000v",
    rationales: {
      "10000v":
        "Ten kilovolts is well above the low-voltage band and belongs to high-voltage systems. Band II extends only to 1000 V AC between conductors.",
      "100v":
        "One hundred volts lies within Band II but is not its upper boundary. The band continues through ordinary 230/400 V systems up to 1000 V AC.",
      "50v":
        "Fifty volts AC is the upper boundary of extra-low voltage, or Band I, under the normal classification. Band II begins above that point rather than ending there.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2020/82-september-2020/reduced-low-voltage-systems/",
      "https://www.hse.gov.uk/electricity/faq.htm",
    ],
  },
  {
    prompt:
      "A STAR connected system has a line voltage of 1000V, what is the phase voltage:",
    options: ["1000V", "1732V", "400V", "577V"],
    answer: "577V",
    rationales: {
      "1000V":
        "In a star system the stated 1000 V is measured between two lines, not across one phase winding. The line-to-neutral phase voltage is lower by a factor of √3.",
      "1732V":
        "This multiplies the line voltage by √3 instead of dividing it. The relevant relationship is Vphase = Vline / √3.",
      "400V":
        "Four hundred volts is not derived from the supplied value. Dividing 1000 V by √3 gives approximately 577.4 V.",
    },
    sourceUrls: [
      "https://www.megger.com/en-gb/et-online/june-2008/don%E2%80%99t-be-phased-by-phases%21",
      "https://eshop.se.com/in/blog/post/different-types-of-motor-starters-explained.html",
    ],
  },
  {
    prompt:
      "When carrying out an insulation resistance test on a large installation, why is it good practice to split (subdivide) the installation into smaller sections before testing?",
    options: [
      "Confusion over readings",
      "Excessively high readings",
      "False readings from parallel resistances",
      "False readings from series resistances",
    ],
    answer: "False readings from parallel resistances",
    rationales: {
      "Confusion over readings":
        "Subdivision does make diagnosis clearer, but 'confusion' is not the electrical mechanism affecting the measured value. Multiple insulation paths connected together appear in parallel to the tester.",
      "Excessively high readings":
        "Parallel resistance is always lower than the smallest individual branch resistance. Combining many sound circuits therefore tends to reduce the overall reading, not make it excessively high.",
      "False readings from series resistances":
        "The insulation paths of separate connected circuits do not form one end-to-end series chain. They provide simultaneous paths between the test conductors and therefore combine in parallel.",
    },
    sourceUrls: [
      "https://www.megger.com/en-gb/et-online/july-2021/testing-parallel-resistances",
      "https://electrical.theiet.org/media/qxhf2est/guidance-note-3-2022-ninth-edition-first-printing-errata-november-2024.pdf",
    ],
  },
  {
    prompt:
      "What precaution prevents damage to voltage-sensitive electronic equipment during an insulation-resistance test?",
    options: [
      "Disconnect all voltage sensitive devices",
      "Ensure all circuit breakers are in the off position",
      "Ensure all lampholders are fitted with lamps",
      "Ensure all lamps are removed",
    ],
    answer: "Disconnect all voltage sensitive devices",
    rationales: {
      "Ensure all circuit breakers are in the off position":
        "With downstream protective devices open, portions of the fixed wiring would be omitted from a grouped test. After safe isolation, switches and circuit-breakers normally need to be closed where practicable so the wiring is included.",
      "Ensure all lampholders are fitted with lamps":
        "Fitted lamps form load paths between conductors and can produce a misleadingly low reading. Lamps should be removed for the insulation test.",
      "Ensure all lamps are removed":
        "Removing lamps is also a valid preparation step and is explicitly required by the preceding question. It does not replace disconnecting or otherwise protecting voltage-sensitive equipment, so this item has more than one defensible answer and should be rewritten.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
      "https://electrical.theiet.org/wiring-matters/years/2020/81-july-2020/history-of-insulation-resistance-testing/",
    ],
  },
  {
    prompt:
      "Where a live Zs test at a BS 1363 socket is justified, which accessory provides the safest direct connection for the loop tester?",
    options: [
      "A BS1363 fly lead",
      "A standard 3 way fly lead",
      "Previous Ze results",
      "The prospective fault current",
    ],
    answer: "A BS1363 fly lead",
    rationales: {
      "A standard 3 way fly lead":
        "Three loose probes are intended for controlled contact with identified terminals and add unnecessary exposure at a socket-outlet. A purpose-made BS 1363 plug lead connects line, neutral and Earth in the intended positions.",
      "Previous Ze results":
        "Ze covers only the external portion of the fault loop and a previous value may not represent current conditions. Zs at the outlet also includes the final circuit's line and CPC impedance.",
      "The prospective fault current":
        "PFC is a measured or derived result, not an accessory for connecting a loop tester to a socket. The socket lead provides the physical test connection needed by the question.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
      "https://www.hse.gov.uk/pubns/books/gs38.htm",
    ],
  },
  {
    prompt:
      "Which procedure specifically requires resistance measurements at every point of a ring final circuit?",
    options: [
      "Continuity of ring final circuits",
      "Insulation resistance",
      "Polarity",
      "RCD operation",
    ],
    answer: "Continuity of ring final circuits",
    rationales: {
      "Insulation resistance":
        "Insulation resistance can normally be measured from a distribution point with switches closed and loads removed or disconnected. It does not require moving the tester to every accessory.",
      Polarity:
        "Polarity must be verified at all relevant points, but it can be confirmed as part of the continuity procedure rather than through a separate set of connections for this test. The wording is still loose because polarity verification does extend throughout the circuit.",
      "RCD operation":
        "RCD operation is tested at a suitable downstream point to verify the device's behaviour. Repeating the instrument connection at every point on the final circuit is not required to establish the RCD trip result.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2022/89-march-2022/resistance-readings-for-step-3-of-the-ring-final-circuit-test/",
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
    ],
  },
  {
    prompt:
      "A radial socket outlet circuit is supplied by 2.5mm² cable and is 20m long. Given that the Ze of the installation is 0.43Ω and that the resistivity of the cable is 7.41mΩ/m at 20°C , what is the calculated Zs:",
    options: ["0.3Ω", "0.73Ω", "0.9Ω", "1.2Ω"],
    answer: "0.73Ω",
    rationales: {
      "0.3Ω":
        "The 40 conductor-metres of line and CPC contribute about 40 × 0.00741 = 0.296 Ω. That internal value must be added to Ze, not given as the complete Zs.",
      "0.9Ω":
        "Using the figures supplied, Zs = 0.43 + (2 × 20 × 0.00741) = 0.7264 Ω. Rounding gives 0.73 Ω rather than 0.9 Ω.",
      "1.2Ω":
        "A 1.2 Ω result would require substantially more conductor resistance than the question specifies. Neither the 20 m length nor the 7.41 mΩ/m value produces that total.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2024/100-may-2024/why-are-the-values-of-maximum-earth-fault-loop-impedance-different/",
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
    ],
  },
  {
    prompt:
      "It is important to verify readings and results with BS7671 in order to ensure:",
    options: [
      "The circuit is safe and within design parameters",
      "The instrument conforms to the latest regulations",
      "The test instrument is calibrated correctly",
      "The test instrument is providing the required readings",
    ],
    answer: "The circuit is safe and within design parameters",
    rationales: {
      "The instrument conforms to the latest regulations":
        "Instrument suitability is assessed against the relevant product standard and test specification, not inferred from an installation result. BS 7671 acceptance limits are used to judge the circuit.",
      "The test instrument is calibrated correctly":
        "Calibration or ongoing accuracy must be established through instrument checks and records. Comparing a circuit result with BS 7671 cannot prove that the tester itself is calibrated.",
      "The test instrument is providing the required readings":
        "The instrument reports the electrical quantity it measures; BS 7671 supplies criteria for interpreting that result. The comparison determines installation compliance, not whether the display produced a number.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/1696/ongoing-accuracy-of-test-instruments.pdf",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/model-forms/",
    ],
  },
  {
    prompt:
      "EAWR Regulation 14 has three cumulative conditions for work on or near live conductors. Which listed option states one of them?",
    options: [
      "A member of staff gives you permission",
      "It is unreasonable in all the circumstances for it to be dead",
      "Suitable PPE is worn",
      "Suitable tools are used",
    ],
    answer: "It is unreasonable in all the circumstances for it to be dead",
    rationales: {
      "A member of staff gives you permission":
        "Permission does not displace the legal test in Regulation 14. The dutyholder must establish that dead working is unreasonable and that the other statutory conditions are also satisfied.",
      "Suitable PPE is worn":
        "PPE may form part of suitable precautions, but wearing it does not by itself justify live work. Regulation 14 separately requires that dead working is unreasonable, live work is reasonable and suitable precautions are taken.",
      "Suitable tools are used":
        "Insulated or otherwise suitable tools are only one possible precaution. They cannot make live work lawful when the task could reasonably be carried out dead.",
    },
    sourceUrls: [
      "https://www.legislation.gov.uk/uksi/1989/635/regulation/14/made",
      "https://www.hse.gov.uk/pubns/priced/hsg85.pdf",
    ],
  },
] as const;
