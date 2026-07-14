export const patTestingTest3 = [
  {
    prompt: "Which one of the following is a statutory document?",
    options: [
      "A British Standard",
      "Electricity at Work Regulations",
      "IET Wiring Regulations (BS 7671)",
      "IET Codes of Practice",
    ],
    answer: "Electricity at Work Regulations",
    rationales: {
      "A British Standard":
        "A standard sets an agreed technical benchmark but is not legislation merely because it carries a BS designation. Its use may help demonstrate good practice or compliance with a legal duty.",
      "IET Wiring Regulations (BS 7671)":
        "BS 7671 is a national standard for electrical installations rather than an Act or statutory instrument. Legislation may be satisfied by following it, but the publication is not itself law.",
      "IET Codes of Practice":
        "A code provides professional guidance on accepted methods and judgement. It can be persuasive evidence of good practice without acquiring statutory force in its own right.",
    },
    sourceUrls: [
      "https://www.legislation.gov.uk/uksi/1989/635/contents/made",
      "https://www.hse.gov.uk/electricity/standards.htm",
    ],
  },
  {
    prompt:
      "Which one of the following regulations states: 'Every employer shall make a suitable and sufficient assessment of the risk to the health and safety of his employees and to persons not in his employment'?",
    options: [
      "The Electricity Supply Regulations",
      "The Electricity at Work Regulations",
      "The Management of Health and Safety at Work Regulations",
      "The Provision and Use of Work Equipment Regulations",
    ],
    answer: "The Management of Health and Safety at Work Regulations",
    rationales: {
      "The Electricity Supply Regulations":
        "Supply-quality and distribution requirements do not contain the quoted employer risk-assessment duty. The wording concerns management of workplace health and safety across hazards, not electricity supply alone.",
      "The Electricity at Work Regulations":
        "These impose specific duties concerning electrical systems, work activities and competence. They do not contain the quoted general requirement for a suitable and sufficient employer risk assessment.",
      "The Provision and Use of Work Equipment Regulations":
        "PUWER addresses the suitability, maintenance, inspection and safe use of work equipment. Its duties operate alongside, but are not the source of, the quoted general risk-assessment wording.",
    },
    sourceUrls: [
      "https://www.legislation.gov.uk/uksi/1999/3242/regulation/3/made",
      "https://www.hse.gov.uk/work-equipment-machinery/puwer-overview.htm",
    ],
  },
  {
    prompt:
      "The Health and Safety at Work etc. Act 1974 places relevant duties on:",
    options: [
      "Both employees and the general public",
      "Both employers and employees",
      "Employees only",
      "Employers only",
    ],
    answer: "Both employers and employees",
    rationales: {
      "Both employees and the general public":
        "Employees have express duties, but members of the public are not the other principal workplace dutyholder identified by this pairing. Employers carry the central duties to employees and people affected by the undertaking.",
      "Employees only":
        "Workers must take reasonable care and cooperate, but the Act also imposes extensive duties on employers. Limiting responsibility to workers reverses the structure of workplace safety law.",
      "Employers only":
        "Employers carry broad responsibilities, but employees are also required to take reasonable care and cooperate with safety arrangements. Responsibility is therefore not confined to management.",
    },
    sourceUrls: [
      "https://www.legislation.gov.uk/ukpga/1974/37/contents",
      "https://www.hse.gov.uk/simple-health-safety/law/index.htm",
    ],
  },
  {
    prompt:
      "Which regulations state that, as may be necessary to prevent danger, systems must be maintained so as to prevent such danger so far as is reasonably practicable?",
    options: [
      "The Electricity at Work Regulations",
      "The IET Wiring Regulations (BS 7671)",
      "The Management of Health and Safety at Work Regulations",
      "The Provision and Use of Work Equipment Regulations",
    ],
    answer: "The Electricity at Work Regulations",
    rationales: {
      "The IET Wiring Regulations (BS 7671)":
        "BS 7671 contains installation requirements and supports safe maintenance decisions, but it is a non-statutory standard. The quoted legal wording comes from regulation 4(2) of the workplace electrical legislation.",
      "The Management of Health and Safety at Work Regulations":
        "These require risk assessment and effective management arrangements across workplace hazards. They do not contain the quoted electrical-system maintenance clause.",
      "The Provision and Use of Work Equipment Regulations":
        "PUWER separately requires work equipment to be maintained in an efficient state and good repair. That is a valid parallel duty, but it is not the source of this exact systems-and-danger wording.",
    },
    sourceUrls: [
      "https://www.legislation.gov.uk/uksi/1989/635/regulation/4/made",
      "https://www.legislation.gov.uk/uksi/1998/2306/regulation/5/made",
    ],
  },
  {
    prompt:
      "What fixed upper voltage limit does the Electricity at Work Regulations 1989 set for its duties?",
    options: [
      "11kV",
      "230V",
      "400V",
      "No fixed upper voltage limit; the Regulations apply wherever electrical danger may arise",
    ],
    answer:
      "No fixed upper voltage limit; the Regulations apply wherever electrical danger may arise",
    rationales: {
      "11kV":
        "This is a familiar distribution voltage but not a boundary in the legislation. Higher-voltage systems remain subject to the duties where work activity can give rise to electrical danger.",
      "230V":
        "Ordinary single-phase utilization voltage is not the top of the statutory scope. The Regulations cover electrical systems at both lower and much higher voltages according to the danger involved.",
      "400V":
        "A common three-phase utilization voltage does not define the reach of the duties. The legal definitions and requirements are framed around systems, work activities and prevention of danger.",
    },
    sourceUrls: [
      "https://www.legislation.gov.uk/uksi/1989/635/contents/made",
      "https://www.hse.gov.uk/pubns/priced/hsr25.pdf",
    ],
  },
  {
    prompt:
      "Which environment requires specialist hazardous-area controls beyond an ordinary in-service electrical-equipment inspection and test routine?",
    options: ["Caravan sites", "Offices", "Petrol station forecourts", "Shops"],
    answer: "Petrol station forecourts",
    rationales: {
      "Caravan sites":
        "Electrical equipment at a caravan site still needs maintenance based on use, environment and condition. The location has particular installation requirements, but it is not inherently an explosive-atmosphere workplace.",
      Offices:
        "Office equipment falls within ordinary electrical safety management even though its environment is often benign. Lower risk may reduce the maintenance frequency; it does not create a hazardous-area inspection regime.",
      Shops:
        "Retail equipment remains subject to risk-based in-service checks, including items handled by staff or the public. A shop is not automatically classified for flammable vapour hazards.",
    },
    sourceUrls: [
      "https://webstore.iec.ch/en/publication/64810",
      "https://shop.theiet.org/Contents/Item/Display/8864",
    ],
  },
  {
    prompt:
      "The safety and proper functioning of certain portable appliances and equipment depends on the integrity of the fixed installation. Requirements for the inspecting and testing of fixed installations are given in:",
    options: ["BS2754", "BS 7671", "BSEN60898", "BSEN60947"],
    answer: "BS 7671",
    rationales: {
      BS2754:
        "This is not the current UK requirements standard for low-voltage electrical installations. Selecting an unrelated number would not establish the inspection and testing duties for the supplying wiring.",
      BSEN60898:
        "This product standard concerns circuit-breakers for household and similar installations. It does not set the overall verification requirements for the fixed wiring in which those devices are installed.",
      BSEN60947:
        "This series covers low-voltage switchgear and controlgear products rather than whole-installation inspection and testing. Product compliance cannot replace verification of the complete installation.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
      "https://shop.theiet.org/guidance-note-3-inspection-testing-10th-edition",
    ],
  },
  {
    prompt:
      "In the traditional movement-based terminology, an electric kettle is classified as:",
    options: [
      "Equipment for 'building in'",
      "Hand-held appliance",
      "Moveable equipment",
      "Portable appliance",
    ],
    answer: "Portable appliance",
    rationales: {
      "Equipment for 'building in'":
        "A kettle is a complete freestanding product rather than a component intended to be incorporated permanently into cabinetry or another assembly. It is connected for ordinary use by its detachable base or flexible supply arrangement.",
      "Hand-held appliance":
        "The user may lift it briefly to pour, but it is not normally held in the hand throughout its energized operation. The traditional hand-held category is aimed at items such as drills or hairdryers used while gripped.",
      "Moveable equipment":
        "This older category generally described larger items that could be relocated but were not readily carried in normal use. A domestic kettle is the clearer example of a readily moved plug-connected item.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/pubns/priced/hsg107.pdf",
      "https://electrical.theiet.org/wiring-matters/years/2020/81-july-2020/the-all-new-5th-edition-of-the-iet-code-of-practice-for-in-service-inspection-and-testing-of-electrical-equipment/",
    ],
  },
  {
    prompt:
      "In the traditional movement-based terminology, which domestic appliance would normally be regarded as stationary equipment?",
    options: [
      "A bathroom heater",
      "A built-in electric cooker",
      "A visual display unit",
      "A washing machine",
    ],
    answer: "A washing machine",
    rationales: {
      "A bathroom heater":
        "This item is commonly secured to the building and supplied as fixed equipment, although the actual product must be checked. That differs from a heavy appliance resting in one operating position.",
      "A built-in electric cooker":
        "Its description expressly says it is incorporated into the building fabric or kitchen unit. The legacy terminology therefore treats it as built-in rather than merely remaining in one place by weight.",
      "A visual display unit":
        "A monitor can normally be relocated without installation work and was historically treated as movable equipment. Its real handling, connections and environment still matter more than the old label.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2020/81-july-2020/the-all-new-5th-edition-of-the-iet-code-of-practice-for-in-service-inspection-and-testing-of-electrical-equipment/",
      "https://www.hse.gov.uk/pubns/priced/hsg107.pdf",
    ],
  },
  {
    prompt:
      "An appliance that relies on the protective conductor in its flexible supply cord for fault protection is classified as:",
    options: [
      "Class I",
      "Class III",
      "Double insulated",
      "Metal clad Class II",
    ],
    answer: "Class I",
    rationales: {
      "Class III":
        "This construction relies on an appropriately separated extra-low-voltage supply for shock protection. A protective-earth conductor is not its defining safety measure.",
      "Double insulated":
        "Double or reinforced insulation removes reliance on a protective earth and is identified by the double-square symbol. Its accessible parts remain safe through insulation construction rather than a fault-current path.",
      "Metal clad Class II":
        "A Class II product may have a metal enclosure, but that metal is separated from live parts by double or reinforced insulation and is not protectively earthed. Metal appearance alone does not make the item Class I.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/pubns/priced/hsg107.pdf",
      "https://electrical.theiet.org/wiring-matters/years/2020/81-july-2020/the-all-new-5th-edition-of-the-iet-code-of-practice-for-in-service-inspection-and-testing-of-electrical-equipment/",
    ],
  },
  {
    prompt:
      "Which one of the following arrangements would not meet the protective-conductor requirements in IET guidance?",
    options: [
      "Class I equipment supplied by a 1.5 mm² three-core extension lead connected into a 13 A three-pin socket outlet",
      "Class I equipment supplied by a 2.5 mm² three-core extension lead connected into a BS EN 60309-2 socket outlet",
      "Class II equipment supplied by a 1.5 mm² two-core extension lead connected into a 13 A three-pin socket outlet",
      "Class III equipment supplied by a two-core flexible cord connected into the secondary of an isolating transformer supplying SELV lighting equipment",
    ],
    answer:
      "Class II equipment supplied by a 1.5 mm² two-core extension lead connected into a 13 A three-pin socket outlet",
    rationales: {
      "Class I equipment supplied by a 1.5 mm² three-core extension lead connected into a 13 A three-pin socket outlet":
        "The three-core lead preserves line, neutral and protective-earth continuity to a standard earthed outlet. Its length, conductor rating, fuse and condition must still be suitable for the intended load.",
      "Class I equipment supplied by a 2.5 mm² three-core extension lead connected into a BS EN 60309-2 socket outlet":
        "This arrangement provides the protective conductor on an industrial connector intended for the purpose. Compliance still depends on correct ratings, wiring, environment and inspection condition.",
      "Class III equipment supplied by a two-core flexible cord connected into the secondary of an isolating transformer supplying SELV lighting equipment":
        "A two-core connection is consistent with equipment whose shock protection is provided by the appropriately separated extra-low-voltage source. It does not require a protective conductor in the utilization circuit.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/pubns/priced/hsg107.pdf",
      "https://webstore.iec.ch/en/publication/59919",
    ],
  },
  {
    prompt:
      "Which listed test is inherently inapplicable to Class II equipment because it has no protective conductor to verify?",
    options: [
      "Earth continuity test on Class II equipment",
      "Earth continuity tests (for Class I equipment)",
      "Insulation testing",
      "Preliminary inspection",
    ],
    answer: "Earth continuity test on Class II equipment",
    rationales: {
      "Earth continuity tests (for Class I equipment)":
        "Where safety relies on protective earth, the path from the supply earth to accessible conductive parts must be verified by an appropriate low-resistance method. Inspection alone cannot quantify that connection.",
      "Insulation testing":
        "An insulation or suitable alternative leakage assessment is selected where needed to verify separation from hazardous live parts. The exact method and voltage must suit the equipment and manufacturer information.",
      "Preliminary inspection":
        "Visual examination is essential before applying instrument tests because it can reveal damage, unsuitable use or a test that might cause harm. A satisfactory meter result cannot override an obvious defect.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/electricity/faq-portable-appliance-testing.htm",
      "https://www.megger.com/en/products/pat450-portable-appliance-tester",
    ],
  },
  {
    prompt:
      "Which activity would normally generate a formal appliance inspection-and-test record?",
    options: [
      "Applicable British Standards",
      "Combined inspection and test",
      "Manufacturer's name and address",
      "User check revealing no damage to equipment",
    ],
    answer: "Combined inspection and test",
    rationales: {
      "Applicable British Standards":
        "Relevant standards may be cited in a procedure, but a list of publications is not itself an equipment maintenance event. The useful record identifies the asset, activity, outcome and any action required.",
      "Manufacturer's name and address":
        "Maker details can assist identification or technical enquiries but do not record the condition found on a particular date. An asset register does not substitute for documenting a completed formal assessment.",
      "User check revealing no damage to equipment":
        "HSE says records are not normally needed for the simplest satisfactory pre-use checks. Users should promptly report a defect, while formal inspections and tests provide more useful auditable maintenance evidence.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/work-equipment-machinery/inspection.htm",
      "https://www.hse.gov.uk/electricity/faq-portable-appliance-testing.htm",
    ],
  },
  {
    prompt:
      "Which approach should not be used by itself to set an appliance inspection-and-test interval?",
    options: [
      "Environment in which it is to be used",
      "The equipment class",
      "A blanket annual interval applied regardless of risk",
      "The user",
    ],
    answer: "A blanket annual interval applied regardless of risk",
    rationales: {
      "Environment in which it is to be used":
        "Moisture, dust, heat, vibration and mechanical abuse affect how quickly equipment may become unsafe. An arduous setting therefore forms a central part of the frequency risk assessment.",
      "The equipment class":
        "Construction affects the protective measures on which safety depends; for example, Class I relies on an earth connection while Class II relies on insulation. That difference informs what to check and how often.",
      "The user":
        "Training, care, reporting behaviour and the likelihood of misuse all change the chance that damage will go unnoticed. User characteristics are consequently a recognised risk factor.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2021/84-march-2021/the-all-new-5th-edition-of-the-iet-code-of-practice-for-in-service-inspection-and-testing-of-electrical-equipment/",
      "https://www.hse.gov.uk/electricity/faq-portable-appliance-testing.htm",
    ],
  },
  {
    prompt:
      "How should the initial user-check frequency for a children's ride at a fairground be selected?",
    options: [
      "12 months",
      "From a site-specific risk assessment, with frequent checks likely and the interval reviewed from findings",
      "Monthly",
      "Weekly",
    ],
    answer:
      "From a site-specific risk assessment, with frequent checks likely and the interval reviewed from findings",
    rationales: {
      "12 months":
        "A fixed annual check ignores intensive public use, outdoor exposure, transport and assembly damage. The interval could be far too long unless an evidence-based assessment demonstrated otherwise.",
      Monthly:
        "A monthly schedule might form one part of a justified maintenance plan, but it cannot be prescribed from the equipment name alone. Actual use, environment and defect history must support the choice.",
      Weekly:
        "Weekly checks may be appropriate in some operating conditions, yet this remains an unsupported calendar answer without the site's evidence. Findings and changes in use should shorten or extend the interval as necessary.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2021/84-march-2021/the-all-new-5th-edition-of-the-iet-code-of-practice-for-in-service-inspection-and-testing-of-electrical-equipment/",
      "https://www.hse.gov.uk/work-equipment-machinery/inspection.htm",
    ],
  },
  {
    prompt:
      "Which one of the following tests should not be applied routinely to equipment:",
    options: [
      "Dielectric strength",
      "Earth continuity",
      "Insulation resistance",
      "Polarity",
    ],
    answer: "Dielectric strength",
    rationales: {
      "Earth continuity":
        "Protective-conductor verification is an ordinary selected test for Class I items and extension leads. A suitable low current is now preferred where it can reliably assess the accessible earth path.",
      "Insulation resistance":
        "This is a normal option when the equipment and its electronics can tolerate the chosen DC voltage. A lower voltage or leakage-current alternative may be required for vulnerable modern products.",
      Polarity:
        "Conductor assignment is appropriately checked on extension leads, detachable cord sets and rewireable connections. That verification does not impose the high insulation stress associated with a flash test.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2020/81-july-2020/the-all-new-5th-edition-of-the-iet-code-of-practice-for-in-service-inspection-and-testing-of-electrical-equipment/",
      "https://www.megger.com/en/products/pat450-portable-appliance-tester",
    ],
  },
  {
    prompt: "The first electrical test to be applied to Class I equipment is:",
    options: [
      "Dielectric strength",
      "Earth continuity",
      "Insulation resistance",
      "Polarity",
    ],
    answer: "Earth continuity",
    rationales: {
      "Dielectric strength":
        "A high-voltage strength test is not a routine first in-service measurement and may damage equipment. Visual examination and the protective-earth path take priority for this construction.",
      "Insulation resistance":
        "Insulation is important, but the defining Class I fault-protection path should be established first. The test voltage and any alternative method must then be selected for the actual equipment.",
      Polarity:
        "Conductor assignment is checked where applicable to plugs, leads and controls, but it does not precede verification of the accessible protective-earth path. The latter is fundamental to Class I safety.",
    },
    sourceUrls: [
      "https://www.megger.com/en/products/pat450-portable-appliance-tester",
      "https://www.hse.gov.uk/pubns/priced/hsg107.pdf",
    ],
  },
  {
    prompt:
      "If an optional inspection-and-test label is used, which information belongs in the full maintenance record rather than on the label?",
    options: [
      "An indication of whether the equipment has passed or failed the safety tests",
      "Appliance or equipment number",
      "Date at time of testing",
      "Details of previous test results",
    ],
    answer: "Details of previous test results",
    rationales: {
      "An indication of whether the equipment has passed or failed the safety tests":
        "Current status is the label's most immediate safety information under the stated scheme. It helps users distinguish an accepted item from one identified as unsafe or awaiting action.",
      "Appliance or equipment number":
        "An asset identifier connects the physical item to the correct register entry and measured results. Without it, identical products can easily be confused after relocation.",
      "Date at time of testing":
        "The completed-test date provides useful evidence of when the labelled status was established. It should not be confused with prescribing an automatic next-test date independently of risk.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/electricity/faq-portable-appliance-testing.htm",
      "https://www.hse.gov.uk/pubns/priced/hsg107.pdf",
    ],
  },
  {
    prompt:
      "Which one of the following is outside the equipment-maintenance scope of the IET Code of Practice because it is covered by installation verification requirements?",
    options: [
      "Electrical tools",
      "Fixed equipment",
      "Fixed installations",
      "Portable appliances",
    ],
    answer: "Fixed installations",
    rationales: {
      "Electrical tools":
        "Tools used at work can be heavily handled and exposed to mechanical damage, making risk-based inspection particularly important. Their supply arrangement and construction determine any selected tests.",
      "Fixed equipment":
        "The current Code deliberately includes equipment wired into the installation, such as air-conditioning or access-control units. Being secured in place does not move the equipment into the installation wiring standard's scope entirely.",
      "Portable appliances":
        "Plug-connected and readily moved products remain part of in-service electrical safety management. The current Code uses the broader word equipment without excluding these familiar items.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2020/81-july-2020/the-all-new-5th-edition-of-the-iet-code-of-practice-for-in-service-inspection-and-testing-of-electrical-equipment/",
      "https://shop.theiet.org/Contents/Item/Display/8864",
    ],
  },
  {
    prompt:
      "What does HSE's Memorandum of Guidance on the Electricity at Work Regulations advise about equipment records?",
    options: [
      "Are not required if the equipment is fed from a 110 V safety supply",
      "Are not required where the equipment is used in low-risk areas",
      "Only be kept where the equipment is used in high-risk areas",
      "Should be kept throughout the working life of the equipment",
    ],
    answer: "Should be kept throughout the working life of the equipment",
    rationales: {
      "Are not required if the equipment is fed from a 110 V safety supply":
        "A reduced-voltage supply can lower shock risk but does not prevent flex damage, earth faults, overheating or misuse. It provides no general exemption from a useful maintenance history.",
      "Are not required where the equipment is used in low-risk areas":
        "A benign environment may justify less frequent activity, but records still help demonstrate and review that judgement. Low risk changes the maintenance plan rather than erasing its evidence.",
      "Only be kept where the equipment is used in high-risk areas":
        "The guidance does not restrict record value to arduous workplaces. Results and fault history help a dutyholder adjust intervals and understand deterioration wherever the item is used.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/pubns/priced/hsr25.pdf",
      "https://www.hse.gov.uk/electricity/faq-portable-appliance-testing.htm",
    ],
  },
  {
    prompt:
      "The person responsible for carrying out an inspection and test on an appliance should have made available to them:",
    options: [
      "A copy of the Electricity at Work Regulations",
      "A copy of the Health and Safety at Work Act",
      "A list of all the users of the equipment",
      "Previous inspection and test results",
    ],
    answer: "Previous inspection and test results",
    rationales: {
      "A copy of the Electricity at Work Regulations":
        "The competent person should understand the relevant legal duties, but a copy of the statutory instrument does not describe this asset's condition or history. It cannot reveal a deteriorating trend.",
      "A copy of the Health and Safety at Work Act":
        "General legislation provides context for workplace responsibilities rather than item-specific evidence. The inspector needs information that can be compared with today's observations and readings.",
      "A list of all the users of the equipment":
        "Patterns of use can inform risk assessment, but every individual's name is unnecessary for performing the equipment check. The asset's prior findings provide the directly relevant comparison baseline.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2021/84-march-2021/the-all-new-5th-edition-of-the-iet-code-of-practice-for-in-service-inspection-and-testing-of-electrical-equipment/",
      "https://www.hse.gov.uk/work-equipment-machinery/inspection.htm",
    ],
  },
  {
    prompt:
      "Which voltage must be used when carrying out an insulation resistance test on a Class I toaster?",
    options: ["1000 V d.c.", "3750 V a.c.", "500 V a.c.", "500 V d.c."],
    answer: "500 V d.c.",
    rationales: {
      "1000 V d.c.":
        "One kilovolt is above the normal in-service setting for this straightforward mains appliance and would impose unnecessary stress. Such a voltage needs a specific product or specialist test requirement.",
      "3750 V a.c.":
        "This resembles a production dielectric-strength level rather than a resistance-measurement voltage. Reapplying such a high AC stress routinely could damage insulation or connected components.",
      "500 V a.c.":
        "An insulation-resistance tester uses a defined DC output to derive the high resistance value. A mains-frequency AC stress at this magnitude is a different type of test.",
    },
    sourceUrls: [
      "https://www.megger.com/en/products/pat450-portable-appliance-tester",
      "https://electrical.theiet.org/wiring-matters/years/2020/81-july-2020/the-all-new-5th-edition-of-the-iet-code-of-practice-for-in-service-inspection-and-testing-of-electrical-equipment/",
    ],
  },
  {
    prompt: "An insulation resistance tester should be capable of:",
    options: [
      "Delivering a maximum current of 25 A through the load",
      "Delivering a minimum voltage of 1000 V d.c. to the load",
      "Maintaining the test voltage required across the load",
      "Testing the continuity of an earthing circuit",
    ],
    answer: "Maintaining the test voltage required across the load",
    rationales: {
      "Delivering a maximum current of 25 A through the load":
        "A current around this magnitude belongs to a selectable high-current protective-conductor bond test, not an insulation measurement. The latter uses a current-limited DC voltage across a very high resistance.",
      "Delivering a minimum voltage of 1000 V d.c. to the load":
        "Routine equipment tests commonly select 250 V or 500 V DC according to vulnerability and manufacturer guidance. A mandatory one-kilovolt minimum would be unsuitable for many in-service products.",
      "Testing the continuity of an earthing circuit":
        "Protective-conductor continuity is a low-resistance test with a different current characteristic. Insulation testing establishes adequate separation between parts that should not conduct.",
    },
    sourceUrls: [
      "https://www.megger.com/en/products/pat450-portable-appliance-tester",
      "https://www.seaward.com/gb/support/pat-testing/403a910-primetest-250-plus/specifications-and-manuals/",
    ],
  },
  {
    prompt:
      "Where a user check reveals damage to equipment, it must be reported to:",
    options: [
      "A manager of an inspection and test organization",
      "A responsible person",
      "The Health and Safety Inspectorate",
      "The equipment manufacturer",
    ],
    answer: "A responsible person",
    rationales: {
      "A manager of an inspection and test organization":
        "An external test provider may have no control over whether the employer's item remains available for use. The workplace dutyholder needs the finding so immediate withdrawal and follow-up can be arranged.",
      "The Health and Safety Inspectorate":
        "Ordinary appliance damage is managed through the employer's safety and maintenance system, not automatically referred to the regulator. Serious incidents may create separate reporting duties, but that is not this routine case.",
      "The equipment manufacturer":
        "The maker may be consulted about instructions, warranty or a recurring design problem, but it does not control the item at the workplace. Local safety action cannot wait for that external contact.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/pubns/priced/hsg107.pdf",
      "https://www.hse.gov.uk/electricity/faq-portable-appliance-testing.htm",
    ],
  },
  {
    prompt:
      "Which responsibility applies to the manager of an inspection-and-test organisation even if they do not personally operate testers or carry out repairs?",
    options: [
      "Demonstrate competence in the use of appliance testers",
      "Instruct untrained persons in the use of portable appliance testers",
      "Know their legal responsibilities under the Electricity at Work Regulations",
      "Repair faulty electrical equipment",
    ],
    answer:
      "Know their legal responsibilities under the Electricity at Work Regulations",
    rationales: {
      "Demonstrate competence in the use of appliance testers":
        "A manager who personally performs tests must be competent, but management responsibility does not necessarily include operating every instrument. It does require understanding how competent people and safe systems are provided.",
      "Instruct untrained persons in the use of portable appliance testers":
        "A brief instruction cannot replace the knowledge and training appropriate to the tests and interpretation required. The employer must ensure each person is competent for the work assigned.",
      "Repair faulty electrical equipment":
        "Testing management and electrical repair are different roles with different technical competence. The manager must arrange safe withdrawal and appropriate repair without personally carrying it out.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/electricity/faq-portable-appliance-testing.htm",
      "https://www.hse.gov.uk/pubns/priced/hsr25.pdf",
    ],
  },
  {
    prompt:
      "Earth continuity testing may in certain circumstances be carried out by means of:",
    options: [
      "A bell set and battery",
      "A low resistance ohmmeter",
      "An instrument complying with BS EN 60309",
      "An insulation resistance tester",
    ],
    answer: "A low resistance ohmmeter",
    rationales: {
      "A bell set and battery":
        "An audible indication shows only that some path may exist and supplies no accurate low-resistance value. It cannot assess the conductor and termination resistance against an acceptance criterion.",
      "An instrument complying with BS EN 60309":
        "That designation concerns industrial plugs, socket-outlets and couplers rather than measuring instruments. Connector product compliance provides no continuity reading.",
      "An insulation resistance tester":
        "This instrument measures very high resistance between parts intended to be separated. The protective-earth path requires the opposite measurement using a suitable low-current continuity function.",
    },
    sourceUrls: [
      "https://www.megger.com/en/products/pat450-portable-appliance-tester",
      "https://www.hse.gov.uk/pubns/priced/hsg107.pdf",
    ],
  },
  {
    prompt:
      "Which HSE guidance sets out safe construction and use of electrical test probes and leads?",
    options: [
      "BS 5490 Specification for classification of Protection",
      "BS 7671",
      "Health & Safety Executive Guidance Note GS38",
      "IEC Publication 479",
    ],
    answer: "Health & Safety Executive Guidance Note GS38",
    rationales: {
      "BS 5490 Specification for classification of Protection":
        "This former enclosure-classification standard is unrelated to safe probe-tip exposure, lead insulation and protective fusing. An IP designation does not make a voltage-test lead suitable.",
      "BS 7671":
        "The installation standard requires safe verification but is not the dedicated publication on handheld probes and leads. HSE provides the specific construction and use guidance requested.",
      "IEC Publication 479":
        "This historic IEC reference concerns the effects of current on people rather than practical lead and probe design. It does not set the GS38 safeguards for routine electrical test equipment.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/pubns/priced/gs38.pdf",
      "https://www.hse.gov.uk/pubns/books/gs38.htm",
    ],
  },
  {
    prompt:
      "Where protection against electric shock from equipment is provided using a protective conductor in the fixed wiring, the equipment classification would be:",
    options: ["Class 0", "Class I", "Class II", "Class III"],
    answer: "Class I",
    rationales: {
      "Class 0":
        "This obsolete construction uses basic insulation without protective-earthing provision. It cannot describe an item whose fault protection expressly depends on the installation earth.",
      "Class II":
        "This construction uses double or reinforced insulation and does not rely on protective earth for safety. It is normally identified by the double-square symbol.",
      "Class III":
        "This construction relies on an appropriately extra-low-voltage source rather than an installation protective conductor. Its basic shock-protection method is therefore different.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/pubns/priced/hsg107.pdf",
      "https://electrical.theiet.org/wiring-matters/years/2020/81-july-2020/the-all-new-5th-edition-of-the-iet-code-of-practice-for-in-service-inspection-and-testing-of-electrical-equipment/",
    ],
  },
  {
    prompt:
      "A substantially continuous metal enclosure associated with Class II equipment would be classified as:",
    options: [
      "Insulation encased",
      "Isolation encased",
      "Metal insulated",
      "Metal-cased",
    ],
    answer: "Metal-cased",
    rationales: {
      "Insulation encased":
        "An enclosure made substantially from insulating material would fit an insulation-encased description instead. The stated outer construction is conductive metal, even though safety still comes from internal insulation.",
      "Isolation encased":
        "Electrical separation can be a protective measure, but this phrase is not the construction label for the described enclosure. It confuses a circuit arrangement with the material surrounding the product.",
      "Metal insulated":
        "The metal is not itself an insulating medium. It remains unearthed and is made safe by basic plus supplementary, or equivalent reinforced, insulation between it and live parts.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2020/81-july-2020/the-all-new-5th-edition-of-the-iet-code-of-practice-for-in-service-inspection-and-testing-of-electrical-equipment/",
      "https://www.hse.gov.uk/pubns/priced/hsg107.pdf",
    ],
  },
  {
    prompt:
      "There is no provision for protective earthing or reliance upon installation conditions for which one of the following equipment?",
    options: ["Class 0I (zero-I)", "Class I", "Class II", "Class III"],
    answer: "Class II",
    rationales: {
      "Class 0I (zero-I)":
        "This obsolete class includes an earthing terminal but a supply cord without a protective conductor, so safety depends on a separate installation connection. It does not meet both conditions in the prompt.",
      "Class I":
        "This construction expressly relies on protective earthing of accessible conductive parts. Loss of that installation earth can leave the enclosure dangerous after an insulation fault.",
      "Class III":
        "This traditional extra-low-voltage construction does not rely on protective earth, but it does depend on an appropriately separated source. That supply condition distinguishes it from the requested definition.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2020/81-july-2020/the-all-new-5th-edition-of-the-iet-code-of-practice-for-in-service-inspection-and-testing-of-electrical-equipment/",
      "https://www.hse.gov.uk/pubns/priced/hsg107.pdf",
    ],
  },
  {
    prompt:
      "For conventional mains equipment that the manufacturer confirms is suitable for a standard insulation-resistance test, which test voltage is normally used?",
    options: ["230 V a.c", "230 V d.c", "500 V a.c.", "500 V d.c"],
    answer: "500 V d.c",
    rationales: {
      "230 V a.c":
        "Normal mains energisation is not an insulation-resistance measurement and would operate the load rather than provide the tester's controlled DC source. Live leakage tests use different methods and precautions.",
      "230 V d.c":
        "This is not the standard selectable insulation-test value used for the conventional equipment described. A reduced 250 V DC setting, rather than 230 V, may be chosen for vulnerable electronics.",
      "500 V a.c.":
        "The routine resistance test uses direct current, allowing the instrument to determine leakage through insulation at a defined voltage. Applying 500 V AC would be a different and more severe stress test.",
    },
    sourceUrls: [
      "https://www.megger.com/en/products/pat450-portable-appliance-tester",
      "https://electrical.theiet.org/wiring-matters/years/2020/81-july-2020/the-all-new-5th-edition-of-the-iet-code-of-practice-for-in-service-inspection-and-testing-of-electrical-equipment/",
    ],
  },
  {
    prompt:
      "How should the frequency of user checks for equipment installed in industrial premises be determined?",
    options: [
      "Before use",
      "Daily",
      "Monthly",
      "By risk assessment using the environment, use, damage likelihood and maintenance history",
    ],
    answer:
      "By risk assessment using the environment, use, damage likelihood and maintenance history",
    rationales: {
      "Before use":
        "A pre-use check may be justified where damage can occur between uses, but it is not automatically necessary for every item described by an old movement category. Actual exposure and consequences must drive the interval.",
      Daily:
        "Daily examination can suit harsh or heavily abused equipment, yet industrial premises vary greatly. Applying that calendar period universally ignores condition, users, installation and previous findings.",
      Monthly:
        "A monthly plan may prove reasonable for a particular asset but cannot be selected from the workplace label alone. The dutyholder must justify it and revise it as evidence accumulates.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2021/84-march-2021/the-all-new-5th-edition-of-the-iet-code-of-practice-for-in-service-inspection-and-testing-of-electrical-equipment/",
      "https://www.hse.gov.uk/work-equipment-machinery/inspection.htm",
    ],
  },
  {
    prompt:
      "During a formal visual inspection it should be confirmed that the equipment is being operated:",
    options: [
      "At the correct voltage",
      "By a skilled person",
      "By an instructed person",
      "In accordance with manufacturer's instructions",
    ],
    answer: "In accordance with manufacturer's instructions",
    rationales: {
      "At the correct voltage":
        "Supply compatibility is important but addresses only one aspect of safe use. The maker may also specify environment, ventilation, accessories, loading, duty cycle and operating precautions.",
      "By a skilled person":
        "Many ordinary products are designed for general users and do not require electrical skill. Any higher competence requirement must come from the task, risk assessment and maker information.",
      "By an instructed person":
        "Specific instruction can be necessary for some work equipment, but it is not universal. The broader inspection criterion is compliance with all relevant operating information supplied for that item.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/pubns/priced/hsg107.pdf",
      "https://www.hse.gov.uk/electricity/electricequip.htm",
    ],
  },
  {
    prompt:
      "If a standard 13 A plug became overheated the most likely cause would be:",
    options: [
      "A loose connection at one or more of the terminals",
      "Inadequate earthing connections",
      "Reversed polarity of the cable conductors",
      "The use of an incorrectly rated cartridge fuse",
    ],
    answer: "A loose connection at one or more of the terminals",
    rationales: {
      "Inadequate earthing connections":
        "A poor protective-earth path is a serious shock-protection defect, but under normal load it carries no operating current. It therefore does not usually create the localized heating seen at line or neutral terminals.",
      "Reversed polarity of the cable conductors":
        "Incorrect line and neutral assignment creates isolation and shock hazards but does not by itself increase normal load current or terminal resistance. It is not the usual thermal mechanism.",
      "The use of an incorrectly rated cartridge fuse":
        "An oversized fuse can fail to protect a flex during overload, so its rating must be corrected. Without an overload, however, it is less direct than a resistive terminal joint as the source of plug heating.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/pubns/priced/hsg107.pdf",
      "https://www.electricalsafetyfirst.org.uk/safety-advice/home-and-people/house-maintenance/plugs-and-fuses/",
    ],
  },
  {
    prompt:
      "Using the conventional IET in-service criterion, what is the usual minimum insulation resistance for Class I equipment other than heating equipment above 3 kW?",
    options: ["0.5 megohm", "1.0 megohm", "2 megohm", "7 megohm"],
    answer: "1.0 megohm",
    rationales: {
      "0.5 megohm":
        "Half a megohm is below the ordinary Class I acceptance value and should trigger investigation of the test setup, connected components and insulation condition. It is not the large-heater exception either.",
      "2 megohm":
        "This is the usual minimum associated with Class II equipment, which relies wholly on double or reinforced insulation. A Class I item may exceed it, but it is not the threshold requested.",
      "7 megohm":
        "Seven megohms would be a healthy result for many products but is not the published minimum boundary. Confusing a desirable high reading with the pass limit would reject serviceable equipment unnecessarily.",
    },
    sourceUrls: [
      "https://www.megger.com/en/products/pat450-portable-appliance-tester",
    ],
  },
  {
    prompt:
      "An ohmmeter used to measure the resistance of an earth-continuity conductor must be capable of producing a short-circuit current between:",
    options: ["2 and 10 mA", "20 and 200 mA", "200 and 500 mA", "10 and 20 mA"],
    answer: "20 and 200 mA",
    rationales: {
      "2 and 10 mA":
        "This very small signal range falls below the low-current protective-conductor method specified for PAT instruments. It may not provide the intended measurement performance at joints and contacts.",
      "200 and 500 mA":
        "The lower boundary touches the top of the stated low-current range, but the upper value exceeds it. A higher-current bond test is a separate selectable method with different equipment considerations.",
      "10 and 20 mA":
        "This stops at the lower boundary rather than spanning the recognized low-current continuity range. The selected instrument should be capable throughout the specified band up to 200 mA.",
    },
    sourceUrls: [
      "https://www.megger.com/en/products/pat450-portable-appliance-tester",
    ],
  },
  {
    prompt:
      "When no product-specific value is given, what maximum protective-conductor or touch current is commonly used for portable or hand-held Class I equipment?",
    options: ["0.25mA", "0.5 mA", "0.75mA", "1mA"],
    answer: "0.75mA",
    rationales: {
      "0.25mA":
        "This is the commonly stated touch-current limit for Class II equipment, which has no protective-earth conductor. It is not the general value for the earthed portable category described.",
      "0.5 mA":
        "Half a milliampere is associated with other extra-low-voltage or historical categories rather than this Class I limit. It is below, but does not define, the requested maximum.",
      "1mA":
        "One milliampere exceeds the commonly applied limit for a portable or hand-held earthed product. It should not be confused with the one-megohm insulation-resistance threshold.",
    },
    sourceUrls: [
      "https://www.megger.com/en/products/pat450-portable-appliance-tester",
      "https://electrical.theiet.org/media/1063/2005_16_autumn_wiring_matters__complete_no_adverts.pdf",
    ],
  },
  {
    prompt:
      "Which option provides all three practical controls used by this equipment-maintenance scheme when an item is found faulty?",
    options: [
      "Label and report it while leaving it available",
      "Label and withdraw it without reporting the defect",
      "Identify it as faulty, report it and withdraw it from service",
      "Report it while leaving it available",
    ],
    answer: "Identify it as faulty, report it and withdraw it from service",
    rationales: {
      "Label and report it while leaving it available":
        "A warning can be overlooked or removed, so the dangerous item remains capable of being used. Physical or administrative withdrawal is needed until competent repair or replacement.",
      "Label and withdraw it without reporting the defect":
        "Removal controls the immediate exposure, but silence prevents the responsible person from arranging corrective action and updating the maintenance system. The defect must enter the management process.",
      "Report it while leaving it available":
        "Notification alone does not prevent another worker from energising the item before action is taken. The equipment must be made unavailable as soon as the unsafe condition is identified.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/pubns/priced/hsg107.pdf",
      "https://www.hse.gov.uk/electricity/faq-portable-appliance-testing.htm",
    ],
  },
  {
    prompt:
      "If sensitive electronic equipment could be damaged by an applied-voltage insulation-resistance test, which alternative can assess its leakage under suitable operating conditions?",
    options: [
      "A continuity test",
      "A dielectric strength test",
      "A polarity test",
      "An earth leakage test",
    ],
    answer: "An earth leakage test",
    rationales: {
      "A continuity test":
        "This can verify a protective-conductor path but does not assess unwanted current from live circuits to earth or accessible parts. It answers a different safety question.",
      "A dielectric strength test":
        "This method applies an even greater electrical stress than routine insulation resistance and is more likely to harm vulnerable components. It is not a protective alternative for sensitive electronics.",
      "A polarity test":
        "Correct conductor assignment matters for leads and controls, but it supplies no leakage-current measurement. A product can have correct polarity while its insulation or filters produce an unsafe current.",
    },
    sourceUrls: [
      "https://www.megger.com/en/products/pat450-portable-appliance-tester",
      "https://electrical.theiet.org/wiring-matters/years/2020/81-july-2020/the-all-new-5th-edition-of-the-iet-code-of-practice-for-in-service-inspection-and-testing-of-electrical-equipment/",
    ],
  },
  {
    prompt:
      "Which supply arrangement is commonly required where equipment is designed for protective-conductor current above 3.5 mA but not exceeding 10 mA?",
    options: [
      "Be permanently wired or supplied through an appropriate BS EN 60309-2 plug and socket",
      "Have a label permanently fixed indicating the value of leakage current",
      "Have internal protective conductors of not less than 0.5 mm² c.s.a",
      "Only be used in industrial situations",
    ],
    answer:
      "Be permanently wired or supplied through an appropriate BS EN 60309-2 plug and socket",
    rationales: {
      "Have a label permanently fixed indicating the value of leakage current":
        "A warning can communicate the high-current condition but does not make the earth connection mechanically secure. Labelling cannot replace the required supply arrangement.",
      "Have internal protective conductors of not less than 0.5 mm² c.s.a":
        "This conductor size is not the connection control specified for the stated current range and may be inadequate for the product. External protective-path reliability remains essential.",
      "Only be used in industrial situations":
        "Workplace type does not remove the shock hazard created if the protective connection is lost. The equipment needs the prescribed connection wherever it is installed.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/1625/regulation-5437.pdf",
      "https://electrical.theiet.org/wiring-matters/years/2021/85-may-2021/back-to-the-forum-earth-leakage/",
    ],
  },
  {
    prompt:
      "In order to reduce the possibility of electric shock through contact with live parts, the aperture of any electrical equipment must",
    options: [
      "Be located so as to be inaccessible to the user",
      "Be subjected to dielectric strength testing",
      "Comply with the requirements of BS EN 50950",
      "Meet test finger and test pin requirements",
    ],
    answer: "Meet test finger and test pin requirements",
    rationales: {
      "Be located so as to be inaccessible to the user":
        "Normal placement can change during installation, servicing or misuse and does not prove the enclosure prevents access. The opening itself must provide the required basic protection.",
      "Be subjected to dielectric strength testing":
        "A high-voltage test assesses insulation strength rather than whether a finger or small object can reach a live part. An enclosure can pass one property while failing the other.",
      "Comply with the requirements of BS EN 50950":
        "This obsolete and incorrectly cited product-standard reference cannot serve as a universal aperture criterion. Equipment must meet the applicable current product standard and access-probe requirements.",
    },
    sourceUrls: [
      "https://webstore.iec.ch/en/publication/2452",
      "https://www.hse.gov.uk/pubns/priced/hsg107.pdf",
    ],
  },
  {
    prompt:
      "For protection against electric shock, Class III equipment relies upon a supply derived from a",
    options: [
      "Functional extra-low voltage source",
      "Protective extra-low voltage source",
      "Safety-low voltage source",
      "Separated extra-low voltage source",
    ],
    answer: "Separated extra-low voltage source",
    rationales: {
      "Functional extra-low voltage source":
        "FELV uses extra-low voltage for function but does not necessarily provide the separation and protective conditions needed for shock protection. Additional protective measures can therefore be required.",
      "Protective extra-low voltage source":
        "PELV may have an intentional connection to earth and is a distinct installation measure. The traditional Class III definition is associated with the separated arrangement.",
      "Safety-low voltage source":
        "This wording is not the formal expansion of SELV in current BS 7671 terminology. The essential feature is electrical separation from higher-voltage systems and earth, not the informal word safety alone.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2020/81-july-2020/the-all-new-5th-edition-of-the-iet-code-of-practice-for-in-service-inspection-and-testing-of-electrical-equipment/",
      "https://www.hse.gov.uk/pubns/priced/hsg107.pdf",
    ],
  },
  {
    prompt:
      "In the traditional protective-class model, which arrangement describes ordinary metal-cased Class II equipment where no functional-earth facility is provided?",
    options: [
      "Protectively earthed metalwork separated from live parts by basic and supplementary insulation",
      "Earthed metalwork separated from live parts by basic insulation only",
      "Unearthed metalwork separated from live parts by basic and supplementary insulation",
      "Unearthed metalwork separated from live parts by basic insulation only",
    ],
    answer:
      "Unearthed metalwork separated from live parts by basic and supplementary insulation",
    rationales: {
      "Protectively earthed metalwork separated from live parts by basic and supplementary insulation":
        "Protective earthing of accessible metal is not the defining arrangement for Class II construction. Its safety must not depend on an installation protective conductor, even where a separate functional-earth facility exists.",
      "Earthed metalwork separated from live parts by basic insulation only":
        "Basic insulation plus protective earthing describes the two principal layers of Class I fault protection. It does not provide the earth-independent double-insulation construction requested.",
      "Unearthed metalwork separated from live parts by basic insulation only":
        "A single layer can leave accessible metal hazardous after one insulation fault. Supplementary or equivalent reinforced insulation is required where protective earth is not the safety measure.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/pubns/priced/hsg107.pdf",
      "https://electrical.theiet.org/wiring-matters/years/2020/81-july-2020/the-all-new-5th-edition-of-the-iet-code-of-practice-for-in-service-inspection-and-testing-of-electrical-equipment/",
    ],
  },
  {
    prompt:
      "Which one of the following types of equipment in shops and offices is considered the most likely to develop dangerous faults?",
    options: ["Hand-held", "Movable", "Portable", "Stationary"],
    answer: "Hand-held",
    rationales: {
      Movable:
        "An item that can be relocated may still spend most of its energized life resting in one position. It usually experiences less continuous flexing and direct body contact than equipment gripped during operation.",
      Portable:
        "Readily carried equipment can be exposed to handling damage, but it is not necessarily held throughout use. The more direct category in the question combines continuous handling, flex movement and close user contact.",
      Stationary:
        "Equipment normally remaining in one place is generally exposed to less mechanical movement of its case and supply lead. Its risk can still be high for other environmental or operational reasons.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2021/84-march-2021/the-all-new-5th-edition-of-the-iet-code-of-practice-for-in-service-inspection-and-testing-of-electrical-equipment/",
      "https://www.hse.gov.uk/pubns/priced/hsg107.pdf",
    ],
  },
  {
    prompt:
      "When formally inspecting equipment used outdoors, which rating helps confirm that its enclosure suits the expected dust and water exposure?",
    options: ["GP rating", "GS rating", "IP rating", "IT rating"],
    answer: "IP rating",
    rationales: {
      "GP rating":
        "This is not the standardized enclosure code for entry of solids and water. An invented abbreviation gives no verifiable evidence that outdoor exposure has been considered.",
      "GS rating":
        "GS is associated with HSE guidance identifiers such as GS38, not an ingress-protection classification on equipment. It does not state resistance to rain, dust or object access.",
      "IT rating":
        "IT commonly refers to information technology or an earthing-system designation, neither of which specifies enclosure protection. Outdoor suitability needs the recognized two-character ingress code.",
    },
    sourceUrls: [
      "https://webstore.iec.ch/en/publication/2452",
      "https://www.hse.gov.uk/electricity/electricequip.htm",
    ],
  },
  {
    prompt:
      "If an inspector considers that the equipment being tested is not suitable for the environment, this should be",
    options: [
      "Recorded after the operative has been instructed as to the possible danger",
      "Recorded and brought to the attention of the responsible person",
      "Reported to the Health & Safety Executive",
      "Reported to the manufacturer of the equipment",
    ],
    answer: "Recorded and brought to the attention of the responsible person",
    rationales: {
      "Recorded after the operative has been instructed as to the possible danger":
        "Warning only the immediate user does not ensure the dutyholder can remove, relocate or replace the unsuitable item. The finding needs management attention and an auditable outcome.",
      "Reported to the Health & Safety Executive":
        "Routine unsuitability is normally managed by the employer or person controlling the equipment. Regulatory reporting may arise after specified serious incidents, not for every maintenance observation.",
      "Reported to the manufacturer of the equipment":
        "The maker may clarify environmental ratings, but the workplace controller must act on the present risk. An external enquiry does not itself prevent continued use in the wrong conditions.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/pubns/priced/hsg107.pdf",
      "https://www.hse.gov.uk/work-equipment-machinery/inspection.htm",
    ],
  },
  {
    prompt:
      "For simple mains equipment that the manufacturer permits to be insulation-tested, which preparation includes its internal circuits while keeping the enclosure safe?",
    options: [
      "Fuses should be checked, switches in the OFF position and all covers removed if possible",
      "Fuses should be checked, switches in the ON position and covers in place",
      "Switches should be in the OFF position and all covers in place",
      "Switches should be in the ON position and all covers removed if possible",
    ],
    answer:
      "Fuses should be checked, switches in the ON position and covers in place",
    rationales: {
      "Fuses should be checked, switches in the OFF position and all covers removed if possible":
        "An open control can exclude internal wiring from the measurement, while removing covers creates needless access to parts. The equipment should remain assembled in its safe-use condition.",
      "Switches should be in the OFF position and all covers in place":
        "Keeping covers fitted is appropriate, but an open switch can leave conductors and components beyond it outside the test path. The selected method must include all relevant live circuitry.",
      "Switches should be in the ON position and all covers removed if possible":
        "Closing the controls helps include internal paths, but enclosure removal is unnecessary and may expose or disturb parts. Testing should be performed with normal protective covers secured.",
    },
    sourceUrls: [
      "https://www.megger.com/en/products/pat450-portable-appliance-tester",
      "https://www.hse.gov.uk/pubns/priced/hsg107.pdf",
    ],
  },
  {
    prompt:
      "When conducting an earth continuity test on equipment that has accessible metal parts, which are earthed only for functional/screening purposes, these parts should be",
    options: [
      "Subjected to a measured touch current test",
      "Tested at a current 1.5 times the fuse rating",
      "Tested at a current between 20 mA and 200 mA",
      "Tested for earth continuity at full current",
    ],
    answer: "Tested at a current between 20 mA and 200 mA",
    rationales: {
      "Subjected to a measured touch current test":
        "A touch-current assessment may be separately appropriate, but it does not answer how to verify the stated functional-earth path. The question specifically asks for the continuity-test treatment.",
      "Tested at a current 1.5 times the fuse rating":
        "That historical high-current bond method can overstress a screening connection not intended for protective fault current. A low-current measurement is the suitable continuity approach here.",
      "Tested for earth continuity at full current":
        "Applying an unspecified maximum output risks damage to delicate tracks, screens or components. Test current should be deliberately limited while still providing a reliable low-resistance reading.",
    },
    sourceUrls: [
      "https://www.megger.com/en/products/pat450-portable-appliance-tester",
      "https://electrical.theiet.org/wiring-matters/years/2020/81-july-2020/the-all-new-5th-edition-of-the-iet-code-of-practice-for-in-service-inspection-and-testing-of-electrical-equipment/",
    ],
  },
  {
    prompt:
      "When using certain types of test instrument, as an alternative to subtracting the lead resistance from the final measured value, the lead resistance may be",
    options: ["Decreased", "Ignored", "Increased", "Nulled"],
    answer: "Nulled",
    rationales: {
      Decreased:
        "The physical resistance of the leads is not deliberately reduced by an instrument setting. Compensation stores an offset so that their contribution is removed from subsequent displayed results.",
      Ignored:
        "Lead resistance can be significant beside a protective-conductor acceptance value and would make the equipment appear worse than it is. It must be measured and compensated, not simply disregarded.",
      Increased:
        "Adding further resistance would enlarge the measurement error and make comparison with the limit less reliable. The aim is to remove the known lead contribution from the displayed value.",
    },
    sourceUrls: [
      "https://www.megger.com/en/products/pat450-portable-appliance-tester",
    ],
  },
  {
    prompt:
      "An insulation-resistance test between linked live conductors and earth on Class I equipment gives only 0.1 MΩ. What fault could cause this low reading?",
    options: [
      "A short circuit between live conductors within the appliance cord set",
      "An open circuit has occurred within the protective conductor",
      "Progressive failure of the insulation between live conductors",
      "Progressive failure of the insulation between live conductors and earth",
    ],
    answer:
      "Progressive failure of the insulation between live conductors and earth",
    rationales: {
      "A short circuit between live conductors within the appliance cord set":
        "Line and neutral are intentionally linked together for this measurement, so a connection between them does not create the observed path to earth. It is dangerous for other reasons but not this result mechanism.",
      "An open circuit has occurred within the protective conductor":
        "A broken earth is detected by protective-conductor continuity and may even remove part of the reference path. It does not create the substantial leakage needed to produce a very low live-to-earth resistance.",
      "Progressive failure of the insulation between live conductors":
        "Deterioration only between line and neutral lies within the linked side of this test and is not measured as leakage to the enclosure. A separate fault path to earth is needed to depress this reading.",
    },
    sourceUrls: [
      "https://www.megger.com/en/products/pat450-portable-appliance-tester",
      "https://www.hse.gov.uk/pubns/priced/hsg107.pdf",
    ],
  },
] as const;
