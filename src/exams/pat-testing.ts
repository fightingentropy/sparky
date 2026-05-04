import type { Exam } from "./types";

export const patTestingExam: Exam = {
  id: "pat-testing",
  title: "PAT Testing (5th Edition COP)",
  subtitle: "Combined topic drill + Access Training homework practice bank",
  description:
    "A focused exam built around the PAT-testing portion of Webinar 4. Covers the IET Code of Practice for In-service Inspection and Testing of Electrical Equipment (5th edition), equipment classes, the formal visual / combined inspection-and-test, pass values, intervals, and the legal driver behind the work. Combines the Access Training PAT homework practice bank with additional tricky questions on detachable leads, surge-protected equipment and Class II metalwork. Added merged appliance inspection, recordkeeping and electrical-science questions that support PAT calculations and appliance assessment.",
  format:
    "Each attempt = 115 multiple-choice questions across all sections. Pass at 70%+. The bank rotates through 5 distinct variants per section so retries draw fresh material.",
  passPercent: 0.7,
  sections: [
    {
      id: "section-1",
      title: "Section 1 — Equipment Classification",
      variants: [
        {
          id: "v1",
          questions: [
            {
              number: 1,
              prompt: "The recognised UK reference document for in-service inspection and testing of portable and movable electrical equipment is:",
              options: {
                A: "BS 7671 Wiring Regulations",
                B: "The IET Code of Practice for In-service Inspection and Testing of Electrical Equipment (5th edition)",
                C: "IET Guidance Note 3",
                D: "PUWER 1998 ACOP"
              },
              answer: "B",
              explanation: "The IET COP is the practical industry guidance — it defines the equipment classes, the inspection categories, the test sequences, the pass criteria and the recommended intervals. BS 7671 only covers the fixed installation up to the socket-outlet."
            },
            {
              number: 2,
              prompt: "A Class I appliance relies on which two layers of shock protection?",
              options: {
                A: "Double insulation only",
                B: "Basic insulation plus a connection of accessible conductive parts to the protective conductor (earth)",
                C: "SELV only",
                D: "Functional insulation only"
              },
              answer: "B",
              explanation: "Class I = basic insulation as the primary barrier, plus an earthed metal enclosure as the fault path. If either fails on its own the user is still protected; both have to fail before a shock becomes possible. This is why earth continuity is the headline test for Class I."
            },
            {
              number: 3,
              prompt: "A Class II appliance is identified by what symbol and relies on what protection?",
              options: {
                A: "A single square — relies on basic insulation only",
                B: "A double square (one inside the other) — relies on double or reinforced insulation, with no earthed metalwork",
                C: "An IP rating — relies on the enclosure",
                D: "A flash symbol — relies on a fuse"
              },
              answer: "B",
              explanation: "The double-square symbol denotes Class II / double-insulated. Earth continuity does not apply; the appropriate electrical test is insulation resistance. Many newer power tools and small appliances are Class II to avoid the cost and weight of an earthed enclosure."
            },
            {
              number: 4,
              prompt: "Class III equipment is supplied at:",
              options: {
                A: "230 V single-phase",
                B: "400 V three-phase",
                C: "SELV — not exceeding 50 V AC or 120 V ripple-free DC",
                D: "Any voltage provided it is double-insulated"
              },
              answer: "C",
              explanation: "Class III relies on supply at SELV — derived from a safety-isolating transformer and never connected to earth. Phone-charger output, low-voltage garden lighting transformers and bench-tool transformers are typical sources of a Class III supply."
            },
            {
              number: 5,
              prompt: "Equipment with only basic insulation and no protective conductor is:",
              options: {
                A: "Class I",
                B: "Class II",
                C: "Class III",
                D: "Class 0 — banned for sale and use in the UK"
              },
              answer: "D",
              explanation: "Class 0 has only basic insulation and no earth — a single insulation failure puts the user in contact with live parts. The UK has prohibited Class 0 since the introduction of the Plugs & Sockets Regulations and the Electrical Equipment (Safety) Regs."
            },
            {
              number: 6,
              prompt: "A 2-core flexible lead with an IEC C7 (figure-of-eight) plug at one end is being assessed. It should be classified for testing as:",
              options: {
                A: "Class I — because it has two cores",
                B: "Class II — because there is no protective conductor",
                C: "Class III — because the voltage is below 50 V",
                D: "Class 0 — because there is no double-insulation symbol"
              },
              answer: "B",
              explanation: "Classification follows the construction. A 2-core lead has no protective earth conductor so the relevant test set is the Class II one — IR and polarity. The Class number is independent of the appliance the lead ultimately supplies."
            },
            {
              number: 7,
              prompt: "A toaster sitting on a kitchen worktop and connected by a 1.0 mm² flex is best categorised as:",
              options: {
                A: "Mobile",
                B: "Portable",
                C: "Hand-held",
                D: "Fixed"
              },
              answer: "B",
              explanation: "COP equipment categories: portable = moved while connected or about while in use (kettle, toaster, lamp). Mobile = wheeled, moved while in use (vacuum). Hand-held = held during use (drill). Toasters sit and run, so portable."
            },
            {
              number: 8,
              prompt: "A SELV supply is characterised by:",
              options: {
                A: "≤ 50 V AC, with no connection to earth on the load side",
                B: "≤ 110 V AC centre-tapped to earth",
                C: "≤ 230 V AC with a 30 mA RCD",
                D: "Any voltage provided the body is double-insulated"
              },
              answer: "A",
              explanation: "SELV (Separated Extra-Low Voltage) is electrically isolated from earth on the load side and operates at ≤ 50 V AC / 120 V DC. The centre-tapped earth setup at 110 V is the construction-site reduced low-voltage system, not SELV."
            },
            {
              number: 9,
              prompt: "Identifying the Class of an appliance is essential because it determines:",
              options: {
                A: "The colour of the pass label",
                B: "The plug fuse rating",
                C: "Which electrical tests are applicable and what acceptance values apply",
                D: "Whether the duty holder needs to keep records"
              },
              answer: "C",
              explanation: "Class I needs earth continuity and IR; Class II needs IR (with the probe to accessible metal); Class III needs only a visual / functional check at SELV. The Class drives the test sequence and the pass criteria — not the label colour."
            },
            {
              number: 10,
              prompt: "An LED desk lamp running from a separate 12 V DC plug-in PSU. The lamp itself is supplied at:",
              options: {
                A: "Class I",
                B: "Class II",
                C: "Class III",
                D: "Class 0"
              },
              answer: "C",
              explanation: "The 12 V load side of a separating PSU is a Class III supply. The PSU itself is usually a Class II appliance — the two halves are tested separately."
            },
            {
              number: 11,
              prompt: "A double square symbol (one inside the other) indicates:",
              options: {
                A: "Class I — earth required",
                B: "Class II — double or reinforced insulation, no earth",
                C: "Class III — SELV only",
                D: "IP rating dust-protected"
              },
              answer: "B",
              explanation: "The double-square is the IEC marking for Class II construction. Look for it on power-tool nameplates, hairdryers, and small mains appliances. Its presence rules out an earth-continuity test."
            },
            {
              number: 12,
              prompt: "A construction-site 110 V centre-tapped-to-earth supply is:",
              options: {
                A: "A SELV supply",
                B: "A Class III supply",
                C: "Reduced Low Voltage (RLV) — not SELV",
                D: "An ELV supply only suitable for indoor use"
              },
              answer: "C",
              explanation: "110 V CTE gives 55 V to earth from each line, reducing shock severity but is not SELV — there is a deliberate connection to earth at the centre tap. Equipment used on it (drills, lamps, transformers) is its own Class regardless of the supply."
            },
            {
              number: 13,
              prompt: "An electric kettle has a moulded plug, 1.0 mm² flex, an earthed stainless steel body and a heating element bonded to the case. The construction is:",
              options: {
                A: "Class 0 — only basic insulation",
                B: "Class I — basic insulation plus protective earth",
                C: "Class II — relies on double insulation",
                D: "Class III — SELV"
              },
              answer: "B",
              explanation: "Earthed accessible metalwork plus basic insulation = Class I. The earth-continuity test from the plug pin to the kettle body is the headline check."
            },
            {
              number: 14,
              prompt: "A handheld hair dryer marked with a double square symbol and a 2-core flex is:",
              options: {
                A: "Class I — assume earth is internal",
                B: "Class II — no earth required, IR is the relevant test",
                C: "Class III — too low voltage to test",
                D: "Class 0 — must be withdrawn"
              },
              answer: "B",
              explanation: "Double-square symbol + 2-core flex confirms Class II. There is no protective conductor so earth continuity is meaningless; the IR test (with the probe on accessible metal where present) is the right approach."
            },
            {
              number: 15,
              prompt: "A bench-mounted soldering iron supplied via a separating transformer at 24 V AC is in use. The iron itself is:",
              options: {
                A: "Class I — its own metal tip is exposed",
                B: "Class II — relies on double insulation",
                C: "Class III — supplied at SELV from the transformer",
                D: "Class 0 — no earth in the lead"
              },
              answer: "C",
              explanation: "Class III is defined by the supply being SELV. The transformer is the source; the iron operating from its 24 V output is a Class III appliance even though the transformer itself is a Class I or II appliance feeding the bench."
            },
            {
              number: 16,
              prompt: "A 3-core extension lead with a moulded 13 A plug and trailing socket is being categorised. For PAT purposes the lead is:",
              options: {
                A: "Treated as a Class I appliance in its own right",
                B: "Treated as Class II because the cable is flexible",
                C: "Excluded from the regime because it has no fixed appliance",
                D: "Class III because it carries no permanent load"
              },
              answer: "A",
              explanation: "A 3-core lead has a protective conductor so the Class I test set applies — earth continuity from plug pin to socket earth, plus IR and polarity. It is logged on its own ID."
            },
            {
              number: 17,
              prompt: "A USB phone charger plugged into a 13 A socket. The mains side of the charger is typically:",
              options: {
                A: "Class I — body is earthed",
                B: "Class II — double-insulated, no earth",
                C: "Class III — output is < 50 V",
                D: "Class 0 — banned"
              },
              answer: "B",
              explanation: "The plug body and mains-side electronics are Class II (double-insulated, no earth pin or with an unconnected earth). The 5 V USB output is Class III. Two halves, two Class numbers."
            },
            {
              number: 18,
              prompt: "Why does the IET COP put weight on identifying the Class before any electrical test?",
              options: {
                A: "Because the Class determines the next-due date",
                B: "Because the Class determines which tests apply and at what acceptance value",
                C: "Because Class III equipment cannot be tested",
                D: "Because Class II equipment must be returned to the manufacturer"
              },
              answer: "B",
              explanation: "An earth-continuity reading on a Class II appliance is meaningless; an IR test on a SELV Class III supply isn't useful either. Get the Class right first or the rest of the test card is wasted."
            },
            {
              number: 19,
              prompt: "An electric drill with an exposed metal chuck and a double square symbol on the data plate is:",
              options: {
                A: "Class I — chuck is metal",
                B: "Class II — accessible metal can exist behind double insulation",
                C: "Class III — battery powered",
                D: "Class 0 — chuck not earthed"
              },
              answer: "B",
              explanation: "Class II equipment can have accessible metalwork separated from live parts by double or reinforced insulation. The chuck is not earthed and is not required to be; the COP test is IR with the probe on accessible metal."
            },
            {
              number: 20,
              prompt: "A 110 V transformer feeds a 110 V Class I drill on a construction site. For PAT purposes the drill is:",
              options: {
                A: "Class III — because 110 V is below mains",
                B: "Class I — basic insulation plus protective earth, tested as Class I at 500 V DC IR",
                C: "Class II — because the supply is reduced",
                D: "Untestable while powered by the transformer"
              },
              answer: "B",
              explanation: "Construction-site 110 V tools are Class I if the construction has basic insulation + earth. The supply voltage doesn't change the Class. Test the drill as Class I (earth continuity + IR) once disconnected from the transformer."
            }
          ]
        },
        {
          id: "v2",
          questions: [
            {
              number: 1,
              prompt: "Equipment, in which protection against electric shock relies upon basic insulation only, is the definition of construction classification:",
              options: {
                A: "Class II",
                B: "Class III",
                C: "Class I",
                D: "Class 0"
              },
              answer: "D",
              explanation: "Class 0 = basic insulation only, no earth. Class I = basic insulation + protective earth. Class II = double or reinforced insulation. Class III = SELV supply."
            },
            {
              number: 2,
              prompt: "Class II construction is sometimes referred to as:",
              options: {
                A: "Earth-free construction with double or reinforced insulation",
                B: "Bonded construction",
                C: "Cordless construction",
                D: "SELV construction"
              },
              answer: "A",
              explanation: "Class II is the construction-level term for double or reinforced insulation with no earth path. Cordless tools may still be Class III when in use, but the chargers will normally be Class II."
            },
            {
              number: 3,
              prompt: "An angle grinder marked with a single square symbol denotes:",
              options: {
                A: "Class I — basic + earth",
                B: "Class II — double insulation (single square is sometimes used in addition to a double square)",
                C: "Class III — SELV",
                D: "Class 0 — banned"
              },
              answer: "B",
              explanation: "Some manufacturers add a single square (along with the double square) on Class II appliances. The double square is the canonical IEC mark; the single square is supplementary. Either way, no earth pin is required."
            },
            {
              number: 4,
              prompt: "A vacuum cleaner being moved across the floor while it runs is best categorised as:",
              options: {
                A: "Portable",
                B: "Mobile",
                C: "Hand-held",
                D: "Stationary"
              },
              answer: "B",
              explanation: "Mobile equipment = wheeled or moved while in use (vacuum cleaners, floor scrubbers). Portable = moved when not in use. Hand-held = held while in use. The category drives the inspection interval."
            },
            {
              number: 5,
              prompt: "A photocopier weighing 75 kg in an office environment is best categorised as:",
              options: {
                A: "Mobile",
                B: "Hand-held",
                C: "Stationary — typically not moved during use",
                D: "Class III"
              },
              answer: "C",
              explanation: "Stationary equipment is heavy and not normally moved during use (photocopiers, dishwashers, fridges). The interval is longer than for hand-held kit because handling damage is rare."
            },
            {
              number: 6,
              prompt: "A 12 V LED strip light is supplied via a separate Class II driver from the mains. Considering the strip alone, the relevant Class is:",
              options: {
                A: "Class I — strip has metal track",
                B: "Class II — strip is double-insulated",
                C: "Class III — strip is supplied at SELV",
                D: "Class 0 — no earth"
              },
              answer: "C",
              explanation: "Class III is defined by SELV at the point of supply. Test the driver as Class II (the mains side); the LED strip itself is a Class III load and only needs a functional / visual check."
            },
            {
              number: 7,
              prompt: "An electric pillar drill bolted to a workshop bench, hardwired into a 13 A FCU is best classified as:",
              options: {
                A: "Hand-held",
                B: "Portable",
                C: "Mobile",
                D: "Fixed (or stationary depending on definition) — moved by tools, not in use"
              },
              answer: "D",
              explanation: "Fixed/stationary equipment is bolted in place and moved only by tools. The COP allows fixed kit longer intervals because handling damage is rare; visual checks remain essential."
            },
            {
              number: 8,
              prompt: "A class label on the data plate that reads 'class I' indicates the appliance:",
              options: {
                A: "Has only basic insulation",
                B: "Has basic insulation and a protective conductor (earth)",
                C: "Is SELV",
                D: "Is double-insulated"
              },
              answer: "B",
              explanation: "Class I = basic insulation + earth. The plug must have a continuous earth pin connected to all accessible metalwork. Earth continuity is the headline test."
            },
            {
              number: 9,
              prompt: "Which appliance is most likely to be Class II?",
              options: {
                A: "An older 3 kW domestic kettle with stainless body",
                B: "A modern handheld hairdryer with plastic moulding and 2-core flex",
                C: "A 6 kW commercial cooker hardwired in",
                D: "An electric hob"
              },
              answer: "B",
              explanation: "Hairdryers are typically Class II — plastic body, 2-core flex, no earth required. Heating appliances with metal cases are usually Class I to provide the earth fault path."
            },
            {
              number: 10,
              prompt: "An IEC C13 detachable mains lead is being assessed. As a 3-core lead it is classed and tested as:",
              options: {
                A: "Class I — earth continuity, IR, polarity",
                B: "Class II — IR and polarity only",
                C: "Class III — visual and functional only",
                D: "Class 0 — withdrawn"
              },
              answer: "A",
              explanation: "C13 leads are 3-core, so the Class I test set applies. Tested as a separate item with its own ID; faulty leads then cannot wander between appliances unnoticed."
            },
            {
              number: 11,
              prompt: "A 36 V Class III bench transformer outputs to a low-voltage workshop lamp. The lamp is:",
              options: {
                A: "Class I — has a metal shade",
                B: "Class II — double-insulated",
                C: "Class III — supplied at SELV",
                D: "Untestable"
              },
              answer: "C",
              explanation: "Class III is determined by the supply being SELV (≤ 50 V AC). The lamp is a Class III appliance even if the supplying transformer itself is a Class I or II device."
            },
            {
              number: 12,
              prompt: "An appliance has both a USB port (5 V) and a separate 230 V output. For testing purposes:",
              options: {
                A: "Treat the whole appliance as Class III",
                B: "Treat the whole appliance as Class I",
                C: "Apply the Class of the highest voltage section to the whole appliance — typically Class I or II for the mains side",
                D: "Skip testing because it has multiple voltages"
              },
              answer: "C",
              explanation: "Mains-side construction sets the Class of the appliance (I or II). The SELV output is just the load-side output of the internal supply, not a separate Class III appliance to be logged."
            },
            {
              number: 13,
              prompt: "A 230 V Class I floor polisher with a 4-wheel base is best categorised as:",
              options: {
                A: "Hand-held",
                B: "Mobile — moved on wheels while in use",
                C: "Stationary",
                D: "Fixed"
              },
              answer: "B",
              explanation: "Mobile equipment moves while in use, particularly on wheels (vacuum cleaners, floor polishers, mobile space heaters). The flex sees more bending and abrasion, hence shorter intervals."
            },
            {
              number: 14,
              prompt: "An office laser printer connected via a removable IEC C13 lead is best categorised as:",
              options: {
                A: "Hand-held",
                B: "Stationary IT equipment",
                C: "Mobile",
                D: "Class III"
              },
              answer: "B",
              explanation: "Office IT (printers, photocopiers, desktop PCs) sits in one place and is rarely moved. The COP gives stationary office IT some of the longest intervals because handling damage is rare."
            },
            {
              number: 15,
              prompt: "A 230 V circular saw labelled with a double square is:",
              options: {
                A: "Class I — saw blade is metal",
                B: "Class II — double-insulated, no earth",
                C: "Class III — battery powered",
                D: "Class 0"
              },
              answer: "B",
              explanation: "Modern handheld power tools are commonly Class II. The metal blade is part of the function, not exposed conductive metalwork to be earthed; double or reinforced insulation between live parts and the user fulfils the safety duty."
            },
            {
              number: 16,
              prompt: "A duty holder finds an old appliance with the data plate marked 'Class 0'. The correct action is:",
              options: {
                A: "Apply Class I tests because basic insulation is present",
                B: "Withdraw it from service — Class 0 is not acceptable in the UK",
                C: "Carry out a SELV check",
                D: "Use it only with an RCD"
              },
              answer: "B",
              explanation: "Class 0 has only basic insulation, no earth and no double insulation. UK regulations have prohibited it for decades. The right action is withdrawal, not retesting."
            },
            {
              number: 17,
              prompt: "A construction-site 110 V centre-tapped supply does NOT make a tool Class III because:",
              options: {
                A: "110 V is above the SELV ceiling for AC",
                B: "There is a deliberate connection to earth at the centre tap",
                C: "Both A and B",
                D: "Class III is only for battery tools"
              },
              answer: "C",
              explanation: "SELV requires (i) source ≤ 50 V AC AND (ii) no earth on the load side. 110 V CTE fails both — it is reduced low voltage for shock-severity reduction, not SELV."
            },
            {
              number: 18,
              prompt: "A pre-owned table lamp has a 3-core flex but the metal base is not connected to the earth core. The construction is:",
              options: {
                A: "Class I — has a 3-core flex",
                B: "Defective — earth pin should connect to accessible metal; treat as fail until repaired",
                C: "Class II — metal is decorative",
                D: "Class III"
              },
              answer: "B",
              explanation: "If a 3-core flex is fitted the appliance is Class I and the protective conductor MUST connect to all accessible metalwork. A floating earth on a Class I lamp is a defect — fail and repair before re-issue."
            },
            {
              number: 19,
              prompt: "A 6 kW dishwasher hardwired in via a fused isolator. Should it be in the PAT regime?",
              options: {
                A: "Yes — and routinely tested as portable",
                B: "No — fixed/hardwired equipment is part of the fixed installation, but it is still inspected and may be tested at longer intervals",
                C: "Yes — but only if Class II",
                D: "Never — fixed equipment has no Class"
              },
              answer: "B",
              explanation: "Hardwired equipment falls under the fixed installation EICR. The COP still recommends inspection of fixed-but-pluggable equipment; intervals are longer because the kit is not handled day-to-day."
            },
            {
              number: 20,
              prompt: "Identifying the equipment Class drives:",
              options: {
                A: "Whether the appliance is taxable",
                B: "The applicable test sequence and pass criteria, plus parts of the recommended interval",
                C: "Only the colour of the pass label",
                D: "The fuse rating in the wall socket"
              },
              answer: "B",
              explanation: "Get the Class right or the wrong tests get applied. Class I needs earth continuity + IR; Class II needs IR (probe to accessible metal); Class III needs visual / functional only. The interval also references Class as one of several drivers."
            }
          ]
        },
        {
          id: "v3",
          questions: [
            {
              number: 1,
              prompt: "A Class I appliance is identified by:",
              options: {
                A: "A green dot on the data plate",
                B: "The presence of an earth pin and an internal earth wire from the plug pin to all accessible metal",
                C: "An IP rating greater than 44",
                D: "A double square symbol"
              },
              answer: "B",
              explanation: "Class I = earth pin connected through the protective conductor to every accessible conductive part. The double-square symbol denotes Class II, not Class I. IP ratings describe ingress protection, not Class."
            },
            {
              number: 2,
              prompt: "Which of the following pieces of equipment is most likely to be Class III?",
              options: {
                A: "230 V mains kettle",
                B: "230 V drill",
                C: "12 V model railway controller running through a separating transformer",
                D: "Office desktop PC"
              },
              answer: "C",
              explanation: "Class III is supplied at SELV (≤ 50 V AC). The model railway controller's 12 V output is a Class III supply. The kettle and drill are mains-fed Class I or II appliances; the PC is Class I (earthed PSU)."
            },
            {
              number: 3,
              prompt: "Class II construction may include:",
              options: {
                A: "Earthed metalwork visible to the user",
                B: "Accessible metal that is separated from live parts by double or reinforced insulation",
                C: "Earth straps from chassis to plug pin",
                D: "An earth wire connected to the heating element"
              },
              answer: "B",
              explanation: "Class II equipment can have accessible metalwork separated from live parts by double or reinforced insulation. The metal is not earthed, so earth continuity testing is meaningless; IR with the probe on the accessible metal is the relevant electrical test."
            },
            {
              number: 4,
              prompt: "A safety-isolating transformer for SELV supply must comply with:",
              options: {
                A: "BS EN 61558 (or equivalent), with separated windings and no earth on the secondary",
                B: "BS 1363",
                C: "BS 4343 industrial connectors",
                D: "BS 3036 fuses"
              },
              answer: "A",
              explanation: "Safety-isolating transformers used as Class III sources must have galvanic separation between primary and secondary, no earth connection on the secondary, and meet BS EN 61558. Auto-transformers don't qualify."
            },
            {
              number: 5,
              prompt: "A toaster, kettle and microwave on the same office worktop are all:",
              options: {
                A: "Hand-held",
                B: "Portable",
                C: "Mobile",
                D: "Stationary because they sit in one place"
              },
              answer: "B",
              explanation: "Portable equipment is moved when not in use but typically static during use. Office canteen kettles, toasters and microwaves are portable — the flex is a stress point because they get pulled and unplugged regularly."
            },
            {
              number: 6,
              prompt: "A fixed-wired water heater above a sink is:",
              options: {
                A: "Portable",
                B: "Mobile",
                C: "Hand-held",
                D: "Fixed equipment, covered by the EICR but inspected as part of the COP regime where pluggable"
              },
              answer: "D",
              explanation: "Hardwired equipment falls primarily under the EICR, but the COP still recommends visual inspection of fixed equipment. Intervals are typically much longer than for portable kit because handling damage is rare."
            },
            {
              number: 7,
              prompt: "A 230 V freestanding electric heater on castors is best categorised as:",
              options: {
                A: "Hand-held",
                B: "Mobile",
                C: "Stationary",
                D: "Fixed"
              },
              answer: "B",
              explanation: "Wheels and being moved while in use mark this as mobile equipment. The flex undergoes regular bending and stress, so the COP recommends shorter intervals than for stationary kit."
            },
            {
              number: 8,
              prompt: "Why is the equipment Class one of the drivers of the recommended interval?",
              options: {
                A: "Because Class II equipment has a longer life than Class I",
                B: "Because Class I equipment relies on the earth path remaining intact, so loss of continuity must be detected; Class II relies on insulation only and the failure modes differ",
                C: "Because Class III equipment is exempt from the COP",
                D: "Because Class 0 needs more frequent checks"
              },
              answer: "B",
              explanation: "Class I has two redundant layers (basic insulation + earth) so loss of either should be caught before both fail. Class II relies on a single high-integrity insulation system — different failure mode, different inspection emphasis."
            },
            {
              number: 9,
              prompt: "An IT engineer's screwdriver with a 1000 V insulated handle is:",
              options: {
                A: "A Class I appliance",
                B: "A Class II appliance",
                C: "Not an appliance — it has no electrical supply",
                D: "Class III"
              },
              answer: "C",
              explanation: "The COP applies to electrical equipment supplied with energy. Insulated hand tools are PPE and are inspected under their own scheme (e.g. BS EN 60900) — not PAT-tested."
            },
            {
              number: 10,
              prompt: "Which of these is a SELV supply?",
              options: {
                A: "230 V mains via a 1:1 isolating transformer",
                B: "110 V CTE construction site supply",
                C: "24 V from a BS EN 61558 safety-isolating transformer with no earth on the secondary",
                D: "400 V three-phase delta"
              },
              answer: "C",
              explanation: "SELV requires (i) source ≤ 50 V AC, (ii) galvanic separation from mains, and (iii) no earth on the load side. 230 V isolated is still 230 V; 110 V CTE is earthed at the centre tap."
            },
            {
              number: 11,
              prompt: "A washing machine sat in a domestic kitchen, plumbed in but plugged into a socket, is best classified as:",
              options: {
                A: "Stationary equipment — not normally moved during use",
                B: "Portable",
                C: "Hand-held",
                D: "Class III"
              },
              answer: "A",
              explanation: "Stationary equipment is heavy or fixed in place, moved by tools only (washing machines, fridges, dishwashers). Plug-and-socket connection still puts it in the COP regime, but at long intervals."
            },
            {
              number: 12,
              prompt: "An EV charger on a domestic driveway, hardwired in, is:",
              options: {
                A: "Portable equipment",
                B: "Fixed equipment — part of the installation under BS 7671",
                C: "Class III",
                D: "Mobile"
              },
              answer: "B",
              explanation: "Hardwired EV chargers are part of the fixed installation. They appear on EICRs and are inspected to BS 7671. Portable EV charging cables (mode 2) are PAT items in their own right."
            },
            {
              number: 13,
              prompt: "A USB cable with no electronics — just conductors — connecting a phone to a Class II charger is:",
              options: {
                A: "A Class I appliance",
                B: "Not an appliance — it has no internal energy source or end use other than as a conductor",
                C: "A Class III appliance",
                D: "A Class 0 appliance"
              },
              answer: "B",
              explanation: "Plain USB leads are accessories, not appliances. The Class II charger is the appliance that gets PAT-tested. Visual checks of the lead are still sensible — frayed cables get removed even if not formally PAT-tested."
            },
            {
              number: 14,
              prompt: "A surge-protected extension lead with multiple sockets and an internal MOV-based protection module is:",
              options: {
                A: "Tested as a Class I item — earth continuity and IR with care",
                B: "Tested as Class II — no earth pin",
                C: "Tested as Class III",
                D: "Not tested — sealed unit"
              },
              answer: "A",
              explanation: "Surge-protected leads usually have a 3-core flex and earthed sockets — Class I. Use 250 V DC for the IR test (not 500 V) to avoid breaking down the surge module. Visual checks of the indicator lamp confirm the module is still operational."
            },
            {
              number: 15,
              prompt: "Identifying the appliance class on first issue is mandated by:",
              options: {
                A: "BS 7671 Part 6",
                B: "The IET COP, which requires the formal initial inspection to confirm Class, type and any markings",
                C: "PUWER 1998",
                D: "RIDDOR"
              },
              answer: "B",
              explanation: "The COP's formal initial inspection / new equipment regime confirms the data-plate Class, marks the appliance with an inventory ID and records the baseline test results. From then on, inspections compare against this baseline."
            },
            {
              number: 16,
              prompt: "Two Class II appliances connected via a Class I extension lead are powered. The accessible metal of one of the appliances is at:",
              options: {
                A: "Earth potential because the lead has an earth pin",
                B: "Floating — the Class II construction means the metal is insulated from the earth pin of the lead",
                C: "Mains potential at all times",
                D: "Class III potential because the appliances are mobile"
              },
              answer: "B",
              explanation: "Class II appliances do not connect their accessible metal to the earth pin even when fed via a Class I lead. The metal floats — protected by double or reinforced insulation. The earth pin still exists for downstream Class I appliances on the same lead."
            },
            {
              number: 17,
              prompt: "A laptop power brick has a 3-core mains lead and a Class II marking on the case. This means:",
              options: {
                A: "The lead set is Class I (3-core); the brick is Class II — they are tested as separate items",
                B: "The whole assembly is Class I",
                C: "The whole assembly is Class III",
                D: "The whole assembly cannot be tested"
              },
              answer: "A",
              explanation: "Detachable lead sets are tested independently and follow their own Class. The brick is Class II (no internal earth on the live side) so the lead's earth pin is not used. Test and label them as separate items."
            },
            {
              number: 18,
              prompt: "Which class of equipment is NOT acceptable in the UK?",
              options: {
                A: "Class 0 — banned",
                B: "Class III",
                C: "Class II",
                D: "Class I"
              },
              answer: "A",
              explanation: "Class 0 has only basic insulation and no earth — a single insulation failure puts the user in contact with live parts. The UK has prohibited Class 0 since the introduction of the Plugs & Sockets Regulations and the Electrical Equipment (Safety) Regs."
            },
            {
              number: 19,
              prompt: "A small handheld desk fan rated 230 V with a single-square mark and 2-core flex is:",
              options: {
                A: "Class I",
                B: "Class II — confirmed by the symbol and the absence of an earth core",
                C: "Class III",
                D: "Class 0 unless the user can demonstrate otherwise"
              },
              answer: "B",
              explanation: "A single square is sometimes used together with a double square to indicate Class II, and 2-core flex confirms there is no earth conductor. Test as Class II — IR with the probe on accessible metal."
            },
            {
              number: 20,
              prompt: "An IEC 60309 (Commando) blue 32 A plug on a 230 V single-phase appliance suggests:",
              options: {
                A: "Class III only — colour denotes voltage",
                B: "Class I or II depending on internal construction — the connector colour indicates voltage band, not Class",
                C: "Class 0 because the plug is industrial",
                D: "Class III because of the high current rating"
              },
              answer: "B",
              explanation: "IEC 60309 colour codes indicate voltage band (blue = 230 V; red = 400 V; yellow = 110 V). Class is independent — the appliance can be Class I or Class II regardless. Always confirm Class from the data plate."
            }
          ]
        },
        {
          id: "v4",
          questions: [
            {
              number: 1,
              prompt: "Which of these is the formal definition of a Class II appliance?",
              options: {
                A: "An appliance in which protection against electric shock relies on basic insulation alone, with the body earthed",
                B: "An appliance in which protection against electric shock relies on double or reinforced insulation, with no provision for protective earthing",
                C: "An appliance supplied at SELV from a separating transformer with the load side connected to earth",
                D: "An appliance supplied at 110 V centre-tapped to earth"
              },
              answer: "B",
              explanation: "Class II = double or reinforced insulation, NO protective conductor. The accessible parts may include metal, but they are insulated from live parts by two independent layers (or one reinforced layer). The double-square symbol marks the construction."
            },
            {
              number: 2,
              prompt: "A 230 V appliance has a 3-pin moulded plug with a plastic sleeve over the earth pin and the data plate shows a double-square symbol. This means:",
              options: {
                A: "The earth pin is live",
                B: "The appliance is Class II — the earth pin is for mechanical engagement only and is not connected internally",
                C: "It is Class I but with a plastic earth pin",
                D: "It is Class III"
              },
              answer: "B",
              explanation: "Class II appliances sometimes have a sleeved (plastic) earth pin — used purely to operate the BS 1363 socket shutter so the live and neutral pins can enter. The plastic pin makes no electrical connection. Confirm by the double square symbol on the data plate."
            },
            {
              number: 3,
              prompt: "A 230 V Class I cooling fan has a metal grille, a metal motor body and a 3-core flex. The earth path travels:",
              options: {
                A: "Through the neutral conductor only",
                B: "From the plug earth pin via the green-and-yellow core to the metal frame and grille",
                C: "Through the cable screen alone",
                D: "Through the air gap"
              },
              answer: "B",
              explanation: "Class I requires a continuous low-resistance path from the plug earth pin via the cpc to every accessible exposed conductive part. Test by measuring resistance between the plug earth pin and each accessible metal part — within 0.1 Ω of the calculated lead resistance."
            },
            {
              number: 4,
              prompt: "A laminator on a desktop, used by office staff and rarely moved, is best categorised as:",
              options: {
                A: "Hand-held",
                B: "Mobile",
                C: "Stationary IT/office equipment",
                D: "Portable"
              },
              answer: "C",
              explanation: "Stationary office equipment includes laminators, photocopiers, desktop PCs and printers — items that sit in one place and are rarely moved. The COP allows long intervals because handling damage is rare."
            },
            {
              number: 5,
              prompt: "A handheld variable-speed grinder rated at 230 V with a double-square symbol is being tested. The relevant electrical test set is:",
              options: {
                A: "Earth continuity only",
                B: "Earth continuity at 25 A and IR at 1000 V DC",
                C: "Insulation resistance (with the probe on accessible metal where present), polarity and functional check — Class II tests",
                D: "SELV verification only"
              },
              answer: "C",
              explanation: "Class II equipment has no protective conductor, so no earth continuity test. The IR test verifies the integrity of the double / reinforced insulation. Polarity and functional checks remain essential."
            },
            {
              number: 6,
              prompt: "A dishwasher hardwired into a 16 A FCU and used in a domestic kitchen is:",
              options: {
                A: "Mobile equipment",
                B: "A Class III appliance",
                C: "Fixed equipment — part of the EICR rather than a routine PAT item",
                D: "A Class 0 appliance"
              },
              answer: "C",
              explanation: "Fixed/hardwired equipment is part of the installation. Routine inspection and testing is via the EICR cycle on the fixed installation, although the COP may still recommend visual inspection of the appliance itself."
            },
            {
              number: 7,
              prompt: "A safely-isolating transformer feeding a 24 V soldering iron has its secondary winding deliberately earthed. The supply is therefore:",
              options: {
                A: "SELV",
                B: "PELV — Protective Extra Low Voltage (low voltage with one point earthed)",
                C: "FELV — Functional Extra Low Voltage",
                D: "Reduced low voltage"
              },
              answer: "B",
              explanation: "If the secondary is intentionally earthed, the system becomes PELV not SELV. Functional shock protection is similar but the load side is connected to earth, which changes the protection strategy — touching live and earth gives the full secondary voltage."
            },
            {
              number: 8,
              prompt: "A solid wooden lectern with a built-in 230 V touch lamp connected via a fused spur is best treated as:",
              options: {
                A: "Class III equipment",
                B: "A combination of fixed wiring (the spur and feed) and the lamp itself, which is inspected per its own Class",
                C: "A mobile appliance",
                D: "A Class 0 appliance because of the wooden enclosure"
              },
              answer: "B",
              explanation: "Hardwired or fused-spur connection puts the supply side in the EICR; the lamp itself is inspected per the COP if pluggable, with its construction determining its Class (typically Class I or II)."
            },
            {
              number: 9,
              prompt: "Which standard governs the construction of safety-isolating transformers used to provide SELV?",
              options: {
                A: "BS EN 60898",
                B: "BS EN 61558",
                C: "BS 1363",
                D: "BS 7671"
              },
              answer: "B",
              explanation: "BS EN 61558 covers safety transformers including those for SELV supply. The construction requires reinforced or double insulation between primary and secondary, and clear marking of the SELV output."
            },
            {
              number: 10,
              prompt: "A microwave oven with a metal case, 1.0 mm² 3-core flex and an earthed BS 1363 plug is:",
              options: {
                A: "Class 0",
                B: "Class I",
                C: "Class II",
                D: "Class III"
              },
              answer: "B",
              explanation: "3-core flex with earth + accessible metalwork = Class I. Microwaves often have surge filters, so the earth-leakage current can be elevated. The IR test should usually still be at 500 V DC; switch to 250 V if the manufacturer specifies."
            },
            {
              number: 11,
              prompt: "A handheld test instrument enclosure has a polycarbonate body, a metal screw-on input panel and the IEC double-square symbol. It is:",
              options: {
                A: "Class I — the metal panel is exposed",
                B: "Class II — the construction is double-insulated",
                C: "Class III",
                D: "Class 0"
              },
              answer: "B",
              explanation: "Class II appliances may have accessible metal that is separated from internal live parts by double or reinforced insulation. The double-square mark is the deciding evidence. The metal panel does not have to be earthed."
            },
            {
              number: 12,
              prompt: "Which appliance category sees the FLEX as the most likely failure point in service?",
              options: {
                A: "Stationary office IT",
                B: "Mobile / hand-held appliances — moved, bent and pulled regularly",
                C: "Fixed equipment",
                D: "Class III"
              },
              answer: "B",
              explanation: "Hand-held and mobile equipment subject the flex to repeated bending, tugging, abrasion and crushing. Cord-grip failure, broken cores at the plug terminals and damaged sheaths are common. This is one reason mobile/hand-held items get tighter intervals."
            },
            {
              number: 13,
              prompt: "An electric kettle is dropped on a hard floor. The data plate is now obscured. The PAT operator should:",
              options: {
                A: "Test as Class II by default",
                B: "Test as Class I by default",
                C: "Inspect the construction (flex cores, internal connections, earth bonding) to determine the Class — and refer to manufacturer literature where required",
                D: "Withdraw all kettles in the workplace"
              },
              answer: "C",
              explanation: "Don't guess. The Class is determined by construction — count the flex cores, check the earth bonding to the body, and consult manufacturer documentation if needed. A 3-core flex on metal-bodied kit confirms Class I."
            },
            {
              number: 14,
              prompt: "An old toolbox PAT tester offers 'earth bond test only' for a Class III appliance. The correct response is:",
              options: {
                A: "Carry it out anyway",
                B: "Skip the earth bond — Class III equipment has no protective conductor and the test is meaningless",
                C: "Run it at 25 A",
                D: "Redo it three times to be sure"
              },
              answer: "B",
              explanation: "Class III equipment is supplied at SELV from an isolated source. There is no protective conductor and no earthed metalwork — earth continuity is meaningless. Visual / functional checks are the relevant inspection."
            },
            {
              number: 15,
              prompt: "An IT engineer's portable RCD lead with an inline 30 mA RCD plug and a trailing 13 A socket is:",
              options: {
                A: "A Class III device",
                B: "A 3-core mains lead — tested as Class I (earth continuity, IR, polarity), with the RCD function tested at its rated trip current",
                C: "A Class II device because the RCD plug is plastic",
                D: "Excluded from PAT because of the integral RCD"
              },
              answer: "B",
              explanation: "Inline RCD leads carry the earth conductor through, so the lead is Class I. The RCD function is tested separately — typically at its rated 30 mA — within the time the manufacturer/COP specifies."
            },
            {
              number: 16,
              prompt: "An electric drill labelled 'Class II' but with a metal gearbox housing in contact with the user's hand. The PAT operator should:",
              options: {
                A: "Apply Class I tests because metal is accessible",
                B: "Apply Class II tests — Class II permits accessible metal separated from live parts by double or reinforced insulation; the IR test verifies the insulation",
                C: "Withdraw it — accessible metal is forbidden on Class II",
                D: "Test it as Class III"
              },
              answer: "B",
              explanation: "Class II is defined by double or reinforced insulation between live parts and the user, not by the absence of metal. IR is the relevant electrical test, with the probe on the accessible metal where appropriate."
            },
            {
              number: 17,
              prompt: "A 110 V Class I site lamp on a construction site is supplied via a 3-core arctic flex. The PAT test for the lamp is:",
              options: {
                A: "Earth continuity at 25 A and IR at 500 V DC — standard Class I tests",
                B: "Earth continuity at 1000 mA only",
                C: "SELV verification only",
                D: "No tests — it is reduced low voltage"
              },
              answer: "A",
              explanation: "Reduced LV (110 V CTE) is a SHOCK MITIGATION technique, not a Class. The lamp is still Class I and gets the standard Class I tests. The 110 V transformer that supplies it is its own Class I or II appliance and gets its own tests."
            },
            {
              number: 18,
              prompt: "A 230 V vending machine on castors that is wheeled into position once a year and then left in place is best categorised as:",
              options: {
                A: "Hand-held",
                B: "Mobile while being repositioned but otherwise stationary in use — judge per the COP type definition; commonly listed as transportable / mobile",
                C: "Class III",
                D: "Fixed"
              },
              answer: "B",
              explanation: "The COP categories are guidelines — apply the one that best fits the in-use condition. Vending machines are typically logged as transportable/mobile because moving them, even infrequently, stresses the flex."
            },
            {
              number: 19,
              prompt: "A garden lighting transformer feeds a 12 V AC garden lamp via a 2-core cable. The lamp itself is:",
              options: {
                A: "Class I",
                B: "Class II",
                C: "Class III — supplied at SELV from a safety-isolating transformer",
                D: "Class 0"
              },
              answer: "C",
              explanation: "Class III is defined by the supply being SELV. The transformer is the appliance that gets PAT-tested (typically Class II). The lamp is a Class III load and only requires visual/functional checks."
            },
            {
              number: 20,
              prompt: "Why does the PAT operator NOT test a Class III lamp at 500 V DC IR?",
              options: {
                A: "Because the lamp is too small",
                B: "Because Class III circuits operate at SELV and the source has no earth — there is no live-to-earth path to test in the PAT sense; the relevant tests are the SELV verification of the source plus visual checks of the load",
                C: "Because Class III is exempt from the COP",
                D: "Because the IR test would damage the bulb"
              },
              answer: "B",
              explanation: "The PAT IR test for Class I or II is live-to-earth or live-to-accessible-metal at 500 V DC. With Class III the source is isolated from earth and ≤ 50 V — the test is not relevant. Verify the SELV source separately and inspect the load visually."
            }
          ]
        },
        {
          id: "v5",
          questions: [
            {
              number: 1,
              prompt: "An appliance is described in the COP as 'hand-held'. This means it is:",
              options: {
                A: "Portable but not lifted by the user",
                B: "Held in the hand while in use — drills, sanders, small grinders, soldering irons",
                C: "Mobile but on a wheeled trolley",
                D: "Stationary but small"
              },
              answer: "B",
              explanation: "Hand-held = held in the hand during operation. The flex is repeatedly bent at the cord-grip, the trigger sees mechanical stress, and the case can absorb impacts. The COP recommends the tightest intervals for this category."
            },
            {
              number: 2,
              prompt: "A printer / scanner / copier with an internal 230 V supply, a 3-core IEC C13 lead, and a metal chassis is:",
              options: {
                A: "Class I — the chassis must be earthed via the protective conductor",
                B: "Class II — IT equipment is Class II",
                C: "Class III — the laser is low power",
                D: "Class 0"
              },
              answer: "A",
              explanation: "Office IT equipment with a metal chassis and 3-core flex is Class I. The Y-capacitor filters in the PSU lead to elevated earth-leakage current, but the construction is still Class I. IR is normally tested at 250 V DC to protect the surge filter."
            },
            {
              number: 3,
              prompt: "An equipment Class drives the test sequence; it does NOT directly drive:",
              options: {
                A: "Whether earth continuity applies",
                B: "Whether IR is required at the standard test voltage",
                C: "The plug fuse rating, which depends on flex CSA and the appliance current rating",
                D: "Whether Class 0 is acceptable"
              },
              answer: "C",
              explanation: "Plug fuse selection follows BS 1362 / BS 1363 — flex CSA and appliance current set the fuse. The Class affects test sequence and acceptance values; the fuse rating is independent."
            },
            {
              number: 4,
              prompt: "A handheld stick vacuum cleaner with a 2-core flex and a double-square mark is:",
              options: {
                A: "Class I",
                B: "Class II — IR test plus visual / functional check",
                C: "Class III",
                D: "Class 0"
              },
              answer: "B",
              explanation: "2-core flex + double square = Class II. The motor windings rely on double or reinforced insulation; no earth means no earth continuity test. The flex bend at the handle is a key visual inspection point."
            },
            {
              number: 5,
              prompt: "A SELV source must:",
              options: {
                A: "Be connected to earth on the load side",
                B: "Have galvanic separation from mains and no earth on the load side",
                C: "Operate at 110 V centre-tapped",
                D: "Provide 230 V via an isolating 1:1 transformer"
              },
              answer: "B",
              explanation: "Two key requirements: (i) galvanic separation between the source and the mains, and (ii) no earth on the load side. Together these mean a single contact with one secondary conductor cannot complete a circuit through the user."
            },
            {
              number: 6,
              prompt: "An appliance with a metal lever mechanism for stapling has the IEC double-square symbol. It is:",
              options: {
                A: "Class I",
                B: "Class II",
                C: "Class III",
                D: "Class 0"
              },
              answer: "B",
              explanation: "The double square is the determining mark for Class II construction. Accessible metal levers and parts are permitted on Class II provided they are insulated from live parts by double or reinforced insulation."
            },
            {
              number: 7,
              prompt: "A piece of equipment whose data plate shows BOTH a single square and a double-square symbol is:",
              options: {
                A: "Class I",
                B: "Class II — both marks indicate the construction; some manufacturers use both for clarity",
                C: "Class III",
                D: "Banned for sale"
              },
              answer: "B",
              explanation: "Both symbols appearing together is a manufacturer convention for Class II — particularly common on power tools. The presence of either confirms Class II construction. Test as Class II."
            },
            {
              number: 8,
              prompt: "Which Class always requires the earth-continuity test?",
              options: {
                A: "Class 0",
                B: "Class I",
                C: "Class II",
                D: "Class III"
              },
              answer: "B",
              explanation: "Class I has a protective earth — the EC test verifies that the path is intact. Class II has no earth (and no test). Class III is SELV (no test). Class 0 is banned in the UK."
            },
            {
              number: 9,
              prompt: "A laboratory bench transformer outputs 50 V AC with the secondary unearthed. A 50 V soldering iron run from it is:",
              options: {
                A: "Class I",
                B: "Class II",
                C: "Class III — the supply is SELV (50 V at the boundary, isolated)",
                D: "Class 0"
              },
              answer: "C",
              explanation: "SELV upper limit is 50 V AC RMS; the secondary is unearthed; the source is a separating transformer. The iron is therefore a Class III appliance even at the limit. Verify the source is genuinely separated, not auto-transformed."
            },
            {
              number: 10,
              prompt: "An office user trips on the flex of a hand-held drill and tugs the cable. The PAT operator's first concern is:",
              options: {
                A: "The fuse rating",
                B: "Whether the cord-grip and inner core terminations have failed — a classic Class II/III hand-held failure mode",
                C: "Whether the lead is still 1.0 mm²",
                D: "Whether the drill chuck is metal"
              },
              answer: "B",
              explanation: "Cord-grip failure is the most common in-service fault on hand-held kit. Pull on the flex strains the conductors at the screw terminals or solder joints, leading to broken conductors, loose live wires inside the casing, or stretched insulation."
            },
            {
              number: 11,
              prompt: "A SELV system run from a separating transformer also requires:",
              options: {
                A: "The output to be connected to earth",
                B: "The wiring to be marked with the same colours as a 230 V mains supply",
                C: "Plugs and sockets that are not interchangeable with mains plugs and sockets, to prevent inadvertent connection",
                D: "30 mA RCD on the secondary"
              },
              answer: "C",
              explanation: "BS 7671 requires SELV plugs and sockets to be incompatible with mains plugs and sockets. This stops a SELV appliance being plugged into the mains and vice versa. The combination of SELV source plus dedicated connectors gives the safety case."
            },
            {
              number: 12,
              prompt: "An LED desk lamp with a USB-powered head and a separate Class II 5 V plug-in PSU is being PAT-tested. The PAT operator should:",
              options: {
                A: "Test the whole system at 500 V DC IR",
                B: "PAT-test the Class II PSU to its IR test set; visually check the SELV head; record both with their own IDs",
                C: "PAT-test the head alone",
                D: "Not test it — it is too small"
              },
              answer: "B",
              explanation: "Two separate items, two records. The plug-in PSU is the Class II appliance — IR + functional. The 5 V head is a Class III load — visual / functional only. Each gets its own ID for traceability."
            },
            {
              number: 13,
              prompt: "A small two-pin shaver socket on a bathroom unit transformer outputs an isolated 230 V via a separating winding. The shaver itself is:",
              options: {
                A: "Class III — because the socket is in a bathroom",
                B: "Class II — most shavers are double-insulated and the isolating socket does not change the appliance Class",
                C: "Class I — the bathroom is bonded",
                D: "Class 0"
              },
              answer: "B",
              explanation: "Isolating shaver sockets give galvanic separation from the mains and limit current via a transformer, but they do NOT make the load SELV — the output is still 230 V. The shaver's own construction (typically double-insulated) determines Class — usually Class II."
            },
            {
              number: 14,
              prompt: "A 230 V Class I extension lead has been retrofitted with an inline 30 mA RCD. The Class is:",
              options: {
                A: "Still Class I — the protective conductor remains continuous through the device",
                B: "Now Class II because the RCD body is plastic",
                C: "Class III because the RCD is a 'safety device'",
                D: "Class 0 because of the modification"
              },
              answer: "A",
              explanation: "Adding an inline RCD does not change the Class of the lead — the earth conductor still passes through. Test as Class I and additionally test the RCD function (typically at 30 mA, with the COP-recommended trip time)."
            },
            {
              number: 15,
              prompt: "An office desk PC has a 3-core IEC C13 lead. The lead set is:",
              options: {
                A: "Tested as Class I in its own right (earth continuity, IR, polarity), with its own ID",
                B: "Class II",
                C: "Class III",
                D: "Excluded from PAT"
              },
              answer: "A",
              explanation: "Detachable IEC leads with 3 cores are tested as Class I appliances in their own right and given their own ID. This stops a faulty lead wandering between machines unnoticed."
            },
            {
              number: 16,
              prompt: "An appliance that runs from a 230 V mains supply but uses an integral isolating transformer to internally power its electronics at SELV. The appliance Class is:",
              options: {
                A: "Determined by the construction of the OUTSIDE of the appliance — usually Class I or II",
                B: "Class III because some internal voltages are SELV",
                C: "Class 0",
                D: "All three classes simultaneously"
              },
              answer: "A",
              explanation: "Class is set by how the user is protected from the supply mains — i.e. the construction at the boundary the user touches. Internal SELV rails do not make the appliance Class III. Test the construction at the user-facing boundary."
            },
            {
              number: 17,
              prompt: "A 230 V plug-in air freshener with a sealed plastic body, no flex and a 2-pin BS 1363 plug is:",
              options: {
                A: "Class I",
                B: "Class II — sealed double-insulated body, no earth",
                C: "Class III",
                D: "Excluded from any inspection"
              },
              answer: "B",
              explanation: "Sealed plastic body + no earth pin + 230 V supply = Class II. Visual checks for cracked casing, scorch marks, or melted plug pins are particularly important — these tend to be glued-shut units that cannot be opened."
            },
            {
              number: 18,
              prompt: "A 110 V site transformer is itself a Class I appliance with a metal case and 3-core flex. Tools running from its 110 V CTE output are:",
              options: {
                A: "Class III",
                B: "Class I or II depending on their own construction; the supply does NOT change the tool's Class",
                C: "Untestable",
                D: "Class 0"
              },
              answer: "B",
              explanation: "The supply is reduced LV (a shock-mitigation technique). The tool's own construction sets its Class. A 110 V Class I drill gets the Class I test set; a 110 V Class II drill gets the Class II set. Don't conflate supply voltage with Class."
            },
            {
              number: 19,
              prompt: "A 230 V garden strimmer with the data plate marked Class II and a 13 A plug. The PAT operator notices the moulded plug has a metal earth pin. This means:",
              options: {
                A: "The strimmer is misclassed — apply Class I tests",
                B: "The plug uses a metal earth pin to operate the BS 1363 socket shutter; the pin makes no connection inside the plug — Class II",
                C: "The plug is faulty",
                D: "The plug must be replaced with a 2-pin"
              },
              answer: "B",
              explanation: "Many Class II moulded plugs use a metal earth pin (sometimes sleeved) to operate the live/neutral shutter on the BS 1363 socket — but the pin is not internally wired. Confirm Class II via the data plate and apply Class II tests."
            },
            {
              number: 20,
              prompt: "An appliance Class is best confirmed by:",
              options: {
                A: "The colour of the moulded plug",
                B: "The data plate marking and the construction of the appliance — number of flex cores, presence/absence of earth bonding to accessible metal, and whether the symbol is single or double square",
                C: "The size of the fuse",
                D: "The age of the appliance"
              },
              answer: "B",
              explanation: "Don't guess Class from external features alone. Always check (i) the data plate symbol (double square = Class II), (ii) the flex (3-core suggests Class I; 2-core suggests Class II), and (iii) the internal earth bonding to accessible metal (Class I requires it)."
            }
          ]
        }
      ]
    },
    {
      id: "section-2",
      title: "Section 2 — Inspections & Tests",
      variants: [
        {
          id: "v1",
          questions: [
            {
              number: 1,
              prompt: "A combined inspection and test must always be preceded by:",
              options: {
                A: "Insulation resistance only",
                B: "A formal visual inspection — tests do not replace the visual",
                C: "An EICR",
                D: "Disposal of the appliance if more than 5 years old"
              },
              answer: "B",
              explanation: "The IET COP sequence is user check → formal visual inspection → combined inspection and test. The visual catches damaged flexes, cracked plugs, overheated mouldings and incorrect fuse ratings — many of which the electrical tests cannot detect."
            },
            {
              number: 2,
              prompt: "The earth-continuity test on a Class I appliance is typically applied at:",
              options: {
                A: "500 V DC at 200 mA from the same source as the IR test",
                B: "1000 V DC at a maximum of 25 A through the earth pin",
                C: "A low voltage with a test current ≥ 1.5 × the appliance's fuse rating (typically 200 mA soft or 10 A / 25 A hard)",
                D: "Mains voltage with the appliance switched on, monitoring earth-leakage current under live operating conditions"
              },
              answer: "C",
              explanation: "Earth continuity is a low-voltage, controlled-current test — most modern PAT instruments offer a 200 mA option (kinder to delicate earthed components like surge filters) and a higher-current option (10 A or 25 A) for robust kit. Pass criterion is typically ≤ 0.1 Ω + R, where R is the lead's calculated resistance."
            },
            {
              number: 3,
              prompt: "The insulation resistance test on a Class I appliance is typically applied at what test voltage and what minimum acceptance value?",
              options: {
                A: "250 V DC, ≥ 0.5 MΩ",
                B: "500 V DC, ≥ 1.0 MΩ for most appliances (≥ 0.3 MΩ for heating elements)",
                C: "1000 V DC, ≥ 0.5 MΩ",
                D: "230 V AC, ≥ 1.0 MΩ"
              },
              answer: "B",
              explanation: "500 V DC is the standard PAT IR test voltage, with a 1.0 MΩ minimum for most appliances. Heating-element loads can legitimately read lower (≥ 0.3 MΩ) when warm; IT equipment with surge filtration is tested at 250 V DC to avoid damaging the filter components."
            },
            {
              number: 4,
              prompt: "Which of the following tests should NOT be applied to a Class II appliance?",
              options: {
                A: "Formal visual inspection",
                B: "Earth continuity (there is no earth to test to)",
                C: "Insulation resistance",
                D: "Functional check"
              },
              answer: "B",
              explanation: "Class II equipment has no earthed conductive parts, so an earth-continuity test is meaningless. The relevant electrical test is insulation resistance (typically applied between the live conductors joined together and any accessible metalwork, often via a probe)."
            },
            {
              number: 5,
              prompt: "The order of activity for a competent person carrying out a combined inspection and test is:",
              options: {
                A: "Tests first, then visual inspection",
                B: "Formal visual inspection → tests (earth continuity / IR / polarity / functional)",
                C: "Functional test → visual",
                D: "IR → visual → earth continuity"
              },
              answer: "B",
              explanation: "Visual first, tests second. The visual confirms the appliance is fit to test (no obvious damage that would make tests unsafe or misleading); the tests then quantify the integrity of the protective system."
            },
            {
              number: 6,
              prompt: "Which test verifies that the live and neutral conductors are not transposed inside an appliance or its lead?",
              options: {
                A: "Earth continuity",
                B: "Insulation resistance",
                C: "Polarity",
                D: "Touch current"
              },
              answer: "C",
              explanation: "The polarity check verifies that L is connected to L and N to N from plug to appliance terminals. Reverse polarity in switched single-pole devices would leave the appliance live when 'off'. PAT instruments include a polarity check as part of the standard sequence."
            },
            {
              number: 7,
              prompt: "An IR test on an item containing surge protection should normally be carried out at:",
              options: {
                A: "500 V DC",
                B: "250 V DC — to avoid breaking down the surge protection components",
                C: "1000 V DC",
                D: "230 V AC"
              },
              answer: "B",
              explanation: "Surge protection devices and EMC filters can be damaged by 500 V DC tests or give a misleading low reading. The COP allows 250 V DC for these items, or alternative leakage / touch-current tests where IR is unsuitable."
            },
            {
              number: 8,
              prompt: "An earth continuity test on a Class I appliance reads 0.45 Ω with the lead theoretical resistance of 0.05 Ω. The result is:",
              options: {
                A: "Pass — well below 1 Ω",
                B: "Fail — exceeds 0.1 Ω above the calculated lead resistance",
                C: "Pass for hand-held only",
                D: "Pass if the appliance is over 30 m of flex"
              },
              answer: "B",
              explanation: "The COP allows 0.1 Ω above the calculated lead resistance for end-fitting/connection variability. 0.45 − 0.05 = 0.4 Ω of additional resistance is too much; investigate the earth termination at the plug and at the appliance end."
            },
            {
              number: 9,
              prompt: "A formal visual inspection reveals a cracked moulded plug case. The correct action is:",
              options: {
                A: "Carry out the electrical tests anyway and pass if values are good",
                B: "Fail the appliance — replace the plug with a compliant BS 1363 plug, then re-inspect and re-test before re-issue",
                C: "Apply a warning label and re-issue",
                D: "Reduce the fuse rating and re-issue"
              },
              answer: "B",
              explanation: "Visible damage means fail. The plug or appliance must be repaired (or replaced) before re-test. A cracked moulded case can expose live pins and is a clear safety risk regardless of the test values."
            },
            {
              number: 10,
              prompt: "The 'soft' (200 mA) earth continuity test is preferred over the 'hard' (25 A) test when:",
              options: {
                A: "The appliance has a long flex",
                B: "The appliance contains delicate components in the earth path (e.g. surge filters, EMC filters) that may be damaged by high test currents",
                C: "The appliance is Class II",
                D: "The flex has a very small CSA"
              },
              answer: "B",
              explanation: "200 mA soft test is gentler on earthed components like Y-capacitors and surge protectors. 10 A / 25 A 'hard' tests are appropriate for robust appliances where the high current can shake out poor connections that a soft test might not reveal."
            },
            {
              number: 11,
              prompt: "Polarity reversal in the supply lead of a Class I appliance is best detected by:",
              options: {
                A: "An earth continuity test only",
                B: "An IR test only",
                C: "The polarity check on the PAT instrument, or a continuity check from each plug pin to its corresponding appliance terminal",
                D: "A touch-current test"
              },
              answer: "C",
              explanation: "Polarity is confirmed by continuity from L pin to L terminal and N pin to N terminal. Most PAT instruments include this check. Reversed polarity is a real risk on rewireable plugs and a frequent finding."
            },
            {
              number: 12,
              prompt: "A functional check on a kettle includes:",
              options: {
                A: "Plugging it in and verifying it heats and the thermostat cuts out",
                B: "An earth-continuity check",
                C: "An IR check",
                D: "A polarity check"
              },
              answer: "A",
              explanation: "Functional check = does it work as intended. For a kettle: switch on, watch it boil, check the thermostat cuts the supply when boiling. Mechanical switches, lid latches, level cut-outs etc. all form part of the functional verification."
            },
            {
              number: 13,
              prompt: "A touch current (alternative leakage) test is appropriate when:",
              options: {
                A: "Standard IR at 500 V DC is unsuitable due to internal SPDs / EMC filters; the touch-current test is run with the appliance energised",
                B: "Class II equipment passes IR but fails earth continuity",
                C: "The lead is over 5 m",
                D: "The appliance is Class III"
              },
              answer: "A",
              explanation: "Touch / leakage current tests measure the current that would flow through the user under fault. Limits per the COP/IEC 60990 are 3.5 mA AC for AC-powered equipment and 5 mA DC for DC. Useful where SPD/EMC filters interfere with IR."
            },
            {
              number: 14,
              prompt: "The user check is:",
              options: {
                A: "A full instrumented test",
                B: "A brief visual inspection by the user before each use, requiring no instruments",
                C: "Only required for Class II equipment",
                D: "Carried out by the duty holder annually"
              },
              answer: "B",
              explanation: "User checks happen with every use and require no instruments — just looking for damaged flex, cracked plug, scorch marks, missing screws, loose grommet, or use in an unsuitable environment. Most cost-effective layer of in-service safety."
            },
            {
              number: 15,
              prompt: "An IR result on a Class I 2 kW heater under cold conditions reads 0.6 MΩ. According to the COP:",
              options: {
                A: "Fail — below 1 MΩ",
                B: "Pass — heating elements are allowed to read above 0.3 MΩ when warm; investigate further if cold and below 1 MΩ",
                C: "Pass — the standard IR limit is 0.3 MΩ for everything",
                D: "Investigate but do not fail unless an earth continuity is also poor"
              },
              answer: "B",
              explanation: "Heating elements have a higher inherent leakage path and the COP recognises this with a 0.3 MΩ threshold. For most appliances, 1 MΩ remains the everyday minimum. A heater reading 0.6 MΩ cold is within COP guidance for heating elements."
            },
            {
              number: 16,
              prompt: "A Class II IR test requires:",
              options: {
                A: "The probe placed on accessible metal parts, with the live conductors joined together, applied at 500 V DC",
                B: "An earth-continuity test instead",
                C: "A 25 A hard test",
                D: "A leakage test only"
              },
              answer: "A",
              explanation: "Class II appliances have no protective conductor, so the IR test is between the joined L+N at the plug and the accessible metalwork via the test probe at 500 V DC. Acceptance ≥ 2 MΩ for Class II."
            },
            {
              number: 17,
              prompt: "When testing a 3-core IEC mains lead set in isolation, the test sequence is:",
              options: {
                A: "Earth continuity → IR → polarity",
                B: "IR → earth continuity → polarity",
                C: "Polarity → IR → earth continuity",
                D: "Earth continuity only"
              },
              answer: "A",
              explanation: "Same sequence as for a Class I appliance: confirm earth path is intact (EC), then verify insulation between live cores and earth (IR), then verify L and N are correctly aligned end-to-end (polarity). Detachable lead sets get their own ID."
            },
            {
              number: 18,
              prompt: "A flex shows a small split in the outer sheath, exposing the cores intact. The PAT operator should:",
              options: {
                A: "Pass — only outer sheath",
                B: "Fail — sheath integrity is part of the construction; replace or repair the lead before re-test",
                C: "Pass and put a tape patch on it",
                D: "Apply a warning label only"
              },
              answer: "B",
              explanation: "The sheath is mechanical protection for the cores. Once breached, the cores are vulnerable to abrasion, moisture and crushing. Repair the lead (replace) before re-test — taping over is not a permitted repair."
            },
            {
              number: 19,
              prompt: "An RCD inline plug under test should trip within:",
              options: {
                A: "0.4 s when tested at the rated tripping current",
                B: "Generally within the time stated by the manufacturer (commonly within 200–300 ms at 1× IΔn for portable RCDs); always confirm against the device's rating and manufacturer's test data",
                C: "10 s",
                D: "Whatever Zs gives via Ohm's law"
              },
              answer: "B",
              explanation: "Portable RCDs are tested per the device's marked rating and the COP / manufacturer's recommended trip times. Many 30 mA portable RCDs trip in well under 200 ms at 1× IΔn. Always check the device's marked spec and apply the appropriate test."
            },
            {
              number: 20,
              prompt: "On a 13 A extension lead with multiple sockets, the IR test is applied:",
              options: {
                A: "Between L+N (joined) at the plug and earth at one socket",
                B: "Between L+N joined at the plug and the earth pin at the plug, and separately verified between L+N joined and the earth contacts at each outgoing socket",
                C: "Between L and N only",
                D: "Only on the plug"
              },
              answer: "B",
              explanation: "All earthed contacts in the extension lead's outgoing sockets must connect through to the plug earth pin AND must be insulated from the live conductors. Test the IR end-to-end and earth continuity at each socket if practicable."
            }
          ]
        },
        {
          id: "v2",
          questions: [
            {
              number: 1,
              prompt: "Which of the following is carried out first during in-service inspection and testing?",
              options: {
                A: "Earth continuity",
                B: "Formal visual inspection",
                C: "Polarity testing",
                D: "Insulation resistance"
              },
              answer: "B",
              explanation: "Always start with a thorough visual inspection — many faults (damaged cables, scorching, missing covers) are spotted before any electrical test. Tests come after the visual confirms the equipment is fit to test."
            },
            {
              number: 2,
              prompt: "An earth continuity test on a Class I appliance with 1.5 mm² flex 2 m long is being checked. Theoretical resistance ≈ 0.025 Ω. The maximum acceptable measured value is approximately:",
              options: {
                A: "0.025 Ω",
                B: "0.125 Ω (theoretical + 0.1 Ω allowance)",
                C: "0.5 Ω",
                D: "1.0 Ω"
              },
              answer: "B",
              explanation: "Acceptance = theoretical lead resistance + 0.1 Ω allowance for end-fittings/connections. 0.025 + 0.1 = 0.125 Ω. Measured values significantly higher than this suggest poor terminations rather than just cable resistance."
            },
            {
              number: 3,
              prompt: "On a Class II appliance with no accessible metal, the IR test is:",
              options: {
                A: "Carried out at 500 V DC between L+N and the plug earth pin",
                B: "Carried out at 500 V DC between L+N at the plug and any accessible metal via probe; if no accessible metal, the touch / leakage test or alternative method is used per the COP",
                C: "Skipped — no path",
                D: "Only carried out if the appliance is over 5 years old"
              },
              answer: "B",
              explanation: "If the Class II appliance has no accessible metal, the standard IR-via-probe test cannot be performed — the COP allows alternative tests (touch / leakage) that confirm insulation integrity through alternative routes."
            },
            {
              number: 4,
              prompt: "When measuring earth continuity at 25 A on a Class I extension lead, the operator should also:",
              options: {
                A: "Wear safety boots",
                B: "Flex the cable along its length to detect any intermittent broken strands or poor terminations",
                C: "Pour water on the lead",
                D: "Apply 500 V DC at the same time"
              },
              answer: "B",
              explanation: "Flexing the lead while testing reveals intermittent breakages — broken strands at the cord-grip will show as a sudden rise in resistance. The hard 25 A test is also better at detecting marginal connections that pass at 200 mA."
            },
            {
              number: 5,
              prompt: "A polarity check is essential because:",
              options: {
                A: "It changes the IR result",
                B: "Reverse polarity leaves a single-pole-switched appliance live when 'off' and energises components that should be at neutral potential",
                C: "It reduces the test current",
                D: "It checks the fuse"
              },
              answer: "B",
              explanation: "On equipment with single-pole switching (most BS 1363 appliances), the switch breaks the live only. Reverse polarity means the appliance is live even when 'off' — touching internal parts during maintenance becomes a shock risk."
            },
            {
              number: 6,
              prompt: "An IR test on an immersion heater reads 0.4 MΩ when the element has been recently used and is still warm. The result is:",
              options: {
                A: "Pass — within the 0.3 MΩ heating element threshold",
                B: "Fail — below 1 MΩ",
                C: "Cannot be tested when warm",
                D: "Pass only if Class II"
              },
              answer: "A",
              explanation: "Heating elements naturally show lower IR when warm; the COP recognises this with a 0.3 MΩ minimum for heating elements. 0.4 MΩ is within tolerance. Investigate further if it falls towards 0.3 MΩ over time."
            },
            {
              number: 7,
              prompt: "A formal visual inspection should include checking:",
              options: {
                A: "The IR value of the appliance",
                B: "The flex condition, plug top, cord-grip, casing, switches, controls, ventilation slots, scorch marks, fuse rating, and overall environment of use",
                C: "Only the flex and plug",
                D: "Only the data plate Class"
              },
              answer: "B",
              explanation: "Formal visual is comprehensive — flex (cuts, kinks, signs of overheating), plug (cracks, melted, correct fuse), cord-grip integrity, body damage, ventilation blockage, ambient suitability and any sign of misuse. Catch problems before electrical test."
            },
            {
              number: 8,
              prompt: "A 250 V DC IR test is the alternative test voltage. It is used:",
              options: {
                A: "Only on Class III equipment",
                B: "On Class I or II equipment containing surge protection devices, EMC filters or other voltage-sensitive components",
                C: "Only on appliances over 10 years old",
                D: "When the supply is 110 V"
              },
              answer: "B",
              explanation: "250 V DC avoids damaging or activating SPDs and similar voltage-sensitive parts. Common use cases: IT equipment, surge-protected extension leads, variable-speed drive controllers and any kit with elaborate EMC filtering."
            },
            {
              number: 9,
              prompt: "A user check (as defined by the COP) requires:",
              options: {
                A: "A calibrated PAT instrument",
                B: "No instruments — visual inspection by the user before each use, with reporting of any faults found",
                C: "An IR test only",
                D: "A signed certificate"
              },
              answer: "B",
              explanation: "User checks are the cheapest and most frequent layer of safety. No instruments — just look for visible damage, abnormal smell or sound, environment unsuitable, and report any concern to the duty holder before use."
            },
            {
              number: 10,
              prompt: "A Class I IR pass at 500 V DC requires the reading to be:",
              options: {
                A: "≥ 0.3 MΩ for any equipment",
                B: "≥ 1.0 MΩ for most equipment, or ≥ 0.3 MΩ for heating-element loads",
                C: "≥ 2.0 MΩ for any equipment",
                D: "≥ 250 kΩ for any equipment"
              },
              answer: "B",
              explanation: "1 MΩ is the COP general minimum. Heating elements may legitimately read down to 0.3 MΩ — the difference reflects normal operation, not a fault."
            },
            {
              number: 11,
              prompt: "A Class II IR pass at 500 V DC requires the reading to be:",
              options: {
                A: "≥ 1 MΩ",
                B: "≥ 2 MΩ — Class II relies on insulation alone, so the threshold is higher",
                C: "≥ 0.5 MΩ",
                D: "≥ 0.3 MΩ"
              },
              answer: "B",
              explanation: "Class II has no second line of defence (no earth), so the COP raises the IR threshold to ≥ 2 MΩ. Compromised double or reinforced insulation is the only failure mode that can lead to a shock."
            },
            {
              number: 12,
              prompt: "A combined inspection and test on a vacuum cleaner. Earth continuity reads 0.07 Ω; lead theoretical R = 0.05 Ω. The result is:",
              options: {
                A: "Fail — exceeds 0.05",
                B: "Pass — well within 0.1 Ω above theoretical",
                C: "Pass only if motor running",
                D: "Investigate the IR before deciding"
              },
              answer: "B",
              explanation: "0.07 − 0.05 = 0.02 Ω of additional resistance — comfortably within the 0.1 Ω allowance. The earth path is intact and the terminations are sound."
            },
            {
              number: 13,
              prompt: "Touch current measurement is taken between:",
              options: {
                A: "Earth and neutral on the appliance",
                B: "An accessible part of the appliance and earth, while the appliance is energised at normal operating voltage",
                C: "L and N at the plug",
                D: "L and earth at the plug"
              },
              answer: "B",
              explanation: "Touch current = the current that would flow through the user touching an accessible part. Limits: 3.5 mA AC for AC equipment, 5 mA DC for DC. Practical use: where IR at 500 V DC is unsuitable."
            },
            {
              number: 14,
              prompt: "A polarity reversal in an extension lead between the plug and the trailing socket would:",
              options: {
                A: "Cause the IR test to fail",
                B: "Pass IR but fail polarity — be detected by the polarity check, which compares L pin to L socket and N pin to N socket",
                C: "Cause an EC fail",
                D: "Cause a Touch-current fail"
              },
              answer: "B",
              explanation: "Reverse-polarity wiring still passes IR (insulation between L and N is fine) and EC (earth path is intact). The polarity check end-to-end specifically verifies that L and N reach the right contacts at the trailing socket."
            },
            {
              number: 15,
              prompt: "An IR result of 0.0 MΩ on a 500 V DC test indicates:",
              options: {
                A: "A perfect insulator",
                B: "A short circuit between live and the test reference (earth or accessible metal) — fail and investigate",
                C: "Pass — the lower the better",
                D: "An open earth"
              },
              answer: "B",
              explanation: "0 MΩ = direct path live-to-earth. The appliance is unsafe and must be withdrawn until the fault is found and rectified — common causes are wet equipment, broken insulation, or live conductor touching earthed metal."
            },
            {
              number: 16,
              prompt: "On a Class I appliance the EC test is taken between:",
              options: {
                A: "Earth pin of the plug and the metal heating element only",
                B: "Earth pin of the plug and each accessible exposed conductive part of the appliance",
                C: "Live pin of the plug and the case",
                D: "Neutral pin and the case"
              },
              answer: "B",
              explanation: "EC mimics the path the fault current would take. Test from the earth pin (the source of the protective bond at the user's end) to every accessible exposed conductive part (motor housing, frame, accessible screws on metal panels)."
            },
            {
              number: 17,
              prompt: "An old but mechanically sound flex with no visible damage suddenly fails IR. The most likely cause is:",
              options: {
                A: "Cable too short",
                B: "Internal moisture or insulation breakdown — possibly invisible from outside",
                C: "Wrong fuse rating",
                D: "Polarity reversal"
              },
              answer: "B",
              explanation: "Internal failures often leave no visible evidence. Moisture ingress, repeated thermal cycling and crushing can degrade insulation between cores. The IR test catches what the visual cannot."
            },
            {
              number: 18,
              prompt: "When inspecting a kitchen extractor fan, which test sequence is most appropriate?",
              options: {
                A: "Functional only",
                B: "Visual → EC (Class I) → IR at 500 V DC → polarity → functional",
                C: "IR → EC → polarity",
                D: "Polarity only"
              },
              answer: "B",
              explanation: "Standard Class I sequence: visual first, then EC, IR, polarity, and functional last (so the appliance is only powered up once you know it's safe to power up)."
            },
            {
              number: 19,
              prompt: "An IT engineer's PC with surge-protected power supply fails IR at 500 V DC with a reading of 0.5 MΩ. The next step is:",
              options: {
                A: "Withdraw the PC and dispose",
                B: "Re-test at 250 V DC; if still failing, investigate further. The 500 V test may have clamped the surge filter and given a misleading low reading",
                C: "Replace the PSU",
                D: "Increase the test voltage to 1000 V DC"
              },
              answer: "B",
              explanation: "Surge-protected equipment is the classic case for stepping the test voltage down to 250 V DC. The 500 V test can break down the SPD or activate it, giving a low reading that does not reflect the actual insulation integrity."
            },
            {
              number: 20,
              prompt: "A Class I appliance with detachable IEC C13 mains lead. Best test approach:",
              options: {
                A: "Test only with the lead attached, as one item",
                B: "Test the appliance and the detachable lead separately, each with its own ID and test record",
                C: "Test only the appliance",
                D: "Test only the lead"
              },
              answer: "B",
              explanation: "Detachable leads are interchangeable. Test the lead as Class I in its own right (EC, IR, polarity). Test the appliance with a known-good test lead from the test rig. Each gets its own ID and label."
            }
          ]
        },
        {
          id: "v3",
          questions: [
            {
              number: 1,
              prompt: "A Class II IR test reads 1.5 MΩ. The result is:",
              options: {
                A: "Pass — above 1 MΩ",
                B: "Fail — Class II requires ≥ 2 MΩ",
                C: "Pass with a warning",
                D: "Investigate at 1000 V DC"
              },
              answer: "B",
              explanation: "Class II requires ≥ 2 MΩ at 500 V DC. Fail and investigate the insulation. Class I is more lenient (1 MΩ general / 0.3 MΩ heating) because Class I has the redundant earth path; Class II has no second line of defence."
            },
            {
              number: 2,
              prompt: "Earth continuity is normally tested at:",
              options: {
                A: "230 V AC",
                B: "Either a soft test (≈ 200 mA at low voltage) or a hard test (10 A or 25 A at low voltage), depending on the appliance and on COP guidance",
                C: "1000 V DC",
                D: "500 V DC"
              },
              answer: "B",
              explanation: "EC is a low-voltage controlled-current test. Soft (200 mA) for delicate kit, hard (10–25 A) for robust kit. The choice is based on construction; both options pass when the path is sound and within tolerance."
            },
            {
              number: 3,
              prompt: "An IR test on a class I 230 V appliance is being applied with the appliance's switch in the 'off' position. The reading is artificially high because:",
              options: {
                A: "The IR test voltage is too low",
                B: "The single-pole switch breaks one conductor — the test does not see the section beyond the switch; turn the switch ON to test the whole circuit",
                C: "The fuse is blown",
                D: "The earth is open"
              },
              answer: "B",
              explanation: "Single-pole switches in BS 1363 appliances break only the live. With the switch off, the IR test sees the disconnected portion separately. Switch the appliance ON during IR so the full live-to-earth path is tested."
            },
            {
              number: 4,
              prompt: "An RCD plug or inline RCD is verified at:",
              options: {
                A: "Its rated tripping current — typically 30 mA — within the manufacturer's specified time",
                B: "Always 1 A test",
                C: "230 V continuously",
                D: "Touch current only"
              },
              answer: "A",
              explanation: "Portable RCDs are tested at their rated trip current. Confirm the device label (typically 30 mA), apply 1× IΔn and check the trip time matches the device specification. The COP gives recommended limits in the test annexes."
            },
            {
              number: 5,
              prompt: "When carrying out an IR test, the operator must always:",
              options: {
                A: "Wear gloves and safety boots only",
                B: "Ensure the appliance is unplugged from mains, switched on, and that no one is touching the equipment during the test",
                C: "Shut down the building supply",
                D: "Remove the appliance casing"
              },
              answer: "B",
              explanation: "Unplug from mains (so the test isn't fighting the supply), switch the appliance ON (so the whole circuit is in test), and clear the area (the 500 V DC source is shock-capable). PAT instruments interlock to prevent test if mains voltage is detected."
            },
            {
              number: 6,
              prompt: "A 13 A extension lead with 4 trailing sockets and a 1.25 mm² flex is being tested. The IR test should:",
              options: {
                A: "Apply 500 V DC between L+N joined at plug and the trailing earth contacts; verify ≥ 1 MΩ for the assembly",
                B: "Apply 230 V AC between L and N",
                C: "Skip IR if EC is good",
                D: "Use 1000 V DC"
              },
              answer: "A",
              explanation: "Standard 500 V DC IR — joined L+N to earth at the trailing sockets. Acceptance ≥ 1 MΩ for a Class I extension lead. EC is also tested, plug-pin to each trailing socket earth contact."
            },
            {
              number: 7,
              prompt: "An EC test on a long extension lead (15 m) reads 0.18 Ω. The theoretical lead resistance is 0.075 Ω. The result is:",
              options: {
                A: "Fail — over 0.1 Ω",
                B: "Pass — within 0.1 Ω above theoretical (0.18 − 0.075 = 0.105 Ω, marginal — should be investigated, particularly the cord-grip and termination)",
                C: "Pass with no concerns",
                D: "Investigate by re-testing at 1000 V DC"
              },
              answer: "B",
              explanation: "Marginal pass — the additional resistance is just outside the 0.1 Ω allowance. Re-seat the connections, flex the cable along its length, and re-test. The cord-grip or screw terminal may be the source of the extra resistance."
            },
            {
              number: 8,
              prompt: "A Class II appliance has accessible metal but the IR probe cannot reach all of it because of the design. The COP recommends:",
              options: {
                A: "Pass without IR",
                B: "Use the alternative touch / leakage test, or follow the manufacturer's specified test method",
                C: "Apply 500 V DC at the plug only",
                D: "Apply a Class I EC test"
              },
              answer: "B",
              explanation: "Where physical access to all accessible metal is impossible, the touch-current / leakage test is the practical alternative. It measures actual leakage from accessible parts at operating voltage. Limits per IEC 60990 and the COP."
            },
            {
              number: 9,
              prompt: "A 1.0 mm² 5 m flex on a Class I appliance has an EC theoretical resistance of approximately:",
              options: {
                A: "0.0975 Ω (≈ 19.5 mΩ/m × 5 m)",
                B: "1 Ω",
                C: "0.5 Ω",
                D: "10 mΩ"
              },
              answer: "A",
              explanation: "1.0 mm² copper flex has a tabulated resistance of ≈ 19.5 mΩ/m at 20 °C. 19.5 × 5 = 97.5 mΩ ≈ 0.0975 Ω. Pass criterion = 0.0975 + 0.1 = 0.1975 Ω."
            },
            {
              number: 10,
              prompt: "A 'compulsory' part of every formal visual inspection is checking:",
              options: {
                A: "The ID label and previous test results",
                B: "Cable, plug, cord-grip, casing, controls, environment, fuse rating and any signs of damage or overheating",
                C: "Just the cable",
                D: "Just the plug"
              },
              answer: "B",
              explanation: "Formal visual = comprehensive. Anything visible from outside is in scope: cable for cuts/kinks, plug for cracks/scorching, cord-grip integrity, casing damage, controls, environment, fuse rating, and any signs of distress."
            },
            {
              number: 11,
              prompt: "An RCD plug with a 'TEST' button on the casing is:",
              options: {
                A: "An adequate substitute for the calibrated PAT instrument RCD test",
                B: "A user mechanical test — useful as an in-service check but does NOT replace the calibrated trip-time measurement at 1× IΔn",
                C: "A leakage test only",
                D: "An EC test"
              },
              answer: "B",
              explanation: "The integral test button only proves the mechanism trips — not that it does so within the time the design requires. A calibrated PAT test at 1× IΔn (and sometimes 5× IΔn) confirms the trip time meets the device spec."
            },
            {
              number: 12,
              prompt: "A failed appliance is reissued without repair after a satisfactory re-visual. This practice is:",
              options: {
                A: "Acceptable if the previous fail was minor",
                B: "NOT acceptable — failed appliances must be withdrawn, repaired and re-tested before being re-issued",
                C: "Acceptable only for Class III",
                D: "Acceptable for two test cycles"
              },
              answer: "B",
              explanation: "A fail means the appliance is unsafe — visual or test fail. The COP requires repair (or replacement) and re-test before the appliance returns to service. Recording 'failed but in use' would be a major audit finding."
            },
            {
              number: 13,
              prompt: "An EC test current of 25 A is preferred when:",
              options: {
                A: "The appliance has surge protection",
                B: "The appliance is robust and the operator wants to verify the connection's mechanical integrity at fault-current scale",
                C: "The appliance is Class III",
                D: "Always — 25 A is more accurate"
              },
              answer: "B",
              explanation: "25 A 'hard' tests can shake loose marginal connections that pass at 200 mA. Useful on robust workshop kit, fixed appliances and any item where cord-grip or termination integrity is suspected. Avoid on delicate IT equipment."
            },
            {
              number: 14,
              prompt: "A laser printer with surge filtering and Y-capacitors fails IR at 500 V DC. The leakage current at 230 V is measured at 2.5 mA AC. This is:",
              options: {
                A: "Pass — below 3.5 mA AC limit",
                B: "Fail — 1 mA AC is the limit",
                C: "Fail — 0.5 mA AC is the limit",
                D: "Cannot determine without IR"
              },
              answer: "A",
              explanation: "IEC 60990 / COP — touch / leakage current limit is 3.5 mA RMS for AC equipment. 2.5 mA is within tolerance. Many IT items legitimately exceed the IR threshold at 500 V DC because of intentional Y-capacitor design — the leakage test is the more meaningful safety check."
            },
            {
              number: 15,
              prompt: "A polarity check on a 3-core IEC C13 lead verifies that:",
              options: {
                A: "L pin → L pin (at the C13 end), N pin → N pin, E pin → E pin",
                B: "All three pins are at earth potential",
                C: "Only L pin is correct",
                D: "Only the earth is correct"
              },
              answer: "A",
              explanation: "C13/C14 connectors have polarity — L, N and E in defined positions. The polarity check confirms the cable hasn't been miswired (which can happen on rewireable plugs after damage). Bad polarity can leave the appliance live when 'off'."
            },
            {
              number: 16,
              prompt: "An EC test using a soft 200 mA test on a Class I IT cabinet reads 1.0 Ω. Action:",
              options: {
                A: "Pass — under 2 Ω",
                B: "Investigate — typical Class I limit is around 0.1 Ω + theoretical lead R; 1.0 Ω is far in excess and indicates a poor connection or an unintended fault path",
                C: "Pass — Class I limit is 1 Ω",
                D: "Use a 500 V DC IR test instead"
              },
              answer: "B",
              explanation: "1 Ω is way over the COP's earth-continuity limit (0.1 Ω + theoretical lead R, typically a few hundred milliohms total). Investigate the cord-grip, the plug terminations, and the internal earth bonding. Don't pass an appliance that may not clear a fuse on fault."
            },
            {
              number: 17,
              prompt: "Functional checks on a power tool include verifying:",
              options: {
                A: "Only that the motor runs",
                B: "Switch operation, no-load speed, mechanical stability, brake operation (if fitted), guard fit, and absence of unusual noise / smell / smoke",
                C: "Only the brake",
                D: "Just the trigger"
              },
              answer: "B",
              explanation: "Functional check is a holistic 'does it work safely as designed' verification. Cover the active controls, operation under no load, mechanical stability and any sensory cues that indicate developing problems."
            },
            {
              number: 18,
              prompt: "A Class I appliance with a defective earth pin (mechanically loose at the plug) is found at the visual stage. The appliance:",
              options: {
                A: "Should be tested anyway and a 'caution' label applied",
                B: "Must be failed at the visual stage; the plug should be repaired or replaced before any electrical test",
                C: "Should be tested as Class II from now on",
                D: "Should be re-issued with a fuse downgrade"
              },
              answer: "B",
              explanation: "A defective earth pin compromises the entire Class I safety case. Repair (or replace the plug) before any electrical test — testing it as it stands is unsafe and the result has no meaning."
            },
            {
              number: 19,
              prompt: "An EC test should NOT be carried out on:",
              options: {
                A: "Class I appliances",
                B: "Class II appliances (no protective conductor)",
                C: "Class I detachable leads",
                D: "Class I extension leads"
              },
              answer: "B",
              explanation: "Class II equipment has no protective conductor — no path to test EC against. The relevant electrical test is IR (with the probe on accessible metal). EC on Class II is technically meaningless."
            },
            {
              number: 20,
              prompt: "An IR test that reads OL (overload / open) on a calibrated PAT instrument indicates:",
              options: {
                A: "Fail — the resistance is zero",
                B: "Pass — the resistance is above the instrument's range, i.e. excellent insulation",
                C: "Cable error",
                D: "Polarity error"
              },
              answer: "B",
              explanation: "OL or open-circuit on an IR test means the resistance exceeds the instrument's range — typically > 200 MΩ or > 999 MΩ depending on the instrument. That is excellent insulation. Don't confuse OL with a connection fault."
            }
          ]
        },
        {
          id: "v4",
          questions: [
            {
              number: 1,
              prompt: "The test sequence for Class I appliances is:",
              options: {
                A: "IR → EC → polarity → functional",
                B: "Visual → EC → IR → polarity → functional",
                C: "Polarity → EC → IR → visual",
                D: "Functional → IR → EC"
              },
              answer: "B",
              explanation: "Standard COP sequence: visual confirms the appliance is fit to test, EC confirms the earth path, IR confirms the insulation, polarity confirms the cores are correctly aligned, and functional confirms the appliance works safely as intended."
            },
            {
              number: 2,
              prompt: "An IR test on a Class I 3 kW kettle reads 1.5 MΩ when cold. The result is:",
              options: {
                A: "Fail — below 2 MΩ",
                B: "Pass — above 1 MΩ general threshold (heating-element 0.3 MΩ rule applies when warm; cold reading should be on the higher side)",
                C: "Pass with no further action",
                D: "Fail — below 5 MΩ"
              },
              answer: "B",
              explanation: "1.5 MΩ exceeds the 1 MΩ general minimum. Heating elements show lower IR when warm (0.3 MΩ allowance), but a cold reading of 1.5 MΩ is acceptable — record and monitor over future tests."
            },
            {
              number: 3,
              prompt: "A flexible cable on a Class I extension lead has a measured EC resistance of 0.3 Ω. The lead is 15 m long with 1.0 mm² CSA. Theoretical resistance ≈ 0.293 Ω. The result is:",
              options: {
                A: "Fail — exceeds 0.1 Ω limit",
                B: "Pass — measured 0.3 Ω is within 0.1 Ω of the theoretical 0.293 Ω; the long flex naturally has a higher EC reading",
                C: "Fail — extensions should be < 0.1 Ω",
                D: "Pass only if Class II"
              },
              answer: "B",
              explanation: "EC pass criterion is THEORETICAL + 0.1 Ω, not 0.1 Ω absolute. A 15 m 1.0 mm² lead has an inherent CSA × length resistance the operator must calculate first. 0.3 − 0.293 = 0.007 Ω of additional resistance — comfortably within tolerance."
            },
            {
              number: 4,
              prompt: "A Class II IR test should be conducted with the appliance switch:",
              options: {
                A: "Off — to protect the test circuit",
                B: "On — so the live conductors and the entire internal circuit are included in the test",
                C: "In whichever position the appliance was in",
                D: "Removed"
              },
              answer: "B",
              explanation: "Switch ON during IR so the test sees both sides of the switch. With the switch off, the internal section beyond the switch is not in the test path and the result is incomplete."
            },
            {
              number: 5,
              prompt: "When testing a Class I appliance, the EC test current must:",
              options: {
                A: "Always be 25 A",
                B: "Be at least 1.5 × the appliance's plug-fuse rating, or as specified by the COP for the chosen test mode (200 mA soft, or 10/25 A hard)",
                C: "Always be 100 mA",
                D: "Be 230 V AC"
              },
              answer: "B",
              explanation: "EC is a controlled-current test. Low-current 'soft' tests at 200 mA suit delicate kit. Higher 'hard' tests at 10 A or 25 A apply for robust kit. The COP and the instrument manufacturer between them set the choice."
            },
            {
              number: 6,
              prompt: "A formal visual inspection should also confirm:",
              options: {
                A: "The fuse is the correct rating for the appliance and flex CSA",
                B: "Only that the appliance is plugged in",
                C: "Only the data plate Class",
                D: "Only the IR result"
              },
              answer: "A",
              explanation: "Wrong fuse = wrong protection. Visual confirmation that the fuse rating matches both the appliance current and the flex CSA is essential. 0.75 mm² flex caps at 6 A; 1.0 mm² at 10 A; 1.25 mm² and above at 13 A. Recheck after every appliance fuse replacement."
            },
            {
              number: 7,
              prompt: "An RCD plug top trip test at the rated 30 mA is best run with:",
              options: {
                A: "The supply switch in the off position",
                B: "Live and reset, the trip current applied via the PAT instrument's RCD test mode, with the plug under load matching its rated current where appropriate",
                C: "An IR test in parallel",
                D: "Removed from the load"
              },
              answer: "B",
              explanation: "RCD test functions on PAT instruments inject the rated trip current and measure the trip time. Run the test with the appliance live and energised. Verify trip time against the device spec; reset the RCD afterwards."
            },
            {
              number: 8,
              prompt: "An IR test result of 0.0 MΩ on a Class I PC. The most likely cause is:",
              options: {
                A: "Surge filter clamping at 500 V DC test voltage",
                B: "Direct short circuit between live and earth — withdraw and investigate",
                C: "Open earth pin",
                D: "Polarity reversal"
              },
              answer: "B",
              explanation: "0 MΩ = direct short. Withdraw the PC immediately and investigate. The 250 V DC retest may show whether the surge filter is the cause (a higher reading at 250 V suggests SPD activation), but 0.0 MΩ is fail until proven otherwise."
            },
            {
              number: 9,
              prompt: "A 'pass' label on an item should as a minimum show:",
              options: {
                A: "The PAT class number, the IET COP table reference for the equipment, and the tester's qualification level",
                B: "The test date, the recorded earth-continuity reading and the recorded insulation-resistance value",
                C: "A unique appliance ID, the test date, the next test due date (where the duty holder has chosen to display it), the tester's identity, and the pass result",
                D: "The duty holder's company name, the location of use, and the manufacturer's serial and model numbers"
              },
              answer: "C",
              explanation: "The label is the visible part of the record. It must let a user immediately verify that the item has been tested and identify which record in the register it corresponds to. Some duty holders omit the 'next due' date so users don't keep using kit past its next scheduled test."
            },
            {
              number: 10,
              prompt: "An EC test using the 25 A 'hard' test mode is not appropriate for:",
              options: {
                A: "Mobile space heaters",
                B: "Office IT equipment with surge filtering — the 25 A current can damage delicate components in the earth path",
                C: "Workshop power tools",
                D: "Construction-site lights"
              },
              answer: "B",
              explanation: "Hard tests at 10 A or 25 A are too aggressive for delicate IT/electronic kit. Use the 200 mA soft test for IT, surge-protected leads, computer monitors and similar. Robust mechanical kit (heaters, drills, kettles) handles the hard test fine."
            },
            {
              number: 11,
              prompt: "A polarity test on a moulded plug verifies:",
              options: {
                A: "That the plug is BS 1363",
                B: "That L pin connects to L core, N pin connects to N core, and E pin connects to E core (where applicable) — i.e. no transposition",
                C: "That the plug is fused",
                D: "That the plug is earthed"
              },
              answer: "B",
              explanation: "Polarity check confirms cores haven't been transposed. Reversed polarity (L↔N) on a single-pole-switched appliance leaves it live when 'off' — a clear shock risk during maintenance. The PAT instrument confirms polarity end-to-end."
            },
            {
              number: 12,
              prompt: "An RCD inline plug under test trips at 30 mA but takes 350 ms. The COP and most manufacturer specs:",
              options: {
                A: "Pass — under 1 second",
                B: "Investigate / fail — typical RCD trip time at 1× IΔn for a portable RCD is well under 200 ms; 350 ms is on the high side and may not match the device's marked rating",
                C: "Pass — under 5 seconds",
                D: "Pass without further action"
              },
              answer: "B",
              explanation: "Most portable RCDs trip well within 200 ms at 1× IΔn. 350 ms is sluggish and outside the marked spec for many devices. Compare the measured time against the marked / manufacturer's rated time and fail if outside specification."
            },
            {
              number: 13,
              prompt: "A Class II appliance with no accessible metal — the IR test:",
              options: {
                A: "Apply 500 V DC at L+N joined to plug earth pin",
                B: "Apply 500 V DC at L+N joined to a probe placed on the body via the IR-probe test path; if no accessible metal exists, the COP allows alternative leakage / touch tests",
                C: "Cannot be carried out — pass on visual",
                D: "Apply 230 V AC"
              },
              answer: "B",
              explanation: "Where there is no accessible metal, the standard probe approach won't work. The COP allows the touch / leakage test as an alternative — it measures actual current that could flow through the user touching the casing, regardless of probe contact."
            },
            {
              number: 14,
              prompt: "A heater element IR test at 500 V DC reads 0.25 MΩ when warm. The result is:",
              options: {
                A: "Pass — heating elements may read down to 0.3 MΩ when warm",
                B: "Fail — below 0.3 MΩ minimum for heating elements",
                C: "Pass for any element",
                D: "Pass only if Class II"
              },
              answer: "B",
              explanation: "0.25 MΩ < 0.3 MΩ minimum for heating elements. Fail and investigate — internal moisture, deteriorated insulation, or end-of-life element are the usual causes. Don't pass marginal readings."
            },
            {
              number: 15,
              prompt: "An IR test on a fault-free 3-core IEC lead set should read:",
              options: {
                A: "0 MΩ — short between cores is acceptable",
                B: "OL or > 200 MΩ — proving the cores are properly insulated from each other and from earth",
                C: "10 MΩ exactly",
                D: "1 MΩ exactly"
              },
              answer: "B",
              explanation: "Fault-free leads should test at the instrument's open-circuit limit (typically OL or > 200 MΩ). Anything below 1 MΩ on a Class I lead, or below 2 MΩ on a Class II lead, indicates degraded insulation. Investigate and discard if confirmed."
            },
            {
              number: 16,
              prompt: "An EC test on a Class I appliance with internal surge protection should usually use:",
              options: {
                A: "25 A hard test",
                B: "200 mA soft test — to avoid stressing the surge filter components in the earth path",
                C: "100 A test",
                D: "1000 V DC"
              },
              answer: "B",
              explanation: "200 mA soft test is appropriate for delicate kit including surge-protected items. Hard tests can damage Y-capacitors and the EMC filter. Save 25 A for robust kit (drills, heaters) where the higher current shakes out poor connections."
            },
            {
              number: 17,
              prompt: "Polarity reversal in a single-pole-switched Class I extension lead is detected by:",
              options: {
                A: "EC test",
                B: "IR test",
                C: "The PAT instrument's polarity check, end-to-end from plug to outgoing socket",
                D: "Fuse rating check"
              },
              answer: "C",
              explanation: "EC and IR don't detect L/N reversal. The polarity check verifies that L at the plug pin maps to L at the trailing socket (and N to N). The PAT instrument runs this automatically as part of the full test sequence."
            },
            {
              number: 18,
              prompt: "An IR test should be carried out:",
              options: {
                A: "Before the EC test",
                B: "After the EC test",
                C: "Either order is acceptable per the COP — the visual must come first, but the order of EC vs IR is operator preference",
                D: "Never on Class I appliances"
              },
              answer: "C",
              explanation: "The COP specifies visual first, then the electrical tests in any sensible sequence. Most operators do EC then IR then polarity then functional, but order between EC and IR isn't fixed."
            },
            {
              number: 19,
              prompt: "A faulty cord-grip on a flex is best detected by:",
              options: {
                A: "An IR test",
                B: "Visual inspection (cord is loose, sheath is pulled back, conductors visible) plus pulling firmly on the flex to verify mechanical retention",
                C: "Polarity check",
                D: "EC test only"
              },
              answer: "B",
              explanation: "Cord-grip failures are a mechanical problem, not an electrical one. Visual + a firm but controlled tug on the flex (away from the appliance) verifies the cord-grip holds. A loose grip means the conductors take the strain and fail next."
            },
            {
              number: 20,
              prompt: "A Class I floor polisher fails IR at 500 V DC with 0.3 MΩ. The next reasonable action is:",
              options: {
                A: "Apply a 'caution' label and re-issue",
                B: "Investigate the cause — common candidates are damp ingress in the motor, contaminated brushgear, or degraded windings; clean / dry the appliance and re-test, or fail and refer for repair",
                C: "Reduce the fuse rating",
                D: "Re-test at 1000 V DC"
              },
              answer: "B",
              explanation: "Failed IR is not just a number — it's a symptom. Common floor-polisher causes are damp from cleaning, dust contamination on commutators, or motor winding insulation failure. Dry / clean, re-test; if still failing, refer for repair before re-issue."
            }
          ]
        },
        {
          id: "v5",
          questions: [
            {
              number: 1,
              prompt: "An EC test result for a Class I appliance with theoretical lead resistance R = 0.06 Ω. The maximum acceptable measured value is approximately:",
              options: {
                A: "0.06 Ω — exact match",
                B: "0.16 Ω — theoretical + 0.1 Ω allowance for end-fittings and connections",
                C: "0.5 Ω",
                D: "1.0 Ω"
              },
              answer: "B",
              explanation: "EC pass = theoretical R + 0.1 Ω. The 0.1 Ω allowance covers end-fittings (plug terminations, internal earth bonds). 0.06 + 0.1 = 0.16 Ω. Anything above suggests a poor termination, not just cable resistance."
            },
            {
              number: 2,
              prompt: "Which of the following does the IR test NOT identify?",
              options: {
                A: "A short between live and earth",
                B: "Degraded insulation between live conductors and earth",
                C: "A polarity reversal in a single-pole-switched appliance",
                D: "A live-to-accessible-metal fault path"
              },
              answer: "C",
              explanation: "Polarity reversal still passes IR (insulation is intact). The polarity check identifies L↔N transposition. Don't rely on IR alone — run polarity as part of the full sequence."
            },
            {
              number: 3,
              prompt: "An RCD inline plug test at 30 mA shows a trip time of 80 ms. The result is:",
              options: {
                A: "Pass — well within typical 200 ms manufacturer limit at 1× IΔn",
                B: "Fail — must be 0 ms",
                C: "Pass only if Class II",
                D: "Investigate"
              },
              answer: "A",
              explanation: "80 ms at 1× IΔn is comfortably within most portable RCD manufacturer specs (which typically allow up to ~200 ms). Confirm against the marked spec; pass if within."
            },
            {
              number: 4,
              prompt: "A Class II IR test passes at 4 MΩ on a power tool. The result is:",
              options: {
                A: "Pass — exceeds the 2 MΩ Class II minimum",
                B: "Fail — below 5 MΩ",
                C: "Pass only if hand-held",
                D: "Investigate"
              },
              answer: "A",
              explanation: "4 MΩ comfortably exceeds the 2 MΩ Class II minimum. The double or reinforced insulation is intact. Record the value and proceed with polarity / functional checks."
            },
            {
              number: 5,
              prompt: "The COP recognises which three categories of inspection and test?",
              options: {
                A: "User check, formal visual inspection, combined inspection and test",
                B: "Visual, IR, EC",
                C: "Initial, periodic, terminal",
                D: "Class I, Class II, Class III"
              },
              answer: "A",
              explanation: "Three-tier COP regime: (1) user check before each use, (2) formal visual inspection by a competent person, (3) combined inspection and test (visual + electrical tests). All three layers contribute to the safety case."
            },
            {
              number: 6,
              prompt: "An IR test on a 230 V Class I appliance with the appliance switch OFF reads 200 MΩ. The most likely interpretation is:",
              options: {
                A: "Pass — excellent insulation",
                B: "Misleading — the off-switch breaks the live so part of the internal circuit isn't in the test path; switch the appliance ON to test the entire L+N to earth path",
                C: "Fail — switch is broken",
                D: "Pass only if Class II"
              },
              answer: "B",
              explanation: "Off-switch breaks the live before the appliance load. The test sees only the supply lead, not the appliance windings. Switch ON during IR so the full circuit (motor windings, heater elements, switches in the closed position) is in the test path."
            },
            {
              number: 7,
              prompt: "A 1.5 mm² 10 m extension lead has a theoretical EC resistance of approximately:",
              options: {
                A: "0.13 Ω (≈ 13 mΩ/m × 10 m)",
                B: "1 Ω",
                C: "0.5 Ω",
                D: "0.025 Ω"
              },
              answer: "A",
              explanation: "1.5 mm² copper flex ≈ 13 mΩ/m at 20 °C. 13 × 10 = 130 mΩ ≈ 0.13 Ω. EC pass criterion = 0.13 + 0.1 = 0.23 Ω."
            },
            {
              number: 8,
              prompt: "A Class I appliance fails EC with a measured reading 0.5 Ω. Theoretical R for the lead is 0.05 Ω. Most likely cause:",
              options: {
                A: "Lead is too short",
                B: "Poor termination at the plug or appliance end — investigate the cord-grip, screw terminals, or internal earth bonding",
                C: "IR is failing",
                D: "Polarity reversal"
              },
              answer: "B",
              explanation: "0.5 − 0.05 = 0.45 Ω of additional resistance — far beyond the 0.1 Ω allowance. Tighten or remake terminations, then re-test. If the appliance has been recently dropped or the cord-grip is loose, the connections are the most likely source."
            },
            {
              number: 9,
              prompt: "A formal visual inspection on an extension lead must include:",
              options: {
                A: "The plug only",
                B: "Plug, flex along its length, the trailing-socket body, the cord-grip at both ends, and any RCD or surge module integrity (where fitted)",
                C: "Flex only",
                D: "The pass label only"
              },
              answer: "B",
              explanation: "Cover the lead end-to-end. Trailing sockets get cracked, RCD modules can fail, sheath gets cut, plug pins overheat, cord-grips loosen. Visual is comprehensive — anything visible is in scope."
            },
            {
              number: 10,
              prompt: "An IR test at 250 V DC instead of 500 V DC is appropriate for:",
              options: {
                A: "Heating elements only",
                B: "IT equipment, surge-protected leads, Class I equipment with elaborate EMC filters and equipment containing surge protection devices that would be activated or damaged by a 500 V DC test",
                C: "Class III equipment only",
                D: "Construction-site lights"
              },
              answer: "B",
              explanation: "250 V DC avoids damaging or activating SPDs and EMC components. Use it on IT kit, surge leads, VSDs and any equipment where the manufacturer specifies a lower test voltage."
            },
            {
              number: 11,
              prompt: "An RCD test at 5× IΔn is used to verify:",
              options: {
                A: "The standard trip time at the rated current",
                B: "The fast-trip threshold — typically required to clear within 40 ms at 5× IΔn for type AC general-purpose RCDs",
                C: "The polarity",
                D: "The IR"
              },
              answer: "B",
              explanation: "5× IΔn tests the device's behaviour under significant fault current — fast-trip operation. For type AC RCDs the typical limit is 40 ms. The 1× test confirms the threshold; the 5× test confirms speed under fault."
            },
            {
              number: 12,
              prompt: "An IR test on a 230 V Class I commercial dishwasher reads 1.2 MΩ when warm. The result is:",
              options: {
                A: "Pass — comfortably above 1 MΩ general minimum",
                B: "Fail — below 2 MΩ",
                C: "Pass only if Class II",
                D: "Investigate further"
              },
              answer: "A",
              explanation: "1.2 MΩ exceeds the 1 MΩ general minimum and the 0.3 MΩ heating-element minimum. Pass and record. Monitor the trend across future tests for any downward drift."
            },
            {
              number: 13,
              prompt: "When functional-checking a fan heater, the operator should verify:",
              options: {
                A: "Only that the heating element warms",
                B: "Both the fan AND the heater operate, the thermal cut-out resets after cooling, and any tilt-safety switch operates correctly",
                C: "Only the thermostat",
                D: "Only the LED indicator"
              },
              answer: "B",
              explanation: "Functional check covers all the protective and intended functions. Fan must blow, element must heat, thermal cut-out resets, tilt switch trips when tipped over. Any failure means refer for repair, not pass."
            },
            {
              number: 14,
              prompt: "An EC test on a Class I extension lead with multiple sockets is taken between:",
              options: {
                A: "The plug earth pin and one of the trailing socket earth pins, then repeated for each remaining trailing socket",
                B: "Just the plug",
                C: "Just one socket",
                D: "Live and neutral"
              },
              answer: "A",
              explanation: "Each trailing socket has an earth contact that must connect through to the plug earth pin. Test from the plug pin to each trailing socket earth — verify all paths individually. Failure on one socket alone is enough to fail the lead."
            },
            {
              number: 15,
              prompt: "An IR test reading of 1.8 MΩ on a Class II hand-held drill. The result is:",
              options: {
                A: "Pass — above 1 MΩ",
                B: "Fail — Class II minimum is 2 MΩ; 1.8 MΩ is below threshold",
                C: "Pass only if Class III",
                D: "Pass with no further action"
              },
              answer: "B",
              explanation: "Class II requires ≥ 2 MΩ. 1.8 MΩ is just below — fail. Investigate moisture, dust contamination, or any sign that the double / reinforced insulation system is compromised."
            },
            {
              number: 16,
              prompt: "Which test detects a broken protective conductor inside a Class I supply lead?",
              options: {
                A: "IR test",
                B: "Earth continuity test",
                C: "Polarity test",
                D: "Functional check"
              },
              answer: "B",
              explanation: "EC measures the resistance of the protective conductor from plug pin to appliance metal. A broken core shows as 'OL' or very high resistance — fail. Polarity and IR don't probe the earth path."
            },
            {
              number: 17,
              prompt: "A tester should NOT carry out a hard 25 A EC test on:",
              options: {
                A: "Stainless-steel kettles",
                B: "Office IT equipment, photocopiers, anything with surge filtering or sensitive earth-path components",
                C: "Workshop drills",
                D: "Construction-site transformers"
              },
              answer: "B",
              explanation: "25 A through the earth path can stress Y-capacitors, EMC filter chokes and surge devices. Use 200 mA soft test for delicate kit. Hard test is appropriate for robust mechanical equipment with simple earth paths."
            },
            {
              number: 18,
              prompt: "An appliance fails IR. The PAT operator should:",
              options: {
                A: "Pass it with a warning",
                B: "Withdraw the appliance from service, label as failed, and refer for investigation/repair before any further use",
                C: "Reduce the fuse rating",
                D: "Re-test in a year"
              },
              answer: "B",
              explanation: "Failed IR means insulation is degraded — a shock risk. Withdraw, label fail, and refer. The COP requires repair (or disposal) before re-test. Letting it stay in service with a label is a known audit finding."
            },
            {
              number: 19,
              prompt: "A formal visual inspection alone (without electrical tests) is appropriate when:",
              options: {
                A: "The appliance is brand new and being put into service for the first time",
                B: "The COP recommends a 'formal visual only' interval for the equipment type and environment, typically as the in-between phase between full combined tests",
                C: "Only on Class III equipment",
                D: "Whenever the operator is short of time"
              },
              answer: "B",
              explanation: "The COP allows formal visual inspections at shorter intervals than the full combined inspection + test. This catches mechanical damage and overheating before the next full electrical test cycle. Both feed the same risk-based regime."
            },
            {
              number: 20,
              prompt: "An RCD plug test at 1× IΔn shows the device does NOT trip. The result is:",
              options: {
                A: "Pass — RCDs aren't required to trip at 1× IΔn",
                B: "Fail — the RCD is not operational at its rated tripping current; withdraw and replace",
                C: "Pass — try again later",
                D: "Pass — do a 5× test instead"
              },
              answer: "B",
              explanation: "An RCD that does NOT trip at 1× IΔn (its rated tripping current) is a fail. The device is non-operational and unsafe — a fault would not be cleared by it. Withdraw, replace and re-test the assembly."
            }
          ]
        }
      ]
    },
    {
      id: "section-3",
      title: "Section 3 — Records, Intervals & Legal Driver",
      variants: [
        {
          id: "v1",
          questions: [
            {
              number: 1,
              prompt: "The legal driver requiring an employer to maintain electrical equipment in a safe condition is principally:",
              options: {
                A: "BS 7671 alone, which sets out the technical requirements for both fixed and in-service electrical equipment",
                B: "PUWER 1998 alone, which already covers all electrical aspects of in-service equipment maintenance and inspection",
                C: "The Electricity at Work Regulations 1989 (especially Reg 4(2)) supported by HSWA 1974",
                D: "RIDDOR 2013, which mandates inspection following any reportable electrical incident or near-miss involving equipment"
              },
              answer: "C",
              explanation: "Reg 4(2) of EAWR 1989 requires that systems be maintained so as to prevent danger so far as is reasonably practicable. PUWER and HSWA reinforce this in the broader work-equipment context. There is no statute that mandates 'PAT testing' by name — what is mandated is the outcome (safe equipment), and PAT is the recognised means of evidencing it."
            },
            {
              number: 2,
              prompt: "Who decides the inspection and test intervals for in-service equipment?",
              options: {
                A: "The HSE prescribes fixed maximum intervals in HSG107 that every duty holder must apply",
                B: "The duty holder (typically the employer), based on equipment type, environment, frequency of use and previous test history",
                C: "The IET Code of Practice, which sets a mandatory interval for each equipment class that overrides any local risk assessment",
                D: "The competent person carrying out the test, using their professional judgement at the point of inspection"
              },
              answer: "B",
              explanation: "Intervals are risk-based, not legally fixed. The IET COP gives recommended starting intervals (e.g. 6 months for Class I handheld in industrial use; 4 years for stationary IT in a low-risk office) which the duty holder may shorten or lengthen based on the actual incidence of failure and environment."
            },
            {
              number: 3,
              prompt: "A pass label on a tested item should as a minimum show:",
              options: {
                A: "The PAT class number, the IET COP table reference for the equipment, and the tester's qualification level",
                B: "The test date, the recorded earth-continuity reading and the recorded insulation-resistance value",
                C: "A unique appliance ID, the test date, the next test due date (where the duty holder has chosen to display it), the tester's identity, and the pass result",
                D: "The duty holder's company name, the location of use, and the manufacturer's serial and model numbers"
              },
              answer: "C",
              explanation: "The label is the visible part of the record. It must let a user immediately verify that the item has been tested and identify which record in the register it corresponds to. Some duty holders omit the 'next due' date so users don't keep using kit past its next scheduled test."
            },
            {
              number: 4,
              prompt: "A user-check is best described as:",
              options: {
                A: "A full formal test by a competent person",
                B: "A brief look by the user before each use — checking the flex, plug, casing and surroundings — with no test instrument involved",
                C: "An insulation resistance test only",
                D: "A test only required if the item has previously failed"
              },
              answer: "B",
              explanation: "User checks happen with every use and require no instruments — just looking for damaged flex, cracked plug, scorch marks, missing screws, loose grommet, or use in an unsuitable environment (wet, hot, in tension). They are the most frequent and most cost-effective layer of in-service safety."
            },
            {
              number: 5,
              prompt: "Which Code of Practice model form would be used to record a combined inspection and test?",
              options: {
                A: "Form 4.4 (repair register)",
                B: "Form 4.1 (inventory)",
                C: "Form 4.2 (formal visual only)",
                D: "Form 4.3 (combined inspection and test)"
              },
              answer: "D",
              explanation: "COP 5th Edition model forms: 4.1 inventory, 4.2 formal visual only, 4.3 combined inspection and test (visual + test results), 4.4 repair register. Use 4.3 for the full electrical test with values."
            },
            {
              number: 6,
              prompt: "Which factor would NOT influence the recommended initial interval for inspection and testing?",
              options: {
                A: "Frequency of use",
                B: "The environment",
                C: "The fixed wiring RCD trip time",
                D: "Previous test history"
              },
              answer: "C",
              explanation: "The trip time of the supply RCD has no bearing on how often a portable appliance needs visual checks or tests. Use, environment and history are the three drivers in COP Table 7.1, plus equipment type and Class."
            },
            {
              number: 7,
              prompt: "A 'pass' record kept by the duty holder must include:",
              options: {
                A: "The colour of the appliance",
                B: "The unique appliance ID, test date, test results (where applicable), tester identity, and the action taken (pass / repair / dispose)",
                C: "Only the test date",
                D: "Only the tester's name"
              },
              answer: "B",
              explanation: "The record is the audit trail for EAWR Reg 4(2). It must let the duty holder demonstrate that the appliance was inspected and tested, by whom, with what result. The COP sample forms set out the minimum content."
            },
            {
              number: 8,
              prompt: "A 'level 2' competent person under the COP is:",
              options: {
                A: "A user only",
                B: "A non-electrically-skilled person who has had appropriate training to carry out formal visual inspections AND combined inspection and test",
                C: "A qualified electrician only",
                D: "A first-aid trained person only"
              },
              answer: "B",
              explanation: "COP Appendix VII competency framework: Level 1 = user check; Level 2 = formal visual + combined inspection and test by a non-electrical person who has had appropriate training; Level 3 = electrically skilled person."
            },
            {
              number: 9,
              prompt: "A duty holder records ALL formal visual inspections, including those that pass. This practice is:",
              options: {
                A: "Excessive — only failures need recording",
                B: "Correct — formal visual results are recorded whether satisfactory or unsatisfactory; demonstrates the maintenance regime",
                C: "Required only for Class I equipment",
                D: "Required only on appliances over 5 years old"
              },
              answer: "B",
              explanation: "Formal visual inspections are formally recorded — pass or fail — to demonstrate the duty holder's maintenance regime. User checks are different (only faults reported), but formal visuals are always logged."
            },
            {
              number: 10,
              prompt: "An appliance is logged on Form 4.1 (inventory) but has never been tested. The duty holder should:",
              options: {
                A: "Pass it without testing",
                B: "Carry out the formal visual + combined test on first issue, record the baseline, and label",
                C: "Wait until the appliance fails before any record",
                D: "Test only after a year of service"
              },
              answer: "B",
              explanation: "New equipment receives a formal visual + combined inspection on first issue to set the baseline, give it an ID and an inventory entry. Future tests compare against this record. Don't put kit into service without a baseline."
            },
            {
              number: 11,
              prompt: "The HSE document HSG107 is:",
              options: {
                A: "Construction site electrical safety",
                B: "Maintaining portable and transportable electrical equipment — risk-based guidance for duty holders",
                C: "Test probes and leads",
                D: "RIDDOR reporting"
              },
              answer: "B",
              explanation: "HSG107 is the HSE's risk-based guidance for maintaining portable and transportable electrical equipment. It complements the IET COP. INDG236 is the simplified employer summary. HSG141 is construction sites; GS38 is test leads."
            },
            {
              number: 12,
              prompt: "The HSE leaflet INDG236 is aimed at:",
              options: {
                A: "Manufacturers",
                B: "Employers — a simplified summary on maintaining portable equipment, supporting the duty holder's risk assessment",
                C: "End users",
                D: "Local authorities only"
              },
              answer: "B",
              explanation: "INDG236 is the employer-focused leaflet — short, accessible, and aimed at duty holders. Read alongside HSG107 for the full picture. Together they describe the risk-based approach the HSE expects."
            },
            {
              number: 13,
              prompt: "A landlord supplying electrical equipment as part of a tenancy must comply with which regulation to ensure safety on first supply?",
              options: {
                A: "WEEE Regulations",
                B: "BS 7671",
                C: "The Electrical Equipment (Safety) Regulations 2016",
                D: "The Housing Act"
              },
              answer: "C",
              explanation: "Electrical Equipment (Safety) Regulations 2016 require electrical equipment supplied to comply with safety standards. BS 7671 is the wiring rules, WEEE is end-of-life recycling, and the Housing Act covers wider tenant duties."
            },
            {
              number: 14,
              prompt: "An employer subject to EAWR 1989 must ensure that:",
              options: {
                A: "All equipment is PAT tested every 6 months",
                B: "Systems and equipment are maintained so as to prevent danger, so far as is reasonably practicable",
                C: "All equipment is replaced every 5 years",
                D: "All equipment is tested only by an electrician"
              },
              answer: "B",
              explanation: "EAWR Reg 4(2) is the headline duty. The means is risk-based — what's reasonably practicable depends on the kit, the environment, the use and the cost of the controls relative to the risk reduction. PAT is the standard means."
            },
            {
              number: 15,
              prompt: "A user check requires:",
              options: {
                A: "A test certificate",
                B: "No record on a pass — only faults are reported by the user to the duty holder",
                C: "A signed record on each check",
                D: "An IR test"
              },
              answer: "B",
              explanation: "User checks are quick, frequent and cost-effective. Recording every check would defeat the point. Only faults are reported — by the user to the duty holder, who then withdraws and tests / repairs the item."
            },
            {
              number: 16,
              prompt: "An appliance label that reads 'PAT-tested' but has no date and no ID is:",
              options: {
                A: "Sufficient for the COP record",
                B: "Insufficient — no date, no ID, no traceability to a record",
                C: "A pass for visual inspection only",
                D: "A pass for IR only"
              },
              answer: "B",
              explanation: "Labels need ID + date + tester at minimum. Without these, the label cannot be tied back to a register entry. The auditor cannot verify the appliance was tested at all. Best practice: ID, date, tester initials, pass status."
            },
            {
              number: 17,
              prompt: "Records of inspections and tests should be kept:",
              options: {
                A: "Forever",
                B: "For the lifetime of the equipment, allowing trend analysis and demonstrating ongoing compliance",
                C: "Only for the current tax year",
                D: "Only until the equipment is replaced"
              },
              answer: "B",
              explanation: "Lifetime records support trend analysis (catches a slow degradation in IR, for example) and demonstrate ongoing compliance with EAWR Reg 4(2). Bin them only when the equipment is genuinely retired and the audit window has closed."
            },
            {
              number: 18,
              prompt: "Which document is referenced by both the IET COP and HSG107?",
              options: {
                A: "Building Regs Part P",
                B: "EAWR 1989 — the legal duty for safe maintenance",
                C: "RIDDOR 2013",
                D: "Health and Safety (Display Screen Equipment) Regs 1992"
              },
              answer: "B",
              explanation: "EAWR 1989 is the underlying legal driver. Both the COP and HSG107 are tools the duty holder uses to comply with EAWR Reg 4(2). Without EAWR there would be no statutory backbone."
            },
            {
              number: 19,
              prompt: "A duty holder cannot evidence inspection / test of any equipment after a workplace incident. The most likely outcome is:",
              options: {
                A: "No consequences",
                B: "Investigation under EAWR / HSWA — the absence of records is evidence that the maintenance duty under Reg 4(2) hasn't been demonstrated",
                C: "A small civil claim only",
                D: "Reissue of the equipment"
              },
              answer: "B",
              explanation: "EAWR Reg 4(2) requires that maintenance be demonstrable. Records are the evidence. Without them, the HSE's investigation defaults to 'no maintenance demonstrated' and the duty holder may face enforcement action under HSWA."
            },
            {
              number: 20,
              prompt: "Equipment in low-risk office use (e.g. desktop PC) typically has a recommended initial test interval of:",
              options: {
                A: "1 month",
                B: "Up to 4 years (formal visual at shorter intervals)",
                C: "1 week",
                D: "Daily"
              },
              answer: "B",
              explanation: "COP Table 7.1 recommends up to 4 years for stationary IT in a low-risk environment. Formal visuals between full tests (e.g. 2 yearly) keep mechanical damage in scope. The duty holder may shorten or lengthen based on risk."
            }
          ]
        },
        {
          id: "v2",
          questions: [
            {
              number: 1,
              prompt: "Which of the following is NOT a piece of legislation directly underpinning the duty to maintain in-service electrical equipment?",
              options: {
                A: "HSWA 1974",
                B: "EAWR 1989",
                C: "PUWER 1998",
                D: "The 'Portable Appliance Testing Act' — there is no such Act"
              },
              answer: "D",
              explanation: "There is no 'PAT Act'. The legal duty comes from HSWA, EAWR and PUWER. PAT is the recognised industry method of evidencing compliance, not a statutory test in its own right."
            },
            {
              number: 2,
              prompt: "What basic requirement demonstrates that a maintenance regime exists within an organisation?",
              options: {
                A: "A kitemark logo on the company letterhead",
                B: "The invoices from the inspection and testing contractor",
                C: "The records of inspections and tests",
                D: "PAT stickers on all appliances"
              },
              answer: "C",
              explanation: "The records demonstrate the duty holder is meeting EAWR Reg 4(2) — maintaining the equipment in safe condition. Stickers and invoices alone don't show what was inspected, when, or what failed."
            },
            {
              number: 3,
              prompt: "Frequency of inspection and testing for a Class I mobile appliance in a commercial kitchen is typically:",
              options: {
                A: "Combined inspection & test every 12 months, formal visual every 6 months",
                B: "Combined inspection & test every 4 years",
                C: "Combined inspection & test every 5 years",
                D: "No specified timescales"
              },
              answer: "A",
              explanation: "COP Table 7.1 — commercial kitchen mobile Class I: combined inspection & test every 12 months, formal visual inspection every 6 months. The kitchen environment (heat, water, grease) drives a tighter regime than office equipment."
            },
            {
              number: 4,
              prompt: "Records and labels should at minimum include:",
              options: {
                A: "An ID, the test date, and confirmation of pass; plus tester ID for traceability",
                B: "Only the make and model",
                C: "Only the IR reading",
                D: "Only the next-due date"
              },
              answer: "A",
              explanation: "Minimum content: appliance ID (links the label to the register), test date, pass status, and tester ID. The COP sample forms cover all of this. Optional 'next due' date helps user awareness."
            },
            {
              number: 5,
              prompt: "An employer's duty under HSWA 1974 to maintain plant and equipment is owed to:",
              options: {
                A: "Only employees",
                B: "Employees and any other person who may be affected by the work activity (visitors, contractors, members of the public)",
                C: "Only customers",
                D: "Only the appointed safety officer"
              },
              answer: "B",
              explanation: "HSWA Section 2 covers employees; Section 3 covers others affected by the work. Both require the employer to ensure safety so far as is reasonably practicable. PAT records support this duty for portable electrical equipment."
            },
            {
              number: 6,
              prompt: "An IET COP Table reference for 'office equipment, low-risk environment, Class II' would typically suggest:",
              options: {
                A: "Combined inspection & test daily",
                B: "Combined inspection & test up to 4 years, formal visuals at shorter intervals",
                C: "No inspection ever",
                D: "Combined inspection & test weekly"
              },
              answer: "B",
              explanation: "Class II office kit in low-risk environments has long recommended intervals — up to 4 years for the combined test, with formal visuals between (e.g. 2 yearly). Always treated as a STARTING POINT — adjust on risk and history."
            },
            {
              number: 7,
              prompt: "A formal visual inspection (without electrical test) is appropriate when the COP / risk assessment recommends:",
              options: {
                A: "An interim check between full electrical tests, to catch mechanical damage and overheating between cycles",
                B: "Only on Class III equipment",
                C: "Only on hand-held drills",
                D: "Only on extension leads"
              },
              answer: "A",
              explanation: "Formal visuals are the in-between layer. Cheaper than the full electrical test, but more thorough than the user check. Pick up cord-grip damage, scorch marks, hairline plug cracks, etc. The records support the maintenance regime."
            },
            {
              number: 8,
              prompt: "Repair register Form 4.4 contains:",
              options: {
                A: "The IR test values for every appliance",
                B: "Each appliance that has been failed and the action taken (repaired / replaced / removed from service), to show closure of every fail",
                C: "The next-due test date",
                D: "Only the tester's pay rate"
              },
              answer: "B",
              explanation: "Form 4.4 closes the loop on every fail. Without it, fails could disappear from the system and re-issue without action. Auditors look for fails on Form 4.3 cross-referenced to action on Form 4.4."
            },
            {
              number: 9,
              prompt: "A 'test interval' the IET COP recommends should be treated as:",
              options: {
                A: "A legal maximum",
                B: "A starting point — the duty holder may shorten or lengthen based on equipment type, environment, use and history",
                C: "An unchangeable manufacturer rule",
                D: "Only a guideline for Class I"
              },
              answer: "B",
              explanation: "The COP intervals are recommendations. The duty holder must apply judgement: a kettle in a builder's site cabin may need tighter intervals than the table; a copier in a low-traffic office may need longer. Risk-based, not rule-based."
            },
            {
              number: 10,
              prompt: "Documents required for a typical PAT regime audit by the HSE include:",
              options: {
                A: "Only the latest test report",
                B: "Inventory (Form 4.1), test records (Form 4.3), formal visual records (Form 4.2 if applicable), repair register (Form 4.4), instrument calibration records, and competency evidence for testers",
                C: "Only Form 4.3",
                D: "Only the tester's CV"
              },
              answer: "B",
              explanation: "A complete audit picture covers all the COP records (4.1–4.4), instrument traceability (calibration), and tester competency. The HSE looks at the system, not just one document."
            },
            {
              number: 11,
              prompt: "A test instrument record sheet in the COP requires:",
              options: {
                A: "Instrument type, model, serial number, date of last calibration",
                B: "Instrument cost",
                C: "Calibration laboratory contact only",
                D: "Operator's home address"
              },
              answer: "A",
              explanation: "COP sample form: type, model, serial and date of last calibration — that lets you trace the test back to a known calibration baseline. Date-of-next-calibration is helpful for scheduling but isn't the audit trail."
            },
            {
              number: 12,
              prompt: "An appliance 'failed' under PAT should be:",
              options: {
                A: "Returned to service with a warning label",
                B: "Withdrawn, labelled fail, recorded in the register, and either repaired (and re-tested) or replaced",
                C: "Tested again the following week",
                D: "Logged but kept in use"
              },
              answer: "B",
              explanation: "Fail = unsafe. Withdraw, label, record, repair (or replace), re-test. The COP repair register (Form 4.4) closes the loop. A label-only-warning solution is not a permitted approach."
            },
            {
              number: 13,
              prompt: "User-checks — the most frequent layer of the regime — should be carried out:",
              options: {
                A: "By a competent electrician at every shift",
                B: "By the user, briefly and visually, before each use",
                C: "By the duty holder once a year",
                D: "By the manufacturer"
              },
              answer: "B",
              explanation: "User checks happen before each use, take seconds, require no instruments. They catch most failures early — damaged flex, cracked plug, melted casing — and remove the equipment from use before more formal checks are due."
            },
            {
              number: 14,
              prompt: "Why are records important?",
              options: {
                A: "Because the COP requires them for trade association membership",
                B: "Because they evidence the duty holder's compliance with EAWR Reg 4(2) and support trend analysis on individual appliances",
                C: "Because the manufacturer requires them",
                D: "Because they reduce the appliance's tax value"
              },
              answer: "B",
              explanation: "Records are both the audit trail (EAWR compliance) and the analytical basis for adjusting intervals (trend analysis on IR drift, repeat fails, etc.). The COP forms structure the records so they actually support both purposes."
            },
            {
              number: 15,
              prompt: "A duty holder's risk assessment for PAT must consider:",
              options: {
                A: "Only the appliance manufacturer's recommendations",
                B: "Equipment type, Class, environment, frequency of use, history of faults, and any specific risk factors (e.g. wet, hot, abrasive locations)",
                C: "Only the appliance age",
                D: "Only the cost of testing"
              },
              answer: "B",
              explanation: "Risk assessment drives the regime. Type and Class set the baseline; environment / use / history adjust it. Specific risks (water exposure, mechanical abrasion, heat) tighten the intervals further. The COP table is a starting point."
            },
            {
              number: 16,
              prompt: "An IET COP recommended interval for Class I hand-held tools in industrial use is typically:",
              options: {
                A: "Combined inspection & test every 6 months",
                B: "Combined inspection & test every 5 years",
                C: "Daily",
                D: "Annually"
              },
              answer: "A",
              explanation: "COP Table 7.1 — Class I hand-held in industrial use: combined inspection & test every 6 months, formal visuals at 1 month or as the duty holder determines. The flex stress and rough environment shorten the cycle."
            },
            {
              number: 17,
              prompt: "An employer purchases new equipment. The first formal action under the COP is:",
              options: {
                A: "Wait for the first scheduled test interval",
                B: "Carry out a formal visual inspection (and combined test where appropriate) on first issue, log the appliance on the inventory and label it",
                C: "Test only after the warranty period",
                D: "Test only if a fault is reported"
              },
              answer: "B",
              explanation: "First-issue formal inspection (and test) sets the baseline, gives the appliance an ID, logs it, and labels it. Future tests compare against the baseline. Don't put kit into service without it."
            },
            {
              number: 18,
              prompt: "Which COP form is used for inventory?",
              options: {
                A: "Form 4.4 — repair register",
                B: "Form 4.1 — inventory of equipment",
                C: "Form 4.2 — formal visual only",
                D: "Form 4.3 — combined test"
              },
              answer: "B",
              explanation: "COP 5th Edition: Form 4.1 lists the equipment with ID, location, type and Class. Form 4.2 records formal visual inspections. Form 4.3 records combined inspection and test (with values). Form 4.4 is the repair register."
            },
            {
              number: 19,
              prompt: "EAWR Reg 4(2) requires:",
              options: {
                A: "PAT testing every 12 months on all equipment",
                B: "All systems shall be maintained so as to prevent, so far as is reasonably practicable, danger",
                C: "All equipment to be replaced every 5 years",
                D: "All testing to be done by an electrician"
              },
              answer: "B",
              explanation: "Reg 4(2) is the maintenance duty — outcome-based (prevent danger), measured against 'reasonably practicable'. PAT is the standard means of evidencing the maintenance is happening, but the regulation does not specify how the duty must be discharged."
            },
            {
              number: 20,
              prompt: "A duty holder's records show one appliance with three failed IR tests over 18 months. The reasonable response is:",
              options: {
                A: "Continue testing at the same interval",
                B: "Investigate the underlying cause (environment, use, repeat fault), shorten the interval, or replace the appliance",
                C: "Issue more 'pass' labels",
                D: "Skip the next test"
              },
              answer: "B",
              explanation: "Repeat fails on the same appliance signal an underlying problem. The duty holder must respond — shorten the interval, change the environment of use, or replace the kit. That's the COP's risk-based regime working as intended."
            }
          ]
        },
        {
          id: "v3",
          questions: [
            {
              number: 1,
              prompt: "The Health and Safety at Work etc. Act 1974 places general duties on:",
              options: {
                A: "Only the duty holder",
                B: "Employers, employees and the self-employed — covering both employees and others affected by the work",
                C: "Only employees",
                D: "Only manufacturers"
              },
              answer: "B",
              explanation: "HSWA covers Sections 2 (employer to employee), 3 (employer to others), 7 (employee to others) and self-employed duties. PAT records are part of the broader duty to prevent danger from electrical equipment."
            },
            {
              number: 2,
              prompt: "Some aspects of a fixed installation, when noticed, should be recorded or discussed with the owner. Which of these would NOT lead to a recommendation that the installation itself should be inspected?",
              options: {
                A: "Red and black cores in the fixed wiring",
                B: "No adequate means of earthing",
                C: "Condition of socket outlets",
                D: "Limited or no RCD protection"
              },
              answer: "A",
              explanation: "Old red/black cable colours are not a defect on their own — installations on the older harmonised colours are perfectly safe if maintained. The other three are genuine safety concerns that warrant a fixed-wiring EICR."
            },
            {
              number: 3,
              prompt: "An appliance test record (Form 4.3) typically records:",
              options: {
                A: "The make and model only",
                B: "Appliance ID, make/model, Class, EC value, IR value, polarity, RCD trip time (if applicable), tester ID, date, pass/fail",
                C: "The IR value only",
                D: "Just the date"
              },
              answer: "B",
              explanation: "Form 4.3 captures everything needed to evidence the test: ID, classification, all test values, tester, date and outcome. Without the values you can't show the appliance passed by criteria, only that the operator said it did."
            },
            {
              number: 4,
              prompt: "The HSE document HSG141 covers:",
              options: {
                A: "Test probes and leads",
                B: "Electrical safety on construction sites",
                C: "PAT testing in offices",
                D: "Reporting electrical incidents"
              },
              answer: "B",
              explanation: "HSG141 — Electrical safety on construction sites. GS38 is test probes/leads, INDG236 is maintaining portable equipment summary leaflet, HSG107 is maintaining portable & transportable equipment (the predecessor of the current PAT COP)."
            },
            {
              number: 5,
              prompt: "An IET COP recommended interval for Class II stationary office equipment in a low-risk environment is typically:",
              options: {
                A: "1 month",
                B: "Up to 4 years (combined test) with formal visuals at shorter intervals",
                C: "Weekly",
                D: "Daily"
              },
              answer: "B",
              explanation: "Office stationary kit (printers, photocopiers, monitors) on Class II construction in a clean indoor environment can run up to 4 years between full tests. Formal visuals between catch mechanical damage. Risk-based — adjust if environment or fault history changes."
            },
            {
              number: 6,
              prompt: "Records of inspection and test records should be:",
              options: {
                A: "Stored only by the testing contractor",
                B: "Held by the duty holder for the lifetime of the equipment, retained for trend analysis and audit",
                C: "Destroyed after each cycle",
                D: "Held only as paper"
              },
              answer: "B",
              explanation: "The duty holder owns the records. They must be available to the HSE, available for trend analysis, and held for the lifetime of the kit. Whether paper or electronic doesn't matter; accessibility and integrity does."
            },
            {
              number: 7,
              prompt: "A 'competent person' under the COP for combined inspection and test is:",
              options: {
                A: "Anyone who has watched the test instrument's introductory video",
                B: "A person with appropriate training, knowledge and experience to recognise dangers, use the test instruments correctly, and interpret the results",
                C: "Only an electrician with NVQ Level 3",
                D: "The user"
              },
              answer: "B",
              explanation: "Competence = training + knowledge + experience. The COP Appendix VII gives the framework. Level 1 is user; Level 2 is the trained inspector/tester; Level 3 is the electrically skilled person. Combined test is typically Level 2 or higher."
            },
            {
              number: 8,
              prompt: "An employer's risk assessment under PUWER 1998 considers:",
              options: {
                A: "Only the supply voltage",
                B: "The work equipment's suitability for the task, the conditions of use, the maintenance regime and the user's training",
                C: "Only the equipment cost",
                D: "Only the manufacturer's nameplate"
              },
              answer: "B",
              explanation: "PUWER 1998 covers work equipment more broadly. Maintenance is one of the core duties. The PAT regime supports compliance for the electrical equipment subset, but PUWER also covers mechanical guarding, training, signage and so on."
            },
            {
              number: 9,
              prompt: "The 'reasonably practicable' test in HSWA / EAWR balances:",
              options: {
                A: "The cost of the controls against the residual risk after they are applied",
                B: "Only the cost of the equipment",
                C: "Only the manufacturer's profit margin",
                D: "Only the operator's wages"
              },
              answer: "A",
              explanation: "'Reasonably practicable' is established in case law (Edwards v National Coal Board). The duty holder weighs the time, cost and effort of additional controls against the risk reduction they would deliver. Modest costs to address significant risks are reasonable; disproportionate costs to address trivial risks are not required."
            },
            {
              number: 10,
              prompt: "A duty holder uses an asset management database for PAT records instead of paper Form 4.3. The records are:",
              options: {
                A: "Not acceptable — paper only",
                B: "Acceptable provided the system captures the same minimum data and is accessible to auditors",
                C: "Acceptable only for Class II",
                D: "Acceptable only if printed and signed"
              },
              answer: "B",
              explanation: "The COP doesn't mandate paper. Electronic records are widely used and acceptable provided they capture the same minimum data, are tamper-evident or version-controlled, and are accessible (with the equipment) for inspection and audit."
            },
            {
              number: 11,
              prompt: "User-checks, formal visual inspections and combined inspection and tests together form:",
              options: {
                A: "A redundant regime",
                B: "A three-tier safety regime — each layer catches different fault modes at different frequencies and cost levels",
                C: "An optional regime for Class II only",
                D: "A regime mandated by BS 7671"
              },
              answer: "B",
              explanation: "User checks: frequent, free, catches obvious damage. Formal visuals: medium frequency, low cost, catches mechanical issues an instrument wouldn't. Combined test: low frequency, higher cost, catches insulation/earth-path degradation. Together they cover the failure space."
            },
            {
              number: 12,
              prompt: "A typical COP-recommended formal visual interval for Class I hand-held in industrial use is:",
              options: {
                A: "Daily",
                B: "1 month",
                C: "12 months",
                D: "5 years"
              },
              answer: "B",
              explanation: "Class I hand-held in industry: 1-month formal visual + 6-month combined test is a common recommendation. The flex sees daily stress; the visual catches developing problems before the next full test."
            },
            {
              number: 13,
              prompt: "An employee using an obviously damaged appliance has duties under HSWA Section 7. They must:",
              options: {
                A: "Continue using it to keep production going",
                B: "Take reasonable care for their own safety and that of others — withdraw the equipment from use and report the fault",
                C: "Repair the equipment themselves",
                D: "Mark it 'okay' and continue"
              },
              answer: "B",
              explanation: "HSWA Section 7 covers employee duties. Reasonable care + cooperation with the employer's safety arrangements. Continuing to use damaged kit, or failing to report, is a breach. The user-check regime depends on this duty being discharged."
            },
            {
              number: 14,
              prompt: "An IET COP form 4.2 records:",
              options: {
                A: "Inventory only",
                B: "Formal visual inspection results — without the electrical test values",
                C: "Combined inspection and test with values",
                D: "Repair register"
              },
              answer: "B",
              explanation: "Form 4.2 is the formal-visual record. It captures the appliance ID, the visual findings, the date and the inspector. No electrical values because no electrical test was performed at this stage."
            },
            {
              number: 15,
              prompt: "An auditor visiting a workplace looks for evidence of:",
              options: {
                A: "Only stickers on the appliances",
                B: "An inventory, test records, fail/repair closure, instrument calibration, competency evidence, and a documented risk assessment driving the regime",
                C: "Only the latest test result",
                D: "Only the manufacturer's manuals"
              },
              answer: "B",
              explanation: "An audit checks the system, not just the artefacts. Stickers without records mean nothing. Records without calibration trace mean unreliable values. Competency without evidence means an unverifiable test. The full chain matters."
            },
            {
              number: 16,
              prompt: "A duty holder's records show no failed appliances over 5 years on a Class II office population. The reasonable response is:",
              options: {
                A: "Stop testing entirely",
                B: "Consider lengthening the interval — a stable, low-fault-rate population in a low-risk environment supports longer intervals (the duty holder's risk assessment can document the change)",
                C: "Tighten the interval to monthly",
                D: "Replace all the equipment"
              },
              answer: "B",
              explanation: "The COP regime is risk-based — adjust intervals based on actual fault rate. A clean population in low-risk use supports longer intervals (within the COP guidance and reason). Document the rationale in the risk assessment."
            },
            {
              number: 17,
              prompt: "An IET COP test instrument used for PAT should be:",
              options: {
                A: "Calibrated annually (or at the manufacturer's recommended interval), with the calibration certificate available for audit",
                B: "Calibrated only if the operator suspects it is faulty",
                C: "Tested by the user before each use only",
                D: "Calibrated every 5 years"
              },
              answer: "A",
              explanation: "Annual calibration is standard practice and supports test traceability. Without calibration the test values cannot be relied on and the audit chain breaks. Keep the certificate; record the instrument's serial on every test (Form 4.3)."
            },
            {
              number: 18,
              prompt: "An IET COP recommended interval for fixed equipment in a normal environment is typically:",
              options: {
                A: "Every 5 years (combined inspection & test) supplemented by visuals",
                B: "Every month",
                C: "Daily",
                D: "Weekly"
              },
              answer: "A",
              explanation: "Fixed equipment is rarely handled, so wear is low. The COP allows long combined test intervals (5 years is typical for fixed kit in low-risk environments). The fixed installation EICR also covers some of the same ground."
            },
            {
              number: 19,
              prompt: "A duty holder's risk assessment must be:",
              options: {
                A: "Updated only after an incident",
                B: "Reviewed regularly and following any significant change (new equipment, change of environment, repeat faults), with the regime adjusted accordingly",
                C: "Done once when the regime is set up and never revisited",
                D: "Done only in the contracted PAT visit"
              },
              answer: "B",
              explanation: "Risk assessments are living documents. Equipment changes, environments change, fault history evolves. Review at least annually, or whenever a significant change occurs. Update the regime to match."
            },
            {
              number: 20,
              prompt: "A 'pass' label dated 2 years ago on an appliance with a 1-year recommended interval is:",
              options: {
                A: "Acceptable — pass labels never expire",
                B: "Overdue — refer to the duty holder, withdraw from use until re-tested or document the basis for the extended interval",
                C: "Acceptable for another 6 months",
                D: "A fail"
              },
              answer: "B",
              explanation: "The 'next due' date matters. If the regime was 12-month and the label is 24 months old, the appliance is overdue. Withdraw, retest, or document a reason for the extension in the risk assessment."
            }
          ]
        },
        {
          id: "v4",
          questions: [
            {
              number: 1,
              prompt: "EAWR 1989 covers voltages:",
              options: {
                A: "From a torch battery to high-voltage transmission equipment — there is no voltage limit",
                B: "Only above 230 V",
                C: "Only ELV battery-powered items",
                D: "Only domestic supplies"
              },
              answer: "A",
              explanation: "EAWR has no voltage limits — it applies from a torch battery up to the National Grid 400 kV equipment. Anyone arguing 'it's only ELV so EAWR doesn't apply' is wrong."
            },
            {
              number: 2,
              prompt: "The legal duty for the maintenance of electrical systems is in:",
              options: {
                A: "BS 7671 Section 134",
                B: "EAWR 1989 Reg 4(2) — supplemented by HSWA 1974 and PUWER 1998",
                C: "RIDDOR 2013",
                D: "Health and Safety (First Aid) Regs"
              },
              answer: "B",
              explanation: "EAWR 4(2) is the statutory duty. PAT is the recognised industry method, but it isn't the law itself — the law requires the maintenance outcome (no danger, so far as is reasonably practicable)."
            },
            {
              number: 3,
              prompt: "An IET COP recommended interval for a Class I mobile vacuum cleaner in office cleaning use is typically:",
              options: {
                A: "Combined inspection & test every 12 months, formal visual every 6 months",
                B: "Daily",
                C: "Weekly",
                D: "Every 5 years"
              },
              answer: "A",
              explanation: "Mobile cleaning equipment in office use: 12-month combined test, 6-month formal visual is a typical COP recommendation. Mobile kit sees flex stress every shift; the regime catches developing damage before failure."
            },
            {
              number: 4,
              prompt: "Records of inspection and test must be:",
              options: {
                A: "Stored locally with the appliance only",
                B: "Available to the duty holder, the testers and any auditor (HSE inspector, insurer); held in a way that supports trend analysis",
                C: "Kept only in paper form",
                D: "Shared on social media"
              },
              answer: "B",
              explanation: "The records support EAWR Reg 4(2) compliance, audit, insurance, and the duty holder's own risk-based regime. Accessibility to the right people, integrity over time and structure that supports analysis are the requirements."
            },
            {
              number: 5,
              prompt: "An employer purchasing second-hand electrical equipment is responsible for:",
              options: {
                A: "Trusting the previous owner's PAT records",
                B: "Carrying out a new formal visual + combined inspection and test on first issue, regardless of any previous records",
                C: "Skipping testing for a year",
                D: "Doing nothing — the seller's responsibility"
              },
              answer: "B",
              explanation: "Don't trust records from a previous owner. The duty holder's regime starts when the equipment enters their custody — formal initial inspection on first issue, log on inventory, label, and proceed with the chosen interval."
            },
            {
              number: 6,
              prompt: "An IET COP recommended interval may be shortened by the duty holder when:",
              options: {
                A: "The cost of testing is too low",
                B: "The environment is more onerous than the COP table assumed (wet, hot, dusty, abrasive, vibrating), or the appliance is showing repeat faults",
                C: "Only Class II is in use",
                D: "Whenever the operator wishes"
              },
              answer: "B",
              explanation: "The COP intervals assume typical conditions. Onerous environments shorten the interval; benign environments and good fault history may lengthen it. Risk-based, documented in the risk assessment."
            },
            {
              number: 7,
              prompt: "An IET COP-compliant pass label removes:",
              options: {
                A: "All future inspection requirements",
                B: "Nothing — it is the visible part of the record and indicates the appliance's last test status; ongoing user checks and future inspections are still required",
                C: "Only user checks",
                D: "Only formal visuals"
              },
              answer: "B",
              explanation: "A pass label is a snapshot, not a permanent immunity. The user check still happens before each use; the formal visual / combined test still happens at the next interval. The label confirms the last result and identifies the record."
            },
            {
              number: 8,
              prompt: "A failed appliance with the cord-grip pulled out should be:",
              options: {
                A: "Repaired (replace plug or repair cord-grip), re-inspected and re-tested before re-issue, with the repair recorded on Form 4.4",
                B: "Re-issued with a 'caution' label",
                C: "Tested again the same day with no repair",
                D: "Disposed of without record"
              },
              answer: "A",
              explanation: "Repair → re-inspect → re-test → record the closure on the repair register (Form 4.4). The closed-loop process ensures fails don't drift back into service unrepaired. Documentation matters as much as the repair itself."
            },
            {
              number: 9,
              prompt: "An IET COP recommended interval for Class I mobile equipment in commercial kitchens is typically:",
              options: {
                A: "Combined inspection & test every 12 months, formal visual every 6 months",
                B: "5 years",
                C: "Daily",
                D: "Never required"
              },
              answer: "A",
              explanation: "Commercial kitchen mobile Class I: 12-month combined test, 6-month formal visual. Heat, water, grease and rough handling drive a tighter regime than a typical office. Adjust if the environment is even more demanding (e.g. high-volume restaurant)."
            },
            {
              number: 10,
              prompt: "A duty holder must keep PAT records for:",
              options: {
                A: "Just one year",
                B: "The lifetime of the equipment, supporting trend analysis and audit",
                C: "Just the current test interval",
                D: "Only until the next inspection"
              },
              answer: "B",
              explanation: "Lifetime records allow trend analysis (e.g. drifting IR over years) and demonstrate the maintenance regime over time. Auditors and insurers may ask for the historical chain — keep it intact."
            },
            {
              number: 11,
              prompt: "A user-check finds a kettle with a melted plug. The user should:",
              options: {
                A: "Continue using it",
                B: "Withdraw it from use immediately and report the fault to the duty holder for repair / replace before re-issue",
                C: "Apply a 'caution' label and re-issue",
                D: "Reduce the fuse rating and continue"
              },
              answer: "B",
              explanation: "User check is the first line of defence. Withdraw obviously damaged kit; report; let the duty holder organise repair (or replacement) and re-test before the appliance returns to service."
            },
            {
              number: 12,
              prompt: "A duty holder cannot evidence calibration of the PAT instrument used. The likely consequence on audit:",
              options: {
                A: "No consequence",
                B: "The test results may be challenged — without calibration there is no traceability and the values can't be relied on for the EAWR audit trail",
                C: "Only the latest test is in question",
                D: "The instrument is automatically condemned"
              },
              answer: "B",
              explanation: "Calibration anchors the values to a known standard. Without it, the test values are unverifiable. An auditor or insurer would mark the records as unreliable. Keep calibration certificates and renew at the manufacturer's recommended interval."
            },
            {
              number: 13,
              prompt: "An IET COP recommended interval for a 'low-risk' Class II domestic appliance in a low-volume office (e.g. desk fan) is typically:",
              options: {
                A: "Up to 4 years (combined inspection and test)",
                B: "Daily",
                C: "Weekly",
                D: "1 month"
              },
              answer: "A",
              explanation: "Class II low-risk office equipment can run up to 4 years on the combined test, with formal visuals between. The duty holder may elect a shorter interval if their risk assessment supports it."
            },
            {
              number: 14,
              prompt: "An IET COP-compliant inventory (Form 4.1) lists:",
              options: {
                A: "Only the manufacturer's name",
                B: "Each appliance with a unique ID, location, type, Class and any specific notes (e.g. 'detachable lead' / 'surge protected')",
                C: "Only the test date",
                D: "Only the IR test result"
              },
              answer: "B",
              explanation: "The inventory is the master list. ID is the link to test records; type and Class drive the test set; location supports finding the appliance; notes flag special handling (e.g. surge filter requires 250 V DC IR)."
            },
            {
              number: 15,
              prompt: "A 'failed' formal visual inspection should:",
              options: {
                A: "Be ignored if the electrical tests later pass",
                B: "Trigger withdrawal from use, recording on the formal visual record (Form 4.2) AND the repair register (Form 4.4 if action follows), and repair before re-issue",
                C: "Be re-tested in 12 months",
                D: "Be passed verbally"
              },
              answer: "B",
              explanation: "Visual fail means the appliance is not safe to test or use. Record the fail, withdraw, repair, re-test, record closure. Don't proceed to electrical tests on a visually failed item — the test result wouldn't be meaningful."
            },
            {
              number: 16,
              prompt: "An IET COP-compliant test record must show:",
              options: {
                A: "Only the EC value",
                B: "The values for each applicable test (EC, IR, polarity, RCD trip time where relevant) and the pass/fail outcome",
                C: "Only the date",
                D: "Only the tester's name"
              },
              answer: "B",
              explanation: "Recording the values, not just pass/fail, supports trend analysis and challenges. A 'pass' with no value can't be defended on audit. Most PAT instruments record automatically, which simplifies compliance."
            },
            {
              number: 17,
              prompt: "An IET COP recommended interval for Class I stationary equipment in a wet environment is typically:",
              options: {
                A: "Shorter than the same equipment in a dry environment — wet environments accelerate insulation degradation and earth-path corrosion",
                B: "The same as for a dry environment",
                C: "Longer than for a dry environment",
                D: "Never required"
              },
              answer: "A",
              explanation: "Wet environments shorten the interval. Moisture ingress accelerates insulation breakdown; corrosion attacks earth bonding. The duty holder's risk assessment should explicitly address environment as a driver."
            },
            {
              number: 18,
              prompt: "An IET COP-compliant labelling system should:",
              options: {
                A: "Mix labels and ad-hoc marks freely",
                B: "Use consistent labels with ID, date, tester, and pass/fail (or 'next due' if the duty holder shows it); the same system across the workplace",
                C: "Use plain stickers without ID",
                D: "Be optional"
              },
              answer: "B",
              explanation: "Consistency makes the regime auditable and user-friendly. Same label format, same data, same colour scheme. Mixed approaches are confusing and often miss the link back to the register."
            },
            {
              number: 19,
              prompt: "A duty holder asked 'how often must I PAT-test?' should answer:",
              options: {
                A: "Every 12 months for everything",
                B: "There is no fixed interval — the COP gives recommendations as a starting point; the actual interval is set by the duty holder's risk assessment",
                C: "Only when an appliance fails",
                D: "Daily"
              },
              answer: "B",
              explanation: "Risk-based, not legally fixed. The right answer is 'it depends'. A site-specific risk assessment, informed by the COP table and any specific risks, drives the regime. There is no statutory '12 months for everything' rule."
            },
            {
              number: 20,
              prompt: "A duty holder's regime is challenged on audit. The strongest defence is:",
              options: {
                A: "A pile of pass stickers",
                B: "A documented risk assessment, the COP-compliant records (4.1–4.4), instrument calibration trace, tester competency evidence, and demonstrable closure of every fail",
                C: "A verbal description of the regime",
                D: "Only the contractor invoice"
              },
              answer: "B",
              explanation: "The audit looks for the full chain. A documented system with traceable records is what defends the duty holder under EAWR. Anything less is hard to argue. The COP forms are designed to provide exactly this evidence pack."
            }
          ]
        },
        {
          id: "v5",
          questions: [
            {
              number: 1,
              prompt: "Provision and Use of Work Equipment Regulations (PUWER) 1998 covers:",
              options: {
                A: "Only electrical equipment",
                B: "All work equipment, including the duty to maintain it in efficient working order and good repair",
                C: "Only the supply voltage",
                D: "Only the equipment label"
              },
              answer: "B",
              explanation: "PUWER 1998 is broad — covers any equipment used at work. Reg 5 specifies the maintenance duty. PAT supports the electrical-equipment subset but PUWER also covers mechanical guarding, training, signs, etc."
            },
            {
              number: 2,
              prompt: "An appliance is given an ID '1234' on Form 4.1 inventory. The pass label on the appliance must:",
              options: {
                A: "Show only the test date",
                B: "Show the unique appliance ID '1234' so the label links back to the inventory and test records",
                C: "Show only the tester name",
                D: "Show no ID"
              },
              answer: "B",
              explanation: "ID is the link from the label to the register. Without it, the label is just a sticker and the audit can't tie it to a record. Use the same ID consistently — typically the format your PAT instrument generates."
            },
            {
              number: 3,
              prompt: "A new appliance arrives at the workplace. The first formal action is:",
              options: {
                A: "Wait until the next scheduled test interval",
                B: "Carry out a formal visual inspection (and combined test as needed), give it an inventory ID, label it, and record the baseline",
                C: "Re-issue the manufacturer's certificate as the test record",
                D: "Test only when the appliance fails"
              },
              answer: "B",
              explanation: "First-issue formal inspection is the COP convention. Sets the baseline values, the ID, the label and the inventory entry. Future tests compare against this baseline; the manufacturer's CE/UKCA mark doesn't replace this duty."
            },
            {
              number: 4,
              prompt: "The COP recommends that a written record be kept of:",
              options: {
                A: "Every user check",
                B: "Every formal visual inspection AND every combined inspection and test, whether pass or fail",
                C: "Only failed appliances",
                D: "Only test instruments"
              },
              answer: "B",
              explanation: "User checks: report only failures (no positive record needed). Formal visuals and combined tests: record every one, pass or fail. The records support EAWR Reg 4(2) compliance."
            },
            {
              number: 5,
              prompt: "An employer's competence assessment for in-house PAT testers should include:",
              options: {
                A: "Only watching the test instrument's introductory video",
                B: "Documented training, supervised practice, knowledge of the COP, ability to interpret test results, and evidence of ongoing competence",
                C: "Only the manufacturer's manual",
                D: "Only a PAT certificate"
              },
              answer: "B",
              explanation: "Competence is more than a one-day course. Training plus practice plus understanding of WHY the tests work plus interpretation skill. The COP Appendix VII outlines the competency framework."
            },
            {
              number: 6,
              prompt: "A duty holder receives an appliance failure mid-cycle. The next interval should be:",
              options: {
                A: "Unchanged",
                B: "Reviewed — repeat fails or related appliance issues may justify shortening the interval and tightening user-check briefings",
                C: "Lengthened",
                D: "Skipped"
              },
              answer: "B",
              explanation: "Fail data feeds the risk assessment. A pattern of fails on a particular appliance type or in a particular environment is a signal to tighten — review intervals, user check guidance, environment, and equipment selection."
            },
            {
              number: 7,
              prompt: "An IET COP recommended interval for Class I hand-held in industrial use is typically:",
              options: {
                A: "Combined inspection & test every 6 months, formal visual every 1 month",
                B: "Daily",
                C: "Once every 5 years",
                D: "Never"
              },
              answer: "A",
              explanation: "COP Table 7.1 — Class I hand-held in industry: 6-month combined test, 1-month formal visual is a typical recommended starting point. Rough handling and demanding environments justify the tighter regime."
            },
            {
              number: 8,
              prompt: "Records should be:",
              options: {
                A: "Tamper-evident or version-controlled, with a clear audit chain back to the test events",
                B: "In any format the operator chooses",
                C: "Held only in hard copy",
                D: "Held only by the contractor"
              },
              answer: "A",
              explanation: "Records that can be quietly altered after the fact aren't fit for purpose. Tamper-evident systems (PAT software with audit trails, signed paper Form 4.3, etc.) ensure the records mean what they say."
            },
            {
              number: 9,
              prompt: "A pass label that doesn't include the test date is:",
              options: {
                A: "Acceptable — pass labels never expire",
                B: "Insufficient — without a date, the next-due interval cannot be calculated and the label can't be tied to a specific test event",
                C: "Acceptable for Class III only",
                D: "Acceptable provided there is an ID"
              },
              answer: "B",
              explanation: "Test date is the anchor. Without it, you can't determine when the next test is due, when calibration was done, or which test record the label refers to. ID + date is the minimum."
            },
            {
              number: 10,
              prompt: "The COP recognises that intervals may be:",
              options: {
                A: "Maximum, beyond which the duty holder must always test",
                B: "Recommended, with the duty holder free to lengthen or shorten based on documented risk assessment",
                C: "Mandated by the HSE for every duty holder",
                D: "Set by the manufacturer only"
              },
              answer: "B",
              explanation: "Risk-based, not rule-based. The COP intervals are starting points. Document any deviation in the risk assessment — auditors then see a thoughtful regime, not an arbitrary one."
            },
            {
              number: 11,
              prompt: "An IET COP-compliant repair register (Form 4.4) closes the loop on:",
              options: {
                A: "Every passing appliance",
                B: "Every failed appliance — recording the fault, the action, the outcome, and the date the appliance was returned to service or disposed of",
                C: "Only Class I appliances",
                D: "Only mobile equipment"
              },
              answer: "B",
              explanation: "Form 4.4 turns 'fail' into 'closed action'. Without it, fails can drift back into service unrepaired. Auditors look for fails on Form 4.3 cross-referenced to closure on Form 4.4."
            },
            {
              number: 12,
              prompt: "An IET COP recommended interval for fixed equipment in a normal environment is typically:",
              options: {
                A: "Every 5 years (combined inspection & test) supplemented by visuals",
                B: "Daily",
                C: "Weekly",
                D: "Never"
              },
              answer: "A",
              explanation: "Fixed equipment is rarely handled, so wear is low. The COP allows long combined test intervals (around 5 years for fixed kit in low-risk environments). The fixed installation EICR also covers some of the same ground."
            },
            {
              number: 13,
              prompt: "A risk assessment driving the PAT regime should be:",
              options: {
                A: "A one-page form with no detail",
                B: "Specific to the workplace, identifying types of equipment, environments and use patterns; reviewed regularly and after significant changes",
                C: "Done only when an incident occurs",
                D: "Optional under EAWR"
              },
              answer: "B",
              explanation: "Risk assessments must be 'suitable and sufficient' (per Management of H&S at Work Regs 1999). Generic templates rarely satisfy. Tailor to your workplace and review when things change."
            },
            {
              number: 14,
              prompt: "A user-check missed because the user is in a hurry is:",
              options: {
                A: "Acceptable — the formal visual will catch any problems",
                B: "A breach of the layered safety regime — user checks are integral to catching obvious damage early; reinforce via toolbox talks and accessible reporting",
                C: "Acceptable for Class II only",
                D: "Acceptable on Tuesdays"
              },
              answer: "B",
              explanation: "User checks are the most frequent layer. Skipping them defeats early-fault detection. Reinforce by training, easy reporting routes, and clear messaging that withdrawn kit will be replaced or repaired without inconvenience."
            },
            {
              number: 15,
              prompt: "An IET COP compliant test approach for a NEW Class I appliance on first issue is:",
              options: {
                A: "Trust the manufacturer's CE/UKCA mark and skip testing",
                B: "Carry out the formal visual + combined inspection and test on first issue to set the baseline; log on inventory and label",
                C: "Wait 12 months",
                D: "Test only after one fault"
              },
              answer: "B",
              explanation: "First-issue testing is the COP convention. The manufacturer's marking confirms compliance at point of sale; the COP first-issue test confirms the appliance arrived intact and provides the baseline for future comparisons."
            },
            {
              number: 16,
              prompt: "An IET COP-compliant fail label should:",
              options: {
                A: "Be removed and replaced with a pass label",
                B: "Clearly identify the appliance as 'failed' or 'do not use', with the appliance withdrawn from service",
                C: "Be applied alongside a pass label",
                D: "Be optional"
              },
              answer: "B",
              explanation: "Fail labels make it clear at a glance the appliance is unsafe. Combined with physical withdrawal (e.g. return to a quarantine area), they prevent inadvertent re-issue. Replace the label only after repair and re-test."
            },
            {
              number: 17,
              prompt: "Which of these is NOT typically driving a PAT interval?",
              options: {
                A: "Equipment Class",
                B: "Environment of use",
                C: "Frequency of use",
                D: "The supply voltage of the building (230 V vs 400 V)"
              },
              answer: "D",
              explanation: "Building supply voltage doesn't change the appliance failure modes meaningfully. Class, environment, use and history are the COP drivers. The fixed installation supply voltage is just the supply — separate from the appliance regime."
            },
            {
              number: 18,
              prompt: "A duty holder's PAT records show 100% pass over 5 years on a population of 200 office-IT appliances. The reasonable adjustment is:",
              options: {
                A: "Tighten the interval to monthly",
                B: "Consider lengthening the interval (within COP and reason) — the data supports a low-risk, well-maintained population",
                C: "Replace all the equipment",
                D: "Stop testing entirely"
              },
              answer: "B",
              explanation: "100% pass over 5 years on 200 items is strong evidence of low risk. The COP regime says: adjust intervals based on data. Lengthen within the COP guidance, document the rationale, and continue trend monitoring."
            },
            {
              number: 19,
              prompt: "An IET COP-compliant test report format should include:",
              options: {
                A: "Only pass/fail",
                B: "The full test data per appliance, the cumulative summary, the failure list with disposition, and the instrument calibration reference",
                C: "Only the dates",
                D: "Only the appliance IDs"
              },
              answer: "B",
              explanation: "A full test report makes the audit easy. Per-appliance values, summary, failure list with disposition, instrument calibration. Most PAT software produces this format automatically."
            },
            {
              number: 20,
              prompt: "An employer's PAT regime is the means of evidencing compliance with:",
              options: {
                A: "BS 7671 only",
                B: "EAWR Reg 4(2) (maintenance) plus HSWA / PUWER duties for safe work equipment",
                C: "RIDDOR only",
                D: "The Building Regulations"
              },
              answer: "B",
              explanation: "EAWR is the maintenance backbone; HSWA Sections 2/3 and PUWER 5 reinforce. PAT records the evidence trail — what was inspected, when, by whom, with what result. The duty holder shows compliance through the system."
            }
          ]
        }
      ]
    },
    {
      id: "section-4",
      title: "Section 4 — PAT Testing Practice Bank",
      variants: [
        {
          id: "v1",
          questions: [
            {
              number: 1,
              prompt: "10 mA converted to amperes is:",
              options: {
                A: "0.0001 A",
                B: "0.01 A",
                C: "0.001 A",
                D: "0.1 A"
              },
              answer: "B",
              explanation: "10 mA = 10 × 10⁻³ A = 0.01 A. Drop the decimal three places."
            },
            {
              number: 2,
              prompt: "What is the expected protective conductor resistance of an appliance cable with CSA 0.75 mm² and length 1.5 m?",
              options: {
                A: "339 Ω",
                B: "0.39 Ω",
                C: "39 Ω",
                D: "0.039 Ω"
              },
              answer: "D",
              explanation: "Tabulated copper resistance for 0.75 mm² flex ≈ 26 mΩ/m at 20 °C. R = 26 × 1.5 ÷ 1000 ≈ 0.039 Ω. The other answers are out by factors of 10–10000."
            },
            {
              number: 3,
              prompt: "Which test would NOT be carried out on Class II equipment?",
              options: {
                A: "Functional test",
                B: "Protective conductor continuity test",
                C: "Insulation resistance test",
                D: "Polarity test"
              },
              answer: "B",
              explanation: "Class II equipment has no protective conductor (it relies on double or reinforced insulation), so there is nothing to test for PE continuity. IR, polarity and functional tests still apply."
            },
            {
              number: 4,
              prompt: "Which class of equipment is NOT acceptable in the UK?",
              options: {
                A: "Class 0",
                B: "Class III",
                C: "Class II",
                D: "Class I"
              },
              answer: "A",
              explanation: "Class 0 has only basic insulation and no earth — a single insulation failure puts the user in contact with live parts. The UK has prohibited Class 0 since the introduction of the Plugs & Sockets Regulations and the Electrical Equipment (Safety) Regs."
            },
            {
              number: 5,
              prompt: "A factor that does NOT influence the initial frequency of inspection and testing is:",
              options: {
                A: "Frequency of use",
                B: "The environment",
                C: "The fixed wiring RCD trip time",
                D: "Previous records"
              },
              answer: "C",
              explanation: "The trip time of the supply RCD has no bearing on how often a portable appliance needs visual checks or tests. Use, environment and history are the three drivers in COP Table 7.1."
            },
            {
              number: 6,
              prompt: "Which of these does NOT describe a category of inspection and testing referred to in the COP?",
              options: {
                A: "Equipment is inspected and tested and records kept of all results",
                B: "Before every use, a user should check the equipment and record any faults found",
                C: "Before every use, a user should check equipment and record all findings",
                D: "Inspections without tests, when equipment is checked and records kept of all results"
              },
              answer: "C",
              explanation: "User checks are visual-only and only faults are reported — recording every check would defeat the point. The three COP categories are user check (faults reported), formal visual inspection, and combined inspection and test."
            },
            {
              number: 7,
              prompt: "The dimensions of conductors in an extension lead affect the resistance. Which describes two conditions when resistance would reduce?",
              options: {
                A: "Increase in length and reduction in diameter",
                B: "Increase in diameter and reduction in length",
                C: "Increase in length and increase in diameter",
                D: "Reduction in length and reduction in diameter"
              },
              answer: "B",
              explanation: "R = ρL/A — resistance falls when length goes down and CSA (diameter) goes up. The other combinations either offset or increase R."
            },
            {
              number: 8,
              prompt: "Why must business equipment be powered down prior to disconnecting from the supply when undertaking formal inspection?",
              options: {
                A: "Fibre optic data cables will be safe to disconnect",
                B: "There is a risk of data loss",
                C: "Monitors will discharge quicker",
                D: "To avoid static electricity"
              },
              answer: "B",
              explanation: "Pulling the plug on a running PC, server or POS terminal corrupts open files and may damage the OS. Always shut down through the operating system first; the safety of the test is unaffected either way."
            },
            {
              number: 9,
              prompt: "A 2 m length of flex with CSA 0.75 mm² and a rewireable plug top has a maximum fuse rating of:",
              options: {
                A: "13 A",
                B: "6 A",
                C: "3 A",
                D: "10 A"
              },
              answer: "B",
              explanation: "BS 1363 plug fuse selection — 0.75 mm² flex protects up to 6 A. 1.0 mm² is good for 10 A; 1.25/1.5 mm² for 13 A. 3 A is the lower fuse for low-current appliances on 0.5 mm²."
            },
            {
              number: 10,
              prompt: "What tolerance is given in excess of the calculated protective conductor resistance when measuring earth continuity?",
              options: {
                A: "0.02 Ω",
                B: "0.2 Ω",
                C: "0.01 Ω",
                D: "0.1 Ω"
              },
              answer: "D",
              explanation: "The COP allows 0.1 Ω above the calculated cable resistance for end-fitting and connection variability. Anything beyond suggests a poor termination, not just cable impedance."
            },
            {
              number: 11,
              prompt: "Which legal document requires that electrical equipment supplied under contract is of satisfactory quality?",
              options: {
                A: "The Health and Safety at Work Act",
                B: "The Electrical Equipment (Safety) Regulations 2016",
                C: "The Supply of Goods and Services Act 1982",
                D: "The Supply of Machinery (Safety) Regulations 2008"
              },
              answer: "C",
              explanation: "Supply of Goods and Services Act 1982 (B2B) and Consumer Rights Act 2015 (B2C) impose the satisfactory quality duty on goods supplied. The Equipment Safety Regs cover product compliance, not the contract terms."
            },
            {
              number: 12,
              prompt: "Equipment in which protection against electric shock relies upon basic insulation only is the definition of construction classification:",
              options: {
                A: "Class II",
                B: "Class III",
                C: "Class I",
                D: "Class 0"
              },
              answer: "D",
              explanation: "Class 0 = basic insulation only, no earth. Class I = basic insulation + protective earth. Class II = double or reinforced insulation. Class III = SELV supply."
            },
            {
              number: 13,
              prompt: "A toaster is generally classified as:",
              options: {
                A: "Mobile",
                B: "Portable",
                C: "Transportable",
                D: "Hand-held"
              },
              answer: "B",
              explanation: "COP equipment categories: portable = moved while connected or about while in use (kettle, toaster, lamp). Mobile = wheeled, moved while in use (vacuum). Hand-held = held during use (drill). Toasters sit and run, so portable."
            },
            {
              number: 14,
              prompt: "What causes high protective conductor currents in equipment such as a variable speed drive incorporating an EMC filter?",
              options: {
                A: "The length of the CPC cable",
                B: "The choke wired in series with the line conductor",
                C: "The capacitors and discharge resistors within the filter",
                D: "The choke wired in series with the neutral conductor"
              },
              answer: "C",
              explanation: "EMC filters use Y-capacitors from each line to earth to shunt high-frequency noise. These capacitors leak current to earth at mains frequency, which is the source of the elevated PE current that PAT operators see on VSDs and IT equipment."
            },
            {
              number: 15,
              prompt: "Which basic requirement demonstrates that a maintenance regime exists within an organisation?",
              options: {
                A: "A kitemark logo on the company letterhead",
                B: "The invoices from the inspection and testing contractor",
                C: "The records of inspections and tests",
                D: "PAT stickers on all appliances"
              },
              answer: "C",
              explanation: "The records demonstrate the duty holder is meeting EAWR Reg 4(2) — maintaining the equipment in safe condition. Stickers and invoices alone don't show what was inspected, when, or what failed."
            },
            {
              number: 16,
              prompt: "When performance testing an RCD, the test should be done at:",
              options: {
                A: "30 mA",
                B: "100 mA",
                C: "300 mA",
                D: "150 mA"
              },
              answer: "A",
              explanation: "A portable 30 mA RCD must be tested at its rated tripping current (30 mA) to confirm it operates within the time limit. Higher-current tests (5× IΔn) check the fast-trip path; the 1× IΔn test confirms the basic threshold."
            },
            {
              number: 17,
              prompt: "Frequency of testing for a mobile Class I item used in commercial kitchens:",
              options: {
                A: "12 months",
                B: "1 month",
                C: "3 months",
                D: "There are no specified timescales"
              },
              answer: "A",
              explanation: "COP Table 7.1 — commercial kitchen mobile Class I: combined inspection & test every 12 months, formal visual inspection every 6 months. The kitchen environment (heat, water, grease) drives a tighter regime than office equipment."
            },
            {
              number: 18,
              prompt: "A severe electric shock occurs under fault-free conditions if the body is placed between:",
              options: {
                A: "A live conductor and earth",
                B: "The earth pin of a power socket and the metallic case of a Class I item",
                C: "Two earthed exposed conductive parts",
                D: "Two conductors at the same potential"
              },
              answer: "A",
              explanation: "Direct contact with a live conductor while standing on or touching earth provides the full mains potential across the body — the classic shock path. The other options either share the same potential (no current) or require a fault for current to flow."
            },
            {
              number: 19,
              prompt: "The test instrument record sheet in the COP requires:",
              options: {
                A: "Instrument type, model, serial number and date of next calibration",
                B: "Instrument manufacturer, model, serial number and date of next calibration",
                C: "Instrument manufacturer, model, serial number and date of last calibration",
                D: "Instrument type, model, serial number and date of last calibration"
              },
              answer: "D",
              explanation: "COP sample form: type, model, serial and date of last calibration — that lets you trace the test back to a known calibration baseline. Date-of-next-calibration is helpful for scheduling but isn't the audit trail."
            },
            {
              number: 20,
              prompt: "Some aspects of a fixed installation should be discussed with the owner. Which would NOT lead to a recommendation that the installation itself should be inspected?",
              options: {
                A: "Red and black cores in the fixed wiring",
                B: "No adequate means of earthing",
                C: "Condition of socket outlets",
                D: "Limited or no RCD protection"
              },
              answer: "A",
              explanation: "Old red/black cable colours are not a defect on their own — installations on the older harmonised colours are perfectly safe if maintained. The other three are genuine safety concerns that warrant a fixed-wiring EICR."
            },
            {
              number: 21,
              prompt: "Which regulations place a duty on a landlord supplying electrical equipment as part of a tenancy to ensure it is safe when first supplied?",
              options: {
                A: "WEEE Regulations",
                B: "BS 7671",
                C: "The Electrical Equipment (Safety) Regulations 2016",
                D: "The Housing Act"
              },
              answer: "C",
              explanation: "Electrical Equipment (Safety) Regulations 2016 require electrical equipment supplied to comply with safety standards. BS 7671 is the wiring rules, WEEE is end-of-life recycling, and the Housing Act covers wider tenant duties."
            },
            {
              number: 22,
              prompt: "SELV equipment uses which method of shock protection under fault?",
              options: {
                A: "Operates at 110 V AC",
                B: "Uses a centre-tapped transformer with the centre connected to earth",
                C: "Needs an earth connection on the load side",
                D: "Has no connection to earth on the load side"
              },
              answer: "D",
              explanation: "SELV (Separated Extra-Low Voltage) is electrically isolated from earth on the load side and operates at ≤ 50 V AC / 120 V DC. The centre-tapped earth setup at 110 V is the construction-site reduced low-voltage system, not SELV."
            },
            {
              number: 23,
              prompt: "A non-electrically-skilled person trained for in-service inspection and testing is competent to:",
              options: {
                A: "Level 2",
                B: "Level 1",
                C: "Level 3",
                D: "Level 4"
              },
              answer: "A",
              explanation: "COP Appendix VII competency framework: Level 1 = user check; Level 2 = formal visual inspection AND combined inspection & test by a non-electrical person who has had appropriate training; Level 3 = electrically skilled."
            },
            {
              number: 24,
              prompt: "A 2-core lead set tested separately is treated as:",
              options: {
                A: "Class I appliance",
                B: "Class III appliance",
                C: "Class II appliance",
                D: "Class 0 appliance"
              },
              answer: "C",
              explanation: "A 2-core lead has no protective earth conductor — it's classified and tested as Class II. The classification follows the construction, not the appliance it ends up plugged into."
            },
            {
              number: 25,
              prompt: "A load test is particularly useful for:",
              options: {
                A: "IT equipment",
                B: "Central heating systems",
                C: "Domestic lighting",
                D: "Heating equipment"
              },
              answer: "D",
              explanation: "Load testing measures the current drawn under normal use to confirm the heating element draws roughly the rated current. For IT equipment with switch-mode supplies the current isn't a useful diagnostic; for heaters it tells you the element is intact."
            },
            {
              number: 26,
              prompt: "The IP code for protection against solid foreign objects ≥ 12.5 mm and protection against spraying water is:",
              options: {
                A: "IP21",
                B: "IP23",
                C: "IP52",
                D: "IP14"
              },
              answer: "B",
              explanation: "First digit 2 = solid objects ≥ 12.5 mm (finger). Second digit 3 = spraying water (up to 60° from vertical). IP21 is dripping water; IP52 is dust protected with spraying water; IP14 is unusual."
            },
            {
              number: 27,
              prompt: "An IR test on equipment with surge protection devices should be carried out at:",
              options: {
                A: "500 V DC",
                B: "250 V AC",
                C: "500 V AC",
                D: "250 V DC"
              },
              answer: "D",
              explanation: "SPDs would clamp a 500 V test and either give a misleading low IR or be damaged. Drop the test voltage to 250 V DC so the SPD doesn't conduct. IR is always DC, not AC."
            },
            {
              number: 28,
              prompt: "Voltages covered by the Electricity at Work Regulations 1989:",
              options: {
                A: "Anything below 600 V AC or 900 V DC between conductors and earth",
                B: "Up to 1000 V AC or 2500 V DC between conductors",
                C: "From extra low voltage battery powered items to 400 kV transmission equipment",
                D: "Anything above 230 V"
              },
              answer: "C",
              explanation: "EAWR has no voltage limits — it applies from a torch battery up to the National Grid 400 kV equipment. Anyone arguing 'it's only ELV so EAWR doesn't apply' is wrong."
            },
            {
              number: 29,
              prompt: "On a low- or high-current EC test, the protective conductor test should be made between accessible conductive parts and:",
              options: {
                A: "The earth pin of the plug",
                B: "The neutral conductor",
                C: "The main earth terminal",
                D: "Any supplementary bond"
              },
              answer: "A",
              explanation: "PE continuity test on a portable appliance is from the earth pin of the plug to each accessible exposed conductive part. That mimics the full path the fault current would actually take."
            },
            {
              number: 30,
              prompt: "Minimum CSA of an appliance flex for a portable socket outlet protected by a 13 A plug top fuse:",
              options: {
                A: "1.25 mm²",
                B: "4 mm²",
                C: "0.75 mm²",
                D: "2.5 mm²"
              },
              answer: "A",
              explanation: "BS 1363 fuse / flex pairing — a 13 A plug fuse needs at least 1.25 mm² flex. 0.75 mm² caps at 6 A; 1.0 mm² caps at 10 A. 4 mm² is fixed wiring CSA, not flex."
            }
          ]
        },
        {
          id: "v2",
          questions: [
            {
              number: 1,
              prompt: "If a touch current test is carried out, the recorded value should not exceed:",
              options: {
                A: "5 mA for DC powered equipment",
                B: "3.5 mA for DC powered equipment",
                C: "3.5 mA for AC powered equipment",
                D: "5 mA for AC powered equipment"
              },
              answer: "C",
              explanation: "IEC 60990 / COP — touch current limits are 3.5 mA RMS for AC-powered equipment, 5 mA d.c. ripple-free for DC. Exceeding the AC limit indicates faulty insulation or excessive EMC filter leakage."
            },
            {
              number: 2,
              prompt: "Which HSE publication covers electrical safety on construction sites?",
              options: {
                A: "HSG141",
                B: "GS38",
                C: "INDG236",
                D: "HSG107"
              },
              answer: "A",
              explanation: "HSG141 — Electrical safety on construction sites. GS38 is test probes/leads, INDG236 is maintaining portable equipment summary leaflet, HSG107 is maintaining portable & transportable equipment (the predecessor of the current PAT COP)."
            },
            {
              number: 3,
              prompt: "Which COP model form is used to record a combined inspection and test?",
              options: {
                A: "Form 4.3",
                B: "Form 4.1",
                C: "Form 4.2",
                D: "Form 4.4"
              },
              answer: "A",
              explanation: "COP 5th Edition model forms: 4.1 inventory, 4.2 formal visual only, 4.3 combined inspection and test (visual + test results), 4.4 repair register."
            },
            {
              number: 4,
              prompt: "A portable appliance is fitted with a 4.5 m cable with 1.0 mm² protective conductor. Calculate the resistance of the protective conductor.",
              options: {
                A: "70.2 mΩ",
                B: "78 mΩ",
                C: "97.5 mΩ",
                D: "87.75 mΩ"
              },
              answer: "D",
              explanation: "Tabulated 1.0 mm² flex copper resistance ≈ 19.5 mΩ/m at 20 °C. R = 19.5 × 4.5 = 87.75 mΩ. The COP uses these tabulated values for the 'expected' figure to compare your test against."
            },
            {
              number: 5,
              prompt: "Extension leads longer than the recommended lengths should be protected by a:",
              options: {
                A: "BS 3036 fuse",
                B: "Double pole switch",
                C: "300 mA RCD",
                D: "30 mA RCD"
              },
              answer: "D",
              explanation: "Long extension leads have a higher chance of damage and a higher Zs that may not allow the upstream device to operate fast enough — a 30 mA RCD provides the additional protection. 300 mA is for fire protection, not personal safety."
            },
            {
              number: 6,
              prompt: "A Class I appliance has an IEC detachable supply lead. The lead should be:",
              options: {
                A: "Ignored if the appliance passes its own tests",
                B: "Tested separately for earth continuity, insulation resistance and polarity, then recorded against its own ID or as part of the appliance record",
                C: "Only visually checked because detachable leads cannot fail electrically",
                D: "Replaced automatically at every formal inspection"
              },
              answer: "B",
              explanation: "Detachable leads are often swapped between appliances, so a faulty lead can move around the workplace. The lead set is tested as an item in its own right: earth continuity for 3-core leads, IR, polarity and fuse/plug condition."
            },
            {
              number: 7,
              prompt: "An item of IT equipment contains surge suppression that would clamp a normal 500 V DC IR test. The appropriate approach is:",
              options: {
                A: "Carry out the 500 V DC test anyway and accept a low reading",
                B: "Use a 250 V DC IR test or a suitable protective-conductor / touch-current test in accordance with the COP",
                C: "Skip all electrical tests and rely on the label",
                D: "Test it at 1000 V DC so the SPD operates more clearly"
              },
              answer: "B",
              explanation: "SPDs and EMC filters can be damaged or give misleading low IR values at 500 V DC. The COP allows a lower 250 V DC test or an appropriate leakage/touch-current route where the equipment construction makes a standard IR test unsuitable."
            },
            {
              number: 8,
              prompt: "A Class II drill has an accessible metal chuck but no protective conductor. The correct test approach is:",
              options: {
                A: "Carry out earth continuity from the plug earth pin to the chuck",
                B: "Treat it as Class I because metal is accessible",
                C: "Carry out a Class II IR test using the probe on accessible metal parts, plus the formal visual and functional checks",
                D: "Fail it automatically because all accessible metal must be earthed"
              },
              answer: "C",
              explanation: "Class II can have accessible metalwork, but it is separated from live parts by double or reinforced insulation. There is no earth path to test; the relevant electrical test is insulation resistance to accessible conductive parts using the test probe."
            },
            {
              number: 9,
              prompt: "100 mA in amperes is:",
              options: {
                A: "1.0 A",
                B: "0.1 A",
                C: "0.01 A",
                D: "0.001 A"
              },
              answer: "B",
              explanation: "100 × 10⁻³ A = 0.1 A. Be comfortable with the prefix shifts — milliamps appear constantly on PAT IR/leakage results."
            },
            {
              number: 10,
              prompt: "A copper flex of 1.5 mm² CSA and 6 m length has a theoretical EC resistance of approximately:",
              options: {
                A: "0.078 Ω (≈ 13 mΩ/m × 6 m)",
                B: "0.39 Ω",
                C: "1 Ω",
                D: "0.013 Ω"
              },
              answer: "A",
              explanation: "1.5 mm² ≈ 13 mΩ/m at 20 °C. R = 13 × 6 ÷ 1000 = 0.078 Ω. Pass criterion = 0.078 + 0.1 = 0.178 Ω."
            },
            {
              number: 11,
              prompt: "Which test would NOT typically apply to Class III equipment?",
              options: {
                A: "Functional check",
                B: "Visual inspection",
                C: "500 V DC IR test",
                D: "Verification that the SELV source is appropriately separated and rated"
              },
              answer: "C",
              explanation: "Class III equipment is supplied at SELV from an isolated source. The PAT-style 500 V DC IR test is not relevant. Verify the SELV source separately (typically at the isolating transformer) and inspect the load visually."
            },
            {
              number: 12,
              prompt: "An IR test reading of 0.0 MΩ on a Class I appliance indicates:",
              options: {
                A: "Good insulation",
                B: "A short circuit between live and earth — withdraw and investigate",
                C: "An open earth",
                D: "Polarity reversal"
              },
              answer: "B",
              explanation: "0 MΩ = direct path live-to-earth. The appliance is unsafe and must be withdrawn until the fault is found and rectified. Common causes are wet equipment, broken insulation, or live conductor touching earthed metal."
            },
            {
              number: 13,
              prompt: "An EC reading of 0.06 Ω on a Class I drill with theoretical lead resistance 0.04 Ω is:",
              options: {
                A: "Pass — well within 0.1 Ω above theoretical",
                B: "Fail",
                C: "Investigate further",
                D: "Cannot determine without IR"
              },
              answer: "A",
              explanation: "0.06 − 0.04 = 0.02 Ω of additional resistance — comfortably within the 0.1 Ω allowance. Earth path is sound and terminations are good."
            },
            {
              number: 14,
              prompt: "A 230 V Class II hand drill is being tested. Which sequence is correct?",
              options: {
                A: "Visual → IR → polarity → functional",
                B: "EC → IR → visual → polarity",
                C: "Functional → IR → polarity",
                D: "IR only"
              },
              answer: "A",
              explanation: "Class II sequence: visual first (catches damage), then IR (with probe on accessible metal), polarity, functional. No EC because there is no protective conductor."
            },
            {
              number: 15,
              prompt: "A formal visual inspection on a kettle reveals a wobbly switch. The correct action is:",
              options: {
                A: "Pass — switch isn't electrical",
                B: "Fail — controls form part of the construction; refer for repair before re-test",
                C: "Apply a 'caution' label and re-issue",
                D: "Reduce the fuse rating"
              },
              answer: "B",
              explanation: "Switches and controls are part of the appliance's safety case. A wobbly switch may not break properly, may stick, or may fail to break the live cleanly. Repair (replace) before re-test."
            },
            {
              number: 16,
              prompt: "An RCD trip test at 1× IΔn for a 30 mA portable RCD shows non-trip. The correct action is:",
              options: {
                A: "Pass — try another button",
                B: "Fail — the device has not operated at its rated tripping current; withdraw and replace",
                C: "Re-test next year",
                D: "Apply 5× IΔn instead"
              },
              answer: "B",
              explanation: "The RCD is not operational at its rated current — a fault would not be cleared. Replace and retest the assembly. The 5× test checks fast-trip; both are needed but a 1× fail is enough on its own."
            },
            {
              number: 17,
              prompt: "An IR test on a Class I 230 V item with a switch in the OFF position reads OL (open). The correct interpretation is:",
              options: {
                A: "Pass — excellent insulation",
                B: "Investigate — the off-switch may have isolated part of the circuit; switch ON and re-test to verify",
                C: "Fail",
                D: "Polarity reversal"
              },
              answer: "B",
              explanation: "Single-pole switches break the live before the load. The internal section beyond the switch isn't in the test path. Switch ON during IR for the full test."
            },
            {
              number: 18,
              prompt: "A 13 A appliance with 1.25 mm² flex is fitted with a 5 A plug fuse. This is:",
              options: {
                A: "Acceptable if the appliance draws < 5 A",
                B: "Unacceptable — fuse rating must be sized for the appliance current and flex CSA combination, with the fuse protecting the flex; a 13 A appliance needs a 13 A fuse not 5 A",
                C: "Acceptable for Class II only",
                D: "Acceptable on Tuesdays"
              },
              answer: "B",
              explanation: "Fuse rating selection: chosen to be at least the appliance's rated current AND no more than the flex CSA can sustain. Under-fusing causes nuisance tripping; over-fusing leaves the flex unprotected. Match fuse to appliance/flex pair."
            },
            {
              number: 19,
              prompt: "A 230 V Class I appliance draws 2.3 kW resistive load. Steady current is:",
              options: {
                A: "5 A",
                B: "10 A",
                C: "23 A",
                D: "100 A"
              },
              answer: "B",
              explanation: "I = P / V = 2300 / 230 = 10 A. Resistive load = power factor 1, so the calculated current matches the actual current the protective device sees."
            },
            {
              number: 20,
              prompt: "A Class I 1.5 mm² extension lead 25 m long has a theoretical EC resistance of:",
              options: {
                A: "0.325 Ω (≈ 13 mΩ/m × 25 m)",
                B: "1 Ω",
                C: "0.13 Ω",
                D: "0.01 Ω"
              },
              answer: "A",
              explanation: "1.5 mm² ≈ 13 mΩ/m. R = 13 × 25 ÷ 1000 = 0.325 Ω. EC pass criterion = 0.325 + 0.1 = 0.425 Ω. Long leads have inherently higher EC; calculate the theoretical first."
            },
            {
              number: 21,
              prompt: "An IR pass for a Class II appliance at 500 V DC is:",
              options: {
                A: "≥ 1 MΩ",
                B: "≥ 2 MΩ",
                C: "≥ 0.3 MΩ",
                D: "≥ 250 kΩ"
              },
              answer: "B",
              explanation: "Class II = ≥ 2 MΩ at 500 V DC. Class II has no earth backup, so the insulation must be more reliable. Class I is ≥ 1 MΩ general; heating elements ≥ 0.3 MΩ when warm."
            },
            {
              number: 22,
              prompt: "A formal visual inspection finds a kettle with a chipped plug body but exposed pins still secure. The correct action is:",
              options: {
                A: "Pass — pins still secure",
                B: "Fail — the plug body is part of the safety construction; replace the plug before any electrical test",
                C: "Tape over the chip and pass",
                D: "Reduce the fuse rating"
              },
              answer: "B",
              explanation: "A damaged plug body is a fail at visual stage. Replace the plug, re-inspect, then carry out the electrical tests on the repaired item. Don't proceed to test on a visually failed item."
            },
            {
              number: 23,
              prompt: "An IR test on a Class I 230 V iron with the heating element warm reads 0.4 MΩ. The result is:",
              options: {
                A: "Fail — below 1 MΩ",
                B: "Pass — heating elements may read down to 0.3 MΩ when warm",
                C: "Pass only if Class II",
                D: "Investigate at 1000 V DC"
              },
              answer: "B",
              explanation: "Heating elements have a 0.3 MΩ threshold when warm under the COP. 0.4 MΩ is within tolerance. Investigate further only if it falls towards 0.3 MΩ over successive tests."
            },
            {
              number: 24,
              prompt: "A 110 V CTE construction site supply is:",
              options: {
                A: "SELV",
                B: "Reduced low voltage — 55 V to earth from each line, deliberate centre-tap earthing",
                C: "ELV battery only",
                D: "FELV"
              },
              answer: "B",
              explanation: "110 V CTE = reduced low voltage. The centre tap is earthed, giving 55 V to earth from each line. This reduces shock severity but is NOT SELV (SELV requires no earth on the load side AND ≤ 50 V AC source)."
            },
            {
              number: 25,
              prompt: "A 230 V Class I server with a 3-core IEC C13 lead has surge filtering. EC test at 25 A reads 0.08 Ω. The result is:",
              options: {
                A: "Fail — too high for IT",
                B: "Pass — within 0.1 Ω + theoretical lead R, but use 200 mA soft test in future to avoid stressing the surge filter",
                C: "Pass — IT EC is always 5 Ω",
                D: "Investigate IR before deciding"
              },
              answer: "B",
              explanation: "0.08 Ω passes within the typical 0.1 Ω + theoretical limit for short flex. But 25 A is too aggressive for IT kit with surge filtering — use 200 mA next time to avoid stressing the filter. Both rules apply: pass the test AND use the right test type."
            },
            {
              number: 26,
              prompt: "A duty holder uses a calibrated PAT instrument. The calibration certificate is:",
              options: {
                A: "Optional",
                B: "Required to support the audit trail; the test values cannot be relied upon without traceability to a calibration standard",
                C: "Optional for Class II only",
                D: "Required only for combined tests"
              },
              answer: "B",
              explanation: "Calibration anchors the test values. Without it, the values cannot be defended on audit. Annual calibration is the convention; keep certificates and reference the instrument serial on every Form 4.3 entry."
            },
            {
              number: 27,
              prompt: "A 1 kW resistive heater on 230 V has a steady current of:",
              options: {
                A: "0.435 A",
                B: "4.35 A",
                C: "10 A",
                D: "100 A"
              },
              answer: "B",
              explanation: "I = P / V = 1000 / 230 ≈ 4.35 A. Resistive load means PF = 1, so the calculated current is the actual current. A 5 A fuse comfortably protects this."
            },
            {
              number: 28,
              prompt: "An IR test at 500 V DC on a Class I extension lead reads 80 MΩ. The result is:",
              options: {
                A: "Fail",
                B: "Pass — well above the 1 MΩ Class I minimum",
                C: "Pass only if Class II",
                D: "Investigate"
              },
              answer: "B",
              explanation: "80 MΩ is excellent. The extension lead is well-insulated. Record the value and proceed with EC and polarity to complete the sequence."
            },
            {
              number: 29,
              prompt: "An IR test on equipment containing internal SPDs, Y-capacitors, or EMC filters at 500 V DC may:",
              options: {
                A: "Always read OL",
                B: "Show artificially low readings because the test voltage clamps the protection components or the leakage current through Y-capacitors is non-trivial",
                C: "Not be possible",
                D: "Damage the IR instrument"
              },
              answer: "B",
              explanation: "Internal SPDs clamp at typically a few hundred volts. Y-capacitors leak at any AC frequency including the test pulse. Both reduce the IR reading without indicating a real fault. Switch to 250 V DC or use the leakage / touch-current test."
            },
            {
              number: 30,
              prompt: "An RCD plug under test for trip time should be tested:",
              options: {
                A: "At its rated tripping current (typically 30 mA), with the trip time compared against the manufacturer's specification",
                B: "At 100 mA always",
                C: "At 230 V always",
                D: "By pressing the integral test button only"
              },
              answer: "A",
              explanation: "The PAT instrument's RCD test mode injects the rated current and measures trip time. The integral test button on the device is a mechanical test only — useful as an in-service check but not equivalent to the calibrated trip-time measurement."
            }
          ]
        },
        {
          id: "v3",
          questions: [
            {
              number: 1,
              prompt: "5 mA in amperes is:",
              options: {
                A: "0.05 A",
                B: "0.005 A",
                C: "0.5 A",
                D: "0.0005 A"
              },
              answer: "B",
              explanation: "5 mA = 5 × 10⁻³ A = 0.005 A. Touch current limit for AC equipment is 3.5 mA = 0.0035 A — useful to know in mA."
            },
            {
              number: 2,
              prompt: "An office laptop has a moulded plug with a sleeved earth pin and the body marked with a double square. It is:",
              options: {
                A: "Class I",
                B: "Class II — sleeved earth pin is for shutter operation only, not connected internally",
                C: "Class III",
                D: "Class 0"
              },
              answer: "B",
              explanation: "Many Class II moulded plugs use a sleeved (plastic-coated) earth pin to operate the BS 1363 socket shutter. The pin is not internally connected. The double-square symbol confirms Class II."
            },
            {
              number: 3,
              prompt: "An EC test at 200 mA is preferred over 25 A when:",
              options: {
                A: "The flex is over 5 m",
                B: "The appliance contains delicate earth-path components such as Y-capacitors or surge filters",
                C: "The appliance is outdoors",
                D: "Always — 200 mA is more accurate"
              },
              answer: "B",
              explanation: "200 mA soft test is gentle on delicate components. 25 A hard tests can damage Y-capacitors and SPDs in the earth path. Use soft for IT/electronics; hard for robust mechanical kit."
            },
            {
              number: 4,
              prompt: "Which test verifies that the L and N conductors are not transposed inside an extension lead?",
              options: {
                A: "EC",
                B: "IR",
                C: "Polarity",
                D: "Touch current"
              },
              answer: "C",
              explanation: "Polarity check confirms L pin → L socket and N pin → N socket end-to-end. EC and IR pass even with reversed L/N. The PAT instrument runs polarity automatically as part of the standard sequence."
            },
            {
              number: 5,
              prompt: "GS38 is the HSE document covering:",
              options: {
                A: "Test probes and leads — for testing in live working",
                B: "Construction site safety",
                C: "Maintaining portable equipment",
                D: "Reporting incidents"
              },
              answer: "A",
              explanation: "GS38 — Electrical test equipment for use by electricians. Covers test probes, leads, fused, finger-guarded, etc. Important reference for the operator's own safety during live testing, not for PAT directly."
            },
            {
              number: 6,
              prompt: "An IR test on a Class II 230 V power tool with no accessible metal can:",
              options: {
                A: "Not be done — pass on visual",
                B: "Be conducted using the touch / leakage test as an alternative; or apply 500 V DC between L+N and any accessible part as designed",
                C: "Be done with EC test only",
                D: "Be done at 1000 V DC"
              },
              answer: "B",
              explanation: "Where probe access to accessible metal is impossible, the COP allows the touch / leakage current test as the alternative. It measures actual current that could flow under operating voltage."
            },
            {
              number: 7,
              prompt: "A Class I 230 V appliance has a 13 A fuse fitted. The flex is 0.75 mm². The combination is:",
              options: {
                A: "Acceptable",
                B: "Unacceptable — 0.75 mm² caps at 6 A, so a 13 A fuse leaves the flex unprotected",
                C: "Acceptable for Class II only",
                D: "Acceptable on Tuesdays"
              },
              answer: "B",
              explanation: "BS 1363 fuse / flex pairing — 0.75 mm² → 6 A; 1.0 mm² → 10 A; 1.25 mm² and above → 13 A. A 13 A fuse on a 0.75 mm² flex would not blow before the flex fails — refit a 6 A fuse and re-test."
            },
            {
              number: 8,
              prompt: "An IR test on a 110 V Class I tool reads 1.5 MΩ at 500 V DC. The result is:",
              options: {
                A: "Pass — exceeds 1 MΩ general minimum",
                B: "Fail — below 2 MΩ",
                C: "Pass only if cordless",
                D: "Investigate"
              },
              answer: "A",
              explanation: "Class I general IR minimum is 1 MΩ. The 110 V supply doesn't change the IR threshold (we test at 500 V DC regardless of operating voltage). 1.5 MΩ is a comfortable pass."
            },
            {
              number: 9,
              prompt: "A 0.5 mm² flex on a small low-current appliance pairs with which plug fuse?",
              options: {
                A: "13 A",
                B: "10 A",
                C: "3 A",
                D: "6 A"
              },
              answer: "C",
              explanation: "BS 1363 — 0.5 mm² caps at 3 A. Common on small lamps, very low current appliances. Don't fit anything higher than 3 A on this flex."
            },
            {
              number: 10,
              prompt: "An IR result of 1.0 MΩ on a Class I appliance is:",
              options: {
                A: "Pass — at the 1 MΩ general minimum",
                B: "Fail",
                C: "Pass only if Class II",
                D: "Marginal — investigate further if practical and monitor over future tests"
              },
              answer: "A",
              explanation: "1 MΩ is at the COP general minimum — strictly a pass. Many operators would still investigate / monitor a marginal pass, but it does not require fail action under the COP."
            },
            {
              number: 11,
              prompt: "An IR test on a Class I drill with the switch off reads 200 MΩ. With the switch on, reading is 0.6 MΩ. The result is:",
              options: {
                A: "Pass — switch-off reading was excellent",
                B: "Investigate — switch-on test sees the full circuit; 0.6 MΩ < 1 MΩ general minimum is a fail (or borderline if thermally elevated)",
                C: "Pass at any reading",
                D: "Pass only if Class II"
              },
              answer: "B",
              explanation: "Switch-off readings are misleading because part of the circuit isn't tested. The switch-on reading is the real one — 0.6 MΩ < 1 MΩ is a fail for Class I (unless heating element 0.3 MΩ rule applies — drills don't normally fall under that)."
            },
            {
              number: 12,
              prompt: "A formal visual check on a kitchen kettle finds the lid latch sticky and the spout tilt inconsistent. The action is:",
              options: {
                A: "Pass — only mechanical",
                B: "Refer for repair / replacement — controls and lid mechanism are part of the safety case",
                C: "Pass with a 'caution' label",
                D: "Reduce the fuse rating"
              },
              answer: "B",
              explanation: "Functional integrity of the controls is part of the visual / functional check. A sticky lid means hot contents could spill on the user; an inconsistent tilt risks scalding. Refer for repair before re-issue."
            },
            {
              number: 13,
              prompt: "A construction site Class II 110 V drill has the data plate marked accordingly. Test set:",
              options: {
                A: "Visual → EC at 25 A → IR at 500 V DC → polarity → functional",
                B: "Visual → IR at 500 V DC (with probe on accessible metal) → polarity → functional",
                C: "Functional → EC",
                D: "Visual only"
              },
              answer: "B",
              explanation: "Class II — no EC. The 110 V supply doesn't change the test set, only the operating voltage. IR at 500 V DC with the probe on accessible metal where applicable; polarity and functional complete the sequence."
            },
            {
              number: 14,
              prompt: "An IR test reads 'OL' (over-range) on a calibrated PAT instrument. The interpretation is:",
              options: {
                A: "Pass — resistance exceeds the instrument's range, i.e. excellent insulation",
                B: "Fail — connection problem",
                C: "Cable error",
                D: "Polarity reversal"
              },
              answer: "A",
              explanation: "OL = over-range — typically > 200 MΩ or > 999 MΩ depending on the instrument. That is excellent insulation. Don't confuse OL with a connection fault."
            },
            {
              number: 15,
              prompt: "A 230 V appliance fails IR at 0.5 MΩ. Touch / leakage current at 230 V reads 1.8 mA AC. The result is:",
              options: {
                A: "Pass on touch current — below 3.5 mA limit, so the appliance is safe",
                B: "The touch-current pass overrides any IR fail; PAT operators may use either result",
                C: "Investigate — the IR result and the touch-current result give different views; if the appliance has surge filtering, 250 V DC IR may give a meaningful reading; otherwise IR fail stands",
                D: "Both are wrong — only EC matters"
              },
              answer: "C",
              explanation: "Touch-current and IR are alternatives where the device construction makes one inappropriate. For surge-filter equipment, the leakage / touch-current test is the meaningful one. For ordinary equipment, IR remains the primary test. Apply judgement."
            },
            {
              number: 16,
              prompt: "A Class I appliance with multiple accessible metal panels: the EC test should be applied:",
              options: {
                A: "From plug earth to the largest panel only",
                B: "From plug earth to each accessible exposed conductive part — verifying each connects through to the earth pin",
                C: "From plug earth to the heating element only",
                D: "Once anywhere on the case"
              },
              answer: "B",
              explanation: "EC tests the path of the protective conductor to ALL accessible exposed conductive parts. A single shared internal earth bond plus internal jumpers should connect every panel through. Test each."
            },
            {
              number: 17,
              prompt: "An RCD test at 5× IΔn (150 mA for a 30 mA RCD) verifies:",
              options: {
                A: "The trip threshold",
                B: "The fast-trip operating time, typically required to operate within 40 ms for type AC general-purpose RCDs",
                C: "Polarity",
                D: "Insulation"
              },
              answer: "B",
              explanation: "5× IΔn applies a fault-scale current. The device must trip within 40 ms (type AC). Combine with the 1× test (which checks the threshold) to fully verify the device is operating per spec."
            },
            {
              number: 18,
              prompt: "A 230 V toaster fails the visual check with food debris in the bottom and a melted plug body. The PAT operator should:",
              options: {
                A: "Clean the appliance and re-issue",
                B: "Withdraw the appliance, replace the plug (and clean if mechanical), re-inspect, then re-test before re-issue",
                C: "Pass with a warning label",
                D: "Reduce the fuse rating"
              },
              answer: "B",
              explanation: "Multiple visual failures = withdraw. Replace the plug, clean the appliance, reinstate the construction, re-inspect, re-test. Don't proceed to electrical tests on a visually failed item — the result has no meaning."
            },
            {
              number: 19,
              prompt: "An IR result of 0.0 MΩ on a Class II hair dryer at 500 V DC indicates:",
              options: {
                A: "Pass",
                B: "Direct short — withdraw and investigate; common cause is moisture ingress or insulation failure",
                C: "Pass only if hand-held",
                D: "Pass only if heating element"
              },
              answer: "B",
              explanation: "0 MΩ = direct path live-to-accessible-metal. The Class II construction has failed. Withdraw, investigate, and refer for repair / replacement before re-test."
            },
            {
              number: 20,
              prompt: "A Class I lamp has a 0.75 mm² flex 1.5 m long. Theoretical EC R is approximately:",
              options: {
                A: "0.039 Ω (≈ 26 mΩ/m × 1.5 m)",
                B: "0.39 Ω",
                C: "1 Ω",
                D: "0.0039 Ω"
              },
              answer: "A",
              explanation: "0.75 mm² ≈ 26 mΩ/m at 20 °C. R = 26 × 1.5 ÷ 1000 = 0.039 Ω. Pass criterion = 0.039 + 0.1 = 0.139 Ω."
            },
            {
              number: 21,
              prompt: "An IR test at 500 V DC on a domestic electric kettle reads 5 MΩ. The result is:",
              options: {
                A: "Pass — well above 1 MΩ",
                B: "Fail",
                C: "Pass only if Class II",
                D: "Investigate"
              },
              answer: "A",
              explanation: "5 MΩ comfortably exceeds 1 MΩ general minimum. The kettle's insulation is sound. Record the value and proceed with EC and polarity / functional checks."
            },
            {
              number: 22,
              prompt: "A 'pass' label without a date is:",
              options: {
                A: "Acceptable — labels never expire",
                B: "Insufficient — without a date, the next-due interval and the test event cannot be tied to a record",
                C: "Acceptable for Class III only",
                D: "Acceptable for hand-held only"
              },
              answer: "B",
              explanation: "Test date is the anchor. Without it, you can't determine when the next test is due, when calibration was done, or which test record the label refers to. ID + date is the minimum data on a label."
            },
            {
              number: 23,
              prompt: "A 230 V Class II hand-held drill has the chuck obviously wobbly. The action is:",
              options: {
                A: "Pass — chuck is mechanical",
                B: "Withdraw — mechanical instability is a safety risk; refer for repair",
                C: "Apply 'caution' label and re-issue",
                D: "Test as Class I"
              },
              answer: "B",
              explanation: "Mechanical condition is part of the COP visual / functional check. A wobbly chuck means the bit could shake loose and become a projectile. Refer for repair before re-test."
            },
            {
              number: 24,
              prompt: "A 'fail' label on an appliance must be:",
              options: {
                A: "Optional",
                B: "Clear, with the appliance physically withdrawn from service to prevent inadvertent use",
                C: "Applied alongside a pass label for clarity",
                D: "Removed after 24 hours"
              },
              answer: "B",
              explanation: "Fail labels stop inadvertent use. Combine with physical withdrawal (quarantine area) so a passer-by can't pick up the kit and use it. Replace the label only after repair and re-test."
            },
            {
              number: 25,
              prompt: "An IR test at 500 V DC on a Class I 1.5 kW heater reads 1.0 MΩ. The result is:",
              options: {
                A: "Pass — at general 1 MΩ minimum (heating element 0.3 MΩ rule allows a lower value if warm)",
                B: "Fail",
                C: "Pass only if cold",
                D: "Investigate at 1000 V DC"
              },
              answer: "A",
              explanation: "1 MΩ is the general Class I minimum. Pass — the appliance's insulation is sound, particularly because heating elements may legitimately read lower when warm. Continue to monitor in future tests for any downward drift."
            },
            {
              number: 26,
              prompt: "A construction-site supply at 110 V CTE means each line is at:",
              options: {
                A: "55 V to earth — the centre tap is earthed, halving the voltage to earth",
                B: "110 V to earth",
                C: "230 V to earth",
                D: "0 V to earth"
              },
              answer: "A",
              explanation: "110 V centre-tapped. Each line is 55 V to earth, but the line-to-line voltage is 110 V. This reduces the shock severity in normal use without changing the appliance Class."
            },
            {
              number: 27,
              prompt: "A 13 A appliance running on a 13 A fuse with 0.75 mm² flex represents:",
              options: {
                A: "Correctly fused",
                B: "Over-fused — the 0.75 mm² flex caps at 6 A; a 13 A fuse would not protect the flex against a low-grade fault",
                C: "Under-fused",
                D: "Unable to draw 13 A"
              },
              answer: "B",
              explanation: "0.75 mm² flex with a 13 A fuse is a classic mistake. The flex would burn out before the fuse blew on a low-grade fault. Refit a 6 A fuse and consider whether the appliance can run within the flex's capacity."
            },
            {
              number: 28,
              prompt: "A formal visual inspection finds an extension lead with a melted-back plug pin. The action is:",
              options: {
                A: "Pass with a 'caution' label",
                B: "Withdraw — melted pins indicate severe overheating; replace the plug, re-inspect, re-test",
                C: "Test only the EC and pass if good",
                D: "Apply tape over the damage"
              },
              answer: "B",
              explanation: "Melted plug pins are a serious sign — usually a high-resistance contact at the socket-pin interface causing significant heat. Withdraw, investigate the cause (load too high, socket damage, etc.) and replace the plug before re-test."
            },
            {
              number: 29,
              prompt: "An RCD plug fails the 1× IΔn test. The PAT operator should:",
              options: {
                A: "Pass",
                B: "Fail and replace the inline RCD before re-test",
                C: "Test at 5× and pass if it trips",
                D: "Reduce the fuse rating"
              },
              answer: "B",
              explanation: "1× IΔn fail means the RCD is non-operational at its rated tripping current. Fail and replace the device. The 5× test verifies fast-trip behaviour but doesn't substitute for the 1× threshold test."
            },
            {
              number: 30,
              prompt: "A Class I appliance with a 1.5 mm² 5 m flex has a plug fuse rated at 13 A. The fuse / flex pairing is:",
              options: {
                A: "Correct — 1.5 mm² accepts 13 A",
                B: "Incorrect — 1.5 mm² caps at 10 A",
                C: "Acceptable for Class II only",
                D: "Cannot be determined"
              },
              answer: "A",
              explanation: "BS 1363 allows 13 A fuse on 1.25 mm² and above. 1.5 mm² accepts 13 A comfortably. Pairing is correct. (1.0 mm² would cap at 10 A, and 0.75 mm² at 6 A.)"
            }
          ]
        },
        {
          id: "v4",
          questions: [
            {
              number: 1,
              prompt: "A 1 A current in milliamps is:",
              options: {
                A: "10 mA",
                B: "100 mA",
                C: "1000 mA",
                D: "10000 mA"
              },
              answer: "C",
              explanation: "1 A = 1000 mA. Be fluent moving between A and mA — touch current limits are quoted in mA, RCD ratings in mA, but appliance load currents in A."
            },
            {
              number: 2,
              prompt: "An appliance with a 2.5 m 1.0 mm² flex has an EC theoretical R of approximately:",
              options: {
                A: "0.0488 Ω (≈ 19.5 mΩ/m × 2.5 m)",
                B: "0.488 Ω",
                C: "1 Ω",
                D: "0.005 Ω"
              },
              answer: "A",
              explanation: "1.0 mm² ≈ 19.5 mΩ/m. R = 19.5 × 2.5 ÷ 1000 = 0.04875 Ω ≈ 0.0488 Ω. Pass criterion = 0.0488 + 0.1 = 0.1488 Ω."
            },
            {
              number: 3,
              prompt: "An IR test on a Class II appliance reads 0.5 MΩ. The result is:",
              options: {
                A: "Pass — above 0.3 MΩ",
                B: "Fail — Class II minimum is 2 MΩ",
                C: "Pass only if hand-held",
                D: "Investigate at 1000 V DC"
              },
              answer: "B",
              explanation: "Class II requires ≥ 2 MΩ at 500 V DC. 0.5 MΩ is well below — fail. Investigate moisture, dust, or insulation degradation."
            },
            {
              number: 4,
              prompt: "Which document is not legally binding but is used to demonstrate compliance with EAWR for in-service equipment?",
              options: {
                A: "BS 7671",
                B: "The IET Code of Practice (5th Edition) — best industry practice, supports duty holder compliance",
                C: "RIDDOR",
                D: "Building Regulations"
              },
              answer: "B",
              explanation: "The COP is industry guidance, not a Statute. But it is the recognised means of demonstrating EAWR Reg 4(2) compliance for in-service portable electrical equipment. Following it is the duty holder's defence."
            },
            {
              number: 5,
              prompt: "An IR test at 500 V DC on a Class I oven element when warm reads 0.25 MΩ. The result is:",
              options: {
                A: "Pass — exceeds 0.3 MΩ heating element minimum",
                B: "Fail — below 0.3 MΩ minimum for heating elements",
                C: "Pass only if cold",
                D: "Investigate"
              },
              answer: "B",
              explanation: "0.25 MΩ < 0.3 MΩ heating-element minimum. Fail. Investigate — the element may be on its last legs or have moisture ingress. Refer for repair / replacement."
            },
            {
              number: 6,
              prompt: "An EC test on a Class I 230 V appliance reads 0.18 Ω with theoretical lead R of 0.05 Ω. Verdict:",
              options: {
                A: "Fail — exceeds 0.1 Ω above theoretical",
                B: "Pass — within 0.1 Ω above theoretical (0.18 − 0.05 = 0.13 Ω marginal; investigate cord-grip / terminations)",
                C: "Pass — well below 1 Ω",
                D: "Pass for Class II only"
              },
              answer: "A",
              explanation: "0.18 − 0.05 = 0.13 Ω, which exceeds 0.1 Ω allowance. Marginal fail / investigate. Re-tighten terminations and re-test; if still high, refer for repair."
            },
            {
              number: 7,
              prompt: "A Class III lamp on a 24 V SELV supply requires which test?",
              options: {
                A: "EC at 25 A",
                B: "IR at 500 V DC",
                C: "Visual / functional only — verify the SELV source separately",
                D: "Polarity at 230 V"
              },
              answer: "C",
              explanation: "Class III equipment is supplied at SELV. The lamp itself only needs visual / functional checks. The SELV source (transformer) is tested separately as a Class I or II appliance with verification that the secondary remains SELV."
            },
            {
              number: 8,
              prompt: "An HSWA Section 7 employee duty includes:",
              options: {
                A: "Carrying out PAT tests",
                B: "Taking reasonable care for own safety and that of others, and cooperating with the employer's safety arrangements",
                C: "Calibrating the test instrument",
                D: "Repairing failed appliances"
              },
              answer: "B",
              explanation: "HSWA Section 7 covers employee duties: take reasonable care, cooperate with the employer. User checks before use, reporting damaged equipment and not using known-faulty kit are practical examples of this duty."
            },
            {
              number: 9,
              prompt: "A 13 A 'rewireable' BS 1363 plug allows the operator to change:",
              options: {
                A: "The fuse and the cable connections",
                B: "Only the fuse",
                C: "Only the cable",
                D: "The colour of the plug"
              },
              answer: "A",
              explanation: "Rewireable plugs are standard on appliances with replaceable flexes. The operator can swap the fuse (correct rating for the load) and re-make the cable connections (live, neutral, earth). Moulded plugs are sealed."
            },
            {
              number: 10,
              prompt: "An IR test reading on a Class I 230 V appliance reads 0.0 MΩ. The 250 V DC retest reads 1.5 MΩ. The likely conclusion is:",
              options: {
                A: "The appliance has surge protection — the 500 V DC reading was misleading; 1.5 MΩ at 250 V DC is acceptable for surge-protected kit",
                B: "The appliance is unsafe regardless",
                C: "The 250 V DC test is invalid",
                D: "The IR test should always be at 1000 V DC"
              },
              answer: "A",
              explanation: "Surge filters clamp at 500 V DC and give a misleading low reading. The 250 V DC test sees the actual insulation. 1.5 MΩ at 250 V DC is acceptable for surge-protected equipment. Record the test voltage in the result for traceability."
            },
            {
              number: 11,
              prompt: "An IR test on equipment containing a power supply with Y-capacitors typically:",
              options: {
                A: "Reads OL always",
                B: "Reads lower than expected because the Y-capacitors leak current at the test voltage; touch / leakage test is often more meaningful",
                C: "Damages the capacitors at 250 V DC",
                D: "Cannot be performed"
              },
              answer: "B",
              explanation: "Y-capacitors are designed to leak some current to earth at AC. At the IR DC test voltage they show a lower IR than the structural insulation alone would imply. The leakage test at operating voltage is often a better measure for these items."
            },
            {
              number: 12,
              prompt: "A Class I appliance on a 110 V supply has an EC test theoretical of 0.04 Ω. Measured reading is 0.12 Ω. The result is:",
              options: {
                A: "Fail — exceeds 0.1 Ω above theoretical (0.12 − 0.04 = 0.08 Ω, within tolerance)",
                B: "Pass — within tolerance (0.12 − 0.04 = 0.08 Ω, within 0.1 Ω allowance)",
                C: "Investigate at 1000 V DC",
                D: "Fail because the supply is 110 V"
              },
              answer: "B",
              explanation: "0.12 − 0.04 = 0.08 Ω of additional resistance — within the 0.1 Ω COP allowance. Pass. The supply voltage doesn't change the EC test method or threshold."
            },
            {
              number: 13,
              prompt: "An IR test on a Class I 110 V drill at 500 V DC reads 4 MΩ. The result is:",
              options: {
                A: "Pass — comfortably above 1 MΩ",
                B: "Fail",
                C: "Pass only if Class III",
                D: "Investigate"
              },
              answer: "A",
              explanation: "4 MΩ comfortably exceeds the 1 MΩ Class I minimum. The drill's insulation is sound. The test voltage is always 500 V DC for the standard PAT IR — independent of the operating supply voltage."
            },
            {
              number: 14,
              prompt: "An IR test on a 230 V appliance with no internal switch (always-on) reads 1.2 MΩ. The result is:",
              options: {
                A: "Pass — above 1 MΩ",
                B: "Fail",
                C: "Pass only if Class II",
                D: "Test with switch off and on"
              },
              answer: "A",
              explanation: "Always-on appliances have no internal switch to worry about. The full circuit is in test always. 1.2 MΩ exceeds 1 MΩ — pass. Record the value for trend monitoring."
            },
            {
              number: 15,
              prompt: "A 230 V resistive heating element of 1.84 kW has a steady current of:",
              options: {
                A: "0.8 A",
                B: "8 A",
                C: "23 A",
                D: "184 A"
              },
              answer: "B",
              explanation: "I = P / V = 1840 / 230 = 8 A. PF = 1 for purely resistive load. Current is the actual current the protective device sees."
            },
            {
              number: 16,
              prompt: "An EC test at 200 mA soft on a Class I 230 V office printer reads 0.15 Ω with theoretical 0.05 Ω. Verdict:",
              options: {
                A: "Pass — within 0.1 Ω above theoretical",
                B: "Fail",
                C: "Pass only if Class II",
                D: "Investigate at 25 A"
              },
              answer: "A",
              explanation: "0.15 − 0.05 = 0.1 Ω — at the limit of the 0.1 Ω allowance. Strictly a pass. Investigate marginal pass — re-seat connections and re-test if practical."
            },
            {
              number: 17,
              prompt: "A 230 V Class I appliance fails IR. The next step is:",
              options: {
                A: "Apply a warning label and re-issue",
                B: "Withdraw, label fail, refer for repair (or replace), re-test before any return to service",
                C: "Re-test in a year",
                D: "Reduce the fuse rating"
              },
              answer: "B",
              explanation: "Failed IR = unsafe. Withdraw, label, repair / replace, re-test. The COP requires the closed-loop process; warning labels with the appliance still in use is not acceptable."
            },
            {
              number: 18,
              prompt: "A 'pass' label that includes the test date and tester ID but no appliance ID is:",
              options: {
                A: "Sufficient if the appliance is unique",
                B: "Insufficient — without an ID, the label cannot be tied back to a specific test record",
                C: "Sufficient for Class II only",
                D: "Sufficient on Tuesdays"
              },
              answer: "B",
              explanation: "ID is the link between the label and the register. Without it, the audit cannot tie the test event to the appliance's history. ID + date + tester is the minimum."
            },
            {
              number: 19,
              prompt: "A formal visual on an extension lead reveals a sticky 'on/off' switch on the trailing socket. The action is:",
              options: {
                A: "Pass — switch is just sticky",
                B: "Refer for repair / replace — controls are part of the construction; failure modes include no isolation when the switch is 'off'",
                C: "Apply a 'caution' label and re-issue",
                D: "Reduce the fuse rating"
              },
              answer: "B",
              explanation: "Mechanical condition of switches matters because they may not break the live cleanly. Refer for repair (replace the switch or the lead). Don't pass with mechanical defects."
            },
            {
              number: 20,
              prompt: "An EC test on a Class I 230 V floor polisher reads 0.075 Ω with 1.5 mm² 4 m flex. Theoretical R is approximately 0.052 Ω. Verdict:",
              options: {
                A: "Fail",
                B: "Pass — within 0.1 Ω above theoretical (0.075 − 0.052 = 0.023 Ω)",
                C: "Pass only if Class II",
                D: "Investigate at 1000 V DC"
              },
              answer: "B",
              explanation: "0.075 − 0.052 = 0.023 Ω — well within the 0.1 Ω allowance. Pass. The earth path is intact and the terminations are sound."
            },
            {
              number: 21,
              prompt: "An IR test on a Class I 110 V site lamp at 500 V DC reads 50 MΩ. The result is:",
              options: {
                A: "Pass — far above 1 MΩ",
                B: "Fail",
                C: "Pass only if Class II",
                D: "Test at 250 V DC"
              },
              answer: "A",
              explanation: "50 MΩ comfortably exceeds 1 MΩ Class I minimum. The 500 V DC test voltage is appropriate for a robust 110 V site lamp without surge protection."
            },
            {
              number: 22,
              prompt: "An IR test on a Class I 230 V kettle at 500 V DC reads 2 MΩ when warm. The result is:",
              options: {
                A: "Pass — above 1 MΩ general minimum",
                B: "Fail — below 5 MΩ",
                C: "Pass only if Class II",
                D: "Investigate"
              },
              answer: "A",
              explanation: "2 MΩ is comfortably above the 1 MΩ Class I general minimum and the 0.3 MΩ heating element minimum. Pass and record. Continue trend monitoring on subsequent tests."
            },
            {
              number: 23,
              prompt: "Which COP form records appliances that have failed and the corresponding action taken?",
              options: {
                A: "Form 4.1 — inventory",
                B: "Form 4.2 — formal visual only",
                C: "Form 4.3 — combined inspection and test",
                D: "Form 4.4 — repair register"
              },
              answer: "D",
              explanation: "Form 4.4 closes the loop on every fail. Without it, fails could disappear from the system. Auditors look for fails on Form 4.3 cross-referenced to action on Form 4.4."
            },
            {
              number: 24,
              prompt: "An IR test on a Class I 230 V hand drill at 500 V DC reads 8 MΩ. The result is:",
              options: {
                A: "Pass — well above 1 MΩ",
                B: "Fail",
                C: "Pass only if Class II",
                D: "Investigate at 1000 V DC"
              },
              answer: "A",
              explanation: "8 MΩ comfortably exceeds 1 MΩ. Insulation is sound. Record and proceed with EC and polarity / functional checks."
            },
            {
              number: 25,
              prompt: "A typical commercial kitchen Class I mobile appliance interval per the COP is approximately:",
              options: {
                A: "12 months combined inspection & test, 6 months formal visual",
                B: "5 years",
                C: "Daily",
                D: "Never"
              },
              answer: "A",
              explanation: "COP Table 7.1 — kitchen mobile Class I: 12-month combined test + 6-month formal visual. The wet, hot, greasy environment justifies the tighter regime than office equipment."
            },
            {
              number: 26,
              prompt: "An IR test on a Class I 230 V iron when cold at 500 V DC reads 5 MΩ. The result is:",
              options: {
                A: "Pass — above 1 MΩ",
                B: "Fail",
                C: "Pass only if heating element warm",
                D: "Investigate"
              },
              answer: "A",
              explanation: "5 MΩ exceeds 1 MΩ — pass. Heating elements may legitimately read lower when warm (down to 0.3 MΩ), but a cold reading of 5 MΩ indicates good insulation. Record and proceed."
            },
            {
              number: 27,
              prompt: "A 0.75 mm² flex on a 1 kW kettle drawing 4.35 A. The plug fuse should be:",
              options: {
                A: "13 A",
                B: "10 A",
                C: "6 A",
                D: "3 A"
              },
              answer: "C",
              explanation: "0.75 mm² flex caps at 6 A (BS 1363). The 4.35 A draw is below 6 A — pair with a 6 A plug fuse to protect both the appliance current and the flex. Don't fit a 13 A fuse on 0.75 mm² flex."
            },
            {
              number: 28,
              prompt: "An IR test on a 230 V Class II 2-core hair dryer at 500 V DC reads 3 MΩ. The result is:",
              options: {
                A: "Pass — above 2 MΩ Class II minimum",
                B: "Fail",
                C: "Pass only if Class III",
                D: "Investigate"
              },
              answer: "A",
              explanation: "3 MΩ exceeds the 2 MΩ Class II minimum. The double / reinforced insulation is sound. Pass and record."
            },
            {
              number: 29,
              prompt: "An IR test reads 0.0 MΩ on a Class I 230 V deep fryer. The most likely cause is:",
              options: {
                A: "Surge protection clamping",
                B: "Damp food residue or oil providing a leakage path between live parts and earthed metalwork — withdraw, clean, dry, re-test",
                C: "Polarity reversal",
                D: "EC failure"
              },
              answer: "B",
              explanation: "Deep fryers and similar wet-food kit get oil and water on internal surfaces. The leakage path between live and earth becomes significant at the IR test voltage. Clean, dry, re-test; if still failing, refer for repair."
            },
            {
              number: 30,
              prompt: "An RCD plug-in adapter under test trips at 30 mA in 90 ms. The result is:",
              options: {
                A: "Pass — within typical 200 ms manufacturer limit at 1× IΔn",
                B: "Fail",
                C: "Pass only if Class II",
                D: "Investigate"
              },
              answer: "A",
              explanation: "90 ms at 1× IΔn is well within most portable RCD specs (typically 200 ms or less). Confirm against the device's marked rating; pass and record. Apply a 5× test for fast-trip verification if part of the standard regime."
            }
          ]
        },
        {
          id: "v5",
          questions: [
            {
              number: 1,
              prompt: "1.5 A in milliamps is:",
              options: {
                A: "15 mA",
                B: "150 mA",
                C: "1500 mA",
                D: "15000 mA"
              },
              answer: "C",
              explanation: "1.5 A = 1500 mA. Don't get caught out: PAT instruments display test currents and limits in different units depending on context. Be confident moving between A and mA."
            },
            {
              number: 2,
              prompt: "An EC test using the soft 200 mA test on a Class I IT cabinet reads 0.04 Ω. Theoretical lead resistance is 0.025 Ω. Verdict:",
              options: {
                A: "Fail",
                B: "Pass — within 0.1 Ω above theoretical",
                C: "Pass only if Class II",
                D: "Investigate at 25 A"
              },
              answer: "B",
              explanation: "0.04 − 0.025 = 0.015 Ω of additional resistance — well within the 0.1 Ω allowance. Pass. The soft test is appropriate for IT cabinet with surge filtering."
            },
            {
              number: 3,
              prompt: "A 230 V Class I appliance with a 13 A moulded plug fuse is drawing 12 A in operation. Fuse rating is:",
              options: {
                A: "Inadequate — needs 16 A",
                B: "Adequate — 13 A is the maximum BS 1363 plug fuse and protects an appliance up to ~13 A",
                C: "Adequate only with 1.5 mm² flex",
                D: "Inadequate — needs 30 A"
              },
              answer: "B",
              explanation: "13 A is the max BS 1363 plug fuse. A 12 A appliance is comfortably within. The flex must be at least 1.25 mm² for a 13 A fuse — confirm before passing."
            },
            {
              number: 4,
              prompt: "An IR test at 500 V DC on a Class I appliance with internal SPD reads 0.4 MΩ. Re-test at 250 V DC reads 8 MΩ. Conclusion:",
              options: {
                A: "Fail — 500 V test was correct",
                B: "Pass — the 250 V DC test gives the meaningful reading on surge-protected equipment; record both for traceability",
                C: "Investigate at 1000 V DC",
                D: "Re-test the next day"
              },
              answer: "B",
              explanation: "SPDs clamp at high test voltages giving misleading low IR. The COP allows the 250 V DC test for surge-protected equipment. 8 MΩ at 250 V DC is comfortably above 1 MΩ. Record both readings and the test voltage chosen."
            },
            {
              number: 5,
              prompt: "An IR test on a 230 V Class II hand drill at 500 V DC reads 1.9 MΩ. The result is:",
              options: {
                A: "Pass — above 1 MΩ",
                B: "Fail — Class II minimum is 2 MΩ",
                C: "Pass only if hand-held",
                D: "Investigate"
              },
              answer: "B",
              explanation: "Class II requires ≥ 2 MΩ. 1.9 MΩ is just below — fail. Investigate moisture, dust, or insulation degradation. The drill may have been dropped or used in damp conditions."
            },
            {
              number: 6,
              prompt: "An EC test using 25 A on a Class I 230 V workshop power tool reads 0.085 Ω. Theoretical lead R is 0.05 Ω. Verdict:",
              options: {
                A: "Pass — within 0.1 Ω above theoretical",
                B: "Fail",
                C: "Pass only if Class II",
                D: "Investigate"
              },
              answer: "A",
              explanation: "0.085 − 0.05 = 0.035 Ω of additional resistance — comfortably within the 0.1 Ω allowance. The 25 A hard test is appropriate for robust workshop kit. Pass."
            },
            {
              number: 7,
              prompt: "An IR test on a Class I 230 V freezer when warm reads 1.2 MΩ. The result is:",
              options: {
                A: "Pass — above 1 MΩ general minimum",
                B: "Fail",
                C: "Pass only if Class II",
                D: "Investigate"
              },
              answer: "A",
              explanation: "1.2 MΩ exceeds 1 MΩ general Class I minimum. Pass. Freezers with stainless surfaces and earthed metalwork are typical Class I — record, monitor trend over future tests."
            },
            {
              number: 8,
              prompt: "An RCD trip at 5× IΔn (150 mA) shows 35 ms. The result for a type AC RCD is:",
              options: {
                A: "Pass — within 40 ms requirement",
                B: "Fail — over 30 ms",
                C: "Pass only if Class II",
                D: "Investigate at 1× IΔn"
              },
              answer: "A",
              explanation: "Type AC RCD at 5× IΔn must trip within 40 ms. 35 ms is within. Combined with a passing 1× test, the device is operating per spec."
            },
            {
              number: 9,
              prompt: "A 230 V resistive heater of 3 kW. Steady current is:",
              options: {
                A: "10 A",
                B: "13.04 A",
                C: "23 A",
                D: "100 A"
              },
              answer: "B",
              explanation: "I = P / V = 3000 / 230 = 13.04 A. The 13 A plug fuse is just adequate (right at its rating). For repeated 13 A draw, consider a higher-current connection or a smaller heater."
            },
            {
              number: 10,
              prompt: "An IR test on a 230 V Class II 2-core hair clipper at 500 V DC reads 2.5 MΩ. The result is:",
              options: {
                A: "Pass — above 2 MΩ Class II minimum",
                B: "Fail",
                C: "Pass only if Class III",
                D: "Investigate"
              },
              answer: "A",
              explanation: "2.5 MΩ exceeds the 2 MΩ Class II minimum. Pass. The double / reinforced insulation is sound. Record the value and proceed with polarity / functional."
            },
            {
              number: 11,
              prompt: "An IR test on a Class I extension lead reads OL on the calibrated PAT instrument. The verdict is:",
              options: {
                A: "Pass — over-range, i.e. excellent insulation",
                B: "Fail",
                C: "Cable disconnected",
                D: "Polarity reversal"
              },
              answer: "A",
              explanation: "OL = over-range. The IR exceeds the instrument's measurement limit (typically > 200 MΩ or > 999 MΩ). Excellent insulation. Don't confuse OL with a connection fault."
            },
            {
              number: 12,
              prompt: "A 1.0 mm² 7 m flex has a theoretical EC resistance of approximately:",
              options: {
                A: "0.137 Ω (≈ 19.5 mΩ/m × 7 m)",
                B: "1 Ω",
                C: "0.039 Ω",
                D: "0.014 Ω"
              },
              answer: "A",
              explanation: "1.0 mm² ≈ 19.5 mΩ/m. R = 19.5 × 7 ÷ 1000 = 0.1365 Ω ≈ 0.137 Ω. Pass criterion = 0.137 + 0.1 = 0.237 Ω."
            },
            {
              number: 13,
              prompt: "A faulty cord-grip on a flex is best detected by:",
              options: {
                A: "An IR test",
                B: "Visual inspection (cord is loose, sheath is pulled back, conductors visible) plus pulling firmly on the flex to verify mechanical retention",
                C: "Polarity check",
                D: "EC test only"
              },
              answer: "B",
              explanation: "Cord-grip failures are mechanical, not electrical. Visual + a firm tug on the flex (pulling away from the appliance) verifies the cord-grip holds. A loose grip means conductors take the strain and fail next."
            },
            {
              number: 14,
              prompt: "An EC test at 200 mA soft on a Class I 230 V monitor reads 0.07 Ω with theoretical R 0.02 Ω. Verdict:",
              options: {
                A: "Pass — within 0.1 Ω above theoretical",
                B: "Fail",
                C: "Pass only if Class II",
                D: "Investigate at 25 A"
              },
              answer: "A",
              explanation: "0.07 − 0.02 = 0.05 Ω of additional resistance — within 0.1 Ω allowance. Pass. The soft 200 mA test is appropriate for IT monitors with surge filtering."
            },
            {
              number: 15,
              prompt: "An IR test on a Class I 230 V toaster when cold at 500 V DC reads 1.5 MΩ. The result is:",
              options: {
                A: "Pass — above 1 MΩ",
                B: "Fail",
                C: "Pass only if Class II",
                D: "Investigate"
              },
              answer: "A",
              explanation: "1.5 MΩ exceeds 1 MΩ general minimum. Heating elements may legitimately read lower when warm (down to 0.3 MΩ), but a cold reading of 1.5 MΩ is well within. Pass and record."
            },
            {
              number: 16,
              prompt: "A duty holder's risk assessment says 'PAT every 12 months for everything'. This approach is:",
              options: {
                A: "Best practice",
                B: "Inadequate — risk-based intervals consider equipment type, Class, environment, use and history; one size doesn't fit all",
                C: "Mandated by EAWR",
                D: "Required by the COP"
              },
              answer: "B",
              explanation: "EAWR / COP / HSG107 all describe risk-based intervals. A blanket 12-month rule may over-test some kit (low-risk office IT) and under-test others (kitchen appliances or hand-held tools). The risk assessment must be specific."
            },
            {
              number: 17,
              prompt: "An IR test on a 230 V Class I appliance reads 'OL' but the EC reading is 1.2 Ω. The IR result alone:",
              options: {
                A: "Pass the appliance — OL is excellent",
                B: "Cannot pass without a passing EC; 1.2 Ω is far above 0.1 Ω + theoretical and indicates a poor earth path",
                C: "Pass for Class II only",
                D: "Pass for Class III"
              },
              answer: "B",
              explanation: "All applicable tests must pass before the appliance is passed. OL on IR is great; but 1.2 Ω on EC is a fail (way above the 0.1 Ω + theoretical allowance). Investigate the earth path before any pass decision."
            },
            {
              number: 18,
              prompt: "A 230 V Class I 4 kW appliance has a steady current of approximately:",
              options: {
                A: "1.74 A",
                B: "17.4 A — too much for a 13 A plug fuse, requires a different connection (e.g. fused spur)",
                C: "100 A",
                D: "0.4 A"
              },
              answer: "B",
              explanation: "I = P / V = 4000 / 230 ≈ 17.4 A. Exceeds 13 A — cannot run on a BS 1363 13 A plug. Hardwire via FCU at appropriate rating, or use IEC 60309 connector for higher currents."
            },
            {
              number: 19,
              prompt: "An IR test on a Class II 230 V hand-held kettle at 500 V DC reads 4 MΩ. The result is:",
              options: {
                A: "Pass — exceeds 2 MΩ Class II minimum",
                B: "Fail",
                C: "Pass only if Class III",
                D: "Investigate at 1000 V DC"
              },
              answer: "A",
              explanation: "4 MΩ comfortably exceeds the 2 MΩ Class II minimum. Pass and record. Class II hand-held kettles are unusual but exist; verify Class via the data plate before applying the test set."
            },
            {
              number: 20,
              prompt: "An EC test on a Class I 230 V refrigerator reads 0.06 Ω with theoretical lead R 0.04 Ω. Verdict:",
              options: {
                A: "Pass — within 0.1 Ω above theoretical",
                B: "Fail",
                C: "Pass only if Class II",
                D: "Investigate"
              },
              answer: "A",
              explanation: "0.06 − 0.04 = 0.02 Ω of additional resistance — well within the 0.1 Ω allowance. Pass. The earth path is intact and terminations are sound."
            },
            {
              number: 21,
              prompt: "Records of inspections and tests are typically kept for:",
              options: {
                A: "Three months",
                B: "The lifetime of the equipment",
                C: "Just the current year",
                D: "Only until the next inspection"
              },
              answer: "B",
              explanation: "Lifetime records support trend analysis (drift in IR, repeat fails) and demonstrate the maintenance regime over time. Auditors and insurers may request the historical chain — keep it intact."
            },
            {
              number: 22,
              prompt: "A formal visual finds the moulded plug pins blackened. The most likely cause is:",
              options: {
                A: "Poor mains supply",
                B: "Persistent loose contact in the socket — high resistance heating; refer to the duty holder for both the appliance and the supply socket",
                C: "Overload",
                D: "Lightning"
              },
              answer: "B",
              explanation: "Blackened pins indicate sustained high-resistance contact in the socket. Heat builds at the bad joint. Replace the plug, refer the socket to the fixed-installation team for inspection, and re-test the appliance after."
            },
            {
              number: 23,
              prompt: "An IR test on a 230 V Class I 1 kW heater when warm reads 0.45 MΩ. The result is:",
              options: {
                A: "Pass — above 0.3 MΩ heating element minimum",
                B: "Fail — below 1 MΩ general minimum",
                C: "Pass only if Class II",
                D: "Investigate at 1000 V DC"
              },
              answer: "A",
              explanation: "Heating elements have a 0.3 MΩ threshold when warm under the COP. 0.45 MΩ is within tolerance. Investigate further only if it falls towards 0.3 MΩ on later tests."
            },
            {
              number: 24,
              prompt: "An IR test on a Class I 230 V office printer with surge protection at 500 V DC reads 0.3 MΩ. Re-test at 250 V DC reads 6 MΩ. Verdict:",
              options: {
                A: "Pass — 250 V DC reading shows the structural insulation is sound; 500 V DC was clamped by the SPD",
                B: "Fail",
                C: "Cannot pass on 250 V DC reading",
                D: "Investigate at 1000 V DC"
              },
              answer: "A",
              explanation: "The COP allows 250 V DC IR for surge-protected equipment. The 6 MΩ reading shows the actual insulation is fine. Record both readings and the test voltage chosen for traceability."
            },
            {
              number: 25,
              prompt: "An IR test on a 230 V Class II 2-core 0.75 mm² extension lead at 500 V DC reads 80 MΩ. The result is:",
              options: {
                A: "Pass — exceeds 2 MΩ Class II minimum",
                B: "Fail",
                C: "Pass only if 3-core",
                D: "Investigate"
              },
              answer: "A",
              explanation: "80 MΩ comfortably exceeds the 2 MΩ Class II minimum for the 2-core lead. Pass and record. The lead's flex CSA dictates fuse rating: 0.75 mm² caps at 6 A."
            },
            {
              number: 26,
              prompt: "Touch current limit for AC equipment per the COP / IEC 60990 is:",
              options: {
                A: "1 mA",
                B: "3.5 mA",
                C: "5 mA",
                D: "10 mA"
              },
              answer: "B",
              explanation: "3.5 mA RMS for AC equipment. 5 mA DC ripple-free for DC. Exceeding 3.5 mA AC indicates faulty insulation or excessive EMC filter leakage. Useful when standard IR is unsuitable."
            },
            {
              number: 27,
              prompt: "Touch current limit for DC equipment per the COP / IEC 60990 is:",
              options: {
                A: "0.5 mA",
                B: "1 mA",
                C: "3.5 mA",
                D: "5 mA"
              },
              answer: "D",
              explanation: "5 mA ripple-free DC. The DC limit is higher than the AC limit (3.5 mA AC) because DC is less effective at causing fibrillation. Both limits are derived from human physiology data in IEC 60479."
            },
            {
              number: 28,
              prompt: "An IR test on a 230 V Class I drill at 500 V DC reads 1.0 MΩ exactly. The result is:",
              options: {
                A: "Pass — at general minimum",
                B: "Fail",
                C: "Pass only if Class II",
                D: "Investigate / consider re-test"
              },
              answer: "A",
              explanation: "1 MΩ is at the COP general minimum — strictly a pass. Many operators investigate marginal pass — re-seat connections, dry / clean, re-test. But strictly, 1.0 MΩ is acceptable per the COP."
            },
            {
              number: 29,
              prompt: "A formal visual on a Class I 230 V kettle finds the cord-grip slack and the inner cores visible. The action is:",
              options: {
                A: "Pass with a 'caution' label",
                B: "Refer for repair — replace the plug, re-fit the cord-grip, re-inspect, re-test",
                C: "Test EC and pass if good",
                D: "Reduce the fuse rating"
              },
              answer: "B",
              explanation: "Loose cord-grip is a visual fail. The conductors take the strain instead of the sheath; the cores will break next. Repair (replace plug or rewire) and re-inspect / re-test before re-issue."
            },
            {
              number: 30,
              prompt: "Frequency of testing for a Class I hand-held tool in industrial environment is typically:",
              options: {
                A: "Daily",
                B: "Combined inspection & test every 6 months, formal visual every 1 month",
                C: "Every 5 years",
                D: "Never"
              },
              answer: "B",
              explanation: "COP Table 7.1 — Class I hand-held in industry: 6-month combined test, 1-month formal visual is a typical recommended starting point. Rough handling and demanding environments justify the tighter regime."
            }
          ]
        }
      ]
    },
    {
      id: "section-5-merged-pat-fundamentals",
      title: "Section 5 — Merged PAT Fundamentals",
      variants: [
        {
          id: "v1",
          questions: [
            {
              number: 1,
              prompt: "One factor which does NOT influence the initial frequency of inspection and testing of appliances is:",
              options: {
                A: "Whether the appliance is Class I or Class II",
                B: "Whether the appliance is stationary or fixed",
                C: "The previous inspection and test of the fixed wiring",
                D: "The environment in which the appliance is utilised"
              },
              answer: "C",
              explanation: "PAT frequency is driven by class, equipment type (mobile/portable/stationary/fixed), use, environment and history of the appliance itself. The state of the fixed wiring is a separate matter — covered by EICR."
            },
            {
              number: 2,
              prompt: "Which is carried out FIRST during in-service inspection and testing?",
              options: {
                A: "Earth continuity tests",
                B: "Formal visual inspection",
                C: "Polarity testing",
                D: "Insulation testing"
              },
              answer: "B",
              explanation: "Always start with a thorough visual inspection — many faults (damaged cables, scorching, missing covers) are spotted before any electrical test. Tests come after the visual confirms the equipment is fit to test."
            },
            {
              number: 3,
              prompt: "Where formal visual inspections are carried out, the results:",
              options: {
                A: "Need only be recorded if requested by a supervisor",
                B: "Need not be recorded, whether results are satisfactory or unsatisfactory",
                C: "Should be recorded, whether satisfactory or unsatisfactory",
                D: "Need only be recorded if unsatisfactory"
              },
              answer: "C",
              explanation: "Formal visual inspections are formally recorded — pass or fail — to demonstrate the duty holder's maintenance regime. User checks are different (only faults reported), but formal visuals are always logged."
            },
            {
              number: 4,
              prompt: "A Class I appliance passes earth continuity but fails insulation resistance between live conductors and accessible metalwork. The next action is:",
              options: {
                A: "Apply a pass label because the earth is continuous",
                B: "Fail / withdraw the item from service and investigate or repair before retesting",
                C: "Increase the plug fuse rating",
                D: "Record it as Class II"
              },
              answer: "B",
              explanation: "Earth continuity proves the fault path exists; it does not make failed insulation acceptable. A Class I appliance with live-to-earth insulation failure is unsafe and must be taken out of service until repaired and retested."
            },
            {
              number: 5,
              prompt: "The SI unit of electrical resistance is the:",
              options: {
                A: "Ampere (A)",
                B: "Volt (V)",
                C: "Ohm (Ω)",
                D: "Watt (W)"
              },
              answer: "C",
              explanation: "Resistance is measured in ohms (Ω). The volt is the unit of potential difference, the ampere is the unit of current, and the watt is the unit of power. Knowing your units cold matters because BS 7671 tables, calculations and test-instrument readings all assume you can read them at a glance."
            },
            {
              number: 6,
              prompt: "A circuit has 230 V supply and 23 Ω resistance. The current is:",
              options: {
                A: "0.1 A",
                B: "10 A",
                C: "23 A",
                D: "5290 A"
              },
              answer: "B",
              explanation: "By Ohm's law I = V / R = 230 / 23 = 10 A. Be ready to rearrange V = I × R in any direction without writing it down — you'll use it in voltage drop, EFLI and circuit-design work constantly."
            },
            {
              number: 7,
              prompt: "A 2.3 kW resistive heating element on a 230 V supply draws:",
              options: {
                A: "0.1 A",
                B: "5 A",
                C: "10 A",
                D: "100 A"
              },
              answer: "C",
              explanation: "P = V × I, so I = P / V = 2300 / 230 = 10 A. For a purely resistive load (kettle, immersion, fan heater) the power factor is 1, so the calculated current is the actual current the protective device sees."
            },
            {
              number: 8,
              prompt: "A purely resistive load (e.g. heating element) has a power factor of:",
              options: {
                A: "0",
                B: "0.85",
                C: "1.0",
                D: "1.732"
              },
              answer: "C",
              explanation: "Unity (1.0). Power factor = cos φ between V and I; for a pure resistor V and I are in phase (φ = 0°), so PF = 1. Inductive loads (motors, ballasts) lag and capacitive loads lead, which is why PFC capacitor banks exist on industrial supplies."
            },
            {
              number: 9,
              prompt: "Two 10 Ω heating elements in series across a 230 V supply. Circuit current is approximately:",
              options: {
                A: "5.75 A",
                B: "11.5 A",
                C: "23 A",
                D: "46 A"
              },
              answer: "B",
              explanation: "Series resistances add: 10 Ω + 10 Ω = 20 Ω. I = V/R = 230/20 = 11.5 A. The trap is to treat the two heaters as parallel, which would halve the resistance and double the current instead."
            },
            {
              number: 10,
              prompt: "A 230 V supply feeds a purely resistive load drawing 8 A. Power consumed is:",
              options: {
                A: "28.75 W",
                B: "238 W",
                C: "1.84 kW",
                D: "184 kW"
              },
              answer: "C",
              explanation: "P = V × I = 230 × 8 = 1840 W = 1.84 kW. Because the load is purely resistive, power factor is 1 and there is no separate apparent-power correction."
            },
            {
              number: 11,
              prompt: "Two 10 Ω heating elements in PARALLEL across a 230 V supply. Total current is approximately:",
              options: {
                A: "11.5 A",
                B: "23 A",
                C: "46 A",
                D: "230 A"
              },
              answer: "C",
              explanation: "Parallel: R_total = (R1 × R2) / (R1 + R2) = 100/20 = 5 Ω. I = 230/5 = 46 A. Each element carries 23 A; total at the supply is the sum. Series halves; parallel doubles in this case."
            },
            {
              number: 12,
              prompt: "An appliance consumes 460 W at 230 V. Current drawn:",
              options: {
                A: "0.5 A",
                B: "2 A",
                C: "23 A",
                D: "460 A"
              },
              answer: "B",
              explanation: "I = P/V = 460/230 = 2 A. Useful for small appliances — confirms a 3 A plug fuse is adequate."
            },
            {
              number: 13,
              prompt: "A formal visual finds an extension lead with a slightly damaged outer sheath, cores intact. Action:",
              options: {
                A: "Pass with no further action",
                B: "Withdraw and replace — sheath is part of the construction; tape repairs are not acceptable",
                C: "Apply tape and pass",
                D: "Reduce fuse rating"
              },
              answer: "B",
              explanation: "Outer sheath is mechanical protection. Once breached, cores are vulnerable to abrasion, moisture, crushing. Replace the lead — tape patches are not a permitted repair under the COP."
            },
            {
              number: 14,
              prompt: "An IR test on a 230 V Class I appliance reads 50 MΩ. Verdict:",
              options: {
                A: "Pass — well above 1 MΩ",
                B: "Fail",
                C: "Pass only if Class II",
                D: "Investigate"
              },
              answer: "A",
              explanation: "50 MΩ comfortably exceeds 1 MΩ general minimum. Pass and record. The insulation is excellent."
            },
            {
              number: 15,
              prompt: "EAWR Reg 4(2) requires that:",
              options: {
                A: "PAT testing is carried out every 12 months",
                B: "Systems shall be maintained so as to prevent, so far as is reasonably practicable, danger",
                C: "All equipment is replaced every 5 years",
                D: "Only an electrician may test"
              },
              answer: "B",
              explanation: "EAWR 4(2) is the maintenance duty — outcome-based ('prevent danger'), measured against 'reasonably practicable'. PAT is the standard means of evidencing the maintenance is happening, but the regulation does not specify how the duty must be discharged."
            },
            {
              number: 16,
              prompt: "An IT engineer's PC with surge filtering. Best PAT IR test approach:",
              options: {
                A: "500 V DC IR followed by 250 V DC IR if the first fails",
                B: "Direct to 250 V DC IR — surge filter would clamp 500 V; record the chosen test voltage on the result",
                C: "1000 V DC IR",
                D: "Skip IR entirely"
              },
              answer: "B",
              explanation: "IT equipment with surge filtering is the classic 250 V DC case. Use 250 V DC directly to avoid clamping or damaging the SPD. Record the test voltage so the result is properly traceable."
            },
            {
              number: 17,
              prompt: "A 230 V Class I appliance drawing 13 A continuously. The plug fuse:",
              options: {
                A: "13 A — at the BS 1363 maximum",
                B: "16 A",
                C: "10 A",
                D: "20 A"
              },
              answer: "A",
              explanation: "13 A is the highest BS 1363 plug fuse. The flex must be at least 1.25 mm² for a 13 A fuse. For continuous draws at 13 A, consider a fixed connection (FCU) rather than a plug-and-socket."
            },
            {
              number: 18,
              prompt: "A pass label that combines the test date, appliance ID and tester ID lets the auditor:",
              options: {
                A: "Determine the next-due date",
                B: "Trace the label back to the test record on Form 4.3 and verify the test event",
                C: "Read the manufacturer's serial",
                D: "Check the IP rating"
              },
              answer: "B",
              explanation: "ID + date + tester is the minimum data for traceability. The auditor uses these to find the corresponding Form 4.3 entry and verify the values, the calibration of the instrument, and the closing-out of any failure."
            },
            {
              number: 19,
              prompt: "A 230 V Class II appliance has accessible metal but no earth pin. The appropriate IR test:",
              options: {
                A: "EC at 25 A",
                B: "500 V DC IR with the probe on accessible metal parts; ≥ 2 MΩ Class II minimum",
                C: "1000 V DC IR",
                D: "Polarity test only"
              },
              answer: "B",
              explanation: "Class II IR test: 500 V DC between L+N (joined at the plug) and the accessible metal via the test probe. Acceptance ≥ 2 MΩ. Class II has no earth, so EC is meaningless."
            },
            {
              number: 20,
              prompt: "An RCD test at 1× IΔn for a 30 mA portable device shows a 250 ms trip time. Common manufacturer specs:",
              options: {
                A: "Pass — under 1 second",
                B: "Borderline — typical portable RCDs spec ≤ 200 ms; 250 ms suggests the device is sluggish and may not meet its label rating",
                C: "Pass for Class II only",
                D: "Pass on Tuesdays"
              },
              answer: "B",
              explanation: "Most portable RCDs trip well within 200 ms at 1× IΔn. 250 ms is on the edge. Compare against the device's marked rating and fail if outside spec. Always check the label."
            },
            {
              number: 21,
              prompt: "An EC test on a Class I 230 V workshop drill reads 0.16 Ω. The lead is 1.5 mm² 4 m long, theoretical 0.052 Ω. Verdict:",
              options: {
                A: "Pass",
                B: "Fail — additional resistance 0.108 Ω exceeds 0.1 Ω allowance",
                C: "Pass only if Class II",
                D: "Investigate at 1000 V DC"
              },
              answer: "B",
              explanation: "0.16 − 0.052 = 0.108 Ω of additional resistance — just outside the 0.1 Ω allowance. Marginal fail; investigate cord-grip / terminations and re-test. May pass after re-seating."
            },
            {
              number: 22,
              prompt: "A duty holder's competency framework should consider:",
              options: {
                A: "Only Level 3 — qualified electricians",
                B: "All three levels — Level 1 (user), Level 2 (formal visual + combined test by trained non-electrician), Level 3 (electrically skilled)",
                C: "Only Level 2",
                D: "Only Level 1"
              },
              answer: "B",
              explanation: "COP Appendix VII recognises three levels. The framework lets the duty holder match the competence to the activity — most user checks are Level 1; combined tests are typically Level 2 with Level 3 oversight on more complex kit."
            },
            {
              number: 23,
              prompt: "A 230 V appliance has a 3-core flex with the earth core conductor open-circuit at the appliance end. The EC test will:",
              options: {
                A: "Pass",
                B: "Fail with very high resistance / OL — the protective conductor is broken",
                C: "Pass only if Class II",
                D: "Pass if IR is good"
              },
              answer: "B",
              explanation: "Open earth = no path from plug pin to appliance metal. EC test reads OL or very high. Fail and investigate — usually a broken core at the appliance terminal or the cord-grip."
            },
            {
              number: 24,
              prompt: "An IR test on a Class I 230 V drill at 500 V DC reads 0.8 MΩ. The result is:",
              options: {
                A: "Pass",
                B: "Fail — below 1 MΩ general minimum",
                C: "Pass only if Class II",
                D: "Investigate at 1000 V DC"
              },
              answer: "B",
              explanation: "0.8 MΩ < 1 MΩ general Class I minimum. Fail. Drill insulation may be degraded by moisture, brush dust, or end-of-life windings. Refer for inspection / repair."
            },
            {
              number: 25,
              prompt: "An IR test at 500 V DC on a 230 V Class I 2 kW heater when warm reads 0.45 MΩ. The verdict is:",
              options: {
                A: "Pass — heating elements may read down to 0.3 MΩ when warm",
                B: "Fail — below 1 MΩ general",
                C: "Pass only if cold",
                D: "Investigate at 1000 V DC"
              },
              answer: "A",
              explanation: "Heating elements have a 0.3 MΩ threshold when warm under the COP. 0.45 MΩ is within tolerance. Investigate if the value drifts towards 0.3 MΩ on later tests."
            }
          ]
        },
        {
          id: "v2",
          questions: [
            {
              number: 1,
              prompt: "The SI unit of current is the:",
              options: {
                A: "Ampere (A)",
                B: "Volt (V)",
                C: "Ohm (Ω)",
                D: "Watt (W)"
              },
              answer: "A",
              explanation: "Current = ampere (A). 1 A = 1 coulomb of charge per second flowing past a point. Don't confuse with V (potential), Ω (resistance) or W (power)."
            },
            {
              number: 2,
              prompt: "An appliance with a 230 V supply and 46 Ω resistance has a steady current of:",
              options: {
                A: "0.2 A",
                B: "5 A",
                C: "10 A",
                D: "10580 A"
              },
              answer: "B",
              explanation: "I = V/R = 230/46 = 5 A. Resistive load, so PF = 1 and the calculated current is the actual current."
            },
            {
              number: 3,
              prompt: "An appliance consumes 1.15 kW at 230 V. Current drawn:",
              options: {
                A: "0.5 A",
                B: "2 A",
                C: "5 A",
                D: "10 A"
              },
              answer: "C",
              explanation: "I = P/V = 1150/230 = 5 A. PF = 1 for resistive. Pair with a 5 A or 6 A plug fuse depending on the flex CSA available."
            },
            {
              number: 4,
              prompt: "A heating element is purely resistive. Power factor:",
              options: {
                A: "1.0",
                B: "0.85",
                C: "0",
                D: "0.5"
              },
              answer: "A",
              explanation: "Pure resistance means V and I are in phase — PF = cos(0°) = 1. All apparent power is real power. Inductive (motor) loads lag and have PF < 1."
            },
            {
              number: 5,
              prompt: "A motor with 0.85 PF draws 5 A at 230 V. The real power consumed is:",
              options: {
                A: "230 W",
                B: "977.5 W (= V × I × PF)",
                C: "1150 W",
                D: "1352 W"
              },
              answer: "B",
              explanation: "P = V × I × PF = 230 × 5 × 0.85 = 977.5 W. The apparent power VA is 1150 VA; the difference (reactive) is the bit the supply has to provide but doesn't show up as real power."
            },
            {
              number: 6,
              prompt: "Why does the IET COP put weight on identifying the equipment Class before any electrical test?",
              options: {
                A: "Because the Class determines the next-due date",
                B: "Because the Class drives which tests apply and at what acceptance value",
                C: "Because Class III equipment cannot be tested",
                D: "Because Class II equipment must be returned to the manufacturer"
              },
              answer: "B",
              explanation: "An EC test on a Class II appliance is meaningless; an IR test on a SELV Class III supply isn't useful either. Get the Class right first or the test set is wrong."
            },
            {
              number: 7,
              prompt: "Which of these is NOT a PAT-testable item?",
              options: {
                A: "Class I extension lead",
                B: "Class II hand-held drill",
                C: "Class III SELV phone charger output (mains side of the charger IS testable)",
                D: "Class I printer"
              },
              answer: "C",
              explanation: "Class III (SELV) loads are tested visually / functionally only — no PAT-style 500 V DC IR. The Class II charger that supplies the 5 V output IS PAT-testable on the mains side. Two halves, two records."
            },
            {
              number: 8,
              prompt: "Which appliance gets the longest interval typically?",
              options: {
                A: "Class I hand-held drill in industrial use",
                B: "Class I mobile vacuum cleaner in office cleaning",
                C: "Class II stationary office IT in low-risk environment — up to 4 years",
                D: "Class I mobile space heater"
              },
              answer: "C",
              explanation: "COP Table 7.1 — stationary office IT in low-risk environment: up to 4 years. Hand-held in industry: 6 months. The recommended intervals reflect risk: handling stress + environmental factors drive shorter intervals."
            },
            {
              number: 9,
              prompt: "The COP recognises three categories of inspection / test, the most frequent and least formal being:",
              options: {
                A: "Combined inspection and test",
                B: "Formal visual inspection",
                C: "User check — visual only, by the user before each use",
                D: "Calibration of the test instrument"
              },
              answer: "C",
              explanation: "User check: most frequent, no instruments, by the user, before each use. Catches obvious damage early. Reports only faults — a 'pass' is not recorded. The cheapest layer of in-service safety."
            },
            {
              number: 10,
              prompt: "A duty holder's risk assessment for the PAT regime should be:",
              options: {
                A: "Generic and signed once",
                B: "Specific to the workplace and reviewed regularly; documents type, environment, use and history factors",
                C: "Optional under EAWR",
                D: "Done by the contractor only"
              },
              answer: "B",
              explanation: "Risk assessments must be 'suitable and sufficient' (per Management of H&S at Work Regs 1999). Tailor to the workplace and review when significant changes occur (new equipment, new environments, repeat faults)."
            },
            {
              number: 11,
              prompt: "An IR test on a Class I 230 V appliance reads 1.5 MΩ. The result is:",
              options: {
                A: "Pass — above 1 MΩ general minimum",
                B: "Fail — below 2 MΩ",
                C: "Pass only if Class II",
                D: "Investigate at 1000 V DC"
              },
              answer: "A",
              explanation: "1.5 MΩ exceeds 1 MΩ general Class I minimum. Pass and record. Continue trend monitoring on subsequent tests."
            },
            {
              number: 12,
              prompt: "A Class I electric kettle has a 1.0 mm² 1.5 m flex. EC theoretical:",
              options: {
                A: "0.029 Ω (≈ 19.5 mΩ/m × 1.5 m)",
                B: "0.29 Ω",
                C: "1 Ω",
                D: "0.0029 Ω"
              },
              answer: "A",
              explanation: "1.0 mm² ≈ 19.5 mΩ/m. R = 19.5 × 1.5 ÷ 1000 = 0.0293 Ω ≈ 0.029 Ω. Pass criterion = 0.029 + 0.1 = 0.129 Ω."
            },
            {
              number: 13,
              prompt: "A Class II 2-core extension lead has the live and neutral cores transposed inside a moulded plug. This would be detected by:",
              options: {
                A: "EC test",
                B: "IR test",
                C: "Polarity check — confirms L pin → L socket and N pin → N socket end-to-end",
                D: "Functional test only"
              },
              answer: "C",
              explanation: "EC and IR pass even with reversed L/N. The polarity check verifies that L and N reach the right contacts at the trailing socket. The PAT instrument runs polarity automatically."
            },
            {
              number: 14,
              prompt: "An IR test on a 230 V Class I 2 kW heater when warm reads 0.32 MΩ. The result is:",
              options: {
                A: "Fail",
                B: "Pass — heating elements may read down to 0.3 MΩ when warm; 0.32 MΩ is just within tolerance",
                C: "Pass only if Class II",
                D: "Investigate"
              },
              answer: "B",
              explanation: "0.32 MΩ > 0.3 MΩ heating-element minimum. Strictly a pass. Investigate if it drifts towards 0.3 MΩ over future tests — it suggests insulation degradation."
            },
            {
              number: 15,
              prompt: "A 230 V appliance with no flex (e.g. plug-in air freshener) needs:",
              options: {
                A: "EC test",
                B: "Visual + IR test (probe on accessible metal where applicable for Class II) + functional",
                C: "Polarity only",
                D: "EC at 25 A"
              },
              answer: "B",
              explanation: "Sealed plug-in appliances are typically Class II. No flex means no EC. Visual checks include the plug pins for scorching; IR with probe on accessible metal where present; functional confirms operation."
            },
            {
              number: 16,
              prompt: "An IR test on a Class I 110 V site lamp at 500 V DC reads 30 MΩ. The result is:",
              options: {
                A: "Pass — well above 1 MΩ",
                B: "Fail",
                C: "Pass only if Class III",
                D: "Investigate"
              },
              answer: "A",
              explanation: "30 MΩ comfortably exceeds 1 MΩ Class I minimum. The 500 V DC test voltage is appropriate for a robust 110 V site lamp without surge filtering."
            },
            {
              number: 17,
              prompt: "A Class III lamp on a 12 V SELV supply requires which test?",
              options: {
                A: "EC at 25 A",
                B: "IR at 500 V DC",
                C: "Visual / functional only — verify the SELV source separately on its own Class",
                D: "Polarity at 230 V"
              },
              answer: "C",
              explanation: "Class III is supplied at SELV from an isolated source. The lamp itself only needs visual / functional. The SELV source (transformer) is tested as its own Class I or II appliance, with verification of secondary separation and SELV output."
            },
            {
              number: 18,
              prompt: "A formal visual finds a Class I drill chuck loose. The action is:",
              options: {
                A: "Pass — only mechanical",
                B: "Refer for repair — mechanical instability is a safety risk; the chuck shaking loose during use can throw the bit",
                C: "Apply 'caution' label and re-issue",
                D: "Test as Class II"
              },
              answer: "B",
              explanation: "Mechanical condition is part of the COP visual / functional. A wobbly chuck risks the bit becoming a projectile during use. Refer for repair before re-test."
            },
            {
              number: 19,
              prompt: "An RCD test at 1× IΔn for a 30 mA device with the device wired correctly should:",
              options: {
                A: "Trip within the manufacturer's specified time (typically ≤ 200 ms for portable RCDs)",
                B: "Not trip — the test is too low",
                C: "Trip in 1 second",
                D: "Trip in 10 seconds"
              },
              answer: "A",
              explanation: "The 1× IΔn test confirms the device trips at its rated tripping current within its specified time. Most portable RCDs spec well within 200 ms. Confirm against the marked rating; pass if within."
            },
            {
              number: 20,
              prompt: "An EC test on a Class I 230 V kettle reads 0.105 Ω. Theoretical lead R is 0.029 Ω. Verdict:",
              options: {
                A: "Fail — additional resistance 0.076 Ω is within 0.1 Ω allowance, so this is actually a pass",
                B: "Pass — within 0.1 Ω above theoretical (0.105 − 0.029 = 0.076 Ω)",
                C: "Pass only if Class II",
                D: "Investigate at 1000 V DC"
              },
              answer: "B",
              explanation: "0.105 − 0.029 = 0.076 Ω of additional resistance — within the 0.1 Ω allowance. Pass. The earth path is intact and terminations are sound."
            },
            {
              number: 21,
              prompt: "A 230 V appliance drawing 13 A with 1.0 mm² flex. The fuse / flex pairing is:",
              options: {
                A: "Correct",
                B: "Incorrect — 1.0 mm² caps at 10 A; the appliance needs 1.25 mm² flex for a 13 A fuse",
                C: "Correct only if Class II",
                D: "Cannot be determined"
              },
              answer: "B",
              explanation: "BS 1363 fuse / flex: 1.0 mm² → 10 A max. A 13 A appliance on 1.0 mm² flex is over-fused if a 13 A plug fuse is fitted. Replace flex with 1.25 mm² (or 1.5 mm²) for 13 A fuse compliance."
            },
            {
              number: 22,
              prompt: "An IR test on a Class II 230 V hand drill at 500 V DC reads 5 MΩ. The result is:",
              options: {
                A: "Pass — exceeds 2 MΩ Class II minimum",
                B: "Fail",
                C: "Pass only if Class III",
                D: "Investigate at 1000 V DC"
              },
              answer: "A",
              explanation: "5 MΩ comfortably exceeds the 2 MΩ Class II minimum. The double / reinforced insulation is sound. Pass and record."
            },
            {
              number: 23,
              prompt: "An EC test using 200 mA soft on a Class I 230 V office printer reads 0.075 Ω. Theoretical R is 0.045 Ω. Verdict:",
              options: {
                A: "Pass — within 0.1 Ω above theoretical",
                B: "Fail",
                C: "Pass only if Class II",
                D: "Investigate at 25 A hard test"
              },
              answer: "A",
              explanation: "0.075 − 0.045 = 0.030 Ω of additional resistance — within 0.1 Ω allowance. Pass. The 200 mA soft test is appropriate for office IT with surge filtering."
            },
            {
              number: 24,
              prompt: "An EC test on a Class I 230 V appliance with a frayed flex sheath but intact cores. The test reads 0.12 Ω with theoretical 0.05 Ω. Verdict:",
              options: {
                A: "Pass — within 0.1 Ω above theoretical (just)",
                B: "Fail at the visual stage — sheath damage is a fail; the EC test should not have been carried out on a visually failed item",
                C: "Pass on EC alone",
                D: "Investigate at 1000 V DC"
              },
              answer: "B",
              explanation: "Sheath damage is a visual fail; tests on a visually failed item are inappropriate (and the result has no meaning until the appliance is repaired). Withdraw, replace the lead / repair, re-inspect, then re-test."
            },
            {
              number: 25,
              prompt: "An IR test on a Class I 230 V appliance reads 'OL' on the calibrated PAT instrument. The verdict is:",
              options: {
                A: "Pass — over-range = excellent insulation",
                B: "Fail — connection problem",
                C: "Cable disconnected",
                D: "Polarity reversal"
              },
              answer: "A",
              explanation: "OL = over-range. The IR exceeds the instrument's measurement limit. Excellent insulation, well above the 1 MΩ general minimum. Don't confuse OL with a connection fault."
            }
          ]
        },
        {
          id: "v3",
          questions: [
            {
              number: 1,
              prompt: "The SI unit of potential difference is the:",
              options: {
                A: "Ampere (A)",
                B: "Volt (V)",
                C: "Ohm (Ω)",
                D: "Watt (W)"
              },
              answer: "B",
              explanation: "Voltage = volt (V). 1 V = 1 joule per coulomb. Don't confuse with the unit of current (A), resistance (Ω) or power (W)."
            },
            {
              number: 2,
              prompt: "An 11.5 A current at 230 V represents real power of (PF = 1):",
              options: {
                A: "230 W",
                B: "1150 W",
                C: "2645 W",
                D: "115 kW"
              },
              answer: "C",
              explanation: "P = V × I = 230 × 11.5 = 2645 W. PF = 1 because purely resistive. The fuse needs to be 13 A (just above the load); the flex should be 1.25 mm² minimum."
            },
            {
              number: 3,
              prompt: "A 110 V supply across 11 Ω resistance has a steady current of:",
              options: {
                A: "1 A",
                B: "10 A",
                C: "11 A",
                D: "100 A"
              },
              answer: "B",
              explanation: "I = V/R = 110/11 = 10 A. 110 V CTE site supply gives a useful but lower current at the same resistance (compared to 230 V across the same load)."
            },
            {
              number: 4,
              prompt: "A 230 V supply feeding a 1.0 kW resistive load. Steady current:",
              options: {
                A: "0.435 A",
                B: "4.35 A",
                C: "10 A",
                D: "100 A"
              },
              answer: "B",
              explanation: "I = P/V = 1000/230 = 4.35 A. Pair with a 5 A or 6 A plug fuse based on flex CSA."
            },
            {
              number: 5,
              prompt: "Two 5 Ω resistors in series across 230 V. Current:",
              options: {
                A: "23 A",
                B: "46 A",
                C: "11.5 A",
                D: "1 A"
              },
              answer: "A",
              explanation: "Series: R = 5 + 5 = 10 Ω. I = 230/10 = 23 A. The trap is to treat as parallel (which would give 92 A). Series adds R; parallel reduces it."
            },
            {
              number: 6,
              prompt: "A 230 V resistive load drawing 13 A continuously. Real power:",
              options: {
                A: "230 W",
                B: "1300 W",
                C: "2.99 kW",
                D: "13 kW"
              },
              answer: "C",
              explanation: "P = V × I = 230 × 13 = 2990 W ≈ 3.0 kW. At 13 A continuous, the appliance is at the maximum BS 1363 plug-fuse rating. Confirm flex CSA ≥ 1.25 mm² for compliance."
            },
            {
              number: 7,
              prompt: "An IR test reading on a Class II 230 V hair clipper at 500 V DC reads 1.95 MΩ. The result is:",
              options: {
                A: "Pass — above 1 MΩ",
                B: "Fail — Class II minimum is 2 MΩ; 1.95 MΩ is below threshold",
                C: "Pass only if Class III",
                D: "Investigate"
              },
              answer: "B",
              explanation: "Class II requires ≥ 2 MΩ. 1.95 MΩ is just below — fail. Investigate moisture, dust, contamination of the double / reinforced insulation system. Refer for repair / replacement."
            },
            {
              number: 8,
              prompt: "An IR test on a Class I 230 V drill at 500 V DC reads 1.05 MΩ. The result is:",
              options: {
                A: "Pass — at general 1 MΩ minimum (strictly)",
                B: "Fail",
                C: "Pass only if Class II",
                D: "Investigate at 1000 V DC"
              },
              answer: "A",
              explanation: "1.05 MΩ exceeds 1 MΩ — strictly a pass. Many operators investigate marginal pass — re-seat connections, dry / clean, re-test. But strictly, this passes per the COP."
            },
            {
              number: 9,
              prompt: "A purely capacitive load has a power factor of:",
              options: {
                A: "1.0",
                B: "0",
                C: "−1.0",
                D: "0.5"
              },
              answer: "B",
              explanation: "Pure capacitor: I leads V by 90°; cos(90°) = 0. PF = 0. All apparent power is reactive, no real power consumed. Real loads have PF between 0 and 1, mostly close to 1 for resistive heaters and lower for motors."
            },
            {
              number: 10,
              prompt: "An EC test on a Class I 230 V toaster reads 0.21 Ω with 0.75 mm² 2 m flex (theoretical 0.052 Ω). Verdict:",
              options: {
                A: "Pass — within 0.1 Ω above theoretical (0.21 − 0.052 = 0.158 Ω, just outside)",
                B: "Fail — additional resistance 0.158 Ω exceeds 0.1 Ω allowance",
                C: "Pass only if Class II",
                D: "Investigate at 25 A"
              },
              answer: "B",
              explanation: "0.21 − 0.052 = 0.158 Ω of additional resistance — exceeds the 0.1 Ω allowance. Fail. Investigate cord-grip / terminations; the additional resistance suggests a poor connection."
            },
            {
              number: 11,
              prompt: "A user check is initiated by:",
              options: {
                A: "The duty holder annually",
                B: "The user, before each use, with no instruments",
                C: "The PAT operator quarterly",
                D: "The manufacturer"
              },
              answer: "B",
              explanation: "User checks are the most frequent and least formal layer. The user looks for visible damage, abnormal smell or sound, environment unsuitable, before each use. Reports any concerns to the duty holder. No instruments, no records on pass."
            },
            {
              number: 12,
              prompt: "A formal visual finds a kettle with a slightly bent metal lid mechanism. The action is:",
              options: {
                A: "Pass with a 'caution' label",
                B: "Refer for repair / replacement — controls and lid mechanism are part of the safety case (scalding risk)",
                C: "Test EC and pass if good",
                D: "Apply tape and re-issue"
              },
              answer: "B",
              explanation: "Lid mechanisms keep hot contents safely contained. A bent lid risks spillage / scalding. Refer for repair before re-test. Mechanical condition is part of the COP visual / functional."
            },
            {
              number: 13,
              prompt: "An IR test on a Class I 230 V appliance with surge filter reads 0.7 MΩ at 500 V DC. Re-test at 250 V DC reads 4 MΩ. Verdict:",
              options: {
                A: "Fail — 500 V test result was correct",
                B: "Pass — 250 V DC test gives the meaningful reading on surge-protected equipment; record both readings and the chosen test voltage",
                C: "Cannot pass on 250 V DC reading",
                D: "Investigate at 1000 V DC"
              },
              answer: "B",
              explanation: "Surge filter clamps the 500 V DC test, giving a misleading low reading. The 250 V DC test sees the actual structural insulation. 4 MΩ at 250 V DC is comfortably above 1 MΩ. Record both."
            },
            {
              number: 14,
              prompt: "An EC test on a Class I 230 V appliance fails with a reading of 'OL'. The most likely cause is:",
              options: {
                A: "Excellent earth path",
                B: "Open circuit in the protective conductor — broken earth core or disconnected earth at plug or appliance",
                C: "Surge filter clamping",
                D: "Polarity reversal"
              },
              answer: "B",
              explanation: "OL on EC = no path. Common cause: broken earth core (often at the cord-grip after stress), or earth wire disconnected at terminal. Investigate and repair before re-test."
            },
            {
              number: 15,
              prompt: "An IR test reading of 30 MΩ on a Class I 230 V appliance is:",
              options: {
                A: "Pass — well above 1 MΩ",
                B: "Fail",
                C: "Pass only if Class II",
                D: "Investigate"
              },
              answer: "A",
              explanation: "30 MΩ comfortably exceeds 1 MΩ general minimum. Pass and record. Excellent insulation."
            },
            {
              number: 16,
              prompt: "An IR test on a 230 V Class I 1.5 kW heater when warm reads 0.35 MΩ. The result is:",
              options: {
                A: "Pass — heating elements may read down to 0.3 MΩ when warm",
                B: "Fail",
                C: "Pass only if Class II",
                D: "Investigate at 1000 V DC"
              },
              answer: "A",
              explanation: "0.35 MΩ > 0.3 MΩ heating-element minimum. Pass. Investigate if the value drifts towards 0.3 MΩ on later tests — that suggests insulation degradation."
            },
            {
              number: 17,
              prompt: "A PAT instrument records every test result automatically. This:",
              options: {
                A: "Replaces the need for any pass label",
                B: "Supports the COP record-keeping duty — the saved data on the instrument forms the test record (Form 4.3 equivalent), assuming periodic backup",
                C: "Is optional",
                D: "Replaces calibration"
              },
              answer: "B",
              explanation: "Most modern PAT instruments save test data automatically. This satisfies COP record-keeping if backed up and protected from tampering. Pass labels are still applied to the appliance for visual evidence and user information."
            },
            {
              number: 18,
              prompt: "An EC test using 25 A hard on a 230 V Class I workshop drill reads 0.05 Ω with theoretical lead R 0.025 Ω. Verdict:",
              options: {
                A: "Pass — within 0.1 Ω above theoretical",
                B: "Fail",
                C: "Pass only if Class II",
                D: "Investigate"
              },
              answer: "A",
              explanation: "0.05 − 0.025 = 0.025 Ω of additional resistance — comfortably within 0.1 Ω allowance. The 25 A hard test is appropriate for robust workshop kit. Pass."
            },
            {
              number: 19,
              prompt: "Which Code of Practice form lists every appliance with its ID, location, type and Class?",
              options: {
                A: "Form 4.1 — inventory",
                B: "Form 4.2 — formal visual only",
                C: "Form 4.3 — combined inspection and test",
                D: "Form 4.4 — repair register"
              },
              answer: "A",
              explanation: "Form 4.1 is the master inventory. ID is the link to test records; type and Class drive the test set; location supports finding the appliance. Most PAT software produces this automatically."
            },
            {
              number: 20,
              prompt: "An IR test on a 230 V Class I appliance with the switch ON reads 1.4 MΩ; with the switch OFF reads OL. Verdict:",
              options: {
                A: "Switch-OFF reading is the correct one (passes); switch-ON is misleading",
                B: "Switch-ON reading is the correct one (1.4 MΩ — passes 1 MΩ general); switch-OFF reading misses part of the circuit because single-pole switching breaks only the live",
                C: "Both readings invalid",
                D: "Investigate at 1000 V DC"
              },
              answer: "B",
              explanation: "Single-pole switching breaks only the live. With the switch off, the test doesn't see the appliance windings beyond the switch — misleadingly high reading. Switch ON for the genuine test. 1.4 MΩ passes 1 MΩ general minimum."
            },
            {
              number: 21,
              prompt: "An RCD plug under test for trip time at 1× IΔn. Acceptable practice:",
              options: {
                A: "Use the device's integral test button only",
                B: "Apply the rated trip current via the PAT instrument's RCD test mode and measure the trip time; compare to the device's marked rating",
                C: "Apply a 5 A test current",
                D: "Use a multimeter only"
              },
              answer: "B",
              explanation: "The PAT instrument's RCD test mode injects the rated current and measures trip time. The integral button on the device is a mechanical test only — useful as an in-service check but not equivalent to the calibrated trip-time measurement."
            },
            {
              number: 22,
              prompt: "An IR test on a Class I 110 V site lamp reads OL. Verdict:",
              options: {
                A: "Pass — over-range, excellent insulation",
                B: "Fail",
                C: "Cable error",
                D: "Polarity reversal"
              },
              answer: "A",
              explanation: "OL = over-range — > 200 MΩ or > 999 MΩ depending on the instrument. Excellent insulation, far above the 1 MΩ Class I minimum. Pass and record."
            },
            {
              number: 23,
              prompt: "An EC test on a Class I 230 V kettle with 1.0 mm² 2 m flex reads 0.15 Ω. Theoretical R is 0.039 Ω. Verdict:",
              options: {
                A: "Pass — within 0.1 Ω above theoretical (0.15 − 0.039 = 0.111 Ω, just outside)",
                B: "Fail — additional resistance 0.111 Ω exceeds 0.1 Ω allowance",
                C: "Pass only if Class II",
                D: "Investigate"
              },
              answer: "B",
              explanation: "0.15 − 0.039 = 0.111 Ω of additional resistance — just outside the 0.1 Ω allowance. Marginal fail; investigate cord-grip / terminations and re-test. May pass after re-seating."
            },
            {
              number: 24,
              prompt: "A duty holder ignoring the COP intervals because 'PAT testing isn't legally required':",
              options: {
                A: "Is correct — there's no PAT Act",
                B: "Misses the point — EAWR requires that equipment be maintained safely; PAT is the recognised means of evidencing this; ignoring it would leave the duty holder unable to demonstrate compliance",
                C: "Is correct as long as visual checks happen",
                D: "Is correct for Class III only"
              },
              answer: "B",
              explanation: "True, no 'PAT Act'. But EAWR Reg 4(2) requires safe maintenance, and PAT records are the standard evidence. A duty holder without records cannot demonstrate compliance. The duty exists; PAT is the means."
            },
            {
              number: 25,
              prompt: "An IR test on a 230 V Class I appliance reads 0.4 MΩ when warm and 1.5 MΩ when cold. The duty holder should:",
              options: {
                A: "Use the warm reading (fail per general 1 MΩ rule)",
                B: "Use the cold reading (1.5 MΩ — pass)",
                C: "Investigate — the difference suggests a thermally driven failure mode; if the appliance has a heating element the 0.3 MΩ rule applies, otherwise fail and refer",
                D: "Apply a 'caution' label"
              },
              answer: "C",
              explanation: "Big differences between warm and cold are diagnostic. For heating-element appliances, the COP allows the 0.3 MΩ when warm rule. For non-heating appliances, the warm value should still meet 1 MΩ — investigate any thermally driven degradation."
            }
          ]
        },
        {
          id: "v4",
          questions: [
            {
              number: 1,
              prompt: "The SI unit of power is the:",
              options: {
                A: "Ampere (A)",
                B: "Volt (V)",
                C: "Watt (W)",
                D: "Joule (J)"
              },
              answer: "C",
              explanation: "Power = watt (W). 1 W = 1 joule of energy per second. P = V × I × PF for AC; P = V × I for DC and resistive AC. Don't confuse with the joule (energy)."
            },
            {
              number: 2,
              prompt: "An appliance consumes 920 W at 230 V. Current drawn:",
              options: {
                A: "0.4 A",
                B: "4 A",
                C: "10 A",
                D: "23 A"
              },
              answer: "B",
              explanation: "I = P/V = 920/230 = 4 A. Pair with a 5 A or 6 A plug fuse depending on flex CSA."
            },
            {
              number: 3,
              prompt: "Two 4 Ω resistors in parallel give:",
              options: {
                A: "8 Ω total",
                B: "2 Ω total — parallel R = (R1 × R2) / (R1 + R2)",
                C: "16 Ω total",
                D: "0.25 Ω total"
              },
              answer: "B",
              explanation: "Parallel: R = (4 × 4) / (4 + 4) = 16/8 = 2 Ω. Series adds (would give 8 Ω); parallel halves for two equal resistors."
            },
            {
              number: 4,
              prompt: "An appliance with a 230 V supply and a circuit current of 1 A has resistance:",
              options: {
                A: "23 Ω",
                B: "230 Ω",
                C: "0.43 Ω",
                D: "100 Ω"
              },
              answer: "B",
              explanation: "R = V/I = 230/1 = 230 Ω. Modest current = high resistance. A small appliance like a phone charger or LED lamp."
            },
            {
              number: 5,
              prompt: "A 110 V supply across 22 Ω resistance has a current of:",
              options: {
                A: "5 A",
                B: "10 A",
                C: "0.2 A",
                D: "100 A"
              },
              answer: "A",
              explanation: "I = V/R = 110/22 = 5 A. 110 V CTE site supply gives lower current at the same R compared with 230 V — a useful side-effect of reduced low voltage."
            },
            {
              number: 6,
              prompt: "Power dissipated in a 23 Ω resistor across a 230 V supply:",
              options: {
                A: "10 W",
                B: "230 W",
                C: "2300 W (= V² / R)",
                D: "23 kW"
              },
              answer: "C",
              explanation: "P = V²/R = 230²/23 = 52900/23 = 2300 W. Or use I = V/R = 10 A, then P = V × I = 230 × 10 = 2300 W. Two routes to the same answer."
            },
            {
              number: 7,
              prompt: "An IR test on a Class II 230 V hand-held kettle at 500 V DC reads 2.05 MΩ. Verdict:",
              options: {
                A: "Pass — at the 2 MΩ Class II minimum (strictly above)",
                B: "Fail",
                C: "Pass only if Class III",
                D: "Investigate"
              },
              answer: "A",
              explanation: "2.05 MΩ exceeds 2 MΩ — strictly a pass. Many operators investigate marginal pass — re-seat, dry, re-test. But strictly, this passes per the COP."
            },
            {
              number: 8,
              prompt: "An EC test on a Class I 230 V appliance with 1.5 mm² 8 m flex reads 0.18 Ω. Theoretical R is 0.104 Ω. Verdict:",
              options: {
                A: "Pass — within 0.1 Ω above theoretical (0.18 − 0.104 = 0.076 Ω)",
                B: "Fail",
                C: "Pass only if Class II",
                D: "Investigate"
              },
              answer: "A",
              explanation: "0.18 − 0.104 = 0.076 Ω of additional resistance — within the 0.1 Ω allowance. Pass. The earth path is intact and terminations are sound."
            },
            {
              number: 9,
              prompt: "A 13 A continuous appliance on 1.0 mm² flex. The fuse / flex pairing is:",
              options: {
                A: "Correct — 1.0 mm² accepts 13 A",
                B: "Incorrect — 1.0 mm² caps at 10 A; over-fusing leaves the flex unprotected",
                C: "Correct only if Class II",
                D: "Cannot be determined"
              },
              answer: "B",
              explanation: "1.0 mm² caps at 10 A under BS 1363. A 13 A appliance on this flex is over-fused. Either uprate the flex to 1.25 mm² or reduce the load. Don't 'just fit a 10 A fuse' if the appliance routinely draws 13 A — the fuse will blow."
            },
            {
              number: 10,
              prompt: "An IR test on a 230 V Class I 0.5 kW desk lamp at 500 V DC reads 80 MΩ. Verdict:",
              options: {
                A: "Pass — well above 1 MΩ",
                B: "Fail",
                C: "Pass only if Class II",
                D: "Investigate"
              },
              answer: "A",
              explanation: "80 MΩ comfortably exceeds 1 MΩ general minimum. Excellent insulation. Pass and record. Continue trend monitoring on subsequent tests."
            },
            {
              number: 11,
              prompt: "An EC test using 200 mA soft on a Class I 230 V LCD monitor reads 0.04 Ω. Theoretical lead R is 0.025 Ω. Verdict:",
              options: {
                A: "Pass — within 0.1 Ω above theoretical (0.04 − 0.025 = 0.015 Ω)",
                B: "Fail",
                C: "Pass only if Class II",
                D: "Investigate at 25 A"
              },
              answer: "A",
              explanation: "0.04 − 0.025 = 0.015 Ω of additional resistance — well within 0.1 Ω allowance. Pass. The 200 mA soft test is appropriate for IT monitor with surge filtering."
            },
            {
              number: 12,
              prompt: "A 460 W appliance on a 230 V supply has a steady current of:",
              options: {
                A: "0.5 A",
                B: "2 A",
                C: "5 A",
                D: "20 A"
              },
              answer: "B",
              explanation: "I = P/V = 460/230 = 2 A. Pair with a 3 A plug fuse for low-current appliances (with appropriate flex CSA — 0.5 mm² caps at 3 A)."
            },
            {
              number: 13,
              prompt: "A formal visual finds an extension lead with a melted-back plug pin. The action is:",
              options: {
                A: "Pass with a 'caution' label",
                B: "Withdraw — melted pins indicate severe overheating; replace the plug, re-inspect, re-test",
                C: "Test only EC and pass if good",
                D: "Apply tape over the damage"
              },
              answer: "B",
              explanation: "Melted plug pins are a serious sign — usually a high-resistance contact at the socket-pin interface causing significant heat. Withdraw, investigate the cause and replace the plug before re-test."
            },
            {
              number: 14,
              prompt: "An RCD test at 5× IΔn for a 30 mA type AC RCD shows 32 ms. The result is:",
              options: {
                A: "Pass — within 40 ms requirement",
                B: "Fail",
                C: "Pass only if Class II",
                D: "Investigate at 1× IΔn"
              },
              answer: "A",
              explanation: "Type AC RCD at 5× IΔn must trip within 40 ms. 32 ms is within. Combined with a passing 1× IΔn test, the device is operating per spec."
            },
            {
              number: 15,
              prompt: "A 230 V appliance with a 13 A plug fuse and 1.5 mm² flex represents:",
              options: {
                A: "Correct fuse/flex pairing",
                B: "Incorrect — needs 16 A fuse",
                C: "Incorrect — 1.5 mm² caps at 10 A",
                D: "Incorrect — must be Class II"
              },
              answer: "A",
              explanation: "1.5 mm² flex accepts 13 A under BS 1363. 1.25 mm² is the minimum for 13 A. Pairing is correct. Don't need anything bigger unless the appliance current exceeds 13 A continuously."
            },
            {
              number: 16,
              prompt: "An IR test on a Class I 230 V vacuum at 500 V DC reads 1.0 MΩ exactly. Verdict:",
              options: {
                A: "Pass — at the 1 MΩ general minimum",
                B: "Fail",
                C: "Pass only if Class II",
                D: "Investigate at 1000 V DC"
              },
              answer: "A",
              explanation: "1 MΩ is at the COP general minimum — strictly a pass. Many operators investigate marginal pass — re-seat connections, dry / clean, re-test. But strictly, 1.0 MΩ is acceptable."
            },
            {
              number: 17,
              prompt: "Touch current limit for AC equipment is:",
              options: {
                A: "1 mA",
                B: "3.5 mA RMS",
                C: "5 mA",
                D: "10 mA"
              },
              answer: "B",
              explanation: "3.5 mA RMS for AC equipment, 5 mA DC for DC equipment. Both per IEC 60990 / COP. Useful when standard IR is unsuitable due to surge filters or EMC components."
            },
            {
              number: 18,
              prompt: "A Class I 230 V appliance fails IR. The action is:",
              options: {
                A: "Apply a 'caution' label",
                B: "Withdraw, label fail, refer for repair (or replace), re-test before any return to service",
                C: "Re-test in 12 months",
                D: "Reduce the fuse rating"
              },
              answer: "B",
              explanation: "Failed IR = unsafe. Withdraw, label fail, repair / replace, re-test. The COP requires the closed-loop process; warning labels with the appliance still in use is not acceptable."
            },
            {
              number: 19,
              prompt: "A formal visual finds the cord-grip on a kettle slack. The action is:",
              options: {
                A: "Pass — cord-grip is mechanical",
                B: "Refer for repair — cord-grip integrity is part of the construction; the conductors take the strain otherwise and will break next",
                C: "Apply 'caution' label",
                D: "Reduce fuse rating"
              },
              answer: "B",
              explanation: "Loose cord-grip is a visual fail. Conductors take the strain and break at the terminals next. Repair (replace plug or re-fit cord-grip), re-inspect, re-test before re-issue."
            },
            {
              number: 20,
              prompt: "An IR test on a 230 V Class I 1 kW heater when cold at 500 V DC reads 1.2 MΩ. Verdict:",
              options: {
                A: "Pass — above 1 MΩ general minimum",
                B: "Fail",
                C: "Pass only if Class II",
                D: "Investigate at 1000 V DC"
              },
              answer: "A",
              explanation: "1.2 MΩ exceeds 1 MΩ general minimum. Heating elements may legitimately read lower when warm (down to 0.3 MΩ), but a cold reading of 1.2 MΩ indicates good insulation. Pass and record."
            },
            {
              number: 21,
              prompt: "An EC test on a Class I 230 V refrigerator with 1.0 mm² 2.5 m flex reads 0.10 Ω. Theoretical R is 0.049 Ω. Verdict:",
              options: {
                A: "Pass — within 0.1 Ω above theoretical (0.10 − 0.049 = 0.051 Ω)",
                B: "Fail",
                C: "Pass only if Class II",
                D: "Investigate"
              },
              answer: "A",
              explanation: "0.10 − 0.049 = 0.051 Ω of additional resistance — within the 0.1 Ω allowance. Pass. The earth path is intact and terminations are sound."
            },
            {
              number: 22,
              prompt: "A duty holder labels every appliance with the test date but no ID. The pass label is:",
              options: {
                A: "Sufficient if the appliance has a unique appearance",
                B: "Insufficient — without an ID, the label cannot be tied to a specific test record on Form 4.3",
                C: "Sufficient for Class II only",
                D: "Sufficient if backed up by the contractor's invoice"
              },
              answer: "B",
              explanation: "ID is the link between label and register. Without it, the audit cannot tie the test event to the appliance's history. ID + date + tester is the minimum data on a label."
            },
            {
              number: 23,
              prompt: "A 230 V Class I 4-core flex (3 phases + earth) on a single-phase appliance is:",
              options: {
                A: "Acceptable — extra core is just unused",
                B: "Inappropriate — single-phase appliances should use 3-core flex (L, N, E); 4-core suggests miswiring or repurposing",
                C: "Required for industrial appliances",
                D: "Class III"
              },
              answer: "B",
              explanation: "Single-phase appliances use 3-core flex (L, N, E). A 4-core flex (3 phases + E) is for three-phase equipment. If a single-phase appliance has 4-core flex, investigate why — usually a miswire or scavenged industrial flex."
            },
            {
              number: 24,
              prompt: "An IR test on a Class II 230 V hair dryer at 500 V DC reads 4 MΩ. Verdict:",
              options: {
                A: "Pass — exceeds 2 MΩ Class II minimum",
                B: "Fail",
                C: "Pass only if Class III",
                D: "Investigate"
              },
              answer: "A",
              explanation: "4 MΩ comfortably exceeds the 2 MΩ Class II minimum. The double / reinforced insulation is sound. Pass and record."
            },
            {
              number: 25,
              prompt: "A duty holder's risk assessment driving the PAT regime should include:",
              options: {
                A: "Only the appliance manufacturer's recommendations",
                B: "Equipment type, Class, environment, frequency of use, history of faults, and any specific risk factors (wet, hot, abrasive)",
                C: "Only the appliance age",
                D: "Only the cost of testing"
              },
              answer: "B",
              explanation: "Risk assessment drives the regime. Type and Class set the baseline; environment / use / history adjust it. Specific risks tighten the intervals further. The COP table is a starting point; tailor to the workplace."
            }
          ]
        },
        {
          id: "v5",
          questions: [
            {
              number: 1,
              prompt: "A 230 V resistive heater consuming 4.6 kW. Steady current:",
              options: {
                A: "0.2 A",
                B: "10 A",
                C: "20 A — exceeds 13 A BS 1363 plug fuse rating, requires a fixed connection",
                D: "200 A"
              },
              answer: "C",
              explanation: "I = P/V = 4600/230 = 20 A. Exceeds 13 A BS 1363 plug fuse — cannot run via a 13 A plug. Fixed connection required (e.g. FCU at 20 A, or industrial connector for higher currents)."
            },
            {
              number: 2,
              prompt: "Two 20 Ω resistors in series across a 230 V supply. Current:",
              options: {
                A: "11.5 A",
                B: "5.75 A",
                C: "23 A",
                D: "1 A"
              },
              answer: "B",
              explanation: "Series: R = 20 + 20 = 40 Ω. I = 230/40 = 5.75 A. Don't accidentally treat as parallel (would give 23 A). Series adds R; parallel reduces it."
            },
            {
              number: 3,
              prompt: "An EC test on a Class I 230 V workshop drill with 1.5 mm² 5 m flex reads 0.13 Ω. Theoretical R is 0.065 Ω. Verdict:",
              options: {
                A: "Pass — within 0.1 Ω above theoretical (0.13 − 0.065 = 0.065 Ω)",
                B: "Fail",
                C: "Pass only if Class II",
                D: "Investigate"
              },
              answer: "A",
              explanation: "0.13 − 0.065 = 0.065 Ω of additional resistance — within 0.1 Ω allowance. Pass. The earth path is intact and terminations are sound."
            },
            {
              number: 4,
              prompt: "An IR test on a 230 V Class II 2-core 0.5 mm² extension lead at 500 V DC reads 100 MΩ. Verdict:",
              options: {
                A: "Pass — exceeds 2 MΩ Class II minimum",
                B: "Fail",
                C: "Pass only if 3-core",
                D: "Investigate"
              },
              answer: "A",
              explanation: "100 MΩ comfortably exceeds the 2 MΩ Class II minimum. Pass and record. The flex CSA dictates fuse rating: 0.5 mm² caps at 3 A."
            },
            {
              number: 5,
              prompt: "A 460 W appliance on a 230 V supply has resistance:",
              options: {
                A: "23 Ω",
                B: "115 Ω (= V²/P)",
                C: "11.5 Ω",
                D: "230 Ω"
              },
              answer: "B",
              explanation: "R = V²/P = 230²/460 = 52900/460 = 115 Ω. Or compute I = 2 A first, then R = V/I = 115 Ω. Two routes to the same answer."
            },
            {
              number: 6,
              prompt: "An IR test on a 230 V Class II hand-held appliance at 500 V DC reads 'OL'. Verdict:",
              options: {
                A: "Pass — over-range = excellent insulation, far above 2 MΩ Class II minimum",
                B: "Fail",
                C: "Pass only if 3-core",
                D: "Investigate"
              },
              answer: "A",
              explanation: "OL = over-range. Excellent insulation, well above the 2 MΩ Class II minimum. Pass and record. Don't confuse OL with a connection fault."
            },
            {
              number: 7,
              prompt: "Three 30 Ω resistors in parallel across 230 V. Total current:",
              options: {
                A: "23 A — total R = 30/3 = 10 Ω, I = 230/10 = 23 A",
                B: "11.5 A",
                C: "7.67 A",
                D: "100 A"
              },
              answer: "A",
              explanation: "Three equal resistors in parallel: R_total = R/n = 30/3 = 10 Ω. I = V/R = 230/10 = 23 A. Each resistor carries 230/30 ≈ 7.67 A; total at the supply is the sum."
            },
            {
              number: 8,
              prompt: "An EC test on a Class I 230 V kettle reads 0.42 Ω with 1.0 mm² 1 m flex (theoretical 0.0195 Ω). Verdict:",
              options: {
                A: "Pass — well within 0.1 Ω allowance",
                B: "Fail — additional resistance 0.40 Ω far exceeds 0.1 Ω allowance; investigate cord-grip and terminations",
                C: "Pass only if Class II",
                D: "Investigate at 1000 V DC"
              },
              answer: "B",
              explanation: "0.42 − 0.0195 = 0.4 Ω of additional resistance — way beyond the 0.1 Ω allowance. Fail. Investigate cord-grip / terminations; likely a poor connection at the plug or the appliance."
            },
            {
              number: 9,
              prompt: "An IR test on a Class I 230 V appliance with surge protection at 250 V DC reads 5 MΩ. Verdict:",
              options: {
                A: "Pass — comfortably above 1 MΩ general minimum (the 250 V DC test is appropriate for surge-protected equipment)",
                B: "Fail — must be 500 V DC always",
                C: "Pass only if Class II",
                D: "Investigate at 1000 V DC"
              },
              answer: "A",
              explanation: "5 MΩ at 250 V DC exceeds 1 MΩ general minimum. The 250 V DC test voltage is appropriate for surge-protected equipment per the COP. Record both the value and the test voltage chosen."
            },
            {
              number: 10,
              prompt: "An RCD test at 1× IΔn for a 30 mA portable RCD shows 100 ms. Verdict:",
              options: {
                A: "Pass — within typical 200 ms manufacturer limit at 1× IΔn",
                B: "Fail",
                C: "Pass only if Class II",
                D: "Investigate"
              },
              answer: "A",
              explanation: "100 ms at 1× IΔn is well within most portable RCD specs. Confirm against the device's marked rating; pass and record."
            },
            {
              number: 11,
              prompt: "An IR test on a Class I 230 V coffee machine when warm at 500 V DC reads 0.4 MΩ. Verdict:",
              options: {
                A: "Pass — heating element 0.3 MΩ rule applies (coffee machines have heating elements)",
                B: "Fail — below 1 MΩ general",
                C: "Pass only if Class II",
                D: "Investigate at 1000 V DC"
              },
              answer: "A",
              explanation: "Coffee machines contain heating elements (boiler / steam wand). The 0.3 MΩ minimum when warm applies. 0.4 MΩ is within tolerance. Continue trend monitoring on subsequent tests."
            },
            {
              number: 12,
              prompt: "A 0.75 mm² flex on a 920 W 230 V appliance drawing 4 A. The plug fuse should be:",
              options: {
                A: "13 A",
                B: "10 A",
                C: "6 A — within the 0.75 mm² flex's 6 A rating, comfortable margin above the 4 A load",
                D: "3 A"
              },
              answer: "C",
              explanation: "0.75 mm² caps at 6 A. The 4 A load is within. A 6 A fuse protects both the load and the flex. Don't go higher than 6 A on this flex; don't go below the load current."
            },
            {
              number: 13,
              prompt: "A motor with 0.7 PF draws 5 A at 230 V. Real power consumed:",
              options: {
                A: "1150 W (apparent)",
                B: "805 W (= V × I × PF)",
                C: "230 W",
                D: "1643 W"
              },
              answer: "B",
              explanation: "P = V × I × PF = 230 × 5 × 0.7 = 805 W. Apparent power VA = 1150 VA; the difference (reactive power) is the bit the supply has to provide but doesn't show as real power."
            },
            {
              number: 14,
              prompt: "An IR test on a Class I 230 V hairdryer when cold at 500 V DC reads 50 MΩ. Verdict:",
              options: {
                A: "Pass — well above 1 MΩ general (and above 0.3 MΩ heating element rule)",
                B: "Fail",
                C: "Pass only if Class II",
                D: "Investigate"
              },
              answer: "A",
              explanation: "50 MΩ comfortably exceeds 1 MΩ general minimum. Hairdryers have heating elements; even the warm 0.3 MΩ rule is irrelevant when cold readings are this high. Pass and record."
            },
            {
              number: 15,
              prompt: "A formal visual on an extension lead reveals a cracked moulded plug body. Action:",
              options: {
                A: "Pass with a 'caution' label",
                B: "Withdraw — moulded plug bodies cannot be repaired; replace the plug (or the whole moulded lead) before re-test",
                C: "Test EC and IR; pass if good",
                D: "Apply tape over the crack"
              },
              answer: "B",
              explanation: "Moulded plug bodies are not repairable. Replace the plug (cut off and fit a rewireable, or replace the whole moulded lead). A cracked body can expose live parts and is a clear shock risk."
            },
            {
              number: 16,
              prompt: "An EC test using 25 A hard on a 230 V Class I 1.5 mm² 12 m extension lead reads 0.32 Ω. Theoretical R is 0.156 Ω. Verdict:",
              options: {
                A: "Pass — within 0.1 Ω above theoretical (0.32 − 0.156 = 0.164 Ω, just outside)",
                B: "Fail — additional resistance 0.164 Ω exceeds 0.1 Ω allowance; investigate cord-grip / terminations",
                C: "Pass only if Class II",
                D: "Investigate at 1000 V DC"
              },
              answer: "B",
              explanation: "0.32 − 0.156 = 0.164 Ω of additional resistance — outside the 0.1 Ω allowance. Marginal fail; investigate cord-grip / terminations and re-test. May pass after re-seating."
            },
            {
              number: 17,
              prompt: "An IR test on a 230 V Class I 1.5 kW kettle when warm at 500 V DC reads 0.32 MΩ. Verdict:",
              options: {
                A: "Pass — heating elements may read down to 0.3 MΩ when warm; 0.32 MΩ is just within tolerance",
                B: "Fail",
                C: "Pass only if Class II",
                D: "Investigate at 1000 V DC"
              },
              answer: "A",
              explanation: "0.32 MΩ > 0.3 MΩ heating-element minimum. Strictly a pass. Investigate if the value drifts towards 0.3 MΩ on later tests — that suggests insulation degradation."
            },
            {
              number: 18,
              prompt: "A user-check is best described as:",
              options: {
                A: "A full instrumented test by a competent person",
                B: "A brief visual inspection by the user before each use, no instruments, only faults reported",
                C: "An IR test only",
                D: "A test only required if the item has previously failed"
              },
              answer: "B",
              explanation: "User checks happen with every use and require no instruments — just looking for damaged flex, cracked plug, scorch marks, environment unsuitable. Most cost-effective layer of in-service safety; only faults are reported."
            },
            {
              number: 19,
              prompt: "An IR test on a Class II 230 V tool at 500 V DC reads 2.5 MΩ. Verdict:",
              options: {
                A: "Pass — exceeds 2 MΩ Class II minimum",
                B: "Fail",
                C: "Pass only if Class III",
                D: "Investigate"
              },
              answer: "A",
              explanation: "2.5 MΩ exceeds 2 MΩ Class II minimum. Pass and record. Continue trend monitoring on subsequent tests."
            },
            {
              number: 20,
              prompt: "An RCD plug under test fails the 1× IΔn test. Action:",
              options: {
                A: "Pass and re-test next year",
                B: "Fail and replace the inline RCD; re-test the assembly",
                C: "Reduce the appliance fuse rating",
                D: "Test at 5× IΔn instead"
              },
              answer: "B",
              explanation: "1× IΔn fail = device non-operational at rated tripping current. Replace the inline RCD and re-test the assembly. The 5× IΔn test verifies fast-trip operation but doesn't substitute for the 1× threshold test."
            },
            {
              number: 21,
              prompt: "An IR test reading on a Class I 230 V drill at 500 V DC of 1.0 MΩ exactly is:",
              options: {
                A: "Pass — at the 1 MΩ general minimum",
                B: "Fail",
                C: "Pass only if Class II",
                D: "Investigate at 1000 V DC"
              },
              answer: "A",
              explanation: "1 MΩ is the COP general Class I minimum — strictly a pass. Many operators investigate marginal pass — re-seat connections, dry / clean, re-test. But strictly, 1.0 MΩ is acceptable."
            },
            {
              number: 22,
              prompt: "A duty holder's PAT regime is challenged on audit. The defence is:",
              options: {
                A: "A pile of pass stickers",
                B: "A documented risk assessment, COP-compliant records (Forms 4.1–4.4), instrument calibration trace, tester competency evidence, and demonstrable closure of every fail",
                C: "Verbal assurance",
                D: "Only the contractor invoice"
              },
              answer: "B",
              explanation: "The audit looks for the full chain. A documented system with traceable records is what defends the duty holder under EAWR. Anything less is hard to argue. The COP forms are designed to provide exactly this evidence pack."
            },
            {
              number: 23,
              prompt: "An EC test on a Class I 230 V 1.0 mm² 3 m flex reads 0.085 Ω. Theoretical R is 0.0585 Ω. Verdict:",
              options: {
                A: "Pass — within 0.1 Ω above theoretical (0.085 − 0.0585 = 0.0265 Ω)",
                B: "Fail",
                C: "Pass only if Class II",
                D: "Investigate at 1000 V DC"
              },
              answer: "A",
              explanation: "0.085 − 0.0585 = 0.0265 Ω of additional resistance — well within 0.1 Ω allowance. Pass. The earth path is intact and terminations are sound."
            },
            {
              number: 24,
              prompt: "A 230 V Class I refrigerator hardwired into a fused spur. PAT-style testing:",
              options: {
                A: "Apply standard EC + IR + polarity",
                B: "Falls primarily under the EICR for the fixed installation; the COP recommends visual inspection of the appliance and test where pluggable",
                C: "Skip — fridges are exempt",
                D: "Test only the cord-grip"
              },
              answer: "B",
              explanation: "Hardwired equipment is part of the fixed installation. Routine inspection / testing is via the EICR cycle. The COP still recommends visual inspection of the appliance, particularly looking at the FCU connection."
            },
            {
              number: 25,
              prompt: "Three 6 Ω resistors in parallel give:",
              options: {
                A: "18 Ω",
                B: "2 Ω — parallel R = R/n for equal resistors, 6/3 = 2",
                C: "0.5 Ω",
                D: "12 Ω"
              },
              answer: "B",
              explanation: "Three equal resistors in parallel: R = R/n = 6/3 = 2 Ω. Series adds (would be 18 Ω); parallel divides for equal resistors. Useful baseline for understanding circuit calculations."
            }
          ]
        }
      ]
    }
  ],
  scoring: [
    { threshold: 0.9, label: "Strong — exam-ready on classification, tests, and the legal driver" },
    { threshold: 0.7, label: "Solid — minor gaps in Class definitions or test thresholds" },
    { threshold: 0.5, label: "Needs targeted revision — re-read the IET COP 5th Edition" },
    { threshold: 0, label: "Major gaps — return to fundamentals before retrying" }
  ],
  priorities: [
    "Class definitions: 0 = basic insulation only (banned UK); I = basic + earth; II = double/reinforced; III = SELV supply.",
    "PE continuity tolerance = expected R from CSA & length + 0.1 Ω; touch current limits 3.5 mA AC, 5 mA DC.",
    "Plug fuse to flex CSA: 0.5 mm² → 3 A, 0.75 mm² → 6 A, 1.0 mm² → 10 A, 1.25/1.5 mm² → 13 A.",
    "Frequency drivers: equipment class, type (mobile/portable/stationary/fixed), use, environment, history — not the state of the fixed wiring."
  ]
};
