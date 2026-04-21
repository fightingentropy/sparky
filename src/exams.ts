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
  }
];

export function countQuestions(exam: Exam): number {
  return exam.sections.reduce((sum, section) => sum + section.questions.length, 0);
}
