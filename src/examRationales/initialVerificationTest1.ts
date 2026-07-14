export const initialVerificationTest1 = [
  {
    prompt: "What is the main purpose of an Initial Verification?",
    options: [
      "To complete the testing and issue an Electrical Installation Certificate",
      "To confirm an installation is safe to be put into service",
      "To ensure all testing has been carried out",
      "To make a judgement that the installation is safe for continued use",
    ],
    answer: "To confirm an installation is safe to be put into service",
    rationales: {
      "To complete the testing and issue an Electrical Installation Certificate":
        "Testing and certification are parts of initial verification, but completing paperwork is not its safety purpose. The process verifies, so far as reasonably practicable, that the installation complies before it enters service.",
      "To ensure all testing has been carried out":
        "BS 7671 requires the relevant tests, together with inspection and comparison against acceptance criteria. Simply performing every test does not establish that the results are satisfactory or the installation is safe.",
      "To make a judgement that the installation is safe for continued use":
        "Continued-service suitability is assessed on an existing installation during periodic inspection and testing. Initial verification concerns new work before it is first put into service.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/model-forms/",
    ],
  },
  {
    prompt:
      "What situation requires the issuing of a Minor Electrical Installation Works Certificate?",
    options: [
      "Additional socket-outlets added to an existing ring final circuit",
      "An additional lighting circuit has been installed",
      "Changing a consumer unit and protective devices",
      "Upgrading the cable and circuit breaker for a shower circuit",
    ],
    answer:
      "Additional socket-outlets added to an existing ring final circuit",
    rationales: {
      "An additional lighting circuit has been installed":
        "A Minor Works Certificate is not intended for the provision of a new circuit. A new lighting circuit requires an Electrical Installation Certificate with the relevant schedules.",
      "Changing a consumer unit and protective devices":
        "Consumer-unit replacement affects the origin and several circuits, so it is outside the limited addition-or-alteration scope of the minor-works form. The replacement is certified on an Electrical Installation Certificate.",
      "Upgrading the cable and circuit breaker for a shower circuit":
        "Replacing the circuit cable and protective device is a substantial alteration to the circuit, not a small extension such as an added accessory. Its design, construction and verification require the fuller Electrical Installation Certificate route.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/model-forms/",
      "https://electrical.theiet.org/media/2821/bs7671-meiwcv2.pdf",
    ],
  },
  {
    prompt:
      "Which statutory document contains specific information relevant to Initial Verification?",
    options: [
      "BS 7671, Requirements for Electrical Installations",
      "Health and Safety guidance GS38",
      "The Electricity at Work Regulations",
      "The Health and Safety at Work Act",
    ],
    answer: "The Electricity at Work Regulations",
    rationales: {
      "BS 7671, Requirements for Electrical Installations":
        "BS 7671 is the national installation standard but is non-statutory. It can help demonstrate compliance with legal duties, yet it is not itself an Act or statutory instrument.",
      "Health and Safety guidance GS38":
        "GS38 is HSE guidance on test equipment, leads and probes. It explains safe practice but does not impose the statutory duties governing electrical systems and work activities.",
      "The Health and Safety at Work Act":
        "The Act establishes broad employer and employee health-and-safety duties. The Electricity at Work Regulations are the more specific statutory instrument dealing with electrical systems, competence and prevention of danger.",
    },
    sourceUrls: [
      "https://www.legislation.gov.uk/uksi/1989/635/contents",
      "https://www.hse.gov.uk/pubns/books/gs38.htm",
    ],
  },
  {
    prompt:
      "What is the minimum voltage which requires the test leads and probes to comply with GS38?",
    options: ["120 V AC", "150 V AC", "25 V AC", "50 V AC"],
    answer: "50 V AC",
    rationales: {
      "120 V AC":
        "This would leave the hazardous range from 50 V to 119 V outside the guidance. GS38 addresses low-voltage systems whose AC voltage exceeds extra-low-voltage limits.",
      "150 V AC":
        "GS38 is not restricted to higher mains voltages. Suitable probes, leads, ratings and protective features are needed from the low-voltage threshold, well below 150 V AC.",
      "25 V AC":
        "Twenty-five volts is used as a reduced touch-voltage limit in particular higher-risk conditions, but it is not the general AC boundary between extra-low voltage and low voltage used by this question.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/pubns/books/gs38.htm",
      "https://www.hse.gov.uk/pubns/priced/gs38.pdf",
    ],
  },
  {
    prompt:
      "How many voltage measurements are required to confirm that a three-phase four-wire installation is safely isolated?",
    options: ["3", "6", "9", "10"],
    answer: "10",
    rationales: {
      "3":
        "Three line-to-line checks alone cannot reveal voltage from a line to neutral or Earth, or a hazardous neutral-to-Earth condition. Every relevant conductor pairing must be proved dead.",
      "6":
        "Six checks can cover the three line-to-line and three line-to-neutral combinations, but omit all line-to-Earth checks and neutral to Earth. That is not a complete proof of isolation.",
      "9":
        "The three line-to-line, three line-to-neutral and three line-to-Earth checks total nine. A neutral-to-Earth measurement is still required, producing the tenth conductor combination.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/pubns/priced/hsg85.pdf",
      "https://www.hse.gov.uk/pubns/priced/gs38.pdf",
    ],
  },
  {
    prompt:
      "What precaution is required before carrying out a test of external earth fault loop impedance (Ze) so as to avoid danger to users of an installation?",
    options: [
      "Disconnect the main protective bonding conductors",
      "Lock off the main switch and keep the installation circuits isolated",
      "Use insulated screwdrivers",
      "Warn the occupier of the premises",
    ],
    answer: "Lock off the main switch and keep the installation circuits isolated",
    rationales: {
      "Disconnect the main protective bonding conductors":
        "Protective bonding should not be removed for the Ze measurement; doing so can create hazardous potential differences. GN3 instead describes isolating circuits and temporarily separating the means of earthing from the MET to remove parallel earth paths under controlled conditions.",
      "Use insulated screwdrivers":
        "An insulated tool can reduce risk while accessing terminals, but it does not prevent another person energising installation circuits or encountering exposed parts during the live measurement.",
      "Warn the occupier of the premises":
        "A verbal warning is not secure control of the installation. Isolation must be under the tester's control, with effective lock-off and warning arrangements preventing inadvertent reconnection.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/qxhf2est/guidance-note-3-2022-ninth-edition-first-printing-errata-november-2024.pdf",
      "https://www.hse.gov.uk/pubns/priced/hsg85.pdf",
    ],
  },
  {
    prompt:
      "Why does BS 7671 require inspection to be carried out before testing?",
    options: [
      "To confirm all the equipment is connected to the installation will work",
      "To confirm the Earthing Conductor is connected and it is safe to commence testing",
      "To confirm the installation is complete and it is safe to commence testing",
      "To confirm the installers have installed as per the job specification",
    ],
    answer:
      "To confirm the installation is complete and it is safe to commence testing",
    rationales: {
      "To confirm all the equipment is connected to the installation will work":
        "Functional operation is checked later where relevant and normally requires energisation. The preliminary inspection first looks for completeness, correct selection and erection, and hazards that could make testing unsafe.",
      "To confirm the Earthing Conductor is connected and it is safe to commence testing":
        "Earthing is an essential inspection item, but checking a single conductor is too narrow. The entire installation must be sufficiently complete and free from visible danger before the test sequence starts.",
      "To confirm the installers have installed as per the job specification":
        "Contract compliance may be commercially important, but BS 7671 inspection is concerned with safety and conformity with the installation requirements. A job specification cannot replace that verification.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/model-forms/",
    ],
  },
  {
    prompt:
      "Which situation will not require a label stating 'Safety Electrical Connection – Do Not remove'?",
    options: [
      "A supplementary bonding conductor connected to a metallic water pipe",
      "An Earthing conductor connected to an installation earth electrode",
      "Connecting a bonding conductor to a metallic installation gas pipe",
      "The connection to a Main Earthing Terminal within a consumer unit",
    ],
    answer: "The connection to a Main Earthing Terminal within a consumer unit",
    rationales: {
      "A supplementary bonding conductor connected to a metallic water pipe":
        "A bonding connection to an extraneous-conductive-part can be mistaken for redundant pipework wiring. The warning identifies it as a safety connection that must not be removed.",
      "An Earthing conductor connected to an installation earth electrode":
        "Removing the conductor at the electrode would disconnect the installation from its means of earthing. That point requires the prescribed durable safety warning.",
      "Connecting a bonding conductor to a metallic installation gas pipe":
        "The gas-pipe connection is a main protective bonding termination whose removal could permit a dangerous touch voltage. It therefore needs the safety-connection label.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/model-forms/",
      "https://electrical.theiet.org/wiring-matters/years/2019/76-july-2019/protective-bonding-habits/",
    ],
  },
  {
    prompt:
      "What must be checked when inspecting a consumer unit for compliance with Basic Protection requirements?",
    options: [
      "All cable terminations are tight",
      "Enclosures meet the IP requirements",
      "Live conductors are correctly identified",
      "Protective devices are the correct rating",
    ],
    answer: "Enclosures meet the IP requirements",
    rationales: {
      "All cable terminations are tight":
        "Termination security affects connection reliability, overheating and fault risk. Basic protection specifically prevents contact with live parts, which is assessed through insulation, barriers and enclosure access protection.",
      "Live conductors are correctly identified":
        "Identification supports safe operation and maintenance but does not stop a person touching an energised part. The enclosure must provide the required degree of protection against access.",
      "Protective devices are the correct rating":
        "Device rating is checked for overcurrent and fault protection. It does not establish whether the consumer-unit cover and barriers prevent direct contact with live parts.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/1605/protective-measures-special-installations-or-locations-part-1.pdf",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/model-forms/",
    ],
  },
  {
    prompt:
      "Which two senses are used when inspecting the terminations at a newly installed motor?",
    options: [
      "Sight and hearing",
      "Sight and smell",
      "Touch and sight",
      "Touch and smell",
    ],
    answer: "Touch and sight",
    rationales: {
      "Sight and hearing":
        "Visual inspection can reveal conductor identification and poor insertion, but an isolated new termination has no useful sound to assess. Security is checked physically as well as visually.",
      "Sight and smell":
        "Smell may indicate overheating after equipment has been in service, but it does not confirm the mechanical security of a newly made terminal. The conductor and terminal need a controlled physical check.",
      "Touch and smell":
        "Touch can help establish security, but odour cannot confirm conductor position, exposed copper, identification or damage. Those features require visual examination.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/model-forms/",
      "https://www.hse.gov.uk/pubns/priced/hsg85.pdf",
    ],
  },
  {
    prompt:
      "What action must be taken when a loose connection is found to a pipe during the inspection of a main protective bonding conductor termination?",
    options: [
      "A defect report must accompany the Electrical Installation Certificate",
      "A note is made on the Electrical Installation Certificate under 'Departures'",
      "The continuity test between the MET and the pipe should be carried out",
      "The defect must be made good and inspected before certification",
    ],
    answer: "The defect must be made good and inspected before certification",
    rationales: {
      "A defect report must accompany the Electrical Installation Certificate":
        "A separate report does not make a safety-critical bonding termination satisfactory. New work cannot be certified as compliant while the inspector knows that the protective connection is loose.",
      "A note is made on the Electrical Installation Certificate under 'Departures'":
        "A loose connection is defective workmanship, not an intended departure that provides an equivalent degree of safety. It must be corrected rather than documented as an acceptable design choice.",
      "The continuity test between the MET and the pipe should be carried out":
        "A resistance reading taken through a visibly loose clamp may be unstable and cannot cure the defect. The termination must first be secured, then inspected and measured as part of verification.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/model-forms/",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
    ],
  },
  {
    prompt: "What best describes the protection offered by IPXXB?",
    options: [
      "Protection against access to live parts",
      "Protection against impact",
      "Protection against the ingress of solids",
      "Protection against the ingress of water",
    ],
    answer: "Protection against access to live parts",
    rationales: {
      "Protection against impact":
        "Mechanical-impact resistance is expressed using an IK classification, not the supplementary access letter B in an IP code.",
      "Protection against the ingress of solids":
        "The first IP numeral states protection against solid foreign objects. In IPXXB both numerals are unspecified, while B describes access by the standard jointed test finger.",
      "Protection against the ingress of water":
        "The second IP numeral gives water-ingress protection. The letter B concerns access to hazardous parts and does not declare any water performance.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/1605/protective-measures-special-installations-or-locations-part-1.pdf",
    ],
  },
  {
    prompt:
      "What is the minimum IP rating for electrical equipment installed in Zone 2 of a bathroom?",
    options: ["IP 2X", "IP 4X", "IP X2", "IP X4"],
    answer: "IP X4",
    rationales: {
      "IP 2X":
        "IP2X addresses entry by solid objects and finger access; it makes no declaration about water. Bathroom-zone equipment needs splash protection.",
      "IP 4X":
        "IP4X gives protection against solid objects of 1 mm and larger. The X must be in the first position here because the relevant minimum is the second numeral for water ingress.",
      "IP X2":
        "IPX2 covers dripping water when the enclosure is tilted. Zone 2 requires protection against splashing water from any direction, a more demanding exposure.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2019/77-september-2019/bs-76712018-frequently-asked-questions/",
      "https://electrical.theiet.org/media/1605/protective-measures-special-installations-or-locations-part-1.pdf",
    ],
  },
  {
    prompt:
      "The calibration of an Earth Fault Loop Impedance tester reveals that the instrument is outside of specification. Regular accuracy checks on the instrument have not been carried out for six months. What immediate action must be taken by the contractor?",
    options: [
      "All installations tested in the last three months should be retested",
      "All installations tested since the last calibration should be checked",
      "The last installation tested should be retested",
      "The test leads for this instrument must be replaced",
    ],
    answer: "All installations tested since the last calibration should be checked",
    rationales: {
      "All installations tested in the last three months should be retested":
        "A three-month cut-off is arbitrary because there is no accuracy record proving the tester was sound at that date. The review period must start from the last point at which satisfactory accuracy was established.",
      "The last installation tested should be retested":
        "Retesting only the most recent job leaves every earlier result since the last known-good accuracy point unsupported. The fault may have affected the instrument for longer than one job, so the full uncertain period has to be reviewed.",
      "The test leads for this instrument must be replaced":
        "Lead damage can affect readings, but replacing leads without diagnosis does not establish why the instrument failed calibration or validate earlier results. The instrument must be corrected and the affected certification reviewed.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/1696/ongoing-accuracy-of-test-instruments.pdf",
    ],
  },
  {
    prompt:
      "What instrument would give the most accurate results when carrying out an earth electrode resistance test?",
    options: [
      "A low-resistance ohmmeter",
      "A stakeless or probe type earth electrode tester",
      "A three or four-terminal earth electrode tester",
      "An earth fault loop impedance tester",
    ],
    answer: "A three or four-terminal earth electrode tester",
    rationales: {
      "A low-resistance ohmmeter":
        "A continuity ohmmeter measures metallic conductor resistance and has no independent current and potential probes in the soil. It cannot separate the electrode resistance from the wider earth path.",
      "A stakeless or probe type earth electrode tester":
        "Clamp or stakeless methods require a suitable parallel earthing network and can read a metallic loop rather than the individual electrode. The fall-of-potential method with separate terminals provides the reference measurement where it can be set up correctly.",
      "An earth fault loop impedance tester":
        "A loop tester measures the complete energized fault loop, including the source and line path. It does not isolate the resistance of the electrode under test with controlled current and potential probes.",
    },
    sourceUrls: [
      "https://www.megger.com/en/products/det4-series-four-terminal-earth/ground-resistance-testers",
      "https://electrical.theiet.org/media/1696/ongoing-accuracy-of-test-instruments.pdf",
    ],
  },
  {
    prompt:
      "Why does BS 7671 give a defined sequence of tests when carrying out Initial Verification?",
    options: [
      "To ensure all tests are carried out",
      "To ensure live tests are carried out in the correct order",
      "To ensure the Schedule of Test Results is complete",
      "To ensure the safety of the person carrying out the tests",
    ],
    answer: "To ensure the safety of the person carrying out the tests",
    rationales: {
      "To ensure all tests are carried out":
        "Only tests relevant to the installation and its protective measures are required. The sequence is about detecting dangerous defects before later tests and energisation, not mechanically completing every possible test.",
      "To ensure live tests are carried out in the correct order":
        "The safety-critical ordering starts with inspection and dead tests before live testing. Rearranging only the live tests misses the main reason for the prescribed sequence.",
      "To ensure the Schedule of Test Results is complete":
        "The schedule records outcomes after the work has been tested; it does not determine the safe order of work. A complete form cannot compensate for exposing the tester to an undetected wiring fault.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
      "https://www.hse.gov.uk/pubns/priced/hsg85.pdf",
    ],
  },
  {
    prompt:
      "Which test method is used to verify that extraneous conductive parts of an installation are effectively connected to the MET?",
    options: [
      "Applied current test",
      "Applied voltage test",
      "Long lead test",
      "R1+R2 linked test",
    ],
    answer: "Long lead test",
    rationales: {
      "Applied current test":
        "This is not the named BS 7671/GN3 continuity method for a remote bonding point. A low-resistance ohmmeter and a nulled wander lead directly measure resistance back to the MET.",
      "Applied voltage test":
        "Applying a test voltage is associated with insulation resistance or dielectric testing, not continuity of a protective bonding conductor. The required quantity is low resistance end to end.",
      "R1+R2 linked test":
        "R1+R2 verifies the line and circuit protective conductor path of a final circuit. An extraneous-conductive-part is connected by protective bonding, so its continuity is measured from the MET with a wander lead.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
      "https://electrical.theiet.org/wiring-matters/years/2019/76-july-2019/protective-bonding-habits/",
    ],
  },
  {
    prompt:
      "What is the main purpose of verifying that extraneous conductive parts of an installation are effectively connected to the MET?",
    options: [
      "To confirm that only a low potential will exist between exposed and extraneous conductive parts under fault conditions",
      "To confirm that there is a reliable connection between the MET and the means of earthing",
      "To confirm that they provide a reliable path for fault currents to flow to earth",
      "To confirm that they will reduce values of earth fault loop impedance to comply with BS7671",
    ],
    answer:
      "To confirm that only a low potential will exist between exposed and extraneous conductive parts under fault conditions",
    rationales: {
      "To confirm that there is a reliable connection between the MET and the means of earthing":
        "That describes continuity of the earthing conductor. Protective bonding instead connects incoming extraneous-conductive-parts to the MET to limit dangerous voltage differences between simultaneously accessible metalwork.",
      "To confirm that they provide a reliable path for fault currents to flow to earth":
        "Extraneous-conductive-parts are not intended as circuit protective conductors or normal fault-current paths. Bonding brings them to substantially the same potential as exposed-conductive-parts.",
      "To confirm that they will reduce values of earth fault loop impedance to comply with BS7671":
        "Fortuitous parallel paths may lower a measured loop impedance, but protective bonding is not installed to obtain a better Zs result. Its purpose is equipotential protection against touch voltage.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/earthing-and-bonding-faqs/",
      "https://electrical.theiet.org/wiring-matters/years/2019/76-july-2019/protective-bonding-habits/",
    ],
  },
  {
    prompt:
      "Where on a lighting circuit would a test of continuity of protective conductors be carried out?",
    options: [
      "At every light and each switch with a metallic plate",
      "At every light and switch point",
      "At the distribution board",
      "At the furthest point in the circuit",
    ],
    answer: "At every light and switch point",
    rationales: {
      "At every light and each switch with a metallic plate":
        "The CPC must be continuous to every point and accessory, including a plastic switch position where it is terminated for future use or protection of contained metalwork. Restricting checks to metal faceplates can miss a broken conductor.",
      "At the distribution board":
        "A satisfactory reading at the origin proves only the local connection. It cannot show that the CPC remains continuous through every branch, light and switch point.",
      "At the furthest point in the circuit":
        "A single end-point result can miss an omitted CPC at an intermediate point or branch. Verification must cover every point at which the protective conductor is provided.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/model-forms/",
    ],
  },
  {
    prompt:
      "What would cause the value of r2 to be higher than r1 and rn when carrying out step 1 of a continuity of ring-final circuit test?",
    options: [
      "A connected load",
      "A spur in the ring",
      "Parallel earth paths",
      "Smaller sized cpc",
    ],
    answer: "Smaller sized cpc",
    rationales: {
      "A connected load":
        "Loads should be disconnected or switched out for the end-to-end continuity measurements. A load between line and neutral does not explain a consistently greater CPC loop resistance.",
      "A spur in the ring":
        "A spur is not part of either end-to-end loop at the distribution board unless it creates an unintended parallel connection. It does not inherently raise r2 relative to equal-length line and neutral loops.",
      "Parallel earth paths":
        "A parallel path provides another route and normally reduces the measured protective-conductor resistance. It would not account for r2 being proportionally higher.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/qxhf2est/guidance-note-3-2022-ninth-edition-first-printing-errata-november-2024.pdf",
      "https://electrical.theiet.org/wiring-matters/years/2022/89-march-2022/resistance-readings-for-step-3-of-the-ring-final-circuit-test/",
    ],
  },
  {
    prompt:
      "What is the test voltage for an insulation resistance test carried out on a 230 V circuit containing socket-outlets with surge protection devices which cannot be removed?",
    options: ["100 V DC", "1000 V DC", "250 V DC", "500 V DC"],
    answer: "250 V DC",
    rationales: {
      "100 V DC":
        "Table 64 does not specify a 100 V insulation test for this circuit. Reducing the voltage that far would not provide the prescribed verification criterion.",
      "1000 V DC":
        "A 1000 V test is intended for circuits above 500 V nominal. It presents an unnecessary and potentially damaging overvoltage to connected surge-protective components on a 230 V circuit.",
      "500 V DC":
        "This is the normal test voltage for a 230 V circuit after voltage-sensitive equipment has been disconnected. Where an SPD cannot reasonably be removed, BS 7671 permits the reduced test while retaining a minimum 1 MΩ result.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
    ],
  },
  {
    prompt:
      "During the construction of an installation, insulation resistance tests have been carried out between live conductors and earth on the individual circuits and the L to E results are shown below. What is the expected value of insulation resistance L to E when the whole installation is tested?",
    options: ["0.03 MΩ", "136.7 MΩ", "32.2 MΩ", "520 MΩ"],
    answer: "32.2 MΩ",
    rationales: {
      "0.03 MΩ":
        "Approximately 0.031 is the sum of the reciprocal values in inverse-megaohms; it is conductance, not the final resistance. That sum must itself be inverted to obtain about 32.2 MΩ.",
      "136.7 MΩ":
        "A parallel combination must be lower than the smallest individual reading, which is 120 MΩ. Any result above 120 MΩ cannot represent all four leakage paths connected together.",
      "520 MΩ":
        "This is the direct sum of 120, 120, 130 and 150 MΩ, which would apply to resistances in series. Circuit insulation paths appear in parallel when the complete installation is tested.",
    },
    sourceUrls: [
      "https://www.megger.com/en-gb/et-online/july-2021/testing-parallel-resistances",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
    ],
  },
  {
    prompt:
      "Questions 23 to 25 relate to the following scenario: The conductors of a newly installed ring final circuit are to be tested for continuity. The circuit is wired in PVC single core cables contained in PVC conduit. All circuit conductors are 2.5mm² and the end to end length of each loop is 75m. What action is required regarding the instrument test leads?",
    options: [
      "They are nulled or zeroed",
      "They must be 13 A rated",
      "They must be GS 38 compliant",
      "They must be auto-ranging",
    ],
    answer: "They are nulled or zeroed",
    rationales: {
      "They must be 13 A rated":
        "A low-resistance ohmmeter supplies a small test current; its continuity leads are not selected by a socket-outlet's 13 A load rating. Their own resistance must instead be removed from the measurement.",
      "They must be GS 38 compliant":
        "GS38 protections are especially relevant where hazardous voltages may be encountered. This is an isolated low-resistance test, and GS38 compliance does not compensate for lead resistance in a sub-ohm result.",
      "They must be auto-ranging":
        "Auto-ranging is an instrument convenience, not a validity requirement. Whether range selection is manual or automatic, the lead resistance has to be nulled before measuring the ring conductors.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/1696/ongoing-accuracy-of-test-instruments.pdf",
      "https://electrical.theiet.org/media/qxhf2est/guidance-note-3-2022-ninth-edition-first-printing-errata-november-2024.pdf",
    ],
  },
  {
    prompt:
      "What is the expected resistance of each of the loops tested in stage 1 as shown in GN3?",
    options: ["0.14 Ω", "0.56 Ω", "0.68 Ω", "1.01 Ω"],
    answer: "0.56 Ω",
    rationales: {
      "0.14 Ω":
        "This is one quarter of the end-to-end value and is associated with the nominal midpoint result after equal ring conductors are cross-connected. Stage 1 measures each complete 75 m loop end to end.",
      "0.68 Ω":
        "That would imply about 9.1 mΩ/m over 75 m, higher than the tabulated 20 °C resistance for a 2.5 mm² copper conductor. The stated conductor size gives approximately 7.41 mΩ/m.",
      "1.01 Ω":
        "This value is nearly double the expected end-to-end resistance and would suggest extra resistance, excess length or a smaller conductor. It does not follow from 75 m of 2.5 mm² copper.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/qxhf2est/guidance-note-3-2022-ninth-edition-first-printing-errata-november-2024.pdf",
      "https://electrical.theiet.org/wiring-matters/years/2022/89-march-2022/resistance-readings-for-step-3-of-the-ring-final-circuit-test/",
    ],
  },
  {
    prompt:
      "Whilst testing the ring final circuit the reading at one of the socket-outlets for stage 2 was found to be 0.42 Ω but an over range reading was obtained for stage 3. What condition would cause these results?",
    options: [
      "Line and cpc conductor connections are reversed",
      "Line and neutral conductor connections are reversed",
      "The line conductor is not connected",
      "The neutral conductor is not connected",
    ],
    answer: "Line and neutral conductor connections are reversed",
    rationales: {
      "Line and cpc conductor connections are reversed":
        "This would disrupt the line-to-CPC relationship used in stage 3, but it would also introduce the CPC into the stage-2 line-neutral path and would not produce the stated normal stage-2 result in the same way.",
      "The line conductor is not connected":
        "An open line at the socket would break both the line-neutral stage-2 measurement and the line-CPC stage-3 measurement. It cannot explain a finite reading in stage 2 followed by over-range only in stage 3.",
      "The neutral conductor is not connected":
        "Stage 2 uses the cross-connected line and neutral loops, so an open neutral at that socket would give an over-range stage-2 result. The observed finite stage-2 reading shows that path exists.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/qxhf2est/guidance-note-3-2022-ninth-edition-first-printing-errata-november-2024.pdf",
      "https://electrical.theiet.org/wiring-matters/years/2022/89-march-2022/resistance-readings-for-step-3-of-the-ring-final-circuit-test/",
    ],
  },
  {
    prompt:
      "What is the most likely cause of significantly different readings at each socket-outlet when carrying out stage 3, as shown in GN3, during testing of a newly installed ring final circuit?",
    options: [
      "Incorrect cross connection of conductors at the consumer unit",
      "Incorrect polarity at one of the sockets on the circuit",
      "Interference from other circuits connected to the consumer unit",
      "Reduced size circuit protective conductor in the cable",
    ],
    answer: "Incorrect cross connection of conductors at the consumer unit",
    rationales: {
      "Incorrect polarity at one of the sockets on the circuit":
        "A polarity error at one accessory creates an anomalous or open result at that point. A systematic spread across every socket points to how the ring ends were paired at the origin.",
      "Interference from other circuits connected to the consumer unit":
        "The ring is isolated and its conductors are disconnected for continuity testing, so other outgoing circuits should not form the measuring path. Any parallel paths must be identified and controlled rather than treated as normal interference.",
      "Reduced size circuit protective conductor in the cable":
        "A smaller CPC makes r2 higher than r1 and produces the expected rise-and-fall pattern described by the IET, not arbitrary results caused by pairing corresponding ring ends instead of opposite ends.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/qxhf2est/guidance-note-3-2022-ninth-edition-first-printing-errata-november-2024.pdf",
      "https://electrical.theiet.org/wiring-matters/years/2022/89-march-2022/resistance-readings-for-step-3-of-the-ring-final-circuit-test/",
    ],
  },
  {
    prompt:
      "What is the most appropriate method of verifying the polarity of the ring final circuit?",
    options: [
      "Comparing the test results from stage 2 and stage 3 as identified in GN3",
      "Linking line and cpc and testing at each socket between line and cpc",
      "Testing at each socket using and earth fault loop impedance tester",
      "Using a long lead and testing from the MET to each socket in turn",
    ],
    answer:
      "Comparing the test results from stage 2 and stage 3 as identified in GN3",
    rationales: {
      "Linking line and cpc and testing at each socket between line and cpc":
        "That linked method is commonly used on radial circuits. A ring final circuit needs its three-stage end-to-end and cross-connection procedure to prove that every conductor forms the intended ring and is correctly connected.",
      "Testing at each socket using and earth fault loop impedance tester":
        "A live loop test can indicate an earth path but adds unnecessary live exposure and does not prove neutral continuity. The ring procedure verifies polarity during dead testing.",
      "Using a long lead and testing from the MET to each socket in turn":
        "A wander lead can confirm CPC continuity from the MET, but it does not verify that line and neutral are on their correct socket terminals or that both ring legs are correctly paired.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/qxhf2est/guidance-note-3-2022-ninth-edition-first-printing-errata-november-2024.pdf",
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
    ],
  },
  {
    prompt:
      "Questions 28 to 32 relate to the following scenario: Tests are to be carried out on a newly installed installation forming part of 230 V single-phase TT system. The installation is protected by a 300 mA BS EN 61008 RCD installed for fire protection. 30mA BS EN 61009 RCBOs are installed protecting each outgoing circuit. How is the maximum resistance for the installation earth electrode determined?",
    options: ["230 V x I∆n", "230 V ÷ I∆n", "50 V x I∆n", "50 V ÷ I∆n"],
    answer: "50 V ÷ I∆n",
    rationales: {
      "230 V x I∆n":
        "Multiplying voltage by current does not produce resistance; its unit is power. The criterion is based on limiting touch voltage, not using the nominal line voltage as a product.",
      "230 V ÷ I∆n":
        "Division gives resistance, but 230 V is the nominal supply voltage rather than the conventional touch-voltage limit used by Regulation 411.5.3. It would allow an unsafe electrode resistance.",
      "50 V x I∆n":
        "The correct 50 V limit is present, but multiplication still gives watts rather than ohms. Rearranging RA × IΔn ≤ 50 V requires voltage to be divided by residual operating current.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2021/87-september-2021/tt-earthing-considerations/",
    ],
  },
  {
    prompt:
      "During an optional ½ IΔn diagnostic test on a general non-delay RCD, what result is expected?",
    options: [
      "The RCD should not trip",
      "The RCD will operate when a fault current occurs",
      "The disconnection time will be met",
      "The requirements for additional protection will be met",
    ],
    answer: "The RCD should not trip",
    rationales: {
      "The RCD will operate when a fault current occurs":
        "At half rated residual current a general RCD is expected not to operate. Operation is verified at rated residual current under the current BS 7671 field-test requirement.",
      "The disconnection time will be met":
        "A non-trip check cannot measure an operating time because the contacts should remain closed. Timing is assessed using a test current intended to make the device operate.",
      "The requirements for additional protection will be met":
        "Additional protection depends on correct selection of a 30 mA device and verification of its operation. A half-current non-trip check alone cannot demonstrate the protective disconnection requirement.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2022/91-july-2022/changes-to-rcd-testing-in-bs-76712018plusa22022/",
    ],
  },
  {
    prompt:
      "What did the former 5 IΔn field test on a 30 mA RCD protecting socket-outlets verify?",
    options: [
      "To ensure the RCD mechanism works correctly",
      "To verify it meets the requirements for Additional Protection",
      "To verify it meets the requirements for Automatic Disconnection",
      "To verify it meets the requirements of BS EN 61008",
    ],
    answer: "To verify it meets the requirements for Additional Protection",
    rationales: {
      "To ensure the RCD mechanism works correctly":
        "Basic mechanical operation can be checked with the integral test button and operation at rated residual current. Historically, the five-times test specifically checked the rapid 40 ms criterion associated with 30 mA additional protection.",
      "To verify it meets the requirements for Automatic Disconnection":
        "Fault protection by automatic disconnection is verified at the operating current and time applicable to that protective measure. The legacy five-times test targeted the enhanced shock protection provided by a 30 mA RCD.",
      "To verify it meets the requirements of BS EN 61008":
        "Product-standard conformity is established by the manufacturer through a full laboratory test programme. One field measurement at 5 IΔn cannot certify the device to BS EN 61008.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2022/91-july-2022/changes-to-rcd-testing-in-bs-76712018plusa22022/",
    ],
  },
  {
    prompt:
      "What would be the x1 test current for an RCD having the maximum rating when providing fire protection?",
    options: ["100 mA", "30 mA", "300 mA", "500 mA"],
    answer: "300 mA",
    rationales: {
      "100 mA":
        "A 100 mA RCD may be selected for fire protection in an appropriate design, but it is below the present maximum residual-current rating identified by IET guidance.",
      "30 mA":
        "Thirty milliamps is the upper rating for additional protection against electric shock. It can also reduce fire risk, but it is not the maximum fire-protection rating asked for.",
      "500 mA":
        "Five hundred milliamps is above the 300 mA ceiling specified for an RCD selected for fire protection. At x1 it would also inject 500 mA, so it cannot represent the maximum permitted fire-protection device in this question.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2019/77-september-2019/which-rcd-type/",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/webinar-questions-and-answers/rcds-selection-types-and-testing-webinar/",
    ],
  },
  {
    prompt:
      "What is the maximum operating time when a 30 mA BS EN 61009 RCBO is tested at IΔn using an AC test current?",
    options: ["40 ms", "200 ms", "300 ms", "400 ms"],
    answer: "300 ms",
    rationales: {
      "40 ms":
        "Forty milliseconds was the former limit used for a 5 IΔn additional-protection test. It is not the current maximum for the prescribed field test performed at IΔn.",
      "200 ms":
        "An RCBO may operate this quickly, but 200 ms is not the stated upper limit for a general non-delay device tested at its rated residual current. The permitted boundary is 300 ms.",
      "400 ms":
        "Four hundred milliseconds exceeds the 300 ms maximum for this IΔn field test. A result at 400 ms therefore fails the required operating-time check.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2022/91-july-2022/changes-to-rcd-testing-in-bs-76712018plusa22022/",
    ],
  },
  {
    prompt:
      "Questions 33 to 40 relate to the following scenario: A commercial storage unit has been rewired and the installation forms part of 400/230 V three-phase TN-S system. All 'dead' tests have been completed. 'Live' testing is about to commence. Why is a live polarity check carried out at the origin of the installation?",
    options: [
      "To ensure the DNO's incoming supply has the correct polarity",
      "To replace the need for a dead polarity test on the installation",
      "To verify that double-pole switches will automatically operate",
      "To verify that the polarity throughout the installation is correct",
    ],
    answer: "To ensure the DNO's incoming supply has the correct polarity",
    rationales: {
      "To replace the need for a dead polarity test on the installation":
        "The dead polarity checks prove correct connection of devices and accessories throughout the fixed wiring. A live check at the origin verifies the external supply and cannot replace those circuit checks.",
      "To verify that double-pole switches will automatically operate":
        "A polarity measurement identifies conductor potentials; it does not exercise a switching mechanism. Functional operation of switches is a separate verification activity.",
      "To verify that the polarity throughout the installation is correct":
        "A test made only at the origin cannot detect a line-neutral reversal at a downstream accessory. Correct polarity within the installation should already have been established by the dead tests.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
      "https://www.hse.gov.uk/pubns/priced/gs38.pdf",
    ],
  },
  {
    prompt:
      "What is the reason for verifying the prospective fault current at the origin of the installation?",
    options: [
      "To verify that the prospective fault current exceeds the breaking capacities of the protective devices",
      "To verify that the protective conductors of the installation can withstand the prospective fault current",
      "To verify that the protective devices operate in the disconnection time given in BS 7671",
      "To verify that the short circuit breaking capacity of the protective devices exceed the value of prospective fault current",
    ],
    answer:
      "To verify that the short circuit breaking capacity of the protective devices exceed the value of prospective fault current",
    rationales: {
      "To verify that the prospective fault current exceeds the breaking capacities of the protective devices":
        "That relationship would mean the devices could be required to interrupt more current than they are rated to break, risking destructive failure. The required inequality is the reverse.",
      "To verify that the protective conductors of the installation can withstand the prospective fault current":
        "Protective-conductor thermal withstand is checked using conductor size, protective-device energy let-through and the adiabatic relationship. PFC at the origin is primarily compared with equipment short-circuit ratings.",
      "To verify that the protective devices operate in the disconnection time given in BS 7671":
        "Disconnection time under an earth fault is verified from the fault-loop impedance and device time-current characteristic. PFC establishes the maximum fault duty the device may have to interrupt safely.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
      "https://electrical.theiet.org/media/2218/bs_7671_2018-model_forms-all.pdf",
    ],
  },
  {
    prompt:
      "What is the purpose of verifying the earth fault loop impedance at the furthest point on each final circuit?",
    options: [
      "To verify that the fault current exceeds the breaking capacity of the protective device",
      "To verify the impedance is high enough to cause a low fault current to flow",
      "To verify the impedance is high enough to ensure RCDs are tripped",
      "To verify the impedance is low enough to cause a high fault current to flow",
    ],
    answer: "To verify the impedance is low enough to cause a high fault current to flow",
    rationales: {
      "To verify that the fault current exceeds the breaking capacity of the protective device":
        "Fault current must remain within the device's breaking capacity. Zs verification instead establishes that enough earth-fault current will flow to operate the device within the required disconnection time.",
      "To verify the impedance is high enough to cause a low fault current to flow":
        "A low fault current can delay or prevent operation of an overcurrent device, leaving a dangerous touch voltage present. The loop needs sufficiently low impedance.",
      "To verify the impedance is high enough to ensure RCDs are tripped":
        "Higher impedance reduces residual fault current rather than helping an RCD operate. Where an RCD provides fault protection, the loop must still permit at least its operating current and satisfy the touch-voltage criterion.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
      "https://electrical.theiet.org/wiring-matters/years/2024/100-may-2024/why-are-the-values-of-maximum-earth-fault-loop-impedance-different/",
    ],
  },
  {
    prompt:
      "What action should be taken to allow for the effect of transient voltages when carrying out earth fault loop impedance tests?",
    options: [
      "The instrument is on the lowest measuring range",
      "The test is repeated to confirm consistent readings",
      "Turn off the anti-trip function on the instrument",
      "Turn on the anti-trip function on the instrument",
    ],
    answer: "The test is repeated to confirm consistent readings",
    rationales: {
      "The instrument is on the lowest measuring range":
        "Range selection changes resolution but cannot distinguish a stable loop value from a momentary supply disturbance. Comparable repeat readings provide that confidence.",
      "Turn off the anti-trip function on the instrument":
        "Anti-trip mode controls the test current used to avoid unwanted RCD operation. Disabling it does not remove transient voltage from the supply or prove that one reading is representative.",
      "Turn on the anti-trip function on the instrument":
        "Low-current anti-trip testing may be necessary downstream of an RCD, but it is not a check for transient influence. Consistency is assessed by repeating the measurement.",
    },
    sourceUrls: [
      "https://shop.theiet.org/guidance-note-3-inspection-testing-10th-edition",
      "https://www.hse.gov.uk/pubns/priced/gs38.pdf",
    ],
  },
  {
    prompt:
      "What factor can significantly reduce the values of measured earth fault loop impedance, compared to a calculated figure obtained using measured ze and measured r1 + r2 values?",
    options: [
      "A loose connection in the line conductor",
      "High circuit load during testing",
      "Leakage currents",
      "Parallel earth paths",
    ],
    answer: "Parallel earth paths",
    rationales: {
      "A loose connection in the line conductor":
        "A loose series connection adds resistance to the loop and tends to increase the measured value, often with unstable results. It does not provide the lower-resistance return route described.",
      "High circuit load during testing":
        "Load and supply variation can affect measurement stability, but a high load does not systematically place another conductor in parallel with R1+R2 to reduce the loop resistance.",
      "Leakage currents":
        "Leakage may disturb some instruments or operate an RCD, but current leakage by itself is not a low-resistance metallic return path. Bonding, containment and connected services can form such parallel paths.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/qxhf2est/guidance-note-3-2022-ninth-edition-first-printing-errata-november-2024.pdf",
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
    ],
  },
  {
    prompt:
      "What value requires the application of a multiplier correction factor when confirming an earth fault loop impedance test result complies with the IET Wiring Regulations?",
    options: [
      "The measured R1+R2 value",
      "The measured ZS values",
      "The tabulated values in BS 7671",
      "The values in Guidance Note 3",
    ],
    answer: "The tabulated values in BS 7671",
    rationales: {
      "The measured R1+R2 value":
        "R1+R2 may be temperature-corrected for design calculations, but the quick field compliance comparison in this question applies the Appendix 3 factor to the Chapter 41 maximum Zs value.",
      "The measured ZS values":
        "The measured value represents the installation at its test temperature. For the standard 80% method, the permissible tabulated limit is reduced before the reading is compared with it; the reading itself is not multiplied down.",
      "The values in Guidance Note 3":
        "GN3 and the On-Site Guide already publish maximum measured values adjusted for field use. Applying the 0.8 factor again would double-correct the limit.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2024/100-may-2024/why-are-the-values-of-maximum-earth-fault-loop-impedance-different/",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
    ],
  },
  {
    prompt:
      "The water heater circuit is wired in 6mm² with a 2.5mm² cpc conductors, and is protected by a 32 A BS 88-2 fuse. What is the maximum permitted measured earth fault loop impedance value for compliance with BS 7671?",
    options: ["0.79 Ω", "0.99 Ω", "1.36 Ω", "1.70 Ω"],
    answer: "0.79 Ω",
    rationales: {
      "0.99 Ω":
        "This is the Chapter 41 value at the conductor's normal operating-temperature basis, not the direct field-measurement limit. Applying the 0.8 allowance gives 0.79 Ω for comparison with the measured Zs.",
      "1.36 Ω":
        "This is 80% of the 1.70 Ω value associated with a five-second condition. A final circuit rated at 32 A in the stated installation uses the shorter disconnection requirement.",
      "1.70 Ω":
        "This is the uncorrected value associated with the five-second BS 88-2 condition, not the ambient-temperature measured limit for the applicable final-circuit disconnection time.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2024/100-may-2024/why-are-the-values-of-maximum-earth-fault-loop-impedance-different/",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
    ],
  },
  {
    prompt: "What is the purpose of the phase-sequence test?",
    options: [
      "To ensure balanced loads on the three-phase distribution board",
      "To ensure harmonic currents are not created on the system",
      "To ensure single-pole protective devices are in the line conductor",
      "To ensure that three-phase motors turn in the correct direction",
    ],
    answer: "To ensure that three-phase motors turn in the correct direction",
    rationales: {
      "To ensure balanced loads on the three-phase distribution board":
        "Load balance is assessed from current or design loading on each phase. A phase-sequence indicator reports phase order, not the magnitude of phase currents.",
      "To ensure harmonic currents are not created on the system":
        "Harmonics arise from non-linear loads and are assessed with waveform or power-quality measurements. Changing phase order does not eliminate their harmonic content.",
      "To ensure single-pole protective devices are in the line conductor":
        "That is a polarity and inspection requirement. Phase sequence concerns the rotational order of the three line conductors and its effect on polyphase machinery.",
    },
    sourceUrls: [
      "https://www.fluke.com/en-gb/product/electrical-testing/basic-testers/fluke-9062",
      "https://www.megger.com/en-gb/et-online/june-2008/don%E2%80%99t-be-phased-by-phases%21",
    ],
  },
] as const;
