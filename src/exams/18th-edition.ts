import type { Exam } from "./types";
import { electricianTraining18thEditionSourceSection } from "./electrician-training-source";

export const eighteenthEditionExam: Exam = {
  id: "18th-edition",
  title: "18th Edition (BS 7671)",
  subtitle: "Combined topic drill + copied ElectricianTraining 18th Edition mock",
  description:
    "A focused exam built around Webinar 3 — 18th Edition of the Wiring Regulations. Drills the structure of BS 7671:2018 + A2:2022 + A3:2024, the key part numbers, the major tables electricians look up daily, and the headline provisions introduced or revised by the recent amendments (AFDDs, SPDs, EV charging, prosumer installations). The fifth attempt serves the copied 60-question ElectricianTraining 18th Edition mock.",
  format:
    "Each served attempt = 60 multiple-choice questions. Pass at 60%+. The first four attempts use topic drills; the fifth serves the copied 18th Edition mock.",
  passPercent: 0.6,
  sections: [
    {
      id: "section-1",
      title: "Section 1 — Structure of BS 7671",
      variants: [
        {
          id: "v1",
          questions: [
            {
              number: 1,
              prompt: "BS 7671 is divided into:",
              options: {
                A: "3 parts plus appendices",
                B: "5 parts plus appendices",
                C: "7 parts plus appendices",
                D: "10 parts plus appendices"
              },
              answer: "C",
              explanation: "Seven numbered parts: 1 Scope/Object/Fundamental principles, 2 Definitions, 3 Assessment of general characteristics, 4 Protection for safety, 5 Selection and erection, 6 Inspection and testing, 7 Special installations or locations — plus appendices and the index."
            },
            {
              number: 2,
              prompt: "Definitions used throughout BS 7671 are found in:",
              options: {
                A: "Part 1",
                B: "Part 2",
                C: "Part 4",
                D: "Appendix 5"
              },
              answer: "B",
              explanation: "Part 2 is the definitions register. Italicised terms in the body text (e.g. competent person, basic protection, fault protection) are all listed and explained in Part 2."
            },
            {
              number: 3,
              prompt: "Initial verification, periodic inspection and certification are addressed in:",
              options: {
                A: "Part 3",
                B: "Part 4",
                C: "Part 6",
                D: "Part 7"
              },
              answer: "C",
              explanation: "Part 6 covers inspection and testing — Chapter 64 initial verification, Chapter 65 periodic inspection, Chapter 66 certification and reporting. Detailed test methodology lives in IET Guidance Note 3."
            },
            {
              number: 4,
              prompt: "Special installations and locations (e.g. bathrooms, swimming pools, EV charging) are addressed in:",
              options: {
                A: "Part 4",
                B: "Part 5",
                C: "Part 6",
                D: "Part 7"
              },
              answer: "D",
              explanation: "Part 7 contains the special-location sections (701 bath/shower, 702 swimming pools, 711 exhibitions, 712 PV, 715 ELV lighting, 722 EV charging, etc.). Each section modifies or supplements the general requirements for that environment."
            },
            {
              number: 5,
              prompt: "Protection for safety (shock, fire, overcurrent, voltage disturbances) is the subject of:",
              options: {
                A: "Part 1",
                B: "Part 4",
                C: "Part 5",
                D: "Part 6"
              },
              answer: "B",
              explanation: "Part 4 sets the protective measures. Chapter 41 covers shock, 42 thermal effects, 43 overcurrent, 44 voltage disturbances and EMI, 46 isolation and switching."
            },
            {
              number: 6,
              prompt: "Selection and erection of equipment (cables, wiring systems, accessories, earthing arrangements) is dealt with in:",
              options: {
                A: "Part 2",
                B: "Part 3",
                C: "Part 5",
                D: "Part 7"
              },
              answer: "C",
              explanation: "Part 5 (Chapters 51–559) covers selection and erection. It is where cable installation methods, wiring system requirements, isolation devices and earthing arrangements are specified."
            },
            {
              number: 7,
              prompt: "The fundamental principles of safety (Chapter 13) sit within which Part?",
              options: {
                A: "Part 1",
                B: "Part 3",
                C: "Part 4",
                D: "Part 5"
              },
              answer: "A",
              explanation: "Chapter 13 (the fundamental principles such as protection against electric shock, against thermal effects, etc.) is in Part 1 — the scope and object of the Regulations."
            },
            {
              number: 8,
              prompt: "Assessment of general characteristics (supplies, external influences, compatibility, maintainability) is the subject of:",
              options: {
                A: "Part 1",
                B: "Part 3",
                C: "Part 4",
                D: "Part 6"
              },
              answer: "B",
              explanation: "Part 3 gathers the up-front design assessments — Chapter 31 purpose, supplies and structure, 32 external influences (BA/BC/etc. codes), 33 compatibility, 34 maintainability, 35 safety services, 36 continuity of service."
            },
            {
              number: 9,
              prompt: "Worked voltage-drop tables and the mV/A/m method are detailed in:",
              options: {
                A: "Appendix 1",
                B: "Appendix 4",
                C: "Appendix 14",
                D: "Appendix 17"
              },
              answer: "B",
              explanation: "Appendix 4 contains the cable current-carrying capacity and voltage-drop tables (mV/A/m), the rating-factor tables, and the worked examples for cable selection. Appendix 14 deals with the Cmin temperature correction."
            },
            {
              number: 10,
              prompt: "Standard symbols used on circuit diagrams (e.g. for switches, isolators) are listed in which Appendix?",
              options: {
                A: "Appendix 5",
                B: "Appendix 8",
                C: "Appendix 9",
                D: "Appendix 16"
              },
              answer: "B",
              explanation: "Appendix 8 lists the standard graphical symbols used on diagrams, charts and tables in BS 7671. Appendix 5 deals with external influences (BA, BB, BC codes etc.)."
            },
            {
              number: 11,
              prompt: "Section 411 of BS 7671 deals primarily with:",
              options: {
                A: "Surge protective devices",
                B: "Automatic disconnection of supply (ADS)",
                C: "Cable selection",
                D: "Inspection and testing"
              },
              answer: "B",
              explanation: "Section 411 sets out protective measure 'Automatic Disconnection of Supply' (ADS) — disconnection times (411.3.2), TN/TT/IT system requirements, and the role of RCDs for additional protection."
            },
            {
              number: 12,
              prompt: "External influence codes (e.g. AD3 for water sprays, BA5 for skilled persons) are listed in:",
              options: {
                A: "Appendix 1",
                B: "Appendix 5",
                C: "Appendix 16",
                D: "Section 132"
              },
              answer: "B",
              explanation: "Appendix 5 catalogues the AA–AT (environment), BA–BD (utilisation) and CA–CB (construction) external-influence codes that designers reference when selecting equipment IP ratings and competence levels."
            },
            {
              number: 13,
              prompt: "Section 537 of BS 7671 addresses:",
              options: {
                A: "Voltage drop limits",
                B: "Isolation and switching",
                C: "Earth electrode resistance",
                D: "Generating sets"
              },
              answer: "B",
              explanation: "Section 537 covers isolation, switching off for mechanical maintenance, emergency switching and functional switching — including the device requirements for each function."
            },
            {
              number: 14,
              prompt: "British Standards referenced throughout BS 7671 are listed in:",
              options: {
                A: "Appendix 1",
                B: "Appendix 5",
                C: "Appendix 8",
                D: "Section 132"
              },
              answer: "A",
              explanation: "Appendix 1 lists the British Standards referenced in BS 7671 (and equivalent EN/IEC standards), the working title of each, and where in the Regulations they appear."
            },
            {
              number: 15,
              prompt: "The model forms (EIC, EICR, MWC and the schedules) are reproduced in:",
              options: {
                A: "Appendix 5",
                B: "Appendix 6",
                C: "Appendix 17",
                D: "Section 132"
              },
              answer: "B",
              explanation: "Appendix 6 contains the model certificates and reports — the Electrical Installation Certificate, the Minor Works Certificate, the EICR and the Schedules of Inspections and Test Results."
            },
            {
              number: 16,
              prompt: "The recommended risk-assessment method for surge protective devices is set out in:",
              options: {
                A: "Appendix 14",
                B: "Appendix 16",
                C: "Section 411",
                D: "Section 537"
              },
              answer: "B",
              explanation: "Appendix 16 provides the simplified method for assessing the calculated risk level (CRL) used to decide whether SPDs are required under Section 443."
            },
            {
              number: 17,
              prompt: "Maximum demand and diversity guidance (for cable and device sizing) is reproduced in:",
              options: {
                A: "Appendix 1",
                B: "OSG Table 1A in Appendix 17 of OSG",
                C: "BS 7671 Appendix 17",
                D: "BS 7671 has no diversity table; designers must use OSG Appendix A"
              },
              answer: "D",
              explanation: "BS 7671 itself does not contain a diversity table. Designers commonly use the IET On-Site Guide Appendix A for typical domestic diversity factors, or undertake a calculation specific to the load."
            },
            {
              number: 18,
              prompt: "Chapter 41 (shock protection) and Chapter 42 (thermal effects) both belong to:",
              options: {
                A: "Part 3",
                B: "Part 4",
                C: "Part 5",
                D: "Part 6"
              },
              answer: "B",
              explanation: "Part 4 is 'Protection for safety'. Chapter 41 = electric shock; 42 = thermal effects (including fire); 43 = overcurrent; 44 = voltage disturbances and EMI; 46 = isolation and switching."
            },
            {
              number: 19,
              prompt: "The Cmin temperature-correction concept used to align measured Zs with tabulated values is explained in:",
              options: {
                A: "Appendix 4",
                B: "Appendix 14",
                C: "Appendix 16",
                D: "Section 411"
              },
              answer: "B",
              explanation: "Appendix 14 describes the Cmin factor (typically 0.95) that corrects the supply voltage for temperature so the tabulated maximum Zs values reflect cold-conductor conditions during fault."
            },
            {
              number: 20,
              prompt: "If a regulation in Part 7 (special locations) conflicts with a general requirement in Part 4, which takes precedence?",
              options: {
                A: "The Part 4 requirement always wins",
                B: "The Part 7 requirement, because it modifies or supplements the general rule for that location",
                C: "Whichever is more recently amended",
                D: "The designer chooses freely between them"
              },
              answer: "B",
              explanation: "The opening clause of each Part 7 section states it amends, supplements or replaces general requirements for that specific location. A Part 7 special-location rule overrides the Part 4 general rule for that location."
            }
          ]
        },
        {
          id: "v2",
          questions: [
            {
              number: 1,
              prompt: "Which Part of BS 7671 sets out the scope of the Regulations and excludes installations operating above LV?",
              options: {
                A: "Part 1",
                B: "Part 2",
                C: "Part 4",
                D: "Part 7"
              },
              answer: "A",
              explanation: "Part 1 contains the scope, object and fundamental principles. Reg 110 covers what is and is not included — for example, voltages above 1000 V a.c. or 1500 V d.c. are outside scope."
            },
            {
              number: 2,
              prompt: "A defined term such as 'extraneous-conductive-part' is most reliably looked up in:",
              options: {
                A: "Part 2",
                B: "Part 3",
                C: "Appendix 1",
                D: "Appendix 8"
              },
              answer: "A",
              explanation: "Italicised terms throughout the Regulations are formally defined in Part 2. Going to Part 2 first removes any risk of guessing the meaning of a defined term."
            },
            {
              number: 3,
              prompt: "Which chapter contains Reg 411.3.2.2 (disconnection times for final circuits not exceeding 63 A)?",
              options: {
                A: "Chapter 13",
                B: "Chapter 41",
                C: "Chapter 42",
                D: "Chapter 64"
              },
              answer: "B",
              explanation: "Chapter 41 covers protection against electric shock; Section 411 within it sets the ADS requirements, including the 0.4 s and 5 s disconnection times of Reg 411.3.2.2."
            },
            {
              number: 4,
              prompt: "Reg 526 (electrical connections) sits within:",
              options: {
                A: "Part 4",
                B: "Part 5",
                C: "Part 6",
                D: "Part 7"
              },
              answer: "B",
              explanation: "Part 5 deals with selection and erection. Section 526 specifies the requirements for electrical connections — accessibility for inspection, mechanical security and current-carrying capability."
            },
            {
              number: 5,
              prompt: "Section 514 of BS 7671 governs:",
              options: {
                A: "Identification and notices (e.g. labels, warning notices, conductor identification)",
                B: "Voltage drop limits",
                C: "Bonding conductor sizing",
                D: "RCD additional protection"
              },
              answer: "A",
              explanation: "Section 514 covers identification — Reg 514.3 conductor identification, 514.10 caution notices for higher-voltage equipment, 514.12 the periodic inspection notice, 514.15 alternative-source warning."
            },
            {
              number: 6,
              prompt: "The fundamental principle that an installation must be 'designed and erected to provide for safety of persons, livestock and property' is found in:",
              options: {
                A: "Reg 131.1",
                B: "Reg 411.3.2.2",
                C: "Reg 522.6.202",
                D: "Reg 543.1.4"
              },
              answer: "A",
              explanation: "Chapter 13 contains the fundamental principles. Reg 131.1 ('General') states the safety duty of design, erection and verification. The other regs are specific technical rules in Parts 4 and 5."
            },
            {
              number: 7,
              prompt: "Chapter 33 of BS 7671 covers:",
              options: {
                A: "Compatibility (transients, harmonics, DC components, etc.)",
                B: "Maintainability of equipment",
                C: "Continuity of service",
                D: "Safety services"
              },
              answer: "A",
              explanation: "Chapter 33 — compatibility — lists the design considerations such as transient overvoltages, harmonics, DC content, motor starting, leakage currents that must be reviewed at the assessment stage."
            },
            {
              number: 8,
              prompt: "Where would you find the symbols and abbreviations used on certificates and schedules?",
              options: {
                A: "Part 2 (definitions)",
                B: "Appendix 6 (model forms)",
                C: "Appendix 8 (graphical symbols)",
                D: "Appendix 17 (electrical influences)"
              },
              answer: "C",
              explanation: "Appendix 8 contains the standard graphical symbols. Appendix 6 contains the certificate templates themselves but not the dedicated symbol library."
            },
            {
              number: 9,
              prompt: "Voltage bands (Band I ELV, Band II LV) are defined in BS 7671 within:",
              options: {
                A: "Part 1 (scope)",
                B: "Part 2 (definitions) supported by the voltage range in Reg 110",
                C: "Part 4",
                D: "Appendix 5"
              },
              answer: "B",
              explanation: "The voltage bands are formally defined in Part 2, with the LV upper limits of 1000 V a.c. or 1500 V d.c. echoed in Reg 110.1.2 (scope of the Regulations)."
            },
            {
              number: 10,
              prompt: "The schedule of inspections used at initial verification is laid out in:",
              options: {
                A: "Appendix 4",
                B: "Appendix 5",
                C: "Appendix 6",
                D: "Appendix 8"
              },
              answer: "C",
              explanation: "Appendix 6 contains the model certificates and their accompanying schedules — including the Schedule of Inspections used at initial verification."
            },
            {
              number: 11,
              prompt: "Which Section deals with overcurrent protective devices (Reg 433 overload, Reg 434 short-circuit)?",
              options: {
                A: "Section 411",
                B: "Section 421",
                C: "Section 430",
                D: "Section 525"
              },
              answer: "C",
              explanation: "Chapter 43 (Section 430 onwards) is the overcurrent protection chapter. 433 overload, 434 short-circuit, 435 coordination, 436 limitation by power source."
            },
            {
              number: 12,
              prompt: "Reg 132.16 (Additions and alterations to an installation) requires the existing installation to:",
              options: {
                A: "Be tested in full before any addition is made",
                B: "Be capable of carrying the additional load and to be safe in respect of the addition",
                C: "Be replaced if it is older than 10 years",
                D: "Be brought up to the latest amendment in full"
              },
              answer: "B",
              explanation: "Reg 132.16 — before adding to or altering an installation, the existing earthing arrangement and the existing installation must be capable of carrying the additional load and be safe in respect of the addition."
            },
            {
              number: 13,
              prompt: "Generating sets (LV) are within scope and addressed in:",
              options: {
                A: "Section 521",
                B: "Section 543",
                C: "Section 551",
                D: "Section 753"
              },
              answer: "C",
              explanation: "Section 551 covers LV generating sets. It addresses parallel and standby operation, protection requirements, and the conditions for paralleling with the public distribution network."
            },
            {
              number: 14,
              prompt: "Reg 314 ('Division of installation') belongs to:",
              options: {
                A: "Part 1",
                B: "Part 3",
                C: "Part 4",
                D: "Part 5"
              },
              answer: "B",
              explanation: "Part 3 — Reg 314 sets out the rules on division of an installation into circuits to limit consequences of fault, facilitate testing and minimise inconvenience."
            },
            {
              number: 15,
              prompt: "If a 230 V kitchen ring final circuit is being designed, which Part contains the cable selection rules?",
              options: {
                A: "Part 3",
                B: "Part 4",
                C: "Part 5",
                D: "Part 7"
              },
              answer: "C",
              explanation: "Part 5 deals with selection and erection of equipment, including cables — Section 521 (wiring systems), 523 (current-carrying capacity), 525 (voltage drop)."
            },
            {
              number: 16,
              prompt: "The Cmin factor in Appendix 14 corrects:",
              options: {
                A: "Cable temperature for current rating",
                B: "Supply voltage for fault loop impedance limits",
                C: "Conduit fill",
                D: "Touch voltage during disconnection"
              },
              answer: "B",
              explanation: "Cmin (typically 0.95) acknowledges that the supply voltage may be at the lower end of tolerance during a fault, so the tabulated maximum Zs values use 0.95 × U₀ when calculating the minimum fault current to operate the device."
            },
            {
              number: 17,
              prompt: "Which Part contains Chapter 64 (initial verification)?",
              options: {
                A: "Part 4",
                B: "Part 5",
                C: "Part 6",
                D: "Part 7"
              },
              answer: "C",
              explanation: "Part 6 (inspection and testing) houses Chapter 64 (initial verification), Chapter 65 (periodic inspection and testing) and Chapter 66 (certification and reporting)."
            },
            {
              number: 18,
              prompt: "Where in BS 7671 would you find Reg 421.1.7 (AFDD requirements)?",
              options: {
                A: "Chapter 41 — protection against electric shock",
                B: "Chapter 42 — protection against thermal effects",
                C: "Chapter 51 — common rules",
                D: "Chapter 56 — safety services"
              },
              answer: "B",
              explanation: "Chapter 42 covers protection against thermal effects, including the AFDD requirements introduced and updated by amendments. AFDDs guard against fire from arcing faults, hence the chapter."
            },
            {
              number: 19,
              prompt: "The dedicated section on safety services (emergency lighting circuits, fire detection systems) is:",
              options: {
                A: "Section 411",
                B: "Section 537",
                C: "Section 560",
                D: "Section 712"
              },
              answer: "C",
              explanation: "Section 560 covers safety services — sources, circuits, wiring systems and tests for installations supplying equipment such as emergency lighting and fire alarm systems."
            },
            {
              number: 20,
              prompt: "If a Part 7 special-location section is silent on a particular issue, the designer should:",
              options: {
                A: "Treat the silence as a prohibition",
                B: "Apply the relevant Part 1–6 general requirements",
                C: "Apply the manufacturer's instructions only",
                D: "Default to the previous edition's wording"
              },
              answer: "B",
              explanation: "Part 7 sections only modify or supplement the general requirements. Where a Part 7 section is silent, the designer applies the parent rules from Parts 1–6 (fundamental principles, definitions, design, protection, selection and erection, verification)."
            }
          ]
        },
        {
          id: "v3",
          questions: [
            {
              number: 1,
              prompt: "Which Section gives the disconnection-time table for circuit-breakers and RCBOs (Table 41.3)?",
              options: {
                A: "Section 411",
                B: "Section 421",
                C: "Section 525",
                D: "Section 537"
              },
              answer: "A",
              explanation: "Table 41.3 sits within Section 411 (ADS). It tabulates maximum Zs for circuit-breakers and RCBOs against device type (B/C/D) so the device disconnects in the relevant 41.1 time."
            },
            {
              number: 2,
              prompt: "Reg 543.1.4 (sizing of protective conductors by adiabatic) belongs to which Part?",
              options: {
                A: "Part 4",
                B: "Part 5",
                C: "Part 6",
                D: "Part 7"
              },
              answer: "B",
              explanation: "Section 543 in Part 5 deals with protective conductors. Reg 543.1.3 lets the designer size by table; 543.1.4 lets the designer size by adiabatic equation S = √(I²t)/k."
            },
            {
              number: 3,
              prompt: "The sequence of Parts 1 → 7 mirrors the design workflow because:",
              options: {
                A: "Parts must be applied in numerical order without exception",
                B: "Each Part addresses an earlier stage in the design lifecycle, from scope and assessment to verification and special locations",
                C: "Parts are assigned in order of date of issue",
                D: "Numerical order matches alphabetical order of topic"
              },
              answer: "B",
              explanation: "BS 7671 is structured to follow the workflow: scope (1), language (2), assessment (3), protection (4), selection/erection (5), inspection/testing (6), special locations (7)."
            },
            {
              number: 4,
              prompt: "Bonding conductor sizing for main protective bonding (TN-C-S) uses which Table?",
              options: {
                A: "Table 41.1",
                B: "Table 41.3",
                C: "Table 54.8",
                D: "Table 54.7"
              },
              answer: "C",
              explanation: "Table 54.8 sets the minimum CSA of the main protective bonding conductor for TN-C-S supplies in relation to the supply neutral CSA. Table 54.7 is for CPC sizing by selection."
            },
            {
              number: 5,
              prompt: "Maximum permitted earth fault loop impedance values are given relative to:",
              options: {
                A: "Touch voltage Ut",
                B: "Disconnection time required by Reg 411.3.2.2",
                C: "Earth electrode resistance RA only",
                D: "Cable CSA"
              },
              answer: "B",
              explanation: "The Zs limits in Tables 41.2/41.3/41.4 are derived from the disconnection time the device must achieve under Reg 411.3.2.2 (0.4 s or 5 s) at the relevant fault current."
            },
            {
              number: 6,
              prompt: "Cable installation methods (Reference Methods A, B, C, D, etc.) are tabulated in:",
              options: {
                A: "Appendix 1",
                B: "Appendix 4",
                C: "Appendix 5",
                D: "Section 132"
              },
              answer: "B",
              explanation: "Appendix 4 includes the reference installation methods (Tables 4A1, 4A2) and the corresponding cable current-carrying capacity tables, with rating factors for grouping, ambient temperature and thermal insulation."
            },
            {
              number: 7,
              prompt: "Reg 411.3.3 (additional protection by 30 mA RCD for socket outlets) is in:",
              options: {
                A: "Chapter 41",
                B: "Chapter 42",
                C: "Chapter 43",
                D: "Chapter 53"
              },
              answer: "A",
              explanation: "Chapter 41 hosts the ADS rules and the additional-protection requirements — Reg 411.3.3 mandates 30 mA RCDs on most socket outlets up to 32 A and on mobile equipment up to 32 A used outdoors."
            },
            {
              number: 8,
              prompt: "Which Part of BS 7671 includes the requirement for a periodic inspection notice (Reg 514.12.1)?",
              options: {
                A: "Part 3",
                B: "Part 4",
                C: "Part 5",
                D: "Part 6"
              },
              answer: "C",
              explanation: "Section 514 (identification and notices) is part of Part 5 — selection and erection. Reg 514.12.1 requires a notice on or near the consumer unit indicating recommended next inspection date."
            },
            {
              number: 9,
              prompt: "The principal section dealing with overcurrent coordination of protective devices is:",
              options: {
                A: "Section 433",
                B: "Section 434",
                C: "Section 435",
                D: "Section 536"
              },
              answer: "C",
              explanation: "Reg 435 deals with coordination of overload and short-circuit protection — for example, where a downstream device has lower breaking capacity than the upstream prospective fault current."
            },
            {
              number: 10,
              prompt: "Section 132 (general design) sits within:",
              options: {
                A: "Part 1",
                B: "Part 3",
                C: "Part 4",
                D: "Appendix 1"
              },
              answer: "A",
              explanation: "Section 132 lives in Part 1 (Chapter 13 — fundamental principles). It states the high-level design objectives every BS 7671 installation must satisfy."
            },
            {
              number: 11,
              prompt: "Reg 526.5 (enclosure of connections) sits within:",
              options: {
                A: "Part 4",
                B: "Part 5",
                C: "Part 6",
                D: "Part 7"
              },
              answer: "B",
              explanation: "Section 526 belongs to Part 5 (selection and erection). 526.5 requires that connections are enclosed in a suitable accessory enclosure or cable management system unless made within equipment itself."
            },
            {
              number: 12,
              prompt: "Heating cables and embedded heating systems are addressed in:",
              options: {
                A: "Section 715",
                B: "Section 740",
                C: "Section 753",
                D: "Section 826"
              },
              answer: "C",
              explanation: "Section 753 covers heating cables and embedded heating systems (underfloor heating, snow-melting). 715 is ELV lighting; 740 is fairgrounds; 826 is prosumer installations."
            },
            {
              number: 13,
              prompt: "Section 132.4 (compatibility) requires the designer to consider:",
              options: {
                A: "Only the rating of overcurrent devices",
                B: "Anything that may interfere with the supply or other equipment (transients, harmonics, DC components, motor starting current, etc.)",
                C: "Only voltage drop in the longest circuit",
                D: "Only PFC at the origin"
              },
              answer: "B",
              explanation: "Reg 132.4 cross-references Chapter 33; the designer must take account of compatibility issues including transients, harmonics, DC content, motor starting and leakage currents."
            },
            {
              number: 14,
              prompt: "The 'Additional protection by RCD' wording in Reg 415.1.1 sets the maximum operating residual current at:",
              options: {
                A: "10 mA",
                B: "30 mA",
                C: "100 mA",
                D: "300 mA"
              },
              answer: "B",
              explanation: "Reg 415.1.1 — additional protection RCD must have IΔn ≤ 30 mA. 100 / 300 mA RCDs are used for fault protection or fire-risk mitigation but not for additional shock protection."
            },
            {
              number: 15,
              prompt: "A circuit-breaker selectivity (discrimination) study sits primarily under which Section?",
              options: {
                A: "Section 411",
                B: "Section 433",
                C: "Section 535/536",
                D: "Section 543"
              },
              answer: "C",
              explanation: "Reg 535 (selectivity / discrimination of devices) sits within Chapter 53. Reg 536.4.1 specifies selectivity considerations for RCDs in series."
            },
            {
              number: 16,
              prompt: "Chapter 52 of BS 7671 deals with:",
              options: {
                A: "Wiring systems (cables, conductors, support, segregation, fire stopping, etc.)",
                B: "Switchgear and controlgear",
                C: "Protective conductors",
                D: "Earthing arrangements"
              },
              answer: "A",
              explanation: "Chapter 52 covers wiring systems — selection, types of cable, supports, mechanical protection, segregation, fire stopping (Reg 527), enclosures, etc."
            },
            {
              number: 17,
              prompt: "Reg 411.4.5 covers the requirement to use which device type on TN systems where Zs cannot meet the disconnection time?",
              options: {
                A: "Type AC RCD",
                B: "An RCD providing additional protection",
                C: "An RCD providing fault protection (typically 100 mA or 300 mA)",
                D: "A surge protective device"
              },
              answer: "C",
              explanation: "Where Zs is too high to disconnect within the required time using overcurrent protection alone (e.g. long final circuits or TT systems), an RCD is used to provide fault protection (Reg 411.4.5 / 411.5 for TT)."
            },
            {
              number: 18,
              prompt: "The 'Numbering of Regulations' note that explains the structure (e.g. 411.3.2.2) is in:",
              options: {
                A: "Part 0 — Introduction",
                B: "Part 1 — Scope",
                C: "Part 2 — Definitions",
                D: "Appendix 1"
              },
              answer: "B",
              explanation: "Part 1 (scope, object, fundamental principles) includes the note explaining that regulation numbers follow a Part.Chapter.Section.Subsection pattern. So 411.3.2.2 = Part 4, Chapter 1, Section 1, Reg 3.2.2."
            },
            {
              number: 19,
              prompt: "Reg 526.4 requires that every connection between conductors and equipment shall be such that:",
              options: {
                A: "Sufficient and durable electrical continuity, adequate mechanical strength and protection are ensured",
                B: "It is welded, brazed or soldered only",
                C: "It is removable without tools at any point",
                D: "It uses screw terminals exclusively"
              },
              answer: "A",
              explanation: "Reg 526.4 requires the connection to be electrically continuous, mechanically strong and adequately protected. Welding/brazing is one acceptable method but not a requirement."
            },
            {
              number: 20,
              prompt: "Why are Part 7 special-location sections numbered 7xx?",
              options: {
                A: "There are 700+ regulations in BS 7671",
                B: "Each location section starts with 7 to denote Part 7; the next two digits identify the specific location (e.g. 701 bath/shower, 722 EV charging)",
                C: "It is the year the regulation was first introduced",
                D: "It tracks the IET registration number"
              },
              answer: "B",
              explanation: "Part 7 numbering: the leading 7 indicates Part 7. The next two digits identify the specific location — 701 bath/shower, 702 swimming pools, 711 exhibitions, 712 PV, 715 ELV lighting, 722 EV charging, 740 fairgrounds, 753 heating cables, 826 prosumer."
            }
          ]
        },
        {
          id: "v4",
          questions: [
            {
              number: 1,
              prompt: "Which Section of BS 7671 is the principal home of the requirements for electrical isolation devices?",
              options: {
                A: "Section 411",
                B: "Section 437",
                C: "Section 537",
                D: "Section 712"
              },
              answer: "C",
              explanation: "Section 537 covers isolation, switching off for mechanical maintenance, emergency switching and functional switching. Each function has its own device requirements."
            },
            {
              number: 2,
              prompt: "Reg 132.6 ('Conductors') requires conductors to be selected with regard to:",
              options: {
                A: "Only their rated voltage",
                B: "Maximum operating temperature, voltage drop, electromechanical stress and current carrying capacity",
                C: "Only colour and identification",
                D: "Only manufacturer"
              },
              answer: "B",
              explanation: "Reg 132.6 sets the selection considerations for conductors — current capacity, voltage drop, thermal limits during fault, electromechanical stress and harmonics. It is the high-level rule that drives Chapters 52 and 54."
            },
            {
              number: 3,
              prompt: "The 'four conditions' for omitting supplementary equipotential bonding in a bath/shower room are listed in:",
              options: {
                A: "Reg 411.3.3",
                B: "Reg 415.2.2",
                C: "Reg 701.415.2",
                D: "Reg 722.411.4.1"
              },
              answer: "C",
              explanation: "Reg 701.415.2 sits within Section 701 (bath/shower locations). It specifies that supplementary bonding may be omitted only when the four conditions on ADS, RCD additional protection and main bonding to all extraneous-conductive-parts are all met."
            },
            {
              number: 4,
              prompt: "Earthing arrangements (TN-S, TN-C-S, TT, IT) are described in:",
              options: {
                A: "Chapter 31 / Reg 312",
                B: "Chapter 41",
                C: "Chapter 51",
                D: "Section 543"
              },
              answer: "A",
              explanation: "Reg 312.2 (within Chapter 31, Part 3) describes the earthing systems and shows the schematic diagrams of TN-S, TN-C-S, TT and IT arrangements."
            },
            {
              number: 5,
              prompt: "Section 525 of BS 7671 sets:",
              options: {
                A: "Voltage drop requirements",
                B: "Cable colour codes",
                C: "Earth electrode resistance limits",
                D: "Disconnection times"
              },
              answer: "A",
              explanation: "Section 525 sets the principle that voltage at terminals of fixed equipment must remain within the equipment's working range. Appendix 4 supplies the practical limits (3% lighting, 5% other; 6%/8% private LV)."
            },
            {
              number: 6,
              prompt: "Which Appendix lists external influences (BA, BB, BD codes etc.)?",
              options: {
                A: "Appendix 4",
                B: "Appendix 5",
                C: "Appendix 6",
                D: "Appendix 14"
              },
              answer: "B",
              explanation: "Appendix 5 catalogues the external-influence codes — environment AA–AT, utilisation BA–BD and construction CA–CB. Designers reference this when picking equipment IP/IK ratings and competence levels."
            },
            {
              number: 7,
              prompt: "The boundary condition Ib ≤ In ≤ Iz comes from which Section?",
              options: {
                A: "Section 411",
                B: "Section 433",
                C: "Section 525",
                D: "Section 543"
              },
              answer: "B",
              explanation: "Reg 433.1.1 sets the cable/device coordination conditions for overload protection — design current Ib not exceeding device rating In not exceeding cable capacity Iz, with In ≤ I2 ≤ 1.45 Iz the second."
            },
            {
              number: 8,
              prompt: "Where would you find the requirements for cable segregation between Band I (ELV) and Band II (LV) circuits?",
              options: {
                A: "Section 411",
                B: "Section 515 / 528",
                C: "Section 540",
                D: "Section 753"
              },
              answer: "B",
              explanation: "Reg 515 (compatibility within Part 5) and 528 (proximity to other services) deal with segregation between voltage bands and between cabling and other services such as gas, water and signal."
            },
            {
              number: 9,
              prompt: "The recommended limits 6 % lighting / 8 % other for voltage drop apply when:",
              options: {
                A: "The installation is supplied directly from the public LV distribution network",
                B: "The installation is supplied by a private LV source (own transformer or generator)",
                C: "Cables run buried underground",
                D: "The installation has SPDs fitted"
              },
              answer: "B",
              explanation: "Appendix 4 Table 4Ab — public LV supply: 3% lighting / 5% other. Private LV source (e.g. dedicated step-down transformer or generator): 6% lighting / 8% other."
            },
            {
              number: 10,
              prompt: "Reg 433.3 lets overload protection be omitted in which scenarios?",
              options: {
                A: "Any final circuit where the design current is less than 16 A",
                B: "Specific cases (rotating machine exciter circuits, lifting magnet circuits, safety circuits like fire suppression) where unwanted disconnection causes greater hazard",
                C: "Domestic lighting circuits",
                D: "Outdoor socket-outlet circuits"
              },
              answer: "B",
              explanation: "Reg 433.3 lists named scenarios where omission of overload protection is permitted because tripping causes a worse hazard than overload — exciter circuits, lifting magnets, certain motor circuits, fire-fighting equipment supplies."
            },
            {
              number: 11,
              prompt: "Section 415 of BS 7671 deals with:",
              options: {
                A: "Additional protection (30 mA RCDs and supplementary equipotential bonding)",
                B: "Surge protection",
                C: "Generating sets",
                D: "Inspection schedules"
              },
              answer: "A",
              explanation: "Section 415 covers additional protective measures — Reg 415.1 RCDs (≤ 30 mA), Reg 415.2 supplementary equipotential bonding."
            },
            {
              number: 12,
              prompt: "Reg 543 deals with:",
              options: {
                A: "Earthing arrangements",
                B: "Protective conductors (sizing and identification)",
                C: "Equipotential bonding",
                D: "Earth electrodes"
              },
              answer: "B",
              explanation: "Section 543 — protective conductors. Reg 543.1 sizing (table or adiabatic), 543.2 types, 543.3 mechanical protection, 543.4 isolating arrangements, 543.7 earthing arrangements for high protective-conductor current."
            },
            {
              number: 13,
              prompt: "The 'Selection and erection of electrical equipment in relation to external influences' is governed by which Section?",
              options: {
                A: "Section 132",
                B: "Section 512.2",
                C: "Section 512.3",
                D: "Appendix 5"
              },
              answer: "B",
              explanation: "Reg 512.2 — operational and external conditions. Designers cross-reference Appendix 5 codes against this regulation when specifying equipment IP/IK ratings."
            },
            {
              number: 14,
              prompt: "Which Section would you turn to for the requirement for an RCD to be a Type B in EV charging applications?",
              options: {
                A: "Section 415",
                B: "Section 537",
                C: "Section 712",
                D: "Section 722"
              },
              answer: "D",
              explanation: "Section 722 (EV charging) requires a Type B RCD on the charge point unless the charge point itself includes equivalent residual DC detection (RDC-DD). 712 is PV; 537 is isolation; 415 is general additional protection."
            },
            {
              number: 15,
              prompt: "Reg 411.5 covers ADS for which earthing system?",
              options: {
                A: "TN-S",
                B: "TN-C-S",
                C: "TT",
                D: "IT"
              },
              answer: "C",
              explanation: "Reg 411.5 — Automatic Disconnection on TT systems, where RCDs are typically the only practical means of meeting the disconnection times because earth electrode resistance is too high to rely on overcurrent devices."
            },
            {
              number: 16,
              prompt: "The principle that equipment must be 'reasonably accessible for inspection, testing, maintenance and replacement' is in:",
              options: {
                A: "Reg 132.12 / Reg 513",
                B: "Reg 411.4.4",
                C: "Reg 522.6.202",
                D: "Reg 543.1.4"
              },
              answer: "A",
              explanation: "Reg 132.12 sets the principle and Section 513 expands it. Cramming a CU into a tight cupboard with no working space fails the rule; so does running cables behind permanent finishes."
            },
            {
              number: 17,
              prompt: "Which Part contains Chapter 56 (safety services)?",
              options: {
                A: "Part 3",
                B: "Part 4",
                C: "Part 5",
                D: "Part 6"
              },
              answer: "C",
              explanation: "Chapter 56 (Section 560 — safety services) lives in Part 5. It covers the supply sources, circuits and wiring systems for safety services such as emergency lighting and fire alarm panels."
            },
            {
              number: 18,
              prompt: "The combined Reg 514.15.1 / 551 warning notice for parallel sources (PV / battery) demands the notice be:",
              options: {
                A: "Only in the meter cupboard",
                B: "Adjacent to every point of isolation in the affected installation, warning of the alternative supply",
                C: "Only in the loft adjacent to the inverter",
                D: "Optional unless requested by the DNO"
              },
              answer: "B",
              explanation: "Reg 514.15 — where a generator, inverter or battery may energise the installation independently, a warning notice must be at every point of isolation telling anyone working downstream the supply may still be live."
            },
            {
              number: 19,
              prompt: "An assessor designing a new dwelling consults Section 443 to decide:",
              options: {
                A: "RCD type",
                B: "Whether SPDs are required and at what type",
                C: "Maximum demand and diversity",
                D: "Bonding conductor CSA"
              },
              answer: "B",
              explanation: "Section 443 (protection against transient overvoltages) is where SPD requirements are decided — the consequence categories and the calculated risk-level approach (with Section 534 specifying selection and erection of the device)."
            },
            {
              number: 20,
              prompt: "The numbering ‘522.6.202’ tells you the regulation lives in:",
              options: {
                A: "Part 5, Chapter 2 (wiring systems), Section 522 (external influences), specific subsection 6.202",
                B: "Part 5, Chapter 22, Section 26, sub-clause 202",
                C: "Part 4, Chapter 22, sub-clause 6.202",
                D: "An appendix"
              },
              answer: "A",
              explanation: "BS 7671 numbering follows Part.Chapter.Section.Subsection — 5.2.2 lives in Part 5, Chapter 52 (wiring systems), Section 522 (external influences). The .6.202 hangs off the 522.6 mechanical influences set, dealing with cables in walls."
            }
          ]
        },
        {
          id: "v5",
          questions: [
            {
              number: 1,
              prompt: "Which Part of BS 7671 contains Reg 411.3.2.6 (additional protection for socket outlets in dwellings)?",
              options: {
                A: "Part 1",
                B: "Part 4",
                C: "Part 5",
                D: "Part 7"
              },
              answer: "B",
              explanation: "Part 4 — protection for safety. Section 411 within Chapter 41 (electric shock) holds the ADS requirements and additional-protection regulations such as Reg 411.3.3 (socket outlets up to 32 A) and 411.3.4 (luminaires in dwellings)."
            },
            {
              number: 2,
              prompt: "Where would a designer expect to find the maximum disconnection times for distribution circuits not exceeding 5 s?",
              options: {
                A: "Reg 411.3.2.4",
                B: "Reg 411.4.4",
                C: "Reg 543.1.4",
                D: "Reg 712.411"
              },
              answer: "A",
              explanation: "Reg 411.3.2.4 confirms that distribution circuits and final circuits exceeding 32 A may have a disconnection time of up to 5 s on TN systems (1 s on TT)."
            },
            {
              number: 3,
              prompt: "Inspection schedules and a prefilled certificate are exemplified in which Appendix?",
              options: {
                A: "Appendix 1",
                B: "Appendix 4",
                C: "Appendix 6",
                D: "Appendix 17"
              },
              answer: "C",
              explanation: "Appendix 6 contains the model EIC, EICR, MWC, schedules of inspections and schedules of test results — the standard pre-printed forms."
            },
            {
              number: 4,
              prompt: "Reg 415.2.2 stipulates that the resistance R between simultaneously accessible exposed and extraneous parts in a supplementary bonding zone shall not exceed:",
              options: {
                A: "0.05 Ω",
                B: "1 Ω",
                C: "50/Ia (where Ia is the current causing operation of the protective device within 5 s)",
                D: "Ut/(Ut + 50)"
              },
              answer: "C",
              explanation: "Reg 415.2.2 — supplementary bonding works when R ≤ 50/Ia, ensuring the touch voltage during a fault is limited to 50 V (touch voltage limit). The lower the operating current Ia, the higher the permitted R."
            },
            {
              number: 5,
              prompt: "Section 134 ('Inspection and testing') belongs to:",
              options: {
                A: "Part 1 (Chapter 13 fundamental principles)",
                B: "Part 4",
                C: "Part 5",
                D: "Part 6"
              },
              answer: "A",
              explanation: "Reg 134 (within Chapter 13) is the high-level fundamental principle for inspection and testing — Part 6 (Chapters 64–66) then prescribes the detail."
            },
            {
              number: 6,
              prompt: "Reg 132.16 ('Additions and alterations') requires:",
              options: {
                A: "Only the addition itself to be tested",
                B: "The existing earthing arrangement and the existing installation to be capable of carrying the additional load and to be safe in respect of the addition",
                C: "Re-issue of the original EIC",
                D: "An EICR for the whole installation"
              },
              answer: "B",
              explanation: "Reg 132.16 — when adding to or altering an installation, the existing earthing must be adequate and the existing installation must remain safe in respect of the new work."
            },
            {
              number: 7,
              prompt: "Which Part of BS 7671 contains Section 134.1 ('Good workmanship and proper materials')?",
              options: {
                A: "Part 1",
                B: "Part 3",
                C: "Part 4",
                D: "Part 6"
              },
              answer: "A",
              explanation: "Reg 134.1 (Part 1, Chapter 13) is the fundamental-principle requirement for good workmanship and proper materials throughout the installation work."
            },
            {
              number: 8,
              prompt: "Reg 411.4.4 specifies that on a TN system, the protective device disconnection time relies on:",
              options: {
                A: "Earth electrode resistance only",
                B: "An RCD only",
                C: "Either an overcurrent device or an RCD operating within the time of Reg 411.3.2.2",
                D: "Voltage drop calculation"
              },
              answer: "C",
              explanation: "Reg 411.4.4 — on TN, the protective device may be either an overcurrent device or an RCD. Either must operate within the maximum disconnection time of Reg 411.3.2.2 for the circuit category."
            },
            {
              number: 9,
              prompt: "Section 543 grants two methods for sizing a protective conductor. They are:",
              options: {
                A: "By the table (Table 54.7) or by adiabatic calculation (Reg 543.1.4)",
                B: "By the table only",
                C: "By manufacturer recommendation only",
                D: "By trial and error"
              },
              answer: "A",
              explanation: "Reg 543.1.3 lets you size by Table 54.7 (related to line CSA). Reg 543.1.4 lets you calculate by the adiabatic equation S = √(I²t)/k for a defined fault duration."
            },
            {
              number: 10,
              prompt: "Reg 134.2 (initial verification) is implemented in which Part?",
              options: {
                A: "Part 4",
                B: "Part 5",
                C: "Part 6",
                D: "Part 7"
              },
              answer: "C",
              explanation: "The high-level principle is in Part 1 (Reg 134.2). The implementation lives in Part 6 (Chapter 64 initial verification)."
            },
            {
              number: 11,
              prompt: "Section 421 of BS 7671 deals with:",
              options: {
                A: "Protection against fire (general requirements, AFDDs)",
                B: "Bonding sizing",
                C: "Cable selection",
                D: "Inspection schedules"
              },
              answer: "A",
              explanation: "Section 421 (Chapter 42 — protection against thermal effects) sets out the protection against fire caused by electrical equipment. Reg 421.1.7 specifies AFDD requirements."
            },
            {
              number: 12,
              prompt: "Functional earthing conductors are identified by the colour:",
              options: {
                A: "Green/yellow",
                B: "Blue",
                C: "Cream",
                D: "Pink"
              },
              answer: "D",
              explanation: "Table 51 / Reg 514 — a conductor whose sole purpose is functional earthing is identified pink, with the alphanumeric designation FE. Cream was the older colour and is no longer the current answer."
            },
            {
              number: 13,
              prompt: "Reg 314 ('Division of installation') drives the practice of:",
              options: {
                A: "Dividing the installation into circuits to limit consequences of a fault, facilitate testing and avoid unnecessary inconvenience",
                B: "Dividing the installation by phase only",
                C: "Splitting any installation into three sub-mains",
                D: "Always providing two consumer units"
              },
              answer: "A",
              explanation: "Reg 314.1 — division into circuits limits hazards, faults and inconvenience; allows safe inspection/testing; and reduces the risk of unwanted tripping."
            },
            {
              number: 14,
              prompt: "Reg 651 (frequency of periodic inspection) recommends the frequency be determined by considering:",
              options: {
                A: "Building age only",
                B: "Type of installation, use and operation, frequency and quality of maintenance, external influences",
                C: "Number of occupants only",
                D: "Postcode of the property"
              },
              answer: "B",
              explanation: "Reg 651.1 — the frequency depends on the installation type, use, operation, maintenance regime and external influences. IET Guidance Note 3 reproduces the typical interval table."
            },
            {
              number: 15,
              prompt: "Which Section dictates labelling of distribution boards (e.g. circuit charts)?",
              options: {
                A: "Section 411",
                B: "Section 514",
                C: "Section 537",
                D: "Section 712"
              },
              answer: "B",
              explanation: "Section 514 (identification and notices) requires durable labelling at distribution equipment — Reg 514.8 calls for a circuit chart, Reg 514.9 for diagrams of complex installations, Reg 514.12 for the periodic inspection notice."
            },
            {
              number: 16,
              prompt: "The Cmin temperature correction value of 0.95 effectively reduces:",
              options: {
                A: "Tabulated cable current rating Iz",
                B: "Tabulated maximum Zs to ensure the device disconnects with a slightly lower supply voltage",
                C: "RCD operating current",
                D: "The k constant in the adiabatic equation"
              },
              answer: "B",
              explanation: "Cmin (Appendix 14) accounts for supply voltage at the lower end of tolerance, e.g. 230 V × 0.95 ≈ 218 V, ensuring the calculated maximum Zs values still result in disconnection within the required time."
            },
            {
              number: 17,
              prompt: "Which Section of BS 7671 was introduced by A2:2022 specifically for prosumer installations?",
              options: {
                A: "Section 712",
                B: "Section 722",
                C: "Section 826",
                D: "Section 753"
              },
              answer: "C",
              explanation: "Section 826 — Prosumer Electrical Installations — was introduced in A2:2022 to cover dwellings that both consume and produce electricity (PV + battery storage + EV combinations)."
            },
            {
              number: 18,
              prompt: "An exam question that asks you for the IPX rating in a marina seashore location should send you to:",
              options: {
                A: "Section 701",
                B: "Section 706",
                C: "Section 709",
                D: "Section 740"
              },
              answer: "C",
              explanation: "Section 709 covers marinas. Seashore installations require IPX6 (powerful jets / wave action). Section 706 is conducting locations with restricted movement; 740 is fairgrounds."
            },
            {
              number: 19,
              prompt: "Reg 411.3.4 (additional protection in dwellings) extends 30 mA RCD protection to:",
              options: {
                A: "Lighting circuits in dwellings (final circuits supplying luminaires)",
                B: "Heating circuits in commercial premises",
                C: "Outdoor sockets only",
                D: "Distribution circuits"
              },
              answer: "A",
              explanation: "Reg 411.3.4 introduced (and now retained) the requirement for 30 mA RCD additional protection on AC final circuits supplying luminaires within domestic (household) premises."
            },
            {
              number: 20,
              prompt: "If a competent designer needs to recall the structure of BS 7671 quickly, the easiest mental hook is to remember Parts:",
              options: {
                A: "Define → Design → Disconnect → Document",
                B: "Scope → Definitions → Assessment → Protection → Selection/erection → Inspection → Special locations",
                C: "Plan → Buy → Install",
                D: "Read → Test → Sign"
              },
              answer: "B",
              explanation: "The mental walk through Parts 1–7 is: Scope/principles, Definitions, Assessment of characteristics, Protection for safety, Selection and erection, Inspection and testing, Special locations. That ordering matches the design lifecycle."
            }
          ]
        }
      ]
    },
    {
      id: "section-2",
      title: "Section 2 — Special Provisions & Key Tables",
      variants: [
        {
          id: "v1",
          questions: [
            {
              number: 1,
              prompt: "In a domestic bathroom, the IP rating required for equipment installed in Zone 0 (inside the bath/shower basin) is:",
              options: {
                A: "IPX4",
                B: "IPX5",
                C: "IPX7",
                D: "IPX8"
              },
              answer: "C",
              explanation: "Section 701 — Zone 0 is the interior of the bath or shower basin, where temporary immersion is possible. The minimum IP rating is IPX7, which means protection against the effects of temporary immersion."
            },
            {
              number: 2,
              prompt: "Zone 1 of a room containing a bath or shower extends from the finished floor to:",
              options: {
                A: "1.8 m above the floor",
                B: "2.25 m above the floor (or to the height of any fixed water outlet, whichever is higher)",
                C: "3 m above the floor",
                D: "Roof level"
              },
              answer: "B",
              explanation: "Reg 701.32.2 — Zone 1 extends to 2.25 m above the finished floor, or to the highest fixed water outlet (e.g. a high-mounted shower head) when that is greater than 2.25 m."
            },
            {
              number: 3,
              prompt: "Zone 2 of a domestic bath/shower room extends 0.6 m horizontally outward from the boundary of:",
              options: {
                A: "Zone 0",
                B: "Zone 1",
                C: "The doorway",
                D: "The window"
              },
              answer: "B",
              explanation: "Reg 701.32.3 — Zone 2 is the volume bordering Zone 1, extending 0.6 m horizontally outward from the boundary of Zone 1, up to a height of 2.25 m above the floor."
            },
            {
              number: 4,
              prompt: "The minimum CSA of the main protective bonding conductor for a TN-C-S supply with a 35 mm² supply neutral is (Cu, BS 7671 Table 54.8):",
              options: {
                A: "6 mm²",
                B: "10 mm²",
                C: "16 mm²",
                D: "25 mm²"
              },
              answer: "B",
              explanation: "Table 54.8 — for a PME (TN-C-S) supply with neutral CSA up to and including 35 mm², the minimum copper main protective bonding conductor is 10 mm²."
            },
            {
              number: 5,
              prompt: "A 50 mm² supply neutral on a TN-C-S system requires a main protective bonding conductor of (Cu):",
              options: {
                A: "10 mm²",
                B: "16 mm²",
                C: "25 mm²",
                D: "35 mm²"
              },
              answer: "B",
              explanation: "Table 54.8 step — neutral 50 mm² → main bonding 16 mm² Cu. The next step (70–95 mm² neutral) requires 25 mm² bonding, then 120 mm² neutral → 35 mm², and ≥ 150 mm² neutral → 50 mm²."
            },
            {
              number: 6,
              prompt: "The maximum permitted Zs for a Type B 32 A circuit-breaker on a 230 V TN system at 0.4 s (Table 41.3) is approximately:",
              options: {
                A: "0.69 Ω",
                B: "1.09 Ω",
                C: "1.37 Ω",
                D: "2.19 Ω"
              },
              answer: "C",
              explanation: "Type B 32 A: Ia = 5 × 32 = 160 A. Zs = (0.95 × 230)/160 ≈ 1.366 → 1.37 Ω as tabulated in Table 41.3 (with the Cmin factor)."
            },
            {
              number: 7,
              prompt: "The maximum permitted Zs for a 6 A Type B circuit-breaker on a 230 V TN system at 0.4 s is approximately:",
              options: {
                A: "1.93 Ω",
                B: "3.65 Ω",
                C: "7.28 Ω",
                D: "14.57 Ω"
              },
              answer: "C",
              explanation: "Type B 6 A: Ia = 5 × 6 = 30 A. Zs = (0.95 × 230)/30 ≈ 7.28 Ω. (Table 41.3 confirms.)"
            },
            {
              number: 8,
              prompt: "Public LV supply: the recommended maximum voltage drop on a lighting final circuit (Appendix 4) is:",
              options: {
                A: "3 % of nominal",
                B: "5 % of nominal",
                C: "6 % of nominal",
                D: "8 % of nominal"
              },
              answer: "A",
              explanation: "Appendix 4 Table 4Ab — public LV supply: 3% lighting / 5% other. Private LV source: 6% lighting / 8% other."
            },
            {
              number: 9,
              prompt: "Public LV supply: the recommended maximum voltage drop on 'other uses' final circuits (Appendix 4) is:",
              options: {
                A: "3 %",
                B: "5 %",
                C: "6 %",
                D: "8 %"
              },
              answer: "B",
              explanation: "Appendix 4 — 5% from origin to terminals on 'other uses' final circuits where the supply is from the public LV network."
            },
            {
              number: 10,
              prompt: "Section 701 (bath/shower) requires that all LV circuits serving the location are:",
              options: {
                A: "Provided with a 30 mA RCD for additional protection",
                B: "Provided with a 100 mA RCD only",
                C: "Provided with no RCD",
                D: "On a private supply"
              },
              answer: "A",
              explanation: "Reg 701.411.3.3 — every LV circuit of the location, and every circuit passing through Zones 1 and 2, requires 30 mA RCD additional protection."
            },
            {
              number: 11,
              prompt: "Standard socket outlets are permitted in a room containing a bath or shower provided they are at least which distance from the boundary of Zone 1?",
              options: {
                A: "0.6 m",
                B: "1.5 m",
                C: "2.5 m",
                D: "3 m"
              },
              answer: "C",
              explanation: "Reg 701.512.3 — low-voltage socket-outlets in a location containing a bath or shower must be sited at least 2.5 m horizontally from the boundary of Zone 1. The older 3 m distance was reduced by Amendment 2."
            },
            {
              number: 12,
              prompt: "The minimum copper protective bonding conductor for a non-PME (TN-S) installation must not be less than:",
              options: {
                A: "2.5 mm²",
                B: "6 mm²",
                C: "10 mm²",
                D: "16 mm²"
              },
              answer: "B",
              explanation: "Reg 544.1.1 — main protective bonding conductors for non-PME TN-S/TT must be at least half the CSA of the earthing conductor, with a minimum of 6 mm² Cu and a maximum of 25 mm² Cu."
            },
            {
              number: 13,
              prompt: "The mV/A/m tables in Appendix 4 are used to calculate:",
              options: {
                A: "Voltage drop along a cable of given CSA at the design current",
                B: "RCD operating time",
                C: "Earth fault loop impedance",
                D: "Zs at the consumer unit"
              },
              answer: "A",
              explanation: "Appendix 4 — voltage drop V = (mV/A/m × Ib × L)/1000, multiplied by appropriate factors for power factor or 3-phase. The tables give mV per ampere per metre for each CSA."
            },
            {
              number: 14,
              prompt: "Equipment installed in Zone 1 of a bath/shower room must, where likely to be subjected to water jets, have minimum ingress protection of:",
              options: {
                A: "IPX4",
                B: "IPX5",
                C: "IPX7",
                D: "IPX8"
              },
              answer: "B",
              explanation: "Section 701 — Zone 1 default is IPX4. Where water jets are likely (commercial showers, accessible locations cleaned with hose), the requirement steps up to IPX5."
            },
            {
              number: 15,
              prompt: "Section 702 (swimming pools) defines the volume directly above a springboard that extends:",
              options: {
                A: "1 m above the springboard surface",
                B: "1.5 m above the springboard surface",
                C: "2 m above the springboard surface",
                D: "2.5 m above the springboard surface"
              },
              answer: "D",
              explanation: "Section 702 — Zone 1 extends 2.5 m above the surface that can be occupied by people (e.g. springboard, diving platform). Above 2.5 m above that surface, the volume is outside zones."
            },
            {
              number: 16,
              prompt: "Section 706 (conducting locations with restricted movement) addresses installations where:",
              options: {
                A: "The location is large with no surrounding metalwork",
                B: "Operatives are surrounded by exposed conductive parts and movement is restricted, increasing shock risk (e.g. inside boilers, ductwork)",
                C: "Only swimming pools",
                D: "Only saunas"
              },
              answer: "B",
              explanation: "Section 706 covers conducting locations with restricted movement (CLRM) such as confined metallic enclosures (boilers, vessels). Tools must be SELV/PELV, separated systems, or RCD-protected with strict equipotential bonding."
            },
            {
              number: 17,
              prompt: "Section 708 (caravan parks / camping parks) requires socket outlets to be:",
              options: {
                A: "BS 1363",
                B: "BS EN 60309-2 industrial type",
                C: "Schuko (CEE 7/4)",
                D: "BS 4343"
              },
              answer: "B",
              explanation: "Section 708 — caravan park pitch supplies use BS EN 60309-2 industrial sockets (the round-pin commando type, typically blue 16 A 230 V single-phase). Each supply must have its own RCD."
            },
            {
              number: 18,
              prompt: "The maximum disconnection time for a 230 V final circuit not exceeding 32 A on a TN system is (Table 41.1):",
              options: {
                A: "0.1 s",
                B: "0.2 s",
                C: "0.4 s",
                D: "5 s"
              },
              answer: "C",
              explanation: "Table 41.1 — at U₀ = 230 V, TN final circuits supplying socket-outlets up to 63 A or fixed equipment up to 32 A must disconnect within 0.4 s."
            },
            {
              number: 19,
              prompt: "Reg 411.3.2.4 — distribution circuits (and final circuits exceeding 32 A) on a TN system have a maximum disconnection time of:",
              options: {
                A: "0.4 s",
                B: "1 s",
                C: "5 s",
                D: "60 s"
              },
              answer: "C",
              explanation: "Distribution circuits, and final circuits supplying fixed equipment exceeding 32 A on TN, may disconnect in up to 5 s. The shorter 0.4 s applies to socket-outlet circuits and fixed circuits ≤ 32 A."
            },
            {
              number: 20,
              prompt: "The mV/A/m value for a 2.5 mm² copper twin-and-earth cable at 70°C operating temperature (Table 4D2B) is approximately:",
              options: {
                A: "11 mV/A/m",
                B: "18 mV/A/m",
                C: "29 mV/A/m",
                D: "44 mV/A/m"
              },
              answer: "B",
              explanation: "Appendix 4 Table 4D2B — 2.5 mm² 70°C PVC twin-and-earth: mV/A/m ≈ 18. (1.5 mm² ≈ 29; 4 mm² ≈ 11; 1 mm² ≈ 44.) These values drive single-phase voltage-drop calcs."
            }
          ]
        },
        {
          id: "v2",
          questions: [
            {
              number: 1,
              prompt: "In a swimming pool location, Zone 0 is defined as:",
              options: {
                A: "The interior of the basin including pipework chases below the water",
                B: "The volume 2 m above the water level",
                C: "The plant room",
                D: "The wet floor immediately around the pool"
              },
              answer: "A",
              explanation: "Section 702 — Zone 0 is the volume of water in the basin (and above any submerged steps), including parts of the structure that contain water. Equipment installed there must be SELV at not exceeding 12 V a.c. and IPX8."
            },
            {
              number: 2,
              prompt: "Section 702 — equipment in Zone 1 of a swimming pool may be supplied at:",
              options: {
                A: "Up to 24 V a.c. via SELV only",
                B: "Up to 50 V a.c.",
                C: "230 V a.c. with no restriction",
                D: "Up to 12 V d.c. only"
              },
              answer: "B",
              explanation: "Section 702 — Zone 1: equipment may be SELV up to 50 V a.c. (or PELV equivalent) with the source outside the zones, or operate at LV via separated SELV-type circuits. Strict supply-source requirements apply."
            },
            {
              number: 3,
              prompt: "The maximum permitted Zs for a 32 A Type C MCB on a 230 V TN system at 0.4 s (Table 41.3) is approximately:",
              options: {
                A: "0.34 Ω",
                B: "0.68 Ω",
                C: "0.91 Ω",
                D: "1.37 Ω"
              },
              answer: "B",
              explanation: "Type C: Ia = 10 × In. For 32 A, Ia = 320 A. Zs = (0.95 × 230)/320 ≈ 0.68 Ω."
            },
            {
              number: 4,
              prompt: "The maximum permitted Zs for a 32 A Type D MCB on a 230 V TN system at 0.4 s (Table 41.3) is approximately:",
              options: {
                A: "0.34 Ω",
                B: "0.68 Ω",
                C: "0.91 Ω",
                D: "1.37 Ω"
              },
              answer: "A",
              explanation: "Type D: Ia = 20 × In = 640 A for a 32 A device. Zs = (0.95 × 230)/640 ≈ 0.34 Ω. Type D's higher tripping current means a lower Zs is required."
            },
            {
              number: 5,
              prompt: "Section 711 of BS 7671 covers:",
              options: {
                A: "Exhibitions, shows and stands",
                B: "Marinas",
                C: "Heating cables",
                D: "EV charging"
              },
              answer: "A",
              explanation: "Section 711 — exhibitions, shows and stands. Includes provisions for socket outlets to be RCD protected, supply to stands and the limit on circuit length to facilitate disconnection."
            },
            {
              number: 6,
              prompt: "Section 740 of BS 7671 deals with:",
              options: {
                A: "Heating cables",
                B: "Solar PV",
                C: "Fairgrounds, amusement parks and circuses",
                D: "Conducting locations with restricted movement"
              },
              answer: "C",
              explanation: "Section 740 — fairgrounds, amusement parks and circuses, including the temporary nature of installations and the elevated risk to public users."
            },
            {
              number: 7,
              prompt: "An EV charging point on a TN-C-S system, where open-PEN protection is not provided, requires:",
              options: {
                A: "A surge protective device only",
                B: "An additional earth electrode at the EV charging point so that the EV is referenced to its own electrode (not the DNO's PEN)",
                C: "A change to TN-S",
                D: "A type AC RCD"
              },
              answer: "B",
              explanation: "Reg 722.411.4.1 — to use PME on an EV installation, the options are: (i) open-PEN device, (ii) separating transformer, or (iii) a local earth electrode that meets the limits set in Section 722."
            },
            {
              number: 8,
              prompt: "An RCD providing additional protection on an EV charging point must, by default, be:",
              options: {
                A: "Type AC, 30 mA",
                B: "Type A, 30 mA, with separate detection of DC residual currents (RDC-DD), or Type B 30 mA",
                C: "Type B, 100 mA",
                D: "No RCD required"
              },
              answer: "B",
              explanation: "Reg 722.531.3.101 — the default is a Type B RCD ≤ 30 mA. Equivalent protection by Type A + RDC-DD (residual DC detecting device) is also permitted, since the EV charger may inject smooth DC fault currents."
            },
            {
              number: 9,
              prompt: "Section 712 of BS 7671 covers:",
              options: {
                A: "EV charging",
                B: "Solar PV",
                C: "Exhibitions",
                D: "Caravan and camping parks"
              },
              answer: "B",
              explanation: "Section 712 — solar photovoltaic (PV) supply systems. Covers DC-side cable selection, isolation, earthing of the array frame and the AC-side connection."
            },
            {
              number: 10,
              prompt: "Section 753 of BS 7671 covers:",
              options: {
                A: "Heating cables and embedded heating systems",
                B: "Saunas",
                C: "Marinas",
                D: "Exhibitions"
              },
              answer: "A",
              explanation: "Section 753 — heating cables and embedded heating systems (underfloor heating, snow-melting). Sets out cable type, ambient temperature limits and 30 mA RCD additional protection."
            },
            {
              number: 11,
              prompt: "Saunas are addressed in BS 7671 by:",
              options: {
                A: "Section 701",
                B: "Section 703",
                C: "Section 711",
                D: "Section 753"
              },
              answer: "B",
              explanation: "Section 703 covers locations containing sauna heaters. It defines temperature zones around the heater and the equipment ratings (high-temp insulation, no metallic conduit at high-temperature points)."
            },
            {
              number: 12,
              prompt: "The supplementary equipotential bonding regulation in a bath/shower room is omitted only when ALL FOUR of which conditions apply (Reg 701.415.2)?",
              options: {
                A: "All circuits are RCD protected; ADS times are met; main bonding is satisfactory; ALL extraneous-conductive-parts of the location are connected to the protective equipotential bonding",
                B: "Only when the bathroom is in a dwelling",
                C: "Only when no light is fitted",
                D: "Only on TT systems"
              },
              answer: "A",
              explanation: "Reg 701.415.2 — supplementary bonding may be omitted when (i) all circuits comply with ADS, (ii) all final circuits have 30 mA RCD additional protection, (iii) main bonding is satisfactory, (iv) all extraneous-conductive-parts are effectively connected to the PEB. All four must hold."
            },
            {
              number: 13,
              prompt: "Section 537.2 (devices for isolation) requires the device to provide:",
              options: {
                A: "A contact gap or equivalent insulation between separated parts",
                B: "An earth fault path",
                C: "A current limiter",
                D: "A surge path"
              },
              answer: "A",
              explanation: "Reg 537.2.2 — isolation requires the device to disconnect every live conductor with sufficient contact gap or equivalent insulation. Semiconductor devices cannot achieve this physical separation and so cannot serve as isolators."
            },
            {
              number: 14,
              prompt: "Disconnection time for a TT system final circuit at U₀ = 230 V (Table 41.1) is:",
              options: {
                A: "0.1 s",
                B: "0.2 s",
                C: "0.4 s",
                D: "5 s"
              },
              answer: "B",
              explanation: "Table 41.1 — TT final circuits at 230 V: 0.2 s. (TT distribution circuits: 1 s.) The shorter time on TT reflects the typically less reliable earth path."
            },
            {
              number: 15,
              prompt: "Marina (Section 709) socket outlets for berthing/pleasure craft must each be:",
              options: {
                A: "BS 1363",
                B: "BS EN 60309-2 with individual RCD/overcurrent protection",
                C: "BS 4343",
                D: "Schuko"
              },
              answer: "B",
              explanation: "Section 709 — each berth supply needs an industrial BS EN 60309-2 socket with its own overcurrent protection and 30 mA RCD. The seashore IP requirement (IPX6) also applies."
            },
            {
              number: 16,
              prompt: "Section 715 covers:",
              options: {
                A: "Extra-low voltage lighting installations (e.g. low-voltage track and rod systems)",
                B: "Heating cables",
                C: "Saunas",
                D: "Exhibitions"
              },
              answer: "A",
              explanation: "Section 715 deals with ELV lighting installations — the kind found as suspended track or wire systems, often with halogen or LED lamps. The cabling must withstand the mechanical forces of the suspension and a minimum 5 kg/m loading."
            },
            {
              number: 17,
              prompt: "Voltage drop on a 3-phase circuit is calculated using the mV/A/m tabulated value, the design current and:",
              options: {
                A: "1.732 (square root of 3) and the line length, divided by 1000",
                B: "Just the line length, divided by 1000",
                C: "Twice the line length, divided by 1000",
                D: "Half the line length, divided by 1000"
              },
              answer: "A",
              explanation: "For 3-phase circuits, V = (mV/A/m × Ib × L × √3)/1000 (the factor accounts for line-to-line nature). Single-phase uses (mV/A/m × Ib × 2 × L)/1000 for simple two-wire circuits if the table gives per-conductor mV/A/m, but the standard Appendix 4 mV/A/m tables already include the relevant factor for the circuit type stated at the head of the table."
            },
            {
              number: 18,
              prompt: "The minimum CSA for a circuit protective conductor of a 230 V ring final circuit using 2.5 mm² T&E is:",
              options: {
                A: "1.0 mm²",
                B: "1.5 mm²",
                C: "2.5 mm²",
                D: "4.0 mm²"
              },
              answer: "B",
              explanation: "Standard 2.5/1.5 T&E (6242Y) — the protective conductor in standard 2.5 mm² flat cable is 1.5 mm². The adiabatic check (or Table 54.7 for table sizing) confirms 1.5 mm² is acceptable for typical Zs and disconnection times in domestic ring circuits."
            },
            {
              number: 19,
              prompt: "For a 230 V single-phase circuit on a public LV supply, a 35 m run of 1.5 mm² 70°C PVC T&E carrying Ib = 6 A — voltage drop is approximately:",
              options: {
                A: "≈ 6.1 V (≈ 2.7%)",
                B: "≈ 4.1 V (≈ 1.8%)",
                C: "≈ 7.5 V (≈ 3.3%)",
                D: "≈ 12 V (≈ 5.2%)"
              },
              answer: "A",
              explanation: "1.5 mm² mV/A/m ≈ 29. V = (29 × 6 × 35)/1000 ≈ 6.09 V ≈ 2.65% of 230 V. This is comfortably under the 3% lighting limit on a public LV supply."
            },
            {
              number: 20,
              prompt: "Where can the 'standard circuit arrangement' for a 32 A ring final circuit using 2.5/1.5 T&E be looked up?",
              options: {
                A: "Appendix 15 of BS 7671 / Section 7 of the IET On-Site Guide",
                B: "Section 132",
                C: "Table 41.3",
                D: "Table 54.8"
              },
              answer: "A",
              explanation: "Appendix 15 of BS 7671 lists the standard final-circuit arrangements (radial and ring); the IET On-Site Guide Section 7 gives the full design tables (max permitted lengths, conductor sizes for given protective devices)."
            }
          ]
        },
        {
          id: "v3",
          questions: [
            {
              number: 1,
              prompt: "Section 722 of BS 7671 specifically addresses:",
              options: {
                A: "Photovoltaic supply systems",
                B: "Electric vehicle charging installations",
                C: "Heating cables",
                D: "Construction sites"
              },
              answer: "B",
              explanation: "Section 722 — EV charging. It sets the RCD type (Type B or Type A + RDC-DD), the open-PEN provisions for TN-C-S, the socket-outlet selection and the labelling requirements."
            },
            {
              number: 2,
              prompt: "On a TN-C-S supply feeding an EV charging point, an open-PEN protective device functions by:",
              options: {
                A: "Cutting off the supply when the PEN voltage rises (or a similar imbalance condition is detected) to prevent dangerous PEN-fault touch voltages on the EV body",
                B: "Adding additional surge protection",
                C: "Increasing the touch voltage limit",
                D: "Disabling the local earth electrode"
              },
              answer: "A",
              explanation: "An open-PEN device monitors L-N or L-PE voltage and disconnects when an open PEN condition is suspected — preventing the DNO's PEN voltage rise from appearing on the EV chassis."
            },
            {
              number: 3,
              prompt: "Section 704 of BS 7671 deals with installations on:",
              options: {
                A: "Construction and demolition sites",
                B: "Caravans",
                C: "Solar PV",
                D: "Heating cables"
              },
              answer: "A",
              explanation: "Section 704 — construction and demolition site installations (temporary supplies, robust assemblies to BS EN 61439-4, reduced low voltage 110 V centre-tapped earth for portable tools, etc.)."
            },
            {
              number: 4,
              prompt: "On a construction site, the recommended supply for portable hand tools is:",
              options: {
                A: "230 V single-phase, 30 mA RCD",
                B: "Reduced low voltage 110 V centre-tapped earth (55 V to earth)",
                C: "12 V d.c. only",
                D: "400 V three-phase"
              },
              answer: "B",
              explanation: "Section 704 — reduced low voltage (RLV) at 110 V CTE is the preferred supply for portable hand tools on construction sites because the line-to-earth voltage is just 55 V, reducing shock severity."
            },
            {
              number: 5,
              prompt: "The maximum Zs for a BS 88-3 (BS 1361) 32 A fuse on a 230 V TN system at 5 s for a distribution circuit (Table 41.4) is approximately:",
              options: {
                A: "1.04 Ω",
                B: "1.6 Ω",
                C: "2.51 Ω",
                D: "4.36 Ω"
              },
              answer: "B",
              explanation: "Table 41.4 — BS 88-3 32 A at 5 s ≈ 1.6 Ω. The corresponding GN3 'maximum measured' figure applies an 80% factor for warm conductors: 0.8 × 1.6 = 1.28 Ω."
            },
            {
              number: 6,
              prompt: "An installation referenced as IPX5 protects against:",
              options: {
                A: "Powerful jets of water from any direction",
                B: "Water jets (lower power) from any direction",
                C: "Temporary immersion",
                D: "Vertical drips only"
              },
              answer: "B",
              explanation: "IP5 (second character) — protection against water jets from any direction. Higher number IPX6 is 'powerful water jets'; IPX7 is temporary immersion; IPX2 is vertical drips at 15° tilt."
            },
            {
              number: 7,
              prompt: "Marinas in seashore locations require a minimum IP rating of:",
              options: {
                A: "IPX3",
                B: "IPX5",
                C: "IPX6",
                D: "IPX8"
              },
              answer: "C",
              explanation: "Section 709 — at the seashore where wave action and storm spray can occur, equipment must be at least IPX6 (powerful water jets / heavy seas). Inland marinas typically need IPX4 or IPX5 only."
            },
            {
              number: 8,
              prompt: "The first character of an IP rating, e.g. IP4X, is the protection level against:",
              options: {
                A: "Solid foreign object ingress (e.g. tools, fingers, wires)",
                B: "Liquid ingress",
                C: "Mechanical impact",
                D: "Corrosive atmospheres"
              },
              answer: "A",
              explanation: "IP code — first numeral describes solid object ingress (0 none, 2 finger > 12.5 mm, 4 wire ≥ 1 mm, 5 dust-protected, 6 dust-tight). The second numeral is water ingress."
            },
            {
              number: 9,
              prompt: "Reg 514.13.1 (Schematic for a complex installation) requires:",
              options: {
                A: "A diagram for any installation with more than two final circuits",
                B: "A diagram, chart or schedule available on site indicating the type and composition of circuits, the means used to identify devices, and the means of protection and isolation",
                C: "Always a wiring diagram pasted to the consumer unit",
                D: "Optional — only for commercial premises"
              },
              answer: "B",
              explanation: "Reg 514.9.1 (Distribution boards) and 514.10 require schedules/diagrams on site giving circuit composition, device types and the means of identification, protection and isolation."
            },
            {
              number: 10,
              prompt: "Section 705 addresses installations in:",
              options: {
                A: "Agricultural and horticultural premises",
                B: "Marinas",
                C: "Construction sites",
                D: "Heating cables"
              },
              answer: "A",
              explanation: "Section 705 — agricultural and horticultural premises. Includes provisions for elevated shock risk to livestock (lower touch voltage limits), corrosion-resistant equipment and supplementary equipotential bonding in animal housing."
            },
            {
              number: 11,
              prompt: "The basic disconnection time for a 230 V TN distribution circuit (Table 41.1) is:",
              options: {
                A: "0.2 s",
                B: "0.4 s",
                C: "1 s",
                D: "5 s"
              },
              answer: "D",
              explanation: "Distribution circuits, and TN final circuits supplying fixed equipment > 32 A, may have a 5 s disconnection time. The 0.4 s applies to TN final circuits ≤ 32 A at 230 V."
            },
            {
              number: 12,
              prompt: "When the line conductor is 35 mm², a same-material protective conductor sized by Table 54.7 must be at least:",
              options: {
                A: "10 mm²",
                B: "16 mm²",
                C: "25 mm²",
                D: "35 mm²"
              },
              answer: "B",
              explanation: "Table 54.7 — for line CSA between 16 mm² and 35 mm², the minimum CPC of the same material is 16 mm². For S > 35 mm², CPC ≥ S/2 (so 35 mm² → 16 mm²)."
            },
            {
              number: 13,
              prompt: "When the line conductor is 70 mm², a same-material CPC sized by Table 54.7 must be at least:",
              options: {
                A: "16 mm²",
                B: "25 mm²",
                C: "35 mm²",
                D: "50 mm²"
              },
              answer: "C",
              explanation: "S > 35 mm² → CPC ≥ S/2. 70/2 = 35 mm². Table 54.7 confirms 35 mm² for a 70 mm² line."
            },
            {
              number: 14,
              prompt: "The mV/A/m for a 6 mm² 70°C copper twin-and-earth cable is approximately (Table 4D2B):",
              options: {
                A: "11 mV/A/m",
                B: "7.3 mV/A/m",
                C: "4.4 mV/A/m",
                D: "3.0 mV/A/m"
              },
              answer: "B",
              explanation: "Appendix 4 Table 4D2B — 6 mm² 70°C twin-and-earth: ≈ 7.3 mV/A/m. (4 mm² ≈ 11; 10 mm² ≈ 4.4.)"
            },
            {
              number: 15,
              prompt: "Section 717 of BS 7671 covers:",
              options: {
                A: "Mobile or transportable units (e.g. catering trucks, broadcast vans)",
                B: "Saunas",
                C: "Solar PV",
                D: "Marinas"
              },
              answer: "A",
              explanation: "Section 717 — mobile or transportable units. Covers earthing, protective measures and labelling for units that may be plugged into different supplies in different locations."
            },
            {
              number: 16,
              prompt: "Reg 543.7 specifies special arrangements where:",
              options: {
                A: "Earth leakage current of equipment exceeds 10 mA (high protective conductor current)",
                B: "Cable temperature exceeds 90°C",
                C: "Voltage drop exceeds 5%",
                D: "PFC exceeds 16 kA"
              },
              answer: "A",
              explanation: "Reg 543.7 — earthing arrangements for equipment with high protective-conductor current (> 10 mA per piece, or > 10 mA per circuit). Requires duplicated CPC or equivalent measures so a broken CPC cannot present touch voltage on a normally energised PE."
            },
            {
              number: 17,
              prompt: "Section 537 — emergency switching devices must:",
              options: {
                A: "Be operable without keys or special tools, located within reach of the danger, and clearly labelled (typically red on yellow)",
                B: "Be hidden in a maintenance cupboard",
                C: "Disconnect only the line conductor",
                D: "Operate only when the supply is restored"
              },
              answer: "A",
              explanation: "Reg 537.4 — emergency switching devices must be readily accessible, clearly identified (typically red/yellow), and capable of cutting all live conductors as a single action."
            },
            {
              number: 18,
              prompt: "Section 132 addresses the general design requirements; key 132.x clauses include:",
              options: {
                A: "132.5 (rating, 132.6 conductors), 132.12 (accessibility), 132.16 (additions/alterations)",
                B: "132.10 (only)",
                C: "Only 132.1",
                D: "Only 132.16"
              },
              answer: "A",
              explanation: "Section 132 sets out the general design requirements, with sub-clauses ranging from 132.1 (general) to 132.16 (additions and alterations) — the numbered spine of the high-level design checks."
            },
            {
              number: 19,
              prompt: "The standard 13 A socket-outlet for general use is to:",
              options: {
                A: "BS 1363",
                B: "BS EN 60309-2",
                C: "BS 4343",
                D: "BS EN 50525"
              },
              answer: "A",
              explanation: "BS 1363 covers the standard 13 A 230 V rectangular-pin socket-outlet and plug used in UK domestic and commercial environments. BS EN 60309-2 covers industrial round-pin commando sockets."
            },
            {
              number: 20,
              prompt: "Section 411 — for a TT installation, the typical means of meeting the disconnection time of 0.2 s on a 230 V final circuit is:",
              options: {
                A: "An overcurrent device alone, relying on Zs being low enough",
                B: "A 30 mA (or otherwise rated) RCD providing fault protection, since RA is too high to rely on overcurrent operation",
                C: "An SPD",
                D: "A double-pole isolator"
              },
              answer: "B",
              explanation: "Reg 411.5 — TT installations almost always need an RCD to provide fault protection because earth electrode resistance RA can rarely be low enough to allow an MCB to clear within 0.2 s through the earth path."
            }
          ]
        },
        {
          id: "v4",
          questions: [
            {
              number: 1,
              prompt: "The minimum CSA of an earthing conductor (where buried in ground and protected against corrosion but not mechanical damage, copper) is (Table 54.1):",
              options: {
                A: "2.5 mm²",
                B: "16 mm²",
                C: "25 mm²",
                D: "50 mm²"
              },
              answer: "B",
              explanation: "Table 54.1 — buried Cu earthing conductor protected against corrosion but not mechanical damage: minimum 16 mm². If protected against neither, minimum 25 mm² Cu."
            },
            {
              number: 2,
              prompt: "Reg 522.6.202 requires that cables installed at less than 50 mm in walls or partitions, NOT mechanically protected and NOT in safe zones, must be:",
              options: {
                A: "Protected by a 30 mA RCD AND have an earthed metallic covering OR be enclosed in earthed metallic conduit",
                B: "Run in any trunking",
                C: "Buried at any depth",
                D: "Have no specific requirement"
              },
              answer: "A",
              explanation: "Reg 522.6.202 — outside safe zones, cables < 50 mm in walls need either an earthed metallic sheath/conduit, mechanical protection, or be of an appropriate construction PLUS the circuit have 30 mA RCD additional protection."
            },
            {
              number: 3,
              prompt: "Safe zones (Reg 522.6.201) for buried cables in walls extend:",
              options: {
                A: "Vertically upward from a connected accessory and horizontally from a connected accessory; 150 mm from the corner of an external wall and 150 mm from the ceiling",
                B: "Anywhere on the wall provided depth ≥ 50 mm",
                C: "Only along the floor level",
                D: "Only inside conduit"
              },
              answer: "A",
              explanation: "Reg 522.6.201 — safe zones run vertically and horizontally from accessories, plus a 150 mm zone at the corner with another wall and along the ceiling. Outside these, the cable must satisfy 522.6.202/203."
            },
            {
              number: 4,
              prompt: "An installation needs an SPD where the consequence of overvoltage could result in (Reg 443.4):",
              options: {
                A: "Serious injury or loss of human life, failure of safety service, significant financial or data loss, or significant cultural-heritage damage",
                B: "Only nuisance flicker",
                C: "Only mild equipment ageing",
                D: "Only minor inconvenience"
              },
              answer: "A",
              explanation: "Reg 443.4 lists the consequences that mandate SPD provision. Where none of those apply, Reg 443.5 allows a calculated risk-level assessment."
            },
            {
              number: 5,
              prompt: "The mV/A/m for a 1.0 mm² 70°C copper T&E (Table 4D2B) is approximately:",
              options: {
                A: "11 mV/A/m",
                B: "18 mV/A/m",
                C: "29 mV/A/m",
                D: "44 mV/A/m"
              },
              answer: "D",
              explanation: "Appendix 4 Table 4D2B — 1.0 mm² 70°C T&E: 44 mV/A/m. (1.5 mm² ≈ 29; 2.5 mm² ≈ 18; 4 mm² ≈ 11.)"
            },
            {
              number: 6,
              prompt: "An EV charge point installation may use a separating transformer to provide:",
              options: {
                A: "Galvanic separation between the DNO supply and the EV charger, removing the PEN-fault hazard on a TN-C-S supply",
                B: "Voltage step-up to 415 V",
                C: "Just SPD protection",
                D: "DC isolation only"
              },
              answer: "A",
              explanation: "Reg 722.411.4.1 option (ii) — a separating (isolating) transformer galvanically isolates the EV from the DNO neutral, so a broken PEN cannot impose mains voltage on the EV chassis."
            },
            {
              number: 7,
              prompt: "Section 706 (CLRM) applies to operatives working inside:",
              options: {
                A: "Conductive enclosures with restricted movement (e.g. boilers, vessels, ducting interiors)",
                B: "Open warehouses",
                C: "Domestic kitchens",
                D: "Construction site canteens"
              },
              answer: "A",
              explanation: "Section 706 — Conducting Locations with Restricted Movement: large amounts of metalwork around the operative AND restricted movement, dramatically increasing shock severity. Tools must be SELV/PELV, separated, or RCD'd with strict bonding."
            },
            {
              number: 8,
              prompt: "Reg 411.4 (TN systems) demands that the protective conductor and any extraneous conductive part are connected to:",
              options: {
                A: "The main earthing terminal of the installation",
                B: "Any convenient electrode",
                C: "The neutral at the consumer unit",
                D: "The line conductor"
              },
              answer: "A",
              explanation: "Reg 411.4.2 — exposed-conductive-parts must be connected via the CPC to the main earthing terminal of the installation, which in TN systems is connected to the source's earthed point."
            },
            {
              number: 9,
              prompt: "Reg 522.8.5 requires which precaution where cables enter equipment that may be subject to vibration?",
              options: {
                A: "Glands and supports designed to prevent damage at the entry, including strain relief",
                B: "PVC tape only",
                C: "No specific precaution",
                D: "Always rigid steel conduit"
              },
              answer: "A",
              explanation: "Reg 522.8 covers mechanical stress (522.8.5 specifically vibration). Cables and their supports, glands and accessories must be selected so vibration cannot damage the conductor or the connection."
            },
            {
              number: 10,
              prompt: "A 20 m run of 4 mm² T&E carrying 30 A on a private LV-source supply at 230 V — voltage drop is approximately:",
              options: {
                A: "≈ 6.6 V (≈ 2.9%)",
                B: "≈ 12.5 V (≈ 5.4%)",
                C: "≈ 4.1 V (≈ 1.8%)",
                D: "≈ 1 V (≈ 0.5%)"
              },
              answer: "A",
              explanation: "4 mm² ≈ 11 mV/A/m. V = (11 × 30 × 20)/1000 = 6.6 V ≈ 2.87% of 230 V. Within the 8% other-uses limit on a private LV source (and within 5% on a public supply too)."
            },
            {
              number: 11,
              prompt: "BS 7671 Table 41.5 covers:",
              options: {
                A: "Maximum Zs for RCDs at IΔn ratings of 30 mA, 100 mA, 300 mA and 500 mA at 230 V (TN)",
                B: "Cable current-carrying capacity",
                C: "Voltage drop tables",
                D: "Conductor identification"
              },
              answer: "A",
              explanation: "Table 41.5 — maximum Zs values for RCDs in TN systems. Zs ≤ 50/IΔn or U₀/IΔn for the touch voltage to remain within limits during disconnection."
            },
            {
              number: 12,
              prompt: "Section 41.5 / Reg 411.5 — for a TT system, the product RA × IΔn shall not exceed:",
              options: {
                A: "25 V",
                B: "50 V",
                C: "100 V",
                D: "230 V"
              },
              answer: "B",
              explanation: "Reg 411.5.3 — for the touch voltage to remain ≤ 50 V (the conventional touch voltage limit for AC), the product of earth electrode resistance RA and rated residual operating current IΔn must not exceed 50 V."
            },
            {
              number: 13,
              prompt: "A 30 mA RCD on a TT system therefore demands a maximum RA of:",
              options: {
                A: "100 Ω",
                B: "500 Ω",
                C: "1667 Ω",
                D: "200 Ω as a practical recommendation despite the theoretical 1667 Ω"
              },
              answer: "D",
              explanation: "Theoretically RA ≤ 50/0.030 = 1667 Ω, but seasonal moisture variation makes that figure unstable. BS 7671 Note recommends a practical maximum of 200 Ω; many designers aim for ≤ 100 Ω in service."
            },
            {
              number: 14,
              prompt: "The mV/A/m for a 25 mm² copper conductor at 70°C, single-phase (Table 4D1B) is approximately:",
              options: {
                A: "1.85 mV/A/m",
                B: "2.6 mV/A/m",
                C: "4.4 mV/A/m",
                D: "7.3 mV/A/m"
              },
              answer: "A",
              explanation: "Table 4D1B — 25 mm² 70°C single-core PVC: ≈ 1.85 mV/A/m for AC single-phase. Sub-mains and supplies in domestic premises commonly use 25 mm² Cu."
            },
            {
              number: 15,
              prompt: "Section 537.3 (devices for switching off for mechanical maintenance) requires the device to:",
              options: {
                A: "Disconnect the equipment from all live conductors as a single action; not be capable of unintended re-energisation; be positioned to permit safe access to the equipment",
                B: "Disconnect the line only",
                C: "Operate only when keyed",
                D: "Be hidden"
              },
              answer: "A",
              explanation: "Reg 537.3 — switching for mechanical maintenance disconnects the supply during non-electrical work. The device must isolate all live conductors, prevent inadvertent reconnection, and be readily accessible at the equipment."
            },
            {
              number: 16,
              prompt: "Section 411.3.1.1 requires every exposed-conductive-part of an installation to be:",
              options: {
                A: "Insulated from earth",
                B: "Connected to a protective conductor under the conditions of automatic disconnection of supply",
                C: "Floating",
                D: "Connected to neutral only"
              },
              answer: "B",
              explanation: "Reg 411.3.1.1 — exposed-conductive-parts must be connected to a protective conductor under the relevant earthing arrangement, satisfying ADS rules so a fault is cleared in the prescribed time."
            },
            {
              number: 17,
              prompt: "Reg 411.3.1.2 requires every extraneous-conductive-part to be:",
              options: {
                A: "Connected to the main earthing terminal by a main protective bonding conductor",
                B: "Connected to neutral",
                C: "Insulated from earth",
                D: "Connected to the line"
              },
              answer: "A",
              explanation: "Reg 411.3.1.2 — main protective bonding from extraneous-conductive-parts (incoming gas/water service pipes, structural metalwork) to the MET. Bonding equalises potentials during a fault."
            },
            {
              number: 18,
              prompt: "Reg 543.7.1.3 sets a recommended minimum CSA of CPC (Cu) where high protective conductor current is present in a final circuit:",
              options: {
                A: "1.5 mm²",
                B: "2.5 mm²",
                C: "4 mm²",
                D: "10 mm²"
              },
              answer: "D",
              explanation: "Reg 543.7.1.3 — where total leakage exceeds 10 mA, the CPC of any final circuit supplying that equipment is recommended to be at least 10 mm² Cu (or 4 mm² with two CPCs in parallel) to ensure robust earth integrity."
            },
            {
              number: 19,
              prompt: "Section 705 (agricultural/horticultural) reduces the conventional touch voltage limit (in animal housing) to:",
              options: {
                A: "12 V a.c.",
                B: "25 V a.c.",
                C: "50 V a.c.",
                D: "120 V a.c."
              },
              answer: "B",
              explanation: "Section 705 / Reg 705.411.1 — for livestock locations the conventional touch voltage limit is 25 V a.c. (or 60 V d.c.) instead of 50 V, reflecting animals' lower body resistance and increased shock severity."
            },
            {
              number: 20,
              prompt: "The minimum copper CSA of an earthing conductor in a domestic installation, where it is buried and unprotected against corrosion or mechanical damage, must be (Table 54.1):",
              options: {
                A: "2.5 mm²",
                B: "16 mm²",
                C: "25 mm²",
                D: "50 mm²"
              },
              answer: "C",
              explanation: "Table 54.1 — buried Cu, no protection against corrosion or mechanical damage: 25 mm² minimum. The 16 mm² minimum applies where corrosion-protected (e.g. PVC sheathed). Steel rises to 50 mm² in those conditions."
            }
          ]
        },
        {
          id: "v5",
          questions: [
            {
              number: 1,
              prompt: "Conventional touch voltage limit for AC under normal (non-livestock) conditions is:",
              options: {
                A: "25 V",
                B: "50 V",
                C: "120 V",
                D: "230 V"
              },
              answer: "B",
              explanation: "Conventional touch voltage limit UL = 50 V a.c. (or 120 V d.c.) for normal locations. Lower limits apply in special locations (25 V a.c. in livestock environments, 12 V SELV in pool basins, etc.)."
            },
            {
              number: 2,
              prompt: "Reg 411.4.5 — on TN, where the PFC is too low for the overcurrent device to disconnect within the time required, the typical solution is:",
              options: {
                A: "An RCD providing fault protection",
                B: "A larger overcurrent device",
                C: "Removal of the CPC",
                D: "Use of TN-C throughout"
              },
              answer: "A",
              explanation: "Reg 411.4.5 — if Zs is too high to give the disconnection time via the overcurrent device, an RCD is added to provide fault protection. This is typical on long sub-mains or where the supply impedance is high."
            },
            {
              number: 3,
              prompt: "The maximum disconnection time on a TT distribution circuit at 230 V (Table 41.1) is:",
              options: {
                A: "0.2 s",
                B: "0.4 s",
                C: "1 s",
                D: "5 s"
              },
              answer: "C",
              explanation: "Table 41.1 — TT at U₀ ≤ 230 V: distribution circuits 1 s, final circuits 0.2 s. Note these are shorter than the TN equivalents (5 s and 0.4 s respectively)."
            },
            {
              number: 4,
              prompt: "The mV/A/m for a 16 mm² 70°C copper conductor (single-phase, Table 4D1B) is approximately:",
              options: {
                A: "0.95 mV/A/m",
                B: "1.85 mV/A/m",
                C: "2.8 mV/A/m",
                D: "4.4 mV/A/m"
              },
              answer: "C",
              explanation: "Table 4D1B — 16 mm² ≈ 2.8 mV/A/m. (10 mm² ≈ 4.4 single phase, 25 mm² ≈ 1.85.)"
            },
            {
              number: 5,
              prompt: "Section 537.4 on emergency switching requires that the device for emergency switching:",
              options: {
                A: "Operates as directly as possible on the relevant supply conductors and is preferably hand-operated and capable of latching in the off state",
                B: "Is automatic only",
                C: "Is hidden inside equipment",
                D: "Operates only when supply is restored"
              },
              answer: "A",
              explanation: "Reg 537.4 — the emergency switching device must act directly on live conductors, be hand-operated, and prevent reclosing of the contacts unless deliberately reset, ensuring a single-action shutdown."
            },
            {
              number: 6,
              prompt: "The minimum PVC trunking required for fire-resistance is rated by:",
              options: {
                A: "BS 7671 Section 522 (mechanical and external influences)",
                B: "BS EN 50085 series",
                C: "BS 1363",
                D: "BS 6004"
              },
              answer: "B",
              explanation: "Cable trunking systems are specified to BS EN 50085 (general performance requirements), referenced via Section 521 of BS 7671. Selection considers temperature, IK and IP rating per the location's external influences."
            },
            {
              number: 7,
              prompt: "Reg 444 covers measures against electromagnetic disturbances. Which Section deals with cable segregation between Band I and Band II circuits?",
              options: {
                A: "Reg 528",
                B: "Reg 538",
                C: "Reg 543",
                D: "Reg 715"
              },
              answer: "A",
              explanation: "Reg 528 — proximity of wiring systems and other services. It addresses segregation of voltage bands and routing relative to gas, water and signal services."
            },
            {
              number: 8,
              prompt: "The maximum permitted external earth fault loop impedance (Ze) on a TN-C-S supply is, per ENA Engineering Recommendation P25, typically:",
              options: {
                A: "0.35 Ω (declared)",
                B: "0.8 Ω (declared)",
                C: "1.2 Ω (declared)",
                D: "Unlimited"
              },
              answer: "A",
              explanation: "ENA ER P25 — TN-C-S (PME) typical declared maximum Ze 0.35 Ω. TN-S typically 0.8 Ω. Designers should use the Ze measured on site or declared by the DNO when verifying fault loops."
            },
            {
              number: 9,
              prompt: "An installation supplied at 230 V with a 16 A Type B RCBO must have Zs not exceeding (Table 41.3):",
              options: {
                A: "1.37 Ω",
                B: "2.19 Ω",
                C: "2.87 Ω",
                D: "7.28 Ω"
              },
              answer: "C",
              explanation: "Type B 16 A: Ia = 5 × 16 = 80 A. Zs = (0.95 × 230)/80 ≈ 2.73 → 2.87 Ω as tabulated for 0.4 s. (Earlier non-Cmin tables show 2.87; current Cmin tables ≈ 2.73, but the rounded book figure is 2.87.)"
            },
            {
              number: 10,
              prompt: "A 25 m run of 6 mm² copper T&E carrying 30 A — voltage drop is approximately:",
              options: {
                A: "1.5 V (≈ 0.7%)",
                B: "5.5 V (≈ 2.4%)",
                C: "9.5 V (≈ 4.1%)",
                D: "15 V (≈ 6.5%)"
              },
              answer: "B",
              explanation: "6 mm² ≈ 7.3 mV/A/m. V = (7.3 × 30 × 25)/1000 ≈ 5.48 V ≈ 2.38% of 230 V. Within the 5% (other uses) public LV limit."
            },
            {
              number: 11,
              prompt: "Section 411 — for an IT system, indication of the first earth fault is required by:",
              options: {
                A: "An insulation monitoring device (IMD)",
                B: "A 30 mA RCD only",
                C: "A simple voltmeter on each line",
                D: "A surge protective device"
              },
              answer: "A",
              explanation: "Reg 411.6 — IT systems must have an IMD that detects the first insulation fault to earth. After the first fault, the system continues to operate; a second fault on a different line must trip protection within the relevant time."
            },
            {
              number: 12,
              prompt: "Section 712 of BS 7671 requires the DC-side cabling of a PV array to be:",
              options: {
                A: "Selected to handle 1.25 × Isc(STC) and the open-circuit voltage Voc(STC) at the lowest expected operating temperature",
                B: "Of any CSA the installer prefers",
                C: "Only single-core PVC",
                D: "Always 4 mm² regardless"
              },
              answer: "A",
              explanation: "Section 712 — DC-side cable is sized for 1.25 × Isc(STC) for current rating and for Voc(STC) at minimum operating temperature for voltage withstand. Cabling must be UV-resistant and double-insulated where exposed."
            },
            {
              number: 13,
              prompt: "Reg 514.10 (warning notice for non-standard colours) requires:",
              options: {
                A: "A notice at the origin and at all distribution boards stating that the cable colours don't comply with the current convention (relevant where pre-2004 sleeving is encountered)",
                B: "No notice required",
                C: "A purple notice with white text",
                D: "Only the original certificate"
              },
              answer: "A",
              explanation: "Reg 514.14 (formerly 514.13.1.5) — where conductor identification differs from the current convention (e.g. red/yellow/blue alongside new brown/black/grey at a board), a warning notice must be in place to inform working personnel."
            },
            {
              number: 14,
              prompt: "Reg 132.12 — accessibility — a typical failure example would be:",
              options: {
                A: "Mounting a consumer unit behind a built-in wardrobe with permanent fittings blocking access for inspection or replacement",
                B: "Fitting a CU at 1.5 m on a clear wall",
                C: "Specifying isolators near each accessory",
                D: "Providing a circuit chart at the board"
              },
              answer: "A",
              explanation: "Reg 132.12 — equipment must be accessible for inspection, testing, maintenance, and replacement. Building permanent fixtures over a CU defeats this."
            },
            {
              number: 15,
              prompt: "Section 421 (protection against fire caused by electrical equipment) — Reg 421.1.7 mandates AFDD installation on socket-outlet final circuits in:",
              options: {
                A: "Higher Risk Residential Buildings, HMOs, purpose-built student accommodation and care homes",
                B: "Industrial premises only",
                C: "Substations only",
                D: "Only outdoor installations"
              },
              answer: "A",
              explanation: "Reg 421.1.7 (A2:2022) — 'shall' applies to those four higher-risk premises. AFDDs are 'recommended' elsewhere."
            },
            {
              number: 16,
              prompt: "Reg 522.6.203 covers cables in metal-stud partitions less than 50 mm thick. The required minimum protection is:",
              options: {
                A: "Earthed metallic covering or 30 mA RCD with safe-zone routing or mechanical protection",
                B: "Voltage drop check only",
                C: "Cable glands at every entry",
                D: "Type C MCB"
              },
              answer: "A",
              explanation: "Reg 522.6.203 — cables in metal-stud partitions are treated as buried cables within walls. They must comply with 522.6.202 routes (safe zone + 30 mA RCD; or mechanical protection; or earthed metal covering)."
            },
            {
              number: 17,
              prompt: "An indoor stairwell luminaire on a final circuit in a dwelling now requires:",
              options: {
                A: "30 mA RCD additional protection per Reg 411.3.4",
                B: "AFDD in all dwellings (mandatory)",
                C: "Type B RCD",
                D: "No specific RCD requirement"
              },
              answer: "A",
              explanation: "Reg 411.3.4 — final circuits supplying luminaires in dwellings must have 30 mA RCD additional protection. AFDDs are mandatory only in HRRBs/HMOs/care homes/student accommodation, not all dwellings."
            },
            {
              number: 18,
              prompt: "On a 400 V three-phase TN system, the maximum disconnection time for a final circuit ≤ 32 A is:",
              options: {
                A: "0.1 s",
                B: "0.2 s",
                C: "0.4 s",
                D: "5 s"
              },
              answer: "B",
              explanation: "Table 41.1 — TN at U₀ > 230 V (e.g. 400 V): final circuits 0.2 s. The 0.4 s applies at 230 V and below."
            },
            {
              number: 19,
              prompt: "Section 537.5 (functional switching) covers:",
              options: {
                A: "Devices intended to control circuits in normal operation, not necessarily disconnecting all live conductors",
                B: "Only emergency stop devices",
                C: "Only isolators",
                D: "Only fuses"
              },
              answer: "A",
              explanation: "Reg 537.5 — functional switching controls circuits in normal use (light switches, dimmers, contactors). It does not have to break every live conductor and is not for safety-critical isolation."
            },
            {
              number: 20,
              prompt: "An EV charge point on a TN-C-S supply that uses a local earth electrode option must satisfy:",
              options: {
                A: "RA × IΔn ≤ 50 V and the electrode being independent of the DNO neutral so the EV is not exposed to a PEN-fault rise",
                B: "Always RA ≤ 0.5 Ω",
                C: "No specific limit",
                D: "Only a 100 mA RCD requirement"
              },
              answer: "A",
              explanation: "Section 722 / Reg 722.411.4.1 option (iii) — local earth electrode at the EV. RA × IΔn ≤ 50 V; the EV's earth must not be referenced to the DNO PEN, so a broken PEN cannot raise the EV chassis to mains potential."
            }
          ]
        }
      ]
    },
    {
      id: "section-3",
      title: "Section 3 — Recent Amendments (A2:2022 / A3:2024)",
      variants: [
        {
          id: "v1",
          questions: [
            {
              number: 1,
              prompt: "Reg 421.1.7 (A2:2022) requires Arc Fault Detection Devices for single-phase AC final circuits supplying socket outlets ≤ 32 A in:",
              options: {
                A: "All commercial premises only",
                B: "Higher Risk Residential Buildings, HMOs, purpose-built student accommodation and care homes",
                C: "Industrial substations",
                D: "Outdoor sockets only"
              },
              answer: "B",
              explanation: "Reg 421.1.7 (A2) — AFDDs are mandatory ('shall') in those four higher-risk premises and 'recommended' elsewhere. The targeted premises have higher fire risk, longer evacuation times, or vulnerable residents."
            },
            {
              number: 2,
              prompt: "An AFDD must be installed at:",
              options: {
                A: "The origin of the installation",
                B: "The origin of the final circuit being protected",
                C: "Each socket outlet on the circuit",
                D: "The downstream end of the circuit"
              },
              answer: "B",
              explanation: "Reg 421.1.7 / 532.6 — AFDDs go at the origin of the final circuit so they protect the entire downstream cable and accessories. Installing one at the origin of the installation gives no per-circuit selectivity."
            },
            {
              number: 3,
              prompt: "Surge Protective Devices are addressed in BS 7671 by:",
              options: {
                A: "Section 411 only",
                B: "Section 443 (need) and Section 534 (selection and erection)",
                C: "Section 522",
                D: "Section 712"
              },
              answer: "B",
              explanation: "Section 443 sets when SPDs are required (consequence categories or risk assessment per Appendix 16). Section 534 covers selection and erection — Type 1/2/3 device choice, coordination, fault current ratings, location."
            },
            {
              number: 4,
              prompt: "A2:2022 changed the SPD requirement so that, for most installations, an SPD is:",
              options: {
                A: "Always optional",
                B: "Required unless a documented risk assessment justifies omitting it",
                C: "Only required at substations",
                D: "Only required for industrial customers"
              },
              answer: "B",
              explanation: "A2:2022 reframed Section 443 — an SPD is the default, and the calculated risk-level (CRL) approach in Appendix 16 may justify omission. For dwellings the CRL almost always indicates SPDs are required."
            },
            {
              number: 5,
              prompt: "A Type 1 SPD is designed for installation:",
              options: {
                A: "At the origin of the installation, where direct or partial direct lightning strike is possible (10/350 µs waveform)",
                B: "At the equipment terminals only",
                C: "Inside an outlet only",
                D: "On the DC side of a PV array"
              },
              answer: "A",
              explanation: "Type 1 SPDs handle the 10/350 µs lightning current waveform — installed at the origin where direct or partial direct lightning strike is anticipated. Type 2 SPDs handle 8/20 µs induced surges. Type 3 sits at sensitive equipment."
            },
            {
              number: 6,
              prompt: "Section 826 of BS 7671 (introduced by A2:2022) covers:",
              options: {
                A: "Solar PV only",
                B: "Heating cables",
                C: "Prosumer Electrical Installations (dwellings that consume and produce electricity — PV + battery + EV combinations)",
                D: "Construction sites"
              },
              answer: "C",
              explanation: "Section 826 — Prosumer Electrical Installation. Introduced in A2:2022 to cover dwellings/installations that both consume and generate (PV plus battery storage plus EV charging) and the operating modes (grid-tied, island)."
            },
            {
              number: 7,
              prompt: "Section 722 (EV charging) requires the residual-current device on each charge point to be:",
              options: {
                A: "Type AC 30 mA",
                B: "Type B 30 mA, or Type A 30 mA combined with an RDC-DD that disconnects on detection of smooth DC residual current ≥ 6 mA",
                C: "Time delayed S-type only",
                D: "100 mA general use"
              },
              answer: "B",
              explanation: "Section 722.531.3.101 — default Type B 30 mA. Equivalent: Type A 30 mA + RDC-DD detecting DC residual currents at ≥ 6 mA. EV chargers can inject smooth DC fault currents that a Type A alone cannot detect."
            },
            {
              number: 8,
              prompt: "On a TN-C-S installation, the open-PEN protection options for an EV charge point under Reg 722.411.4.1 are:",
              options: {
                A: "An open-PEN protective device, a separating transformer, or a local earth electrode that satisfies the criteria of Section 722",
                B: "Only an SPD",
                C: "Only AFDD",
                D: "Only changing to TN-S"
              },
              answer: "A",
              explanation: "Section 722 — three permitted methods to address PEN-fault hazard: (i) open-PEN protective device, (ii) separating transformer, (iii) local earth electrode. The aim is to ensure a broken DNO PEN cannot impose mains voltage on the EV body."
            },
            {
              number: 9,
              prompt: "The general default RCD type for new installations is now:",
              options: {
                A: "Type AC",
                B: "Type A",
                C: "Type B",
                D: "Type S"
              },
              answer: "B",
              explanation: "A2:2022 made Type A the minimum default for general use because modern equipment (LED drivers, switched-mode supplies, washing machine motor drives) generates pulsating DC residual currents that Type AC cannot detect."
            },
            {
              number: 10,
              prompt: "AFDD compliance is tested to:",
              options: {
                A: "BS EN 60898",
                B: "BS EN 61009",
                C: "BS EN 62606",
                D: "BS EN 60947-3"
              },
              answer: "C",
              explanation: "BS EN 62606 is the AFDD product standard. BS EN 60898 covers MCBs; 61009 covers RCBOs; 60947-3 covers switches/disconnectors/fuse-combinations for industrial use."
            },
            {
              number: 11,
              prompt: "Section 722 — the dedicated EV connector for 'mode 3' charging is to:",
              options: {
                A: "BS 1363",
                B: "BS EN 62196 (e.g. Type 2 / Mennekes)",
                C: "BS EN 60309-2",
                D: "BS 4343"
              },
              answer: "B",
              explanation: "BS EN 62196 covers EV connectors — Type 1 (J1772), Type 2 (Mennekes) and combined CCS DC connectors. UK Mode 3 charge points use Type 2."
            },
            {
              number: 12,
              prompt: "An installation in a dwelling that includes battery energy storage falls within:",
              options: {
                A: "Section 712 only",
                B: "Section 826 (prosumer) and the relevant 712 / 722 sections as applicable",
                C: "Section 753",
                D: "No section in particular"
              },
              answer: "B",
              explanation: "Section 826 was introduced for dwellings that both consume and produce electricity. Where PV is present, Section 712 still applies; where EV is present, 722 applies. 826 is the umbrella for the prosumer arrangement."
            },
            {
              number: 13,
              prompt: "A3:2024 introduced a notice on the consumer unit confirming the recommended date of next inspection. The minimum lettering size suggested is:",
              options: {
                A: "10 pt",
                B: "12 pt",
                C: "14 pt",
                D: "18 pt"
              },
              answer: "C",
              explanation: "A3:2024 / Reg 514.12 — the periodic inspection notice should use lettering of at least 14 pt so that it remains legible without opening the cupboard or removing access covers."
            },
            {
              number: 14,
              prompt: "Reg 411.3.4 requires 30 mA RCD additional protection on AC final circuits supplying:",
              options: {
                A: "Luminaires within domestic (household) premises",
                B: "Only outdoor lighting",
                C: "Only lighting in HMOs",
                D: "Only emergency lighting circuits"
              },
              answer: "A",
              explanation: "Reg 411.3.4 — additional protection by 30 mA RCD applies to AC final circuits supplying luminaires in dwellings. The risk-based reasoning is that lampholders and luminaires are touched by ordinary persons changing lamps."
            },
            {
              number: 15,
              prompt: "Reg 421.1.6 — fixed luminaires in dwellings shall be provided with which marking on the equipment?",
              options: {
                A: "Marking giving information to support replacement of the lamp without unsafe practices, plus minimum protection ratings",
                B: "Two earth symbols",
                C: "An RCD warning",
                D: "An EICR sticker"
              },
              answer: "A",
              explanation: "Reg 421 — manufacturer information must support safe lamp replacement (e.g. type, rating, ingress protection). The exam emphasis is recognising the regulation's role in fire/safety from luminaires."
            },
            {
              number: 16,
              prompt: "An installation supplied via a private LV transformer must respect maximum voltage drops of:",
              options: {
                A: "3% lighting / 5% other (same as public LV)",
                B: "6% lighting / 8% other",
                C: "10% lighting / 12% other",
                D: "1% lighting / 2% other"
              },
              answer: "B",
              explanation: "Appendix 4 Note (1) — installations from a private LV source (own transformer or generator) accept higher voltage drops, 6%/8%, since the source can be brought up by tap settings closer to its load."
            },
            {
              number: 17,
              prompt: "An SPD coordinated as Type 2 will not, on its own, cope with:",
              options: {
                A: "Direct or partial direct lightning strike (10/350 µs)",
                B: "8/20 µs induced surges",
                C: "Normal switching transients",
                D: "Indirect strikes from nearby cables"
              },
              answer: "A",
              explanation: "Type 2 SPDs handle the 8/20 µs induced waveform. Where direct or partial direct lightning strike is possible (LPS present, overhead line, or external risk indicates), a Type 1 (or Type 1+2 combined) SPD is needed at the origin."
            },
            {
              number: 18,
              prompt: "BS 7671 Section 722 demands a charge-point socket be assessed for use:",
              options: {
                A: "Outdoors and exposed to weather (with appropriate IP and impact ratings)",
                B: "Indoors only",
                C: "Only with the door closed",
                D: "No assessment required"
              },
              answer: "A",
              explanation: "Section 722 — selection of EV charge equipment must consider its location, IP and IK ratings, exposure to weather, and the risk of vehicle impact. Equipment outdoors typically requires IP44 minimum and IK10 in unprotected positions."
            },
            {
              number: 19,
              prompt: "Reg 826 (prosumer) includes operating mode definitions for installations that:",
              options: {
                A: "Operate in parallel with the public supply (grid-tied) or independently (island mode)",
                B: "Operate in DC only",
                C: "Operate at extra-high voltage",
                D: "Operate without earthing"
              },
              answer: "A",
              explanation: "Section 826 / 551 — modes include grid-tied (parallel with the network), island (off-grid), and switched changeover. Each mode demands specific protection — including neutral switching to ensure the local source does not back-feed via the DNO neutral."
            },
            {
              number: 20,
              prompt: "Surge Protective Devices in domestic single-phase installations are typically configured as:",
              options: {
                A: "L-N + L-PE + N-PE varistors (or equivalent), at the origin of the installation",
                B: "Single L-only varistor only",
                C: "DC-side only",
                D: "Always 3-phase only"
              },
              answer: "A",
              explanation: "Section 534 / Type 2 SPD — common configuration at origin of single-phase installation: L-N, L-PE and N-PE protective paths. The aim is to clamp surges between live-to-neutral, line-to-earth and neutral-to-earth equally."
            }
          ]
        },
        {
          id: "v2",
          questions: [
            {
              number: 1,
              prompt: "An AFDD detects:",
              options: {
                A: "Only earth fault currents",
                B: "Series and parallel arcing faults that an MCB or RCD would not detect, by analysing the current waveform for the high-frequency signatures of arcing",
                C: "Only short circuits",
                D: "Only overload"
              },
              answer: "B",
              explanation: "AFDDs analyse the line current waveform for the broadband signatures of arcing — the high-frequency content that arises from a damaged conductor or loose terminal. Standard MCBs and RCDs do not respond to series arcs; AFDDs are designed to do so."
            },
            {
              number: 2,
              prompt: "An RCD type that responds to AC sinusoidal residual current AND pulsating DC residual current AND smooth DC residual current is:",
              options: {
                A: "Type AC",
                B: "Type A",
                C: "Type F",
                D: "Type B"
              },
              answer: "D",
              explanation: "Type B detects all of: AC, pulsating DC, multi-frequency composite, and smooth DC residuals. Type AC sees only sinusoidal AC; Type A adds pulsating DC; Type F adds multi-frequency composite."
            },
            {
              number: 3,
              prompt: "Section 712 (PV) — DC isolators must be:",
              options: {
                A: "Rated for the DC string voltage and current and capable of breaking under load (no AC isolators)",
                B: "Standard AC isolators",
                C: "Switches without breaking capacity",
                D: "30 mA RCDs"
              },
              answer: "A",
              explanation: "Section 712 — DC isolators must match the worst-case DC voltage and current of the array, and be specifically rated for DC switching. AC isolators are not interchangeable since they rely on natural AC zero crossings to extinguish the arc."
            },
            {
              number: 4,
              prompt: "An SPD's rated impulse discharge current (Iimp) characterises a:",
              options: {
                A: "Type 1 device",
                B: "Type 2 device",
                C: "Type 3 device",
                D: "Type AC RCD"
              },
              answer: "A",
              explanation: "Type 1 SPDs are characterised by Iimp (impulse discharge current, 10/350 µs waveform). Type 2 SPDs are characterised by In (nominal discharge current, 8/20 µs)."
            },
            {
              number: 5,
              prompt: "An SPD's protection level Up should not exceed:",
              options: {
                A: "The supply nominal voltage",
                B: "The withstand voltage of the protected equipment, with a margin (Reg 534.4.4)",
                C: "230 V always",
                D: "Half the system voltage"
              },
              answer: "B",
              explanation: "Reg 534.4.4 — the SPD's voltage protection level Up must be coordinated with the rated impulse withstand of the protected equipment (Uw), typically Up < Uw with adequate margin to allow for cable voltage rise (the 'hung in' effect)."
            },
            {
              number: 6,
              prompt: "An EV charge point that operates without an open-PEN device or separating transformer must:",
              options: {
                A: "Use a local earth electrode that satisfies Reg 722.411.4.1 limits and is independent of the DNO PEN",
                B: "Operate at 24 V SELV",
                C: "Be located indoors only",
                D: "Be on a 100 mA RCD"
              },
              answer: "A",
              explanation: "Reg 722.411.4.1 — without an open-PEN device or separating transformer, the only remaining permitted route is a local earth electrode that satisfies the section's resistance and touch-voltage criteria so the EV is not dependent on the DNO PEN."
            },
            {
              number: 7,
              prompt: "Section 826 — operating modes for prosumer installations explicitly include:",
              options: {
                A: "Synchronous parallel with the supply",
                B: "Standby (transferred) mode",
                C: "Island (separate from the supply)",
                D: "All of synchronous parallel, switched stand-by and island modes"
              },
              answer: "D",
              explanation: "Section 826 / 551 — operating modes for installations with alternative sources include continuous parallel, switched changeover (transferred), and island mode. Each requires its own protection arrangement."
            },
            {
              number: 8,
              prompt: "A2:2022 reduced reliance on Type AC RCDs for new installations because:",
              options: {
                A: "They cannot detect pulsating DC residual currents that modern equipment generates",
                B: "They are too expensive",
                C: "They draw too much current",
                D: "They are physically larger"
              },
              answer: "A",
              explanation: "Modern loads (LED drivers, EV chargers, SMPS in appliances) generate pulsating DC residual currents on a fault. A Type AC can be 'blinded' by the DC component and fail to trip; Type A or above is required."
            },
            {
              number: 9,
              prompt: "Reg 421.1.7 specifies AFDD requirements take priority where:",
              options: {
                A: "Industrial premises with continuous monitoring",
                B: "HRRBs, HMOs, purpose-built student accommodation, and care homes",
                C: "Outdoor lighting only",
                D: "Construction sites"
              },
              answer: "B",
              explanation: "Reg 421.1.7 — AFDDs 'shall' be provided in those four categories. The categories are characterised by elevated fire risk, the presence of vulnerable persons, or limited evacuation routes."
            },
            {
              number: 10,
              prompt: "An AFDD must function with which other protection in the same circuit?",
              options: {
                A: "It is provided in addition to overcurrent protection (and any required RCD), not in place of it",
                B: "It replaces the MCB",
                C: "It replaces the RCD",
                D: "Replaces all"
              },
              answer: "A",
              explanation: "AFDDs sit in series with the relevant overcurrent and (where required) RCD protection. Many products combine MCB + RCD + AFDD into a single device, but the protection functions are layered."
            },
            {
              number: 11,
              prompt: "Reg 514.15.1 (warning notice for alternative supplies) is necessary on installations with:",
              options: {
                A: "PV inverter, battery storage or generator that may energise the installation independently of the public supply",
                B: "Only PV systems with no battery",
                C: "EV chargers only",
                D: "AFDDs only"
              },
              answer: "A",
              explanation: "Reg 514.15 — wherever the installation may be energised by a source other than the public LV supply, a warning notice is required at every point of isolation so anyone working downstream is alerted to the alternative source."
            },
            {
              number: 12,
              prompt: "Reg 411.3.4 added a 30 mA RCD requirement on AC final circuits supplying:",
              options: {
                A: "Luminaires within domestic (household) premises",
                B: "Cookers in any premises",
                C: "Air-conditioning systems",
                D: "Boiler controls"
              },
              answer: "A",
              explanation: "Reg 411.3.4 — final circuits supplying luminaires in dwellings now require 30 mA RCD additional protection. The driver is the everyday handling of luminaires by ordinary persons (lamp replacement)."
            },
            {
              number: 13,
              prompt: "Reg 826 (prosumer installation) — battery storage installations must satisfy:",
              options: {
                A: "Specific isolation requirements for DC and AC sides plus protection against unintended re-energisation by the battery",
                B: "Only an EICR",
                C: "No specific protection",
                D: "Only an MCB"
              },
              answer: "A",
              explanation: "Section 826 / 551 — battery installations need DC isolation, AC isolation, and labelling so that anyone isolating the AC supply knows the DC side may still energise circuits if not also isolated."
            },
            {
              number: 14,
              prompt: "Section 443.4 and Appendix 16 use a 'calculated risk level' approach where the risk values are influenced by:",
              options: {
                A: "Length of overhead line, density of nearby lightning strikes, and consequence factors of failure",
                B: "Cable colour only",
                C: "Voltage drop only",
                D: "RCD type"
              },
              answer: "A",
              explanation: "Appendix 16 — CRL approach considers the lightning ground flash density (Ng), the length and exposure of the supply, the population density of structures, and the consequence factor for the protected installation."
            },
            {
              number: 15,
              prompt: "AFDDs are tested for nuisance tripping resistance against:",
              options: {
                A: "Common harmonic and switching waveforms typical of household and small-commercial loads",
                B: "Lightning impulses only",
                C: "Smooth DC only",
                D: "Voltage flicker only"
              },
              answer: "A",
              explanation: "BS EN 62606 includes test waveforms representing typical residential loads (motors, lamps, switching transients) to ensure the AFDD does not trip nuisance-fashion."
            },
            {
              number: 16,
              prompt: "A typical Type 2 SPD installed at the origin of a domestic installation must be able to handle a nominal discharge current In of at least:",
              options: {
                A: "0.5 kA (8/20 µs)",
                B: "5 kA (8/20 µs)",
                C: "50 kA (10/350 µs)",
                D: "5 mA"
              },
              answer: "B",
              explanation: "Reg 534.4.7 / Table 534.5 — typical In rating of a Type 2 SPD at the origin is 5 kA (8/20 µs) per mode. The total impulse rating depends on the configuration and the structure-protection level."
            },
            {
              number: 17,
              prompt: "Section 722 — the EV-charging socket-outlet for tethered charging at a dwelling is typically rated:",
              options: {
                A: "32 A single-phase",
                B: "13 A BS 1363",
                C: "16 A 3-phase",
                D: "100 A"
              },
              answer: "A",
              explanation: "Most domestic EV chargers (Mode 3, Type 2) are rated 32 A single-phase (7 kW) or 16/32 A 3-phase (11/22 kW). The dedicated final circuit, RCD type and earthing arrangements follow Section 722."
            },
            {
              number: 18,
              prompt: "Selection of EV equipment must include:",
              options: {
                A: "RCD type, mounting location, IP/IK rating, and means of isolation appropriate to the location",
                B: "Only the connector colour",
                C: "Only the cable length",
                D: "Only the price"
              },
              answer: "A",
              explanation: "Section 722 / Section 132 design assessment — EV equipment selection considers RCD type, IP/IK against weather and impact, mounting location, and isolation device that operates on all live conductors during maintenance."
            },
            {
              number: 19,
              prompt: "An SPD coordinated upstream of sensitive equipment must:",
              options: {
                A: "Have a Up suitable for the sensitive equipment's withstand voltage Uw, with the cable distance accounted for",
                B: "Always be at the equipment terminals",
                C: "Always be a Type 1 device",
                D: "Always be a Type 3 device"
              },
              answer: "A",
              explanation: "Reg 534 — SPD coordination considers Up vs. Uw and the cable run between SPD and load (a long run can add inductive voltage rise). For very sensitive equipment, a Type 3 device near the load is added in front of the larger upstream device."
            },
            {
              number: 20,
              prompt: "A2:2022 / A3:2024 — labelling and signage updates include:",
              options: {
                A: "Suggested font size of 14 pt minimum on the periodic inspection notice for legibility",
                B: "All notices in red ink",
                C: "All notices in font size 30 pt",
                D: "No labelling required"
              },
              answer: "A",
              explanation: "A3 specifies a minimum lettering size for the periodic inspection notice (≥ 14 pt) so it is readable from a typical distance without opening the cupboard."
            }
          ]
        },
        {
          id: "v3",
          questions: [
            {
              number: 1,
              prompt: "Section 826 (prosumer) covers the operation of an installation that:",
              options: {
                A: "Both consumes electricity from the public supply and produces electricity locally (PV, battery, generator)",
                B: "Only consumes",
                C: "Only produces",
                D: "Operates above 1000 V"
              },
              answer: "A",
              explanation: "PEI = Prosumer Electrical Installation. The installation has a generation source (PV / battery / micro-CHP) capable of either supplying loads independently or paralleling with the public network."
            },
            {
              number: 2,
              prompt: "When operating in island mode, a prosumer installation must disconnect the DNO neutral so that:",
              options: {
                A: "Local generation does not back-feed onto the public network through the neutral path, which would risk the network and the local installation",
                B: "Voltage rises",
                C: "RCDs trip more often",
                D: "AFDDs activate"
              },
              answer: "A",
              explanation: "Reg 551 / 826 — in island mode, all live conductors including the neutral are disconnected from the DNO so the local source does not parallel onto the public network through the neutral. A neutral switching device is used."
            },
            {
              number: 3,
              prompt: "A 6 mA threshold for residual DC detection on an EV charging circuit (Type A + RDC-DD or Type B):",
              options: {
                A: "Reflects the level above which DC residual current can blind a Type A RCD's core, requiring DC-aware detection",
                B: "Is arbitrary",
                C: "Matches the harmonic level",
                D: "Reflects mains tolerance"
              },
              answer: "A",
              explanation: "Section 722 — DC residual currents above ~6 mA can saturate the magnetic core of a Type A RCD, suppressing AC sensitivity. The RDC-DD intervenes when DC residuals reach that level, ensuring the supply is disconnected before AC detection is degraded."
            },
            {
              number: 4,
              prompt: "Reg 514.16 — periodic inspection notices must include:",
              options: {
                A: "A statement of recommended next inspection date and contact details for the responsible person",
                B: "An RCD test reset",
                C: "Just the manufacturer name",
                D: "Cable colour code"
              },
              answer: "A",
              explanation: "Reg 514.12 / 514.16 — the notice gives the date of last inspection, recommended next inspection, and identifies the responsible person/contractor where applicable."
            },
            {
              number: 5,
              prompt: "Reg 421.1.7 — AFDDs are 'recommended' (not 'shall') for:",
              options: {
                A: "Standard dwellings (final circuits with sockets ≤ 32 A) outside the four mandatory categories",
                B: "Industrial premises only",
                C: "Outdoor sockets",
                D: "DNO networks"
              },
              answer: "A",
              explanation: "In standard dwellings, A2:2022 made AFDDs 'recommended' rather than 'shall'. The strict 'shall' applies in HRRBs, HMOs, purpose-built student accommodation and care homes."
            },
            {
              number: 6,
              prompt: "A Type 1+2 combination SPD is suitable for installation:",
              options: {
                A: "At the origin of an installation in a building with an LPS or where direct lightning is possible, providing both 10/350 µs and 8/20 µs protection in one unit",
                B: "Only inside a luminaire",
                C: "Only on the DC side of a PV array",
                D: "Only at the equipment terminals"
              },
              answer: "A",
              explanation: "Type 1+2 combined SPDs are tested to both Iimp (10/350 µs, Type 1) and In (8/20 µs, Type 2). Suitable at the origin where there is risk of partial direct lightning current — common in buildings with an LPS."
            },
            {
              number: 7,
              prompt: "Reg 826 / Section 712 — DC-side cabling for a PV installation is typically rated:",
              options: {
                A: "1.25 × Isc(STC) for current and Voc(STC) at minimum operating temperature for voltage withstand",
                B: "Isc only",
                C: "Voc only",
                D: "Twice the AC rating"
              },
              answer: "A",
              explanation: "Section 712 — sizing methodology accounts for the current rating margin (1.25 × Isc) and the voltage rating uplift at low ambient temperatures (Voc rises as temperature falls)."
            },
            {
              number: 8,
              prompt: "Reg 715 — supply for ELV lighting must come from:",
              options: {
                A: "A SELV/PELV source compliant with the relevant standard, with the source positioned outside the ELV zone where applicable",
                B: "A 230 V circuit only",
                C: "A 400 V supply",
                D: "Always batteries"
              },
              answer: "A",
              explanation: "Section 715 — ELV lighting must be SELV (or PELV) per Reg 414, with the transformer/PSU compliant with BS EN 61558-2-6 (lighting transformer) and protected at LV input."
            },
            {
              number: 9,
              prompt: "AFDD-protected circuits in a dwelling outside the four 'shall' categories are:",
              options: {
                A: "Recommended (a designer choice driven by risk assessment)",
                B: "Mandatory",
                C: "Banned",
                D: "Always type B"
              },
              answer: "A",
              explanation: "Reg 421.1.7 — AFDDs are recommended for circuits in dwellings outside HRRBs/HMOs/care homes/student accommodation. Designers may choose to fit them based on the property's fire risk and consequence assessment."
            },
            {
              number: 10,
              prompt: "Section 712 — PV array DC isolation must be:",
              options: {
                A: "Provided so the array can be isolated for maintenance, with appropriate DC-rated devices and labelling",
                B: "Only an AC isolator",
                C: "Only a fuse",
                D: "Not required"
              },
              answer: "A",
              explanation: "Section 712 — DC isolation at the array (or as close as practicable) and at the inverter input is required for safe maintenance. Devices must be rated for the array's DC voltage and current and clearly labelled."
            },
            {
              number: 11,
              prompt: "Reg 826 / Section 712 — A PV system feeding the public network must comply with the DNO connection requirements of:",
              options: {
                A: "G98 (single, ≤ 16 A per phase) or G99 (larger) as appropriate",
                B: "G83 only (now superseded)",
                C: "BS 7671 only",
                D: "BS 1363 only"
              },
              answer: "A",
              explanation: "ENA Engineering Recommendations G98/G99 govern grid connection of small/large embedded generation in GB. G98 = small inverters ≤ 16 A/phase; G99 = larger systems requiring DNO assessment."
            },
            {
              number: 12,
              prompt: "Section 826 — a battery installation that supplies safety services must additionally comply with:",
              options: {
                A: "Section 560 (safety services) and the relevant battery standards (e.g. BS EN 50272 series)",
                B: "Section 411 only",
                C: "Section 525 only",
                D: "No additional standard"
              },
              answer: "A",
              explanation: "Section 560 covers safety services. Battery installations follow the BS EN 50272 series for safety, ventilation and protection. Section 826 sits alongside these as the prosumer umbrella."
            },
            {
              number: 13,
              prompt: "AFDDs require their performance to be verified by:",
              options: {
                A: "The integral test button (manufacturer's instructions) and inclusion in periodic inspection records",
                B: "Bespoke loop testing",
                C: "Insulation resistance only",
                D: "Earth electrode test only"
              },
              answer: "A",
              explanation: "AFDDs include a test button to verify the device's electronics; their continued operation is checked at periodic inspection per the manufacturer's instructions and confirmed on the relevant test schedule."
            },
            {
              number: 14,
              prompt: "Reg 826 — a 'switched' (changeover) source mode means:",
              options: {
                A: "The local source can supply the installation when the public supply is unavailable, but is mechanically interlocked so the two sources cannot be paralleled",
                B: "The source is direct-connected at all times",
                C: "The local source disconnects on grid loss and never reconnects",
                D: "Only inverters can switch"
              },
              answer: "A",
              explanation: "Reg 551 / 826 — switched (changeover) operation uses a transfer device that prevents inadvertent paralleling. Mechanical interlock ensures only one source feeds the installation at any time."
            },
            {
              number: 15,
              prompt: "Reg 411.3.3 limits omission of the 30 mA additional RCD protection on socket outlets to:",
              options: {
                A: "Specific socket outlets used solely under skilled (BA5) supervision and supported by a documented risk assessment",
                B: "Any socket designed for outdoors",
                C: "Any rural property",
                D: "Any socket above 16 A"
              },
              answer: "A",
              explanation: "Reg 411.3.3 — 30 mA RCD additional protection on socket outlets up to 32 A may be omitted only on documented risk assessment for sockets used under skilled supervision (BA5). The exception is narrow."
            },
            {
              number: 16,
              prompt: "An AFDD installed on a 32 A socket-outlet final circuit must be coordinated with:",
              options: {
                A: "Any upstream RCD or RCBO and the overcurrent protective device, so that nuisance tripping or selectivity issues are minimised",
                B: "An SPD only",
                C: "A surge counter only",
                D: "An LED meter only"
              },
              answer: "A",
              explanation: "Reg 532.6 — AFDDs must be selected so they coordinate with the upstream RCD or RCBO and the overcurrent device. Devices that combine all three functions (MCB+RCD+AFDD) avoid coordination challenges."
            },
            {
              number: 17,
              prompt: "Reg 421.1.7 'shall' is interpreted as:",
              options: {
                A: "A mandatory requirement (BS 7671 wording: 'shall' = required)",
                B: "Optional",
                C: "Recommended",
                D: "Permitted"
              },
              answer: "A",
              explanation: "BS 7671 wording — 'shall' is mandatory; 'should' is a recommendation; 'may' is a permitted option. AFDDs in HRRBs etc. are 'shall'."
            },
            {
              number: 18,
              prompt: "Section 722 — labelling for an EV installation must include:",
              options: {
                A: "Identification of the source, isolation point and the warning that the supply may energise the installation when the vehicle is connected",
                B: "No labelling required",
                C: "Just the cable size",
                D: "Just the price"
              },
              answer: "A",
              explanation: "Section 722 / 514 — labelling identifies the supply route, isolation, RCD type and any warnings (e.g. open-PEN device behaviour). The aim is safe maintenance and clear hazard communication."
            },
            {
              number: 19,
              prompt: "Section 826 — a PV/battery prosumer installation that exports to the grid must:",
              options: {
                A: "Comply with G98/G99 connection conditions and have local protection that disconnects the source on grid loss (anti-islanding)",
                B: "Operate independently of the DNO at all times",
                C: "Use no isolation device",
                D: "Have no labelling"
              },
              answer: "A",
              explanation: "Section 826 / 551 / G98/G99 — exporting installations need anti-islanding protection (loss-of-mains detection) and must comply with the DNO's connection conditions. Local labelling and isolation are required for safe maintenance."
            },
            {
              number: 20,
              prompt: "AFDDs at the consumer unit:",
              options: {
                A: "Take the place of nothing — they sit alongside MCB/RCD on the final circuit",
                B: "Replace the RCD",
                C: "Replace the MCB",
                D: "Replace the SPD"
              },
              answer: "A",
              explanation: "AFDDs are an additional protective measure for fire risk from arcing. They are not a substitute for overcurrent protection or RCD additional protection — they sit in series with both."
            }
          ]
        },
        {
          id: "v4",
          questions: [
            {
              number: 1,
              prompt: "PEI in Section 826 stands for:",
              options: {
                A: "Personal Electrical Installation",
                B: "Prosumer Electrical Installation",
                C: "Public Electrical Installation",
                D: "Protective Electrical Installation"
              },
              answer: "B",
              explanation: "PEI = Prosumer Electrical Installation, defined by A2:2022. 'Prosumer' = an installation that produces and consumes electricity (PV, battery, EV combinations)."
            },
            {
              number: 2,
              prompt: "Reg 421.1.7 — the four 'shall' categories for AFDDs are:",
              options: {
                A: "HRRBs, HMOs, purpose-built student accommodation, care homes",
                B: "Industrial only",
                C: "Hotels only",
                D: "Office blocks only"
              },
              answer: "A",
              explanation: "Reg 421.1.7 (A2:2022) — AFDDs are mandatory in higher-risk residential buildings, houses in multiple occupation, purpose-built student accommodation and care homes."
            },
            {
              number: 3,
              prompt: "An SPD on a TT installation, located at the origin, must:",
              options: {
                A: "Provide L-N, L-PE and N-PE protection paths and be coordinated with the consumer's earthing arrangement",
                B: "Be omitted because TT systems do not need them",
                C: "Be Type 1 only",
                D: "Replace the main switch"
              },
              answer: "A",
              explanation: "Reg 534 — SPDs on TT supplies typically use the '3+1' or '4+0' connection pattern to protect across all paths. The earth electrode must be capable of carrying surge currents to ground without elevating PE potential excessively."
            },
            {
              number: 4,
              prompt: "Reg 514.15 (alternative source) requires which warning label format?",
              options: {
                A: "A durable label at every isolation point indicating the presence of an alternative source and warning that supply may still be live after isolating the public supply",
                B: "A laminated A4 sheet on the kitchen wall",
                C: "Verbal advice only",
                D: "Smartphone app notification"
              },
              answer: "A",
              explanation: "Reg 514.15 — durable warning at every isolation point making clear there is an alternative source. Provides safety for anyone working downstream, including emergency services."
            },
            {
              number: 5,
              prompt: "On a TN-C-S supply with a Type B EV RCD, an open-PEN protective device works by:",
              options: {
                A: "Continuously monitoring L-N voltage (and similar conditions) and disconnecting the supply when the PEN is suspected open",
                B: "Trip on residual current only",
                C: "Trip on overload only",
                D: "Operate on switching surges only"
              },
              answer: "A",
              explanation: "Open-PEN devices monitor for the voltage signatures that occur when the DNO's combined PEN goes open-circuit (asymmetric L-PE/N-PE potential). On detection, the device opens all live conductors so the EV is not exposed."
            },
            {
              number: 6,
              prompt: "Reg 421.1.7 lists AFDDs as 'shall' for HMOs because:",
              options: {
                A: "HMOs typically have multiple unrelated occupants, longer evacuation times and elevated fire risk",
                B: "HMOs use higher voltage",
                C: "HMOs always have AC supplies",
                D: "AFDDs are decorative"
              },
              answer: "A",
              explanation: "HMOs (Houses in Multiple Occupation) have shared spaces, multiple unrelated occupants and often share escape routes — making fire from electrical arcing a particularly serious risk."
            },
            {
              number: 7,
              prompt: "The minimum permissible RCD type for general final-circuit protection in a dwelling under A2:2022 is:",
              options: {
                A: "Type AC",
                B: "Type A",
                C: "Type B everywhere",
                D: "Type S only"
              },
              answer: "B",
              explanation: "A2 elevated Type A as the minimum default. Some specific applications (EV) require Type B (or Type A + RDC-DD)."
            },
            {
              number: 8,
              prompt: "An EV installation within a domestic dwelling that uses a separating transformer is:",
              options: {
                A: "Galvanically isolated from the DNO supply, so a broken DNO PEN cannot affect the EV chassis (no open-PEN device or local electrode required for the EV side)",
                B: "Equivalent to a 230/24 V transformer",
                C: "Always at extra-high voltage",
                D: "An automatic AFDD"
              },
              answer: "A",
              explanation: "Reg 722.411.4.1 option (ii) — a separating transformer in the supply path means the EV side is electrically isolated from the DNO neutral; the EV's earth is the secondary side's local earth, removing the open-PEN risk."
            },
            {
              number: 9,
              prompt: "Section 826 / 551 — the 'switched alternative source' mode is most often used for:",
              options: {
                A: "Domestic backup generators that take over when the public supply fails (and can never operate in parallel)",
                B: "Continuous parallel operation",
                C: "Variable frequency drives",
                D: "DC supplies only"
              },
              answer: "A",
              explanation: "Reg 551 — switched alternative source uses a changeover switch (often automatic) so the load can be supplied from either the public supply or the local source, but never both simultaneously. Common for portable/standby generators."
            },
            {
              number: 10,
              prompt: "Reg 421.1.7 — for the AFDD requirement to apply to a final circuit, which condition must be satisfied?",
              options: {
                A: "It is a single-phase AC final circuit supplying socket-outlets rated up to 32 A in one of the four 'shall' premises",
                B: "It is any 3-phase circuit",
                C: "It is a DC circuit",
                D: "It supplies fixed equipment only"
              },
              answer: "A",
              explanation: "Reg 421.1.7 — applies to single-phase AC final circuits supplying socket-outlets rated up to 32 A. Lighting circuits, fixed-equipment circuits, and 3-phase circuits are outside the scope of the strict requirement."
            },
            {
              number: 11,
              prompt: "Section 712 — the DC-side conductors of a PV array must be:",
              options: {
                A: "UV-resistant, double-insulated where exposed, and rated for the array's voltage and short-circuit current with appropriate factors",
                B: "Standard PVC twin-and-earth",
                C: "Bell wire",
                D: "PVC trunking"
              },
              answer: "A",
              explanation: "Section 712 — DC PV cabling typically uses dedicated 'PV1-F' or equivalent solar cables. Double insulation, UV resistance, mechanical protection where exposed and proper rating for Voc(min temp) and Isc(STC × 1.25)."
            },
            {
              number: 12,
              prompt: "Section 411 — for a TT system using a 30 mA RCD, the recommended (not maximum theoretical) RA is typically:",
              options: {
                A: "≤ 200 Ω as a stable practical limit",
                B: "≤ 1667 Ω theoretical only",
                C: "≤ 1 Ω always",
                D: "Any value"
              },
              answer: "A",
              explanation: "BS 7671 Note — RA × IΔn ≤ 50 V gives 1667 Ω theoretical for a 30 mA RCD, but seasonal moisture variation makes that unstable. ≤ 200 Ω is the typically recommended practical figure."
            },
            {
              number: 13,
              prompt: "Reg 537.3 — switching off for mechanical maintenance must:",
              options: {
                A: "Disconnect all live conductors at the equipment, prevent inadvertent re-energisation and be clearly identified",
                B: "Disconnect the line only",
                C: "Be hidden",
                D: "Operate only after a key code"
              },
              answer: "A",
              explanation: "Reg 537.3 — mechanical-maintenance isolation breaks all live conductors, has anti-reclosing means (lockable, key, padlockable, etc.), and is clearly labelled at the equipment."
            },
            {
              number: 14,
              prompt: "Reg 826 — battery storage installations must include labels at:",
              options: {
                A: "DC isolation, AC isolation, the battery enclosure and the consumer unit, indicating the alternative source and isolation methods",
                B: "Only the meter",
                C: "Only the inverter",
                D: "No labels needed"
              },
              answer: "A",
              explanation: "Section 826 / 514 — battery installations require labelling at every relevant isolation device and at the unit itself. The aim is safe maintenance and clear identification of the alternative source."
            },
            {
              number: 15,
              prompt: "An AFDD that combines RCBO functions in a single device must comply with:",
              options: {
                A: "BS EN 62606 (AFDD) and BS EN 61009 (RCBO) requirements",
                B: "BS EN 60898 only",
                C: "BS EN 50525 only",
                D: "BS 1363 only"
              },
              answer: "A",
              explanation: "Combined devices (RCBO + AFDD) must satisfy each constituent product standard. BS EN 62606 covers the arc-fault detection function and BS EN 61009 covers the residual-current with overcurrent protection function."
            },
            {
              number: 16,
              prompt: "Reg 826 — a prosumer installation that uses both PV and an EV charger must respect:",
              options: {
                A: "Section 712 (PV), Section 722 (EV) and Section 826 (overall prosumer arrangement)",
                B: "Only Section 826",
                C: "Only Section 411",
                D: "Section 700 only"
              },
              answer: "A",
              explanation: "Section 826 is an umbrella section. The specific elements still apply — 712 for PV, 722 for EV — alongside 826's prosumer-level requirements (operating modes, labelling, isolation)."
            },
            {
              number: 17,
              prompt: "Reg 514.16 — the periodic inspection notice must include:",
              options: {
                A: "Date of next recommended inspection, with legible lettering (≥ 14 pt under A3:2024)",
                B: "Only the postcode",
                C: "Only the meter number",
                D: "Only manufacturer"
              },
              answer: "A",
              explanation: "Reg 514.12 / 514.16 — the notice must give the recommended date of next periodic inspection. A3:2024 specifies a minimum legibility (≈ 14 pt) so the notice is readable without opening the cupboard."
            },
            {
              number: 18,
              prompt: "Section 421 — fire risk from luminaires in dwellings is reduced by:",
              options: {
                A: "Reg 411.3.4 30 mA RCD additional protection plus Reg 421.1.6 manufacturer information",
                B: "Only changing to LEDs",
                C: "Only voltage drop checks",
                D: "Only AFDDs"
              },
              answer: "A",
              explanation: "Reg 411.3.4 brings dwellings' lighting circuits under 30 mA RCD additional protection. Reg 421.1.6 ensures luminaire information supports safe lamp replacement and minimises fire risk."
            },
            {
              number: 19,
              prompt: "Section 537 — emergency switching device labelling is typically:",
              options: {
                A: "Red lettering on a yellow background, clearly visible and adjacent to the device",
                B: "Black on white only",
                C: "Green on yellow only",
                D: "No labelling required"
              },
              answer: "A",
              explanation: "Reg 537.4 — emergency switches/buttons typically have red operator on yellow background per HSE/safety convention; the labelling must be clearly visible and identify the function."
            },
            {
              number: 20,
              prompt: "A2:2022 broadly increased emphasis on:",
              options: {
                A: "Fire safety from arc faults (AFDDs), surge protection, EV charging RCD types, prosumer installations and reliability of protective measures",
                B: "Cable colours only",
                C: "Tool standards only",
                D: "Only domestic premises"
              },
              answer: "A",
              explanation: "A2:2022 was a substantial fire- and surge-safety amendment, also expanding EV and prosumer provisions. A3:2024 added clarifications and labelling improvements."
            }
          ]
        },
        {
          id: "v5",
          questions: [
            {
              number: 1,
              prompt: "Reg 826.X — a prosumer installation operating in 'island' mode must:",
              options: {
                A: "Have a neutral switching device that disconnects the DNO neutral so the local source does not back-feed via the neutral path",
                B: "Use a single-pole isolator only",
                C: "Have no isolation",
                D: "Operate at SELV"
              },
              answer: "A",
              explanation: "Section 826 / 551 — island mode means the DNO connection is fully separated, including the neutral. A neutral switching device prevents the local source paralleling onto the public network through the neutral path."
            },
            {
              number: 2,
              prompt: "AFDDs are required to be installed at the:",
              options: {
                A: "Origin of the final circuit",
                B: "Origin of the installation",
                C: "Each socket outlet",
                D: "End of the longest circuit"
              },
              answer: "A",
              explanation: "Reg 421.1.7 / 532.6 — at the origin of the final circuit, so the AFDD protects the entire downstream cabling and accessories of that circuit."
            },
            {
              number: 3,
              prompt: "Section 443 / Appendix 16 calculated risk level (CRL) approach is used to:",
              options: {
                A: "Justify omitting an SPD by demonstrating the risk is below the relevant threshold",
                B: "Always require an SPD",
                C: "Replace Section 411",
                D: "Replace Reg 421.1.7"
              },
              answer: "A",
              explanation: "Section 443.5 + Appendix 16 — CRL approach is the route to documented omission. Without that documented assessment, an SPD is required by default. The calculation considers ground flash density, line length, structure factors and consequence."
            },
            {
              number: 4,
              prompt: "Section 722 specifies the EV-charging RCD type primarily because:",
              options: {
                A: "EV chargers can produce smooth DC residual currents that blind a Type A core, so Type B (or Type A + RDC-DD) is needed",
                B: "Type AC is too noisy",
                C: "Type S is unavailable",
                D: "Type B is cheaper"
              },
              answer: "A",
              explanation: "Switching power-electronic chargers can produce smooth DC residual currents on a fault. A Type A RCD's core may saturate, suppressing detection of AC residuals. Type B is sensitive across the full waveform spectrum, including smooth DC."
            },
            {
              number: 5,
              prompt: "Reg 421.1.7 in HRRBs — an HRRB is defined under building safety legislation as:",
              options: {
                A: "A residential building meeting specific height and use thresholds (e.g. ≥ 18 m or ≥ 7 storeys with residential occupation, per the Building Safety Act 2022)",
                B: "Any building with > 100 occupants",
                C: "Any block of flats",
                D: "Any office building"
              },
              answer: "A",
              explanation: "An HRRB (Higher Risk Residential Building) is defined under the Building Safety Act 2022. The thresholds (height and storeys with residential use) reflect elevated fire risk and the impact of an arcing-related fire."
            },
            {
              number: 6,
              prompt: "Reg 411.3.4 (30 mA RCD on lighting in dwellings) was introduced because:",
              options: {
                A: "Luminaires are routinely handled by ordinary persons (lamp replacement) and a fault could result in shock",
                B: "It reduces voltage drop",
                C: "It improves harmonics",
                D: "It tracks energy consumption"
              },
              answer: "A",
              explanation: "Lamp changing is an everyday user activity. 30 mA RCD additional protection limits the consequence of a fault during such handling — reducing the chance of dangerous shock duration."
            },
            {
              number: 7,
              prompt: "Section 826 / 551 explicitly mention:",
              options: {
                A: "Switched, parallel and island modes for installations with alternative sources",
                B: "Only switched mode",
                C: "Only island mode",
                D: "Only parallel mode"
              },
              answer: "A",
              explanation: "Reg 551 / 826 — installations with alternative sources can operate in three modes: continuous parallel, switched changeover, or island. The protection arrangements differ between them."
            },
            {
              number: 8,
              prompt: "Reg 826 / 514 — labelling on a prosumer installation must:",
              options: {
                A: "Identify the alternative source and the means of isolation at every relevant location",
                B: "Use red lettering only",
                C: "Be only in the meter cupboard",
                D: "Be optional"
              },
              answer: "A",
              explanation: "The label requirements ensure that anyone (electrician, emergency services, future occupant) knows the installation has an alternative source and where to isolate it before working downstream."
            },
            {
              number: 9,
              prompt: "Section 712 — the AC side of a PV inverter must include:",
              options: {
                A: "Isolation and protection in accordance with the relevant Section 411/412 / 415 / 537 requirements; suitable RCD if required and labelling",
                B: "No protection — handled by the inverter",
                C: "Only an MCB",
                D: "Only a fuse"
              },
              answer: "A",
              explanation: "Section 712 — AC-side cable, isolation, protection (including RCD where applicable) and labelling follow the standard BS 7671 rules. The inverter is treated as a piece of equipment, not a substitute for protection."
            },
            {
              number: 10,
              prompt: "Reg 421.1.7 — an AFDD installed on a 16 A lighting circuit in an HRRB is:",
              options: {
                A: "Recommended (lighting is not in the strict 'shall' scope, which applies to socket-outlet circuits)",
                B: "Mandatory",
                C: "Banned",
                D: "Required only at night"
              },
              answer: "A",
              explanation: "The strict 'shall' applies to socket-outlet circuits ≤ 32 A in those four premises. Lighting circuits in HRRBs may be considered for AFDDs on the 'recommended' route, but they are not in the mandatory scope."
            },
            {
              number: 11,
              prompt: "Reg 826 / 551 — the device used to ensure the local source does not back-feed onto the DNO public supply network through the neutral is:",
              options: {
                A: "A neutral switching device (or fully four-pole isolation in 3-phase systems)",
                B: "Just an MCB",
                C: "Only an SPD",
                D: "An AFDD"
              },
              answer: "A",
              explanation: "Reg 551 — neutral switching is required where a fault on the DNO neutral could cause unsafe operation. Single-phase island operation needs neutral switching; 3-phase needs four-pole disconnection."
            },
            {
              number: 12,
              prompt: "AFDD product standard BS EN 62606 specifies:",
              options: {
                A: "AFDD function (arc detection performance, immunity to nuisance tripping, environmental and electrical conditions)",
                B: "RCBO performance only",
                C: "MCB performance only",
                D: "Cable construction only"
              },
              answer: "A",
              explanation: "BS EN 62606 defines AFDD performance — sensitivity to series and parallel arcs, immunity to nuisance signals (e.g. dimmer harmonics, motor switching), and environmental robustness."
            },
            {
              number: 13,
              prompt: "An installation supplied at 230 V via a TN-C-S supply with a Type 2 SPD at the origin must:",
              options: {
                A: "Provide L-N, L-PE and N-PE protection with appropriately sized backup overcurrent protection per the SPD manufacturer",
                B: "Have only L-N protection",
                C: "Use a Type 1 SPD only",
                D: "Have no backup overcurrent device"
              },
              answer: "A",
              explanation: "Reg 534.4 — SPD installation requires the L-N, L-PE and N-PE paths protected, with the upstream overcurrent device sized per the SPD's specification (usually a gG fuse rated higher than the design current to avoid nuisance trips on surge events)."
            },
            {
              number: 14,
              prompt: "Reg 411.3.4 applies 30 mA RCD additional protection to:",
              options: {
                A: "AC final circuits supplying luminaires within domestic (household) premises",
                B: "Only outdoor luminaires",
                C: "Only emergency lighting",
                D: "Only commercial lighting"
              },
              answer: "A",
              explanation: "Reg 411.3.4 — applies to AC final circuits supplying luminaires in dwellings. Outdoor luminaires are usually already RCD'd via 411.3.3 (sockets) or general practice, but Reg 411.3.4 makes the dwelling lighting circuit a specific RCD requirement."
            },
            {
              number: 15,
              prompt: "Reg 826 — a prosumer dwelling that has BOTH PV inverter and battery storage with EV charger must:",
              options: {
                A: "Apply Sections 712 (PV), 722 (EV) and 826 (prosumer) and ensure correct labelling and isolation across all sources",
                B: "Apply only Section 411",
                C: "Apply only Section 826",
                D: "Apply only Section 543"
              },
              answer: "A",
              explanation: "Section 826 is the umbrella; the specific sub-systems (PV, EV) still require their own sections to be honoured. Labelling and isolation across the multi-source installation is critical for safety."
            },
            {
              number: 16,
              prompt: "Section 443 — SPDs are particularly important where:",
              options: {
                A: "Failure of safety services or significant financial/data/cultural-heritage loss could occur, or where the calculated risk level exceeds the threshold",
                B: "Only in tropical climates",
                C: "Only in industrial premises",
                D: "Only in dwellings with EV chargers"
              },
              answer: "A",
              explanation: "Reg 443.4 — the consequence categories driving SPD provision include failure of safety services, significant financial loss, damage to cultural heritage, and risk to human life."
            },
            {
              number: 17,
              prompt: "Reg 421.1.7 — exam-style mnemonic for the four 'shall' AFDD premises is:",
              options: {
                A: "HRRBs, HMOs, Care homes, Student accommodation (purpose-built)",
                B: "Industrial only",
                C: "Hotels and B&Bs",
                D: "Offices and warehouses"
              },
              answer: "A",
              explanation: "Memorise: HRRB / HMO / care homes / purpose-built student accommodation. The thread is elevated fire risk and limited evacuation routes."
            },
            {
              number: 18,
              prompt: "Section 722 — Type B RCD requirement applies to:",
              options: {
                A: "Each charging point (socket-outlet or connector) on the EV final circuit unless an RDC-DD is provided to back up a Type A",
                B: "The whole consumer unit",
                C: "Only the lighting",
                D: "Only the kettle circuit"
              },
              answer: "A",
              explanation: "Reg 722.531.3.101 — protection must be applied to each connecting point. The Type B requirement (or Type A + RDC-DD) is at the EV charging point."
            },
            {
              number: 19,
              prompt: "Reg 826 — a battery installation that operates only in 'switched' mode (transfer from grid to battery on grid loss) must:",
              options: {
                A: "Use a transfer device that is mechanically interlocked to prevent paralleling, and label appropriately at the consumer unit and any isolation point",
                B: "Operate in parallel with the grid at all times",
                C: "Have no labelling",
                D: "Use Type AC RCDs"
              },
              answer: "A",
              explanation: "Reg 551 / 826 — switched (transfer) mode uses an interlock so that public and local supplies cannot be paralleled. Labelling identifies the alternative source and isolation device locations."
            },
            {
              number: 20,
              prompt: "AFDDs in dwellings outside the four 'shall' premises are best fitted on:",
              options: {
                A: "Final circuits identified by risk assessment as higher fire risk (e.g. legacy wiring, sleeping accommodation, cables hidden in flammable construction)",
                B: "All circuits regardless",
                C: "Only kitchen circuits",
                D: "Only lighting circuits"
              },
              answer: "A",
              explanation: "When AFDD use is 'recommended' (rather than mandatory), the designer applies risk-based judgement. Final circuits in flammable construction, with older damaged cabling, or supplying sleeping accommodation are common candidates."
            }
          ]
        }
      ]
    },
    {
      id: "section-4-practice",
      title: "Section 4 — 18th Edition Practice Bank",
      variants: [
        {
          id: "v1",
          questions: [
            {
              number: 1,
              prompt: "Which of the following is not part of the schedule of inspections for an initial verification?",
              options: {
                A: "Additional protection",
                B: "RCD type",
                C: "Distribution equipment",
                D: "Basic protection"
              },
              answer: "B",
              explanation: "The Schedule of Inspections checks the methods of protection (basic, fault, additional) and that distribution equipment, identification, and bonding are correct. The specific RCD type (AC/A/F/B) is recorded on the Schedule of Test Results, not on the Schedule of Inspections."
            },
            {
              number: 2,
              prompt: "When provided, where must an AFDD be installed?",
              options: {
                A: "At equipment which is likely to cause operation of an AFDD",
                B: "At the origin of an installation",
                C: "At the origin of the final circuit being protected",
                D: "Between the meter and consumer unit main switch"
              },
              answer: "C",
              explanation: "Reg 532.6 / 421.1.7 — AFDDs are installed at the origin of the final circuit so they protect the entire downstream cabling and accessories. Installing at the origin of the installation gives no per-circuit selectivity."
            },
            {
              number: 3,
              prompt: "Storage batteries are used as an alternative electrical source for what?",
              options: {
                A: "High-frequency oscillations",
                B: "Safety services",
                C: "Maintainability",
                D: "Undervoltage"
              },
              answer: "B",
              explanation: "Section 560 — safety services (emergency lighting, fire alarm panels, smoke control) need an independent source so they keep working when the mains fails. Battery banks (or generators) are the standard alternative source."
            },
            {
              number: 4,
              prompt: "Low voltage generating sets are considered to be:",
              options: {
                A: "Within the scope of BS 7671",
                B: "Outside the scope of BS 7671",
                C: "Excluded by Reg 110",
                D: "Excluded except in agricultural premises"
              },
              answer: "A",
              explanation: "Section 551 specifically covers LV generating sets — they are within the scope of BS 7671. The Regulations cover both the connection back to the installation and the protective measures for parallel operation with the public supply."
            },
            {
              number: 5,
              prompt: "When island mode is in use, what must be used to prevent unsafe paralleling of the local source onto the DNO neutral?",
              options: {
                A: "A single-pole RCD",
                B: "A neutral switching device",
                C: "A double-pole BS EN 60947-3 isolator on line conductors only",
                D: "Functional switching of line conductors"
              },
              answer: "B",
              explanation: "Section 551 / 826 (Prosumer installations under A2:2022) — when an inverter feeds the installation in island mode it must disconnect the DNO neutral with a neutral switching device to prevent the local generator paralleling onto the DNO supply via the neutral."
            },
            {
              number: 6,
              prompt: "The minimum IP rating for an insulating enclosure to provide basic protection on a vertical surface is:",
              options: {
                A: "IP2X / IPXXB",
                B: "IPXXD / IP4X",
                C: "IP5X",
                D: "IP6X"
              },
              answer: "A",
              explanation: "Reg 416.2.2: vertical surfaces require IP2X or IPXXB minimum (jointed test finger). Horizontal upper surfaces that are readily accessible require IP4X or IPXXD (1 mm wire)."
            },
            {
              number: 7,
              prompt: "What is the maximum measured (warm) Zs for a 32 A BS 88-3 fuse on a distribution circuit?",
              options: {
                A: "0.728 Ω",
                B: "1.6 Ω (tabulated)",
                C: "0.91 Ω",
                D: "1.28 Ω"
              },
              answer: "D",
              explanation: "Distribution circuits use 5 s disconnection time. From Table 41.4 for BS 88-3 32 A at 5 s: tabulated Zs = 1.6 Ω. GN3 max measured = 0.8 × 1.6 = 1.28 Ω (the 80% rule for warm conductors)."
            },
            {
              number: 8,
              prompt: "Which type of SPD is intended for installation at the origin where direct or partial direct lightning is possible?",
              options: {
                A: "Type 5",
                B: "Type 4",
                C: "Type 1",
                D: "Type 3"
              },
              answer: "C",
              explanation: "Type 1 SPDs handle the 10/350 µs lightning current waveform — installed at the origin where there is risk of direct or partial direct lightning strike. Type 2 handles induced surges; Type 3 sits at the equipment end."
            },
            {
              number: 9,
              prompt: "Sufficient space for installation, replacement, inspection and testing is termed:",
              options: {
                A: "Mutual detrimental influence",
                B: "Harmful effects",
                C: "Accessibility of electrical equipment",
                D: "Additions and alterations"
              },
              answer: "C",
              explanation: "Section 132 / Reg 513 — the requirement to provide enough access space for installation, inspection, testing, maintenance and replacement is the 'accessibility' requirement. Cramming a CU into a 200 mm cupboard fails this rule."
            },
            {
              number: 10,
              prompt: "Which factor influences the frequency of periodic inspection and testing?",
              options: {
                A: "Frequency and quality of any maintenance carried out",
                B: "Age of the building fabric",
                C: "Number of occupants",
                D: "Local rainfall"
              },
              answer: "A",
              explanation: "Reg 651 — the frequency of periodic I&T considers the type of installation, its use & operation, frequency and quality of maintenance, and external influences. Building-fabric age and occupant count aren't drivers in their own right."
            },
            {
              number: 11,
              prompt: "If a 35 mm² Cu line conductor uses a same-material protective conductor, the minimum CSA from Table 54.7 is:",
              options: {
                A: "6 mm²",
                B: "16 mm²",
                C: "25 mm²",
                D: "35 mm²"
              },
              answer: "B",
              explanation: "Table 54.7: for line conductors > 16 mm² up to and including 35 mm², the same-material PE may be 16 mm². For S > 35 mm² the rule is S/2 (so 70 mm² → 35 mm²)."
            },
            {
              number: 12,
              prompt: "An EV charge point on a TN-C-S supply must NOT use the PME as its means of earthing unless:",
              options: {
                A: "The MET is connected to a local earth electrode of suitable resistance",
                B: "PME is never permitted",
                C: "It is a 3-phase installation",
                D: "It is on a Type A RCD"
              },
              answer: "A",
              explanation: "Reg 722.411.4.1 — to use PME for an EV charge-point you must either fit an open-PEN device, provide a separating transformer, or provide a local earth electrode at the installation. The electrode option breaks dependence on the DNO neutral."
            },
            {
              number: 13,
              prompt: "Preventing fault current passing through the body of a person or livestock is a form of:",
              options: {
                A: "Protection against voltage disturbances",
                B: "Protection against thermal effects",
                C: "Fault protection",
                D: "Protection against overcurrent"
              },
              answer: "C",
              explanation: "Fault protection (formerly 'protection against indirect contact') is the duty to prevent dangerous touch voltages on exposed parts caused by an insulation fault — typically achieved by ADS, Class II equipment, or electrical separation."
            },
            {
              number: 14,
              prompt: "To avoid the use of an RCD for additional protection on a cable buried 35 mm in a wall in safe zones, the alternative is:",
              options: {
                A: "Additional protection must always be used",
                B: "Thermosetting insulated and sheathed cable",
                C: "Earthed metallic conduit/ducting (or earthed metal sheath / mechanical protection) to Reg 522.6.202",
                D: "Supplementary bonding only"
              },
              answer: "C",
              explanation: "Reg 522.6.202 — the alternatives to a 30 mA RCD for cables < 50 mm in walls in safe zones are: earthed metallic conduit/ducting, mechanical protection, or use of cables with an earthed metal sheath."
            },
            {
              number: 15,
              prompt: "Neutral overcurrent detection is required where:",
              options: {
                A: "The circuit is protected by a BS 3036 fuse",
                B: "It is an IT system",
                C: "Harmonic currents may flow significantly in the neutral (e.g. 3-phase 4-wire)",
                D: "Never"
              },
              answer: "C",
              explanation: "Reg 431.2.3 — neutral overcurrent detection is required where harmonic currents (especially 3rd harmonic in 3-phase 4-wire) can drive significant circulating current in the neutral, even when the lines look balanced."
            },
            {
              number: 16,
              prompt: "A switch which does not necessarily isolate all live conductors is termed:",
              options: {
                A: "Mechanical-maintenance switch",
                B: "Emergency switch",
                C: "Functional switch",
                D: "Isolator"
              },
              answer: "C",
              explanation: "Section 537 — functional switching only controls a circuit in normal operation; it does not have to disconnect every live conductor (a single-pole light switch is the classic example). Isolation requires all live conductors disconnected."
            },
            {
              number: 17,
              prompt: "Equipment in a marina seashore location requires a minimum IP rating of:",
              options: {
                A: "IPX3",
                B: "IPX4",
                C: "IPX6",
                D: "IPX5"
              },
              answer: "C",
              explanation: "Section 709 (Marinas) requires IPX6 (powerful jets / heavy seas) for equipment in seashore locations to withstand wave action and storm spray. Inland marinas use lower IP."
            },
            {
              number: 18,
              prompt: "A 20 A 400 V three-phase motor circuit on a TN system has a maximum disconnection time of:",
              options: {
                A: "0.2 s",
                B: "5 s",
                C: "0.4 s",
                D: "0.1 s"
              },
              answer: "A",
              explanation: "Table 41.1 — TN system, final circuit at U₀ > 230 V: maximum disconnection time 0.2 s. (At 230 V the limit is 0.4 s; distribution circuits get 5 s.)"
            },
            {
              number: 19,
              prompt: "Which conductor connects an exposed-conductive-part to the MET?",
              options: {
                A: "Circuit protective conductor (CPC)",
                B: "Main protective bonding conductor",
                C: "Earthing conductor",
                D: "Supplementary bonding conductor"
              },
              answer: "A",
              explanation: "CPC: from the exposed conductive part of accessories/equipment back to the MET via the distribution board. Main bonding goes from MET to extraneous parts. Earthing conductor is MET to the means of earthing."
            },
            {
              number: 20,
              prompt: "Which RCD type trips on AC sinusoidal residual current and on residual pulsating DC, suddenly applied or smoothly increasing only?",
              options: {
                A: "Type A",
                B: "Type AC",
                C: "Type F",
                D: "Type B"
              },
              answer: "A",
              explanation: "Type A: AC sinusoidal + pulsating DC. Type AC: AC sinusoidal only. Type F: Type A + composite multi-frequency. Type B: all of the above + smooth DC."
            },
            {
              number: 21,
              prompt: "When can overload protection NOT be omitted?",
              options: {
                A: "Exciter circuit of a rotating machine",
                B: "Supply of a lifting magnet",
                C: "Circuit supplying a fire-extinguishing device",
                D: "Polyphase motor circuit"
              },
              answer: "D",
              explanation: "Reg 433.3 lists where overload protection MAY be omitted (exciter circuits, lifting magnets, safety circuits like fire suppression). Polyphase motor circuits are not on that list and must always have overload protection."
            },
            {
              number: 22,
              prompt: "The term PEI is defined as:",
              options: {
                A: "Prosumer Electrical Installation",
                B: "Protective Earthing Installation",
                C: "Prosumer Earthing Installation",
                D: "Protective Electrical Installation"
              },
              answer: "A",
              explanation: "PEI = Prosumer Electrical Installation — introduced in Section 826 by A2:2022 to cover dwellings that both consume and produce electricity (PV + battery + EV combinations)."
            },
            {
              number: 23,
              prompt: "A standard 13 A socket outlet may be installed in a room containing a bath or shower provided it is at least:",
              options: {
                A: "2.5 m from the boundary of Zone 1",
                B: "Within the boundary of Zone 2",
                C: "It cannot be installed under any circumstance",
                D: "3 m from the boundary of Zone 1"
              },
              answer: "A",
              explanation: "Section 701 — a standard socket outlet may be installed in a bath/shower room provided it is no closer than 2.5 m horizontally from the boundary of Zone 1. This replaced the older 3 m exam answer."
            },
            {
              number: 24,
              prompt: "Electric shock protection is NOT achieved by:",
              options: {
                A: "Class II equipment",
                B: "Coordination between conductor and overload protective device",
                C: "SELV",
                D: "Automatic disconnection of supply"
              },
              answer: "B",
              explanation: "Conductor / overload protective device coordination (Reg 433) is overload protection — it prevents the cable overheating, not shock. The other three are recognised protective measures against electric shock."
            },
            {
              number: 25,
              prompt: "A method of basic protection ascertained during initial verification is:",
              options: {
                A: "Protection by obstacles",
                B: "Correct type of protective device",
                C: "Suitable installation method",
                D: "Suitable sized conductors"
              },
              answer: "A",
              explanation: "Basic protection methods listed in Section 416/417: insulation of live parts, barriers/enclosures, obstacles, placing out of reach. Obstacles is one of the named basic-protection measures (used in restricted areas, by skilled persons)."
            },
            {
              number: 26,
              prompt: "Lightning strikes shall be protected against where which of the following is a consequence?",
              options: {
                A: "Significant financial or data loss, serious injury, or failure of safety services (Reg 443.4)",
                B: "Mild flicker on TV pictures",
                C: "Disruption to a household installation only",
                D: "Sound system interference"
              },
              answer: "A",
              explanation: "Reg 443.4 — protection against transient overvoltages of atmospheric origin must be provided where consequence includes serious injury, loss of human life, failure of safety service, or significant financial loss."
            },
            {
              number: 27,
              prompt: "On a construction site, a 16 A 'commando socket' is manufactured to:",
              options: {
                A: "BS EN 60309-2",
                B: "BS EN 61439-4",
                C: "BS EN 60309-1",
                D: "BS EN 50525-2-21"
              },
              answer: "A",
              explanation: "BS EN 60309-2 covers the dimensional / interchangeability requirements of industrial round-pin commando sockets. 60309-1 is the general standard; 61439-4 covers assemblies for construction sites."
            },
            {
              number: 28,
              prompt: "In single-phase, two-wire circuits the neutral conductor must:",
              options: {
                A: "Be one size larger or smaller than the line conductor",
                B: "Not be less than the CSA of the line conductor",
                C: "Be the same CSA as the line conductor",
                D: "Be at least half the CSA of the line"
              },
              answer: "B",
              explanation: "Reg 524.2.1 — in single-phase two-wire circuits, the neutral conductor must have a cross-sectional area not less than that of the line conductor, whatever the line conductor CSA."
            },
            {
              number: 29,
              prompt: "Continuity of a protective conductor must be protected against:",
              options: {
                A: "Earth faults",
                B: "Overload",
                C: "Overcurrent",
                D: "Chemical and electrochemical deterioration"
              },
              answer: "D",
              explanation: "Reg 543.3 — protective conductors must be protected against mechanical damage, chemical or electrochemical deterioration, electrodynamic and thermodynamic forces. Chemical deterioration matters because corroded joints become high-resistance and break the fault path."
            },
            {
              number: 30,
              prompt: "Which statutory regulation prohibits PME being used as the means of earthing for a caravan?",
              options: {
                A: "Electricity Safety, Quality and Continuity Regulations (ESQCR 2002)",
                B: "Electricity at Work Regulations 1989",
                C: "Building Regulations Part P",
                D: "Provision and Use of Work Equipment Regulations"
              },
              answer: "A",
              explanation: "ESQCR 2002 Reg 9 prohibits a DNO PME earth being used to earth a caravan, boat or similar mobile installation — these must be TT'd. EAWR is the work duty; PUWER covers work equipment generally."
            }
          ]
        },
        {
          id: "v2",
          questions: [
            {
              number: 1,
              prompt: "Which installation does NOT require AFDDs to be installed under Reg 421.1.7?",
              options: {
                A: "Socket outlets in a care home",
                B: "Lighting circuit in a HMO",
                C: "Socket outlets in a HRRB",
                D: "Socket outlets in purpose-built student accommodation"
              },
              answer: "B",
              explanation: "Reg 421.1.7 (A2:2022) — AFDDs are required for AC final circuits supplying socket outlets rated up to 32 A in higher-risk premises (HRRBs, HMOs, care homes, purpose-built student accommodation). Lighting circuits are not in scope."
            },
            {
              number: 2,
              prompt: "Which of the following voltages is NOT covered by BS 7671?",
              options: {
                A: "230 V a.c.",
                B: "1000 V a.c.",
                C: "1500 V d.c.",
                D: "1500 V a.c."
              },
              answer: "D",
              explanation: "BS 7671 covers up to 1000 V a.c. or 1500 V d.c. between conductors. 1500 V a.c. exceeds the LV upper limit and is outside scope (governed by HV regulations and specific equipment standards)."
            },
            {
              number: 3,
              prompt: "In a swimming pool, the space located 2.6 m directly above a springboard is:",
              options: {
                A: "Zone 0",
                B: "Outside zones",
                C: "Zone 2",
                D: "Zone 1"
              },
              answer: "B",
              explanation: "Section 702 — pool zones extend 2.5 m above the highest point that can be occupied (e.g. springboard surface). 2.6 m above the springboard is therefore above the 2.5 m zone limit, so outside any zone."
            },
            {
              number: 4,
              prompt: "Which is NOT considered during an assessment of compatibility (Reg 331.1)?",
              options: {
                A: "DC feedback",
                B: "Harmonic currents",
                C: "Transient overvoltages",
                D: "Use of monitoring devices"
              },
              answer: "D",
              explanation: "Reg 331.1 lists the compatibility considerations: transients, undervoltages, harmonics, DC feedback, leakage currents, etc. The use of monitoring devices is a design choice (Reg 538), not an item assessed against compatibility."
            },
            {
              number: 5,
              prompt: "The removal of an unexpected danger by rapid disconnection is called:",
              options: {
                A: "Isolation",
                B: "Switching for mechanical maintenance",
                C: "Functional switching",
                D: "Emergency switching"
              },
              answer: "D",
              explanation: "Section 537 — emergency switching is the rapid disconnection of supply to remove an unexpected danger. The button must be readily accessible and clearly marked. Isolation is for safe working; mechanical-maintenance switching is for non-electrical work."
            },
            {
              number: 6,
              prompt: "Through-wiring of a luminaire is:",
              options: {
                A: "Permitted only where the wiring system is in conduit",
                B: "Never permitted",
                C: "Permitted only where single-core conductors are used",
                D: "Permitted only where the luminaire is specifically designed for it"
              },
              answer: "D",
              explanation: "Section 559 — through-wiring is only permitted where the luminaire is specifically designed for it (terminals rated for the conductor type and operating temperature). Otherwise the cable insulation may degrade against the hot luminaire body."
            },
            {
              number: 7,
              prompt: "An ELV lighting suspension system shall carry not less than:",
              options: {
                A: "3 kg/m",
                B: "5 kg/m",
                C: "4 kg/m",
                D: "6 kg/m"
              },
              answer: "B",
              explanation: "Section 715 — suspension/track support systems for ELV lighting must be capable of carrying not less than 5 kg per metre of installation, providing a margin over the lightweight ELV fittings and conductor mass."
            },
            {
              number: 8,
              prompt: "A functional earthing conductor is identified by which colour?",
              options: {
                A: "Cream",
                B: "Green",
                C: "Pink",
                D: "Green and yellow"
              },
              answer: "C",
              explanation: "Table 51 / Reg 514 — functional earthing conductors are identified pink and designated FE. Green/yellow remains reserved for protective conductors."
            },
            {
              number: 9,
              prompt: "A distribution circuit feeding a garage on a 230 V TN system has a maximum disconnection time of:",
              options: {
                A: "0.2 s",
                B: "0.4 s",
                C: "5 s",
                D: "1 s"
              },
              answer: "C",
              explanation: "Table 41.1 — distribution circuits (and final circuits > 32 A on 230 V TN) have a 5 s disconnection time. Final circuits ≤ 32 A on 230 V TN: 0.4 s. The garage is fed via a sub-main/distribution circuit, not a final circuit."
            },
            {
              number: 10,
              prompt: "To prevent indirect energising of a circuit (Reg 314), the installation should be:",
              options: {
                A: "Reduced in starting current",
                B: "Designed for power factor",
                C: "Divided into circuits with appropriate isolation",
                D: "Provided with safety services only"
              },
              answer: "C",
              explanation: "Reg 314 — divide the installation into circuits so that each can be isolated independently and a fault in one can't energise another via shared neutrals or links. This is the fundamental design step that prevents indirect energising."
            },
            {
              number: 11,
              prompt: "Automatic disconnection of supply (ADS) requires fault protection alongside:",
              options: {
                A: "Basic protection only",
                B: "Overload protection only",
                C: "Fire protection",
                D: "Bonding of extraneous-conductive-parts"
              },
              answer: "D",
              explanation: "ADS depends on protective equipotential bonding to reduce touch voltages between exposed parts and extraneous parts during a fault. The protective device disconnects, but bonding limits the touch voltage during the disconnection time."
            },
            {
              number: 12,
              prompt: "Where alternative sources of supply are present, what must be applied?",
              options: {
                A: "A warning notice at every point of isolation (Reg 514.15.1)",
                B: "A barrier at all points of isolation",
                C: "A warning notice on documentation only",
                D: "No requirement"
              },
              answer: "A",
              explanation: "Reg 514.15 — where a generator, PV inverter or battery may energise the installation independently of the main supply, a warning notice must be at every point of isolation telling anyone working downstream that the supply may still be live."
            },
            {
              number: 13,
              prompt: "For all circuits in a bath/shower room (and circuits passing through Zones 1/2), the residual current of the additional-protection RCD must be:",
              options: {
                A: "30 mA",
                B: "300 mA",
                C: "500 mA",
                D: "100 mA"
              },
              answer: "A",
              explanation: "Section 701 — all LV circuits in a bath/shower room (and any circuit passing through Zones 1 or 2) require additional protection by a 30 mA RCD. 100/300/500 mA RCDs are for fire and earth-fault protection on distribution circuits."
            },
            {
              number: 14,
              prompt: "Diversity is applied when determining:",
              options: {
                A: "Exposure to external influences",
                B: "Compatibility of equipment",
                C: "Maintainability",
                D: "Maximum demand"
              },
              answer: "D",
              explanation: "Diversity is the engineering judgement that not every load runs at full power simultaneously — applied when calculating maximum demand for cable / device sizing. OSG Appendix A gives standard diversity factors for domestic loads."
            },
            {
              number: 15,
              prompt: "An installation reliant on all exposed-conductive-parts being connected to a local independent earth electrode is which earthing arrangement?",
              options: {
                A: "TN-C",
                B: "TN-S",
                C: "TN-C-S",
                D: "TT"
              },
              answer: "D",
              explanation: "TT — installation has its own earth electrode independent of the supply source. TN systems all use the source earth (delivered separately in TN-S, combined-then-split in TN-C-S, or combined throughout in TN-C)."
            },
            {
              number: 16,
              prompt: "Separate neutral and protective conductors maintained throughout the installation indicates:",
              options: {
                A: "TN-C-S",
                B: "TN-C",
                C: "TT",
                D: "TN-S"
              },
              answer: "D",
              explanation: "TN-S = separate neutral and PE all the way back to the source. TN-C-S has them combined as PEN to the cut-out then split (PME). TN-C has them combined throughout (rare in dwellings). TT has no source PE."
            },
            {
              number: 17,
              prompt: "A conductor intended to be energised in normal use is:",
              options: {
                A: "A live part",
                B: "A bonding conductor",
                C: "Insulation",
                D: "The MET"
              },
              answer: "A",
              explanation: "BS 7671 Part 2 — a 'live part' is a conductor or conductive part intended to be energised in normal use, including a neutral conductor (but not a PEN conductor)."
            },
            {
              number: 18,
              prompt: "A 40 A final circuit on a 230 V TN system has a maximum disconnection time of:",
              options: {
                A: "5 s",
                B: "0.4 s",
                C: "1 s",
                D: "0.2 s"
              },
              answer: "A",
              explanation: "Reg 411.3.2 — on a 230 V TN system, 0.4 s applies to final circuits up to 63 A with socket-outlets, or up to 32 A for fixed equipment only. A 40 A final circuit with no socket-outlet stated is treated as a final circuit exceeding 32 A, so the maximum disconnection time is 5 s."
            },
            {
              number: 19,
              prompt: "Which must NOT be used as a circuit protective conductor in normal practice?",
              options: {
                A: "Metallic cable management system designed and installed for the purpose",
                B: "Exposed structural steel as the sole CPC",
                C: "A conductor in a multicore cable",
                D: "A separate single-core conductor"
              },
              answer: "B",
              explanation: "Reg 543.2.6 — extraneous-conductive-parts may be used as a CPC under strict conditions (continuity, removability, identification). General exposed structural steel doesn't satisfy these conditions in normal practice; it must be bonded but not relied on as the CPC."
            },
            {
              number: 20,
              prompt: "Which person type can have additional protection omitted on socket outlets (with a documented risk assessment)?",
              options: {
                A: "BA2",
                B: "BA3",
                C: "BA5",
                D: "BA1"
              },
              answer: "C",
              explanation: "BS 7671 Appendix 5 — BA codes: BA1 ordinary, BA2 children, BA3 disabled, BA4 instructed, BA5 skilled. Reg 411.3.3 lets the 30 mA RCD on socket outlets be omitted on a documented risk assessment for sockets used by BA5 skilled persons only."
            },
            {
              number: 21,
              prompt: "Semiconductor devices may be used as isolating devices:",
              options: {
                A: "If they have adequate mechanical protection",
                B: "If they form part of an installation",
                C: "Never — they cannot provide an isolating contact gap (Reg 537.2.2)",
                D: "If they have adequate insulation"
              },
              answer: "C",
              explanation: "Reg 537.2.2 — isolation must achieve a contact gap or equivalent insulation between separated parts. Semiconductor devices (thyristors, IGBTs) cannot provide that physical separation; they're suitable for switching only."
            },
            {
              number: 22,
              prompt: "Which is NOT a valid wiring system for safety services?",
              options: {
                A: "PVC conduit (no fire-rated capability)",
                B: "Wiring system maintaining the necessary fire and mechanical protection",
                C: "Fire-resistant cables",
                D: "Mineral-insulated cable"
              },
              answer: "A",
              explanation: "Section 560 / Reg 560.8 — safety service wiring must maintain its function during a fire. PVC conduit melts and the cable inside loses support and insulation, so it can't be used. Mineral insulated and fire-resistant cables retain integrity."
            },
            {
              number: 23,
              prompt: "Following an initial verification of rented accommodation, who issues and who receives the documentation?",
              options: {
                A: "Either the designer, installer or inspector — and the person who ordered the work (typically the landlord)",
                B: "The designer and the tenant",
                C: "The installer and the tenant",
                D: "The DNO and the tenant"
              },
              answer: "A",
              explanation: "BS 7671 Chapter 64 — the EIC is signed by designer, constructor and inspector (one person can sign multiple boxes) and issued to the person who ordered the work. The original goes to the duty holder; the contractor keeps a copy."
            },
            {
              number: 24,
              prompt: "Where a wiring system passes through a fire-resisting building element, the minimum internal cross-sectional area before internal sealing is required is:",
              options: {
                A: "45 mm²",
                B: "90 mm²",
                C: "500 mm²",
                D: "710 mm²"
              },
              answer: "B",
              explanation: "Reg 527.2.4 — internal sealing of the wiring system is required where the internal cross-sectional area of the system exceeds 90 mm². Below that, the system itself is regarded as adequately self-sealing and only external fire stopping is needed."
            },
            {
              number: 25,
              prompt: "A building constructed mainly of combustible materials is classed as:",
              options: {
                A: "CB2",
                B: "CA2",
                C: "CB1",
                D: "CA1"
              },
              answer: "B",
              explanation: "BS 7671 Appendix 5 — CA codes for construction material: CA1 = non-combustible; CA2 = combustible. CB codes are for building design (BD codes are evacuation difficulty). A timber-frame house is CA2."
            },
            {
              number: 26,
              prompt: "The IR test voltage for an LV final circuit at 230 V is:",
              options: {
                A: "250 V d.c.",
                B: "500 V d.c.",
                C: "1000 V d.c.",
                D: "230 V a.c."
              },
              answer: "B",
              explanation: "BS 7671 Table 64 / GN3 — for nominal voltages 50–500 V (LV), the insulation test voltage is 500 V d.c. and the minimum acceptable IR is 1.0 MΩ."
            },
            {
              number: 27,
              prompt: "Acceptable insulation resistance (IR) for an LV final circuit (BS 7671) is:",
              options: {
                A: "≥ 0.1 MΩ",
                B: "≥ 0.5 MΩ",
                C: "≥ 1 MΩ",
                D: "≥ 10 MΩ"
              },
              answer: "C",
              explanation: "BS 7671 — minimum acceptable IR for LV ≥ 1.0 MΩ. Some industry guidance recommends 100 MΩ for 'good' insulation; the 1 MΩ figure is the BS 7671 acceptance limit."
            },
            {
              number: 28,
              prompt: "Ring final continuity test step 'r1+r2' measures:",
              options: {
                A: "End-to-end continuity of line and CPC, summed via series testing",
                B: "Insulation between L and N",
                C: "Polarity at the socket",
                D: "Earth electrode resistance"
              },
              answer: "A",
              explanation: "GN3 ring test step 1 — measure end-to-end continuity of line (r1), neutral (rn) and CPC (r2) by testing across each leg of the ring at the consumer unit. Subsequent steps confirm the ring is correctly formed."
            },
            {
              number: 29,
              prompt: "When testing a ring at every socket, the worst-case (R1+R2) reading should be approximately:",
              options: {
                A: "Half the loop value at the centre and equal at the ends",
                B: "(r1+r2)/4 at the centre, rising at the ends",
                C: "(r1+r2)/4 at the midpoint and at the ends — should not vary more than slightly around that figure",
                D: "Always zero"
              },
              answer: "C",
              explanation: "GN3 — once the ring is parallel-connected at the CU, the worst-case R1+R2 across any socket should be (r1+r2)/4. Significant variation indicates a break or wrong cross-connection in the ring."
            },
            {
              number: 30,
              prompt: "On a TN-C-S system the maximum permitted Zs for additional protection by a 30 mA RCD must comply with (Reg 411.5):",
              options: {
                A: "Zs × IΔn ≤ 50 V (limit on touch voltage)",
                B: "Zs × IΔn ≤ 230 V",
                C: "Zs ≤ 0.35 Ω always",
                D: "No limit"
              },
              answer: "A",
              explanation: "Reg 411.4.4 / 411.5.3 — for the touch voltage to remain ≤ 50 V during a fault, Zs × IΔn ≤ 50 V. For a 30 mA RCD the calculated maximum Zs is 50/0.030 = 1667 Ω theoretically, but practical limits apply."
            }
          ]
        },
        {
          id: "v3",
          questions: [
            {
              number: 1,
              prompt: "On a TT installation a 30 mA RCD will provide:",
              options: {
                A: "Fault protection (ADS) and additional protection",
                B: "Only basic protection",
                C: "Only emergency switching",
                D: "Only additional protection on socket outlets"
              },
              answer: "A",
              explanation: "On TT systems the RCD typically provides both functions: fault protection (because the earth electrode resistance is too high for an MCB to clear in 0.2 s) and additional protection against direct contact (where IΔn ≤ 30 mA)."
            },
            {
              number: 2,
              prompt: "An IT system requires which monitoring device to detect the first earth fault?",
              options: {
                A: "Insulation monitoring device (IMD)",
                B: "Voltmeter on each line only",
                C: "AFDD",
                D: "30 mA RCD only"
              },
              answer: "A",
              explanation: "Reg 411.6 — IT systems must have an IMD (insulation monitoring device) that signals the first insulation fault to earth. After the first fault the system continues operating; a second fault on a different line must trip the protection."
            },
            {
              number: 3,
              prompt: "An RCBO is a device that:",
              options: {
                A: "Combines an RCD with overcurrent protection (overload + short-circuit) in a single device",
                B: "Combines an MCB with an SPD",
                C: "Combines an MCB with an AFDD only",
                D: "Combines a switch with a fuse"
              },
              answer: "A",
              explanation: "BS EN 61009 — RCBO combines residual-current detection with overcurrent (overload + short-circuit) protection. It enables per-circuit RCD discrimination from the consumer unit."
            },
            {
              number: 4,
              prompt: "A 30 mA RCD must trip within how long when tested at IΔn (full residual current)?",
              options: {
                A: "≤ 200 ms",
                B: "≤ 300 ms (for general type, BS EN 61008/61009)",
                C: "≤ 1 s",
                D: "≤ 5 s"
              },
              answer: "B",
              explanation: "BS EN 61008/61009 — general-purpose RCDs at IΔn (rated residual current): trip ≤ 300 ms. At 5 × IΔn it should be ≤ 40 ms — a much faster trip ensures safety on direct-contact additional-protection scenarios."
            },
            {
              number: 5,
              prompt: "RCD test at 5 × IΔn should disconnect within:",
              options: {
                A: "≤ 40 ms",
                B: "≤ 200 ms",
                C: "≤ 300 ms",
                D: "≤ 5 s"
              },
              answer: "A",
              explanation: "GN3 RCD testing — at 5 × IΔn the trip time should be ≤ 40 ms to ensure rapid disconnection on direct-contact scenarios. This is the test that confirms the RCD provides additional protection (within the expected human heart-cycle window)."
            },
            {
              number: 6,
              prompt: "Bonding sizing for a TN-C-S installation with a 35 mm² supply neutral (Cu) is:",
              options: {
                A: "6 mm²",
                B: "10 mm²",
                C: "16 mm²",
                D: "25 mm²"
              },
              answer: "B",
              explanation: "Table 54.8 — supply neutral CSA up to 35 mm² → main bonding 10 mm² Cu. The next steps are 50 mm² N → 16 mm², 70/95 N → 25 mm², 120 N → 35 mm², ≥ 150 N → 50 mm²."
            },
            {
              number: 7,
              prompt: "On a non-PME (TN-S/TT) installation, the minimum copper main bonding conductor is:",
              options: {
                A: "2.5 mm²",
                B: "6 mm²",
                C: "16 mm²",
                D: "25 mm²"
              },
              answer: "B",
              explanation: "Reg 544.1.1 — non-PME main bonding sized at half the earthing conductor CSA, with a minimum of 6 mm² Cu and a maximum of 25 mm² Cu."
            },
            {
              number: 8,
              prompt: "Voltage drop on a 30 m run of 2.5 mm² Cu T&E carrying 16 A on a public LV supply (single-phase) is approximately:",
              options: {
                A: "≈ 8.6 V (3.7%)",
                B: "≈ 4.3 V (1.9%)",
                C: "≈ 14 V (6.1%)",
                D: "≈ 1 V (0.5%)"
              },
              answer: "A",
              explanation: "2.5 mm² ≈ 18 mV/A/m. V = (18 × 16 × 30)/1000 = 8.64 V ≈ 3.76%. This exceeds the 3% lighting limit but is within the 5% other-uses limit on a public LV supply."
            },
            {
              number: 9,
              prompt: "Cables hidden in walls/partitions less than 50 mm deep, NOT in safe zones, NOT mechanically protected, NOT earthed-sheath, must:",
              options: {
                A: "Be on a 30 mA RCD-protected circuit and run in safe zones",
                B: "Be on a 30 mA RCD AND have one of mechanical protection / earthed metallic sheath / earthed conduit",
                C: "Be at any depth provided not RCD'd",
                D: "Have no specific requirement"
              },
              answer: "B",
              explanation: "Reg 522.6.202 — outside safe zones the cable needs an earthed metallic covering / mechanical protection / appropriate construction PLUS the circuit is on a 30 mA RCD. Inside safe zones, the cable can be on a 30 mA RCD alone."
            },
            {
              number: 10,
              prompt: "Section 540 covers:",
              options: {
                A: "Earthing arrangements and protective conductors (general principles for all installations)",
                B: "Wiring systems",
                C: "Identification and notices",
                D: "Inspection and testing"
              },
              answer: "A",
              explanation: "Section 540 (Chapter 54) — earthing arrangements and protective conductors, including the MET, the protective bonding network and the sizing rules for earthing conductors."
            },
            {
              number: 11,
              prompt: "A test instrument used to measure earth fault loop impedance Zs typically applies a test current of approximately:",
              options: {
                A: "0.1 A",
                B: "10 mA",
                C: "10–25 A (high-current loop test) or 'no-trip' lower-current test where RCD-protected",
                D: "1 mA"
              },
              answer: "C",
              explanation: "Loop tester — high-current test injects 10–25 A briefly; on RCD-protected circuits a 'no-trip' lower-current test is used to avoid tripping the RCD during measurement."
            },
            {
              number: 12,
              prompt: "An EICR is which type of report?",
              options: {
                A: "Initial verification certificate",
                B: "Periodic inspection condition report (Chapter 65)",
                C: "Minor works certificate",
                D: "Test instrument calibration certificate"
              },
              answer: "B",
              explanation: "Chapter 65 — Electrical Installation Condition Report. Issued after a periodic inspection. Each observation is graded C1 (danger), C2 (potential danger), C3 (improvement recommended) or FI (further investigation)."
            },
            {
              number: 13,
              prompt: "Which observation code on an EICR represents 'danger present, immediate action required'?",
              options: {
                A: "C1",
                B: "C2",
                C: "C3",
                D: "FI"
              },
              answer: "A",
              explanation: "EICR coding — C1: immediate danger (e.g. exposed live conductors). C2: potentially dangerous (e.g. missing earth). C3: improvement recommended. FI: further investigation needed without delay."
            },
            {
              number: 14,
              prompt: "An installation where the consumer's earth is provided by a separate metallic conductor from source to MET (no PEN combining) is:",
              options: {
                A: "TN-C-S",
                B: "TN-C",
                C: "TN-S",
                D: "TT"
              },
              answer: "C",
              explanation: "TN-S — separate neutral and earth all the way from source to consumer (typical legacy cable-sheath earth). TN-C-S = combined PEN to cut-out then split (PME). TT = no source earth."
            },
            {
              number: 15,
              prompt: "Why is regular periodic inspection necessary?",
              options: {
                A: "Because installations deteriorate over time and may have undergone unauthorised alterations",
                B: "Because BS 7671 changes every year",
                C: "Because IR test results always increase over time",
                D: "Because Zs always decreases over time"
              },
              answer: "A",
              explanation: "Reg 651 — installations deteriorate, get modified or extended (sometimes incorrectly), and external influences change. Periodic inspection identifies deterioration and unauthorised alterations before they become hazards."
            },
            {
              number: 16,
              prompt: "Which is NOT a valid type of fault protection (Section 411)?",
              options: {
                A: "Automatic disconnection of supply",
                B: "Class II equipment / equivalent insulation",
                C: "Electrical separation",
                D: "Functional switching"
              },
              answer: "D",
              explanation: "Functional switching is for normal operation, not fault protection. Recognised fault-protection measures: ADS (411), double/reinforced insulation Class II (412), electrical separation (413), SELV/PELV (414)."
            },
            {
              number: 17,
              prompt: "On a 30 m run of 1.5 mm² T&E carrying 10 A — voltage drop on a public LV supply is approximately:",
              options: {
                A: "≈ 2 V (0.9%)",
                B: "≈ 4.5 V (2%)",
                C: "≈ 8.7 V (3.8%)",
                D: "≈ 13 V (5.7%)"
              },
              answer: "C",
              explanation: "1.5 mm² ≈ 29 mV/A/m. V = (29 × 10 × 30)/1000 = 8.7 V ≈ 3.78%. Within the 5% other-uses public LV limit, but over the 3% lighting limit."
            },
            {
              number: 18,
              prompt: "BS 7671 'Reduced Low Voltage' (110 V CTE) on a construction site provides:",
              options: {
                A: "55 V to earth, halving touch voltage hazard for portable hand tools",
                B: "110 V to earth",
                C: "230 V phase-to-phase",
                D: "Same hazard as 230 V"
              },
              answer: "A",
              explanation: "Section 704 — 110 V CTE = centre-tapped earth, giving 55 V from each line conductor to earth. Touch voltage on a single fault is 55 V, well below the 50 V conventional limit (low margin but within practical limits)."
            },
            {
              number: 19,
              prompt: "Which device is rated to BS EN 61439-4?",
              options: {
                A: "Construction-site distribution assembly",
                B: "Consumer unit",
                C: "Industrial socket",
                D: "Cable trunking system"
              },
              answer: "A",
              explanation: "BS EN 61439-4 covers assemblies for construction sites (ACS) — the robust IP44/IK10 distribution boards used to provide 110 V CTE and 230 V/400 V outlets on-site."
            },
            {
              number: 20,
              prompt: "Which Section governs proximity of cabling to other services (e.g. gas, water, telecommunications)?",
              options: {
                A: "Section 411",
                B: "Section 528",
                C: "Section 543",
                D: "Section 712"
              },
              answer: "B",
              explanation: "Reg 528 covers proximity of wiring systems to non-electrical services (gas, water, mechanical pipework, signal cables) and segregation between voltage Bands I and II."
            },
            {
              number: 21,
              prompt: "An additional protective measure of 30 mA RCD is required for cables buried in walls less than:",
              options: {
                A: "10 mm",
                B: "30 mm",
                C: "50 mm",
                D: "100 mm"
              },
              answer: "C",
              explanation: "Reg 522.6.202 — cables concealed in walls/partitions at depths < 50 mm need 30 mA RCD additional protection unless they are mechanically protected or in an earthed metallic sheath/conduit."
            },
            {
              number: 22,
              prompt: "Reg 411.3.3 — additional protection by 30 mA RCD is required on:",
              options: {
                A: "Socket outlets up to 32 A and mobile equipment up to 32 A used outdoors",
                B: "Only outdoor socket outlets",
                C: "Only socket outlets in dwellings",
                D: "Only sockets above 32 A"
              },
              answer: "A",
              explanation: "Reg 411.3.3 — 30 mA RCD additional protection for socket outlets up to 32 A in general use, and on mobile equipment up to 32 A used outdoors. Limited exceptions (e.g. BA5 skilled use with documented risk assessment)."
            },
            {
              number: 23,
              prompt: "Which protective measure ensures that in the event of insulation failure, no exposed-conductive-part can attain a hazardous touch voltage long enough to cause harm?",
              options: {
                A: "Automatic Disconnection of Supply (ADS)",
                B: "Functional switching",
                C: "Electrical separation",
                D: "SELV"
              },
              answer: "A",
              explanation: "ADS is the protective measure designed to disconnect the supply within prescribed times so that any touch voltage on exposed-conductive-parts is not maintained long enough to be dangerous (Reg 411.3.2)."
            },
            {
              number: 24,
              prompt: "An 'extraneous-conductive-part' is defined in Part 2 as:",
              options: {
                A: "A conductive part that is not part of the electrical installation but liable to introduce a potential (typically Earth potential)",
                B: "Any external building element",
                C: "An aluminium window frame only",
                D: "A free-standing kitchen appliance"
              },
              answer: "A",
              explanation: "Part 2 — extraneous-conductive-parts include incoming gas/water service pipes, structural metalwork in contact with earth, etc. They are bonded to the MET so they cannot import a different potential."
            },
            {
              number: 25,
              prompt: "What is recorded under 'methods of fault protection' on the Schedule of Inspections?",
              options: {
                A: "ADS, double/reinforced insulation, electrical separation, SELV/PELV",
                B: "RCD type only",
                C: "Cable colour only",
                D: "Type of consumer unit"
              },
              answer: "A",
              explanation: "Schedule of Inspections — fault protection methods are recorded by ticking the appropriate boxes for ADS, Class II, electrical separation, SELV, etc., as actually used in the installation."
            },
            {
              number: 26,
              prompt: "Where would a designer record the circuit's measured Zs?",
              options: {
                A: "Schedule of Test Results",
                B: "Schedule of Inspections",
                C: "Cover of the EIC",
                D: "Operating manual"
              },
              answer: "A",
              explanation: "Schedule of Test Results (Appendix 6) — captures the measured circuit values: continuity, IR, polarity, Zs, RCD trip times. The Schedule of Inspections is qualitative (yes/no/limit applies)."
            },
            {
              number: 27,
              prompt: "An IR test on a final circuit between L–N must be carried out at:",
              options: {
                A: "500 V d.c. and the result ≥ 1 MΩ",
                B: "230 V a.c.",
                C: "1 V d.c.",
                D: "1000 V d.c. on lighting circuits"
              },
              answer: "A",
              explanation: "BS 7671 / GN3 — for 50–500 V supply: 500 V d.c. test, ≥ 1 MΩ acceptance. SELV/PELV uses 250 V d.c.; > 500 V uses 1000 V d.c."
            },
            {
              number: 28,
              prompt: "When a circuit is tested with an electronic device connected (e.g. dimmer, switched-mode supply), the IR test should:",
              options: {
                A: "Be carried out with sensitive electronic equipment disconnected to avoid damage",
                B: "Always include the equipment energised",
                C: "Use 1000 V d.c.",
                D: "Be omitted entirely"
              },
              answer: "A",
              explanation: "GN3 — disconnect or short-circuit live conductors as recommended for vulnerable electronics; the 500 V d.c. test can damage their internal components. Where this is impossible, the test may be carried out at 250 V d.c. or accepted with manufacturer guidance."
            },
            {
              number: 29,
              prompt: "Which recorded measurement on the Schedule of Test Results confirms the earth fault path is sound?",
              options: {
                A: "Zs",
                B: "IR L-N",
                C: "R1+R2",
                D: "Both R1+R2 and Zs (R1+R2 confirms cabling continuity; Zs confirms whole-loop including supply)"
              },
              answer: "D",
              explanation: "R1+R2 (line + CPC continuity) confirms the in-installation portion. Zs (loop) confirms the whole earth fault path, including the supply impedance Ze. Both are recorded for a complete picture."
            },
            {
              number: 30,
              prompt: "A circuit is RCD-protected and the loop tester is set to 'no trip' mode. Why?",
              options: {
                A: "To allow Zs measurement without operating the RCD by injecting a smaller test current",
                B: "To force the RCD to trip",
                C: "To increase the test voltage",
                D: "To bypass the CPC"
              },
              answer: "A",
              explanation: "Loop testers offer a 'no trip' (low-current) test for RCD-protected circuits — the test injects a smaller pulse so that the RCD does not trip during the loop measurement. Higher-current tests would trip the RCD."
            }
          ]
        },
        {
          id: "v4",
          questions: [
            {
              number: 1,
              prompt: "An installation supplied at 230 V from a TN-C-S source with declared Ze of 0.35 Ω. A 32 A Type B MCB with cable R1+R2 of 0.6 Ω: Zs is approximately:",
              options: {
                A: "0.25 Ω",
                B: "0.95 Ω",
                C: "0.6 Ω",
                D: "1.95 Ω"
              },
              answer: "B",
              explanation: "Zs = Ze + R1+R2 = 0.35 + 0.6 = 0.95 Ω. Compare against Table 41.3 max Zs for Type B 32 A (1.37 Ω) — comfortably under the limit."
            },
            {
              number: 2,
              prompt: "A Type C 16 A MCB on a 230 V TN system at 0.4 s — maximum permitted Zs (Table 41.3) is approximately:",
              options: {
                A: "0.55 Ω",
                B: "1.37 Ω",
                C: "1.83 Ω",
                D: "2.87 Ω"
              },
              answer: "B",
              explanation: "Type C 16 A: Ia = 10 × 16 = 160 A. Zs = (0.95 × 230)/160 ≈ 1.37 Ω. Same maximum Zs as a Type B 32 A — highlighting that Type C devices need lower Zs for a given rating than Type B."
            },
            {
              number: 3,
              prompt: "Type 1 SPDs are characterised by their:",
              options: {
                A: "Imp (impulse current rating, 10/350 µs)",
                B: "In (8/20 µs)",
                C: "Up only",
                D: "DC voltage rating"
              },
              answer: "A",
              explanation: "Type 1 SPDs are characterised by Iimp (the 10/350 µs impulse). Type 2 are characterised by In (8/20 µs). The rated voltage Uc, the protection level Up and the temporary overvoltage UT all apply across the types."
            },
            {
              number: 4,
              prompt: "An EV charge point's Type B RCD detects:",
              options: {
                A: "Only AC residuals",
                B: "AC, pulsating DC, multi-frequency and smooth DC residuals",
                C: "Only smooth DC",
                D: "Only multi-frequency residuals"
              },
              answer: "B",
              explanation: "Type B RCDs are sensitive to all of: AC sinusoidal, pulsating DC, multi-frequency, and smooth DC residuals. They are required (or equivalent Type A + RDC-DD) on EV charge points where a fault could inject smooth DC."
            },
            {
              number: 5,
              prompt: "Touch voltage limit (UL) for normal locations is:",
              options: {
                A: "25 V a.c.",
                B: "50 V a.c.",
                C: "120 V a.c.",
                D: "230 V a.c."
              },
              answer: "B",
              explanation: "Conventional touch voltage limit UL = 50 V a.c. for general locations. Lower in special locations (25 V in livestock environments, lower again in pool zones)."
            },
            {
              number: 6,
              prompt: "Which is NOT a recognised method of basic protection?",
              options: {
                A: "Insulation of live parts",
                B: "Barriers and enclosures",
                C: "Obstacles",
                D: "Use of an SPD"
              },
              answer: "D",
              explanation: "SPDs are surge protective devices (Section 443/534), not a basic protection measure. Section 416/417 lists basic-protection methods: insulation of live parts, barriers/enclosures, obstacles, placing out of reach."
            },
            {
              number: 7,
              prompt: "The maximum permitted Zs for a 6 A BS 88-3 fuse on a 0.4 s disconnection time at 230 V (Table 41.4) is approximately:",
              options: {
                A: "8.06 Ω",
                B: "1.6 Ω",
                C: "0.728 Ω",
                D: "0.32 Ω"
              },
              answer: "A",
              explanation: "Table 41.4 (BS 88-3) — at 6 A 0.4 s, Zs ≈ 8.06 Ω (low overload current at this rating). The figure for 32 A at 5 s on the same fuse type is 1.6 Ω."
            },
            {
              number: 8,
              prompt: "A construction-site distribution assembly typically requires:",
              options: {
                A: "BS EN 61439-4 compliance with appropriate IP and IK ratings (often IP44 / IK08 minimum)",
                B: "BS 1363 only",
                C: "BS EN 50525 only",
                D: "BS EN 60898 only"
              },
              answer: "A",
              explanation: "Section 704 / BS EN 61439-4 — assemblies for construction sites (ACS). Robust enclosure (typically IP44 outdoors, IP54 in wet) and IK08 minimum mechanical impact resistance."
            },
            {
              number: 9,
              prompt: "Reg 411.4.3 specifies that earthing arrangements (TN) for ADS shall include:",
              options: {
                A: "Conductors and connections suitable for the prospective fault current and protective device characteristics",
                B: "Only TN-S",
                C: "Only TN-C",
                D: "Only TT"
              },
              answer: "A",
              explanation: "Reg 411.4.3 — for TN systems, the earthing arrangement (CPCs, MET, source earth) must allow the protective device to disconnect within the time limits of Reg 411.3.2 for the relevant prospective fault current."
            },
            {
              number: 10,
              prompt: "A standard ring final circuit using 2.5/1.5 T&E protected by a 32 A device has a maximum permitted total length (under standard conditions) of approximately:",
              options: {
                A: "30 m",
                B: "50 m",
                C: "106 m (typical OSG figure for the ring)",
                D: "200 m"
              },
              answer: "C",
              explanation: "OSG Section 7 / Appendix 15 — for a 32 A ring final circuit using 2.5/1.5 T&E, the typical maximum length is around 106 m (depending on the supply Ze and reference method). Longer rings need a voltage-drop check."
            },
            {
              number: 11,
              prompt: "Reg 411.3.4 — additional protection on AC final circuits supplying luminaires applies to:",
              options: {
                A: "Domestic (household) premises only",
                B: "Industrial premises only",
                C: "Commercial premises only",
                D: "All premises"
              },
              answer: "A",
              explanation: "Reg 411.3.4 — applies specifically to AC final circuits supplying luminaires within domestic (household) premises."
            },
            {
              number: 12,
              prompt: "On a TT installation, a 100 mA time-delayed (S-type) RCD is often used at the origin to:",
              options: {
                A: "Provide selectivity with downstream 30 mA RCDs and offer overall earth-fault protection",
                B: "Provide additional protection on socket outlets",
                C: "Replace the main switch",
                D: "Replace overcurrent protection"
              },
              answer: "A",
              explanation: "100 mA S-type at origin gives whole-installation earth-fault protection on TT, and selects with downstream 30 mA RCDs (which trip first for a final-circuit fault). The S-type's intentional delay allows the downstream device to operate without unnecessary main-switch tripping."
            },
            {
              number: 13,
              prompt: "Selectivity (or discrimination) between two RCDs in series requires:",
              options: {
                A: "Upstream RCD with higher IΔn AND a time delay (S-type)",
                B: "Two equal IΔn devices",
                C: "Upstream device that is faster",
                D: "Single-pole device only"
              },
              answer: "A",
              explanation: "Reg 536.4.1 — selectivity between RCDs in series requires the upstream device to have a higher IΔn (typically 3 ×) AND a time delay (S-type). Otherwise both RCDs may trip on a fault."
            },
            {
              number: 14,
              prompt: "For a domestic ring final circuit using 2.5/1.5 T&E and a 32 A Type B MCB with declared Ze 0.8 Ω, the cable contribution R1+R2 must not exceed about:",
              options: {
                A: "0.57 Ω (giving Zs ≈ 1.37 Ω)",
                B: "1.37 Ω (the device's max Zs)",
                C: "0.35 Ω",
                D: "Unlimited"
              },
              answer: "A",
              explanation: "Type B 32 A max Zs = 1.37 Ω. With Ze 0.8 Ω, R1+R2 ≤ 1.37 − 0.8 = 0.57 Ω. (For a TN-C-S supply with declared Ze 0.35 Ω, R1+R2 could be up to ~1.0 Ω.)"
            },
            {
              number: 15,
              prompt: "A 32 A Type B 30 mA RCBO on a 230 V TN-C-S supply with declared Ze 0.35 Ω — calculated maximum Zs (Table 41.3) is approximately:",
              options: {
                A: "1.37 Ω",
                B: "0.55 Ω",
                C: "0.91 Ω",
                D: "Limited by RCD touch-voltage rather than Type B Zs"
              },
              answer: "A",
              explanation: "Type B 32 A: tabulated 0.4 s max Zs = 1.37 Ω. With a 30 mA RCD also present, the touch-voltage limit on Zs is 50/0.030 = 1667 Ω — the MCB constraint is much tighter and dominates the design."
            },
            {
              number: 16,
              prompt: "A 50 mm² Cu line conductor on a TN system requires what minimum CSA same-material protective conductor (Table 54.7)?",
              options: {
                A: "16 mm²",
                B: "25 mm²",
                C: "35 mm²",
                D: "50 mm²"
              },
              answer: "B",
              explanation: "S > 35 mm² → CPC = S/2 = 25 mm². Table 54.7."
            },
            {
              number: 17,
              prompt: "Adiabatic equation S = √(I² × t) / k is used in Reg 543.1.4 to:",
              options: {
                A: "Verify a chosen protective conductor CSA can withstand the fault current and time without exceeding its limiting temperature",
                B: "Calculate voltage drop",
                C: "Calculate maximum demand",
                D: "Calculate insulation resistance"
              },
              answer: "A",
              explanation: "Adiabatic check: S ≥ √(I² × t)/k. The protective conductor's CSA must be sufficient that, for the fault current I and disconnection time t, the conductor temperature stays below the limit (k value depends on insulation and material)."
            },
            {
              number: 18,
              prompt: "The k value used in the adiabatic equation depends on:",
              options: {
                A: "Conductor material (Cu/Al), the insulation type, and the initial and final temperatures",
                B: "Cable colour only",
                C: "Earth electrode resistance",
                D: "Voltage drop"
              },
              answer: "A",
              explanation: "Table 54.2/54.3 — k values for protective conductors. PVC-insulated Cu PE in cable assembly: k = 115. Bare Cu: k = 159. PVC Al: k = 76. Different insulations change the limiting temperature and hence k."
            },
            {
              number: 19,
              prompt: "An installation in a fire-risk environment (Section 422) requires:",
              options: {
                A: "Cable wiring systems compatible with the fire-risk classification (e.g. low fire-load, fire-stopping at penetrations, etc.)",
                B: "230 V supply only",
                C: "TT system only",
                D: "Single-pole switching"
              },
              answer: "A",
              explanation: "Reg 422 — installations in locations with fire risks. Wiring systems, equipment IP/fire ratings, and fire-stopping at penetrations through fire compartments must address the increased risk."
            },
            {
              number: 20,
              prompt: "An RCD whose IΔn is 30 mA is suitable for:",
              options: {
                A: "Additional protection (Reg 411.3.3) and for fault protection where the touch-voltage limit applies",
                B: "Only overload protection",
                C: "Only short-circuit protection",
                D: "Only emergency switching"
              },
              answer: "A",
              explanation: "30 mA RCDs serve both functions: additional protection against direct contact (Reg 415.1) and fault protection on systems where ADS via overcurrent is impossible (Reg 411.5)."
            },
            {
              number: 21,
              prompt: "An accessible isolation device for a circuit must:",
              options: {
                A: "Disconnect every live conductor with adequate contact gap and not be capable of inadvertent reconnection",
                B: "Be a single-pole switch only",
                C: "Be a contactor only",
                D: "Be hidden from users"
              },
              answer: "A",
              explanation: "Reg 537.2.1 — isolation devices break every live conductor (including neutral on TT/IT and in some TN cases) and provide a means to prevent unintended reconnection during work."
            },
            {
              number: 22,
              prompt: "A 30 mA RCD's effective trip time at IΔn must be:",
              options: {
                A: "≤ 300 ms (general type) per BS EN 61008/61009",
                B: "≤ 5 s",
                C: "≤ 1 s always",
                D: "Unlimited"
              },
              answer: "A",
              explanation: "BS EN 61008/61009 — a general-purpose 30 mA RCD trips within 300 ms at IΔn. At 5 × IΔn, within 40 ms. Time-delayed S-type devices have intentional delays for selectivity."
            },
            {
              number: 23,
              prompt: "When testing an RCD at ½ × IΔn the device should:",
              options: {
                A: "NOT trip (passes the immunity check)",
                B: "Trip immediately",
                C: "Trip after 5 s",
                D: "Trip and reset automatically"
              },
              answer: "A",
              explanation: "GN3 RCD test — at ½ × IΔn the RCD should NOT trip. This confirms the device is not over-sensitive (which would cause nuisance tripping). At full IΔn it should trip, and at 5 × IΔn faster again."
            },
            {
              number: 24,
              prompt: "An 'Inspection and Testing' final report on an installation < 2 years old should be:",
              options: {
                A: "An EICR if performed during periodic inspection",
                B: "Always a Minor Works Certificate",
                C: "A receipt only",
                D: "An installation manual"
              },
              answer: "A",
              explanation: "Periodic inspection any time after the initial verification — even if the installation is recent — is documented on an EICR. An MWC documents minor works (additions/alterations not requiring a new circuit)."
            },
            {
              number: 25,
              prompt: "On a domestic dwelling using PME, who is responsible for the supply earthing arrangement up to the consumer's MET?",
              options: {
                A: "The DNO",
                B: "The consumer",
                C: "The contractor",
                D: "Building Control"
              },
              answer: "A",
              explanation: "The DNO provides and maintains the supply up to the consumer's earthing terminal. The consumer's installation downstream of the cut-out is the duty holder's responsibility."
            },
            {
              number: 26,
              prompt: "The OPEN-PEN protective device disconnects the:",
              options: {
                A: "Supply (all live conductors) when an open neutral is detected, preventing dangerous touch voltage on the EV body",
                B: "DNO supply at the substation",
                C: "Earth electrode only",
                D: "Surge protective device only"
              },
              answer: "A",
              explanation: "An open-PEN device on an EV charge point monitors voltages and disconnects all live conductors when it detects a likely PEN-fault condition (asymmetric L-PE/N-PE potential)."
            },
            {
              number: 27,
              prompt: "A PV installation operating at 600 V d.c. requires DC-side cabling that:",
              options: {
                A: "Is rated for the operating voltage at the lowest expected ambient temperature, with appropriate cable construction (e.g. PV1-F)",
                B: "Is standard PVC twin-and-earth",
                C: "Uses brown insulated single-core only",
                D: "Is bell wire"
              },
              answer: "A",
              explanation: "Section 712 — DC PV cabling needs UV-resistant, double-insulated construction (e.g. PV1-F) and a voltage rating that exceeds the worst-case Voc at minimum operating temperature."
            },
            {
              number: 28,
              prompt: "A Class II appliance:",
              options: {
                A: "Relies on double or reinforced insulation and has no earthed metalwork",
                B: "Relies on basic insulation and earthing",
                C: "Operates at SELV only",
                D: "Has an internal RCD"
              },
              answer: "A",
              explanation: "Class II — double or reinforced insulation. Identified by the double-square symbol. No earth connection is needed; the fault path concept is replaced by the inability of an insulation fault to expose the user to a live part."
            },
            {
              number: 29,
              prompt: "An exposed-conductive-part is:",
              options: {
                A: "A conductive part of equipment that can be touched and may become live during an insulation fault",
                B: "Any external metalwork",
                C: "A free-standing kitchen knife",
                D: "Only a structural beam"
              },
              answer: "A",
              explanation: "Part 2 — exposed-conductive-part: a conductive part of equipment that can be touched and is not normally live, but may become live in a fault. Hence the requirement for it to be connected to the CPC."
            },
            {
              number: 30,
              prompt: "Which is NOT one of the four categories of disconnection time on a TN system at 230 V?",
              options: {
                A: "0.1 s",
                B: "0.4 s for final circuits ≤ 32 A or sockets ≤ 63 A",
                C: "5 s for distribution circuits / fixed equipment > 32 A",
                D: "0.2 s for U₀ > 230 V circuits"
              },
              answer: "A",
              explanation: "Table 41.1 lists 0.4 s and 5 s for TN at 230 V; 0.2 s applies at U₀ > 230 V (e.g. 400 V circuits). 0.1 s is not a tabulated category."
            }
          ]
        },
        {
          id: "v5",
          questions: [
            {
              number: 1,
              prompt: "Section 132.1 — the design must be:",
              options: {
                A: "Such that the safety of persons, livestock and property is provided in the foreseeable use of the installation",
                B: "Aesthetically pleasing only",
                C: "Inexpensive",
                D: "Compatible with modern building materials only"
              },
              answer: "A",
              explanation: "Reg 131.1 / 132.1 — the fundamental safety duty: the installation must protect persons, livestock and property under foreseeable use, including against shock, fire, burns, mechanical movement and overvoltages."
            },
            {
              number: 2,
              prompt: "Section 421.1.7 'shall' premises include:",
              options: {
                A: "HRRBs, HMOs, purpose-built student accommodation, care homes",
                B: "All commercial premises",
                C: "Hotels only",
                D: "Construction sites"
              },
              answer: "A",
              explanation: "Reg 421.1.7 (A2:2022) — AFDDs are mandatory in those four categories of higher-risk premises. AFDDs are 'recommended' elsewhere."
            },
            {
              number: 3,
              prompt: "An installation that operates entirely from a battery and inverter (no public supply) is:",
              options: {
                A: "An island-mode system",
                B: "A continuous-parallel system",
                C: "A switched changeover system",
                D: "A SELV system"
              },
              answer: "A",
              explanation: "Section 826 / 551 — island mode means the installation operates entirely from the local source(s), disconnected from any public supply."
            },
            {
              number: 4,
              prompt: "A circuit's ring continuity test gives r1 = 0.4 Ω and r2 = 0.7 Ω. The expected R1+R2 across any socket is approximately:",
              options: {
                A: "0.275 Ω",
                B: "0.55 Ω",
                C: "1.1 Ω",
                D: "0.075 Ω"
              },
              answer: "A",
              explanation: "(r1 + r2)/4 = (0.4 + 0.7)/4 = 1.1/4 = 0.275 Ω. After parallel connection, every socket should read approximately this value (with small variation along the ring)."
            },
            {
              number: 5,
              prompt: "Which of the following defines 'fault protection' in BS 7671?",
              options: {
                A: "Protection against electric shock under fault conditions (e.g. by ADS, Class II, electrical separation)",
                B: "Protection against overcurrent only",
                C: "Protection against overvoltage only",
                D: "Protection against fire only"
              },
              answer: "A",
              explanation: "Part 2 / Section 410 — fault protection prevents harm from contact with an exposed-conductive-part that becomes live during a fault. Recognised methods: ADS, double or reinforced insulation, electrical separation, SELV/PELV."
            },
            {
              number: 6,
              prompt: "An installation supplied at U₀ > 230 V (e.g. 400 V phase-to-phase circuit on TN) — final-circuit disconnection time is:",
              options: {
                A: "0.2 s",
                B: "0.4 s",
                C: "5 s",
                D: "1 s"
              },
              answer: "A",
              explanation: "Table 41.1 — TN at U₀ > 230 V: 0.2 s. (At 230 V: 0.4 s for final circuits ≤ 32 A or sockets ≤ 63 A.)"
            },
            {
              number: 7,
              prompt: "A 30 mA RCD's nominal residual current is:",
              options: {
                A: "30 mA",
                B: "300 mA",
                C: "100 mA",
                D: "10 mA"
              },
              answer: "A",
              explanation: "By definition: a 30 mA RCD has IΔn = 30 mA, the rated residual operating current at which it must trip within the prescribed time."
            },
            {
              number: 8,
              prompt: "The IR test for a 230 V final circuit is:",
              options: {
                A: "500 V d.c. test, ≥ 1 MΩ",
                B: "230 V a.c. test, ≥ 100 MΩ",
                C: "1000 V d.c. test, ≥ 1 MΩ",
                D: "100 V d.c. test, ≥ 1 MΩ"
              },
              answer: "A",
              explanation: "BS 7671 / GN3 — 50–500 V supply: 500 V d.c. test, ≥ 1.0 MΩ acceptance. SELV uses 250 V test; > 500 V uses 1000 V test."
            },
            {
              number: 9,
              prompt: "Cables installed in thermal insulation in contact with one face for less than 0.5 m use installation reference method:",
              options: {
                A: "Method 100",
                B: "Method 101",
                C: "Method 102",
                D: "Method 103"
              },
              answer: "A",
              explanation: "Appendix 4 Method 100 — cables in thermal insulation contacting one side, where the cable is not enclosed in insulation but is in contact with thermally insulated material on one face. Method 103 is fully enclosed in insulation."
            },
            {
              number: 10,
              prompt: "A cable buried 0.5 m underground (Method D, direct burial) requires a soil thermal resistivity (Cs) factor when the soil is dry:",
              options: {
                A: "Yes, Cs factor reduces the tabulated current rating where soil is poorly conductive (high resistivity)",
                B: "No, soil resistivity has no effect",
                C: "Cs is always 1.0",
                D: "Cs only applies to overhead cables"
              },
              answer: "A",
              explanation: "Appendix 4 — for buried cables (Method D), the soil thermal resistivity factor (Cs) modifies the rated CCC. Standard tables assume 2.5 K·m/W; drier or sandier soils have higher resistivity and require derating."
            },
            {
              number: 11,
              prompt: "A 30 mA RCD on a 230 V TN-C-S supply with declared Ze = 0.35 Ω — required maximum Zs to comply with Reg 411.5 (touch voltage limit, taking IΔn = 30 mA):",
              options: {
                A: "1667 Ω theoretical (50/0.030)",
                B: "1.37 Ω",
                C: "0.95 Ω",
                D: "0.35 Ω"
              },
              answer: "A",
              explanation: "50/0.030 = 1667 Ω is the theoretical limit for a 30 mA RCD providing fault protection. The MCB Zs constraint (e.g. 1.37 Ω for Type B 32 A) is tighter and dominates the design in practice."
            },
            {
              number: 12,
              prompt: "Which of these statements about earthing on a TT system is correct?",
              options: {
                A: "An RCD is almost always needed because the earth electrode resistance is too high for an MCB to clear within 0.2 s",
                B: "TT systems do not need RCDs",
                C: "TT systems use the DNO neutral as the earth path",
                D: "TT systems must use TN-S protection"
              },
              answer: "A",
              explanation: "Reg 411.5 — TT systems typically rely on RCDs because RA is much higher than the source impedance found in TN, making it impractical to clear faults via MCBs within the 0.2 s time."
            },
            {
              number: 13,
              prompt: "Section 559 — luminaires connected via lampholders to a final circuit must:",
              options: {
                A: "Use lampholders rated for the lamp type and circuit voltage; stem-suspended lampholders need a flexible cable suitable for the load",
                B: "Use any size flex",
                C: "Always use 6 A protection",
                D: "Always be Class I"
              },
              answer: "A",
              explanation: "Section 559 — luminaire connections: lampholders rated for the lamp; flexible cable selected for the load and the suspension method; through-wiring only where designed for it."
            },
            {
              number: 14,
              prompt: "A periodic inspection notice (Reg 514.12) must indicate:",
              options: {
                A: "Recommended date of next inspection plus a note explaining the recommendation under BS 7671",
                B: "Manufacturer name only",
                C: "Cable colour code only",
                D: "Tariff details"
              },
              answer: "A",
              explanation: "Reg 514.12 — the notice gives the next recommended inspection date so anyone using the installation knows when expert assessment is due. A3:2024 specifies a minimum legibility (≥ 14 pt)."
            },
            {
              number: 15,
              prompt: "Which is the correct order for testing during initial verification?",
              options: {
                A: "Continuity of CPC, ring continuity, IR, polarity, EFLI/Zs, RCD, prospective fault current, sequence checked logically per GN3",
                B: "RCD test first, IR last",
                C: "Voltage test first, continuity last",
                D: "No prescribed order"
              },
              answer: "A",
              explanation: "GN3 sets out a recommended sequence: continuity (CPCs, ring), IR (with circuit dead), polarity, EFLI/Zs (live), prospective fault current, RCD trip times. The order minimises hazard while building up the dataset."
            },
            {
              number: 16,
              prompt: "Section 528 deals with:",
              options: {
                A: "Proximity of electrical cabling to non-electrical services and segregation between voltage Bands",
                B: "Inspection and testing",
                C: "Earthing arrangements",
                D: "Load assessment"
              },
              answer: "A",
              explanation: "Reg 528 — proximity of wiring systems to non-electrical services. Includes segregation between voltage Bands I and II, and the rules for cables alongside gas, water and telecommunications services."
            },
            {
              number: 17,
              prompt: "A 6491X single-core cable in conduit is suitable for:",
              options: {
                A: "Use in conduit / trunking with mechanical protection where its single PVC insulation is adequate against expected influences",
                B: "Direct burial without protection",
                C: "Use as a flexible cord",
                D: "Use in heating cable applications"
              },
              answer: "A",
              explanation: "6491X is a single-core PVC-insulated cable (450/750 V) commonly drawn into conduit/trunking. The conduit/trunking provides mechanical protection; 6491X is not a sheathed cable suitable for direct fixing or burial."
            },
            {
              number: 18,
              prompt: "Section 526 — accessibility of connections requires:",
              options: {
                A: "Connections to be accessible for inspection, testing and maintenance, except where specifically permitted (e.g. permanent encapsulated joints, joints in equipment, etc.)",
                B: "All connections to be hidden",
                C: "All connections to be welded",
                D: "All connections to be soldered"
              },
              answer: "A",
              explanation: "Reg 526.3 — connections must be accessible for inspection. Exceptions include compound-filled or encapsulated joints, joints in cables buried in the ground, joints inside maintenance-free junction boxes (MF), and joints made by soldering, welding or compression in equipment as designed."
            },
            {
              number: 19,
              prompt: "Reg 411.3.2.6 (additional protection for socket outlets in dwellings) requires:",
              options: {
                A: "30 mA RCD additional protection for socket outlets ≤ 32 A in domestic premises (with limited skilled-person exceptions)",
                B: "A 100 mA RCD for all socket outlets",
                C: "AFDD for all sockets",
                D: "Type B for all sockets"
              },
              answer: "A",
              explanation: "Reg 411.3.3 covers the broader rule (≤ 32 A), with specific provisions in dwellings under Reg 411.3.4 (luminaires) and Reg 411.3.3 (sockets). Skilled-person exceptions require a documented risk assessment."
            },
            {
              number: 20,
              prompt: "A tester reads 'Continuity test value' as 1.2 Ω across a 35 m radial circuit's CPC (1.5 mm² Cu). Is the value plausible?",
              options: {
                A: "Yes — at ~12 mΩ/m for 1.5 mm² Cu, 35 m gives ~0.42 Ω one-way / ~0.84 Ω there-and-back; with line conductor in series, ~1.2 Ω is plausible for r1+r2",
                B: "No — should be > 100 Ω",
                C: "No — should be 0 Ω",
                D: "No — should be < 0.05 Ω"
              },
              answer: "A",
              explanation: "1.5 mm² Cu has resistance ~12 mΩ/m at 20°C. r2 alone over 35 m ≈ 0.42 Ω. Adding r1 (line) over the same length doubles the figure to ~0.84 Ω. With test-lead resistance and slight imperfections, 1.2 Ω is plausible."
            },
            {
              number: 21,
              prompt: "A consumer unit installed in a domestic dwelling under A3:2024 must be:",
              options: {
                A: "Manufactured to BS EN 61439-3 (typically with non-combustible enclosure for domestic CUs)",
                B: "BS 1363 compliant",
                C: "BS EN 60898 compliant",
                D: "BS EN 50525 compliant"
              },
              answer: "A",
              explanation: "Domestic CUs are manufactured to BS EN 61439-3 (consumer unit assemblies). Since A3:2018 (carried through to A3:2024), domestic CUs must be of non-combustible material or enclosed in a non-combustible enclosure to limit fire spread."
            },
            {
              number: 22,
              prompt: "Reg 411.3.1.2 requires main protective bonding to extraneous-conductive-parts:",
              options: {
                A: "From the MET to incoming gas/water service pipes and any structural metalwork that introduces a potential",
                B: "From the lighting circuit only",
                C: "Through the neutral conductor",
                D: "Only on TN-S"
              },
              answer: "A",
              explanation: "Reg 411.3.1.2 / 544 — main bonding equalises potentials between the consumer's earthing terminal and incoming services (gas, water) plus any other extraneous-conductive-parts that could import a foreign potential."
            },
            {
              number: 23,
              prompt: "Reg 411.4.4 (TN system disconnection by overcurrent device or RCD) requires:",
              options: {
                A: "The chosen device to operate within the disconnection time of Reg 411.3.2.2 at the prevailing fault current",
                B: "Only an RCD",
                C: "Only an MCB",
                D: "No timing requirement"
              },
              answer: "A",
              explanation: "Reg 411.4.4 — the protective device (overcurrent or RCD) must operate within the relevant disconnection time. For final circuits ≤ 32 A on 230 V TN this is 0.4 s; for distribution / > 32 A it is 5 s."
            },
            {
              number: 24,
              prompt: "Reg 411.5 (TT) requires the product RA × IΔn:",
              options: {
                A: "≤ 50 V (touch-voltage limit, normal locations)",
                B: "≤ 230 V",
                C: "≤ 25 V",
                D: "≤ 1000 V"
              },
              answer: "A",
              explanation: "Reg 411.5.3 — TT systems must satisfy RA × IΔn ≤ 50 V to keep touch voltage ≤ 50 V in the disconnection window. For livestock locations the limit is 25 V."
            },
            {
              number: 25,
              prompt: "Section 537.4 — emergency switching device must be:",
              options: {
                A: "Capable of cutting off all live conductors in a single action, readily accessible, and clearly identified",
                B: "Hidden inside equipment",
                C: "Single-pole only",
                D: "Operated by remote signal only"
              },
              answer: "A",
              explanation: "Reg 537.4 — emergency switches must be readily accessible, clearly identified, hand-operated and capable of breaking all live conductors as a single action. Latching in the OFF position is preferred."
            },
            {
              number: 26,
              prompt: "Reg 537.3 (mechanical-maintenance switching) device must be capable of:",
              options: {
                A: "Disconnecting the supply for non-electrical work, with means to prevent unintentional re-energisation",
                B: "Reconnecting automatically",
                C: "Disconnecting the line conductor only",
                D: "Tripping on overcurrent only"
              },
              answer: "A",
              explanation: "Reg 537.3 — mechanical-maintenance isolation breaks all live conductors and provides a means to prevent inadvertent reconnection (lockable, padlockable, or kept under continuous control of the worker)."
            },
            {
              number: 27,
              prompt: "Reg 132.16 (Additions and alterations) means:",
              options: {
                A: "Existing earthing and the existing installation must be capable of carrying the addition and remain safe in respect of it",
                B: "The whole installation must be replaced",
                C: "An EICR is required first",
                D: "An MWC is sufficient regardless"
              },
              answer: "A",
              explanation: "Reg 132.16 — before adding to an installation, verify the earthing arrangement is adequate and the existing installation is safe in respect of the addition. Otherwise the addition must be deferred until upgrades are made."
            },
            {
              number: 28,
              prompt: "On a 32 A ring final circuit using 2.5/1.5 T&E with R1+R2 of 0.5 Ω across the ring as a single conductor and Ze of 0.4 Ω, the worst-case Zs at the centre of the ring is approximately:",
              options: {
                A: "0.4 + 0.5/4 = 0.525 Ω",
                B: "0.4 + 0.5 = 0.9 Ω",
                C: "0.5 Ω",
                D: "0.4 Ω"
              },
              answer: "A",
              explanation: "Ring R1+R2 across the parallel-connected ring at the centre = (r1+r2)/4. So Zs = Ze + (r1+r2)/4 = 0.4 + 0.5/4 = 0.525 Ω. Compare against Type B 32 A maximum 1.37 Ω — well within limits."
            },
            {
              number: 29,
              prompt: "In an EICR, the observation 'no main protective bonding to incoming water service' would typically be coded as:",
              options: {
                A: "C2 (potentially dangerous)",
                B: "C1 (immediate danger)",
                C: "C3 (improvement recommended)",
                D: "FI (further investigation)"
              },
              answer: "A",
              explanation: "Missing main bonding is potentially dangerous: a fault could allow extraneous-conductive-parts to become live. Typical coding C2. C1 would be reserved for live exposed conductors."
            },
            {
              number: 30,
              prompt: "An installation that requires AFDDs by Reg 421.1.7 but does not have them would, in an EICR, be coded as:",
              options: {
                A: "C2 (potentially dangerous, applying current standard)",
                B: "C1 (immediate danger)",
                C: "C3 (improvement recommended)",
                D: "FI"
              },
              answer: "A",
              explanation: "Best practice guidance — where the current edition mandates a protective measure that is missing in a defined higher-risk premises, the typical coding is C2 (potentially dangerous). Industry guidance (e.g. Best Practice Guide 4) clarifies the coding context."
            }
          ]
        }
      ]
    },
    {
      id: "section-5",
      title: "Section 5 — Consolidated BS 7671 Application",
      variants: [
        {
          id: "v1",
          questions: [
            {
              number: 1,
              prompt: "A 32 A Type B circuit-breaker at 230 V — maximum Zs (Table 41.3) for 0.4 s disconnection is approximately:",
              options: {
                A: "1.09 Ω",
                B: "1.37 Ω",
                C: "1.44 Ω",
                D: "2.87 Ω"
              },
              answer: "B",
              explanation: "Table 41.3 — Type B 32 A: Ia = 5 × 32 = 160 A. Zs = (0.95 × 230)/160 ≈ 1.37 Ω after applying Cmin. The 1.44 Ω figure is the pre-Cmin value seen in older references."
            },
            {
              number: 2,
              prompt: "Domestic bathroom Zone 1 — minimum IP rating for equipment is:",
              options: {
                A: "IPX2",
                B: "IPX4",
                C: "IPX5",
                D: "IPX7"
              },
              answer: "B",
              explanation: "Section 701 — Zone 0 = IPX7, Zone 1 = IPX4 (IPX5 where water jets are likely), Zone 2 = IPX4."
            },
            {
              number: 3,
              prompt: "Additional protection by 30 mA RCD is required for:",
              options: {
                A: "All final circuits in any domestic premises, regardless of voltage band, socket rating or cable route",
                B: "Socket outlets up to 32 A, mobile equipment up to 32 A used outdoors, and cables concealed in walls/partitions at less than 50 mm",
                C: "Only socket outlets on outdoor mobile equipment > 32 A",
                D: "Any final circuit in a bath/shower location only when supplementary bonding is omitted"
              },
              answer: "B",
              explanation: "Reg 411.3.3 (sockets ≤ 32 A and mobile outdoor equipment ≤ 32 A) and Reg 522.6.202 (cables < 50 mm in walls). 30 mA RCD additional protection is not universally required — only where the regulations call for it."
            },
            {
              number: 4,
              prompt: "Surge Protective Devices (Section 443) are required where the consequences of overvoltage could:",
              options: {
                A: "Always — in every installation without exception",
                B: "Result in serious injury or loss of life, failure of safety services, significant financial / data / heritage loss; or where calculated risk level (Appendix 16) indicates need",
                C: "Only occur in commercial installations",
                D: "Only occur in thunderstorm-prone regions"
              },
              answer: "B",
              explanation: "Reg 443.4 lists the consequence categories. Reg 443.5 + Appendix 16 provide the CRL alternative. For dwellings the CRL almost always indicates SPDs are required."
            },
            {
              number: 5,
              prompt: "Reg 421.1.7 — AFDDs are mandatory on socket-outlet final circuits ≤ 32 A in:",
              options: {
                A: "All domestic premises",
                B: "Higher-Risk Residential Buildings, HMOs, purpose-built student accommodation, care homes",
                C: "Commercial kitchens only",
                D: "Outdoor sockets only"
              },
              answer: "B",
              explanation: "Reg 421.1.7 (A2:2022) — 'shall' applies to those four higher-risk premises; 'recommended' elsewhere. Memorise the four categories."
            },
            {
              number: 6,
              prompt: "On a TN-C-S installation with a 25 mm² supply neutral, the minimum copper main protective bonding conductor is (Table 54.8):",
              options: {
                A: "6 mm²",
                B: "10 mm²",
                C: "16 mm²",
                D: "25 mm²"
              },
              answer: "B",
              explanation: "Table 54.8 — supply neutral up to 35 mm² → main bonding 10 mm² Cu. Step changes at 50 mm² N → 16 mm², 70/95 → 25 mm², 120 → 35 mm², ≥ 150 → 50 mm²."
            },
            {
              number: 7,
              prompt: "In a TN-C-S (PME) system:",
              options: {
                A: "Earth and neutral are combined throughout the installation",
                B: "Combined PEN in the supply, separated into N and PE at the consumer's origin",
                C: "Separate metallic PE all the way back to the source",
                D: "PE is provided only by an installation electrode"
              },
              answer: "B",
              explanation: "TN-C-S: DNO combines earth and neutral as PEN; this splits at the cut-out into the installation's N and PE. The hazard of an open PEN is mitigated by main bonding sized per Table 54.8 and EV/caravan PME restrictions."
            },
            {
              number: 8,
              prompt: "Supplementary equipotential bonding in a bath/shower is omitted ONLY when:",
              options: {
                A: "Each circuit is RCD protected and that's enough",
                B: "All circuits comply with ADS times, all final circuits have 30 mA RCD additional protection, AND all extraneous-conductive-parts are connected to the protective equipotential bonding (Reg 701.415.2)",
                C: "Only a shower (not a bath) is present",
                D: "Main bonding extends to all extraneous-conductive-parts at the MET"
              },
              answer: "B",
              explanation: "Reg 701.415.2 — all conditions must be met. RCD protection alone is insufficient; the bonding ecosystem must be intact and verified."
            },
            {
              number: 9,
              prompt: "TT system — practical maximum recommended earth electrode resistance RA for stable operation is:",
              options: {
                A: "5 Ω",
                B: "100 Ω",
                C: "200 Ω",
                D: "1667 Ω"
              },
              answer: "C",
              explanation: "Theoretical max for a 30 mA RCD is 1667 Ω, but seasonal moisture variation makes this unstable. BS 7671 recommends a practical max under 200 Ω; many designers aim for ≤ 100 Ω."
            },
            {
              number: 10,
              prompt: "On a public LV supply, lighting final circuit voltage drop limit is:",
              options: {
                A: "3% of nominal",
                B: "5% of nominal",
                C: "6% of nominal",
                D: "8% of nominal"
              },
              answer: "A",
              explanation: "Appendix 4 Table 4Ab — public LV: 3% lighting / 5% other. Private LV source: 6%/8%."
            },
            {
              number: 11,
              prompt: "Standard cable derating factors include all EXCEPT:",
              options: {
                A: "Ca — ambient temperature",
                B: "Cg — grouping",
                C: "Ci — thermal insulation",
                D: "Cm — moisture"
              },
              answer: "D",
              explanation: "Cm doesn't exist. Standard factors: Ca, Cg, Ci, Cc (BS 3036 fuse / buried), Cs (soil thermal resistivity), Cd (depth). Effective It = In/(Ca·Cg·Ci·Cc)."
            },
            {
              number: 12,
              prompt: "Cables concealed in walls/partitions at less than 50 mm depth must:",
              options: {
                A: "Be in safe zones AND have 30 mA RCD additional protection; OR have mechanical protection; OR earthed metallic covering",
                B: "Only be in safe zones",
                C: "Only have 30 mA RCD",
                D: "Be run anywhere if a junction box is accessible"
              },
              answer: "A",
              explanation: "Reg 522.6.202 / 522.6.203. Three permitted compliance routes — note the 'AND' on the safe-zone-and-RCD route. Safe zones alone are insufficient."
            },
            {
              number: 13,
              prompt: "On a TN-S supply with declared Ze of 0.8 Ω, a 32 A Type B MCB final circuit may have R1+R2 up to approximately:",
              options: {
                A: "0.57 Ω (giving Zs ≈ 1.37 Ω)",
                B: "1.37 Ω",
                C: "0.21 Ω",
                D: "Unlimited"
              },
              answer: "A",
              explanation: "Type B 32 A max Zs = 1.37 Ω. R1+R2 ≤ 1.37 − 0.8 = 0.57 Ω. (TN-C-S declared Ze 0.35 Ω would allow R1+R2 up to ~1.02 Ω.)"
            },
            {
              number: 14,
              prompt: "An EV charge point on a TN-C-S supply must, by default, use:",
              options: {
                A: "An open-PEN protective device, a separating transformer, or a local earth electrode (Reg 722.411.4.1)",
                B: "Only a Type AC RCD",
                C: "Only a 100 mA RCD",
                D: "No specific arrangement"
              },
              answer: "A",
              explanation: "Reg 722.411.4.1 — three permitted methods to address PEN-fault risk on EV chargers. The aim is to ensure the EV cannot be exposed to a dangerous PEN-fault voltage."
            },
            {
              number: 15,
              prompt: "Section 826 (Prosumer) — the operating mode where the local source disconnects from the public network entirely is:",
              options: {
                A: "Continuous parallel",
                B: "Switched changeover",
                C: "Island",
                D: "Reduced low voltage"
              },
              answer: "C",
              explanation: "Island mode — the local source supplies the installation independently of the public network. Requires a neutral switching device on single-phase, four-pole disconnection on 3-phase."
            },
            {
              number: 16,
              prompt: "An RCD providing additional protection (Reg 415.1) must have IΔn ≤:",
              options: {
                A: "10 mA",
                B: "30 mA",
                C: "100 mA",
                D: "300 mA"
              },
              answer: "B",
              explanation: "Reg 415.1 — additional protection RCD must have IΔn ≤ 30 mA. 100/300 mA RCDs serve fault-protection and fire-mitigation roles, not additional protection."
            },
            {
              number: 17,
              prompt: "Reg 411.3.4 (added by amendments) requires 30 mA RCD additional protection on AC final circuits supplying:",
              options: {
                A: "Luminaires within domestic (household) premises",
                B: "Heating cables in commercial premises",
                C: "Outdoor sockets only",
                D: "Distribution circuits only"
              },
              answer: "A",
              explanation: "Reg 411.3.4 — final circuits supplying luminaires in dwellings must have 30 mA RCD additional protection. Lamp changes are everyday user activity, hence the requirement."
            },
            {
              number: 18,
              prompt: "Section 537 — emergency switching device must:",
              options: {
                A: "Be readily accessible, clearly identified (typically red on yellow), capable of breaking all live conductors as a single hand-operated action",
                B: "Be hidden inside equipment",
                C: "Disconnect line conductor only",
                D: "Reset automatically after 5 s"
              },
              answer: "A",
              explanation: "Reg 537.4 — emergency switches must be hand-operated, readily accessible, clearly identified, and break all live conductors. Latching in OFF is preferred so the device cannot be reset accidentally."
            },
            {
              number: 19,
              prompt: "An installation supplied at 230 V via 70 mm² Cu PEN — main protective bonding conductor minimum (Cu) per Table 54.8 is:",
              options: {
                A: "10 mm²",
                B: "16 mm²",
                C: "25 mm²",
                D: "35 mm²"
              },
              answer: "C",
              explanation: "Table 54.8 — supply neutral 70/95 mm² → main bonding 25 mm² Cu. (50 mm² N → 16 mm²; 120 N → 35 mm²; ≥ 150 N → 50 mm².)"
            },
            {
              number: 20,
              prompt: "The 'four conditions' allowing omission of supplementary bonding in a bath/shower (Reg 701.415.2) include all EXCEPT:",
              options: {
                A: "All circuits comply with ADS",
                B: "All final circuits have 30 mA RCD additional protection",
                C: "All extraneous-conductive-parts are bonded to the protective equipotential bonding",
                D: "An SPD is fitted at the origin"
              },
              answer: "D",
              explanation: "The four conditions are about ADS, 30 mA RCD, main bonding to all extraneous-conductive-parts, and the bonding being effectively continuous. SPDs are not part of the supplementary bonding omission criteria."
            },
            {
              number: 21,
              prompt: "On a TN final circuit with R1+R2 = 0.5 Ω and Ze = 0.4 Ω, Zs is:",
              options: {
                A: "0.4 Ω",
                B: "0.5 Ω",
                C: "0.9 Ω",
                D: "1.0 Ω"
              },
              answer: "C",
              explanation: "Zs = Ze + R1+R2 = 0.4 + 0.5 = 0.9 Ω. Compare against the device's tabulated maximum Zs (e.g. Type B 32 A = 1.37 Ω)."
            },
            {
              number: 22,
              prompt: "An installation in a livestock environment has a touch-voltage limit (Section 705) of:",
              options: {
                A: "12 V",
                B: "25 V",
                C: "50 V",
                D: "120 V"
              },
              answer: "B",
              explanation: "Section 705 — agricultural and horticultural premises with livestock: UL = 25 V a.c. (instead of 50 V) reflecting animals' lower body resistance and higher shock severity."
            },
            {
              number: 23,
              prompt: "An EICR observation 'C2' is:",
              options: {
                A: "Immediate danger present",
                B: "Potentially dangerous",
                C: "Improvement recommended",
                D: "Further investigation"
              },
              answer: "B",
              explanation: "EICR coding — C1 (immediate danger), C2 (potentially dangerous), C3 (improvement recommended), FI (further investigation needed). C2 means non-compliance with potentially serious consequences."
            },
            {
              number: 24,
              prompt: "The IR test for an LV final circuit at 230 V uses:",
              options: {
                A: "500 V d.c. test, ≥ 1 MΩ",
                B: "230 V a.c. test, ≥ 100 MΩ",
                C: "1000 V d.c. test, ≥ 1 MΩ",
                D: "100 V d.c. test, ≥ 1 MΩ"
              },
              answer: "A",
              explanation: "BS 7671 / GN3 — 50–500 V supply: 500 V d.c. test, ≥ 1.0 MΩ acceptance. SELV uses 250 V; > 500 V uses 1000 V."
            },
            {
              number: 25,
              prompt: "Section 826 covers prosumer installations, which are:",
              options: {
                A: "Installations that both consume and produce electricity (PV, battery, EV combinations)",
                B: "Industrial substations",
                C: "Networks above 1000 V a.c.",
                D: "Caravan parks"
              },
              answer: "A",
              explanation: "PEI = Prosumer Electrical Installation, defined in A2:2022 / Section 826. Covers dwellings/installations that both consume and produce electricity in any combination."
            }
          ]
        },
        {
          id: "v2",
          questions: [
            {
              number: 1,
              prompt: "An installation supplied via a TN-C-S (PME) connection requires which earthing arrangement at a domestic EV charger to satisfy Section 722?",
              options: {
                A: "Use the PME directly with no further measures",
                B: "Open-PEN protective device, separating transformer, or a local earth electrode meeting the limits of Section 722",
                C: "TT system only",
                D: "TN-S only"
              },
              answer: "B",
              explanation: "Reg 722.411.4.1 — three permitted options. The aim is to break dependence on the DNO PEN at the EV equipment so a broken PEN cannot put mains voltage on the EV body."
            },
            {
              number: 2,
              prompt: "In a domestic shower room with no bath, the 30 mA RCD requirement (Reg 411.3.3 / 701.411.3.3) for circuits passing through Zone 1 is:",
              options: {
                A: "Always required",
                B: "Optional unless a bath is present",
                C: "Only required if the shower is electric",
                D: "Only required for socket outlets"
              },
              answer: "A",
              explanation: "Section 701 — every circuit serving (or passing through) Zone 1 or 2 needs 30 mA RCD additional protection regardless of whether a bath is present. The presence of a fixed shower means it is a 'location containing a bath or shower'."
            },
            {
              number: 3,
              prompt: "A 6 mm² T&E 30 m run carrying 32 A on a public LV supply — voltage drop is approximately:",
              options: {
                A: "≈ 7 V (3.0%)",
                B: "≈ 11 V (4.8%)",
                C: "≈ 14 V (6.1%)",
                D: "≈ 3.5 V (1.5%)"
              },
              answer: "A",
              explanation: "6 mm² ≈ 7.3 mV/A/m. V = (7.3 × 32 × 30)/1000 ≈ 7.0 V ≈ 3.04%. Within the 5% other-uses public LV limit."
            },
            {
              number: 4,
              prompt: "Section 132.16 (additions and alterations) — before installing a new EV charger, the designer must:",
              options: {
                A: "Verify the existing earthing arrangement and existing installation can support the addition safely",
                B: "Replace the entire installation",
                C: "Issue a new EICR for the whole property",
                D: "Disconnect the public supply"
              },
              answer: "A",
              explanation: "Reg 132.16 — additions/alterations require checking the earthing arrangement and the rest of the installation are safe in respect of the new work, with any necessary upgrades carried out beforehand."
            },
            {
              number: 5,
              prompt: "An installation has Ze = 0.35 Ω and a 32 A Type B RCBO with cable R1+R2 of 1.0 Ω. Zs is:",
              options: {
                A: "0.35 Ω",
                B: "1.0 Ω",
                C: "1.35 Ω",
                D: "1.37 Ω"
              },
              answer: "C",
              explanation: "Zs = Ze + R1+R2 = 0.35 + 1.0 = 1.35 Ω. Type B 32 A maximum 1.37 Ω — just within the device limit. A real installation with this margin would be a re-design candidate."
            },
            {
              number: 6,
              prompt: "Section 421.1.7 'shall' premises — which is NOT included?",
              options: {
                A: "Higher-Risk Residential Building",
                B: "House in Multiple Occupation",
                C: "Single-occupancy holiday let with self-contained kitchen",
                D: "Care home"
              },
              answer: "C",
              explanation: "The four 'shall' categories are HRRBs, HMOs, purpose-built student accommodation, and care homes. Self-contained holiday lets fall under standard dwellings (where AFDDs are 'recommended')."
            },
            {
              number: 7,
              prompt: "Bonding sizing on a non-PME (TN-S) installation has minimum/maximum Cu CSA of:",
              options: {
                A: "Min 6 mm², Max 25 mm²",
                B: "Min 2.5 mm², Max 10 mm²",
                C: "Min 10 mm², Max 50 mm²",
                D: "Min 16 mm², Max 70 mm²"
              },
              answer: "A",
              explanation: "Reg 544.1.1 — non-PME main bonding: half the earthing conductor CSA, with minimum 6 mm² Cu and maximum 25 mm² Cu. PME uses Table 54.8 with different values."
            },
            {
              number: 8,
              prompt: "An RCD on a TT installation must satisfy RA × IΔn ≤:",
              options: {
                A: "25 V (livestock locations)",
                B: "50 V (normal locations)",
                C: "Both A and B (depending on the location)",
                D: "230 V"
              },
              answer: "C",
              explanation: "Reg 411.5 — RA × IΔn ≤ UL. UL is 50 V in normal locations, 25 V in livestock locations. Both apply, depending on the location's classification."
            },
            {
              number: 9,
              prompt: "On a 32 A Type B MCB at 230 V, max measured (warm-conductor 80%) Zs is approximately:",
              options: {
                A: "1.37 Ω",
                B: "1.10 Ω",
                C: "0.91 Ω",
                D: "0.55 Ω"
              },
              answer: "B",
              explanation: "GN3 'measured' Zs = 0.8 × tabulated. Type B 32 A: 0.8 × 1.37 ≈ 1.10 Ω. Tester reading exceeding this should be flagged for investigation."
            },
            {
              number: 10,
              prompt: "Section 712 (PV) — an inverter that disconnects from the public supply on grid loss is providing:",
              options: {
                A: "Anti-islanding (loss-of-mains) protection in line with G98/G99",
                B: "An RCD function",
                C: "An SPD function",
                D: "An AFDD function"
              },
              answer: "A",
              explanation: "G98/G99 — anti-islanding (loss-of-mains) protection ensures the inverter ceases to energise the network on grid loss. Failure to anti-island can endanger DNO staff working on the de-energised network."
            },
            {
              number: 11,
              prompt: "An installation in a livestock building with a 30 mA RCD (Section 705) — RA × 0.030 ≤ 25 V gives RA ≤:",
              options: {
                A: "833 Ω",
                B: "100 Ω",
                C: "1667 Ω",
                D: "50 Ω"
              },
              answer: "A",
              explanation: "RA ≤ 25/0.030 = 833 Ω theoretical limit. Practical recommendation is much lower (≤ 100 Ω), to ensure stable performance through seasonal soil moisture changes."
            },
            {
              number: 12,
              prompt: "The Schedule of Test Results captures:",
              options: {
                A: "Continuity, IR, polarity, EFLI/Zs, prospective fault current, RCD trip times — the measured circuit values",
                B: "RCD type only",
                C: "Cable colour only",
                D: "Equipment manufacturer names"
              },
              answer: "A",
              explanation: "Appendix 6 — Schedule of Test Results captures the measured values: continuity (R1+R2/r1/r2/rn), IR L-N/L-PE/N-PE, polarity, Zs, PFC, RCD ½×IΔn / 1×IΔn / 5×IΔn (where applicable)."
            },
            {
              number: 13,
              prompt: "An IR test on a circuit with electronic devices (e.g. dimmers, electronic ballasts) should:",
              options: {
                A: "Be carried out with sensitive electronics disconnected (or accept testing at 250 V d.c. per manufacturer guidance)",
                B: "Always be skipped",
                C: "Always use 1000 V d.c.",
                D: "Always include the equipment energised"
              },
              answer: "A",
              explanation: "GN3 — 500 V d.c. test can damage internal electronics. Disconnect (preferred) or test at 250 V d.c. with documented reason and manufacturer support."
            },
            {
              number: 14,
              prompt: "Section 537.2 (isolation) — a semiconductor device is:",
              options: {
                A: "Suitable as an isolating device",
                B: "Suitable for switching but NOT for isolation (no contact gap or equivalent)",
                C: "Mandatory in every circuit",
                D: "Banned in any installation"
              },
              answer: "B",
              explanation: "Reg 537.2.2 — isolation requires a contact gap or equivalent insulation between separated parts. Semiconductors (thyristors, IGBTs) cannot provide this and serve as switching devices only."
            },
            {
              number: 15,
              prompt: "A 32 A radial circuit using 4 mm² T&E with 25 m run on a 230 V public LV supply — voltage drop is approximately:",
              options: {
                A: "≈ 8.8 V (3.8%)",
                B: "≈ 14 V (6.1%)",
                C: "≈ 4 V (1.7%)",
                D: "≈ 1 V (0.4%)"
              },
              answer: "A",
              explanation: "4 mm² ≈ 11 mV/A/m. V = (11 × 32 × 25)/1000 = 8.8 V ≈ 3.83% — within 5% other-uses limit on public LV."
            },
            {
              number: 16,
              prompt: "Section 715 (ELV lighting) — the suspension support load capacity is at least:",
              options: {
                A: "3 kg/m",
                B: "5 kg/m",
                C: "8 kg/m",
                D: "10 kg/m"
              },
              answer: "B",
              explanation: "Section 715 — suspension/support of ELV track or wire systems must be capable of carrying not less than 5 kg/m of installation."
            },
            {
              number: 17,
              prompt: "A construction site (Section 704) — RLV at 110 V CTE provides voltage to earth of:",
              options: {
                A: "55 V",
                B: "110 V",
                C: "230 V",
                D: "0 V"
              },
              answer: "A",
              explanation: "Centre-tapped earth: 55 V from each line conductor to earth. Touch voltage on a single-line fault is 55 V (just over the 50 V conventional limit, but accepted in this specific application due to other safeguards)."
            },
            {
              number: 18,
              prompt: "Section 528 — segregation between Band I (ELV) and Band II (LV) requires:",
              options: {
                A: "Separate compartments / barriers, or use of cables suitable for the higher voltage band",
                B: "No requirement",
                C: "Always rigid steel conduit",
                D: "Always 1 m clear distance"
              },
              answer: "A",
              explanation: "Reg 528.1 — different voltage bands must be segregated by compartment or by use of cables adequately rated for the highest voltage present in the same enclosure."
            },
            {
              number: 19,
              prompt: "Section 559 — a luminaire's protective conductor:",
              options: {
                A: "Must be properly terminated even on Class II luminaires that have an internal earth wire for through-wiring",
                B: "Can be ignored on Class I",
                C: "Is not required on any luminaire",
                D: "Is connected only when through-wiring exists"
              },
              answer: "A",
              explanation: "Reg 559 — Class II luminaires with through-wiring must still terminate the protective conductor properly (typically with a parking terminal). Class I luminaires must always have a properly terminated CPC."
            },
            {
              number: 20,
              prompt: "A 30 mA RCD cap test at 5 × IΔn on an additional-protection circuit must trip within:",
              options: {
                A: "40 ms",
                B: "200 ms",
                C: "300 ms",
                D: "5 s"
              },
              answer: "A",
              explanation: "GN3 RCD test — at 5 × IΔn the trip time should be ≤ 40 ms, ensuring rapid disconnection during direct-contact scenarios (within the cardiac cycle window)."
            },
            {
              number: 21,
              prompt: "An EICR is required:",
              options: {
                A: "Periodically, with frequency determined by the type of installation, its use and external influences (Reg 651)",
                B: "Once after installation only",
                C: "Every year always",
                D: "Only when the building is sold"
              },
              answer: "A",
              explanation: "Reg 651 — periodic inspection frequency is determined by installation type, use, maintenance regime and external influences. Typical intervals are tabulated in IET GN3 (e.g. ≤ 10 years for owner-occupied dwellings, ≤ 5 years for rented)."
            },
            {
              number: 22,
              prompt: "On a 30 m run of 16 mm² Cu cable carrying 80 A on a 230 V single-phase circuit, voltage drop is approximately:",
              options: {
                A: "≈ 6.7 V (≈ 2.9%)",
                B: "≈ 13 V (≈ 5.7%)",
                C: "≈ 1 V (≈ 0.5%)",
                D: "≈ 18 V (≈ 7.8%)"
              },
              answer: "A",
              explanation: "16 mm² Cu ≈ 2.8 mV/A/m. V = (2.8 × 80 × 30)/1000 = 6.72 V ≈ 2.92%. Within 3% lighting and 5% other-uses limits on public LV."
            },
            {
              number: 23,
              prompt: "Reg 421.1.7 — an AFDD installed at the consumer unit on a 32 A socket circuit in an HRRB protects:",
              options: {
                A: "The whole final circuit downstream against series and parallel arc faults",
                B: "Just the consumer unit",
                C: "Only the meter tail",
                D: "The DNO supply"
              },
              answer: "A",
              explanation: "AFDDs at the origin of the final circuit cover the entire circuit downstream — cabling, accessories, and any plug-in loads. They detect arcing signatures that MCBs and RCDs would miss."
            },
            {
              number: 24,
              prompt: "A domestic consumer unit, since A3:2018 (and retained in A3:2024), must satisfy:",
              options: {
                A: "Manufactured to BS EN 61439-3 with a non-combustible enclosure or non-combustible material to limit fire spread from internal faults",
                B: "BS 1363",
                C: "BS EN 60898",
                D: "Cardboard"
              },
              answer: "A",
              explanation: "Domestic CUs are to BS EN 61439-3 and (since A3:2018 onwards) of non-combustible material or enclosed in a non-combustible enclosure to limit fire spread from a CU fault."
            },
            {
              number: 25,
              prompt: "An EV installation that uses an open-PEN protective device on a TN-C-S supply does NOT require:",
              options: {
                A: "A separating transformer",
                B: "A local earth electrode",
                C: "Either a separating transformer or a local earth electrode (the open-PEN device is the alternative)",
                D: "Any RCD"
              },
              answer: "C",
              explanation: "Reg 722.411.4.1 — three options. Choosing the open-PEN device removes the need for the other two; the device disconnects the EV when the DNO PEN is suspected open. RCD requirements still apply per Reg 722.531.3.101."
            }
          ]
        },
        {
          id: "v3",
          questions: [
            {
              number: 1,
              prompt: "On a TN-C-S supply with declared Ze of 0.35 Ω, a 16 A Type C MCB final circuit needs R1+R2 not exceeding (Table 41.3) approximately:",
              options: {
                A: "0.55 Ω (Zs ≤ 0.91 Ω)",
                B: "1.02 Ω (Zs ≤ 1.37 Ω)",
                C: "0.20 Ω",
                D: "Unlimited"
              },
              answer: "B",
              explanation: "Type C 16 A: Ia = 10 × 16 = 160 A. Max Zs = (0.95 × 230)/160 ≈ 1.37 Ω. With Ze 0.35 Ω, R1+R2 ≤ 1.02 Ω."
            },
            {
              number: 2,
              prompt: "Section 712 — a PV installation on a domestic dwelling export-connected via a 16 A inverter must comply with:",
              options: {
                A: "ENA Engineering Recommendation G98",
                B: "ENA Engineering Recommendation G99",
                C: "BS 1363 only",
                D: "BS 7671 Section 411 only"
              },
              answer: "A",
              explanation: "G98 = small inverters ≤ 16 A/phase (single or three-phase) connecting to the public LV network. G99 covers larger systems requiring DNO assessment."
            },
            {
              number: 3,
              prompt: "Section 826 — a battery storage installation that supplies an emergency lighting system must additionally comply with:",
              options: {
                A: "Section 560 (safety services) and BS EN 50272 series for batteries",
                B: "Section 411 only",
                C: "Section 525 only",
                D: "No additional standard"
              },
              answer: "A",
              explanation: "Section 560 covers safety services. Battery installations follow BS EN 50272 series for safety, ventilation and protection. Section 826 sits as the prosumer umbrella."
            },
            {
              number: 4,
              prompt: "An installation with declared Ze 0.8 Ω (TN-S) supplies a 32 A Type B RCBO final circuit. Cable R1+R2 measured 0.4 Ω. Zs is:",
              options: {
                A: "0.4 Ω",
                B: "0.8 Ω",
                C: "1.2 Ω",
                D: "1.37 Ω"
              },
              answer: "C",
              explanation: "Zs = Ze + R1+R2 = 0.8 + 0.4 = 1.2 Ω. Within the Type B 32 A maximum of 1.37 Ω."
            },
            {
              number: 5,
              prompt: "A 6 A Type B MCB final circuit has measured Zs of 5 Ω. Is this within the Table 41.3 limit?",
              options: {
                A: "Yes (max 7.28 Ω)",
                B: "No — exceeds the 0.4 s limit",
                C: "Equal to the limit",
                D: "Cannot be determined"
              },
              answer: "A",
              explanation: "Type B 6 A: Ia = 5 × 6 = 30 A. Max Zs ≈ 7.28 Ω at 230 V (Cmin applied). 5 Ω is comfortably within."
            },
            {
              number: 6,
              prompt: "Reg 411.3.4 (luminaires in dwellings) requires the RCD to have IΔn:",
              options: {
                A: "≤ 30 mA",
                B: "≤ 100 mA",
                C: "≤ 300 mA",
                D: "≤ 500 mA"
              },
              answer: "A",
              explanation: "Reg 411.3.4 applies the 30 mA limit because it is an additional-protection requirement (Reg 415.1)."
            },
            {
              number: 7,
              prompt: "A bath/shower location's main protective bonding to incoming services is sized per:",
              options: {
                A: "Table 54.8 (PME) or Reg 544.1 (non-PME)",
                B: "Reg 415.2 supplementary bonding rules only",
                C: "Cable colour code only",
                D: "Local council bylaws"
              },
              answer: "A",
              explanation: "Main bonding to incoming services follows the standard Section 544 rules, not the supplementary bonding 415.2 calculation. Both are required (main + supplementary, unless 701.415.2 conditions allow omission of supplementary)."
            },
            {
              number: 8,
              prompt: "A construction-site portable hand tool circuit at 110 V CTE (Section 704) with Zs measured 2.5 Ω is fed by a 16 A Type B MCB. Is this acceptable?",
              options: {
                A: "Yes — at 110 V the disconnection times still apply but with different Zs limits derived from U₀ = 55 V",
                B: "No — never acceptable",
                C: "Only if the supply is 230 V",
                D: "Only if no RCD is fitted"
              },
              answer: "A",
              explanation: "On RLV 110 V CTE, U₀ to earth is 55 V. Zs limit derives from Ia × Zs ≤ U₀ × Cmin. Designs need to apply the appropriate U₀ for the system in use, not 230 V."
            },
            {
              number: 9,
              prompt: "An RCD that protects a TT installation supply must operate within (Table 41.1):",
              options: {
                A: "0.2 s for final circuits at 230 V; 1 s for distribution circuits",
                B: "0.4 s and 5 s",
                C: "5 s and 60 s",
                D: "Unlimited"
              },
              answer: "A",
              explanation: "Table 41.1 — TT system: 0.2 s for final circuits at 230 V; 1 s for distribution circuits. Shorter than the equivalent TN times because the higher RA gives less inherent fault clearing margin."
            },
            {
              number: 10,
              prompt: "A 25 m run of 10 mm² Cu T&E cable carrying 50 A on a 230 V single-phase public LV supply — voltage drop is approximately:",
              options: {
                A: "≈ 5.5 V (≈ 2.4%)",
                B: "≈ 11 V (≈ 4.8%)",
                C: "≈ 1 V (≈ 0.5%)",
                D: "≈ 20 V (≈ 8.7%)"
              },
              answer: "A",
              explanation: "10 mm² ≈ 4.4 mV/A/m. V = (4.4 × 50 × 25)/1000 = 5.5 V ≈ 2.39%. Within 3% lighting and 5% other-uses limits."
            },
            {
              number: 11,
              prompt: "Reg 422 (locations with fire risk) requires:",
              options: {
                A: "Wiring systems and equipment compatible with the assessed fire risk; fire-stopping where penetrations occur",
                B: "230 V always",
                C: "TT system always",
                D: "Single-phase only"
              },
              answer: "A",
              explanation: "Reg 422 — increased fire risk locations need extra care: wiring systems suitable for the environment, IP/fire-rating, and fire-stopping at compartment penetrations."
            },
            {
              number: 12,
              prompt: "A 32 A radial circuit using 4 mm² T&E with R1+R2 of 0.6 Ω feeding a single oven on a 230 V TN-C-S supply (Ze 0.35 Ω):",
              options: {
                A: "Zs = 0.95 Ω; within 1.37 Ω Type B 32 A maximum",
                B: "Zs = 0.6 Ω; OK",
                C: "Zs = 0.35 Ω; OK",
                D: "Zs = 1.4 Ω; over the limit"
              },
              answer: "A",
              explanation: "Zs = Ze + R1+R2 = 0.35 + 0.6 = 0.95 Ω. Within Type B 32 A maximum 1.37 Ω."
            },
            {
              number: 13,
              prompt: "An LED downlighter on a kitchen circuit in a HRRB:",
              options: {
                A: "Must be on a 30 mA RCD (Reg 411.3.4) but not necessarily AFDD-protected (lighting is 'recommended', not 'shall')",
                B: "Must be AFDD'd",
                C: "Must be on a Type B RCD",
                D: "Must be on a 100 mA RCD"
              },
              answer: "A",
              explanation: "Reg 411.3.4 — 30 mA RCD on AC lighting in dwellings. Reg 421.1.7 'shall' is for socket-outlet final circuits ≤ 32 A, so the lighting does not strictly require an AFDD even in HRRBs (it is recommended, not mandatory)."
            },
            {
              number: 14,
              prompt: "Reg 411.3.1.2 main protective bonding goes from the MET to:",
              options: {
                A: "Extraneous-conductive-parts (incoming gas/water service pipes, structural metalwork)",
                B: "Each socket outlet",
                C: "Each luminaire",
                D: "Each appliance"
              },
              answer: "A",
              explanation: "Reg 411.3.1.2 / 544 — main bonding equalises potentials between MET and incoming services and any other extraneous-conductive-parts that could import a foreign potential."
            },
            {
              number: 15,
              prompt: "A circuit's R1+R2 and Zs are tested. R1+R2 must be:",
              options: {
                A: "Less than Zs (R1+R2 is the cable contribution; Zs includes Ze too)",
                B: "Equal to Zs",
                C: "Greater than Zs",
                D: "Independent of Zs"
              },
              answer: "A",
              explanation: "R1+R2 is the line + CPC contribution measured along the circuit. Zs adds Ze (the source/supply contribution). Mathematically: Zs = Ze + R1+R2. R1+R2 < Zs always."
            },
            {
              number: 16,
              prompt: "On an EV charge point installation requiring a Type B RCD, an existing 30 mA Type AC RCD upstream:",
              options: {
                A: "Should be replaced with at least Type A (or coordinated with the Type B charge-point RCD) to satisfy A2:2022 default",
                B: "Is acceptable as-is",
                C: "Should be removed entirely",
                D: "Is required to remain Type AC"
              },
              answer: "A",
              explanation: "A2:2022 elevated Type A as the minimum default. Where a downstream device is Type B (e.g. EV charger), the upstream RCD must coordinate with it (often using a non-RCD upstream protection or a Type B+S upstream)."
            },
            {
              number: 17,
              prompt: "An RCD installed on a TT installation main switch — typical IΔn is:",
              options: {
                A: "100 mA S-type for selectivity with downstream 30 mA RCDs",
                B: "30 mA always",
                C: "300 mA always",
                D: "10 mA"
              },
              answer: "A",
              explanation: "100 mA S-type at the origin gives whole-installation earth-fault protection on TT, with intentional time delay so downstream 30 mA RCDs trip first on a final-circuit fault."
            },
            {
              number: 18,
              prompt: "Section 528 — voltage Band I and Band II circuits sharing an enclosure must have:",
              options: {
                A: "Separation by barrier or use of cables suitable for the highest voltage band present",
                B: "No separation requirement",
                C: "Always rigid steel conduit",
                D: "Always 1 m clear distance"
              },
              answer: "A",
              explanation: "Reg 528.1 — different voltage bands either need physical segregation or use of cables rated for the higher band. The aim is to prevent insulation breakdown from a Band II cable energising a Band I conductor."
            },
            {
              number: 19,
              prompt: "An installation supplied at 400 V three-phase TN, with a 32 A 3-phase final circuit, has a max disconnection time of:",
              options: {
                A: "0.2 s",
                B: "0.4 s",
                C: "5 s",
                D: "1 s"
              },
              answer: "A",
              explanation: "Table 41.1 — TN at U₀ > 230 V (e.g. 400 V phase-to-phase): 0.2 s. The 0.4 s applies at U₀ = 230 V."
            },
            {
              number: 20,
              prompt: "An installation Zs measured on a 32 A Type B circuit at 1.40 Ω:",
              options: {
                A: "Marginally over the tabulated 1.37 Ω, suggests investigation (loose connection, undersized CPC, high Ze)",
                B: "Acceptable",
                C: "Indicates the circuit is dead",
                D: "Indicates the polarity is reversed"
              },
              answer: "A",
              explanation: "1.40 Ω exceeds the Table 41.3 maximum (1.37 Ω) for Type B 32 A. Investigation: check Ze, CPC continuity, loose connections. The GN3 'measured' figure (0.8 × 1.37 = 1.10 Ω) is the typical service guide; exceeding 1.37 Ω is a fail."
            },
            {
              number: 21,
              prompt: "Section 411 / Reg 411.4.5 — a TN system where overcurrent protection cannot satisfy the disconnection time:",
              options: {
                A: "Allows the use of an RCD providing fault protection (typically 100 / 300 mA)",
                B: "Means the installation cannot be used",
                C: "Requires a TT system",
                D: "Means the 0.4 s rule is suspended"
              },
              answer: "A",
              explanation: "Reg 411.4.5 — where an MCB cannot disconnect within the required time at the prevailing Zs, an RCD provides fault protection. Often seen on long sub-mains or installations with high Ze."
            },
            {
              number: 22,
              prompt: "Section 537 — a 400 V three-phase isolator must:",
              options: {
                A: "Disconnect all live conductors (typically 4-pole including neutral on TT/IT, 3-pole + N where neutral switching is needed)",
                B: "Disconnect line only",
                C: "Disconnect neutral only",
                D: "Disconnect earth"
              },
              answer: "A",
              explanation: "Reg 537.2 — isolation requires all live conductors disconnected with an adequate contact gap. On 3-phase, a 4-pole device handles L1, L2, L3 and N, ensuring no live path remains."
            },
            {
              number: 23,
              prompt: "Bonding on a domestic property without incoming gas (no gas service connection):",
              options: {
                A: "Main bonding to gas is unnecessary; main bonding to water (and any other extraneous-conductive-parts) still required",
                B: "Main bonding to gas is required regardless",
                C: "No bonding required",
                D: "Only earthing conductor required"
              },
              answer: "A",
              explanation: "Bonding is to extraneous-conductive-parts that exist. If there is no gas service, no gas bond is needed, but water service and any other extraneous parts are still bonded."
            },
            {
              number: 24,
              prompt: "Reg 411.3.4 (luminaires) does NOT apply in:",
              options: {
                A: "Industrial premises",
                B: "Domestic premises",
                C: "Care homes",
                D: "HMOs"
              },
              answer: "A",
              explanation: "Reg 411.3.4 — applies specifically to AC final circuits supplying luminaires within domestic (household) premises. Industrial sites apply Reg 411.3.3 socket-outlet rules but not the dwelling-specific 411.3.4."
            },
            {
              number: 25,
              prompt: "A TN-C-S installation (PME) feeding a caravan pitch (Section 708) must NOT use PME for:",
              options: {
                A: "Earthing the caravan pitch sockets — TT (independent local electrode) is required by ESQCR Reg 9",
                B: "Internal lighting",
                C: "Distribution circuits",
                D: "Anything"
              },
              answer: "A",
              explanation: "ESQCR 2002 Reg 9 — PME earth must not be used to earth a caravan, boat or similar mobile installation. The pitch sockets in Section 708 must be TT'd via a local electrode."
            }
          ]
        },
        {
          id: "v4",
          questions: [
            {
              number: 1,
              prompt: "On a 400 V 3-phase TN system, a 32 A 3-phase final circuit must disconnect in:",
              options: {
                A: "0.2 s",
                B: "0.4 s",
                C: "5 s",
                D: "1 s"
              },
              answer: "A",
              explanation: "Table 41.1 — TN at U₀ > 230 V (so 400 V phase-to-phase circuits): 0.2 s. At 230 V the limit is 0.4 s for final circuits ≤ 32 A or sockets ≤ 63 A."
            },
            {
              number: 2,
              prompt: "Section 537 — isolation must disconnect all live conductors. On a 230 V single-phase TN-C-S installation, the isolator typically disconnects:",
              options: {
                A: "Line and neutral both (DP)",
                B: "Line only",
                C: "Neutral only",
                D: "Earth only"
              },
              answer: "A",
              explanation: "Reg 537.2.4 — a 'live conductor' includes the neutral (in TN-S/TT and TN-C-S where the neutral may be at a different potential). DP isolation is the safest practice and is required where the supply is TT or where neutral is considered live by the installation."
            },
            {
              number: 3,
              prompt: "Section 411 / 411.5 — for a TT installation with a 30 mA RCD as fault protection, RA × IΔn must not exceed:",
              options: {
                A: "50 V (normal locations) or 25 V (livestock)",
                B: "230 V",
                C: "100 V",
                D: "0 V"
              },
              answer: "A",
              explanation: "Reg 411.5.3 — RA × IΔn ≤ UL where UL = 50 V (normal) or 25 V (livestock). For a 30 mA RCD that gives RA ≤ 1667 Ω theoretically — but stable practical design aims for ≤ 100–200 Ω."
            },
            {
              number: 4,
              prompt: "A 50 m run of 16 mm² Cu cable on a 230 V single-phase circuit, carrying 70 A — voltage drop is approximately:",
              options: {
                A: "≈ 9.8 V (4.3%)",
                B: "≈ 6 V (2.6%)",
                C: "≈ 18 V (7.8%)",
                D: "≈ 1 V (0.5%)"
              },
              answer: "A",
              explanation: "16 mm² ≈ 2.8 mV/A/m. V = (2.8 × 70 × 50)/1000 = 9.8 V ≈ 4.26%. Within 5% other-uses public LV limit; over 3% lighting."
            },
            {
              number: 5,
              prompt: "An EV charge point with a Type B RCD installed in a domestic garage on a TN-C-S supply (open-PEN device fitted) requires:",
              options: {
                A: "30 mA additional protection by Type B RCD; open-PEN device handles the PEN-fault risk",
                B: "Type AC RCD only",
                C: "No RCD",
                D: "Only an SPD"
              },
              answer: "A",
              explanation: "Reg 722.531.3.101 — Type B (or Type A + RDC-DD) at the charge point. Reg 722.411.4.1 — open-PEN device handles the PME-related risk. Both protective measures are required; they cover different fault modes."
            },
            {
              number: 6,
              prompt: "On a TN-S supply, R1+R2 measured at the furthest socket of a 32 A Type B ring is 0.4 Ω at the parallel-connected centre. With Ze = 0.8 Ω, Zs is approximately:",
              options: {
                A: "0.4 Ω",
                B: "0.8 Ω",
                C: "1.2 Ω",
                D: "1.37 Ω"
              },
              answer: "C",
              explanation: "Zs = Ze + R1+R2 = 0.8 + 0.4 = 1.2 Ω. Within Type B 32 A maximum 1.37 Ω."
            },
            {
              number: 7,
              prompt: "Section 712 — a PV inverter that does not isolate on grid loss:",
              options: {
                A: "Does not comply with G98/G99 anti-islanding requirements",
                B: "Is acceptable always",
                C: "Is required to operate continuously",
                D: "Has no relevance to BS 7671"
              },
              answer: "A",
              explanation: "G98/G99 — anti-islanding (loss-of-mains) protection is a connection condition. An inverter that fails to anti-island can endanger DNO staff working on a de-energised feeder."
            },
            {
              number: 8,
              prompt: "A bath/shower room with all extraneous-conductive-parts bonded, every circuit RCD'd at 30 mA, and all ADS times met:",
              options: {
                A: "Allows omission of supplementary equipotential bonding (Reg 701.415.2)",
                B: "Still requires supplementary bonding always",
                C: "Requires no bonding at all",
                D: "Requires Section 826"
              },
              answer: "A",
              explanation: "Reg 701.415.2 — three (now four) conditions: ADS times met, 30 mA RCD on every final circuit of the location, all extraneous-conductive-parts effectively bonded. Where all conditions are met, supplementary bonding may be omitted."
            },
            {
              number: 9,
              prompt: "A circuit's PFC (prospective fault current) is measured at:",
              options: {
                A: "The origin (cut-out / consumer's terminals) and recorded for selecting protective device breaking capacity",
                B: "The end of the longest cable",
                C: "Only at the meter",
                D: "Never"
              },
              answer: "A",
              explanation: "PFC at origin sets the minimum breaking capacity for protective devices in the installation. GN3 step — measure between L-N (PSCC) and L-PE (PEFC), record the higher value."
            },
            {
              number: 10,
              prompt: "An installation in a HRRB has socket outlets ≤ 32 A. Reg 421.1.7 requires:",
              options: {
                A: "AFDDs at the origin of each socket-outlet final circuit",
                B: "AFDD only on lighting circuits",
                C: "No AFDDs",
                D: "AFDDs only on circuits > 32 A"
              },
              answer: "A",
              explanation: "Reg 421.1.7 'shall' — AFDDs are required for AC final circuits supplying socket outlets ≤ 32 A in the four named higher-risk premises."
            },
            {
              number: 11,
              prompt: "An installation with 30 mA RCD additional protection on the cooker circuit and a 6 mm² T&E cable hidden in a wall < 50 mm:",
              options: {
                A: "Satisfies Reg 522.6.202 if the cable is in a safe zone (RCD + safe zone combination)",
                B: "Satisfies it without RCD",
                C: "Requires earthed conduit always",
                D: "Cannot be installed"
              },
              answer: "A",
              explanation: "Reg 522.6.202 — safe zone + 30 mA RCD additional protection is one of the three permitted compliance routes for cables < 50 mm in walls."
            },
            {
              number: 12,
              prompt: "An IR test on a 32 A radial socket circuit with the appliance unplugged gives 50 MΩ between L-PE. This is:",
              options: {
                A: "Acceptable (≥ 1 MΩ, comfortably exceeds the BS 7671 acceptance limit)",
                B: "Unacceptable — should be 0",
                C: "Unacceptable — should be > 100 MΩ",
                D: "Indicates a short circuit"
              },
              answer: "A",
              explanation: "BS 7671 — minimum acceptable IR ≥ 1.0 MΩ. 50 MΩ is comfortably acceptable. Industry guidance says values > 100 MΩ are 'good'; < 1 MΩ is a fail."
            },
            {
              number: 13,
              prompt: "An installation has measured Ze of 0.32 Ω. The DNO declared maximum on a TN-C-S supply is 0.35 Ω. The reading is:",
              options: {
                A: "Within the declared maximum, so acceptable",
                B: "Over the limit",
                C: "Equal to the limit; fail",
                D: "A wiring error"
              },
              answer: "A",
              explanation: "Ze ≤ DNO declared maximum (0.35 Ω for typical TN-C-S). 0.32 Ω is within. Recording and comparison is part of GN3's recommended practice."
            },
            {
              number: 14,
              prompt: "A circuit's Schedule of Test Results entry for a 30 mA RCD shows ½×IΔn no-trip, 1×IΔn 240 ms, 5×IΔn 25 ms. This is:",
              options: {
                A: "Pass — within all the manufacturer/standard limits",
                B: "Fail — should not trip at 1×IΔn",
                C: "Fail at 5×IΔn",
                D: "Indicates a wrong RCD type"
              },
              answer: "A",
              explanation: "BS EN 61008/61009 — general-type 30 mA RCD: no trip at ½×IΔn (immunity); ≤ 300 ms at 1×IΔn; ≤ 40 ms at 5×IΔn. The entries (240 ms; 25 ms) all pass."
            },
            {
              number: 15,
              prompt: "An EV charge point installation in a domestic garage on TN-C-S without an open-PEN device or separating transformer requires:",
              options: {
                A: "A local earth electrode at the installation that satisfies Section 722's resistance and touch-voltage criteria",
                B: "TN-C-S to be banned",
                C: "An SPD only",
                D: "An AFDD"
              },
              answer: "A",
              explanation: "Reg 722.411.4.1 — three options. Without an open-PEN device or separating transformer, a local earth electrode meeting Section 722's criteria is the only remaining permitted route."
            },
            {
              number: 16,
              prompt: "Section 826 (Prosumer) — labelling at the consumer unit must include:",
              options: {
                A: "Identification of the alternative source(s) and isolation points (Reg 514.15)",
                B: "Only manufacturer name",
                C: "Only supply tariff",
                D: "Only the EICR date"
              },
              answer: "A",
              explanation: "Reg 514.15 — alternative-source warning. The label must indicate the alternative source(s) and the points at which the supply must be isolated to make the installation safe."
            },
            {
              number: 17,
              prompt: "An installation with a TT supply and a 30 mA RCD measured RA = 80 Ω. Is this acceptable?",
              options: {
                A: "Yes — within the practical limit (≤ 200 Ω) and within the touch-voltage limit (RA × IΔn = 2.4 V)",
                B: "No — should be < 1 Ω",
                C: "Cannot be determined",
                D: "Should be 1667 Ω"
              },
              answer: "A",
              explanation: "Practical limit ≤ 200 Ω; touch-voltage check RA × IΔn = 80 × 0.030 = 2.4 V ≪ 50 V. The TT installation is acceptable."
            },
            {
              number: 18,
              prompt: "Section 559 — luminaires connected to a circuit via a flexible cord:",
              options: {
                A: "Must use a flex appropriate for the load and method of suspension; through-wiring only where the luminaire is designed for it",
                B: "Always use 6 A protection",
                C: "Always use Class II",
                D: "Always use SELV"
              },
              answer: "A",
              explanation: "Section 559 — luminaire connections must be selected for the load, the suspension method, and any heat exposure. Through-wiring requires a luminaire designed and marked for it."
            },
            {
              number: 19,
              prompt: "On a 230 V TN-C-S supply with declared Ze 0.35 Ω, a 32 A radial circuit using 6 mm² T&E with R1+R2 of 0.8 Ω: Zs is:",
              options: {
                A: "0.35 Ω",
                B: "0.8 Ω",
                C: "1.15 Ω",
                D: "1.37 Ω"
              },
              answer: "C",
              explanation: "Zs = Ze + R1+R2 = 0.35 + 0.8 = 1.15 Ω. Within Type B 32 A maximum 1.37 Ω."
            },
            {
              number: 20,
              prompt: "An installation served by a public LV supply has a 30 m run of 1.5 mm² T&E in a lighting circuit at design current 8 A. Voltage drop is approximately:",
              options: {
                A: "≈ 7 V (3%)",
                B: "≈ 11 V (4.8%)",
                C: "≈ 4 V (1.7%)",
                D: "≈ 2 V (0.9%)"
              },
              answer: "A",
              explanation: "1.5 mm² ≈ 29 mV/A/m. V = (29 × 8 × 30)/1000 = 6.96 V ≈ 3.0%. Right at the 3% lighting limit on public LV — acceptable but no margin."
            },
            {
              number: 21,
              prompt: "A circuit using a 6491X single-core in conduit shares an enclosure with a Band I telecom cable. Per Section 528:",
              options: {
                A: "Segregation by partition, or use of cable rated for the higher voltage band, is required",
                B: "No requirement",
                C: "1 m clearance always",
                D: "Use only in conduit always"
              },
              answer: "A",
              explanation: "Reg 528.1 — different voltage bands either physically separated or use cables rated for the highest voltage present. Mixing without one of those measures is non-compliant."
            },
            {
              number: 22,
              prompt: "An EICR reveals an unprotected exposed live conductor at a damaged consumer-unit cover. Coding:",
              options: {
                A: "C1 (immediate danger)",
                B: "C2 (potentially dangerous)",
                C: "C3 (improvement recommended)",
                D: "FI"
              },
              answer: "A",
              explanation: "Exposed live conductors are an immediate hazard — C1. Notify the duty holder immediately and recommend isolation until rectified."
            },
            {
              number: 23,
              prompt: "An IR test reading on a circuit's L-PE is 0.5 MΩ. Acceptable?",
              options: {
                A: "No — below the BS 7671 minimum 1.0 MΩ; investigate the insulation",
                B: "Yes",
                C: "Just at the limit",
                D: "Acceptable only at SELV"
              },
              answer: "A",
              explanation: "BS 7671 — minimum IR ≥ 1.0 MΩ for LV. 0.5 MΩ fails. Investigate degraded insulation, moisture, damaged cable, or connected equipment."
            },
            {
              number: 24,
              prompt: "Section 826 — an inverter that operates in continuous parallel mode with the public supply must:",
              options: {
                A: "Meet G98/G99 connection conditions including anti-islanding, voltage and frequency limits, and labelling at the origin",
                B: "Operate independently of the DNO supply at all times",
                C: "Operate with no labelling",
                D: "Use Type AC RCD only"
              },
              answer: "A",
              explanation: "G98/G99 — anti-islanding, voltage and frequency operating limits, fault-clearance requirements, plus BS 7671 labelling and isolation at the origin and the inverter."
            },
            {
              number: 25,
              prompt: "An exam question asks for the IPX rating of equipment in a marina seashore location. The answer is:",
              options: {
                A: "IPX6",
                B: "IPX4",
                C: "IPX2",
                D: "IPX5"
              },
              answer: "A",
              explanation: "Section 709 (marinas) — seashore IPX6 (powerful jets / heavy seas). Inland marinas typically require IPX4 / IPX5 only."
            }
          ]
        },
        {
          id: "v5",
          questions: [
            {
              number: 1,
              prompt: "On a domestic 32 A ring final circuit using 2.5/1.5 T&E with Ze 0.35 Ω and ring r1+r2 of 0.8 Ω at the parallel-connected centre, the worst-case Zs is approximately:",
              options: {
                A: "0.35 + 0.8/4 = 0.55 Ω",
                B: "0.35 + 0.8 = 1.15 Ω",
                C: "0.8 Ω",
                D: "0.35 Ω"
              },
              answer: "A",
              explanation: "Ring R1+R2 = (r1+r2)/4 at the centre. Zs = 0.35 + 0.8/4 = 0.55 Ω. Comfortably within 1.37 Ω."
            },
            {
              number: 2,
              prompt: "A TT installation feeding a single dwelling — the recommended periodic inspection frequency is typically (GN3):",
              options: {
                A: "Every 5 years (rented) or 10 years (owner-occupied) as a starting point",
                B: "Every 1 month",
                C: "Every 50 years",
                D: "Never"
              },
              answer: "A",
              explanation: "GN3 typical frequency table — owner-occupied dwellings ≤ 10 years, rented ≤ 5 years (or change of tenancy). Adjusted for use, maintenance and external influences per Reg 651."
            },
            {
              number: 3,
              prompt: "A consumer unit installed in a domestic dwelling that includes Type B RCDs (for an EV circuit) must:",
              options: {
                A: "Coordinate with upstream protective devices to avoid nuisance tripping and provide DC fault sensitivity at the EV circuit",
                B: "Operate at 415 V",
                C: "Use Type AC RCDs",
                D: "Have no SPD"
              },
              answer: "A",
              explanation: "Where Type B is at the EV circuit, the upstream protection (often the main switch or an upstream RCD) must coordinate with it. Practical layouts often place the Type B inside the EV charger itself, with non-RCD upstream protection."
            },
            {
              number: 4,
              prompt: "An installation supplied at 230 V TN-S with Ze 0.4 Ω and a 32 A Type C MCB final circuit needs R1+R2 not exceeding (Table 41.3) approximately:",
              options: {
                A: "0.28 Ω (Zs ≤ 0.68 Ω)",
                B: "0.97 Ω (Zs ≤ 1.37 Ω)",
                C: "1.0 Ω",
                D: "Unlimited"
              },
              answer: "A",
              explanation: "Type C 32 A: Ia = 320 A. Max Zs = (0.95×230)/320 ≈ 0.68 Ω. With Ze 0.4 Ω, R1+R2 ≤ 0.28 Ω. Type C devices are demanding on the cable contribution."
            },
            {
              number: 5,
              prompt: "An EV installation with a separating transformer eliminates the need for:",
              options: {
                A: "An open-PEN device or local earth electrode (the separating transformer galvanically isolates the EV from the DNO neutral)",
                B: "An AFDD",
                C: "An SPD",
                D: "All RCD requirements"
              },
              answer: "A",
              explanation: "Reg 722.411.4.1 — separating transformer is one of the three permitted methods. The other two (open-PEN device, local electrode) are alternatives. RCD requirements (Type B / RDC-DD) are independent."
            },
            {
              number: 6,
              prompt: "A bath/shower room with no incoming gas and a copper water service that is bonded at the MET:",
              options: {
                A: "May permit omission of supplementary bonding if the four conditions of Reg 701.415.2 are all met",
                B: "Always requires supplementary bonding",
                C: "Never requires bonding",
                D: "Requires only RCD protection"
              },
              answer: "A",
              explanation: "Reg 701.415.2 — supplementary bonding may be omitted only when ADS times are met, every final circuit has 30 mA RCD additional protection, and ALL extraneous-conductive-parts of the location are connected to the protective equipotential bonding."
            },
            {
              number: 7,
              prompt: "Section 421.1.7 — AFDDs in HMOs apply to:",
              options: {
                A: "AC final circuits supplying socket outlets ≤ 32 A in the HMO",
                B: "Lighting circuits only",
                C: "Distribution circuits only",
                D: "All circuits without exception"
              },
              answer: "A",
              explanation: "Reg 421.1.7 'shall' applies to socket-outlet final circuits ≤ 32 A in HMOs. Lighting in HMOs is 'recommended' for AFDD, not 'shall'."
            },
            {
              number: 8,
              prompt: "An installation with declared maximum demand 60 A — the design current for the main supply cable would typically be:",
              options: {
                A: "60 A (informed by diversity calculations from connected loads, then verified by the DNO supply rating)",
                B: "100 A always",
                C: "32 A always",
                D: "230 A always"
              },
              answer: "A",
              explanation: "Maximum demand drives main cable sizing. Diversity factors from OSG Appendix A (or specific calculation) inform the design current. The DNO supply rating (typically 60/80/100 A on cut-out) constrains the supply cable design."
            },
            {
              number: 9,
              prompt: "Reg 411.5 — TT installation 30 mA RCD trip ½×IΔn must not trip; at IΔn must trip ≤ 300 ms; at 5×IΔn ≤ 40 ms. The 5×IΔn test is to verify:",
              options: {
                A: "The RCD's rapid response under direct-contact additional-protection scenarios",
                B: "The cable continuity",
                C: "The polarity",
                D: "The Ze"
              },
              answer: "A",
              explanation: "5×IΔn simulates a high-leakage direct-contact scenario. The very fast trip (≤ 40 ms) ensures human safety against sustained shock, comfortably within the heart's vulnerable cardiac cycle."
            },
            {
              number: 10,
              prompt: "An installation has a Zs measurement on a 16 A Type B MCB of 1.5 Ω. Tabulated max (Table 41.3) is 2.87 Ω. The reading is:",
              options: {
                A: "Within the limit — acceptable",
                B: "Over the limit — fail",
                C: "Exactly at the limit",
                D: "Cannot tell"
              },
              answer: "A",
              explanation: "Type B 16 A: Ia = 80 A; Zs = (0.95×230)/80 ≈ 2.73 → 2.87 Ω as tabulated. 1.5 Ω is comfortably within."
            },
            {
              number: 11,
              prompt: "Section 712 — the DC isolator at a PV array's combiner box must be:",
              options: {
                A: "DC-rated and capable of breaking the array's full Voc and Isc under load",
                B: "Standard AC switch",
                C: "A fuse only",
                D: "A relay only"
              },
              answer: "A",
              explanation: "Section 712 — DC switchgear must be rated for DC operation (no natural zero crossing). Selection considers Voc(STC) at minimum operating temperature for voltage, and Isc(STC) × 1.25 for current."
            },
            {
              number: 12,
              prompt: "An installation in a livestock building with Section 705 has a 30 mA RCD and RA measured at 100 Ω. The touch voltage for IΔn is:",
              options: {
                A: "100 × 0.030 = 3 V (within the 25 V livestock limit)",
                B: "Over the 25 V limit",
                C: "Over the 50 V limit",
                D: "Cannot be determined"
              },
              answer: "A",
              explanation: "Touch voltage at trip = RA × IΔn = 3 V. Below the 25 V livestock limit and the 50 V general limit."
            },
            {
              number: 13,
              prompt: "A construction-site distribution assembly (BS EN 61439-4) typical IP rating is:",
              options: {
                A: "IP44 or IP54 outdoors",
                B: "IP20",
                C: "IP00",
                D: "IPX8"
              },
              answer: "A",
              explanation: "Construction-site assemblies are robust: IP44 commonly outdoors (jet-resistance not required) and IP54 in wet locations. Mechanical impact rating typically IK08 or higher."
            },
            {
              number: 14,
              prompt: "Reg 522.6.202 / 522.6.203 — cables in metal-stud partitions are treated:",
              options: {
                A: "As if they were in walls (need safe zone + 30 mA RCD, mechanical protection, or earthed metallic covering)",
                B: "Identically to surface-mounted cables",
                C: "Without any restrictions",
                D: "Only with conduit"
              },
              answer: "A",
              explanation: "Reg 522.6.203 — cables in metal-stud partitions are treated as buried in walls < 50 mm and must satisfy 522.6.202's three permitted compliance routes."
            },
            {
              number: 15,
              prompt: "A 230 V TN-C-S supply with declared Ze 0.35 Ω and a 32 A Type B MCB final circuit. R1+R2 of 0.7 Ω. Zs is:",
              options: {
                A: "1.05 Ω (within 1.37 Ω limit)",
                B: "0.35 Ω",
                C: "0.7 Ω",
                D: "1.37 Ω"
              },
              answer: "A",
              explanation: "Zs = Ze + R1+R2 = 0.35 + 0.7 = 1.05 Ω. Within the Type B 32 A maximum Zs of 1.37 Ω."
            },
            {
              number: 16,
              prompt: "Section 826 — battery storage in a dwelling — labelling must indicate:",
              options: {
                A: "DC isolation point, AC isolation point, presence of an alternative source, and the points to isolate before working downstream",
                B: "Only manufacturer name",
                C: "Only price",
                D: "Only meter ID"
              },
              answer: "A",
              explanation: "Reg 514.15 / Section 826 — labelling must enable safe isolation. Battery installations must label both DC and AC sides, since isolating one does not isolate the other."
            },
            {
              number: 17,
              prompt: "An RCD's IΔn is the:",
              options: {
                A: "Rated residual operating current",
                B: "Rated normal current",
                C: "Maximum breaking capacity",
                D: "Maximum touch voltage"
              },
              answer: "A",
              explanation: "IΔn = rated residual operating current. The current at or above which the RCD must trip. (In = rated normal current; not the same.)"
            },
            {
              number: 18,
              prompt: "An RCD installed at the consumer unit on a TN-C-S supply protecting a 32 A socket-outlet circuit must:",
              options: {
                A: "Be at least Type A (default minimum) with IΔn ≤ 30 mA for additional protection",
                B: "Be Type AC always",
                C: "Be Type B always",
                D: "Have IΔn = 100 mA"
              },
              answer: "A",
              explanation: "A2:2022 — minimum default Type A. IΔn ≤ 30 mA for additional protection on socket-outlet circuits ≤ 32 A (Reg 411.3.3)."
            },
            {
              number: 19,
              prompt: "On a TT installation, the ½×IΔn no-trip test should be carried out:",
              options: {
                A: "On every RCD to confirm immunity to nuisance tripping",
                B: "Only at IΔn",
                C: "Only at 5×IΔn",
                D: "Never"
              },
              answer: "A",
              explanation: "GN3 RCD tests — ½×IΔn no-trip; 1×IΔn ≤ 300 ms general type; 5×IΔn ≤ 40 ms. All three confirm the RCD's correct response across the operating spectrum."
            },
            {
              number: 20,
              prompt: "An installation supplies a small workshop with three-phase loads. The required RCD on socket outlets ≤ 32 A is:",
              options: {
                A: "30 mA additional protection (per Reg 411.3.3) — typically four-pole on three-phase outlets",
                B: "100 mA always",
                C: "300 mA always",
                D: "Optional"
              },
              answer: "A",
              explanation: "Reg 411.3.3 — additional protection by 30 mA RCD on socket outlets ≤ 32 A in general use. Three-phase outlets need a four-pole 30 mA RCD covering all three lines and the neutral."
            },
            {
              number: 21,
              prompt: "A circuit's polarity must be verified at:",
              options: {
                A: "Every accessory and at the origin (each socket, switch, lampholder etc.)",
                B: "Only the origin",
                C: "Only at the consumer unit",
                D: "Never"
              },
              answer: "A",
              explanation: "GN3 — polarity check at every accessory and at the origin. Wrong polarity (line connected to a switched neutral) is a serious hazard, and reverse polarity at any point is a fail."
            },
            {
              number: 22,
              prompt: "An installation that includes an SPD at the origin and has been accepted via the Appendix 16 risk assessment:",
              options: {
                A: "Records the risk-assessment basis and the SPD provision on the EIC and design records",
                B: "Has no documentation requirement",
                C: "Must be replaced annually",
                D: "Cannot be approved"
              },
              answer: "A",
              explanation: "Section 443.5 / Appendix 16 — the basis of the SPD decision (or omission decision) is documented in the design records. The EIC records the SPD type and rating where fitted."
            },
            {
              number: 23,
              prompt: "A 30 mA RCD installed on a 32 A socket-outlet circuit in a HMO:",
              options: {
                A: "Provides additional protection (Reg 411.3.3); AFDD on the same circuit is mandatory under Reg 421.1.7",
                B: "Replaces the AFDD requirement",
                C: "Means no AFDD is required",
                D: "Means the MCB can be omitted"
              },
              answer: "A",
              explanation: "RCD = additional protection against direct contact. AFDD = fire risk from arcing. They are independent functions; both are required in HMOs for socket-outlet final circuits ≤ 32 A under A2:2022."
            },
            {
              number: 24,
              prompt: "Section 826 — a switched alternative source mode interlock prevents:",
              options: {
                A: "Paralleling of public supply and local source — only one is allowed at a time",
                B: "RCD operation",
                C: "AFDD operation",
                D: "Cable derating"
              },
              answer: "A",
              explanation: "Reg 551 / 826 — switched (changeover) mode uses mechanical interlocks on the changeover device to prevent both sources being connected to the load simultaneously."
            },
            {
              number: 25,
              prompt: "An installation supplied by a private LV transformer has voltage drop limits of:",
              options: {
                A: "6% lighting / 8% other (Appendix 4 Note)",
                B: "3% lighting / 5% other",
                C: "1% / 2%",
                D: "10% / 12%"
              },
              answer: "A",
              explanation: "Appendix 4 — installations from a private LV source (own transformer or generator): 6% lighting / 8% other. Public LV supply: 3% / 5%."
            }
          ]
        }
      ]
    },
    {
      id: "section-6-merged-design-rules",
      title: "Section 6 — Merged Wiring Regulations Design Questions",
      variants: [
        {
          id: "v1",
          questions: [
            {
              number: 1,
              prompt: "In Zone 1 of a room containing a bath or shower, a wall-mounted extractor fan is:",
              options: {
                A: "Not allowed under any circumstances",
                B: "Allowed providing it is rated IP4X only",
                C: "Allowed providing it is at least IPX7",
                D: "Allowed if suitable for Zone 1, at least IPX4 (IPX5 where water jets are likely), and on a 30 mA RCD-protected circuit"
              },
              answer: "D",
              explanation: "Section 701 — equipment in Zone 1 must be suitable for that zone, with at least IPX4 (IPX5 where jets are likely) and 30 mA RCD additional protection on the circuit. SELV fans are common, but Zone 1 is not a blanket ban on mains-rated equipment."
            },
            {
              number: 2,
              prompt: "Residual current devices detect:",
              options: {
                A: "Overloads, short circuits and earth faults",
                B: "Earth faults (residual currents) only",
                C: "Short circuits and earth faults only",
                D: "Overloads and short circuits only"
              },
              answer: "B",
              explanation: "An RCD compares L and N current — when they differ (residual leakage to earth) the RCD trips. Overload and short-circuit are the job of the MCB / fuse. RCBOs combine both functions."
            },
            {
              number: 3,
              prompt: "Overload-protection coordination conditions are met when:",
              options: {
                A: "Ib = 15 A, In = 20 A, Iz = 18 A",
                B: "Ib = 2.5 A, In = 10 A, Iz = 8 A",
                C: "Ib = 20 A, In = 15 A, Iz = 15 A",
                D: "Ib = 10 A, In = 15 A, Iz = 18 A"
              },
              answer: "D",
              explanation: "Reg 433.1: Ib ≤ In ≤ Iz. Only D satisfies (10 ≤ 15 ≤ 18). A and B both have In > Iz; C has Ib > In."
            },
            {
              number: 4,
              prompt: "The breaking capacity of a protective device must:",
              options: {
                A: "Not exceed PFC",
                B: "Exceed PEFC but not PSCC",
                C: "Exceed the prospective fault current at its point of installation",
                D: "Not exceed PEFC but exceed PSCC"
              },
              answer: "C",
              explanation: "Reg 434.5.1 — the breaking capacity must not be less than the prospective fault current at the point of installation. If PFC exceeds breaking capacity, an upstream device must back up the protection."
            },
            {
              number: 5,
              prompt: "Low voltage as defined in BS 7671 has a value not exceeding:",
              options: {
                A: "650 V a.c.",
                B: "50 V a.c.",
                C: "1000 V a.c. (or 1500 V d.c.) between conductors",
                D: "1500 V a.c."
              },
              answer: "C",
              explanation: "BS 7671 voltage bands: ELV ≤ 50 V a.c. (Band I), LV from 50 V to 1000 V a.c. or 1500 V d.c. between conductors (Band II). Domestic 230 V sits squarely in LV."
            },
            {
              number: 6,
              prompt: "The effect thermal insulation has on a cable is to:",
              options: {
                A: "Increase cable bunching",
                B: "Increase its current-carrying capacity",
                C: "Decrease its voltage drop",
                D: "Decrease its current-carrying capacity (Ci derating factor applied)"
              },
              answer: "D",
              explanation: "Insulation traps the heat the cable generates — derating factor Ci is applied (Reg 523.9 / Table 4B1). The cable's safe Iz drops; design current must drop to match, or a larger CSA is used."
            },
            {
              number: 7,
              prompt: "Overcurrent protection rating for lighting circuits in domestic installations is:",
              options: {
                A: "Dependent on the design current of the circuit",
                B: "Always 6 A",
                C: "Always 10 A",
                D: "Dependent on the supply voltage"
              },
              answer: "A",
              explanation: "There's no fixed lighting-circuit fuse rating — design current Ib drives the choice (Reg 433). Common ratings are 6 A or 10 A but heavily loaded circuits may need 16 A; small circuits may use 5 A."
            },
            {
              number: 8,
              prompt: "Prevention of indirect energising of a circuit intended to be isolated is achieved by:",
              options: {
                A: "Separation of all final circuits from each other (Reg 314)",
                B: "Ensuring devices are suitably labelled",
                C: "Installing a 100 mA RCD",
                D: "Displaying a danger notice"
              },
              answer: "A",
              explanation: "Indirect energising = an isolated circuit becoming live again via shared neutral, back-fed source, or interconnected wiring. Separation of circuits at the design stage prevents the path existing."
            },
            {
              number: 9,
              prompt: "The horizontal top surface of a barrier or enclosure that is readily accessible must provide a minimum protection of:",
              options: {
                A: "IP55",
                B: "IPXXB / IP2X",
                C: "IPX4",
                D: "IPXXD / IP4X"
              },
              answer: "D",
              explanation: "Reg 416.2.2 — horizontal top surfaces (where objects might be placed and fall in) need IPXXD / IP4X (1 mm wire). Vertical surfaces need only IPXXB / IP2X (finger-safe)."
            },
            {
              number: 10,
              prompt: "A flat twin-and-earth cable buried 20 mm into a living-room wall without mechanical protection should be:",
              options: {
                A: "RCD protected only",
                B: "Buried at any depth",
                C: "Installed in a safe zone AND on a 30 mA RCD",
                D: "Installed in mini trunking and in the safe zone"
              },
              answer: "C",
              explanation: "Reg 522.6.202 — buried cables less than 50 mm deep without mechanical protection must be in a safe zone AND have 30 mA RCD additional protection. Safe zone alone isn't enough at this depth."
            },
            {
              number: 11,
              prompt: "Maximum demand on a domestic dwelling installation is determined by:",
              options: {
                A: "Adding all rated loads with no diversity",
                B: "Applying diversity factors (typically OSG Appendix A) to the connected loads",
                C: "Using the supply cut-out rating only",
                D: "Using the meter rating only"
              },
              answer: "B",
              explanation: "Designers calculate maximum demand by applying diversity factors to the connected loads. OSG Appendix A provides typical factors for domestic premises. The design must be checked against the DNO supply rating."
            },
            {
              number: 12,
              prompt: "A 6 mm² T&E cable on a 30 m run carrying 32 A on a 230 V single-phase circuit — voltage drop is approximately:",
              options: {
                A: "≈ 7 V (≈ 3%)",
                B: "≈ 14 V (≈ 6%)",
                C: "≈ 22 V (≈ 9.6%)",
                D: "≈ 1 V (≈ 0.5%)"
              },
              answer: "A",
              explanation: "6 mm² ≈ 7.3 mV/A/m. V = (7.3 × 32 × 30)/1000 ≈ 7.0 V ≈ 3%. Within 3% lighting and 5% other-uses limits on public LV."
            },
            {
              number: 13,
              prompt: "A standard 32 A ring final circuit using 2.5/1.5 mm² T&E typically supports a floor area of up to:",
              options: {
                A: "100 m² (OSG guidance)",
                B: "10 m²",
                C: "300 m²",
                D: "1000 m²"
              },
              answer: "A",
              explanation: "OSG guidance — a 32 A ring final circuit typically serves up to 100 m² of domestic floor area (with appropriate diversity assumptions). Larger areas need additional rings or radial circuits."
            },
            {
              number: 14,
              prompt: "Cable derating factor Ca applies for:",
              options: {
                A: "Ambient temperature different from the reference (usually 30°C)",
                B: "Conduit fill",
                C: "Soil resistivity",
                D: "Cable colour"
              },
              answer: "A",
              explanation: "Ca corrects for ambient temperature. Standard cable tables assume 30°C ambient; warmer ambients (e.g. boiler rooms, hot ceilings) reduce the cable's safe Iz, so Ca < 1 derates the cable."
            },
            {
              number: 15,
              prompt: "Cable derating Cg is applied for:",
              options: {
                A: "Grouping of cables — multiple cables in close proximity reduce each other's heat dissipation",
                B: "Cable colour",
                C: "Cable manufacturer",
                D: "Cable jacket only"
              },
              answer: "A",
              explanation: "Cg accounts for grouping of cables (e.g. several circuits run together in trunking). Each cable contributes heat that the group must dissipate; the group derating reduces individual ratings."
            },
            {
              number: 16,
              prompt: "Discrimination between two protective devices in series ensures:",
              options: {
                A: "The downstream device operates first on a fault, leaving the upstream device intact",
                B: "Both devices trip simultaneously",
                C: "The upstream device trips first",
                D: "Neither device trips"
              },
              answer: "A",
              explanation: "Reg 535/536 — discrimination (selectivity) ensures the device closest to the fault trips first, preserving the rest of the installation. Achieved by current rating ratio, time delay (S-type RCDs) or both."
            },
            {
              number: 17,
              prompt: "A 32 A ring final circuit's effective Iz is the cable's tabulated rating multiplied by:",
              options: {
                A: "All applicable derating factors (Ca × Cg × Ci × Cc as relevant)",
                B: "1.45",
                C: "0.5",
                D: "Always 1.0"
              },
              answer: "A",
              explanation: "Effective Iz = It × Ca × Cg × Ci × Cc where each factor adjusts for the relevant influence (ambient temperature, grouping, thermal insulation, BS 3036 fuse / buried etc.). The result must satisfy Ib ≤ In ≤ Iz."
            },
            {
              number: 18,
              prompt: "An installation Reference Method 100 (cable in thermal insulation contacting one side) requires Ci correction of approximately:",
              options: {
                A: "0.78 typical (Table 4B1)",
                B: "1.0 (no derating)",
                C: "0.5",
                D: "0.25"
              },
              answer: "A",
              explanation: "Method 100 — cable contacting thermal insulation on one side. Typical Ci ≈ 0.78. (Method 103 — fully enclosed in insulation — Ci ≈ 0.5.)"
            },
            {
              number: 19,
              prompt: "A 16 A Type C MCB at 230 V with declared Ze 0.8 Ω — required R1+R2 ≤:",
              options: {
                A: "0.57 Ω (Zs ≤ 1.37 Ω)",
                B: "1.0 Ω (Zs ≤ 1.8 Ω)",
                C: "0.21 Ω",
                D: "Unlimited"
              },
              answer: "A",
              explanation: "Type C 16 A: max Zs ≈ 1.37 Ω. With Ze 0.8 Ω, R1+R2 ≤ 0.57 Ω."
            },
            {
              number: 20,
              prompt: "Section 132.6 ('Conductors') drives the selection of conductor CSA based on:",
              options: {
                A: "Current capacity, voltage drop, electromechanical/thermal stress and harmonics",
                B: "Cost only",
                C: "Manufacturer only",
                D: "Length only"
              },
              answer: "A",
              explanation: "Reg 132.6 — conductor selection considers current-carrying capacity, voltage drop, electrodynamic and electromechanical stress during fault, conductor temperature limits, and harmonic effects."
            },
            {
              number: 21,
              prompt: "An RCBO combines:",
              options: {
                A: "Residual-current detection AND overcurrent (overload + short-circuit) protection in a single device",
                B: "RCD and SPD",
                C: "MCB and AFDD",
                D: "MCB and SPD"
              },
              answer: "A",
              explanation: "BS EN 61009 — RCBO. Common in domestic CUs to provide per-circuit RCD discrimination (avoiding the 'split-load' nuisance trip problem)."
            },
            {
              number: 22,
              prompt: "An RCD providing additional protection (Reg 415.1) IΔn must be:",
              options: {
                A: "≤ 30 mA",
                B: "≤ 100 mA",
                C: "≤ 300 mA",
                D: "≤ 500 mA"
              },
              answer: "A",
              explanation: "Reg 415.1 — additional protection RCD: IΔn ≤ 30 mA. 100/300 mA RCDs serve fire-mitigation and fault-protection roles, not additional protection."
            },
            {
              number: 23,
              prompt: "An installation has cable derating: Ca = 0.94, Cg = 0.7, Ci = 1.0, Cc = 1.0. Tabulated It = 30 A. Effective Iz is approximately:",
              options: {
                A: "≈ 19.7 A",
                B: "≈ 30 A",
                C: "≈ 22 A",
                D: "≈ 0 A"
              },
              answer: "A",
              explanation: "Effective Iz = It × Ca × Cg × Ci × Cc = 30 × 0.94 × 0.7 × 1.0 × 1.0 ≈ 19.7 A. The chosen MCB In must be ≤ 19.7 A."
            },
            {
              number: 24,
              prompt: "Voltage drop on a 3-phase circuit is calculated using:",
              options: {
                A: "(mV/A/m × Ib × L)/1000 with the relevant factor for 3-phase, OR direct from a 3-phase mV/A/m tabulated value",
                B: "(mV/A/m × Ib × L × 0.5)/1000",
                C: "(mV/A/m × L)/1000",
                D: "(mV/A/m × Ib)/1000"
              },
              answer: "A",
              explanation: "BS 7671 Appendix 4 — for single-phase, V = (mV/A/m × Ib × L)/1000. For 3-phase, the tabulated mV/A/m already accounts for the line-to-line factor; or apply √3 explicitly when using single-conductor data."
            },
            {
              number: 25,
              prompt: "A 4 mm² T&E cable on a 30 m run carrying 25 A on a 230 V single-phase circuit — voltage drop is approximately:",
              options: {
                A: "≈ 8.3 V (3.6%)",
                B: "≈ 14 V (6.1%)",
                C: "≈ 4 V (1.7%)",
                D: "≈ 25 V (10.9%)"
              },
              answer: "A",
              explanation: "4 mm² ≈ 11 mV/A/m. V = (11 × 25 × 30)/1000 = 8.25 V ≈ 3.59%. Within 5% other-uses public LV limit; over 3% lighting."
            }
          ]
        },
        {
          id: "v2",
          questions: [
            {
              number: 1,
              prompt: "An installation supplied from a public LV network — voltage drop limits are:",
              options: {
                A: "3% lighting / 5% other",
                B: "6% lighting / 8% other",
                C: "1% / 2%",
                D: "10% / 12%"
              },
              answer: "A",
              explanation: "Appendix 4 — public LV supply: 3% lighting, 5% other. (Private LV source: 6%/8%.)"
            },
            {
              number: 2,
              prompt: "Reg 433.1.1 conditions for overload protection are:",
              options: {
                A: "Ib ≤ In ≤ Iz",
                B: "Ib ≥ In ≥ Iz",
                C: "Ib = Iz always",
                D: "Ib > In > Iz"
              },
              answer: "A",
              explanation: "Reg 433.1.1 — design current Ib not exceeding device rating In not exceeding cable capacity Iz. Plus In ≤ I2 ≤ 1.45 Iz (the 1.45 limit constrains how much the device may permit before clearing)."
            },
            {
              number: 3,
              prompt: "An MCB's tripping current at 5 × In (Type B) is:",
              options: {
                A: "5 × In",
                B: "10 × In",
                C: "20 × In",
                D: "30 × In"
              },
              answer: "A",
              explanation: "Type B: Ia at 0.4 s = 5 × In. Type C: 10 × In. Type D: 20 × In. Used to derive maximum Zs values: Zs = (Cmin × U₀)/Ia."
            },
            {
              number: 4,
              prompt: "An MCB Type C tripping current is:",
              options: {
                A: "5 × In",
                B: "10 × In",
                C: "20 × In",
                D: "50 × In"
              },
              answer: "B",
              explanation: "Type C: Ia = 10 × In. Used for circuits with moderate inrush (motors, transformer primary, larger lighting groups). Demands lower Zs than Type B for the same In."
            },
            {
              number: 5,
              prompt: "A 32 A Type B MCB at 230 V — Ia is:",
              options: {
                A: "160 A",
                B: "320 A",
                C: "640 A",
                D: "32 A"
              },
              answer: "A",
              explanation: "Type B 32 A: Ia = 5 × 32 = 160 A. Maximum Zs = (0.95 × 230)/160 ≈ 1.37 Ω (Table 41.3 0.4 s)."
            },
            {
              number: 6,
              prompt: "A 32 A Type D MCB at 230 V — Ia is:",
              options: {
                A: "160 A",
                B: "320 A",
                C: "640 A",
                D: "1600 A"
              },
              answer: "C",
              explanation: "Type D 32 A: Ia = 20 × 32 = 640 A. Maximum Zs = (0.95 × 230)/640 ≈ 0.34 Ω. Type D devices need very low Zs to achieve disconnection."
            },
            {
              number: 7,
              prompt: "An installation with a 25 m run of 16 mm² Cu cable on a 230 V three-phase 4-wire circuit, line current 100 A, line-to-line voltage drop is approximately:",
              options: {
                A: "≈ 2.4 V (≈ 0.6% of 400 V) using (mV/A/m × Ib × L × √3)/1000",
                B: "≈ 28 V (7.0%)",
                C: "≈ 14 V (3.5%)",
                D: "≈ 7 V (1.75%)"
              },
              answer: "D",
              explanation: "16 mm² 3-phase mV/A/m ≈ 2.4 (Appendix 4 Table 4D1B 3-ph). V = (2.4 × 100 × 25)/1000 = 6 V ≈ 1.5% of 400 V. Often given as ~7 V depending on the table version (the 3-phase mV/A/m varies slightly by reactive split)."
            },
            {
              number: 8,
              prompt: "A 100 A Type B MCB at 230 V — required Zs ≤:",
              options: {
                A: "0.44 Ω",
                B: "1.37 Ω",
                C: "2.87 Ω",
                D: "0.91 Ω"
              },
              answer: "A",
              explanation: "Type B 100 A: Ia = 500 A. Max Zs = (0.95 × 230)/500 ≈ 0.44 Ω. Type B 32 A is 1.37 Ω; Type B 16 A is 2.87 Ω."
            },
            {
              number: 9,
              prompt: "Diversity for a domestic ring final circuit (32 A) used for general purpose sockets is typically:",
              options: {
                A: "100% of the largest demand + 40% of the rest, with adjustments per OSG Appendix A",
                B: "Always 100%",
                C: "Always 50%",
                D: "Always 25%"
              },
              answer: "A",
              explanation: "OSG Appendix A — typical domestic diversity for ring final circuits is 100% of the largest demand plus 40% of the remainder, but the broad rule is the designer applies appropriate diversity factors based on the specific loads."
            },
            {
              number: 10,
              prompt: "A cable derating factor Cc = 0.725 applies when:",
              options: {
                A: "The circuit is protected by a BS 3036 semi-enclosed (rewireable) fuse, or the cable is buried in ground",
                B: "Always",
                C: "Cable is in conduit",
                D: "Cable is at low voltage"
              },
              answer: "A",
              explanation: "Cc = 0.725 — applied where a BS 3036 (rewireable) fuse protects the cable (the fuse's slow operation requires extra cable thermal margin). Also applied where the cable is buried in the ground."
            },
            {
              number: 11,
              prompt: "An MCB chosen for a 16 A radial circuit on 1.5 mm² T&E with effective Iz of 17 A:",
              options: {
                A: "16 A is acceptable (Ib ≤ 16 ≤ In ≤ Iz = 17, satisfying Reg 433.1)",
                B: "20 A is required",
                C: "32 A is required",
                D: "10 A is required"
              },
              answer: "A",
              explanation: "16 A In is the highest rating that satisfies In ≤ Iz with Iz = 17 A. The next rating (20 A) would exceed Iz."
            },
            {
              number: 12,
              prompt: "An installation with cable Iz = 30 A and BS 3036 fuse — required: Iz × 0.725 ≥ In gives:",
              options: {
                A: "In ≤ 21.75 A (so In = 20 A)",
                B: "In ≤ 30 A",
                C: "In ≤ 25 A",
                D: "In ≤ 16 A"
              },
              answer: "A",
              explanation: "BS 3036 derating: Iz × 0.725 = 30 × 0.725 = 21.75 A. The fuse must satisfy In ≤ 21.75 A, so the next standard rating is 20 A."
            },
            {
              number: 13,
              prompt: "Section 528 (proximity to other services) requires segregation between Band I and Band II circuits because:",
              options: {
                A: "An insulation failure in Band II could energise Band I circuits at hazardous voltage",
                B: "Of magnetic interference only",
                C: "Of cost only",
                D: "Of label colour only"
              },
              answer: "A",
              explanation: "Reg 528 — Band I (ELV) and Band II (LV) circuits in the same enclosure must be segregated by partition, separate compartments, or by Band I cable being insulated to Band II's withstand voltage."
            },
            {
              number: 14,
              prompt: "An EV final circuit on 6 mm² T&E with 30 m run carrying 32 A — voltage drop is approximately:",
              options: {
                A: "≈ 7 V (≈ 3%)",
                B: "≈ 14 V (≈ 6%)",
                C: "≈ 22 V",
                D: "≈ 0.5 V"
              },
              answer: "A",
              explanation: "6 mm² ≈ 7.3 mV/A/m. V = (7.3 × 32 × 30)/1000 = 7.0 V ≈ 3.04%. Within 5% other-uses limit on public LV."
            },
            {
              number: 15,
              prompt: "A 32 A Type B MCB at 230 V on a TN-S supply with declared Ze 1.0 Ω — required cable R1+R2 ≤:",
              options: {
                A: "0.37 Ω (Zs ≤ 1.37 Ω)",
                B: "1.0 Ω",
                C: "1.37 Ω",
                D: "Unlimited"
              },
              answer: "A",
              explanation: "Type B 32 A: max Zs = 1.37 Ω. With Ze 1.0 Ω, R1+R2 ≤ 0.37 Ω. Tighter than the typical 0.35 Ω TN-C-S supply, which would allow R1+R2 up to 1.02 Ω."
            },
            {
              number: 16,
              prompt: "Section 528 — Band I and Band II in the same enclosure may share without segregation only if:",
              options: {
                A: "Band I cables are insulated to Band II's withstand voltage (e.g. 6491X 450/750 V single core)",
                B: "Always permitted without segregation",
                C: "Only with rigid steel conduit",
                D: "Only at SELV"
              },
              answer: "A",
              explanation: "Reg 528 — alternative to physical segregation: use Band I cables that are insulated to Band II withstand voltage (e.g. 6491X 450/750 V) so an insulation failure in either does not energise the other unsafely."
            },
            {
              number: 17,
              prompt: "An installation has cables grouped in close proximity (8 cables in one trunking). Cg derating factor is approximately (Table 4C1):",
              options: {
                A: "≈ 0.52 (8 cables, single-layer touching)",
                B: "≈ 1.0",
                C: "≈ 0.94",
                D: "≈ 0.25"
              },
              answer: "A",
              explanation: "Table 4C1 — for 8 cables grouped in a single layer touching, Cg ≈ 0.52. Heavy derating; the design current per cable is reduced significantly."
            },
            {
              number: 18,
              prompt: "Reg 132.13 — the location of equipment must be selected to allow:",
              options: {
                A: "Adequate accessibility for inspection, testing, maintenance and replacement",
                B: "Minimum cost only",
                C: "Aesthetic appearance only",
                D: "Highest possible mounting"
              },
              answer: "A",
              explanation: "Reg 132.12 / 132.13 — equipment must be located so it can be accessed for inspection, testing, maintenance and replacement. Cramming a CU into a tight cupboard fails this principle."
            },
            {
              number: 19,
              prompt: "A 32 A radial circuit using 4 mm² T&E with 25 m run and Ib = 30 A — voltage drop is approximately:",
              options: {
                A: "≈ 8.3 V (3.6%)",
                B: "≈ 4 V (1.7%)",
                C: "≈ 14 V (6.1%)",
                D: "≈ 0.5 V"
              },
              answer: "A",
              explanation: "4 mm² ≈ 11 mV/A/m. V = (11 × 30 × 25)/1000 = 8.25 V ≈ 3.59%. Within 5% other-uses public LV limit; over 3% lighting."
            },
            {
              number: 20,
              prompt: "An installation has Ze 0.4 Ω, R1+R2 = 1.0 Ω. The Zs is:",
              options: {
                A: "0.4 Ω",
                B: "1.0 Ω",
                C: "1.4 Ω",
                D: "1.37 Ω"
              },
              answer: "C",
              explanation: "Zs = Ze + R1+R2 = 0.4 + 1.0 = 1.4 Ω. Slightly over the Type B 32 A maximum 1.37 Ω — re-design needed (larger CPC or shorter run)."
            },
            {
              number: 21,
              prompt: "Cable Method 103 (cables completely surrounded by thermal insulation) typically requires Ci of approximately:",
              options: {
                A: "≈ 0.5",
                B: "≈ 1.0",
                C: "≈ 0.78",
                D: "≈ 0.25"
              },
              answer: "A",
              explanation: "Method 103 — cable wholly inside insulation. Ci ≈ 0.5 typical. (Method 100, contact on one side: ≈ 0.78.)"
            },
            {
              number: 22,
              prompt: "An installation has a long sub-main with R1+R2 of 0.7 Ω, Ze 0.5 Ω, feeding a 32 A Type B MCB at 230 V. Zs is:",
              options: {
                A: "1.2 Ω (within 1.37 Ω)",
                B: "0.7 Ω",
                C: "0.5 Ω",
                D: "1.4 Ω (over the limit)"
              },
              answer: "A",
              explanation: "Zs = 0.5 + 0.7 = 1.2 Ω. Within Type B 32 A maximum 1.37 Ω — but only just."
            },
            {
              number: 23,
              prompt: "A standard radial 32 A circuit using 4 mm² T&E typically supports a floor area of up to:",
              options: {
                A: "75 m² (OSG indicative)",
                B: "10 m²",
                C: "300 m²",
                D: "1000 m²"
              },
              answer: "A",
              explanation: "OSG indicative figures — 32 A radial on 4 mm² typically serves ~75 m² floor area. The actual figure depends on cable route, derating factors and the load profile."
            },
            {
              number: 24,
              prompt: "An installation supplied at 230 V three-phase 4-wire — neutral CSA may be reduced if:",
              options: {
                A: "The line CSA exceeds 16 mm² Cu (or 25 mm² Al), the load is balanced, and harmonics are not significant (Reg 524)",
                B: "Always",
                C: "Never",
                D: "Only on TT systems"
              },
              answer: "A",
              explanation: "Reg 524 — reduced neutral allowed only on balanced 3-phase circuits with line CSA > 16 mm² Cu and where harmonics are not significant (3rd-harmonic loads break this assumption)."
            },
            {
              number: 25,
              prompt: "A 16 A radial circuit using 2.5 mm² T&E with 30 m run carrying 16 A — voltage drop is approximately:",
              options: {
                A: "≈ 8.6 V (≈ 3.7%)",
                B: "≈ 4.3 V (≈ 1.9%)",
                C: "≈ 1 V (≈ 0.4%)",
                D: "≈ 14 V (≈ 6.1%)"
              },
              answer: "A",
              explanation: "2.5 mm² ≈ 18 mV/A/m. V = (18 × 16 × 30)/1000 = 8.64 V ≈ 3.76%. Within 5% other-uses limit, over 3% lighting."
            }
          ]
        },
        {
          id: "v3",
          questions: [
            {
              number: 1,
              prompt: "A 32 A radial circuit using 6 mm² T&E with R1+R2 of 0.4 Ω and Ze of 0.35 Ω feeds a 32 A Type B MCB. Zs is:",
              options: {
                A: "0.75 Ω (within 1.37 Ω limit)",
                B: "0.4 Ω",
                C: "0.35 Ω",
                D: "1.37 Ω"
              },
              answer: "A",
              explanation: "Zs = Ze + R1+R2 = 0.35 + 0.4 = 0.75 Ω. Comfortably within the Type B 32 A limit of 1.37 Ω."
            },
            {
              number: 2,
              prompt: "An installation supplied at 230 V — applying the adiabatic equation S = √(I²t)/k to a 32 A circuit cleared in 0.4 s with PFC of 1000 A and k = 115 (PVC Cu PE):",
              options: {
                A: "S = √(1000² × 0.4)/115 ≈ 5.5 mm² minimum",
                B: "S = 100 mm² minimum",
                C: "S = 1 mm² minimum",
                D: "S = √(I)/k = small"
              },
              answer: "A",
              explanation: "S = √(1 000 000 × 0.4)/115 = √400 000 /115 ≈ 632.5/115 ≈ 5.5 mm². Round up to 6 mm². Designers use this check whenever the table-sized PE seems marginal."
            },
            {
              number: 3,
              prompt: "An installation with thermal-insulation Method 100 contact, Ca 0.94, Cg 0.7 and Cc 1.0, tabulated It = 27 A. Effective Iz is approximately:",
              options: {
                A: "27 × 0.94 × 0.7 × 0.78 × 1.0 ≈ 13.9 A",
                B: "27 A",
                C: "0 A",
                D: "27 × 0.94 ≈ 25 A"
              },
              answer: "A",
              explanation: "Effective Iz = It × Ca × Cg × Ci × Cc = 27 × 0.94 × 0.7 × 0.78 × 1.0 ≈ 13.86 A. The chosen MCB In must be ≤ 13.86 A — likely 10 A is the highest standard rating."
            },
            {
              number: 4,
              prompt: "An MCB Type B 6 A at 230 V — max Zs (Table 41.3) is approximately:",
              options: {
                A: "7.28 Ω",
                B: "1.37 Ω",
                C: "2.87 Ω",
                D: "0.91 Ω"
              },
              answer: "A",
              explanation: "Type B 6 A: Ia = 30 A. Max Zs = (0.95 × 230)/30 ≈ 7.28 Ω. Lighting circuits often have plenty of margin against this generous figure."
            },
            {
              number: 5,
              prompt: "A 16 A Type B MCB at 230 V — max Zs is approximately:",
              options: {
                A: "1.37 Ω",
                B: "2.87 Ω",
                C: "0.91 Ω",
                D: "1.83 Ω"
              },
              answer: "B",
              explanation: "Type B 16 A: Ia = 80 A. Max Zs = (0.95 × 230)/80 ≈ 2.73 → 2.87 Ω as tabulated."
            },
            {
              number: 6,
              prompt: "An installation has cable derating Ca 1.0, Cg 0.65, Ci 0.5, Cc 1.0 with tabulated It = 24 A. Effective Iz is:",
              options: {
                A: "≈ 7.8 A",
                B: "≈ 24 A",
                C: "≈ 12 A",
                D: "≈ 16 A"
              },
              answer: "A",
              explanation: "Effective Iz = 24 × 1.0 × 0.65 × 0.5 × 1.0 = 7.8 A. Severely derated; design current must be ≤ 7.8 A or larger CSA used."
            },
            {
              number: 7,
              prompt: "Section 543.1.4 (adiabatic) verifies that the PE survives the fault thermally. The condition is:",
              options: {
                A: "S ≥ √(I² × t)/k",
                B: "S ≤ √(I² × t)/k",
                C: "S = I × t",
                D: "S = k/(I × t)"
              },
              answer: "A",
              explanation: "Reg 543.1.4 — S ≥ √(I² × t)/k. The PE CSA must be at least the calculated value to limit conductor temperature rise during the fault."
            },
            {
              number: 8,
              prompt: "An installation supplied at 230 V single-phase, 100 A maximum demand, requires the supply cable. Selection considers:",
              options: {
                A: "Current-carrying capacity, voltage drop, fault current withstand, and the cable's thermal limits at fault",
                B: "Cost only",
                C: "Length only",
                D: "Cable colour only"
              },
              answer: "A",
              explanation: "Cable selection is multi-criteria: Iz ≥ Ib, voltage drop ≤ permitted limit, Zs satisfies disconnection, and the cable's adiabatic CSA satisfies fault current/duration."
            },
            {
              number: 9,
              prompt: "Voltage drop on a 50 m run of 25 mm² Cu cable carrying 100 A on a 230 V single-phase circuit is approximately:",
              options: {
                A: "≈ 9.3 V (4.0%)",
                B: "≈ 18 V (7.8%)",
                C: "≈ 1 V (0.4%)",
                D: "≈ 5 V (2.2%)"
              },
              answer: "A",
              explanation: "25 mm² ≈ 1.85 mV/A/m. V = (1.85 × 100 × 50)/1000 = 9.25 V ≈ 4.02%. Within 5% other-uses public LV limit; over 3% lighting."
            },
            {
              number: 10,
              prompt: "An installation supplied at 400 V three-phase has a 25 m run of 16 mm² Cu cable carrying 80 A line current — voltage drop (line-to-neutral) is approximately:",
              options: {
                A: "≈ 5.6 V using mV/A/m × Ib × L formula with single-phase mV/A/m × cos φ adjustments",
                B: "≈ 28 V",
                C: "≈ 0.5 V",
                D: "≈ 14 V"
              },
              answer: "A",
              explanation: "16 mm² 3-phase mV/A/m ≈ 2.4. V = (2.4 × 80 × 25)/1000 = 4.8 V ≈ 1.2% of 400 V. (The exact figure depends on power factor and reactive vs. resistive split.)"
            },
            {
              number: 11,
              prompt: "An installation at 230 V single-phase has a 60 A maximum demand. Diversity-adjusted, supply cable typical CSA is:",
              options: {
                A: "16 mm² Cu (depending on length and voltage drop)",
                B: "1 mm² Cu",
                C: "120 mm² Cu",
                D: "0.5 mm² Cu"
              },
              answer: "A",
              explanation: "16 mm² Cu T&E typically rated 76 A (Method 102/103 dependent), comfortably above 60 A. Voltage drop check at the supply length determines the final size."
            },
            {
              number: 12,
              prompt: "A 32 A Type B MCB final circuit on a 230 V TN-C-S supply (Ze 0.35 Ω) and R1+R2 of 0.5 Ω. Zs is:",
              options: {
                A: "0.85 Ω (within 1.37 Ω)",
                B: "0.5 Ω",
                C: "0.35 Ω",
                D: "1.37 Ω"
              },
              answer: "A",
              explanation: "Zs = Ze + R1+R2 = 0.35 + 0.5 = 0.85 Ω. Within Type B 32 A maximum 1.37 Ω."
            },
            {
              number: 13,
              prompt: "Cable Method 100 (cable touching thermal insulation on one side) typical Ci is approximately:",
              options: {
                A: "0.78",
                B: "1.0",
                C: "0.5",
                D: "0.25"
              },
              answer: "A",
              explanation: "Method 100 — single-side contact with insulation: Ci ≈ 0.78. Method 103 (fully buried in insulation): ≈ 0.5."
            },
            {
              number: 14,
              prompt: "An installation has a 40 A radial circuit using 10 mm² T&E with 25 m run carrying 40 A — voltage drop is approximately:",
              options: {
                A: "≈ 4.4 V (1.9%)",
                B: "≈ 11 V (4.8%)",
                C: "≈ 14 V",
                D: "≈ 1 V"
              },
              answer: "A",
              explanation: "10 mm² ≈ 4.4 mV/A/m. V = (4.4 × 40 × 25)/1000 = 4.4 V ≈ 1.91%. Within 3% lighting and 5% other-uses limits."
            },
            {
              number: 15,
              prompt: "An installation with grouping factor Cg of 0.65 means:",
              options: {
                A: "The cable's tabulated rating must be multiplied by 0.65 to give a derated current capacity",
                B: "The cable rating is increased",
                C: "The cable should be undersized",
                D: "Cg has no effect"
              },
              answer: "A",
              explanation: "Cg < 1 reduces the cable's effective Iz to account for adjacent cables sharing the heat. Effective Iz = It × Ca × Cg × Ci × Cc."
            },
            {
              number: 16,
              prompt: "A 32 A Type B MCB on a 230 V TN-S supply with declared Ze 1.2 Ω — required cable R1+R2:",
              options: {
                A: "≤ 0.17 Ω (Zs ≤ 1.37 Ω)",
                B: "≤ 1.2 Ω",
                C: "≤ 1.37 Ω",
                D: "Unlimited"
              },
              answer: "A",
              explanation: "Type B 32 A: max Zs = 1.37 Ω. With Ze 1.2 Ω, R1+R2 ≤ 0.17 Ω. A very tight cable budget — likely needs short runs and large CSA."
            },
            {
              number: 17,
              prompt: "An installation with a BS 88-3 32 A fuse on a distribution circuit at 230 V TN — max Zs (Table 41.4) at 5 s is:",
              options: {
                A: "1.6 Ω",
                B: "0.5 Ω",
                C: "1.37 Ω",
                D: "2.87 Ω"
              },
              answer: "A",
              explanation: "Table 41.4 — BS 88-3 32 A at 5 s: 1.6 Ω. The corresponding GN3 measured (warm) = 0.8 × 1.6 = 1.28 Ω."
            },
            {
              number: 18,
              prompt: "An installation supplied at 400 V three-phase from a TT source — 30 mA RCD's max RA × IΔn ≤ 50 V gives RA ≤:",
              options: {
                A: "1667 Ω theoretical",
                B: "100 Ω always",
                C: "50 Ω always",
                D: "Unlimited"
              },
              answer: "A",
              explanation: "Theoretical limit 50/0.030 = 1667 Ω. Practical recommendation ≤ 200 Ω for stability under seasonal moisture changes."
            },
            {
              number: 19,
              prompt: "A 230 V supply with declared Ze 0.35 Ω feeding a 32 A Type B MCB — required R1+R2 limit:",
              options: {
                A: "≤ 1.02 Ω",
                B: "≤ 0.35 Ω",
                C: "≤ 1.37 Ω",
                D: "Unlimited"
              },
              answer: "A",
              explanation: "Type B 32 A: max Zs = 1.37 Ω. With Ze 0.35 Ω, R1+R2 ≤ 1.37 − 0.35 = 1.02 Ω."
            },
            {
              number: 20,
              prompt: "A 6 A Type B MCB on a lighting circuit at 230 V — max Zs (Table 41.3) is:",
              options: {
                A: "≈ 7.28 Ω",
                B: "≈ 1.37 Ω",
                C: "≈ 2.87 Ω",
                D: "≈ 0.55 Ω"
              },
              answer: "A",
              explanation: "Type B 6 A: Ia = 30 A. Max Zs = (0.95 × 230)/30 ≈ 7.28 Ω. Lighting circuits typically far below this in measured Zs."
            },
            {
              number: 21,
              prompt: "An installation cable's adiabatic check uses k = 115 typically for:",
              options: {
                A: "PVC-insulated Cu PE in cable assembly (initial 70°C, final 160°C)",
                B: "Bare Cu (k = 159)",
                C: "PVC Al PE (k = 76)",
                D: "Tinned wire only"
              },
              answer: "A",
              explanation: "Table 54.2 — k = 115 for PVC Cu PE inside cable assembly. k = 159 bare Cu (or sheathed against PVC), k = 76 PVC Al, etc."
            },
            {
              number: 22,
              prompt: "An MCB's I2t energy-let-through rating must not exceed:",
              options: {
                A: "The cable's k²S² withstand (so the cable does not exceed its limit temperature during the fault)",
                B: "The cable's voltage rating only",
                C: "The cable's CSA only",
                D: "The cable's colour"
              },
              answer: "A",
              explanation: "Reg 434.5.2 — adiabatic equation rearranged: device let-through I²t ≤ k²S². Rapid devices (current-limiting MCBs) let through less energy than slow fuses, allowing smaller cable for the same fault PFC."
            },
            {
              number: 23,
              prompt: "A 32 A Type C MCB at 230 V — max Zs is approximately:",
              options: {
                A: "0.68 Ω",
                B: "1.37 Ω",
                C: "2.87 Ω",
                D: "0.91 Ω"
              },
              answer: "A",
              explanation: "Type C 32 A: Ia = 320 A. Max Zs = (0.95 × 230)/320 ≈ 0.68 Ω."
            },
            {
              number: 24,
              prompt: "An installation with cable tabulated It = 50 A, Ca = 1.0, Cg = 1.0, Ci = 0.78 (Method 100), Cc = 1.0 — Effective Iz is:",
              options: {
                A: "≈ 39 A",
                B: "≈ 50 A",
                C: "≈ 25 A",
                D: "≈ 16 A"
              },
              answer: "A",
              explanation: "Effective Iz = 50 × 1.0 × 1.0 × 0.78 × 1.0 = 39 A. Chosen MCB In ≤ 39 A — typically 32 A."
            },
            {
              number: 25,
              prompt: "An installation with a 32 A MCB on 4 mm² T&E (tabulated 27 A in Method C) — overload condition Ib ≤ In ≤ Iz check:",
              options: {
                A: "FAILS — 32 A In > 27 A Iz; cable will be overloaded by the device rating",
                B: "Passes",
                C: "Passes only if Type B",
                D: "Passes only if Type C"
              },
              answer: "A",
              explanation: "Reg 433.1: In must not exceed Iz. 32 A > 27 A → fail. Either drop the MCB rating to ≤ 27 A or use a larger cable."
            }
          ]
        },
        {
          id: "v4",
          questions: [
            {
              number: 1,
              prompt: "A 16 A radial circuit on 2.5 mm² T&E with 30 m run and Ib = 16 A on a 230 V public LV supply — voltage drop is approximately:",
              options: {
                A: "≈ 8.6 V (3.7%)",
                B: "≈ 4.3 V (1.9%)",
                C: "≈ 14 V",
                D: "≈ 1 V"
              },
              answer: "A",
              explanation: "2.5 mm² ≈ 18 mV/A/m. V = (18 × 16 × 30)/1000 = 8.64 V ≈ 3.76%. Within 5% other-uses limit; over 3% lighting."
            },
            {
              number: 2,
              prompt: "Reg 543.1.4 — adiabatic verification of the PE for I = 1500 A, t = 0.1 s, k = 115:",
              options: {
                A: "S ≥ √(1500² × 0.1)/115 ≈ 4.12 mm² (round up to 4 mm²)",
                B: "S ≥ 1.5 mm²",
                C: "S ≥ 16 mm²",
                D: "S ≥ 0.5 mm²"
              },
              answer: "A",
              explanation: "S ≥ √(2 250 000 × 0.1)/115 = √225 000/115 ≈ 474.3/115 ≈ 4.12 mm². Use 4 mm² (next standard above)."
            },
            {
              number: 3,
              prompt: "An EV charging final circuit on 6 mm² T&E with 30 m run carrying 32 A on a 230 V public LV supply — voltage drop is approximately:",
              options: {
                A: "≈ 7 V (3%)",
                B: "≈ 14 V (6%)",
                C: "≈ 22 V",
                D: "≈ 0.5 V"
              },
              answer: "A",
              explanation: "6 mm² ≈ 7.3 mV/A/m. V = (7.3 × 32 × 30)/1000 ≈ 7.0 V ≈ 3%. Within 5% other-uses public LV limit."
            },
            {
              number: 4,
              prompt: "A 32 A MCB Type B 30 mA RCBO at 230 V on a TN-C-S supply (Ze 0.35 Ω) — required R1+R2:",
              options: {
                A: "≤ 1.02 Ω (giving Zs ≤ 1.37 Ω)",
                B: "≤ 0.35 Ω",
                C: "≤ 1.37 Ω",
                D: "Unlimited"
              },
              answer: "A",
              explanation: "Type B 32 A: Zs ≤ 1.37 Ω. With Ze 0.35 Ω, R1+R2 ≤ 1.02 Ω."
            },
            {
              number: 5,
              prompt: "An installation with cable derating: Ca = 0.97, Cg = 0.7, Ci = 0.78, Cc = 1.0 and tabulated It = 32 A — Effective Iz is:",
              options: {
                A: "≈ 17 A",
                B: "≈ 32 A",
                C: "≈ 0.5 A",
                D: "≈ 24 A"
              },
              answer: "A",
              explanation: "Effective Iz = 32 × 0.97 × 0.7 × 0.78 × 1.0 ≈ 16.9 A. The chosen In ≤ 16 A is appropriate."
            },
            {
              number: 6,
              prompt: "A 230 V single-phase ring final circuit using 2.5/1.5 T&E and a 32 A Type B MCB has typical maximum length under standard conditions of approximately:",
              options: {
                A: "106 m (OSG indicative for Cmin'd voltage drop and Zs satisfying)",
                B: "10 m",
                C: "300 m",
                D: "1 km"
              },
              answer: "A",
              explanation: "OSG / Appendix 15 — typical 32 A ring on 2.5/1.5 T&E: ≈ 106 m total length. Constrained by voltage drop and Zs depending on Ze."
            },
            {
              number: 7,
              prompt: "A standard radial circuit using 2.5 mm² T&E and a 20 A protective device has typical maximum length of approximately:",
              options: {
                A: "30 m (depending on Ze and Method)",
                B: "1 m",
                C: "300 m",
                D: "100 m"
              },
              answer: "A",
              explanation: "OSG indicative — 20 A on 2.5 mm² typically supports ~30 m taking voltage drop and Zs into account. 32 A on 4 mm² often gives a similar length depending on conditions."
            },
            {
              number: 8,
              prompt: "An installation with 6491X 4 mm² in conduit at 30°C, ungrouped, no thermal insulation — tabulated It (Reference Method B) is approximately:",
              options: {
                A: "≈ 32 A",
                B: "≈ 100 A",
                C: "≈ 16 A",
                D: "≈ 1 A"
              },
              answer: "A",
              explanation: "Table 4D1A Method B — 4 mm² PVC single core in conduit on a wall: ≈ 32 A. Method C (sheathed cable on a perforated tray) gives ~36 A."
            },
            {
              number: 9,
              prompt: "An installation with a 32 A Type B MCB on a 230 V supply with declared Ze 0.8 Ω — required maximum cable R1+R2 to satisfy Type B Zs constraint:",
              options: {
                A: "≤ 0.57 Ω",
                B: "≤ 0.8 Ω",
                C: "≤ 1.37 Ω",
                D: "Unlimited"
              },
              answer: "A",
              explanation: "Type B 32 A: Zs ≤ 1.37 Ω. With Ze 0.8 Ω, R1+R2 ≤ 0.57 Ω."
            },
            {
              number: 10,
              prompt: "Section 528 — segregation between Band I (ELV) and Band II (LV) circuits sharing trunking is required because:",
              options: {
                A: "Insulation failure of a Band II conductor could energise Band I circuits at hazardous voltage",
                B: "Of magnetic interference only",
                C: "Of cost only",
                D: "Of cable colour only"
              },
              answer: "A",
              explanation: "Reg 528 — to prevent insulation failure of one Band's cable putting hazardous voltage on the other. Solutions: physical partition, separate compartments, or use of cable rated for the higher Band's withstand voltage."
            },
            {
              number: 11,
              prompt: "An installation with cable derating Ca 1.0, Cg 0.65, Ci 0.5, Cc 1.0 tabulated It = 24 A — Effective Iz is:",
              options: {
                A: "≈ 7.8 A",
                B: "≈ 24 A",
                C: "≈ 12 A",
                D: "≈ 16 A"
              },
              answer: "A",
              explanation: "Effective Iz = 24 × 1.0 × 0.65 × 0.5 × 1.0 = 7.8 A. Severely derated; the chosen In must be ≤ 7.8 A or larger CSA used."
            },
            {
              number: 12,
              prompt: "A 16 A Type C MCB at 230 V — max Zs is approximately:",
              options: {
                A: "1.37 Ω",
                B: "2.87 Ω",
                C: "0.91 Ω",
                D: "0.55 Ω"
              },
              answer: "A",
              explanation: "Type C 16 A: Ia = 160 A. Max Zs = (0.95 × 230)/160 ≈ 1.37 Ω. Same Zs maximum as Type B 32 A — coincidence due to product of factor and current."
            },
            {
              number: 13,
              prompt: "Section 433.3 (omission of overload protection) excludes:",
              options: {
                A: "Polyphase motor circuits (always need overload protection)",
                B: "Exciter circuits",
                C: "Lifting magnet circuits",
                D: "Fire-extinguishing supplies"
              },
              answer: "A",
              explanation: "Reg 433.3 — overload protection MAY be omitted for: rotating machine exciter circuits, lifting magnets, secondary circuits of CTs, certain motor circuits, fire-suppression supplies. Polyphase motor circuits are NOT on this list — they always need overload protection."
            },
            {
              number: 14,
              prompt: "An installation with cable Iz of 50 A and BS 3036 fuse (Cc = 0.725) — required: In ≤ Iz × 0.725 gives:",
              options: {
                A: "In ≤ 36.25 A (so In = 30 A typically)",
                B: "In ≤ 50 A",
                C: "In ≤ 32 A",
                D: "In ≤ 16 A"
              },
              answer: "A",
              explanation: "Iz × 0.725 = 50 × 0.725 = 36.25 A. The fuse rating must satisfy In ≤ 36.25 A — likely 30 A is the next standard rating below."
            },
            {
              number: 15,
              prompt: "On a 230 V supply with Ze 0.4 Ω, a 32 A Type B MCB final circuit has measured Zs of 1.0 Ω. Cable R1+R2 is:",
              options: {
                A: "0.6 Ω (Zs − Ze = 1.0 − 0.4)",
                B: "0.4 Ω",
                C: "1.0 Ω",
                D: "1.4 Ω"
              },
              answer: "A",
              explanation: "Zs = Ze + R1+R2 → R1+R2 = Zs − Ze = 1.0 − 0.4 = 0.6 Ω. The cable contributes 0.6 Ω."
            },
            {
              number: 16,
              prompt: "Section 537.4 — emergency switching distance is typically required to be:",
              options: {
                A: "Within reach of the danger zone (typically near the operator and clearly identified)",
                B: "Hidden in a maintenance cupboard",
                C: "10 m from the danger",
                D: "Outside the building only"
              },
              answer: "A",
              explanation: "Reg 537.4 — emergency switches must be readily accessible from the area of danger. Operating distance varies by application but typically within reach of the worker exposed to the hazard."
            },
            {
              number: 17,
              prompt: "An installation with grouped cables at 50°C ambient (Ca = 0.71 from Table 4B1) and Cg 0.7, Ci 1.0, Cc 1.0 — tabulated 30 A cable's Effective Iz is:",
              options: {
                A: "≈ 14.9 A",
                B: "≈ 30 A",
                C: "≈ 7 A",
                D: "≈ 21 A"
              },
              answer: "A",
              explanation: "Effective Iz = 30 × 0.71 × 0.7 × 1.0 × 1.0 = 14.91 A. The chosen In must be ≤ 14.91 A — typically 13 A or 16 A is too high; 10 A is required."
            },
            {
              number: 18,
              prompt: "Reg 132.13 — accessibility — examples of failure include:",
              options: {
                A: "Mounting a CU behind a permanent fitted wardrobe with no access",
                B: "Fitting a CU on a clear wall at 1.5 m",
                C: "Providing isolators near each accessory",
                D: "Recording the circuit chart at the board"
              },
              answer: "A",
              explanation: "Reg 132.12 / 132.13 — equipment must be accessible. A CU behind built-in furniture with no removable access fails this requirement."
            },
            {
              number: 19,
              prompt: "Section 411 — the conventional touch-voltage limit for normal locations is 50 V because:",
              options: {
                A: "Below 50 V the perceived danger from sustained AC contact is acceptable for human safety in normal conditions",
                B: "It matches the SELV upper voltage",
                C: "It matches the BS 7671 publication year",
                D: "It is an arbitrary number"
              },
              answer: "A",
              explanation: "50 V a.c. is the conventional touch-voltage limit for normal locations. Sustained voltages below 50 V are unlikely to cause severe shock injury in normal physiological conditions."
            },
            {
              number: 20,
              prompt: "A 32 A Type D MCB at 230 V — required Zs ≤ (Table 41.3):",
              options: {
                A: "≈ 0.34 Ω",
                B: "≈ 1.37 Ω",
                C: "≈ 2.87 Ω",
                D: "≈ 0.91 Ω"
              },
              answer: "A",
              explanation: "Type D 32 A: Ia = 20 × 32 = 640 A. Max Zs = (0.95 × 230)/640 ≈ 0.34 Ω. Type D requires very low Zs."
            },
            {
              number: 21,
              prompt: "Section 314 (division of installation) lists which reasons to subdivide circuits?",
              options: {
                A: "To limit consequences of a fault, facilitate testing, minimise inconvenience, and reduce unwanted disconnection of unrelated circuits",
                B: "To increase phase imbalance",
                C: "To save on conductor cost",
                D: "To raise voltage drop"
              },
              answer: "A",
              explanation: "Reg 314.1 — division into circuits limits hazards/faults; allows safe inspection/testing; minimises inconvenience; and reduces unwanted tripping of unrelated circuits."
            },
            {
              number: 22,
              prompt: "An installation with 6491X 6 mm² in conduit (Method B), 30°C, 1 circuit — tabulated It is approximately:",
              options: {
                A: "≈ 41 A",
                B: "≈ 100 A",
                C: "≈ 1 A",
                D: "≈ 200 A"
              },
              answer: "A",
              explanation: "Table 4D1A Method B — 6 mm² PVC single core in conduit on a wall ≈ 41 A. (Method C, sheathed on perforated tray, ≈ 47 A.)"
            },
            {
              number: 23,
              prompt: "An MCB rated In = 32 A, breaking capacity 6 kA, is suitable for a circuit with PFC of:",
              options: {
                A: "≤ 6 kA",
                B: "≤ 32 A",
                C: "≤ 25 kA",
                D: "Unlimited"
              },
              answer: "A",
              explanation: "Reg 434.5.1 — breaking capacity must not be less than the PFC at the point of installation. 6 kA breaking capacity matches PFC ≤ 6 kA. For higher PFC, choose a higher-breaking device or back-up protection."
            },
            {
              number: 24,
              prompt: "An installation with a TT supply and 100 mA S-type RCD at the origin — discrimination with downstream 30 mA RCDs requires:",
              options: {
                A: "The S-type's intentional time delay; ratio of IΔn (100/30 ≈ 3.3) is also typical for selectivity",
                B: "Two equal IΔn devices",
                C: "Single-pole devices",
                D: "Type AC RCDs only"
              },
              answer: "A",
              explanation: "Reg 536.4.1 — selectivity needs higher IΔn upstream AND a time delay. 100 mA S-type meets both. The 30 mA downstream trips first on a final-circuit fault, leaving the main switch and other circuits live."
            },
            {
              number: 25,
              prompt: "A 32 A Type B 30 mA RCBO on a 230 V TN-C-S supply (declared Ze 0.35 Ω) — Zs ≤ 1.37 Ω translates to R1+R2 ≤:",
              options: {
                A: "1.02 Ω",
                B: "0.35 Ω",
                C: "1.37 Ω",
                D: "Unlimited"
              },
              answer: "A",
              explanation: "Type B 32 A max Zs 1.37 Ω. With Ze 0.35 Ω, R1+R2 ≤ 1.02 Ω."
            }
          ]
        },
        {
          id: "v5",
          questions: [
            {
              number: 1,
              prompt: "A 25 m run of 25 mm² Cu cable carrying 80 A at 230 V single-phase — voltage drop is approximately:",
              options: {
                A: "≈ 3.7 V (1.6%)",
                B: "≈ 11 V (4.8%)",
                C: "≈ 0.5 V",
                D: "≈ 14 V"
              },
              answer: "A",
              explanation: "25 mm² ≈ 1.85 mV/A/m. V = (1.85 × 80 × 25)/1000 = 3.7 V ≈ 1.61%. Within all limits."
            },
            {
              number: 2,
              prompt: "Cable Method 100 (cable in thermal insulation contacting one side) is encountered when:",
              options: {
                A: "Cable runs across a ceiling joist with thermal insulation laid against one face only",
                B: "Cable is on a tray in open air",
                C: "Cable is in conduit on a wall",
                D: "Cable is direct buried"
              },
              answer: "A",
              explanation: "Method 100 — cable touching insulation on one side. Common in lofts where cables run across joists with insulation only on one side. Ci ≈ 0.78 typical."
            },
            {
              number: 3,
              prompt: "Cable Method 103 (cable wholly enclosed in thermal insulation) is encountered when:",
              options: {
                A: "Cable is buried in a ceiling/wall with insulation around it on all sides",
                B: "Cable is on a tray in open air",
                C: "Cable is in conduit on a wall",
                D: "Cable is direct buried in soil"
              },
              answer: "A",
              explanation: "Method 103 — cable surrounded by insulation. Worst Ci typical ≈ 0.5. The cable cannot dissipate heat effectively, so its safe Iz is heavily derated."
            },
            {
              number: 4,
              prompt: "An installation has cable derating Ca 0.94, Cg 0.85, Ci 0.78, Cc 1.0; tabulated It = 36 A. Effective Iz is approximately:",
              options: {
                A: "≈ 22.5 A",
                B: "≈ 36 A",
                C: "≈ 16 A",
                D: "≈ 11 A"
              },
              answer: "A",
              explanation: "Effective Iz = 36 × 0.94 × 0.85 × 0.78 × 1.0 ≈ 22.4 A. The chosen In ≤ 22.4 A — typically 20 A is the highest standard rating."
            },
            {
              number: 5,
              prompt: "An installation with a 32 A Type B MCB at 230 V — required Zs (Table 41.3) ≤:",
              options: {
                A: "1.37 Ω",
                B: "2.87 Ω",
                C: "0.91 Ω",
                D: "0.55 Ω"
              },
              answer: "A",
              explanation: "Type B 32 A: Ia = 160 A. Max Zs = (0.95 × 230)/160 ≈ 1.37 Ω."
            },
            {
              number: 6,
              prompt: "An installation supplied at 400 V three-phase 4-wire from a TN-S source — distribution circuit max disconnection time is:",
              options: {
                A: "5 s on TN systems (and 1 s on TT)",
                B: "0.4 s",
                C: "0.2 s",
                D: "0.1 s"
              },
              answer: "A",
              explanation: "Table 41.1 — TN distribution: 5 s. Final circuits ≤ 32 A at 230 V: 0.4 s. Final circuits at U₀ > 230 V (e.g. 400 V): 0.2 s. TT distribution: 1 s; TT final: 0.2 s."
            },
            {
              number: 7,
              prompt: "An installation with 16 mm² Cu cable on Method 102 (in or above plasterboard ceiling, in 100 mm thermal insulation) — tabulated It is approximately:",
              options: {
                A: "≈ 51 A (Method 102 in 100 mm)",
                B: "≈ 80 A",
                C: "≈ 10 A",
                D: "≈ 200 A"
              },
              answer: "A",
              explanation: "Table 4D5 — 16 mm² flat T&E in Method 102 with 100 mm of insulation typically rated about 51 A. Method 100 gives a higher rating; Method 103 a lower rating."
            },
            {
              number: 8,
              prompt: "A 32 A Type B MCB 30 mA RCBO at 230 V on a TN-C-S supply with declared Ze 0.35 Ω — required cable R1+R2 ≤:",
              options: {
                A: "1.02 Ω",
                B: "0.35 Ω",
                C: "1.37 Ω",
                D: "Unlimited"
              },
              answer: "A",
              explanation: "Zs ≤ 1.37 Ω; with Ze 0.35 Ω, R1+R2 ≤ 1.02 Ω."
            },
            {
              number: 9,
              prompt: "An installation supplied at 230 V single-phase has a 30 m run of 4 mm² T&E carrying 30 A — voltage drop is approximately:",
              options: {
                A: "≈ 9.9 V (≈ 4.3%)",
                B: "≈ 4 V (≈ 1.7%)",
                C: "≈ 14 V",
                D: "≈ 0.5 V"
              },
              answer: "A",
              explanation: "4 mm² ≈ 11 mV/A/m. V = (11 × 30 × 30)/1000 = 9.9 V ≈ 4.3%. Within 5% other-uses public LV limit; over 3% lighting."
            },
            {
              number: 10,
              prompt: "An installation has a 16 A radial circuit using 2.5 mm² T&E with R1+R2 of 0.6 Ω, Ze 0.35 Ω, fed by a 16 A Type B MCB. Zs is:",
              options: {
                A: "0.95 Ω (within 2.87 Ω limit)",
                B: "0.6 Ω",
                C: "0.35 Ω",
                D: "2.87 Ω"
              },
              answer: "A",
              explanation: "Zs = Ze + R1+R2 = 0.35 + 0.6 = 0.95 Ω. Within Type B 16 A limit (2.87 Ω)."
            },
            {
              number: 11,
              prompt: "Cable derating factor Cs (soil thermal resistivity) applies for:",
              options: {
                A: "Cables buried directly in ground (Method D), correcting for soils with higher thermal resistivity than 2.5 K·m/W",
                B: "Cables on trays",
                C: "Cables in air",
                D: "Cables in conduit"
              },
              answer: "A",
              explanation: "Cs corrects buried-cable ratings (Method D) when the soil resistivity exceeds the 2.5 K·m/W reference. Drier or sandier soils have higher resistivity and require a smaller Cs."
            },
            {
              number: 12,
              prompt: "An installation has a 32 A radial circuit using 4 mm² T&E with 25 m run carrying 30 A — voltage drop is approximately:",
              options: {
                A: "≈ 8.3 V (3.6%)",
                B: "≈ 4 V (1.7%)",
                C: "≈ 14 V",
                D: "≈ 0.5 V"
              },
              answer: "A",
              explanation: "4 mm² ≈ 11 mV/A/m. V = (11 × 30 × 25)/1000 = 8.25 V ≈ 3.59%. Within 5% other-uses limit."
            },
            {
              number: 13,
              prompt: "Reg 314.1 (division of installation) lists reasons including:",
              options: {
                A: "Limit consequences of a fault, facilitate inspection/testing/maintenance, minimise inconvenience and reduce unwanted disconnection",
                B: "Cost only",
                C: "Aesthetic only",
                D: "Phase balance only"
              },
              answer: "A",
              explanation: "Reg 314.1 — division into circuits to limit hazards, facilitate work, minimise inconvenience, reduce unwanted disconnection of unrelated circuits."
            },
            {
              number: 14,
              prompt: "An installation supplied at 230 V via 25 mm² Cu cable carrying 100 A on a 30 m run — voltage drop is approximately:",
              options: {
                A: "≈ 5.6 V (2.4%)",
                B: "≈ 11 V",
                C: "≈ 1 V",
                D: "≈ 14 V"
              },
              answer: "A",
              explanation: "25 mm² ≈ 1.85 mV/A/m. V = (1.85 × 100 × 30)/1000 = 5.55 V ≈ 2.41%. Within 3% lighting and 5% other limits."
            },
            {
              number: 15,
              prompt: "An installation needs to satisfy Ib ≤ In ≤ Iz with In = 32 A and Iz = 35 A. The maximum design current Ib is:",
              options: {
                A: "Up to 32 A (Ib must not exceed In)",
                B: "35 A",
                C: "16 A",
                D: "100 A"
              },
              answer: "A",
              explanation: "Reg 433.1.1 — Ib ≤ In ≤ Iz. With In = 32 A, the maximum Ib is 32 A. Cable Iz = 35 A provides margin for short overload before the device clears."
            },
            {
              number: 16,
              prompt: "Cable Method 100 means the cable is in contact with thermal insulation on:",
              options: {
                A: "One side only",
                B: "Both sides",
                C: "All sides",
                D: "No sides"
              },
              answer: "A",
              explanation: "Method 100 — single-side contact with insulation. Common at ceiling joists with insulation laid alongside the cable. Ci ≈ 0.78."
            },
            {
              number: 17,
              prompt: "An installation with grouping factor Cg 0.4 (heavy grouping) means:",
              options: {
                A: "The cable's Iz is reduced to 40% of tabulated value",
                B: "The cable rating is increased",
                C: "Cg has no effect",
                D: "The cable should be replaced"
              },
              answer: "A",
              explanation: "Cg 0.4 means Iz is 40% of tabulated. Heavy grouping (e.g. many cables together) requires substantial derating; designers consider whether to space cables out or use larger CSA."
            },
            {
              number: 18,
              prompt: "An installation with cable Iz of 40 A and an MCB In of 32 A — overload condition Ib ≤ In ≤ Iz is:",
              options: {
                A: "Met if Ib ≤ 32 A (Ib ≤ In ≤ Iz: ≤ 32 ≤ 32 ≤ 40)",
                B: "Not met",
                C: "Always failing",
                D: "Independent of Ib"
              },
              answer: "A",
              explanation: "Reg 433.1.1 — In = 32 A ≤ Iz = 40 A; Ib up to 32 A is acceptable. Margin of 8 A between In and Iz is comfortable."
            },
            {
              number: 19,
              prompt: "An installation supplied at 230 V via 10 mm² Cu T&E with R1+R2 of 0.4 Ω, Ze 0.35 Ω, on a 32 A Type B MCB — Zs is:",
              options: {
                A: "0.75 Ω (within 1.37 Ω)",
                B: "0.4 Ω",
                C: "0.35 Ω",
                D: "1.37 Ω"
              },
              answer: "A",
              explanation: "Zs = Ze + R1+R2 = 0.35 + 0.4 = 0.75 Ω. Within Type B 32 A maximum 1.37 Ω."
            },
            {
              number: 20,
              prompt: "An installation has a 32 A 3-phase circuit at 400 V with 4 mm² Cu cable carrying 30 A line current — voltage drop is approximately:",
              options: {
                A: "Calculated using 3-phase mV/A/m and the line current; typical ~6 V per 50 m of run",
                B: "≈ 14 V (4%)",
                C: "≈ 1 V",
                D: "≈ 30 V"
              },
              answer: "A",
              explanation: "4 mm² 3-phase mV/A/m ≈ 9.5 (single-phase 11 with line-to-line scaling). V = (9.5 × 30 × 50)/1000 ≈ 14 V ≈ 3.5% of 400 V — within limits."
            },
            {
              number: 21,
              prompt: "Reg 132.6 ('Conductors') drives selection of conductor CSA based on:",
              options: {
                A: "Current capacity, voltage drop, electrodynamic/thermodynamic stress and harmonics",
                B: "Cost only",
                C: "Manufacturer only",
                D: "Length only"
              },
              answer: "A",
              explanation: "Reg 132.6 — conductor selection considers current-carrying capacity, voltage drop, mechanical and thermal stresses during fault, conductor temperature limits, and harmonic effects."
            },
            {
              number: 22,
              prompt: "An installation has a 32 A radial on 6 mm² T&E (Method C tabulated 47 A) with grouping Cg 0.7 — Effective Iz is:",
              options: {
                A: "≈ 32.9 A (47 × 0.7), still ≥ In = 32 A",
                B: "≈ 47 A",
                C: "≈ 16 A",
                D: "≈ 0 A"
              },
              answer: "A",
              explanation: "Effective Iz = 47 × 0.7 = 32.9 A. The 32 A MCB In ≤ 32.9 A satisfies the overload check."
            },
            {
              number: 23,
              prompt: "Section 528 — segregation between Band II and Band I in the same trunking is achieved by:",
              options: {
                A: "Physical partition / separate compartments / Band I cable insulated to Band II withstand voltage",
                B: "No segregation needed",
                C: "Steel conduit only",
                D: "Plastic trunking only"
              },
              answer: "A",
              explanation: "Reg 528 — three permitted segregation methods: partition, separate compartments, or use of cable rated for the higher Band's withstand voltage."
            },
            {
              number: 24,
              prompt: "An installation supplied at 230 V via 35 mm² Cu cable carrying 120 A on a 50 m run — voltage drop is approximately:",
              options: {
                A: "≈ 7.8 V (3.4%)",
                B: "≈ 14 V",
                C: "≈ 1 V",
                D: "≈ 25 V"
              },
              answer: "A",
              explanation: "35 mm² ≈ 1.30 mV/A/m. V = (1.30 × 120 × 50)/1000 = 7.8 V ≈ 3.39%. Within 5% other-uses limit."
            },
            {
              number: 25,
              prompt: "An installation supplied at 400 V three-phase has a 50 m run of 50 mm² Cu cable carrying 200 A line current — voltage drop is approximately:",
              options: {
                A: "≈ 9.6 V (≈ 2.4% of 400 V) using 3-phase mV/A/m × Ib × L approach",
                B: "≈ 1 V",
                C: "≈ 22 V",
                D: "≈ 50 V"
              },
              answer: "A",
              explanation: "50 mm² 3-phase mV/A/m ≈ 0.96. V = (0.96 × 200 × 50)/1000 = 9.6 V ≈ 2.40% of 400 V. Comfortably within limits."
            }
          ]
        }
      ]
    },
    electricianTraining18thEditionSourceSection
  ],
  scoring: [
    { threshold: 0.9, label: "Strong — exam-ready across BS 7671 structure, special locations, and amendments" },
    { threshold: 0.6, label: "Pass — review the priority topics flagged below" },
    { threshold: 0.45, label: "Near miss — re-read the relevant Parts/Sections of BS 7671" },
    { threshold: 0, label: "Major gaps — return to GN3 and the on-site guide before retrying" }
  ],
  priorities: [
    "BS 7671:2018 + A2:2022 + A3:2024 — recognise which amendment introduced what (AFDDs in HRRBs/HMOs, prosumer Section 826, font sizes for labels).",
    "AFDDs (A2:2022) — required on socket outlet final circuits ≤ 32 A in HRRBs, HMOs, care homes and student accommodation; installed at the origin of the final circuit.",
    "Type A is the new minimum default RCD for general use; Type AC is no longer permitted for new installations except very specific cases.",
    "EV on PME (722.411.4.1): use an open-PEN protective device, a separating transformer, or a local earth electrode at the installation."
  ]
};
