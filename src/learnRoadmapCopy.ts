import type { LearnCopy } from "./learnRoadmap";

// Reading copy for every Learn roadmap node, keyed by node id (see learnRoadmap.ts).
// Figures are kept consistent with the Notes (cheatSheetSections.ts).
export const LEARN_COPY: Record<string, LearnCopy> = {
  roadmap: {
    summary: "From your first day on site to a Gold Card: the science, installation, regulations and testing a UK electrician needs, in the order you’ll meet them.",
    points: []
  },

  // Stage 1: Getting started
  "stage-start": {
    summary: "How to become an electrician, how to stay safe on site, and how to make a circuit dead and keep it that way.",
    points: []
  },
  route: {
    summary: "There are several ways to become a fully qualified electrician. In England and Wales they all end the same way: a Level 3 qualification proven on site, then a version of the AM2 practical assessment.",
    points: [
      "Pick the route that matches where you are now: new entrant, career changer or experienced worker.",
      "Every route combines knowledge, tested by exams, with competence proven on real installations.",
      "On-site competence is proven with a portfolio of evidence, usually as part of a Level 3 NVQ or apprenticeship.",
      "The AM2 is an independent practical assessment at the end of each route that confirms you can work safely and competently.",
      "Routes differ mainly in how you get site experience: through an employer from day one, or by finding it later."
    ],
    watchFor: [
      "Be wary of fast-track courses promising full qualification in weeks. Check they lead to a Level 3 NVQ and the AM2."
    ]
  },
  "route-apprenticeship": {
    summary: "The usual route for school leavers and new entrants: paid work with an employer, study alongside it, and an end-point assessment to finish.",
    points: [
      "You need an employer willing to take you on before the apprenticeship can start.",
      "Your time is split between supervised site work and off-the-job study.",
      "You build a record of site evidence as you go, signed off by your supervisor.",
      "The end-point assessment (EPA) is the AM2S, the apprentice version of the AM2 practical."
    ],
    watchFor: [
      "Keep your site evidence up to date as you go. Rebuilding it at the end is slow and hard to verify."
    ]
  },
  "route-adult": {
    summary: "For career changers: study the Level 2 and Level 3 diplomas at a training centre, then find site work to complete an NVQ and the AM2.",
    points: [
      "The diplomas cover theory and workshop practice, tested by exams and practical assignments.",
      "Many adult courses run part-time or in the evenings, so you can study while still working.",
      "Finding work as an electrician's mate or improver (a trainee working under supervision) is often the hardest step, so start early.",
      "Take the 18th Edition (BS 7671 wiring regulations) qualification early; employers and later courses expect it."
    ],
    watchFor: [
      "Finishing the diplomas without site experience leaves you part-qualified. Plan how you'll get on-site work."
    ]
  },
  "route-experienced": {
    summary: "For people who have worked in the trade for years without formal qualifications. You prove existing competence with evidence instead of retraining from scratch.",
    points: [
      "You need a substantial record of electrical work you've carried out yourself.",
      "An initial assessment checks your experience and flags any gaps to cover first.",
      "Your knowledge and skills are judged against the same standard as an apprentice's.",
      "It ends with the AM2E, the experienced worker version of the AM2 practical assessment."
    ],
    watchFor: [
      "This route isn't for beginners. Without years of varied site work you won't have the evidence needed."
    ]
  },
  "route-qualified": {
    summary: "In the UK trade, a fully qualified installation electrician usually means a Level 3 NVQ or apprenticeship plus a passed AM2. That's what the ECS Gold Card recognises.",
    points: [
      "There's no single legal licence for electricians; competence is shown through qualifications and cards.",
      "The Gold Card also needs a current BS 7671 qualification and a passed ECS health and safety assessment.",
      "To self-certify notifiable work in England (such as a new circuit or consumer unit change), you must join a competent person scheme.",
      "Inspection and testing qualifications such as the 2391 are a further step, usually expected for periodic inspections (EICRs)."
    ],
    watchFor: [
      "Holding the 18th Edition alone doesn't make you an electrician. It's a regulations qualification only."
    ]
  },
  "site-safety": {
    summary: "Before any electrical work, know the law, plan the job safely and spot the hazards. Every route expects this, and the ECS card needs a safety assessment.",
    points: [
      "Your site induction covers the site's rules, hazards, welfare and emergency arrangements. Attend it before you start work.",
      "Every job should start with a risk assessment and a method statement.",
      "Falls from height are a leading cause of deaths on construction sites.",
      "Keep your work area tidy: clear walkways and pick up cable offcuts, tools and packaging as you go.",
      "Report accidents and near misses on site; serious injuries and dangerous occurrences must be reported to the HSE under RIDDOR."
    ],
    watchFor: [
      "Treat every circuit as live until you've proved it dead yourself.",
      "If site conditions differ from the plan, stop and report it. Don't improvise around a hazard."
    ]
  },
  "safety-law": {
    summary: "The main law is the Health and Safety at Work etc. Act 1974, backed by regulations such as the Electricity at Work Regulations 1989 that set specific duties.",
    points: [
      "HSWA sets general duties: employers protect workers and the public; employees take reasonable care and cooperate.",
      "EAWR 1989 is law made under HSWA, so breaking it is a criminal offence.",
      "BS 7671 isn't law itself, but meeting it is widely used to show EAWR compliance.",
      "Part P of the Building Regulations applies to electrical work in dwellings in England."
    ],
    watchFor: [
      "EAWR Regulation 14: work live only if dead working is unreasonable, live working is reasonable and suitable precautions are taken.",
      "Employees have legal duties too. Being told to do unsafe work is no defence."
    ]
  },
  "safety-rams": {
    summary: "A risk assessment identifies hazards and how to control them; a method statement sets out the safe, step-by-step way to do the job. Together they form the RAMS.",
    points: [
      "A hazard is anything that can cause harm. Risk is how likely and how serious that harm is.",
      "Control hazards in order: eliminate, substitute, engineering controls, administrative controls (such as permits and signs), then PPE.",
      "Employers with five or more employees must record the significant findings.",
      "Read the RAMS and sign the briefing before starting, and review them if the job changes."
    ],
    watchFor: [
      "Generic RAMS copied from another job won't cover this site's hazards. Check they fit before you start."
    ]
  },
  "safety-ppe": {
    summary: "PPE protects you from the hazards left after other controls. Know the common hazards electricians meet on site and the PPE that suits each one.",
    points: [
      "Typical site PPE is safety boots, hard hat, hi-vis, eye protection and gloves suited to the task.",
      "Asbestos may be present in older buildings. Stop work and report anything you suspect.",
      "The COSHH Regulations cover hazardous substances used on site, such as dusts, solvents and adhesives.",
      "Employers must provide PPE free of charge; you must wear it and report any damage."
    ],
    watchFor: [
      "Damaged or badly fitting PPE doesn't protect you. Check it before each use."
    ]
  },
  "safety-height": {
    summary: "The Work at Height Regulations 2005 say avoid work at height where you can; otherwise plan it, supervise it and use suitable equipment.",
    points: [
      "Follow the order: avoid work at height, prevent falls, then minimise the distance and consequences of a fall.",
      "Ladders and stepladders suit short, light work only; use a platform or tower for longer jobs.",
      "Set a leaning ladder at about 1 in 4: one unit out for every four units up.",
      "Check access equipment before use. Towers must be put up by someone trained to do it."
    ],
    watchFor: [
      "Many falls happen from low heights. A quick job off a stepladder still needs planning.",
      "Keep three points of contact on a ladder and never overreach."
    ]
  },
  "safety-ecs-exam": {
    summary: "Sixteen full ECS mocks and eleven topic tests on site health and safety, scored against an 86% pass threshold; use them before you sit the ECS assessment.",
    points: []
  },
  "safe-isolation": {
    summary: "Safe isolation makes a circuit dead and keeps it dead while you work. Follow a fixed sequence: identify, isolate, lock off, label, then prove dead with a tester you've proved works.",
    points: [
      "Get permission from the person in control of the installation before switching anything off.",
      "Find every source of supply, including PV, battery storage, UPS and generators.",
      "Use an approved voltage indicator (AVI) with GS38-compliant leads to prove dead.",
      "Prove dead at the point of work, not just at the distribution board.",
      "Safe isolation is assessed in the AM2, so practise the full sequence until it's routine."
    ],
    watchFor: [
      "Switching off isn't enough on its own. Secure the device in the off position before you prove dead.",
      "Neutrals can be shared with or borrowed from another circuit, so a dead line conductor doesn't guarantee a dead neutral."
    ]
  },
  "isolation-gs38": {
    summary: "Use an approved voltage indicator (AVI) to BS EN 61243 with leads and probes that meet HSE GS38, so the test itself can't cause a shock or flashover.",
    points: [
      "GS38 probes have finger guards, fused or current-limited leads and no more than 4 mm of exposed metal tip.",
      "Choose a tester with a measurement category (CAT II, III or IV) suited to where it's used (GN3 Table 1.1).",
      "Non-contact voltage detectors can warn of voltage but must never be used to prove dead.",
      "Check leads, probes and casing for damage before every use."
    ],
    watchFor: [
      "A multimeter on the wrong range can give a false dead reading. Use a dedicated AVI."
    ]
  },
  "isolation-devices": {
    summary: "An isolating device cuts the supply to a circuit or installation so work can be done safely. It must be secured off so no one can switch it back on.",
    points: [
      "Common isolating devices include main switches, circuit breakers, switch-disconnectors and removable fuses.",
      "A withdrawn fuse should stay with you, and the empty carrier or holder should be locked where possible.",
      "Functional switches, such as light switches and thermostats, aren't isolators."
    ],
    watchFor: [
      "Isolating one circuit can leave others in the same enclosure live. Treat the board as live."
    ]
  },
  "isolation-lock-off": {
    summary: "Locking off and labelling stop anyone switching the circuit back on while you work on it.",
    points: [
      "Use a lock-off device made for that breaker or switch, fitted with your own padlock.",
      "Keep the only key on you for the whole job.",
      "Fix a warning notice with your name, contact details and the work being done.",
      "When several people are working, each fits their own padlock to a multi-lock hasp, a clip that takes several locks."
    ],
    watchFor: [
      "Tape over a breaker or a note on the board isn't lock-off. Anyone can still switch it on."
    ]
  },
  "isolation-prove": {
    summary: "Prove the tester on a known live source or proving unit, test the isolated circuit dead, then prove the tester again.",
    points: [
      "A proving unit is a small battery-powered device that gives a known voltage when no live source is nearby.",
      "Single-phase: test line–neutral, line–earth and neutral–earth, so three tests.",
      "Three-phase: test between each pair of lines, each line to neutral and to earth, and neutral to earth, so ten tests.",
      "Discharge any stored energy, such as capacitors, before testing."
    ],
    watchFor: [
      "Skipping the second proof is a classic mistake. A tester that failed mid-test would still read dead."
    ]
  },

  // Stage 2: Electrical science
  "stage-science": {
    summary: "The physics behind every circuit: Ohm’s law, series and parallel, AC theory, three-phase and the magnetism that drives machines.",
    points: []
  },
  "ohms-law": {
    summary: "Voltage pushes current through resistance, and V = I × R ties the three together. Power, P = V × I, shows how fast energy is used and gives you load currents.",
    points: [
      "V = I × R rearranges to I = V ÷ R or R = V ÷ I; cover the value you want on the triangle.",
      "Power links to the same values: rearrange P = V × I to I = P ÷ V to find a load’s current.",
      "At 230 V, 1 kW draws about 4.35 A, a quick check on any load current.",
      "Convert to base units (V, A, Ω, W) before you calculate."
    ],
    watchFor: [
      "Mixing kW with W, or mA with A, in one sum puts the answer out by a factor of 1000.",
      "Don’t confuse the two triangles: Ohm’s law is V = I × R, power is P = V × I."
    ]
  },
  "science-units": {
    summary: "SI units give each quantity a standard name and symbol, and prefixes scale them so very large and very small values stay readable.",
    points: [
      "Current is in amperes (A), voltage in volts (V), resistance in ohms (Ω) and power in watts (W).",
      "Prefixes: µ (micro) is a millionth, m (milli) a thousandth, k (kilo) a thousand and M (mega) a million.",
      "Energy is in joules (J); 1 W is 1 J per second and 1 kWh is 3.6 million joules.",
      "Worked conversions: 0.5 MΩ = 500 kΩ, 30 mA = 0.03 A and 2.5 kW = 2500 W."
    ],
    watchFor: [
      "Capital M is mega and small m is milli: 1 MΩ is a billion times larger than 1 mΩ."
    ]
  },
  "science-vir": {
    summary: "Voltage is the electrical pressure that drives current, current is the flow of charge, and resistance opposes that flow.",
    points: [
      "Voltage is potential difference, measured across a component with the meter in parallel.",
      "Current is the rate of flow of charge, measured in series: 1 A is 1 coulomb per second.",
      "Resistance depends on the conductor’s material, length, cross-sectional area and temperature.",
      "With resistance fixed, current rises in direct proportion to voltage."
    ],
    watchFor: [
      "Never put a multimeter on its current range across a supply; it acts as a short circuit."
    ]
  },
  "science-power": {
    summary: "Power is how fast energy is converted, measured in watts. Energy is power multiplied by time, and that is what the electricity meter records.",
    points: [
      "For a resistive load, P = V × I, P = I²R and P = V²/R all give the same answer.",
      "Energy (kWh) = power (kW) × time (h); a 3 kW heater on for 2 hours uses 6 kWh.",
      "Heating in a conductor is I²R, so doubling the current gives four times the heat.",
      "Efficiency = output power ÷ input power, usually stated as a percentage."
    ],
    watchFor: [
      "Use hours for kWh but seconds for joules; mixing the two is a common exam error."
    ]
  },
  "science-resistivity": {
    summary: "Resistivity (ρ) is how strongly a material resists current, measured on a standard-sized sample. Resistance rises with a conductor’s length and falls as its area increases.",
    points: [
      "R = ρL ÷ A: double the length and resistance doubles; double the cross-sectional area (CSA) and it halves.",
      "Copper at 20 °C: 2.5 mm² is 7.41 mΩ/m and 1.5 mm² is 12.10 mΩ/m.",
      "Copper’s resistance rises with temperature; estimate hot PVC cable at about 1.2 × the 20 °C value.",
      "Expected R1 + R2 (line plus circuit protective conductor, CPC) = (line mΩ/m + CPC mΩ/m) × length ÷ 1000."
    ],
    watchFor: [
      "In R = ρL ÷ A, ρ in Ω·m needs length in m and area in m², not mm².",
      "Table values are in mΩ/m; divide by 1000 to get the answer in ohms."
    ]
  },
  "dc-circuits": {
    summary: "Loads can be connected in series (one after another), in parallel (each across the supply) or a mix of both. Each layout shares voltage and current differently.",
    points: [
      "Series has one path: the same current flows everywhere and the voltages add up to the supply.",
      "Parallel has several paths: each branch gets the same voltage and the currents add up.",
      "Adding loads in series raises total resistance; adding them in parallel lowers it.",
      "Find total resistance first, then total current with I = V ÷ R.",
      "Sockets and lights on a final circuit are connected in parallel, so each one gets the full supply voltage."
    ],
    watchFor: [
      "A parallel group’s total resistance is always below its smallest branch; a bigger answer means a mistake."
    ]
  },
  "circuits-series": {
    summary: "A series circuit has only one path, so the same current flows through every component and the supply voltage is shared between them.",
    points: [
      "Total resistance is the sum: RT (total resistance) = R1 + R2 + R3.",
      "Each voltage drop is I × R, and the drops add up to the supply voltage.",
      "The largest resistance takes the largest share of the voltage.",
      "One open circuit stops current everywhere in the loop."
    ],
    watchFor: [
      "Current is not used up along a series circuit; it is the same at every point."
    ]
  },
  "circuits-mixed": {
    summary: "Mixed circuits combine series and parallel parts. Reduce them step by step to one equivalent resistance, then work back out to each part.",
    points: [
      "Reduce each parallel group to a single resistance, then add it to the series parts.",
      "Find total current with I = V ÷ RT, then the voltage across each section.",
      "Every branch of a parallel group has the same voltage across it; divide it by each branch’s resistance to get its current.",
      "Check: the voltage drops along the series path should add up to the supply."
    ],
    watchFor: [
      "Only add resistors directly when they are truly in series; a resistor feeding a parallel group adds to the group total, not to one branch."
    ]
  },
  "circuits-parallel": {
    summary: "In a parallel circuit each branch connects straight across the supply, so every branch gets the full voltage and the branch currents add up.",
    points: [
      "Total resistance: 1/RT = 1/R1 + 1/R2 + 1/R3.",
      "For two resistors, RT = (R1 × R2) ÷ (R1 + R2), product over sum.",
      "Equal resistors in parallel: RT = one resistor’s value ÷ how many there are.",
      "Each branch current is V ÷ that branch’s resistance; the total is the sum of the branches."
    ],
    watchFor: [
      "After adding the reciprocals, flip the result to get RT; forgetting this step is the classic error."
    ]
  },
  "ac-theory": {
    summary: "Mains is alternating current, completing 50 cycles every second. In AC circuits, inductance and capacitance oppose current alongside resistance.",
    points: [
      "UK mains is 230 V at 50 Hz, and 230 V is the RMS value, not the peak.",
      "Inductors and capacitors oppose AC with reactance, which changes with frequency.",
      "Impedance (Z) is the total opposition to AC, in ohms, and Ohm’s law becomes V = I × Z.",
      "Power factor, from 0 to 1, shows how much of the apparent power supplied (VA) is true power doing useful work (W)."
    ],
    watchFor: [
      "Ohm’s law with R alone gives the wrong current where coils or capacitors are present; use impedance (Z)."
    ]
  },
  "ac-sine": {
    summary: "AC rises and falls as a smooth sine wave. Its RMS (root mean square) value gives the same heating effect as a DC supply of the same voltage.",
    points: [
      "Frequency is cycles per second in hertz; one cycle takes T = 1 ÷ f, which is 20 ms at 50 Hz.",
      "Peak = RMS ÷ 0.707 (or RMS × 1.414), so 230 V RMS peaks at about 325 V.",
      "The average over a half cycle is 0.637 × peak.",
      "Meters and nameplates show RMS values unless they say otherwise."
    ],
    watchFor: [
      "Don’t confuse peak (about 325 V) with peak-to-peak (about 650 V) on a 230 V supply."
    ]
  },
  "ac-lc": {
    summary: "Inductors store energy in a magnetic field and capacitors in an electric field. Both oppose AC through reactance, measured in ohms.",
    points: [
      "Inductive reactance XL = 2πfL, so it rises as frequency rises.",
      "Capacitive reactance XC = 1 ÷ (2πfC), so it falls as frequency rises.",
      "Inductance is measured in henrys (H) and capacitance in farads (F), usually µF.",
      "In an inductor current lags voltage; in a capacitor current leads voltage."
    ],
    watchFor: [
      "Remember CIVIL: in a capacitor (C), current (I) leads voltage (V); voltage (V) leads current (I) in an inductor (L).",
      "Capacitors can stay charged after isolation; discharge them before handling."
    ]
  },
  "ac-impedance": {
    summary: "Impedance is the total opposition to alternating current, combining resistance and reactance. It is measured in ohms and used in V = I × Z.",
    points: [
      "With resistance and reactance in series, Z = √(R² + X²), from the impedance triangle.",
      "When inductance and capacitance are both present, net reactance is XL − XC.",
      "Example: R = 3 Ω and X = 4 Ω in series give Z = √(9 + 16) = 5 Ω.",
      "Earth fault loop impedance (Zs) applies the same idea to the whole fault path."
    ],
    watchFor: [
      "R and X act at 90° to each other, so combine them with Z = √(R² + X²), not by simple addition."
    ]
  },
  "ac-power-factor": {
    summary: "Power factor compares true power, which does useful work, with apparent power, which the supply must deliver. It ranges from 0 to 1.",
    points: [
      "True power (W) = V × I × cos φ; apparent power (VA) = V × I.",
      "Power factor = true power ÷ apparent power = cos φ, the cosine of the phase angle.",
      "Reactive power is measured in VAr and does no useful work.",
      "Inductive loads such as motors give a lagging power factor; capacitors are fitted to correct it."
    ],
    watchFor: [
      "A poor power factor draws more current for the same useful power, so cables and devices carry more."
    ]
  },
  "three-phase": {
    summary: "Three-phase uses three lines whose voltages are 120° apart. It delivers more power through smaller conductors and gives motors a rotating field.",
    points: [
      "Line to neutral is 230 V; line to line is 400 V (230 × √3).",
      "Colours: L1 brown, L2 black, L3 grey, neutral blue.",
      "Domestic supplies are normally up to 100 A single-phase; demand above that points to three-phase.",
      "Phase sequence must be L1-L2-L3 throughout; swapping any two lines reverses rotation."
    ],
    watchFor: [
      "On older installations blue was a line (L3) and black was neutral; never assume blue is neutral.",
      "Proving dead on three-phase takes 10 tests: each line-to-line pair, each line to N and to E, then N to E."
    ]
  },
  "three-phase-star-delta": {
    summary: "Star and delta are the two ways to connect three windings or loads. Star has a common point that can provide a neutral; delta has none.",
    points: [
      "Star joins one end of each winding at the star point, which provides the neutral at a distribution transformer.",
      "Delta connects the windings in a closed triangle with no neutral, common for motors.",
      "A star supply gives both 230 V and 400 V; delta gives line voltage only.",
      "Star–delta starters start a motor in star to cut starting current, then switch it to delta."
    ],
    watchFor: [
      "Star–delta starting also cuts starting torque, so it suits motors that start lightly loaded."
    ]
  },
  "three-phase-line-phase": {
    summary: "Line values are measured between two lines; phase values are across one winding or load. How they relate depends on star or delta.",
    points: [
      "Star: line voltage VL = √3 × phase voltage VP (400 V = 230 V × √3), and line current IL = phase current IP.",
      "Delta: VL = VP and IL = √3 × IP.",
      "√3 is about 1.732; in star, divide the line voltage by it to get the phase voltage: 400 ÷ 1.732 ≈ 230 V.",
      "Balanced three-phase power: P = √3 × VL × IL × cos φ, or 3 × VP × IP × cos φ."
    ],
    watchFor: [
      "The √3 power formula needs the line voltage, 400 V, not 230 V."
    ]
  },
  "three-phase-balance": {
    summary: "A balanced load draws equal current on every line. When loads differ, the line currents become unequal and the out-of-balance current flows in the neutral.",
    points: [
      "In a balanced star system the line currents cancel and neutral current is close to zero.",
      "Spread single-phase circuits evenly across L1, L2 and L3 to keep neutral current down.",
      "Triplen harmonics (3rd, 9th…) from electronic loads add in the neutral rather than cancel, even with balanced lines.",
      "Three-phase motors are balanced loads and need no neutral."
    ],
    watchFor: [
      "A lost neutral on an unbalanced supply shifts the voltages, so some loads can see well over 230 V."
    ]
  },
  machines: {
    summary: "A current in a conductor creates a magnetic field, and a changing field induces a voltage. Transformers, motors and generators all rely on this link.",
    points: [
      "A current-carrying conductor or coil sets up a magnetic field around it.",
      "A changing magnetic field induces a voltage in a nearby conductor (electromagnetic induction).",
      "Transformers use induction to change AC voltage; they do not work on steady DC.",
      "Motors turn electrical energy into movement; generators turn movement into electrical energy."
    ],
    watchFor: [
      "Motors draw several times full-load current when starting; protection must allow for it.",
      "Switching off a coil or motor can cause a high voltage spike, as the collapsing field induces a voltage in the coil itself."
    ]
  },
  "machines-electromagnetism": {
    summary: "Electromagnetism covers the magnetic field around a current and the voltage induced by a changing field. It underpins relays, contactors and motors.",
    points: [
      "The right-hand grip rule gives the direction of the field around a conductor or coil.",
      "Field strength rises with more turns, more current and an iron core.",
      "Force on a conductor is F = B × I × L, where B is flux density in teslas; Fleming’s left-hand rule gives its direction.",
      "Induced voltage depends on how fast the flux changes; Fleming’s right-hand rule gives its direction."
    ],
    watchFor: [
      "Left hand for motors, right hand for generators; mixing them up is a common exam slip."
    ]
  },
  "machines-transformers": {
    summary: "A transformer uses two coils on a shared iron core to step AC voltage up or down. With no moving parts it is highly efficient.",
    points: [
      "Turns ratio: Vp ÷ Vs = Np ÷ Ns, so halving the secondary turns halves the voltage.",
      "Ignoring losses, power in equals power out, so Ip ÷ Is = Ns ÷ Np.",
      "Losses are copper (I²R in the windings) and iron (hysteresis and eddy currents); laminating the core cuts eddy currents.",
      "Transformers are rated in kVA, not kW, because their heating depends on current whatever the load’s power factor."
    ],
    watchFor: [
      "When voltage steps down, current steps up: a step-down secondary carries more current than its primary."
    ]
  },
  "machines-motors": {
    summary: "Most industrial motors are three-phase induction motors, switched by a contactor-based starter that controls start-up and protects against overload.",
    points: [
      "The stator’s rotating field drags the rotor round slightly slower than the field; the difference is slip.",
      "Synchronous speed = (frequency × 60) ÷ pole pairs: 3000 rpm for a 2-pole motor at 50 Hz, with the rotor slightly slower.",
      "A direct-on-line (DOL) starter applies full voltage at once: simple, but with the highest starting current.",
      "Starters include a no-volt release to stop automatic restarting and an overload to trip on sustained overcurrent."
    ],
    watchFor: [
      "Check rotation before coupling the load; swapping any two supply lines reverses a three-phase motor."
    ]
  },
  "science-level2-exam": {
    summary: "Five rotating 30-question Level 2 mocks covering electrical science, installation, safety and protection; take one once you have worked through this stage.",
    points: []
  },

  // Stage 3: Installation
  "stage-install": {
    summary: "Choosing and fitting cables and containment, standard final circuits, safe cable routes, and reading installation drawings.",
    points: []
  },
  "wiring-systems": {
    summary: "A wiring system is the cable plus whatever carries and protects it. Choosing one means matching cable, containment and fixings to the load, the environment and the building.",
    points: [
      "Select for the conditions: heat, water, impact, sunlight and corrosion all narrow the choice of cable and containment.",
      "Containment such as conduit, trunking and tray protects cables and lets circuits be added or rewired later.",
      "Cables grouped together can carry less current each, so apply the grouping factor Cg to the cable rating.",
      "Keep Band I circuits (data, ELV) segregated from Band II (230 V) circuits, or use cables insulated for the highest voltage present.",
      "Support every wiring system with metal or fire-rated fixings so it can't collapse early in a fire; plastic alone isn't enough."
    ],
    watchFor: [
      "Count every circuit in the same conduit or trunking for grouping, including your own."
    ]
  },
  "wiring-cable-types": {
    summary: "Each cable type suits particular jobs: flat twin and earth (T&E) for domestic wiring, singles in conduit, steel wire armoured (SWA) outdoors or underground, and flex for appliances.",
    points: [
      "Thermoplastic (PVC) insulation is rated for 70 °C at the conductor; thermosetting (XLPE) is rated 90 °C.",
      "In T&E the bare CPC is often smaller than the live cores (2.5/1.5 mm² has a 1.5 mm² CPC); sleeve it green/yellow wherever it is exposed.",
      "SWA suits buried runs and outbuilding supplies; its armour can act as the CPC if it is properly glanded and earthed.",
      "Low-smoke, zero-halogen (LSZH) sheaths give off less toxic smoke and are often specified for public buildings."
    ],
    watchFor: [
      "Unsheathed single-core cables must run in conduit, trunking or ducting; only protective conductors are exempt.",
      "T&E has no armour: don't bury it in the ground or run it unprotected outdoors."
    ]
  },
  "wiring-fire-resistant": {
    summary: "Fire-resistant cables keep fire alarm, emergency lighting and other life-safety circuits working during a fire, long enough for people to get out.",
    points: [
      "FP200 is the common choice; its CPC is the same size as the live conductors and its foil screen is in contact with it.",
      "The LV supply to a fire alarm panel uses the foil and CPC as the protective conductor, sleeved green/yellow.",
      "ELV detector loops from the panel use the screen as a functional earth only, sleeved pink rather than green/yellow.",
      "Mineral-insulated (MICC or pyro) cable is also fire-resistant, but rarer and needs sealed specialist terminations."
    ],
    watchFor: [
      "Plastic fixings melt and drop the cable, even though the cable itself would have survived the fire; use fire-rated metal clips.",
      "Keep fire alarm cables on their own route, separate from other services."
    ]
  },
  "wiring-terminations": {
    summary: "Many faults start at a poor connection. A good termination is tight, fully inside its enclosure, with undamaged insulation and no bare copper showing.",
    points: [
      "Tighten terminals to the manufacturer's torque setting; loose screws cause heating, arcing and eventually fire.",
      "Strip only enough insulation for the terminal, so no bare copper shows outside it.",
      "Check each conductor is in the right terminal and fully gripped, then give it a gentle tug test.",
      "Joints must stay accessible for inspection, unless they are an exempt type such as crimped, soldered or marked MF to BS 5733."
    ],
    watchFor: [
      "Stripping the sheath back too far at a junction box leaves cores exposed and is a common EICR observation.",
      "Fine-stranded flex can splay in a screw terminal; use a bootlace ferrule where the terminal suits one."
    ]
  },
  "wiring-conduit-trunking": {
    summary: "Conduit and trunking enclose cables to protect them and allow rewiring. Size them so cables can be drawn in without damage and stay cool in use.",
    points: [
      "Size with the cable and conduit or trunking factors in On-Site Guide (OSG) Appendix E, so cables pull in without damage.",
      "Metal conduit and trunking are exposed-conductive-parts (metal that can go live in a fault): earth them; if continuous, they can be the CPC.",
      "PVC conduit is joined with solvent cement, not threads, and can sag or warp with heat.",
      "File cut ends smooth so the insulation isn't stripped when cables are drawn in."
    ],
    watchFor: [
      "Capping over a cable in a chase isn't mechanical protection and doesn't remove the need for 30 mA RCD protection.",
      "Trunking of 710 mm² or more passing through a fire-rated wall needs an internal fire barrier."
    ]
  },
  "wiring-tray": {
    summary: "Open cable supports for larger jobs: tray for general power cables, wire basket for lighter cables like data and fire alarm, and ladder for heavy power cables.",
    points: [
      "Tray is perforated sheet steel, cut and bent on site; offsets and bends are set out with basic trigonometry.",
      "Basket is light wire mesh, quick to cut and shape, and common for data, security and fire alarm routes.",
      "Ladder suits large SWA and heavy cables over long spans, with rungs to tie or cleat the cables to.",
      "Fix cables with cleats or ties at regular intervals so they don't sag or move; use metal ties where they are the only support."
    ],
    watchFor: [
      "Cut edges are sharp: deburr them and fit edge protection so sheaths aren't damaged while pulling in."
    ]
  },
  "final-circuits": {
    summary: "Final circuits run from the consumer unit to the points of use. The On-Site Guide's standard circuits give known-good device, cable and floor-area combinations.",
    points: [
      "Design follows Ib ≤ In ≤ Iz: design current, then device rating, then cable capacity after correction factors.",
      "Every circuit must also pass volt drop and disconnection time checks, not just current rating.",
      "Apply diversity to estimate maximum demand, but never to showers: they draw full load when on.",
      "Fixed loads get a dedicated circuit, e.g. a 3 kW immersion heater on a 16 A device with a 20 A double-pole switch.",
      "Socket outlets rated up to 32 A need 30 mA RCD protection, which BS 7671 calls additional protection."
    ],
    watchFor: [
      "The OSG standard circuits only hold within their stated limits; outside them, do the full design calculation.",
      "BS EN 60898 MCBs come in 20, 25 and 32 A, not 30 A; the 30 A ring figure is for BS 3036 fuses and older MCBs."
    ]
  },
  "circuits-ring": {
    summary: "A ring final starts and finishes at the same protective device, so current shares two paths to each socket. It's the classic UK socket circuit.",
    points: [
      "Standard ring: 30/32 A device, 2.5/1.5 mm² T&E, serving up to 100 m² of floor area.",
      "Each ring socket may feed one unfused spur; a fused connection unit (≤ 13 A) can supply several sockets beyond it.",
      "Both ends of each conductor share a terminal: line ends together at the device, neutrals together, CPCs together.",
      "Ring test step 1 measures each loop end to end: r1 (line), rn (neutral) and r2 (CPC); for 2.5/1.5 mm², r2 ≈ 1.67 × r1."
    ],
    watchFor: [
      "An unfused spur feeds one single or twin socket or one fixed appliance, never another spur.",
      "A broken ring still works as two radials and hides an overload risk; only continuity testing finds it."
    ]
  },
  "circuits-radial": {
    summary: "A radial runs out from the device and ends at the last point. It's simpler to install, test and fault-find than a ring, and suits sockets and fixed loads.",
    points: [
      "20 A socket radial: 2.5 mm² T&E, up to 50 m² of floor area.",
      "32 A socket radial: 4 mm² T&E, up to 75 m² of floor area.",
      "A break in a radial cuts off every point beyond it, so the fault shows up straight away instead of hiding as it can in a ring.",
      "The furthest point gives the highest R1+R2 (line plus CPC resistance), which is the value used to check Zs."
    ],
    watchFor: [
      "T&E fully surrounded by thermal insulation loses about half its rating, so a standard radial may no longer be valid."
    ]
  },
  "circuits-lighting": {
    summary: "Lighting circuits are radials, usually on 6 A or 10 A devices with 1.0 or 1.5 mm² T&E, wired by loop-in at ceiling roses or through junction boxes.",
    points: [
      "The switch breaks the line conductor; the switched line runs back to the lamp, with the neutral going direct.",
      "Two-way switching uses 3-core and CPC between switches; an intermediate switch fits between two two-way switches.",
      "Lighting volt drop is limited to 3% (6.9 V at 230 V), tighter than the 5% for other circuits.",
      "Final circuits supplying luminaires in dwellings need 30 mA RCD protection."
    ],
    watchFor: [
      "Sleeve the blue or black core used as a switched line brown at both ends.",
      "In Edison screw (ES) lampholders, the line must go to the centre contact, never the outer screw thread."
    ]
  },
  "circuits-cooker-shower": {
    summary: "Cookers and electric showers are large fixed loads, so each has its own radial, a local double-pole isolator and cable sized for its demand.",
    points: [
      "Cooker diversity: the first 10 A, plus 30% of the remainder, plus 5 A if the control unit has a socket.",
      "Size the shower circuit for its full rated load using I = P ÷ V: a 9.5 kW shower draws about 41 A at 230 V.",
      "Fit the shower isolator outside the bathroom zones, or use a ceiling pull-cord switch.",
      "Circuits serving a bathroom need 30 mA RCD protection, including the shower circuit."
    ],
    watchFor: [
      "Manufacturer's instructions win: if a cooker states a 32 A supply, provide it even if diversity gives less.",
      "Don't site the cooker switch where you have to reach over the hob to use it."
    ]
  },
  "cable-routes": {
    summary: "Hidden cables must run where people expect them, or be protected so a nail or drill can't reach them, without weakening the building's structure.",
    points: [
      "Concealed wall cables run in safe zones, and shallow ones also need 30 mA RCD protection or an earthed metal covering.",
      "Holes, notches and chases for cables must stay within set limits so joists, studs and walls keep their strength.",
      "Outdoors and underground, cables need mechanical protection, enough depth and clear marking for anyone digging later.",
      "Keep cables clear of hot pipes, flues and thermal insulation, or apply the correction factor for heat or insulation (Ca or Ci)."
    ],
    watchFor: [
      "Cables in metal-stud partitions need 30 mA RCD protection at any depth, unless protected another way, e.g. SWA or earthed metal conduit.",
      "Seal holes through fire-rated walls and floors after the cables are in, to restore the fire rating."
    ]
  },
  "routes-safe-zones": {
    summary: "Safe zones are strips of wall where someone fixing a shelf would expect a cable. Concealed cables that stay inside them are less likely to be hit.",
    points: [
      "Vertical runs directly above or below an accessory, and horizontal runs in line with it, are in safe zones.",
      "Strips within 150 mm of the ceiling and within 150 mm of a corner are also safe zones.",
      "Cables less than 50 mm deep need 30 mA RCD protection, even in a safe zone.",
      "Instead of an RCD, use SWA, earthed metal conduit or trunking, or a SELV or PELV (extra-low voltage) circuit."
    ],
    watchFor: [
      "A cable run diagonally across a wall is outside any safe zone, even if it starts and ends at accessories."
    ]
  },
  "routes-buried": {
    summary: "Underground and outdoor cables face digging, water, frost and sunlight, so they need armour or ducting, a suitable depth, clear marking and suitable containment.",
    points: [
      "Lay SWA on a bed of sifted sand, with marker tape or tile about 150 mm above it, then backfill.",
      "BS 7671 asks for a suitable depth, not a fixed figure; a rule of thumb is about two spades deep.",
      "Pulling SWA through ducting with a draw rope makes it easy to replace later.",
      "At an outbuilding, choose between extending the house earth or fitting a local earth rod (TT), and main-bond any incoming metal pipes."
    ],
    watchFor: [
      "Outside, use galvanised steel containment; standard plastic can degrade and let water in."
    ]
  },
  "routes-joists": {
    summary: "Notches, holes and chases weaken timber and masonry. Stay within the limits so the structure keeps its strength and cables stay clear of fixings.",
    points: [
      "Joist notches: no deeper than 0.125 × the joist depth, cut in the top edge near the support.",
      "Joist holes: no wider than 0.25 × the joist depth, drilled on the centre line, clear of both the support and mid-span.",
      "Wall chases: vertical up to 1/3 of the wall thickness, horizontal up to 1/6.",
      "Cables through joists must be at least 50 mm from the top and bottom edges, or protected against nails and screws."
    ],
    watchFor: [
      "Measure wall thickness without the plaster; plaster isn't structural.",
      "Fit grommets where cables pass through metal studs so the sharp edges can't cut the sheath."
    ]
  },
  drawings: {
    summary: "Drawings show what goes where before you start. Learn to read the symbols, abbreviations and colour codes on layout and coordination drawings.",
    points: [
      "Layout drawings show where accessories and equipment go; circuit and wiring diagrams show how they connect.",
      "Drawings are to a stated scale, such as 1:50 or 1:100; use a scale rule or the given dimensions.",
      "Check the title block for the revision and date so you're working from the current issue.",
      "Electrical symbols follow BS EN 60617, and each drawing's legend explains any project-specific ones."
    ],
    watchFor: [
      "Don't scale off a drawing marked 'do not scale'; ask for the dimension instead."
    ]
  },
  "drawings-symbols": {
    summary: "Coordination drawings use colour and line style for each service, so you can see at a glance which route is tray, basket or ladder and what it carries.",
    points: [
      "Distribution boards are boxes with a cross: blue for single-phase (SP&N) boards, purple for three-phase (TP&N).",
      "Baskets are coloured by service: red for fire alarm, magenta for telecoms, purple for data, BMS (building management) and security.",
      "Ladder is drawn with a rung pattern: brown for HV, olive for LV.",
      "A red outlined rectangle marks a 2-hour fire-rated enclosure."
    ],
    watchFor: [
      "Colours vary between projects and firms; always check the drawing's own legend first."
    ]
  },
  "drawings-abbreviations": {
    summary: "Short codes on drawings tell you where a route goes between floors and at what height, saving space on busy layouts.",
    points: [
      "FA means from above and FB from below: the route arrives from the floor above or below.",
      "TA means to above: the route leaves this level going up.",
      "HL means high level, for routes and equipment mounted up near the ceiling.",
      "FL means floor level and is used with a dimension, e.g. 9000 mm FL."
    ],
    watchFor: [
      "FA and FB say where a route comes from, TA where it goes; mixing them up sends you to the wrong floor."
    ]
  },
  "drawings-colours": {
    summary: "Core colours show each conductor's job. Harmonised colours replaced the old red, black, yellow and blue, so older installations may have both.",
    points: [
      "Single-phase: brown line, blue neutral, green/yellow protective conductor.",
      "Three-phase: L1 brown, L2 black, L3 grey, neutral blue. The old colours were red, yellow and blue, with a black neutral.",
      "Green/yellow is only for protective conductors. BS 7671 uses cream for functional earth; fire alarm screens are often sleeved pink.",
      "Don't confuse the two systems: on coordination drawings, colours identify services, not conductor cores."
    ],
    watchFor: [
      "Where new colours meet old ones, a warning notice is needed at the distribution board.",
      "Old blue was L3 and old black was neutral; now blue is neutral and black is L2, so check each core, don't assume."
    ]
  },

  // Stage 4: Earthing & protection
  "stage-protection": {
    summary: "How the supply reaches the board, how the installation is earthed and bonded, and the devices and rules that clear faults before anyone gets a shock.",
    points: []
  },
  "supply-intake": {
    summary: "The intake is where the DNO's supply enters the building and becomes the customer's installation. Know what belongs to whom and what to record about it.",
    points: [
      "The cut-out, sealed main fuse and meter are supply-side equipment; the consumer unit and consumer-side tails are the customer's.",
      "Supply-side equipment falls under the ESQCR, not BS 7671, so you inspect it visually but don't work on it.",
      "The earthing arrangement at the intake (TN-S, TN-C-S or TT) shapes how the whole installation is protected.",
      "Record U0 (voltage to earth), conductors, frequency, prospective fault current (PFC), Ze and the DNO fuse type and rating.",
      "If you can't measure a supply value, obtain it from the DNO rather than guessing."
    ],
    watchFor: [
      "Assuming the DNO fuse protects your circuits: it protects the supply side, not each final circuit.",
      "Leaving Ze, PFC or the earthing type blank on a certificate; the disconnection and breaking-capacity checks depend on them."
    ]
  },
  "intake-cutout": {
    summary: "The cut-out holds the DNO's main fuse; meter tails run from it through the meter to the consumer unit.",
    points: [
      "Order from the street: service cable, cut-out and main fuse, meter tails, meter, optional isolator, consumer unit.",
      "The main fuse is usually BS 88-3 (formerly BS 1361), rated 60, 80 or 100 A, and sealed.",
      "Keep meter-to-CU tails to about 3 m or less unless a switch-fuse protects them at the meter end.",
      "A Henley block taps the tails for a second board; protect that sub-main with a switch-fuse (≤ 80 A on a 100 A supply)."
    ],
    watchFor: [
      "Breaking DNO seals or pulling the main fuse yourself; isolation at the cut-out is for the DNO or supplier to arrange."
    ]
  },
  "intake-consumer-unit": {
    summary: "The consumer unit holds the main switch and the circuit protective devices, and must contain any fault or fire inside it.",
    points: [
      "New domestic CUs must be non-combustible (metal) or housed in a non-combustible enclosure (Reg 421.1.201).",
      "The main switch is normally double-pole, breaking both line and neutral.",
      "Fill unused ways (empty device slots) with blanking plates so the enclosure keeps its IP (ingress protection) rating.",
      "Split circuits across RCDs or use RCBOs so one fault doesn't take out every circuit (Reg 314)."
    ],
    watchFor: [
      "An existing plastic CU isn't a defect in itself; the non-combustible rule applies to new boards. Code it only if there is thermal damage.",
      "On an EICR, mixed MCB makes in one board are usually C3, but C2 if there is thermal damage, modification or a loose fit."
    ]
  },
  "earthing-systems": {
    summary: "The earthing system describes how the supply and the installation are connected to earth. It affects Ze and how earth faults are cleared.",
    points: [
      "First letter is the supply's link to earth (T = earthed, I = isolated); second is the installation's (T = own electrode, N = via the supply).",
      "S means separate neutral and protective conductors; C means they are combined in one PEN conductor.",
      "UK public supplies are TN-S, TN-C-S (PME) or TT; IT is only used for special cases.",
      "Ze is the part of the earth fault loop outside the installation. The DNO quotes a maximum on TN; on TT it depends on your electrode.",
      "Identify the system before design or testing; it changes disconnection times and bonding sizes."
    ],
    watchFor: [
      "Assuming the system from the property's age; check the cut-out, labels and DNO records.",
      "Treating 0.35 Ω as the expected reading: it is the DNO's maximum Ze for TN-C-S, so a measured Ze should be no higher."
    ]
  },
  "earthing-tns": {
    summary: "The DNO provides a separate earth all the way from the transformer, usually through the metal sheath of the service cable.",
    points: [
      "Neutral and earth are joined only at the source transformer, so no neutral current flows in the supply earth.",
      "The earthing conductor connects to the cable sheath or a separate earth terminal at the cut-out.",
      "Found mainly in older properties; the DNO's maximum Ze is 0.8 Ω."
    ],
    watchFor: [
      "A corroded or loose sheath connection gives a high Ze; investigate it rather than just recording the reading."
    ]
  },
  "earthing-tncs": {
    summary: "The supply uses one combined PEN conductor that splits into separate neutral and earth at the cut-out. This is the commonest UK arrangement.",
    points: [
      "PME (protective multiple earthing) means the DNO earths the PEN conductor at several points along the network.",
      "The DNO's maximum Ze is 0.35 Ω.",
      "Main bonding is sized from Table 54.8 because bonding can carry diverted neutral current.",
      "BS 7671 restricts PME earthing in some locations, such as caravan pitches, marinas and EV chargepoints."
    ],
    watchFor: [
      "A broken (open) PEN can raise all earthed and bonded metalwork towards line voltage: it looks dead but can be live."
    ]
  },
  "earthing-tt": {
    summary: "The DNO provides no earth, so the installation uses its own earth electrode. Typical of rural and overhead-line supplies.",
    points: [
      "Electrode resistance is usually too high for a fuse or MCB to clear an earth fault in time, so RCDs provide fault protection.",
      "Meet RA × IΔn ≤ 50 V, where RA is the electrode plus protective conductor resistance and IΔn the RCD rating in amps.",
      "For a 30 mA RCD the formula allows up to 1667 Ω, but an electrode reading above 200 Ω may not be stable."
    ],
    watchFor: [
      "Relying on a metal water or gas pipe as the electrode; it is not an acceptable earth electrode (C2 on an EICR)."
    ]
  },
  "earthing-it": {
    summary: "The supply has no direct connection to earth, or one through a high impedance, so a first earth fault doesn't have to disconnect the supply.",
    points: [
      "Used where continuity of supply is critical, such as medical locations like operating theatres.",
      "An insulation monitoring device must warn of the first fault so it can be found and fixed.",
      "A second fault on another conductor is dangerous, so protection must then disconnect."
    ]
  },
  bonding: {
    summary: "Earthing connects exposed metalwork to earth so a fault operates a device. Bonding links metal parts together so the voltage between them stays low.",
    points: [
      "The main earthing terminal (MET) is the hub: the earthing conductor, circuit protective conductors (CPCs) and main bonding connect to it.",
      "Exposed-conductive-parts belong to electrical equipment and are earthed through CPCs.",
      "Extraneous-conductive-parts aren't part of the installation but can introduce a potential, usually earth potential, e.g. metal water pipes.",
      "Bonding reduces the voltage between parts during a fault; it doesn't clear the fault itself."
    ],
    watchFor: [
      "Mixing up the terms: a metal light fitting is exposed; a copper water pipe entering the building is extraneous.",
      "Bonding plastic incoming services: plastic pipes aren't extraneous-conductive-parts and need no main bonding."
    ]
  },
  "bonding-earthing-conductor": {
    summary: "Connects the MET to the means of earthing: the DNO's earth terminal on TN systems, or the earth electrode on TT.",
    points: [
      "With standard 25 mm² meter tails it is typically 16 mm² copper.",
      "It is sized like other protective conductors, from Table 54.7 or the adiabatic equation.",
      "Fix a 'Safety Electrical Connection – Do Not Remove' label where it connects to an earth electrode.",
      "Disconnecting it removes the earth from the whole installation."
    ],
    watchFor: [
      "Leaving it disconnected after measuring Ze; reconnect it before circuits are re-energised."
    ]
  },
  "bonding-main": {
    summary: "Connects metal services and structural parts entering the building to the MET, so they stay at the same potential as the installation's earthing.",
    points: [
      "Bond incoming metal gas, water and oil services, structural steel and other extraneous-conductive-parts.",
      "Connect on the customer's side of the meter, before any branch, and within 600 mm of the meter where practicable.",
      "Use BS 951 clamps, each with its 'Safety Electrical Connection – Do Not Remove' label.",
      "Loop one continuous conductor through the clamps rather than cutting it, so removing one clamp doesn't break the rest."
    ],
    watchFor: [
      "Bonding a branch pipe after it splits, which leaves the rest of the pipework without a reliable bond."
    ]
  },
  "bonding-supplementary": {
    summary: "Local bonding that links exposed and extraneous parts that can be touched at the same time. It is additional protection and is often omitted in bathrooms.",
    points: [
      "In a bathroom it may be omitted only if all three conditions of Reg 701.415.2 are met.",
      "The three: circuits meet disconnection times, all have 30 mA RCD protection, and all extraneous parts are main bonded.",
      "It links simultaneously accessible parts locally and needn't run back to the MET.",
      "Use at least 2.5 mm² copper if sheathed or mechanically protected, otherwise 4 mm²."
    ],
    watchFor: [
      "Taking 30 mA RCD protection alone as enough to omit it; disconnection times and main bonding must also be satisfied."
    ]
  },
  "bonding-sizing": {
    summary: "Protective conductor sizes come from the tables in BS 7671 Chapter 54 or from the adiabatic equation.",
    points: [
      "Table 54.7: CPC same as line up to 16 mm²; 16 mm² for lines over 16 up to 35 mm²; half the line above 35 mm².",
      "Adiabatic check (Reg 543.1.3): S = √(I²t) ÷ k, with k = 115 for copper in PVC cable (Table 54.3).",
      "On TN-S and TT, main bonding is at least half the earthing conductor, minimum 6 mm²; a 16 mm² earthing conductor needs 10 mm².",
      "PME supplies use Table 54.8 by neutral size: 10 mm² for neutrals up to 35 mm², 16 mm² for 50 mm²."
    ],
    watchFor: [
      "T&E CPCs are often smaller than the line (2.5/1.5 mm²), so prove them by the adiabatic equation or OSG tables, not Table 54.7."
    ]
  },
  "protective-devices": {
    summary: "Protective devices disconnect a circuit when something goes wrong. Each type responds to a different kind of fault, so choose by what it must detect.",
    points: [
      "Fuses and MCBs give overcurrent protection: overload and short circuit, and earth faults if Zs is low enough.",
      "RCDs detect earth leakage by sensing imbalance between line and neutral; RCBOs combine an RCD and an MCB.",
      "AFDDs detect dangerous arcing; SPDs limit transient overvoltages rather than disconnecting a circuit.",
      "Design rule Ib ≤ In ≤ Iz: design current, then device rating, then the cable's corrected rating.",
      "A device's breaking capacity must be at least the prospective fault current where it is installed."
    ],
    watchFor: [
      "Confusing MCB types B, C and D (trip curves) with RCD types AC, A, F and B (waveforms detected).",
      "Assuming an RCCB gives overload protection: it has none, so each circuit after it still needs an MCB or fuse."
    ]
  },
  "devices-fuses": {
    summary: "A fuse element melts when too much current flows, breaking the circuit. Once blown it must be replaced or rewired, not reset.",
    points: [
      "BS 88 cartridge fuses are used in cut-outs and industrial boards; BS 1362 is the plug-top fuse.",
      "BS 3036 rewireable fuses are slower and less precise on overload than cartridge fuses or MCBs.",
      "A plug fuse is chosen to protect the flex, not from appliance wattage alone.",
      "A BS 3036 fuse on its own isn't a defect on an EICR if Zs is within the maximum."
    ],
    watchFor: [
      "Forgetting the 0.725 factor (Cf) when sizing a cable protected by a BS 3036 rewireable fuse."
    ]
  },
  "devices-mcbs": {
    summary: "An MCB trips thermally on overload and magnetically on high fault current. Its type sets the current that trips it instantly.",
    points: [
      "Type B is certain to trip instantly at 5 × In (its rated current), Type C at 10 × In and Type D at 20 × In.",
      "Type B suits general domestic circuits; C and D ride through inrush from motors, transformers and large lighting loads.",
      "Common ratings (BS EN 60898): 6, 10, 16, 20, 25, 32, 40, 50 and 63 A."
    ],
    watchFor: [
      "Swapping to Type C or D to stop nuisance tripping without checking Zs is within that type's lower maximum."
    ]
  },
  "devices-rcds": {
    summary: "An RCD compares line and neutral current and trips when the difference (residual current) reaches its rated IΔn. An RCBO adds overcurrent protection.",
    points: [
      "30 mA devices give additional protection; 100, 300 and 500 mA give fault protection, and fire protection needs ≤ 300 mA.",
      "Type AC sees AC residuals only; Type A adds pulsating DC; Type F adds mixed frequencies; Type B adds smooth DC.",
      "Type A is the modern default; Type AC is now restricted because DC residual current can blind it.",
      "Keep standing leakage below about 30% of IΔn (9 mA on 30 mA) to avoid nuisance tripping."
    ],
    watchFor: [
      "An RCD won't trip for a line-to-neutral shock because the current stays balanced; it never replaces safe isolation.",
      "EV chargers need protection against smooth DC faults: Type B, or Type A with suitable DC detection."
    ]
  },
  "devices-afdd-spd": {
    summary: "AFDDs detect arcing from damaged cables or loose terminals that can start fires. SPDs divert voltage spikes from lightning or switching to earth.",
    points: [
      "AFDDs (Reg 421.1.7) are required on socket circuits ≤ 32 A in higher-risk residential buildings, HMOs, student blocks and care homes.",
      "An AFDD doesn't replace overcurrent or RCD protection; it is often combined with an RCBO in one unit.",
      "An SPD (Section 443) is normally a Type 2 at the origin, close to the main switch with short leads.",
      "Check the SPD indicator: green is healthy, red means replace the cartridge."
    ],
    watchFor: [
      "Insulation testing with SPDs connected can give false low readings or damage them; disconnect them before the test where you can."
    ]
  },
  "shock-protection": {
    summary: "Shock is prevented by stopping contact with live parts and by making metalwork that becomes live disconnect quickly. BS 7671 Chapter 41 sets the methods.",
    points: [
      "ADS (Section 411) is the standard method: earthing and bonding plus a device that disconnects in time.",
      "Double or reinforced insulation (412) is Class II equipment, marked with the square-in-square symbol.",
      "Electrical separation (413) feeds one item through an isolating transformer, as in a shaver socket.",
      "SELV and PELV (414) use extra-low voltage; SELV has no earth connection on the secondary, PELV does.",
      "Obstacles and placing out of reach (417) are only for areas controlled or supervised by skilled or instructed persons."
    ],
    watchFor: [
      "Treating additional protection as a measure on its own; it backs up basic and fault protection.",
      "Connecting a CPC to Class II equipment; it has no earth terminal, so end the CPC in its own connector, sleeved and ready for later use."
    ]
  },
  "shock-basic-fault": {
    summary: "Basic protection stops contact with live parts in normal use. Fault protection stops metalwork becoming dangerous if insulation fails. Most measures need both.",
    points: [
      "Basic protection: insulation removable only by destruction, or barriers and enclosures.",
      "Enclosures must be at least IP2X (IPXXB, finger-proof), and IP4X (IPXXD, 1 mm wire) on readily accessible top surfaces.",
      "Fault protection under ADS: protective earthing, protective bonding and automatic disconnection.",
      "Class I equipment relies on its CPC for fault protection; Class II relies on its insulation instead."
    ],
    watchFor: [
      "Forgetting the top surface: a gap over 1 mm on top fails IP4X even when the front meets IP2X."
    ]
  },
  "shock-ads": {
    summary: "An earth fault drives current round the earth fault loop. If the loop impedance is low enough, the device trips before the touch voltage can harm anyone.",
    points: [
      "Fault path: line conductor, fault, CPC, MET, earthing conductor, supply earth, transformer winding and back along the line.",
      "Zs = Ze + (R1 + R2), where R1 + R2 is the circuit's line plus CPC resistance; fault current is roughly U0 ÷ Zs.",
      "Main bonding limits the voltage between metal parts while the fault is being cleared.",
      "On TT the loop impedance is too high for most fuses and MCBs, so an RCD disconnects instead."
    ],
    watchFor: [
      "ADS needs all three parts: a circuit with the right device but a missing CPC has no fault protection."
    ]
  },
  "shock-disconnection-times": {
    summary: "BS 7671 Table 41.1 sets how fast an earth fault must be cleared. The limit depends on the earthing system and the type of circuit.",
    points: [
      "TN, 230 V: 0.4 s for final circuits up to 63 A with sockets, or up to 32 A supplying only fixed equipment.",
      "TN distribution circuits, and final circuits above those limits: 5 s.",
      "TT: 0.2 s for those final circuits, and 1 s for distribution or larger circuits.",
      "Once fault current reaches Ia, an MCB trips within 0.1 s, so Table 41.3 gives one maximum Zs for both 0.4 s and 5 s."
    ],
    watchFor: [
      "Applying TN times to a TT installation; TT final circuits need 0.2 s, normally achieved by an RCD."
    ]
  },
  "shock-max-zs": {
    summary: "Each device has a maximum Zs that guarantees it disconnects in time. Compare your measured or calculated Zs against it.",
    points: [
      "Table 41.3 covers MCBs and RCBOs; its values are at conductor operating temperature.",
      "For a cold test at initial verification use 80% of the tabulated value, e.g. B32: 1.37 Ω becomes 1.10 Ω.",
      "Type C limits are about half of Type B's for the same rating, and Type D about half again.",
      "For RCDs on TT, Table 41.5 applies: 1667 Ω for 30 mA, 167 Ω for 300 mA."
    ],
    watchFor: [
      "Comparing a measured initial-verification reading with the tabulated value; when a question says 'measured', apply 80%."
    ]
  },
  "shock-additional-rcd": {
    summary: "A 30 mA RCD gives extra protection if basic and fault protection fail or someone is careless. BS 7671 makes it mandatory in many places.",
    points: [
      "Sockets up to 32 A, and mobile equipment up to 32 A used outdoors (Reg 411.3.3).",
      "Final circuits supplying luminaires in dwellings (Reg 411.3.4).",
      "Cables less than 50 mm deep in walls without earthed metal covering, and in metal-stud walls at any depth (Reg 522.6).",
      "Part 7 special locations, such as bathrooms and EV charging, as each section requires."
    ],
    watchFor: [
      "Treating capping as mechanical protection; a chased cable under capping still needs 30 mA RCD protection.",
      "Leaving RCDs off sockets needs a documented risk assessment, and that exception can't be used in dwellings."
    ]
  },

  // Stage 5: Design & regulations
  "stage-design": {
    summary: "The rules and maths behind safe design: BS 7671, cable sizing, fault calculations, Part 7 special locations and the Building Regulations.",
    points: []
  },
  bs7671: {
    summary: "The IET Wiring Regulations are the UK standard for designing, installing and verifying electrical installations. They are not law, but following them is the usual way to show you meet EAWR 1989.",
    points: [
      "It covers installations up to 1000 V AC or 1500 V DC, in homes as well as commercial and industrial buildings.",
      "The current edition is BS 7671:2018, the 18th Edition, read together with its published amendments.",
      "It sets minimum safety requirements for design, selection, erection, inspection and testing.",
      "Requirements are cited by number, e.g. Reg 411.3.3 for 30 mA RCD protection of socket-outlets.",
      "The On-Site Guide and Guidance Note 3 explain how to apply it; they do not replace it."
    ],
    watchFor: [
      "BS 7671 is a British Standard, not an Act or statutory instrument. This is a common exam distractor.",
      "Use current values; older training notes can carry figures superseded by later editions or amendments."
    ]
  },
  "bs7671-layout": {
    summary: "The book is split into seven Parts plus appendices, and every regulation number tells you where it sits. Knowing the structure is what makes an open-book exam manageable.",
    points: [
      "Parts 1–3 cover scope and fundamental principles, definitions, and assessment of general characteristics.",
      "Part 4 is protection for safety, Part 5 selection and erection, Part 6 inspection and testing, Part 7 special locations.",
      "Numbers run Part, Chapter, Section: Reg 522.6.202 is in Part 5, Chapter 52, Section 522.",
      "A final number of 200 or above, as in 421.1.201, marks a UK-specific regulation."
    ],
    watchFor: [
      "Use the index at the back to find a topic fast; leafing through the Parts wastes exam time."
    ]
  },
  "bs7671-definitions": {
    summary: "Part 2 fixes the exact meaning of terms used throughout the book. Many exam questions turn on a single word, so learn the definitions precisely.",
    points: [
      "Exposed-conductive-part: part of equipment that can be touched, is not normally live, but can become live under a fault, e.g. a metal case.",
      "Extraneous-conductive-part: a conductive part, not part of the installation, that can introduce a potential, usually earth, e.g. a water pipe.",
      "Basic protection guards against shock in normal conditions; fault protection covers a single fault.",
      "Skilled, instructed and ordinary persons differ in electrical knowledge and supervision, which affects what they may access."
    ],
    watchFor: [
      "Don't swap the two: exposed parts belong to electrical equipment; extraneous parts are other metalwork, such as pipes.",
      "A plastic incoming pipe needs no main bonding, but metal pipework fed from it may still be extraneous, so check it."
    ]
  },
  "bs7671-appendices": {
    summary: "The appendices hold the tables you use for real design and checking work. Most calculation questions are really about finding the right table.",
    points: [
      "Appendix 3 gives time/current curves for fuses and circuit-breakers, used to read disconnection times.",
      "Appendix 4 holds current-carrying capacities, correction factors and mV/A/m tables, e.g. Table 4D5 for T&E.",
      "Appendix 6 has the model forms: Electrical Installation Certificate (EIC), Minor Works Certificate and EICR, with schedules.",
      "Appendix 15 shows the standard ring and radial final circuit arrangements for socket-outlets."
    ],
    watchFor: [
      "Maximum Zs tables are in Chapter 41 (Tables 41.2–41.5), not in the appendices.",
      "Check a table's heading for cable type and installation method before reading a value from it."
    ]
  },
  "bs7671-exam": {
    summary: "Twenty-two rotating open-book mocks on scope, definitions, protection, selection and erection, testing and special locations; use them once you can find your way round the book.",
    points: []
  },
  "cable-sizing": {
    summary: "Choosing a cable means matching it to the load, the protective device and the conditions along its route, then checking volt drop. The sequence is the same every time.",
    points: [
      "Work out the design current Ib, then choose a device rating In that is at least Ib.",
      "Identify the reference installation method, as it changes the rating of the same cable.",
      "Apply correction factors for heat, grouping and insulation to find the tabulated rating It the cable needs.",
      "Select the cable from the Appendix 4 tables, then check volt drop over the full route.",
      "Finally confirm fault protection: Zs for disconnection time and the adiabatic check for the CPC."
    ],
    watchFor: [
      "Size the cable to the device rating In, not the load, because the device lets In flow continuously.",
      "A cable that passes on current-carrying capacity can still fail on volt drop over a long run."
    ]
  },
  "sizing-ib": {
    summary: "Ib is the current the circuit is expected to carry in normal use. Every later step is built on it, so get it right first.",
    points: [
      "Single-phase: Ib = P ÷ V, so a 3 kW immersion heater at 230 V draws about 13 A.",
      "Where a power factor is given, Ib = P ÷ (V × pf), which gives a larger current.",
      "Balanced three-phase: Ib = P ÷ (√3 × 400 V × pf).",
      "Apply diversity where it is allowed, e.g. for a cooker, before choosing the device."
    ],
    watchFor: [
      "Convert kW to W before dividing: 9.2 kW is 9200 W, giving 40 A at 230 V."
    ]
  },
  "sizing-ib-in-iz": {
    summary: "The core design rule: the load must not exceed the device rating, and the device rating must not exceed what the cable can carry once derated.",
    points: [
      "Ib ≤ In: the device must carry the design current without operating.",
      "In ≤ Iz: Iz, the cable's capacity after correction factors, must be at least the device rating In.",
      "Choose In as the next standard MCB rating up: 6, 10, 16, 20, 25, 32, 40, 50 or 63 A.",
      "Minimum tabulated rating: It ≥ In ÷ (Ca × Cg × Ci × Cs × Cf), using only the factors that apply."
    ],
    watchFor: [
      "There are no 5, 15 or 30 A MCBs to BS EN 60898, so don't pick them as In.",
      "Cf = 0.725 applies only to BS 3036 rewireable fuses; for MCBs and RCBOs it is 1."
    ]
  },
  "sizing-diversity": {
    summary: "Not everything runs at full load at once. Diversity lets you size supplies and some circuits for realistic maximum demand, using the On-Site Guide Appendix A rules.",
    points: [
      "Household cooker: first 10 A, plus 30% of the remainder, plus 5 A if the control unit has a socket.",
      "Example: a 12 kW cooker draws about 52 A, so 10 + 0.3 × 42 = 22.6 A with no socket.",
      "Immersion heaters are taken at 100% of full load.",
      "The manufacturer's stated supply requirement overrides any diversity allowance."
    ],
    watchFor: [
      "Showers get no diversity on their own circuit; size for the full rated load.",
      "Check total maximum demand against the actual supply fuse rating before adding circuits; don't assume it is 100 A."
    ]
  },
  "sizing-correction-factors": {
    summary: "Tabulated ratings assume reference conditions. Heat, neighbouring cables and thermal insulation all reduce what a cable can safely carry, so you correct for them.",
    points: [
      "Ca (ambient): 1.00 at 30 °C for 70 °C PVC cable, falling to 0.87 at 40 °C.",
      "Cg (grouping): count every circuit in the group, including your own; four enclosed circuits give 0.65.",
      "Ci: cable fully surrounded by insulation is about halved. For T&E, methods 100–103 already allow for it, so don't apply Ci as well.",
      "Cs and Cd cover soil thermal resistivity and depth of burial for buried cables."
    ],
    watchFor: [
      "Divide In by the factors, never multiply; multiplying gives an undersized cable.",
      "For T&E (Table 4D5), method C gives the highest rating and method 103 the lowest, so fix the method first."
    ]
  },
  "sizing-volt-drop": {
    summary: "Current flowing through a cable's resistance causes voltage to be lost along the run. BS 7671 gives limits measured from the origin of the installation to the equipment.",
    points: [
      "Vd = (mV/A/m × Ib × L) ÷ 1000, using the table value for that cable and method.",
      "Limits at 230 V: 3% (6.9 V) for lighting and 5% (11.5 V) for other circuits.",
      "At 400 V three-phase: 3% is 12 V and 5% is 20 V.",
      "Add the sub-main drop to the final circuit drop; the limit covers the whole route."
    ],
    watchFor: [
      "Use Ib, not In, and the route length in metres.",
      "Fix excessive volt drop with a larger cable or a shorter route; a higher-rated device makes no difference."
    ]
  },
  "fault-calcs": {
    summary: "Fault calculations prove that a protective device will clear a fault fast enough and that the cables survive it. They link the design to what you later measure on test.",
    points: [
      "Zs = Ze + (R1 + R2) gives the earth fault loop impedance at the end of a circuit.",
      "A lower Zs means a larger fault current, so the device trips faster.",
      "On TN at 230 V, sockets up to 63 A and fixed equipment up to 32 A must disconnect in 0.4 s; distribution and larger circuits in 5 s.",
      "Prospective fault current (PFC) at each board must not exceed the breaking capacity of the devices there.",
      "The adiabatic equation confirms the CPC is large enough to survive the fault."
    ],
    watchFor: [
      "MCB type matters: to trip within 0.1 s, a Type B needs 5 × In, a Type C 10 × In and a Type D 20 × In.",
      "On TT systems the limits are shorter: 0.2 s for those final circuits and 1 s for distribution and larger circuits.",
      "Ze alone is not Zs; add the circuit's R1 + R2 before comparing with the maximum Zs tables."
    ]
  },
  "fault-r1r2-zs": {
    summary: "R1 + R2 is the resistance of the line conductor plus the CPC; add Ze to get Zs. Working out expected values lets you spot faults before and during testing.",
    points: [
      "Radial circuit: R1 + R2 = (line mΩ/m + CPC mΩ/m) × length ÷ 1000; 2.5/1.5 mm² T&E is 19.51 mΩ/m.",
      "Example: 20 m of 2.5/1.5 mm² T&E gives 19.51 × 20 ÷ 1000 = 0.39 Ω.",
      "Multiply cold R1 + R2 by about 1.20 to estimate it at 70 °C operating temperature.",
      "Max measured Zs = tabulated × 0.8; a B32 is 1.37 Ω tabulated, 1.10 Ω measured."
    ],
    watchFor: [
      "The word 'measured' in a question means apply the 80% rule.",
      "Compare a cold calculated Zs with the 80% value; don't also apply the 1.20 factor."
    ]
  },
  "fault-pfc": {
    summary: "Prospective fault current is the largest current that could flow at a point if a fault occurred there. Every device at that point must be able to break it safely.",
    points: [
      "PSCC (prospective short-circuit current) is line–neutral; PEFC (prospective earth fault current) is line–earth.",
      "For a single-phase supply, record the higher of PSCC and PEFC as the PFC.",
      "Three-phase rule of thumb: twice the highest line–neutral PSCC.",
      "Compare PFC with each device's rated breaking capacity (Icn), typically 6 kA or 10 kA."
    ],
    watchFor: [
      "PFC is highest at the origin and falls along a circuit as impedance rises."
    ]
  },
  "fault-adiabatic": {
    summary: "The adiabatic equation checks that a protective conductor can carry the fault current for as long as the device takes to clear it, without overheating.",
    points: [
      "S = √(I² × t) ÷ k gives the minimum CPC cross-sectional area S in mm² (Reg 543.1.3).",
      "I is the fault current in amps; t is the device's operating time at that current, from Appendix 3.",
      "k comes from Table 54.3: 115 for copper with 70 °C PVC, 143 for 90 °C thermosetting.",
      "Or find the withstand time t = k²S² ÷ I²; if it exceeds the clearing time, the CPC survives."
    ],
    watchFor: [
      "Use the device's time at the actual fault current, not the 0.4 s or 5 s limit.",
      "Work in order: square I, multiply by t, take the square root, then divide by k."
    ]
  },
  "special-locations": {
    summary: "Part 7 of BS 7671 adds to or changes the general rules where shock or fire risk is higher, such as wet areas, hot rooms and outdoor sites. It supplements Parts 1–6 rather than replacing them.",
    points: [
      "Part 7 sections are numbered 7xx: 701 bathrooms, 702 pools, 703 saunas, 722 EV charging.",
      "Risk rises where people are wet, skin resistance is low or bodies are in contact with earth.",
      "Typical extras are zones, minimum IP ratings, 30 mA RCDs, SELV voltage limits and supplementary bonding.",
      "Part 7 numbers mirror the main book: 701.411.3.3 (bathroom RCDs) builds on 411.3.3, and 701.512 on Section 512."
    ],
    watchFor: [
      "Zone dimensions differ between locations; don't carry bathroom figures over to pools.",
      "IPX4 means splashing water; IP4X means solid objects. The X tells you which digit is not specified."
    ]
  },
  "locations-bathrooms": {
    summary: "Section 701 covers rooms containing a bath or shower. Zones around the water decide what equipment can go where and how well it must resist water.",
    points: [
      "Zone 0 is inside the bath or shower tray (IPX7 min); zone 1 is above it, up to 2.25 m above floor level (IPX4 min).",
      "Zone 2 extends 0.6 m horizontally beyond zone 1, up to 2.25 m (IPX4 min). There is no zone 3.",
      "Every low-voltage circuit serving the location needs 30 mA RCD protection.",
      "Sockets must be at least 2.5 m horizontally from zone 1; shaver supply units are allowed in zone 2."
    ],
    watchFor: [
      "Supplementary bonding can be left out only if circuits meet disconnection times, all have 30 mA RCDs and main bonding is in place.",
      "A shaver socket must be a BS EN 61558-2-5 unit, not a standard 13 A socket-outlet."
    ]
  },
  "locations-pools": {
    summary: "Section 702 covers swimming pools and other basins, where people are wet and in contact with water. Zones and voltage limits are stricter than in a bathroom.",
    points: [
      "Zone 0 is the inside of the basin (IPX8); zone 1 runs 2 m out from the rim and up to 2.5 m above the floor.",
      "Zone 1 normally needs IPX4, with higher jet protection where water jets are used for cleaning.",
      "In zones 0 and 1, SELV is limited to 12 V AC or 30 V ripple-free DC, with its source outside zones 0, 1 and 2.",
      "Exposed- and extraneous-conductive-parts in the zones are linked by local supplementary bonding."
    ],
    watchFor: [
      "Pool zone 1 reaches 2.5 m high, not the 2.25 m used in bathrooms; don't mix the two sets of figures."
    ]
  },
  "locations-saunas": {
    summary: "Section 703 covers rooms and cabins with a sauna heater. Zones are set by distance from the heater and by height, so heat resistance matters as much as water.",
    points: [
      "Zone 1 contains the sauna heater; only equipment belonging to the heater may be installed there.",
      "Zone 3 is the hot upper region above 1 m; equipment there must withstand at least 125 °C.",
      "All sauna circuits need 30 mA RCD protection; the heater is exempt unless its maker recommends it.",
      "Equipment needs at least IPX4, with higher protection where water jets are used for cleaning."
    ]
  },
  "locations-other": {
    summary: "Part 7 also covers construction sites, farms, caravans, marinas, medical locations, solar PV and EV charging. Each section adds rules for its own hazards.",
    points: [
      "704 construction sites and 705 agricultural premises deal with rough use, moisture and livestock.",
      "708 caravan parks, 709 marinas and 721 caravans cover leisure supplies; marina equipment exposed to waves needs IPX6.",
      "722 EV charging: outdoor equipment needs IP44, and DC fault current needs suitable RCD protection, e.g. a Type B RCD.",
      "Others include 710 medical locations, 712 solar PV and 753 floor and ceiling heating."
    ],
    watchFor: [
      "Don't assume a PME (TN-C-S) earth can be used for an outdoor EV charge point; Section 722 restricts it."
    ]
  },
  "locations-exam": {
    summary: "A 30-question mock on Part 7 locations, including bathrooms, pools, saunas, medical locations, caravan parks and marinas; use it after working through the zones and exceptions.",
    points: []
  },
  "building-regs": {
    summary: "The Building Regulations are law and cover far more than wiring. In England, Part P covers electrical safety in dwellings, alongside other Parts such as A, B and L.",
    points: [
      "Part P covers electrical work in dwellings, including gardens, outbuildings and common parts of residential buildings.",
      "Approved Documents give practical ways to comply; Approved Document P points to BS 7671 for the technical detail.",
      "Notifiable work is self-certified via a competent person scheme, signed off by a third-party certifier, or notified to Building Control.",
      "Electrical work can also involve Parts A, B, E, F, L and M, e.g. when chasing walls or cutting through ceilings."
    ],
    watchFor: [
      "Part P is the legal requirement; BS 7671 is the technical standard used to meet it.",
      "These rules describe England; Wales, Scotland and Northern Ireland have their own arrangements."
    ]
  },
  "regs-part-p": {
    summary: "Some electrical work in a dwelling must be notified to the local authority so it can be checked. In England, only a few kinds of work have been notifiable since 2013.",
    points: [
      "Notifiable: a new circuit, a replacement consumer unit, or an addition or alteration in a special location.",
      "Part P special locations: the space around a bath or shower, as set out in Approved Document P, and a swimming pool or sauna heater.",
      "Adding to an existing circuit outside a special location, e.g. extra wall lights, is not notifiable.",
      "Kitchens stopped being special locations for notification in England in 2013."
    ],
    watchFor: [
      "Non-notifiable work must still meet Part P and BS 7671 and be certified, e.g. with a Minor Works Certificate."
    ]
  },
  "regs-cps": {
    summary: "A competent person scheme lets a registered installer self-certify their own notifiable work, so they don't need to apply to Building Control before starting.",
    points: [
      "The member issues the BS 7671 certificate and notifies the job through their scheme.",
      "The scheme informs the local authority and arranges a Building Regulations compliance certificate for the occupier.",
      "Outside a scheme, tell Building Control before starting, e.g. with a Building Notice.",
      "A registered third-party certifier can be used instead, but must be appointed before work begins."
    ],
    watchFor: [
      "A scheme member can self-certify only their own work, not another installer's.",
      "A Building Notice tells the council about the work; it does not certify compliance with BS 7671."
    ]
  },
  "regs-other-docs": {
    summary: "Electrical work often touches other Parts of the Building Regulations. Notching joists, breaching fire-resisting ceilings or fitting fans each bring their own requirements.",
    points: [
      "Part A (structure): joist notches must be no deeper than 0.125 × the joist depth.",
      "Part A also limits wall chases: vertical up to 1/3 of wall thickness, horizontal up to 1/6, not counting plaster.",
      "Part B (fire): seal holes made through fire-resisting walls and ceilings, e.g. for cables and downlights.",
      "Part F covers ventilation such as extract fans, Part L efficient lighting, Part M switch and socket heights."
    ],
    watchFor: [
      "Part M heights (450–1200 mm above finished floor) apply to new dwellings; don't assume they bind every job in an existing home."
    ]
  },
  "regs-exam": {
    summary: "Eight rotating 20-question open-book mocks on notifiable work, Approved Documents, compliance routes and domestic scope; use them after the Part P and Approved Documents topics.",
    points: []
  },

  // Stage 6: Inspection & testing
  "stage-testing": {
    summary: "Test instruments, dead and live tests in order, certification paperwork and periodic inspection with EICR coding.",
    points: []
  },
  "test-instruments": {
    summary: "Every verification result is only as good as the instrument and leads behind it. Know the standards, the safety ratings and how to show your meter reads correctly.",
    points: [
      "Instruments must meet BS EN 61010 for safety and BS EN 61557 for measurement accuracy.",
      "Test leads and probes follow HSE GS38: fused or current-limited, shrouded, with 2–4 mm of exposed probe tip.",
      "Pick a CAT II, III or IV rating that suits where you are testing; GN3 Table 1.1 gives the guidance.",
      "Calibration is not a legal requirement, but you must be able to prove accuracy with regular checks against a known reference.",
      "A multifunction tester (MFT) combines continuity, insulation resistance, loop impedance, RCD and voltage functions."
    ],
    watchFor: [
      "Probe tips with more than 4 mm exposed metal fail GS38, even if the meter itself is fine.",
      "A damaged or open-circuit lead can make a live circuit look dead, so check leads before every use."
    ]
  },
  "instruments-low-ohm": {
    summary: "Measures very small resistances such as CPC, bonding and ring conductors, so tiny lead and contact resistances matter.",
    points: [
      "Used for R1+R2, R2, ring end-to-end and bonding continuity tests.",
      "Covered by BS EN 61557-4 and delivers a test current of at least 200 mA.",
      "Null (zero) the leads before testing so their resistance is not added to the reading."
    ],
    watchFor: [
      "Parallel earth paths through pipes or bonding can give a falsely low reading."
    ]
  },
  "instruments-ir": {
    summary: "Applies a high DC test voltage between conductors to show the insulation is sound and not leaking current.",
    points: [
      "Covered by BS EN 61557-2; select 250 V, 500 V or 1000 V DC to match the circuit under test.",
      "The test voltage can damage electronic equipment, so disconnect loads and sensitive devices first.",
      "Readings are in MΩ; the tester shows a ‘greater than’ value when insulation is very good."
    ],
    watchFor: [
      "Never use an IR tester on a circuit you have not proved dead."
    ]
  },
  "instruments-loop": {
    summary: "Measures earth fault loop impedance (Ze and Zs) and prospective fault current with the supply switched on.",
    points: [
      "Covered by BS EN 61557-3 and works by briefly loading the circuit at the test point.",
      "A ‘no-trip’ two-wire mode uses DC-modulated pulses so an upstream RCD normally does not trip; some RCD types may still trip.",
      "The same function gives PSCC (line–neutral) and PEFC (line–earth) readings."
    ],
    watchFor: [
      "Results from no-trip mode can vary more between readings; repeat if a value looks odd."
    ]
  },
  "instruments-rcd": {
    summary: "Injects a set residual current and times how long the RCD takes to disconnect.",
    points: [
      "Covered by BS EN 61557-6; you set the test current to the device’s rated residual current, IΔn.",
      "A phase-angle setting starts the test on the positive (0°) or negative (180°) half of the AC waveform.",
      "Select the correct device type (AC, A, F, B) and general or S-type on the tester."
    ],
    watchFor: [
      "Leaving the tester on 30 mA when testing a 100 mA device gives a meaningless result."
    ]
  },
  "dead-tests": {
    summary: "Dead tests are carried out with the circuit safely isolated, before it is ever energised. They prove the protective conductors, insulation and polarity are right.",
    points: [
      "Order: continuity of protective and bonding conductors, ring final continuity, insulation resistance, then polarity.",
      "Isolate, lock off and prove dead before connecting any test lead.",
      "Null your leads before every continuity test.",
      "Record the highest continuity reading and the lowest insulation resistance reading.",
      "A dead-test failure must be fixed before you move on to live testing."
    ],
    watchFor: [
      "Energising a circuit to ‘see if it works’ before the dead tests are complete is unsafe and breaks the required test order.",
      "Forgetting to remove a test link can leave line and CPC joined, causing an earth fault when the circuit is energised."
    ]
  },
  "dead-cpc": {
    summary: "Proves every circuit protective conductor (CPC) and bonding conductor is continuous back to the main earthing terminal (MET).",
    points: [
      "Method 1: link line to CPC at the board, test line–CPC at each point and record the highest value as R1+R2 (line plus CPC).",
      "Method 2: use a long wandering lead from the MET to measure R2 (the CPC alone); it suits bonding conductors.",
      "Method 1 is preferred because R1+R2 feeds straight into the Zs calculation."
    ],
    watchFor: [
      "With the installation isolated, disconnect a bonding conductor at one end (usually the MET) to test it, or parallel paths can hide a break."
    ]
  },
  "dead-ring": {
    summary: "A three-step test that proves a ring final is a complete, unbroken loop with no interconnections or reversed polarity.",
    points: [
      "Step 1: measure each conductor end to end: line (r1), neutral (rn), CPC (r2). r1 and rn should match; r2 ≈ 1.67 × r1 for 2.5/1.5 mm².",
      "Step 2: cross-connect L and N; every socket should read about (r1 + rn) ÷ 4.",
      "Step 3: cross-connect L and CPC; each socket reads about (r1 + r2) ÷ 4 and the highest is recorded as R1+R2."
    ],
    watchFor: [
      "Readings that rise then fall around the ring mean you joined two ends of the same conductor (e.g. L to L) instead of L to N.",
      "A reading clearly higher than the rest points to a spur; uneven readings around the ring can mean an interconnection."
    ]
  },
  "dead-ir": {
    summary: "Checks the insulation between live conductors, and between live conductors and earth, has not been damaged during installation.",
    points: [
      "Circuits up to 500 V: test at 500 V DC; the minimum acceptable reading is 1 MΩ.",
      "SELV and PELV (extra-low voltage) circuits: test at 250 V DC; the minimum is 0.5 MΩ.",
      "Test L–N, L–E and N–E with all circuit breakers and ordinary switches closed.",
      "If equipment may still be connected, link L and N together and test to earth."
    ],
    watchFor: [
      "Insulation readings in parallel combine to a lower total, so a whole-board test reads lower than any single circuit."
    ]
  },
  "dead-polarity": {
    summary: "Confirms every single-pole switch, fuse and circuit breaker is in the line conductor, and accessories are wired the right way round.",
    points: [
      "Usually done with a continuity tester at the same time as the R1+R2 test, using the L–CPC link.",
      "Edison screw lampholders need the centre contact on line (E14 and E27 to BS EN 60238 are exempt).",
      "Operate each switch during the test to prove it breaks the line, not the neutral."
    ],
    watchFor: [
      "A switched neutral leaves the lampholder live with the switch off."
    ]
  },
  "live-tests": {
    summary: "Once the dead tests pass, the supply is connected and live tests confirm the protective devices will disconnect a fault in time.",
    points: [
      "Confirm supply polarity, test the earth electrode on a TT system, then measure Ze at the origin.",
      "Measure or calculate Zs for each circuit and compare with the maximum for its protective device.",
      "Measure prospective fault current at the origin and every distribution board.",
      "Test RCDs, check phase sequence on three-phase supplies, then functionally test equipment.",
      "Live testing needs GS38 leads, a safe working position and care not to touch exposed metal."
    ],
    watchFor: [
      "Testing an earth electrode with the installation earthing still connected gives a misleading result.",
      "Live tests do not replace dead tests; a good Zs cannot prove the insulation is sound."
    ]
  },
  "live-loop": {
    summary: "Ze is the external loop impedance of the supply; Zs is the total loop impedance seen at the far end of a circuit.",
    points: [
      "Measure Ze with the installation isolated and the earthing conductor disconnected from the MET to remove parallel paths.",
      "Zs = Ze + (R1+R2) at the origin, or ZDB (the Zs measured at the sub-board) + (R1+R2) for its circuits.",
      "On initial verification compare measured Zs with 80% of the BS 7671 tabulated maximum, e.g. B32 (Table 41.3): 1.37 Ω becomes 1.10 Ω.",
      "Tabulated values assume hot conductors; the 80% figure allows for cables being cold when tested."
    ],
    watchFor: [
      "If a question says ‘measured’ Zs, compare it with 80% of the tabulated maximum, not the full table value.",
      "Always reconnect the earthing conductor to the MET before re-energising the installation."
    ]
  },
  "live-pfc": {
    summary: "The largest current that could flow in a fault at a given point; your protective devices must be able to break it safely.",
    points: [
      "PSCC (short-circuit) is measured line–neutral and PEFC (earth fault) line–earth; on single-phase record the higher.",
      "For three-phase, a common rule of thumb is the highest line–neutral PSCC × 2.",
      "The PFC at each board must not exceed the breaking capacity of the devices fitted there."
    ],
    watchFor: [
      "Recording only PEFC when PSCC is higher understates the fault level."
    ]
  },
  "live-rcd": {
    summary: "Proves each RCD disconnects quickly enough when a residual current equal to its rating flows.",
    points: [
      "Test at the device’s rated IΔn; a general-type RCD must trip within 300 ms.",
      "S-type (time-delayed) RCDs must trip between 130 and 500 ms at IΔn.",
      "Test at 0° and 180° and record the longer of the two times.",
      "On TT, check RA × IΔn ≤ 50 V with IΔn in amps, e.g. 30 mA = 0.03 A."
    ],
    watchFor: [
      "The test button is a mechanical check only; it does not replace the timed test.",
      "Disconnect loads before testing or leakage from them can upset the result."
    ]
  },
  "live-functional": {
    summary: "The final check that switchgear, controls and protective devices actually operate as intended.",
    points: [
      "Operate isolators, switches, interlocks and controls to prove they work and are correctly labelled.",
      "Press the test button on every RCD, RCBO and AFDD (arc fault detection device) after the electrical tests.",
      "Check that equipment such as heaters and motors starts and stops as designed."
    ],
    watchFor: [
      "Functional testing is not optional just because every electrical reading passed."
    ]
  },
  "live-fundamental-exam": {
    summary: "Two practice papers (a 30-question mock and a 40-question homework set) on isolation, dead and live tests and certification; try them once you can recite the test sequence.",
    points: []
  },
  certification: {
    summary: "Every new installation or alteration is handed over with the right certificate, signed by the people who designed, built and tested it.",
    points: [
      "An Electrical Installation Certificate (EIC) covers new circuits, rewires, consumer unit changes and any wholly new work.",
      "A Minor Works certificate covers an addition or alteration to one existing circuit with no new circuit.",
      "An EIC is valid only with a schedule of inspections and a schedule of test results for each board.",
      "The EIC has three signatories: designer, constructor and inspector. The client does not sign."
    ],
    watchFor: [
      "‘Limitations’ and ‘safe for continued use’ belong on an EICR, not an EIC."
    ]
  },
  "cert-inspection": {
    summary: "A structured visual inspection carried out before testing, following the headings of BS 7671 Appendix 6.",
    points: [
      "Covers intake equipment, earthing and bonding, basic and fault protection, boards, final circuits and isolation.",
      "Additional protection has only two recognised forms: 30 mA RCDs and supplementary bonding.",
      "Enclosures need IP4X (keeps out 1 mm wire) on readily accessible top surfaces and IP2X (finger-safe) elsewhere."
    ],
    watchFor: [
      "The supplier’s intake equipment is inspected visually only; never break the cut-out seal."
    ]
  },
  "cert-eic": {
    summary: "The Electrical Installation Certificate records the design, construction and testing of new work and confirms it meets BS 7671.",
    points: [
      "One intake means one EIC, however many distribution boards it feeds.",
      "The designer recommends the date of the next inspection.",
      "Record any departures from BS 7671 and comments on the existing installation."
    ],
    watchFor: [
      "Never leave the ‘Departures’ or ‘Comments on existing installation’ boxes blank; write ‘None’ if there are none."
    ]
  },
  "cert-minor-works": {
    summary: "The Minor Electrical Installation Works Certificate (MEIWC) is for small additions or alterations to a single existing circuit.",
    points: [
      "Examples: adding a socket or light point to an existing circuit, or moving an accessory.",
      "It still records the essential test results for the circuit you worked on.",
      "Any new circuit, even one fed from a spare way, needs an EIC instead."
    ],
    watchFor: [
      "Replacing a consumer unit is never Minor Works; it needs an EIC."
    ]
  },
  "cert-schedules": {
    summary: "The schedule of test results is where every measured value is recorded circuit by circuit so others can check compliance.",
    points: [
      "Record circuit details, device type and rating, cable sizes and the maximum permitted Zs.",
      "Enter R1+R2 or R2, ring results, insulation resistance, polarity, measured Zs and RCD times.",
      "Note the test instruments used so the results can be traced to a known, accurate meter."
    ],
    watchFor: [
      "A tick is for checks such as polarity; a measured test needs its actual value, never just ‘OK’."
    ]
  },
  "cert-iv-exam": {
    summary: "Three practice papers (two 55-question mocks and a 43-question homework set) on inspection, testing and certification; use them once each test method feels familiar.",
    points: []
  },
  periodic: {
    summary: "An EICR checks whether an existing installation is safe for continued use. You record its condition, not whether it meets today’s edition in every detail.",
    points: [
      "The client agrees the extent (what is covered) and the limitations (what is not) before work starts.",
      "Sampling is allowed, e.g. at least 25% of distribution boards, with earthing and bonding checked 100%.",
      "Much of the inspection is done in service using sight, hearing, smell and touch; isolate before removing covers.",
      "Private rented homes in England need an EICR at least every 5 years; GN3 also suggests one on change of occupancy.",
      "Remember what to look for with SAD COWS: Safety, Age, Damage, Corrosion, Overloading, Wear and tear, change of uSe."
    ],
    watchFor: [
      "When sampling finds a fault, increase the sample; do not just re-check the same items.",
      "Not meeting the current edition does not, by itself, make an installation unsafe or Unsatisfactory."
    ]
  },
  "periodic-codes": {
    summary: "Each defect on an EICR gets a code that tells the client how serious and urgent it is.",
    points: [
      "C1: danger present, act now; tell the duty holder (person in control of the installation) in writing and make safe if you can.",
      "C2: potentially dangerous, urgent remedial action required.",
      "C3: improvement recommended; the installation can still be Satisfactory.",
      "FI: further investigation needed without delay, e.g. a circuit you cannot identify."
    ],
    watchFor: [
      "If torn between two codes, give the more serious one.",
      "Code from the risk you observe, not from how easy the repair would be."
    ]
  },
  "periodic-limitations": {
    summary: "Sets out exactly what the report covers and what could not be inspected or tested, so the client knows its scope.",
    points: [
      "Besides limitations agreed at the start, others arise on site, e.g. locked rooms or furniture blocking access.",
      "Each limitation must be specific and recorded with the reason.",
      "Recorded limitations tell the client which parts still need inspecting or testing at a later date."
    ],
    watchFor: [
      "Vague wording such as ‘not all tested’ is not an acceptable limitation."
    ]
  },
  "periodic-outcome": {
    summary: "The overall assessment states whether the installation is Satisfactory or Unsatisfactory for continued use.",
    points: [
      "Any C1 or C2 code makes the report Unsatisfactory.",
      "C3 codes alone leave the report Satisfactory with improvements recommended.",
      "The inspector, not the designer, recommends the date of the next inspection."
    ],
    watchFor: [
      "‘Condemned’ or ‘pass/fail’ are not recognised outcomes on an EICR."
    ]
  },
  "periodic-exam": {
    summary: "Six practice tests on GN3 intervals, sampling, limitations, coding and EICR paperwork; use them once you can code common defects with confidence.",
    points: []
  },

  // Stage 7: Getting qualified
  "stage-qualify": {
    summary: "The final steps to qualified status: Level 3 and the NVQ portfolio, the AM2 practical assessment and the ECS Gold Card.",
    points: []
  },
  "level3-nvq": {
    summary: "Level 3 builds the theory and site competence of a qualified installer, while the NVQ proves that competence with evidence from your own work on real jobs.",
    points: [
      "The qualified route has three parts: Level 3 knowledge, the NVQ portfolio of site evidence, and the AM2 or AM2E.",
      "The NVQ assesses what you actually do on site, not just what you can answer in an exam room.",
      "On an apprenticeship, the knowledge units and the portfolio run side by side, not one after the other.",
      "Experienced workers with substantial, provable site experience can use the Experienced Worker Assessment, which still ends with the AM2E."
    ],
    watchFor: [
      "Passing the Level 3 knowledge exams alone does not make you qualified; the portfolio and AM2 are still needed.",
      "Leaving portfolio evidence until the end makes gaps hard to fill. Collect it job by job as you go."
    ]
  },
  "nvq-knowledge": {
    summary: "The theory side of Level 3: electrical science, circuit design and protection, inspection and testing, fault finding, and motors and control gear.",
    points: [
      "Expect calculations on impedance, power, power factor and three-phase loads, not just recall questions.",
      "Design questions apply Ib ≤ In ≤ Iz (design current ≤ device rating ≤ cable capacity) and check fault current and disconnection times.",
      "Testing questions follow the GN3 order: dead tests first, then live tests only once the dead test results are satisfactory.",
      "Motors and starters come up often, so learn how direct-on-line (DOL) and star-delta starters work and why each is used."
    ],
    watchFor: [
      "Learn why each formula works; reworded questions catch learners who only memorised answers."
    ]
  },
  "nvq-portfolio": {
    summary: "A record of your own work on real installations, mapped to the NVQ units and checked by your assessor.",
    points: [
      "Each piece of evidence should show what you did, where and when, and how it met BS 7671.",
      "Cover a spread of wiring systems, such as conduit, trunking, SWA and fire-resistant cable like FP200.",
      "Witness testimony from your supervisor covers tasks your assessor could not see in person.",
      "Include test results and certificates you helped complete, signed off by the supervising electrician."
    ],
    watchFor: [
      "Photos with no job details or dates are weak evidence. Note the job, the task and your role each time.",
      "Evidence must be your own work; copied or staged evidence will be rejected."
    ]
  },
  "nvq-level3-exam": {
    summary: "Five rotating 30-question Level 3 mocks on science, design, testing, fault diagnosis and machines; use them once you have revised the theory units.",
    points: []
  },
  am2: {
    summary: "A practical, timed assessment of whether you can install, test and fault-find safely to industry standard. AM2E is the version used as the apprenticeship end-point assessment.",
    points: [
      "It is taken at an approved assessment centre, with assessors observing and checking your work.",
      "Sections cover safe isolation and risk assessment, a composite installation, inspection and testing, and fault diagnosis.",
      "There is also a knowledge element, so BS 7671 and site practice questions still matter.",
      "Your work is judged against BS 7671, manufacturers' instructions and the drawings and specification you are given.",
      "Plan before you start: read the drawings, check materials and set out routes before cutting anything."
    ],
    watchFor: [
      "Unsafe practice, especially during safe isolation, counts far more against you than a slow or untidy job.",
      "Rushing the installation leaves no time for testing and certification, which are assessed in their own right."
    ]
  },
  "am2-isolation": {
    summary: "Isolating a circuit safely while being observed, after assessing the risks of the task. Every step must be done, in the right order.",
    points: [
      "Identify all sources and get permission, then prove your voltage indicator on a known live source or proving unit.",
      "Switch off, lock off with your own lock and keep the key, then fit a warning notice.",
      "Prove dead at the point of work: 3 tests on single-phase, 10 tests on three-phase.",
      "For the risk assessment, state the actual hazards of the task in front of you and how you will control them."
    ],
    watchFor: [
      "Forgetting to re-prove the voltage indicator after proving dead is a classic and costly omission.",
      "Using a multimeter instead of an approved voltage indicator to BS EN 61243 with GS38 leads is a basic error."
    ]
  },
  "am2-installation": {
    summary: "Building a set installation from drawings and a specification, mixing circuits and wiring systems, finished to a standard a client would accept.",
    points: [
      "Expect several wiring systems in your work bay, such as conduit, trunking, tray, SWA and fire-resistant cable.",
      "Terminate properly: correct glands, sleeved CPCs, tight connections and no bare copper outside the terminal.",
      "Identify conductors correctly, including brown, black and grey for L1, L2 and L3 on three-phase circuits.",
      "Keep to the drawings, the fixing spacings and the minimum bend radii for each cable and containment type."
    ],
    watchFor: [
      "Loose terminations and unsleeved CPCs are easy marks to lose. Check every connection before moving on.",
      "In a plastic enclosure, fit an earth tag to the SWA gland and connect it to earth; the box cannot carry the earth path."
    ]
  },
  "am2-testing": {
    summary: "Testing your finished installation in the correct order, recording the results, completing the certificate and confirming that everything works.",
    points: [
      "Dead tests first: CPC continuity, ring final continuity, insulation resistance, then polarity.",
      "Energise only once the dead tests are satisfactory, then measure Ze, Zs and prospective fault current and test the RCDs.",
      "Null your leads before continuity tests. Record the highest continuity and the lowest insulation reading.",
      "Complete the EIC and schedule of test results, checking each Zs against the maximum for its protective device."
    ],
    watchFor: [
      "Disconnect sensitive equipment before insulation testing, or link line and neutral and test to earth, to avoid damage.",
      "For circuits up to 500 V, 1 MΩ at 500 V DC is only the minimum; on new work, investigate any reading below 20 MΩ."
    ]
  },
  "am2-faults": {
    summary: "Finding faults set into a test rig by logical testing, then recording what each fault is, exactly where it is and how you would put it right.",
    points: [
      "Start from the symptoms and use the drawings to narrow the fault down to one circuit, then one section.",
      "Isolate safely first, then use continuity and insulation resistance tests to pin down each fault.",
      "Typical faults include open circuits, high-resistance joints, short circuits, reversed polarity and wrong connections.",
      "Work through one fault at a time and check your findings against the circuit drawing before you record them."
    ],
    watchFor: [
      "Guessing or swapping parts is not fault diagnosis. Show a logical test sequence that proves the fault.",
      "Be precise, e.g. “open-circuit CPC between sockets 3 and 4”, not “socket not working”."
    ]
  },
  "am2-exam": {
    summary: "Two rotating 30-question mocks on the knowledge side of AM2: safe isolation, installation practice, testing, fault diagnosis and commissioning.",
    points: []
  },
  "ecs-card": {
    summary: "The ECS Gold Card shows you are a qualified electrician. Many sites ask to see an ECS card before you can work.",
    points: [
      "ECS cards are issued by the JIB and show your occupation and level of qualification.",
      "A Gold Card normally needs a Level 3 NVQ or completed apprenticeship, the AM2 or AM2E, and a current BS 7671 qualification.",
      "You also need a passed ECS health, safety and environmental assessment that is still in date.",
      "Apprentices and trainees can hold their own ECS card types while they are still training."
    ],
    watchFor: [
      "Criteria change, so check the JIB's current requirements for your occupation before applying.",
      "Leaving the H&S assessment until last can delay your card even when your qualifications are done."
    ]
  },
  "ecs-hs-test": {
    summary: "A computer-based multiple-choice test of site health, safety and environmental knowledge, covering the hazards electricians meet every day.",
    points: [
      "Topics include electrical safety, working at height, fire, PPE, manual handling, COSHH (hazardous substances), accident reporting and the environment.",
      "Know the key law: HSWA 1974 general duties, EAWR 1989 for electrical work and RIDDOR for reporting.",
      "The app's ECS practice tests use an 86% pass threshold, so aim for consistently high scores."
    ],
    watchFor: [
      "Options that just get the job done are usually wrong. Pick the one that removes or controls the hazard."
    ]
  },
  "ecs-applying": {
    summary: "Applying to the JIB with proof of your qualifications, identity and a passed H&S assessment, for the card that matches your role.",
    points: [
      "Check your certificates against the card's criteria before you apply, so nothing is missing when you submit.",
      "Choose the card for your actual occupation; installation, maintenance and other roles have different criteria.",
      "Note your card's expiry date and renew before it runs out, or you may be turned away from site."
    ],
    watchFor: [
      "Unclear or incomplete certificate copies are a common cause of delay. Upload every page, legibly."
    ]
  },

  // Stage 8: Keep growing
  "stage-grow": {
    summary: "Specialist routes after qualifying: PAT, 2396 design and verification, and low-carbon tech such as EV charging, solar PV, battery storage and heat pumps.",
    points: []
  },
  pat: {
    summary: "In-service inspection and testing of electrical equipment, following the IET Code of Practice, to check it stays safe to use.",
    points: [
      "There are three levels of check: user check, formal visual inspection, and combined inspection and test.",
      "Most faults are found by looking, so the formal visual inspection matters as much as the instrument tests.",
      "How often equipment is checked is set by risk assessment, not by a fixed interval.",
      "Test instruments should meet BS EN 61010 for safety and BS EN 61557 for accuracy, with leads to GS38.",
      "Records show the duty holder (whoever is responsible for the equipment) is managing the risk: what was checked, the results and any action."
    ],
    watchFor: [
      "PAT itself is not a legal requirement; the Electricity at Work Regulations require equipment to be kept safe, and PAT is one way to show it.",
      "Labels should not show a next-test date, because the interval depends on where the equipment ends up being used."
    ]
  },
  "pat-classes": {
    summary: "An appliance's class tells you how it protects against electric shock, and so which tests apply to it.",
    points: [
      "Class I relies on basic insulation plus a protective conductor connected to exposed metalwork.",
      "Class II has double or reinforced insulation and no protective conductor, marked with the double-square symbol.",
      "Class III runs from separated extra-low voltage (SELV), so the main item to check is the charger or transformer feeding it.",
      "Class I needs earth continuity, insulation resistance and a functional check; Class II drops the earth continuity test."
    ],
    watchFor: [
      "Look for the double-square symbol rather than judging by the case; some metal-cased items are Class II, some plastic ones Class I."
    ]
  },
  "pat-tests": {
    summary: "The instrument tests and pass limits used in combined inspection and test, and the records that prove the work was done.",
    points: [
      "Earth continuity pass: ≤ 0.1 Ω plus the flex resistance (0.5 Ω plus flex on some older equipment).",
      "Insulation resistance at 500 V DC, L and N joined and tested to earth: Class I ≥ 1 MΩ (lower for some heaters), Class II ≥ 2 MΩ.",
      "Where a 500 V test could damage equipment, measure protective conductor current or touch current (leakage) instead.",
      "Typical records: asset register, inspection and test results, repair log, faulty equipment register and instrument checks."
    ],
    watchFor: [
      "The BS 1362 plug fuse is chosen to suit the flex size, not worked out from the appliance wattage.",
      "Work out the flex allowance from its length and size; don't apply a flat 0.1 Ω limit to every lead."
    ]
  },
  "pat-exam": {
    summary: "Five PAT practice mocks on classes, inspection, testing, leads and records; use them once the notes feel familiar and aim for 80% or more.",
    points: []
  },
  "design-2396": {
    summary: "Designing an installation to meet BS 7671 on paper first: assessing the supply and loads, sizing cables and protection, then proving the design works.",
    points: [
      "Start by assessing the supply: system type, earthing arrangement, external loop impedance (Ze), prospective fault current and maximum demand.",
      "Each circuit is checked for current-carrying capacity, voltage drop, disconnection time (Zs) and whether the CPC can survive the fault current.",
      "External influences such as heat, water and mechanical damage, plus Part 7 special locations, shape cable and equipment choices.",
      "Initial verification on site confirms the design was followed, and the designer signs the design section of the EIC."
    ],
    watchFor: [
      "Wrong answers are often close to the right number; follow the method step by step and keep units consistent.",
      "A cable that carries the load can still fail on voltage drop or Zs, so check every requirement, not just current."
    ]
  },
  "design-process": {
    summary: "The step-by-step route from load to cable size in OSG Appendix F and BS 7671 Appendix 4, built on Ib ≤ In ≤ Iz: design current ≤ device rating ≤ cable capacity.",
    points: [
      "Find Ib from P ÷ V, applying diversity where the OSG allows, then choose In as a standard device rating at or above Ib.",
      "Divide In by the factors that apply (Ca ambient, Cg grouping, Ci insulation, Cs soil, Cf fuse type) to get the minimum tabulated rating It.",
      "Identify the reference method for how the cable is installed, then pick a cable from the tables with a rating of at least It.",
      "Check volt drop: mV/A/m × Ib × L ÷ 1000, within 3% for lighting and 5% for other circuits (6.9 V / 11.5 V at 230 V)."
    ],
    watchFor: [
      "Cf = 0.725 applies only to BS 3036 rewireable fuses; don't use it for MCBs or cartridge fuses.",
      "Count your own circuit when working out the number of circuits for the grouping factor."
    ]
  },
  "design-exam": {
    summary: "Fourteen 2396-style mocks on maximum demand, cable sizing, earthing, protection, inspection and instruments; use them after the design process, aiming for 60% or more.",
    points: []
  },
  "low-carbon": {
    summary: "How EV chargers, solar PV, battery storage and heat pumps change an installation: big new loads, extra sources of supply and DC to deal with.",
    points: [
      "Each adds a large load or an extra source, so start with a maximum demand assessment and the capacity of the supply.",
      "Generation and storage mean the installation can be fed from more than one place, and every source must be isolatable.",
      "Small generation is notified to the DNO (the local network operator) after commissioning under G98; larger systems need DNO approval first under G99.",
      "Inverters and chargers can produce DC or high-frequency leakage, which affects the RCD type you choose.",
      "New circuits for this equipment in a dwelling are notifiable under Part P."
    ],
    watchFor: [
      "Switching off the main switch does not make the installation dead if PV or a battery is still connected.",
      "Read the manufacturer's instructions alongside BS 7671; they often set the RCD type, cable size and isolation needed."
    ]
  },
  "low-carbon-ev": {
    summary: "Section 722 covers circuits supplying EV charging points, where an open (broken) PEN conductor (combined neutral and earth) on a PME supply can make the car's bodywork live.",
    points: [
      "Each charging point should have its own dedicated final circuit and its own 30 mA RCD.",
      "DC fault protection is needed: a Type B RCD, or a Type A or Type F RCD where the charger has built-in DC fault detection.",
      "On a PME (TN-C-S) supply, guard against an open-PEN fault, for example with a TT electrode or open-PEN detection.",
      "Outdoor charging equipment must be at least IP44, meaning both IPX4 and IP4X."
    ],
    watchFor: [
      "A charger can run at full rated current for hours; don't apply diversity to its final circuit.",
      "Type AC RCDs may not trip when DC fault current is present, so they are not suitable for EV charging circuits."
    ]
  },
  "low-carbon-pv": {
    summary: "Section 712 covers solar PV, where panels produce DC whenever light falls on them and feed the installation through an inverter.",
    points: [
      "PV panels cannot be switched off; the DC cables stay live in daylight even with the inverter isolated.",
      "Isolation is needed on the DC side, between array and inverter, and on the AC side at the inverter output.",
      "A DC arc has no current zero to put it out as AC does, so DC switches and connectors must be rated for DC.",
      "Label the origin, meter position and consumer unit to warn that there is more than one source of supply."
    ],
    watchFor: [
      "Opening the DC isolator only makes the inverter side dead; the cables between the array and the isolator stay live.",
      "Never pull a DC connector apart under load; open the DC isolator first."
    ]
  },
  "low-carbon-battery": {
    summary: "Battery storage holds energy from PV or the grid and can supply the installation, sometimes even when the mains supply is off.",
    points: [
      "A battery is another source of supply, so include it when locating all sources for safe isolation.",
      "It connects through its own inverter (AC-coupled) or shares the PV inverter (DC-coupled).",
      "Stored energy can deliver high DC fault currents, so cables, protection and isolators must be rated for it.",
      "Follow the manufacturer's instructions on location, ventilation and fire risk when siting the unit."
    ],
    watchFor: [
      "Systems with backup mode keep circuits live during a power cut, so a dead mains supply proves nothing."
    ]
  },
  "low-carbon-heat-pumps": {
    summary: "Heat pumps move heat from the air or ground into a building, adding a large electrical load that often runs for long periods.",
    points: [
      "Use the manufacturer's data for running and starting current when sizing the circuit and protective device.",
      "Fit a local isolator next to the unit (outdoors for air source) so it can be switched off safely for maintenance.",
      "Outdoor cables and equipment must suit the external influences: weather, sunlight and mechanical damage.",
      "Notify the DNO when a heat pump is installed, as it adds a large load to the network."
    ],
    watchFor: [
      "Inverter-driven units may need a Type A, F or B RCD rather than Type AC; check what the manufacturer specifies."
    ]
  }
};
