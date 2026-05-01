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
    id: "basic-electrics",
    title: "Basic Electrics",
    subtitle: "Webinar 1 — fundamentals",
    description:
      "A focused exam built around Webinar 1 — Introduction to Basic Electrics. Covers voltage, current, resistance, power, Ohm's law, the power law, AC vs DC, single- and three-phase basics, and the conductor behaviour you'll rely on throughout the rest of the course.",
    format: "17 multiple-choice questions. Aim for 13+/17 (75%) before moving on to regulations material.",
    passMark: 13,
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
      },
      {
        id: "section-4",
        title: "Section 4 — Consolidated Electrical Science",
        questions: [
          {
            number: 13,
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
            number: 14,
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
            number: 15,
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
            number: 16,
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
            number: 17,
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
      }
    ],
    scoring: [
      { minScore: 16, range: "16–17", label: "Strong — fundamentals secure" },
      { minScore: 13, range: "13–15", label: "Comfortable pass" },
      { minScore: 10, range: "10–12", label: "Some gaps — revisit Ohm's and the power law" },
      { minScore: 0, range: "< 10", label: "Re-watch the basic electrics webinar before moving on" }
    ],
    priorities: [
      "Ohm's law and the power law triangles — be able to rearrange V = IR and P = VI on demand without writing them down.",
      "230 V single-phase and 400 V three-phase line-to-line — these are the UK distribution voltages every later module assumes.",
      "Conductor resistance: proportional to length, inversely proportional to CSA, rising with temperature. Underpins both voltage drop and Zs work later in the course."
    ]
  },
  {
    id: "building-regulations",
    title: "Building Regulations & Part P",
    subtitle: "Combined topic drill + Access Training homework practice bank",
    description:
      "A focused exam built around Webinar 2 — Basic Electrics & Building Regulations, with the emphasis on the Building Regulations side. Covers Part P scope, notifiable work, the relevant Approved Documents, the routes to compliance for an electrician, and how BS 7671 sits inside the regulatory framework in England. Now combined with 20 questions from the Access Training Building Regulations homework — covering Approved Documents A, B, C, E, F, L, M and P, plus the practical install detail (notch & chase depths, gas/electricity spacing, EV charge-point provisions).",
    format: "32 multiple-choice questions. Aim for 22+/32 (70%+) to pass; 29+/32 (90%+) for a strong result.",
    passMark: 22,
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
      },
      {
        id: "section-1",
        title: "Section 1 — Building Regulations Practice Bank",
        questions: [
          {
            number: 13,
            prompt: "Heat detectors should be mounted",
            options: {
              A: "Directly above air conditioning outlets",
              B: "Between 25mm to 600mm below the ceiling",
              C: "Between 25mm to 150mm below the ceiling",
              D: "500mm from any walls"
            },
            answer: "C",
            explanation:
              "BS 5839-6: ceiling-mounted heat detectors must have the sensing element 25–150 mm below the ceiling so it sits in the rising layer of hot gases. Placing it directly under an AC outlet would cool the sensor; 500 mm below would put it below the heat layer."
          },
          {
            number: 14,
            prompt: "Approved Document Part E (Resistance to the passage of sound) requires",
            options: {
              A: "That chases must be used in separating walls",
              B: "Deep boxes to be used in separating walls",
              C: "Sockets to be staggered on opposite sides of a separating wall",
              D: "Sockets to be fitted back to back on a separating wall between a room and a corridor"
            },
            answer: "C",
            explanation:
              "Part E targets airborne sound transmission. Back-to-back accessory boxes punch a near-direct sound path through a separating wall, so Part E requires sockets to be staggered horizontally on opposite faces. Deep boxes and chases would worsen the problem, not help it."
          },
          {
            number: 15,
            prompt: "It is necessary to notify the relevant building control body before the work begins if the work is",
            options: {
              A: "Certified by a registered third party certifier",
              B: "Carried out and certified by a registered competent enterprise",
              C: "Carried out by an enterprise not registered with a CPS",
              D: "Non-notifiable"
            },
            answer: "C",
            explanation:
              "CPS members self-certify after the work, so prior notice is not needed. A non-CPS enterprise carrying out notifiable work must give the local authority Building Control prior notice (Building Notice or Full Plans) before starting. Non-notifiable work needs no notification at all."
          },
          {
            number: 16,
            prompt:
              "An EV charging point can be connected to a PME supply, as long as one of the four provisions of Regulation: 722.411.4.1 are met, or, what else?",
            options: {
              A: "25mm squared bonding conductor is connected to all extraneous conductive parts",
              B: "A Type F RCD is installed",
              C: "An isolation transformer is used",
              D: "A tethered lead EV chargepoint is installed"
            },
            answer: "C",
            explanation:
              "Reg 722.411.4.1 lists the open-PEN protection options for EV charge-points on PME. The alternative route is to provide isolation from the PME earthing arrangement — typically with a separating/isolating transformer or a dedicated TT earth electrode, so any open-PEN fault cannot be exported to the vehicle."
          },
          {
            number: 17,
            prompt: "Approved documents L1A and L1B do not give guidance on the installation of",
            options: {
              A: "Domestic combined heat and power (microCHP)",
              B: "Solar photovoltaic panels",
              C: "Warm air systems",
              D: "Underfloor heating"
            },
            answer: "B",
            explanation:
              "Part L1A/L1B (Conservation of Fuel and Power) covers fixed building services like heating, hot water, ventilation and lighting. Solar PV electrical installation is covered by BS 7671 Section 712 and the MCS standards rather than Part L itself — Part L only counts PV as a contribution to the dwelling's energy efficiency calculation."
          },
          {
            number: 18,
            prompt:
              "The statement is a requirement of which Approved Document? The building shall be designed and constructed so that there are appropriate provisions for the early warning of fire?",
            options: {
              A: "Approved Document Part M",
              B: "Approved Document Part A",
              C: "Approved Document Part B",
              D: "Approved Document Part F"
            },
            answer: "C",
            explanation:
              "Part B is fire safety. B1 specifically requires means of warning and escape — the statutory requirement underpinning smoke-alarm provision in dwellings (Volume 1) and fire alarm systems in non-dwellings (Volume 2). Part A is structure, M is access, F is ventilation."
          },
          {
            number: 19,
            prompt: "Which of these is not a requirement of Regulation 7 of the Building Regulations?",
            options: {
              A: "Building work shall be carried out in a workmanlike manner",
              B: "Building work shall be carried out by registered competent persons only",
              C: "Building work shall be carried out with adequate and proper materials",
              D: "Materials used in building work are applied, used or fixed so as to adequately perform the functions for which they are designed."
            },
            answer: "B",
            explanation:
              "Reg 7 covers materials and workmanship: workmanlike manner, adequate and proper materials, materials applied properly. Competent Person Schemes are about Part P notification, not Reg 7 — there is no requirement that all building work be done by registered persons."
          },
          {
            number: 20,
            prompt: "What is the minimum intermittent extract fan ventilation rate in a kitchen adjacent to a hob?",
            options: {
              A: "6 litres/ second",
              B: "30 litres/ second",
              C: "60 litres/ second",
              D: "15 litres/ second"
            },
            answer: "C",
            explanation:
              "Part F Table 5.1a — intermittent extract: 30 L/s if the fan is over the hob (cooker hood), 60 L/s elsewhere in the kitchen. A fan adjacent to (not over) the hob falls in the 60 L/s category."
          },
          {
            number: 21,
            prompt: "Which approved document requires sufficient means for giving early warning of fire?",
            options: {
              A: "F",
              B: "B",
              C: "E",
              D: "L"
            },
            answer: "B",
            explanation:
              "Part B — Fire safety. B1 is the means of warning and escape requirement. F is ventilation, E is sound, L is energy efficiency."
          },
          {
            number: 22,
            prompt: "Which of these is non-notifiable work under Part P?",
            options: {
              A: "New central heating system circuit",
              B: "Installing a new outdoor lighting circuit in a garden",
              C: "Work to connect an electric gate to an existing isolator",
              D: "Installing an extractor fan 300mm from the edge of a bath at a height of 2m."
            },
            answer: "C",
            explanation:
              "Since 2013 only two categories are notifiable: a new circuit, or a consumer unit replacement. Connecting an electric gate to an existing isolator is an addition to an existing circuit, so it is non-notifiable. Both the new central heating circuit and the new outdoor lighting circuit are new circuits and therefore notifiable."
          },
          {
            number: 23,
            prompt: "Part P does not apply to electrical installations",
            options: {
              A: "In outbuildings such as a detached garage",
              B: "Outside a dwelling such as a pond pump in a garden",
              C: "In the common access areas of blocks of flats such as corridors",
              D: "In business premises in the same building as a dwelling with separate metering"
            },
            answer: "C",
            explanation:
              "Part P applies to dwellings and to outbuildings/gardens that are part of a dwelling — so a detached garage and a pond pump are in scope. Common access areas of blocks of flats and separately-metered business premises are explicitly excluded; common parts come under other Approved Documents (B, M etc.)."
          },
          {
            number: 24,
            prompt:
              "In order to comply with the requirements of Approved Document Part C, persons carrying out electrical work in new buildings should",
            options: {
              A: "Provide fixed building services which are energy efficient",
              B: "Fit background ventilators with intermittent extract fans",
              C: "Seal cable entries to prevent the ingress of gas or water",
              D: "Install switches at a height of between 450mm and 1200mm from the finished floor level"
            },
            answer: "C",
            explanation:
              "Part C is site preparation and resistance to contaminants and moisture. The electrical implication is that any cable penetration through the external envelope (or a ground-floor slab) must be sealed against gas (radon, methane) and water ingress. Energy efficiency is L, ventilation is F, switch heights are M."
          },
          {
            number: 25,
            prompt: "Which of these is notifiable under Part P?",
            options: {
              A: "The installation of a kitchen lighting system using a CE marked prefabricated, modular system linked by plug and socket connectors",
              B: "New outdoor lighting circuit that involves crossing the garden",
              C: "Electrical maintenance on equipment 700mm from Zone 1 in a bathroom",
              D: "Electrical installation work in a shed that does not involve new outdoor wiring"
            },
            answer: "B",
            explanation:
              "A new outdoor lighting circuit is a new circuit — notifiable. CE-marked prefabricated systems with plug-and-socket connectors are treated as accessories rather than a new circuit. Maintenance is non-notifiable. Work confined to an existing shed circuit is non-notifiable."
          },
          {
            number: 26,
            prompt: "The maximum depth of a notch in a wooden joist should be",
            options: {
              A: "0.25 x joist depth",
              B: "Between 0.25 and 0.4 x span",
              C: "Between 0.07 and 0.25 x span",
              D: "A maximum of 0.125 x joint depth"
            },
            answer: "D",
            explanation:
              "Approved Document A: notches in joists must not exceed 0.125 × the joist depth, and only in the top edge between 0.07 and 0.25 of the span from the support. Drilled holes have separate limits (max 0.25 × depth on the neutral axis)."
          },
          {
            number: 27,
            prompt:
              "Electrical testing should be carried out in the correct sequence. Which of the following is classed as the first live test?",
            options: {
              A: "Continuity of protective conductors",
              B: "Supply polarity",
              C: "Insulation resistance",
              D: "Continuity of ring final circuit conductors"
            },
            answer: "B",
            explanation:
              "Continuity, IR and ring continuity are all dead tests. The live test sequence per BS 7671 / GN3 starts with confirming polarity at the origin, then earth electrode resistance (TT), then earth fault loop impedance Ze/Zs, PFC, phase rotation, RCDs, functional."
          },
          {
            number: 28,
            prompt: "Vertical chases must",
            options: {
              A: "Be at least 50mm deep",
              B: "Not be deeper than one sixth of the wall thickness",
              C: "Not be deeper than one third of the wall thickness",
              D: "Be at least 50mm from the top or bottom of a joist"
            },
            answer: "C",
            explanation:
              "Approved Document A and BS EN 1996-2: vertical chases must not exceed 1/3 of the wall thickness; horizontal chases must not exceed 1/6. Deeper chases compromise the structural strength of the masonry."
          },
          {
            number: 29,
            prompt: "What is the minimum spacing for gas installation pipework from an electricity meter?",
            options: {
              A: "300mm",
              B: "25mm",
              C: "500mm",
              D: "150mm"
            },
            answer: "D",
            explanation:
              "BS 6891 / IGE/G/1: minimum 150 mm horizontal separation between gas pipework and electricity meters, consumer units or other electrical equipment. Where they cross, 25 mm separation with insulation is acceptable but 150 mm is the headline figure most often examined."
          },
          {
            number: 30,
            prompt:
              "A way of satisfying the requirements of approved document M is to install switches at a height",
            options: {
              A: "Between 1350mm and 1450mm above floor level",
              B: "Between 25mm and 600mm below the ceiling",
              C: "Below 450mm?",
              D: "Between 450mm and 1200mm from the finished floor level"
            },
            answer: "D",
            explanation:
              "Part M Volume 1 (dwellings): switches, sockets and other accessories that need regular operation must be 450 mm to 1200 mm from the finished floor level so they are reachable from a wheelchair. This is for new dwellings; existing dwellings have no retrospective duty."
          },
          {
            number: 31,
            prompt:
              "Which of these cable installation methods has the highest maximum current carrying capacity (Iz)?",
            options: {
              A: "100",
              B: "A",
              C: "103",
              D: "C"
            },
            answer: "D",
            explanation:
              "BS 7671 Reference Method C — clipped direct on a wall or ceiling — gives the highest Iz of the listed methods because the cable can dissipate heat freely. Methods A (in conduit in an insulated wall) and 100/103 (in masonry / fully in insulation) all derate the cable."
          },
          {
            number: 32,
            prompt:
              "What is the minimum conductor cross sectional area for a radial circuit in a household protected by a 32A overcurrent device?",
            options: {
              A: "1.5mm Squared",
              B: "0.75mm Squared",
              C: "4.0mm Squared",
              D: "2.5mm Squared"
            },
            answer: "C",
            explanation:
              "OSG Table 7.1 — a 32 A radial socket-outlet circuit needs 4 mm² live conductors (typically with 1.5 mm² CPC in T+E) on the standard reference methods. 2.5 mm² T+E only carries up to 27 A in many install methods, so it cannot be protected by a 32 A device."
          }
        ]
      }
    ],
    scoring: [
      { minScore: 29, range: "29–32", label: "Strong — homework standard" },
      { minScore: 22, range: "22–28", label: "Comfortable pass" },
      { minScore: 16, range: "16–21", label: "Re-read the relevant theory before re-attempting" },
      { minScore: 0, range: "< 16", label: "Re-watch the topic webinar before re-attempting" }
    ],
    priorities: [
      "The three notifiable categories under Part P — new circuit, consumer unit, special location — these are the only ones that trigger notification.",
      "The three routes to compliance — CPS self-cert, Building Notice, third-party certifier — and which is realistic for your day-to-day work.",
      "Approved Document letters: A (structure), B (fire), F (ventilation), L (energy), P (electrical) — be able to identify each from a one-line description.",
      "Notch and chase limits: notch ≤ 0.125 × joist depth; vertical chase ≤ 1/3 wall thickness, horizontal ≤ 1/6.",
      "150 mm gas/electricity spacing — both BS 6891 (gas) and IET guidance call this out."
    ]
  },
  {
    id: "18th-edition",
    title: "18th Edition (BS 7671)",
    subtitle: "Combined topic drill + Access Training homework practice bank",
    description:
      "A focused exam built around Webinar 3 — 18th Edition of the Wiring Regulations. Drills the structure of BS 7671:2018 + A2:2022 + A3:2024, the key part numbers, the major tables electricians look up daily, and the headline provisions introduced or revised by the recent amendments (AFDDs, SPDs, EV charging). Now combined with 56 questions from the Access Training 18th Edition Amendment 2 homework: AFDDs, SPDs, EV charging on PME, prosumer installations, special locations, RCD types, disconnection times and the recent amendment provisions.",
    format: "80 multiple-choice questions. Aim for 56+/80 (70%+) to pass; 72+/80 (90%+) for a strong result.",
    passMark: 56,
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
      },
      {
        id: "section-1",
        title: "Section 1 — 18th Edition Practice Bank",
        questions: [
          {
            number: 13,
            prompt: "Which of the following is not part of the schedule of inspections for an initial verification?",
            options: { A: "Additional protection", B: "RCD type", C: "Distribution equipment", D: "Basic protection" },
            answer: "B",
            explanation: "The Schedule of Inspections checks the methods of protection (basic, fault, additional) and that distribution equipment, identification, and bonding are correct. The specific RCD TYPE (AC/A/F/B) is recorded on the Schedule of Test Results, not on the Schedule of Inspections."
          },
          {
            number: 14,
            prompt: "When provided, where must an AFDD be installed?",
            options: {
              A: "At equipment which is likely to cause operation of an AFDD",
              B: "At the origin of an installation",
              C: "At the origin of the final circuit being protected",
              D: "Between the meter and consumer unit main switch"
            },
            answer: "C",
            explanation: "BS 7671 532.6 / 421.1.7 — AFDDs are installed at the origin of the final circuit so they protect the entire downstream cabling and accessories. Installing at the origin of the installation gives no per-circuit selectivity."
          },
          {
            number: 15,
            prompt: "Storage batteries are used as an alternative electrical source for what?",
            options: { A: "High frequency oscillations", B: "Safety services", C: "Maintainability", D: "Undervoltage" },
            answer: "B",
            explanation: "Section 560 — safety services (emergency lighting, fire alarm panels, smoke control) need an independent source so they keep working when the mains fails. Battery banks (or generators) are the standard alternative source."
          },
          {
            number: 16,
            prompt: "Low voltage generating sets are considered to be what?",
            options: {
              A: "Within the scope of BS 7671",
              B: "Outside the scope of BS 7671",
              C: "Not included in BS 7671",
              D: "Excluded from the scope of BS 7671"
            },
            answer: "A",
            explanation: "Section 551 specifically covers LV generating sets — they are within the scope of BS 7671. The Regulations cover both the connection back to the installation and the protective measures for parallel operation with the public supply."
          },
          {
            number: 17,
            prompt: "When island mode is in use, what must be used to prevent incorrect operation of an RCD, and not overlap with switching to the DNO neutral?",
            options: {
              A: "Single pole RCD",
              B: "Neutral switch device",
              C: "Double pole 60947-3 isolator",
              D: "Functional switching of the DNO neutral"
            },
            answer: "B",
            explanation: "Section 551 / 826 (Prosumer installations under A2:2022) — when an inverter feeds the installation in island mode it must disconnect the DNO neutral with a neutral switching device to prevent the local generator paralleling onto the DNO supply via the neutral."
          },
          {
            number: 18,
            prompt: "In order for an enclosure to be adequate for basic protection, the minimum IP rating of an insulating enclosure shall be at least?",
            options: { A: "IP2X", B: "IPXXD", C: "IP4X", D: "IPX2" },
            answer: "A",
            explanation: "Reg 416.2.2: vertical surfaces require IP2X or IPXXB minimum (jointed test finger). Horizontal upper surfaces require IP4X or IPXXD (1 mm wire). The basic figure cited in the question is the IP2X minimum."
          },
          {
            number: 19,
            prompt: "What is the max measured Zs for a 32A BS88-3 system C fuse protecting a distribution circuit?",
            options: { A: "0.728 ohms", B: "1.6 ohms", C: "0.91 ohms", D: "1.28 ohms" },
            answer: "D",
            explanation: "Distribution circuits use 5 s disconnection time. From BS 7671 Table 41.4 for BS 88-3 32 A at 5 s: tabulated Zs = 1.6 Ω. GN3 max measured = 0.8 × 1.6 = 1.28 Ω (the 80% rule for warm conductors)."
          },
          {
            number: 20,
            prompt: "Which of the following SPD type can be installed at the origin of an installation?",
            options: { A: "Type 5", B: "Type 4", C: "Type 1", D: "Type 3" },
            answer: "C",
            explanation: "Type 1 SPDs handle the 10/350 µs lightning current waveform — installed at the origin where there is risk of direct or partial direct lightning strike. Type 2 handles induced surges; Type 3 sits at the equipment end. Types 4 and 5 don't exist."
          },
          {
            number: 21,
            prompt: "Sufficient space for the initial installation and later replacement of individual items of electrical equipment is considered as?",
            options: {
              A: "Prevention of mutual detrimental influence",
              B: "Prevention of harmful effects",
              C: "Accessibility of electrical equipment",
              D: "Additions and alterations to an installation"
            },
            answer: "C",
            explanation: "Section 132 / 513 — the requirement to provide enough access space for installation, inspection, testing, maintenance and replacement is the 'accessibility' requirement. Cramming a CU into a 200 mm cupboard fails this rule."
          },
          {
            number: 22,
            prompt: "Which of the following shall be considered when determining the frequency of periodic inspection and testing?",
            options: {
              A: "The frequency of any maintenance carried out",
              B: "Age of the building fabric",
              C: "How many occupants within the installation",
              D: "The size of the installation"
            },
            answer: "A",
            explanation: "Reg 651 — the frequency of periodic I&T considers the type of installation, its use & operation, frequency and quality of maintenance, and external influences. Building fabric age and occupant count aren't drivers in their own right."
          },
          {
            number: 23,
            prompt: "If the protective conductor is of the same material as the 35mm² line conductor of a circuit, what minimum CSA must it be?",
            options: { A: "6mm²", B: "16mm²", C: "35mm²", D: "10mm²" },
            answer: "B",
            explanation: "BS 7671 Table 54.7: for line conductors > 35 mm² the PE may be S/2 (= 17.5, rounded down to 16 mm²) of same material. The other rule (S ≤ 16 → CPC = S) doesn't apply at 35 mm²."
          },
          {
            number: 24,
            prompt: "An EV installation connected to a TNCS earthing arrangement cannot have the PME used as a means of earthing unless?",
            options: {
              A: "The MET is connected to an earth electrode by a protective conductor",
              B: "Under no circumstances can the PME be exported",
              C: "It's part of a 3 phase installation",
              D: "It's protected by a Type A RCD"
            },
            answer: "A",
            explanation: "Reg 722.411.4.1 — to use PME for an EV charge-point you must either fit an open-PEN device, or provide a local earth electrode at the installation, or use a separating transformer. The electrode option breaks the dependence on the DNO neutral."
          },
          {
            number: 25,
            prompt: "Preventing a current resulting from a fault passing through the body of any person or any livestock, is a form of what?",
            options: {
              A: "Protection against voltage disturbances",
              B: "Protection against thermal effects",
              C: "Fault protection",
              D: "Protection against overcurrent"
            },
            answer: "C",
            explanation: "Fault protection (formerly 'protection against indirect contact') is the duty to prevent dangerous touch voltages on exposed parts caused by an insulation fault — typically achieved by ADS, Class II, or electrical separation."
          },
          {
            number: 26,
            prompt: "In order to avoid the use of an RCD for additional protection for a cable buried 35mm in a wall in safe zones, what can be used?",
            options: {
              A: "Additional protection must be installed",
              B: "Thermosetting insulated and sheathed cable",
              C: "Earthed conduit containing the cable",
              D: "Supplementary bonding"
            },
            answer: "C",
            explanation: "Reg 522.6.202 — the alternatives to a 30 mA RCD for cables < 50 mm in walls in safe zones are: earthed metallic conduit/ducting, mechanical protection, or use of cables with an earthed metal sheath. Just 'thermosetting' cable doesn't change the requirement."
          },
          {
            number: 27,
            prompt: "When shall overcurrent detection be provided for a neutral conductor?",
            options: {
              A: "If the circuit is protected by a BS3036 fuse",
              B: "In an IT system",
              C: "Never",
              D: "In the presence of harmonic currents"
            },
            answer: "D",
            explanation: "Reg 431.2.3 — neutral overcurrent detection is required where harmonic currents (especially 3rd harmonic in 3-phase 4-wire) can drive significant circulating current in the neutral, even when the lines look balanced."
          },
          {
            number: 28,
            prompt: "What is the suggested font size for a general use periodic inspection due date label?",
            options: { A: "18pt", B: "16pt", C: "10pt", D: "14pt" },
            answer: "D",
            explanation: "BS 7671 (with A3) suggests a 14pt minimum for the periodic inspection due-date notice on consumer units so it remains legible without access to the cupboard. Earlier editions did not specify a font size."
          },
          {
            number: 29,
            prompt: "A switch which does not necessarily isolate all live conductors is called what?",
            options: {
              A: "Switching for mechanical maintenance",
              B: "Emergency switching",
              C: "Functional switching",
              D: "Isolation"
            },
            answer: "C",
            explanation: "Section 537 — functional switching only controls a circuit in normal operation; it does not have to disconnect every live conductor (a single-pole light switch is the classic example). Isolation requires all live conductors disconnected."
          },
          {
            number: 30,
            prompt: "Electrical equipment in a marina in a seashore location shall be no less than",
            options: { A: "IPX3", B: "IPX4", C: "IPX6", D: "IPX5" },
            answer: "C",
            explanation: "Section 709 (Marinas) requires IPX6 (powerful jets / heavy seas) for equipment in seashore locations to withstand wave action and storm spray. Inland marinas use lower IP."
          },
          {
            number: 31,
            prompt: "A 20A 400V 3-phase motor circuit, connected to a TN system has a maximum disconnection time of?  ",
            options: { A: "0.2s", B: "5s", C: "0.4s", D: "0.1s" },
            answer: "A",
            explanation: "Table 41.1 — TN system, final circuit at U₀ > 230 V: max disconnection time 0.2 s. (At 230 V the limit is 0.4 s; distribution circuits get 5 s.)"
          },
          {
            number: 32,
            prompt: "Which conductor joins an exposed conductive part to the MET?",
            options: {
              A: "Circuit protective conductor",
              B: "Main protective bonding conductor",
              C: "Earthing conductor",
              D: "Supplementary bonding conductor"
            },
            answer: "A",
            explanation: "CPC: from the exposed conductive part of accessories/equipment back to the MET via the distribution board. Main bonding goes from MET to extraneous parts. Earthing conductor is MET to the means of earthing."
          },
          {
            number: 33,
            prompt: "Which RCD will trip on alternating sinusoidal residual current and on residual pulsating direct current, suddenly applied or smoothly increasing only?",
            options: { A: "Type A", B: "Type A.C", C: "Type F", D: "Type B" },
            answer: "A",
            explanation: "Type A: AC sinusoidal + pulsating DC. Type AC: AC sinusoidal only. Type F: Type A + composite multi-frequency. Type B: all of the above + smooth DC. Type A is now the minimum default for general use."
          },
          {
            number: 34,
            prompt: "When can overload protection not be omitted?",
            options: {
              A: "The exciter circuit of a rotating machine",
              B: "For the supply of a lifting magnet",
              C: "For the supply of a circuit supplying a fire extinguishing device",
              D: "Polyphase motor circuit"
            },
            answer: "D",
            explanation: "Reg 433.3 lists where overload protection MAY be omitted (exciter circuits, lifting magnets, safety circuits like fire suppression). Polyphase motor circuits are not on that list and must always have overload protection."
          },
          {
            number: 35,
            prompt: "The term PEI is defined as?",
            options: {
              A: "Prosumers Electrical Installation",
              B: "Protective Earthing Installation",
              C: "Prosumers Earthing Installation",
              D: "Protective Electrical Installation"
            },
            answer: "A",
            explanation: "PEI = Prosumer Electrical Installation — introduced in Section 826 by A2:2022 to cover dwellings that both consume and produce electricity (PV + battery + EV charger combinations)."
          },
          {
            number: 36,
            prompt: "A standard socket outlet can be installed within a room containing a bath or shower as long as?",
            options: {
              A: "It's no less than 2.5m from the boundary of zone 1",
              B: "It's within the boundary of zone 2",
              C: "Under no circumstance can one be installed",
              D: "It's no less than 3m from the boundary of zone 1"
            },
            answer: "D",
            explanation: "Section 701 — a standard socket outlet may be installed in a bath/shower room provided it is no closer than 3 m horizontally from the boundary of Zone 1. Within 3 m, only SELV or shaver-supply sockets are permitted."
          },
          {
            number: 37,
            prompt: "Electric shock protection is not achieved by which of the following?",
            options: {
              A: "Class 2 equipment",
              B: "Coordination between conductor and overload protective devices",
              C: "SELV",
              D: "Automatic disconnection of supply"
            },
            answer: "B",
            explanation: "Conductor / overload protective device coordination (Reg 433) is overload protection — it prevents the cable overheating, not shock. The other three are recognised protective measures against electric shock in Section 410/411/414."
          },
          {
            number: 38,
            prompt: "A method of protection against electric shock using basic protection, ascertained during initial verification is which of the following?",
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
            number: 39,
            prompt: "Lightning strikes shall not be protected against where which of the following is present?",
            options: {
              A: "Significant financial or data loss",
              B: "Disruption to household installations",
              C: "Failure of a safety service",
              D: "Serious injury to, or loss of human life"
            },
            answer: "B",
            explanation: "Reg 443.4 — protection against transient overvoltages of atmospheric origin must be provided where consequence includes serious injury, loss of human life, failure of safety service, or significant financial loss. Mere disruption to household equipment doesn't trigger the requirement."
          },
          {
            number: 40,
            prompt: "During the refurbishment of a house, the site, whilst under construction has a socket outlet with a rated current of 16A (commando socket), what must be the manufacturing standard of this outlet?",
            options: { A: "BS EN 60309-2", B: "BS EN 61439-4", C: "BS EN 60309-1", D: "BS EN 50525-2-21" },
            answer: "A",
            explanation: "BS EN 60309-2 covers the dimensional / interchangeability requirements of industrial round-pin commando sockets. 60309-1 is the general standard; 61439-4 covers assemblies for construction sites; 50525 is cable construction."
          },
          {
            number: 41,
            prompt: "In single phase, two wire circuits, the neutral conductor must?",
            options: {
              A: "Be either one size more or one size less than the line conductor",
              B: "Not be less than the CSA of the line conductor",
              C: "Be the same CSA as the line conductor",
              D: "Not be less than half the CSA of the line conductor"
            },
            answer: "C",
            explanation: "Reg 524 — for single-phase two-wire circuits, the neutral must be the same CSA as the line. The 'half-size neutral' rule applies only to balanced 3-phase circuits with line CSA > 16 mm² Cu / 25 mm² Al, and only with no significant harmonics."
          },
          {
            number: 42,
            prompt: "The preservation of continuity of a protective conductor shall be suitably protected against which of the following?",
            options: { A: "Earth faults", B: "Overload", C: "Overcurrent", D: "Chemical deterioration" },
            answer: "D",
            explanation: "Reg 543.3 — protective conductors must be protected against mechanical damage, chemical or electrochemical deterioration, electrodynamic and thermodynamic forces. Chemical deterioration matters because corroded joints become high-resistance and break the fault path."
          },
          {
            number: 43,
            prompt: "Which statutory regulation depicts that a PME earthing facility cannot be connected to any metalwork in a caravan?",
            options: {
              A: "Electricity Safety, Quality and Continuity Regulations",
              B: "Electricity at Work Regulations",
              C: "Electrical Safety Regulations",
              D: "Provision and Use of Work Equipment Regulations"
            },
            answer: "A",
            explanation: "ESQCR 2002 Reg 9 prohibits a DNO PME earth being used to earth a caravan, boat or similar mobile installation — these must be TT'd. EAWR is the work duty; PUWER covers work equipment generally."
          },
          {
            number: 44,
            prompt: "Which of the following installations does not require the installation of an AFDD?",
            options: {
              A: "Socket outlets in a care home",
              B: "Lighting circuit in a HMO",
              C: "Socket outlets in a HRRB",
              D: "Socket outlets in student accommodation"
            },
            answer: "B",
            explanation: "BS 7671 421.1.7 (A2:2022) — AFDDs are required for AC final circuits supplying SOCKET OUTLETS rated up to 32 A in higher-risk premises (HRRBs, HMOs, care homes, student accommodation, purpose-built student accommodation). Lighting circuits are not in scope."
          },
          {
            number: 45,
            prompt: "Which of the following voltages is not covered by BS 7671",
            options: { A: "230V A.C.", B: "1000V A.C.", C: "1500V D.C.", D: "1500V A.C." },
            answer: "D",
            explanation: "BS 7671 covers up to 1000 V a.c. or 1500 V d.c. between conductors. 1500 V a.c. exceeds the LV upper limit and is outside scope (governed by HV regulations and specific equipment standards)."
          },
          {
            number: 46,
            prompt: "In a swimming pool, the space located 2.6m directly above a springboard over the pool is classed as?",
            options: { A: "Zone 0", B: "Outside of zones", C: "Zone 2", D: "Zone 1" },
            answer: "B",
            explanation: "Section 702 — pool zones extend 2.5 m above the highest point that can be occupied (e.g. springboard surface). 2.6 m above the springboard is therefore above the 2.5 m zone limit, so outside any zone."
          },
          {
            number: 47,
            prompt: "Which is not considered during an assessment of compatibility for an installation?",
            options: { A: "DC Feedback", B: "Harmonic currents", C: "Transient overvoltages", D: "Use of monitoring devices" },
            answer: "D",
            explanation: "Reg 331.1 lists the compatibility considerations: transients, undervoltages, harmonics, DC feedback, leakage currents, etc. The use of monitoring devices is a design choice (Reg 538), not an item assessed against compatibility."
          },
          {
            number: 48,
            prompt: "The removal of an unexpected danger is classed as?",
            options: {
              A: "Isolation",
              B: "Switching for mechanical maintenance",
              C: "Functional switching",
              D: "Emergency switching"
            },
            answer: "D",
            explanation: "Section 537 — emergency switching is the rapid disconnection of supply to remove an unexpected danger. The button must be readily accessible and clearly marked. Isolation is for safe working; mechanical maintenance is for non-electrical work."
          },
          {
            number: 49,
            prompt: "Through wiring of a luminaire is not allowed?",
            options: {
              A: "Unless the wiring system is in conduit",
              B: "Under any circumstance",
              C: "Unless single core conductors are used",
              D: "Unless the luminaire is designed for it"
            },
            answer: "D",
            explanation: "Section 559 — through-wiring is only permitted where the luminaire is specifically designed for it (terminals rated for the conductor type and operating temperature). Otherwise the cable insulation may degrade against the hot luminaire body."
          },
          {
            number: 50,
            prompt: "An extra low voltage lighting installation suspended from a ceiling shall be capable of carrying not less than?",
            options: { A: "3kg", B: "5kg", C: "4kg", D: "6kg" },
            answer: "B",
            explanation: "Section 715 — suspension/track support systems for ELV lighting must be capable of carrying not less than 5 kg per metre of installation, providing a margin over the lightweight ELV fittings and conductor mass."
          },
          {
            number: 51,
            prompt: "A functional earthing conductor is identified by which colour?",
            options: { A: "Cream", B: "Green", C: "Pink", D: "Green and Yellow" },
            answer: "A",
            explanation: "Reg 514.4.5 — functional earthing conductors (clean earths for IT/instrumentation) are identified with cream insulation to distinguish them from green/yellow protective earthing. Mixing the two defeats the segregation."
          },
          {
            number: 52,
            prompt: "A distribution circuit supplying a garage, connected to a 230V A.C. TN system has a maximum disconnection time off?",
            options: { A: "0.2s", B: "0.4s", C: "5s", D: "1s" },
            answer: "C",
            explanation: "Table 41.1 — distribution circuits (and final circuits > 32 A) on TN system: maximum 5 s. Final circuits ≤ 32 A on 230 V TN: 0.4 s. The garage is fed via a sub-main/distribution circuit, not a final circuit."
          },
          {
            number: 53,
            prompt: "To prevent indirect energising of a circuit, what must be done?",
            options: {
              A: "Reduce starting currents",
              B: "Consider power factor",
              C: "Divide the installation",
              D: "Provide safety services"
            },
            answer: "C",
            explanation: "Reg 314 — divide the installation into circuits so that each can be isolated independently and a fault in one can't energise another via shared neutrals or links. This is the fundamental design step that prevents indirect energising."
          },
          {
            number: 54,
            prompt: "In order to provide automatic disconnection of supply, fault protection is required alongside what else?",
            options: {
              A: "Basic protection",
              B: "Overload protection",
              C: "Fire protection",
              D: "Bonding of extraneous conductive parts"
            },
            answer: "D",
            explanation: "ADS depends on protective equipotential bonding to reduce touch voltages between exposed parts and extraneous parts during a fault. The protective device disconnects, but bonding limits the touch voltage during the disconnection time."
          },
          {
            number: 55,
            prompt: "If alternative sources of supply are present, what must be applied and where?",
            options: {
              A: "A warning notice at all points of isolation",
              B: "A barrier at all points of isolation",
              C: "A warning notice on documentation provided",
              D: "No requirement needed"
            },
            answer: "A",
            explanation: "Reg 514.15 — where a generator, PV inverter or battery may energise the installation independently of the main supply, a warning notice must be at every point of isolation telling anyone working downstream that the supply may still be live."
          },
          {
            number: 56,
            prompt: "In a room containing a bath or shower, what sized RCD must be provided for all circuits serving or passing through zones 1 and or 2.",
            options: { A: "30mA", B: "300mA", C: "500mA", D: "100mA" },
            answer: "A",
            explanation: "Section 701 — all LV circuits in a bath/shower room (and any circuit passing through zones 1 or 2) require additional protection by 30 mA RCD. 100 / 300 / 500 mA RCDs are for fire and earth fault protection on distribution circuits."
          },
          {
            number: 57,
            prompt: "Diversity is sometimes applied when determining which of the following?",
            options: {
              A: "Exposure to external influences",
              B: "Compatibility of equipment",
              C: "Installation maintainability",
              D: "Maximum demand"
            },
            answer: "D",
            explanation: "Diversity is the engineering judgement that not every load runs at full power simultaneously — applied when calculating maximum demand for cable / device sizing. OSG Appendix A gives standard diversity factors for domestic loads."
          },
          {
            number: 58,
            prompt: "If an installation is reliant on all exposed conductive parts connected to an independent earth electrode, which type of installation is it?",
            options: { A: "TNC", B: "TNS", C: "TNCS", D: "TT" },
            answer: "D",
            explanation: "TT — installation has its own earth electrode independent of the supply source. TN systems all use the source earth (delivered separately in TN-S, combined-then-split in TN-C-S, or combined throughout in TN-C)."
          },
          {
            number: 59,
            prompt: "Separate neutral and protective conductors throughout an installation indicate what?",
            options: { A: "TNCS", B: "TNC", C: "TT", D: "TNS" },
            answer: "D",
            explanation: "TN-S = separate neutral and PE all the way back to the source. TN-C-S has them combined as PEN to the cut-out then split (PME). TN-C has them combined throughout (rare in dwellings). TT has no source PE."
          },
          {
            number: 60,
            prompt: "A conductor intended to be energised is called?",
            options: { A: "Live part", B: "Bonding conductor", C: "Insulation", D: "Main earthing terminal" },
            answer: "A",
            explanation: "BS 7671 Part 2 definition — a 'live part' is a conductor or conductive part intended to be energised in normal use, including a neutral conductor (but not a PEN conductor)."
          },
          {
            number: 61,
            prompt: "The disconnection time allowed for a 40A final circuit connected to a TN system is:",
            options: { A: "5s", B: "0.4s", C: "1s", D: "0.2s" },
            answer: "B",
            explanation: "Table 41.1 — TN system final circuits not exceeding 63 A with one or more socket outlets, or 32 A supplying only fixed connected current-using equipment, at 230 V: 0.4 s. A 40 A circuit falls in this category."
          },
          {
            number: 62,
            prompt: "What must not be used as a circuit protective conductor?",
            options: {
              A: "Metallic cable management system",
              B: "Exposed structural steel",
              C: "A conductor in a cable",
              D: "A single core conductor"
            },
            answer: "B",
            explanation: "Reg 543.2.6 — extraneous-conductive-parts may be used as a CPC under strict conditions (continuity, removability, identification). General exposed structural steel doesn't satisfy these conditions in normal practice; it must be bonded but not relied on as the CPC."
          },
          {
            number: 63,
            prompt: "Which person type can, with a risk assessment, have socket outlets installed where additional protection is omitted?",
            options: { A: "BA2", B: "BA3", C: "BA5", D: "BA1" },
            answer: "C",
            explanation: "BS 7671 Appendix 5 — BA codes: BA1 ordinary, BA2 children, BA3 disabled, BA4 instructed, BA5 skilled. Reg 411.3.3 lets the 30 mA RCD on socket outlets be omitted on a documented risk assessment for sockets used by BA5 skilled persons only."
          },
          {
            number: 64,
            prompt: "Semiconductor devices can be used as an isolating device unless?",
            options: {
              A: "It has adequate mechanical protection",
              B: "It forms part of an installation",
              C: "Under no circumstances can a semiconductor be used for this purpose",
              D: "It has adequate insulation"
            },
            answer: "C",
            explanation: "Reg 537.2.2 — isolation must achieve a contact gap or equivalent insulation between separated parts. Semiconductor devices (thyristors, IGBTs) cannot provide that physical separation; they're suitable for switching only."
          },
          {
            number: 65,
            prompt: "Which of the following cannot be used as a wiring system for a safety service?",
            options: {
              A: "PVC conduit",
              B: "Wiring system maintaining the necessary fire and mechanical protection",
              C: "Fire resistant cables",
              D: "Mineral insulated cable"
            },
            answer: "A",
            explanation: "Section 560 / Reg 560.8 — safety service wiring must maintain its function during a fire. PVC conduit melts and the cable inside loses support and insulation, so it can't be used. Mineral insulated and fire-resistant cables retain integrity."
          },
          {
            number: 66,
            prompt: "Who issues and who receives the documentation following an initial verification of rented accommodation?",
            options: {
              A: "The installer and the person who ordered the work",
              B: "The designer and the tenant",
              C: "Either the designer, installer or inspector and the person who ordered the work",
              D: "The landlord and the tenant"
            },
            answer: "C",
            explanation: "BS 7671 Chapter 64 — the EIC is signed by designer, constructor and inspector (one person can sign multiple boxes) and issued to the person who ordered the work. The original goes to the duty holder; the contractor keeps a copy."
          },
          {
            number: 67,
            prompt: "Where a wiring system such as conduit, cable ducting, cable trunking, busbar or busbar trunking passes through a building element that has specific fire resisting properties, what is the minimum internal cross-sectional area of space before internal sealing is required?",
            options: { A: "45mm²", B: "90mm²", C: "500mm²", D: "710mm²" },
            answer: "B",
            explanation: "Reg 527.2.4 — internal sealing of the wiring system is required where the internal cross-sectional area of the system exceeds 90 mm². Below that, the system itself is regarded as adequately self-sealing and only external fire stopping is needed."
          },
          {
            number: 68,
            prompt: "A building constructed mainly of combustible materials is classed as what?",
            options: { A: "CB2", B: "CA2", C: "CB1", D: "CA1" },
            answer: "B",
            explanation: "BS 7671 Appendix 5 — CA codes for construction material: CA1 = non-combustible; CA2 = combustible. CB codes are for building design (BD codes are evacuation difficulty). A timber-frame house is CA2."
          }
        ]
      },
      {
        id: "section-4",
        title: "Section 4 — Consolidated BS 7671 Application",
        questions: [
          {
            number: 69,
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
            number: 70,
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
            number: 71,
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
            number: 72,
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
            number: 73,
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
            number: 74,
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
          },
          {
            number: 75,
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
            number: 76,
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
            number: 77,
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
          },
          {
            number: 78,
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
            number: 79,
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
            number: 80,
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
      }
    ],
    scoring: [
      { minScore: 72, range: "72–80", label: "Strong — homework standard" },
      { minScore: 56, range: "56–71", label: "Comfortable pass" },
      { minScore: 40, range: "40–55", label: "Re-read the relevant theory before re-attempting" },
      { minScore: 0, range: "< 40", label: "Re-watch the topic webinar before re-attempting" }
    ],
    priorities: [
      "BS 7671:2018 + A2:2022 + A3:2024 — recognise which amendment introduced what (AFDDs in HRRBs/HMOs, prosumer Section 826, font sizes for labels).",
      "AFDDs (A2:2022) — required on socket outlet final circuits ≤ 32 A in HRRBs, HMOs, care homes and student accommodation; installed at the origin of the final circuit.",
      "Type A is the new minimum default RCD for general use; Type AC is no longer permitted for new installations except very specific cases.",
      "EV on PME (722.411.4.1): use an open-PEN protective device, a separating transformer, or a local earth electrode at the installation."
    ]
  },
  {
    id: "pat-testing",
    title: "PAT Testing (5th Edition COP)",
    subtitle: "Combined topic drill + Access Training homework practice bank",
    description:
      "A focused exam built around the PAT-testing portion of Webinar 4. Covers the IET Code of Practice for In-service Inspection and Testing of Electrical Equipment (5th edition), equipment classes, the formal visual / combined inspection-and-test, pass values, intervals, and the legal driver behind the work. Now combined with 35 questions from the Access Training PAT homework: equipment classification, test sequence and tolerances, instruments, leakage and load testing, legal framework and recordkeeping.",
    format: "47 multiple-choice questions. Aim for 33+/47 (70%+) to pass; 42+/47 (90%+) for a strong result.",
    passMark: 33,
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
      },
      {
        id: "section-1",
        title: "Section 1 — PAT Testing Practice Bank",
        questions: [
          {
            number: 13,
            prompt: "10 mA converted to amperes is",
            options: { A: ".0001 A", B: "0.01 A", C: "0.001 A", D: "0.1 A" },
            answer: "B",
            explanation: "10 mA = 10 × 10⁻³ A = 0.01 A. Drop the decimal three places."
          },
          {
            number: 14,
            prompt: "What is the expected protection conductor resistance of an appliance cable if it has a CSA of 0.75mm squared and is 1.5m long?",
            options: { A: "339 Ohms", B: "0.39 Ohms", C: "39 Ohms", D: "0.039 Ohms" },
            answer: "D",
            explanation: "Tabulated copper resistance for 0.75 mm² flex ≈ 26 mΩ/m at 20 °C. R = 26 × 1.5 ÷ 1000 ≈ 0.039 Ω. The other answers are out by factors of 10–10000."
          },
          {
            number: 15,
            prompt: "Which would not be carried out on Class II equipment?",
            options: { A: "Functional tests", B: "Protective conductor continuity test", C: "Insulation resistance test", D: "Polarity test" },
            answer: "B",
            explanation: "Class II equipment has no protective conductor (it relies on double or reinforced insulation), so there is nothing to test for PE continuity. IR, polarity and functional tests still apply."
          },
          {
            number: 16,
            prompt: "Which class of equipment is NOT acceptable in the UK?",
            options: { A: "Class 0", B: "Class III", C: "Class II", D: "Class I" },
            answer: "A",
            explanation: "Class 0 has only basic insulation and no earth — a single insulation failure puts the user in contact with live parts. The UK has prohibited Class 0 since the introduction of the Plugs & Sockets Regulations and the Electrical Equipment (Safety) Regs."
          },
          {
            number: 17,
            prompt: "What is not considered to be a factor when considering a risk based assessment when determining the initial frequency of inspection and testing?",
            options: { A: "Frequency of use", B: "The environment", C: "The fixed wiring RCD trip time", D: "Previous records" },
            answer: "C",
            explanation: "The trip time of the supply RCD has no bearing on how often a portable appliance needs visual checks or tests. Use, environment and history are the three drivers in COP Table 7.1."
          },
          {
            number: 18,
            prompt: "Which of these does not describe a category of inspection and testing, referred to in the Code of Practice?",
            options: {
              A: "Equipment is inspected and tested and records kept of all results",
              B: "Before every use, a user should check the equipment and record any faults found",
              C: "Before every use, a user should check equipment and record all findings",
              D: "Inspections without tests, when equipments is checked and records kept of all results"
            },
            answer: "C",
            explanation: "User checks are visual-only and only faults are reported — recording every check would defeat the point. The three COP categories are user check (faults reported), formal visual inspection, and combined inspection and test."
          },
          {
            number: 19,
            prompt: "The dimensions of the conductors in an extension lead affect the resistance of the lead. Which of these correctly describes two conditions when resistance would reduce?",
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
            number: 20,
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
            number: 21,
            prompt: "A 2m length of flex with a csa of 0.75mm squared which has a rewireable plug top has a maximum fuse rating of",
            options: { A: "13A", B: "6A", C: "3A", D: "10A" },
            answer: "B",
            explanation: "BS 1363 plug fuse selection — 0.75 mm² flex protects up to 6 A. 1.0 mm² is good for 10 A; 1.25/1.5 mm² for 13 A. 3 A is the lower fuse for low-current appliances on 0.5 mm²."
          },
          {
            number: 22,
            prompt: "What tolerance is given in excess of the resistance of the protective conductor when measuring the earth continuity of an appliance with a supply cable?",
            options: { A: "0.02 Ohms", B: "0.2 Ohms", C: "0.01 Ohms", D: "0.1 Ohms" },
            answer: "D",
            explanation: "The COP allows 0.1 Ω above the calculated cable resistance for end-fitting and connection variability. Anything beyond suggests a poor termination, not just cable impedance."
          },
          {
            number: 23,
            prompt: "Which legal document requires that electrical equipment supplied under contract is of satisfactory quality?",
            options: {
              A: "The health and safety at work act",
              B: "The electrical Equipment (Safety) Regulations 2016",
              C: "The supply of goods and services act 1982",
              D: "The supply of Machinery (Safety) Regulations 2008"
            },
            answer: "C",
            explanation: "Supply of Goods and Services Act 1982 (B2B) and Consumer Rights Act 2015 (B2C) impose the satisfactory quality duty on goods supplied. The Equipment Safety Regs cover product compliance, not the contract terms."
          },
          {
            number: 24,
            prompt: "Equipment, in which protection against electric shock relies upon basic insulation only, is the definition of construction classification",
            options: { A: "Class II", B: "Class III", C: "Class I", D: "Class 0" },
            answer: "D",
            explanation: "Class 0 = basic insulation only, no earth. Class I = basic insulation + protective earth. Class II = double or reinforced insulation. Class III = SELV supply."
          },
          {
            number: 25,
            prompt: "A toaster is generally classified as",
            options: { A: "Mobile", B: "Portable", C: "Transportable", D: "Hand-held" },
            answer: "B",
            explanation: "COP equipment categories: portable = moved while connected or about while in use (kettle, toaster, lamp). Mobile = wheeled, moved while in use (vacuum). Hand-held = held during use (drill). Toasters sit and run, so portable."
          },
          {
            number: 26,
            prompt: "What causes high protective conductor currents in equipment such as variable speed drive which incorporates an EMC filter?",
            options: {
              A: "The length of the CPC cable",
              B: "The choke that is wired in series with the line conductor",
              C: "The capacitors and discharge resistors within the filter",
              D: "The choke that is wired in series with the neutral conductor"
            },
            answer: "C",
            explanation: "EMC filters use Y-capacitors from each line to earth to shunt high-frequency noise. These capacitors leak current to earth at mains frequency, which is the source of the elevated PE current that PAT operators see on VSDs and IT equipment."
          },
          {
            number: 27,
            prompt: "According to the Code of Practice which basic requirement demonstrates that a maintenance regime for electrical appliances exists within an organisation?",
            options: {
              A: "A kitemark logo on the company letterhead",
              B: "The invoices from the inspection and testing contractor",
              C: "The records of inspections and tests",
              D: "PAT strikers on all appliances"
            },
            answer: "C",
            explanation: "The records demonstrate the duty holder is meeting EAWR Reg 4(2) — maintaining the equipment in safe condition. Stickers and invoices alone don't show what was inspected, when, or what failed."
          },
          {
            number: 28,
            prompt: "When performance testing an RCD, the test should be done using",
            options: { A: "30mA", B: "100mA", C: "300mA", D: "150mA" },
            answer: "A",
            explanation: "A portable 30 mA RCD must be tested at its rated tripping current (30 mA) to confirm it operates within the time limit. Higher-current tests (5× IΔn) check the fast-trip path; the 1× IΔn test confirms the basic threshold."
          },
          {
            number: 29,
            prompt: "What is the frequency of testing for a mobile class 1 item of equipment used in commercial kitchens",
            options: { A: "12 months", B: "1 month", C: "3 months", D: "There are no specified timescales" },
            answer: "A",
            explanation: "COP Table 7.1 — commercial kitchen mobile Class I: combined inspection & test every 12 months, formal visual inspection every 6 months. The kitchen environment (heat, water, grease) drives a tighter regime than office equipment."
          },
          {
            number: 30,
            prompt: "A severe electric shock occur under fault free conditions if the body is placed between",
            options: {
              A: "A live conductor and earth",
              B: "The earth pin of a power socket and the metallic case of a class 1 item",
              C: "Two earthed exposed conductive parts",
              D: "Two conductors at the same potential"
            },
            answer: "A",
            explanation: "Direct contact with a live conductor while standing on or touching earth provides the full mains potential across the body — the classic shock path. The other options either share the same potential (no current) or require a fault for current to flow."
          },
          {
            number: 31,
            prompt: "The sample test instrument record sheet provided in the Code of Practice requires certain details to be kept about the instruments used. These details include",
            options: {
              A: "Instrument type; Model; Serial Number and Date of next calibration",
              B: "Instrument Manufacturer; Model; Serial Number and Date of next calibration",
              C: "Instrument Manufacturer; Model; Serial Number and Date of last calibration",
              D: "Instrument type; Model; Serial Number and Date of last calibration"
            },
            answer: "D",
            explanation: "COP sample form: type, model, serial and date of last calibration — that lets you trace the test back to a known calibration baseline. Date-of-next-calibration is helpful for scheduling but isn't the audit trail."
          },
          {
            number: 32,
            prompt: "Some aspects of a fixed installation, when noticed, should be recorded or discussed with the owner of the property. Which of these should not lead to a tester's recommendation that the installation itself should be inspected or reviewed?",
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
            number: 33,
            prompt: "Which regulations place a legal requirement on a landlord, who provides electrical equipment as part of a tenancy, to ensure that it is safe when first supplied?",
            options: {
              A: "WEEE regulations",
              B: "BS 7671",
              C: "The electrical equipment (safety) regulations",
              D: "The housing act (England and Wales)"
            },
            answer: "C",
            explanation: "Electrical Equipment (Safety) Regulations 2016 require electrical equipment supplied to comply with safety standards. BS 7671 is the wiring rules, WEEE is end-of-life recycling, and the Housing Act covers wider tenant duties."
          },
          {
            number: 34,
            prompt: "A method of reducing the risk of electric shock under fault conditions is to use SELV equipment, this method",
            options: {
              A: "Operates at 110 V a.c.",
              B: "Uses a centre tapped transformed with the centre connected to earth",
              C: "Needs to have an earth connection on the load side",
              D: "Has no connection to earth on the load side"
            },
            answer: "D",
            explanation: "SELV (Separated Extra-Low Voltage) is electrically isolated from earth on the load side and operates at ≤ 50 V a.c. / 120 V d.c. The centre-tapped earth setup at 110 V is the construction-site reduced low-voltage system, not SELV."
          },
          {
            number: 35,
            prompt: "A person who is not skilled in electrical work, but is classed as competent to carry out inspection and testing of electrical equipment, is known as being competent to which level?",
            options: { A: "Level 2", B: "Level 1", C: "Level 3", D: "Level 4" },
            answer: "A",
            explanation: "COP Appendix VII competency framework: Level 1 = user check; Level 2 = formal visual inspection AND combined inspection & test by a non-electrical person who has had appropriate training; Level 3 = electrically skilled."
          },
          {
            number: 36,
            prompt: "When tested separately, a 2 core lead set is tested as a",
            options: { A: "Class I appliance", B: "Class III appliance", C: "Class II appliance", D: "Class 0 appliance" },
            answer: "C",
            explanation: "A 2-core lead has no protective earth conductor — it's classified and tested as Class II. The classification follows the construction, not the appliance it ends up plugged into."
          },
          {
            number: 37,
            prompt: "A load test is particularly useful for",
            options: { A: "IT equipment", B: "Central heating systems", C: "Domestic lighting", D: "Heating equipment" },
            answer: "D",
            explanation: "Load testing measures the current drawn under normal use to confirm the heating element draws roughly the rated current. For IT equipment with switch-mode supplies the current isn't a useful diagnostic; for heaters it tells you the element is intact."
          },
          {
            number: 38,
            prompt: "The IP code for equipment which provides protection against a solid foreign object of 12.5mm diameter or more and protection against spraying water is represented by which IP code?",
            options: { A: "IP21", B: "IP23", C: "IP52", D: "IP14" },
            answer: "B",
            explanation: "First digit 2 = solid objects ≥ 12.5 mm (finger). Second digit 3 = spraying water (up to 60° from vertical). IP21 is dripping water; IP52 is dust protected with spraying water; IP14 is unusual."
          },
          {
            number: 39,
            prompt: "What test voltage is recommended when carrying out an insulation resistance test where surge protection devices are incorporated in the equipment?",
            options: { A: "500 V d.c.", B: "250 V a.c.", C: "500 V a.c.", D: "250 V d.c." },
            answer: "D",
            explanation: "SPDs would clamp a 500 V test and either give a misleading low IR or be damaged. Drop the test voltage to 250 V d.c. so the SPD doesn't conduct. IR is always d.c., not a.c."
          },
          {
            number: 40,
            prompt: "The electricity at work regulations is only one item of legislation which refers to electrical equipment used at work. The voltages covered by this legislation",
            options: {
              A: "Are anything below 600V a.c. or 900V d.c. between conductors and earth",
              B: "Range up to 1000V a.c. or 2500V d.c. between conductors",
              C: "Range from extra low voltage battery powered items to 400kV transmission equipment",
              D: "Are anything above the domestic voltage of 230V"
            },
            answer: "C",
            explanation: "EAWR has no voltage limits — it applies from a torch battery up to the National Grid 400 kV equipment. Anyone arguing 'it's only ELV so EAWR doesn't apply' is wrong."
          },
          {
            number: 41,
            prompt: "When carrying out a low or high current test, in both cases the protective conductor test should be made between accessible conductive paths and",
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
            number: 42,
            prompt: "The minimum cross sectional area of an appliance flex for a portable socket outlet protected by a 13 A plugtop fuse is",
            options: { A: "1.25mm squared", B: "4mm squared", C: "0.75mm squared", D: "2.5mm squared" },
            answer: "A",
            explanation: "BS 1363 fuse / flex pairing — a 13 A plug fuse needs at least 1.25 mm² flex. 0.75 mm² caps at 6 A; 1.0 mm² caps at 10 A. 4 mm² is fixed wiring CSA, not flex."
          },
          {
            number: 43,
            prompt: "If it is required to carry out a touch current test the recorded value should not exceed",
            options: {
              A: "5mA for DC powered equipment",
              B: "3.5 5mA for DC powered equipment",
              C: "3.5 5mA for AC powered equipment",
              D: "5mA for AC powered equipment"
            },
            answer: "C",
            explanation: "IEC 60990 / COP — touch current limits are 3.5 mA RMS for AC-powered equipment, 5 mA d.c. ripple-free for DC. Exceeding the AC limit indicates faulty insulation or excessive EMC filter leakage."
          },
          {
            number: 44,
            prompt: "The health and safety executive provide guidance documents on maintaining electrical equipment. What publication provides guidance on electrical safety on construction sites?",
            options: { A: "HSG141", B: "GS38", C: "INDG236", D: "HSG107" },
            answer: "A",
            explanation: "HSG141 — Electrical safety on construction sites. GS38 is test probes/leads, INDG236 is maintaining portable equipment summary leaflet, HSG107 is maintaining portable & transportable equipment (the predecessor of the current PAT COP)."
          },
          {
            number: 45,
            prompt: "Which Code of Practice model form could be used to record a formal visual and combined inspection and test record?",
            options: { A: "Form 4.3", B: "Form 4.1", C: "Form 4.2", D: "Form 4.4" },
            answer: "A",
            explanation: "COP 5th Edition model forms: 4.1 inventory, 4.2 formal visual only, 4.3 combined inspection and test (visual + test results), 4.4 repair register."
          },
          {
            number: 46,
            prompt: "A portable appliance is fitted with a cable 4.5m long and has a protective condor of 1.0mm2. Calculate the resistance of the protective conductor.",
            options: { A: "70.2 milliohms", B: "78 milliohms", C: "97.5 milliohms", D: "87.75 milliohms" },
            answer: "D",
            explanation: "Tabulated 1.0 mm² flex copper resistance ≈ 19.5 mΩ/m at 20 °C. R = 19.5 × 4.5 = 87.75 mΩ. The COP uses these tabulated values for the 'expected' figure to compare your test against."
          },
          {
            number: 47,
            prompt: "Extension leads that are longer than the recommended lengths should be protected by a ",
            options: { A: "BS 3036 fuse", B: "Double pole switch", C: "300mA RCD", D: "30mA RCD" },
            answer: "D",
            explanation: "Long extension leads have a higher chance of damage and a higher Zs that may not allow the upstream device to operate fast enough — a 30 mA RCD provides the additional protection. 300 mA is for fire protection, not personal safety."
          }
        ]
      }
    ],
    scoring: [
      { minScore: 42, range: "42–47", label: "Strong — homework standard" },
      { minScore: 33, range: "33–41", label: "Comfortable pass" },
      { minScore: 24, range: "24–32", label: "Re-read the relevant theory before re-attempting" },
      { minScore: 0, range: "< 24", label: "Re-watch the topic webinar before re-attempting" }
    ],
    priorities: [
      "Class definitions: 0 = basic insulation only (banned UK); I = basic + earth; II = double/reinforced; III = SELV supply.",
      "PE continuity tolerance = expected R from CSA & length + 0.1 Ω; touch current limits 3.5 mA AC, 5 mA DC.",
      "Plug fuse to flex CSA: 0.5 mm² → 3 A, 0.75 mm² → 6 A, 1.0 mm² → 10 A, 1.25/1.5 mm² → 13 A.",
      "Frequency drivers: equipment class, type (mobile/portable/stationary/fixed), use, environment, history — not the state of the fixed wiring."
    ]
  },
  {
    id: "initial-verification",
    title: "Initial Verification",
    subtitle: "Combined topic drill + Access Training homework practice bank",
    description:
      "A focused exam built around Webinar 5 — Initial Verification. Covers Part 6 of BS 7671, the inspection schedule, the dead-test sequence (continuity, ring final, IR, polarity), the live-test sequence (Ze, PFC, Zs, RCD), acceptance criteria, and the documentation issued for new work. Now combined with 43 questions from the Access Training Initial Verification homework: dead and live test sequence, R1+R2 / Zs / IR / RCD / PFC calculations, EIC documentation and signatories, instrument standards, and IP/class/segregation context.",
    format: "89 multiple-choice questions. Aim for 63+/89 (70%+) to pass; 81+/89 (90%+) for a strong result.",
    passMark: 63,
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
      },
      {
        id: "section-1",
        title: "Section 1 — Initial Verification Practice Bank",
        questions: [
          {
            number: 13,
            prompt: "Fault protection is given by?",
            options: { A: "Placing out of reach", B: "Barriers or enclosures", C: "Presence of an earthing conductor", D: "Obstacles" },
            answer: "C",
            explanation: "Fault protection (against indirect contact) is achieved by Automatic Disconnection of Supply — which depends on the earthing conductor + protective device combination. Barriers/enclosures, out-of-reach and obstacles all give basic protection, not fault protection."
          },
          {
            number: 14,
            prompt: "Which component will not require functional testing during the electrical testing process?",
            options: { A: "RCD", B: "Isolator", C: "Light switch", D: "Gas boiler connected to a fused spur" },
            answer: "D",
            explanation: "The boiler itself is gas equipment, outside the scope of the electrical installation tested under BS 7671 — only the fused spur supplying it is electrically tested. RCDs, isolators and switches are all functionally checked."
          },
          {
            number: 15,
            prompt: "What other information is usually stated on a circuit breaker in addition to its rated current (In)?",
            options: { A: "Rated short circuit capacity (Icn)", B: "Service short circuit capacity (Ics)", C: "Range of trip values", D: "Maximum Zs value" },
            answer: "A",
            explanation: "Icn is the printed breaking capacity (e.g. 6000 / 10000 in a square symbol). Ics is also marked but as a smaller secondary figure. Trip ranges and max Zs are derived from manufacturer data, not on the breaker face."
          },
          {
            number: 16,
            prompt: "A radial circuit is 45m long and wired in 6/2.5mm squared conductors. What is the expected value of R1 + R2 for this circuit at 20?C?",
            options: { A: "0.62 Ohms", B: "0.47 Ohms", C: "0.72 Ohms", D: "0.57 Ohms" },
            answer: "B",
            explanation: "Tabulated R/m at 20 °C: 6 mm² ≈ 3.08 mΩ/m, 2.5 mm² ≈ 7.41 mΩ/m. R1+R2 per m = 10.49 mΩ. For 45 m: 45 × 10.49 ≈ 472 mΩ = 0.47 Ω."
          },
          {
            number: 17,
            prompt: "Calculate the earth fault loop impedance ZS where Ze = 0.2, R1 = 0.5, R2=0.6",
            options: { A: "0.22 Ohms", B: "0.18 Ohms", C: "0.06 Ohms", D: "1.3 Ohms" },
            answer: "D",
            explanation: "Zs = Ze + (R1 + R2) = 0.2 + (0.5 + 0.6) = 1.3 Ω. The other answers come from subtracting or paralleling instead of adding."
          },
          {
            number: 18,
            prompt: "After securing an isolation on a piece of equipment and placing warning notices, what will the installer do next?",
            options: {
              A: "Use only electrician insulated tools rated at 1000 volts",
              B: "Inform the client that the equipment is dead and then start work normally.",
              C: "Try turning the equipment on to make sure it does not start.",
              D: "Prove dead at the point of work using an approved voltage detector"
            },
            answer: "D",
            explanation: "Safe isolation: prove the voltage indicator on a known live source, prove dead at the point of work, then re-prove the indicator on a known source. Switching back on as a check defeats the purpose of locking off."
          },
          {
            number: 19,
            prompt: "When two conductors of different resistances are connected in parallel, the resulting resistance will be",
            options: {
              A: "Lower than the lowest conductor resistance",
              B: "Higher than the highest conductor resistance",
              C: "The same value as the highest conductor resistance",
              D: "Higher than the lowest conductor resistance"
            },
            answer: "A",
            explanation: "Parallel resistors: 1/R = 1/R1 + 1/R2. The combined value is always lower than the smallest individual resistance — adding any extra parallel path can only reduce total resistance."
          },
          {
            number: 20,
            prompt: "Which of these areas is not classified as a special installation or location in accordance with BS7671?",
            options: { A: "Kitchen", B: "Bathroom", C: "An exhibition stand", D: "Floor and ceiling heating system" },
            answer: "A",
            explanation: "Bathrooms (701), exhibition stands (711) and floor/ceiling heating (753) are all in Part 7. A standard kitchen has no Part 7 section — it's a normal location with normal rules."
          },
          {
            number: 21,
            prompt: "The most appropriate human sense for detecting burrs inside a conduit is?",
            options: { A: "Touch", B: "Sight", C: "Hearing", D: "Smell" },
            answer: "A",
            explanation: "You can't see inside a conduit run; the only reliable check before drawing cable is to feel for sharp edges and burrs with a finger or rag. A burr will tear the cable insulation under tension."
          },
          {
            number: 22,
            prompt: "A metallic test finger is used to test an enclosure to?",
            options: { A: "IPXXA", B: "IP4X", C: "IPX4", D: "IP2X" },
            answer: "D",
            explanation: "IP2X is checked with the standard 12.5 mm jointed test finger (the 'rigid sphere + finger' test in IEC 60529). IP4X uses a 1 mm wire; IPX4 is splashing water; IPXXA is back-of-hand access."
          },
          {
            number: 23,
            prompt: "It is required to record the value of prospective fault current of a three phase supply by measurement. An acceptable and cautious way to do this is to measure the single phase value and",
            options: { A: "Multiply by 1.73", B: "Divide by 1.73", C: "Multiply by two", D: "Divide by two" },
            answer: "C",
            explanation: "GN3 — measure L–N PFC, then multiply by 2 to give a cautious estimate of the line-to-line three-phase value. This avoids needing an L–L PFC measurement that requires a different probe set-up."
          },
          {
            number: 24,
            prompt: "Which is not part of the procedure for testing insulation resistance?",
            options: {
              A: "Testing between live conductors",
              B: "Testing between live conductors and protective conductor.",
              C: "The protective conductor is disconnected from the earthing arrangement",
              D: "The protective conductor remains connected to the earthing arrangement"
            },
            answer: "C",
            explanation: "IR test is L–N (live-to-live) and L+N–E (lives joined to earth). The protective conductor stays connected to the MET so the test mimics in-service insulation. Disconnecting the PE would invalidate the L–E reading."
          },
          {
            number: 25,
            prompt: "Why is it necessary to verify the continuity of circuit protective conductors?",
            options: {
              A: "To ensure the continuity and correct wiring of every line, neutral and protective conductor.",
              B: "To determine the prospective fault current under both short circuit and earth fault conditions",
              C: "To ensure the resistance between line conductors and earth is greater than 1M ohms",
              D: "To ensure protective conductors are electrically sound and correctly connected"
            },
            answer: "D",
            explanation: "CPC continuity proves the protective conductor is intact and properly terminated end-to-end so fault current has a path back to the source — without it, ADS doesn't work."
          },
          {
            number: 26,
            prompt: "The test button on an RCD is pressed regularly to check it",
            options: {
              A: "Operates mechanically",
              B: "Will disconnect within its residual operating current",
              C: "Disconnects within 0.4 seconds",
              D: "Disconnects within 40ms"
            },
            answer: "A",
            explanation: "The RCD test button only confirms the mechanical trip mechanism works — it injects an internal imbalance via a built-in resistor. It does NOT verify trip current threshold or disconnection time; that needs a calibrated RCD tester."
          },
          {
            number: 27,
            prompt: "When carrying out electrical work, what is the main safety implication of failing to carry out isolation?",
            options: {
              A: "The time it takes to complete the job will be affected",
              B: "Other workers will not know what is happening",
              C: "The installer and others may be at risk of coming into contact with live parts.",
              D: "Production will be stopped?"
            },
            answer: "C",
            explanation: "Failing to isolate leaves live conductors accessible — that's the textbook serious-or-fatal injury scenario the EAWR is built around. Production interruption and worker awareness are operational concerns, not the safety case."
          },
          {
            number: 28,
            prompt: "When carrying out testing in accordance with IET Guidance Note 3 what action should be taken if unsatisfactory results are obtained?",
            options: {
              A: "Carry on with the testing and see if any other tests fail.",
              B: "Any defects must be made good and inspected and tested again",
              C: "Record the unsatisfactory results on the Schedule of Test Results and highlight to the client on hand over.",
              D: "Make a note of the unsatisfactory results when issuing the Electrical Installation Certificate."
            },
            answer: "B",
            explanation: "GN3 — defects must be remedied, then the affected test repeated. You can't certify an installation while it has known unsatisfactory test results, and noting them on the EIC is no substitute for fixing them."
          },
          {
            number: 29,
            prompt: "Circuits operating at different voltage bands within the same enclosure are segregated to",
            options: {
              A: "Increase the resistance of the highest voltage present",
              B: "Avoid mutual detrimental influence",
              C: "Ensure that Zs of each circuit will comply with BS7671",
              D: "Reduce the resistance of the lowest voltage present"
            },
            answer: "B",
            explanation: "BS 7671 528 — segregation of Band I (ELV/data) from Band II (LV) prevents cross-connection, induced voltages on signal cables, and the spread of insulation faults from one band to the other. The phrase 'mutual detrimental influence' is from the regulation itself."
          },
          {
            number: 30,
            prompt: "The purpose of an electrical installation certificate is to ensure that the installation conforms to",
            options: { A: "GS38", B: "The Health and Safety at Work Act", C: "Guidance Note 3", D: "BS7671" },
            answer: "D",
            explanation: "An EIC certifies conformity with BS 7671 (with any departures listed). GS38 covers test instruments/leads, GN3 is testing guidance, HSWA is a general statute — none are what the EIC certifies against."
          },
          {
            number: 31,
            prompt: "Three circuits are tested separately for insulation resistance and the results are 100M Ohms, 50M Ohms, 40M Ohms. What will the overall insulation resistance be if they are tested together?",
            options: { A: "21.14M Ohms", B: "11.34M Ohms", C: "10.06M Ohms", D: "18.18M Ohms" },
            answer: "D",
            explanation: "Insulation resistances combine in parallel: 1/R = 1/100 + 1/50 + 1/40 = 0.055; R = 1/0.055 = 18.18 MΩ. Combined IR is always lower than the lowest individual."
          },
          {
            number: 32,
            prompt: "During which test will two temporary test spikes be used?",
            options: { A: "Earth fault loop impedance test", B: "Earth electrode resistance test", C: "Insulation resistance to earth", D: "Insulation resistance test of floors" },
            answer: "B",
            explanation: "Earth electrode resistance test (fall-of-potential / 3-spike method) uses two temporary auxiliary spikes — current spike and potential spike — together with the electrode under test."
          },
          {
            number: 33,
            prompt: "Which documents must accompany an Electrical Installation Certificate?",
            options: {
              A: "Schedule of Test Results and Electrical Installation Minor Works Certificate",
              B: "Schedule of Test Results and Schedule of Circuit Details",
              C: "Schedule of Inspections and Electrical Installation Minor Works Certificate",
              D: "Electrical Installation Condition Report and Schedule of Inspections"
            },
            answer: "B",
            explanation: "Every EIC is accompanied by a Schedule of Test Results and a Schedule of Inspections / Schedule of Circuit Details. A Minor Works Certificate is an alternative to the EIC, not an attachment; an EICR is for periodic inspection."
          },
          {
            number: 34,
            prompt: "What signatories are required to complete an Electrical Installation Certificate of a new build?",
            options: {
              A: "Contractor, designer, NICEIC representative",
              B: "Designer, constructor, inspector",
              C: "Designer, client, contractor",
              D: "Installer, client, contractor"
            },
            answer: "B",
            explanation: "EIC signatories are designer (responsible for design), constructor (responsible for the installation), and inspector (responsible for the inspection and testing). The same person may sign more than one role on smaller jobs."
          },
          {
            number: 35,
            prompt: "A 3 phase distribution board runs a number of 3 phase motors. A replacement distribution board is fitted and the phase sequence has been wired differently to the original distribution board. What will happen if the installer tries to run one of the 3 phase motors?",
            options: {
              A: "The motor will not run at all",
              B: "The motor will run in the opposite direction",
              C: "The protective devices feeding the motor will trip.",
              D: "The motor will run normally"
            },
            answer: "B",
            explanation: "Reversing the phase sequence to a 3-phase induction motor reverses its direction of rotation. The motor itself is fine — but mechanical equipment driven by it may be damaged when it spins backwards (pumps, conveyors, fans)."
          },
          {
            number: 36,
            prompt: "Which of the following confirms so far as is reasonably practicable, that the requirement of the Regulations have been met?",
            options: {
              A: "Functional Testing",
              B: "Electrical installation Condition Report",
              C: "Routine checks including user checks",
              D: "Initial Verification"
            },
            answer: "D",
            explanation: "BS 7671 Part 6 — initial verification (inspection + testing + certification) is the formal confirmation that a new or altered installation meets the Regulations. EICR confirms ongoing safety, not initial compliance."
          },
          {
            number: 37,
            prompt: "When inspecting equipment installed in a bathroom, the minimum IP code allowed in zones 1 and 2 is",
            options: { A: "IP7X", B: "IP4X", C: "IPX4", D: "IPX7" },
            answer: "C",
            explanation: "BS 7671 701: Zones 1 and 2 require minimum IPX4 (protection against splashing water from any direction). Where water jets are used, IPX5. Zone 0 (inside the bath/shower) is IPX7."
          },
          {
            number: 38,
            prompt: "A ring final circuit is wired in 2.5/1.5mm squared twin and CPC cable. From step 1 of the est, the end-to-end r1 is measured at 0.05 Ohms. What value is the end-to-end r2 expected to be?",
            options: { A: "0.0835 Ohms", B: "0.952 Ohms", C: "0.125 Ohms", D: "0.399 Ohms" },
            answer: "A",
            explanation: "r2/r1 = R(1.5 mm²) / R(2.5 mm²) = 12.10 / 7.41 ≈ 1.67. So r2 = 0.05 × 1.67 ≈ 0.0835 Ω. This ratio is the basis of the ring final 2.5/1.5 expected-r2 calculation."
          },
          {
            number: 39,
            prompt: "Which of the following cannot be used for determining or checking prospective fault current?",
            options: { A: "Enquiry", B: "Measurement", C: "Substitution", D: "Calculation" },
            answer: "C",
            explanation: "Three valid methods for determining PFC: enquiry from the DNO, calculation from supply data, and direct measurement. 'Substitution' isn't a recognised PFC method."
          },
          {
            number: 40,
            prompt: "An RCD installed for additional protection is to be tested for functionality.  What test current is applied and what disconnection time is required in order to meet the requirements of BS 7671?",
            options: {
              A: "30mA and trip within 300ms",
              B: "15mA and no trip",
              C: "30mA and trip within 40mS",
              D: "150mA and trip within 40mS"
            },
            answer: "D",
            explanation: "BS 7671 Reg 415.1.1: a 30 mA RCD used for additional protection must trip within 40 ms when tested at 5 × IΔn (= 150 mA). This proves it will respond fast enough to a serious fault, beyond the 300 ms general test at 1× IΔn."
          },
          {
            number: 41,
            prompt: "On which document is maximum demand recorded?",
            options: {
              A: "Minor Electrical Installation Works Certificate",
              B: "Schedule of inspections",
              C: "Electrical Installation Certificate",
              D: "Schedule of test results"
            },
            answer: "C",
            explanation: "Maximum demand (with diversity applied) is recorded on the EIC main page under supply characteristics & earthing arrangements — it's a design figure, not a test result."
          },
          {
            number: 42,
            prompt: "What is the source to check values of Zs?",
            options: { A: "BS7671", B: "BS88", C: "GS38", D: "BS1361" },
            answer: "A",
            explanation: "BS 7671 Tables 41.2, 41.3 and 41.4 list maximum Zs by device type and rating. BS 88 is fuse construction, GS38 is test leads, BS 1361 is cartridge fuses."
          },
          {
            number: 43,
            prompt: "Basic protection is given by",
            options: { A: "Double insulation?", B: "Reinforced insulation", C: "SELV", D: "Insulation of live parts" },
            answer: "D",
            explanation: "Basic protection means preventing direct contact with live parts — achieved primarily by insulation of live parts and barriers/enclosures. Double/reinforced insulation is fault protection (Class II), SELV is its own protective measure."
          },
          {
            number: 44,
            prompt: "When checking an instrument for use, which british standard document should be consulted for conformity?",
            options: { A: "BS EN 61010", B: "BS EN 61008", C: "BS EN 61009", D: "BS EN 60898" },
            answer: "A",
            explanation: "BS EN 61010 is the safety standard for measuring instruments — every test instrument used to BS 7671 should comply. 61008 is RCDs, 61009 is RCBOs, 60898 is MCBs."
          },
          {
            number: 45,
            prompt: "A rotating disc type and an indicator lamp type are the main types of which instrument?",
            options: { A: "Phase sequence tester", B: "RCD tester", C: "Clamp ammeter", D: "Voltage indicator" },
            answer: "A",
            explanation: "Phase rotation indicators are either a small motor disc that spins one way for L1-L2-L3 or a lamp set that lights in sequence. Critical when running 3-phase motors after any rewire."
          },
          {
            number: 46,
            prompt: "Which Provision of the Electricity at Work Regulations relates to safely inspecting electrical systems?",
            options: {
              A: "Adverse or hazardous environments",
              B: "Strength and capability of electrical equipment",
              C: "Persons to be competent to prevent injury",
              D: "Connections"
            },
            answer: "C",
            explanation: "EAWR Reg 16: 'No person shall be engaged in any work activity ... unless he possesses such knowledge or experience, or is under such degree of supervision ... to prevent danger and where appropriate injury'. The competence test."
          },
          {
            number: 47,
            prompt: "An installer carries out an isolation on a lighting circuit. What should the installer do to keep other people safe?",
            options: {
              A: "Secure the isolation with a padlock",
              B: "Prove dead at the point of work",
              C: "Apply a warning notice",
              D: "Prevent access to the area."
            },
            answer: "C",
            explanation: "A clear warning notice at the isolated device tells anyone else on site that work is in progress and the supply must not be re-energised. Padlocking is also good practice but the notice is what informs other workers — the question asks specifically about communicating to others."
          },
          {
            number: 48,
            prompt: "What is the test voltage used during an insulation resistance test of a SELV circuit?",
            options: { A: "500V a.c", B: "500V d.c", C: "250V d.c", D: "250V a.c" },
            answer: "C",
            explanation: "BS 7671 Table 64: SELV / PELV / electrical separation are tested at 250 V d.c. (and must be ≥ 0.5 MΩ). LV is 500 V d.c. with a 1 MΩ minimum. IR is always d.c., never a.c."
          },
          {
            number: 49,
            prompt: "Who should retain the original copy of an Electrical Installation Certificate?",
            options: {
              A: "Local building control",
              B: "The inspectors registration body",
              C: "The contractor",
              D: "The person ordering the work"
            },
            answer: "D",
            explanation: "The original EIC goes to the person ordering the work (the client / duty holder). The contractor keeps a copy. This is so the duty holder has the record they need to comply with EAWR Reg 4(2) and the Building Regs."
          },
          {
            number: 50,
            prompt: "Which tests may be performed on an incoming 3 Phase 4 wire live supply?",
            options: {
              A: "Prospective Fault Current, External Loop Impedance, Phase Rotation",
              B: "Prospective short circuit current, continuity of mains, polarity.",
              C: "Insulation Resistance, Earth Fault Loop Impedance, Phase Rotation",
              D: "Prospective Fault Current, Earth Fault Loop Impedance, Live Polarity"
            },
            answer: "A",
            explanation: "On an incoming live supply you can measure PFC, Ze (external loop impedance), and phase rotation. IR is a dead test; earth fault loop impedance through the installation is a final-circuit test, not the incoming supply test."
          },
          {
            number: 51,
            prompt: "What is the minimum acceptable value of insulation resistance for the SELV circuit?",
            options: { A: "1M Ohms", B: "2M Ohms", C: "0.5M Ohms", D: "5M Ohms" },
            answer: "C",
            explanation: "Table 64 — SELV/PELV/electrical separation: minimum 0.5 MΩ at 250 V d.c. test. LV (≤ 500 V) is 1 MΩ at 500 V d.c."
          },
          {
            number: 52,
            prompt: "Which of these is not a precaution to take before carrying out an insulation resistance test?",
            options: {
              A: "Remove dimmer switches",
              B: "Disconnect neons",
              C: "Disconnect the earthing lead to the main earth terminal",
              D: "Remove all loads"
            },
            answer: "C",
            explanation: "The PE / earthing conductor stays connected throughout — the IR test is between lives and earth (with PE intact) to mimic the in-service condition. You disconnect electronics that might be damaged or distort the result, not the safety earth."
          },
          {
            number: 53,
            prompt: "What is the best action to take if an insulation resistance test fails on an individual radial circuit and a PVC/PVC twin and cpc flat cable has been replaced to remedy the fault?",
            options: {
              A: "Move on to the next test as the new cable will cure the fault.",
              B: "Re-inspect and Re-test ",
              C: "Go back to the beginning and repeat all tests for the installation",
              D: "Re-test insulation resistance test for that circuit and continue to the next test."
            },
            answer: "B",
            explanation: "Replacing the cable is a physical alteration — re-inspect (check the new install) and re-test (IR plus continuity since the CPC has been disturbed). Just re-running IR alone misses any error introduced when you fitted the new cable."
          },
          {
            number: 54,
            prompt: "Which system has all exposed conductive part of an installation connected to an earth electrode independent of the source of earth?",
            options: { A: "TN-C", B: "TN-C-S", C: "TN-S", D: "TT" },
            answer: "D",
            explanation: "TT — all exposed parts are bonded to a local earth electrode independent of the supply source. TN systems all use the source earth. TT is common where there is no DNO earth (overhead supplies, farms)."
          },
          {
            number: 55,
            prompt: "A Primary reason for carrying out safe isolation is to:",
            options: {
              A: "Allow uninsulated tools to be used",
              B: "Avoid a serious or fatal injury occurring",
              C: "Avoid damage to the equipment",
              D: "Keep the cables cool whilst testing"
            },
            answer: "B",
            explanation: "Safe isolation prevents the operator (and anyone else nearby) from coming into contact with live parts during work — the primary purpose is preventing electric shock injury or death. Equipment protection is secondary."
          }
        ]
      },
      {
        id: "section-4",
        title: "Section 4 — Documents, Safe Isolation & Instruments",
        questions: [
          {
            number: 56,
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
            number: 57,
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
            number: 58,
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
            number: 59,
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
            number: 60,
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
          },
          {
            number: 61,
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
            number: 62,
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
            number: 63,
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
            number: 64,
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
          },
          {
            number: 65,
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
            number: 66,
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
        id: "section-5",
        title: "Section 5 — Dead Tests & Continuity",
        questions: [
          {
            number: 67,
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
            number: 68,
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
            number: 69,
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
            number: 70,
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
            number: 71,
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
            number: 72,
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
            number: 73,
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
            number: 74,
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
            number: 75,
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
            number: 76,
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
            number: 77,
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
        id: "section-6",
        title: "Section 6 — Live Tests, RCDs & Practical Results",
        questions: [
          {
            number: 78,
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
            number: 79,
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
          },
          {
            number: 80,
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
          },
          {
            number: 81,
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
            number: 82,
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
            number: 83,
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
            number: 84,
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
            number: 85,
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
            number: 86,
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
          },
          {
            number: 87,
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
            number: 88,
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
            number: 89,
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
      { minScore: 81, range: "81–89", label: "Strong — homework standard" },
      { minScore: 63, range: "63–80", label: "Comfortable pass" },
      { minScore: 45, range: "45–62", label: "Re-read the relevant theory before re-attempting" },
      { minScore: 0, range: "< 45", label: "Re-watch the topic webinar before re-attempting" }
    ],
    priorities: [
      "Test sequence: dead first (continuity → IR → polarity → Ze) then live (polarity → Ze → Zs → PFC → phase rotation → RCD → functional). Defects must be made good and tests repeated.",
      "Zs = Ze + (R1+R2). Max Zs values are in BS 7671 Table 41.2/41.3/41.4 — measured Zs typically allowed at 80% of tabulated to account for temperature.",
      "RCD additional protection: trip within 40 ms at 5×IΔn (= 150 mA for a 30 mA RCD); the test button only proves the mechanism, not the threshold.",
      "EIC documentation: EIC + Schedule of Inspections + Schedule of Test Results. Three signatories: designer, constructor, inspector."
    ]
  },
  {
    id: "periodic-inspection",
    title: "Periodic Inspection & Testing",
    subtitle: "Combined topic drill + Access Training homework practice bank",
    description:
      "A focused exam built around Webinar 6 — Periodic Inspection and Testing. Covers the purpose of PIT, recommended intervals, sampling, limitations, the dead/live test approach for an in-service installation, and the legal drivers behind periodic verification. Now combined with 23 questions from the Access Training Periodic Inspection homework: EICR coding, the periodic inspection process, extent & limitations, and diagnostic interpretation of common test results.",
    format: "35 multiple-choice questions. Aim for 25+/35 (70%+) to pass; 32+/35 (90%+) for a strong result.",
    passMark: 25,
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
      },
      {
        id: "section-1",
        title: "Section 1 — Periodic Inspection Practice Bank",
        questions: [
          {
            number: 13,
            prompt: "A ring final circuit is tested and these results are found at a socket outlet: Step 2 of test Line/Neutral at Socket - 0.3 Ohms. Step 3 of Test Line/C.P.C at Socket - No Reading. A possible reason for this is",
            options: {
              A: "Line and neutral reversal at the socket",
              B: "Line and CPC reversal at the socket",
              C: "Insulation resistance is too high",
              D: "Neutral and CPC reversal at the socket"
            },
            answer: "D",
            explanation: "If N and CPC are reversed at the socket, the L/N test still reads continuity (it goes via what is now the CPC ring) so the value looks normal, but L/CPC reads open because it's now testing through the disconnected neutral end. L/CPC reversal would show the opposite — L/CPC ok, L/N open."
          },
          {
            number: 14,
            prompt: "Which of these is not a requirement of periodic inspection and testing?",
            options: {
              A: "To confirm by inspection during construction, and on completion that the installation complies with the current version of BS7671",
              B: "Confirming that the disconnection times are met",
              C: "A detailed visual examination of the installation",
              D: "Carrying out appropriate tests"
            },
            answer: "A",
            explanation: "Inspection during construction and on completion is initial verification (Part 6, Chapter 64), not periodic inspection. Periodic I&T is carried out on existing in-service installations to assess current safety, not to verify the original install."
          },
          {
            number: 15,
            prompt: "An insulation resistance test on a 230V circuit gives a result of 0.8 Ohms",
            options: {
              A: "Investigate where the fault is",
              B: "Increase the interval to the next periodic inspection",
              C: "Record it as a C2",
              D: "Record it as a C3"
            },
            answer: "A",
            explanation: "0.8 Ω IR is effectively a dead short between conductors — way below the 1 MΩ minimum. The first action is to find and rectify the fault, not to record and walk away. Don't even bother coding until you understand what you're looking at."
          },
          {
            number: 16,
            prompt: "If a C1 is given to an observation the client should be notified",
            options: {
              A: "Immediately and in writing that improvement is recommended to remove the danger",
              B: "On the final report that urgent remedial action is required",
              C: "That you have removed the danger and repaired the fault ",
              D: "On the final report that further investigation is necessary to find out why the danger is present"
            },
            answer: "A",
            explanation: "C1 = Danger present; risk of injury. Best Practice Guide 4 requires the inspector to make safe (or warn / isolate) and notify the duty holder immediately in writing. Don't wait until the final report — the duty holder needs to know now so further use is controlled."
          },
          {
            number: 17,
            prompt: "What is the maximum operating time of a non time delayed RCBO to BS61009 when tested at 100% of its rated tripping current?",
            options: {
              A: "40ms",
              B: "0.4s",
              C: "300ms",
              D: "200ms"
            },
            answer: "C",
            explanation: "BS EN 61009 general-type RCBO: max trip time at 1× IΔn = 300 ms; at 5× IΔn = 40 ms. The 40 ms figure is the well-known one but it's the 5× test, not the 1× test."
          },
          {
            number: 18,
            prompt: "Which of these is considered a defect?",
            options: {
              A: "CPCs connected to Class II equipment",
              B: "RCD does not operate when test button pushed",
              C: "Cable colours are to the 15th Edition",
              D: "Absence of RCDs to circuits supplying chillers in a supermarket"
            },
            answer: "B",
            explanation: "An RCD that fails its built-in mechanical test is a clear defect — protection is unproven. Old cable colours and CPCs landed at Class II terminals are typically C3 observations, not safety defects in themselves. RCD requirements are application-dependent."
          },
          {
            number: 19,
            prompt: "The periodic test sequence may be undertaken in a different order to initial verification because",
            options: {
              A: "It prevents indirect contact to personnel and livestock when the installation is energised.",
              B: "It follows the sequence in BS7671 for periodic testing and the installation can be decommissioned?",
              C: "The inspector must follow the sequence as given in IET Guidance Note 3 and test an energised installation",
              D: "The electrical installation will already be energised and only appropriate tests need to be applied"
            },
            answer: "D",
            explanation: "Periodic inspection happens on a live, in-use installation. The dead-test sequence used at initial verification can't always be applied — the inspector picks appropriate tests using sampling and judgement, guided by GN3."
          },
          {
            number: 20,
            prompt: "If a low insulation resistance value is measured the inspector should",
            options: {
              A: "Record the result and assess it against BS7671",
              B: "Carry out fault finding and further investigations",
              C: "Carry out a half split technique to locate the fault",
              D: "Test with line and neutral connected to earth"
            },
            answer: "B",
            explanation: "A low IR reading means there is a fault — not just a value to record. The inspector investigates further (which may then include half-splitting or additional tests). 'Record and assess' on its own leaves the duty holder with a known fault and no diagnosis."
          },
          {
            number: 21,
            prompt: "Periodic inspection and testing is carried out, so far as is reasonably practicable, for",
            options: {
              A: "Ensuring the safety of persons and that portable equipment is not damaged or deteriorated",
              B: "Ensuring the installation is under effective supervision in normal use",
              C: "The safety of persons and livestock against the effects of electric shock and burns",
              D: "Confirming the installation will only give protection against direct contact"
            },
            answer: "C",
            explanation: "BS 7671 651.1 — periodic I&T is to verify, so far as reasonably practicable, the safety of persons and livestock against electric shock and burns, protection against damage to property by fire and heat, that the installation is not damaged so as to impair safety, and that the installation is not defective."
          },
          {
            number: 22,
            prompt: "A failure to agree the extent and limitations could result in",
            options: {
              A: "The client being liable for faults on excluded circuits",
              B: "The inspector being held responsible for faults on excluded circuits",
              C: "Inspection of cables concealed within walls",
              D: "Test results being invalidated"
            },
            answer: "B",
            explanation: "If the extent and limitations aren't documented and signed off, the report appears to cover everything — and the inspector picks up liability for anything that turns out to be defective. Agreeing in writing what's in and out of scope before starting is what protects you."
          },
          {
            number: 23,
            prompt: "An electrical installation condition report assessed the installation",
            options: {
              A: "Against the inspector?s view of the installation as a duty holder",
              B: "Against the edition of BS7671 current at the time of installation",
              C: "Against the edition of BS7671 current at the time of inspection",
              D: "Against the Electricity at Work Regulations 1989"
            },
            answer: "C",
            explanation: "EICR is coded against the current edition of BS 7671 at the time of inspection. Departures from the current standard that don't constitute a danger are typically C3 (improvement recommended) — for example, old cable colours don't make the install dangerous."
          },
          {
            number: 24,
            prompt: "The extent and limitations of the report should be agreed",
            options: {
              A: "With the client before the tests commence",
              B: "Before the inspection with the client and other interested parties",
              C: "Before and during the inspection with the client and other interested parties.",
              D: "When writing the report with the client and other interested parties"
            },
            answer: "C",
            explanation: "Best practice (BPG4) — agree before, but be ready to revisit during, because real-world site conditions often force a change (e.g. you can't isolate a circuit in use). Revised limitations get added to Section D of the EICR."
          },
          {
            number: 25,
            prompt: "A covering letter may be necessary with a completed report to",
            options: {
              A: "Explain the implications of ignoring the observations with a C3",
              B: "Explain why the test results are assessed against standard values",
              C: "Explain the implications of the report with further advice and guidance",
              D: "Explain the technical terms used in BS7671 and IET GN3"
            },
            answer: "C",
            explanation: "EICRs are highly technical and clients often need plain-English context — what the codes mean, what action is recommended, timeframes, and any further investigation needed. A covering letter is the standard way to deliver that without changing the formal report."
          },
          {
            number: 26,
            prompt: "A spur off a spur on a ring final circuit can be detected using",
            options: {
              A: "A low resistance ohmmeter",
              B: "An external loop impedance test",
              C: "An insulation resistance tester",
              D: "A phase rotation tester"
            },
            answer: "A",
            explanation: "Spur-off-a-spur shows up in the R1+R2 step of the ring final test — the spurred socket reads a noticeably higher value than the in-ring sockets because current goes through the small CSA spur cable and back, not around the ring."
          },
          {
            number: 27,
            prompt: "Observations will only require further investigation if",
            options: {
              A: "A C1 or C2 has been given",
              B: "It should be recorded why a defect or departure has occurred",
              C: "It is expected further danger will be revealed",
              D: "A C1 has been given"
            },
            answer: "C",
            explanation: "FI (further investigation) is used when the inspector reasonably believes that revealing more of the installation (lifting boards, opening accessories) will expose additional danger that hasn't been fully assessed. It is not a default action for every C1/C2."
          },
          {
            number: 28,
            prompt: "When testing earth fault loop impedance",
            options: {
              A: "The protective bonding conductors should be connected?",
              B: "The protective bonding conductors should be disconnected",
              C: "A sample of 3 readings should be taken",
              D: "The test voltage should be adjusted for heating effects"
            },
            answer: "A",
            explanation: "Bonding stays connected during EFLI — you're testing the impedance the fault current will see in service, with all parallel paths in place. Disconnecting bonding to isolate Ze is only done at the origin and only after safe isolation."
          },
          {
            number: 29,
            prompt: "The periodic tests applied are based on",
            options: {
              A: "What is considered appropriate by the tester",
              B: "The requirements of GS38",
              C: "The mandatory list given in BS7671",
              D: "The mandatory list given in Guidance Note 3"
            },
            answer: "A",
            explanation: "Unlike initial verification, BS 7671 doesn't prescribe a fixed mandatory test list for periodic inspection — the inspector selects appropriate tests using sampling, taking GN3 as guidance and the installation's risk profile as the driver."
          },
          {
            number: 30,
            prompt: "Increase a conductor size will",
            options: {
              A: "Decrease circuit current",
              B: "Decrease voltage drop",
              C: "Increase resistance",
              D: "Increase voltage drop"
            },
            answer: "B",
            explanation: "Bigger CSA = lower resistance = lower voltage drop for the same current. Conductor size doesn't change the load current itself."
          },
          {
            number: 31,
            prompt: "A 34m radial circuit carrying 7 amps has conductors with a voltage drop of 29mV/A/m. What is the voltage drop?",
            options: {
              A: "6.9V",
              B: "5.9V",
              C: "8.2V",
              D: "9.2V"
            },
            answer: "A",
            explanation: "Vd = (mV/A/m × A × m) ÷ 1000 = (29 × 7 × 34) ÷ 1000 = 6.902 V."
          },
          {
            number: 32,
            prompt: "Inspection sampling may not be appropriate?",
            options: {
              A: "On ring final circuit accessories which give satisfactory inspection results",
              B: "On supplementary bonding when checking for signs of damage, overheating and ageing",
              C: "On lighting circuit accessories which give satisfactory inspection results",
              D: "On the main switch gear when checking for signs of damage, overheating and ageing"
            },
            answer: "D",
            explanation: "Main switchgear is unique and central to every fault condition — you don't sample it, you inspect 100%. Sampling is reserved for repetitive, distributed accessories where extrapolation from a representative subset is reasonable."
          },
          {
            number: 33,
            prompt: "A circuit protected by a 20 A type C circuit breaker is tested for earth fault loop impedance where the ambient temperature is 30 Degrees Celsius. Using tables from GN3, what is the maximum measured value allowed?",
            options: {
              A: "2.47 Ohms",
              B: "0.93 Ohms",
              C: "1.76 Ohms",
              D: "2.93 Ohms"
            },
            answer: "B",
            explanation: "Type C 20 A: Im = 10×In = 200 A; Zs(table) = 230/200 = 1.15 Ω at full operating temperature. GN3 ambient correction for 30 °C is 0.8 × tabulated, giving max measured ≈ 0.92 Ω. The closest published value is 0.93 Ω."
          },
          {
            number: 34,
            prompt: "Switching off a supply to an office without consultation may result in",
            options: {
              A: "Data loss",
              B: "An informed client",
              C: "Indirect contact",
              D: "Electric shock"
            },
            answer: "A",
            explanation: "Unscheduled isolation in an office crashes computers and servers — corrupted files, lost work, unhappy client. The agreed extent and limitations is exactly where this gets ironed out before the work starts."
          },
          {
            number: 35,
            prompt: "After agreeing the extent and limitations a circuit cannot be switched off because it is being used. This should be recorded on",
            options: {
              A: "The inspection schedule against the items inspected",
              B: "A letter to the client notifying of an invalidated inspection schedule",
              C: "The test result schedule in the remarks section",
              D: "The EICR in section D"
            },
            answer: "D",
            explanation: "Section D of the EICR records the extent and limitations of the inspection. A circuit that couldn't be tested for operational reasons is a limitation — record it there so the duty holder is aware that the circuit hasn't been verified."
          }
        ]
      }
    ],
    scoring: [
      { minScore: 32, range: "32–35", label: "Strong — homework standard" },
      { minScore: 25, range: "25–31", label: "Comfortable pass" },
      { minScore: 18, range: "18–24", label: "Re-read the relevant theory before re-attempting" },
      { minScore: 0, range: "< 18", label: "Re-watch the topic webinar before re-attempting" }
    ],
    priorities: [
      "C1 = danger, immediate written notification to duty holder; C2 = potentially dangerous; C3 = improvement recommended; FI = further investigation may reveal further danger.",
      "Extent and limitations agreed before AND during; recorded in EICR Section D — protects the inspector's liability.",
      "Periodic test sequence is judgement-led, not the prescribed initial-verification sequence; sample where it makes sense, but not on origin/main switchgear.",
      "Any C1, C2 or FI = Unsatisfactory. C3 alone is Satisfactory with improvement recommended."
    ]
  },
  {
    id: "condition-reporting",
    title: "Condition Reporting (EICR)",
    subtitle: "Webinar 7 — classifying and recording condition",
    description:
      "A focused exam built around Webinar 7 — Condition Reporting. Covers the EICR document set, the C1 / C2 / C3 / FI classification codes, what makes a report Satisfactory or Unsatisfactory, the inspector's on-site obligations when danger is found, and the landlord/duty-holder duties under the ESS PRS Regulations 2020.",
    format: "15 multiple-choice questions. Aim for 12+/15 (75%).",
    passMark: 12,
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
      },
      {
        id: "section-4",
        title: "Section 4 — Consolidated EICR Coding",
        questions: [
          {
            number: 13,
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
            number: 14,
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
            number: 15,
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
          }
        ]
      }
    ],
    scoring: [
      { minScore: 14, range: "14–15", label: "Strong — confident with EICR coding" },
      { minScore: 12, range: "12–13", label: "Comfortable pass" },
      { minScore: 9, range: "9–11", label: "Re-read the C1/C2/C3/FI definitions and Best-Practice Guide 4 from Electrical Safety First" },
      { minScore: 0, range: "< 9", label: "Re-watch the condition reporting webinar" }
    ],
    priorities: [
      "C1 / C2 / C3 / FI — be able to recite each definition exactly, and to apply them to real-world observations.",
      "Unsatisfactory triggers — any C1, C2 or FI; C3 alone is not Unsatisfactory.",
      "On-site response to a C1 — make safe, notify duty holder, record. Walking away from a known C1 is a personal-liability risk for the inspector."
    ]
  },
  {
    id: "am2-installation-assessment",
    title: "AM2 / AM2E — Installation Electrician EPA",
    subtitle: "Knowledge / written element",
    description:
      "Representative of the knowledge and written-response element of the AM2 / AM2E end-point assessment for the Installation & Maintenance Electrician apprenticeship standard, delivered by NET. The practical assessment is hands-on installation, inspection, testing, fault-finding and commissioning — this exam drills the underpinning knowledge those practical tasks rely on. Built against BS 7671 (18th Edition, A2:2022 + A3:2024), HSG85, GS38 and Guidance Note 3.",
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
    id: "at-formative-mixed-practice",
    title: "Mixed Topics — AT Formative Test Practice Bank",
    subtitle: "40-question end-of-theory homework drill from the AT weekend course",
    description:
      "Forty mixed-topic questions across BS 7671, building regs, periodic inspection, PAT, special locations, calculations and the EAWR — the cross-cutting end-of-theory homework that sits between the topic-specific banks.",
    format: "45 multiple-choice questions. Aim for 41+/45 (90%+) — homework standard.",
    passMark: 41,
    sections: [
      {
        id: "section-1",
        title: "Section 1 — Formative Test Practice Bank",
        questions: [
          {
            number: 1,
            prompt: "When measuring the external earth fault loop impedance (Ze) the:",
            options: {
              A: "Main switch should be on and the earthing conductor disconnected",
              B: "Main switch should be off and the earthing conductor connected",
              C: "Main switch should be off and earthing conductor disconnected",
              D: "Main switch should be on and the earthing conductor connected"
            },
            answer: "C",
            explanation: "Ze test isolates the source-side earth path. Main switch OFF (so the installation contributes nothing) and earthing conductor disconnected at the MET (so parallel bonding paths back through gas/water don't influence the reading). Re-connect immediately after the test."
          },
          {
            number: 2,
            prompt: "One factor which does not influence the initial frequency of inspection and testing of appliances is:",
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
            number: 3,
            prompt: "In Zone 1 of a room containing a bath or shower, a 230V AC wall mounted extractor fan is:",
            options: {
              A: "Not allowed under any circumstances",
              B: "Allowed providing it is rated as SELV and IP4X",
              C: "Allowed providing it is at least IPX7",
              D: "Allowed providing it is rated as SELV and IPX4"
            },
            answer: "D",
            explanation: "BS 7671 701: equipment in Zone 1 must be SELV (≤ 12 V a.c.) and at least IPX4. A 230 V mains fan in Zone 1 needs to step down via SELV; otherwise install it in Zone 2 or above the zones."
          },
          {
            number: 4,
            prompt: "The Approved Documents to the Building Regulations give:",
            options: {
              A: "Practical guidance on how to comply with the Building Regulations",
              B: "Statutory methods on ways to carry out building work",
              C: "Statutory methods on how to comply with the Building Regulations",
              D: "Ways in which to carry out electrical work in dwellings"
            },
            answer: "A",
            explanation: "The Building Regulations themselves are statutory. The Approved Documents (A through R) are non-statutory guidance — one route to compliance, but not the only one. Other equivalent solutions remain valid."
          },
          {
            number: 5,
            prompt: "Which of the following is carried out first during in-service inspection and testing?",
            options: { A: "Earth continuity tests", B: "Formal visual inspection", C: "Polarity testing", D: "Insulation testing" },
            answer: "B",
            explanation: "Always start with a thorough visual inspection — many faults (damaged cables, scorching, missing covers) are spotted before any electrical test. Tests come after the visual confirms the equipment is fit to test."
          },
          {
            number: 6,
            prompt: "The document that needs completing after spurring off a ring final circuit is;",
            options: {
              A: "An Electrical Installation Certificate",
              B: "An Electrical Installation Condition Report",
              C: "A Building Notice",
              D: "A Minor Electrical Installation Works Certificate"
            },
            answer: "D",
            explanation: "An addition to an existing circuit (no new circuit) is a Minor Works — a fused spur off a ring final fits exactly that. EIC is for new installations / new circuits; EICR is for periodic; Building Notice is a notification route, not a certificate."
          },
          {
            number: 7,
            prompt: "Residual current devices (RCD) detect",
            options: {
              A: "Overloads, short circuits and earth faults",
              B: "Earth faults only",
              C: "Short circuits and earth faults only",
              D: "Overloads and short circuits only"
            },
            answer: "B",
            explanation: "An RCD compares L and N current — when they differ (residual leakage to earth) the RCD trips. Overload and short-circuit are the job of the MCB / fuse. RCBOs combine both functions in one device."
          },
          {
            number: 8,
            prompt: " An Electrical Installation Condition Report: ",
            options: {
              A: "Is valid for 10 years",
              B: "Is proof that the original installation was correctly installed",
              C: "Must be accompanied by a Condition Report Inspection Schedule, and a Schedule of Test Results and Schedule of Circuit Details",
              D: "Is valid for 5 years"
            },
            answer: "C",
            explanation: "An EICR is only complete with the inspection schedule and schedule of test results / circuit details. Validity period is recommended in the report (e.g. 5 years for a domestic), not a fixed 5-or-10. The original install is certified by the EIC, not the EICR."
          },
          {
            number: 9,
            prompt: "The requirements for overload protection are fulfilled when",
            options: {
              A: "Ib = 15A In =20A Iz =18A",
              B: "Ib = 2.5A In =10A Iz =8A",
              C: "Ib = 20A In =15A Iz =15A",
              D: "Ib = 10A In =15A Iz =18A"
            },
            answer: "D",
            explanation: "BS 7671 433.1: Ib ≤ In ≤ Iz. Only D satisfies this (10 ≤ 15 ≤ 18). A and B both have In > Iz; C has Ib > In."
          },
          {
            number: 10,
            prompt: "The breaking capacity of a protective device must:",
            options: { A: "Not exceed PFC", B: "Exceed PEFC but not PSCC", C: "Exceed PFC", D: "Not exceed PEFC but exceed PSCC" },
            answer: "C",
            explanation: "Reg 434.5.1: the breaking capacity must not be less than the prospective fault current at the point of installation. If the PFC exceeds the breaking capacity, an upstream device must back up the protection."
          },
          {
            number: 11,
            prompt: "The following tests are to be conducted on a new installation: (1) Loop impedance, (2) Polarity, (3) Insulation Resistance, (4) Continuity of CPCs. The correct test sequence is:",
            options: { A: "3, 2, 4, 1", B: "2, 1, 4, 3", C: "1, 2, 3, 4", D: "4, 3, 2, 1" },
            answer: "D",
            explanation: "Dead first, live last: continuity of CPCs (4), insulation resistance (3), polarity (2), then earth fault loop impedance (1) live. Only one of the four options matches the GN3 dead-test order."
          },
          {
            number: 12,
            prompt: "The items that may be checked during an inspection of a standard 13A socket outlet are:",
            options: {
              A: "Connection of conductors, presence of CPC, insulation of live parts",
              B: "Connection of conductors, identification of conductors, double insulation",
              C: "Connection of conductors, identification of conductors, obstacles",
              D: "Connection of conductors, placing out of reach, presence of CPC"
            },
            answer: "A",
            explanation: "All Schedule of Inspections items relevant to a socket — terminals tight, CPC present, live parts adequately insulated. Double insulation, obstacles and out-of-reach all apply to other equipment classes/locations."
          },
          {
            number: 13,
            prompt: "The result and extent of a periodic inspection and test should be recorded and given to the",
            options: { A: "Installation designer", B: "Original installer", C: "Person ordering the inspection", D: "Representative of the distributor" },
            answer: "C",
            explanation: "Same principle as initial verification — the documentation goes to the person who ordered the work. They are the duty holder under EAWR and need the record to comply."
          },
          {
            number: 14,
            prompt: "Low voltage as defined in BS7671 has a value not exceeding",
            options: { A: "650 V AC", B: "50 V AC", C: "1000 V AC", D: "1500 V AC" },
            answer: "C",
            explanation: "BS 7671 voltage bands: ELV ≤ 50 V a.c. (Band I), LV from 50 V to 1000 V a.c. or 1500 V d.c. between conductors (Band II). Domestic 230 V sits squarely in LV."
          },
          {
            number: 15,
            prompt: "Inspection of new electrical work should be:",
            options: {
              A: "Conducted on completion",
              B: "Conducted during construction",
              C: "Conducted during construction and on completion",
              D: "Conducted during testing and on completion"
            },
            answer: "C",
            explanation: "Inspection during construction catches problems while they're easy to fix (and while cables are still visible). The completion inspection then verifies the finished installation. Both are required by BS 7671 Chapter 64."
          },
          {
            number: 16,
            prompt: "Approved Document M gives guidance on the accessibility of switches and sockets in new dwellings and other buildings. In which part of buildings does this guidance apply?",
            options: {
              A: "Only in rooms designated by the building owner",
              B: "Only in rooms where a wheelchair bound person lives",
              C: "In rooms only on the ground floor level",
              D: "In all habitable rooms"
            },
            answer: "D",
            explanation: "Part M Volume 1 (dwellings) requires accessible switch / socket heights in all habitable rooms in new dwellings — not just rooms reserved for or used by disabled persons. The point is that anyone may visit or live there in future."
          },
          {
            number: 17,
            prompt: "The effect thermal insulation has on a cable is to:",
            options: {
              A: "Increase the cable bunching",
              B: "Increase its current carrying capacity",
              C: "Decrease its voltage drop",
              D: "Decrease its current carrying capacity"
            },
            answer: "D",
            explanation: "Insulation traps the heat the cable generates — derating factor Ci is applied (BS 7671 523.9 / Table 4B1). The cable's safe Iz drops; design current must drop to match, or a larger CSA used."
          },
          {
            number: 18,
            prompt: "A member of a competent persons scheme is able to carry out:",
            options: {
              A: "Domestic electrical work and act as an intermediary so that someone else can certify it",
              B: "Notifiable domestic electrical work and request building control to certify it",
              C: "Notifiable domestic electrical work and certify it without involving building control themselves",
              D: "Notifiable domestic electrical work without having any need to certify it"
            },
            answer: "C",
            explanation: "The whole point of CPS membership is post-completion self-certification — the member issues a Building Regulations compliance certificate via the scheme, no prior or concurrent involvement of LABC required."
          },
          {
            number: 19,
            prompt: "A two way lighting circuit would be required to have strappers identified:",
            options: { A: "As neutral conductors", B: "Green / yellow", C: "As line conductors", D: "Black" },
            answer: "C",
            explanation: "Strappers between two-way switches carry switched line, so they're identified as line conductors — usually brown sleeving on each end where the cable colours don't match."
          },
          {
            number: 20,
            prompt: "The minimum extraction rate for a bathroom is:",
            options: { A: "60 litres per second", B: "6 litres per second", C: "15 litres per second", D: "30 litres per second" },
            answer: "C",
            explanation: "Part F Table 5.1a — intermittent extract: bathroom 15 L/s. Kitchens and utility rooms have higher rates because of cooking moisture and laundry."
          },
          {
            number: 21,
            prompt: "Overcurrent protection for lighting circuits in domestic installations is",
            options: {
              A: "Dependant on the design current of the circuit",
              B: "Always 6A",
              C: "Always 10A",
              D: "Dependant on the supply voltage"
            },
            answer: "A",
            explanation: "There's no fixed lighting-circuit fuse rating — design current Ib drives the choice (BS 7671 433). Common ratings are 6 A or 10 A but a heavily loaded circuit may need 16 A; a small one may use 5 A."
          },
          {
            number: 22,
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
            number: 23,
            prompt: " Following a test of earth fault loop impedance, the results are compared to the values given in BS7671. Which of the following statements is true? ",
            options: {
              A: "The tabulated or design value should not be less than 80% of the measured value",
              B: "The measured value should not be less than 80% of the tabulated ot design value",
              C: "The tabulated or design value should not exceed 80% of the measured value",
              D: "The measured value should not exceed 80% of the tabulated or design value"
            },
            answer: "D",
            explanation: "GN3 'rule of thumb' — measured Zs (cold conductors) ≤ 80% of the BS 7671 tabulated Zs (which assumes warm conductors). The 0.8 factor accounts for the resistance increase as the cable heats up under fault current."
          },
          {
            number: 24,
            prompt: "During a periodic inspection and test on a three phase installation, a Prospective Fault Current of 3.6kA is measured between L1 and Earth, and 4.2kA between L1 and Neutral; the value of PFC to be recorded would be:",
            options: { A: "7.8kA", B: "3.6kA", C: "8.4kA", D: "4.2kA" },
            answer: "C",
            explanation: "GN3 cautious method — take the higher single-phase PFC (4.2 kA between L1 and N) and multiply by 2 to estimate three-phase short-circuit fault current: 4.2 × 2 = 8.4 kA. The recorded design figure must accommodate the worst case."
          },
          {
            number: 25,
            prompt: "The depth of a notch in a joist should be no more than the joist,",
            options: { A: "Depth x 0.0125", B: "Depth x 1.25", C: "Depth x 0.125", D: "Width x 0.125" },
            answer: "C",
            explanation: "Approved Document A — notch depth ≤ 0.125 × joist depth, located between 0.07 and 0.25 of the span from the support, in the top edge only. Drilled holes are limited to ≤ 0.25 × depth on the neutral axis."
          },
          {
            number: 26,
            prompt: "The correct formula for calculating total earth fault loop impedance is:",
            options: { A: "Zs = Ze - (R1 + R2)", B: "Zs = Ze + (R1 +R2)", C: "Zs = Ze + (R1 / R2)", D: "Ze = Zs + (R1 + R2)" },
            answer: "B",
            explanation: "Zs is the total loop: external (Ze) PLUS the line and CPC of the final circuit (R1 + R2). R1 + R2 are in series, not in parallel — they're the same fault path one after the other."
          },
          {
            number: 27,
            prompt: "The prevention of indirect energising of a final circuit intended to be isolated must be achieved by",
            options: {
              A: "Separation of all final circuits from each other",
              B: "Ensuring all devices are suitably labelled",
              C: "Installing a 100 mA RCD protected consumer unit",
              D: "Displaying a suitable DANGER notice"
            },
            answer: "A",
            explanation: "Indirect energising = an isolated circuit becoming live again via a shared neutral, back-fed source, or interconnected wiring. Separation of circuits at the design stage prevents the path existing in the first place."
          },
          {
            number: 28,
            prompt: "The horizontal top surface of a barrier or enclosure which is readily accessible must provide a degree of protection of at least",
            options: { A: "IP 55", B: "IP XXB or IP 2X", C: "IP X4", D: "IP XXD or IP 4X" },
            answer: "D",
            explanation: "BS 7671 416.2.2: horizontal top surfaces (where objects might be placed and fall in) need IPXXD / IP4X — protection against a 1 mm wire. Vertical surfaces need only IPXXB / IP2X (finger-safe)."
          },
          {
            number: 29,
            prompt: "Earth fault loop impedances are measured / calculated to ensure that:",
            options: {
              A: "The neutral conductor is continuous and of the correct size",
              B: "Protective devices will operate in the required time",
              C: "The correct fuse has been installed",
              D: "The RCD trip mechanism operates"
            },
            answer: "B",
            explanation: "Zs determines fault current magnitude; fault current determines disconnection time on the device's tripping curve. Verifying Zs is small enough is verifying ADS will operate within the BS 7671 maximum disconnection time."
          },
          {
            number: 30,
            prompt: "A shower is rated at 8kW and connected to a 230V supply; what is nearest full load current?",
            options: { A: "355 amps", B: "3.5 amps", C: "35 ohms", D: "35 amps" },
            answer: "D",
            explanation: "I = P / V = 8000 / 230 = 34.78 A ≈ 35 A. Pure resistive load, so no power factor correction. Hence the standard 40 A or 50 A breaker for an 8 kW shower."
          },
          {
            number: 31,
            prompt: "Approved Document B:",
            options: {
              A: "Gives guidance on the position of smoke and heat alarms",
              B: "Gives guidance on the minimum depth of buried cables outdoors",
              C: "Gives guidance on the minimum size of extractor fans",
              D: "Gives guidance on where josts can be drilled"
            },
            answer: "A",
            explanation: "Part B (Fire safety) — including the Volume 1 dwellings guidance on smoke and heat alarm coverage. Part F covers extract; Part A covers structural drilling/notching of joists; outdoor cable depth is a BS 7671 / OSG matter."
          },
          {
            number: 32,
            prompt: "A flat twin cable is to be buried 20mm into a living room wall without mechanical protection, it should be:",
            options: {
              A: "Given RCD protection.",
              B: "Installed anywhere and be buried to 10mm",
              C: "Installed in a safe zone and have additional protection of a 30mA RCD",
              D: "Installed in mini trunking and be in the safe zone"
            },
            answer: "C",
            explanation: "BS 7671 522.6 — buried cables less than 50 mm deep without mechanical protection must be in a safe zone AND have 30 mA RCD additional protection. A safe zone alone isn't enough at this depth."
          },
          {
            number: 33,
            prompt: "Transformers for ELV lighting circuits can cause inrush currents that will operate a type B circuit breaker. This may be overcome by:",
            options: {
              A: "Changing the circuit breaker to a type C",
              B: "Increasing the size of the CPC",
              C: "Changing the size of the lighting circuit cable",
              D: "Increasing the current rating of the circuit breaker to 20A"
            },
            answer: "A",
            explanation: "Type B trips at 3–5×In, Type C at 5–10×In. Inductive loads (transformers, motors) have brief inrush currents up to 10–12× normal — Type C absorbs this without nuisance tripping. Bigger CPC or cable doesn't change inrush behaviour."
          },
          {
            number: 34,
            prompt: "Before measurement, using a low resistance ohmmeter, the leads resistance should be:",
            options: {
              A: "Ignored",
              B: "Nulled or recorded and subtracted from the main instrument reading",
              C: "No less than 0.5 ohms",
              D: "Doubled"
            },
            answer: "B",
            explanation: "Test leads have measurable resistance (often 0.05–0.1 Ω) which on its own can be a significant part of a low R1+R2 reading. Modern instruments null automatically; older ones require you to record lead R and subtract."
          },
          {
            number: 35,
            prompt: "The overall condition of an installation during a periodic inspection and test could be recorded as satisfactory if:",
            options: {
              A: "There is only one C1 observation",
              B: "There is only one C2 observation",
              C: "There is only one C3 present",
              D: "There is either a C1 or C2 observation, but the customer agrees to get the remedial work done within one week"
            },
            answer: "C",
            explanation: "Any C1 or C2 makes the report Unsatisfactory — remedial work and re-inspection cannot retroactively change that. C3 is improvement recommended only and does not affect the overall result. FI also makes it Unsatisfactory."
          },
          {
            number: 36,
            prompt: "Under what circumstances may a metallic water supply pipe be used as an earth electrode",
            options: {
              A: "Not under any circumstances",
              B: "If it is non-metallic",
              C: "If it is a water utility supply pipe",
              D: "If it has precautions against its removal"
            },
            answer: "A",
            explanation: "Since the early 1980s, water-utility incoming pipes cannot be relied on as the means of earthing — utilities are increasingly switching to non-metallic pipework, breaking the earth path silently. Bond it (yes); use it as the electrode (no)."
          },
          {
            number: 37,
            prompt: "In a bathroom, where the space below the bathtub or shower basin is accessible without the use of a tool, the space is classed as",
            options: { A: "outside the zones", B: "Zone 0", C: "Zone 2", D: "Zone 1" },
            answer: "D",
            explanation: "BS 7671 701: the space under the bath / shower basin is classified as Zone 1 if accessible without a tool. If only accessible with a tool (e.g. bath panel screwed on), it is excluded from any zone."
          },
          {
            number: 38,
            prompt: "An insulation resistance test is conducted on an insulation to ensure that;",
            options: {
              A: "Circuit conductor resistances are not too high",
              B: "The system works efficiently",
              C: "The cable insulation is of the correct material",
              D: "There are no connections between the live conductors or between the live conductors and earth"
            },
            answer: "D",
            explanation: "IR test verifies the insulation is intact between live conductors and between live conductors and earth — anything below 1 MΩ (LV) suggests a leakage path that shouldn't exist. The other options are not what IR measures."
          },
          {
            number: 39,
            prompt: "Socket outlets should? ",
            options: { A: "Only be switched if used outside", B: "Be switched or unswitched", C: "Always be switched", D: "Only switched if inaccessible" },
            answer: "B",
            explanation: "BS 7671 doesn't mandate switched sockets — both switched and unswitched are acceptable. Switched is more common in UK domestic for convenience and child safety, but unswitched (continental style) is permitted."
          },
          {
            number: 40,
            prompt: "A protective conductor connecting the main earthing terminal of an installation to an earth electrode or other means of earthing is",
            options: {
              A: "A main protective bonding conductor",
              B: "An earth continuity conductor",
              C: "A circuit protective conductor",
              D: "The earthing conductor"
            },
            answer: "D",
            explanation: "Earthing conductor: MET → means of earthing (electrode for TT, supply earth for TN). Main protective bonding: MET → extraneous parts (gas, water, structural steel). CPC: distribution board → individual circuit accessory."
          }
        ]
      },
      {
        id: "section-2",
        title: "Section 2 — Consolidated Health, Safety & Design",
        questions: [
          {
            number: 41,
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
            number: 42,
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
            number: 43,
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
            number: 44,
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
          },
          {
            number: 45,
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
          }
        ]
      }
    ],
    scoring: [
      { minScore: 41, range: "41–45", label: "Strong — homework standard" },
      { minScore: 32, range: "32–40", label: "Comfortable pass" },
      { minScore: 23, range: "23–31", label: "Re-watch the relevant theory webinars and re-attempt" },
      { minScore: 0, range: "< 23", label: "Re-do all topic webinars before re-attempting" }
    ],
    priorities: [
      "Bathroom zones: Zone 0 = inside; Zone 1 = above bath / shower up to 2.25 m (and under bath if accessible without tool); Zone 2 = 0.6 m beyond Zone 1.",
      "EICR overall: any C1 / C2 / FI = Unsatisfactory. C3 alone = Satisfactory with improvement recommended.",
      "Test sequence: dead first (continuity → IR → polarity → Ze) then live. Measured Zs ≤ 80% tabulated to allow for warm conductors."
    ]
  }
];

export function countQuestions(exam: Exam): number {
  return exam.sections.reduce((sum, section) => sum + section.questions.length, 0);
}

export function getScoringBand(exam: Exam, correctCount: number) {
  return exam.scoring.find((band) => correctCount >= band.minScore) ?? exam.scoring[exam.scoring.length - 1];
}
