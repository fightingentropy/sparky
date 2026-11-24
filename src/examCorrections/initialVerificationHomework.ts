import type { ExamQuestionCorrection } from "./types";

// Real explanations for the imported Initial Verification and Fundamental
// homework papers, which arrived with a generic placeholder. Written and
// checked against IET Guidance Note 3 (9th edition, BS 7671:2018+A2:2022).
export const initialVerificationHomeworkCorrections: readonly ExamQuestionCorrection[] = [
  {
    examId: "initial-verification",
    variantId: "initial-verification-homework",
    questionNumber: 1,
    promptSuffix:
      "Which system has all exposed conductive part of an installation connected to an earth electrode independent of the source of earth?",
    explanation:
      "In a TT arrangement the installation takes its earth from its own electrode, which has no metallic connection to the supplier's earthed point, so earth fault current must return through the general mass of earth. That high-resistance path is why TT installations rely on RCDs and why GN3 describes the means of earthing as an electrode rather than a supplier's earth terminal.",
  },
  {
    examId: "initial-verification",
    variantId: "initial-verification-homework",
    questionNumber: 2,
    promptSuffix:
      "A radial circuit is 45m long and wired in 6/2.5mm squared conductors. What is the expected value of R1 + R2 for this circuit at 20°C?",
    explanation:
      "Table B1 gives 10.49 mΩ/m at 20 °C for a 6 mm² line conductor with a 2.5 mm² cpc (3.08 + 7.41). Multiplying by the run length: 45 m × 10.49 mΩ/m = 472 mΩ, so R1 + R2 is about 0.47 Ω before any temperature correction.",
  },
  {
    examId: "initial-verification",
    variantId: "initial-verification-homework",
    questionNumber: 3,
    promptSuffix:
      "It is required to record the value of prospective fault current of a three phase supply by measurement. An acceptable and cautious way to do this is to measure the single phase value and",
    explanation:
      "Where an instrument cannot measure between line conductors, GN3 allows the balanced three-phase prospective short-circuit current to be estimated as about double the single-phase reading. This rule of thumb deliberately overstates the true figure slightly, so it errs on the side of safety when checking device breaking capacities.",
  },
  {
    examId: "initial-verification",
    variantId: "initial-verification-homework",
    questionNumber: 4,
    promptSuffix:
      "What is the test voltage used during an insulation resistance test of a SELV circuit?",
    explanation:
      "Insulation resistance is always tested with a DC voltage, and Table 2.9 sets 250 V DC for SELV and PELV circuits with a minimum acceptable result of 0.5 MΩ. Table 2.12 repeats this for SELV basic insulation and live-to-Earth tests, rising to 500 V DC only where SELV shares insulation with LV conductors.",
  },
  {
    examId: "initial-verification",
    variantId: "initial-verification-homework",
    questionNumber: 5,
    promptSuffix:
      "When carrying out testing in accordance with IET Guidance Note 3 what action should be taken if unsatisfactory results are obtained?",
    explanation:
      "Regulation 644.1.1 requires defects or omissions found during verification to be put right by the installer and, as necessary, inspected and tested again before the EIC is issued. A certificate for new work confirms compliance, so it cannot be handed over while known failures remain uncorrected.",
  },
  {
    examId: "initial-verification",
    variantId: "initial-verification-homework",
    questionNumber: 6,
    promptSuffix:
      "A ring final circuit is wired in 2.5/1.5mm squared twin and CPC cable. From step 1 of the est, the end-to-end r1 is measured at 0.05 Ohms. What value is the end-to-end r2 expected to be?",
    explanation:
      "Resistance is inversely proportional to cross-sectional area, so the cpc loop reads higher than the line loop by the ratio of line csa to cpc csa. For 2.5/1.5 mm² cable that ratio is 2.5 ÷ 1.5 = 1.67, giving r2 = 1.67 × 0.05 Ω ≈ 0.0835 Ω.",
  },
  {
    examId: "initial-verification",
    variantId: "initial-verification-homework",
    questionNumber: 7,
    promptSuffix:
      "Which documents must accompany an Electrical Installation Certificate?",
    explanation:
      "Regulation 644.3 requires an EIC to be supported by schedules based on the Appendix 6 models: inspections, circuit details and test results. Of the pairs offered, only the circuit details and test results schedules are both genuine supporting schedules, and the certificate itself states it is valid only when accompanied by them.",
  },
  {
    examId: "initial-verification",
    variantId: "initial-verification-homework",
    questionNumber: 8,
    promptSuffix:
      "Circuits operating at different voltage bands within the same enclosure are segregated to",
    explanation:
      "Regulations 132.11 and 515.1 require equipment to be selected and erected so that no harmful influence, such as interference or heat, passes between systems. Segregating Band I and Band II circuits (Regulation 528.1) keeps a fault or insulation failure on the higher-voltage circuit from imposing dangerous voltage on the lower-voltage one.",
  },
  {
    examId: "initial-verification",
    variantId: "initial-verification-homework",
    questionNumber: 9,
    promptSuffix:
      "When checking an instrument for use, which british standard document should be consulted for conformity?",
    explanation:
      "GN3 names the BS EN 61010 series as the basic safety specification that electrical test instruments must meet, so it is the reference when confirming an instrument is fit to use. The BS EN 61557 performance standards themselves require conformity with BS EN 61010, and older instruments may have been built to the now-withdrawn BS 5458.",
  },
  {
    examId: "initial-verification",
    variantId: "initial-verification-homework",
    questionNumber: 10,
    promptSuffix:
      "What is the source to check values of Zs?",
    explanation:
      "Maximum earth fault loop impedance limits come from BS 7671 Tables 41.2 to 41.4 (and 41.5 for RCDs), chosen so the protective device disconnects within the required time. GN3 Appendix A turns those design figures into measured values by dividing by 1.25 for testing at about 10 °C, but the underlying requirement is BS 7671.",
  },
  {
    examId: "initial-verification",
    variantId: "initial-verification-homework",
    questionNumber: 11,
    promptSuffix:
      "What signatories are required to complete an Electrical Installation Certificate of a new build?",
    explanation:
      "The model EIC from Appendix 6 of BS 7671 carries separate declarations for design, construction, and inspection and testing, because each party stays responsible for their own part of the work. Where one person carries out all three roles, a single-signature version of the certificate may be used instead.",
  },
  {
    examId: "initial-verification",
    variantId: "initial-verification-homework",
    questionNumber: 12,
    promptSuffix:
      "Which is not part of the procedure for testing insulation resistance?",
    explanation:
      "Regulation 643.3 requires the protective conductor to stay connected to the earthing arrangement while insulation resistance is measured, so disconnecting it has no place in the method. Testing with it connected proves the insulation against the real cpc or armouring, using a fly-lead to the earthing arrangement where necessary.",
  },
  {
    examId: "initial-verification",
    variantId: "initial-verification-homework",
    questionNumber: 13,
    promptSuffix:
      "A rotating disc type and an indicator lamp type are the main types of which instrument?",
    explanation:
      "GN3 describes phase rotation testers as either a rotating disc type, where the disc turns clockwise or anticlockwise, or an indicator lamp type, where either the L1/L2/L3 or L1/L3/L2 lamp lights. Both confirm the order of a three-phase supply, for example at motor terminals before the load is energised.",
  },
  {
    examId: "initial-verification",
    variantId: "initial-verification-homework",
    questionNumber: 14,
    promptSuffix:
      "Three circuits are tested separately for insulation resistance and the results are 100M Ohms, 50M Ohms, 40M Ohms. What will the overall insulation resistance be if they are tested together?",
    explanation:
      "Circuits tested together present their insulation resistances in parallel, so 1/R = 1/100 + 1/50 + 1/40 = 0.010 + 0.020 + 0.025 = 0.055. Then R = 1/0.055 = 18.18 MΩ, which is lower than the smallest single reading of 40 MΩ, as any parallel combination must be.",
  },
  {
    examId: "initial-verification",
    variantId: "initial-verification-homework",
    questionNumber: 15,
    promptSuffix:
      "On which document is maximum demand recorded?",
    explanation:
      "Maximum demand, in amps, kW or kVA after diversity is allowed for, is one of the installation particulars GN3 lists as required information. The model EIC provides a dedicated 'Maximum demand (load)' box in its particulars of the installation section, alongside means of earthing and supply details.",
  },
  {
    examId: "initial-verification",
    variantId: "initial-verification-homework",
    questionNumber: 16,
    promptSuffix:
      "The purpose of an electrical installation certificate is to ensure that the installation conforms to",
    explanation:
      "Initial verification confirms, by inspection and testing during and after construction, that new work meets the design and construction requirements of BS 7671 so far as reasonably practicable. The EIC is the Appendix 6 model form that records this compliance, signed by the designer, constructor and inspector.",
  },
  {
    examId: "initial-verification",
    variantId: "initial-verification-homework",
    questionNumber: 17,
    promptSuffix:
      "Which of these is not a precaution to take before carrying out an insulation resistance test?",
    explanation:
      "For insulation resistance testing the protective conductor must remain connected to the MET and the means of earthing, so the insulation is proved against the real earthing arrangement. Removing the earthing conductor from the MET belongs to Ze and earth electrode measurements, where parallel earth paths have to be excluded.",
  },
  {
    examId: "initial-verification",
    variantId: "initial-verification-homework",
    questionNumber: 18,
    promptSuffix:
      "During which test will two temporary test spikes be used?",
    explanation:
      "The fall-of-potential method with a dedicated earth tester needs a current spike and a potential spike driven into the ground away from the electrode under test. The current spike is placed at least ten times the electrode's largest dimension away, for example 30 m for a 3 m rod, so the resistance areas do not overlap.",
  },
  {
    examId: "initial-verification",
    variantId: "initial-verification-homework",
    questionNumber: 19,
    promptSuffix:
      "Which of these areas is not classified as a special installation or location in accordance with BS7671?",
    explanation:
      "Part 7 of BS 7671 lists installations and locations that carry extra or modified requirements, such as Section 701 for rooms containing a bath or shower, Section 711 for exhibitions, shows and stands, and Section 753 for floor and ceiling heating. A domestic kitchen has no Part 7 section and is wired to the general requirements of Parts 1 to 6.",
  },
  {
    examId: "initial-verification",
    variantId: "initial-verification-homework",
    questionNumber: 20,
    promptSuffix:
      "The most appropriate human sense for detecting burrs inside a conduit is?",
    explanation:
      "BS 7671 defines inspection as examining an installation using all the senses as appropriate. A burr left at a cut conduit end sits inside the bore where it is hard to see, but running a finger round the opening reveals the sharp edge that could strip cable insulation, which is why conduit ends must be reamed and bushed.",
  },
  {
    examId: "initial-verification",
    variantId: "initial-verification-homework",
    questionNumber: 22,
    promptSuffix:
      "A Primary reason for carrying out safe isolation is to:",
    explanation:
      "Where testing or work can be done dead, the circuit is isolated, locked off and proved dead so nobody can touch live parts. Electric shock and arc burns can kill, so protecting people is the main purpose, and live working is permitted only where working dead is unreasonable.",
  },
  {
    examId: "initial-verification",
    variantId: "initial-verification-homework",
    questionNumber: 23,
    promptSuffix:
      "What is the best action to take if an insulation resistance test fails on an individual radial circuit and a PVC/PVC twin and cpc flat cable has been replaced to remedy the fault?",
    explanation:
      "Fitting a replacement cable is new work, so its routing and terminations must be inspected and every relevant test on that circuit repeated, including cpc continuity, R1 + R2, insulation resistance and polarity. Defects must be made good and then inspected and tested again before certification is issued.",
  },
  {
    examId: "initial-verification",
    variantId: "initial-verification-homework",
    questionNumber: 25,
    promptSuffix:
      "Which Provision of the Electricity at Work Regulations relates to safely inspecting electrical systems?",
    explanation:
      "Regulation 16 of the Electricity at Work Regulations 1989 requires anyone doing work that needs technical knowledge or experience to prevent danger or injury to possess it, or to be suitably supervised. Inspection and testing exposes the inspector to live parts and test voltages, so competence is the provision governing doing it safely.",
  },
  {
    examId: "initial-verification",
    variantId: "initial-verification-homework",
    questionNumber: 26,
    promptSuffix:
      "A 3 phase distribution board runs a number of 3 phase motors. A replacement distribution board is fitted and the phase sequence has been wired differently to the original distribution board. What will happen if the installer tries to run one of the 3 phase motors?",
    explanation:
      "A three-phase induction motor turns in the direction set by the order in which L1, L2 and L3 peak. Interchanging any two line conductors in the new board reverses the rotating magnetic field, so the motor runs backwards, which is why phase rotation should be checked near the load before it is energized.",
  },
  {
    examId: "initial-verification",
    variantId: "initial-verification-homework",
    questionNumber: 27,
    promptSuffix:
      "When carrying out electrical work, what is the main safety implication of failing to carry out isolation?",
    explanation:
      "Isolation makes equipment dead and secures it so it cannot be switched back on while work is under way. If it is skipped, conductors assumed to be dead may still be energised, exposing the worker and anyone nearby to electric shock or burns. GN3 expects any part that does not need to be live for testing to be made dead and safely isolated first.",
  },
  {
    examId: "initial-verification",
    variantId: "initial-verification-homework",
    questionNumber: 28,
    promptSuffix:
      "Who should retain the original copy of an Electrical Installation Certificate?",
    explanation:
      "Regulation 644.4 requires the original certificate to be issued to the client who commissioned the work. That person keeps it safe and shows it to anyone who later inspects or works on the installation, while the issuer keeps only a duplicate for their own records.",
  },
  {
    examId: "initial-verification",
    variantId: "initial-verification-homework",
    questionNumber: 29,
    promptSuffix:
      "Which of the following cannot be used for determining or checking prospective fault current?",
    explanation:
      "Regulation 643.7.3.201 requires prospective fault current to be found at every relevant point. GN3 recognises three routes for this: calculation, enquiry to the distributor, or direct measurement with an instrument. Substituting a value has no recognised basis, because a figure borrowed from somewhere else does not reflect the impedance at that particular point.",
  },
  {
    examId: "initial-verification",
    variantId: "initial-verification-homework",
    questionNumber: 30,
    promptSuffix:
      "When two conductors of different resistances are connected in parallel, the resulting resistance will be",
    explanation:
      "Each parallel path gives the current another route, so the combined value follows 1/R = 1/R1 + 1/R2 and always falls below the smaller resistance. For example, 2 Ω and 3 Ω give 1/R = 0.5 + 0.333 = 0.833, so R = 1.2 Ω, which is less than 2 Ω. GN3 shows the same effect, with four 40 Ω electrodes in parallel combining to 10 Ω.",
  },
  {
    examId: "initial-verification",
    variantId: "initial-verification-homework",
    questionNumber: 31,
    promptSuffix:
      "Fault protection is given by?",
    explanation:
      "Fault protection prevents shock when an exposed-conductive-part becomes live because of a fault. In ADS it is provided by protective earthing, protective bonding and automatic disconnection, so an earthing (protective) conductor is part of that provision. The other three measures listed only stop contact with parts that are live in normal service.",
  },
  {
    examId: "initial-verification",
    variantId: "initial-verification-homework",
    questionNumber: 32,
    promptSuffix:
      "The test button on an RCD is pressed regularly to check it",
    explanation:
      "The integral 'T' button creates an imbalance inside the energised RCD and proves only that its tripping mechanism works. It does not check sensitivity, trip time, the earthing or the cpcs, so measured tests with an RCD instrument are still needed. BS 7671 recommends pressing the button at least every six months.",
  },
  {
    examId: "initial-verification",
    variantId: "initial-verification-homework",
    questionNumber: 33,
    promptSuffix:
      "Which of the following confirms so far as is reasonably practicable, that the requirement of the Regulations have been met?",
    explanation:
      "Initial verification is carried out on a new installation before it is put into service. Inspection and testing during construction and on completion confirm, as far as reasonably practicable, that the design and construction meet BS 7671. It is the only process listed whose purpose is to prove compliance in that way.",
  },
  {
    examId: "initial-verification",
    variantId: "initial-verification-homework",
    questionNumber: 34,
    promptSuffix:
      "What is the minimum acceptable value of insulation resistance for the SELV circuit?",
    explanation:
      "SELV circuits are tested at 250 V DC because they operate at extra-low voltage. GN3 Table 2.12 sets a 0.5 MΩ minimum both between SELV live conductors and other circuits and between SELV live parts and Earth. The limit rises to 1 MΩ at 500 V only where SELV shares a multicore cable with LV conductors.",
  },
  {
    examId: "initial-verification",
    variantId: "initial-verification-homework",
    questionNumber: 35,
    promptSuffix:
      "Why is it necessary to verify the continuity of circuit protective conductors?",
    explanation:
      "Regulation 643.2.1 calls for a continuity check on every protective conductor: the earthing conductor, each circuit cpc and all main and supplementary bonding. Measuring with a low-resistance ohmmeter shows each conductor is intact and properly terminated, so fault current has a dependable path back to the MET, and test method 1 also yields R1 + R2 for checking Zs.",
  },
  {
    examId: "initial-verification",
    variantId: "initial-verification-homework",
    questionNumber: 36,
    promptSuffix:
      "After securing an isolation on a piece of equipment and placing warning notices, what will the installer do next?",
    explanation:
      "Locking off and posting a notice do not by themselves show that the conductors are dead: the wrong device may have been opened, or another supply may still feed the equipment. Safe isolation practice referred to in GN3 Section 1 (GS38 and Best Practice Guide 2) therefore requires testing at the point of work with an approved voltage indicator, proved on a known source before and after.",
  },
  {
    examId: "initial-verification",
    variantId: "initial-verification-homework",
    questionNumber: 37,
    promptSuffix:
      "An RCD installed for additional protection is to be tested for functionality. What test current is applied and what disconnection time is required in order to meet the requirements of BS 7671?",
    explanation:
      "Note 4 to Table 2.17a in Guidance Note 3 links the 1 × IΔn test to Regulation 643.8 where an RCD provides additional protection. For a 30 mA non-delay RCD to a harmonized standard, 30 mA is applied and the device must trip within 300 ms, with the longer of the 0° and 180° times recorded on the Schedule of Test Results.",
  },
  {
    examId: "initial-verification",
    variantId: "initial-verification-homework",
    questionNumber: 38,
    promptSuffix:
      "What other information is usually stated on a circuit breaker in addition to its rated current (In)?",
    explanation:
      "BS EN 60898 and BS EN 61009 define two short-circuit ratings, but only Icn, the rated short-circuit capacity, is marked on the breaker, shown in a rectangle (for example 6000). Inspectors compare it with the prospective fault current at the device, which in most cases should stay below that rating.",
  },
  {
    examId: "initial-verification",
    variantId: "initial-verification-homework",
    questionNumber: 39,
    promptSuffix:
      "When inspecting equipment installed in a bathroom, the minimum IP code allowed in zones 1 and 2 is",
    explanation:
      "BS 7671 Regulation 701.512.2 sets the minimum ingress protection for equipment in a bath or shower location by zone. In zones 1 and 2 the second characteristic numeral must be at least 4, protection against water splashed from any direction, giving IPX4; the X means no particular rating for solid objects is demanded.",
  },
  {
    examId: "initial-verification",
    variantId: "initial-verification-homework",
    questionNumber: 40,
    promptSuffix:
      "Which component will not require functional testing during the electrical testing process?",
    explanation:
      "Regulation 643.10 asks for switchgear, controls and interlocks forming part of the electrical installation to be operated to show they work and are properly installed. A gas boiler is a gas appliance whose operation is commissioned by its own installer, so the electrical inspector checks the fused spur feeding it, not the boiler itself.",
  },
  {
    examId: "initial-verification",
    variantId: "initial-verification-homework",
    questionNumber: 41,
    promptSuffix:
      "A metallic test finger is used to test an enclosure to?",
    explanation:
      "The jointed metallic test finger represents a person's finger, so it checks the finger-safe degree of protection IPXXB, which GN3 and Regulation 416.2 treat alongside IP2X as the minimum for barriers and enclosures. If the finger cannot touch live parts through openings, the enclosure meets IP2X/IPXXB.",
  },
  {
    examId: "initial-verification",
    variantId: "initial-verification-homework",
    questionNumber: 43,
    promptSuffix:
      "Calculate the earth fault loop impedance ZS where Ze = 0.2, R1 = 0.5, R2=0.6",
    explanation:
      "The earth fault loop is a series path, so its resistances add: Zs = Ze + (R1 + R2). Here R1 + R2 = 0.5 + 0.6 = 1.1 Ω, and adding Ze gives 0.2 + 1.1 = 1.3 Ω.",
  },
  {
    examId: "initial-verification",
    variantId: "fundamental-inspection-testing-homework",
    questionNumber: 1,
    promptSuffix:
      "The breaking capacity of a protective device must:",
    explanation:
      "A protective device has to interrupt the largest current that could flow where it is installed without being damaged. Regulation 434.5.1 requires its breaking capacity to be not less than the prospective fault current, which is the greater of the prospective short-circuit current and the prospective earth fault current, so the device rating must sit above that highest figure.",
  },
  {
    examId: "initial-verification",
    variantId: "fundamental-inspection-testing-homework",
    questionNumber: 2,
    promptSuffix:
      "Following a test of earth fault loop impedance, the results are compared to the values given in BS7671. Which of the following statements is true?",
    explanation:
      "Tabulated maximum Zs values in BS 7671 are design figures for conductors at full operating temperature, whereas tests are made on cool conductors. Applying the 0.8 factor (Appendix A2) allows for the resistance rise under load, so a measured reading must be no more than 80 % of the tabulated value; for example 0.8 × 1.37 Ω ≈ 1.1 Ω for a 32 A Type B circuit-breaker.",
  },
  {
    examId: "initial-verification",
    variantId: "fundamental-inspection-testing-homework",
    questionNumber: 3,
    promptSuffix:
      "The overall condition of an installation during a periodic inspection and test could be recorded as satisfactory if:",
    explanation:
      "An EICR overall assessment must be recorded as unsatisfactory whenever any observation carries code C1, C2 or FI. Code C3 means improvement is recommended but no danger or potential danger has been found, so an installation whose only observation is a C3 can still be reported as satisfactory.",
  },
  {
    examId: "initial-verification",
    variantId: "fundamental-inspection-testing-homework",
    questionNumber: 4,
    promptSuffix:
      "An insulation resistance test is conducted on an insulation to ensure that;",
    explanation:
      "The tester applies a DC voltage between the live conductors themselves and between them and the protective conductor, which is kept connected to the earthing arrangement. A high reading in MΩ confirms the insulation is undamaged and that no conductor is short-circuited to another or to the protective conductor. Lamps, capacitors and voltage-sensitive equipment are disconnected beforehand so they neither distort the reading nor suffer damage from the test voltage.",
  },
  {
    examId: "initial-verification",
    variantId: "fundamental-inspection-testing-homework",
    questionNumber: 5,
    promptSuffix:
      "When measuring the external earth fault loop impedance (Ze) the:",
    explanation:
      "Ze is the loop impedance external to the installation, measured at the origin between the supply line conductor and the means of earthing. The main switch is opened (or all circuits isolated) and the earthing conductor is removed from the MET so parallel paths through bonding and cpcs cannot lower the reading; it must be reconnected before the supply is restored.",
  },
  {
    examId: "initial-verification",
    variantId: "fundamental-inspection-testing-homework",
    questionNumber: 6,
    promptSuffix:
      "Which of the following is carried out first during in-service inspection and testing?",
    explanation:
      "Before any enclosure is opened, cover removed or instrument connected, the inspector carries out a visual inspection to confirm the installation can be tested without endangering people, livestock or property. It also reveals obvious damage or defects that would make later testing unsafe or pointless, so dead tests such as continuity follow only after this check.",
  },
  {
    examId: "initial-verification",
    variantId: "fundamental-inspection-testing-homework",
    questionNumber: 7,
    promptSuffix:
      "The items that may be checked during an inspection of a standard 13A socket outlet are:",
    explanation:
      "At a 13 A socket-outlet the inspector checks that terminals are tight with all strands contained, that a cpc is present and terminated at the earth terminal, and that live parts are insulated with no bare cores exposed outside the enclosure. These correspond to the general accessory checks on terminations, earthing and basic protection.",
  },
  {
    examId: "initial-verification",
    variantId: "fundamental-inspection-testing-homework",
    questionNumber: 8,
    promptSuffix:
      "Before measurement, using a low resistance ohmmeter, the leads resistance should be:",
    explanation:
      "Test leads add their own resistance, which can be comparable to the small values measured during continuity tests. Either the instrument's nulling feature removes it, or the lead resistance is measured first and deducted; for example, a 0.52 Ω reading with 0.12 Ω leads gives 0.52 − 0.12 = 0.40 Ω for the circuit.",
  },
  {
    examId: "initial-verification",
    variantId: "fundamental-inspection-testing-homework",
    questionNumber: 9,
    promptSuffix:
      "Earth fault loop impedances are measured / calculated to ensure that:",
    explanation:
      "The earth fault loop runs through the line conductor, the cpc, the earthing arrangement and the supply transformer, so its impedance sets how much fault current will flow. Comparing measured or calculated Zs (Ze + R1 + R2) with the tabulated maxima confirms that current is large enough for the overcurrent device or RCD to disconnect within the Chapter 41 times.",
  },
  {
    examId: "initial-verification",
    variantId: "fundamental-inspection-testing-homework",
    questionNumber: 10,
    promptSuffix:
      "Approved Document B:",
    explanation:
      "Approved Document B deals with fire safety under the Building Regulations for England, which includes giving occupants early warning of a fire. Its dwellings volume describes where smoke alarms and heat alarms should be positioned, for example in circulation spaces on each storey, with the system grade and category taken from BS 5839-6.",
  },
  {
    examId: "initial-verification",
    variantId: "fundamental-inspection-testing-homework",
    questionNumber: 11,
    promptSuffix:
      "The result and extent of a periodic inspection and test should be recorded and given to the",
    explanation:
      "A periodic inspection produces an EICR, together with its inspection schedule, circuit details and test results, and Regulation 653.1 requires this package to be handed to whoever commissioned the inspection. Where that client is not the user, they should be advised to pass a copy on to the occupier or duty holder.",
  },
  {
    examId: "initial-verification",
    variantId: "fundamental-inspection-testing-homework",
    questionNumber: 12,
    promptSuffix:
      "A two way lighting circuit would be required to have strappers identified:",
    explanation:
      "Strappers link the two switches and carry the switched line supply, so they are line conductors whichever position the switches are in. In three-core cable the grey and black cores used as strappers are therefore overmarked brown or L at every termination, in line with Regulation 514.3.2.",
  },
  {
    examId: "initial-verification",
    variantId: "fundamental-inspection-testing-homework",
    questionNumber: 14,
    promptSuffix:
      "Transformers for ELV lighting circuits can cause inrush currents that will operate a type B circuit breaker. This may be overcome by:",
    explanation:
      "A Type B circuit-breaker trips instantaneously at 3 to 5 times In, a level that a transformer's switch-on surge can reach, whereas a Type C device needs 5 to 10 times In and so rides through the inrush at the same rating. Its maximum Zs is roughly half, for example 2.92 Ω against 5.83 Ω at 6 A, so the loop impedance must be rechecked.",
  },
  {
    examId: "initial-verification",
    variantId: "fundamental-inspection-testing-homework",
    questionNumber: 15,
    promptSuffix:
      "Approved Document M gives guidance on the accessibility of switches and sockets in new dwellings and other buildings. In which part of buildings does this guidance apply?",
    explanation:
      "Approved Document M aims to make controls usable by people with limited reach, and for new dwellings it applies to switches and socket-outlets serving habitable rooms. These should normally sit between 450 mm and 1200 mm above finished floor level, a point GN3 asks inspectors to check alongside BS 8300.",
  },
  {
    examId: "initial-verification",
    variantId: "fundamental-inspection-testing-homework",
    questionNumber: 16,
    promptSuffix:
      "The requirements for overload protection are fulfilled when",
    explanation:
      "Regulation 433.1.1 of BS 7671 requires Ib ≤ In ≤ Iz: the design current must not exceed the device rating, which must not exceed the cable's current-carrying capacity. Here 10 A ≤ 15 A ≤ 18 A satisfies both inequalities, and a circuit-breaker or BS 88 fuse then also meets I2 ≤ 1.45 Iz.",
  },
  {
    examId: "initial-verification",
    variantId: "fundamental-inspection-testing-homework",
    questionNumber: 17,
    promptSuffix:
      "A flat twin cable is to be buried 20mm into a living room wall without mechanical protection, it should be:",
    explanation:
      "Flat twin and earth has no earthed metallic covering, and at 20 mm it lies within 50 mm of the wall surface, so Regulation 522.6.202 applies. Without mechanical protection against nails and screws, the cable must follow a prescribed zone and also be protected by an RCD with IΔn not exceeding 30 mA; neither measure alone suffices.",
  },
  {
    examId: "initial-verification",
    variantId: "fundamental-inspection-testing-homework",
    questionNumber: 18,
    promptSuffix:
      "The effect thermal insulation has on a cable is to:",
    explanation:
      "Thermal insulation wrapped around a cable stops the heat produced by the load current from escaping, so the conductor reaches its maximum permitted operating temperature at a lower current. BS 7671 (Regulation 523.9 and Appendix 4) therefore applies a rating factor, as low as 0.5 where a cable is totally surrounded for more than 0.5 m, which cuts the current the cable may safely carry.",
  },
  {
    examId: "initial-verification",
    variantId: "fundamental-inspection-testing-homework",
    questionNumber: 20,
    promptSuffix:
      "In a bathroom, where the space below the bathtub or shower basin is accessible without the use of a tool, the space is classed as",
    explanation:
      "BS 7671 Section 701 treats the void beneath a bath or shower basin as Zone 1 unless it can be reached only by using a tool. A panel that simply lifts or clips off gives easy access to a space where water may collect, so any equipment there must meet Zone 1 requirements such as at least IPX4.",
  },
  {
    examId: "initial-verification",
    variantId: "fundamental-inspection-testing-homework",
    questionNumber: 21,
    promptSuffix:
      "The Approved Documents to the Building Regulations give:",
    explanation:
      "The Building Regulations themselves set out the legal requirements, while each Approved Document explains, with examples, one accepted way of meeting them. Following an Approved Document is normally taken as evidence of compliance, but a designer may satisfy the requirements by another route, so the documents are guidance rather than law.",
  },
  {
    examId: "initial-verification",
    variantId: "fundamental-inspection-testing-homework",
    questionNumber: 22,
    promptSuffix:
      "The depth of a notch in a joist should be no more than the joist,",
    explanation:
      "Building Regulations guidance in Approved Document A limits a notch in the top of a floor joist to one-eighth of the joist depth, and 1/8 = 0.125. For a 200 mm deep joist that allows 200 × 0.125 = 25 mm. Notches should also sit between 0.07 and 0.25 of the span from the support so the joist is not weakened.",
  },
  {
    examId: "initial-verification",
    variantId: "fundamental-inspection-testing-homework",
    questionNumber: 23,
    promptSuffix:
      "The document that needs completing after spurring off a ring final circuit is;",
    explanation:
      "A spur taken from an existing ring final circuit adds an outlet to a circuit that already exists rather than creating a new one. Guidance Note 3 limits the Minor Works certificate to exactly this kind of single addition, such as an extra socket-outlet, and reserves the EIC for new circuits or several items of work.",
  },
  {
    examId: "initial-verification",
    variantId: "fundamental-inspection-testing-homework",
    questionNumber: 24,
    promptSuffix:
      "Inspection of new electrical work should be:",
    explanation:
      "Regulation 641.1 calls for initial verification during erection as well as once the work is complete. Inspecting while the work goes in lets the inspector see cable routes, fixings, fire-stopping and joints that plaster, flooring or ceilings will later hide, and the final inspection then confirms the finished installation before it is put into service.",
  },
  {
    examId: "initial-verification",
    variantId: "fundamental-inspection-testing-homework",
    questionNumber: 25,
    promptSuffix:
      "A member of a competent persons scheme is able to carry out:",
    explanation:
      "Members of a government-authorised competent person scheme may self-certify their notifiable work in dwellings. They issue the BS 7671 certificate and notify the job through their scheme, which informs the local authority and arranges a compliance certificate for the occupier, so no building control application or inspection is required.",
  },
  {
    examId: "initial-verification",
    variantId: "fundamental-inspection-testing-homework",
    questionNumber: 26,
    promptSuffix:
      "Residual current devices (RCD) detect",
    explanation:
      "An RCD continuously compares the current in the line and neutral conductors; when some current returns through earth instead, the imbalance exceeds its rated IΔn and the device trips. Overloads and line-to-neutral short circuits draw equal currents out and back, so an RCD cannot sense them and overcurrent protection must come from a fuse, circuit-breaker or RCBO.",
  },
  {
    examId: "initial-verification",
    variantId: "fundamental-inspection-testing-homework",
    questionNumber: 27,
    promptSuffix:
      "A protective conductor connecting the main earthing terminal of an installation to an earth electrode or other means of earthing is",
    explanation:
      "BS 7671 Part 2 gives this name to the conductor running between the main earthing terminal and the means of earthing, such as an earth electrode or the supplier's earth terminal. GN3 treats it as a protective conductor whose continuity must be verified, and it is the conductor disconnected from the MET or electrode before an earth electrode resistance test.",
  },
  {
    examId: "initial-verification",
    variantId: "fundamental-inspection-testing-homework",
    questionNumber: 28,
    promptSuffix:
      "A shower is rated at 8kW and connected to a 230V supply; what is nearest full load current?",
    explanation:
      "For a resistive heating load the current equals power divided by voltage: I = P ÷ V = 8000 W ÷ 230 V ≈ 34.8 A, which rounds to 35 A. Convert kilowatts to watts before dividing so the decimal point lands in the right place.",
  },
  {
    examId: "initial-verification",
    variantId: "fundamental-inspection-testing-homework",
    questionNumber: 29,
    promptSuffix:
      "The correct formula for calculating total earth fault loop impedance is:",
    explanation:
      "The total fault loop is the impedance external to the circuit, Ze, in series with the line conductor and cpc resistance of the circuit measured during continuity testing. Series values add, so Zs = Ze + (R1 + R2); for example 0.35 Ω + 0.50 Ω gives Zs = 0.85 Ω.",
  },
  {
    examId: "initial-verification",
    variantId: "fundamental-inspection-testing-homework",
    questionNumber: 31,
    promptSuffix:
      "The horizontal top surface of a barrier or enclosure which is readily accessible must provide a degree of protection of at least",
    explanation:
      "Barriers and enclosures providing basic protection generally need at least IPXXB or IP2X, but a horizontal top surface that people can readily reach is held to a stricter level. IPXXD or IP4X stops a 1 mm wire or small tool being pushed or dropped through openings on top onto live parts.",
  },
  {
    examId: "initial-verification",
    variantId: "fundamental-inspection-testing-homework",
    questionNumber: 32,
    promptSuffix:
      "An Electrical Installation Condition Report:",
    explanation:
      "A condition report is only treated as complete when its inspection schedule and its schedules of circuit details and test results are attached, because those pages hold the detailed findings behind the summary. GN3 lists them as parts of the EICR handed to the person ordering the periodic inspection.",
  },
  {
    examId: "initial-verification",
    variantId: "fundamental-inspection-testing-homework",
    questionNumber: 33,
    promptSuffix:
      "The following tests are to be conducted on a new installation: (1) Loop impedance, (2) Polarity, (3) Insulation Resistance, (4) Continuity of CPCs. The correct test sequence is:",
    explanation:
      "Dead tests precede live ones: cpc continuity is proved first so later tests can rely on a sound earth path, then insulation resistance, then polarity, and only once the supply is connected is loop impedance measured. That gives 4, 3, 2, 1, matching the GN3 sequence for initial verification.",
  },
  {
    examId: "initial-verification",
    variantId: "fundamental-inspection-testing-homework",
    questionNumber: 34,
    promptSuffix:
      "Low voltage as defined in BS7671 has a value not exceeding",
    explanation:
      "BS 7671 Part 2 defines low voltage as anything above extra-low voltage but not exceeding 1000 V AC or 1500 V DC between conductors. GN3 reflects this band when it describes BS EN 61557 test instruments as covering low voltage systems up to 1000 V a.c. and 1500 V d.c.",
  },
  {
    examId: "initial-verification",
    variantId: "fundamental-inspection-testing-homework",
    questionNumber: 35,
    promptSuffix:
      "Where formal visual inspections are carried out, the results:",
    explanation:
      "GN3 states that inspection and test results are to be recorded, and HSR25 recommends keeping maintenance records throughout the working life of an installation. Logging passes as well as failures lets the condition of equipment and the effectiveness of the maintenance regime be tracked over time.",
  },
  {
    examId: "initial-verification",
    variantId: "fundamental-inspection-testing-homework",
    questionNumber: 36,
    promptSuffix:
      "Overcurrent protection for lighting circuits in domestic installations is",
    explanation:
      "A lighting circuit is sized like any other circuit: the protective device rating In must be no less than the design current Ib and no more than the cable's current-carrying capacity Iz (Ib ≤ In ≤ Iz). A small house may need only 6 A, while a heavier lighting load may justify 10 A or 16 A, so there is no single fixed rating.",
  },
  {
    examId: "initial-verification",
    variantId: "fundamental-inspection-testing-homework",
    questionNumber: 37,
    promptSuffix:
      "One factor which does not influence the initial frequency of inspection and testing of appliances is:",
    explanation:
      "How often an appliance is checked depends on things tied to that item: the environment, who uses it, its construction class, whether it is hand-held, portable, stationary or fixed, and its own test history. The fixed wiring is inspected under BS 7671 on a separate schedule, and its last report tells you nothing about the appliance's condition.",
  },
  {
    examId: "initial-verification",
    variantId: "fundamental-inspection-testing-homework",
    questionNumber: 38,
    promptSuffix:
      "The minimum extraction rate for a bathroom is:",
    explanation:
      "Approved Document F of the Building Regulations sets a minimum intermittent extract rate of 15 l/s for a bathroom with a bath or shower, so moisture is cleared quickly. When fitting a fan, the installer should choose one that achieves at least this rate once duct losses are allowed for.",
  },
  {
    examId: "initial-verification",
    variantId: "fundamental-inspection-testing-homework",
    questionNumber: 39,
    promptSuffix:
      "The prevention of indirect energising of a final circuit intended to be isolated must be achieved by",
    explanation:
      "Regulation 314.4 requires each final circuit to be wired electrically separate from every other, with its own line and neutral from its own way in the board. If a conductor such as a neutral were shared or borrowed, isolating one circuit could leave it energised through another, so GN3 lists separate final circuits, neutrals included, as an inspection item.",
  },
  {
    examId: "initial-verification",
    variantId: "fundamental-inspection-testing-homework",
    questionNumber: 40,
    promptSuffix:
      "Socket outlets should?",
    explanation:
      "BS 7671 does not require a socket-outlet to have a switch, and BS 1363-2 itself covers both switched and unswitched designs. The GN3 socket-outlet checks look at the product standard, shuttering, mounting height, polarity and location, such as 3 m from a bath or shower, not at switching, so whether to fit switched ones is left to the designer and client.",
  },
];
