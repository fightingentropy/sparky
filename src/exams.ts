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
  scoring: Array<{ minScore: number; range: string; label: string }>;
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
              A: "All final circuits in any domestic premises, regardless of voltage band, socket rating or cable route",
              B: "Socket outlets rated up to 32 A, mobile equipment up to 32 A for use outdoors, and cables concealed in walls/partitions at a depth less than 50 mm",
              C: "Only socket outlet and lighting circuits supplying outdoor mobile equipment rated above 32 A",
              D: "Any final circuit in a location containing a bath or shower where supplementary equipotential bonding has been omitted"
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
              A: "Every final circuit serving the location is protected by a 30 mA RCD providing additional protection",
              B: "All final circuits of the location comply with automatic disconnection times, all circuits have 30 mA RCD additional protection, AND all extraneous-conductive-parts of the location are effectively connected to the protective equipotential bonding (Reg 701.415.2)",
              C: "The location contains only a shower (no bath), so the supplementary bonding requirement of Section 701 does not apply",
              D: "The location's main protective bonding has been verified to extend to all extraneous-conductive-parts at the MET"
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
              A: "The full 30 A rated current of the protective device, with no diversity allowance applied",
              B: "The first 10 A of rated current + 30% of remaining rated current + 5 A (socket)",
              C: "50% of the rated current at 30 A, plus an additional 5 A allowance for the integral 13 A socket",
              D: "10 A of rated current at 100% plus 30% of the full circuit rating, with the integral socket disregarded"
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
              A: "An open-circuit cpc on the circuit, leaving line and neutral conductors with no return path back to earth",
              B: "A conductor that has been pinched, trapped or nicked, causing partial breakdown of insulation (possibly aggravated by moisture)",
              C: "An incorrectly wired plug top reversing the line and neutral connections at one of the socket outlets",
              D: "A faulty RCD locked in the tripped position, masking the true insulation resistance of the wiring"
            },
            answer: "B",
            explanation:
              "Continuity passing + IR failing to earth at 0.2 MΩ points to insulation compromise, not an open cpc (which would fail continuity) or wiring-order faults (which continuity+polarity would catch). Common causes: a pinched cable at a back-box grommet, a nicked conductor during termination, or moisture ingress somewhere on the circuit. Disconnect accessories one at a time and retest to localise the fault."
          }
        ]
      }
    ],
    scoring: [
      { minScore: 27, range: "27–30", label: "Strong — exam-ready" },
      { minScore: 24, range: "24–26", label: "Comfortable pass, review weak areas" },
      { minScore: 21, range: "21–23", label: "Borderline — identify topic gaps and revisit" },
      { minScore: 0, range: "< 21", label: "More revision needed before sitting" }
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
              B: "Every 30 mA RCD on the installation operates within the maximum disconnection times set out in BS 7671 Table 41.1 at 1× and 5× IΔn",
              C: "The earth electrode resistance at the means of earthing is below the practical 200 Ω stability limit recommended for TT systems",
              D: "The ring final circuit has balanced r1 and rn legs and an R1+R2 substantially equal at every socket on the ring"
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
              B: "Insulation resistance measurement at 500 V DC at the origin, with all final-circuit RCDs in the closed position",
              C: "A polarity check at the furthest point of the circuit, combined with a recorded Ze value at the means of earthing",
              D: "Only direct measurement at the furthest point — calculation from Ze + (R1+R2) is not permitted under BS 7671"
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
              A: "The PSCC (prospective short-circuit current between live conductors) at the origin only, since this is always the higher of the two values",
              B: "The PEFC (prospective earth fault current between line and earth) at the origin only, since the protective conductor presents the lower impedance",
              C: "The higher of PSCC (prospective short-circuit current, between live conductors) and PEFC (prospective earth fault current, line to earth), measured at the origin",
              D: "The arithmetic mean of the PSCC and PEFC values measured at the origin, rounded to the nearest 0.5 kA for the certificate"
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
              A: "1 year, or at every change of tenancy whichever falls sooner",
              B: "3 years, with no change-of-tenancy trigger required by the Regulations",
              C: "5 years, or at change of tenancy if sooner",
              D: "10 years, mirroring the IET-recommended interval for owner-occupied dwellings"
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
              A: "Replace the EIC where the inspector cannot complete every required test on the day of the inspection",
              B: "Record the numerical results obtained during testing — continuity, insulation resistance, Zs, PFC, RCD times, polarity — circuit by circuit, for traceability and audit",
              C: "Record only the RCD disconnection times at 0.5×, 1× and 5× IΔn for each protective device on the board",
              D: "Document the verbal handover and customer acceptance of the work, signed by the duty holder on the day"
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
      { minScore: 27, range: "27–30", label: "Strong — exam-ready" },
      { minScore: 24, range: "24–26", label: "Comfortable pass, review weak areas" },
      { minScore: 21, range: "21–23", label: "Borderline — identify topic gaps and revisit" },
      { minScore: 0, range: "< 21", label: "More revision needed before sitting" }
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
              A: "Correct wiring — the residual 230 V is normal capacitive coupling on a long lighting circuit and can be ignored",
              B: "The single-pole switch has been wired into the NEUTRAL conductor rather than the line — a polarity fault requiring immediate correction",
              C: "An RCD on the lighting circuit has tripped, leaving the line conductor at supply potential through the open contacts",
              D: "The lamp is simply loose in the holder, allowing a small leakage current to register on the voltage indicator"
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
              A: "Only the RCD disconnection times at 0.5×, 1× and 5× IΔn, since these are the safety-critical figures that BS 7671 calls up by name",
              B: "Circuit reference, conductor csa, OCPD type and rating, R1+R2 (or R2 by wander lead), ring r1/rn/r2 where applicable, insulation resistance values, polarity confirmation, Zs (measured or calculated), RCD times at 1× and 5× IΔn (and 0.5× where recorded), and functional test confirmation",
              C: "A pass/fail tick per circuit, with the underlying numerical values retained on the inspector's instrument download as the audit record",
              D: "A written narrative of the test session signed by the duty holder, in place of the per-circuit numerical values that the EIC would otherwise reference"
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
              A: "The customer only, who confirms by signature that the work has been completed to their satisfaction and the installation is fit for purpose",
              B: "Design, construction, and inspection & testing — each as a distinct signed responsibility (one competent person may sign all three on smaller projects)",
              C: "Only the DNO engineer who has approved the connection of the installation to the public LV distribution network",
              D: "Only the local-authority building control officer for notifiable Part P work in dwellings, with the contractor signing the schedules separately"
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
              B: "An open-circuit cpc somewhere on the circuit, removing the path the MCB needs to clear an earth fault",
              C: "High ambient temperature at the consumer unit causing the MCB's thermal element to trip on its rated current",
              D: "An earth-leakage fault alone, since 32 A is well within the magnetic trip range of a Type B device"
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
              A: "A faulty RCD whose magnetic latch weakens at low ambient temperature, causing nuisance tripping in cool morning conditions",
              B: "An intermittent neutral-to-earth insulation fault — leakage through the damaged N insulation adds to the residual current and trips the RCD; the fault becomes worse when damp",
              C: "An oversized circuit breaker upstream of the RCD, allowing fault current to bypass the residual-current sensing coil",
              D: "A loose line connection at the consumer unit producing intermittent voltage dips that mimic a residual current"
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
              A: "Close every MCB and RCD first to prove they hold against load, then close the main switch to energise the entire installation in one step",
              B: "With all final-circuit devices OFF (including RCDs), close the main switch; verify supply polarity and Ze at the origin; then energise each circuit in turn, carrying out the relevant live tests (polarity live, Zs, RCD times, functional) before moving to the next",
              C: "Plug in representative appliances on every circuit first, so that the live tests can include real-world load currents from the outset",
              D: "Back-feed the installation from a known-energised socket on an adjacent circuit and work outwards through the consumer unit from there"
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
              B: "Fail at 5×IΔn — 35 ms is below the maximum permitted figure but exceeds the 25 ms manufacturer target for general-type RCDs",
              C: "Fail at 1×IΔn — 180 ms exceeds the 150 ms half-rating proof figure that BS 7671 calls up for general-type RCDs",
              D: "Fail at 0.5×IΔn — the device must trip at half rated current within 2 s, but on this test it remained closed throughout"
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
              A: "Leave it — phase rotation only matters for motor-driven plant, and the rotation can be corrected locally at each motor as it is brought into service",
              B: "Identify and correct the cross-connection (at the origin or within the installation) so rotation is in the expected L1–L2–L3 sequence, then re-verify; correcting at an individual motor only hides the problem for every other three-phase load on the board",
              C: "Change the motor windings on every three-phase machine connected to the board so each one matches the supplied rotation as installed",
              D: "Swap the neutral conductor and one phase at the origin to invert the apparent rotation displayed on the indicator at the DB"
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
              A: "Confirm one strapper conductor carries voltage when its associated switch is operated, then move on once that single combination is proven",
              B: "Operate each switch (both way-switches and each intermediate switch) through every combination, confirming the lamp turns ON/OFF correctly in each state and is off when every switch is in the rest position",
              C: "Test only the insulation resistance of the circuit at 500 V DC, with all switches placed in the rest position before the test is applied",
              D: "Measure the lamp current at each switch position and confirm it falls within ±10% of the design value calculated from the lamp wattage"
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
              A: "The signed EIC alone, with the schedules and other supporting documents retained by the contractor for audit purposes",
              B: "The signed EIC with its Schedule of Inspections and Schedule of Test Results, any Part P notification/compliance certificate where applicable, and operation/maintenance information — including a circuit list, protective device schedule, and manufacturer instructions for installed equipment",
              C: "A verbal walk-through with no written documents on the day, provided the duty holder confirms acceptance in writing within 28 days of the work",
              D: "A note of the RCD test-button location and a one-page summary of the protective device ratings on the consumer unit, with no schedules"
            },
            answer: "B",
            explanation:
              "BS 7671 and the Building Regulations set out the minimum handover pack. The two schedules carry the technical evidence behind the EIC; Part P notification/certification is required for notifiable domestic work in England; O&M information enables the client (and any future electrician) to operate and maintain the installation safely. On AM2, a missing or incomplete handover pack is a significant mark deduction."
          }
        ]
      }
    ],
    scoring: [
      { minScore: 27, range: "27–30", label: "Strong — AM2-ready on knowledge" },
      { minScore: 24, range: "24–26", label: "Comfortable pass, polish weak topics" },
      { minScore: 21, range: "21–23", label: "Borderline — review gaps before the EPA" },
      { minScore: 0, range: "< 21", label: "More revision needed before sitting AM2" }
    ],
    priorities: [
      "Safe isolation — rehearse the full sequence until it is automatic. The assessor will watch for permission, lock-off, prove/re-prove of the indicator, and GS38-compliant probes.",
      "GN3 test sequence — dead tests first in the correct order, then live tests; be able to state WHY each step comes where it does.",
      "RCD acceptance criteria cold — 0.5× IΔn no trip in 2 s, 1× IΔn ≤ 300 ms (general type), 5× IΔn ≤ 40 ms; know S-type figures separately.",
      "Fault-finding discipline — the AM2 fault-find sub-test is heavily weighted. Practise interpreting Zs, IR and ring-final anomalies and working from symptom to root cause by splitting the circuit.",
      "Commissioning & handover — selective energisation, three-phase rotation, multi-way lighting functional tests, and a complete documentation pack (EIC + both schedules + Part P + O&M)."
    ]
  },
  {
    id: "basic-electrics",
    title: "Basic Electrics — Topic Mock",
    subtitle: "Webinar 1 — fundamentals",
    description:
      "A focused topic mock built around Webinar 1 — Introduction to Basic Electrics. Covers voltage, current, resistance, power, Ohm's law, the power law, AC vs DC, single- and three-phase basics, and the conductor behaviour you'll rely on throughout the rest of the course.",
    format: "12 multiple-choice questions. Aim for 9+/12 (75%) before moving on to regulations material.",
    passMark: 9,
    sections: [
      {
        id: "section-1",
        title: "Section 1 — Units & Ohm's Law",
        questions: [
          {
            number: 1,
            prompt: "The SI unit of electrical resistance is the:",
            options: {
              A: "Ampere (A)",
              B: "Volt (V)",
              C: "Ohm (Ω)",
              D: "Watt (W)"
            },
            answer: "C",
            explanation:
              "Resistance is measured in ohms (Ω). The volt is the unit of potential difference, the ampere is the unit of current, and the watt is the unit of power. Knowing your units cold matters because BS 7671 tables, calculations and test-instrument readings all assume you can read them at a glance."
          },
          {
            number: 2,
            prompt:
              "A circuit has a supply of 230 V and a resistance of 23 Ω. The current flowing is:",
            options: {
              A: "0.1 A",
              B: "10 A",
              C: "23 A",
              D: "5290 A"
            },
            answer: "B",
            explanation:
              "By Ohm's law I = V / R = 230 / 23 = 10 A. Be ready to rearrange V = I × R in any direction without writing it down — you'll use it in voltage drop, EFLI and circuit-design work constantly."
          },
          {
            number: 3,
            prompt:
              "A 2.3 kW resistive heating element is connected to a 230 V supply. The current it draws is:",
            options: {
              A: "0.1 A",
              B: "5 A",
              C: "10 A",
              D: "100 A"
            },
            answer: "C",
            explanation:
              "P = V × I, so I = P / V = 2300 / 230 = 10 A. For a purely resistive load (kettle, immersion, fan heater) the power factor is 1, so the calculated current is the actual current the protective device sees."
          },
          {
            number: 4,
            prompt:
              "A 13 A current passes through a conductor of resistance 0.5 Ω. The power dissipated as heat in the conductor is:",
            options: {
              A: "6.5 W",
              B: "26 W",
              C: "84.5 W",
              D: "169 W"
            },
            answer: "C",
            explanation:
              "P = I² × R = 13² × 0.5 = 169 × 0.5 = 84.5 W. This is the I²R loss that drives cable heating — and why a loose termination on an otherwise-correct circuit can still get hot enough to char an accessory."
          }
        ]
      },
      {
        id: "section-2",
        title: "Section 2 — AC Supply Systems",
        questions: [
          {
            number: 5,
            prompt: "The nominal UK single-phase mains voltage and frequency are:",
            options: {
              A: "240 V at 60 Hz",
              B: "230 V at 50 Hz",
              C: "110 V at 50 Hz",
              D: "400 V at 50 Hz"
            },
            answer: "B",
            explanation:
              "230 V at 50 Hz nominal (harmonised across Europe in 1995, with a tolerance of +10 % / −6 %). 240 V is the legacy figure, 110 V centre-tapped is the UK construction-site standard, and 400 V is the line-to-line voltage on a three-phase supply."
          },
          {
            number: 6,
            prompt:
              "On a UK 230 / 400 V three-phase supply, the voltage measured between any two line conductors is approximately:",
            options: {
              A: "110 V",
              B: "230 V",
              C: "400 V",
              D: "650 V"
            },
            answer: "C",
            explanation:
              "400 V (line-to-line). The relationship is VL = √3 × VP, so 230 × 1.732 ≈ 400 V. Line-to-neutral is 230 V; line-to-line is 400 V. Confusing the two is the most common slip in three-phase calculations."
          },
          {
            number: 7,
            prompt: "For a 230 V RMS sinusoidal supply, the approximate peak voltage is:",
            options: {
              A: "163 V",
              B: "230 V",
              C: "325 V",
              D: "460 V"
            },
            answer: "C",
            explanation:
              "Vpeak = Vrms × √2 = 230 × 1.414 ≈ 325 V. RMS is the equivalent DC value that produces the same heating effect; peak matters when you're sizing insulation, selecting SPDs, or interpreting an oscilloscope trace."
          },
          {
            number: 8,
            prompt:
              "On a three-phase supply, the phase angle between any two line voltages is:",
            options: {
              A: "60°",
              B: "90°",
              C: "120°",
              D: "180°"
            },
            answer: "C",
            explanation:
              "120°. Three phases are equally spaced around the cycle: L1 at 0°, L2 at 120°, L3 at 240°. This is what allows balanced loads to draw zero net neutral current and lets three-phase motors start without an auxiliary winding."
          }
        ]
      },
      {
        id: "section-3",
        title: "Section 3 — Conductors & Circuit Behaviour",
        questions: [
          {
            number: 9,
            prompt:
              "Doubling the length of a copper cable while keeping its cross-sectional area the same will:",
            options: {
              A: "Halve its resistance",
              B: "Leave its resistance unchanged",
              C: "Double its resistance",
              D: "Quadruple its resistance"
            },
            answer: "C",
            explanation:
              "R = ρL / A, so doubling L doubles R. This is why long runs need a bigger CSA — both to keep volt drop within Appendix 4 limits and to keep R1+R2 low enough to satisfy the Zs requirements of Table 41.3."
          },
          {
            number: 10,
            prompt:
              "As the temperature of a copper conductor rises, its electrical resistance:",
            options: {
              A: "Decreases",
              B: "Stays the same",
              C: "Increases",
              D: "Falls to zero at the boiling point of water"
            },
            answer: "C",
            explanation:
              "Copper has a positive temperature coefficient — resistance rises with temperature. This is why the IR test is taken cold and why measured R1+R2 must be corrected up to operating temperature before being used in a Zs calculation (the Cmin / temperature factor)."
          },
          {
            number: 11,
            prompt: "Three 6 Ω resistors connected in parallel give a total resistance of:",
            options: {
              A: "0.5 Ω",
              B: "2 Ω",
              C: "6 Ω",
              D: "18 Ω"
            },
            answer: "B",
            explanation:
              "For n equal resistors in parallel, RT = R / n = 6 / 3 = 2 Ω. In series the same three would total 18 Ω. The parallel-paths idea is exactly what halves the loop resistance of a ring final circuit compared with a radial of the same CSA."
          },
          {
            number: 12,
            prompt: "A purely resistive load (e.g. a heating element) has a power factor of:",
            options: {
              A: "0",
              B: "0.85",
              C: "1.0",
              D: "1.732"
            },
            answer: "C",
            explanation:
              "Unity (1.0). Power factor = cos φ between V and I; for a pure resistor V and I are in phase (φ = 0°), so PF = 1. Inductive loads (motors, ballasts) lag and capacitive loads lead, which is why PFC capacitor banks exist on industrial supplies."
          }
        ]
      }
    ],
    scoring: [
      { minScore: 11, range: "11–12", label: "Strong — fundamentals secure" },
      { minScore: 9, range: "9–10", label: "Comfortable pass" },
      { minScore: 7, range: "7–8", label: "Some gaps — revisit Ohm's and the power law" },
      { minScore: 0, range: "< 7", label: "Re-watch the basic electrics webinar before moving on" }
    ],
    priorities: [
      "Ohm's law and the power law triangles — be able to rearrange V = IR and P = VI on demand without writing them down.",
      "230 V single-phase and 400 V three-phase line-to-line — these are the UK distribution voltages every later module assumes.",
      "Conductor resistance: proportional to length, inversely proportional to CSA, rising with temperature. Underpins both voltage drop and Zs work later in the course."
    ]
  },
  {
    id: "building-regulations",
    title: "Building Regulations & Part P — Topic Mock",
    subtitle: "Webinar 2 — building regs for electricians",
    description:
      "A focused topic mock built around Webinar 2 — Basic Electrics & Building Regulations, with the emphasis on the Building Regulations side. Covers Part P scope, notifiable work, the relevant Approved Documents, the routes to compliance for an electrician, and how BS 7671 sits inside the regulatory framework in England.",
    format: "12 multiple-choice questions. Aim for 9+/12 (75%).",
    passMark: 9,
    sections: [
      {
        id: "section-1",
        title: "Section 1 — Part P & Notifiable Work",
        questions: [
          {
            number: 1,
            prompt: "Approved Document P (Part P) of the Building Regulations applies to:",
            options: {
              A: "All fixed electrical work in any building in England, both domestic and commercial, regardless of scale",
              B: "Electrical work in dwellings (and associated outbuildings, gardens and shared parts of multi-dwelling buildings)",
              C: "Only commercial and industrial premises in England, with dwellings covered separately by BS 7671 alone",
              D: "Only new-build dwellings in England, with existing dwellings remaining outside the scope of the Regulations"
            },
            answer: "B",
            explanation:
              "Part P applies to fixed electrical installations in dwellings, including outbuildings (sheds, garages), garden lighting, and the shared/common parts of buildings that contain dwellings. Commercial-only work falls under EAWR and BS 7671 but not Part P."
          },
          {
            number: 2,
            prompt:
              "Since the April 2013 changes, notifiable work under Part P in England is limited to:",
            options: {
              A: "Any electrical work in a kitchen",
              B: "Replacing a single accessory",
              C: "Installing a new circuit, replacing a consumer unit, or any addition / alteration in a special location (e.g. a room containing a bath or shower)",
              D: "Only the installation of EV charging equipment"
            },
            answer: "C",
            explanation:
              "Three categories remain notifiable in England: a new circuit, a consumer unit replacement (or main switch replacement), and any addition/alteration in a special location. Kitchens and outdoor work were removed from the notifiable list in 2013, though the work still has to comply."
          },
          {
            number: 3,
            prompt:
              "For Part P purposes, a \"special location\" in a dwelling is most commonly a:",
            options: {
              A: "A bedroom containing an en-suite shower room directly adjoining it through an internal doorway",
              B: "Any kitchen, since kitchens were treated as a special location prior to the April 2013 amendment",
              C: "Room containing a bath or shower (zones 0, 1 or 2)",
              D: "A hallway or stairwell that gives access to a room containing a bath or shower in the same dwelling"
            },
            answer: "C",
            explanation:
              "The Part P definition of a special location post-2013 is essentially \"a room containing a bath or shower\" within zones 0, 1 or 2 as defined by BS 7671 Section 701. Swimming pools and saunas are also special locations under BS 7671 but are far less common in domestic work."
          },
          {
            number: 4,
            prompt:
              "Carrying out notifiable Part P work without using one of the approved compliance routes is:",
            options: {
              A: "A civil matter only — the customer can sue but no offence is committed",
              B: "A criminal offence under the Building Act, with the local authority empowered to require correction or removal",
              C: "Permitted provided BS 7671 is followed",
              D: "Permitted provided the customer is told"
            },
            answer: "B",
            explanation:
              "Failing to notify is an offence under the Building Act 1984, prosecutable for up to 2 years after completion. The local authority can serve an enforcement notice requiring the work to be altered or removed; in practice the bigger problem for most owners is that they cannot prove compliance when they sell."
          }
        ]
      },
      {
        id: "section-2",
        title: "Section 2 — Other Approved Documents",
        questions: [
          {
            number: 5,
            prompt: "Approved Document B of the Building Regulations covers:",
            options: {
              A: "Structure",
              B: "Fire safety",
              C: "Resistance to moisture",
              D: "Conservation of fuel and power"
            },
            answer: "B",
            explanation:
              "AD B is fire safety — relevant whenever you penetrate a fire-rated wall or floor, or install cables in escape routes (where Reg 521.11.201 of BS 7671 also requires non-combustible cable supports)."
          },
          {
            number: 6,
            prompt: "Approved Document L of the Building Regulations covers:",
            options: {
              A: "Drainage and waste disposal",
              B: "Conservation of fuel and power (energy efficiency)",
              C: "Sound insulation",
              D: "Access to and use of buildings"
            },
            answer: "B",
            explanation:
              "AD L drives the energy-efficiency requirements you meet through low-energy lighting, heating-control wiring, EV-charge-ready provision in new dwellings, and similar. AD M is access; AD E is sound; AD H is drainage."
          },
          {
            number: 7,
            prompt: "Approved Document A of the Building Regulations covers:",
            options: {
              A: "Structure",
              B: "Ventilation",
              C: "Site preparation and resistance to contaminants",
              D: "Electrical safety"
            },
            answer: "A",
            explanation:
              "AD A is structure — relevant to electricians when you notch or drill joists (the safe-zone rules in AD A are echoed in BS 7671's safe-zone wiring rules in Reg 522.6.202)."
          },
          {
            number: 8,
            prompt: "Approved Document F of the Building Regulations covers:",
            options: {
              A: "Fire safety",
              B: "Ventilation",
              C: "Glazing safety",
              D: "Means of escape"
            },
            answer: "B",
            explanation:
              "AD F is ventilation — relevant when you wire extract fans (kitchen, bathroom, MVHR) and need to know minimum extract rates and whether intermittent or continuous-running fans are required."
          }
        ]
      },
      {
        id: "section-3",
        title: "Section 3 — Compliance Routes & BS 7671",
        questions: [
          {
            number: 9,
            prompt:
              "The three routes to compliance for notifiable Part P work in England are:",
            options: {
              A: "Self-certification by a registered Competent Person Scheme member; submission of a Building Notice / Full Plans to LABC; or third-party certification by a registered third-party verifier",
              B: "BS 7671 alone, with no further notification",
              C: "An EICR completed before commencement",
              D: "A written agreement with the customer"
            },
            answer: "A",
            explanation:
              "The three legitimate routes are: (1) being a CPS member and self-certifying via your scheme, (2) notifying the local authority before starting work and having it inspected, or (3) using a registered third-party certifier to inspect after completion. Only the CPS route is realistic for most production work."
          },
          {
            number: 10,
            prompt:
              "Examples of recognised Competent Person Schemes for electrical work in England include:",
            options: {
              A: "HSE and DNO",
              B: "NICEIC, NAPIT, Stroma, ELECSA and Certsure",
              C: "BSI and IET",
              D: "JIB and ECA"
            },
            answer: "B",
            explanation:
              "CPSs are private bodies authorised by DLUHC (now MHCLG) to self-certify Part P work — the principal ones are NICEIC, NAPIT, Stroma and ELECSA. The IET writes the Wiring Regulations but is not itself a CPS; the JIB / ECA are trade bodies, not certifiers."
          },
          {
            number: 11,
            prompt:
              "The legal status of BS 7671 (the IET Wiring Regulations) in England is:",
            options: {
              A: "A statutory instrument with direct legal force",
              B: "A non-statutory British Standard cited as the practical means of compliance with Part P (a 'deemed-to-satisfy' route)",
              C: "Mandatory only for new-build dwellings",
              D: "Replaced by Part P"
            },
            answer: "B",
            explanation:
              "BS 7671 itself is not law, but compliance with it is one of the recognised ways of demonstrating that the safety objectives of Part P (and the design and construction provisions of EAWR 1989) have been met. A court can accept other approaches, but in practice every prosecution is measured against BS 7671."
          },
          {
            number: 12,
            prompt:
              "After completing notifiable Part P work as a CPS member, the contractor must:",
            options: {
              A: "Take no further action — the work is recorded internally by the CPS through the contractor's annual scheme audit",
              B: "Notify the customer verbally and retain the EIC on file in case the local authority later asks to inspect the work",
              C: "Issue a Building Regulations compliance certificate to the client and notify the relevant CPS within 30 days, which then notifies the local authority",
              D: "Notify the DNO so that the supply records can be updated to reflect the new circuit or replacement consumer unit"
            },
            answer: "C",
            explanation:
              "The CPS member self-certifies via their scheme within 30 days; the scheme issues a compliance certificate to the client (typically by post) and informs the local authority on the contractor's behalf. Failing to notify within the time limit can result in fines from the scheme and undermines the homeowner's ability to prove compliance."
          }
        ]
      }
    ],
    scoring: [
      { minScore: 11, range: "11–12", label: "Strong — building-regs literacy is solid" },
      { minScore: 9, range: "9–10", label: "Comfortable pass" },
      { minScore: 7, range: "7–8", label: "Re-read AD P and the notifiable-work list" },
      { minScore: 0, range: "< 7", label: "Re-watch the building regulations webinar" }
    ],
    priorities: [
      "The three notifiable categories under Part P — new circuit, consumer unit, special location — these are the only ones that trigger notification.",
      "The three routes to compliance — CPS self-cert, Building Notice, third-party certifier — and which is realistic for your day-to-day work.",
      "Approved Document letters: A (structure), B (fire), F (ventilation), L (energy), P (electrical) — be able to identify each from a one-line description."
    ]
  },
  {
    id: "18th-edition",
    title: "18th Edition (BS 7671) — Topic Mock",
    subtitle: "Webinar 3 — wiring regulations structure & key provisions",
    description:
      "A focused topic mock built around Webinar 3 — 18th Edition of the Wiring Regulations. Drills the structure of BS 7671:2018 + A2:2022 + A3:2024, the key part numbers, the major tables electricians look up daily, and the headline provisions introduced or revised by the recent amendments (AFDDs, SPDs, EV charging).",
    format: "12 multiple-choice questions. Aim for 9+/12 (75%).",
    passMark: 9,
    sections: [
      {
        id: "section-1",
        title: "Section 1 — Structure of BS 7671",
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
            explanation:
              "Seven numbered parts: 1 Scope/Object/Fundamental principles, 2 Definitions, 3 Assessment of general characteristics, 4 Protection for safety, 5 Selection and erection, 6 Inspection and testing, 7 Special installations or locations — plus the appendices and the index."
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
            explanation:
              "Part 2 is the definitions register. Whenever a term is in italics in the text (e.g. \"competent person\", \"basic protection\"), Part 2 is the place to look — and a question about a defined term in BS 7671 is a Part 2 lookup, not a guess."
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
            explanation:
              "Part 6 covers inspection and testing — Chapter 64 initial verification, Chapter 65 periodic inspection, Chapter 66 certification and reporting. Detailed test methodology lives in IET Guidance Note 3."
          },
          {
            number: 4,
            prompt:
              "Special installations and locations (e.g. bathrooms, swimming pools, EV charging) are addressed in:",
            options: {
              A: "Part 4",
              B: "Part 5",
              C: "Part 6",
              D: "Part 7"
            },
            answer: "D",
            explanation:
              "Part 7 contains the special-location sections (701 bath/shower, 702 swimming pools, 711 exhibitions, 712 PV, 715 ELV lighting, 722 EV charging, etc.). Each one modifies — or supplements — the general requirements for that specific environment."
          }
        ]
      },
      {
        id: "section-2",
        title: "Section 2 — Special Provisions & Key Tables",
        questions: [
          {
            number: 5,
            prompt: "Section 701 of BS 7671 covers:",
            options: {
              A: "EV charging installations",
              B: "Locations containing a bath or shower",
              C: "Solar PV installations",
              D: "Construction sites"
            },
            answer: "B",
            explanation:
              "701 is the bath/shower section, with the well-known zones 0, 1 and 2 and the supplementary equipotential bonding rules in Reg 701.415.2 (waivable only when the four conditions of Reg 701.415.2 are all met). 722 is EV; 712 is PV; 704 is construction sites."
          },
          {
            number: 6,
            prompt:
              "Maximum permitted earth fault loop impedance (Zs) values for Type B / C / D circuit-breakers on 230 V circuits are tabulated in:",
            options: {
              A: "Table 41.1",
              B: "Table 41.3",
              C: "Table 54.8",
              D: "Appendix 14"
            },
            answer: "B",
            explanation:
              "Table 41.3 gives the maximum Zs for the disconnection times of Reg 411.3.2.2/3 with circuit-breakers and RCBOs. Table 41.2 covers fuses; Table 54.8 covers main protective bonding sizing; Appendix 14 explains how the Cmin temperature correction is applied."
          },
          {
            number: 7,
            prompt:
              "Main protective bonding conductor cross-sectional areas (related to the line conductor at the origin) are given in:",
            options: {
              A: "Table 41.3",
              B: "Table 51",
              C: "Table 54.8",
              D: "Table 7.1A in the OSG"
            },
            answer: "C",
            explanation:
              "Table 54.8 gives the minimum CSA of the main protective bonding conductor for TN and TT systems based on the line conductor size. Table 41.3 is Zs; Table 51 is conductor identification; OSG 7.1A covers different territory (small-installation diversity)."
          },
          {
            number: 8,
            prompt:
              "Recommended limits for voltage drop (3 % for lighting, 5 % for other uses) on a public LV supply appear in:",
            options: {
              A: "Section 525 / Appendix 4",
              B: "Section 411",
              C: "Appendix 1",
              D: "Section 132"
            },
            answer: "A",
            explanation:
              "Section 525 sets the principle and Appendix 4 provides the worked detail (mV/A/m tables, correction factors, the 3 % / 5 % default limits and the 6 % / 8 % limits for installations supplied by a private LV source)."
          }
        ]
      },
      {
        id: "section-3",
        title: "Section 3 — Recent Amendments (A2:2022 / A3:2024)",
        questions: [
          {
            number: 9,
            prompt:
              "Since A2:2022, Arc Fault Detection Devices (AFDDs) to BS EN 62606 are required (\"shall be provided\") for single-phase AC final circuits supplying socket-outlets ≤ 32 A in:",
            options: {
              A: "All dwellings without exception",
              B: "Higher Risk Residential Buildings, HMOs, purpose-built student accommodation and care homes",
              C: "Only industrial premises",
              D: "Only EV charging circuits"
            },
            answer: "B",
            explanation:
              "Reg 421.1.7 makes AFDDs mandatory in those four categories of higher-risk premises and recommends them everywhere else. The justification is the residual fire risk from series and parallel arcing faults that an MCB or RCD won't detect."
          },
          {
            number: 10,
            prompt:
              "Surge Protective Devices (SPDs) are addressed in BS 7671 by:",
            options: {
              A: "Section 411",
              B: "Section 443 (and Section 534 for selection and erection)",
              C: "Section 522",
              D: "Section 712"
            },
            answer: "B",
            explanation:
              "Section 443 is the protection-against-overvoltages section that triggers the need for an SPD; Section 534 covers selection and erection. Since A2:2022, the assumption is that SPDs are required unless a documented risk-assessment route justifies omitting them."
          },
          {
            number: 11,
            prompt:
              "Electric Vehicle charging installations are dealt with in BS 7671 by:",
            options: {
              A: "Section 701",
              B: "Section 712",
              C: "Section 722",
              D: "Section 753"
            },
            answer: "C",
            explanation:
              "Section 722 covers EV charging — RCD requirements (Type B or RDC-DD), PEN-fault detection on TN-C-S (open-PEN protection), socket-outlet selection, etc. 712 is PV; 753 is heating cables; 701 is bathrooms."
          },
          {
            number: 12,
            prompt:
              "Solar photovoltaic power supply systems are dealt with in BS 7671 by:",
            options: {
              A: "Section 712",
              B: "Section 722",
              C: "Section 740",
              D: "Section 706"
            },
            answer: "A",
            explanation:
              "Section 712 covers PV installations (DC-side cabling, isolation, earthing of the array frame, AC-side connection, labelling). It works alongside the inverter manufacturer's instructions and the DNO's G98/G99 connection requirements."
          }
        ]
      }
    ],
    scoring: [
      { minScore: 11, range: "11–12", label: "Strong — fluent in the structure of BS 7671" },
      { minScore: 9, range: "9–10", label: "Comfortable pass" },
      { minScore: 7, range: "7–8", label: "Practise lookups in the contents pages" },
      { minScore: 0, range: "< 7", label: "Re-watch the 18th Edition webinar and walk through the BS 7671 contents" }
    ],
    priorities: [
      "The Part numbers — 1 to 7 — and what each covers. Half the exam questions in this area test whether you can find the regulation, not whether you've memorised its number.",
      "The major lookup tables — Table 41.3 (Zs), Table 54.8 (bonding), Appendix 4 (voltage drop) — practise navigating to each in under 30 seconds.",
      "The amendment headlines — AFDDs in higher-risk premises, SPDs by default, the EV-charging open-PEN protection — these come up in viva-style assessor questions."
    ]
  },
  {
    id: "pat-testing",
    title: "PAT Testing — Topic Mock",
    subtitle: "Webinar 4 — in-service inspection & testing",
    description:
      "A focused topic mock built around the PAT-testing portion of Webinar 4. Covers the IET Code of Practice for In-service Inspection and Testing of Electrical Equipment (5th edition), equipment classes, the formal visual / combined inspection-and-test, pass values, intervals, and the legal driver behind the work.",
    format: "12 multiple-choice questions. Aim for 9+/12 (75%).",
    passMark: 9,
    sections: [
      {
        id: "section-1",
        title: "Section 1 — Equipment Classification",
        questions: [
          {
            number: 1,
            prompt:
              "The recognised UK reference document for in-service inspection and testing of portable and movable electrical equipment is:",
            options: {
              A: "BS 7671 Wiring Regulations",
              B: "The IET Code of Practice for In-service Inspection and Testing of Electrical Equipment (5th edition)",
              C: "IET Guidance Note 3",
              D: "PUWER 1998 ACOP"
            },
            answer: "B",
            explanation:
              "The IET COP is the practical industry guidance — it defines the equipment classes, the inspection categories, the test sequences, the pass criteria and the recommended intervals. BS 7671 only covers the fixed installation up to the socket-outlet."
          },
          {
            number: 2,
            prompt:
              "A Class I appliance relies on which two layers of shock protection?",
            options: {
              A: "Double insulation only",
              B: "Basic insulation plus a connection of accessible conductive parts to the protective conductor (earth)",
              C: "SELV only",
              D: "Functional insulation only"
            },
            answer: "B",
            explanation:
              "Class I = basic insulation as the primary barrier, plus an earthed metal enclosure as the fault path. If either fails on its own, the user is still protected; both have to fail before a shock becomes possible. This is why earth continuity is the headline test for Class I."
          },
          {
            number: 3,
            prompt:
              "A Class II appliance is identified by what symbol and relies on what protection?",
            options: {
              A: "A single square — relies on basic insulation only",
              B: "A double square (one inside the other) — relies on double or reinforced insulation, with no earthed metalwork",
              C: "An IP rating — relies on the enclosure",
              D: "A flash symbol — relies on a fuse"
            },
            answer: "B",
            explanation:
              "The double-square symbol denotes Class II / double-insulated. Earth continuity does not apply; the appropriate electrical test is insulation resistance. Many newer power tools and small appliances are Class II to avoid the cost and weight of an earthed enclosure."
          },
          {
            number: 4,
            prompt:
              "Class III equipment is supplied at:",
            options: {
              A: "230 V single-phase",
              B: "400 V three-phase",
              C: "SELV — not exceeding 50 V AC or 120 V ripple-free DC",
              D: "Any voltage provided it is double-insulated"
            },
            answer: "C",
            explanation:
              "Class III relies on supply at SELV — derived from a safety-isolating transformer and never connected to earth. Phone-charger output, low-voltage garden lighting transformers and bench-tool transformers are typical sources of a Class III supply."
          }
        ]
      },
      {
        id: "section-2",
        title: "Section 2 — Inspections & Tests",
        questions: [
          {
            number: 5,
            prompt:
              "A combined inspection and test must always be preceded by:",
            options: {
              A: "Insulation resistance only",
              B: "A formal visual inspection — tests do not replace the visual",
              C: "An EICR",
              D: "Disposal of the appliance if more than 5 years old"
            },
            answer: "B",
            explanation:
              "The IET COP sequence is user check → formal visual inspection → combined inspection and test. The visual catches damaged flexes, cracked plugs, overheated mouldings and incorrect fuse ratings — many of which the electrical tests cannot detect."
          },
          {
            number: 6,
            prompt:
              "The earth-continuity test on a Class I appliance is typically applied at:",
            options: {
              A: "500 V DC at a current of 200 mA, sharing the source the IR test uses on the same instrument",
              B: "1000 V DC at a maximum current of 25 A, applied through the appliance's earthing pin to the chassis",
              C: "A low voltage with a test current ≥ 1.5 × the appliance's fuse rating (typically a 200 mA \"soft\" or 10 A / 25 A \"hard\" test)",
              D: "Mains voltage with the appliance switched on, monitoring earth-leakage current under live operating conditions"
            },
            answer: "C",
            explanation:
              "Earth continuity is a low-voltage, controlled-current test — most modern PAT instruments offer a 200 mA option (kinder to delicate earthed components like surge filters) and a higher-current option (10 A or 25 A) for robust kit. Pass criterion is typically ≤ 0.1 Ω + R, where R is the lead's calculated resistance."
          },
          {
            number: 7,
            prompt:
              "The insulation resistance test on a Class I appliance is typically applied at what test voltage and what minimum acceptance value?",
            options: {
              A: "250 V DC, ≥ 0.5 MΩ",
              B: "500 V DC, ≥ 1.0 MΩ for most appliances (≥ 0.3 MΩ for heating elements)",
              C: "1000 V DC, ≥ 0.5 MΩ",
              D: "230 V AC, ≥ 1.0 MΩ"
            },
            answer: "B",
            explanation:
              "500 V DC is the standard PAT IR test voltage, with a 1.0 MΩ minimum for most appliances. Heating-element loads can legitimately read lower (≥ 0.3 MΩ) when warm; IT equipment with surge filtration is tested at 250 V DC to avoid damaging the filter components."
          },
          {
            number: 8,
            prompt:
              "Which of the following tests should NOT be applied to a Class II appliance?",
            options: {
              A: "Formal visual inspection",
              B: "Earth continuity (there is no earth to test to)",
              C: "Insulation resistance",
              D: "Functional check"
            },
            answer: "B",
            explanation:
              "Class II equipment has no earthed conductive parts, so an earth-continuity test is meaningless. The relevant electrical test is insulation resistance (typically applied between the live conductors joined together and any accessible metalwork, often via a probe)."
          }
        ]
      },
      {
        id: "section-3",
        title: "Section 3 — Records, Intervals & Legal Driver",
        questions: [
          {
            number: 9,
            prompt:
              "The legal driver requiring an employer to maintain electrical equipment in a safe condition (and which underpins in-service inspection and testing) is principally:",
            options: {
              A: "BS 7671 alone, which sets out the technical requirements for both fixed and in-service electrical equipment",
              B: "PUWER 1998 alone, which already covers all electrical aspects of in-service equipment maintenance and inspection",
              C: "The Electricity at Work Regulations 1989 (especially Reg 4(2)) supported by HSWA 1974",
              D: "RIDDOR 2013, which mandates inspection following any reportable electrical incident or near-miss involving equipment"
            },
            answer: "C",
            explanation:
              "Reg 4(2) of EAWR 1989 requires that systems be maintained so as to prevent danger so far as is reasonably practicable. PUWER and HSWA reinforce this in the broader work-equipment context. There is no statute that mandates \"PAT testing\" by name — what is mandated is the outcome (safe equipment), and PAT is the recognised means of evidencing it."
          },
          {
            number: 10,
            prompt:
              "Who decides the inspection and test intervals for in-service equipment?",
            options: {
              A: "The HSE prescribes fixed maximum intervals in HSG107 that every duty holder must apply",
              B: "The duty holder (typically the employer), based on equipment type, environment, frequency of use and previous test history",
              C: "The IET Code of Practice, which sets a mandatory interval for each equipment class that overrides any local risk assessment",
              D: "The competent person carrying out the test, using their professional judgement at the point of inspection"
            },
            answer: "B",
            explanation:
              "Intervals are risk-based, not legally fixed. The IET COP gives recommended starting intervals (e.g. 6 months for Class I handheld in industrial use; 4 years for stationary IT in a low-risk office) which the duty holder may shorten or lengthen based on the actual incidence of failure and environment."
          },
          {
            number: 11,
            prompt:
              "A pass label on a tested item should as a minimum show:",
            options: {
              A: "The PAT class number, the IET COP table reference for the equipment, and the tester's qualification level",
              B: "The test date, the recorded earth-continuity reading and the recorded insulation-resistance value",
              C: "A unique appliance ID, the test date, the next test due date (where the duty holder has chosen to display it), the tester's identity, and the pass result",
              D: "The duty holder's company name, the location of use, and the manufacturer's serial and model numbers"
            },
            answer: "C",
            explanation:
              "The label is the visible part of the record. It must let a user immediately verify that the item has been tested and identify which record in the register it corresponds to. Some duty holders omit the \"next due\" date so users don't keep using kit past its next scheduled test."
          },
          {
            number: 12,
            prompt:
              "A user-check (the first tier of the IET COP three-tier regime) is best described as:",
            options: {
              A: "A full formal test by a competent person",
              B: "A brief look by the user before each use — checking the flex, plug, casing and surroundings — with no test instrument involved",
              C: "An insulation resistance test only",
              D: "A test only required if the item has previously failed"
            },
            answer: "B",
            explanation:
              "User checks happen with every use and require no instruments — just looking for damaged flex, cracked plug, scorch marks, missing screws, loose grommet, or use in an unsuitable environment (wet, hot, in tension). They are the most frequent and most cost-effective layer of in-service safety."
          }
        ]
      }
    ],
    scoring: [
      { minScore: 11, range: "11–12", label: "Strong — PAT-ready" },
      { minScore: 9, range: "9–10", label: "Comfortable pass" },
      { minScore: 7, range: "7–8", label: "Re-read the IET COP equipment-class chapter" },
      { minScore: 0, range: "< 7", label: "Re-watch the PAT testing webinar" }
    ],
    priorities: [
      "Equipment classes — Class I (earthed), Class II (double-insulated), Class III (SELV) — and which test applies to each.",
      "The three-tier regime — user check, formal visual, combined inspection and test — and the order they sit in.",
      "Pass criteria cold — earth continuity ≤ 0.1 Ω + R, IR ≥ 1.0 MΩ at 500 V DC for most appliances, ≥ 0.3 MΩ for heating elements."
    ]
  },
  {
    id: "initial-verification",
    title: "Initial Verification — Topic Mock",
    subtitle: "Webinar 5 — testing a new installation before energising",
    description:
      "A focused topic mock built around Webinar 5 — Initial Verification. Covers Part 6 of BS 7671, the inspection schedule, the dead-test sequence (continuity, ring final, IR, polarity), the live-test sequence (Ze, PFC, Zs, RCD), acceptance criteria, and the documentation issued for new work.",
    format: "12 multiple-choice questions. Aim for 9+/12 (75%).",
    passMark: 9,
    sections: [
      {
        id: "section-1",
        title: "Section 1 — Inspection & Documents",
        questions: [
          {
            number: 1,
            prompt:
              "Initial verification of a new installation, addition or alteration is required by which Part of BS 7671?",
            options: {
              A: "Part 4",
              B: "Part 5",
              C: "Part 6",
              D: "Part 7"
            },
            answer: "C",
            explanation:
              "Part 6 deals with inspection and testing. Chapter 64 covers initial verification specifically; Chapter 65 covers periodic; Chapter 66 covers certification. Part 4 is protection, Part 5 is selection and erection."
          },
          {
            number: 2,
            prompt:
              "The visual inspection element of initial verification should be carried out:",
            options: {
              A: "Only after energising",
              B: "Before energising — to verify workmanship, conductor identification, IP ratings, accessory selection, fire stopping, etc.",
              C: "At the same time as live testing",
              D: "Only if the customer requests it"
            },
            answer: "B",
            explanation:
              "Inspection is a pre-energisation activity — once the supply is on, you can no longer easily check the back of accessories, the routing in voids, or the identification of conductors at terminations. The Schedule of Inspections is the tick-box record of what was looked at."
          },
          {
            number: 3,
            prompt:
              "The principal IET guidance document for initial and periodic verification is:",
            options: {
              A: "Guidance Note 1",
              B: "Guidance Note 3",
              C: "On-Site Guide",
              D: "Code of Practice for In-service Inspection and Testing"
            },
            answer: "B",
            explanation:
              "GN3 is the inspection-and-testing companion to BS 7671. It expands on test methodology, gives worked examples, and is the reference book that 2391 and many NVQ I&T questions are built around."
          },
          {
            number: 4,
            prompt:
              "On completion of new work the certificate(s) issued to the client are:",
            options: {
              A: "Just an EICR",
              B: "An Electrical Installation Certificate (EIC) accompanied by a Schedule of Inspections and a Schedule of Test Results",
              C: "A Building Regulations certificate alone",
              D: "A verbal handover"
            },
            answer: "B",
            explanation:
              "An EIC alone is incomplete — without the Schedule of Inspections and the Schedule of Test Results behind it, there is no evidence base for the signed declarations. A Minor Works Certificate (MEIWC) is the equivalent for small additions/alterations not introducing a new circuit."
          }
        ]
      },
      {
        id: "section-2",
        title: "Section 2 — Dead Tests",
        questions: [
          {
            number: 5,
            prompt:
              "The recommended sequence of dead tests during initial verification is:",
            options: {
              A: "Insulation resistance, polarity, continuity",
              B: "Continuity of protective conductors, continuity of ring final circuit conductors, insulation resistance, polarity, EFLI by calculation",
              C: "Polarity, insulation resistance, continuity",
              D: "Insulation resistance only"
            },
            answer: "B",
            explanation:
              "GN3's recommended order: continuity of CPCs (R1+R2), continuity of ring finals (r1, rn, r2 then cross-connected readings), insulation resistance, polarity, and earth-electrode resistance where relevant. EFLI (Zs) is then derived as Ze + (R1 + R2). The order matters because each test confirms a property the next test depends on."
          },
          {
            number: 6,
            prompt:
              "An R1 + R2 measurement is taken to:",
            options: {
              A: "Measure the supply voltage",
              B: "Measure the resistance of the line conductor and circuit protective conductor in series, end-to-end of a circuit, so that Zs can be derived as Ze + (R1+R2)",
              C: "Verify polarity at the consumer unit",
              D: "Measure prospective fault current"
            },
            answer: "B",
            explanation:
              "R1+R2 is the loop measurement of the line conductor and the cpc taken at every accessory; the worst-case reading combined with Ze gives the calculated Zs at that point. This is the safest way to verify earth fault loop impedance because it doesn't rely on the supply being live and won't trip an RCD."
          },
          {
            number: 7,
            prompt:
              "For a 230 V LV circuit, the insulation resistance test is applied at what test voltage and what minimum acceptance value?",
            options: {
              A: "250 V DC, ≥ 0.5 MΩ",
              B: "500 V DC, ≥ 1.0 MΩ",
              C: "1000 V DC, ≥ 1.0 MΩ",
              D: "230 V AC, ≥ 0.25 MΩ"
            },
            answer: "B",
            explanation:
              "BS 7671 Table 64 (now displayed as Table 6.4 in some printings of A2:2022) requires 500 V DC test with a 1.0 MΩ minimum for circuits up to 500 V. SELV/PELV use 250 V DC with 0.5 MΩ; circuits over 500 V use 1000 V DC with 1.0 MΩ."
          },
          {
            number: 8,
            prompt:
              "Polarity of fixed wiring should be confirmed before energising using:",
            options: {
              A: "A multimeter at mains voltage",
              B: "An approved voltage indicator at every accessory",
              C: "A continuity / low-resistance ohmmeter, by confirming the line-side connection at every accessory point",
              D: "A 500 V DC insulation tester"
            },
            answer: "C",
            explanation:
              "Polarity is a dead test — it verifies that the line conductor reaches the correct terminal at every accessory and that single-pole protective devices and switches are in the line conductor. A live polarity check using an AVI is also required at the origin during the live-test phase, but the dead check is what catches wiring errors before energising."
          }
        ]
      },
      {
        id: "section-3",
        title: "Section 3 — Live Tests & Acceptance",
        questions: [
          {
            number: 9,
            prompt:
              "External earth fault loop impedance Ze is measured at the origin of the installation by:",
            options: {
              A: "Calculating it from cable resistance",
              B: "Disconnecting the means of earthing, then measuring between the line conductor and the disconnected MET earthing point with the supply energised",
              C: "Reading the value from the DNO's certificate",
              D: "Measuring between line and neutral"
            },
            answer: "B",
            explanation:
              "Ze is the earth fault loop impedance external to the installation — i.e. the loop through the source and back via the earthing arrangement. It must be measured with the means of earthing disconnected so that parallel paths (such as gas and water bonding) don't artificially lower the reading."
          },
          {
            number: 10,
            prompt:
              "Earth fault loop impedance Zs at the far end of a final circuit can be obtained by:",
            options: {
              A: "Direct measurement only",
              B: "Calculation Zs = Ze + (R1 + R2), or by direct measurement (using the no-trip / RCD-bypass mode of the loop tester on RCD-protected circuits)",
              C: "Estimation from the cable length",
              D: "The DNO's quoted PFC value"
            },
            answer: "B",
            explanation:
              "Both routes are accepted in BS 7671. Calculation is the safer first method because it doesn't trip RCDs and uses the dead-test data you've already gathered. Direct measurement is then used to confirm the calculated value, with the no-trip mode used on RCD-protected circuits."
          },
          {
            number: 11,
            prompt:
              "For a 30 mA general-type RCD, the test current and required maximum operating times are:",
            options: {
              A: "0.5 × IΔn (no trip in 2 s); 1 × IΔn (≤ 300 ms); 5 × IΔn (≤ 40 ms)",
              B: "1 × IΔn (≤ 1 s); 5 × IΔn (≤ 200 ms)",
              C: "0.5 × IΔn (≤ 100 ms); 1 × IΔn (≤ 50 ms)",
              D: "Only the 30 mA push-button test"
            },
            answer: "A",
            explanation:
              "Memorise these acceptance criteria cold: at half rated current the device must not trip within 2 seconds; at rated current it must trip within 300 ms (general-type) and within 40 ms at five times rated. S-type (selective) RCDs allow longer times to support discrimination with downstream devices."
          },
          {
            number: 12,
            prompt:
              "The Schedule of Test Results that accompanies an EIC records:",
            options: {
              A: "The verbal handover notes given to the customer when the work was signed off, summarised in writing for the file",
              B: "The customer's written feedback on the installation experience and any commercial commentary on the works carried out",
              C: "The numerical results of every test taken — circuit-by-circuit continuity, IR, Zs, RCD times, polarity confirmation — providing the audit-evidence behind the signed certificate",
              D: "Only the RCD test results, since these are the live measurements that the customer is most likely to query later"
            },
            answer: "C",
            explanation:
              "The Schedule of Test Results is the factual numerical record of the verification. Without complete schedules the EIC declarations have nothing behind them; if a fault later develops, the numerical record is the evidence the duty holder uses to demonstrate that due diligence was carried out."
          }
        ]
      }
    ],
    scoring: [
      { minScore: 11, range: "11–12", label: "Strong — initial-verification ready" },
      { minScore: 9, range: "9–10", label: "Comfortable pass" },
      { minScore: 7, range: "7–8", label: "Re-read GN3 chapters on dead and live test sequence" },
      { minScore: 0, range: "< 7", label: "Re-watch the initial verification webinar" }
    ],
    priorities: [
      "The dead-test sequence — continuity, ring final, IR, polarity — in the GN3 order, knowing why each one comes before the next.",
      "Acceptance criteria — IR ≥ 1.0 MΩ at 500 V DC, RCD trip times (0.5×, 1×, 5× IΔn).",
      "Zs by calculation — Zs = Ze + (R1+R2) — and when to use the no-trip loop mode for direct measurement on RCD-protected circuits."
    ]
  },
  {
    id: "periodic-inspection",
    title: "Periodic Inspection & Testing — Topic Mock",
    subtitle: "Webinar 6 — testing an existing installation",
    description:
      "A focused topic mock built around Webinar 6 — Periodic Inspection and Testing. Covers the purpose of PIT, recommended intervals, sampling, limitations, the dead/live test approach for an in-service installation, and the legal drivers behind periodic verification.",
    format: "12 multiple-choice questions. Aim for 9+/12 (75%).",
    passMark: 9,
    sections: [
      {
        id: "section-1",
        title: "Section 1 — Purpose & Intervals",
        questions: [
          {
            number: 1,
            prompt:
              "The IET-recommended maximum interval between periodic inspections of an owner-occupied domestic installation is:",
            options: {
              A: "1 year, in line with the IET recommendation for HMOs and shared dwellings",
              B: "3 years, the IET-recommended interval for general industrial premises",
              C: "5 years, mirroring the maximum mandated for privately rented dwellings",
              D: "10 years (or at change of occupancy if sooner)"
            },
            answer: "D",
            explanation:
              "10 years is the IET-recommended maximum for owner-occupied domestic, with a fresh inspection at change of occupancy. The figure is in Table 3.2 of GN3. Privately rented dwellings in England are mandated to 5 years by separate legislation (the ESS PRS Regulations 2020)."
          },
          {
            number: 2,
            prompt:
              "Under the Electrical Safety Standards in the Private Rented Sector (England) Regulations 2020, the maximum interval between EICRs on a privately rented domestic property is:",
            options: {
              A: "1 year, or at every change of tenancy whichever falls sooner",
              B: "3 years, with no change-of-tenancy trigger required by the Regulations",
              C: "5 years, or at change of tenancy if sooner",
              D: "10 years, mirroring the IET-recommended interval for owner-occupied dwellings"
            },
            answer: "C",
            explanation:
              "The 2020 Regulations set a 5-year maximum, with a fresh EICR at change of tenancy if that falls sooner. The landlord must supply the report to the tenant within 28 days of inspection and to a new tenant before they move in."
          },
          {
            number: 3,
            prompt:
              "Typical IET-recommended maximum interval for a commercial premises:",
            options: {
              A: "1 year",
              B: "3 years",
              C: "5 years (or at change of occupancy)",
              D: "10 years"
            },
            answer: "C",
            explanation:
              "GN3 typically gives 5 years for commercial premises (offices, shops, restaurants). Industrial premises are typically 3 years. Specific high-risk environments (petrol stations, cinemas, swimming pools, leisure complexes) are 1 year."
          },
          {
            number: 4,
            prompt:
              "Typical IET-recommended maximum interval for a swimming pool installation:",
            options: {
              A: "1 year",
              B: "3 years",
              C: "5 years",
              D: "10 years"
            },
            answer: "A",
            explanation:
              "1 year — water and a continuous public footfall combine to create one of the highest-risk LV environments. Petrol filling stations, fish farms, marinas, leisure complexes and theatres also fall into the 1-year band."
          }
        ]
      },
      {
        id: "section-2",
        title: "Section 2 — Sampling & Limitations",
        questions: [
          {
            number: 5,
            prompt:
              "Sampling during a periodic inspection (i.e. testing only a proportion of similar circuits) is:",
            options: {
              A: "Not permitted — every circuit must be fully tested",
              B: "Permitted, but the extent and any agreed sample size must be recorded on the EICR and agreed in writing with the client beforehand",
              C: "Permitted only on commercial installations",
              D: "Permitted only on TT systems"
            },
            answer: "B",
            explanation:
              "Sampling is the practical reality on large installations — but it is conditional. The extent (what is included) and limitations (what is excluded, and why) are recorded on the EICR, and the duty holder accepts that anything outside the sample has not been verified."
          },
          {
            number: 6,
            prompt:
              "If sampling reveals a defect on one of the sampled circuits, the inspector should:",
            options: {
              A: "Record the defect and stop",
              B: "Increase the sample size and, where similar defects are found across multiple sampled circuits, extend testing towards 100 % of similar circuits",
              C: "Issue a Satisfactory result anyway",
              D: "Refer the matter to the DNO"
            },
            answer: "B",
            explanation:
              "A defect in the sample raises the probability that similar defects exist in the unsampled population, so the sample size must increase. Once the failure rate is significant, testing becomes 100 %. This is fundamental to GN3's sampling logic — sampling is risk-based, not a fixed percentage."
          },
          {
            number: 7,
            prompt:
              "The \"limitations\" box on an EICR records:",
            options: {
              A: "The inspector's opinion of the installer's competence",
              B: "Areas, items or operational restrictions that meant parts of the installation could not be inspected and tested — e.g. tenanted bedrooms, locked plant rooms, no permission to interrupt supply",
              C: "Future improvement suggestions",
              D: "Only the date of the inspection"
            },
            answer: "B",
            explanation:
              "The limitations box is a risk-management entry — it tells the duty holder which parts of the installation are outside the scope of the report and therefore not covered by the conclusions. Limitations are agreed in writing before work starts and recorded explicitly so liability is clear."
          },
          {
            number: 8,
            prompt:
              "Live testing during a periodic inspection is justified only when:",
            options: {
              A: "The duty holder asks for it",
              B: "The inspector wants to save time",
              C: "Dead testing is impracticable (e.g. continuous-process plant, life-safety circuits, business-critical IT) and the duty holder accepts the residual risk",
              D: "The installation is over 10 years old"
            },
            answer: "C",
            explanation:
              "GN3's principle is dead-test by default; live test only where dead testing isn't reasonably practicable. Live testing introduces shock risk to the inspector and arc-flash risk to the equipment, so the case for it must be specific and documented — not a workflow convenience."
          }
        ]
      },
      {
        id: "section-3",
        title: "Section 3 — Process & Outputs",
        questions: [
          {
            number: 9,
            prompt:
              "The principal legal driver behind periodic inspection and testing in the workplace is:",
            options: {
              A: "BS 7671 alone — it is statutory",
              B: "RIDDOR 2013",
              C: "The Electricity at Work Regulations 1989 (Reg 4(2)) and the Health and Safety at Work etc. Act 1974",
              D: "Building Regulations Part P"
            },
            answer: "C",
            explanation:
              "EAWR Reg 4(2) requires that systems be maintained so as to prevent danger; HSWA places the general duty on the employer. Periodic inspection and testing is the recognised means of demonstrating that the duty has been discharged. Part P only applies to dwellings, and only to notifiable work."
          },
          {
            number: 10,
            prompt:
              "The principal legal driver behind periodic inspection and testing in privately rented dwellings in England is:",
            options: {
              A: "EAWR 1989 only",
              B: "The Electrical Safety Standards in the Private Rented Sector (England) Regulations 2020",
              C: "Building Regulations Part P",
              D: "RIDDOR"
            },
            answer: "B",
            explanation:
              "The 2020 Regulations made periodic inspection a specific statutory duty on landlords in England (5-yearly max, EICR copy to tenant within 28 days, action on C1/C2/FI within 28 days or sooner if specified). Comparable but separate regimes exist in Scotland and Wales."
          },
          {
            number: 11,
            prompt:
              "Periodic inspection and testing is best described as:",
            options: {
              A: "A guarantee that no fault will occur before the next inspection",
              B: "A proactive replacement of every component approaching end-of-life",
              C: "A snapshot in time — it gives a defensible view of the installation's condition on the day of inspection but does not guarantee future performance",
              D: "A purely paperwork exercise"
            },
            answer: "C",
            explanation:
              "PIT is a condition assessment at a moment in time. The interval is risk-based precisely because faults can develop between inspections — and the duty holder remains responsible for in-service safety throughout, not only at inspection time."
          },
          {
            number: 12,
            prompt:
              "The output document of a periodic inspection of an existing installation is:",
            options: {
              A: "An EIC",
              B: "A MEIWC (Minor Works Certificate)",
              C: "An EICR (Electrical Installation Condition Report) with a Schedule of Inspections and a Schedule of Test Results",
              D: "A Domestic Visual Condition Report"
            },
            answer: "C",
            explanation:
              "The EICR is the report on existing work; the EIC and MEIWC are certificates issued for new work and minor additions/alterations respectively. The EICR is supported by the Schedule of Inspections (what was looked at) and the Schedule of Test Results (what was measured)."
          }
        ]
      }
    ],
    scoring: [
      { minScore: 11, range: "11–12", label: "Strong — periodic-inspection ready" },
      { minScore: 9, range: "9–10", label: "Comfortable pass" },
      { minScore: 7, range: "7–8", label: "Re-read GN3 chapter on intervals and sampling" },
      { minScore: 0, range: "< 7", label: "Re-watch the periodic inspection webinar" }
    ],
    priorities: [
      "Recommended maximum intervals — domestic owner-occupied 10 years, PRS 5 years, commercial 5 years, industrial 3 years, high-risk (pools, petrol, theatres) 1 year.",
      "Sampling logic — agreed in writing, recorded as extent/limitations, sample size grows when defects are found.",
      "The legal drivers — EAWR 1989 + HSWA in workplaces, ESS PRS Regulations 2020 in English rented homes — and the difference between guidance intervals and statutory intervals."
    ]
  },
  {
    id: "condition-reporting",
    title: "Condition Reporting (EICR) — Topic Mock",
    subtitle: "Webinar 7 — classifying and recording condition",
    description:
      "A focused topic mock built around Webinar 7 — Condition Reporting. Covers the EICR document set, the C1 / C2 / C3 / FI classification codes, what makes a report Satisfactory or Unsatisfactory, the inspector's on-site obligations when danger is found, and the landlord/duty-holder duties under the ESS PRS Regulations 2020.",
    format: "12 multiple-choice questions. Aim for 9+/12 (75%).",
    passMark: 9,
    sections: [
      {
        id: "section-1",
        title: "Section 1 — Forms & Documents",
        questions: [
          {
            number: 1,
            prompt: "EICR stands for:",
            options: {
              A: "Electrical Installation Compliance Record",
              B: "Electrical Installation Condition Report",
              C: "Electrical Inspection & Calibration Report",
              D: "Electricians' Industry Conformance Record"
            },
            answer: "B",
            explanation:
              "Electrical Installation Condition Report — the standard BS 7671 model form for reporting on the condition of an existing installation. \"Condition\" rather than \"compliance\" because installations are assessed against the edition of BS 7671 in force when they were built, not retrospectively against the current edition."
          },
          {
            number: 2,
            prompt:
              "A complete EICR submission to the client comprises:",
            options: {
              A: "The EICR alone",
              B: "The EICR plus a Schedule of Inspections and a Schedule of Test Results",
              C: "Just the test results",
              D: "An EIC and a Minor Works Certificate"
            },
            answer: "B",
            explanation:
              "The EICR is the headline document; the Schedule of Inspections records what was visually checked, and the Schedule of Test Results records the numerical readings. All three together form the report — without the schedules the EICR is incomplete."
          },
          {
            number: 3,
            prompt:
              "An Electrical Installation Certificate (EIC) is issued for:",
            options: {
              A: "Existing installations being condition-assessed",
              B: "New installations, additions and alterations that introduce a new circuit",
              C: "Periodic inspections only",
              D: "PAT testing"
            },
            answer: "B",
            explanation:
              "EIC = new work. EICR = condition of existing work. The Minor Electrical Installation Works Certificate (MEIWC) is the equivalent of an EIC for additions/alterations not introducing a new circuit (e.g. an extra socket on a ring final)."
          },
          {
            number: 4,
            prompt:
              "Before commencing an EICR, the inspector must agree what with the client?",
            options: {
              A: "The colour of the report's cover",
              B: "The extent of the installation to be inspected and any limitations on access or testing — preferably in writing",
              C: "The names of any future tenants",
              D: "Nothing — the inspector decides"
            },
            answer: "B",
            explanation:
              "Extent and limitations must be agreed up-front and recorded on the report. Without this, both inspector and client are exposed: the inspector could be held responsible for areas they were never given access to, and the client may have a false sense of coverage."
          }
        ]
      },
      {
        id: "section-2",
        title: "Section 2 — EICR Codes",
        questions: [
          {
            number: 5,
            prompt: "Code C1 on an EICR observation means:",
            options: {
              A: "Improvement recommended",
              B: "Danger present — risk of injury; immediate remedial action required",
              C: "Potentially dangerous — urgent remedial action required",
              D: "Further investigation required"
            },
            answer: "B",
            explanation:
              "C1 is the most serious — danger is present now (e.g. exposed live conductors at an accessible accessory). The inspector should make safe before leaving site (often by isolation), inform the duty holder immediately, and any C1 automatically renders the EICR Unsatisfactory."
          },
          {
            number: 6,
            prompt: "Code C2 on an EICR observation means:",
            options: {
              A: "Danger is present right now",
              B: "Potentially dangerous — urgent remedial action required",
              C: "Improvement recommended",
              D: "No action required"
            },
            answer: "B",
            explanation:
              "C2 is a fault that is not dangerous as it sits but is likely to become dangerous if circumstances change — for example, supplementary bonding missing in a bathroom where the four conditions of Reg 701.415.2 cannot be met. C2 makes the EICR Unsatisfactory and must be remedied promptly."
          },
          {
            number: 7,
            prompt: "Code C3 on an EICR observation means:",
            options: {
              A: "Improvement recommended — it does not by itself render the report Unsatisfactory",
              B: "Danger present at the point of inspection, requiring the affected circuit to be made safe before the inspector leaves site",
              C: "Further investigation required because the inspector could not fully diagnose the observation during the visit",
              D: "Class 3 departure from the regulations, requiring written derogation by the original designer to remain in service"
            },
            answer: "A",
            explanation:
              "C3 is the \"would be better if\" code — non-compliance with the current edition that does not present an actual danger. A C3 alone does not make the report Unsatisfactory, but a recurring pattern of C3s tells the duty holder where to focus future investment."
          },
          {
            number: 8,
            prompt: "FI (Further Investigation) on an EICR observation means:",
            options: {
              A: "Further inspection deferred to the next periodic visit, with the item recorded but not investigated on this visit",
              B: "Further investigation required without delay because the inspector found something they could not fully diagnose during the inspection (e.g. an unexplained low IR reading)",
              C: "Fault identified and made safe by the inspector before leaving site, with no further remedial action required",
              D: "Functional inspection completed satisfactorily, with the result recorded on the schedule of test results"
            },
            answer: "B",
            explanation:
              "FI is used when the scope of the inspection didn't permit a definitive call but the symptom suggests a possible defect requiring deeper investigation. Like C1 and C2, the presence of an FI renders the overall report Unsatisfactory — because the installation's condition is genuinely unknown at that point."
          }
        ]
      },
      {
        id: "section-3",
        title: "Section 3 — Outcomes & Responsibilities",
        questions: [
          {
            number: 9,
            prompt:
              "The overall classification of an EICR is rendered Unsatisfactory by:",
            options: {
              A: "Any C3",
              B: "Any C1, C2 or FI observation",
              C: "Only a C1",
              D: "More than ten C3s"
            },
            answer: "B",
            explanation:
              "Any single C1, C2 or FI is enough to make the overall report Unsatisfactory. C3s on their own do not — though they should still drive remedial planning. The Unsatisfactory result is what triggers the landlord/duty-holder's obligation to act."
          },
          {
            number: 10,
            prompt:
              "If a C1 is identified on site during an EICR, the inspector should:",
            options: {
              A: "Note it on the report and leave site",
              B: "Make safe before leaving site (typically by isolation), notify the duty holder verbally and in writing, and record the action on the report",
              C: "Wait for the duty holder to call an electrician",
              D: "Switch off the entire installation regardless of impact"
            },
            answer: "B",
            explanation:
              "C1 = danger present now. Walking away leaves the inspector personally exposed and the public at risk. The standard response is to isolate the affected circuit, label it, notify the duty holder immediately and record exactly what was found and what action was taken."
          },
          {
            number: 11,
            prompt:
              "Under the ESS PRS Regulations 2020 (England), the landlord must provide the EICR to the existing tenant:",
            options: {
              A: "Within 7 days of the inspection",
              B: "Within 28 days of the inspection",
              C: "On request only",
              D: "Within 6 months"
            },
            answer: "B",
            explanation:
              "Within 28 days to existing tenants. To a new tenant, the EICR must be supplied before they move in. Where the report is Unsatisfactory, the landlord must complete the required remedial work — and obtain written confirmation from a qualified person — within 28 days of the inspection (or sooner if the report specifies)."
          },
          {
            number: 12,
            prompt:
              "An accessory (e.g. a socket-outlet) is found with the front plate broken away, exposing a live terminal accessible to a finger. The most appropriate code is:",
            options: {
              A: "C3 — improvement recommended",
              B: "C2 — potentially dangerous",
              C: "C1 — danger present",
              D: "FI — further investigation"
            },
            answer: "C",
            explanation:
              "Exposed accessible live parts are the textbook C1 — basic protection has failed and a finger or metal object can reach a live conductor. Make safe by isolating the circuit, label it, and the report is Unsatisfactory. C2 would apply if the live part were not directly accessible but a single foreseeable event could expose it."
          }
        ]
      }
    ],
    scoring: [
      { minScore: 11, range: "11–12", label: "Strong — confident with EICR coding" },
      { minScore: 9, range: "9–10", label: "Comfortable pass" },
      { minScore: 7, range: "7–8", label: "Re-read the C1/C2/C3/FI definitions and Best-Practice Guide 4 from Electrical Safety First" },
      { minScore: 0, range: "< 7", label: "Re-watch the condition reporting webinar" }
    ],
    priorities: [
      "C1 / C2 / C3 / FI — be able to recite each definition exactly, and to apply them to real-world observations.",
      "Unsatisfactory triggers — any C1, C2 or FI; C3 alone is not Unsatisfactory.",
      "On-site response to a C1 — make safe, notify duty holder, record. Walking away from a known C1 is a personal-liability risk for the inspector."
    ]
  }
];

export function countQuestions(exam: Exam): number {
  return exam.sections.reduce((sum, section) => sum + section.questions.length, 0);
}

export function getScoringBand(exam: Exam, correctCount: number) {
  return exam.scoring.find((band) => correctCount >= band.minScore) ?? exam.scoring[exam.scoring.length - 1];
}
