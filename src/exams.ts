export type ExamChoice = "A" | "B" | "C" | "D";

export type ExamQuestion = {
  number: number;
  prompt: string;
  options: Record<ExamChoice, string>;
  answer: ExamChoice;
  explanation: string;
};

export type ExamSection = {
  id: string;
  title: string;
  questions: ExamQuestion[];
};

export type Exam = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  format: string;
  passMark: number;
  sections: ExamSection[];
  scoring: Array<{ range: string; label: string }>;
  priorities: string[];
};

export const EXAMS: Exam[] = [
  {
    id: "l3-nvq-electrical",
    title: "Level 3 NVQ Electrical Installation",
    subtitle: "Mock Knowledge Exam",
    description:
      "Representative of knowledge questions sat during Level 3 NVQ Diploma in Installing Electrotechnical Systems & Equipment (e.g. City & Guilds 2357 / 5357, EAL 600/6724/X). Covers health & safety, BS 7671 (18th Edition, A2:2022 & A3:2024), electrical science, earthing & bonding, inspection & testing, circuit design, and fault-finding.",
    format: "30 multiple-choice questions. Aim for 70%+ in about 60 minutes as a realistic pass standard.",
    passMark: 21,
    sections: [
      {
        id: "section-1",
        title: "Section 1 — Health & Safety / Legislation",
        questions: [
          {
            number: 1,
            prompt:
              "Which Act places a general duty on employers to ensure, so far as is reasonably practicable, the health, safety and welfare at work of all employees?",
            options: {
              A: "The Electricity at Work Regulations 1989",
              B: "The Health and Safety at Work etc. Act 1974",
              C: "The Management of Health and Safety at Work Regulations 1999",
              D: "The Provision and Use of Work Equipment Regulations 1998"
            },
            answer: "B",
            explanation:
              "Health and Safety at Work etc. Act 1974. The HSWA is the primary enabling statute; the other three options are regulations made under it. Section 2 places the general duty on employers; Section 7 places a duty on employees to take reasonable care."
          },
          {
            number: 2,
            prompt:
              "Under the Electricity at Work Regulations 1989, live working may only be undertaken if:",
            options: {
              A: "The electrician is wearing rubber gloves",
              B: "It is unreasonable in all the circumstances for the conductor to be dead, it is reasonable for the work to be done live, and suitable precautions are taken",
              C: "The circuit is below 230 V",
              D: "The supervisor gives written permission"
            },
            answer: "B",
            explanation:
              "EAWR 1989, Regulation 14 sets three conjunctive tests: (i) unreasonable for it to be dead, (ii) reasonable for work to be done live, (iii) suitable precautions taken. All three must be satisfied — gloves or a voltage threshold alone don't authorise live work."
          },
          {
            number: 3,
            prompt: "A correct safe isolation procedure includes:",
            options: {
              A: "Switching off and testing with a multimeter only",
              B: "Removing the fuse and putting tape over the switch",
              C: "Identify, isolate, lock off, prove the tester on a known source, test for dead at point of work, re-prove the tester",
              D: "Turning off the consumer unit main switch and checking no lights come on"
            },
            answer: "C",
            explanation:
              "Full safe isolation is the sequence in C. Proving the tester on a known source before and after is critical — if you skip the re-prove, you can't be sure your tester worked when it mattered. A multimeter alone (A) is not an approved voltage indicator (GS38); pulling a fuse with tape (B) is not secure lock-off."
          },
          {
            number: 4,
            prompt:
              "The HSE guideline maximum weight an adult male should lift alone from waist height, close to the body, is approximately:",
            options: {
              A: "5 kg",
              B: "16 kg",
              C: "25 kg",
              D: "40 kg"
            },
            answer: "C",
            explanation:
              "25 kg. HSE guideline weights for lifting close to the body at waist height: 25 kg for men, 16 kg for women. These are guideline trigger values from L23 — not absolute legal limits, but exceeding them triggers a more detailed risk assessment under the Manual Handling Operations Regulations 1992."
          },
          {
            number: 5,
            prompt:
              "Under RIDDOR 2013, a work-related electric shock incident must be reported if the injured person:",
            options: {
              A: "Is taken to hospital for any reason",
              B: "Dies, suffers a specified injury, or is incapacitated for more than 7 consecutive days (not counting the day of the accident)",
              C: "Sustains any shock at all",
              D: "Reports any tingling sensation"
            },
            answer: "B",
            explanation:
              "RIDDOR reportable injuries include death, specified injuries (fractures other than to fingers/thumbs/toes, amputations, crush injuries to the head/torso, serious burns, etc.), and the \"over-7-day\" incapacitation threshold. Hospital attendance alone is not the trigger."
          }
        ]
      },
      {
        id: "section-2",
        title: "Section 2 — BS 7671 (Wiring Regulations)",
        questions: [
          {
            number: 6,
            prompt:
              "For a final circuit protected by a 32 A Type B circuit breaker to BS EN 60898, the maximum earth fault loop impedance (Zs) for a 0.4 s disconnection time on a 230 V TN system (Table 41.3) is approximately:",
            options: {
              A: "1.09 Ω",
              B: "1.37 Ω",
              C: "1.44 Ω",
              D: "2.87 Ω"
            },
            answer: "B",
            explanation:
              "1.37 Ω. Table 41.3 of BS 7671 (18th Ed, incorporating the Cmin factor of 0.95). For Type B, Ia = 5 × In = 160 A. Zs = (0.95 × 230) / 160 = 1.366 Ω, rounded to 1.37 Ω. The 1.44 Ω figure is the pre-Cmin value seen in older references — always check the current tables."
          },
          {
            number: 7,
            prompt:
              "In a domestic bathroom, the minimum IP rating for equipment installed in Zone 1 is:",
            options: {
              A: "IPX2",
              B: "IPX4",
              C: "IPX5",
              D: "IPX7"
            },
            answer: "B",
            explanation:
              "IPX4. Section 701 zones: Zone 0 = IPX7, Zone 1 = IPX4, Zone 2 = IPX4 (IPX5 where water jets are likely, e.g. commercial showers/public baths)."
          },
          {
            number: 8,
            prompt: "Additional protection by a 30 mA RCD is required for:",
            options: {
              A: "All final circuits in a domestic premises",
              B: "Socket outlets rated up to 32 A, mobile equipment up to 32 A for use outdoors, and cables concealed in walls/partitions at a depth less than 50 mm",
              C: "Only circuits supplying outdoor equipment",
              D: "Any circuit in a location containing a bath or shower"
            },
            answer: "B",
            explanation:
              "Reg 411.3.3 (socket outlets up to 32 A), Reg 411.3.3 (mobile equipment up to 32 A outdoors), and Reg 522.6.202 (cables <50 mm deep in walls/partitions). Additional protection is 30 mA RCD. \"All circuits\" (A) is a common trap — RCD protection is not universally required, only where the regulations call for it."
          },
          {
            number: 9,
            prompt:
              "Surge Protection Devices (SPDs) under Regulation 443 are required where the consequences caused by overvoltage could:",
            options: {
              A: "Always — in every installation without exception",
              B: "Result in serious injury or loss of human life, interruption of public services, damage to cultural heritage, or interruption of commercial/industrial activity — otherwise a risk assessment applies (and for dwellings they are effectively required)",
              C: "Only occur in commercial installations",
              D: "Only occur in properties located in thunderstorm-prone areas"
            },
            answer: "B",
            explanation:
              "Reg 443.4 lists the consequences that mandate SPDs. Where none apply, Reg 443.5 allows a risk assessment — but for dwellings, the calculated risk level (CRL) almost always results in SPDs being required, so in practice new domestic installations include them."
          },
          {
            number: 10,
            prompt:
              "Under Regulation 421.1.7, Arc Fault Detection Devices (AFDDs) shall be fitted on final circuits supplying socket outlets in which of the following?",
            options: {
              A: "All domestic premises",
              B: "Higher-risk residential buildings (HRRBs), purpose-built student accommodation, care homes and houses in multiple occupation (HMOs)",
              C: "Only commercial kitchens",
              D: "Only outdoor socket circuits"
            },
            answer: "B",
            explanation:
              "Reg 421.1.7 was updated in A2:2022: \"shall\" is applied to the higher-risk premises listed (HRRBs, purpose-built student accommodation, care homes, HMOs). For other premises AFDDs are \"recommended\" rather than mandatory. Know the four \"shall\" categories — this is a common exam question."
          },
          {
            number: 11,
            prompt:
              "The minimum copper csa of the main protective bonding conductor in a TN-C-S (PME) installation where the supply neutral is 25 mm² is:",
            options: {
              A: "6 mm²",
              B: "10 mm²",
              C: "16 mm²",
              D: "25 mm²"
            },
            answer: "B",
            explanation:
              "10 mm². BS 7671 Table 54.8 sets main bonding sizes for PME based on the supply neutral csa: neutral ≤ 35 mm² → bonding 10 mm² (Cu); 50 mm² → 16 mm²; 70–95 mm² → 25 mm²; 120 mm² → 35 mm²; ≥150 mm² → 50 mm². Note: for non-PME (TN-S/TT), the rule is half the earthing conductor, min 6 mm², max 25 mm² — different table."
          }
        ]
      },
      {
        id: "section-3",
        title: "Section 3 — Electrical Science",
        questions: [
          {
            number: 12,
            prompt:
              "A 2 kW resistive load is connected to a 230 V supply. The current drawn is approximately:",
            options: {
              A: "4.6 A",
              B: "8.7 A",
              C: "11.5 A",
              D: "17.4 A"
            },
            answer: "B",
            explanation:
              "8.7 A. P = V × I, so I = P/V = 2000/230 = 8.696 A ≈ 8.7 A. For a purely resistive load, power factor = 1, so this is also the apparent current."
          },
          {
            number: 13,
            prompt: "Three 6 Ω resistors are connected in parallel. The total resistance is:",
            options: {
              A: "0.5 Ω",
              B: "2 Ω",
              C: "6 Ω",
              D: "18 Ω"
            },
            answer: "B",
            explanation:
              "2 Ω. For n equal resistors in parallel, RT = R/n = 6/3 = 2 Ω. General formula: 1/RT = 1/R1 + 1/R2 + 1/R3."
          },
          {
            number: 14,
            prompt:
              "A balanced three-phase load draws 30 A per line at 400 V (line-to-line) with a power factor of 0.85 lagging. Total real power consumed is approximately:",
            options: {
              A: "8.8 kW",
              B: "17.7 kW",
              C: "20.8 kW",
              D: "30.6 kW"
            },
            answer: "B",
            explanation:
              "17.7 kW. P = √3 × VL × IL × cos φ = 1.732 × 400 × 30 × 0.85 = 17,666 W ≈ 17.7 kW. A common slip is to forget the √3 or to use phase voltage (230 V) instead of line voltage — always check which voltage you've been given."
          },
          {
            number: 15,
            prompt:
              "A transformer has 1000 primary turns and 200 secondary turns. With a primary voltage of 230 V, the open-circuit secondary voltage is:",
            options: {
              A: "11.5 V",
              B: "46 V",
              C: "115 V",
              D: "1150 V"
            },
            answer: "B",
            explanation:
              "46 V. For an ideal transformer: VS/VP = NS/NP → VS = 230 × (200/1000) = 46 V. This is a step-down transformer (turns ratio 5:1)."
          },
          {
            number: 16,
            prompt:
              "The primary purpose of a ring final circuit (as opposed to a radial) is to:",
            options: {
              A: "Provide two parallel paths which allow 2.5 mm² conductors to be used for a 32 A protective device while maintaining adequate current-carrying capacity and lower volt drop",
              B: "Ensure redundancy if one half of the ring fails",
              C: "Reduce the number of sockets permitted",
              D: "Allow the use of a BS 3036 fuse at the origin"
            },
            answer: "A",
            explanation:
              "The ring's parallel paths share the load, allowing 2.5 mm² cable with 32 A protection (Appendix 15). \"Redundancy\" (B) is actually undesirable — a break in the ring creates an undetected radial that can be overloaded, which is why the continuity (r1/rn/r2) tests exist."
          }
        ]
      },
      {
        id: "section-4",
        title: "Section 4 — Earthing and Bonding",
        questions: [
          {
            number: 17,
            prompt: "In a TN-C-S (PME) system:",
            options: {
              A: "Earth and neutral are combined throughout the whole installation",
              B: "Earth and neutral are combined in the supply (PEN conductor) and separated into N and PE at the origin of the installation",
              C: "The protective earth is provided by a separate metallic conductor throughout",
              D: "The earth is provided by an electrode at the installation"
            },
            answer: "B",
            explanation:
              "In TN-C-S, the DNO combines earth and neutral in their PEN conductor, and it splits at the cut-out into the installation's N and PE. Hazard: a broken PEN can put mains voltage on exposed metalwork — this is why main protective bonding is sized conservatively for PME and why caravans/EV charging have specific PME restrictions."
          },
          {
            number: 18,
            prompt:
              "Supplementary equipotential bonding in a location containing a bath or shower is NOT required provided that:",
            options: {
              A: "All circuits are RCD protected",
              B: "All final circuits of the location comply with automatic disconnection times, all circuits have 30 mA RCD additional protection, AND all extraneous-conductive-parts of the location are effectively connected to the protective equipotential bonding (Reg 701.415.2)",
              C: "The bathroom contains a shower only and no bath",
              D: "The electrician considers it unnecessary"
            },
            answer: "B",
            explanation:
              "Reg 701.415.2 — all three conditions must be met for supplementary bonding to be omitted. RCD alone (A) isn't enough. This is heavily examined."
          },
          {
            number: 19,
            prompt:
              "For a TT system, the practical maximum earth electrode resistance (RA) generally recommended for stable long-term operation is:",
            options: {
              A: "5 Ω",
              B: "100 Ω",
              C: "200 Ω",
              D: "1667 Ω"
            },
            answer: "C",
            explanation:
              "200 Ω. Theoretically, RA × IΔn ≤ 50 V gives 1667 Ω for a 30 mA RCD — but that value is unstable with seasonal ground moisture changes. The widely accepted practical limit for a reliable TT electrode is under 200 Ω; many contractors aim for under 100 Ω where possible. BS 7430 also recommends keeping it low and stable."
          }
        ]
      },
      {
        id: "section-5",
        title: "Section 5 — Inspection and Testing",
        questions: [
          {
            number: 20,
            prompt:
              "The recommended sequence of dead tests on a new installation (per GN3) is:",
            options: {
              A: "Continuity of protective conductors → continuity of ring final circuit conductors → insulation resistance → polarity → earth electrode resistance (if applicable)",
              B: "Insulation resistance → continuity → polarity",
              C: "Polarity → continuity → insulation resistance",
              D: "Functional testing → continuity → insulation resistance"
            },
            answer: "A",
            explanation:
              "GN3 sequence (dead): continuity of protective conductors → continuity of ring conductors → IR → polarity (dead) → earth electrode resistance. Then energise and carry out live tests: polarity (live), Ze, Zs/PFC, RCD, functional. Order matters: don't do IR on a circuit you haven't proven the cpc continuity of first."
          },
          {
            number: 21,
            prompt:
              "The minimum acceptable insulation resistance value for a low-voltage (up to 500 V) final circuit tested at 500 V DC is:",
            options: {
              A: "0.5 MΩ",
              B: "1 MΩ",
              C: "2 MΩ",
              D: "10 MΩ"
            },
            answer: "B",
            explanation:
              "1 MΩ. Table 64 gives the minimum IR for LV installations (up to 500 V) as 1.0 MΩ, tested at 500 V DC. Values below 2 MΩ should prompt investigation — they pass but signal deteriorating insulation."
          },
          {
            number: 22,
            prompt:
              "When testing a general-purpose 30 mA RCD (BS EN 61008/61009) at 1 × IΔn, the maximum permitted disconnection time is:",
            options: {
              A: "40 ms",
              B: "200 ms",
              C: "300 ms",
              D: "500 ms"
            },
            answer: "C",
            explanation:
              "300 ms. For general (non-S-type) RCDs at 1 × IΔn the maximum trip time is 300 ms. At 5 × IΔn it's 40 ms. S-type (time-delayed) RCDs have different permitted ranges (130–500 ms at IΔn). The 40 ms value (A) is the trap — that's the 5× test, not the 1× test."
          },
          {
            number: 23,
            prompt: "An R1 + R2 measurement on a radial circuit gives you:",
            options: {
              A: "The resistance of the line conductor from the origin to the point of measurement, plus the resistance of the circuit protective conductor over the same route",
              B: "The impedance of the complete earth fault loop including the supply",
              C: "The resistance between line and neutral conductors",
              D: "The insulation resistance between line and earth"
            },
            answer: "A",
            explanation:
              "R1 + R2 is purely an end-to-end dead test of the line plus cpc resistance. It's used to calculate Zs without powering up: Zs = Ze + (R1+R2). Don't confuse with earth fault loop impedance, which is a live measurement including the supply impedance."
          },
          {
            number: 24,
            prompt:
              "On a circuit protected by a 30 mA RCD, the most appropriate way to obtain a reliable Zs value without tripping the RCD is:",
            options: {
              A: "A high-current Zs test with the RCD bypassed by a temporary link",
              B: "Using the low-current \"no-trip\" Zs function on the test instrument (or deriving Zs = Ze + (R1+R2))",
              C: "A continuity test only",
              D: "An insulation resistance test at 500 V"
            },
            answer: "B",
            explanation:
              "Modern MFTs include a no-trip / low-current Zs function that uses a small current pulse so the RCD doesn't operate. Alternatively, measure Ze at the origin and R1+R2 on the circuit and sum them (adjusting R1+R2 for temperature if needed). Never fit temporary links to bypass safety devices (A) — that's a dangerous and historic practice."
          }
        ]
      },
      {
        id: "section-6",
        title: "Section 6 — Circuit Design & Cable Calculations",
        questions: [
          {
            number: 25,
            prompt:
              "For an installation supplied directly from the public LV distribution network, the maximum permitted voltage drop, from the origin to the furthest point, on a lighting final circuit is:",
            options: {
              A: "3% of nominal voltage",
              B: "5% of nominal voltage",
              C: "6% of nominal voltage",
              D: "8% of nominal voltage"
            },
            answer: "A",
            explanation:
              "3%. Appendix 4 Table 4Ab: lighting 3%, other 5% (for public LV supply). If the installation is fed from a private source (own transformer), limits rise to 6% lighting / 8% other. These figures apply origin to furthest point of utilisation."
          },
          {
            number: 26,
            prompt:
              "Using the On-Site Guide diversity method, the assumed maximum demand of a household cooker control unit incorporating a 13 A socket, supplied by a 30 A circuit, is:",
            options: {
              A: "The full 30 A",
              B: "The first 10 A of rated current + 30% of remaining rated current + 5 A (socket)",
              C: "50% of 30 A",
              D: "10 A + 30% of 30 A"
            },
            answer: "B",
            explanation:
              "On-Site Guide diversity for household cookers: first 10 A of rated current at 100% + 30% of the remainder + 5 A if a socket is included in the control unit. Example for a 30 A cooker with socket: 10 + (0.30 × 20) + 5 = 10 + 6 + 5 = 21 A assumed demand."
          },
          {
            number: 27,
            prompt:
              "Which of the following is NOT one of the standard correction/rating factors applied when selecting a cable's csa?",
            options: {
              A: "Ca — ambient temperature",
              B: "Cg — grouping",
              C: "Ci — thermal insulation",
              D: "Cm — moisture"
            },
            answer: "D",
            explanation:
              "Cm doesn't exist. The standard factors are Ca (ambient temp), Cg (grouping), Ci (thermal insulation), Cc (applicable where protected by a BS 3036 fuse, or buried in ground — 0.725), Cs (soil thermal resistivity), Cd (cable depth for buried). The effective It = In / (Ca × Cg × Ci × Cc)."
          },
          {
            number: 28,
            prompt:
              "Cables concealed in a wall or partition at a depth of less than 50 mm must:",
            options: {
              A: "Be run within the designated safe zones AND have 30 mA RCD additional protection; OR be mechanically protected against nails/screws; OR incorporate an earthed metallic covering",
              B: "Only be run within safe zones, no other protection required",
              C: "Only have 30 mA RCD protection, regardless of route",
              D: "Be run anywhere, provided a junction box is accessible"
            },
            answer: "A",
            explanation:
              "Reg 522.6.202 and 522.6.203. You have three compliance routes: (a) in safe zones AND 30 mA RCD protection; (b) mechanical protection against nails/screws; (c) earthed metallic covering with mechanical protection properties. Safe zones alone are insufficient — note the AND."
          }
        ]
      },
      {
        id: "section-7",
        title: "Section 7 — Fault-Finding & Practical",
        questions: [
          {
            number: 29,
            prompt:
              "A ring final circuit test gives: r1 = 0.41 Ω, rn = 0.41 Ω, r2 = 0.68 Ω. The expected R1+R2 reading, measured between line and cpc at any socket on the ring using the figure-of-eight test, is approximately:",
            options: {
              A: "0.27 Ω",
              B: "0.41 Ω",
              C: "0.68 Ω",
              D: "1.09 Ω"
            },
            answer: "A",
            explanation:
              "0.27 Ω. At any point on a correctly-wired ring, when the line and cpc ends are cross-connected at the DB (figure-of-eight), the R1+R2 measured at every socket should equal (r1 + r2) / 4 and be substantially constant around the whole ring. (0.41 + 0.68) / 4 = 1.09 / 4 = 0.2725 Ω. Significant variation between sockets indicates a break, interconnection, or spur on a spur."
          },
          {
            number: 30,
            prompt:
              "A newly installed radial socket circuit passes continuity but fails insulation resistance between line and earth, reading 0.2 MΩ. The most likely cause is:",
            options: {
              A: "An open-circuit cpc",
              B: "A conductor that has been pinched, trapped or nicked, causing partial breakdown of insulation (possibly aggravated by moisture)",
              C: "An incorrectly wired plug top",
              D: "A faulty RCD"
            },
            answer: "B",
            explanation:
              "Continuity passing + IR failing to earth at 0.2 MΩ points to insulation compromise, not an open cpc (which would fail continuity) or wiring-order faults (which continuity+polarity would catch). Common causes: a pinched cable at a back-box grommet, a nicked conductor during termination, or moisture ingress somewhere on the circuit. Disconnect accessories one at a time and retest to localise the fault."
          }
        ]
      }
    ],
    scoring: [
      { range: "27–30", label: "Strong — exam-ready" },
      { range: "24–26", label: "Comfortable pass, review weak areas" },
      { range: "21–23", label: "Borderline — identify topic gaps and revisit" },
      { range: "< 21", label: "More revision needed before sitting" }
    ],
    priorities: [
      "Regulation lookups — practise finding Zs values in Table 41.3, bonding sizes in Table 54.8, and voltage drop in Appendix 4.",
      "Dead test sequence & interpretation — GN3 is essential reading; many exam questions are close paraphrases of it.",
      "Diversity calculations — On-Site Guide Appendix A, worked examples.",
      "Amendment 4:2026 updates — if sitting after October 2026, revise the new Section on stationary secondary batteries, Section 710 (medical locations) revisions, and functional earthing/bonding for ICT equipment."
    ]
  },
  {
    id: "l3-inspection-testing",
    title: "Level 3 — Inspection & Testing",
    subtitle: "Dedicated BS 7671 / GN3 mock",
    description:
      "A 30-question mock dedicated to the inspection and testing content of the Level 3 NVQ (e.g. C&G 2357 Unit 309, 5357, or the equivalent EAL unit — also useful preparation for C&G 2391-52). Covers purpose and scope of verification, certification and EICR codes, test instruments and GS38, the full dead and live test sequence, acceptance criteria, and interpretation of results. Built against BS 7671 (18th Edition, A2:2022 + A3:2024) and Guidance Note 3.",
    format: "30 multiple-choice questions. Aim for 70%+ in about 60 minutes as a realistic pass standard.",
    passMark: 21,
    sections: [
      {
        id: "section-1",
        title: "Section 1 — Purpose, Scope & Documents",
        questions: [
          {
            number: 1,
            prompt:
              "The primary purpose of initial verification of a new electrical installation is to:",
            options: {
              A: "Confirm the installation matches the contract specification",
              B: "Verify the installation meets the requirements of BS 7671 and is safe to be put into service",
              C: "Prove that every circuit operates as intended",
              D: "Provide paperwork for the customer's insurer"
            },
            answer: "B",
            explanation:
              "BS 7671 Part 6. Initial verification confirms the installation complies with BS 7671 and is safe to energise and put into service. Contract conformity (A) is a separate commercial check; functional proving (C) is one element of verification but not its overall purpose."
          },
          {
            number: 2,
            prompt:
              "A contractor has installed a new final circuit in an existing domestic installation. The appropriate certification is:",
            options: {
              A: "A Minor Electrical Installation Works Certificate (MEIWC)",
              B: "An Electrical Installation Certificate (EIC) with the Schedule of Inspections and Schedule of Test Results",
              C: "An Electrical Installation Condition Report (EICR)",
              D: "A functional testing record only"
            },
            answer: "B",
            explanation:
              "Any new circuit — or new installation — requires an EIC accompanied by the inspection and test schedules. MEIWC is only permitted for additions or alterations to an existing circuit that do not extend to a new circuit. EICRs are issued following periodic inspection of an existing installation."
          },
          {
            number: 3,
            prompt:
              "A Minor Electrical Installation Works Certificate (MEIWC) may correctly be issued for:",
            options: {
              A: "Installation of a new consumer unit",
              B: "An additional socket outlet added as a spur from an existing ring final circuit, with no new circuit created",
              C: "A new dedicated circuit that has not yet been energised",
              D: "Recording C2 defects identified during a periodic inspection"
            },
            answer: "B",
            explanation:
              "MEIWC covers additions or alterations to an existing circuit where no new circuit is created — e.g. a spur, replacing a damaged accessory, relocating a switch. Anything involving a new circuit or a new installation requires an EIC."
          },
          {
            number: 4,
            prompt:
              "An Electrical Installation Condition Report (EICR) is:",
            options: {
              A: "A certificate issued at the completion of new installation work",
              B: "A record of the results of a periodic inspection and test on an existing installation, with coded observations (C1, C2, C3, FI)",
              C: "A document only issued when the installation is found to be defective",
              D: "A design certificate produced before installation starts"
            },
            answer: "B",
            explanation:
              "The EICR documents the condition of an existing installation at the time of the periodic inspection. Observations are coded C1 (danger present), C2 (potentially dangerous), C3 (improvement recommended) or FI (further investigation). The presence of any C1, C2 or FI makes the overall outcome Unsatisfactory."
          },
          {
            number: 5,
            prompt:
              "A pre-test visual inspection (Reg 642.3) should confirm, among other items, that:",
            options: {
              A: "Only that no cables show external damage",
              B: "Equipment is correctly selected and erected, conductors are correctly identified and connected, protective devices are correctly rated and set, barriers/enclosures are in place, and required labels and notices are fitted",
              C: "Only that earthing is present somewhere in the installation",
              D: "Only that the installation appears to function"
            },
            answer: "B",
            explanation:
              "The visual inspection is structured and wide-ranging: correct selection of equipment for the environment, correct rating and setting of protective devices, correct connection and identification of conductors, presence of fire barriers, warning notices, labelling, etc. A visual inspection is not simply \"does it look OK\" — a significant proportion of defects are caught before any test instrument is used."
          }
        ]
      },
      {
        id: "section-2",
        title: "Section 2 — Test Instruments & GS38",
        questions: [
          {
            number: 6,
            prompt:
              "HSE Guidance Note GS38 requires that test probes and leads have:",
            options: {
              A: "Finger barriers, exposed metal tip no more than 4 mm (preferably 2 mm or shrouded/spring-loaded), adequately insulated leads, and fused leads where appropriate",
              B: "Crocodile clips only, never probes",
              C: "Probes at least 100 mm long to improve reach",
              D: "No fuses in the leads, so that high test currents can flow"
            },
            answer: "A",
            explanation:
              "GS38 is the practical standard for test probes used on live equipment. Finger barriers, a short exposed tip (≤ 4 mm, preferably ≤ 2 mm or retractable/shrouded), correctly rated insulation, and fused leads together limit the risk of shock and of creating a fault during a live test. Unsuitable probes are one of the commonest contributors to shock incidents in testing."
          },
          {
            number: 7,
            prompt:
              "A proving unit (or other known live source) is required:",
            options: {
              A: "Only when testing RCDs",
              B: "Before and after each use of a voltage indicator during safe isolation, to confirm the indicator is functioning",
              C: "To measure earth fault loop impedance",
              D: "As a substitute for an insulation resistance tester"
            },
            answer: "B",
            explanation:
              "Safe isolation: prove the tester on a known source → test at the point of work for dead → re-prove the tester. If the re-prove fails, the preceding \"dead\" confirmation is worthless. A proving unit gives a reliably safe source for this and is itself battery-limited to avoid shock risk."
          },
          {
            number: 8,
            prompt:
              "The standard insulation resistance test voltage for a 230/400 V LV installation is:",
            options: {
              A: "100 V AC",
              B: "250 V DC",
              C: "500 V DC",
              D: "1000 V DC"
            },
            answer: "C",
            explanation:
              "Table 64 of BS 7671. LV installations in the range above 50 V up to 500 V are tested at 500 V DC, with a minimum acceptable value of 1.0 MΩ. SELV/PELV circuits are tested at 250 V DC (min 0.5 MΩ); systems above 500 V use 1000 V DC."
          },
          {
            number: 9,
            prompt:
              "A low-resistance ohmmeter used for continuity testing must be capable of delivering:",
            options: {
              A: "At least 1 A at 50 V",
              B: "A short-circuit current of between 200 mA and 10 A, at an open-circuit voltage of 4 V to 24 V AC or DC",
              C: "Exactly 500 mA at 12 V AC",
              D: "A test current of 30 mA only"
            },
            answer: "B",
            explanation:
              "Set out in GN3: 200 mA to 10 A, 4–24 V AC or DC. The current must be high enough to break through oxide and surface contamination at joints so poor connections are revealed rather than masked. It is NOT the same instrument used for insulation resistance testing."
          }
        ]
      },
      {
        id: "section-3",
        title: "Section 3 — Dead Tests",
        questions: [
          {
            number: 10,
            prompt:
              "The correct sequence of DEAD tests on a new installation, per GN3, is:",
            options: {
              A: "Insulation resistance → continuity → polarity",
              B: "Continuity of protective conductors → continuity of ring final conductors → insulation resistance → polarity (dead) → earth electrode resistance (where applicable)",
              C: "Polarity → earth fault loop impedance → insulation resistance",
              D: "Functional testing → insulation resistance → continuity"
            },
            answer: "B",
            explanation:
              "GN3 sequence. cpc continuity is first so the circuit is proven safe to energise for subsequent steps; IR is then carried out (a 500 V DC test on unproven cpc is hazardous); polarity dead and earth electrode resistance follow. Live tests (polarity live, Ze, Zs, PFC, RCD, functional) are carried out only after all dead tests pass and the installation is energised."
          },
          {
            number: 11,
            prompt:
              "The R1 + R2 test method for continuity of the circuit protective conductor is carried out by:",
            options: {
              A: "Linking line and cpc at the origin, nulling the leads, then measuring between line and cpc at each accessory along the circuit",
              B: "Measuring directly between any two earthed metal parts",
              C: "Applying 500 V DC between line and cpc at the origin",
              D: "Taking a live earth fault loop impedance reading at each accessory"
            },
            answer: "A",
            explanation:
              "Link the line conductor to the cpc at the distribution board (with the circuit isolated), null the test leads, and measure between line and cpc at each point. The reading is R1 + R2, the end-to-end resistance of the line + cpc. Used to confirm cpc continuity and to calculate Zs without energising: Zs = Ze + (R1+R2), with a temperature correction where appropriate."
          },
          {
            number: 12,
            prompt:
              "The R2 wander-lead method is preferred to R1+R2 when:",
            options: {
              A: "The circuit is energised",
              B: "Testing the continuity of main protective or supplementary bonding conductors to extraneous-conductive-parts, or where no paired line conductor is available",
              C: "Carrying out an earth electrode test on a TT system",
              D: "Checking the balance of a ring final circuit"
            },
            answer: "B",
            explanation:
              "The wander-lead R2 test uses a long lead from the MET (nulled first) to the bonded part under test. It is the usual method for main protective bonding, supplementary bonding, and any cpc where you cannot easily link to a line conductor at the origin. It gives the resistance of the protective conductor alone."
          },
          {
            number: 13,
            prompt:
              "The \"figure-of-eight\" (cross-connection) ring final circuit test is used to:",
            options: {
              A: "Prove that the ring has no breaks, interconnections or spurs-on-a-spur, by cross-connecting line and cpc at the DB so that R1+R2 measured at any socket on the ring is substantially equal to (r1 + r2) / 4",
              B: "Detect insulation breakdown between line and neutral",
              C: "Measure the RCD operating time at 1×IΔn",
              D: "Record the prospective fault current"
            },
            answer: "A",
            explanation:
              "After end-to-end measurement of r1, rn and r2, the line end of one leg is cross-connected to the cpc end of the other (and vice versa) at the DB. At every socket on the ring, R1+R2 should then equal (r1 + r2) / 4 with only small variations. A significant variation indicates a break, an interconnection, or a spur fed from a spur."
          },
          {
            number: 14,
            prompt:
              "The minimum acceptable insulation resistance for a 230 V LV final circuit tested at 500 V DC is:",
            options: {
              A: "0.5 MΩ",
              B: "1 MΩ",
              C: "2 MΩ",
              D: "10 MΩ"
            },
            answer: "B",
            explanation:
              "Table 64, BS 7671: minimum 1.0 MΩ for LV installations up to 500 V, tested at 500 V DC. A reading between 1 and 2 MΩ is a pass, but it indicates deteriorating insulation and should be recorded and investigated. SELV/PELV circuits are tested at 250 V DC with a minimum of 0.5 MΩ."
          },
          {
            number: 15,
            prompt:
              "When carrying out an insulation resistance test between live conductors and earth on a final circuit, the accepted practice is to:",
            options: {
              A: "Leave all lamps, dimmers and electronic equipment connected for a realistic reading",
              B: "Disconnect or short out voltage-sensitive equipment (electronic dimmers, SPDs, RCBO electronics), remove lamps, and link line and neutral together so a single test measures both live conductors to earth",
              C: "Increase the test voltage to 1000 V DC regardless of the installation",
              D: "Leave RCDs in circuit to protect the tester from fault current"
            },
            answer: "B",
            explanation:
              "Linking L and N and testing to earth gives one figure covering both live conductors, and ensures items downstream of single-pole switches are included. 500 V DC will damage SPDs and many electronic devices; lamps and dimmers also typically read low and mask the cable IR. Disconnecting and retesting section by section is also how many IR faults are localised."
          },
          {
            number: 16,
            prompt:
              "A dead polarity check on a final circuit confirms that:",
            options: {
              A: "Every single-pole switch, fuse or circuit breaker is connected in the line conductor (not the neutral), and that socket outlets and accessories have line, neutral and cpc on the correct terminals",
              B: "The RCD operates correctly at 1×IΔn",
              C: "The earth electrode resistance is low",
              D: "The ring final has balanced legs"
            },
            answer: "A",
            explanation:
              "Polarity has two strands: (i) single-pole devices must only interrupt the line conductor, and (ii) accessories must be wired with L, N and cpc on the correct terminals. Polarity is confirmed both dead (as a continuity-style test) and live (with a voltage indicator) — both are required."
          }
        ]
      },
      {
        id: "section-4",
        title: "Section 4 — Live Tests",
        questions: [
          {
            number: 17,
            prompt:
              "Earth fault loop impedance at the origin (Ze) is correctly measured by:",
            options: {
              A: "Leaving all main protective bonding and the main switch as normal during the test",
              B: "Energising the supply, opening the main switch to isolate the installation, disconnecting the main protective bonding conductors at the MET, then testing between the incoming line conductor and the separated earth; reconnecting bonding immediately afterwards",
              C: "Reading the value from the DNO label without measurement",
              D: "Carrying out a 500 V DC test between line and earth"
            },
            answer: "B",
            explanation:
              "Ze is the loop impedance external to the installation — supply + cable + earth return. Main bonding is disconnected at the MET so parallel paths via gas/water services don't give a falsely low reading. Opening the main switch isolates the installation from the tester. The test must be kept brief and bonding reconnected immediately — the installation is temporarily less safe while the bonding is lifted."
          },
          {
            number: 18,
            prompt:
              "Zs for a circuit can be established by:",
            options: {
              A: "Direct measurement at the furthest point of the circuit using an earth fault loop impedance tester (ideally the no-trip / low-current function on RCD-protected circuits), OR by calculation as Zs = Ze + (R1+R2), applying a temperature correction where appropriate",
              B: "Insulation resistance measurement only",
              C: "Polarity test only",
              D: "Only direct measurement — calculation is never permitted"
            },
            answer: "A",
            explanation:
              "Both methods are accepted and often cross-checked. Direct measurement on RCD-protected circuits uses the no-trip function so the RCD doesn't operate during the test. Calculation using Zs = Ze + (R1+R2) is useful as a verification and when direct measurement isn't practical; R1+R2 measured cold must be corrected for the conductor's operating temperature before comparison with Table 41.3 maxima."
          },
          {
            number: 19,
            prompt:
              "The Prospective Fault Current (PFC) recorded on the certificate should be:",
            options: {
              A: "PSCC at the origin only",
              B: "PEFC at the origin only",
              C: "The higher of PSCC (prospective short-circuit current, between live conductors) and PEFC (prospective earth fault current, line to earth), measured at the origin",
              D: "Half of PSCC"
            },
            answer: "C",
            explanation:
              "Record the higher of the two values so every protective device is demonstrated to have a breaking capacity at least equal to the worst-case fault level. On a typical TN-C-S domestic supply in the UK this is commonly in the 1–16 kA range, depending on proximity to the substation."
          },
          {
            number: 20,
            prompt:
              "The maximum permitted disconnection time for a general-purpose 30 mA RCD (to BS EN 61008 or 61009) tested at 1 × IΔn is:",
            options: {
              A: "40 ms",
              B: "100 ms",
              C: "200 ms",
              D: "300 ms"
            },
            answer: "D",
            explanation:
              "300 ms at 1×IΔn for a general (non-S) type RCD. The other two test points are 0.5×IΔn (must NOT trip within 2 s) and 5×IΔn (must trip within 40 ms). S-type (time-delayed) RCDs are allowed 130–500 ms at 1×IΔn and are used where selectivity with a downstream RCD is required."
          },
          {
            number: 21,
            prompt:
              "When the same 30 mA RCD is tested at 5 × IΔn (150 mA), the maximum permitted disconnection time is:",
            options: {
              A: "40 ms",
              B: "150 ms",
              C: "300 ms",
              D: "500 ms"
            },
            answer: "A",
            explanation:
              "40 ms at 5 × IΔn is the high-current test that underpins the use of 30 mA RCDs as additional protection against direct contact — the fault must be cleared before ventricular fibrillation risk becomes dangerous. A common trap in exams is to swap the 40 ms and 300 ms figures between the 5× and 1× tests."
          },
          {
            number: 22,
            prompt:
              "An Arc Fault Detection Device (AFDD) is functionally tested in service by:",
            options: {
              A: "Creating a genuine arcing fault with test leads",
              B: "Using the integrated test button provided on the device, in accordance with the manufacturer's instructions, and verifying the device trips and can be re-set",
              C: "A 500 V DC insulation resistance test",
              D: "An earth fault loop impedance test"
            },
            answer: "B",
            explanation:
              "There is no standard on-site injection test that reproduces an arc signature — functional verification relies on the manufacturer's test button, which simulates the arc detection electronics and proves the trip mechanism works. The device also carries out continuous self-monitoring. Record the functional test outcome on the schedule."
          }
        ]
      },
      {
        id: "section-5",
        title: "Section 5 — Certification & EICR Codes",
        questions: [
          {
            number: 23,
            prompt:
              "An Electrical Installation Certificate (EIC) for new work requires signatures confirming responsibility for:",
            options: {
              A: "The customer only",
              B: "Design, construction, and inspection & testing (which may be discharged by the same competent person on smaller jobs, but each role is signed for separately)",
              C: "The Distribution Network Operator",
              D: "The local authority building control officer"
            },
            answer: "B",
            explanation:
              "The EIC separates the three responsibilities explicitly, even when one individual discharges all three. This makes each competent person accountable for the part of the work they have signed for, and supports traceability if a fault is later investigated."
          },
          {
            number: 24,
            prompt:
              "An EICR observation coded C1 means:",
            options: {
              A: "Improvement recommended",
              B: "Danger present — risk of injury; immediate remedial action required",
              C: "Potentially dangerous — urgent remedial action required",
              D: "Further investigation required"
            },
            answer: "B",
            explanation:
              "C1 is the most serious code — danger is present now (e.g. exposed live parts, damaged insulation with accessible copper). The inspector should make safe before leaving the site (often by isolation) and inform the duty holder immediately. Any C1 automatically renders the overall EICR result Unsatisfactory."
          },
          {
            number: 25,
            prompt:
              "An EICR observation coded C2 means:",
            options: {
              A: "Danger is present",
              B: "Potentially dangerous — urgent remedial action required",
              C: "Improvement recommended but not urgent",
              D: "No action required"
            },
            answer: "B",
            explanation:
              "C2 indicates a fault that could become dangerous if circumstances change — e.g. missing supplementary bonding in a bathroom where the omission conditions are not fully met, or a damaged accessory likely to expose live parts in use. C2 renders the report Unsatisfactory and must be remedied promptly, but does not necessarily require same-visit make-safe action."
          },
          {
            number: 26,
            prompt:
              "Under the Electrical Safety Standards in the Private Rented Sector (England) Regulations 2020, the maximum interval between EICRs on a privately rented domestic property is:",
            options: {
              A: "1 year",
              B: "3 years",
              C: "5 years, or at change of tenancy if sooner",
              D: "10 years"
            },
            answer: "C",
            explanation:
              "The 2020 Regulations require a maximum 5-year EICR interval for privately rented dwellings in England, with a fresh EICR at change of tenancy if that falls sooner. Owner-occupied domestic is IET-recommended at up to 10 years; HMOs and commercial are typically 5 years; industrial often 3 years."
          },
          {
            number: 27,
            prompt:
              "The Schedule of Test Results accompanying an EIC or EICR is used to:",
            options: {
              A: "Replace the EIC",
              B: "Record the numerical results obtained during testing — continuity, insulation resistance, Zs, PFC, RCD times, polarity — circuit by circuit, for traceability and audit",
              C: "Record only RCD test results",
              D: "Document a verbal handover to the customer"
            },
            answer: "B",
            explanation:
              "The Schedule of Test Results is the factual numerical record per circuit. It is paired with the Schedule of Inspections (a tick-box record of inspection items) to form the technical evidence behind the signed EIC or EICR. Without complete schedules the certificate itself is not valid."
          }
        ]
      },
      {
        id: "section-6",
        title: "Section 6 — Interpretation & Practical",
        questions: [
          {
            number: 28,
            prompt:
              "An insulation resistance test on a 230 V final circuit, live conductors linked to earth, reads 0.5 MΩ. The correct response is:",
            options: {
              A: "Record as a fail — below the 1.0 MΩ minimum of Table 64; isolate, investigate by disconnecting accessories one at a time and retesting, then rectify the fault",
              B: "Record as a comfortable pass",
              C: "Record as a healthy reading typical of a new installation",
              D: "Issue an EIC unchanged"
            },
            answer: "A",
            explanation:
              "0.5 MΩ is below the 1.0 MΩ minimum — a fail. Likely causes: pinched or nicked cable at a back box, moisture ingress, or a failing accessory/load left in circuit (dimmer, SPD, lamp). Localise by splitting the circuit progressively and retesting each section."
          },
          {
            number: 29,
            prompt:
              "A measured Zs on a 32 A Type B final circuit is 1.55 Ω. The maximum Zs from Table 41.3 (230 V, 0.4 s disconnection) is 1.37 Ω. The correct action is:",
            options: {
              A: "Record as a pass — 1.55 Ω is close enough to 1.37 Ω",
              B: "Record as non-compliant — the circuit will not achieve automatic disconnection within 0.4 s by overcurrent alone; investigate cable length and csa, cpc size, and termination integrity, or provide ADS by a 30 mA RCD and re-assess",
              C: "Upsize the protective device to a 40 A Type B to make Zs fit",
              D: "Fit a time-delayed RCD to slow disconnection"
            },
            answer: "B",
            explanation:
              "Measured Zs exceeds the tabulated maximum — the overcurrent device alone will not clear a line-to-earth fault within the required 0.4 s. Root causes include an overly long cable run, undersized cpc, high Ze, or a loose connection. Compliant fixes: shorten the run, increase cpc csa, re-terminate, or provide ADS by 30 mA RCD (which is why most final circuits are now RCD-protected). Upsizing the OCPD (C) defeats overload protection and is wrong."
          },
          {
            number: 30,
            prompt:
              "During functional testing, a 30 mA RCD trips at 1 × IΔn in 340 ms. The correct action is:",
            options: {
              A: "Record as a pass within tolerance",
              B: "Record as a fail — 300 ms is the maximum permitted at 1 × IΔn for a general-purpose 30 mA RCD; replace the device and repeat the full RCD test",
              C: "Uprate the RCD to 100 mA IΔn and retest",
              D: "Disable the integral test button"
            },
            answer: "B",
            explanation:
              "340 ms exceeds the 300 ms limit at 1 × IΔn — the device has failed and no longer provides the additional protection claimed. Replace and retest at 0.5×, 1× and 5×IΔn, and record all three results on the schedule. Never uprate the IΔn or disable a test facility as a way to \"pass\" a failing RCD."
          }
        ]
      }
    ],
    scoring: [
      { range: "27–30", label: "Strong — exam-ready" },
      { range: "24–26", label: "Comfortable pass, review weak areas" },
      { range: "21–23", label: "Borderline — identify topic gaps and revisit" },
      { range: "< 21", label: "More revision needed before sitting" }
    ],
    priorities: [
      "GN3 sequence — dead tests then live tests, in the order given; many exam questions are lifted almost verbatim from this.",
      "RCD acceptance criteria cold — 0.5×IΔn (no trip), 1×IΔn (≤ 300 ms general type), 5×IΔn (≤ 40 ms). Know S-type figures too.",
      "EICR codes C1 / C2 / C3 / FI — be able to classify real-world observations, not just recite the definitions.",
      "Certificates — when to issue an EIC vs a MEIWC vs an EICR, and who signs the three responsibility boxes on the EIC.",
      "Table 64 insulation resistance — test voltages and minimums for SELV/PELV, LV, and > 500 V circuits."
    ]
  },
  {
    id: "am2-installation-assessment",
    title: "AM2 / AM2E — Installation Electrician EPA",
    subtitle: "Mock knowledge / written element",
    description:
      "Representative of the knowledge and written-response element of the AM2 / AM2E end-point assessment for the Installation & Maintenance Electrician apprenticeship standard, delivered by NET. The practical assessment is hands-on installation, inspection, testing, fault-finding and commissioning — this mock drills the underpinning knowledge those practical tasks rely on. Built against BS 7671 (18th Edition, A2:2022 + A3:2024), HSG85, GS38 and Guidance Note 3.",
    format: "30 multiple-choice questions. Aim for 70%+ in about 60 minutes — the AM2 practical is a separate test of skill, but consistent knowledge of these topics underpins every task.",
    passMark: 21,
    sections: [
      {
        id: "section-1",
        title: "Section 1 — Safe Isolation & Preparation",
        questions: [
          {
            number: 1,
            prompt:
              "Which HSE document provides the practical guidance on working on or near electrical equipment that AM2 candidates are expected to apply?",
            options: {
              A: "BS 7671 Wiring Regulations",
              B: "HSG85 — Electricity at Work: Safe Working Practices",
              C: "IET Guidance Note 3",
              D: "PUWER 1998 Approved Code of Practice"
            },
            answer: "B",
            explanation:
              "HSG85 is HSE's practical guidance on safe electrical working — criteria for dead vs live work, competence, risk control, and procedures. BS 7671 is the installation standard, GN3 covers inspection & testing, and PUWER covers work equipment generally. On AM2, your safe-isolation approach is judged against HSG85."
          },
          {
            number: 2,
            prompt:
              "The full safe isolation sequence you must demonstrate on AM2 is:",
            options: {
              A: "Isolate → prove tester → test for dead → lock off → re-prove tester",
              B: "Identify the circuit → seek permission → isolate → secure by lock-off → prove tester on a known source → test for dead at the point of work → re-prove the tester on a known source → post caution/warning notices",
              C: "Turn off the main switch → check no lights are on → start work",
              D: "Isolate → begin work → test dead whenever in doubt"
            },
            answer: "B",
            explanation:
              "Identification and permission matter on shared or commercial premises. Lock-off secures the isolation. Proving the tester on a known source BEFORE and AFTER the dead test is the part candidates most often miss — it's what makes the 'dead' reading trustworthy."
          },
          {
            number: 3,
            prompt:
              "Under HSE Guidance Note GS38, voltage indicators and test probes used on LV equipment should have:",
            options: {
              A: "Unshrouded metal probes with a 25 mm exposed tip for better contact",
              B: "Finger barriers, an exposed metal tip of no more than 4 mm (preferably 2 mm or spring-loaded/shrouded), adequately insulated leads, and fused or current-limited leads",
              C: "Neon screwdrivers only",
              D: "Standard multimeter leads with no modification"
            },
            answer: "B",
            explanation:
              "GS38 sets the minimum probe/lead requirements. A short exposed tip stops bridging between adjacent conductors; finger barriers reduce hand-slip onto live parts; fused or current-limited leads limit the fault current if a probe slips. Unsuitable probes are a common root cause in investigated shock incidents."
          },
          {
            number: 4,
            prompt:
              "You arrive on site to find the final circuit you must isolate is shared with equipment belonging to another occupier. The correct action is to:",
            options: {
              A: "Isolate anyway and apologise later",
              B: "Seek permission from the duty holder / responsible person, agree a timed isolation or permit-to-work, then proceed",
              C: "Pull the fuse and leave a note",
              D: "Work live to avoid the disruption"
            },
            answer: "B",
            explanation:
              "Regulation 14 of EAWR 1989 and HSG85 require isolation to be carried out with permission where others may be affected. On larger sites a permit-to-work formalises this. Isolating without permission is a common AM2 failure point — the assessor is watching for it."
          },
          {
            number: 5,
            prompt:
              "Your approved voltage indicator confirmed 'dead' at the point of work. You then fail to re-prove it on a known source. You should:",
            options: {
              A: "Record the test as valid — the indicator clearly worked a moment ago",
              B: "Treat the circuit as live, replace/repair the indicator, and repeat the whole safe-isolation sequence from scratch",
              C: "Continue working — indicators rarely fail",
              D: "Swap to a multimeter and retest to confirm"
            },
            answer: "B",
            explanation:
              "The re-prove confirms the indicator was still working when it showed 'dead'. If it fails the re-prove, the earlier 'dead' reading cannot be trusted. A multimeter is not a GS38-approved voltage indicator and is no substitute."
          }
        ]
      },
      {
        id: "section-2",
        title: "Section 2 — Wiring Systems & Containment",
        questions: [
          {
            number: 6,
            prompt:
              "Band I (e.g. ELV fire-alarm or data) cables are to share a metal trunking with Band II (230/400 V mains) cables. The installation must:",
            options: {
              A: "Simply share the trunking with no further measures",
              B: "Segregate Band I from Band II by a continuous earthed metallic partition, OR use Band I cables insulated for the highest voltage present",
              C: "Require no segregation provided the trunking is earthed",
              D: "Separate them only with cable ties"
            },
            answer: "B",
            explanation:
              "Section 528.1 of BS 7671. The goal is to prevent inductive interference and to contain the consequences of an insulation breakdown between bands. Fire-alarm circuits (BS 5839) have additional category-specific segregation requirements on top of this."
          },
          {
            number: 7,
            prompt:
              "The generally accepted maximum 'space factor' when filling cable trunking, calculated using the cable factor / trunking factor method in the On-Site Guide, is approximately:",
            options: {
              A: "25% of the trunking csa",
              B: "45% of the trunking csa",
              C: "70% of the trunking csa",
              D: "100% of the trunking csa"
            },
            answer: "B",
            explanation:
              "The OSG cable-factor method caps effective fill at roughly 45% of the trunking cross-sectional area. Over-filling reduces heat dissipation (and therefore the cable's current-carrying capacity) and makes drawing in difficult. Conduit has its own separate, tighter table."
          },
          {
            number: 8,
            prompt:
              "When planning a steel conduit run, the maximum number of 90° bends (or equivalent) usually permitted between two successive draw-in points is:",
            options: {
              A: "0",
              B: "1",
              C: "2",
              D: "5"
            },
            answer: "C",
            explanation:
              "Two 90° bends between draw-in boxes — or four 45° bends, etc. — is the traditional practical limit in IET guidance. Exceeding this makes drawing-in difficult, risks damaging the cable insulation, and may require an additional draw-in box."
          },
          {
            number: 9,
            prompt:
              "When terminating a 4 mm² 3-core SWA cable into a steel enclosure and using the armour as the cpc, the correct method is to:",
            options: {
              A: "Rely on the compression of the gland nut against the enclosure alone",
              B: "Fit a suitable BS EN compression gland of the correct size, dress the armour under the gland cone so it is firmly clamped, bond the armour to the enclosure earth terminal via an earth tag/banjo where required, and fit a shroud to maintain the IP rating",
              C: "Wrap the armour in PVC tape and terminate only the inner cores",
              D: "Omit the armour bond as the cable contains an internal cpc"
            },
            answer: "B",
            explanation:
              "The armour is a cpc and requires a reliable low-resistance connection. A correctly-sized compression gland with earth tag — or an external earth banjo/tail where the enclosure is insulated or painted — provides this. If the cable also has an internal cpc core, the armour bond is in addition to, not instead of, it."
          },
          {
            number: 10,
            prompt:
              "Cables passing through the holes drilled in floor/ceiling joists must, under Regulation 522.6.201, be:",
            options: {
              A: "Run through any convenient hole with no other precaution",
              B: "At least 50 mm from the top or bottom of the joist, OR mechanically protected (e.g. enclosed in earthed metal, or incorporate an earthed metallic covering), OR otherwise protected from penetration by nails and screws",
              C: "Stapled to the top of the joist for neatness",
              D: "Always routed within plastic conduit, regardless of depth"
            },
            answer: "B",
            explanation:
              "Reg 522.6.201. The 50 mm rule keeps cables clear of where nails and screws are typically driven. If 50 mm clearance cannot be achieved, the cable must be mechanically protected or run in earthed metallic enclosure / incorporate an earthed metal covering."
          }
        ]
      },
      {
        id: "section-3",
        title: "Section 3 — Terminations & Accessories",
        questions: [
          {
            number: 11,
            prompt:
              "Which statement about terminating a PVC/SWA cable into a metallic enclosure is correct?",
            options: {
              A: "The outer PVC sheath must be retained right up to the gland pot so that no armour is visible",
              B: "The outer sheath is stripped back to expose the armour for the gland cone to grip; the inner bedding is stripped further back so the cores reach the terminals; a shroud is fitted over the gland to restore the IP rating",
              C: "The inner cores should be twisted together before termination",
              D: "Glands may be finger-tight only"
            },
            answer: "B",
            explanation:
              "Correct SWA termination: strip the sheath to expose the armour, dress the armour into the gland cone so it is firmly compressed, strip the bedding, terminate the cores. A rubber shroud restores the IP rating. The gland must be tightened to the manufacturer's specification — not so loose that the armour can move, not so tight that the cone deforms."
          },
          {
            number: 12,
            prompt:
              "When terminating a stranded copper conductor into a screw terminal the recommended practice is to:",
            options: {
              A: "Tin the strands with solder first to give a firm mass",
              B: "Strip the correct length, gently twist the strands to prevent strays, ensure the whole strand bundle sits under the clamping face, and tighten to the manufacturer's specified torque (using a torque screwdriver where called for)",
              C: "Leave the outer insulation under the screw",
              D: "Terminate only one strand to keep the joint neat"
            },
            answer: "B",
            explanation:
              "Solder-tinning is now discouraged — solder creeps under sustained pressure, creating a loose, high-resistance joint over time. The aim is to capture all strands under the terminal at the correct torque — too little causes high resistance, too much damages the conductor. Torque requirements are increasingly called up by Reg 526."
          },
          {
            number: 13,
            prompt:
              "A 1.25 mm² 3-core flexible cord (3183Y) is being terminated at a BS 1363 13 A fused plug. The correct termination includes:",
            options: {
              A: "The brown core to the neutral pin and the blue to the line pin",
              B: "The cord anchorage clamped on the outer sheath (not on the individual cores), the brown core to the fused (line) terminal, the blue to N, and the green/yellow cpc cut slightly longer than L and N",
              C: "No cord grip, so the cores can flex freely",
              D: "The cpc made shortest to save copper"
            },
            answer: "B",
            explanation:
              "Standard BS 1363 practice. The cpc is deliberately the longest core so that if the cord grip fails and the cable is pulled, the cpc is the last to disconnect — maintaining earth continuity as long as possible. The cord grip must clamp the outer sheath, never the cores themselves."
          },
          {
            number: 14,
            prompt:
              "When a switched socket outlet is mounted on a flush metal back box fed by T&E, the correct detail is:",
            options: {
              A: "The outer sheath of the T&E terminated at the edge of the back-box knockout, with cores exposed through the hole",
              B: "The outer sheath continued into the back box, a grommet or bush protecting the cable at the knockout, green/yellow sleeving over the bare cpc inside the box, and the metal back box earthed via a fly-lead or the accessory's earth terminal",
              C: "The cpc left bare inside the box — no sleeve required on a metal accessory",
              D: "No grommet, sleeve or sheath continuation needed"
            },
            answer: "B",
            explanation:
              "The sheath is retained into the box so the cores are protected; a grommet prevents sheath damage on the cut edge of the steel knockout; T&E cpc is bare and must be sleeved in green/yellow inside the enclosure. Metal back boxes require a cpc connection — achieved via a fly-lead to the back-box earth terminal or via a suitable earthed fixed-lug accessory."
          }
        ]
      },
      {
        id: "section-4",
        title: "Section 4 — Inspection, Testing & Certification",
        questions: [
          {
            number: 15,
            prompt:
              "The full GN3 sequence of DEAD tests on a new installation is:",
            options: {
              A: "Continuity of protective conductors (and main/supplementary bonding) → continuity of ring final conductors (r1, rn, r2) → insulation resistance → polarity (dead) → earth electrode resistance where applicable",
              B: "Insulation resistance → continuity → polarity",
              C: "Polarity → insulation resistance → continuity",
              D: "Functional testing → insulation resistance → continuity"
            },
            answer: "A",
            explanation:
              "GN3 sequence. cpc continuity is first so the circuit is safe for subsequent tests; the ring-final end-to-end values come next (with the figure-of-eight cross-connection test done after); IR and polarity dead follow; earth electrode resistance where applicable. Live tests (polarity live, Ze, PFC, Zs, RCD, functional) are done only after all dead tests pass and the installation is energised."
          },
          {
            number: 16,
            prompt:
              "To verify the continuity of a main protective bonding conductor from the MET to the incoming metallic water service using a wander-lead R2 test you should:",
            options: {
              A: "Connect the test leads between the line conductor at the consumer unit and the pipework",
              B: "Null the wander-lead resistance first, then connect one lead at the MET and the other at the clamp on the pipework, and read the resistance directly",
              C: "Use a 500 V DC insulation resistance tester between MET and pipe",
              D: "Measure between the outside tap and the boiler case"
            },
            answer: "B",
            explanation:
              "Wander-lead R2: null the leads so the instrument subtracts the wander-lead resistance, then measure from MET to the bonded part. The reading is the resistance of the bonding conductor alone. For a short 10 mm² run, expect a value well under 0.05 Ω."
          },
          {
            number: 17,
            prompt:
              "A 500 V DC insulation resistance test on a 230 V lighting final circuit, with live conductors linked and measured to the cpc, reads 0.8 MΩ. The correct action is to:",
            options: {
              A: "Record as a pass — above the 0.5 MΩ SELV minimum",
              B: "Record as a FAIL — below the 1.0 MΩ LV minimum in Table 64; isolate, progressively disconnect accessories, dimmers, SPDs or lamps to localise, rectify the fault, and retest",
              C: "Record as a healthy reading typical of a new circuit",
              D: "Repeat the test at 250 V DC and hope for a better reading"
            },
            answer: "B",
            explanation:
              "Table 64, BS 7671: 1.0 MΩ is the minimum for a 230 V LV circuit. 0.8 MΩ is a fail. Typical causes: pinched/nicked cable at a back-box grommet, moisture ingress, or voltage-sensitive equipment left in circuit (dimmers, SPDs, electronic RCBOs, lamps). Localise by section."
          },
          {
            number: 18,
            prompt:
              "During a live polarity check at a switched lampholder, the lamp extinguishes when the wall switch is operated, but a voltage indicator shows 230 V between the lamp's live pin and earth even when the switch is OFF. The most likely fault is:",
            options: {
              A: "Correct wiring",
              B: "The single-pole switch has been wired into the NEUTRAL conductor rather than the line — a polarity fault requiring immediate correction",
              C: "An RCD has tripped",
              D: "The lamp is simply loose"
            },
            answer: "B",
            explanation:
              "A single-pole switch must only interrupt the line conductor (Reg 132.14 / 537). If it interrupts the neutral instead, the accessory remains live with the switch off — very dangerous during lamp changes. Polarity must be confirmed both dead (during dead tests) and live (after energising)."
          },
          {
            number: 19,
            prompt:
              "The Schedule of Test Results must, as a minimum, record for each circuit:",
            options: {
              A: "Only the RCD disconnection times",
              B: "Circuit reference, conductor csa, OCPD type and rating, R1+R2 (or R2 by wander lead), ring r1/rn/r2 where applicable, insulation resistance values, polarity confirmation, Zs (measured or calculated), RCD times at 1× and 5× IΔn (and 0.5× where recorded), and functional test confirmation",
              C: "Just a pass/fail tick per circuit",
              D: "A written narrative of the test session"
            },
            answer: "B",
            explanation:
              "The Schedule of Test Results is the numerical evidence behind the EIC or EICR and the baseline against which future periodic tests will be compared. Missing entries can invalidate the certificate and make the next inspection harder."
          },
          {
            number: 20,
            prompt:
              "An Electrical Installation Certificate for new work is signed, in separate signature blocks, by the person(s) responsible for:",
            options: {
              A: "The customer only",
              B: "Design, construction, and inspection & testing — each as a distinct signed responsibility (one competent person may sign all three on smaller projects)",
              C: "Only the DNO engineer",
              D: "Only the building control officer"
            },
            answer: "B",
            explanation:
              "Three distinct signature blocks on the EIC keep responsibility traceable, even when a single competent person discharges all three roles. Each signatory certifies, for their part, that the work complies with BS 7671 at the date of certification."
          }
        ]
      },
      {
        id: "section-5",
        title: "Section 5 — Fault Diagnosis & Rectification",
        questions: [
          {
            number: 21,
            prompt:
              "On a ring final circuit, line–neutral readings at all sockets are correct, but line–earth continuity at one group of sockets is significantly higher than elsewhere on the ring. The most likely fault is:",
            options: {
              A: "An open-circuit (broken) cpc between two sockets on the ring, which removes the parallel cpc path for the affected group",
              B: "An open line conductor",
              C: "An open neutral conductor",
              D: "Insulation breakdown between line and earth"
            },
            answer: "A",
            explanation:
              "With L-N healthy but L-E drifting up at a specific group of sockets, the line and neutral copper are intact but the cpc has a break — often a missed termination at a ceiling rose-style JB, a broken core at a spur, or a damaged accessory. Localise by sweeping R1+R2 around the ring and finding where the values change sharply."
          },
          {
            number: 22,
            prompt:
              "A Type B 32 A MCB trips instantly each time it is closed. With all loads disconnected, an IR test between L and N on the affected circuit reads below 0.01 MΩ. The most likely fault is:",
            options: {
              A: "A direct line-to-neutral short — possibly a nail or screw through the cable, a crushed cable at a back-box, or a short at an accessory",
              B: "An open-circuit cpc",
              C: "High ambient temperature",
              D: "An earth-leakage fault alone"
            },
            answer: "A",
            explanation:
              "A near-zero L-N IR with loads removed is a direct short on the fixed wiring. Common causes: nail/screw penetration (especially outside safe zones), pinched cable at a back-box or under a flooring pin, or a shorted accessory. Localise by section — disconnect at the DB and each accessory in turn, retesting IR."
          },
          {
            number: 23,
            prompt:
              "A 30 mA RCD protecting a socket circuit trips intermittently, mainly on damp mornings, with no appliance connected. An IR test between NEUTRAL and the cpc reads 0.3 MΩ. The most likely cause is:",
            options: {
              A: "A faulty RCD",
              B: "An intermittent neutral-to-earth insulation fault — leakage through the damaged N insulation adds to the residual current and trips the RCD; the fault becomes worse when damp",
              C: "An oversized circuit breaker",
              D: "A loose line connection"
            },
            answer: "B",
            explanation:
              "RCDs operate on the imbalance between line and neutral. N-to-earth leakage (a damaged neutral conductor, or a shared neutral between circuits) produces residual current during normal operation and nuisance-trips the RCD. A poor N-E IR reading is the diagnostic fingerprint. Moisture makes it worse, hence the pattern on damp mornings."
          },
          {
            number: 24,
            prompt:
              "A single final circuit measures a Zs significantly above its Table 41.3 maximum, while Ze and the Zs on other circuits in the same DB are within limits. The most likely cause(s) are:",
            options: {
              A: "High Ze at the origin — but that would affect every circuit",
              B: "Excessive cable length on that circuit, an undersized or damaged cpc, or a poor/high-resistance termination at a JB or accessory",
              C: "Incorrect DNO supply",
              D: "An open RCD"
            },
            answer: "B",
            explanation:
              "A problem confined to one circuit points to that circuit's installation: a long run, undersized cpc, loose joint, or damaged termination. Compliant remedies include shortening the run, increasing cpc csa, re-terminating, or providing ADS via a 30 mA RCD and re-assessing. Up-rating the OCPD is NOT a valid fix — it would defeat overload protection."
          },
          {
            number: 25,
            prompt:
              "On a ring final circuit under the figure-of-eight (cross-connected) test, the R1+R2 readings measured at each socket vary by more than 0.05 Ω around the ring. The most likely cause is:",
            options: {
              A: "The ring is correctly wired and balanced",
              B: "A break in one leg of the ring, an interconnection between the two legs, or a spur fed from a spur",
              C: "A polarity fault",
              D: "An insulation fault"
            },
            answer: "B",
            explanation:
              "With a correctly-wired ring and line/cpc cross-connected at the DB, the R1+R2 at every socket should equal (r1+r2)/4 with only minor variation. Significant variation indicates one of the three classic ring defects. Comparing the end-to-end r1, rn, r2 values, then re-walking the ring, usually pin-points the cause."
          }
        ]
      },
      {
        id: "section-6",
        title: "Section 6 — Functional Testing & Commissioning",
        questions: [
          {
            number: 26,
            prompt:
              "The correct sequence for initially energising a newly-installed installation is:",
            options: {
              A: "Close every MCB and RCD first, then close the main switch",
              B: "With all final-circuit devices OFF (including RCDs), close the main switch; verify supply polarity and Ze at the origin; then energise each circuit in turn, carrying out the relevant live tests (polarity live, Zs, RCD times, functional) before moving to the next",
              C: "Plug in appliances on every circuit first",
              D: "Back-feed the installation from a socket"
            },
            answer: "B",
            explanation:
              "Selective circuit-by-circuit energisation isolates any fault to a known circuit and keeps the installation under control. It also allows live tests to be carried out and recorded as each circuit is brought into service. Never back-feed the installation."
          },
          {
            number: 27,
            prompt:
              "During RCD commissioning, a general-purpose 30 mA RCD (BS EN 61008/61009) measures: 0.5×IΔn — no trip in 2 s; 1×IΔn — trip at 180 ms; 5×IΔn — trip at 35 ms. The correct record is:",
            options: {
              A: "Pass — all three criteria met (no trip at 0.5×, ≤ 300 ms at 1×, ≤ 40 ms at 5×)",
              B: "Fail at 5×IΔn",
              C: "Fail at 1×IΔn",
              D: "Fail at 0.5×IΔn"
            },
            answer: "A",
            explanation:
              "General-type 30 mA RCD limits: 0.5×IΔn must NOT trip within 2 s, 1×IΔn must trip in ≤ 300 ms, 5×IΔn must trip in ≤ 40 ms. All three must be recorded. S-type (time-delayed) RCDs have different figures — used for selectivity with a downstream 30 mA RCD."
          },
          {
            number: 28,
            prompt:
              "Commissioning a three-phase distribution board, a phase-rotation indicator at the DB shows reverse rotation. The correct action is to:",
            options: {
              A: "Leave it — only motors care about rotation",
              B: "Identify and correct the cross-connection (at the origin or within the installation) so rotation is in the expected L1–L2–L3 sequence, then re-verify; correcting at an individual motor only hides the problem for every other three-phase load on the board",
              C: "Change the motor windings",
              D: "Swap the neutral"
            },
            answer: "B",
            explanation:
              "Rotation at the DB must match the convention so every three-phase load (motors, HVAC plant, lifts, fire pumps) starts the correct way. Fixing rotation at a single motor only masks the board-level cross. Always correct at the root cause and re-verify."
          },
          {
            number: 29,
            prompt:
              "Functional testing of a two-way and intermediate lighting circuit requires you to:",
            options: {
              A: "Check one strapper works and move on",
              B: "Operate each switch (both way-switches and each intermediate switch) through every combination, confirming the lamp turns ON/OFF correctly in each state and is off when every switch is in the rest position",
              C: "Test only the insulation resistance of the circuit",
              D: "Measure the lamp current"
            },
            answer: "B",
            explanation:
              "All-combinations operation is the only way to prove the wiring of a multi-way lighting circuit. A miswire on an intermediate switch can look correct until a specific combination reveals it — so every sequence must be exercised."
          },
          {
            number: 30,
            prompt:
              "At handover of a new installation the minimum documentation issued to the client normally includes:",
            options: {
              A: "The signed EIC alone",
              B: "The signed EIC with its Schedule of Inspections and Schedule of Test Results, any Part P notification/compliance certificate where applicable, and operation/maintenance information — including a circuit list, protective device schedule, and manufacturer instructions for installed equipment",
              C: "A verbal walk-through and nothing in writing",
              D: "Only a note of the RCD test button location"
            },
            answer: "B",
            explanation:
              "BS 7671 and the Building Regulations set out the minimum handover pack. The two schedules carry the technical evidence behind the EIC; Part P notification/certification is required for notifiable domestic work in England; O&M information enables the client (and any future electrician) to operate and maintain the installation safely. On AM2, a missing or incomplete handover pack is a significant mark deduction."
          }
        ]
      }
    ],
    scoring: [
      { range: "27–30", label: "Strong — AM2-ready on knowledge" },
      { range: "24–26", label: "Comfortable pass, polish weak topics" },
      { range: "21–23", label: "Borderline — review gaps before the EPA" },
      { range: "< 21", label: "More revision needed before sitting AM2" }
    ],
    priorities: [
      "Safe isolation — rehearse the full sequence until it is automatic. The assessor will watch for permission, lock-off, prove/re-prove of the indicator, and GS38-compliant probes.",
      "GN3 test sequence — dead tests first in the correct order, then live tests; be able to state WHY each step comes where it does.",
      "RCD acceptance criteria cold — 0.5× IΔn no trip in 2 s, 1× IΔn ≤ 300 ms (general type), 5× IΔn ≤ 40 ms; know S-type figures separately.",
      "Fault-finding discipline — the AM2 fault-find sub-test is heavily weighted. Practise interpreting Zs, IR and ring-final anomalies and working from symptom to root cause by splitting the circuit.",
      "Commissioning & handover — selective energisation, three-phase rotation, multi-way lighting functional tests, and a complete documentation pack (EIC + both schedules + Part P + O&M)."
    ]
  }
];

export function countQuestions(exam: Exam): number {
  return exam.sections.reduce((sum, section) => sum + section.questions.length, 0);
}
