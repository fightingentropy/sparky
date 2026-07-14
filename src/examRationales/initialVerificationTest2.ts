export const initialVerificationTest2 = [
  {
    prompt: "Increasing the length of the cable will not affect the:",
    options: [
      "Insulation resistance",
      "Loop impedance",
      "Rating of the protective device",
      "Volt-drop",
    ],
    answer: "Rating of the protective device",
    rationales: {
      "Insulation resistance":
        "A longer cable presents more insulation surface and more leakage paths in parallel, so the measured value normally falls as circuit length increases. Cable length therefore can change this test result even when the insulation is sound.",
      "Loop impedance":
        "Adding cable adds resistance in both the line conductor and the fault-return path. That extra R1 + R2 raises the total line-to-earth fault-path value.",
      "Volt-drop":
        "Cable voltage drop is proportional to route length for a given load current and conductor size. Extending the run therefore increases the drop between the origin and the load.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
      "https://electrical.theiet.org/wiring-matters/years/2023/96-july-2023/how-voltage-drop-can-affect-ev-charging-point-open-pen-detection-devices/",
    ],
  },
  {
    prompt:
      "Electrical equipment installed within zone 0 of a bathroom shall have a minimum protection of?",
    options: ["IP4X", "IP7X", "IPX4", "IPX7"],
    answer: "IPX7",
    rationales: {
      IP4X: "The first IP digit describes protection against access and solid objects, not water. Zone 0 equipment needs an enclosure rated for the immersion risk inside the bath or shower basin.",
      IP7X: "This reverses the IP-code positions and is not a valid way to specify immersion protection. Water protection is expressed by the second characteristic digit, with X used when no solids rating is stated.",
      IPX4: "This rating covers splashing water, which is the usual minimum for zones 1 and 2. It does not establish protection against the temporary immersion expected in zone 0.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/1450/section-701.pdf",
      "https://electrical.theiet.org/wiring-matters/years/2019/77-september-2019/bs-76712018-frequently-asked-questions/",
    ],
  },
  {
    prompt:
      "Identify one of the following which is not classed as a live conductor?",
    options: [
      "Circuit protective conductor",
      "Line conductor",
      "Neutral conductor",
      "Switch wire",
    ],
    answer: "Circuit protective conductor",
    rationales: {
      "Line conductor":
        "This conductor is intentionally energized in normal operation and supplies the load. It therefore falls directly within the definition of a live conductor.",
      "Neutral conductor":
        "BS 7671 includes the neutral in the live-conductor definition because it carries operating current and can rise above earth potential. Its connection near earth potential at the source does not make it a protective conductor.",
      "Switch wire":
        "A switched line becomes energized whenever its control switch closes. Its intermittent duty does not change its classification as a line, and therefore live, conductor.",
    },
    sourceUrls: [
      "https://www.legislation.gov.uk/uksi/1989/635/regulation/2/made",
      "https://www.hse.gov.uk/pubns/priced/hsr25.pdf",
    ],
  },
  {
    prompt:
      "An extension to an existing circuit protected by a fuse is to be tested. Before this work can proceed?",
    options: [
      "A warning notice must be issued to the client",
      "An RCD must be installed and its operation confirmed as satisfactory",
      "Testing may continue without warning notices if the premises is un-occupied",
      "The circuit must be isolated, proven dead and warning notices erected",
    ],
    answer: "The circuit must be isolated, proven dead and warning notices erected",
    rationales: {
      "A warning notice must be issued to the client":
        "Telling the client does not disconnect the supply or prevent somebody from replacing the fuse. Safe work requires controlled isolation and proof of dead at the conductors concerned.",
      "An RCD must be installed and its operation confirmed as satisfactory":
        "Residual-current protection can reduce the duration of some faults, but it is not a substitute for making the circuit dead. The work must first be isolated regardless of whether an RCD is present.",
      "Testing may continue without warning notices if the premises is un-occupied":
        "An empty room does not prevent another person from arriving or restoring the supply. The point of isolation still has to be secured and clearly identified for the duration of the work.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/pubns/priced/hsg85.pdf",
      "https://www.hse.gov.uk/pubns/priced/gs38.pdf",
    ],
  },
  {
    prompt:
      "Which regulations specifically require electrical systems to be maintained so far as necessary to prevent danger?",
    options: [
      "Electricity at Work Regulations 1989",
      "Health and Safety at Work Act 1974",
      "Management of Health and Safety at Work Regulations 1999",
      "Provision and Use of Work Equipment Regulations 1998",
    ],
    answer: "Electricity at Work Regulations 1989",
    rationales: {
      "Health and Safety at Work Act 1974":
        "The Act establishes broad duties for employers and others, but it does not state the specific electrical-system maintenance duty tested here. That detailed requirement appears in the electrical regulations made under the Act.",
      "Management of Health and Safety at Work Regulations 1999":
        "These regulations concern risk assessment, arrangements and cooperation across workplace hazards. They do not contain the direct duty to maintain electrical systems so as to prevent danger.",
      "Provision and Use of Work Equipment Regulations 1998":
        "PUWER includes maintenance duties for work equipment and may overlap where electrical equipment is used at work. The question asks for the legislation that expressly applies the maintenance duty to electrical systems and equipment.",
    },
    sourceUrls: [
      "https://www.legislation.gov.uk/uksi/1989/635/regulation/4/made",
      "https://www.hse.gov.uk/pubns/priced/hsr25.pdf",
    ],
  },
  {
    prompt:
      "Before using a multifunction tester it is most important to check for?",
    options: [
      "A calibration date",
      "A known manufacturer",
      "Damage to the instrument",
      "The correct length leads",
    ],
    answer: "Damage to the instrument",
    rationales: {
      "A calibration date":
        "Calibration status matters for confidence in recorded measurements, but a current date cannot make a cracked case, damaged lead or exposed conductor safe. A pre-use condition check addresses the immediate shock and short-circuit hazards.",
      "A known manufacturer":
        "Brand familiarity does not prove that this particular tester is undamaged, correctly rated or serviceable. Suitability is established from its specification, markings and physical condition.",
      "The correct length leads":
        "Lead reach may affect convenience and the chosen test method, but length alone is not the primary safety check. The leads, probes, insulation, guards and connectors must first be inspected for defects.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/pubns/books/gs38.htm",
      "https://www.hse.gov.uk/pubns/priced/gs38.pdf",
    ],
  },
  {
    prompt:
      "What is the main measurement problem if lamps and electronic control gear remain connected during an insulation-resistance test?",
    options: [
      "Circuit damage",
      "False readings",
      "Incorrect polarity",
      "Test instrument damage",
    ],
    answer: "False readings",
    rationales: {
      "Circuit damage":
        "Sensitive electronic lighting equipment can be harmed by an unsuitable test, so all connected equipment must be assessed before testing. For an ordinary lamp left across the conductors, however, the direct test consequence is a parallel conductive path that depresses the measured insulation value.",
      "Incorrect polarity":
        "Leaving a load connected cannot exchange the line and neutral terminations. Polarity is a wiring relationship verified separately by inspection and continuity testing.",
      "Test instrument damage":
        "An insulation tester is designed to apply its selected DC test voltage into a resistance. A connected lamp primarily changes the circuit presented to the tester; it does not normally damage the instrument itself.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
      "https://webstore.iec.ch/en/publication/60892",
    ],
  },
  {
    prompt: "For a 230v installation, the test voltage is?",
    options: ["230v", "5000v", "500v", "50v"],
    answer: "500v",
    rationales: {
      "230v":
        "The nominal operating voltage is not the prescribed DC insulation-test setting. A standard low-voltage circuit up to and including 500 V is normally verified at a higher 500 V DC test level.",
      "5000v":
        "This is ten times the required setting and can overstress cable insulation and connected equipment. It is outside the BS 7671 initial-verification table for a normal 230 V circuit.",
      "50v":
        "Such a low test level may fail to reveal insulation weakness that appears at the prescribed voltage. It is not the standard setting for a conventional mains circuit.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
      "https://webstore.iec.ch/en/publication/60892",
    ],
  },
  {
    prompt:
      "A polarity test is performed on Edison screw lampholders to?",
    options: [
      "Ensure that the cpc is continuous throughout the circuit",
      "Ensure that there is no breakdown in insulation",
      "Ensure the centre contact is connected to the line conductor",
      "Ensure the centre contact is not connected to the line conductor",
    ],
    answer: "Ensure the centre contact is connected to the line conductor",
    rationales: {
      "Ensure that the cpc is continuous throughout the circuit":
        "Protective-conductor continuity is a separate test of the earth path. A screw lampholder polarity check is concerned with which live conductor reaches each contact.",
      "Ensure that there is no breakdown in insulation":
        "Insulation resistance testing checks leakage between conductors and earth. It does not establish whether the line has been connected to the safer, less accessible contact in the holder.",
      "Ensure the centre contact is not connected to the line conductor":
        "Putting the neutral on the centre would leave the threaded shell connected to line. That increases the chance of touching a live part while inserting or removing a lamp.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
      "https://electrical.theiet.org/media/2218/bs_7671_2018-model_forms-all.pdf",
    ],
  },
  {
    prompt:
      "The correct formula for calculating earth fault loop impedance is?",
    options: [
      "Ze=Zs+R1+R2",
      "Ze=Zs-R1+R2",
      "Ze=Zs/R1+R2",
      "Zs=Ze+R1+R2",
    ],
    answer: "Zs=Ze+R1+R2",
    rationales: {
      "Ze=Zs+R1+R2":
        "External impedance is only the supply-side part of the complete loop. If it is derived from a measured circuit value, both circuit-conductor resistances have to be subtracted, not added.",
      "Ze=Zs-R1+R2":
        "This removes the line resistance but then adds the protective-conductor resistance. The correct rearrangement is Ze = Zs - (R1 + R2).",
      "Ze=Zs/R1+R2":
        "The loop sections are in series during a line-to-earth fault, so their impedances add. Dividing the circuit value by a conductor resistance is dimensionally and electrically incorrect.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
    ],
  },
  {
    prompt:
      "Isolation' means the disconnection and separation of the electrical equipment from every source of electrical energy in such a way that?",
    options: [
      "Adequate precautions have been taken",
      "Is familiar with all operatives concerned with the installation",
      "The supply cannot be re-instated",
      "This disconnection and separation is secure",
    ],
    answer: "This disconnection and separation is secure",
    rationales: {
      "Adequate precautions have been taken":
        "This is a general safety statement rather than the defining condition for isolation. The definition focuses on secure disconnection and separation from every source of electrical energy.",
      "Is familiar with all operatives concerned with the installation":
        "Knowing the people involved neither separates the equipment from energy nor controls the isolating device. The wording also does not describe any electrical state of the installation.",
      "The supply cannot be re-instated":
        "Isolation must prevent inadvertent reconnection while work is in progress, but it is not intended to make future restoration permanently impossible. An authorized person can re-energize after the lock, notice and work controls are removed.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2023/94-march-2023/isolation-and-switching-for-mechanical-maintenance/",
      "https://www.legislation.gov.uk/uksi/1989/635/regulation/12/made",
    ],
  },
  {
    prompt: "Prior to energising, polarity should be tested using?",
    options: [
      "An earth fault loop impedance tester",
      "A continuity tester or low-resistance ohmmeter",
      "A two-pole voltage indicator on the energised circuit",
      "An insulation resistance tester at 500 V DC",
    ],
    answer: "A continuity tester or low-resistance ohmmeter",
    rationales: {
      "An earth fault loop impedance tester":
        "A loop tester ordinarily requires an energized supply and measures the fault-loop path. It is neither necessary nor appropriate for a polarity check expressly carried out before energization.",
      "A two-pole voltage indicator on the energised circuit":
        "This method depends on the circuit already being live, contrary to the stated stage of verification. Polarity can be established more safely by dead continuity testing.",
      "An insulation resistance tester at 500 V DC":
        "This instrument applies a high DC voltage to measure leakage through insulation. It does not identify the intended line and neutral termination sequence at accessories.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
      "https://webstore.iec.ch/en/publication/60894",
    ],
  },
  {
    prompt:
      "During a ring-final continuity test, ten sockets give R1+R2 of 0.68 Ω. If the connections are sound and one stable reading is 0.92 Ω, what circuit feature could explain it?",
    options: [
      "A high resistance fault",
      "A missing earth connection",
      "A short circuit",
      "A spur on the circuit",
    ],
    answer: "A spur on the circuit",
    rationales: {
      "A high resistance fault":
        "A loose or resistive connection can also raise a local result and should be ruled out by inspection and repeat testing. In the textbook pattern given, however, one sound but consistently longer path is characteristic of an outlet connected by a spur.",
      "A missing earth connection":
        "An open protective conductor would normally produce an over-range or infinite result at the affected point. A finite value only moderately above the uniform ring readings shows that a return path still exists.",
      "A short circuit":
        "An unintended low-resistance connection tends to depress the reading and may create abnormal continuity between conductors. It does not explain a single outlet having the longer measured path shown here.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/qxhf2est/guidance-note-3-2022-ninth-edition-first-printing-errata-november-2024.pdf",
      "https://electrical.theiet.org/wiring-matters/years/2022/89-march-2022/resistance-readings-for-step-3-of-the-ring-final-circuit-test/",
    ],
  },
  {
    prompt:
      "When measuring R1 + R2 with a multifunction tester, the correct scale to be reading would be in?",
    options: ["M/Ω", "Milliamps", "Ohms", "kV"],
    answer: "Ohms",
    rationales: {
      "M/Ω":
        "This is not a valid unit symbol for the low resistance of a conductor path. Megaohms are used for insulation resistance, whereas R1 + R2 is normally a small fraction of an ohm or a few ohms.",
      Milliamps:
        "Milliamperes measure electric current, not resistance. Although the tester injects a test current, the displayed continuity result is the resistance calculated from that current and the resulting voltage.",
      kV: "Kilovolts measure potential difference at thousands of volts. A protective-conductor continuity test reports the resistance of the line and CPC path, not a test-voltage value.",
    },
    sourceUrls: [
      "https://webstore.iec.ch/en/publication/60894",
      "https://www.bipm.org/documents/20126/41483022/SI-Brochure-9-EN.pdf/2d2b50bf-f2b4-9661-f402-5f9d66e4b507?version=4.0",
    ],
  },
  {
    prompt:
      "On a typical 230 V circuit (IR test at 500 V DC), which insulation resistance value should be investigated as good practice?",
    options: ["0.5MΩ", "2.0MΩ", "2.5MΩ", "5MΩ"],
    answer: "2.0MΩ",
    rationales: {
      "0.5MΩ":
        "This is below the 1 MΩ minimum for the stated test conditions. It is a failed result requiring correction rather than merely a precautionary investigation of an otherwise compliant value.",
      "2.5MΩ":
        "This is above both the mandatory minimum and the commonly used low-reading investigation threshold. It may still be compared with design or historic results, but the number alone does not trigger that particular good-practice warning.",
      "5MΩ":
        "This comfortably exceeds the minimum and is not close to the low-value threshold in the question. Investigation could be justified by an adverse trend, but no such history is supplied.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2020/81-july-2020/history-of-insulation-resistance-testing/",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
    ],
  },
  {
    prompt:
      "It is a good idea when performing an insulation resistance test on a large installation, to subdivide circuits to avoid?",
    options: [
      "Confusion over readings",
      "Excessively high readings",
      "False readings from parallel resistances",
      "False readings from series resistances",
    ],
    answer: "False readings from parallel resistances",
    rationales: {
      "Confusion over readings":
        "Clear labels and test records address identification errors. Electrical subdivision is needed because multiple connected leakage paths alter the value the instrument measures, even when the tester knows which circuits are included.",
      "Excessively high readings":
        "Connecting additional insulation paths in parallel lowers the combined resistance below the individual circuit values. The problem is therefore an unexpectedly low aggregate result, not an inflated one.",
      "False readings from series resistances":
        "Separate circuits joined at a distribution board present their insulation leakage paths in parallel between live conductors and earth. They are not cascaded end-to-end as a series network.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2020/81-july-2020/history-of-insulation-resistance-testing/",
      "https://www.megger.com/en-gb/et-online/july-2021/testing-parallel-resistances",
    ],
  },
  {
    prompt:
      "The insulation resistance of two circuits is 40 MΩ and 36 MΩ respectively. When tested together, what is their approximate total insulation resistance?",
    options: ["19 MΩ", "22MΩ", "4MΩ", "76MΩ"],
    answer: "19 MΩ",
    rationales: {
      "22MΩ":
        "Parallel resistance is found from 1/Rtotal = 1/40 + 1/36. That calculation gives about 18.95 MΩ, so this proposed value is too high.",
      "4MΩ":
        "The difference between the two individual readings is not their combined resistance. Parallel paths reduce the result below 36 MΩ, but not to the simple numerical difference.",
      "76MΩ":
        "Adding the two values directly treats the circuits as series resistances. During a combined insulation test their leakage paths are in parallel, so the total must be below the lower individual reading.",
    },
    sourceUrls: [
      "https://www.megger.com/en-gb/et-online/july-2021/testing-parallel-resistances",
      "https://webstore.iec.ch/en/publication/60892",
    ],
  },
  {
    prompt: "MΩ is the abbreviation used for:?",
    options: ["Mega-Ohms", "Megger-Ohms", "Micro-Ohms", "Milli-Ohms"],
    answer: "Mega-Ohms",
    rationales: {
      "Megger-Ohms":
        "Megger is a manufacturer name and a colloquial name for an insulation tester, not an SI prefix. The capital M in the unit symbol has a defined factor of one million.",
      "Micro-Ohms":
        "The micro prefix has the symbol µ and represents 10⁻⁶. Replacing it with a capital M changes the scale by twelve orders of magnitude.",
      "Milli-Ohms":
        "The milli prefix uses a lower-case m and represents 10⁻³. Capitalization is significant in SI notation, so mΩ and MΩ are very different resistance ranges.",
    },
    sourceUrls: [
      "https://www.bipm.org/documents/20126/41483022/SI-Brochure-9-EN.pdf/2d2b50bf-f2b4-9661-f402-5f9d66e4b507?version=4.0",
    ],
  },
  {
    prompt: "A minor works certificate shall be issued where?",
    options: [
      "An additional circuit is connected to an installation",
      "An alteration not requiring an additional circuit is needed",
      "The property current demand is to be increased",
      "Work is carried out in a domestic situation only",
    ],
    answer: "An alteration not requiring an additional circuit is needed",
    rationales: {
      "An additional circuit is connected to an installation":
        "The model minor-works form expressly excludes the provision of a new circuit. A new circuit needs an Electrical Installation Certificate and the applicable schedules.",
      "The property current demand is to be increased":
        "A demand change is a design consideration, not a certificate category. The correct form depends on the extent of the physical installation work, especially whether a new circuit is provided.",
      "Work is carried out in a domestic situation only":
        "The form is not restricted to dwellings. It can document a qualifying small addition or alteration in any installation within its stated scope.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/f0hlqxq1/bs7671_meiwc_a4.pdf",
      "https://electrical.theiet.org/media/tqxkkscw/bs7671_eic_a4.pdf",
    ],
  },
  {
    prompt:
      "Which instrument is suitable for proving dead during a safe-isolation procedure?",
    options: [
      "Earth fault loop impedance tester",
      "Multi-meter",
      "Non-contact voltage stick",
      "Two-pole voltage indicator compliant with GS38",
    ],
    answer: "Two-pole voltage indicator compliant with GS38",
    rationales: {
      "Earth fault loop impedance tester":
        "A loop tester is made to measure an energised earth-fault loop. It is not the simple two-pole proving-dead instrument required for checking every relevant conductor combination.",
      "Multi-meter":
        "A multimeter can be on the wrong function or range, have a failed internal fuse, or present a high-impedance ghost-voltage reading. GS38 recommends a purpose-designed two-pole indicator instead.",
      "Non-contact voltage stick":
        "A non-contact stick senses an electric field and can miss screened conductors or respond to capacitive coupling. It cannot prove the absence of voltage between two defined points."
    },
    sourceUrls: [
      "https://www.hse.gov.uk/pubns/priced/gs38.pdf",
      "https://www.hse.gov.uk/pubns/priced/hsg85.pdf",
    ],
  },
  {
    prompt: "The test instrument that would give a value in MΩ would be?",
    options: [
      "Earth fault loop impedance tester",
      "Megohmmeter",
      "PFC tester",
      "RCD tester",
    ],
    answer: "Megohmmeter",
    rationales: {
      "Earth fault loop impedance tester":
        "This instrument measures a low-impedance fault path and normally displays ohms or fractions of an ohm. A megohm-scale result would be outside the useful range for verifying automatic disconnection.",
      "PFC tester":
        "Prospective fault current is derived from supply voltage and loop impedance and is displayed in amperes or kiloamperes. It is a current result, not a high-resistance insulation measurement.",
      "RCD tester":
        "An RCD test reports operating time in milliseconds and may also identify the applied residual current in milliamperes. It does not measure insulation resistance.",
    },
    sourceUrls: [
      "https://webstore.iec.ch/en/publication/60892",
      "https://electrical.theiet.org/media/2218/bs_7671_2018-model_forms-all.pdf",
    ],
  },
  {
    prompt:
      "Which design measure allows safe inspection and maintenance of part of an installation without unnecessarily disconnecting all of it?",
    options: [
      "Division of the installation into circuits",
      "Protection of the installation by 30mA RCD",
      "Regular calibration of instrumentation",
      "Regular operational testing of SPD",
    ],
    answer: "Division of the installation into circuits",
    rationales: {
      "Protection of the installation by 30mA RCD":
        "Residual-current protection does not provide a controllable means of isolating every part for work. Circuit division lets the relevant section be disconnected while avoiding unnecessary loss of supply elsewhere.",
      "Regular calibration of instrumentation":
        "Instrument accuracy supports reliable test results, but it does not create isolation points or limit the part of the installation affected by maintenance. It is a tester-management measure rather than an installation arrangement.",
      "Regular operational testing of SPD":
        "A surge protective device limits transient overvoltage and is not a sectionalizing device. Checking it cannot make another circuit dead or provide secure separation for maintenance.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2023/94-march-2023/isolation-and-switching-for-mechanical-maintenance/",
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
        "The DC test setting is appropriate for a circuit above 500 V, but the proposed acceptance limit is only half the required minimum. A test pair is correct only when both figures match the table.",
      "500 V & 0.5MΩ":
        "Both figures are too low for the stated nominal voltage. The lower test setting belongs to circuits up to and including 500 V, while the minimum insulation value remains 1 MΩ.",
      "500 V & 1MΩ":
        "The resistance criterion is correct, but the applied DC test level is not. A 750 V circuit falls in the higher nominal-voltage band that is normally tested at 1000 V DC.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
      "https://webstore.iec.ch/en/publication/60892",
    ],
  },
  {
    prompt:
      "When isolating an installation and securing the means of disconnection in the OFF position, it is highly recommended that?",
    options: [
      "A caution notice or label is posted at the point of disconnection",
      "Barriers are also placed around the supply",
      "Everyone in the surrounding area is informed",
      "More than one person holds the key",
    ],
    answer: "A caution notice or label is posted at the point of disconnection",
    rationales: {
      "Barriers are also placed around the supply":
        "A barrier may control access to an area but does not tell an authorized person why the device is locked off. The isolator itself needs a clear warning against operation.",
      "Everyone in the surrounding area is informed":
        "A verbal message may not reach a later arrival and can be forgotten. A durable notice at the operating point stays associated with the correct device throughout the work.",
      "More than one person holds the key":
        "Giving additional people a key weakens the worker's control of the isolation and increases the chance of premature reconnection. Where several people work, each should apply an appropriate personal locking arrangement.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/pubns/priced/hsg85.pdf",
      "https://electrical.theiet.org/wiring-matters/years/2023/94-march-2023/isolation-and-switching-for-mechanical-maintenance/",
    ],
  },
  {
    prompt:
      "A surge protection device installed as part of a circuit should necessitate disconnection of the device prior to?",
    options: [
      "A polarity test",
      "A voltage check",
      "An earth fault loop impedance test",
      "An insulation resistance test",
    ],
    answer: "An insulation resistance test",
    rationales: {
      "A polarity test":
        "Polarity establishes that protective and single-pole devices are in the line conductor and that accessories are correctly connected. An SPD does not normally need removing for a dead low-resistance continuity method.",
      "A voltage check":
        "Measuring the normal supply voltage does not apply the elevated DC stress used for insulation testing. A correctly rated SPD is intended to remain connected during normal system voltage.",
      "An earth fault loop impedance test":
        "A loop test applies a controlled current at mains voltage to determine the fault-path impedance. The specific disconnection warning concerns the higher DC insulation-test voltage, which an SPD can clamp or be damaged by.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
    ],
  },
  {
    prompt:
      "A 25 m radial circuit has 2.5 mm² line and cpc conductors, each with resistance 7.41 mΩ/m at 20 °C. What approximate R1+R2 is expected at the furthest point?",
    options: ["0.17Ω", "0.37Ω", "0.74Ω", "0Ω"],
    answer: "0.37Ω",
    rationales: {
      "0.17Ω":
        "This is close to counting only one 25 m conductor at 7.41 mΩ/m. R1 + R2 includes both the outgoing line path and the returning protective-conductor path.",
      "0.74Ω":
        "This doubles the required path twice, effectively using 100 m of conductor. With equal 2.5 mm² line and CPC conductors, the loop length is 50 m and the result is about 0.3705 Ω.",
      "0Ω":
        "Copper conductors have finite resistance, and the question supplies the resistance per metre for the calculation. A zero result would indicate lead-nulling, resolution or test-connection error rather than the actual circuit path.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
      "https://webstore.iec.ch/en/publication/60894",
    ],
  },
  {
    prompt:
      "An Electrical Installation Condition Report is used to assess which type of installation?",
    options: [
      "A completely refurbished installation",
      "A new installation",
      "A socket outlet added to an existing circuit",
      "An existing property",
    ],
    answer: "An existing property",
    rationales: {
      "A completely refurbished installation":
        "A complete refurbishment that constitutes new installation work is verified and certified on an Electrical Installation Certificate. The installation certificate records responsibility for its design, construction, inspection and testing.",
      "A new installation":
        "New work needs initial verification before being put into service, not a periodic condition assessment. Its compliance is documented by the installation certificate and schedules.",
      "A socket outlet added to an existing circuit":
        "A limited addition that does not provide a new circuit is normally certified on a Minor Electrical Installation Works Certificate. That certificate covers the alteration; it is not a report on the condition of the entire existing installation.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/jp2fl3ia/bs7671_eicr_a4.pdf",
      "https://electrical.theiet.org/media/f0hlqxq1/bs7671_meiwc_a4.pdf",
      "https://electrical.theiet.org/media/tqxkkscw/bs7671_eic_a4.pdf",
    ],
  },
  {
    prompt: "A polarity test is conducted to verify that?",
    options: [
      "Every protective and single pole device is connected in the line conductor only",
      "The circuit protection will operate within limits",
      "The resistance is low enough to operate the protective device within the specified time",
      "There is no breakdown of the conductor's insulation",
    ],
    answer:
      "Every protective and single pole device is connected in the line conductor only",
    rationales: {
      "The circuit protection will operate within limits":
        "Protective-device operation is verified from the device characteristics together with fault-loop or RCD test results. Polarity alone cannot establish trip current or disconnection time.",
      "The resistance is low enough to operate the protective device within the specified time":
        "This is the purpose of verifying the fault-loop path and its impedance. A circuit may have correct polarity yet still have excessive earth fault loop impedance.",
      "There is no breakdown of the conductor's insulation":
        "Insulation resistance testing checks for leakage or breakdown between conductors and earth. A correctly insulated circuit can still have line and neutral reversed.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
      "https://electrical.theiet.org/media/2218/bs_7671_2018-model_forms-all.pdf",
    ],
  },
  {
    prompt:
      "Before disrupting the supply to begin safe isolation of a circuit, what should be done first?",
    options: [
      "Check with the occupier/user that it is safe to isolate",
      "Ensure you have checked your equipment",
      "Lock off the supply",
      "Place clearly visible signs",
    ],
    answer: "Check with the occupier/user that it is safe to isolate",
    rationales: {
      "Ensure you have checked your equipment":
        "Inspecting the tester, leads and proving unit is essential before use, but it does not identify operational hazards caused by interrupting the supply. The person responsible for the premises must first confirm what may be safely shut down.",
      "Lock off the supply":
        "Locking off is a required step after the correct source and affected loads have been identified. Doing it before consulting the user could stop lifts, medical equipment, processes or safety systems without warning.",
      "Place clearly visible signs":
        "Warning notices support a secured isolation once the correct device has been selected. They do not replace coordination with the person who knows the consequences of losing the circuit.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/pubns/priced/hsg85.pdf",
      "https://www.hse.gov.uk/pubns/priced/gs38.pdf",
    ],
  },
  {
    prompt:
      "Where practicable, what maximum exposed probe-tip length does HSE GS38 recommend for voltage indicators?",
    options: ["10 mm", "8 mm", "4 mm", "2 mm"],
    answer: "2 mm",
    rationales: {
      "10 mm":
        "Ten millimetres leaves enough bare metal to bridge adjacent terminals or be touched accidentally. It is far beyond the exposure GS38 accepts for ordinary probes.",
      "8 mm":
        "Eight millimetres still creates an avoidable short-circuit and contact hazard around crowded live terminals. Protective shrouding should reduce the exposed length much further.",
      "4 mm":
        "Up to 4 mm may be necessary for some measurements, but GS38 says the exposed tip should preferably be no more than 2 mm where practicable. The question asks for that recommended value.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/pubns/priced/gs38.pdf",
    ],
  },
  {
    prompt:
      "The Insulation resistance of a new circuit is to be done. The most appropriate range is?",
    options: ["KΩ", "MΩ", "µΩ", "Ω"],
    answer: "MΩ",
    rationales: {
      KΩ: "Kilohms are only thousands of ohms, far below the healthy values expected from new cable insulation. A reading in this range would indicate severe leakage rather than provide the most useful normal measurement scale.",
      µΩ: "Micro-ohms are used for extremely small resistances such as joints or high-current conductors. Insulation testing looks for the opposite property: a very high resistance between separated conductive parts.",
      Ω: "Plain ohms are the practical scale for conductor continuity and fault-loop measurements. Sound circuit insulation is normally many millions of ohms, so this unit would be inconveniently small for the task.",
    },
    sourceUrls: [
      "https://webstore.iec.ch/en/publication/60892",
      "https://www.bipm.org/documents/20126/41483022/SI-Brochure-9-EN.pdf/2d2b50bf-f2b4-9661-f402-5f9d66e4b507?version=4.0",
    ],
  },
  {
    prompt:
      "In the interests of avoiding inadvertent energisation of an isolated circuit it is good practice that the point of isolation is kept under the control of?",
    options: [
      "A known workmate",
      "An experienced supervisor",
      "The customer ordering the work",
      "The person who is carrying out the work",
    ],
    answer: "The person who is carrying out the work",
    rationales: {
      "A known workmate":
        "Familiarity does not give the worker direct control of reconnection. A colleague could misunderstand the job status or leave the area while the circuit is still being worked on.",
      "An experienced supervisor":
        "A supervisor may coordinate the job, but experience alone does not protect the person in contact with the conductors. Personal control of the lock or key prevents another person deciding independently to restore power.",
      "The customer ordering the work":
        "The customer controls the commission, not the electrical safe-working procedure. They may not be competent to judge when the circuit can be re-energized.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/pubns/priced/hsg85.pdf",
      "https://electrical.theiet.org/wiring-matters/years/2023/94-march-2023/isolation-and-switching-for-mechanical-maintenance/",
    ],
  },
  {
    prompt: "An RCBO is a device which is used as:?",
    options: [
      "A short circuit protection device only",
      "A voltage reduction sensor",
      "An overload protection device only",
      "Both an overcurrent and residual current protection device",
    ],
    answer: "Both an overcurrent and residual current protection device",
    rationales: {
      "A short circuit protection device only":
        "An RCBO includes short-circuit protection, but that is only part of its function. It also responds to overload current and to residual current flowing outside the intended live-conductor path.",
      "A voltage reduction sensor":
        "An RCBO does not regulate or reduce the supply voltage. Its sensing elements monitor overcurrent and imbalance between live conductors, then open the circuit when their criteria are met.",
      "An overload protection device only":
        "Overload protection is included, but limiting the description to that function omits both short-circuit and residual-current operation. The product standard expressly combines residual and overcurrent protection.",
    },
    sourceUrls: [
      "https://webstore.iec.ch/en/publication/67981",
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
    ],
  },
  {
    prompt:
      "During dead initial verification, which instrument is used to confirm polarity at an Edison screw lamp holder?",
    options: [
      "Low-resistance ohmmeter on the isolated circuit",
      "A volt stick",
      "An RCD tester",
      "An insulation resistance tester",
    ],
    answer: "Low-resistance ohmmeter on the isolated circuit",
    rationales: {
      "A volt stick":
        "A non-contact indicator can suggest that an electric field is present, but capacitive coupling and screening can cause false indications. It cannot reliably compare the centre contact with the threaded shell.",
      "An RCD tester":
        "This instrument injects a residual current to measure protective-device operation. It does not identify which lampholder contact is connected to line.",
      "An insulation resistance tester":
        "The high-voltage DC test checks leakage through insulation, not the assignment of conductors to contacts. In initial verification, polarity is normally established by a dead low-resistance test before any live confirmation.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/pubns/priced/gs38.pdf",
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
    ],
  },
  {
    prompt:
      "What known source is most suitable for checking an approved voltage indicator immediately before and after proving dead?",
    options: [
      "Check the instrument on a proving unit",
      "Check the isolated circuit with the testers",
      "Check the proving unit on the isolated circuit",
      "Checked on an isolated circuit",
    ],
    answer: "Check the instrument on a proving unit",
    rationales: {
      "Check the isolated circuit with the testers":
        "A dead circuit cannot demonstrate that the indicator itself is functional; a failed indicator would produce the same no-voltage display. The instrument needs a known live source before and after the absence test.",
      "Check the proving unit on the isolated circuit":
        "The proving unit supplies a known output to the voltage indicator and is not checked by connecting it to the installation. This reverses the roles of the two devices.",
      "Checked on an isolated circuit":
        "An isolated circuit is the unknown being assessed, not a dependable reference source. A purpose-designed proving unit confirms that both poles and the indication operate correctly.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/pubns/priced/gs38.pdf",
      "https://www.hse.gov.uk/pubns/priced/hsg85.pdf",
    ],
  },
  {
    prompt:
      "The Zs reading taken on a motor circuit may be lower than the Ze+R1+R2 calculation due to?",
    options: [
      "An incorrect original reading",
      "High resistance terminals",
      "Magnetic forces",
      "Parallel paths",
    ],
    answer: "Parallel paths",
    rationales: {
      "An incorrect original reading":
        "A measurement error can create any discrepancy, but it is not the normal physical reason for a valid in-service value to be below the calculated metallic path. Results should first be checked for alternate bonded return routes.",
      "High resistance terminals":
        "Loose or resistive connections add impedance to the fault loop and tend to increase the measured result. They cannot account for an otherwise valid reduction.",
      "Magnetic forces":
        "Electromagnetic effects occur when current flows, but they do not provide an additional conductive return route in this test. The reduction comes from current sharing among real parallel earth paths.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
      "https://electrical.theiet.org/wiring-matters/years/2022/89-march-2022/resistance-readings-for-step-3-of-the-ring-final-circuit-test/",
    ],
  },
  {
    prompt: "A polarity test should be carried out on a new installation?",
    options: [
      "After the installation has been energised",
      "As part of the insulation resistance test",
      "Before the installation has been energised",
      "During the earth fault loop impedance test",
    ],
    answer: "Before the installation has been energised",
    rationales: {
      "After the installation has been energised":
        "Waiting until the circuit is live can expose users or the inspector to reversed single-pole devices and accessible live shells. Dead continuity testing can identify the defect before that hazard is introduced.",
      "As part of the insulation resistance test":
        "Insulation testing measures leakage between selected conductor groups. It does not prove that switches, fuses and lampholder contacts are connected in the intended conductor.",
      "During the earth fault loop impedance test":
        "Loop impedance is an energized test of the fault-return path, and a numerical loop result does not by itself prove every accessory's polarity. The safer dead check belongs earlier in the verification sequence.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
    ],
  },
  {
    prompt:
      "Which listed device is expressly designed and marked for main supply isolation before maintenance?",
    options: [
      "13A cartridge fuse",
      "BS EN IEC 60947-3 switch-disconnector",
      "BS 7671 fuse",
      "BS EN 60898 circuit-breaker not marked for isolation",
    ],
    answer: "BS EN IEC 60947-3 switch-disconnector",
    rationales: {
      "13A cartridge fuse":
        "Removing a plug fuse may disconnect one small appliance circuit, but it is not a suitable main source isolator for an installation. It lacks the dedicated operating and locking features expected for controlled maintenance isolation.",
      "BS 7671 fuse":
        "BS 7671 is an installation standard, not a fuse product designation. This wording identifies neither a recognized device standard nor a means designed for secure source isolation.",
      "BS EN 60898 circuit-breaker not marked for isolation":
        "A circuit-breaker may be used for isolation only when the particular device is suitable, marked and installed for that function. Merely naming its overcurrent product standard does not make it the best unqualified source-isolation choice.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2023/94-march-2023/isolation-and-switching-for-mechanical-maintenance/",
      "https://webstore.iec.ch/en/publication/59785",
    ],
  },
  {
    prompt:
      "What major immediate hazard can arise if a block of flats is isolated without coordinating with the people responsible for the building?",
    options: [
      "Data systems could be damaged due to electro- magnetic effects of testing",
      "Emergency lights would not operate",
      "Occupants at a greater risk of electric shock",
      "Occupants trapped in lifts",
    ],
    answer: "Occupants trapped in lifts",
    rationales: {
      "Data systems could be damaged due to electro- magnetic effects of testing":
        "Planned isolation removes supply; it does not itself apply an electromagnetic test signal to data cabling. Sensitive systems still need orderly shutdown, but the mechanism described here is not the principal immediate hazard.",
      "Emergency lights would not operate":
        "Compliant emergency lighting should change to its independent emergency source when the normal supply fails, though its condition should be confirmed before planned shutdown. Loss of normal power alone is not supposed to extinguish it.",
      "Occupants at a greater risk of electric shock":
        "Correct isolation reduces electrical shock exposure rather than increasing it. The special danger of an unannounced whole-building shutdown is interruption of equipment that people are actively using.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/pubns/priced/hsg85.pdf",
      "https://electrical.theiet.org/wiring-matters/years/2023/94-march-2023/isolation-and-switching-for-mechanical-maintenance/",
    ],
  },
  {
    prompt:
      "The following readings were taken on a test performed on a ring final circuit: Line-Line 0.8Ω, Neutral-Neutral 0.8Ω and cpc-cpc 0.8Ω. The expected reading between line and neutral at each socket outlet would be?",
    options: ["0.2Ω", "0.4Ω", "0.6Ω", "0.8Ω"],
    answer: "0.4Ω",
    rationales: {
      "0.2Ω":
        "This divides a single end-to-end conductor value by four and omits the neutral path. With equal conductors, the cross-connected reading is (r1 + rn) / 4.",
      "0.6Ω":
        "There is no combination of the stated equal end-to-end values that produces this result under the standard cross-connection. Adding the two values and dividing by four gives a lower figure.",
      "0.8Ω":
        "This simply repeats one full end-to-end loop reading and ignores the two parallel routes created by the cross-connections. At each socket, those paths reduce the expected line-to-neutral result by the required factor.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/qxhf2est/guidance-note-3-2022-ninth-edition-first-printing-errata-november-2024.pdf",
      "https://electrical.theiet.org/wiring-matters/years/2022/89-march-2022/resistance-readings-for-step-3-of-the-ring-final-circuit-test/",
    ],
  },
] as const;
