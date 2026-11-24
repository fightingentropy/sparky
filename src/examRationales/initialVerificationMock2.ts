// Per-option feedback for the Initial Verification mock 2 questions written
// against IET Guidance Note 3, 9th edition (BS 7671:2018+A2:2022).
export const initialVerificationMock2 = [
  {
    prompt:
      "Under Regulation 14 of the Electricity at Work Regulations, which activity can be justified on or near live conductors, provided suitable precautions are taken?",
    options: [
      "Replacing a cracked socket-outlet on an energised circuit because the shop is open for trading",
      "Connecting a new circuit into an energised consumer unit to avoid interrupting the occupier's supply",
      "Measuring earth fault loop impedance at a socket-outlet, a test that needs the supply connected",
      "Tightening a loose termination in an energised distribution board to save a return visit",
    ],
    answer:
      "Measuring earth fault loop impedance at a socket-outlet, a test that needs the supply connected",
    rationales: {
      "Replacing a cracked socket-outlet on an energised circuit because the shop is open for trading":
        "Replacing an accessory is repair work that can be done after safe isolation; keeping a shop trading does not make it unreasonable for the circuit to be dead.",
      "Connecting a new circuit into an energised consumer unit to avoid interrupting the occupier's supply":
        "Installation work inside a consumer unit does not need the supply present, so inconvenience to the occupier is no justification for leaving the busbars energised.",
      "Tightening a loose termination in an energised distribution board to save a return visit":
        "Saving a return visit does not make it unreasonable for the board to be dead; the termination should be tightened with the board isolated, even if that means coming back.",
    },
    sourceUrls: [
      "https://www.legislation.gov.uk/uksi/1989/635/regulation/14/made",
      "https://www.hse.gov.uk/pubns/priced/hsr25.pdf",
    ],
  },
  {
    prompt:
      "Test equipment, leads and probes carry an installation overvoltage category (CAT) marking. Which location calls for CAT IV equipment rather than CAT III?",
    options: [
      "A socket-outlet on a ring final circuit",
      "A sub-distribution board on an upper floor",
      "The flex of a plug-connected appliance",
      "The electricity meter at the origin",
    ],
    answer:
      "The electricity meter at the origin",
    rationales: {
      "A socket-outlet on a ring final circuit":
        "Socket-outlets form part of the building wiring installation, which is the zone CAT III equipment is intended for, so CAT IV is not needed there.",
      "A sub-distribution board on an upper floor":
        "Distribution boards are named as CAT III locations; only the stretch between the building entrance and the primary board is treated as CAT IV.",
      "The flex of a plug-connected appliance":
        "Plug-connected equipment supplied from the building wiring falls in CAT II, the least onerous of the three markings described.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/pubns/priced/gs38.pdf",
    ],
  },
  {
    prompt:
      "A test arrangement is made up of an instrument, leads, probes and connectors that carry different CAT markings. Which statement describes the equivalent overvoltage category of the complete arrangement?",
    options: [
      "It is the lowest category of any item connected in the arrangement",
      "It is the category marked on the test instrument itself",
      "It is the highest category of any item connected in the arrangement",
      "It is the category of the test leads, since they carry the test current",
    ],
    answer:
      "It is the lowest category of any item connected in the arrangement",
    rationales: {
      "It is the category marked on the test instrument itself":
        "The instrument's marking covers the instrument only; leads, probes and connectors with a lesser marking would still be exposed to the same transients.",
      "It is the highest category of any item connected in the arrangement":
        "Taking the highest marking would let one well-rated item mask weaker ones, which is the opposite of how the equivalent category is assessed.",
      "It is the category of the test leads, since they carry the test current":
        "Leads are just one of the items counted; an instrument or probe with a lower marking than the leads would still set the limit.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/pubns/priced/gs38.pdf",
    ],
  },
  {
    prompt:
      "Particular attention to safety is needed when a test instrument can generate a test voltage above certain values. Which values apply in wet or damp conditions?",
    options: [
      "50 V AC or 120 V DC",
      "25 V AC or 60 V DC",
      "12 V AC or 30 V DC",
      "25 V AC or 120 V DC",
    ],
    answer:
      "25 V AC or 60 V DC",
    rationales: {
      "50 V AC or 120 V DC":
        "50 V AC or 120 V DC are the thresholds given for dry conditions; they are too high to use where the surroundings are wet or damp.",
      "12 V AC or 30 V DC":
        "12 V AC or 30 V DC is the limit up to which SELV or PELV circuits in wet areas generally need no insulation for basic protection (Regulation 414.4.5); it is not the test-voltage threshold given for wet or damp conditions.",
      "25 V AC or 120 V DC":
        "This pairs the wet-condition AC figure with the dry-condition DC figure; in wet or damp conditions the DC threshold also halves, to 60 V.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/pubns/priced/gs38.pdf",
      "https://electrical.theiet.org/media/qxhf2est/guidance-note-3-2022-ninth-edition-first-printing-errata-november-2024.pdf",
    ],
  },
  {
    prompt:
      "GS38 recommends that suitable high breaking capacity (HBC) fuses, or another means of limiting current, are provided in test leads or test equipment. What is this measure intended to achieve?",
    options: [
      "Reduce the risks from accidental contact and from arcing under fault conditions",
      "Improve the accuracy of low-resistance readings by stabilising the test current",
      "Allow live measurements where no overcurrent protection exists upstream of the test point",
      "Raise the overvoltage category of the leads to match that of the instrument",
    ],
    answer:
      "Reduce the risks from accidental contact and from arcing under fault conditions",
    rationales: {
      "Improve the accuracy of low-resistance readings by stabilising the test current":
        "Fused leads add resistance and are listed among the causes of measurement error, so they do nothing to improve the accuracy of readings.",
      "Allow live measurements where no overcurrent protection exists upstream of the test point":
        "Fused leads alone do not make up for missing overcurrent protection between the test point and the supply transformer; a suitably rated device must be present or temporarily fitted.",
      "Raise the overvoltage category of the leads to match that of the instrument":
        "A fuse does not change a CAT marking; the arrangement still takes the lowest category of any lead, probe or instrument connected in it.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/pubns/priced/gs38.pdf",
    ],
  },
  {
    prompt:
      "Some instrument manufacturers advise the use of non-fused leads and probes because the instrument has in-built electrical protection. What should the inspector note about that in-built protection?",
    options: [
      "It makes the GS38 precautions unnecessary for the leads",
      "It also covers leads supplied by the instrument manufacturer",
      "It does not extend to the probes and leads",
      "It gives the leads the same overvoltage category as the instrument",
    ],
    answer:
      "It does not extend to the probes and leads",
    rationales: {
      "It makes the GS38 precautions unnecessary for the leads":
        "GS38 precautions are to be observed for all instruments, leads, probes and accessories, whatever protection the instrument itself contains.",
      "It also covers leads supplied by the instrument manufacturer":
        "Leads from the instrument's own manufacturer are no exception; the limitation is stated without qualification, so, whoever made the leads, they stay outside the internal protection.",
      "It gives the leads the same overvoltage category as the instrument":
        "Category markings belong to each item separately and the complete arrangement takes the lowest of them; internal protection cannot upgrade a lead.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/pubns/priced/gs38.pdf",
    ],
  },
  {
    prompt:
      "BS 7671 defines verification as all measures by means of which compliance of the electrical installation with the relevant requirements is checked. Which three activities does this definition comprise?",
    options: [
      "Design, construction and inspection",
      "Inspection, testing and certification",
      "Design, testing and certification",
      "Isolation, testing and reporting",
    ],
    answer:
      "Inspection, testing and certification",
    rationales: {
      "Design, construction and inspection":
        "Design and construction are signed for separately on the Electrical Installation Certificate as the work being verified, and this list leaves out both testing and certification.",
      "Design, testing and certification":
        "Design is a stage whose compliance is checked, not a means of checking it, and this combination drops inspection, which is one of the three parts.",
      "Isolation, testing and reporting":
        "Safe isolation is a precaution taken before dead working and not a compliance check, and this list omits inspection altogether.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/qxhf2est/guidance-note-3-2022-ninth-edition-first-printing-errata-november-2024.pdf",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/model-forms/",
    ],
  },
  {
    prompt:
      "Regulation 641.2 requires information on the assessed general characteristics of an installation to be made available to the person carrying out the inspection and testing. Which of the following is NOT part of that information?",
    options: [
      "The maximum demand after diversity has been taken into account",
      "The prospective short-circuit current at the origin of the installation",
      "The type and rating of the overcurrent protective device at the origin",
      "The measured R1 + R2 value of each final circuit",
    ],
    answer:
      "The measured R1 + R2 value of each final circuit",
    rationales: {
      "The maximum demand after diversity has been taken into account":
        "Maximum demand, expressed in amps, kW or kVA after diversity, is the first listed characteristic (Regulation 311.1) and must be given to the inspector.",
      "The prospective short-circuit current at the origin of the installation":
        "The prospective short-circuit current at the origin is one of the listed supply characteristics that the inspector is entitled to receive before starting.",
      "The type and rating of the overcurrent protective device at the origin":
        "The type and rating of the overcurrent protective device acting at the origin is the final item in the list of general characteristics to be provided.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/qxhf2est/guidance-note-3-2022-ninth-edition-first-printing-errata-november-2024.pdf",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
    ],
  },
  {
    prompt:
      "During initial verification an inspector needs to confirm that the installed cables are of the sizes selected by the designer. Which approach is the inspector reasonably expected to take?",
    options: [
      "Compare the installed sizes at the distribution board with the designer's cable schedule",
      "Repeat the cable sizing calculations for every circuit and resize any cable found too small",
      "Trace every cable along its whole route to prove the size is maintained throughout its length",
      "Rely on the designer's signature on the certificate and make no check of cable sizes at all",
    ],
    answer:
      "Compare the installed sizes at the distribution board with the designer's cable schedule",
    rationales: {
      "Repeat the cable sizing calculations for every circuit and resize any cable found too small":
        "Design cable sizing checks remain the designer's responsibility, and the inspector is not meant to take over that duty or to fix the problems found.",
      "Trace every cable along its whole route to prove the size is maintained throughout its length":
        "Making sure a cable size is maintained along its full length is the duty of the installer or constructor, and it would be unreasonable to expect it of the inspector.",
      "Rely on the designer's signature on the certificate and make no check of cable sizes at all":
        "The inspector is still responsible for verifying aspects of both design and construction, so a visual comparison against the design information has to be made.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/qxhf2est/guidance-note-3-2022-ninth-edition-first-printing-errata-november-2024.pdf",
    ],
  },
  {
    prompt:
      "During first-fix inspection of a new installation, a thermoplastic flat twin-and-earth cable is found buried 30 mm deep in a masonry wall, running vertically above a socket-outlet within the prescribed zone. It has no earthed metallic covering, no earthed containment and no mechanical protection, and it is not a SELV or PELV circuit. What must be provided for this cable?",
    options: [
      "No further measure, because a cable run within a prescribed zone needs nothing more",
      "Fault protection by an RCD with a rated residual operating current not exceeding 300 mA",
      "Additional protection by an RCD with a rated residual operating current not exceeding 30 mA",
      "A warning notice at the consumer unit showing the route of the concealed cable",
    ],
    answer:
      "Additional protection by an RCD with a rated residual operating current not exceeding 30 mA",
    rationales: {
      "No further measure, because a cable run within a prescribed zone needs nothing more":
        "Prescribed zones only make the cable route predictable; a cable shallower than 50 mm still needs one of the listed protective methods even when it stays inside a zone.",
      "Fault protection by an RCD with a rated residual operating current not exceeding 300 mA":
        "A 300 mA device is too insensitive to count as additional protection; the limit set for a shallow concealed cable is a rated residual operating current of 30 mA.",
      "A warning notice at the consumer unit showing the route of the concealed cable":
        "No such notice is called for, and a label cannot stop a nail or screw piercing the cable; the remedy has to be a protective measure applied to the circuit itself.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/qxhf2est/guidance-note-3-2022-ninth-edition-first-printing-errata-november-2024.pdf",
    ],
  },
  {
    prompt:
      "BS 7671 requires arc fault detection devices (AFDDs) on single-phase AC circuits supplying socket-outlets rated up to 32 A in certain premises. In which of the following installations are they a requirement rather than a recommendation?",
    options: [
      "A house in multiple occupation",
      "A detached single-family dwelling",
      "A small retail shop",
      "An open-plan commercial office",
    ],
    answer:
      "A house in multiple occupation",
    rationales: {
      "A detached single-family dwelling":
        "A single-household dwelling is not one of the four listed premises, so AFDDs there are a recommendation that the designer may or may not adopt.",
      "A small retail shop":
        "A shop is not residential accommodation of any kind, whereas all four listed premises are places where people live; here the designer simply chooses whether to fit AFDDs.",
      "An open-plan commercial office":
        "A commercial office does not appear among the premises named in Regulation 421.1.7, so fitting AFDDs there remains optional guidance only.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/qxhf2est/guidance-note-3-2022-ninth-edition-first-printing-errata-november-2024.pdf",
    ],
  },
  {
    prompt:
      "When inspecting the conductors of a new three-phase AC distribution circuit, which colours should identify lines L1, L2 and L3 respectively?",
    options: [
      "Red, yellow, blue",
      "Brown, grey, black",
      "Black, brown, grey",
      "Brown, black, grey",
    ],
    answer:
      "Brown, black, grey",
    rationales: {
      "Red, yellow, blue":
        "These are the pre-harmonisation phase colours; under the current scheme blue marks the neutral, so it cannot be used to identify L3.",
      "Brown, grey, black":
        "The right three colours appear but the last two are transposed: black belongs to L2 and grey to L3, not the other way round.",
      "Black, brown, grey":
        "Brown identifies L1 and black identifies L2, so swapping the first two colours mislabels both of those lines even though grey is correct for L3.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/qxhf2est/guidance-note-3-2022-ninth-edition-first-printing-errata-november-2024.pdf",
    ],
  },
  {
    prompt:
      "Barriers and enclosures that provide basic protection are checked during initial inspection. Which statement gives the minimum degrees of protection they must provide?",
    options: [
      "IPXXA generally, and IPXXB or IP2X for a readily accessible horizontal top surface",
      "IPXXB or IP2X generally, and IPXXD or IP4X for a readily accessible horizontal top surface",
      "IPXXD or IP4X generally, and IPXXB or IP2X for a readily accessible horizontal top surface",
      "IPX2 generally, and IPX4 for a readily accessible horizontal top surface",
    ],
    answer:
      "IPXXB or IP2X generally, and IPXXD or IP4X for a readily accessible horizontal top surface",
    rationales: {
      "IPXXA generally, and IPXXB or IP2X for a readily accessible horizontal top surface":
        "IPXXA only guards against contact by the back of the hand, a lower level than the finger-proof IPXXB that is demanded as the general minimum.",
      "IPXXD or IP4X generally, and IPXXB or IP2X for a readily accessible horizontal top surface":
        "The two requirements are reversed here: the stricter IPXXD or IP4X applies to the accessible top surface, not to every face of the enclosure.",
      "IPX2 generally, and IPX4 for a readily accessible horizontal top surface":
        "The second characteristic numeral describes resistance to water ingress rather than access to live parts, so IPX2 and IPX4 are not the codes set for basic protection.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/qxhf2est/guidance-note-3-2022-ninth-edition-first-printing-errata-november-2024.pdf",
    ],
  },
  {
    prompt:
      "During initial inspection some of the RCDs are found to be marked Type AC. For which application does BS 7671 permit a Type AC RCD to be used?",
    options: [
      "Fixed equipment where the load current is known to contain no DC components",
      "General-purpose socket-outlet circuits rated up to 32 A in a dwelling",
      "Circuits in medical locations, where continuity of supply is critical",
      "Socket-outlets incorporating RCD protection (SRCDs) to BS 7288",
    ],
    answer:
      "Fixed equipment where the load current is known to contain no DC components",
    rationales: {
      "General-purpose socket-outlet circuits rated up to 32 A in a dwelling":
        "Whatever is plugged into a socket-outlet is unknown and may draw current with a DC component, so the load cannot be treated as fixed equipment with a known waveform.",
      "Circuits in medical locations, where continuity of supply is critical":
        "Type AC devices are expressly not permitted in medical locations, regardless of what equipment is connected to the circuit.",
      "Socket-outlets incorporating RCD protection (SRCDs) to BS 7288":
        "The restriction to fixed equipment rules out Type AC protection built into a socket-outlet; SRCDs to BS 7288 are recognised only as Type A.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/qxhf2est/guidance-note-3-2022-ninth-edition-first-printing-errata-november-2024.pdf",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/webinar-questions-and-answers/rcds-selection-types-and-testing-webinar/",
    ],
  },
  {
    prompt:
      "Steel trunking passes through a wall that has a specified fire-resistance rating. Above what internal cross-sectional area must the trunking be sealed internally where it passes through the wall?",
    options: [
      "310 mm²",
      "510 mm²",
      "710 mm²",
      "910 mm²",
    ],
    answer:
      "710 mm²",
    rationales: {
      "310 mm²":
        "An area of 310 mm² is roughly a 20 mm round bore, well under the size at which internal sealing of containment becomes compulsory.",
      "510 mm²":
        "At 510 mm², about a 25 mm round hole, the containment is still some 200 mm² short of the size that triggers the internal sealing requirement.",
      "910 mm²":
        "Waiting until the bore reaches 910 mm² would leave containment between 710 mm² and that figure unsealed, which Regulation 527.2.3 does not allow.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/qxhf2est/guidance-note-3-2022-ninth-edition-first-printing-errata-november-2024.pdf",
    ],
  },
  {
    prompt:
      "An Electrical Installation Certificate for a new domestic (household) installation is issued complete with the Guidance for Recipients. Which notice may be omitted from the installation because its information is recorded in that certification?",
    options: [
      "The label at earthing and bonding connections",
      "The notice advising six-monthly operation of the RCD test button",
      "The multiple-supplies notice where an alternative supply is installed",
      "The notice listing circuits with high protective conductor currents",
    ],
    answer:
      "The notice advising six-monthly operation of the RCD test button",
    rationales: {
      "The label at earthing and bonding connections":
        "Earthing and bonding connection labels are warning notices outside the domestic relaxation; they must stay at the point of connection, though a BS 951 clamp can carry the wording.",
      "The multiple-supplies notice where an alternative supply is installed":
        "Wherever an alternative or additional supply exists, the multiple-supplies warning must be displayed at the mains position, isolation points and distribution boards, dwellings included.",
      "The notice listing circuits with high protective conductor currents":
        "Circuits with high protective conductor current must always be identified at the relevant distribution board; paperwork handed to the householder does not replace that warning.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/qxhf2est/guidance-note-3-2022-ninth-edition-first-printing-errata-november-2024.pdf",
    ],
  },
  {
    prompt:
      "An RCD is to be tested by applying a residual test current between line and the cpc on the load side of the device. Why is it essential that the earth fault loop impedance of the circuit is verified before this test is made?",
    options: [
      "The RCD tester cannot select its test current until the measured Zs has been entered",
      "The test can put a dangerous voltage on exposed-conductive-parts if Zs is near its limit",
      "The measured Zs is used to calculate the maximum operating time the RCD must achieve",
      "The loop impedance reading confirms that the RCD's breaking capacity exceeds the fault current",
    ],
    answer:
      "The test can put a dangerous voltage on exposed-conductive-parts if Zs is near its limit",
    rationales: {
      "The RCD tester cannot select its test current until the measured Zs has been entered":
        "RCD test currents are set on the instrument from the device's rated IΔn and Type; no loop impedance value is entered in order to set them.",
      "The measured Zs is used to calculate the maximum operating time the RCD must achieve":
        "Maximum expected tripping times are fixed by the device standard and the residual current applied, for example 300 ms at 1 × IΔn for a non-delay device to a harmonised standard, and are not derived from the measured Zs.",
      "The loop impedance reading confirms that the RCD's breaking capacity exceeds the fault current":
        "Breaking capacity is compared with prospective fault current, which is a separate check and not the safety reason for measuring loop impedance ahead of an RCD test.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2022/91-july-2022/changes-to-rcd-testing-in-bs-76712018plusa22022/",
      "https://electrical.theiet.org/media/qxhf2est/guidance-note-3-2022-ninth-edition-first-printing-errata-november-2024.pdf",
    ],
  },
  {
    prompt:
      "Regulation 643.1 requires a group of tests to be carried out in a set order before a new installation is energised. Which of the following lists only tests that belong to that group?",
    options: [
      "Continuity of protective conductors, continuity of ring final circuit conductors, insulation resistance and polarity",
      "Continuity of protective conductors, insulation resistance, earth fault loop impedance and prospective fault current",
      "Insulation resistance, polarity, check of phase sequence and functional testing",
      "Continuity of ring final circuit conductors, insulation resistance, operation of RCDs and verification of voltage drop",
    ],
    answer:
      "Continuity of protective conductors, continuity of ring final circuit conductors, insulation resistance and polarity",
    rationales: {
      "Continuity of protective conductors, insulation resistance, earth fault loop impedance and prospective fault current":
        "Earth fault loop impedance (Regulation 643.7.3) and prospective fault current (Regulation 643.7.3.201) belong to the automatic disconnection group that follows polarity, outside Regulations 643.2 to 643.6.",
      "Insulation resistance, polarity, check of phase sequence and functional testing":
        "Phase sequence is checked under Regulation 643.9 and functional testing under Regulation 643.10, both near the end of the sequence and well after the group that must precede energisation.",
      "Continuity of ring final circuit conductors, insulation resistance, operation of RCDs and verification of voltage drop":
        "RCD operation and verification of voltage drop (Regulation 643.11) sit after the pre-energisation group; an RCD cannot be trip-tested without a supply.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
      "https://electrical.theiet.org/media/qxhf2est/guidance-note-3-2022-ninth-edition-first-printing-errata-november-2024.pdf",
    ],
  },
  {
    prompt:
      "Before connecting an RCD tester on a TT installation, the inspector presses the integral test button on the RCD and the device trips. What does this result tell the inspector about the installation's earthing?",
    options: [
      "The earth electrode resistance is low enough for the RCD to operate at IΔn",
      "The earthing conductor is continuous, although the circuit cpcs remain unproven",
      "Nothing; the test button checks no part of the earthing arrangement",
      "The earth fault loop impedance is within the limit for the RCD's rated IΔn",
    ],
    answer:
      "Nothing; the test button checks no part of the earthing arrangement",
    rationales: {
      "The earth electrode resistance is low enough for the RCD to operate at IΔn":
        "Electrode resistance has to be measured with an earth electrode tester or a loop impedance tester; a trip produced by the test button involves no current flowing through the electrode.",
      "The earthing conductor is continuous, although the circuit cpcs remain unproven":
        "The test button circuit is contained within the RCD and passes no current through the earthing conductor, so a trip gives no evidence that this conductor is continuous.",
      "The earth fault loop impedance is within the limit for the RCD's rated IΔn":
        "Loop impedance is a measured value compared with design limits; a trip on the test button says nothing about the impedance of the earth path.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/webinar-questions-and-answers/rcds-selection-types-and-testing-webinar/",
      "https://electrical.theiet.org/media/qxhf2est/guidance-note-3-2022-ninth-edition-first-printing-errata-november-2024.pdf",
    ],
  },
  {
    prompt:
      "BS EN 61557 is the series of standards for instruments used to verify protective measures. Allowing for worst-case environmental, supply and battery conditions, what maximum operating error does it permit over the stated measurement range?",
    options: [
      "±2 % of reading",
      "±5 % of reading",
      "±10 % of reading",
      "±30 % of reading",
    ],
    answer:
      "±30 % of reading",
    rationales: {
      "±2 % of reading":
        "A figure of 2 % relates to the basic accuracy of analogue instruments, expressed against full-scale deflection, not to the operating error limit.",
      "±5 % of reading":
        "5 % is the basic measurement accuracy usually regarded as adequate under ideal conditions, a much tighter figure than the in-service operating error allowed.",
      "±10 % of reading":
        "A ±10 % limit is not the operating error that BS EN 61557 permits; it is only a third of the ±30 % worst-case allowance over the stated measurement range.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/1696/ongoing-accuracy-of-test-instruments.pdf",
      "https://electrical.theiet.org/media/qxhf2est/guidance-note-3-2022-ninth-edition-first-printing-errata-november-2024.pdf",
    ],
  },
  {
    prompt:
      "A direct measurement of prospective fault current is needed at a point in an installation where there is no protective device rated for the anticipated fault current. What should the inspector do?",
    options: [
      "Use test leads fitted with fuses, as these give the overcurrent protection needed",
      "Fit a temporary protective device of suitable rating and measure downstream of it",
      "Connect on the supply side of the service cut-out so the highest value is recorded",
      "Select the instrument's low-current non-trip range to limit the energy at the probes",
    ],
    answer:
      "Fit a temporary protective device of suitable rating and measure downstream of it",
    rationales: {
      "Use test leads fitted with fuses, as these give the overcurrent protection needed":
        "Fused test leads alone are specifically stated not to satisfy the need for a suitably rated protective device ahead of the measuring point.",
      "Connect on the supply side of the service cut-out so the highest value is recorded":
        "The supply side of the service cut-out is upstream of every protective device at the installation, whereas the measurement should always be made on the output terminals of a suitably rated device; seeking the highest reading does not justify it.",
      "Select the instrument's low-current non-trip range to limit the energy at the probes":
        "Changing the instrument range provides no fault protection at the point of connection, and low-current ranges give less reliable fault current values.",
    },
    sourceUrls: [
      "https://www.hse.gov.uk/pubns/priced/hsr25.pdf",
      "https://electrical.theiet.org/media/qxhf2est/guidance-note-3-2022-ninth-edition-first-printing-errata-november-2024.pdf",
    ],
  },
  {
    prompt:
      "A new consumer unit contains AFDDs of two general types: some have a test button and the others have an automatic test facility instead. Which of these devices can the inspector functionally test during commissioning?",
    options: [
      "Only those with a test button, by pressing the button",
      "Only those with an automatic test facility, using an insulation resistance tester",
      "Both types, by applying a 1 × IΔn test with an RCD tester",
      "Neither type; AFDDs can only be verified by inspection",
    ],
    answer:
      "Only those with a test button, by pressing the button",
    rationales: {
      "Only those with an automatic test facility, using an insulation resistance tester":
        "An insulation resistance tester measures insulation between conductors, and an AFDD presents a low resistance during that test; it does nothing to exercise arc detection on a device without a button.",
      "Both types, by applying a 1 × IΔn test with an RCD tester":
        "An RCD tester verifies residual current tripping times; it does not simulate an arc fault, so it is not a functional test for either kind of AFDD.",
      "Neither type; AFDDs can only be verified by inspection":
        "Devices fitted with a test button can be functionally tested simply by pressing it, so it is not true that every AFDD is limited to inspection.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
      "https://electrical.theiet.org/media/qxhf2est/guidance-note-3-2022-ninth-edition-first-printing-errata-november-2024.pdf",
    ],
  },
  {
    prompt:
      "A distribution circuit (feeder) has a nominal voltage of 650 V. What are the insulation resistance test voltage and the minimum acceptable insulation resistance for this circuit?",
    options: [
      "250 V DC and 0.5 MΩ",
      "500 V DC and 1.0 MΩ",
      "1000 V DC and 1.0 MΩ",
      "1000 V DC and 0.5 MΩ",
    ],
    answer:
      "1000 V DC and 1.0 MΩ",
    rationales: {
      "250 V DC and 0.5 MΩ":
        "250 V DC with a 0.5 MΩ minimum is the row for SELV and PELV circuits, which is far below what a 650 V feeder needs.",
      "500 V DC and 1.0 MΩ":
        "500 V DC and 1.0 MΩ apply to circuits with a nominal voltage up to and including 500 V; a 650 V feeder sits above that band.",
      "1000 V DC and 0.5 MΩ":
        "The 1000 V DC test voltage suits a circuit above 500 V, but 0.5 MΩ is the SELV and PELV minimum; this band requires 1.0 MΩ.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/qxhf2est/guidance-note-3-2022-ninth-edition-first-printing-errata-november-2024.pdf",
      "https://electrical.theiet.org/wiring-matters/years/2020/81-july-2020/history-of-insulation-resistance-testing/",
    ],
  },
  {
    prompt:
      "An insulation resistance test on a new 230 V installation gives a reading above the 1 MΩ minimum required by BS 7671. According to IET Guidance Note 3, below what value should a reading on a new installation still be investigated?",
    options: [
      "2 MΩ",
      "20 MΩ",
      "100 MΩ",
      "200 MΩ",
    ],
    answer:
      "20 MΩ",
    rationales: {
      "2 MΩ":
        "2 MΩ is only just above the 1 MΩ minimum; GN3 expects readings on new work to be queried at a much higher level than this.",
      "100 MΩ":
        "100 MΩ is a healthy reading for new wiring; GN3 does not ask for results between 20 MΩ and 100 MΩ to be investigated.",
      "200 MΩ":
        "GN3 gives no 200 MΩ level; the only investigation threshold it sets for new installations is 20 MΩ, a tenth of this value.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/qxhf2est/guidance-note-3-2022-ninth-edition-first-printing-errata-november-2024.pdf",
      "https://electrical.theiet.org/wiring-matters/years/2020/81-july-2020/history-of-insulation-resistance-testing/",
    ],
  },
  {
    prompt:
      "A new circuit includes an AFDD and a surge protection device that could influence, or be damaged by, an insulation resistance test. The circuit cables were tested at 500 V DC before this equipment was connected. What test is applied after connection, and what is the minimum acceptable reading?",
    options: [
      "250 V DC between live conductors (connected together) and the protective conductor; at least 1.0 MΩ",
      "250 V DC between live conductors (connected together) and the protective conductor; at least 0.5 MΩ",
      "500 V DC between the line conductor and the neutral conductor only; at least 1.0 MΩ",
      "500 V DC between live conductors (connected together) and the protective conductor; at least 2.0 MΩ",
    ],
    answer:
      "250 V DC between live conductors (connected together) and the protective conductor; at least 1.0 MΩ",
    rationales: {
      "250 V DC between live conductors (connected together) and the protective conductor; at least 0.5 MΩ":
        "The reduced 250 V DC voltage is right, but 0.5 MΩ is the SELV and PELV minimum; the second-stage test on a low-voltage circuit must still reach 1.0 MΩ.",
      "500 V DC between the line conductor and the neutral conductor only; at least 1.0 MΩ":
        "Applying 500 V DC between line and neutral would put the full test voltage across the AFDD and SPD, the very thing the two-stage method avoids.",
      "500 V DC between live conductors (connected together) and the protective conductor; at least 2.0 MΩ":
        "Repeating a 500 V DC test after connection defeats the purpose of the reduced-voltage second stage, and 2.0 MΩ is not a minimum given for it.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/qxhf2est/guidance-note-3-2022-ninth-edition-first-printing-errata-november-2024.pdf",
      "https://electrical.theiet.org/wiring-matters/years/2020/81-july-2020/history-of-insulation-resistance-testing/",
    ],
  },
  {
    prompt:
      "The cpc continuity of a circuit run in steel conduit and trunking is being measured. What effect do parallel earth return paths, such as the steel containment and bonded pipework, have on the measured value of R2?",
    options: [
      "It is unaffected, because the test current flows only in the cpc",
      "It rises above the true resistance of the cpc",
      "It becomes unstable and cannot be recorded",
      "It tends towards zero",
    ],
    answer:
      "It tends towards zero",
    rationales: {
      "It is unaffected, because the test current flows only in the cpc":
        "A low-resistance ohmmeter cannot confine its current to one conductor; any metallic path joined to the cpc at both ends shares the test current.",
      "It rises above the true resistance of the cpc":
        "Adding conductors in parallel can only lower the combined resistance; a higher reading points to a poor termination, not to a parallel path.",
      "It becomes unstable and cannot be recorded":
        "Parallel paths give a steady but lower reading; they do not make the instrument fluctuate or prevent a value from being recorded.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/qxhf2est/guidance-note-3-2022-ninth-edition-first-printing-errata-november-2024.pdf",
    ],
  },
  {
    prompt:
      "Guidance Note 3 describes two methods of testing the continuity of circuit protective conductors. On all-insulated wiring with no parallel paths, which statement correctly describes what each method measures?",
    options: [
      "Test method 1 measures R2 only; test method 2 measures R1 + R2",
      "Test method 1 measures R1 + R2; test method 2 measures R2 only",
      "Both test methods measure R1 + R2",
      "Both test methods measure R2 only",
    ],
    answer:
      "Test method 1 measures R1 + R2; test method 2 measures R2 only",
    rationales: {
      "Test method 1 measures R2 only; test method 2 measures R1 + R2":
        "This reverses the two methods: the shorting link of method 1 brings the line conductor into the loop, while the wandering lead of method 2 does not.",
      "Both test methods measure R1 + R2":
        "Method 2 never includes the line conductor in the test path, so it cannot give an R1 + R2 value however the leads are arranged.",
      "Both test methods measure R2 only":
        "Method 1 links line to cpc at the board and measures through both conductors, so its reading always includes R1 as well as R2.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/qxhf2est/guidance-note-3-2022-ninth-edition-first-printing-errata-november-2024.pdf",
    ],
  },
  {
    prompt:
      "Which dead test, in addition to its main purpose, helps to confirm that polarity is correct at each point of a radial circuit?",
    options: [
      "Insulation resistance between live conductors",
      "Insulation resistance between live conductors and Earth",
      "Continuity of protective conductors, with line linked to cpc at the board",
      "Continuity of main protective bonding conductors using a wandering lead",
    ],
    answer:
      "Continuity of protective conductors, with line linked to cpc at the board",
    rationales: {
      "Insulation resistance between live conductors":
        "An insulation test between live conductors only shows that line and neutral are not shorted together; it cannot tell which conductor is in which terminal.",
      "Insulation resistance between live conductors and Earth":
        "A high reading between live conductors and Earth proves the insulation is sound, yet it would look the same whether or not line and neutral were crossed.",
      "Continuity of main protective bonding conductors using a wandering lead":
        "A wandering lead test on bonding conductors checks the connection of extraneous-conductive-parts to the MET and involves no circuit live conductors at all.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/qxhf2est/guidance-note-3-2022-ninth-edition-first-printing-errata-november-2024.pdf",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
    ],
  },
  {
    prompt:
      "During step 1 of the ring final circuit continuity test, the end-to-end readings are noticeably lower than the resistance expected from the cable length and csa. What does this suggest?",
    options: [
      "One or more conductor terminations are loose or of high resistance",
      "The ring is incorrectly configured, possibly as a 'figure of eight'",
      "Several socket-outlets have been wired as spurs from the ring",
      "The cpc has a smaller csa than the line and neutral conductors",
    ],
    answer:
      "The ring is incorrectly configured, possibly as a 'figure of eight'",
    rationales: {
      "One or more conductor terminations are loose or of high resistance":
        "Poor terminations add resistance to the loop, so they show up as end-to-end readings above the expected value, not below it.",
      "Several socket-outlets have been wired as spurs from the ring":
        "Spurs hang off the ring and lie outside the end-to-end loop, so they do not alter step 1; they appear as higher readings at steps 2 and 3.",
      "The cpc has a smaller csa than the line and neutral conductors":
        "A reduced cpc makes r2 proportionally higher than r1 and rn (about 1.67 times for 2.5/1.5 mm² cable); it does not pull readings below expectation.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/qxhf2est/guidance-note-3-2022-ninth-edition-first-printing-errata-november-2024.pdf",
      "https://electrical.theiet.org/wiring-matters/years/2022/89-march-2022/resistance-readings-for-step-3-of-the-ring-final-circuit-test/",
    ],
  },
  {
    prompt:
      "Bonding clamps on two metallic service pipes have been built in and cannot be seen, so the inspector confirms the bonding connection by testing between the two pipes with a low-resistance ohmmeter. The expected resistance of the bonding conductors, including contact resistances, is only a few hundredths of an ohm. What guideline acceptable reading does Guidance Note 3 give?",
    options: [
      "Not exceeding 0.01 Ω",
      "Not exceeding 0.05 Ω",
      "Not exceeding 0.1 Ω",
      "Not exceeding 0.5 Ω",
    ],
    answer:
      "Not exceeding 0.1 Ω",
    rationales: {
      "Not exceeding 0.01 Ω":
        "0.01 Ω is only the smallest step a digital low-resistance ohmmeter is required to resolve, so a ceiling this tight could not be verified reliably; the guideline value is ten times this.",
      "Not exceeding 0.05 Ω":
        "0.05 Ω is the approximate resistance of 15 m of 6 mm² or 25 m of 10 mm² copper, and the value that readings across a clamp joint should approach; the guideline ceiling is higher.",
      "Not exceeding 0.5 Ω":
        "0.5 Ω would be many times the resistance expected of a sound bonding conductor and could hide a poor or corroded connection.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/qxhf2est/guidance-note-3-2022-ninth-edition-first-printing-errata-november-2024.pdf",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/earthing-and-bonding-faqs/",
    ],
  },
  {
    prompt:
      "A new radial final circuit supplies an electric shower in a bathroom. Which of the following tests does NOT apply to this circuit?",
    options: [
      "Continuity of ring final circuit conductors",
      "Continuity of protective conductors",
      "Insulation resistance",
      "Polarity",
    ],
    answer:
      "Continuity of ring final circuit conductors",
    rationales: {
      "Continuity of protective conductors":
        "Every circuit protected by ADS needs its cpc proved continuous to each point, and a shower in a bathroom depends heavily on a sound earth path.",
      "Insulation resistance":
        "Insulation resistance must be measured between live conductors and between live conductors and the protective conductor on all new circuits, radial or ring.",
      Polarity:
        "Polarity must be verified on every circuit before connection to the supply, for example confirming that the protective device is in the line conductor.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/qxhf2est/guidance-note-3-2022-ninth-edition-first-printing-errata-november-2024.pdf",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
    ],
  },
  {
    prompt:
      "For a nominal voltage U0 of 230 V, what is the maximum earth fault loop impedance (Zs) that Guidance Note 3 tabulates for a non-delayed 30 mA RCD to BS EN 61008-1?",
    options: [
      "1667 Ω",
      "167 Ω",
      "500 Ω",
      "100 Ω",
    ],
    answer:
      "1667 Ω",
    rationales: {
      "167 Ω":
        "167 Ω is the tabulated limit for a 300 mA RCD, where 50 V divided by 0.3 A gives a value ten times smaller than the 30 mA limit.",
      "500 Ω":
        "500 Ω is the limit for a 100 mA device (50 V ÷ 0.1 A), so it belongs to a less sensitive RCD than the one described.",
      "100 Ω":
        "100 Ω sits in the 500 mA row, the least sensitive RCD in the table and therefore the one with the lowest permitted impedance.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2021/87-september-2021/tt-earthing-considerations/",
      "https://electrical.theiet.org/media/qxhf2est/guidance-note-3-2022-ninth-edition-first-printing-errata-november-2024.pdf",
    ],
  },
  {
    prompt:
      "A stakeless earth electrode tester using two test coils is clamped around the earthing conductor of an installation that has several electrodes. The electrode under test has a resistance of 100 Ω and four other electrodes, effectively in parallel, are 44 Ω each. What will the instrument read?",
    options: [
      "72 Ω",
      "111 Ω",
      "56 Ω",
      "744 Ω",
    ],
    answer:
      "111 Ω",
    rationales: {
      "72 Ω":
        "72 Ω is the average of 100 Ω and 44 Ω; the instrument adds the resistances around the test loop and does not average them.",
      "56 Ω":
        "56 Ω comes from subtracting one 44 Ω electrode from 100 Ω, yet the return path adds to the electrode under test, so the reading can never fall below 100 Ω.",
      "744 Ω":
        "Even with all four 44 Ω electrodes placed in series with the 100 Ω electrode the total would only be 276 Ω, so 744 Ω cannot arise from these values.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/qxhf2est/guidance-note-3-2022-ninth-edition-first-printing-errata-november-2024.pdf",
      "https://electrical.theiet.org/wiring-matters/years/2021/87-september-2021/tt-earthing-considerations/",
    ],
  },
  {
    prompt:
      "Guidance Note 3 describes dedicated earth electrode resistance testers for measuring the earth electrode resistance of a TT installation. Which other instrument does it also accept for this measurement, while recognising that the result may be less accurate?",
    options: [
      "An insulation resistance tester",
      "A low-resistance ohmmeter",
      "An RCD tester",
      "An earth fault loop impedance tester",
    ],
    answer:
      "An earth fault loop impedance tester",
    rationales: {
      "An insulation resistance tester":
        "An insulation resistance tester applies a high DC voltage to measure megohms between conductors and cannot measure the resistance of an electrode to the general mass of Earth.",
      "A low-resistance ohmmeter":
        "A low-resistance ohmmeter checks the continuity of protective conductors on a dead circuit; it has no return path through the soil with which to measure an electrode.",
      "An RCD tester":
        "An RCD tester injects a set residual current and times the disconnection in ms, so it gives no resistance value for the electrode.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/qxhf2est/guidance-note-3-2022-ninth-edition-first-printing-errata-november-2024.pdf",
      "https://electrical.theiet.org/wiring-matters/years/2021/87-september-2021/tt-earthing-considerations/",
    ],
  },
  {
    prompt:
      "A TT installation protected by a non-delayed 30 mA RCD has a measured earth electrode resistance of 250 Ω. What caution does Guidance Note 3 give about a reading of this size?",
    options: [
      "The RCD will no longer disconnect within 300 ms when tested at 1 × IΔn",
      "Values above 200 Ω may not be stable as soil conditions change",
      "The reading is only valid if it was taken with a fall-of-potential tester",
      "A time-delayed (S-type) RCD must replace the 30 mA device above 200 Ω",
    ],
    answer:
      "Values above 200 Ω may not be stable as soil conditions change",
    rationales: {
      "The RCD will no longer disconnect within 300 ms when tested at 1 × IΔn":
        "250 Ω is far below the 1667 Ω maximum tabulated for a 30 mA non-delayed RCD (250 Ω × 0.03 A = 7.5 V against the 50 V limit), and the 300 ms limit at 1 × IΔn belongs to the device; GN3 gives no warning that a reading of this size slows the RCD.",
      "The reading is only valid if it was taken with a fall-of-potential tester":
        "Stakeless testers and earth fault loop impedance testers are also recognised methods, so the validity of the reading does not hinge on using temporary test spikes.",
      "A time-delayed (S-type) RCD must replace the 30 mA device above 200 Ω":
        "A time-delayed RCD is likely to need a lower loop impedance than the tabulated values, so fitting one would do nothing to address a high electrode resistance.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2021/87-september-2021/tt-earthing-considerations/",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/earthing-and-bonding-faqs/",
    ],
  },
  {
    prompt:
      "A non-delay 100 mA RCD to BS EN 61008 provides fault protection for a TT installation. With the instrument set to Type AC and a test current of 50 mA applied, the RCD trips in 180 ms. How should this result be judged?",
    options: [
      "Satisfactory, because the RCD operated within 300 ms",
      "Satisfactory, because the RCD operated within 200 ms",
      "Unsatisfactory, because it should have operated within 40 ms",
      "Unsatisfactory, because it should not trip at ½ × IΔn",
    ],
    answer:
      "Unsatisfactory, because it should not trip at ½ × IΔn",
    rationales: {
      "Satisfactory, because the RCD operated within 300 ms":
        "300 ms is the maximum expected tripping time for a non-delay RCD at the full 1 × IΔn test current, which here would be 100 mA and not 50 mA.",
      "Satisfactory, because the RCD operated within 200 ms":
        "200 ms is the 1 × IΔn limit for non-delay RCDs to the older BS 4293 and has no bearing on a test at half the rated residual operating current.",
      "Unsatisfactory, because it should have operated within 40 ms":
        "40 ms relates to an optional 5 × IΔn test; at half the rated residual operating current no operating time applies, as the device should stay closed.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2022/91-july-2022/changes-to-rcd-testing-in-bs-76712018plusa22022/",
    ],
  },
  {
    prompt:
      "An S-type (time-delayed) RCD to BS EN 61008 is tested at 1 × IΔn with the instrument set to Type AC. What is the maximum expected tripping time?",
    options: [
      "150 ms",
      "200 ms",
      "300 ms",
      "500 ms",
    ],
    answer:
      "500 ms",
    rationales: {
      "150 ms":
        "150 ms is the S-delay value for an optional 5 × IΔn test, which uses a much larger test current than the one applied here.",
      "200 ms":
        "200 ms applies to non-delay RCDs made to BS 4293 or BS 7288:1990, which are older product standards and not S-type devices.",
      "300 ms":
        "300 ms is the 1 × IΔn limit for a non-delay RCD to a harmonised standard; an S-type device is allowed a longer time.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2022/91-july-2022/changes-to-rcd-testing-in-bs-76712018plusa22022/",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/webinar-questions-and-answers/rcds-selection-types-and-testing-webinar/",
    ],
  },
  {
    prompt:
      "During a 1 × IΔn Type AC test, an RCD trips in 24 ms with the test started at 0° and in 31 ms with the test started at 180°. Which operating time should be recorded on the Schedule of Test Results?",
    options: [
      "24 ms",
      "27.5 ms",
      "31 ms",
      "55 ms",
    ],
    answer:
      "31 ms",
    rationales: {
      "24 ms":
        "24 ms is the shorter of the two readings; recording it would hide the slower response the RCD showed on the other half-cycle.",
      "27.5 ms":
        "27.5 ms is the average of the two readings, but the results are not averaged before being entered on the schedule.",
      "55 ms":
        "55 ms is the two readings added together, which does not represent any operating time the RCD actually achieved.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2022/91-july-2022/changes-to-rcd-testing-in-bs-76712018plusa22022/",
    ],
  },
  {
    prompt:
      "What is the status of the 5 × IΔn test on a 30 mA RCD under BS 7671:2018+A2:2022, as explained in Guidance Note 3?",
    options: [
      "It is required wherever the RCD provides additional protection",
      "It is an optional test, intended for fault-finding and similar purposes",
      "It is required only where the RCD provides fault protection in a TT system",
      "It replaces the 1 × IΔn test for RCDs rated at 30 mA or less",
    ],
    answer:
      "It is an optional test, intended for fault-finding and similar purposes",
    rationales: {
      "It is required wherever the RCD provides additional protection":
        "Additional protection is verified by the 1 × IΔn test under Regulation 643.8; the higher-current test is not demanded for that purpose.",
      "It is required only where the RCD provides fault protection in a TT system":
        "Fault protection by an RCD is confirmed under Regulation 643.7 using the 1 × IΔn test, whatever the system earthing arrangement.",
      "It replaces the 1 × IΔn test for RCDs rated at 30 mA or less":
        "The 1 × IΔn test remains the required test for every rating; the 5 × IΔn test only supplements it when the inspector chooses to carry it out.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2022/91-july-2022/changes-to-rcd-testing-in-bs-76712018plusa22022/",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/webinar-questions-and-answers/rcds-selection-types-and-testing-webinar/",
    ],
  },
  {
    prompt:
      "According to Guidance Note 3, how should an installation be arranged when the external earth fault loop impedance (Ze) is measured at the origin with an earth fault loop impedance tester?",
    options: [
      "Main switch closed, with the means of earthing left connected to the MET",
      "Main switch open, with the means of earthing left connected to the MET",
      "Main switch open, with the means of earthing disconnected from the MET",
      "Main switch closed and circuits left in service, with the means of earthing disconnected from the MET",
    ],
    answer:
      "Main switch open, with the means of earthing disconnected from the MET",
    rationales: {
      "Main switch closed, with the means of earthing left connected to the MET":
        "These are the conditions for a Zs test on a live installation, where parallel paths through bonding remain in circuit and would understate the external value.",
      "Main switch open, with the means of earthing left connected to the MET":
        "Opening the main switch alone is not enough; with the earthing conductor still on the MET, bonded pipework provides parallel paths that reduce the reading.",
      "Main switch closed and circuits left in service, with the means of earthing disconnected from the MET":
        "Removing the means of earthing while the installation is still energised would leave circuits in service without fault protection, creating a serious shock risk.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/qxhf2est/guidance-note-3-2022-ninth-edition-first-printing-errata-november-2024.pdf",
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
    ],
  },
  {
    prompt:
      "Which of the following tests is NOT carried out during the initial verification of a single-phase TT installation?",
    options: [
      "Check of phase sequence",
      "Earth electrode resistance",
      "Operation of RCDs",
      "Earth fault loop impedance",
    ],
    answer:
      "Check of phase sequence",
    rationales: {
      "Earth electrode resistance":
        "A TT installation relies on its own earth electrode, so the electrode resistance has to be measured to confirm that RA × IΔn does not exceed 50 V.",
      "Operation of RCDs":
        "Where RCDs are relied on for disconnection in a TT system, as they usually are, their operating times must be tested at 1 × IΔn to confirm that the disconnection times of Chapter 41 can be met.",
      "Earth fault loop impedance":
        "Earth fault loop impedance is verified in a TT system to confirm that the disconnection times of Chapter 41 of BS 7671 can be achieved.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/qxhf2est/guidance-note-3-2022-ninth-edition-first-printing-errata-november-2024.pdf",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/faqs/inspection-and-testing-faqs/",
    ],
  },
  {
    prompt:
      "A dwelling has a consumer unit to BS EN 61439-3 and the distributor has declared a maximum prospective fault current of 16 kA. What does Guidance Note 3 say about determining the prospective fault current at the origin?",
    options: [
      "It is not necessary to measure or calculate it at the origin",
      "It must be measured between live conductors at the origin with the supply on",
      "It need not be measured, but it must be calculated from the measured value of Ze",
      "It must be measured at the furthest point of each final circuit instead",
    ],
    answer:
      "It is not necessary to measure or calculate it at the origin",
    rationales: {
      "It must be measured between live conductors at the origin with the supply on":
        "Direct measurement between live conductors is a recognised method, but in these circumstances it is not needed, and alternatives to live measurement are recommended where possible.",
      "It need not be measured, but it must be calculated from the measured value of Ze":
        "Calculation is a recognised way of determining fault current, yet with a declared 16 kA and a consumer unit carrying that conditional rating, neither measuring nor calculating is called for.",
      "It must be measured at the furthest point of each final circuit instead":
        "Fault current falls with distance from the origin, so the furthest point of a circuit gives the lowest value and is not where breaking capacity is checked.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/1405/consumer-units.pdf",
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
    ],
  },
  {
    prompt:
      "On a three-phase installation, an instrument rated for the line-to-line voltage measures a line-to-line fault current of 8.7 kA. Using the method given in Guidance Note 3, what is the more accurate value of three-phase prospective fault current?",
    options: [
      "7.6 kA",
      "10 kA",
      "15 kA",
      "17.4 kA",
    ],
    answer:
      "10 kA",
    rationales: {
      "7.6 kA":
        "7.6 kA comes from multiplying by 0.87; the measurement is divided by 0.87, so the three-phase value must come out larger than the reading.",
      "15 kA":
        "15 kA results from multiplying by 1.73, a factor that relates line and phase voltages and is not the conversion given for this measurement.",
      "17.4 kA":
        "17.4 kA doubles the reading; doubling is the rule of thumb applied to a single-phase line-to-neutral value, not to a line-to-line one.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/qxhf2est/guidance-note-3-2022-ninth-edition-first-printing-errata-november-2024.pdf",
    ],
  },
  {
    prompt:
      "An electrician replaces the consumer unit in a dwelling. All of the existing final circuits are reconnected and no new circuit is installed. Which form must be issued for this work?",
    options: [
      "A Minor Electrical Installation Works Certificate, because no new circuit was added",
      "A Schedule of Test Results alone, because the circuits themselves are unchanged",
      "One Minor Electrical Installation Works Certificate for each circuit reconnected",
      "An Electrical Installation Certificate with its accompanying schedules",
    ],
    answer:
      "An Electrical Installation Certificate with its accompanying schedules",
    rationales: {
      "A Minor Electrical Installation Works Certificate, because no new circuit was added":
        "Having no new circuit is the usual test for the minor works form, but replacement of a consumer unit is a stated exception to that test.",
      "A Schedule of Test Results alone, because the circuits themselves are unchanged":
        "A Schedule of Test Results only accompanies a certificate; issued alone it carries no signed declaration covering design, construction, inspection and testing.",
      "One Minor Electrical Installation Works Certificate for each circuit reconnected":
        "Splitting the job into one minor works form per circuit does not help, since the work being certified is still a consumer unit replacement, which lies outside that form's scope.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/tqxkkscw/bs7671_eic_a4.pdf",
      "https://electrical.theiet.org/media/f0hlqxq1/bs7671_meiwc_a4.pdf",
    ],
  },
  {
    prompt:
      "A sole trader is personally responsible for the design, construction, and inspection and testing of a new installation. Which arrangement for certifying the work is correct?",
    options: [
      "A single-signature declaration may be used in place of the multiple-signature section",
      "A second skilled person must countersign the inspection and testing section",
      "The design section is left blank and only construction and testing are signed for",
      "A Minor Electrical Installation Works Certificate is issued, as it needs one signature",
    ],
    answer:
      "A single-signature declaration may be used in place of the multiple-signature section",
    rationales: {
      "A second skilled person must countersign the inspection and testing section":
        "No independent countersignature is called for; Regulation 644.5 asks for a skilled person responsible for each facet to sign, and here that is one individual.",
      "The design section is left blank and only construction and testing are signed for":
        "Design responsibility cannot be left undeclared, since every facet of the work has to be signed for by the person who is responsible for it.",
      "A Minor Electrical Installation Works Certificate is issued, as it needs one signature":
        "The minor works form is limited to work that does not include a new circuit, so it cannot certify a complete new installation whoever signs it.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/model-forms/",
      "https://electrical.theiet.org/media/tqxkkscw/bs7671_eic_a4.pdf",
    ],
  },
  {
    prompt:
      "While installing a new circuit in a dwelling, an electrician notices a defect in older wiring elsewhere that may give rise to danger but does not affect the safety of the new work. Where must this be recorded?",
    options: [
      "Under the details of departures from BS 7671 in the design declaration",
      "In the remarks column of the Schedule of Test Results for the new circuit",
      "In the 'Comments on existing installation' section of the certificate",
      "Nowhere, because unaffected parts of the existing installation need no inspection",
    ],
    answer:
      "In the 'Comments on existing installation' section of the certificate",
    rationales: {
      "Under the details of departures from BS 7671 in the design declaration":
        "The departures entry forms part of the designer's declaration about the new work itself, so it is not the place to log faults found in older wiring.",
      "In the remarks column of the Schedule of Test Results for the new circuit":
        "The Schedule of Test Results holds the measured values for the work done, not observations about unrelated parts of the existing installation.",
      "Nowhere, because unaffected parts of the existing installation need no inspection":
        "Unaffected parts carry no obligation to be inspected and tested, but a dangerous defect that is actually observed during the work still has to be noted.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/tqxkkscw/bs7671_eic_a4.pdf",
      "https://electrical.theiet.org/media/f0hlqxq1/bs7671_meiwc_a4.pdf",
    ],
  },
  {
    prompt:
      "As defined in Part 2 of BS 7671, what is a 'departure'?",
    options: [
      "A deliberate decision not to comply fully, which the designer declares to be no less safe",
      "A non-conformity with BS 7671 that may give rise to danger in the installation",
      "An unintended failure to meet a requirement of a standard, found during inspection",
      "An omission found by the inspector that the installer must make good before certification",
    ],
    answer:
      "A deliberate decision not to comply fully, which the designer declares to be no less safe",
    rationales: {
      "A non-conformity with BS 7671 that may give rise to danger in the installation":
        "A non-conformity that may give rise to danger is how a non-compliance is defined, and nobody declares a non-compliance to be acceptably safe.",
      "An unintended failure to meet a requirement of a standard, found during inspection":
        "Failing to meet a requirement of a standard is simply a non-conformity, and nothing about it is intended or declared by the designer.",
      "An omission found by the inspector that the installer must make good before certification":
        "Omissions revealed at inspection are faults for the installer to correct under Regulation 644.1.1, and they are never accepted design decisions.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/media/qxhf2est/guidance-note-3-2022-ninth-edition-first-printing-errata-november-2024.pdf",
      "https://electrical.theiet.org/bs-7671-18th-edition-wiring-regulations/model-forms/",
    ],
  },
  {
    prompt:
      "A new single-phase installation is ready for initial verification. Five of the tests to be carried out are numbered as follows: 1. earth fault loop impedance; 2. functional testing; 3. insulation resistance; 4. operation of RCDs providing additional protection; 5. polarity. In which order should these tests be carried out?",
    options: [
      "5, 3, 1, 4, 2",
      "3, 5, 4, 1, 2",
      "3, 5, 1, 4, 2",
      "3, 1, 5, 4, 2",
    ],
    answer:
      "3, 5, 1, 4, 2",
    rationales: {
      "5, 3, 1, 4, 2":
        "Putting polarity ahead of insulation resistance swaps two dead tests; in the 643.1 sequence insulation resistance (643.3) is completed before polarity (643.6).",
      "3, 5, 4, 1, 2":
        "Testing the RCDs before Zs is measured means injecting earth fault current through an earth path that has not yet been proven, which could leave exposed metalwork at a dangerous voltage.",
      "3, 1, 5, 4, 2":
        "A Zs measurement with a loop tester needs the supply on, so placing it before polarity would mean energising circuits whose single-pole devices might be connected in the neutral.",
    },
    sourceUrls: [
      "https://electrical.theiet.org/wiring-matters/years/2025/105-may-2025/minimizing-unnecessary-live-testing-for-initial-verification/",
      "https://electrical.theiet.org/media/qxhf2est/guidance-note-3-2022-ninth-edition-first-printing-errata-november-2024.pdf",
    ],
  },
] as const;
