export const initialVerificationTest6Q01To45 = [
  {
    prompt:
      "On completion of a new installation, the Electrical Installation Certificate would 'not' be signed by the:",
    options: [
      "Client",
      "Design engineer",
      "Inspection and testing engineer",
      "Person who constructed the installation",
    ],
    answer: "Client",
    rationales: {
      "Design engineer":
        "The person responsible for design signs the design declaration on the Electrical Installation Certificate. That signature accepts responsibility for the design's compliance with BS 7671.",
      "Inspection and testing engineer":
        "The person responsible for inspection and testing signs the verification declaration. Their signature confirms that the stated inspection and test work was completed and the recorded results are accurate.",
      "Person who constructed the installation":
        "Construction is one of the three responsibilities certified on an EIC. The person responsible for erection therefore signs the construction declaration, even where one individual fills more than one role.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/2822/bs7671-all-forms-v31.pdf",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/model-forms/",
    ],
  },
  {
    prompt:
      "Before inspecting the condition of electrical equipment installed in a new unoccupied building, the inspector should:",
    options: [
      "Ask the builders if they are aware of any faults",
      "Check for components that may be susceptible to damage during testing",
      "Disconnect all fluorescent luminaires",
      "Test run the equipment to ascertain its condition",
    ],
    answer: "Check for components that may be susceptible to damage during testing",
    rationales: {
      "Ask the builders if they are aware of any faults":
        "Information from site workers may be useful, but it cannot replace the inspector's own assessment. The inspector must identify connected electronics and other equipment that could be damaged or distort a test result.",
      "Disconnect all fluorescent luminaires":
        "A blanket instruction to disconnect every fluorescent luminaire is unnecessarily broad. The required action depends on the control gear, test being applied and manufacturer's instructions, so susceptible equipment must first be identified.",
      "Test run the equipment to ascertain its condition":
        "Energising equipment before preliminary inspection and the relevant dead tests can expose people or equipment to an unknown defect. Functional testing belongs later in the verification sequence, once it is safe to energise.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
    ],
  },
  {
    prompt:
      "Before an addition or alteration is made, what must be established about the affected existing installation under BS 7671?",
    options: [
      "A Minor Works Certificate can be produced",
      "The completion certificate can be produced for the existing installation",
      "Its equipment ratings and condition, supply capacity, earthing and bonding are adequate, and the addition will not impair safety",
      "The permission of the supply company has been obtained",
    ],
    answer:
      "Its equipment ratings and condition, supply capacity, earthing and bonding are adequate, and the addition will not impair safety",
    rationales: {
      "A Minor Works Certificate can be produced":
        "Certificate type depends on the work: a new circuit requires an EIC, while a limited alteration may use a Minor Works Certificate. Producing one particular form is not the precondition for deciding whether an addition is safe.",
      "The completion certificate can be produced for the existing installation":
        "An earlier certificate is useful evidence but is not essential and does not prove present adequacy. The existing equipment affected by the work, and the earthing and bonding, must be assessed in their current condition.",
      "The permission of the supply company has been obtained":
        "Distributor consent is required only for particular supply-side matters, not every addition or alteration. The general BS 7671 check concerns whether existing equipment and protective arrangements are adequate for the changed circumstances.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2023/98-november-2023/surge-protective-devices-spds/",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/general-faqs/",
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
        "The person ordering the work is identified for certification, but contact details do not describe the installation's electrical design. Verification needs circuit information, protective measures and equipment data against which the work can be checked.",
      "Previous test results":
        "A completely new installation has no earlier in-service results to compare. Design documentation and current test criteria are needed before the first verification results are created.",
      "Schedule of test results":
        "The inspector produces the schedule from measurements taken during verification. A blank form may be available, but completed results cannot be an input before the tests have been carried out.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/2822/bs7671-all-forms-v31.pdf",
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
    ],
  },
  {
    prompt:
      "The statutory document that specifically identifies an installer must be competent to confirm the electrical work they undertake is safe is the:",
    options: [
      "BS 7671: 2008",
      "Electricity Safety, Quality and Continuity Regulations",
      "Electricity at Work Regulations",
      "Health and Safety at Work Act",
    ],
    answer: "Electricity at Work Regulations",
    rationales: {
      "BS 7671: 2008":
        "BS 7671 is a non-statutory installation standard, and the cited 2008 edition is superseded. It provides a route to good practice but is not the statutory instrument containing the competence duty in Regulation 16.",
      "Electricity Safety, Quality and Continuity Regulations":
        "ESQCR primarily governs distributors' and suppliers' networks, supply quality and related safety duties. It is not the general workplace competence provision for people carrying out electrical work.",
      "Health and Safety at Work Act":
        "The Act establishes broad health-and-safety duties for employers and workers. The more specific electrical competence requirement is in Regulation 16 of the Electricity at Work Regulations 1989.",
    },
    sourceUrls: [
      "https://www.legislation.gov.uk/uksi/1989/635/regulation/16/made",
      "https://www.hse.gov.uk/pubns/priced/hsr25.pdf",
    ],
  },
  {
    prompt:
      "The safest method of making sure an installation is safe to work on would be:",
    options: [
      "To check the installation with a fluke tester",
      "To ensure that RCDs are functional",
      "To follow a safe isolation procedure",
      "To isolate the installation at the main cut-out",
    ],
    answer: "To follow a safe isolation procedure",
    rationales: {
      "To check the installation with a fluke tester":
        "Fluke is a manufacturer, not a test method, and no single reading makes an installation safe. A suitable voltage indicator is only one part of isolation, alongside identifying the supply, securing it off and proving the indicator before and after use.",
      "To ensure that RCDs are functional":
        "An RCD test establishes device operation but does not isolate all live conductors or prevent reconnection. Work must not rely on an RCD as a substitute for proving the conductors dead.",
      "To isolate the installation at the main cut-out":
        "The distributor's cut-out fuse may be withdrawn only by an authorised person, and removal alone is not the complete procedure. Secure lock-off, prove-dead checks and control of every relevant source are still required.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/pubns/priced/hsg85.pdf",
      "https://www.hse.gov.uk/pubns/books/gs38.htm",
    ],
  },
  {
    prompt: "Defects or omissions revealed during initial verification shall:",
    options: [
      "Be made good after the certificate is issued",
      "Be made good before the certificate is issued",
      "Be made good when the certificate is issued",
      "Be made good within 30 days of the certificate being issued",
    ],
    answer: "Be made good before the certificate is issued",
    rationales: {
      "Be made good after the certificate is issued":
        "An EIC declares that the work complies at the time of certification. Issuing it first would knowingly certify an installation while identified defects or omissions remained outstanding.",
      "Be made good when the certificate is issued":
        "Rectification must be completed and, where necessary, retested before the declaration is signed. Simultaneous paperwork does not provide evidence that the corrected work has passed verification.",
      "Be made good within 30 days of the certificate being issued":
        "Initial verification has no general 30-day grace period for known non-compliance. The installation must be brought into compliance before the EIC is issued and put into service.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/2822/bs7671-all-forms-v31.pdf",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/model-forms/",
    ],
  },
  {
    prompt: "A visual inspection of a new installation must be carried out:",
    options: [
      "During erection",
      "During erection and upon completion",
      "During testing",
      "Upon completion",
    ],
    answer: "During erection and upon completion",
    rationales: {
      "During erection":
        "Inspection while work is open is essential for routes, joints and concealed details, but it is not sufficient on its own. The completed installation also needs inspection before it is put into service.",
      "During testing":
        "Inspection begins before the formal test sequence and is not confined to the time instruments are connected. Important construction details may already be hidden if inspection waits until testing.",
      "Upon completion":
        "A completion-only inspection cannot assess wiring that has become inaccessible behind finishes or inside the building fabric. BS 7671 therefore requires appropriate inspection during erection as well as on completion.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2025/107-september-2025/safe-isolation-stories-that-could-save-lives-are-you-sure-you-are-safe/",
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
    ],
  },
  {
    prompt:
      "A permanent label to BS 951 should be fixed in a visible position at points of connection to every earth electrode or bonding position. The wording on the label should state:",
    options: [
      "Safety Earth Connection - Do Not Remove",
      "Safety Earth Point - Do Not Remove",
      "Safety Earthing Connection -Do Not Remove",
      "Safety Electrical Connection - Do Not Remove",
    ],
    answer: "Safety Electrical Connection - Do Not Remove",
    rationales: {
      "Safety Earth Connection - Do Not Remove":
        "This conveys a similar warning but is not the prescribed BS 951 wording. The standard phrase uses 'Electrical', allowing the same label to identify both earthing and protective-bonding safety connections.",
      "Safety Earth Point - Do Not Remove":
        "The label protects a safety connection, not merely a physical point. It also needs to cover bonding terminations that may not be an earth-electrode point.",
      "Safety Earthing Connection -Do Not Remove":
        "Besides the missing space, 'Earthing' is not the specified word. The prescribed durable notice reads 'Safety Electrical Connection – Do Not Remove'.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/2066/bs-7671-2018-corrigendum-dec-2018-v2.pdf",
      "https://electrical.theiet.org/media/2822/bs7671-all-forms-v31.pdf",
    ],
  },
  {
    prompt:
      "For a distribution board where opening the door could give access to live parts, which listed measure specifically controls who may open it?",
    options: [
      "The board has a handle and the door is shut",
      "The board has at least protection to IP2X",
      "The board is situated at least 2 metres above ground level",
      "The door can only be opened with a key or tool",
    ],
    answer: "The door can only be opened with a key or tool",
    rationales: {
      "The board has a handle and the door is shut":
        "A handle and closed door do not restrict access or establish a degree of protection. The enclosure must prevent ordinary access to hazardous live parts by construction or controlled opening.",
      "The board has at least protection to IP2X":
        "IP2X limits access with a standard probe and is a genuine enclosure requirement, but it does not control who is permitted to open the door. The question asks specifically for the access-control measure.",
      "The board is situated at least 2 metres above ground level":
        "Height alone is not an accepted means of basic protection for an ordinary distribution board. The enclosure and access arrangements must remain safe for foreseeable users and maintenance personnel.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/1605/protective-measures-special-installations-or-locations-part-1.pdf",
      "https://electrical.theiet.org/media/2822/bs7671-all-forms-v31.pdf",
    ],
  },
  {
    prompt:
      "The proposed interval between the first periodic inspection and future inspections should be recommended by:",
    options: [
      "The installation engineer",
      "The person carrying out the first periodic inspection",
      "The person carrying out the initial verification",
      "The person who designed the installation",
    ],
    answer: "The person carrying out the first periodic inspection",
    rationales: {
      "The installation engineer":
        "The installer can describe the work but does not own the later periodic assessment. The inspector completing the EICR uses the observed condition, use and environment to recommend the next inspection date.",
      "The person carrying out the initial verification":
        "Initial verification recommends the interval to the first periodic inspection. Once that first periodic inspection takes place, its inspector reassesses the interval for the following inspection.",
      "The person who designed the installation":
        "The designer helps determine the first inspection interval for a new installation, based on intended use and external influences. Future intervals are reviewed by the periodic inspector using actual evidence of deterioration.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/2822/bs7671-all-forms-v31.pdf",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/model-forms/",
    ],
  },
  {
    prompt: "Which of the following is not a requirement of the inspection checklist:",
    options: [
      "Availability of customer user instructions",
      "Correct selection of cable and protection devices",
      "No visible damage",
      "Presence of a BS mark or other suitable certification",
    ],
    answer: "Availability of customer user instructions",
    rationales: {
      "Correct selection of cable and protection devices":
        "Inspection must confirm that conductors and protective devices are suitable for the design current, fault protection and installation conditions. Incorrect selection can cause overheating or failure to disconnect safely.",
      "No visible damage":
        "Damage, deterioration and defects that could impair safety are core visual-inspection matters. New equipment and wiring still need checking for transport, installation or site damage.",
      "Presence of a BS mark or other suitable certification":
        "Equipment must comply with an appropriate standard or otherwise provide an equivalent degree of safety. Markings and certification are evidence the inspector uses when checking correct equipment selection.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/2822/bs7671-all-forms-v31.pdf",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
    ],
  },
  {
    prompt:
      "According to BS7671, the minimum insulation resistance value for an SELV installation is:",
    options: ["0.25 MΩ", "0.5 MΩ", "1.0 MΩ", "2.0 MΩ"],
    answer: "0.5 MΩ",
    rationales: {
      "0.25 MΩ":
        "A quarter megohm is below the BS 7671 minimum for an SELV or PELV circuit. The reduced test voltage for these systems does not reduce the acceptable resistance below 0.5 MΩ.",
      "1.0 MΩ":
        "One megohm is the usual minimum for low-voltage circuits tested at 500 V or 1000 V DC. SELV and PELV use the separate 250 V DC, 0.5 MΩ row of the insulation-resistance table.",
      "2.0 MΩ":
        "Two megohms is often used as a good-practice investigation threshold for ordinary wiring, not the statutory table minimum asked here. The SELV minimum remains 0.5 MΩ.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
      "https://electrical.theiet.org/wiring-matters/years/2020/81-july-2020/history-of-insulation-resistance-testing/",
    ],
  },
  {
    prompt:
      "A continuity of ring final circuit conductors test is carried out using a low resistance scaled ohmmeter:",
    options: [
      "For ease of use",
      "To ensure an accurate reading",
      "To ensure sufficient reading range",
      "To prove the integrity of the cable insulation",
    ],
    answer: "To ensure an accurate reading",
    rationales: {
      "For ease of use":
        "Convenience is not the measurement requirement. Ring-conductor values are commonly fractions of an ohm, so the instrument must have suitable resolution, lead nulling and test current for reliable low-resistance results.",
      "To ensure sufficient reading range":
        "A wide maximum range is less important than accuracy and resolution at the bottom of the scale. A general-purpose high-range meter can display resistance yet still be unsuitable for protective-conductor verification.",
      "To prove the integrity of the cable insulation":
        "Continuity establishes an unbroken conductive path and measures its resistance. Cable insulation is assessed separately with an insulation-resistance tester applying the prescribed DC test voltage.",
    },
    sourceUrls: [
      "https://media.fluke.com/b3604e04-5bdc-4d3d-8ec5-b2df00584ae8_original%20file.pdf",
      "https://electrical.theiet.org/media/qxhf2est/guidance-note-3-2022-ninth-edition-first-printing-errata-november-2024.pdf",
    ],
  },
  {
    prompt:
      "During an initial verification which one of the following tests should be carried out first:",
    options: [
      "Continuity of protective conductors",
      "Earth fault loop impedance",
      "Insulation resistance",
      "PFC",
    ],
    answer: "Continuity of protective conductors",
    rationales: {
      "Earth fault loop impedance":
        "A direct loop-impedance measurement is a live test and must not precede the safety-establishing dead tests. The protective conductors first need to be shown continuous.",
      "Insulation resistance":
        "Insulation resistance is also an early dead test, but protective-conductor continuity comes first in the prescribed sequence. This confirms the safety path before other test voltages are applied.",
      PFC: "Prospective fault current is determined at the supply and may involve live measurement. It follows the relevant inspection, dead testing and confirmation that the installation can safely be energised.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
      "https://electrical.theiet.org/media/qxhf2est/guidance-note-3-2022-ninth-edition-first-printing-errata-november-2024.pdf",
    ],
  },
  {
    prompt:
      "Which of the following is not a method of ascertaining the prospective short circuit current at the origin of an installation",
    options: ["Calculation", "Elimination", "Enquiry", "Measurement"],
    answer: "Elimination",
    rationales: {
      Calculation:
        "PFC can be calculated when the necessary source voltage and impedance information is reliable. The resulting value must represent the fault condition at the point under consideration.",
      Enquiry:
        "BS 7671 permits characteristics of the available supply to be established by enquiry. A distributor may provide a declared maximum PFC for use in design and verification.",
      Measurement:
        "A suitable instrument can measure or derive PFC at the origin under controlled live-test conditions. This is a recognised method where the test is justified and can be carried out safely.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
      "https://electrical.theiet.org/media/dydg4v05/wiring-matters-issue-105-may-2025.pdf",
    ],
  },
  {
    prompt:
      "When testing a 2.5/1.5 mm² PVC/PVC ring final circuit by Method 1, the end-to-end line resistance r1 is 0.40 Ω. What approximate end-to-end cpc resistance r2 is expected?",
    options: ["0.16 Ω", "0.60 Ω", "0.67 Ω", "1.00 Ω"],
    answer: "0.67 Ω",
    rationales: {
      "0.16 Ω":
        "The 1.5 mm² CPC has a smaller cross-sectional area than the 2.5 mm² line conductor, so its resistance must be higher, not lower. Multiplying 0.4 Ω by the approximate conductor-resistance ratio gives about 0.67 Ω.",
      "0.60 Ω":
        "This is in the right direction but does not apply the expected 2.5/1.5 conductor ratio used by the question. The standard approximation is R2 ≈ 1.67 × R1.",
      "1.00 Ω":
        "One ohm would make the CPC resistance two and a half times the line resistance. That is too high for the stated 1.5 mm² versus 2.5 mm² copper conductor sizes of equal length.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2022/89-march-2022/resistance-readings-for-step-3-of-the-ring-final-circuit-test/",
      "https://electrical.theiet.org/media/qxhf2est/guidance-note-3-2022-ninth-edition-first-printing-errata-november-2024.pdf",
    ],
  },
  {
    prompt:
      "During a ring-final cross-connection test, eleven sockets give consistent readings near 0.72 Ω and one gives a repeatable higher reading of 0.81 Ω. Which circuit arrangement could explain that isolated higher reading?",
    options: [
      "A high-resistance joint affecting the whole ring",
      "A missing earth connection at the socket",
      "A short circuit at the socket",
      "A spur supplying that socket",
    ],
    answer: "A spur supplying that socket",
    rationales: {
      "A high-resistance joint affecting the whole ring":
        "A fault affecting the whole ring would disturb readings at multiple points, not create one isolated, repeatable higher value. A local connection fault should still be excluded during investigation.",
      "A missing earth connection at the socket":
        "An open CPC would normally prevent a finite R1+R2 reading at the affected point. The stated value shows that a conductive test path is present, although its route is longer or more resistive.",
      "A short circuit at the socket":
        "A short circuit introduces an unintended very-low-resistance path and would tend to reduce a continuity reading. It does not explain one modestly higher value in this dead-test pattern.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2022/89-march-2022/resistance-readings-for-step-3-of-the-ring-final-circuit-test/",
      "https://electrical.theiet.org/media/qxhf2est/guidance-note-3-2022-ninth-edition-first-printing-errata-november-2024.pdf",
    ],
  },
  {
    prompt:
      "Four circuits have insulation resistances of 40MΩ, 50MΩ, 100MΩ and 100MΩ. When tested together (insulation lump test) what would be the expected reading:",
    options: ["0.065 MΩ", "15.38 MΩ", "290 MΩ", "6.5 MΩ"],
    answer: "15.38 MΩ",
    rationales: {
      "0.065 MΩ":
        "0.065 is the sum of the reciprocal values in MΩ⁻¹, not the equivalent resistance. That conductance sum must be inverted: 1 / 0.065 = 15.38 MΩ.",
      "290 MΩ":
        "This simply adds the four resistances as though they were in series. Separate circuit leakage paths tested together are in parallel, so their combined insulation resistance is below the smallest individual value.",
      "6.5 MΩ":
        "This is not the reciprocal of the calculated parallel conductance. The four terms 1/40, 1/50, 1/100 and 1/100 total 0.065 MΩ⁻¹, giving 15.38 MΩ.",
    },
    sourceUrls: [
      "https://www.megger.com/en-gb/et-online/july-2021/testing-parallel-resistances",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
    ],
  },
  {
    prompt:
      "A 2.5/1.5 mm² PVC/PVC ring final circuit has end-to-end line resistance r1 = 0.40 Ω and expected r2 ≈ 0.67 Ω. After cross-connection, what approximate R1+R2 reading is expected at a socket?",
    options: ["0.267Ω", "0.2Ω", "0.9 Ω", "1.8 Ω"],
    answer: "0.267Ω",
    rationales: {
      "0.2Ω":
        "Dividing r1 alone by two ignores the CPC resistance. With r2 approximately 0.67 Ω, the expected cross-connected value is (0.4 + 0.67) / 4 ≈ 0.267 Ω.",
      "0.9 Ω":
        "This is far above the expected parallel-path result and does not use the ring formula. The cross-connections create four equal path portions when the outlet is near the midpoint.",
      "1.8 Ω":
        "Adding or multiplying the end-to-end values without accounting for the parallel ring paths overstates the result. R1+R2 at the outlets is predicted from (r1 + r2) / 4.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2022/89-march-2022/resistance-readings-for-step-3-of-the-ring-final-circuit-test/",
      "https://electrical.theiet.org/media/qxhf2est/guidance-note-3-2022-ninth-edition-first-printing-errata-november-2024.pdf",
    ],
  },
  {
    prompt:
      "When using a four terminal earth electrode tester to measure earth electrode resistance the connection to the earth electrode is made using terminals:",
    options: ["C1 and P1", "C1 and P2", "C2 and P2", "P1 and C2"],
    answer: "C1 and P1",
    rationales: {
      "C1 and P2":
        "C1 is the near current connection, but P2 is the remote potential-spike terminal. Joining those at the electrode would defeat the intended separation of the potential measurement.",
      "C2 and P2":
        "C2 and P2 connect to the remote current and potential probes in the fall-of-potential arrangement. They are not the paired terminals for the electrode under test.",
      "P1 and C2":
        "P1 is the near potential lead, whereas C2 belongs at the remote current probe. The electrode under test uses the two near terminals, C1 and P1.",
    },
    sourceUrls: [
      "https://www.megger.com/en/products/det4-series-four-terminal-earth/ground-resistance-testers",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/earthing-and-bonding-faqs/",
    ],
  },
  {
    prompt:
      "Which option describes an appropriate current verification approach for a 500 mA RCD?",
    options: [
      "A mandatory 0.5 IΔn field test only",
      "A mandatory 5 IΔn field test only",
      "No test is needed because the rating proves operation",
      "Operate the test button and carry out the prescribed field test at IΔn",
    ],
    answer:
      "Operate the test button and carry out the prescribed field test at IΔn",
    rationales: {
      "A mandatory 0.5 IΔn field test only":
        "The former half-current no-trip check was removed from the prescribed BS 7671 field-test schedule. It also omits the test button and the required effectiveness test at rated residual current.",
      "A mandatory 5 IΔn field test only":
        "The former five-times-current field check is no longer the prescribed routine. A 500 mA device is verified at IΔn and by operating its test button, not by this test alone.",
      "No test is needed because the rating proves operation":
        "The marked rating describes the intended operating characteristic; it cannot show that the installed device and its mechanism actually work. Verification requires functional operation and the prescribed instrument test.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2022/91-july-2022/changes-to-rcd-testing-in-bs-76712018plusa22022/",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/webinar-questions-and-answers/rcds-selection-types-and-testing-webinar/",
    ],
  },
  {
    prompt:
      "When comparing a Zs measurement made near ambient temperature with a maximum tabulated Zs value, what rule-of-thumb factor is commonly applied to the tabulated maximum to allow for conductor heating in service?",
    options: ["0.5", "0.75", "0.8", "1.2"],
    answer: "0.8",
    rationales: {
      "0.5":
        "Halving the tabulated maximum would impose an arbitrary 50 percent margin. The established field rule compares an ambient measured Zs with 80 percent of the BS 7671 tabulated value.",
      "0.75":
        "A factor of 0.75 is not the conventional rule-of-thumb allowance for conductor heating. It would be more restrictive than the published 0.8 comparison value.",
      "1.2":
        "A 1.2 multiplier may be used in a temperature calculation for the circuit-conductor portion of impedance. The question asks for the factor applied to the tabulated maximum when judging an ambient measurement, which is 0.8.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2024/100-may-2024/why-are-the-values-of-maximum-earth-fault-loop-impedance-different/",
      "https://electrical.theiet.org/media/qxhf2est/guidance-note-3-2022-ninth-edition-first-printing-errata-november-2024.pdf",
    ],
  },
  {
    prompt:
      "The maximum volt drops for lighting and power circuits from the public supply are:",
    options: ["3% and 5%", "4% and 5%", "5% and 3%", "5.0% and 4%"],
    answer: "3% and 5%",
    rationales: {
      "4% and 5%":
        "Four percent was associated with older general guidance but is not the current lighting recommendation for a public supply. Lighting is limited to 3 percent because voltage variation has a greater effect on light output and operation.",
      "5% and 3%":
        "This reverses the two categories. The lower 3 percent recommendation applies to lighting; 5 percent applies to other uses described here as power circuits.",
      "5.0% and 4%":
        "Neither figure is assigned correctly under the current Appendix 4 recommendations. The public-supply values are 3 percent for lighting and 5 percent for other uses.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2023/96-july-2023/how-voltage-drop-can-affect-ev-charging-point-open-pen-detection-devices/",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/general-faqs/",
    ],
  },
  {
    prompt:
      "What prospective earth-fault current is indicated at the origin of a 230 V TN-C-S installation when Ze = 0.45 Ω?",
    options: ["0.511 kA", "1.5 kA", "103.5 A", "1500 A"],
    answer: "0.511 kA",
    rationales: {
      "1.5 kA":
        "A 1.5 kA result would require a source-loop impedance near 0.153 Ω at 230 V. That is not the 0.45 Ω figure supplied in the question.",
      "103.5 A":
        "This multiplies voltage by impedance rather than applying Ohm's law. Fault current is calculated as 230 / 0.45 = approximately 511 A.",
      "1500 A":
        "Although 1500 A equals 1.5 kA, neither matches the stated impedance. The calculated 511 A must be divided by 1000 to express it as 0.511 kA.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
      "https://electrical.theiet.org/wiring-matters/years/2023/94-march-2023/determining-the-maximum-earth-fault-loop-impedance-for-protective-devices-to-bs-en-60898-bs-en-60947-2/",
    ],
  },
  {
    prompt:
      "In a mechanics workshop, the repositioning of an emergency stop button would require the completion of:",
    options: [
      "A minor works certificate",
      "A periodic inspection report",
      "A small works certificate",
      "An electrical installation certificate",
    ],
    answer: "A minor works certificate",
    rationales: {
      "A periodic inspection report":
        "An EICR reports the condition of an existing installation and is not the certificate for a specific alteration. Repositioning the device requires verification and certification of the altered circuit.",
      "A small works certificate":
        "BS 7671 provides a Minor Electrical Installation Works Certificate, not a form named 'small works certificate'. Informal paperwork cannot replace the prescribed certification information.",
      "An electrical installation certificate":
        "An EIC is required where a new circuit is introduced and may be used for larger groups of alterations. Moving a device on an existing circuit is the limited addition-or-alteration work for which a Minor Works Certificate is intended.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/2822/bs7671-all-forms-v31.pdf",
      "https://electrical.theiet.org/media/2821/bs7671-meiwcv2.pdf",
    ],
  },
  {
    prompt:
      "Records of inspections and test results should be kept during the life of an installation. This will enable:",
    options: [
      "Correct selection of equipment",
      "Deterioration to be identified",
      "Identification of defective parts",
      "Landlords to carry out repairs",
    ],
    answer: "Deterioration to be identified",
    rationales: {
      "Correct selection of equipment":
        "Equipment is selected during design from load, supply and environmental information. Historic results can inform later work but their central value is showing how the installation's condition changes over time.",
      "Identification of defective parts":
        "A current inspection may locate a defective component, but old records do not automatically identify which part has failed. Comparing successive readings reveals trends and deterioration that warrant further diagnosis.",
      "Landlords to carry out repairs":
        "Records support any dutyholder's maintenance decisions; they do not authorise or enable landlords specifically to perform electrical repairs. Such work still requires appropriate competence and scope.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/2822/bs7671-all-forms-v31.pdf",
      "https://www.legislation.gov.uk/uksi/1989/635/regulation/4/made",
    ],
  },
  {
    prompt:
      "Records of all checks, inspections and tests to an installation should be kept:",
    options: [
      "For 10 years",
      "For 3 years",
      "For one year",
      "For the working life of the installation",
    ],
    answer: "For the working life of the installation",
    rationales: {
      "For 10 years":
        "A fixed ten-year period may end while the installation remains in service. The records are needed for comparison and safe future alterations throughout the installation's working life.",
      "For 3 years":
        "Three years is not a general BS 7671 retention limit and may be shorter than a normal periodic-inspection interval. Discarding the documents then would remove the baseline needed by later inspectors.",
      "For one year":
        "One year provides almost no long-term evidence of deterioration or alteration history. Certificates, schedules and reports should pass to successive owners or dutyholders with the installation.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/2822/bs7671-all-forms-v31.pdf",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/model-forms/",
    ],
  },
  {
    prompt:
      "If an inspector notices an existing-installation defect that does not affect the safety of a new addition, which action still falls within the inspector's reporting responsibility?",
    options: [
      "Are required to be corrected by the engineer doing the new additions",
      "Are required to be noted if observed by the engineer doing the new additions",
      "Are required to be reported to the local building authority by the additions engineer",
      "Ignore the observed defect completely because it is outside the new work",
    ],
    answer:
      "Are required to be noted if observed by the engineer doing the new additions",
    rationales: {
      "Are required to be corrected by the engineer doing the new additions":
        "The engineer must ensure the new work is safe and identify relevant observed defects, but is not automatically contracted or authorised to repair every unrelated fault. Urgent danger should be communicated immediately and made safe through an agreed action.",
      "Are required to be reported to the local building authority by the additions engineer":
        "Observed installation defects are normally reported to the client or dutyholder, not automatically to building control. Building-notification duties concern defined categories of building work rather than every unrelated electrical observation.",
      "Ignore the observed defect completely because it is outside the new work":
        "The repair may be outside the agreed work, but a known defect still has to be brought to the client or dutyholder's attention. Ignoring it would leave them unaware of a potentially important safety issue.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
      "https://electrical.theiet.org/wiring-matters/years/2025/106-july-2025/removing-the-distributors-cut-out-fuse/",
    ],
  },
  {
    prompt:
      "The maximum prospective fault current recorded on an electrical installation certificate should be:",
    options: [
      "The earth fault current",
      "The greater of either the short-circuit current or the earth fault current",
      "The lesser of either the short-circuit current or the earth fault current",
      "The short-circuit current",
    ],
    answer:
      "The greater of either the short-circuit current or the earth fault current",
    rationales: {
      "The earth fault current":
        "PEFC may be the greater value in some arrangements, but it cannot be assumed to govern every installation. The certificate must capture the maximum duty that either type of fault can impose.",
      "The lesser of either the short-circuit current or the earth fault current":
        "Recording the lower value could lead to selection of a device with inadequate breaking capacity for the larger fault. Protective equipment must be assessed against the worst credible fault current at its location.",
      "The short-circuit current":
        "PSCC may commonly be higher, but that is not guaranteed in every supply arrangement. The recorded PFC is the greater of PSCC and PEFC rather than one fixed fault type.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/2822/bs7671-all-forms-v31.pdf",
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
    ],
  },
  {
    prompt:
      "On completion of a new installation, the interval before the first periodic inspection would be decided by the:",
    options: [
      "Client",
      "Inspection and testing engineer",
      "Installation designer",
      "Installer",
    ],
    answer: "Installation designer",
    rationales: {
      Client:
        "The client can describe intended use and operational constraints but does not make the technical recommendation alone. The interval must be based on design, external influences, maintenance and expected deterioration.",
      "Inspection and testing engineer":
        "The verifier confirms the new work and records the design recommendation, but does not replace the designer's assessment of intended service conditions. A later periodic inspector recommends subsequent intervals from actual condition.",
      Installer:
        "The installer is responsible for construction in accordance with the design. Unless also acting as designer, they do not determine the design-based interval to the first periodic inspection.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/2822/bs7671-all-forms-v31.pdf",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/model-forms/",
    ],
  },
  {
    prompt: "Any addition to an existing installation should:",
    options: [
      "Be inspected and tested separate from the existing installation",
      "Have a similar wiring system to that used in the existing installation",
      "Have its own energy meter separate from that of the existing installation",
      "Not impair the safety of the existing installation",
    ],
    answer: "Not impair the safety of the existing installation",
    rationales: {
      "Be inspected and tested separate from the existing installation":
        "The added work must be verified, but its safety depends on existing supply, earthing, bonding and protective arrangements. It cannot always be assessed as though electrically independent of the original installation.",
      "Have a similar wiring system to that used in the existing installation":
        "Different compliant wiring systems can coexist when their ratings, interfaces and external influences are properly addressed. Visual similarity to the old wiring is not a BS 7671 safety requirement.",
      "Have its own energy meter separate from that of the existing installation":
        "Metering is a supply or operational choice and is unrelated to the general safety condition for an addition. An added circuit can normally share the installation's existing metered supply.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2023/98-november-2023/surge-protective-devices-spds/",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/general-faqs/",
    ],
  },
  {
    prompt:
      "Which of the following duties is 'not' the responsibility of the inspector:",
    options: [
      "To advise on remedial works",
      "To carry out maintenance and repairs on the installation",
      "To compare the test results with the design criteria",
      "To recommend the immediate isolation of defective parts",
    ],
    answer: "To carry out maintenance and repairs on the installation",
    rationales: {
      "To advise on remedial works":
        "Inspection identifies non-compliance and provides the client with information needed to address it. Recommending the nature or urgency of remedial work is consistent with that reporting role.",
      "To compare the test results with the design criteria":
        "A measurement has no pass-or-fail meaning until it is compared with the design and BS 7671 acceptance criteria. That evaluation is central to competent inspection and testing.",
      "To recommend the immediate isolation of defective parts":
        "Where an observed defect presents immediate danger, the inspector must communicate the risk and can recommend urgent isolation. Repair itself remains a separately agreed task.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/2822/bs7671-all-forms-v31.pdf",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
    ],
  },
  {
    prompt:
      "Which listed inspection item specifically checks whether a domestic consumer-unit enclosure prevents access to hazardous parts?",
    options: [
      "Correct connection of single-pole devices",
      "IP rating",
      "Identification of conductors",
      "Rating and type of protective devices",
    ],
    answer: "IP rating",
    rationales: {
      "Correct connection of single-pole devices":
        "Single-pole switches and protective devices must be connected in the line conductor. Inspection and polarity verification are needed because a factory enclosure cannot establish the correctness of site wiring.",
      "Identification of conductors":
        "The inspector must check conductor identification against the actual installed connections. Enclosing the consumer unit does not prevent missing, incorrect or ambiguous identification inside it.",
      "Rating and type of protective devices":
        "Device rating and type must suit each circuit and protective function, but that check concerns electrical coordination. It does not assess whether the enclosure itself prevents physical access to live parts.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/2822/bs7671-all-forms-v31.pdf",
      "https://electrical.theiet.org/media/1605/protective-measures-special-installations-or-locations-part-1.pdf",
    ],
  },
  {
    prompt:
      "When inspecting for adequate 'basic protection' (protection against electric shock or direct contact) which of the following does not require inspection. Presence and condition of:",
    options: ["Barriers", "Cpc's", "Enclosures", "Insulation"],
    answer: "Cpc's",
    rationales: {
      Barriers:
        "A barrier prevents ordinary access to hazardous live parts and is a recognised basic-protection measure. Its security, coverage and degree of protection therefore require inspection.",
      Enclosures:
        "Enclosures provide basic protection by keeping live parts inaccessible. Covers, blanks, entries and IP integrity must be inspected for continued effectiveness.",
      Insulation:
        "Basic insulation directly prevents contact with live conductors. Damage, inadequate coverage or unsuitable material would defeat basic protection and must be checked visually where accessible.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/1605/protective-measures-special-installations-or-locations-part-1.pdf",
      "https://electrical.theiet.org/media/2822/bs7671-all-forms-v31.pdf",
    ],
  },
  {
    prompt:
      "The measured value of loop impedance for a circuit is 2.4Ω. If the temperature at the time of the test was 20°C and the cable is 70°C (factor 1.2) what is the corrected value. Ze = 0.4Ω:",
    options: ["2.0 Ω", "2.4 Ω", "2.8 Ω", "2.88 Ω"],
    answer: "2.8 Ω",
    rationales: {
      "2.0 Ω":
        "This is only the circuit-conductor portion at 20 °C: 2.4 − 0.4 = 2.0 Ω. It must still be multiplied by 1.2 and then recombined with Ze.",
      "2.4 Ω":
        "Leaving the value unchanged ignores the stated increase in conductor resistance at operating temperature. Only the external Ze portion remains uncorrected in this calculation.",
      "2.88 Ω":
        "Multiplying the entire measured Zs by 1.2 incorrectly temperature-corrects Ze as well. The proper calculation is 0.4 + [(2.4 − 0.4) × 1.2] = 2.8 Ω.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2024/100-may-2024/why-are-the-values-of-maximum-earth-fault-loop-impedance-different/",
      "https://electrical.theiet.org/media/qxhf2est/guidance-note-3-2022-ninth-edition-first-printing-errata-november-2024.pdf",
    ],
  },
  {
    prompt:
      "Put the following tests in the correct sequence: 1- earth fault loop impedance 2- polarity 3- ring circuit continuity 4- prospective fault current:",
    options: ["3, 2, 4, 1", "1, 4, 3, 2", "2, 4, 1, 3", "4, 1, 2, 3"],
    answer: "3, 2, 4, 1",
    rationales: {
      "1, 4, 3, 2":
        "This begins with two live determinations before ring-conductor continuity and dead polarity checks. The installation should not be energised for loop or PFC work until the relevant dead-test sequence has been completed satisfactorily.",
      "2, 4, 1, 3":
        "Although polarity belongs in the dead-test phase, this sequence then performs live PFC and loop tests before ring continuity. Ring continuity must be established before energisation.",
      "4, 1, 2, 3":
        "This puts both live tests first and ring continuity last, reversing the safety logic of initial verification. The relevant continuity and dead-polarity checks must be satisfactory before energisation.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
      "https://electrical.theiet.org/media/dydg4v05/wiring-matters-issue-105-may-2025.pdf",
    ],
  },
  {
    prompt:
      "In addition to any barriers and access controls required by the risk assessment, what communication step is vital before energising an installation for live tests?",
    options: [
      "Disconnect the earth conductor from the Main Earth Terminal",
      "Erect barriers around the testing area",
      "Evacuate the area of the general public",
      "Inform other people in the area",
    ],
    answer: "Inform other people in the area",
    rationales: {
      "Disconnect the earth conductor from the Main Earth Terminal":
        "Removing the earthing conductor before energisation would disable a fundamental protective measure and could leave exposed-conductive-parts hazardous. Earthing continuity must instead be confirmed.",
      "Erect barriers around the testing area":
        "Barriers are necessary where the specific live-test setup exposes dangerous parts or requires an exclusion zone, but not automatically for every energisation. Informing affected people is the general minimum action described by this question.",
      "Evacuate the area of the general public":
        "A complete evacuation is disproportionate for controlled testing where access and hazards can be managed. People who may be affected must be warned and kept clear through suitable site controls.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/pubns/priced/hsg85.pdf",
      "https://www.hse.gov.uk/pubns/priced/gs38.pdf",
    ],
  },
  {
    prompt:
      "A room in which there is a 13 A socket outlet is to be converted into a bathroom. The socket outlet must be:",
    options: [
      "Fitted with a switch",
      "Located at least 3 m horizontally from the boundary of zone 1 and protected by a 30 mA RCD",
      "Moved to become a ceiling socket outlet",
      "Removed from the room",
    ],
    answer:
      "Located at least 3 m horizontally from the boundary of zone 1 and protected by a 30 mA RCD",
    rationales: {
      "Fitted with a switch":
        "Adding a switch does not satisfy the location restriction for an ordinary 230 V socket-outlet. Its distance from the bathroom zones remains the controlling issue.",
      "Moved to become a ceiling socket outlet":
        "Height at the ceiling does not replace the horizontal-distance rule and would not make an ordinary socket suitable in a prohibited zone. Location and equipment type must satisfy Section 701.",
      "Removed from the room":
        "Removal is one compliant option but is not mandatory where the room is large enough for relocation. A 13 A socket may remain if it is at least 3 m horizontally from the boundary of zone 1.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2019/77-september-2019/bs-76712018-frequently-asked-questions/",
      "https://electrical.theiet.org/media/1450/section-701.pdf",
    ],
  },
  {
    prompt:
      "Where vertical trunking passes through floors internal fire resistant barriers must be:",
    options: [
      "At each floor level",
      "At maximum intervals of 3 m",
      "Mid-way between each floor",
      "Only at the top of the trunking",
    ],
    answer: "At each floor level",
    rationales: {
      "At maximum intervals of 3 m":
        "A fixed three-metre spacing does not necessarily coincide with the fire-separating construction. The barrier is required where the trunking crosses each relevant floor or compartment boundary.",
      "Mid-way between each floor":
        "A mid-storey barrier would leave the actual floor penetration as a route for smoke and flame. Fire stopping needs to preserve the floor's compartmentation at the penetration itself.",
      "Only at the top of the trunking":
        "A top-only closure would allow fire and smoke to travel through the trunking between all lower storeys. Each floor crossing must have its fire separation reinstated.",
    },
    sourceUrls: [
      "https://www.gov.uk/government/publications/fire-safety-approved-document-b",
      "https://assets.publishing.service.gov.uk/media/67d17064a005e6f9841a1d50/Approved_Document_B_volume_2_Buildings_other_than_Dwellings_2019_edition_incorporating_2020_2022_and_2025_amendments_collated_with_2026_and_2029_amendments.pdf",
    ],
  },
  {
    prompt: "Electrical test probes must comply with standards set by:",
    options: ["BS 7671", "BS EN 60598", "GN 3", "Guidance Note GS 38"],
    answer: "Guidance Note GS 38",
    rationales: {
      "BS 7671":
        "BS 7671 requires suitable test equipment and safe working but is not the HSE publication specifying probe-tip exposure, fusing and lead construction. Those practical requirements are set out in GS38.",
      "BS EN 60598":
        "The BS EN 60598 series concerns luminaires, not voltage-indicator probes and test leads. It does not provide the safe-probe guidance relevant to electrical testing.",
      "GN 3":
        "IET Guidance Note 3 explains inspection and testing under BS 7671 and refers users to appropriate safety practice. The dedicated HSE document for electrical test equipment, leads and probes is GS38.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/pubns/books/gs38.htm",
      "https://www.hse.gov.uk/pubns/priced/gs38.pdf",
    ],
  },
  {
    prompt:
      "Equal PEFC and PSCC readings at an installation origin could be consistent with which listed earthing arrangement, although the readings alone cannot identify it conclusively?",
    options: ["IT", "TN-C-S", "TN-S", "TT"],
    answer: "TN-C-S",
    rationales: {
      IT: "An IT system has no direct source connection to Earth, or uses a high impedance, so the first earth-fault current is intentionally restricted. It would not ordinarily match the available line-neutral short-circuit current.",
      "TN-S":
        "TN-S uses separate neutral and protective conductors throughout the supply, so their loop impedances need not be equal. Similar numerical readings could occur by coincidence, which is why fault-current equality alone is not definitive proof of earthing type.",
      TT: "A TT earth-fault path includes installation and source earth electrodes and normally has much higher impedance than the line-neutral loop. PEFC is therefore generally far below PSCC.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/earthing-and-bonding-faqs/",
      "https://electrical.theiet.org/wiring-matters/years/2021/87-september-2021/tt-earthing-considerations/",
    ],
  },
  {
    prompt:
      "When carrying out a prospective short circuit fault current test on a three-phase system the fault current between line conductors will be:",
    options: [
      "Approximately 1.73 times the fault current between one line and neutral",
      "Equal to the fault current between one phase and neutral",
      "Equal to the fault current between two phases and neutral",
      "Smaller than the earth fault current",
    ],
    answer:
      "Approximately 1.73 times the fault current between one line and neutral",
    rationales: {
      "Equal to the fault current between one phase and neutral":
        "Line-to-line voltage is √3 times line-to-neutral voltage in a balanced star-derived system. With comparable loop impedance, the line-to-line prospective current is therefore about 1.73 times, not equal.",
      "Equal to the fault current between two phases and neutral":
        "A two-lines-to-neutral description is not the same fault loop as a line-to-line short circuit. Prospective current must be assessed for the conductors and voltage involved in the specified fault.",
      "Smaller than the earth fault current":
        "Earth-fault current depends strongly on the earthing path and is not generally greater than a low-impedance line-to-line short circuit. The higher line-to-line voltage usually produces the larger value described here.",
    },
    sourceUrls: [
      "https://www.megger.com/en-gb/et-online/june-2008/don%E2%80%99t-be-phased-by-phases%21",
      "https://eshop.se.com/in/blog/post/different-types-of-motor-starters-explained.html",
    ],
  },
  {
    prompt:
      "The reading on the instrument used to perform a continuity test will show the value in:",
    options: ["Mega-Ohms", "Milli-Amperes", "Ohms", "Volts"],
    answer: "Ohms",
    rationales: {
      "Mega-Ohms":
        "Megaohms are still a resistance unit, but they are used for the very high values expected in insulation testing. Conductor continuity is a low-resistance measurement displayed in ohms or submultiples of an ohm.",
      "Milli-Amperes":
        "Milliamperes express current, including the test current supplied by some instruments. The continuity result itself is the resistance calculated from the applied current and measured voltage.",
      Volts:
        "Volts express potential difference and may be an instrument's internal measured quantity. A continuity tester converts its measurements into the conductor resistance reported in ohms.",
    },
    sourceUrls: [
      "https://www.fluke.com/en-us/learn/blog/electrical/what-is-resistance",
      "https://media.fluke.com/b3604e04-5bdc-4d3d-8ec5-b2df00584ae8_original%20file.pdf",
    ],
  },
  {
    prompt:
      "Which ONE of the following values of insulation resistance may indicate a latent defect:",
    options: ["1.5 MΩ", "10.0 MΩ", "2.5 MΩ", "25 MΩ"],
    answer: "1.5 MΩ",
    rationales: {
      "10.0 MΩ":
        "Ten megohms is well above both the usual 1 MΩ minimum and the good-practice level that prompts investigation. In isolation, it gives no particular indication of a developing insulation defect.",
      "2.5 MΩ":
        "A 2.5 MΩ result is above the commonly cited 2 MΩ investigation threshold. Trend information may still matter, but this single value is not the marginal result targeted by the question.",
      "25 MΩ":
        "Twenty-five megohms represents comparatively high insulation resistance and low leakage. It is far less suggestive of deterioration than the 1.5 MΩ option close to the minimum acceptable value.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
      "https://electrical.theiet.org/wiring-matters/years/2020/81-july-2020/history-of-insulation-resistance-testing/",
    ],
  },
] as const;
