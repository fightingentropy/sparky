export const initialVerificationTest8 = [
  {
    prompt:
      "In which system is a combined PEN conductor used in the distributor's supply and then separated into neutral and protective conductors at the installation?",
    options: ["TN-C", "TN-C-S", "TN-S", "TT"],
    answer: "TN-C-S",
    rationales: {
      "TN-C":
        "This arrangement keeps the protective and neutral functions combined in a PEN conductor throughout the system. It does not describe separation into distinct PE and neutral conductors at the installation.",
      "TN-S":
        "This arrangement uses separate neutral and protective conductors from the source onward. There is no combined PEN section that is split at the installation boundary.",
      TT: "This arrangement relies on the installation's local earth electrode rather than a distributor-provided protective conductor. The supply neutral and the installation earth therefore follow separate earthing paths.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/earthing-and-bonding-faqs/",
      "https://electrical.theiet.org/wiring-matters/years/2021/87-september-2021/tt-earthing-considerations/",
    ],
  },
  {
    prompt:
      "Which description best reflects the scope of the Electricity at Work Regulations 1989?",
    options: [
      "Electrical systems and work activities where electrical danger may arise",
      "High voltage systems only",
      "Special locations only",
      "Systems up to 1000 volts",
    ],
    answer:
      "Electrical systems and work activities where electrical danger may arise",
    rationales: {
      "High voltage systems only":
        "The Regulations are not confined to high-voltage equipment. Their duties apply wherever an electrical system or work activity can give rise to electrical danger, including ordinary low-voltage installations.",
      "Special locations only":
        "Bathrooms, construction sites and other special locations can require additional precautions, but they do not define the Regulations' reach. General workplaces and work on standard electrical systems are also covered.",
      "Systems up to 1000 volts":
        "There is no general upper scope limit of 1000 V in these Regulations. Duties are framed around electrical danger and work activity rather than this single voltage boundary.",
    },
    sourceUrls: [
      "https://www.legislation.gov.uk/uksi/1989/635/contents/made",
      "https://www.hse.gov.uk/pubns/priced/hsr25.pdf",
    ],
  },
  {
    prompt:
      "After periodic testing finds insulation resistance below the applicable minimum, who must immediately be informed so the observation and further action can be addressed?",
    options: [
      "Notify the local supply authority",
      "Notify the person ordering the work",
      "Protect the circuits with smaller sizes of fuses",
      "Put a warning notice on the supply intake position",
    ],
    answer: "Notify the person ordering the work",
    rationales: {
      "Notify the local supply authority":
        "A defect within the consumer's installation is not normally the distributor's responsibility. The client or dutyholder who commissioned the inspection needs the result so that its significance and remedial action can be addressed.",
      "Protect the circuits with smaller sizes of fuses":
        "Reducing an overcurrent-device rating does not restore failed insulation or control leakage through it. The cause must be investigated, reported and made safe through an appropriate agreed action.",
      "Put a warning notice on the supply intake position":
        "A generic label at the intake neither communicates the full finding to the responsible person nor corrects the defect. Any immediate-danger procedure must be proportionate to the actual risk and recorded in the report.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/jp2fl3ia/bs7671_eicr_a4.pdf",
      "https://www.hse.gov.uk/pubns/priced/hsr25.pdf",
    ],
  },
  {
    prompt:
      "On a new installation, which one of the following should be made available to the person conducting the inspection and test:",
    options: [
      "Details of the customer",
      "Previous test results",
      "Relevant charts, tables and diagrams",
      "Schedule of test results",
    ],
    answer: "Relevant charts, tables and diagrams",
    rationales: {
      "Details of the customer":
        "Contact information identifies the parties but does not describe the installation's intended circuit arrangements or design criteria. The inspector needs technical documentation against which the completed work can be verified.",
      "Previous test results":
        "A genuinely new installation has no earlier in-service results for comparison. Its verification instead begins from the design information and records the first set of measured values.",
      "Schedule of test results":
        "This schedule is produced as verification proceeds and records the measurements obtained. It is an output of inspection and testing, not the design information that must be available beforehand.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
      "https://electrical.theiet.org/media/tqxkkscw/bs7671_eic_a4.pdf",
    ],
  },
  {
    prompt:
      "What typical maximum Ze value is commonly used for TN-C-S design when distributor data is unavailable?",
    options: ["0.35 Ω", "0.8 Ω", "200 Ω", "21 Ω"],
    answer: "0.35 Ω",
    rationales: {
      "0.8 Ω":
        "This conventional design figure is associated with a TN-S supply, whose earth return commonly uses the distributor's metallic cable sheath. It is not the usual assumed figure for a PME-style supply.",
      "200 Ω":
        "This is associated with the IET warning that a high TT earth-electrode resistance may be unstable. It is many orders larger than the conventional external loop figure for a distributor-provided TN earth.",
      "21 Ω":
        "Such a high external loop impedance would not represent the normal design assumption for this supply arrangement. It would also make rapid operation of ordinary overcurrent protection much harder to achieve.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/earthing-and-bonding-faqs/",
      "https://electrical.theiet.org/wiring-matters/years/2021/87-september-2021/tt-earthing-considerations/",
    ],
  },
  {
    prompt:
      "When using a centre-contact (ES) lampholder, the outer contact must be connected to the:",
    options: [
      "Circuit protective conductor",
      "Neutral conductor",
      "Phase conductor",
      "Switch wire",
    ],
    answer: "Neutral conductor",
    rationales: {
      "Circuit protective conductor":
        "The threaded shell is a current-carrying contact for the lamp, not an exposed-conductive-part intended for fault protection. Connecting it to the cpc would create an earth fault when the lamp circuit was completed.",
      "Phase conductor":
        "The threaded shell is more accessible while a lamp is inserted or removed. Making it live would increase touch risk, so line belongs on the less accessible centre contact.",
      "Switch wire":
        "A switched line is still a line conductor and may be live whenever the control is on. It should feed the centre contact rather than the accessible threaded shell.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
      "https://shop.theiet.org/guidance-note-3-inspection-testing-10th-edition",
    ],
  },
  {
    prompt:
      "Given the following numbered tests, select the sequence in which these tests should be conducted for a new installation:- 1. functional 2. insulation resistance 3. polarity 4. continuity of final ring conductors 5. continuity of protective conductors:",
    options: ["1,3,4,5,2", "2,3,4,5,1", "4,5,3,2,1", "5,4,2,3,1"],
    answer: "5,4,2,3,1",
    rationales: {
      "1,3,4,5,2":
        "Functional testing is placed first even though the protective conductors and insulation have not been proved. Energisation or operation must wait until the safety-establishing dead tests are satisfactory.",
      "2,3,4,5,1":
        "This applies the insulation test before confirming continuity of protective and ring conductors. It also postpones both continuity checks until after polarity, contrary to the prescribed dead-test sequence.",
      "4,5,3,2,1":
        "Ring continuity should not precede the more fundamental continuity of protective conductors, and insulation resistance should precede polarity in this sequence. Only the final functional-test position is correct here.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
      "https://shop.theiet.org/guidance-note-3-inspection-testing-10th-edition",
    ],
  },
  {
    prompt:
      "Statement 1 - During dead initial verification, polarity is normally proved with an earth fault loop impedance tester. Statement 2 - A dead polarity test can confirm the correct conductor connections at an Edison screw lampholder:",
    options: [
      "Both statements are false",
      "Both statements are true",
      "Statement 1 is false, statement 2 is true",
      "Statement 1 is true, statement 2 is false",
    ],
    answer: "Statement 1 is false, statement 2 is true",
    rationales: {
      "Both statements are false":
        "The first statement is false because a loop instrument is for an energised impedance measurement, not the normal dead polarity method. The second is true because continuity checks can establish which conductor reaches each lampholder contact.",
      "Both statements are true":
        "A suitable low-resistance ohmmeter is normally used on the isolated circuit before energisation. Treating the loop instrument as the dead-test method makes the first statement incorrect even though the lampholder statement is valid.",
      "Statement 1 is true, statement 2 is false":
        "This reverses both judgements. Dead continuity testing, not a live loop measurement, proves initial polarity and can confirm line at the centre contact with neutral at the threaded shell.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
      "https://shop.theiet.org/guidance-note-3-inspection-testing-10th-edition",
    ],
  },
  {
    prompt:
      "Which test uses a low-resistance ohmmeter to verify the circuit protective conductor path from the consumer unit to circuit points?",
    options: [
      "Continuity",
      "Insulation Resistance",
      "Magnetic Field Test",
      "Polarity",
    ],
    answer: "Continuity",
    rationales: {
      "Insulation Resistance":
        "This test applies a specified DC voltage to assess leakage and separation between conductors. It does not measure the small end-to-end resistance of the protective path.",
      "Magnetic Field Test":
        "There is no prescribed initial-verification test by this name for proving a cpc path. Magnetic-field sensing may be used by a clamp instrument, but it cannot demonstrate an unbroken protective path to each circuit point.",
      Polarity:
        "This check verifies that line, neutral and protective conductors are connected to their intended terminals and that single-pole devices are in line. It can use low-resistance evidence but answers a different verification question.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
      "https://webstore.iec.ch/en/publication/60894",
    ],
  },
  {
    prompt:
      "If an insulation-resistance lump test at the main switch of a very large installation gives 0.45 MΩ, what should the electrician do next?",
    options: [
      "Report the entire installation as being satisfactory",
      "Report the entire installation as being unsatisfactory",
      "Reverse the meters test leads and re-test",
      "Test each circuit separately",
    ],
    answer: "Test each circuit separately",
    rationales: {
      "Report the entire installation as being satisfactory":
        "The combined result is below the usual minimum and cannot simply be accepted without investigation. Parallel leakage paths from many circuits may explain it, but individual results are needed to establish compliance.",
      "Report the entire installation as being unsatisfactory":
        "A low lump reading alone does not identify a defective circuit in a very large installation. Separating the circuits distinguishes a genuine insulation defect from the cumulative effect of many satisfactory parallel paths.",
      "Reverse the meters test leads and re-test":
        "Reversing DC test leads does not remove the parallel leakage paths responsible for the combined result. The installation must be divided into meaningful sections or circuits for diagnosis.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
      "https://electrical.theiet.org/wiring-matters/years/2020/81-july-2020/history-of-insulation-resistance-testing/",
    ],
  },
  {
    prompt:
      "A low-resistance ohmmeter used for continuity verification should have what open-circuit voltage and test current?",
    options: [
      "Voltage between 0V and 20V; short-circuit current of 1 mA",
      "Voltage between 0V and 24V; short-circuit current of 100 mA",
      "Voltage between 4V and 20V; short-circuit current of 1 mA",
      "Voltage between 4 V and 24 V; test current of at least 200 mA",
    ],
    answer: "Voltage between 4 V and 24 V; test current of at least 200 mA",
    rationales: {
      "Voltage between 0V and 20V; short-circuit current of 1 mA":
        "The voltage range incorrectly permits no effective test voltage, while the stated current is far too small for protective-conductor continuity verification. A substantial test current is needed to expose resistive joints reliably.",
      "Voltage between 0V and 24V; short-circuit current of 100 mA":
        "Although the upper voltage is plausible, the range still starts below the specified minimum and the current is only half the required level. Both instrument characteristics must meet the continuity-test recommendation.",
      "Voltage between 4V and 20V; short-circuit current of 1 mA":
        "The lower voltage boundary is suitable, but the current corresponds to insulation-tester capability rather than low-resistance continuity testing. It may fail to reveal a poor connection that behaves differently under a meaningful test current.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2019/75-may-2019/to-bond-or-not-to-bond/",
      "https://webstore.iec.ch/en/publication/60894",
    ],
  },
  {
    prompt:
      "Three circuits have individual insulation resistances of 80 MΩ, 60 MΩ and 30 MΩ. What approximate resistance is expected when they are tested together in parallel?",
    options: ["0.0625 MΩ", "15 MΩ", "16 MΩ", "160 MΩ"],
    answer: "16 MΩ",
    rationales: {
      "0.0625 MΩ":
        "The numerical value 0.0625 is the sum of the reciprocal resistances, with units of inverse megohms. It must be inverted to obtain the equivalent resistance of the parallel leakage paths.",
      "15 MΩ":
        "This is below the result of the reciprocal calculation and appears to be an unsupported rounding shortcut. Adding the three conductances and taking their reciprocal gives an exact whole-number result here.",
      "160 MΩ":
        "This exceeds every individual reading, which is impossible for resistance paths connected in parallel. Combining leakage conductances must produce a value below the lowest individual resistance.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2020/81-july-2020/history-of-insulation-resistance-testing/",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
    ],
  },
  {
    prompt:
      "During dead initial verification, which listed instrument is most suitable for proving polarity?",
    options: [
      "A bell set",
      "A high resistance ohmmeter",
      "A low resistance ohmmeter",
      "An insulation resistance tester",
    ],
    answer: "A low resistance ohmmeter",
    rationales: {
      "A bell set":
        "An improvised audible indicator does not provide the specified current, resolution or measured resistance needed for formal verification. It may indicate a path exists but cannot quantify its quality or meet instrument requirements.",
      "A high resistance ohmmeter":
        "This type of instrument is intended to measure very large resistance values rather than conductor continuity. Polarity proving needs reliable detection of a low-resistance connection on an isolated circuit.",
      "An insulation resistance tester":
        "This tester applies a much higher DC voltage to assess insulation leakage. It is not the appropriate mode for tracing low-resistance conductor paths and could damage connected equipment if misapplied.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
      "https://webstore.iec.ch/en/publication/60894",
    ],
  },
  {
    prompt:
      "When a live test is justified, which listed method directly determines prospective short-circuit current at the origin using a suitable instrument?",
    options: [
      "Calculation",
      "Direct measurement",
      "Functional testing",
      "Inspection",
    ],
    answer: "Direct measurement",
    rationales: {
      Calculation:
        "A value can legitimately be derived from reliable supply data and impedance, and this may avoid unnecessary exposure to live terminals. It is nevertheless an indirect determination rather than the instrument method specified in the question.",
      "Functional testing":
        "Operating controls and protective devices shows whether intended functions occur; it does not quantify the maximum available fault current. Breaking-capacity assessment requires a measured or reliably calculated prospective value.",
      Inspection:
        "Visual examination can identify device markings, conductor condition and the supply arrangement, but fault-current magnitude cannot be seen. Numerical evidence from the distributor, calculation or an appropriate instrument is required.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
      "https://webstore.iec.ch/en/publication/60893",
    ],
  },
  {
    prompt:
      "When performing an insulation resistance test on a two way lighting circuit, you should:",
    options: [
      "Bridge out the switches",
      "Ensure that both switches are in the off position",
      "Ensure that both switches are in the on position",
      "Operate the switches and repeat the test as needed",
    ],
    answer: "Operate the switches and repeat the test as needed",
    rationales: {
      "Bridge out the switches":
        "Temporary bridging changes the circuit and can create an unsafe alteration or leave a link behind. Normal switch operation allows each strapper and switched path to be included without defeating the installed controls.",
      "Ensure that both switches are in the off position":
        "One fixed combination leaves some two-way conductors disconnected from the test path. A satisfactory reading in that state cannot demonstrate the insulation condition of every switched route.",
      "Ensure that both switches are in the on position":
        "There is no universal on state for a pair of two-way controls, and one arrangement still selects only part of the switching network. Different positions must be exercised so every live conductor is assessed.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
      "https://shop.theiet.org/guidance-note-3-inspection-testing-10th-edition",
    ],
  },
  {
    prompt:
      "A circuit Zs measures 0.83 Ω at 20 °C. If its conductors operate at 70 °C using a factor of 1.2 and Ze = 0.40 Ω, what is the corrected Zs?",
    options: ["0.43 Ω", "0.86 Ω", "0.916 Ω", "0.996 Ω"],
    answer: "0.916 Ω",
    rationales: {
      "0.43 Ω":
        "This is only the measured circuit-conductor portion after subtracting the external impedance: 0.83 − 0.40. It has not yet been temperature-corrected or recombined with the supply portion.",
      "0.86 Ω":
        "This result appears to double the uncorrected circuit resistance and omits the stated temperature method. The circuit portion must first be multiplied by 1.2 before the unchanged external value is added back.",
      "0.996 Ω":
        "This is obtained by multiplying the entire measured loop value by 1.2. That incorrectly applies the cable-temperature factor to the external supply impedance as well as the installation conductors.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2024/100-may-2024/why-are-the-values-of-maximum-earth-fault-loop-impedance-different/",
      "https://shop.theiet.org/guidance-note-3-inspection-testing-10th-edition",
    ],
  },
  {
    prompt:
      "When measuring the resistance of 100m of 2.5mm² conductor the most suitable range for the instrument would be:",
    options: ["0 to 2Ω", "10 to 20Ω", "2 to 10Ω", "20 to 50Ω"],
    answer: "0 to 2Ω",
    rationales: {
      "10 to 20Ω":
        "The expected copper-conductor resistance is only about 0.74 Ω at the reference temperature. A range beginning at 10 Ω cannot resolve or even include that value properly.",
      "2 to 10Ω":
        "The predicted reading lies below this range's lower boundary. Selecting it would sacrifice the ability to measure the conductor at all, whereas a low-ohms range provides suitable resolution.",
      "20 to 50Ω":
        "This scale is tens of times higher than the expected value from 7.41 mΩ/m over 100 m. It is unsuitable for an accurate low-resistance conductor measurement.",
    },
    sourceUrls: [
      "https://shop.theiet.org/on-site-guide-bs-7671-2018-a4-2026-9th-edition",
      "https://webstore.iec.ch/en/publication/60894",
    ],
  },
  {
    prompt: "A polarity test is conducted to verify that:",
    options: [
      "Single-pole protective and switching devices are connected in the line conductor",
      "The circuit protection will operate within limits",
      "The resistance is low enough to operate the protective device within the specified time",
      "There is no breakdown of the conductor's insulation",
    ],
    answer:
      "Single-pole protective and switching devices are connected in the line conductor",
    rationales: {
      "The circuit protection will operate within limits":
        "Protective-device performance depends on device characteristics, fault-loop conditions and, where relevant, RCD testing. Correct conductor assignment alone does not establish operating time or breaking capacity.",
      "The resistance is low enough to operate the protective device within the specified time":
        "This is an earth-fault loop impedance or continuity consideration. Polarity establishes where conductors and single-pole devices are connected, not whether the completed fault path meets a disconnection-time limit.",
      "There is no breakdown of the conductor's insulation":
        "Insulation resistance testing detects leakage or deterioration between conductors. Polarity verification cannot assess the dielectric condition of cable insulation.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
      "https://shop.theiet.org/guidance-note-3-inspection-testing-10th-edition",
    ],
  },
  {
    prompt:
      "It is important to test a new installation in the correct sequence because:",
    options: [
      "Each test relies on the previous to be correct",
      "It is easy to remember",
      "It is more convenient",
      "The sequence is stated in GN3",
    ],
    answer: "Each test relies on the previous to be correct",
    rationales: {
      "It is easy to remember":
        "Memorability is useful for training but is not the safety basis for the sequence. Early inspection and dead tests establish conditions that must be known before later tests and energisation can be justified.",
      "It is more convenient":
        "Convenience cannot determine the order of safety-critical verification. The sequence is arranged so that faults such as a broken protective conductor or poor insulation are found before live measurements are attempted.",
      "The sequence is stated in GN3":
        "Guidance Note 3 documents and explains the sequence, but publication alone is not the engineering reason for following it. The dependency and safety of later tests on satisfactory earlier results is the operative reason.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
      "https://shop.theiet.org/guidance-note-3-inspection-testing-10th-edition",
    ],
  },
  {
    prompt:
      "What quantity does the jaw of a clamp (tong) ammeter measure without opening the conductor?",
    options: ["Current", "Frequency", "Resistance", "Voltage"],
    answer: "Current",
    rationales: {
      Frequency:
        "Some multifunction instruments may derive signal rate as an additional function, but that is not the jaw's defining measurement here. The clamp senses the magnetic field produced around a current-carrying conductor.",
      Resistance:
        "An ohmic measurement requires an isolated component and an instrument-applied test signal, normally through leads. A magnetic clamp around an intact conductor cannot perform that dead test.",
      Voltage:
        "Potential difference is measured between two points using appropriately rated probes. Encircling a single conductor with the jaw does not establish the two electrical reference points needed for that quantity.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/neutral-current-diversion-ncd-industry-research-update/",
    ],
  },
  {
    prompt:
      "If ring-final end-to-end readings are r1 = 0.9 Ω and r2 = 0.9 Ω, what theoretical cross-connected R1+R2 value is expected?",
    options: ["0.225 Ω", "0.45 Ω", "0.9 Ω", "1.8 Ω"],
    answer: "0.45 Ω",
    rationales: {
      "0.225 Ω":
        "This divides only one 0.9 Ω end-to-end result by four and omits the other conductor. The theoretical relationship first adds r1 and r2, then divides their total by four.",
      "0.9 Ω":
        "This is one complete conductor's end-to-end resistance, not the cross-connected reading at a point on the ring. The two parallel paths reduce the expected line-to-cpc value.",
      "1.8 Ω":
        "This is the sum of the two separate end-to-end readings before accounting for the cross-connections and parallel paths. The expected point value is one quarter of that sum.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2022/89-march-2022/resistance-readings-for-step-3-of-the-ring-final-circuit-test/",
      "https://shop.theiet.org/guidance-note-3-inspection-testing-10th-edition",
    ],
  },
  {
    prompt:
      "The On-Site Guide gives R1+R2 = 19.51 mΩ/m for 2.5 mm² line and 1.5 mm² cpc conductors. What approximate resistance is expected for a 25 m circuit?",
    options: ["0.488 Ω", "4.87 Ω", "487 Ω", "780 Ω"],
    answer: "0.488 Ω",
    rationales: {
      "4.87 Ω":
        "This is ten times the calculated resistance and results from a decimal-place error. Multiplying 19.51 mΩ/m by 25 m gives 487.75 mΩ, which is 0.48775 Ω.",
      "487 Ω":
        "This treats the numerical result in milliohms as though it were already in ohms. Dividing 487.75 mΩ by 1000 is required before rounding the result to three decimal places.",
      "780 Ω":
        "This value is incompatible with the stated combined resistance per metre and length. A short copper final circuit cannot acquire hundreds of ohms from 19.51 mΩ/m over only 25 m.",
    },
    sourceUrls: [
      "https://shop.theiet.org/on-site-guide-bs-7671-2018-a4-2026-9th-edition",
      "https://electrical.theiet.org/wiring-matters/years/2022/89-march-2022/resistance-readings-for-step-3-of-the-ring-final-circuit-test/",
    ],
  },
  {
    prompt:
      "At the specified minimum acceptable insulation resistance, what minimum test current must an insulation-resistance tester be capable of delivering at its test voltage?",
    options: ["0.5 mA", "1.0 mA", "2.0 mA", "20 mA"],
    answer: "1.0 mA",
    rationales: {
      "0.5 mA":
        "Half a milliampere is below the specified minimum output capability at the relevant limiting resistance. An instrument meeting only that level may not maintain an effective verification voltage under the prescribed load.",
      "2.0 mA":
        "Two milliamperes is not the standard's stated minimum performance value for this check. An instrument may have additional output capability, but the recognised threshold used to specify compliance is one milliampere.",
      "20 mA":
        "This is twenty times the specified benchmark and is not the required minimum for an insulation tester. Confusing a much larger current with the verification requirement misstates the instrument characteristic.",
    },
    sourceUrls: [
      "https://webstore.iec.ch/en/publication/60892",
      "https://electrical.theiet.org/wiring-matters/years/2020/81-july-2020/history-of-insulation-resistance-testing/",
    ],
  },
  {
    prompt:
      "What current was applied during the former 5 IΔn field test on a 30 mA RCD?",
    options: ["150mA", "15mA", "300mA", "30mA"],
    answer: "150mA",
    rationales: {
      "15mA":
        "This is one half of the device's rated residual operating current, not five times it. A half-rated test is associated with confirming non-operation rather than the former high-current trip-time check.",
      "300mA":
        "This is ten times the device rating, so it doubles the current described by the former test. The multiplier must be applied directly to the 30 mA rating.",
      "30mA":
        "This equals IΔn and is the current used for the prescribed current-version AC operating-time verification. It is not the historical five-times-rating value asked for here.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2022/91-july-2022/changes-to-rcd-testing-in-bs-76712018plusa22022/",
      "https://webstore.iec.ch/en/publication/60896",
    ],
  },
  {
    prompt:
      "The maximum tabulated Zs is 2.82 Ω. Using the 0.8 rule of thumb, what maximum ambient measured value is used for comparison?",
    options: ["2.256 Ω", "3.525 Ω", "4.4 Ω", "5.2 Ω"],
    answer: "2.256 Ω",
    rationales: {
      "3.525 Ω":
        "This divides the tabulated maximum by 0.8 and therefore raises the comparison limit. The rule deliberately reduces the tabulated value to allow for conductor resistance increasing with temperature.",
      "4.4 Ω":
        "This does not result from applying the stated factor to 2.82 Ω. It would permit a measured loop impedance substantially above the protective-device table value.",
      "5.2 Ω":
        "This is almost twice the tabulated maximum and has no basis in the 0.8 calculation. Such an elevated limit would remove rather than provide the intended temperature allowance.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2024/100-may-2024/why-are-the-values-of-maximum-earth-fault-loop-impedance-different/",
      "https://shop.theiet.org/guidance-note-3-inspection-testing-10th-edition",
    ],
  },
  {
    prompt:
      "Which document records the measured test results for the installation's circuits?",
    options: [
      "Inspection schedule",
      "Schedule certificate",
      "Schedule of inspection",
      "Schedule of test results",
    ],
    answer: "Schedule of test results",
    rationales: {
      "Inspection schedule":
        "This wording refers to the visual-inspection checklist rather than the circuit measurement table. It records whether installation items were inspected, not each instrument value obtained.",
      "Schedule certificate":
        "This is not the title of a BS 7671 model form. Certification and its supporting schedules have defined purposes and should not be replaced by an invented document name.",
      "Schedule of inspection":
        "This schedule records outcomes for visual checks such as basic protection, identification and equipment selection. Numerical continuity, insulation, loop and RCD readings belong on the separate test-results schedule.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/tqxkkscw/bs7671_eic_a4.pdf",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/model-forms/",
    ],
  },
  {
    prompt:
      "What prospective earth-fault current is calculated at the origin of a 230 V TN-C-S installation when Ze = 0.22 Ω?",
    options: ["0.88 kA", "1.045 kA", "50 kA", "9.5 kA"],
    answer: "1.045 kA",
    rationales: {
      "0.88 kA":
        "This does not result from dividing the stated line-to-earth voltage by the external loop impedance. Applying Ohm's law gives 1045 A before conversion to kiloamperes.",
      "50 kA":
        "A value this large would require a loop impedance of only about 0.0046 Ω at 230 V. That is incompatible with the stated external impedance.",
      "9.5 kA":
        "This would correspond to an impedance near 0.024 Ω, roughly one ninth of the value provided. The decimal and kiloampere conversion cannot produce this result from the given data.",
    },
    sourceUrls: [
      "https://webstore.iec.ch/en/publication/60893",
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
    ],
  },
  {
    prompt:
      "For how long does IET guidance recommend retaining installation inspection and test records?",
    options: [
      "For one year",
      "For ten years",
      "For the working life of the installation",
      "For three years",
    ],
    answer: "For the working life of the installation",
    rationales: {
      "For one year":
        "This interval provides almost no long-term evidence for identifying deterioration or understanding alterations. Verification documents should remain with the installation for use by later owners, designers and inspectors.",
      "For ten years":
        "A fixed decade may expire while the installation remains in service and still needs its historical baseline. The guidance links retention to the installation's service life rather than a universal calendar period.",
      "For three years":
        "Three years is not the general retention recommendation and may be shorter than the interval to the next periodic assessment. Discarding records then would hinder meaningful comparison of future test results.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/jp2fl3ia/bs7671_eicr_a4.pdf",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/model-forms/",
    ],
  },
  {
    prompt:
      "After the installation of a new shower circuit the customer should be provided with:",
    options: [
      "A building control notification",
      "A minor works certificate",
      "A periodic inspection report",
      "An electrical installation certificate",
    ],
    answer: "An electrical installation certificate",
    rationales: {
      "A building control notification":
        "Building Regulations notification may be separately required for notifiable domestic work, but it is not the BS 7671 certification of design, construction and verification. It cannot replace the installation certificate for the new circuit.",
      "A minor works certificate":
        "The Minor Electrical Installation Works Certificate explicitly excludes provision of a new circuit. A shower circuit therefore falls within Electrical Installation Certificate scope even if the physical job is small.",
      "A periodic inspection report":
        "An EICR assesses the condition of an existing installation for continued service. It does not certify responsibility for the design, construction, inspection and testing of this newly installed circuit.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/tqxkkscw/bs7671_eic_a4.pdf",
      "https://electrical.theiet.org/media/f0hlqxq1/bs7671_meiwc_a4.pdf",
    ],
  },
  {
    prompt:
      "When completing an installation certificate under 'Number and Type of Live Conductors', the 3-phase, 4-wire box should be ticked if the supply is:",
    options: [
      "2-phase, neutral and earth",
      "3-phase and neutral",
      "3-phase, and earth",
      "Four single phase supplies",
    ],
    answer: "3-phase and neutral",
    rationales: {
      "2-phase, neutral and earth":
        "A protective conductor is not counted as a live conductor, so this arrangement has only three live conductors. It also lacks the third phase identified by the certificate category.",
      "3-phase, and earth":
        "The three phase conductors are live, but the protective conductor is excluded from the wire count. Without a neutral this is a three-phase, three-wire supply for certificate purposes.",
      "Four single phase supplies":
        "Separate single-phase supplies do not become one three-phase system merely because four conductors or feeds are present. The designation describes three phase conductors sharing one neutral in a common system.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/tqxkkscw/bs7671_eic_a4.pdf",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/model-forms/",
    ],
  },
] as const;
