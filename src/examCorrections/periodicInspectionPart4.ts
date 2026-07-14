import type { ExamQuestionCorrection } from "./types";

export const periodicInspectionPart4Corrections = [
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 1,
    promptSuffix:
      "An inspector finds an exposed live conductor at a domestic kitchen ceiling rose that is accessible when the rose cover is removed. Code:",
    correctedPromptSuffix:
      "An inspector finds a domestic kitchen ceiling rose with its cover missing and an exposed live conductor accessible without a key or tool. Code:",
    explanation:
      "The missing cover leaves an exposed live conductor within reach, so danger is present now. This is C1 and the point must be isolated or securely enclosed immediately, with the person responsible warned at once.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 2,
    promptSuffix: "Bathroom Zone 1 socket-outlet — BS 7671 status:",
    explanation:
      "An ordinary 230 V socket-outlet is not permitted in Zone 1. A shaver supply unit complying with BS EN 61558-2-5 is the relevant special exception; under current BS 7671 an ordinary socket must be at least 2.5 m horizontally from the boundary of Zone 1.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 3,
    promptSuffix:
      "An inspector finds a 30 mA RCBO trip times — 1×IΔn 250 ms, 5×IΔn 35 ms. Schedule entry:",
    correctedPromptSuffix:
      "A general non-delay 30 mA RCBO operates in 250 ms during the current BS 7671 alternating-current field test at IΔn. Schedule entry:",
    options: {
      C: "Satisfactory — the IΔn operating time is within the 300 ms maximum",
    },
    explanation:
      "Current BS 7671 field verification uses one alternating-current test at IΔn. A general non-delay RCBO must operate within 300 ms, so 250 ms is satisfactory; a 5×IΔn test is no longer required to demonstrate compliance.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 5,
    promptSuffix:
      "Inspector finds a circuit's polarity reversed at the consumer unit (line and neutral swapped). Code:",
    correctedPromptSuffix:
      "The installation origin has correct polarity, but one outgoing final circuit has its line and neutral swapped at the consumer unit, leaving its single-pole MCB in the neutral. Code:",
    answer: "B",
    explanation:
      "Incorrect polarity on a final circuit is C2 because single-pole switching and protection can leave its equipment connected to line. It is potentially dangerous and needs urgent correction; BPG4 reserves C1 for incorrect polarity at the installation origin or another danger present now.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 7,
    promptSuffix:
      "A 6 A Type B MCB on a lighting circuit has a measured Zs of 4.4 Ω. Table 41.3 limit for 0.4 s disconnection: 7.28 Ω. For 5 s disconnection (fixed equipment): 14.57 Ω. Most appropriate record:",
    correctedPromptSuffix:
      "A 6 A Type B MCB protects a final lighting circuit requiring 0.4 s disconnection. Its measured Zs is 4.4 Ω and the applicable Table 41.3 maximum is 7.28 Ω. Most appropriate record:",
    options: {
      C: "Satisfactory — 4.4 Ω is below the applicable 7.28 Ω maximum",
    },
    explanation:
      "This final circuit is assessed against the stated 0.4 s value. Its measured Zs of 4.4 Ω is comfortably below 7.28 Ω, so the overcurrent device can provide automatic disconnection within the required time.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 10,
    promptSuffix:
      "A multi-function tester is being checked before use. The lock-off probe shrouds are missing. Most appropriate action:",
    correctedPromptSuffix:
      "A multi-function tester is being checked before use. Its probe finger barriers and connector shrouds are missing. Most appropriate action:",
    explanation:
      "Do not use damaged or incomplete probes. GS38 calls for finger barriers, suitably shrouded connectors, minimal exposed metal and the correct CAT and voltage ratings, so the leads or probes must be replaced with compliant items before testing.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 11,
    promptSuffix:
      "Inspector finds a TN-C-S installation with a missing PME warning notice at the consumer unit. Code:",
    correctedPromptSuffix:
      "Inspector finds the required ‘Safety Electrical Connection — Do Not Remove’ notice missing at the main earthing terminal. Code:",
    options: {
      B: "C3 — provide the required safety electrical connection notice",
    },
    explanation:
      "BPG4 lists absence of the required ‘Safety Electrical Connection — Do Not Remove’ notice as C3. The earthing connection is still effective, so there is no present or potential danger, but the notice improves safety for future work.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 12,
    promptSuffix:
      "A 230 V supply has a peak voltage of approximately 325 V. Insulation rated 'Cat II 300 V' is suitable for normal mains use because:",
    correctedPromptSuffix:
      "A tester marked CAT II 300 V is proposed for measurements inside a 230 V plug-connected appliance, not on the fixed building wiring. Why may it be suitable there?",
    options: {
      A: "CAT II covers appliance and portable-tool circuits directly connected to the low-voltage installation, and 300 V is its maximum working-voltage rating",
      B: "CAT II 300 V is a 300 V peak-only rating",
    },
    answer: "A",
    explanation:
      "GS38 places appliances and portable tools in measurement category CAT II. The 300 V marking is the permitted working-voltage rating for that category, while the CAT designation represents the expected transient-overvoltage environment; fixed wiring and distribution equipment normally require CAT III or CAT IV equipment.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 13,
    promptSuffix:
      "On a non-domestic premises EICR, the inspector finds a Class I metal accessory body where the CPC has come loose at the terminal. Code:",
    correctedPromptSuffix:
      "On a non-domestic EICR, the inspector finds a reachable Class I metal accessory whose CPC is loose and intermittently open, but the metalwork is not live at the time of inspection. Code:",
    options: {
      B: "C2 — fault protection is unreliable and urgent repair is required",
      C: "C1 solely because CPC continuity is intermittent",
      D: "No code while the accessory still works",
    },
    answer: "B",
    explanation:
      "The unreliable CPC could leave the metal body dangerous when an insulation fault occurs, so it is potentially dangerous and C2 applies. C1 would require danger present now, such as the metalwork already being live and accessible.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 15,
    promptSuffix:
      "A circuit's R1+R2 reads 0.20 Ω at the point of testing. Cable resistance per metre at 20 °C is 0.0145 Ω/m for line and 0.0145 Ω/m for CPC for 4 mm² T+E. Cable length is approximately:",
    correctedPromptSuffix:
      "A 4 mm² twin-and-earth circuit has a 4 mm² line conductor at 4.61 mΩ/m and a 1.5 mm² CPC at 12.1 mΩ/m. Its measured R1+R2 is 0.20 Ω. Cable length is approximately:",
    options: {
      A: "Approximately 12 metres",
    },
    explanation:
      "Add the line and CPC resistances: 4.61 + 12.1 = 16.71 mΩ/m, or 0.01671 Ω/m. Length = 0.20 Ω ÷ 0.01671 Ω/m = 11.97 m, which rounds to approximately 12 m.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 17,
    promptSuffix:
      "On a TT supply, BS 7671 typical maximum earth electrode resistance for stable, reliable RCD-based fault protection is approximately:",
    correctedPromptSuffix:
      "On a TT supply, an earth-electrode resistance above which BS 7671 warns the value may not be stable and should be investigated is:",
    options: {
      A: "200 Ω, while also satisfying RA × IΔn ≤ 50 V and being as low as practicable",
    },
    explanation:
      "The protective condition is RA × IΔn ≤ 50 V, and the electrode resistance should be as low as practicable. BS 7671 additionally warns that a value exceeding 200 Ω may not remain stable as soil moisture and temperature change.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 19,
    promptSuffix:
      "Inspector finds a circuit's RCD test confirms the test button trips the device but the inspector hasn't measured trip times. Most appropriate action:",
    options: {
      B: "Carry out the current BS 7671 alternating-current test at IΔn and record the operating time; the integral test button alone does not verify field-test performance",
    },
    explanation:
      "The integral button checks the RCD's internal test mechanism, not its measured operating time under the prescribed field test. Current BS 7671 requires an alternating-current test at IΔn, with a general non-delay device operating within 300 ms; 5×IΔn is not required for compliance.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 21,
    promptSuffix:
      "An EICR observation 'BS 1361 fuse on a 30 A ring final, ADS times verified within limit, conductors / terminations sound'. Schedule entry:",
    options: {
      C: "Satisfactory — the fuse type is not a defect when it provides the required overcurrent and fault protection",
    },
    explanation:
      "An older fuse is not unsafe merely because a modern installation might use an MCB or RCBO. With adequate breaking capacity, overcurrent protection, automatic disconnection and sound conductors, there is no safety observation to code.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 22,
    promptSuffix:
      "Inspector finds a non-domestic premises with a metal cable tray (extraneous-conductive-part) used to support insulated cables and not connected to protective earth. Code:",
    correctedPromptSuffix:
      "Inspector finds metal cable containment carrying single-insulated conductors. It can become live if insulation fails, but protective-conductor continuity to it is absent. Code:",
    options: {
      B: "C2 — the exposed-conductive-part has no effective fault-protection path",
    },
    explanation:
      "Metal containment around single-insulated conductors is an exposed-conductive-part because an insulation fault can energise it. Without effective earthing, automatic disconnection is not assured, so the foreseeable fault creates potential danger and warrants C2.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v2",
    questionNumber: 25,
    promptSuffix:
      "Inspector finds a circuit's protective device working at the limit of its operating envelope (Zs at limit, RCD trip times at limit). Most appropriate professional action:",
    options: {
      B: "Record the compliant results accurately, check instrument uncertainty and test conditions, and advise planned improvement only where evidence shows that deterioration could remove the margin",
    },
    explanation:
      "A result at but not above a permitted limit is not automatically C2 or FI. The inspector records the actual value, allows for instrument uncertainty and relevant temperature corrections, and explains any evidence-based maintenance recommendation without inventing a defect.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 1,
    promptSuffix:
      "An inspector finds a hospital theatre circuit's CPC has corroded to a fragile state at the busbar; continuity is intermittent. Code:",
    correctedPromptSuffix:
      "An inspector finds a hospital theatre circuit CPC corroded and intermittently open at the busbar. The connected metal equipment is not live at the time of inspection. Code:",
    options: {
      B: "C2 — the fault-protection path is unreliable and requires urgent repair",
      C: "C1 solely because continuity is intermittent",
      D: "No code because continuity is present some of the time",
    },
    answer: "B",
    explanation:
      "An intermittent CPC may fail when an insulation fault energises the theatre equipment, so the installation is potentially dangerous and C2 applies. C1 needs danger present now, such as accessible metalwork already at a dangerous voltage.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 3,
    promptSuffix:
      "An EICR's Schedule of Test Results shows a circuit with 'IR open circuit' between line and earth. Most appropriate interpretation:",
    options: {
      B: "The resistance is above the instrument's measurable range — record the displayed greater-than value and assess it as satisfactory",
    },
    explanation:
      "An over-range or open-circuit indication during an insulation-resistance test means the resistance exceeds that instrument range; it does not prove literally perfect insulation. Record the actual ‘greater than’ indication, such as >999 MΩ, and assess it against the required minimum.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 7,
    promptSuffix:
      "On a 230 V supply, the prospective short-circuit current at the origin is measured at 1.2 kA. The protective device's breaking capacity must be:",
    correctedPromptSuffix:
      "On a 230 V supply, the prospective short-circuit current at a protective device is measured at 1.2 kA, with no verified upstream backup or conditional short-circuit rating. The device's breaking capacity must be:",
    answer: "A",
    explanation:
      "Without a verified upstream backup or conditional short-circuit rating, the device's rated breaking capacity must be at least the prospective fault current at its point of installation, so the technical minimum here is 1.2 kA. A 6 kA BS EN 60898 device is a common suitable product, but 6 kA is not the value derived from this measurement.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 10,
    promptSuffix:
      "Inspector finds a non-domestic premises with a damaged metal-clad CU door, IP rating compromised. Code:",
    correctedPromptSuffix:
      "A metal-clad distribution-board door in a damp, dusty workshop is damaged so moisture and contamination can enter the enclosure. Internal barriers still prevent access to live parts, but continued ingress can cause tracking or an earth fault. Code:",
    explanation:
      "The failed door no longer protects the board from the damp and dust present in this workshop. Although intact internal barriers mean danger is not present now, contamination can cause insulation failure, tracking or an earth fault, so the condition is potentially dangerous and warrants C2.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 11,
    promptSuffix:
      "On an EICR, an item the inspector cannot definitively assess (e.g. a sealed appliance enclosure that cannot be opened on the day) is most appropriately:",
    correctedPromptSuffix:
      "During an EICR, abnormal heat discolouration is visible around a sealed fixed-equipment enclosure, but the suspected internal safety defect cannot be identified within the agreed inspection limitations. How should it be recorded?",
    options: {
      B: "FI — the observed warning sign could reveal danger or potential danger and needs investigation without delay",
    },
    explanation:
      "FI is justified because there is an observed sign of a possible safety defect, but its nature cannot be determined within the inspection. Mere lack of access without any evidence of a problem would instead be recorded as a limitation or not verified, not FI.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 12,
    promptSuffix:
      "An inspector finds a damaged armoured cable gland on a school's playground supply (cable to outdoor security lighting), inner cores intact. Code (typical):",
    correctedPromptSuffix:
      "A school's outdoor-lighting SWA gland is loose and cracked, cable retention has failed, and the armour used as the circuit CPC has unreliable continuity. The inner cores remain intact and no live part is exposed. Code:",
    options: {
      B: "C2 — the gland's mechanical and armour-earth reliability is impaired",
      C: "C1 even though no live part is exposed",
      D: "No code because the inner cores remain intact",
    },
    answer: "B",
    explanation:
      "The failed gland no longer provides reliable cable retention or CPC continuity through the armour. With no live part exposed, the foreseeable danger arises if the cable moves or an insulation fault occurs, so C2 rather than C1 applies.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 13,
    promptSuffix:
      "Inspector finds a 30 mA RCD that does not respond to the test button or to the multi-function tester. Code:",
    options: {
      B: "C2 — the required residual-current protection is inoperative",
      C: "C1 solely because the RCD has failed its tests",
      D: "No code while no separate fault is present",
    },
    answer: "B",
    explanation:
      "An inoperative RCD removes a required protective measure and is potentially dangerous, so BPG4 supports C2 and urgent replacement. Device failure alone is not danger present; C1 would require an immediate hazard such as accessible live parts.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 14,
    promptSuffix:
      "On a non-domestic EICR, an inspector finds an underground cable's gland-end visibly damp, with corrosion at the gland and basic insulation visibly degraded. Code:",
    correctedPromptSuffix:
      "On a non-domestic EICR, an underground cable gland is damp and corroded and the enclosed basic insulation is visibly degrading, but no live part is exposed or accessible. Code:",
    options: {
      B: "C2 — moisture and deterioration create a foreseeable insulation or earth-continuity failure",
      C: "C1 even though no live part is exposed",
      D: "No code until the insulation fails completely",
    },
    answer: "B",
    explanation:
      "The moisture and corrosion are already degrading electrical insulation and the gland, so a foreseeable fault can create danger and C2 is appropriate. C1 would apply only if the defect had already left an accessible live part or other immediate danger.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 16,
    promptSuffix:
      "Inspector finds a 32 A radial circuit on 6 mm² T+E, run in conduit clipped direct (method 100 in BS 7671 Appendix 4). Cable Iz approximately 47 A. Schedule entry:",
    correctedPromptSuffix:
      "Inspector finds a 32 A radial circuit in 6 mm² twin-and-earth clipped direct using Reference Method C. After applicable correction factors, cable Iz is 47 A. Schedule entry:",
    explanation:
      "The corrected cable capacity of 47 A exceeds the 32 A protective-device rating, so overload coordination is satisfactory. Reference Method C is the clipped-direct method; Method 100 relates to cables above a ceiling with thermal insulation.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 17,
    promptSuffix:
      "An EICR observation 'Plastic CU on combustible (wooden) backboard' in a domestic dwelling, no other defects, current BPG4 typical code:",
    options: {
      C: "No classification code (NC only) where it is not under a wooden staircase or within the sole escape route",
    },
    explanation:
      "Current BPG4 treats an intact plastic consumer unit as NC only when it is not under a wooden staircase or in the sole route of escape. The wooden mounting board alone does not create a coded electrical safety defect; the location or evidence of heat damage could change the assessment.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 19,
    promptSuffix:
      "On a domestic EICR, an inspector finds a metal-clad CU with all RCBOs, surge protection device fitted and working. Outcome (no other observations):",
    explanation:
      "With the protective measures serviceable and no safety observations, the installation is satisfactory within the stated extent and limitations. The next-inspection date must be selected for the actual occupancy, use, condition and any legal regime; ‘domestic’ alone does not impose one universal interval.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 21,
    promptSuffix:
      "An office EICR finds a 230 V mains-fed network switch in a desk-mounted server cabinet, fed via a portable extension lead. Schedule entry:",
    options: {
      B: "No classification code for the fixed installation if its socket is satisfactory; flag any unsafe portable lead separately",
    },
    explanation:
      "The fixed installation ends at the socket-outlet. A portable extension lead is outside the EICR coding scope, so it does not justify C3 on sound fixed wiring; any daisy-chaining, damage or overload should still be reported promptly through the appropriate equipment-safety process.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 22,
    promptSuffix:
      "On a non-domestic premises, the inspector finds a high-fault-level supply with a CU containing 6 kA standard MCBs. Code:",
    correctedPromptSuffix:
      "At a non-domestic distribution board, prospective short-circuit current is measured at 12 kA but its MCBs are rated to break 6 kA. No verified upstream backup or assembly conditional short-circuit rating applies. Code:",
    explanation:
      "With no verified backup or conditional assembly rating, a 6 kA MCB cannot be relied upon to interrupt a 12 kA prospective fault safely. It may rupture or sustain an arc during a fault, so the inadequate breaking capacity is potentially dangerous and warrants C2.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 23,
    promptSuffix:
      "Inspector finds a domestic kitchen with a previously-installed RCBO on the ring final, and a separate non-RCD-protected MCB on the lighting circuit. Modern dwelling. Schedule entry:",
    options: {
      B: "C2 solely because the lighting circuit has no RCD",
      C: "C3 — current BPG4 recommends improvement for a domestic lighting final circuit without additional RCD protection",
    },
    answer: "C",
    explanation:
      "Current BPG4 lists absence of additional RCD protection for a domestic lighting final circuit as C3. It is an improvement to safety rather than a present or foreseeable immediate danger on the facts given; any separate cable-route or bathroom defect must be assessed in its own right.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v3",
    questionNumber: 25,
    promptSuffix:
      "Inspector finds a domestic dwelling EICR with one C2 (missing main bonding to gas service). The remedy is:",
    correctedPromptSuffix:
      "Inspector finds a privately rented dwelling EICR with one C2: missing main bonding to a confirmed extraneous-conductive-part gas service. The remedy is:",
    explanation:
      "Install a correctly sized main protective bonding conductor from the main earthing terminal to the consumer's gas pipe near its entry, use a suitable connection and verify continuity. For an English rented dwelling, the landlord must also obtain and distribute the required written confirmation within the statutory timescale.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 1,
    promptSuffix:
      "An inspector finds a circuit feeding a domestic shower with no RCD protection. The shower is 9.5 kW with cable run partly through stud walls. Code:",
    correctedPromptSuffix:
      "An inspector finds a 9.5 kW domestic shower circuit with no 30 mA RCD protection. The bathroom has no supplementary bonding and the conditions permitting its omission cannot be verified. Code:",
    options: {
      B: "C2 — the required bathroom shock-protection measures are not present",
    },
    explanation:
      "The facts establish more than an older installation lacking a modern improvement: neither 30 mA RCD protection nor the supplementary-bonding conditions needed for the bathroom are available. That leaves a foreseeable shock risk, so C2 and urgent correction are justified.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 4,
    promptSuffix:
      "BS 7671 Section 701 zone for a basin-type shower with rim 1500 mm above the floor: Zone 1 extends to:",
    correctedPromptSuffix:
      "For a shower location where the highest fixed shower head or water outlet is below 2250 mm, the upper horizontal boundary of Zone 1 is:",
    options: {
      B: "2250 mm above finished floor level",
    },
    explanation:
      "The upper boundary of Zone 1 is 2.25 m above finished floor level or the height of the highest fixed shower head or water outlet, whichever is higher. With the outlet below 2.25 m, the correct boundary is therefore 2250 mm.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 5,
    promptSuffix:
      "Inspector finds an EICR Schedule of Inspections marked ✓ on items the inspector did not actually check. The risk is:",
    explanation:
      "A tick is a positive statement that the item was inspected and found acceptable. Using it for unchecked items makes the report inaccurate and can expose the signatory to contractual, professional or legal consequences; the proper entries are the applicable limitation, not verified or not applicable outcome.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 7,
    promptSuffix:
      "Inspector finds a school's electrical isolator that does not actually de-energise the labelled circuit when operated (mis-installed). Code:",
    options: {
      B: "C2 — the misleading isolator can leave a circuit energised during maintenance",
      C: "C1 solely because the isolator is miswired",
      D: "No code if the circuit can be isolated somewhere else",
    },
    answer: "B",
    explanation:
      "A labelled isolator that fails to disconnect its circuit creates a foreseeable maintenance shock risk and is C2. C1 would require immediate danger already present, such as someone exposed to live parts after relying on it; the defective isolation function still needs urgent correction.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 8,
    promptSuffix:
      "Inspector finds a domestic CU with one RCBO that fails the 5×IΔn test (no trip within 40 ms) but passes the 1×IΔn test (300 ms). Code:",
    correctedPromptSuffix:
      "A general non-delay RCBO takes longer than 300 ms during the current BS 7671 alternating-current field test at IΔn. After confirming the test conditions and instrument, code:",
    options: {
      B: "C2 — the required residual-current protection has failed its prescribed field test",
    },
    explanation:
      "Current BS 7671 requires a general non-delay RCD or RCBO to operate within 300 ms at IΔn using an alternating test current. A confirmed failure means the required protective function is unreliable and warrants C2; the obsolete 5×IΔn test is not the compliance criterion.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 9,
    promptSuffix:
      "On a domestic EICR, the inspector finds a circuit's RCBO that has had its test button pressed but the RCBO did not trip. Subsequent live-test instrument confirms inoperative. Code:",
    options: {
      B: "C2 — the required residual-current protective function is inoperative",
      C: "C1 solely because the RCBO is inoperative",
      D: "No code until a separate fault occurs",
    },
    answer: "B",
    explanation:
      "A confirmed inoperative RCBO removes a required protective measure and is potentially dangerous, so C2 applies. The failed device alone is not an immediate exposed-live-part condition; C1 would need danger present now.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 10,
    promptSuffix:
      "An EICR observation 'EICR document set incomplete: Schedule of Inspections present but Schedule of Test Results not held by duty holder' on a previous report. Code on current EICR:",
    options: {
      B: "No classification code solely for the missing old schedule; record previous information unavailable and complete the current inspection and test schedules",
    },
    explanation:
      "A missing schedule from an earlier report is a records gap, not a present electrical danger and not automatically a C3 observation on the current installation. The inspector notes the unavailable history, carries out the agreed current assessment and issues a complete current EICR.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 13,
    promptSuffix:
      "An EICR observation 'Domestic dwelling with mortice-tail bonding clamp on lead water service pipe, mechanically sound, continuity verified'. Code:",
    options: {
      B: "C3 solely because the sound existing clamp is not a newer style",
      D: "No classification code — verified effective bonding is not made unsafe by the clamp's age alone",
    },
    answer: "D",
    explanation:
      "The inspection must judge the connection actually present. Where the clamp is suitable for the pipe, mechanically sound and continuity is verified, its age or style alone does not create a safety improvement requiring C3; damage, looseness or unreliable continuity would change the finding.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 15,
    promptSuffix:
      "On a non-domestic premises EICR, the inspector finds a 3-phase 32 A motor circuit with the motor's earth lug visibly loose, continuity intermittent. Code:",
    options: {
      B: "C2 — the Class I motor's fault-protection path is unreliable",
      C: "C1 solely because continuity is intermittent",
      D: "No code while the motor remains operational",
    },
    answer: "B",
    explanation:
      "The loose earth lug can leave the motor frame without a reliable fault-current path, creating potential danger if insulation fails, so C2 applies. C1 would require the frame to be live or another immediate danger at the time of inspection.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 18,
    promptSuffix:
      "An EICR observation 'Recently installed PV array, no AC isolator label visible'. Code:",
    options: {
      B: "C2 solely because the alternative-source label is missing",
      C: "C3 — provide the required alternative-source and isolation identification",
    },
    answer: "C",
    explanation:
      "BPG4 gives C3 for missing warning notices identifying an alternative or secondary source. The PV system remains an energising source, so clear isolation labelling improves future safety, but absence of the label alone is not evidence of danger present or potential danger.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 20,
    promptSuffix:
      "Inspector finds a school with a recently extended IT room and a new circuit installed without certification. The lack of EIC for the new circuit is recorded as:",
    options: {
      C: "No classification code solely for the missing EIC; inspect and test the existing circuit and report any actual safety defect separately",
      D: "FI automatically, without any observed sign of a possible safety defect",
    },
    explanation:
      "An EICR cannot retrospectively certify another person's design and construction, but missing paperwork alone is not a dangerous installation defect. The circuit is inspected and tested as existing work; FI is used only if an observed issue could reveal danger and cannot be resolved within the inspection.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 21,
    promptSuffix:
      "An EICR observation 'Cable run in trunking with 70% fill factor exceeding BS 7671 reference values'. Code (typical):",
    correctedPromptSuffix:
      "Several loaded circuits share trunking, but no grouping assessment is available and the inspector cannot establish whether their corrected current capacities remain adequate. The unresolved issue could reveal overload danger. Record:",
    options: {
      B: "C2 before establishing that a cable is actually under-protected or overloaded",
      C: "FI — determine grouping, corrected cable capacity and load without delay; use C2 if inadequate protection is confirmed",
    },
    explanation:
      "Trunking fill percentage is not itself a cable-current derating calculation. Because the missing grouping and load assessment could reveal unsafe overload coordination but cannot yet be resolved, FI is appropriate; a confirmed In greater than corrected Iz would then support C2.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 22,
    promptSuffix:
      "Inspector finds a domestic CU with a 30 mA RCD that protects the entire installation (one main RCD). Half the circuits are non-essential. Code:",
    options: {
      D: "No classification code (NC only) where the RCD operates correctly",
    },
    explanation:
      "If the RCD operates correctly and the installation is otherwise safe, one RCD covering the whole installation is not a coded defect. Current BPG4 lists inadequate circuit division of this kind as NC only; modern RCBO division may improve convenience but does not justify C3 without a safety reason.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 23,
    promptSuffix:
      "An EICR observation 'Damaged sheath at entry to switch box; basic insulation intact; cable not flexing'. Code:",
    options: {
      B: "C2 even though the insulated cores cannot be touched or contact metalwork",
      C: "C3 — restore the sheath or entry protection before deterioration progresses",
    },
    answer: "C",
    explanation:
      "BPG4 gives C3 where an insulated-and-sheathed cable's sheath does not enter an enclosure but its insulated cores are neither accessible nor likely to touch metalwork. If cores could be touched or contact metalwork, the same defect would warrant C2.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v4",
    questionNumber: 25,
    promptSuffix:
      "On a non-domestic site, the duty holder shows the inspector remediation evidence (invoices, photographs) for previous C2 items but no written confirmation from a qualified person. The inspector should:",
    options: {
      B: "Inspect and test the remediated items within the new EICR scope and base the outcome on current evidence; advise the duty holder to retain any work certification that should have been issued",
    },
    explanation:
      "Invoices and photographs do not prove the electrical condition, while non-domestic law does not impose the rented-sector written-confirmation process. The new inspector verifies the relevant work directly and uses those findings for the current report, noting any genuinely missing work certificate separately.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 1,
    promptSuffix:
      "An inspector finds an agricultural building's outdoor distribution board with seal failure and active water ingress, basic insulation visibly degrading. Code:",
    correctedPromptSuffix:
      "An agricultural building's outdoor distribution board has failed seals, active water ingress and visibly degrading enclosed insulation, but no live part is exposed or accessible. Code:",
    options: {
      B: "C2 — water ingress and insulation deterioration are potentially dangerous",
      C: "C1 even though no live part is exposed",
      D: "No code until the board fails completely",
    },
    answer: "B",
    explanation:
      "Active moisture and deteriorating insulation create a foreseeable earth fault, shock or fire risk, so C2 and urgent remedial action are appropriate. C1 would require danger present now, such as accessible exposed live parts or active arcing.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 5,
    promptSuffix:
      "Inspector finds a domestic dwelling with a 100 A main switch fed from the DNO supply, with neutral conductor visibly broken at the cut-out (sealed by the DNO). The inspector should:",
    options: {
      B: "Do not disturb the sealed cut-out; warn the client and notify the network operator urgently via 105",
    },
    explanation:
      "Do not interfere with the sealed cut-out. Warn the person ordering the report and contact the network operator urgently through 105; mark the intake item unacceptable and describe it in the report. Ownership beyond the cut-out can be split between the network operator, supplier or meter operator and customer, so the inspector should report the intake defect to the appropriate party rather than claiming every tail belongs to the DNO. Under current BPG4, an intake defect does not determine the EICR outcome unless it gives access to live parts.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 7,
    promptSuffix:
      "Inspector finds a domestic CU with three RCBOs and three MCBs. The MCB-protected circuits feed kitchen socket-outlets. Code:",
    options: {
      A: "C3 — improve the kitchen socket circuits with 30 mA RCD protection where no additional risk makes them potentially dangerous",
      B: "C2 solely because ordinary kitchen sockets lack RCD protection",
    },
    answer: "A",
    explanation:
      "Current BPG4 gives C3 where a socket-outlet lacks additional RCD protection but is unlikely to supply outdoor equipment, is not in a bathroom and presents no other potential danger. Kitchen use alone does not make the omission C2; outdoor use or another hazard can change the assessment.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 10,
    promptSuffix:
      "An EICR observation 'Bathroom Zone 1 luminaire with IP44 rating' on a domestic dwelling. Schedule entry:",
    correctedPromptSuffix:
      "A fixed Zone 1 bathroom luminaire is manufacturer-suitable, correctly connected and 30 mA RCD-protected. Water jets are not likely. Its enclosure is marked IP44. How should its ingress protection be recorded?",
    options: {
      C: "Satisfactory for the stated Zone 1 ingress requirement — IP44 includes IPX4 protection",
    },
    explanation:
      "Where water jets are not likely, Zone 1 equipment needs at least IPX4 water protection; IP44 includes IPX4 and therefore satisfies that stated ingress requirement. IP44 alone would not prove the whole installation compliant: equipment suitability, connection, RCD protection and manufacturer instructions still have to be checked, and IPX5 is needed where water jets are likely.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 11,
    promptSuffix:
      "Inspector finds a non-domestic premises with a main switch fitted as a single-pole device on a 230 V single-phase supply. Code:",
    correctedPromptSuffix:
      "Inspector finds a non-domestic TT installation with a single-pole main switch that disconnects line but leaves neutral connected. Code:",
    explanation:
      "A TT installation requires the neutral to be disconnected for isolation because it cannot be assumed to remain reliably at Earth potential. A single-pole main switch therefore fails to provide the required isolation and is potentially dangerous, warranting C2; TN arrangements are assessed differently.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 12,
    promptSuffix:
      "Inspector finds a domestic dwelling with a 30 mA RCD providing additional protection, trip times 1×IΔn 290 ms, 5×IΔn 38 ms. Schedule entry:",
    correctedPromptSuffix:
      "A general non-delay 30 mA RCD operates in 290 ms during the current BS 7671 alternating-current field test at IΔn. Schedule entry:",
    options: {
      C: "Satisfactory — 290 ms is within the 300 ms maximum at IΔn",
    },
    explanation:
      "Current BS 7671 requires one alternating-current field test at IΔn, and a general non-delay RCD must operate within 300 ms. The 290 ms result complies, though it should be recorded accurately; a 5×IΔn test is no longer required to prove compliance.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 13,
    promptSuffix:
      "An EICR observation 'Damaged extension lead in domestic kitchen, basic insulation visibly compromised'. Schedule entry:",
    explanation:
      "A portable extension lead is outside the fixed-installation EICR coding scope, so no C1, C2 or C3 is placed on the EICR for it. Accessible damaged insulation is still an immediate equipment hazard: unplug or isolate it if authorised, warn the user and report it separately.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 15,
    promptSuffix:
      "On a 100 A PME supply with fault level 16 kA at the origin, the protective devices' breaking capacity must be:",
    correctedPromptSuffix:
      "On a 100 A PME supply, prospective fault current at the protective devices is 16 kA and no verified upstream backup or assembly conditional short-circuit rating applies. Their breaking capacity must be:",
    explanation:
      "Without verified backup protection or a conditional assembly rating, each device must have a breaking capacity at least equal to the 16 kA prospective fault current at its location. A lower device rating can be acceptable only when tested and documented coordination with an upstream device or assembly provides the required conditional short-circuit rating.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 17,
    promptSuffix:
      "An EICR observation 'Bonding clamp on confirmed extraneous-conductive-part metallic gas pipe is loose, oxidised, but continuity intact'. Code:",
    options: {
      B: "C2 — the main protective bonding connection is not mechanically reliable",
      C: "C1 solely because the clamp is loose",
      D: "No code while one continuity reading is obtained",
    },
    answer: "B",
    explanation:
      "A loose and oxidised main-bonding connection cannot be relied upon to carry fault or diverted current when needed, so it is potentially dangerous and C2 applies even if a momentary test finds continuity. C1 would require immediate danger, such as the pipe already at a dangerous voltage.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 18,
    promptSuffix:
      "On a domestic EICR, the inspector finds a circuit's MCB rating mismatched with a label that says different rating (label says 16 A, MCB is 32 A). Code:",
    options: {
      A: "C3 — correct the circuit identification where the 32 A device is otherwise suitable for the circuit",
      B: "C2 solely because the label states 16 A",
    },
    answer: "A",
    explanation:
      "BPG4 gives C3 for absent or incorrect circuit identification because accurate labels improve the safety of future isolation and maintenance. The label mismatch alone does not prove that the 32 A device under-protects the cable; any actual rating defect would be assessed separately and could warrant C2.",
  },
  {
    examId: "periodic-inspection",
    variantId: "v5",
    questionNumber: 25,
    promptSuffix:
      "An EICR observation 'Inspector confirms all circuits inspected and tested per the agreed scope; one C2 (missing main bonding) and three C3 (improvement recommendations)'. Outcome and duty holder action under PRS Regs 2020:",
    options: {
      B: "Unsatisfactory because of the C2. Complete remedial work within 28 days of inspection, or any shorter period in the report; within 28 days of completion give the report and qualified-person confirmation to the tenant and local council. C3 items remain recommendations",
    },
    explanation:
      "The C2 makes the report unsatisfactory. For a covered rented home in England, remedial work must be completed within 28 days of inspection or any shorter period stated in the report. Within 28 days of completion, the landlord gives the report and qualified-person confirmation to both the tenant and local council. C3 items remain improvement recommendations without that remedial deadline.",
  },
] as const satisfies readonly ExamQuestionCorrection[];
